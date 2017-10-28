/**
 * Created by Administrator on 2017/8/8.
 */
$(function() {
	//切换时间、城市、纸厂
	$('.module li').click(function() {
		$('.alternative').css('z-index', 100);
		$('html,body').animate({
			scrollTop: 0
		}, 0);
		$(this).addClass('on').siblings().removeClass('on');
		if($(this).hasClass('dt')) {
			$('.alternative .dt').toggle().siblings().hide();
		} else if($(this).hasClass('ct')) {
			$('.alternative .ct').toggle().siblings().hide();
		} else {
			$('.alternative .pp').toggle().siblings().hide();
		}
		var divs = $('.alternative>div');
		if($(divs[0]).css('display') == 'none' && $(divs[1]).css('display') == 'none' && $(divs[2]).css('display') == 'none') {
			$('.alternative').hide();
		} else {
			$('.alternative').show();
		}
	});

	//默认城市
	var more = true,
		pg = 1,
		p_id = '',
		ct;
	$.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js", function() {
		var city = remote_ip_info["city"];
		$('.selCity').html(city);
		ct = city + '市';
		//页面加载完成后请求数据
		post();
	});
	//当前时间
	$("#top_shu").html(new Date().toLocaleDateString());
	var dat = new Date();
	dat = dat.getFullYear() + "-" + (dat.getMonth() + 1) + "-" + dat.getDate();
	dat = getTime(dat) / 1000;
	console.log(dat);

	//加载更多数据
	$('.addMore a').click(function() {
		if(more) {
			post();
		}
	});

	function post() {
		var obj = {
			page: pg,
			size: 5,
			category_id: 1,
			time: dat,
			region: escape(ct),
			n_mills: p_id
		};
		console.log(obj)
		var signs = getUrl(obj);
		obj.sign = signs;
		$.ajax({
			type: "post",
			dataType: "json",
			url: API_HOST + "/public/api/news/list",
			data: obj,
			async: false,
			success: function(data) {
				console.log(data);
				if(data.status_code == 10001) {
					more = false;
					$('.addMore a').html('没有更多数据');
				}
				var html = template('rList', data);
				var ulHtml = $('.resList').html();
				$('.resList').html(ulHtml + html);
				pg += 1;
			},
			error: function() {
				alert("数据请求失败");
			}
		});
	}

	//选择纸厂
	$.ajax({
		type: "post",
		dataType: "json",
		url: API_HOST + "/public/api/news/mills",
		data: {},
		success: function(data) {
			var html = template('paperList', data);
			$('.ppList').html(html);
		},
		error: function() {
			//alert("数据请求失败");
		}
	});
	$('.ppList').on('click', 'li', function() {
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.allpp').html($(this).html());
		//根据点击的纸厂进行结果筛选
		p_id = $(this).attr('data-id');
		$('.paper').hide().parent().hide();
		$('.resList').html('');
		$('.addMore a').html('点击加载更多');
		more = true;
		pg = 1;
		post();
	});

	//    选择城市
	$('.letter li').click(function() {
		$('.selCity').html($(this).html());
		$('.city').hide().parent().hide();
		//根据点击城市进行结果筛选
		$('.resList').html('');
		$('.addMore a').html('点击加载更多');
		more = true;
		pg = 1;
		ct = $(this).html() + '市';
		post();
	});
	//城市按首字母查询
	$('.lters li').click(function() {
		$('html,body').animate({
			scrollTop: $('#' + $(this).html()).offset().top - 48
		}, 200);
	});

	//    选择日期
	$('.calendar').hide();
	$('.tables').on('click', 'td.list', function() {
		$('.calendar').hide().parent().hide();
		$('.resList').html('');
		$('.addMore a').html('点击加载更多');
		dat = getTime($('#top_shu').html().split('.').join('-')) / 1000;
		more = true;
		pg = 1;
		post();
	});
	$('.buxian').click(function() {
		$('.calenda .list.xuanzhong').removeClass('xuanzhong');
		$('#top_shu').html('不限时间');
		$('.calendar').hide();
		$('.resList').html('');
		$('.addMore a').html('点击加载更多');
		dat = '';
		more = true;
		pg = 1;
		post();
	});

})

function getTime(day) {
	re = /(\d{4})(?:-(\d{1,2})(?:-(\d{1,2}))?)?(?:\s+(\d{1,2}):(\d{1,2}):(\d{1,2}))?/.exec(day);
	return new Date(re[1], (re[2] || 1) - 1, re[3] || 1, re[4] || 0, re[5] || 0, re[6] || 0).getTime();
}

function detail(This) {
	localStorage.setItem("n_id", $(This).attr('data-id'));
}