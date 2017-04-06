	/**
	 * 1、获取本地存储的用户信息
	 * 2、把用户信息解析为js对象方便使用
	 * 3、拼接用户信息模版字符串
	 * 4、调用模版引擎的compile方法编译这个模版字符串，得到一个渲染函数
	 * 5、调用渲染函数，把要渲染的数据传入进去，就会得到一个完整的html
	 * 6、最后把这个html替换到页面指定位置
	 * */

	define(['jquery', 'jqueryCookie', 'template'], function ($, undefined, template) {

	  //  左上角的用户信息展示
	  (function () {

	    // 1.获取本地存储的用户信息
	    var userCookie = $.cookie('userInfo');
	    var userInfoObj;

	    //  2、把用户信息解析为js对象方便使用
	    //      错误捕获
	    try {
	      // 对将要错误的地方捕获
	      userInfoObj = JSON.parse(userCookie);
	    } catch (e) {
	      // 变成对象 ==> 后面处理的数据是 对象
	      userInfoObj = {};
	    }

	    // 3、拼接用户信息模版字符串
	    var userString =
	      '<div class="profile">' +
	          '<div class="avatar img-circle">' +
	             ' <img src="{{ tc_avatar? tc_avatar : "/img/default.png"}}">' +
	          '</div>' +
	         '<h4>{{tc_name}}</h4>' +
	      ' </div>';

	    // 4、调用模版引擎的compile方法编译这个模版字符串，得到一个渲染函数
	    var temRender = template.compile(userString);

	    // 5、调用渲染函数，把要渲染的数据传入进去，就会得到一个完整的html
	    var userHtml = temRender(userInfoObj);

	    // 6、最后把这个html替换到页面指定位置
	    $('.aside').prepend(userHtml);
	  })();

	  // 导航栏下拉列表
	  (function () {
	    // 点击时, 它下面的列表 下拉展开
	    $('.navside').on('click', function () {
	      $(this).next().slideToggle();
	    })
	  })();


	});