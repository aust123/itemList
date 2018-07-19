<template>
  <div class="notfound">
    <div class="error"></div>
    <div class="etext">页面不存在！</div>
  </div>
</template>

<style lang="css" scoped>
   .error{
      width: 500px;
      height: 500px;
      margin: 250px auto 40px auto;
      background: url(../assets/imgs/error.png) no-repeat;
      background-size: 100%;
      background-position: -10px center;
   }
   .etext{
     text-align:center;
     color:#555;
     font-size: 34px;
   }
</style>