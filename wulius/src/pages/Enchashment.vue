<template>
	<div>	
		<!--头部-->
		<header class="header">
			<a class="back"  href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png"/></a>
			<span class="title">提现</span>		
		</header>		
		<!--内容区域-->
		<div class="cash_content " >
			<div style="padding: 0;">
			<router-link class="selected_card" to="/My/Mybankcard">
				<img class="bankcard_logo" src="../assets/img/bank_zhaoshang.png" alt=""/>
				<div class="bankcard_msg">
					<p>招商银行</p>
					<p>尾号3558储蓄卡</p>
				</div>
				<img class="right_arrow" src="../assets/img/jiantou_right.png"/>
			</router-link >			
			</div>
			<div class="cash_sum">
				<p>提现金额</p>
				<p><b>￥</b><input type="text" id="money_count"  /></p>	
				<p>可用余额&nbsp;<span>20,000</span>元</p>
			</div>
		</div>
		<p class="cash_rule"><img src="../assets/img/sqreturn_tishi.png"/><a href="###">《纸去哪了》平台提现规则</a></p>
		<p class="release_box" id="cash_submit"><span class="release_btn" @click="inputPwd">确认提现</span></p>
		<v-inputpwd v-show='show'></v-inputpwd>
	</div>
</template>

<script>
	import inputpwd from'@/components/inputpwd';
	export default{
		data(){
			return{
				show:false
			}
		},
		components:{
			'v-inputpwd': inputpwd
		},
		methods:{
			inputPwd(){				
				this.show=true;				
			}
		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
</style>