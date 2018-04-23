<template>
  <div>
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      发布需求
    </div>
    <div class="publish_form pub_logistics">
      <p>
        <span>出发地</span>
        <router-link :to="{path:'/myAddress',query:{logistics:1}}">请选择发货地址</router-link>
      </p>
      <p>
        <span>目的地</span>
        <router-link :to="{path:'/myAddress',query:{logistics:1}}">请选择收货地址</router-link>
      </p>
      <p>
        <span>发货日期</span>
        <datetime class="dateshow" v-model="valuedate"></datetime>
      </p>
      <p>
        <span>货物品类</span>
        <input type="text" placeholder="请填写货物品类"/>
      </p>
      <p>
        <span>货物重量</span>
        <input type="text" placeholder="请填写货物重量"/>
      </p>
      <p>
        <span>联系方式</span>
        <input type="tel" placeholder="请填写联系方式"/>
      </p>
      <p>
        <span>备注</span><br/>
        <textarea placeholder="请填写您的需求备注。"></textarea>
      </p>
    </div>
    <div class="submit_publish">确认发布</div>
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
        valuedate:'请选择发货日期'
      }
    },
    mounted(){
    	console.log(this.$route.query)
    },
    methods:{
    	
    }
  }
</script>

<style scoped>
  .pub_logistics a{
    color: #999;
    display: inline-block;
    background-image:url('../../assets/img/jiantou_right.png');
    background-repeat: no-repeat;
    background-size:17px 31px;
    background-position: right center;
    width: 75%;
  }
  .pub_logistics input{
    width: 72%;
  }
  .pub_logistics .dateshow{
    width: 70%;
  }
  .pub_logistics textarea{
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #e0e0e0;
    width: 100%;
  }
</style>
