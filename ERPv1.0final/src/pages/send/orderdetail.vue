<template>
    <div>
         <Header :noSearch='0' backurl='/sendlist'><span slot="title">发货单详情</span></Header>   
    <div class="order-detail-content">
      <p class="order-list-title"><img src="../../assets/imgs/sellorder_icon_orderid.png" alt="">发货单号：{{sendDetailInfo.ego_number}}
        <span class="status" v-if="sendDetailInfo.ego_state==1">待发货</span>
        <span class="status" v-else-if="sendDetailInfo.ego_state==2">已发货</span>
        <span class="status" v-if="sendDetailInfo.ego_state==3">已取消</span>
      </p>
      <h3 class="item-title">{{sendDetailInfo.paper_name}}<span>{{sendDetailInfo.ego_created_at}}</span></h3>
      <section class="detail-info">
        <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{sendDetailInfo.ego_product_stage}}</b><b>{{sendDetailInfo.ego_product_name}}</b><span>{{sendDetailInfo.ego_send_amount}}</span></p>
       
      </section>
        <h3 class="item-title">出库信息</h3>
        <section class="settle-info">
          <table>            
              <tr class="table-title">
              <td>仓库</td>
              <td>货位</td>
              <td>重量</td>
              <td>单价</td>
              <td>出库小计</td>
            </tr> 
            <tr class="table-content" v-for="(subitem,sunindex) in sendDetailInfo.storehouse_ppl" :key="sunindex">
              <td>{{sendDetailInfo.esh_name}}</td>
              <td>{{subitem.sh_product_allocation_number}}</td>
              <td>{{subitem.sh_delivery_total_amount}}</td>
              <td>{{sendDetailInfo.ego_send_per_price}}</td>
              <td>{{subitem.sh_delivery_total_amount*sendDetailInfo.ego_send_per_price}}</td>
            </tr>
             <tr class="table-end send">
              <td></td>
              <td>合计</td>
              <td>{{totalCount}}</td>
              <td></td>
              <td>{{totalCount*sendDetailInfo.ego_send_per_price}}</td>
            </tr>
          </table>       
        </section>
        <h3 class="item-title">物流信息</h3>
         <section class="wuliu-info">
           <table>
            <tr class="table-title">
              <td>车牌</td>
              <td>司机</td>
              <td>车载重量</td>
              <td>手机</td>
            </tr>
            <tr class="table-content" v-for="(subitem,sunindex) in sendDetailInfo.logistics_info" :key="sunindex">
              <td>{{subitem.eli_plate_number}}</td>
              <td>{{subitem.eli_driver_name}}</td>
              <td>{{subitem.eli_entruck_amount}}</td>
              <td>{{subitem.eli_driver_phone}}</td>
            </tr>
          </table>
        </section>
        <h3 class="item-title">订单信息</h3>
         <section class="orderdetail-info">
         
          <p>结算单：{{sendDetailInfo.eso_number}}</p>
          <p>订单发起：{{sendDetailInfo.eso_sale_name}}</p>
          <p>操作人：{{sendDetailInfo.ego_operator_name}}</p>
          <p>生成时间：{{sendDetailInfo.eso_created_at}}</p>        
        </section>   
        
        <p class="detail-option"> <router-link :to="{path:'/delivery',query:{oid:sendDetailInfo.ego_id}}" class="order-sure"  v-if="sendDetailInfo.ego_state==1">发货</router-link></p>
        <!-- <Modal @confirm='makeSure' :show='isShow' :tip='tip' :title='title'></Modal>  -->
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
      sendDetailInfo: {},
      oid:'',
      totalCount:0,
      totalMoney:0
    };
  },
  created() {
    this.getdata();
    this.oid = this.$route.query.oid
  },
  activated(){
    //this.getdata();
  },
  methods: {
    getdata() {
        this.orderId = this.$route.query.oid;
    let params = {
      eo_id:this.cookie.getCookie('uid'),
      type:2,
      ego_id:this.orderId
    };
    api.getSendOrderDetail(params).then(res => {
      console.log(res);
      if (res.status_code == 10000) {
         this.sendDetailInfo = res.data;
         res.data.storehouse_ppl.forEach((item,index) => {
          this.totalCount += parseInt(item['sh_delivery_total_amount']);         
        });   
      }
    });
    }    
  }
};
</script>
<style lang="css" src="../../assets/css/orderdetail.css" scoped>
