<template>
	<div>
		<!--头部-->
		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">编辑店铺资料</span>
		</header>
		<!--内容区域-->
		<div class="profile_content ">
			<div>
				<p class="profile">
					<span>店铺名称</span>
          <input class="storename" type="text" :value="this.storeMsg.c_store_name" />
				</p>
				<div class="profile storeAddr">
					<span>店铺地址</span>
          <x-address class="address_select" title=" "
                     v-model="value_addr" raw-value :list="addressData">
          </x-address>
				</div>
				<p class="profile">
					<span>详细地址</span>
          <textarea class="xxaddr" :value="this.storeMsg.c_store_detail_address" />
          </textarea>
				</p>
				<div class="upload">
          <div class="detail-upload">
            <a class="storeIcon">
              <input class="img" type="file" @change="uploadIcon($event)"/>
            </a>
          </div>
				</div>
				<p class="profile">
					<span>主营业务</span>
          <select v-model="zhuying">
            <option value="1">打包站</option>
            <option value="2">贸易公司</option>
            <option value="3">纸厂</option>
          </select>
				</p>
				<!--主营纸厂和服务纸厂——贸易公司身份显示-->
				<p v-if="zhuying==2" class="profile">
					<router-link to='/Mainpaper'>
            <span>主营纸厂</span>
            <input class="mpaper" :value="this.$store.state.mainpaper.paper_name"
                   type="text" style="background-color: transparent;"
                   unselectable :data-pid="this.$store.state.mainpaper.paper_id"
                   disabled :data-ptype="this.$store.state.mainpaper.paper_type" />
          </router-link>
				</p>
				<div v-if="zhuying==2" class="profile">
					<router-link to='/Serverpaper'>
            <span class="fuwu">服务纸厂</span>
            <p class="service_paper">
              <span v-for="item in this.$store.state.servicepaper" :data-ptype="item.paper_type" :data-pid="item.paper_id">{{item.paper_name}}</span>
            </p>
          </router-link>
				</div>
			</div>
			<div class="power">
				<p>店铺实力展示</p>
				<textarea id="power-show" :value="this.storeMsg.c_store_show_text" placeholder="请填写展示您实力的描述，增加客户的信任（最多500字）。"></textarea>
				<div class="power-img">
          <div class="detail-upload">
            <a>
              <input class="img" type="file" @change="uploadImg($event)"/>
            </a>
            上传证明实力的图片，如获奖证书，资质证明等。
          </div>
          <ul class="upload-list">
            <li v-if="item" @click="deleteImg($event)" v-for="item in imglist" class="simg">
              <img :src="'https://two.zhiqunale.cn/'+item" alt=""/>
            </li>
          </ul>
				</div>
			</div>
			<div class="submit">
				<button @click="editsubmit">保存</button>
			</div>
		</div>
	</div>
</template>

