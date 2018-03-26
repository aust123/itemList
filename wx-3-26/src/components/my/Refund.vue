<template>
	<div>	
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">退款处理</span>
		</header>
		<div class="select"><span>我申请的退款</span><span class="curret">我的退款</span></div>
		<div class="order-memo">			
			<ul>
				<li @click="ToDetail">
					<p>规格：国废A级纸<b class="Reorder-state">已同意</b></p>
					<p>申请退款金额：<span>10000元</span></p>
					<p>申请日期：2018.3.38</p>					
					<p class="option"><a href="javascript:void(0);"><img src="../../assets/img/orderbeiwang_liao.png"/>聊一聊</a><a href="tel:15705131911"><img src="../../assets/img/orderbeiwang_phone.png" alt="" />联系买家</a></p>
				</li>
				<li @click="ToDetail">
					<p>规格：国废A级纸</p>
					<p>申请退款金额：<span>10000元</span><b class="solve">处理</b></p>
					<p>申请日期：2018.3.38</p>					
					<p class="option"><a href="javascript:void(0);"><img src="../../assets/img/orderbeiwang_liao.png"/>聊一聊</a><a href="tel:15705131911"><img src="../../assets/img/orderbeiwang_phone.png" alt="" />联系买家</a></p>
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
			},
			ToDetail(){
				this.$router.push({name:"退款详情"})
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
		top: 2px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
	.order-memo{
		margin-top: 18px;
		font-size:32px;
		color: #333;
		padding-bottom:82px ;
	}
	.order-memo li{
		background-color: #fff;
		margin-bottom: 18px;
		padding-top: 32px;
	}
	.order-memo p{
		padding: 0 30px;
		margin-bottom: 36px;
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
	.Reorder-state{
		float: right;
		font-size: 30px;
		color: #208DF0;
	}
	.solve{
		float: right;
		display: inline-block;
		width: 156px;
		height: 58px;
		color: #208DF0;
		border: 2px solid #208DF0;
		border-radius: 10px;
		text-align: center;
		line-height: 58px;
		position: relative;
		top: -10px;
	}
	.select{
		height: 118px;
		line-height:118px;
		text-align: center;
		color:#00D3AF;
		font-size: 30px;
		background-color: #fff;
	}
	.select span{
		display: inline-block;
		height: 60px;
		line-height: 60px;
		width: 222px;
		text-align:center;
		border: 4px solid #00D3AF;
	}
	.select span:nth-of-type(1){
		border-right:none;
		border-radius: 12px 0 0 12px;
	}
	.select span:nth-of-type(2){
		
		border-radius:0 12px 12px 0;
	}
	.curret{
		color: #fff;
		background-color: #00D3AF;
	}
</style>