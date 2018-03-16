<template>
	<div>
		<div class="myHeader">
			<div class="header-img">
				<img v-if="ishave" :src="headImg" alt="个人头像" />
				<img v-if="!ishave" src="../assets/img/my_touxiang.png" />
			</div>
			<div class="header-msg">
				<p>姓名：{{uname}}</p>
				<p v-if="uphone">联系方式：{{uphone}}
					<a><img src="../assets/img/my_xiugai.png" alt="" /></a>
				</p>
				<p v-else>联系方式：暂无联系方式
					<!--<a><img src="../assets/img/my_xiugai.png" alt="" /></a>-->
				</p>
			</div>
		</div>
		<div class="myContent">
			<ul>
				<li>
					<router-link to='/My/FundManage'>资金管理<img src="../assets/img/jiantou_right.png" /></router-link>
				</li>
				<li>
					<router-link v-show='isCetert' to='/My/Personal'>我的资料<img src="../assets/img/jiantou_right.png" /></router-link>
					<router-link v-show='!isCetert' to='/My/Certification'>我的资料<img src="../assets/img/jiantou_right.png" /></router-link>
				</li>
				<li>
					<router-link to='/My/Password'>支付密码 <img src="../assets/img/jiantou_right.png" /></router-link>
				</li>
				<li>
					<router-link to='/My/LogisticsOrder'>物流订单 <img src="../assets/img/jiantou_right.png" /></router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	//获取url查询字符串值
	
	export default {
		data() {
			return {
				headImg: '',
				uname: '',
				ishave: false,
				uphone: '',
				isCetert: false
			}
		},
		mounted() {
			if(sessionStorage.uid) {
				this.uid = sessionStorage.uid;
			};
			if(sessionStorage.ceState) {
				if(sessionStorage.ceState == 1 || sessionStorage.ceState == 2 || sessionStorage.ceState == 3) {
					this.isCetert = true;
				}
			}
			//判断uid是否存在，存在则不用做操作，不存在再判断code是否存在			
			if(sessionStorage.img) {
				this.headImg = sessionStorage.img;
				this.ishave = true;
			}
			if(sessionStorage.uname) {
				this.uname = sessionStorage.uname;
			}
			if(sessionStorage.uphone) {
				this.uphone = sessionStorage.uphone;
			}
		},
		methods: {

		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
</style>