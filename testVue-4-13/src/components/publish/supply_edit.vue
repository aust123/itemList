<template>
	<div class="publish_supply">
		<div class="return_prelevel">
			<router-link class="return_icon" to="/sale">
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
				<datetime v-model="start_date"  @on-change="changeStart"></datetime>--
				<datetime v-model="end_date"  @on-change="changeEnd"></datetime>
			</p>
			<p>
				<span>发货地址</span>
				<input type="text" v-model="location" />
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
					<input class="img" type="file" @change="uploadImg($event)" />
				</a>
			</div>
			<ul class="upload-list">
				<li class="simg" v-for="item in product_photos">
					<img :src="'https://two.zhiqunale.cn/'+item" alt="" />
				</li>							
			</ul>
		</div>
		<div class="submit_publish">确认发布</div>
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
				product_photos:[],
				editQuoteInfo: {}
			}
		},
		mounted: function() {
			//console.log(this.$route.query);
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
				if(data.status_code == 10000) {
					this.editQuoteInfo = data.data;
					this.pro_name = data.data.sp_product_name;
					this.pro_price = data.data.sp_product_price;
					this.pro_weight = data.data.sp_product_weight;
					this.start_date = this.getLocalTime1(data.data.sp_start_time);
					this.end_date = this.getLocalTime1(data.data.sp_end_time);
					this.beizhu = data.data.sp_beizhu;
					this.details = data.data.sp_send_address;
					this.location = data.data.sp_send_province + data.data.sp_send_city + data.data.sp_send_dist;
					this.product_photos=data.data.sp_product_photos
				}
			},
			changeStart(value) {
				console.log('changeStart', value);
				this.start_date = value;
			},
			changeEnd(value) {
				console.log('changeEnd', value);
				this.end_date = value;
			},
			//上传图片
			uploadImg: function(e) {
				if($('.upload-list li').length < 10) {
					var files = e.target.files || e.dataTransfer.files;
					if(!files.length) {
						return;
					}
					this.createImage(files[0]);
				}
			},
			createImage: function(file) {
				var image = new Image();
				var reader = new FileReader();
				var ullist = document.getElementsByClassName('upload-list')[0];
				reader.onload = (e) => {
					var html = '<li class="simg"><img src="' + e.target.result + '"/></li>';
					$('.upload-list').append(html);
				};
				reader.readAsDataURL(file);
			}
		}
	}
</script>

<style >
	.publish_form input,
	.publish_form textarea {
		color: #333;
	}
	#supply_date div {
		width: 28%;
		display: inline-block;
	}
	
	#supply_date span {
		margin: 0;
	}
</style>