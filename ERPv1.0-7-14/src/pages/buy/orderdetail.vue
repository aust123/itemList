<template>
    <div>
        <Header :noSearch='0'><span slot="title">采购订单详情</span></Header>     
        <nav v-show="isHide">
            <a href="javasvript:;" v-for='(item,$index) in navBar' :key="$index" @click="change($index)" :class="{on:$index==active}">{{item}}</a>           
        </nav> 
        <keep-alive>
          <router-view/>
        </keep-alive>       
    </div>
</template>
<script>
import Header from'../../components/header'
export default {
   components:{       
        Header
    },
  data() {
    return {
      active: 0,
      isHide: 0,
      navBar: ["订单详情", "订单追踪"],
      title:'',
      titles:'',
      orderId: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    //console.log(from);
    //console.log(to);
    //这个钩子函数访问不到this，可以在next中传入vm进行访问
    next(vm => {
      vm.title = `${to.query.titles}详情`;
      vm.titles= to.query.titles; 
      if(to.query.titles.includes("销售订单")||to.query.titles.includes("采购订单")){
           vm.isHide = 1;//是否显示订单追踪
      }
      if (to.path.includes("ordertrack")) {
        vm.active = 1;
      }else{
        vm.active = 0;
      }
    });
  },
 created(){
   //console.log(this.$route.query);
  this.orderId = this.$route.query.oid;
  this.titles=this.$route.query.titles;
 },
  mounted(){

  },
  methods: {   
    change($index) {
      this.active = $index;
      let suburl = $index == 0 ? "orderdetaildata" : "ordertrack";
      this.$router.push({
        path: `/orderdetail/${suburl}`,
        query:{
           titles: this.titles,
           oid:this.orderId
        }
      });
    },
    makeSure() {}
  }
};
</script>
<style>
/*头部样式 */
body {
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
