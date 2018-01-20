function GetList($data, $url, $fun) {
	if($data.sign) {
		delete $data.sign; //删除上一次添加的sign属性
	}
	$data.sign = getUrl($data) //将sign拼接成请求的data对象
	jQuery.support.cors = true;
	console.log($data);
	$.ajax({
		type: "post",
		dataType: "json",
		crossDomain: true,
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
		url: $url,
		data: $data,
		async: true,
		success: function(data) {
			$fun(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(JSON.stringify(XMLHttpRequest));
			console.log(JSON.stringify(textStatus));
			console.log(errorThrown);
			console.log("请求不到服务器");
		}
	});
};

function getUrl(arr) {
	var secret = "key=pass4zhiqunale";
	var param = [];
	for(var k in arr) {
		param.push(k)
	}
	param.sort();
	var str = '';
	for(var key in param) {
		str += param[key] + '=' + arr[param[key]] + '&'
	}
	str += secret;
	//console.log(str);
	//console.log(str);
	return md5(str)
}

//时间戳转换为时间格式 yyyy-MM-dd hh:mm
function getLocalTime(nS) {
	var dat = new Date(parseInt(nS) * 1000).format("yyyy-MM-dd");
	return dat;
}

function getLocalTimes(nS) {
	var dat = new Date(parseInt(nS) * 1000).format("yyyy-MM-dd hh:mm");
	return dat;
}
//var time = getLocalTime(1500666666);
Date.prototype.format = function(format) {
	var date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	if(/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for(var k in date) {
		if(new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
				date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
}

var cookie = {
	/*设置cookie*/
	setCookie: function($name, $value, $time) {
		document.cookie = encodeURIComponent($name) + "=" + encodeURIComponent($value) + this.Exproes($time) + ';path=/;';
	},
	/*获取cookie*/
	getCookie: function($name) {
		var arr, reg = new RegExp("(^| )" + $name + "=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg)) {
			return decodeURIComponent(arr[2]);
		} else {
			return null;
		}
	},
	/*删除cookie*/
	delCookie: function() {
		var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
		if(keys) {
			for(var i = keys.length; i--;) {
				document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString() + ';path=/;';
			}

		}
	},
	/*设置cookie有效期*/
	Exproes: function($time) {
		var date = new Date();
		date.setTime(date.getTime() + ($time * 24 * 60 * 60 * 1000));
		return expires = "; expires=" + date.toUTCString();
	}

}

var Check = {
	//验证手机号码
	Test: function(ele) {
		if(ele.val() == '') {
			alert('手机号不能为空');
			return true;
		} else if(!(/^1[34578]\d{9}$/.test(ele.val()))) {
			alert('请输入正确的手机号码');
			return true;
		}
	},
	//点击获取验证码倒计时
	time: function(ele) {
		if(ele.html().indexOf('s') > 0) {
			return true;
		}
		var time = 300;
		var t = setInterval(function() {
			time--;
			ele.html(time + " s");
			if(time == 0) {
				clearInterval(t);
				ele.html("重新获取");
			}
		}, 1000)
	}
}

//日期转化为时间戳
function DateToUnix(string) {
	var f = string.split(' ', 2);
	var d = (f[0] ? f[0] : '').split('-', 3);
	var t = (f[1] ? f[1] : '').split(':', 3);
	var time = (new Date(
		parseInt(d[0], 10) || null,
		(parseInt(d[1], 10) || 1) - 1,
		parseInt(d[2], 10) || null,
		parseInt(t[0], 10) || null,
		parseInt(t[1], 10) || null,
		parseInt(t[2], 10) || null
	)).getTime() / 1000
	return time;
}

var getImgUrl = {
	ele: '',
	base64Src: '',
	imgEle: '',
	showFun: '',
	uploadIcon: function() {
		var file = this.ele;
		if(file.files && file.files[0]) {
			var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();
			if(ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
				alert("图片的格式必须为png或者jpg或者jpeg格式！");
				return false;
			} else {
				var reader = new FileReader();
				reader.onload = function(evt) {
					//img.src =evt.target.result;
					getImgUrl.base64Src = evt.target.result;
					getImgUrl.ajaxImg();
				}
				reader.readAsDataURL(file.files[0]);
			}
		} else //兼容IE
		{
			file.select();
			var imgSrc = document.selection.createRange().text;
			img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
			img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = imgSrc;
			if((navigator.appName == "Microsoft Internet Explorer") && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) < 10) {
				//alert("您的浏览器版本过低，请下载IE10及以上版本");
				getImgUrl.imgEle.attr('src', '');
			}
		}
	},
	ajaxImg: function() {
		$.ajax({
			type: 'post',
			url: 'https://two.zhiqunale.cn/paper/img/receivePcFile',
			data: {
				pic: getImgUrl.base64Src
			},
			success: function(data) {
				getImgUrl.showFun(data);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log('请求错误！');
				console.log(XMLHttpRequest);
				console.log(textStatus);
				console.log(errorThrown);
			}
		})
	}

};
/*解码获取的后台获取的信息*/
function Unescape(ele) {
	if(ele instanceof Array) {
		var datas = [];
		for(var i in ele) {
			var dt = {};
			for(var j in ele[i]) {
				if(ele[i]) {
					unescape(ele[i][j]);
					dt[j] = unescape(ele[i][j]);
				}

			}
			datas.push(dt);
		}
	} else {
		var datas = {};
		for(var i in ele) {
			if(ele[i]) {
				datas[i] = unescape(ele[i]);
			}

		}
	}
	return datas;
}
//获取账户信息
function getAccountInfo() {	
	if(cookie.getCookie('uid')) {
		var url = 'https://two.zhiqunale.cn/Paper/PersonalCenter/user_information';
		var argu = {
			c_id: cookie.getCookie('uid'),
			user_state: 1,
			device_number: 'pc_online'
		}
		GetList(argu, url, sloveAccountInfo);
	}
};

function sloveAccountInfo(data) {
	//console.log(data);
	if(data.status_code == 10000) {
		//企业认证状态
		localStorage.c_is_company = data.data.c_is_company;
		//贸易公司认证状态
		localStorage.c_company_state = data.data.c_company_state;
		//打包站认证状态
		localStorage.c_pack_state = data.data.c_pack_state;
		//纸厂认证状态
		localStorage.c_paper_state = data.data.c_paper_state;
		//用户昵称
		localStorage.c_username = data.data.c_username;
		/*用户头像*/
		if(data.data.c_headurl){
			localStorage.headurl= data.data.c_headurl;			
			$('.head img').attr('src','https://two.zhiqunale.cn/'+localStorage.headurl)
		}
	}

}
//获取地址栏
function GetQueryString(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}


function payment(data){
	//支付宝
	if(data.channel=='alipay_pc_direct'){
		pingpp.createPayment(JSON.stringify(data), function(result, err) {
			if (data.status_code=="10000") {
				alert(data.msg);
			} else {
				alert(result+" "+err.msg+" "+err.extra);
			}
		});
	}
	//微信
	//else if(data.channel=='wx_pub_qr'){
	//	$('.intentionewm').html(makeCode(data.credential.wx_pub_qr));
	//	var qr={
	//		ping_order_no:data.id
	//	}
	//	qr.sign=getUrl(qr);
	//	setInterval(function(){
	//		$.ajax({
	//			url:'https://two.zhiqunale.cn/paper/orders/wxpayornot',
	//			type:'post',
	//			dataType:'json',
	//			data:qr,
	//			success:function(data){
	//				if(data.status_code=='10000'){
	//					window.location.reload();
	//				}else{
	//					console.log(data.msg);
	//				}
	//			},error:function(){
	//				console.log("请求错误");
	//			}
	//		});
	//	},1000);
	//}
	//银联
	else if(data.channel=='upacp_pc'){
		pingpp.createPayment(JSON.stringify(data), function (result, err) {
			if (data.status_code == "10000") {
				alert(data.msg);
			} else {
				alert(result + " " + err.msg + " " + err.extra);
			}
		});
	}
	//余额
	else{
		alert(data.msg);
		if(data.msg=='支付尾款成功'||data.status_code=='10000'){
			window.location.reload();
		}
	}
}


//生成二维码
function makeCode (url) {
	var qrcode = new QRCode(document.getElementById("qrcode"), {
		width : 200,
		height : 200
	});
	return qrcode.makeCode(url);
}

//输入框判断
function checkweight(obj){
	if( (/^[0-9]+(.[0-9]{1,3})?$/.test(obj)) ){
		return true;
	}else{
		return "输入格式错误：必须为整数或保持三位小数!";
	}
}
function checkprice(obj){
	if( (/^[0-9]+(.[0-9]{1,2})?$/.test(obj)) ){
		return true;
	}else{
		return "输入格式错误：必须为整数或保持两位小数!";
	}
}

/*function uploadIcon(file, funImg) {
	if(file.files && file.files[0]) {
		var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();
		if(ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
			alert("图片的格式必须为png或者jpg或者jpeg格式！");
			return false;
		} else {
			var reader = new FileReader();
			reader.onload = function(evt) {
				//img.src =evt.target.result;
				logoSrc = evt.target.result;
				ajaxImg(logoSrc, funImg);
			}
			reader.readAsDataURL(file.files[0]);
		}
	} else //兼容IE
	{
		file.select();
		var imgSrc = document.selection.createRange().text;
		img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = imgSrc;
		if((navigator.appName == "Microsoft Internet Explorer") && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) < 10) {
			//alert("您的浏览器版本过低，请下载IE10及以上版本");
			$('#icon').attr('src', '');
		}
	}
}

function ajaxImg(base64, fn) {
	$.ajax({
		type: 'post',
		url: 'https://two.zhiqunale.cn/paper/img/receivePcFile',
		data: {
			pic: base64
		},
		success: function(data) {
			fn(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log('请求错误！');
			console.log(XMLHttpRequest);
			console.log(textStatus);
			console.log(errorThrown);
		}
	})
}*/