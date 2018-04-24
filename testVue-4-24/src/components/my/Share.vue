<template>
	<div>

		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a>
		</header>
		<div class="content">
			<div class="input-box">
				<p><input type="tel" maxlength="11" id="phone_num" name="" placeholder="手机号" value="" /></p>
				<p><input type="password" id='yz' placeholder="验证码" /><span class="get_code">获取验证码</span></p>
			</div>
			<p class="submit">
				<button @click="Show">注册</button>
			</p>
			<p class="download">
				<a href="javascript:void(0);">iPhone端下载</a>
				<a href="javascript:void(0);">Android端下载</a>
			</p>			
		</div>
		<div class="QR_code">
				<p><img src="../../assets/img/sharereg_icon_erwei@2x.png"/></p>
				<p>扫一扫，关注微信公众号</p>
			</div>
		<img id="share-bg" src="../../assets/img/sharereg_bg@2x.png" />
	
		<!--弹出框-->
		<div class="background" v-show="show"></div>
		<div class="popupBox" v-show="show">
			<div id="resubmit_box">	
				<img @click="Close" src="../../assets/img/orderdetail_tk_cancel.png" alt="" />
				<h3>恭喜您注册成功！</h3>					
			</div>
		</div>
	</div>
</template>

<script>
	//import api from '../fetch/api';
	export default {
		data(){
			return{
				show:false
			}
		},
		methods: {
			Show(){
				this.show=true;
			},
			Close(){
				this.show=false;
			},
			Back() {
				window.history.back();
			}
		}
	}
</script>

<style scoped="scoped">
	.popupBox,
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 222;
	}
	
	.background {
		background-color: #000;
		filter: alpha(opacity=50);
		-moz-opacity: 0.5;
		-khtml-opacity: 0.5;
		opacity: 0.5;
	}
	#resubmit_box {
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;		
		border-radius: 10px;
		color: #333;
		width: 536px;
		height: 264px;
		line-height: 264px;
		text-align: center;
	}
	#resubmit_box>h3 {
		font-size: 34px;
		color: #333;		
		font-weight: normal;
	}
	#resubmit_box img{
		width: 28px;
		height: 28px;
		position: absolute;
		top: 30px;
		right: 40px;
	}
	#share-bg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
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
	
	.content {
		margin-top: 368px;
		background-color: #fff;
		position: relative;
		z-index: 66;
		padding-top: 40px;
		box-sizing: border-box;
	}
	
	.input-box p {
		padding: 0 30px;
		text-align: center;
	}
	
	.input-box p:nth-of-type(1) {
		margin-bottom: 32px;
	}
	
	.input-box input {
		width: 588px;
		height: 90px;
		outline: none;
		border: none;
		font-size: 30px;
		color: #999;
		border-radius: 8px;
		padding-left: 96px;
		box-sizing: border-box;
		border: 2px solid #e0e0e0;
	}
	
	#phone_num {
		background: url(../../assets/img/login_reg_phone.png) no-repeat;
		background-size: 28px 41px;
		background-position: 34px center;
		background-color: #fff;
	}
	
	#yz {
		width: 388px;
		background: url(../../assets/img/login_reg_mima.png) no-repeat;
		background-size: 39px 41px;
		background-position: 34px center;
		background-color: #fff;
	}
	
	.get_code {
		display: inline-block;
		font-size: 30px;
		color: #ff5000;
		background-color: #00D3AF;
		width: 188px;
		height: 90px;
		line-height: 90px;
		text-align: center;
		border-radius: 10px;
		margin-left: 22px;
		color: #fff;
	}
	
	input::-webkit-input-placeholder {
		color: #999;
	}
	
	.submit {
		margin-top: 52px;
		text-align: center;
	}
	
	.submit button {
		text-align: center;
		height: 90px;
		line-height: 90px;
		background: #00D3AF;
		width: 588px;
		color: #FFF;
		font-size: 36px;
		border: 0;
		border-radius: 8px;
	}
	.download{
		margin-top: 72px;
		text-align: center;
	}
	.download a{
		display: inline-block;
		width: 294px;
		height: 86px;
		line-height: 86px;
		color: #fff;
		font-size: 28px;		
		border-radius: 10px;
		box-sizing: border-box;
	}
	.download a:nth-of-type(1){
		background: url(../../assets/img/sharereg_icon_iphone@2x.png) no-repeat;
		background-size: 35px 40px;
		background-position:26px center;
		padding-left: 74px;
		background-color: #ccc;
		margin-right:40px;
	}
	.download a:nth-of-type(2){
		background: url(../../assets/img/sharereg_icon_android@2x.png) no-repeat;
		background-size: 39px 45px;
		background-position:18px center;
		padding-left: 70px;
		background-color: #ccc;
	}
	.QR_code{
		padding-top: 30px;
		color: #666;
		font-size: 28px;
		text-align: center;	
		background-color: #fff;	
	}
	.QR_code img{
		width: 208px;
		height: 208px;
	}
	.QR_code p:nth-of-type(2){
		margin-top: 18px;
		padding-bottom: 25px;
		position: relative;
		
	}
</style>