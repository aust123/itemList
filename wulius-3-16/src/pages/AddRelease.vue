<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">添加发布</span>
		</header>
		<!--内容区域-->
		<div class="addrelease-content" style="bottom: 0;">
		<div id="add_release">
			<div class="write_release">
				<p>
					<yd-cell-group>
						<yd-cell-item arrow>
							<span slot="left">出发地：</span>
							<!--<input type="text" unselectable disabled id="from" value="" placeholder="请选择出发地" />-->
							<input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="请选择出发地">
						</yd-cell-item>
						<yd-cell-item arrow>
							<span slot="left">目的地：</span>
							<!--<input type="text" unselectable disabled id="from" value="" placeholder="请选择出发地" />-->
							<input slot="right" type="text" @click.stop="show2 = true" v-model="model2" readonly placeholder="请选择目的地">
						</yd-cell-item>
						<yd-cell-item arrow>
							<span slot="left">出发日期：</span>
							<yd-datetime type="date" v-model="datetime4" :init-emit="false" start-year='2018' placeholder='请选择出发日期' slot="right"></yd-datetime>
						</yd-cell-item>
					</yd-cell-group>
					<!--<img src="../assets/img/jiantou_right.png" />--></p>

				<yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
				<yd-cityselect v-model="show2" :callback="result2" :items="district"></yd-cityselect>

				<p><span>目的地：</span><input type="text" unselectable disabled id="destination" value="" placeholder="请选择目的地" /><img src="../assets/img/jiantou_right.png" /></p>
				<p id="movetime"><span>出发日期：</span><input type="text" id="date" value="" placeholder="请选择出发日期" /></p>

				<p><span>承载量（吨）：</span><input type="number" id="weight" value="" v-model="weight" placeholder="请填写货车承载量" /></p>
				<p v-if="radio2==1"><span>费用（元）：</span><input type="number" id="money" value="" v-model="fee" placeholder="请填写费用" /></p>
				<p class="selectType">
					<span>费用是否面议：</span>
					<yd-radio-group v-model="radio2" color="#00d3af">
						<yd-radio val="1">否</yd-radio>
						<yd-radio val="2">是</yd-radio>
					</yd-radio-group>
				</p>
			</div>
			<div class="write_remark">
				<p>备注</p>
				<div><textarea id="remarkable" rows="" cols="" v-model="remark" placeholder="请填写您的需求备注！"></textarea></div>
			</div>
		</div>
		<p class="release_box"><span class="release_btn" @click="sureRelease">确认发布</span></p>
		</div>
	</div>
</template>

<script>
	import District from 'ydui-district/dist/jd_province_city_area_id';
	import api from '../fetch/api';
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
	
	 function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    };
    
	export default {
		data() {
			return {
				show1: false,
				model1: '',
				district: District,
				datetime4: '',
				show2: false,
				model2: '',
				startPro: '',
				startCity: '',
				startDis: '',
				endPro: '',
				endCity: '',
				endDis: '',
				weight: '',
				fee: '',
				remark: '',
				radio2: 1,
				uid:''
			}
		},
		mounted(){
			if(sessionStorage.uid){
				this.uid=sessionStorage.uid;
			}
		},
		methods: {
			result1(ret) {
				this.model1 = ret.itemName1 + ' ' + ret.itemName1 + ' ' + ret.itemName3;				
				this.startPro = ret.itemName1;
				this.startCity = ret.itemName2;
				this.startDis = ret.itemName3;
				
			},
			result2(ret) {
				this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
				this.endPro = ret.itemName1;
				this.endCity = ret.itemName2;
				this.endDis = ret.itemName3;
				
			},
			sureRelease() {
				let data = {
					start_area_province: this.startPro,
					start_area_city: this.startCity,
					start_area_dist: this.startDis,
					end_area_province: this.endPro,
					end_area_city: this.endCity,
					end_area_dist: this.endDis,
					start_date: DateToUnix(this.datetime4),
					can_weight: this.weight,
					fee: this.fee,
					beizhu: this.remark,
					is_mianyi: this.radio2,
					uid: this.uid
				};

				if(this.radio2 == 2) {
					if(data.fee) {
						data.fee = 0;
					}
				}
				api.PublishWay(data).then(res => {
					console.log(res)
					
				}, err => {					
					if(err.data.status_code == 10000) {
						alert(err.data.msg)
					}else if(err.data.status_code == 10001){
						alert(err.data.msg);
					}
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style >
	@import url("../assets/css/common.css");
	.selectType {
		overflow: hidden;
	}
	
	.selectType>span {
		float: left;
	}
	
	.selectType div {
		float: left;
	}
	
	.yd-radio {
		line-height: initial;
	}
	
	.yd-radio-icon {
		margin-right: 0.16rem !important;
	}
	
	.yd-cell-left span {
		font-size: 0.64rem;
		color: #666;
	}
	
	.yd-cell-item {
		padding-left: 0;
	}
	
	.yd-cell-left {
		align-items: flex-start;
	}
	.yd-datetime-input{
		font-size: 0.64rem !important;
		color: #666 !important;
	}
	
</style>