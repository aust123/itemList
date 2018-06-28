execOndemand(function() {
	webpackJsonp([25, 7, 8, 10, 11, 12, 15], {
		"+DVn": function(t, e) {
			t.exports = '<ul> <% for(var letter in letters){ %> <li data-value="<%=letters[letter]%>" class="js_letter"> <span class="abc-tags" data-value="<%=letters[letter]%>"></span> </li> <% } %> </ul> '
		},
		"+JQy": function(t, e, i) {
			"use strict";
			var a = i("TToO"),
				n = i("v8oQ"),
				o = i.n(n),				
				c = i("kbi+"),
				l = i.n(c),
				d = i("6M8Y"),			
				u = i("F4KM"),				
				g = i("gFDN"),
				v = (i.n(g)),
				b = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return a.b(e, t), e.prototype.propertys = function() {
						this.unbindTouchEvent = !0, t.prototype.propertys.call(this), this.template = y.a, this.datamodel = {
							hasHeader: !0,
							room: 1,
							adult: 1,
							children: [-1, -1, -1]
						}, this.needReposition = !1, this.id = o()("biz-view-peoplenumselect-")
					}, e.prototype.setRootStyle = function() {
						this.$el.addClass("animated slideInUp"), this.$el.css({
							width: "100%",
							height: "100%",
							top: 0,
							left: 0,
							padding: 0,
							borderRadius: 0,
							background: "#f5f5f5",
							zIndex: 5e3
						})
					}, e.prototype.addEvent = function() {
						var e = this;
						t.prototype.addEvent.call(this), this.addEvents({
							"click .js_back_btn": function() {
								history.back()
							},
							"click .js_select_age_btn": function(t) {
								var i = $(t.currentTarget),
									a = i.data("idx"),
									n = e.datamodel.children[a];
								new m.a({
									datamodel: {
										selectedAge: n
									},
									onChanged: function(t) {
										e.datamodel.children[a] = t.age, i.find(".js_age_txt").html(t.txt)
									}
								}).show()
							},
							"click .js_confirm_btn": function() {
								history.back(), e.onChanged.call(e, {
									room: e.datamodel.room,
									adult: e.datamodel.adult,
									children: e.datamodel.children.slice(0)
								})
							}
						}), this.on("onShow", function() {
							e.setRootStyle(), $(window).off("." + e.id), $(window).on("resize." + e.id, $.proxy(function() {
								this.setRootStyle()
							}, e));
							var t = new h.a({
									wrapper: e.$el.find(".js_room_num_ui"),
									datamodel: {
										min: 1,
										max: 10,
										curNum: e.datamodel.room,
										unit: "",
										needText: !0
									},
									changed: function(t) {
										e.datamodel.room = t
									}
								}),
								i = new h.a({
									wrapper: e.$el.find(".js_adult_num_ui"),
									datamodel: {
										min: 1,
										max: 8,
										curNum: e.datamodel.adult,
										unit: "",
										needText: !0
									},
									changed: function(t) {
										e.datamodel.adult = t
									}
								});
							i.show(), t.show(), window.adultNumui = i, window.roomNumui = t
						}), this.on("onHide", function() {
							$(window).off("." + e.id), e.destroy()
						}), this.on("onDestroy", function() {})
					}, e.prototype.create = function() {
						this.datamodel.children = this.datamodel.children.slice(0, 3);
						var e = s()(this.datamodel.children, function(t) {
							return l()(v.a, function(e) {
								return e.age === t
							}) || v.a[0]
						});
						this.datamodel.childrenVm = e, t.prototype.create.call(this)
					}, e.prototype.hide = function() {
						var e = this;
						this.$el.removeClass("animated slideInUp"), this.$el.addClass("animated slideOutDown");
						var i = Object(p.a)();
						this.$el.one(i, function() {
							e.$el.removeClass("animated slideOutDown"), t.prototype.hide.call(e)
						})
					}, e.prototype.show = function() {
						var e = this;
						Object(u.stateobserve)(function() {
							e.hide()
						}), t.prototype.show.call(this)
					}, e.prototype.onChanged = function(t) {}, e
				}(d.a);
			e.a = b
		},
		
		"+JtJ": function(t, e) {
			function i(t) {
				if("function" != typeof t) throw new TypeError(a);
				return function() {
					var e = arguments;
					switch(e.length) {
						case 0:
							return !t.call(this);
						case 1:
							return !t.call(this, e[0]);
						case 2:
							return !t.call(this, e[0], e[1]);
						case 3:
							return !t.call(this, e[0], e[1], e[2])
					}
					return !t.apply(this, e)
				}
			}
			var a = "Expected a function";
			t.exports = i
		},
		
		
		"+Sid": function(t, e) {
			t.exports = '<div class="items"> <div class="keyword-flex key-tit js_toggle"> <i class="keyword-icon <%=logo%>"></i> <span class="star"><%=text%></span> <% if(subFilterItemList.length > 8){%> <i class="font-g-arrow-down g-color3 js_arrow_icon"></i> <%}%> </div> <ul class="word"> <%var j = 0;\r\n    var more = subFilterItemList.length % 4 ;\r\n    for(var i = 0, len = subFilterItemList.length; i < len; i++) {\r\n       var item = subFilterItemList[i];\r\n       if (i >= 8) {\r\n    %> <li class="item" data-more style="display:none;" data-index="<%=i%>" data-ubt-key="c_hotel_searchlist_keyword_<%=id%>_<%=i%>"><%=item.text%></li> <% if((more != 0)&&(i==len-1)){\r\n        j=i+1%> <% for(var t = 0; t < 4 - more ; t++) { %> <li class="item" data-more style="display:none;" data-index="<%=j%>"></li> <% } %> <% } %> <% } else { %> <li class="item" data-index="<%=i%>" data-ubt-key="c_hotel_searchlist_keyword_<%=id%>_<%=i%>"><%=item.text%></li> <% if((more != 0)&&(i==len-1)){ %> <% for(var k = 0; k < 4 - more ; k++) { %> <li class="item"></li> <% } %> <% } %> <% } %> <% } %> </ul> </div> '
		},
		"+fW5": function(t, e, i) {
			"use strict";
			var a = i("+b/N"),
				n = new a.a({
					key: "U_HOTEL_USERFLOW",
					lifeTime: "12H"
				}),
				o = function() {
					function t() {
						this.key = "userflow"
					}
					return t.prototype.getPageCount = function() {
						return this.getUserFlow().length
					}, t.prototype.putPage = function(t) {
						var e = this.getUserFlow();
						e[t.index] = t, n.setAttr(this.key, e)
					}, t.prototype.getUserFlow = function() {
						return n.getAttr(this.key) || []
					}, t.prototype.clear = function() {
						n.removeAttr(this.key)
					}, t.prototype.reset = function() {
						n.setAttr(this.key, [])
					}, t
				}(),
				r = new o;
			e.a = r
		},
		
		"/+8J": function(t, e) {
			t.exports = "<ul/> "
		},
		
		"/4es": function(t, e) {
			t.exports = '<%\r\nvar exTopBarWrapperClass = \'\';\r\nif(miniUI && miniUI.topBar && miniUI.topBar.visible && miniUI.topBar.html){\r\nexTopBarWrapperClass = \'hotel-select-date-tips\';\r\n};\r\n%> <style type="text/css"> .cui_inoutday_calendar {\r\n    position: fixed;\r\n    top: 0;\r\n    height: 100%;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    width: 100%;\r\n    z-index: 99999;\r\n    -webkit-overflow-scrolling: touch;\r\n  }\r\n  .cui_cal_header{\r\n    height: 2.2rem;\r\n  }\r\n  .cui_cal_header .cm-header{\r\n    z-index: 30000;\r\n  }\r\n  .cui_cal_header h1{\r\n    padding-right: 3rem;\r\n  }\r\n  /*Star \ufffd\u8cff\ufffd\ufffd\ufffd\ufffd*/\r\n  .calendar-weehours {padding: 0.5rem 1rem;color:#999;font-size: 0.6rem;}\r\n  .calendar-weehours .wh-tab { background-color: #fff; color: #4289ff; border-radius: 0.15rem; border: 1px solid #4289ff; padding:1px; margin-left:0.5rem;display: inline-block; vertical-align: middle; }\r\n  .calendar-weehours .wh-tab em { padding: 0 0.6rem; line-height: 1.35rem; float: left; border-radius: 0.15rem; }\r\n  .calendar-weehours .wh-tab em.current { background-color: #4289ff; color: #fff; }\r\n\r\n\r\n  .calendar-weekday { border-style: solid; border-color: #ddd; border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; }\r\n  .calendar-daypast {color: #cfcfcf !important;}\r\n  .calendar-holiday{color: #06a2d0;}\r\n  .calendar-weekday {background: #f5f5f5;border-width: 0 0 1px;overflow: hidden;}\r\n  .calendar-weekday li {width: 14.28%;float: left;text-align: center;padding:0.15rem 0;}\r\n  .calendar-weekday li:nth-of-type(7n),.calendar-weekday li:nth-of-type(7n+1),.calendar-grid li:nth-of-type(7n),.calendar-grid li:nth-of-type(7n+1){color: #ff902d;}\r\n  .calendar-body {background-color: #fff;overflow: hidden;}\r\n  .calendar-body .calendar-day-checkin { position: absolute; width: 200%; left: -50%; top: -2rem; background: rgba(0, 0, 0, .7); border-radius: 5px; padding: 0.35rem 0; }\r\n  .calendar-body .calendar-month { height: 2rem;line-height: 2.2rem; text-align: center; font-weight: 300; font-size: 0.8rem;  }\r\n  .calendar-body .calendar-grid {overflow: hidden;}\r\n  .calendar-body .calendar-grid li { width: 14.28%; height: 2rem; padding: 0.2rem 0; font-weight: 400; font-size: 0.7rem; float: left; text-align: center;position: relative; }\r\n  .calendar-body .calendar-grid .calendar-note {font-size: 0.55rem}\r\n  .calendar-body .calendar-grid .calendar-holiday-h,.calendar-body .calendar-grid .calendar-holiday-w {border-width:1px;border-style:solid;height: 0.65rem; width: 0.65rem; line-height:0.7rem;background: #fff; font-size: 0.45rem; position: absolute; right: 0; top: 0; text-align: center;}\r\n  /*.calendar-body .calendar-grid .calendar-holiday-h{color: #52bce8; }\r\n  .calendar-body .calendar-grid .calendar-holiday-w{color: #ff902d; }*/\r\n  .calendar-body .calendar-grid li.calendar-current {background: #06a2d0;color: #fff}\r\n  .calendar-body .calendar-grid li.calendar-range {background: #EBF4FA;}\r\n  .calendar-body .calendar-grid .calendar-current .calendar-holiday-w{color:#06a2d0;}\r\n  .calendar-body .calendar-grid .calendar-current .calendar-holiday-h{color:#06a2d0;}\r\n  .calendar-toast { width: 8.25rem; padding: 0.5rem; border-radius: 0.25rem; background: rgba(0, 0, 0, .7); color: #fff; text-align: center; position: fixed; left: 50%; -webkit-transform: translate3d(-50%,0,0); transform: translate3d(-50%,0,0); bottom: 4.25rem; }\r\n  .hotel-date-toast {\r\n    bottom: 2.25rem;\r\n  } </style> <div class="cm-calendar" style="padding-top: 0; padding-bottom: 3.5rem; background: #fff;"> <div class="cui_cldweek <%=exTopBarWrapperClass%>"> <%if(exTopBarWrapperClass){%> <div class="js_top_bar"><%=miniUI.topBar.html%></div> <%}%> <ul class="calendar-weekday"> <%\r\n      var i = 0, day1 = 0;\r\n      for(day1 = 0; day1 < 7; day1++) {\r\n      %> <li><%=weekDayArr[day1] %></li> <%} %> </ul> </div> <section class="calendar-body"> <%\r\n    var changedYear;\r\n    %> <%for(var j = 0; j < displayMonthNum; j++) {\r\n    var changedMonth = month + j;\r\n    var yyy          =  parseInt(( month + j ) / 12);\r\n    if(changedMonth > 11) {\r\n    changedMonth = changedMonth - 12 * yyy;\r\n    };\r\n    changedYear   = year + yyy;\r\n    var d         = new Date(changedYear, changedMonth);\r\n    var days      = $.getDaysOfMonth(d);\r\n    var str_month = MonthClapFn(changedYear, changedMonth);\r\n    %> <%if(str_month.length > 0 ) { %> <h2 class="calendar-month"><%=str_month %></h2> <% } %> <ul class="calendar-grid"> <%\r\n        var sday = (new Date(changedYear, changedMonth, 1)).getDay();\r\n        while(sday>0){\r\n        %> <li></li> <%\r\n        sday--;\r\n        }\r\n\r\n      for(i = 0; i < days; i++) {\r\n      var day             = i + 1;\r\n      var dateObj         = new Date(changedYear, changedMonth, day);\r\n      var str_date        = changedYear.toString() + \'-\' + changedMonth.toString() + \'-\' + day.toString();\r\n\r\n      var itemInfo        = dayItemFn.call(scope,dateObj);\r\n      var innerHtml       = itemInfo.innerHtml;\r\n      var parentDOMClass  = itemInfo.parentDOMClass;\r\n\r\n      %> <li class="js_calendar_item cui_calendar_item <%=parentDOMClass%>" data-date="<%=str_date%>"> <%=innerHtml%> </li> <% } %> </ul> <%} %> </section> <%if(miniUI && miniUI.layer && miniUI.layer.visible && miniUI.layer.text){%> <div class="hotel-date-toast cui_layer cui-toast" style="position: fixed;"><%=miniUI.layer.text%></div> <%}%> <%if(showNav){%> <div class="cm-calendar-ft"> <ul class="cm-calendar-quick-nav"> <%if(footNavDate){\r\n      var count = 0;\r\n      for(var i in footNavDate){\r\n      if(count === 0){%> <li class="active w_date_nav_click" data-date="<%=footNavDate[i]%>"><%=i%></li> <%}else{%> <li class="w_date_nav_click" data-date="<%=footNavDate[i]%>"><%=i%></li> <%}\r\n      count++;\r\n      }%> <%}%> </ul> </div> <%}%> </div> '
		},
		"/GnY": function(t, e, i) {
			var a = i("f931"),
				n = a(Object.keys, Object);
			t.exports = n
		},
		"/Rdg": function(t, e) {
			var i = /<%=([\s\S]+?)%>/g;
			t.exports = i
		},
		
		"0DSl": function(t, e, i) {
			function a(t) {
				return n(function(e, i) {
					var a = -1,
						n = i.length,
						r = n > 1 ? i[n - 1] : void 0,
						s = n > 2 ? i[2] : void 0;
					for(r = t.length > 3 && "function" == typeof r ? (n--, r) : void 0, s && o(i[0], i[1], s) && (r = n < 3 ? void 0 : r, n = 1), e = Object(e); ++a < n;) {
						var c = i[a];
						c && t(e, c, a, r)
					}
					return e
				})
			}
			var n = i("YkxI")/*,
				o = i("zBOP")*/;
			t.exports = a
		},
		"0SAi": function(t, e, i) {
			"use strict";
			window.__bfi || (window.__bfi = []);
			var a = null,
				n = function() {
					function t() {
						return this.performance = {}, this.isapp = "0", this.defaults = {
							Domready: {
								name: "JS.Lizard.Domready",
								tags: {}
							},
							Onload: {
								name: "JS.Lizard.Onload",
								tags: {}
							},
							AjaxReady: {
								name: "JS.Lizard.AjaxReady",
								tags: {
									url: "",
									info: "",
									status: ""
								}
							},
							AjaxMessageSize: {
								name: "JS.Lizard.AjaxMessageSize",
								tags: {
									url: ""
								}
							},
							TemplateRender: {
								name: "JS.Lizard.TemplateRender",
								tags: {
									url: ""
								}
							},
							GeoRequest: {
								name: "JS.Lizard.GeoRequest",
								tags: {
									url: "",
									errno: "0"
								}
							},
							FunUsed: {
								name: "JS.Lizard.FunUsed",
								tags: {
									url: "",
									fun: ""
								}
							},
							MapAndGeoLocation: {
								name: "JS.Lizard.MapAndGeoLocation",
								tags: {
									type: "",
									region: "",
									service: ""
								}
							}
						}, this.uuid = 0, a || (a = this), a
					}
					return t.send = function(t, e, i, a) {
						var n = ["_trackMatrix", t, e, i, a];
						("JS.Lizard.GeoRequest" !== t || "string" == typeof e.url && e.url.match(/^(Native|Web) function (number|detail|error)$/)) && window.__bfi.push(n)
					}, t.getTime = function() {
						return(new Date).getTime()
					}, t.prototype.initOptions = function(t) {
						t.version = "HOTEL.JAVA.MULTIPAGE", t.isapp = this.isapp, t.network = "unknown"
					}, t.prototype.log = function(e, i) {
						e.url && "string" == typeof e.url && (e.url.indexOf("_fxpcqlniredt") > -1 && (e.url = e.url.substring(0, e.url.indexOf("_fxpcqlniredt") - 1)), e.url = e.url.replace(new RegExp(("" + +new Date).slice(0, 8) + "\\d{5}"), "__TIME__"));
						var a = this.defaults[e.name],
							n = {};
						this.initOptions(n), Object.keys(a.tags || {}).forEach(function(t) {
							({}).hasOwnProperty.call(a.tags, t) && (n[t] = "" + (e[t] || a.tags[t]))
						}), "AjaxMessageSize" !== e.name && (n.distribution = t.distribution(i)), t.send(a.name, n, i, t.getTime())
					}, t.prototype.group = function(e, i) {
						i.startTime = t.getTime(), this.performance[e] = i
					}, t.prototype.groupTag = function(t, e, i) {
						var a = this.performance[t];
						return a || (this.performance[t] = a = {}), 3 === arguments.length && (a[e] = i), a[e]
					}, t.prototype.groupEnd = function(e) {
						var i = this.performance[e] || {};
						this.log(i, t.getTime() - i.startTime)
					}, t.prototype.getUuid = function() {
						return this.uuid += 1, "UbtPerformance_" + this.uuid
					}, t.distribution = function(t) {
						var e = "";
						return t >= 0 && t <= 500 ? e = "[0,500]" : t >= 501 && t <= 1e3 ? e = "[501,1000]" : t >= 1001 && t <= 2e3 ? e = "[1001,2000]" : t >= 2001 && t <= 3e3 ? e = "[2001,3000]" : t >= 3001 && t <= 4e3 ? e = "[3001,4000]" : t >= 4001 && (e = "[4001,--]"), e + "(ms)"
					}, t
				}(),
				o = new n;
			e.a = o
		},
		
		"0iO6": function(t, e, i) {
			"use strict";
			var a = i("TToO"),
				n = i("MHoa"),
				o = i("JV2L"),
				r = i.n(o),
				s = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return a.b(e, t), e.prototype.propertys = function() {
						t.prototype.propertys.call(this), this.template = r.a, this.needRootWrapper = !1, this.area = "domestic"
					}, e.prototype.resetPropery = function() {
						t.prototype.resetPropery.call(this), this.itemSelector = ".g-tab-item"
					}, e.prototype.initElement = function() {
						t.prototype.initElement.call(this), this.setTabToSelectedStatus(this.area)
					}, e.prototype.changeAllStatusToUnselect = function() {
						this.items.removeClass("g-tab-current")
					}, e.prototype.changeStatusToSelect = function(t) {
						$(t).addClass("g-tab-current")
					}, e.prototype.getSelectTabKey = function(t) {
						return t.dataset.type
					}, e.prototype.select = function(t) {
						this.trigger("onSelectedTab", t)
					}, e
				}(n.a);
			e.a = s
		},
		"0tEz": function(t, e, i) {
			"use strict";
			var a = i("TToO"),
				n = i("Lr25"),
				o = i.n(n),				
				c = i("gGqR"),
				l = i.n(c),
				d = i("v8oQ"),
				h = i.n(d),
				p = i("yCNF"),
				u = i.n(p),
				f = i("p3b7"),
				y = i.n(f),
				m = i("UoIM"),
				g = function() {
					var t = 3e3;
					return function(e) {
						return t += 1, e + t
					}
				}(),
				v = function() {
					var t = {};
					return {
						addItem: function(e, i) {
							t[e] = i
						},
						removeItem: function(e) {
							t[e] && delete t[e]
						},
						getItem: function(e) {
							return e ? t[e] : t
						}
					}
				}(),
				b = function(t) {
					function e() {
						for(var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
						var a = t.apply(this, e) || this;
						return a.initialize.apply(a, e), a
					}
					return a.b(e, t), e.prototype.propertys = function() {
						this.wrapper = $("body"), this.id = h()("ui-view-"), this.template = "", this.datamodel = {}, this.events = {}, this.eventArr = {}, this.status = "init", this.needAnimat = !1, this.animateShowAction = null, this.animateHideAction = null, this.needRootWrapper = !0
					}, e.prototype.addEvents = function(t) {
						u()(t) && o()(this.events, t)
					}, e.prototype._preventDefault = function(t) {
						t.preventDefault()
					}, e.prototype.on = function(t, e, i) {
						this.eventArr[t] || (this.eventArr[t] = []), i ? this.eventArr[t].splice(0, 0, e) : this.eventArr[t].push(e)
					}, e.prototype.off = function(t, e) {
						this.eventArr[t] && (this.eventArr[t] = e ? s()(this.eventArr[t], e) : [])
					}, e.prototype.trigger = function(t) {
						for(var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
						var a = this.eventArr,
							n = [];
						if(a[t])
							for(var o = a[t].length, r = 0; r < o; r += 1) n[n.length] = (s = a[t][r]).call.apply(s, [this].concat(e));
						return n;
						var s
					}, e.prototype.createRoot = function(t) {
						this.needRootWrapper ? (this.$el = $('<div class="view" style="display: none; " id="' + this.id + '"></div>'), this.$el.html(t)) : this.$el = $(t).hide().attr("id", this.id)
					}, e.prototype._isAddEvent = function(t) {
						return "onCreate" === t || "onPreShow" === t || "onShow" === t || "onRefresh" === t || "onHide" === t
					}, e.prototype.setOption = function(t) {
						var e = this;
						Object.keys(t || {}).forEach(function(i) {
							"datamodel" === i || "events" === i ? o()(e[i], t[i]) : e._isAddEvent(i) ? e.on(i, t[i]) : e[i] = t[i]
						})
					}, e.prototype.initialize = function(t) {
						this.propertys(), this.setOption(t), this.resetPropery(), this.addEvent(), this.create(), this.addSysEvents(), this.initElement(), v.addItem(this.id, this)
					}, e.prototype.getUIContainer = function() {
						return v.getItem()
					}, e.prototype.addSysEvents = function() {
						"function" == typeof this.availableFn && (this.removeSysEvents(), this.$el.on("click.system" + this.id, $.proxy(function(t) {
							this.availableFn() || (t.preventDefault(), t.stopImmediatePropagation && t.stopImmediatePropagation())
						}, this)))
					}, e.prototype.removeSysEvents = function() {
						this.$el.off(".system" + this.id)
					}, e.prototype.resetPropery = function() {}, e.prototype.addEvent = function() {}, e.prototype.create = function() {
						this.trigger("onPreCreate"), this.destroyNode && this.createRoot(this.render()), this.status = "create", this.trigger("onCreate")
					}, e.prototype.initElement = function() {}, e.prototype.render = function(t) {
						var e = this.getViewModel() || {},
							i = this.template;
						return this.template ? (e && (i = l()(this.template) ? this.template(e) : y()(this.template)(e)), "function" == typeof t && t.call(this), i) : ""
					}, e.prototype.refresh = function(t) {
						if(this.resetPropery(), t) this.create();
						else {
							var e = this;
							e.$el.html(e.render())
						}
						this.initElement(), "show" === this.status && this.show(), this.trigger("onRefresh")
					}, e.prototype.show = function() {
						this.wrapper[0] && this.$el[0] && ($.contains(this.wrapper[0], this.$el[0]) || this.wrapper[0] === this.$el[0] || (this.needEmptyWrapper && this.wrapper.html(""), this.replaceRoot ? (this.wrapper.replaceWith(this.$el), this.wrapper = this.$el) : this.wrapper.append(this.$el)), this.trigger("onPreShow"), this.needAnimat && (this.animateInClass ? this.hasAnimationProperty(this.animateInClass) : "function" == typeof this.animateShowAction) && "show" !== this.status ? this.animateShowAction.call(this, this.$el) : this.$el.show(), this.status = "show", this.addSysEvents(), this.bindEvents(), this.trigger("onShow"))
					}, e.prototype.hide = function() {
						var t = this;
						this.$el && "show" === this.status && (this.trigger("onPreHide"), this.needAnimat && (this.animateOutClass ? this.hasAnimationProperty(this.animateOutClass) : "function" == typeof this.animateShowAction) && "hide" !== this.status ? this.animateHideAction.call(this, this.$el) : this.$el.hide(), this.status = "hide", this.unBindEvents(), this.removeSysEvents(), setTimeout(function() {
							t.trigger("onHide")
						}, 0))
					}, e.prototype.hasAnimationProperty = function(t) {
						var e = [$.fx.cssPrefix + "animation-name"],
							i = $("<div></div>");
						return i.attr("class", t), $("body").append(i), "none" !== i.css(e[0]) ? (i.remove(), !0) : (i.remove(), !1)
					}, e.prototype.destroy = function() {
						this.status = "destroy", this.unBindEvents(), this.removeSysEvents(), v.removeItem(this.id), this.$el.remove(), this.trigger("onDestroy")
					}, e.prototype.getViewModel = function() {
						return this.datamodel
					}, e.prototype.setzIndexTop = function(t, e) {
						var i = e;
						t || (t = this.$el), (!e || e > 10) && (i = 0), i *= 1e3, t.css("z-index", g(i))
					}, e
				}(m.a);
			e.a = b, b.prototype.destroyNode = !0
		},	
		
		"30VQ": function(t, e) {},		
		"6HpJ": function(t, e, i) {
			"use strict";
			function a(t) {
				return t < 10 ? "0" + t : t.toString()
			}
			var n = i("TToO"),
				o = i("LSBV"),
				r = i.n(o),
				s = i("BUAs"),
				c = i.n(s),
				l = i("Zqam"),
				d = i.n(l),
				h = i("jnGA"),
				p = i("ArDj"),
				u = i("waeE"),
				f = i("6rBr"),
				y = i("b+im"),
				m = function(t) {
					function e() {
						for(var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
						var a = t.apply(this, e) || this;
						return a.validStartDate_old = a.validStartDate, a.doEvents = !0, a.mask = new h.a, a.mask.events.click = function() {
							a._hide()
						}, a
					}
					return n.b(e, t), e.prototype.isValidJetLag = function(t) {
						var e = !1;
						if(null === t || void 0 === t || Number.isNaN(parseInt(t, 10))) return !1;
						t = parseInt(t / 3600, 10);
						return t >= -20 && t <= 6 && (e = !0), e
					}, e.prototype.getDateInfo = function(t) {
						return u.getDateInfo(t)
					}, e.prototype.propertys = function() {
						var e = this;
						t.prototype.propertys.call(this), this.ishide = !0, this.template = d.a, this.jetLag = 0, this.curTimeBaseTimeZone = new Date(Object(f.d)()), this.validStartDate = new Date(Object(f.d)().getTime() + (this.jetLag - 0)), this.validStartDate.setHours(0, 0, 0, 0), this.validEndDate = null, this.recentDaysHaveText = !0;
						var i = new Date(Object(f.d)().getTime()),
							n = i.getHours();
						this.dateObj = i, this.datamodel = c()(this.datamodel, {
							scope: this,
							startTime: null,
							endTime: null,
							weekDayArr: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
							displayMonthNum: 12,
							tips: "",
							selfTips: "",
							footDate: {},
							showNav: !1,
							curTime: this.dateObj.getTime(),
							defineLi: !1,
							showRestIcon: !0,
							isMorning: !1,
							showMorningSwitch: n >= 0 && n < 6 && !this.datamodel.isOversea,
							miniUI: {
								topBar: {
									html: "",
									visible: !1
								},
								layer: {
									text: "",
									visible: !1
								}
							},
							curtext: "\u8bf7\u9009\u62e9\u5165\u4f4f\u65e5\u671f",
							selectDate: null,
							isOversea: !1,
							MonthClapFn: function(t, e) {
								return e += 1, t + "\u5e74" + e + "\u6708"
							},
							onSelInDay: function() {},
							onSelOutDay: function() {},
							dayItemAction: function() {},
							dayItemFn: function(t, e, i, n) {
								"number" != typeof t && (n = t), n.setHours(0, 0, 0, 0), t = n.getFullYear(), e = n.getMonth(), i = n.getDate();
								var o = Object(f.d)(),
									r = new f.a(new Date(o.getTime() + 1e3 * this.jetLag)),
									s = Object(f.c)(r.format("Y-m-d"), new f.a(n).format("Y-m-d")),
									c = t.toString() + a(e + 1) + a(i),
									l = a(e + 1) + a(i),
									d = u.getDateInfo(n),
									h = {
										day: i,
										solarHoliday: d.holiday || "",
										lunarHoliday: d.chineseday || "",
										day1: ""
									};
								this.solarHoliday[l] && (h.solarHoliday = this.solarHoliday[l]), this.lunarHoliday[c] && (h.lunarHoliday = this.lunarHoliday[c]);
								var p = [],
									y = [],
									m = {
										innerHtml: "",
										parentDOMClass: "",
										dateInfo: h
									};
								switch(s) {
									case 0:
										h.day1 = this.recentDaysHaveText ? "\u4eca\u5929" : "";
										break;
									default:
										n.day1 = ""
								}
								return this.specialDates, p[0] = '<p class="calendar-day">' + h.day + "</p>", (h.solarHoliday || h.lunarHoliday) && (p[1] = '<p class="calendar-note">' + (h.lunarHoliday || h.solarHoliday) + "</p>", y.push("cui_cld_day_havetxt")), h.day1 && (p[1] = '<p class="calendar-note">' + h.day1 + "</p>", y.push("cui_cld_day_havetxt")), (h.lunarHoliday || h.solarHoliday) && y.push("calendar-holiday"), this.dayItemAction ? m.innerHtml = this.dayItemAction.call(this, h, t, e, i, n) : m.innerHtml = p.join(""), this.validStartDate && n.getTime() < this.validStartDate.getTime() && (y.push("calender-invalid"), y.push("calendar-daypast"), y.push("js_invalid")), this.validEndDate && n.getTime() > this.validEndDate.getTime() && (y.push("calender-invalid"), y.push("calendar-daypast"), y.push("js_invalid")), this.datamodel.selectOutDay_old && n.getTime() === this.datamodel.selectOutDay_old.getTime() && y.push("calendar-range"), this.datamodel.selectDate && n.getTime() === this.datamodel.selectDate.getTime() && (y.push("calendar-current"), y.push("cui_cld_daycrt"), this.selectDateItemFn && (h.day1 = "\u5165\u4f4f", m.innerHtml = this.selectDateItemFn.call(this, h, n)), this.selectInDateItemFn && (h.day1 = "\u5165\u4f4f", m.innerHtml = this.selectInDateItemFn.call(this, h, n, this.jetLag))), this.datamodel.selectInDay && n.getTime() === this.datamodel.selectInDay.getTime() && (y.push("calendar-current"), y.push("cui_cld_daycrt"), this.selectInDateItemFn && (h.day1 = "\u5165\u4f4f", m.innerHtml = this.selectInDateItemFn.call(this, h, n, this.jetLag))), this.datamodel.selectOutDay && n.getTime() === this.datamodel.selectOutDay.getTime() && (y = [], y.push("calendar-current"), y.push("cui_cld_daycrt"), this.selectOutDateItemFn && (this.datamodel.selectInDay.getTime() === this.datamodel.selectOutDay.getTime() ? h.day1 = "\u5165\u79bb" : h.day1 = "\u79bb\u5e97", m.innerHtml = this.selectOutDateItemFn.call(this, h, n, this.jetLag))), this.datamodel.showRestIcon && (this.rest[c] && (y.push("calendar-holiday"), m.innerHtml += '<i class="calendar-holiday-h">\u4f11</i>'), this.work[c] && (m.innerHtml += '<i class="calendar-holiday-w">\u73ed</i>')), this.datamodel.selectInDay && this.datamodel.selectOutDay && n.getTime() > this.datamodel.selectInDay.getTime() && n.getTime() < this.datamodel.selectOutDay.getTime() && y.push("calendar-range"), m.parentDOMClass = y.join(" "), m
							}
						}), this.events = {
							"click .cui_calendar_item ": "itemAction",
							"click .calendar-weehours em": function(t) {
								var i = $(t.currentTarget);
								e.$(".calendar-weehours em").removeClass("current"), i.addClass("current");
								var a = i.data("ismoring");
								a && !Number.isNaN(a) && 1 === parseInt(a, 10) ? e.datamodel.isMorning = !0 : e.datamodel.isMorning = !1, e.refresh()
							},
							"click .js_cal_back": function() {
								e.hide()
							},
							"click .js_cal_ok": function(t) {
								e.datamodel.selectOutDay ? e.onItemClick && e.onDateOK.call(e, e.datamodel.selectInDay, e.$el, t, e.datamodel.selcalendartype, e.datamodel) : e.refresh()
							}
						}
					}, e.prototype.setMoringDate = function() {}, e.prototype.resetHeader = function() {}, e.prototype.show = function() {
						t.prototype.show.call(this), this.mask.show(), this.resetHeader();
						var e = this;
						setTimeout(function() {
							e.setzIndexTop(null, 8e3)
						}, 10), e.ishide && new Promise(function(t) {
							t()
						}).then(i.bind(null, "F4KM")).then(function(t) {
							t.stateobserve(function() {
								e._hide()
							})
						}), e.ishide = !1;
						var a = 0;
						this.scroll && (a = this.scroll.y, this.scroll.destroy()), this.scrollOpts = {
							wrapper: this.$(".calendar-body").parent(),
							scroller: this.$(".calendar-body"),
							scrollType: "y",
							step: 5,
							bounceTime: 200,
							momentum: !0,
							scrollOffset: 1
						}, this.$(".calendar-body").parent().css({
							height: this.$(".js_inoutday_calendar").height() - 3 * this.$(".cm-header").height() + "px"
						}), this.scroll = new y.a(this.scrollOpts), this.scroll.scroller.y = a, this.scroll.y = a, this.scroll.maxScrollY -= 7 * this.$(".cui_cal_header").offset().height, this.scroll.scrollTo(0, a)
					}, e.prototype._hide = function() {
						this.status = "hide", this.mask.hide(), this.ishide = !0, this.doEvents = !0, this.$el.find(".js_inoutday_calendar").addClass("animated fadeOutDown"), this.$(".js_day_toast").hide()
					}, e.prototype.hide = function() {
						history.back()
					}, e.prototype.navClick = function(t) {
						var e = this,
							i = $(t.currentTarget),
							a = e.$el.find(".cm-calendar-quick-nav .active"),
							n = e.$el.find(".cm-day-list .js_calendar_item .lh_canlendar_color_hightlight");
						a.removeClass("active"), n.removeClass("lh_canlendar_color_hightlight"), i.addClass("active"), i.css("transform", "scale(0.8, 0.8)"), i.animate({
							transform: "scale(1, 1)"
						}, 300);
						var o = i.attr("data-date"),
							r = null;
						r = e.$el.find('.js_calendar_item[data-date="' + o + '"]');
						var s = 0;
						if(r.length > 0) var c = setInterval(function() {
							if(s > 150) {
								clearInterval(c);
								var t = e.$el.find('.js_calendar_item[data-date="' + o + '"]');
								t.addClass("cm-field-title--active"), setTimeout(function() {
									t.removeClass("cm-field-title--active")
								}, 2e3)
							}
							window.scrollTo(0, parseInt(r.offset().top, 10) - s), s += 50
						}, 60)
					}, e.prototype.isToday = function(t) {
						var e = new f.a(Object(f.d)().getTime()),
							i = new f.a(t);
						return 0 === Object(f.c)(e.format("Y-m-d"), i.format("Y-m-d"))
					}, e.prototype.itemAction = function(t) {
						if(this.doEvents) {
							var e = $(t.currentTarget);
							if(!e.hasClass("js_invalid")) {
								var i = e.attr("data-date");
								if(i && (i = i.split("-"), 3 === i.length)) {
									i = new Date(i[0], i[1], i[2]);
									var a = this.datamodel.selcalendartype,
										n = new Date(Object(f.d)().getTime()),
										o = n.getHours();
									if(1 === parseInt(a, 10)) {
										this.datamodel.selcalendartype = 2, this.datamodel.curtext = "\u8bf7\u9009\u62e9\u79bb\u5e97\u65e5\u671f";
										var r = new f.a(i);
										this.datamodel.selectInDay = i, this.isToday(r) ? this.datamodel.showMorningSwitch = o >= 0 && o < 6 && !this.datamodel.isOversea : (this.datamodel.isMorning = !1, this.datamodel.showMorningSwitch = !1);
										var s = new Date(r.addDay(28).date);
										this.datamodel.selectOutDay = !1, this.validEndDate = s, this.refresh()
									} else {
										if(this.datamodel.showMorningSwitch && this.datamodel.isMorning)
											if(i < this.datamodel.selectInDay) {
												this.datamodel.selcalendartype = 2, this.datamodel.selectInDay = i, this.datamodel.selectOutDay = !1;
												var r = new f.a(i);
												this.isToday(r) || (this.datamodel.isMorning = !1);
												var s = new Date(r.addDay(26).date);
												this.datamodel.curtext = "\u8bf7\u9009\u62e9\u79bb\u5e97\u65e5\u671f", this.validEndDate = s
											} else this.datamodel.selcalendartype = 1, this.datamodel.selectOutDay = i, this.datamodel.adddays = Object(f.c)(new f.a(this.datamodel.selectInDay).format("Y-m-d"), new f.a(this.datamodel.selectOutDay).format("Y-m-d")) + 1, this.datamodel.curtext = "", this.datamodel.miniUI.layer.text ? this.datamodel.miniUI.layer.visible = !0 : this.datamodel.miniUI.layer.visible = !1;
										else if(i <= this.datamodel.selectInDay) {
											this.datamodel.selcalendartype = 2, this.datamodel.selectInDay = i, this.datamodel.selectOutDay = !1;
											var r = new f.a(i);
											this.isToday(r) || (this.datamodel.isMorning = !1);
											var s = new Date(r.addDay(28).date);
											this.datamodel.curtext = "\u8bf7\u9009\u62e9\u79bb\u5e97\u65e5\u671f", this.validEndDate = s
										} else {
											if(this.datamodel.selcalendartype = 1, this.datamodel.selectOutDay = i, this.datamodel.adddays = Object(f.c)(new f.a(this.datamodel.selectInDay).format("Y-m-d"), new f.a(this.datamodel.selectOutDay).format("Y-m-d")), this.datamodel.curtext = "", this.datamodel.miniUI.layer.text ? this.datamodel.miniUI.layer.visible = !0 : this.datamodel.miniUI.layer.visible = !1, !this.datamodel.showMorningSwitch && this.onItemClick) {
												var c = this;
												clearTimeout(this.stid), c.doEvents = !1, this.stid = setTimeout(function() {
													c.doEvents = !0, c.onDateOK.call(c, i, e, t, a, c.datamodel)
												}, 800)
											}
											this.datamodel.curtext = "\u4f4f" + this.datamodel.adddays + "\u665a"
										}
										this.refresh(), this.resetHeader()
									}
									this.$(".js_day_toast").appendTo(2 === this.$(".calendar-current").length ? this.$(".calendar-current").eq(1) : this.$(".calendar-current").eq(0)).show()
								}
							}
						}
					}, e.prototype.setDate = function(t, e) {
						this.datamodel.selectInDay = t, this.datamodel.selectOutDay = e
					}, e.prototype.onDateOK = function(t, e, i, a) {
						this.onItemClick && this.onItemClick.call(this, t, e, i, a, this.datamodel)
					}, e.prototype.renderMoringPanel = function() {}, e.prototype.render = function() {
						var e = new Date(Object(f.d)().getTime()),
							i = e.getHours(),
							a = i >= 0 && i < 6 && !this.datamodel.isOversea;
						if(this.datamodel.showMorningSwitch = a, this.isToday(this.datamodel.selectInDay)) {
							if(this.datamodel.isMorning && this.datamodel.selectOutDay) {
								var n = new f.a(this.datamodel.selectInDay);
								this.datamodel.selectOutDay = n.addDay(this.datamodel.adddays - 1).date
							} else if(this.datamodel.selectOutDay) {
								var n = new f.a(this.datamodel.selectInDay);
								this.datamodel.selectOutDay = n.addDay(this.datamodel.adddays).date
							}
						} else this.datamodel.showMorningSwitch = !1;
						1 === parseInt(this.datamodel.cityType, 10) && (this.datamodel.miniUI.layer.text = ""), this.datamodel.curtext || this.datamodel.miniUI.layer.text ? this.datamodel.miniUI.layer.visible = !0 : this.datamodel.miniUI.layer.visible = !1, this.isRefresh && (this.scrollTop = this.$(".js_inoutday_calendar")[0].scrollTop);
						var o = t.prototype.render.call(this);
						return this.isRefresh = !0, o
					}, e.prototype.initElement = function() {
						t.prototype.initElement.call(this), this.scrollTop && this.$(".js_inoutday_calendar").scrollTop(this.scrollTop)
					}, e.prototype.resetPropery = function() {
						for(var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
						t.prototype.resetPropery.apply(this, e), this.curTimeBaseTimeZone = new Date(Object(f.d)()), this.isValidJetLag(this.jetLag) || (this.jetLag = 0), r()(this.validStartDate) ? (this.validStartDate.setHours(0, 0, 0, 0), this.startTime = this.validStartDate) : (this.validStartDate = new Date(Object(f.d)().getTime() + 1e3 * this.jetLag), this.validStartDate.setHours(0, 0, 0, 0), this.startTime = this.validStartDate), r()(this.validEndDate) ? (this.validEndDate.setHours(0, 0, 0, 0), this.endTime = this.validEndDate) : this.validEndDate = null, r()(this.datamodel.selectDate) ? this.datamodel.selectDate.setHours(0, 0, 0, 0) : this.datamodel.selectDate = null, this.datamodel.year = this.validStartDate.getFullYear(), this.datamodel.dateVSMS = this.validStartDate.getTime();
						for(var a = new Date(new Date(Object(f.d)().getTime() + 1e3 * this.jetLag)), n = {
								"\u4eca\u5929": a.getFullYear() + "-" + a.getMonth() + "-" + a.getDate()
							}, o = new f.a(this.datamodel.startTime), s = new f.a(this.datamodel.endDate), c = o; c.getTime() <= s.getTime(); c = c.addDay(1)) {
							var l = u.getDateInfo(c.date);
							if(l.holiday || l.chineseday) {
								var d = l.holiday || l.chineseday,
									h = c.date;
								if(h.getTime() > (new Date).getTime() && !n[d]) {
									var p = h.getFullYear() + "-" + h.getMonth() + "-" + h.getDate();
									n[d] = p
								}
							}
						}
						this.datamodel.showNav = !1
					}, e.prototype.refresh = function() {
						"show" === this.status ? this.template = d.a.split("animated fadeInUp").join("") : this.template = d.a, t.prototype.refresh.call(this)
					}, e
				}(p.a);
			e.a = m
		},
		"6M8Y": function(t, e, i) {
			"use strict";
			var a = i("TToO"),
				n = i("0tEz"),
				o = i("jnGA"),
				r = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return a.b(e, t), e.prototype.propertys = function() {
						t.prototype.propertys.call(this), this.mask = new o.a, this.type = "layer", this.resetDefaultProperty()
					}, e.prototype.resetDefaultProperty = function() {
						this.mask.resetDefaultProperty(), this.needMask = !0, this.needAnimat = !0, this.maskToHide = !0, this.needReposition = !0, this.hasPushState = history && history.pushState, this.hasPushState = !1, this.historyBack = !1, this.animateInClass = "cm-up-in", this.animateOutClass = "cm-up-out", this.animateShowAction = null, this.animateHideAction = null, this.unbindTouchEvent || (this.events = {
							touchmove: "_preventDefault"
						})
					}, e.prototype.initialize = function(e) {
						t.prototype.initialize.call(this, e), this.clearRes()
					}, e.prototype.resetPropery = function() {
						var t = this;
						this.needAnimat && (this.animateShowAction || (this.animateShowAction = function(e) {
							var i = !1;
							e.show(), e.addClass(t.animateInClass), e.one($.fx.animationEnd, function() {
								i = !0, e.removeClass(t.animateInClass)
							}), setTimeout(function() {
								i || (e.removeClass(t.animateInClass), e.off($.fx.animationEnd))
							}, 350)
						}), this.animateHideAction || (this.animateHideAction = function(e) {
							var i = !1;
							e.addClass(t.animateOutClass), e.one($.fx.animationEnd, function() {
								i = !0, e.removeClass(t.animateOutClass), e.hide()
							}), setTimeout(function() {
								i || (e.removeClass(t.animateOutClass), e.off($.fx.animationEnd), e.hide())
							}, 350)
						})), this.mask.needAnimat = !1, this.needAnimat && this.animateHideAction ? this.mask.animateHideAction = function(e) {
							var i = !1;
							e.addClass(t.mask.animateOutClass), e.one($.fx.animationEnd, function() {
								i = !0, e.removeClass(t.mask.animateOutClass), e.hide()
							}), setTimeout(function() {
								i || (e.removeClass(t.mask.animateOutClass), e.off($.fx.animationEnd), e.hide())
							}, 350)
						} : this.mask.animateHideAction = null, this._setMaskEvent()
					}, e.prototype._setMaskEvent = function() {
						var t = this;
						this.needMask && this.maskToHide && this.mask.addEvents({
							click: function() {
								t.hide()
							}
						})
					}, e.prototype.clearRes = function() {}, e.prototype._addPushStateEvent = function() {
						this.hasPushState && (history.pushState({}, document.title, location.href), this.historyBack = !1, $(window).on("popstate.pageviewpopstate" + this.id, $.proxy(function() {
							this.historyBack = !0, this.hide()
						}, this)))
					}, e.prototype._removePushStateEvent = function() {
						this.hasPushState && $(window).off(".pageviewpopstate" + this.id)
					}, e.prototype.addEvent = function() {
						this.on("onCreate", function() {
							this.$el.addClass("cui-layer")
						}), this.on("onPreShow", function() {
							this.needMask && this.mask.show()
						}), this.on("onShow", function() {
							this.setzIndexTop(), this._addPushStateEvent(), this.needReposition && this.reposition()
						}), this.on("onPreHide", function() {
							this.hasPushState && !this.historyBack && history.back()
						}), this.on("onHide", function() {
							this.hasPushState && !this.historyBack || (this.mask.hide(), this._removePushStateEvent())
						}), this.on("onDestroy", function() {
							this.mask.destroy()
						})
					}, e.prototype.reposition = function() {
						var t = this;
						window.navigator.userAgent.indexOf("baidu") > 0 ? setTimeout(function() {
							var e = t.$el.eq(0).attr("style");
							e = e.replace(/(.*);;.*/, "$1;"), t.$el.eq(0).attr("style", e), t.$el.css({
								"margin-left": -t.$el.width() / 2 + "px",
								"margin-top": -t.$el.height() / 2 + "px"
							})
						}, 200) : this.$el.css({
							"margin-left": -this.$el.width() / 2 + "px",
							"margin-top": -this.$el.height() / 2 + "px"
						})
					}, e
				}(n.a);
			e.a = r
		},
		"6Rme": function(t, e) {
			t.exports = '<li> <span class="g-city-t g-city-anchor-hot js_city_group" data-val="3">\u70ed\u95e8\u57ce\u5e02</span> <ul class="g-city-tags"> <% for(var i = 0;i < cities.length ; i++){ var city = cities[i]; %> <li class="js_simple_city" data-sec="hot" data-seo="<%=city.seo%>" data-cid="<%=city.cityId%>" data-did="<%=city.did%>" data-idx="<%=i%>" data-ubt-key="c_hotel_citylist_hot_<%=city.cityId%>"> <%=city.cname%> </li> <% } %> </ul> </li> '
		},
		"7YkW": function(t, e, i) {
			function a() {
				if(!arguments.length) return [];
				var t = arguments[0];
				return n(t) ? t : [t]
			}
			var n = i("NGEn");
			t.exports = a
		},
		
		"7vyD": function(t, e, i) {
			"use strict";
			var a = i("TToO"),
				n = i("0tEz"),
				o = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return a.b(e, t), e.prototype.propertys = function() {
						t.prototype.propertys.call(this), this.needRootWrapper = !1
					}, e.prototype.addEvent = function() {
						var e = this;
						t.prototype.addEvent.call(this), this.addEvents({
							"click .js_simple_city": function(t) {
								e.onClickCity(t)
							}
						})
					}, e.prototype.hasItems = function() {
						return !0
					}, e.prototype.getAnchor = function() {
						return {
							name: this.name,
							value: this.value
						}
					}, e.prototype.onClickCity = function(t) {
						var e = $(t.currentTarget);
						this.trigger("onSelectedCity", {
							section: e.data("sec"),
							index: e.data("idx")
						})
					}, e.prototype.setCityToSelected = function(t) {
						this.$el.find(".g-city-current").removeClass("g-city-current"), this.selectedCity = t, this.$el.find('[data-cid="' + this.selectedCity.cityId + '"]').filter('[data-did="' + this.selectedCity.did + '"]').addClass("g-city-current")
					}, e
				}(n.a);
			e.a = o
		},
		"8mgt": function(t, e, i) {
			var a = i("tv3T"),
				n = i("0DSl"),
				o = i("t8rQ"),
				r = n(function(t, e) {
					a(e, o(e), t)
				});
			t.exports = r
		},
		"9UkZ": function(t, e, i) {
			function a(t) {
				if(!r(t) || n(t) != s) return !1;
				var e = o(t);
				if(null === e) return !0;
				var i = h.call(e, "constructor") && e.constructor;
				return "function" == typeof i && i instanceof i && d.call(i) == p
			}
			var n = i("aCM0"),
				//o = i("vi0E"),
				r = i("UnEC"),
				s = "[object Object]",
				c = Function.prototype,
				l = Object.prototype,
				d = c.toString,
				h = l.hasOwnProperty,
				p = d.call(Object);
			t.exports = a
		},
		"9lab": function(t, e) {
			function i(t) {
				return "\\" + a[t]
			}
			var a = {
				"\\": "\\",
				"'": "'",
				"\n": "n",
				"\r": "r",
				"\u2028": "u2028",
				"\u2029": "u2029"
			};
			t.exports = i
		},
		ArDj: function(t, e, i) {
			"use strict";

			function a(t) {
				return t < 10 ? "0" + t : t.toString()
			}
			var n = i("TToO"),
				o = i("LSBV"),
				r = i.n(o),
				s = i("JDN0"),
				c = i.n(s),
				l = i("gGqR"),
				d = i.n(l),
				h = i("0tEz"),
				p = i("/4es"),
				u = i.n(p),
				f = i("6rBr"),
				y = i("waeE"),
				m = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return n.b(e, t), e.prototype.propertys = function() {
						t.prototype.propertys.call(this), this.template = u.a, this.dateObj = new Date, this.solarHoliday = {
							"0101": "\u5143\u65e6",
							"0214": "\u60c5\u4eba\u8282",
							"0501": "\u52b3\u52a8\u8282",
							"0601": "\u513f\u7ae5\u8282",
							"0910": "\u6559\u5e08\u8282",
							1001: "\u56fd\u5e86",
							1225: "\u5723\u8bde"
						}, this.lunarHoliday = {
							20180216: "\u6625\u8282",
							20180302: "\u5143\u5bb5",
							20180405: "\u6e05\u660e",
							20180618: "\u7aef\u5348",
							20180924: "\u4e2d\u79cb",
							20190205: "\u6625\u8282",
							20190219: "\u5143\u5bb5",
							20190405: "\u6e05\u660e",
							20190607: "\u7aef\u5348",
							20190913: "\u4e2d\u79cb"
						}, this.rest = {
							20180215: "\u6625\u8282",
							20180216: "\u6625\u8282",
							20180217: "\u6625\u8282",
							20180218: "\u6625\u8282",
							20180219: "\u6625\u8282",
							20180220: "\u6625\u8282",
							20180221: "\u6625\u8282",
							20180405: "\u6e05\u660e",
							20180406: "\u6e05\u660e",
							20180407: "\u6e05\u660e",
							20180429: "\u52b3\u52a8\u8282",
							20180430: "\u52b3\u52a8\u8282",
							20180501: "\u52b3\u52a8\u8282",
							20180616: "\u7aef\u5348",
							20180617: "\u7aef\u5348",
							20180618: "\u7aef\u5348",
							20180922: "\u4e2d\u79cb",
							20180923: "\u4e2d\u79cb",
							20180924: "\u4e2d\u79cb",
							20181001: "\u56fd\u5e86",
							20181002: "\u56fd\u5e86",
							20181003: "\u56fd\u5e86",
							20181004: "\u56fd\u5e86",
							20181005: "\u56fd\u5e86",
							20181006: "\u56fd\u5e86",
							20181007: "\u56fd\u5e86"
						}, this.work = {
							20180211: "\u9664\u5915\u73ed",
							20180224: "\u6625\u8282\u73ed",
							20180408: "\u6e05\u660e\u73ed",
							20180428: "\u52b3\u52a8\u73ed",
							20180929: "\u56fd\u5e86_\u73ed",
							20180930: "\u56fd\u5e86_\u73ed"
						}, this.footDate = {
							"\u5143\u65e6": new Date(2017, 0, 1),
							"\u9664\u5915": new Date(2017, 0, 27),
							"\u6e05\u660e": new Date(2017, 3, 4),
							"\u4e2d\u79cb": new Date(2017, 9, 4),
							"\u56fd\u5e86": new Date(2017, 9, 1)
						}, this.defineHoliday = "", this.jetLag = 0, this.specialDates = !1, this.curTimeBaseTimeZone = new Date(f.a.getServerDate()), this.validStartDate = new Date(f.a.getServerDate().getTime() + 0 * this.jetLag), this.validStartDate.setHours(0, 0, 0, 0), this.validEndDate = null, this.recentDaysHaveText = !0, this.dealDateItem = function(t, e, i, n, o) {
							var r = {
									day: i
								},
								s = [],
								c = a(e + 1) + a(i),
								l = t.toString() + a(e + 1) + a(i),
								d = parseInt(-1 * o / 36e5 * 100, 10) / 100;
							this.datamodel.show2Day, d >= 0 && d < 24 && (r.day1 = "\u4eca\u5929"), this.solarHoliday[c] && (r.solarHoliday = this.solarHoliday[c]), this.lunarHoliday[l] && (r.lunarHoliday = this.lunarHoliday[l]), this.specialDates;
							var h = "";
							return h = '<div class="cm-field-title">' + (r.day1 || r.day) + "</div>", (r.solarHoliday || r.lunarHoliday) && (h = '<div class="cm-field-title cm-field-title--festival">' + (r.lunarHoliday || r.solarHoliday) + "</div>"), this.datamodel.showRestIcon && (this.rest[l] && (h += '<i class="icon-calendar-holiday">\u4f11</i>'), this.work[l] && (h += '<i class="icon-calendar-work">\u73ed</i>')), s[0] = h, {
								str: s.join(""),
								dayObj: r
							}
						}, this.datamodel = {
							scope: this,
							startTime: null,
							endTime: null,
							weekDayArr: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
							displayMonthNum: 12,
							tips: "",
							selfTips: "",
							footDate: "",
							showNav: !1,
							curTime: this.dateObj.getTime(),
							defineLi: !1,
							showRestIcon: !0,
							show2Day: !1,
							miniUI: {
								topBar: {
									html: "",
									visible: !1
								},
								layer: {
									text: "",
									visible: !1
								}
							},
							selectDate: null,
							MonthClapFn: function(t, e) {
								return e += 1, t + "\u5e74" + e + "\u6708"
							},
							dayWrapperItemFn: function(t, e, i, a, n, o) {
								var r = this.dealDateItem(t, e, i, a, n);
								return this.dayWrapperAction ? this.dayWrapperAction.call(this, r.dayObj, t, e, i, a, n, o) : r.str
							},
							dayItemFn: function(t, e, i, n) {
								"number" != typeof t && (n = t), n.setHours(0, 0, 0, 0), t = n.getFullYear(), e = n.getMonth(), i = n.getDate();
								var o = f.a.getServerDate(),
									r = new f.a(new Date(o.getTime() + 1e3 * this.jetLag)),
									s = f.a.getIntervalDay(r.format("Y-m-d"), new f.a(n).format("Y-m-d")),
									c = t.toString() + a(e + 1) + a(i),
									l = y.getDateInfo(n),
									d = {
										day: i,
										solarHoliday: l.holiday || "",
										lunarHoliday: l.chineseday || "",
										day1: ""
									},
									h = [],
									p = [],
									u = {
										innerHtml: "",
										parentDOMClass: "",
										dateInfo: d
									};
								switch(s) {
									case 0:
										d.day1 = this.recentDaysHaveText ? "\u4eca\u5929" : ""
								}
								if(this.specialDates, h[0] = '<p class="calendar-day">' + d.day + "</p>", (d.solarHoliday || d.lunarHoliday) && (h[1] = '<p class="calendar-note">' + (d.lunarHoliday || d.solarHoliday) + "</p>", p.push("cui_cld_day_havetxt")), d.day1 && (h[1] = '<p class="calendar-note">' + d.day1 + "</p>", p.push("cui_cld_day_havetxt")), (d.lunarHoliday || d.solarHoliday) && p.push("calendar-holiday"), this.dayItemAction) {
									var m = this.curTimeBaseTimeZone.getTime() + 1e3 * this.jetLag - n.getTime();
									u.innerHtml = this.dayItemAction.call(this, d, t, e, i, n, m)
								} else u.innerHtml = h.join("");
								return this.validStartDate && n.getTime() < this.validStartDate.getTime() && (p.push("calender-invalid"), p.push("calendar-daypast"), p.push("js_invalid")), this.validEndDate && n.getTime() > this.validEndDate.getTime() && (p.push("calender-invalid"), p.push("calendar-daypast"), p.push("js_invalid")), this.datamodel.selectDate && n.getTime() === this.datamodel.selectDate.getTime() && (p.push("calendar-current"), p.push("cui_cld_daycrt"), this.selectDateItemFn && (u.innerHtml = this.selectDateItemFn.call(this, d, n))), this.datamodel.showRestIcon && (this.rest[c] && (p.push("calendar-holiday"), u.innerHtml += '<i class="calendar-holiday-h">\u4f11</i>'), this.work[c] && (u.innerHtml += '<i class="calendar-holiday-h">\u73ed</i>')), u.parentDOMClass = p.join(" "), u
							}
						}, this.dayItemAction = null, this.dayWrapperAction = null, this.events = {
							"click .js_calendar_item ": "itemAction",
							"click .w_date_nav_click": "navClick",
							scroll: function(t) {
								t.stopPropagation()
							},
							touch: function(t) {
								t.stopPropagation()
							},
							touchmove: function(t) {
								t.stopPropagation()
							}
						}, this.onItemClick = function(t, e, i) {}
					}, e.prototype.resetPropery = function() {
						var e = this;
						t.prototype.resetPropery.call(this), this.datamodel.deffTimezone = 1e3 * this.jetLag, this.datamodel.curTime = this.dateObj.getTime() + this.datamodel.deffTimezone, this.datamodel.startTime || (this.datamodel.startTime = this.dateObj);
						var i = new Date(this.datamodel.startTime.getTime() + this.datamodel.deffTimezone);
						if(0 === parseInt(this.datamodel.deffTimezone, 10) && (i = new Date(i.getFullYear(), i.getMonth(), i.getDate())), this.datamodel.startTime = i, this.datamodel.year = i.getFullYear(), this.datamodel.month = i.getMonth(), this.datamodel.endDate = new Date(this.datamodel.year, this.datamodel.month + this.datamodel.displayMonthNum, 0), !this.datamodel.footNavDate) {
							var a = {
								"\u4eca\u5929": (new Date).getFullYear() + "-" + (new Date).getMonth() + "-" + (new Date).getDate()
							};
							Object.keys(this.footDate || {}).forEach(function(t) {
								var i = e.footDate[t];
								if(i.getTime() > (new Date).getTime()) {
									var n = i.getFullYear() + "-" + i.getMonth() + "-" + i.getDate();
									a[t] = n
								}
							}), this.datamodel.footNavDate = a
						}
						this.datamodel.defineHoliday && (this.defineHoliday = this.datamodel.defineHoliday), this.curTimeBaseTimeZone = new Date(f.a.getServerDate()), this.isValidJetLag(this.jetLag) || (this.jetLag = 0), r()(this.validStartDate) ? (this.validStartDate.setHours(0, 0, 0, 0), this.startTime = this.validStartDate) : (this.validStartDate = new Date(f.a.getServerDate().getTime() + 1e3 * this.jetLag), this.validStartDate.setHours(0, 0, 0, 0), this.startTime = this.validStartDate), r()(this.validEndDate) ? (this.validEndDate.setHours(0, 0, 0, 0), this.endTime = this.validEndDate) : this.validEndDate = null, r()(this.datamodel.selectDate) ? this.datamodel.selectDate.setHours(0, 0, 0, 0) : this.datamodel.selectDate = null, this.datamodel.year = this.validStartDate.getFullYear(), this.datamodel.month = this.validStartDate.getMonth(), this.datamodel.dateVSMS = this.validStartDate.getTime();
						for(var n = new Date(new Date(f.a.getServerDate().getTime() + 1e3 * this.jetLag)), o = {
								"\u4eca\u5929": n.getFullYear() + "-" + n.getMonth() + "-" + n.getDate()
							}, s = new f.a(this.datamodel.startTime), c = new f.a(this.datamodel.endDate), l = s; l.getTime() <= c.getTime(); l = l.addDay(1)) {
							var d = y.getDateInfo(l.date);
							if(d.holiday || d.chineseday) {
								var h = d.holiday || d.chineseday,
									p = l.date;
								if(p.getTime() > (new Date).getTime() && !o[h]) {
									var u = p.getFullYear() + "-" + p.getMonth() + "-" + p.getDate();
									o[h] = u
								}
							}
						}
						this.datamodel.footNavDate = o
					}, e.prototype.setJetLag = function(t) {
						this.jetLag = parseInt(t, 10), this.refresh()
					}, e.prototype.addDisplayMonth = function(t) {
						this.datamodel.displayMonthNum = this.datamodel.displayMonthNum + t, this.refresh()
					}, e.prototype.handleCnDay = function(t, e) {
						var i = t,
							a = [];
						r()(t) ? i = t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate() : c()(t) && (a = t.split("-"), i = a[0] + "-" + (parseInt(a[1], 10) - 1) + "-" + a[2]), this.handleDay(i, e)
					}, e.prototype.dateDiff = function(t, e) {
						var i = 0,
							a = 0,
							n = 0;
						return i = t.split("-"), i = e.split("-"), a = new Date(i[1] + "-" + i[2] + "-" + i[0]), n = new Date(i[1] + "-" + i[2] + "-" + i[0]), parseInt(Math.abs(a - n) / 1e3 / 60 / 60 / 24, 10)
					}, e.prototype.handleDay = function(t, e) {
						var i = t;
						r()(t) && (i = t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate());
						var a = this.$('li[data-date="' + i + '"]');
						a[0] && d()(e) && e.call(this, a)
					}, e.prototype.openRestWork = function(t, e) {
						for(var i = t || this.work, a = e || this.rest, n = $(".cm-day-list li"), o = 0; o < n.length; o++) {
							var r = $(n[o]),
								s = r.attr("data-cndate") || "";
							if(s) {
								var c = s.split("-"),
									l = c[0],
									d = c[1] >= 10 ? c[1] : "0" + c[1],
									h = c[2] >= 10 ? c[2] : "0" + c[2],
									p = l + d + h;
								i[p] && r.append('<i class="icon-calendar-work">\u73ed</i>'), a[p] && r.append('<i class="icon-calendar-holiday">\u4f11</i>')
							}
						}
					}, e.prototype.itemAction = function(t) {
						var e = $(t.currentTarget);
						if(!e.hasClass("js_invalid")) {
							var i = e.attr("data-date");
							i && (i = i.split("-"), 3 === i.length && (i = new Date(i[0], i[1], i[2]), this.onItemClick && this.onItemClick.call(this, i, e, t)))
						}
					}, e.prototype.navClick = function(t) {
						var e = this,
							i = $(t.currentTarget),
							a = e.$el.find(".cm-calendar-quick-nav .active"),
							n = e.$el.find(".cm-day-list .js_calendar_item .lh_canlendar_color_hightlight");
						a.removeClass("active"), n.removeClass("lh_canlendar_color_hightlight"), i.addClass("active"), i.css("transform", "scale(0.8, 0.8)"), i.animate({
							transform: "scale(1, 1)"
						}, 300);
						var o = i.attr("data-date"),
							r = null;
						r = e.$el.find('.js_calendar_item[data-date="' + o + '"]');
						var s = 0;
						if(r.length > 0) var c = setInterval(function() {
							if(s > 150) {
								clearInterval(c);
								var t = e.$el.find('.js_calendar_item[data-date="' + o + '"]');
								t.addClass("cm-field-title--active"), setTimeout(function() {
									t.removeClass("cm-field-title--active")
								}, 2e3)
							}
							window.scrollTo(0, parseInt(r.offset().top, 10) - s), s += 50
						}, 60)
					}, e.prototype.initElement = function() {
						var t = $("#js_style_root");
						this.weekDay = this.$(".js_weekend"), this.calendarStyle = this.$(".js_ui_calendar_v1"), t[0] || (t = $('<div id="js_style_root"></div>'), t.insertBefore($("#main"))), t.find(".js_ui_calendar_v1")[0] || t.append(this.calendarStyle)
					}, e.prototype.initialize = function(e) {
						e.datamodel.displayMonthNum > 23 && (e.datamodel.displayMonthNum = 23), t.prototype.initialize.call(this, e), "none" === $("#headerview").css("display") && this.$(".js_weekend").css("top", 0)
					}, e.prototype.isValidJetLag = function(t) {
						var e = !1;
						if(null === t || void 0 === t || isNaN(parseInt(t, 10))) return !1;
						t = parseInt(t / 3600, 10);
						return t >= -20 && t <= 6 && (e = !0), e
					}, e.prototype.getDateInfo = function(t) {
						return y.getDateInfo(t)
					}, e
				}(h.a);
			e.a = m
		},
		"AvJ/": function(t, e) {
			t.exports = '<style> </style> <div class="js_star_wrapper g-filter-star"></div> <div class="js_price_wrapper g-filter-price"> <input type="hidden" class="slider-input js_input"/> </div> <div class="g-filter-ps-btn"> <div class="ui-btn-reset cell-star js_btn_default" data-ubt-key="c_hotel_inland_searchlist_starpricefilter_reset">\u6e05\u7a7a</div> <div class="ui-btn-ok cell-star js_btn_confirm" data-ubt-key="c_hotel_inland_searchlist_starpricefilter_confirm">\u786e\u5b9a</div> </div> '
		},
		BUAs: function(t, e, i) {
			var a = i("i4ON"),
				n = i("tv3T"),
				o = i("0DSl"),
				r = i("bGc4"),
				s = i("HT7L"),
				c = i("ktak"),
				l = Object.prototype,
				d = l.hasOwnProperty,
				h = o(function(t, e) {
					if(s(e) || r(e)) return void n(e, c(e), t);
					for(var i in e) d.call(e, i) && a(t, i, e[i])
				});
			t.exports = h
		},
		
		Goez: function(t, e, i) {
			"use strict";
			function a(t) {
				var e = window.location.host,
					i = t ? "accounts" : "gateway.m",
					a = t ? "accounts.ctrip.com" : "m.ctrip.com",
					n = "prod";
				if(e.match(/^m\.ctrip\.com/i));
				else if(e.match(/\.uat\.qa/i)) n = "uat", a = i + ".uat.qa.nt.ctripcorp.com";
				else if(e.match(/\.ui\.|\.dev\.|\.fat/i) || e.match(/\.lpt/i) || e.match(/\.fws/i) || e.match(/^(localhost|172\.16|127\.0|10\.15)/i)) {
					var o = t ? "fat466" : "fws";
					n = "fat", a = i + "." + o + ".qa.nt.ctripcorp.com"
				} else if(e.match(/\.uat\.ctripqa\.com/i)) {
					n = "uatqa";
					var r = t ? "accounts" : "m";
					a = r + ".uat.ctripqa.com"
				}
				return {
					domain: a,
					env: n
				}
			}

			function n(t) {
				return t = t || "", t = t.replace(/<[^>]+>/g, "")
			}
			e.a = a, e.b = n
		},
		
		HT7L: function(t, e) {
			function i() {
				return !1
			}
			t.exports = i
		},
		Hxdr: function(t, e) {
			function i(t, e) {
				for(var i = -1, a = null == t ? 0 : t.length, n = Array(a); ++i < a;) n[i] = e(t[i], i, t);
				return n
			}
			t.exports = i
		},
		IJ3o: function(t, e, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = i("kbi+"),
				n = i.n(a),
				o = i("hIkJ"),
				r = i.n(o),
				//s = i("gszD"),
				//c = i.n(s),
				/*l = i("y9NZ"),
				d = i.n(l),*/
				//h = i("VQV5"),
				//p = i.n(h),
				u = i("kXZP"),
				f = i.n(u),
				y = i("J009"),
				m = i.n(y),
				g = function() {
					var t = {},
						e = window,
						i = {
							EXCEPTION: new Error("HYBRID-SHEL-2014"),
							SN: {
								DEFAULT: 0,
								UPON: "UPON.2014",
								PRE: "PRE.2014",
								POST: "POST.2014",
								PX: "PX.2014",
								gen: function() {
									var t = 1;
									return function() {
										return t += 1, (new Date).getTime() + "." + t
									}
								}()
							},
							abort: function(t) {
								if(t) {
									if(t === i.EXCEPTION) return !0;
									throw t
								}
								throw i.EXCEPTION
							},
							apiFn: function(e) {
								var a = function() {},
									o = t.fninfo(e);
								return o.klass && (a = function() {
									var t = arguments,
										a = !1;
									(a = n()(i.fn("find", e, i.SN.PRE), function(e) {
										try {
											t = e.apply(void 0, t)
										} catch(t) {
											return i.abort(t)
										}
									})) || o.klass[o.realname].apply(o.klass, t)
								}), a
							},
							fn: function() {
								var t = {};
								return function(a, n, o, s) {
									!s && o instanceof Function && (s = o, o = void 0), o || (o = i.SN.DEFAULT);
									var l = i.ifHasnot(t, n, {});
									l = i.ifHasnot(l, o, {
										fns: [],
										times: []
									});
									var h = r()(l.fns, s),
										u = h < 0 ? 0 : l.times[h];
									switch(a) {
										case "on":
										case "once":
											return void(s && (u = "once" === a ? 1 : e.Infinity, h < 0 && (h = l.fns.length), l.times[h] = u, l.fns[h] = s));
										case "find":
											return l.fns;
										case "try":
											return u--, l.times[h] = u, void(0 === u && (arguments[0] = "off", i.fn.apply(i, arguments)));
										case "off":
											if(s) {
												var f = function(t, e) {
													return c()(d()(t, e), p()(t, t.length - e - 1))
												};
												l.fns = f(l.fns, h), l.times = f(l.times, h)
											} else l.fns = [], l.times = [];
											return
									}
								}
							}(),
							ifHasnot: function(t, e, i) {
								return {}.hasOwnProperty.call(t, e) || (t[e] = i), t[e]
							}
						};
					t.CLASSES = [], Object.keys(e || {}).forEach(function(i) {
						"Ctrip" === i.substr(0, 5) && t.CLASSES.push(e[i])
					}), t.FNINFO = {
						abort_http_pipe_request: {
							realname: "app_abort_HTTP_pipe_request"
						},
						do_business_job: {
							sidIndex: 3
						},
						sotp_send_http_requst: {
							sidIndex: 4
						},
						send_h5_pipe_request: {
							realname: "app_send_H5_pipe_request"
						},
						send_http_pipe_request: {
							realname: "app_send_HTTP_pipe_request"
						}
					}, t.fninfo = function(e) {
						var a = i.ifHasnot(t.FNINFO, e, {});
						return a._READY || (i.ifHasnot(a, "realname", "app_" + e), {}.hasOwnProperty.call(a, "klass") || (a.klass = n()(t.CLASSES, function(t) {
							return !!t[a.realname]
						})), a._READY = !0), a
					};
					var a = {
						abort: i.abort,
						fn: function(t, e, a) {
							this.on(t, e, a);
							var n = i.apiFn(t);
							return n.run = n, n
						},
						init: f()(function() {
							e.app || (e.app = {}), e.app.callback = function(a) {
								var o, r;
								if("string" == typeof a) try {
									a = JSON.parse(decodeURIComponent(a))
								} catch(t) {
									return
								}
								var s = a.tagname;
								if("string" == typeof(o = t.fninfo(s).paramsMixed ? a : a.param)) try {
									o = JSON.parse(o)
								} catch(t) {}
								a.error_code && (/^(\((-?\d+)\))?(.+)$/.exec(a.error_code), r = new Error, r.number = parseInt(RegExp.$2, 10), r.message = RegExp.$3);
								var c, l = o ? o.sequenceId : void 0,
									d = i.fn("find", s, i.SN.UPON),
									h = i.fn("find", s, i.SN.POST),
									p = i.fn("find", s, l),
									u = !1;
								if(e.Lizard && "2.0" === e.Lizard.version && (c = e.Lizard.facadeMethods, c && (c = c[s]), "function" == typeof c ? p = p.concat(c) : c = void 0), d.length + p.length) {
									n()(h, function(t) {
										try {
											o = t(o, r)
										} catch(t) {
											return i.abort(t)
										}
									});
									var f = function(t, e) {
										i.fn("try", s, t, e), u = !1 === e(o, r)
									};
									return u || n()(d, function(t) {
										return f(i.SN.UPON, t)
									}), u || n()(p, function(t) {
										return f(l, t)
									}), !c || d.length + p.length !== 1 || void 0
								}
							}
						}),
						on: function(t, e, a) {
							return i.fn("on", t, e, a), this
						},
						once: function(t, e, a) {
							return i.fn("once", t, e, a), this
						},
						preTreat: function(t, e) {
							return i.fn("on", t, i.SN.PRE, e), this
						},
						postTreat: function(t, e) {
							return i.fn("on", t, i.SN.POST, e), this
						},
						off: function(t, e, a) {
							return i.fn("off", t, e, a), this
						},
						upon: function(t, e) {
							return i.fn("on", t, i.SN.UPON, e), this
						},
						Fn: function(e, n) {
							var o = this;
							if(this === a) return new this.Fn(e, n);
							var r, s = e,
								c = t.fninfo(s).sidIndex;
							m()(c) ? r = i.SN.gen() : a.off(e), a.once(e, r, n), ["on", "once", "off"].forEach(function(t) {
								o[t] = function(e) {
									return a[t](s, r, e), this
								}
							}, this), this.run = function() {
								var t = arguments;
								if(m()(c)) {
									t = [];
									for(var e = 0, a = Math.max(c + 1, arguments.length); e < a; e++) e === parseInt(c, 10) && t.push(r), t.push(arguments[e])
								}
								return i.apiFn(s).apply(void 0, t), this
							}
						}
					};
					return a
				}();
			g.init(), e.default = g
		},
		J009: function(t, e, i) {
			function a(t) {
				return "number" == typeof t || o(t) && n(t) == r
			}
			var n = i("aCM0"),
				o = i("UnEC"),
				r = "[object Number]";
			t.exports = a
		},
		JDN0: function(t, e, i) {
			function a(t) {
				return "string" == typeof t || !o(t) && r(t) && n(t) == s
			}
			var n = i("aCM0"),
				o = i("NGEn"),
				r = i("UnEC"),
				s = "[object String]";
			t.exports = a
		},
		JUs9: function(t, e, i) {
			function a(t, e) {
				return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1
			}
			var n = i("G8ar");
			t.exports = a
		},
		JV2L: function(t, e) {
			t.exports = '<ul class="g-city-tab js_city_tab"> <li class="g-tab-item g-tab-current" data-type="domestic" data-ubt-key="c_hotel_citylist_inland_city_tab">\u56fd\u5185\xb7\u6e2f\u6fb3\u53f0</li> <li class="g-tab-item" data-type="oversea" data-ubt-key="c_hotel_citylist_oversea_city_tab">\u6d77\u5916</li> <i class="g-tab-scrollbar"></i> </ul> '
		},
		JyYQ: function(t, e) {
			function i(t) {
				return t
			}
			t.exports = i
		},
		KH9P: function(t, e) {
			t.exports = ' <div class="age-filter"> <dl> <dt>\u513f\u7ae5\u5e74\u9f84</dt> <% for (var i = 0; i < agesVm.length; i++) { %> <dd class="<%=agesVm[i].age === selectedAge ? \'current \':\'\'%>js_age_item" data-idx="<%=i%>"><%=agesVm[i].txt%></dd> <% } %> </dl> </div> '
		},
		KgVm: function(t, e, i) {
			function a(t, e, i) {
				var a = null == t ? 0 : t.length;
				if(!a) return -1;
				var c = null == i ? 0 : r(i);
				return c < 0 && (c = s(a + c, 0)), n(t, o(e, 3), c)
			}
			var //n = i("cdq7"),
				o = i("JyYQ"),
				r = i("5Zxu"),
				s = Math.max;
			t.exports = a
		},
		Kl7s: function(t, e) {
			function i(t) {
				return function(e) {
					return null == t ? void 0 : t[e]
				}
			}
			t.exports = i
		},
		
		
		
		Lr25: function(t, e, i) {
			t.exports = i("8mgt")
		},
		
		M1c9: function(t, e) {
			function i(t, e, i) {
				var a = -1,
					n = t.length;
				e < 0 && (e = -e > n ? 0 : n + e), i = i > n ? n : i, i < 0 && (i += n), n = e > i ? 0 : i - e >>> 0, e >>>= 0;
				for(var o = Array(n); ++a < n;) o[a] = t[a + e];
				return o
			}
			t.exports = i
		},
		MHoa: function(t, e, i) {
			"use strict";
			var a = i("TToO"),
				n = i("0tEz"),
				o = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return a.b(e, t), e.prototype.propertys = function() {
						t.prototype.propertys.call(this), this.items = []
					}, e.prototype.setOption = function(e) {
						t.prototype.setOption.call(this, e), this.itemSelector = e.itemSelector || ".item", this.eventType = e.eventType || "click"
					}, e.prototype.addEvent = function() {
						t.prototype.addEvent.call(this);
						var e = {};
						e[this.eventType + " " + this.itemSelector] = this.handleSelect.bind(this), this.addEvents(e)
					}, e.prototype.create = function() {
						t.prototype.create.call(this), this.addTabBarItems()
					}, e.prototype.addTabBarItems = function() {
						this.items = this.$el.find(this.itemSelector)
					}, e.prototype.initElement = function() {
						t.prototype.initElement.call(this), this.items.length > 0 && this.changeStatusToSelect(this.items[0])
					}, e.prototype.handleSelect = function(t) {
						this.changeAllStatusToUnselect();
						var e = t.currentTarget;
						this.changeStatusToSelect(e), this.select(this.getSelectTabKey(e))
					}, e.prototype.getSelectTabKey = function(t) {}, e.prototype.select = function(t) {}, e.prototype.changeAllStatusToUnselect = function() {}, e.prototype.changeStatusToSelect = function(t) {}, e.prototype.setTabToSelectedStatus = function(t) {
						var e = this;
						this.changeAllStatusToUnselect(), this.items && $.each(this.items, function(i, a) {
							t === e.getSelectTabKey(a) && e.changeStatusToSelect(a)
						})
					}, e.prototype.destroy = function() {
						t.prototype.destroy.call(this), this.items = null
					}, e
				}(n.a);
			e.a = o
		},
		MvGl: function(t, e, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = i("TToO"),
				n = i("6HpJ"),
				o = i("6rBr"),
				r = i("YlCS"),
				s = i("0tEz"),
				c = i("waeE"),
				//l = i("bV2p"),
				d = function(t) {
					function e() {
						for(var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
						var a = t.apply(this, e) || this,
							r = a;
						return a.calendar = new n.a({
							datamodel: {
								selcalendartype: 1,
								isMorning: !1,
								displayMonthNum: 12,
								showNav: !0
							},
							selectInDateItemFn: function(t, e, i) {
								var a = [],
									n = e.getDate(),
									r = new o.a(new Date(o.a.getServerDate().getTime() + 1e3 * i));
								o.a.getIntervalDay(r.format("Y-m-d"), new o.a(e).format("Y-m-d"));
							
								return a[0] = '<p class="calendar-day">' + n + "</p>", a[1] = '<p class="calendar-note">入住</p>', a.join("")	/*入住*/
							},
							selectOutDateItemFn: function(t, e, i) {
								var a = [],
									n = e.getDate(),
									r = new o.a(new Date(o.a.getServerDate().getTime() + 1e3 * i));
								o.a.getIntervalDay(r.format("Y-m-d"), new o.a(e).format("Y-m-d"));
								return a[0] = '<p class="calendar-day">' + n + "</p>", a[1] = '<p class="calendar-note">' + t.day1 + "</p>", "离店" === t.day1 && (a[2] = '<i class="calendar-day-checkin">6:00\u4e4b\u524d\u5165\u4f4f</i>'), a.join("")
							},
							onItemClick: function(t, e, i, a, n) {
								var s = Object(c.getDateMoreInfo)(this.datamodel.selectInDay, o.a.getServerDate()),
									l = Object(c.getDateMoreInfo)(this.datamodel.selectOutDay, o.a.getServerDate()),
									d = new o.a(new Date(o.a.getServerDate().getTime() + 1e3 * this.jetLag)),
									h = o.a.getIntervalDay(d.format("Y-m-d"), new o.a(this.datamodel.selectInDay).format("Y-m-d")),
									p = o.a.getIntervalDay(d.format("Y-m-d"), new o.a(this.datamodel.selectOutDay).format("Y-m-d"));
								this.hide(), r.trigger("onItemClick", {
									checkinDate: this.datamodel.selectInDay,
									checkinRecent: r.getRecentText(h),
									checkinFestval: s.festival || s.cfestival,
									checkinWeekday: s.week2,
									checkoutDate: this.datamodel.selectOutDay,
									checkoutRecent: r.getRecentText(p),
									checkoutFestval: l.festival || l.cfestival,
									checkoutWeekday: l.week2,
									isMorning: this.datamodel.isMorning,
									showMorningSwitch: this.datamodel.showMorningSwitch
								})
							}
						}), a.calendar.on("onShow", function() {
							//return l.a.record("onCalendarOpened", "success")
						}), a
					}
					return a.b(e, t), e.prototype.open = function(t, e, i, a, n) {
						var s = e ? 2 : 1,
							c = (o.a.parse(i), o.a.parse(a), r.a.getBizCalendarparams({
								cityType: s,
								jetLag: t
							}));
						this.calendar.recentDaysHaveText = c.recentDaysHaveText, this.calendar.jetLag = c.jetLag, this.calendar.validStartDate = c.validStartDate, this.calendar.validEndDate = null, this.calendar.datamodel.miniUI = {
							layer: c.layer
						}, this.calendar.datamodel.curtext = "\u8bf7\u9009\u62e9\u5165\u4f4f\u65e5\u671f", this.calendar.datamodel.cityType = s, this.calendar.datamodel.isOversea = e, this.calendar.datamodel.selectInDay = o.a.parse(i).date, this.calendar.datamodel.selectOutDay = o.a.parse(a).date, this.calendar.datamodel.isMorning = n;
						var l = o.a.getIntervalDay(i, a);
						this.calendar.datamodel.adddays = n ? l + 1 : l, this.calendar.refresh(), this.calendar.show()
					}, e.prototype.getRecentText = function(t) {
						switch(t) {
							case 0:
								return "\u4eca\u5929";
							default:
								return ""
						}
					}, e
				}(s.a);
			e.default = d
		},
		N2c4: function(t, e) {},
		
		
		"Pxs+": function(t, e, i) {
			"use strict";
			var a = i("0SAi"),
				n = i("Goez"),
				o = i("yKmV"),
				r = i("kbi+"),
				s = i.n(r),
				c = i("JDN0"),
				l = i.n(c),
				d = function() {
					function t() {
						this.url = "12901/getSignatureUrl.json", this.param = {}
					}
					return t.prototype.setAttr = function(t, e) {
						if(this[t] = e, "param" === t) {
							"fat" === Object(n.a)().env && (this[t].subEnv = "fat685")
						}
					}, t.prototype.buildurl = function() {
						var t = Object(n.a)().domain;
						return [window.location.protocol, "//", t, "/restapi/soa2/", this.url].join("")
					}, t.prototype.excute = function(t, e, i) {
						o.a.post(this.buildurl(), this.param, t, e, i)
					}, t
				}(),
				h = {};
			h.bMapToAMap = function(t, e) {
				var i = 52.35987755982988,
					a = t - .0065,
					n = e - .006,
					o = Math.sqrt(a * a + n * n) - 2e-5 * Math.sin(n * i),
					r = Math.atan2(n, a) - 3e-6 * Math.cos(a * i);
				return {
					lng: o * Math.cos(r),
					lat: o * Math.sin(r)
				}
			}, h.requestGoogleAddress = function(t, e, i, n, o) {
				function r(r, d) {
					for(var h = function(n) {
							if(~u.indexOf("true")) return !1;
							if(u.push("true"), n) {
								n.results && n.results.length > 0 && n.results[0].address_components.filter(function(t) {
									return t.types.indexOf("country") > -1
								})
							}
							a.a.groupEnd(c);
							var o, r, d, h, p = "",
								f = "",
								y = "",
								m = "";
							if(n && "OK" === n.status) {
								if(!n.results) return !1;
								var g = n.results[0] || {};
								return h = g.address_components || {}, s()(h, function(t) {
									var e = t && t.long_name;
									t.types && ("country" === t.types[0] && "political" === t.types[1] && (p = e, f = t.short_name), "administrative_area_level_1" === t.types[0] && "political" === t.types[1] && (d = e), "locality" === t.types[0] && "political" === t.types[1] && (r = e), "administrative_area_level_2" === t.types[0] && "political" === t.types[1] && (o = e), "sublocality_level_1" === t.types[0] && "sublocality" === t.types[1] && (o = e), "postal_code" === t.types[0] && (y = e, "JP" === f && (m = p + "\u3001\u3012" + y + " ")))
								}), !l()(r) && l()(d) && (r = d), ("" !== p || "" !== d || "" !== r || "" !== o) && i({
									address: g.formatted_address.replace(m, ""),
									location: t + "," + e,
									info: h,
									city: r,
									province: d,
									district: o,
									lng: t,
									lat: e,
									country: p,
									countryShortName: f,
									detailAddress: ""
								})
							}
							return !1
						}, p = function(t) {
							if(!~u.indexOf("true")) {
								if(!~u.indexOf("false")) return void u.push("false");
								a.a.groupEnd(c), n && n(t)
							}
						}, u = [], f = 0; f < r.length; f++) $.ajax({
						url: r[f],
						dataType: "json",
						success: h,
						error: p,
						timeout: o || 8e3
					})
				}
				a.a.log({
					name: "MapAndGeoLocation",
					type: "geolocation",
					region: "oversea",
					service: "Google Service"
				});
				var c = a.a.getUuid();
				a.a.group(c, {
					name: "GeoRequest",
					url: "https://maps.googleapis.com/maps/api/geocode/json,https://ditu.google.cn/maps/api/geocode/json",
					type: "Google service"
				});
				var h = new d;
				h.setAttr("param", {
					lng: t,
					lat: e,
					type: "geocoding",
					channel: "HOTEL_H",
					language: "zh-CN"
				});
				h.excute(function(t) {
					if("" + t.statusCode == "200") {
						var e = t.signatureUrl;
						r(["https://maps.googleapis.com" + e, "https://ditu.google.cn" + e])
					} else n && n(t)
				}, function(t) {
					n && n(t)
				})
			}, e.a = h
		},
		
		QUuP: function(t, e, i) {
			var a = i("l4he"),
				n = i("wS+S"),
				o = i("x2od"),
				r = i("/Rdg"),
				s = {
					escape: n,
					evaluate: o,
					interpolate: r,
					variable: "",
					imports: {
						_: {
							escape: a
						}
					}
				};
			t.exports = s
		},
		
		Rh28: function(t, e) {
			function i(t) {
				return "number" == typeof t && t > -1 && t % 1 == 0 && t <= a
			}
			var a = 9007199254740991;
			t.exports = i
		},
		
		RyI1: function(t, e) {
			function i(t, e) {
				for(var i = -1, a = null == t ? 0 : t.length, n = 0, o = []; ++i < a;) {
					var r = t[i];
					e(r, i, t) && (o[n++] = r)
				}
				return o
			}
			t.exports = i
		},
		
		VYb2: function(t, e, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = i("TToO"),
				n = i("RyI1"),
				o = i.n(n),				
				l = i("6rBr"),				
				p = i("+b/N"),
				u = i("yKmV"),
				f = i("jnGA"),
				y = i("LpuJ"),
				m = i("Goez"),				
				b = i("waeE"),				
				_ = i("30VQ"),
				S = (i.n(_), i("gsCt")),
				x = i("YtmL"),				
				T = i("MvGl"),						
				I = i("q2rF"),				
				E = i("+JQy"),
				P = new p.b({
					key: "S_HOTEL_QUERY",
					lifeTime: "48H",
					isUserData: !0
				}),
				M = {
					room: 1,
					adult: 1,
					children: [-1, -1, -1]
				},
				L = new p.b({
					key: "S_HOTEL_SAFARU_LAYER",
					lifeTime: "24H",
					isUserData: !0
				}),
				H = function(t) {
					function e() {
						for(var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
						var a = t.apply(this, e) || this;
						return a.pageName = "index", a
					}
					return a.b(e, t), e.prototype.ready = function() {						
						this.pageStatus = this.generatePageStatus(),
						this.checkMorningSwitch(), 
						t.prototype.ready.call(this), 
						this.initQuickLogin(), 
						this.pageData && this.pageData.adBannerSwitch && this.initAdSlider(),										
						
						
						this.initSafariLayer(),
						document.referrer && 0 === document.referrer.indexOf(location.origin + "/webapp/hotel") && this.initInOutDayFromCache()
						
					}, e.prototype.initAdSlider = function() {
						var t = this.appData.pageid,
							e = this.pageStatus.isOversea ? 3 : 2,
							i = this.pageStatus.cityId || 2;					
					}, 
				 e.prototype.checkMorningSwitch = function() {
					
						this.showMorningSwitch(),
						this.updateCheckoutDay()
					}, e.prototype.canShowMorningSwitch = function() {
						if(this.pageStatus.isOversea) return !1;
						var t = l.a.parse(this.pageStatus.atime).date,
							e = new Date(l.a.getServerDate().getTime());
						this.pageStatus.days;
						return !(e.getHours() < 0 || e.getHours() >= 6) && (e.setHours(0), e.setMinutes(0), e.setMilliseconds(0), e.setSeconds(0), t <= e)
					}, e.prototype.showMorningSwitch = function() {
						this.pageStatus.canShowMorningSwitch = !0;
						var t = 2;
					
					}, e.prototype.hideMorningSwitch = function() {
						this.pageStatus.isMorning = !1, this.morningStore.setStatus(!1), this.pageStatus.canShowMorningSwitch = !1, this.$(".js_morning_switch").hide()
					}, e.prototype.getMorningSwitchTab = function(t) {
						var e = this;
						return this.morningSwitchTab || (this.morningSwitchTab = new v.a({
							datamodel: {
								data: [{
									id: 1,
									name: "\u4eca\u66686\u70b9\u524d",
									value: !0
								}, {
									id: 2,
									name: "\u4eca\u66686\u70b9\u540e",
									value: !1
								}],
								selectedKey: t
							},
							wrapper: e.$(".js_morning_tab"),
							onChange: function(t) {
								e.onSwitchMorning(t)
							}
						})), this.morningSwitchTab.setVal(t), this.morningSwitchTab
					}, e.prototype.onSwitchMorning = function(t) {
						this.pageStatus.isMorning = t.value || !1, this.morningStore.setStatus(this.pageStatus.isMorning), this.updateCheckoutDay()
					}, e.prototype.updateDayRemark = function(t, e, i) {
						if(t = t || new l.a(new Date(l.a.getServerDate().getTime() + 1e3 * this.pageStatus.utcOffSet)), e) {
							var a = l.a.getIntervalDay(t.format("Y-m-d"), new l.a(e).format("Y-m-d"));
							this.$(".js_inoutday .star em").eq(1).html(this.getRecentText(a) || l.a.weekday(e))
						}
						if(i) {
							var n = l.a.getIntervalDay(t.format("Y-m-d"), new l.a(i).format("Y-m-d"));
							this.$(".js_inoutday .end em").eq(1).html(this.getRecentText(n) || l.a.weekday(i))
						}
					}, e.prototype.updateCheckoutDay = function() {
						var t = l.a.parse(this.getCheckOutDate(), !0),
							e = Object(b.getDateMoreInfo)(t, l.a.getServerDate()),
							i = new l.a(new Date(l.a.getServerDate().getTime() + 1e3 * this.pageStatus.utcOffSet)),
							a = l.a.getIntervalDay(i.format("Y-m-d"), new l.a(t).format("Y-m-d")),
							n = new l.a(t).format("m\u6708d\u65e5");
						this.$(".js_inoutday .end em").eq(0).html("" + n), this.$(".js_inoutday .end em").eq(1).html(this.getRecentText(a) || e.week2)
					}, e.prototype.generatePageStatus = function() {
				
						if(this.isBack() && t.response) return t;
						var e = this.pageData.urlParams;
						return {
							forceJava: this.pageData.forceJava,
							isOversea: e && e.oversea,
							cityId: e && e.cityId,
							districtId: e && e.districtId,
							days: e && e.days,
							atime: e && e.atime,
							cityName: e && e.cityName,
							citySeoName: e && e.citySeoName,
							utcOffSet: this.pageData.utcOffSet,
							latlng: e && e.latlng,
							isMorning: e && e.morning,
							canShowMorningSwitch: e && e.canShowMorningSwitch,
							starList: e && e.starList,
							lowestPrice: e && e.lowestPrice,
							highestPrice: e && e.highestPrice,
							displayKeywordText: e && e.keyword,
							displayKeywords: e && e.keyword
						}
					}, e.prototype.getEvents = function() {
						var t = this;
						return {
							//"click .js_submit": this.handleGoToHotelList.bind(this),
							//"click .js_city": this.handleOpenCityList.bind(this),
							/*"click .js_getposition": function() {
								return t.handleGetPosition()
							},*/
							"click .js_inoutday": this.handleInOutDay.bind(this),
							//"click .js_sidebar": this.closeSidebar.bind(this),
							//"click .js_nearbysearch": this.handleNearbySearch.bind(this),
							
							//"click .js_myorder": this.handleGotoOrderList.bind(this),
							//"click .js_mycenter": this.handleGotoMyCenter.bind(this),
							//"click .js_other_hourlyroom": this.handleGoToHourRoomList.bind(this),
							//"click .js_other_inn_nocityid": this.handleGoToInnListWithoutCityID.bind(this),
							//"click .js_other_explore": this.handleGoToExploreHotelList.bind(this),
							//"click .js_other_meeting": this.handleGoToMeeting.bind(this),
							//"click .js_other_salehotel": this.handleGoToSaleHotel.bind(this),
							//"click .js_price_star": this.openPriceStarFilterPanel.bind(this),
							//"click .js_price_star_close": this.removePriceStar.bind(this),
							//"click .js_pop_oversea": this.showOverseaServiceGuarantee,
							//"click .js_room_people_select": this.handleRoomPeopleNumSelect,
							//"click .js_close_safariLayer": this.closeSafariLayer,
							//"click .js_business ": this.changeRelaxationIcon.bind(this),
						//	"click .js_relaxation": this.changeRelaxationIcon.bind(this)
						}
					},
					e.prototype.getKeywordPanel = function() {
						var t = this;
						return this.keywordPanel || (this.keywordPanel = new C.default({
							request: {
								cityID: this.pageStatus.cityId,
								districtID: this.pageStatus.districtId,
								keyword: this.pageStatus.displayKeywords,
								checkinDate: this.pageStatus.atime
							},
							selectedDestinationData: {
								id: this.pageStatus.keywordFilterItem,
								text: this.pageStatus.displayKeywords
							}
						}), this.keywordPanel.on("onFilterSelect", function(e) {
							t.onKeywordFilterSelect(e)
						}), this.keywordPanel.on("onJumpToHotelDetail", function(e) {
							t.onKeywordJumpToHotelDetail(e)
						}), this.keywordPanel.on("onSearchBarClear", function() {
							t.onSearchBarClear()
						}), this.keywordPanel.on("onDirectSearch", function(e) {
							t.onDirectSearch(e)
						})), this.keywordPanel
					},
					e.prototype.destroyKeywordPanel = function() {
						this.keywordPanel && (this.keywordPanel.destroy(), delete this.keywordPanel)
					}, e.prototype.onKeywordFilterSelect = function(t) {
						this.changePageStatusKeywordFilter(t), this.updateComponentsFromPageStatus()
					}, e.prototype.changePageStatusKeywordFilter = function(t) {
						this.pageStatus.keywordFilterItem = t.id, this.pageStatus.displayKeywords = t.text, this.pageStatus.cityId = t.cityId || this.pageStatus.cityId, this.pageStatus.cityName = t.cityName || this.pageStatus.cityName, this.pageStatus.districtId = t.districtId || this.pageStatus.districtId, this.pageStatus.citySeoName = t.citySeoName || this.pageStatus.citySeoName
					}, e.prototype.updateComponentsFromPageStatus = function() {
						this.updateCityTitle(), this.updateKeywordBarText(), this.updateKeywordsPanel()
					}, e.prototype.updateCityTitle = function() {
						this.pageStatus.cityName && !this.pageStatus.latlng && this.$el.find(".js_city_title").text(this.pageStatus.cityName)
					}, e.prototype.updateKeywordBarText = function() {
						this.keywordBar.updateKeywordBarText(this.pageStatus.displayKeywords)
					}, e.prototype.updateKeywordsPanel = function() {
						this.keywordPanel && (this.pageStatus.cityId !== this.keywordPanel.request.cityID || this.pageStatus.districtId !== this.keywordPanel.request.districtID ? this.destroyKeywordPanel() : this.keywordPanel.updateSearchBarText({
							cityID: this.pageStatus.cityId,
							keyword: this.pageStatus.displayKeywords
						}))
					}, e.prototype.onKeywordBarClear = function(t) {
						t && (this.changePageStatusKeywordClear(), this.updateComponentsFromPageStatus())
					}, e.prototype.onSearchBarClear = function() {
						this.changePageStatusKeywordClear(), this.updateComponentsFromPageStatus()
					}, e.prototype.onDirectSearch = function(t) {
						this.updateKeyword(t)
					}, e.prototype.changePageStatusKeywordClear = function() {
						this.pageStatus.keywordFilterItem = "", this.pageStatus.displayKeywords = ""
					}, e.prototype.onKeywordJumpToHotelDetail = function(t) {
						if(t && t.id) {
							this.pageStatus.keywordFilterItem = t.id, this.pageStatus.displayKeywords = t.text, this.pageStatus.currentPage = "AssociateSearch", this.pageStatus.displayKeywordText = this.keywordPanel.searchbar.elInput.val(), this.restorePageStatusKeyword(t);
							var e = t.id.substring(t.id.indexOf("-") + 1, t.id.length),
								i = e.split("|");
							if(i && i.length >= 5) {
								var a = i[0];
								this.jumpToHotelDetail(a, parseInt(i[4]) > 1)
							}
						}
					}, e.prototype.restorePageStatusKeyword = function(t) {
						t ? (this.pageStatus.cityIDTemp = t.cityId, this.pageStatus.cityNameTemp = t.cityName, this.pageStatus.districtIDTemp = t.districtId) : (this.pageStatus.cityId = this.pageStatus.cityIDTemp, this.pageStatus.cityName = this.pageStatus.cityNameTemp, this.pageStatus.districtId = this.pageStatus.districtIDTemp)
					}, e.prototype.jumpToHotelDetail = function(t, e) {
						this.searchStatusProvider.setCache(this.pageStatus), history.replaceState({}, document.title, "#gotoDetail");
						var i = e ? "oversea/" : "",
							a = new l.a(new Date(l.a.getServerDate().getTime() + 1e3 * this.pageStatus.utcOffSet)),
							n = this.pageStatus.atime,
							o = l.a.getIntervalDay(a.format("Y-m-d"), this.pageStatus.atime),
							r = l.a.getIntervalDay(this.pageStatus.atime, this.getCheckOutDate());
						r = this.morningStore.isMorning() && !e ? r + 1 > 0 ? r + 1 : 1 : r > 0 ? r : 1;
						var s = this.pageData.utcOffSet || 0;
						this.setOneMessage("entry-detail", "searchindex");
						var c = this.pageStatus.lowestPrice || 0,
							d = this.pageStatus.highestPrice || 0,
							h = "";
						(c > 0 || d > 0) && (h = "&pricerange=" + c, d > 0 && d < 2147483647 && (h = h + "," + d)), this.goTo("hoteldetails", I.a.getenvHost() + "/webapp/hotel/" + i + "hoteldetail/" + t + ".html?atime=" + n + "&daylater=" + o + "&days=" + r + h + "#fromIndex");
						var p = this.morningStore.getStatus() ? 4 : 0;
						this.setOneMessage("entry", "searchindex");
						var u = "";
						if(e) u = I.a.getenvHost() + "/webapp/hotel/" + i + "hoteldetail/" + t + ".html?atime=" + n + "&days=" + r + "&contrl=" + p + "&tzone=" + s + h + "#fromIndex";
						else {
							var f = this.generateLatLon();
							u = I.a.getenvHost() + "/webapp/hotel/" + i + "hoteldetail/" + t + ".html?atime=" + n + "&daylater=" + o + "&days=" + r + "&contrl=" + p + "&latlon=" + f + h + "#fromIndex"
						}
						this.goTo("hoteldetails", u)
					}, e.prototype.generateLatLon = function() {
						var t = "";
						return !t && t.length <= 0 && this.pageStatus.keywordFilterItem && (t = this.getlatlon(this.pageStatus.keywordFilterItem)), t
					}, e.prototype.getlatlon = function(t) {
						var e = "";
						if(t && t.length > 0) {
							var i = t.indexOf("@");
							i > 0 && (t = t.substring(0, i));
							var a = t.split("-"),
								n = this.convertFilterType(a[0]);
							if(n > 0) {
								var o = a[1] && a[1].split("|");
								e = o[1] + "," + o[2] + "," + o[3] + "," + n + "," + o[0]
							}
						}
						return encodeURI(e)
					}, e.prototype.convertFilterType = function(t) {
						var e = 0;
						switch(t) {
							case "zone":
								e = 3;
								break;
							case "landmark":
								e = 5;
								break;
							case "metrostation":
								e = 7;
								break;
							case "airportandtrainstation":
								e = 8;
								break;
							default:
								e = 0
						}
						return e
					}, 
					
					e.prototype.showHTML = function() {
						$("#js_fake_loading2").remove()
					}, 
					e.prototype.restoreBackStatus = function() {
						this.pageStatus.currentPage = "", history.replaceState({}, document.title, location.origin + location.pathname)
					}, 
					e.prototype.isBack = function() {
						return "#gotoDetail" === location.hash
					}, 
					
					e.prototype.generateSeoParam = function() {
						var t = [],
							e = y.a._getQueryString(window.location.href);
						if(e) var i = e.city,
							a = e.brandid,
							n = e.zone,
							o = e.metroid;
						var r = ["brand", "zone", "xingzhengqv", "metrostation"],
							s = [a, n, e.location, o];
						return i && r.forEach(function(e, i) {
							s[i] && !t.length && (t.push(e), t.push(s[i]))
						}), t
					}, 
					
					e.prototype.getStarList = function() {
						var t = [];
						return this.pageStatus.starList.forEach(function(e) {
							t.push(e <= 2 ? "star-0|1|2" : "star-" + e)
						}), t
					}, 
					
					e.prototype.onPriceStarConfirm = function(t) {
						var e = t && t.star && t.star.text && t.star.text.join("\u3001") || "",
							i = t && t.price && t.price.text || "",
							a = this.pageStatus.isoversea ? "\u94bb\u7ea7/\u4ef7\u683c" : "\u661f\u7ea7/\u4ef7\u683c";
						this.$(".js_price_star").html(e && i ? e + "\u3001" + i : e || i ? "" + e + i : a), e || i ? (this.$(".js_price_star_close").show(), this.$("#js_query_star_price").addClass("g--active"), this.$(".js_price_star").removeClass("g-def-txt")) : (this.$(".js_price_star_close").hide(), this.$("#js_query_star_price").removeClass("g--active"), this.$(".js_price_star").addClass("g-def-txt"));
						var n = [];
						(t && t.star && t.star.value || []).forEach(function(t) {
							if("star-0|1|2" === t) return void n.push(2);
							var e = t.split("-");
							e.length >= 2 && n.push(parseInt(e[1]))
						}), this.pageStatus.starList = n;
						var i = t && t.price && t.price.value || "",
							o = i.split(",");
						o.length > 1 ? (this.pageStatus.lowestPrice = parseInt(o[0]), this.pageStatus.highestPrice = parseInt(o[1])) : (this.pageStatus.lowestPrice = 0, this.pageStatus.highestPrice = 0)
					}, e.prototype.getCheckOutDate = function() {
						var t = l.a.parse(this.pageStatus.atime),
							e = this.pageStatus.isMorning ? Math.max(this.pageStatus.days - 1, 0) : Math.max(this.pageStatus.days, 1);
						return t.addDay(e).format("Ymd")
					}, e.prototype.generateBackUrl = function() {
						return window.encodeURIComponent(window.location.href)
					}, e.prototype.convertToCityUrlParam = function() {
						return this.pageStatus.city <= 0 ? this.pageStatus.isOversea ? "shanghai2/" : "bangkok359/" : this.pageStatus.citySeoName + (this.pageStatus.districtId > 0 ? "D" + this.pageStatus.districtId + "_" : "") + this.pageStatus.cityId + "/"
					}, e.prototype.handleBack = function(t) {
						if(navigator.userAgent.toLowerCase().indexOf("samsunglifeservice") > -1) return void(window.location.href = "action://finish");
						if(y.a.isPrevPageOrigin()) return void this.back();
						var e = "/html5/";
						"1896" === this.$("#sourceid_hidden_input").val() ? e = "map://leftClick()" : "CCB_app" === this.channelData.subchannel && (e = this.channelData.homeUrl), this.jump(e)
					},
					
					
					e.prototype.handleInOutDay = function() {
						this.calendar || (this.calendar = new T.default, this.calendar.on("onItemClick", this.onInOutDaySelected.bind(this))), this.calendar.open(this.pageStatus.utcOffSet, this.pageStatus.isOversea, this.pageStatus.atime, this.getCheckOutDate(), this.pageStatus.isMorning)
					}, e.prototype.onInOutDaySelected = function(t) {
						var e = new l.a(t.checkinDate).format("Ymd"),
							i = new l.a(t.checkoutDate).format("Ymd"),
							a = new l.a(t.checkinDate).format("m\u6708d\u65e5"),
							n = new l.a(t.checkoutDate).format("m\u6708d\u65e5");
						this.$(".js_inoutday .star em").eq(0).html("" + a), this.$(".js_inoutday .end em").eq(0).html("" + n), this.$(".js_inoutday .star em").eq(1).html(t.checkinRecent || t.checkinWeekday), this.$(".js_inoutday .end em").eq(1).html(t.checkoutRecent || t.checkoutWeekday), this.pageStatus.isMorning = t.isMorning, /*this.morningStore.setStatus(t.isMorning),*/ this.pageStatus.atime = e;
						var o = P.getAttr("queryParams") || {};
						o.inDay = e.substring(0, 4) + "-" + e.substring(4, 6) + "-" + e.substring(6, 8), o.outDay = i.substring(0, 4) + "-" + i.substring(4, 6) + "-" + i.substring(6, 8);
						var r = l.a.getIntervalDay(o.inDay, o.outDay);
						r = t.isMorning ? r + 1 : r, o.days = r, P.setAttr("queryParams", o), this.$(".js_inoutday .js_days").eq(0).text(r + "\u665a"), this.pageStatus.days = r, this.checkMorningSwitch(), this.keywordPanel && (this.keywordPanel.destroy(), delete this.keywordPanel), this.updateUrl()
					}, e.prototype.getCityList = function() {
						var t = this;
						return this.cityList || (this.cityList = new k.default({
							datamodel: {
								hasHeader: !0
							},
							selectedCity: {
								cityId: this.pageStatus.cityId,
								did: this.pageStatus.districtId
							},
							area: this.pageStatus.isOversea ? "oversea" : "domestic",
							onDestItemClick: this.onDestItemClick.bind(this),
							fromIndex: !0,
							hideOversea: this.canNotShowOverseaCity()
						}), this.cityList.on("onSelectedCity", function(e) {
							delete t.pageStatus.latlng_arr, t.onCityListSelectedCity(e)
						}, !1)), this.cityList
					}, e.prototype.canNotShowOverseaCity = function() {
						return "CCB_app" === this.channelData.subchannel
					}, e.prototype.onDestItemClick = function(t) {
						if(32 === t.type) return this.changeCity({
							cityId: t.region.cid,
							cname: t.region.cname,
							did: t.region.distid,
							isoversea: t.region.countryid > 1,
							seo: this.generateSeoName(t.region.city.seo, t.region.cengname),
							topKeyword: t.currentTopKeyword,
							tzone: t.region && t.region.tzone
						}), void delete this.pageStatus.latlng_arr
					}, e.prototype.generateSeoName = function(t, e) {
						return t && t.length > 0 ? t : e && e.length > 0 ? e.toLowerCase().replace(/ /g, "") : null
					}, e.prototype.changeCity = function(t) {
						if(t.isoversea === this.pageStatus.isOversea) {
							if(delete this.pageStatus.latlng, delete this.PriceStarFilterPanel, this.pageStatus.cityId = t.cityId, this.pageStatus.districtId = t.did, this.pageStatus.cityName = t.cname, this.pageStatus.citySeoName = t.seo, this.pageStatus.utcOffSet = t.tzone, void 0 != this.pageStatus.utcOffSet) {
								var e = new Date(l.a.getServerDate().getTime() + 1e3 * this.pageStatus.utcOffSet),
									i = new l.a(e).format("Ymd");
								if(i > this.pageStatus.atime) {
									this.pageStatus.atime = i;
									var a = new l.a(e).format("m\u6708d\u65e5");
									this.$(".js_inoutday .star em").eq(0).html("" + a), this.updateCheckoutDay()
								}
								if(t.isoversea) {
									var n = l.a.parse(this.getCheckOutDate(), !0);
									this.updateDayRemark(new l.a(e), l.a.parse(this.pageStatus.atime), n)
								}
							}
							t.address ? (this.pageStatus.latlng = t.latlng, this.pageStatus.isBMap = t.address.isBMap) : (this.$el.find(".js_city_title").html(this.pageStatus.cityName), delete this.result.latlng), this.isTwHKMacau(t.cityId) || t.isoversea ? (this.$el.find(".js_other_meeting").hide(), this.$el.find(".js_other_hourlyroom").hide(), this.$el.find(".js_other_inn_nocityid").hide(), this.$el.find(".js_other_salehotel").hide()) : (this.$el.find(".js_other_meeting").show(), this.$el.find(".js_other_hourlyroom").show(), this.$el.find(".js_other_inn_nocityid").show(), this.$el.find(".js_other_salehotel").show()), this.updateKeyword(t.topKeyword), this.updateUrl()
						} else {
							var o = t.isoversea ? "oversea/" : "",
								r = this.pageStatus.days,
								s = this.pageStatus.atime ? "&atime=" + this.pageStatus.atime : "",
								c = t.cityId > 0 ? "&city=" + t.cityId : "",
								d = t.did > 0 ? "&district=" + t.did : "",
								h = t.latlng ? "&latlng=" + t.latlng : "",
								p = t.topKeyword ? "&topkeyword=" + t.topKeyword : "",
								u = x.a.getenvHost() + "/webapp/hotel/" + o + "?days=" + r + s + c + d + h + p;
							this.goTo("index", u)
						}
						t.address || this.$el.find(".js_city_title").attr("class", "g-fn1 g-vb js_city_title"), this.checkMorningSwitch(), this.searchStatusProvider.setCache(this.pageStatus), this.updateComponentsFromPageStatus(), this.pageData && this.pageData.adBannerSwitch && this.initAdSlider()
					}, e.prototype.updateKeyword = function(t) {
						var e = "";
						t ? (e = t.replace(/\s*/, ""), $(".js_kewordbar").addClass("g--active"), $(".js_keywordbar_content").attr("value", e).removeClass("g-def-txt"), $(".js_keywordbar_clear").show(), this.pageStatus.displayKeywords = e) : (e = "\u5173\u952e\u5b57/\u4f4d\u7f6e/\u54c1\u724c/\u9152\u5e97\u540d", $(".js_kewordbar").removeClass("g--active"), $(".js_keywordbar_content").attr("value", "").addClass("g-def-txt"), $(".js_keywordbar_clear").hide(), delete this.pageStatus.displayKeywords), $(".js_keywordbar_content").html(e)
					}, e.prototype.updateUrl = function() {
						if(-1 != location.search.indexOf("atime")) {
							var t = I.a.getenvHost() + "/webapp/hotel/?atime=" + this.pageStatus.atime + "&days=" + this.pageStatus.days + "&city=" + this.pageStatus.cityId;
							setTimeout(function() {
								history.replaceState({}, document.title, t)
							}, 1)
						}
					}, e.prototype.onCityListSelectedCity = function(t) {
						this.changeCity(t)
					}, e.prototype.handleSideBar = function(t) {
						var e = this;
						this.sideBarMask || (this.sideBarMask = new f.a({
							events: {
								click: function() {
									
								}
							}
						}), this.sideBarMask.$el.css("backgroundColor", "rgba(255, 255, 255, 0)")), this.$(".js_sidebar").css({
							transform: "translate3d(0rem,0,0)"
						}), this.$(".js_sidebar").css({
							"-webkit-transform": "translate3d(0rem,0,0)"
						}), this.sideBarMask.show()
					},
					
					e.prototype.fastlogin = function(t) {
						var e = this,
							a = this;
						this.appData.isMemberLogin ? t && t.call(this) : c.a.vendor.is("CTRIP") ? Promise.all([new Promise(function(t) {
							t()
						}).then(i.bind(null, "IJ3o")), i.e(2).then(i.bind(null, "Li3Y"))]).then(function(i) {
							var n = i[0],
								o = i[1];
							new n.Fn("member_login", function(i) {
								o.setUserInfo(i.data), o.setAuthCookie(i.data.Auth), t && t.call(e), a.changeHeaderMyText(), a.setLoginName(), a.appData.isMemberLogin = !0, a.checkMorningSwitch()
							}).run()
						}) : this.showLogin(function(i) {
							t && t.call(e), a.changeHeaderMyText(), a.setLoginName(), a.appData.isMemberLogin = !0, a.checkMorningSwitch()
						})
					}, e.prototype.changeHeaderMyText = function() {
						this.$header.find(".js_my_side_bar .g-mytxt").html("\u6211\u7684")
					}, e.prototype.setLoginName = function() {
						var t = this;
						u.a.get("/webapp/hotel/api/user/memberinfo", {}, function(e) {
							e ? t.$(".js_login_info").html('<p class="g-e1 js_login_name"><b>' + e.name + '</b></p><button class="u-btn js_sidebar_login">\u9000\u51fa</button>') : t.$(".js_login_info").html('<p class="g-e1 js_login_name"><b></b></p><button class="u-btn js_sidebar_login">\u9000\u51fa</button>')
						}, function(e) {
							t.$(".js_login_info").html('<p class="g-e1 js_login_name"><b></b></p><button class="u-btn js_sidebar_login">\u9000\u51fa</button>')
						}, 2e3)
					}, e.prototype.isTwHKMacau = function(t) {
						var e = [617, 720, 3844, 3845, 3846, 3847, 3848, 3849, 5152, 5383, 5589, 6954, 7203, 7523, 7524, 7570, 7613, 7614, 7662, 7805, 7808, 7809, 7810, 7811],
							i = e.indexOf(t) >= 0,
							a = 59 == t,
							n = 58 == t;
						return i || a || n
					}, e.prototype.locationFailCallBack = function() {
						var t = this;
						new g.default({
							maskToHide: !0,
							needAnimat: !1,
							datamodel: {
								content: "\u5b9a\u4f4d\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u5c1d\u8bd5\uff0c\u6216\u9009\u62e9\u57ce\u5e02\u67e5\u8be2\u3002",
								btns: [{
									name: "\u77e5\u9053\u4e86",
									className: "cui-btns-cancel"
								}, {
									name: "\u9009\u62e9\u57ce\u5e02",
									className: "cui-btns-ok"
								}]
							},
							events: {
								"click .cui-btns-ok": "okAction"
							},
							okAction: function() {
								this.hide(), h.a.GeoLocation.UnSubscribe("hotel/searchindex")
							},
							cancelAction: function() {
								this.hide(), h.a.GeoLocation.UnSubscribe("hotel/searchindex")
							},
							onHide: function() {
								this.destroy()
							}
						}).show()
					}, e.prototype.getRecentText = function(t) {
						switch(t) {
							case 0:
								return "\u4eca\u5929";
							default:
								return ""
						}
					}, e.prototype.initSafariLayer = function() {
						var t = navigator.userAgent,
							e = /Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/,
							i = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
							a = !1;
						if(i && e.test(t) && (a = this.pageData.safariLayerConfig), a) {
							var n = L.get(),
								o = Date.now();
							if(n) {
								var r = new Date(o),
									s = new Date(n);
								if(r.getDate() === s.getDate()) return void $(".js_safariLayer").hide()
							}
							L.set(o), $(".js_safariLayer").show()
						} else $(".js_safariLayer").hide()
					}, 
					
					e.prototype.initInOutDayFromCache = function() {
						var t = P.getAttr("queryParams") || {},
							e = new l.a(new Date(l.a.getServerDate().getTime() + 1e3 * this.pageStatus.utcOffSet)),
							i = t.inDay,
							a = t.outDay,
							n = t.days;
						if(i && n && e.format("Ymd") > l.a.parse(i).format("Ymd") && (i = e.format("Y-m-d"), a = new l.a(i).addDay(n).format("Y-m-d")), i) {
							var o = l.a.parse(i).format("m\u6708d\u65e5"),
								r = l.a.getIntervalDay(e.format("Y-m-d"), new l.a(i).format("Y-m-d"));
							this.pageStatus.atime = l.a.parse(i).format("Ymd"), this.$(".js_inoutday .star em").eq(0).html("" + o), this.$(".js_inoutday .star em").eq(1).html(this.getRecentText(r) || l.a.weekday(i))
						}
						if(a) {
							var s = l.a.parse(a).format("m\u6708d\u65e5"),
								c = l.a.getIntervalDay(e.format("Y-m-d"), new l.a(a).format("Y-m-d"));
							this.$(".js_inoutday .end em").eq(0).html("" + s), this.$(".js_inoutday .end em").eq(1).html(this.getRecentText(c) || l.a.weekday(a))
						}
						n && (this.pageStatus.days = n, this.$(".js_days").html(n + "\u665a")), this.updateUrl()
					}, e
				}(x.a);
			S.a.init(new H($("#content")))
		},
		
		
		Xu6E: function(t, e, i) {
			function a(t) {
				if(!o(t)) return !1;
				var e = n(t);
				return e == c || e == s || "string" == typeof t.message && "string" == typeof t.name && !r(t)
			}
			var n = i("aCM0"),
				o = i("UnEC"),
				r = i("9UkZ"),
				s = "[object DOMException]",
				c = "[object Error]";
			t.exports = a
		},
		
		YlCS: function(t, e, i) {
			"use strict";
			var a = i("6rBr"),
				n = function() {
					function t() {}
					return t.prototype.isValidJetLag = function(t) {
						var e = !1;
						if(Number.isNaN(t)) return !1;
						t = parseInt(t / 3600, 10);
						return t >= -20 && t <= 6 && (e = !0), e
					},					
					t.prototype.getInDayValidStartDate = function(t) {
						var e = t.cityType,
							i = t.jetLag,
							n = Object(a.d)(),
							o = n;
						return 1 === parseInt(e, 10) && (i = 0), this.isValidJetLag(i) ? o = new Date(n.getTime() + 1e3 * i) : (n.setHours(0, 0, 0, 0), o = new Date(n.getTime() - 864e5)), o
					}, 
					t.prototype.getMiniUILayer = function(t) {
						var e = !0;
						return e = 1 !== parseInt(t, 10), {
							text: "\u60a8\u9009\u7684\u662f\u9152\u5e97\u5f53\u5730\u65e5\u671f",
							visible: e
						}
					}, 
					t.prototype.getRecentDaysHaveText = function(t) {
						var e = t.jetLag,
							i = t.cityType,
							a = !0;
						return 1 === parseInt(i, 10) && (e = 0), (1 !== i && 2 !== i || !this.isValidJetLag(e) && 1 !== i) && (a = !1), a
					}, 
					t.prototype.formatJetLagForCalendar = function(t) {
						var e = t.jetLag,
							i = t.cityType;
						return 1 === parseInt(i, 10) && (e = 0), 2 !== i && 1 !== i && (e = 0), e
					}, 
					t.prototype.getBizCalendarparams = function(t) {
						var e = t.cityType;
						return {
							recentDaysHaveText: this.getRecentDaysHaveText(t),
							layer: this.getMiniUILayer(e),
							validStartDate: this.getInDayValidStartDate(t),
							jetLag: this.formatJetLagForCalendar(t)
						}
					}, t
				}(),
				o = new n;
			e.a = o
		},
		
		YtmL: function(t, e, i) {
			"use strict";
			var a = i("TToO"),
				n = i("q2rF"),
				//o = i("yvtv"),
				r = i("jnGA"),
				s = window.location.host,
				c = "accounts.ctrip.com";
			s.match(/^m\.ctrip\.com/i) ? c = "accounts.ctrip.com" : s.match(/.uat\.qa/i) ? c = "accounts.uat.qa.nt.ctripcorp.com" : s.match(/.fat/i) || s.match(/.fws/i) ? c = "accounts.fat466.qa.nt.ctripcorp.com" : s.match(/^(localhost|172\.16|127\.0)/i) ? c = "accounts.fat466.qa.nt.ctripcorp.com" : s.match(/\.uat\.ctripqa\.com/i) && (c = "accounts.uat.ctripqa.com");
			var l = {
					MEMBER_LOGIN: "https://" + c + "/H5Login/#login",
					REGISTER: "https://" + c + "/H5Register/"
				},
				d = function(t) {
					return /^http(s)?:\/\/[A-Za-z0-9\-]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\:+!]*([^<>])*$/.test(t)
				},
				h = function(t, e) {
					var i = t,
						a = location,
						n = e && e.param ? e.param : {};
					if(n) {
						var o = n && n.backurl ? decodeURIComponent(n.backurl) : "",
							r = n && n.from ? decodeURIComponent(n.from) : "",
							s = a.protocol + "//" + a.host;
						d(r) ? n.from = r : "" !== r && (n.from = s + r), d(o) ? n.backurl = o : "" !== o && (n.backurl = s + o);
						var c = $.param(n);
						c && (i = i + "?" + c)
					}
					window.location.href = i
				},
				p = 0 === location.pathname.indexOf("/webapp/hotel/thirdpartybooking"),
				u = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return a.b(e, t), e.prototype.initQuickLogin = function(t) {
						var e = this;
						this.mask = new r.a({
							events: {
								"click .js_close_login": e.hideLogin.bind(this)
							}
						})
					}, e.prototype.memberLogin = function(t) {
						h(l.MEMBER_LOGIN, t)
					}, e.prototype.isShowLogin = function(t, e) {
						0 == +t.ReturnCode && ("function" == typeof e.afterLogin && e.afterLogin(), e.hideLogin())
					}, e.prototype.showLogin = function(t) {
						if(this.afterLogin = t, this.mask.show(), this.tabQuickLogin.show(), this.tabQuickLogin.wrapper.removeClass("forced-login"), "booking" === this.pageName)
							if(this.pageData && this.pageData.mustLogin && !p) {
								var e = this.tabQuickLogin.wrapper;
								e.addClass("forced-login");
								var i = function() {
									var t = $(".bk-t").offset();
									e.css({
										position: "absolute",
										bottom: 0,
										height: "auto"
									});
									var i = t.top + t.height + "px";
									e.css("top", i), $(".bk-m").html("").css({
										position: "absolute",
										bottom: 0,
										background: "#fff",
										top: i,
										"z-index": 1,
										width: "100%"
									})
								};
								i(), $(window).resize(function() {
									i()
								})
							} else this.tabQuickLogin.wrapper.css("top", "3.7rem"), this.channelData && this.channelData.isHideHeader && this.tabQuickLogin.wrapper.css("top", "1.7rem");
						this.tabQuickLogin.onChange({
							id: 0
						}), window.scrollTo(0, 0), this.disableScroll()
					}, e.prototype.hideLogin = function() {
						this.tabQuickLogin.hide(), this.mask.hide(), this.afterLogin = null, this.enableScroll()
					}, e
				}(n.a);
			e.a = u
		},
		
		
		ZT2e: function(t, e) {
			function i(t) {
				return t
			}
			t.exports = i
		},
		Zqam: function(t, e) {
			t.exports = '<%\r\nvar exTopBarWrapperClass = \'\';\r\nif(miniUI && miniUI.topBar && miniUI.topBar.visible && miniUI.topBar.html){\r\nexTopBarWrapperClass = \'hotel-select-date-tips\';\r\n};\r\nvar atTimeClass = \'\';\r\nif(showMorningSwitch) {\r\natTimeClass = \'morninghotel\'\r\n}\r\n%> <style type="text/css"> .cui_inoutday_calendar { position: fixed; top: 20%; height: 80%; overflow: hidden; width: 100%; z-index: 99999;/*-webkit-overflow-scrolling: touch;*/ }\r\n.cui_cal_header { height: 2.2rem;}\r\n.cui_cal_header .cm-header .cm-header-icon,.cui_cal_header .cm-header .cm-header-btn { color: #4289ff;padding: 0 1rem 0 0.5rem }\r\n.cui_cal_header .cm-header .cm-header-icon:active { background-color: transparent; }\r\n.cui_cal_header .cm-header {height: 2.25rem;margin-top: -1px; position: relative;z-index: 2; transform: translate3d(0, 0, 0); -webkit-transform: translate3d(0, 0, 0); background-color: #f5f5f5; color: #333;}\r\n.cui_cal_header .cm-header .cm-page-title {top: 50%;transform: translateY(-50%);}\r\n/*.cui_cal_header h1 { padding-right: 3rem; }*/\r\n\r\n.isapp-ios-full .cui_cal_header .cm-header {padding-top: 0}\r\n/*---------------\u65e5\u5386---------------*/\r\n/*Star \u51cc\u6668\u5f00\u5173*/\r\n.calendar-weehours { padding: 0.5rem 1rem; color: #333; font-size: 0.6rem;position: relative;z-index: 2;background-color: #fff }\r\n.calendar-weehours .wh-tab { background-color: #fff; color: #4289ff; border-radius: 0.15rem; border: 1px solid #4289ff; padding: 1px; margin-left: 0.5rem; display: inline-block; vertical-align: middle; }\r\n.calendar-weehours .wh-tab em { padding: 0 0.6rem; line-height: 1.35rem; float: left; border-radius: 0.15rem; }\r\n.calendar-weehours .wh-tab em.current { background-color: #4289ff; color: #fff; }\r\n.calendar-weekday { border-style: solid; border-color: #ddd; border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; }\r\n.calendar-daypast { color: #cfcfcf !important }\r\n.calendar-holiday { color: #4289ff; }\r\n.calendar-weekday { height: 1.25rem; background: #f5f5f5; border-width: 0 0 1px; overflow: hidden;position: relative;z-index: 2 }\r\n.calendar-weekday li { width: 14.28%; float: left; text-align: center; padding: 0.15rem 0; }\r\n.calendar-weekday li:nth-of-type(7n), .calendar-weekday li:nth-of-type(7n+1)/*,.calendar-grid li:nth-of-type(7n),.calendar-grid li:nth-of-type(7n+1)*/{ color: #4289ff; }\r\n.calendar-body { background-color: #fff; }\r\n.calendar-body .calendar-day-checkin { position: absolute; width: 200%; left: -50%; top: -2rem; background: rgba(0, 0, 0, .7); border-radius: 5px; padding: 0.35rem 0; }\r\n.calendar-body .calendar-day-checkin:after { position: absolute;bottom:-0.25rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);content: "";width: 0;height: 0;border-width:0.25rem 0.25rem 0 0.25rem;border-style: solid;border-color:rgba(0,0,0,.7) transparent transparent transparent;}\r\n.calendar-body .calendar-grid li:nth-of-type(7n) .calendar-day-checkin {left:auto;right:0;}\r\n.calendar-body .calendar-grid li:nth-of-type(7n+1) .calendar-day-checkin {left:0;}\r\n.calendar-body .calendar-month { height: 2rem; line-height: 2.2rem; text-align: center; font-weight: 300; font-size: 0.8rem;clear: both; }\r\n.calendar-body .calendar-grid {clear: both; }\r\n.calendar-body .calendar-grid li { width: 14.28%; height: 2rem; padding: 0.2rem 0; font-weight: 400; font-size: 0.7rem; float: left; text-align: center; position: relative; }\r\n.calendar-body .calendar-grid .calendar-note { font-size: 0.55rem }\r\n.calendar-body .calendar-grid .calendar-holiday-h, .calendar-body .calendar-grid .calendar-holiday-w { border-width: 1px; border-style: solid; height: 0.65rem; width: 0.65rem; line-height: 0.7rem; background: #fff; font-size: 0.45rem; position: absolute; right: 0; top: 0; text-align: center; }\r\n.calendar-body .calendar-grid .calendar-holiday-h { color: #4289ff; }\r\n.calendar-body .calendar-grid .calendar-holiday-w { color: #666; }\r\n.calendar-body .calendar-grid li.calendar-current { background: #4289ff; color: #fff }\r\n.calendar-body .calendar-grid li.calendar-range { background: #EBF4FA; }\r\n.calendar-body .calendar-grid .calendar-current .calendar-holiday-w { color: #4289ff; }\r\n.calendar-body .calendar-grid .calendar-current .calendar-holiday-h { color: #4289ff; }\r\n.calendar-toast { width: 8.25rem; padding: 0.5rem; border-radius: 0.25rem; background: rgba(0, 0, 0, .7); color: #fff; text-align: center; position: fixed; left: 50%; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); bottom: 4.25rem; }\r\n.animated80 {-webkit-animation-duration: 80ms;animation-duration: 80ms;-webkit-animation-fill-mode: both;animation-fill-mode: both;} </style> <div class="cui_inoutday_calendar animated fadeInUp js_inoutday_calendar" style="padding-top:0;padding-bottom:3.5rem; background: #fff;"> <div class="cui_cal_header"> <div class="cm-header"> <span class="cm-header-icon fl js_cal_back">\u53d6\u6d88</span> <%if(showMorningSwitch){%> <span class="cm-header-btn fr js_cal_ok">\u5b8c\u6210</span> <%}%> <h1 class="cm-page-title"> <span class="cm-title-l">\u9009\u62e9\u65e5\u671f</span> <%if (isOversea) { %><span class="cm-title-s">\u60a8\u9009\u7684\u662f\u9152\u5e97\u5f53\u5730\u65e5\u671f</span><%}%> </h1> </div> </div> <div class="g-calendar"> <div class="<%=exTopBarWrapperClass%> <%=atTimeClass%>"> <%if(showMorningSwitch){\r\n      var beforSex = "";\r\n      var afterSex ="current";\r\n      if(isMorning){\r\n      beforSex = "current";\r\n      afterSex = "";\r\n      }\r\n\r\n      %> <div class="calendar-weehours"> <b>\u5230\u5e97\u65f6\u95f4</b> <span class="wh-tab"> <em class="<%=beforSex%>" data-ismoring="1">\u4eca\u6668\u516d\u70b9\u524d</em> <em class="<%=afterSex%>" data-ismoring="0">\u4eca\u6668\u516d\u70b9\u540e</em> </span> </div> <%}%> <div class="cui_selcalendartype"></div> <%if(exTopBarWrapperClass){%> <div class="js_top_bar"><%=miniUI.topBar.html%></div> <%}%> <ul class="calendar-weekday"> <%\r\n        var i = 0, day1 = 0;\r\n        for(day1 = 0; day1 < 7; day1++) {\r\n        %> <li><%=weekDayArr[day1] %></li> <%} %> </ul> </div> <div> <div> <section class="calendar-body"> <%\r\n      var changedYear;\r\n      %> <%for(var j = 0; j < displayMonthNum; j++) {\r\n      var changedMonth = month + j;\r\n      var yyy          =  parseInt(( month + j ) / 12);\r\n      if(changedMonth > 11) {\r\n      changedMonth = changedMonth - 12 * yyy;\r\n      };\r\n      changedYear   = year + yyy;\r\n      var d         = new Date(changedYear, changedMonth);\r\n      var days      = $.getDaysOfMonth(d);\r\n      var str_month = MonthClapFn(changedYear, changedMonth);\r\n      %> <%if(str_month.length > 0 ) { %> <h2 class="calendar-month"><%=str_month %></h2> <% } %> <ul class="calendar-grid"> <%\r\n        var sday = (new Date(changedYear, changedMonth, 1)).getDay();\r\n        while(sday>0){\r\n        %> <li></li> <%\r\n        sday--;\r\n        }\r\n\r\n        for(i = 0; i < days; i++) {\r\n        var day             = i + 1;\r\n        var dateObj         = new Date(changedYear, changedMonth, day);\r\n        var str_date        = changedYear.toString() + \'-\' + changedMonth.toString() + \'-\' + day.toString();\r\n\r\n        var itemInfo        = dayItemFn.call(scope,dateObj);\r\n        var innerHtml       = itemInfo.innerHtml;\r\n        var parentDOMClass  = itemInfo.parentDOMClass;\r\n\r\n        %> <li class="js_calendar_item cui_calendar_item <%=parentDOMClass%>" data-date="<%=str_date%>"> <%=innerHtml%> </li> <% } %> </ul> <%} %> </section> </div> </div> </div> <%if(miniUI && miniUI.layer && miniUI.layer.visible){%> <div class="calendar-day-checkin js_day_toast" style="display:none"> <div><%=curtext%></div> </div> <%}%> <%if(showNav){%> <div class="cm-calendar-ft"> <ul class="cm-calendar-quick-nav"> <%if(footNavDate){\r\n      var count = 0;\r\n      for(var i in footNavDate){\r\n      if(count === 0){%> <li class="active w_date_nav_click" data-date="<%=footNavDate[i]%>"><%=i%></li> <%}else{%> <li class="w_date_nav_click" data-date="<%=footNavDate[i]%>"><%=i%></li> <%}\r\n      count++;\r\n      }%> <%}%> </ul> </div> <%}%> </div> '
		},
		"b+im": function(t, e, i) {
			"use strict";

			function a(t) {
				var e = document.createElement("div"),
					i = document.createElement("div");
				return e.style.cssText = "position:absolute;z-index:9999", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px", "y" === t ? (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", i.style.height = "100%") : (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", i.style.width = "100%"), e.style.cssText += ";overflow:hidden", e.appendChild(i), e
			}

			function n(t, e) {
				this.wrapper = "string" == typeof e.el ? document.querySelector(e.el) : e.el, this.indicator = this.wrapper.children[0], this.scrollType = e.scrollType, this.wrapperStyle = this.wrapper.style, this.indicatorStyle = this.indicator.style, this.scroller = t, this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.wrapperStyle[l.style.transform] = this.scroller.translateZ, this.wrapperStyle[l.style.transitionDuration] = "0ms", this.wrapperStyle.opacity = "0"
			}
			var o = i("hz+3"),
				r = i.n(o),
				//s = i("YqDm"),
				//c = i.n(s),
				l = function() {
					function t(t) {
						return !1 !== a && ("" === a ? t : a + t.charAt(0).toUpperCase() + t.substr(1))
					}
					var e = {},
						i = document.createElement("div").style,
						a = function() {
							for(var t = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, a = t.length; e < a; e++)
								if(t[e] + "ransform" in i) return t[e].substr(0, t[e].length - 1);
							return !1
						}();
					return e.getTime = Date.now || function() {
						return(new Date).getTime()
					}, e.addEvent = function(t, e, i, a) {
						t[0] && t !== window.top && (t = t[0]), t.addEventListener(e, i, !!a)
					}, e.removeEvent = function(t, e, i, a) {
						t[0] && t !== window.top && (t = t[0]), t.removeEventListener(e, i, !!a)
					}, e.momentum = function(t, e, i, a, n, o) {
						var r, s, c = t - e,
							l = Math.abs(c) / i;
						return o = o || 0, r = t + l * l / .0012 * (c < 0 ? -1 : 1), s = l / 6e-4, r < a ? (r = n ? a - n / 2.5 * (l / 8) : a, c = Math.abs(r - t), s = c / l) : r > 0 + o && (r = n ? n / 2.5 * (l / 8) + o : 0, c = Math.abs(t) + r, s = c / l), {
							destination: Math.round(r),
							duration: s
						}
					}, $.extend(e, {
						hasTouch: "ontouchstart" in window
					}), $.extend(e.style = {}, {
						transform: t("transform"),
						transitionTimingFunction: t("transitionTimingFunction"),
						transitionDuration: t("transitionDuration"),
						transitionDelay: t("transitionDelay"),
						transformOrigin: t("transformOrigin")
					}), $.extend(e.eventType = {}, {
						touchstart: 1,
						touchmove: 1,
						touchend: 1,
						mousedown: 2,
						mousemove: 2,
						mouseup: 2
					}), $.extend(e.ease = {}, {
						quadratic: {
							style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
							fn: function(t) {
								return t * (2 - t)
							}
						},
						circular: {
							style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
							fn: function(t) {
								return t -= 1, Math.sqrt(1 - t * t)
							}
						},
						back: {
							style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
							fn: function(t) {
								return(t -= 1) * t * (5 * t + 4) + 1
							}
						},
						bounce: {
							style: "",
							fn: function(t) {
								return t /= 1, t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
							}
						},
						elastic: {
							style: "",
							fn: function(t) {
								return 0 === t ? 0 : 1 === t ? 1 : .4 * Math.pow(2, -10 * t) * Math.sin((t - .22) / 4 * (2 * Math.PI) / .22) + 1
							}
						}
					}), e
				}();
			n.prototype = {
				transitionTime: function(t) {
					t = t || 0, this.indicatorStyle[l.style.transitionDuration] = t + "ms"
				},
				transitionTimingFunction: function(t) {
					this.indicatorStyle[l.style.transitionTimingFunction] = t
				},
				refresh: function() {
					if(this.transitionTime(), "y" === this.scrollType) {
						this.wrapperHeight = this.wrapper.clientHeight;
						var t = this.scroller.scrollerHeight || this.wrapperHeight || 1,
							e = this.wrapperHeight * this.wrapperHeight / t;
						this.indicatorHeight = Math.max(Math.round(e), 8), this.indicatorStyle.height = this.indicatorHeight + "px", this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY
					} else this.wrapperWidth = this.wrapper.clientWidth, this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px", this.maxPosX = this.wrapperWidth - this.indicatorWidth, this.sizeRatioX = this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
					this.updatePosition()
				},
				destroy: function() {
					$(this.wrapper).remove()
				},
				updatePosition: function() {
					var t = "x" === this.scrollType && Math.round(this.sizeRatioX * this.scroller.x) || 0,
						e = "y" === this.scrollType && Math.round(this.sizeRatioY * this.scroller.y) || 0;
					this.x = t, this.y = e, this.indicatorStyle[l.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ
				},
				fade: function(t, e) {
					if(!e || this.visible) {
						var i = this;
						clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
						var a = t ? 250 : 500,
							n = t ? 0 : 300;
						t = t ? "1" : "0", this.wrapperStyle[l.style.transitionDuration] = a + "ms", this.fadeTimeout = setTimeout(function(t) {
							i.wrapperStyle.opacity = t, i.visible = +t
						}(t), n)
					}
				}
			};
			var d = function() {
				function t(t) {
					var e = this;
					if(this.wrapper = "string" == typeof t.wrapper ? $(t.wrapper) : t.wrapper, this.scroller = "string" == typeof t.scroller ? $(t.scroller) : t.scroller, !t.wrapper[0] || !t.scroller[0]) throw new Error("param error");
					this.swrapper = this.wrapper, this.wrapper = this.wrapper[0], this.scroller = this.scroller[0], this.scrollerStyle = this.scroller.style, this.options = {
						step: !1,
						scrollbars: !0,
						startY: 0,
						preventDefault: !1,
						scrollOffset: 0,
						scrollType: "y",
						bounceTime: 400,
						bounceEasing: l.ease.circular,
						bounce: !0,
						momentum: !0,
						bindToWrapper: !0,
						resizePolling: 60,
						startX: 0
					}, Object.keys(t || {}).forEach(function(i) {
						({}).hasOwnProperty.call(t, i) && (e.options[i] = t[i])
					}), this.translateZ = " translateZ(0)", this.x = 0, this.y = 0, this._events = {}, this.dir = "forward", this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
				}
				return t.prototype._init = function() {
					this._initEvents(), this.options.scrollbars && this._initIndicator()
				}, t.prototype.refresh = function() {
					this.wrapperWidth = this.wrapper.clientWidth, this.scrollerWidth = this.scroller.offsetWidth, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.maxScrollX = this.maxScrollX - this.options.scrollOffset, this.maxScrollY = this.maxScrollY - this.options.scrollOffset, "y" === this.options.scrollType ? (this.maxScrollX = 0, 0 === this.options.scrollOffset && (this.maxScrollY = Math.min(this.maxScrollY, 0))) : (this.maxScrollY = 0, 0 === this.options.scrollOffset && (this.maxScrollX = Math.min(this.maxScrollX, 0))), this.endTime = 0, this._execEvent("refresh"), this.resetPosition()
				}, t.prototype._initEvents = function(t) {
					var e = t ? l.removeEvent : l.addEvent,
						i = this.options.bindToWrapper ? this.wrapper : window;
					e(window, "orientationchange", this), e(window, "resize", this), l.hasTouch ? (e(this.wrapper, "touchstart", this), e(i, "touchmove", this), e(i, "touchcancel", this), e(i, "touchend", this)) : (e(this.wrapper, "mousedown", this), e(i, "mousemove", this), e(i, "mousecancel", this), e(i, "mouseup", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
				}, t.prototype.canStart = function(t) {
					return !0
				}, t.prototype._start = function(t) {
					if(this.enabled && (!this.initiated || l.eventType[t.type] === this.initiated) && this.canStart(t)) {
						var e, i = t.touches ? t.touches[0] : t;
						if(this.initiated = l.eventType[t.type], this.moved = !1, this.distY = 0, this._transitionTime(), this.startTime = l.getTime(), this.isInTransition) {
							this.isInTransition = !1, e = this.getComputedPosition();
							var a = Math.round(e.x),
								n = Math.round(e.y);
							this._translate(a, n), this._execEvent("scrollEnd")
						}
						this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this._execEvent("beforeScrollStart"), this.options.preventDefault && t.preventDefault()
					}
				}, t.prototype._move = function(t) {
					if(this.enabled && l.eventType[t.type] === this.initiated && this.canStart(t)) {
						var e, i, a = t.touches ? t.touches[0] : t,
							n = a.pageX - this.pointX,
							o = a.pageY - this.pointY,
							r = l.getTime();
						if(!("x" === this.options.scrollType && Math.abs(o) > Math.abs(n))) {
							var s, c = this.x,
								d = this.y,
								h = this.x + n,
								p = this.y + o,
								u = Math.abs(n) >= Math.abs(o);
							s = u ? c - h > 0 ? "left" : "right" : d - p > 0 ? "up" : "down", this.pointX = a.pageX, this.pointY = a.pageY, this.distX += n, this.distY += o;
							var f = Math.abs(this.distX),
								y = Math.abs(this.distY);
							if(!(r - this.endTime > 300 && f < 10 && y < 10)) {
								"y" === this.options.scrollType ? n = 0 : o = 0, this.flipDir = s, e = this.x + n, i = this.y + o, (e > this.options.scrollOffset || e < this.maxScrollX) && (e = this.options.bounce ? this.x + n / 3 : e > this.options.scrollOffset ? this.options.scrollOffset : this.maxScrollX), (i > this.options.scrollOffset || i < this.maxScrollY) && (i = this.options.bounce ? this.y + o / 3 : i > this.options.scrollOffset ? this.options.scrollOffset : this.maxScrollY), this.moved || this._execEvent("scrollStart"), this.moved = !0;
								var m = document.activeElement;
								if("input" === m.nodeName.toLowerCase()) return m.blur(), this.disable(), void setTimeout($.proxy(function() {
									this.enable()
								}, this), 250);
								e > this.x || i > this.y ? this.dir = "forward" : this.dir = "back", this._translate(e, i, !0), t.preventDefault()
							}
						}
					}
				}, t.prototype._end = function(t) {
					if(this.enabled && l.eventType[t.type] === this.initiated) {
						var e, i, a = l.getTime() - this.startTime,
							n = Math.round(this.x),
							o = Math.round(this.y),
							r = Math.abs(n - this.startX),
							s = Math.abs(o - this.startY),
							c = 0,
							d = "";
						if(this.isInTransition = 0, this.initiated = 0, this.endTime = l.getTime(), !this.resetPosition(this.options.bounceTime)) {
							if(this.scrollTo(n, o), !this.moved) return void this._execEvent("scrollCancel");
							if(this.options.momentum && a < 300 && (e = l.momentum(this.x, this.startX, a, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.scrollOffset), i = l.momentum(this.y, this.startY, a, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.scrollOffset), n = e.destination, o = i.destination, c = "y" === this.options.scrollType ? Math.max(0, i.duration) : Math.max(e.duration, 0), this.isInTransition = 1), r = Math.abs(n - this.startX), s = Math.abs(o - this.startY), this.options.step) {
								var h = n,
									p = o,
									u = Math.abs(h),
									f = Math.abs(p),
									y = h > 0 ? 1 : -1,
									m = p > 0 ? 1 : -1,
									g = this.options.step - r % this.options.step,
									v = this.options.step - s % this.options.step;
								Math.abs(v - this.options.step) < 10 && (v = 0), "forward" === this.dir ? (h = h > 0 ? u + g : u - g, p = p > 0 ? f + v : f - v) : (h = h > 0 ? u - g : u + g, p = p > 0 ? f - v : f + v), h % this.options.step != 0 && (h = Math.round(h / this.options.step) * this.options.step), p % this.options.step != 0 && (p = Math.round(p / this.options.step) * this.options.step), h *= y, p *= m, c = this.options.stepTime || 200, ("x" === this.options.scrollType && r < 50 || "y" === this.options.scrollType && s < 50) && (c = 100), n = h, o = p, d = this.options.bounceEasing
							}
							if(n !== this.x || o !== this.y) return(n > this.options.scrollOffset || n < this.maxScrollX || o > this.options.scrollOffset || o < this.maxScrollY) && (d = l.ease.quadratic), "0" === c && (c = 1), void this.scrollTo(n, o, c, d);
							this._execEvent("scrollEnd")
						}
					}
				}, t.prototype._resize = function() {
					var t = this;
					clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
						t.refresh()
					}, this.options.resizePolling)
				}, t.prototype._transitionTimingFunction = function(t) {
					this.scrollerStyle[l.style.transitionTimingFunction] = t, this.indicator && this.indicator.transitionTimingFunction(t)
				}, t.prototype._transitionTime = function(t) {
					t = t || 0, this.scrollerStyle[l.style.transitionDuration] = t + "ms", this.indicator && this.indicator.transitionTime(t)
				}, t.prototype.getComputedPosition = function() {
					var t = window.getComputedStyle(this.scroller, null);
					return t = t[l.style.transform].split(")")[0].split(", "), {
						x: +(t[12] || t[4]),
						y: +(t[13] || t[5])
					}
				}, t.prototype._initIndicator = function() {
					var t = a("y" === this.options.scrollType ? "x" : "y");
					this.wrapper.appendChild(t), this.indicator = new n(this, {
						el: t,
						scrollType: this.options.scrollType
					}), this.on("scrollEnd", function() {
						this.indicator.fade()
					});
					var e = this;
					this.on("scrollCancel", function() {
						e.indicator.fade()
					}), this.on("scrollStart", function() {
						e.indicator.fade(1)
					}), this.on("beforeScrollStart", function() {
						e.indicator.fade(1, !0)
					}), this.on("refresh", function() {
						e.indicator.refresh()
					})
				}, t.prototype._translate = function(t, e) {
					"y" === this.options.scrollType ? t = 0 : e = 0, this.scrollerStyle[l.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ, this.x = t, this.y = e, this.options.scrollbars && this.indicator.updatePosition()
				}, t.prototype.resetPosition = function(t) {
					var e = this.x,
						i = this.y;
					return t = t || 0, "x" === this.options.scrollType ? this.x >= this.options.scrollOffset ? e = this.options.scrollOffset : this.x < this.maxScrollX && (e = this.maxScrollX) : this.y >= this.options.scrollOffset ? i = this.options.scrollOffset : this.y < this.maxScrollY && (i = this.maxScrollY), !("x" === this.options.scrollType && e === this.x || "y" === this.options.scrollType && i === this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
				}, t.prototype.scrollTo = function(t, e, i, a) {
					a = a || l.ease.circular, this.isInTransition = i > 0, i && !a.style || (this._transitionTimingFunction(a.style), this._transitionTime(i), this._translate(t, e))
				}, t.prototype.disable = function() {
					this.enabled = !1
				}, t.prototype.enable = function() {
					this.enabled = !0
				}, t.prototype.on = function(t, e) {
					this._events[t] || (this._events[t] = []), this._events[t].push(e)
				}, t.prototype.off = function(t, e) {
					r()(e) ? this._events[t] = [] : this._events[t] = c()(this._events[t], function(t) {
						return t === e
					})
				}, t.prototype._execEvent = function(t) {
					if(this._events[t]) {
						var e = 0,
							i = this._events[t].length;
						if(i)
							for(; e < i; e++) this._events[t][e].call(this)
					}
				}, t.prototype.destroy = function() {
					this.TIMERRES && clearInterval(this.TIMERRES), this._initEvents(!0), this._execEvent("destroy"), this.indicator && this.indicator.destroy()
				}, t.prototype._transitionEnd = function(t) {
					t.target === this.scroller && this.isInTransition && (this._transitionTime(), this._execEvent("animatEnd"), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
				}, t.prototype.handleEvent = function(t) {
					switch(t.type) {
						case "touchstart":
						case "mousedown":
							this._start(t);
							break;
						case "touchmove":
						case "mousemove":
							this._move(t);
							break;
						case "touchend":
						case "mouseup":
						case "touchcancel":
						case "mousecancel":
							this._end(t);
							break;
						case "orientationchange":
						case "resize":
							this._resize();
							break;
						case "transitionend":
						case "webkitTransitionEnd":
						case "oTransitionEnd":
						case "MSTransitionEnd":
							this._transitionEnd(t)
					}
				}, t
			}();
			d.utils = l, e.a = d
		},		
		bGc4: function(t, e, i) {
			function a(t) {
				return null != t && o(t.length) && !n(t)
			}
			var n = i("gGqR"),
				o = i("Rh28");
			t.exports = a
		},		
		d9bj: function(t, e) {
			t.exports = '<div class="cp-h5-main cp-h5-lizard" style="position: absolute; left:0; right:0; height:100%; width:100%; top:0; bottom:0;"> <div class="loading-box2" style="position: fixed;left:50%;top:50%;margin-left:-56px;margin-top: -56px; width:100%;"> <div class="loading-layer2" style="background-color: #fff;width: 112px;height: 27px;padding-top: 85px;border-radius: 7px;z-index:10000;color: #666;font-size: 12px;text-align: center;"> <canvas class="loading-layer2-before" style="position: absolute;width: 72px;height: 72px;top: 10px;left: 20px;"></canvas> <p id="cp-h5-text">\u6e38\u6e38\u52aa\u529b\u52a0\u8f7d\u4e2d</p> </div> </div> </div>'
		},
		
		eJMW: function(t, e, i) {
			var a = i("8AZL"),
				n = i("YkxI"),
				o = i("Xu6E"),
				r = n(function(t, e) {
					try {
						return a(t, void 0, e)
					} catch(t) {
						return o(t) ? t : new Error(t)
					}
				});
			t.exports = r
		},
		"eO/s": function(t, e) {
			t.exports = '<div class="cui-layer-padding"> <style> .cui-toast .cui-layer-padding {\r\n      width         : 90%;\r\n      margin        : 0 auto;\r\n      line-height   : 1.2rem;\r\n      border-radius : 0.25rem;\r\n      background    : rgba(0, 0, 0, .7);\r\n      padding       : 0.5rem 0.75rem;\r\n      color         : #fff;\r\n      font-weight   : 700;\r\n      text-align    : center;\r\n      word-break    : break-all\r\n    } </style> <div class="cui-layer-content"> <%=content %></div> </div> '
		},
		
		
		f931: function(t, e) {
			function i(t, e) {
				return function(i) {
					return t(e(i))
				}
			}
			t.exports = i
		},
		fdcG: function(t, e) {
			t.exports = '<ul class="cui-tab-mod"> <style> .cui-tab-mod {\r\n      display          : -webkit-box;\r\n      display          : -moz-box;\r\n      display          : -ms-flexbox;\r\n      display          : -webkit-flex;\r\n      display          : flex;\r\n      height           : 2.15rem;\r\n      line-height      : 2.15rem;\r\n      border-bottom    : #bcbcbc 1px solid;\r\n      background-color : #fafafa;\r\n      color            : #666;\r\n      font-size        : 0.75rem;\r\n      position         : relative;\r\n      display          : table\\9;\r\n      width            : 100%\r\n    }\r\n    .cui-tab-mod li {\r\n      text-align       : center;\r\n      -webkit-box-flex : 1;\r\n      -moz-box-flex    : 1;\r\n      -webkit-flex     : 1;\r\n      -ms-flex         : 1;\r\n      flex             : 1;\r\n      display          : table-cell\\9\r\n    }\r\n    .cui-tab-mod li.cui-tab-current {\r\n      color : #4289ff\r\n    }\r\n    .cui-tab-mod .cui-tab-scrollbar {\r\n      position           : absolute;\r\n      left               : 0;\r\n      height             : 0.2rem;\r\n      bottom             : -0.05rem;\r\n      background-color   : #4289ff;\r\n      -webkit-transition : -webkit-transform 300ms ease-in-out;\r\n      -moz-transition    : -moz-transform 300ms ease-in-out;\r\n      -ms-transition     : -ms-transform 300ms ease-in-out;\r\n      transition         : transform 300ms ease-in-out;\r\n      z-index            : -1\r\n    }\r\n    .cui-tabnum2 {\r\n      width : 50%\r\n    }\r\n    .cui-tabnum3 {\r\n      width : 33.33333%\r\n    }\r\n    .cui-tabnum4 {\r\n      width : 25%\r\n    }\r\n    .cui-tabnum5 {\r\n      width : 20%\r\n    }\r\n    .cui-tabnum6 {\r\n      width : 16.66666%\r\n    }\r\n    .cui-tab-mod li.cui-tab-current ~ .cui-tab-scrollbar {\r\n      z-index : 2\r\n    }\r\n    .cui-tab-mod li:nth-of-type(1).cui-tab-current ~ .cui-tab-scrollbar {\r\n      -webkit-transform : translate3d(0, 0, 0);\r\n      -moz-transform    : translate3d(0, 0, 0);\r\n      -ms-transform     : translate3d(0, 0, 0);\r\n      transform         : translate3d(0, 0, 0)\r\n    }\r\n    .cui-tab-mod li:nth-of-type(2).cui-tab-current ~ .cui-tab-scrollbar {\r\n      -webkit-transform : translate3d(100%, 0, 0);\r\n      -moz-transform    : translate3d(100%, 0, 0);\r\n      -ms-transform     : translate3d(100%, 0, 0);\r\n      transform         : translate3d(100%, 0, 0)\r\n    }\r\n    .cui-tab-mod li:nth-of-type(3).cui-tab-current ~ .cui-tab-scrollbar {\r\n      -webkit-transform : translate3d(200%, 0, 0);\r\n      -moz-transform    : translate3d(200%, 0, 0);\r\n      -ms-transform     : translate3d(200%, 0, 0);\r\n      transform         : translate3d(200%, 0, 0)\r\n    }\r\n    .cui-tab-mod li:nth-of-type(4).cui-tab-current ~ .cui-tab-scrollbar {\r\n      -webkit-transform : translate3d(300%, 0, 0);\r\n      -moz-transform    : translate3d(300%, 0, 0);\r\n      -ms-transform     : translate3d(300%, 0, 0);\r\n      transform         : translate3d(300%, 0, 0)\r\n    }\r\n    .cui-tab-mod li:nth-of-type(5).cui-tab-current ~ .cui-tab-scrollbar {\r\n      -webkit-transform : translate3d(400%, 0, 0);\r\n      -moz-transform    : translate3d(400%, 0, 0);\r\n      -ms-transform     : translate3d(400%, 0, 0);\r\n      transform         : translate3d(400%, 0, 0)\r\n    }\r\n    .cui-tab-mod li:nth-of-type(6).cui-tab-current ~ .cui-tab-scrollbar {\r\n      -webkit-transform : translate3d(500%, 0, 0);\r\n      -moz-transform    : translate3d(500%, 0, 0);\r\n      -ms-transform     : translate3d(500%, 0, 0);\r\n      transform         : translate3d(500%, 0, 0)\r\n    }\r\n    .cui-tab-mod li:last-of-type.cui-tab-current + .cui-tab-scrollbar.cui-tabnum2 {\r\n      -webkit-transform : translate3d(100%, 0, 0);\r\n      -moz-transform    : translate3d(100%, 0, 0);\r\n      -ms-transform     : translate3d(100%, 0, 0);\r\n      transform         : translate3d(100%, 0, 0)\r\n    }\r\n    .cui-tab-mod li:last-of-type.cui-tab-current + .cui-tab-scrollbar.cui-tabnum3 {\r\n      -webkit-transform : translate3d(200%, 0, 0);\r\n      -moz-transform    : translate3d(200%, 0, 0);\r\n      -ms-transform     : translate3d(200%, 0, 0);\r\n      transform         : translate3d(200%, 0, 0)\r\n    }\r\n    .cui-tab-mod li:last-of-type.cui-tab-current + .cui-tab-scrollbar.cui-tabnum4 {\r\n      -webkit-transform : translate3d(300%, 0, 0);\r\n      -moz-transform    : translate3d(300%, 0, 0);\r\n      -ms-transform     : translate3d(300%, 0, 0);\r\n      transform         : translate3d(300%, 0, 0)\r\n    }\r\n    .cui-tab-mod li:last-of-type.cui-tab-current + .cui-tab-scrollbar.cui-tabnum5 {\r\n      -webkit-transform : translate3d(400%, 0, 0);\r\n      -moz-transform    : translate3d(400%, 0, 0);\r\n      -ms-transform     : translate3d(400%, 0, 0);\r\n      transform         : translate3d(400%, 0, 0)\r\n    }\r\n    .cui-tab-mod li:last-of-type.cui-tab-current + .cui-tab-scrollbar.cui-tabnum6 {\r\n      -webkit-transform : translate3d(500%, 0, 0);\r\n      -moz-transform    : translate3d(500%, 0, 0);\r\n      -ms-transform     : translate3d(500%, 0, 0);\r\n      transform         : translate3d(500%, 0, 0)\r\n    } </style> <%for(var i = 0, len = data.length; i < len; i++) { %> <li data-key="<%=data[i].id %>" data-ubt-key="<%= data[i].ubtkey %>" data-index="<%=i%>" <%if(i == index){ %> class=" <%=curClass %>" <%} %>> <%=data[i].name %></li> <%} %> <i class="cui-tab-scrollbar cui-tabnum<%=len %>"></i> </ul> '
		},
		gFDN: function(t, e) {},		
		
		"hz+3": function(t, e) {
			function i(t) {
				return void 0 === t
			}
			t.exports = i
		},
		
		jnGA: function(t, e, i) {
			"use strict";
			var a = i("TToO"),
				n = i("0tEz"),
				o = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return a.b(e, t), e.prototype.create = function() {
						t.prototype.create.call(this), this.$el.addClass("cui-mask")
					}, e.prototype.addEvent = function() {
						var e = this;
						t.prototype.addEvent.call(this), this.on("onHide", function() {
							e.onHide()
						}), this.on("onShow", function() {
							e.onShow()
						})
					}, e.prototype.onHide = function() {
						this.doHide()
					}, e.prototype.onShow = function() {
						this.doShow()
					}, e.prototype.doHide = function() {
						$(window).off(".mask" + this.id)
					}, e.prototype.doShow = function() {
						this.setRootStyle(), this.setzIndexTop(), $(window).off(".mask" + this.id), $(window).on("resize.mask" + this.id, $.proxy(function() {
							this.setRootStyle(), $.os && $.os.android && window.scrollTo(0, window.scrollY + 10)
						}, this))
					}, e.prototype.setRootStyle = function() {
						var t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
						this.$el.css({
							width: "100%",
							height: t + "px",
							position: "absolute",
							left: "0px",
							top: "0px"
						})
					}, e.prototype.resetDefaultProperty = function() {
						this.animateOutClass = "cm-overlay-out", this.events = {}, this.addEvents({
							touchmove: this._preventDefault.bind(this)
						})
					}, e
				}(n.a);
			e.a = o
		},
		kXZP: function(t, e, i) {
			function a(t) {
				return n(2, t)
			}
			var n = i("tPu2");
			t.exports = a
		},
		"kbi+": function(t, e, i) {
			/*var a = i("eHwr"),
				n = i("KgVm"),
				o = a(n);
			t.exports = o*/
		},
		ktak: function(t, e, i) {
			var a = i("f931"),
				n = a(Object.keys, Object);
			t.exports = n
		},
		ktnU: function(t, e, i) {
			function a(t, e) {
				return n(e, function(e) {
					return t[e]
				})
			}
			var n = i("Hxdr");
			t.exports = a
		},
		
		l4he: function(t, e, i) {
			function a(t) {
				return t = o(t), t && s.test(t) ? t.replace(r, n) : t
			}
			var //n = i("eAIx"),
				o = i("ZT2e"),
				r = /[&<>"']/g,
				s = RegExp(r.source);
			t.exports = a
		},
		
		p3b7: function(t, e, i) {
			function a(t, e, i) {
				var a = u.imports._.templateSettings || u;
				i && d(t, e, i) && (e = void 0), t = f(t), e = n({}, e, a);
				var _, S, x = n({}, e.imports, a.imports),
					k = h(x),
					T = r(x, k),
					D = 0,
					C = e.interpolate || b,
					I = "__p += '",
					j = RegExp((e.escape || b).source + "|" + C.source + "|" + (C === p ? v : b).source + "|" + (e.evaluate || b).source + "|$", "g"),
					A = "sourceURL" in e ? "//# sourceURL=" + e.sourceURL + "\n" : "";
				t.replace(j, function(e, i, a, n, o, r) {
					return a || (a = n), I += t.slice(D, r).replace(w, c), i && (_ = !0, I += "' +\n__e(" + i + ") +\n'"), o && (S = !0, I += "';\n" + o + ";\n__p += '"), a && (I += "' +\n((__t = (" + a + ")) == null ? '' : __t) +\n'"), D = r + e.length, e
				}), I += "';\n";
				var E = e.variable;
				E || (I = "with (obj) {\n" + I + "\n}\n"), I = (S ? I.replace(y, "") : I).replace(m, "$1").replace(g, "$1;"), I = "function(" + (E || "obj") + ") {\n" + (E ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (_ ? ", __e = _.escape" : "") + (S ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + I + "return __p\n}";
				var O = o(function() {
					return Function(k, A + "return " + I).apply(void 0, T)
				});
				if(O.source = I, l(O)) throw O;
				return O
			}
			var n = i("zZmx"),
				o = i("eJMW"),
				r = i("ktnU"),			
				c = i("9lab"),
				l = i("Xu6E"),			
				h = i("ktak"),
				p = i("/Rdg"),
				u = i("QUuP"),
				f = i("ZT2e"),
				y = /\b__p \+= '';/g,
				m = /\b(__p \+=) '' \+/g,
				g = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
				v = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
				b = /($^)/,
				w = /['\n\r\u2028\u2029\\]/g;
			t.exports = a
		},
		
		q2rF: function(t, e, i) {
			"use strict";
			function a(t) {
				t = t || window.event, t.preventDefault && t.preventDefault(), t.returnValue = !1
			}
			var n = i("TToO"),
				o = i("BUAs"),
				r = i.n(o),
				s = i("za/N"),
				c = i("UoIM"),			
				h = i("LpuJ"),
				p = i("QVf9"),
				u = i("IJ3o"),
				f = i("+b/N"),
				y = i("yKmV"),			
				//v = i("wQSy"),
				b = function(t) {
					function e() {
						return t.call(this, {
							key: "P_HOTEL_BURN_AFTER_READING",
							lifeTime: "1H",
							defaultData: {}
						}) || this
					}
					return n.b(e, t), e.prototype.setOneMessage = function(t, e) {
						this.setAttr(t, e)
					}, e.prototype.getOneMessage = function(t) {
						var e = this.getAttr(t);
						return e && this.setAttr(t, ""), e
					}, e
				}(f.b),
				w = new b,
				_ = (new f.b({
					key: "P_HOTEL_QUERYSTORE",
					lifeTime: "2D",
					isUserData: !0,
					defaultData: {}
				})),
				S = function(t) {
					function e() {
						for(var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
						var a = t.apply(this, e) || this;
						return a.morningStore = _, a.loading = s.a, a.$header = $("#header"), a.pageData = "undefined" != typeof __HOTEL_PAGE_DATA__ ? __HOTEL_PAGE_DATA__ : {}, a.appData = "undefined" != typeof __HOTEL_COMMON_DATA__ ? __HOTEL_COMMON_DATA__ : {}, a.channelData = "undefined" != typeof __HOTEL_CHANNEL_DATA__ ? __HOTEL_CHANNEL_DATA__ : {}, a.pageId = $("#page_id").val(), $('SCRIPT[id="pageData"]').remove(), a.importHeader(), a
					}
					return n.b(e, t), e.prototype.importHeader = function() {
						//l.a.vendor.is("CTRIP") ? this.headerview = i.e(1).then(i.bind(null, "2Vyt")) : this.headerview = i.e(0).then(i.bind(null, "pUt8"))
					}, e.prototype.ready = function() {
						/*if(l.a.vendor.is("CTRIP")) {
							new u.default.Fn("set_navbar_hidden").run(!1)
						}*/
						h.a.confirmForward(this.pageName), h.a.addHistory(this.getUrlParams("pageName") || this.pageName, location.href, 2), this.events = this.getEvents(), this.bindEvents(), this.channelData && 1 == this.channelData.isHideHeader || this.setupHeader(), this.setupPageScroll(), this.getABResult(), this.recordUserPageFlow()
					}, e.prototype.getABResult = function() {
						
					}, e.prototype.setupHeader = function() {
						var t = this;
						
					}, e.prototype.setupPageScroll = function() {
						var t = this,
							e = $(window);
						if(this.getPageScrollHandlers) {
							var i = this.getPageScrollHandlers() || {},
								a = [];
							Object.keys(i || {}).forEach(function(e) {
								"function" == typeof i[e] && ("scrollBottom" === e ? a.push(function() {
									return Object(d.a)(i.scrollBottom.bind(t))
								}) : "scrollTop" === e ? a.push(function() {
									return Object(d.b)(i.scrollTop.bind(t))
								}) : a.push(i[e].bind(t)))
							});
							var n = function() {
								a.forEach(function(t) {
									return t()
								})
							};
							e.off("scroll", n).on("scroll", n), e.off("touchmove", n).on("touchmove", n)
						}
					}, e.prototype.getEvents = function() {}, 
					
					e.prototype.getPageScrollhandlerMap = function() {}, 
					e.getenvHost = function() {
						var t = location.host;
						return t.match(/m.fat/i) || t.match(/^m.test/i) ? location.protocol + "//w-hotel-m.fat369.qa.nt.ctripcorp.com" : location.origin
					}, 
					e.prototype.getUrlParams = function(t, e) {
						if(this.result) {
							if(t) {
								var i = this.result[t.toLowerCase()] || "";
								return e ? i : i.toLowerCase()
							}
							return this.result
						}
						var a = decodeURIComponent(location.search),
							n = [];
						return this.result = {}, t && (t = t.toLowerCase()), a = a.replace(/\?/, ""), a && (n = a.split("&"), n.forEach(function(t) {
							if(t) {
								var e = t.split("=");
								this.result[e[0].toLowerCase()] = e[1] && e[1]
							}
						}, this)), this.getUrlParams(t)
					}, e.prototype.showloading = function() {
						this.loading.show()
					}, e.prototype.hideloading = function() {
						this.loading.hide()
					}, e.prototype.disableScroll = function() {
						try {
							$(window).bind("wheel", a), $(window).bind("touchmove", a)
						} catch(t) {}
					}, e.prototype.enableScroll = function() {
						try {
							$(window).unbind("wheel", a), $(window).unbind("touchmove", a)
						} catch(t) {}
					}, e.prototype.back = function(t) {
						Object(p.a)(this.pageName, t)
					}, e.prototype.backV2 = function(t) {
						Object(p.b)(this.pageName, t)
					}, e.prototype.setOneMessage = function(t, e) {
						w.setOneMessage(t, e)
					}, e.prototype.getOneMessage = function(t) {
						return w.getOneMessage(t)
					}, e.prototype.recordUserPageFlow = function(t) {
						try {
							var e = new m.a(this.appData.islanding);
							this.pageflow = e.createPage(this.appData.pageid, t)
						} catch(t) {}
					}, e.prototype.recordUserActionFlow = function(t, e) {
						try {
							this.pageflow.addAction(t, e)
						} catch(t) {}
					}, e
				}(c.a);
			
			e.a = S
		},
		q3Ew: function(t, e, i) {
			"use strict";
			var a = i("TToO"),
				n = i("0tEz"),				
				s = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return a.b(e, t), e.prototype.propertys = function() {
						t.prototype.propertys.call(this), this.template = r.a, this.needRootWrapper = !1
					}, e.prototype.addEvent = function() {
						var e = this;
						t.prototype.addEvent.call(this), this.addEvents({
							"click .js_group_type": function(t) {
								e.onLetterClick(t)
							}
						})
					}, e.prototype.onLetterClick = function(t) {
						var e = $(t.currentTarget);
						this.trigger("onGroupJumping", e.data("val"))
					}, e
				}(n.a);
			e.a = s
		},		
		
		t8rQ: function(t, e) {
			function i(t) {
				var e = [];
				if(null != t)
					for(var i in Object(t)) e.push(i);
				return e
			}
			t.exports = i
		},
		
		tPu2: function(t, e, i) {
			function a(t, e) {
				var i;
				if("function" != typeof e) throw new TypeError(o);
				return t = n(t),
					function() {
						return --t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = void 0), i
					}
			}
			var n = i("5Zxu"),
				o = "Expected a function";
			t.exports = a
		},
		tv3T: function(t, e, i) {
			function a(t, e, i, a) {
				var r = !i;
				i || (i = {});
				for(var s = -1, c = e.length; ++s < c;) {
					var l = e[s],
						d = a ? a(i[l], t[l], l, i, t) : void 0;
					void 0 === d && (d = t[l]), r ? o(i, l, d) : n(i, l, d)
				}
				return i
			}
			var n = i("i4ON"),
				o = i("nw3t");
			t.exports = a
		},
		
		v8oQ: function(t, e, i) {
			function a(t) {
				var e = ++o;
				return n(t) + e
			}
			var n = i("ZT2e"),
				o = 0;
			t.exports = a
		},
		
		"wS+S": function(t, e) {
			var i = /<%-([\s\S]+?)%>/g;
			t.exports = i
		},
		waeE: function(t, e, i) {
			"use strict";

			function a(t) {
				return s.getDateInfo(t)
			}
			function n(t, e) {
				return s.getDateMoreInfo(t, e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), i.d(e, "calendar", function() {
				return s
			}), e.getDateInfo = a, e.getDateMoreInfo = n;
			var o = i("6rBr"),
				r = function() {
					function t() {
						this.CONSTANT = {
							CALENDAR_CHINESE_LUNAR_INFO: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835],
							CALENDAR_CHINESE_WEEKDAY: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
							CALENDAR_CHINESE_NUMBER: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341"],
							CALENDAR_CHINESE_CARRT: ["\u521d", "\u5341", "\u5eff", "\u5345", "\u3000"],
							CALENDAR_CHINESE_HOLIDAY: {
								1230: "\u9664\u5915",
								"0101": "\u521d\u4e00",
								"0115": "\u5143\u5bb5",
								"0505": "\u7aef\u5348",
								"0707": "\u4e03\u5915",
								"0815": "\u4e2d\u79cb",
								"0909": "\u91cd\u9633"
							},
							CALENDAR_COMMON_HOLIDAY: {
								"0101": "\u5143\u65e6",
								"0214": "\u60c5\u4eba\u8282",
								"0501": "\u52b3\u52a8\u8282",
								1001: "\u56fd\u5e86",
								1225: "\u5723\u8bde",
								"0601": "\u513f\u7ae5\u8282",
								"0910": "\u6559\u5e08\u8282"
							},
							CALENDAR_WEEKDAY_NAME: {
								0: "\u661f\u671f\u65e5",
								1: "\u661f\u671f\u4e00",
								2: "\u661f\u671f\u4e8c",
								3: "\u661f\u671f\u4e09",
								4: "\u661f\u671f\u56db",
								5: "\u661f\u671f\u4e94",
								6: "\u661f\u671f\u516d"
							},
							CALENDAR_WEEKDAY_SHORTNAME: {
								0: "\u5468\u65e5",
								1: "\u5468\u4e00",
								2: "\u5468\u4e8c",
								3: "\u5468\u4e09",
								4: "\u5468\u56db",
								5: "\u5468\u4e94",
								6: "\u5468\u516d"
							},
							CALENDAR_WEEKDAY_SHORTNAME2: {
								0: "\u65e5",
								1: "\u4e00",
								2: "\u4e8c",
								3: "\u4e09",
								4: "\u56db",
								5: "\u4e94",
								6: "\u516d"
							},
							CALENDAR_INIT_DATE: 1,
							CALENDAR_MONTH: 5,
							INIT_DATE_TIME: {
								H: 0,
								M: 0,
								S: 0,
								MS: 0
							},
							CALENDAR: "calendar"
						}, this.chineseHoliday = this.CONSTANT.CALENDAR_CHINESE_HOLIDAY, this.holiday = this.CONSTANT.CALENDAR_COMMON_HOLIDAY, this.DAYTITLE = this.CONSTANT.CALENDAR_WEEKDAY_SHORTNAME, this.SDAYTITLE = this.CONSTANT.CALENDAR_WEEKDAY_SHORTNAME2, this.DAYTITLE2 = this.CONSTANT.CALENDAR_WEEKDAY_NAME
					}
					return t.prototype.setCalendarDate = function(t) {
						this.dateObj = void 0 !== t ? t : new Date, this.SY = this.dateObj && this.dateObj.getFullYear(), this.SM = this.dateObj && this.dateObj.getMonth(), this.SD = this.dateObj && this.dateObj.getDate(), this.lunarInfo = this.CONSTANT.CALENDAR_CHINESE_LUNAR_INFO
					}, t.prototype.leapMonth = function(t) {
						return 15 & this.lunarInfo[t - 1900]
					}, t.prototype.monthDays = function(t, e) {
						return this.lunarInfo[t - 1900] & 65536 >> e ? 30 : 29
					}, t.prototype.leapDays = function(t) {
						return this.leapMonth(t) ? 65536 & this.lunarInfo[t - 1900] ? 30 : 29 : 0
					}, t.prototype.lYearDays = function(t) {
						for(var e = 348, i = 32768; i > 8; i >>= 1) e += this.lunarInfo[t - 1900] & i ? 1 : 0;
						return e + this.leapDays(t)
					}, t.prototype.Lunar = function(t) {
						var e, i = 0,
							a = 0,
							n = {},
							o = new Date(1900, 0, 31),
							r = (t - o) / 864e5;
						for(n.dayCyl = r + 40, n.monCyl = 14, e = 1900; e < 2050 && r > 0; e++) a = this.lYearDays(e), r -= a, n.monCyl += 12;
						for(r < 0 && (r += a, e -= 1, n.monCyl -= 12), n.year = e, n.yearCyl = e - 1864, i = this.leapMonth(e), n.isLeap = !1, e = 1; e < 13 && r > 0; e++) i > 0 && e === i + 1 && !1 === n.isLeap ? (e -= 1, n.isLeap = !0, a = this.leapDays(n.year)) : a = this.monthDays(n.year, e), !0 === n.isLeap && e === i + 1 && (n.isLeap = !1), r -= a, !1 === n.isLeap && (n.monCyl += 1);
						return 0 === r && i > 0 && e === i + 1 && (n.isLeap ? n.isLeap = !1 : (n.isLeap = !0, e -= 1, n.monCyl -= 1)), r < 0 && (r += a, e -= 1, n.monCyl -= 1), n.month = e, n.day = r + 1, n
					}, t.prototype.cDay = function(t, e) {
						var i, a = this.CONSTANT.CALENDAR_CHINESE_NUMBER,
							n = this.CONSTANT.CALENDAR_CHINESE_CARRT;
						switch(i = t > 10 ? "\u5341" + a[t - 10] : a[t], i += "\u6708", e) {
							case 10:
								i += "\u521d\u5341";
								break;
							case 20:
								i += "\u4e8c\u5341";
								break;
							case 30:
								i += "\u4e09\u5341";
								break;
							default:
								i += n[Math.floor(e / 10)], i += a[e % 10]
						}
						return i
					}, t.prototype.solarDay2 = function(t) {
						this.setCalendarDate(t);
						var e = new Date(this.SY, this.SM, this.SD),
							i = this.Lunar(e),
							a = i.month >= 10 ? i.month : "0" + i.month,
							n = i.day >= 10 ? i.day : "0" + i.day,
							o = "" + a + n;
						return i = null, o
					}, t.prototype.weekday = function() {
						return this.CONSTANT.CALENDAR_CHINESE_WEEKDAY[this.dateObj.getDay()]
					}, t.prototype.YYMMDD = function() {
						return [this.SY, "\u5e74", this.SM + 1, "\u6708", this.SD, "\u65e5"].join("")
					}, t.prototype._isDate = function(t) {
						return "[object Date]" === Object.prototype.toString.call(t)
					}, t.prototype._objectKey = function(t) {
						var e = [];
						return t && Object.keys(t).forEach(function(i) {
							({}).hasOwnProperty.call(t, i) && e.push(i)
						}), e
					}, t.prototype.isLeapYear = function(t) {
						return 0 !== t && (t % 4 == 0 && (t % 100 != 0 || t % 400 == 0))
					}, t.prototype.getDateInfo = function(t) {
						if(!t) return null;
						var e = new Date(o.a.getServerDate()),
							i = new Date(t);
						i.setHours(1, 1, 1, 0), e.setHours(1, 1, 1, 0);
						var a = {};
						o.a.format(e, "Ymd") === o.a.format(t, "Ymd") ? a.daytitle = "\u4eca\u5929" : a.daytitle = "";
						var n = this.solarDay2(t);
						if("1229" === n) {
							var r = new Date(t);
							r.setDate(r.getDate() + 1);
							var s = this.solarDay2(r);
							this.chineseHoliday[1229] = "1230" !== s ? "\u9664\u5915" : ""
						}
						this.chineseHoliday[n] ? a.chineseday = this.chineseHoliday[n] : a.chineseday = "";
						var c = o.a.format(t, "md");
						return this.holiday[c] ? a.holiday = this.holiday[c] : a.holiday = "", a.week = this.DAYTITLE[t.getDay()], a.week2 = this.DAYTITLE2[t.getDay()], a.date = o.a.format(t, "j"), a
					}, t.prototype.getDateMoreInfo = function(t, e) {
						var i = this.solarDay2(t),
							a = parseInt(i.substr(0, 2), 10),
							n = parseInt(i.substr(2, 2), 10),
							r = String(t.getMonth() + 1),
							s = String(t.getDate()),
							c = (1 === r.length ? "0" + r : r) + (1 === s.length ? "0" + s : s),
							l = t.getDay();
						e = e || new Date;
						var d = function(t, e) {
								return t = new Date(t.valueOf()), e = new Date(e.valueOf()), t.setHours(0, 0, 0, 0), e.setHours(0, 0, 0, 0), parseInt((t - e) / 864e5, 10)
							}(t, e),
							h = ["\u4eca\u5929"][d],
							p = this.cDay(a, n),
							u = p.split("\u6708")[0] + "\u6708",
							f = p.split("\u6708")[1],
							y = new o.a(t);
						return {
							festival: this.CONSTANT.CALENDAR_COMMON_HOLIDAY[c] || "",
							week1: this.CONSTANT.CALENDAR_WEEKDAY_NAME[l] || "",
							week2: this.CONSTANT.CALENDAR_WEEKDAY_SHORTNAME[l] || "",
							week3: this.CONSTANT.CALENDAR_WEEKDAY_SHORTNAME2[l] || "",
							YYMMDD: y.format("Y\u5e74n\u6708j\u65e5"),
							MMDD: y.format("n\u6708j\u65e5"),
							cfestival: this.CONSTANT.CALENDAR_CHINESE_HOLIDAY[i] || "",
							cdate: p || "",
							cmonth: u || "",
							cday: f || "",
							cdaykey: i,
							daykey: c,
							dayTit: h || ""
						}
					}, t
				}(),
				s = new r
		},
		x2od: function(t, e) {
			var i = /<%([\s\S]+?)%>/g;
			t.exports = i
		},	
			
		yKmV: function(t, e, i) {
			"use strict";

			function a(t) {
				var e = t;
				return t && g[t] && (e = g[t]), e
			}

			function n(t, e, i, a) {
				var n = $("#page_id");
				if(n) {
					var o = n.attr("value");
					t = t.indexOf("?") >= 0 ? t + "&pageid=" + o : t + "?pageid=" + o
				}
				return {
					url: t,
					data: e,
					callback: i,
					error: a
				}
			}

			function o(t) {
				t.useCasKey || "true" === $("#useCasKey").val() ? Object(m.a)(0).then(function(e) {
					-1 === t.url.indexOf("?") ? t.url = t.url + "?key=" + e : t.url = t.url + "&key=" + e, r(t)
				}) : r(t)
			}

			function r(t) {
				var e = f.a.getUuid();
				f.a.group(e, {
					name: "AjaxReady",
					url: t.url,
					data: t.data
				});
				var i = 0,
					a = {
						url: t.url,
						type: t.type,
						dataType: t.dataType,
						data: t.data,
						contentType: t.contentType,
						timeout: t.timeout || 5e4,
						beforeSend: function(t) {
							t.onprogress = function(t) {
								i = t.loaded ? t.loaded : t.position
							}
						},
						success: function(a, n, o) {
							if(f.a.log({
									name: "AjaxMessageSize",
									url: t.url
								}, i), f.a.performance[e].status = "success", f.a.performance[e].info = ["code:", o && o.status || 200].join(), void 0 === a && a.ResponseStatus && a.ResponseStatus.Extension) {
								var r = a.ResponseStatus.Extension.filter(function(t) {
									return "CLOGGING_TRACE_ID" === t.Id
								})[0];
								r && (f.a.performance[e].CLOGGING_TRACE_ID = r.Value)
							}
							if(f.a.groupEnd(e), t.callback && t.callback(a), 0 === t.url.indexOf(location.origin) || 0 === t.url.indexOf("/")) try {
								var s = o.getResponseHeader("x-ctrip-hotel-test");
								if(s && (s = JSON.parse(s), u()(s))) {
									c("/webapp/hotel/api/static/abresult", {
										abMap: s,
										isSpa: 0,
										pageid: $("#page_id").val(),
										lastRequestId: o.getResponseHeader("request-id")
									}, function(t) {}, function() {}, 3e4)
								}
							} catch(t) {}
						},
						error: function(i, a) {
							"abort" !== a && (f.a.performance[e].status = "fail", i && void 0 === i && (f.a.performance[e].info = ["code:", i.status, "    res:", encodeURIComponent(i.responseText)].join()), f.a.groupEnd(e)), t.error && t.error(i)
						}
					}; - 1 !== t.url.indexOf(window.location.host) && -1 !== t.url.indexOf(window.location.protocol) || (a.crossDomain = !!t.crossDomain);
				try {
					var n = window.location.origin;
					n || (n = window.location.protocol + "//" + window.location.host);
					for(var o = t.url.match(/^\s*(((([^:\/#?]+:)?(?:(\/\/)((?:(([^:@\/#?]+)(?::([^:@\/#?]+))?)@)?(([^:\/#?\][]+|\[[^\/\]@#?]+])(?::([0-9]+))?))?)?)?((\/?(?:[^\/?#]+\/+)*)([^?#]*)))?(\?[^#]+)?)(#.*)?/) || [], r = !1, s = 0; s < v.length; s += 1) o[10] === v[s] && (r = !0);
					/^https?/.test(n) && o[2] && -1 === o[2].indexOf(n) && !y.a.vendor.is("CTRIP") && r && "jsonp" !== t.dataType && (a.beforeSend = function(t) {
						try {
							var e = t;
							e.setRequestHeader("cookieOrigin", n), e.onprogress = function(t) {
								i = t.loaded ? t.loaded : t.position
							}
						} catch(t) {}
					}, a.xhrFields = {
						withCredentials: !0
					})
				} catch(t) {}
				try {
					return $.ajax(a)
				} catch(t) {
					if(t && "INVALID_STATE_ERR: DOM Exception 11" === t.message && window.XMLHttpRequest) {
						var l = new XMLHttpRequest;
						return l.onreadystatechange = function() {
							if(4 === l.readyState) {
								var t = l.status;
								t >= 200 && t < 300 ? a.success && a.success($.parseJSON(l.responseText), l.responseXML) : a.error && a.error(t)
							}
						}, l.open(a.type, a.url, !0), l.setRequestHeader("cookieOrigin", origin), l.setRequestHeader("Content-Type", "application/json"), l.withCredentials = !0, l.send(a.data), l
					}
				}
				return null
			}

			function s(t, e, i, r, s, c) {
				var l = c ? c.contentType : "",
					d = c ? c.dataType : "json",
					h = c && !!c.cache,
					p = n(t, e, i, r);
				p.type = "GET", p.timeout = s, p.cache = !!h, p.contentType = a(l) || "application/json", p.dataType = d, p.useCasKey = c && c.useCasKey, o(p)
			}

			function c(t, e, i, r, s, c) {
				var l = c ? c.contentType : "",
					d = c ? c.dataType : "json",
					h = JSON.stringify(e),
					p = n(t, h, i, r);
				p.type = "POST", p.dataType = d, p.timeout = s, p.contentType = a(l) || "application/json", p.useCasKey = c && c.useCasKey, o(p)
			}

			function l(t, e, i, a, r) {
				var s = n(t, e, i, a);
				s.type = "GET", s.dataType = "jsonp", s.crossDomain = !0, s.timeout = r, o(s)
			}

			function d(t, e, i, r, s, c) {
				var l = i.contentType,
					d = i;
				"get" !== e.toLowerCase() && (d = JSON.stringify(i));
				var h = n(t, d, r, s);
				h.type = e, h.dataType = "json", h.crossDomain = !0, h.data = d, h.contentType = a(l) || "application/json", h.timeout = c, o(h)
			}

			function h(t, e, i, a) {
				var r = null,
					s = "";
				(r = "string" == typeof e ? $("#" + e) : $(e)) && r.length > 0 && (s = r.serialize()), o(n(t, s, i, a))
			}			
		},			
		zZmx: function(t, e, i) {
			var a = i("tv3T"),
				n = i("0DSl"),
				o = i("t8rQ"),
				r = n(function(t, e, i, n) {
					a(e, o(e), t, n)
				});
			t.exports = r
		},
		"za/N": function(t, e, i) {
			"use strict";
			var a = i("TToO"),
				n = i("6M8Y"),
				o = i("d9bj"),
				r = i.n(o),
				s = null,
				c = function(t) {
					function e() {
						var e = t.call(this) || this;
						return s || (s = e), s
					}
					return a.b(e, t), e.prototype.propertys = function() {
						t.prototype.propertys.call(this), this.template = r.a, this.maskToHide = !1, this.hasPushState = !1, this.type = "loading"
					}, e.drawPolygon = function(t, e, i) {
						t.beginPath(), t.fillStyle = i;
						for(var a = 0; a < e.length; a++) a % 6 == 0 && t.bezierCurveTo(e[a], e[a + 1], e[a + 2], e[a + 3], e[a + 4], e[a + 5]);
						t.fill(), t.closePath()
					}, e.drawEyes = function(t, e, i) {
						for(var a = 0; a < 12; a++) t.beginPath(), t.lineCap = "square", t.moveTo(e.x, e.y - a), t.lineTo(i.x, i.y - a), t.strokeStyle = "rgb(38, 112, 151)", t.stroke()
					}, e.drawMouth = function(t) {
						for(var e = 0; e < 5; e++) t.beginPath(), t.strokeStyle = "rgb(38, 112, 151)", t.bezierCurveTo(183, 214 + e, 213, 212 + e, 233, 191 + e), t.bezierCurveTo(233, 191 + e, 247, 172 + e, 271, 177 + e), t.bezierCurveTo(271, 177 + e, 285, 186 + e, 301, 185 + e), t.stroke(), t.closePath()
					}, e.drawCircle = function(t, e, i) {
						for(var a = 0; a < 12; a++) t.save(), t.beginPath(), t.arc(205, 204, 190 + a, e * Math.PI, i * Math.PI), t.strokeStyle = "rgb(187, 226, 248)", t.stroke()
					}, e.prototype.draw = function(t) {
						var i = [109, 85, 118, 70, 171, 59, 171, 59, 210, 45, 257, 63, 257, 63, 312, 88, 312, 128, 312, 128, 340, 145, 344, 179, 344, 179, 347, 208, 332, 230, 332, 230, 340, 220, 370, 242, 370, 242, 370, 215, 392, 220, 392, 220, 391, 244, 382, 262, 382, 262, 370, 267, 357, 270, 357, 267, 360, 295, 355, 319, 355, 319, 316, 374, 212, 395, 212, 395, 167, 403, 120, 378, 120, 378, 104, 354, 104, 335, 104, 335, 78, 339, 47, 312, 47, 312, 37, 289, 58, 283, 58, 283, 50, 280, 76, 298, 76, 298, 85, 297, 70, 233, 70, 233, 45, 122, 109, 85],
							a = [344, 179, 347, 208, 332, 230],
							n = [166, 208, 147, 212, 132, 226, 132, 226, 152, 238, 166, 208],
							o = [315, 173, 322, 170, 335, 169, 335, 169, 338, 174, 338, 177, 338, 177, 328, 188, 316, 173],
							r = [244, 271, 279, 245, 318, 248, 322, 248, 340, 262, 332, 336, 334, 336, 297, 383, 192, 396, 192, 396, 155, 346, 166, 292, 166, 292, 180, 260, 244, 271],
							s = [183, 214, 213, 212, 233, 191, 233, 191, 247, 172, 271, 177, 271, 177, 285, 186, 301, 185],
							c = [244, 229, 259, 227, 269, 221, 269, 221, 258, 236, 244, 229],
							l = [220, 168, 237, 154, 264, 154, 264, 154, 243, 165, 220, 168],
							d = [73, 133, 135, 139, 205, 124, 205, 125, 264, 110, 290, 88, 290, 88, 282, 76, 274, 71, 274, 71, 237, 86, 184, 99, 184, 99, 135, 106, 94, 106, 94, 106, 68, 128, 73, 133],
							h = [83, 117, 65, 102, 50, 96, 50, 96, 40, 102, 33, 118, 33, 118, 48, 122, 63, 132, 63, 132, 43, 135, 27, 146, 27, 146, 36, 159, 43, 170, 43, 170, 57, 164, 74, 155, 74, 155, 69, 137, 100, 126],
							p = [157, 78, 134, 85, 116, 95, 116, 95, 126, 96, 132, 96, 132, 96, 143, 86, 151, 82],
							u = [110, 105, 96, 116, 93, 126, 93, 126, 102, 126, 107, 127, 107, 127, 113, 117, 121, 111, 121, 111, 118, 106, 113, 103, 113, 103, 110, 104, 110, 105],
							f = [72, 123, 57, 113, 44, 108, 44, 108, 57, 120, 72, 123],
							y = [71, 135, 57, 144, 51, 154, 51, 154, 61, 151, 69, 148, 69, 148, 69, 142, 71, 137],
							m = {
								start: {
									x: 140,
									y: 184
								},
								end: {
									x: 176,
									y: 185
								}
							},
							g = {
								start: {
									x: 294,
									y: 162
								},
								end: {
									x: 311,
									y: 145
								}
							},
							v = 0,
							b = .2,
							w = t.getContext("2d");
						return w.clearRect(0, 0, 2e3, 2e3), clearInterval(this.drawInteval), w.scale(.73, .36), setInterval(function() {
							w.clearRect(0, 0, 2e3, 2e3), v += .1, b = v + 1.7, e.drawPolygon(w, i, "#86CFF8"), e.drawEyes(w, m.start, m.end), e.drawEyes(w, g.start, g.end), e.drawPolygon(w, n, "rgb(254, 200, 225)"), e.drawPolygon(w, o, "rgb(254, 200, 225)"), e.drawPolygon(w, r, "#ffffff"), e.drawPolygon(w, a, "rgb(49, 186, 223)"), e.drawMouth(w, s), e.drawPolygon(w, c, "rgb(117, 192, 234)"), e.drawPolygon(w, l, "rgb(117, 192, 234)"), e.drawPolygon(w, d, "rgb(206, 247, 249)"), e.drawPolygon(w, h, "rgb(206, 247, 249)"), e.drawPolygon(w, f, "rgb(162, 218, 241)"), e.drawPolygon(w, y, "rgb(162, 218, 241)"), e.drawPolygon(w, u, "#ffffff"), e.drawPolygon(w, p, "#ffffff"), e.drawCircle(w, v, b)
						}, 45)
					}, e.prototype.addEvent = function() {
						t.prototype.addEvent.call(this)
					}, e.prototype.resetDefaultProperty = function() {
						t.prototype.resetDefaultProperty.call(this), this.needAnimat = !1, this.maskToHide = !1
					}, e.prototype.show = function() {
						this.drawInteval || this.showFunc()
					}, e.prototype.showFunc = function() {
						t.prototype.show.call(this), this.$el.find("canvas").length && (this.drawInteval = this.draw(this.$(".loading-layer2-before")[0]), delete this.__showtimeout)
					}, e.prototype.hide = function() {
						this.__showtimeout && clearTimeout(this.__showtimeout), this.drawInteval && (clearInterval(this.drawInteval), this.drawInteval = null), this.$(".loading-layer2").html('<canvas class="loading-layer2-before" style="position: absolute;width: 72px;height: 72px;top: 10px;left: 20px;"></canvas><p id="cp-h5-text">\u6e38\u6e38\u52aa\u529b\u52a0\u8f7d\u4e2d</p>'), t.prototype.hide.call(this)
					}, e
				}(n.a),
				l = new c;
			e.a = l
		},
		zwWq: function(t, e) {
			t.exports = '<li> <span class="g-city-t g-city-anchor-currentposition js_city_group" data-val="1">\u5f53\u524d</span> <ul class="g-city-tags"> <li class="g-city-current" data-sec="current">\u6211\u7684\u4f4d\u7f6e</li> </ul> </li> '
		},
		zzLy: function(t, e) {
			t.exports = '<div> <div class="lt-inout lt-flex-v ks-box js_hd"> <i class="font-g-arrow-left key-header-icon js_kw_back"></i> <div class="inout-search star"> <div class="search-name lt-flex-v"> <i class="font-g-search lt-color2"></i> <input type="text" class="input-txt js_input" placeholder="\u5173\u952e\u5b57/\u4f4d\u7f6e/\u54c1\u724c/\u9152\u5e97\u540d"> <span class="g-pro-load js_load_icon" style="display: none;"> <span class="g-pro-radius"></span> <span class="g-pro-logo"></span> </span> <span class="sn-close js_clear_kw_input" style="display: none;"><i class="font-g-close"></i></span> </div> </div> <span class="key-header-btn js_kw_confirm" style="display: none">\u786e\u8ba4</span> </div> <section class="js_kw_ajax_list" style="display:none;" rel="\u5173\u952e\u5b57\u8054\u60f3\u5217\u8868\u6a21\u5757"></section> </div> '
		}
	}, ["VYb2"]);
})