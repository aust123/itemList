<template>
	<div>	
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">订单备忘录</span>
		</header>		
		<div class="order-memo">			
			<ul>
				<li>
					<p>货品名称：国废A级纸</p>
					<p>交易方：德润集团</p>
					<p>订单号：<span>AG999999999</span></p>					
					<p>备注：备注国废A级纸</p>
					<p class="option"><a href="javascript:void(0);"><img src="../../assets/img/orderbeiwang_liao.png"/>聊一聊</a><a href="tel:15705131911"><img src="../../assets/img/orderbeiwang_phone.png" alt="" />联系</a></p>
				</li>
				
			</ul>
			
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			Back() {
				window.history.back();
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	.order-memo{
		margin-top: 18px;
		font-size:32px;
		color: #333;
		
	}
	.order-memo li{
		background-color: #fff;
		margin-bottom: 18px;
		padding-top: 32px;
	}
	.order-memo p{
		padding: 0 30px;
		margin-bottom: 18px;
	}
	.order-memo p span{
		color: #FF5000;		
	} 
	
	.order-memo .option{
		border-top: 1px solid #E0E0E0;
		height: 88px;
		display: flex;
		justify-content: space-around;			
		margin-top: 32px;
		margin-bottom: 0;
	}
	.option a{
		display: flex;
		flex-grow: 1;
		text-align: center;
		align-items: center;
		justify-content: center;
		color:#666;
		font-size: 32px;
	}
	.option a:nth-of-type(1){		
		border-right: 1px solid #e0e0e0;
	}
	.option a:nth-of-type(1) img{
		width: 34px;
		height: 34px;
		margin-right: 18px;
	}
	.option a:nth-of-type(2) img{
		width: 35px;
		height: 36px;
		margin-right: 20px;
	}
</style>