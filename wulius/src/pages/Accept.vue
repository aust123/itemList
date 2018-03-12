<template>
	<div>
		<!--头部-->
		<header class="header">
			<span class="title">接单</span>
			<router-link to='/My/Appointment'>历史预约</router-link>
		</header>
		<div id="filter">
			<span>出发地<img src="../assets/img/choice_jiantou.png"/></span><span>目的地<img src="../assets/img/choice_jiantou.png"/></span><span>出发日期<img src="../assets/img/choice_jiantou.png"/></span><button>筛选</button>
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
							<p>出发日期：2018.3.1 上午9：00</p>
							<p>承载量（吨）：{{item.ln_goods_weight}}</p>
							<p>费用（元）：2000</p>
							<p class="remark"><span>备注：</span><span class="remark_msg">{{item.ln_beizhu}}</span></p>
						</div>
						<div class="relaese_option">
							<a :href="'tel:'+ item.ln_contact_way" class="phone_call left_option"><span class="eidt"><img src="../assets/img/wuliu_phone.png"/>联系</span></a>
							<a href="javascript:void(0);"><span class="cancle"><img src="../assets/img/wuliu_appointment.png"/>预约</span></a>
						</div>
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
	import api from '../fetch/api';
	export default {
		data() {
			return {
				start_area: '',
				end_area: '',
				start_date: '',
				pageNum: 1,
				uid: 5,
				size: 10,
				acceptList: []
			}
		},
		created() {
			this.show();
			console.log(this.acceptList)
		},
		methods: {
			show() {
				let data = {
					start_area: this.start_area,
					end_area: this.end_area,
					start_date: this.start_date,
					pageNum: this.pageNum,
					uid: this.uid,
					size: this.size
				};
				api.GetReleaseRequirement(data).then(response => {
					resolve(response.data);
				}, err => {
					console.log(err.data);
					this.callback(err.data.data);
				})

			},
			callback(data) {
				var that =this;
				that.acceptList=data;

			}
		}
	}
</script>
<style>
	@import url("../assets/css/common.css");
</style>