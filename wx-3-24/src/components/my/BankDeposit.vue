<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">选择开户行</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div>
				<a class="selected_bank" href="javascript:void(0);" >
					<img class="bankcard_logo" src="../../assets/img/my_bank_zhaoshang.png" alt="" />
					<span class="bank_name">招商银行</span>
				</a>
				<a class="selected_bank" href="javascript:void(0);" >
					<img class="bankcard_logo" src="../../assets/img/my_bank_zhaoshang.png" alt="" />
					<span class="bank_name">招商银行</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	//import api from '../fetch/api';
	export default {
		data() {
			return {
				backList: [],
				uid:''
			}
		},
		mounted() {
			/*if(sessionStorage.uid){
				this.uid=sessionStorage.uid;
			}
			let data = {
				user_id: this.uid,
				device_number: 'pc_online'
			};
			api.GetBankNameList(data).then(res => {
				console.log(res)
			}, err => {
				console.log(err);
				if(err.data.status_code == 10000) {
					this.backList = err.data.data;
				}

			}).catch(err => {
				console.log(err)
			})*/
		},
		methods: {
			Back() {
				window.history.back();
			}
			/*selectBank(id,name,img) {
				this.$router.push({
					name:'AddBackcard',
					params: {
						bnid:id,
						bnna:name,
						bnim:img
					}
				})
			}*/
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
	
	.header .right {
		float: right;
		font-size: 26px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
	.cash_content{
		margin-top: 16px;
	}
	.selected_bank{
		font-size: 32px;
		color: #333;
		display: block;	
		height: 146px;
		line-height: 146px;
		padding: 0 30px;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: 1px solid #E0E0E0;
	}
	.selected_bank img{
		width: 66px;
		height: 66px;
		margin-right: 20px;
	}
</style>