import axios from 'axios';
import router from '../router'
import vue from 'vue'
import qs from 'qs';
import {
  md5
} from 'vux'

axios.defaults.baseURL = 'https://cloud.zhiqunale.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//发送数据前数据处理
axios.interceptors.request.use(config => {
  //post请求数据序列化
 // config.method == 'post'
  if (config.method.toLowerCase() === 'post') {
      // console.log(11)
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

export function ajax(url, params) { //import { ajax } from '../axios/api.js'  ajax('url',data)
  params.sign = serialize(params);
  //console.log(params)
  return new Promise((reslove, reject) => {
    axios.post(url, params).then(response => {
    //console.log(response.data)
      reslove(response.data);
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

export default {
  uploadImage(params) { //上传图片
    return ajax('cloud/img/receivePcFile', params)
  },
  frzzySearch(params) { //模糊搜索
    return ajax('cloud/saleorder/getselectlist', params)
  },
  homeShow(params) { //首页
    return ajax('cloud/index/getindexinfo', params)
  },
  billingSmcg(params) { //上门采购订单发起
    return ajax('cloud/purchaseorder/doortodoorpurchaseorderlaunch', params)
  },
  purchaseLogistics(params) { //获取采购订单物流信息
    return ajax('cloud/purchaseorder/getpurchaseorderlogisticinfo', params)
  },
  addPurchaseLogistics(params) { //添加或编辑采购订单物流信息
    return ajax('cloud/purchaseorder/addoreditlogisticinfo', params)
  },
  billingSmmh(params) { //上门卖货采购订单发起
    return ajax('cloud/purchaseorder/doortodoorsellpurchaseorderlaunch', params)
  },
  billingSale(params) { //销售订单发起
    return ajax('cloud/saleorder/orderlaunch', params)
  },
  getSettlement(params) { //上传结算单前获取结算信息
    return ajax('cloud/saleorder/beforeaction', params)
  },
  uploadSettle(params) { //上传或编辑销售订单结算清单信息
    return ajax('cloud/saleorder/uploadoreditsalesettleinfo', params)
  },
  submitSettle(params) { //提交结算信息
    return ajax('cloud/saleorder/submitsettleinfo', params)
  },
  getsettledetail(params) { //获取结算单详情
    return ajax('cloud/balance/getsettledetail', params)
  },
  suretosettle(params) { //确认结算
    return ajax('cloud/balance/suretosettle', params)
  },
  qualitydetail(params) { //获取质检单详情
    return ajax('cloud/qualitycheck/qualitydetail', params)
  },
  writequalitybill(params) { //质检单录入
    return ajax('cloud/qualitycheck/writequalitybill', params)
  },
  stockInDetail(params) { //获取入库单详细
    return ajax('Cloud/Warehousing/get_warehousing_betails', params)
  },
  access_to_goods_list(params) { //获取货位列表
    return ajax('Cloud/OutOfTheTreasury/access_to_goods_list', params)
  },
  stockInSure(params) { //入库确认
    return ajax('Cloud/Warehousing/confirmation_of_warehousing', params)
  },
  stockOutDetail(params) { //获取出库单详细
    return ajax('/Cloud/OutOfTheTreasury/obtaining_order_information', params)
  },
  stockOutAdd(params) { //添加出库明细
    return ajax('/Cloud/OutOfTheTreasury/add_out_the_storehouse', params)
  },
  stockOutDelete(params) { //删除出库明细
    return ajax('/Cloud/OutOfTheTreasury/del_out_the_storehouse', params)
  },
  stockOutEdit(params) { //修改出库明细
    return ajax('/Cloud/OutOfTheTreasury/save_out_the_storehouse', params)
  },
  stockOutSure(params) { //出库确认
    return ajax('/Cloud/OutOfTheTreasury/out_of_the_treasury', params)
  },
  invoice_list(params) { //发货单详情
    return ajax('/Cloud/DeliverGoods/get_invoice_details', params)
  },
  addLogistics(params) { //添加物流信息
    return ajax('/Cloud/DeliverGoods/add_logistics_information', params)
  },
  getLogisticsDetail(params) { //获取物流详情
    return ajax('/Cloud/DeliverGoods/get_logistics_details', params)
  },
  editLogistics(params) { //修改物流信息
    return ajax('/Cloud/DeliverGoods/save_logistics_information', params)
  },
  sureLogistics(params) { //确认发货
    return ajax('/Cloud/DeliverGoods/confirmation_of_delivery', params)
  },


  Login(params) { // import ajax from '../axios/api.js'   ajax.Login(params)
    return ajax('cloud/index/loginerp', params)
  },
  getSelectList(type) { //获取销售/采购选择列表
    return ajax('cloud/saleorder/getselectlist', type)
  },
  getSearchInfo(params) { //获取销售/采购选择列表
    return ajax('cloud/saleorder/getsearchinfo', params)
  },
  getSearchType(type) { //获取搜索页搜索类型
    return ajax('cloud/saleorder/getsearchtypelist', type)
  },
  getSearchResult(params) { //根据关键字获取搜索结果
    return ajax('cloud/saleorder/getsearchresult', params)
  },
  clearHistorySearchList(params) { //清空搜索记录
    return ajax('cloud/saleorder/clearhistorysearchlist', params)
  },
  getOrderList(params) { //获取订单列表
    return ajax('cloud/saleorder/getorderlist', params)
  },
  getSaleOrderDetail(params) { //获取销售订单详情
    return ajax('cloud/saleorder/getsaleorderdetail', params)
  },
  confirmOrder(params) { //确认订单
    return ajax('cloud/saleorder/confirmorder', params)
  },
  cancelOrder(params) { //取消订单
    return ajax('cloud/saleorder/cancelorder', params)
  },
  getOrderFollowRecord(params) { //获取订单跟踪日志
    return ajax('cloud/saleorder/getorderfollowrecord', params)
  },
  getOrderInfoBeforeSettle(params) { //上传结算单前获取结算信息
    return ajax('cloud/saleorder/beforeaction', params)
  },
  saleOrderSettleInfo(params) { //上传或编辑销售订单结算清单信息
    return ajax('cloud/saleorder/uploadoreditsalesettleinfo', params)
  },
  doorPurchaseStart(params) { //上门采购订单发起
    return ajax('cloud/purchaseorder/doortodoorpurchaseorderlaunch', params)
  },
  getPurchaseLogisticInfo(params) { //获取采购订单物流信息
    return ajax('cloud/purchaseorder/getpurchaseorderlogisticinfo', params)
  },
  addOrEditPurchaseLogisticInfo(params) { //添加或编辑采购订单物流信息
    return ajax('cloud/purchaseorder/addoreditlogisticinfo', params)
  },
  doorSalePurchaseStart(params) { //上门卖货采购订单发起
    return ajax('cloud/purchaseorder/doortodoorsellpurchaseorderlaunch', params)
  },
  getPurchaseOrderDetail(params) { //获取采购订单详情
    return ajax('cloud/purchaseorder/getpurchaseorderdetail', params)
  },

  //质检接口
  getQualityCheckList(params) { //获取质检列表
    return ajax('cloud/qualitycheck/getqualitychecklist', params)
  },
  getQualitySearchType(params) { //获取质检单的搜索类型
    return ajax('cloud/qualitycheck/getqualitysearchtype', params)
  },

  getQualitySearchInfo(params) { //获取搜索页信息（质检单）
    return ajax('cloud/qualitycheck/getqualitysearchinfo', params)
  },
  getQualityHistoryInfo(params) { //获取搜索历史记录（质检单）
    return ajax('cloud/qualitycheck/getqualityhistoryinfo', params)
  },
  clearQualityHistorySearchList(params) { //清空搜索历史记录（质检单）
    return ajax('cloud/qualitycheck/clearqualityhistorysearchlist', params)
  },
  getQualityListByKeywords(params) { //根据关键词获取质检单列表
    return ajax('cloud/qualitycheck/getqualitylistbykeywords', params)
  },
  writeQualityBill(params) { //质检单录入）
    return ajax('cloud/qualitycheck/writequalitybill', params)
  },
  getQualityDetail(params) { //获取质检单详情
    return ajax('cloud/qualitycheck/qualitydetail', params)
  },
  //结算单
  getBalanceList(params) { //获取结算单列表
    return ajax('cloud/balance/getbalancelist', params)
  },
  getBalanceSearchType(params) { //获取结算单的搜索类型
    return ajax('cloud/balance/getbalancesearchtype', params)
  },
  getBalanceSearchInfo(params) { //获取搜索页信息（结算单）
    return ajax('cloud/balance/getbalancesearchinfo', params)
  },
  getBalanceHistoryInfo(params) { //获取搜索历史记录（结算单）
    return ajax('cloud/balance/getbalancehistoryinfo', params)
  },
  clearBalanceHistorySearchList(params) { //清空搜索历史记录（结算单）
    return ajax('cloud/balance/clearbalancehistorysearchlist', params)
  },
  getBalanceListByKeywords(params) { //根据关键词获取结算单列表）
    return ajax('cloud/balance/getbalancelistbykeywords', params)
  },
  sureToSettle(params) { //确认结算
    return ajax('cloud/balance/suretosettle', params)
  },
  getSettleDetail(params) { //获取结算单详情
    return ajax('cloud/balance/getsettledetail', params)
  },
  //出库
  getOutStorageList(params) { //出库单列表/搜索
    return ajax('Cloud/OutOfTheTreasury/out_of_the_treasury_list', params)
  },
  getGoodsPositionList(params) { //获取货位列表
    return ajax('Cloud/OutOfTheTreasury/access_to_goods_list', params)
  },
  getOutStorageDetail(params) { //获取出库单详细
    return ajax('/Cloud/OutOfTheTreasury/obtaining_order_information', params)
  },
  addOutStorageDetail(params) { //添加出库明细
    return ajax('Cloud/OutOfTheTreasury/add_out_the_storehouse', params)
  },
  editOutStorageDetail(params) { //修改出库明细
    return ajax('Cloud/OutOfTheTreasury/save_out_the_storehouse', params)
  },
  getOutStorageDetailDetails(params) { //获取出库明细详情
    return ajax('Cloud/OutOfTheTreasury/get_out_of_the_storehouse', params)
  },
  confirmOutStorage(params) { //出库确认
    return ajax('Cloud/OutOfTheTreasury/out_of_the_treasury', params)
  },
  getOutStorageSearchInfo(params) { //获取出库单搜索关键字
    return ajax('Cloud/OutOfTheTreasury/fuzzy_matching', params)
  },
  //入库
  getInstorageListAndSearch(params) { //入库单列表/搜索
    return ajax('Cloud/Warehousing/warehousing_list', params)
  },
  getInstorageDetail(params) { //获取入库单详细
    return ajax('Cloud/Warehousing/get_warehousing_betails', params)
  },
  confirmInstorageOrder(params) { //入库确认
    return ajax('Cloud/Warehousing/confirmation_of_warehousing', params)
  },
  getInstorageSearchInfo(params) { //获取入库单搜索关键字
    return ajax('Cloud/Warehousing/fuzzy_matching', params)
  },
  //发货
  getSendListAndSearch(params) { //发货单列表/搜索
    return ajax('Cloud/DeliverGoods/invoice_list', params)
  },
  getSendOrderDetail(params) { //发货单详情
    return ajax('Cloud/DeliverGoods/get_invoice_details', params)
  },
  addSendlogisticsInfo(params) { //添加物流信息
    return ajax('Cloud/DeliverGoods/add_logistics_information', params)
  },
  editSendlogisticsInfo(params) { //修改物流信息
    return ajax('Cloud/DeliverGoods/save_logistics_information', params)
  },
  confirmSend(params) { //确认发货
    return ajax('Cloud/DeliverGoods/confirmation_of_delivery', params)
  },
  getSendLogisticsDetail(params) { //获取物流详情
    return ajax('Cloud/DeliverGoods/get_logistics_details', params)
  },
  getSendOrderSearchInfo(params) { //获取发货单搜索关键字
    return ajax('Cloud/DeliverGoods/fuzzy_matching', params)
  },
  uploadSearchHistory(params) { //上传搜索历史记录
    return ajax('Cloud/DeliverGoods/set_historical_records', params)
  },
  getSearchHistory(params) { //获取搜索历史记录
    return ajax('Cloud/DeliverGoods/get_historical_records', params)
  }
}
