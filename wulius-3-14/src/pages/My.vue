<template>
	<div>
		<div class="myHeader">
    <div class="header-img">
        <img src="../assets/img/my_touxiang.png" alt="个人头像"/>
    </div>
    <div class="header-msg">
        <p>姓名：纸去哪了</p>
        <p>联系方式：15945891223 <a><img src="../assets/img/my_xiugai.png" alt=""/></a></p>
    </div>
</div>
<div class="myContent">
    <ul>
        <li>
        	<router-link to='/My/FundManage'>资金管理<img src="../assets/img/jiantou_right.png"/></router-link>            
        </li>
        <li>
        	<!--<router-link to='/My/Personal'>我的资料<img src="../assets/img/jiantou_right.png"/></router-link> -->   
        	<router-link to='/My/Certification'>我的资料<img src="../assets/img/jiantou_right.png"/></router-link>
        </li>
        <li><router-link to='/My/Password'>支付密码 <img src="../assets/img/jiantou_right.png"/></router-link></li>
        <li><router-link to='/My/LogisticsOrder'>物流订单 <img src="../assets/img/jiantou_right.png"/></router-link></li>
    </ul>
</div>
	</div>
</template>

<script>
</script>

<style>
	@import url("../assets/css/common.css");
</style>