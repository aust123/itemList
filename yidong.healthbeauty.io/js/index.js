/*判断用户是移动端还是PC端设备，进行打开相对应的网址*/


/*设置font-size大小*/
var width, rem;
(function() {
	var html = document.documentElement;
	width = html.getBoundingClientRect().width;
	html.style.fontSize = width / 18 + 'px';
	rem = width / 18;
	//1rem=60;	
	console.log(width)
	console.log(rem)
})()
$('body').click(function(event) {
	//console.log(event)
	if($(event.target).hasClass('wechat') || $(event.target).hasClass('nav_img')) {
		$(".wechat_code").fadeIn();
	} else {
		$(".wechat_code").fadeOut();
	};
	//console.log($(document).scrollTop());
	//console.log($(document).scrollTop() / 60)
})

/*页面内导航*/
function scrollTo(ele, speed) {
	if(!speed) {
		speed = 300;
	};
	if(!ele) {
		$('body,html').animate({
			scrollTop: 0
		}, speed);
	} else {
		if(ele.length > 0) {
			$('body,html').animate({
				scrollTop: $(ele).offset().top
			}, speed)
		};
	};
	return false;
};
/*导航栏效果*/
function moveTo(_this) {
	$(_this).addClass('on').parents('li').siblings('li').find('a').removeClass('on');
	$('.nav_content').animate({
		width: '0'
	}, 300);
	$('.navbar img').attr('src', 'img/tab_n.png')
	if($(_this).hasClass('team-work')) {
		scrollTo('#found_team', 1000);
	} else if($(_this).hasClass('wallets')) {
		scrollTo('#wallet', 1000);
	} else if($(_this).hasClass('home')) {
		scrollTo('.banner', 1000);
	};

};
$('.navbar').click(function() {
	if($('.nav_content').width() > 0) {
		$('.nav_content').animate({
			width: '0'
		}, 300);
		$(this).find('img').attr('src', 'img/tab_n.png')
	} else {
		if($(document).scrollTop() / rem >= 32) {
			$('.nav_content').css({
				'background-color': 'black',
				'color': '#fff'
			});
			$('.nav_list a').css('color', '#fff')
		} else {
			$('.nav_content').css({
				'background-color': '#fff',
				'color': '#666'
			});
			$('.nav_list a').css('color', '#666');
		}
		$('.nav_content').animate({
			width: '50%'
		}, 300);
		$(this).find('img').attr('src', 'img/tab_p.png')
	}

})

/*banner动画*/
var banner = {
	fn_swiper: function() {
		$(document).ready(function() {
			var mySwiper = new Swiper(".swiper-banner", {
				autoplay: 3000,
				simulateTouch: false,
				loop: true,
				speed: 1000,
				paginationClickable: true,
				pagination: '.swiper-pagination',

			});
		})
	},
	fn_change: function($ele, count) {
		$(document).ready(function() {
			var appSwiper = new Swiper($ele, {
				speed: 600,
				slidesPerView: 'auto',
				slidesPerGroup: count,
				autoplay: 3000,
				centeredSlides: true,
			});
		});

	}
}
$(function() {
	/*banner.fn_swiper();
	banner.fn_change('.examples', 1);
	banner.fn_change('.team_members', 3);*/
	setTimeout(function() {
		banner.fn_swiper();
		banner.fn_change('.examples', 1);
		banner.fn_change('.team_members', 3);
	}, 1000);
});