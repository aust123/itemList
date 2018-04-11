<template>
  <div class="quoteprice">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/inquiryMall">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      报价详情
    </div>
    <div class="quote_basicmsg">
      <div>
        <p>规格：</p>
        <p>国废A级纸</p>
      </div>
      <div>
        <p>价格：</p>
        <p class="price">2000元/吨</p>
      </div>
      <div>
        <p>数量：</p>
        <p>100吨</p>
      </div>
      <div>
        <p>地址：</p>
        <p class="addr">安琥四萨达萨达所横合肥市收水电费水电费</p>
      </div>
      <div>
        <p>起止日期：</p>
        <p>2017.10.11-2017.11.10</p>
      </div>
      <div>
        <p>物流费用负责方：</p>
        <p class="wuliu">买方</p>
      </div>
    </div>
    <div class="quote_user_icon">
      <img class="icon" src="../../assets/img/my_team_touxiang2.png" alt=""/>
      吉安纸厂
      <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
      <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
      <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
      <b>信用分：8分</b>
    </div>
    <div class="quote_basicmsg">
      <div>
        <p>订金：</p>
        <p>10000元</p>
      </div>
      <div>
        <p>数量：</p>
        <p>100吨</p>
      </div>
      <div>
        <p>价格：</p>
        <p>2100元/吨</p>
      </div>
      <div>
        <p>发货日期：</p>
        <p class="date">2017.10.11</p>
      </div>
      <div>
        <p>申请状态：</p>
        <p class="state">处理中...</p>
      </div>
    </div>
    <div class="options">
      <a class="cancel">
        <img src="../../assets/img/orderbeiwang_cancel.png"/>
        取消
      </a>
      <a class="chat">
        <img src="../../assets/img/orderdetail_liao.png"/>
        聊一聊
      </a>
      <a class="call">
        <img src="../../assets/img/orderdetail_phone.png"/>
        打电话
      </a>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .options{
    position:inherit;
    margin-top: 14px;
  }
  .options .chat{
    background: #00d3af;
    color: #fff;
  }
  .options .call{
    background: #FF5000;
    color: #fff;
  }
</style>
