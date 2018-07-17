<template>
  <div class="billing">
    <header class="Return">
      <router-link :to="{path:$route.query.path}" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      上传结算清单
    </header>
    <div class="showList">
      <div class="show_item">
        订单号：<span>{{msg.order_number}}</span>
      </div>
      <div class="show_item">
        纸厂：<span>{{msg.paper_name}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{msg.product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{msg.product_stage}}</span>
      </div>
      <div class="show_item">
        车辆：<span>{{item.plate_number}}</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>结算日期</span>
        <group class="selDate">
          <datetime class="date" :value="value1"></datetime>
        </group>
      </div>
      <div class="form_item">
        <span>司磅净重</span>
        <em>吨</em>
        <input v-model="weight" type="text" placeholder="请输入结算单上扣除皮重后的净重量"/>
      </div>
      <div class="form_item">
        <span>结算单价</span>
        <em>元/吨</em>
        <input v-model="price" type="text"/>
      </div>
      <div class="form_item">
        <span>含水扣点</span>
        <em>%</em>
        <input v-model="hskd" type="text"/>
      </div>
      <div class="form_item">
        <span>含杂扣点</span>
        <em>%</em>
        <input v-model="hzkd" type="text"/>
      </div>
      <div class="form_item">
        <span>其他扣除</span>
        <em>元</em>
        <input v-model="qtkc" type="text"/>
      </div>
      <div class="form_item">
        <span>扣除原因</span>
        <input v-model="kcyy" maxlength="250" type="text" placeholder="请输入扣除原因"/>
      </div>
    </form>
    <div class="uploadImg divItem">
      <div class="uploadTitle">
        上传结算清单
      </div>
      <uploadImg :upImg="{imgLength:4,imgList:imglist}"></uploadImg>
    </div>
    <div class="account divItem">
      <div class="h152">
        <h3>结算净重：{{settleWeight}}<span>吨</span></h3><br/>
        <h3>结算总价：<b>￥{{settleTotal}}</b></h3>
        <a @click="sure" class="sure">确认</a>
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
    mounted:function(){
      this.msg=JSON.parse(this.$route.query.msg);
      this.item=JSON.parse(this.$route.query.item);
      if(this.$route.query.type==2){
        this.value1=dateFormat(this.item.settle_time*1000, 'YYYY-MM-DD');
        this.weight=this.item.net_weight;
        this.price=this.item.per_price;
        this.hskd=this.item.settle_watery*100;
        this.hzkd=this.item.settle_trash*100;
        this.qtkc=this.item.other_deductions;
        this.kcyy=this.item.other_deductions_remark;
        this.imglist=this.item.settle_photos;
      }
    },
    computed:{
      settleWeight:function(){
        return Number(Number(this.weight).toFixed(3)*(1-Number(this.hskd/100).toFixed(2)-Number(this.hzkd/100)).toFixed(2)).toFixed(3)
      },
      settleTotal:function(){
        return Number(Number(this.price).toFixed(2)*this.settleWeight-Number(this.qtkc).toFixed(2)).toFixed(2)
      }
    },
    data:function(){
      return{
        value1: new Date().toLocaleDateString(),
        weight:'',
        price:'',
        hskd:'',
        hzkd:'',
        qtkc:'',
        kcyy:'',
        imglist:[],
        msg:{},
        item:{},
        tipMsg:['',false]
      }
    },
    methods:{
      sure:function(){
        var time=document.getElementsByClassName('date')[0].text.replace(/\s+/g,'');
        time=new Date(time).getTime()/1000;
        var imgArr=[];
        var imgs=document.getElementsByClassName('imgItem');
        for(var i=0;i<imgs.length;i++){
          var imgurl=imgs[i].children[0].getAttribute('src');
          imgurl=imgurl.split(this.global.serverPath)[1];
          imgArr.push(imgurl);
        }
        if(!time){
          this.tipMsg=['请选择结算日期',true];
        }else if(!this.checkWeight(this.weight)){
          this.tipMsg=['请输入司磅净重',true];
        }else if(!this.checkPrice(this.price)){
          this.tipMsg=['请输入结算单价',true];
        }else if(!this.checkKd(this.hskd)){
          this.tipMsg=['请输入含水扣点',true];
        }else if(!this.checkKd(this.hzkd)){
          this.tipMsg=['请输入含杂扣点',true];
        }else if(!this.checkPrice(this.qtkc)){
          this.tipMsg=['请输入其他扣除',true];
        }else if(imgArr.length==0){
          this.tipMsg=['请上传结算清单照片',true];
        }else{
          var params={
            user_id:this.cookie.getCookie('uid'),
            order_id:this.msg.order_id,
            modify_type:this.$route.query.type,
            logistic_id:this.item.logistic_id,
            es_other_deductions_remark:this.kcyy,
            es_other_deductions:Number(this.qtkc).toFixed(2),
            es_settle_watery:Number(this.hskd/100).toFixed(2),
            es_settle_trash:Number(this.hzkd/100).toFixed(2),
            es_per_price:Number(this.price).toFixed(2),
            es_net_weight:Number(this.weight).toFixed(3),
            es_settle_photos:imgArr.join(),
            es_settle_time:time
          }
          this.ajax.uploadSettle(params).then(function(res){
            if(res.status_code==10000){
              window.history.back();
            }else{
              console.log(res);
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
