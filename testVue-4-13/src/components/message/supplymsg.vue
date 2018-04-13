<template>
	<div class="message">
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">供应消息</span>
		</header>
		<div class="msg-detail-content">
			<p>供应纸厂：<span>山鹰纸厂</span></p>
			<p class="address"><span>收货地址：</span><span>安徽省合肥市蜀山区西二环与翡翠路交口内森庄园9栋2801</span></p>
			<!--<p>货品重量：<span class="price">2000元/吨</span></p>-->
			<p>货品名称：<span>国废A级纸</span></p>
			<p>货品重量（吨）：<span>20吨</span></p>
			<p>发货日期：<span>2017-10-12</span></p>
			<p>物流费用负责方：<span>买方</span></p>
		</div>
		<div class="connect">
			<a href="javascropt:void(0);"><img src="../../assets/img/sell_shopdetail_yijian_agree.png" />同意</a>
			<a href="javascropt:void(0);"><img src="../../assets/img/sell_shopdetail_yijian_jujue.png" />拒绝</a>
		</div>

		<!--确认——弹出框-->
		<!--<div class="background" v-show="isShow1"></div>
		<div class="popupBox" v-show="isShow1">
			<div class="resubmit_box">
				<p class="close"><img @click="Close" src="../../assets/img/orderdetail_tk_cancel.png" /></p>
				<div class="password_box">
					<h3>是否确认拒绝该采购消息？</h3>
					<!--<h3 >需要支付订金10，000元，是否前往支付？</h3>-->
				<!--</div>
				<p class="select"><span>否</span><span>是</span></p>
				<a href="###" id="sure_btn">确&nbsp;&nbsp;定</a>
			</div>
		</div>-->
		<!--输入——弹出框-->
		<!--<div class="background" v-show="isShow2"></div>
		<div class="popupBox" v-show="isShow2">
			<div class="resubmit_box shuru">
				<p class="close"><img @click="Close" src="../../assets/img/orderdetail_tk_cancel.png" /></p>
				<div class="password_box input_box">
					<p><span>订金：</span><input type="number" placeholder="请输入订金数额" /></p>
					<p><span>发货日期：</span><input type="text" placeholder="请输入发货日期" /></p>
				</div>
				<div style="text-align: center;">
					<a href="javascript:void(0);" id="sure_btn">确&nbsp;&nbsp;定</a>
				</div>

			</div>
		</div>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow1: false,
				isShow2: false
			}
		},
		methods: {
			Back() {
				window.history.go(-1);
			},
			refuse() {
				this.isShow1 = true;
			},
			agree() {
				this.isShow2 = true;
			},
			Close() {
				this.isShow1 = false;
				this.isShow2 = false;
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
	
	.msg-detail-content {
		box-sizing: border-box;
		color: #333;
		font-size: 32px;
		margin-top: 18px;
	}
	
	.msg-detail-content>p{
		background-color: #fff;
		padding: 34px 30px 34px;
		border-bottom: 1px solid #E0E0E0;
	}
	.msg-detail-content>p span{
		margin-left: 25px;
	}
	.address span:nth-of-type(1) {
		margin: 0 !important;
		width: 25%;
		display: inline-block;
		position: relative;
		top: -40px;
	}
	
	.address span:nth-of-type(2) {
		width: 70%;
		display: inline-block;
	}
	
	.price {
		color: #FF5000;
	}
	
	.connect {
		display: flex;
		justify-content: space-around;
		height: 98px;
		width: 100%;
		line-height: 98px;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	
	.connect a {
		color: #fff;
		font-size: 36px;
		text-align: center;
		flex-grow: 1;
	}
	
	.connect a:nth-of-type(1) {
		background-color: #00D3AF;
	}
	
	.connect a:nth-of-type(2) {
		background-color: #FF5000;
	}
	
	.connect img {
		margin-right: 15px;
	}
	
	.connect img:nth-of-type(1) {
		width: 37px;
		height: 37px;
	}
	
	.connect img:nth-of-type(2) {
		width: 38px;
		height: 39px;
	}
	/*消息————弹出框*/
	
	.popupBox,
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
		z-index: 22;
	}
	
	.background {
		background-color: #000;
		filter: alpha(opacity=50);
		-moz-opacity: 0.5;
		-khtml-opacity: 0.5;
		opacity: 0.5;
	}
	
	div.password_box {
		margin-top: 50px;
		margin-bottom: 78px;
	}
	
	div.password_box>h3 {
		font-size: 34px;
		color: #333;
		font-weight: normal;
	}
	
	div.input_box {
		padding: 0 30px;
	}
	
	div.input_box p {
		background-color: #F1F1F1;
		font-size: 32px;
		color: #666;
		padding: 38px 0 40px;
	}
	
	div.input_box p:nth-of-type(1) {
		border-bottom: 1px solid #d2d2d2;
	}
	
	div.input_box span {
		margin-left: 40px;
		margin-right: 20px;
	}
	
	div.input_box input {
		font-size: 32px;
		color: #999;
		width: 230px;
		background-color: #F1F1F1;
	}
	
	.resubmit_box.shuru {
		height: 524px;
		text-align: left;
	}
	
	.password_box.input_box {
		margin-top: 60px;
		margin-bottom: 28px;
	}
	
	.popupBox a {
		color: #fff;
		font-size: 36px;
		display: inline-block;
		height: 70px;
		line-height: 70px;
		border-radius: 34px;
		text-align: center;
	}
	
	.resubmit_box {
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		z-index: 22;
		border-radius: 10px;
		color: #333;
		width: 536px;
		height: 328px;
		text-align: center;
	}
	
	.close {
		text-align: right;
	}
	
	.close img {
		width: 28px;
		height: 28px;
		margin-top: 24px;
		margin-right: 36px;
	}
	
	.select {}
	
	.select span {
		display: inline-block;
		width: 230px;
		height: 68px;
		line-height: 68px;
		text-align: center;
		color: #fff;
		font-size: 36px;
		border-radius: 34px;
	}
	
	.select span:nth-of-type(1) {
		background-color: #999;
		margin-right: 20px;
	}
	
	.select span:nth-of-type(2) {
		background-color: #FF5000;
	}
	/*右上角关闭按钮*/
	
	#close {
		float: right;
		margin: 14px 18px 0px 0px;
		cursor: pointer;
	}
	
	a#sure_btn {
		width: 382px;
		background-color: #ff5000;
		margin-top: 20px;
	}
</style>