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
        <span>业务员</span>
        <div class="div3">
          <input v-model="ywyVal" @input="ywyChange" type="text" placeholder="请输入业务员姓名"/>
          <ul class="frzzyList">
            <li @click="ywySel(item)" v-for="item in ywyFrzzy" class="frzzyItem">{{item.list_name}}</li>
          </ul>
        </div>
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
        <input class="input4" maxlength="25" v-model="gysName" type="text" placeholder="请输入供应商联系人姓名"/>
      </div>
      <div class="form_item">
        <span>供应商联系方式</span>
        <input class="input5" v-model="gysPhone" type="text" placeholder="请输入供应商联系方式"/>
      </div>
      <div class="form_item">
        <span>收款抬头</span>
        <input class="input2" maxlength="250" v-model="sktt" type="text" placeholder="请输入收款抬头"/>
      </div>
      <div class="form_item">
        <span>开户行</span>
        <input class="input1" maxlength="250" v-model="bank" type="text" placeholder="请输入开户行"/>
      </div>
      <div class="form_item">
        <span>收款账号</span>
        <input class="input2" maxlength="250" v-model="bankId" type="text" placeholder="请输入收款账号"/>
      </div>
    </form>
    <div class="title">货品信息</div>
    <form class="billForm">
      <div class="form_item">
        <span>货品名称</span>
        <select v-model="hpVal">
          <option value="0">请输入货品名称</option>
          <option v-for="item in hpList" :value="item.list_name">{{item.list_name}}</option>
        </select>
      </div>
      <div class="form_item">
        <span>规格等级</span>
        <select v-model="djVal">
          <option value="0">请输入规格等级</option>
          <option v-for="item in djList" :value="item.list_name">{{item.list_name}}</option>
        </select>
      </div>
    </form>
    <div class="uploadImg divItem">
      <div class="uploadTitle">上传照片</div>
      <uploadImg :upImg="{imgLength:9,imgList:imglist}"></uploadImg>
    </div>
    <a @click="submit" class="nextStep divItem">下一步，填写物流信息</a>
    <tip :tipmsg="tipMsg"></tip>
  </div>
</template>

<script>
  import tip from '../../components/tip/tip.vue'
  import { Datetime,Group } from 'vux'
  import uploadImg from '../../components/uploadImg/uploadImg.vue'
  export default{
    components:{
      uploadImg,
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
//        console.log(response);
        _this.ywyList=response.msg.data.sale_list;
        _this.zcList=response.msg.data.paper_list;
        _this.hpList=response.msg.data.product_name_list;
        _this.djList=response.msg.data.product_stage_list;
      });
    },
    data:function(){
      return{
        value1: new Date().toLocaleDateString(),
        ywyList:[],
        ywyFrzzy:[],
        ywyVal:'',
        zcList:[],
        zcFrzzy:[],
        zcVal:'',
        hpList:[],
        hpVal:0,
        djList:[],
        djVal:0,
        gysName:'',
        gysPhone:'',
        sktt:'',
        bank:'',
        bankId:'',
        imglist:[],
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
      //业务员匹配
      ywySel:function(item){
        this.ywyVal=item.list_name;
        this.ywyFrzzy=[];
      },
      ywyChange:function(e){
        this.ywyFrzzy=[];
        for (var i = 0; i < this.ywyList.length; i++) {
          if(e.target.value==''){
            this.ywyFrzzy=[];
          }else if(this.ywyList[i].list_name.indexOf(e.target.value) >= 0) {
            this.ywyFrzzy.push(this.ywyList[i]);
          }
        }
      },
      submit:function(){
        var time=new Date(this.value1).getTime()/1000;
        var imgArr=[];
        var imgs=document.getElementsByClassName('imgItem');
        for(var i=0;i<imgs.length;i++){
          var imgurl=imgs[i].children[0].getAttribute('src');
          imgurl=imgurl.split(this.global.serverPath)[1];
          imgArr.push(imgurl);
        }
        if(!time){
          this.tipMsg=['请选择采购日期',true];
        }else if(this.ywyVal==''){
          this.tipMsg=['业务员不能为空',true];
        }else if(this.zcVal==''){
          this.tipMsg=['供应商不能为空',true];
        }else if(this.gysName==''){
          this.tipMsg=['供应商姓名不能为空',true];
        }else if(!this.checkPhone(this.gysPhone)){
          this.tipMsg=['手机号格式不正确',true];
        }else if(this.sktt==''){
          this.tipMsg=['收款抬头不能为空',true];
        }else if(this.bank==''){
          this.tipMsg=['开户行不能为空',true];
        }else if(this.bankId==''){
          this.tipMsg=['收款账号不能为空',true];
        }else if(this.hpVal==0){
          this.tipMsg=['请选择货品名称',true];
        }else if(this.djVal==0){
          this.tipMsg=['请选择规格等级',true];
        }else if(imgArr.length==0){
          this.tipMsg=['请上传图片',true];
        }else{
          var params={
            user_id:this.cookie.getCookie('uid'),
            epo_launch_time:time,
            epo_sale_name:this.ywyVal,
            epo_supplier_name:this.zcVal,
            epo_supplier_username:this.gysName,
            epo_supplier_phone:this.gysPhone,
            epo_receivables:this.sktt,
            epo_deposit_bank:this.bank,
            epo_account_number:this.bankId,
            epo_product_name:this.hpVal,
            epo_product_stage:this.djVal,
            epo_product_photos:imgArr.join()
          }
          var _this=this;
          this.ajax.billingSmcg(params).then(function(response){
            if(response.status_code==10000){
              console.log(response);
              _this.$router.push({
                path:'/billingSmcgLogistics',
                query:{
                  oid:response.data.order_id
                }
              });
            }else{
              _this.tipMsg=[response.msg,true];
            }
          });
        }
      }
    }
  }
</script>

<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
