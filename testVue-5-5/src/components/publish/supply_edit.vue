<template>
	<div class="publish_supply">
		<div class="return_prelevel">
			<router-link to='/myQuote/soldout' class="return_icon">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</router-link>
			发布供应-编辑
		</div>
		<div class="publish_form">
			<p>
				<span>货品规格</span>
				<input type="text" v-model="pro_name" />
			</p>
			<p>
				<span>货品价格（元）</span>
				<input type="text" v-model='pro_price' />
				<!--	<label>30吨起</label>-->
			</p>
			<p>
				<span>供货量（吨）</span>
				<input type="text" v-model="pro_weight" />
			</p>
			<p id="supply_date">
				<span>起止时间</span>
				<datetime v-model="start_date" class="dateshow" placeholder='开始时间'></datetime>--
				<datetime v-model="end_date" class="dateshow" placeholder='结束时间'></datetime>
			</p>
			<p>
				<span>发货地址</span>
				<router-link :to="{path:'/myAddress',query:{edit:goods_id}}">
					<input type="text" v-model="location" placeholder="请选择地址" />
				</router-link>
			</p>
			<p>
				<span>详细地址</span>
				<input type="text" style="width: 70%;" v-model="details" />
			</p>
			<p>
				<span>货品描述</span>
				<textarea placeholder="请填写货品描述" v-model="beizhu"></textarea>
			</p>
		</div>
		<div class="publish_imgs">
			<div class="detail-upload">
				<a>
					<input class="img" type="file" @change="upload($event)" />
				</a>
			</div>
			<ul class="upload-list">
				<li class="simg" v-for="item in product_photos">
					<img :src="'https://two.zhiqunale.cn/'+item" alt="" />
				</li>
			</ul>
		</div>
		<div class="submit_publish" @click="releaseEdit">确认发布</div>
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
				goods_id: '',
				pro_name: '',
				pro_price: '',
				pro_weight: '',
				start_date: '',
				end_date: '',
				beizhu: '',
				details: '',
				location: '',
				product_photos: [],
				editQuoteInfo: {},
				address: {},
				fengmian_photo: ''
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				if(from.path == '/myAddress') {
					//console.log(vm.$route);
					vm.details = vm.$route.query.detail;
					vm.location = vm.$route.query.province + vm.$route.query.city + vm.$route.query.dist;
					vm.address = vm.$route.query;
				}

			})
		},
		mounted: function() {
			this.goods_id = this.$route.query.id;
			var url = 'https://two.zhiqunale.cn/paper/papersale/getgoodsmsgbeforeeditgoods';
			var params = {
				user_id: this.$store.state.loginUser.uid,
				device_number: this.$store.state.loginUser.device_number,
				goods_id: this.goods_id,
				state: -1
			}
			this.post(params, url, this.getEditQuoteInfo);
			$('.upload-list').delegate('li', 'click', function() {
				$(this).remove();
			})
		},
		methods: {
			getEditQuoteInfo(data) {
				//console.log(data)
				if(data.status_code == 10000) {
					this.editQuoteInfo = data.data;
					this.pro_name = data.data.sp_product_name;
					this.pro_price = data.data.sp_product_price;
					this.pro_weight = data.data.sp_product_weight;
					this.start_date = data.data.sp_start_time;
					this.end_date = data.data.sp_end_time;
					this.beizhu = data.data.sp_beizhu;
					this.details = data.data.sp_send_address;
					this.location = data.data.sp_send_province + data.data.sp_send_city + data.data.sp_send_dist;
					this.product_photos = data.data.sp_product_photos,
						this.fengmian_photo = data.data.sp_fengmian_photo,
						this.address.a_id = data.data.sp_send_address_id,
						this.address.province = data.data.sp_send_province,
						this.address.city = data.data.sp_send_city,
						this.address.dist = data.data.sp_send_dist,
						this.address.lng = data.data.sp_lng,
						this.address.lat = data.data.sp_lat
				}
			},
			//上传图片
			upload: function(e) {
				/*if($('.upload-list li').length < 10) {
					this.upLoadImg(e);
				} else {
					alert('上传图片已达上限')
				}*/
				$('.upload-list li').length < 10 ? this.upLoadImg(e) : alert('上传图片已达上限');
			},
			releaseEdit() {
				var url = 'https://two.zhiqunale.cn/paper/papersale/editgoods';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					goods_id: this.goods_id,
					product_price: this.pro_price,
					product_weight: this.pro_weight,
					sp_product_name: this.pro_name,
					sp_send_address: this.details,
					send_address_id: this.address.a_id,
					sp_send_province: this.address.province,
					sp_send_city: this.address.city,
					sp_send_dist: this.address.dist,
					sp_lng: this.address.lng,
					sp_lat: this.address.lat,
					sp_start_time: this.start_date,
					sp_end_time: this.end_date,
					beizhu: this.beizhu
				}
				var pro_photos = [];
				if($('.upload-list li').length > 0) {
					params.sp_fengmian_photo = $('.upload-list li').eq(0).find('img').attr('src').split('https://two.zhiqunale.cn/')[1];
					$('.upload-list li').each(function(i) {
						pro_photos.push($('.upload-list li').eq(i).find('img').attr('src').split('https://two.zhiqunale.cn/')[1]);
					});
					params.sp_product_photos = pro_photos.join();
				}
				this.post(params, url, this.callBack);
			},
			callBack(data) {
				console.log(data);
				if(data.status_code == 10000) {
					alert(data.msg);
					this.$router.push({
						path: '/myQuote/soldout'
					})
				}
			}
		}
	}
</script>

<style>
	.publish_form input,
	.publish_form textarea {
		color: #333;
	}
	
	#supply_date .dateshow {
		width: auto;
		display: inline-block;
		overflow: hidden;
		position: relative;
		top: 10px;
	}
</style>