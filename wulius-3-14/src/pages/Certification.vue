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
					<div style="height: 2.4rem" id="times">
						<span>保险截止日期</span>
						<yd-datetime type="date" class='start' style='position: relative;left: 4.8rem;top: -0.73rem;' v-model="baoxianStart" :init-emit="false" start-year='2018' placeholder='开始日期' slot="right"></yd-datetime>
						<yd-datetime type="date" class='end' style='position: relative;left: 8.5rem;top: -1.46rem;' v-model="baoxianEnd" :init-emit="false" start-year='2018' placeholder='截止日期' slot="right"></yd-datetime>
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
							<img id="jia" src='../assets/img/renzheng_upload1.png'>
						</div>
						<div class="upload">
							<!--行驶证-->
							<input accept="image/*" type="file" @change="uploadImg" />
							<img id="xing" src='../assets/img/renzheng_upload2.png'>
						</div>
						<div class="upload">
							<!--保险单-->
							<input accept="image/*" type="file" @change="uploadImg" />
							<img id="bao" src='../assets/img/renzheng_upload3.png'>
						</div>
						<div class="upload">
							<!--营运证-->
							<input accept="image/*" type="file" @change="uploadImg" />
							<img id="ying" src='../assets/img/renzheng_upload4.png'>
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
	//获取url查询字符串值
	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}

	import api from '../fetch/api';
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
				jiashizheng: 'data/upload/img/2018-03-14/1521040060.png',
				xingshizheng: 'data/upload/img/2018-03-14/1521040060.png',
				baoxiandan: 'data/upload/img/2018-03-14/1521040060.png',
				yingyunzheng: 'data/upload/img/2018-03-14/1521040060.png',
				code:'',
				codeId:''
			}
		},
		mounted() {
			//判断uid是否存在，存在则不用做操作，不存在再判断code是否存在
			if(!sessionStorage.getItem('uid')) {
				var code = GetQueryString("code");
				if(code) {
					//存在code,请求登录接口
					let data = {
						code: code
					}
					api.Login(data).then(res => {
						console.log(res)
					}, err => {
						console.log(err.data);
						if(err.data.code == 10012) {
							//window.location.href = "https://two.zhiqunale.cn/index.php?g=paper&m=driver&a=getcodeurl";
						} else {
							sessionStorage.uname = err.data.data.d_username; //存储司机昵称
							sessionStorage.uid = err.data.data.d_id; //存储司机id
							sessionStorage.err.data.data.d_headurl; //存储司机头像
							sessionStorage.err.data.data.d_certification; //存储司机认证状态
							sessionStorage.err.data.data.d_state; //存储司机用户状态
						}
					}).catch(err => {
						//console.log(err);
						alert('系统繁忙,请重试!');
					})
				} else {
					//没有code,重新重新获取该页面
					//window.location.href = "https://two.zhiqunale.cn/index.php?g=paper&m=driver&a=getcodeurl";
				}

			}

		},
		methods: {
			Back() {
				window.history.back();
			},
			getCode() {
				let phoneNum = this.phone;
				api.RegistVerifiCode({
					phone: phoneNum
				}).then(res => {
					console.log(res)
				}, err => {
					console.log(err.data);
					if(err.data.status_code==10000){
						this.code=err.data.data.code;
						this.codeId=err.data.data.code_id;
					}
					
				}).catch(err => {
					console.log(err)
				})
			},
			submitCertificate() {
				let data = {
					c_id: 5,
					user_state: 1,
					code: this.code,
					code_id:this.codeId,
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
				var file = ev.target.files[0];
				// 确认选择的文件是图片				
				if(file.type.indexOf("image") == 0) {
					var reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = function(e) {
						// 图片base64化
						var newUrl = this.result;
						document.querySelector('#jia').setAttribute('src', newUrl);
						api.Uploadimg({
							pic: newUrl
						}).then(res => {
							console.log(res)						
						}, err => {							
							if(err.data.code=10000){
								this.jiashizheng = err.data.data;
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
	.yd-datetime-input{
		width: 3.5rem;
		font-size: 0.64rem;
	}	
	.yd-datetime-input.start .yd-datetime-placeholder{
		position: relative;
		top: -0.1rem;
	}
	.yd-datetime-input.end .yd-datetime-placeholder{
		position: relative;
		top: -0.27rem;
	}
</style>