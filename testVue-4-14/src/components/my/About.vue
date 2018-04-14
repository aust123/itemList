<template>
	<div>

		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">关于纸去哪了</span>
		</header>
		<div class="content">
			<div class="logo-info">
				<p><img src="../../assets/img/my_about_logo.png" /></p>
				<p>“纸去哪了”是由浙江纸元网络科技有限公司自主搭建的复合型废纸回收电商平台。平台包含了“纸去哪了”PC端和“纸去哪了”APP两部分。</p>
			</div>
			<div class="connect">
				<p><span>官网：</span><span>http://www.zhiqunale.com/</span></p>
				<p><span>联系我们：</span><span>0571-88082816</span></p>
			</div>
			<div class="zizhi">
				<p>企业资质：</p>
				<div><img src="../../assets/img/my_zizhi_1.png" /><img src="../../assets/img/my_zizhi_2.png" /><img src="../../assets/img/my_zizhi_3.png" /><img src="../../assets/img/my_zizhi_4.png" /></div>
			</div>
		</div>
		<p class="copyright">Copyright 2017浙江纸元网络科技有限公司版权所有</p>
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
	
	.logo-info{
		color: #333;
		font-size: 28px;
		margin-top: 60px;
		margin-bottom: 60px;
		text-align: center;
	}
	.logo-info img{
		width: 243px;
		height: 269px;
	}
	.logo-info p:nth-of-type(2){
		margin-top: 40px;
		padding: 0 55px;
		text-align: left;
	}
	.connect{
		font-size: 32px;
		color: #333333;
		background-color: #fff;
	}
	.connect p{
		height: 100px;
		line-height: 100px;
		padding: 0 30px;
		box-sizing: border-box;
		border-bottom: 1px solid #E0E0E0;
	}
	.connect p:nth-of-type(1) span:nth-of-type(1){
		margin-right: 86px;		
	}
	.connect p:nth-of-type(2) span:nth-of-type(1){
		margin-right: 24px;		
	}
	.zizhi p{
		font-size: 32px;
		color: #333;
		height: 100px;
		line-height: 100px;
		padding: 0 30px;
		box-sizing: border-box;
	}
	.zizhi img{
		width: 273px;
		height: 182px;
	}
	.zizhi img:nth-of-type(odd){
		margin-right:82px ;
		margin-left: 62px;
	}
	.zizhi img:nth-of-type(1),.zizhi img:nth-of-type(2){
		margin-bottom: 40px;
	}
	.zizhi div{
		background-color: #fff;
		padding-top:34px;
		padding-bottom: 32px;		
	}
	.copyright{
		margin-top: 98px;
		font-size: 26px;
		color: #666;
		padding-bottom: 30px;
		text-align: center;
	}
</style>