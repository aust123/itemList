var banner = {
	fn_swiper: function() {
		$(document).ready(function() {
			var a = new Swiper(".swiper-banner", {
				autoplay: 3000,
				pagination: ".pagination",
				simulateTouch: false,
				loop: true,
				paginationClickable: true,
				nextButton: '.banner-next',
				prevButton: '.banner-prev',
			});
			
			$(".banner-prev").on("click", function(b) {
			a.stopAutoplay();
			b.preventDefault();
			a.swipePrev();

		});
		$(".banner-next").on("click", function(b) {
			a.stopAutoplay();
			b.preventDefault();
			a.swipeNext()
		});
		$(document).on({
			mouseenter: function() {
				a.stopAutoplay()
			},
			mouseleave: function() {
				a.startAutoplay()
			}
		}, ".swiper-banner")
			
		})

		
	}

};

var mall = {
	fn_ad: function() {
		var a = new Swiper(".co_factory", {
			simulateTouch: false,
			autoplay: 5000,
			slidesPerView: 4,
			loop: true,
			slidesPerGroup: 4
		});
		$(".ad-prev").on("click", function(b) {
			a.stopAutoplay();
			b.preventDefault();
			a.swipePrev();
		});
		$(".ad-next").on("click", function(b) {
			a.stopAutoplay();
			b.preventDefault();
			a.swipeNext();
		});
		$(document).on({
			mouseenter: function() {
				$(".ad-prevs,.ad-nexts").show();
				aa.stopAutoplay();
			},
			mouseleave: function() {
				$(".ad-prevs,.ad-nexts").hide();
				aa.startAutoplay();
			}
		}, ".co_company");

		var aa = new Swiper(".co_company", {
			simulateTouch: false,
			autoplay: 5000,
			slidesPerView: 4,
			loop: true,
			slidesPerGroup: 4
		});
		$(".ad-prevs").on("click", function(b) {
			aa.stopAutoplay();
			b.preventDefault();
			aa.swipePrev();
		});
		$(".ad-nexts").on("click", function(b) {
			aa.stopAutoplay();
			b.preventDefault();
			aa.swipeNext();
		});
		$(document).on({
			mouseenter: function() {
				$(".ad-prev,.ad-next").show();
				a.stopAutoplay();
			},
			mouseleave: function() {
				$(".ad-prev,.ad-next").hide();
				a.startAutoplay();
			}
		}, ".co_factory");

	},
	fn_del_action: function() {
		var a = new Swiper(".slick", {
			simulateTouch: false,
			autoplay: 3000,
			slidesPerView: 10,
			loop: true,
			mode: "vertical"
		})
	}
}

$(function() {	
	mall.fn_ad();	
});