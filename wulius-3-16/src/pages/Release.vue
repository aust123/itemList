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
				<yd-pullrefresh :callback="loadRefush" ref="pullrefreshDemo">
					<yd-infinitescroll :callback="loadMore" ref="infinitescrollDemo">
						<ul slot='list'>
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
				mySendList: [],
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
				this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
			},
			loadRefush() {
				this.getdata();
				this.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
			},
			getdata() {
				let data = {
					pageNum: 1,
					uid: this.uid,
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
						var list = datas;
						this.mySendList.push.apply(this.mySendList, list);
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
			ToDetail(id) {
				this.$router.push({
					name: 'ReleaseDetail',
					params: {
						id: id
					}
				})
			},
			cancelRelease(ev) {
				let data = {
					driver_need_id: ev.target.getAttribute('data-id'),
					uid: this.uid
				}
				api.CancelMySend(data).then(res => {
					console.log(res)
				}, err => {
					console.log(err.data);
					if(err.data.status_code == 10000) {
						alert(err.data.msg)
					}else{
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