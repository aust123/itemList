<template>
	<div>

		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">登录</span>
		</header>
		<div class="content">
			<p class="logo"><img src="../../assets/img/login_logo.png" alt="" /></p>
			<div class="input-box">
				<p><input type="tel" maxlength="11" id="phone_num" name="" placeholder="请输入手机号" value="" /></p>
				<p><input type="password" id="pwd" placeholder="请输入密码" /></p>
			</div>
			<div class="submit-box">
				<p class="submit_p">
					<button @click="login">立即登录</button>
				</p>
				<p class="register-forget">
					<router-link class="forget" to="/Findpwd">忘记密码？</router-link>
					<router-link to="/Register">立即注册</router-link>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			Back: function() {
				window.history.back();
			},
			login: function() {
				if($('#phone_num').val() != '' && $('#pwd').val() != '') {
					var path = 'https://two.zhiqunale.cn/paper/user/new_login';
					var params = {
						phone: $('#phone_num').val(),
						c_password: $('#pwd').val(),
						device_number: 'pc_online'
					}
					this.post(params, path, this.getlogin);
				} else {
					alert('请填写完整登录信息');
				}
			},
			getlogin: function(data) {
				if(data.status_code == '10000') {
					this.$store.commit('LOGIN', data.data);
					this.$router.push({
						path: this.$route.query.referrer
					});
				}
			}
		},
		mounted(){
			console.log(this.$route)
			console.log(this.$router)
			console.log(this.$route.query.referrer)
		}
	}
</script>

<style scoped="scoped">
	.message {
		width: 100%;
		overflow-x: hidden;
		height: 100%;
		overflow-y: scroll;
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
	
	.logo {
		text-align: center;
		margin-top: 100px;
		margin-bottom: 98px;
	}
	
	.logo img {
		width: 243px;
		height: 269px;
	}
	
	.input-box p {
		padding: 0 30px;
	}
	
	.input-box p:nth-of-type(1) {
		margin-bottom: 30px;
	}
	
	.input-box input {
		width: 700px;
		height: 128px;
		outline: none;
		border: none;
		font-size: 34px;
		color: #333;
		border-radius: 8px;
		padding-left: 96px;
		box-sizing: border-box;
	}
	
	#phone_num {
		background: url(../../assets/img/login_reg_phone.png) no-repeat;
		background-size: 28px 41px;
		background-position: 34px center;
		background-color: #fff;
	}
	
	#pwd {
		background: url(../../assets/img/login_reg_mima.png) no-repeat;
		background-size: 39px 41px;
		background-position: 34px center;
		background-color: #fff;
	}
	
	input::-webkit-input-placeholder {
		color: #999;
	}
	
	.submit_p {
		margin-top: 120px;
		text-align: center;
	}
	
	.submit_p button {
		text-align: center;
		height: 98px;
		line-height: 98px;
		background: #00D3AF;
		width: 700px;
		color: #FFF;
		font-size: 36px;
		border: none;
		outline: none;
		border-radius: 8px;
	}
	
	.register-forget {
		margin-top: 22px;
		text-align: center;
	}
	
	.register-forget a {
		font-size: 28px;
		color: #FF5000;
	}
	
	.forget::after {
		content: "";
		display: inline-block;
		height: 30px;
		width: 1px;
		background-color: #FF5000;
		margin-left: 28px;
		margin-right: 28px;
		position: relative;
		top: 4px;
	}
</style>