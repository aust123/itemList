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
				<b>{{pro_name}}</b>			
			</p>
			<p>
				<span>货品价格（元）</span>				
				<b>{{pro_price}}</b>				
			</p>
			<p>
				<span>供货量（吨）</span>				
				<b>{{pro_weight}}</b>					
			</p>
			<p id="supply_date">
				<span>起止时间</span>
				<b>{{start_date}}</b>--<b>{{end_date}}</b>	
			</p>
			<p>
				<span>发货地址</span>				
				<b>{{location}}</b>	
			</p>
			<p>
				<span>详细地址</span>
				<b>{{details}}</b>	
			</p>
			<p>
				<span>货品描述</span>
				<textarea placeholder="请填写货品描述" v-model="beizhu"></textarea>
			</p>
		</div>
		<div class="publish_imgs">			
			<ul class="upload-list">
				<li class="simg" v-for="item in product_photos">
					<img :src="'https://two.zhiqunale.cn/'+item" alt="" />
				</li>
			</ul>
		</div>
		
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
				pro_name: '',
				pro_price: '',
				pro_weight: '',				
				start_date: '',
				end_date: '',
				beizhu: '',			
				details: '',
				location: '',
				product_photos:[]
			}
		},
		mounted(){
			this.goods_id = this.$route.query.id;
			var url = 'https://two.zhiqunale.cn/paper/papersale/getgoodsmsgbeforeeditgoods';
			var params = {
				user_id: this.$store.state.loginUser.uid,
				device_number: this.$store.state.loginUser.device_number,
				goods_id: this.goods_id,
				state: this.$route.query.state
			}
			this.post(params, url, this.getQuoteInfo);
		},
		methods:{
			getQuoteInfo(data) {
				//console.log(data)
				if(data.status_code == 10000) {
					this.editQuoteInfo = data.data;
					this.pro_name = data.data.sp_product_name;
					this.pro_price = data.data.sp_product_price;
					this.pro_weight = data.data.sp_product_weight;
					this.start_date = this.getLocalTime(data.data.sp_start_time);
					this.end_date = this.getLocalTime(data.data.sp_end_time);
					this.beizhu = data.data.sp_beizhu;
					this.details = data.data.sp_send_address;
					this.location = data.data.sp_send_province + data.data.sp_send_city + data.data.sp_send_dist;
					this.product_photos = data.data.sp_product_photos						
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