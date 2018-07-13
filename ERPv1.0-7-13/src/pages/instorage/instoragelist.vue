<template>
    <div>
       <Header searchurl='/instorageSearch'><span slot="title">入库单</span></Header>      
      <navBar :navList='navBar'></navBar>  
     <div class="content">
            <div class="queryItem" v-show="queryVal">
                <span>{{queryVal}}<img @click="removeQueryVal" src="../../assets/imgs/sellorder_key_cancel.png" alt=""></span>               
            </div>       
             
            <section class="orderList">
                <p class="order-list-title"><img src="../../assets/imgs/buyorder_icon_sell.png" alt="">SA8884545454<span class="date">今天</span><span class="status">待确认</span></p>
                <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>A级</b><b>国废标准纸</b><b>100</b><b class="unit">吨</b><span>安徽省纸元网络科技</span></p>
                <p class="order-list-state">
                      <a href="javascript:;">
                        <img src="../../assets/imgs/sellorder_track_tishi.png" alt="">
                        <span>06-24 订单生成，等待确认</span>
                        <img class="left-arrow hide" src="../../assets/imgs/jiantou_left.png" alt="">
                    </a>
                </p>
                <p class="order-list-option">
                    <a class="order-sure" href="javascript:;">入库</a>
                    <router-link class="order-to-detail" to="/instorageorderdetail">详情</router-link >                   
                </p>
            </section>
           
        </div>
    </div>
</template>
<script>
import Header from "../../components/header";
import navBar from "../../components/navbar";

export default {
  components: {
    navBar,
   
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
       removeQueryVal() {},
    change($index) {
      this.active = $index;
    }
  }
};
</script>
<style>
/*内容区域样式*/
.content{
    background-color: #F1F1F1;
    width: 100%;
    margin-top: 14px;
}
.queryItem{
   padding: 26px 30px 40px;
   box-sizing: border-box; 
}
.queryItem span{
    display: inline-block;
    width: 182px;
    height: 54px;
    line-height: 54px;
    background-color: #00d3af;
    font-size: 28px; 
    text-align: center;
    position: relative;
    color: #fff;
}
.queryItem img{
    position: absolute;
    right: -15px;
    top: -15px;
    width: 32px;
    height: 32px;
}
.orderList{   
    background-color: #fff;
    font-size: 30px;
    color: #333;
    margin-bottom: 19px; 
}
.orderList>p{
   padding: 0 30px;
    box-sizing: border-box;  
      display: flex;
     align-items: center;
}
.order-list-title,.order-list-state,.order-list-option{
    height: 88px;
}
.order-list-title img{
    width: 36px;
    height: 46px;
    margin-right: 20px;
}
.order-list-title .date{
   font-size: 28px;
   color: #666;
    margin-left: 60px;
}
.status{
    color: #0684f9;
    position: absolute;
    right: 30px;
}
.order-list-info{
    background-color: #fafafa;
    height: 188px;
    position: relative;
}
.order-list-info img{
    width: 96px;
    height: 96px;
    margin-right: 20px;
}
.order-list-info b{
    font-weight: normal;
}
.order-list-info b:nth-of-type(2){
    margin-left: 12px;
    margin-right: 30px;
}
b.unit{
   color: #666;
   font-size: 24px;
}
.order-list-info span{
    width: 132px;
    position: absolute;
    right: 30px;
    font-size: 26px;
}
.order-list-state a{
display: flex;
align-items: center;
color: #666;
font-size: 26px;
position: relative;
width: 100%;
}
.order-list-state img:nth-of-type(1){
    width: 31px;
    height: 31px;
    margin-right: 14px;
}
img.left-arrow{
    width: 17px;
    height: 31px;
   position: absolute;
   right: 0px;
}
img.left-arrow.hide{
    display: none;
}
.order-list-option{
    text-align: right;
   justify-content: flex-end;
   border-top: 1px solid #F1F1F1;

}
.order-list-option a{
    font-size: 28px;
    color: #fff;
    height: 56px;
    width: 122px;
    line-height: 56px;
    text-align: center;
    border-radius: 10px;
}
a.order-sure{
    background-color: #00d3af;
    margin-right: 30px;
}
a.order-to-detail{
    background-color: #b4b4b4;
}
a.order-sure.jiesuan{
    width: 180px;
}
</style>

