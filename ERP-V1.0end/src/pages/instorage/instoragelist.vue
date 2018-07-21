<template>
    <div>
       <Header searchurl='/instorageSearch' backurl='/home'><span slot="title">入库单</span></Header>
      <navBar :navList='navBar' @changeType='switchState'></navBar>
     <div class="content">

        <div class="prdListWrap">
            <div class="queryItem" v-show="queryVal">
                <span>{{queryVal}}<img @click="removeQueryVal" src="../../assets/imgs/sellorder_key_cancel.png" alt=""></span>
            </div>
            <mt-loadmore
             :top-method="refresh"
            @top-status-change="handleTopChange"
            :bottom-method="bottomload"
            :bottom-all-loaded="allLoaded"
            @bottom-status-change="handleBottomChange"
            :auto-fill="false"
            :topDistance=90
            :bottomDistance=90
             ref="loadmore">

                <section class="orderList" v-for="(item,index) in instorageData" :key="index">
                    <p class="order-list-title"><img src="../../assets/imgs/sellorder_icon_orderid.png" alt="">{{item.eli_plate_number}}<span class="date">{{item.updated_at}}</span>
                        <span class="status" v-if="item.eps_state==1">待确认</span>
                        <span class="status" v-if="item.eps_state==2">已完成</span>
                        <span class="status" v-if="item.eps_state==3">已取消</span>
                    </p>

                    <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{item.eps_product_stage}}</b><b>{{item.eps_product_name}}</b><b>{{item.eps_net_weight}}</b><b class="unit">吨</b>
                    <!-- <span>安徽省纸元网络科技</span> -->
                    </p>
                    <p class="order-list-state">
                          <a href="javascript:;">
                            <img src="../../assets/imgs/sellorder_track_tishi.png" alt="">
                            <span v-if="item.eps_state==1">{{item.created_at}} {{item.eli_plate_number}}结算完成，等待入库</span>
                            <span v-if="item.eps_state==2">{{item.created_at}} {{item.eli_plate_number}}入库完成</span>
                            <span v-if="item.eps_state==3">{{item.created_at}} 取消入库</span>
                            <img class="left-arrow hide" src="../../assets/imgs/jiantou_left.png" alt="">
                        </a>
                    </p>
                    <p class="order-list-option">
                        <router-link :to="{path:'/stockIn',query:{oid:item.eps_id}}" class="order-sure"  v-if="item.eps_state==1">入库</router-link>
                        <router-link class="order-to-detail" :to="{path:'/instorageOrderdetail',query:{oid:item.eps_id}}">详情</router-link >
                    </p>
                </section>
                 <div slot="top" class="mint-loadmore-top" style="text-align:center">
                  <span v-show="topStatus == 'drop'" >释放更新</span>
                  <span v-show="topStatus == 'pull'" >下拉刷新</span>
                  <span v-show="topStatus === 'loading'"><mt-spinner :class="{ 'loading': topStatus === 'loading' }" type="snake" :size="16" color="rgb(100, 100, 100)"></mt-spinner>加载中</span>
                 </div>

                 <div slot="bottom" class="mint-loadmore-bottom">
                  <span v-show="bottomStatus !== 'loading'" >上拉加载更多</span>
                  <span v-show="bottomStatus === 'loading'"><mt-spinner :class="{ 'btloading': bottomStatus === 'loading' }" type="snake" :size="16" color="rgb(100, 100, 100)"></mt-spinner></span>
                 </div>
             </mt-loadmore>
            <p v-show="tiptext" class="nodatatext">{{tiptext}}</p>
             </div>
        </div>

    </div>
</template>
<script>
import Header from "../../components/header";
import navBar from "../../components/navbar";
import api from "@/axios/api.js";
import { setTimeout } from 'timers';
export default {
  components: {
    navBar,
    Header
  },
  data() {
    return {
      navBar: ["全部", "待入库", "已入库", "已取消"],
      queryVal: "",
      title: "",
      page: 1,
      size: 10,
      state: 0,
      instorageData: [],
      nodata: 0,
      keywords: "",
      searchId: 0,
      tiptext: "",
      allLoaded: false,
      scrollMode: "auto",
      bottomStatus: "",
      topStatus: ""
    };
  },
  activated() {
    //   this.queryVal = this.cookie.getCookie("keywords");
    //   this.searchId = this.cookie.getCookie("searchId");
    // this.getdata();
  },
  created() {
    if (this.cookie.getCookie("keywords")) {
      this.queryVal = this.cookie.getCookie("keywords");
      this.searchId = this.cookie.getCookie("searchId");
    }
    this.init();
    this.getdata();
  },
  methods: {
    removeQueryVal() {
      this.instorageData = [];
      this.queryVal = "";
      this.cookie.delCookie("keywords");
      this.cookie.delCookie("searchId");
      this.init();
      this.getdata();
    },
    refresh() {
      this.page = 1;
       this.init();
      this.instorageData = [];
      this.allLoaded = false;
       this.getdata();
      setTimeout(()=>{
        this.$refs.loadmore.onTopLoaded();
      },1400)
   },
    bottomload() {
      if (this.instorageData.length % this.size != 0) {
        this.allLoaded = true;
      }
      this.page++;
      this.getdata();
      setTimeout(() => {
         this.$refs.loadmore.onBottomLoaded();
      }, 1000);
    },
    handleBottomChange(status) {
      this.bottomStatus = status; //上拉状态变换
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    init() {
      this.nodata = 0;
      this.tiptext = "";
    },
    switchState($index) {
      this.page = 1;
      this.instorageData = [];
      this.state = $index;
      this.init();
      this.getdata();
    },
    getdata() {
      let params = {
        eo_id: this.cookie.getCookie("uid"),
        pagenum: this.page,
        size: this.size,
        keyword: this.queryVal,
        type: this.searchId,
        eps_state: this.state
      };
      api.getInstorageListAndSearch(params).then(res => {
        if (res.status_code == 10000) {
          this.instorageData = [...this.instorageData,...res.data];
          // if (this.instorageData.length % this.size != 0) {
          //   this.allLoaded = true;
          // }
        } else if (res.status_code == 10045) {
          this.nodata = 1;
          this.tiptext = res.msg;
        } else if (res.status_code == 10003) {
          this.nodata = 1;
          this.tiptext = res.msg;
        }
      });
    }
  }
};
</script>
<style scoped src='../../assets/css/list.css' ></style>
