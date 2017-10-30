/**
 * Created by Administrator on 2017/8/28.
 */
$(function() {
	$('#top_bar').load('../public/topBar.html');
	$('#footer').load('../public/footer.html');

	validate(false, false, false, false, true, false, false);
	//后台获取短信验证码id
	$('#hqyzm').click(function() {
		//限定30秒后才能重新发送请求
		if($(this).html().indexOf('秒') >= 0) {
			return false;
		} else if($('#tel').val() != '') {
			var pathname = '/api/common/getcode';
			var obj = {
				nc_phone: $('#tel').val() //手机号
			}
			GetList(obj, pathname, BackCode);
		}

	})

	function BackCode(_data) {
		console.log(_data);
		if(_data.status_code == 10000) {
			localStorage.rnc_id = _data.data.code_id; //将返回的验证码id缓存
		}
	}

	$('.agreement').click(function() {
		var pathname = '/api/paper/get/agreement';
		var obj = {
			slug: 1,
			short: 'pingtai'
			//short:'zhifu'
		}
		GetList(obj, pathname, AgreementData);
		
	})

	function AgreementData(_data) {
		console.log(_data);
		if(_data.status_code == 10000) {
			var div = document.createElement('div');
			div.innerHTML = _data.data.ag_content;
			document.getElementById('agree_content').innerHTML = div.innerHTML
			$('.agree_title').html(_data.data.ag_name);
			$('#agreement').show();
		}
	}

	$('.chk').click(function() {
		$('#agreement').hide();
	})

	//提交注册信息
	$(".submit").click(function() {
		if($(this).hasClass("active")) {
			var pathname = "/api/paper/register";
			var obj = {
				pe_phone: $('#tel').val(),
				pe_password: $('#pwd').val(),
				pe_slug: $('input[name="identity"]:checked').val(),
				nc_code: $('#dxyzm').val(),
				part_company: escape($('#ssgs').val()),
				nc_id: localStorage.rnc_id //短信验证码返回id值，需要单独请求一个接口，缓存读取
			};
			GetList(obj, pathname, DealData);
		}
	})

	//ajax从后台取出来的数据，通过回调函数使用
	function DealData(_data) {
		console.log(_data)
		//注册状态判断
		if(_data.status_code == '10000') {
			window.confirm("恭喜您注册成功，请登录！");
			//$('.submit').attr('href', "login.html");
		} else if(_data.status_code == '10002') {
			$('#tel').next('em').show().html("该手机号已在平台注册");
		} else if(_data.status_code == '10021' || _data.status_code == '10023') {
			$('#dxyzm').nextAll('em').show().html("验证码错误");
		} else if(_data.status_code == '10022') {
			$('#dxyzm').nextAll('em').show().html("验证码已过期");
		} else if(_data.status_code == '10003') {
			window.confirm("注册失败，请重新注册?");
		}
	}
})