<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">添加银行卡</span>
		</header>
		<p class="tips">请绑定持卡人本人的银行卡</p>
		<!--内容区域-->
		<div class="cash_content" id="add_bankcard_content">

			<div class="card_owner"><span>持卡人</span><input v-model="card_user" type="text" id="card_user" placeholder="请输入持卡人姓名" /></div>
			<div>
				<p><span>卡号</span><input v-model="card_num" style="margin-left: 0.7rem;" type="text" id="backcard_num" value="" placeholder="请输入卡号" /></p>
				<p><span>身份证</span><input v-model="id_card" style="margin-left: 0.7rem;" type="text" id="backcard_num" value="" placeholder="请输身份证" /></p>
				<p>
					<router-link to='/My/BankDeposit'><span>开户行</span><input v-model="bank_name" type="text" id="bank_name" unselectable disabled placeholder="请选择开户行" /><img class="more_bank" src="img/jiantou_right.png" /></router-link>
				</p>
			</div>
			<div>
				<p><span>手机号</span><input v-model="phone" type="text" id="phone_num" value="" placeholder="请输入手机号" /></p>
				<p><span>验证码</span><input v-model="code_num" type="text" id="code_num" value="" placeholder="请收入验证码" />
					<yd-sendcode slot="right" v-model="start1" style="width: 26%;height: 1.52rem;font-size: 0.64rem;float: right;margin-top: -0.3rem;" class="get_code" init-str='获取验证码' reset-str='重新获取' run-str="{%s}秒后获取" @click.native="sendCode1" type="warning"></yd-sendcode>
					<!--<b id="get_code" @click="getCode">获取验证码</b>-->
				</p>
			</div>
		</div>
		<p class="release_box" id="cash_submit"><span class="release_btn" @click="sure">确认</span></p>
	</div>
</template>

<script>
	import api from '../fetch/api';
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
				uid:''
			}
		},
		mounted() {
			if(this.$route.params.bnna) {
				document.querySelector('#bank_name').value = this.$route.params.bnna;
			}
			if(sessionStorage.uid){
				this.uid=sessionStorage.uid;
			}
			console.log(this.$route.params);
			console.log(this.back_name);
			console.log(this.bankcard_imgurl)
			console.log(this.bank_code)
		},
		methods: {
			sure() {
				let data = {
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
				})
			},
			sendCode1() {
				if(this.phone) {
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

			}

		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
</style>