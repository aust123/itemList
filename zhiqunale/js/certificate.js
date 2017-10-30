/**
 * Created by Administrator on 2017/8/3.
 */
$(function() {
	$('#top_bar').load('../public/topBar.html');
	$('#nav_bar').load('../public/navBar.html');
	$('#search').load('../public/search.html');
	$('#footer').load('../public/footer.html');
	$('.myLeft').load('../public/accLeft.html');

})

//图片上传预览    IE是用了滤镜。
// 营业执照
function uploadImg(file) {
	var baseSrc;
	var img = document.getElementById('yyImg');
	if(file.files && file.files[0]) {
		var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();
		if(ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
			alert("图片的格式必须为png或者jpg或者jpeg格式！");
			return false;
		} else {
			var reader = new FileReader();
			reader.onload = function(evt) {
				baseSrc = evt.target.result;
				img.src = baseSrc;
				$.ajax({
					type: 'post',
					url: 'https://admin.zhiqunale.cn/index.php?g=Api&m=Img&a=receivePcFile',
					data: {
						pic: baseSrc
					},
					success: function(data) {
						console.log(data)
						localStorage.photof = data.data;
					},
					error: function() {
						console.log('请求错误！')
					}
				})
			}
			reader.readAsDataURL(file.files[0]);
		}
	} else //兼容IE
	{
		file.select();
		var imgSrc = document.selection.createRange().text;
		img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = imgSrc;
		if(navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) < 10) {
			//alert("您的浏览器版本过低，请下载IE10及以上版本");
			$('#yyImg').attr('src', '');
		}
	}
}
//LOGO照片
function uploadImg1(file) {
	var baseSrc
	var img = document.getElementById('lgImg');
	if(file.files && file.files[0]) {
		var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();
		if(ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
			alert("图片的格式必须为png或者jpg或者jpeg格式！");
			return false;
		} else {
			var reader = new FileReader();
			reader.onload = function(evt) {
				baseSrc = evt.target.result;
				img.src = baseSrc;
				$.ajax({
					type: 'post',
					url: 'https://admin.zhiqunale.cn/index.php?g=Api&m=Img&a=receivePcFile',
					data: {
						pic: baseSrc
					},
					success: function(data) {
						console.log(data)
						localStorage.photob = data.data;
					},
					error: function() {
						console.log('请求错误！')
					}
				})
			}
			reader.readAsDataURL(file.files[0]);
		}
	} else //兼容IE
	{
		file.select();
		var imgSrc = document.selection.createRange().text;
		img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = imgSrc;
		if((navigator.appName == "Microsoft Internet Explorer") && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) < 10) {
			//alert("您的浏览器版本过低，请下载IE10及以上版本");
			$('#lgImg').attr('src', '');
		}
	}
}

/*------------个人实名验证身份证和手机号码----------*/
//身份证号码验证
$('input[name="idCard"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入身份证号码');

	} else if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test($(this).val()))) {
		$(this).siblings('em').show().html('请输入正确的身份证号码');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
//手机号验证
$('input[name="tel"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入手机号码');
		ok1 = false;
	} else if(!(/^1[34578]\d{9}$/.test($(this).val()))) {
		$(this).siblings('em').show().html('请输入正确的手机号码');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
//真实姓名验证
$('input[name="name"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入姓名');

	} else if(!(/^[\u4e00-\u9fa5]+$/.test($(this).val()))) {
		$(this).siblings('em').show().html('请输入中文姓名');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
//个人地址验证
$('input[name="addr"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入个人地址');
	} else if(!(/^[\u4E00-\u9FA5A-Za-z0-9]+$/.test($(this).val()))) {
		$(this).siblings('em').show().html('请输入正确的地址信息');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
/*------------企业验证身份证和手机号码----------*/
//企业名称
$('input[name="co_name"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入企业名称');
	} else if(!(/^[\u4e00-\u9fa5]+$/.test($(this).val()))) {
		$(this).siblings('em').show().html('请输入中文的企业名称');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
//企业法人姓名
$('input[name="faname"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入企业法人姓名');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
//营业执照编码
$('input[name="bianma"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入营业执照编码');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
//营业执照有效期
$('input[name="youxiaoqi"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入营业执照有效期');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
//业务联系人
$('input[name="busines_contact"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入业务联系人');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});
//业务联系人手机号
$('input[name="busines_contact_tel"]').focus(function() {
	$(this).siblings('em').hide().removeAttr('fill');
}).keyup(function() {
	if($(this).val() == '') {
		$(this).siblings('em').show().html('请输入联系方式');
	} else if(!(/^1[34578]\d{9}$/.test($(this).val()))) {
		$(this).siblings('em').show().html('请输入正确的手机号码');
	} else {
		$(this).siblings('em').hide().attr('fill', 'right');
	}
});