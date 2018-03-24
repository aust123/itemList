<template>
	<div>

		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">实名认证</span>
		</header>
		<div class="content">
			<div class="user-info">
				<div>
					<span>姓名</span>
					<input type="text" v-model="uname"  placeholder="请填写您的姓名" />
				</div>
				<div>
					<span>身份证</span>
					<input type="text" v-model="idnum"  placeholder="请输入您的身份证号码" />
				</div>
			</div>
			<div class="uploadImg">
				<p>手持身份证照片</p>
				<div>
					<div class="upload">
						<!--驾驶证-->
						<input accept="image/*" class="jia" type="file"  />
						<img  src='../../assets/img/my_renzheng_front.png'>
					</div>
					<div class="upload">
						<!--行驶证-->
						<input accept="image/*" class="xing" type="file" />
						<img  src='../../assets/img/my_renzheng_back.png'>
					</div>
				</div>
			</div>
		</div>
		<div class="submit">
			<button>提交</button>
		</div>
		<p class="tip">认证代表同意<span>《纸去哪了》平台用户协议</span>，提交认证成功后我们讲进行人工审核，预计2个工作日内审核完成，请您耐性等待！</p>
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
		top: 10px;
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
	.user-info div,.uploadImg p {
		height: 100px;
		line-height: 100px;
		border-bottom: 1px solid #E0E0E0;
		padding: 0 30px;
		box-sizing: border-box;
	}	
	.user-info input {
		margin-left: 50px;
		font-size: 32px;
		color: #999;
		border: none;
		outline: none;
	}
	
	.submit {
		margin-top: 104px;
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
		letter-spacing: 25px;
		border-radius: 8px;
	}
	
	input::-webkit-input-placeholder {
		color: #999;
	}	
	
	.uploadImg{
		margin-top: 14px;
		font-size: 32px;
		color: #333;
		background-color: #fff;
		
	}
	.uploadImg>div{
		padding: 56px 30px;
		box-sizing: border-box;
				
	}
	.upload{
		width: 212px;
		height: 212px;		
		display: inline-block;
		position: relative;
	}
	.upload:nth-of-type(1){
		margin-right: 40px;
	}
	.upload img{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.upload input{
		display: inline-block;
		width: 100%;
		height: 100%;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.tip {
		margin-top: 18px;
		font-size: 28px;
		color: #999;
		padding-bottom: 236px;
		text-align: left;
		padding-left:30px;
		padding-right: 30px;
	}
	.tip span{
		color: #FF5000;
	}
</style>