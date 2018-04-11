<template>
	<div class="my">
		<div class="my-content">
			<header>
				<router-link to='/Storeinfo' id="manage">管理店铺资料</router-link>
				<!--<a href="javascript:void(0);" id="manage">管理店铺资料</a>-->
				<div @click="ToEdit">
					<img v-if="this.userMsg.c_headurl" id="touxiang" :src="'https://two.zhiqunale.cn/'+this.userMsg.c_headurl" />
					<img id="touxiang" v-else src="../../assets/img/my_touxiang.png" />
					<p class="my-name">{{this.userMsg.c_username}}</p>
					<p class="my-identity">
						<span v-if="this.userMsg.c_main_business==1">
              <img src="../../assets/img/my_icon_dabaozhan.png"/>打包站
            </span>
						<span v-else-if="this.userMsg.c_main_business==2">
              <img src="../../assets/img/my_icon_dabaozhan.png"/>贸易公司
            </span>
						<span v-else-if="this.userMsg.c_main_business==3">
              <img src="../../assets/img/my_icon_dabaozhan.png"/>纸厂
            </span>
						<span v-else>
              <img src="../../assets/img/my_icon_dabaozhan.png"/>未设置
            </span>
						<span v-if="this.userMsg.c_sm_province">
              <img class="address-img" src="../../assets/img/my_icon_zuobiao.png"/>
              {{this.userMsg.c_sm_province}}{{this.userMsg.c_sm_city}}
            </span>
						<span v-else>
              <img class="address-img" src="../../assets/img/my_icon_zuobiao.png"/>
              未设置
            </span>
					</p>
				</div>
			</header>
			<div class="my-manage">
				<router-link to="/Mybankcard"><img src="../../assets/img/my_icon_card.png" />银行卡</router-link>
				<router-link to="/Certification"><img src="../../assets/img/my_icon_renzheng.png" />实名认证</router-link>
			</div>
			<div class="my-item-list">
				<router-link to='/FundManage'>资金管理</router-link>
				<router-link to='/Password'>支付密码</router-link>
				<a @click="certificate" class="certificates">企业认证</a>
				<router-link to='/Refund'>退款处理</router-link>
				<router-link to='/OrderMemo'>订单备忘录</router-link>
				<router-link to='/myAddress'>地址管理</router-link>
				<router-link to='/Myteam'>我的团队</router-link>
				<router-link to='/Share'>我的分享码</router-link>
				<a href="javascript:void(0);">客服电话</a>
				<a href="javascript:void(0);">意见反馈</a>
				<router-link to='/About'>关于纸去哪了</router-link>
			</div>
			<p class="login-out">
				<span v-if="islogin" class="login-out-box" @click="closelogin">退出登录</span>
				<span v-else class="login-out-box" @click="Tologin">马上登录</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				islogin: this.$store.state.hasLogin,
				userMsg: {}
			}
		},
		mounted: function() {
			if(this.$store.state.hasLogin) {
				var path = 'https://two.zhiqunale.cn/Paper/PersonalCenter/user_information';
				var params = {
					c_id: this.$store.state.loginUser.uid,
					user_state: 2,
					device_number: 'pc_online'
				}
				this.post(params, path, this.getMymsg);
			}
		},
		methods: {
			certificate: function() {
				this.$router.push({
					path: '/Cocertification',
					query: {
						dbz: $('.certificates').attr('data-dbz'),
						mygs: $('.certificates').attr('data-mygs'),
						zc: $('.certificates').attr('data-zc')
					}
				});
			},
			getMymsg: function(_data) {
				if(_data.status_code == '10000') {
					this.userMsg = (_data.data);
					$('.certificates').attr('data-dbz', _data.data.c_pack_state);
					$('.certificates').attr('data-mygs', _data.data.c_company_state);
					$('.certificates').attr('data-zc', _data.data.c_paper_state);
				}
			},
			ToEdit: function() {
				this.$router.push({
					name: '编辑个人资料'
				})
			},
			Tologin: function() {
				this.$router.push({
					path: '/Login',
					query: {
						referrer: this.$route.fullPath
					}
				})
			},
			closelogin: function() {
				this.$store.commit('LOGOUT');
				window.location.reload();
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.my {
		width: 100%;
		overflow-x: hidden;
		height: 100%;
		overflow-y: scroll;
	}
	
	.my-content {
		padding-bottom: 280px;
	}
	
	header {
		width: 100%;
		background-color: #00D3AF;
		color: #fff;
		text-align: center;
		height: 380px;
	}
	
	#manage {
		padding-top: 30px;
		display: block;
		text-align: right;
		color: #fff;
		font-size: 26px;
		padding-right: 30px;
		box-sizing: border-box;
	}
	
	#touxiang {
		width: 142px;
		height: 142px;
		border-radius: 50%;
	}
	
	.my-name {
		font-size: 32px;
		margin-top: 20px;
		margin-bottom: 30px;
	}
	
	.my-identity span {
		font-size: 28px;
	}
	
	.my-identity span:nth-of-type(1) {
		margin-right: 64px;
	}
	
	.my-identity img {
		margin-right: 16px;
	}
	
	.my-identity img:nth-of-type(1) {
		width: 35px;
		height: 34px;
	}
	
	.my-identity img.address-img {
		width: 24px;
		height: 34px;
	}
	/*我的银行卡和实名认证*/
	
	.my-manage {
		background-color: #fff;
		height: 92px;
		flex-grow: 1;
		line-height: 92px;
	}
	
	.my-manage a:nth-of-type(1) {
		border-right: 1px solid #E0E0E0;
	}
	
	.my-manage a {
		display: inline-block;
		width: 49%;
		color: #333;
		font-size: 34px;
		text-align: center;
	}
	
	.my-manage img {
		margin-right: 28px;
		width: 50px;
		vertical-align: -5px;
	}
	
	.my-manage img:nth-of-type(1) {
		height: 38px;
	}
	
	.my-manage img:nth-of-type(2) {
		height: 36px;
	}
	
	.my-item-list {
		margin-top: 16px;
		background-color: #FFFFFF;
	}
	
	.my-item-list a {
		color: #333;
		font-size: 34px;
		display: block;
		box-sizing: border-box;
		padding-left: 46px;
		background: url(../../assets/img/jiantou_right.png) no-repeat;
		background-position: 680px center;
		background-size: 17px 31px;
		height: 108px;
		line-height: 108px;
		border-bottom: 1px solid #E0E0E0;
	}
	
	.login-out {
		margin-top: 78px;
		color: #FF5000;
		font-size: 36px;
		text-align: center;
	}
	
	.login-out span {
		display: inline-block;
		width: 614px;
		height: 80px;
		line-height: 80px;
		text-align: center;
		border-radius: 10px;
		border: 2px solid #FF5000;
	}
</style>