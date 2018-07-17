<template>
    <div>
      <header>
        <a class="back left"  href="javasvript:;" @click="back"><img src="../../assets/imgs/nav_jiantou_left.png" ></a>
        销售订单  
         <router-link :to='{path:"/saleSearch",query:{type:1}}' class="search right"><img src="../../assets/imgs/nav_icon_search.png" ></router-link>   
    </header>
      <!-- <Header searchurl='/saleSearch' otype='1'><span slot="title">销售订单</span></Header>  -->
      <navBar :navList='navBar' @changeType='switchState' ref='navbar'></navBar>   
      <div class="queryItem" v-show="queryVal">
           <span>{{queryVal}}<img  @click="removeSearchKey" src="../../assets/imgs/sellorder_key_cancel.png" alt=""></span>               
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
          <List :queryVal='queryVal' :type='otype' :dataList='orderListData'  ref="list"  @reload='reloadData'></List>  
           </mt-loadmore>       
         <p class="tip" v-show="nodata">{{tiptext}}</p> 
    </div>
</template>
<script>
//import Header from "@/components/header";
import navBar from "@/components/navbar";
import List from "@/components/list";
import api from "@/axios/api.js";
export default {
  components: {
    navBar,
    List
    // Header
  },
  data() {
    return {
      active: 0,
      state: 0, //订单状态
      navBar: [
        "全部",
        "待确认",
        "待出库",
        "待发货",
        "更多",
        "已发货",
        "待收款",
        "已完成",
        "已取消"
      ],
      queryVal: "",
      otype: 1,
      page: 1,
      nodata: 0, //返回数据为空时
      orderListData: [],
      size: 10,
      tiptext: "",
      allLoaded: false,
      scrollMode: "auto",
      bottomStatus: "",
      topStatus: ""
    };
  },
  created() {
    this.init();
    //if (!this.queryVal) this.getData();
  },
  activated() {
    this.queryVal = this.cookie.getCookie("keywords");
    this.searchId = this.cookie.getCookie("searchId");
      this.getListData();
  },
  mounted() {},
  methods: {
    reloadData(){
     this.refresh();
    },
    getListData() {
      if (this.queryVal) {
        this.init();
        this.getSearchdata();
      } else {
        this.init();
        this.getData();
      }
    },
    refresh() {
      this.page = 1;
      this.orderListData = [];
      this.getListData();
      this.$refs.loadmore.onTopLoaded();
    },
    bottomload() {
      if(this.orderListData.length%this.size !=0){
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
    removeSearchKey() {
       this.orderListData = [];
      this.queryVal = "";
      this.searchId = "";
      this.cookie.delCookie('keywords');
      this.cookie.delCookie('searchId');
      this.init();
      this.getData();
    },
    init() {
      this.nodata = 0;
      this.tiptext = "";
     
    },
    switchState(val) {
       this.orderListData = [];
      this.init();
      if (val >= 4) {
        this.state = --val;
        this.getData();
      } else if (this.state != val) {
        this.state = val;
        this.getData();
      }
    },
    back() {
      this.$router.push({
        path: "/home"
      });
    },
    getSearchdata() {
      let params = {
        user_id: this.cookie.getCookie("uid"),
        key_words: this.queryVal,
        search_type_id: this.searchId,
        page: this.page,
        size: this.size
      };
      api.getSearchResult(params).then(res => {
        if (res.status_code == 10000) {
          this.nodata = 0;
          this.orderListData = [...res.data, ...this.orderListData];
        } else if (res.status_code == 10045) {
          this.nodata = 1;
          this.tiptext = res.msg;
        } else if (res.status_code == 10002) {
          this.nodata = 1;
          this.tiptext = res.msg;
        }
      });
    },

    getData() {
      let params = {
        user_id: this.cookie.getCookie("uid"),
        order_type: 1,
        page: this.page,
        state: this.state,
        size: this.size
      };
      api.getOrderList(params).then(res => {       
        if (res.status_code == 10000) {
          this.nodata = 0;
          this.orderListData = [...res.data, ...this.orderListData];
        } else if (res.status_code == 10045) {
          this.nodata = 1;
          this.tiptext = res.msg;
        }
      });
    }
  }
};
</script>
<style>
body {
  background-color: #f1f1f1;
}
header {
  font-size: 36px;
  height: 88px;
  line-height: 88px;
  color: #333;
  text-align: center;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
}
header img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.left {
  float: left;
}
.right {
  float: right;
}
.hide {
  display: none;
}
header a {
  height: 100%;
  position: relative;
}
.back img {
  width: 20px;
  height: 38px;
  left: 0;
}
.search img {
  width: 40px;
  height: 40px;
  right: 0;
}
.tip {
  font-size: 30px;
  color: #666;
  height: 38px;
  line-height: 38px;
  padding: 0 30px;
  box-sizing: border-box;
  text-align: center;
}
.queryItem {
  padding: 40px 30px;
  box-sizing: border-box;
}
.queryItem span {
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
.queryItem img {
  position: absolute;
  right: -15px;
  top: -15px;
  width: 32px;
  height: 32px;
}
</style>
