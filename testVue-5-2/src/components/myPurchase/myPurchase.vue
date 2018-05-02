<template>
  <div class="myPurchase">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/buy">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      我的采购
    </div>
    <div class="myPurchase_select intention_item">
      <router-link :class="{'active':(this.$route.path=='/myPurchase'||this.$route.path=='/myPurchase/intentionList')}" to="/myPurchase/intentionList" class="one">我的采购意向</router-link>
      <router-link :class="{'active':this.$route.path=='/myPurchase/purchaseList'}" to="/myPurchase/purchaseList" class="two">我发布的采购</router-link>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default{
  }
</script>

<style scoped>

</style>
