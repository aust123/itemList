<template>
  <div class="myPurchase">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/sale">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      我的供应
    </div>
    <div class="myPurchase_select intention_item">
      <router-link :class="{'active':(this.$route.path=='/myQuote'||this.$route.path=='/myQuote/onoffer')}" to="/myQuote/onoffer" class="one">出售中 2</router-link>
      <router-link :class="{'active':this.$route.path=='/myQuote/soldout'}" to="/myQuote/soldout" class="two">已下架 4</router-link>
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
