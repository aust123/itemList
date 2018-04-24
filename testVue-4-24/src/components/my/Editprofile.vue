<template>
	<div>
		<!--头部-->
		<header class="header">
			<router-link to="/my" class="back">
        <img src="../../assets/img/title_jiantou.png" />
      </router-link>
      <span class="title">编辑个人资料</span>
		</header>
		<!--内容区域-->
		<div class="profile_content ">
			<div>
        <p class="profile storenm">
          <span>店铺名称</span>
          <input class="storename" type="text" v-model="nickname" />
        </p>
        <div class="profile storeAddr">
          <span>店铺地址</span>
          <x-address class="address_select" title=" "
                     v-model="value_addr" raw-value :list="addressData">
          </x-address>
        </div>
        <p class="profile">
          <span>详细地址</span>
          <textarea class="xxaddr" v-model="detailAddr" />
          </textarea>
        </p>
        <div class="upload">
          <div class="detail-upload">
            <a class="storeIcon">
              <input class="img" type="file" @change="uploadIcon($event)"/>
            </a>
          </div>
        </div>
			</div>
			<div class="submit">
				<button @click="editSubmit">保存</button>
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
		data:function() {
			return {
        showAddress: false,
        value_addr: [],
        addressData: ChinaAddressV4Data,
        detailAddr:'',
        nickname:''
			}
		},
		mounted:function() {
      this.getmsg();
		},
		methods: {
      editSubmit:function(){
        var dist=$('.address_select')[0].innerText.split(' ')[2];
        var spath='https://two.zhiqunale.cn/Paper/PersonalCenter/modify_data';
        var sparams={
          c_id:this.$store.state.loginUser.uid,
          user_state:1,
          device_number:'pc_online',
          c_username:this.nickname,
          c_headurl:$('.storeIcon').css('background-image').split('"')[1].split('https://two.zhiqunale.cn/')[1],
          c_sm_province:$('.address_select')[0].innerText.split(' ')[0],
          c_sm_city:$('.address_select')[0].innerText.split(' ')[1],
          c_sm_dist:dist.slice(0,dist.length-1),
          c_sm_detail_address:this.detailAddr
        }
        this.post(sparams,spath,this.editMsg);
      },
      editMsg:function(_data){
        if(_data.status_code=='10000'){
          this.$router.push({path:'/my'});
        }
      },
      getmsg:function(){
        var path='https://two.zhiqunale.cn/Paper/PersonalCenter/user_information';
        var params={
          c_id:this.$store.state.loginUser.uid,
          user_state:2,
          device_number:'pc_online'
        }
        this.post(params,path,this.getMymsg);
      },
      getMymsg:function(_data){
//        console.log(_data);
        if(_data.status_code=='10000'){
          this.value_addr.push(_data.data.c_sm_province);
          this.value_addr.push(_data.data.c_sm_city);
          this.value_addr.push(_data.data.c_sm_dist);
          this.detailAddr=_data.data.c_sm_detail_address;
          this.nickname=_data.data.c_username;
          $('.storeIcon').css('background-image','url(https://two.zhiqunale.cn/'+_data.data.c_headurl+')');
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
      doShowAddress :function() {
        this.showAddress = true;
        setTimeout(function(){
          this.showAddress = false;
        }, 500)
      }
		}
	}
</script>

<style scoped="scoped">
  .profile_content .submit{
    background: #F1F1F1;
    margin-top: 124px;
  }
  .profile_content>div{
    background: #fff;
    position: relative;
  }
  .storeAddr,.storenm{
    width: 76%;
  }
  .storenm input{
    width: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .address_select{
    display: inline-block;
    width: 58%;
    vertical-align: text-top;
    text-align: left!important;
  }

  .storeIcon{
    border-radius: 50%;
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

  .profile span {
    margin-right: 30px;
  }

  .profile input {
    outline: none;
    color: #333;
    font-size: 32px;
    display: inline-block;
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

  .power p {
    height: 100px;
    line-height: 100px;
    color: #666;
    box-sizing: border-box;
    padding: 0 30px;
    font-size: 32px;
    border-bottom: 1px solid #E0E0E0;
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

  .up-power-img img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
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
    background-image: url('../../assets/img/my_person_touxiang.png');
  }
</style>
