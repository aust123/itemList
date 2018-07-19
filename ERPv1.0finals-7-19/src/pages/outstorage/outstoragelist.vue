<template>
    <div>
        <Header searchurl='/outstorageSearch' backurl='/home'><span slot="title">出库单</span></Header>
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
            <section class="orderList" v-for="(item,index) in outstorageData" :key="index">
                <p class="order-list-title"><img src="../../assets/imgs/buyorder_icon_sell.png" alt="">{{item.eso_paper_name}}<span class="date">{{item.updated_at}}</span>
                <span class="status" v-if="item.edo_state==1">待出库</span>
                <span class="status" v-if="item.edo_state==2">已出库</span>
                <span class="status" v-if="item.edo_state==3">已取消</span>
                </p>
                <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{item.edo_product_stage}}</b><b>{{item.eso_paper_name}}</b><b>{{item.edo_should_delivery_amount}}</b><b class="unit">吨</b>
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
                     <router-link :to="{path:'/stockOut',query:{oid:item.edo_id,path:$route.fullPath}}" class="order-sure"  v-if="item.edo_state==1">出库</router-link>
                    <router-link class="order-to-detail" :to="{path:'/outstorageOrderdetail',query:{oid:item.edo_id}}">详情</router-link >
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
      tiptext: "",
      allLoaded: false,
      scrollMode: "auto",
      bottomStatus: "",
      topStatus: ""
    };
  },
  activated() {
    // this.queryVal = this.cookie.getCookie("keywords");
    // this.searchId = this.cookie.getCookie("searchId");
    //   this.init();
    //   this.getdata();
  },
  created() {
    if(this.cookie.getCookie("keywords")){
       this.queryVal = this.cookie.getCookie("keywords");
    this.searchId = this.cookie.getCookie("searchId");
    }
      this.init();
      this.getdata();
  },
  methods: {
      removeQueryVal() {
      this.outstorageData = [];
      this.queryVal = "";
      this.cookie.delCookie("keywords");
      this.cookie.delCookie("searchId");
      this.init();
      this.getdata();
    },
    refresh() {
      this.page = 1;
      this.outstorageData = [];
      this.getdata();
      this.allLoaded = false;
       setTimeout(()=>{
        this.$refs.loadmore.onTopLoaded();
      },1400)
    },
    bottomload() {
      if(this.outstorageData.length%this.size !=0){
         this.allLoaded = true;
     }
      this.page++;
      this.getdata();
       setTimeout(() => {
         this.$refs.loadmore.onBottomLoaded();
         this.tiptext = '暂无更多数据'
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
        this.outstorageData = [];
      this.state = $index;
        this.init();
        this.getdata();
    },

    getdata() {
      let params = {
        eo_id:this.cookie.getCookie('uid'),
        pagenum: this.page,
        size: this.size,
        edo_state: this.state,
        keyword: this.queryVal,
        type: this.searchId,
      };
      api.getOutStorageList(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          this.outstorageData = res.data;
           if (this.outstorageData.length % this.size != 0) {
            this.allLoaded = true;
          }
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
