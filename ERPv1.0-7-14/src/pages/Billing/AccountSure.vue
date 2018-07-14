<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      结算确认
    </header>
    <div class="showList">
      <div class="show_item">
        供应商：<span>永昌打包站</span>
      </div>
      <div class="show_item">
        车牌号：<span>皖F3424234</span>
      </div>
      <div class="show_item">
        货品名称：<span>黄板纸</span>
      </div>
      <div class="show_item">
        规格等级：<span>A级</span>
      </div>
      <div class="show_item">
        毛重：<span>20吨</span>
      </div>
      <div class="show_item">
        仓库：<span>纸元云仓1号</span>
      </div>
      <div class="show_item">
        结算单价：<span>3000元/吨</span>
      </div>
      <div class="show_item">
        含水扣点：<span>5%</span>
      </div>
      <div class="show_item">
        含杂扣点：<span>2%</span>
      </div>
      <div class="show_item">
        其他扣除：<span>￥1,000.00</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>过磅人</span>
        <input type="text" placeholder="请输入过磅人姓名"/>
      </div>
      <div class="form_item">
        <span>皮重</span>
        <em>吨</em>
        <input type="text"/>
      </div>
      <div class="form_item">
        <span>司磅净重</span>
        <em>吨</em>
        <input type="text"/>
      </div>
    </form>
    <div class="account divItem">
      <div class="h210">
        <h3>结算重量：8.7<span>吨</span></h3><br/>
        <h3>结算金额：￥4,400.00</h3><br/>
        <h3>应付金额：<b>￥54,000.00</b></h3>
        <a class="sure">确认</a>
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
