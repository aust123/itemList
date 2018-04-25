<template>
  <div class="purchase_intention">
    <div class="return_prelevel">
      <a onclick="window.history.go(-1)" class="return_icon">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      采购意向
    </div>
    <div class="product_basicMsg">
      <div class="picture">
        <img src="../../assets/img/buy_zhoubian_img1.png" alt=""/>
      </div>
      <div class="content">
        <h3>国标废纸</h3>
        <p>山鹰纸厂</p>
        <h4>2000元/吨</h4>
      </div>
    </div>
    <div class="intention_basicMsg">
      <div class="intention_content">
        <div class="intention_item">
          <input type="text" placeholder="请输入采购数量"/>
          <span>吨</span>
        </div>
        <div style="margin: 50px 0;" class="intention_item">
          <input type="text" placeholder="留言（非必填）"/>
        </div>
        <div class="intention_item">
          <p>物流费用负责方：</p>
          <a class="one" @click="changewuliu" :class="{'active':wuliu}">买方</a><a class="two" @click="changewuliu" :class="{'active':!wuliu}">卖方</a>
        </div>
        <div class="intention_item">
          <p>
            收货信息：
            <a>
              <img src="../../assets/img/buy_caigouyixiang_jiantou.png" alt=""/>
            </a>
          </p>
          <h4>张三</h4>
          <h4>13234234324234</h4>
          <h4>安徽省合肥市蜀山区</h4>
        </div>
      </div>
    </div>
    <div class="submit_intention">
      <router-link to="/purchaseSuc">提交采购意向</router-link>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/common.css'

  export default{
    data:function(){
      return{
        wuliu:true
      }
    },
    methods:{
      changewuliu:function(){
        this.wuliu=!this.wuliu;
      }
    }
  }
</script>

<style scoped>

</style>
