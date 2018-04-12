<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">提现明细</span>			
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<ul>
				<li @click="Todetail">
					<div>
						<p><span>提现</span><b>-1000</b></p>
						<p><span>余额：10000元</span><b class="date">2017-11-13</b></p>
					</div>
					<img src="../../assets/img/jiantou_right.png"/>
				</li>
				
			</ul>
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
			},
			Todetail(){
				this.$router.push({name:'明细详情'})
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
	}
	.cash_content li{
		height: 146px;
		border-bottom: 1px solid #E0E0E0;
		padding: 0 30px;
		box-sizing: border-box;
		background-color: #fff;
	}
	.cash_content div{
		float: left;		
	}
	.cash_content li b:nth-of-type(1){
		margin-left: 480px;
	}
	.cash_content .date{
		margin-left: 300px !important;
	}
	.cash_content div p:nth-of-type(1){
		font-size: 32px;
		color: #333;	
		margin-bottom: 20px;
		margin-top: 20px;
	}
	.cash_content div p:nth-of-type(2){
		font-size: 26px;
		color: #666;
	
	}
	
	.cash_content li img {
		float: right;
		width: 17px;
		height: 31px;
		margin-top: 55px;
		margin-right: 5px;
	}
</style>