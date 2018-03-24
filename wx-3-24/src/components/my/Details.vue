<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">明细详情</span>			
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<p><span>流水号：</span>AF88888</p>
			<p><span>交易类型：</span>提现</p>
			<p><span>交易金额：</span>10000元</p>
			<p><span>银行卡：</span>中国银行（6217856100023331538）</p>
			<p><span>交易日期：</span>2018-3-23</p>
			<p><span>余额：</span>20000元</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
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
		top: 4px;
	}
	.header .right{
		float: right;
		font-size:26px ;
	}
	.back img {
		width: 20px;
		height: 38px;
	}
	.cash_content{
		margin-top: 16px;
		font-size: 32px;
		color: #333;
		background-color: #fff;
	}
	.cash_content p{
		border-bottom:1px solid #E0E0E0;
		height: 100px;
		line-height:100px;
		padding: 0 30px;
		box-sizing: border-box;
	}
</style>