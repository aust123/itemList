<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">资金管理</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div class="balance">
				<p>账户余额&nbsp;（元）</p>
				<p>20000</p>
				<p>提现中（元）：10000</p>
			</div>
			<div class="cash_option">				
				<a href="">提现 <img src="../../assets/img/jiantou_right.png"/></a>
				<a href="">银行卡管理 <img src="../../assets/img/jiantou_right.png"/></a>			
			</div>
		</div>
	</div>
</template>

<script>
	
	
	export default {
		data() {
			return {
				
			}
		},methods: {
			Back() {
				window.history.back();
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
		top: 10px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
</style>