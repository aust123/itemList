<template>
    <div>
         <Header :noSearch='0' backurl='/outstoragelist'><span slot="title" >出库单详情</span></Header>   
    <div class="order-detail-content">
      <p class="order-list-title"><img src="../../assets/imgs/sellorder_icon_orderid.png" alt="">{{outstorageDetailInfo.eso_number}}
        <span class="status"  v-if="outstorageDetailInfo.edo_state==1">待出库</span>
        <span class="status"  v-else-if="outstorageDetailInfo.edo_state==2">已出库</span>
        <span class="status"  v-else-if="outstorageDetailInfo.edo_state==3">已取消</span>
      </p>
      <h3 class="item-title">{{outstorageDetailInfo.eso_paper_name}}<span>{{outstorageDetailInfo.edo_created_at}}</span></h3>
      <section class="detail-info">
        <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{outstorageDetailInfo.edo_product_stage}}</b><b>{{outstorageDetailInfo.edo_product_name}}</b>
        <span>{{outstorageDetailInfo.edo_should_delivery_amount}}</span>
        </p>
       
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
            <tr class="table-content" v-for="(subitem,subindex) in outstorageDetailInfo.storehouse_ppl" :key="subindex">
              <td>{{outstorageDetailInfo.edo_storehouse_name}}</td>
              <td>{{subitem.sh_product_allocation_number}}</td>
              <td>{{subitem.sh_delivery_total_amount}}</td>
              <td>{{outstorageDetailInfo.edo_delivery_per_price}}</td>
              <td>{{outstorageDetailInfo.edo_delivery_per_price*subitem.sh_delivery_total_amount}}</td>
            </tr>
             <tr class="table-end send">
              <td></td>
              <td>合计</td>
              <td>{{totalCount}}</td>
              <td></td>
              <td>{{totalCount*outstorageDetailInfo.edo_delivery_per_price}}</td>
            </tr>
          </table>      
        </section>
        
        <h3 class="item-title">订单信息</h3>
         <section class="orderdetail-info">         
          <p>销售订单：{{outstorageDetailInfo.eso_number}}</p>
          <p>订单发起：{{outstorageDetailInfo.eso_sale_name}}</p>
          <p>操作人：{{outstorageDetailInfo.edo_delivery_name}}</p>
          <p>生成时间：{{outstorageDetailInfo.eso_created_at}}</p>
          <p>出库时间：{{outstorageDetailInfo.edo_delivery_time}}</p>         
        </section>        
        <p class="detail-option"> <router-link :to="{path:'/stockOut',query:{oid:oid,path:$route.fullPath}}"  v-if="outstorageDetailInfo.edo_state==1">出库</router-link></p>
        
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
      outstorageDetailInfo: {},
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
      edo_id:this.orderId
    };
    api.getOutStorageDetail(params).then(res => {
     // console.log(res);
      if (res.status_code == 10000) {
        this.outstorageDetailInfo = res.data;
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
