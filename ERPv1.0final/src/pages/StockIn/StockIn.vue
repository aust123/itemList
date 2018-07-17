<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/instoragelist" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      入库
    </header>
    <div class="showList">
      <div class="show_item">
        入库单号：<span>{{msg.eps_number}}</span>
      </div>
      <div class="show_item">
        供应商：<span>{{msg.epo_supplier_name}}</span>
      </div>
      <div class="show_item">
        车牌号：<span>{{msg.eli_plate_number}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{msg.eps_product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{msg.eps_product_stage}}</span>
      </div>
      <div class="show_item">
        司磅净重：<span>{{msg.eps_net_weight}}吨</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>仓库</span>
        <input v-model="cangku" readonly type="text" placeholder="请输入仓库名称"/>
      </div>
      <div class="form_item">
        <span>货位</span>
        <select v-model="huowei">
          <option v-for="item in hwlist" :value="item.epa_id">{{item.epa_name}}</option>
        </select>
      </div>
    </form>
    <a @click="sure" class="nextStep divItem">确认</a>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        msg:{},
        cangku:'蚌埠一号库',
        hwlist:[],
        huowei:1
      }
    },
    mounted:function(){
      this.getMsg();
      this.hw();
    },
    methods:{
      //确认
      sure:function(){
        var params={
          eo_id:this.cookie.getCookie('uid'),
          eps_id:this.$route.query.oid,
          storehouse_id:1,
          epa_id:this.huowei
        }
        var _this=this;
        this.ajax.stockInSure(params).then(function(res){
          console.log(res);
          if(res.status_code==10000){
            _this.$router.push({
              path:'/instoragelist'
            });
          }
        })
      },
      //获取入库单详情
      getMsg:function(){
        var params={
          eo_id:this.cookie.getCookie('uid'),
          eps_id:this.$route.query.oid
        }
        var _this=this;
        _this.ajax.stockInDetail(params).then(function(res){
//          console.log(res);
          _this.msg=res.data;
        });
      },
      //获取货位列表
      hw:function(){
        var params={
          eo_id:this.cookie.getCookie('uid'),
          esh_id:1
        }
        var _this=this;
        _this.ajax.access_to_goods_list(params).then(function(res){
//          console.log(res);
          _this.hwlist=res.data;
        });
      }
    }
  }
</script>
<style lang="css" scoped src="../../assets/css/billing.css">
</style>
<style scoped>
  .nextStep{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
