/*添加按钮*/
$('.add_remark_btn').click(function() {
	$('.add_remarks_list').append($('.add_remarks_list li').clone());
	/*复制是，清空备注内容内信息*/
	for(var i in $('.add_remarks_list li')) {
		if($('.add_remarks_list li').eq(i).find('.cost').val() == '') {
			$('.add_remarks_list li').eq(i).find('.remark_write').val('');
		}
	}
});
/*删除按钮*/
$(".add_remarks_list").delegate("span", "click", function() {
	if($('.add_remarks_list li').length > 1) {
		$(this).parent().parent().remove();
	}
});
var picUrl = [];
/*获取订单id*/
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

/*获取备注词条*/
(function() {
	var url = 'https://two.zhiqunale.cn/paper/remark/getlemma';
	var argu = {
		user_id: cookie.getCookie('uid'),
		device_number: 'pc_online'
	};
	GetList(argu, url, getRemarkWord);
})();

function getRemarkWord(data) {
	console.log(data);
	if(data.status_code == 10000) {
		for(var i in data.data) {
			$(".cost").append("<option value=" + data.data[i]["l_id"] + ">" + data.data[i]["lemma_name"] + "</option>");
		};
		setRemarkLemma();
	}
};

/*编辑订单备注信息开始*/
function setRemarkLemma() {
	query = window.location.search;
	queryData = getQuery(query);
	if(queryData.ed) {
		if(localStorage.remark_datas) {
			var remark_datas = JSON.parse(localStorage.remark_datas);			
			var remark_content = remark_datas.remark_content;
			if(remark_datas.buyer_remark_photos) {
				var remark_photos = remark_datas.buyer_remark_photos;
			} else if(remark_datas.sale_remark_photos) {
				var remark_photos = remark_datas.sale_remark_photos;
			};
		};
		/*编辑订单备注时渲染备注的图片*/
		for(var k in remark_photos) {
			var html = '<li><img src="' + 'https://two.zhiqunale.cn/' + remark_photos[k] + '" alt=""/></li>';
			$('.settle_imgs').append(html);
			picUrl.push(remark_photos[k]);
		};

		/*编辑订单备注时渲染备注的内容*/
		for(var k = 0; k < remark_content.length - 1; k++) {
			$('.add_remarks_list').append($('.add_remarks_list li').eq(0).clone());
		};
		for(var m = 0; m < remark_content.length; m++) {
			var costOpts = $('.add_remarks_list li').eq(m).find('.cost').find('option');
			var costVal;
			for(var i = 0; i < costOpts.length; i++) {
				if($(costOpts[i]).html() == remark_content[m]['remark_lemma']) {
					costVal = $(costOpts[i]).val();
					$('.add_remarks_list li').eq(m).find('.cost').val(costVal);
				}
			};
			$('.add_remarks_list li').eq(m).find('.remark_write').val(remark_content[m]['remark_content']);
		}

	}
}

/*编辑订单备注信息结束*/
/*提交订单备注的信息*/
$('.sure_upload').click(function() {
	var li_length = $('.add_remarks_list li');
	var remark_arr = [];
	for(var i = 0; i < li_length.length; i++) {
		var remarks = {};
		if($(li_length[i]).find('.cost').find("option:selected").val() != '') {
			remarks['remark_lemma'] = escape($(li_length[i]).find('.cost').find("option:selected").text());
		};
		if($(li_length[i]).find('.remark_write').val() != '') {
			remarks['remark_content'] = escape($(li_length[i]).find('.remark_write').val());
		};
		remark_arr.push(remarks);
	};

	/*订单备注图片和备注内容不能同时为空*/
	if(picUrl.length == 0 && JSON.stringify(remark_arr[0]) == '{}') {
		alert('请输入订单备注信息');
		return false;
	} else {
		//获取的司机信息转换成JSON字符串	
		var remark_data = JSON.stringify(remark_arr);
	};
	//console.log(remark_data);
	//判断订单备注是编辑还是添加
	var url = null;
	query = window.location.search;
	queryData = getQuery(query);
	if(queryData.ed) {
		//编辑接口
		url = 'https://two.zhiqunale.cn/paper/remark/editorderremark';
	} else {
		//添加接口
		url = 'https://two.zhiqunale.cn/paper/remark/addorderremark';
	};
	var argu = {
		user_id: cookie.getCookie('uid'),
		device_number: 'pc_online',
		order_id: queryData.oid,
		order_type: queryData.type,
		remark_json_encode: remark_data,
		remark_photos: picUrl.join()
	};
	GetList(argu, url, submitRemark);
});

function submitRemark(data) {
	console.log(data);
	if(data.status_code == 10000) {
		window.confirm(data.msg);
		window.history.back();
	} else {
		alert('订单备注操作失败');
	}
}

/*/*上传备注图片开始*/

function uploadImg($this) {
	getImgUrl.ele = $this;
	getImgUrl.showFun = settleImgs;
	getImgUrl.uploadIcon();
}

function settleImgs(data) {
	if(data.code == 10000) {
		if($('.settle_imgs li').length > 8) {
			alert('最多可上传9张照片');
		} else {
			var html = '<li><img src="' + 'https://two.zhiqunale.cn/' + data.data + '" alt=""/></li>';
			$('.settle_imgs').append(html);
			picUrl.push(data.data);
		}

	}
};
/*删除上传的图片*/
$('.settle_imgs').delegate('li', 'click', function() {
	//console.log($(this).find('img').attr('src'));
	var imgPath = $(this).find('img').attr('src').replace('https://two.zhiqunale.cn/', '');
	for(var i in picUrl) {
		if(picUrl[i] == imgPath) {
			picUrl.splice(i, 1);
		}
	}

	$(this).remove();
});

/*上传备注图片结束*/