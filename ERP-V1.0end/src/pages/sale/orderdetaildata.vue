<template>

    <div class="order-detail-content">
      <!-- 销售订单 -->
      <template v-if="orderType==1">
            <p class="order-list-title">
            <img src="../../assets/imgs/sellorder_icon_orderid.png" alt="">订单号：{{orderDetailData.order_number}}
            <span v-if="orderDetailData.order_state==1" class="status">待确认</span>
            <span v-if="orderDetailData.order_state==2" class="status">待出库</span>
            <span v-if="orderDetailData.order_state==3" class="status">待发货</span>
            <span v-if="orderDetailData.order_state==4" class="status">已发货</span>
            <span v-if="orderDetailData.order_state==5" class="status">待收款</span>
            <span v-if="orderDetailData.order_state==6" class="status">已完成</span>
            <span v-if="orderDetailData.order_state==7" class="status">已取消</span>
          </p>
          <h3 class="item-title">货品信息<span>{{orderDetailData.order_create_time|setDateFormat}}</span></h3>
            <section class="detail-info">
              <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{orderDetailData.product_stage}}</b><b>{{orderDetailData.product_name}}</b><span>{{orderDetailData.paper_name}}</span></p>

              <p>发货量：<span>{{orderDetailData.product_weight}}</span><b class="unit">吨</b></p>
              <p>发货单价：<span>{{orderDetailData.per_price}}</span><b class="unit">元/吨</b></p>
              <p>发货总价：<span class="total">￥{{orderDetailData.send_total_money}}</span></p>
            </section>
            <!-- 结算信息在待出库、待发货、已发货状态不显示 -->
            <template v-if="orderDetailData.order_state != 1 && orderDetailData.order_state != 2 && orderDetailData.order_state != 3 && orderDetailData.order_state != 4">
              <h3 class="item-title">结算信息</h3>
              <section class="settle-info">
                <table>
                    <tr class="table-title">
                    <td>车牌</td>
                    <td>扣点</td>
                    <td>结算重量</td>
                    <td>结算单价</td>
                    <td>结算小计</td>
                  </tr>
                  <tr  v-for="(item,index) in orderDetailData.settle_info" :key="index"  class="table-content">
                    <td>{{item.plate_number}}</td>
                    <td>{{item.total_deductions}}</td>
                    <td>{{item.settle_weight}}</td>
                    <td>{{item.per_price}}</td>
                    <td>{{item.settle_money}}</td>
                  </tr>
                    <tr class="table-end">
                    <td></td>
                    <td>合计</td>
                    <td>{{orderDetailData.settle_total_weight}}</td>
                    <td></td>
                    <td>{{orderDetailData.settle_total_money}}</td>
                  </tr>
                </table>
              <p>其他扣除：<span>￥{{orderDetailData.settle_total_deductions}}</span></p>
              <p>应收合计：<span class="total">￥{{orderDetailData.settle_finally_money}}</span></p>
              </section>
            </template>
        <!-- 物流信息在待出库状态不显示 -->
              <template v-if="orderDetailData.order_state != 2">
                    <h3 class="item-title">物流信息</h3>
                    <section class="wuliu-info">
                      <table>
                        <tr class="table-title">
                          <td>车牌</td>
                          <td>司机</td>
                          <td>发货重量</td>
                          <td>手机</td>
                        </tr>
                        <tr class="table-content" v-for="(item,index) in orderDetailData.driver_info" :key="index">
                          <td>{{item.plate_number}}</td>
                          <td>{{item.driver_name}}</td>
                          <td>{{item.send_weight}}</td>
                          <td>{{item.driver_phone}}</td>
                        </tr>
                      </table>
                    </section>
              </template>
            <h3 class="item-title">订单信息</h3>
            <section class="orderdetail-info">
              <p>订单类型：销售订单</p>
              <p>关联审批对象：{{orderDetailData.audit_number}}</p>
              <p>生成时间：{{orderDetailData.order_create_time}}</p>
              <!-- 判断订单状态是否是已取消 -->
              <template v-if="orderDetailData.order_state !=7">
                <!-- 待确认时不显示 -->
                <p v-if="orderDetailData.order_state !=1 ">确认时间：{{orderDetailData.confirm_time}}</p>
                <!-- 待确认、待出库时不显示 -->
                <template v-if="orderDetailData.order_state !=1 && orderDetailData.order_state !=2">
                  <p>出库时间：{{orderDetailData.deliver_time}}</p>
                </template>
                <!-- 待确认、待出库、待发货时不显示 -->
                <template v-if="orderDetailData.order_state !=1 && orderDetailData.order_state !=2 && orderDetailData.order_state !=3">
                  <p>发货时间：{{orderDetailData.send_time}}</p>
                </template>
                <!-- 待确认、待出库、待发货、已发货时不显示 -->
                <template v-if="orderDetailData.order_state ==5 || orderDetailData.order_state ==6">
                  <p>结算时间：{{orderDetailData.settle_time}}</p>
                </template>
                <!-- 已完成时显示 -->
                <p v-if="orderDetailData.order_state==6">完成时间：2018-6-30 10:30:00</p>
              </template>
              <!-- 订单为已取消状态时显示 -->
              <template v-else >
                <p>取消时间：{{orderDetailData.cancel_time}}</p>
                <p>操作人：{{orderDetailData.cancel_operator}}</p>
                <p>取消原因：{{orderDetailData.cancel_reason}}</p>
              </template>
            </section>
        <!-- 订单在待确认状态时 确认/取消 操作按钮 -->
            <template v-if="orderDetailData.order_state==1">
              <p class="detail-option"><a class="cancel" href="javascript:;" @click="confirmOrder(orderDetailData.order_id,0)">取消</a><a  href="javascript:;" @click="confirmOrder(orderDetailData.order_id,1)">确认</a></p>

            </template>
        <!-- 订单在已发货状态时显示  上传结算单 操作按钮 -->
            <template v-if="orderDetailData.order_state==4">
                <p class="detail-option"><router-link :to="{path:'/settlements',query:{oid:orderDetailData.order_id,otype:1,path:$route.fullPath}}" class="jiesuan" >上传结算单</router-link></p>
            </template>
      </template>

      <!-- 采购订单 -->
      <template v-else>
            <p class="order-list-title">
              <img v-if="orderDetailData.order_source==1" src="../../assets/imgs/buyorder_icon_buy.png" alt="">
              <img v-if="orderDetailData.order_source==2" src="../../assets/imgs/buyorder_icon_sell.png" alt="">
              订单号：{{orderDetailData.order_number}}
              <span v-if="orderDetailData.order_state==1" class="status">待确认</span>
              <span v-if="orderDetailData.order_state==2" class="status">待质检</span>
              <span v-if="orderDetailData.order_state==3" class="status">待结算</span>
              <span v-if="orderDetailData.order_state==4" class="status">待入库</span>
              <span v-if="orderDetailData.order_state==5" class="status">待付款</span>
              <span v-if="orderDetailData.order_state==6" class="status">已完成</span>
              <span v-if="orderDetailData.order_state==7" class="status">已取消</span>
            </p>
            <h3 class="item-title">货品信息<span>{{orderDetailData.order_create_time|setDateFormat}}</span></h3>
            <section class="detail-info">
              <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{orderDetailData.product_stage}}</b><b>{{orderDetailData.product_name}}</b><span>{{orderDetailData.supplier_name}}</span></p>
