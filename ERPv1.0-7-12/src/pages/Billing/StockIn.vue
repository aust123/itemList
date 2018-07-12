<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      入库
    </header>
    <div class="showList">
      <div class="show_item">
        入库单号：<span>FF23423423</span>
      </div>
      <div class="show_item">
        供应商：<span>永昌打包站</span>
      </div>
      <div class="show_item">
        车牌号：<span>皖D35434534</span>
      </div>
      <div class="show_item">
        货品名称：<span>黄板纸</span>
      </div>
      <div class="show_item">
        规格等级：<span>A级</span>
      </div>
      <div class="show_item">
        司磅净重：<span>12.4吨</span>
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
    </form>
    <a class="nextStep divItem">确认</a>
  </div>
</template>

<script>
  import "../../assets/css/billing.css"
  export default{

  }
</script>

<style scoped>
  .nextStep{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
