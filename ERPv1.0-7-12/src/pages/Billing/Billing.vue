<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      采购订单发起
    </header>
    <div class="title">基础信息</div>
    <form class="billForm">
      <div class="form_item">
        <span>采购日期</span>
        <group class="selDate">
          <datetime v-model="value1"></datetime>
        </group>
      </div>
      <div class="form_item">
        <span>业务员</span>
        <input type="text" placeholder="请输入业务员名称"/>
      </div>
      <div class="form_item">
        <span>供应商</span>
        <input type="text" placeholder="请输入供应商名称"/>
      </div>
      <div class="form_item">
        <span>供应商联系人</span>
        <input type="text" placeholder="请输入供应商联系人姓名"/>
      </div>
      <div class="form_item">
        <span>供应商联系方式</span>
        <input type="text" placeholder="请输入供应商联系方式"/>
      </div>
      <div class="form_item">
        <span>收款抬头</span>
        <input type="text" placeholder="请输入收款抬头"/>
      </div>
      <div class="form_item">
        <span>开户行</span>
        <input type="text" placeholder="请输入开户行"/>
      </div>
      <div class="form_item">
        <span>收款账号</span>
        <input type="text" placeholder="请输入收款账号"/>
      </div>
    </form>
    <div class="title">货品信息</div>
    <form class="billForm">
      <div class="form_item">
        <span>货品名称</span>
        <select>
          <option value='请输入货品名称'>请输入货品名称</option>
        </select>
      </div>
      <div class="form_item">
        <span>规格等级</span>
        <select>
          <option value='请输入规格等级'>请输入规格等级</option>
        </select>
      </div>
    </form>
    <div class="uploadImg divItem">
      <div class="uploadTitle">上传照片</div>
      <uploadImg></uploadImg>
    </div>
    <router-link to="/billEntry" class="nextStep divItem">下一步，填写物流信息</router-link>
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
        value1: '选择日期'
      }
    },
    methods:{
    }
  }
</script>

<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
