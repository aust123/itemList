/*获取订单id和订单类型*/
function getQuery($query) {
	var que = $query.substring(1);
	var arr = que.split('&');
	var allQuery = {};
	for(var i in arr) {
		aa = arr[i].split('=');
		var pro = aa[0];
		allQuery[pro] = aa[1]
	}
	return allQuery;
};
/*渲染订单详情页面*/
(function() {
	query = window.location.search;
	queryData = getQuery(query);
	console.log(queryData);
	var url = null;
	var argu = null;
	if(queryData.state) {
		url = 'https://two.zhiqunale.cn/Paper/PersonalCenter/refund_order_details';
		argu = {
			c_id: cookie.getCookie('uid'),
			device_number: 'pc_online',
			user_state: 1,
			o_id: queryData.oid
		}

	} else {
		url = 'https://two.zhiqunale.cn/paper/remark/getorderdetail';
		argu = {
			user_id: cookie.getCookie('uid'),
			device_number: 'pc_online',
			order_id: queryData.oid,
			order_type: queryData.type
		}
	}
	GetList(argu, url, getOrderDetail)
})();

function getOrderDetail(data) {
	console.log(data);
	var remark_datas = {};
	if(data.status_code == 10000) {
		/*时间戳转换成时间*/
		if(data.data.o_refund_date) {
			/*退款时间*/
			data.data.o_refund_date = getLocalTime(data.data.o_refund_date);
			data.data.state = queryData.state;
		};
		/*采购订单的备注图片*/
		if(data.data.buyer_remark_photos) {
			/*去除订单备注图片的''*/
			if(data.data.buyer_remark_photos.length > 0) {
				if(data.data.buyer_remark_photos[0] == "") {
					data.data.buyer_remark_photos.pop(data.data.buyer_remark_photos[0]);
				};
				remark_datas.buyer_remark_photos = data.data.buyer_remark_photos;
			};
		};
		/*供应订单的备注图片*/
		if(data.data.sale_remark_photos) {
			/*去除订单备注图片的''*/
			if(data.data.sale_remark_photos.length > 0) {
				if(data.data.sale_remark_photos[0] == "") {
					data.data.sale_remark_photos.pop(data.data.sale_remark_photos[0]);
				};
				remark_datas.sale_remark_photos = data.data.sale_remark_photos
			};
		};
		/*订单的备注内容*/
		if(data.data.remark_content) {
			if(data.data.remark_content.length > 0) {
				remark_datas.remark_content = data.data.remark_content;
			}
		};
		/*订单备注信息，存入缓存*/
		if(JSON.stringify(remark_datas) != "{}") {
			localStorage.remark_datas = JSON.stringify(remark_datas);
		};

		data.data.o_send_time = getLocalTime(data.data.o_send_time);
		var html = template('order_detail_tpl', data);
		$('.details_content').html(html);
	}
};

/*确认收货*/
function confirm($this) {
	//$($this).parent().siblings('.hiddens').find('em').html();
	var url = 'https://two.zhiqunale.cn/paper/orders/buyerclicktoconfirmgetgoods';
	var argu = {
		user_id: cookie.getCookie('uid'),
		device_number: 'pc_online',
		order_id: $($this).siblings('span').html(),
		product_name: escape($($this).siblings('b').html()),
		product_weight: $($this).siblings('i').html(),
		user_name: escape(localStorage.c_username),
		sale_id: $($this).siblings('em').html()
	}
	GetList(argu, url, getConfirm);
};

function getConfirm(data) {
	console.log(data);
	if(data.status_code == 10000) {
		//window.location.reload(true);
		var q_value = $('.change_option').siblings('span').html();
		$('.change_option').attr('href', 'settlement.html?oid=' + q_value).html('去结算');
	}
};

/*卖家同意/拒绝结算操作*/
function resolveSettle($this) {
	var url = '';
	if($($this).hasClass('agree_btn')) {
		url = 'https://two.zhiqunale.cn/paper/orders/saleagreesettle';
	} else {
		url = 'https://two.zhiqunale.cn/paper/orders/saledenysettle';
	}
	var argu = {
		user_id: cookie.getCookie('uid'),
		device_number: 'pc_online',
		order_id: $($this).siblings('span').html(),
		product_name: $($this).siblings('b').html(),
		product_weight: $($this).siblings('i').html(),
		store_name: $($this).siblings('strong').html(),
		buyer_id: $($this).siblings('em').html()
	}
	GetList(argu, url, getSettlementData)
};

