<template>
	<div class="message">
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">退款详情</span>
		</header>
		<div class="msg-detail-content">
			<div class="business_msg">
				<div class="business_head_img"><img src="../../assets/img/orderdetail_img1.png" alt="" /></div>
				<div class="bunsiness_info">
					<p>山鹰纸厂</p>
					<p class="business_level"><img src="../../assets/img/icon_rengzheng_shi.png" /><img src="../../assets/img/icon_rengzheng_qi.png" /><img src="../../assets/img/icon_rengzheng_tui.png" /><span>信用分：8分</span></p>
					<img class="identity" src="../../assets/img/orderdetail_sail.png" alt="" />
				</div>
			</div>
			<div class="business_msg">
				<div class="business_head_img"><img src="../../assets/img/orderdetail_img1.png" alt="" /></div>
				<div class="bunsiness_info">
					<p>山鹰纸厂</p>
					<p class="business_level"><img src="../../assets/img/icon_rengzheng_shi.png" /><img src="../../assets/img/icon_rengzheng_qi.png" /><img src="../../assets/img/icon_rengzheng_tui.png" /><span>信用分：8分</span></p>
					<img class="identity" src="../../assets/img/orderdetail_buy.png" alt="" />
				</div>
			</div>
			<div class="order_info item">
				<p>规格：国废A级纸</p>
				<p>报价：<span class="price">2000元/吨</span></p>
				<p class="address"><span>收货地址：</span><span>安徽省合肥市蜀山区西二环与翡翠路交口内森庄园9栋2801</span></p>
				<p>发货日期：2017-10-12 17：30</p>
				<p>数量：20吨</p>
				<p>买方支付订金：<span class="price">10000元</span></p>
			</div>
			<div class="order_num item">
				<p>订单流水号：CD888888888</p>
				<p>订金支付流水号：DF9999999999</p>
				<p>退款流水号：DF9999999999</p>
			</div>
			<div class="apply_info item">
				<p>申请退款金额：<span class="price">10000元</span><b class="order_result">已同意</b></p>
				<p>申请日期：2017-10-11</p>
				<div class="option"><span class="button" @click="agree">同意申请</span><span class="button" @click="refuse">拒绝申请</span>
					<!--<em>已拒绝</em>--></div>
			</div>
		</div>
		<div class="connect">
			<a href="javascropt:void(0);"><img src="../../assets/img/orderdetail_liao_p.png" />聊一聊</a>
			<a href="tel:15705131911"><img src="../../assets/img/orderdetail_phone.png" />联系买家</a>
		</div>

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
		padding-bottom: 115px;
	}
	
	.msg-detail-content>div {
		background-color: #fff;
		
	}
	
	.business_msg {
		padding: 40px 30px 10px;
		height: 180px;
		padding-left: 20px !important;
		position: relative;
		border-bottom: 1px solid #E0E0E0;
		box-sizing: border-box !important;
	}
	
	.business_msg>div {
		float: left;
	}
	
	.business_head_img img {
		width: 140px;
		height: 140px;
		position: relative;
		margin-right: 25px;
		top: -25px;
	}
	
	.identity {
		width: 108px;
		height: 108px;
		position: absolute;
		top: 0;
		right: 0;
	}
	
	.business_msg p {
		margin-bottom: 20px;
	}
	
	.address span:nth-of-type(1) {
		width: 25%;
		display: inline-block;
		position: relative;
		top: -40px;
	}
	
	.address span:nth-of-type(2) {
		width: 75%;
		display: inline-block;
	}
	
	.price {
		color: #FF5000;
	}
	.order_num,.apply_info,.order_info{
		margin-top: 16px;
	}
	.order_num{
		padding: 36px 30px 6px;
	}
	.order_num p{
		margin-bottom: 30px;
	}
	.apply_info{
		padding: 36px 30px 6px;
	}
	.apply_info p{
		margin-bottom: 18px;
	}
	.order_info p{
		padding: 36px 30px;
		border-bottom: 1px solid #E0E0E0;
		box-sizing: border-box;
	}
	.business_level span {
		color: #ff5000;
		margin-left: 20px;
	}
	.order_result{
		float: right;
		color: #208DF0;
	}
	.business_level img:nth-of-type(1) {
		width: 26px;
		height: 32px;
		margin: 0 9px 12px;
	}
	
	.business_level img:nth-of-type(2) {
		width: 36px;
		height: 28px;
		margin: 0 9px 12px;
	}
	
	.business_level img:nth-of-type(3) {
		width: 28px;
		height: 28px;
		margin: 0 9px 12px;
	}
	
	.option {
		margin-top: 10px;
		height: 100px;		
		line-height: 100px;
		text-align: right;
	}
	
	span.button {
		color: #208df0;
		font-size: 30px;
		border: 2px solid #208df0;
		border-radius: 10px;
		display: inline-block;
		width: 156px;
		height: 58px;
		line-height: 58px;
		text-align: center;
	}
	
	.option span:nth-of-type(1) {
		margin-right: 40px;
	}	
	.option span:nth-of-type(2) {
		margin-right: 2px;
	}
	.option em {
		color: #208DF0;
		font-size: 32px;
		font-style: normal;
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
		font-size: 36px;
		text-align: center;
		flex-grow: 1;
	}
	
	.connect a:nth-of-type(1) {
		background-color: #fff;
		color: #666;
	}
	
	.connect a:nth-of-type(2) {
		background-color: #00D3AF;
		color: #fff;
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