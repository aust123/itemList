<template>
	<div>
		<header class="header">
			<a class="back" v-show="!isSlug" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">实名认证</span>
			<b @click="jump" v-show="isSlug" style="float: right;font-size: 0.64rem;font-weight: normal;margin-right: 0.4rem;position: relative;z-index: 999;">跳过</b>
		</header>
		<div class="certiContent content" style="top: 1.45rem;">
			<div class="certiMsg">
				<div>
					<span>姓名</span>
					<input type="text" v-model="name" placeholder="请填写您的姓名" />
				</div>
				<div>
					<span>身份证</span>
					<input type="number" pattern="^([0-9]){7,18}(x|X)?$" v-model="idcard" placeholder="请填写您的身份证号码" />
				</div>
				<div>
					<span>保险单号</span>
					<input type="text" v-model="baodanNum" placeholder="请填写您的保险单号" />
				</div>
				<div style="height: 2.4rem" id="times">
					<span>保险截止日期</span>
					<yd-datetime type="date" class='start' style='position: relative;left: 4.8rem;top: -0.73rem;' v-model="baoxianStart" :init-emit="false" start-year='2015' placeholder='开始日期' slot="right"></yd-datetime>
					<yd-datetime type="date" class='end' style='position: relative;left: 8.5rem;top: -1.46rem;' v-model="baoxianEnd" :init-emit="false" start-year='2015' placeholder='截止日期' slot="right"></yd-datetime>
					</span>
				</div>
				<div>
					<span>手机号</span>
					<b>
                    <input type="tel" maxlength="11" pattern="^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$" v-model="phone" placeholder="请填写您的手机号"/>
                </b>
				</div>
				<div>
					<span>验证码</span>
					<input style="width: 40%;margin-right:0.6rem" type="number" maxlength="6" pattern="[0-9]*" v-model="code" placeholder="请填写验证码" />
					<yd-sendcode slot="right" v-model="start1" style="width: 26%;height: 1.52rem;font-size: 0.64rem;float: right;margin-top: -0.3rem;" class="get_code" init-str='获取验证码' reset-str='重新获取' run-str="{%s}秒后获取" @click.native="sendCode1" type="warning"></yd-sendcode>
				</div>
			</div>
			<div class="certiPics">
				<h3>上传证件</h3>
				<div class="uploadImg">
					<div class="upload">
						<!--驾驶证-->
						<input accept="image/*" class="jia" type="file" @change="uploadImg" />
						<img id="jia" src='../assets/img/renzheng_upload1.png'>
					</div>
					<div class="upload">
						<!--行驶证-->
						<input accept="image/*" class="xing" type="file" @change="uploadImg" />
						<img id="xing" src='../assets/img/renzheng_upload2.png'>
					</div>
					<div class="upload">
						<!--保险单-->
						<input accept="image/*" class="bao" type="file" @change="uploadImg" />
						<img id="bao" src='../assets/img/renzheng_upload3.png'>
					</div>
					<div class="upload">
						<!--营运证-->
						<input accept="image/*" class="ying" type="file" @change="uploadImg" />
						<img id="ying" src='../assets/img/renzheng_upload4.png'>
					</div>
				</div>
			</div>
		</div>
		<div class="submit cersubmit">
			<button @click="submitCertificate">提交</button>
		</div>

	</div>
</template>

