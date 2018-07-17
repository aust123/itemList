<template>
  <div class="billing">
    <header class="Return">
      <router-link :to="{path:$route.query.path}" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      添加物流
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>{{msg.ego_number}}</span>
      </div>
      <div class="show_item">
        供应商：<span>{{msg.paper_name}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{msg.ego_product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{msg.ego_product_stage}}</span>
      </div>
      <div class="show_item">
        采购重量：<span>{{msg.ego_send_amount}}吨</span>
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
        <input v-model="weight" type="text"/>
      </div>
      <div class="form_item">
        <span>车牌号</span>
        <input v-model="carNumber" maxlength="12" type="text" placeholder="请输入车牌号"/>
      </div>
      <div class="form_item">
        <span>司机姓名</span>
        <input v-model="name" maxlength="25" type="text" placeholder="请输入司机姓名"/>
      </div>
      <div class="form_item">
        <span>司机身份证号</span>
        <input v-model="cardId" type="text" placeholder="请输入司机身份证号"/>
      </div>
      <div class="form_item">
        <span>司机联系方式</span>
        <input v-model="phone" type="text" placeholder="请输入司机联系方式"/>
      </div>
    </form>
    <div class="uploadImg divItem">
      <div class="uploadTitle">
        上传照片
        <p>(请上传行驶证、车辆45度带牌、司机身份证正反面、司机手持身份证)</p>
      </div>
      <uploadImg :upImg="{imgLength:9,imgList:imglist}"></uploadImg>
    </div>
    <a @click="sure" class="nextStep divItem">确认</a>
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
    mounted:function(){
      this.msg=JSON.parse(this.$route.query.msg);
//      console.log(this.msg);
      if(this.$route.query.lid){
        this.getLogisticsDetail(this.$route.query.lid);
      }
    },
    data:function(){
      return{
        value1:'请选择装车日期',
        imglist:[],
        tipMsg:['',false],
        msg:{},
        weight:'',
        carNumber:'',
        name:'',
        cardId:'',
        phone:'',
        eli_id:''
      }
    },
    methods:{
      //编辑前获取物流详情
      getLogisticsDetail:function(id){
        var params={
          eo_id:this.cookie.getCookie('uid'),
          ego_id:this.$route.query.oid,
          eli_id:id
        }
        var _this=this;
        this.ajax.getLogisticsDetail(params).then(function(res){
//          console.log(res);
          if(res.status_code==10000){
            _this.value1=dateFormat(res.data.eli_entruck_time*1000, 'YYYY-MM-DD');
            _this.carNumber=res.data.eli_plate_number;
            _this.name=res.data.eli_driver_name;
            _this.cardId=res.data.eli_driver_id_card_number;
            _this.phone=res.data.eli_driver_phone;
            _this.weight=res.data.eli_entruck_amount;
            _this.eli_id=res.data.eli_id;
            var photos=res.data.eli_driver_car_photos;
            if(res.data.eli_driver_car_photos!=''){
              _this.imglist=photos.split(',');
            }
          }
        });
      },
      //确认
      sure:function(){
        var time=document.getElementsByClassName('zcDate')[0].text.replace(/\s+/g,'');
        time=new Date(time).getTime()/1000;
        var imgArr=[];
        var imgs=document.getElementsByClassName('imgItem');
        for(var i=0;i<imgs.length;i++){
          var imgurl=imgs[i].children[0].getAttribute('src');
          imgurl=imgurl.split(this.global.serverPath)[1];
          imgArr.push(imgurl);
        }
        if(!time){
          this.tipMsg=['请选择装车日期',true];
        }else if(!this.checkWeight(this.weight)){
          this.tipMsg=['请输入装车重量',true];
        }else if(this.carNumber==''){
          this.tipMsg=['请输入车牌号',true];
        }else if(this.name==''){
          this.tipMsg=['请输入司机姓名',true];
        }else if(!this.checkCardId(this.cardId)){
          this.tipMsg=['请输入司机身份证号',true];
        }else if(!this.checkPhone(this.phone)){
          this.tipMsg=['请输入司机联系方式',true];
        }else{
          if(this.$route.query.lid){
            var params={
              eo_id:this.cookie.getCookie('uid'),
              ego_id:this.msg.ego_id,
              eli_id:this.eli_id,
              eli_plate_number:this.carNumber,
              eli_driver_name:this.name,
              eli_driver_id_card_number:this.cardId,
              eli_driver_phone:this.phone,
              eli_entruck_amount:Number(this.weight).toFixed(3),
              eli_entruck_time:time
            }
            if(imgArr.length!=0){
              params.eli_driver_car_photos=imgArr.join();
            }
            var _this=this;
            this.ajax.editLogistics(params).then(function(res){
              console.log(res);
              if(res.status_code==10000){
                _this.$router.push({
                  path:_this.$route.query.path
                });
              }
            });
          }else{
            var params={
              eo_id:this.cookie.getCookie('uid'),
              ego_id:this.msg.ego_id,
              eli_plate_number:this.carNumber,
              eli_driver_name:this.name,
              eli_driver_id_card_number:this.cardId,
              eli_driver_phone:this.phone,
              eli_entruck_amount:Number(this.weight).toFixed(3),
              eli_entruck_time:time
            }
            if(imgArr.length!=0){
              params.eli_driver_car_photos=imgArr.join();
            }
            var _this=this;
            this.ajax.addLogistics(params).then(function(res){
              console.log(res);
              if(res.status_code==10000){
                _this.$router.push({
                  path:_this.$route.query.path
                });
              }
            });
          }
        }
      }
    }
  }
</script>

<style lang="css" src="../../assets/css/billing.css">
</style>
