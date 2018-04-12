<template>
	<div class="myPurchase">
		<div class="return_prelevel">
			<router-link class="return_icon" to="/sale">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</router-link>
			我的供应
		</div>
		<div class="myPurchase_select intention_item">
			<router-link :class="{'active':(this.$route.path=='/myQuote'||this.$route.path=='/myQuote/onoffer')}" to="/myQuote/onoffer" class="one">出售中 {{sellCount}}</router-link>
			<router-link :class="{'active':this.$route.path=='/myQuote/soldout'}" to="/myQuote/soldout" class="two">已下架 {{downCount}}</router-link>
		</div>
		<transition>
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sellCount: '',
				downCount: ''
			}
		},
		mounted() {
			this.ajax(1,this.myQuotelist);
			this.ajax(-1,this.myQuotelistDown);
		},
		methods: {
			ajax($state,fn) {
				var url = 'https://two.zhiqunale.cn/paper/papersale/getsupplygoodslist';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					page: 1,
					size: 10,
					state:$state
				}
				this.post(params, url, fn)
			},
			myQuotelist(data) {
				if(data.status_code == 10000) {
					this.sellCount=data.dataNum
				}
			},
			myQuotelistDown(data) {
				if(data.status_code == 10000) {
					this.downCount=data.dataNum
				}
			}
		}
	}
</script>

<style scoped>

</style>