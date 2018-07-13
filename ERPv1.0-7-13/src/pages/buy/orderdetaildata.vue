<template>
    <div class="order-detail-content">
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
              <td>{{item.total_deductions}}%</td>
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
            <tr class="table-content">
              <td>皖A6666</td>
              <td>王师傅</td>
              <td>200</td>
              <td>15705131911</td>
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
        <p v-if="orderDetailData.order_state==4" class="detail-option"><a class="jiesuan" href="javascript:;" @click="fn">上传结算单</a></p>
      <Modal @confirm='makeSure' :show='isShow'>
            <p slot="title">{{Tiptitle}}</p>
            <p slot="tip">{{tip}}</p>
        </Modal> 
    </div>
</template>
<script>
import Modal from "@/components/modal";
import api from '@/axios/api.js'
export default {
  components: {
    Modal
  },
  data() {
    return {
      isShow: 0,
      tip:'',
      Tiptitle:'',
      orderDetailData:{},
      orderId: "",
      orderType: "" ,
      titles:''   
    };
  },
   created(){    
      //console.log(this.$route.query);
     this.orderId = this.$route.query.oid;
     this.titles=this.$route.query.titles;
      let params = {
        user_id:1,
        order_id: this.orderId
      }
      api.getSaleOrderDetail(params).then(res=>{
         console.log(res)
        if(res.status_code==10000){
            this.orderDetailData=res.data;
        }
       
      })   
  },
  filters:{
    setDateFormat(val){
      if(typeof(val)=='string'){
        return val.toString().substring(0,10)
      }        
    }
  },
  mounted() {   
      
    },
  methods: {
     makeSure(val) {
      //点击模态框确认最终提交
      console.log(val);
      //根据传递的val(0/1)执行操作      
      if(val&& this.Tiptitle.includes('确认')) getConfirmOrder();//确认订单
      if(val&& this.Tiptitle.includes('取消')) getCancelOrder();//确认取消订单
       this.isShow = 0;
    },
    getConfirmOrder(){
      let params = {
        uid: 1,
        order_type: this.orderType,
        order_id: this.orderId
      };
     
      api.confirmOrder(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          alert(res.msg);
        }
      });
    },
    getCancelOrder(){
      let params = {
        uid: 1,
        order_type: this.orderType,
        order_id: this.orderId,
        cancel_reason:'取消'//取消原因默认
      };     
      api.cancelOrder(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          alert(res.msg);
        }
      });
    },
    confirmOrder(oid,isconfirm) {
      //点击确认按钮显示模态框      
      this.Tiptitle = isconfirm ? '订单确认' : '订单取消';
      this.tip = isconfirm ? '你即将确认订单，是否继续?' : '你即将取消订单，是否继续?';
      this.orderId = oid;//订单id
      if (this.titles.includes("销售订单")) {
        this.orderType = 1;//订单类型
      } else if (this.titles.includes("采购订单")) {
        this.orderType = 2;//订单类型
      }
      this.isShow = 1;
    },
    makeSure(val){
      console.log(val);
    //根据传递的val(0/1)执行操作
      this.isShow = 0;
    }
  }
};
</script>
<style>
.order-detail-content p,
.order-detail-content h3 {
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
}
section {
  background-color: #fff;
}
table {
  width: 100%;
}
table td {
  border: 1px solid #e0e0e0;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 28px;
}
.table-title td {
  color: #666;
}
.table-content td {
  color: #333;
}
.table-end td {
  color: #0684f9;
}
.item-title {
  margin: 40px 0;
  font-size: 32px;
  color: #333;
}
.item-title > span {
  position: absolute;
  right: 30px;
  font-size: 28px;
  color: #666;
}
.order-list-title {
  margin-top: 14px;
  height: 120px;
  font-size: 32px;
  color: #333;
  background-color: #fff;
}
.order-list-title img {
  width: 36px;
  height: 46px;
  margin-right: 20px;
}

.status {
  color: #0684f9;
  position: absolute;
  right: 30px;
}
.detail-info {
  font-size: 30px;
  color: #333;
}
.detail-info p {
  margin-top: 20px;
}
.detail-info p:nth-last-child(1) {
  padding-bottom: 22px;
}
p.order-list-info {
  margin-top: 0;
  height: 126px;
  border-bottom: 1px solid #e0e0e0;
}
.order-list-info img {
  width: 96px;
  height: 96px;
  margin-right: 20px;
}
.order-list-info b {
  font-weight: normal;
}
.order-list-info b:nth-of-type(2) {
  margin-left: 12px;
}
b.unit {
  color: #666;
  font-size: 24px;
}
.total {
  color: #ff5000;
}
.order-list-info span {
  position: absolute;
  right: 30px;
  color: #666;
  font-size: 26px;
}
.settle-info p {
  color: #333;
  font-size: 30px;
}
.settle-info p:nth-of-type(1) {
  padding-top: 20px;
}
.settle-info p:nth-of-type(2) {
  margin-top: 24px;
  padding-bottom: 23px;
}
.settle-info p:nth-of-type(2) span {
  font-size: 34px;
}
.orderdetail-info {
  padding: 24px 0px;
}
.orderdetail-info p {
  font-size: 30px;
  color: #333;
  margin-top: 15px;
}
.detail-option {
  height: 98px;
  background-color: #fff;
  margin-top: 14px;
  justify-content: flex-end;
}
.detail-option a{
  font-size: 28px;
  color: #fff;
  height: 56px;
  width: 122px;
  line-height: 56px;
  text-align: center;
  border-radius: 10px;
  background-color: #00d3af;
}
a.cancel {
 background-color: #b4b4b4;
 margin-right: 22px;
}
a.jiesuan {
  width: 180px;
}
</style>

