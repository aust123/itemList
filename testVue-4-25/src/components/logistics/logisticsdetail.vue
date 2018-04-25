<template>
	<div>
		<div class="return_prelevel">
			<a class="return_icon" onclick="window.history.go(-1)">
				<img src="../../assets/img/title_jiantou.png" alt="" />
			</a>
			需求详情
		</div>
		<div class="logistics_form">
			<template v-if="LogisticsDetail.is_overdue==0">
				<div class="order_icon" v-if="LogisticsDetail.ln_needs_state==2">
					<img src="../../assets/img/icon_yuyue.png" alt="" /><span>已预约</span>
				</div>
				<div class="order_icon" v-else-if="LogisticsDetail.ln_needs_state==1">
					<img src="../../assets/img/icon_fabu.png" alt="" /><span>发布中</span>
				</div>
				<div class="order_icon" v-else-if="LogisticsDetail.ln_needs_state==3">
					<img src="../../assets/img/icon_yiwancheng.png" alt="" /><span>已完成</span>
				</div>
				<div class="order_icon" v-else="LogisticsDetail.ln_needs_state==4">
					<img src="../../assets/img/icon_yizuofei.png" alt="" /><span>已过期</span>
				</div>
			</template>
			<template v-if="LogisticsDetail.is_overdue==1">
				<div class="order_icon">
					<img src="../../assets/img/icon_yizuofei.png" alt="" /><span>已过期</span>
				</div>
			</template>
			<p>
				<label>出发地：</label>
				<b class="color">{{LogisticsDetail.ln_start_area_city}}</b>
			</p>
			<p>
				<label>目的地：</label>
				<b class="color">{{LogisticsDetail.ln_end_area_city}}</b>
			</p>
			<p>
				<label>发货日期：</label> {{LogisticsDetail.ln_send_date}}
			</p>
			<p>
				<label>货物品类：</label> {{LogisticsDetail.ln_goods_category}}
			</p>
			<p>
				<label>货物重量（吨）：</label> {{LogisticsDetail.ln_goods_weight}}
			</p>
			<p>
				<label>联系方式：</label> {{LogisticsDetail.ln_contact_way}}
			</p>
			<p>
				<label>备注：</label>
				<span>{{LogisticsDetail.ln_beizhu}}</span>
			</p>
		</div>
		<div class="hitchhiking">
			<ul class="hitchhiking_list">
				<li v-for="item in LogisticsDetail.driver_info">
					<!--用户同意司机预约-->
					<template v-if='item.da_user_advice==1'>
						<!--司机未取消-->
						<template v-if="item.da_driver_cancel==1">
							<h3>
					  	  	<img :src="item.d_headurl" alt=""/>
	           				 {{item.d_name}}                      
	           			 	 <a>已同意司机预约</a> 	          			 	  
         				 </h3>
							<div>
								<a :href='"tel:"+item.d_phone'>联系</a>
							</div>
						</template>
						<!--司机申请取消-->
						<template v-else-if="item.da_driver_cancel==3">
						<!--司机申请取消，用户待确认-->
							<template v-if="item.da_user_is_agree==1">
								<h3>
					  	  	<img :src="item.d_headurl" alt=""/>
	           				 {{item.d_name}}                      
	           			 	 <a>司机申请取消中</a>	          			 	 
         				 	</h3>
								<div>
									<a :href='"tel:"+item.d_phone'>联系</a>
									<template>
										<a @click="AgreeCancel(item.da_id,LogisticsDetail.ln_id)" :data-id='item.da_id' :data-lid='LogisticsDetail.ln_id'>同意</a>
										<a @click="RefuseCancel(item.da_id,LogisticsDetail.ln_id)" :data-id='item.da_id' :data-lid='LogisticsDetail.ln_id'>拒绝</a>
									</template>
								</div>
							</template>
							<!--已拒绝司机取消申请-->
							<template v-else-if="item.da_user_is_agree==2">
								<h3>
					  	  	<img :src="item.d_headurl" alt=""/>
	           				 {{item.d_name}}                      
	           			 	 <a>已拒绝司机取消申请</a> 	          			 	
         				 </h3>
								<div>
									<a :href='"tel:"+item.d_phone'>联系</a>
								</div>
							</template>
							<!--已同意司机取消申请-->
							<template v-else-if="item.da_user_is_agree==3">
								<h3>
					  	  	<img :src="item.d_headurl" alt=""/>
	           				 {{item.d_name}}                      
	           			 	 <a>已同意司机取消申请</a> 	          			 	
         				 </h3>
								<div>
									<a :href='"tel:"+item.d_phone'>联系</a>
								</div>
							</template>
						</template>
						<!--司机申请取消并且用户已同意-->
						<template v-else-if="item.da_driver_cancel==2">
							<h3>
					  	  	<img :src="item.d_headurl" alt=""/>
	           				 {{item.d_name}}                      
	           			 	 <a>已同意司机取消</a> 	          			 	  
         				 </h3>
							<div>
								<a :href='"tel:"+item.d_phone'>联系</a>								
							</div>
						</template>
						
					</template>
					<!--用户拒绝司机预约-->
					<template v-else-if='item.da_user_advice==2'>
						<h3>
				            <img :src="item.d_headurl" alt=""/>
				            {{item.d_name}}                      
				            <a >已拒绝司机预约</a>				              
          				</h3>
						<div>
							<a :href='"tel:"+item.d_phone'>联系</a>							
						</div>
					</template>
					<!--用户确认中-->
					<template v-else-if='item.da_user_advice==3'>
						<h3>
				            <img :src="item.d_headurl" alt=""/>
				            {{item.d_name}}                      
				            <a v-if="item.da_driver_cancel==1">待确认</a> 
				            <a v-else-if="item.da_driver_cancel==2">司机已取消预约</a> 
        			  	</h3>
						<div>
							<a :href='"tel:"+item.d_phone'>联系</a>
							<template v-if="item.da_driver_cancel==1">
							<a @click="Agree(item.da_id,LogisticsDetail.ln_id)" :data-id='item.da_id' :data-lid='LogisticsDetail.ln_id'>同意</a>
							<a @click="Refuse(item.da_id,LogisticsDetail.ln_id)" :data-id='item.da_id' :data-lid='LogisticsDetail.ln_id'>拒绝</a>
							</template>
						</div>
					</template>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				LogisticsDetail: {}
			}
		},
		mounted() {
			var url = 'https://two.zhiqunale.cn/paper/driverneed/getuserhistorylogisticneeddetail';
			var params = {
				user_id: this.$store.state.loginUser.uid,
				device_number: this.$store.state.loginUser.device_number,
				ln_id: this.$route.query.id
			}
			this.post(params, url, this.getLogisticsDetail)
		},
		methods: {
			getLogisticsDetail(data) {
				if(data.status_code == 10000) {
					data.data.ln_send_date = this.getLocalTime1(data.data.ln_send_date)
					this.LogisticsDetail = data.data;
				}
			},
			Agree($id, $lid) {
				var url = 'https://two.zhiqunale.cn/paper/driverneed/usermodifydriverappointment';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					ln_id: $lid,
					da_id: $id,
					type: 1
				}
				this.post(params, url, this.agreeBack)
			},
			Refuse($id, $lid) {
				var url = 'https://two.zhiqunale.cn/paper/driverneed/usermodifydriverappointment';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					ln_id: $lid,
					da_id: $id,
					type: 2
				}
				this.post(params, url, this.refuseBack)
			},
			refuseBack(data) {
				if(data.status_code == 10000) {
					alert(data.msg);
					window.location.reload(true);
				}
			},
			agreeBack(data) {
				if(data.status_code == 10000) {
					alert(data.msg);
					window.location.reload(true);
				}
			},
			AgreeCancel($id, $lid) {
				var url = 'https://two.zhiqunale.cn/paper/driverneed/usermodifydrivercancelappointment';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					ln_id: $lid,
					da_id: $id,
					type: 1
				}
				this.post(params, url, this.agreeCancelBack)
			},
			agreeCancelBack(data) {
				if(data.status_code == 10000) {
					window.location.reload(true);
				}
			},
			RefuseCancel($id, $lid) {
				var url = 'https://two.zhiqunale.cn/paper/driverneed/usermodifydrivercancelappointment';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,
					ln_id: $lid,
					da_id: $id,
					type: 2
				}
				this.post(params, url, this.refuseCanelBack)
			},
			refuseCanelBack(data) {
				if(data.status_code == 10000) {
					window.location.reload(true);
				}
			},
		}
	}
