<template>
  <div class="home">
    <header class="Return">
      <router-link to="/entrance" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      纸元ERP
    </header>
    <div class="personMsg">
      <h2>{{uname}}</h2>
      <p>欢迎登录</p>
    </div>
    <div class="billList">
     <router-link to="/salelist">
        <img src="../../assets/imgs/index_icon_sell.png" alt=""/>
        <p>销售订单</p>
      </router-link>
      <router-link to="/buylist">
        <img src="../../assets/imgs/index_icon_buy.png" alt=""/>
        <p>采购订单</p>
     </router-link>

      <router-link to="/billingSelect">
        <img src="../../assets/imgs/index_icon_buyBilling.png" alt=""/>
        <p>采购开单</p>
      </router-link>

      <router-link to="/billingSale">
        <img src="../../assets/imgs/index_icon_sellBilling.png" alt=""/>
        <p>销售开单</p>
      </router-link>

      <router-link to="/checklist">
        <img src="../../assets/imgs/index_icon_qc.png" alt=""/>
        <p>质检单</p>
      </router-link>  

       <router-link to="/settlelist">
        <img src="../../assets/imgs/index_icon_settle.png" alt=""/>
        <p>结算单</p>
      </router-link>
      <router-link to="/instoragelist">
        <img src="../../assets/imgs/index_icon_enter.png" alt=""/>
        <p>入库单</p>
      </router-link>
      
       <router-link to="/outstoragelist">
        <img src="../../assets/imgs/index_icon_out.png" alt=""/>
        <p>出库单</p>
      </router-link>
      <router-link to="/sendlist">
        <img src="../../assets/imgs/index_icon_deliver.png" alt=""/>
        <p>发货单</p>
      </router-link>
      <a @click="tip">
        <img src="../../assets/imgs/index_icon_manage.png" alt=""/>
        <p>仓库管理</p>
      </a>
      <a @click="tip">
        <img src="../../assets/imgs/index_icon_pay.png" alt=""/>
        <p>付款单</p>
      </a>
      <a @click="tip">
        <img src="../../assets/imgs/index_icon_receipt.png" alt=""/>
        <p>收款单</p>
      </a>
    </div>
    <div class="homeorderList">
      <h3>
        销售订单
        <router-link to="/salelist">更多<img src="../../assets/imgs/jiantou_left.png" alt=""/></router-link>
      </h3>
      <ul><li v-for="item in saleList">
         <router-link :to="{path:'/orderdetail',query:{type:'1',oid:item.id}}">
            发往 <span>{{item.name}}</span> 的订单
            <b>{{item.result | splice}}</b>
         </router-link>
        </li>
      </ul>
    </div>
    <div class="homeorderList">
      <h3>
        采购订单
         <router-link to="/buylist">更多<img src="../../assets/imgs/jiantou_left.png" alt=""/></router-link>
      </h3>
      <ul>
        <li v-for="item in purchaseList">
           <router-link :to="{path:'/orderdetail',query:{type:'2',oid:item.id}}">
            <span>{{item.name}}</span> 的订单
            <b>{{item.result | splice}}</b>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="homeorderList">
      <h3>
        质检单
        <router-link to="/checklist">更多<img src="../../assets/imgs/jiantou_left.png" alt=""/></router-link>
      </h3>
      <ul>
        <li v-for="item in zhijianList" >
           <router-link :to="{path:'/checkOrderdetail',query:{oid:item.id}}">
            <span>{{item.name}}</span>
            <b>{{item.result | splice}}</b>
           </router-link>
        </li>
      </ul>
    </div>
    <div class="homeorderList">
      <h3>
        结算单
         <router-link to="/settlelist">更多<img src="../../assets/imgs/jiantou_left.png" alt=""/></router-link>
      </h3>
      <ul>
        <li v-for="item in settleList">
          <router-link :to="{path:'/settleOrderdetail',query:{oid:item.id}}">
            <span>{{item.name}}</span> 结算单
            <b>{{item.result | splice}}</b>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="homeorderList">
      <h3>
        入库单
        <router-link to="/instoragelist">更多<img src="../../assets/imgs/jiantou_left.png" alt=""/></router-link>
      </h3>
      <ul>
        <li v-for="item in stockInList">
         <router-link :to="{path:'/instorageOrderdetail',query:{oid:item.id}}">
            <span>{{item.name}}</span> 入库单
            <b>{{item.result | splice}}</b>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="homeorderList">
      <h3>
        出库单
         <router-link to="/outstoragelist">更多<img src="../../assets/imgs/jiantou_left.png" alt=""/></router-link>
      </h3>
      <ul>
        <li v-for="item in stockOutList">
         <router-link :to="{path:'/outstorageOrderdetail',query:{oid:item.id}}">
            发往 <span>{{item.name}}</span> 的订单
            <b>{{item.result | splice}}</b>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="homeorderList">
      <h3>
        发货单
         <router-link to="/sendlist">更多<img src="../../assets/imgs/jiantou_left.png" alt=""/></router-link>
      </h3>
      <ul>
        <li v-for="item in fahuoList">
          <router-link :to="{path:'/sendOrderdetail',query:{oid:item.id}}">
            发往 <span>{{item.name}}</span> 的订单
            <b>{{item.result | splice}}</b>
           </router-link>
        </li>
      </ul>
    </div>
    <tip :tipmsg="tipMsg"></tip>
  </div>
</template>

<script>
  import tip from '../../components/tip/tip.vue'
  export default{
    components:{     
      tip
    },
    filters:{
      splice:function(val){
        return val.substr(val.length-3,3)
      }
    },
    methods:{
      tip(){
          this.tipMsg=['开发中，敬请期待',true];
      }
    },
    data:function(){
      return{
        saleList:[],
        purchaseList:[],
        zhijianList:[],
        settleList:[],
        stockInList:[],
        stockOutList:[],
        fahuoList:[],
        uname:'',
        tipMsg:['',false]
      }
    },
    created(){
      this.cookie.delCookie('keywords');
      this.cookie.delCookie('searchId');      
    },
    mounted:function(){
      var params={
        uid:this.cookie.getCookie('uid')
      }
      var _this=this;
      this.ajax.homeShow(params).then(function(res){
        if(res.status_code==10000){
          _this.purchaseList=res.data[0];
          _this.saleList=res.data[1];
          _this.zhijianList=res.data[2];
          _this.stockInList=res.data[3];
          _this.settleList=res.data[4];
          _this.stockOutList=res.data[5];
          _this.fahuoList=res.data[6];
          _this.uname= res.username;
        }else{
          alert(res.msg);
        }
      });
    }
  }
</script>

<style lang="css" src="../../assets/css/home.css">
</style>
<style scoped>
  .home{
    padding-bottom: 50px;
  }
</style>
