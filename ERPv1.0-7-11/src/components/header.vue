<template>
<div>
     <header>
        <a class="back left"  href="javasvript:;" @click="back"><img src="../assets/imgs/nav_jiantou_left.png" ></a>
           {{title}}
        <router-link :class="{'hide':noSearch===0}" :to='{path:"/search",query:{type:title}}' class="search right"><img src="../assets/imgs/nav_icon_search.png" ></router-link>
    </header>
</div>   
</template>
<script>
export default {
  props:['title','noSearch'],
  data() {
    return {};
  },
  mounted(){
   // console.log(this.noSearch)
  },
  methods: {
       back(){
         this.$router.go(-1);
      },     
  }
};
</script>
<style>
/*头部样式 */
body{
    background-color: #f1f1f1;
}

header {
  font-size: 36px;
  height: 88px;
  line-height: 88px;
  color: #333;
  text-align: center;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
}
header img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.left {
  float: left;
}
.right {
  float: right;
}
.hide{
  display: none;
}
header a {
  height: 100%;
  position: relative;
}
.back img {
  width: 20px;
  height: 38px;
  left: 0;
}
.search img {
  width: 40px;
  height: 40px;
  right: 0;
}
</style>


