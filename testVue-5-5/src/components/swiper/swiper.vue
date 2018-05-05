<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in swiperlist">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import buy from '../../components/buy/buy.vue'
import sale from '../../components/sale/sale.vue'
import message from '../../components/message/message.vue'
import order from '../../components/order/order.vue'
import my from '../../components/my/my.vue'

import Swiper from '../../../static/swiper.min'
import '../../../static/swiper.min.css'

export default{
  components: {
    buy,
    sale,
    message,
    order,
    my
  },
  data: function () {
    return {
      swiperlist: [
        {path: '/buy', component: buy},
        {path: '/sale', component: sale},
        {path: '/message', component: message},
        {path: '/order', component: order},
        {path: '/my', component: my}
      ]
    }
  },
  mounted: function () {
    var mySwiper = new Swiper('.swiper-container', {
      initialSlide: this.$route.path === '/buy' ? 0
        : this.$route.path === '/sale' ? 1
          : this.$route.path === '/message' ? 2
            : this.$route.path === '/order' ? 3
              : this.$route.path === '/my' ? 4 : 0
    });
    mySwiper.on('slideChange',()=>{
      this.$root.eventHub.$emit('slideTab',mySwiper.activeIndex);
    });
    this.$root.eventHub.$on('changeTab',(index)=>{
      mySwiper.slideTo(index , 0 ,false);
    });
  }
}
</script>

<style scoped>
  .swiper-box{
    height: 100%;
  }
  .swiper-container{
    height: 100%;
  }
  .swiper-wrapper{
    height: 100%;
    width: 100%;
  }
  .swiper-slide{
    height: 100%;
    overflow: hidden;
  }
</style>
