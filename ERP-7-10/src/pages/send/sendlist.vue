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
  computed: {},
  data() {
    return {
      active: 0,
      navBar: ["全部", "待发货", "已发货", "已取消"],
      queryVal: "",
      title: "发货单"
    };
  },
  mounted() {
    //查找后返回的搜索词
    if (this.$route.query.name) {
      this.queryVal = this.$route.query.name;
    }
  },
  methods: {
    change() {
     // this.queryVal = '哈哈';
    }
  }
};
</script>
<style>

</style>
