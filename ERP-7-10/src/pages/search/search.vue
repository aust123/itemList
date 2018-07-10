<template>
    <div>
        <Header :title='title' :noSearch='0'></Header>   
        <div class="input-content">
            <select v-model="type">
                <option v-for='(item,index) in arrs' :key='index' :value='item.value'>{{item.title}}</option>                
            </select>
            <input type="text" @input="query" v-model="keyvalue"  placeholder="请输入搜索内容">
            <button></button>
        </div>
       
        <section class="search-history">
            <div class="history-content" v-show="!isInput">
                <h3>最近搜索<span @click="clearAll"><img src="../../assets/imgs/search_icon_cancel.png" alt="">清除搜索记录</span></h3>
                <p v-for="(item,index) in history" :key="index" @click="toList(item)">{{item}}<img @click="remove(index)" src="../../assets/imgs/sellorder_key_cancel.png" alt=""></p>
            </div>                 
            <p class="search-list" v-for="(item,index) in querydata" :key="index" v-html="item" @click="toList(item)"></p>            
        </section>
    </div>
</template>
<script>
import Header from'../../components/header'
export default {
  components:{       
        Header
    },
  data() {
    return {
      arrs: [
        { title: "车牌号", value: 1 },
        { title: "纸厂名称", value: 2 },
        { title: "货品名称", value: 3 },
        { title: "默认车牌号", value: 4 }
      ],
      isInput: false,
      keyvalue: "",
      history: ["皖A999", "玖龙纸厂", "合肥纸厂", "皖C666", "国废A级纸"],
      querydata: [],
      type: "1",
      title:'搜索'
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    next(vm=>{
      vm.historyRouter = from.path;
      console.log(from.path)
    });
  }, 
  methods: {   
    remove(i) {//删除搜索记录里面的单项
      this.history = this.history.filter((item, index) => {
        return index != i;
      });
    },
    clearAll() {//清空搜索记录
      this.history = [];
    },
    toList($item) {
      //去掉字符串内的html标签和尖括号
      let params = $item.replace(/<[^>]*>/g, "");
      this.$router.push({
        path: this.historyRouter, 
        query: {
          name: params
        }
      });
    },
    query(event) {
      this.isInput = true;
      let val = event.target.value;
      //测试地址
      this.jsonp({
        url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
        params: { wd: event.target.value },
        cb: "show"
      }).then(
        res => {
          let data = res.s;
          this.querydata = [];
          data.forEach((item, index) => {
            let newItem = item.replace(
              val,
              `<span style='color:red;'>${val}</span>`
            );
            this.querydata.push(newItem);
          });
        },
        err => {
          console.log(err);
        }
      );
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
