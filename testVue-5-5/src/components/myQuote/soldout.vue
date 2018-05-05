<template>
	<div class="soldout">
		<div class="supply_list">
			<ul>
				<li v-for="item in downQuotelist" class="onoffer_item soldout-item">
					<router-link class="supply_list_href" :to="{path:'/quoteInfo',query:{id:item.sp_id,state:-1}}">
						<div class="picture">
							<img :src="'http://two.zhiqunale.cn/'+item.sp_fengmian_photo" alt="" />
						</div>
						<div class="content">
							<h4>{{item.sp_product_name}}</h4>
							<h5>
                <b>{{item.sp_product_price}}</b>元/个
                <!--<em><img src="../../assets/img/sell_mygongying_changejiage.png" alt=""/></em>-->
              </h5>
							<p>{{item.address}}</p>
						</div>
						<span>{{item.created_at}}</span>
					</router-link>
					<div class="operate">
						<a href="javascript:void(0);" @click="uploadSupply(item.sp_id)" :data-sid="item.sp_id">
							<img src="../../assets/img/sell_mygongying_shangjia.png" alt="" /> 上架
						</a>
						<a href="javascript:void(0);" @click="toSupplyEdit(item.sp_id)" :data-id='item.sp_id'>
							<img src="../../assets/img/sell_mygongying_bianji.png" alt="" /> 编辑
						</a>
					</div>
				</li>
			</ul>
		</div>
		<router-link to='/publish' class="submit">发布新货品</router-link >
	</div>
</template>

<script>
	export default {
		data() {
			return {
				downQuotelist: []
			}
		},
		mounted() {			
			var url = 'https://two.zhiqunale.cn/paper/papersale/getsupplygoodslist';
			var params = {
				user_id: this.$store.state.loginUser.uid,
				device_number: this.$store.state.loginUser.device_number,
				page: 1,
				size: 20,
				state: -1
			}
			this.post(params, url, this.myQuotelist)
		},
		methods: {
			myQuotelist(data) {
				console.log(data);
				if(data.status_code == 10000) {
					if(data.data.length > 0) {
						for(var i in data.data) {
							data.data[i].created_at = this.getLocalTimes(data.data[i].created_at);
						}
						this.downQuotelist = data.data
					} else {
						alert('暂无已下架供应信息')
					}
				}
			},
			uploadSupply($sid) {
				var url = 'https://two.zhiqunale.cn/paper/papersale/downsupplygoods';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					goods_id: $sid,
					state: 1
				}
				this.post(params, url, this.uploadBack);
			},
			uploadBack(data) {
				console.log(data);
				if(data.status_code == 10000) {
					alert('商品已上架');
					window.location.reload(true);
				}
			},
			toSupplyEdit($id){				
				this.$router.push({
					path:'/publishEdit',
					query:{
						id:$id
					}
				})
			}
		}

	}
</script>

<style scoped>
.supply_list {
		background-color: initial;
		padding-bottom: 98px;
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