// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
//UI组件——选择日期、省市区、页面滚动加载更多
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)
//scroller组件
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
//路由
import router from './router'
//字体px自动转化为rem
import 'lib-flexible'
//md5参数加密
import { md5 } from 'vux'

//图片压缩
import lrz from 'lrz'
//页面
import App from './App'

Vue.config.productionTip = false;

//全局函数——请求数据
Vue.prototype.post = function ($data, $url, $fun) {
  $data.sign = getUrl($data) //将sign拼接成请求的data对象
 console.log($data);
  jQuery.support.cors = true;
  $.ajax({
    type: "post",
    dataType: "json",
    crossDomain: true,
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    url: $url,
    data: $data,
    async: true,
    success: function(data) {
    	console.log(data)
      return $fun(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log(JSON.stringify(XMLHttpRequest));
      console.log(JSON.stringify(textStatus));
      console.log(errorThrown);
    }
  });

  function getUrl(arr) {
    var secret = "key=pass4zhiqunale";
    var param = [];
    for(var k in arr) {
      param.push(k)
    }
    param.sort();
    var str = '';
    for(var key in param) {
      str += param[key] + '=' + arr[param[key]] + '&'
    }
    str += secret;
    return md5(str);
  }
}
//全局函数——上传图片
Vue.prototype.upLoadImg = function (e) {
  //上传图片
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length){
    return;
  }
  createImage(e,files[0]);
  function createImage(event,file) {
    var image = new Image();
    var reader = new FileReader();
    reader.onload = (e) => {
      lrz(e.target.result)
        .then(function (rst) {
          // 处理成功会执行
          $.ajax({
            type: 'post',
            url: 'https://two.zhiqunale.cn/paper/img/receivePcFile',
            data: {
              pic: rst.base64
            },
            success: function(data) {
              var html = '<li class="simg"><img src="https://two.zhiqunale.cn/'+ data.data + '"/></li>';
              $($(event.target).parents('.detail-upload').siblings('.upload-list')).append(html);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
              alert('图片上传失败');
            }
          });
        })
        .catch(function (err) {
          // 处理失败会执行
          alert('图片上传失败');
        })
    };
    reader.readAsDataURL(file);
  }
}
//时间戳转换为时间
//var time = getLocalTime(1500666666);
Date.prototype.format = function(format) {
	var date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	if(/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for(var k in date) {
		if(new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
				date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
}
Vue.prototype.getLocalTimes=function(nS) {
	var dat = new Date(parseInt(nS) * 1000).format("M月dd日 hh:mm");
	return dat;
}
Vue.prototype.getLocalTime=function(nS) {
	var dat = new Date(parseInt(nS) * 1000).format("YYYY.MM.dd");
	return dat;
}
Vue.prototype.getLocalTime1=function(nS) {
	var dat = new Date(parseInt(nS) * 1000).format("YYYY-MM-dd");
	return dat;
}

//日期转化为时间戳
Vue.prototype.DateToUnix=function(string) {
	var f = string.split(' ', 2);
	var d = (f[0] ? f[0] : '').split('-', 3);
	var t = (f[1] ? f[1] : '').split(':', 3);
	var time = (new Date(
		parseInt(d[0], 10) || null,
		(parseInt(d[1], 10) || 1) - 1,
		parseInt(d[2], 10) || null,
		parseInt(t[0], 10) || null,
		parseInt(t[1], 10) || null,
		parseInt(t[2], 10) || null
	)).getTime() / 1000
	return time;
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store,
  components: { App },
  template: '<App/>',
  data:{
    eventHub:new Vue()
  }
})


