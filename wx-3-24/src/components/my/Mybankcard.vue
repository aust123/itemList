<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">我的银行卡</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div>
				<a class="selected_card" href="javascript:void(0);">
					<img class="bankcard_logo" src="../../assets/img/my_bank_zhaoshang.png" alt="" />
					<div class="bankcard_msg">
						<p>招商银行</p>
						<p>尾号9999储蓄卡</p>
					</div>
					<img class="right_delete" src="../../assets/img/my_bank_cancel.png" />
				</a>
			</div>
			<div class="add_bankcard">
				<!--<a>添加银行卡</a>-->
				<router-link to='/AddBackcard'>添加银行卡</router-link>
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
		mounted() {

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
	
	.header .right {
		float: right;
		font-size: 26px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
	
	.cash_content {
		margin-top: 18px;
	}
	
	.selected_card {
		display: block;
		width: 100%;
		padding: 0 30px;
		border-bottom: 1px solid #E0E0E0;
		box-sizing: border-box;
		height: 146px;
		background-color: #fff;
	}
	
	.bankcard_logo {
		width: 66px;
		height: 66px;
		display: inline-block;
		vertical-align: 10px;
	}
	
	.bankcard_msg {
		display: inline-block;
		font-size: 32px;
		margin-left: 20px;
	}
	
	.bankcard_msg p:nth-of-type(1) {
		color: #333;
		margin-bottom: 24px;
		margin-top: 14px;
	}
	
	.bankcard_msg p:nth-of-type(2) {
		color: #666;
	}
	
	.right_delete {
		float: right;
		width: 27px;
		height: 27px;
		position: relative;
		top: 55px;
	}
	
	.add_bankcard {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	
	.add_bankcard a {
		display: block;
		width: 100%;
		color: #fff;
		background-color: #00D3AF;
		height: 98px;
		line-height: 98px;
		text-align: center;
		font-size: 36px;
	}
</style>