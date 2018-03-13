<template>
	<div>
		<div class="certification">
			<div class="back tl">
				<img @click="Back" src="../assets/img/title_jiantou.png" /> 实名认证
			</div>
			<div class="certiContent">
				<div class="certiMsg">
					<div>
						<span>姓名</span>
						<input type="text" v-model="name" placeholder="请填写您的姓名" />
					</div>
					<div>
						<span>身份证</span>
						<input type="text" v-model="idcard" placeholder="请填写您的身份证号码" />
					</div>
					<div>
						<span>保险单号</span>
						<input type="text" v-model="baodanNum" placeholder="请填写您的保险单号" />
					</div>
					<div>
						<span>保险截止日期</span>
						<span class="field-container date-picker" type="date" style="touch-action: manipulation; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                    <input class="date-input" type="text" onblur="(this.type='text')" onfocus="(this.type='date')" oninput="(this.type='text')" onchange="(this.type='text')" id="picker" placeholder="请选择您的保险截止日期">
                    <b class="mask">
                        <label for="picker"></label>
                    </b>
                </span>
					</div>
					<div>
						<span>手机号</span>
						<b>
                    <input type="text" v-model="phone" placeholder="请填写您的手机号"/>
                </b>
					</div>
					<div>
						<span>验证码</span>
						<input style="width: 40%;margin-right:0.6rem" type="text" placeholder="请填写验证码" />
						<button style="width: 30%;" class="get_code" @click="getCode">获取验证码</button>
					</div>
				</div>
				<div class="certiPics">
					<h3>上传证件</h3>
					<div class="uploadImg">
						<div class="upload">
							<!--驾驶证-->
							<input accept="image/*" type="file" @change="uploadImg" />
							<img src='../assets/img/renzheng_upload1.png'>
						</div>
						<div class="upload">
							<!--行驶证-->
							<input accept="image/*" type="file" />
							<img src='../assets/img/renzheng_upload2.png'>
						</div>
						<div class="upload">
							<!--保险单-->
							<input accept="image/*" type="file" />
							<img src='../assets/img/renzheng_upload3.png'>
						</div>
						<div class="upload">
							<!--营运证-->
							<input accept="image/*" type="file" />
							<img src='../assets/img/renzheng_upload4.png'>
						</div>
					</div>
				</div>
			</div>
			<div class="submit">
				<button @click="submitCertificate">提交</button>
			</div>
		</div>
	</div>
</template>

<script>
	import api from '../fetch/api';
	
	
	export default {
		data() {
			return {
				name: '',
				idcard: '',
				baodanNum: '',
				baoxianStart: '2018',
				baoxianEnd: '2019',
				phone: '',
				jiashizheng: 'data/upload/img/2018-03-13/1520917595.png',
				xingshizheng: 'data/upload/img/2018-03-13/1520917595.png',
				baoxiandan: 'data/upload/img/2018-03-13/1520917595.png',
				yingyunzheng: 'data/upload/img/2018-03-13/1520917595.png'
			}
		},
		methods: {
			Back() {
				window.history.back();
			},
			getCode(){
				let phoneNum=this.phone;
				api.RegistVerifiCode({phone:phoneNum}).then(res => {
							console.log(res)
						}, err => {
							console.log(err.data)
						}).catch(err => {
							console.log(err)
						})
			},
			submitCertificate() {
				let data = {
					c_id:5,
					user_state:1,
					code:465027,
					code_id:84,
					device_number:'pc_online',
					name: this.name,
					id_card: this.idcard,
					baodan_number: this.baodanNum,
					baoxian_start_time: this.baoxianStart,
					baoxian_end_time: this.baoxianEnd,
					phone: this.phone,
					jiashizheng: this.jiashizheng,
					xingshizheng: this.xingshizheng,
					baoxiandan: this.baoxiandan,
					yingyunzheng: this.yingyunzheng,
				};
				api.Authentication(data).then(res => {
					console.log(res)
				}, err => {
					console.log(err.data)
				}).catch(err => {
					console.log(err)
				})

			},
			uploadImg(ev) {
				console.log(ev.target);
				var file = ev.target.files[0];
				// 确认选择的文件是图片				
				if(file.type.indexOf("image") == 0) {
					var reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = function(e) {
						// 图片base64化
						var newUrl = this.result;
						//console.log(newUrl)
						api.Uploadimg().then(res => {
							console.log(res)
						}, err => {
							console.log(err.data)
						}).catch(err => {
							console.log(err)
						})

					};
				}
			},

		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
</style>