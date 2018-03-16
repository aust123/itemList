<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">我的银行卡</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div style="padding: 0;">
				<a class="selected_card" href="javascript:void(0);" v-for="item in bankList ">
					<img class="bankcard_logo" :src="'https://two.zhiqunale.cn/'+item.bank_imgurl" alt="" />
					<div class="bankcard_msg">
						<p>{{item.bank}}</p>
						<p>尾号{{item.bankcard_code_4}}储蓄卡</p>
					</div>
					<img class="right_delete" src="../assets/img/dizhiguanli_cancel.png" @click="deleteBank(item.bankcard_id)" :data-bnd='item.bankcard_id'/>
				</a>

			</div>
		</div>
		<div class="add_bankcard">
			<router-link to='/My/AddBackcard'>添加银行卡</router-link>
		</div>
	</div>
</template>

<script>
	import api from '../fetch/api';
	export default {
		data() {
			return {
				bankList: [],
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
			api.GetBankList(data).then(res => {
				console.log(res)
			}, err => {
				console.log(err.data);
				if(err.data.status_code == 10000) {
					this.bankList = err.data.data;
				}else{
					alert('暂无银行卡')
				}
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			deleteBank(id) {
				let data = {
					bankcard_id:id,
					c_id: this.uid,
					user_state: 1,
					device_number:'pc_online'
				};
				api.DeleteBankNameList(data).then(res => {
					console.log(res)
				}, err => {
					console.log(err.data);
					if(err.data.status_code == 10000) {
						alert(err.data.msg);						
					}else {
						alert(err.data.msg)
					}
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
</style>