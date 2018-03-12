<template>
	<div>
		<!--头部-->
		<header class="header">			
			<span class="title">发布</span>
			<router-link to='/My/AddRelease'>添加发布</router-link>			
		</header>
		<!--内容区域-->
		<div class="content">
			<section>
				<ul>
					<li>
						<div class="release_title">
							<div class="direction">
								<span>合肥</span><img src="../assets/img/wuliu_direction.png" alt="" /><span>杭州</span>
							</div>
							<b class="release_state">发布中...</b>
						</div>
						<div>
							<p>出发日期：2018.3.1 上午9：00</p>
							<p>承载量（吨）：200</p>
							<p>费用（元）：2000</p>
							<p class="remark"><span>备注：</span><span class="remark_msg">物流杂质百分比10%，货物会在那个车库停放注意查收！</span></p>
						</div>
						<div class="relaese_option">
							<a href="javascript:void(0);" class="left_option"><span class="eidt"><img src="../assets/img/wuliu_xiugai.png"/>修改</span></a>
							<a href="javascript:void(0);"><span class="cancle"><img src="../assets/img/wuliu_cancel.png"/>取消</span></a>							
						</div>
					</li>					
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
</script>

<style>
	@import url("../assets/css/common.css");
</style>