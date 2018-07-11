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
  data() {
    return {
      active: 0,
      navBar: ["全部", "待入库", "已入库", "已取消"],
      queryVal: "皖A999",
      title: "入库单"
    };
  },
  mounted() {
    if (this.$route.query.name) {
      this.queryVal = this.$route.query.name;
    }
  },
  methods: {
    change($index) {
      this.active = $index;
    }
  }
};
</script>
<style>
</style>
