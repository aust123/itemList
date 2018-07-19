<template>
  <div class="billing">
    <header class="Return">
      <router-link :to="{path:$route.query.path}" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      结算确认
    </header>
    <div class="showList">
      <div class="show_item">
        车牌号：<span>{{logistics_data.eli_plate_number}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{settle_data.es_product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{settle_data.es_product_stage}}</span>
      </div>
      <div class="show_item">
        毛重：<span>{{settle_data.es_rough_weight}}吨</span>
      </div>
      <div class="show_item">
        仓库：<span>蚌埠一号库</span>
      </div>
      <div class="show_item">
        结算单价：<span>{{settle_data.es_per_price}}元/吨</span>
      </div>
      <div class="show_item">
        含水扣点：<span>{{settle_data.es_settle_watery}}</span>
      </div>
      <div class="show_item">
        含杂扣点：<span>{{settle_data.es_settle_trash}}</span>
      </div>
      <div class="show_item">
        其他扣除：<span>￥{{settle_data.es_other_deductions}}</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>过磅人</span>
        <input class="input1" v-model="name" maxlength="25" type="text" placeholder="请输入过磅人姓名"/>
      </div>
      <div class="form_item">
        <span>皮重</span>
        <em>吨</em>
        <input class="input1" v-model="weight2" type="text"/>
      </div>
      <div class="form_item">
        <span>司磅净重</span>
        <em>吨</em>
        <input class="input3" readonly v-model="weight3" type="text"/>
      </div>
    </form>
    <div class="account">
      <div class="h210">
        <h3>结算重量：{{settleWeight}}<span>吨</span></h3><br/>
        <h3>结算金额：￥{{settlePrice}}</h3><br/>
        <h3>应付金额：<b>￥{{yfPrice}}</b></h3>
        <a @click="sure" class="sure">确认</a>
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
      weight3:function(){
        return (this.settle_data.es_rough_weight-this.weight2)
      },
      settleWeight:function(){
        return (this.weight3*(1-this.settle_data.es_settle_watery-this.settle_data.es_settle_trash)).toFixed(3)
      },
      settlePrice:function(){
        return (this.settleWeight*this.settle_data.es_per_price).toFixed(2)
      },
      yfPrice:function(){
        return (this.settlePrice-this.settle_data.es_other_deductions).toFixed(2)
      }
    },
    data:function(){
      return{
        logistics_data:{},
        settle_data:{},
        weight2:'',
        name:'',
        tipMsg:['',false]
      }
    },
    mounted:function(){
      this.getMsg();
    },
    methods:{
      //确认结算
      sure:function(){
        if(this.name==''){
          this.tipMsg=['过磅人不能为空',true]
        }else if(!this.checkWeight(this.weight2)||Number(this.weight2)>Number(this.settle_data.es_rough_weight)){
          this.tipMsg=['请输入皮重',true]
        }else{
          var params={
            uid:this.cookie.getCookie('uid'),
            es_guobangren:this.name,
            es_tare:Number(this.weight2).toFixed(3),
            es_net_weight:Number(this.weight3).toFixed(3),
            es_pay_money:this.yfPrice,
            es_settle_total_money:this.settlePrice,
            order_type:this.settle_data.es_order_type,
            order_id:this.settle_data.es_order_id,
            settle_id:this.$route.query.sid,
            logistic_id:this.settle_data.eli_id
          }
          var _this=this;
          this.ajax.suretosettle(params).then(function(res){
            console.log(res);
            if(res.status_code==10000){
              _this.$router.push({
                path:_this.$route.query.path
              });
            }else{
              _this.tipMsg=[res.msg,true]
            }
          });
        }
      },
      //获取结算单信息
      getMsg:function(){
        var params={
          uid:this.cookie.getCookie('uid'),
          settle_id:this.$route.query.sid
        }
        var _this=this;
        _this.ajax.getsettledetail(params).then(function(res){
//          console.log(res);
          _this.logistics_data=res.logistics_data;
          _this.settle_data=res.settle_data;
        });
      }
    }
  }
</script>

<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
  .billing{
    height: auto;
  }
  .account{
    margin-top:100px;
    width: 100%;
  }
</style>
