<template>
  <div class="billing">
    <header class="Return">
      <router-link :to="{path:$route.query.path}" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      出库
    </header>
    <div class="showList">
      <div class="show_item">
        出库单号：<span>{{msg.edo_number}}</span>
      </div>
      <div class="show_item">
        纸厂名称：<span>{{msg.eso_paper_name}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{msg.edo_product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{msg.edo_product_stage}}</span>
      </div>
      <div class="show_item">
        出库重量：<span>{{msg.edo_should_delivery_amount}}吨</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>仓库</span>
        <input v-model="ckVal" readonly type="text" placeholder="请输入仓库名称"/>
      </div>
      <div class="form_item">
        <span>货位</span>
        <select v-model="hwVal">
          <option value="0">请选择货位</option>
          <option v-for="item in hwlist" :value="item.epa_id">{{item.epa_name}}</option>
        </select>
      </div>
      <div class="form_item">
        <span>出库重量</span>
        <em>吨</em>
        <input v-model="chuku" type="text"/>
      </div>
    </form>
    <div class="account divItem">
      <div class="h152">
        <h3>出库重量：{{chukuVal}}<span>吨</span></h3><br/>
        <h3>出库合计：<b>￥{{ckTotal}}</b></h3>
        <a @click="sure" class="sure">确认</a>
        <a class="delete">删除</a>
      </div>
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
    computed:{
      chukuVal:function(){
        return Number(this.chuku).toFixed(3)
      },
      ckTotal:function(){
        return Number(this.chukuVal*this.msg.edo_delivery_per_price).toFixed(2)
      }
    },
    data:function(){
      return{
        msg:{},
        ckVal:'',
        hwlist:[],
        hwVal:0,
        chuku:'',
        tipMsg:['',false]
      }
    },
    mounted:function(){
      this.msg=JSON.parse(this.$route.query.msg);
      this.ckVal=this.msg.edo_storehouse_name;
      this.hw();
      if(this.$route.query.item){
        var item=JSON.parse(this.$route.query.item);
        this.chuku=item.sh_delivery_total_amount;
        this.hwVal=item.epa_id;
      }
    },
    methods:{
      //确认
      sure:function(){
        if(this.hwVal==0){
          this.tipMsg=['请选择出库货位',true];
        }else if(!this.checkWeight(this.chuku)||this.chukuVal!==this.msg.edo_should_delivery_amount){
          this.tipMsg=['请填写出库重量',true];
        }else{
          if(this.$route.query.item){//编辑
            var params={
              eo_id:this.cookie.getCookie('uid'),
              edo_id:this.$route.query.oid,
              epa_id:this.hwVal,
              delivery_total_amount:this.chukuVal,
              sh_id:JSON.parse(this.$route.query.item).sh_id
            }
            var _this=this;
            _this.ajax.stockOutEdit(params).then(function(res){
              console.log(res);
              if(res.status_code==10000){
                _this.$router.push({
                  path:_this.$route.query.path
                });
              }
            });
          }else{//添加
            var params={
              eo_id:this.cookie.getCookie('uid'),
              edo_id:this.$route.query.oid,
              epa_id:this.hwVal,
              delivery_total_amount:this.chukuVal
            }
            var _this=this;
            _this.ajax.stockOutAdd(params).then(function(res){
              console.log(res);
              if(res.status_code==10000){
                _this.$router.push({
                  path:_this.$route.query.path
                });
              }
            });
          }
        }
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
<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
  .account{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
