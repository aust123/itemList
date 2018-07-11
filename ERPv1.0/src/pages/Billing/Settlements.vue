<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      上传结算清单
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>FF23423423</span>
      </div>
      <div class="show_item">
        纸厂：<span>山鹰纸厂</span>
      </div>
      <div class="show_item">
        货品名称：<span>黄板纸</span>
      </div>
      <div class="show_item">
        规格等级：<span>A级</span>
      </div>
    </div>
    <div class="title">结算信息</div>
    <table class="billTable">
      <thead>
        <tr>
          <th>车牌</th>
          <th>扣点</th>
          <th>结算重量</th>
          <th>结算小计</th>
          <th>结算清单</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>皖A435345d</td>
          <td>2%</td>
          <td>200</td>
          <td>154,000</td>
          <td>已上传</td>
        </tr>
        <tr>
          <td>皖A435345d</td>
          <td colspan="3"><span>待上传</span></td>
          <td>
            <a>上传</a>
          </td>
        </tr>
        <tr>
          <td></td>
          <td><em>合计：</em></td>
          <td><em>200</em></td>
          <td><em>154,000</em></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <a class="nextStep divItem">提交</a>
    <div class="formTip">
      <div class="tipMsg">皖A43534534尚未上传结算信息，请完善后提交</div>
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
  .nextStep{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
