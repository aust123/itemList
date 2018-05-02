<template>
  <div class="order_detail">
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      订单详情
      <a @click="openPopbox" class="logistics_order">
        <img src="../../assets/img/title_orderdetail_tishi.png" alt=""/>
      </a>
    </div>
    <div class="orderDetail">
      <ul class="orderMsg">
        <li>
          <div class="picture">
            <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
          </div>
          <div class="text">
            <h3>山鹰纸厂</h3>
            <p>
              <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
              <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
              <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
              <b>信用分：10分</b>
            </p>
          </div>
          <span><img src="../../assets/img/orderdetail_sail.png" alt=""/></span>
        </li>
        <li>
          <div class="picture">
            <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
          </div>
          <div class="text">
            <h3>德润打包站</h3>
            <p>
              <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
              <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
              <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
              <b>信用分：10分</b>
            </p>
          </div>
          <span><img src="../../assets/img/orderdetail_buy.png" alt=""/></span>
        </li>
      </ul>
      <div class="orderSummary">
        <p>
          <label>规格：</label>
          国废A级纸
        </p>
        <p>
          <label>报价：</label>
          <b>2000元/吨</b>
        </p>
        <p>
          <label>收货地址：</label>
          <span>安徽省和凤凰寺安达市大所多发顺丰撒大声地</span>
        </p>
        <p>
          <label>发货日期：</label>
          2017.10.11
        </p>
        <p>
          <label>数量：</label>
          100吨
        </p>
        <p>
          <label>买方支付定金：</label>
          <b>1000元</b>
        </p>
      </div>
      <div class="order_liushui">
        <p>订单流水：SDSJJSJSJDJJD</p>
        <p>订金支付流水号：FSKSIUYTRRR</p>
      </div>

      <!-- 待结算-结算中-->
      <!--<div class="order_total">-->
        <!--<p>货品总价：<b>5000元</b></p>-->
        <!--<p>( 已付定金：1000元，尾款：40000元 )</p>-->
        <!--<a>等待卖方确认</a>-->
      <!--</div>-->

      <!-- 待结算-去付款-->
      <div class="order_pay">
        <p>货品总价：<b>5000元</b></p>
        <p>( 已付定金：1000元，尾款：40000元 )</p>
        <a>去付款</a>
      </div>

      <div class="orderDriver">
        <h3>司机信息</h3>
        <div>
          <p>司机姓名：张三</p>
          <p>车牌：皖A-aass</p>
          <p>联系方式：1345333333</p>
        </div>
      </div>
      <div class="orderSettlement">
        <h3>结算清单</h3>
        <div>
          <img src="../../assets/img/buy_banner1.png" alt=""/>
          <img src="../../assets/img/buy_banner1.png" alt=""/>
          <img src="../../assets/img/buy_banner1.png" alt=""/>
          <img src="../../assets/img/buy_banner1.png" alt=""/>
          <img src="../../assets/img/buy_banner1.png" alt=""/>
        </div>
      </div>
      <div class="orderSettlement orderbeizhu">
        <h3>结算清单</h3>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur dolorum, in mollitia nam quam reiciendis. Ab alias cum eligendi, illo incidunt inventore neque nihil nulla perspiciatis recusandae vel voluptate!
          </p>
        </div>
      </div>
    </div>
    <div class="orderoptions">
      <!-- 无备注-->
      <!--<a>-->
        <!--<img src="../../assets/img/orderdetail_addbeizhu.png" alt=""/>-->
        <!--添加备注-->
      <!--</a>-->
      <!-- 无备注-->
      <router-link to="/remark">
        <img src="../../assets/img/orderdetail_addbeizhu.png" alt=""/>
        编辑备注
      </router-link>
      <a class="chat">
        <img src="../../assets/img/orderdetail_liao.png" alt=""/>
        聊一聊
      </a>
      <a class="call">
        <img src="../../assets/img/orderdetail_phone.png" alt=""/>
        联系卖家
      </a>
    </div>
    <!-- 待结算-结算中 / 待结算-去付款-->
    <!--<div class="order_account">-->
      <!--<a class="chat">-->
        <!--<img src="../../assets/img/orderbeiwang_liao.png" alt=""/>-->
        <!--聊一聊-->
      <!--</a>-->
      <!--<a class="call">-->
        <!--<img src="../../assets/img/orderdetail_phone.png" alt=""/>-->
        <!--联系卖家-->
      <!--</a>-->
    <!--</div>-->
    <!--<div class="popBox popBox_pingtai">-->
      <!--<div class="popContent">-->
        <!--<h3>是否申请平台介入？</h3>-->
        <!--<div>-->
          <!--<a @click="closePopbox" class="cancel">否</a>-->
          <!--<a @click="successPopbox" class="sure">是</a>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="popBox popBox_succ">
      <div class="popContent">
        <h3>您已经申请纸去哪了平台介入，请耐心等待！</h3>
        <span @click="closePopBoxSucc">
          <img src="../../assets/img/orderdetail_tk_cancel.png" alt=""/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      openPopbox:function(){
        $('.popBox_pingtai').fadeIn();
      },
      closePopbox:function(){
        $('.popBox_pingtai').fadeOut();
      },
      successPopbox:function(){
        $('.popBox_pingtai').fadeOut();
        $('.popBox_succ').fadeIn();
      },
      closePopBoxSucc:function(){
        $('.popBox_succ').fadeOut();
      }
    }
  }
</script>

<style scoped>
  .logistics_order img{
    width: 48px;
    height: 46px;
  }
</style>
