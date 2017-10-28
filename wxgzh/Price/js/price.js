$(function() {
	/*设置rem值*/
	(function() {
		var html = document.documentElement;
		var width = html.getBoundingClientRect().width;
		html.style.fontSize = width / 15 + 'px';
		//1rem=50;
	})()

	/*banner动画*/
	var swiper = new Swiper('.swiper-container', {
		autoplay: 3000,
		speed: 1000,
		autoplayDisableOnInteraction: false,
		loop: true,
		centeredSlides: true,
		slidesPerView: 2,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
		onInit: function(swiper) {
			swiper.slides[2].className = "swiper-slide swiper-slide-active"; //第一次打开不要动画
		},
		breakpoints: {
			668: {
				slidesPerView: 1,
			}
		}
	});

	/*选择日期*/
	Date.prototype.format = function(fmt) { //author: meizz   
		var o = {
			"M+": this.getMonth() + 1, //月份   
			"d+": this.getDate(), //日   
			"h+": this.getHours(), //小时   
			"m+": this.getMinutes(), //分   
			"s+": this.getSeconds(), //秒   
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度   
			"S": this.getMilliseconds() //毫秒   
		};
		if(/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for(var k in o)
			if(new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}

	var time2 = new Date().format("yyyy-MM-dd");
	/*初始化日期，为当天日期*/
	$('header span').html(time2);
	/*选择日期*/
	$("#dtBox").DateTimePicker({
		addEventHandlers: function() {
			var dtPickerObj = this;
			$("header a.right").click(function(e) {
				e.stopPropagation();
				dtPickerObj.showDateTimePicker($("header span"));
			});
		}
	});

	/*底部切换按钮*/
	$('#footer a').each(function(i) {
		$(this).click(function() {　　　　　　
			$(this).addClass('current_btn').siblings('a').removeClass('current_btn');
			if($(this).hasClass('price_btn')) {
				$(this).children('img').attr('src', 'img/shishijiage.png');
				$(this).siblings('.msg_btn').children('img').attr('src', 'img/tiaojiaxinxi.png');
				$(this).siblings('.rec_btn').children('img').attr('src', 'img/tuijian_n.png');
			} else if($(this).hasClass('msg_btn')) {
				$(this).children('img').attr('src', 'img/tiaojia_h.png');
				$(this).siblings('.price_btn').children('img').attr('src', 'img/shishijiage_n.png');
				$(this).siblings('.rec_btn').children('img').attr('src', 'img/tuijian_n.png');
			} else {
				$(this).children('img').attr('src', 'img/tuijian-_h.png');
				$(this).siblings('.price_btn').children('img').attr('src', 'img/shishijiage_n.png');
				$(this).siblings('.msg_btn').children('img').attr('src', 'img/tiaojiaxinxi.png');
			}　　　　　
			$('.content').eq(i).addClass('current_option').siblings().removeClass('current_option');
		})
	})

	/*-----------切换地区----------*/
	$('#area a').each(function(i) {
		$(this).click(function() {
			$(this).addClass('current_area').siblings('a').removeClass('current_area');
			$('.province').eq(i).addClass('current_area_province').siblings().removeClass('current_area_province');
		})
	})
	/*-----------切换省份----------*/
	$('.province a').click(function() {
		$(this).addClass('current_province').siblings('a').removeClass('current_province')
	})

})