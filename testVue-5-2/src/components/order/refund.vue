<template>
  <div>
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      申请退款
    </div>
    <div class="refund">
      <p>订单号：ADJSUDJ8577</p>
      <p>
        已支付金额（含订金）共计：
        <b>10000元</b>
      </p>
      <p>
        申请退款金额：
        <input type="text"/>
        <span>元</span>
      </p>
    </div>
    <p class="refund_tip">
      <img src="../../assets/img/wuliu_tishi.png" alt=""/>
      申请退款金额不能大于已支付金额！
    </p>
    <div @click="successPopbox" class="submit_publish">确认退款</div>
    <div class="popBox popBox_succ">
      <div class="popContent">
        <h3>您已经成功提交退款申请，<br/>请耐心等待审核！</h3>
        <span @click="closePopBoxSucc">
          <img src="../../assets/img/orderdetail_tk_cancel.png" alt=""/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      successPopbox:function(){
        $('.popBox_succ').fadeIn();
      },
      closePopBoxSucc:function(){
        $('.popBox_succ').fadeOut();
      }
    }
  }
</script>

<style scoped>
  .submit_publish{
    margin-top: 140px;
    font-size: 36px;
  }
</style>
