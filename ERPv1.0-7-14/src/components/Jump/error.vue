<template>
  <div class="jump">
    <img src="../../assets/imgs/tishi_failure.png" alt=""/>
    <h3>发布失败</h3>
    <a href="">返回上级页面</a>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        seconds:10,
        timer:''
      }
    },
    created:function() {
      var _this=this;
      _this.timer=setInterval(function(){
        if(_this.seconds==0){
          clearInterval(_this.timer);
        }else{
          _this.seconds=_this.seconds-1;
        }
      },1000);
    }
  }
</script>
<style lang="css" src="../../assets/css/home.css" scoped>
</style>
