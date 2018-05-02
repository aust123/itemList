<template>
	<div class="attentionProduct supply_list">
		<ul>
			<li v-for="item in followList">
				<router-link class="supply_list_href" to="/productDetail" :data-id = "item.sp_id"><!--商品id-->
					<div class="picture">
						<img :src="'https://two.zhiqunale.cn/'+item.sp_fengmian_photo" alt="" />
					</div>
					<div class="content">
						<h4>{{item.sp_product_name}}</h4>
						<h5>
              <b>{{item.sp_product_price}}</b><!--元/个-->
            </h5>
						<p>
							<img v-if="item.c_certification==1" src="../../assets/img/icon_rengzheng_shi.png" alt="" />
							<img v-if='item.c_is_company==1' src="../../assets/img/icon_rengzheng_qi.png" alt="" />
							<img v-if='item.c_is_recommend==1' src="../../assets/img/icon_rengzheng_tui.png" alt="" />
							{{item.sp_send_province+item.sp_send_city+item.sp_send_dist}}
						</p>
					</div>
					<span v-if="item.sp_state==1">在售</span>
					<span v-if="item.sp_state==-1">已下架</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
					followList:[]
			}
		},
		mounted() {		
			var url = 'https://two.zhiqunale.cn/paper/user/get_my_favorite';
			var params = {
				favorite_type: 1,
				uid:this.$store.state.loginUser.uid,
				device_number: this.$store.state.loginUser.device_number,
				pageNum: 1,
				size: 20
			}
			this.post(params,url,this.getfollowList)
		},
		methods: {
			getfollowList(data){
				console.log(data);
				if(data.status_code==10000){
					this.followList=data.data;
				}else if(data.status_code==10002){
					alert(data.msg)
				}
			}
		}
	}
</script>

<style scoped>
	.supply_list .picture img {
		margin-top: 3px;
	}
</style>