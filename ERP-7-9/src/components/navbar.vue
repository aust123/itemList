<template>
    <swiper :options="swiperOption" ref ='mySwiper' @slideChange='move' @reachBeginning='begin' @reachEnd='end'>
　　　　<swiper-slide v-for="(item,index) in navList" :key='index' >
           <a href="javascript:;" @click="change(index)" :class="{on:index==active}">{{item}}</a> 
　　　　</swiper-slide>　　　
　　</swiper>
</template>
<script>
export default {
    props:{
       navList:{} 
    },
  data() {
    return {
      active: 0,
      over: 1,      
      swiperOption: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        watchSlidesProgress: true,
        
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    change($index) {
      console.log($index);
      if ($index == 4) {
        if (this.swiper.progress != 1) {
          this.swiper.slideToLoop(5, 500, false);
          this.$set(this.navList, 4, "待发货");
        } else {
          this.swiper.slideToLoop(0, 500, false);
          this.$set(this.navList, 4, "更多");
          $index = 3;
        }
      }
      this.active = $index;
    },
    move(){
       // console.log(this.swiper.isEnd)
    },
    begin(){       
         this.$set(this.navList, 4, "更多");
         
    },
    end(){       
         this.$set(this.navList, 4, "待发货");         
    }
  }
};
</script>
<style>
/*导航样式 */
.swiper-slide {
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
.swiper-slide a {
  display: flex;
  flex-grow: 1;
  color: #666;
  font-size: 30px;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid transparent;
}
.swiper-slide-active {
  border-bottom: 4px solid transparent;
}
.on {
  color: #00d3af !important;
  border-bottom: 4px solid #00d3af !important;
}
</style>


