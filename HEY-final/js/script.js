function UDate() {
	var d = new Date(),
		t = d.getTime(),
		n = d.getTimezoneOffset(),
		t2 = t + n * 60000 + 180 * 60000;
	return(new Date(t2));
}

function UDate2() {
	var d = new Date(),
		t = d.getTime(),
		n = d.getTimezoneOffset(),
		t2 = t + n * 60000 + 180 * 60000;
	return t2;
}

function UDateT(t0) {
	var d = new Date(t0),
		t = d.getTime(),
		n = d.getTimezoneOffset(),
		t2 = t + n * 60000 + 180 * 60000;
	return(new Date(t2));
}
var ttt = UDate().getTimezoneOffset(),
	xxx = parseInt((-180 - ttt) / 60),
	qqq = (new Date(2018, 4, 3, 12, 59, 59)).getTime() + xxx * 60 * 60 * 1000,
	www = new Date(qqq);
//console.log(ttt);
//console.log(xxx)
//console.log(qqq)
top.SSS = (www.getUTCFullYear()) + '/' + ('0' + (www.getMonth() + 1)).slice(-2) + '/' + ('0' + www.getDate()).slice(-2) + ' ' + ('0' + www.getHours()).slice(-2) + ':' + ('0' + www.getMinutes()).slice(-2) + ':' + ('0' + www.getSeconds()).slice(-2);

