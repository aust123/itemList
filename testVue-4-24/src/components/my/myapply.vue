<template>
	<div>
		<div class="order-memo">			
			<ul>
				<li @click="ToDetail">
					<p>规格：我的申请<b class="Reorder-state">处理中</b></p>
					<p>申请退款金额：<span>10000元</span></p>
					<p>申请日期：2018.3.38</p>					
					<p class="option"><a href="javascript:void(0);"><img src="../../assets/img/orderbeiwang_liao.png"/>聊一聊</a><a href="tel:15705131911"><img src="../../assets/img/orderbeiwang_phone.png" alt="" />联系买家</a></p>
				</li>
				<li @click="ToDetail">
					<p>规格：国废A级纸<b class="Reorder-state">已拒绝</b></p>
					<p>申请退款金额：<span>10000元</span></p>
					<p>申请日期：2018.3.38<b class="solves">重新申请</b></p>					
					<p class="option"><a href="javascript:void(0);"><img src="../../assets/img/orderbeiwang_liao.png"/>聊一聊</a><a href="tel:15705131911"><img src="../../assets/img/orderbeiwang_phone.png" alt="" />联系买家</a></p>
				</li>
			</ul>			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{			
			ToDetail() {
				this.$router.push({
					name: "退款详情"
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.order-memo{
		margin-top: 18px;
		font-size:32px;
		color: #333;
		padding-bottom:82px ;
	}
	.order-memo li{
		background-color: #fff;
		margin-bottom: 18px;
		padding-top: 32px;
	}
	.order-memo p{
		padding: 0 30px;
		margin-bottom: 36px;
	}
	.order-memo p span{
		color: #FF5000;		
	} 
	
	.order-memo .option{
		border-top: 1px solid #E0E0E0;
		height: 88px;
		display: flex;
		justify-content: space-around;			
		margin-top: 32px;
		margin-bottom: 0;
	}
	.option a{
		display: flex;
		flex-grow: 1;
		text-align: center;
		align-items: center;
		justify-content: center;
		color:#666;
		font-size: 32px;
	}
	.option a:nth-of-type(1){		
		border-right: 1px solid #e0e0e0;
	}
	.option a:nth-of-type(1) img{
		width: 34px;
		height: 34px;
		margin-right: 18px;
	}
	.option a:nth-of-type(2) img{
		width: 35px;
		height: 36px;
		margin-right: 20px;
	}
	.Reorder-state{
		float: right;
		font-size: 30px;
		color: #208DF0;
	}
	.solves{
		float: right;
		display: inline-block;
		width: 170px;
		height: 58px;
		color: #FF5000;
		border: 2px solid #FF5000;
		border-radius: 10px;
		text-align: center;
		line-height: 58px;
		position: relative;
		top: -10px;
	}
</style>