<template>
    <div>
         <header>
            <a class="back left" href="javasvript:;" @click="back"><img src="../../assets/imgs/nav_jiantou_left.png" ></a>
            销售订单详情           
        </header>
        <nav>
            <a href="javasvript:;" v-for='(item,$index) in navBar' :key="$index" @click="change($index)" :class="{on:$index==active}">{{item}}</a>           
        </nav> 
        <router-view/>
    </div>
</template>
<script>
export default {
  data() {
    return {
         active: 0,
         navBar: ["订单详情", "订单追踪"]
    };
  },
  methods: {
      back(){

      },
    change($index) {
      this.active =$index;
      let routerId = $index==0?'orderdetaildata':'ordertrack'
      this.$router.push({
          path:`/${routerId}`
      })
    }
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
/*导航样式 */
nav {
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
nav a {
  display: flex;
  flex-grow: 1;
  color: #666;
  font-size: 30px;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.on {
  color: #00d3af;
  border-bottom: 4px solid #00d3af;
}
</style>