<script>
  import { Datetime,XAddress,Cell, ChinaAddressV4Data,Value2nameFilter as value2name  } from 'vux'
	export default {
    components: {
      XAddress,
      Cell,
      Datetime
    },
		data: function() {
      return {
        storeMsg:{},
        imglist:[],
        zhuying:'',
        showAddress: false,
        value_addr: [],
        addressData: ChinaAddressV4Data,
        mainpaper:{
          paper_id:'',
          paper_type:'',
          paper_name:''
        },
        servicepaper:[]
      }
		},
		mounted() {
      if(this.$store.state.hasLogin){
        var path='https://two.zhiqunale.cn/Paper/PersonalCenter/get_shop_information_2';
        var params={
          c_id:this.$store.state.loginUser.uid,
          user_state:2,
          device_number:'pc_online'
        }
        this.post(params,path,this.getMymsg);
      }

      $('.upload-list').delegate('li.simg','click',function(){
        $(this).remove();
      })
		},
		methods: {
      editsubmit:function(){
        var imgs=[];
        for(var l=0;l<$('.upload-list li').length;l++){
          imgs.push($($('.upload-list li')[l]).children('img').attr('src').split('https://two.zhiqunale.cn/')[1]);
        }

        var spapers=[];
        for(var s=0;s<$('.service_paper span').length;s++){
          spapers.push($($('.service_paper span')[s]).attr('data-pid')+','+$($('.service_paper span')[s]).attr('data-ptype'));
        }

        var dist=$('.address_select')[0].innerText.split(' ')[2];

        var spath='https://two.zhiqunale.cn/Paper/PersonalCenter/modify_store_information';
        var sparam={
          c_id:this.$store.state.loginUser.uid,
          user_state:1,
          device_number:'pc_online',
          c_store_name:$('.storename').val(),
          c_store_province:$('.address_select')[0].innerText.split(' ')[0],
          c_store_city:$('.address_select')[0].innerText.split(' ')[1],
          c_store_dist:dist.slice(0,dist.length-1),
          c_store_detail_address:$('.xxaddr').val(),
          c_store_headurl:$('.storeIcon').css('background-image').split('"')[1].split('https://two.zhiqunale.cn/')[1],
          c_main_business:this.zhuying,
          c_store_show_photos:imgs.join(),
          c_store_show_text:$('#power-show').val()
        }
        if(this.zhuying==2){
          sparam.cooperative_paper_factory=spapers.join('.');
          sparam.main_paper_mill=$('.mpaper').attr('data-pid')+','+$('.mpaper').attr('data-ptype');
        }
        this.post(sparam,spath,this.editstore);
      },
      editstore:function(_data){
//        console.log(_data);
        if(_data.status_code=='10000'){
          this.$router.push({path:'/Storeinfo'});
        }
      },
      doShowAddress :function() {
        this.showAddress = true;
        setTimeout(function(){
          this.showAddress = false;
        }, 500)
      },
      getMymsg:function(_data){
        if(_data.status_code=='10000'){
          this.storeMsg=(_data.data);
          this.imglist=(this.storeMsg.c_store_show_photos).split(',');
          this.zhuying=this.storeMsg.c_main_business;
          this.value_addr.push(this.storeMsg.c_store_province);
          this.value_addr.push(this.storeMsg.c_store_city);
          this.value_addr.push(this.storeMsg.c_store_dist);
          $('.storeIcon').css('background-image','url(https://two.zhiqunale.cn/'+_data.data.c_store_headurl+')');
          //主营纸厂
          if(!this.$store.state.mainpaper.paper_name){
            for(var m=0;m<this.storeMsg.relation.length;m++){
              if(this.storeMsg.relation[m].is_main==1){
                this.mainpaper.paper_id=this.storeMsg.relation[m].paper_id;
                this.mainpaper.paper_type=this.storeMsg.relation[m].paper_type;
                this.mainpaper.paper_name=this.storeMsg.relation[m].paper_name;
                this.$store.commit('MainPaper',this.mainpaper);
              }
            }
          }
          //服务纸厂
          if(this.$store.state.servicepaper.length==0){
            for(var m=0;m<this.storeMsg.relation.length;m++){
              var servicelist={
                paper_id:this.storeMsg.relation[m].paper_id,
                paper_type:this.storeMsg.relation[m].paper_type,
                paper_name:this.storeMsg.relation[m].paper_name
              }
              this.servicepaper.push(servicelist);
            }
            this.$store.commit('ServicePaper',this.servicepaper);
          }
        }else{
          alert(_data.msg);
        }
      },
      uploadIcon:function(e){
        //上传图片
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length){
          return;
        }
        this.createIcon(e,files[0]);
      },
      createIcon: function(event,file){
        var image = new Image();
        var reader = new FileReader();
        reader.onload = (e) => {
          lrz(e.target.result)
            .then(function (rst) {
              // 处理成功会执行
              $.ajax({
                type: 'post',
                url: 'https://two.zhiqunale.cn/paper/img/receivePcFile',
                data: {
                  pic: rst.base64
                },
                success: function(data) {
                  $($(event.target)).parents('a').css({'background-image':'url(https://two.zhiqunale.cn/'+ data.data +')'});
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                  alert('图片上传失败');
                }
              });
            })
            .catch(function (err) {
              // 处理失败会执行
              alert('图片上传失败');
            })
        };
        reader.readAsDataURL(file);
      },
      deleteImg:function(e){
        $(e.target).parents('li').remove();
      },
      uploadImg:function(e){
        this.upLoadImg(e);
      },
			Back() {
				window.history.back();
			}
		}
	}
