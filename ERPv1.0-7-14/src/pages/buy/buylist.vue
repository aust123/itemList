<template>
    <div>
      <header>
        <a class="back left"  href="javasvript:;" @click="back"><img src="../../assets/imgs/nav_jiantou_left.png" ></a>
        采购订单    
         <router-link  :to='{path:"/saleSearch",query:{type:2}}' class="search right"><img src="../../assets/imgs/nav_icon_search.png" ></router-link> 
    </header>
       <!-- <Header searchurl='/saleSearch' otype='2'><span slot="title">采购订单</span></Header>   -->
        <navBar :navList='navBar' @changeType='switchState' ref='navbar'></navBar> 
        <div class="queryItem" v-show="queryVal">
           <span>{{queryVal}}<img @click="removeSearchKey" src="../../assets/imgs/sellorder_key_cancel.png" alt=""></span>               
      </div>                       
       <List  :title='title' :dataList='orderListData' @removeKey='removeSearchKey' ref="list"></List>       
         <p class="tip" v-show="nodata">{{tiptext}}</p>      
    </div>
</template>
<script>
import Header from "../../components/header";
import navBar from "../../components/navbar";
import List from "../../components/list";
import api from "@/axios/api.js";
export default {
  components: {
    navBar,
    List,
    Header
  },
  data() {
    return {
      active: 0,
      state: 0, //订单状态
      navBar: [
        "全部",
        "待确认",
        "待质检",
        "待结算",
        "更多",
        "待入库",
        "待付款",
        "已完成",
        "已取消"
      ],
      queryVal: "",
      title: "采购订单",
      page: 1,
      nodata: 0, //返回数据为空时
      orderListData: [],
      size: 10,
      tiptext:''
    };
  },
  created() {
    this.init();
    if(!this.queryVal) this.getData();
    
  },
  activated() {
    this.queryVal = this.cookie.getCookie("keywords");
    this.searchId = this.cookie.getCookie("searchId");
    if (this.queryVal) {
      this.init();
      this.getSearchdata();
    } else {
      this.init();
      //this.getdata();
    }
  },
  mounted() {},
  methods: {
    back(){    
        this.cookie.delCookie();         
         this.$router.push({
           path:'/home'
         });
             
      }, 
    getSearchdata() {
      //this.$refs.navbar.change(0);
      let params = {
        user_id: 1,
        key_words: this.queryVal,
        search_type_id: this.searchId,
        page: this.page,
        size: this.size
      };
      api.getSearchResult(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          this.nodata = 0;         
          this.orderListData = res.data;
        } else if (res.status_code == 10045) {
          this.nodata = 1;
          this.tiptext=res.msg
        }else if(res.status_code == 10002){
            this.nodata = 1;
          this.tiptext=res.msg
        }
      });
    },
    removeSearchKey() {
      this.queryVal = "";
      this.searchId = "";
      this.cookie.delCookie();
      this.init();
      this.getData();
    },
    init() {
      this.nodata = 0;
      this.tiptext=''
      this.orderListData = [];
    },
    switchState(val) {
      this.init();
      if (val >= 4) {
        this.state = --val;
        this.getData();
      } else if (this.state != val) {
        this.state = val;
        this.getData();
      }
    },
    getData() {
      let params = {
        user_id: 1,
        order_type: 2,
        page: this.page,
        state: this.state,
        size: this.size
      };
      api.getOrderList(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          this.nodata = 0;
          this.orderListData = res.data;
        } else if (res.status_code == 10045) {
          this.nodata = 1;         
          this.tiptext=res.msg
        }
      });
    }
  }
};
</script>
<style>
body{
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
.hide{
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
  padding: 26px 30px 40px;
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
