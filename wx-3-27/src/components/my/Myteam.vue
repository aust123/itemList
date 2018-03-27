<template>
	<div>	
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">我的团队</span>
		</header>		
		<div class="myteam">			
			<div class="team-info">
				<p><img src="../../assets/img/my_team_shouyi.png"/>我的团队人数：25人</p>
				<p><img src="../../assets/img/my_team_shouyi.png"/>我的团队人数：<span>10000元</span></p>
			</div>
			<p class="tip"><img src="../../assets/img/sqreturn_tishi.png"/>收益规则</p>
			<div class="team-list">
				<ul>
					<li>
						<div class="member-head"><img src="../../assets/img/my_team_touxiang2.png"/><img class="ranking" src="../../assets/img/my_team_num1.png" alt="" /></div>
						<div class="member-info">
							<p>马化腾</p>
							<p class="member-income"><span>认证收益：<b>2000元</b></span><span>交易收益：<b>2000元</b></span></p>
						</div>
					</li>
					<li>
						<div class="member-head"><img src="../../assets/img/my_team_touxiang2.png"/><img class="ranking" src="../../assets/img/my_team_num2.png" alt="" /></div>
						<div class="member-info">
							<p>马化腾</p>
							<p class="member-income"><span>认证收益：<b>2000元</b></span><span>交易收益：<b>2000元</b></span></p>
						</div>
					</li>
					<li>
						<div class="member-head"><img src="../../assets/img/my_team_touxiang2.png"/><img class="ranking" src="../../assets/img/my_team_num3.png" alt="" /></div>
						<div class="member-info">
							<p>马化腾</p>
							<p class="member-income"><span>认证收益：<b>2000元</b></span><span>交易收益：<b>2000元</b></span></p>
						</div>
					</li>					
				</ul>
			</div>
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
		top: 2px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
	}
	.myteam{
		margin-top: 18px;		
	}
	.team-info{
		background-color: #fff;
		font-size: 32px;
		color: #666;
		padding: 42px 30px;
		box-sizing: border-box;
	}
	.team-info img{
		width: 42px;
		height: 45px;
		margin-right:34px ;
	}
	.team-info p:nth-of-type(1){
		margin-bottom: 48px;
	}
	.team-info span{
		color: #FF5000;
	}
	.tip{
		text-align: right;
		padding: 0 30px;
		font-size: 28px;
		color: #999;
		height: 68px;
		line-height: 68px;
	}
	.tip img{
		width: 28px;
		height: 28px;
		margin-right: 4px;
	}
	.team-list{
		font-size: 32px;
		color: #666;
		background-color: #fff;
	}
	.team-list li{
		height: 180px;		
		padding: 0 30px;
		box-sizing: border-box;
		border-bottom: 1px solid #E0E0E0;
	}
	.team-list li div{
		float: left;
		height: 100%;
	}
	.member-head{
		margin-right: 35px;
		line-height: 180px;
		position: relative;
	}
	.member-head img{
		width: 90px;
		height: 90px;
	}
	.member-head  .ranking{
		position: absolute;
		bottom: 25px;
		right: 0;
		width: 40px;
		height: 55px;
		background: transparent;
	}
	.member-head  .ranking.num{		
		width: 40px;
		height: 40px;
		background: transparent;
	}
	
	.member-info p:nth-of-type(2){
		font-size: 26px;
	}
	.member-info p{		
		margin-top: 34px;
	}
	.member-info p:nth-of-type(2) span:nth-of-type(1){
		margin-right: 42px;
	}
	.member-info p:nth-of-type(2) b{
		font-weight: normal;
		color: #FF5000;
	}
</style>