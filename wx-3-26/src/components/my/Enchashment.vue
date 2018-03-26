<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">提现</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div style="padding: 0;">
				<router-link class="selected_card" to="/Mybankcard">
					<div>
						<img class="bankcard_logo" src="../../assets/img/my_bank_zhaoshang.png" alt="" />
						<div class="bankcard_msg">
							<p>招商银行</p>
							<p>尾号8989储蓄卡</p>
						</div>
						<img class="right_arrow" src="../../assets/img/jiantou_right.png" />
					</div>
				</router-link>
			</div>
			<div class="cash_sum">
				<p>提现金额</p>
				<p><b>￥</b><input type="text" id="money_count" v-model="getmoney" /></p>
				<p>可用余额&nbsp;<span>10000</span>元</p>
			</div>
		</div>
		<p class="cash_rule"><img src="../../assets/img/sqreturn_tishi.png" />
			<a href="###">《纸去哪了》平台提现规则</a>
		</p>
		
		<p class="submit">
			<button @click="inputPwd">确认提现</button>
		</p>
		<!--<v-inputpwd v-bind:cashdata='cashdata' v-show='show'></v-inputpwd>-->

		<!--弹出框-->
		<div class="background" v-show="show"></div>
		<div class="popupBox" v-show="show">
			<div id="resubmit_box">
				<div class="password_box">
					<h3>请输入支付密码</h3>
					<div class="input_box">
						<input type="password" value="" maxlength="6" v-model="pwd" />
					</div>
				</div>
				<a href="javascript:void(0);" id="sure_btn">确&nbsp;&nbsp;定</a>
			</div>
		</div>

	</div>
</template>

<script>
	/*	import inputpwd from '@/components/inputpwd';*/
	//import api from '../fetch/api';
	export default {
		data() {
			return {
				show: false,
				bankList: [],
				balance: this.$route.query.mo,
				bankcard_id: '',
				getmoney: '',
				pwd: '',
				uid: ""
			}
		},
		mounted() {
			/*if(sessionStorage.uid){
				this.uid=sessionStorage.uid;
			}
			let data = {
				c_id: this.uid,
				user_state: 1,
				device_number: 'pc_online'
			};*/
			/*获取银行卡信息*/
			/*api.GetBankList(data).then(res => {
				console.log(res)
			}, err => {
				console.log(err.data);
				if(err.data.status_code == 10000) {
					this.bankList = err.data.data;
				} else {
					alert('暂无银行卡')
				}
			}).catch(err => {
				console.log(err)
			});*/

		},
		methods: {
			Back() {
				window.history.back();
			},
			inputPwd() {
				this.show = true;
			}
			/*,
						sureToCash() {
							let data = {
								c_id: this.uid,
								user_state: 1,
								device_number: 'pc_online',
								payment_password: this.pwd,
								wc_money: this.getmoney,
								wc_bankcard_id: this.bankList[0].bankcard_id
							};
							api.ToApplyCash(data).then(res => {
								console.log(res)
							}, err => {
								console.log(err.data);
								if(err.data.status_code == 10000) {
									this.show=false;
									alert(err.data.msg);
								}else if(err.data.status_code == 10004){
									alert(err.data.msg);
									this.show=false;
								}
							}).catch(err => {
								console.log(err)
							});
						}*/

		}
	}
</script>

<style scoped="scoped">	
	
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
	
	.popupBox,
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 22;
	}
	
	.background {
		background-color: #000;
		filter: alpha(opacity=50);
		-moz-opacity: 0.5;
		-khtml-opacity: 0.5;
		opacity: 0.5;
	}
	
	div.password_box {
		margin-top:40px;
		margin-bottom: 52px;
	}
	
	div.password_box>h3 {
		font-size: 34px;
		color: #333;
		margin-bottom: 60px;
		font-weight: normal;
	}
	
	div.input_box {
		overflow: hidden;
		text-align: center;
	}
	
	div.input_box input {
		outline: none;
		border: 1px solid #c2c2c2;
		width: 450px;
		height: 90px;
		text-align: center;
		font-size: 34px;
	}
	
	.popupBox a {
		color: #fff;
		font-size: 36px;
		display: inline-block;
		height: 71px;
		line-height: 71px;
		border-radius: 34px;
		text-align: center;
	}
	
	#resubmit_box {
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		z-index: 22;
		border-radius: 10px;
		color: #333;
		width: 536px;
		height: 380px;
		text-align: center;
	}
	/*右上角关闭按钮*/
	
	a#sure_btn {
		width: 382px;
		background-color: #ff5000;
	}
	
	.cash_content {
		margin-top: 18px;
	}
	
	.selected_card {
		display: block;
		width: 100%;
		padding: 0 30px;
		border-bottom: 1px solid #E0E0E0;
		box-sizing: border-box;
		height: 146px;
		background-color: #fff;
	}
	
	.bankcard_logo {
		width: 66px;
		height: 66px;
		display: inline-block;
		vertical-align: 10px;
	}
	
	.bankcard_msg {
		display: inline-block;
		font-size: 32px;
		margin-left: 20px;
	}
	
	.bankcard_msg p:nth-of-type(1) {
		color: #333;
		margin-bottom: 24px;
		margin-top: 14px;
	}
	
	.bankcard_msg p:nth-of-type(2) {
		color: #666;
	}
	
	.right_arrow {
		float: right;
		width: 17px;
		height: 31px;
		position: relative;
		top: 55px;
	}
	
	.cash_sum {
		padding: 0 30px;
		box-sizing: border-box;
		background-color: #fff;
		margin-top: 18px;
		font-size: 32px;
	}
	
	.cash_sum p:nth-of-type(1) {
		margin-bottom: 78px;
		padding-top: 40px;
		color: #333;
	}
	
	.cash_sum p:nth-of-type(2) {
		position: relative;
	}
	
	.cash_sum b {
		font-weight: normal;
		font-size: 60px;
		position: relative;
		color: #333;
		/* left: -10px;*/
	}
	
	.cash_sum input {
		border: none;
		outline: none;
		padding-left: 30px;
		box-sizing: border-box;
		font-size: 65px;
		width: 640px;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	
	.cash_sum p:nth-of-type(2):after {
		content: "";
		display: inline-block;
		width: 630px;
		height: 1px;
		background-color: #e0e0e0;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	
	.cash_sum p:nth-of-type(3) {
		color: #999;
		margin-top: 30px;
		padding-bottom: 35px;
	}
	
	.cash_rule {
		margin-top: 18px;
		padding: 0 30px;
	}
	
	.cash_rule img {
		width: 28px;
		height: 28px;
		margin-right: 12px;
	}
	
	.cash_rule a {
		font-size: 24px;
		color: #999;
	}
	
	.submit {
		margin-top: 122px;
		text-align: center;
	}
	
	.submit button {
		text-align: center;
		height: 98px;
		line-height: 98px;
		background: #00D3AF;
		width: 700px;
		color: #FFF;
		font-size: 36px;
		border: 0;
		border-radius: 8px;
	}
</style>