<!--
              <p>采购量：<span>{{orderDetailData.purchase_weight}}</span><b class="unit">吨</b></p>
              <p>采购单价：<span>{{orderDetailData.per_price}}</span><b class="unit">元/吨</b></p>
              <p>采购总价：<span class="total">￥{{orderDetailData.total_money}}</span></p> -->
            </section>
      <!-- 结算信息在待出库、待发货、已发货状态不显示 -->
            <template v-if="orderDetailData.order_state != 1 && orderDetailData.order_state != 2 && orderDetailData.order_state != 3 && orderDetailData.order_state != 6">
              <h3 class="item-title">结算信息</h3>
              <section class="settle-info">
                <table>
                    <tr class="table-title">
                    <td>车牌</td>
                    <td>扣点</td>
                    <td>结算重量</td>
                    <td>结算单价</td>
                    <td>结算小计</td>
                  </tr>
                  <tr  v-for="(item,index) in orderDetailData.settle_info" :key="index"  class="table-content">
                    <td>{{item.plate_number}}</td>
                    <td>{{item.total_deductions}}</td>
                    <td>{{item.settle_weight}}</td>
                    <td>{{item.per_price}}</td>
                    <td>{{item.settle_money}}</td>
                  </tr>
                    <tr class="table-end">
                    <td></td>
                    <td>合计</td>
                    <td>{{orderDetailData.settle_total_weight}}</td>
                    <td></td>
                    <td>{{orderDetailData.settle_total_money}}</td>
                  </tr>
                </table>
              <p>其他扣除：<span>￥{{orderDetailData.settle_total_deductions}}</span></p>
              <p>应收合计：<span class="total">￥{{orderDetailData.settle_finally_money}}</span></p>
              </section>
            </template>
        <!-- 物流信息 -->
              <template >
                  <!-- <template v-if="orderDetailData.driver_info.length>0">    -->
                      <h3 class="item-title">物流信息</h3>
                      <section class="wuliu-info">
                        <table>
                          <tr class="table-title">
                            <td>车牌</td>
                            <td>司机</td>
                            <td>发货重量</td>
                            <td>手机</td>
                          </tr>
                          <tr class="table-content" v-for="(item,index) in orderDetailData.driver_info" :key="index">
                            <td>{{item.plate_number}}</td>
                            <td>{{item.driver_name}}</td>
                            <td>{{item.product_weight}}</td>
                            <td>{{item.driver_phone}}</td>
                          </tr>
                        </table>
                      </section>
                  <!-- </template> -->
              </template>
              <h3 class="item-title">订单信息</h3>
              <section class="orderdetail-info">
                <p>订单类型：采购订单</p>
                <p>生成时间：{{orderDetailData.order_create_time}}</p>
                <!-- 判断订单状态是否是已取消 -->
                <template v-if="orderDetailData.order_state !=7">
                  <!-- 待确认和已取消不显示 -->
                  <template v-if="orderDetailData.order_state !=1&& orderDetailData.order_state !=7">
                    <p>确认时间：{{orderDetailData.confirm_time}}</p>
                  </template>
                  <template v-if="orderDetailData.order_state !=1&& orderDetailData.order_state !=2">
                      <p>质检开始：{{orderDetailData.quality_start_time}}</p>
                      <p>质检完成：{{orderDetailData.quality_end_time}}</p>
                  </template>
                  <template v-if="orderDetailData.order_state !=1&& orderDetailData.order_state !=2&& orderDetailData.order_state !=3">
                      <p>结算完成：{{orderDetailData.settle_time}}</p>
                  </template>
                  <template v-if="orderDetailData.order_state ==5||orderDetailData.order_state ==6">
                      <p>入库完成：{{orderDetailData.put_in_time}}</p>
                  </template>
                  <template v-if="orderDetailData.order_state ==6">
                    <p>付款完成：{{orderDetailData.pay_time}}</p>
                    <p>完成时间：{{orderDetailData.finish_time}}</p>
                  </template>
                </template>
                <!-- 订单为已取消状态时显示 -->
                <template v-else >
                  <p>取消时间：{{orderDetailData.cancel_time}}</p>
                  <p>操作人：{{orderDetailData.cancel_operator}}</p>
                  <p>取消原因：{{orderDetailData.cancel_reason}}</p>
                </template>
              </section>
        <!-- 订单在待确认状态时 确认/取消 操作按钮 -->
            <template v-if="orderDetailData.order_state==1">
              <p class="detail-option"><a class="cancel" href="javascript:;" @click="confirmOrder(orderDetailData.order_id,0)">取消</a><a  href="javascript:;" @click="confirmOrder(orderDetailData.order_id,1)">确认</a></p>
            </template>
        <!-- 订单在已发货状态时显示  上传结算单 操作按钮 -->
            <template v-if="orderDetailData.order_state==4&&orderType==1">
                <p class="detail-option"><router-link :to="{path:'/settlements',query:{oid:orderDetailData.order_id,otype:1,path:$route.fullPath}}" class="jiesuan" >上传结算单</router-link></p>
            </template>
      </template>

      <Modal @confirm='makeSure' :show='isShow'>
            <p slot="title">{{Tiptitle}}</p>
            <p slot="tip">{{tip}}</p>
      </Modal>
       <tip :tipmsg="tipMsg"></tip>
    </div>
