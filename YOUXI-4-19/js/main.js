function Ajax($params, $url, $fun) {
	if(!$params.pageNum){
		$params.sign = getUrl($params)
	}	
	console.log($params);
	var baseUrl = 'http://admin.healthbeauty.io';
	$.ajax({
		type: "post",
		url: baseUrl + $url,
		data: $params,
		async: true,
		success: function(data) {
			console.log(data);
			$fun(data)
		},
		error: function(xhr, errorType, error) {
			console.log(xhr);
			console.log(errorType);
			console.log(error);
		}
	});
}

function getUrl(arr) {
	var secret = "key=Pass4hey_chain!";
	var param = [];
	for(var k in arr) {
		param.push(k)
	}
	param.sort();
	var str = '';
	for(var key in param) {
		str += param[key] + '=' + arr[param[key]] + '&'
	}
	str += secret;
	//console.log(str);	
	return md5(str)
}

function Tips(){
	$(".popupBox,.background").fadeIn(200);
	$('#delete_box').addClass('show').addClass('show_in');
}
$('.popupBox').click(function(e) {
	var ev = e ? e : window.event;
	if(ev.target == $(".popupBox")[0] || ev.target == $('#sure')[0]) {
		$(".popupBox,.background").fadeOut(200);
		$('#delete_box').removeClass('show').removeClass('show_in')
	}
})