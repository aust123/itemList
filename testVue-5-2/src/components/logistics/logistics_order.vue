<template>
	<div>
		<div class="return_prelevel">
			<a class="return_icon" onclick="window.history.go(-1)">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</a>
			物流订单
		</div>
		<div class="hitchhiking">
			<scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 40px;" ref="myscroller">
				<ul class="hitchhiking_list">
					<li v-for="item in LogisticsOrderList">
						<h3>
            <img :src="item.d_headurl" alt=""/>
            {{item.d_name}}
          </h3>
						<p class="citys">
							<span>{{item.lo_start_area_city}}</span> <img src="../../assets/img/wuliu_jiantou.png" /><span>{{item.lo_end_area_city}}</span>
							<b v-if="item.lo_order_state==1">物流订单开始</b>
							<b v-else-if="item.lo_order_state==2">已发货</b>
							<b v-else-if="item.lo_order_state==3">待支付</b>
							<b v-else-if="item.lo_order_state==4">已完成</b>
							<b v-else-if="item.lo_order_state==5">已作废</b>
						</p>
						<p>出发日期：{{item.lo_start_date}}</p>
						<p v-if="item.lo_is_pay_xianxia==1">报价（元）：{{item.lo_fee}}</p>
						<p v-else-if="item.lo_is_pay_xianxia==2">报价（元）：线下支付</p>
						<!--<p>承载量（吨）：30</p>-->
						<p>
							备注：
							<span>{{item.lo_beizhu}}</span>
						</p>
						<div>
							<a :href="'tel:'+item.d_phone">联系</a>
							<template v-if='item.lo_order_state==3'>
								<a>付款</a>
								<a @click="Complete(item.lo_id,item.lo_driver_id)" :data-lid="item.lo_id" :data-did='item.lo_driver_id'>完成</a>
							</template>
						</div>
					</li>
				</ul>
			</scroller>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				LogisticsOrderList: [],
				page: 1,
				nonedata: false
			}
		},
		mounted() {
			this.getDataList();
		},
		methods: {
			infinite(done) {
				this.page++;
				this.getDataList();
			},
			refresh() {
				this.page = 1;
				this.LogisticsOrderList=[];
				this.getDataList();
			},
			getDataList() {
				var url = 'https://two.zhiqunale.cn/paper/driverneed/usergetlogisticorderlist';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					page: this.page,
					size: 10
				};
				this.post(params, url, this.getLogisticsOrderList)
			},
			getLogisticsOrderList(data) {
				if(data.status_code == 10000) {
					if(data.data.length == 0) {
						this.nonedata = true;
					}
					for(var i in data.data) {
						data.data[i].lo_start_date = this.getLocalTime1(data.data[i].lo_start_date);
					}
					this.$refs.myscroller.finishPullToRefresh();
					this.$refs.myscroller.finishInfinite(this.nonedata);
					this.$refs.myscroller.resize();
					for(var i in data.data) {
						this.LogisticsOrderList.push(data.data[i]);
					}
					//this.LogisticsOrderList = data.data;
				}

			},
			Complete($lid, $did) {
				var url = 'https://two.zhiqunale.cn/paper/driverneed/userfinishlogisticorder';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					lo_id: $lid,
					lo_driver_id: $did
				};
				this.post(params, url, this.getcomplete)
			},
			getcomplete(data) {
				if(data.status_code == 10000) {
					alert(data.msg)
					window.location.reload(true);
				}
			},
			toPay() {
				var url = 'https://two.zhiqunale.cn/paper/driverneed/userpaylogisticmoney';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					lo_id: $lid,
					lo_driver_id: $did,
					//pay_password:,
					//channel:
				};
				this.post(params, url, this.getPayBack)
			},
			getPayBack(data) {
				console.log(data);
			}
		}
	}
</script>

<style scoped>
	.return_prelevel{
		position: relative;
		z-index: 99;
	}
	.hitchhiking_list h3 {
		border-bottom: 1px solid #e0e0e0;
		margin-bottom: 30px;
	}
	
	.hitchhiking_list li {
		margin-bottom: 0;
		margin-top: 14px;
	}
	
	.hitchhiking_list p span {
		display: inline-block;
		width: 83%;
		vertical-align: text-top;
	}
	
	.hitchhiking_list div {
		padding: 15px 30px;
		border-top: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
		text-align: right;
	}
	
	.hitchhiking_list div a {
		width: 158px;
		height: 59px;
		border: 2px solid #ff5000;
		border-radius: 10px;
		line-height: 59px;
		color: #ff5000;
		margin-left: 20px;
	}
	
	.citys {}
	
	.citys span {
		color: #ff5000;
		width: auto !important;
	}
	
	.citys img {
		width: 50px;
		margin: 0 15px 0 5px;
	}
	
	.citys b {
		float: right;
		color: #208DF0;
	}
</style>