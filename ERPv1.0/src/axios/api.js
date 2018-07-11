import axios from 'axios';
import qs from 'qs';
import {md5} from 'vux'

axios.defaults.baseURL = 'http://192.168.0.180:8888';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//发送数据前数据处理
axios.interceptors.request.use(config => {
 // console.log(config)
  //post请求数据序列化
  if (config.methods == 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, error => {
  return Promise.reject(error);
})
//返回数据的处理
axios.interceptors.response.use(res => {
  return Promise.resolve(res);
}, err => {
  return Promise.reject(err)
})

export function ajax(url, params) {//import { ajax } from '../axios/api.js'  ajax('url',data)
    params.sign = serialize(params);
    console.log(params)
  return new Promise((reslove, reject) => {
    axios.post(url, params).then(response => {
      reslove(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}

export default{
    Login(params){ // import ajax from '../axios/api.js'   ajax.Login(params)
        return ajax('/cloud/saleorder/getselectlist',params)
    }
}

function serialize(arr) {
  var secret = "key=pass4zhiqunale";
  var param = [];
  for (var k in arr) {
    param.push(k)
  }
  param.sort();
  var str = '';
  for (var key in param) {
    str += param[key] + '=' + arr[param[key]] + '&'
  }
  str += secret;
  return md5(str);
}
