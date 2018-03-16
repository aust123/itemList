<template>
	<div>
		<div class="certification">
			<div class="back tl">
				<img  @click="Back" src="../assets/img/title_jiantou.png" /> 个人信息
			</div>
			<div class="certiContent">
				<div class="certiMsg" id="personal_info">
					<div>
						<span>姓名</span>{{personalInfo.name}} <b v-if="personalInfo.ce_state==1" style="float: right;font-weight: normal;font-size: 0.64rem;color: #208DF0;">认证通过</b><b v-else-if="personalInfo.ce_state==2" style="float: right;font-weight: normal;font-size: 0.64rem;color: #208DF0;">认证中</b>
						<b v-else-if="personalInfo.ce_state==3" style="float: right;font-weight: normal;font-size: 0.64rem;color: #208DF0;">认证失败</b>
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
				personalInfo:{},
				uid:''
			}
		},
		methods:{
			Back() {
				window.history.back();
			}
		},
		mounted() {
			if(sessionStorage.uid){
				this.uid=sessionStorage.uid;
			}
			let data = {
				c_id:this.uid,
				user_state: 1,
				device_number: 'pc_online'
			};
			api.GetCertifateInfo(data).then(res => {
				console.log(res)
			}, err => {
				if(err.data.status_code == 10000) {
					this.personalInfo=err.data.data;
					if(sessionStorage.ceState){
						this.personalInfo.ce_state = sessionStorage.ceState;
					}
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