<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/billingSmmh" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      采购物流录入
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>{{orderMsg.order_number}}</span>
      </div>
      <div class="show_item">
        供应商：<span>{{orderMsg.supplier_name}}</span>
      </div>
    </div>
    <div class="title">物流信息<a @click="add" class="add">添加</a></div>
    <table class="billTable">
      <thead>
        <tr>
          <th>车牌</th>
          <th>司机</th>
          <th>装车重量</th>
          <th>联系方式</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderMsg.logistic_info_list">
          <td>{{item.plate_number}}</td>
          <td>{{item.driver_name}}</td>
          <td>{{item.rough_weight}}</td>
          <td>{{item.driver_phone}}</td>
          <td>
            <a @click="edit(item)"><img src="../../assets/imgs/billing_icon_edite.png" alt=""/></a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="account absoDiv">
      <div class="h152">
        <h3>采购重量：{{orderMsg.total_entruck_amount}}<span>吨</span></h3>
        <router-link to="/billingSmmh" class="launch">发起订单</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        orderMsg:{}
      }
    },
    mounted:function(){
      this.getDetail();
    },
    methods:{
      //编辑物流信息
      edit:function(item){
        this.$router.push({
          path:'/billingSmmhTruckLoad',
          query:{
            msg:JSON.stringify(this.orderMsg),
            logis:JSON.stringify(item),
            path:this.$route.fullPath
          }
        });
      },
      //添加物流信息
      add:function(){
        this.$router.push({
          path:'/billingSmmhTruckLoad',
          query:{
            msg:JSON.stringify(this.orderMsg),
            path:this.$route.fullPath
          }
        });
      },
//      获取采购物流信息
      getDetail:function(){
        var _this=this;
        var params={
          user_id:this.cookie.getCookie('uid'),
          order_id:this.$route.query.oid,
          order_type:2
        }
        _this.ajax.purchaseLogistics(params).then(function(response){
//          console.log(response);
          if(response.status_code==10000){
            _this.orderMsg=response.data;
          }
        });
      }
    }
  }
</script>

<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
