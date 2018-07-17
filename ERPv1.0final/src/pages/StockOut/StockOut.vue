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
    <div class="title">出库信息<a @click="add" class="add">添加</a></div>
    <table class="billTable">
      <thead>
        <tr>
          <th>仓库</th>
          <th>货位</th>
          <th>出库重量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in msg.storehouse_ppl">
          <td>{{msg.edo_storehouse_name}}</td>
          <td>{{item.sh_product_allocation_number}}</td>
          <td>{{item.sh_delivery_total_amount}}</td>
          <td>
            <a @click="edit(item)"><img src="../../assets/imgs/billing_icon_edite.png" alt=""/></a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="account divItem">
      <div class="h152">
        <h3>待出库：{{dck}}<span>吨</span></h3><br/>
        <h3>已出库：<b>{{msg.edo_delivery_total_amount}}</b><span>吨</span></h3>
        <a @click="sure" class="sure">确认</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    computed:{
      dck:function(){
        var dckVal= this.msg.edo_should_delivery_amount-this.msg.edo_delivery_total_amount;
        if(dckVal<0){
          dckVal=0;
        }
        return Number(dckVal).toFixed(3)
      }
    },
    data:function(){
      return{
        msg:{}
      }
    },
    mounted:function(){
      this.getMsg();
    },
    methods:{
      //确认
      sure:function(){
        var params={
          eo_id:this.cookie.getCookie('uid'),
          edo_id:this.$route.query.oid
        }
        var _this=this;
        this.ajax.stockOutSure(params).then(function(res){
          console.log(res);
          if(res.status_code==10000){
            this.$router.push({
              path:_this.$route.query.path
            });
          }
        });
      },
      //添加出库信息
      add:function(){
        this.$router.push({
          path:'/stockOutAdd',
          query:{
            msg:JSON.stringify(this.msg),
            oid:this.$route.query.oid,
            path:this.$route.fullPath
          }
        });
      },
      //编辑出库信息
      edit:function(item){
        this.$router.push({
          path:'/stockOutAdd',
          query:{
            msg:JSON.stringify(this.msg),
            item:JSON.stringify(item),
            oid:this.$route.query.oid,
            path:this.$route.fullPath
          }
        });
      },
      //获取详情信息
      getMsg:function(){
        var params={
          eo_id:this.cookie.getCookie('uid'),
          edo_id:this.$route.query.oid,
          type:1
        }
        var _this=this;
        _this.ajax.stockOutDetail(params).then(function(res){
          console.log(res);
          _this.msg=res.data;
        });
      }
    }
  }
</script>
<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
  .billing{
    padding-bottom: 160px;
  }
  .account{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
