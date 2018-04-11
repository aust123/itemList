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
				<router-link to="/supplyPrice">
					<input type="text" v-model="product_price" placeholder="请填写货品价格" />
				</router-link>
			</p>
			<p>
				<span>供货量（吨）</span>
				<input type="text" v-model="product_weight" placeholder="请填写供货量" />
			</p>
			<p id="supply_date">
				<span>起止时间</span>
				<datetime v-model="start_date" style='width: 1%;' placeholder="开始时间" @on-change="change" ></datetime>--
				<datetime v-model="end_state" style='width: 1%;' placeholder="结束时间" @on-change="change" ></datetime>
			</p>		
			<p>
				<span>发货地址</span>
				<router-link to="/myAddress">
					<input type="text" placeholder="请选择地址" />
				</router-link>
			</p>
			<p>
				<span>详细地址</span>
				<input type="text" placeholder="请输入详细收货地址" />
			</p>
			<p>
				<span>货品描述</span>
				<textarea placeholder="请填写货品描述"></textarea>
			</p>
		</div>
		<div class="publish_imgs">
			<div class="detail-upload">
				<a>
					<input class="img" type="file" accept="image/*" @change="uploadImg($event)" />
				</a>
				<b>上传真实的图片（最多10张）</b>
			</div>
			<ul class="upload-list">
			</ul>
		</div>
		<div class="submit_publish">确认发布</div>
		<p class="fabuguifan">
			<a>纸去哪了发布规范</a>
		</p>
	</div>
</template>

<script>
	import { Datetime} from 'vux'
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
			}
		},
		mounted: function() {
			$('.upload-list').delegate('li', 'click', function() {
				$(this).remove();
			})
		},
		methods: {
			change(value) {
				console.log('change', value)
			},
			log(str1, str2 = '') {
				console.log(str1, str2)
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
	#supply_date div {
		width: 28%;
		display: inline-block;
	}
	#supply_date span{
		margin: 0;
	}
</style>