<template>
	<div class="my">
		<div class="my-content">
		<header>
			<a href="javascript:void(0);" id="manage">管理店铺资料</a>
			<div>
				<img id="touxiang" src="../../assets/img/my_touxiang.png" />
				<p class="my-name">我的昵称</p>
				<p class="my-identity"><span><img src="../../assets/img/my_icon_dabaozhan.png"/>打包站</span><span><img class="address-img" src="../../assets/img/my_icon_zuobiao.png"/>安徽省合肥市</span></p>
			</div>
		</header>
		<div class="my-manage">
			<a href="javascript:void(0);"><img src="../../assets/img/my_icon_card.png"/>银行卡</a>
			<router-link to="/Certification"><img src="../../assets/img/my_icon_renzheng.png"/>实名认证</router-link>
			
		</div>
		<div class="my-item-list">			
			<router-link to='/FundManage'>资金管理</router-link>
			<router-link to='/Password'>支付密码</router-link>
			<a href="javascript:void(0);">企业管理</a>
			<router-link to='/Cocertification'>企业认证</router-link>		
			<a href="javascript:void(0);">退款处理</a>			
			<router-link to='/OrderMemo'>订单备忘录</router-link>
			<a href="javascript:void(0);">地址管理</a>			
			<router-link to='/Myteam'>我的团队</router-link>
			<a href="javascript:void(0);">我的分享码</a>
			<a href="javascript:void(0);">客服电话</a>			
			<router-link to='/About'>关于纸去哪了</router-link>
		</div>
		<p class="login-out"><span>退出登录</span></p>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.my {
		width: 100%;
		overflow-x: hidden;
		height: 100%;
		overflow-y: scroll;
	}
	.my-content{
		padding-bottom: 280px;
	}
	header {
		width: 100%;
		background-color: #00D3AF;
		color: #fff;
		text-align: center;
		height: 380px;
	}
	
	#manage {
		padding-top: 30px;
		display: block;
		text-align: right;
		color: #fff;
		font-size: 26px;
		padding-right: 30px;
		box-sizing: border-box;
	}
	
	#touxiang {
		width: 142px;
		height: 142px;
		border-radius: 50%;
	}
	
	.my-name {
		font-size: 32px;
		margin-top: 20px;
		margin-bottom: 30px;
	}
	
	.my-identity span {
		font-size: 28px;
	}
	
	.my-identity span:nth-of-type(1) {
		margin-right: 64px;
	}
	
	.my-identity img {
		margin-right: 16px;
	}
	
	.my-identity img:nth-of-type(1) {
		width: 35px;
		height: 34px;
	}
	
	.my-identity img.address-img {
		width: 24px;
		height: 34px;
	}
	/*我的银行卡和实名认证*/
	.my-manage{
		background-color: #fff;
		height: 92px;
	
		flex-grow: 1;
		line-height: 92px;
	}
	.my-manage a:nth-of-type(1){	
		border-right: 1px solid #E0E0E0;
	}
	.my-manage a{
		display: inline-block;
		width: 49%;
		color: #333;
		font-size: 34px;
		text-align: center;
	}
	.my-manage img{
		margin-right: 28px;
		width: 50px;
	vertical-align: -5px;
	}
	.my-manage img:nth-of-type(1){
		height: 38px;
	}
	.my-manage img:nth-of-type(2){
		height: 36px;
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
	.login-out{
		margin-top: 78px;
		color: #FF5000;
		font-size: 36px;
		text-align: center;
	
	}
	.login-out span{
		display: inline-block;
		width: 614px;
		height: 80px;
		line-height: 80px;
		text-align: center;
		border-radius: 10px;		
		border: 2px solid #FF5000;
	}
</style>