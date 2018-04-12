<template>
	<div class="publish_supply">
		<div class="return_prelevel">
			<router-link class="return_icon" to="/sale">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</router-link>
			发布供应
		</div>
		<div class="publish_form">
			<p>
				<span>货品名称</span>
				<input type="text" v-model="product_name" placeholder="请填写货品规格" />
			</p>
			<p>
				<span>货品价格（元）</span>
				<!--<router-link to="/supplyPrice">-->
				<input type="text" v-model="product_price" placeholder="请填写货品价格" />
				<!--</router-link>-->
			</p>
			<p>
				<span>供货量（吨）</span>
				<input type="text" v-model="product_weight" placeholder="请填写供货量" />
			</p>
			<p id="supply_date">
				<span>起止时间</span>
				<datetime v-model="start_date" style='width: 1%;' placeholder="开始时间" @on-change="changeStart"></datetime>--
				<datetime v-model="end_date" style='width: 1%;' placeholder="结束时间" @on-change="changeEnd"></datetime>
			</p>
			<p>
				<span>发货地址</span>
				<router-link to="/myAddress">
					<input type="text" v-model="location" placeholder="请选择地址" />
				</router-link>
			</p>
			<p>
				<span>详细地址</span>
				<input type="text" v-model="details" placeholder="请输入详细收货地址" />
			</p>
			<p>
				<span>货品描述</span>
				<textarea placeholder="请填写货品描述" v-model="beizhu"></textarea>
			</p>
		</div>
		<div class="publish_imgs">
			<div class="detail-upload">
				<a>
					<input class="img" type="file" accept="image/*" @change="upload($event)" />
				</a>
				<b>上传真实的图片（最多10张）</b>
			</div>
			<ul class="upload-list">
			</ul>
		</div>
		<div class="submit_publish" @click="release">确认发布</div>
		<p class="fabuguifan">
			<a>纸去哪了发布规范</a>
		</p>
	</div>
</template>

<script>
	import { Datetime } from 'vux'
	export default {
		components: {
			Datetime
		},
		data() {
			return {
				product_name: '',
				product_price: '',
				product_weight: '',
				value1: '',
				start_date: '',
				end_date: '',
				beizhu: '',

				beizhu: '',
				address: {
					a_id: "114",
					city: "合肥市",
					detail: "南二环100号",
					dist: "高新区",
					lat: "31.82658",
					lng: "117.23344",
					province: "安徽省"
				},
				details: '',
				location: ''

			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				if(from.path == '/myAddress') {
					console.log(vm.$route.query);
					vm.address = vm.$route.query;
				}
			})
		},
		mounted: function() {
			console.log(this.address)
			this.details = this.address.detail;
			this.location = this.address.province + this.address.city + this.address.dist;
			$('.upload-list').delegate('li', 'click', function() {
				$(this).remove();
			});
		},
		methods: {
			changeStart(value) {
				console.log('changeStart', value);
				this.start_date = value;
			},
			changeEnd(value) {
				console.log('changeEnd', value);
				this.end_date = value;
			},
			//上传图片
			upload: function(e) {
				if($('.upload-list li').length < 10) {
					this.upLoadImg(e);
				} else {
					alert('上传图片已达上限')
				}

			},

			release() {
				var url = 'https://two.zhiqunale.cn//paper/papersale/publishsupply';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					product_price: this.product_price,
					product_weight: this.product_weight,
					sp_product_name: this.product_name,
					send_address_id: this.address.a_id,
					sp_send_address: this.address.detail,
					sp_send_province: this.address.province,
					sp_send_city: this.address.city,
					sp_send_dist: this.address.dist,
					sp_lng: this.address.lng,
					sp_lat: this.address.lat,
					sp_start_time: this.start_date,
					sp_end_time: this.end_date,
					beizhu: this.beizhu
				};
				var pro_photos = [];
				if($('.upload-list li').length < 2) {
					alert('至少上传两张图片')
				} else {
					params.sp_fengmian_photo = $('.upload-list li').eq(0).find('img').attr('src').split('https://two.zhiqunale.cn')[1];
					$('.upload-list li').each(function(i) {
						if(i > 0) {
							pro_photos.push($('.upload-list li').eq(i).find('img').attr('src').split('https://two.zhiqunale.cn')[1]);
						}
					});
					params.sp_product_photos = pro_photos.join();
				}
				this.post(params, url, this.callBack);
			},
			callBack(data) {
				console.log(data)
			}
		}
	}
</script>

<style>
	#supply_date div {
		width: 28%;
		display: inline-block;
	}
	
	#supply_date span {
		margin: 0;
	}
</style>