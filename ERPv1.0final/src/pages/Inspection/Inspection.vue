<template>
  <div class="billing">
    <header class="Return">
      <router-link :to="{path:$route.query.path}" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      质检结果录入
    </header>
    <div class="showList">
      <div class="show_item">
        质检单号：<span>{{quality_data.eqc_number}}</span>
      </div>
      <div class="show_item">
        供应商：<span>{{order_data.epo_supplier_name}}</span>
      </div>
      <div class="show_item">
        车牌号：<span>{{logistics_data.eli_plate_number}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{order_data.epo_product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{order_data.epo_product_stage}}</span>
      </div>
    </div>
    <form class="billForm divItem">
      <div class="form_item">
        <span>过磅人</span>
        <input v-model="name" maxlength="25" type="text" placeholder="请输入过磅人姓名"/>
      </div>
      <div class="form_item">
        <span>过磅毛重</span>
        <em>吨</em>
        <input v-model="weight" type="text"/>
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
        <span>质检批次</span>
        <input v-model="zjpc" maxlength="250" type="text" placeholder="请输入质检批次"/>
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
        上传质检照片
      </div>
      <uploadImg :upImg="{imgLength:4,imgList:imglist}"></uploadImg>
    </div>
    <a @click="sure" class="nextStep divItem">确认</a>
    <tip :tipmsg="tipMsg"></tip>
  </div>
</template>

<script>
  import tip from '../../components/tip/tip.vue'
  import uploadImg from '../../components/uploadImg/uploadImg.vue'
  export default{
    components:{
      uploadImg,
      tip
    },
    mounted:function(){
      this.getMsg();
    },
    data:function(){
      return{
        name:'',
        weight:'',
        price:'',
        hskd:'',
        hzkd:'',
        zjpc:'',
        qtkc:'',
        kcyy:'',
        logistics_data:{},
        order_data:{},
        quality_data:{},
        imglist:[],
        tipMsg:['',false]
      }
    },
    methods:{
      //确认
      sure:function(){
        var imgArr=[];
        var imgs=document.getElementsByClassName('imgItem');
        for(var i=0;i<imgs.length;i++){
          var imgurl=imgs[i].children[0].getAttribute('src');
          imgurl=imgurl.split(this.global.serverPath)[1];
          imgArr.push(imgurl);
        }
        if(this.name==''){
          this.tipMsg=['过磅人不能为空',true];
        }else if(!this.checkWeight(this.weight)){
          this.tipMsg=['请输入过磅毛重',true];
        }else if(!this.checkPrice(this.price)){
          this.tipMsg=['请输入结算单价',true];
        }else if(!this.checkKd(this.hskd)){
          this.tipMsg=['请输入含水扣点（0-100）',true];
        }else if(!this.checkKd(this.hzkd)){
          this.tipMsg=['请输入含杂扣点（0-100）',true];
        }else if(!this.checkPrice(this.qtkc)){
          this.tipMsg=['请输入其他扣除',true];
        }else if(imgArr.length==0){
          this.tipMsg=['请上传质检照片',true];
        }else{
          var params={
            uid:this.cookie.getCookie('uid'),
            quality_id:this.quality_data.eqc_id,
            order_id:this.quality_data.epo_id,
            logistic_id:this.quality_data.eli_id,
            eqc_quality_amount:Number(this.weight).toFixed(3),
            eqc_quality_per_price:Number(this.price).toFixed(2),
            eqc_quality_photos:imgArr.join(),
            eqc_quality_batch:this.zjpc,
            eqc_quality_watery:Number(this.hskd/100).toFixed(2),
            eqc_quality_trash:Number(this.hzkd/100).toFixed(2),
            eqc_other_deductions:Number(this.qtkc).toFixed(2),
            eqc_other_deductions_remark:this.kcyy
          }
          var _this=this;
          this.ajax.writequalitybill(params).then(function(res){
            _this.$router.push({
              path:_this.$route.query.path
            })
          });
        }
      },
      //获取质检单详情
      getMsg:function(){
        var params={
          uid:this.cookie.getCookie('uid'),
          quality_id:this.$route.query.oid
        }
        var _this=this;
        this.ajax.qualitydetail(params).then(function(res){
          console.log(res);
          _this.logistics_data=res.logistics_data;
          _this.order_data=res.order_data;
          _this.quality_data=res.quality_data;
        });
      }
    }
  }
</script>

<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
