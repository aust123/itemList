// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper' 
import cookie from './assets/js/cookie.js'
Vue.use(cookie)
//轮播
import 'swiper/dist/css/swiper.css'
//图片压缩
import lrz from 'lrz'
//全局变量
import global from './components/Global'
Vue.prototype.global=global
//全局函数
import base from './assets/js/global.js'//引用
Vue.use(base);//将全局函数当做插件来进行注册

Vue.use(VueAwesomeSwiper)
import 'lib-flexible/flexible'


router.beforeEach((to, from, next) => {
  // to and from are both route objects
 document.title = to.meta.title;
   next();
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
