define([], function() {
  
  // 配置
  require.config({
    // 基础路径
    baseUrl : './',

    // 设置路径别名
    paths : {
      // 模块名    路径名
    //    配置自己的 js 模块别名
      advertAdd : 'js/advert/advert_add',
      advertList : 'js/advert/advert_list',
      courseAdd1 : 'js/course/course_add_step1',
      courseAdd2 : 'js/course/course_add_step2',
      courseAdd3 : 'js/course/course_add_step3',
      courseAdd : 'js/course/course_add',
      courseCategoryAdd : 'js/course/course_category_add',
      courseCategory : 'js/course/course_category',
      courseList : 'js/advert/course_list',
      courseTopic : 'js/advert/course_topic',
      login : 'js/home/login',
      repass :　'js/home/repass',
      settings : 'js/home/settings',
      teacherAdd : 'js/teacher/teacher_add',      
      teacherList : 'js/advert/teacher_list',
      userProfile : 'js/user/user_profile',
      userList : 'js/user/user_list',

      // 配置第三方 js 模块别名
      template : 'lib/artTemplate/template-debug',
      bootstrap : 'lib/bootstrap/js/boostrap',
      datepicker : 'lib/bootstrap-datapicker/js/boostrap-datapicker',
      ckeditor : 'lib/ckeditor/ckeditor',
      ckeditorLand : 'lib/ckeditor/lang/zh-cn',
      echarts : 'lib/echarts/echarts.min',
      jquery : 'lib/jquery/jquery.min',
      jqueryCookie : 'lib/jquery-cookie/jquery.cookie',
      jqueryFrom : 'lib/jquery-form/jquery.form',
      jqueryRegion : 'lib/jquery-region/jquery.region',
      nprogress : 'lib/nprogress/nprogress',

    },

    // 配置 非 defined 定义的模块
    shim : {
      // boostrap 是非 define 定义的模块, 又做
      bootstrap : {
        // 依赖
        deps : ['jquery']
      }
    }

  })


  // 根据页面加载对应的 js 模块
});