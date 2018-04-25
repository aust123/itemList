<template>
  <div class="publish_supply">
    <div class="return_prelevel">
      <a onclick="window.history.go(-1)" class="return_icon">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      货品价格
    </div>
    <div class="supply_price">
      <p>
        <input type="text" value="20000"/>
        <span>元/吨</span>
      </p>
      <p>
        <input type="text"/>
        <span>起售吨数</span>
      </p>
    </div>
    <div class="submit">
      <a>继续</a>
    </div>
  </div>
</template>

<script>
  export default{
  }
</script>

<style scoped>
  .submit{
    font-size: 36px;
  }
</style>
