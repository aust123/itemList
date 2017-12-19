var loadDiv = '<div id="load_img" style="color:#333"><span class="loading"></span>正在加载</div>';
$(window).scroll(function() {
	var srollPos = $(window).scrollTop();
	var Dheight = $(document).height();
	var Wheight = $(window).height();
	//console.log('srollPos: ' + srollPos);
	//console.log('Dheight: ' + Dheight);
	//console.log('Wheight: ' + Wheight);
	if(srollPos == Dheight - Wheight) {
		//避免多次滚轮触发事件造成图片的多次追加，加上此判断  
		if($('#body .loading').length == 0) {
			//将图片插入到内部的内容最末位  
			$('#content_list').append(loadDiv);
		}
		//发送ajax请求获取数据  
		//page值增长
		obj.page++;
		GetList(obj, pathname);
	}

})

//下拉刷新内容
$('.content').dropload({
	scrollArea: window,
	domUp: {
		domClass: 'dropload-up',
		domRefresh: '<div class="dropload-refresh">↓下拉刷新</div>',
		domUpdate: '<div class="dropload-update">↑释放更新</div>',
		domLoad: '<div class="dropload-load"><span class="loading"></span>加载中-请耐心等待...</div>'
	},
	loadUpFn: function(me) {
		setTimeout(function() {
			window.location.reload(true);
			me.resetload();
		}, 1000)
	},
	threshold: 50
});