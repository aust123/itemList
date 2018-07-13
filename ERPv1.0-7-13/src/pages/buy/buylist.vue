<template>
    <div>
       <Header searchurl='/saleSearch'><span slot="title">采购订单</span></Header>  
        <navBar :navList='navBar'></navBar>  
        <List :queryVal='queryVal' :title='title'></List>       
    </div>
</template>
<script>
import Header from'../../components/header'
import navBar from'../../components/navbar'
import List from'../../components/list'
export default {
    components:{
      navBar,
        List,
        Header
    },
  data() {
    return {
      active: 0,
      navBar: ["全部", "待确认", "待出库", "待发货", "更多",'已收货','待收款','已完成','已取消'],
      queryVal:'皖A999',
      title:'采购订单'
    }
  },
  mounted(){    
      if(this.$route.query.name){
        this.queryVal=this.$route.query.name
      }
  },
  methods: {       
    change($index) {
      this.active =$index;
    }
  }
};
</script>
<style>

</style>
