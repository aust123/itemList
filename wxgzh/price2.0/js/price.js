$(function() {
	/*设置rem值*/
	(function() {
		var html = document.documentElement;
		var width = html.getBoundingClientRect().width;
		html.style.fontSize = width / 15 + 'px';
		//1rem=50;
	})();
	/*选择日期*/
	Date.prototype.format = function(fmt) { //author: meizz   
		var o = {
			"M+": this.getMonth() + 1, //月份   
			"d+": this.getDate(), //日   
			"h+": this.getHours(), //小时   
			"m+": this.getMinutes(), //分   
			"s+": this.getSeconds(), //秒   
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度   
			"S": this.getMilliseconds() //毫秒   
		};
		if(/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for(var k in o)
			if(new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	/*初始化日期，为当天日期*/
	var time2 = new Date().format("yyyy-MM-dd");
	
	/*选择日期*/
	(function() {
		var now = new Date();
		var currYear = now.getFullYear();
		var currMonth = now.getMonth() + 1;
		var currDay = now.getDate();
		var opt1 = {
			preset: 'date', //日期，可选：date\datetime\time\tree_list\image_text\select
			theme: 'android-ics', //皮肤样式，可选：default\android\android-ics light\android-ics\ios\jqm\sense-ui\wp light\wp
			display: 'bottom', //显示方式 ，可选modal\inline\bubble\top\bottom
			mode: 'scroller', //日期选择模式，可选：scroller\clickpick\mixed
			lang: 'zh',
			dateFormat: 'yyyy-mm-dd', // 面板日期格式
			setText: '确认', //确认按钮名称
			cancelText: '取消', //取消按钮名籍我
			dateOrder: 'yyyymmdd', //面板中日期排列格式
			dayText: '日',
			monthText: '月',
			yearText: '年', //面板中年月日文字
			showNow: true,
			nowText: "今天",
			//endYear: currYear-10, //结束年份
			//startYear: currYear,//开始年份
			maxDate: new Date(currYear, currMonth - 1, currDay), //最大时间
			//minDate: new Date(currYear, currMonth - 1, currDay + 1),//最小时间
			onSelect: function(textVale, inst) { //选中时触发事件
				console.log("我被选中了.....");
			},
			onClose: function(textVale, inst) { //插件效果退出时执行  inst:表示点击的状态反馈：set/cancel
				console.log("textVale--" + textVale);
				console.log(this.id); //this表示调用该插件的对象
			}
		};
		
		$('#query_date').mobiscroll().date(opt1);
		/*初始值显示当天日期*/
		$('#query_date').val(time2);
	})();
	
	

	/*底部切换按钮*/
	$('#footer a').each(function(i) {
		$(this).click(function() {　　　　　　
			$(this).addClass('current_btn').siblings('a').removeClass('current_btn');
		})
	})

	/*-----------切换地区----------*/
	$('#area a').each(function(i) {
		$(this).click(function() {
			$(this).addClass('current_area').siblings('a').removeClass('current_area');
			$('.province').eq(i).addClass('current_area_province').siblings().removeClass('current_area_province');
		})
	})
	/*-----------切换省份----------*/
	$('.province a').click(function() {
		$(this).addClass('current_province').siblings('a').removeClass('current_province')
	})

})