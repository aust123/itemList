$('.chose').change(function() {
	if(this.files && this.files[0]) {
		var ext = this.value.substring(this.value.lastIndexOf(".") + 1).toLowerCase();
		if(ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
			alert("图片的格式必须为png或者jpg或者jpeg格式！");
			return false;
		} else {

			var reader = new FileReader();
			reader.onload = function(evt) {
				baseSrc = evt.target.result;
				//img.setAttribute('src', baseSrc);
				var li = '<li><span id="upcancle">X</span><img src="' + baseSrc + '"/></li>';
				if($('.list li').length < 5) {
					$('.list').prepend(li);
				} else {
					alert('最多上传4张')
				}
			}
			reader.readAsDataURL(this.files[0]);
		}
	}
})

/*右上角取消选择图片按钮*/
$('.list').delegate('span', 'click', function() {
	$(this).parents('li').remove();
})

//日期转时间戳
function DateToUnix(string) {
	var f = string.split(' ', 2);
	var d = (f[0] ? f[0] : '').split('-', 3);
	var t = (f[1] ? f[1] : '').split(':', 3);
	var time = (new Date(
		parseInt(d[0], 10) || null,
		(parseInt(d[1], 10) || 1) - 1,
		parseInt(d[2], 10) || null,
		parseInt(t[0], 10) || null,
		parseInt(t[1], 10) || null,
		parseInt(t[2], 10) || null
	)).getTime() / 1000
	return time;
}