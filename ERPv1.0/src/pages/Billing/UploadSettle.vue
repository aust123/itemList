<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      上传结算清单
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>FF23423423</span>
      </div>
      <div class="show_item">
        纸厂：<span>山鹰纸厂</span>
      </div>
      <div class="show_item">
        货品名称：<span>黄板纸</span>
      </div>
      <div class="show_item">
        规格等级：<span>A级</span>
      </div>
      <div class="show_item">
        车辆：<span>皖A34234324</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>结算日期</span>
        <group class="selDate">
          <datetime v-model="value1"></datetime>
        </group>
      </div>
      <div class="form_item">
        <span>司磅净重</span>
        <em>吨</em>
        <input type="text" placeholder="请输入结算单上扣除皮重后的净重量"/>
      </div>
      <div class="form_item">
        <span>结算单价</span>
        <em>元/吨</em>
        <input type="text"/>
      </div>
      <div class="form_item">
        <span>含水扣点</span>
        <em>%</em>
        <input type="text"/>
      </div>
      <div class="form_item">
        <span>含杂扣点</span>
        <em>%</em>
        <input type="text"/>
      </div>
      <div class="form_item">
        <span>其他扣除</span>
        <em>元</em>
        <input type="text"/>
      </div>
      <div class="form_item">
        <span>扣除原因</span>
        <input type="text" placeholder="请输入扣除原因"/>
      </div>
    </form>
    <div class="uploadImg divItem">
      <div class="uploadTitle">
        上传结算清单
      </div>
      <uploadImg></uploadImg>
    </div>
    <div class="account divItem">
      <div class="h152">
        <h3>结算净重：8.7<span>吨</span></h3><br/>
        <h3>结算总价：<b>￥54,000.00</b></h3>
        <a class="sure">确认</a>
      </div>
    </div>
    <div class="formTip">
      <div class="tipMsg">含水扣点没有填写，请完善后确定</div>
    </div>
  </div>
</template>

<script>
  import { Datetime,Group } from 'vux'
  import uploadImg from '../../components/uploadImg/uploadImg.vue'
  export default{
    components:{
      uploadImg,
      Datetime,
      Group
    },
    data:function(){
      return{
        value1: '2015-11-12'
      }
    },
    methods:{
    }
  }
</script>
<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
</style>
