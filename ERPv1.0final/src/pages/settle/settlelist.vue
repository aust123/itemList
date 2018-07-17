<template>
    <div>
        <Header searchurl='/settleSearch' backurl='/home'><span slot="title">结算单</span></Header>    
        <navBar :navList='navBar' @changeType='switchState'></navBar> 
        
        <div class="content">
            <div class="queryItem" v-show="queryVal">
                <span>{{queryVal}}<img @click="removeQueryVal" src="../../assets/imgs/sellorder_key_cancel.png" alt=""></span>               
            </div>    
            <mt-loadmore
             :top-method="refresh"          
            @top-status-change="handleTopChange" 
            :bottom-method="bottomload" 
            :bottom-all-loaded="allLoaded"            
            bottomPullText="上拉加载更多" 
            @bottom-status-change="handleBottomChange"
            :auto-fill="false" 
             ref="loadmore">   
            <section class="orderList" v-for="(item,index) in checkListData" :key="index">
                <p class="order-list-title"><img src="../../assets/imgs/buyorder_icon_sell.png" alt="">{{item.eli_plate_number}}<span class="date">{{item.created_at}}</span>
                    <span v-if="item.es_state==1" class="status">待确认</span>
                    <span v-else-if="item.es_state==2" class="status">已确认</span>
                    <span v-else-if="item.es_state==3" class="status">已取消</span>                   
                </p>
                <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{item.es_product_stage}}</b><b>{{item.es_product_name}}</b>
                    <b v-if="item.es_state==1">{{item.zhongliang}}</b>
                    <b v-else-if="item.es_state==2">{{item.es_net_weight}}</b>
                    <b class="unit">吨</b>
                    <!-- <span>安徽省纸元网络科技</span> -->
                </p>
                <p class="order-list-state">
                     <a href="javascript:;">
                        <img src="../../assets/imgs/sellorder_track_tishi.png" alt="">
                        <span v-if="item.es_state==1">{{item.follow_time}} {{item.eli_plate_number}}{{item.content}}</span>
                        <span v-else-if="item.es_state==2">{{item.follow_time}} {{item.eli_plate_number}}{{item.content}}</span>
                        <span v-else-if="item.es_state==3">{{item.follow_time}} {{item.operator_name}}{{item.content}}</span>
                        <img class="left-arrow hide" src="../../assets/imgs/jiantou_left.png" alt="">
                    </a>
                </p>
                <p class="order-list-option">
                    <router-link :to="{path:'/accountSure',query:{oid:item.es_order_id,sid:item.es_id,path:$route.fullPath}}" v-if="item.es_state==1" class="order-sure">结算</router-link>
                    <router-link class="order-to-detail"  :to="{path:'/settleOrderdetail',query:{oid:item.es_id}}">详情</router-link >                   
                </p>
            </section>              
          </mt-loadmore>   
             <p v-show="tiptext" class="nodatatext">{{tiptext}}</p>
        </div>      
    </div>
</template>
<script>
import Header from "../../components/header";
import navBar from "../../components/navbar";
import api from "@/axios/api.js";
import { Loadmore } from "mint-ui";
export default {
  components: {
    navBar,
    Header
  },
  data() {
    return {
      navBar: ["全部", "待确认", "已确认", "已取消"],
      queryVal: "",
      title: "",
      page: 1,
      size: 10,
      state: 0,
      checkListData: [],
      nodata: 0,
      keywords: "",
      searchId: "",
      tiptext: "",
      allLoaded: false,
      scrollMode: "auto",
      bottomStatus: "",
      topStatus:''
    };
  },
  activated() {
    this.queryVal = this.cookie.getCookie("keywords");
    this.searchId = this.cookie.getCookie("searchId");
    this.checkListData = [];
    this.getListData();
  },  
  methods: {
    refresh() {
      this.page = 1;
      this.checkListData = [];
      this.getListData();
      this.$refs.loadmore.onTopLoaded();    
    },
    bottomload() {  
     if(this.checkListData.length%this.size !=0){
         this.allLoaded = true;
     }
      this.page++;
      this.getListData();      
     this.$refs.loadmore.onBottomLoaded();
    },
    handleBottomChange(status) {
      this.bottomStatus = status; //上拉状态变换
    },
    handleTopChange(status) {        
        this.topStatus = status;
      },
    tips($msg) {
      this.nodata = 1;
      this.tiptext = $msg;
    },
    getListData() {
      if (this.queryVal) {
        this.init();
        this.getSearchdata();
      } else {
        this.init();
        this.getdata();
      }
    },
    removeQueryVal() {
       this.checkListData = [];
      this.queryVal = "";
      this.cookie.delCookie("keywords");
      this.cookie.delCookie("searchId");
      this.init();
      this.getdata();
    },
    init() {
      this.nodata = 0;
      this.tiptext = "";
    },
    switchState($index) {
      this.state = $index;
      this.page = 1;
      this.checkListData = [];
      this.getListData();
    },
    getSearchdata() {
      let params = {
        uid: this.cookie.getCookie("uid"),
        pageNum: this.page,
        size: this.size,
        state: this.state,
        keywords: this.queryVal,
        search_id: this.searchId
      };
      api.getBalanceListByKeywords(params).then(res => {
        if (res.status_code == 10000) {
          this.checkListData = [...res.data, ...this.checkListData];
        } else if (res.status_code == 10045) {        
          this.tips(res.msg);           
        } else if (res.status_code == 10005) {        
          this.tips(res.msg);
        }
      });
    },
    getdata() {
      let params = {
        uid: this.cookie.getCookie("uid"),
        pageNum: this.page,
        size: this.size,
        state: this.state
      };
      api.getBalanceList(params).then(res => {
        if (res.status_code == 10000) {
          this.checkListData = res.data;
           this.checkListData = [...res.data, ...this.checkListData];
        } else if (res.status_code == 10045) {
          this.tips(res.msg);
        } else if (res.status_code == 10003) {
          this.tips(res.msg);
        }
      });
    }
  }
};
</script>
<style scoped src='../../assets/css/list.css' ></style>

