<template>
	<div>
		<!--头部-->
		<header class="header">
			<span class="title">接单</span>
			<router-link to='/My/Appointment'>历史预约</router-link>
		</header>
		<div id="filter">
			<!--<span>出发地<img src="../assets/img/choice_jiantou.png"/></span><span>目的地<img src="../assets/img/choice_jiantou.png"/></span>-->			
			<input slot="right" style="width: 3.5rem;margin-left: 0.3rem;" type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="出发地">
			<input slot="right" type="text" style="width: 3rem;" @click.stop="show2 = true" v-model="model2" readonly placeholder="目的地">
			<yd-cityselect v-model="show2" :callback="result2" :items="district"></yd-cityselect>
			<yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
			<yd-datetime style='float: left;position: relative;left: 7.5rem;top: -0.77rem;' start-year='2018' :init-emit="false" placeholder='出发日期' type="date" v-model="datetime4"  slot="right"></yd-datetime>					
			<!--<span class="startDate" @click.native="choseDate" style="width: 4rem;">		-->	
			<!--<img src="../assets/img/choice_jiantou.png"/>--></span>
			<button id="se_btn" @click="ToQuery">筛选</button>
		</div>
		<!--内容区域-->
		<div class="content" style="top: 4.46rem;">
			<section>
				<ul>
					<li v-for='item in acceptList'>
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
						<div class="relaese_option">
							<a :href="'tel:'+ item.ln_contact_way" class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>
							<a :data-id="item.ln_id" @click.prevent="makeAnPoint(item.ln_id)" href="javascript:void(0);"><span class="cancle"><img src="../assets/img/wuliu_appointment.png"/>预约</span></a>
						</div>
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
	import api from '../fetch/api';
	import District from 'ydui-district/dist/jd_province_city_area_id';
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

	//日期转化为时间戳
	function DateToUnix(string) {
		var f = string.split(' ', 2);
		var d = (f[0] ? f[0] : '').split('-', 3);
		var t = (f[1] ? f[1] : '').split(':', 3);
		var time = (new Date(
			parseInt(d[0], 10) || null,
			(parseInt(d[1], 10) || 1) - 1,
			parseInt(d[2], 10) || null,
			parseInt(t[0], 10) || null,
			parseInt(t[1], 10) || null,
			parseInt(t[2], 10) || null
		)).getTime() / 1000
		return time;
	}

	export default {
		data() {
			return {
				start_area: '',
				end_area: '',
				start_date: '',
				pageNum: 1,
				uid: 5,
				size: 10,
				acceptList: [],
				datetime4: '', //查询时间
				show1: false,
				model1: '',
				district: District,					
				show2: false,
				model2: ''			
			}
		},
		mounted() {
			this.show();
		},
		methods: {
			result1(ret) {
				if(ret.itemName1=='上海'||ret.itemName1=='北京'||ret.itemName1=='天津'||ret.itemName1=='重庆'){
					this.model1 = ret.itemName1;	
				}else{
					this.model1 = ret.itemName2;
				}		
				console.log(this.model1)
			},
			result2(ret) {
				if(ret.itemName1=='上海'||ret.itemName1=='北京'||ret.itemName1=='天津'||ret.itemName1=='重庆'){
					this.model2 = ret.itemName1;	
				}else{
					this.model2 = ret.itemName2;
				}
				console.log(this.model2)
			},
			show() {
				let data = {
					start_area: this.model1,
					end_area: this.model2,
					pageNum: this.pageNum,
					uid: this.uid,
					size: this.size
				};
				if(this.datetime4){
					data.start_date=DateToUnix(this.datetime4);
				}else{
					data.start_date=this.datetime4;
				}
				
				api.GetReleaseRequirement(data).then(response => {
					resolve(response.data);
				}, err => {
					var datas;
					if(err.data.status_code == 10000) {
						datas = err.data.data;
						for(var i in datas) {
							datas[i].ln_send_date = getLocalTime(datas[i].ln_send_date);
						}
						this.acceptList = datas;
					}else{
						alert(err.data.msg)
					}
				})

			},
			ToQuery() {
				console.log(this.datetime4)
				this.show();
			}, //确定预约
			makeAnPoint(id) {
				let data = {
					uid: 5,
					need_id: id
				};
				api.DriverAppoint(data).then(response => {
					console.log(res)
				}, err => {
					console.log(err);
					if(err.data.status_code == 10000) {
						alert('预约成功')
					} else if(err.data.status_code == 10002) {
						alert(err.data.msg)
					}
				})
			},
			/*choseDate() {
				this.$refs.datetime.open();
			},*/
			change() {
				document.querySelector('.startDate').innerHTML = ''
			}
		}
	}
</script>
<style>
	@import url("../assets/css/common.css");
	
	
	.yd-datetime-input {		
		width: 4rem;		
		position: relative;
	}
	.yd-datetime-placeholder {		
		position: relative;
		top: -0.1rem;
	}
	.filter input{
		width: 3rem !important;
	}
</style>