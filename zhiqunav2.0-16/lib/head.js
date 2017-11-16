(function(c) {
	var b = c.Base.Event.extend({
		init: function(d) {
			c.extend(true, this, {
				$headContainer: c("#mall_header"),
				topClass: ".topbar",
				headerBoxClass: ".header_box",
				$loginContainer: c("#topbar_login_btn"),
				$quitContainer: c("#topbar_quit"),
				$mymenuContainer: c("#topbar_my_top"),
				$registerContainer: c("#topbar_register"),
				$greetContainer: c("#topbar_greet"),
				$msnContainer: c(".msn"),
				$msnInfoContainer: c("#msn_box_info"),
				$msn_boxContainer: c(".msn_box"),
				$emptyCarContainer: c("#mallNavCartEmptyIcon"),
				$goodsCarContainer: c("#mallNavCartHasGoods"),
				$shopCarContainer: c(".shopCar"),
				$shopCountContainer: c("#icon_shopCount"),
				$CartTotalTxt: c("#mallNavCartCounTxt"),
				hoverClass: "hover",
				goodListClass: ".shop_list",
				msnBoxClass: ".msn_box"
			}, d);
			this.setOption();
			this.onlineService();
			this.bindEvent();
			this.setMenuActive();
			this.loginInfo()
		},
		setOption: function() {
			var d = this;
			d.headerBox = d.$headContainer.find(d.headerBoxClass)
		},
		bindEvent: function() {
			var d = this;
			if(d.$msnContainer) {
				d.$msnContainer.mouseenter(function() {
					if(d.$msn_boxContainer.find("p").length > 0) {
						c(this).addClass(d.hoverClass).find(d.msnBoxClass).show()
					}
				}).mouseleave(function() {
					c(this).removeClass(d.hoverClass).find(d.msnBoxClass).hide()
				})
			}
		},
		setMenuActive: function() {
			var f = function(g) {
				if(g.indexOf("?") > -1) {
					g = g.substring(0, g.indexOf("?"))
				}
				if(g.substring(g.lastIndexOf("/") + 1).length < 1) {
					return g.substring(0, g.lastIndexOf("/"))
				}
				return g
			};
			var e = this,
				d = f(location.href);
			e.headerBox.find("ul.nav li").each(function() {
				var i = c(this),
					g = f(i.find("a").attr("href")),
					h = location.protocol + "//" + location.host;
				if(g == d) {
					e.headerBox.find("ul.nav li").removeClass("on");
					i.addClass("on");
					return false
				}
				e.headerBox.find("ul.nav li").removeClass("on");
				if(d.indexOf("/v") > -1) {
					if(d.substring(d.indexOf("/v")).length <= 2) {
						e.headerBox.find("ul.nav").find("#head_home").addClass("on");
						return false
					}
					return
				}
				if(h == urlPath.mallUrl) {
					e.headerBox.find("ul.nav").find("#head_mall").addClass("on");
					return false
				}
				if(h.indexOf("index") > -1) {
					e.headerBox.find("ul.nav").find("#head_hangqing").addClass("on")
				}
			})
		},
		GetTopInfo: function(e, d) {
			var f = new paramAjax({
				url: urlPath.memberUrl + "/userMessage/" + e,
				dataType: "jsonp",
				type: "get",
				data: {
					rd: Math.random()
				}
			});
			http.ajax(f, function(g) {
				if(typeof(d) == "function") {
					d(g || [])
				}
			})
		},
		SetMessage: function(i, k) {
			var f = this;
			var e = 0,
				d = 0,
				h = false;
			if(i != null) {
				if(typeof i.paymentY != "undefined" && i.paymentY != null) {
					e = i.paymentY
				}
				if(typeof i.paymentN != "undefined" && i.paymentN != null) {
					d = i.paymentN
				}
				if(typeof i.compayStatus != "undefined" && i.compayStatus != null) {
					h = i.compayStatus
				}
			}
			var g = function() {
				var l = "";
				l += k > 0 ? '<p id="cartquantity"><label>' + k + '</label>款购物车产品待下单<a href="' + urlPath.mallUrl + '/order/cart.aspx">去查看</a></p>' : "";
				l += e > 0 ? "<p>" + e + '笔订单未付款<a href="' + urlPath.memberUrl + '/Account/MyOrder">去查看</a></p>' : "";
				l += d > 0 ? "<p>" + d + '笔订单未填提货函<a href="' + urlPath.memberUrl + '/Account/MyOrder">去查看</a></p>' : "";
				if(h) {
					l += h
				}
				return l
			};
			f.$msn_boxContainer.html(g());
			var j = f.$msn_boxContainer.find("a").length;
			if(j > 0) {
				f.$msnInfoContainer.html("消息中心<span>" + j + "</span>")
			} else {
				f.$msnInfoContainer.html("消息中心<span></span>")
			}
			return
		},
		getTotalQuantity: function(g) {
			var d = this,
				h = g;
			if(typeof h == "undefined" || h == null || h.length === 0) {
				return 0
			}
			var k = 0;
			for(var e = 0; e < h.length; ++e) {
				var f = h[e];
				var j = parseInt(f.qty);
				k += j
			}
			return k
		},
		loginInfo: function() {
			var d = this;
			d.GetTopInfo("GetUserMessage", function(e) {
				if(e != null && e.isLogin) {
					var f = e.cartList;
					var g = d.getTotalQuantity(f);
					d.SetMessage(e, g);
					d.$registerContainer.hide()
				}
			})
		},
		onlineService: function() {
			var d = this;
			if(c(d.headerBoxClass).find(".nav").length > 0) {
				if(typeof c(document).totop == "undefined") {
					var e = new goTop()
				} else {
					c(document).totop()
				}
			}
		},
		parseFloat: function(e, d) {
			return Math.round(e * Math.pow(10, d)) / Math.pow(10, d)
		}
	});
	var a = c.Base.Event.extend({
		init: function(d) {
			c.extend(true, this, {
				$menuContainer: ""
			}, d);
			this.loadMenul()
		},
		loadMenul: function() {
			var d = this;
			if(!$menuContainer || $menuContainer.length <= 0) {
				return
			}
			var e = new paramAjax({
				url: urlPath.memberUrl + "/userMessage/GetUserMessage",
				dataType: "jsonp",
				type: "get",
				data: {
					rd: Math.random()
				}
			});
			http.ajax(e, function(f) {})
		}
	});
	c(function() {
		new b({
			$headContainer: c("#mall_header"),
			$loginContainer: c("#topbar_login_btn"),
			$quitContainer: c("#topbar_quit"),
			$shopCarContainer: c(".shopCar"),
			$registerContainer: c("#topbar_register"),
			$greetContainer: c("#topbar_greet")
		})
	})
})(jQuery);