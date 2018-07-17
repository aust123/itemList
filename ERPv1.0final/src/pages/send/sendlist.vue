<template>
    <div>
        <Header searchurl='/sendSearch' backurl='/home'><span slot="title">发货单</span></Header>  
        <navBar :navList='navBar'  @changeType='switchState'></navBar>  
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
            <section class="orderList" v-for="(item,index) in sendData" :key="index">
                <p class="order-list-title"><img src="../../assets/imgs/sellorder_icon_orderid.png" alt="">{{item.eso_paper_name}}<span class="date">{{item.created_at}}</span>
                    <span class="status" v-if="item.ego_state==1">待发货</span>
                    <span class="status" v-else-if="item.ego_state==2">已发货</span>
                    <span class="status" v-else-if="item.ego_state==3">已取消</span>
                </p>
                <p class="order-list-info"><img src="../../assets/imgs/orderdetail_img.png" alt=""><b>{{item.ego_product_stage}}</b><b>{{item.ego_product_name}}</b><b>{{item.ego_send_amount}}</b><b class="unit">吨</b>
                <!-- <span>安徽省纸元网络科技</span> -->
                </p>
                <p class="order-list-state">
                     <a href="javascript:;">
                        <img src="../../assets/imgs/sellorder_track_tishi.png" alt="">
                        <span v-if="item.ego_state==1">{{item.updated_at}} 等待发货</span>
                        <span v-else-if="item.ego_state==2">{{item.updated_at}} 发货完成</span>
                        <span v-else-if="item.ego_state==3">{{item.updated_at}} 取消发货</span>
                        <img class="left-arrow hide" src="../../assets/imgs/jiantou_left.png" alt="">
                    </a>
                </p>
                <p class="order-list-option">
                     <router-link :to="{path:'/delivery',query:{oid:item.ego_id}}" class="order-sure"  v-if="item.ego_state==1">发货</router-link>
                    <router-link class="order-to-detail" :to="{path:'/sendOrderdetail',query:{oid:item.ego_id}}">详情</router-link >
                                   
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

export default {
  components: {
    navBar, 
    Header
  },
  computed: {},
  data() {
    return {      
      navBar: ["全部", "待发货", "已发货", "已取消"],
      queryVal: "",
      title: "",
      page: 1,
      size: 10,
      state: 0,
      sendData: [],
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
    this.queryVal = this.cookie.getCookie("keywords");
    this.searchId = this.cookie.getCookie("searchId");    
      this.init();
      this.getdata();    
  },
  created() {
    //this.getdata();
  },
  methods: {
     refresh() {
      this.page = 1;
      this.sendData = [];
      this.getdata();
      this.$refs.loadmore.onTopLoaded();
    },
    bottomload() {
      if(this.sendData.length%this.size !=0){
         this.allLoaded = true;
     }
      this.page++;
      this.getdata();
      this.$refs.loadmore.onBottomLoaded();
    },
    handleBottomChange(status) {
      this.bottomStatus = status; //上拉状态变换
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    removeQueryVal() {
      this.sendData = [];
      this.queryVal = "";
     this.cookie.delCookie('keywords');
      this.cookie.delCookie('searchId');
      this.init();
      this.getdata();
    },
    init() {
      this.nodata = 0;
      this.tiptext='';    
    },
    switchState($index) {
      this.sendData = [];
      this.state = $index;    
        this.init();       
        this.getdata();     
    },    
    getdata() {
      let params = {
        eo_id:this.cookie.getCookie('uid'),       
        pagenum: this.page,
        size: this.size,
        ego_state: this.state
      };
      api.getSendListAndSearch(params).then(res => {
        //console.log(res);
        if (res.status_code == 10000) {        
           this.sendData = [...res.data, ...this.sendData];
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

