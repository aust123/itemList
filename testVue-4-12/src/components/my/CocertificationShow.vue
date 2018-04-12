<template>
	<div>
		<header class="header">
			<router-link to="/my" class="back">
        <img src="../../assets/img/title_jiantou.png" />
      </router-link>
      <span class="title">企业认证</span>
		</header>
		<div class="editMsg">
      <div class="content">
        <div class="user-info">
          <div>
            <span>企业名称</span>
            <input readonly type="text" v-model="coname"/>
          </div>
          <div>
            <span>企业地址</span>
            <input readonly type="text" v-model="address"/>
          </div>
          <div>
            <span>详细地址</span>
            <input readonly type="text" v-model="detailAddr"/>
          </div>
          <div>
            <span>企业电话</span>
            <input readonly type="tel" v-model="cotel"/>
          </div>
        </div>
        <div class="uploadImg">
          <!--企业认证是---纸厂时提示必填-->
          <p>企业资质（营业执照）</p>
          <div>
            <div class="detail-upload">
              <a class="storeIcon"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="state">{{state}}</p>
  </div>
</template>

<script>
	export default {
		data:function() {
			return{
				coname: '',
        address: '',
        detailAddr:'',
        cotel: '',
        state:''
			}
		},
    mounted:function(){
      if(this.$route.query.state==1){
        this.state='已认证';
      }else{
        this.state='认证中';
      }
      var epath='https://two.zhiqunale.cn/paper/user/get_company_authentication_info';
      var eparam={
        uid:this.$store.state.loginUser.uid,
        device_number:'pc_online',
        type:this.$route.query.identity
      }
      this.post(eparam,epath,this.editbefore);
      setInterval(function(){
        $('.state').fadeOut();
      },1000);
    },
		methods: {
      editbefore:function(_data){
        if(_data.status_code=='10000'){
          this.coname=_data.data.cc_company_name;
          this.cotel=_data.data.cc_company_phone;
          this.address=_data.data.cc_company_province+' '+_data.data.cc_company_city+' '+_data.data.cc_company_dist;
          this.detailAddr=_data.data.cc_company_detail_address;
          $('.storeIcon').css('background-image','url(https://two.zhiqunale.cn/'+_data.data.cc_company_zizhi_photo+')');
        }
      }
		}
	}
</script>

<style scoped="scoped">
  .state{
    width: 100px;
    background: #00d3af;
    font-size: 30px;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    padding: 15px 28px;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
  }
  .detail-upload a{
    width: 212px;
    height: 212px;
  }

	.header {
		height: 88px;
		line-height: 88px;
		width: 100%;
		background-color: #00d3af;
		position: relative;
		color: #fff;
		text-align: center;
	}

	.title {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		font-size: 36px;
	}

	.header a {
		font-size: 30px;
		float: right;
		color: #fff;
		margin-right: 29px;
		position: relative;
		z-index: 66;
	}

	.header .back {
		float: left;
		margin-left: 30px;
		top: 3px;
	}

	.back img {
		width: 20px;
		height: 38px;
	}

	.user-info {
		font-size: 32px;
		color: #333;
		margin-top: 18px;
		background-color: #fff;
	}

	.user-info>div,
	.uploadImg p {
		height: 100px;
		line-height: 100px;
		border-bottom: 1px solid #E0E0E0;
		padding: 0 30px;
		box-sizing: border-box;
	}
	.user-info input{
		margin-left: 50px;
		font-size: 32px;
		color: #999;
		border: none;
		outline: none;
    display: inline-block;
    width: 70%;
    vertical-align:middle;
	}

	.uploadImg {
		margin-top: 14px;
		font-size: 32px;
		color: #333;
		background-color: #fff;
	}

	.uploadImg>div {
		padding: 54px 30px;
		box-sizing: border-box;
	}

</style>
