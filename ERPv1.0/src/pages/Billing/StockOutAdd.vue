<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      出库
    </header>
    <div class="showList">
      <div class="show_item">
        出库单号：<span>FF23423423</span>
      </div>
      <div class="show_item">
        纸厂名称：<span>山鹰纸厂</span>
      </div>
      <div class="show_item">
        货品名称：<span>黄板纸</span>
      </div>
      <div class="show_item">
        规格等级：<span>A级</span>
      </div>
      <div class="show_item">
        出库重量：<span>12.4吨</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>仓库</span>
        <input type="text" placeholder="请输入仓库名称"/>
      </div>
      <div class="form_item">
        <span>货位</span>
        <select>
          <option value="0">请输入货位名称</option>
        </select>
      </div>
      <div class="form_item">
        <span>出库重量</span>
        <em>吨</em>
        <input type="text"/>
      </div>
    </form>
    <div class="account divItem">
      <div class="h152">
        <h3>出库重量：10<span>吨</span></h3><br/>
        <h3>出库合计：<b>￥4,000.00</b></h3>
        <a class="sure">确认</a>
        <a class="delete">删除</a>
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
  .account{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
