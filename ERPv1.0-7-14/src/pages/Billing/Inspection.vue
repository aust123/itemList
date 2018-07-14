<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      质检结果录入
    </header>
    <div class="showList">
      <div class="show_item">
        质检单号：<span>FF23423423</span>
      </div>
      <div class="show_item">
        供应商：<span>永昌打包站</span>
      </div>
      <div class="show_item">
        车牌号：<span>皖D35434534</span>
      </div>
      <div class="show_item">
        货品名称：<span>黄板纸</span>
      </div>
      <div class="show_item">
        规格等级：<span>A级</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>过磅人</span>
        <input type="text" placeholder="请输入过磅人姓名"/>
      </div>
      <div class="form_item">
        <span>过磅毛重</span>
        <em>吨</em>
        <input type="text"/>
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
        <span>质检批次</span>
        <input type="text" placeholder="请输入质检批次"/>
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
        上传质检照片
      </div>
      <uploadImg></uploadImg>
    </div>
    <a class="nextStep divItem">确认</a>
  </div>
</template>

<script>
  import uploadImg from '../../components/uploadImg/uploadImg.vue'
  export default{
    components:{
      uploadImg
    }
  }
</script>

<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
