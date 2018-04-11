<template>
	<div>
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">企业认证</span>
		</header>
		<div class="my-item-list">
			<a class="dbz" @click="certifi(1,$event)">打包站</a>
			<a class="mygs" @click="certifi(2,$event)">贸易公司</a>
			<a class="zc" @click="certifi(3,$event)">纸厂</a>
		</div>
	</div>
</template>

<script>
	export default {
    mounted:function(){
      $('.dbz').attr('data-qyrz',this.$route.query.dbz);
      $('.mygs').attr('data-qyrz',this.$route.query.mygs);
      $('.zc').attr('data-qyrz',this.$route.query.zc);
    },
		methods: {
			Back() {
				window.history.back();
			},
      certifi:function(param,e){
        if($(e.target).attr('data-qyrz')==0||$(e.target).attr('data-qyrz')==3){
          sessionStorage.removeItem('detailAddr_lng');
          sessionStorage.removeItem('detailAddr_lat');
          sessionStorage.removeItem('detailAddr');
          sessionStorage.removeItem('detailAddress');
          this.$router.push({path:'/CocertificationWrite',query:{
            identity:param,
              state:$(e.target).attr('data-qyrz')
          }});
        }else{
          this.$router.push({path:'/CocertificationShow',query:{
            identity:param,
            state:$(e.target).attr('data-qyrz')
          }});
        }
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
		top: 3px;
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
