<template>
    <div>
        <Header :noSearch='0'><span slot="title">搜索</span></Header>    
        <div class="input-content">
            <select v-model="searchTypeID" @change="changeType">
               <!-- <option selected>请选择</option> -->
                <option v-for='(item,index) in searchtype' :key='index' :value='item.list_id'>{{item.list_name}}</option>                
            </select>
            <input type="text" @input="query" v-model="KeyValue" autofocus placeholder="请输入搜索内容">
            <button @click="query"></button>
        </div>
       
        <section class="search-history">
            <template v-if="history.length>0">
              <div class="history-content"  v-show="!isInput">              
                <h3>最近搜索<span @click="clearAll"><img src="../../assets/imgs/search_icon_cancel.png" alt="">清除搜索记录</span></h3>
                <p v-for="(item,index) in history" :key="index" @click.self="toList(item.list_name)">{{item.list_name}}<img @click.self="remove(index,item.list_id)" src="../../assets/imgs/sellorder_key_cancel.png" alt=""></p>
              </div>
            </template>
             <template v-else >
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
      searchTypeID: "13", //选择的检索类型id
      isInput: false, //判断用户是否检索
      history: [], //用户搜索记录（若为销售/采购订单时返回）
      querydata: [], //用户输入关键字后的查询结果    
      order_type: 5, //订单类型 5=>发货单    
      listId: "" ,//历史记录id,
      KeyValue:""
    };
  }, 
  created() {
    
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
    init(){
      this.querydata=[];
    },
    changeType() {
       this.init();
      //切换查询类型
       let params = {
        eo_id:this.cookie.getCookie('uid'),      
        type: this.searchTypeID //搜索类型iD
      };
      //在切换检索类型时获取检索历史记录
      api.getSearchHistory(params).then(
        res => {        
          if (res.status_code == 10000) {
            this.history = res.data;         
          }else if(res.status_code == 10003){            
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    remove(i, id) {
      //删除搜索记录里面的单项
      this.listId = id;
      //console.log(id);
      //this.removeData(0,i);
      // this.history = this.history.filter((item, index) => {
      //   return index != i;
      // });
    },
    clearAll() {
      //清空搜索记录    
      this.removeData(1);
    },
    removeData(isAll,i) {//删除搜索记录
      let params = {
        user_id:this.cookie.getCookie('uid'),
        search_type_id: this.searchTypeID
      };      
      params.history_record_id = isAll ? 0 : this.listId;
      ajax(this.clearhistoryUrl, params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          this.history = isAll
            ? []
            : this.history.filter((item, index) => {
                return index != i;
              });
        }
      });
    },
    toList($item) {
       let queryString = $item.replace(/<[^>]*>/g, "");
       this.cookie.setCookie('keywords',queryString,10);
      this.cookie.setCookie('searchId',this.searchTypeID,10);   
      this.$router.push({
        path: '/sendlist'       
      });
    },
    upSearchHistory($item){//上传搜索历史记录
      //去掉字符串内的html标签和尖括号
      let queryString = $item.replace(/<[^>]*>/g, "");
      let params = {
        eo_id:this.cookie.getCookie('uid'),
        keyword:queryString,
        type: this.searchTypeID //订单类型
      }
      api.uploadSearchHistory(params).then(res=>{
        if(res.status_code==10000){
            this.toList(queryString);//上传成功后跳转至列表页面，关键字查询
        }
      })
    },
    query(event) {
     this.isInput = true;
      let val = event.target.value?event.target.value:this.KeyValue; 
      this.querydata = [];
      let params = {
        eo_id:this.cookie.getCookie('uid'),
        keyword: val,
        type: this.searchTypeID
      };
      api.getSendOrderSearchInfo(params).then(res => {
        console.log(res);
        if (res.status_code == 10000) {
          res.data.forEach(item => {
            if (item.includes(val) && val) {
              let newItem = item.replace(
                val,
                `<span style='color:red;position:relative;top:-0.5px'>${val}</span>`
              );
              this.querydata.push(newItem);
            }
          });
        }
      });      
    }   
  }
};
</script>
<style lang="css" src="../../assets/css/search.css" scoped>
</style>

