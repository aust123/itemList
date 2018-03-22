/*判断用户是移动端还是PC端设备，进行打开相对应的网址*/
(function() {
	function IsPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
			"SymbianOS", "Windows Phone",
			"iPad", "iPod"
		];
		var flag = true;
		for(var i = 0; i < Agents.length; i++) {
			if(userAgentInfo.indexOf(Agents[i]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
	if(IsPC()) {
		console.log("pc端");
		//window.location.href = 'http://healthbeauty.io/';//"PC地址"
	} else {
		console.log("移动端");
		window.location.href = 'http://mobile.healthbeauty.io/'; //"移动端地址"
	}
})();

/*导航栏点击修改样式并跳转*/
function moveTo(_this){
	$(_this).addClass('on').parents('li').siblings('li').find('a').removeClass('on');
	if($(_this).hasClass('team-work')) {
		scrollTo('#team', 1000);
	} else if($(_this).hasClass('wallets')) {
		scrollTo('#wallet', 1000);
	} else if($(_this).hasClass('home')) {
		scrollTo('.banner', 1000);
	};
}


$(window).scroll(function() {
	var windowWidth = $(document).width();
	var i = windowWidth / 1920;
	if($(document).scrollTop() >= 650 * i) {
		$('.header').css({
			'background-color': 'rgba(0,0,0,0.5)',
			'top': '0px'
		});
	} else {
		$('.header').css({
			'background-color': 'transparent',
			'top': '62px'
		});
	}
});
/*页面内导航*/
function scrollTo(ele, speed) {
	if(!speed) {
		speed = 300;
	};
	if(!ele) {
		$("html,body").animate({
			scrollTop: 0
		}, speed);
	} else {
		if(ele.length > 0) {
			$("html,body").animate({
				scrollTop: $(ele).offset().top
			}, speed);

			if(ele == '.banner') {
				$('.header').css({
					'background-color': 'transparent',
					'top': '62px'
				});
			} else {
				$('.header').css({
					'background-color': 'rgba(0,0,0,0.5)',
					'top': '0px'
				});
			}

		};
	};
	return false;
};

/*banner动画*/
var banner = {
	fn_swiper: function() {
		console.log('fn_swiper')
		$(document).ready(function() {
			var mySwiper = new Swiper(".swiper-banner", {
				autoplay: 3000,
				simulateTouch: false,
				loop: true,
				speed: 1000,
				paginationClickable: true,
				pagination: '.swiper-pagination',
				// 如果需要前进后退按钮
				nextButton: '.banner-next',
				prevButton: '.banner-prev',
			});
			$(".banner-prev").on("click", function(b) {
				mySwiper.stopAutoplay();
				b.preventDefault();

			});
			$(".banner-next").on("click", function(b) {
				mySwiper.stopAutoplay();
				b.preventDefault();
			});
			$(document).on({
				mouseenter: function() {
					mySwiper.stopAutoplay();
					$(".banner-prev,.banner-next").fadeIn();
				},
				mouseleave: function() {
					mySwiper.startAutoplay();
					$(".banner-prev,.banner-next").fadeOut();

				}
			}, ".swiper-banner")

		})

	},
	fn_change: function($box, $ele, $prev, $next) {
		console.log('fn_change')
		$(document).ready(function() {
			var appSwiper = new Swiper($ele, {
				speed: 500,
				slidesPerView: 'auto',
				slidesPerGroup: 3,
				nextButton: $next,
				prevButton: $prev,
				centeredSlides: true,
				onSetTransition: function(swiper) {
					swiper.disableTouchControl();
				}
			});
			$(document).on({
				mouseenter: function() {
					var btns = $prev + ',' + $next;
					$(btns).fadeIn();
				},
				mouseleave: function() {
					var btns = $prev + ',' + $next;
					$(btns).fadeOut();
				}
			}, $box)
		});

	}
}

function adaptation() {
	var windowWidth = $(document).width();
	var i = windowWidth / 1920;
	$('.header').css({
		'top': 62 * i,
		'height': 51 * i
	});
	$('a.logo').css('margin-left', 200 * i);
	$('a.logo img').css({
		'width': 122 * i,
		'height': 51 * i
	});
	$('.navbar').css('top', 17 * i);
	$('.nav ul').css('margin-right', 120 * i);
	$('.nav li').css('margin-right', 80 * i);
	$('.nav li a').css('font-size', 16 * i);
	//$('.banner,.content').css('top', -113 * i);
	$('.text').css({
		'left': 693 * i,
		'top': 378 * i
	});
	$('.pagination').css('bottom', 40 * i);
	$('.pagination span').css({
		'width': 18 * i,
		'height': 6 * i
	});

	$('.swiper-button-prev.banner-prev').css({
		'width': 42 * i,
		'height': 44 * i
	});
	$('.swiper-button-next.banner-next').css({
		'width': 42 * i,
		'height': 44 * i
	});
	$('.banner-title').css({
		'margin-bottom': 28 * i,
		"letter-spacing": 10 * i,
		'font-size': 50 * i
	});
	$('.imgs img').css('height', 856 * i);
	$('.banner-tip').css("letter-spacing", 5 * i);

	$('.introduce ul>li').css({
		'padding-top': 125 * i,
		'padding-bottom': 125 * i,
		'padding-right': 428 * i,
		'padding-left': 428 * i
	});
	$('.rapid').css('height', 680 * i);
	//$('.intro-logo.right').css('margin-left', 180 * i);
	$('.intro-logo').css('margin-right', 180 * i);
	$('.intro-logo img').css('width', 209 * i);
	//$('.intro-logo.left').css('margin-right', 180 * i);
	$('.introduce ul>li:odd .intro-logo').css({
		'margin-left': 880 * i,
		'margin-right': 0
	});
	$('.introduce ul>li:even .intro-text').css({
		'margin-left': 400 * i		
	})
	$('.intro-text ').css('width', 656 * i);
	$('.intro-text p').css({
		'font-size': 16 * i,
		'line-height': 28.8 * i + 'px'
	});
	$('.introduce h3').css({
		'margin-bottom': 80 * i,
		'font-size': 28 * i
	});
	$('li#team').css({		
		'padding-left': 270 * i,
		'padding-right': 270 * i,
		'padding-top': 98 * i,
		"padding-bottom":98*i
	});
	$('li#team h3,#applications h3').css('margin-bottom', 104 * i);
	$('.team-contain ol').css('left', -375 * i);
	$('#team li.swiper-slide').css({
		'width': 270 * i,
		'padding-right': 236 * i
	});

	$('.team-list').css('width', 1340 * i);
	$('.swiper-button-prev.team-prev').css({
		'left': 280 * i,
		'width': 42 * i,
		'height': 44 * i
	});
	$('.swiper-button-next.team-next').css({
		'right': 280 * i,
		'width': 42 * i,
		'height': 44 * i
	});
	$('.member-photo img').css({
		'width': 208 * i,
		'height': 208 * i
	});
	$('.member-name').css({
		'margin-top': 30 * i,
		'margin-bottom': 30 * i,
		'font-size': 20 * i
	});
	$('.member-name b').css({
		'margin-left': 16 * i,
		'margin-top': 10 * i
	});
	$('.member-info').css({
		'width': 267 * i,
		'font-size': 16 * i
	});
	$('li#applications').css({
		//'height': 1100 * i,
		'padding-top': 100 * i,
		'padding-left': 372 * i,
		'padding-right': 372 * i
	});
	$('#applications li').css({
		'width': 380 * i + ' !important',
		'padding-right': 30 * i
	});

	$('#applications .swiper-slide').css('width', 380 * i);
	$('.applications-list').css('width', 1140 * i);
	$('.example-photo>img').css({
		'height': 304 * i,
		'width': 350 * i
	});
	$('.example-info ').css({
		'margin-top': 40 * i,
		'font-size': 16 * i
	});
	$('span.example-title ').css('margin-bottom', 40 * i);

	$('.applications-list ol').css('left', -350 * i);
	$('.swiper-button-prev.app-prev').css({
		'left': 316 * i,
		'width': 42 * i,
		'height': 44 * i
	});
	$('.swiper-button-next.app-next').css({
		'right': 316 * i,
		'width': 42 * i,
		'height': 44 * i
	});
	$('#wallet').css({
		'padding-top': 170 * i,
		'padding-bottom': 170 * i,
		'padding-left': 465 * i,
		'padding-right': 465 * i,
		
	});
	
	$('#wallet .wallet-logo ').css('margin-right', 160 * i);
	$('.wallet-info').css({"font-size":28*i,"top":170*i,"left":860*i});
	$('.wallet-address').css({'width':620*i,'margin-bottom':60*i});
	$('.wallet-logo img').css({"width":236*i,"height":200*i});
	$('.address-title').css('bottom',40*i)
	$('.download ').css('margin-top', 70 * i);
	$('.download a').css({
		'width': 226 * i,
		'height': 62 * i,
		'line-height': 62 * i + 'px',
		'border-radius': 10 * i,
		'font-size': 20 * i
	});
	$('a.android').css({
		'margin-right': 16 * i,

	});

	$('a.android img').css({
		"width": 30 * i,
		"height": 36 * i,
		"vertical-align": -10 * i,
		"margin-left": 29 * i,
		"margin-right": 16 * i
	});
	$('a.iphone img').css({
		"width": 24 * i,
		"height": 32 * i,
		"vertical-align": -5 * i,
		"margin-left": 29 * i,
		"margin-right": 36 * i
	});
	$('.footer').css('height', 466 * i);
	$('.footer h3').css({
		'margin-bottom': 122 * i,
		'padding-top': 120 * i,
		'font-size': 22 * i
	});
	$('.connect dl').css('margin-right', 100 * i);
	$('.connect dl').eq(3).css('margin-right', 0);
	$('.copyright').css('margin-top', 72 * i);
	$('.wechart_account').css({
		'top': -293 * i,
		'left': -110 * i,
		'width': 246 * i,
		'height': 276 * i,
		'border-radius': 15 * i,
		'padding-top': 33 * i
	});
	$('.wechart_account p ').css({
		'margin-top': 20 * i,
		'font-size': 14 * i
	});
	$('.wechart_account img').css({
		'width': 178 * i,
		'height': 178 * i
	});
	$('.facebook').css({
		'width': 10 * i,
		'height': 19 * i
	});
	$('.wechat').css({
		'width': 22 * i,
		'height': 19 * i
	});
	$('.twitter').css({
		'width': 20 * i,
		'height': 17 * i
	});
	$('.telegram').css({
		'width': 22 * i,
		'height': 18 * i
	});
	$('.tip').css({
		'top':'-'+ 32 * i		
	});
}

$(function() {
	setTimeout(function() {
		adaptation();
		banner.fn_swiper();
		banner.fn_change('#applications', '.contain', '.app-prev', '.app-next');
		banner.fn_change("#team", '.team-contain', '.team-prev', '.team-next');
	}, 1000);
});