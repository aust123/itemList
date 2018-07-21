<template>
  <div class="billing">
    <header class="Return">
      <router-link :to="{path:$route.query.path}" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      采购装车录入
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>{{orderMsg.order_number}}</span>
      </div>
      <div class="show_item">
        供应商：<span>{{orderMsg.supplier_name}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{orderMsg.product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{orderMsg.product_stage}}</span>
      </div>
      <div class="show_item">
        采购重量：<span>{{orderMsg.total_entruck_amount}}吨</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>装车日期</span>
        <group class="selDate">
          <datetime class="zcDate" :value="value1"></datetime>
        </group>
      </div>
      <div class="form_item">
        <span>装车重量</span>
        <em>吨</em>
        <input class="input3" v-model="weight" type="text"/>
      </div>
      <div class="form_item">
        <span>单价</span>
        <em>元/吨</em>
        <input class="input2" v-model="price" type="text"/>
      </div>
      <div class="form_item">
        <span>含水扣点</span>
        <em>%</em>
        <input class="input3" v-model="hskd" type="text"/>
      </div>
      <div class="form_item">
        <span>含杂扣点</span>
        <em>%</em>
        <input class="input3" v-model="hzkd" type="text"/>
      </div>
      <div class="form_item">
        <span>车牌号</span>
        <input class="input1" maxlength="12" v-model="carNumber" type="text" placeholder="请输入车牌号"/>
      </div>
      <div class="form_item">
        <span>司机姓名</span>
        <input class="input2" maxlength="25" v-model="name" type="text" placeholder="请输入司机姓名"/>
      </div>
      <div class="form_item">
        <span>司机身份证号</span>
        <input class="input4" v-model="cardId" type="text" placeholder="请输入司机身份证号"/>
      </div>
      <div class="form_item">
        <span>司机联系方式</span>
        <input class="input4" v-model="phone" type="text" placeholder="请输入司机联系方式"/>
      </div>
    </form>
    <div class="uploadImg divItem">
      <div class="uploadTitle">
        上传照片
        <p>(请上传行驶证、车辆45度带牌、司机身份证正反面、司机手持身份证)</p>
      </div>
      <uploadImg :upImg="{imgLength:9,imgList:imglist}"></uploadImg>
    </div>
    <div class="account divItem">
      <div class="h152">
        <a @click="sure" class="sure">确认</a>
        <!--<a class="delete">删除</a>-->
      </div>
    </div>
    <tip :tipmsg="tipMsg"></tip>
  </div>
</template>

<script>
  import tip from '../../components/tip/tip.vue'
  import { dateFormat,Datetime,Group } from 'vux'
  import uploadImg from '../../components/uploadImg/uploadImg.vue'
  export default{
    components:{
      uploadImg,
      Datetime,
      Group,
      tip
    },
    data:function(){
      return{
        value1: new Date().toLocaleDateString(),
        weight:'',
        price:'',
        hskd:'',
        hzkd:'',
        carNumber:'',
        name:'',
        cardId:'',
        phone:'',
        orderMsg:{},
        imglist:[],
        driver_id:'',
        tipMsg:['',false]
      }
    },
    mounted:function(){
      this.orderMsg=JSON.parse(this.$route.query.msg);
      if(this.$route.query.logis){//编辑
        var item=JSON.parse(this.$route.query.logis);
//        console.log(item);
        this.weight=item.entruck_amount;
        this.price=item.per_price;
        this.hskd=item.watery*100;
        this.hzkd=item.trash*100;
        this.value1=dateFormat(item.entruck_time*1000, 'YYYY-MM-DD');
        this.cardId=item.driver_id_number;
        this.carNumber=item.plate_number;
        this.name=item.driver_name;
        this.phone=item.driver_phone;
        if(item.driver_car_photos==''){
          item.driver_car_photos=[];
        }
        this.imglist=item.driver_car_photos;
        this.driver_id=item.driver_id;
      }

    },
    methods:{
      //确认提交
      sure:function(){
        var _this=this;
        var time=document.getElementsByClassName('zcDate')[0].text.replace(/\s+/g,'');
        time=new Date(time).getTime()/1000;
        if(!time){
          this.tipMsg=['请选择装车日期',true];
        }else if(!this.checkWeight(this.weight)){
          this.tipMsg=['请输入装车重量',true];
        }else if(!this.checkPrice(this.price)){
          this.tipMsg=['请输入单价',true];
        }else if(!this.checkKd(this.hskd)){
          this.tipMsg=['请输入含水扣点（0-100）',true];
        }else if(!this.checkKd(this.hzkd)){
          this.tipMsg=['请输入含杂扣点（0-100）',true];
        }else if(this.carNumber==''){
          this.tipMsg=['请输入车牌号',true];
        }else if(this.name==''){
          this.tipMsg=['请输入司机姓名',true];
        }else if(!this.checkCardId(this.cardId)){
          this.tipMsg=['身份证号格式不正确',true];
        }else if(!this.checkPhone(this.phone)){
          this.tipMsg=['手机号格式不正确',true];
        }else{
          var imgArr=[];
          var imgs=document.getElementsByClassName('imgItem');
          for(var i=0;i<imgs.length;i++){
            var imgurl=imgs[i].children[0].getAttribute('src');
            imgurl=imgurl.split(this.global.serverPath)[1];
            imgArr.push(imgurl);
          }
          var params={
            user_id:this.cookie.getCookie('uid'),
            order_id:this.orderMsg.order_id,
            order_type:1,
            eli_plate_number:this.carNumber,
            eli_driver_name:this.name,
            eli_driver_phone:this.phone,
            eli_driver_id_card_number:this.cardId,
            eli_watery:Number(this.hskd/100).toFixed(2),
            eli_trash:Number(this.hzkd/100).toFixed(2),
            eli_per_price:Number(this.price).toFixed(2),
            eli_entruck_amount:Number(this.weight).toFixed(3),
            eli_entruck_time:time
          }
          if(imgArr.length!=0){
            params.eli_driver_car_photos=imgArr.join();
          }
          if(this.$route.query.logis){  //编辑
            params.modify_type=2;
            params.logistic_id=this.driver_id;
          }else{  //添加
            params.modify_type=1;
          }
          _this.ajax.addPurchaseLogistics(params).then(function(res){
            if(res.status_code==10000){
              _this.$router.push({
                path:_this.$route.query.path
              });
            }else{
              _this.tipMsg=[res.msg,true];
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
</style>
