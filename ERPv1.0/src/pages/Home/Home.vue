<template>
  <div class="home">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      纸元ERP
    </header>
    <div class="personMsg">
      <h2>曹磊</h2>
      <p>欢迎登录</p>
    </div>
    <div class="billList">
     <router-link to="/salelist">
        <img src="../../assets/imgs/index_icon_sell.png" alt=""/>
        <p>销售订单</p>
      </router-link>
      <a href="">
        <img src="../../assets/imgs/index_icon_buy.png" alt=""/>
        <p>采购订单</p>
      </a>
      <a href="">
        <img src="../../assets/imgs/index_icon_buyBilling.png" alt=""/>
        <p>采购开单</p>
      </a>
      <a href="">
        <img src="../../assets/imgs/index_icon_sellBilling.png" alt=""/>
        <p>销售开单</p>
      </a>

      <a href="">
        <img src="../../assets/imgs/index_icon_qc.png" alt=""/>
        <p>质检单</p>
      </a>
      <a href="">
        <img src="../../assets/imgs/index_icon_settle.png" alt=""/>
        <p>结算单</p>
      </a>
      <a href="">
        <img src="../../assets/imgs/index_icon_enter.png" alt=""/>
        <p>入库单</p>
      </a>
      <a href="">
        <img src="../../assets/imgs/index_icon_out.png" alt=""/>
        <p>出库单</p>
      </a>

      <a href="">
        <img src="../../assets/imgs/index_icon_deliver.png" alt=""/>
        <p>发货单</p>
      </a>
      <a href="">
        <img src="../../assets/imgs/index_icon_manage.png" alt=""/>
        <p>仓库管理</p>
      </a>
      <a href="">
        <img src="../../assets/imgs/index_icon_pay.png" alt=""/>
        <p>付款单</p>
      </a>
      <a href="">
        <img src="../../assets/imgs/index_icon_receipt.png" alt=""/>
        <p>收款单</p>
      </a>
    </div>
    <div class="orderList">
      <h3>
        销售订单
        <a href="">更多<img src="../../assets/imgs/jiantou_left.png" alt=""/></a>
      </h3>
      <ul>
        <li>
          <a href="">
            发往 <span>玖龙纸业</span> 的订单
            <b>待确认</b>
          </a>
        </li>
        <li>
          <a href="">
            发往 <span>玖龙纸业</span> 的订单
            <b>待确认</b>
          </a>
        </li>
        <li>
          <a href="">
            发往 <span>玖龙纸业</span> 的订单
            <b>待确认</b>
          </a>
        </li>
      </ul>
    </div>
    <div class="orderList" style="margin-bottom: 50px;">
      <h3>
        采购订单
        <a href="">更多<img src="../../assets/imgs/jiantou_left.png" alt=""/></a>
      </h3>
      <ul>
        <li>
          <a href="">
            <span>玖龙纸业</span> 的订单
            <b>待确认</b>
          </a>
        </li>
        <li>
          <a href="">
            <span>玖龙纸业</span> 的订单
            <b>待确认</b>
          </a>
        </li>
        <li>
          <a href="">
            <span>玖龙纸业</span> 的订单
            <b>待确认</b>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
