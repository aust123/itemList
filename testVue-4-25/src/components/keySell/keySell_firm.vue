<template>
  <div class="keysell">
    <div class="return_prelevel">
      <a onclick="window.history.go(-1)" class="return_icon">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      卖货
    </div>
    <div class="publish_form">
      <p>
        <span>供应纸厂</span>
        <a>请选择纸厂</a>
      </p>
      <p>
        <span>货品名称</span>
        <input type="text" placeholder="请填写货品名称"/>
      </p>
      <p>
        <span>货品重量（吨）</span>
        <input type="text" placeholder="请填写货品重量"/>
      </p>
      <p>
        <span>发货日期</span>
        <span class="seldate">
          <datetime class="dateshow" v-model="valuedate"></datetime>
        </span>
      </p>
    </div>
    <div class="intention_item keySell_wuliu">
      <p>物流费用负责方：</p>
      <a class="one" @click="changewuliu" :class="{'active':wuliu}">买方</a><a class="two" @click="changewuliu" :class="{'active':!wuliu}">卖方</a>
    </div>
    <div class="submit_publish">
      <a href="">确认提交</a>
    </div>
  </div>
</template>

<script>
  import { Datetime } from 'vux'
  export default{
    components: {
      Datetime
    },
    data:function(){
      return{
        wuliu:true,
        valuedate:'请选择发货日期'
      }
    },
    mounted:function(){
//      this.$root.eventHub.$on('selectFirm',function(index){
//        console.log(index);
//      });
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
