/**
 * zepto.animate.alias.js
 */
(function($) {
	$.extend($.fn, {
		fadeIn: function(speed, easing, complete) {
			if(typeof(speed) === 'undefined') speed = 400;
			if(typeof(easing) === 'undefined') {
				easing = 'swing';
			} else if(typeof(easing) === 'function') {
				if(typeof(complete) === 'undefined') complete = easing;
				easing = 'swing';
			}

			$(this).css({
				display: 'block',
				opacity: 0
			}).animate({
				opacity: 1
			}, speed, easing, function() {
				// complete callback
				complete && typeof(complete) === 'function' && complete();
			});

			return this;
		},
		fadeOut: function(speed, easing, complete) {
			if(typeof(speed) === 'undefined') speed = 400;
			if(typeof(easing) === 'undefined') {
				easing = 'swing';
			} else if(typeof(easing) === 'function') {
				if(typeof(complete) === 'undefined') complete = easing;
				easing = 'swing';
			}

			$(this).css({
				opacity: 1
			}).animate({
				opacity: 0
			}, speed, easing, function() {
				$(this).css('display', 'none');
				// complete callback
				complete && typeof(complete) === 'function' && complete();
			});

			return this;
		},
		fadeToggle: function(speed, easing, complete) {
			return this.each(function() {
				var el = $(this);
				el[(el.css('opacity') === 0 || el.css('display') === 'none') ? 'fadeIn' : 'fadeOut'](speed, easing, complete)
			})
		}
	})
})(Zepto);