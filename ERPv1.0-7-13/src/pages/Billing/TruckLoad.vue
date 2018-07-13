<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      采购装车录入
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>FF23423423</span>
      </div>
      <div class="show_item">
        供应商：<span>永昌打包站</span>
      </div>
      <div class="show_item">
        货品名称：<span>黄板纸</span>
      </div>
      <div class="show_item">
        规格等级：<span>A级</span>
      </div>
      <div class="show_item">
        采购重量：<span>90吨</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>装车日期</span>
        <group class="selDate">
          <datetime v-model="value1"></datetime>
        </group>
      </div>
      <div class="form_item">
        <span>装车重量</span>
        <em>吨</em>
        <input type="text"/>
      </div>
      <div class="form_item">
        <span>单价</span>
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
        <span>车牌号</span>
        <input type="text" placeholder="请输入车牌号"/>
      </div>
      <div class="form_item">
        <span>司机姓名</span>
        <input type="text" placeholder="请输入司机姓名"/>
      </div>
      <div class="form_item">
        <span>司机联系方式</span>
        <input type="text" placeholder="请输入司机联系方式"/>
      </div>
    </form>
    <div class="uploadImg divItem">
      <div class="uploadTitle">
        上传照片
        <p>(请上传行驶证、车辆45度带牌、司机身份证正反面、司机手持身份证)</p>
      </div>
      <uploadImg></uploadImg>
    </div>
    <div class="account divItem">
      <div class="h152">
        <a class="sure">确认</a>
        <a class="delete">删除</a>
      </div>
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
    }
  }
</script>
<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
</style>
