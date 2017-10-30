/*设置支付密码第2步————验证短信验证码*/
$('input[name="yzm"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入短信验证码');
	} else if(!(/^\d{6}$/.test($(this).val()))) {
		$(this).siblings('em').show().html('验证码格式错误');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
/*设置支付密码第2步————验证身份证号码*/
$('input[name="zjh"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入身份证号码');
	} else if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test($(this).val()))) {
		$(this).siblings('em').show().html('请输入正确的身份证号码');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
/*获取短息验证码按钮*/
var start = 1;
$("#hqyzm").click(function() {
	if(start) {
		var time = 60;
		var code = $(this);
		code.addClass("msgs1");
		var t = setInterval(function() {
			time--;
			code.html(time + "秒");
			start = 0;
			if(time == 0) {
				clearInterval(t);
				code.html("重新获取");
				code.removeClass("msgs1");
				start = 1;
			}
		}, 1000)

	}

})

/*设置支付密码第3步————设置新支付密码*/
$('#pwd').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入当前支付密码');
	} else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test($(this).val()))) {
		$(this).siblings('em').show().html('密码格式不正确');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});

/*旧支付密码验证*/
$('#old_pwd').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入当前支付密码');
	} else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test($(this).val()))) {
		$(this).siblings('em').show().html('密码格式不正确');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
//新支付密码验证(初次设置新支付密码验证)(找回支付密码——输入新支付密码)
$('#new_pwd').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill').siblings('span').show();
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('span').hide().siblings('em').show().html('请输入当前支付密码');
	} else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test($(this).val()))) {
		$(this).siblings('span').hide().siblings('em').show().html('密码格式不正确');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right').siblings('span').show();
	}
});

//二次确认新支付密码验证(初次设置支付密码，二次确认新支付密码)(找回支付密码——二次确认新支付密码)
$('#new_pwd2').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('密码不能为空');
	} else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test($(this).val())) || $(this).val() != $('#new_pwd').val()) {
		$(this).siblings('em').show().html('两次密码输入不一致');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
//找回支付密码第1步，收不到验证码时的验证
$('#log_pwd').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输登录密码');
	} else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test($(this).val()))) {
		$(this).siblings('em').show().html('密码格式不正确');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});