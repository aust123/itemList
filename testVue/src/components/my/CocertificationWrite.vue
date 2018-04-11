<template>
	<div>
		<header class="header">
			<router-link to="/my" class="back">
				<img src="../../assets/img/title_jiantou.png" />
			</router-link>
			<span class="title">企业认证</span>
		</header>
		<div class="reEditMsg" v-if="this.$route.query.state==3">
			<div class="content">
				<div class="user-info">
					<div>
						<span>企业名称</span>
						<input required type="text" v-model="coname" placeholder="请填写企业名称" />
					</div>
					<div>
						<span>企业地址</span>
						<x-address class="addr" :title="addrtitle" v-model="value" :list="addressData" placeholder="请选择省市区">
						</x-address>
					</div>
					<div>
						<span>详细地址</span>
						<a @click="detailAddress" class="detailAddr">请输入详细地址</a>
					</div>
					<div>
						<span>企业电话</span>
						<input required type="tel" v-model="cotel" placeholder="请填写企业电话" />
					</div>
				</div>
				<div class="uploadImg">
					<!--企业认证是---纸厂时提示必填-->
					<p>企业资质（营业执照）<span id="required"><img src="../../assets/img/my_renzheng_bitian.png" alt="" />必填</span></p>
					<div>
						<div class="detail-upload">
							<a class="storeIcon">
								<input class="img" type="file" @change="uploadIcon($event)" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="submit" @click="resubmitCerti">
				<button>提交</button>
			</div>
		</div>
		<div class="editMsg" v-else>
			<div class="content">
				<div class="user-info">
					<div>
						<span>企业名称</span>
						<input required type="text" v-model="coname" placeholder="请填写企业名称" />
					</div>
					<div>
						<span>企业地址</span>
						<x-address class="addr" :title="addrtitle" v-model="value" :list="addressData" placeholder="请选择省市区">
						</x-address>
					</div>
					<div>
						<span>详细地址</span>
						<a @click="detailAddress" class="detailAddr">请输入详细地址</a>
					</div>
					<div>
						<span>企业电话</span>
						<input required type="tel" v-model="cotel" placeholder="请填写企业电话" />
					</div>
				</div>
				<div class="uploadImg">
					<!--企业认证是---纸厂时提示必填-->
					<p>企业资质（营业执照）<span id="required"><img src="../../assets/img/my_renzheng_bitian.png" alt="" />必填</span></p>
					<div>
						<div class="detail-upload">
							<a class="storeIcon">
								<input class="img" type="file" @change="uploadIcon($event)" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="submit" @click="submitCerti">
				<button>提交</button>
			</div>
		</div>

		<p class="tip">认证代表同意<span>《纸去哪了》平台用户协议</span>，提交认证成功后我们讲进行人工审核，预计2个工作日内审核完成，请您耐性等待！</p>
	</div>
</template>

