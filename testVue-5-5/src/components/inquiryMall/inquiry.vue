<template>
	<div class="supply">
		<div class="return_prelevel">
			<router-link class="return_icon" to="/sale">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</router-link>
			求购大厅
		</div>
		<div class="select_area">
			<!--	<a href="javascript:void(0);">{{address}}</a>-->
			<router-link to='/province'>{{address}}</router-link>
			<button @click="search">搜索</button>
			<input type="text" v-model="paper_name" @keydown="keySceach" placeholder="搜索废纸品类" />
		</div>
		<div class="myintention">
			<scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 100px;" ref="myscroller">
				<ul>
					<li v-for="item in quoteList" class="myintention_item inquiry_item">
						<div>
							<p><span>{{item.pn_product_specifications}}</span></p>
							<p><b>{{item.pn_product_price}}元/吨</b></p>
							<p>{{item.pn_start_time}}--{{item.pn_end_time}}</p>
							<p>
								{{item.address}}
								<a class="baojia_num">{{item.quote_price_num}}个报价</a>
							</p>
						</div>
						<div class="firm">
							<img v-if="item.pn_headurl" class="icon" :src="'https://two.zhiqunale.cn/'+item.pn_headurl" alt="" />
							<img v-else class="icon" src="../../assets/img/my_touxiang.png" alt="" />
							<span>{{item.pn_username}}</span>
							<img v-if="item.c_certification==1" src="../../assets/img/icon_rengzheng_shi.png" alt="" />
							<img v-if="item.c_is_company==1" src="../../assets/img/icon_rengzheng_qi.png" alt="" />
							<img v-if="item.c_is_recommend==1" src="../../assets/img/icon_rengzheng_tui.png" alt="" />
							<b class="credit_score">信用分：{{item.pn_personal_score}}分</b>
						</div>
						<div class="operate operating">
							<a @click="toQuote(item.pn_id)" class="cancel" :data-pn_id='item.pn_id'><img src="../../assets/img/sell_qiugoudating_baojia.png" alt="" />报价</a>
							<a class="chat"><img src="../../assets/img/orderbeiwang_liao.png" alt="" />聊一聊</a>
							<a class="call" :href="'tel:'+item.pn_phone"><img src="../../assets/img/orderbeiwang_phone.png" alt="" />打电话</a>
						</div>
					</li>
				</ul>
			</scroller>
		</div>
		<div v-show="noneMsg" class="feedback">
			<p><img src="../../assets/img/login_logo.png" alt="" /></p>
			<p>暂无信息</p>
		</div>
	</div>
</template>

<script>	
	export default {	
		data() {
			return {
				quoteList: [],
				address: '',
				paper_name: '',
				userInfo: {},				
				noneMsg: false,				
				page: 1,
				nonedata: false
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				if(from.path == '/sale') {
					vm.ajax()
				} else if(from.path == '/province') {
					if(localStorage.userProv) {
						vm.address = localStorage.userProv;
						vm.ajax()
					}
				}
			})
		},
		mounted() {
			if(sessionStorage.loginUser) {
				var userInfo = JSON.parse(sessionStorage.loginUser);
				this.userInfo = userInfo;
			}
			if(localStorage.userProv) {
				this.address = localStorage.userProv;
			} else {
				if(sessionStorage.userAddr) {
					var userAddress = JSON.parse(sessionStorage.userAddr);
					this.address = userAddress.address.province;
				};
			}
			this.ajax();
			//window.addEventListener('scroll',this.scroll);
		},
		methods: {
			infinite() {
				this.page++;
				console.log(22)
				this.ajax();
			},
			refresh() {
				this.page = 1;
				this.quoteList=[];
				this.ajax();
			},		
			ajax() {
				var url = 'https://two.zhiqunale.cn/paper/purchasegoods/getlobbyhallpurchaseneedlist';
				var params = {
					user_id: this.userInfo.uid,
					device_number: this.userInfo.device_number,
					province: this.address,
					name: this.paper_name,
					page: this.page,
					size: 10
				};
				this.post(params, url, this.getQuoteList);
			},
			search(ev) {
				if(this.paper_name) {
					this.quoteList=[];
					this.page=1;
					this.ajax();
				}
			},
			keySceach(ev) {
				if(this.paper_name && ev.keyCode == 13) {
					this.ajax();
				}
			},
			getQuoteList(data) {
				if(data.status_code == 10000) {
					if(data.data.length == 0) {
						this.nonedata = true;
					}
					for(var i in data.data) {
						data.data[i].pn_start_time = this.getLocalTime(data.data[i].pn_start_time);
						data.data[i].pn_end_time = this.getLocalTime(data.data[i].pn_end_time);
					}
					this.$refs.myscroller.finishPullToRefresh();
					this.$refs.myscroller.finishInfinite(this.nonedata);
					this.$refs.myscroller.resize();
					for(var i in data.data) {
						this.quoteList.push(data.data[i]);
					}					
					this.noneMsg = this.quoteList.length > 0 ? false : true;
				} else {
					this.noneMsg = true;
				}
			},
			toQuote($id) {
				this.$router.push({
					path: '/quotePrice',
					query: {
						id: $id
					}
				})
			}
		}
	}
</script>

<style scoped>
	.select_area,.return_prelevel{
		position: relative;
		z-index: 99;
	}
	.select_area a {
		background-image: url(../../assets/img/buy_gongying_jiantou.png);
		color: #00D3AF;
	}
	
	.firm {
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.supply {
		height: 100%;
	}
	
	.feedback {
		text-align: center;
		width: 100%;
		position: relative;
		top: 400px;
	}
	
	.feedback p {
		margin-bottom: 15px;
		font-size: 16px;
		color: #999;
	}
	
	.feedback img {
		width: 120px;
	}
</style>