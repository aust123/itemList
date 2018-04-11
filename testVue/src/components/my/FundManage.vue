<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">资金管理</span>
			<router-link to="/Cashdetail">提现明细</router-link>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div class="balance">
				<p>账户余额&nbsp;（元）</p>
				<p>20000</p>
				<p>提现中（元）：10000</p>
			</div>
			<div class="point">
				<img src="../../assets/img/my_moneymanage_shouyi.png"/><span>推广收益：</span><b>98</b><i>积分</i><button>兑换</button>
			</div>
			<div class="cash_option">
				<router-link to="/Enchashment">提现 <img src="../../assets/img/jiantou_right.png" /></router-link>
				<router-link to="/Mybankcard">银行卡管理<img src="../../assets/img/jiantou_right.png" /></router-link>
			</div>
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
		top: 3px;
	}
	.header .right{
		float: right;
		font-size:26px ;
	}
	.back img {
		width: 20px;
		height: 38px;
	}

	.cash_content {
		width: 100%;
	}

	.point{
		padding: 0 30px;
		box-sizing: border-box;
		color: #333;
		height: 126px;
		line-height: 126px;
		background-color: #fff;
	}
	.point img{
		width: 54px;
		height: 58px;
		margin-right: 20px;
	}
	.point span{
		font-size: 34px;
		margin-right: 26px;
	}
	.point b{
		font-size: 50px;
		margin-right: 20px;
		color: #FF5000;
		font-weight: normal;
	}
	.point i{
		font-style: normal;
		font-size: 28px;
	}
	.point button{
		width: 156px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-style: normal;
		font-size: 30px;
		color: #FF5000;
		border-radius: 8px;
		float: right;
		background-color: transparent;
		border: 2px solid #FF5000;
		margin-top: 32px;
	}

	.balance {
		background-color: #00D3AF;
		color: #fff;
		margin-top: 0;
		padding: 0 30px;
		box-sizing: border-box;
	}

	.balance p:nth-of-type(1) {
		font-size: 30px;
		padding-top: 62px;
		margin-bottom: 65px;
	}

	.balance p:nth-of-type(2) {
		font-size: 80px;
		margin-bottom: 42px;
	}

	.balance p:nth-of-type(3) {
		font-size: 26px;
		padding-bottom: 22px;
	}

	.cash_option {
		padding: 0;
		margin-top: 18px;
		background-color: #fff;
	}

	.cash_option a {
		display: block;
		color: #333;
		font-size: 32px;
		height: 100px;
		line-height: 100px;
		padding: 0 30px;
		border-bottom: 1px solid #E0E0E0;
	}

	.cash_option a img {
		float: right;
		width: 17px;
		height: 31px;
		margin-top: 30px;
		margin-right: 15px;
	}
</style>
