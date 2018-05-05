<template>
	<div class="keysell">
		<div class="return_prelevel">
			<router-link class="return_icon" to='/hotmill'>
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</router-link>
			一键卖货
		</div>
		<div class="publish_form">
			<p>
				<span>纸厂名称</span>
				<input style="color: #333;" readonly v-model='paper_name' type="text" />
			</p>
			<p>
				<span>贸易公司</span>
				<router-link :to="{path:'/selectFirm',query:{pid:paper_id,ptype:paper_type,pname:paper_name}}"><input style="width: 95% ;" class="trade_name" type="text" v-model="trade_name" placeholder="请选择贸易公司" /></router-link>
			</p>
			<p>
				<span>货品名称</span>
				<router-link :to="{path:'/goodlist',query:{pid:paper_id,ptype:paper_type,pname:paper_name}}">
					<input type="text" v-model="goods_name" style="width: 95% ;" class="trade_name" placeholder="请选择货品名称" />
				</router-link>
			</p>
			<p>
				<span>货品重量（吨）</span>
				<input type="text" v-model="weight" placeholder="请填写货品重量" />
			</p>
			<p>
				<span>货品价格（元）</span>
				<input type="text" v-model="price" placeholder="请填写货品价格" />
			</p>
			<p>
				<span>发货日期</span>
				<span class="seldate" style="margin-right: 0;">
          <datetime class="dateshow" v-model="valuedate" placeholder='请选择发货日期'></datetime>
        </span>
			</p>
			<p>
				<span>上传司机</span>
				<router-link to="/driverInfo" class='driver_box'>
					<template v-if="count">
						已上传{{count}}条司机信息
					</template>
					<template v-else>
						请上传司机信息
					</template>
				</router-link>
			</p>
			<p>
				<span>备注</span>
			</p>
			<p>
				<textarea placeholder="请填写订单备注！"></textarea>
			</p>
		</div>
		<div class="submit_publish">
			<a href="javascript:void(0);" @click="submitBtn">确认提交</a>
		</div>
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
				wuliu: '默认买方',
				valuedate: '',
				paper_id: '',
				paper_type: '',
				trade_name: '',
				paper_name: '',
				trade_id: '',
				weight: '',
				goods_name: '',
				goods_id: '',
				beizhu: '',
				price: ''
			}
		},
		beforeRouteEnter(to, from, next) {
			
			next(vm => {
				vm.weight = sessionStorage.weight != 'undefined' ? sessionStorage.weight : '';
				vm.price = sessionStorage.price != 'undefined' ? sessionStorage.price : '';
				vm.valuedate = sessionStorage.valuedate != 'undefined' ? sessionStorage.valuedate : '';
				
				if(from.path == '/hotmill') {
					sessionStorage.removeItem('gid');
					sessionStorage.removeItem('gname');
					sessionStorage.removeItem('tid');
					sessionStorage.removeItem('tname');
					sessionStorage.removeItem('weight');
					sessionStorage.removeItem('price');				
					sessionStorage.removeItem('valuedate');			
					vm.$store.commit('reset');					
				}
				console.log(from.path)
				if(from.path == '/selectFirm') {
					vm.trade_name = vm.$route.query.tname;
					vm.trade_id = vm.$route.query.tid;
					sessionStorage.tid = vm.$route.query.tid;
					sessionStorage.tname = vm.$route.query.tname;
				} else {
					if(sessionStorage.tid != 'undefined') {
						vm.trade_name = sessionStorage.tname;
						vm.trade_id = sessionStorage.tid;
					}
				}
				if(from.path == '/goodlist') {
					vm.goods_name = vm.$route.query.gname;
					vm.goods_id = vm.$route.query.gid;
					sessionStorage.gid = vm.$route.query.gid;
					sessionStorage.gname = vm.$route.query.gname;
				} else {
					if(sessionStorage.gid != 'undefined') {
						vm.goods_name = sessionStorage.gname;
						vm.goods_id = sessionStorage.gid;
					}
				}

			})
		},
		watch: {
			weight: {
				handler(old, news) {
					sessionStorage.weight = old;
				}
			},
			price: {
				handler(old, news) {
					sessionStorage.price = old;
				}
			},
			valuedate:{
				handler(old, news) {
					sessionStorage.valuedate = old;					
				}
			}
		},
		computed: {
			count() {
				return this.$store.state.drivers
			}
		},
		mounted: function() {	
			this.paper_id = this.$route.query.pid;
			this.paper_type = this.$route.query.ptype;
			this.paper_name = this.$route.query.pname;
		},
		methods: {
			changewuliu: function() {
				this.wuliu = !this.wuliu;
			},
			submitBtn() {
				var url = 'https://two.zhiqunale.cn/paper/papermill/onekeysale';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					user_name: this.$store.state.loginUser.username,
					buyer_id: this.trade_id,
					sale_weight: this.weight,
					who_pay_logistic: 1, //自付					
					send_time: this.DateToUnix(this.valuedate),
					paper_id: this.paper_id,
					paper_type: this.paper_type,
					paper_name: this.paper_name,
					goods_id: this.goods_id,
					goods_name: this.goods_name,
					goods_price: this.price,
					beizhu: this.beizhu
				}
				if(this.count) {
					params.is_upload_driver_info = 1;
					params.driver_info_json_encode = this.$store.state.driverInfo;
				} else {
					params.is_upload_driver_info = 2;
				}
				this.post(params, url, this.keySellBack)
			},
			keySellBack(data) {
				if(data.status_code == 10000) {
					alert(data.msg);
					this.$store.commit('reset');
					this.$router.push({
						path: '/hotmill'
					})
				} else {
					alert(data.msg)
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
</style>