<script>
	import api from '../fetch/api';

	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}

	export default {
		data() {
			return {
				name: '',
				idcard: '',
				baodanNum: '',
				baoxianStart: '',
				baoxianEnd: '',
				phone: '',
				imgs: {},
				code: '',
				codeId: '',
				start1: false,
				jiashizheng: '',
				xingshizheng: '',
				baoxiandan: '',
				yingyunzheng: '',
				isSlug: true,
				uid: ''
			}
		},
		mounted() {
			if(!sessionStorage.getItem('uid')) {
				var code = GetQueryString("code");
				if(code) {
					//存在code,请求登录接口
					let data = {
						code: code
					};
					api.Login(data).then(res => {
						console.log(res);
					}, err => {
						console.log(err.data);
						if(err.data.code == 10012) {
							window.location.href = "https://two.zhiqunale.cn/index.php?g=paper&m=driver&a=getcodeurl";
						} else {
							//alert('验证成功了');							
							sessionStorage.uname = err.data.data.d_username; //存储司机昵称
							sessionStorage.uid = err.data.data.d_id; //存储司机id
							sessionStorage.img = err.data.data.d_headurl; //存储司机头像
							sessionStorage.ceState = err.data.data.d_certification; //存储司机认证状态
							sessionStorage.uState = err.data.data.d_state; //存储司机用户状态
							sessionStorage.uphone = err.data.data.d_phone;
							if(err.data.slug == 2) {
								this.$router.push({
									name: 'My'
								})
							}
						}
					}).catch(err => {
						alert('系统繁忙,请重试!');
					})
				} else {
					//没有code,重新重新获取该页面					
					window.location.href = "https://two.zhiqunale.cn/index.php?g=paper&m=driver&a=getcodeurl";
				}

			};
			if(sessionStorage.uid) {
				this.uid = sessionStorage.uid;
				this.isSlug = false;
			};

		},
		methods: {
			Back() {
				window.history.back();
			},
			jump() {
				this.$router.push({
					name: 'My'
				})

			},
			sendCode1() {
				if(this.phone) {
					this.$dialog.loading.open('发送中...');
					setTimeout(() => {
						this.start1 = true;
						this.$dialog.loading.close();
						this.$dialog.toast({
							mes: '已发送',
							icon: 'success',
							timeout: 1500
						});
					}, 800);
					let data = {
						phone: this.phone
					}
					api.RegistVerifiCode(data).then(res => {
						console.log(res)
					}, err => {
						console.log(err.data);
						if(err.data.status_code == 10000) {
							this.codeId = err.data.data.code_id;
						}
					}).catch(err => {
						console.log(err)
					})
				} else {
					alert("请输入手机号")
				}

			},
			submitCertificate() {
				console.log(this.jiashizheng)
				let data = {
					c_id: this.uid,
					user_state: 1,
					code: this.code,
					code_id: this.codeId,
					device_number: 'pc_online',
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
					//console.log(err.data);
					if(err.data.status_code == 10000) {
						alert(err.data.msg)
					} else {
						alert(err.data.msg)
					}
				}).catch(err => {
					console.log(err)
				})

			},
			uploadImg(ev) {
				var that = this;
				var file = ev.target.files[0];
				// 确认选择的文件是图片				
				if(file.type.indexOf("image") == 0) {
					var reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = function(e) {
						// 图片base64化
						var newUrl = this.result;
						api.Uploadimg({
							pic: newUrl
						}).then(res => {
							console.log(res)
						}, err => {
							if(err.data.code = 10000) {
								if(ev.target.className == 'jia') {
									that.jiashizheng = err.data.data;
									document.querySelector('#jia').setAttribute('src', 'https://two.zhiqunale.cn/' + err.data.data);
								} else if(ev.target.className == 'xing') {
									that.xingshizheng = err.data.data;
									document.querySelector('#xing').setAttribute('src', 'https://two.zhiqunale.cn/' + err.data.data);
								} else if(ev.target.className == 'bao') {
									that.baoxiandan = err.data.data;
									document.querySelector('#bao').setAttribute('src', 'https://two.zhiqunale.cn/' + err.data.data);
								} else if(ev.target.className == 'ying') {
									that.yingyunzheng = err.data.data;
									document.querySelector('#ying').setAttribute('src', 'https://two.zhiqunale.cn/' + err.data.data);
								}
							}

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
	.cersubmit {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	
	.yd-datetime-input {
		width: 3.5rem;
		font-size: 0.64rem;
	}
	
	.yd-datetime-input.start .yd-datetime-placeholder {
		position: relative;
		top: -0.1rem;
	}
	
	.yd-datetime-input.end .yd-datetime-placeholder {
		position: relative;
		top: -0.27rem;
	}
</style>