<template>
  <div class="ious">
    <a onclick="window.history.go(-1)" class="return_icon">
      <img src="../../assets/img/title_jiantou.png" alt=""/>
    </a>
    <div class="ious_form">
      <p>
        <label>姓名</label>
        <input type="text" placeholder="请填写姓名"/>
      </p>
      <p>
        <label>电话</label>
        <input type="tel" placeholder="请填写电话号码"/>
      </p>
      <p>
        <label>地址</label>
        <a style="display: inline-block;color: #999;font-size: 14px;">
          <x-address v-model="value" :list="addressData" placeholder="请选择地址">
          </x-address>
        </a>
      </p>
      <p>
        <label>详细地址</label>
        <textarea placeholder="请填写详细地址"></textarea>
      </p>
      <p>
        <label>借款金额（元）</label>
        <input class="loans" type="text" placeholder="请填写借款金额"/>
      </p>
      <p>
        <label>资金用途</label>
        <input class="loans" type="text" placeholder="请填写资金用途"/>
      </p>
      <p>
        <label>还款周期（月）</label>
        <input class="loans" type="text" placeholder="请填写还款周期"/>
      </p>
      <div @click="openSucc" class="submit_publish">
        <a>提交</a>
      </div>
      <p class="ious_agreement">提交代表同意 <b>《纸去哪了》小猴白条用户协议</b></p>
    </div>
    <div class="popBox popBox_succ">
      <div class="popContent">
        <h3>提交成功后，将会有业务员与您联系，请注意接听电话！</h3>
        <a @click="closeSucc" class="sure">确定</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { XAddress, ChinaAddressV4Data } from 'vux'
  export default{
    components: {
      XAddress
    },
    data:function(){
      return{
        active: false,
        value: [],
        addressData: ChinaAddressV4Data,
        showAddress: false
      }
    },
    methods:{
      openSucc:function(){
        $('.popBox_succ').fadeIn();
      },
      closeSucc:function(){
        $('.popBox_succ').fadeOut();
      },
      doShowAddress :function() {
        this.showAddress = true;
        setTimeout(() => {
          this.showAddress = false;
        }, 500)
      }
    }
  }
</script>

<style scoped>
  .submit_publish{
    margin-bottom: 0;
  }
  .popBox_succ{
    position: fixed;
  }
  .popContent{
    height: 350px;
  }
  .popContent h3{
    margin: 74px 0;
  }
  .popContent a{
    width: 382px;
    height: 68px;
    border-radius: 25px;
    margin: 0 auto;
    display: block;
  }
</style>
