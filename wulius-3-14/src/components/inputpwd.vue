<template>
	<div>
		<!--弹出框-->
		<div class="background" @click="Hide" v-show="hide"></div>
		<div class="popupBox" >
			<div id="resubmit_box">
				<div class="password_box">
					<h3>请输入支付密码</h3>
					<!--<b>{{fff}}</b>-->
					<div class="input_box">
						<input type="password" value="" maxlength="6" v-model="pwd" />						
					</div>
				</div>
				<a href="javascript:void(0);" id="sure_btn" @click="cashSubmit">确&nbsp;&nbsp;定</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		/*props: ['cashdata'],
		data() {
			return {
				pwd:'',
				hide:true
			}
		},
		methods: {
			cashSubmit() {				
				console.log(this.cashdata);				
			},
			Hide(ev){
				console.log(ev.target)
				this.hide=false;
			}
		}*/
	}
</script>

<style>
	@import url("../assets/css/common.css");
	.popupBox,
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
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
		margin-top: 0.8rem;
		margin-bottom: 1.04rem;
	}
	
	div.password_box>h3 {
		font-size: 0.68rem;
		color: #333;
		margin-bottom: 1.2rem;
		font-weight: normal;
	}
	
	div.input_box {
		overflow: hidden;
		text-align: center;
	}
	
	div.input_box input {
		outline: none;
		border: 1px solid #c2c2c2;
		width: 9rem;
		height: 1.6rem;
		text-align: center;
		font-size: 0.68rem;		
		
	}
	
	
	/*div.input_box input{
	outline: none;
	border: 1px solid #E5E5E5;
	width: 373px;
	height: 66px;
	padding-left: 10px;
	font-size: 40px;
	text-align: center;	
}
*/
	
	.popupBox a {
		color: #fff;
		font-size: 0.72rem;
		display: inline-block;
		height: 1.38rem;
		line-height: 1.38rem;
		border-radius: 0.68rem;
		text-align: center;
	}
	
	#resubmit_box {
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		z-index: 22;
		border-radius: 0.2rem;
		color: #333;
		width: 10.72rem;
		height: 7.72rem;
		text-align: center;
	}
	/*右上角关闭按钮*/
	
	#close {
		float: right;
		margin: 14px 18px 0px 0px;
		cursor: pointer;
	}
	
	a#sure_btn {
		width: 7.66rem;
		background-color: #ff5000;
	}
	
	.ui-loader {
		display: none !important;
	}
</style>