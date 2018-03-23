<template>
	<div class="my">
		<div class="my-content">
			<header>
				<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a>
				<div @click="ToEdit">
					<img id="touxiang" src="../../assets/img/my_touxiang.png" />
					<p class="my-name">我的昵称的店铺</p>
					<p class="my-identity"><span><img src="../../assets/img/my_icon_dabaozhan.png"/>打包站</span><span><img class="address-img" src="../../assets/img/my_icon_zuobiao.png"/>安徽省合肥市</span></p>
				</div>
			</header>
			<div class="store-info">
				<span>店铺的浏览量<b>50</b></span>
				<span>店铺的关注人数<b>100</b></span>
				<span>商品的关注人数<b>20</b></span>
			</div>
			<div class="my_score">
				<p>我的评分：<span><img src="../../assets/img/sell_shop_star_p.png" alt="" /><img src="../../assets/img/sell_shop_star_p.png" alt="" /><img src="../../assets/img/sell_shop_star_n.png" alt="" /><img src="../../assets/img/sell_shop_star_n.png" alt="" /><img src="../../assets/img/sell_shop_star_n.png" alt="" /></span><i>6.5分</i></p>
				<p>我的排名：<b>10名</b></p>
				<!--贸易公司显示主营纸厂和服务纸厂-->
				<p>主营纸厂：<span>山鹰纸业</span></p>
				<p class="servers"><span>服务纸厂：</span><span class="servers-name">玖龙纸业    玖龙纸业   玖龙纸业  玖龙纸业</span></p>
			</div>
			<div class="power">
				<h3>公司实力展示</h3>
				<p>弗里德里希·威廉·恩斯特·保卢斯（Friedrich Wilhelm Ernst Paulus）（1890年9月23日—1957年2月1日），第十集团军参谋长兼国防军副总参谋长，德军元帅。草拟巴巴罗萨计划的军事家之一。第二次世界大战爆发期间，他指挥的第六集团军，主要担负了并委以参与斯大林格勒战役。在斯大林格勒战役这段时间内，他一直服从希特勒的命令，按照他的命令来调整兵力，即使后来被敌军包围也是如此。由于希特勒过度分散兵力，使得对斯大林格勒作战的第6军团并不能得到集中的火力支援。此外，埃里希·冯·曼施坦因元帅突围之建议得不到希特勒及保卢斯本人之执行，这导致了第6军团被重重包围。再加上斯大林格勒军民受到斯大林的命令死守该城，都使得德军在突击及进攻上损失惨重。后被围困的德军只好奉令坚守占领的一部分斯大林格勒，后第六集团军在苏军围困下补给困难陷入僵局，保卢斯上将指挥失误导致军心散漫，士兵士气低落。选择拒绝突围。直接导致了逼入窘境的第六集团军主力耗尽，就此走向覆灭。这是二战的关键性转折点。其本人也是被迫晋升和被俘投降的德国陆军元帅与纳粹党军事家。</p>
			</div>
			<div class="add_bankcard">
				<!--<a>添加银行卡</a>-->
				<router-link to='/Editstore'>编辑店铺资料</router-link>
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
		methods: {
			Back() {
				window.history.back();
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.my {
		width: 100%;
		overflow-x: hidden;
		height: 100%;
		overflow-y: scroll;
	}
	
	.my-content {
		padding-bottom: 180px;
	}
	
	header {
		width: 100%;
		background-color: #00D3AF;
		color: #fff;
		text-align: center;
		height: 380px;
	}
	
	.back {
		padding-top: 30px;
		display: block;
		text-align: left;
		color: #fff;
		box-sizing: border-box;
		padding-left: 30px;
	}
	
	.back img {
		width: 20px;
		height: 38px;
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
	.store-info{
		height: 118px;
		display: flex;
		width: 100%;
		justify-content: space-around;
		font-size: 30px;
		color: #333;
		align-items:center;
		background-color: #fff;
	}
	.store-info span{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.store-info b{
		font-size: 25px;
		color: #999;
	}
	.my_score{
		margin-top: 16px;
		font-size:30px;
		color: #333;
	}
	.my_score p{		
		padding: 28px 30px;
		border-bottom: 1px solid #E0E0E0;
		background-color: #fff;
	}
	.my_score i{
		font-size: 30px;
		font-style: normal;
		color: #f3c524;
		float: right;	
	}
	.my_score b{
		font-weight: normal;
		color: #FF5000;
		margin-left: 35px;
	}
	.my_score span{
		margin-left: 35px;
	}
	.my_score img{
		width: 35px;
		height: 34px;
		margin-right: 40px;
	}
	.power{
		margin-top:16px;
		padding: 36px 40px;
		background-color: #FFFFFF;
	}
	.power h3{		
		font-size: 30px;
		color: #333;
		margin-bottom: 26px;
	}
	.power p{
		color: #999;
		font-size: 28px;
		
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
	.servers span:nth-of-type(1){
		position: relative;
		display: inline-block;
		width: 24%;
		top: -40px;
		margin-left: 0;
	}
	.servers span.servers-name{
		display: inline-block;
		width: 65%;
		margin-left: 20px;
	}
</style>