<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">添加银行卡</span>
		</header>
		<p class="tips">请绑定持卡人本人的银行卡</p>
		<!--内容区域-->
		<div class="cash_content" id="add_bankcard_content">

			<div class="card_owner">
				<p><span>持卡人</span><input v-model="card_user" type="text" placeholder="请输入持卡人姓名" /></p>
			</div>
			<div>
				<p><span>卡号</span><input v-model="card_num" style="margin-left: 0.4rem;" type="text" id="backcard_num" value="" placeholder="请输入卡号" /></p>
				<p>					
					<router-link to='/BankDeposit'><span>开户行</span><input v-model="bank_name" type="text" id="bank_name" unselectable disabled placeholder="请选择开户行" /><img class="more_bank" src="../../assets/img/jiantou_right.png" /></router-link>
				</p>
			</div>
			<div>
				<p><span>手机号</span><input v-model="phone" type="text" id="phone_num" value="" placeholder="请输入手机号" /></p>
				<p><span>验证码</span><input v-model="code_num" type="text" id="code_num" value="" placeholder="请收入验证码" />
					<!--<yd-sendcode slot="right" v-model="start1" style="width: 26%;height: 1.52rem;font-size: 0.64rem;float: right;margin-top: -0.3rem;" class="get_code" init-str='获取验证码' reset-str='重新获取' run-str="{%s}秒后获取" @click.native="sendCode1" type="warning"></yd-sendcode>-->
					<b class="get_code">获取验证码</b>
				</p>
			</div>
		</div>
		<div class="submit">
			<button>确认</button>
		</div>
	</div>
</template>

<script>
	//import api from '../fetch/api';
	export default {
		data() {
			return {
				card_user: '',
				card_num: '',
				bank_name: '',
				phone: '',
				code_num: '',
				back_name: this.$route.params.bnna,
				bankcard_imgurl: this.$route.params.bnim,
				bank_code: this.$route.params.bnid,
				codeId: '',
				id_card: '',
				start1: false,
				uid: ''
			}
		},
		mounted() {
			if(this.$route.params.bnna) {
				document.querySelector('#bank_name').value = this.$route.params.bnna;
			}
			/*if(sessionStorage.uid){
				this.uid=sessionStorage.uid;
			}*/
			console.log(this.$route.params);
			console.log(this.back_name);
			console.log(this.bankcard_imgurl)
			console.log(this.bank_code)
		},
		methods: {
			Back() {
				window.history.back();
			},
			sure() {
				/*let data = {
					c_id: this.uid,
					user_state: 1,
					device_number: 'pc_online',
					cardholder: this.card_user,
					bankcard_code: this.card_num,
					bank: this.back_name,
					phone: this.phone,
					code: this.code_num,
					code_id: this.codeId,
					bankcard_imgurl: this.bankcard_imgurl,
					id_no: this.id_card,
					is_sign: 1,
					id_type: 1,
					bank_code: this.bank_code
				};
				api.AddBankNameList(data).then(res => {
					console.log(res)
				}, err => {
					console.log(err.data);
					if(err.data.status_code == 10000) {
						alert(err.data.msg)
					} else {
						alert(err.data.msg)
					}
				}).catch(err => {
					console.log(err)
				})*/
			},
			sendCode1() {
				/*if(this.phone) {
					this.$dialog.loading.open('发送中...');
					setTimeout(() => {
						this.start1 = true;
						this.$dialog.loading.close();
						this.$dialog.toast({
							mes: '已发送',
							icon: 'success',
							timeout: 1500
						});

					}, 800);
					let data = {
						phone: this.phone
					}
					api.RegistVerifiCode(data).then(res => {
						console.log(res)
					}, err => {
						console.log(err.data);
						if(err.data.status_code == 10000) {
							this.codeId = err.data.data.code_id;
						}
					}).catch(err => {
						console.log(err)
					})
				} else {
					alert('请输入手机号')
				}
*/
			}

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
		top: 4px;
	}
	
	.header .right {
		float: right;
		font-size: 26px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
	
	.tips {
		font-size: 24px;
		color: #333;
		margin: 20px 0;
		padding: 0 30px;
		box-sizing: border-box;
	}
	
	.cash_content>div {
		box-sizing: border-box;
		background-color: #fff;
		margin-bottom: 16px;
	}
	
	#add_bankcard_content>div span {
		font-size: 32px;
		color: #666;
		margin-right: 60px;
	}
	
	#add_bankcard_content>div input {
		border: none;
		outline: none;
		font-size: 32px;
		color: #333;
	}
	
	#add_bankcard_content>div p {
		padding: 0 30px;
		width: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid #E0E0E0;
		height: 104px;
		line-height: 100px;
		position: relative;
	}
	
	input::-webkit-input-placeholder {
		color: #999;
	}
	
	.submit {
		margin-top: 120px;
		text-align: center;
	}
	
	#bank_name {
		background-color: transparent;
	}
	
	img.more_bank {
		width: 17px;
		height: 31px;
		float: right;
		position: relative;
		top: 30px;
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
		letter-spacing: 25px;
		border-radius: 8px;
	}
	
	.get_code {
		display: inline-block;
		font-weight: normal;
		font-size: 28px;
		color: #ff5000;
		background: #fff;
		border: 2px solid #ff5000;
		width: 186px;
		text-align: center;
		height: 68px;
		line-height: 68px;
		border-radius: 10px;
		position: absolute;
		top: 12px;
		right: 25px;
	}
</style>