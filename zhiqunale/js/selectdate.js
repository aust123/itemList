
(function (win, doc) {
	var MONTHCOUNT = 12,
	REG_BIG_MONTH = /^(?:1|3|5|7|8|10|12)$/,
	REG_SMALL_MONTH = /^(?:4|6|9|11)$/;

	function selectDate(options) {
		this.yearEle = doc.getElementById(options.yearID);
		this.monthEle = doc.getElementById(options.monthID);
		this.dayEle = doc.getElementById(options.dayID);
		this.minYear = options.minYear != undefined ? options.minYear : -50;
		this.maxYear = options.maxYear != undefined ? options.maxYear : 50;

		this.init();
	}
	selectDate.prototype = {
		constructor : selectDate,
		init : function () {
			/*var defaultYear = this.yearEle.getAttribute("new Date().getFullYear()") || 0,
			defaultMonth = this.monthEle.getAttribute("new Date().getMonth()") || 0,
			defaultDay = this.dayEle.getAttribute("new Date().getDate()") || 0;*/
			
			//设置默认显示日期
			this.addYear();
			this.yearEle.value = new Date().getFullYear();
			this.addMonth();
			this.monthEle.value = new Date().getMonth()+1;
			this.addDay();
			this.dayEle.value = new Date().getDate();
			
			var _this = this;
			this.yearEle.onchange = function () {
				_this.addMonth().addDay();
			};
			
			this.monthEle.onchange = function () {
				_this.addDay();
			};
		},
		createOption : function (parent, obj) {
			var docu = doc;
			var option = docu.createElement("option"),
			text = docu.createTextNode(obj.text);
			option.value = obj.val;
			option.appendChild(text);
			parent.appendChild(option);
		},
		emptyOpts : function (select) {
			select.innerHTML = "";
		},
		getDayNum : function () {
			var sldYear = this.yearEle.value,
			sldMonth = this.monthEle.value;
			if (sldYear == 0 || sldMonth == 0) {
				return 0;
			}
			if (REG_BIG_MONTH.test(sldMonth)) {
				return 31;
			}
			if (REG_SMALL_MONTH.test(sldMonth)) {
				return 30;
			}
			var sldYear = parseInt(this.yearEle.value);
			return sldYear % 400 === 0 || (sldYear % 100 !== 0 && sldYear % 4 === 0) ? 29 : 28;
		},
		addYear : function () {
			this.emptyOpts(this.yearEle); //empty select year
			var nowYear = (new Date()).getFullYear(),
			frag = doc.createDocumentFragment();
			//this.createOption(frag, {
			//	text : "请选择",
			//	val : 0
			//});
			for (var i = this.minYear; i <= this.maxYear; i++) {
				this.createOption(frag, {
					text : nowYear + i,
					val : nowYear + i
				});
			}
			this.yearEle.appendChild(frag);
			return this;
		},
		addMonth : function () {
			this.emptyOpts(this.monthEle); //empty select month
			var frag = doc.createDocumentFragment();
			//this.createOption(frag, {
			//	text : "请选择",
			//	val : 0
			//});
			if (this.yearEle.value != 0) {
				for (var i = 1; i <= MONTHCOUNT; i++) {
					this.createOption(frag, {
						text : i,
						val : i
					});
				}
			}
			this.monthEle.appendChild(frag);
			return this;
		},
		addDay : function () {
			this.emptyOpts(this.dayEle); //empty select day
			var frag = doc.createDocumentFragment();
			//this.createOption(frag, {
			//	text : "请选择",
			//	val : 0
			//});
			for (var i = 1, len = this.getDayNum(); i <= len; i++) {
				this.createOption(frag, {
					text : i,
					val : i
				});
			}
			this.dayEle.appendChild(frag);
			return this;
		}
	};
	win.selectdate = function (options) {
		new selectDate(options);
	};
})(window, document);