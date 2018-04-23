<template>
  <div class="order">
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      历史订单
    </div>
    <ul class="orderlist">
      <li>
        <a>
          <div class="orderlist_icon">
            <h3>
              <img class="icon" src="../../assets/img/my_team_touxiang2.png" alt=""/>
              <span>德润集团</span>
              <img src="../../assets/img/jiantou_right.png" alt=""/>
              <a>订单已完成</a>
            </h3>
          </div>
          <div class="orderlist_content clearfix">
            <div class="picture">
              <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
            </div>
            <div class="text">
              <h4>货品名称：国废A级纸</h4>
              <h4>收货地址：山东潍坊</h4>
              <p>备注：杂质为5%杂质为5%杂质为5%杂质为5%杂质为5%</p>
            </div>
          </div>
          <div class="orderlist_price">
            <span>价格：<b>2000</b>元/吨</span>
            <span>数量：<b>3000</b>吨</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
