<template>
  <div class="attention">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/sale">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      关注
    </div>
    <div class="attentionChange">
      <router-link :class="{'active':this.$route.path=='/attention'}" to="/attention/attentionProduct">关注的商品</router-link>
      <router-link to="/attention/attentionShop">关注的店铺</router-link>
      <router-link to="/attention/chatHistory">聊天记录</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
  }
</script>

<style scoped>
  .attentionChange .router-link-active{
    color: #666;
    border-bottom: 5px solid #00d3af;
  }
</style>
