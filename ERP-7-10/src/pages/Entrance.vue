<template>
  <div>
    <h3>首页</h3>
    <router-link to="/salelist">销售订单</router-link>
    <router-link to="/buylist">采购订单</router-link>
    <router-link to="/checklist">质检单</router-link>
    <router-link to="/settlelist">结算单</router-link>
    <router-link to="/outstoragelist">出库单</router-link>
    <router-link to="/instoragelist">入库单</router-link>
    <router-link to="/sendlist">发货单</router-link>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
}
  a{
    display: block;
    font-size: 30px;
    color: #fff;
    text-align: center;
    margin: 20px 0;
    background: #ff5600;
    height: 60px;
    line-height: 60px;
  }
</style>
