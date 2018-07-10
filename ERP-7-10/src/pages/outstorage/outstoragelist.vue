<template>
    <div>
         <Header :title='title'></Header>        
        <navBar :navList='navBar'></navBar>  
        <List :queryVal='queryVal' :title='title'></List>      
    </div>
</template>
<script>
import Header from "../../components/header";
import navBar from "../../components/navbar";
import List from "../../components/list";
export default {
  components: {
    navBar,
    List,
    Header
  },
  // beforeRouteLeave(to, from, next) {  
  //     next({path:'/salelist'});   
  // },
  data() {
    return {
      active: 0,
      navBar: ["全部", "待出库", "已出库", "已取消"],
      queryVal: "皖A999",
      title: "出库单"
    };
  },
  mounted() {
    if (this.$route.query.name) {
      this.queryVal = this.$route.query.name;
    }
  },
  methods: {
    back() {},

    change($index) {
      this.active = $index;
    }
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
</style>
