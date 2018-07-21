<template>
    <div>
       <Header searchurl='/checkSearch' backurl='/home'><span slot="title">质检单</span></Header>
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
            <section class="orderList" v-for="(item,index) in checkListData" :key="index">
                <p class="order-list-title"><img src="../../assets/imgs/buyorder_icon_sell.png" alt="">{{item.eqc_number}}<span class="date">{{item.created_at}}</span>
                <span class="status" v-if="item.eqc_state==1">待质检</span>
                <span class="status" v-else-if="item.eqc_state==2">已质检</span>
                <span class="status" v-else-if="item.eqc_state==3">已取消</span>
              </p>
                <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{item.epo_product_stage}}</b><b>{{item.epo_product_name}}</b><b>{{item.epo_total_amount}}</b><b class="unit">吨</b><span>{{item.epo_supplier_name}}</span></p>
                <p class="order-list-state">
                     <a href="javascript:;">
                        <img src="../../assets/imgs/sellorder_track_tishi.png" alt="">
                        <span v-if="item.eqc_state==1">{{item.follow_time}} 业务员采购成功,{{item.eli_plate_number}}等待质检</span>
                        <span v-else-if="item.eqc_state==2">{{item.follow_time}}{{item.eli_plate_number}}质检成功</span>
                        <span v-else-if="item.eqc_state==3">{{item.follow_time}}{{item.operator_name}}取消了订单，质检取消</span>
                        <img class="left-arrow hide" src="../../assets/imgs/jiantou_left.png" alt="">
                    </a>
                </p>
                <p class="order-list-option">
                    <router-link :to="{path:'/inspection',query:{oid:item.eqc_id,path:$route.fullPath}}" class="order-sure jiesuan"  v-if="item.eqc_state==1">质检录入</router-link>
                    <router-link class="order-to-detail" :to="{path:'/checkOrderdetail',query:{oid:item.eqc_id}}">详情</router-link >
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
             <p class="nodatatext" v-show="nodata">{{tiptext}}</p>
             </div>
        </div>
    </div>
</template>
<script>
import navBar from "../../components/navbar";
import Header from "../../components/header";
import api from "@/axios/api.js";
export default {
  components: {
    navBar,
    Header
  },
  data() {
    return {
      navBar: ["全部", "待质检", "已质检", "已取消"],
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
  created() {
    this.queryVal = this.cookie.getCookie('keywords');
    this.searchId = this.cookie.getCookie('searchId');
     this.getListData();
  },
  methods: {
     refresh() {
      this.page = 1;
      this.checkListData = [];
      this.getListData();
       this.allLoaded = false;
       setTimeout(()=>{
        this.$refs.loadmore.onTopLoaded();
      },1400)
    },
    bottomload() {
     if(this.checkListData.length%this.size !=0){
         this.allLoaded = true;
     }
      this.page++;
      this.getListData();
    setTimeout(() => {
         this.$refs.loadmore.onBottomLoaded();
         //this.tiptext = '暂无更多数据'
      }, 1000);
    },
    handleBottomChange(status) {
      this.bottomStatus = status; //上拉状态变换
    },
    handleTopChange(status) {
        this.topStatus = status;
      },
    removeQueryVal() {
      this.queryVal = "";
      this.checkListData = [];
     this.cookie.delCookie('keywords');
      this.cookie.delCookie('searchId');
      this.init();
      this.getdata();
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
    init() {
      this.nodata = 0;
        this.tiptext = "";
    },
    switchState($index) {
      this.page = 1;
       this.checkListData = [];
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
        uid:this.cookie.getCookie('uid'),
        pageNum: this.page,
        size: this.size,
        state: this.state,
        keywords: this.queryVal,
        search_id: this.searchId
      };
      api.getQualityListByKeywords(params).then(res => {
        if (res.status_code == 10000) {
           this.checkListData = [...this.checkListData,...res.data];
           if (this.checkListData.length % this.size != 0) {
            this.allLoaded = true;
          }
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
        uid:this.cookie.getCookie('uid'),
        pageNum: this.page,
        size: this.size,
        state: this.state
      };
      api.getQualityCheckList(params).then(res => {
        if (res.status_code == 10000) {
           this.checkListData = [...res.data, ...this.checkListData];
           if (this.checkListData.length % this.size != 0) {
            this.allLoaded = true;
          }
        } else if (res.status_code == 10045) {
          this.nodata = 1;
          this.tiptext = res.msg;
        }
      });
    }
  }
};
</script>
<style scoped src='../../assets/css/list.css' ></style>
