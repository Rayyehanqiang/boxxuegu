define(['jquery','jqueryCookie'], function ($) {

// 登录校验
// (function() {
//   if (!)
// })();




  //  表单提交
  (function () {
    // 监听表单提交事件 submit
    $('#login-form').on('submit', function () {
      // serialize 是 jquery的方法, 先转为 jq对象 ==> $(this)
      // console.log($(this).serialize());
      // console.log($(this).serializeArray());

      // 点击时 发送 ajax 请求
      $.ajax({
        type: 'post',
        url: '/v6/login',
        data: $(this).serialize(),
        // 成功时 跳转到首页
        success: function (data) {
          console.log(data);
          //  判断请求状态是否成功,   如果是,就跳转首页
          if (data.code == 200) {
            // 把返回的用户信息保存到 cookie 中, 供其他页面使用
            // 注意设置 path 属性, 不然默认为当前路径, 其他页面无法使用
            $.cookie('useInfo', JSON.stringify(data.result), {
              path: '/'
            });

            // 获取URL 地址
            location.href = '/'
          }
        },

        // 失败时 弹框显示点击信息
        error: function () {
          // 看有什么参数
          alert(arguments[2]);
        }
      })

      //   阻止表单默认提交事件 ==> jquery 的方法
      return false;
    })
  })();

});