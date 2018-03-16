<template>
	<div class="tabbar" v-show="isShowTabbar">
		<div id='footer'>
			<router-link to='/Accept'>
				<img v-show="TabbarSe.t1" src="../assets/img/icon_order_n.png" />
				<img v-show="!TabbarSe.t1" src="../assets/img/icon_order_p.png" />
				<span>接单</span>
			</router-link>
			<router-link to='/Release'>
				<img v-show="TabbarSe.t2" src="../assets/img/icon_fabu_n.png" />
				<img v-show="!TabbarSe.t2" src="../assets/img/icon_fabu_p.png" />
				<span>发布</span>
			</router-link>
			<router-link to='/My'>
				<img v-show="TabbarSe.t3" src="../assets/img/icon_my_n.png" />
				<img v-show="!TabbarSe.t3" src="../assets/img/icon_my_p.png" />
				<span>我的</span>
			</router-link>
			
			
			<!--<router-link to='/Accept'>
				<img src="../assets/img/icon_order_n.png" />				
				<span>接单</span>
			</router-link>
			<router-link to='/Release'>
				<img src="../assets/img/icon_fabu_n.png" />				
				<span>发布</span>
			</router-link>
			<router-link to='/My'>
				<img src="../assets/img/icon_my_n.png" />			
				<span>我的</span>
			</router-link>-->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabrs: {
					t1: false,
					t2: true,
					t3: true
				}
			}
		},
		computed: {
			isShowTabbar() {
				//let routeLength = this.$route.path.split('/').length;

				let isValue = this.$route.path.split('/');
				console.log(isValue)
				if(isValue[1]) {
					if(isValue[2]) {
						return false;
					}
					return true;
				} else {
					return false
				}
			},
			TabbarSe() {
				console.log(this.$route.name);
				if(this.$route.name == 'Accept') {
					return this.tabrs = {
						t1: false,
						t2: true,
						t3: true
					}
				} else if(this.$route.name == 'Release') {
					return this.tabrs = {
						t1: true,
						t2: false,
						t3: true
					}
				} else if(this.$route.name == 'My') {
					return this.tabrs = {
						t1: true,
						t2: true,
						t3: false
					}
				} else {
					return false;
				}

			}

		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
	#footer {
		width: 100%;
		height: 1.96rem;
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
		border-top: 1px solid #D2D2D2;
		overflow: hidden;
	}
	
	#footer a {
		display: flex;
		color: #999;
		font-size: 0.52rem;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		text-align: center;
		padding-top: 0.12rem;
		box-sizing: border-box;
	}
	
	#footer .router-link-active {
		color: #00D3AF;
	}
	
	#footer span {
		margin-top: 0.18rem;
		position: relative;
		left: -0.08rem;
	}
	
	#footer a:nth-of-type(1) img {
		width: 0.86rem;
		height: 0.92rem;
	}
	
	#footer a:nth-of-type(2) img {
		width: 0.92rem;
		height: 0.88rem;
	}
	
	#footer a:nth-of-type(3) img {
		width: 0.8rem;
		height: 0.88rem;
	}
</style>