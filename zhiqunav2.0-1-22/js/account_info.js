function uploadIcon($this) {
	getImgUrl.ele = $this;
	getImgUrl.imgEle = $('#icon');
	getImgUrl.showFun = logoShow;
	getImgUrl.uploadIcon();
};
/*显示头像*/
function logoShow(data) {
	console.log(data);
	if(data.code == 10000) {
		var newSrc = 'https://two.zhiqunale.cn/' + data.data;
		getImgUrl.imgEle.attr('src', newSrc);
		localStorage.logoUrl = data.data;
	}
};

//上传企业实力展示图片
function uploadImg($this) {
	getImgUrl.ele = $this;
	getImgUrl.showFun = shopShow;
	getImgUrl.uploadIcon();
}
var picUrl = [];

/*显示店铺信息*/
function shopShow(data) {
	if(data.code == 10000) {
		var html = '<li class="simg"><img src="' + 'https://two.zhiqunale.cn/' + data.data + '" alt=""/></li>';
		$('.upload-list').append(html);
		picUrl.push(data.data);
	}
};

//删除上传的图片
$('.upload-list').delegate('li', 'click', function() {
	//console.log($(this).find('img').attr('src'));
	var imgPath = $(this).find('img').attr('src').replace('https://two.zhiqunale.cn/', '');
	if(account_data.c_store_show_photos) {
		for(var i in picUrl) {
			if(picUrl[i] == imgPath) {
				picUrl.splice(i, 1);
			}
		}
	}
	$(this).remove();
})

/*判断是否是贸易公司身份*/
$('#main_type').change(function() {
	if($(this).val() == 2) {
		$('.trade_co_paper').addClass('co_paper_show');
	} else {
		$('.trade_co_paper').removeClass('co_paper_show');
	}
});

/*获取平台纸厂*/
var ajaxPapler = {
	page: null,
	pageEle: null,
	fun: null,
	set: function($page, $pageEle, $fun) {
		this.page = $page;
		this.pageEle = $pageEle;
		this.fun = $fun;
		this.getPapers();
		return this;
	},
	changePage: function() {
		$(ajaxPapler.pageEle).each(function() {
			$(this).click(function() {
				$(this).addClass('current').siblings().removeClass('current');
				if($(this).hasClass('first_page')) {
					$('.hasdata').val('');
					ajaxPapler.page = 1;

				} else if($(this).hasClass('pre_page')) {
					$('.hasdata').val('');
					ajaxPapler.page > 1 ? ajaxPapler.page-- : ajaxPapler.page = 1;

				} else {
					if($('.hasdata').val()) {
						return false;
					}
					ajaxPapler.page++;
				};
				ajaxPapler.getPapers();
			})
		});
		return this;
	},
	getPapers: function() {
		var url = 'https://two.zhiqunale.cn/Paper/PersonalCenter/paper_factory_list';
		var argu = {
			c_id: cookie.getCookie('uid'),
			user_state: 1,
			device_number: 'pc_online',
			page: ajaxPapler.page,
			size: 10
		};
		GetList(argu, url, this.fun);
	}
};
ajaxPapler.set(1, $('.paper_change span'), getPaperList).changePage();

function getPaperList(data) {
	console.log(data);
	if(data.status_code == 10000) {
		var htmlServer = template('paper_list_tpl_server', data);
		$('.all_papers_server').html(htmlServer);
		var htmlMain = template('paper_list_tpl_main', data);
		$('.all_papers_main').html(htmlMain);
	} else {
		alert('暂无更多纸厂');
		$('.hasdata').val(0);
	}
}

/*选择主营纸厂和服务纸厂开始*/
//主营纸厂
$(".main_paper_name").click(function() {
	$(".popupBox_main,.background_main").fadeIn(200);
})
/*服务纸厂*/
$(".server_paper_name").click(function() {
	$(".popupBox_server,.background_server").fadeIn(200);
})
/*主营纸厂选中时切换样式*/
function selected($this) {
	$($this).addClass('on').siblings('li').removeClass('on');
};

/*取消添加纸厂*/
function cancle() {
	$(".popupBox,.background").fadeOut(200);
};

