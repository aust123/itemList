<template>
    <div>
        <Header :noSearch='0' backurl='/checklist'><span slot="title">质检单详情</span></Header>
        <div class="order-detail-content"> 
        <p class="order-list-title">
          <img v-if="order_data.epo_source==1" src="../../assets/imgs/buyorder_icon_buy.png" alt="">
          <img v-else-if="order_data.epo_source==2" src="../../assets/imgs/buyorder_icon_sell.png" alt="">
          订单号：{{quality_data.eqc_number}}
          <span class="status" v-if="quality_data.eqc_state==1">待质检</span>
          <span class="status" v-else-if="quality_data.eqc_state==2">已质检</span>
          <span class="status" v-else-if="quality_data.eqc_state==3">已取消</span>
        </p>
        <h3 class="item-title">货品信息<span class="date">{{quality_data.created_at}}</span></h3>
      <section class="detail-info">
        <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{order_data.epo_product_stage}}</b><b>{{order_data.epo_product_name}}</b>
        <!-- <span>{{order_data.epo_supplier_name}}</span> -->
        </p>
       
      </section>
        <h3 class="item-title">结算信息</h3>
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
              <td>{{quality_data.eqc_quality_watery}}</td>
              <td>{{quality_data.eqc_quality_trash}}</td>
              <td>{{quality_data.eqc_quality_amount}}</td>
              <td>{{quality_data.eqc_quality_per_price}}</td>
            </tr>             
          </table>
        <p>其他扣除：<span>￥{{quality_data.eqc_other_deductions}}</span></p>
       <p>扣除原因：<span v-if="quality_data.eqc_other_deductions_remark">{{quality_data.eqc_other_deductions_remark}}</span><span v-else class="nodatatips">暂无</span></p>
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
          <p>关联订单：{{order_data.epo_number}}</p>
          <p v-if="order_data.epo_launch==1">订单发起：客户</p>
          <p v-else-if="order_data.epo_launch==2">订单发起：平台</p>
          <p>操作人：{{order_data.epo_operator_name}}</p>
          <p>生成时间：{{order_data.created_at }}</p>
          <p v-if="quality_data.eqc_state==2">质检时间：{{quality_data.created_at}}</p>  
          <p v-if="quality_data.eqc_state==3">取消时间：</p>         
        </section>        
        <p class="detail-option" v-if="quality_data.eqc_state==1"><router-link  :to="{path:'/inspection',query:{oid:quality_data.eqc_id,path:$route.fullPath}}" class="jiesuan">质检录入</router-link></p>
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
      quality_data: {}
    };
  },
  created() {
    this.getdata();
  },
 
  methods: {
    getdata() {
        this.orderId = this.$route.query.oid;
    let params = {
      uid: this.cookie.getCookie('uid'),
      quality_id: this.orderId
    };
    api.getQualityDetail(params).then(res => {
      ///console.log(res);
      if (res.status_code == 10000) {
        this.logistics_data = res.logistics_data;
        this.order_data = res.order_data;
        this.quality_data = res.quality_data;
      }
    });
    },
    change($index) {},
    makeSure() {}
  }
};
</script>
<style lang="css" src="../../assets/css/orderdetail.css" scoped>