</script>

<style scoped>
  .profile_content>div{
    background: #fff;
    position: relative;
  }
  .storeAddr{
    width: 76%;
  }
  .address_select{
    display: inline-block;
    width: 58%;
    vertical-align: text-top;
    text-align: left!important;
  }
  .upload-list li{
    margin: 0;
  }
  .upload-list li img{
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .storeIcon{
    border-radius: 50%;
  }
  .profile select{
    border: none;
    width: 70%;
    height: 50px;
    color: #333;
    font-size: 32px;
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
		top: 3px;
	}

	.header .right {
		float: right;
		font-size: 26px;
	}

	.back img {
		width: 20px;
		height: 38px;
	}

	.profile_content {
		margin-top: 16px;
		position: relative;
	}

	.profile {
		font-size: 32px;
		color: #666;
		padding: 34px 30px;
		box-sizing: border-box;
		border-bottom: 1px solid #E0E0E0;
		position: relative;
	}
	.profile a{
		color: inherit;
    background-image: url('../../assets/img/jiantou_right.png');
    background-size: 17px 31px;
    background-repeat: no-repeat;
    background-position: right center;
    width: 97%;
    display: inline-block;
    overflow: hidden;
	}
  .profile a .service_paper{
    display: inline-block;
    width: 68%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: text-top;
  }
  .profile a .service_paper span{
    margin-right: 15px;
  }
	.profile .fuwu{
		margin-right: 45px;
	}
	.profile .right.server-right{
		 position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 30px;
	}
	.profile span {
		margin-right: 60px;
	}

	.profile input {
		outline: none;
		color: #333;
		font-size: 32px;
		display: inline-block;
	}

	.profile .right {
		width: 17px;
		height: 31px;
		float: right;
	}

	.profile textarea {
		display: inline-block;
		color: #333;
		font-size: 32px;
		width: 70%;
    height: auto;
		border: none;
    vertical-align: text-top;
    font-family: "microsoft yahei";
	}

	#power-show {
		display: block;
		color: #333;
		font-size: 32px;
		width: 90%;
		border: none;
		outline: none;
		font-family: "microsoft yahei";
		padding: 32px 5%;
		height: 218px;
		box-sizing: border-box;
    margin: 30px 0;
	}

	.power {
		margin-top: 16px;
		background-color: #fff;
	}

	.power p {
		height: 100px;
		line-height: 100px;
		color: #666;
		box-sizing: border-box;
		padding: 0 30px;
		font-size: 32px;
		border-bottom: 1px solid #E0E0E0;
	}

	#power-show::-webkit-input-placeholder {
		font-size: 32px;
		color: #999;
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

	.profile .submit {
		margin-top: 66px;
		text-align: center;
    position: relative;
	}

	.submit button {
		text-align: center;
		height: 98px;
		line-height: 98px;
		background: #00D3AF;
		width: 700px;
		color: #FFF;
		font-size: 36px;
		border: 0;
		letter-spacing: 25px;
		border-radius: 8px;
	}

	.upload {
		width: 204px;
		height: 144px;
		display: inline-block;
		position: absolute;
		top: 27px;
		right: 0;
		background-color: #fff;
	}

	.power-img {
		overflow: hidden;
		padding: 0 30px 62px;
	}
  .power-img .upload-list{
    padding:30px 0;
  }

	.up-power-img {
		position: relative;
	}

	.up-power-img img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	span.placeholder {
		font-size: 28px;
		color: #999;
		width: 70%;
		display: inline-block;
		position: absolute;
		right: 28px;
		bottom: 280px;
	}

	.up-power-img input {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		z-index: 22;
	}
  .detail-upload{
    padding: 0;
  }
	.upload img {
		display: inline-block;
		width: 144px;
		height: 144px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		border-radius: 50%;
	}

	.upload a{
		width: 144px;
		height: 144px;
    margin-right: 0;
    margin-left: 30px;
    border-radius: 50%;
	}
</style>
