<template>
    <div>
        <Header :title='title' :noSearch='0'></Header>   
        <div class="input-content">
            <select v-model="searchTypeID" @change="changeType">
               <option selected>请选择</option>
                <option v-for='(item,index) in searchtype' :key='index' :value='item.list_id'>{{item.list_name}}</option>                
            </select>
            <input type="text" @input="query"   placeholder="请输入搜索内容">
            <button></button>
        </div>
       
        <section class="search-history">
            <template v-if="history.length>0">
              <div class="history-content"  v-show="!isInput">              
                <h3>最近搜索<span @click="clearAll"><img src="../../assets/imgs/search_icon_cancel.png" alt="">清除搜索记录</span></h3>
                <p v-for="(item,index) in history" :key="index" @click="toList(item.list_name)">{{item.list_name}}<img @click="remove(index)" src="../../assets/imgs/sellorder_key_cancel.png" alt=""></p>
              </div>
            </template>
             <template v-else-if="searchTypeID != '请选择'" >
               <p  v-show="!isInput">暂无搜索历史记录</p>
             </template> 
            <template v-if="querydata.length>0">          
                <p class="search-list" v-for="(item,index) in querydata" :key="index" v-html="item" @click="toList(item)"></p>            
           </template>
            <template v-else >             
             <p v-show='isInput'>暂无搜索结果</p>             
            </template>         
        </section>
    </div>
