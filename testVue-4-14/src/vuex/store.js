/**
 * Created by Administrator on 2018/3/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建基本状态
const state={
  hasLogin:false,
  loginUser:{
  },
  //选择主营纸厂
  mainpaper:{
  },
  //选择主营纸厂
  servicepaper:[],
  //用户经纬度
  userAddr:{
  }
}

//创建改变状态的方法
const mutations={
  LOGIN:function(state,usermsg){
    sessionStorage.setItem('hasLogin',true);
    state.hasLogin=true;
    sessionStorage.setItem('loginUser',JSON.stringify(usermsg));
    state.loginUser=usermsg;
  },
  LOGOUT:function(state){
    sessionStorage.removeItem('hasLogin');
    state.hasLogin=false;
    sessionStorage.removeItem('loginUser');
    state.loginUser={};

    sessionStorage.removeItem('userAddr');
    state.userAddr={};

    state.mainpaper={};
    state.servicepaper={};
  },
  //用户经纬度
  ADDRESS:function(state,addr){
    sessionStorage.setItem('userAddr',JSON.stringify(addr));
    state.userAddr=addr;
  },
  //选择主营纸厂
  MainPaper:function(state,paperMsg){
    state.mainpaper=paperMsg;
  },
  //选择服务纸厂
  ServicePaper:function(state,serviceMsg){
    state.servicepaper=serviceMsg;
  }
}
//创建驱动actions可以使mutations得以启动
const actions={
  login:function({commit}){
    commit('LOGIN')
  },
  logout:function({commit}){
    commit('LOGOUT')
  },
  uAddress:function({commit}){
    commit('ADDRESS')
  },
  mainpaper:function({commit}){
    commit('MainPaper')
  },
  servicepaper:function({commit}){
    commit('ServicePaper')
  }
}

//防止页面刷新vuex中的数据丢失
for(var item in state){
  sessionStorage.getItem(item)?state[item] = JSON.parse(sessionStorage.getItem(item)): false;
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
