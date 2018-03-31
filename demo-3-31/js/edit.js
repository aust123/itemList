//$=function(x){return document.getElementById(x);};
getCookie = function(n) {
	var r = new RegExp(n + "=[^;]+", "i"),
		x = document.cookie.match(r);
	return x ? decodeURIComponent(x[0].split("=")[1]) : '';
};
setCookie = function(n, v) {
	if(!n) return false;
	var str = n + '=' + encodeURIComponent(v);
	str += '; path=/; expires=Monday, 01-Apr-2030 00:00:00 GMT;';
	document.cookie = str;
	return true;
};
delCookie = function(n) {
	if(!n) return false;
	document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
$K = function(n) {
	return(typeof n == 'object' ? (Object.keys(n).length) : 0);
};
top._UPD = {};
cLoad = function(ff, pp, dd, aa) {
	var tct = {};
	tct.a = aa || null;
	tct.f = ff || [];
	tct.p = pp || 0;
	tct.d = dd || function(i, t) {
		return t;
	};
	tct.r = [];
	if(!$K(ff)) {
		if(tct.a != null) setTimeout(function() {
			tct.a();
		}, tct.p);
		return;
	}
	for(var i in tct.f) {
		tct.r[i] = new(window.XDomainRequest || window.XMLHttpRequest)();
		tct.r[i].onreadystatechange = function() {
			var j = 0;
			for(var i in tct.f) {
				if(tct.r[i] && tct.r[i].readyState == 4) j++;
			}
			if(j == tct.f.length) {
				for(var i in tct.f)
					if(tct.f[i]) {
						try {
							if(tct.r[i].status == 200 || tct.r[i].status == 404) {
								var t = tct.d(i, tct.r[i].responseText);
								if(t) eval(t);
							}
						} catch(s) {
							console.log(tct.f[i] + ': ' + s);
						};
					}
				if(tct.a != null) setTimeout(function() {
					tct.a();
				}, tct.p);
			}
		};
		tct.r[i].open('GET', tct.f[i] + (/\?/.test(tct.f[i]) ? '&' : '?') + '_=' + (Math.random() * 100000), true);
		tct.r[i].send(null);
	}
	return tct;
};
cPost = function(ff, ff2, ok) {
	if(!ff) return;
	var tct = {};
	tct.f = ff || '';
	tct.r = new(window.XDomainRequest || window.XMLHttpRequest)();
	tct.d = function(t) {
		if(t) t = 'top._UPD=' + t + ';';
		return t;
	};
	tct.ok = ok || null;
	tct.r.onreadystatechange = function() {
		var r = tct.r;
		if(r && r.readyState == 4) {
			try {
				if(r.status == 200) {
					var t = tct.d(r.responseText);
					if(t) eval(t);
				}
			} catch(s) {
				console.log(tct.f + ': ' + s);
			};
			setTimeout(function() {
				if(tct.ok) tct.ok(top._UPD.result == 'ok' ? 0 : top._UPD.kod_err, top._UPD.msg_err || top._UPD.msg || ('Error ' + top._UPD.kod_err || ''));
			}, 0);
		}
	};
	tct.r.open('POST', tct.f, true);
	var f = new FormData();
	for(var j in ff2)
		if(j) f.append(j, ff2[j] || '');
	tct.r.send(f);
	return tct;
};
if(getCookie('editContent') == 'yes' && top.location.pathname == '/edit/') {
	top.ETB = 0;
	top.ETS = 0;

	function editTextEsc(t) {
		return new RegExp(RegExp.escape(t), 'g');
	}

	function editTextSave() {
		editTextServer();
		top.ETS = 0;
		var b = document.getElementById('editTextButton');
		if(b) {
			b.style.display = top.ETS ? 'block' : 'none';
		}
	}

	function editTextServer() {
		var data = top.editTextHTML + top.editTextFirst + '\n</body>\n</html>\n',
			filename = 'index.html',
			dir = document.location.pathname;
		dir = dir.replace(filename, '');
		var aPost = new cPost('/edit/save.cgi', {
			avt: top.mA.avt,
			dir: dir,
			file: filename,
			content: data
		}, function(err, msg) {
			if(err) console.log(msg);
			else console.log('Ok');
		});
	}

	function editTextDownload() {
		var data = top.editTextHTML + top.editTextFirst + '\n</body>\n</html>\n',
			filename = 'index.html',
			type = 'text/html',
			file = new Blob([data], {
				type: type
			});
		if(window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename);
		else {
			var a = document.createElement("a"),
				url = URL.createObjectURL(file);
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			setTimeout(function() {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);
			}, 0);
		}
	}

	function editTextHide() {
		var eTb = document.getElementById('editTextBox');
		if(!eTb) return;
		eTb.style = '';
		eTb.style.display = 'none';
		eTb.innerHTML = '';
		top.ETB = 0;
		document.body.onmousewheel = function(e) {};
		if(top.Et) {
			top.Et.style.boxShadow = '';
			if(!top.Et.getAttribute('style')) {
				top.Et.style = '';
				top.Et.removeAttribute('style');
			}
			top.Et = null;
		}
		document.onmousemove = editTextMove;
	}

	function editTextEnd() {
		var $s = document.getElementById('editTextArea');
		if(!$s) return;
		var n = $s.getAttribute('n') || '';
		if(n) {
			eTA = document.getElementById(n);
			if(!eTA) return;
			RegExp.escape = function(t) {
				return(t + '').replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
			};
			var yes = 1,
				v = $s.value || '&nbsp;';
			v = v.replace(/\n/g, '<br>');
			var r = editTextEsc(top.editTextValue);
			if(top.editTextFirst.match(r)) {
				top.editTextFirst = top.editTextFirst.replace(r, v);
				top.ETS = 1;
			} else {
				top.editTextValue = top.editTextValue.replace(/\sstyle\=\"\"/gi, '');
				v = v.replace(/\sstyle\=\"\"/gi, '');
				r = editTextEsc(top.editTextValue);
				if(top.editTextFirst.match(r)) {
					top.editTextFirst = top.editTextFirst.replace(r, v);
					top.ETS = 1;
				} else {
					console.log('Error 911');
					yes = 0;
				}
			}
			eTA.style.opacity = '';
			eTA.style.boxShadow = '';
			if(!eTA.getAttribute('style')) {
				eTA.style = '';
				eTA.removeAttribute('style');
			}
			if(!top.editTextID) eTA.removeAttribute('id');
			if(yes) eTA.innerHTML = v;
			editTextHide();
			var b = document.getElementById('editTextButton');
			if(b) {
				b.style.display = top.ETS ? 'block' : 'none';
			}
		}
	}

	function editTextGet(el) {
		var v = el.innerHTML,
			t = el.tagName;
		if(!v) return 0;
		if(t == 'BODY' || t == 'IMG' || t == 'IMG' || t == 'TEXTAREA' || t == 'CANVAS' || v.match(/<img/i) || v.match(/<h3/i) || v.match(/<h2/i) || v.match(/<h1/i) || v.match(/<style/i) || v.match(/<div/i) || v.match(/<ul/i) || v.match(/<ol/i) || v.match(/<li/i) || v.match(/<section/i) || v.match(/<canvas/i) || v.match(/<footer/i) || v.match(/<header/i) || v.match(/<nav/i)) return 0;
		if(v.match(/</)) return 2;
		else return 1;
	}

	function editText(el) {
		var v = el.innerHTML;
		if(!v) return;
		top.editTextValue = el.innerHTML;
		var yes = editTextGet(el);
		if(!yes) return;
		v = v.replace(/(\s+)/g, ' ');
		if(v.charAt(0) == ' ') v = v.substr(1);
		v = v.replace(/\<br\>/gi, '\n');
		v = v.replace(/\<br\/\>/gi, '\n');
		v = v.replace(/\&/gi, '\&amp;');
		v = v.replace(/\'/g, '&#39;');
		v = v.replace(/\"/g, '&#34;');

		var eTb = document.getElementById('editTextBox');
		if(!eTb) return;
		var id_yes = el.id ? 1 : 0,
			id = el.id || parseInt(Math.random() * 10000000);
		el.id = id;
		top.editTextID = id_yes;
		eTb.innerHTML = '<textarea id="editTextArea" n="' + id + '" onchange="editTextEnd();" onblur="editTextEnd();" style="position:relative;box-sizing:border-box;font:inherit;color:white;background:black;text-transform:inherit;letter-spacing:inherit;white-space:inherit;width:100%;height:100%;opacity:1;text-align:inherit;overflow:hidden;padding:0;margin:0;border:0;">' + v + '</textarea>' +
			'<div id="editTextArea_ok" onclick="editTextEnd();"></div>';
		for(var j in el.style) eTb.style[j] = el.style[j];
		var r = el.getBoundingClientRect(),
			s = document.defaultView.getComputedStyle(el, null);
		eTb.style.position = 'fixed';
		eTb.style.top = r.top + 'px';
		eTb.style.left = r.left + 'px';
		eTb.style.width = r.width + 'px';
		eTb.style.height = r.height + 'px';
		eTb.style.backgroundColor = s.backgroundColor;
		eTb.style.font = s.font;
		eTb.style.fontFamily = s.fontFamily;
		eTb.style.color = s.color;
		eTb.style.opacity = s.opacity;
		eTb.style.textAlign = s.textAlign;
		eTb.style.letterSpacing = s.letterSpacing;
		eTb.style.whiteSpace = s.whiteSpace;
		eTb.style.testTransform = s.testTransform;
		if(s.lineHeight == '0px') eTb.style.lineHeight = '';
		eTb.style.boxSizing = 'border-box';
		eTb.style.boxShadow = '0px 0px 20px -5px white';
		eTb.style.borderRadius = '4px';
		eTb.style.padding = s.padding || '0';
		eTb.style.margin = '0';
		eTb.style.overflow = 'hidden';
		eTb.style.display = 'block';
		eTb.style.zIndex = 10000000000;
		el.style.opacity = 0;
		if(v.match(/</)) {
			eTb.style.padding = '0';
			eTb.style.margin = '0';
			eTb.style.fontWeight = '300';
			eTb.style.fontSize = '16px';
			eTb.style.fontFamily = s.fontFamily;
			eTb.style.lineHeight = '24px';
			eTb.style.left = '25%';
			eTb.style.top = '25%';
			eTb.style.width = '50%';
			eTb.style.height = '50%';
			eTb.style.boxSizing = 'border-box';
			var $s = document.getElementById('editTextArea');
			if(!$s) return;
			$s.style.padding = '20px';
			$s.style.margin = '0';
			$s.style.width = '100%';
			$s.style.height = '100%';
			$s.style.fontWeight = '300';
			$s.style.fontFamily = 'inherit';
			$s.style.lineHeight = 'inherit';
			$s.style.boxSizing = 'border-box';
		}
		top.ETB = 1;
		var $s = document.getElementById('editTextArea');
		if(!$s) return;
		$s.focus();
		document.body.onmousewheel = function(e) {
			e.cancelBubble = true;
			e.returnValue = false;
			e.preventDefault();
			e.stopPropagation();
			return false;
		};
		document.onmousemove = function(e) {};
	}

	function editTextMove(e) {
		if(e.target && e.target != top.Et && e.target.id != 'editTextButton') {
			var yes = editTextGet(e.target);
			if(yes) e.target.style.boxShadow = '0px 0px 5px 2px ' + (yes == 2 ? '#0090e0' : '#009000');
			if(top.Et) {
				top.Et.style.boxShadow = '';
				if(!top.Et.getAttribute('style')) {
					top.Et.style = '';
					top.Et.removeAttribute('style');
				}
				top.Et = null;
			}
			if(yes) top.Et = e.target;
		}
	};
	top.Et = null;
	document.addEventListener('DOMContentLoaded', function() {
		var c = document.createElement('div');
		c.id = 'editTextBox';
		c.style.display = 'none';
		document.body.appendChild(c);
		c = document.createElement('div');
		c.id = 'editTextButton';
		with(c.style) {
			position = 'fixed';
			right = '10px';
			bottom = '10px';
			width = '60px';
			height = '60px';
			font = 'normal 16px/60px Arial';
			textAlign = 'center';
			color = 'black';
			backgroundColor = '#00c0c0';
			boxShadow = '0px 1px 6px 0px black';
			borderRadius = '50%';
			cursor = 'pointer';
			zIndex = '9999999999';
			display = 'none';
		}
		c.onclick = editTextSave;
		c.innerHTML = 'Save';
		document.body.appendChild(c);
		document.onmousemove = editTextMove;
		document.oncontextmenu = function() {
			return false;
		};
		if(document.layers) {
			window.captureEvents(Event.MOUSEDOWN);
			window.onmousedown = function(e) {
				if(top.ETB) return;
				if(e.target == document) return false;
				if(typeof e.button != "undefined" && e.button == 2) {
					var el = e.target || event.srcElement;
					e.preventDefault();
					e.stopPropagation();
					editText(el);
				}
			}
		} else {
			document.onmousedown = function(e) {
				if(top.ETB) return;
				if(typeof e.button != "undefined" && e.button == 2) {
					var el = e.target || event.srcElement;
					e.preventDefault();
					e.stopPropagation();
					editText(el);
					return false;
				}
			}
		}
	});
	var aLoad = new cLoad([location.href], 0, function(i, t) {
		if(i == 0) top.editTextSource = t;
		return '';
	}, function() {
		var div = top.document.createElement('div');
		div.id = 'editTextTemp';
		var ttt = /([\W\w]*)\<body(.*)\>([\W\w]*)\<\/body\>/gi.exec(top.editTextSource);
		div.innerHTML = ttt[3];
		var target = div.innerHTML;
		top.editTextFirst = target;
		top.editTextHTML = ttt[1] + '<body' + ttt[2] + '>';
		div = null;
	});
}