!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)module.exports = e(); else if ("function" == typeof define && define.amd)define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).pingpp = e()
    }
}(function () {
    return function e(n, t, a) {
        function r(l, o) {
            if (!t[l]) {
                if (!n[l]) {
                    var c = "function" == typeof require && require;
                    if (!o && c)return c(l, !0);
                    if (i)return i(l, !0);
                    var s = new Error("Cannot find module '" + l + "'");
                    throw s.code = "MODULE_NOT_FOUND", s
                }
                var u = t[l] = {exports: {}};
                n[l][0].call(u.exports, function (e) {
                    var t = n[l][1][e];
                    return r(t || e)
                }, u, u.exports, e, n, t, a)
            }
            return t[l].exports
        }

        for (var i = "function" == typeof require && require, l = 0; l < a.length; l++)r(a[l]);
        return r
    }({
        1: [function (e, n, t) {
            var a = e('./payment_elements.js');
            n.exports = {
                userCallback: void 0, innerCallback: function (e, n) {
                    'function' == typeof this.userCallback && (void 0 === n && (n = this.error()), this.userCallback(e, n), this.userCallback = void 0, a.clear())
                }, error: function (e, n) {
                    return e = void 0 === e ? '' : e, n = void 0 === n ? '' : n, {msg: e, extra: n}
                }
            }
        }, {"./payment_elements.js": 25}], 2: [function (e, n, t) {
            var a = e('../utils'), r = {}.hasOwnProperty;
            n.exports = {
                ALIPAY_PC_DIRECT_URL: 'https://mapi.alipay.com/gateway.do', handleCharge: function (e) {
                    var n = e.channel, t = e.credential[n], i = this.ALIPAY_PC_DIRECT_URL;
                    r.call(t, 'channel_url') && (i = t.channel_url), r.call(t, '_input_charset') || r.call(t, 'service') && 'create_direct_pay_by_user' === t.service && (t._input_charset = 'utf-8');
                    var l = a.stringifyData(t, n, !0);
                    a.redirectTo(i + '?' + l)
                }
            }
        }, {"../utils": 28}], 3: [function (e, n, t) {
            var a = e('../utils'), r = e('../mods'), i = {}.hasOwnProperty;
            n.exports = {
                ALIPAY_WAP_URL_OLD: 'https://wappaygw.alipay.com/service/rest.htm',
                ALIPAY_WAP_URL: 'https://mapi.alipay.com/gateway.do',
                handleCharge: function (e) {
                    var n = e.channel, t = e.credential[n], l = this.ALIPAY_WAP_URL;
                    i.call(t, 'req_data') ? l = this.ALIPAY_WAP_URL_OLD : i.call(t, 'channel_url') && (l = t.channel_url), i.call(t, '_input_charset') || (i.call(t, 'service') && 'alipay.wap.create.direct.pay.by.user' === t.service || i.call(t, 'req_data')) && (t._input_charset = 'utf-8');
                    var o = l + '?' + a.stringifyData(t, n, !0), c = r.getExtraModule('ap');
                    a.inWeixin() && void 0 !== c ? c.pay(o) : a.redirectTo(o)
                }
            }
        }, {"../mods": 24, "../utils": 28}], 4: [function (e, n, t) {
            var a = e('../utils'), r = e('../callbacks'), i = {}.hasOwnProperty;
            n.exports = {
                handleCharge: function (e) {
                    var n = e.channel, t = e.credential[n];
                    i.call(t, 'url') ? a.redirectTo(t.url + '?' + a.stringifyData(t, n)) : r.innerCallback('fail', r.error('invalid_credential', 'missing_field:url'))
                }
            }
        }, {"../callbacks": 1, "../utils": 28}], 5: [function (e, n, t) {
            var a = e('../utils'), r = {}.hasOwnProperty;
            n.exports = {
                CMB_WALLET_URL: 'https://netpay.cmbchina.com/netpayment/BaseHttp.dll?MB_EUserPay',
                handleCharge: function (e) {
                    var n = e.credential[e.channel], t = this.CMB_WALLET_URL;
                    r.call(n, 'ChannelUrl') && (t = n.ChannelUrl, delete n.ChannelUrl), r.call(n, 'channelVersion') && delete n.channelVersion, a.formSubmit(t, 'post', n)
                }
            }
        }, {"../utils": 28}], 6: [function (e, n, t) {
            var a = e('../../utils'), r = e('../../callbacks'), i = {}.hasOwnProperty;
            n.exports = {
                handleCharge: function (e) {
                    var n, t = e.credential[e.channel];
                    if ('string' == typeof t)n = t; else {
                        if (!i.call(t, 'url'))return void r.innerCallback('fail', r.error('invalid_credential', 'credential format is incorrect'));
                        n = t.url
                    }
                    a.redirectTo(n)
                }
            }
        }, {"../../callbacks": 1, "../../utils": 28}], 7: [function (e, n, t) {
            var a = e('../utils');
            n.exports = {
                CP_B2B_URL: 'https://payment.chinapay.com/CTITS/service/rest/page/nref/000000000017/0/0/0/0/0',
                handleCharge: function (e) {
                    var n = e.credential[e.channel];
                    a.formSubmit(this.CP_B2B_URL, 'post', n)
                }
            }
        }, {"../utils": 28}], 8: [function (e, n, t) {
            var a = e('../../stash'), r = {}.hasOwnProperty;
            !function () {
                var e = {}, t = {};
                t.PADCHAR = '=', t.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', t.makeDOMException = function () {
                    try {
                        return new DOMException(DOMException.INVALID_CHARACTER_ERR)
                    } catch (n) {
                        var e = new Error('DOM Exception 5');
                        return e.code = e.number = 5, e.name = e.description = 'INVALID_CHARACTER_ERR', e.toString = function () {
                            return 'Error: ' + e.name + ': ' + e.message
                        }, e
                    }
                }, t.getbyte64 = function (e, n) {
                    var a = t.ALPHA.indexOf(e.charAt(n));
                    if (-1 === a)throw t.makeDOMException();
                    return a
                }, t.decode = function (e) {
                    e = '' + e;
                    var n, a, r, i = t.getbyte64, l = e.length;
                    if (0 === l)return e;
                    if (l % 4 != 0)throw t.makeDOMException();
                    n = 0, e.charAt(l - 1) === t.PADCHAR && (n = 1, e.charAt(l - 2) === t.PADCHAR && (n = 2), l -= 4);
                    var o = [];
                    for (a = 0; a < l; a += 4)r = i(e, a) << 18 | i(e, a + 1) << 12 | i(e, a + 2) << 6 | i(e, a + 3), o.push(String.fromCharCode(r >> 16, r >> 8 & 255, 255 & r));
                    switch (n) {
                        case 1:
                            r = i(e, a) << 18 | i(e, a + 1) << 12 | i(e, a + 2) << 6, o.push(String.fromCharCode(r >> 16, r >> 8 & 255));
                            break;
                        case 2:
                            r = i(e, a) << 18 | i(e, a + 1) << 12, o.push(String.fromCharCode(r >> 16))
                    }
                    return o.join('')
                }, t.getbyte = function (e, n) {
                    var a = e.charCodeAt(n);
                    if (a > 255)throw t.makeDOMException();
                    return a
                }, t.encode = function (e) {
                    if (1 !== arguments.length)throw new SyntaxError('Not enough arguments');
                    var n, a, r = t.PADCHAR, i = t.ALPHA, l = t.getbyte, o = [], c = (e = '' + e).length - e.length % 3;
                    if (0 === e.length)return e;
                    for (n = 0; n < c; n += 3)a = l(e, n) << 16 | l(e, n + 1) << 8 | l(e, n + 2), o.push(i.charAt(a >> 18)), o.push(i.charAt(a >> 12 & 63)), o.push(i.charAt(a >> 6 & 63)), o.push(i.charAt(63 & a));
                    switch (e.length - c) {
                        case 1:
                            a = l(e, n) << 16, o.push(i.charAt(a >> 18) + i.charAt(a >> 12 & 63) + r + r);
                            break;
                        case 2:
                            a = l(e, n) << 16 | l(e, n + 1) << 8, o.push(i.charAt(a >> 18) + i.charAt(a >> 12 & 63) + i.charAt(a >> 6 & 63) + r)
                    }
                    return o.join('')
                }, e.url = 'pay.htm', e.pay = function (n) {
                    var i = encodeURIComponent(t.encode(n));
                    r.call(a, 'APURL') && (e.url = a.APURL), location.href = e.url + '?goto=' + i
                }, e.decode = function (e) {
                    return t.decode(decodeURIComponent(e))
                }, n.exports = e
            }()
        }, {"../../stash": 26}], 9: [function (e, n, t) {
            var a = e('./commons/redirect_base');
            n.exports = {
                handleCharge: function (e) {
                    a.handleCharge(e)
                }
            }
        }, {"./commons/redirect_base": 6}], 10: [function (e, n, t) {
            arguments[4][9][0].apply(t, arguments)
        }, {"./commons/redirect_base": 6, dup: 9}], 11: [function (e, n, t) {
            var a = e('./commons/redirect_base'), r = e('../callbacks'), i = e('../utils'), l = {}.hasOwnProperty;
            n.exports = {
                handleCharge: function (e) {
                    var n = e.extra;
                    if (l.call(n, 'pay_channel')) {
                        var t = n.pay_channel;
                        'wx' !== t || i.inWeixin() ? 'alipay' !== t || i.inAlipay() ? a.handleCharge(e) : r.innerCallback('fail', r.error('Not in the Alipay browser')) : r.innerCallback('fail', r.error('Not in the WeChat browser'))
                    } else r.innerCallback('fail', r.error('invalid_charge', 'charge 格式不正确'))
                }
            }
        }, {"../callbacks": 1, "../utils": 28, "./commons/redirect_base": 6}], 12: [function (e, n, t) {
            var a = e('../utils'), r = {}.hasOwnProperty;
            n.exports = {
                JDPAY_WAP_URL_OLD: 'https://m.jdpay.com/wepay/web/pay',
                JDPAY_H5_URL: 'https://h5pay.jd.com/jdpay/saveOrder',
                JDPAY_PC_URL: 'https://wepay.jd.com/jdpay/saveOrder',
                handleCharge: function (e) {
                    var n = e.credential[e.channel], t = this.JDPAY_H5_URL;
                    r.call(n, 'channelUrl') ? (t = n.channelUrl, delete n.channelUrl) : r.call(n, 'merchantRemark') && (t = this.JDPAY_WAP_URL_OLD), a.formSubmit(t, 'post', n)
                }
            }
        }, {"../utils": 28}], 13: [function (e, n, t) {
            var a = e('../callbacks'), r = e('../utils'), i = e('../stash'), l = {}.hasOwnProperty;
            n.exports = {
                SRC_URL: 'https://open.mobile.qq.com/sdk/qqapi.js?_bid=152',
                ID: 'mqq_api',
                handleCharge: function (e) {
                    var n = e.credential[e.channel];
                    l.call(n, 'token_id') ? (i.tokenId = n.token_id, r.loadUrlJs(this.ID, this.SRC_URL, this.callpay)) : a.innerCallback('fail', a.error('invalid_credential', 'missing_token_id'))
                },
                callpay: function () {
                    if ('undefined' != typeof mqq) {
                        if (0 == mqq.QQVersion)return a.innerCallback('fail', a.error('Not in the QQ client')), void delete i.tokenId;
                        mqq.tenpay.pay({tokenId: i.tokenId}, function (e) {
                            0 == e.resultCode ? a.innerCallback('success') : a.innerCallback('fail', a.error(e.retmsg))
                        })
                    } else a.innerCallback('fail', a.error('network_err'));
                    delete i.tokenId
                }
            }
        }, {"../callbacks": 1, "../stash": 26, "../utils": 28}], 14: [function (e, n, t) {
            var a = e('../utils');
            n.exports = {
                UPACP_PC_URL: 'https://gateway.95516.com/gateway/api/frontTransReq.do',
                handleCharge: function (e) {
                    var n = e.credential[e.channel];
                    a.formSubmit(this.UPACP_PC_URL, 'post', n)
                }
            }
        }, {"../utils": 28}], 15: [function (e, n, t) {
            var a = e('../utils');
            n.exports = {
                UPACP_WAP_URL: 'https://gateway.95516.com/gateway/api/frontTransReq.do',
                handleCharge: function (e) {
                    var n = e.credential[e.channel];
                    a.formSubmit(this.UPACP_WAP_URL, 'post', n)
                }
            }
        }, {"../utils": 28}], 16: [function (e, n, t) {
            var a = e('../stash'), r = e('../callbacks'), i = {}.hasOwnProperty;
            n.exports = {
                handleCharge: function (e) {
                    for (var n = e.credential[e.channel], t = ['appId', 'timeStamp', 'nonceStr', 'package', 'signType', 'paySign'], l = 0; l < t.length; l++)if (!i.call(n, t[l]))return void r.innerCallback('fail', r.error('invalid_credential', 'missing_field_' + t[l]));
                    a.jsApiParameters = n, this.callpay()
                }, wxLiteEnabled: function () {
                    return 'undefined' != typeof wx && wx.requestPayment
                }, callpay: function () {
                    if (this.wxLiteEnabled()) {
                        var e = a.jsApiParameters;
                        delete e.appId, e.complete = function (e) {
                            'requestPayment:ok' === e.errMsg && r.innerCallback('success'), 'requestPayment:cancel' === e.errMsg && r.innerCallback('cancel', r.error('用户取消支付')), 'undefined' !== e.err_code && 'undefined' !== e.err_desc && r.innerCallback('fail', r.error(e.err_desc, e))
                        }, wx.requestPayment(e)
                    } else console.log('请在微信小程序中打开')
                }, runTestMode: function (e) {
                    wx.showModal({title: '提示', content: '因 "微信小程序" 限制 域名的原因 暂不支持 模拟付款 请使用 livekey 获取 charge 进行支付'})
                }
            }
        }, {"../callbacks": 1, "../stash": 26}], 17: [function (e, n, t) {
            var a = e('../callbacks'), r = e('../utils'), i = e('../stash'), l = e('../mods'), o = {}.hasOwnProperty;
            n.exports = {
                PINGPP_NOTIFY_URL_BASE: 'https://notify.pingxx.com/notify', handleCharge: function (e) {
                    for (var n = e.credential[e.channel], t = ['appId', 'timeStamp', 'nonceStr', 'package', 'signType', 'paySign'], r = 0; r < t.length; r++)if (!o.call(n, t[r]))return void a.innerCallback('fail', a.error('invalid_credential', 'missing_field_' + t[r]));
                    i.jsApiParameters = n, this.callpay()
                }, callpay: function () {
                    var e = this, n = l.getExtraModule('wx_jssdk');
                    if (void 0 !== n && n.jssdkEnabled())n.callpay(); else if ('undefined' == typeof WeixinJSBridge) {
                        var t = function () {
                            e.jsApiCall()
                        };
                        document.addEventListener ? document.addEventListener('WeixinJSBridgeReady', t, !1) : document.attachEvent && (document.attachEvent('WeixinJSBridgeReady', t), document.attachEvent('onWeixinJSBridgeReady', t))
                    } else this.jsApiCall()
                }, jsApiCall: function () {
                    o.call(i, 'jsApiParameters') && WeixinJSBridge.invoke('getBrandWCPayRequest', i.jsApiParameters, function (e) {
                        delete i.jsApiParameters, 'get_brand_wcpay_request:ok' == e.err_msg ? a.innerCallback('success') : 'get_brand_wcpay_request:cancel' == e.err_msg ? a.innerCallback('cancel') : a.innerCallback('fail', a.error('wx_result_fail', e.err_msg))
                    })
                }, runTestMode: function (e) {
                    if (confirm('模拟付款？')) {
                        var n = '/charges/' + e.id;
                        r.request(this.PINGPP_NOTIFY_URL_BASE + n + '?livemode=false', 'GET', null, function (e, n) {
                            if (n >= 200 && n < 400 && 'success' == e)a.innerCallback('success'); else {
                                var t = 'http_code:' + n + ';response:' + e;
                                a.innerCallback('fail', a.error('testmode_notify_fail', t))
                            }
                        }, function () {
                            a.innerCallback('fail', a.error('network_err'))
                        })
                    }
                }
            }
        }, {"../callbacks": 1, "../mods": 24, "../stash": 26, "../utils": 28}], 18: [function (e, n, t) {
            var a = e('../utils'), r = e('../callbacks'), i = {}.hasOwnProperty;
            n.exports = {
                handleCharge: function (e) {
                    var n = e.credential[e.channel];
                    'string' == typeof n ? a.redirectTo(n) : 'object' == typeof n && i.call(n, 'url') ? a.redirectTo(n.url) : r.innerCallback('fail', r.error('invalid_credential', 'credential 格式不正确'))
                }
            }
        }, {"../callbacks": 1, "../utils": 28}], 19: [function (e, n, t) {
            var a = e('../utils'), r = e('../callbacks'), i = {}.hasOwnProperty;
            n.exports = {
                YEEPAY_WAP_URL: 'https://ok.yeepay.com/paymobile/api/pay/request',
                YEEPAY_WAP_TEST_URL: 'http://mobiletest.yeepay.com/paymobile/api/pay/request',
                handleCharge: function (e) {
                    for (var n = e.channel, t = e.credential[n], l = ['merchantaccount', 'encryptkey', 'data'], o = 0; o < l.length; o++)if (!i.call(t, l[o]))return void r.innerCallback('fail', r.error('invalid_credential', 'missing_field_' + l[o]));
                    var c;
                    c = i.call(t, 'mode') && 'test' == t.mode ? this.YEEPAY_WAP_TEST_URL : this.YEEPAY_WAP_URL, a.redirectTo(c + '?' + a.stringifyData(t, n, !0))
                }
            }
        }, {"../callbacks": 1, "../utils": 28}], 20: [function (e, n, t) {
            var a = e('./utils'), r = e('./stash'), i = e('./libs/md5'), l = {
                seperator: '###',
                limit: 1,
                report_url: 'https://statistics.pingxx.com/one_stats',
                timeout: 100
            }, o = function (e, n) {
                var t = new RegExp('(^|&)' + n + '=([^&]*)(&|$)', 'i'), a = e.substr(0).match(t);
                return null !== a ? unescape(a[2]) : null
            }, c = function () {
                return navigator.userAgent
            }, s = function () {
                return window.location.host
            };
            l.store = function (e) {
                if ('undefined' != typeof localStorage && null !== localStorage) {
                    var n = this, t = {};
                    t.app_id = e.app_id || r.app_id || 'app_not_defined', t.ch_id = e.ch_id || '', t.channel = e.channel || '', t.type = e.type || '', t.user_agent = c(), t.host = s(), t.time = (new Date).getTime(), t.puid = r.puid;
                    var a = 'app_id=' + t.app_id + '&channel=' + t.channel + '&ch_id=' + t.ch_id + '&host=' + t.host + '&time=' + t.time + '&type=' + t.type + '&user_agent=' + t.user_agent + '&puid=' + t.puid, i = a;
                    null !== localStorage.getItem('PPP_ONE_STATS') && 0 !== localStorage.getItem('PPP_ONE_STATS').length && (i = localStorage.getItem('PPP_ONE_STATS') + n.seperator + a);
                    try {
                        localStorage.setItem('PPP_ONE_STATS', i)
                    } catch (e) {
                    }
                }
            }, l.send = function () {
                if ('undefined' != typeof localStorage && null !== localStorage) {
                    var e = this, n = localStorage.getItem('PPP_ONE_STATS');
                    if (!(null === n || n.split(e.seperator).length < e.limit))try {
                        for (var t = [], r = n.split(e.seperator), l = i(r.join('&')), c = 0; c < r.length; c++)t.push({
                            app_id: o(r[c], 'app_id'),
                            channel: o(r[c], 'channel'),
                            ch_id: o(r[c], 'ch_id'),
                            host: o(r[c], 'host'),
                            time: o(r[c], 'time'),
                            type: o(r[c], 'type'),
                            user_agent: o(r[c], 'user_agent'),
                            puid: o(r[c], 'puid')
                        });
                        a.request(e.report_url, 'POST', t, function (e, n) {
                            200 == n && localStorage.removeItem('PPP_ONE_STATS')
                        }, void 0, {'X-Pingpp-Report-Token': l})
                    } catch (e) {
                    }
                }
            }, l.report = function (e) {
                var n = this;
                n.store(e), setTimeout(function () {
                    n.send()
                }, n.timeout)
            }, n.exports = l
        }, {"./libs/md5": 22, "./stash": 26, "./utils": 28}], 21: [function (e, n, t) {
            var a = e('./stash'), r = e('./utils'), i = e('./collection');
            n.exports = {
                SRC_URL: 'https://cookie.pingxx.com', init: function () {
                    var e = this;
                    r.documentReady(function () {
                        e.initPuid()
                    })
                }, initPuid: function () {
                    if ('undefined' != typeof window && 'undefined' != typeof localStorage && null !== localStorage) {
                        var e = localStorage.getItem('pingpp_uid');
                        if (null === e) {
                            e = r.randomString();
                            try {
                                localStorage.setItem('pingpp_uid', e)
                            } catch (e) {
                            }
                        }
                        if (a.puid = e, !document.getElementById('p_analyse_iframe')) {
                            var n;
                            try {
                                n = document.createElement('iframe')
                            } catch (e) {
                                n = document.createElement('<iframe name="ifr"></iframe>')
                            }
                            n.id = 'p_analyse_iframe', n.src = this.SRC_URL + '/?puid=' + e, n.style.display = 'none', document.body.appendChild(n)
                        }
                        setTimeout(function () {
                            i.send()
                        }, 0)
                    }
                }
            }
        }, {"./collection": 20, "./stash": 26, "./utils": 28}], 22: [function (e, n, t) {
            !function () {
                function e(e, n) {
                    var t = (65535 & e) + (65535 & n);
                    return (e >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
                }

                function t(e, n) {
                    return e << n | e >>> 32 - n
                }

                function a(n, a, r, i, l, o) {
                    return e(t(e(e(a, n), e(i, o)), l), r)
                }

                function r(e, n, t, r, i, l, o) {
                    return a(n & t | ~n & r, e, n, i, l, o)
                }

                function i(e, n, t, r, i, l, o) {
                    return a(n & r | t & ~r, e, n, i, l, o)
                }

                function l(e, n, t, r, i, l, o) {
                    return a(n ^ t ^ r, e, n, i, l, o)
                }

                function o(e, n, t, r, i, l, o) {
                    return a(t ^ (n | ~r), e, n, i, l, o)
                }

                function c(n, t) {
                    n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t;
                    var a, c, s, u, d, p = 1732584193, f = -271733879, h = -1732584194, _ = 271733878;
                    for (a = 0; a < n.length; a += 16)c = p, s = f, u = h, d = _, f = o(f = o(f = o(f = o(f = l(f = l(f = l(f = l(f = i(f = i(f = i(f = i(f = r(f = r(f = r(f = r(f, h = r(h, _ = r(_, p = r(p, f, h, _, n[a], 7, -680876936), f, h, n[a + 1], 12, -389564586), p, f, n[a + 2], 17, 606105819), _, p, n[a + 3], 22, -1044525330), h = r(h, _ = r(_, p = r(p, f, h, _, n[a + 4], 7, -176418897), f, h, n[a + 5], 12, 1200080426), p, f, n[a + 6], 17, -1473231341), _, p, n[a + 7], 22, -45705983), h = r(h, _ = r(_, p = r(p, f, h, _, n[a + 8], 7, 1770035416), f, h, n[a + 9], 12, -1958414417), p, f, n[a + 10], 17, -42063), _, p, n[a + 11], 22, -1990404162), h = r(h, _ = r(_, p = r(p, f, h, _, n[a + 12], 7, 1804603682), f, h, n[a + 13], 12, -40341101), p, f, n[a + 14], 17, -1502002290), _, p, n[a + 15], 22, 1236535329), h = i(h, _ = i(_, p = i(p, f, h, _, n[a + 1], 5, -165796510), f, h, n[a + 6], 9, -1069501632), p, f, n[a + 11], 14, 643717713), _, p, n[a], 20, -373897302), h = i(h, _ = i(_, p = i(p, f, h, _, n[a + 5], 5, -701558691), f, h, n[a + 10], 9, 38016083), p, f, n[a + 15], 14, -660478335), _, p, n[a + 4], 20, -405537848), h = i(h, _ = i(_, p = i(p, f, h, _, n[a + 9], 5, 568446438), f, h, n[a + 14], 9, -1019803690), p, f, n[a + 3], 14, -187363961), _, p, n[a + 8], 20, 1163531501), h = i(h, _ = i(_, p = i(p, f, h, _, n[a + 13], 5, -1444681467), f, h, n[a + 2], 9, -51403784), p, f, n[a + 7], 14, 1735328473), _, p, n[a + 12], 20, -1926607734), h = l(h, _ = l(_, p = l(p, f, h, _, n[a + 5], 4, -378558), f, h, n[a + 8], 11, -2022574463), p, f, n[a + 11], 16, 1839030562), _, p, n[a + 14], 23, -35309556), h = l(h, _ = l(_, p = l(p, f, h, _, n[a + 1], 4, -1530992060), f, h, n[a + 4], 11, 1272893353), p, f, n[a + 7], 16, -155497632), _, p, n[a + 10], 23, -1094730640), h = l(h, _ = l(_, p = l(p, f, h, _, n[a + 13], 4, 681279174), f, h, n[a], 11, -358537222), p, f, n[a + 3], 16, -722521979), _, p, n[a + 6], 23, 76029189), h = l(h, _ = l(_, p = l(p, f, h, _, n[a + 9], 4, -640364487), f, h, n[a + 12], 11, -421815835), p, f, n[a + 15], 16, 530742520), _, p, n[a + 2], 23, -995338651), h = o(h, _ = o(_, p = o(p, f, h, _, n[a], 6, -198630844), f, h, n[a + 7], 10, 1126891415), p, f, n[a + 14], 15, -1416354905), _, p, n[a + 5], 21, -57434055), h = o(h, _ = o(_, p = o(p, f, h, _, n[a + 12], 6, 1700485571), f, h, n[a + 3], 10, -1894986606), p, f, n[a + 10], 15, -1051523), _, p, n[a + 1], 21, -2054922799), h = o(h, _ = o(_, p = o(p, f, h, _, n[a + 8], 6, 1873313359), f, h, n[a + 15], 10, -30611744), p, f, n[a + 6], 15, -1560198380), _, p, n[a + 13], 21, 1309151649), h = o(h, _ = o(_, p = o(p, f, h, _, n[a + 4], 6, -145523070), f, h, n[a + 11], 10, -1120210379), p, f, n[a + 2], 15, 718787259), _, p, n[a + 9], 21, -343485551), p = e(p, c), f = e(f, s), h = e(h, u), _ = e(_, d);
                    return [p, f, h, _]
                }

                function s(e) {
                    var n, t = '';
                    for (n = 0; n < 32 * e.length; n += 8)t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
                    return t
                }

                function u(e) {
                    var n, t = [];
                    for (t[(e.length >> 2) - 1] = void 0, n = 0; n < t.length; n += 1)t[n] = 0;
                    for (n = 0; n < 8 * e.length; n += 8)t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
                    return t
                }

                function d(e) {
                    return s(c(u(e), 8 * e.length))
                }

                function p(e, n) {
                    var t, a, r = u(e), i = [], l = [];
                    for (i[15] = l[15] = void 0, r.length > 16 && (r = c(r, 8 * e.length)), t = 0; t < 16; t += 1)i[t] = 909522486 ^ r[t], l[t] = 1549556828 ^ r[t];
                    return a = c(i.concat(u(n)), 512 + 8 * n.length), s(c(l.concat(a), 640))
                }

                function f(e) {
                    var n, t, a = '';
                    for (t = 0; t < e.length; t += 1)n = e.charCodeAt(t), a += "0123456789abcdef".charAt(n >>> 4 & 15) + "0123456789abcdef".charAt(15 & n);
                    return a
                }

                function h(e) {
                    return unescape(encodeURIComponent(e))
                }

                function _(e) {
                    return d(h(e))
                }

                function m(e) {
                    return f(_(e))
                }

                function y(e, n) {
                    return p(h(e), h(n))
                }

                function g(e, n) {
                    return f(y(e, n))
                }

                n.exports = function (e, n, t) {
                    return n ? t ? y(n, e) : g(n, e) : t ? _(e) : m(e)
                }
            }()
        }, {}], 23: [function (e, n, t) {
            var a = e('./version').v, r = e('./testmode'), i = e('./callbacks'), l = e('./mods'), o = e('./stash'), c = e('./collection'), s = e('./payment_elements'), u = {}.hasOwnProperty, PingppSDK = function () {
                e('./init').init()
            };
            PingppSDK.prototype = {
                version: a, createPayment: function (e, n, t, a) {
                    if ('function' == typeof n && (i.userCallback = n), s.init(e), u.call(s, 'id'))if (u.call(s, 'channel')) {
                        u.call(s, 'app') && ('string' == typeof s.app ? o.app_id = s.app : 'object' == typeof s.app && 'string' == typeof s.app.id && (o.app_id = s.app.id)), c.report({
                            type: 'pure_sdk_click',
                            channel: s.channel,
                            ch_id: s.id
                        });
                        var d = s.channel;
                        if (u.call(s, 'credential'))if (s.credential)if (u.call(s.credential, d))if (u.call(s, 'livemode')) {
                            var p = l.getChannelModule(d);
                            if (void 0 === p)return console.error('channel module "' + d + '" is undefined'), void i.innerCallback('fail', i.error('invalid_channel', 'channel module "' + d + '" is undefined'));
                            !1 !== s.livemode ? (void 0 !== t && (o.signature = t), 'boolean' == typeof a && (o.debug = a), p.handleCharge(s)) : u.call(p, 'runTestMode') ? p.runTestMode(s) : r.runTestMode(s)
                        } else i.innerCallback('fail', i.error('invalid_charge', 'no_livemode_field')); else i.innerCallback('fail', i.error('invalid_credential', 'credential_is_incorrect')); else i.innerCallback('fail', i.error('invalid_credential', 'credential_is_undefined')); else i.innerCallback('fail', i.error('invalid_charge', 'no_credential'))
                    } else i.innerCallback('fail', i.error('invalid_charge', 'no_channel')); else i.innerCallback('fail', i.error('invalid_charge', 'no_charge_id'))
                }, setAPURL: function (e) {
                    o.APURL = e
                }
            }, n.exports = new PingppSDK
        }, {
            "./callbacks": 1,
            "./collection": 20,
            "./init": 21,
            "./mods": 24,
            "./payment_elements": 25,
            "./stash": 26,
            "./testmode": 27,
            "./version": 29
        }], 24: [function (e, n, t) {
            var a = {}.hasOwnProperty, r = {};
            n.exports = r, r.channels = {
                alipay_pc_direct: e('./channels/alipay_pc_direct'),
                alipay_wap: e('./channels/alipay_wap'),
                bfb_wap: e('./channels/bfb_wap'),
                cmb_wallet: e('./channels/cmb_wallet'),
                cp_b2b: e('./channels/cp_b2b'),
                fqlpay_qr: e('./channels/fqlpay_qr'),
                fqlpay_wap: e('./channels/fqlpay_wap'),
                isv_wap: e('./channels/isv_wap'),
                jdpay_wap: e('./channels/jdpay_wap'),
                qpay_pub: e('./channels/qpay_pub'),
                upacp_pc: e('./channels/upacp_pc'),
                upacp_wap: e('./channels/upacp_wap'),
                wx_lite: e('./channels/wx_lite'),
                wx_pub: e('./channels/wx_pub'),
                wx_wap: e('./channels/wx_wap'),
                yeepay_wap: e('./channels/yeepay_wap')
            }, r.extras = {ap: e('./channels/extras/ap')}, r.getChannelModule = function (e) {
                if (a.call(r.channels, e))return r.channels[e]
            }, r.getExtraModule = function (e) {
                if (a.call(r.extras, e))return r.extras[e]
            }
        }, {
            "./channels/alipay_pc_direct": 2,
            "./channels/alipay_wap": 3,
            "./channels/bfb_wap": 4,
            "./channels/cmb_wallet": 5,
            "./channels/cp_b2b": 7,
            "./channels/extras/ap": 8,
            "./channels/fqlpay_qr": 9,
            "./channels/fqlpay_wap": 10,
            "./channels/isv_wap": 11,
            "./channels/jdpay_wap": 12,
            "./channels/qpay_pub": 13,
            "./channels/upacp_pc": 14,
            "./channels/upacp_wap": 15,
            "./channels/wx_lite": 16,
            "./channels/wx_pub": 17,
            "./channels/wx_wap": 18,
            "./channels/yeepay_wap": 19
        }], 25: [function (e, n, t) {
            var a = e('./callbacks'), r = {}.hasOwnProperty;
            n.exports = {
                id: null,
                or_id: null,
                channel: null,
                app: null,
                credential: {},
                extra: null,
                livemode: null,
                order_no: null,
                time_expire: null,
                init: function (e) {
                    var n;
                    if ('string' == typeof e)try {
                        n = JSON.parse(e)
                    } catch (e) {
                        return void a.innerCallback('fail', a.error('json_decode_fail', e))
                    } else n = e;
                    {
                        if (void 0 !== n) {
                            if (r.call(n, 'object') && 'order' == n.object)if (r.call(n, 'charge') && null != n.charge) {
                                n.or_id = n.id, n.id = n.charge, n.order_no = n.merchant_order_no;
                                var t = n.charge_essentials;
                                n.channel = t.channel, n.credential = t.credential, n.extra = t.extra
                            } else r.call(n, 'charges') && null != n.charges && (n = n.charges.data[0]); else r.call(n, 'object') && 'recharge' == n.object && (n = n.charge);
                            for (var i in this)r.call(n, i) && (this[i] = n[i]);
                            return this
                        }
                        a.innerCallback('fail', a.error('json_decode_fail'))
                    }
                },
                clear: function () {
                    for (var e in this)'function' != typeof this[e] && (this[e] = null)
                }
            }
        }, {"./callbacks": 1}], 26: [function (e, n, t) {
            n.exports = {}
        }, {}], 27: [function (e, n, t) {
            var a = e('./utils'), r = {}.hasOwnProperty;
            n.exports = {
                PINGPP_MOCK_URL: 'http://sissi.pingxx.com/mock.php', runTestMode: function (e) {
                    var n = {ch_id: e.id, scheme: 'http', channel: e.channel};
                    r.call(e, 'order_no') ? n.order_no = e.order_no : r.call(e, 'orderNo') && (n.order_no = e.orderNo), r.call(e, 'time_expire') ? n.time_expire = e.time_expire : r.call(e, 'timeExpire') && (n.time_expire = e.timeExpire), r.call(e, 'extra') && (n.extra = encodeURIComponent(JSON.stringify(e.extra))), a.redirectTo(this.PINGPP_MOCK_URL + '?' + a.stringifyData(n))
                }
            }
        }, {"./utils": 28}], 28: [function (e, n, t) {
            var a = {}.hasOwnProperty, r = n.exports = {
                stringifyData: function (e, n, t) {
                    void 0 === t && (t = !1);
                    var r = [];
                    for (var i in e)a.call(e, i) && 'function' != typeof e[i] && ('bfb_wap' == n && 'url' == i || 'yeepay_wap' == n && 'mode' == i || 'channel_url' != i && r.push(i + '=' + (t ? encodeURIComponent(e[i]) : e[i])));
                    return r.join('&')
                }, request: function (e, n, t, i, l, o) {
                    if ('undefined' != typeof XMLHttpRequest) {
                        var c = new XMLHttpRequest;
                        if (void 0 !== c.timeout && (c.timeout = 6e3), 'GET' === (n = n.toUpperCase()) && 'object' == typeof t && t && (e += '?' + r.stringifyData(t, '', !0)), c.open(n, e, !0), void 0 !== o)for (var s in o)a.call(o, s) && c.setRequestHeader(s, o[s]);
                        'POST' === n ? (c.setRequestHeader('Content-type', 'application/json; charset=utf-8'), c.send(JSON.stringify(t))) : c.send(), void 0 === i && (i = function () {
                        }), void 0 === l && (l = function () {
                        }), c.onreadystatechange = function () {
                            4 == c.readyState && i(c.responseText, c.status, c)
                        }, c.onerror = function (e) {
                            l(c, 0, e)
                        }
                    } else console.log('Function XMLHttpRequest is undefined.')
                }, formSubmit: function (e, n, t) {
                    if ('undefined' != typeof window) {
                        var r = document.createElement('form');
                        r.setAttribute('method', n), r.setAttribute('action', e);
                        for (var i in t)if (a.call(t, i)) {
                            var l = document.createElement('input');
                            l.setAttribute('type', 'hidden'), l.setAttribute('name', i), l.setAttribute('value', t[i]), r.appendChild(l)
                        }
                        document.body.appendChild(r), r.submit()
                    } else console.log('Not a browser, form submit url: ' + e)
                }, randomString: function (e) {
                    void 0 === e && (e = 32);
                    for (var n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', t = n.length, a = '', r = 0; r < e; r++)a += n.charAt(Math.floor(Math.random() * t));
                    return a
                }, redirectTo: function (e) {
                    'undefined' != typeof window ? window.location.href = e : console.log('Not a browser, redirect url: ' + e)
                }, inWeixin: function () {
                    return 'undefined' != typeof navigator && -1 !== navigator.userAgent.toLowerCase().indexOf('micromessenger')
                }, inAlipay: function () {
                    return 'undefined' != typeof navigator && -1 !== navigator.userAgent.toLowerCase().indexOf('alipayclient')
                }, documentReady: function (e) {
                    'undefined' != typeof document ? 'loading' != document.readyState ? e() : document.addEventListener('DOMContentLoaded', e) : e()
                }, loadUrlJs: function (e, n, t) {
                    var a = document.getElementsByTagName('head')[0], r = null;
                    null == document.getElementById(e) ? ((r = document.createElement('script')).setAttribute('type', 'text/javascript'), r.setAttribute('src', n), r.setAttribute('id', e), r.async = !0, null != t && (r.onload = r.onreadystatechange = function () {
                        if (r.ready)return !1;
                        r.readyState && 'loaded' != r.readyState && 'complete' != r.readyState || (r.ready = !0, t())
                    }), a.appendChild(r)) : null != t && t()
                }
            }
        }, {}], 29: [function (e, n, t) {
            n.exports = {v: '2.1.13'}
        }, {}]
    }, {}, [23])(23)
});
//# sourceMappingURL=pingpp.js.map