/*主营纸厂确定按钮*/
function mainPaper() {
	if($('.pop_input input[type="radio"]:checked')) {
		var sel = $('.pop_input input[type="radio"]:checked');
		$('.main_paper_name').val('');
		var val = $('.pop_input input[type="radio"]:checked').siblings('span').html();
		$('.main_paper_name').val(val);
		$('.main_paper_name').attr('paper_id', $(sel).siblings('i').html()); //纸厂Id
		$('.main_paper_name').attr('paper_type', $(sel).siblings('b').html()); //纸厂类型
		console.log($('.main_paper_name').attr('paper_id') + $('.main_paper_name').attr('paper_type'))
		$(".popupBox,.background").fadeOut(200);
		$('.pop_input input[type="radio"]').attr('checked', false);
	}
}

//服务纸厂确定按钮
function serverPaper() {
	var server_papers = [];
	var server_papers_info = [];
	var id_type = null;
	$('input[name="server-name"]:checked').each(function() {
		id_type = $(this).siblings('i').html() + ',' + $(this).siblings('b').html();
		server_papers_info.push(id_type); //获取纸厂的id和类型
		server_papers.push($(this).val()); //获取选择的纸厂名
	});
	//获取到的纸厂id和type
	localStorage.server_papers_info = server_papers_info.join('.');

	$('.server_paper_name').val(server_papers.join(' , '));
	$(".popupBox,.background").fadeOut(200);
	if(server_papers.length == 0) {
		alert('你还没有选择任何内容！');
	}
};

/*选择主营纸厂和服务纸厂结束*/

$('#save_btn').click(function() {
	var main_paper_info = '';
	var server_papers_info = '';
	if($('.main_paper_name').attr('paper_id')) {
		main_paper_info = $('.main_paper_name').attr('paper_id') + ',' + $('.main_paper_name').attr('paper_type');
	};
	var url = 'https://two.zhiqunale.cn/Paper/PersonalCenter/modify_store_information';
	var logoUrl = ''
	if(localStorage.logoUrl) {
		logoUrl = localStorage.logoUrl;
	};
	if(localStorage.server_papers_info) {
		server_papers_info = localStorage.server_papers_info;
	};
	var argu = {
		c_id: cookie.getCookie('uid'),
		user_state: 1,
		device_number: 'pc_online',
		c_store_name: escape($('.shopname').val()),
		c_store_detail_address: escape($('.shopaddress').val()),
		c_store_headurl: logoUrl,
		c_main_business: $('#main_type').val(),
		c_store_show_photos: picUrl.join(),
		c_store_show_text: escape($('.shopshow').val()),
		main_paper_mill: main_paper_info,
		cooperative_paper_factory: server_papers_info
	};
	console.log(argu);
	GetList(argu, url, shopInfo);
})

function shopInfo(data) {
	console.log(data);
	if(data.status_code == 10000) {
		window.location.href = 'account_info.html';
	}
}

/*编辑账户信息*/
(function() {
	if(decodeURIComponent(window.location.search).substr(6)) {
		if(localStorage.account_data) {
			account_data = JSON.parse(localStorage.account_data);
			console.log(account_data);
			if(account_data.c_store_headurl) {
				$('#icon').attr('src', 'https://two.zhiqunale.cn/' + account_data.c_store_headurl);
			} else {
				$('#icon').attr('src', '../../img/index_touxiang.png');
			};
			$('.shopname').val(account_data.c_store_name);
			$('.shopaddress').val(account_data.c_store_detail_address);
			$('.shopshow').val(account_data.c_store_show_text);
			$('#main_type').val(account_data.c_main_business);
			/*判断是否是贸易公司身份*/
			if(account_data.c_main_business == 2) {
				$('.trade_co_paper').addClass('co_paper_show');
				/*渲染并判断贸易商主营纸厂和服务纸厂*/
				var relationLength = account_data.relation.length;
				var serverPapers = '';
				if(relationLength > 0) {
					for(var i = 0; i < relationLength; i++) {
						if(account_data.relation[i]['is_main'] == 1) {
							$('.main_paper_name').val(account_data.relation[i]['paper_name']);
						} else {
							serverPapers += account_data.relation[i]['paper_name'];
							$('.server_paper_name').val(serverPapers);
						}
					}
				}
			};

			for(var i in account_data.c_store_show_photos) {
				var html = '<li class="simg"><img src="' + 'https://two.zhiqunale.cn/' + account_data.c_store_show_photos[i] + '" alt=""/></li>';
				$('.upload-list').append(html);
			};
			picUrl = picUrl.concat(account_data.c_store_show_photos);

		}
	} else {
		return false;
	}

})();