</script>

<style scoped>
	.order_icon img {
		width: 103px;
		height: 103px;
		margin-left: 30px;
	}
	
	.order_icon span {
		color: #FF5000 !important;
		margin-left: 30px;
		font-size: 30px;
	}
	
	.order_icon {
		padding-top: 20px;
		padding-bottom: 20px;
		border-bottom: 1px solid #e0e0e0;
	}
	
	.order_icon span {
		font-size: 36px !important;
		display: inline-block;
		position: relative;
		top: 10px;
	}
	
	.color {
		color: #ff5000;
	}
	
	.hitchhiking_list h3 {
		/* border-bottom: 1px solid #e0e0e0;
    margin-bottom: 30px;*/
	}
	
	.hitchhiking_list li {
		margin-bottom: 0;
		margin-top: 14px;
	}
	
	.hitchhiking_list p span {
		display: inline-block;
		width: 83%;
		vertical-align: text-top;
	}
	
	.hitchhiking_list div {
		padding: 15px 30px;
		border-top: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
		text-align: right;
	}
	
	.hitchhiking_list div a {
		width: 158px;
		height: 59px;
		border: 2px solid #ff5000;
		border-radius: 10px;
		line-height: 59px;
		color: #ff5000;
		margin-left: 20px;
	}
</style>