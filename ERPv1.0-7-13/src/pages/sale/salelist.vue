<template>
    <div>
      <Header searchurl='/saleSearch'><span slot="title">销售订单</span></Header>  

        <!-- <nav>
            <a href="###" v-for='(item,$index) in navBar' :key="$index" @click="change($index)" :class="{on:$index==active}">{{item}}</a>           
        </nav>  -->       
         <navBar :navList='navBar' @changeType='switchState' ref='navbar'></navBar>                
          <List :queryVal='queryVal' :title='title' :dataList='orderListData' @removeKey='removeSearchKey' ref="list"></List>       
         <p class="tip" v-show="nodata">暂无数据</p> 
    </div>
</template>
<script>
import Header from "@/components/header";
import navBar from "@/components/navbar";
import List from "@/components/list";
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
        "待出库",
        "待发货",
        "更多",
        "已收货",
        "待收款",
        "已完成",
        "已取消"
      ],
      queryVal: "",
      title: "销售订单",
      page: 1,
      nodata: 0, //返回数据为空时
      orderListData: [],
      size: 10
    };
  },
  created() {
    this.getData();
  },
  activated() {
    // let order_type = 1;//销售订单
    if (this.$route.query.searchName) {
      this.$refs.navbar.change(0);
      this.queryVal = this.$route.query.searchName;
      this.searchId = this.$route.query.searchId;
      let params = {
        user_id: 1,
        key_words: this.queryVal,
        search_type_id: this.searchId,
        page: this.page,
        size: this.size
      };
      this.orderListData = [];
      api.getSearchResult(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          this.nodata = 0;
          this.orderListData = res.data;
        } else if (res.status_code == 10045) {
          this.nodata = 1;
        }
      });
    }
  },
  mounted() {},
  methods: {
    removeSearchKey() {
      this.queryVal = "";
      this.searchId = "";
      this.getData();
    },
    switchState(val) {
      console.log(2222);
      this.$refs.list.hideKey();
      if (val >= 4) {
        this.state = --val;
        this.getData();
      } else if (this.state != val) {
        this.state = val;
        this.getData();
      }
    },
    getData() {
      this.orderListData = [];
      let params = {
        user_id: 1,
        order_type: 1,
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
        }
      });
    }
  }
};
</script>
<style>
.tip {
  font-size: 30px;
  color: #666;
  height: 38px;
  line-height: 38px;
  padding: 0 30px;
  box-sizing: border-box;
  text-align: center;
}
/*头部样式 */
/* body {
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
 */
/*导航样式 */
/* nav {
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
nav a {
  display: flex;
  flex-grow: 1;
  color: #666;
  font-size: 30px;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.on {
  color: #00d3af;
  border-bottom: 4px solid #00d3af;
} */
</style>
