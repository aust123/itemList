<template>
	<div>
		<div class="return_prelevel">
			<router-link class="return_icon" to='/myLogistics'>
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</router-link>
			发布需求
		</div>
		<div class="publish_form pub_logistics">
			<p>
				<span>出发地</span>
				<router-link :to="{path:'/myAddress',query:{logistics:1}}" class='start_area'><input type="text" style="width: 90%;" v-model="location_start" placeholder="请选择发货地址" /></router-link>
			</p>
			<p>
				<span>目的地</span>
				<router-link :to="{path:'/myAddress',query:{logistics:2}}" class='end_area'><input type="text" style="width: 90%;" v-model="location_end" placeholder="请选择收货地址" /></router-link>
			</p>
			<p>
				<span>发货日期</span>
				<datetime class="dateshow" v-model="valuedate" placeholder='请选择发货日期'></datetime>
			</p>
			<p>
				<span>货物品类</span>
				<input type="text" v-model="name" placeholder="请填写货物品类" />
			</p>
			<p>
				<span>货物重量</span>
				<input type="text" v-model="weight" placeholder="请填写货物重量" />
			</p>
			<p>
				<span>联系方式</span>
				<input type="tel" v-model="phone" placeholder="请填写联系方式" />
			</p>
			<p>
				<span>备注</span><br/>
				<textarea v-model="beizhu" placeholder="请填写您的需求备注。"></textarea>
			</p>
		</div>
		<div class="submit_publish" @click="publishBtn">确认发布</div>
	</div>
</template>

<script>
	import { Datetime } from 'vux'
	export default {
		components: {
			Datetime
		},
		data: function() {
			return {
				valuedate: '',
				weight: '',
				phone: '',
				name: '',
				beizhu: '',
				location_start: '',
				location_startId: '',
				location_end: '',
				location_endId: '',
				ln_id: ''
			}
		},
		beforeRouteEnter(to, from, next) {
			console.log(from.path);

			next(vm => {

				if(from.path == '/myAddress') {
					//console.log(vm.$route);
					if(sessionStorage.start_area) {
						vm.location_start = sessionStorage.start_area;
						vm.location_startId = sessionStorage.start_id;
					}
					if(sessionStorage.end_area) {
						vm.location_end = sessionStorage.end_area;
						vm.location_endId = sessionStorage.end_id;
					}
					if(!vm.$route.query.end) {
						vm.location_startId = vm.$route.query.a_id;
						vm.location_start = vm.$route.query.province + vm.$route.query.city + vm.$route.query.dist + vm.$route.query.detail;
						//vm.address = vm.$route.query;
						sessionStorage.start_area = vm.location_start;
						sessionStorage.start_id = vm.location_startId;
					} else {
						vm.location_endId = vm.$route.query.a_id;
						vm.location_end = vm.$route.query.province + vm.$route.query.city + vm.$route.query.dist + vm.$route.query.detail;
						sessionStorage.end_area = vm.location_end;
						sessionStorage.end_id = vm.location_endId;
					}
				} else if(from.path == '/myLogistics') {
					console.log(vm.$route.query.lid);
					if(vm.$route.query.lid) {
						console.log('aaaaa')
						sessionStorage.lid = JSON.stringify(vm.$route.query.lid);
						vm.valuedate = vm.$route.query.lid.ln_send_date;
						vm.weight = vm.$route.query.lid.ln_goods_weight;
						vm.phone = vm.$route.query.lid.ln_contact_way;
						vm.name = vm.$route.query.lid.ln_goods_category;
						vm.beizhu = vm.$route.query.lid.ln_beizhu;
						vm.location_start = vm.$route.query.lid.ln_start_area_province + vm.$route.query.lid.ln_start_area_city + vm.$route.query.lid.ln_start_area_dist + vm.$route.query.lid.ln_start_area_detail;
						vm.location_startId = vm.$route.query.lid.ln_start_address_id;
						vm.location_end = vm.$route.query.lid.ln_end_area_province + vm.$route.query.lid.ln_end_area_city + vm.$route.query.lid.ln_end_area_dist + vm.$route.query.lid.ln_end_area_detail;
						vm.location_endId = vm.$route.query.lid.ln_end_address_id;
						vm.ln_id = vm.$route.query.lid.ln_id;
					} else {
						sessionStorage.removeItem('lid');
					}
					sessionStorage.removeItem('end_area');
					sessionStorage.removeItem('end_id');
					sessionStorage.removeItem('start_area');
					sessionStorage.removeItem('start_id');
				}
			})
		},
		mounted() {
			if(this.$route.query.lid || this.$route.query.province) {
				if(sessionStorage.lid != 'undefined' && sessionStorage.lid) {
					var lid = JSON.parse(sessionStorage.lid);
					this.valuedate = lid.ln_send_date;
					this.weight = lid.ln_goods_weight;
					this.phone = lid.ln_contact_way;
					this.name = lid.ln_goods_category;
					this.beizhu = lid.ln_beizhu;
					this.location_start = lid.ln_start_area_province + lid.ln_start_area_city + lid.ln_start_area_dist + lid.ln_start_area_detail;
					this.location_startId = lid.ln_start_address_id;
					this.location_end = lid.ln_end_area_province + lid.ln_end_area_city + lid.ln_end_area_dist + lid.ln_end_area_detail;
					this.location_endId = lid.ln_end_address_id;
					this.ln_id = lid.ln_id;
				}
			}

		},
		methods: {
			publishBtn() {
				var url = 'https://two.zhiqunale.cn/paper/driverneed/usermodifylogisticneed';
				if(this.valuedate) {
					var params = {
						user_id: this.$store.state.loginUser.uid,
						device_number: this.$store.state.loginUser.device_number,
						start_address_id: this.location_startId,
						end_address_id: this.location_endId,
						send_date: this.DateToUnix(this.valuedate),
						goods_cate: this.name,
						goods_weight: this.weight,
						contact_way: this.phone,
						beizhu: this.beizhu
					}
				} else {
					alert('请选择发货日期')
				}
				if(this.ln_id) {
					params.type = 2; //修改是2
					params.ln_id = this.ln_id; //修改时传
				} else {
					params.type = 1; //发布时1
				}
				this.post(params, url, this.publishBack)
			},
			publishBack(data) {
				if(data.status_code == 10000) {
					sessionStorage.removeItem('lid');
					alert(data.msg);
					this.$router.push({
						path: '/myLogistics'
					})
				}
			}
		}
	}
</script>

<style scoped>
	.pub_logistics a {
		color: #999;
		display: inline-block;
		background-image: url('../../assets/img/jiantou_right.png');
		background-repeat: no-repeat;
		background-size: 17px 31px;
		background-position: right center;
		width: 75%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.pub_logistics input {
		width: 72%;
	}
	
	.pub_logistics .dateshow {
		width: 70%;
	}
	
	.pub_logistics textarea {
		margin-top: 30px;
		padding-top: 30px;
		border-top: 1px solid #e0e0e0;
		width: 100%;
	}
</style>