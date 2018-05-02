<template>
	<div class="selectFirm">
		<div class="return_prelevel">
			<a class="return_icon" href='javascript:history.go(-1);'>
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</a>
			选择贸易公司
		</div>
		<div class="firmList">
			<ul>
				<li @click="changeActive(index,item.trade_id,item.trade_name)" :data-tid='item.trade_id' :data-tname='item.trade_name' v-for="(item,index) in firmList" :class="{'active':nowIndex===index}">
					<a>
						<div class="picture">
							<img v-if="item.trade_headurl" :src="'https://two.zhiqunale.cn/'+item.trade_headurl" alt="" />
							<img v-else src="../../assets/img/my_touxiang.png" alt="" />
						</div>
						<div class="content">
							<h4>{{item.trade_name}}</h4>
							<p>
								<img v-if="item.is_certification==1" src="../../assets/img/icon_rengzheng_shi.png" alt="" />
								<img v-if="item.is_company==1" src="../../assets/img/icon_rengzheng_qi.png" alt="" />
								<img v-if="item.is_recommend==1" src="../../assets/img/icon_rengzheng_tui.png" alt="" /> 信用分：{{item.credit_score}}分
							</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="sure_btn" @click="sureBtn">确认</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				firmList: [],
				nowIndex: '',
				trade_id: '',
				trade_name:''
			}
		},
		mounted() {
			var url = 'https://two.zhiqunale.cn/paper/paperaround/getpaperservertradelist';
			var params = {
				user_id: this.$store.state.loginUser.uid,
				device_number: this.$store.state.loginUser.device_number,
				paper_id: this.$route.query.pid,
				paper_type: this.$route.query.ptype
			}
			this.post(params, url, this.getTradeListBack)
		},
		methods: {
			changeActive: function($index, $id,$name) {
				//        this.$root.eventHub.$emit('selectFirm',$index);
				this.nowIndex = $index;
				this.trade_id = $id;
				this.trade_name = $name;

			},
			getTradeListBack(data) {
				if(data.status_code == 10000) {
					this.firmList = data.data;
				}
			},
			sureBtn() {
				this.$router.push({
					path: '/keySell?',
					query: {
						pid:this.$route.query.pid,
						ptype:this.$route.query.ptype,
						tid:this.trade_id,
						tname:this.trade_name,
						pname:this.$route.query.pname
					}
				})
			}
		}
	}
</script>

<style scoped>
	.sure_btn {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		right: 0;
		color: #fff;
		background-color: #00D3AF;
		text-align: center;
		height: 98px;
		line-height: 98px;
		font-size: 34px;
		letter-spacing: 10px;
	}
	
	.firmList {
		position: absolute;
		top: 88px;
		bottom: 98px;
		overflow-y: auto;
		left: 0;
		right: 0;
		margin-top: 0;
	}
</style>