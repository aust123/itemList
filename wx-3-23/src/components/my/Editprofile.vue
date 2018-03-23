<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">编辑个人资料</span>
		</header>
		<!--内容区域-->
		<div class="profile_content ">
			<div>
				<p class="profile">
					<span>昵称</span><input type="text" name="" id="" value="哈哈哈哈" />
				</p>
				<p class="profile">
					<span>地址</span><input type="text" name="" id="" value="安徽省合肥市蜀山区" />
				</p>
				<p class="profile">					
					<span>详细地址</span><textarea name="" v-model="address_detail" id="" placeholder=""/></textarea>
				</p>
				<p class="upload">
					<input accept="image/*" class="jia" type="file" />
					<img src='../../assets/img/my_shop_touxiang.png'>
				</p>
			</div>
			<div class="submit">
				<button>保存</button>
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
				uid: '',
				address_detail:'南二环与翡翠路交口绿地内森庄园1栋101'
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
	
	.profile_content {
		margin-top: 16px;
		position: relative;
	}
	
	.profile {
		font-size: 32px;
		color: #666;
		padding: 34px 30px;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: 1px solid #E0E0E0;
	}
	
	.profile span {
		margin-right: 120px;		
	}
	
	.profile input {
		outline: none;
		color: #333;
		font-size: 32px;
		display:inline-block;
		
	}
	.profile:nth-of-type(3) span{
		margin-right: 50px;
		position: relative;
		top: -47px;
	}
	.profile:nth-of-type(3) textarea{
		display:inline-block;
		color: #333;
		font-size: 32px;
		width: 70%;
		border: none;
		outline: none;
		
		font-family: "microsoft yahei";
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
	.submit {
		margin-top: 124px;
		text-align: center;
	}
	.submit button {
		text-align: center;
		height: 98px;
		line-height: 98px;
		background: #00D3AF;
		width: 700px;
		color: #FFF;
		font-size: 36px;
		border: 0;
		letter-spacing: 25px;
		border-radius: 8px;
	}
	.upload{
		width: 204px;
		height: 144px;		
		display: inline-block;
		position: absolute;
		top: 27px;
		right:0;	
		background-color: #fff;	
	}	
	.upload img{
		display: inline-block;
		width: 144px;
		height: 144px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		border-radius: 50%;
	}
	.upload input{
		display: inline-block;
		width: 144px;
		height: 144px;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 22;
	}
</style>