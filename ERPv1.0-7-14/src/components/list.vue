<template>
    <div class="content">
                      
             <section class="orderLists" v-for="(item,index) in dataList" :key='index'>
                <p class="order-list-title">
                  <img src="../assets/imgs/sellorder_icon_orderid.png" alt="">{{item.order_number}}<span class="date">{{item.created_at}}</span>                  
                  <span v-if="item.order_state==1" class="status">待确认</span>
                  <span v-if="item.order_state==2" class="status">待出库</span>
                  <span v-if="item.order_state==3" class="status">待发货</span>
                  <span v-if="item.order_state==4" class="status">已发货</span>
                  <span v-if="item.order_state==5" class="status">待收款</span>
                  <span v-if="item.order_state==6" class="status">已完成</span>
                  <span v-if="item.order_state==7" class="status">已取消</span>                  
                </p>
                <p class="order-list-info"><img src="../assets/imgs/orderdetail_img.png" alt=""><b>{{item.product_stage}}</b><b>{{item.product_name}}</b><b>{{item.product_weight}}</b><b class="unit">吨</b><span>{{item.paper_name}}</span></p>
                <p class="order-list-state">
                    <a @click.stop="toTrack(item.order_id)" >
                        <img src="../assets/imgs/sellorder_track_tishi.png" alt="">
                        <span>{{item.follow_record.created_at}} {{item.follow_record.content}}</span>
                        <img class="left-arrow"  src="../assets/imgs/jiantou_left.png" alt="">
                    </a>
                </p>
                <p class="order-list-option">
                  <!-- 仅在已发货状态时显示 上传 按钮 -->
                    <router-link :to="{path:'/settlements',query:{oid:item.order_id,otype:1}}" v-if="item.order_state==4" class="order-sure jiesuan">上传结算单</router-link>
                    <!-- 仅在待确认状态时显示 确定、取消 按钮 -->
                    <template v-if="item.order_state==1">
                     <a class="order-to-detail" href="javascript:;" @click="confirmOrder(item.order_id,0)">取消</a>
                     <a class="order-sure" href="javascript:;" @click="confirmOrder(item.order_id,1)">确认</a>
                    </template>                    
                    <a @click.stop="toDetail(item.order_id)" class="order-to-detail">详情</a>                                      
                </p>
            </section>
         <Modal @confirm='makeSure' :show='isShow'>
            <p slot="title">{{Tiptitle}}</p>
            <p slot="tip">{{tip}}</p>
        </Modal>  
        </div>
</template>
<script>
import Modal from "./modal";
import api from "@/axios/api.js";
export default {
  components: {
    Modal
  },
  props: ["title", "dataList"],
  data() {
    return {
      isShow: 0,
      tip: "",
      Tiptitle: "",    
      titles: this.title,
      orderId: "",
      orderType: ""
     
    };
  },
  created(){
   
  },
  computed: {
   
  },
  created(){
   
  },
 
  methods: {
    makeSure(val) {
      //点击模态框确认最终提交
      console.log(val);
      //根据传递的val(0/1)执行操作
      if (val && this.Tiptitle.includes("确认")) this.getConfirmOrder(); //确认订单
      if (val && this.Tiptitle.includes("取消")) this.getCancelOrder(); //确认取消订单
      this.isShow = 0;
    },
    getConfirmOrder() {
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
    getCancelOrder() {
      let params = {
        uid: 1,
        order_type: this.orderType,
        order_id: this.orderId,
        cancel_reason: "取消" //取消原因默认
      };
      api.cancelOrder(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          alert(res.msg);
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
      if (this.titles.includes("销售订单")) {
        this.orderType = 1; //订单类型
      } else if (this.titles.includes("采购订单")) {
        this.orderType = 2; //订单类型
      }
      this.isShow = 1;
    },
   
    toTrack($oid) {
      console.log($oid)
      //跳转至订单追踪
      if (this.titles == "销售订单" || this.titles == "采购订单") {
        this.$router.push({
          path: "/orderdetail/ordertrack",
          query: {
            titles: this.titles,
            oid: $oid
          }
        });
      }
    },
    toDetail(id) {
      //跳转至订单详情页
      //console.log(id)
      this.$router.push({
        path: "/orderdetail",
        query: {
          titles: this.titles,
          oid: id
        }
      });
    }
  }
};
</script>
<style>
/*内容区域样式*/
.content {
  background-color: #f1f1f1;
  width: 100%;
  margin-top: 14px;
}

.orderLists {
  background-color: #fff;
  font-size: 30px;
  color: #333;
  margin-bottom: 19px;
}
.orderLists > p {
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
}
.order-list-title,
.order-list-state,
.order-list-option {
  height: 88px;
}
.order-list-title img {
  width: 36px;
  height: 46px;
  margin-right: 20px;
}
.order-list-title .date {
  font-size: 28px;
  color: #666;
  margin-left: 60px;
}
.status {
  color: #0684f9;
  position: absolute;
  right: 30px;
}
.order-list-info {
  background-color: #fafafa;
  height: 188px;
  position: relative;
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
  margin-right: 30px;
}
b.unit {
  color: #666;
  font-size: 24px;
}
.order-list-info span {
  width: 132px;
  position: absolute;
  right: 30px;
  font-size: 26px;
}
.order-list-state a {
  display: flex;
  align-items: center;
  color: #666;
  font-size: 26px;
  position: relative;
  width: 100%;
}
.order-list-state img:nth-of-type(1) {
  width: 31px;
  height: 31px;
  margin-right: 14px;
}
img.left-arrow {
  width: 17px;
  height: 31px;
  position: absolute;
  right: 0px;
}
img.left-arrow.hide {
  display: none;
}
.order-list-option {
  text-align: right;
  justify-content: flex-end;
  border-top: 1px solid #f1f1f1;
}
.order-list-option a {
  font-size: 28px;
  color: #fff;
  height: 56px;
  width: 122px;
  line-height: 56px;
  text-align: center;
  border-radius: 10px;
}
a.order-sure {
  background-color: #00d3af;
  margin: 0 30px;
}
a.order-to-detail {
  background-color: #b4b4b4;
}
a.order-sure.jiesuan {
  width: 180px;
}
</style>
