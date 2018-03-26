<template>
	<div>

		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">找回密码</span>
		</header>
		<div class="content">			
			<div class="input-box">
				<p><input type="tel" maxlength="11" id="phone_num" name="" placeholder="请输入手机号" value="" /></p>
				<p><input type="number" maxlength="6" id="code" name="" placeholder="请输入验证码" value="" /><span class="get_code">获取验证码</span></p>				
				<p><input type="password" id="pwd" placeholder="请输入新密码" /></p>
				<p><input type="password" id="pwd-sure" placeholder="请确认新密码" /></p>
			</div>
			<div class="submit-box">
				<p class="submit">
					<button>确定</button>
				</p>				
			</div>
		</div>
	</div>
</template>

<script>
	//import api from '../fetch/api';
	export default {

		methods: {
			Back() {
				window.history.back();
			}
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
	.input-box {
		margin-top: 30px;
	}
	
	.input-box p {
		padding: 0 30px;
	}
	
	.input-box p {
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
	
	#pwd ,#pwd-sure{
		background: url(../../assets/img/login_reg_mima.png) no-repeat;
		background-size: 39px 41px;
		background-position: 34px center;
		background-color: #fff;
	}
	#code{
	background: url(../../assets/img/login_reg_yanzheng.png) no-repeat;	
	background-size: 36px 40px;
		background-position: 34px center;
		background-color: #fff;
		width: 422px;
	}
	input::-webkit-input-placeholder {
		color: #999;
	}
	.get_code {
		display: inline-block;
		font-size: 30px;
		color: #ff5000;		
		border: 2px solid #ff5000;
		width: 218px;
		height: 96px;
		line-height: 96px;
		text-align: center;
		border-radius: 10px;
		margin-left:46px ;
	}
	
	.submit {
		margin-top: 120px;
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
	.register-forget{
		margin-top: 22px;
		text-align: center;
	}
	.register-forget a{
		font-size: 28px;
		color: #FF5000;
	}
	.forget::after{
		content: "";
		display: inline-block;
		height:30px;
		width: 1px;
		background-color: #FF5000;
		margin-left: 28px;
		margin-right: 28px;
		position: relative;
		top: 4px;
	}
</style>