<template>
	<div>
		<div class="certification">
			<div class="back tl re-header">
				<img @click="Back" src="../assets/img/title_jiantou.png" />物流订单
			</div>
			<div class="certiContent">
				<div class="certiPics releaseDetail">
					<ul>
						<li v-for="item in logisticsList">
							<div class="name-state"><img :src="'https://two.zhiqunale.cn/'+item.c_headurl" alt="" /><span>{{item.c_username}}</span></div>
							<div class="release-detail-msg">
								<p><span>出发日期：</span>{{item.created_at}}</p>
								<p><span>报价（元）：</span>{{item.lo_fee}}</p>
								<!--<p><span>承载量（吨）：</span>20</p>-->
								<p class="re-box"><span>备注：</span><span class="re-msg">{{item.lo_beizhu}}</span></p>
							</div>
							<div class="to-option">
								<template v-if="item.lo_order_state==1">
							<a href="javascript:void(0);" :data-oid='item.lo_id' :data-uid='item.lo_uid' @click="sureRecive(item.lo_id,item.lo_uid)">已收货</a>								
								<a :href="'tel:'+item.c_phone">联系</a>
								</template>
								<template v-else-if="item.lo_order_state==2">
								<a href="javascript:void(0);" :data-oid='item.lo_id' :data-uid='item.lo_uid' @click="sureArrive(item.lo_id,item.lo_uid)">已到货</a>								
								<a :href="'tel:'+item.c_phone">联系</a>
								</template>
								<template v-else>								
								<a :href="'tel:'+item.c_phone">联系</a>
								</template>
								
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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

	import api from '../fetch/api';
	export default {
		data() {
			return {
				logisticsList: []
			}
		},
		mounted() {
			let data = {
				pageNum: 1,
				uid: 5,
				size: 10
			};
			api.GetLogisticsList(data).then(res => {
				console.log(res)
			}, err => {
				console.log(err.data);
				var datas;
				if(err.data.status_code == 10000) {
					datas = err.data.data;
					for(var i in datas) {
						datas[i].created_at = getLocalTimes(datas[i].created_at);
					};
					this.logisticsList = datas
				}
			}).catch(err => {
				console.log(err)
			})

		},
		methods: {
			Back() {
				window.history.back();
			},
			sureRecive(oid, uid) {
				let data = {
					order_id: oid,
					c_id: uid,
					uid: 5
				};
				api.DriverSureRecive(data).then(res => {
					console.log(res)
				}, err => {
					console.log(err.data);
					if(err.data.status_code == 10000) {
						alert(err.data.msg)
					}

				}).catch(err => {
					console.log(err)
				})
			},
			sureArrive(oid, uid) {
				let data = {
					order_id: oid,
					c_id: uid,
					uid: 5
				};
				api.DriverSureArrive(data).then(res => {
					console.log(res)
				}, err => {
					console.log(err.data);
					if(err.data.status_code == 10000) {
						alert(err.data.msg)
					}

				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
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
		color: #208DF0;
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
		width: 3rem;
		height: 1.16rem;
		line-height: 1.16rem;
		text-align: center;
		color: #FF5000;
		font-size: 0.6rem;
		border: 1px solid #FF5000;
		border-radius: 0.16rem;
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