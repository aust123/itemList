<template>
  <div class="billing">
    <header class="Return">
      <router-link :to="{path:$route.query.path}" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      上传结算清单
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>{{msg.order_number}}</span>
      </div>
      <div class="show_item">
        纸厂：<span>{{msg.paper_name}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{msg.product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{msg.product_stage}}</span>
      </div>
    </div>
    <div class="title">结算信息</div>
    <table class="billTable">
      <thead>
        <tr>
          <th>车牌</th>
          <th>扣点</th>
          <th>结算重量</th>
          <th>结算小计</th>
          <th>结算清单</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in msg.settle_info">
          <td>{{item.plate_number}}</td>
          <td v-if="item.is_upload==1">{{item.total_deductions}}%</td>
          <td v-if="item.is_upload==1">{{item.settle_weight}}</td>
          <td v-if="item.is_upload==1">{{item.settle_money}}</td>
          <td v-else colspan="3"><span>待上传</span></td>
          <td @click="upload(msg,item,2)" v-if="item.is_upload==1">已上传</td>
          <td v-else>
            <a @click="upload(msg,item,1)">上传</a>
          </td>
        </tr>
        <tr>
          <td></td>
          <td><em>合计：</em></td>
          <td><em>{{msg.settle_total_weight}}</em></td>
          <td><em>{{msg.settle_total_money}}</em></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <a @click="submit" class="nextStep divItem">提交</a>
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
        msg:{},
        tipMsg:['',false]
      }
    },
    mounted:function(){
      this.getMsg();
    },
    methods:{
      //提交
      submit:function(){
        var arr=[];
        for(var i=0;i<this.msg.settle_info.length;i++){
          if(this.msg.settle_info[i].is_upload==0){
            arr.push(this.msg.settle_info[i]);
          }
        }
        if(arr.length==0){
          var params={
            user_id:this.cookie.getCookie('uid'),
            order_id:this.msg.order_id
          }
          var _this=this;
          _this.ajax.submitSettle(params).then(function(res){
            console.log(res);
            if(res.status_code==10000){
              _this.$router.push({
                path:_this.$route.query.path
              });
            }else if(res.status_code==10003){
              _this.tipMsg=['结算清单确认中',true];
            }
          });
        }else{
          this.tipMsg=[arr[0].plate_number+' 尚未上传结算信息，请完善后提交',true];
        }
      },
      //上传结算单信息
      upload:function(msg,item,type){
        var nmsg={
          order_id:msg.order_id,
          order_number:msg.order_number,
          paper_name:msg.paper_name,
          product_name:msg.product_name,
          product_stage:msg.product_stage,
          settle_total_weight:msg.settle_total_weight,
          settle_total_money:msg.settle_total_money
        }
        this.$router.push({
          path:'/uploadSettle',
          query:{
            msg:JSON.stringify(nmsg),
            item:JSON.stringify(item),
            type:type,
            path:this.$route.fullPath
          }
        });
      },
      //获取结算单信息
      getMsg:function(){
        var _this=this;
        var params={
          user_id:this.cookie.getCookie('uid'),
          order_id:this.$route.query.oid
        }
        _this.ajax.getSettlement(params).then(function(res){
//          console.log(res);
          if(res.status_code==10000){
            _this.msg=res.data;
          }
        });
      }
    }
  }
</script>
<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
  .billing{
    padding-bottom: 98px;
  }
  .nextStep{
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-top: 0;
  }
</style>
