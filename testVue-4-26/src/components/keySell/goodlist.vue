<template>
	<div class="keysell">
		<div class="return_prelevel">
			<a class="return_icon" href='javascript:history.go(-1);'>
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</a>
			货品规格
		</div>
		<div class="publish_form">
			<p v-for='item in goodsList' @click="selectGoogs(item.goods_id,item.goods_name)" :data-gid = "item.goods_id" :data-gname = "item.goods_name">{{item.goods_name}}</p>
		</div>
		<p v-show="none" class="none_tips">暂无数据</p>
	</div>
</template>

<script>
	import { Datetime } from 'vux'
	export default {
		components: {
			Datetime
		},
		data: function() {
			return {
				none:0,
				valuedate: '请选择发货日期',
				paper_id: '',
				paper_type: '',
				trade_name: '',
				paper_name: '',
				trade_id: '',
				weight: '',
				pro_name: '',
				goodsList: []
			}
		},
		mounted: function() {
			this.paper_id = this.$route.query.pid;
			this.paper_type = this.$route.query.ptype;
			this.paper_name = this.$route.query.pname;
			this.trade_name = this.$route.query.tname;
			this.trade_id = this.$route.query.tid;
			var url = 'https://two.zhiqunale.cn/paper/papermill/getpapergoodscatelist';
			var params = {
				user_id: this.$store.state.loginUser.uid,
				device_number: this.$store.state.loginUser.device_number,
				paper_id:this.$route.query.pid,
				paper_type:this.$route.query.ptype	
			};
			this.post(params,url,this.getgoodsListBack)
		},
		methods: {
			changewuliu: function() {
				this.wuliu = !this.wuliu;
			},
			selectGoogs($gid,$gname) {
				this.$router.push({
					path:'/keySell',
					query:{
						pid:this.$route.query.pid,
						ptype:this.$route.query.ptype,
						pname:this.$route.query.pname,
						gid:$gid,
						gname:$gname
					}
				})
			},
			getgoodsListBack(data) {
				if(data.status_code==10000) {
					if(data.data.length>0){
						this.goodsList = data.data;
					}else{
						this.none=!0;
					}
				}
			}
		}
	}
</script>

<style scoped>
	.publish_form textarea {
		width: 100%;
	}
	
	.keysell .publish_form a {
		width: 73%;
	}
	
	.trade_name {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.none_tips{
		font-size: 32px;
		text-align: center;
		margin-top: 20px;
	}
</style>