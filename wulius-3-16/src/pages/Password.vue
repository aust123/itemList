<template>
	<div>
		<div class="certification">
			<div class="back tl">
				<img src="../assets/img/title_jiantou.png" @click="Back" /> 设置密码
			</div>
			<div class="certiContent">
				<div class="certiMsg">
					<div>
						<span>手机号</span>
						<input type="tel" v-model="phone" maxlength="11" pattern="^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$" placeholder="请输入手机号" />
					</div>
					<div>
						<span>验证码</span>
						<input v-model="code" maxlength="6" style="width: 40%;margin-right:0.6rem" type="number" pattern="[0-9]*" placeholder="请填写验证码" />
						<!--<button style="width: 30%;" class="get_code" @click="getCode">获取验证码</button>-->
						<yd-sendcode slot="right" v-model="start1" style="width: 26%;height: 1.52rem;float: right;margin-top: -0.3rem;font-size: 0.64rem;" class="get_code" init-str='获取验证码' reset-str='重新获取' run-str="{%s}秒后获取" @click.native="sendCode1" type="warning"></yd-sendcode>
					</div>
					<div>
						<span>支付密码</span>
						<input type="password" v-model="password" pattern="[0-9]*" maxlength="6" placeholder="请输入支付密码（6位数字）" />
					</div>

					<div>
						<span>确认支付密码</span>
						<b>
                    <input type="password" v-model="repeatPassword" pattern="[0-9]*" maxlength="6" placeholder="请确认支付密码（6位数字）"/>
                </b>
					</div>
				</div>
			</div>
			<div class="submit set_pwd">
				<button @click="submitSet">确认</button>
			</div>
		</div>
	</div>
</template>

<script>
	import api from '../fetch/api';
	export default {
		data() {
			return {
				phone: '',
				code: '',
				password: '',
				repeatPassword: '',
				codeId: '',
				start1: false,
				uid:''
			}
		},
		mounted(){
			if(sessionStorage.uid){
				this.uid=sessionStorage.uid;
			}
		},
		methods: {
			Back() {
				window.history.back();
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
				}else{
					alert("请输入手机号")
				}
			},			
			submitSet() {
				let data = {
					phone: this.phone,
					code: this.code,
					code_id: this.codeId,
					pay_password: this.password,
					repeat_password: this.repeatPassword,
					c_id: this.uid,
					user_state: 1,
					device_number: 'pc_online'
				};
				api.SetPassWord(data).then(res => {
					console.log(res)
				}, err => {
					console.log(err.data);
					if(err.data.status_code == 10000) {
						alert(err.data.msg);
					} else {
						alert(err.data.msg)
					}
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
	.set_pwd {
		margin-top: 1.2rem !important;
		text-align: center;
	}
	
	.set_pwd button {
		width: 90% !important;
		border-radius: 0.15rem;
	}
</style>