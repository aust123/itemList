<template>
	<div class="quoteprice">
		<div class="return_prelevel">
			<a class="return_icon" href="javascript:history.go(-1);">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</a>
			报价
		</div>
		<div class="quote_basicmsg">
			<div>
				<p>规格：</p>
				<p>{{quoteInfo.pn_product_specifications}}</p>
			</div>
			<div>
				<p>价格：</p>
				<p class="price">{{quoteInfo.pn_product_price}}元/吨</p>
			</div>
			<div>
				<p>数量：</p>
				<p>{{quoteInfo.pn_product_weight}}吨</p>
			</div>
			<div>
				<p>地址：</p>
				<p class="addr">{{quoteInfo.address}}</p>
			</div>
			<div>
				<p>起止日期：</p>
				<p>{{quoteInfo.pn_start_time}}-{{quoteInfo.pn_end_time}}</p>
			</div>
			<div>
				<p>物流费用负责方：</p>
				<p v-if="quoteInfo.pn_logistic_fee==1" class="wuliu">买方</p>
				<p v-else="quoteInfo.pn_logistic_fee==2" class="wuliu">卖方</p>
			</div>
		</div>
		<div class="quote_user_icon">
			<img class="icon" :src="'https://two.zhiqunale.cn/'+quoteInfo.c_headurl" alt="" /> 吉安纸厂
			<img v-if="quoteInfo.c_certification==1" src="../../assets/img/icon_rengzheng_shi.png" alt="" />
			<img v-if="quoteInfo.c_is_company==1" src="../../assets/img/icon_rengzheng_qi.png" alt="" />
			<img v-if="quoteInfo.c_is_recommend==1" src="../../assets/img/icon_rengzheng_tui.png" alt="" />
			<b>信用分：{{quoteInfo.store_credit_stage}}分</b>
		</div>
		<div class="quote_basicmsg quote_form">
			<div>
				<p>订金：</p>
				<p>
					<input type="text" v-model="front_money" />
					<em>元</em>
				</p>
			</div>
			<div>
				<p>数量：</p>
				<p>
					<input type="text" v-model="weight_count" />
					<em>吨</em>
				</p>
			</div>
			<div>
				<p>价格：</p>
				<p>
					<input type="text" v-model="price" />
					<em>元/吨</em>
				</p>
			</div>
			<div style="padding-top: 0;">
				<p>发货日期：</p>
				<datetime class="dateshow" v-model="valuedate"></datetime>
			</div>
			<div id="quto_price_remark">
				<p>备注</p>
				<p><textarea placeholder="请输入备注" v-model="remark"></textarea></p>
			</div>
		</div>
		<div class="quote_submit" @click="sureQuote">确认报价</div>
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
				valuedate: '请选择发货日期',
				quoteInfo: {},
				front_money: '',
				weight_count: '',
				price: '',
				remark:''
			}
		},
		mounted() {
			var url = 'https://two.zhiqunale.cn/paper/supplywill/getpurchaseneeddetailbeforequoteprice';
			var params = {
				user_id: this.$store.state.loginUser.uid,
				device_number: this.$store.state.loginUser.device_number,
				pn_id: this.$route.query.id
			}
			this.post(params, url, this.getQuoteInfo)
		},
		methods: {
			getQuoteInfo(data) {
				if(data.status_code == 10000) {
					data.data.pn_start_time = this.getLocalTime(data.data.pn_start_time);
					data.data.pn_end_time = this.getLocalTime(data.data.pn_end_time);
					this.quoteInfo = data.data;
				}
			},
			sureQuote() {
				var url = 'https://two.zhiqunale.cn/paper/supplywill/buyerquoteprice';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					user_name:this.$store.state.loginUser.username,
					device_number: this.$store.state.loginUser.device_number,
					pn_id: this.quoteInfo.pn_id,
					buyer_id:this.quoteInfo.c_id,
					sale_weight:this.weight_count ,
					baojia: this.price,
					who_pay_logistic: this.quoteInfo.pn_logistic_fee,
					sw_send_time: this.valuedate,
					sw_reiceve_address: this.quoteInfo.address,
					sw_product_name:this.quoteInfo.pn_product_specifications,
					bail_money:this.front_money,
					beizhu:this.remark
				}
				this.post(params,url,this.quotePriceBack)
			},
			quotePriceBack(data){
				if(data.statue_code==10000){
					alert(data.msg)
				}else{
					alert(data.msg)
				}
			}
		}
	}
</script>

<style scoped>
	.quote_form .dateshow {
		display: inline-block;
		width: 70%;
	}
	#quto_price_remark{
		padding: 0;
		padding-top: 14px;
		background-color: #F1F1F1;
	}
	#quto_price_remark p{
		display: block;
		border-bottom: 1px solid #D2D2D2;
		padding: 14px 30px !important;
		background-color: #fff;
		width: 100%;
	}
	#quto_price_remark textarea{
		width: 100%;
	}
</style>