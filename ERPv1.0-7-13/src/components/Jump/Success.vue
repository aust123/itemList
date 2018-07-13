<template>
  <div class="jump">
    <img src="../../assets/imgs/tishi_success.png" alt=""/>
    <h3>发布成功</h3>
    <p>
      <span><b>{{seconds}}</b>秒</span> 后跳转至 <a>销售订单详情页面</a>
    </p>
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
