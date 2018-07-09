<template>
    <div>
         <header>
            <a class="back left" href="javasvript:;" @click="back"><img src="../../assets/imgs/nav_jiantou_left.png" ></a>
            入库单详情           
        </header>
        <!-- <nav>
            <a href="javasvript:;" v-for='(item,$index) in navBar' :key="$index" @click="change($index)" :class="{on:$index==active}">{{item}}</a>           
        </nav> -->
      
        <p class="order-list-title"><img src="../../assets/imgs/sellorder_icon_orderid.png" alt="">订单号：SA8884545454<span class="status">待确认</span></p>
      <h3 class="title">货品信息<span>2018-6-29</span></h3>
      <section class="detail-info">
        <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>A级</b><b>黄板纸</b><span>安徽省纸元网络科技</span></p>
       
        <p>发货量：<span>100</span><b class="unit">吨</b></p>
        <p>发货单价：<span>100</span><b class="unit">元/吨</b></p>
        <p>发货总价：<span class="total">￥30,000.00</span></p>
      </section>
        <h3 class="title">结算信息</h3>
        <section class="settle-info">
          <table>            
              <tr class="table-title">
              <td>车牌</td>
              <td>扣点</td>
              <td>结算重量</td>
              <td>结算单价</td>
              <td>结算小计</td>
            </tr> 
            <tr class="table-content">
              <td>皖A6666</td>
              <td>2%</td>
              <td>20</td>
              <td>3000</td>
              <td>12700</td>
            </tr>
             <tr class="table-end">
              <td></td>
              <td>合计</td>
              <td>20</td>
              <td></td>
              <td>19900</td>
            </tr>
          </table>
        <p>其他扣除：<span>￥100.00</span></p>
       <p>应收合计：<span class="total">￥8888888.00</span></p>
        </section>
        <h3 class="title">物流信息</h3>
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
        <h3 class="title">订单信息</h3>
         <section class="orderdetail-info">
          <p>订单类型：销售订单</p>
          <p>关联审批对象：SP656565656656565</p>
          <p>生成时间：2018-6-30 10:30:00</p>
          <p>确认时间：2018-6-30 10:30:00</p>
          <p>出库时间：2018-6-30 10:30:00</p>
          <p>发货时间：2018-6-30 10:30:00</p>
          <p>结算时间：2018-6-30 10:30:00</p>
          <p>完成时间：2018-6-30 10:30:00</p>
        </section>        
        <p class="detail-option"><a class="jiesuan" href="javascript:;" @click="fn">入库</a></p>
        <!-- <Modal @confirm='makeSure' :show='isShow' :tip='tip' :title='title'></Modal>  -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      // active: 0,
      // navBar: ["订单详情", "订单追踪"]
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   //这个钩子函数访问不到this，可以在next中传入vm进行访问
  //   next(vm => {
  //     if (to.path.includes("buyordertrack")) {
  //       vm.active = 1;
  //     }
  //   });
  // },
  methods: {
    back() {},
    change($index) {
      this.active = $index;
      let routerId = $index == 0 ? "buyorderdetaildata" : "buyordertrack";
      this.$router.push({
        path: `/buyorderdetail/${routerId}`
      });
    },
    makeSure() {},
     fn() {
      this.isShow = 1;
    },
  }
};
</script>
<style>
/*头部样式 */
body {
  background-color: #f1f1f1;
}
header {
  font-size: 36px;
  height: 88px;
  line-height: 88px;
  color: #333;
  text-align: center;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
}
header img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.left {
  float: left;
}
.right {
  float: right;
}
header a {
  height: 100%;
  position: relative;
}
.back img {
  width: 20px;
  height: 38px;
  left: 0;
}
.search img {
  width: 40px;
  height: 40px;
  right: 0;
}
/*导航样式 */
/* nav {
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
nav a {
  display: flex;
  flex-grow: 1;
  color: #666;
  font-size: 30px;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.on {
  color: #00d3af;
  border-bottom: 4px solid #00d3af;
} */
p,
h3 {
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
.title {
  margin: 40px 0;
  font-size: 32px;
  color: #333;
}
.title > span {
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

a.jiesuan {
  width: 180px;
  font-size: 28px;
  color: #fff;
  height: 56px;
  line-height: 56px;
  text-align: center;
  border-radius: 10px;
  background-color: #00d3af;
}
</style>
