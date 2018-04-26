<template>
  <div class="product_detail">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/aroundMall">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      商品详情
    </div>
    <div class="detail_imgs">
      <div class="detail_swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/img/buy_banner1.png" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/buy_banner2.png" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/buy_banner3.png" alt=""/>
          </div>
        </div>
        <div class="detail-pagination"></div>
      </div>
    </div>
    <div class="identity">
      <p>产品名称：德润打包机</p>
      <p>生产厂家：德润</p>
      <p>
        价格：
        <b>2500 元/吨</b>
      </p>
      <p>发货地址：安徽省合肥市蜀山区</p>
      <a>联系卖家</a>
    </div>
    <div class="description">
      <ul class="description_select">
        <li class="active">商品详情</li>
      </ul>
      <!-- tab-container -->
      <div class="description_show">
        <div class="summary_content">
          <h4>sadasdasdasdasdasdasd</h4>
          <p>
            <img src="../../assets/img/buy_zhoubian_img1.png" alt=""/>
          </p>
          <p>
            <img src="../../assets/img/buy_zhoubian_img2.png" alt=""/>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from '../../../static/swiper.min'
  import '../../../static/swiper.min.css'
  import '../../assets/css/common.css'

export default{
  mounted:function(){
    var swiper = new Swiper('.detail_swiper', {
      pagination: {
        el: '.detail-pagination',
        dynamicBullets:true,
        dynamicMainBullets:3
      },
      slidesPerView: 'auto'
    });
  },
  data:function(){
    return{
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .detail_swiper{
    overflow: hidden;
  }
  .swiper-slide img{
    width: 100%;
  }
  .detail_swiper{
    position: relative;
  }
  .detail-pagination{
    position: absolute;
    bottom: 15px;
    z-index: 100;
    width: auto!important;
  }
  .identity{
    position: relative;
  }
  .identity p b{
    color: #FF5000;
  }
  .identity a{
    display: inline-block;
    width: 124px;
    height: 59px;
    text-align: center;
    line-height: 59px;
    background-image: url('../../assets/img/buy_zhoubian_phone.png');
    background-repeat: no-repeat;
    background-size: 34px 34px;
    background-position: 15px center;
    color: #208df0;
    font-size: 30px;
    padding-left: 60px;
    padding-right: 20px;
    border: 1px solid #208df0;
    border-radius: 10px;
    position: absolute;
    right: 30px;
    top: 35%;
  }
  .description{
    border-top: 1px solid #e0e0e0;
    margin-top: 14px;
  }
  .summary_content p{
    text-align: center;
    margin-top: 30px;
  }
  .summary_content img{
    width: 560px;
    height: 420px;
  }
</style>
