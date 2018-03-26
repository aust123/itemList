<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">编辑收货地址</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div>
				<a class="address" href="javascript:void(0);" >
					<img src="../../assets/img/my_address_star.png"/> 姓名<span>请填写</span><img class="right" src="../../assets/img/jiantou_right.png" alt="" />
				</a>
				<a class="address" href="javascript:void(0);" >
					<img src="../../assets/img/my_address_star.png"/> 电话<span>请填写</span><img class="right" src="../../assets/img/jiantou_right.png" alt="" />
				</a>
				<a class="address" href="javascript:void(0);" >
					<img src="../../assets/img/my_address_star.png"/> 地址<span>请填写</span><img class="right" src="../../assets/img/jiantou_right.png" alt="" />
				</a>
			</div>
			<div class="add_bankcard">
				<a>确定</a>
				<!--<router-link to='/AddBackcard'>确定</router-link>-->
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
	.address{
		font-size: 34px;
		color: #333;
		display: block;	
		height: 110px;
		line-height: 110px;
		padding: 0 30px;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: 1px solid #E0E0E0;
	}
	.address span{
		margin-left: 366px;
		color: #666;
		font-size: 32px;
	}
	.address img:nth-of-type(1){
		width: 21px;
		height: 20px;
		margin-right: 14px;
	}
	.address .right{
		width: 17px;
		height: 31px;
		margin-right: 14px;
		float: right;
		position: relative;
		top: 40px;
	}
	.add_bankcard {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	
	.add_bankcard a {
		display: block;
		width: 100%;
		color: #fff;
		background-color: #00D3AF;
		height: 98px;
		line-height: 98px;
		text-align: center;
		font-size: 36px;
	}
</style>