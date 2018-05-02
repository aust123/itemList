<template>
  <div class="publish_supply">
    <div class="return_prelevel">
      <router-link to="/myAddress" class="return_icon">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      添加地址
    </div>
    <div class="addAddress_form">
      <h3>联系人</h3>
      <p>
        <label>姓名</label>
        <input v-model="aname" type="text" placeholder="请填写姓名"/>
      </p>
      <p>
        <label>电话</label>
        <input v-model="aphone" type="tel" placeholder="请填写手机号码"/>
      </p>
      <h3>地址</h3>
      <p>
        <label>省/市/区</label>
        <a style="padding-right:30px;width:63%;font-size: 16px;">
          <x-address class="addr" :title="addrtitle" v-model="value" :list="addressData" placeholder="请选择地址">
          </x-address>
        </a>
      </p>
      <p>
        <label>详细地址</label>
        <a @click="detailAddr" class="detail_addr">{{summaryAddr}}</a>
      </p>
      <h3>
        <a :class="{'active':active}" @click="changeActive" id="moren"></a>
        <label @click="changeActive" class="moren_label">设为默认</label>
      </h3>
    </div>
    <div class="submit">
      <a @click="addAddr">保存</a>
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
        addrtitle:'',
        active: false,
        value: [],
        addressData: ChinaAddressV4Data,
        showAddress: false,
        summaryAddr:'请填写详细地址',
        aname:'',
        aphone:'',
        aid:''
      }
    },
    mounted:function(){
      if(this.$route.query.a_id){
        this.aid=this.$route.query.a_id;
        this.aname=this.$route.query.a_username;
        this.aphone=this.$route.query.a_phone;
        if(sessionStorage.getItem('detailAddr_lng')){
          $('.detail_addr').attr('data-lng',sessionStorage.getItem('detailAddr_lng'));
          $('.detail_addr').attr('data-lat',sessionStorage.getItem('detailAddr_lat'));
          this.summaryAddr=sessionStorage.getItem('detailAddr');
        }else{
          this.summaryAddr=this.$route.query.detail;
          $('.detail_addr').attr('data-lng',this.$route.query.lng);
          $('.detail_addr').attr('data-lat',this.$route.query.lat);
        }
        if(sessionStorage.getItem('detailAddress')){
          this.value=sessionStorage.getItem('detailAddress').split(',');
        }else{
          this.value.push(this.$route.query.province);
          this.value.push(this.$route.query.city);
          this.value.push(this.$route.query.dist);
        }
        if(this.$route.query.moren==1){
          this.active=true;
        }
      }else{
        if(sessionStorage.getItem('detailAddress')){
          this.value=sessionStorage.getItem('detailAddress').split(',');
        }
        if(sessionStorage.getItem('detailAddr_lng')){
          $('.detail_addr').attr('data-lng',sessionStorage.getItem('detailAddr_lng'));
          $('.detail_addr').attr('data-lat',sessionStorage.getItem('detailAddr_lat'));
          this.summaryAddr=sessionStorage.getItem('detailAddr');
        }
      }
    },
    methods:{
      addAddr:function(){
        var mr;
        if($('#moren').hasClass('active')){
          mr=1;
        }else{
          mr=0;
        }
        var path='https://two.zhiqunale.cn/Paper/PersonalCenter/address_adding';
        var param={
          c_id:this.$store.state.loginUser.uid,
          user_state:1,
          device_number:'pc_online',
          a_username:this.aname,
          a_phone:this.aphone,
          a_province:$.trim($('.addr').text()).split(' ')[0],
          a_city:$.trim($('.addr').text()).split(' ')[1],
          a_dist:$.trim($('.addr').text()).split(' ')[2],
          a_detail:this.summaryAddr,
          a_is_default:mr,
          a_lng:$('.detail_addr').attr('data-lng'),
          a_lat:$('.detail_addr').attr('data-lat')
        }
        if(this.$route.query.a_id){
          param.a_id=this.$route.query.a_id;
          path='https://two.zhiqunale.cn/Paper/PersonalCenter/modify_address';
        }
        this.post(param,path,this.succsub);
      },
      succsub:function(_data){
        if(_data.status_code=='10000'){
          this.$router.push({path:'/myAddress'});
        }else{
          alert(_data.msg);
        }
      },
      detailAddr:function(){
        if(this.value.length!=0){
          sessionStorage.setItem('detailAddress',$.trim($('.addr').text()).split(' '));
          this.$router.push({path:'/detailAddr'});
        }else{
          alert('请选择省市区');
        }
      },
      changeActive:function(){
        this.active=!this.active;
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
  .submit{
    font-size: 36px;
  }
  .submit a{
    display:block;
  }
  .addAddress_form .detail_addr{
    height: auto;
    /*text-align: right;*/
    padding-right: 50px;
    width: 64%;
  }
</style>
