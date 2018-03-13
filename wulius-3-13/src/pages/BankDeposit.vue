<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">选择开户行</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div style="padding: 0;">
				<a v-for="item in backList" class="selected_bank" href="###" :data-bnid='item.bn_id'>
					<img class="bankcard_logo" :src="'https://two.zhiqunale.cn/'+item.bn_img" alt="" />
					<span class="bank_name">{{item.bn_name}}</span>
				</a>
				
			</div>
		</div>
	</div>
</template>

<script>
	import api from '../fetch/api';
	export default {
		data() {
			return {
				backList: []
			}
		},
		mounted() {
			let data = {
				user_id: 5,
				device_number: 'pc_online'
			};
			api.GetBankNameList(data).then(res => {
				console.log(res)
			}, err => {
				console.log(err);
				if(err.data.status_code==10000){
					this.backList=err.data.data;
				}
				
			}).catch(err => {
				console.log(err)
			})
		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
</style>