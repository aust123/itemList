<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/billingSelect" class="ReturnIcon">
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
        <span>供应商</span>
        <div class="div3">
          <input v-model="zcVal" @input="zcChange" type="text" placeholder="请输入供应商名称"/>
          <ul class="frzzyList">
            <li @click="zcSel(item)" v-for="item in zcFrzzy" class="frzzyItem">{{item.list_name}}</li>
          </ul>
        </div>
      </div>
      <div class="form_item">
        <span>供应商联系人</span>
        <input maxlength="25" v-model="gysName" type="text" placeholder="请输入供应商联系人姓名"/>
      </div>
      <div class="form_item">
        <span>供应商联系方式</span>
        <input v-model="gysPhone" type="text" placeholder="请输入供应商联系方式"/>
      </div>
      <div class="form_item">
        <span>收款抬头</span>
        <input maxlength="250" v-model="sktt" type="text" placeholder="请输入收款抬头"/>
      </div>
      <div class="form_item">
        <span>开户行</span>
        <input maxlength="250" v-model="bank" type="text" placeholder="请输入开户行"/>
      </div>
      <div class="form_item">
        <span>收款账号</span>
        <input maxlength="250" v-model="bankId" type="text" placeholder="请输入收款账号"/>
      </div>
    </form>
    <a @click="submit" class="nextStep divItem">下一步，填写物流信息</a>
    <tip :tipmsg="tipMsg"></tip>
  </div>
</template>

<script>
  import tip from '../../components/tip/tip.vue'
  import { Datetime,Group } from 'vux'
  export default{
    components:{
      Datetime,
      Group,
      tip
    },
    mounted:function(){
      var _this=this;
      var params={
        order_type:2
      }
      _this.ajax.frzzySearch(params).then(function(response){
        _this.zcList=response.msg.data.paper_list;
      });
    },
    data:function(){
      return{
        value1: new Date().toLocaleDateString(),
        zcList:[],
        zcFrzzy:[],
        zcVal:'',
        gysName:'',
        gysPhone:'',
        sktt:'',
        bank:'',
        bankId:'',
        tipMsg:['',false]
      }
    },
    methods:{
      //供应商匹配
      zcSel:function(item){
        this.zcVal=item.list_name;
        this.zcFrzzy=[];
      },
      zcChange:function(e){
        this.zcFrzzy=[];
        for (var i = 0; i < this.zcList.length; i++) {
          if(e.target.value==''){
            this.zcFrzzy=[];
          }else if(this.zcList[i].list_name.indexOf(e.target.value) >= 0) {
            this.zcFrzzy.push(this.zcList[i]);
          }
        }
      },
      submit:function(){
        var time=new Date(this.value1).getTime()/1000;
        if(!time){
          this.tipMsg=['请选择采购日期',true];
        }else if(this.zcVal==''){
          this.tipMsg=['供应商不能为空',true];
        }else if(this.gysName==''){
          this.tipMsg=['供应商联系人不能为空',true];
        }else if(!this.checkPhone(this.gysPhone)){
          this.tipMsg=['手机号格式不正确',true];
        }else if(this.sktt==''){
          this.tipMsg=['收款抬头不能为空',true];
        }else if(this.bank==''){
          this.tipMsg=['开户行不能为空',true];
        }else if(this.bankId==''){
          this.tipMsg=['收款账号不能为空',true];
        }else{
          var _this=this;
          var params={
            user_id:this.cookie.getCookie('uid'),
            epo_launch_time:time,
            epo_supplier_name:this.zcVal,
            epo_supplier_username:this.gysName,
            epo_supplier_phone:this.gysPhone,
            epo_receivables:this.sktt,
            epo_deposit_bank:this.bank,
            epo_account_number:this.bankId
          }
          _this.ajax.billingSmmh(params).then(function(response){
            console.log(response);
            if(response.status_code==10000){
              _this.$router.push({
                path:'/billingSmmhLogistics',
                query:{
                  oid:response.data.order_id
                }
              });
            }else{
              alert(response.msg);
            }
          });
        }
      }
    }
  }
</script>

<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
  .nextStep{
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;

  }
</style>
