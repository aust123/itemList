<template>
	<div class="onoffer">
		<div class="supply_list">
			<scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 100px;" ref="myscroller">
				<ul>
					<li v-for="item in quotelist" class="onoffer_item">
						<router-link class="supply_list_href" :to="{path:'/quoteInfo',query:{id:item.sp_id,state:1}}">
							<div class="picture">
								<img :src="'http://two.zhiqunale.cn/'+item.sp_fengmian_photo" alt="" />
							</div>
							<div class="content">
								<h4>{{item.sp_product_name}}</h4>
								<h5>
                <b>{{item.sp_product_price}}</b>元/个
              </h5>
								<p>{{item.address}}</p>
							</div>
							<span>{{item.created_at}}</span>
						</router-link>
						<div class="operate">
							<a href="javascript:void(0);" @click="downloadSupply(item.sp_id)" :data-sid="item.sp_id">
								<img src="../../assets/img/sell_mygongying_xiajia.png" alt="" /> 下架
							</a>
							<a href="javascript:void(0);" @click="refreshSupply(item.sp_id)" :data-sid="item.sp_id">
								<img src="../../assets/img/sell_mygongying_shuaxin.png" alt="" /> 刷新
							</a>
						</div>
					</li>
				</ul>
			</scroller>
		</div>
	</div>
</template>

<script>
	import '../../assets/css/common.css'

	export default {
		data() {
			return {
				quotelist: [],
				page: 1,
				nonedata: false
			}
		},
		mounted() {
			this.getDatalist();
		},
		methods: {
			infinite(done) {
				this.page++;
				this.getDatalist();
			},
			refresh() {
				this.page = 1;
				this.quotelist=[];
				this.getDatalist();
			},
			getDatalist() {
				var url = 'https://two.zhiqunale.cn/paper/papersale/getsupplygoodslist';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					page: this.page,
					size: 10,
					state: 1
				}
				this.post(params, url, this.myQuotelist)
			},
			myQuotelist(data) {
				console.log(data);
				if(data.status_code == 10000) {
					if(data.data.length == 0) {
						this.nonedata = true;
					}
					for(var i in data.data) {
						data.data[i].created_at = this.getLocalTimes(data.data[i].created_at);
					}
					this.$refs.myscroller.finishPullToRefresh();
					this.$refs.myscroller.finishInfinite(this.nonedata);
					this.$refs.myscroller.resize();
					for(var i in data.data) {
						this.quotelist.push(data.data[i]);
					}

				}
			},
			downloadSupply($sid) {
				var url = 'https://two.zhiqunale.cn/paper/papersale/downsupplygoods';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					goods_id: $sid,
					state: -1
				}
				this.post(params, url, this.downloadBack);
			},
			downloadBack(data) {
				console.log(data);
				if(data.status_code == 10000) {
					alert('商品已下架');
					window.location.reload(true);
				}
			},
			refreshSupply($sid) {
				var url = 'https://two.zhiqunale.cn/paper/papersale/refreshgoods';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					goods_id: $sid
				}
				this.post(params, url, this.refreshBack);
			},
			refreshBack(data) {
				console.log(data);
				if(data.status_code == 10000) {
					alert(data.msg);
				} else if(data.status_code == 10004) {
					alert('刷新次数超过三次，已达上限！');
				}
			}
		}

	}
</script>

<style scoped>
	.supply_list {
		background-color: initial;
	}
	
	.supply_list li:nth-of-type(1) {
		margin-top: 0;
	}
	
	.supply_list li {
		padding: 0;
		margin-top: 14px;
		background-color: #fff;
	}
</style>