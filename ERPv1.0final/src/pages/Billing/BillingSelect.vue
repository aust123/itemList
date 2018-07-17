<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/home" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      采购订单发起
    </header>
    <div class="title">请选择</div>
    <div class="billForm">
      <div class="select">
        <router-link to="/billingSmcg">上门采购</router-link>
      </div>
      <div class="select">
        <router-link to="/billingSmmh">上门卖货</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
  }
</script>

<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
  .select{
    line-height: 98px;
    height: 98px;
    padding: 0 30px;
    border-bottom: 1px solid #e0e0e0;
  }
  .select a{
    display: block;
    font-size: 30px;
    color: #333;
    background-image: url('../../assets/imgs/jiantou_left.png');
    background-size: 15px 29px;
    background-repeat: no-repeat;
    background-position: right center;
  }
</style>
