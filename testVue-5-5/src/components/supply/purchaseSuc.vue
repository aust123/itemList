<template>
  <div class="purchaseSuc">
    <div class="return_prelevel">
      <a onclick="window.history.go(-1)" class="return_icon">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      我的采购
    </div>
    <div class="purchaseSuc_content">
      <p>
        <img src="../../assets/img/buy_shengcheng_icon.png" alt=""/>
      </p>
      <p>已生成订单，请前往订单页面查看！</p>
      <h4>（<span id="mes">5</span>s后关闭）</h4>
      <a href="">前往订单页面 >></a>
    </div>
    <div class="purchaseSuc_adver">
      <img src="../../assets/img/buy_banner1.png" alt=""/>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/common.css'

  export default{
    data:function(){
      return{
        count:5
      }
    },
    created:function(){
      window.setInterval(function(){
        var s = document.getElementById("mes");
        if(s.innerHTML == 0){
//          window.location.href='www.baidu.com';
          return false;
        }
        s.innerHTML = s.innerHTML * 1 - 1;
      }, 1000);
    }
  }
</script>

<style scoped>
</style>
