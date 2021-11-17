!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).CollectionLog = t()
}(this, (function() {
    "use strict";
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(t)
    }
    function t(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function n(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(o), !0).forEach((function(t) {
                n(e, t, o[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : r(Object(o)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
            }
            ))
        }
        return e
    }
    function i(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function c(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                }
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, c = !0, s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return c = e.done,
                e
            },
            e: function(e) {
                s = !0,
                i = e
            },
            f: function() {
                try {
                    c || null == n.return || n.return()
                } finally {
                    if (s)
                        throw i
                }
            }
        }
    }
    var s = {
        baseUrl: "//log.sharemusic5.com/pushlog_sdk",
        site: "",
        anm: "",
        subanm: ""
    }
      , l = {
        site: "",
        page: "",
        path: "",
        url: "",
        referrer: "",
        tz: "",
        uid: "",
        user_key: "",
        platform: "",
        ua: "",
        refer_did: "",
        refer_uid: "",
        refer_cha: "",
        refer_sub: ""
    };
    function u() {
        for (var e, t = new Array(16), n = 0; n < 16; n++)
            0 == (3 & n) && (e = 4294967296 * Math.random()),
            t[n] = e >>> ((3 & n) << 3) & 255;
        t[6] = 15 & t[6] | 64,
        t[8] = 63 & t[8] | 128;
        for (var r = "", o = 0; o < 16; o++) {
            o % 4 == 0 && o > 0 && (r += "-"),
            r += t[o].toString(16)
        }
        return r
    }
    function f(e) {
        var t = e.split("?")[1];
        if (!t || t.length < 1)
            return {};
        for (var n = t.split("&"), r = new Object, o = 0; o < n.length; o++) {
            var i = n[o].indexOf("=");
            if (-1 != i) {
                var a = n[o].substring(0, i)
                  , c = n[o].substring(i + 1);
                r[a] = decodeURIComponent(c)
            }
        }
        return r
    }
    function d(e, t) {
        if (t = t || "",
        !e)
            return "";
        var n = "";
        for (var r in e)
            "" !== e[r] && void 0 !== e[r] && (n += r + "=" + encodeURIComponent(e[r]) + "`");
        return t + n
    }
    function m() {
        performance = window.performance;
        var e = performance.timing
          , t = {};
        return t.redirect = e.redirectEnd - e.redirectStart,
        t.appcache = e.domainLookupStart - e.fetchStart,
        t.lookupDomain = e.domainLookupEnd - e.domainLookupStart,
        t.connect = e.connectEnd - e.connectStart,
        t.request = e.responseEnd - e.requestStart,
        t.domReady = e.domComplete - e.responseEnd,
        t.loadEvent = e.loadEventEnd - e.loadEventStart,
        t.fullLoadPage = e.loadEventEnd - e.navigationStart,
        t.ttfb = e.responseStart - e.navigationStart,
        t.fpt = e.responseEnd - e.fetchStart,
        t.tti = e.domInteractive - e.fetchStart,
        t.ready = e.domContentLoadedEventEnd - e.fetchStart,
        t.loadPage = e.loadEventStart - e.fetchStart,
        t.render = e.domContentLoadedEventEnd - e.responseEnd,
        t
    }
    function g() {
        performance = window.performance;
        for (var e = performance.getEntries(), t = [], n = 0; n < e.length; n++) {
            var r = e[n];
            /(link|script|img|httprequest)/gi.test(r.initiatorType) && t.push(r)
        }
        for (var o = [], i = 0, a = t; i < a.length; i++) {
            var c = a[i]
              , s = (c.name || "").match(/\/[\w\d-_\.]+\.[\w]{1,5}((\?|\&)[a-zA-Z=0-9-_\.\,\/]+){0,}/gi);
            if (s) {
                s = s[s.length - 1] || "";
                var l = parseInt(c.duration || 0);
                s && l && s.indexOf("track_ua.gif") < 0 && s.indexOf("collectionLog") < 0 && o.push({
                    name: s,
                    dur: l
                })
            }
        }
        return performance.clearResourceTimings(),
        o.length ? JSON.stringify(o) : ""
    }
    function p() {
        var t;
        if (performance = window.performance,
        performance.memory && "object" == e(performance.memory)) {
            var n = performance.memory;
            for (var r in t = {},
            n)
                t[r] = (+n[r] / 1048576).toFixed(2) + "mb"
        }
        return t
    }
    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        if (e) {
            for (var n, r = t || 10, o = e; r && o && (i(o),
            r--,
            o = o.parentElement || null,
            !n); )
                ;
            return n
        }
        function i(e) {
            var t = e.className || "";
            if (t.indexOf && (t.indexOf("on-log") > -1 || t.indexOf("on-visible") > -1)) {
                n = {};
                for (var r = e.attributes || [], o = 0; o < r.length; o++) {
                    var i = r[o];
                    if ("string" == typeof i) {
                        var a = i.split("=");
                        (i = {})[a[0]] = a[1]
                    }
                    var c = i.name || ""
                      , s = i.value || "";
                    if (c && c.indexOf("data-log") > -1) {
                        var l = c.replace(/data-(log-)?/, "");
                        n[l] = s
                    }
                }
            }
        }
    }
    function h(e, t, n) {
        void 0 === n && (n = 1);
        var r = e.getBoundingClientRect();
        return !(r.bottom < t.top + n || r.top > t.bottom - n || r.right < t.left + n || r.left > t.right - n)
    }
    function b() {
        return {
            top: 0,
            bottom: (document.documentElement || document.body).clientHeight,
            left: 0,
            right: (document.documentElement || document.body).clientWidth
        }
    }
    function y(e, t) {
        var n;
        return function() {
            var r = this
              , o = arguments;
            clearTimeout(n),
            n = setTimeout((function() {
                e.apply(r, o)
            }
            ), t)
        }
    }
    var w = function(e, t) {
        try {
            localStorage.setItem(e, t)
        } catch (e) {}
    }
      , O = function(e) {
        try {
            return localStorage.getItem(e)
        } catch (e) {}
    }
      , k = function(e, t) {
        try {
            sessionStorage.setItem(e, t)
        } catch (e) {}
    }
      , S = function(e) {
        try {
            return sessionStorage.getItem(e)
        } catch (e) {}
    }
      , E = function() {
        function n(e) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, n),
            this.config = this.createConfig(e),
            this.timer = (new Date).getTime(),
            this.param = this.createBaseParam(),
            this.selfParamData = {},
            this.initLogReport(),
            this.pressTime = void 0,
            this.stack = [],
            this.hiddenTime = 0
        }
        var r, a, c;
        return r = n,
        (a = [{
            key: "createConfig",
            value: function(e) {
                return Object.assign({}, s, e)
            }
        }, {
            key: "createBaseParam",
            value: function() {
                var t, n, r, o = f(window.location.search), i = (t = document.cookie,
                n = t.split(";"),
                r = {},
                n.forEach((function(e) {
                    var t = e.split("=")
                      , n = String(t[0]).trim()
                      , o = "";
                    if (t.length > 2)
                        for (var i = 1; i < t.length; i++)
                            o += decodeURIComponent(String(t[i]).trim()) + (i < t.length - 1 ? "=" : "");
                    else
                        o = decodeURIComponent(String(t[1]).trim());
                    r[n] = o
                }
                )),
                r), a = new Date, c = a.getTimezoneOffset() / .6, s = a.getTime(), d = u(), m = i.uid || O("uid") || d + "=" + s, g = S("sid") || d + "=" + s, p = O("userLogKey") || d, v = {
                    site: this.config.site || "",
                    page: window.document.title || "",
                    path: window.location.pathname + window.location.hash,
                    url: window.location.href,
                    hostname: window.location.hostname,
                    referrer: window.top.document.referrer,
                    tz: c,
                    uid: m,
                    sid: g,
                    user_key: p || "",
                    platform: window.navigator.platform,
                    ua: window.navigator.userAgent,
                    rs: window.screen.width + "x" + window.screen.height,
                    entry: o.entry || "",
                    channel: o.channel || "",
                    refer_did: o.did || "",
                    refer_uid: o.referUid || "",
                    refer_cha: o.cha || "",
                    refer_sub: o.sub || ""
                };
                return m && (w("uid", m),
                function(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , o = new Date;
                    o.setDate(o.getDate() + r),
                    "object" == e(n) && (n = JSON.stringify(n)),
                    document.cookie = t + "=" + escape(n) + (null == r ? "" : ";expires=" + o.toGMTString()) + ";path=/"
                }("uid", m, 7)),
                p && w("userLogKey", p),
                g && k("sid", g),
                Object.assign({}, l, v)
            }
        }, {
            key: "ajax",
            value: function(e) {
                var t, n = function(e) {
                    var t = [];
                    for (var n in e)
                        t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    return t.join("&")
                }(e.data);
                (t = window.XMLHttpRequest ? new XMLHttpRequest : ActionXObject("Microsoft.XMLHTTP")).onreadystatechange = function() {
                    4 == t.readyState && 200 == t.status && e.cb && e.cb()
                }
                ,
                t.open(e.type || "POST", e.url, !0),
                t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                t.send(n)
            }
        }, {
            key: "createBaseUrl",
            value: function(e) {
                return this.config.baseUrl || ""
            }
        }, {
            key: "createBaseDetail",
            value: function() {
                return d(this.param)
            }
        }, {
            key: "createLogData",
            value: function() {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , n = arguments.length > 2 ? arguments[2] : void 0
                  , r = arguments.length > 3 ? arguments[3] : void 0;
                n && "object" == e(n) && Object.keys(n).length && this.addParam(n),
                this.param.timer = (((new Date).getTime() - this.timer) / 1e3).toFixed(2);
                var o = this.createBaseDetail()
                  , i = navigator.connection || {}
                  , a = i.effectiveType || "";
                this.selfParamData.net = a,
                this.selfParamData.log_id = u(),
                this.selfParamData.log_time = parseInt((new Date).getTime() / 1e3),
                this.selfParamData.action = t;
                var c = d(this.selfParamData);
                return r && "object" == e(n) && Object.keys(r).length && (c += d(r, "`")),
                {
                    logCommon: o,
                    logData: c
                }
            }
        }, {
            key: "addParam",
            value: function(t) {
                if ("object" == e(t))
                    for (var n in t)
                        this.param[n] = t[n]
            }
        }, {
            key: "addSelfParam",
            value: function(t) {
                if ("object" == e(t))
                    for (var n in t)
                        this.selfParamData[n] = t[n]
            }
        }, {
            key: "send",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , n = arguments.length > 2 ? arguments[2] : void 0
                  , r = arguments.length > 3 ? arguments[3] : void 0;
                e && (this.stack.push({
                    storeType: e,
                    logType: t,
                    data: n,
                    detail: r
                }),
                this.stack.length <= 1 && this.sendRequest(this.stack.shift()))
            }
        }, {
            key: "sendRequest",
            value: function(e) {
                var t = e.storeType
                  , n = e.logType
                  , r = e.data
                  , o = e.detail
                  , i = this.createBaseUrl(t)
                  , a = this.createLogData(t, n, r, o)
                  , c = a.logCommon
                  , s = a.logData
                  , l = (new Date).getTime();
                this.ajax({
                    type: "post",
                    url: i,
                    data: {
                        anm: this.config.anm || "",
                        subanm: this.config.subanm || "",
                        request_time: l,
                        com_param: "",
                        log_common: window.btoa(unescape(c)),
                        log_data: window.btoa(unescape(s))
                    }
                })
            }
        }, {
            key: "sendBeacon",
            value: function(e) {
                var t = this.createBaseUrl()
                  , n = this.createLogData("", e || "page_leave", null, {})
                  , r = n.logCommon
                  , o = n.logData
                  , i = (new Date).getTime()
                  , a = {
                    anm: this.config.anm || "",
                    subanm: this.config.subanm || "",
                    request_time: i,
                    com_param: "",
                    log_common: window.btoa(unescape(r)),
                    log_data: window.btoa(unescape(o))
                };
                navigator.sendBeacon(t, JSON.stringify(a))
            }
        }, {
            key: "sendErr",
            value: function(e) {}
        }, {
            key: "sendPerf",
            value: function(e) {
                if (e && +this.config.uploadPerf && e.basePref)
                    for (var t in e.basePref)
                        if (+e.basePref[t] > 2e4)
                            return
            }
        }, {
            key: "sendLog",
            value: function(e, t, n) {
                e && this.send("logstore", e, t, n)
            }
        }, {
            key: "initErrorReport",
            value: function() {
                var t = this;
                window.addEventListener("error", (function(e) {
                    var n, r = e.srcElement;
                    if (e && r === window)
                        (n = {
                            column: e.colno || 1,
                            errorObj: e.error ? String(e.error) || e.error.message || e.error.toString() || e.error.toStack() : e.message || "no error obj",
                            file: e.filename,
                            msg: e.message || "",
                            row: e.lineno || 1
                        }).errorObj && n.errorObj.length > 100 && (n.errorObj = n.errorObj.substr(0, 100)),
                        n.errorObj.indexOf("track_ua.gif") < 0 && n.file.indexOf("track_ua.gif");
                    else if (r) {
                        var o = r.src || "";
                        o && o !== window.location.href && (n = {
                            column: "",
                            errorObj: r.outerHTML,
                            file: r.src || "",
                            msg: "error element",
                            row: ""
                        },
                        t.sendErr(n))
                    }
                }
                ), !0),
                window.addEventListener("unhandledrejection", (function(n) {
                    var r = {
                        column: 0,
                        row: 0,
                        file: "",
                        msg: "",
                        errorObj: ""
                    };
                    n && n.reason && "object" == e(n.reason) && (r.msg = n.reason.toString()),
                    n && n.reason && n.reason.stack && (r.errorObj = String(n.reason.stack).replace(/[\n\t\b]/g, " ").replace(/[ ]+/g, " ")),
                    t.sendErr(r)
                }
                ), !0)
            }
        }, {
            key: "initPerformanceReport",
            value: function() {
                var e = this
                  , t = window.performance;
                if (!t)
                    throw new Error("The Browser is unsupport Performace api");
                var n, r, o = 0;
                window.addEventListener("DOMContentLoaded", (function() {
                    document.body && (n = new MutationObserver((function(i) {
                        o >= 100 ? e.removeObserver(n) : (clearTimeout(r),
                        r = null,
                        r = setTimeout((function() {
                            e.removeObserver(n)
                        }
                        ), 2e3),
                        t.mark("obsSnapshot"),
                        o++)
                    }
                    ))).observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }
                ), !1),
                window.addEventListener("load", (function() {
                    var r = setTimeout((function() {
                        var o = m();
                        clearTimeout(r),
                        r = null,
                        e.sendPerf({
                            basePref: o
                        }),
                        setInterval((function() {
                            var r;
                            +e.config.uploadSource && (r = g());
                            var o = p()
                              , i = null;
                            if (n) {
                                var a = t.getEntriesByName("obsSnapshot");
                                i = a.length && (a.pop() || {}).startTime || null
                            }
                            e.sendPerf({
                                source: r,
                                memory: o,
                                final: i
                            })
                        }
                        ), e.config.loopCollPrefTime)
                    }
                    ), e.config.collectPrefTime)
                }
                ), !1)
            }
        }, {
            key: "collectAndSendPref",
            value: function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                t && (e = m());
                var n = g();
                this.sendPerf({
                    basePref: e || "",
                    source: n
                })
            }
        }, {
            key: "initLogReport",
            value: function() {
                var e = this;
                "undefined" != typeof window && (window.document.addEventListener("click", (function(t) {
                    var n = v(t.target);
                    if (n) {
                        var r = n.action
                          , a = i(n, ["action"]);
                        e.sendLog(r || "click", null, o(o({}, a), {}, {
                            click_pos: t.clientX + "x" + t.clientY
                        }))
                    }
                }
                ), !0),
                window.addEventListener("scroll", y((function(t) {
                    e.collectVisible()
                }
                ), 250)),
                navigator.sendBeacon && window.addEventListener("visibilitychange", (function(t) {
                    document.hidden || "hidden" === document.visibilityState ? 0 === e.hiddenTime && (e.sendBeacon(window.pageLogLeaveAction || "visibility_hidden_action"),
                    e.hiddenTime++) : "visible" === document.visibilityState && (e.hiddenTime = 0)
                }
                )))
            }
        }, {
            key: "collectVisible",
            value: function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ((t = Object.assign({}, t)).wrap ? "string" == typeof t.wrap ? e = document.getElementsByClassName(t.wrap)[0] : t.wrap && 1 === t.wrap.nodeType && (e = t.wrap) : e = document,
                e && document.body.getBoundingClientRect) {
                    var n, r, o, i = t.className || "on-visible", a = Array.prototype.slice.call(e.getElementsByClassName(i)), c = a.length, s = [];
                    for (r = 0; r < c; r++)
                        if (!(o = a[r]).getAttribute("isVisible")) {
                            if (!n) {
                                if (n = b(),
                                e !== document) {
                                    var l = e.getBoundingClientRect();
                                    n.top = Math.max(n.top, l.top),
                                    n.bottom = Math.min(n.bottom, l.bottom),
                                    n.left = Math.max(n.left, l.left),
                                    n.right = Math.min(n.right, l.right)
                                }
                                if (n.top >= n.bottom || n.left >= n.right)
                                    return
                            }
                            h(o, n) && s.push(o)
                        }
                    s.length && "function" == typeof t.callback && t.callback(s);
                    for (var u = 0, f = s; u < f.length; u++) {
                        var d = f[u];
                        d.setAttribute("isVisible", "1")
                    }
                    for (var m = [], g = 0, p = s; g < p.length; g++) {
                        var y = p[g]
                          , w = v(y, 1);
                        w && Object.keys(w) && m.push(w)
                    }
                    return m.length && this.sendLog("visible", null, {
                        logs: JSON.stringify(m)
                    }),
                    s
                }
            }
        }, {
            key: "bindVisibleScroll",
            value: function(e) {
                var t, n = this;
                e && ("string" == typeof e ? t = document.getElementsByClassName(e)[0] : "string" == typeof e.wrap ? t = document.getElementsByClassName(e.wrap)[0] : e.wrap && 1 === e.wrap.nodeType && (t = e.wrap),
                t && (this.collectVisible({
                    wrap: t,
                    className: e.className,
                    callback: e.callback
                }),
                t.addEventListener("scroll", y((function(t) {
                    n.collectVisible({
                        wrap: t.target,
                        className: e.className,
                        callback: e.callback
                    })
                }
                ), 250))))
            }
        }, {
            key: "bindLongPress",
            value: function(e, t, n) {
                var r, o = this;
                e && ("string" == typeof e ? r = document.getElementsByClassName(e)[0] : "string" == typeof e.wrap ? r = document.getElementsByClassName(e.wrap)[0] : e.wrap && 1 === e.wrap.nodeType && (r = e.wrap),
                r && (r.getAttribute("isBindPress") || (r.setAttribute("isBindPress", "1"),
                r.addEventListener("touchstart", (function() {
                    o.pressTime = Date.now()
                }
                )),
                r.addEventListener("touchend", (function() {
                    Date.now() - o.pressTime > 300 && o.sendLog("longpress", t, n)
                }
                )))))
            }
        }, {
            key: "removeEvent",
            value: function(e, t, n) {
                e && t && e.EventListener && e.removeEventListener(t, n || function() {}
                , !1)
            }
        }, {
            key: "removeObserver",
            value: function(e) {
                e && ("function" == typeof e.takeRecord && e.takeRecord(),
                "function" == typeof e.disconnect && e.disconnect(),
                e = null)
            }
        }]) && t(r.prototype, a),
        c && t(r, c),
        n
    }();
    return function() {
        Object.assign || (Object.assign = function() {
            var t = arguments;
            if (t.length) {
                var n, r = {}, o = c(t);
                try {
                    for (o.s(); !(n = o.n()).done; ) {
                        var i = n.value;
                        if (i && "object" === e(i))
                            for (var a in i)
                                r[a] = i[a]
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return r
            }
        }
        ),
        window.MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || void 0,
        window.mutationObserverSupport = !!window.MutationObserver;
        var t = document.querySelector("#collectionLog");
        if (!t) {
            var n, r = c(document.querySelectorAll("script[src]"));
            try {
                for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value;
                    if (/collection(-)?log/i.test(o.getAttribute("src"))) {
                        t = o;
                        break
                    }
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
        }
        if (t) {
            var i = f(t.getAttribute("src"));
            i.autoStart ? window._clog = new E(i) : window.collectionLogConfig && (window._clog = new E(window.collectionLogConfig))
        }
    }(),
    E
}
));
