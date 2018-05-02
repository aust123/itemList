<template>
	<div>
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">退款处理</span>
		</header>
		<div class="select"><span @click="toApply" :class="{current:!isCurrent}">我申请的退款</span><span @click="toMyrefund" :class="{current:isCurrent}">我的退款</span></div>
		<transition name='fade' mode='out-in'>
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	//import refundlist from "@/components/my/myrefund"
	export default {

		data() {
			return {
				isCurrent: true
			}
		},
		mounted() {
			if(this.$route.path == '/myapply') {
				this.isCurrent = false;
			}
		},
		methods: {
			Back() {
				window.history.back();
			},
			toApply() {
				this.$router.replace({
					name: 'myapply'
				});
				this.isCurrent = false;

			},
			toMyrefund() {
				this.$router.replace({
					name: 'myrefund'
				});
				this.isCurrent = true;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.fade-enter-active,
	.fade-leave-active {		
		transition: all .1s ease-in;
	}
	.fade-enter,
	.fade-leave-to{
		opacity: 0;
	}
	
	.header {
		height: 88px;
		line-height: 88px;
		width: 100%;
		background-color: #00d3af;
		position: relative;
		color: #fff;
		text-align: center;
	}
	
	.title {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		font-size: 36px;
	}
	
	.header a {
		font-size: 30px;
		float: right;
		color: #fff;
		margin-right: 29px;
		position: relative;
		z-index: 66;
	}
	
	.header .back {
		float: left;
		margin-left: 30px;
		top: 2px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
	
	.select {
		height: 118px;
		line-height: 118px;
		text-align: center;
		color: #00D3AF;
		font-size: 30px;
		background-color: #fff;
	}
	
	.select span {
		display: inline-block;
		height: 60px;
		line-height: 60px;
		width: 222px;
		text-align: center;
		border: 4px solid #00D3AF;
	}
	
	.select span:nth-of-type(1) {
		border-right: none;
		border-radius: 12px 0 0 12px;
	}
	
	.select span:nth-of-type(2) {
		border-radius: 0 12px 12px 0;
	}
	
	.current {
		color: #fff;
		background-color: #00D3AF;
	}
</style>