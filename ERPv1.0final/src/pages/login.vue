<template>
<div>
    <div id="logo_img"><img src="../assets/imgs/img.png" /></div>
    <section id="login">			
        <div><input :class="{waring:noname}" type="text" placeholder="账号" id="uname" v-model="phone" autocomplete="off"/></div>
        <div><input :class="{waring:nopwd}" type="password" name="" id="pwd" placeholder="密码" v-model="password" /></div>
        <div><input type="submit"  id="btn" value="登录" @click="login"/></div>	
    </section> 
    <tip :tipmsg="tipMsg"></tip>
</div>   
</template>
<script>
import api from "@/axios/api.js";
import tip from '@/components/tip/tip.vue'
export default {
  components:{     
      tip
    },
  data() {
    return {
      phone: "",
      password: "",
      noname:0,
      nopwd:0,
       tipMsg:['',false]
    };
  },
  created(){   
    if(this.cookie.getCookie('uid')){
      this.$router.push({
        path:'/entrance'
      })
    }
  },
  methods: {
    login() {     
          this.nopwd=0;
          this.noname=0;
      if (this.phone && this.password) {
        let params = {
          phone: this.phone,
          password: this.password
        };
        api.Login(params).then(res => {
          console.log(res);
          if(res.status_code==10000){
            this.cookie.setCookie('uid',res.uid,365);
            this.$router.push({path:'/entrance'})
          }else{
               this.tipMsg=[res.msg,true];
          }
        });
      }else if(this.phone&&!this.password){
          this.nopwd=1
          alert('请输入密码')
      }else if(!this.phone&&this.password){
          this.noname=1
          alert('请输入手机号')
      }else{
          this.nopwd=1;
          this.noname=1;
          alert('请输入完成信息')
      }
    }
  }
};
</script>
<style scoped>

#logo_img {
  width: 100%;
  text-align: center;
  padding-top: 139px;
}
#logo_img img {
  width: 673px;
}
#login {
  width: 100%;
  text-align: center;
  margin-top: 119px;
}
#login div {
  margin-bottom: 40px;
}
#login input {
  width: 650px;
  height: 94px;
  border-radius: 46px;
  outline: none;
  font-size: 42px;
  border: 2px solid #999;
  text-align: center;
  box-sizing: border-box;
}
#login input.waring{
    border-color:red; 
}
#uname {
  background: url(../assets/imgs/user_icon.png) no-repeat;
  background-position: 36px center;
  background-size: 40px;
}
#pwd {
  background: url(../assets/imgs/lock_icon.png) no-repeat;
  background-position: 36px center;
  background-size: 32px 47px;
}
input#btn {
  background-color: #00dfb9;
  color: #fff;
  border: 0;
}
</style>