</template>
<script>
import Header from "../../components/header";
import api from "@/axios/api.js";
import { ajax } from "@/axios/api.js";
export default {
  components: {
    Header
  },
  data() {
    return {
      searchtype: [], //获取的可检索类型
      searchTypeID: "请选择", //选择的检索类型id
      isInput: false, //判断用户是否检索
      history: [], //用户搜索记录（若为销售/采购订单时返回）
      querydata: [], //用户输入关键字后的查询结果
      title: "搜索", //页面标题=>传Header组件
      historyUrl: "", //历史记录的url
      clearhistoryUrl: "", //清除历史记录的url
      keyqueryUrl: "", //关键字查询url
      order_type: "", //订单类型  1=>销售订单 2=>采购订单
      BuySaleSearchInfo: [] //销售/采购订单搜索信息
    };
  },
  beforeRouteEnter(to, from, next) {
    //console.log(from);
    next(vm => {
      vm.historyRouter = from.path;
      //console.log(from.path)
    });
  },
  created() {
    //order_type:1
    let orderType = this.$route.query.type;
    switch (orderType) {
      case "销售订单":
        this.historyUrl = "cloud/saleorder/getsearchinfo";
        this.clearhistoryUrl = "cloud/saleorder/clearhistorysearchlist";
        //this.keyqueryUrl ='cloud/saleorder/getsearchresult';
        this.order_type = 1;
        break;
      case "采购订单":
        this.historyUrl = "cloud/saleorder/getsearchinfo";
        this.clearhistoryUrl = "cloud/saleorder/clearhistorysearchlist";
        //this.keyqueryUrl ='cloud/saleorder/getsearchresult';
        this.order_type = 2;
        break;
      case "质检单":
        this.historyUrl = "cloud/qualitycheck/getqualityhistoryinfo";
        this.clearhistoryUrl =
          "cloud/qualitycheck/clearqualityhistorysearchlist";
        //this.keyqueryUrl ='cloud/qualitycheck/getqualitylistbykeywords';
        //this.order_type=2
        break;
    }
    //获取可检索类型
    let params = { order_type: this.order_type };
    api.getSearchType(params).then(res => {
      //console.log(res)
      if (res.status_code == 10000) {
        this.searchtype = res.data;
      }
    });
  },
  methods: {
    changeType() {
      //切换选择类型
      let params = {
        user_id:1,
        search_type_id: this.searchTypeID,
        order_type: this.order_type
      };      
      //在切换检索类型时获取检索历史记录
      ajax(this.historyUrl, params).then(
        res => {
          console.log(res);
          if (res.status_code == 10000) {
            this.history = res.data.history_search_list;
            this.BuySaleSearchInfo = res.data.search_info;
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    remove(i) {
      //删除搜索记录里面的单项
      this.history = this.history.filter((item, index) => {
        return index != i;
      });
    },
    clearAll() {
      //清空搜索记录
      this.history = [];
    },
    toList($item) {
      //去掉字符串内的html标签和尖括号
      let queryString = $item.replace(/<[^>]*>/g, "");
      this.$router.push({
        path: this.historyRouter,
        query: {
          searchName: queryString,
          searchId: this.searchTypeID
        }
      });
    },
    query(event) {
      this.isInput = true;

      let val = event.target.value;
      this.querydata = [];
      console.log(val);
      this.BuySaleSearchInfo.forEach((item, index) => {
        if (item["list_name"].includes(val) && val) {
          console.log(111);
          let newItem = item["list_name"].replace(
            val,
            `<span style='color:red;position:relative;top:-0.5px'>${val}</span>`
          );
          this.querydata.push(newItem);
        }
      });
      //测试地址
      // this.jsonp({
      //   url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
      //   params: { wd: event.target.value },
      //   cb: "show"
      // }).then(
      //   res => {
      //     let data = res.s;
      //     this.querydata = [];
      //     data.forEach((item, index) => {
      //       let newItem = item.replace(
      //         val,
      //         `<span style='color:red;'>${val}</span>`
      //       );
      //       this.querydata.push(newItem);
      //     });
      //   },
      //   err => {
      //     console.log(err);
      //   }
      // );
    },
    //测试方法百度API
    jsonp({ url, params, cb }) {
      return new Promise((resolve, reject) => {
        window[cb] = function(data) {
          resolve(data);
        };
        params = { ...params, cb };
        let arr = [];
        for (let key in params) {
          arr.push(`${key}=${params[key]}`);
        }
        let script = document.createElement("script");
        script.src = `${url}?${arr.join("&")}`;
        document.body.appendChild(script);
      });
    }
  }
};
</script>
<style>
.input-content {
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  position: relative;
  background-color: #fff;
}
.input-content select {
  border: none;
  width: 190px;
  height: 66px;
  border: 1px solid #b5b5b5;
  padding-left: 20px;
  box-sizing: border-box;
  outline: none;
  -webkit-appearance: none;
  background: url(../../assets/imgs/search_filter_jiantou.png) no-repeat;
  background-size: 27px 19px;
  background-position: right 10px center;
  font-size: 28px;
  color: #333;
}
.input-content input {
  width: 422px;
  height: 66px;
  border: 1px solid #b5b5b5;
  margin-left: 22px;
  padding-left: 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 28px;
}
.input-content button {
  border: none;
  width: 40px;
  height: 40px;
  -webkit-appearance: none;
  background: url(../../assets/imgs/nav_icon_search.png) no-repeat;
  background-size: 40px;
  position: absolute;
  right: 30px;
}
.search-history {
}
.search-history h3 {
  font-size: 32px;
  color: #666;
  display: flex;
  align-items: center;
  margin: 40px 0;
  padding: 0 30px;
  position: relative;
}
.search-history h3 span {
  font-size: 28px;
  color: #999;
  display: flex;
  align-items: center;
  position: absolute;
  right: 30px;
}
.search-history h3 img {
  margin-right: 12px;
  width: 38px;
  height: 40px;
}
.search-history p {
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 28px;
  color: #666;
  padding: 0 30px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
}
p.search-list {
  background: url(../../assets/imgs/jiantou_left.png) no-repeat;
  background-position: right 30px center;
  background-size: 15px 29px;
  background-color: #fff;
}
.search-history p img {
  width: 32px;
  height: 32px;
  position: absolute;
  right: 30px;
}
</style>
