<template>
    <div class="order-detail-content">
      
        <section class="track-content">
          <!-- 销售订单日志 -->
          <template v-if="orderType==1">
            <div class="track-status" v-for="(item,index) in orderRecord" :key="index">
                <!-- 已取消 -->
                <template v-if="item.order_state==7">
                    <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content}}</b><span>{{item.created_at}}</span></h3>
                    <div class="track-info">
                        <p>操作人：{{item.operator_name}}</p>
                        <p>取消原因：{{item.order_cancel_reason}}</p>
                    </div> 
                </template> 
                 <!-- 已完成 -->
                 <template v-if="item.order_state==6">
                     <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content}}</b><span>{{item.created_at|toDate}}</span></h3>
                <div class="track-info">
                    <p>实收合计：￥{{item.actual_gather}}</p>                   
                </div>
                </template> 
                 <!-- 待结算 -->
                 <template v-if="item.order_state==5">
                    <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content}}</b><span>{{item.created_at|toDate}}</span></h3>
                    <div class="track-info">
                        <p>应收合计：￥{{item.gather_amount}}</p>    
                    </div>
                </template>
                 <!-- 已发货 -->
                <template v-if="item.order_state==4">
                    <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content|clipName(item.paper_name)}}<em>{{item.paper_name}}</em></b><span>{{item.created_at|toDate}}</span></h3>
                    <div class="track-info">
                        <p>{{item.driver_plate_number}} </p> <!--等10辆-->                 
                    </div>
                </template> 
                 <!-- 待发货 -->
                <template v-if="item.order_state==3">
                   <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b><em>{{item.storehouse_name}}</em>{{item.record_content|clipName(item.storehouse_name)}}</b><span>{{item.created_at|toDate}}</span></h3>
                    <div class="track-info">
                        <p>操作人：{{item.operator_name}}</p>                   
                    </div>  
                </template> 
                 <!-- 待出库 -->
                 <template v-if="item.order_state==2">
                  <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content}}</b><span>{{item.created_at|toDate}}</span></h3>
                    <div class="track-info">
                        <p>操作人：{{item.operator_name}}</p>                   
                    </div>  
                </template>
                 <!-- 待确认 -->
                <template v-if="item.order_state==1">
                   <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content}}</b><span>{{item.created_at|toDate}}</span></h3>
                    <div class="track-info">
                        <p>订单号：{{item.order_number}}</p>
                        <p>关联审批号：{{item.examine_number}}</p>
                    </div>   
                </template>                    
            </div>         
          </template>

          <!-- 采购订单日志 -->
          <template v-else>
            <div class="track-status" v-for="(item,index) in orderRecord" :key="index">
                <!-- 已取消 -->
                <template v-if="item.order_state==7">
                    <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content}}</b><span>{{item.created_at}}</span></h3>
                    <div class="track-info">
                        <p>操作人：{{item.operator_name}}</p>
                        <p>取消原因：{{item.order_cancel_reason}}</p>
                    </div> 
                </template> 
                 <!-- 已完成 -->
                 <template v-if="item.order_state==6">
                     <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content}}</b><span>{{item.created_at|toDate}}</span></h3>
                <div class="track-info">
                    <p>实付：￥{{item.actual_gather}}</p>                   
                </div>
                </template> 
                 <!-- 待结算 -->
                 <template v-if="item.order_state==5">
                    <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content}}</b><span>{{item.created_at|toDate}}</span></h3>
                    <div class="track-info">
                        <p>待付金额：￥{{item.gather_amount}}</p>    
                    </div>
                </template>
                 <!-- 已发货 -->
                <template v-if="item.order_state==4">
                    <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content|clipName(item.paper_name)}}<em>{{item.paper_name}}</em></b><span>{{item.created_at|toDate}}</span></h3>
                    <div class="track-info">
                        <p>{{item.driver_plate_number}} </p> <!--等10辆-->                 
                    </div>
                </template> 
                 <!-- 待发货 -->
                <template v-if="item.order_state==3">
                   <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b><em>{{item.storehouse_name}}</em>{{item.record_content|clipName(item.storehouse_name)}}</b><span>{{item.created_at|toDate}}</span></h3>
                    <div class="track-info">
                        <p>操作人：{{item.operator_name}}</p>                   
                    </div>  
                </template> 
                 <!-- 待出库 -->
                 <template v-if="item.order_state==2">
                  <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content}}</b><span>{{item.created_at|toDate}}</span></h3>
                    <div class="track-info">
                        <p>操作人：{{item.operator_name}}</p>                   
                    </div>  
                </template>
                 <!-- 待确认 -->
                <template v-if="item.order_state==1">
                   <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>{{item.record_content}}</b><span>{{item.created_at|toDate}}</span></h3>
                    <div class="track-info">
                        <p>订单号：{{item.order_number}}</p>                    
                    </div>   
                </template>                    
            </div>         
          </template>
              
        </section>
    </div>
</template>
<script>
import api from "@/axios/api.js";
function getLocalTime(nS) {
  var dat = new Date(parseInt(nS) * 1000).format("MM-dd hh:mm"); //yyyy-MM-dd hh:mm
  return dat;
}
//var time = getLocalTime(1500666666);
Date.prototype.format = function(format) {
  var date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? date[k]
          : ("00" + date[k]).substr(("" + date[k]).length)
      );
    }
  }
  return format;
};

export default {
  data() {
    return {
      orderId: "",
      titles: "",
      orderType: "",
      orderRecord: []
    };
  },

  filters: {
    toDate(val) {
      return getLocalTime(val);
    },
    clipName(val, name) {
      if (val.includes(name)) {
        return val.replace(name, "");
      }
    }
  },
  created() {
    // console.log(this.$route.query);
    this.orderId = this.$route.query.oid;
    this.orderType = this.$route.query.type;  
    this.getOrderRecord(); 
  },
  activated(){
 
  },
  methods: {
    getOrderRecord() {
      let params = {
        user_id: this.cookie.getCookie("uid"),
        order_id: this.orderId,
        order_type: this.orderType
      };
      api.getOrderFollowRecord(params).then(res => {
        if (res.status_code == 10000) {
          this.orderRecord = res.data;
        }
      });
    }
  }
};
</script>
<style>
.track-content {
  margin-top: 14px;
  background-color: #fff;
  padding: 40px 30px;
  box-sizing: border-box;
}
.track-status {
  margin-bottom: 70px;
}
.track-info {
  padding-left: 80px;
  box-sizing: border-box;
  position: relative;
}
.track-info::after {
  content: "";
  display: inline-block;
  width: 2px;
  height: 140px;
  background-color: #e0e0e0;
  position: absolute;
  top: -10px;
  left: 32px;
}
.track-status:nth-last-child(1) .track-info::after {
  display: none;
}
.track-status p {
  font-size: 28px;
  color: #666;
  margin-bottom: 10px;
  padding: 0 !important;
}
.track-title {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 32px;
  margin-bottom: 12px;
  position: relative;
  padding: 0 !important;
}
.track-title span {
  font-size: 26px;
  color: #999;
  position: absolute;
  right: 0px;
  top: 8px;
}
.track-title b {
  font-weight: normal;
  display: inline-block;
  width: 338px;
}
.track-title em {
  color: #0684f9;
  font-style: normal;
}
.track-title img {
  width: 68px;
  height: 68px;
  margin-right: 20px;
}
</style>
