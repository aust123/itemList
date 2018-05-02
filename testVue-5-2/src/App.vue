<template>
  <div id="app">
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  export default{
    created :function() {
      var _this = this;
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          _this.$store.commit('ADDRESS',r);
        }
        else {
          alert('failed'+this.getStatus());
        }
      });
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    
    background: #F1F1F1;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  ul,.clearfix{
    list-style: none;
    overflow: hidden;
  }
  input,button,textarea,select{
    border: none;
    outline: none;
    background: #fff;
  }
  textarea{
    resize: none;
  }
  img{
    vertical-align: middle;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  h1,h2,h3,h4,h5,h6,b,strong{
    font-weight: normal;
  }
  em{
    font-style: normal;
  }
</style>
