<template>
  <div class="billing">
    <header class="Return">
      <router-link :to="{path:$route.query.path}" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      发货
    </header>
    <div class="showList">
      <div class="show_item">
        发货单号：<span>{{msg.ego_number}}</span>
      </div>
      <div class="show_item">
        纸厂名称：<span>{{msg.paper_name}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{msg.ego_product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{msg.ego_product_stage}}</span>
      </div>
      <div class="show_item">
        发货重量：<span>{{msg.ego_send_amount}}吨</span>
      </div>
    </div>
    <div class="title">物流信息<a @click="add" class="add">添加</a></div>
    <table class="billTable">
      <thead>
        <tr>
          <th>车牌</th>
          <th>司机</th>
          <th>装车重量</th>
          <th>联系方式</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in msg.logistics_info">
          <td>{{item.eli_plate_number}}</td>
          <td>{{item.eli_driver_name}}</td>
          <td>{{item.eli_entruck_amount}}</td>
          <td>{{item.eli_driver_phone}}</td>
          <td>
            <a @click="edit(item.eli_id)"><img src="../../assets/imgs/billing_icon_edite.png" alt=""/></a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="account divItem">
      <div class="h152">
        <h3>待装车：{{dzc}}<span>吨</span></h3><br/>
        <h3>已装车：<b>{{total}}</b><span>吨</span></h3>
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
      total:function(){
        var sum=0;
        var logis=this.msg.logistics_info;
        if(logis){
          for(var i=0;i<logis.length;i++){
            sum=Number(sum)+Number(logis[i].eli_entruck_amount);
          }
        }
        return Number(sum).toFixed(3);
      },
      dzc:function(){
        var dzc=this.msg.ego_send_amount-this.total;
        if(dzc<0){
          dzc=0;
        }
        return Number(dzc).toFixed(3)
      }
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
      //确认
      sure:function(){
        if(this.dzc!=0){
          this.tipMsg=['货物尚未全部发出，请检查物流车装车情况',true];
        }else{
          var params={
            eo_id:this.cookie.getCookie('uid'),
            ego_id:this.$route.query.oid
          }
          this.ajax.sureLogistics(params).then(function(res){
            console.log(res);
          });
        }
      },
      //编辑物流信息
      edit:function(eli_id){
        this.$router.push({
          path:'/addLogistics',
          query:{
            msg:JSON.stringify(this.msg),
            lid:eli_id,
            oid:this.$route.query.oid,
            path:this.$route.fullPath
          }
        });
      },
      //添加物流信息
      add:function(){
        this.$router.push({
          path:'/addLogistics',
          query:{
            msg:JSON.stringify(this.msg),
            oid:this.$route.query.oid,
            path:this.$route.fullPath
          }
        });
      },
      //获取发货单详情
      getMsg:function(){
        var params={
          eo_id:this.cookie.getCookie('uid'),
          type:1,
          ego_id:this.$route.query.oid
        }
        var _this=this;
        _this.ajax.invoice_list(params).then(function(res){
//          console.log(res);
          _this.msg=res.data;
        });
      }
    }
  }
</script>
<style lang="css" src="../../assets/css/billing.css">
</style>
<style scoped>
  .account{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
