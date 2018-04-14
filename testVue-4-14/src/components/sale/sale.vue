<template>
	<div class="sale">
		<div class="buy-search">
			<a href="javascript:;">搜索废纸品类或纸厂</a>
			<span>
        <img src="../../assets/img/buy_title_look.png" />
      </span>
		</div>
		<div class="publish">
			<ul>
				<li>
					<router-link to="publish">
						<p>
							<img src="../../assets/img/buy_icon_fabucaigou.png" />
						</p>
						发布供应
					</router-link>
				</li>
				<li>
					<router-link to="myQuote">
						<p>
							<img src="../../assets/img/sell_icon_mygongying.png" />
						</p>
						我的供应
					</router-link>
				</li>
			</ul>
		</div>
		<div class="classify">
			<ul>
				<li>
					<router-link to="inquiryMall">
						<p>
							<img src="../../assets/img/sell_icon_qiugou.png" alt="" />
						</p>
						求购大厅
					</router-link>
				</li>
				<li>
					<a href="javascript:;">
						<p>
							<img src="../../assets/img/sell_icon_zixun.png" alt="" />
						</p>
						资讯
					</a>
				</li>
				<li>
					<router-link to="/attention">
						<p>
							<img src="../../assets/img/sell_icon_focus.png" alt="" />
						</p>
						关注
					</router-link>
				</li>
				<li>
					<router-link to="/supplier">
						<p>
							<img src="../../assets/img/sell_icon_seller.png" alt="" />
						</p>
						成为供应商
					</router-link>
				</li>
			</ul>
		</div>
		<div class="findwuliu">
			<ul>
				<li>
					<router-link to="/myLogistics">
						<img src="../../assets/img/sell_xunzhaowuliu.png" alt="" /> 寻找物流
					</router-link>
				</li>
				<li>
					<router-link to="/ious">
						<img src="../../assets/img/sell_study_logo.png" alt="" /> 小猴白条
					</router-link>
				</li>
			</ul>
		</div>
		<div class="advertising">
			<router-link to="/hotmill">
				<img class="back" src="../../assets/img/sell_banner.png" alt="" />
				<img class="btn" src="../../assets/img/sell_btn_click.png" alt="" />
			</router-link>
		</div>
		<div class="ranking">
			<h3>采购排行榜</h3>
			<div class="my-ranking">
				<div class="ranking-show">
					<p v-if="user_rank">我的排名： <span>第<b>{{user_rank}}</b>名</span></p>
					<p v-else>我的排名： <b>暂未登录</b></p>
					<router-link to='/province'>{{currentPro}}</router-link>
				</div>
				<ul class="ranking-list">
					<li v-for="(item, index) in rank_list">
						<a href="javascript:void(0);" @click="toShopDetail(item.c_id)" :data-id='item.c_id'>
							<div class="icon">
								<img v-if="item.c_store_headurl" :src="'https://two.zhiqunale.cn/'+item.c_store_headurl" />
								<img v-else src="../../assets/img/my_touxiang.png" />
								<img v-if="index == 0" class="num" src="../../assets/img/my_team_num1.png" alt="" />
								<img v-else-if="index == 1" class="num" src="../../assets/img/my_team_num2.png" alt="" />
								<img v-else-if="index == 2" class="num" src="../../assets/img/my_team_num3.png" alt="" />
								<img v-else class="num auto_num" src="../../assets/img/my_team_num.png" alt="" />
								<span v-if="index>=3">{{index+1}}</span>
							</div>
							<div class="name">
								<p>
									<b>{{item.c_store_name}}</b>
									<img v-if="item.c_certification==1" src="../../assets/img/icon_rengzheng_shi.png" alt="" />
									<img v-if='item.c_is_company==1' src="../../assets/img/icon_rengzheng_qi.png" alt="" />
									<img v-if='item.c_is_recommend==1' src="../../assets/img/icon_rengzheng_tui.png" alt="" />
								</p>
								<p>成交量：{{item.total_num}}吨</p>
								<p v-if='item.main_paper'>主营纸厂：{{item.main_paper}}</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="ranking around">
			<h3>推荐商家</h3>
			<div class="my-ranking">
				<ul class="ranking-list">
					<li v-for="item in recommend_store">
						<a href="javascript:void(0);" @click="toShopDetail(item.c_id)" :data-id="item.c_id">
							<div class="icon">
								<img v-if="item.c_store_headurl" :src="'https://two.zhiqunale.cn/'+item.c_store_headurl" />
								<img v-else src="../../assets/img/my_touxiang.png" />
							</div>
							<div class="name recomend">
								<p class="ranking_name">
									<b>{{item.c_store_name}}</b>
								</p>
								<p>
									<img v-if="item.c_certification==1" src="../../assets/img/icon_rengzheng_shi.png" alt="" />
									<img v-if='item.c_is_company==1' src="../../assets/img/icon_rengzheng_qi.png" alt="" />
									<img v-if='item.c_is_recommend==1' src="../../assets/img/icon_rengzheng_tui.png" alt="" /> {{item.address}}
								</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../assets/css/buy_sale.css'
	export default {
		data() {
			return {
				currentPro: '',
				rank_list: [],
				user_rank: '',
				recommend_store: []
			}
		},
		mounted() {
			if(localStorage.getItem('userProv')) {
				this.currentPro = localStorage.getItem('userProv');
			} else {
				this.currentPro = '浙江省';
			}
			var url = 'https://two.zhiqunale.cn/paper/papermill/getisupply';
			var params = {
				user_id: this.$store.state.loginUser.uid,
				device_number: this.$store.state.loginUser.device_number,
				province: this.currentPro
			}
			this.post(params, url, this.saleInfoBack);

		},
		methods: {
			saleInfoBack(data) {
				console.log(data);
				if(data.status_code == 10000) {
					this.recommend_store = data.data.recommend_store;
					this.rank_list = data.data.rank_list;
					this.user_rank = data.data.user_rank;
				}
			},
			toShopDetail($id) {
				this.$router.push({
					path: 'shopDetail',
					query: {
						referrer: this.$route.fullPath,
						sid: $id
					}
				})
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.sale {
		width: 100%;
		overflow-x: hidden;
		height: 90%;
		/*overflow-y: scroll;*/
	}
	
	.ranking.around {
		padding-bottom: 100px;
	}
	
	.ranking-list li>a {
		display: inline-block;
		width: 100%;
		position: relative;
	}
	
	.ranking-list li div {
		float: left;
	}
	
	.ranking-list .icon {
		position: absolute;
		display: inline-block;
		margin-right: 35px;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.ranking-list .name {
		position: relative;
		left: 130px;
	}
	
	.ranking-list .name.recomend {
		left: 160px;
	}
	
	.ranking-list .icon span {
		right: 7px;
		bottom: -3px;
	}	
	.auto_num {
		width: 40px;
		bottom: -10px !important;
		right: -3px !important;
		height: 40px !important;
	}
</style>