! function(t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if(!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
	function n(t) {
		var e = !!t && "length" in t && t.length,
			n = ot.type(t);
		return "function" !== n && !ot.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
	}

	function i(t, e, n) {
		if(ot.isFunction(e)) return ot.grep(t, function(t, i) {
			return !!e.call(t, i, t) !== n
		});
		if(e.nodeType) return ot.grep(t, function(t) {
			return t === e !== n
		});
		if("string" == typeof e) {
			if(mt.test(e)) return ot.filter(e, t, n);
			e = ot.filter(e, t)
		}
		return ot.grep(t, function(t) {
			return Z.call(e, t) > -1 !== n
		})
	}

	function r(t, e) {
		for(;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}

	function o(t) {
		var e = {};
		return ot.each(t.match(_t) || [], function(t, n) {
			e[n] = !0
		}), e
	}

	function a() {
		Y.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a), ot.ready()
	}

	function s() {
		this.expando = ot.expando + s.uid++
	}

	function l(t, e, n) {
		var i;
		if(void 0 === n && 1 === t.nodeType)
			if(i = "data-" + e.replace(Ct, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ht.test(n) ? ot.parseJSON(n) : n)
				} catch(t) {}
				Rt.set(t, e, n)
			} else n = void 0;
		return n
	}

	function c(t, e, n, i) {
		var r, o = 1,
			a = 20,
			s = i ? function() {
				return i.cur()
			} : function() {
				return ot.css(t, e, "")
			},
			l = s(),
			c = n && n[3] || (ot.cssNumber[e] ? "" : "px"),
			h = (ot.cssNumber[e] || "px" !== c && +l) && At.exec(ot.css(t, e));
		if(h && h[3] !== c) {
			c = c || h[3], n = n || [], h = +l || 1;
			do {
				o = o || ".5", h /= o, ot.style(t, e, h + c)
			} while (o !== (o = s() / l) && 1 !== o && --a)
		}
		return n && (h = +h || +l || 0, r = n[1] ? h + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = h, i.end = r)), r
	}

	function h(t, e) {
		var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
	}

	function u(t, e) {
		for(var n = 0, i = t.length; i > n; n++) bt.set(t[n], "globalEval", !e || bt.get(e[n], "globalEval"))
	}

	function d(t, e, n, i, r) {
		for(var o, a, s, l, c, d, p = e.createDocumentFragment(), f = [], m = 0, g = t.length; g > m; m++)
			if((o = t[m]) || 0 === o)
				if("object" === ot.type(o)) ot.merge(f, o.nodeType ? [o] : o);
				else if(Ft.test(o)) {
			for(a = a || p.appendChild(e.createElement("div")), s = (kt.exec(o) || ["", ""])[1].toLowerCase(), l = Bt[s] || Bt._default, a.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], d = l[0]; d--;) a = a.lastChild;
			ot.merge(f, a.childNodes), a = p.firstChild, a.textContent = ""
		} else f.push(e.createTextNode(o));
		for(p.textContent = "", m = 0; o = f[m++];)
			if(i && ot.inArray(o, i) > -1) r && r.push(o);
			else if(c = ot.contains(o.ownerDocument, o), a = h(p.appendChild(o), "script"), c && u(a), n)
			for(d = 0; o = a[d++];) Dt.test(o.type || "") && n.push(o);
		return p
	}

	function p() {
		return !0
	}

	function f() {
		return !1
	}

	function m() {
		try {
			return Y.activeElement
		} catch(t) {}
	}

	function g(t, e, n, i, r, o) {
		var a, s;
		if("object" == typeof e) {
			"string" != typeof n && (i = i || n, n = void 0);
			for(s in e) g(t, s, n, i, e[s], o);
			return t
		}
		if(null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = f;
		else if(!r) return t;
		return 1 === o && (a = r, r = function(t) {
			return ot().off(t), a.apply(this, arguments)
		}, r.guid = a.guid || (a.guid = ot.guid++)), t.each(function() {
			ot.event.add(this, e, r, i, n)
		})
	}

	function E(t, e) {
		return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function v(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function y(t) {
		var e = jt.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function _(t, e) {
		var n, i, r, o, a, s, l, c;
		if(1 === e.nodeType) {
			if(bt.hasData(t) && (o = bt.access(t), a = bt.set(e, o), c = o.events)) {
				delete a.handle, a.events = {};
				for(r in c)
					for(n = 0, i = c[r].length; i > n; n++) ot.event.add(e, r, c[r][n])
			}
			Rt.hasData(t) && (s = Rt.access(t), l = ot.extend({}, s), Rt.set(e, l))
		}
	}

	function T(t, e) {
		var n = e.nodeName.toLowerCase();
		"input" === n && Pt.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
	}

	function x(t, e, n, i) {
		e = K.apply([], e);
		var r, o, a, s, l, c, u = 0,
			p = t.length,
			f = p - 1,
			m = e[0],
			g = ot.isFunction(m);
		if(g || p > 1 && "string" == typeof m && !it.checkClone && Vt.test(m)) return t.each(function(r) {
			var o = t.eq(r);
			g && (e[0] = m.call(this, r, o.html())), x(o, e, n, i)
		});
		if(p && (r = d(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
			for(a = ot.map(h(r, "script"), v), s = a.length; p > u; u++) l = r, u !== f && (l = ot.clone(l, !0, !0), s && ot.merge(a, h(l, "script"))), n.call(t[u], l, u);
			if(s)
				for(c = a[a.length - 1].ownerDocument, ot.map(a, y), u = 0; s > u; u++) l = a[u], Dt.test(l.type || "") && !bt.access(l, "globalEval") && ot.contains(c, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Gt, "")))
		}
		return t
	}

	function w(t, e, n) {
		for(var i, r = e ? ot.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ot.cleanData(h(i)), i.parentNode && (n && ot.contains(i.ownerDocument, i) && u(h(i, "script")), i.parentNode.removeChild(i));
		return t
	}

	function b(t, e) {
		var n = ot(e.createElement(t)).appendTo(e.body),
			i = ot.css(n[0], "display");
		return n.detach(), i
	}

	function H(t, e, n) {
		var i, r, o, a, s = t.style;
		return n = n || Yt(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== a && void 0 !== a || ot.contains(t.ownerDocument, t) || (a = ot.style(t, e)), n && !it.pixelMarginRight() && Qt.test(a) && Xt.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 !== a ? a + "" : a
	}

	function C(t, e) {
		return {
			get: function() {
				return t() ? void delete this.get : (this.get = e).apply(this, arguments)
			}
		}
	}

	function M(t) {
		if(t in ne) return t;
		for(var e = t[0].toUpperCase() + t.slice(1), n = ee.length; n--;)
			if((t = ee[n] + e) in ne) return t
	}

	function A(t, e, n) {
		var i = At.exec(e);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
	}

	function S(t, e, n, i, r) {
		for(var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ot.css(t, n + St[o], !0, r)), i ? ("content" === n && (a -= ot.css(t, "padding" + St[o], !0, r)), "margin" !== n && (a -= ot.css(t, "border" + St[o] + "Width", !0, r))) : (a += ot.css(t, "padding" + St[o], !0, r), "padding" !== n && (a += ot.css(t, "border" + St[o] + "Width", !0, r)));
		return a
	}

	function L(e, n, i) {
		var r = !0,
			o = "width" === n ? e.offsetWidth : e.offsetHeight,
			a = Yt(e),
			s = "border-box" === ot.css(e, "boxSizing", !1, a);
		if(Y.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
			if(o = H(e, n, a), (0 > o || null == o) && (o = e.style[n]), Qt.test(o)) return o;
			r = s && (it.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
		}
		return o + S(e, n, i || (s ? "border" : "content"), r, a) + "px"
	}

	function P(t, e) {
		for(var n, i, r, o = [], a = 0, s = t.length; s > a; a++) i = t[a], i.style && (o[a] = bt.get(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Lt(i) && (o[a] = bt.access(i, "olddisplay"))) : (r = Lt(i), "none" === n && r || bt.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
		for(a = 0; s > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
		return t
	}

	function k(t, e, n, i, r) {
		return new k.prototype.init(t, e, n, i, r)
	}

	function D() {
		return t.setTimeout(function() {
			ie = void 0
		}), ie = ot.now()
	}

	function B(t, e) {
		var n, i = 0,
			r = {
				height: t
			};
		for(e = e ? 1 : 0; 4 > i; i += 2 - e) n = St[i], r["margin" + n] = r["padding" + n] = t;
		return e && (r.opacity = r.width = t), r
	}

	function F(t, e, n) {
		for(var i, r = (I.tweeners[e] || []).concat(I.tweeners["*"]), o = 0, a = r.length; a > o; o++)
			if(i = r[o].call(n, e, t)) return i
	}

	function O(t, e, n) {
		var i, r, o, a, s, l, c, h = this,
			u = {},
			d = t.style,
			p = t.nodeType && Lt(t),
			f = bt.get(t, "fxshow");
		n.queue || (s = ot._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, h.always(function() {
			h.always(function() {
				s.unqueued--, ot.queue(t, "fx").length || s.empty.fire()
			})
		})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], c = ot.css(t, "display"), "inline" === ("none" === c ? bt.get(t, "olddisplay") || R(t.nodeName) : c) && "none" === ot.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function() {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for(i in e)
			if(r = e[i], oe.exec(r)) {
				if(delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
					if("show" !== r || !f || void 0 === f[i]) continue;
					p = !0
				}
				u[i] = f && f[i] || ot.style(t, i)
			} else c = void 0;
		if(ot.isEmptyObject(u)) "inline" === ("none" === c ? R(t.nodeName) : c) && (d.display = c);
		else {
			f ? "hidden" in f && (p = f.hidden) : f = bt.access(t, "fxshow", {}), o && (f.hidden = !p), p ? ot(t).show() : h.done(function() {
				ot(t).hide()
			}), h.done(function() {
				var e;
				bt.remove(t, "fxshow");
				for(e in u) ot.style(t, e, u[e])
			});
			for(i in u) a = F(p ? f[i] : 0, i, h), i in f || (f[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function z(t, e) {
		var n, i, r, o, a;
		for(n in t)
			if(i = ot.camelCase(n), r = e[i], o = t[n], ot.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = ot.cssHooks[i]) && "expand" in a) {
				o = a.expand(o), delete t[i];
				for(n in o) n in t || (t[n] = o[n], e[n] = r)
			} else e[i] = r
	}

	function I(t, e, n) {
		var i, r, o = 0,
			a = I.prefilters.length,
			s = ot.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if(r) return !1;
				for(var e = ie || D(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
				return s.notifyWith(t, [c, o, n]), 1 > o && l ? n : (s.resolveWith(t, [c]), !1)
			},
			c = s.promise({
				elem: t,
				props: ot.extend({}, e),
				opts: ot.extend(!0, {
					specialEasing: {},
					easing: ot.easing._default
				}, n),
				originalProperties: e,
				originalOptions: n,
				startTime: ie || D(),
				duration: n.duration,
				tweens: [],
				createTween: function(e, n) {
					var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(e) {
					var n = 0,
						i = e ? c.tweens.length : 0;
					if(r) return this;
					for(r = !0; i > n; n++) c.tweens[n].run(1);
					return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this
				}
			}),
			h = c.props;
		for(z(h, c.opts.specialEasing); a > o; o++)
			if(i = I.prefilters[o].call(c, t, h, c.opts)) return ot.isFunction(i.stop) && (ot._queueHooks(c.elem, c.opts.queue).stop = ot.proxy(i.stop, i)), i;
		return ot.map(h, F, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
			elem: t,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function N(t) {
		return t.getAttribute && t.getAttribute("class") || ""
	}

	function U(t) {
		return function(e, n) {
			"string" != typeof e && (n = e, e = "*");
			var i, r = 0,
				o = e.toLowerCase().match(_t) || [];
			if(ot.isFunction(n))
				for(; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
		}
	}

	function V(t, e, n, i) {
		function r(s) {
			var l;
			return o[s] = !0, ot.each(t[s] || [], function(t, s) {
				var c = s(e, n, i);
				return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
			}), l
		}
		var o = {},
			a = t === be;
		return r(e.dataTypes[0]) || !o["*"] && r("*")
	}

	function j(t, e) {
		var n, i, r = ot.ajaxSettings.flatOptions || {};
		for(n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
		return i && ot.extend(!0, t, i), t
	}

	function G(t, e, n) {
		for(var i, r, o, a, s = t.contents, l = t.dataTypes;
			"*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
		if(i)
			for(r in s)
				if(s[r] && s[r].test(i)) {
					l.unshift(r);
					break
				}
		if(l[0] in n) o = l[0];
		else {
			for(r in n) {
				if(!l[0] || t.converters[r + " " + l[0]]) {
					o = r;
					break
				}
				a || (a = r)
			}
			o = o || a
		}
		return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
	}

	function W(t, e, n, i) {
		var r, o, a, s, l, c = {},
			h = t.dataTypes.slice();
		if(h[1])
			for(a in t.converters) c[a.toLowerCase()] = t.converters[a];
		for(o = h.shift(); o;)
			if(t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
				if("*" === o) o = l;
				else if("*" !== l && l !== o) {
			if(!(a = c[l + " " + o] || c["* " + o]))
				for(r in c)
					if(s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
						!0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], h.unshift(s[1]));
						break
					}
			if(!0 !== a)
				if(a && t.throws) e = a(e);
				else try {
					e = a(e)
				} catch(t) {
					return {
						state: "parsererror",
						error: a ? t : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: e
		}
	}

	function q(t, e, n, i) {
		var r;
		if(ot.isArray(e)) ot.each(e, function(e, r) {
			n || Me.test(t) ? i(t, r) : q(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
		});
		else if(n || "object" !== ot.type(e)) i(t, e);
		else
			for(r in e) q(t + "[" + r + "]", e[r], n, i)
	}

	function X(t) {
		return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
	}
	var Q = [],
		Y = t.document,
		$ = Q.slice,
		K = Q.concat,
		J = Q.push,
		Z = Q.indexOf,
		tt = {},
		et = tt.toString,
		nt = tt.hasOwnProperty,
		it = {},
		rt = "2.2.1",
		ot = function(t, e) {
			return new ot.fn.init(t, e)
		},
		at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		st = /^-ms-/,
		lt = /-([\da-z])/gi,
		ct = function(t, e) {
			return e.toUpperCase()
		};
	ot.fn = ot.prototype = {
		jquery: rt,
		constructor: ot,
		selector: "",
		length: 0,
		toArray: function() {
			return $.call(this)
		},
		get: function(t) {
			return null != t ? 0 > t ? this[t + this.length] : this[t] : $.call(this)
		},
		pushStack: function(t) {
			var e = ot.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(t) {
			return ot.each(this, t)
		},
		map: function(t) {
			return this.pushStack(ot.map(this, function(e, n) {
				return t.call(e, n, e)
			}))
		},
		slice: function() {
			return this.pushStack($.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(t) {
			var e = this.length,
				n = +t + (0 > t ? e : 0);
			return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: J,
		sort: Q.sort,
		splice: Q.splice
	}, ot.extend = ot.fn.extend = function() {
		var t, e, n, i, r, o, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			c = !1;
		for("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
			if(null != (t = arguments[s]))
				for(e in t) n = a[e], i = t[e], a !== i && (c && i && (ot.isPlainObject(i) || (r = ot.isArray(i))) ? (r ? (r = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, a[e] = ot.extend(c, o, i)) : void 0 !== i && (a[e] = i));
		return a
	}, ot.extend({
		expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isFunction: function(t) {
			return "function" === ot.type(t)
		},
		isArray: Array.isArray,
		isWindow: function(t) {
			return null != t && t === t.window
		},
		isNumeric: function(t) {
			var e = t && t.toString();
			return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
		},
		isPlainObject: function(t) {
			return "object" === ot.type(t) && !t.nodeType && !ot.isWindow(t) && !(t.constructor && !nt.call(t.constructor.prototype, "isPrototypeOf"))
		},
		isEmptyObject: function(t) {
			var e;
			for(e in t) return !1;
			return !0
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
		},
		globalEval: function(t) {
			var e, n = eval;
			(t = ot.trim(t)) && (1 === t.indexOf("use strict") ? (e = Y.createElement("script"), e.text = t, Y.head.appendChild(e).parentNode.removeChild(e)) : n(t))
		},
		camelCase: function(t) {
			return t.replace(st, "ms-").replace(lt, ct)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e) {
			var i, r = 0;
			if(n(t))
				for(i = t.length; i > r && !1 !== e.call(t[r], r, t[r]); r++);
			else
				for(r in t)
					if(!1 === e.call(t[r], r, t[r])) break;
			return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(at, "")
		},
		makeArray: function(t, e) {
			var i = e || [];
			return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : J.call(i, t)), i
		},
		inArray: function(t, e, n) {
			return null == e ? -1 : Z.call(e, t, n)
		},
		merge: function(t, e) {
			for(var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
			return t.length = r, t
		},
		grep: function(t, e, n) {
			for(var i = [], r = 0, o = t.length, a = !n; o > r; r++) !e(t[r], r) !== a && i.push(t[r]);
			return i
		},
		map: function(t, e, i) {
			var r, o, a = 0,
				s = [];
			if(n(t))
				for(r = t.length; r > a; a++) null != (o = e(t[a], a, i)) && s.push(o);
			else
				for(a in t) null != (o = e(t[a], a, i)) && s.push(o);
			return K.apply([], s)
		},
		guid: 1,
		proxy: function(t, e) {
			var n, i, r;
			return "string" == typeof e && (n = t[e], e = t, t = n), ot.isFunction(t) ? (i = $.call(arguments, 2), r = function() {
				return t.apply(e || this, i.concat($.call(arguments)))
			}, r.guid = t.guid = t.guid || ot.guid++, r) : void 0
		},
		now: UDate2,
		support: it
	}), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = Q[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
		tt["[object " + e + "]"] = e.toLowerCase()
	});
	var ht = function(t) {
		function e(t, e, n, i) {
			var r, o, a, s, c, u, d, p, f = e && e.ownerDocument,
				m = e ? e.nodeType : 9;
			if(n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
			if(!i && ((e ? e.ownerDocument || e : z) !== S && A(e), e = e || S, P)) {
				if(11 !== m && (u = mt.exec(t)))
					if(r = u[1]) {
						if(9 === m) {
							if(!(a = e.getElementById(r))) return n;
							if(a.id === r) return n.push(a), n
						} else if(f && (a = f.getElementById(r)) && F(e, a) && a.id === r) return n.push(a), n
					} else {
						if(u[2]) return $.apply(n, e.getElementsByTagName(t)), n;
						if((r = u[3]) && y.getElementsByClassName && e.getElementsByClassName) return $.apply(n, e.getElementsByClassName(r)), n
					}
				if(y.qsa && !j[t + " "] && (!k || !k.test(t))) {
					if(1 !== m) f = e, p = t;
					else if("object" !== e.nodeName.toLowerCase()) {
						for((s = e.getAttribute("id")) ? s = s.replace(Et, "\\$&") : e.setAttribute("id", s = O), d = w(t), o = d.length, c = ht.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = c + " " + h(d[o]);
						p = d.join(","), f = gt.test(t) && l(e.parentNode) || e
					}
					if(p) try {
						return $.apply(n, f.querySelectorAll(p)), n
					} catch(t) {} finally {
						s === O && e.removeAttribute("id")
					}
				}
			}
			return R(t.replace(ot, "$1"), e, n, i)
		}

		function n() {
			function t(n, i) {
				return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
			}
			var e = [];
			return t
		}

		function i(t) {
			return t[O] = !0, t
		}

		function r(t) {
			var e = S.createElement("div");
			try {
				return !!t(e)
			} catch(t) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function o(t, e) {
			for(var n = t.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = e
		}

		function a(t, e) {
			var n = e && t,
				i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || W) - (~t.sourceIndex || W);
			if(i) return i;
			if(n)
				for(; n = n.nextSibling;)
					if(n === e) return -1;
			return t ? 1 : -1
		}

		function s(t) {
			return i(function(e) {
				return e = +e, i(function(n, i) {
					for(var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
				})
			})
		}

		function l(t) {
			return t && void 0 !== t.getElementsByTagName && t
		}

		function c() {}

		function h(t) {
			for(var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
			return i
		}

		function u(t, e, n) {
			var i = e.dir,
				r = n && "parentNode" === i,
				o = N++;
			return e.first ? function(e, n, o) {
				for(; e = e[i];)
					if(1 === e.nodeType || r) return t(e, n, o)
			} : function(e, n, a) {
				var s, l, c, h = [I, o];
				if(a) {
					for(; e = e[i];)
						if((1 === e.nodeType || r) && t(e, n, a)) return !0
				} else
					for(; e = e[i];)
						if(1 === e.nodeType || r) {
							if(c = e[O] || (e[O] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (s = l[i]) && s[0] === I && s[1] === o) return h[2] = s[2];
							if(l[i] = h, h[2] = t(e, n, a)) return !0
						}
			}
		}

		function d(t) {
			return t.length > 1 ? function(e, n, i) {
				for(var r = t.length; r--;)
					if(!t[r](e, n, i)) return !1;
				return !0
			} : t[0]
		}

		function p(t, n, i) {
			for(var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
			return i
		}

		function f(t, e, n, i, r) {
			for(var o, a = [], s = 0, l = t.length, c = null != e; l > s; s++)(o = t[s]) && (!n || n(o, i, r)) && (a.push(o), c && e.push(s));
			return a
		}

		function m(t, e, n, r, o, a) {
			return r && !r[O] && (r = m(r)), o && !o[O] && (o = m(o, a)), i(function(i, a, s, l) {
				var c, h, u, d = [],
					m = [],
					g = a.length,
					E = i || p(e || "*", s.nodeType ? [s] : s, []),
					v = !t || !i && e ? E : f(E, d, t, s, l),
					y = n ? o || (i ? t : g || r) ? [] : a : v;
				if(n && n(v, y, s, l), r)
					for(c = f(y, m), r(c, [], s, l), h = c.length; h--;)(u = c[h]) && (y[m[h]] = !(v[m[h]] = u));
				if(i) {
					if(o || t) {
						if(o) {
							for(c = [], h = y.length; h--;)(u = y[h]) && c.push(v[h] = u);
							o(null, y = [], c, l)
						}
						for(h = y.length; h--;)(u = y[h]) && (c = o ? J(i, u) : d[h]) > -1 && (i[c] = !(a[c] = u))
					}
				} else y = f(y === a ? y.splice(g, y.length) : y), o ? o(null, a, y, l) : $.apply(a, y)
			})
		}

		function g(t) {
			for(var e, n, i, r = t.length, o = _.relative[t[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = u(function(t) {
					return t === e
				}, a, !0), c = u(function(t) {
					return J(e, t) > -1
				}, a, !0), p = [function(t, n, i) {
					var r = !o && (i || n !== H) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
					return e = null, r
				}]; r > s; s++)
				if(n = _.relative[t[s].type]) p = [u(d(p), n)];
				else {
					if(n = _.filter[t[s].type].apply(null, t[s].matches), n[O]) {
						for(i = ++s; r > i && !_.relative[t[i].type]; i++);
						return m(s > 1 && d(p), s > 1 && h(t.slice(0, s - 1).concat({
							value: " " === t[s - 2].type ? "*" : ""
						})).replace(ot, "$1"), n, i > s && g(t.slice(s, i)), r > i && g(t = t.slice(i)), r > i && h(t))
					}
					p.push(n)
				}
			return d(p)
		}

		function E(t, n) {
			var r = n.length > 0,
				o = t.length > 0,
				a = function(i, a, s, l, c) {
					var h, u, d, p = 0,
						m = "0",
						g = i && [],
						E = [],
						v = H,
						y = i || o && _.find.TAG("*", c),
						T = I += null == v ? 1 : Math.random() || .1,
						x = y.length;
					for(c && (H = a === S || a || c); m !== x && null != (h = y[m]); m++) {
						if(o && h) {
							for(u = 0, a || h.ownerDocument === S || (A(h), s = !P); d = t[u++];)
								if(d(h, a || S, s)) {
									l.push(h);
									break
								}
							c && (I = T)
						}
						r && ((h = !d && h) && p--, i && g.push(h))
					}
					if(p += m, r && m !== p) {
						for(u = 0; d = n[u++];) d(g, E, a, s);
						if(i) {
							if(p > 0)
								for(; m--;) g[m] || E[m] || (E[m] = Q.call(l));
							E = f(E)
						}
						$.apply(l, E), c && !i && E.length > 0 && p + n.length > 1 && e.uniqueSort(l)
					}
					return c && (I = T, H = v), g
				};
			return r ? i(a) : a
		}
		var v, y, _, T, x, w, b, R, H, C, M, A, S, L, P, k, D, B, F, O = "sizzle" + 1 * UDate(),
			z = t.document,
			I = 0,
			N = 0,
			U = n(),
			V = n(),
			j = n(),
			G = function(t, e) {
				return t === e && (M = !0), 0
			},
			W = 1 << 31,
			q = {}.hasOwnProperty,
			X = [],
			Q = X.pop,
			Y = X.push,
			$ = X.push,
			K = X.slice,
			J = function(t, e) {
				for(var n = 0, i = t.length; i > n; n++)
					if(t[n] === e) return n;
				return -1
			},
			Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			tt = "[\\x20\\t\\r\\n\\f]",
			et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
			it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
			rt = new RegExp(tt + "+", "g"),
			ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
			at = new RegExp("^" + tt + "*," + tt + "*"),
			st = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
			lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
			ct = new RegExp(it),
			ht = new RegExp("^" + et + "$"),
			ut = {
				ID: new RegExp("^#(" + et + ")"),
				CLASS: new RegExp("^\\.(" + et + ")"),
				TAG: new RegExp("^(" + et + "|[*])"),
				ATTR: new RegExp("^" + nt),
				PSEUDO: new RegExp("^" + it),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + Z + ")$", "i"),
				needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
			},
			dt = /^(?:input|select|textarea|button)$/i,
			pt = /^h\d$/i,
			ft = /^[^{]+\{\s*\[native \w/,
			mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			gt = /[+~]/,
			Et = /'|\\/g,
			vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
			yt = function(t, e, n) {
				var i = "0x" + e - 65536;
				return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			_t = function() {
				A()
			};
		try {
			$.apply(X = K.call(z.childNodes), z.childNodes), X[z.childNodes.length].nodeType
		} catch(t) {
			$ = {
				apply: X.length ? function(t, e) {
					Y.apply(t, K.call(e))
				} : function(t, e) {
					for(var n = t.length, i = 0; t[n++] = e[i++];);
					t.length = n - 1
				}
			}
		}
		y = e.support = {}, x = e.isXML = function(t) {
			var e = t && (t.ownerDocument || t).documentElement;
			return !!e && "HTML" !== e.nodeName
		}, A = e.setDocument = function(t) {
			var e, n, i = t ? t.ownerDocument || t : z;
			return i !== S && 9 === i.nodeType && i.documentElement ? (S = i, L = S.documentElement, P = !x(S), (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), y.attributes = r(function(t) {
				return t.className = "i", !t.getAttribute("className")
			}), y.getElementsByTagName = r(function(t) {
				return t.appendChild(S.createComment("")), !t.getElementsByTagName("*").length
			}), y.getElementsByClassName = ft.test(S.getElementsByClassName), y.getById = r(function(t) {
				return L.appendChild(t).id = O, !S.getElementsByName || !S.getElementsByName(O).length
			}), y.getById ? (_.find.ID = function(t, e) {
				if(void 0 !== e.getElementById && P) {
					var n = e.getElementById(t);
					return n ? [n] : []
				}
			}, _.filter.ID = function(t) {
				var e = t.replace(vt, yt);
				return function(t) {
					return t.getAttribute("id") === e
				}
			}) : (delete _.find.ID, _.filter.ID = function(t) {
				var e = t.replace(vt, yt);
				return function(t) {
					var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
					return n && n.value === e
				}
			}), _.find.TAG = y.getElementsByTagName ? function(t, e) {
				return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : y.qsa ? e.querySelectorAll(t) : void 0
			} : function(t, e) {
				var n, i = [],
					r = 0,
					o = e.getElementsByTagName(t);
				if("*" === t) {
					for(; n = o[r++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return o
			}, _.find.CLASS = y.getElementsByClassName && function(t, e) {
				return void 0 !== e.getElementsByClassName && P ? e.getElementsByClassName(t) : void 0
			}, D = [], k = [], (y.qsa = ft.test(S.querySelectorAll)) && (r(function(t) {
				L.appendChild(t).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && k.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || k.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + O + "-]").length || k.push("~="), t.querySelectorAll(":checked").length || k.push(":checked"), t.querySelectorAll("a#" + O + "+*").length || k.push(".#.+[+~]")
			}), r(function(t) {
				var e = S.createElement("input");
				e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && k.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || k.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), k.push(",.*:")
			})), (y.matchesSelector = ft.test(B = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(t) {
				y.disconnectedMatch = B.call(t, "div"), B.call(t, "[s!='']:x"), D.push("!=", it)
			}), k = k.length && new RegExp(k.join("|")), D = D.length && new RegExp(D.join("|")), e = ft.test(L.compareDocumentPosition), F = e || ft.test(L.contains) ? function(t, e) {
				var n = 9 === t.nodeType ? t.documentElement : t,
					i = e && e.parentNode;
				return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
			} : function(t, e) {
				if(e)
					for(; e = e.parentNode;)
						if(e === t) return !0;
				return !1
			}, G = e ? function(t, e) {
				if(t === e) return M = !0, 0;
				var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
				return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !y.sortDetached && e.compareDocumentPosition(t) === n ? t === S || t.ownerDocument === z && F(z, t) ? -1 : e === S || e.ownerDocument === z && F(z, e) ? 1 : C ? J(C, t) - J(C, e) : 0 : 4 & n ? -1 : 1)
			} : function(t, e) {
				if(t === e) return M = !0, 0;
				var n, i = 0,
					r = t.parentNode,
					o = e.parentNode,
					s = [t],
					l = [e];
				if(!r || !o) return t === S ? -1 : e === S ? 1 : r ? -1 : o ? 1 : C ? J(C, t) - J(C, e) : 0;
				if(r === o) return a(t, e);
				for(n = t; n = n.parentNode;) s.unshift(n);
				for(n = e; n = n.parentNode;) l.unshift(n);
				for(; s[i] === l[i];) i++;
				return i ? a(s[i], l[i]) : s[i] === z ? -1 : l[i] === z ? 1 : 0
			}, S) : S
		}, e.matches = function(t, n) {
			return e(t, null, null, n)
		}, e.matchesSelector = function(t, n) {
			if((t.ownerDocument || t) !== S && A(t), n = n.replace(lt, "='$1']"), y.matchesSelector && P && !j[n + " "] && (!D || !D.test(n)) && (!k || !k.test(n))) try {
				var i = B.call(t, n);
				if(i || y.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
			} catch(t) {}
			return e(n, S, null, [t]).length > 0
		}, e.contains = function(t, e) {
			return(t.ownerDocument || t) !== S && A(t), F(t, e)
		}, e.attr = function(t, e) {
			(t.ownerDocument || t) !== S && A(t);
			var n = _.attrHandle[e.toLowerCase()],
				i = n && q.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
			return void 0 !== i ? i : y.attributes || !P ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
		}, e.error = function(t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, e.uniqueSort = function(t) {
			var e, n = [],
				i = 0,
				r = 0;
			if(M = !y.detectDuplicates, C = !y.sortStable && t.slice(0), t.sort(G), M) {
				for(; e = t[r++];) e === t[r] && (i = n.push(r));
				for(; i--;) t.splice(n[i], 1)
			}
			return C = null, t
		}, T = e.getText = function(t) {
			var e, n = "",
				i = 0,
				r = t.nodeType;
			if(r) {
				if(1 === r || 9 === r || 11 === r) {
					if("string" == typeof t.textContent) return t.textContent;
					for(t = t.firstChild; t; t = t.nextSibling) n += T(t)
				} else if(3 === r || 4 === r) return t.nodeValue
			} else
				for(; e = t[i++];) n += T(e);
			return n
		}, _ = e.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: ut,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(t) {
					return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				},
				CHILD: function(t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
				},
				PSEUDO: function(t) {
					var e, n = !t[6] && t[2];
					return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = w(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function(t) {
					var e = t.replace(vt, yt).toLowerCase();
					return "*" === t ? function() {
						return !0
					} : function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				},
				CLASS: function(t) {
					var e = U[t + " "];
					return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && U(t, function(t) {
						return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
					})
				},
				ATTR: function(t, n, i) {
					return function(r) {
						var o = e.attr(r, t);
						return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
					}
				},
				CHILD: function(t, e, n, i, r) {
					var o = "nth" !== t.slice(0, 3),
						a = "last" !== t.slice(-4),
						s = "of-type" === e;
					return 1 === i && 0 === r ? function(t) {
						return !!t.parentNode
					} : function(e, n, l) {
						var c, h, u, d, p, f, m = o !== a ? "nextSibling" : "previousSibling",
							g = e.parentNode,
							E = s && e.nodeName.toLowerCase(),
							v = !l && !s,
							y = !1;
						if(g) {
							if(o) {
								for(; m;) {
									for(d = e; d = d[m];)
										if(s ? d.nodeName.toLowerCase() === E : 1 === d.nodeType) return !1;
									f = m = "only" === t && !f && "nextSibling"
								}
								return !0
							}
							if(f = [a ? g.firstChild : g.lastChild], a && v) {
								for(d = g, u = d[O] || (d[O] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === I && c[1], y = p && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (y = p = 0) || f.pop();)
									if(1 === d.nodeType && ++y && d === e) {
										h[t] = [I, p, y];
										break
									}
							} else if(v && (d = e, u = d[O] || (d[O] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === I && c[1], y = p), !1 === y)
								for(;
									(d = ++p && d && d[m] || (y = p = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== E : 1 !== d.nodeType) || !++y || (v && (u = d[O] || (d[O] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), h[t] = [I, y]), d !== e)););
							return(y -= r) === i || y % i == 0 && y / i >= 0
						}
					}
				},
				PSEUDO: function(t, n) {
					var r, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
					return o[O] ? o(n) : o.length > 1 ? (r = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
						for(var i, r = o(t, n), a = r.length; a--;) i = J(t, r[a]), t[i] = !(e[i] = r[a])
					}) : function(t) {
						return o(t, 0, r)
					}) : o
				}
			},
			pseudos: {
				not: i(function(t) {
					var e = [],
						n = [],
						r = b(t.replace(ot, "$1"));
					return r[O] ? i(function(t, e, n, i) {
						for(var o, a = r(t, null, i, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
					}) : function(t, i, o) {
						return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
					}
				}),
				has: i(function(t) {
					return function(n) {
						return e(t, n).length > 0
					}
				}),
				contains: i(function(t) {
					return t = t.replace(vt, yt),
						function(e) {
							return(e.textContent || e.innerText || T(e)).indexOf(t) > -1
						}
				}),
				lang: i(function(t) {
					return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(),
						function(e) {
							var n;
							do {
								if(n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return(n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
							} while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
				}),
				target: function(e) {
					var n = t.location && t.location.hash;
					return n && n.slice(1) === e.id
				},
				root: function(t) {
					return t === L
				},
				focus: function(t) {
					return t === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
				},
				enabled: function(t) {
					return !1 === t.disabled
				},
				disabled: function(t) {
					return !0 === t.disabled
				},
				checked: function(t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && !!t.checked || "option" === e && !!t.selected
				},
				selected: function(t) {
					return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
				},
				empty: function(t) {
					for(t = t.firstChild; t; t = t.nextSibling)
						if(t.nodeType < 6) return !1;
					return !0
				},
				parent: function(t) {
					return !_.pseudos.empty(t)
				},
				header: function(t) {
					return pt.test(t.nodeName)
				},
				input: function(t) {
					return dt.test(t.nodeName)
				},
				button: function(t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				},
				text: function(t) {
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
				},
				first: s(function() {
					return [0]
				}),
				last: s(function(t, e) {
					return [e - 1]
				}),
				eq: s(function(t, e, n) {
					return [0 > n ? n + e : n]
				}),
				even: s(function(t, e) {
					for(var n = 0; e > n; n += 2) t.push(n);
					return t
				}),
				odd: s(function(t, e) {
					for(var n = 1; e > n; n += 2) t.push(n);
					return t
				}),
				lt: s(function(t, e, n) {
					for(var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
					return t
				}),
				gt: s(function(t, e, n) {
					for(var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
					return t
				})
			}
		}, _.pseudos.nth = _.pseudos.eq;
		for(v in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) _.pseudos[v] = function(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}(v);
		for(v in {
				submit: !0,
				reset: !0
			}) _.pseudos[v] = function(t) {
			return function(e) {
				var n = e.nodeName.toLowerCase();
				return("input" === n || "button" === n) && e.type === t
			}
		}(v);
		return c.prototype = _.filters = _.pseudos, _.setFilters = new c, w = e.tokenize = function(t, n) {
			var i, r, o, a, s, l, c, h = V[t + " "];
			if(h) return n ? 0 : h.slice(0);
			for(s = t, l = [], c = _.preFilter; s;) {
				(!i || (r = at.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = st.exec(s)) && (i = r.shift(), o.push({
					value: i,
					type: r[0].replace(ot, " ")
				}), s = s.slice(i.length));
				for(a in _.filter) !(r = ut[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
					value: i,
					type: a,
					matches: r
				}), s = s.slice(i.length));
				if(!i) break
			}
			return n ? s.length : s ? e.error(t) : V(t, l).slice(0)
		}, b = e.compile = function(t, e) {
			var n, i = [],
				r = [],
				o = j[t + " "];
			if(!o) {
				for(e || (e = w(t)), n = e.length; n--;) o = g(e[n]), o[O] ? i.push(o) : r.push(o);
				o = j(t, E(r, i)), o.selector = t
			}
			return o
		}, R = e.select = function(t, e, n, i) {
			var r, o, a, s, c, u = "function" == typeof t && t,
				d = !i && w(t = u.selector || t);
			if(n = n || [], 1 === d.length) {
				if(o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && y.getById && 9 === e.nodeType && P && _.relative[o[1].type]) {
					if(!(e = (_.find.ID(a.matches[0].replace(vt, yt), e) || [])[0])) return n;
					u && (e = e.parentNode), t = t.slice(o.shift().value.length)
				}
				for(r = ut.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
					if((c = _.find[s]) && (i = c(a.matches[0].replace(vt, yt), gt.test(o[0].type) && l(e.parentNode) || e))) {
						if(o.splice(r, 1), !(t = i.length && h(o))) return $.apply(n, i), n;
						break
					}
			}
			return(u || b(t, d))(i, e, !P, n, !e || gt.test(t) && l(e.parentNode) || e), n
		}, y.sortStable = O.split("").sort(G).join("") === O, y.detectDuplicates = !!M, A(), y.sortDetached = r(function(t) {
			return 1 & t.compareDocumentPosition(S.createElement("div"))
		}), r(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(t, e, n) {
			return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), y.attributes && r(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || o("value", function(t, e, n) {
			return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}), r(function(t) {
			return null == t.getAttribute("disabled")
		}) || o(Z, function(t, e, n) {
			var i;
			return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
		}), e
	}(t);
	ot.find = ht, ot.expr = ht.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ht.uniqueSort, ot.text = ht.getText, ot.isXMLDoc = ht.isXML, ot.contains = ht.contains;
	var ut = function(t, e, n) {
			for(var i = [], r = void 0 !== n;
				(t = t[e]) && 9 !== t.nodeType;)
				if(1 === t.nodeType) {
					if(r && ot(t).is(n)) break;
					i.push(t)
				}
			return i
		},
		dt = function(t, e) {
			for(var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		},
		pt = ot.expr.match.needsContext,
		ft = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		mt = /^.[^:#\[\.,]*$/;
	ot.filter = function(t, e, n) {
		var i = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, ot.fn.extend({
		find: function(t) {
			var e, n = this.length,
				i = [],
				r = this;
			if("string" != typeof t) return this.pushStack(ot(t).filter(function() {
				for(e = 0; n > e; e++)
					if(ot.contains(r[e], this)) return !0
			}));
			for(e = 0; n > e; e++) ot.find(t, r[e], i);
			return i = this.pushStack(n > 1 ? ot.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
		},
		filter: function(t) {
			return this.pushStack(i(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(i(this, t || [], !0))
		},
		is: function(t) {
			return !!i(this, "string" == typeof t && pt.test(t) ? ot(t) : t || [], !1).length
		}
	});
	var gt, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(ot.fn.init = function(t, e, n) {
		var i, r;
		if(!t) return this;
		if(n = n || gt, "string" == typeof t) {
			if(!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Et.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
			if(i[1]) {
				if(e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Y, !0)), ft.test(i[1]) && ot.isPlainObject(e))
					for(i in e) ot.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
				return this
			}
			return r = Y.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Y, this.selector = t, this
		}
		return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
	}).prototype = ot.fn, gt = ot(Y);
	var vt = /^(?:parents|prev(?:Until|All))/,
		yt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ot.fn.extend({
		has: function(t) {
			var e = ot(t, this),
				n = e.length;
			return this.filter(function() {
				for(var t = 0; n > t; t++)
					if(ot.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			for(var n, i = 0, r = this.length, o = [], a = pt.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; r > i; i++)
				for(n = this[i]; n && n !== e; n = n.parentNode)
					if(n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
		},
		index: function(t) {
			return t ? "string" == typeof t ? Z.call(ot(t), this[0]) : Z.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), ot.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return ut(t, "parentNode")
		},
		parentsUntil: function(t, e, n) {
			return ut(t, "parentNode", n)
		},
		next: function(t) {
			return r(t, "nextSibling")
		},
		prev: function(t) {
			return r(t, "previousSibling")
		},
		nextAll: function(t) {
			return ut(t, "nextSibling")
		},
		prevAll: function(t) {
			return ut(t, "previousSibling")
		},
		nextUntil: function(t, e, n) {
			return ut(t, "nextSibling", n)
		},
		prevUntil: function(t, e, n) {
			return ut(t, "previousSibling", n)
		},
		siblings: function(t) {
			return dt((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return dt(t.firstChild)
		},
		contents: function(t) {
			return t.contentDocument || ot.merge([], t.childNodes)
		}
	}, function(t, e) {
		ot.fn[t] = function(n, i) {
			var r = ot.map(this, e, n);
			return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ot.filter(i, r)), this.length > 1 && (yt[t] || ot.uniqueSort(r), vt.test(t) && r.reverse()), this.pushStack(r)
		}
	});
	var _t = /\S+/g;
	ot.Callbacks = function(t) {
		t = "string" == typeof t ? o(t) : ot.extend({}, t);
		var e, n, i, r, a = [],
			s = [],
			l = -1,
			c = function() {
				for(r = t.once, i = e = !0; s.length; l = -1)
					for(n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && t.stopOnFalse && (l = a.length, n = !1);
				t.memory || (n = !1), e = !1, r && (a = n ? [] : "")
			},
			h = {
				add: function() {
					return a && (n && !e && (l = a.length - 1, s.push(n)), function e(n) {
						ot.each(n, function(n, i) {
							ot.isFunction(i) ? t.unique && h.has(i) || a.push(i) : i && i.length && "string" !== ot.type(i) && e(i)
						})
					}(arguments), n && !e && c()), this
				},
				remove: function() {
					return ot.each(arguments, function(t, e) {
						for(var n;
							(n = ot.inArray(e, a, n)) > -1;) a.splice(n, 1), l >= n && l--
					}), this
				},
				has: function(t) {
					return t ? ot.inArray(t, a) > -1 : a.length > 0
				},
				empty: function() {
					return a && (a = []), this
				},
				disable: function() {
					return r = s = [], a = n = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return r = s = [], n || (a = n = ""), this
				},
				locked: function() {
					return !!r
				},
				fireWith: function(t, n) {
					return r || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || c()), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return h
	}, ot.extend({
		Deferred: function(t) {
			var e = [
					["resolve", "done", ot.Callbacks("once memory"), "resolved"],
					["reject", "fail", ot.Callbacks("once memory"), "rejected"],
					["notify", "progress", ot.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					then: function() {
						var t = arguments;
						return ot.Deferred(function(n) {
							ot.each(e, function(e, o) {
								var a = ot.isFunction(t[e]) && t[e];
								r[o[1]](function() {
									var t = a && a.apply(this, arguments);
									t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
								})
							}), t = null
						}).promise()
					},
					promise: function(t) {
						return null != t ? ot.extend(t, i) : i
					}
				},
				r = {};
			return i.pipe = i.then, ot.each(e, function(t, o) {
				var a = o[2],
					s = o[3];
				i[o[1]] = a.add, s && a.add(function() {
					n = s
				}, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
					return r[o[0] + "With"](this === r ? i : this, arguments), this
				}, r[o[0] + "With"] = a.fireWith
			}), i.promise(r), t && t.call(r, r), r
		},
		when: function(t) {
			var e, n, i, r = 0,
				o = $.call(arguments),
				a = o.length,
				s = 1 !== a || t && ot.isFunction(t.promise) ? a : 0,
				l = 1 === s ? t : ot.Deferred(),
				c = function(t, n, i) {
					return function(r) {
						n[t] = this, i[t] = arguments.length > 1 ? $.call(arguments) : r, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
					}
				};
			if(a > 1)
				for(e = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, e)).done(c(r, i, o)).fail(l.reject) : --s;
			return s || l.resolveWith(i, o), l.promise()
		}
	});
	var Tt;
	ot.fn.ready = function(t) {
		return ot.ready.promise().done(t), this
	}, ot.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? ot.readyWait++ : ot.ready(!0)
		},
		ready: function(t) {
			(!0 === t ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, !0 !== t && --ot.readyWait > 0 || (Tt.resolveWith(Y, [ot]), ot.fn.triggerHandler && (ot(Y).triggerHandler("ready"), ot(Y).off("ready"))))
		}
	}), ot.ready.promise = function(e) {
		return Tt || (Tt = ot.Deferred(), "complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? t.setTimeout(ot.ready) : (Y.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a))), Tt.promise(e)
	}, ot.ready.promise();
	var xt = function(t, e, n, i, r, o, a) {
			var s = 0,
				l = t.length,
				c = null == n;
			if("object" === ot.type(n)) {
				r = !0;
				for(s in n) xt(t, e, s, n[s], !0, o, a)
			} else if(void 0 !== i && (r = !0, ot.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
					return c.call(ot(t), n)
				})), e))
				for(; l > s; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
			return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
		},
		wt = function(t) {
			return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
		};
	s.uid = 1, s.prototype = {
		register: function(t, e) {
			var n = e || {};
			return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
				value: n,
				writable: !0,
				configurable: !0
			}), t[this.expando]
		},
		cache: function(t) {
			if(!wt(t)) return {};
			var e = t[this.expando];
			return e || (e = {}, wt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
				value: e,
				configurable: !0
			}))), e
		},
		set: function(t, e, n) {
			var i, r = this.cache(t);
			if("string" == typeof e) r[e] = n;
			else
				for(i in e) r[i] = e[i];
			return r
		},
		get: function(t, e) {
			return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
		},
		access: function(t, e, n) {
			var i;
			return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, ot.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
		},
		remove: function(t, e) {
			var n, i, r, o = t[this.expando];
			if(void 0 !== o) {
				if(void 0 === e) this.register(t);
				else {
					ot.isArray(e) ? i = e.concat(e.map(ot.camelCase)) : (r = ot.camelCase(e), e in o ? i = [e, r] : (i = r, i = i in o ? [i] : i.match(_t) || [])), n = i.length;
					for(; n--;) delete o[i[n]]
				}(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
			}
		},
		hasData: function(t) {
			var e = t[this.expando];
			return void 0 !== e && !ot.isEmptyObject(e)
		}
	};
	var bt = new s,
		Rt = new s,
		Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ct = /[A-Z]/g;
	ot.extend({
		hasData: function(t) {
			return Rt.hasData(t) || bt.hasData(t)
		},
		data: function(t, e, n) {
			return Rt.access(t, e, n)
		},
		removeData: function(t, e) {
			Rt.remove(t, e)
		},
		_data: function(t, e, n) {
			return bt.access(t, e, n)
		},
		_removeData: function(t, e) {
			bt.remove(t, e)
		}
	}), ot.fn.extend({
		data: function(t, e) {
			var n, i, r, o = this[0],
				a = o && o.attributes;
			if(void 0 === t) {
				if(this.length && (r = Rt.get(o), 1 === o.nodeType && !bt.get(o, "hasDataAttrs"))) {
					for(n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(o, i, r[i])));
					bt.set(o, "hasDataAttrs", !0)
				}
				return r
			}
			return "object" == typeof t ? this.each(function() {
				Rt.set(this, t)
			}) : xt(this, function(e) {
				var n, i;
				if(o && void 0 === e) {
					if(void 0 !== (n = Rt.get(o, t) || Rt.get(o, t.replace(Ct, "-$&").toLowerCase()))) return n;
					if(i = ot.camelCase(t), void 0 !== (n = Rt.get(o, i))) return n;
					if(void 0 !== (n = l(o, i, void 0))) return n
				} else i = ot.camelCase(t), this.each(function() {
					var n = Rt.get(this, i);
					Rt.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && Rt.set(this, t, e)
				})
			}, null, e, arguments.length > 1, null, !0)
		},
		removeData: function(t) {
			return this.each(function() {
				Rt.remove(this, t)
			})
		}
	}), ot.extend({
		queue: function(t, e, n) {
			var i;
			return t ? (e = (e || "fx") + "queue", i = bt.get(t, e), n && (!i || ot.isArray(n) ? i = bt.access(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var n = ot.queue(t, e),
				i = n.length,
				r = n.shift(),
				o = ot._queueHooks(t, e),
				a = function() {
					ot.dequeue(t, e)
				};
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(t, e) {
			var n = e + "queueHooks";
			return bt.get(t, n) || bt.access(t, n, {
				empty: ot.Callbacks("once memory").add(function() {
					bt.remove(t, [e + "queue", n])
				})
			})
		}
	}), ot.fn.extend({
		queue: function(t, e) {
			var n = 2;
			return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
				var n = ot.queue(this, t, e);
				ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				ot.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			var n, i = 1,
				r = ot.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--i || r.resolveWith(o, [o])
				};
			for("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = bt.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
			return s(), r.promise(e)
		}
	});
	var Mt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		At = new RegExp("^(?:([+-])=|)(" + Mt + ")([a-z%]*)$", "i"),
		St = ["Top", "Right", "Bottom", "Left"],
		Lt = function(t, e) {
			return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
		},
		Pt = /^(?:checkbox|radio)$/i,
		kt = /<([\w:-]+)/,
		Dt = /^$|\/(?:java|ecma)script/i,
		Bt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td;
	var Ft = /<|&#?\w+;/;
	! function() {
		var t = Y.createDocumentFragment(),
			e = t.appendChild(Y.createElement("div")),
			n = Y.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
	}();
	var Ot = /^key/,
		zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		It = /^([^.]*)(?:\.(.+)|)/;
	ot.event = {
		global: {},
		add: function(t, e, n, i, r) {
			var o, a, s, l, c, h, u, d, p, f, m, g = bt.get(t);
			if(g)
				for(n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ot.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
						return void 0 !== ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
					}), e = (e || "").match(_t) || [""], c = e.length; c--;) s = It.exec(e[c]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p && (u = ot.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = ot.event.special[p] || {}, h = ot.extend({
					type: p,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && ot.expr.match.needsContext.test(r),
					namespace: f.join(".")
				}, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, f, a) || t.addEventListener && t.addEventListener(p, a)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), ot.event.global[p] = !0)
		},
		remove: function(t, e, n, i, r) {
			var o, a, s, l, c, h, u, d, p, f, m, g = bt.hasData(t) && bt.get(t);
			if(g && (l = g.events)) {
				for(e = (e || "").match(_t) || [""], c = e.length; c--;)
					if(s = It.exec(e[c]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p) {
						for(u = ot.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) h = d[o], !r && m !== h.origType || n && n.guid !== h.guid || s && !s.test(h.namespace) || i && i !== h.selector && ("**" !== i || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
						a && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || ot.removeEvent(t, p, g.handle), delete l[p])
					} else
						for(p in l) ot.event.remove(t, p + e[c], n, i, !0);
				ot.isEmptyObject(l) && bt.remove(t, "handle events")
			}
		},
		dispatch: function(t) {
			t = ot.event.fix(t);
			var e, n, i, r, o, a = [],
				s = $.call(arguments),
				l = (bt.get(this, "events") || {})[t.type] || [],
				c = ot.event.special[t.type] || {};
			if(s[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
				for(a = ot.event.handlers.call(this, t, l), e = 0;
					(r = a[e++]) && !t.isPropagationStopped();)
					for(t.currentTarget = r.elem, n = 0;
						(o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, void 0 !== (i = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var n, i, r, o, a = [],
				s = e.delegateCount,
				l = t.target;
			if(s && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
				for(; l !== this; l = l.parentNode || this)
					if(1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
						for(i = [], n = 0; s > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ot(r, this).index(l) > -1 : ot.find(r, this, null, [l]).length), i[r] && i.push(o);
						i.length && a.push({
							elem: l,
							handlers: i
						})
					}
			return s < e.length && a.push({
				elem: this,
				handlers: e.slice(s)
			}), a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(t, e) {
				var n, i, r, o = e.button;
				return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Y, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
			}
		},
		fix: function(t) {
			if(t[ot.expando]) return t;
			var e, n, i, r = t.type,
				o = t,
				a = this.fixHooks[r];
			for(a || (this.fixHooks[r] = a = zt.test(r) ? this.mouseHooks : Ot.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new ot.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
			return t.target || (t.target = Y), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== m() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === m() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(t) {
					return ot.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		}
	}, ot.removeEvent = function(t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n)
	}, ot.Event = function(t, e) {
		return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? p : f) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
	}, ot.Event.prototype = {
		constructor: ot.Event,
		isDefaultPrevented: f,
		isPropagationStopped: f,
		isImmediatePropagationStopped: f,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = p, t && t.preventDefault()
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = p, t && t.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ot.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, e) {
		ot.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t) {
				var n, i = this,
					r = t.relatedTarget,
					o = t.handleObj;
				return(!r || r !== i && !ot.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
			}
		}
	}), ot.fn.extend({
		on: function(t, e, n, i) {
			return g(this, t, e, n, i)
		},
		one: function(t, e, n, i) {
			return g(this, t, e, n, i, 1)
		},
		off: function(t, e, n) {
			var i, r;
			if(t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if("object" == typeof t) {
				for(r in t) this.off(r, e, t[r]);
				return this
			}
			return(!1 === e || "function" == typeof e) && (n = e, e = void 0), !1 === n && (n = f), this.each(function() {
				ot.event.remove(this, t, n, e)
			})
		}
	});
	var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		Ut = /<script|<style|<link/i,
		Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		jt = /^true\/(.*)/,
		Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	ot.extend({
		htmlPrefilter: function(t) {
			return t.replace(Nt, "<$1></$2>")
		},
		clone: function(t, e, n) {
			var i, r, o, a, s = t.cloneNode(!0),
				l = ot.contains(t.ownerDocument, t);
			if(!(it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
				for(a = h(s), o = h(t), i = 0, r = o.length; r > i; i++) T(o[i], a[i]);
			if(e)
				if(n)
					for(o = o || h(t), a = a || h(s), i = 0, r = o.length; r > i; i++) _(o[i], a[i]);
				else _(t, s);
			return a = h(s, "script"), a.length > 0 && u(a, !l && h(t, "script")), s
		},
		cleanData: function(t) {
			for(var e, n, i, r = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)
				if(wt(n)) {
					if(e = n[bt.expando]) {
						if(e.events)
							for(i in e.events) r[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, e.handle);
						n[bt.expando] = void 0
					}
					n[Rt.expando] && (n[Rt.expando] = void 0)
				}
		}
	}), ot.fn.extend({
		domManip: x,
		detach: function(t) {
			return w(this, t, !0)
		},
		remove: function(t) {
			return w(this, t)
		},
		text: function(t) {
			return xt(this, function(t) {
				return void 0 === t ? ot.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function() {
			return x(this, arguments, function(t) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					E(this, t).appendChild(t)
				}
			})
		},
		prepend: function() {
			return x(this, arguments, function(t) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = E(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function() {
			return x(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return x(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		empty: function() {
			for(var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(h(t, !1)), t.textContent = "");
			return this
		},
		clone: function(t, e) {
			return t = null != t && t, e = null == e ? t : e, this.map(function() {
				return ot.clone(this, t, e)
			})
		},
		html: function(t) {
			return xt(this, function(t) {
				var e = this[0] || {},
					n = 0,
					i = this.length;
				if(void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if("string" == typeof t && !Ut.test(t) && !Bt[(kt.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = ot.htmlPrefilter(t);
					try {
						for(; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(h(e, !1)), e.innerHTML = t);
						e = 0
					} catch(t) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var t = [];
			return x(this, arguments, function(e) {
				var n = this.parentNode;
				ot.inArray(this, t) < 0 && (ot.cleanData(h(this)), n && n.replaceChild(e, this))
			}, t)
		}
	}), ot.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, e) {
		ot.fn[t] = function(t) {
			for(var n, i = [], r = ot(t), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), ot(r[a])[e](n), J.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var Wt, qt = {
			HTML: "block",
			BODY: "block"
		},
		Xt = /^margin/,
		Qt = new RegExp("^(" + Mt + ")(?!px)[a-z%]+$", "i"),
		Yt = function(e) {
			var n = e.ownerDocument.defaultView;
			return n && n.opener || (n = t), n.getComputedStyle(e)
		},
		$t = function(t, e, n, i) {
			var r, o, a = {};
			for(o in e) a[o] = t.style[o], t.style[o] = e[o];
			r = n.apply(t, i || []);
			for(o in e) t.style[o] = a[o];
			return r
		},
		Kt = Y.documentElement;
	! function() {
		function e() {
			s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Kt.appendChild(a);
			var e = t.getComputedStyle(s);
			n = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, s.style.marginRight = "50%", r = "4px" === e.marginRight, Kt.removeChild(a)
		}
		var n, i, r, o, a = Y.createElement("div"),
			s = Y.createElement("div");
		s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ot.extend(it, {
			pixelPosition: function() {
				return e(), n
			},
			boxSizingReliable: function() {
				return null == i && e(), i
			},
			pixelMarginRight: function() {
				return null == i && e(), r
			},
			reliableMarginLeft: function() {
				return null == i && e(), o
			},
			reliableMarginRight: function() {
				var e, n = s.appendChild(Y.createElement("div"));
				return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Kt.appendChild(a), e = !parseFloat(t.getComputedStyle(n).marginRight), Kt.removeChild(a), s.removeChild(n), e
			}
		}))
	}();
	var Jt = /^(none|table(?!-c[ea]).+)/,
		Zt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		te = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		ee = ["Webkit", "O", "Moz", "ms"],
		ne = Y.createElement("div").style;
	ot.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if(e) {
						var n = H(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function(t, e, n, i) {
			if(t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var r, o, a, s = ot.camelCase(e),
					l = t.style;
				return e = ot.cssProps[s] || (ot.cssProps[s] = M(s) || s), a = ot.cssHooks[e] || ot.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = At.exec(n)) && r[1] && (n = c(t, e, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (ot.cssNumber[s] ? "" : "px")), it.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l[e] = n))))
			}
		},
		css: function(t, e, n, i) {
			var r, o, a, s = ot.camelCase(e);
			return e = ot.cssProps[s] || (ot.cssProps[s] = M(s) || s), a = ot.cssHooks[e] || ot.cssHooks[s], a && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = H(t, e, i)), "normal" === r && e in te && (r = te[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
		}
	}), ot.each(["height", "width"], function(t, e) {
		ot.cssHooks[e] = {
			get: function(t, n, i) {
				return n ? Jt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? $t(t, Zt, function() {
					return L(t, e, i)
				}) : L(t, e, i) : void 0
			},
			set: function(t, n, i) {
				var r, o = i && Yt(t),
					a = i && S(t, e, i, "border-box" === ot.css(t, "boxSizing", !1, o), o);
				return a && (r = At.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = ot.css(t, e)), A(t, n, a)
			}
		}
	}), ot.cssHooks.marginLeft = C(it.reliableMarginLeft, function(t, e) {
		return e ? (parseFloat(H(t, "marginLeft")) || t.getBoundingClientRect().left - $t(t, {
			marginLeft: 0
		}, function() {
			return t.getBoundingClientRect().left
		})) + "px" : void 0
	}), ot.cssHooks.marginRight = C(it.reliableMarginRight, function(t, e) {
		return e ? $t(t, {
			display: "inline-block"
		}, H, [t, "marginRight"]) : void 0
	}), ot.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(t, e) {
		ot.cssHooks[t + e] = {
			expand: function(n) {
				for(var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + St[i] + e] = o[i] || o[i - 2] || o[0];
				return r
			}
		}, Xt.test(t) || (ot.cssHooks[t + e].set = A)
	}), ot.fn.extend({
		css: function(t, e) {
			return xt(this, function(t, e, n) {
				var i, r, o = {},
					a = 0;
				if(ot.isArray(e)) {
					for(i = Yt(t), r = e.length; r > a; a++) o[e[a]] = ot.css(t, e[a], !1, i);
					return o
				}
				return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
			}, t, e, arguments.length > 1)
		},
		show: function() {
			return P(this, !0)
		},
		hide: function() {
			return P(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				Lt(this) ? ot(this).show() : ot(this).hide()
			})
		}
	}), ot.Tween = k, k.prototype = {
		constructor: k,
		init: function(t, e, n, i, r, o) {
			this.elem = t, this.prop = n, this.easing = r || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ot.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var t = k.propHooks[this.prop];
			return t && t.get ? t.get(this) : k.propHooks._default.get(this)
		},
		run: function(t) {
			var e, n = k.propHooks[this.prop];
			return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : k.propHooks._default.set(this), this
		}
	}, k.prototype.init.prototype = k.prototype, k.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
			},
			set: function(t) {
				ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
			}
		}
	}, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, ot.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		},
		_default: "swing"
	}, ot.fx = k.prototype.init, ot.fx.step = {};
	var ie, re, oe = /^(?:toggle|show|hide)$/,
		ae = /queueHooks$/;
	ot.Animation = ot.extend(I, {
			tweeners: {
				"*": [function(t, e) {
					var n = this.createTween(t, e);
					return c(n.elem, t, At.exec(e), n), n
				}]
			},
			tweener: function(t, e) {
				ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(_t);
				for(var n, i = 0, r = t.length; r > i; i++) n = t[i], I.tweeners[n] = I.tweeners[n] || [], I.tweeners[n].unshift(e)
			},
			prefilters: [O],
			prefilter: function(t, e) {
				e ? I.prefilters.unshift(t) : I.prefilters.push(t)
			}
		}), ot.speed = function(t, e, n) {
			var i = t && "object" == typeof t ? ot.extend({}, t) : {
				complete: n || !n && e || ot.isFunction(t) && t,
				duration: t,
				easing: n && e || e && !ot.isFunction(e) && e
			};
			return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
			}, i
		}, ot.fn.extend({
			fadeTo: function(t, e, n, i) {
				return this.filter(Lt).css("opacity", 0).show().end().animate({
					opacity: e
				}, t, n, i)
			},
			animate: function(t, e, n, i) {
				var r = ot.isEmptyObject(t),
					o = ot.speed(e, n, i),
					a = function() {
						var e = I(this, ot.extend({}, t), o);
						(r || bt.get(this, "finish")) && e.stop(!0)
					};
				return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(t, e, n) {
				var i = function(t) {
					var e = t.stop;
					delete t.stop, e(n)
				};
				return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
					var e = !0,
						r = null != t && t + "queueHooks",
						o = ot.timers,
						a = bt.get(this);
					if(r) a[r] && a[r].stop && i(a[r]);
					else
						for(r in a) a[r] && a[r].stop && ae.test(r) && i(a[r]);
					for(r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
					(e || !n) && ot.dequeue(this, t)
				})
			},
			finish: function(t) {
				return !1 !== t && (t = t || "fx"), this.each(function() {
					var e, n = bt.get(this),
						i = n[t + "queue"],
						r = n[t + "queueHooks"],
						o = ot.timers,
						a = i ? i.length : 0;
					for(n.finish = !0, ot.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
					for(e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
					delete n.finish
				})
			}
		}), ot.each(["toggle", "show", "hide"], function(t, e) {
			var n = ot.fn[e];
			ot.fn[e] = function(t, i, r) {
				return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, i, r)
			}
		}), ot.each({
			slideDown: B("show"),
			slideUp: B("hide"),
			slideToggle: B("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(t, e) {
			ot.fn[t] = function(t, n, i) {
				return this.animate(e, t, n, i)
			}
		}), ot.timers = [], ot.fx.tick = function() {
			var t, e = 0,
				n = ot.timers;
			for(ie = ot.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
			n.length || ot.fx.stop(), ie = void 0
		}, ot.fx.timer = function(t) {
			ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
		}, ot.fx.interval = 13, ot.fx.start = function() {
			re || (re = t.setInterval(ot.fx.tick, ot.fx.interval))
		}, ot.fx.stop = function() {
			t.clearInterval(re), re = null
		}, ot.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, ot.fn.delay = function(e, n) {
			return e = ot.fx ? ot.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
				var r = t.setTimeout(n, e);
				i.stop = function() {
					t.clearTimeout(r)
				}
			})
		},
		function() {
			var t = Y.createElement("input"),
				e = Y.createElement("select"),
				n = e.appendChild(Y.createElement("option"));
			t.type = "checkbox", it.checkOn = "" !== t.value, it.optSelected = n.selected, e.disabled = !0, it.optDisabled = !n.disabled, t = Y.createElement("input"), t.value = "t", t.type = "radio", it.radioValue = "t" === t.value
		}();
	var se, le = ot.expr.attrHandle;
	ot.fn.extend({
		attr: function(t, e) {
			return xt(this, ot.attr, t, e, arguments.length > 1)
		},
		removeAttr: function(t) {
			return this.each(function() {
				ot.removeAttr(this, t)
			})
		}
	}), ot.extend({
		attr: function(t, e, n) {
			var i, r, o = t.nodeType;
			if(3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), r = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? se : void 0)), void 0 !== n ? null === n ? void ot.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ot.find.attr(t, e), null == i ? void 0 : i))
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if(!it.radioValue && "radio" === e && ot.nodeName(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		},
		removeAttr: function(t, e) {
			var n, i, r = 0,
				o = e && e.match(_t);
			if(o && 1 === t.nodeType)
				for(; n = o[r++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
		}
	}), se = {
		set: function(t, e, n) {
			return !1 === e ? ot.removeAttr(t, n) : t.setAttribute(n, n), n
		}
	}, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var n = le[e] || ot.find.attr;
		le[e] = function(t, e, i) {
			var r, o;
			return i || (o = le[e], le[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, le[e] = o), r
		}
	});
	var ce = /^(?:input|select|textarea|button)$/i,
		he = /^(?:a|area)$/i;
	ot.fn.extend({
		prop: function(t, e) {
			return xt(this, ot.prop, t, e, arguments.length > 1)
		},
		removeProp: function(t) {
			return this.each(function() {
				delete this[ot.propFix[t] || t]
			})
		}
	}), ot.extend({
		prop: function(t, e, n) {
			var i, r, o = t.nodeType;
			if(3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, r = ot.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var e = ot.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : ce.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), it.optSelected || (ot.propHooks.selected = {

		get: function(t) {
			//console.log(111)
			var e = t.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		}
	}), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ot.propFix[this.toLowerCase()] = this
	});
	var ue = /[\t\r\n\f]/g;
	ot.fn.extend({
		addClass: function(t) {
			var e, n, i, r, o, a, s, l = 0;
			if(ot.isFunction(t)) return this.each(function(e) {
				ot(this).addClass(t.call(this, e, N(this)))
			});
			if("string" == typeof t && t)
				for(e = t.match(_t) || []; n = this[l++];)
					if(r = N(n), i = 1 === n.nodeType && (" " + r + " ").replace(ue, " ")) {
						for(a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						s = ot.trim(i), r !== s && n.setAttribute("class", s)
					}
			return this
		},
		removeClass: function(t) {
			var e, n, i, r, o, a, s, l = 0;
			if(ot.isFunction(t)) return this.each(function(e) {
				ot(this).removeClass(t.call(this, e, N(this)))
			});
			if(!arguments.length) return this.attr("class", "");
			if("string" == typeof t && t)
				for(e = t.match(_t) || []; n = this[l++];)
					if(r = N(n), i = 1 === n.nodeType && (" " + r + " ").replace(ue, " ")) {
						for(a = 0; o = e[a++];)
							for(; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
						s = ot.trim(i), r !== s && n.setAttribute("class", s)
					}
			return this
		},
		toggleClass: function(t, e) {
			var n = typeof t;
			return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(n) {
				ot(this).toggleClass(t.call(this, n, N(this), e), e)
			}) : this.each(function() {
				var e, i, r, o;
				if("string" === n)
					for(i = 0, r = ot(this), o = t.match(_t) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
				else(void 0 === t || "boolean" === n) && (e = N(this), e && bt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : bt.get(this, "__className__") || ""))
			})
		},
		hasClass: function(t) {
			var e, n, i = 0;
			for(e = " " + t + " "; n = this[i++];)
				if(1 === n.nodeType && (" " + N(n) + " ").replace(ue, " ").indexOf(e) > -1) return !0;
			return !1
		}
	});
	var de = /\r/g;
	ot.fn.extend({
		val: function(t) {
			var e, n, i, r = this[0];
			return arguments.length ? (i = ot.isFunction(t), this.each(function(n) {
				var r;
				1 === this.nodeType && (r = i ? t.call(this, n, ot(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function(t) {
					return null == t ? "" : t + ""
				})), (e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
			})) : r ? (e = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(de, "") : null == n ? "" : n)) : void 0
		}
	}), ot.extend({
		valHooks: {
			option: {
				get: function(t) {
					return ot.trim(t.value)
				}
			},
			select: {
				get: function(t) {
					for(var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
						if(n = i[l], (n.selected || l === r) && (it.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
							if(e = ot(n).val(), o) return e;
							a.push(e)
						}
					return a
				},
				set: function(t, e) {
					for(var n, i, r = t.options, o = ot.makeArray(e), a = r.length; a--;) i = r[a], (i.selected = ot.inArray(ot.valHooks.option.get(i), o) > -1) && (n = !0);
					return n || (t.selectedIndex = -1), o
				}
			}
		}
	}), ot.each(["radio", "checkbox"], function() {
		ot.valHooks[this] = {
			set: function(t, e) {
				return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
			}
		}, it.checkOn || (ot.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var pe = /^(?:focusinfocus|focusoutblur)$/;
	ot.extend(ot.event, {
		trigger: function(e, n, i, r) {
			var o, a, s, l, c, h, u, d = [i || Y],
				p = nt.call(e, "type") ? e.type : e,
				f = nt.call(e, "namespace") ? e.namespace.split(".") : [];
			if(a = s = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !pe.test(p + ot.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[ot.expando] ? e : new ot.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), u = ot.event.special[p] || {}, r || !u.trigger || !1 !== u.trigger.apply(i, n))) {
				if(!r && !u.noBubble && !ot.isWindow(i)) {
					for(l = u.delegateType || p, pe.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
					s === (i.ownerDocument || Y) && d.push(s.defaultView || s.parentWindow || t)
				}
				for(o = 0;
					(a = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : u.bindType || p, h = (bt.get(a, "events") || {})[e.type] && bt.get(a, "handle"), h && h.apply(a, n), (h = c && a[c]) && h.apply && wt(a) && (e.result = h.apply(a, n), !1 === e.result && e.preventDefault());
				return e.type = p, r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), n) || !wt(i) || c && ot.isFunction(i[p]) && !ot.isWindow(i) && (s = i[c], s && (i[c] = null), ot.event.triggered = p, i[p](), ot.event.triggered = void 0, s && (i[c] = s)), e.result
			}
		},
		simulate: function(t, e, n) {
			var i = ot.extend(new ot.Event, n, {
				type: t,
				isSimulated: !0
			});
			ot.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
		}
	}), ot.fn.extend({
		trigger: function(t, e) {
			return this.each(function() {
				ot.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var n = this[0];
			return n ? ot.event.trigger(t, e, n, !0) : void 0
		}
	}), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
		ot.fn[e] = function(t, n) {
			return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
		}
	}), ot.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}
	}), it.focusin = "onfocusin" in t, it.focusin || ot.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, e) {
		var n = function(t) {
			ot.event.simulate(e, t.target, ot.event.fix(t))
		};
		ot.event.special[e] = {
			setup: function() {
				var i = this.ownerDocument || this,
					r = bt.access(i, e);
				r || i.addEventListener(t, n, !0), bt.access(i, e, (r || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this,
					r = bt.access(i, e) - 1;
				r ? bt.access(i, e, r) : (i.removeEventListener(t, n, !0), bt.remove(i, e))
			}
		}
	});
	var fe = t.location,
		me = ot.now(),
		ge = /\?/;
	ot.parseJSON = function(t) {
		return JSON.parse(t + "")
	}, ot.parseXML = function(e) {
		var n;
		if(!e || "string" != typeof e) return null;
		try {
			n = (new t.DOMParser).parseFromString(e, "text/xml")
		} catch(t) {
			n = void 0
		}
		return(!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), n
	};
	var Ee = /#.*$/,
		ve = /([?&])_=[^&]*/,
		ye = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		_e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Te = /^(?:GET|HEAD)$/,
		xe = /^\/\//,
		we = {},
		be = {},
		Re = "*/".concat("*"),
		He = Y.createElement("a");
	He.href = fe.href, ot.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: fe.href,
			type: "GET",
			isLocal: _e.test(fe.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Re,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ot.parseJSON,
				"text xml": ot.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? j(j(t, ot.ajaxSettings), e) : j(ot.ajaxSettings, t)
		},
		ajaxPrefilter: U(we),
		ajaxTransport: U(be),
		ajax: function(e, n) {
			function i(e, n, i, s) {
				var c, u, v, y, T, w = n;
				2 !== _ && (_ = 2, l && t.clearTimeout(l), r = void 0, a = s || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, i && (y = G(d, x, i)), y = W(d, y, x, c), c ? (d.ifModified && (T = x.getResponseHeader("Last-Modified"), T && (ot.lastModified[o] = T), (T = x.getResponseHeader("etag")) && (ot.etag[o] = T)), 204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state, u = y.data, v = y.error, c = !v)) : (v = w, (e || !w) && (w = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || w) + "", c ? m.resolveWith(p, [u, w, x]) : m.rejectWith(p, [x, w, v]), x.statusCode(E), E = void 0, h && f.trigger(c ? "ajaxSuccess" : "ajaxError", [x, d, c ? u : v]), g.fireWith(p, [x, w]), h && (f.trigger("ajaxComplete", [x, d]), --ot.active || ot.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (n = e, e = void 0), n = n || {};
			var r, o, a, s, l, c, h, u, d = ot.ajaxSetup({}, n),
				p = d.context || d,
				f = d.context && (p.nodeType || p.jquery) ? ot(p) : ot.event,
				m = ot.Deferred(),
				g = ot.Callbacks("once memory"),
				E = d.statusCode || {},
				v = {},
				y = {},
				_ = 0,
				T = "canceled",
				x = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if(2 === _) {
							if(!s)
								for(s = {}; e = ye.exec(a);) s[e[1].toLowerCase()] = e[2];
							e = s[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === _ ? a : null
					},
					setRequestHeader: function(t, e) {
						var n = t.toLowerCase();
						return _ || (t = y[n] = y[n] || t, v[t] = e), this
					},
					overrideMimeType: function(t) {
						return _ || (d.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if(t)
							if(2 > _)
								for(e in t) E[e] = [E[e], t[e]];
							else x.always(t[x.status]);
						return this
					},
					abort: function(t) {
						var e = t || T;
						return r && r.abort(e), i(0, e), this
					}
				};
			if(m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || fe.href) + "").replace(Ee, "").replace(xe, fe.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(_t) || [""], null == d.crossDomain) {
				c = Y.createElement("a");
				try {
					c.href = d.url, c.href = c.href, d.crossDomain = He.protocol + "//" + He.host != c.protocol + "//" + c.host
				} catch(t) {
					d.crossDomain = !0
				}
			}
			if(d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), V(we, d, n, x), 2 === _) return x;
			h = ot.event && d.global, h && 0 == ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Te.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ge.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = ve.test(o) ? o.replace(ve, "$1_=" + me++) : o + (ge.test(o) ? "&" : "?") + "_=" + me++)), d.ifModified && (ot.lastModified[o] && x.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && x.setRequestHeader("If-None-Match", ot.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : d.accepts["*"]);
			for(u in d.headers) x.setRequestHeader(u, d.headers[u]);
			if(d.beforeSend && (!1 === d.beforeSend.call(p, x, d) || 2 === _)) return x.abort();
			T = "abort";
			for(u in {
					success: 1,
					error: 1,
					complete: 1
				}) x[u](d[u]);
			if(r = V(be, d, n, x)) {
				if(x.readyState = 1, h && f.trigger("ajaxSend", [x, d]), 2 === _) return x;
				d.async && d.timeout > 0 && (l = t.setTimeout(function() {
					x.abort("timeout")
				}, d.timeout));
				try {
					_ = 1, r.send(v, i)
				} catch(t) {
					if(!(2 > _)) throw t;
					i(-1, t)
				}
			} else i(-1, "No Transport");
			return x
		},
		getJSON: function(t, e, n) {
			return ot.get(t, e, n, "json")
		},
		getScript: function(t, e) {
			return ot.get(t, void 0, e, "script")
		}
	}), ot.each(["get", "post"], function(t, e) {
		ot[e] = function(t, n, i, r) {
			return ot.isFunction(n) && (r = r || i, i = n, n = void 0), ot.ajax(ot.extend({
				url: t,
				type: e,
				dataType: r,
				data: n,
				success: i
			}, ot.isPlainObject(t) && t))
		}
	}), ot._evalUrl = function(t) {
		return ot.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	}, ot.fn.extend({
		wrapAll: function(t) {
			var e;
			return ot.isFunction(t) ? this.each(function(e) {
				ot(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
				for(var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this)
		},
		wrapInner: function(t) {
			return ot.isFunction(t) ? this.each(function(e) {
				ot(this).wrapInner(t.call(this, e))
			}) : this.each(function() {
				var e = ot(this),
					n = e.contents();
				n.length ? n.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t) {
			var e = ot.isFunction(t);
			return this.each(function(n) {
				ot(this).wrapAll(e ? t.call(this, n) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
			}).end()
		}
	}), ot.expr.filters.hidden = function(t) {
		return !ot.expr.filters.visible(t)
	}, ot.expr.filters.visible = function(t) {
		return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
	};
	var Ce = /%20/g,
		Me = /\[\]$/,
		Ae = /\r?\n/g,
		Se = /^(?:submit|button|image|reset|file)$/i,
		Le = /^(?:input|select|textarea|keygen)/i;
	ot.param = function(t, e) {
		var n, i = [],
			r = function(t, e) {
				e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if(void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
			r(this.name, this.value)
		});
		else
			for(n in t) q(n, t[n], e, r);
		return i.join("&").replace(Ce, "+")
	}, ot.fn.extend({
		serialize: function() {
			return ot.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = ot.prop(this, "elements");
				return t ? ot.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !ot(this).is(":disabled") && Le.test(this.nodeName) && !Se.test(t) && (this.checked || !Pt.test(t))
			}).map(function(t, e) {
				var n = ot(this).val();
				return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
					return {
						name: e.name,
						value: t.replace(Ae, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(Ae, "\r\n")
				}
			}).get()
		}
	}), ot.ajaxSettings.xhr = function() {
		try {
			return new t.XMLHttpRequest
		} catch(t) {}
	};
	var Pe = {
			0: 200,
			1223: 204
		},
		ke = ot.ajaxSettings.xhr();
	it.cors = !!ke && "withCredentials" in ke, it.ajax = ke = !!ke, ot.ajaxTransport(function(e) {
		var n, i;
		return it.cors || ke && !e.crossDomain ? {
			send: function(r, o) {
				var a, s = e.xhr();
				if(s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for(a in e.xhrFields) s[a] = e.xhrFields[a];
				e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
				for(a in r) s.setRequestHeader(a, r[a]);
				n = function(t) {
					return function() {
						n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Pe[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
							binary: s.response
						} : {
							text: s.responseText
						}, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
					4 === s.readyState && t.setTimeout(function() {
						n && i()
					})
				}, n = n("abort");
				try {
					s.send(e.hasContent && e.data || null)
				} catch(t) {
					if(n) throw t
				}
			},
			abort: function() {
				n && n()
			}
		} : void 0
	}), ot.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(t) {
				return ot.globalEval(t), t
			}
		}
	}), ot.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), ot.ajaxTransport("script", function(t) {
		if(t.crossDomain) {
			var e, n;
			return {
				send: function(i, r) {
					e = ot("<script>").prop({
						charset: t.scriptCharset,
						src: t.url
					}).on("load error", n = function(t) {
						e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
					}), Y.head.appendChild(e[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var De = [],
		Be = /(=)\?(?=&|$)|\?\?/;
	ot.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = De.pop() || ot.expando + "_" + me++;
			return this[t] = !0, t
		}
	}), ot.ajaxPrefilter("json jsonp", function(e, n, i) {
		var r, o, a, s = !1 !== e.jsonp && (Be.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
		return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Be, "$1" + r) : !1 !== e.jsonp && (e.url += (ge.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
			return a || ot.error(r + " was not called"), a[0]
		}, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
			a = arguments
		}, i.always(function() {
			void 0 === o ? ot(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, De.push(r)), a && ot.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), it.createHTMLDocument = function() {
		var t = Y.implementation.createHTMLDocument("").body;
		return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
	}(), ot.parseHTML = function(t, e, n) {
		if(!t || "string" != typeof t) return null;
		"boolean" == typeof e && (n = e, e = !1), e = e || (it.createHTMLDocument ? Y.implementation.createHTMLDocument("") : Y);
		var i = ft.exec(t),
			r = !n && [];
		return i ? [e.createElement(i[1])] : (i = d([t], e, r), r && r.length && ot(r).remove(), ot.merge([], i.childNodes))
	};
	var Fe = ot.fn.load;
	ot.fn.load = function(t, e, n) {
		if("string" != typeof t && Fe) return Fe.apply(this, arguments);
		var i, r, o, a = this,
			s = t.indexOf(" ");
		return s > -1 && (i = ot.trim(t.slice(s)), t = t.slice(0, s)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && ot.ajax({
			url: t,
			type: r || "GET",
			dataType: "html",
			data: e
		}).done(function(t) {
			o = arguments, a.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
		}).always(n && function(t, e) {
			a.each(function() {
				n.apply(a, o || [t.responseText, e, t])
			})
		}), this
	}, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		ot.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), ot.expr.filters.animated = function(t) {
		return ot.grep(ot.timers, function(e) {
			return t === e.elem
		}).length
	}, ot.offset = {
		setOffset: function(t, e, n) {
			var i, r, o, a, s, l, c, h = ot.css(t, "position"),
				u = ot(t),
				d = {};
			"static" === h && (t.style.position = "relative"), s = u.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), c = ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1, c ? (i = u.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : u.css(d)
		}
	}, ot.fn.extend({
		offset: function(t) {
			if(arguments.length) return void 0 === t ? this : this.each(function(e) {
				ot.offset.setOffset(this, t, e)
			});
			var e, n, i = this[0],
				r = {
					top: 0,
					left: 0
				},
				o = i && i.ownerDocument;
			return o ? (e = o.documentElement, ot.contains(e, i) ? (r = i.getBoundingClientRect(), n = X(o), {
				top: r.top + n.pageYOffset - e.clientTop,
				left: r.left + n.pageXOffset - e.clientLeft
			}) : r) : void 0
		},
		position: function() {
			if(this[0]) {
				var t, e, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (i = t.offset()), i.top += ot.css(t[0], "borderTopWidth", !0), i.left += ot.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - i.top - ot.css(n, "marginTop", !0),
					left: e.left - i.left - ot.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for(var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
				return t || Kt
			})
		}
	}), ot.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, e) {
		var n = "pageYOffset" === e;
		ot.fn[t] = function(i) {
			return xt(this, function(t, i, r) {
				var o = X(t);
				return void 0 === r ? o ? o[e] : t[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r)
			}, t, i, arguments.length)
		}
	}), ot.each(["top", "left"], function(t, e) {
		ot.cssHooks[e] = C(it.pixelPosition, function(t, n) {
			return n ? (n = H(t, e), Qt.test(n) ? ot(t).position()[e] + "px" : n) : void 0
		})
	}), ot.each({
		Height: "height",
		Width: "width"
	}, function(t, e) {
		ot.each({
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		}, function(n, i) {
			ot.fn[i] = function(i, r) {
				var o = arguments.length && (n || "boolean" != typeof i),
					a = n || (!0 === i || !0 === r ? "margin" : "border");
				return xt(this, function(e, n, i) {
					var r;
					return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ot.css(e, n, a) : ot.style(e, n, i, a)
				}, e, o ? i : void 0, o, null)
			}
		})
	}), ot.fn.extend({
		bind: function(t, e, n) {
			return this.on(t, null, e, n)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, n, i) {
			return this.on(e, t, n, i)
		},
		undelegate: function(t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		},
		size: function() {
			return this.length
		}
	}), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ot
	});
	var Oe = t.jQuery,
		ze = t.$;
	return ot.noConflict = function(e) {
		return t.$ === ot && (t.$ = ze), e && t.jQuery === ot && (t.jQuery = Oe), ot
	}, e || (t.jQuery = t.$ = ot), ot
}),

function(t, e) {
	"use strict";

	"function" == typeof define && define.amd ? define(["jquery"], function(n) {
		return e(n, t, t.document, t.Math)
	}) : "object" == typeof exports && exports ? module.exports = e(require("jquery"), t, t.document, t.Math) : e(jQuery, t, t.document, t.Math)
}("undefined" != typeof window ? window : this, function(t, e, n, i, r) {
	"use strict";
	var o = "fullpage-wrapper",
		a = "." + o,
		s = "fp-responsive",
		l = "fp-notransition",
		c = "fp-destroyed",
		h = "fp-enabled",
		u = "fp-viewing",
		d = "active",
		p = "." + d,
		f = "fp-completely",
		m = "." + f,
		g = "fp-section",
		E = "." + g,
		v = E + p,
		y = E + ":first",
		_ = E + ":last",
		T = "fp-tableCell",
		x = "." + T,
		w = "fp-nav",
		b = "#" + w,
		R = "fp-tooltip",
		H = "." + R,
		C = "fp-slide",
		M = "." + C,
		A = M + p,
		S = "fp-slides",
		L = "." + S,
		P = "fp-slidesContainer",
		k = "." + P,
		D = "fp-table",
		B = "fp-slidesNav",
		F = "." + B,
		O = F + " a",
		z = "fp-controlArrow",
		I = "." + z,
		N = "fp-prev",
		U = "." + N,
		V = z + " " + N,
		j = I + U,
		G = "fp-next",
		W = z + " " + G,
		q = I + ".fp-next",
		X = t(e),
		Q = t(n);
	t.fn.fullpage = function(z) {
		function U(e, n) {
			e || Ve(0), Xe("autoScrolling", e, n);
			var i = t(v);
			z.autoScrolling && !z.scrollBar ? ($e.css({
				overflow: "hidden",
				height: "100%"
			}), G(wn.recordHistory, "internal"), sn.css({
				"-ms-touch-action": "none",
				"touch-action": "none"
			}), i.length && Ve(i.position().top)) : ($e.css({
				overflow: "visible",
				height: "initial"
			}), G(!1, "internal"), sn.css({
				"-ms-touch-action": "",
				"touch-action": ""
			}), i.length && $e.scrollTop(i.position().top))
		}

		function G(t, e) {
			Xe("recordHistory", t, e)
		}

		function Y(t, e) {
			Xe("scrollingSpeed", t, e)
		}

		function $(t, e) {
			Xe("fitToSection", t, e)
		}

		function K(t) {
			z.lockAnchors = t
		}

		function J(t) {
			t ? (Be(), Fe()) : (De(), Oe())
		}

		function Z(e, n) {
			void 0 !== n ? (n = n.replace(/ /g, "").split(","), t.each(n, function(t, n) {
				Ge(e, n, "m")
			})) : (Ge(e, "all", "m"), e ? (J(!0), ze()) : (J(!1), Ie()))
		}

		function tt(e, n) {
			void 0 !== n ? (n = n.replace(/ /g, "").split(","), t.each(n, function(t, n) {
				Ge(e, n, "k")
			})) : (Ge(e, "all", "k"), z.keyboardScrolling = e)
		}

		function et() {
			var e = t(v).prev(E);
			e.length || !z.loopTop && !z.continuousVertical || (e = t(E).last()), e.length && Ft(e, null, !0)
		}

		function nt() {
			var e = t(v).next(E);
			e.length || !z.loopBottom && !z.continuousVertical || (e = t(E).first()), e.length && Ft(e, null, !1)
		}

		function it(t, e) {
			Y(0, "internal"), rt(t, e), Y(wn.scrollingSpeed, "internal")
		}

		function rt(t, e) {
			var n = be(t);
			void 0 !== e ? He(t, e) : n.length > 0 && Ft(n)
		}

		function ot(t) {
			kt("right", t)
		}

		function at(t) {
			kt("left", t)
		}

		function st(e) {
			if(!sn.hasClass(c)) {
				cn = !0, ln = X.height(), t(E).each(function() {
					var e = t(this).find(L),
						n = t(this).find(M);
					z.verticalCentered && t(this).find(x).css("height", xe(t(this)) + "px"), t(this).css("height", ln + "px"), n.length > 1 && le(e, e.find(A))
				}), z.scrollOverflow && fn.createScrollBarForAll();
				var n = t(v),
					i = n.index(E);
				i && it(i + 1), cn = !1, t.isFunction(z.afterResize) && e && z.afterResize.call(sn), t.isFunction(z.afterReBuild) && !e && z.afterReBuild.call(sn)
			}
		}

		function lt(e) {
			var n = Ke.hasClass(s);
			e ? n || (U(!1, "internal"), $(!1, "internal"), t(b).hide(), Ke.addClass(s), t.isFunction(z.afterResponsive) && z.afterResponsive.call(sn, e)) : n && (U(wn.autoScrolling, "internal"), $(wn.autoScrolling, "internal"), t(b).show(), Ke.removeClass(s), t.isFunction(z.afterResponsive) && z.afterResponsive.call(sn, e))
		}

		function ct() {
			var e = sn.find(z.sectionSelector);
			z.anchors.length || (z.anchors = e.filter("[data-anchor]").map(function() {
				return t(this).data("anchor").toString()
			}).get()), z.navigationTooltips.length || (z.navigationTooltips = e.filter("[data-tooltip]").map(function() {
				return t(this).data("tooltip").toString()
			}).get())
		}

		function ht() {
			sn.css({
				height: "100%",
				position: "relative"
			}), sn.addClass(o), t("html").addClass(h), ln = X.height(), sn.removeClass(c), ft(), t(E).each(function(e) {
				var n = t(this),
					i = n.find(M),
					r = i.length;
				dt(n, e), pt(n, e), r > 0 ? ut(n, i, r) : z.verticalCentered && Te(n)
			}), z.fixedElements && z.css3 && t(z.fixedElements).appendTo(Ke), z.navigation && gt(), Et(), z.scrollOverflow ? fn = z.scrollOverflowHandler.init(z) : _t()
		}

		function ut(e, n, i) {
			var r = 100 * i,
				o = 100 / i;
			n.wrapAll('<div class="' + P + '" />'), n.parent().wrap('<div class="' + S + '" />'), e.find(k).css("width", r + "%"), i > 1 && (z.controlArrows && mt(e), z.slidesNavigation && Me(e, i)), n.each(function(e) {
				t(this).css("width", o + "%"), z.verticalCentered && Te(t(this))
			});
			var a = e.find(A);
			a.length && (0 !== t(v).index(E) || 0 === t(v).index(E) && 0 !== a.index()) ? Ue(a, "internal") : n.eq(0).addClass(d)
		}

		function dt(e, n) {
			n || 0 !== t(v).length || e.addClass(d), nn = t(v), e.css("height", ln + "px"), z.paddingTop && e.css("padding-top", z.paddingTop), z.paddingBottom && e.css("padding-bottom", z.paddingBottom), void 0 !== z.sectionsColor[n] && e.css("background-color", z.sectionsColor[n]), void 0 !== z.anchors[n] && e.attr("data-anchor", z.anchors[n])
		}

		function pt(e, n) {
			void 0 !== z.anchors[n] && e.hasClass(d) && ve(z.anchors[n], n), z.menu && z.css3 && t(z.menu).closest(a).length && t(z.menu).appendTo(Ke)
		}

		function ft() {
			sn.find(z.sectionSelector).addClass(g), sn.find(z.slideSelector).addClass(C)
		}

		function mt(t) {
			t.find(L).after('<div class="' + V + '"></div><div class="' + W + '"></div>'), "#fff" != z.controlArrowColor && (t.find(q).css("border-color", "transparent transparent transparent " + z.controlArrowColor), t.find(j).css("border-color", "transparent " + z.controlArrowColor + " transparent transparent")), z.loopHorizontal || t.find(j).hide()
		}

		function gt() {
			Ke.append('<div id="' + w + '"><ul></ul></div>');
			var e = t(b);
			e.addClass(function() {
				return z.showActiveTooltip ? "fp-show-active " + z.navigationPosition : z.navigationPosition
			});
			for(var n = 0; n < t(E).length; n++) {
				var i = "";
				z.anchors.length && (i = z.anchors[n]);
				var r = '<li><a href="#' + i + '"><span></span></a>',
					o = z.navigationTooltips[n];
				void 0 !== o && "" !== o && (r += '<div class="' + R + " " + z.navigationPosition + '">' + o + "</div>"), r += "</li>", e.find("ul").append(r)
			}
			t(b).css("margin-top", "-" + t(b).height() / 2 + "px"), t(b).find("li").eq(t(v).index(E)).find("a").addClass(d)
		}

		function Et() {
			sn.find('iframe[src*="youtube.com/embed/"]').each(function() {
				vt(t(this), "enablejsapi=1")
			})
		}

		function vt(t, e) {
			var n = t.attr("src");
			t.attr("src", n + yt(n) + e)
		}

		function yt(t) {
			return /\?/.test(t) ? "&" : "?"
		}

		function _t() {
			var e = t(v);
			e.addClass(f), jt(e), Gt(e), z.scrollOverflow && z.scrollOverflowHandler.afterLoad(), Tt() && t.isFunction(z.afterLoad) && z.afterLoad.call(e, e.data("anchor"), e.index(E) + 1), t.isFunction(z.afterRender) && z.afterRender.call(sn)
		}

		function Tt() {
			var t = be($t().section);
			return !t.length || t.length && t.index() === nn.index()
		}

		function xt() {
			var e;
			if(!z.autoScrolling || z.scrollBar) {
				var i = X.scrollTop(),
					r = Rt(i),
					o = 0,
					a = i + X.height() / 2,
					s = Ke.height() - X.height() === i,
					l = n.querySelectorAll(E);
				if(s) o = l.length - 1;
				else if(i)
					for(var c = 0; c < l.length; ++c) {
						var h = l[c];
						h.offsetTop <= a && (o = c)
					} else o = 0;
				if(bt(r) && (t(v).hasClass(f) || t(v).addClass(f).siblings().removeClass(f)), e = t(l).eq(o), !e.hasClass(d)) {
					bn = !0;
					var u, p, m = t(v),
						g = m.index(E) + 1,
						y = ye(e),
						_ = e.data("anchor"),
						T = e.index(E) + 1,
						x = e.find(A);
					x.length && (p = x.data("anchor"), u = x.index()), un && (e.addClass(d).siblings().removeClass(d), t.isFunction(z.onLeave) && z.onLeave.call(m, g, T, y), t.isFunction(z.afterLoad) && z.afterLoad.call(e, _, T), qt(m), jt(e), Gt(e), ve(_, T - 1), z.anchors.length && (Ze = _), Ae(u, p, _, T)), clearTimeout(vn), vn = setTimeout(function() {
						bn = !1
					}, 100)
				}
				z.fitToSection && (clearTimeout(yn), yn = setTimeout(function() {
					z.fitToSection && t(v).outerHeight() <= ln && wt()
				}, z.fitToSectionDelay))
			}
		}

		function wt() {
			un && (cn = !0, Ft(t(v)), cn = !1)
		}

		function bt(e) {
			var n = t(v).position().top,
				i = n + X.height();
			return "up" == e ? i >= X.scrollTop() + X.height() : n <= X.scrollTop()
		}

		function Rt(t) {
			var e = t > Rn ? "down" : "up";
			return Rn = t, Ln = t, e
		}

		function Ht(e) {
			if(pn.m[e]) {
				var n = "down" === e ? nt : et;
				if(z.scrollOverflow) {
					var i = z.scrollOverflowHandler.scrollable(t(v)),
						r = "down" === e ? "bottom" : "top";
					if(i.length > 0) {
						if(!z.scrollOverflowHandler.isScrolled(r, i)) return !0;
						n()
					} else n()
				} else n()
			}
		}

		function Ct(t) {
			var e = t.originalEvent;
			z.autoScrolling && At(e) && t.preventDefault()
		}

		function Mt(e) {
			var n = e.originalEvent,
				r = t(n.target).closest(E);
			if(At(n)) {
				z.autoScrolling && e.preventDefault();
				var o = Ne(n);
				Mn = o.y, An = o.x, r.find(L).length && i.abs(Cn - An) > i.abs(Hn - Mn) ? !rn && i.abs(Cn - An) > X.outerWidth() / 100 * z.touchSensitivity && (Cn > An ? pn.m.right && ot(r) : pn.m.left && at(r)) : z.autoScrolling && un && i.abs(Hn - Mn) > X.height() / 100 * z.touchSensitivity && (Hn > Mn ? Ht("down") : Mn > Hn && Ht("up"))
			}
		}

		function At(t) {
			return void 0 === t.pointerType || "mouse" != t.pointerType
		}

		function St(t) {
			var e = t.originalEvent;
			if(z.fitToSection && $e.stop(), At(e)) {
				var n = Ne(e);
				Hn = n.y, Cn = n.x
			}
		}

		function Lt(t, e) {
			for(var n = 0, r = t.slice(i.max(t.length - e, 1)), o = 0; o < r.length; o++) n += r[o];
			return i.ceil(n / e)
		}

		function Pt(n) {
			var r = (UDate()).getTime(),
				o = t(m).hasClass("fp-normal-scroll");
			if(z.autoScrolling && !en && !o) {
				n = n || e.event;
				var a = n.wheelDelta || -n.deltaY || -n.detail,
					s = i.max(-1, i.min(1, a)),
					l = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
					c = i.abs(n.wheelDeltaX) < i.abs(n.wheelDelta) || i.abs(n.deltaX) < i.abs(n.deltaY) || !l;
				dn.length > 149 && dn.shift(), dn.push(i.abs(a)), z.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
				var h = r - Sn;
				return Sn = r, h > 200 && (dn = []), un && Lt(dn, 10) >= Lt(dn, 70) && c && Ht(s < 0 ? "down" : "up"), !1
			}
			z.fitToSection && $e.stop()
		}

		function kt(e, n) {
			var i = void 0 === n ? t(v) : n,
				r = i.find(L),
				o = r.find(M).length;
			if(!(!r.length || rn || o < 2)) {
				var a = r.find(A),
					s = null;
				if(s = "left" === e ? a.prev(M) : a.next(M), !s.length) {
					if(!z.loopHorizontal) return;
					s = "left" === e ? a.siblings(":last") : a.siblings(":first")
				}
				rn = !0, le(r, s, e)
			}
		}

		function Dt() {
			t(A).each(function() {
				Ue(t(this), "internal")
			})
		}

		function Bt(t) {
			var e = t.position(),
				n = e.top,
				i = e.top > Ln,
				r = n - ln + t.outerHeight(),
				o = z.bigSectionsDestination;
			return t.outerHeight() > ln ? (i || o) && "bottom" !== o || (n = r) : (i || cn && t.is(":last-child")) && (n = r), Ln = n, n
		}

		function Ft(e, n, i) {
			if(void 0 !== e) {
				var r, o, a = Bt(e),
					s = {
						element: e,
						callback: n,
						isMovementUp: i,
						dtop: a,
						yMovement: ye(e),
						anchorLink: e.data("anchor"),
						sectionIndex: e.index(E),
						activeSlide: e.find(A),
						activeSection: t(v),
						leavingSection: t(v).index(E) + 1,
						localIsResizing: cn
					};
				s.activeSection.is(e) && !cn || z.scrollBar && X.scrollTop() === s.dtop && !e.hasClass("fp-auto-height") || (s.activeSlide.length && (r = s.activeSlide.data("anchor"), o = s.activeSlide.index()), t.isFunction(z.onLeave) && !s.localIsResizing && !1 === z.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, s.yMovement) || (z.autoScrolling && z.continuousVertical && void 0 !== s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = It(s)), s.localIsResizing || qt(s.activeSection), z.scrollOverflow && z.scrollOverflowHandler.beforeLeave(), e.addClass(d).siblings().removeClass(d), jt(e),
					z.scrollOverflow && z.scrollOverflowHandler.onLeave(), un = !1, Ae(o, r, s.anchorLink, s.sectionIndex), Ot(s), Ze = s.anchorLink, ve(s.anchorLink, s.sectionIndex)))
			}
		}

		function Ot(e) {
			if(z.css3 && z.autoScrolling && !z.scrollBar) we("translate3d(0px, -" + i.round(e.dtop) + "px, 0px)", !0), z.scrollingSpeed ? (clearTimeout(gn), gn = setTimeout(function() {
				Ut(e)
			}, z.scrollingSpeed)) : Ut(e);
			else {
				var n = zt(e);
				t(n.element).animate(n.options, z.scrollingSpeed, z.easing).promise().done(function() {
					z.scrollBar ? setTimeout(function() {
						Ut(e)
					}, 30) : Ut(e)
				})
			}
		}

		function zt(t) {
			var e = {};
			return z.autoScrolling && !z.scrollBar ? (e.options = {
				top: -t.dtop
			}, e.element = a) : (e.options = {
				scrollTop: t.dtop
			}, e.element = "html, body"), e
		}

		function It(e) {
			return e.isMovementUp ? t(v).before(e.activeSection.nextAll(E)) : t(v).after(e.activeSection.prevAll(E).get().reverse()), Ve(t(v).position().top), Dt(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.position().top, e.yMovement = ye(e.element), e.leavingSection = e.activeSection.index(E) + 1, e.sectionIndex = e.element.index(E), e
		}

		function Nt(e) {
			e.wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? t(y).before(e.wrapAroundElements) : t(_).after(e.wrapAroundElements), Ve(t(v).position().top), Dt())
		}

		function Ut(e) {
			Nt(e), t.isFunction(z.afterLoad) && !e.localIsResizing && z.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), z.scrollOverflow && z.scrollOverflowHandler.afterLoad(), e.localIsResizing || Gt(e.element), e.element.addClass(f).siblings().removeClass(f), un = !0, t.isFunction(e.callback) && e.callback.call(this)
		}

		function Vt(t, e) {
			t.attr(e, t.data(e)).removeAttr("data-" + e)
		}

		function jt(e) {
			if(z.lazyLoading) {
				var n;
				Xt(e).find("img[data-src], img[data-srcset], source[data-src], video[data-src], audio[data-src], iframe[data-src]").each(function() {
					if(n = t(this), t.each(["src", "srcset"], function(t, e) {
							var i = n.attr("data-" + e);
							void 0 !== i && i && Vt(n, e)
						}), n.is("source")) {
						var e = n.closest("video").length ? "video" : "audio";
						n.closest(e).get(0).load()
					}
				})
			}
		}

		function Gt(e) {
			var n = Xt(e);
			n.find("video, audio").each(function() {
				var e = t(this).get(0);
				e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
			}), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
				var e = t(this).get(0);
				e.hasAttribute("data-autoplay") && Wt(e), e.onload = function() {
					e.hasAttribute("data-autoplay") && Wt(e)
				}
			})
		}

		function Wt(t) {
			t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
		}

		function qt(e) {
			var n = Xt(e);
			n.find("video, audio").each(function() {
				var e = t(this).get(0);
				e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
			}), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
				var e = t(this).get(0);
				/youtube\.com\/embed\//.test(t(this).attr("src")) && !e.hasAttribute("data-keepplaying") && t(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
			})
		}

		function Xt(e) {
			var n = e.find(A);
			return n.length && (e = t(n)), e
		}

		function Qt() {
			var t = $t(),
				e = t.section,
				n = t.slide;
			e && (z.animateAnchor ? He(e, n) : it(e, n))
		}

		function Yt() {
			if(!bn && !z.lockAnchors) {
				var t = $t(),
					e = t.section,
					n = t.slide,
					i = void 0 === Ze,
					r = void 0 === Ze && void 0 === n && !rn;
				e.length && (e && e !== Ze && !i || r || !rn && tn != n) && He(e, n)
			}
		}

		function $t() {
			var t = e.location.hash,
				n = t.replace("#", "").split("/"),
				i = t.indexOf("#/") > -1;
			return {
				section: i ? "/" + n[1] : decodeURIComponent(n[0]),
				slide: i ? decodeURIComponent(n[2]) : decodeURIComponent(n[1])
			}
		}

		function Kt(e) {
			clearTimeout(_n);
			var n = t(":focus");
			if(!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && z.keyboardScrolling && z.autoScrolling) {
				var i = e.which,
					r = [40, 38, 32, 33, 34];
				t.inArray(i, r) > -1 && e.preventDefault(), en = e.ctrlKey, _n = setTimeout(function() {
					ae(e)
				}, 150)
			}
		}

		function Jt() {
			t(this).prev().trigger("click")
		}

		function Zt(t) {
			hn && (en = t.ctrlKey)
		}

		function te(t) {
			2 == t.which && (Pn = t.pageY, sn.on("mousemove", se))
		}

		function ee(t) {
			2 == t.which && sn.off("mousemove")
		}

		function ne() {
			var e = t(this).closest(E);
			t(this).hasClass(N) ? pn.m.left && at(e) : pn.m.right && ot(e)
		}

		function ie() {
			hn = !1, en = !1
		}

		function re(e) {
			e.preventDefault();
			var n = t(this).parent().index();
			Ft(t(E).eq(n))
		}

		function oe(e) {
			e.preventDefault();
			var n = t(this).closest(E).find(L);
			le(n, n.find(M).eq(t(this).closest("li").index()))
		}

		function ae(e) {
			var n = e.shiftKey;
			if(un || !([37, 39].indexOf(e.which) < 0)) switch(e.which) {
				case 38:
				case 33:
					pn.k.up && et();
					break;
				case 32:
					if(n && pn.k.up) {
						et();
						break
					}
				case 40:
				case 34:
					pn.k.down && nt();
					break;
				case 36:
					pn.k.up && rt(1);
					break;
				case 35:
					pn.k.down && rt(t(E).length);
					break;
				case 37:
					pn.k.left && at();
					break;
				case 39:
					pn.k.right && ot();
					break;
				default:
					return
			}
		}

		function se(t) {
			un && (t.pageY < Pn && pn.m.up ? et() : t.pageY > Pn && pn.m.down && nt()), Pn = t.pageY
		}

		function le(e, n, i) {
			var r = e.closest(E),
				o = {
					slides: e,
					destiny: n,
					direction: i,
					destinyPos: n.position(),
					slideIndex: n.index(),
					section: r,
					sectionIndex: r.index(E),
					anchorLink: r.data("anchor"),
					slidesNav: r.find(F),
					slideAnchor: Le(n),
					prevSlide: r.find(A),
					prevSlideIndex: r.find(A).index(),
					localIsResizing: cn
				};
			return o.xMovement = _e(o.prevSlideIndex, o.slideIndex), o.localIsResizing || (un = !1), z.onSlideLeave && !o.localIsResizing && "none" !== o.xMovement && t.isFunction(z.onSlideLeave) && !1 === z.onSlideLeave.call(o.prevSlide, o.anchorLink, o.sectionIndex + 1, o.prevSlideIndex, o.direction, o.slideIndex) ? void(rn = !1) : (n.addClass(d).siblings().removeClass(d), o.localIsResizing || (qt(o.prevSlide), jt(n)), !z.loopHorizontal && z.controlArrows && (r.find(j).toggle(0 !== o.slideIndex), r.find(q).toggle(!n.is(":last-child"))), r.hasClass(d) && !o.localIsResizing && Ae(o.slideIndex, o.slideAnchor, o.anchorLink, o.sectionIndex), void he(e, o, !0))
		}

		function ce(e) {
			ue(e.slidesNav, e.slideIndex), e.localIsResizing || (t.isFunction(z.afterSlideLoad) && z.afterSlideLoad.call(e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex), un = !0, Gt(e.destiny)), rn = !1
		}

		function he(t, e, n) {
			var r = e.destinyPos;
			if(z.css3) {
				var o = "translate3d(-" + i.round(r.left) + "px, 0px, 0px)";
				fe(t.find(k)).css(je(o)), En = setTimeout(function() {
					n && ce(e)
				}, z.scrollingSpeed, z.easing)
			} else t.animate({
				scrollLeft: i.round(r.left)
			}, z.scrollingSpeed, z.easing, function() {
				n && ce(e)
			})
		}

		function ue(t, e) {
			t.find(p).removeClass(d), t.find("li").eq(e).find("a").addClass(d)
		}

		function de() {
			if(pe(), on) {
				var e = t(n.activeElement);
				if(!e.is("textarea") && !e.is("input") && !e.is("select")) {
					var r = X.height();
					i.abs(r - kn) > 20 * i.max(kn, r) / 100 && (st(!0), kn = r)
				}
			} else clearTimeout(mn), mn = setTimeout(function() {
				st(!0)
			}, 350)
		}

		function pe() {
			var t = z.responsive || z.responsiveWidth,
				e = z.responsiveHeight,
				n = t && X.outerWidth() < t,
				i = e && X.height() < e;
			t && e ? lt(n || i) : t ? lt(n) : e && lt(i)
		}

		function fe(t) {
			var e = "all " + z.scrollingSpeed + "ms " + z.easingcss3;
			return t.removeClass(l), t.css({
				"-webkit-transition": e,
				transition: e
			})
		}

		function me(t) {
			return t.addClass(l)
		}

		function ge(e, n) {
			z.navigation && (t(b).find(p).removeClass(d), e ? t(b).find('a[href="#' + e + '"]').addClass(d) : t(b).find("li").eq(n).find("a").addClass(d))
		}

		function Ee(e) {
			z.menu && (t(z.menu).find(p).removeClass(d), t(z.menu).find('[data-menuanchor="' + e + '"]').addClass(d))
		}

		function ve(t, e) {
			Ee(t), ge(t, e)
		}

		function ye(e) {
			var n = t(v).index(E),
				i = e.index(E);
			return n == i ? "none" : n > i ? "up" : "down"
		}

		function _e(t, e) {
			return t == e ? "none" : t > e ? "left" : "right"
		}

		function Te(t) {
			t.hasClass(D) || t.addClass(D).wrapInner('<div class="' + T + '" style="height:' + xe(t) + 'px;" />')
		}

		function xe(t) {
			var e = ln;
			if(z.paddingTop || z.paddingBottom) {
				var n = t;
				n.hasClass(g) || (n = t.closest(E));
				var i = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
				e = ln - i
			}
			return e
		}

		function we(t, e) {
			e ? fe(sn) : me(sn), sn.css(je(t)), setTimeout(function() {
				sn.removeClass(l)
			}, 10)
		}

		function be(e) {
			if(!e) return [];
			var n = sn.find(E + '[data-anchor="' + e + '"]');
			return n.length || (n = t(E).eq(e - 1)), n
		}

		function Re(t, e) {
			var n = e.find(L),
				i = n.find(M + '[data-anchor="' + t + '"]');
			return i.length || (i = n.find(M).eq(t)), i
		}

		function He(t, e) {
			var n = be(t);
			n.length && (void 0 === e && (e = 0), t === Ze || n.hasClass(d) ? Ce(n, e) : Ft(n, function() {
				Ce(n, e)
			}))
		}

		function Ce(t, e) {
			if(void 0 !== e) {
				var n = t.find(L),
					i = Re(e, t);
				i.length && le(n, i)
			}
		}

		function Me(t, e) {
			t.append('<div class="' + B + '"><ul></ul></div>');
			var n = t.find(F);
			n.addClass(z.slidesNavPosition);
			for(var i = 0; i < e; i++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
			n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(d)
		}

		function Ae(t, e, n, i) {
			var r = "";
			z.anchors.length && !z.lockAnchors && (t ? (void 0 !== n && (r = n), void 0 === e && (e = t), tn = e, Se(r + "/" + e)) : void 0 !== t ? (tn = e, Se(n)) : Se(n)), Pe()
		}

		function Se(t) {
			if(z.recordHistory) location.hash = t;
			else if(on || an) e.history.replaceState(r, r, "#" + t);
			else {
				var n = e.location.href.split("#")[0];
				e.location.replace(n + "#" + t)
			}
		}

		function Le(t) {
			var e = t.data("anchor"),
				n = t.index();
			return void 0 === e && (e = n), e
		}

		function Pe() {
			var e = t(v),
				n = e.find(A),
				i = Le(e),
				r = Le(n),
				o = String(i);
			n.length && (o = o + "-" + r), o = o.replace("/", "-").replace("#", "");
			var a = new RegExp("\\b\\s?" + u + "-[^\\s]+\\b", "g");
			Ke[0].className = Ke[0].className.replace(a, ""), Ke.addClass(u + "-" + o)
		}

		function ke() {
			var t, i = n.createElement("p"),
				o = {
					webkitTransform: "-webkit-transform",
					OTransform: "-o-transform",
					msTransform: "-ms-transform",
					MozTransform: "-moz-transform",
					transform: "transform"
				};
			n.body.insertBefore(i, null);
			for(var a in o) i.style[a] !== r && (i.style[a] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(i).getPropertyValue(o[a]));
			return n.body.removeChild(i), t !== r && t.length > 0 && "none" !== t
		}

		function De() {
			n.addEventListener ? (n.removeEventListener("mousewheel", Pt, !1), n.removeEventListener("wheel", Pt, !1), n.removeEventListener("MozMousePixelScroll", Pt, !1)) : n.detachEvent("onmousewheel", Pt)
		}

		function Be() {
			var t, i = "";
			e.addEventListener ? t = "addEventListener" : (t = "attachEvent", i = "on");
			var o = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== r ? "mousewheel" : "DOMMouseScroll";
			"DOMMouseScroll" == o ? n[t](i + "MozMousePixelScroll", Pt, !1) : n[t](i + o, Pt, !1)
		}

		function Fe() {
			sn.on("mousedown", te).on("mouseup", ee)
		}

		function Oe() {
			sn.off("mousedown", te).off("mouseup", ee)
		}

		function ze() {
			(on || an) && (z.autoScrolling && Ke.off(xn.touchmove).on(xn.touchmove, Ct), t(a).off(xn.touchstart).on(xn.touchstart, St).off(xn.touchmove).on(xn.touchmove, Mt))
		}

		function Ie() {
			(on || an) && (z.autoScrolling && Ke.off(xn.touchmove), t(a).off(xn.touchstart).off(xn.touchmove))
		}

		function Ne(t) {
			var e = [];
			return e.y = void 0 !== t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, e.x = void 0 !== t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX, an && At(t) && z.scrollBar && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
		}

		function Ue(t, e) {
			Y(0, "internal"), void 0 !== e && (cn = !0), le(t.closest(L), t), void 0 !== e && (cn = !1), Y(wn.scrollingSpeed, "internal")
		}

		function Ve(t) {
			var e = i.round(t);
			z.css3 && z.autoScrolling && !z.scrollBar ? we("translate3d(0px, -" + e + "px, 0px)", !1) : z.autoScrolling && !z.scrollBar ? sn.css("top", -e) : $e.scrollTop(e)
		}

		function je(t) {
			return {
				"-webkit-transform": t,
				"-moz-transform": t,
				"-ms-transform": t,
				transform: t
			}
		}

		function Ge(e, n, i) {
			"all" !== n ? pn[i][n] = e : t.each(Object.keys(pn[i]), function(t, n) {
				pn[i][n] = e
			})
		}

		function We(e) {
			U(!1, "internal"), Z(!1), tt(!1), sn.addClass(c), clearTimeout(En), clearTimeout(gn), clearTimeout(mn), clearTimeout(vn), clearTimeout(yn), X.off("scroll", xt).off("hashchange", Yt).off("resize", de), Q.off("click touchstart", b + " a").off("mouseenter", b + " li").off("mouseleave", b + " li").off("click touchstart", O).off("mouseover", z.normalScrollElements).off("mouseout", z.normalScrollElements), t(E).off("click touchstart", I), clearTimeout(En), clearTimeout(gn), e && qe()
		}

		function qe() {
			Ve(0), sn.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
				Vt(t(this), "src")
			}), sn.find("img[data-srcset]").each(function() {
				Vt(t(this), "srcset")
			}), t(b + ", " + F + ", " + I).remove(), t(E).css({
				height: "",
				"background-color": "",
				padding: ""
			}), t(M).css({
				width: ""
			}), sn.css({
				height: "",
				position: "",
				"-ms-touch-action": "",
				"touch-action": ""
			}), $e.css({
				overflow: "",
				height: ""
			}), t("html").removeClass(h), Ke.removeClass(s), t.each(Ke.get(0).className.split(/\s+/), function(t, e) {
				0 === e.indexOf(u) && Ke.removeClass(e)
			}), t(E + ", " + M).each(function() {
				z.scrollOverflowHandler && z.scrollOverflowHandler.remove(t(this)), t(this).removeClass(D + " " + d)
			}), me(sn), sn.find(x + ", " + k + ", " + L).each(function() {
				t(this).replaceWith(this.childNodes)
			}), sn.css({
				"-webkit-transition": "none",
				transition: "none"
			}), $e.scrollTop(0);
			var e = [g, C, P];
			t.each(e, function(e, n) {
				t("." + n).removeClass(n)
			})
		}

		function Xe(t, e, n) {
			z[t] = e, "internal" !== n && (wn[t] = e)
		}

		function Qe() {
			var e = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
			return t("html").hasClass(h) ? void Ye("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (z.continuousVertical && (z.loopTop || z.loopBottom) && (z.continuousVertical = !1, Ye("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), z.scrollBar && z.scrollOverflow && Ye("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !z.continuousVertical || !z.scrollBar && z.autoScrolling || (z.continuousVertical = !1, Ye("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), z.scrollOverflow && !z.scrollOverflowHandler && (z.scrollOverflow = !1, Ye("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), t.each(e, function(t, e) {
				z[e] && Ye("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + e)
			}), void t.each(z.anchors, function(e, n) {
				var i = Q.find("[name]").filter(function() {
						return t(this).attr("name") && t(this).attr("name").toLowerCase() == n.toLowerCase()
					}),
					r = Q.find("[id]").filter(function() {
						return t(this).attr("id") && t(this).attr("id").toLowerCase() == n.toLowerCase()
					});
				(r.length || i.length) && (Ye("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), r.length && Ye("error", '"' + n + '" is is being used by another element `id` property'), i.length && Ye("error", '"' + n + '" is is being used by another element `name` property'))
			}))
		}

		function Ye(t, e) {
			console && console[t] && console[t]("fullPage: " + e)
		}
		if(t("html").hasClass(h)) return void Qe();
		var $e = t("html, body"),
			Ke = t("body"),
			Je = t.fn.fullpage;
		z = t.extend({
			menu: !1,
			anchors: [],
			lockAnchors: !1,
			navigation: !1,
			navigationPosition: "right",
			navigationTooltips: [],
			showActiveTooltip: !1,
			slidesNavigation: !1,
			slidesNavPosition: "bottom",
			scrollBar: !1,
			hybrid: !1,
			css3: !0,
			scrollingSpeed: 700,
			autoScrolling: !0,
			fitToSection: !0,
			fitToSectionDelay: 1e3,
			easing: "easeInOutCubic",
			easingcss3: "ease",
			loopBottom: !1,
			loopTop: !1,
			loopHorizontal: !0,
			continuousVertical: !1,
			continuousHorizontal: !1,
			scrollHorizontally: !1,
			interlockedSlides: !1,
			dragAndMove: !1,
			offsetSections: !1,
			resetSliders: !1,
			fadingEffect: !1,
			normalScrollElements: null,
			scrollOverflow: !1,
			scrollOverflowReset: !1,
			scrollOverflowHandler: t.fn.fp_scrolloverflow ? t.fn.fp_scrolloverflow.iscrollHandler : null,
			scrollOverflowOptions: null,
			touchSensitivity: 5,
			normalScrollElementTouchThreshold: 5,
			bigSectionsDestination: null,
			keyboardScrolling: !0,
			animateAnchor: !0,
			recordHistory: !0,
			controlArrows: !0,
			controlArrowColor: "#fff",
			verticalCentered: !0,
			sectionsColor: [],
			paddingTop: 0,
			paddingBottom: 0,
			fixedElements: null,
			responsive: 0,
			responsiveWidth: 0,
			responsiveHeight: 0,
			responsiveSlides: !1,
			parallax: !1,
			parallaxOptions: {
				type: "reveal",
				percentage: 62,
				property: "translate"
			},
			sectionSelector: ".section",
			slideSelector: ".slide",
			afterLoad: null,
			onLeave: null,
			afterRender: null,
			afterResize: null,
			afterReBuild: null,
			afterSlideLoad: null,
			onSlideLeave: null,
			afterResponsive: null,
			lazyLoading: !0
		}, z);
		var Ze, tn, en, nn, rn = !1,
			on = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
			an = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
			sn = t(this),
			ln = X.height(),
			cn = !1,
			hn = !0,
			un = !0,
			dn = [],
			pn = {};
		pn.m = {
			up: !0,
			down: !0,
			left: !0,
			right: !0
		}, pn.k = t.extend(!0, {}, pn.m);
		var fn, mn, gn, En, vn, yn, _n, Tn = function() {
				return e.PointerEvent ? {
					down: "pointerdown",
					move: "pointermove"
				} : {
					down: "MSPointerDown",
					move: "MSPointerMove"
				}
			}(),
			xn = {
				touchmove: "ontouchmove" in e ? "touchmove" : Tn.move,
				touchstart: "ontouchstart" in e ? "touchstart" : Tn.down
			},
			wn = t.extend(!0, {}, z);
		Qe(), t.extend(t.easing, {
			easeInOutCubic: function(t, e, n, i, r) {
				return(e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
			}
		}), t(this).length && (Je.version = "2.9.5", Je.setAutoScrolling = U, Je.setRecordHistory = G, Je.setScrollingSpeed = Y, Je.setFitToSection = $, Je.setLockAnchors = K, Je.setMouseWheelScrolling = J, Je.setAllowScrolling = Z, Je.setKeyboardScrolling = tt, Je.moveSectionUp = et, Je.moveSectionDown = nt, Je.silentMoveTo = it, Je.moveTo = rt, Je.moveSlideRight = ot, Je.moveSlideLeft = at, Je.fitToSection = wt, Je.reBuild = st, Je.setResponsive = lt, Je.destroy = We, Je.shared = {
			afterRenderActions: _t
		}, function() {
			z.css3 && (z.css3 = ke()), z.scrollBar = z.scrollBar || z.hybrid, ct(), ht(), Z(!0), U(z.autoScrolling, "internal"), pe(), Pe(), "complete" === n.readyState && Qt(), X.on("load", Qt)
		}(), function() {
			X.on("scroll", xt).on("hashchange", Yt).blur(ie).resize(de), Q.keydown(Kt).keyup(Zt).on("click touchstart", b + " a", re).on("click touchstart", O, oe).on("click", H, Jt), t(E).on("click touchstart", I, ne), z.normalScrollElements && (Q.on("mouseenter touchstart", z.normalScrollElements, function() {
				Z(!1)
			}), Q.on("mouseleave touchend", z.normalScrollElements, function() {
				Z(!0)
			}))
		}());
		var bn = !1,
			Rn = 0,
			Hn = 0,
			Cn = 0,
			Mn = 0,
			An = 0,
			Sn = (UDate()).getTime(),
			Ln = 0,
			Pn = 0,
			kn = ln
	}
}),
function(t) {
	"use strict";

	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
	"use strict";

	function e(t) {

		if(t instanceof Date) return t;
		if(String(t).match(a)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), (UDateT(t));
		throw new Error("Couldn't cast `" + t + "` to a date object.")
	}

	function n(t) {
		var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
		return new RegExp(e)
	}

	function i(t) {
		return function(e) {
			var i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
			if(i)
				for(var o = 0, a = i.length; o < a; ++o) {
					var s = i[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
						c = n(s[0]),
						h = s[1] || "",
						u = s[3] || "",
						d = null;
					s = s[2], l.hasOwnProperty(s) && (d = l[s], d = Number(t[d])), null !== d && ("!" === h && (d = r(u, d)), "" === h && d < 10 && (d = "0" + d.toString()), e = e.replace(c, d.toString()))
				}
			return e = e.replace(/%%/, "%")
		}
	}

	function r(t, e) {
		var n = "s",
			i = "";
		return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? n = t[0] : (i = t[0], n = t[1])), Math.abs(e) > 1 ? n : i
	}
	var o = [],
		a = [],
		s = {
			precision: 100,
			elapse: !1,
			defer: !1
		};
	a.push(/^[0-9]*$/.source), a.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), a.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), a = new RegExp(a.join("|"));
	var l = {
			Y: "years",
			m: "months",
			n: "daysToMonth",
			d: "daysToWeek",
			w: "weeks",
			W: "weeksToMonth",
			H: "hours",
			M: "minutes",
			S: "seconds",
			D: "totalDays",
			I: "totalHours",
			N: "totalMinutes",
			T: "totalSeconds"
		},
		c = function(e, n, i) {
			this.el = e, this.$el = t(e), this.interval = null, this.offset = {}, this.options = t.extend({}, s), this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)) : this.options = t.extend({}, s, i)), this.setFinalDate(n), !1 === this.options.defer && this.start()
		};
	t.extend(c.prototype, {
		start: function() {
			null !== this.interval && clearInterval(this.interval);
			var t = this;
			this.update(), this.interval = setInterval(function() {
				t.update.call(t)
			}, this.options.precision)
		},
		stop: function() {
			clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
		},
		toggle: function() {
			this.interval ? this.stop() : this.start()
		},
		pause: function() {
			this.stop()
		},
		resume: function() {
			this.start()
		},
		remove: function() {
			this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance
		},
		setFinalDate: function(t) {
			this.finalDate = e(t)
		},
		update: function() {
			if(0 === this.$el.closest("html").length) return void this.remove();
			var e, n = void 0 !== t._data(this.el, "events"),
				i = UDate();
			e = this.finalDate.getTime() - i.getTime(), e = Math.ceil(e / 1e3), e = !this.options.elapse && e < 0 ? 0 : Math.abs(e), this.totalSecsLeft !== e && n && (this.totalSecsLeft = e, this.elapsed = i >= this.finalDate, this.offset = {
					seconds: this.totalSecsLeft % 60,
					minutes: Math.floor(this.totalSecsLeft / 60) % 60,
					hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
					days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
					daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
					daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
					weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
					weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
					months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
					years: Math.abs(this.finalDate.getFullYear() - i.getFullYear()),
					totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
					totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
					totalMinutes: Math.floor(this.totalSecsLeft / 60),
					totalSeconds: this.totalSecsLeft
				},
				this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
		},
		dispatchEvent: function(e) {
			var n = t.Event(e + ".countdown");
			n.finalDate = this.finalDate, n.elapsed = this.elapsed, n.offset = t.extend({}, this.offset),
				n.strftime = i(this.offset),
				this.$el.trigger(n)
		}
	}), t.fn.countdown = function() {
		var e = Array.prototype.slice.call(arguments, 0);
		return this.each(function() {
			var n = t(this).data("countdown-instance");
			if(void 0 !== n) {
				var i = o[n],
					r = e[0];
				c.prototype.hasOwnProperty(r) ? i[r].apply(i, e.slice(1)) : null === String(r).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (i.setFinalDate.call(i, r), i.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, r))
			} else new c(this, e[0], e[1])
		})
	}
}),
function(t, e, n, i) {

	function r(e, n) {
		this.settings = null,
			this.options = t.extend({},
				r.Defaults, n),
			this.$element = t(e),
			this._handlers = {},
			this._plugins = {},
			this._supress = {},
			this._current = null,
			this._speed = null,
			this._coordinates = [],
			this._breakpoint = null,
			this._width = null,
			this._items = [],
			this._clones = [],
			this._mergers = [],
			this._widths = [],
			this._invalidated = {},
			this._pipe = [],
			this._drag = {
				time: null,
				target: null,
				pointer: null,
				stage: {
					start: null,
					current: null
				},
				direction: null
			},
			this._states = {
				current: {},
				tags: {
					initializing: ["busy"],
					animating: ["busy"],
					dragging: ["interacting"]
				}
			},
			t.each(["onResize", "onThrottledResize"], t.proxy(function(e, n) {
				this._handlers[n] = t.proxy(this[n], this)
			}, this)),
			t.each(r.Plugins, t.proxy(function(t, e) {
				this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
			}, this)),
			t.each(r.Workers, t.proxy(function(e, n) {
				this._pipe.push({
					filter: n.filter,
					run: t.proxy(n.run, this)
				})
			}, this)),

			this.setup(),

			this.initialize();

	}

	r.Defaults = {
			items: 3,
			loop: !1,
			center: !1,
			rewind: !1,
			mouseDrag: !0,
			touchDrag: !0,
			pullDrag: !0,
			freeDrag: !1,
			margin: 0,
			stagePadding: 0,
			merge: !1,
			mergeFit: !0,
			autoWidth: !1,
			startPosition: 0,
			rtl: !1,
			smartSpeed: 250,
			fluidSpeed: !1,
			dragEndSpeed: !1,
			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: e,
			fallbackEasing: "swing",
			info: !1,
			nestedItemSelector: !1,
			itemElement: "div",
			stageElement: "div",
			refreshClass: "owl-refresh",
			loadedClass: "owl-loaded",
			loadingClass: "owl-loading",
			rtlClass: "owl-rtl",
			responsiveClass: "owl-responsive",
			dragClass: "owl-drag",
			itemClass: "owl-item",
			stageClass: "owl-stage",
			stageOuterClass: "owl-stage-outer",
			grabClass: "owl-grab"
		},
		r.Width = {
			Default: "default",
			Inner: "inner",
			Outer: "outer"
		},
		r.Type = {
			Event: "event",
			State: "state"
		},
		r.Plugins = {},
		r.Workers = [{
				filter: ["width", "settings"],
				run: function() {
					this._width = this.$element.width()
				}
			},
			{
				filter: ["width", "items", "settings"],
				run: function(t) {

					t.current = this._items && this._items[this.relative(this._current)]
				}
			},
			{
				filter: ["items", "settings"],
				run: function() {
					this.$stage.children(".cloned").remove()
				}
			},
			{
				filter: ["width", "items", "settings"],
				run: function(t) {

					var e = this.settings.margin || "",
						n = !this.settings.autoWidth,
						i = this.settings.rtl,
						r = {
							width: "auto",
							"margin-left": i ? e : "",
							"margin-right": i ? "" : e
						};
					!n && this.$stage.children().css(r), t.css = r
				}
			},
			{
				filter: ["width", "items", "settings"],
				run: function(t) {
					var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
						n = null,
						i = this._items.length,
						r = !this.settings.autoWidth,
						o = [];
					for(t.items = {
							merge: !1,
							width: e
						}; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, o[i] = r ? e * n : this._items[i].width();
					this._widths = o

				}
			},
			{
				filter: ["items", "settings"],
				run: function() {
					var e = [],
						n = this._items,

						i = this.settings,
						r = Math.max(2 * i.items, 4),
						o = 2 * Math.ceil(n.length / 2),
						a = i.loop && n.length ? i.rewind ? r : Math.max(r, o) : 0,
						s = "",
						l = "";
					for(a /= 2; a--;) e.push(this.normalize(e.length / 2, !0)), s += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l;
					this._clones = e, t(s).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
				}
			},
			{
				filter: ["width", "items", "settings"],
				run: function() {
					for(var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, o = []; ++n < e;) i = o[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, o.push(i + r * t);
					this._coordinates = o
				}
			},
			{
				filter: ["width", "items", "settings"],
				run: function() {
					var t = this.settings.stagePadding,
						e = this._coordinates,
						n = {
							width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
							"padding-left": t || "",
							"padding-right": t || ""
						};
					this.$stage.css(n)
				}
			},
			{
				filter: ["width", "items", "settings"],
				run: function(t) {
					var e = this._coordinates.length,
						n = !this.settings.autoWidth,
						i = this.$stage.children();
					if(n && t.items.merge)
						for(; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
					else n && (t.css.width = t.items.width, i.css(t.css))
				}
			},
			{
				filter: ["items"],
				run: function() {
					this._coordinates.length < 1 && this.$stage.removeAttr("style")
				}
			},
			{
				filter: ["width", "items", "settings"],
				run: function(t) {
					t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
				}
			},
			{
				filter: ["position"],
				run: function() {
					this.animate(this.coordinates(this._current))
				}
			},
			{
				filter: ["width", "position", "items", "settings"],
				run: function() {
					var t, e, n, i, r = this.settings.rtl ? 1 : -1,
						o = 2 * this.settings.stagePadding,
						a = this.coordinates(this.current()) + o,
						s = a + this.width() * r,
						l = [];
					for(n = 0, i = this._coordinates.length; i > n; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + o * r, (this.op(t, "<=", a) && this.op(t, ">", s) || this.op(e, "<", a) && this.op(e, ">", s)) && l.push(n);
					this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
				}
			}
		],
		r.prototype.initialize = function() {
			if(this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
				var e, n, r;
				e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, r = this.$element.children(n).width(), e.length && 0 >= r && this.preloadAutoWidthImages(e)
			}
			this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
		},
		r.prototype.setup = function() {

			var e = this.viewport(),
				n = this.options.responsive,
				i = -1,
				r = null;
			n ? (t.each(n, function(t) {
						e >= t && t > i && (i = Number(t))
					}),
					r = t.extend({}, this.options, n[i]),

					"function" == typeof r.stagePadding && (r.stagePadding = r.stagePadding()),
					delete r.responsive,
					r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) :
				r = t.extend({}, this.options),
				this.trigger("change", {
					property: {
						name: "settings",
						value: r
					}
				}),

				this._breakpoint = i,
				this.settings = r,

				this.invalidate("settings"),
				this.trigger("changed", {
					property: {
						name: "settings",
						value: this.settings
					}
				})

		},
		r.prototype.optionsLogic = function() {
			this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
		},
		r.prototype.prepare = function(e) {
			var n = this.trigger("prepare", {
				content: e
			});
			return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
				content: n.data
			}), n.data
		},
		r.prototype.update = function() {
			for(var e = 0, n = this._pipe.length, i = t.proxy(function(t) {
					return this[t]
				}, this._invalidated), r = {}; n > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r), e++;
			this._invalidated = {}, !this.is("valid") && this.enter("valid")
		},
		r.prototype.width = function(t) {
			switch(t = t || r.Width.Default) {
				case r.Width.Inner:
				case r.Width.Outer:
					return this._width;
				default:
					return this._width - 2 * this.settings.stagePadding + this.settings.margin
			}
		},
		r.prototype.refresh = function() {
			this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
		},
		r.prototype.onThrottledResize = function() {
			e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
		},
		r.prototype.onResize = function() {
			return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
		},
		r.prototype.registerEventHandlers = function() {
			t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
				return !1
			})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
		},
		r.prototype.onDragStart = function(e) {
			var i = null;
			3 !== e.which && (t.support.transform ? (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), i = {
				x: i[16 === i.length ? 12 : 4],
				y: i[16 === i.length ? 13 : 5]
			}) : (i = this.$stage.position(), i = {
				x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
				y: i.top
			}), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (UDate()).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
				var i = this.difference(this._drag.pointer, this.pointer(e));
				t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
			}, this)))
		},
		r.prototype.onDragMove = function(t) {
			var e = null,
				n = null,
				i = null,
				r = this.difference(this._drag.pointer, this.pointer(t)),
				o = this.difference(this._drag.stage.start, r);
			this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + i), n + i)), this._drag.stage.current = o, this.animate(o.x))
		},
		r.prototype.onDragEnd = function(e) {
			var i = this.difference(this._drag.pointer, this.pointer(e)),
				r = this._drag.stage.current,
				o = i.x > 0 ^ this.settings.rtl ? "left" : "right";
			t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass),
				(0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== i.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(i.x) > 3 || (UDate()).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
					return !1
				})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
		},
		r.prototype.closest = function(e, n) {
			var i = -1,
				r = this.width(),
				o = this.coordinates();
			return this.settings.freeDrag || t.each(o, t.proxy(function(t, a) {
				return "left" === n && e > a - 30 && a + 30 > e ? i = t : "right" === n && e > a - r - 30 && a - r + 30 > e ? i = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] || a - r) && (i = "left" === n ? t + 1 : t), -1 === i
			}, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
		},
		r.prototype.animate = function(e) {
			var n = this.speed() > 0;
			this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
				transform: "translate3d(" + e + "px,0px,0px)",
				transition: this.speed() / 1e3 + "s"
			}) : n ? this.$stage.animate({
				left: e + "px"
			}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
				left: e + "px"
			})
		},
		r.prototype.is = function(t) {
			return this._states.current[t] && this._states.current[t] > 0
		},
		r.prototype.current = function(t) {
			if(t === i) return this._current;
			if(0 === this._items.length) return i;
			if(t = this.normalize(t), this._current !== t) {
				var e = this.trigger("change", {
					property: {
						name: "position",
						value: t
					}
				});
				e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
					property: {
						name: "position",
						value: this._current
					}
				})
			}
			return this._current
		},
		r.prototype.invalidate = function(e) {
			return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
				return e
			})
		},
		r.prototype.reset = function(t) {
			(t = this.normalize(t)) !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
		},
		r.prototype.normalize = function(t, e) {
			var n = this._items.length,
				r = e ? 0 : this._clones.length;
			return !this.isNumeric(t) || 1 > n ? t = i : (0 > t || t >= n + r) && (t = ((t - r / 2) % n + n) % n + r / 2), t
		},
		r.prototype.relative = function(t) {
			return t -= this._clones.length / 2, this.normalize(t, !0)
		},
		r.prototype.maximum = function(t) {
			var e, n, i, r = this.settings,
				o = this._coordinates.length;
			if(r.loop) o = this._clones.length / 2 + this._items.length - 1;
			else if(r.autoWidth || r.merge) {
				for(e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i););
				o = e + 1
			} else o = r.center ? this._items.length - 1 : this._items.length - r.items;
			return t && (o -= this._clones.length / 2), Math.max(o, 0)
		},
		r.prototype.minimum = function(t) {
			return t ? 0 : this._clones.length / 2
		},
		r.prototype.items = function(t) {
			return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
		},
		r.prototype.mergers = function(t) {
			return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
		},
		r.prototype.clones = function(e) {
			var n = this._clones.length / 2,
				r = n + this._items.length,
				o = function(t) {
					return t % 2 == 0 ? r + t / 2 : n - (t + 1) / 2
				};
			return e === i ? t.map(this._clones, function(t, e) {
				return o(e)
			}) : t.map(this._clones, function(t, n) {
				return t === e ? o(n) : null
			})
		},
		r.prototype.speed = function(t) {
			return t !== i && (this._speed = t), this._speed
		},
		r.prototype.coordinates = function(e) {
			var n, r = 1,
				o = e - 1;
			return e === i ? t.map(this._coordinates, t.proxy(function(t, e) {
				return this.coordinates(e)
			}, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, o = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[o] || 0)) / 2 * r) : n = this._coordinates[o] || 0, n = Math.ceil(n))
		},
		r.prototype.duration = function(t, e, n) {
			return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
		},
		r.prototype.to = function(t, e) {
			var n = this.current(),
				i = null,
				r = t - this.relative(n),
				o = (r > 0) - (0 > r),
				a = this._items.length,
				s = this.minimum(),
				l = this.maximum();
			this.settings.loop ? (!this.settings.rewind && Math.abs(r) > a / 2 && (r += -1 * o * a), t = n + r, (i = ((t - s) % a + a) % a + s) !== t && l >= i - r && i - r > 0 && (n = i - r, t = i, this.reset(n))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(s, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
		},
		r.prototype.next = function(t) {
			t = t || !1, this.to(this.relative(this.current()) + 1, t)
		},
		r.prototype.prev = function(t) {
			t = t || !1, this.to(this.relative(this.current()) - 1, t)
		},
		r.prototype.onTransitionEnd = function(t) {
			return(t === i || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
		},
		r.prototype.viewport = function() {
			var i;
			if(this.options.responsiveBaseElement !== e) i = t(this.options.responsiveBaseElement).width();
			else if(e.innerWidth) i = e.innerWidth;
			else {
				if(!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
				i = n.documentElement.clientWidth
			}
			return i
		},
		r.prototype.replace = function(e) {
			this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
				return 1 === this.nodeType
			}).each(t.proxy(function(t, e) {
				e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
			}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
		},
		r.prototype.add = function(e, n) {
			var r = this.relative(this._current);
			n = n === i ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
				content: e,
				position: n
			}), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
				content: e,
				position: n
			})
		},

		r.prototype.remove = function(t) {
			(t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
				content: this._items[t],
				position: t
			}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
				content: null,
				position: t
			}))
		},
		r.prototype.preloadAutoWidthImages = function(e) {
			e.each(t.proxy(function(e, n) {
				this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy(function(t) {
					n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
				}, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
			}, this))
		},
		r.prototype.destroy = function() {
			this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
			for(var i in this._plugins) this._plugins[i].destroy();
			this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
		},
		r.prototype.op = function(t, e, n) {
			var i = this.settings.rtl;
			switch(e) {
				case "<":
					return i ? t > n : n > t;
				case ">":
					return i ? n > t : t > n;
				case ">=":
					return i ? n >= t : t >= n;
				case "<=":
					return i ? t >= n : n >= t
			}
		},
		r.prototype.on = function(t, e, n, i) {
			t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
		},
		r.prototype.off = function(t, e, n, i) {
			t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
		},
		r.prototype.trigger = function(e, n, i, o, a) {
			var s = {
					item: {
						count: this._items.length,
						index: this.current()
					}
				},
				l = t.camelCase(t.grep(["on", e, i], function(t) {
					return t
				}).join("-").toLowerCase()),
				c = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
					relatedTarget: this
				}, s, n));
			return this._supress[e] || (t.each(this._plugins, function(t, e) {
				e.onTrigger && e.onTrigger(c)
			}), this.register({
				type: r.Type.Event,
				name: e
			}), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
		},
		r.prototype.enter = function(e) {
			t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
				this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
			}, this))
		},
		r.prototype.leave = function(e) {
			t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
				this._states.current[e]--
			}, this))
		},
		r.prototype.register = function(e) {
			if(e.type === r.Type.Event) {
				if(t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
					var n = t.event.special[e.name]._default;
					t.event.special[e.name]._default = function(t) {
						return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
					}, t.event.special[e.name].owl = !0
				}
			} else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(n, i) {
				return t.inArray(n, this._states.tags[e.name]) === i
			}, this)))
		},
		r.prototype.suppress = function(e) {
			t.each(e, t.proxy(function(t, e) {
				this._supress[e] = !0
			}, this))
		},
		r.prototype.release = function(e) {
			t.each(e, t.proxy(function(t, e) {
				delete this._supress[e]
			}, this))
		},
		r.prototype.pointer = function(t) {
			var n = {
				x: null,
				y: null
			};
			return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
		},
		r.prototype.isNumeric = function(t) {
			return !isNaN(parseFloat(t))
		},
		r.prototype.difference = function(t, e) {
			return {
				x: t.x - e.x,
				y: t.y - e.y
			}
		},
		t.fn.owlCarousel = function(e) {
			var n = Array.prototype.slice.call(arguments, 1);
			return this.each(function() {
				var i = t(this),
					o = i.data("owl.carousel");
				o || (o = new r(this, "object" == typeof e && e), i.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, n) {
					o.register({
						type: r.Type.Event,
						name: n
					}), o.$element.on(n + ".owl.carousel.core", t.proxy(function(t) {
						t.namespace && t.relatedTarget !== this && (this.suppress([n]), o[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
					}, o))
				})), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, n)
			})
		},
		t.fn.owlCarousel.Constructor = r

}(window.Zepto || window.jQuery, window, document),

function(t, e, n, i) {
	var r = function(e) {
		this._core = e, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": t.proxy(function(t) {
				t.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	r.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, r.prototype.watch = function() {
		this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, r.prototype.refresh = function() {
		this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, r.prototype.destroy = function() {
		var t, n;
		e.clearInterval(this._interval);
		for(t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for(n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
	var r = function(e) {
		this._core = e, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
				if(e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
					for(var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, r = n.center && -1 * i || 0, o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + r, a = this._core.clones().length, s = t.proxy(function(t, e) {
							this.load(e)
						}, this); r++ < i;) this.load(a / 2 + this._core.relative(o)), a && t.each(this._core.clones(this._core.relative(o)), s), o++
			}, this)
		}, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	r.Defaults = {
		lazyLoad: !1
	}, r.prototype.load = function(n) {
		var i = this._core.$stage.children().eq(n),
			r = i && i.find(".owl-lazy");
		!r || t.inArray(i.get(0), this._loaded) > -1 || (r.each(t.proxy(function(n, i) {
			var r, o = t(i),
				a = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
			this._core.trigger("load", {
				element: o,
				url: a
			}, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
				o.css("opacity", 1), this._core.trigger("loaded", {
					element: o,
					url: a
				}, "lazy")
			}, this)).attr("src", a) : (r = new Image, r.onload = t.proxy(function() {
				o.css({
					"background-image": "url(" + a + ")",
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: o,
					url: a
				}, "lazy")
			}, this), r.src = a)
		}, this)), this._loaded.push(i.get(0)))
	}, r.prototype.destroy = function() {
		var t, e;
		for(t in this.handlers) this._core.$element.off(t, this.handlers[t]);
		for(e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Lazy = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
	var r = function(e) {
		this._core = e, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
				t.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": t.proxy(function(t) {
				t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
			}, this),
			"loaded.owl.lazy": t.proxy(function(t) {
				t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	r.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, r.prototype.update = function() {
		var e = this._core._current,
			n = e + this._core.settings.items,
			i = this._core.$stage.children().toArray().slice(e, n),
			r = [],
			o = 0;
		t.each(i, function(e, n) {
			r.push(t(n).height())
		}), o = Math.max.apply(null, r), this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
	}, r.prototype.destroy = function() {
		var t, e;
		for(t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for(e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
	var r = function(e) {
		this._core = e, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": t.proxy(function(t) {
				t.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": t.proxy(function(t) {
				t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
			}, this),
			"refreshed.owl.carousel": t.proxy(function(t) {
				t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this),
			"changed.owl.carousel": t.proxy(function(t) {
				t.namespace && "position" === t.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": t.proxy(function(e) {
				if(e.namespace) {
					var n = t(e.content).find(".owl-video");
					n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
				}
			}, this)
		}, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
			this.play(t)
		}, this))
	};
	r.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, r.prototype.fetch = function(t, e) {
		var n = function() {
				return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(),
			i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
			r = t.attr("data-width") || this._core.settings.videoWidth,
			o = t.attr("data-height") || this._core.settings.videoHeight,
			a = t.attr("href");
		if(!a) throw new Error("Missing video URL.");
		if(i = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
		else if(i[3].indexOf("vimeo") > -1) n = "vimeo";
		else {
			if(!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			n = "vzaar"
		}
		i = i[6], this._videos[a] = {
			type: n,
			id: i,
			width: r,
			height: o
		}, e.attr("data-video", a), this.thumbnail(t, this._videos[a])
	}, r.prototype.thumbnail = function(e, n) {
		var i, r, o, a = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
			s = e.find("img"),
			l = "src",
			c = "",
			h = this._core.settings,
			u = function(t) {
				r = '<div class="owl-video-play-icon"></div>', i = h.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after(r)
			};
		return e.wrap('<div class="owl-video-wrapper"' + a + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), s.length ? (u(s.attr(l)), s.remove(), !1) : void("youtube" === n.type ? (o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", u(o)) : "vimeo" === n.type ? t.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + n.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(t) {
				o = t[0].thumbnail_large, u(o)
			}
		}) : "vzaar" === n.type && t.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + n.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(t) {
				o = t.framegrab_url, u(o)
			}
		}))
	}, r.prototype.stop = function() {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, r.prototype.play = function(e) {
		var n, i = t(e.target),
			r = i.closest("." + this._core.settings.itemClass),
			o = this._videos[r.attr("data-video")],
			a = o.width || "100%",
			s = o.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), "youtube" === o.type ? n = '<iframe width="' + a + '" height="' + s + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? n = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + a + '" height="' + s + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (n = '<iframe frameborder="0"height="' + s + '"width="' + a + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + n + "</div>").insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
	}, r.prototype.isInFullScreen = function() {
		var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
		return e && t(e).parent().hasClass("owl-video-frame")
	}, r.prototype.destroy = function() {
		var t, e;
		this._core.$element.off("click.owl.video");
		for(t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for(e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
	var r = function(e) {
		this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
			"change.owl.carousel": t.proxy(function(t) {
				t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
				t.namespace && (this.swapping = "translated" == t.type)
			}, this),
			"translate.owl.carousel": t.proxy(function(t) {
				t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	r.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, r.prototype.swap = function() {
		if(1 === this.core.settings.items && t.support.animation && t.support.transition) {
			this.core.speed(0);
			var e, n = t.proxy(this.clear, this),
				i = this.core.$stage.children().eq(this.previous),
				r = this.core.$stage.children().eq(this.next),
				o = this.core.settings.animateIn,
				a = this.core.settings.animateOut;
			this.core.current() !== this.previous && (a && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({
				left: e + "px"
			}).addClass("animated owl-animated-out").addClass(a)), o && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(o))
		}
	}, r.prototype.clear = function(e) {
		t(e.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, r.prototype.destroy = function() {
		var t, e;
		for(t in this.handlers) this.core.$element.off(t, this.handlers[t]);
		for(e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
	var r = function(e) {
		this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
			"changed.owl.carousel": t.proxy(function(t) {
				t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
			}, this),
			"initialized.owl.carousel": t.proxy(function(t) {
				t.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": t.proxy(function(t, e, n) {
				t.namespace && this.play(e, n)
			}, this),
			"stop.owl.autoplay": t.proxy(function(t) {
				t.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": t.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": t.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": t.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": t.proxy(function() {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
	};
	r.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, r.prototype.play = function(t, e) {
		this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
	}, r.prototype._getNextTimeout = function(i, r) {
		return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
			this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
		}, this), i || this._core.settings.autoplayTimeout)
	}, r.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout()
	}, r.prototype.stop = function() {
		this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
	}, r.prototype.pause = function() {
		this._core.is("rotating") && (this._paused = !0)
	}, r.prototype.destroy = function() {
		var t, e;
		this.stop();
		for(t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for(e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
	"use strict";
	var r = function(e) {
		this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": t.proxy(function(e) {
				e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": t.proxy(function(t) {
				t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": t.proxy(function(t) {
				t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
			}, this),
			"changed.owl.carousel": t.proxy(function(t) {
				t.namespace && "position" == t.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": t.proxy(function(t) {
				t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": t.proxy(function(t) {
				t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	r.Defaults = {
		nav: !1,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, r.prototype.initialize = function() {
		var e, n = this._core.settings;
		this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
			this.prev(n.navSpeed)
		}, this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
			this.next(n.navSpeed)
		}, this)), n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
			var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
			e.preventDefault(), this.to(i, n.dotsSpeed)
		}, this));
		for(e in this._overrides) this._core[e] = t.proxy(this[e], this)
	}, r.prototype.destroy = function() {
		var t, e, n, i;
		for(t in this._handlers) this.$element.off(t, this._handlers[t]);
		for(e in this._controls) this._controls[e].remove();
		for(i in this.overides) this._core[i] = this._overrides[i];
		for(n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
	}, r.prototype.update = function() {
		var t, e, n, i = this._core.clones().length / 2,
			r = i + this._core.items().length,
			o = this._core.maximum(!0),
			a = this._core.settings,
			s = a.center || a.autoWidth || a.dotsData ? 1 : a.dotsEach || a.items;
		if("page" !== a.slideBy && (a.slideBy = Math.min(a.slideBy, a.items)), a.dots || "page" == a.slideBy)
			for(this._pages = [], t = i, e = 0, n = 0; r > t; t++) {
				if(e >= s || 0 === e) {
					if(this._pages.push({
							start: Math.min(o, t - i),
							end: t - i + s - 1
						}), Math.min(o, t - i) === o) break;
					e = 0, ++n
				}
				e += this._core.mergers(this._core.relative(t))
			}
	}, r.prototype.draw = function() {
		var e, n = this._core.settings,
			i = this._core.items().length <= n.items,
			r = this._core.relative(this._core.current()),
			o = n.loop || n.rewind;
		this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !o && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : 0 > e && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
	}, r.prototype.onTrigger = function(e) {
		var n = this._core.settings;
		e.page = {
			index: t.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
		}
	}, r.prototype.current = function() {
		var e = this._core.relative(this._core.current());
		return t.grep(this._pages, t.proxy(function(t, n) {
			return t.start <= e && t.end >= e
		}, this)).pop()
	}, r.prototype.getPosition = function(e) {
		var n, i, r = this._core.settings;
		return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += r.slideBy : n -= r.slideBy), n
	}, r.prototype.next = function(e) {
		t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
	}, r.prototype.prev = function(e) {
		t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
	}, r.prototype.to = function(e, n, i) {
		var r;
		!i && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
	}, t.fn.owlCarousel.Constructor.Plugins.Navigation = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
	"use strict";
	var r = function(n) {
		this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": t.proxy(function(n) {
				n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": t.proxy(function(e) {
				if(e.namespace) {
					var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if(!n) return;
					this._hashes[n] = e.content
				}
			}, this),
			"changed.owl.carousel": t.proxy(function(n) {
				if(n.namespace && "position" === n.property.name) {
					var i = this._core.items(this._core.relative(this._core.current())),
						r = t.map(this._hashes, function(t, e) {
							return t === i ? e : null
						}).join();
					if(!r || e.location.hash.slice(1) === r) return;
					e.location.hash = r
				}
			}, this)
		}, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
			var n = e.location.hash.substring(1),
				i = this._core.$stage.children(),
				r = this._hashes[n] && i.index(this._hashes[n]);
			void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
		}, this))
	};
	r.Defaults = {
		URLhashListener: !1
	}, r.prototype.destroy = function() {
		var n, i;
		t(e).off("hashchange.owl.navigation");
		for(n in this._handlers) this._core.$element.off(n, this._handlers[n]);
		for(i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Hash = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
	function r(e, n) {
		var r = !1,
			o = e.charAt(0).toUpperCase() + e.slice(1);
		return t.each((e + " " + s.join(o + " ") + o).split(" "), function(t, e) {
			return a[e] !== i ? (r = !n || e, !1) : void 0
		}), r
	}

	function o(t) {
		return r(t, !0)
	}
	var a = t("<support>").get(0).style,
		s = "Webkit Moz O ms".split(" "),
		l = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		c = {
			csstransforms: function() {
				return !!r("transform")
			},
			csstransforms3d: function() {
				return !!r("perspective")
			},
			csstransitions: function() {
				return !!r("transition")
			},
			cssanimations: function() {
				return !!r("animation")
			}
		};
	c.csstransitions() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), c.cssanimations() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]),
		c.csstransforms() && (t.support.transform = new String(o("transform")), t.support.transform3d = c.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
	function e(e) {
		var a = e || window.event,
			s = l.call(arguments, 1),
			c = 0,
			u = 0,
			d = 0,
			p = 0,
			f = 0,
			m = 0;
		if(e = t.event.fix(a), e.type = "mousewheel", "detail" in a && (d = -1 * a.detail), "wheelDelta" in a && (d = a.wheelDelta), "wheelDeltaY" in a && (d = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * d, d = 0), c = 0 === d ? u : d, "deltaY" in a && (d = -1 * a.deltaY, c = d), "deltaX" in a && (u = a.deltaX, 0 === d && (c = -1 * u)), 0 !== d || 0 !== u) {
			if(1 === a.deltaMode) {
				var g = t.data(this, "mousewheel-line-height");
				c *= g, d *= g, u *= g
			} else if(2 === a.deltaMode) {
				var E = t.data(this, "mousewheel-page-height");
				c *= E, d *= E, u *= E
			}
			if(p = Math.max(Math.abs(d), Math.abs(u)), (!o || o > p) && (o = p, i(a, p) && (o /= 40)), i(a, p) && (c /= 40, u /= 40, d /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), h.settings.normalizeOffset && this.getBoundingClientRect) {
				var v = this.getBoundingClientRect();
				f = e.clientX - v.left, m = e.clientY - v.top
			}
			return e.deltaX = u, e.deltaY = d, e.deltaFactor = o, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, s.unshift(e, c, u, d), r && clearTimeout(r), r = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, s)
		}
	}

	function n() {
		o = null
	}

	function i(t, e) {
		return h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
	}
	var r, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		l = Array.prototype.slice;
	if(t.event.fixHooks)
		for(var c = a.length; c;) t.event.fixHooks[a[--c]] = t.event.mouseHooks;
	var h = t.event.special.mousewheel = {
		version: "3.1.12",
		setup: function() {
			if(this.addEventListener)
				for(var n = s.length; n;) this.addEventListener(s[--n], e, !1);
			else this.onmousewheel = e;
			t.data(this, "mousewheel-line-height", h.getLineHeight(this)), t.data(this, "mousewheel-page-height", h.getPageHeight(this))
		},
		teardown: function() {
			if(this.removeEventListener)
				for(var n = s.length; n;) this.removeEventListener(s[--n], e, !1);
			else this.onmousewheel = null;
			t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function(e) {
			var n = t(e),
				i = n["offsetParent" in t.fn ? "offsetParent" : "parent"]();
			return i.length || (i = t("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
		},
		getPageHeight: function(e) {
			return t(e).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	t.fn.extend({
		mousewheel: function(t) {
			return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
		},
		unmousewheel: function(t) {
			return this.unbind("mousewheel", t)
		}
	})
}),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
	function e(e) {
		var a = e || window.event,
			s = l.call(arguments, 1),
			c = 0,
			u = 0,
			d = 0,
			p = 0,
			f = 0,
			m = 0;
		if(e = t.event.fix(a), e.type = "mousewheel", "detail" in a && (d = -1 * a.detail), "wheelDelta" in a && (d = a.wheelDelta), "wheelDeltaY" in a && (d = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * d, d = 0), c = 0 === d ? u : d, "deltaY" in a && (d = -1 * a.deltaY, c = d), "deltaX" in a && (u = a.deltaX, 0 === d && (c = -1 * u)), 0 !== d || 0 !== u) {
			if(1 === a.deltaMode) {
				var g = t.data(this, "mousewheel-line-height");
				c *= g, d *= g, u *= g
			} else if(2 === a.deltaMode) {
				var E = t.data(this, "mousewheel-page-height");
				c *= E, d *= E, u *= E
			}
			if(p = Math.max(Math.abs(d), Math.abs(u)), (!o || o > p) && (o = p, i(a, p) && (o /= 40)), i(a, p) && (c /= 40, u /= 40, d /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), h.settings.normalizeOffset && this.getBoundingClientRect) {
				var v = this.getBoundingClientRect();
				f = e.clientX - v.left, m = e.clientY - v.top
			}
			return e.deltaX = u, e.deltaY = d, e.deltaFactor = o, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, s.unshift(e, c, u, d), r && clearTimeout(r), r = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, s)
		}
	}

	function n() {
		o = null
	}

	function i(t, e) {
		return h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
	}
	var r, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		l = Array.prototype.slice;
	if(t.event.fixHooks)
		for(var c = a.length; c;) t.event.fixHooks[a[--c]] = t.event.mouseHooks;
	var h = t.event.special.mousewheel = {
		version: "3.1.12",
		setup: function() {
			if(this.addEventListener)
				for(var n = s.length; n;) this.addEventListener(s[--n], e, !1);
			else this.onmousewheel = e;
			t.data(this, "mousewheel-line-height", h.getLineHeight(this)), t.data(this, "mousewheel-page-height", h.getPageHeight(this))
		},
		teardown: function() {
			if(this.removeEventListener)
				for(var n = s.length; n;) this.removeEventListener(s[--n], e, !1);
			else this.onmousewheel = null;
			t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function(e) {
			var n = t(e),
				i = n["offsetParent" in t.fn ? "offsetParent" : "parent"]();
			return i.length || (i = t("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
		},
		getPageHeight: function(e) {
			return t(e).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	t.fn.extend({
		mousewheel: function(t) {
			return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
		},
		unmousewheel: function(t) {
			return this.unbind("mousewheel", t)
		}
	})
}),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
}(function(t) {
	! function(e) {
		var n = "function" == typeof define && define.amd,
			i = "undefined" != typeof module && module.exports,
			r = "https:" == document.location.protocol ? "https:" : "http:";
		n || (i ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + r + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
			function() {
				var e, n = "mCustomScrollbar",
					i = "mCS",
					r = ".mCustomScrollbar",
					o = {
						setTop: 0,
						setLeft: 0,
						axis: "y",
						scrollbarPosition: "inside",
						scrollInertia: 950,
						autoDraggerLength: !0,
						alwaysShowScrollbar: 0,
						snapOffset: 0,
						mouseWheel: {
							enable: !0,
							scrollAmount: "auto",
							axis: "y",
							deltaFactor: "auto",
							disableOver: ["select", "option", "keygen", "datalist", "textarea"]
						},
						scrollButtons: {
							scrollType: "stepless",
							scrollAmount: "auto"
						},
						keyboard: {
							enable: !0,
							scrollType: "stepless",
							scrollAmount: "auto"
						},
						contentTouchScroll: 25,
						documentTouchScroll: !0,
						advanced: {
							autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
							updateOnContentResize: !0,
							updateOnImageLoad: "auto",
							autoUpdateTimeout: 60
						},
						theme: "light",
						callbacks: {
							onTotalScrollOffset: 0,
							onTotalScrollBackOffset: 0,
							alwaysTriggerOffsets: !0
						}
					},
					a = 0,
					s = {},
					l = window.attachEvent && !window.addEventListener ? 1 : 0,
					c = !1,
					h = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
					u = {
						init: function(e) {
							var e = t.extend(!0, {}, o, e),
								n = d.call(this);
							if(e.live) {
								var l = e.liveSelector || this.selector || r,
									c = t(l);
								if("off" === e.live) return void f(l);
								s[l] = setTimeout(function() {
									c.mCustomScrollbar(e), "once" === e.live && c.length && f(l)
								}, 500)
							} else f(l);
							return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : m(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
								enable: !0,
								scrollAmount: "auto",
								axis: "y",
								preventDefault: !1,
								deltaFactor: "auto",
								normalizeDelta: !1,
								invert: !1
							}), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = g(e.scrollButtons.scrollType), p(e), t(n).each(function() {
								var n = t(this);
								if(!n.data(i)) {
									n.data(i, {
										idx: ++a,
										opt: e,
										scrollRatio: {
											y: null,
											x: null
										},
										overflowed: null,
										contentReset: {
											y: null,
											x: null
										},
										bindEvents: !1,
										tweenRunning: !1,
										sequential: {},
										langDir: n.css("direction"),
										cbOffsets: null,
										trigger: null,
										poll: {
											size: {
												o: 0,
												n: 0
											},
											img: {
												o: 0,
												n: 0
											},
											change: {
												o: 0,
												n: 0
											}
										}
									});
									var r = n.data(i),
										o = r.opt,
										s = n.data("mcs-axis"),
										l = n.data("mcs-scrollbar-position"),
										c = n.data("mcs-theme");
									s && (o.axis = s), l && (o.scrollbarPosition = l), c && (o.theme = c, p(o)), E.call(this), r && o.callbacks.onCreate && "function" == typeof o.callbacks.onCreate && o.callbacks.onCreate.call(this), t("#mCSB_" + r.idx + "_container img:not(." + h[2] + ")").addClass(h[2]), u.update.call(null, n)
								}
							})
						},
						update: function(e, n) {
							var r = e || d.call(this);
							return t(r).each(function() {
								var e = t(this);
								if(e.data(i)) {
									var r = e.data(i),
										o = r.opt,
										a = t("#mCSB_" + r.idx + "_container"),
										s = t("#mCSB_" + r.idx),
										l = [t("#mCSB_" + r.idx + "_dragger_vertical"), t("#mCSB_" + r.idx + "_dragger_horizontal")];
									if(!a.length) return;
									r.tweenRunning && Q(e), n && r && o.callbacks.onBeforeUpdate && "function" == typeof o.callbacks.onBeforeUpdate && o.callbacks.onBeforeUpdate.call(this), e.hasClass(h[3]) && e.removeClass(h[3]), e.hasClass(h[4]) && e.removeClass(h[4]), s.css("max-height", "none"), s.height() !== e.height() && s.css("max-height", e.height()), y.call(this), "y" === o.axis || o.advanced.autoExpandHorizontalScroll || a.css("width", v(a)), r.overflowed = b.call(this), M.call(this), o.autoDraggerLength && T.call(this), x.call(this), H.call(this);
									var c = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
									"x" !== o.axis && (r.overflowed[0] ? l[0].height() > l[0].parent().height() ? R.call(this) : (Y(e, c[0].toString(), {
										dir: "y",
										dur: 0,
										overwrite: "none"
									}), r.contentReset.y = null) : (R.call(this), "y" === o.axis ? C.call(this) : "yx" === o.axis && r.overflowed[1] && Y(e, c[1].toString(), {
										dir: "x",
										dur: 0,
										overwrite: "none"
									}))), "y" !== o.axis && (r.overflowed[1] ? l[1].width() > l[1].parent().width() ? R.call(this) : (Y(e, c[1].toString(), {
										dir: "x",
										dur: 0,
										overwrite: "none"
									}), r.contentReset.x = null) : (R.call(this), "x" === o.axis ? C.call(this) : "yx" === o.axis && r.overflowed[0] && Y(e, c[0].toString(), {
										dir: "y",
										dur: 0,
										overwrite: "none"
									}))), n && r && (2 === n && o.callbacks.onImageLoad && "function" == typeof o.callbacks.onImageLoad ? o.callbacks.onImageLoad.call(this) : 3 === n && o.callbacks.onSelectorChange && "function" == typeof o.callbacks.onSelectorChange ? o.callbacks.onSelectorChange.call(this) : o.callbacks.onUpdate && "function" == typeof o.callbacks.onUpdate && o.callbacks.onUpdate.call(this)), q.call(this)
								}
							})
						},
						scrollTo: function(e, n) {

							if(void 0 !== e && null != e) {
								var r = d.call(this);
								return t(r).each(function() {
									var r = t(this);
									if(r.data(i)) {
										var o = r.data(i),
											a = o.opt,
											s = {
												trigger: "external",
												scrollInertia: a.scrollInertia,
												scrollEasing: "mcsEaseInOut",
												moveDragger: !1,
												timeout: 60,
												callbacks: !0,
												onStart: !0,
												onUpdate: !0,
												onComplete: !0
											},
											l = t.extend(!0, {}, s, n),
											c = G.call(this, e),
											h = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
										c[0] = W.call(this, c[0], "y"), c[1] = W.call(this, c[1], "x"), l.moveDragger && (c[0] *= o.scrollRatio.y, c[1] *= o.scrollRatio.x), l.dur = rt() ? 0 : h, setTimeout(function() {
											null !== c[0] && void 0 !== c[0] && "x" !== a.axis && o.overflowed[0] && (l.dir = "y", l.overwrite = "all", Y(r, c[0].toString(), l)), null !== c[1] && void 0 !== c[1] && "y" !== a.axis && o.overflowed[1] && (l.dir = "x", l.overwrite = "none", Y(r, c[1].toString(), l))
										}, l.timeout)
									}
								})
							}
						},
						stop: function() {
							var e = d.call(this);
							return t(e).each(function() {
								var e = t(this);
								e.data(i) && Q(e)
							})
						},
						disable: function(e) {
							var n = d.call(this);
							return t(n).each(function() {
								var n = t(this);
								n.data(i) && (n.data(i), q.call(this, "remove"), C.call(this), e && R.call(this), M.call(this, !0), n.addClass(h[3]))
							})
						},
						destroy: function() {
							var e = d.call(this);
							return t(e).each(function() {
								var r = t(this);
								if(r.data(i)) {
									var o = r.data(i),
										a = o.opt,
										s = t("#mCSB_" + o.idx),
										l = t("#mCSB_" + o.idx + "_container"),
										c = t(".mCSB_" + o.idx + "_scrollbar");
									a.live && f(a.liveSelector || t(e).selector), q.call(this, "remove"), C.call(this), R.call(this), r.removeData(i), Z(this, "mcs"), c.remove(), l.find("img." + h[2]).removeClass(h[2]), s.replaceWith(l.contents()), r.removeClass(n + " _" + i + "_" + o.idx + " " + h[6] + " " + h[7] + " " + h[5] + " " + h[3]).addClass(h[4])
								}
							})
						}
					},
					d = function() {
						return "object" != typeof t(this) || t(this).length < 1 ? r : this
					},
					p = function(e) {
						var n = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
							i = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
							r = ["minimal", "minimal-dark"],
							o = ["minimal", "minimal-dark"],
							a = ["minimal", "minimal-dark"];
						e.autoDraggerLength = !(t.inArray(e.theme, n) > -1) && e.autoDraggerLength, e.autoExpandScrollbar = !(t.inArray(e.theme, i) > -1) && e.autoExpandScrollbar, e.scrollButtons.enable = !(t.inArray(e.theme, r) > -1) && e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, o) > -1 || e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, a) > -1 ? "outside" : e.scrollbarPosition
					},
					f = function(t) {
						s[t] && (clearTimeout(s[t]), Z(s, t))
					},
					m = function(t) {
						return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
					},
					g = function(t) {
						return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
					},
					E = function() {
						var e = t(this),

							r = e.data(i),
							o = r.opt,
							a = o.autoExpandScrollbar ? " " + h[1] + "_expand" : "",
							s = ["<div id='mCSB_" + r.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + r.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + h[12] + "'><div id='mCSB_" + r.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + r.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + r.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + h[12] + "'><div id='mCSB_" + r.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],

							l = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical",
							c = "yx" === o.axis ? s[0] + s[1] : "x" === o.axis ? s[1] : s[0],
							u = "yx" === o.axis ? "<div id='mCSB_" + r.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
							d = o.autoHideScrollbar ? " " + h[6] : "",
							p = "x" !== o.axis && "rtl" === r.langDir ? " " + h[7] : "";
						o.setWidth && e.css("width", o.setWidth), o.setHeight && e.css("height", o.setHeight), o.setLeft = "y" !== o.axis && "rtl" === r.langDir ? "989999px" : o.setLeft, e.addClass(n + " _" + i + "_" + r.idx + d + p).wrapInner("<div id='mCSB_" + r.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + l + "'><div id='mCSB_" + r.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + r.langDir + "' /></div>");
						var f = t("#mCSB_" + r.idx),
							m = t("#mCSB_" + r.idx + "_container");
						"y" === o.axis || o.advanced.autoExpandHorizontalScroll || m.css("width", v(m)), "outside" === o.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), f.addClass("mCSB_outside").after(c)) : (f.addClass("mCSB_inside").append(c), m.wrap(u)), _.call(this);
						var g = [t("#mCSB_" + r.idx + "_dragger_vertical"), t("#mCSB_" + r.idx + "_dragger_horizontal")];
						g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
					},
					v = function(e) {
						var n = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
								return t(this).outerWidth(!0)
							}).get())],
							i = e.parent().width();
						return n[0] > i ? n[0] : n[1] > i ? n[1] : "100%"
					},
					y = function() {
						var e = t(this),
							n = e.data(i),
							r = n.opt,
							o = t("#mCSB_" + n.idx + "_container");
						if(r.advanced.autoExpandHorizontalScroll && "y" !== r.axis) {
							o.css({
								width: "auto",
								"min-width": 0,
								"overflow-x": "scroll"
							});
							var a = Math.ceil(o[0].scrollWidth);
							3 === r.advanced.autoExpandHorizontalScroll || 2 !== r.advanced.autoExpandHorizontalScroll && a > o.parent().width() ? o.css({
								width: a,
								"min-width": "100%",
								"overflow-x": "inherit"
							}) : o.css({
								"overflow-x": "inherit",
								position: "absolute"
							}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
								width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
								"min-width": "100%",
								position: "relative"
							}).unwrap()
						}
					},
					_ = function() {
						var e = t(this),
							n = e.data(i),
							r = n.opt,
							o = t(".mCSB_" + n.idx + "_scrollbar:first"),
							a = nt(r.scrollButtons.tabindex) ? "tabindex='" + r.scrollButtons.tabindex + "'" : "",
							s = ["<a href='#' class='" + h[13] + "' " + a + " />", "<a href='#' class='" + h[14] + "' " + a + " />", "<a href='#' class='" + h[15] + "' " + a + " />", "<a href='#' class='" + h[16] + "' " + a + " />"],
							l = ["x" === r.axis ? s[2] : s[0], "x" === r.axis ? s[3] : s[1], s[2], s[3]];
						r.scrollButtons.enable && o.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
					},
					T = function() {
						var e = t(this),
							n = e.data(i),
							r = t("#mCSB_" + n.idx),
							o = t("#mCSB_" + n.idx + "_container"),
							a = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")],
							s = [r.height() / o.outerHeight(!1), r.width() / o.outerWidth(!1)],
							c = [parseInt(a[0].css("min-height")), Math.round(s[0] * a[0].parent().height()), parseInt(a[1].css("min-width")), Math.round(s[1] * a[1].parent().width())],
							h = l && c[1] < c[0] ? c[0] : c[1],
							u = l && c[3] < c[2] ? c[2] : c[3];
						a[0].css({
							height: h,
							"max-height": a[0].parent().height() - 10
						}).find(".mCSB_dragger_bar").css({
							"line-height": c[0] + "px"
						}), a[1].css({
							width: u,
							"max-width": a[1].parent().width() - 10
						})
					},
					x = function() {
						var e = t(this),
							n = e.data(i),
							r = t("#mCSB_" + n.idx),
							o = t("#mCSB_" + n.idx + "_container"),
							a = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")],
							s = [o.outerHeight(!1) - r.height(), o.outerWidth(!1) - r.width()],
							l = [s[0] / (a[0].parent().height() - a[0].height()), s[1] / (a[1].parent().width() - a[1].width())];
						n.scrollRatio = {
							y: l[0],
							x: l[1]
						}
					},
					w = function(t, e, n) {
						var i = n ? h[0] + "_expanded" : "",
							r = t.closest(".mCSB_scrollTools");
						"active" === e ? (t.toggleClass(h[0] + " " + i), r.toggleClass(h[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(h[0]), r.removeClass(h[1])) : (t.addClass(h[0]), r.addClass(h[1])))
					},
					b = function() {
						var e = t(this),
							n = e.data(i),
							r = t("#mCSB_" + n.idx),
							o = t("#mCSB_" + n.idx + "_container"),
							a = null == n.overflowed ? o.height() : o.outerHeight(!1),
							s = null == n.overflowed ? o.width() : o.outerWidth(!1),
							l = o[0].scrollHeight,
							c = o[0].scrollWidth;
						return l > a && (a = l), c > s && (s = c), [a > r.height(), s > r.width()]
					},
					R = function() {
						var e = t(this),
							n = e.data(i),
							r = n.opt,
							o = t("#mCSB_" + n.idx),
							a = t("#mCSB_" + n.idx + "_container"),
							s = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")];
						if(Q(e), ("x" !== r.axis && !n.overflowed[0] || "y" === r.axis && n.overflowed[0]) && (s[0].add(a).css("top", 0), Y(e, "_resetY")), "y" !== r.axis && !n.overflowed[1] || "x" === r.axis && n.overflowed[1]) {
							var l = dx = 0;
							"rtl" === n.langDir && (l = o.width() - a.outerWidth(!1), dx = Math.abs(l / n.scrollRatio.x)), a.css("left", l), s[1].css("left", dx), Y(e, "_resetX")
						}
					},
					H = function() {
						function e() {
							a = setTimeout(function() {
								t.event.special.mousewheel ? (clearTimeout(a), k.call(n[0])) : e()
							}, 100)
						}
						var n = t(this),
							r = n.data(i),
							o = r.opt;
						if(!r.bindEvents) {
							if(S.call(this), o.contentTouchScroll && L.call(this), P.call(this), o.mouseWheel.enable) {
								var a;
								e()
							}
							z.call(this), N.call(this), o.advanced.autoScrollOnFocus && I.call(this), o.scrollButtons.enable && U.call(this), o.keyboard.enable && V.call(this), r.bindEvents = !0
						}
					},
					C = function() {
						var e = t(this),
							n = e.data(i),
							r = n.opt,
							o = i + "_" + n.idx,
							a = ".mCSB_" + n.idx + "_scrollbar",
							s = t("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + a + " ." + h[12] + ",#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + a + ">a"),
							l = t("#mCSB_" + n.idx + "_container");
						r.advanced.releaseDraggableSelectors && s.add(t(r.advanced.releaseDraggableSelectors)), r.advanced.extraDraggableSelectors && s.add(t(r.advanced.extraDraggableSelectors)), n.bindEvents && (t(document).add(t(!B() || top.document)).unbind("." + o), s.each(function() {
							t(this).unbind("." + o)
						}), clearTimeout(e[0]._focusTimeout), Z(e[0], "_focusTimeout"), clearTimeout(n.sequential.step), Z(n.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), Z(l[0], "onCompleteTimeout"), n.bindEvents = !1)
					},
					M = function(e) {
						var n = t(this),
							r = n.data(i),
							o = r.opt,
							a = t("#mCSB_" + r.idx + "_container_wrapper"),
							s = a.length ? a : t("#mCSB_" + r.idx + "_container"),
							l = [t("#mCSB_" + r.idx + "_scrollbar_vertical"), t("#mCSB_" + r.idx + "_scrollbar_horizontal")],
							c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
						"x" !== o.axis && (r.overflowed[0] && !e ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), s.removeClass(h[8] + " " + h[10])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[0].css("display", "none"), s.removeClass(h[10])) : (l[0].css("display", "none"), s.addClass(h[10])), s.addClass(h[8]))), "y" !== o.axis && (r.overflowed[1] && !e ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), s.removeClass(h[9] + " " + h[11])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[1].css("display", "none"), s.removeClass(h[11])) : (l[1].css("display", "none"), s.addClass(h[11])), s.addClass(h[9]))), r.overflowed[0] || r.overflowed[1] ? n.removeClass(h[5]) : n.addClass(h[5])
					},
					A = function(e) {
						var n = e.type,
							i = e.target.ownerDocument !== document && null !== frameElement ? [t(frameElement).offset().top, t(frameElement).offset().left] : null,
							r = B() && e.target.ownerDocument !== top.document && null !== frameElement ? [t(e.view.frameElement).offset().top, t(e.view.frameElement).offset().left] : [0, 0];
						switch(n) {
							case "pointerdown":
							case "MSPointerDown":
							case "pointermove":
							case "MSPointerMove":
							case "pointerup":
							case "MSPointerUp":
								return i ? [e.originalEvent.pageY - i[0] + r[0], e.originalEvent.pageX - i[1] + r[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
							case "touchstart":
							case "touchmove":
							case "touchend":
								var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
									a = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
								return e.target.ownerDocument !== document ? [o.screenY, o.screenX, a > 1] : [o.pageY, o.pageX, a > 1];
							default:
								return i ? [e.pageY - i[0] + r[0], e.pageX - i[1] + r[1], !1] : [e.pageY, e.pageX, !1]
						}
					},
					S = function() {
						function e(t, e, i, r) {
							if(p[0].idleTimer = h.scrollInertia < 233 ? 250 : 0, n.attr("id") === d[1]) var o = "x",
								l = (n[0].offsetLeft - e + r) * s.scrollRatio.x;
							else var o = "y",
								l = (n[0].offsetTop - t + i) * s.scrollRatio.y;
							Y(a, l.toString(), {
								dir: o,
								drag: !0
							})
						}
						var n, r, o, a = t(this),
							s = a.data(i),
							h = s.opt,
							u = i + "_" + s.idx,
							d = ["mCSB_" + s.idx + "_dragger_vertical", "mCSB_" + s.idx + "_dragger_horizontal"],
							p = t("#mCSB_" + s.idx + "_container"),
							f = t("#" + d[0] + ",#" + d[1]),
							m = h.advanced.releaseDraggableSelectors ? f.add(t(h.advanced.releaseDraggableSelectors)) : f,
							g = h.advanced.extraDraggableSelectors ? t(!B() || top.document).add(t(h.advanced.extraDraggableSelectors)) : t(!B() || top.document);
						f.bind("contextmenu." + u, function(t) {
							t.preventDefault()
						}).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(e) {
							if(e.stopImmediatePropagation(), e.preventDefault(), tt(e)) {
								c = !0, l && (document.onselectstart = function() {
									return !1
								}), F.call(p, !1), Q(a), n = t(this);
								var i = n.offset(),
									s = A(e)[0] - i.top,
									u = A(e)[1] - i.left,
									d = n.height() + i.top,
									f = n.width() + i.left;
								d > s && s > 0 && f > u && u > 0 && (r = s, o = u), w(n, "active", h.autoExpandScrollbar)
							}
						}).bind("touchmove." + u, function(t) {
							t.stopImmediatePropagation(), t.preventDefault();
							var i = n.offset(),
								a = A(t)[0] - i.top,
								s = A(t)[1] - i.left;
							e(r, o, a, s)
						}), t(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(t) {
							if(n) {
								var i = n.offset(),
									a = A(t)[0] - i.top,
									s = A(t)[1] - i.left;
								if(r === a && o === s) return;
								e(r, o, a, s)
							}
						}).add(m).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() {
							n && (w(n, "active", h.autoExpandScrollbar), n = null), c = !1, l && (document.onselectstart = null), F.call(p, !0)
						})
					},
					L = function() {
						function n(t) {
							if(!et(t) || c || A(t)[2]) return void(e = 0);
							e = 1, x = 0, w = 0, h = 1, b.removeClass("mCS_touch_action");
							var n = S.offset();
							u = A(t)[0] - n.top, d = A(t)[1] - n.left, O = [A(t)[0], A(t)[1]]
						}

						function r(t) {
							if(et(t) && !c && !A(t)[2] && (H.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!w || x) && h)) {
								g = K();
								var e = M.offset(),
									n = A(t)[0] - e.top,
									i = A(t)[1] - e.left,
									r = "mcsLinearOut";
								if(P.push(n), k.push(i), O[2] = Math.abs(A(t)[0] - O[0]), O[3] = Math.abs(A(t)[1] - O[1]), R.overflowed[0]) var o = L[0].parent().height() - L[0].height(),
									a = u - n > 0 && n - u > -o * R.scrollRatio.y && (2 * O[3] < O[2] || "yx" === H.axis);
								if(R.overflowed[1]) var s = L[1].parent().width() - L[1].width(),
									p = d - i > 0 && i - d > -s * R.scrollRatio.x && (2 * O[2] < O[3] || "yx" === H.axis);
								a || p ? (N || t.preventDefault(), x = 1) : (w = 1, b.addClass("mCS_touch_action")), N && t.preventDefault(), _ = "yx" === H.axis ? [u - n, d - i] : "x" === H.axis ? [null, d - i] : [u - n, null], S[0].idleTimer = 250, R.overflowed[0] && l(_[0], D, r, "y", "all", !0), R.overflowed[1] && l(_[1], D, r, "x", F, !0)
							}
						}

						function o(t) {
							if(!et(t) || c || A(t)[2]) return void(e = 0);
							e = 1, t.stopImmediatePropagation(), Q(b), m = K();
							var n = M.offset();
							p = A(t)[0] - n.top, f = A(t)[1] - n.left, P = [], k = []
						}

						function a(t) {
							if(et(t) && !c && !A(t)[2]) {
								h = 0, t.stopImmediatePropagation(), x = 0, w = 0, E = K();
								var e = M.offset(),
									n = A(t)[0] - e.top,
									i = A(t)[1] - e.left;
								if(!(E - g > 30)) {
									y = 1e3 / (E - m);
									var r = "mcsEaseOut",
										o = 2.5 > y,
										a = o ? [P[P.length - 2], k[k.length - 2]] : [0, 0];
									v = o ? [n - a[0], i - a[1]] : [n - p, i - f];
									var u = [Math.abs(v[0]), Math.abs(v[1])];
									y = o ? [Math.abs(v[0] / 4), Math.abs(v[1] / 4)] : [y, y];
									var d = [Math.abs(S[0].offsetTop) - v[0] * s(u[0] / y[0], y[0]), Math.abs(S[0].offsetLeft) - v[1] * s(u[1] / y[1], y[1])];
									_ = "yx" === H.axis ? [d[0], d[1]] : "x" === H.axis ? [null, d[1]] : [d[0], null], T = [4 * u[0] + H.scrollInertia, 4 * u[1] + H.scrollInertia];
									var b = parseInt(H.contentTouchScroll) || 0;
									_[0] = u[0] > b ? _[0] : 0, _[1] = u[1] > b ? _[1] : 0, R.overflowed[0] && l(_[0], T[0], r, "y", F, !1), R.overflowed[1] && l(_[1], T[1], r, "x", F, !1)
								}
							}
						}

						function s(t, e) {
							var n = [1.5 * e, 2 * e, e / 1.5, e / 2];
							return t > 90 ? e > 4 ? n[0] : n[3] : t > 60 ? e > 3 ? n[3] : n[2] : t > 30 ? e > 8 ? n[1] : e > 6 ? n[0] : e > 4 ? e : n[2] : e > 8 ? e : n[3]
						}

						function l(t, e, n, i, r, o) {
							t && Y(b, t.toString(), {
								dur: e,
								scrollEasing: n,
								dir: i,
								overwrite: r,
								drag: o
							})
						}
						var h, u, d, p, f, m, g, E, v, y, _, T, x, w, b = t(this),
							R = b.data(i),
							H = R.opt,
							C = i + "_" + R.idx,
							M = t("#mCSB_" + R.idx),
							S = t("#mCSB_" + R.idx + "_container"),
							L = [t("#mCSB_" + R.idx + "_dragger_vertical"), t("#mCSB_" + R.idx + "_dragger_horizontal")],
							P = [],
							k = [],
							D = 0,
							F = "yx" === H.axis ? "none" : "all",
							O = [],
							z = S.find("iframe"),
							I = ["touchstart." + C + " pointerdown." + C + " MSPointerDown." + C, "touchmove." + C + " pointermove." + C + " MSPointerMove." + C, "touchend." + C + " pointerup." + C + " MSPointerUp." + C],
							N = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
						S.bind(I[0], function(t) {
							n(t)
						}).bind(I[1], function(t) {
							r(t)
						}), M.bind(I[0], function(t) {
							o(t)
						}).bind(I[2], function(t) {
							a(t)
						}), z.length && z.each(function() {
							t(this).bind("load", function() {
								B(this) && t(this.contentDocument || this.contentWindow.document).bind(I[0], function(t) {
									n(t), o(t)
								}).bind(I[1], function(t) {
									r(t)
								}).bind(I[2], function(t) {
									a(t)
								})
							})
						})
					},
					P = function() {
						function n() {
							return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
						}

						function r(t, e, n) {
							h.type = n && o ? "stepped" : "stepless", h.scrollAmount = 10, j(a, t, e, "mcsLinearOut", n ? 60 : null)
						}
						var o, a = t(this),
							s = a.data(i),
							l = s.opt,
							h = s.sequential,
							u = i + "_" + s.idx,
							d = t("#mCSB_" + s.idx + "_container"),
							p = d.parent();
						d.bind("mousedown." + u, function() {
							e || o || (o = 1, c = !0)
						}).add(document).bind("mousemove." + u, function(t) {
							if(!e && o && n()) {
								var i = d.offset(),
									a = A(t)[0] - i.top + d[0].offsetTop,
									c = A(t)[1] - i.left + d[0].offsetLeft;
								a > 0 && a < p.height() && c > 0 && c < p.width() ? h.step && r("off", null, "stepped") : ("x" !== l.axis && s.overflowed[0] && (0 > a ? r("on", 38) : a > p.height() && r("on", 40)), "y" !== l.axis && s.overflowed[1] && (0 > c ? r("on", 37) : c > p.width() && r("on", 39)))
							}
						}).bind("mouseup." + u + " dragend." + u, function() {
							e || (o && (o = 0, r("off", null)), c = !1)
						})
					},
					k = function() {
						function e(e, i) {
							if(Q(n), !O(n, e.target)) {
								var a = "auto" !== o.mouseWheel.deltaFactor ? parseInt(o.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
									h = o.scrollInertia;
								if("x" === o.axis || "x" === o.mouseWheel.axis) var u = "x",
									d = [Math.round(a * r.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
									p = "auto" !== o.mouseWheel.scrollAmount ? d[1] : d[0] >= s.width() ? .9 * s.width() : d[0],
									f = Math.abs(t("#mCSB_" + r.idx + "_container")[0].offsetLeft),
									m = c[1][0].offsetLeft,
									g = c[1].parent().width() - c[1].width(),
									E = "y" === o.mouseWheel.axis ? e.deltaY || i : e.deltaX;
								else var u = "y",
									d = [Math.round(a * r.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
									p = "auto" !== o.mouseWheel.scrollAmount ? d[1] : d[0] >= s.height() ? .9 * s.height() : d[0],
									f = Math.abs(t("#mCSB_" + r.idx + "_container")[0].offsetTop),
									m = c[0][0].offsetTop,
									g = c[0].parent().height() - c[0].height(),
									E = e.deltaY || i;
								"y" === u && !r.overflowed[0] || "x" === u && !r.overflowed[1] || ((o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (E = -E), o.mouseWheel.normalizeDelta && (E = 0 > E ? -1 : 1), (E > 0 && 0 !== m || 0 > E && m !== g || o.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 5 && !o.mouseWheel.normalizeDelta && (p = e.deltaFactor, h = 17), Y(n, (f - E * p).toString(), {
									dir: u,
									dur: h
								}))
							}
						}
						if(t(this).data(i)) {
							var n = t(this),
								r = n.data(i),
								o = r.opt,
								a = i + "_" + r.idx,
								s = t("#mCSB_" + r.idx),
								c = [t("#mCSB_" + r.idx + "_dragger_vertical"), t("#mCSB_" + r.idx + "_dragger_horizontal")],
								h = t("#mCSB_" + r.idx + "_container").find("iframe");
							h.length && h.each(function() {
								t(this).bind("load", function() {
									B(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + a, function(t, n) {
										e(t, n)
									})
								})
							}), s.bind("mousewheel." + a, function(t, n) {
								e(t, n)
							})
						}
					},
					D = new Object,
					B = function(e) {
						var n = !1,
							i = !1,
							r = null;
						if(void 0 === e ? i = "#empty" : void 0 !== t(e).attr("id") && (i = t(e).attr("id")), !1 !== i && void 0 !== D[i]) return D[i];
						if(e) {
							try {
								var o = e.contentDocument || e.contentWindow.document;
								r = o.body.innerHTML
							} catch(t) {}
							n = null !== r
						} else {
							try {
								var o = top.document;
								r = o.body.innerHTML
							} catch(t) {}
							n = null !== r
						}
						return !1 !== i && (D[i] = n), n
					},
					F = function(t) {
						var e = this.find("iframe");
						if(e.length) {
							var n = t ? "auto" : "none";
							e.css("pointer-events", n)
						}
					},
					O = function(e, n) {
						var r = n.nodeName.toLowerCase(),
							o = e.data(i).opt.mouseWheel.disableOver,
							a = ["select", "textarea"];
						return t.inArray(r, o) > -1 && !(t.inArray(r, a) > -1 && !t(n).is(":focus"))
					},
					z = function() {
						var e, n = t(this),
							r = n.data(i),
							o = i + "_" + r.idx,
							a = t("#mCSB_" + r.idx + "_container"),
							s = a.parent();
						t(".mCSB_" + r.idx + "_scrollbar ." + h[12]).bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o, function(n) {
							c = !0, t(n.target).hasClass("mCSB_dragger") || (e = 1)
						}).bind("touchend." + o + " pointerup." + o + " MSPointerUp." + o, function() {
							c = !1
						}).bind("click." + o, function(i) {
							if(e && (e = 0, t(i.target).hasClass(h[12]) || t(i.target).hasClass("mCSB_draggerRail"))) {
								Q(n);
								var o = t(this),
									l = o.find(".mCSB_dragger");
								if(o.parent(".mCSB_scrollTools_horizontal").length > 0) {
									if(!r.overflowed[1]) return;
									var c = "x",
										u = i.pageX > l.offset().left ? -1 : 1,
										d = Math.abs(a[0].offsetLeft) - u * (.9 * s.width())
								} else {
									if(!r.overflowed[0]) return;
									var c = "y",
										u = i.pageY > l.offset().top ? -1 : 1,
										d = Math.abs(a[0].offsetTop) - u * (.9 * s.height())
								}
								Y(n, d.toString(), {
									dir: c,
									scrollEasing: "mcsEaseInOut"
								})
							}
						})
					},
					I = function() {
						var e = t(this),
							n = e.data(i),
							r = n.opt,
							o = i + "_" + n.idx,
							a = t("#mCSB_" + n.idx + "_container"),
							s = a.parent();
						a.bind("focusin." + o, function() {
							var n = t(document.activeElement),
								i = a.find(".mCustomScrollBox").length;
							n.is(r.advanced.autoScrollOnFocus) && (Q(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = i ? 17 * i : 0, e[0]._focusTimeout = setTimeout(function() {
								var t = [it(n)[0], it(n)[1]],
									i = [a[0].offsetTop, a[0].offsetLeft],
									o = [i[0] + t[0] >= 0 && i[0] + t[0] < s.height() - n.outerHeight(!1), i[1] + t[1] >= 0 && i[0] + t[1] < s.width() - n.outerWidth(!1)],
									l = "yx" !== r.axis || o[0] || o[1] ? "all" : "none";
								"x" === r.axis || o[0] || Y(e, t[0].toString(), {
									dir: "y",
									scrollEasing: "mcsEaseInOut",
									overwrite: l,
									dur: 0
								}), "y" === r.axis || o[1] || Y(e, t[1].toString(), {
									dir: "x",
									scrollEasing: "mcsEaseInOut",
									overwrite: l,
									dur: 0
								})
							}, e[0]._focusTimer))
						})
					},
					N = function() {
						var e = t(this),
							n = e.data(i),
							r = i + "_" + n.idx,
							o = t("#mCSB_" + n.idx + "_container").parent();
						o.bind("scroll." + r, function() {
							0 === o.scrollTop() && 0 === o.scrollLeft() || t(".mCSB_" + n.idx + "_scrollbar").css("visibility", "hidden")
						})
					},
					U = function() {
						var e = t(this),
							n = e.data(i),
							r = n.opt,
							o = n.sequential,
							a = i + "_" + n.idx,
							s = ".mCSB_" + n.idx + "_scrollbar";
						t(s + ">a").bind("contextmenu." + a, function(t) {
							t.preventDefault()
						}).bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, function(i) {
							function a(t, n) {
								o.scrollAmount = r.scrollButtons.scrollAmount, j(e, t, n)
							}
							if(i.preventDefault(), tt(i)) {
								var s = t(this).attr("class");
								switch(o.type = r.scrollButtons.scrollType, i.type) {
									case "mousedown":
									case "touchstart":
									case "pointerdown":
									case "MSPointerDown":
										if("stepped" === o.type) return;
										c = !0, n.tweenRunning = !1, a("on", s);
										break;
									case "mouseup":
									case "touchend":
									case "pointerup":
									case "MSPointerUp":
									case "mouseout":
									case "pointerout":
									case "MSPointerOut":
										if("stepped" === o.type) return;
										c = !1, o.dir && a("off", s);
										break;
									case "click":
										if("stepped" !== o.type || n.tweenRunning) return;
										a("on", s)
								}
							}
						})
					},
					V = function() {
						function e(e) {
							function i(t, e) {
								a.type = o.keyboard.scrollType,
									a.scrollAmount = o.keyboard.scrollAmount, "stepped" === a.type && r.tweenRunning || j(n, t, e)
							}
							switch(e.type) {
								case "blur":
									r.tweenRunning && a.dir && i("off", null);
									break;
								case "keydown":
								case "keyup":
									var s = e.keyCode ? e.keyCode : e.which,
										l = "on";
									if("x" !== o.axis && (38 === s || 40 === s) || "y" !== o.axis && (37 === s || 39 === s)) {
										if((38 === s || 40 === s) && !r.overflowed[0] || (37 === s || 39 === s) && !r.overflowed[1]) return;
										"keyup" === e.type && (l = "off"), t(document.activeElement).is(u) || (e.preventDefault(), e.stopImmediatePropagation(), i(l, s))
									} else if(33 === s || 34 === s) {
										if((r.overflowed[0] || r.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
											Q(n);
											var d = 34 === s ? -1 : 1;
											if("x" === o.axis || "yx" === o.axis && r.overflowed[1] && !r.overflowed[0]) var p = "x",
												f = Math.abs(c[0].offsetLeft) - d * (.9 * h.width());
											else var p = "y",
												f = Math.abs(c[0].offsetTop) - d * (.9 * h.height());
											Y(n, f.toString(), {
												dir: p,
												scrollEasing: "mcsEaseInOut"
											})
										}
									} else if((35 === s || 36 === s) && !t(document.activeElement).is(u) && ((r.overflowed[0] || r.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
										if("x" === o.axis || "yx" === o.axis && r.overflowed[1] && !r.overflowed[0]) var p = "x",
											f = 35 === s ? Math.abs(h.width() - c.outerWidth(!1)) : 0;
										else var p = "y",
											f = 35 === s ? Math.abs(h.height() - c.outerHeight(!1)) : 0;
										Y(n, f.toString(), {
											dir: p,
											scrollEasing: "mcsEaseInOut"
										})
									}
							}
						}
						var n = t(this),
							r = n.data(i),
							o = r.opt,
							a = r.sequential,
							s = i + "_" + r.idx,
							l = t("#mCSB_" + r.idx),
							c = t("#mCSB_" + r.idx + "_container"),
							h = c.parent(),
							u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
							d = c.find("iframe"),
							p = ["blur." + s + " keydown." + s + " keyup." + s];
						d.length && d.each(function() {
							t(this).bind("load", function() {
								B(this) && t(this.contentDocument || this.contentWindow.document).bind(p[0], function(t) {
									e(t)
								})
							})
						}), l.attr("tabindex", "0").bind(p[0], function(t) {
							e(t)
						})
					},
					j = function(e, n, r, o, a) {
						function s(t) {
							c.snapAmount && (u.scrollAmount = c.snapAmount instanceof Array ? "x" === u.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
							var n = "stepped" !== u.type,
								i = a || (t ? n ? f / 1.5 : m : 1e3 / 60),
								r = t ? n ? 7.5 : 40 : 2.5,
								h = [Math.abs(d[0].offsetTop), Math.abs(d[0].offsetLeft)],
								p = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
								g = "x" === u.dir[0] ? h[1] + u.dir[1] * (p[1] * r) : h[0] + u.dir[1] * (p[0] * r),
								E = "x" === u.dir[0] ? h[1] + u.dir[1] * parseInt(u.scrollAmount) : h[0] + u.dir[1] * parseInt(u.scrollAmount),
								v = "auto" !== u.scrollAmount ? E : g,
								y = o || (t ? n ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
								_ = !!t;
							return t && 17 > i && (v = "x" === u.dir[0] ? h[1] : h[0]), Y(e, v.toString(), {
								dir: u.dir[0],
								scrollEasing: y,
								dur: i,
								onComplete: _
							}), t ? void(u.dir = !1) : (clearTimeout(u.step), void(u.step = setTimeout(function() {
								s()
							}, i)))
						}
						var l = e.data(i),
							c = l.opt,
							u = l.sequential,
							d = t("#mCSB_" + l.idx + "_container"),
							p = "stepped" === u.type,
							f = c.scrollInertia < 26 ? 26 : c.scrollInertia,
							m = c.scrollInertia < 1 ? 17 : c.scrollInertia;
						switch(n) {
							case "on":
								if(u.dir = [r === h[16] || r === h[15] || 39 === r || 37 === r ? "x" : "y", r === h[13] || r === h[15] || 38 === r || 37 === r ? -1 : 1], Q(e), nt(r) && "stepped" === u.type) return;
								s(p);
								break;
							case "off":
								(function() {
									clearTimeout(u.step), Z(u, "step"), Q(e)
								})(), (p || l.tweenRunning && u.dir) && s(!0)
						}
					},
					G = function(e) {
						var n = t(this).data(i).opt,
							r = [];
						return "function" == typeof e && (e = e()), e instanceof Array ? r = e.length > 1 ? [e[0], e[1]] : "x" === n.axis ? [null, e[0]] : [e[0], null] : (r[0] = e.y ? e.y : e.x || "x" === n.axis ? null : e, r[1] = e.x ? e.x : e.y || "y" === n.axis ? null : e), "function" == typeof r[0] && (r[0] = r[0]()), "function" == typeof r[1] && (r[1] = r[1]()), r
					},
					W = function(e, n) {
						if(null != e && void 0 !== e) {
							var r = t(this),
								o = r.data(i),
								a = o.opt,
								s = t("#mCSB_" + o.idx + "_container"),
								l = s.parent(),
								c = typeof e;
							n || (n = "x" === a.axis ? "x" : "y");
							var h = "x" === n ? s.outerWidth(!1) - l.width() : s.outerHeight(!1) - l.height(),
								d = "x" === n ? s[0].offsetLeft : s[0].offsetTop,
								p = "x" === n ? "left" : "top";
							switch(c) {
								case "function":
									return e();
								case "object":
									var f = e.jquery ? e : t(e);
									if(!f.length) return;
									return "x" === n ? it(f)[1] : it(f)[0];
								case "string":
								case "number":
									if(nt(e)) return Math.abs(e);
									if(-1 !== e.indexOf("%")) return Math.abs(h * parseInt(e) / 100);
									if(-1 !== e.indexOf("-=")) return Math.abs(d - parseInt(e.split("-=")[1]));
									if(-1 !== e.indexOf("+=")) {
										var m = d + parseInt(e.split("+=")[1]);
										return m >= 0 ? 0 : Math.abs(m)
									}
									if(-1 !== e.indexOf("px") && nt(e.split("px")[0])) return Math.abs(e.split("px")[0]);
									if("top" === e || "left" === e) return 0;
									if("bottom" === e) return Math.abs(l.height() - s.outerHeight(!1));
									if("right" === e) return Math.abs(l.width() - s.outerWidth(!1));
									if("first" === e || "last" === e) {
										var f = s.find(":" + e);
										return "x" === n ? it(f)[1] : it(f)[0]
									}
									return t(e).length ? "x" === n ? it(t(e))[1] : it(t(e))[0] : (s.css(p, e), void u.update.call(null, r[0]))
							}
						}
					},
					q = function(e) {
						function n() {
							return clearTimeout(d[0].autoUpdate), 0 === s.parents("html").length ? void(s = null) : void(d[0].autoUpdate = setTimeout(function() {
								return c.advanced.updateOnSelectorChange && (l.poll.change.n = o(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void a(3)) : c.advanced.updateOnContentResize && (l.poll.size.n = s[0].scrollHeight + s[0].scrollWidth + d[0].offsetHeight + s[0].offsetHeight + s[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void a(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (l.poll.img.n = d.find("img").length, l.poll.img.n === l.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && n()) : (l.poll.img.o = l.poll.img.n, void d.find("img").each(function() {
									r(this)
								}))
							}, c.advanced.autoUpdateTimeout))
						}

						function r(e) {
							function n() {
								this.onload = null, t(e).addClass(h[2]), a(2)
							}
							if(t(e).hasClass(h[2])) return void a();
							var i = new Image;
							i.onload = function(t, e) {
								return function() {
									return e.apply(t, arguments)
								}
							}(i, n), i.src = e.src
						}

						function o() {
							!0 === c.advanced.updateOnSelectorChange && (c.advanced.updateOnSelectorChange = "*");
							var t = 0,
								e = d.find(c.advanced.updateOnSelectorChange);
							return c.advanced.updateOnSelectorChange && e.length > 0 && e.each(function() {
								t += this.offsetHeight + this.offsetWidth
							}), t
						}

						function a(t) {
							clearTimeout(d[0].autoUpdate), u.update.call(null, s[0], t)
						}
						var s = t(this),
							l = s.data(i),
							c = l.opt,
							d = t("#mCSB_" + l.idx + "_container");
						return e ? (clearTimeout(d[0].autoUpdate), void Z(d[0], "autoUpdate")) : void n()
					},
					X = function(t, e, n) {
						return Math.round(t / e) * e - n
					},
					Q = function(e) {
						var n = e.data(i);
						t("#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper,#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal").each(function() {
							J.call(this)
						})
					},
					Y = function(e, n, r) {
						function o(t) {
							return l && c.callbacks[t] && "function" == typeof c.callbacks[t]
						}

						function a() {
							return [c.callbacks.alwaysTriggerOffsets || _ >= T[0] + b, c.callbacks.alwaysTriggerOffsets || -R >= _]
						}

						function s() {
							var t = [p[0].offsetTop, p[0].offsetLeft],
								n = [v[0].offsetTop, v[0].offsetLeft],
								i = [p.outerHeight(!1), p.outerWidth(!1)],
								o = [d.height(), d.width()];
							e[0].mcs = {
								content: p,
								top: t[0],
								left: t[1],
								draggerTop: n[0],
								draggerLeft: n[1],
								topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(i[0]) - o[0])),
								leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(i[1]) - o[1])),
								direction: r.dir
							}
						}
						var l = e.data(i),
							c = l.opt,
							h = {
								trigger: "internal",
								dir: "y",
								scrollEasing: "mcsEaseOut",
								drag: !1,
								dur: c.scrollInertia,
								overwrite: "all",
								callbacks: !0,
								onStart: !0,
								onUpdate: !0,
								onComplete: !0
							},
							r = t.extend(h, r),
							u = [r.dur, r.drag ? 0 : r.dur],
							d = t("#mCSB_" + l.idx),
							p = t("#mCSB_" + l.idx + "_container"),
							f = p.parent(),
							m = c.callbacks.onTotalScrollOffset ? G.call(e, c.callbacks.onTotalScrollOffset) : [0, 0],
							g = c.callbacks.onTotalScrollBackOffset ? G.call(e, c.callbacks.onTotalScrollBackOffset) : [0, 0];
						if(l.trigger = r.trigger, 0 === f.scrollTop() && 0 === f.scrollLeft() || (t(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), f.scrollTop(0).scrollLeft(0)), "_resetY" !== n || l.contentReset.y || (o("onOverflowYNone") && c.callbacks.onOverflowYNone.call(e[0]), l.contentReset.y = 1), "_resetX" !== n || l.contentReset.x || (o("onOverflowXNone") && c.callbacks.onOverflowXNone.call(e[0]), l.contentReset.x = 1), "_resetY" !== n && "_resetX" !== n) {
							if(!l.contentReset.y && e[0].mcs || !l.overflowed[0] || (o("onOverflowY") && c.callbacks.onOverflowY.call(e[0]), l.contentReset.x = null), !l.contentReset.x && e[0].mcs || !l.overflowed[1] || (o("onOverflowX") && c.callbacks.onOverflowX.call(e[0]), l.contentReset.x = null), c.snapAmount) {
								var E = c.snapAmount instanceof Array ? "x" === r.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
								n = X(n, E, c.snapOffset)
							}
							switch(r.dir) {
								case "x":
									var v = t("#mCSB_" + l.idx + "_dragger_horizontal"),
										y = "left",
										_ = p[0].offsetLeft,
										T = [d.width() - p.outerWidth(!1), v.parent().width() - v.width()],
										x = [n, 0 === n ? 0 : n / l.scrollRatio.x],
										b = m[1],
										R = g[1],
										H = b > 0 ? b / l.scrollRatio.x : 0,
										C = R > 0 ? R / l.scrollRatio.x : 0;
									break;
								case "y":
									var v = t("#mCSB_" + l.idx + "_dragger_vertical"),
										y = "top",
										_ = p[0].offsetTop,
										T = [d.height() - p.outerHeight(!1), v.parent().height() - v.height()],
										x = [n, 0 === n ? 0 : n / l.scrollRatio.y],
										b = m[0],
										R = g[0],
										H = b > 0 ? b / l.scrollRatio.y : 0,
										C = R > 0 ? R / l.scrollRatio.y : 0
							}
							x[1] < 0 || 0 === x[0] && 0 === x[1] ? x = [0, 0] : x[1] >= T[1] ? x = [T[0], T[1]] : x[0] = -x[0], e[0].mcs || (s(), o("onInit") && c.callbacks.onInit.call(e[0])), clearTimeout(p[0].onCompleteTimeout), $(v[0], y, Math.round(x[1]), u[1], r.scrollEasing), !l.tweenRunning && (0 === _ && x[0] >= 0 || _ === T[0] && x[0] <= T[0]) || $(p[0], y, Math.round(x[0]), u[0], r.scrollEasing, r.overwrite, {
								onStart: function() {
									r.callbacks && r.onStart && !l.tweenRunning && (o("onScrollStart") && (s(), c.callbacks.onScrollStart.call(e[0])), l.tweenRunning = !0, w(v), l.cbOffsets = a())
								},
								onUpdate: function() {
									r.callbacks && r.onUpdate && o("whileScrolling") && (s(), c.callbacks.whileScrolling.call(e[0]))
								},
								onComplete: function() {
									if(r.callbacks && r.onComplete) {
										"yx" === c.axis && clearTimeout(p[0].onCompleteTimeout);
										var t = p[0].idleTimer || 0;
										p[0].onCompleteTimeout = setTimeout(function() {
											o("onScroll") && (s(), c.callbacks.onScroll.call(e[0])), o("onTotalScroll") && x[1] >= T[1] - H && l.cbOffsets[0] && (s(), c.callbacks.onTotalScroll.call(e[0])), o("onTotalScrollBack") && x[1] <= C && l.cbOffsets[1] && (s(), c.callbacks.onTotalScrollBack.call(e[0])), l.tweenRunning = !1, p[0].idleTimer = 0, w(v, "hide")
										}, t)
									}
								}
							})
						}
					},
					$ = function(t, e, n, i, r, o, a) {

						function s() {
							y.stop || (g || d.call(), g = K() - m, l(), g >= y.time && (y.time = g > y.time ? g + h - (g - y.time) : g + h - 1, y.time < g + 1 && (y.time = g + 1)), y.time < i ? y.id = u(s) : f.call())
						}

						function l() {
							i > 0 ? (y.currVal = c(y.time, E, _, i, r), v[e] = Math.round(y.currVal) + "px") : v[e] = n + "px", p.call()
						}

						function c(t, e, n, i, r) {
							switch(r) {
								case "linear":
								case "mcsLinear":
									return n * t / i + e;
								case "mcsLinearOut":
									return t /= i, t--, n * Math.sqrt(1 - t * t) + e;
								case "easeInOutSmooth":
									return t /= i / 2, 1 > t ? n / 2 * t * t + e : (t--, -n / 2 * (t * (t - 2) - 1) + e);
								case "easeInOutStrong":
									return t /= i / 2, 1 > t ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, n / 2 * (2 - Math.pow(2, -10 * t)) + e);
								case "easeInOut":
								case "mcsEaseInOut":
									return t /= i / 2, 1 > t ? n / 2 * t * t * t + e : (t -= 2, n / 2 * (t * t * t + 2) + e);
								case "easeOutSmooth":
									return t /= i, t--, -n * (t * t * t * t - 1) + e;
								case "easeOutStrong":
									return n * (1 - Math.pow(2, -10 * t / i)) + e;
								case "easeOut":
								case "mcsEaseOut":
								default:
									var o = (t /= i) * t,
										a = o * t;
									return e + n * (.499999999999997 * a * o + -2.5 * o * o + 5.5 * a + -6.5 * o + 4 * t)
							}
						}
						t._mTween || (t._mTween = {
							top: {},
							left: {}
						});
						var h, u, a = a || {},
							d = a.onStart || function() {},
							p = a.onUpdate || function() {},
							f = a.onComplete || function() {},
							m = K(),
							g = 0,
							E = t.offsetTop,
							v = t.style,
							y = t._mTween[e];

						"left" === e && (E = t.offsetLeft);
						var _ = n - E;
						y.stop = 0, "none" !== o && function() {
								null != y.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(y.id) : clearTimeout(y.id), y.id = null)
							}(),
							function() {
								h = 1e3 / 60, y.time = g + h, u = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
									return l(), setTimeout(t, .01)
								}, y.id = u(s)
							}()
					},
					K = function() {
						return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : UDate ? UDate.getTime() : (UDate()).getTime()
					},
					J = function() {
						var t = this;
						t._mTween || (t._mTween = {
							top: {},
							left: {}
						});
						for(var e = ["top", "left"], n = 0; n < e.length; n++) {
							var i = e[n];
							t._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[i].id) : clearTimeout(t._mTween[i].id), t._mTween[i].id = null, t._mTween[i].stop = 1)
						}
					},
					Z = function(t, e) {
						try {
							delete t[e]
						} catch(n) {
							t[e] = null
						}
					},
					tt = function(t) {
						return !(t.which && 1 !== t.which)
					},
					et = function(t) {
						var e = t.originalEvent.pointerType;
						return !(e && "touch" !== e && 2 !== e)
					},
					nt = function(t) {
						return !isNaN(parseFloat(t)) && isFinite(t)
					},
					it = function(t) {

						var e = t.parents(".mCSB_container");
						return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
					},
					rt = function() {
						var t = function() {
							var t = ["webkit", "moz", "ms", "o"];
							if("hidden" in document) return "hidden";
							for(var e = 0; e < t.length; e++)
								if(t[e] + "Hidden" in document) return t[e] + "Hidden";
							return null
						}();
						return !!t && document[t]
					};
				t.fn[n] = function(e) {
					return u[e] ? u[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : u.init.apply(this, arguments)
				}, t[n] = function(e) {
					return u[e] ? u[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : u.init.apply(this, arguments)
				}, t[n].defaults = o, window[n] = !0, t(window).bind("load", function() {
					t(r)[n](), t.extend(t.expr[":"], {
						mcsInView: t.expr[":"].mcsInView || function(e) {
							var n, i, r = t(e),
								o = r.parents(".mCSB_container");
							if(o.length) return n = o.parent(), i = [o[0].offsetTop, o[0].offsetLeft], i[0] + it(r)[0] >= 0 && i[0] + it(r)[0] < n.height() - r.outerHeight(!1) && i[1] + it(r)[1] >= 0 && i[1] + it(r)[1] < n.width() - r.outerWidth(!1)
						},
						mcsInSight: t.expr[":"].mcsInSight || function(e, n, i) {
							var r, o, a, s, l = t(e),
								c = l.parents(".mCSB_container"),
								h = "exact" === i[3] ? [
									[1, 0],
									[1, 0]
								] : [
									[.9, .1],
									[.6, .4]
								];
							if(c.length) return r = [l.outerHeight(!1), l.outerWidth(!1)], a = [c[0].offsetTop + it(l)[0], c[0].offsetLeft + it(l)[1]], o = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], s = [r[0] < o[0] ? h[0] : h[1], r[1] < o[1] ? h[0] : h[1]], a[0] - o[0] * s[0][0] < 0 && a[0] + r[0] - o[0] * s[0][1] >= 0 && a[1] - o[1] * s[1][0] < 0 && a[1] + r[1] - o[1] * s[1][1] >= 0
						},
						mcsOverflow: t.expr[":"].mcsOverflow || function(e) {
							var n = t(e).data(i);
							if(n) return n.overflowed[0] || n.overflowed[1]
						}
					})
				})
			}()
	}()
}),
function(t) {
	t.extend(t.easing, {
		spincrementEasing: function(t, e, n, i, r) {
			return e === r ? n + i : i * (1 - Math.pow(2, -10 * e / r)) + n
		}
	}), t.fn.spincrement = function(e) {
		function n(t, e) {
			if(t = t.toFixed(e), e > 0 && "." !== r.decimalPoint && (t = t.replace(".", r.decimalPoint)), r.thousandSeparator)
				for(; o.test(t);) t = t.replace(o, "$1" + r.thousandSeparator + "$2");
			return t
		}
		var i = {
				from: 0,
				to: null,
				decimalPlaces: null,
				decimalPoint: ".",
				thousandSeparator: ",",
				duration: 1e3,
				leeway: 50,
				easing: "spincrementEasing",
				fade: !0,
				complete: null
			},
			r = t.extend(i, e),
			o = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
		return this.each(function() {
			var e = t(this),
				i = r.from;
			e.attr("data-from") && (i = parseFloat(e.attr("data-from")));
			var o;
			if(e.attr("data-to")) o = parseFloat(e.attr("data-to"));
			else if(null !== r.to) o = r.to;
			else {
				var a = t.inArray(r.thousandSeparator, ["\\", "^", "$", "*", "+", "?", "."]) > -1 ? "\\" + r.thousandSeparator : r.thousandSeparator,
					s = new RegExp(a, "g");
				o = parseFloat(e.text().replace(s, ""))
			}
			var l = r.duration;
			r.leeway && (l += Math.round(r.duration * (2 * Math.random() - 1) * r.leeway / 100));
			var c;
			if(e.attr("data-dp")) c = parseInt(e.attr("data-dp"), 10);
			else if(null !== r.decimalPlaces) c = r.decimalPlaces;
			else {
				var h = e.text().indexOf(r.decimalPoint);
				c = h > -1 ? e.text().length - (h + 1) : 0
			}
			e.css("counter", i), r.fade && e.css("opacity", 0), e.animate({
				counter: o,
				opacity: 1
			}, {
				easing: r.easing,
				duration: l,
				step: function(t) {
					e.html(n(t * o, c))
				},
				complete: function() {
					e.css("counter", null), e.html(n(o, c)), r.complete && r.complete(e)
				}
			})
		})
	}
}(jQuery),
function(t, e) {
	"function" == typeof define && define.amd ? define(["jquery"], function(t) {
		return e(t)
	}) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(0, function(t) {
	function e(t) {
		this.$container, this.constraints = null, this.__$tooltip, this.__init(t)
	}

	function n(e, n) {
		var i = !0;
		return t.each(e, function(t, r) {
			return void 0 === n[t] || e[t] !== n[t] ? (i = !1, !1) : void 0
		}), i
	}

	function i(e) {
		var n = e.attr("id"),
			i = n ? a.window.document.getElementById(n) : null;
		return i ? i === e[0] : t.contains(a.window.document.body, e[0])
	}
	var r = {
			animation: "fade",
			animationDuration: 350,
			content: null,
			contentAsHTML: !1,
			contentCloning: !1,
			debug: !0,
			delay: 300,
			delayTouch: [300, 500],
			functionInit: null,
			functionBefore: null,
			functionReady: null,
			functionAfter: null,
			functionFormat: null,
			IEmin: 6,
			interactive: !1,
			multiple: !1,
			parent: null,
			plugins: ["sideTip"],
			repositionOnScroll: !1,
			restoration: "none",
			selfDestruction: !0,
			theme: [],
			timer: 0,
			trackerInterval: 500,
			trackOrigin: !1,
			trackTooltip: !1,
			trigger: "hover",
			triggerClose: {
				click: !1,
				mouseleave: !1,
				originClick: !1,
				scroll: !1,
				tap: !1,
				touchleave: !1
			},
			triggerOpen: {
				click: !1,
				mouseenter: !1,
				tap: !1,
				touchstart: !1
			},
			updateAnimation: "rotate",
			zIndex: 9999999
		},
		o = "undefined" != typeof window ? window : null,
		a = {
			hasTouchCapability: !(!o || !("ontouchstart" in o || o.DocumentTouch && o.document instanceof o.DocumentTouch || o.navigator.maxTouchPoints)),
			hasTransitions: function() {
				if(!o) return !1;
				var t = o.document.body || o.document.documentElement,
					e = t.style,
					n = "transition",
					i = ["Moz", "Webkit", "Khtml", "O", "ms"];
				if("string" == typeof e[n]) return !0;
				n = n.charAt(0).toUpperCase() + n.substr(1);
				for(var r = 0; r < i.length; r++)
					if("string" == typeof e[i[r] + n]) return !0;
				return !1
			}(),
			IE: !1,
			semVer: "4.2.5",
			window: o
		},
		s = function() {
			this.__$emitterPrivate = t({}), this.__$emitterPublic = t({}), this.__instancesLatestArr = [], this.__plugins = {}, this._env = a
		};
	s.prototype = {
		__bridge: function(e, n, i) {
			if(!n[i]) {
				var o = function() {};
				o.prototype = e;
				var a = new o;
				a.__init && a.__init(n), t.each(e, function(t, e) {
					0 != t.indexOf("__") && (n[t] ? r.debug && console.log("The " + t + " method of the " + i + " plugin conflicts with another plugin or native methods") : (n[t] = function() {
						return a[t].apply(a, Array.prototype.slice.apply(arguments))
					}, n[t].bridged = a))
				}), n[i] = a
			}
			return this
		},
		__setWindow: function(t) {
			return a.window = t, this
		},
		_getRuler: function(t) {
			return new e(t)
		},
		_off: function() {
			return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_on: function() {
			return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_one: function() {
			return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_plugin: function(e) {
			var n = this;
			if("string" == typeof e) {
				var i = e,
					r = null;
				return i.indexOf(".") > 0 ? r = n.__plugins[i] : t.each(n.__plugins, function(t, e) {
					return e.name.substring(e.name.length - i.length - 1) == "." + i ? (r = e, !1) : void 0
				}), r
			}
			if(e.name.indexOf(".") < 0) throw new Error("Plugins must be namespaced");
			return n.__plugins[e.name] = e, e.core && n.__bridge(e.core, n, e.name), this
		},
		_trigger: function() {
			var t = Array.prototype.slice.apply(arguments);
			return "string" == typeof t[0] && (t[0] = {
				type: t[0]
			}), this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, t), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, t), this
		},
		instances: function(e) {
			var n = [];
			return t(e || ".tooltipstered").each(function() {
				var e = t(this),
					i = e.data("tooltipster-ns");
				i && t.each(i, function(t, i) {
					n.push(e.data(i))
				})
			}), n
		},
		instancesLatest: function() {
			return this.__instancesLatestArr
		},
		off: function() {
			return this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		on: function() {
			return this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		one: function() {
			return this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		origins: function(e) {
			return t((e ? e + " " : "") + ".tooltipstered").toArray()
		},
		setDefaults: function(e) {
			return t.extend(r, e), this
		},
		triggerHandler: function() {
			return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		}
	}, t.tooltipster = new s, t.Tooltipster = function(e, n) {
		this.__callbacks = {
			close: [],
			open: []
		}, this.__closingTime, this.__Content, this.__contentBcr, this.__destroyed = !1, this.__$emitterPrivate = t({}), this.__$emitterPublic = t({}), this.__enabled = !0, this.__garbageCollector, this.__Geometry, this.__lastPosition, this.__namespace = "tooltipster-" + Math.round(1e6 * Math.random()), this.__options, this.__$originParents, this.__pointerIsOverOrigin = !1, this.__previousThemes = [], this.__state = "closed", this.__timeouts = {
			close: [],
			open: null
		}, this.__touchEvents = [], this.__tracker = null, this._$origin, this._$tooltip, this.__init(e, n)
	}, t.Tooltipster.prototype = {
		__init: function(e, n) {
			var i = this;
			if(i._$origin = t(e), i.__options = t.extend(!0, {}, r, n), i.__optionsFormat(), !a.IE || a.IE >= i.__options.IEmin) {
				var o = null;
				if(void 0 === i._$origin.data("tooltipster-initialTitle") && (o = i._$origin.attr("title"), void 0 === o && (o = null), i._$origin.data("tooltipster-initialTitle", o)), null !== i.__options.content) i.__contentSet(i.__options.content);
				else {
					var s, l = i._$origin.attr("data-tooltip-content");
					l && (s = t(l)), s && s[0] ? i.__contentSet(s.first()) : i.__contentSet(o)
				}
				i._$origin.removeAttr("title").addClass("tooltipstered"), i.__prepareOrigin(), i.__prepareGC(), t.each(i.__options.plugins, function(t, e) {
					i._plug(e)
				}), a.hasTouchCapability && t(a.window.document.body).on("touchmove." + i.__namespace + "-triggerOpen", function(t) {
					i._touchRecordEvent(t)
				}), i._on("created", function() {
					i.__prepareTooltip()
				})._on("repositioned", function(t) {
					i.__lastPosition = t.position
				})
			} else i.__options.disabled = !0
		},
		__contentInsert: function() {
			var t = this,
				e = t._$tooltip.find(".tooltipster-content"),
				n = t.__Content,
				i = function(t) {
					n = t
				};
			return t._trigger({
				type: "format",
				content: t.__Content,
				format: i
			}), t.__options.functionFormat && (n = t.__options.functionFormat.call(t, t, {
				origin: t._$origin[0]
			}, t.__Content)), "string" != typeof n || t.__options.contentAsHTML ? e.empty().append(n) : e.text(n), t
		},
		__contentSet: function(e) {
			return e instanceof t && this.__options.contentCloning && (e = e.clone(!0)), this.__Content = e, this._trigger({
				type: "updated",
				content: e
			}), this
		},
		__destroyError: function() {
			throw new Error("This tooltip has been destroyed and cannot execute your method call.")
		},
		__geometry: function() {
			var e = this,
				n = e._$origin,
				i = e._$origin.is("area");
			if(i) {
				var r = e._$origin.parent().attr("name");
				n = t('img[usemap="#' + r + '"]')
			}
			var o = n[0].getBoundingClientRect(),
				s = t(a.window.document),
				l = t(a.window),
				c = n,
				h = {
					available: {
						document: null,
						window: null
					},
					document: {
						size: {
							height: s.height(),
							width: s.width()
						}
					},
					window: {
						scroll: {
							left: a.window.scrollX || a.window.document.documentElement.scrollLeft,
							top: a.window.scrollY || a.window.document.documentElement.scrollTop
						},
						size: {
							height: l.height(),
							width: l.width()
						}
					},
					origin: {
						fixedLineage: !1,
						offset: {},
						size: {
							height: o.bottom - o.top,
							width: o.right - o.left
						},
						usemapImage: i ? n[0] : null,
						windowOffset: {
							bottom: o.bottom,
							left: o.left,
							right: o.right,
							top: o.top
						}
					}
				};
			if(i) {
				var u = e._$origin.attr("shape"),
					d = e._$origin.attr("coords");
				if(d && (d = d.split(","), t.map(d, function(t, e) {
						d[e] = parseInt(t)
					})), "default" != u) switch(u) {
					case "circle":
						var p = d[0],
							f = d[1],
							m = d[2],
							g = f - m,
							E = p - m;
						h.origin.size.height = 2 * m, h.origin.size.width = h.origin.size.height, h.origin.windowOffset.left += E, h.origin.windowOffset.top += g;
						break;
					case "rect":
						var v = d[0],
							y = d[1],
							_ = d[2],
							T = d[3];
						h.origin.size.height = T - y, h.origin.size.width = _ - v, h.origin.windowOffset.left += v, h.origin.windowOffset.top += y;
						break;
					case "poly":
						for(var x = 0, w = 0, b = 0, R = 0, H = "even", C = 0; C < d.length; C++) {
							var M = d[C];
							"even" == H ? (M > b && (b = M, 0 === C && (x = b)), x > M && (x = M), H = "odd") : (M > R && (R = M, 1 == C && (w = R)), w > M && (w = M), H = "even")
						}
						h.origin.size.height = R - w, h.origin.size.width = b - x, h.origin.windowOffset.left += x, h.origin.windowOffset.top += w
				}
			}
			var A = function(t) {
				h.origin.size.height = t.height, h.origin.windowOffset.left = t.left, h.origin.windowOffset.top = t.top, h.origin.size.width = t.width
			};
			for(e._trigger({
					type: "geometry",
					edit: A,
					geometry: {
						height: h.origin.size.height,
						left: h.origin.windowOffset.left,
						top: h.origin.windowOffset.top,
						width: h.origin.size.width
					}
				}), h.origin.windowOffset.right = h.origin.windowOffset.left + h.origin.size.width, h.origin.windowOffset.bottom = h.origin.windowOffset.top + h.origin.size.height, h.origin.offset.left = h.origin.windowOffset.left + h.window.scroll.left, h.origin.offset.top = h.origin.windowOffset.top + h.window.scroll.top, h.origin.offset.bottom = h.origin.offset.top + h.origin.size.height, h.origin.offset.right = h.origin.offset.left + h.origin.size.width, h.available.document = {
					bottom: {
						height: h.document.size.height - h.origin.offset.bottom,
						width: h.document.size.width
					},
					left: {
						height: h.document.size.height,
						width: h.origin.offset.left
					},
					right: {
						height: h.document.size.height,
						width: h.document.size.width - h.origin.offset.right
					},
					top: {
						height: h.origin.offset.top,
						width: h.document.size.width
					}
				}, h.available.window = {
					bottom: {
						height: Math.max(h.window.size.height - Math.max(h.origin.windowOffset.bottom, 0), 0),
						width: h.window.size.width
					},
					left: {
						height: h.window.size.height,
						width: Math.max(h.origin.windowOffset.left, 0)
					},
					right: {
						height: h.window.size.height,
						width: Math.max(h.window.size.width - Math.max(h.origin.windowOffset.right, 0), 0)
					},
					top: {
						height: Math.max(h.origin.windowOffset.top, 0),
						width: h.window.size.width
					}
				};
				"html" != c[0].tagName.toLowerCase();) {
				if("fixed" == c.css("position")) {
					h.origin.fixedLineage = !0;
					break
				}
				c = c.parent()
			}
			return h
		},
		__optionsFormat: function() {
			return "number" == typeof this.__options.animationDuration && (this.__options.animationDuration = [this.__options.animationDuration, this.__options.animationDuration]), "number" == typeof this.__options.delay && (this.__options.delay = [this.__options.delay, this.__options.delay]), "number" == typeof this.__options.delayTouch && (this.__options.delayTouch = [this.__options.delayTouch, this.__options.delayTouch]), "string" == typeof this.__options.theme && (this.__options.theme = [this.__options.theme]), null === this.__options.parent ? this.__options.parent = t(a.window.document.body) : "string" == typeof this.__options.parent && (this.__options.parent = t(this.__options.parent)), "hover" == this.__options.trigger ? (this.__options.triggerOpen = {
				mouseenter: !0,
				touchstart: !0
			}, this.__options.triggerClose = {
				mouseleave: !0,
				originClick: !0,
				touchleave: !0
			}) : "click" == this.__options.trigger && (this.__options.triggerOpen = {
				click: !0,
				tap: !0
			}, this.__options.triggerClose = {
				click: !0,
				tap: !0
			}), this._trigger("options"), this
		},
		__prepareGC: function() {
			var e = this;
			return e.__options.selfDestruction ? e.__garbageCollector = setInterval(function() {
				var n = (UDate()).getTime();
				e.__touchEvents = t.grep(e.__touchEvents, function(t, e) {
					return n - t.time > 6e4
				}), i(e._$origin) || e.close(function() {
					e.destroy()
				})
			}, 2e4) : clearInterval(e.__garbageCollector), e
		},
		__prepareOrigin: function() {
			var t = this;
			if(t._$origin.off("." + t.__namespace + "-triggerOpen"), a.hasTouchCapability && t._$origin.on("touchstart." + t.__namespace + "-triggerOpen touchend." + t.__namespace + "-triggerOpen touchcancel." + t.__namespace + "-triggerOpen", function(e) {
					t._touchRecordEvent(e)
				}), t.__options.triggerOpen.click || t.__options.triggerOpen.tap && a.hasTouchCapability) {
				var e = "";
				t.__options.triggerOpen.click && (e += "click." + t.__namespace + "-triggerOpen "), t.__options.triggerOpen.tap && a.hasTouchCapability && (e += "touchend." + t.__namespace + "-triggerOpen"), t._$origin.on(e, function(e) {
					t._touchIsMeaningfulEvent(e) && t._open(e)
				})
			}
			if(t.__options.triggerOpen.mouseenter || t.__options.triggerOpen.touchstart && a.hasTouchCapability) {
				var e = "";
				t.__options.triggerOpen.mouseenter && (e += "mouseenter." + t.__namespace + "-triggerOpen "), t.__options.triggerOpen.touchstart && a.hasTouchCapability && (e += "touchstart." + t.__namespace + "-triggerOpen"), t._$origin.on(e, function(e) {
					!t._touchIsTouchEvent(e) && t._touchIsEmulatedEvent(e) || (t.__pointerIsOverOrigin = !0, t._openShortly(e))
				})
			}
			if(t.__options.triggerClose.mouseleave || t.__options.triggerClose.touchleave && a.hasTouchCapability) {
				var e = "";
				t.__options.triggerClose.mouseleave && (e += "mouseleave." + t.__namespace + "-triggerOpen "), t.__options.triggerClose.touchleave && a.hasTouchCapability && (e += "touchend." + t.__namespace + "-triggerOpen touchcancel." + t.__namespace + "-triggerOpen"), t._$origin.on(e, function(e) {
					t._touchIsMeaningfulEvent(e) && (t.__pointerIsOverOrigin = !1)
				})
			}
			return t
		},
		__prepareTooltip: function() {
			var e = this,
				n = e.__options.interactive ? "auto" : "";
			return e._$tooltip.attr("id", e.__namespace).css({
				"pointer-events": n,
				zIndex: e.__options.zIndex
			}), t.each(e.__previousThemes, function(t, n) {
				e._$tooltip.removeClass(n)
			}), t.each(e.__options.theme, function(t, n) {
				e._$tooltip.addClass(n)
			}), e.__previousThemes = t.merge([], e.__options.theme), e
		},
		__scrollHandler: function(e) {
			var n = this;
			if(n.__options.triggerClose.scroll) n._close(e);
			else if(i(n._$origin) && i(n._$tooltip)) {
				var r = null;
				if(e.target === a.window.document) n.__Geometry.origin.fixedLineage || n.__options.repositionOnScroll && n.reposition(e);
				else {
					r = n.__geometry();
					var o = !1;
					if("fixed" != n._$origin.css("position") && n.__$originParents.each(function(e, n) {
							var i = t(n),
								a = i.css("overflow-x"),
								s = i.css("overflow-y");
							if("visible" != a || "visible" != s) {
								var l = n.getBoundingClientRect();
								if("visible" != a && (r.origin.windowOffset.left < l.left || r.origin.windowOffset.right > l.right)) return o = !0, !1;
								if("visible" != s && (r.origin.windowOffset.top < l.top || r.origin.windowOffset.bottom > l.bottom)) return o = !0, !1
							}
							return "fixed" != i.css("position") && void 0
						}), o) n._$tooltip.css("visibility", "hidden");
					else if(n._$tooltip.css("visibility", "visible"), n.__options.repositionOnScroll) n.reposition(e);
					else {
						var s = r.origin.offset.left - n.__Geometry.origin.offset.left,
							l = r.origin.offset.top - n.__Geometry.origin.offset.top;
						n._$tooltip.css({
							left: n.__lastPosition.coord.left + s,
							top: n.__lastPosition.coord.top + l
						})
					}
				}
				n._trigger({
					type: "scroll",
					event: e,
					geo: r
				})
			}
			return n
		},
		__stateSet: function(t) {
			return this.__state = t, this._trigger({
				type: "state",
				state: t
			}), this
		},
		__timeoutsClear: function() {
			return clearTimeout(this.__timeouts.open), this.__timeouts.open = null, t.each(this.__timeouts.close, function(t, e) {
				clearTimeout(e)
			}), this.__timeouts.close = [], this
		},
		__trackerStart: function() {
			var t = this,
				e = t._$tooltip.find(".tooltipster-content");
			return t.__options.trackTooltip && (t.__contentBcr = e[0].getBoundingClientRect()), t.__tracker = setInterval(function() {
				if(i(t._$origin) && i(t._$tooltip)) {
					if(t.__options.trackOrigin) {
						var r = t.__geometry(),
							o = !1;
						n(r.origin.size, t.__Geometry.origin.size) && (t.__Geometry.origin.fixedLineage ? n(r.origin.windowOffset, t.__Geometry.origin.windowOffset) && (o = !0) : n(r.origin.offset, t.__Geometry.origin.offset) && (o = !0)), o || (t.__options.triggerClose.mouseleave ? t._close() : t.reposition())
					}
					if(t.__options.trackTooltip) {
						var a = e[0].getBoundingClientRect();
						a.height === t.__contentBcr.height && a.width === t.__contentBcr.width || (t.reposition(), t.__contentBcr = a)
					}
				} else t._close()
			}, t.__options.trackerInterval), t
		},
		_close: function(e, n, i) {
			var r = this,
				o = !0;
			if(r._trigger({
					type: "close",
					event: e,
					stop: function() {
						o = !1
					}
				}), o || i) {
				n && r.__callbacks.close.push(n), r.__callbacks.open = [], r.__timeoutsClear();
				var s = function() {
					t.each(r.__callbacks.close, function(t, n) {
						n.call(r, r, {
							event: e,
							origin: r._$origin[0]
						})
					}), r.__callbacks.close = []
				};
				if("closed" != r.__state) {
					var l = !0,
						c = UDate(),
						h = c.getTime(),
						u = h + r.__options.animationDuration[1];
					if("disappearing" == r.__state && u > r.__closingTime && r.__options.animationDuration[1] > 0 && (l = !1), l) {
						r.__closingTime = u, "disappearing" != r.__state && r.__stateSet("disappearing");
						var d = function() {
							clearInterval(r.__tracker), r._trigger({
								type: "closing",
								event: e
							}), r._$tooltip.off("." + r.__namespace + "-triggerClose").removeClass("tooltipster-dying"), t(a.window).off("." + r.__namespace + "-triggerClose"), r.__$originParents.each(function(e, n) {
								t(n).off("scroll." + r.__namespace + "-triggerClose")
							}), r.__$originParents = null, t(a.window.document.body).off("." + r.__namespace + "-triggerClose"), r._$origin.off("." + r.__namespace + "-triggerClose"), r._off("dismissable"), r.__stateSet("closed"), r._trigger({
								type: "after",
								event: e
							}), r.__options.functionAfter && r.__options.functionAfter.call(r, r, {
								event: e,
								origin: r._$origin[0]
							}), s()
						};
						a.hasTransitions ? (r._$tooltip.css({
							"-moz-animation-duration": r.__options.animationDuration[1] + "ms",
							"-ms-animation-duration": r.__options.animationDuration[1] + "ms",
							"-o-animation-duration": r.__options.animationDuration[1] + "ms",
							"-webkit-animation-duration": r.__options.animationDuration[1] + "ms",
							"animation-duration": r.__options.animationDuration[1] + "ms",
							"transition-duration": r.__options.animationDuration[1] + "ms"
						}), r._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"), r.__options.animationDuration[1] > 0 && r._$tooltip.delay(r.__options.animationDuration[1]), r._$tooltip.queue(d)) : r._$tooltip.stop().fadeOut(r.__options.animationDuration[1], d)
					}
				} else s()
			}
			return r
		},
		_off: function() {
			return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_on: function() {
			return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_one: function() {
			return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_open: function(e, n) {
			var r = this;
			if(!r.__destroying && i(r._$origin) && r.__enabled) {
				var o = !0;
				if("closed" == r.__state && (r._trigger({
						type: "before",
						event: e,
						stop: function() {
							o = !1
						}
					}), o && r.__options.functionBefore && (o = r.__options.functionBefore.call(r, r, {
						event: e,
						origin: r._$origin[0]
					}))), !1 !== o && null !== r.__Content) {
					n && r.__callbacks.open.push(n),
						r.__callbacks.close = [], r.__timeoutsClear();
					var s, l = function() {
						"stable" != r.__state && r.__stateSet("stable"), t.each(r.__callbacks.open, function(t, e) {
							e.call(r, r, {
								origin: r._$origin[0],
								tooltip: r._$tooltip[0]
							})
						}), r.__callbacks.open = []
					};
					if("closed" !== r.__state) s = 0, "disappearing" === r.__state ? (r.__stateSet("appearing"), a.hasTransitions ? (r._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"), r.__options.animationDuration[0] > 0 && r._$tooltip.delay(r.__options.animationDuration[0]), r._$tooltip.queue(l)) : r._$tooltip.stop().fadeIn(l)) : "stable" == r.__state && l();
					else {
						if(r.__stateSet("appearing"), s = r.__options.animationDuration[0], r.__contentInsert(), r.reposition(e, !0), a.hasTransitions ? (r._$tooltip.addClass("tooltipster-" + r.__options.animation).addClass("tooltipster-initial").css({
								"-moz-animation-duration": r.__options.animationDuration[0] + "ms",
								"-ms-animation-duration": r.__options.animationDuration[0] + "ms",
								"-o-animation-duration": r.__options.animationDuration[0] + "ms",
								"-webkit-animation-duration": r.__options.animationDuration[0] + "ms",
								"animation-duration": r.__options.animationDuration[0] + "ms",
								"transition-duration": r.__options.animationDuration[0] + "ms"
							}), setTimeout(function() {
								"closed" != r.__state && (r._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"), r.__options.animationDuration[0] > 0 && r._$tooltip.delay(r.__options.animationDuration[0]), r._$tooltip.queue(l))
							}, 0)) : r._$tooltip.css("display", "none").fadeIn(r.__options.animationDuration[0], l), r.__trackerStart(), t(a.window).on("resize." + r.__namespace + "-triggerClose", function(e) {
								var n = t(document.activeElement);
								(n.is("input") || n.is("textarea")) && t.contains(r._$tooltip[0], n[0]) || r.reposition(e)
							}).on("scroll." + r.__namespace + "-triggerClose", function(t) {
								r.__scrollHandler(t)
							}), r.__$originParents = r._$origin.parents(), r.__$originParents.each(function(e, n) {
								t(n).on("scroll." + r.__namespace + "-triggerClose", function(t) {
									r.__scrollHandler(t)
								})
							}), r.__options.triggerClose.mouseleave || r.__options.triggerClose.touchleave && a.hasTouchCapability) {
							r._on("dismissable", function(t) {
								t.dismissable ? t.delay ? (d = setTimeout(function() {
									r._close(t.event)
								}, t.delay), r.__timeouts.close.push(d)) : r._close(t) : clearTimeout(d)
							});
							var c = r._$origin,
								h = "",
								u = "",
								d = null;
							r.__options.interactive && (c = c.add(r._$tooltip)), r.__options.triggerClose.mouseleave && (h += "mouseenter." + r.__namespace + "-triggerClose ", u += "mouseleave." + r.__namespace + "-triggerClose "), r.__options.triggerClose.touchleave && a.hasTouchCapability && (h += "touchstart." + r.__namespace + "-triggerClose", u += "touchend." + r.__namespace + "-triggerClose touchcancel." + r.__namespace + "-triggerClose"), c.on(u, function(t) {
								if(r._touchIsTouchEvent(t) || !r._touchIsEmulatedEvent(t)) {
									var e = "mouseleave" == t.type ? r.__options.delay : r.__options.delayTouch;
									r._trigger({
										delay: e[1],
										dismissable: !0,
										event: t,
										type: "dismissable"
									})
								}
							}).on(h, function(t) {
								!r._touchIsTouchEvent(t) && r._touchIsEmulatedEvent(t) || r._trigger({
									dismissable: !1,
									event: t,
									type: "dismissable"
								})
							})
						}
						r.__options.triggerClose.originClick && r._$origin.on("click." + r.__namespace + "-triggerClose", function(t) {
							r._touchIsTouchEvent(t) || r._touchIsEmulatedEvent(t) || r._close(t)
						}), (r.__options.triggerClose.click || r.__options.triggerClose.tap && a.hasTouchCapability) && setTimeout(function() {
							if("closed" != r.__state) {
								var e = "",
									n = t(a.window.document.body);
								r.__options.triggerClose.click && (e += "click." + r.__namespace + "-triggerClose "), r.__options.triggerClose.tap && a.hasTouchCapability && (e += "touchend." + r.__namespace + "-triggerClose"), n.on(e, function(e) {
									r._touchIsMeaningfulEvent(e) && (r._touchRecordEvent(e), r.__options.interactive && t.contains(r._$tooltip[0], e.target) || r._close(e))
								}), r.__options.triggerClose.tap && a.hasTouchCapability && n.on("touchstart." + r.__namespace + "-triggerClose", function(t) {
									r._touchRecordEvent(t)
								})
							}
						}, 0), r._trigger("ready"), r.__options.functionReady && r.__options.functionReady.call(r, r, {
							origin: r._$origin[0],
							tooltip: r._$tooltip[0]
						})
					}
					if(r.__options.timer > 0) {
						var d = setTimeout(function() {
							r._close()
						}, r.__options.timer + s);
						r.__timeouts.close.push(d)
					}
				}
			}
			return r
		},
		_openShortly: function(t) {
			var e = this,
				n = !0;
			if("stable" != e.__state && "appearing" != e.__state && !e.__timeouts.open && (e._trigger({
					type: "start",
					event: t,
					stop: function() {
						n = !1
					}
				}), n)) {
				var i = 0 == t.type.indexOf("touch") ? e.__options.delayTouch : e.__options.delay;
				i[0] ? e.__timeouts.open = setTimeout(function() {
					e.__timeouts.open = null, e.__pointerIsOverOrigin && e._touchIsMeaningfulEvent(t) ? (e._trigger("startend"), e._open(t)) : e._trigger("startcancel")
				}, i[0]) : (e._trigger("startend"), e._open(t))
			}
			return e
		},
		_optionsExtract: function(e, n) {
			var i = this,
				r = t.extend(!0, {}, n),
				o = i.__options[e];
			return o || (o = {}, t.each(n, function(t, e) {
				var n = i.__options[t];
				void 0 !== n && (o[t] = n)
			})), t.each(r, function(e, n) {
				void 0 !== o[e] && ("object" != typeof n || n instanceof Array || null == n || "object" != typeof o[e] || o[e] instanceof Array || null == o[e] ? r[e] = o[e] : t.extend(r[e], o[e]))
			}), r
		},
		_plug: function(e) {
			var n = t.tooltipster._plugin(e);
			if(!n) throw new Error('The "' + e + '" plugin is not defined');
			return n.instance && t.tooltipster.__bridge(n.instance, this, n.name), this
		},
		_touchIsEmulatedEvent: function(t) {
			for(var e = !1, n = (UDate()).getTime(), i = this.__touchEvents.length - 1; i >= 0; i--) {
				var r = this.__touchEvents[i];
				if(!(n - r.time < 500)) break;
				r.target === t.target && (e = !0)
			}
			return e
		},
		_touchIsMeaningfulEvent: function(t) {
			return this._touchIsTouchEvent(t) && !this._touchSwiped(t.target) || !this._touchIsTouchEvent(t) && !this._touchIsEmulatedEvent(t)
		},
		_touchIsTouchEvent: function(t) {
			return 0 == t.type.indexOf("touch")
		},
		_touchRecordEvent: function(t) {
			return this._touchIsTouchEvent(t) && (t.time = (UDate()).getTime(), this.__touchEvents.push(t)), this
		},
		_touchSwiped: function(t) {
			for(var e = !1, n = this.__touchEvents.length - 1; n >= 0; n--) {
				var i = this.__touchEvents[n];
				if("touchmove" == i.type) {
					e = !0;
					break
				}
				if("touchstart" == i.type && t === i.target) break
			}
			return e
		},
		_trigger: function() {
			var e = Array.prototype.slice.apply(arguments);
			return "string" == typeof e[0] && (e[0] = {
				type: e[0]
			}), e[0].instance = this, e[0].origin = this._$origin ? this._$origin[0] : null, e[0].tooltip = this._$tooltip ? this._$tooltip[0] : null, this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, e), t.tooltipster._trigger.apply(t.tooltipster, e), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, e), this
		},
		_unplug: function(e) {
			var n = this;
			if(n[e]) {
				var i = t.tooltipster._plugin(e);
				i.instance && t.each(i.instance, function(t, i) {
					n[t] && n[t].bridged === n[e] && delete n[t]
				}), n[e].__destroy && n[e].__destroy(), delete n[e]
			}
			return n
		},
		close: function(t) {
			return this.__destroyed ? this.__destroyError() : this._close(null, t), this
		},
		content: function(t) {
			var e = this;
			if(void 0 === t) return e.__Content;
			if(e.__destroyed) e.__destroyError();
			else if(e.__contentSet(t), null !== e.__Content) {
				if("closed" !== e.__state && (e.__contentInsert(), e.reposition(), e.__options.updateAnimation))
					if(a.hasTransitions) {
						var n = e.__options.updateAnimation;
						e._$tooltip.addClass("tooltipster-update-" + n), setTimeout(function() {
							"closed" != e.__state && e._$tooltip.removeClass("tooltipster-update-" + n)
						}, 1e3)
					} else e._$tooltip.fadeTo(200, .5, function() {
						"closed" != e.__state && e._$tooltip.fadeTo(200, 1)
					})
			} else e._close();
			return e
		},
		destroy: function() {
			var e = this;
			if(e.__destroyed) e.__destroyError();
			else {
				"closed" != e.__state ? e.option("animationDuration", 0)._close(null, null, !0) : e.__timeoutsClear(), e._trigger("destroy"), e.__destroyed = !0, e._$origin.removeData(e.__namespace).off("." + e.__namespace + "-triggerOpen"), t(a.window.document.body).off("." + e.__namespace + "-triggerOpen");
				var n = e._$origin.data("tooltipster-ns");
				if(n)
					if(1 === n.length) {
						var i = null;
						"previous" == e.__options.restoration ? i = e._$origin.data("tooltipster-initialTitle") : "current" == e.__options.restoration && (i = "string" == typeof e.__Content ? e.__Content : t("<div></div>").append(e.__Content).html()), i && e._$origin.attr("title", i), e._$origin.removeClass("tooltipstered"), e._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
					} else n = t.grep(n, function(t, n) {
						return t !== e.__namespace
					}), e._$origin.data("tooltipster-ns", n);
				e._trigger("destroyed"), e._off(), e.off(), e.__Content = null, e.__$emitterPrivate = null, e.__$emitterPublic = null, e.__options.parent = null, e._$origin = null, e._$tooltip = null, t.tooltipster.__instancesLatestArr = t.grep(t.tooltipster.__instancesLatestArr, function(t, n) {
					return e !== t
				}), clearInterval(e.__garbageCollector)
			}
			return e
		},
		disable: function() {
			return this.__destroyed ? (this.__destroyError(), this) : (this._close(), this.__enabled = !1, this)
		},
		elementOrigin: function() {
			return this.__destroyed ? void this.__destroyError() : this._$origin[0]
		},
		elementTooltip: function() {
			return this._$tooltip ? this._$tooltip[0] : null
		},
		enable: function() {
			return this.__enabled = !0, this
		},
		hide: function(t) {
			return this.close(t)
		},
		instance: function() {
			return this
		},
		off: function() {
			return this.__destroyed || this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		on: function() {
			return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		one: function() {
			return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		open: function(t) {
			return this.__destroyed ? this.__destroyError() : this._open(null, t), this
		},
		option: function(e, n) {
			return void 0 === n ? this.__options[e] : (this.__destroyed ? this.__destroyError() : (this.__options[e] = n, this.__optionsFormat(), t.inArray(e, ["trigger", "triggerClose", "triggerOpen"]) >= 0 && this.__prepareOrigin(), "selfDestruction" === e && this.__prepareGC()), this)
		},
		reposition: function(t, e) {
			var n = this;
			return n.__destroyed ? n.__destroyError() : "closed" != n.__state && i(n._$origin) && (e || i(n._$tooltip)) && (e || n._$tooltip.detach(), n.__Geometry = n.__geometry(), n._trigger({
				type: "reposition",
				event: t,
				helper: {
					geo: n.__Geometry
				}
			})), n
		},
		show: function(t) {
			return this.open(t)
		},
		status: function() {
			return {
				destroyed: this.__destroyed,
				enabled: this.__enabled,
				open: "closed" !== this.__state,
				state: this.__state
			}
		},
		triggerHandler: function() {
			return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		}
	}, t.fn.tooltipster = function() {
		var e = Array.prototype.slice.apply(arguments),
			n = "You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";
		if(0 === this.length) return this;
		if("string" == typeof e[0]) {
			var i = "#*$~&";
			return this.each(function() {
				var r = t(this).data("tooltipster-ns"),
					o = r ? t(this).data(r[0]) : null;
				if(!o) throw new Error("You called Tooltipster's \"" + e[0] + '" method on an uninitialized element');
				if("function" != typeof o[e[0]]) throw new Error('Unknown method "' + e[0] + '"');
				this.length > 1 && "content" == e[0] && (e[1] instanceof t || "object" == typeof e[1] && null != e[1] && e[1].tagName) && !o.__options.contentCloning && o.__options.debug && console.log(n);
				var a = o[e[0]](e[1], e[2]);
				return a !== o || "instance" === e[0] ? (i = a, !1) : void 0
			}), "#*$~&" !== i ? i : this
		}
		t.tooltipster.__instancesLatestArr = [];
		var o = e[0] && void 0 !== e[0].multiple,
			a = o && e[0].multiple || !o && r.multiple,
			s = e[0] && void 0 !== e[0].content,
			l = s && e[0].content || !s && r.content,
			c = e[0] && void 0 !== e[0].contentCloning,
			h = c && e[0].contentCloning || !c && r.contentCloning,
			u = e[0] && void 0 !== e[0].debug,
			d = u && e[0].debug || !u && r.debug;
		return this.length > 1 && (l instanceof t || "object" == typeof l && null != l && l.tagName) && !h && d && console.log(n), this.each(function() {
			var n = !1,
				i = t(this),
				r = i.data("tooltipster-ns"),
				o = null;
			r ? a ? n = !0 : d && (console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."), console.log(this)) : n = !0, n && (o = new t.Tooltipster(this, e[0]), r || (r = []), r.push(o.__namespace), i.data("tooltipster-ns", r), i.data(o.__namespace, o), o.__options.functionInit && o.__options.functionInit.call(o, o, {
				origin: this
			}), o._trigger("init")), t.tooltipster.__instancesLatestArr.push(o)
		}), this
	}, e.prototype = {
		__init: function(e) {
			this.__$tooltip = e, this.__$tooltip.css({
				left: 0,
				overflow: "hidden",
				position: "absolute",
				top: 0
			}).find(".tooltipster-content").css("overflow", "auto"), this.$container = t('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(a.window.document.body)
		},
		__forceRedraw: function() {
			var t = this.__$tooltip.parent();
			this.__$tooltip.detach(), this.__$tooltip.appendTo(t)
		},
		constrain: function(t, e) {
			return this.constraints = {
				width: t,
				height: e
			}, this.__$tooltip.css({
				display: "block",
				height: "",
				overflow: "auto",
				width: t
			}), this
		},
		destroy: function() {
			this.__$tooltip.detach().find(".tooltipster-content").css({
				display: "",
				overflow: ""
			}), this.$container.remove()
		},
		free: function() {
			return this.constraints = null, this.__$tooltip.css({
				display: "",
				height: "",
				overflow: "visible",
				width: ""
			}), this
		},
		measure: function() {
			this.__forceRedraw();
			var t = this.__$tooltip[0].getBoundingClientRect(),
				e = {
					size: {
						height: t.height || t.bottom - t.top,
						width: t.width || t.right - t.left
					}
				};
			if(this.constraints) {
				var n = this.__$tooltip.find(".tooltipster-content"),
					i = this.__$tooltip.outerHeight(),
					r = n[0].getBoundingClientRect(),
					o = {
						height: i <= this.constraints.height,
						width: t.width <= this.constraints.width && r.width >= n[0].scrollWidth - 1
					};
				e.fits = o.height && o.width
			}
			return a.IE && a.IE <= 11 && e.size.width !== a.window.document.documentElement.clientWidth && (e.size.width = Math.ceil(e.size.width) + 1), e
		}
	};
	var l = navigator.userAgent.toLowerCase(); - 1 != l.indexOf("msie") ? a.IE = parseInt(l.split("msie")[1]) : -1 !== l.toLowerCase().indexOf("trident") && -1 !== l.indexOf(" rv:11") ? a.IE = 11 : -1 != l.toLowerCase().indexOf("edge/") && (a.IE = parseInt(l.toLowerCase().split("edge/")[1]));
	var c = "tooltipster.sideTip";
	return t.tooltipster._plugin({
		name: c,
		instance: {
			__defaults: function() {
				return {
					arrow: !0,
					distance: 6,
					functionPosition: null,
					maxWidth: null,
					minIntersection: 16,
					minWidth: 0,
					position: null,
					side: "top",
					viewportAware: !0
				}
			},
			__init: function(t) {
				var e = this;
				e.__instance = t, e.__namespace = "tooltipster-sideTip-" + Math.round(1e6 * Math.random()), e.__previousState = "closed", e.__options, e.__optionsFormat(), e.__instance._on("state." + e.__namespace, function(t) {
					"closed" == t.state ? e.__close() : "appearing" == t.state && "closed" == e.__previousState && e.__create(), e.__previousState = t.state
				}), e.__instance._on("options." + e.__namespace, function() {
					e.__optionsFormat()
				}), e.__instance._on("reposition." + e.__namespace, function(t) {
					e.__reposition(t.event, t.helper)
				})
			},
			__close: function() {
				this.__instance.content() instanceof t && this.__instance.content().detach(), this.__instance._$tooltip.remove(), this.__instance._$tooltip = null
			},
			__create: function() {
				var e = t('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');
				this.__options.arrow || e.find(".tooltipster-box").css("margin", 0).end().find(".tooltipster-arrow").hide(), this.__options.minWidth && e.css("min-width", this.__options.minWidth + "px"), this.__options.maxWidth && e.css("max-width", this.__options.maxWidth + "px"), this.__instance._$tooltip = e, this.__instance._trigger("created")
			},
			__destroy: function() {
				this.__instance._off("." + self.__namespace)
			},
			__optionsFormat: function() {
				var e = this;
				if(e.__options = e.__instance._optionsExtract(c, e.__defaults()), e.__options.position && (e.__options.side = e.__options.position), "object" != typeof e.__options.distance && (e.__options.distance = [e.__options.distance]), e.__options.distance.length < 4 && (void 0 === e.__options.distance[1] && (e.__options.distance[1] = e.__options.distance[0]), void 0 === e.__options.distance[2] && (e.__options.distance[2] = e.__options.distance[0]), void 0 === e.__options.distance[3] && (e.__options.distance[3] = e.__options.distance[1]), e.__options.distance = {
						top: e.__options.distance[0],
						right: e.__options.distance[1],
						bottom: e.__options.distance[2],
						left: e.__options.distance[3]
					}), "string" == typeof e.__options.side) {
					var n = {
						top: "bottom",
						right: "left",
						bottom: "top",
						left: "right"
					};
					e.__options.side = [e.__options.side, n[e.__options.side]], "left" == e.__options.side[0] || "right" == e.__options.side[0] ? e.__options.side.push("top", "bottom") : e.__options.side.push("right", "left")
				}
				6 === t.tooltipster._env.IE && !0 !== e.__options.arrow && (e.__options.arrow = !1)
			},
			__reposition: function(e, n) {
				var i, r = this,
					o = r.__targetFind(n),
					a = [];
				r.__instance._$tooltip.detach();
				var s = r.__instance._$tooltip.clone(),
					l = t.tooltipster._getRuler(s),
					c = !1,
					h = r.__instance.option("animation");
				switch(h && s.removeClass("tooltipster-" + h), t.each(["window", "document"], function(i, h) {
					var u = null;
					if(r.__instance._trigger({
							container: h,
							helper: n,
							satisfied: c,
							takeTest: function(t) {
								u = t
							},
							results: a,
							type: "positionTest"
						}), 1 == u || 0 != u && 0 == c && ("window" != h || r.__options.viewportAware))
						for(var i = 0; i < r.__options.side.length; i++) {
							var d = {
									horizontal: 0,
									vertical: 0
								},
								p = r.__options.side[i];
							"top" == p || "bottom" == p ? d.vertical = r.__options.distance[p] : d.horizontal = r.__options.distance[p], r.__sideChange(s, p), t.each(["natural", "constrained"], function(t, i) {
								if(u = null, r.__instance._trigger({
										container: h,
										event: e,
										helper: n,
										mode: i,
										results: a,
										satisfied: c,
										side: p,
										takeTest: function(t) {
											u = t
										},
										type: "positionTest"
									}), 1 == u || 0 != u && 0 == c) {
									var s = {
											container: h,
											distance: d,
											fits: null,
											mode: i,
											outerSize: null,
											side: p,
											size: null,
											target: o[p],
											whole: null
										},
										f = "natural" == i ? l.free() : l.constrain(n.geo.available[h][p].width - d.horizontal, n.geo.available[h][p].height - d.vertical),
										m = f.measure();
									if(s.size = m.size, s.outerSize = {
											height: m.size.height + d.vertical,
											width: m.size.width + d.horizontal
										}, "natural" == i ? n.geo.available[h][p].width >= s.outerSize.width && n.geo.available[h][p].height >= s.outerSize.height ? s.fits = !0 : s.fits = !1 : s.fits = m.fits, "window" == h && (s.fits ? s.whole = "top" == p || "bottom" == p ? n.geo.origin.windowOffset.right >= r.__options.minIntersection && n.geo.window.size.width - n.geo.origin.windowOffset.left >= r.__options.minIntersection : n.geo.origin.windowOffset.bottom >= r.__options.minIntersection && n.geo.window.size.height - n.geo.origin.windowOffset.top >= r.__options.minIntersection : s.whole = !1), a.push(s), s.whole) c = !0;
									else if("natural" == s.mode && (s.fits || s.size.width <= n.geo.available[h][p].width)) return !1
								}
							})
						}
				}), r.__instance._trigger({
					edit: function(t) {
						a = t
					},
					event: e,
					helper: n,
					results: a,
					type: "positionTested"
				}), a.sort(function(t, e) {
					if(t.whole && !e.whole) return -1;
					if(!t.whole && e.whole) return 1;
					if(t.whole && e.whole) {
						var n = r.__options.side.indexOf(t.side),
							i = r.__options.side.indexOf(e.side);
						return i > n ? -1 : n > i ? 1 : "natural" == t.mode ? -1 : 1
					}
					if(t.fits && !e.fits) return -1;
					if(!t.fits && e.fits) return 1;
					if(t.fits && e.fits) {
						var n = r.__options.side.indexOf(t.side),
							i = r.__options.side.indexOf(e.side);
						return i > n ? -1 : n > i ? 1 : "natural" == t.mode ? -1 : 1
					}
					return "document" == t.container && "bottom" == t.side && "natural" == t.mode ? -1 : 1
				}), i = a[0], i.coord = {}, i.side) {
					case "left":
					case "right":
						i.coord.top = Math.floor(i.target - i.size.height / 2);
						break;
					case "bottom":
					case "top":
						i.coord.left = Math.floor(i.target - i.size.width / 2)
				}
				switch(i.side) {
					case "left":
						i.coord.left = n.geo.origin.windowOffset.left - i.outerSize.width;
						break;
					case "right":
						i.coord.left = n.geo.origin.windowOffset.right + i.distance.horizontal;
						break;
					case "top":
						i.coord.top = n.geo.origin.windowOffset.top - i.outerSize.height;
						break;
					case "bottom":
						i.coord.top = n.geo.origin.windowOffset.bottom + i.distance.vertical
				}
				"window" == i.container ? "top" == i.side || "bottom" == i.side ? i.coord.left < 0 ? n.geo.origin.windowOffset.right - this.__options.minIntersection >= 0 ? i.coord.left = 0 : i.coord.left = n.geo.origin.windowOffset.right - this.__options.minIntersection - 1 : i.coord.left > n.geo.window.size.width - i.size.width && (n.geo.origin.windowOffset.left + this.__options.minIntersection <= n.geo.window.size.width ? i.coord.left = n.geo.window.size.width - i.size.width : i.coord.left = n.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - i.size.width) : i.coord.top < 0 ? n.geo.origin.windowOffset.bottom - this.__options.minIntersection >= 0 ? i.coord.top = 0 : i.coord.top = n.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1 : i.coord.top > n.geo.window.size.height - i.size.height && (n.geo.origin.windowOffset.top + this.__options.minIntersection <= n.geo.window.size.height ? i.coord.top = n.geo.window.size.height - i.size.height : i.coord.top = n.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - i.size.height) : (i.coord.left > n.geo.window.size.width - i.size.width && (i.coord.left = n.geo.window.size.width - i.size.width), i.coord.left < 0 && (i.coord.left = 0)), r.__sideChange(s, i.side), n.tooltipClone = s[0], n.tooltipParent = r.__instance.option("parent").parent[0], n.mode = i.mode, n.whole = i.whole, n.origin = r.__instance._$origin[0], n.tooltip = r.__instance._$tooltip[0], delete i.container, delete i.fits, delete i.mode, delete i.outerSize, delete i.whole, i.distance = i.distance.horizontal || i.distance.vertical;
				var u = t.extend(!0, {}, i);
				if(r.__instance._trigger({
						edit: function(t) {
							i = t
						},
						event: e,
						helper: n,
						position: u,
						type: "position"
					}), r.__options.functionPosition) {
					var d = r.__options.functionPosition.call(r, r.__instance, n, u);
					d && (i = d)
				}
				l.destroy();
				var p, f;
				"top" == i.side || "bottom" == i.side ? (p = {
					prop: "left",
					val: i.target - i.coord.left
				}, f = i.size.width - this.__options.minIntersection) : (p = {
					prop: "top",
					val: i.target - i.coord.top
				}, f = i.size.height - this.__options.minIntersection), p.val < this.__options.minIntersection ? p.val = this.__options.minIntersection : p.val > f && (p.val = f);
				var m;
				m = n.geo.origin.fixedLineage ? n.geo.origin.windowOffset : {
					left: n.geo.origin.windowOffset.left + n.geo.window.scroll.left,
					top: n.geo.origin.windowOffset.top + n.geo.window.scroll.top
				}, i.coord = {
					left: m.left + (i.coord.left - n.geo.origin.windowOffset.left),
					top: m.top + (i.coord.top - n.geo.origin.windowOffset.top)
				}, r.__sideChange(r.__instance._$tooltip, i.side), n.geo.origin.fixedLineage ? r.__instance._$tooltip.css("position", "fixed") : r.__instance._$tooltip.css("position", ""), r.__instance._$tooltip.css({
					left: i.coord.left,
					top: i.coord.top,
					height: i.size.height,
					width: i.size.width
				}).find(".tooltipster-arrow").css({
					left: "",
					top: ""
				}).css(p.prop, p.val), r.__instance._$tooltip.appendTo(r.__instance.option("parent")), r.__instance._trigger({
					type: "repositioned",
					event: e,
					position: i
				})
			},
			__sideChange: function(t, e) {
				t.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-" + e)
			},
			__targetFind: function(t) {
				var e = {},
					n = this.__instance._$origin[0].getClientRects();
				if(n.length > 1) {
					1 == this.__instance._$origin.css("opacity") && (this.__instance._$origin.css("opacity", .99), n = this.__instance._$origin[0].getClientRects(), this.__instance._$origin.css("opacity", 1))
				}
				if(n.length < 2) e.top = Math.floor(t.geo.origin.windowOffset.left + t.geo.origin.size.width / 2), e.bottom = e.top, e.left = Math.floor(t.geo.origin.windowOffset.top + t.geo.origin.size.height / 2), e.right = e.left;
				else {
					var i = n[0];
					e.top = Math.floor(i.left + (i.right - i.left) / 2), i = n.length > 2 ? n[Math.ceil(n.length / 2) - 1] : n[0], e.right = Math.floor(i.top + (i.bottom - i.top) / 2), i = n[n.length - 1], e.bottom = Math.floor(i.left + (i.right - i.left) / 2), i = n.length > 2 ? n[Math.ceil((n.length + 1) / 2) - 1] : n[n.length - 1], e.left = Math.floor(i.top + (i.bottom - i.top) / 2)
				}
				return e
			}
		}
	}), t
}),
function(t, e, n, i) {
	var r = t(e);
	t.fn.lazyload = function(i) {
		function o() {
			var e = 0;
			s.each(function() {
				var n = t(this);
				if(!l.skip_invisible || n.is(":visible"))
					if(t.abovethetop(this, l) || t.leftofbegin(this, l));
					else if(t.belowthefold(this, l) || t.rightoffold(this, l)) {
					if(++e > l.failure_limit) return !1
				} else n.trigger("appear"), e = 0
			})
		}
		var a, s = this,
			l = {
				threshold: 0,
				failure_limit: 0,
				event: "scroll",
				effect: "show",
				container: e,
				data_attribute: "original",
				skip_invisible: !1,
				appear: null,
				load: null,
				placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
			};
		return i && (void 0 !== i.failurelimit && (i.failure_limit = i.failurelimit, delete i.failurelimit), void 0 !== i.effectspeed && (i.effect_speed = i.effectspeed, delete i.effectspeed), t.extend(l, i)), a = void 0 === l.container || l.container === e ? r : t(l.container), 0 === l.event.indexOf("scroll") && a.bind(l.event, function() {
			return o()
		}), this.each(function() {
			var e = this,
				n = t(e);
			e.loaded = !1, void 0 !== n.attr("src") && !1 !== n.attr("src") || n.is("img") && n.attr("src", l.placeholder), n.one("appear", function() {
				if(!this.loaded) {
					if(l.appear) {
						var i = s.length;
						l.appear.call(e, i, l)
					}
					t("<img />").bind("load", function() {
						var i = n.attr("data-" + l.data_attribute);
						n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[l.effect](l.effect_speed), e.loaded = !0;
						var r = t.grep(s, function(t) {
							return !t.loaded
						});
						if(s = t(r), l.load) {
							var o = s.length;
							l.load.call(e, o, l)
						}
					}).attr("src", n.attr("data-" + l.data_attribute))
				}
			}), 0 !== l.event.indexOf("scroll") && n.bind(l.event, function() {
				e.loaded || n.trigger("appear")
			})
		}), r.bind("resize", function() {
			o()
		}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function(e) {
			e.originalEvent && e.originalEvent.persisted && s.each(function() {
				t(this).trigger("appear")
			})
		}), t(n).ready(function() {
			o()
		}), this
	}, t.belowthefold = function(n, i) {
		return(void 0 === i.container || i.container === e ? (e.innerHeight ? e.innerHeight : r.height()) + r.scrollTop() : t(i.container).offset().top + t(i.container).height()) <= t(n).offset().top - i.threshold
	}, t.rightoffold = function(n, i) {
		return(void 0 === i.container || i.container === e ? r.width() + r.scrollLeft() : t(i.container).offset().left + t(i.container).width()) <= t(n).offset().left - i.threshold
	}, t.abovethetop = function(n, i) {
		return(void 0 === i.container || i.container === e ? r.scrollTop() : t(i.container).offset().top) >= t(n).offset().top + i.threshold + t(n).height()
	}, t.leftofbegin = function(n, i) {
		return(void 0 === i.container || i.container === e ? r.scrollLeft() : t(i.container).offset().left) >= t(n).offset().left + i.threshold + t(n).width()
	}, t.inviewport = function(e, n) {
		return !(t.rightoffold(e, n) || t.leftofbegin(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
	}, t.extend(t.expr[":"], {
		"below-the-fold": function(e) {
			return t.belowthefold(e, {
				threshold: 0
			})
		},
		"above-the-top": function(e) {
			return !t.belowthefold(e, {
				threshold: 0
			})
		},
		"right-of-screen": function(e) {
			return t.rightoffold(e, {
				threshold: 0
			})
		},
		"left-of-screen": function(e) {
			return !t.rightoffold(e, {
				threshold: 0
			})
		},
		"in-viewport": function(e) {
			return t.inviewport(e, {
				threshold: 0
			})
		},
		"above-the-fold": function(e) {
			return !t.belowthefold(e, {
				threshold: 0
			})
		},
		"right-of-fold": function(e) {
			return t.rightoffold(e, {
				threshold: 0
			})
		},
		"left-of-fold": function(e) {
			return !t.rightoffold(e, {
				threshold: 0
			})
		}
	})
}(jQuery, window, document),
function(t) {
	window.anchor = {
		settings: {
			transitionDuration: 2e3,
			transitionTimingFunction: "swing",
			customOffset: 0,
			labels: {
				error: "Couldn't find any section"
			}
		},
		init: function(e) {
			return t(this).data("settings", t.extend(anchor.settings, e)), this.each(function() {
				var e = t(this);
				e.unbind("click").click(function(t) {
					t.preventDefault(), anchor.jumpTo(anchor.getTopOffsetPosition(e), e.data("settings"))
				})
			})
		},
		getTopOffsetPosition: function(e) {
			var n = e.attr("href"),
				i = t(t(n).get(0)),
				r = t(document).height(),
				o = t(window).height();
			if(!i || i.length < 1) throw new ReferenceError(anchor.settings.labels.error);
			return i.offset().top + o > r ? r - o : i.offset().top - anchor.settings.customOffset
		},
		jumpTo: function(e, n) {
			var i = t("html, body");
			i.animate({
				scrollTop: e
			}, n.transitionDuration, n.transitionTimingFunction), i.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(t) {
				(t.which > 0 || "mousedown" === t.type || "mousewheel" === t.type) && i.stop().unbind("scroll mousedown DOMMouseScroll mousewheel keyup")
			})
		}
	}, t.fn.anchor = function(e) {
		return anchor[e] ? anchor[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? t.error("Method " + e + " does not exist on jQuery.anchor") : anchor.init.apply(this, arguments)
	}
}(jQuery);
$(function() {
	
	var t = ["s_1", "Video", "Unit", "Solutions", "About", "Roadmap", "Districts", "Team", "Partners", "Advisors"];
	if($(window).width() >= 768 ? function() {
			$("#fullpage").fullpage({
				easingcss3: "cubic-bezier(0.9, 0, 0.575, 1)",
				scrollingSpeed: 1e3,
				menu: "#menu",
				css3: !0,
				loopBottom: !0,
				loopTop: !0,
				navigation: true,
				anchors: t,
				onLeave: function(e, n, i) {
					//console.log(n)
					1 == n ? ($(".footer__ounty, .footer__soc").addClass("no-visible"), $("#header-contribute-btn").hide(), $("#header-auth-btn").show()) :
						($(".footer__ounty, .footer__soc").removeClass("no-visible"), $("#header-contribute-btn").show(), $("#header-auth-btn").hide()), $(".nav li.active").removeClass("active"), $(".nav li.prev").removeClass("prev"), $(".nav a[href='#" + t[n - 1] + "']").closest("li").addClass("active").prevAll().addClass("prev");
					10 == n ? setTimeout(function() {
						$('.radio span').addClass('animated  zoomIn')
					}, 1000) : null;
					4 == n ? setTimeout(function() {
						$('.technology').addClass('animated fadeInRight');
					}, 800) : null;
				},
				afterLoad: function(t, e) {
					//console.log(e+'hh')
					1 == e ? ($(".footer__ounty, .footer__soc").addClass("no-visible"), $("#header-contribute-btn").hide(), $("#header-auth-btn").show()) :
						($(".footer__ounty, .footer__soc").removeClass("no-visible"), $("#header-contribute-btn").show(), $("#header-auth-btn").hide()), 8 == e && $(".s_7__discount__progress_val span").spincrement({
							duration: 1500,
							easing: "linear"
						})

				}
			})
		}() : $(".section").each(function(e) {
			//console.log(e)
			$(this).attr("id", t[e])
		}), $(window).width() < 768) {
		$(".s_7__discount__progress_val span").each(function() {
			$(this).text($(this).attr("data-to"))
		});
		var e = $(".s_2").offset().top;
		window.pageYOffset >= e && $(".header-mob").addClass("active"), $(window).scroll(function() {
			var t = $(".header-mob");
			window.pageYOffset >= e ? t.addClass("active") : window.pageYOffset <= e && t.removeClass("active")
		}), $("img.lazy").each(function() {
			$(this).attr("src", $(this).attr("data-src"))
		})
	}
	$("img.lazy").lazyload(), $(".s_subsidiya .s_title span").each(function() {
			$(this).text($(this).attr("data-to"))
		}),
		$("#startTime .s_1__days, #startTime-2 .s_1__days").countdown(top.SSS).on("update.countdown", function(t) {
			var e = "";
			e = "%d " + e, $(this).html(t.strftime(e))
		}).on("finish.countdown", function(t) {
			$(this).html(t.strftime("00"))
		}),
		$("#startTime .s_1__houers, #startTime-2 .s_1__houers").countdown(top.SSS).on("update.countdown", function(t) {
			$(this).html(t.strftime("%H"));
			//console.log(t)
		}).on("finish.countdown", function(t) {
			$(this).html(t.strftime("00"))
		}),
		$("#startTime .s_1__minutes, #startTime-2 .s_1__minutes").countdown(top.SSS).on("update.countdown", function(t) {
			$(this).html(t.strftime("%M"))
		}).on("finish.countdown", function(t) {
			$(this).html(t.strftime("00"))
		}),
		$("#startTime .s_1__seconds, #startTime-2 .s_1__seconds").countdown(top.SSS).on("update.countdown", function(t) {
			$(this).html(t.strftime("%S"))
		}).on("finish.countdown", function(t) {
			$(this).html(t.strftime("00"))
		}),
		$(".s_2__descr__text").mCustomScrollbar({
			axis: "y",
			scrollbarPosition: "outside"
		}), $(".s_2 .s_title a").on("click", function(t) {
			$(".s_2 .s_title a.active").removeClass("active"), $(this).addClass("active"), $(".s_2__tab").hide(), $($(this).attr("href")).fadeIn(750), t.preventDefault()
		}), $(".s_2__thumb_video a").on("click", function(t) {
			$(".s_2__current_video iframe").attr("src", $(this).attr("href")), t.preventDefault()
		});
	var n = $(".owl-carousel");
	n.owlCarousel({
			margin: 24,
			navText: ['<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12px" height="16px"><path fill-rule="evenodd" class="fillPart" fill="rgb(240,131,58)" d="M9.014,0.000 L0.000,8.000 L9.014,16.000 L12.000,13.387 L5.931,8.000 L12.000,2.614 L9.014,0.000 Z"/></svg>', '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12px" height="16px"><path fill-rule="evenodd" class="fillPart" fill="rgb(240,131,58)" d="M2.986,16.000 L12.000,8.000 L2.986,0.000 L0.000,2.613 L6.069,8.000 L0.000,13.386 L2.986,16.000 Z"/></svg>'],
			loop: !0,
			nav: !0,
			//autoplay: true,自动播放
			//autoplayTimeout: 2000,
			//autoplayHoverPause: true,	
			lazyLoad: false,
			center: true,
			grabClass: 'owl-grab',
			responsive: {
				1200: {
					items: 3
				},
				768: {
					items: 3

				},
				0: {
					items: 1
				}
			}
		}),
		n.on("translated.owl.carousel", function(t) {
			$(".district-descr.active").removeClass("active"),
				$($(".s_3 .owl-item.active .s_3__slide").attr("data-descr")).addClass("active")
		}),
		$(".s_3__slide").on("mouseenter", function() {
			$(".district-descr.active").removeClass("active"), $($(this).attr("data-descr")).addClass("active")
		}),
		$(".s_4__nav li a").on("click", function(t) {
			$(this).closest(".s_4__wrap").find(".s_4__nav li.active").removeClass("active"), $(this).closest("li").addClass("active"), $(this).closest(".s_4__wrap").find(".s_4__tab").hide(), $($(this).attr("href")).fadeIn(750), t.preventDefault()
		}),
		$(".s_4__tab__title").on("click", function(t) {
			$(this).closest(".s_4__wrap").find(".s_4__tab.active").removeClass("active"), $($(this).attr("href")).addClass("active"), t.preventDefault()
		}),
		$(".s_4__tab").mCustomScrollbar({
			axis: "y"
		}),
		$(".s_5__timeline__year").on("click", function(t) {
			$(".s_5__timeline__year.active").removeClass("active"), $(this).addClass("active"), $(".s_5__tab").hide(), $($(this).attr("href")).fadeIn(), t.preventDefault()
		}),

		$(".s_8__staff_wrap").mCustomScrollbar({
			axis: "x",
			setLeft: 0,
			scrollInertia: 600,
			callbacks: {
				onTotalScrollBack: function() {
					$(".s_8 .mCSB_draggerContainer").addClass("not_scroll")
				},
				whileScrolling: function() {
					$(".s_8 .mCSB_draggerContainer").removeClass("not_scroll")
				}
			}
		}),
		$(".s_8 .mCSB_draggerContainer").addClass("not_scroll"), $(".s_8 .mCSB_draggerContainer").attr("data-text", $(".s_8__staff_wrap").attr("data-scrolltext")),
		$(".s_8__staff__more").on("click", function() {
			$(".s_8__staff__list-xs .s_8__staff__card.hidden").fadeIn().removeClass("hidden"), $(".s_8__staff__more").hide()
		}),

		$(".s_9__partners").mCustomScrollbar({
			axis: "x",
			scrollbarPosition: "outside"
		}),
		$(".s_11__descr").mCustomScrollbar({
			axis: "y",
			scrollbarPosition: "outside"
		}),
		$(".s_10__faq h3").on("click", function() {
			$(".s_10__faq li.active").removeClass("active"), $(this).closest("li").addClass("active")
		}),
		$(".footer__lang__current").on("click", function() {
			$(this).closest(".footer__lang").toggleClass("active")
		}),
		$(".s_8__staff__avatar, .s_1__countdown__title span").tooltipster({
			animation: "fade",
			side: "right",
			maxWidth: 500
		}),
		$(document).mouseup(function(t) {
			var e = $(".footer__lang__list");
			$(".footer__lang__current, .footer__lang__current *").is(t.target) || e.is(t.target) || 0 !== e.has(t.target).length || $(".footer__lang").removeClass("active")
		}),
		$(".menu-btn").on("click", function() {
			$("body").toggleClass("show-menu") //,
			//$("body").hasClass("show-menu") ? $.fn.fullpage.setAllowScrolling(!1) : $.fn.fullpage.setAllowScrolling(!0)
		}),
		$(".nav li").on("click", function() {
			$("body").removeClass("show-menu") //,
			//$.fn.fullpage.setAllowScrolling(!0)
		}),
		$(".sections-wrap__overflow").on("click", function() {
			$("body").removeClass("show-menu") //, 
			//$.fn.fullpage.setAllowScrolling(!0)
		}),
		/*背景*/
		function(t) {
			function e() {
				a.clearRect(0, 0, o.width, o.height), a.globalCompositeOperation = "lighter";
				for(var t = 0, e = l.length; t < e; t++) {
					var i = l[t];
					a.fillStyle = "#F0833A", a.beginPath(), a.arc(i.x, i.y, i.radius, 0, 10 * Math.PI), a.fill(), a.fillStyle = "black", a.stroke()
				}
				a.beginPath();
				for(var t = 0, e = l.length; t < e; t++) {
					var r = l[t];
					a.moveTo(r.x, r.y), n(h, r) < 150 && a.lineTo(h.x, h.y);
					for(var s = 0, e = l.length; s < e; s++) {
						var c = l[s];
						n(r, c) < 150 && a.lineTo(c.x, c.y)
					}
				}
				a.lineWidth = .05, a.strokeStyle = "#F0833A", a.stroke()
			}

			function n(t, e) {
				var n = 100,
					i = 100;
				return n = e.x - t.x, n *= n, i = e.y - t.y, i *= i, Math.sqrt(n + i)
			}

			function i() {
				for(var t = 0, e = l.length; t < e; t++) {
					var n = l[t];
					n.x += n.vx / c, n.y += n.vy / c, (n.x < 0 || n.x > o.width) && (n.vx = -n.vx), (n.y < 0 || n.y > o.height) && (n.vy = -n.vy)
				}
			}

			function r() {
				e(), i(), requestAnimationFrame(r)
			}
			var o = document.getElementById(t),
				a = o.getContext("2d"),
				s = document.getElementById("page-wrap");
			o.width = window.innerWidth, o.height = window.innerHeight;
			for(var l = [], c = 200, h = {
					x: 0,
					y: 0
				}, u = 0; u < 50; u++) l.push({
				x: Math.random() * o.width,
				y: Math.random() * o.height,
				radius: 1 * Math.random() + 1,
				vx: Math.floor(30 * Math.random()),
				vy: Math.floor(50 * Math.random())
			});
			s.addEventListener("mousemove", function(t) {
					h.x = t.clientX, h.y = t.clientY
				}),
				r()
		}("page-bg-2"),
		
		$(".preload").addClass("preload-hide"), setTimeout(function() {
			$(".preload").css("z-index", "-100").remove()
		}, 800)
		
		
		
		
})