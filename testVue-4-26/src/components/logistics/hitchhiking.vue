<template>
	<div>
		<div class="return_prelevel">
			<a class="return_icon" onclick="window.history.go(-1)">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</a>
			找顺路车
			<router-link to="/appointment" class="logistics_order">历史预约</router-link>
		</div>
		<div class="hitchhiking">
			<div class="select_area">
				<a>
					<x-address @click.native="selsectArea1" class="address_select" title=" " v-model="value1" raw-value :list="addressData1" hide-district placeholder="出发地">
					</x-address>
					<cell class="address_show" :title="title1" :value="getName(value1)">
					</cell>
				</a>
				<a>
					<x-address @click.native="selsectArea2" class="address_select" title=" " v-model="value2" raw-value :list="addressData2" hide-district placeholder="目的地">
					</x-address>
					<cell class="address_show" :title="title2" :value="getName(value2)">
					</cell>
				</a>
				<datetime class="dateshow" v-model="valuedate" placeholder='出发日期'></datetime>
				<button @click="toFilter">筛选</button>
			</div>
			<p class="tip">
				<img src="../../assets/img/wuliu_tishi.png" alt="" /> 预约前请先打电话联系对方！
			</p>
			<scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 150px;" ref="myscroller">
				<ul class="hitchhiking_list">
					<li v-for='item in carList'>
						<h3>
            <img :src="item.d_headurl" alt=""/>
            {{item.d_name}}
          </h3>
						<div class="contents">
							<h4>
            {{item.dln_start_area_city}} <img src="../../assets/img/wuliu_jiantou.png" alt=""/> {{item.dln_end_area_city}}
          </h4>
							<p>出发日期：{{item.dln_start_date}}</p>
							<p>承载量（吨）：{{item.dln_can_weight}}</p>
							<p v-if="item.dln_is_mianyi==1">费用（元）：{{item.dln_fee}}</p>
							<p v-else-if="item.dln_is_mianyi==2">费用（元）：面议</p>
						</div>
						<div>
							<a :href="'tel:'+item.d_phone">
								<img src="../../assets/img/wuliu_phone.png" alt="" />联系
							</a>
							<a :data-id='item.dln_id' @click="AppointDriver(item.dln_id)">
								<img src="../../assets/img/wuliu_appointment.png" alt="" />预约
							</a>
						</div>
					</li>
				</ul>
			</scroller>
		</div>
	</div>
</template>

<script>
	import { Datetime, XAddress, Cell, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'
	export default {
		components: {
			XAddress,
			Cell,
			Datetime
		},
		created: function() {
			$('.address_show').attr('title', '出发地');
		},
		data: function() {
			return {
				active: false,
				value1: [],
				title1: '出发地',
				value2: [],
				title2: '目的地',
				addressData1: ChinaAddressV4Data,
				addressData2: ChinaAddressV4Data,
				showAddress: false,
				valuedate: '',
				start_city: '',
				end_city: '',
				carList: [],
				page: 1,
				nonedata: false
			}
		},
		mounted() {
			this.getFindCar();
		},
		methods: {
			doShowAddress: function() {
				this.showAddress = true;
				setTimeout(function() {
					this.showAddress = false;
				}, 500)
			},
			getName: function(value) {
				var addr = value2name(value, ChinaAddressV4Data).split(' ')[1];
				return addr;
			},
			selsectArea1: function() {
				this.title1 = '';

			},
			selsectArea2: function() {
				this.title2 = '';

			},
			infinite(done) {
				this.page++;
				this.getFindCar();
			},
			refresh() {
				this.page = 1;
				this.carList=[];
				this.getFindCar();
			},
			getFindCar() {
				if(this.getName(this.value1)) {
					this.start_city = this.getName(this.value1);
				}
				if(this.getName(this.value2)) {
					this.end_city = this.getName(this.value2);
				}
				var url = 'https://two.zhiqunale.cn/paper/driverneed/userfindroadcar';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					start_city: this.start_city,
					end_city: this.end_city,
					page: this.page,
					size: 10
				};
				if(this.valuedate) {
					params.start_date = this.DateToUnix(this.valuedate);
				}
				this.post(params, url, this.getFindCarBack)
			},
			getFindCarBack(data) {
				if(data.status_code == 10000) {
					if(data.data.length == 0) {
						this.nonedata = true;
					}
					for(var i in data.data) {
						data.data[i].dln_start_date = this.getLocalTime(data.data[i].dln_start_date)
					}
					this.$refs.myscroller.finishPullToRefresh();
					this.$refs.myscroller.finishInfinite(this.nonedata);
					this.$refs.myscroller.resize();
					for(var i in data.data) {
						this.carList.push(data.data[i]);
					}
					//this.carList = data.data;
				}
			},
			toFilter() {
				this.carList=[];
				this.page=1;
				this.getFindCar();
			},
			AppointDriver($id) {
				var url = 'https://two.zhiqunale.cn/paper/driverneed/userappointmentdriver';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					driver_need_id: $id
				};
				this.post(params, url, this.AppointDriverBack);
			},
			AppointDriverBack(data) {
				if(data.status_code == 10000) {
					alert(data.msg);
				} else if(data.status_code == 10004) {
					alert(data.msg);
				}
			}
		}

	}
</script>

<style scoped>
	.return_prelevel,
	.select_area,
	.tip {
		position: relative;
		z-index: 999;
	}
	
	.tip {
		background-color: #F1F1F1;
	}
	
	.select_area {
		padding: 30px 10px;
	}
	
	.select_area a {
		position: relative;
		width: 130px;
		display: inline-block;
		height: 46px;
		overflow: hidden;
		margin-right: 20px;
	}
	
	.address_select {
		position: absolute;
		top: 5px;
		left: 0;
		opacity: 0;
		width: 78%;
		height: 100%;
		z-index: 100;
	}
	
	.address_show {
		position: absolute;
		top: 5px;
		left: 0;
		width: 78%;
		height: 100%;
	}
	
	.select_area .dateshow {
		position: relative;
		top: 10px;
		width: auto;
		/*padding-right: ;*/
	}
	
	.contents {
		background-color: #fafafa;
		border: none !important;
	}
	
	.hitchhiking_list p {
		padding-bottom: 40px;
		margin-bottom: 0 !important;
	}
	
	.hitchhiking_list h4 {
		margin-top: 0 !important;
		padding-top: 40px;
	}
	
	.hitchhiking_list h4 img {
		width: 50px;
		height: 16px;
	}
</style>