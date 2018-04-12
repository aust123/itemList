<template>
  <div class="shopDetail">
    <div class="shop_basicMsg">
      <div class="shop_return">
        <a onclick="window.history.go(-1)">
          <img src="../../assets/img/title_jiantou.png" alt=""/>
        </a>
        <div class="share">
          分享
        </div>
      </div>
      <div class="shop_msg">
        <h3>张三</h3>
        <p>
          <img src="../../assets/img/my_team_touxiang2.png" alt=""/>
        </p>
        <p>安徽省合肥市蜀山区</p>
        <p>经纪人/代办&nbsp;&nbsp;&nbsp;&nbsp;主营：打包站</p>
      </div>
    </div>
    <ul class="shop_scan">
      <li>
        <h3>600次</h3>
        <p>近期浏览</p>
      </li>
      <li>
        <h3>7人</h3>
        <p>关注了他</p>
      </li>
      <li>
        <h3>26人</h3>
        <p>近期联系</p>
      </li>
      <li>
        <h3>5级</h3>
        <p>诚信等级</p>
      </li>
    </ul>
    <div class="shop_credit">
      <h3>诚信等级 <img src="../../assets/img/sell_shopdetail_tishi.png" alt=""/>
      </h3>
      <div class="shop_credit_content">
        <div class="credit_left">
          <span>5</span>级
        </div>
        <div class="credit_right">
          <p>
            信誉评价:5.0 <span>（3个评价）</span>
          </p>
          <p>
            线上交易:￥0 <span>（0单成交）</span>
          </p>
          <p>
            <a href="">实名认证</a>
          </p>
        </div>
      </div>
    </div>
    <!-- 当身份为贸易公司时-->
    <div class="shop_mainpaper">
      <div>
        主营纸厂：山鹰纸业
      </div>
      <div>
        服务纸厂：
        <p>
          <span>山鹰纸业</span>
          <span>山鹰纸业</span>
          <span>山鹰纸业</span>
          <span>山鹰纸业</span>
          <span>山鹰纸业</span>
        </p>
      </div>
    </div>

    <div class="chart">
      <h3>店铺收货价格走势图</h3>
      <div class="chart_show">
        <img src="../../assets/img/sell_shopdetail_zhoushi.png" alt=""/>
      </div>
    </div>
    <div class="shop_strength">
      <h3>实力展示</h3>
      <div class="strength_show">
        <div class="strength_swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img1.png" alt=""/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img2.png" alt=""/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img1.png" alt=""/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img2.png" alt=""/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
            </div>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque cum ex in maxime minima nesciunt odio suscipit tempora voluptatum. Atque debitis doloremque et excepturi obcaecati possimus quam repudiandae, voluptates!</p>
      </div>
    </div>
    <div class="shop_supply">
      <h3>供应信息
        <router-link to="/shop">去店铺 ></router-link>
      </h3>
      <div class="supply_show">
        <div class="supply_swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img1.png" alt=""/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img2.png" alt=""/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img1.png" alt=""/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img2.png" alt=""/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="options">
      <a class="focus">
        <img src="../../assets/img/sell_shopdetail_focus.png"/>
        加关注
      </a>

      <!-- 当身份为贸易公司-->
      <router-link to="/keySellFirm" class="keysell">
        <img src="../../assets/img/sell_shopdetail_yijian.png"/>
        一键卖货
      </router-link>
      <!-- 当身份为打包站-->
      <!--<a class="chat">-->
        <!--<img src="../../assets/img/orderdetail_liao.png"/>-->
        <!--聊一聊-->
      <!--</a>-->

      <a class="call">
        <img src="../../assets/img/orderdetail_phone.png"/>
        打电话
      </a>
    </div>
  </div>
</template>

<script>
  import Swiper from '../../../static/swiper.min'
  import '../../../static/swiper.min.css'

  export default {
    mounted: function () {
      var swiper1= new Swiper('.strength_swiper', {
        loop : false,
        slidesPerView: 'auto',
        autoplay: false
      });
      var swiper2= new Swiper('.supply_swiper', {
        loop : false,
        slidesPerView: 'auto',
        autoplay: false
      });
    }
  }
</script>

<style scoped>
  .strength_swiper .swiper-slide,.supply_swiper .swiper-slide{
    padding-right: 16px;
    float: left;
    display: inline-block;
    width: auto;
  }
  .strength_swiper,.supply_swiper{
    overflow: hidden;
  }
  .strength_swiper .swiper-slide img,
  .supply_swiper .swiper-slide img{
    width: 154px;
    height: 154px;
    margin-bottom: 16px;
  }
</style>
