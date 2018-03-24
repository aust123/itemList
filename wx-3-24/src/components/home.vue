<template>
  <div style="height: 100%;">
    <v-swiper></v-swiper>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from './footer/footer.vue'
  import swiper from './swiper/swiper.vue'
  export default {
    components: {
      'v-footer':footer,
      'v-swiper': swiper
    }
  }
</script>

<style scoped>
</style>
