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
	fn_change: function($ele,count) {
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
	banner.fn_swiper();	
	banner.fn_change('.examples',1);
	banner.fn_change('.team_members',3);
});