<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png"/></a>
			<span class="title">添加发布</span>
		</header>
		<!--内容区域-->
		<div  id="add_release">
			<div class="write_release">
				<p><span>出发地：</span><input type="text" unselectable disabled id="from"  value="" placeholder="请选择出发地" /><img src="../assets/img/jiantou_right.png"/></p>
				<p><span>目的地：</span><input type="text" unselectable disabled id="destination"  value="" placeholder="请选择目的地" /><img src="../assets/img/jiantou_right.png"/></p>
				<p><span>出发日期：</span><input type="text"  id="date"  value="" placeholder="请选择出发日期" /></p>
				<p><span>承载量（吨）：</span><input type="text" id="weight" value=""  placeholder="请填写货车承载量" /></p>
				<p><span>费用（元）：</span><input type="text" id="money" value="" placeholder="请填写费用" /></p>
				
			</div>
			<div class="write_remark">
				<p>备注</p>
				<div><textarea id="remarkable" rows="" cols="" placeholder="请填写您的需求备注！"></textarea></div>
			</div>
		</div>
		<p class="release_box"><span class="release_btn">确认发布</span></p>
	</div>
</template>

<script>
</script>

<style>
	@import url("../assets/css/common.css");
</style>