// 退出登录
define(['jquery'], function ($) {
  $('#layout').on('click', function() {
    $.post('/v6/logout', function(data) {
      // 如果状态 为 200 ,就退到 首页

      console.log(data);
      // if (data.code === 200) {
      //   location.href = '/';
      // }
    })
  })
});