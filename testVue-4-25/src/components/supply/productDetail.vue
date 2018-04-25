<template>
  <div class="product_detail">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/supply">
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
      <h2>
        国废A级纸
      </h2>
      <p>
        安徽省合肥市
        <span>
          <img src="../../assets/img/buy_gongyingdetail_dingwei.png"/>
          距离17公里
        </span>
      </p>
      <h3>
        <b>2500 元/吨</b>
      </h3>
    </div>
    <div class="personal_msg">
      <div class="personal_img">
        <img src="../../assets/img/my_team_touxiang2.png"/>
      </div>
      <div class="personal_name">
        <h2>张三</h2>
        <p>星级评价：<b>10级</b></p>
        <p>
          认证情况：
          <img src="../../assets/img/icon_rengzheng_qi.png" />
          <img src="../../assets/img/icon_rengzheng_shi.png" />
          <img src="../../assets/img/icon_rengzheng_tui.png" />
        </p>
      </div>
    </div>
    <div class="description">
      <ul class="description_select">
        <li @click="change" :class="{'active':active}">商品详情</li>
        <li @click="change" :class="{'active':!active}">
          累计评价 <b>（333）</b>
        </li>
      </ul>
      <!-- tab-container -->
      <div class="description_show">
        <div v-show="active" class="summary_content">
          sadasdasdasdasdasdasd
        </div>
        <div v-show="!active" class="evaluate_content">
          <ul>
            <li>
              <h3>sadasdasd</h3>
              <div class="evaluate_imgs">
                <img src="../../assets/img/buy_zhoubian_img2.png"/>
              </div>
              <p>张三&nbsp;&nbsp;&nbsp;&nbsp;33分&nbsp;&nbsp;&nbsp;&nbsp;2017-11-23</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="options">
      <a class="guanzhu">
        <img src="../../assets/img/sell_shopdetail_focus.png"/>
        加关注
      </a>
      <router-link to="/purchaseIntention" class="buy">
        <img src="../../assets/img/buy_icon_mycaigou.png"/>
        立即购买
      </router-link>
      <a class="kefu">
        <img src="../../assets/img/sell_shopdetail_phone.png"/>
        联系
      </a>
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
      active:true
    }
  },
  methods:{
    change:function(){
      this.active=!this.active;
    }
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
</style>
