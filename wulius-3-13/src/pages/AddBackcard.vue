<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back"  href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png"/></a>
			<span class="title">添加银行卡</span>		
		</header>
		<p class="tips">请绑定持卡人本人的银行卡</p>
		<!--内容区域-->
		<div class="cash_content" id="add_bankcard_content">
			
			<div class="card_owner"><span>持卡人</span><input v-model="card_user" type="text" id="card_user" placeholder="请输入持卡人姓名"/></div>
			<div>
				<p><span>卡号</span><input v-model="card_num" style="margin-left: 0.7rem;" type="text" id="backcard_num" value="" placeholder="请输入卡号"/></p>
				<p><router-link to='/My/BankDeposit'><span>开户行</span><input v-model="bank_name" type="text" id="bank_name"  unselectable disabled value="" placeholder="请选择开户行"/><img class="more_bank" src="img/jiantou_right.png"/></router-link></p>
			</div>
			<div>
				<p><span>手机号</span><input v-model="phone_num" type="text" id="phone_num" value="" placeholder="请输入手机号"/></p>
				<p><span>验证码</span><input v-model="code_num" type="text" id="code_num" value="" placeholder="请收入验证码"/><b id="get_code">获取验证码</b></p>
			</div>
		</div>	
		<p class="release_box" id="cash_submit"><span class="release_btn" @click="sure">确认</span></p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				card_user:'',
				card_num:'',
				bank_name:'',
				phone_num:'',
				code_num:'',
			}
		},
		methods:{
			sure(){
				
			}
		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
</style>