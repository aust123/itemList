$(function() {

	//获取短信验证码
	var start = 1;
	$("#hqyzm").click(function() {		
		if(start) {
			if($("#tel").val() != '') {
				var time = 300;
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
						start=1;
					}
				}, 1000)

			} else {
				$('#tel').next('em').show().html("请输入注册手机号码");
			}
		}

	})

})
//var ok1,ok2,ok3,ok4,ok5,ok6,chk;
// 表单验证
function validate(ok1, ok2, ok3, ok4, ok5, ok6, ok7) {
	//手机号
	$('#tel').focus(function() {
		$(this).siblings('em').hide();
	}).keyup(function() {
		if($(this).val() == '') {
			$(this).siblings('em').show().html('手机号码不能为空');
			ok1 = false;
		} else if(!(/^1[34578]\d{9}$/.test($(this).val()))) {
			$(this).siblings('em').show().html('请输入正确的手机号码');
			ok1 = false;
		} else {
			ok1 = true;
			$(this).siblings('em').hide();
		}
	});

	//验证码
	$('#yzm').focus(function() {
		$(this).siblings('em').hide();
	}).keyup(function() {
		if($(this).val() == '') {
			$(this).siblings('em').show().html('验证码不能为空');
			ok2 = false;
		} else if($(this).val().toUpperCase() != code.toUpperCase()) {
			$(this).siblings('em').show().html('验证码输入有误');
			ok2 = false;
		} else {
			ok2 = true;
			$(this).siblings('em').hide();
		}
	});

	//短信验证码
	$('#dxyzm').focus(function() {
		$(this).siblings('em').hide();
	}).keyup(function() {
		if($(this).val() == '') {
			$(this).siblings('em').show().html('短信验证码不能为空');
			ok3 = false;
		} else if(!(/^\d{6}$/.test($(this).val()))) {
			$(this).siblings('em').show().html('验证码格式错误');
			ok3 = false;
		} else {
			ok3 = true;
			$(this).siblings('em').hide();
		}
	});

	//密码
	$('#pwd').focus(function() {
		$(this).siblings('i').show().siblings('em').hide();
	}).keyup(function() {
		if($(this).val() == '') {
			$(this).siblings('i').hide().siblings('em').show().html('密码不能为空');
			ok4 = false;
		} else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test($(this).val()))) {
			$(this).siblings('i').hide().siblings('em').show().html('密码格式不正确');
			ok4 = false;
		} else {
			ok4 = true;
			$(this).siblings('i').show().siblings('em').hide();
		}
	});

	/*确认密码*/
	$('#pwd2').focus(function() {
		$(this).siblings('em').show().html('确认密码要和输入的密码保持一致');
	}).keyup(function() {
		if($(this).val() == '') {
			ok5 = false;
			$(this).siblings('em').show().html('密码不能为空');
		} else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test($(this).val())) || $(this).val() != $('#pwd').val()) {
			$(this).siblings('em').show().html('两次密码输入不一致');
			ok5 = false;
		} else {
			ok5 = true;
			$(this).siblings('em').hide();
		}
	});

	//所属公司
	$('#ssgs').focus(function() {
		$(this).siblings('em').hide();
	}).keyup(function() {
		if($(this).val() == '') {
			$(this).siblings('em').show().html('所属公司不能为空');
			ok6 = false;
		} else {
			ok6 = true;
			$(this).siblings('em').hide();
		}
	});

	$('.chk').click(function() {
		if(($('.chk').attr('checked') == 'checked')) {
			ok7 = true;
		} else {
			ok7 = false;
		}
	})
	setInterval(function() {
		if(ok1 && ok2 && ok3 && ok4 && ok5 && ok6 && ok7) {
			$('.submit').addClass('active');
		} else {
			$('.submit').removeClass('active');
		}
	}, 100);
}

/*-----------------验证码------------*/

if($(".refresh")[0]) {
	function createCode() {
		code = code1 = code2 = code3 = "";
		var codeLength = 1; //验证码的长度
		var checkCode = $("#fir")[0];
		var checkCode1 = $("#sec")[0];
		var checkCode2 = $("#thir")[0];
		var checkCode3 = $("#fouth")[0];
		var box = document.getElementById("box");
		var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
		var codeColor = new Array("#33FFFF", "#FF6633", "#FFFF99", "#FFFFCC", '#9933FF', '#FFCCCC', '#999999');
		var codeSize = new Array("20px", "25px", '30px', '18px', '22px', '26px');

		function changeColor(ele, _code) {
			for(var k = 0; k < codeLength; k++) {
				var charNum = Math.floor(Math.random() * 7);
				ele.style.color = codeColor[charNum];
				ele.style.fontSize = codeSize[charNum];
			}
			for(var i = 0; i < codeLength; i++) {
				var charNum = Math.floor(Math.random() * 52);
				_code += codeChars[charNum];
				ele.innerHTML = _code;
				return _code;
			}
		}
		code = changeColor(checkCode, code);
		code1 = changeColor(checkCode1, code1);
		code2 = changeColor(checkCode2, code2);
		code3 = changeColor(checkCode3, code3);
		code = code + code1 + code2 + code3;
	}
	createCode();
}