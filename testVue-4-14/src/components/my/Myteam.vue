<template>
	<div>
		<header class="header">
			<router-link to="/my" class="back">
        <img src="../../assets/img/title_jiantou.png" />
      </router-link>
      <span class="title">我的团队</span>
		</header>
		<div class="myteam">
			<div class="team-info">
				<p><img src="../../assets/img/my_team_shouyi.png"/>我的团队人数：{{count}}人</p>
				<p><img src="../../assets/img/my_team_shouyi.png"/>团队收益：<span>{{shouyi}}分</span></p>
			</div>
			<p class="tip"><img src="../../assets/img/sqreturn_tishi.png"/>收益规则</p>
      <!--内容区域-->
      <ul class="team-list">
        <li v-for="item in team">
          <div class="member-head">
            <img v-if="item.c_headurl" :src="'https://two.zhiqunale.cn/'+item.c_headurl"/>
            <img v-else src="../../assets/img/login_logo.png"/>
            <!--<img class="ranking" src="../../assets/img/my_team_num1.png" alt="" />-->
          </div>
          <div class="member-info">
            <p>{{item.c_username}}</p>
            <p class="member-income">
                <span>
                  认证收益：<b>{{item.renzheng_shouyi}}分</b>
                </span>
                <span>
                  交易收益：<b>{{item.trade_shouyi}}分</b>
                </span>
            </p>
          </div>
          <a @click="phonepop($event)" :data-phone="item.c_phone" class="phone">
            <img src="../../assets/img/wuliu_phone_p.png" alt=""/>
          </a>
        </li>
      </ul>
		</div>
    <div class="popBox">
      <div class="popContent">
        <h3>{{phone}}</h3>
        <div>
          <a @click="popclose" class="cancel">取消</a>
          <a @click="popclose" class="sure">确定</a>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
    data:function(){
      return{
        shouyi:'',
        count:'',
        teamlist:[],
        phone:''
      }
    },
    mounted:function(){
      var path='https://two.zhiqunale.cn/paper/user/get_my_team_data';
      var param={
        uid:this.$store.state.loginUser.uid,
        device_number:'pc_online'
      }
      this.post(param,path,this.team);
    },
		methods: {
      popclose:function(){
        $('.popBox').fadeOut();
      },
      phonepop:function(e){
        $('.popBox').fadeIn();
        this.phone=$(e.target).parents('a').attr('data-phone');
      },
      team:function(_data){
//        console.log(_data);
        if(_data.status_code=='10000'){
          this.shouyi=_data.all_shouyi;
          this.count=_data.my_team_count;
          this.team=_data.my_team_list;
        }
      }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .popContent h3{
    margin: 90px 0 68px;
  }
  .popContent a{
    width: 180px;
  }
  .phone{
    position: absolute;
    right: 30px;
    top: 30px;
  }
  .phone img{
    width: 38px;
    height: 38px;
  }
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
    margin-bottom: 30px;
	}
	.team-list li{
		height: 180px;
		padding: 0 30px;
		box-sizing: border-box;
		border-bottom: 1px solid #E0E0E0;
    background-color: #fff;
    margin-top: 14px;
    position: relative;
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