function getSettlementData(data) {
	console.log(data);
	if(data.status_code == 10000) {
		window.location.reload(true);
	}
};

/*卖家确认发货*/
function confirmShipment($this) {
	$(".popupBox,.background").fadeIn(200);
	sendGoods = {
		user_id: cookie.getCookie('uid'),
		device_number: 'pc_online',
		order_id: $($this).siblings('span').html(),
		product_name: escape($($this).siblings('b').html()),
		product_weight: $($this).siblings('i').html(),
		store_name: escape(localStorage.c_username),
		buyer_id: $($this).siblings('em').html()
	}

};

function getConfirmSend(data) {
	console.log(data);
	if(data.status_code == 10000) {
		window.confirm(data.msg);
		window.location.reload(true);
	} else {
		window.confirm('发货失败')
	}
}

var is_upload = null;
var sendGoods = null;
/*单击空白区域和 确定/删除按钮模态框消失*/
$('.popupBox').click(function(e) {
	var ev = e ? e : window.event;
	if(ev.target == $('#cancel')[0]) {
		is_upload = 2;
		/*不上传司机信息*/
		var url = 'https://two.zhiqunale.cn/paper/orders/saleclicktosendgoods';
		sendGoods.is_upload_driver_info = is_upload;
		GetList(sendGoods, url, getConfirmSend);
		$(".popupBox,.background").fadeOut(200);
	} else if(ev.target == $('#make_sure')[0]) {
		is_upload = 1;
		sendGoods.is_upload_driver_info = is_upload;
		localStorage.driver_obj = JSON.stringify(sendGoods);
		$(".popupBox,.background").fadeOut(200);
	} else if(ev.target == $(".popupBox")[0]) {
		$(".popupBox,.background").fadeOut(200);
	}
})

/*处理退款申请*/
function resolveRefundApply($this) {
	var urls = 'https://two.zhiqunale.cn/Paper/PersonalCenter/refund_operation';
	var is_agree = null;
	is_agree = $($this).hasClass('agree_btn') ? 1 : 2;
	var obj = {
		c_id: cookie.getCookie('uid'),
		device_number: 'pc_online',
		user_state: 1,
		o_id: $($this).siblings('span').html(),
		saler_agree_refund: is_agree,
		refund_operation: 2
	};
	GetList(obj, urls, callBack);
};

function callBack(data) {
	console.log(data);
	if(data.status_code == 10000) {
		alert('操作成功');
		window.location.reload(true);
	}

};

//点击显示联系方式
function getPhone($this) {
	var phoneNum = $($this).attr('data-phone');
	$('.relationBox').show(function() {
		$('.popPhone').html(phoneNum);
	});
};

//付款
function gotopay(This) {
	if($(This).attr('data-o_final_pay') > 0) {
		$('.paybox').show(function() {
			$('.paybox li').click(function() {
				paystyle = $(this).attr('class');
				if(paystyle == 'njpay') {
					window.location.href = '../account/bankcard.html?oid=' + $('.change_option').attr('data-oid');
				} else if(paystyle == 'yue') {
					$('.paybox').hide();
					$('.paypwd').show(function() {
						$('.pwdsure').click(function() {
							if($('.pwdtxt').val() != '') {
								agreepur(paystyle, $('.pwdtxt').val());
							} else {
								alert('密码不能为空');
							}
						});
					});
				} else {
					agreepur(paystyle);
				}
			});
		});
	} else {
		agreepur();
	}
}

function agreepur(channel, paypwd) {
	var agrPurpath = 'https://two.zhiqunale.cn/paper/orders/buyerclicktopay';
	var agrPurparam = {
		user_id: cookie.getCookie('uid'),
		device_number: 'pc_online',
		user_name: cookie.getCookie('username'),
		order_id: $('.change_option').attr('data-oid')
	}
	if(channel) {
		agrPurparam.channel = channel;
	}
	if(paypwd) {
		agrPurparam.pay_password = paypwd;
	}
	GetList(agrPurparam, agrPurpath, agrPur);
}

function agrPur(_data) {
	payment(_data);
}