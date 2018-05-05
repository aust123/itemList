<template>
	<div class="hotmill">
		<div class="return_prelevel">
			<router-link class="return_icon" to="/sale">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</router-link>
			热门纸厂
		</div>
		<div class="select_area">			
			<router-link to='/province'>{{currentPro}}</router-link>
			<button @click="searchBtn">搜索</button>
			<input type="text" v-model="name" placeholder="搜索废纸品类" />
		</div>
		<div class="hotmill_list">
			<scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 100px;" ref="myscroller">
			<ul>
				<li v-for="item in paperList">
					<router-link :to="{path:'/keySell',query:{pid:item.paper_id,ptype:item.paper_type,pname:item.paper_name}}">
						<h3>{{item.paper_name}}</h3>
						<p>{{item.address}}</p>
						<span>一键卖货</span>
					</router-link>
				</li>
			</ul>
			</scroller>
		</div>
		<div v-show="none" class="none">暂无数据</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentPro: '',
				name: '',
				paperList: [],
				none:0,
				page: 1,
				nonedata: false
			}
		},
		mounted() {
			this.getPaperList();
		},
		methods: {
			infinite(done) {
				this.page++;
				this.getPaperList();
			},
			refresh() {
				this.page = 1;
				this.paperList=[];
				this.getPaperList();
			},
			getPaperList() {
				if(localStorage.getItem('userProv')) {
					this.currentPro = localStorage.getItem('userProv');
				} else {
					this.currentPro = '全国';
				}
				var url = 'https://two.zhiqunale.cn/paper/paperaround/getaroundpaperlist';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					lat: this.$store.state.userAddr.latitude,
					lng: this.$store.state.userAddr.longitude,
					province: this.currentPro,
					name: this.name,
					page:this.page,
					size: 10
				}
				this.post(params, url, this.getPaperListBack)
			},
			getPaperListBack(data) {
				if(data.status_code == 10000) {
					if(data.data.length==0){
						//this.none=!0;					
						this.nonedata = true;					
					}
					this.$refs.myscroller.finishPullToRefresh();
					this.$refs.myscroller.finishInfinite(this.nonedata);
					this.$refs.myscroller.resize();
					for(var i in data.data) {
						this.paperList.push(data.data[i]);
					}
					//this.paperList = data.data;
				}
			},
			searchBtn() {
				if(this.name){
					this.page = 1;
					this.paperList=[];
					this.getPaperList();
				}
			}
		}
	}
</script>

<style scoped>
	.return_prelevel,.select_area{
		position: relative;
		z-index: 99;
	}
	.hotmill_list li span {
		border-width: 2px;
	}
	.none{
		text-align: center;
		font-size: 30px;
		margin-top: 20px;
	}
</style>