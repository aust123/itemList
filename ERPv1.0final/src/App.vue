<template>
  <div id="app">
     <transition name="fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>   
    </transition>
     <transition name="fade">
     <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route(to, from) {
      document.body.scrollTop = '0';
    }
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
