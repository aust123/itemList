<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">资金管理</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div class="balance">
				<p>账户余额&nbsp;（元）</p>
				<p>{{fundInfo.c_left_money}}</p>
				<p>提现中（元）：{{fundInfo.tixianzhong}}</p>
			</div>
			<div class="cash_option">
				<router-link :to="{path:'/My/Enchashment',query: {mo:fundInfo.c_left_money}}">提现 <img src="../assets/img/jiantou_right.png"/></router-link>
				<router-link to='/My/Mybankcard'>银行卡管理 <img src="../assets/img/jiantou_right.png"/></router-link>					
			</div>
		</div>
	</div>
</template>

<script>
	import api from '../fetch/api';	
	
	export default {
		data() {
			return {
				fundInfo:{},
				uid:''
			}
		},		
		mounted() {
			if(sessionStorage.uid){
				this.uid=sessionStorage.uid;
			}
			let data = {
				c_id: this.uid,
				user_state: 1,
				device_number: 'pc_online'
			};
			api.GetMyFund(data).then(res => {
				console.log(res)
			}, err => {
				console.log(err.data);
				if(err.data.status_code == 10000) {
					this.fundInfo=err.data.data;			
				} else {
					alert('暂无银行卡')
				}
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			inputPwd() {
				this.show = true;
			},

		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
</style>