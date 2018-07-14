<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      上传结算清单
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>{{orderSettleInfo.order_number}}</span>
      </div>
      <div class="show_item">
        纸厂：<span>{{orderSettleInfo.paper_name}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{orderSettleInfo.product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{orderSettleInfo.product_stage}}</span>
      </div>
    </div>
    <div class="title">结算信息</div>
    <table class="billTable">
      <thead>
        <tr>
          <th>车牌</th>
          <th>扣点</th>
          <th>结算重量</th>
          <th>结算小计</th>
          <th>结算清单</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in orderSettleInfo.settle_info" :key='index'>
          <td>{{item.plate_number}}</td>
          <!-- 判断订单是否上传 -->
          <template v-if="item.is_upload">
            <td>{{item.total_deductions}}%</td>
            <td>{{item.settle_weight}}</td>
            <td>{{item.settle_money}}</td>
            <td>已上传</td>
          </template>
          <template v-else>
            <td colspan="3"><span>待上传</span></td>
            <td>
              <a href="javascript:;" @click="toUploadSettle(item.plate_number,item.logistic_id)">上传</a>
            </td>
          </template>
        </tr>
        <!-- <tr>
          <td>皖A435345d</td>
          <td colspan="3"><span>待上传</span></td>
          <td>
            <a>上传</a>
          </td>
        </tr> -->
        <tr>
          <td></td>
          <td><em>合计：</em></td>
          <td><em>{{orderSettleInfo.settle_total_weight}}</em></td>
          <td><em>{{orderSettleInfo.settle_total_money}}</em></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <a class="nextStep divItem">提交</a>
    <div class="formTip">
      <div class="tipMsg">皖A43534534尚未上传结算信息，请完善后提交</div>
    </div>
  </div>
</template>

<script>
import api from "@/axios/api.js";

export default {
  data() {
    return {
      orderSettleInfo: {}
    };
  },
  methods: {
    toUploadSettle(num, lid) {
      let sInfo = {
        onum: this.orderSettleInfo.order_number,
        proname: this.orderSettleInfo.product_name,
        pstage: this.orderSettleInfo.product_stage,
        pname: this.orderSettleInfo.paper_name,
        lid: lid,
        carnum: num
      };
      this.$router.push({
        path: "/uploadSettle",
        query: {
          settleOrderInfo:sInfo
        }
      });
    }
  },
  created() {
    let oid = this.$route.query.oid;
    let params = {
      user_id: 1,
      order_id: oid
    };
    api.getOrderInfoBeforeSettle(params).then(res => {
      console.log(res);
      if (res.status_code == 10000) {
        this.orderSettleInfo = res.data;
      }
    });
  }
};
</script>
<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
.nextStep {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
