<template>
	<div>
		<div class="certification">
			<div class="back tl re-header">
				<img src="../assets/img/title_jiantou.png" @click="Back" /> 发布需求详情
			</div>
			<div class="certiContent">
				<div class="certiMsg release-msgs">
					<div>
						<span>出发地：</span>{{detailsList.dln_start_area_city}}
					</div>
					<div>
						<span>目的地：</span>{{detailsList.dln_end_area_city}}
					</div>
					<div>
						<span>发货日期：</span>{{detailsList.dln_start_date}}
					</div>
					<div>
						<span>费用：</span>{{detailsList.dln_fee}}
					</div>
					<div>
						<span>货物重量（吨）：</span>{{detailsList.dln_can_weight}}

					</div>
					<!--发布状态-->
					<div><span>发布状态：</span><b v-if="detailsList.dln_needs_state==1" class="re-state">发布中</b>
						<b v-else-if="detailsList.dln_needs_state==2" class="re-state">已预约</b>
						<b v-else-if="detailsList.dln_needs_state==3" class="re-state">已完成</b>
						<b v-else="detailsList.dln_needs_state==4" class="re-state">已过期</b>
					</div>

					<div class="re-box">
						<span>备注</span>
						<span class="re-msg">{{detailsList.dln_beizhu}}</span>
					</div>
				</div>
				<div class="certiPics releaseDetail">
					<ul>
						<li v-for="item in appiontInfo">
							<div class="name-state"><img :src="'https://two.zhiqunale.cn/'+item.c_headurl" alt="" /><span>{{item.c_username}}</span><b>联系方式：*******8888</b></div>
							
							<div class="to-option" v-if='item.ua_user_cancel==1'>
								<div v-if="item.ua_driver_advice==1">
									<span>已同意</span>
									<a :href="'tel:'+item.c_phone">联系</a>
								</div>
								<div v-else-if="item.ua_driver_advice==2">
									<span>已拒绝</span>
									<a :href="'tel:'+item.c_phone">联系</a>
								</div>
								<div v-else-if="item.ua_driver_advice==4">

									<span>平台介入</span>
									<a :href="'tel:'+item.c_phone">联系</a>
								</div>
								<div v-else>
									<span>确认中</span>
									<a href="###">拒绝</a>
									<a href="###" @click="Agree" :data-cid='item.c_id' :data-uaid='item.ua_id' :data-did='detailsList.dln_id'>同意</a>
									<a :href="'tel:'+item.c_phone">联系</a>
								</div>
							</div>
							<div class="to-option" v-else-if='item.ua_user_cancel==2'>
								<span>用户已取消</span>
								<a :href="'tel:'+item.c_phone">联系</a>
							</div>
							<div class="to-option" v-else='item.ua_user_cancel==3'>
								<span>用户申请取消中</span>
								<a href="###">拒绝取消</a>
								<a href="###">同意取消</a>
								<a :href="'tel:'+item.c_phone">联系</a>
							</div>
						</li>
					</ul>

				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import api from '../fetch/api';

	//时间戳转换为日期
	function getLocalTimes(nS) {
		var dat = new Date(parseInt(nS) * 1000).format("yyyy-MM-dd hh:mm");
		return dat;
	}
	//var time = getLocalTime(1500666666);
	Date.prototype.format = function(format) {
		var date = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S+": this.getMilliseconds()
		};
		if(/(y+)/i.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		for(var k in date) {
			if(new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
					date[k] : ("00" + date[k]).substr(("" + date[k]).length));
			}
		}
		return format;
	}

	export default {
		data() {
			return {
				uid: this.$route.params,
				detailsList: {},
				appiontInfo: [],
			}
		},
		mounted() {
			console.log(this.uid.id);
			let data = {
				pageNum: 1,
				driver_need_id: this.uid.id,
				uid: 5,
				size: 20
			};
			api.MySendDetail(data).then(res => {
				console.log(res)
			}, err => {
				console.log(err.data);
				if(err.data.status_code == 10000) {
					this.detailsList = err.data.need_data;
					this.detailsList.dln_start_date = getLocalTimes(this.detailsList.dln_start_date);
					this.appiontInfo = err.data.appoint_user_info;
				}
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			Back() {
				window.history.back();
			},
			Agree(ev) {
				let data = {
					driver_need_id:ev.target.getAttribute("data-did"),
					c_id:ev.target.getAttribute("data-cid"),
					appoint_id:ev.target.getAttribute("data-uaid"),
					flag:2,
					uid: 5
				};
				api.AgreeRefuseUserAppoint(data).then(res => {
					console.log(res);
				}, err => {
					console.log(err.data);
				})
			}
		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
	/*发布需求详情页*/
	
	.release-msgs div {
		font-size: 0.64rem;
		color: #666;
	}
	
	.releaseDetail {
		font-size: 0.6rem;
		color: #666;
		background-color: #f1f1f1 !important;
		padding-bottom: 1rem;
	}
	
	.releaseDetail li {
		margin-bottom: 0.4rem;
	}
	
	.re-box {
		overflow: hidden;
	}
	
	.re-msg {
		float: right;
		display: inline-block;
		width: 86%;
		margin-right: 0 !important;
	}
	
	.name-state span {
		color: #333;
	}
	
	.name-state b {
		font-weight: normal;
		color: #666;
		float: right;
	}
	
	.name-state {
		height: 1.76rem;
		line-height: 1.76rem;
		background-color: #fff;
		padding: 0 0.6rem;
		box-sizing: border-box;
	}
	
	.name-state img {
		width: 1.04rem;
		height: 1.04rem;
		margin-right: 0.48rem;
		border-radius: 50%;
	}
	
	.release-detail-msg {
		background-color: #fbfbfb;
		padding: 0.76rem 0.6rem 0.1rem;
		box-sizing: border-box;
	}
	
	.release-detail-msg p {
		margin-bottom: 0.6rem;
	}
	
	.to-option {
		height: 1.76rem;
		line-height: 1.76rem;
		background-color: #fff;
	}
	
	.to-option a {
		display: inline-block;
		width: 2rem;
		height: 0.9rem;
		line-height: 0.9rem;
		text-align: center;
		color: #FF5000;
		font-size: 0.6rem;
		border: 1px solid #FF5000;
		border-radius: 0.12rem;
		margin-left: 0.32rem;
		float: right;
		margin-top: 0.28rem;
	}
	
	.to-option a:nth-of-type(1) {
		margin-right: 0.6rem;
	}
	
	.re-header {
		height: 1.76rem;
		line-height: 1.76rem;
		padding: 0 0.6rem !important;
		box-sizing: border-box;
	}
	
	.re-header img {
		position: relative;
		top: 0.48rem;
	}
</style>