<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">提现</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div style="padding: 0;">
				<router-link class="selected_card" to="/My/Mybankcard">
					<div v-for="item in bankList">
						<img class="bankcard_logo" :src="'https://two.zhiqunale.cn/'+item.bank_imgurl" alt="" />
						<div class="bankcard_msg">
							<p>{{item.bank}}</p>
							<p>尾号{{item.bankcard_code_4}}储蓄卡</p>
						</div>
						<img class="right_arrow" src="../assets/img/jiantou_right.png" />
					</div>
				</router-link>
			</div>
			<div class="cash_sum">
				<p>提现金额</p>
				<p><b>￥</b><input type="text" id="money_count" v-model="getmoney" /></p>
				<p>可用余额&nbsp;<span>{{balance}}</span>元</p>
			</div>
		</div>
		<p class="cash_rule"><img src="../assets/img/sqreturn_tishi.png" />
			<a href="###">《纸去哪了》平台提现规则</a>
		</p>
		<p class="release_box" id="cash_submit"><span class="release_btn" @click="inputPwd">确认提现</span></p>
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
				<a href="javascript:void(0);" id="sure_btn" @click="sureToCash">确&nbsp;&nbsp;定</a>
			</div>
		</div>

	</div>
</template>

<script>
	/*	import inputpwd from '@/components/inputpwd';*/
	import api from '../fetch/api';
	export default {
		data() {
			return {
				show: false,
				bankList: [],
				balance: this.$route.query.mo,
				bankcard_id: '',
				getmoney: '',
				pwd: '',
				uid:""
			}
		},
		mounted() {
			if(sessionStorage.uid){
				this.uid=sessionStorage.uid;
			}
			let data = {
				c_id: this.uid,
				user_state: 1,
				device_number: 'pc_online'
			};
			/*获取银行卡信息*/
			api.GetBankList(data).then(res => {
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
			});

		},
		methods: {
			inputPwd() {
				this.show = true;
			},
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
			}

		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
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
		margin-top: 0.8rem;
		margin-bottom: 1.04rem;
	}
	
	div.password_box>h3 {
		font-size: 0.68rem;
		color: #333;
		margin-bottom: 1.2rem;
		font-weight: normal;
	}
	
	div.input_box {
		overflow: hidden;
		text-align: center;
	}
	
	div.input_box input {
		outline: none;
		border: 1px solid #c2c2c2;
		width: 9rem;
		height: 1.6rem;
		text-align: center;
		font-size: 0.68rem;
	}
	
	.popupBox a {
		color: #fff;
		font-size: 0.72rem;
		display: inline-block;
		height: 1.38rem;
		line-height: 1.38rem;
		border-radius: 0.68rem;
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
		border-radius: 0.2rem;
		color: #333;
		width: 10.72rem;
		height: 7.72rem;
		text-align: center;
	}
	/*右上角关闭按钮*/
	
	a#sure_btn {
		width: 7.66rem;
		background-color: #ff5000;
	}
</style>