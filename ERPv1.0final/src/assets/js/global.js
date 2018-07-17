/**
 * Created by Administrator on 2018/7/9.
 */

exports.install = function (Vue, options) {
  //验证手机号（11位数字）
  Vue.prototype.checkPhone=function(val){
    if(/^\d{11}$/.test(val)){
      return true
    }
  }
  //验证重量（整数或小数点后3位）
  Vue.prototype.checkWeight=function(val){
    if(val!=''&&(/^\d+(\.\d{1,3})?$/).test(val)){
      return true
    }
  }
  //验证价格（整数或小数点后2位）
  Vue.prototype.checkPrice=function(val){
    if(val!=''&&(/^\d+(\.\d{1,2})?$/).test(val)){
      return true
    }
  }
  //验证身份证号（18位的字符串）
  Vue.prototype.checkCardId=function(val){
    if((/^.{18}$/).test(val)){
      return true
    }
  }
  //验证含水、含杂扣点（ 0-100 的整数或小数点后2位）
  Vue.prototype.checkKd=function(val){
    if((/^(\d|[0-9]\d|100)(\.\d{1,2})?$/).test(val)){
      return true
    }
  }

};
