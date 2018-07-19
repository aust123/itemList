<template>
  <div class="billing">
    <header class="Return">
      <router-link to="/home" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      销售订单发起
    </header>
    <div class="title">基础信息</div>
    <form class="billForm">
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
        <span>纸厂名称</span>
        <div class="div4">
          <input v-model="zcVal" @input="zcChange" type="text" placeholder="请输入纸厂名称"/>
          <ul class="frzzyList">
            <li @click="zcSel(item)" v-for="item in zcFrzzy" class="frzzyItem">{{item.list_name}}</li>
          </ul>
        </div>
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
        <select v-model="hpVal">
          <option value='0'>请输入货品名称</option>
          <option v-for="item in hpList" :value="item.list_name">{{item.list_name}}</option>
        </select>
      </div>
      <div class="form_item">
        <span>规格等级</span>
        <select v-model="djVal">
          <option value='0'>请输入规格等级</option>
          <option v-for="item in djList" :value="item.list_name">{{item.list_name}}</option>
        </select>
      </div>
      <div class="form_item">
        <span>发往仓库</span>
        <select v-model="ckVal">
          <option value='0'>请输入发往仓库</option>
          <option v-for="item in ckList" :value="item.list_name">{{item.list_name}}</option>
        </select>
      </div>
      <div class="form_item">
        <span>发货重量</span>
        <em>吨</em>
        <input class="input3" v-model="weight" type="text"/>
      </div>
      <div class="form_item">
        <span>发货单价</span>
        <em>元/吨</em>
        <input class="input4" v-model="price" type="text"/>
      </div>
      <div class="form_item">
        <span>发货总价</span>
        <em>元</em>
        <input class="input4" v-model="total" readonly type="text"/>
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
        <input class="input2" v-model="spId" type="text" placeholder="请输入审批单号"/>
      </div>
    </form>
    <div class="uploadImg divItem">
      <div class="uploadTitle">上传审批单原件</div>
      <uploadImg :upImg="{imgLength:4,imgList:imglist}"></uploadImg>
    </div>
    <a @click="billSale" class="nextStep divItem">发起订单</a>
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
    computed :{
      total : function(){
        return this.weight*this.price;
      }
    },
    mounted:function(){
      var _this=this;
      var params={
        order_type:1
      }
      _this.ajax.frzzySearch(params).then(function(response){
        _this.ywyList=response.msg.data.sale_list;
        _this.zcList=response.msg.data.paper_list;
        _this.hpList=response.msg.data.product_name_list;
        _this.djList=response.msg.data.product_stage_list;
        _this.ckList=response.msg.data.store_house;
      });
    },
    data:function(){
      return{
        value1: new Date().toLocaleDateString(),
        value2: new Date().toLocaleDateString(),
        value3: new Date().toLocaleDateString(),
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
        ckList:[],
        ckVal:0,
        weight:'',
        price:'',
        spId:'',
        imglist:[],
        tipMsg:['',false]
      }
    },
    methods:{
      //纸厂匹配
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
      billSale:function(){
        var imgArr=[];
        var imgs=document.getElementsByClassName('imgItem');
        for(var i=0;i<imgs.length;i++){
          var imgurl=imgs[i].children[0].getAttribute('src');
          imgurl=imgurl.split(this.global.serverPath)[1];
          imgArr.push(imgurl);
        }
        var time1=new Date(this.value1).getTime()/1000;//回款时间
        var time2=new Date(this.value2).getTime()/1000;//票到时间
        var time3=new Date(this.value3).getTime()/1000;//过审时间
        if(this.ywyVal==''){
          this.tipMsg=['业务员不能为空',true];
        }else if(this.zcVal==''){
          this.tipMsg=['纸厂名称不能为空',true];
        }else if(!time1){
          this.tipMsg=['请选择回款时间',true];
        }else if(this.hpVal==0){
          this.tipMsg=['请选择货品名称',true];
        }else if(this.djVal==0){
          this.tipMsg=['请选择规格等级',true];
        }else if(this.ckVal==0){
          this.tipMsg=['请选择发往仓库',true];
        }else if(!this.checkWeight(this.weight)){
          this.tipMsg=['请填写发货重量',true];
        }else if(!this.checkPrice(this.price)){
          this.tipMsg=['请填写发货单价',true];
        }else if(!time2){
          this.tipMsg=['请选择票到时间',true];
        }else if(!time3){
          this.tipMsg=['请选择过审时间',true];
        }else if(this.spId==''){
          this.tipMsg=['请填写审批单号',true];
        }else if(imgArr.length==0){
          this.tipMsg=['请上传审批单图片',true];
        }else{
          var params={
            user_id:this.cookie.getCookie('uid'),
            eso_paper_name:this.zcVal,
            eso_receive_payment_time:time1,
            eso_product_name:this.hpVal,
            eso_product_stage:this.djVal,
            eso_storehouse_name:this.ckVal,
            eso_send_total_amount:Number(this.weight).toFixed(3),
            eso_send_per_price:Number(this.price).toFixed(2),
            eso_send_total_money:this.total,
            eso_ticket_return_time:time2,
            eso_pass_audit_time:time3,
            eso_audit_number:this.spId,
            eso_audit_photos:imgArr.join(),
            eso_sale_name:this.ywyVal
          };
          var _this=this;
          this.ajax.billingSale(params).then(function(response){
            console.log(response);
            if(response.status_code==10000){
              _this.$router.push({
                path:'/home'
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
