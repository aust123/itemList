<template>
  <div class="billing">
    <header class="Return">
      <router-link :to="{path:$route.query.path}" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      采购装车录入
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>{{orderMsg.order_number}}</span>
      </div>
      <div class="show_item">
        供应商：<span>{{orderMsg.supplier_name}}</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>毛重</span>
        <em>吨</em>
        <input v-model="weight" type="text"/>
      </div>
      <div class="form_item">
        <span>车牌号</span>
        <input maxlength="12" v-model="carNumber" type="text" placeholder="请输入车牌号"/>
      </div>
      <div class="form_item">
        <span>司机姓名</span>
        <input maxlength="25" v-model="name" type="text" placeholder="请输入司机姓名"/>
      </div>
      <div class="form_item">
        <span>司机联系方式</span>
        <input v-model="phone" type="text" placeholder="请输入司机联系方式"/>
      </div>
    </form>
    <div class="account divItem">
      <div class="h152">
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
    data:function(){
      return{
        weight:'',
        carNumber:'',
        name:'',
        phone:'',
        driver_id:'',
        orderMsg:{},
        tipMsg:['',false]
      }
    },
    mounted:function(){
      this.orderMsg=JSON.parse(this.$route.query.msg);
      if(this.$route.query.logis){//编辑
        var item=JSON.parse(this.$route.query.logis);
//        console.log(item);
        this.weight=item.rough_weight;
        this.carNumber=item.plate_number;
        this.name=item.driver_name;
        this.phone=item.driver_phone;
        this.driver_id=item.driver_id;
      }

    },
    methods:{
      //返回
      back:function(){
        this.$router.push({
          path:this.$route.query.path
        });
      },
      //确认提交
      sure:function(){
        if(!this.checkWeight(this.weight)){
          this.tipMsg=['请填写毛重',true];
        }else if(this.carNumber==''){
          this.tipMsg=['车牌号不能为空',true];
        }else if(this.name==''){
          this.tipMsg=['司机姓名不能为空',true];
        }else if(!this.checkPhone(this.phone)){
          this.tipMsg=['手机号格式不正确',true];
        }else{
          var _this=this;
          var params={
            user_id:this.cookie.getCookie('uid'),
            order_id:this.orderMsg.order_id,
            order_type:2,
            eli_plate_number:this.carNumber,
            eli_driver_name:this.name,
            eli_driver_phone:this.phone,
            eli_rough_weight:Number(this.weight).toFixed(3)
          }
          if(this.$route.query.logis){  //编辑
            params.modify_type=2;
            params.logistic_id=this.driver_id;
          }else{  //添加
            params.modify_type=1;
          }
          _this.ajax.addPurchaseLogistics(params).then(function(res){
            if(res.status_code==10000){
              _this.$router.push({
                path:_this.$route.query.path
              });
            }
          });
        }
      }
    }
  }
</script>
<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
  .account{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
