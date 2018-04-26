<template>
	<div class="message">
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png"/></a><span class="title">历史消息</span>			
		</header>
		<div class="msg-content">
			<ul>
				<li>
					<div class="msg-title"><img class="headImg" src="../../assets/img/sell_wuliu_sijitouxiang.png" /><span>德润集团</span><img class="right-arrow" src="../../assets/img/jiantou_right.png" /><span class="state-msg">已同意</span></div>
					<div class="msg-info">
						<img src="../../assets/img/buy_caigouyixiang_img.png" />
						<div>
							<p>货品名称：国废A级纸</p>
							<p>收货地址：安徽合肥蜀山区</p>
							<p class="msg-info-remark">备注：杂质为5%杂质为5%杂质为5%杂质为5%杂质为5%</p>
						</div>
					</div>
					<div class="msg-count"><span>报价：<b>2000</b>元/吨</span><span>数量：<b>3000</b>吨</span></div>					
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
		methods:{
			Back(){
				window.history.go(-1);
			}
		},
		mounted() {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
		top: 2px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
	
	.msg-content {
		position: absolute;
		top: 102px;
		bottom: 0;
		left: 0;
		right: 0;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}
	
	.msg-content li {
		margin-bottom: 18px;
	}
	
	.msg-content li>div {
		padding-left: 30px;
		padding-right: 30px;
		box-sizing: border-box;
	}
	
	.msg-title,
	.msg-count,
	.option {
		height: 88px;
		line-height: 88px;
		background-color: #fff;
	}
	
	.msg-title {
		font-size: 30px;
		color: #333;
	}
	
	.headImg {
		width: 53px;
		height: 53px;
		margin-right: 22px;
	}
	
	.right-arrow {
		width: 17px;
		height: 31px;
		margin-left: 30px;
	}
	
	.msg-info {
		padding-top: 28px;
		padding-bottom: 18px;
		color: #333;
		font-size: 30px;
		background-color: #fbfbfb;
		overflow: hidden;
	}
	
	.msg-info img {
		width: 144px;
		height: 144px;
		margin-right: 20px;
		float: left;
	}
	
	.msg-info>div {
		float: left;
		width: 510px;
	}
	
	.msg-info p {
		margin-bottom: 10px;
	}
	
	.msg-info .msg-info-remark {
		color: #999;
		font-size: 26px;
	}
	
	.msg-count {
		font-size: 30px;
		color: #333;
		border-bottom: 2px solid #E0E0E0;
		text-align: right;
	}
	
	.msg-count span:nth-of-type(1) {
		margin-right: 40px;
	}
	
	.msg-count b {
		font-weight: normal;
		font-size: 36px;
	}
	
	.option {
		text-align: right;
	}
	
	span.button {
		color: #FF5000;
		font-size: 30px;
		border: 2px solid #FF5000;
		border-radius: 10px;
		display: inline-block;
		width: 156px;
		height: 60px;
		line-height: 60px;
		text-align: center;
	}
	
	.option span:nth-of-type(1) {
		margin-right: 40px;
	}
	.state-msg{
	font-size: 30px;
	color: #FF5000;
	float: right;	
	}
</style>