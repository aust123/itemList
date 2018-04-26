<template>
	<div>

		<header class="header">
			<router-link to="/my" class="back">
        <img src="../../assets/img/title_jiantou.png" />
      </router-link>
      <span class="title">实名认证</span>
		</header>
		<div v-if="certificate==0||certificate==3" class="content">
			<div class="user-info">
				<div>
					<span>姓名</span>
					<input required type="text" v-model="uname"  placeholder="请填写您的姓名" />
				</div>
				<div>
					<span>身份证</span>
					<input required type="text" v-model="idnum"  placeholder="请输入您的身份证号码" />
				</div>
			</div>
			<div class="uploadImg">
				<p>手持身份证照片</p>
				<div>
          <!--身份证正面-->
          <div class="detail-upload">
            <a class="frontIcon">
              <input class="img" type="file" @change="uploadIcon($event)"/>
            </a>
          </div>
          <!--身份证正面-->
          <div class="detail-upload">
            <a class="backIcon">
              <input class="img" type="file" @change="uploadIcon($event)"/>
            </a>
          </div>
				</div>
			</div>
      <div class="submit">
        <button @click="cersubmit">提交</button>
      </div>
      <p class="tip">认证代表同意<span>《纸去哪了》平台用户协议</span>，提交认证成功后我们讲进行人工审核，预计2个工作日内审核完成，请您耐性等待！</p>
		</div>
    <div v-else class="content">
      <div class="user-info">
        <div>
          <span>姓名</span>
          <input readonly type="text" :value="uname" />
        </div>
        <div>
          <span>身份证</span>
          <input readonly type="text" :value="idnum" />
        </div>
      </div>
      <div class="uploadImg">
        <p>手持身份证照片</p>
        <div>
          <!--身份证正面-->
          <div class="detail-upload">
            <img :src="'https://two.zhiqunale.cn/'+fronticon"/>
          </div>
          <!--身份证正面-->
          <div class="detail-upload">
            <img :src="'https://two.zhiqunale.cn/'+backicon"/>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				uname:'',
				idnum:"",
        certificate:0,
        fronticon:'',
        backicon:''
			}
		},
    mounted:function(){
      this.getcertimsg();
    },
		methods: {
      getcertimsg:function(){
        var gpath='https://two.zhiqunale.cn/paper/user/get_certification_detail';
        var gparam={
          uid:this.$store.state.loginUser.uid,
          device_number:'pc_online'
        }
        this.post(gparam,gpath,this.getmsg);
      },
      getmsg:function(_data){
        if(_data.status_code=='10000'){
          this.certificate=_data.data.c_certification;
          if(_data.data.c_certification==3){
            alert('实名认证被拒绝，请重新认证！');
            $('.frontIcon').css('background-image','url(https://two.zhiqunale.cn/'+_data.data.c_id_front_photo+')');
            $('.backIcon').css('background-image','url(https://two.zhiqunale.cn/'+_data.data.c_id_backend_photo+')');
          }
          this.idnum=_data.data.c_id_card;
          this.fronticon=_data.data.c_id_front_photo;
          this.backicon=_data.data.c_id_backend_photo;
          this.uname=_data.data.c_sm_name;
        }
      },
      cersubmit:function(){
        var spath='https://two.zhiqunale.cn/paper/user/user_certification';
        var sparam={
          sm_name:this.uname,
          id_card:this.idnum,
          front_photo:$('.frontIcon').css('background-image').split('"')[1].split('https://two.zhiqunale.cn/')[1],
          backend_photo:$('.backIcon').css('background-image').split('"')[1].split('https://two.zhiqunale.cn/')[1],
          uid:this.$store.state.loginUser.uid,
          device_number:'pc_online'
        }
        this.post(sparam,spath,this.getsubmit);
      },
      getsubmit:function(_data){
        if(_data.status_code=='10000'){
          alert('信息提交成功，请等待审核');
          this.$router.push({path:'/my'});
        }else if(_data.status_code=='10003'){
          alert('您已提交过实名认真，正在审核中');
          this.$router.push({path:'/my'});
        }else{
          alert('信息提交失败');
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
      }
		}
	}
</script>

<style scoped="scoped">
  .frontIcon{
    background-image: url('../../assets/img/my_renzheng_front.png');
  }
  .backIcon{
    background-image: url('../../assets/img/my_renzheng_back.png');
  }
  .detail-upload{
    display: inline-block;
  }
  .detail-upload a,.detail-upload img{
    width: 212px;
    height: 212px;
    margin-right: 0;
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

	.back img {
		width: 20px;
		height: 38px;
	}

	.user-info {
		font-size: 32px;
		color: #333;
		margin-top: 18px;
		background-color: #fff;
	}
	.user-info div,.uploadImg p {
		height: 100px;
		line-height: 100px;
		border-bottom: 1px solid #E0E0E0;
		padding: 0 30px;
		box-sizing: border-box;
	}
	.user-info input {
		margin-left: 50px;
		font-size: 32px;
		color: #999;
		border: none;
		outline: none;
	}

	.submit {
		margin-top: 104px;
		text-align: center;
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

	input::-webkit-input-placeholder {
		color: #999;
	}

	.uploadImg{
		margin-top: 14px;
		font-size: 32px;
		color: #333;
		background-color: #fff;

	}
	.uploadImg>div{
		padding: 56px 30px;
		box-sizing: border-box;

	}


	.tip {
		margin-top: 18px;
		font-size: 28px;
		color: #999;
		padding-bottom: 236px;
		text-align: left;
		padding-left:30px;
		padding-right: 30px;
	}
	.tip span{
		color: #FF5000;
	}
</style>
