import axios from 'axios';
import qs from 'qs';
import {md5} from 'vux'

axios.defaults.baseURL = 'http://192.168.0.180:8888';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//发送数据前数据处理
axios.interceptors.request.use(config => {
 //console.log(config)
  //post请求数据序列化
  //config.method.toLowerCase() === 'post'
  //config.method == 'post'
  if (config.method.toLowerCase() === 'post') {   
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
//获取sign值
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

export default{
    // Login(params){ // import ajax from '../axios/api.js'   ajax.Login(params)
    //     return ajax('/cloud/saleorder/getselectlist',params)
    // },
    getSelectList(type){//获取销售/采购选择列表
      return ajax('cloud/saleorder/getselectlist',type)
    },
    getSearchType(type){//获取搜索页搜索类型
      return ajax('cloud/saleorder/getsearchtypelist',type)
    },
    getSearchResult(params){//根据关键字获取搜索结果
      return ajax('cloud/saleorder/getsearchresult',params)
    },
    clearHistorySearchList(params){//清空搜索记录
      return ajax('cloud/saleorder/clearhistorysearchlist',params)
    },
    getOrderList(params){//获取订单列表
      return ajax('cloud/saleorder/getorderlist',params)
    },
    getSaleOrderDetail(params){//获取销售订单详情
      return ajax('cloud/saleorder/getsaleorderdetail',params)
    },
    confirmOrder(params){//确认订单
      return ajax('cloud/saleorder/confirmorder',params)
    },
    cancelOrder(params){//取消订单
      return ajax('cloud/saleorder/cancelorder',params)
    },
    getOrderFollowRecord(params){//获取订单跟踪日志
      return ajax('cloud/saleorder/getorderfollowrecord',params)
    },
    saleOrderSettleInfo(params){//上传或编辑销售订单结算清单信息
      return ajax('cloud/saleorder/uploadoreditsalesettleinfo',params)
    },
    doorPurchaseStart(params){//上门采购订单发起
      return ajax('cloud/purchaseorder/doortodoorpurchaseorderlaunch',params)
    },
    getPurchaseLogisticInfo(params){//获取采购订单物流信息
      return ajax('cloud/purchaseorder/getpurchaseorderlogisticinfo',params)
    },
    addOrEditPurchaseLogisticInfo(params){//添加或编辑采购订单物流信息
      return ajax('cloud/purchaseorder/addoreditlogisticinfo',params)
    },
   doorSalePurchaseStart(params){//上门卖货采购订单发起
      return ajax('cloud/purchaseorder/doortodoorsellpurchaseorderlaunch',params)
    },
    getPurchaseOrderDetail(params){//上门卖货采购订单发起
      return ajax('cloud/purchaseorder/getpurchaseorderdetail',params)
    },
    //cloud/purchaseorder/getpurchaseorderdetail
}


