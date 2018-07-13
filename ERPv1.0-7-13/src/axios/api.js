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
    getOrderInfoBeforeSettle(params){//上传结算单前获取结算信息
      return ajax('cloud/saleorder/beforeaction',params)
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

    //质检接口
    getQualityCheckList(params){//获取质检列表
      return ajax('cloud/qualitycheck/getqualitychecklist',params)
    },
    getQualitySearchType(params){//获取质检单的搜索类型
      return ajax('cloud/qualitycheck/getqualitysearchtype',params)
    },
    
    getQualitySearchInfo(params){//获取搜索页信息（质检单）
      return ajax('cloud/qualitycheck/getqualitysearchinfo',params)
    },
    getQualityHistoryInfo(params){//获取搜索历史记录（质检单）
      return ajax('cloud/qualitycheck/getqualityhistoryinfo',params)
    },
    clearQualityHistorySearchList(params){//清空搜索历史记录（质检单）
      return ajax('cloud/qualitycheck/clearqualityhistorysearchlist',params)
    },
    getQualityListByKeywords(params){//清空搜索历史记录（质检单）
      return ajax('cloud/qualitycheck/getqualitylistbykeywords',params)
    },
    writeQualityBill(params){//质检单录入）
      return ajax('cloud/qualitycheck/writequalitybill',params)
    },
    getQualityDetail(params){//获取质检单详情
      return ajax('cloud/qualitycheck/qualitydetail',params)
    },
    //结算单
    getBalanceList(params){//获取结算单列表
      return ajax('cloud/balance/getbalancelist',params)
    },
    getBalanceSearchType(params){//获取结算单的搜索类型
      return ajax('cloud/balance/getbalancesearchtype',params)
    },
    getBalanceSearchInfo(params){//获取搜索页信息（结算单）
      return ajax('cloud/balance/getbalancesearchinfo',params)
    },
    getBalanceHistoryInfo(params){//获取搜索历史记录（结算单）
      return ajax('cloud/balance/getbalancehistoryinfo',params)
    },
    clearBalanceHistorySearchList(params){//清空搜索历史记录（结算单）
      return ajax('cloud/balance/clearbalancehistorysearchlist',params)
    },
    getBalanceListByKeywords(params){//根据关键词获取结算单列表）
      return ajax('cloud/balance/getbalancelistbykeywords',params)
    },
    sureToSettle(params){//确认结算
      return ajax('cloud/balance/suretosettle',params)
    },
    getSettleDetail(params){//获取结算单详情
      return ajax('cloud/balance/getsettledetail',params)
    },
    //出库
    getOutStorageList(params){//出库单列表/搜索
      return ajax('Cloud/OutOfTheTreasury/out_of_the_treasury_list',params)
    },
    getGoodsPositionList(params){//获取货位列表
      return ajax('Cloud/OutOfTheTreasury/access_to_goods_list',params)
    },
    getOutStorageDetail(params){//获取出库单详细
      return ajax('Cloud/OutOfTheTreasury/access_to_goods_list',params)
    },
    addOutStorageDetail(params){//添加出库明细
      return ajax('Cloud/OutOfTheTreasury/add_out_the_storehouse',params)
    },
    editOutStorageDetail(params){//修改出库明细
      return ajax('Cloud/OutOfTheTreasury/save_out_the_storehouse',params)
    },
    getOutStorageDetailDetails(params){//获取出库明细详情
      return ajax('Cloud/OutOfTheTreasury/get_out_of_the_storehouse',params)
    },
    confirmOutStorage(params){//出库确认
      return ajax('Cloud/OutOfTheTreasury/out_of_the_treasury',params)
    },
    getOutStorageSearchKey(params){//获取出库单搜索关键字
      return ajax('Cloud/OutOfTheTreasury/fuzzy_matching',params)
    },
}


