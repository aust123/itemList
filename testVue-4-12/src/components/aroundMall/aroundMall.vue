<template>
  <div class="aroundMall">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/buy">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      周边商城
    </div>
    <div class="aroundMall_banner">
      <img src="../../assets/img/buy_zhoubian_banner.png" alt=""/>
    </div>
    <div class="aroundMall_operate">
      <ul>
        <li>
          <p>
            <img src="../../assets/img/buy_icon_dabaoji.png" alt=""/>
          </p>
          <p>买打包机</p>
        </li>
        <li>
          <p>
            <img src="../../assets/img/buy_icon_sheng.png" alt=""/>
          </p>
          <p>买打包绳</p>
        </li>
        <li>
          <p>
            <img src="../../assets/img/buy_icon_oil.png" alt=""/>
          </p>
          <p>买液压油</p>
        </li>
        <li>
          <p>
            <img src="../../assets/img/buy_icon_place.png" alt=""/>
          </p>
          <p>场地出租</p>
        </li>
      </ul>
    </div>
    <div class="aroundMall_cooperate">
      <h3 class="container_title">合作商家</h3>
      <div class="aroundMall_swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <p>
              <img src="../../assets/img/buy_zhoubian_img1.png" alt=""/>
            </p>
            <p>安东打包站</p>
          </div>
          <div class="swiper-slide">
            <p>
              <img src="../../assets/img/buy_zhoubian_img2.png" alt=""/>
            </p>
            <p>合肥工业区</p>
          </div>
          <div class="swiper-slide">
            <p>
              <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
            </p>
            <p>吉安纸厂</p>
          </div>
          <div class="swiper-slide">
            <p>
              <img src="../../assets/img/buy_zhoubian_img4.png" alt=""/>
            </p>
            <p>安东打包站</p>
          </div>
          <div class="swiper-slide">
            <p>
              <img src="../../assets/img/buy_zhoubian_img5.png" alt=""/>
            </p>
            <p>合肥工业区</p>
          </div>
          <div class="swiper-slide">
            <p>
              <img src="../../assets/img/buy_zhoubian_img6.png" alt=""/>
            </p>
            <p>吉安纸厂</p>
          </div>
        </div>
      </div>
    </div>
    <div class="aroundMall_tuijian">
      <h3 class="container_title">热门推荐</h3>
      <ul class="aroundMall_tuijian_list">
        <li>
          <router-link to="/aroundDetail">
            <div class="picture">
              <img src="../../assets/img/buy_zhoubian_img1.png" alt=""/>
            </div>
            <div class="content">
              <h4>打包机</h4>
              <h5>
                <b>200000</b>元/个
              </h5>
              <p>
                <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
                山东省濉坊安东市
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from '../../../static/swiper.min'
  import '../../../static/swiper.min.css'
  import '../../assets/css/common.css'

  export default {
    mounted: function () {
      var swiper= new Swiper('.aroundMall_swiper', {
        loop : false,
        slidesPerView: 'auto',
        autoplay: false
      });
    }
  }
</script>

<style scoped>
  .aroundMall_swiper .swiper-slide{
    padding-right: 15px;
    text-align: center;
    font-size: 26px;
    color: #333;
    float: left;
    display: inline-block;
    width: auto;
    padding-bottom: 18px;
  }
  .aroundMall_swiper{
    overflow: hidden;
  }
  .aroundMall_swiper .swiper-slide img{
    width: 176px;
    height: 223px;
    margin-bottom: 8px;
  }
</style>