</template>
<script>
import Modal from "@/components/modal";
import api from "@/axios/api.js";
import tip from '@/components/tip/tip.vue'
export default {
  components: {
    Modal,tip
  },
  data() {
    return {
      isShow: 0,
      tip: "",
      Tiptitle: "",
      orderDetailData: {},
      orderId: "",
      orderType: "",
      titles: "",
       tipMsg:['',false]
    };
  },
  created(){
    this.orderId = this.$route.query.oid;
    this.orderType = this.$route.query.type;
     this.getDetailData();
  },
  activated() {

  },
  filters: {
    setDateFormat(val) {
      if (typeof val == "string") {
        return val.toString().substring(0, 10);
      }
    }
  },
  methods: {
    getDetailData() {
      let params = {
        user_id: this.cookie.getCookie("uid"),
        order_id: this.orderId
      };
      if (this.orderType == 1) {
        api.getSaleOrderDetail(params).then(res => {
          if (res.status_code == 10000) {
            this.orderDetailData = res.data;
          }
        });
      } else {
        api.getPurchaseOrderDetail(params).then(res => {
          if (res.status_code == 10000) {
            this.orderDetailData = res.data;
          }
        });
      }
    },
    makeSure(val) {
      //点击模态框确认最终提交
      //根据传递的val(0/1)执行操作
      if (val && this.Tiptitle.includes("确认")) getConfirmOrder(); //确认订单
      if (val && this.Tiptitle.includes("取消")) getCancelOrder(); //确认取消订单
      this.isShow = 0;
    },
    getConfirmOrder() {
      let params = {
        uid: this.cookie.getCookie("uid"),
        order_type: this.orderType,
        order_id: this.orderId
      };
      api.confirmOrder(params).then(res => {
        if (res.status_code == 10000) {
          this.tipMsg=[res.msg,true];
        }
      });
    },
    getCancelOrder() {
      let params = {
        uid: this.cookie.getCookie("uid"),
        order_type: this.orderType,
        order_id: this.orderId,
        cancel_reason: "取消" //取消原因默认
      };
      api.cancelOrder(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
         this.tipMsg=[res.msg,true];
        }
      });
    },
    confirmOrder(oid, isconfirm) {
      //点击确认按钮显示模态框
      this.Tiptitle = isconfirm ? "订单确认" : "订单取消";
      this.tip = isconfirm
        ? "你即将确认订单，是否继续?"
        : "你即将取消订单，是否继续?";
      this.orderId = oid; //订单id
      this.isShow = 1;
    },
    makeSure(val) {
      //根据传递的val(0/1)执行操作
      this.isShow = 0;
    }
  }
};
</script>
<style lang="css" src="../../assets/css/orderdetail.css" scoped>
