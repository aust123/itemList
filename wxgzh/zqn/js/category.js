/*js计算html初始font-size值为100px*/
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			//设置字体font-size:100px
			if(clientWidth >= 640) {
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
				// 这个640（iphone6）就是根据设计稿的横向宽度来确定的，假如你的设计稿是750(iphone6s)
			}
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/*------sign加密-------*/
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

//向后台请求数据的函数
function GetList(_id, _pathname) {
	if(_id.sign) {
		delete _id.sign; //删除上一次添加的sign属性
	}
	var serverUrl = "https://api.zhiqunale.cn"; //请求地址域名
	var signs = getUrl(_id); //通过getUrl()获取的sign值
	_id.sign = signs; //将sign拼接成请求的data对象
	$.ajax({
		type: "post",
		dataType: "json",
		url: serverUrl + _pathname,
		data: _id,
		async: true,
		success: function(data) {
			//console.log(data);
			if(data.data) {
				if(data.data.n_detail) {
					AppendContent(data.data.n_detail);
				}
			}
			if(data) {
				if(data.status_code == 10000) {
					if(data.data['created_at']) {
						data.data['created_at'] = getLocalTime(data.data['created_at']);
					} else {
						for(var i in data.data) {
							for(var k in data.data[i]) {
								if(k = 'created_at') {
									//console.log(data.data[i][k]);
									times = getLocalTime(data.data[i][k]);
								}
							}
							data.data[i]['created_at'] = times;
						}
					}
					var html = template('all_list', data);
					document.getElementById('content_list').innerHTML += html;
					//数据请求成功后移除正在加载图片	
					$('body #load_img').remove();
					//$("#load_btn").css("display", "block");
				} else {
					$('body #load_img').remove();
					$("#load_btn").css("display", "block").html("没有更多内容...")
				}
			}
		},
		error: function() {
			console.log("ajax请求错误！")
		}
	});
}

//页面渲染
function AppendContent(_content) {
	var div = document.createElement('div');
	div.innerHTML = _content;
	document.getElementById('details').innerHTML = div.innerHTML;
	$('#details img').each(function() {
		var $src = $(this).attr('src');
		$(this).bind('click', function() {
			bgstr = '<div id="motai" onclick=$(\'#Image\').fadeOut();$(\'#motai\').fadeOut(); style=" background:#000000; filter:Alpha(Opacity=70); opacity:0.7; position:fixed; left:0; top:0; z-index:10000; width:100%; height:100%; display:none;"></div>';
			//alert($(this).attr('src'));
			imgstr = '<img id="Image" src="' + $(this).attr('src') + '" onclick=$(\'#Image\').fadeOut();$(\'#motai\').fadeOut(); style="cursor:pointer; display:none; position:absolute; z-index:10001;" />';
			if($('#motai').length < 1) {
				$('body').append(bgstr);
			}
			if($('#Image').length < 1) {
				$('body').append(imgstr);
			} else {
				$('#Image').attr('src', $(this).attr('src'));
			}
			$('#Image').attr('src', $('#box img').attr('src'));
			$('#Image').css('left', '0px');
			$('#Image').css('top', $(window).scrollTop() + ($(window).height() - $('#Image').height()) / 2);
			$('#motai').fadeIn();
			$('#Image').fadeIn();
		})
		$(this).attr('src', 'http://admin.zhiqunale.cn' + $src);
		$(this).after('<span style="font-size: 0.28rem !important;color: #999;display:block;text-align: center;">(点击图片可放大)</span>');
	});
}

//时间戳转换为时间格式 yyyy-MM-dd hh:mm
function getLocalTime(nS) {
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

//点击加载更多


/*function LoadMore(tar) {
	$(this).remove();
	var pathname = "/api/news/list";
	if($('#box .loading').length == 0) {
		//显示加载状态  
		$('#content_list').append(loadDiv);
		$(tar).css('display', 'none');
	}
	//page值增长
	obj.page++;
	GetList(obj, pathname);
}*/

//视频播放添加touch事件并且 触摸视频时，图片消失，并播放视频
function PLAY(video) {
	document.getElementById('play_video').play();
	$(".img").css('display', 'none');
}

//点击图片放大