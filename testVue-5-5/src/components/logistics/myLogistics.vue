<template>
	<div class="my_logistics">
		<loading :show="show"></loading>
		<div class="return_prelevel">
			<router-link class="return_icon" to="/sale">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</router-link>
			我的物流需求
			<router-link to="/logisticsOrder" class="logistics_order">物流订单</router-link>
		</div>
		<scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 40px;" ref="myscroller">
			<ul class="logistics_list">
				<li class="pubing" v-for="item in NeedList" :data-id="item.ln_id" @click="toDetail($event,item.ln_id)">
					<p>
						<span>出发地：</span>
						<b>{{item.ln_start_area_city}}</b>
						<template v-if="item.is_overdue==0">
							<a v-if="item.ln_needs_state==1">发布中...</a>
							<a v-else-if="item.ln_needs_state==2">已预约</a>
							<a v-else-if="item.ln_needs_state==3">已完成</a>
						</template>
						<template v-else-if="item.is_overdue==1">
							<a>已过期</a>
						</template>
					</p>
					<p>
						<span>目的地：</span>
						<b>{{item.ln_end_area_city}}</b>
					</p>
					<p>
						<span>发货日期：{{item.ln_send_date}}</span>
					</p>
					<p>
						<span>货物重量（吨）：{{item.ln_goods_weight}}</span>
					</p>
					<div class="guoqi" v-if="item.is_overdue==0">
						<span>未处理（{{item.not_operate}}）</span>
						<span>已同意（{{item.has_operate}}）</span>
						<template v-if="item.ln_needs_state==1">
							<span class="edit" @click="editLogistics(item)" :data-lid='item'>编辑</span>
							<span class="cancel" @click="cancelLogistics(item.ln_id)" :data-lid='item.ln_id'>取消</span>
						</template>
					</div>
					<div v-if="item.is_overdue==1" class="guoqi">
						<span>未处理（{{item.not_operate}}）</span>
						<span>已同意（{{item.has_operate}}）</span>
					</div>
				</li>
			</ul>
		</scroller>
		<ul class="logistics_option">
			<li class="pub">
				<router-link to="/publishLogistics">
					<img src="../../assets/img/xunzhaowuliu_fabu.png" alt="" /> 发布需求
				</router-link>
			</li>
			<li class="find">
				<router-link to="/hitchhiking">
					<img src="../../assets/img/xunzhaowuliu_car.png" alt="" /> 找顺风车
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import { Loading } from 'vux'
	export default {
		components: {
			Loading
		},
		data() {
			return {
				NeedList: [],
				show: '',
				page: 1,
				nonedata: false
			}
		},
		mounted() {			
			this.getFDataList();		
		},
		methods: {
			getFDataList() {
				var url = 'https://two.zhiqunale.cn/paper/driverneed/getuserhistorylogisticneed';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					page: this.page,
					size: 10
				};
				this.show = true;
				this.post(params, url, this.getNeedList);
			},
			infinite(done) {
				this.page++;
				this.getFDataList();
			},
			refresh() {
				this.page = 1;
				this.NeedList=[];
				this.getFDataList();
			},
			getNeedList(data) {
				this.show = false;
				if(data.status_code == 10000) {
					if(data.data.length == 0) {
						this.nonedata = true;
					}
					for(var i in data.data) {
						data.data[i].ln_send_date = this.getLocalTime1(data.data[i].ln_send_date);
					};
					this.$refs.myscroller.finishPullToRefresh();
					this.$refs.myscroller.finishInfinite(this.nonedata);
					this.$refs.myscroller.resize();
					for(var i in data.data) {
						this.NeedList.push(data.data[i]);
					}
					//this.NeedList =data.data;
				}
			},
			toDetail(event, $id) {
				if(event.target.className != "cancel" && event.target.className != "edit") {
					this.$router.push({
						path: '/logisticsdetail',
						query: {
							id: $id
						}
					})
				}

			},
			cancelLogistics($lid) { //取消物流需求					
				var url = 'https://two.zhiqunale.cn/paper/driverneed/usercancellogisticneed';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					ln_id: $lid
				};
				this.post(params, url, this.canelBack)
			},
			canelBack(data) {
				if(data.status_code == 10000) {
					alert(data.msg)
					window.location.reload(true);
				}
			},
			editLogistics($lid) {
				this.$router.push({
					path: '/publishLogistics',
					query: {
						lid: $lid
					}
				})
			}
		}

	}
</script>

<style scoped>
	.return_prelevel {
		position: relative;
		z-index: 999;
	}
	
	.guoqi {
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
	
	.guoqi span {
		display: flex;
		flex-grow: 1;
		width: auto !important;
		text-align: center;
		justify-content: center;
	}
</style>