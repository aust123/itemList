<template>
    <div>
         <Header :noSearch='0'><span slot="title">发货单详情</span></Header>   
    <div class="order-detail-content">
      <p class="order-list-title"><img src="../../assets/imgs/buyorder_icon_buy.png" alt="">订单号：SA8884545454<span class="status">待确认</span></p>
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
        <p class="detail-option"><a class="jiesuan" href="javascript:;" @click="fn">确认</a></p>
        <Modal @confirm='makeSure' :show='isShow' :tip='tip' :title='title'></Modal> 
    </div>
             
    </div>
</template>
<script>
import Header from'../../components/header'
export default {
   components:{       
        Header
    },
  data() {
    return {
      active: 0,
      isHide: 0,
      navBar: ["订单详情", "订单追踪"],
      title:'',
      titles:'',
      orderId: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    //console.log(from);
    //console.log(to);
    //这个钩子函数访问不到this，可以在next中传入vm进行访问
    next(vm => {
      vm.title = `${to.query.titles}详情`;
      vm.titles= to.query.titles; 
      if(to.query.titles.includes("销售订单")||to.query.titles.includes("采购订单")){
           vm.isHide = 1;//是否显示订单追踪
      }
      if (to.path.includes("ordertrack")) {
        vm.active = 1;
      }else{
        vm.active = 0;
      }
    });
  },
 created(){
   //console.log(this.$route.query);
  this.orderId = this.$route.query.oid;
  this.titles=this.$route.query.titles;
 },
  mounted(){

  },
  methods: {   
    change($index) {
      this.active = $index;
      let suburl = $index == 0 ? "orderdetaildata" : "ordertrack";
      this.$router.push({
        path: `/orderdetail/${suburl}`,
        query:{
           titles: this.titles,
           oid:this.orderId
        }
      });
    },
    makeSure() {}
  }
};
</script>
<style lang="css" src="../../assets/css/orderdetail.css" scoped>
