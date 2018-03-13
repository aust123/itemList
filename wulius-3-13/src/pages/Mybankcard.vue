<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" href="javascript:void(0);" onclick="javascript:history.go(-1)"><img src="../assets/img/title_jiantou.png" /></a>
			<span class="title">我的银行卡</span>
		</header>
		<!--内容区域-->
		<div class="cash_content ">
			<div style="padding: 0;">
				<a class="selected_card" href="###">
					<img class="bankcard_logo" src="../assets/img/bank_zhaoshang.png" alt="" />
					<div class="bankcard_msg">
						<p>招商银行</p>
						<p>尾号3558储蓄卡</p>
					</div>
					<img class="right_delete" src="../assets/img/dizhiguanli_cancel.png" />
				</a>
				<a class="selected_card" href="###">
					<img class="bankcard_logo" src="../assets/img/bank_zhongguo.png" alt="" />
					<div class="bankcard_msg">
						<p>中国银行</p>
						<p>尾号8888储蓄卡</p>
					</div>
					<img class="right_delete" src="../assets/img/dizhiguanli_cancel.png" />
				</a>
			</div>
		</div>
		<div class="add_bankcard"><router-link to='/My/AddBackcard'>添加银行卡</router-link></div>
	</div>
</template>

<script>
</script>

<style>
	@import url("../assets/css/common.css");
</style>