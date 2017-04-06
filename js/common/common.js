/* =============== js 原生版 ============ */

// define([], function () {
// //   /**
// //    * 判断用户有没登录过,
// //    * 没有的话跳转到登录页
// //    */

//   var cookieArr = document.cookie.split('; ');
//   var isLogin = false;

//   // 必须是所有的 cookie, 都没有 PHPSESSID, 才算没有登录过,
//   //  那么打回到登录页面

//   for (var i = 0; i < cookieArr.length; i++) {

//     // 存在, 那么证明登陆过, 结束循环结构
//     if (cookieArr[i].indexOf('PHPSESSID=') === 0) {
//       isLogin = true;
//       break;
//     }
//   }

//   // 如果没有登录过, 打到登录页面
//   !isLogin && (Location.href = '/html/home/login.html');
// });


/*=================== 插件版 ===============  */

/**
 * jquery cookie 是 define 定义的模块, 但是像这种 jquery插件,
 * 他们提供的功能放置到 jquery原型或
 */

define(['jquery', 'jqueryCookie'], function ($, undefined) {
    //  如果没有 PHPSESSID 这个 cookie, 证明没有登陆过, 跳转到登陆页面
    if (!$.cookie('PHPSESSID')) {
      location.href = '/html/home/login.html';
    }
});