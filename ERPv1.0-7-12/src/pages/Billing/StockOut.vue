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
        出库重量：<span>20吨</span>
      </div>
    </div>
    <div class="title">出库信息<a class="add" href="">添加</a></div>
    <table class="billTable">
      <thead>
        <tr>
          <th>仓库</th>
          <th>货位</th>
          <th>出库重量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>纸元云仓一号库</td>
          <td>A</td>
          <td>200</td>
          <td>
            <a href=""><img src="../../assets/imgs/billing_icon_edite.png" alt=""/></a>
          </td>
        </tr>
        <tr>
          <td>纸元云仓一号库</td>
          <td>A</td>
          <td>200</td>
          <td>
            <a href=""><img src="../../assets/imgs/billing_icon_edite.png" alt=""/></a>
          </td>
        </tr>
        <tr>
          <td>纸元云仓一号库</td>
          <td>A</td>
          <td>200</td>
          <td>
            <a href=""><img src="../../assets/imgs/billing_icon_edite.png" alt=""/></a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="account divItem">
      <div class="h152">
        <h3>待出库：10<span>吨</span></h3><br/>
        <h3>已出库：<b>30</b><span>吨</span></h3>
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
<style scoped>
  .account{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
