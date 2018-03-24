<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">选择主营纸厂</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div class="paper-list">
				<p>
					<label><input type="checkbox" name="mainpaper"  value=""/><b>安徽纸厂</b><span>安徽合肥</span></label>
				</p>
				<p>
					<label><input type="checkbox" name="mainpaper" value="" /><b>合肥纸厂</b><span>安徽合肥</span></label>
				</p>
				<p>
					<label><input type="checkbox" name="mainpaper" value="" /><b>蚌埠纸厂</b><span>安徽合肥</span></label>
				</p>
				<p>
					<label><input type="checkbox" name="mainpaper" value="" /><b>固镇纸厂</b><span>安徽合肥</span></label>
				</p>
			</div>
			<div class="add_bankcard">
				<a>确认</a>
				<!--<router-link to='/AddBackcard'>确认</router-link>-->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {
			Back() {
				window.history.back();
			}
		}
	}
</script>

<style scoped="scoped">
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
		top: 4px;
	}
	
	.header .right {
		float: right;
		font-size: 26px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
	
	.cash_content {
		margin-top: 18px;
	}
	.paper-list{
		
	}
	.paper-list p{
		height: 120px;
		line-height: 120px;
		color: #333;
		font-size: 32px;
		padding: 0 30px;
		background-color: #fff;
		border-bottom: 1px solid #e0e0e0;
	}
	.paper-list p b{
		position: relative;
		top: -20px;
		margin-left: 22px;
	}
	.paper-list p span{
		font-size: 22px;
		color: #666;
		position: relative;
		left: -128px;
		top: 18px;
	}
	
	.add_bankcard {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	
	.add_bankcard a {
		display: block;
		width: 100%;
		color: #fff;
		background-color: #00D3AF;
		height: 98px;
		line-height: 98px;
		text-align: center;
		font-size: 36px;
	}
</style>