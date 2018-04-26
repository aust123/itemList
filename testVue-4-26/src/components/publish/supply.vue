<template>
	<div class="publish_supply">
		<div class="return_prelevel">
			<a class="return_icon" href="javascript:history.go(-1);">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</a>
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
				<datetime v-model="start_date"  class="dateshow" placeholder='开始时间'></datetime>--
				<datetime v-model="end_date"  class="dateshow" placeholder='结束时间'></datetime>
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
				start_date: '',
				end_date: '',
				beizhu: '',				
				address: {},
				details: '',
				location: ''

			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				if(from.path == '/myAddress') {
					console.log(vm.$route);
					vm.details = vm.$route.query.detail;
					vm.location=vm.$route.query.province+vm.$route.query.city+vm.$route.query.dist;
					vm.address=vm.$route.query;
				}
				
			})
		},
		mounted: function() {
			if(this.address.length>0){
				this.location = this.address.province + this.address.city + this.address.dist;
			}			
			$('.upload-list').delegate('li', 'click', function() {
				$(this).remove();
			});
		},
		methods: {			
			//上传图片
			upload: function(e) {
				/*if($('.upload-list li').length < 10) {
					this.upLoadImg(e);
				} else {
					alert('上传图片已达上限')
				}*/
				$('.upload-list li').length < 10 ?this.upLoadImg(e) : alert('上传图片已达上限') ;

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
					sp_start_time: this.DateToUnix(this.start_date),
					sp_end_time: this.DateToUnix(this.end_date),
					beizhu: this.beizhu
				};
				var pro_photos = [];
				if($('.upload-list li').length < 2) {
					alert('至少上传两张图片')
				} else {
					params.sp_fengmian_photo = $('.upload-list li').eq(0).find('img').attr('src').split('https://two.zhiqunale.cn')[1];
					$('.upload-list li').each(function(i) {						
							pro_photos.push($('.upload-list li').eq(i).find('img').attr('src').split('https://two.zhiqunale.cn')[1]);						
					});
					params.sp_product_photos = pro_photos.join();
				}
				this.post(params, url, this.callBack);
			},
			callBack(data) {
				console.log(data);
				if(data.status_code==10000){
					alert(data.msg);
					this.$router.push({
						path: '/myQuote'
					})
				}
			}
		}
	}
</script>

<style>	
	#supply_date .dateshow{
		width: auto;
		display: inline-block;
		overflow: hidden;
		position: relative;
		top: 10px;
	}
</style>