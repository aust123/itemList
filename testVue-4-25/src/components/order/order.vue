<template>
  <div class="order">
    <div class="return_prelevel">
      我的订单
      <router-link to="/historyOrder" class="logistics_order">
        历史订单
      </router-link>
    </div>
    <ul class="orderlist">
      <li>
        <router-link to="/orderDetail">
          <div class="orderlist_icon">
            <h3>
              <img class="icon" src="../../assets/img/my_team_touxiang2.png" alt=""/>
              <span>德润集团</span>
              <img src="../../assets/img/jiantou_right.png" alt=""/>
              <a>等待卖家发货</a>
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
        </router-link>
      </li>
      <li>
        <router-link to="/orderDetail">
          <div class="orderlist_icon">
            <h3>
              <img class="icon" src="../../assets/img/my_team_touxiang2.png" alt=""/>
              <span>德润集团</span>
              <img src="../../assets/img/jiantou_right.png" alt=""/>
              <a>卖家已发货</a>
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
          <div class="orderlist_option">
            <a>确认收货</a>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/orderDetail">
          <div class="orderlist_icon">
            <h3>
              <img class="icon" src="../../assets/img/my_team_touxiang2.png" alt=""/>
              <span>德润集团</span>
              <img src="../../assets/img/jiantou_right.png" alt=""/>
              <a>买家已收货</a>
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
          <div class="orderlist_option">
            <router-link to="/account">去结算</router-link>
            <!--<a>去付款</a>-->
            <!--<a>结算中...</a>-->
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/orderDetail">
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
          <div class="orderlist_option">
            <router-link to="/evaluate">去评价</router-link>
          </div>
        </router-link>
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
  .order{
    width: 100%;
    overflow-x: hidden;
    height: 90%;
    overflow-y: scroll;
    padding-bottom: 20%;
  }
</style>
