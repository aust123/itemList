<template>
    <div>
         <Header :noSearch='0'><span slot="title">入库单详情</span></Header>   
    <div class="order-detail-content">
      <p class="order-list-title"><img src="../../assets/imgs/sellorder_icon_orderid.png" alt="">入库单号：{{instorageDetailInfo.eps_number}}
      <span  class="status" v-if="instorageDetailInfo.eps_state==1">待入库</span>
      <span  class="status" v-else-if="instorageDetailInfo.eps_state==2">已入库</span>
      <span  class="status" v-else-if="instorageDetailInfo.eps_state==3">已取消</span>
      </p>
      <h3 class="item-title">货品信息<span>{{instorageDetailInfo.storage_generation_time}}</span></h3>
      <section class="detail-info">
        <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{instorageDetailInfo.eps_product_stage}}</b><b>{{instorageDetailInfo.eps_product_name}}</b>
        <!-- <span>安徽省纸元网络科技</span> -->
        </p>
       
      </section>
        <h3 class="item-title">入库信息</h3>
        <section class="settle-info">
          <table>            
              <tr class="table-title">
              <td>车牌</td>
              <td>司磅净重</td>
              <td>仓库</td>
              <td>货位</td>             
            </tr> 
            <tr class="table-content">
              <td>{{instorageDetailInfo.eli_plate_number}}</td>
              <td>{{instorageDetailInfo.eps_net_weight}}</td>
              <td>{{instorageDetailInfo.eps_storehouse_name}}</td>
              <td>{{instorageDetailInfo.eps_product_allocation_number}}</td>             
            </tr>            
          </table>
        
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
              <td>{{instorageDetailInfo.eli_plate_number}}</td>
              <td>{{instorageDetailInfo.eli_driver_name}}</td>            
              <td>{{instorageDetailInfo.eli_driver_phone}}</td>
            </tr>
          </table>
        </section>
        <h3 class="item-title">订单信息</h3>
         <section class="orderdetail-info">         
          <p>结算单：{{instorageDetailInfo.epo_number}}</p>
          <p>发起人：{{instorageDetailInfo.epo_sale_name}}</p>
          <p>操作人：{{instorageDetailInfo.eps_operator_name}}</p>         
          <p>发起时间：{{instorageDetailInfo.order_generation_time}}</p>         
        </section>        
        <p class="detail-option">  <router-link :to="{path:'/stockIn',query:{sid:instorageDetailInfo.eps_storehouse_id,oid:oid}}"  v-if="instorageDetailInfo.eps_state==1">入库</router-link></p>
      
       
    </div>
             
    </div>
</template>
<script>
import Header from'../../components/header'
import api from "@/axios/api.js";
export default {
   components: {
    Header
  },
  data() {
    return {
      orderId: "",
      instorageDetailInfo: {},
      oid:''
    };
  },
  created() {
    this.oid = this.$route.query.oid
  },
  activated(){
    this.getdata();
  },
  methods: {
    getdata() {
        this.orderId = this.$route.query.oid;
    let params = {
      eo_id: 1,
      type:'',
      eps_id: this.orderId
    };
    api.getInstorageDetail(params).then(res => {
      console.log(res);
      if (res.status_code == 10000) {
        this.instorageDetailInfo = res.data;
      }
    });
    },
    change($index) {},
    makeSure() {}
  }
};
</script>
<style lang="css" src="../../assets/css/orderdetail.css" scoped>
