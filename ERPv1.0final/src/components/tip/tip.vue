<template>
  <div v-show="show" class="formTip">
    <div class="tipMsg">{{tipmsg[0]}}</div>
  </div>
</template>

<script>
  export default{
    props:{
      tipmsg:Array
    },
    data:function(){
      return{
        show:false,
        timer:''
      }
    },
    watch:{
      tipmsg:function(){
        if(this.tipmsg[1]){
          var _this=this;
          _this.show=true;
          _this.timer=setTimeout(function(){
            _this.show=false;
            clearTimeout(_this.timer);
          },2000);
        }
      }
    },
    mounted:function(){

    }
  }
</script>

