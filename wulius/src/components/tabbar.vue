<template>
	<div class="tabbar" v-show="isShowTabbar">
	<footer>
		<router-link to='/Accept'><img src="../assets/img/icon_order_n.png" /><span>接单</span></router-link>
		<router-link to='/Release'><img src="../assets/img/icon_fabu_n.png" /><span>发布</span></router-link>
		<router-link to='/My'><img src="../assets/img/icon_my_n.png" /><span>我的</span></router-link>
	</footer>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		computed: {
		isShowTabbar () {
			let routeLength = this.$route.path.split('/').length;			
			return routeLength > 2 ? false : true
		}
	}
	}
</script>

<style>
	@import url("../assets/css/common.css");
	footer {
		width: 100%;
		height: 1.96rem;
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
		border-top: 1px solid #D2D2D2;
	}
	
	footer a {
		display: flex;
		color: #999;
		font-size: 0.52rem;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		text-align: center;
		padding-top: 0.12rem;
		box-sizing: border-box;
	}
	
	footer .router-link-active {
		color: #00D3AF;
	}
	
	footer span {
		margin-top: 0.18rem;
		position: relative;
		left: -0.08rem;
	}
	
	footer a:nth-of-type(1) img {
		width: 0.86rem;
		height: 0.92rem;
	}
	
	footer a:nth-of-type(2) img {
		width: 0.92rem;
		height: 0.88rem;
	}
	
	footer a:nth-of-type(3) img {
		width: 0.8rem;
		height: 0.88rem;
	}
</style>