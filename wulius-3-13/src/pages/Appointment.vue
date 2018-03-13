<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">历史预约</span>
		</header>
		<!--内容区域-->
		<div class="content">
			<section>
				<ul>
					<li v-for="item in historyAppointList">
						<div class="release_title">
							<div class="direction">
								<span>{{item.ln_start_area_city}}</span><img src="../assets/img/wuliu_direction.png" alt="" /><span>{{item.ln_end_area_city}}</span>
							</div>
						</div>
						<div>
							<p>出发日期：{{item.ln_send_date}}</p>
							<p>承载量（吨）：{{item.ln_goods_weight}}</p>
							<p class="remark"><span>备注：</span><span class="remark_msg">{{item.ln_beizhu}}</span></p>							
						</div>
						<div class="relaese_option" v-if="item.da_driver_cancel==1">
							<span  v-if="item.da_user_advice==1">用户已同意</span>
							<span  v-else-if="item.da_user_advice==2">用户已拒绝</span>
							<span  v-else-if="item.da_user_advice==3">用户确认中</span>							
							<a :href="'tel:'+item.ln_contact_way"  class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>
							<a href="javascript:void(0);" :data-id="item.ln_id" :data-num="item.da_id" @click="Cancel"><span class="cancle"><img src="../assets/img/wuliu_cancel.png"/>取消</span></a>
						</div>
						<div class="relaese_option" v-else-if="item.da_driver_cancel==2">
							<span>已取消</span>						
							<a :href="'tel:'+item.ln_contact_way"  class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>						
						</div>
						<div class="relaese_option" v-else-if="item.da_driver_cancel==3">
							<div v-if="item.da_user_is_agree==1">
								<span>申请取消中</span>
								<a :href="'tel:'+item.ln_contact_way"  class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>
							</div>	
							<div v-else-if="item.da_user_is_agree==2">
								<span>用户拒绝取消</span>
								<a :href="'tel:'+item.ln_contact_way"  class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>
								<a href="###">申请平台介入</a>
							</div>
							<div v-else-if="item.da_user_is_agree==3">
								<span>用户同意取消</span>
								<a :href="'tel:'+item.ln_contact_way"  class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>								
							</div>						
						</div>
					</li>
				</ul>
			</section>
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
				historyAppointList: []
			}
		},
		mounted() {
			let data = {
				size: 10,
				pageNum: 1,
				uid: 5
			}
			api.GetHistoryAppoint(data).then(res => {
				resolve(response.data);
			}, err => {
				if(err.data.status_code == 10000) {
					let datas = err.data.data;
					for(var i in datas) {
						datas[i].ln_send_date = getLocalTimes(datas[i].ln_send_date);
					}
					this.historyAppointList = datas;
				}
			}).catch(err => {
				console.log(err);
			})
		},
		methods: { //api.DriverCancelAppoint
			Cancel(ev) {
				console.log(222)
				let data = {
					need_id: ev.target.getAttribute('data-id'),
					appoint_id: ev.target.getAttribute('data-num'),
					uid: 5
				};
				api.DriverCancelAppoint(data).then(response => {
					console.log(res)
				}, err => {
					console.log(err);
					if(err.data.status_code == 10000) {
						alert('取消成功');
					} else if(err.data.status_code == 10002) {
						alert(err.data.msg)
					}
				})
				
			}
		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
</style>