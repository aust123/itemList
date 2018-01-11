/*判断用户是否登录，级登陆后修改相关内容*/
(function() {
	if(cookie.getCookie('uid')) {
		getAccountInfo();
		$('#changes').html('您好，' + cookie.getCookie('user_phone'));
		$('#topbar_login_btn').css('display', 'none');
		$('#topbar_quit').css('display', 'block');
		$('.welcome').html('Hi , ' + cookie.getCookie('username'));
		$('.login-action-button').css('display', 'none');
		$('.myorder').attr('href', '../account/apply_order.html'); //用户登录后跳转至’我的订单‘
		$('#topbar_my_top').attr('href', '../account/apply_order.html') //登录成功后跳转至’我的纸去哪了‘
		$('.msn_center').attr('href', '../account/personal_message.html');
	} else {
		$('.msn_center,.myorder,.myorder,#topbar_my_top').attr('href', '../app/login/login.html'); //用户未登录是’我的订单‘’我的纸去哪了‘跳转至的登录页
	}
})();
/*用户登录后点击退出登录，跳转至登录页面，清除cookie记录*/
$('#topbar_quit').click(function(ev) {
	quit();
})



/*退出登录函数*/
function quit() {
	var url = 'https://two.zhiqunale.cn/Paper/PersonalCenter/login_out';
	var argu = {
		c_id: cookie.getCookie('uid'),
		user_state: 1,
		device_number: 'pc_online'
	};
	GetList(argu, url, loginOut)
}

function loginOut(data) {
	if(data.status_code == 10000) {
		localStorage.clear();
		cookie.delCookie();
		window.location.href = 'login/login.html';
	}
}