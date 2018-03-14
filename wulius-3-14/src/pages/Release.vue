<template>
	<div>
		<!--头部-->
		<header class="header">
			<span class="title">发布</span>
			<router-link to='/My/AddRelease'>添加发布</router-link>
		</header>
		<!--内容区域-->
		<div class="content">
			<section>
				<ul>
					<li v-for='item in mySendList' @click.capture="ToDetail(item.dln_id)" :data-id='item.dln_id'>
						<div class="release_title">
							<div class="direction">
								<span>{{item.dln_start_area_city}}</span><img src="../assets/img/wuliu_direction.png" alt="" /><span>{{item.dln_end_area_city}}</span>
							</div>
							<b class="release_state" v-if='item.dln_needs_state==1'>发布中</b>
							<b class="release_state" v-else-if='item.dln_needs_state==2'>已预约</b>
							<b class="release_state" v-else-if='item.dln_needs_state==3'>已完成</b>
							<b class="release_state" v-else='item.dln_needs_state==4'>已过期</b>
						</div>
						<div>
							<p>出发日期：{{item.dln_start_date}} </p>
							<p>承载量（吨）：{{item.dln_can_weight}}</p>
							<p>费用（元）：{{item.dln_fee}}</p>
							<p class="remark"><span>备注：</span><span class="remark_msg">{{item.dln_beizhu}}</span></p>
						</div>
						<!--<div class="relaese_option">
							<a href="javascript:void(0);" class="left_option"><span class="eidt"><img src="../assets/img/wuliu_xiugai.png"/>修改</span></a>
							<a href="javascript:void(0);" :data-id='item.dln_id' @click="cancelRelease"><span class="cancle"><img src="../assets/img/wuliu_cancel.png"/>取消</span></a>
						</div>-->
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
	import api from '../fetch/api';

	//时间戳转换为日期
	function getLocalTime(nS) {
		var dat = new Date(parseInt(nS) * 1000).format("yyyy-MM-dd");
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
				mySendList: []
			}
		},
		mounted() {
			let data = {
				pageNum: 1,
				uid: 5,
				size: 10
			};
			api.GetMySend(data).then(res => {
				resolve(response.data);
			}, err => {
				console.log(err.data.data);
				if(err.data.status_code == 10000) {
					let datas = err.data.data;
					for(var i in datas) {
						datas[i].dln_start_date = getLocalTime(datas[i].dln_start_date)
					}
					this.mySendList = datas;
				}
			}).catch(err => {
				console.log(err);
			})
		},
		methods: {
			ToDetail(id) {
				this.$router.push({
					name: 'ReleaseDetail',
					params:{
						id:id
					}
				})
			},
			cancelRelease(ev) {
				let data = {
					driver_need_id: ev.target.getAttribute('data-id'),
					uid: 5
				}
				api.CancelMySend(data).then(res => {
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
</style>