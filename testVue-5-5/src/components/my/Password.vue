<template>
	<div>

		<header class="header">
			<a class="back" @click="Back" href="javascript:void(0);"><img src="../../assets/img/title_jiantou.png" /></a><span class="title">设置支付密码</span>
		</header>
		<div class="passwor-content">
			<div>
				<span>手机号</span>
				<input type="tel" v-model="phone" maxlength="11" pattern="^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$" placeholder="请输入手机号" />
			</div>
			<div>
				<span>验证码</span>
				<input v-model="code" maxlength="6" style="width: 40%;margin-right:0.6rem" type="number" pattern="[0-9]*" placeholder="请填写验证码" />
				<button @click="sendCode" class="get_code">获取验证码</button>
			</div>
			<div>
				<span>支付密码</span>
				<input type="password" v-model="password" pattern="[0-9]*" maxlength="6" placeholder="请输入支付密码（6位数字）" />
			</div>

			<div>
				<span>确认支付密码</span>
				<input type="password" v-model="repeatPassword" pattern="[0-9]*" maxlength="6" placeholder="请确认支付密码（6位数字）" />
			</div>
		</div>
		<div class="submit">
			<button @click="submitSet">确定</button>
		</div>

	</div>
</template>

<script>
	//import api from '../fetch/api';
	export default {
		data() {
			return {
				phone: '',
				code: '',
				password: '',
				repeatPassword: '',
				codeId: '',
				start: true
			}
		},
		methods: {
			Back:function() {
				window.history.back();
			},
      sendCode:function() {
        if(this.phone){
          var _this=this;
          if(_this.start){
            var cpath='https://two.zhiqunale.cn/paper/user/send_code_func';
            var cparam={
              phone:this.phone
            }
            _this.post(cparam,cpath,_this.getcode);
            _this.start=false;
            var tm=60;
            var timer=setInterval(function(){
              tm=tm-1;
              $('.get_code').html(tm+'s');
              if(tm==0){
                clearInterval(timer);
                $('.get_code').html('重新获取');
                _this.start=true;
              }
            },1000);
          }
        }else{
          alert("请输入手机号");
        }
			},
      getcode:function(_data){
        console.log(_data);
        if(_data.status_code=='10000'){
          this.codeId=_data.data.code_id;
        }
      },
      submitSet:function() {
        var path='https://two.zhiqunale.cn/Paper/PersonalCenter/set_payment_password';
				var param= {
          c_id:this.$store.state.loginUser.uid,
          user_state:1,
          device_number:'pc_online',
					phone: this.phone,
					code: this.code,
					code_id: this.codeId,
          pay_password: this.password,
					repeat_password: this.repeatPassword
				};
				this.post(param,path,this.succsubmit);
			},
      succsubmit:function(_data){
        if(_data.status_code=='10000'){
          this.$router.push({path:'/my'});
        }else{
          alert(_data.msg);
        }
      }
		}
	}
</script>

<style scoped="scoped">
	.message {
		width: 100%;
		overflow-x: hidden;
		height: 100%;
		overflow-y: scroll;
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

	.passwor-content {
		font-size: 32px;
		color: #333;
		margin-top: 18px;
		background-color: #fff;
	}

	.passwor-content div {
		height: 102px;
		line-height: 102px;
		border-bottom: 1px solid #E0E0E0;
		padding: 0 30px;
		box-sizing: border-box;
	}

	.passwor-content input {
		margin-left: 50px;
		font-size: 32px;
		color: #999;
		border: none;
		outline: none;
	}

	.get_code {
		font-size: 28px;
		color: #ff5000;
		background: #fff;
		border: 2px solid #ff5000;
		width: 192px;
		height: 68px;
		line-height: 68px;
		text-align: center;
		border-radius: 8px;
	}
	.submit{
		margin-top: 120px;
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
	input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {

	color: #999;
}
</style>
