var Ajax = {
	pages: null,
	fun: null,
	state: null,
	pageEle: null,
	followEle: null,
	$type: null,
	set: function($pages, $fun, $state, $pEle, $fEle, $type) {
		this.pages = $pages;
		this.fun = $fun;
		this.state = $state;
		this.pageEle = $pEle;
		this.followEle = $fEle;
		this.type = $type;
		this.getData();

		return this;
	},
	turnPage: function() {
		$(Ajax.pageEle).each(function() {
			$(this).click(function() {
				$(this).addClass('current').siblings().removeClass('current');
				if($(this).hasClass('first_page')) {
					$('.hasdata').val('');
					Ajax.pages = 1;
					Ajax.getData();

				} else if($(this).hasClass('pre_page')) {
					$('.hasdata').val('');
					Ajax.pages > 1 ? Ajax.pages-- : Ajax.pages = 1;
					Ajax.getData();

				} else {
					if(localStorage.order_data) {
						var dd = JSON.parse(localStorage.order_data);
						if(parseInt(dd.length) < 10) {
							return false;
						}
					};
					if($('.hasdata').val()) {
						return false;
					}
					Ajax.pages++;
					Ajax.getData();
				}
			})
		})

	},
	switchShow: function() {
		$(Ajax.followEle).each(function() {
			$(this).click(function() {
				Ajax.pages = 1;
				$(Ajax.pageEle).removeClass('current');
				$('.hasdata').val('');
				if($(this).hasClass('dfh')) {
					Ajax.state = 1;
					Ajax.getData();
				} else if($(this).hasClass('dsh')) {
					Ajax.state = 2;
					Ajax.getData();
				} else if($(this).hasClass('djs')) {
					Ajax.state = 3;
					Ajax.getData();
				} else if($(this).hasClass('ywc')) {
					Ajax.state = 4;
					Ajax.getData();
				}
			})
		});
		return this;
	},
	getData: function() {
		var url = 'https://two.zhiqunale.cn/paper/orders/getorderlist';
		var argu = {
			user_id: cookie.getCookie('uid'),
			device_number: 'pc_online',
			state: this.state,
			order_type: this.type,
			page: this.pages,
			size: 10
		}
		GetList(argu, url, this.fun);
	}
};

//点击显示联系方式
function getPhone($this) {
	var phoneNum = $($this).attr('data-phone');
	$('.popBox').show(function() {
		$('.popPhone').html(phoneNum);
	});
};
$('.popHide').click(function() {
	$('.popBox').hide();
});