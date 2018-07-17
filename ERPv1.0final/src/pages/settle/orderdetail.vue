<template>
    <div>
        <Header :noSearch='0' backurl='/settlelist'><span slot="title">结算单详情</span></Header>  
        <div class="order-detail-content">  
        <p class="order-list-title">
          <img  src="../../assets/imgs/sellorder_icon_orderid.png" alt="">         
          结算单号：{{settle_data.es_number}}
          <span class="status" v-if="settle_data.es_state==1">待质检</span>
          <span class="status" v-else-if="settle_data.es_state==2">已质检</span>
          <span class="status" v-else-if="settle_data.es_state==3">已取消</span>
        </p>
        <h3 class="item-title">货品信息<span class="date" v-if="settle_data.es_state==1">{{settle_data.es_settle_time}}</span></h3>
      <section class="detail-info">
        <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{settle_data.es_product_stage}}</b><b>{{settle_data.es_product_name}}</b><span>{{settle_data.es_supplier_name}}</span></p>
       
      </section>
      <h3 class="item-title">质检信息</h3>
        <section class="settle-info">
          <table>            
              <tr class="table-title">
              <td>车牌</td>
              <td>含水扣点</td>
              <td>含杂扣点</td>
              <td>毛重</td>
              <td>结算单价</td>
            </tr> 
            <tr class="table-content">
              <td>{{logistics_data.eli_plate_number}}</td>
              <td>{{settle_data.es_settle_watery}}%</td>
              <td>{{settle_data.es_settle_trash}}</td>
              <td>{{settle_data.es_rough_weight}}</td>
              <td>{{settle_data.es_per_price}}</td>
            </tr>             
          </table>        
        </section>
        <h3 class="item-title">结算信息</h3>
        <section class="settle-info">
          <table>            
              <tr class="table-title">
              <td>车牌</td>
              <td>结算净重</td>
              <td>扣点</td>
              <td>结算单价</td>
              <td>结算总价</td>
            </tr> 
            <tr class="table-content">
              <td>{{logistics_data.eli_plate_number}}</td>
              <td>{{settle_data.es_net_weight}}%</td>
              <td>{{settle_data.eqc_quality_trash}}</td>
              <td>{{settle_data.es_per_price}}</td>
              <td>{{settle_data.es_settle_total_money}}</td>
            </tr>             
          </table>
        <p>其他扣除：<span>￥{{settle_data.es_other_deductions}}</span></p>
       <p>扣除原因：<span v-if="settle_data.es_other_deductions_remark">{{settle_data.es_other_deductions_remark}}</span><span v-else class="nodatatips">暂无</span></p>
       <p style="padding-bottom:10px">应付金额：<span class="total">￥{{settle_data.es_pay_money}}</span></p>
        </section>
        <h3 class="item-title">物流信息</h3>
         <section class="wuliu-info">
           <table>
            <tr class="table-title">
              <td>车牌</td>
              <td>司机</td>              
              <td>手机</td>
            </tr>
            <tr class="table-content">
              <td>{{logistics_data.eli_plate_number}}</td>
              <td>{{logistics_data.eli_driver_name}}</td>              
              <td>{{logistics_data.eli_driver_phone}}</td>
            </tr>
          </table>
        </section>
        <h3 class="item-title">订单信息</h3>
         <section class="orderdetail-info">          
          <p>质检单：{{settle_data.eqc_number}}</p>
          <p>订单发起人：{{order_data.e_name}}</p>         
          <p>操作人：{{order_data.c_name}}</p>
          <p>生成时间：{{order_data.created_at }}</p>
          <!-- <p v-if="settle_data.eqc_state==2">质检时间：{{quality_data.created_at}}</p>  
          <p v-if="settle_data.eqc_state==3">取消时间：</p>          -->
        </section>        
        <p class="detail-option" ><router-link  :to="{path:'/accountSure',query:{oid:settle_data.es_order_id,sid:sid,path:$route.fullPath}}">结算</router-link></p>
       </div>   
    </div>
</template>
<script>
import Header from "../../components/header";
import api from "@/axios/api.js";
export default {
  components: {
    Header
  },
  data() {
    return {
      orderId: "",
      checkOrderDetailInfo: {},
      logistics_data: {},
      order_data: {},
      settle_data: {},
      sid:''
    };
  },
  created() {
    this.sid = this.$route.query.oid;
  },
  activated(){
    this.getdata();
  },
  methods: {
    getdata() {
        this.orderId = this.$route.query.oid;
    let params = {
      uid: this.cookie.getCookie('uid'),
      settle_id: this.orderId
    };
    api.getSettleDetail(params).then(res => {
      console.log(res);
      if (res.status_code == 10000) {
        this.logistics_data = res.logistics_data;
        this.order_data = res.order_data;
        this.settle_data = res.settle_data;
      }
    });
    },
    change($index) {},
    makeSure() {}
  }
};
</script>
<style lang="css" src="../../assets/css/orderdetail.css" scoped>