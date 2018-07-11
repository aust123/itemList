<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      采购物流录入
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>FF23423423</span>
      </div>
      <div class="show_item">
        供应商：<span>永昌打包站</span>
      </div>
      <div class="show_item">
        货品名称：<span>黄板纸</span>
      </div>
      <div class="show_item">
        规格等级：<span>A级</span>
      </div>
    </div>
    <div class="title">物流信息<a class="add" href="">添加</a></div>
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
        <tr>
          <td>皖A435345d</td>
          <td>三丰</td>
          <td>200</td>
          <td>3432424234324</td>
          <td>
            <a href=""><img src="../../assets/imgs/billing_icon_edite.png" alt=""/></a>
          </td>
        </tr>
        <tr>
          <td>皖A435345d</td>
          <td>三丰</td>
          <td>200</td>
          <td>3432424234324</td>
          <td>
            <a href=""><img src="../../assets/imgs/billing_icon_edite.png" alt=""/></a>
          </td>
        </tr>
        <tr>
          <td>皖A435345d</td>
          <td>三丰</td>
          <td>200</td>
          <td>3432424234324</td>
          <td>
            <a href=""><img src="../../assets/imgs/billing_icon_edite.png" alt=""/></a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="account absoDiv">
      <div class="h152">
        <h3>采购重量：8.7<span>吨</span></h3>
        <a class="launch">发起订单</a>
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
