function GetList(_id, _pathname, _fn) {
	if(_id.sign) {
		delete _id.sign; //删除上一次添加的sign属性
	}
	var serverUrl = "https://api.zhiqunale.cn"; //请求地址域名
	var signs = getUrl(_id); //通过getUrl()获取的sign值
	console.log(signs);
	_id.sign = signs; //将sign拼接成请求的data对象
	jQuery.support.cors=true;
	console.log(_id)
	$.ajax({
		type: "post",
		dataType: "json",
		crossDomain:true,
		contentType:'application/x-www-form-urlencoded;charset=UTF-8',
		url: serverUrl + _pathname,//serverUrl + _pathname
		data: _id,
		async: false,
		success: function(data) {
			if(_fn) {
				_fn(data);
			}
			if(typeof CallBack == 'function') {
				CallBack(data);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {			
			console.log(JSON.stringify(XMLHttpRequest));
			console.log(JSON.stringify(textStatus));
			console.log(errorThrown);
			console.log("请求不到服务器");
		}
	});
};

/*获取sign值*/
function getUrl(arr) {
	var secret = "key=pass4zhiqunale";
	var param = [];
	for(var k in arr) {
		param.push(k);
	}
	param.sort();
	var str = '';
	for(var key in param) {
		str += param[key] + '=' + arr[param[key]] + '&';
	}
	str += secret;
	return hex_md5(str);
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