<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      销售订单发起
    </header>
    <div class="title">基础信息</div>
    <form class="billForm">
      <div class="form_item">
        <span>业务员</span>
        <input type="text" placeholder="请输入业务员姓名"/>
      </div>
      <div class="form_item">
        <span>纸厂名称</span>
        <input type="text" placeholder="请输入纸厂名称"/>
      </div>
      <div class="form_item">
        <span>回款时间</span>
        <group class="selDate">
          <datetime v-model="value1"></datetime>
        </group>
      </div>
    </form>
    <div class="title">货品信息</div>
    <form class="billForm">
      <div class="form_item">
        <span>货品名称</span>
        <select>
          <option value='0'>请输入货品名称</option>
        </select>
      </div>
      <div class="form_item">
        <span>规格等级</span>
        <select>
          <option value='0'>请输入规格等级</option>
        </select>
      </div>
      <div class="form_item">
        <span>发往仓库</span>
        <select>
          <option value='0'>请输入发往仓库</option>
        </select>
      </div>
      <div class="form_item">
        <span>发货重量</span>
        <em>吨</em>
        <input type="text"/>
      </div>
      <div class="form_item">
        <span>发货单价</span>
        <em>元/吨</em>
        <input type="text"/>
      </div>
      <div class="form_item">
        <span>发货总价</span>
        <em>元</em>
        <input type="text"/>
      </div>
      <div class="form_item">
        <span>票到时间</span>
        <group class="selDate">
          <datetime v-model="value2"></datetime>
        </group>
      </div>
    </form>
    <div class="title">审批信息</div>
    <form class="billForm">
      <div class="form_item">
        <span>过审时间</span>
        <group class="selDate">
          <datetime v-model="value3"></datetime>
        </group>
      </div>
      <div class="form_item">
        <span>审批单号</span>
        <input type="text" placeholder="请输入审批单号"/>
      </div>
    </form>
    <div class="uploadImg divItem">
      <div class="uploadTitle">上传审批单原件</div>
      <uploadImg></uploadImg>
    </div>
    <a class="nextStep divItem">发起订单</a>
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
        value1: '2015-11-12',
        value2: '2015-11-12',
        value3: '2015-11-12'
      }
    },
    methods:{
    }
  }
</script>

<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
