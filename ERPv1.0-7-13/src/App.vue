<template>
  <div id="app">
    
     <!-- <router-view/> -->
   <keep-alive>
    <router-view/>
  </keep-alive>

  </div>
</template>

<script>
export default {
  name: "App"
  // watch: {
  //   $route(to, from) {
  //    console.log(from)
  //   }
  // },
};
</script>

<style>
</style>
