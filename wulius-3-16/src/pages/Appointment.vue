<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">历史预约</span>
		</header>
		<!--内容区域-->
		<div class="content" style="bottom: 0;">
			<section>
				<yd-pullrefresh :callback="loadRefush" ref="pullrefreshDemo">
					<yd-infinitescroll :callback="loadMore" ref="infinitescrollDemo">
						<ul slot="list">
							<li v-for="item in historyAppointList">
								<div class="release_title">
									<div class="direction">
										<span>{{item.ln_start_area_city}}</span><img src="../assets/img/wuliu_direction.png" alt="" /><span>{{item.ln_end_area_city}}</span>
									</div>
									<template v-if="item.da_driver_cancel==1">
										<b v-if="item.da_user_advice==1">用户已同意</b>
										<b v-else-if="item.da_user_advice==2">用户已拒绝</b>
										<b v-else-if="item.da_user_advice==3">用户确认中</b>
									</template>
									<template v-else-if="item.da_driver_cancel==2">
										<b>已取消</b>
									</template>
									<template v-else-if="item.da_driver_cancel==3">
										<b v-if="item.da_user_is_agree==1">申请取消中</b>
										<b v-else-if="item.da_user_is_agree==2">
											<template v-if="item.da_user_advice==1">
												用户拒绝取消
											</template>
											<template v-else-if="item.da_user_advice==4">
												平台介入中
											</template>
										</b>
										<b v-else-if="item.da_user_is_agree==3">用户同意取消</b>
									</template>
								</div>
								<div>
									<p>出发日期：{{item.ln_send_date}}</p>
									<p>承载量（吨）：{{item.ln_goods_weight}}</p>
									<p class="remark"><span>备注：</span><span class="remark_msg">{{item.ln_beizhu}}</span></p>
								</div>
								<div class="relaese_option" v-if="item.da_driver_cancel==1">
									<a :href="'tel:'+item.ln_contact_way" class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>
									<a href="javascript:void(0);" :data-id="item.ln_id" :data-num="item.da_id" @click="Cancel(item.ln_id,item.da_id)"><span class="cancle"><img src="../assets/img/wuliu_cancel.png"/>取消</span></a>
								</div>
								<div class="relaese_option" v-else-if="item.da_driver_cancel==2">

									<a :href="'tel:'+item.ln_contact_way" class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>
									<a href="javascript:void(0);"></a>
								</div>
								<div class="relaese_option" v-else-if="item.da_driver_cancel==3">
									<template v-if="item.da_user_is_agree==1">
										<a href="javascript:void(0);"></a>
										<a :href="'tel:'+item.ln_contact_way" class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>
									</template>
									<template v-else-if="item.da_user_is_agree==2">											
										<a :href="'tel:'+item.ln_contact_way" class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>
										<a href="javascript:void(0);" :data-num="item.da_id" @click="applyPlatform(item.da_id)">申请平台介入</a>									
									</template>
									<template v-else-if="item.da_user_is_agree==3">
										<a :href="'tel:'+item.ln_contact_way" class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>
										<a href="javascript:void(0);"></a>
									</template>
								</div>
							</li>
						</ul>
						<!-- 数据全部加载完毕显示 -->
						<span slot="doneTip" style="font-size: 0.5rem;">数据已加载完</span>

						<!-- 加载中提示，不指定，将显示默认加载中图标 -->
						<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg" />
					</yd-infinitescroll>
				</yd-pullrefresh>
				<yd-backtop></yd-backtop>
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
				historyAppointList: [],
				pageNum: 1,
				size: 10,
				uid:''
			}
		},
		mounted() {
			if(sessionStorage.uid){
				this.uid=sessionStorage.uid;
			}
			this.getdata();			
		},
		methods: {
			loadMore() {
				this.getdata();
				/* 单次请求数据完毕 */
				this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
			},
			loadRefush() {
				this.getdata();
				this.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
			},
			getdata() {
				let data = {
					size: this.size,
					pageNum: this.pageNum,
					uid: this.uid
				}
				api.GetHistoryAppoint(data).then(res => {
					resolve(response.data);
				}, err => {
					console.log(err.data)					
					if(err.data.status_code == 10000) {
						let datas = err.data.data;
						for(var i in datas) {
							datas[i].ln_send_date = getLocalTime(datas[i].ln_send_date);
						}
						//this.historyAppointList = datas;
						var list = datas;
						this.historyAppointList.push.apply(this.historyAppointList, list);
						/*下拉加载提示内容*/
						if(list.length < this.size) {
							/* 所有数据加载完毕 */
							this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
							return;
						}
						this.pageNum++;
						
					}
				}).catch(err => {
					console.log(err);
				})
			},
			Cancel(did, dnum) {
				let data = {
					need_id: did,
					appoint_id: dnum,
					uid: this.uid
				};
				api.DriverCancelAppoint(data).then(response => {
					console.log(res)
				}, err => {
					console.log(err);
					if(err.data.status_code == 10000) {
						alert('取消成功');
						this.$root.reload();
					} else if(err.data.status_code == 10002) {
						alert(err.data.msg)
					}
				})

			},
			applyPlatform(dnum){
				let data = {
					appoint_id: dnum,
					uid: this.uid
				};
				api.PlatformHelp(data).then(response => {
					console.log(res)
				}, err => {
					console.log(err);
					if(err.data.status_code == 10000) {
						alert('申请成功');
						this.$root.reload();
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
	.release_title b {
		font-weight: normal;
		color: #208DF0;
		float: right;
		font-size: 0.64rem;
	}
</style>