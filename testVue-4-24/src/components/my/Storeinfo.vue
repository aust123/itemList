<template>
	<div class="my">
		<div class="my-content">
			<header>
				<router-link to="/my" class="back">
          <img src="../../assets/img/title_jiantou.png" />
        </router-link>
				<div>
          <img id="touxiang" v-if="this.storeMsg.c_store_headurl" :src="'https://two.zhiqunale.cn/'+this.storeMsg.c_store_headurl" />
					<img id="touxiang" v-else src="../../assets/img/my_touxiang.png" />
          <p class="my-name">{{this.storeMsg.c_store_name}}</p>
					<p class="my-identity">
            <span v-if="this.storeMsg.c_main_business==1">
              <img src="../../assets/img/my_icon_dabaozhan.png"/>
              打包站
            </span>
            <span v-else-if="this.storeMsg.c_main_business==2">
              <img src="../../assets/img/my_icon_dabaozhan.png"/>
              贸易公司
            </span>
            <span v-else-if="this.storeMsg.c_main_business==3">
              <img src="../../assets/img/my_icon_dabaozhan.png"/>
              纸厂
            </span>
            <span v-else>
              <img src="../../assets/img/my_icon_dabaozhan.png"/>
              未设置
            </span>
            <span v-if="this.storeMsg.c_store_province">
              <img class="address-img" src="../../assets/img/my_icon_zuobiao.png"/>
              {{this.storeMsg.c_store_province}}{{this.storeMsg.c_store_city}}
            </span>
            <span v-else>
              <img class="address-img" src="../../assets/img/my_icon_zuobiao.png"/>
              未设置
            </span>
          </p>
				</div>
			</header>
			<div class="store-info">
				<span v-if="this.storeMsg.c_store_looks">
          店铺的浏览量<b>50</b>
        </span>
        <span v-else>
          店铺的浏览量<b>0</b>
        </span>
				<span v-if="this.storeMsg.c_store_concern">
          店铺的关注人数<b>100</b>
        </span>
        <span v-else>
          店铺的关注人数<b>0</b>
        </span>
			</div>
			<div class="my_score">
				<div>
          我的评分：
          <div class="star-box">
            <span class="star" v-for='(item,index) in starGroup' :class='item' ></span>
          </div>
          <b>{{score}}分</b>
        </div>
				<p v-if="this.storeMsg.ranking">
          我的排名：<b>{{this.storeMsg.ranking}}名</b>
        </p>
        <p v-else>
          我的排名：<b>0名</b>
        </p>
				<!--贸易公司显示主营纸厂和服务纸厂-->
				<div class="zhuying-paper" v-if="this.storeMsg.c_main_business==2">
          <p v-for="(item,index) in this.storeMsg.relation" v-if="index==0">
            主营纸厂：<span>{{item.paper_name}}</span>
          </p>
          <p class="servers">
            <span>服务纸厂：</span>
            <span class="servers-name">
              <em v-for="(item,index) in this.storeMsg.relation">
                {{item.paper_name}}
              </em>
            </span>
          </p>
        </div>
			</div>
			<div class="power">
				<h3>公司实力展示</h3>
				<p>{{this.storeMsg.c_store_show_text}}</p>
			</div>
      <ul class="storeshowlist">
        <li v-for="item in this.imglist">
          <img v-if="item" :src="'https://two.zhiqunale.cn/'+item"/>
        </li>
      </ul>
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
        storeMsg:{},
        starGroup: [],
        score:0,
        imglist:[]
			}
		},
    mounted:function(){
      if(this.$store.state.hasLogin){
        var path='https://two.zhiqunale.cn/Paper/PersonalCenter/get_shop_information_2';
        var params={
          c_id:this.$store.state.loginUser.uid,
          user_state:2,
          device_number:'pc_online'
        }
        this.post(params,path,this.getMymsg);
      }
    },
		methods: {
      getMymsg:function(_data){
        if(_data.status_code=='10000'){
          this.storeMsg=(_data.data);
          this.imglist=(this.storeMsg.c_store_show_photos).split(',');
          this.score=this.storeMsg.c_store_serve_jugde;
          this.starGroup = this.matchScore();
        }else{
          alert(_data.msg);
        }
      },
      matchScore:function(){
        let len = parseInt(this.score/2),
          floor = parseFloat(this.score/2) - len,
          countStar = 5,
          group = [];
        for (var i = 0; i < len; i++) {
          group.push("on");
        }
        if (floor > 0) {
          group.push("half");
        }
        let residue = countStar - group.length;
        if (residue > 0) {
          for (var j = 0; j < residue; j++) {
            group.push("off");
          }
        }
        return group;
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
    display: inline-block;
    height: 40px;
    line-height: 40px;
	}
  .my-identity span:last-child{
    width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: text-bottom;
    margin-left: 60px;
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
	.my_score>p,.my_score>div{
		padding: 28px 30px;
		border-bottom: 1px solid #E0E0E0;
		background-color: #fff;
	}
  .my_score .zhuying-paper{
    padding: 0;
    border-bottom: 0;
  }
  .my_score .zhuying-paper p{
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
		bottom: -1px;
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
		margin-left: 0;
	}
  .servers span{
    display: inline-block;
  }
	.servers span.servers-name{
		display: inline-block;
		width: 65%;
		margin-left: 10px;
    vertical-align: text-top;
	}
  .servers span.servers-name em{
    margin-right: 18px;
    margin-bottom: 10px;
    display: inline-block;
  }
  .storeshowlist{
    padding: 35px 30px;
  }
  .storeshowlist li{
    float: left;
  }
  .storeshowlist img{
    width: 150px;
    height: 150px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
</style>