<script>
	import { XAddress, ChinaAddressV4Data } from 'vux'
	export default {
		components: {
			XAddress
		},
		data: function() {
			return {
				coname: '',
				coaddress: '',
				cotel: '',
				addrtitle: '',
				value: [],
				addressData: ChinaAddressV4Data,
				showAddress: false,
				edit: false,
				cc_id: ''
			}
		},
		mounted: function() {
			//console.log(this.$route)
			if(this.$route.query.state == 3) {
				var epath = 'https://two.zhiqunale.cn/paper/user/get_company_authentication_info';
				var eparam = {
					uid: this.$store.state.loginUser.uid,
					device_number: 'pc_online',
					type: this.$route.query.identity
				}
				this.post(eparam, epath, this.editbefore);
			} else {
				if(sessionStorage.getItem('detailAddress')) {
					this.value = sessionStorage.getItem('detailAddress').split(',');
				}
				if(sessionStorage.getItem('detailAddr_lng')) {
					$('.detailAddr').attr('data-lng', sessionStorage.getItem('detailAddr_lng'));
					$('.detailAddr').attr('data-lat', sessionStorage.getItem('detailAddr_lat'));
					$('.detailAddr').html(sessionStorage.getItem('detailAddr'));
				}
			}
		},
		methods: {
			
			resubmitCerti: function() {
				var repath = 'https://two.zhiqunale.cn/paper/user/edit_user_company_authentication';
				var reparam = {
					uid: this.$store.state.loginUser.uid,
					device_number: 'pc_online',
					type: this.$route.params.key,
					cc_id: this.cc_id,
					company_name: this.coname,
					company_detail_address: $('.detailAddr').html(),
					company_province: $.trim($('.addr').text()).split(' ')[0],
					company_city: $.trim($('.addr').text()).split(' ')[1],
					company_dist: $.trim($('.addr').text()).split(' ')[2],
					lng: $('.detailAddr').attr('data-lng'),
					lat: $('.detailAddr').attr('data-lat'),
					company_phone: this.cotel
				}
				if($('.storeIcon').css('background-image')) {
					reparam.company_zizhi_photo = $('.storeIcon').css('background-image').split('"')[1].split('https://two.zhiqunale.cn/')[1];
				}
				this.post(reparam, repath, this.resuccessCerti);
			},
			resuccessCerti: function(_data) {
				console.log(_data);
				if(_data.status_code == '10000') {
					this.$router.push({
						path: '/my'
					});
				} else {
					alert(_data.msg);
				}
			},
			editbefore: function(_data) {
				if(_data.status_code == '10000') {
					this.edit = true;
					this.cc_id = _data.data.cc_id;
					this.coname = _data.data.cc_company_name;
					this.cotel = _data.data.cc_company_phone;
					if(sessionStorage.getItem('detailAddress')) {
						this.value = sessionStorage.getItem('detailAddress').split(',');
					} else {
						this.value.push(_data.data.cc_company_province);
						this.value.push(_data.data.cc_company_city);
						this.value.push(_data.data.cc_company_dist);
					}
					if(sessionStorage.getItem('detailAddr_lng')) {
						$('.detailAddr').attr('data-lng', sessionStorage.getItem('detailAddr_lng'));
						$('.detailAddr').attr('data-lat', sessionStorage.getItem('detailAddr_lat'));
						$('.detailAddr').html(sessionStorage.getItem('detailAddr'));
					} else {
						$('.detailAddr').html(_data.data.cc_company_detail_address);
						$('.detailAddr').attr('data-lng', _data.data.cc_lng);
						$('.detailAddr').attr('data-lat', _data.data.cc_lat);
					}
					$('.storeIcon').css('background-image', 'url(https://two.zhiqunale.cn/' + _data.data.cc_company_zizhi_photo + ')');
				}
			},
			detailAddress: function() {
				if(this.value.length != 0) {
					sessionStorage.setItem('detailAddress', $.trim($('.addr').text()).split(' '));
					this.$router.push({
						path: '/detailAddr'
					});
				} else {
					alert('请选择省市区');
				}
			},
			submitCerti: function() {
				var path = 'https://two.zhiqunale.cn/paper/user/user_company_authentication';
				var params = {
					uid: this.$store.state.loginUser.uid,
					device_number: 'pc_online',
					type: this.$route.params.key,
					company_name: this.coname,
					company_detail_address: $('.detailAddr').html(),
					company_province: $.trim($('.addr').text()).split(' ')[0],
					company_city: $.trim($('.addr').text()).split(' ')[1],
					company_dist: $.trim($('.addr').text()).split(' ')[2],
					lng: $('.detailAddr').attr('data-lng'),
					lat: $('.detailAddr').attr('data-lat'),
					company_phone: this.cotel
				}
				if($('.storeIcon').css('background-image')) {
					params.company_zizhi_photo = $('.storeIcon').css('background-image').split('"')[1].split('https://two.zhiqunale.cn/')[1];
				}
				this.post(params, path, this.successCerti);
			},
			successCerti: function(_data) {
				if(_data.status_code == '10000') {
					this.$router.push({
						path: '/my'
					});
				} else {
					alert(_data.msg);
				}
			},
			uploadIcon: function(e) {
				//上传图片
				var files = e.target.files || e.dataTransfer.files;
				if(!files.length) {
					return;
				}
				this.createIcon(e, files[0]);
			},
			createIcon: function(event, file) {
				var image = new Image();
				var reader = new FileReader();
				reader.onload = (e) => {
					lrz(e.target.result)
						.then(function(rst) {
							// 处理成功会执行
							$.ajax({
								type: 'post',
								url: 'https://two.zhiqunale.cn/paper/img/receivePcFile',
								data: {
									pic: rst.base64
								},
								success: function(data) {
									$($(event.target)).parents('a').css({
										'background-image': 'url(https://two.zhiqunale.cn/' + data.data + ')'
									});
								},
								error: function(XMLHttpRequest, textStatus, errorThrown) {
									alert('图片上传失败');
								}
							});
						})
						.catch(function(err) {
							// 处理失败会执行
							alert('图片上传失败');
						})
				};
				reader.readAsDataURL(file);
			}
		}
	}
</script>

<style scoped="scoped">
	.detail-upload a {
		width: 212px;
		height: 212px;
		background-image: url('../../assets/img/my_renzheng_upload.png');
	}
	
	.message {
		width: 100%;
		overflow-x: hidden;
		height: 100%;
		overflow-y: scroll;
	}
	
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
		top: 3px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
	
	.user-info {
		font-size: 32px;
		color: #333;
		margin-top: 18px;
		background-color: #fff;
	}
	
	.user-info>div,
	.uploadImg p {
		height: 100px;
		line-height: 100px;
		border-bottom: 1px solid #E0E0E0;
		padding: 0 30px;
		box-sizing: border-box;
	}
	
	.user-info input,
	.user-info .addr,
	.user-info .detailAddr {
		margin-left: 50px;
		font-size: 32px;
		color: #999;
		border: none;
		outline: none;
		display: inline-block;
		width: 70%;
		vertical-align: middle;
	}
	
	.user-info .addr {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.submit {
		margin-top: 100px;
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
	
	input::-webkit-input-placeholder {
		color: #999;
	}
	
	.uploadImg {
		margin-top: 14px;
		font-size: 32px;
		color: #333;
		background-color: #fff;
	}
	
	.uploadImg>div {
		padding: 54px 30px;
		box-sizing: border-box;
	}
	
	.tip {
		margin-top: 18px;
		font-size: 28px;
		color: #999;
		padding-bottom: 236px;
		text-align: left;
		padding-left: 30px;
		padding-right: 30px;
	}
	
	.tip span {
		color: #FF5000;
	}
	
	#required {
		color: #f10505;
		font-size: 26px;
		margin-left: 20px;
	}
	
	#required img {
		width: 28px;
		height: 31px;
		margin-right: 12px;
	}
</style>