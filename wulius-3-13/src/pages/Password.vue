<template>
	<div>
		<div class="certification">
    <div class="back tl">
        <img src="../assets/img/title_jiantou.png" @click="Back"/>
        设置密码
    </div>
    <div class="certiContent">
        <div class="certiMsg">
            <div>
                <span>手机号</span>
                <input type="text" placeholder="请输入手机号"/>
            </div>
             <div>
                <span>验证码</span>
                <input style="width: 40%;margin-right:0.6rem" type="text" placeholder="请填写验证码"/>
                <button style="width: 30%;" class="get_code">获取验证码</button>
            </div>
            <div>
                <span>支付密码</span>
                <input type="text" placeholder="请输入支付密码（6位数字）"/>
            </div>
            
            <div>
                <span>确认支付密码</span>
                <b>
                    <input type="text" placeholder="请确认支付密码（6位数字）"/>
                </b>
            </div>           
        </div>        
    </div>
    <div class="submit set_pwd" >
        <button>确认</button>
    </div>
</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods: {
			Back() {
				window.history.back();
			}
		}
	}
</script>

<style>
	@import url("../assets/css/common.css");
	.set_pwd{
		margin-top: 1.2rem !important;
		text-align: center;
	}
	.set_pwd button{
		width: 90% !important;
		border-radius: 0.15rem;
	}
</style>