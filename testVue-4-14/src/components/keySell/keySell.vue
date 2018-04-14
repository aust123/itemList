<template>
  <div class="keysell">
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      一键卖货
    </div>
    <div class="publish_form">
      <p>
        <span>纸厂名称</span>
        <input style="color: #333;" readonly type="text" value="山鹰纸厂"/>
      </p>
      <p>
        <span>贸易公司</span>
        <router-link to="/selectFirm">请选择贸易公司</router-link>
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
      <p>
        <span>上传司机</span>
        <router-link to="/driverMsg">请上传司机信息</router-link>
      </p>
      <p>
        <span>备注</span>
      </p>
      <p>
        <textarea placeholder="请填写订单备注！"></textarea>
      </p>
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
        wuliu:'默认卖方',
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
  .publish_form textarea{
    width: 100%;
  }
</style>
