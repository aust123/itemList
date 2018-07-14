<template>
    <div>
        <Header searchurl='/outstorageSearch'><span slot="title">出库单</span></Header>       
        <navBar :navList='navBar' @changeType='switchState'></navBar>  
        <div class="content">
            <div class="queryItem" v-show="queryVal">
                <span>{{queryVal}}<img @click="removeQueryVal" src="../../assets/imgs/sellorder_key_cancel.png" alt=""></span>               
            </div>            
            <section class="orderList" v-for="(item,index) in outstorageData" :key="index">
                <p class="order-list-title"><img src="../../assets/imgs/buyorder_icon_sell.png" alt="">{{item.eso_paper_name}}<span class="date">{{item.updated_at}}</span>
                <span class="status" v-if="item.edo_state==1">待出库</span>
                <span class="status" v-if="item.edo_state==2">已出库</span>
                <span class="status" v-if="item.edo_state==3">已取消</span>
                </p>
                <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{item.edo_product_stage}}</b><b>国废标准纸</b><b>{{item.edo_product_name}}</b><b class="unit">吨</b>
                <!-- <span>安徽省纸元网络科技</span> -->
                </p>
                <p class="order-list-state">
                    <a href="javascript:;">
                        <img src="../../assets/imgs/sellorder_track_tishi.png" alt="">
                        <span v-if="item.edo_state==1">{{item.created_at}} 等待出库</span>
                        <span v-if="item.edo_state==2">{{item.created_at}} 出库完成</span>
                        <span v-if="item.edo_state==3">{{item.created_at}} 取消出库</span>
                        <img class="left-arrow hide" src="../../assets/imgs/jiantou_left.png" alt="">
                    </a>
                </p>
                <p class="order-list-option">
                     <router-link :to="{path:'/stockOut',query:{oid:item.edo_id}}" class="order-sure"  v-if="item.edo_state==1">出库</router-link>
                    <router-link class="order-to-detail" :to="{path:'/outstorageOrderdetail',query:{oid:item.edo_id}}">详情</router-link >                                  
                </p>
            </section>
            <p v-show="tiptext" class="nodatatext">{{tiptext}}</p>
        </div>    
    </div>
</template>
<script>
import Header from "../../components/header";
import navBar from "../../components/navbar";
import api from "@/axios/api.js";
export default {
  components: {
    navBar,
    Header
  },
  data() {
    return {
      navBar: ["全部", "待出库", "已出库", "已取消"],
      queryVal: "",
      title: "",
      page: 1,
      size: 10,
      state: 0,
      outstorageData: [],
      nodata: 0,
      keywords: "",
      searchId: "",
      tiptext: ""
    };
  },
  activated() {
    this.queryVal = this.cookie.getCookie("keywords");
    this.searchId = this.cookie.getCookie("searchId");
    if (this.queryVal) {
      this.init();
      this.getSearchdata();
    } else {
      this.init();
      this.getdata();
    }
  },
  created() {
    //this.getdata();
  },
  methods: {
    removeQueryVal() {
      this.queryVal = "";
      this.cookie.delCookie();
      this.init();
      this.getdata();
    },
    init() {
      this.nodata = 0;
      this.tiptext='';
      this.outstorageData = [];
    },
    switchState($index) {
      this.state = $index;
      if (this.queryVal) {
        this.init();
        this.getSearchdata();
      } else {
        this.init();
        this.getdata();
      }
    },
    getSearchdata() {
      let params = {
        uid: 1,
        pageNum: this.page,
        size: this.size,
        state: this.state,
        keywords: this.queryVal,
        search_id: this.searchId
      };
      api.getInstorageSearchInfo(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          this.outstorageData = res.data;
        } else if (res.status_code == 10045) {
          this.nodata = 1;
          this.tiptext = res.msg;
        } else if (res.status_code == 10005) {
          this.nodata = 1;
          this.tiptext = res.msg;
        }
      });
    },
    getdata() {
      let params = {
        eo_id: 1,
        pagenum: this.page,
        size: this.size,
        edo_state: this.state
      };
      api.getOutStorageList(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          this.outstorageData = res.data;
        } else if (res.status_code == 10003) {
          this.nodata = 1;
          this.tiptext = res.msg;
        }
      });
    }
  }
};
</script>
<style>
.nodatatext{
  height: 40px;
  font-size: 30px;
  text-align: center;
  color: #666;
}
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
