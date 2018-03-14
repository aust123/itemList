<template>
	<div>
		<div class="certification">
			<div class="back tl">
				<img  @click="Back" src="../assets/img/title_jiantou.png" /> 个人信息
			</div>
			<div class="certiContent">
				<div class="certiMsg" id="personal_info">
					<div>
						<span>姓名</span>{{personalInfo.name}}
					</div>
					<div>
						<span>身份证</span>{{personalInfo.id_card}}

					</div>
					<div>
						<span>保险单号</span>{{personalInfo.baodan_number}}
					</div>
					<div>
						<span>保险截止日期</span><span class="time">{{personalInfo.baoxian_start_time}}</span><span class="time">{{personalInfo.baoxian_end_time}}</span>
					</div>
					<div>
						<span>手机号</span>{{personalInfo.phone}}
					</div>

				</div>
				<div class="certiPics">
					<h3>证件</h3>
					<div class="uploadImg">
						<div class="upload">

							<img :src='"https://two.zhiqunale.cn/"+personalInfo.jiashizheng'>
						</div>
						<div class="upload">

							<img :src='"https://two.zhiqunale.cn/"+personalInfo.xingshizheng'>
						</div>
						<div class="upload">

							<img :src='"https://two.zhiqunale.cn/"+personalInfo.baoxiandan'>
						</div>
						<div class="upload">

							<img :src='"https://two.zhiqunale.cn/"+personalInfo.yingyunzheng'>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import api from '../fetch/api';
	export default {
		data() {
			return {
				personalInfo:{}
			}
		},
		methods:{
			Back() {
				window.history.back();
			}
		},
		mounted() {
			let data = {
				c_id: 5,
				user_state: 1,
				device_number: 'pc_online'
			};
			api.GetCertifateInfo(data).then(res => {
				console.log(res)
			}, err => {
				console.log(err.data);
				if(err.data.status_code == 10000) {
					//alert(err.data.msg)
					this.personalInfo=err.data.data;
				}
			}).catch(err => {
				console.log(err)
			})
		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
	#personal_info {
		font-size: 0.64rem;
	}
	
	#personal_info .time {
		color: #333;
	}
</style>