<template>
	<div>	
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">企业认证</span>
		</header>		
		<div class="my-item-list">			
			<router-link to='/CocertificationWrite'>打包站</router-link>					
			<router-link to='/CocertificationWrite'>贸易公司</router-link>
			<router-link to='/CocertificationWrite'>纸厂</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			Back() {
				window.history.back();
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
		top: 10px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
	
	.my-item-list{
		margin-top:16px ;
		background-color: #FFFFFF;
	}
	.my-item-list a{
		color: #333;
		font-size: 34px;
		display: block;
		box-sizing: border-box;
		padding-left: 46px;
		background: url(../../assets/img/jiantou_right.png) no-repeat;
		background-position: 680px center;
		background-size:17px 31px ;
		height: 108px;
		line-height: 108px;
		border-bottom: 1px solid #E0E0E0;
	}
	
	
</style>