<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">资金管理</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div class="balance">
				<p>账户余额&nbsp;（元）</p>
				<p>20，000.00</p>
				<p>提现中（元）：1,000.00</p>
			</div>
			<div class="cash_option">
				<router-link to='/My/Enchashment'>提现 <img src="../assets/img/jiantou_right.png"/></router-link>
				<router-link to='/My/Mybankcard'>银行卡管理 <img src="../assets/img/jiantou_right.png"/></router-link>					
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	@import url("../assets/css/common.css");
</style>