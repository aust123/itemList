<template>
	<div class="attentionShop supply_list">
		<ul>
			<li v-for="item in followList">
				<a class="supply_list_href" @click="toShopDetail(item.c_id)" :data-id="item.c_id">
					<div class="picture">
						<img v-if="item.c_store_headurl" :src="'https://two.zhiqunale.cn/'+item.c_store_headurl" alt="" />
						<img v-else src="../../assets/img/my_touxiang.png" alt="" />
					</div>
					<div class="content">
						<h4>{{item.c_store_name}}</h4>
						<p>
							<img v-if="item.c_certification==1" src="../../assets/img/icon_rengzheng_shi.png" alt="" />
							<img v-if='item.c_is_company==1' src="../../assets/img/icon_rengzheng_qi.png" alt="" />
							<img v-if='item.c_is_recommend==1' src="../../assets/img/icon_rengzheng_tui.png" alt="" /> {{item.c_store_province+item.c_store_city+item.c_store_dist}}
						</p>
					</div>
					<span>4小时前</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				followList: []
			}
		},
		mounted() {
			var url = 'https://two.zhiqunale.cn/paper/user/get_my_favorite';
			var params = {
				favorite_type: 2,
				uid: this.$store.state.loginUser.uid,
				device_number: this.$store.state.loginUser.device_number,
				pageNum: 1,
				size: 20
			}
			this.post(params, url, this.getfollowList);			
		},
		methods: {
			getfollowList(data) {
				console.log(data);
				if(data.status_code == 10000) {
					this.followList = data.data;
				} else if(data.status_code == 10002) {
					alert(data.msg)
				}
			},
			toShopDetail($id) {
				this.$router.push({
					path: '/shopDetail',
					query: {
						referrer: this.$route.fullPath,
						sid: $id
					}
				})
			}
		}
	}
</script>

<style scoped>
	.supply_list .picture img {
		margin-top: 0;
		border-radius: 100%;
	}
	
	.supply_list .content h4 {
		position: relative;
		top: 15px;
		margin-bottom: 40px;
	}
</style>