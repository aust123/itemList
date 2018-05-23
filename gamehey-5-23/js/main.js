function Ajax($params, $url, $fun) {
	if(!$params.pageNum) {
		$params.sign = getUrl($params);
		if(sessionStorage.token) {
			
			$params.access_token = sessionStorage.token;
		} else if(localStorage.token) {
			$params.access_token = localStorage.token;
		
		}
	}
	//console.log($params);
	var baseUrl = 'http://admin.healthbeauty.io';
	$.ajax({
		type: "post",
		url: baseUrl + $url,
		data: $params,
		async: true,
		success: function(data) {
			//console.log(data);
			$fun(data)
		},
		error: function(xhr, errorType, error) {
			console.log(xhr);
			console.log(errorType);
			console.log(error);
		}
	});
}

function getUrl(arr) {
	var secret = "key=Pass4hey_chain!";
	var param = [];
	for(var k in arr) {
		param.push(k)
	}
	param.sort();
	var str = '';
	for(var key in param) {
		if(typeof param[key] != 'function') {
			str += param[key] + '=' + arr[param[key]] + '&'
		}
	}
	str += secret;
	//console.log(str);
	return md5(str)
}

function Tips() {
	$(".popupBox,.background").fadeIn(200);
	$('#delete_box').addClass('show').addClass('show_in');
}
$('.popupBox').click(function(e) {
	var ev = e ? e : window.event;
	if(ev.target == $(".popupBox")[0] || ev.target == $('#sure')[0]) {
		$(".popupBox,.background").fadeOut(200);
		$('#delete_box').removeClass('show').removeClass('show_in')
	}
})

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

//检验码
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
		var codeColor = new Array("#f0833a", "#f0833a", "#f0833a", "#f0833a", '#f0833a', '#f0833a', '#f0833a');
		var codeSize = new Array("0.66rem", "0.66rem", '0.66rem', '0.66rem', '0.66rem', '0.66rem');

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