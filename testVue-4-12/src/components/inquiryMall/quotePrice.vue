<template>
  <div class="quoteprice">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/inquiryMall">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      报价
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
    <div class="quote_basicmsg quote_form">
      <div>
        <p>订金：</p>
        <p>
          <input type="text"/>
          <em>元</em>
        </p>
      </div>
      <div>
        <p>数量：</p>
        <p>
          <input type="text"/>
          <em>吨</em>
        </p>
      </div>
      <div>
        <p>价格：</p>
        <p>
          <input type="text"/>
          <em>元/吨</em>
        </p>
      </div>
      <div style="padding-top: 0;">
        <p>发货日期：</p>
        <datetime class="dateshow" v-model="valuedate"></datetime>
      </div>
    </div>
    <div class="quote_submit">确认报价</div>
  </div>
</template>

<script>
  import { Datetime } from 'vux'
  export default{
    components: {
      Datetime
    },
    data:function(){
      return{
        valuedate:'请选择发货日期'
      }
    }
  }
</script>

<style scoped>
  .quote_form .dateshow{
    display: inline-block;
    width: 70%;
  }
</style>
