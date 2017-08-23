


("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    function i(t, e) {
        e = e || it;
        var i = e.createElement("script");
        i.text = t,
            e.head.appendChild(i).parentNode.removeChild(i)
    }
    function n(t) {
        var e = !!t && "length" in t && t.length,
            i = mt.type(t);
        return "function" !== i && !mt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function s(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    function o(t, e, i) {
        return mt.isFunction(e) ? mt.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? mt.grep(t, function (t) {
            return t === e !== i
        }) : "string" != typeof e ? mt.grep(t, function (t) {
            return at.call(e, t) > -1 !== i
        }) : kt.test(e) ? mt.filter(e, t, i) : (e = mt.filter(e, t), mt.grep(t, function (t) {
            return at.call(e, t) > -1 !== i && 1 === t.nodeType
        }))
    }
    function r(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t
    }
    function a(t) {
        var e = {};
        return mt.each(t.match(Lt) || [], function (t, i) {
            e[i] = !0
        }),
            e
    }
    function l(t) {
        return t
    }
    function c(t) {
        throw t
    }
    function h(t, e, i, n) {
        var s;
        try {
            t && mt.isFunction(s = t.promise) ? s.call(t).done(e).fail(i) : t && mt.isFunction(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    function u() {
        it.removeEventListener("DOMContentLoaded", u),
            t.removeEventListener("load", u),
            mt.ready()
    }
    function d() {
        this.expando = mt.expando + d.uid++
    }
    function p(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Nt.test(t) ? JSON.parse(t) : t)
    }
    function f(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(Bt, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = p(i)
                } catch (t) {}

                jt.set(t, e, i)
            } else
                i = void 0;
        return i
    }
    function m(t, e, i, n) {
        var s,
            o = 1,
            r = 20,
            a = n ? function () {
                return n.cur()
            }
                : function () {
                    return mt.css(t, e, "")
                },
            l = a(),
            c = i && i[3] || (mt.cssNumber[e] ? "" : "px"),
            h = (mt.cssNumber[e] || "px" !== c && +l) && Ft.exec(mt.css(t, e));
        if (h && h[3] !== c) {
            c = c || h[3],
                i = i || [],
                h = +l || 1;
            do
                o = o || ".5", h /= o, mt.style(t, e, h + c);
            while (o !== (o = a() / l) && 1 !== o && --r)
        }
        return i && (h = +h || +l || 0, s = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = s)),
            s
    }
    function g(t) {
        var e,
            i = t.ownerDocument,
            n = t.nodeName,
            s = qt[n];
        return s ? s : (e = i.body.appendChild(i.createElement(n)), s = mt.css(e, "display"), e.parentNode.removeChild(e), "none" === s && (s = "block"), qt[n] = s, s)
    }
    function _(t, e) {
        for (var i, n, s = [], o = 0, r = t.length; o < r; o++)
            n = t[o], n.style && (i = n.style.display, e ? ("none" === i && (s[o] = $t.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && Vt(n) && (s[o] = g(n))) : "none" !== i && (s[o] = "none", $t.set(n, "display", i)));
        for (o = 0; o < r; o++)
            null != s[o] && (t[o].style.display = s[o]);
        return t
    }
    function v(t, e) {
        var i;
        return i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
            void 0 === e || e && s(t, e) ? mt.merge([t], i) : i
    }
    function y(t, e) {
        for (var i = 0, n = t.length; i < n; i++)
            $t.set(t[i], "globalEval", !e || $t.get(e[i], "globalEval"))
    }
    function b(t, e, i, n, s) {
        for (var o, r, a, l, c, h, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
            if (o = t[p], o || 0 === o)
                if ("object" === mt.type(o))
                    mt.merge(d, o.nodeType ? [o] : o);
                else if (Kt.test(o)) {
                    for (r = r || u.appendChild(e.createElement("div")), a = (Ut.exec(o) || ["", ""])[1].toLowerCase(), l = Xt[a] || Xt._default, r.innerHTML = l[1] + mt.htmlPrefilter(o) + l[2], h = l[0]; h--; )
                        r = r.lastChild;
                    mt.merge(d, r.childNodes),
                        r = u.firstChild,
                        r.textContent = ""
                } else
                    d.push(e.createTextNode(o));
        for (u.textContent = "", p = 0; o = d[p++]; )
            if (n && mt.inArray(o, n) > -1)
                s && s.push(o);
            else if (c = mt.contains(o.ownerDocument, o), r = v(u.appendChild(o), "script"), c && y(r), i)
                for (h = 0; o = r[h++]; )
                    Gt.test(o.type || "") && i.push(o);
        return u
    }
    function w() {
        return !0
    }
    function x() {
        return !1
    }
    function S() {
        try {
            return it.activeElement
        } catch (t) {}

    }
    function C(t, e, i, n, s, o) {
        var r,
            a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e)
                C(t, a, i, n, e[a], o);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), s === !1)
            s = x;
        else if (!s)
            return t;
        return 1 === o && (r = s, s = function (t) {
            return mt().off(t),
                r.apply(this, arguments)
        }, s.guid = r.guid || (r.guid = mt.guid++)),
            t.each(function () {
                mt.event.add(this, e, s, n, i)
            })
    }
    function k(t, e) {
        return s(t, "table") && s(11 !== e.nodeType ? e : e.firstChild, "tr") ? mt(">tbody", t)[0] || t : t
    }
    function T(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
            t
    }
    function A(t) {
        var e = se.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
            t
    }
    function M(t, e) {
        var i,
            n,
            s,
            o,
            r,
            a,
            l,
            c;
        if (1 === e.nodeType) {
            if ($t.hasData(t) && (o = $t.access(t), r = $t.set(e, o), c = o.events)) {
                delete r.handle,
                    r.events = {};
                for (s in c)
                    for (i = 0, n = c[s].length; i < n; i++)
                        mt.event.add(e, s, c[s][i])
            }
            jt.hasData(t) && (a = jt.access(t), l = mt.extend({}, a), jt.set(e, l))
        }
    }
    function E(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Yt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }
    function I(t, e, n, s) {
        e = ot.apply([], e);
        var o,
            r,
            a,
            l,
            c,
            h,
            u = 0,
            d = t.length,
            p = d - 1,
            f = e[0],
            m = mt.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !pt.checkClone && ne.test(f))
            return t.each(function (i) {
                var o = t.eq(i);
                m && (e[0] = f.call(this, i, o.html())),
                    I(o, e, n, s)
            });
        if (d && (o = b(e, t[0].ownerDocument, !1, t, s), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || s)) {
            for (a = mt.map(v(o, "script"), T), l = a.length; u < d; u++)
                c = o, u !== p && (c = mt.clone(c, !0, !0), l && mt.merge(a, v(c, "script"))), n.call(t[u], c, u);
            if (l)
                for (h = a[a.length - 1].ownerDocument, mt.map(a, A), u = 0; u < l; u++)
                    c = a[u], Gt.test(c.type || "") && !$t.access(c, "globalEval") && mt.contains(h, c) && (c.src ? mt._evalUrl && mt._evalUrl(c.src) : i(c.textContent.replace(oe, ""), h))
        }
        return t
    }
    function L(t, e, i) {
        for (var n, s = e ? mt.filter(e, t) : t, o = 0; null != (n = s[o]); o++)
            i || 1 !== n.nodeType || mt.cleanData(v(n)), n.parentNode && (i && mt.contains(n.ownerDocument, n) && y(v(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    function O(t, e, i) {
        var n,
            s,
            o,
            r,
            a = t.style;
        return i = i || le(t),
        i && (r = i.getPropertyValue(e) || i[e], "" !== r || mt.contains(t.ownerDocument, t) || (r = mt.style(t, e)), !pt.pixelMarginRight() && ae.test(r) && re.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)),
            void 0 !== r ? r + "" : r
    }
    function P(t, e) {
        return {
            get : function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function D(t) {
        if (t in fe)
            return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = pe.length; i--; )
            if (t = pe[i] + e, t in fe)
                return t
    }
    function R(t) {
        var e = mt.cssProps[t];
        return e || (e = mt.cssProps[t] = D(t) || t),
            e
    }
    function $(t, e, i) {
        var n = Ft.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }
    function j(t, e, i, n, s) {
        var o,
            r = 0;
        for (o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2)
            "margin" === i && (r += mt.css(t, i + zt[o], !0, s)), n ? ("content" === i && (r -= mt.css(t, "padding" + zt[o], !0, s)), "margin" !== i && (r -= mt.css(t, "border" + zt[o] + "Width", !0, s))) : (r += mt.css(t, "padding" + zt[o], !0, s), "padding" !== i && (r += mt.css(t, "border" + zt[o] + "Width", !0, s)));
        return r
    }
    function N(t, e, i) {
        var n,
            s = le(t),
            o = O(t, e, s),
            r = "border-box" === mt.css(t, "boxSizing", !1, s);
        return ae.test(o) ? o : (n = r && (pt.boxSizingReliable() || o === t.style[e]), "auto" === o && (o = t["offset" + e[0].toUpperCase() + e.slice(1)]), o = parseFloat(o) || 0, o + j(t, e, i || (r ? "border" : "content"), n, s) + "px")
    }
    function B(t, e, i, n, s) {
        return new B.prototype.init(t, e, i, n, s)
    }
    function H() {
        ge && (it.hidden === !1 && t.requestAnimationFrame ? t.requestAnimationFrame(H) : t.setTimeout(H, mt.fx.interval), mt.fx.tick())
    }
    function F() {
        return t.setTimeout(function () {
            me = void 0
        }),
            me = mt.now()
    }
    function z(t, e) {
        var i,
            n = 0,
            s = {
                height : t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e)
            i = zt[n], s["margin" + i] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t),
            s
    }
    function V(t, e, i) {
        for (var n, s = (Y.tweeners[e] || []).concat(Y.tweeners["*"]), o = 0, r = s.length; o < r; o++)
            if (n = s[o].call(i, e, t))
                return n
    }
    function W(t, e, i) {
        var n,
            s,
            o,
            r,
            a,
            l,
            c,
            h,
            u = "width" in e || "height" in e,
            d = this,
            p = {},
            f = t.style,
            m = t.nodeType && Vt(t),
            g = $t.get(t, "fxshow");
        i.queue || (r = mt._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
            r.unqueued || a()
        }), r.unqueued++, d.always(function () {
            d.always(function () {
                r.unqueued--,
                mt.queue(t, "fx").length || r.empty.fire()
            })
        }));
        for (n in e)
            if (s = e[n], _e.test(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n])
                        continue;
                    m = !0
                }
                p[n] = g && g[n] || mt.style(t, n)
            }
        if (l = !mt.isEmptyObject(e), l || !mt.isEmptyObject(p)) {
            u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], c = g && g.display, null == c && (c = $t.get(t, "display")), h = mt.css(t, "display"), "none" === h && (c ? h = c : (_([t], !0), c = t.style.display || c, h = mt.css(t, "display"), _([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === mt.css(t, "float") && (l || (d.done(function () {
                f.display = c
            }), null == c && (h = f.display, c = "none" === h ? "" : h)), f.display = "inline-block")),
            i.overflow && (f.overflow = "hidden", d.always(function () {
                f.overflow = i.overflow[0],
                    f.overflowX = i.overflow[1],
                    f.overflowY = i.overflow[2]
            })),
                l = !1;
            for (n in p)
                l || (g ? "hidden" in g && (m = g.hidden) : g = $t.access(t, "fxshow", {
                    display : c
                }), o && (g.hidden = !m), m && _([t], !0), d.done(function () {
                    m || _([t]),
                        $t.remove(t, "fxshow");
                    for (n in p)
                        mt.style(t, n, p[n])
                })), l = V(m ? g[n] : 0, n, d), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }
    function q(t, e) {
        var i,
            n,
            s,
            o,
            r;
        for (i in t)
            if (n = mt.camelCase(i), s = e[n], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = mt.cssHooks[n], r && "expand" in r) {
                o = r.expand(o),
                    delete t[n];
                for (i in o)
                    i in t || (t[i] = o[i], e[i] = s)
            } else
                e[n] = s
    }
    function Y(t, e, i) {
        var n,
            s,
            o = 0,
            r = Y.prefilters.length,
            a = mt.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s)
                    return !1;
                for (var e = me || F(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, r = 0, l = c.tweens.length; r < l; r++)
                    c.tweens[r].run(o);
                return a.notifyWith(t, [c, o, i]),
                    o < 1 && l ? i : (l || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem : t,
                props : mt.extend({}, e),
                opts : mt.extend(!0, {
                    specialEasing : {},
                    easing : mt.easing._default
                }, i),
                originalProperties : e,
                originalOptions : i,
                startTime : me || F(),
                duration : i.duration,
                tweens : [],
                createTween : function (e, i) {
                    var n = mt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n),
                        n
                },
                stop : function (e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (s)
                        return this;
                    for (s = !0; i < n; i++)
                        c.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]),
                        this
                }
            }),
            h = c.props;
        for (q(h, c.opts.specialEasing); o < r; o++)
            if (n = Y.prefilters[o].call(c, t, h, c.opts))
                return mt.isFunction(n.stop) && (mt._queueHooks(c.elem, c.opts.queue).stop = mt.proxy(n.stop, n)), n;
        return mt.map(h, V, c),
        mt.isFunction(c.opts.start) && c.opts.start.call(t, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            mt.fx.timer(mt.extend(l, {
                elem : t,
                anim : c,
                queue : c.opts.queue
            })),
            c
    }
    function U(t) {
        var e = t.match(Lt) || [];
        return e.join(" ")
    }
    function G(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function X(t, e, i, n) {
        var s;
        if (Array.isArray(e))
            mt.each(e, function (e, s) {
                i || Me.test(t) ? n(t, s) : X(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
            });
        else if (i || "object" !== mt.type(e))
            n(t, e);
        else
            for (s in e)
                X(t + "[" + s + "]", e[s], i, n)
    }
    function K(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n,
                s = 0,
                o = e.toLowerCase().match(Lt) || [];
            if (mt.isFunction(i))
                for (; n = o[s++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }
    function J(t, e, i, n) {
        function s(a) {
            var l;
            return o[a] = !0,
                mt.each(t[a] || [], function (t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                }),
                l
        }
        var o = {},
            r = t === He;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }
    function Z(t, e) {
        var i,
            n,
            s = mt.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && mt.extend(!0, t, n),
            t
    }
    function Q(t, e, i) {
        for (var n, s, o, r, a = t.contents, l = t.dataTypes; "*" === l[0]; )
            l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (s in a)
                if (a[s] && a[s].test(n)) {
                    l.unshift(s);
                    break
                }
        if (l[0]in i)
            o = l[0];
        else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                r || (r = s)
            }
            o = o || r
        }
        if (o)
            return o !== l[0] && l.unshift(o), i[o]
    }
    function tt(t, e, i, n) {
        var s,
            o,
            r,
            a,
            l,
            c = {},
            h = t.dataTypes.slice();
        if (h[1])
            for (r in t.converters)
                c[r.toLowerCase()] = t.converters[r];
        for (o = h.shift(); o; )
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (r = c[l + " " + o] || c["* " + o], !r)
                        for (s in c)
                            if (a = s.split(" "), a[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                r === !0 ? r = c[s] : c[s] !== !0 && (o = a[0], h.unshift(a[1]));
                                break
                            }
                    if (r !== !0)
                        if (r && t.throws)
                            e = r(e);
                        else
                            try {
                                e = r(e)
                            } catch (t) {
                                return {
                                    state : "parsererror",
                                    error : r ? t : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state : "success",
            data : e
        }
    }
    var et = [],
        it = t.document,
        nt = Object.getPrototypeOf,
        st = et.slice,
        ot = et.concat,
        rt = et.push,
        at = et.indexOf,
        lt = {},
        ct = lt.toString,
        ht = lt.hasOwnProperty,
        ut = ht.toString,
        dt = ut.call(Object),
        pt = {},
        ft = "3.2.1",
        mt = function (t, e) {
            return new mt.fn.init(t, e)
        },
        gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        _t = /^-ms-/,
        vt = /-([a-z])/g,
        yt = function (t, e) {
            return e.toUpperCase()
        };
    mt.fn = mt.prototype = {
        jquery : ft,
        constructor : mt,
        length : 0,
        toArray : function () {
            return st.call(this)
        },
        get : function (t) {
            return null == t ? st.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack : function (t) {
            var e = mt.merge(this.constructor(), t);
            return e.prevObject = this,
                e
        },
        each : function (t) {
            return mt.each(this, t)
        },
        map : function (t) {
            return this.pushStack(mt.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        },
        slice : function () {
            return this.pushStack(st.apply(this, arguments))
        },
        first : function () {
            return this.eq(0)
        },
        last : function () {
            return this.eq(-1)
        },
        eq : function (t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        },
        end : function () {
            return this.prevObject || this.constructor()
        },
        push : rt,
        sort : et.sort,
        splice : et.splice
    },
        mt.extend = mt.fn.extend = function () {
            var t,
                e,
                i,
                n,
                s,
                o,
                r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || mt.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t)
                        i = r[e], n = t[e], r !== n && (c && n && (mt.isPlainObject(n) || (s = Array.isArray(n))) ? (s ? (s = !1, o = i && Array.isArray(i) ? i : []) : o = i && mt.isPlainObject(i) ? i : {}, r[e] = mt.extend(c, o, n)) : void 0 !== n && (r[e] = n));
            return r
        },
        mt.extend({
            expando : "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
            isReady : !0,
            error : function (t) {
                throw new Error(t)
            },
            noop : function () {},
            isFunction : function (t) {
                return "function" === mt.type(t)
            },
            isWindow : function (t) {
                return null != t && t === t.window
            },
            isNumeric : function (t) {
                var e = mt.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject : function (t) {
                var e,
                    i;
                return !(!t || "[object Object]" !== ct.call(t)) && (!(e = nt(t)) || (i = ht.call(e, "constructor") && e.constructor, "function" == typeof i && ut.call(i) === dt))
            },
            isEmptyObject : function (t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            type : function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t
            },
            globalEval : function (t) {
                i(t)
            },
            camelCase : function (t) {
                return t.replace(_t, "ms-").replace(vt, yt)
            },
            each : function (t, e) {
                var i,
                    s = 0;
                if (n(t))
                    for (i = t.length; s < i && e.call(t[s], s, t[s]) !== !1; s++);
                else
                    for (s in t)
                        if (e.call(t[s], s, t[s]) === !1)
                            break;
                return t
            },
            trim : function (t) {
                return null == t ? "" : (t + "").replace(gt, "")
            },
            makeArray : function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? mt.merge(i, "string" == typeof t ? [t] : t) : rt.call(i, t)),
                    i
            },
            inArray : function (t, e, i) {
                return null == e ? -1 : at.call(e, t, i)
            },
            merge : function (t, e) {
                for (var i = +e.length, n = 0, s = t.length; n < i; n++)
                    t[s++] = e[n];
                return t.length = s,
                    t
            },
            grep : function (t, e, i) {
                for (var n, s = [], o = 0, r = t.length, a = !i; o < r; o++)
                    n = !e(t[o], o), n !== a && s.push(t[o]);
                return s
            },
            map : function (t, e, i) {
                var s,
                    o,
                    r = 0,
                    a = [];
                if (n(t))
                    for (s = t.length; r < s; r++)
                        o = e(t[r], r, i), null != o && a.push(o);
                else
                    for (r in t)
                        o = e(t[r], r, i), null != o && a.push(o);
                return ot.apply([], a)
            },
            guid : 1,
            proxy : function (t, e) {
                var i,
                    n,
                    s;
                if ("string" == typeof e && (i = t[e], e = t, t = i), mt.isFunction(t))
                    return n = st.call(arguments, 2), s = function () {
                        return t.apply(e || this, n.concat(st.call(arguments)))
                    },
                        s.guid = t.guid = t.guid || mt.guid++,
                        s
            },
            now : Date.now,
            support : pt
        }),
    "function" == typeof Symbol && (mt.fn[Symbol.iterator] = et[Symbol.iterator]),
        mt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            lt["[object " + e + "]"] = e.toLowerCase()
        });
    var bt = function (t) {
        function e(t, e, i, n) {
            var s,
                o,
                r,
                a,
                l,
                c,
                h,
                d = e && e.ownerDocument,
                f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f)
                return i;
            if (!n && ((e ? e.ownerDocument || e : F) !== P && O(e), e = e || P, R)) {
                if (11 !== f && (l = _t.exec(t)))
                    if (s = l[1]) {
                        if (9 === f) {
                            if (!(r = e.getElementById(s)))
                                return i;
                            if (r.id === s)
                                return i.push(r), i
                        } else if (d && (r = d.getElementById(s)) && B(e, r) && r.id === s)
                            return i.push(r), i
                    } else {
                        if (l[2])
                            return Z.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = l[3]) && x.getElementsByClassName && e.getElementsByClassName)
                            return Z.apply(i, e.getElementsByClassName(s)), i
                    }
                if (x.qsa && !Y[t + " "] && (!$ || !$.test(t))) {
                    if (1 !== f)
                        d = e, h = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(wt, xt) : e.setAttribute("id", a = H), c = T(t), o = c.length; o--; )
                            c[o] = "#" + a + " " + p(c[o]);
                        h = c.join(","),
                            d = vt.test(t) && u(e.parentNode) || e
                    }
                    if (h)
                        try {
                            return Z.apply(i, d.querySelectorAll(h)),
                                i
                        } catch (t) {}

                        finally {
                            a === H && e.removeAttribute("id")
                        }
                }
            }
            return M(t.replace(at, "$1"), e, i, n)
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > S.cacheLength && delete t[e.shift()],
                    t[i + " "] = n
            }
            var e = [];
            return t
        }
        function n(t) {
            return t[H] = !0,
                t
        }
        function s(t) {
            var e = P.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            }
            finally {
                e.parentNode && e.parentNode.removeChild(e),
                    e = null
            }
        }
        function o(t, e) {
            for (var i = t.split("|"), n = i.length; n--; )
                S.attrHandle[i[n]] = e
        }
        function r(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }
        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }
        function c(t) {
            return function (e) {
                return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ct(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }
        function h(t) {
            return n(function (e) {
                return e = +e,
                    n(function (i, n) {
                        for (var s, o = t([], i.length, e), r = o.length; r--; )
                            i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                    })
            })
        }
        function u(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function d() {}

        function p(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++)
                n += t[e].value;
            return n
        }
        function f(t, e, i) {
            var n = e.dir,
                s = e.next,
                o = s || n,
                r = i && "parentNode" === o,
                a = V++;
            return e.first ? function (e, i, s) {
                for (; e = e[n]; )
                    if (1 === e.nodeType || r)
                        return t(e, i, s);
                return !1
            }
                : function (e, i, l) {
                    var c,
                        h,
                        u,
                        d = [z, a];
                    if (l) {
                        for (; e = e[n]; )
                            if ((1 === e.nodeType || r) && t(e, i, l))
                                return !0
                    } else
                        for (; e = e[n]; )
                            if (1 === e.nodeType || r)
                                if (u = e[H] || (e[H] = {}), h = u[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase())
                                    e = e[n] || e;
                                else {
                                    if ((c = h[o]) && c[0] === z && c[1] === a)
                                        return d[2] = c[2];
                                    if (h[o] = d, d[2] = t(e, i, l))
                                        return !0
                                }
                    return !1
                }
        }
        function m(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var s = t.length; s--; )
                    if (!t[s](e, i, n))
                        return !1;
                return !0
            }
                : t[0]
        }
        function g(t, i, n) {
            for (var s = 0, o = i.length; s < o; s++)
                e(t, i[s], n);
            return n
        }
        function _(t, e, i, n, s) {
            for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++)
                (o = t[a]) && (i && !i(o, n, s) || (r.push(o), c && e.push(a)));
            return r
        }
        function v(t, e, i, s, o, r) {
            return s && !s[H] && (s = v(s)),
            o && !o[H] && (o = v(o, r)),
                n(function (n, r, a, l) {
                    var c,
                        h,
                        u,
                        d = [],
                        p = [],
                        f = r.length,
                        m = n || g(e || "*", a.nodeType ? [a] : a, []),
                        v = !t || !n && e ? m : _(m, d, t, a, l),
                        y = i ? o || (n ? t : f || s) ? [] : r : v;
                    if (i && i(v, y, a, l), s)
                        for (c = _(y, p), s(c, [], a, l), h = c.length; h--; )
                            (u = c[h]) && (y[p[h]] = !(v[p[h]] = u));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (c = [], h = y.length; h--; )
                                    (u = y[h]) && c.push(v[h] = u);
                                o(null, y = [], c, l)
                            }
                            for (h = y.length; h--; )
                                (u = y[h]) && (c = o ? tt(n, u) : d[h]) > -1 && (n[c] = !(r[c] = u))
                        }
                    } else
                        y = _(y === r ? y.splice(f, y.length) : y), o ? o(null, r, y, l) : Z.apply(r, y)
                })
        }
        function y(t) {
            for (var e, i, n, s = t.length, o = S.relative[t[0].type], r = o || S.relative[" "], a = o ? 1 : 0, l = f(function (t) {
                return t === e
            }, r, !0), c = f(function (t) {
                return tt(e, t) > -1
            }, r, !0), h = [function (t, i, n) {
                var s = !o && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                return e = null,
                    s
            }
            ]; a < s; a++)
                if (i = S.relative[t[a].type])
                    h = [f(m(h), i)];
                else {
                    if (i = S.filter[t[a].type].apply(null, t[a].matches), i[H]) {
                        for (n = ++a; n < s && !S.relative[t[n].type]; n++);
                        return v(a > 1 && m(h), a > 1 && p(t.slice(0, a - 1).concat({
                                value : " " === t[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), i, a < n && y(t.slice(a, n)), n < s && y(t = t.slice(n)), n < s && p(t))
                    }
                    h.push(i)
                }
            return m(h)
        }
        function b(t, i) {
            var s = i.length > 0,
                o = t.length > 0,
                r = function (n, r, a, l, c) {
                    var h,
                        u,
                        d,
                        p = 0,
                        f = "0",
                        m = n && [],
                        g = [],
                        v = E,
                        y = n || o && S.find.TAG("*", c),
                        b = z += null == v ? 1 : Math.random() || .1,
                        w = y.length;
                    for (c && (E = r === P || r || c); f !== w && null != (h = y[f]); f++) {
                        if (o && h) {
                            for (u = 0, r || h.ownerDocument === P || (O(h), a = !R); d = t[u++]; )
                                if (d(h, r || P, a)) {
                                    l.push(h);
                                    break
                                }
                            c && (z = b)
                        }
                        s && ((h = !d && h) && p--, n && m.push(h))
                    }
                    if (p += f, s && f !== p) {
                        for (u = 0; d = i[u++]; )
                            d(m, g, r, a);
                        if (n) {
                            if (p > 0)
                                for (; f--; )
                                    m[f] || g[f] || (g[f] = K.call(l));
                            g = _(g)
                        }
                        Z.apply(l, g),
                        c && !n && g.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (z = b, E = v),
                        m
                };
            return s ? n(r) : r
        }
        var w,
            x,
            S,
            C,
            k,
            T,
            A,
            M,
            E,
            I,
            L,
            O,
            P,
            D,
            R,
            $,
            j,
            N,
            B,
            H = "sizzle" + 1 * new Date,
            F = t.document,
            z = 0,
            V = 0,
            W = i(),
            q = i(),
            Y = i(),
            U = function (t, e) {
                return t === e && (L = !0),
                    0
            },
            G = {}

                .hasOwnProperty,
            X = [],
            K = X.pop,
            J = X.push,
            Z = X.push,
            Q = X.slice,
            tt = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e)
                        return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            rt = new RegExp(it + "+", "g"),
            at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"),
            ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            ut = new RegExp(ot),
            dt = new RegExp("^" + nt + "$"),
            pt = {
                ID : new RegExp("^#(" + nt + ")"),
                CLASS : new RegExp("^\\.(" + nt + ")"),
                TAG : new RegExp("^(" + nt + "|[*])"),
                ATTR : new RegExp("^" + st),
                PSEUDO : new RegExp("^" + ot),
                CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool : new RegExp("^(?:" + et + ")$", "i"),
                needsContext : new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            ft = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            yt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            bt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xt = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            St = function () {
                O()
            },
            Ct = f(function (t) {
                return t.disabled === !0 && ("form" in t || "label" in t)
            }, {
                dir : "parentNode",
                next : "legend"
            });
        try {
            Z.apply(X = Q.call(F.childNodes), F.childNodes),
                X[F.childNodes.length].nodeType
        } catch (t) {
            Z = {
                apply : X.length ? function (t, e) {
                    J.apply(t, Q.call(e))
                }
                    : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++]; );
                        t.length = i - 1
                    }
            }
        }
        x = e.support = {},
            k = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            },
            O = e.setDocument = function (t) {
                var e,
                    i,
                    n = t ? t.ownerDocument || t : F;
                return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, D = P.documentElement, R = !k(P), F !== P && (i = P.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", St, !1) : i.attachEvent && i.attachEvent("onunload", St)), x.attributes = s(function (t) {
                    return t.className = "i",
                        !t.getAttribute("className")
                }), x.getElementsByTagName = s(function (t) {
                    return t.appendChild(P.createComment("")),
                        !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = gt.test(P.getElementsByClassName), x.getById = s(function (t) {
                    return D.appendChild(t).id = H,
                    !P.getElementsByName || !P.getElementsByName(H).length
                }), x.getById ? (S.filter.ID = function (t) {
                    var e = t.replace(yt, bt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, S.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && R) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }) : (S.filter.ID = function (t) {
                    var e = t.replace(yt, bt);
                    return function (t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }, S.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && R) {
                        var i,
                            n,
                            s,
                            o = e.getElementById(t);
                        if (o) {
                            if (i = o.getAttributeNode("id"), i && i.value === t)
                                return [o];
                            for (s = e.getElementsByName(t), n = 0; o = s[n++]; )
                                if (i = o.getAttributeNode("id"), i && i.value === t)
                                    return [o]
                        }
                        return []
                    }
                }), S.find.TAG = x.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                }
                    : function (t, e) {
                        var i,
                            n = [],
                            s = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = o[s++]; )
                                1 === i.nodeType && n.push(i);
                            return n
                        }
                        return o
                    }, S.find.CLASS = x.getElementsByClassName && function (t, e) {
                        if ("undefined" != typeof e.getElementsByClassName && R)
                            return e.getElementsByClassName(t)
                    }, j = [], $ = [], (x.qsa = gt.test(P.querySelectorAll)) && (s(function (t) {
                    D.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    t.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + it + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length || $.push("\\[" + it + "*(?:value|" + et + ")"),
                    t.querySelectorAll("[id~=" + H + "-]").length || $.push("~="),
                    t.querySelectorAll(":checked").length || $.push(":checked"),
                    t.querySelectorAll("a#" + H + "+*").length || $.push(".#.+[+~]")
                }), s(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = P.createElement("input");
                    e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length && $.push("name" + it + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length && $.push(":enabled", ":disabled"),
                        D.appendChild(t).disabled = !0,
                    2 !== t.querySelectorAll(":disabled").length && $.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        $.push(",.*:")
                })), (x.matchesSelector = gt.test(N = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && s(function (t) {
                    x.disconnectedMatch = N.call(t, "*"),
                        N.call(t, "[s!='']:x"),
                        j.push("!=", ot)
                }), $ = $.length && new RegExp($.join("|")), j = j.length && new RegExp(j.join("|")), e = gt.test(D.compareDocumentPosition), B = e || gt.test(D.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                }
                    : function (t, e) {
                        if (e)
                            for (; e = e.parentNode; )
                                if (e === t)
                                    return !0;
                        return !1
                    }, U = e ? function (t, e) {
                    if (t === e)
                        return L = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === P || t.ownerDocument === F && B(F, t) ? -1 : e === P || e.ownerDocument === F && B(F, e) ? 1 : I ? tt(I, t) - tt(I, e) : 0 : 4 & i ? -1 : 1)
                }
                    : function (t, e) {
                        if (t === e)
                            return L = !0, 0;
                        var i,
                            n = 0,
                            s = t.parentNode,
                            o = e.parentNode,
                            a = [t],
                            l = [e];
                        if (!s || !o)
                            return t === P ? -1 : e === P ? 1 : s ? -1 : o ? 1 : I ? tt(I, t) - tt(I, e) : 0;
                        if (s === o)
                            return r(t, e);
                        for (i = t; i = i.parentNode; )
                            a.unshift(i);
                        for (i = e; i = i.parentNode; )
                            l.unshift(i);
                        for (; a[n] === l[n]; )
                            n++;
                        return n ? r(a[n], l[n]) : a[n] === F ? -1 : l[n] === F ? 1 : 0
                    }, P) : P
            },
            e.matches = function (t, i) {
                return e(t, null, null, i)
            },
            e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== P && O(t), i = i.replace(ht, "='$1']"), x.matchesSelector && R && !Y[i + " "] && (!j || !j.test(i)) && (!$ || !$.test(i)))
                    try {
                        var n = N.call(t, i);
                        if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return n
                    } catch (t) {}

                return e(i, P, null, [t]).length > 0
            },
            e.contains = function (t, e) {
                return (t.ownerDocument || t) !== P && O(t),
                    B(t, e)
            },
            e.attr = function (t, e) {
                (t.ownerDocument || t) !== P && O(t);
                var i = S.attrHandle[e.toLowerCase()],
                    n = i && G.call(S.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
                return void 0 !== n ? n : x.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            },
            e.escape = function (t) {
                return (t + "").replace(wt, xt)
            },
            e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            },
            e.uniqueSort = function (t) {
                var e,
                    i = [],
                    n = 0,
                    s = 0;
                if (L = !x.detectDuplicates, I = !x.sortStable && t.slice(0), t.sort(U), L) {
                    for (; e = t[s++]; )
                        e === t[s] && (n = i.push(s));
                    for (; n--; )
                        t.splice(i[n], 1)
                }
                return I = null,
                    t
            },
            C = e.getText = function (t) {
                var e,
                    i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            i += C(t)
                    } else if (3 === s || 4 === s)
                        return t.nodeValue
                } else
                    for (; e = t[n++]; )
                        i += C(e);
                return i
            },
            S = e.selectors = {
                cacheLength : 50,
                createPseudo : n,
                match : pt,
                attrHandle : {},
                find : {},
                relative : {
                    ">" : {
                        dir : "parentNode",
                        first : !0
                    },
                    " " : {
                        dir : "parentNode"
                    },
                    "+" : {
                        dir : "previousSibling",
                        first : !0
                    },
                    "~" : {
                        dir : "previousSibling"
                    }
                },
                preFilter : {
                    ATTR : function (t) {
                        return t[1] = t[1].replace(yt, bt),
                            t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                            t.slice(0, 4)
                    },
                    CHILD : function (t) {
                        return t[1] = t[1].toLowerCase(),
                            "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] =  + (t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] =  + (t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                            t
                    },
                    PSEUDO : function (t) {
                        var e,
                            i = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter : {
                    TAG : function (t) {
                        var e = t.replace(yt, bt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        }
                            : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                    },
                    CLASS : function (t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && W(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                    },
                    ATTR : function (t, i, n) {
                        return function (s) {
                            var o = e.attr(s, t);
                            return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD : function (t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function (t) {
                            return !!t.parentNode
                        }
                            : function (e, i, l) {
                                var c,
                                    h,
                                    u,
                                    d,
                                    p,
                                    f,
                                    m = o !== r ? "nextSibling" : "previousSibling",
                                    g = e.parentNode,
                                    _ = a && e.nodeName.toLowerCase(),
                                    v = !l && !a,
                                    y = !1;
                                if (g) {
                                    if (o) {
                                        for (; m; ) {
                                            for (d = e; d = d[m]; )
                                                if (a ? d.nodeName.toLowerCase() === _ : 1 === d.nodeType)
                                                    return !1;
                                            f = m = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [r ? g.firstChild : g.lastChild], r && v) {
                                        for (d = g, u = d[H] || (d[H] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === z && c[1], y = p && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (y = p = 0) || f.pop(); )
                                            if (1 === d.nodeType && ++y && d === e) {
                                                h[t] = [z, p, y];
                                                break
                                            }
                                    } else if (v && (d = e, u = d[H] || (d[H] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === z && c[1], y = p), y === !1)
                                        for (; (d = ++p && d && d[m] || (y = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== _ : 1 !== d.nodeType) || !++y || (v && (u = d[H] || (d[H] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), h[t] = [z, y]), d !== e)); );
                                    return y -= s,
                                    y === n || y % n === 0 && y / n >= 0
                                }
                            }
                    },
                    PSEUDO : function (t, i) {
                        var s,
                            o = S.pseudos[t] || S.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[H] ? o(i) : o.length > 1 ? (s = [t, t, "", i], S.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, s = o(t, i), r = s.length; r--; )
                                n = tt(t, s[r]), t[n] = !(e[n] = s[r])
                        }) : function (t) {
                            return o(t, 0, s)
                        }) : o
                    }
                },
                pseudos : {
                    not : n(function (t) {
                        var e = [],
                            i = [],
                            s = A(t.replace(at, "$1"));
                        return s[H] ? n(function (t, e, i, n) {
                            for (var o, r = s(t, null, n, []), a = t.length; a--; )
                                (o = r[a]) && (t[a] = !(e[a] = o))
                        }) : function (t, n, o) {
                            return e[0] = t,
                                s(e, null, o, i),
                                e[0] = null,
                                !i.pop()
                        }
                    }),
                    has : n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains : n(function (t) {
                        return t = t.replace(yt, bt),
                            function (e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                            }
                    }),
                    lang : n(function (t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t),
                            t = t.replace(yt, bt).toLowerCase(),
                            function (e) {
                                var i;
                                do
                                    if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target : function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root : function (t) {
                        return t === D
                    },
                    focus : function (t) {
                        return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled : c(!1),
                    disabled : c(!0),
                    checked : function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected : function (t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        t.selected === !0
                    },
                    empty : function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent : function (t) {
                        return !S.pseudos.empty(t)
                    },
                    header : function (t) {
                        return mt.test(t.nodeName)
                    },
                    input : function (t) {
                        return ft.test(t.nodeName)
                    },
                    button : function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text : function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first : h(function () {
                        return [0]
                    }),
                    last : h(function (t, e) {
                        return [e - 1]
                    }),
                    eq : h(function (t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even : h(function (t, e) {
                        for (var i = 0; i < e; i += 2)
                            t.push(i);
                        return t
                    }),
                    odd : h(function (t, e) {
                        for (var i = 1; i < e; i += 2)
                            t.push(i);
                        return t
                    }),
                    lt : h(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0; )
                            t.push(n);
                        return t
                    }),
                    gt : h(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e; )
                            t.push(n);
                        return t
                    })
                }
            },
            S.pseudos.nth = S.pseudos.eq;
        for (w in {
            radio : !0,
            checkbox : !0,
            file : !0,
            password : !0,
            image : !0
        })
            S.pseudos[w] = a(w);
        for (w in {
            submit : !0,
            reset : !0
        })
            S.pseudos[w] = l(w);
        return d.prototype = S.filters = S.pseudos,
            S.setFilters = new d,
            T = e.tokenize = function (t, i) {
                var n,
                    s,
                    o,
                    r,
                    a,
                    l,
                    c,
                    h = q[t + " "];
                if (h)
                    return i ? 0 : h.slice(0);
                for (a = t, l = [], c = S.preFilter; a; ) {
                    n && !(s = lt.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])),
                        n = !1,
                    (s = ct.exec(a)) && (n = s.shift(), o.push({
                        value : n,
                        type : s[0].replace(at, " ")
                    }), a = a.slice(n.length));
                    for (r in S.filter)
                        !(s = pt[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
                            value : n,
                            type : r,
                            matches : s
                        }), a = a.slice(n.length));
                    if (!n)
                        break
                }
                return i ? a.length : a ? e.error(t) : q(t, l).slice(0)
            },
            A = e.compile = function (t, e) {
                var i,
                    n = [],
                    s = [],
                    o = Y[t + " "];
                if (!o) {
                    for (e || (e = T(t)), i = e.length; i--; )
                        o = y(e[i]), o[H] ? n.push(o) : s.push(o);
                    o = Y(t, b(s, n)),
                        o.selector = t
                }
                return o
            },
            M = e.select = function (t, e, i, n) {
                var s,
                    o,
                    r,
                    a,
                    l,
                    c = "function" == typeof t && t,
                    h = !n && T(t = c.selector || t);
                if (i = i || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && 9 === e.nodeType && R && S.relative[o[1].type]) {
                        if (e = (S.find.ID(r.matches[0].replace(yt, bt), e) || [])[0], !e)
                            return i;
                        c && (e = e.parentNode),
                            t = t.slice(o.shift().value.length)
                    }
                    for (s = pt.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !S.relative[a = r.type]); )
                        if ((l = S.find[a]) && (n = l(r.matches[0].replace(yt, bt), vt.test(o[0].type) && u(e.parentNode) || e))) {
                            if (o.splice(s, 1), t = n.length && p(o), !t)
                                return Z.apply(i, n), i;
                            break
                        }
                }
                return (c || A(t, h))(n, e, !R, i, !e || vt.test(t) && u(e.parentNode) || e),
                    i
            },
            x.sortStable = H.split("").sort(U).join("") === H,
            x.detectDuplicates = !!L,
            O(),
            x.sortDetached = s(function (t) {
                return 1 & t.compareDocumentPosition(P.createElement("fieldset"))
            }),
        s(function (t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, i) {
            if (!i)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        x.attributes && s(function (t) {
            return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        s(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function (t, e, i) {
            var n;
            if (!i)
                return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }),
            e
    }
    (t);
    mt.find = bt,
        mt.expr = bt.selectors,
        mt.expr[":"] = mt.expr.pseudos,
        mt.uniqueSort = mt.unique = bt.uniqueSort,
        mt.text = bt.getText,
        mt.isXMLDoc = bt.isXML,
        mt.contains = bt.contains,
        mt.escapeSelector = bt.escape;
    var wt = function (t, e, i) {
            for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (s && mt(t).is(i))
                        break;
                    n.push(t)
                }
            return n
        },
        xt = function (t, e) {
            for (var i = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        St = mt.expr.match.needsContext,
        Ct = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        kt = /^.[^:#\[\.,]*$/;
    mt.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"),
            1 === e.length && 1 === n.nodeType ? mt.find.matchesSelector(n, t) ? [n] : [] : mt.find.matches(t, mt.grep(e, function (t) {
                return 1 === t.nodeType
            }))
    },
        mt.fn.extend({
            find : function (t) {
                var e,
                    i,
                    n = this.length,
                    s = this;
                if ("string" != typeof t)
                    return this.pushStack(mt(t).filter(function () {
                        for (e = 0; e < n; e++)
                            if (mt.contains(s[e], this))
                                return !0
                    }));
                for (i = this.pushStack([]), e = 0; e < n; e++)
                    mt.find(t, s[e], i);
                return n > 1 ? mt.uniqueSort(i) : i
            },
            filter : function (t) {
                return this.pushStack(o(this, t || [], !1))
            },
            not : function (t) {
                return this.pushStack(o(this, t || [], !0))
            },
            is : function (t) {
                return !!o(this, "string" == typeof t && St.test(t) ? mt(t) : t || [], !1).length
            }
        });
    var Tt,
        At = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Mt = mt.fn.init = function (t, e, i) {
            var n,
                s;
            if (!t)
                return this;
            if (i = i || Tt, "string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : At.exec(t), !n || !n[1] && e)
                    return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof mt ? e[0] : e, mt.merge(this, mt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), Ct.test(n[1]) && mt.isPlainObject(e))
                        for (n in e)
                            mt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return s = it.getElementById(n[2]),
                s && (this[0] = s, this.length = 1),
                    this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : mt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(mt) : mt.makeArray(t, this)
        };
    Mt.prototype = mt.fn,
        Tt = mt(it);
    var Et = /^(?:parents|prev(?:Until|All))/,
        It = {
            children : !0,
            contents : !0,
            next : !0,
            prev : !0
        };
    mt.fn.extend({
        has : function (t) {
            var e = mt(t, this),
                i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++)
                    if (mt.contains(this, e[t]))
                        return !0
            })
        },
        closest : function (t, e) {
            var i,
                n = 0,
                s = this.length,
                o = [],
                r = "string" != typeof t && mt(t);
            if (!St.test(t))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && mt.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
            return this.pushStack(o.length > 1 ? mt.uniqueSort(o) : o)
        },
        index : function (t) {
            return t ? "string" == typeof t ? at.call(mt(t), this[0]) : at.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add : function (t, e) {
            return this.pushStack(mt.uniqueSort(mt.merge(this.get(), mt(t, e))))
        },
        addBack : function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
        mt.each({
            parent : function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents : function (t) {
                return wt(t, "parentNode")
            },
            parentsUntil : function (t, e, i) {
                return wt(t, "parentNode", i)
            },
            next : function (t) {
                return r(t, "nextSibling")
            },
            prev : function (t) {
                return r(t, "previousSibling")
            },
            nextAll : function (t) {
                return wt(t, "nextSibling")
            },
            prevAll : function (t) {
                return wt(t, "previousSibling")
            },
            nextUntil : function (t, e, i) {
                return wt(t, "nextSibling", i)
            },
            prevUntil : function (t, e, i) {
                return wt(t, "previousSibling", i)
            },
            siblings : function (t) {
                return xt((t.parentNode || {}).firstChild, t)
            },
            children : function (t) {
                return xt(t.firstChild)
            },
            contents : function (t) {
                return s(t, "iframe") ? t.contentDocument : (s(t, "template") && (t = t.content || t), mt.merge([], t.childNodes))
            }
        }, function (t, e) {
            mt.fn[t] = function (i, n) {
                var s = mt.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i),
                n && "string" == typeof n && (s = mt.filter(n, s)),
                this.length > 1 && (It[t] || mt.uniqueSort(s), Et.test(t) && s.reverse()),
                    this.pushStack(s)
            }
        });
    var Lt = /[^\x20\t\r\n\f]+/g;
    mt.Callbacks = function (t) {
        t = "string" == typeof t ? a(t) : mt.extend({}, t);
        var e,
            i,
            n,
            s,
            o = [],
            r = [],
            l = -1,
            c = function () {
                for (s = s || t.once, n = e = !0; r.length; l = -1)
                    for (i = r.shift(); ++l < o.length; )
                        o[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = o.length, i = !1);
                t.memory || (i = !1),
                    e = !1,
                s && (o = i ? [] : "")
            },
            h = {
                add : function () {
                    return o && (i && !e && (l = o.length - 1, r.push(i)), function e(i) {
                        mt.each(i, function (i, n) {
                            mt.isFunction(n) ? t.unique && h.has(n) || o.push(n) : n && n.length && "string" !== mt.type(n) && e(n)
                        })
                    }
                    (arguments), i && !e && c()),
                        this
                },
                remove : function () {
                    return mt.each(arguments, function (t, e) {
                        for (var i; (i = mt.inArray(e, o, i)) > -1; )
                            o.splice(i, 1), i <= l && l--
                    }),
                        this
                },
                has : function (t) {
                    return t ? mt.inArray(t, o) > -1 : o.length > 0
                },
                empty : function () {
                    return o && (o = []),
                        this
                },
                disable : function () {
                    return s = r = [],
                        o = i = "",
                        this
                },
                disabled : function () {
                    return !o
                },
                lock : function () {
                    return s = r = [],
                    i || e || (o = i = ""),
                        this
                },
                locked : function () {
                    return !!s
                },
                fireWith : function (t, i) {
                    return s || (i = i || [], i = [t, i.slice ? i.slice() : i], r.push(i), e || c()),
                        this
                },
                fire : function () {
                    return h.fireWith(this, arguments),
                        this
                },
                fired : function () {
                    return !!n
                }
            };
        return h
    },
        mt.extend({
            Deferred : function (e) {
                var i = [["notify", "progress", mt.Callbacks("memory"), mt.Callbacks("memory"), 2], ["resolve", "done", mt.Callbacks("once memory"), mt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", mt.Callbacks("once memory"), mt.Callbacks("once memory"), 1, "rejected"]],
                    n = "pending",
                    s = {
                        state : function () {
                            return n
                        },
                        always : function () {
                            return o.done(arguments).fail(arguments),
                                this
                        },
                        catch  : function (t) {
                            return s.then(null, t)
                        },
                        pipe : function () {
                            var t = arguments;
                            return mt.Deferred(function (e) {
                                mt.each(i, function (i, n) {
                                    var s = mt.isFunction(t[n[4]]) && t[n[4]];
                                    o[n[1]](function () {
                                        var t = s && s.apply(this, arguments);
                                        t && mt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [t] : arguments)
                                    })
                                }),
                                    t = null
                            }).promise()
                        },
                        then : function (e, n, s) {
                            function o(e, i, n, s) {
                                return function () {
                                    var a = this,
                                        h = arguments,
                                        u = function () {
                                            var t,
                                                u;
                                            if (!(e < r)) {
                                                if (t = n.apply(a, h), t === i.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                u = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                                    mt.isFunction(u) ? s ? u.call(t, o(r, i, l, s), o(r, i, c, s)) : (r++, u.call(t, o(r, i, l, s), o(r, i, c, s), o(r, i, l, i.notifyWith))) : (n !== l && (a = void 0, h = [t]), (s || i.resolveWith)(a, h))
                                            }
                                        },
                                        d = s ? u : function () {
                                            try {
                                                u()
                                            } catch (t) {
                                                mt.Deferred.exceptionHook && mt.Deferred.exceptionHook(t, d.stackTrace),
                                                e + 1 >= r && (n !== c && (a = void 0, h = [t]), i.rejectWith(a, h))
                                            }
                                        };
                                    e ? d() : (mt.Deferred.getStackHook && (d.stackTrace = mt.Deferred.getStackHook()), t.setTimeout(d))
                                }
                            }
                            var r = 0;
                            return mt.Deferred(function (t) {
                                i[0][3].add(o(0, t, mt.isFunction(s) ? s : l, t.notifyWith)),
                                    i[1][3].add(o(0, t, mt.isFunction(e) ? e : l)),
                                    i[2][3].add(o(0, t, mt.isFunction(n) ? n : c))
                            }).promise()
                        },
                        promise : function (t) {
                            return null != t ? mt.extend(t, s) : s
                        }
                    },
                    o = {};
                return mt.each(i, function (t, e) {
                    var r = e[2],
                        a = e[5];
                    s[e[1]] = r.add,
                    a && r.add(function () {
                        n = a
                    }, i[3 - t][2].disable, i[0][2].lock),
                        r.add(e[3].fire),
                        o[e[0]] = function () {
                            return o[e[0] + "With"](this === o ? void 0 : this, arguments),
                                this
                        },
                        o[e[0] + "With"] = r.fireWith
                }),
                    s.promise(o),
                e && e.call(o, o),
                    o
            },
            when : function (t) {
                var e = arguments.length,
                    i = e,
                    n = Array(i),
                    s = st.call(arguments),
                    o = mt.Deferred(),
                    r = function (t) {
                        return function (i) {
                            n[t] = this,
                                s[t] = arguments.length > 1 ? st.call(arguments) : i,
                            --e || o.resolveWith(n, s)
                        }
                    };
                if (e <= 1 && (h(t, o.done(r(i)).resolve, o.reject, !e), "pending" === o.state() || mt.isFunction(s[i] && s[i].then)))
                    return o.then();
                for (; i--; )
                    h(s[i], r(i), o.reject);
                return o.promise()
            }
        });
    var Ot = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    mt.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && Ot.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    },
        mt.readyException = function (e) {
            t.setTimeout(function () {
                throw e
            })
        };
    var Pt = mt.Deferred();
    mt.fn.ready = function (t) {
        return Pt.then(t).catch (function (t) {
            mt.readyException(t)
        }) , this
    },
        mt.extend({
            isReady : !1,
            readyWait : 1,
            ready : function (t) {
                (t === !0 ? --mt.readyWait : mt.isReady) || (mt.isReady = !0, t !== !0 && --mt.readyWait > 0 || Pt.resolveWith(it, [mt]))
            }
        }),
        mt.ready.then = Pt.then,
        "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll ? t.setTimeout(mt.ready) : (it.addEventListener("DOMContentLoaded", u), t.addEventListener("load", u));
    var Dt = function (t, e, i, n, s, o, r) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === mt.type(i)) {
                s = !0;
                for (a in i)
                    Dt(t, e, a, i[a], !0, o, r)
            } else if (void 0 !== n && (s = !0, mt.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                    return c.call(mt(t), i)
                })), e))
                for (; a < l; a++)
                    e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
        },
        Rt = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    d.uid = 1,
        d.prototype = {
            cache : function (t) {
                var e = t[this.expando];
                return e || (e = {}, Rt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value : e,
                    configurable : !0
                }))),
                    e
            },
            set : function (t, e, i) {
                var n,
                    s = this.cache(t);
                if ("string" == typeof e)
                    s[mt.camelCase(e)] = i;
                else
                    for (n in e)
                        s[mt.camelCase(n)] = e[n];
                return s
            },
            get : function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][mt.camelCase(e)]
            },
            access : function (t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove : function (t, e) {
                var i,
                    n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(mt.camelCase) : (e = mt.camelCase(e), e = e in n ? [e] : e.match(Lt) || []),
                            i = e.length;
                        for (; i--; )
                            delete n[e[i]]
                    }
                    (void 0 === e || mt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData : function (t) {
                var e = t[this.expando];
                return void 0 !== e && !mt.isEmptyObject(e)
            }
        };
    var $t = new d,
        jt = new d,
        Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Bt = /[A-Z]/g;
    mt.extend({
        hasData : function (t) {
            return jt.hasData(t) || $t.hasData(t)
        },
        data : function (t, e, i) {
            return jt.access(t, e, i)
        },
        removeData : function (t, e) {
            jt.remove(t, e)
        },
        _data : function (t, e, i) {
            return $t.access(t, e, i)
        },
        _removeData : function (t, e) {
            $t.remove(t, e)
        }
    }),
        mt.fn.extend({
            data : function (t, e) {
                var i,
                    n,
                    s,
                    o = this[0],
                    r = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = jt.get(o), 1 === o.nodeType && !$t.get(o, "hasDataAttrs"))) {
                        for (i = r.length; i--; )
                            r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = mt.camelCase(n.slice(5)), f(o, n, s[n])));
                        $t.set(o, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function () {
                    jt.set(this, t)
                }) : Dt(this, function (e) {
                    var i;
                    if (o && void 0 === e) {
                        if (i = jt.get(o, t), void 0 !== i)
                            return i;
                        if (i = f(o, t), void 0 !== i)
                            return i
                    } else
                        this.each(function () {
                            jt.set(this, t, e)
                        })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData : function (t) {
                return this.each(function () {
                    jt.remove(this, t)
                })
            }
        }),
        mt.extend({
            queue : function (t, e, i) {
                var n;
                if (t)
                    return e = (e || "fx") + "queue", n = $t.get(t, e), i && (!n || Array.isArray(i) ? n = $t.access(t, e, mt.makeArray(i)) : n.push(i)), n || []
            },
            dequeue : function (t, e) {
                e = e || "fx";
                var i = mt.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = mt._queueHooks(t, e),
                    r = function () {
                        mt.dequeue(t, e)
                    };
                "inprogress" === s && (s = i.shift(), n--),
                s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)),
                !n && o && o.empty.fire()
            },
            _queueHooks : function (t, e) {
                var i = e + "queueHooks";
                return $t.get(t, i) || $t.access(t, i, {
                        empty : mt.Callbacks("once memory").add(function () {
                            $t.remove(t, [e + "queue", i])
                        })
                    })
            }
        }),
        mt.fn.extend({
            queue : function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--),
                    arguments.length < i ? mt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                        var i = mt.queue(this, t, e);
                        mt._queueHooks(this, t),
                        "fx" === t && "inprogress" !== i[0] && mt.dequeue(this, t)
                    })
            },
            dequeue : function (t) {
                return this.each(function () {
                    mt.dequeue(this, t)
                })
            },
            clearQueue : function (t) {
                return this.queue(t || "fx", [])
            },
            promise : function (t, e) {
                var i,
                    n = 1,
                    s = mt.Deferred(),
                    o = this,
                    r = this.length,
                    a = function () {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--; )
                    i = $t.get(o[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(),
                    s.promise(e)
            }
        });
    var Ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ft = new RegExp("^(?:([+-])=|)(" + Ht + ")([a-z%]*)$", "i"),
        zt = ["Top", "Right", "Bottom", "Left"],
        Vt = function (t, e) {
            return t = e || t,
            "none" === t.style.display || "" === t.style.display && mt.contains(t.ownerDocument, t) && "none" === mt.css(t, "display")
        },
        Wt = function (t, e, i, n) {
            var s,
                o,
                r = {};
            for (o in e)
                r[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e)
                t.style[o] = r[o];
            return s
        },
        qt = {};
    mt.fn.extend({
        show : function () {
            return _(this, !0)
        },
        hide : function () {
            return _(this)
        },
        toggle : function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Vt(this) ? mt(this).show() : mt(this).hide()
            })
        }
    });
    var Yt = /^(?:checkbox|radio)$/i,
        Ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Gt = /^$|\/(?:java|ecma)script/i,
        Xt = {
            option : [1, "<select multiple='multiple'>", "</select>"],
            thead : [1, "<table>", "</table>"],
            col : [2, "<table><colgroup>", "</colgroup></table>"],
            tr : [2, "<table><tbody>", "</tbody></table>"],
            td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default : [0, "", ""]
        };
    Xt.optgroup = Xt.option,
        Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead,
        Xt.th = Xt.td;
    var Kt = /<|&#?\w+;/;
    !function () {
        var t = it.createDocumentFragment(),
            e = t.appendChild(it.createElement("div")),
            i = it.createElement("input");
        i.setAttribute("type", "radio"),
            i.setAttribute("checked", "checked"),
            i.setAttribute("name", "t"),
            e.appendChild(i),
            pt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            e.innerHTML = "<textarea>x</textarea>",
            pt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }
    ();
    var Jt = it.documentElement,
        Zt = /^key/,
        Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        te = /^([^.]*)(?:\.(.+)|)/;
    mt.event = {
        global : {},
        add : function (t, e, i, n, s) {
            var o,
                r,
                a,
                l,
                c,
                h,
                u,
                d,
                p,
                f,
                m,
                g = $t.get(t);
            if (g)
                for (i.handler && (o = i, i = o.handler, s = o.selector), s && mt.find.matchesSelector(Jt, s), i.guid || (i.guid = mt.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function (e) {
                    return "undefined" != typeof mt && mt.event.triggered !== e.type ? mt.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(Lt) || [""], c = e.length; c--; )
                    a = te.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (u = mt.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = mt.event.special[p] || {}, h = mt.extend({
                        type : p,
                        origType : m,
                        data : n,
                        handler : i,
                        guid : i.guid,
                        selector : s,
                        needsContext : s && mt.expr.match.needsContext.test(s),
                        namespace : f.join(".")
                    }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, r) !== !1 || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), mt.event.global[p] = !0)
        },
        remove : function (t, e, i, n, s) {
            var o,
                r,
                a,
                l,
                c,
                h,
                u,
                d,
                p,
                f,
                m,
                g = $t.hasData(t) && $t.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(Lt) || [""], c = e.length; c--; )
                    if (a = te.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (u = mt.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--; )
                            h = d[o], !s && m !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                        r && !d.length && (u.teardown && u.teardown.call(t, f, g.handle) !== !1 || mt.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l)
                            mt.event.remove(t, p + e[c], i, n, !0);
                mt.isEmptyObject(l) && $t.remove(t, "handle events")
            }
        },
        dispatch : function (t) {
            var e,
                i,
                n,
                s,
                o,
                r,
                a = mt.event.fix(t),
                l = new Array(arguments.length),
                c = ($t.get(this, "events") || {})[a.type] || [],
                h = mt.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++)
                l[e] = arguments[e];
            if (a.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, a) !== !1) {
                for (r = mt.event.handlers.call(this, a, c), e = 0; (s = r[e++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = s.elem, i = 0; (o = s.handlers[i++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, n = ((mt.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l), void 0 !== n && (a.result = n) === !1 && (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a),
                    a.result
            }
        },
        handlers : function (t, e) {
            var i,
                n,
                s,
                o,
                r,
                a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || c.disabled !== !0)) {
                        for (o = [], r = {}, i = 0; i < l; i++)
                            n = e[i], s = n.selector + " ", void 0 === r[s] && (r[s] = n.needsContext ? mt(s, this).index(c) > -1 : mt.find(s, this, null, [c]).length), r[s] && o.push(n);
                        o.length && a.push({
                            elem : c,
                            handlers : o
                        })
                    }
            return c = this,
            l < e.length && a.push({
                elem : c,
                handlers : e.slice(l)
            }),
                a
        },
        addProp : function (t, e) {
            Object.defineProperty(mt.Event.prototype, t, {
                enumerable : !0,
                configurable : !0,
                get : mt.isFunction(e) ? function () {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                    : function () {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    },
                set : function (e) {
                    Object.defineProperty(this, t, {
                        enumerable : !0,
                        configurable : !0,
                        writable : !0,
                        value : e
                    })
                }
            })
        },
        fix : function (t) {
            return t[mt.expando] ? t : new mt.Event(t)
        },
        special : {
            load : {
                noBubble : !0
            },
            focus : {
                trigger : function () {
                    if (this !== S() && this.focus)
                        return this.focus(), !1
                },
                delegateType : "focusin"
            },
            blur : {
                trigger : function () {
                    if (this === S() && this.blur)
                        return this.blur(), !1
                },
                delegateType : "focusout"
            },
            click : {
                trigger : function () {
                    if ("checkbox" === this.type && this.click && s(this, "input"))
                        return this.click(), !1
                },
                _default : function (t) {
                    return s(t.target, "a")
                }
            },
            beforeunload : {
                postDispatch : function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
        mt.removeEvent = function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        },
        mt.Event = function (t, e) {
            return this instanceof mt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? w : x, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && mt.extend(this, e), this.timeStamp = t && t.timeStamp || mt.now(), void(this[mt.expando] = !0)) : new mt.Event(t, e)
        },
        mt.Event.prototype = {
            constructor : mt.Event,
            isDefaultPrevented : x,
            isPropagationStopped : x,
            isImmediatePropagationStopped : x,
            isSimulated : !1,
            preventDefault : function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = w,
                t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation : function () {
                var t = this.originalEvent;
                this.isPropagationStopped = w,
                t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation : function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = w,
                t && !this.isSimulated && t.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        mt.each({
            altKey : !0,
            bubbles : !0,
            cancelable : !0,
            changedTouches : !0,
            ctrlKey : !0,
            detail : !0,
            eventPhase : !0,
            metaKey : !0,
            pageX : !0,
            pageY : !0,
            shiftKey : !0,
            view : !0,
            char : !0,
            charCode : !0,
            key : !0,
            keyCode : !0,
            button : !0,
            buttons : !0,
            clientX : !0,
            clientY : !0,
            offsetX : !0,
            offsetY : !0,
            pointerId : !0,
            pointerType : !0,
            screenX : !0,
            screenY : !0,
            targetTouches : !0,
            toElement : !0,
            touches : !0,
            which : function (t) {
                var e = t.button;
                return null == t.which && Zt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Qt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, mt.event.addProp),
        mt.each({
            mouseenter : "mouseover",
            mouseleave : "mouseout",
            pointerenter : "pointerover",
            pointerleave : "pointerout"
        }, function (t, e) {
            mt.event.special[t] = {
                delegateType : e,
                bindType : e,
                handle : function (t) {
                    var i,
                        n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return s && (s === n || mt.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e),
                        i
                }
            }
        }),
        mt.fn.extend({
            on : function (t, e, i, n) {
                return C(this, t, e, i, n)
            },
            one : function (t, e, i, n) {
                return C(this, t, e, i, n, 1)
            },
            off : function (t, e, i) {
                var n,
                    s;
                if (t && t.preventDefault && t.handleObj)
                    return n = t.handleObj, mt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t)
                        this.off(s, e, t[s]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (i = e, e = void 0),
                i === !1 && (i = x),
                    this.each(function () {
                        mt.event.remove(this, t, i, e)
                    })
            }
        });
    var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ie = /<script|<style|<link/i,
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^true\/(.*)/,
        oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    mt.extend({
        htmlPrefilter : function (t) {
            return t.replace(ee, "<$1></$2>")
        },
        clone : function (t, e, i) {
            var n,
                s,
                o,
                r,
                a = t.cloneNode(!0),
                l = mt.contains(t.ownerDocument, t);
            if (!(pt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || mt.isXMLDoc(t)))
                for (r = v(a), o = v(t), n = 0, s = o.length; n < s; n++)
                    E(o[n], r[n]);
            if (e)
                if (i)
                    for (o = o || v(t), r = r || v(a), n = 0, s = o.length; n < s; n++)
                        M(o[n], r[n]);
                else
                    M(t, a);
            return r = v(a, "script"),
            r.length > 0 && y(r, !l && v(t, "script")),
                a
        },
        cleanData : function (t) {
            for (var e, i, n, s = mt.event.special, o = 0; void 0 !== (i = t[o]); o++)
                if (Rt(i)) {
                    if (e = i[$t.expando]) {
                        if (e.events)
                            for (n in e.events)
                                s[n] ? mt.event.remove(i, n) : mt.removeEvent(i, n, e.handle);
                        i[$t.expando] = void 0
                    }
                    i[jt.expando] && (i[jt.expando] = void 0)
                }
        }
    }),
        mt.fn.extend({
            detach : function (t) {
                return L(this, t, !0)
            },
            remove : function (t) {
                return L(this, t)
            },
            text : function (t) {
                return Dt(this, function (t) {
                    return void 0 === t ? mt.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append : function () {
                return I(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = k(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend : function () {
                return I(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = k(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before : function () {
                return I(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after : function () {
                return I(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty : function () {
                for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (mt.cleanData(v(t, !1)), t.textContent = "");
                return this
            },
            clone : function (t, e) {
                return t = null != t && t,
                    e = null == e ? t : e,
                    this.map(function () {
                        return mt.clone(this, t, e)
                    })
            },
            html : function (t) {
                return Dt(this, function (t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType)
                        return e.innerHTML;
                    if ("string" == typeof t && !ie.test(t) && !Xt[(Ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = mt.htmlPrefilter(t);
                        try {
                            for (; i < n; i++)
                                e = this[i] || {},
                                1 === e.nodeType && (mt.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}

                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith : function () {
                var t = [];
                return I(this, arguments, function (e) {
                    var i = this.parentNode;
                    mt.inArray(this, t) < 0 && (mt.cleanData(v(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }),
        mt.each({
            appendTo : "append",
            prependTo : "prepend",
            insertBefore : "before",
            insertAfter : "after",
            replaceAll : "replaceWith"
        }, function (t, e) {
            mt.fn[t] = function (t) {
                for (var i, n = [], s = mt(t), o = s.length - 1, r = 0; r <= o; r++)
                    i = r === o ? this : this.clone(!0), mt(s[r])[e](i), rt.apply(n, i.get());
                return this.pushStack(n)
            }
        });
    var re = /^margin/,
        ae = new RegExp("^(" + Ht + ")(?!px)[a-z%]+$", "i"),
        le = function (e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t),
                i.getComputedStyle(e)
        };
    !function () {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    a.innerHTML = "",
                    Jt.appendChild(r);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top,
                    o = "2px" === e.marginLeft,
                    n = "4px" === e.width,
                    a.style.marginRight = "50%",
                    s = "4px" === e.marginRight,
                    Jt.removeChild(r),
                    a = null
            }
        }
        var i,
            n,
            s,
            o,
            r = it.createElement("div"),
            a = it.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pt.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), mt.extend(pt, {
            pixelPosition : function () {
                return e(),
                    i
            },
            boxSizingReliable : function () {
                return e(),
                    n
            },
            pixelMarginRight : function () {
                return e(),
                    s
            },
            reliableMarginLeft : function () {
                return e(),
                    o
            }
        }))
    }
    ();
    var ce = /^(none|table(?!-c[ea]).+)/,
        he = /^--/,
        ue = {
            position : "absolute",
            visibility : "hidden",
            display : "block"
        },
        de = {
            letterSpacing : "0",
            fontWeight : "400"
        },
        pe = ["Webkit", "Moz", "ms"],
        fe = it.createElement("div").style;
    mt.extend({
        cssHooks : {
            opacity : {
                get : function (t, e) {
                    if (e) {
                        var i = O(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber : {
            animationIterationCount : !0,
            columnCount : !0,
            fillOpacity : !0,
            flexGrow : !0,
            flexShrink : !0,
            fontWeight : !0,
            lineHeight : !0,
            opacity : !0,
            order : !0,
            orphans : !0,
            widows : !0,
            zIndex : !0,
            zoom : !0
        },
        cssProps : {
            float : "cssFloat"
        },
        style : function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s,
                    o,
                    r,
                    a = mt.camelCase(e),
                    l = he.test(e),
                    c = t.style;
                return l || (e = R(a)),
                    r = mt.cssHooks[e] || mt.cssHooks[a],
                    void 0 === i ? r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : c[e] : (o = typeof i, "string" === o && (s = Ft.exec(i)) && s[1] && (i = m(t, e, s), o = "number"), null != i && i === i && ("number" === o && (i += s && s[3] || (mt.cssNumber[a] ? "" : "px")), pt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i)), void 0)
            }
        },
        css : function (t, e, i, n) {
            var s,
                o,
                r,
                a = mt.camelCase(e),
                l = he.test(e);
            return l || (e = R(a)),
                r = mt.cssHooks[e] || mt.cssHooks[a],
            r && "get" in r && (s = r.get(t, !0, i)),
            void 0 === s && (s = O(t, e, n)),
            "normal" === s && e in de && (s = de[e]),
                "" === i || i ? (o = parseFloat(s), i === !0 || isFinite(o) ? o || 0 : s) : s
        }
    }),
        mt.each(["height", "width"], function (t, e) {
            mt.cssHooks[e] = {
                get : function (t, i, n) {
                    if (i)
                        return !ce.test(mt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? N(t, e, n) : Wt(t, ue, function () {
                            return N(t, e, n)
                        })
                },
                set : function (t, i, n) {
                    var s,
                        o = n && le(t),
                        r = n && j(t, e, n, "border-box" === mt.css(t, "boxSizing", !1, o), o);
                    return r && (s = Ft.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = mt.css(t, e)),
                        $(t, i, r)
                }
            }
        }),
        mt.cssHooks.marginLeft = P(pt.reliableMarginLeft, function (t, e) {
            if (e)
                return (parseFloat(O(t, "marginLeft")) || t.getBoundingClientRect().left - Wt(t, {
                        marginLeft : 0
                    }, function () {
                        return t.getBoundingClientRect().left
                    })) + "px"
        }),
        mt.each({
            margin : "",
            padding : "",
            border : "Width"
        }, function (t, e) {
            mt.cssHooks[t + e] = {
                expand : function (i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                        s[t + zt[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            },
            re.test(t) || (mt.cssHooks[t + e].set = $)
        }),
        mt.fn.extend({
            css : function (t, e) {
                return Dt(this, function (t, e, i) {
                    var n,
                        s,
                        o = {},
                        r = 0;
                    if (Array.isArray(e)) {
                        for (n = le(t), s = e.length; r < s; r++)
                            o[e[r]] = mt.css(t, e[r], !1, n);
                        return o
                    }
                    return void 0 !== i ? mt.style(t, e, i) : mt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }),
        mt.Tween = B,
        B.prototype = {
            constructor : B,
            init : function (t, e, i, n, s, o) {
                this.elem = t,
                    this.prop = i,
                    this.easing = s || mt.easing._default,
                    this.options = e,
                    this.start = this.now = this.cur(),
                    this.end = n,
                    this.unit = o || (mt.cssNumber[i] ? "" : "px")
            },
            cur : function () {
                var t = B.propHooks[this.prop];
                return t && t.get ? t.get(this) : B.propHooks._default.get(this)
            },
            run : function (t) {
                var e,
                    i = B.propHooks[this.prop];
                return this.options.duration ? this.pos = e = mt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                    this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    i && i.set ? i.set(this) : B.propHooks._default.set(this),
                    this
            }
        },
        B.prototype.init.prototype = B.prototype,
        B.propHooks = {
            _default : {
                get : function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = mt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set : function (t) {
                    mt.fx.step[t.prop] ? mt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[mt.cssProps[t.prop]] && !mt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : mt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        },
        B.propHooks.scrollTop = B.propHooks.scrollLeft = {
            set : function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        mt.easing = {
            linear : function (t) {
                return t
            },
            swing : function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default : "swing"
        },
        mt.fx = B.prototype.init,
        mt.fx.step = {};
    var me,
        ge,
        _e = /^(?:toggle|show|hide)$/,
        ve = /queueHooks$/;
    mt.Animation = mt.extend(Y, {
        tweeners : {
            "*" : [function (t, e) {
                var i = this.createTween(t, e);
                return m(i.elem, t, Ft.exec(e), i),
                    i
            }
            ]
        },
        tweener : function (t, e) {
            mt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Lt);
            for (var i, n = 0, s = t.length; n < s; n++)
                i = t[n], Y.tweeners[i] = Y.tweeners[i] || [], Y.tweeners[i].unshift(e)
        },
        prefilters : [W],
        prefilter : function (t, e) {
            e ? Y.prefilters.unshift(t) : Y.prefilters.push(t)
        }
    }),
        mt.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? mt.extend({}, t) : {
                complete : i || !i && e || mt.isFunction(t) && t,
                duration : t,
                easing : i && e || e && !mt.isFunction(e) && e
            };
            return mt.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in mt.fx.speeds ? n.duration = mt.fx.speeds[n.duration] : n.duration = mt.fx.speeds._default),
            null != n.queue && n.queue !== !0 || (n.queue = "fx"),
                n.old = n.complete,
                n.complete = function () {
                    mt.isFunction(n.old) && n.old.call(this),
                    n.queue && mt.dequeue(this, n.queue)
                },
                n
        },
        mt.fn.extend({
            fadeTo : function (t, e, i, n) {
                return this.filter(Vt).css("opacity", 0).show().end().animate({
                    opacity : e
                }, t, i, n)
            },
            animate : function (t, e, i, n) {
                var s = mt.isEmptyObject(t),
                    o = mt.speed(e, i, n),
                    r = function () {
                        var e = Y(this, mt.extend({}, t), o);
                        (s || $t.get(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r,
                    s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
            },
            stop : function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop,
                        e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0),
                e && t !== !1 && this.queue(t || "fx", []),
                    this.each(function () {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            o = mt.timers,
                            r = $t.get(this);
                        if (s)
                            r[s] && r[s].stop && n(r[s]);
                        else
                            for (s in r)
                                r[s] && r[s].stop && ve.test(s) && n(r[s]);
                        for (s = o.length; s--; )
                            o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        !e && i || mt.dequeue(this, t)
                    })
            },
            finish : function (t) {
                return t !== !1 && (t = t || "fx"),
                    this.each(function () {
                        var e,
                            i = $t.get(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            o = mt.timers,
                            r = n ? n.length : 0;
                        for (i.finish = !0, mt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--; )
                            o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < r; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
            }
        }),
        mt.each(["toggle", "show", "hide"], function (t, e) {
            var i = mt.fn[e];
            mt.fn[e] = function (t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(z(e, !0), t, n, s)
            }
        }),
        mt.each({
            slideDown : z("show"),
            slideUp : z("hide"),
            slideToggle : z("toggle"),
            fadeIn : {
                opacity : "show"
            },
            fadeOut : {
                opacity : "hide"
            },
            fadeToggle : {
                opacity : "toggle"
            }
        }, function (t, e) {
            mt.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n)
            }
        }),
        mt.timers = [],
        mt.fx.tick = function () {
            var t,
                e = 0,
                i = mt.timers;
            for (me = mt.now(); e < i.length; e++)
                t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || mt.fx.stop(),
                me = void 0
        },
        mt.fx.timer = function (t) {
            mt.timers.push(t),
                mt.fx.start()
        },
        mt.fx.interval = 13,
        mt.fx.start = function () {
            ge || (ge = !0, H())
        },
        mt.fx.stop = function () {
            ge = null
        },
        mt.fx.speeds = {
            slow : 600,
            fast : 200,
            _default : 400
        },
        mt.fn.delay = function (e, i) {
            return e = mt.fx ? mt.fx.speeds[e] || e : e,
                i = i || "fx",
                this.queue(i, function (i, n) {
                    var s = t.setTimeout(i, e);
                    n.stop = function () {
                        t.clearTimeout(s)
                    }
                })
        },
        function () {
            var t = it.createElement("input"),
                e = it.createElement("select"),
                i = e.appendChild(it.createElement("option"));
            t.type = "checkbox",
                pt.checkOn = "" !== t.value,
                pt.optSelected = i.selected,
                t = it.createElement("input"),
                t.value = "t",
                t.type = "radio",
                pt.radioValue = "t" === t.value
        }
        ();
    var ye,
        be = mt.expr.attrHandle;
    mt.fn.extend({
        attr : function (t, e) {
            return Dt(this, mt.attr, t, e, arguments.length > 1)
        },
        removeAttr : function (t) {
            return this.each(function () {
                mt.removeAttr(this, t)
            })
        }
    }),
        mt.extend({
            attr : function (t, e, i) {
                var n,
                    s,
                    o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof t.getAttribute ? mt.prop(t, e, i) : (1 === o && mt.isXMLDoc(t) || (s = mt.attrHooks[e.toLowerCase()] || (mt.expr.match.bool.test(e) ? ye : void 0)), void 0 !== i ? null === i ? void mt.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = mt.find.attr(t, e), null == n ? void 0 : n))
            },
            attrHooks : {
                type : {
                    set : function (t, e) {
                        if (!pt.radioValue && "radio" === e && s(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e),
                            i && (t.value = i),
                                e
                        }
                    }
                }
            },
            removeAttr : function (t, e) {
                var i,
                    n = 0,
                    s = e && e.match(Lt);
                if (s && 1 === t.nodeType)
                    for (; i = s[n++]; )
                        t.removeAttribute(i)
            }
        }),
        ye = {
            set : function (t, e, i) {
                return e === !1 ? mt.removeAttr(t, i) : t.setAttribute(i, i),
                    i
            }
        },
        mt.each(mt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = be[e] || mt.find.attr;
            be[e] = function (t, e, n) {
                var s,
                    o,
                    r = e.toLowerCase();
                return n || (o = be[r], be[r] = s, s = null != i(t, e, n) ? r : null, be[r] = o),
                    s
            }
        });
    var we = /^(?:input|select|textarea|button)$/i,
        xe = /^(?:a|area)$/i;
    mt.fn.extend({
        prop : function (t, e) {
            return Dt(this, mt.prop, t, e, arguments.length > 1)
        },
        removeProp : function (t) {
            return this.each(function () {
                delete this[mt.propFix[t] || t]
            })
        }
    }),
        mt.extend({
            prop : function (t, e, i) {
                var n,
                    s,
                    o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && mt.isXMLDoc(t) || (e = mt.propFix[e] || e, s = mt.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
            },
            propHooks : {
                tabIndex : {
                    get : function (t) {
                        var e = mt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : we.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix : {
                for  : "htmlFor", class : "className"
            }
        }),
    pt.optSelected || (mt.propHooks.selected = {
        get : function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
                null
        },
        set : function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }),
        mt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            mt.propFix[this.toLowerCase()] = this
        }),
        mt.fn.extend({
            addClass : function (t) {
                var e,
                    i,
                    n,
                    s,
                    o,
                    r,
                    a,
                    l = 0;
                if (mt.isFunction(t))
                    return this.each(function (e) {
                        mt(this).addClass(t.call(this, e, G(this)))
                    });
                if ("string" == typeof t && t)
                    for (e = t.match(Lt) || []; i = this[l++]; )
                        if (s = G(i), n = 1 === i.nodeType && " " + U(s) + " ") {
                            for (r = 0; o = e[r++]; )
                                n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            a = U(n),
                            s !== a && i.setAttribute("class", a)
                        }
                return this
            },
            removeClass : function (t) {
                var e,
                    i,
                    n,
                    s,
                    o,
                    r,
                    a,
                    l = 0;
                if (mt.isFunction(t))
                    return this.each(function (e) {
                        mt(this).removeClass(t.call(this, e, G(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Lt) || []; i = this[l++]; )
                        if (s = G(i), n = 1 === i.nodeType && " " + U(s) + " ") {
                            for (r = 0; o = e[r++]; )
                                for (; n.indexOf(" " + o + " ") > -1; )
                                    n = n.replace(" " + o + " ", " ");
                            a = U(n),
                            s !== a && i.setAttribute("class", a)
                        }
                return this
            },
            toggleClass : function (t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : mt.isFunction(t) ? this.each(function (i) {
                    mt(this).toggleClass(t.call(this, i, G(this), e), e)
                }) : this.each(function () {
                    var e,
                        n,
                        s,
                        o;
                    if ("string" === i)
                        for (n = 0, s = mt(this), o = t.match(Lt) || []; e = o[n++]; )
                            s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else
                        void 0 !== t && "boolean" !== i || (e = G(this), e && $t.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : $t.get(this, "__className__") || ""))
                })
            },
            hasClass : function (t) {
                var e,
                    i,
                    n = 0;
                for (e = " " + t + " "; i = this[n++]; )
                    if (1 === i.nodeType && (" " + U(G(i)) + " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        });
    var Se = /\r/g;
    mt.fn.extend({
        val : function (t) {
            var e,
                i,
                n,
                s = this[0]; {
                if (arguments.length)
                    return n = mt.isFunction(t), this.each(function (i) {
                        var s;
                        1 === this.nodeType && (s = n ? t.call(this, i, mt(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = mt.map(s, function (t) {
                                return null == t ? "" : t + ""
                            })), e = mt.valHooks[this.type] || mt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                    });
                if (s)
                    return e = mt.valHooks[s.type] || mt.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(Se, "") : null == i ? "" : i)
            }
        }
    }),
        mt.extend({
            valHooks : {
                option : {
                    get : function (t) {
                        var e = mt.find.attr(t, "value");
                        return null != e ? e : U(mt.text(t))
                    }
                },
                select : {
                    get : function (t) {
                        var e,
                            i,
                            n,
                            o = t.options,
                            r = t.selectedIndex,
                            a = "select-one" === t.type,
                            l = a ? null : [],
                            c = a ? r + 1 : o.length;
                        for (n = r < 0 ? c : a ? r : 0; n < c; n++)
                            if (i = o[n], (i.selected || n === r) && !i.disabled && (!i.parentNode.disabled || !s(i.parentNode, "optgroup"))) {
                                if (e = mt(i).val(), a)
                                    return e;
                                l.push(e)
                            }
                        return l
                    },
                    set : function (t, e) {
                        for (var i, n, s = t.options, o = mt.makeArray(e), r = s.length; r--; )
                            n = s[r], (n.selected = mt.inArray(mt.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        mt.each(["radio", "checkbox"], function () {
            mt.valHooks[this] = {
                set : function (t, e) {
                    if (Array.isArray(e))
                        return t.checked = mt.inArray(mt(t).val(), e) > -1
                }
            },
            pt.checkOn || (mt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
    var Ce = /^(?:focusinfocus|focusoutblur)$/;
    mt.extend(mt.event, {
        trigger : function (e, i, n, s) {
            var o,
                r,
                a,
                l,
                c,
                h,
                u,
                d = [n || it],
                p = ht.call(e, "type") ? e.type : e,
                f = ht.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = a = n = n || it, 3 !== n.nodeType && 8 !== n.nodeType && !Ce.test(p + mt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[mt.expando] ? e : new mt.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : mt.makeArray(i, [e]), u = mt.event.special[p] || {}, s || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!s && !u.noBubble && !mt.isWindow(n)) {
                    for (l = u.delegateType || p, Ce.test(l + p) || (r = r.parentNode); r; r = r.parentNode)
                        d.push(r), a = r;
                    a === (n.ownerDocument || it) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0; (r = d[o++]) && !e.isPropagationStopped(); )
                    e.type = o > 1 ? l : u.bindType || p, h = ($t.get(r, "events") || {})[e.type] && $t.get(r, "handle"), h && h.apply(r, i), h = c && r[c], h && h.apply && Rt(r) && (e.result = h.apply(r, i), e.result === !1 && e.preventDefault());
                return e.type = p,
                s || e.isDefaultPrevented() || u._default && u._default.apply(d.pop(), i) !== !1 || !Rt(n) || c && mt.isFunction(n[p]) && !mt.isWindow(n) && (a = n[c], a && (n[c] = null), mt.event.triggered = p, n[p](), mt.event.triggered = void 0, a && (n[c] = a)),
                    e.result
            }
        },
        simulate : function (t, e, i) {
            var n = mt.extend(new mt.Event, i, {
                type : t,
                isSimulated : !0
            });
            mt.event.trigger(n, null, e)
        }
    }),
        mt.fn.extend({
            trigger : function (t, e) {
                return this.each(function () {
                    mt.event.trigger(t, e, this)
                })
            },
            triggerHandler : function (t, e) {
                var i = this[0];
                if (i)
                    return mt.event.trigger(t, e, i, !0)
            }
        }),
        mt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            mt.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }),
        mt.fn.extend({
            hover : function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }),
        pt.focusin = "onfocusin" in t,
    pt.focusin || mt.each({
        focus : "focusin",
        blur : "focusout"
    }, function (t, e) {
        var i = function (t) {
            mt.event.simulate(e, t.target, mt.event.fix(t))
        };
        mt.event.special[e] = {
            setup : function () {
                var n = this.ownerDocument || this,
                    s = $t.access(n, e);
                s || n.addEventListener(t, i, !0),
                    $t.access(n, e, (s || 0) + 1)
            },
            teardown : function () {
                var n = this.ownerDocument || this,
                    s = $t.access(n, e) - 1;
                s ? $t.access(n, e, s) : (n.removeEventListener(t, i, !0), $t.remove(n, e))
            }
        }
    });
    var ke = t.location,
        Te = mt.now(),
        Ae = /\?/;
    mt.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e)
            return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || mt.error("Invalid XML: " + e),
            i
    };
    var Me = /\[\]$/,
        Ee = /\r?\n/g,
        Ie = /^(?:submit|button|image|reset|file)$/i,
        Le = /^(?:input|select|textarea|keygen)/i;
    mt.param = function (t, e) {
        var i,
            n = [],
            s = function (t, e) {
                var i = mt.isFunction(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(t) || t.jquery && !mt.isPlainObject(t))
            mt.each(t, function () {
                s(this.name, this.value)
            });
        else
            for (i in t)
                X(i, t[i], e, s);
        return n.join("&")
    },
        mt.fn.extend({
            serialize : function () {
                return mt.param(this.serializeArray())
            },
            serializeArray : function () {
                return this.map(function () {
                    var t = mt.prop(this, "elements");
                    return t ? mt.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !mt(this).is(":disabled") && Le.test(this.nodeName) && !Ie.test(t) && (this.checked || !Yt.test(t))
                }).map(function (t, e) {
                    var i = mt(this).val();
                    return null == i ? null : Array.isArray(i) ? mt.map(i, function (t) {
                        return {
                            name : e.name,
                            value : t.replace(Ee, "\r\n")
                        }
                    }) : {
                        name : e.name,
                        value : i.replace(Ee, "\r\n")
                    }
                }).get()
            }
        });
    var Oe = /%20/g,
        Pe = /#.*$/,
        De = /([?&])_=[^&]*/,
        Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        je = /^(?:GET|HEAD)$/,
        Ne = /^\/\//,
        Be = {},
        He = {},
        Fe = "*/".concat("*"),
        ze = it.createElement("a");
    ze.href = ke.href,
        mt.extend({
            active : 0,
            lastModified : {},
            etag : {},
            ajaxSettings : {
                url : ke.href,
                type : "GET",
                isLocal : $e.test(ke.protocol),
                global : !0,
                processData : !0,
                async : !0,
                contentType : "application/x-www-form-urlencoded; charset=UTF-8",
                accepts : {
                    "*" : Fe,
                    text : "text/plain",
                    html : "text/html",
                    xml : "application/xml, text/xml",
                    json : "application/json, text/javascript"
                },
                contents : {
                    xml : /\bxml\b/,
                    html : /\bhtml/,
                    json : /\bjson\b/
                },
                responseFields : {
                    xml : "responseXML",
                    text : "responseText",
                    json : "responseJSON"
                },
                converters : {
                    "* text" : String,
                    "text html" : !0,
                    "text json" : JSON.parse,
                    "text xml" : mt.parseXML
                },
                flatOptions : {
                    url : !0,
                    context : !0
                }
            },
            ajaxSetup : function (t, e) {
                return e ? Z(Z(t, mt.ajaxSettings), e) : Z(mt.ajaxSettings, t)
            },
            ajaxPrefilter : K(Be),
            ajaxTransport : K(He),
            ajax : function (e, i) {
                function n(e, i, n, a) {
                    var c,
                        d,
                        p,
                        b,
                        w,
                        x = i;
                    h || (h = !0, l && t.clearTimeout(l), s = void 0, r = a || "", S.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, n && (b = Q(f, S, n)), b = tt(f, b, S, c), c ? (f.ifModified && (w = S.getResponseHeader("Last-Modified"), w && (mt.lastModified[o] = w), w = S.getResponseHeader("etag"), w && (mt.etag[o] = w)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = b.state, d = b.data, p = b.error, c = !p)) : (p = x, !e && x || (x = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (i || x) + "", c ? _.resolveWith(m, [d, x, S]) : _.rejectWith(m, [S, x, p]), S.statusCode(y), y = void 0, u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [S, f, c ? d : p]), v.fireWith(m, [S, x]), u && (g.trigger("ajaxComplete", [S, f]), --mt.active || mt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (i = e, e = void 0),
                    i = i || {};
                var s,
                    o,
                    r,
                    a,
                    l,
                    c,
                    h,
                    u,
                    d,
                    p,
                    f = mt.ajaxSetup({}, i),
                    m = f.context || f,
                    g = f.context && (m.nodeType || m.jquery) ? mt(m) : mt.event,
                    _ = mt.Deferred(),
                    v = mt.Callbacks("once memory"),
                    y = f.statusCode || {},
                    b = {},
                    w = {},
                    x = "canceled",
                    S = {
                        readyState : 0,
                        getResponseHeader : function (t) {
                            var e;
                            if (h) {
                                if (!a)
                                    for (a = {}; e = Re.exec(r); )
                                        a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders : function () {
                            return h ? r : null
                        },
                        setRequestHeader : function (t, e) {
                            return null == h && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e),
                                this
                        },
                        overrideMimeType : function (t) {
                            return null == h && (f.mimeType = t),
                                this
                        },
                        statusCode : function (t) {
                            var e;
                            if (t)
                                if (h)
                                    S.always(t[S.status]);
                                else
                                    for (e in t)
                                        y[e] = [y[e], t[e]];
                            return this
                        },
                        abort : function (t) {
                            var e = t || x;
                            return s && s.abort(e),
                                n(0, e),
                                this
                        }
                    };
                if (_.promise(S), f.url = ((e || f.url || ke.href) + "").replace(Ne, ke.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Lt) || [""], null == f.crossDomain) {
                    c = it.createElement("a");
                    try {
                        c.href = f.url,
                            c.href = c.href,
                            f.crossDomain = ze.protocol + "//" + ze.host != c.protocol + "//" + c.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = mt.param(f.data, f.traditional)), J(Be, f, i, S), h)
                    return S;
                u = mt.event && f.global,
                u && 0 === mt.active++ && mt.event.trigger("ajaxStart"),
                    f.type = f.type.toUpperCase(),
                    f.hasContent = !je.test(f.type),
                    o = f.url.replace(Pe, ""),
                    f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Oe, "+")) : (p = f.url.slice(o.length), f.data && (o += (Ae.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(De, "$1"), p = (Ae.test(o) ? "&" : "?") + "_=" + Te++ + p), f.url = o + p),
                f.ifModified && (mt.lastModified[o] && S.setRequestHeader("If-Modified-Since", mt.lastModified[o]), mt.etag[o] && S.setRequestHeader("If-None-Match", mt.etag[o])),
                (f.data && f.hasContent && f.contentType !== !1 || i.contentType) && S.setRequestHeader("Content-Type", f.contentType),
                    S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : f.accepts["*"]);
                for (d in f.headers)
                    S.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (f.beforeSend.call(m, S, f) === !1 || h))
                    return S.abort();
                if (x = "abort", v.add(f.complete), S.done(f.success), S.fail(f.error), s = J(He, f, i, S)) {
                    if (S.readyState = 1, u && g.trigger("ajaxSend", [S, f]), h)
                        return S;
                    f.async && f.timeout > 0 && (l = t.setTimeout(function () {
                        S.abort("timeout")
                    }, f.timeout));
                    try {
                        h = !1,
                            s.send(b, n)
                    } catch (t) {
                        if (h)
                            throw t;
                        n(-1, t)
                    }
                } else
                    n(-1, "No Transport");
                return S
            },
            getJSON : function (t, e, i) {
                return mt.get(t, e, i, "json")
            },
            getScript : function (t, e) {
                return mt.get(t, void 0, e, "script")
            }
        }),
        mt.each(["get", "post"], function (t, e) {
            mt[e] = function (t, i, n, s) {
                return mt.isFunction(i) && (s = s || n, n = i, i = void 0),
                    mt.ajax(mt.extend({
                        url : t,
                        type : e,
                        dataType : s,
                        data : i,
                        success : n
                    }, mt.isPlainObject(t) && t))
            }
        }),
        mt._evalUrl = function (t) {
            return mt.ajax({
                url : t,
                type : "GET",
                dataType : "script",
                cache : !0,
                async : !1,
                global : !1,
                throws : !0
            })
        },
        mt.fn.extend({
            wrapAll : function (t) {
                var e;
                return this[0] && (mt.isFunction(t) && (t = t.call(this[0])), e = mt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                    return t
                }).append(this)),
                    this
            },
            wrapInner : function (t) {
                return mt.isFunction(t) ? this.each(function (e) {
                    mt(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = mt(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap : function (t) {
                var e = mt.isFunction(t);
                return this.each(function (i) {
                    mt(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap : function (t) {
                return this.parent(t).not("body").each(function () {
                    mt(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        mt.expr.pseudos.hidden = function (t) {
            return !mt.expr.pseudos.visible(t)
        },
        mt.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        },
        mt.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}

        };
    var Ve = {
            0 : 200,
            1223 : 204
        },
        We = mt.ajaxSettings.xhr();
    pt.cors = !!We && "withCredentials" in We,
        pt.ajax = We = !!We,
        mt.ajaxTransport(function (e) {
            var i,
                n;
            if (pt.cors || We && !e.crossDomain)
                return {
                    send : function (s, o) {
                        var r,
                            a = e.xhr();
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields)
                                a[r] = e.xhrFields[r];
                        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                        e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                        for (r in s)
                            a.setRequestHeader(r, s[r]);
                        i = function (t) {
                            return function () {
                                i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ve[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary : a.response
                                }
                                    : {
                                        text : a.responseText
                                    }, a.getAllResponseHeaders()))
                            }
                        },
                            a.onload = i(),
                            n = a.onerror = i("error"),
                            void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                                4 === a.readyState && t.setTimeout(function () {
                                    i && n()
                                })
                            },
                            i = i("abort");
                        try {
                            a.send(e.hasContent && e.data || null)
                        } catch (t) {
                            if (i)
                                throw t
                        }
                    },
                    abort : function () {
                        i && i()
                    }
                }
        }),
        mt.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }),
        mt.ajaxSetup({
            accepts : {
                script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents : {
                script : /\b(?:java|ecma)script\b/
            },
            converters : {
                "text script" : function (t) {
                    return mt.globalEval(t),
                        t
                }
            }
        }),
        mt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET")
        }),
        mt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e,
                    i;
                return {
                    send : function (n, s) {
                        e = mt("<script>").prop({
                            charset : t.scriptCharset,
                            src : t.url
                        }).on("load error", i = function (t) {
                            e.remove(),
                                i = null,
                            t && s("error" === t.type ? 404 : 200, t.type)
                        }),
                            it.head.appendChild(e[0])
                    },
                    abort : function () {
                        i && i()
                    }
                }
            }
        });
    var qe = [],
        Ye = /(=)\?(?=&|$)|\?\?/;
    mt.ajaxSetup({
        jsonp : "callback",
        jsonpCallback : function () {
            var t = qe.pop() || mt.expando + "_" + Te++;
            return this[t] = !0,
                t
        }
    }),
        mt.ajaxPrefilter("json jsonp", function (e, i, n) {
            var s,
                o,
                r,
                a = e.jsonp !== !1 && (Ye.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return s = e.jsonpCallback = mt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ye, "$1" + s) : e.jsonp !== !1 && (e.url += (Ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
                    return r || mt.error(s + " was not called"),
                        r[0]
                },
                    e.dataTypes[0] = "json",
                    o = t[s],
                    t[s] = function () {
                        r = arguments
                    },
                    n.always(function () {
                        void 0 === o ? mt(t).removeProp(s) : t[s] = o,
                        e[s] && (e.jsonpCallback = i.jsonpCallback, qe.push(s)),
                        r && mt.isFunction(o) && o(r[0]),
                            r = o = void 0
                    }),
                    "script"
        }),
        pt.createHTMLDocument = function () {
            var t = it.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>",
            2 === t.childNodes.length
        }
        (),
        mt.parseHTML = function (t, e, i) {
            if ("string" != typeof t)
                return [];
            "boolean" == typeof e && (i = e, e = !1);
            var n,
                s,
                o;
            return e || (pt.createHTMLDocument ? (e = it.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = it.location.href, e.head.appendChild(n)) : e = it),
                s = Ct.exec(t),
                o = !i && [],
                s ? [e.createElement(s[1])] : (s = b([t], e, o), o && o.length && mt(o).remove(), mt.merge([], s.childNodes))
        },
        mt.fn.load = function (t, e, i) {
            var n,
                s,
                o,
                r = this,
                a = t.indexOf(" ");
            return a > -1 && (n = U(t.slice(a)), t = t.slice(0, a)),
                mt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"),
            r.length > 0 && mt.ajax({
                url : t,
                type : s || "GET",
                dataType : "html",
                data : e
            }).done(function (t) {
                o = arguments,
                    r.html(n ? mt("<div>").append(mt.parseHTML(t)).find(n) : t)
            }).always(i && function (t, e) {
                    r.each(function () {
                        i.apply(this, o || [t.responseText, e, t])
                    })
                }),
                this
        },
        mt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            mt.fn[e] = function (t) {
                return this.on(e, t)
            }
        }),
        mt.expr.pseudos.animated = function (t) {
            return mt.grep(mt.timers, function (e) {
                return t === e.elem
            }).length
        },
        mt.offset = {
            setOffset : function (t, e, i) {
                var n,
                    s,
                    o,
                    r,
                    a,
                    l,
                    c,
                    h = mt.css(t, "position"),
                    u = mt(t),
                    d = {};
                "static" === h && (t.style.position = "relative"),
                    a = u.offset(),
                    o = mt.css(t, "top"),
                    l = mt.css(t, "left"),
                    c = ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1,
                    c ? (n = u.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0),
                mt.isFunction(e) && (e = e.call(t, i, mt.extend({}, a))),
                null != e.top && (d.top = e.top - a.top + r),
                null != e.left && (d.left = e.left - a.left + s),
                    "using" in e ? e.using.call(t, d) : u.css(d)
            }
        },
        mt.fn.extend({
            offset : function (t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function (e) {
                        mt.offset.setOffset(this, t, e)
                    });
                var e,
                    i,
                    n,
                    s,
                    o = this[0];
                if (o)
                    return o.getClientRects().length ? (n = o.getBoundingClientRect(), e = o.ownerDocument, i = e.documentElement, s = e.defaultView, {
                        top : n.top + s.pageYOffset - i.clientTop,
                        left : n.left + s.pageXOffset - i.clientLeft
                    }) : {
                        top : 0,
                        left : 0
                    }
            },
            position : function () {
                if (this[0]) {
                    var t,
                        e,
                        i = this[0],
                        n = {
                            top : 0,
                            left : 0
                        };
                    return "fixed" === mt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), s(t[0], "html") || (n = t.offset()), n = {
                        top : n.top + mt.css(t[0], "borderTopWidth", !0),
                        left : n.left + mt.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top : e.top - n.top - mt.css(i, "marginTop", !0),
                        left : e.left - n.left - mt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent : function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === mt.css(t, "position"); )
                        t = t.offsetParent;
                    return t || Jt
                })
            }
        }),
        mt.each({
            scrollLeft : "pageXOffset",
            scrollTop : "pageYOffset"
        }, function (t, e) {
            var i = "pageYOffset" === e;
            mt.fn[t] = function (n) {
                return Dt(this, function (t, n, s) {
                    var o;
                    return mt.isWindow(t) ? o = t : 9 === t.nodeType && (o = t.defaultView),
                        void 0 === s ? o ? o[e] : t[n] : void(o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s)
                }, t, n, arguments.length)
            }
        }),
        mt.each(["top", "left"], function (t, e) {
            mt.cssHooks[e] = P(pt.pixelPosition, function (t, i) {
                if (i)
                    return i = O(t, e), ae.test(i) ? mt(t).position()[e] + "px" : i
            })
        }),
        mt.each({
            Height : "height",
            Width : "width"
        }, function (t, e) {
            mt.each({
                padding : "inner" + t,
                content : e,
                "" : "outer" + t
            }, function (i, n) {
                mt.fn[n] = function (s, o) {
                    var r = arguments.length && (i || "boolean" != typeof s),
                        a = i || (s === !0 || o === !0 ? "margin" : "border");
                    return Dt(this, function (e, i, s) {
                        var o;
                        return mt.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? mt.css(e, i, a) : mt.style(e, i, s, a)
                    }, e, r ? s : void 0, r)
                }
            })
        }),
        mt.fn.extend({
            bind : function (t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind : function (t, e) {
                return this.off(t, null, e)
            },
            delegate : function (t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate : function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }),
        mt.holdReady = function (t) {
            t ? mt.readyWait++ : mt.ready(!0)
        },
        mt.isArray = Array.isArray,
        mt.parseJSON = JSON.parse,
        mt.nodeName = s,
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return mt
    });
    var Ue = t.jQuery,
        Ge = t.$;
    return mt.noConflict = function (e) {
        return t.$ === mt && (t.$ = Ge),
        e && t.jQuery === mt && (t.jQuery = Ue),
            mt
    },
    e || (t.jQuery = t.$ = mt),
        mt
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}
(function (t) {

    function a(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments),
                this._refresh(),
            e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {};
    var l = (t.ui.version = "1.12.1", 0),
        c = Array.prototype.slice;
    t.cleanData = function (e) {
        return function (i) {
            var n,
                s,
                o;
            for (o = 0; null != (s = i[o]); o++)
                try {
                    n = t._data(s, "events"),
                    n && n.remove && t(s).triggerHandler("remove")
                } catch (t) {}

            e(i)
        }
    }
    (t.cleanData),
        t.widget = function (e, i, n) {
            var s,
                o,
                r,
                a = {},
                l = e.split(".")[0];
            e = e.split(".")[1];
            var c = l + "-" + e;
            return n || (n = i, i = t.Widget),
            t.isArray(n) && (n = t.extend.apply(null, [{}

            ].concat(n))),
                t.expr[":"][c.toLowerCase()] = function (e) {
                    return !!t.data(e, c)
                },
                t[l] = t[l] || {},
                s = t[l][e],
                o = t[l][e] = function (t, e) {
                    return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
                },
                t.extend(o, s, {
                    version : n.version,
                    _proto : t.extend({}, n),
                    _childConstructors : []
                }),
                r = new i,
                r.options = t.widget.extend({}, r.options),
                t.each(n, function (e, n) {
                    return t.isFunction(n) ? void(a[e] = function () {
                        function t() {
                            return i.prototype[e].apply(this, arguments)
                        }
                        function s(t) {
                            return i.prototype[e].apply(this, t)
                        }
                        return function () {
                            var e,
                                i = this._super,
                                o = this._superApply;
                            return this._super = t,
                                this._superApply = s,
                                e = n.apply(this, arguments),
                                this._super = i,
                                this._superApply = o,
                                e
                        }
                    }
                    ()) : void(a[e] = n)
                }),
                o.prototype = t.widget.extend(r, {
                    widgetEventPrefix : s ? r.widgetEventPrefix || e : e
                }, a, {
                    constructor : o,
                    namespace : l,
                    widgetName : e,
                    widgetFullName : c
                }),
                s ? (t.each(s._childConstructors, function (e, i) {
                    var n = i.prototype;
                    t.widget(n.namespace + "." + n.widgetName, o, i._proto)
                }), delete s._childConstructors) : i._childConstructors.push(o),
                t.widget.bridge(e, o),
                o
        },
        t.widget.extend = function (e) {
            for (var i, n, s = c.call(arguments, 1), o = 0, r = s.length; o < r; o++)
                for (i in s[o])
                    n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n);
            return e
        },
        t.widget.bridge = function (e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function (s) {
                var o = "string" == typeof s,
                    r = c.call(arguments, 1),
                    a = this;
                return o ? this.length || "instance" !== s ? this.each(function () {
                    var i,
                        o = t.data(this, n);
                    return "instance" === s ? (a = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, r), i !== o && void 0 !== i ? (a = i && i.jquery ? a.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                }) : a = void 0 : (r.length && (s = t.widget.extend.apply(null, [s].concat(r))), this.each(function () {
                    var e = t.data(this, n);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                })),
                    a
            }
        },
        t.Widget = function () {},
        t.Widget._childConstructors = [],
        t.Widget.prototype = {
            widgetName : "widget",
            widgetEventPrefix : "",
            defaultElement : "<div>",
            options : {
                classes : {},
                disabled : !1,
                create : null
            },
            _createWidget : function (e, i) {
                i = t(i || this.defaultElement || this)[0],
                    this.element = t(i),
                    this.uuid = l++,
                    this.eventNamespace = "." + this.widgetName + this.uuid,
                    this.bindings = t(),
                    this.hoverable = t(),
                    this.focusable = t(),
                    this.classesElementLookup = {},
                i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove : function (t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
                    this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
                    this._create(),
                this.options.disabled && this._setOptionDisabled(this.options.disabled),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init()
            },
            _getCreateOptions : function () {
                return {}

            },
            _getCreateEventData : t.noop,
            _create : t.noop,
            _init : t.noop,
            destroy : function () {
                var e = this;
                this._destroy(),
                    t.each(this.classesElementLookup, function (t, i) {
                        e._removeClass(i, t)
                    }),
                    this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                    this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                    this.bindings.off(this.eventNamespace)
            },
            _destroy : t.noop,
            widget : function () {
                return this.element
            },
            option : function (e, i) {
                var n,
                    s,
                    o,
                    r = e;
                if (0 === arguments.length)
                    return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                        for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++)
                            s[n[o]] = s[n[o]] || {},
                                s = s[n[o]];
                        if (e = n.pop(), 1 === arguments.length)
                            return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length)
                            return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = i
                    }
                return this._setOptions(r),
                    this
            },
            _setOptions : function (t) {
                var e;
                for (e in t)
                    this._setOption(e, t[e]);
                return this
            },
            _setOption : function (t, e) {
                return "classes" === t && this._setOptionClasses(e),
                    this.options[t] = e,
                "disabled" === t && this._setOptionDisabled(e),
                    this
            },
            _setOptionClasses : function (e) {
                var i,
                    n,
                    s;
                for (i in e)
                    s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                        element : n,
                        keys : i,
                        classes : e,
                        add : !0
                    })))
            },
            _setOptionDisabled : function (t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
                t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable : function () {
                return this._setOptions({
                    disabled : !1
                })
            },
            disable : function () {
                return this._setOptions({
                    disabled : !0
                })
            },
            _classes : function (e) {
                function i(i, o) {
                    var r,
                        a;
                    for (a = 0; a < i.length; a++)
                        r = s.classesElementLookup[i[a]] || t(), r = t(e.add ? t.unique(r.get().concat(e.element.get())) : r.not(e.element).get()), s.classesElementLookup[i[a]] = r, n.push(i[a]), o && e.classes[i[a]] && n.push(e.classes[i[a]])
                }
                var n = [],
                    s = this;
                return e = t.extend({
                    element : this.element,
                    classes : this.options.classes || {}

                }, e),
                    this._on(e.element, {
                        remove : "_untrackClassesElement"
                    }),
                e.keys && i(e.keys.match(/\S+/g) || [], !0),
                e.extra && i(e.extra.match(/\S+/g) || []),
                    n.join(" ")
            },
            _untrackClassesElement : function (e) {
                var i = this;
                t.each(i.classesElementLookup, function (n, s) {
                    t.inArray(e.target, s) !== -1 && (i.classesElementLookup[n] = t(s.not(e.target).get()))
                })
            },
            _removeClass : function (t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass : function (t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass : function (t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t,
                    o = {
                        extra : s ? e : i,
                        keys : s ? t : e,
                        element : s ? this.element : t,
                        add : n
                    };
                return o.element.toggleClass(this._classes(o), n),
                    this
            },
            _on : function (e, i, n) {
                var s,
                    o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1),
                    n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()),
                    t.each(n, function (n, r) {
                        function a() {
                            if (e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled"))
                                return ("string" == typeof r ? o[r] : r).apply(o, arguments)
                        }
                        "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                        var l = n.match(/^([\w:-]*)\s*(.*)$/),
                            c = l[1] + o.eventNamespace,
                            h = l[2];
                        h ? s.on(c, h, a) : i.on(c, a)
                    })
            },
            _off : function (e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                    e.off(i).off(i),
                    this.bindings = t(this.bindings.not(e).get()),
                    this.focusable = t(this.focusable.not(e).get()),
                    this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay : function (t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable : function (e) {
                this.hoverable = this.hoverable.add(e),
                    this._on(e, {
                        mouseenter : function (e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave : function (e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                        }
                    })
            },
            _focusable : function (e) {
                this.focusable = this.focusable.add(e),
                    this._on(e, {
                        focusin : function (e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-focus")
                        },
                        focusout : function (e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                        }
                    })
            },
            _trigger : function (e, i, n) {
                var s,
                    o,
                    r = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o)
                        s in i || (i[s] = o[s]);
                return this.element.trigger(i, n),
                    !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        },
        t.each({
            show : "fadeIn",
            hide : "fadeOut"
        }, function (e, i) {
            t.Widget.prototype["_" + e] = function (n, s, o) {
                "string" == typeof s && (s = {
                    effect : s
                });
                var r,
                    a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                s = s || {},
                "number" == typeof s && (s = {
                    duration : s
                }),
                    r = !t.isEmptyObject(s),
                    s.complete = o,
                s.delay && n.delay(s.delay),
                    r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function (i) {
                        t(this)[e](),
                        o && o.call(n[0]),
                            i()
                    })
            }
        });
    t.widget;
    !function () {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
        }
        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }
        function n(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width : e.width(),
                height : e.height(),
                offset : {
                    top : 0,
                    left : 0
                }
            }
                : t.isWindow(i) ? {
                    width : e.width(),
                    height : e.height(),
                    offset : {
                        top : e.scrollTop(),
                        left : e.scrollLeft()
                    }
                }
                    : i.preventDefault ? {
                        width : 0,
                        height : 0,
                        offset : {
                            top : i.pageY,
                            left : i.pageX
                        }
                    }
                        : {
                            width : e.outerWidth(),
                            height : e.outerHeight(),
                            offset : e.offset()
                        }
        }
        var s,
            o = Math.max,
            r = Math.abs,
            a = /left|center|right/,
            l = /top|center|bottom/,
            c = /[\+\-]\d+(\.[\d]+)?%?/,
            h = /^\w+/,
            u = /%$/,
            d = t.fn.position;

    }
    ();
    var h = (t.ui.position, t.extend(t.expr[":"], {
            data : t.expr.createPseudo ? t.expr.createPseudo(function (e) {
                return function (i) {
                    return !!t.data(i, e)
                }
            }) : function (e, i, n) {
                return !!t.data(e, n[3])
            }
        }), t.fn.extend({
            disableSelection : function () {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.on(t + ".ui-disableSelection", function (t) {
                        t.preventDefault()
                    })
                }
            }
            (),
            enableSelection : function () {
                return this.off(".ui-disableSelection")
            }
        }), "ui-effects-"),
        u = "ui-effects-style",
        d = "ui-effects-animated",
        p = t;
    t.effects = {
        effect : {}

    },
        function (t, e) {
            function i(t, e, i) {
                var n = u[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
            }
            function n(e) {
                var i = c(),
                    n = i._rgba = [];
                return e = e.toLowerCase(),
                    f(l, function (t, s) {
                        var o,
                            r = s.re.exec(e),
                            a = r && s.parse(r),
                            l = s.space || "rgba";
                        if (a)
                            return o = i[l](a), i[h[l].cache] = o[h[l].cache], n = i._rgba = o._rgba, !1
                    }),
                    n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
            }
            function s(t, e, i) {
                return i = (i + 1) % 1,
                    6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var o,
                r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                a = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re : /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse : function (t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re : /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse : function (t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re : /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse : function (t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re : /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse : function (t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re : /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space : "hsla",
                    parse : function (t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }
                ],
                c = t.Color = function (e, i, n, s) {
                    return new t.Color.fn.parse(e, i, n, s)
                },
                h = {
                    rgba : {
                        props : {
                            red : {
                                idx : 0,
                                type : "byte"
                            },
                            green : {
                                idx : 1,
                                type : "byte"
                            },
                            blue : {
                                idx : 2,
                                type : "byte"
                            }
                        }
                    },
                    hsla : {
                        props : {
                            hue : {
                                idx : 0,
                                type : "degrees"
                            },
                            saturation : {
                                idx : 1,
                                type : "percent"
                            },
                            lightness : {
                                idx : 2,
                                type : "percent"
                            }
                        }
                    }
                },
                u = {
                    byte : {
                        floor : !0,
                        max : 255
                    },
                    percent : {
                        max : 1
                    },
                    degrees : {
                        mod : 360,
                        floor : !0
                    }
                },
                d = c.support = {},
                p = t("<p>")[0],
                f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)",
                d.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
                f(h, function (t, e) {
                    e.cache = "_" + t,
                        e.props.alpha = {
                            idx : 3,
                            type : "percent",
                            def : 1
                        }
                }),
                c.fn = t.extend(c.prototype, {
                    parse : function (s, r, a, l) {
                        if (s === e)
                            return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                        var u = this,
                            d = t.type(s),
                            p = this._rgba = [];
                        return r !== e && (s = [s, r, a, l], d = "array"),
                            "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(h.rgba.props, function (t, e) {
                                p[e.idx] = i(s[e.idx], e)
                            }), this) : "object" === d ? (s instanceof c ? f(h, function (t, e) {
                                s[e.cache] && (u[e.cache] = s[e.cache].slice())
                            }) : f(h, function (e, n) {
                                var o = n.cache;
                                f(n.props, function (t, e) {
                                    if (!u[o] && n.to) {
                                        if ("alpha" === t || null == s[t])
                                            return;
                                        u[o] = n.to(u._rgba)
                                    }
                                    u[o][e.idx] = i(s[t], e, !0)
                                }),
                                u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
                            }), this) : void 0
                    },
                    is : function (t) {
                        var e = c(t),
                            i = !0,
                            n = this;
                        return f(h, function (t, s) {
                            var o,
                                r = e[s.cache];
                            return r && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function (t, e) {
                                if (null != r[e.idx])
                                    return i = r[e.idx] === o[e.idx]
                            })),
                                i
                        }),
                            i
                    },
                    _space : function () {
                        var t = [],
                            e = this;
                        return f(h, function (i, n) {
                            e[n.cache] && t.push(i)
                        }),
                            t.pop()
                    },
                    transition : function (t, e) {
                        var n = c(t),
                            s = n._space(),
                            o = h[s],
                            r = 0 === this.alpha() ? c("transparent") : this,
                            a = r[o.cache] || o.to(r._rgba),
                            l = a.slice();
                        return n = n[o.cache],
                            f(o.props, function (t, s) {
                                var o = s.idx,
                                    r = a[o],
                                    c = n[o],
                                    h = u[s.type] || {};
                                null !== c && (null === r ? l[o] = c : (h.mod && (c - r > h.mod / 2 ? r += h.mod : r - c > h.mod / 2 && (r -= h.mod)), l[o] = i((c - r) * e + r, s)))
                            }),
                            this[s](l)
                    },
                    blend : function (e) {
                        if (1 === this._rgba[3])
                            return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = c(e)._rgba;
                        return c(t.map(i, function (t, e) {
                            return (1 - n) * s[e] + n * t
                        }))
                    },
                    toRgbaString : function () {
                        var e = "rgba(",
                            i = t.map(this._rgba, function (t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), e = "rgb("),
                        e + i.join() + ")"
                    },
                    toHslaString : function () {
                        var e = "hsla(",
                            i = t.map(this.hsla(), function (t, e) {
                                return null == t && (t = e > 2 ? 1 : 0),
                                e && e < 3 && (t = Math.round(100 * t) + "%"),
                                    t
                            });
                        return 1 === i[3] && (i.pop(), e = "hsl("),
                        e + i.join() + ")"
                    },
                    toHexString : function (e) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return e && i.push(~~(255 * n)),
                        "#" + t.map(i, function (t) {
                            return t = (t || 0).toString(16),
                                1 === t.length ? "0" + t : t
                        }).join("")
                    },
                    toString : function () {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }),
                c.fn.parse.prototype = c.fn,
                h.hsla.to = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2])
                        return [null, null, null, t[3]];
                    var e,
                        i,
                        n = t[0] / 255,
                        s = t[1] / 255,
                        o = t[2] / 255,
                        r = t[3],
                        a = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        c = a - l,
                        h = a + l,
                        u = .5 * h;
                    return e = l === a ? 0 : n === a ? 60 * (s - o) / c + 360 : s === a ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240,
                        i = 0 === c ? 0 : u <= .5 ? c / h : c / (2 - h),
                        [Math.round(e) % 360, i, u, null == r ? 1 : r]
                },
                h.hsla.from = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2])
                        return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        r = n <= .5 ? n * (1 + i) : n + i - n * i,
                        a = 2 * n - r;
                    return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
                },
                f(h, function (n, s) {
                    var o = s.props,
                        r = s.cache,
                        l = s.to,
                        h = s.from;
                    c.fn[n] = function (n) {
                        if (l && !this[r] && (this[r] = l(this._rgba)), n === e)
                            return this[r].slice();
                        var s,
                            a = t.type(n),
                            u = "array" === a || "object" === a ? n : arguments,
                            d = this[r].slice();
                        return f(o, function (t, e) {
                            var n = u["object" === a ? t : e.idx];
                            null == n && (n = d[e.idx]),
                                d[e.idx] = i(n, e)
                        }),
                            h ? (s = c(h(d)), s[r] = d, s) : c(d)
                    },
                        f(o, function (e, i) {
                            c.fn[e] || (c.fn[e] = function (s) {
                                var o,
                                    r = t.type(s),
                                    l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                    c = this[l](),
                                    h = c[i.idx];
                                return "undefined" === r ? h : ("function" === r && (s = s.call(this, h), r = t.type(s)), null == s && i.empty ? this : ("string" === r && (o = a.exec(s), o && (s = h + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[i.idx] = s, this[l](c)))
                            })
                        })
                }),
                c.hook = function (e) {
                    var i = e.split(" ");
                    f(i, function (e, i) {
                        t.cssHooks[i] = {
                            set : function (e, s) {
                                var o,
                                    r,
                                    a = "";
                                if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                    if (s = c(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                        for (r = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && r && r.style; )
                                            try {
                                                a = t.css(r, "backgroundColor"),
                                                    r = r.parentNode
                                            } catch (t) {}

                                        s = s.blend(a && "transparent" !== a ? a : "_default")
                                    }
                                    s = s.toRgbaString()
                                }
                                try {
                                    e.style[i] = s
                                } catch (t) {}

                            }
                        },
                            t.fx.step[i] = function (e) {
                                e.colorInit || (e.start = c(e.elem, i), e.end = c(e.end), e.colorInit = !0),
                                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                            }
                    })
                },
                c.hook(r),
                t.cssHooks.borderColor = {
                    expand : function (t) {
                        var e = {};
                        return f(["Top", "Right", "Bottom", "Left"], function (i, n) {
                            e["border" + n + "Color"] = t
                        }),
                            e
                    }
                },
                o = t.Color.names = {
                    aqua : "#00ffff",
                    black : "#000000",
                    blue : "#0000ff",
                    fuchsia : "#ff00ff",
                    gray : "#808080",
                    green : "#008000",
                    lime : "#00ff00",
                    maroon : "#800000",
                    navy : "#000080",
                    olive : "#808000",
                    purple : "#800080",
                    red : "#ff0000",
                    silver : "#c0c0c0",
                    teal : "#008080",
                    white : "#ffffff",
                    yellow : "#ffff00",
                    transparent : [null, null, null, 0],
                    _default : "#ffffff"
                }
        }
        (p),
        function () {
            function e(e) {
                var i,
                    n,
                    s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--; )
                        i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                else
                    for (i in s)
                        "string" == typeof s[i] && (o[i] = s[i]);
                return o
            }
            function i(e, i) {
                var n,
                    o,
                    r = {};
                for (n in i)
                    o = i[n], e[n] !== o && (s[n] || !t.fx.step[n] && isNaN(parseFloat(o)) || (r[n] = o));
                return r
            }
            var n = ["add", "remove", "toggle"],
                s = {
                    border : 1,
                    borderBottom : 1,
                    borderColor : 1,
                    borderLeft : 1,
                    borderRight : 1,
                    borderTop : 1,
                    borderWidth : 1,
                    margin : 1,
                    padding : 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
                t.fx.step[i] = function (t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }),
            t.fn.addBack || (t.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }),
                t.effects.animateClass = function (s, o, r, a) {
                    var l = t.speed(o, r, a);
                    return this.queue(function () {
                        var o,
                            r = t(this),
                            a = r.attr("class") || "",
                            c = l.children ? r.find("*").addBack() : r;
                        c = c.map(function () {
                            var i = t(this);
                            return {
                                el : i,
                                start : e(this)
                            }
                        }),
                            o = function () {
                                t.each(n, function (t, e) {
                                    s[e] && r[e + "Class"](s[e])
                                })
                            },
                            o(),
                            c = c.map(function () {
                                return this.end = e(this.el[0]),
                                    this.diff = i(this.start, this.end),
                                    this
                            }),
                            r.attr("class", a),
                            c = c.map(function () {
                                var e = this,
                                    i = t.Deferred(),
                                    n = t.extend({}, l, {
                                        queue : !1,
                                        complete : function () {
                                            i.resolve(e)
                                        }
                                    });
                                return this.el.animate(this.diff, n),
                                    i.promise()
                            }),
                            t.when.apply(t, c.get()).done(function () {
                                o(),
                                    t.each(arguments, function () {
                                        var e = this.el;
                                        t.each(this.diff, function (t) {
                                            e.css(t, "")
                                        })
                                    }),
                                    l.complete.call(r[0])
                            })
                    })
                },
                t.fn.extend({
                    addClass : function (e) {
                        return function (i, n, s, o) {
                            return n ? t.effects.animateClass.call(this, {
                                add : i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }
                    (t.fn.addClass),
                    removeClass : function (e) {
                        return function (i, n, s, o) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove : i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }
                    (t.fn.removeClass),
                    toggleClass : function (e) {
                        return function (i, n, s, o, r) {
                            return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                                add : i
                            }
                                : {
                                    remove : i
                                }, s, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle : i
                            }, n, s, o)
                        }
                    }
                    (t.fn.toggleClass),
                    switchClass : function (e, i, n, s, o) {
                        return t.effects.animateClass.call(this, {
                            add : i,
                            remove : e
                        }, n, s, o)
                    }
                })
        }
        ();
    var f,
        f = t.effects;

}),
function (t) {
    "use strict";
    var e,
        i = t.Base64,
        n = "2.1.9";
    if ("undefined" != typeof module && module.exports)
        try {
            e = require("buffer").Buffer
        } catch (t) {}

    var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        o = function (t) {
            for (var e = {}, i = 0, n = t.length; i < n; i++)
                e[t.charAt(i)] = i;
            return e
        }
        (s),
        r = String.fromCharCode,
        a = function (t) {
            if (t.length < 2) {
                var e = t.charCodeAt(0);
                return e < 128 ? t : e < 2048 ? r(192 | e >>> 6) + r(128 | 63 & e) : r(224 | e >>> 12 & 15) + r(128 | e >>> 6 & 63) + r(128 | 63 & e)
            }
            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
            return r(240 | e >>> 18 & 7) + r(128 | e >>> 12 & 63) + r(128 | e >>> 6 & 63) + r(128 | 63 & e)
        },
        l = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        c = function (t) {
            return t.replace(l, a)
        },
        h = function (t) {
            var e = [0, 2, 1][t.length % 3],
                i = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0),
                n = [s.charAt(i >>> 18), s.charAt(i >>> 12 & 63), e >= 2 ? "=" : s.charAt(i >>> 6 & 63), e >= 1 ? "=" : s.charAt(63 & i)];
            return n.join("")
        },
        u = t.btoa ? function (e) {
            return t.btoa(e)
        }
            : function (t) {
                return t.replace(/[\s\S]{1,3}/g, h)
            },
        d = e ? function (t) {
            return (t.constructor === e.constructor ? t : new e(t)).toString("base64")
        }
            : function (t) {
                return u(c(t))
            },
        p = function (t, e) {
            return e ? d(String(t)).replace(/[+\/]/g, function (t) {
                return "+" == t ? "-" : "_"
            }).replace(/=/g, "") : d(String(t))
        },
        f = function (t) {
            return p(t, !0)
        },
        m = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
        g = function (t) {
            switch (t.length) {
                case 4:
                    var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3),
                        i = e - 65536;
                    return r((i >>> 10) + 55296) + r((1023 & i) + 56320);
                case 3:
                    return r((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                default:
                    return r((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
            }
        },
        _ = function (t) {
            return t.replace(m, g)
        },
        v = function (t) {
            var e = t.length,
                i = e % 4,
                n = (e > 0 ? o[t.charAt(0)] << 18 : 0) | (e > 1 ? o[t.charAt(1)] << 12 : 0) | (e > 2 ? o[t.charAt(2)] << 6 : 0) | (e > 3 ? o[t.charAt(3)] : 0),
                s = [r(n >>> 16), r(n >>> 8 & 255), r(255 & n)];
            return s.length -= [0, 0, 2, 1][i],
                s.join("")
        },
        y = t.atob ? function (e) {
            return t.atob(e)
        }
            : function (t) {
                return t.replace(/[\s\S]{1,4}/g, v)
            },
        b = e ? function (t) {
            return (t.constructor === e.constructor ? t : new e(t, "base64")).toString()
        }
            : function (t) {
                return _(y(t))
            },
        w = function (t) {
            return b(String(t).replace(/[-_]/g, function (t) {
                return "-" == t ? "+" : "/"
            }).replace(/[^A-Za-z0-9\+\/]/g, ""))
        },
        x = function () {
            var e = t.Base64;
            return t.Base64 = i,
                e
        };
    if (t.Base64 = {
            VERSION : n,
            atob : y,
            btoa : u,
            fromBase64 : w,
            toBase64 : p,
            utob : c,
            encode : p,
            encodeURI : f,
            btou : _,
            decode : w,
            noConflict : x
        }, "function" == typeof Object.defineProperty) {
        var S = function (t) {
            return {
                value : t,
                enumerable : !1,
                writable : !0,
                configurable : !0
            }
        };
        t.Base64.extendString = function () {
            Object.defineProperty(String.prototype, "fromBase64", S(function () {
                return w(this)
            })),
                Object.defineProperty(String.prototype, "toBase64", S(function (t) {
                    return p(this, t)
                })),
                Object.defineProperty(String.prototype, "toBase64URI", S(function () {
                    return p(this, !0)
                }))
        }
    }
    t.Meteor && (Base64 = t.Base64)
}
(this), function (t) {
    "use strict";
    function e(t, e) {
        var i = (65535 & t) + (65535 & e),
            n = (t >> 16) + (e >> 16) + (i >> 16);
        return n << 16 | 65535 & i
    }
    function i(t, e) {
        return t << e | t >>> 32 - e
    }
    function n(t, n, s, o, r, a) {
        return e(i(e(e(n, t), e(o, a)), r), s)
    }
    function s(t, e, i, s, o, r, a) {
        return n(e & i | ~e & s, t, e, o, r, a)
    }
    function o(t, e, i, s, o, r, a) {
        return n(e & s | i & ~s, t, e, o, r, a)
    }
    function r(t, e, i, s, o, r, a) {
        return n(e^i^s, t, e, o, r, a)
    }
    function a(t, e, i, s, o, r, a) {
        return n(i^(e | ~s), t, e, o, r, a)
    }
    function l(t, i) {
        t[i >> 5] |= 128 << i % 32,
            t[(i + 64 >>> 9 << 4) + 14] = i;
        var n,
            l,
            c,
            h,
            u,
            d = 1732584193,
            p = -271733879,
            f = -1732584194,
            m = 271733878;
        for (n = 0; n < t.length; n += 16)
            l = d, c = p, h = f, u = m, d = s(d, p, f, m, t[n], 7, -680876936), m = s(m, d, p, f, t[n + 1], 12, -389564586), f = s(f, m, d, p, t[n + 2], 17, 606105819), p = s(p, f, m, d, t[n + 3], 22, -1044525330), d = s(d, p, f, m, t[n + 4], 7, -176418897), m = s(m, d, p, f, t[n + 5], 12, 1200080426), f = s(f, m, d, p, t[n + 6], 17, -1473231341), p = s(p, f, m, d, t[n + 7], 22, -45705983), d = s(d, p, f, m, t[n + 8], 7, 1770035416), m = s(m, d, p, f, t[n + 9], 12, -1958414417), f = s(f, m, d, p, t[n + 10], 17, -42063), p = s(p, f, m, d, t[n + 11], 22, -1990404162), d = s(d, p, f, m, t[n + 12], 7, 1804603682), m = s(m, d, p, f, t[n + 13], 12, -40341101), f = s(f, m, d, p, t[n + 14], 17, -1502002290), p = s(p, f, m, d, t[n + 15], 22, 1236535329), d = o(d, p, f, m, t[n + 1], 5, -165796510), m = o(m, d, p, f, t[n + 6], 9, -1069501632), f = o(f, m, d, p, t[n + 11], 14, 643717713), p = o(p, f, m, d, t[n], 20, -373897302), d = o(d, p, f, m, t[n + 5], 5, -701558691), m = o(m, d, p, f, t[n + 10], 9, 38016083), f = o(f, m, d, p, t[n + 15], 14, -660478335), p = o(p, f, m, d, t[n + 4], 20, -405537848), d = o(d, p, f, m, t[n + 9], 5, 568446438), m = o(m, d, p, f, t[n + 14], 9, -1019803690), f = o(f, m, d, p, t[n + 3], 14, -187363961), p = o(p, f, m, d, t[n + 8], 20, 1163531501), d = o(d, p, f, m, t[n + 13], 5, -1444681467), m = o(m, d, p, f, t[n + 2], 9, -51403784), f = o(f, m, d, p, t[n + 7], 14, 1735328473), p = o(p, f, m, d, t[n + 12], 20, -1926607734), d = r(d, p, f, m, t[n + 5], 4, -378558), m = r(m, d, p, f, t[n + 8], 11, -2022574463), f = r(f, m, d, p, t[n + 11], 16, 1839030562), p = r(p, f, m, d, t[n + 14], 23, -35309556), d = r(d, p, f, m, t[n + 1], 4, -1530992060), m = r(m, d, p, f, t[n + 4], 11, 1272893353), f = r(f, m, d, p, t[n + 7], 16, -155497632), p = r(p, f, m, d, t[n + 10], 23, -1094730640), d = r(d, p, f, m, t[n + 13], 4, 681279174), m = r(m, d, p, f, t[n], 11, -358537222), f = r(f, m, d, p, t[n + 3], 16, -722521979), p = r(p, f, m, d, t[n + 6], 23, 76029189), d = r(d, p, f, m, t[n + 9], 4, -640364487), m = r(m, d, p, f, t[n + 12], 11, -421815835), f = r(f, m, d, p, t[n + 15], 16, 530742520), p = r(p, f, m, d, t[n + 2], 23, -995338651), d = a(d, p, f, m, t[n], 6, -198630844), m = a(m, d, p, f, t[n + 7], 10, 1126891415), f = a(f, m, d, p, t[n + 14], 15, -1416354905), p = a(p, f, m, d, t[n + 5], 21, -57434055), d = a(d, p, f, m, t[n + 12], 6, 1700485571), m = a(m, d, p, f, t[n + 3], 10, -1894986606), f = a(f, m, d, p, t[n + 10], 15, -1051523), p = a(p, f, m, d, t[n + 1], 21, -2054922799), d = a(d, p, f, m, t[n + 8], 6, 1873313359), m = a(m, d, p, f, t[n + 15], 10, -30611744), f = a(f, m, d, p, t[n + 6], 15, -1560198380), p = a(p, f, m, d, t[n + 13], 21, 1309151649), d = a(d, p, f, m, t[n + 4], 6, -145523070), m = a(m, d, p, f, t[n + 11], 10, -1120210379), f = a(f, m, d, p, t[n + 2], 15, 718787259), p = a(p, f, m, d, t[n + 9], 21, -343485551), d = e(d, l), p = e(p, c), f = e(f, h), m = e(m, u);
        return [d, p, f, m]
    }
    function c(t) {
        var e,
            i = "",
            n = 32 * t.length;
        for (e = 0; e < n; e += 8)
            i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
        return i
    }
    function h(t) {
        var e,
            i = [];
        for (i[(t.length >> 2) - 1] = void 0, e = 0; e < i.length; e += 1)
            i[e] = 0;
        var n = 8 * t.length;
        for (e = 0; e < n; e += 8)
            i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
        return i
    }
    function u(t) {
        return c(l(h(t), 8 * t.length))
    }
    function d(t, e) {
        var i,
            n,
            s = h(t),
            o = [],
            r = [];
        for (o[15] = r[15] = void 0, s.length > 16 && (s = l(s, 8 * t.length)), i = 0; i < 16; i += 1)
            o[i] = 909522486^s[i], r[i] = 1549556828^s[i];
        return n = l(o.concat(h(e)), 512 + 8 * e.length),
            c(l(r.concat(n), 640))
    }
    function p(t) {
        var e,
            i,
            n = "0123456789abcdef",
            s = "";
        for (i = 0; i < t.length; i += 1)
            e = t.charCodeAt(i), s += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
        return s
    }
    function f(t) {
        return unescape(encodeURIComponent(t))
    }
    function m(t) {
        return u(f(t))
    }
    function g(t) {
        return p(m(t))
    }
    function _(t, e) {
        return d(f(t), f(e))
    }
    function v(t, e) {
        return p(_(t, e))
    }
    function y(t, e, i) {
        return e ? i ? _(e, t) : v(e, t) : i ? m(t) : g(t)
    }
    "function" == typeof define && define.amd ? define(function () {
        return y
    }) : "object" == typeof module && module.exports ? module.exports = y : t.md5 = y
}
(this), function (t) {
    var e = !1;
    if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof exports && (module.exports = t(), e = !0), !e) {
        var i = window.Cookies,
            n = window.Cookies = t();
        n.noConflict = function () {
            return window.Cookies = i,
                n
        }
    }
}
(function () {
    function t() {
        for (var t = 0, e = {}; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i)
                e[n] = i[n]
        }
        return e
    }
    function e(i) {
        function n(e, s, o) {
            var r;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (o = t({
                            path : "/"
                        }, n.defaults, o), "number" == typeof o.expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires),
                            o.expires = a
                    }
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        r = JSON.stringify(s),
                        /^[\{\[]/.test(r) && (s = r)
                    } catch (t) {}

                    s = i.write ? i.write(s, e) : encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        e = encodeURIComponent(String(e)),
                        e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                        e = e.replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var c in o)
                        o[c] && (l += "; " + c, o[c] !== !0 && (l += "=" + o[c]));
                    return document.cookie = e + "=" + s + l
                }
                e || (r = {});
                for (var h = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < h.length; d++) {
                    var p = h[d].split("="),
                        f = p.slice(1).join("=");
                    '"' === f.charAt(0) && (f = f.slice(1, -1));
                    try {
                        var m = p[0].replace(u, decodeURIComponent);
                        if (f = i.read ? i.read(f, m) : i(f, m) || f.replace(u, decodeURIComponent), this.json)
                            try {
                                f = JSON.parse(f)
                            } catch (t) {}

                        if (e === m) {
                            r = f;
                            break
                        }
                        e || (r[m] = f)
                    } catch (t) {}

                }
                return r
            }
        }
        return n.set = n,
            n.get = function (t) {
                return n.call(n, t)
            },
            n.getJSON = function () {
                return n.apply({
                    json : !0
                }, [].slice.call(arguments))
            },
            n.defaults = {},
            n.remove = function (e, i) {
                n(e, "", t(i, {
                    expires : -1
                }))
            },
            n.withConverter = e,
            n
    }
    return e(function () {})
}),
function () {
    "use strict";
    function t() {
        var t = 0;
        try {
            t.toLocaleString("i")
        } catch (t) {
            return "RangeError" === t.name
        }
        return !1
    }
    if (!t()) {
        var e = function (t, e) {
                var i = t.split(".");
                return e && e.thousands && (i[0] = i[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + e.thousands)),
                    t = i.join(e.decimal)
            },
            i = function (t, e) {
                for (var i in e)
                    t = t.replace("{{" + i + "}}", e[i]);
                return t
            },
            n = function (t, e) {
                var i = e,
                    n = e && e.toLowerCase().match(/^\w+/);
                return t.hasOwnProperty(e) || (i = t.hasOwnProperty(n) ? n : "en"),
                    t[i]
            },
            s = function (t) {
                var i = {
                    decimal : ",",
                    thousands : "."
                };
                return e(t, i)
            },
            o = function (t) {
                var i = {
                    decimal : ".",
                    thousands : ","
                };
                return e(t, i)
            },
            r = function (t) {
                var i = {
                    decimal : ",",
                    thousands : " "
                };
                return e(t, i)
            },
            a = function (t) {
                var i = {
                    decimal : ".",
                    thousands : "'"
                };
                return e(t, i)
            },
            l = {
                en : o,
                it : s,
                fr : r,
                de : s,
                "de-DE" : s,
                "de-AT" : s,
                "de-CH" : a,
                "de-LI" : a,
                "de-BE" : s,
                ro : s,
                "ro-RO" : s,
                hu : r,
                "hu-HU" : r,
                "da-DK" : s,
                "nb-NO" : r
            },
            c = {
                en : "pre",
                it : "post",
                fr : "post",
                de : "post",
                "de-DE" : "post",
                "de-AT" : "prespace",
                "de-CH" : "prespace",
                "de-LI" : "post",
                "de-BE" : "post",
                ro : "post",
                "ro-RO" : "post",
                hu : "post",
                "hu-HU" : "post",
                "da-DK" : "post",
                "nb-NO" : "post"
            },
            h = {
                afn : "؋",
                ars : "$",
                awg : "ƒ",
                aud : "$",
                azn : "₼",
                bsd : "$",
                bbd : "$",
                byr : "p.",
                bzd : "BZ$",
                bmd : "$",
                bob : "Bs.",
                bam : "KM",
                bwp : "P",
                bgn : "лв",
                brl : "R$",
                bnd : "$",
                khr : "៛",
                cad : "$",
                kyd : "$",
                clp : "$",
                cny : "¥",
                cop : "$",
                crc : "₡",
                hrk : "kn",
                cup : "₱",
                czk : "Kč",
                dkk : "kr",
                dop : "RD$",
                xcd : "$",
                egp : "£",
                svc : "$",
                eek : "kr",
                eur : "€",
                fkp : "£",
                fjd : "$",
                ghc : "¢",
                gip : "£",
                gtq : "Q",
                ggp : "£",
                gyd : "$",
                hnl : "L",
                hkd : "$",
                huf : "Ft",
                isk : "kr",
                inr : "₹",
                idr : "Rp",
                irr : "﷼",
                imp : "£",
                ils : "₪",
                jmd : "J$",
                jpy : "¥",
                jep : "£",
                kes : "KSh",
                kzt : "лв",
                kpw : "₩",
                krw : "₩",
                kgs : "лв",
                lak : "₭",
                lvl : "Ls",
                lbp : "£",
                lrd : "$",
                ltl : "Lt",
                mkd : "ден",
                myr : "RM",
                mur : "₨",
                mxn : "$",
                mnt : "₮",
                mzn : "MT",
                nad : "$",
                npr : "₨",
                ang : "ƒ",
                nzd : "$",
                nio : "C$",
                ngn : "₦",
                nok : "kr",
                omr : "﷼",
                pkr : "₨",
                pab : "B/.",
                pyg : "Gs",
                pen : "S/.",
                php : "₱",
                pln : "zł",
                qar : "﷼",
                ron : "lei",
                rub : "₽",
                shp : "£",
                sar : "﷼",
                rsd : "Дин.",
                scr : "₨",
                sgd : "$",
                sbd : "$",
                sos : "S",
                zar : "R",
                lkr : "₨",
                sek : "kr",
                chf : "CHF",
                srd : "$",
                syp : "£",
                tzs : "TSh",
                twd : "NT$",
                thb : "฿",
                ttd : "TT$",
                try  : "", trl : "₤", tvd : "$", ugx : "USh", uah : "₴", gbp : "£", usd : "$", uyu : "$U", uzs : "лв", vef : "Bs", vnd : "₫", yer : "﷼", zwd : "Z$"
            },
            u = {
                pre : "{{code}}{{num}}",
                post : "{{num}} {{code}}",
                prespace : "{{code}} {{num}}"
            };
        Number.prototype.toLocaleString = function (t, e) {
            if (t && t.length < 2)
                throw new RangeError("Invalid language tag: " + t);
            var s;
            if (s = e && e.minimumFractionDigits ? this.toFixed(e.minimumFractionDigits) : this.toString(), s = n(l, t)(s, e), e && e.currency && "currency" === e.style) {
                var o = u[n(c, t)];
                s = "code" === e.currencyDisplay ? i(o, {
                    num : s,
                    code : e.currency.toUpperCase()
                }) : i(o, {
                    num : s,
                    code : h[e.currency.toLowerCase()]
                })
            }
            return s
        }
    }
}
(), function () {
    function t(t) {
        function e(e, i, n, s, o, r) {
            for (; o >= 0 && o < r; o += t) {
                var a = s ? s[o] : o;
                n = i(n, e[a], a, e);
            }
            return n
        }
        return function (i, n, s, o) {
            n = y(n, o, 4);
            var r = !T(i) && v.keys(i),
                a = (r || i).length,
                l = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (s = i[r ? r[l] : l], l += t),
                e(i, n, s, r, l, a)
        }
    }
    function e(t) {
        return function (e, i, n) {
            i = b(i, n);
            for (var s = k(e), o = t > 0 ? 0 : s - 1; o >= 0 && o < s; o += t)
                if (i(e[o], o, e))
                    return o;
            return -1
        }
    }
    function i(t, e, i) {
        return function (n, s, o) {
            var r = 0,
                a = k(n);
            if ("number" == typeof o)
                t > 0 ? r = o >= 0 ? o : Math.max(o + a, r) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
            else if (i && o && a)
                return o = i(n, s), n[o] === s ? o : -1;
            if (s !== s)
                return o = e(h.call(n, r, a), v.isNaN), o >= 0 ? o + r : -1;
            for (o = t > 0 ? r : a - 1; o >= 0 && o < a; o += t)
                if (n[o] === s)
                    return o;
            return -1
        }
    }
    function n(t, e) {
        var i = L.length,
            n = t.constructor,
            s = v.isFunction(n) && n.prototype || a,
            o = "constructor";
        for (v.has(t, o) && !v.contains(e, o) && e.push(o); i--; )
            o = L[i], o in t && t[o] !== s[o] && !v.contains(e, o) && e.push(o)
    }
    var s = this,
        o = s._,
        r = Array.prototype,
        a = Object.prototype,
        l = Function.prototype,
        c = r.push,
        h = r.slice,
        u = a.toString,
        d = a.hasOwnProperty,
        p = Array.isArray,
        f = Object.keys,
        m = l.bind,
        g = Object.create,
        _ = function () {},
        v = function (t) {
            return t instanceof v ? t : this instanceof v ? void(this._wrapped = t) : new v(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : s._ = v,
        v.VERSION = "1.8.3";
    var y = function (t, e, i) {
            if (void 0 === e)
                return t;
            switch (null == i ? 3 : i) {
                case 1:
                    return function (i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function (i, n) {
                        return t.call(e, i, n)
                    };
                case 3:
                    return function (i, n, s) {
                        return t.call(e, i, n, s)
                    };
                case 4:
                    return function (i, n, s, o) {
                        return t.call(e, i, n, s, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        },
        b = function (t, e, i) {
            return null == t ? v.identity : v.isFunction(t) ? y(t, e, i) : v.isObject(t) ? v.matcher(t) : v.property(t)
        };
    v.iteratee = function (t, e) {
        return b(t, e, 1 / 0)
    };
    var w = function (t, e) {
            return function (i) {
                var n = arguments.length;
                if (n < 2 || null == i)
                    return i;
                for (var s = 1; s < n; s++)
                    for (var o = arguments[s], r = t(o), a = r.length, l = 0; l < a; l++) {
                        var c = r[l];
                        e && void 0 !== i[c] || (i[c] = o[c])
                    }
                return i
            }
        },
        x = function (t) {
            if (!v.isObject(t))
                return {};
            if (g)
                return g(t);
            _.prototype = t;
            var e = new _;
            return _.prototype = null,
                e
        },
        S = function (t) {
            return function (e) {
                return null == e ? void 0 : e[t]
            }
        },
        C = Math.pow(2, 53) - 1,
        k = S("length"),
        T = function (t) {
            var e = k(t);
            return "number" == typeof e && e >= 0 && e <= C
        };
    v.each = v.forEach = function (t, e, i) {
        e = y(e, i);
        var n,
            s;
        if (T(t))
            for (n = 0, s = t.length; n < s; n++)
                e(t[n], n, t);
        else {
            var o = v.keys(t);
            for (n = 0, s = o.length; n < s; n++)
                e(t[o[n]], o[n], t)
        }
        return t
    },
        v.map = v.collect = function (t, e, i) {
            e = b(e, i);
            for (var n = !T(t) && v.keys(t), s = (n || t).length, o = Array(s), r = 0; r < s; r++) {
                var a = n ? n[r] : r;
                o[r] = e(t[a], a, t)
            }
            return o
        },
        v.reduce = v.foldl = v.inject = t(1),
        v.reduceRight = v.foldr = t(-1),
        v.find = v.detect = function (t, e, i) {
            var n;
            if (n = T(t) ? v.findIndex(t, e, i) : v.findKey(t, e, i), void 0 !== n && n !== -1)
                return t[n]
        },
        v.filter = v.select = function (t, e, i) {
            var n = [];
            return e = b(e, i),
                v.each(t, function (t, i, s) {
                    e(t, i, s) && n.push(t)
                }),
                n
        },
        v.reject = function (t, e, i) {
            return v.filter(t, v.negate(b(e)), i)
        },
        v.every = v.all = function (t, e, i) {
            e = b(e, i);
            for (var n = !T(t) && v.keys(t), s = (n || t).length, o = 0; o < s; o++) {
                var r = n ? n[o] : o;
                if (!e(t[r], r, t))
                    return !1
            }
            return !0
        },
        v.some = v.any = function (t, e, i) {
            e = b(e, i);
            for (var n = !T(t) && v.keys(t), s = (n || t).length, o = 0; o < s; o++) {
                var r = n ? n[o] : o;
                if (e(t[r], r, t))
                    return !0
            }
            return !1
        },
        v.contains = v.includes = v.include = function (t, e, i, n) {
            return T(t) || (t = v.values(t)),
            ("number" != typeof i || n) && (i = 0),
            v.indexOf(t, e, i) >= 0
        },
        v.invoke = function (t, e) {
            var i = h.call(arguments, 2),
                n = v.isFunction(e);
            return v.map(t, function (t) {
                var s = n ? e : t[e];
                return null == s ? s : s.apply(t, i)
            })
        },
        v.pluck = function (t, e) {
            return v.map(t, v.property(e))
        },
        v.where = function (t, e) {
            return v.filter(t, v.matcher(e))
        },
        v.findWhere = function (t, e) {
            return v.find(t, v.matcher(e))
        },
        v.max = function (t, e, i) {
            var n,
                s,
                o =  - (1 / 0),
                r =  - (1 / 0);
            if (null == e && null != t) {
                t = T(t) ? t : v.values(t);
                for (var a = 0, l = t.length; a < l; a++)
                    n = t[a], n > o && (o = n)
            } else
                e = b(e, i), v.each(t, function (t, i, n) {
                    s = e(t, i, n),
                    (s > r || s ===  - (1 / 0) && o ===  - (1 / 0)) && (o = t, r = s)
                });
            return o
        },
        v.min = function (t, e, i) {
            var n,
                s,
                o = 1 / 0,
                r = 1 / 0;
            if (null == e && null != t) {
                t = T(t) ? t : v.values(t);
                for (var a = 0, l = t.length; a < l; a++)
                    n = t[a], n < o && (o = n)
            } else
                e = b(e, i), v.each(t, function (t, i, n) {
                    s = e(t, i, n),
                    (s < r || s === 1 / 0 && o === 1 / 0) && (o = t, r = s)
                });
            return o
        },
        v.shuffle = function (t) {
            for (var e, i = T(t) ? t : v.values(t), n = i.length, s = Array(n), o = 0; o < n; o++)
                e = v.random(0, o), e !== o && (s[o] = s[e]), s[e] = i[o];
            return s
        },
        v.sample = function (t, e, i) {
            return null == e || i ? (T(t) || (t = v.values(t)), t[v.random(t.length - 1)]) : v.shuffle(t).slice(0, Math.max(0, e))
        },
        v.sortBy = function (t, e, i) {
            return e = b(e, i),
                v.pluck(v.map(t, function (t, i, n) {
                    return {
                        value : t,
                        index : i,
                        criteria : e(t, i, n)
                    }
                }).sort(function (t, e) {
                    var i = t.criteria,
                        n = e.criteria;
                    if (i !== n) {
                        if (i > n || void 0 === i)
                            return 1;
                        if (i < n || void 0 === n)
                            return -1
                    }
                    return t.index - e.index
                }), "value")
        };
    var A = function (t) {
        return function (e, i, n) {
            var s = {};
            return i = b(i, n),
                v.each(e, function (n, o) {
                    var r = i(n, o, e);
                    t(s, n, r)
                }),
                s
        }
    };
    v.groupBy = A(function (t, e, i) {
        v.has(t, i) ? t[i].push(e) : t[i] = [e]
    }),
        v.indexBy = A(function (t, e, i) {
            t[i] = e
        }),
        v.countBy = A(function (t, e, i) {
            v.has(t, i) ? t[i]++ : t[i] = 1
        }),
        v.toArray = function (t) {
            return t ? v.isArray(t) ? h.call(t) : T(t) ? v.map(t, v.identity) : v.values(t) : []
        },
        v.size = function (t) {
            return null == t ? 0 : T(t) ? t.length : v.keys(t).length
        },
        v.partition = function (t, e, i) {
            e = b(e, i);
            var n = [],
                s = [];
            return v.each(t, function (t, i, o) {
                (e(t, i, o) ? n : s).push(t)
            }),
                [n, s]
        },
        v.first = v.head = v.take = function (t, e, i) {
            if (null != t)
                return null == e || i ? t[0] : v.initial(t, t.length - e)
        },
        v.initial = function (t, e, i) {
            return h.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
        },
        v.last = function (t, e, i) {
            if (null != t)
                return null == e || i ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - e))
        },
        v.rest = v.tail = v.drop = function (t, e, i) {
            return h.call(t, null == e || i ? 1 : e)
        },
        v.compact = function (t) {
            return v.filter(t, v.identity)
        };
    var M = function (t, e, i, n) {
        for (var s = [], o = 0, r = n || 0, a = k(t); r < a; r++) {
            var l = t[r];
            if (T(l) && (v.isArray(l) || v.isArguments(l))) {
                e || (l = M(l, e, i));
                var c = 0,
                    h = l.length;
                for (s.length += h; c < h; )
                    s[o++] = l[c++]
            } else
                i || (s[o++] = l)
        }
        return s
    };
    v.flatten = function (t, e) {
        return M(t, e, !1)
    },
        v.without = function (t) {
            return v.difference(t, h.call(arguments, 1))
        },
        v.uniq = v.unique = function (t, e, i, n) {
            v.isBoolean(e) || (n = i, i = e, e = !1),
            null != i && (i = b(i, n));
            for (var s = [], o = [], r = 0, a = k(t); r < a; r++) {
                var l = t[r],
                    c = i ? i(l, r, t) : l;
                e ? (r && o === c || s.push(l), o = c) : i ? v.contains(o, c) || (o.push(c), s.push(l)) : v.contains(s, l) || s.push(l)
            }
            return s
        },
        v.union = function () {
            return v.uniq(M(arguments, !0, !0))
        },
        v.intersection = function (t) {
            for (var e = [], i = arguments.length, n = 0, s = k(t); n < s; n++) {
                var o = t[n];
                if (!v.contains(e, o)) {
                    for (var r = 1; r < i && v.contains(arguments[r], o); r++);
                    r === i && e.push(o)
                }
            }
            return e
        },
        v.difference = function (t) {
            var e = M(arguments, !0, !0, 1);
            return v.filter(t, function (t) {
                return !v.contains(e, t)
            })
        },
        v.zip = function () {
            return v.unzip(arguments)
        },
        v.unzip = function (t) {
            for (var e = t && v.max(t, k).length || 0, i = Array(e), n = 0; n < e; n++)
                i[n] = v.pluck(t, n);
            return i
        },
        v.object = function (t, e) {
            for (var i = {}, n = 0, s = k(t); n < s; n++)
                e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
            return i
        },
        v.findIndex = e(1),
        v.findLastIndex = e(-1),
        v.sortedIndex = function (t, e, i, n) {
            i = b(i, n, 1);
            for (var s = i(e), o = 0, r = k(t); o < r; ) {
                var a = Math.floor((o + r) / 2);
                i(t[a]) < s ? o = a + 1 : r = a
            }
            return o
        },
        v.indexOf = i(1, v.findIndex, v.sortedIndex),
        v.lastIndexOf = i(-1, v.findLastIndex),
        v.range = function (t, e, i) {
            null == e && (e = t || 0, t = 0),
                i = i || 1;
            for (var n = Math.max(Math.ceil((e - t) / i), 0), s = Array(n), o = 0; o < n; o++, t += i)
                s[o] = t;
            return s
        };
    var E = function (t, e, i, n, s) {
        if (!(n instanceof e))
            return t.apply(i, s);
        var o = x(t.prototype),
            r = t.apply(o, s);
        return v.isObject(r) ? r : o
    };
    v.bind = function (t, e) {
        if (m && t.bind === m)
            return m.apply(t, h.call(arguments, 1));
        if (!v.isFunction(t))
            throw new TypeError("Bind must be called on a function");
        var i = h.call(arguments, 2),
            n = function () {
                return E(t, n, e, this, i.concat(h.call(arguments)))
            };
        return n
    },
        v.partial = function (t) {
            var e = h.call(arguments, 1),
                i = function () {
                    for (var n = 0, s = e.length, o = Array(s), r = 0; r < s; r++)
                        o[r] = e[r] === v ? arguments[n++] : e[r];
                    for (; n < arguments.length; )
                        o.push(arguments[n++]);
                    return E(t, i, this, this, o)
                };
            return i
        },
        v.bindAll = function (t) {
            var e,
                i,
                n = arguments.length;
            if (n <= 1)
                throw new Error("bindAll must be passed function names");
            for (e = 1; e < n; e++)
                i = arguments[e], t[i] = v.bind(t[i], t);
            return t
        },
        v.memoize = function (t, e) {
            var i = function (n) {
                var s = i.cache,
                    o = "" + (e ? e.apply(this, arguments) : n);
                return v.has(s, o) || (s[o] = t.apply(this, arguments)),
                    s[o]
            };
            return i.cache = {},
                i
        },
        v.delay = function (t, e) {
            var i = h.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, i)
            }, e)
        },
        v.defer = v.partial(v.delay, v, 1),
        v.throttle = function (t, e, i) {
            var n,
                s,
                o,
                r = null,
                a = 0;
            i || (i = {});
            var l = function () {
                a = i.leading === !1 ? 0 : v.now(),
                    r = null,
                    o = t.apply(n, s),
                r || (n = s = null)
            };
            return function () {
                var c = v.now();
                a || i.leading !== !1 || (a = c);
                var h = e - (c - a);
                return n = this,
                    s = arguments,
                    h <= 0 || h > e ? (r && (clearTimeout(r), r = null), a = c, o = t.apply(n, s), r || (n = s = null)) : r || i.trailing === !1 || (r = setTimeout(l, h)),
                    o
            }
        },
        v.debounce = function (t, e, i) {
            var n,
                s,
                o,
                r,
                a,
                l = function () {
                    var c = v.now() - r;
                    c < e && c >= 0 ? n = setTimeout(l, e - c) : (n = null, i || (a = t.apply(o, s), n || (o = s = null)))
                };
            return function () {
                o = this,
                    s = arguments,
                    r = v.now();
                var c = i && !n;
                return n || (n = setTimeout(l, e)),
                c && (a = t.apply(o, s), o = s = null),
                    a
            }
        },
        v.wrap = function (t, e) {
            return v.partial(e, t)
        },
        v.negate = function (t) {
            return function () {
                return !t.apply(this, arguments)
            }
        },
        v.compose = function () {
            var t = arguments,
                e = t.length - 1;
            return function () {
                for (var i = e, n = t[e].apply(this, arguments); i--; )
                    n = t[i].call(this, n);
                return n
            }
        },
        v.after = function (t, e) {
            return function () {
                if (--t < 1)
                    return e.apply(this, arguments)
            }
        },
        v.before = function (t, e) {
            var i;
            return function () {
                return --t > 0 && (i = e.apply(this, arguments)),
                t <= 1 && (e = null),
                    i
            }
        },
        v.once = v.partial(v.before, 2);
    var I = !{
            toString : null
        }
            .propertyIsEnumerable("toString"),
        L = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    v.keys = function (t) {
        if (!v.isObject(t))
            return [];
        if (f)
            return f(t);
        var e = [];
        for (var i in t)
            v.has(t, i) && e.push(i);
        return I && n(t, e),
            e
    },
        v.allKeys = function (t) {
            if (!v.isObject(t))
                return [];
            var e = [];
            for (var i in t)
                e.push(i);
            return I && n(t, e),
                e
        },
        v.values = function (t) {
            for (var e = v.keys(t), i = e.length, n = Array(i), s = 0; s < i; s++)
                n[s] = t[e[s]];
            return n
        },
        v.mapObject = function (t, e, i) {
            e = b(e, i);
            for (var n, s = v.keys(t), o = s.length, r = {}, a = 0; a < o; a++)
                n = s[a], r[n] = e(t[n], n, t);
            return r
        },
        v.pairs = function (t) {
            for (var e = v.keys(t), i = e.length, n = Array(i), s = 0; s < i; s++)
                n[s] = [e[s], t[e[s]]];
            return n
        },
        v.invert = function (t) {
            for (var e = {}, i = v.keys(t), n = 0, s = i.length; n < s; n++)
                e[t[i[n]]] = i[n];
            return e
        },
        v.functions = v.methods = function (t) {
            var e = [];
            for (var i in t)
                v.isFunction(t[i]) && e.push(i);
            return e.sort()
        },
        v.extend = w(v.allKeys),
        v.extendOwn = v.assign = w(v.keys),
        v.findKey = function (t, e, i) {
            e = b(e, i);
            for (var n, s = v.keys(t), o = 0, r = s.length; o < r; o++)
                if (n = s[o], e(t[n], n, t))
                    return n
        },
        v.pick = function (t, e, i) {
            var n,
                s,
                o = {},
                r = t;
            if (null == r)
                return o;
            v.isFunction(e) ? (s = v.allKeys(r), n = y(e, i)) : (s = M(arguments, !1, !1, 1), n = function (t, e, i) {
                return e in i
            }, r = Object(r));
            for (var a = 0, l = s.length; a < l; a++) {
                var c = s[a],
                    h = r[c];
                n(h, c, r) && (o[c] = h)
            }
            return o
        },
        v.omit = function (t, e, i) {
            if (v.isFunction(e))
                e = v.negate(e);
            else {
                var n = v.map(M(arguments, !1, !1, 1), String);
                e = function (t, e) {
                    return !v.contains(n, e)
                }
            }
            return v.pick(t, e, i)
        },
        v.defaults = w(v.allKeys, !0),
        v.create = function (t, e) {
            var i = x(t);
            return e && v.extendOwn(i, e),
                i
        },
        v.clone = function (t) {
            return v.isObject(t) ? v.isArray(t) ? t.slice() : v.extend({}, t) : t
        },
        v.tap = function (t, e) {
            return e(t),
                t
        },
        v.isMatch = function (t, e) {
            var i = v.keys(e),
                n = i.length;
            if (null == t)
                return !n;
            for (var s = Object(t), o = 0; o < n; o++) {
                var r = i[o];
                if (e[r] !== s[r] || !(r in s))
                    return !1
            }
            return !0
        };
    var O = function (t, e, i, n) {
        if (t === e)
            return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e)
            return t === e;
        t instanceof v && (t = t._wrapped),
        e instanceof v && (e = e._wrapped);
        var s = u.call(t);
        if (s !== u.call(e))
            return !1;
        switch (s) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
        }
        var o = "[object Array]" === s;
        if (!o) {
            if ("object" != typeof t || "object" != typeof e)
                return !1;
            var r = t.constructor,
                a = e.constructor;
            if (r !== a && !(v.isFunction(r) && r instanceof r && v.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e)
                return !1
        }
        i = i || [],
            n = n || [];
        for (var l = i.length; l--; )
            if (i[l] === t)
                return n[l] === e;
        if (i.push(t), n.push(e), o) {
            if (l = t.length, l !== e.length)
                return !1;
            for (; l--; )
                if (!O(t[l], e[l], i, n))
                    return !1
        } else {
            var c,
                h = v.keys(t);
            if (l = h.length, v.keys(e).length !== l)
                return !1;
            for (; l--; )
                if (c = h[l], !v.has(e, c) || !O(t[c], e[c], i, n))
                    return !1
        }
        return i.pop(),
            n.pop(),
            !0
    };
    v.isEqual = function (t, e) {
        return O(t, e)
    },
        v.isEmpty = function (t) {
            return null == t || (T(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t)) ? 0 === t.length : 0 === v.keys(t).length)
        },
        v.isElement = function (t) {
            return !(!t || 1 !== t.nodeType)
        },
        v.isArray = p || function (t) {
                return "[object Array]" === u.call(t)
            },
        v.isObject = function (t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        },
        v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
            v["is" + t] = function (e) {
                return u.call(e) === "[object " + t + "]"
            }
        }),
    v.isArguments(arguments) || (v.isArguments = function (t) {
        return v.has(t, "callee")
    }),
    "function" != typeof / . /  && "object" != typeof Int8Array && (v.isFunction = function (t) {
        return "function" == typeof t || !1
    }),
        v.isFinite = function (t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        },
        v.isNaN = function (t) {
            return v.isNumber(t) && t !== +t
        },
        v.isBoolean = function (t) {
            return t === !0 || t === !1 || "[object Boolean]" === u.call(t)
        },
        v.isNull = function (t) {
            return null === t
        },
        v.isUndefined = function (t) {
            return void 0 === t
        },
        v.has = function (t, e) {
            return null != t && d.call(t, e)
        },
        v.noConflict = function () {
            return s._ = o,
                this
        },
        v.identity = function (t) {
            return t
        },
        v.constant = function (t) {
            return function () {
                return t
            }
        },
        v.noop = function () {},
        v.property = S,
        v.propertyOf = function (t) {
            return null == t ? function () {}

                : function (e) {
                    return t[e]
                }
        },
        v.matcher = v.matches = function (t) {
            return t = v.extendOwn({}, t),
                function (e) {
                    return v.isMatch(e, t)
                }
        },
        v.times = function (t, e, i) {
            var n = Array(Math.max(0, t));
            e = y(e, i, 1);
            for (var s = 0; s < t; s++)
                n[s] = e(s);
            return n
        },
        v.random = function (t, e) {
            return null == e && (e = t, t = 0),
            t + Math.floor(Math.random() * (e - t + 1))
        },
        v.now = Date.now || function () {
                return (new Date).getTime()
            };
    var P = {
            "&" : "&amp;",
            "<" : "&lt;",
            ">" : "&gt;",
            '"' : "&quot;",
            "'" : "&#x27;",
            "`" : "&#x60;"
        },
        D = v.invert(P),
        R = function (t) {
            var e = function (e) {
                    return t[e]
                },
                i = "(?:" + v.keys(t).join("|") + ")",
                n = RegExp(i),
                s = RegExp(i, "g");
            return function (t) {
                return t = null == t ? "" : "" + t,
                    n.test(t) ? t.replace(s, e) : t
            }
        };
    v.escape = R(P),
        v.unescape = R(D),
        v.result = function (t, e, i) {
            var n = null == t ? void 0 : t[e];
            return void 0 === n && (n = i),
                v.isFunction(n) ? n.call(t) : n
        };
    var $ = 0;
    v.uniqueId = function (t) {
        var e = ++$ + "";
        return t ? t + e : e
    },
        v.templateSettings = {
            evaluate : /<%([\s\S]+?)%>/g,
            interpolate : /<%=([\s\S]+?)%>/g,
            escape : /<%-([\s\S]+?)%>/g
        };
    var j = /(.)^/,
        N = {
            "'" : "'",
            "\\" : "\\",
            "\r" : "r",
            "\n" : "n",
            "\u2028" : "u2028",
            "\u2029" : "u2029"
        },
        B = /\\|'|\r|\n|\u2028|\u2029/g,
        H = function (t) {
            return "\\" + N[t]
        };
    v.template = function (t, e, i) {
        !e && i && (e = i),
            e = v.defaults({}, e, v.templateSettings);
        var n = RegExp([(e.escape || j).source, (e.interpolate || j).source, (e.evaluate || j).source].join("|") + "|$", "g"),
            s = 0,
            o = "__p+='";
        t.replace(n, function (e, i, n, r, a) {
            return o += t.slice(s, a).replace(B, H),
                s = a + e.length,
                i ? o += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : r && (o += "';\n" + r + "\n__p+='"),
                e
        }),
            o += "';\n",
        e.variable || (o = "with(obj||{}){\n" + o + "}\n"),
            o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var r = new Function(e.variable || "obj", "_", o)
        } catch (t) {
            throw t.source = o,
                t
        }
        var a = function (t) {
                return r.call(this, t, v)
            },
            l = e.variable || "obj";
        return a.source = "function(" + l + "){\n" + o + "}",
            a
    },
        v.chain = function (t) {
            var e = v(t);
            return e._chain = !0,
                e
        };
    var F = function (t, e) {
        return t._chain ? v(e).chain() : e
    };
    v.mixin = function (t) {
        v.each(v.functions(t), function (e) {
            var i = v[e] = t[e];
            v.prototype[e] = function () {
                var t = [this._wrapped];
                return c.apply(t, arguments),
                    F(this, i.apply(v, t))
            }
        })
    },
        v.mixin(v),
        v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
            var e = r[t];
            v.prototype[t] = function () {
                var i = this._wrapped;
                return e.apply(i, arguments),
                "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0],
                    F(this, i)
            }
        }),
        v.each(["concat", "join", "slice"], function (t) {
            var e = r[t];
            v.prototype[t] = function () {
                return F(this, e.apply(this._wrapped, arguments))
            }
        }),
        v.prototype.value = function () {
            return this._wrapped
        },
        v.prototype.valueOf = v.prototype.toJSON = v.prototype.value,
        v.prototype.toString = function () {
            return "" + this._wrapped
        },
    "function" == typeof define && define.amd && define("underscore", [], function () {
        return v
    })
}
    .call(this), function (t) {
    var e = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
    if ("function" == typeof define && define.amd)
        define(["underscore", "jquery", "exports"], function (i, n, s) {
            e.Backbone = t(e, s, i, n)
        });
    else if ("undefined" != typeof exports) {
        var i,
            n = require("underscore");
        try {
            i = require("jquery")
        } catch (t) {}

        t(e, exports, n, i)
    } else
        e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
}
(function (t, e, i, n) {
    var s = t.Backbone,
        o = Array.prototype.slice;
    e.VERSION = "1.3.3",
        e.$ = n,
        e.noConflict = function () {
            return t.Backbone = s,
                this
        },
        e.emulateHTTP = !1,
        e.emulateJSON = !1;
    var r = function (t, e, n) {
            switch (t) {
                case 1:
                    return function () {
                        return i[e](this[n])
                    };
                case 2:
                    return function (t) {
                        return i[e](this[n], t)
                    };
                case 3:
                    return function (t, s) {
                        return i[e](this[n], l(t, this), s)
                    };
                case 4:
                    return function (t, s, o) {
                        return i[e](this[n], l(t, this), s, o)
                    };
                default:
                    return function () {
                        var t = o.call(arguments);
                        return t.unshift(this[n]),
                            i[e].apply(i, t)
                    }
            }
        },
        a = function (t, e, n) {
            i.each(e, function (e, s) {
                i[s] && (t.prototype[s] = r(e, s, n))
            })
        },
        l = function (t, e) {
            return i.isFunction(t) ? t : i.isObject(t) && !e._isModel(t) ? c(t) : i.isString(t) ? function (e) {
                return e.get(t)
            }
                : t
        },
        c = function (t) {
            var e = i.matches(t);
            return function (t) {
                return e(t.attributes)
            }
        },
        h = e.Events = {},
        u = /\s+/,
        d = function (t, e, n, s, o) {
            var r,
                a = 0;
            if (n && "object" == typeof n) {
                void 0 !== s && "context" in o && void 0 === o.context && (o.context = s);
                for (r = i.keys(n); a < r.length; a++)
                    e = d(t, e, r[a], n[r[a]], o)
            } else if (n && u.test(n))
                for (r = n.split(u); a < r.length; a++)
                    e = t(e, r[a], s, o);
            else
                e = t(e, n, s, o);
            return e
        };
    h.on = function (t, e, i) {
        return p(this, t, e, i)
    };
    var p = function (t, e, i, n, s) {
        if (t._events = d(f, t._events || {}, e, i, {
                context : n,
                ctx : t,
                listening : s
            }), s) {
            var o = t._listeners || (t._listeners = {});
            o[s.id] = s
        }
        return t
    };
    h.listenTo = function (t, e, n) {
        if (!t)
            return this;
        var s = t._listenId || (t._listenId = i.uniqueId("l")),
            o = this._listeningTo || (this._listeningTo = {}),
            r = o[s];
        if (!r) {
            var a = this._listenId || (this._listenId = i.uniqueId("l"));
            r = o[s] = {
                obj : t,
                objId : s,
                id : a,
                listeningTo : o,
                count : 0
            }
        }
        return p(t, e, n, this, r),
            this
    };
    var f = function (t, e, i, n) {
        if (i) {
            var s = t[e] || (t[e] = []),
                o = n.context,
                r = n.ctx,
                a = n.listening;
            a && a.count++,
                s.push({
                    callback : i,
                    context : o,
                    ctx : o || r,
                    listening : a
                })
        }
        return t
    };
    h.off = function (t, e, i) {
        return this._events ? (this._events = d(m, this._events, t, e, {
            context : i,
            listeners : this._listeners
        }), this) : this
    },
        h.stopListening = function (t, e, n) {
            var s = this._listeningTo;
            if (!s)
                return this;
            for (var o = t ? [t._listenId] : i.keys(s), r = 0; r < o.length; r++) {
                var a = s[o[r]];
                if (!a)
                    break;
                a.obj.off(e, n, this)
            }
            return this
        };
    var m = function (t, e, n, s) {
        if (t) {
            var o,
                r = 0,
                a = s.context,
                l = s.listeners;
            if (e || n || a) {
                for (var c = e ? [e] : i.keys(t); r < c.length; r++) {
                    e = c[r];
                    var h = t[e];
                    if (!h)
                        break;
                    for (var u = [], d = 0; d < h.length; d++) {
                        var p = h[d];
                        n && n !== p.callback && n !== p.callback._callback || a && a !== p.context ? u.push(p) : (o = p.listening, o && 0 === --o.count && (delete l[o.id], delete o.listeningTo[o.objId]))
                    }
                    u.length ? t[e] = u : delete t[e]
                }
                return t
            }
            for (var f = i.keys(l); r < f.length; r++)
                o = l[f[r]], delete l[o.id], delete o.listeningTo[o.objId]
        }
    };
    h.once = function (t, e, n) {
        var s = d(g, {}, t, e, i.bind(this.off, this));
        return "string" == typeof t && null == n && (e = void 0),
            this.on(s, e, n)
    },
        h.listenToOnce = function (t, e, n) {
            var s = d(g, {}, e, n, i.bind(this.stopListening, this, t));
            return this.listenTo(t, s)
        };
    var g = function (t, e, n, s) {
        if (n) {
            var o = t[e] = i.once(function () {
                s(e, o),
                    n.apply(this, arguments)
            });
            o._callback = n
        }
        return t
    };
    h.trigger = function (t) {
        if (!this._events)
            return this;
        for (var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0; n < e; n++)
            i[n] = arguments[n + 1];
        return d(_, this._events, t, void 0, i),
            this
    };
    var _ = function (t, e, i, n) {
            if (t) {
                var s = t[e],
                    o = t.all;
                s && o && (o = o.slice()),
                s && v(s, n),
                o && v(o, [e].concat(n))
            }
            return t
        },
        v = function (t, e) {
            var i,
                n = -1,
                s = t.length,
                o = e[0],
                r = e[1],
                a = e[2];
            switch (e.length) {
                case 0:
                    for (; ++n < s; )
                        (i = t[n]).callback.call(i.ctx);
                    return;
                case 1:
                    for (; ++n < s; )
                        (i = t[n]).callback.call(i.ctx, o);
                    return;
                case 2:
                    for (; ++n < s; )
                        (i = t[n]).callback.call(i.ctx, o, r);
                    return;
                case 3:
                    for (; ++n < s; )
                        (i = t[n]).callback.call(i.ctx, o, r, a);
                    return;
                default:
                    for (; ++n < s; )
                        (i = t[n]).callback.apply(i.ctx, e);
                    return
            }
        };
    h.bind = h.on,
        h.unbind = h.off,
        i.extend(e, h);
    var y = e.Model = function (t, e) {
        var n = t || {};
        e || (e = {}),
            this.cid = i.uniqueId(this.cidPrefix),
            this.attributes = {},
        e.collection && (this.collection = e.collection),
        e.parse && (n = this.parse(n, e) || {});
        var s = i.result(this, "defaults");
        n = i.defaults(i.extend({}, s, n), s),
            this.set(n, e),
            this.changed = {},
            this.initialize.apply(this, arguments)
    };
    i.extend(y.prototype, h, {
        changed : null,
        validationError : null,
        idAttribute : "id",
        cidPrefix : "c",
        initialize : function () {},
        toJSON : function (t) {
            return i.clone(this.attributes)
        },
        sync : function () {
            return e.sync.apply(this, arguments)
        },
        get : function (t) {
            return this.attributes[t]
        },
        escape : function (t) {
            return i.escape(this.get(t))
        },
        has : function (t) {
            return null != this.get(t)
        },
        matches : function (t) {
            return !!i.iteratee(t, this)(this.attributes)
        },
        set : function (t, e, n) {
            if (null == t)
                return this;
            var s;
            if ("object" == typeof t ? (s = t, n = e) : (s = {})[t] = e, n || (n = {}), !this._validate(s, n))
                return !1;
            var o = n.unset,
                r = n.silent,
                a = [],
                l = this._changing;
            this._changing = !0,
            l || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
            var c = this.attributes,
                h = this.changed,
                u = this._previousAttributes;
            for (var d in s)
                e = s[d], i.isEqual(c[d], e) || a.push(d), i.isEqual(u[d], e) ? delete h[d] : h[d] = e, o ? delete c[d] : c[d] = e;
            if (this.idAttribute in s && (this.id = this.get(this.idAttribute)), !r) {
                a.length && (this._pending = n);
                for (var p = 0; p < a.length; p++)
                    this.trigger("change:" + a[p], this, c[a[p]], n)
            }
            if (l)
                return this;
            if (!r)
                for (; this._pending; )
                    n = this._pending, this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1,
                this._changing = !1,
                this
        },
        unset : function (t, e) {
            return this.set(t, void 0, i.extend({}, e, {
                unset : !0
            }))
        },
        clear : function (t) {
            var e = {};
            for (var n in this.attributes)
                e[n] = void 0;
            return this.set(e, i.extend({}, t, {
                unset : !0
            }))
        },
        hasChanged : function (t) {
            return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t)
        },
        changedAttributes : function (t) {
            if (!t)
                return !!this.hasChanged() && i.clone(this.changed);
            var e = this._changing ? this._previousAttributes : this.attributes,
                n = {};
            for (var s in t) {
                var o = t[s];
                i.isEqual(e[s], o) || (n[s] = o)
            }
            return !!i.size(n) && n
        },
        previous : function (t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null
        },
        previousAttributes : function () {
            return i.clone(this._previousAttributes)
        },
        fetch : function (t) {
            t = i.extend({
                parse : !0
            }, t);
            var e = this,
                n = t.success;
            return t.success = function (i) {
                var s = t.parse ? e.parse(i, t) : i;
                return !!e.set(s, t) && (n && n.call(t.context, e, i, t), void e.trigger("sync", e, i, t))
            },
                F(this, t),
                this.sync("read", this, t)
        },
        save : function (t, e, n) {
            var s;
            null == t || "object" == typeof t ? (s = t, n = e) : (s = {})[t] = e,
                n = i.extend({
                    validate : !0,
                    parse : !0
                }, n);
            var o = n.wait;
            if (s && !o) {
                if (!this.set(s, n))
                    return !1
            } else if (!this._validate(s, n))
                return !1;
            var r = this,
                a = n.success,
                l = this.attributes;
            n.success = function (t) {
                r.attributes = l;
                var e = n.parse ? r.parse(t, n) : t;
                return o && (e = i.extend({}, s, e)),
                !(e && !r.set(e, n)) && (a && a.call(n.context, r, t, n), void r.trigger("sync", r, t, n))
            },
                F(this, n),
            s && o && (this.attributes = i.extend({}, l, s));
            var c = this.isNew() ? "create" : n.patch ? "patch" : "update";
            "patch" !== c || n.attrs || (n.attrs = s);
            var h = this.sync(c, this, n);
            return this.attributes = l,
                h
        },
        destroy : function (t) {
            t = t ? i.clone(t) : {};
            var e = this,
                n = t.success,
                s = t.wait,
                o = function () {
                    e.stopListening(),
                        e.trigger("destroy", e, e.collection, t)
                };
            t.success = function (i) {
                s && o(),
                n && n.call(t.context, e, i, t),
                e.isNew() || e.trigger("sync", e, i, t)
            };
            var r = !1;
            return this.isNew() ? i.defer(t.success) : (F(this, t), r = this.sync("delete", this, t)),
            s || o(),
                r
        },
        url : function () {
            var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || H();
            if (this.isNew())
                return t;
            var e = this.get(this.idAttribute);
            return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
        },
        parse : function (t, e) {
            return t
        },
        clone : function () {
            return new this.constructor(this.attributes)
        },
        isNew : function () {
            return !this.has(this.idAttribute)
        },
        isValid : function (t) {
            return this._validate({}, i.extend({}, t, {
                validate : !0
            }))
        },
        _validate : function (t, e) {
            if (!e.validate || !this.validate)
                return !0;
            t = i.extend({}, this.attributes, t);
            var n = this.validationError = this.validate(t, e) || null;
            return !n || (this.trigger("invalid", this, n, i.extend(e, {
                    validationError : n
                })), !1)
        }
    });
    var b = {
        keys : 1,
        values : 1,
        pairs : 1,
        invert : 1,
        pick : 0,
        omit : 0,
        chain : 1,
        isEmpty : 1
    };
    a(y, b, "attributes");
    var w = e.Collection = function (t, e) {
            e || (e = {}),
            e.model && (this.model = e.model),
            void 0 !== e.comparator && (this.comparator = e.comparator),
                this._reset(),
                this.initialize.apply(this, arguments),
            t && this.reset(t, i.extend({
                silent : !0
            }, e))
        },
        x = {
            add : !0,
            remove : !0,
            merge : !0
        },
        S = {
            add : !0,
            remove : !1
        },
        C = function (t, e, i) {
            i = Math.min(Math.max(i, 0), t.length);
            var n,
                s = Array(t.length - i),
                o = e.length;
            for (n = 0; n < s.length; n++)
                s[n] = t[n + i];
            for (n = 0; n < o; n++)
                t[n + i] = e[n];
            for (n = 0; n < s.length; n++)
                t[n + o + i] = s[n]
        };
    i.extend(w.prototype, h, {
        model : y,
        initialize : function () {},
        toJSON : function (t) {
            return this.map(function (e) {
                return e.toJSON(t)
            })
        },
        sync : function () {
            return e.sync.apply(this, arguments)
        },
        add : function (t, e) {
            return this.set(t, i.extend({
                merge : !1
            }, e, S))
        },
        remove : function (t, e) {
            e = i.extend({}, e);
            var n = !i.isArray(t);
            t = n ? [t] : t.slice();
            var s = this._removeModels(t, e);
            return !e.silent && s.length && (e.changes = {
                added : [],
                merged : [],
                removed : s
            }, this.trigger("update", this, e)),
                n ? s[0] : s
        },
        set : function (t, e) {
            if (null != t) {
                e = i.extend({}, x, e),
                e.parse && !this._isModel(t) && (t = this.parse(t, e) || []);
                var n = !i.isArray(t);
                t = n ? [t] : t.slice();
                var s = e.at;
                null != s && (s = +s),
                s > this.length && (s = this.length),
                s < 0 && (s += this.length + 1);
                var o,
                    r,
                    a = [],
                    l = [],
                    c = [],
                    h = [],
                    u = {},
                    d = e.add,
                    p = e.merge,
                    f = e.remove,
                    m = !1,
                    g = this.comparator && null == s && e.sort !== !1,
                    _ = i.isString(this.comparator) ? this.comparator : null;
                for (r = 0; r < t.length; r++) {
                    o = t[r];
                    var v = this.get(o);
                    if (v) {
                        if (p && o !== v) {
                            var y = this._isModel(o) ? o.attributes : o;
                            e.parse && (y = v.parse(y, e)),
                                v.set(y, e),
                                c.push(v),
                            g && !m && (m = v.hasChanged(_))
                        }
                        u[v.cid] || (u[v.cid] = !0, a.push(v)),
                            t[r] = v
                    } else
                        d && (o = t[r] = this._prepareModel(o, e), o && (l.push(o), this._addReference(o, e), u[o.cid] = !0, a.push(o)))
                }
                if (f) {
                    for (r = 0; r < this.length; r++)
                        o = this.models[r], u[o.cid] || h.push(o);
                    h.length && this._removeModels(h, e)
                }
                var b = !1,
                    w = !g && d && f;
                if (a.length && w ? (b = this.length !== a.length || i.some(this.models, function (t, e) {
                            return t !== a[e]
                        }), this.models.length = 0, C(this.models, a, 0), this.length = this.models.length) : l.length && (g && (m = !0), C(this.models, l, null == s ? this.length : s), this.length = this.models.length), m && this.sort({
                        silent : !0
                    }), !e.silent) {
                    for (r = 0; r < l.length; r++)
                        null != s && (e.index = s + r), o = l[r], o.trigger("add", o, this, e);
                    (m || b) && this.trigger("sort", this, e),
                    (l.length || h.length || c.length) && (e.changes = {
                        added : l,
                        removed : h,
                        merged : c
                    }, this.trigger("update", this, e))
                }
                return n ? t[0] : t
            }
        },
        reset : function (t, e) {
            e = e ? i.clone(e) : {};
            for (var n = 0; n < this.models.length; n++)
                this._removeReference(this.models[n], e);
            return e.previousModels = this.models,
                this._reset(),
                t = this.add(t, i.extend({
                    silent : !0
                }, e)),
            e.silent || this.trigger("reset", this, e),
                t
        },
        push : function (t, e) {
            return this.add(t, i.extend({
                at : this.length
            }, e))
        },
        pop : function (t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t)
        },
        unshift : function (t, e) {
            return this.add(t, i.extend({
                at : 0
            }, e))
        },
        shift : function (t) {
            var e = this.at(0);
            return this.remove(e, t)
        },
        slice : function () {
            return o.apply(this.models, arguments)
        },
        get : function (t) {
            if (null != t)
                return this._byId[t] || this._byId[this.modelId(t.attributes || t)] || t.cid && this._byId[t.cid]
        },
        has : function (t) {
            return null != this.get(t)
        },
        at : function (t) {
            return t < 0 && (t += this.length),
                this.models[t]
        },
        where : function (t, e) {
            return this[e ? "find" : "filter"](t)
        },
        findWhere : function (t) {
            return this.where(t, !0)
        },
        sort : function (t) {
            var e = this.comparator;
            if (!e)
                throw new Error("Cannot sort a set without a comparator");
            t || (t = {});
            var n = e.length;
            return i.isFunction(e) && (e = i.bind(e, this)),
                1 === n || i.isString(e) ? this.models = this.sortBy(e) : this.models.sort(e),
            t.silent || this.trigger("sort", this, t),
                this
        },
        pluck : function (t) {
            return this.map(t + "")
        },
        fetch : function (t) {
            t = i.extend({
                parse : !0
            }, t);
            var e = t.success,
                n = this;
            return t.success = function (i) {
                var s = t.reset ? "reset" : "set";
                n[s](i, t),
                e && e.call(t.context, n, i, t),
                    n.trigger("sync", n, i, t)
            },
                F(this, t),
                this.sync("read", this, t)
        },
        create : function (t, e) {
            e = e ? i.clone(e) : {};
            var n = e.wait;
            if (t = this._prepareModel(t, e), !t)
                return !1;
            n || this.add(t, e);
            var s = this,
                o = e.success;
            return e.success = function (t, e, i) {
                n && s.add(t, i),
                o && o.call(i.context, t, e, i)
            },
                t.save(null, e),
                t
        },
        parse : function (t, e) {
            return t
        },
        clone : function () {
            return new this.constructor(this.models, {
                model : this.model,
                comparator : this.comparator
            })
        },
        modelId : function (t) {
            return t[this.model.prototype.idAttribute || "id"]
        },
        _reset : function () {
            this.length = 0,
                this.models = [],
                this._byId = {}

        },
        _prepareModel : function (t, e) {
            if (this._isModel(t))
                return t.collection || (t.collection = this), t;
            e = e ? i.clone(e) : {},
                e.collection = this;
            var n = new this.model(t, e);
            return n.validationError ? (this.trigger("invalid", this, n.validationError, e), !1) : n
        },
        _removeModels : function (t, e) {
            for (var i = [], n = 0; n < t.length; n++) {
                var s = this.get(t[n]);
                if (s) {
                    var o = this.indexOf(s);
                    this.models.splice(o, 1),
                        this.length--,
                        delete this._byId[s.cid];
                    var r = this.modelId(s.attributes);
                    null != r && delete this._byId[r],
                    e.silent || (e.index = o, s.trigger("remove", s, this, e)),
                        i.push(s),
                        this._removeReference(s, e)
                }
            }
            return i
        },
        _isModel : function (t) {
            return t instanceof y
        },
        _addReference : function (t, e) {
            this._byId[t.cid] = t;
            var i = this.modelId(t.attributes);
            null != i && (this._byId[i] = t),
                t.on("all", this._onModelEvent, this)
        },
        _removeReference : function (t, e) {
            delete this._byId[t.cid];
            var i = this.modelId(t.attributes);
            null != i && delete this._byId[i],
            this === t.collection && delete t.collection,
                t.off("all", this._onModelEvent, this)
        },
        _onModelEvent : function (t, e, i, n) {
            if (e) {
                if (("add" === t || "remove" === t) && i !== this)
                    return;
                if ("destroy" === t && this.remove(e, n), "change" === t) {
                    var s = this.modelId(e.previousAttributes()),
                        o = this.modelId(e.attributes);
                    s !== o && (null != s && delete this._byId[s], null != o && (this._byId[o] = e))
                }
            }
            this.trigger.apply(this, arguments)
        }
    });
    var k = {
        forEach : 3,
        each : 3,
        map : 3,
        collect : 3,
        reduce : 0,
        foldl : 0,
        inject : 0,
        reduceRight : 0,
        foldr : 0,
        find : 3,
        detect : 3,
        filter : 3,
        select : 3,
        reject : 3,
        every : 3,
        all : 3,
        some : 3,
        any : 3,
        include : 3,
        includes : 3,
        contains : 3,
        invoke : 0,
        max : 3,
        min : 3,
        toArray : 1,
        size : 1,
        first : 3,
        head : 3,
        take : 3,
        initial : 3,
        rest : 3,
        tail : 3,
        drop : 3,
        last : 3,
        without : 0,
        difference : 0,
        indexOf : 3,
        shuffle : 1,
        lastIndexOf : 3,
        isEmpty : 1,
        chain : 1,
        sample : 3,
        partition : 3,
        groupBy : 3,
        countBy : 3,
        sortBy : 3,
        indexBy : 3,
        findIndex : 3,
        findLastIndex : 3
    };
    a(w, k, "models");
    var T = e.View = function (t) {
            this.cid = i.uniqueId("view"),
                i.extend(this, i.pick(t, M)),
                this._ensureElement(),
                this.initialize.apply(this, arguments)
        },
        A = /^(\S+)\s*(.*)$/,
        M = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    i.extend(T.prototype, h, {
        tagName : "div",
        $ : function (t) {
            return this.$el.find(t)
        },
        initialize : function () {},
        render : function () {
            return this
        },
        remove : function () {
            return this._removeElement(),
                this.stopListening(),
                this
        },
        _removeElement : function () {
            this.$el.remove()
        },
        setElement : function (t) {
            return this.undelegateEvents(),
                this._setElement(t),
                this.delegateEvents(),
                this
        },
        _setElement : function (t) {
            this.$el = t instanceof e.$ ? t : e.$(t),
                this.el = this.$el[0]
        },
        delegateEvents : function (t) {
            if (t || (t = i.result(this, "events")), !t)
                return this;
            this.undelegateEvents();
            for (var e in t) {
                var n = t[e];
                if (i.isFunction(n) || (n = this[n]), n) {
                    var s = e.match(A);
                    this.delegate(s[1], s[2], i.bind(n, this))
                }
            }
            return this
        },
        delegate : function (t, e, i) {
            return this.$el.on(t + ".delegateEvents" + this.cid, e, i),
                this
        },
        undelegateEvents : function () {
            return this.$el && this.$el.off(".delegateEvents" + this.cid),
                this
        },
        undelegate : function (t, e, i) {
            return this.$el.off(t + ".delegateEvents" + this.cid, e, i),
                this
        },
        _createElement : function (t) {
            return document.createElement(t)
        },
        _ensureElement : function () {
            if (this.el)
                this.setElement(i.result(this, "el"));
            else {
                var t = i.extend({}, i.result(this, "attributes"));
                this.id && (t.id = i.result(this, "id")),
                this.className && (t.class = i.result(this, "className")),
                    this.setElement(this._createElement(i.result(this, "tagName"))),
                    this._setAttributes(t)
            }
        },
        _setAttributes : function (t) {
            this.$el.attr(t)
        }
    }),
        e.sync = function (t, n, s) {
            var o = E[t];
            i.defaults(s || (s = {}), {
                emulateHTTP : e.emulateHTTP,
                emulateJSON : e.emulateJSON
            });
            var r = {
                type : o,
                dataType : "json"
            };
            if (s.url || (r.url = i.result(n, "url") || H()), null != s.data || !n || "create" !== t && "update" !== t && "patch" !== t || (r.contentType = "application/json", r.data = JSON.stringify(s.attrs || n.toJSON(s))), s.emulateJSON && (r.contentType = "application/x-www-form-urlencoded",
                    r.data = r.data ? {
                        model : r.data
                    }
                        : {}), s.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                r.type = "POST",
                s.emulateJSON && (r.data._method = o);
                var a = s.beforeSend;
                s.beforeSend = function (t) {
                    if (t.setRequestHeader("X-HTTP-Method-Override", o), a)
                        return a.apply(this, arguments)
                }
            }
            "GET" === r.type || s.emulateJSON || (r.processData = !1);
            var l = s.error;
            s.error = function (t, e, i) {
                s.textStatus = e,
                    s.errorThrown = i,
                l && l.call(s.context, t, e, i)
            };
            var c = s.xhr = e.ajax(i.extend(r, s));
            return n.trigger("request", n, c, s),
                c
        };
    var E = {
        create : "POST",
        update : "PUT",
        patch : "PATCH",
        delete  : "DELETE",
        read : "GET"
    };
    e.ajax = function () {
        return e.$.ajax.apply(e.$, arguments)
    };
    var I = e.Router = function (t) {
            t || (t = {}),
            t.routes && (this.routes = t.routes),
                this._bindRoutes(),
                this.initialize.apply(this, arguments)
        },
        L = /\((.*?)\)/g,
        O = /(\(\?)?:\w+/g,
        P = /\*\w+/g,
        D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    i.extend(I.prototype, h, {
        initialize : function () {},
        route : function (t, n, s) {
            i.isRegExp(t) || (t = this._routeToRegExp(t)),
            i.isFunction(n) && (s = n, n = ""),
            s || (s = this[n]);
            var o = this;
            return e.history.route(t, function (i) {
                var r = o._extractParameters(t, i);
                o.execute(s, r, n) !== !1 && (o.trigger.apply(o, ["route:" + n].concat(r)), o.trigger("route", n, r), e.history.trigger("route", o, n, r))
            }),
                this
        },
        execute : function (t, e, i) {
            t && t.apply(this, e)
        },
        navigate : function (t, i) {
            return e.history.navigate(t, i),
                this
        },
        _bindRoutes : function () {
            if (this.routes) {
                this.routes = i.result(this, "routes");
                for (var t, e = i.keys(this.routes); null != (t = e.pop()); )
                    this.route(t, this.routes[t])
            }
        },
        _routeToRegExp : function (t) {
            return t = t.replace(D, "\\$&").replace(L, "(?:$1)?").replace(O, function (t, e) {
                return e ? t : "([^/?]+)"
            }).replace(P, "([^?]*?)"),
                new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters : function (t, e) {
            var n = t.exec(e).slice(1);
            return i.map(n, function (t, e) {
                return e === n.length - 1 ? t || null : t ? decodeURIComponent(t) : null
            })
        }
    });
    var R = e.History = function () {
            this.handlers = [],
                this.checkUrl = i.bind(this.checkUrl, this),
            "undefined" != typeof window && (this.location = window.location, this.history = window.history)
        },
        $ = /^[#\/]|\s+$/g,
        j = /^\/+|\/+$/g,
        N = /#.*$/;
    R.started = !1,
        i.extend(R.prototype, h, {
            interval : 50,
            atRoot : function () {
                var t = this.location.pathname.replace(/[^\/]$/, "$&/");
                return t === this.root && !this.getSearch()
            },
            matchRoot : function () {
                var t = this.decodeFragment(this.location.pathname),
                    e = t.slice(0, this.root.length - 1) + "/";
                return e === this.root
            },
            decodeFragment : function (t) {
                return decodeURI(t.replace(/%25/g, "%2525"))
            },
            getSearch : function () {
                var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return t ? t[0] : ""
            },
            getHash : function (t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getPath : function () {
                var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return "/" === t.charAt(0) ? t.slice(1) : t
            },
            getFragment : function (t) {
                return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()),
                    t.replace($, "")
            },
            start : function (t) {
                if (R.started)
                    throw new Error("Backbone.history has already been started");
                if (R.started = !0, this.options = i.extend({
                        root : "/"
                    }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(j, "/"), this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) {
                        var e = this.root.slice(0, -1) || "/";
                        return this.location.replace(e + "#" + this.getPath()),
                            !0
                    }
                    this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace : !0
                    })
                }
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"),
                        this.iframe.src = "javascript:0",
                        this.iframe.style.display = "none",
                        this.iframe.tabIndex = -1;
                    var n = document.body,
                        s = n.insertBefore(this.iframe, n.firstChild).contentWindow;
                    s.document.open(),
                        s.document.close(),
                        s.location.hash = "#" + this.fragment
                }
                var o = window.addEventListener || function (t, e) {
                        return attachEvent("on" + t, e)
                    };
                if (this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent)
                    return this.loadUrl()
            },
            stop : function () {
                var t = window.removeEventListener || function (t, e) {
                        return detachEvent("on" + t, e)
                    };
                this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1),
                this.iframe && (document.body.removeChild(this.iframe), this.iframe = null),
                this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                    R.started = !1
            },
            route : function (t, e) {
                this.handlers.unshift({
                    route : t,
                    callback : e
                })
            },
            checkUrl : function (t) {
                var e = this.getFragment();
                return e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)),
                e !== this.fragment && (this.iframe && this.navigate(e), void this.loadUrl())
            },
            loadUrl : function (t) {
                return !!this.matchRoot() && (t = this.fragment = this.getFragment(t), i.some(this.handlers, function (e) {
                        if (e.route.test(t))
                            return e.callback(t), !0
                    }))
            },
            navigate : function (t, e) {
                if (!R.started)
                    return !1;
                e && e !== !0 || (e = {
                    trigger : !!e
                }),
                    t = this.getFragment(t || "");
                var i = this.root;
                "" !== t && "?" !== t.charAt(0) || (i = i.slice(0, -1) || "/");
                var n = i + t;
                if (t = this.decodeFragment(t.replace(N, "")), this.fragment !== t) {
                    if (this.fragment = t, this._usePushState)
                        this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange)
                            return this.location.assign(n);
                        if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                            var s = this.iframe.contentWindow;
                            e.replace || (s.document.open(), s.document.close()),
                                this._updateHash(s.location, t, e.replace)
                        }
                    }
                    return e.trigger ? this.loadUrl(t) : void 0
                }
            },
            _updateHash : function (t, e, i) {
                if (i) {
                    var n = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(n + "#" + e)
                } else
                    t.hash = "#" + e
            }
        }),
        e.history = new R;
    var B = function (t, e) {
        var n,
            s = this;
        return n = t && i.has(t, "constructor") ? t.constructor : function () {
            return s.apply(this, arguments)
        },
            i.extend(n, s, e),
            n.prototype = i.create(s.prototype, t),
            n.prototype.constructor = n,
            n.__super__ = s.prototype,
            n
    };
    y.extend = w.extend = I.extend = T.extend = R.extend = B;
    var H = function () {
            throw new Error('A "url" property or function must be specified')
        },
        F = function (t, e) {
            var i = e.error;
            e.error = function (n) {
                i && i.call(e.context, t, n, e),
                    t.trigger("error", t, n, e)
            }
        };
    return e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}
(window, function (t, e) {
    "use strict";
    function i(i, o, a) {
        function l(t, e, n) {
            var s,
                o = "$()." + i + '("' + e + '")';
            return t.each(function (t, l) {
                var c = a.data(l, i);
                if (!c)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + o);
                var h = c[e];
                if (!h || "_" == e.charAt(0))
                    return void r(o + " is not a valid method");
                var u = h.apply(c, n);
                s = void 0 === s ? u : s
            }),
                void 0 !== s ? s : t
        }
        function c(t, e) {
            t.each(function (t, n) {
                var s = a.data(n, i);
                s ? (s.option(e), s._init()) : (s = new o(n, e), a.data(n, i, s))
            })
        }
        a = a || e || t.jQuery,
        a && (o.prototype.option || (o.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = s.call(arguments, 1);
                return l(this, t, e)
            }
            return c(this, t),
                this
        }, n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var s = Array.prototype.slice,
        o = t.console,
        r = "undefined" == typeof o ? function () {}

            : function (t) {
                o.error(t)
            };
    return n(e || t.jQuery),
        i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}
(window, function () {
    "use strict";
    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}

    function i() {
        for (var t = {
            width : 0,
            height : 0,
            innerWidth : 0,
            innerHeight : 0,
            outerWidth : 0,
            outerHeight : 0
        }, e = 0; e < c; e++) {
            var i = l[e];
            t[i] = 0
        }
        return t
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
            e
    }
    function s() {
        if (!h) {
            h = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
                e.style.padding = "1px 2px 3px 4px",
                e.style.borderStyle = "solid",
                e.style.borderWidth = "1px 2px 3px 4px",
                e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var s = n(e);
            o.isBoxSizeOuter = r = 200 == t(s.width),
                i.removeChild(e)
        }
    }
    function o(e) {
        if (s(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var o = n(e);
            if ("none" == o.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
                a.height = e.offsetHeight;
            for (var h = a.isBorderBox = "border-box" == o.boxSizing, u = 0; u < c; u++) {
                var d = l[u],
                    p = o[d],
                    f = parseFloat(p);
                a[d] = isNaN(f) ? 0 : f
            }
            var m = a.paddingLeft + a.paddingRight,
                g = a.paddingTop + a.paddingBottom,
                _ = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                y = a.borderLeftWidth + a.borderRightWidth,
                b = a.borderTopWidth + a.borderBottomWidth,
                w = h && r,
                x = t(o.width);
            x !== !1 && (a.width = x + (w ? 0 : m + y));
            var S = t(o.height);
            return S !== !1 && (a.height = S + (w ? 0 : g + b)),
                a.innerWidth = a.width - (m + y),
                a.innerHeight = a.height - (g + b),
                a.outerWidth = a.width + _,
                a.outerHeight = a.height + v,
                a
        }
    }
    var r,
        a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        c = l.length,
        h = !1;
    return o
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}
("undefined" != typeof window ? window : this, function () {
    function t() {}

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e),
                this
        }
    },
        e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0,
                    this
            }
        },
        e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return n != -1 && i.splice(n, 1),
                    this
            }
        },
        e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    s = i[n];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; s; ) {
                    var r = o && o[s];
                    r && (this.off(t, s), delete o[s]),
                        s.apply(this, e),
                        n += r ? 0 : 1,
                        s = i[n]
                }
                return this
            }
        },
        t
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}
(window, function () {
    "use strict";
    var t = function () {
        var t = Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                s = n + "MatchesSelector";
            if (t[s])
                return s
        }
    }
    ();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}
(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    },
        i.modulo = function (t, e) {
            return (t % e + e) % e
        },
        i.makeArray = function (t) {
            var e = [];
            if (Array.isArray(t))
                e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++)
                    e.push(t[i]);
            else
                e.push(t);
            return e
        },
        i.removeFrom = function (t, e) {
            var i = t.indexOf(e);
            i != -1 && t.splice(i, 1)
        },
        i.getParent = function (t, i) {
            for (; t != document.body; )
                if (t = t.parentNode, e(t, i))
                    return t
        },
        i.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        },
        i.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        },
        i.filterFindElements = function (t, n) {
            t = i.makeArray(t);
            var s = [];
            return t.forEach(function (t) {
                if (t instanceof HTMLElement) {
                    if (!n)
                        return void s.push(t);
                    e(t, n) && s.push(t);
                    for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                        s.push(i[o])
                }
            }),
                s
        },
        i.debounceMethod = function (t, e, i) {
            var n = t.prototype[e],
                s = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[s];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[s] = setTimeout(function () {
                    n.apply(o, e),
                        delete o[s]
                }, i || 100)
            }
        },
        i.docReady = function (t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
        },
        i.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
    var n = t.console;
    return i.htmlInit = function (e, s) {
        i.docReady(function () {
            var o = i.toDashed(s),
                r = "data-" + o,
                a = document.querySelectorAll("[" + r + "]"),
                l = document.querySelectorAll(".js-" + o),
                c = i.makeArray(a).concat(i.makeArray(l)),
                h = r + "-options",
                u = t.jQuery;
            c.forEach(function (t) {
                var i,
                    o = t.getAttribute(r) || t.getAttribute(h);
                try {
                    i = o && JSON.parse(o)
                } catch (e) {
                    return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + e))
                }
                var a = new e(t, i);
                u && u.data(t, s, a)
            })
        })
    },
        i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}
(window, function (t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
            !0
    }
    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x : 0,
            y : 0
        }, this._create())
    }
    function s(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }
    var o = document.documentElement.style,
        r = "string" == typeof o.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
        l = {
            WebkitTransition : "webkitTransitionEnd",
            transition : "transitionend"
        }
            [r],
        c = {
            transform : a,
            transition : r,
            transitionDuration : r + "Duration",
            transitionProperty : r + "Property",
            transitionDelay : r + "Delay"
        },
        h = n.prototype = Object.create(t.prototype);
    h.constructor = n,
        h._create = function () {
            this._transn = {
                ingProperties : {},
                clean : {},
                onEnd : {}

            },
                this.css({
                    position : "absolute"
                })
        },
        h.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        },
        h.getSize = function () {
            this.size = e(this.element)
        },
        h.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                var n = c[i] || i;
                e[n] = t[i]
            }
        },
        h.getPosition = function () {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                s = t[i ? "top" : "bottom"],
                o = this.layout.size,
                r = n.indexOf("%") != -1 ? parseFloat(n) / 100 * o.width : parseInt(n, 10),
                a = s.indexOf("%") != -1 ? parseFloat(s) / 100 * o.height : parseInt(s, 10);
            r = isNaN(r) ? 0 : r,
                a = isNaN(a) ? 0 : a,
                r -= e ? o.paddingLeft : o.paddingRight,
                a -= i ? o.paddingTop : o.paddingBottom,
                this.position.x = r,
                this.position.y = a
        },
        h.layoutPosition = function () {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                s = i ? "paddingLeft" : "paddingRight",
                o = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[s];
            e[o] = this.getXValue(a),
                e[r] = "";
            var l = n ? "paddingTop" : "paddingBottom",
                c = n ? "top" : "bottom",
                h = n ? "bottom" : "top",
                u = this.position.y + t[l];
            e[c] = this.getYValue(u),
                e[h] = "",
                this.css(e),
                this.emitEvent("layout", [this])
        },
        h.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        },
        h.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        },
        h._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                s = parseInt(t, 10),
                o = parseInt(e, 10),
                r = s === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), r && !this.isTransitioning)
                return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                c = {};
            c.transform = this.getTranslate(a, l),
                this.transition({
                    to : c,
                    onTransitionEnd : {
                        transform : this.layoutPosition
                    },
                    isCleaning : !0
                })
        },
        h.getTranslate = function (t, e) {
            var i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop");
            return t = i ? t : -t,
                e = n ? e : -e,
            "translate3d(" + t + "px, " + e + "px, 0)"
        },
        h.goTo = function (t, e) {
            this.setPosition(t, e),
                this.layoutPosition()
        },
        h.moveTo = h._transitionTo,
        h.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10),
                this.position.y = parseInt(e, 10)
        },
        h._nonTransition = function (t) {
            this.css(t.to),
            t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
                t.onTransitionEnd[e].call(this)
        },
        h.transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to),
                this.css(t.to),
                this.isTransitioning = !0
        };
    var u = "opacity," + s(a);
    h.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
                this.css({
                    transitionProperty : u,
                    transitionDuration : t,
                    transitionDelay : this.staggerDelay || 0
                }),
                this.element.addEventListener(l, this, !1)
        }
    },
        h.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        },
        h.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
    var d = {
        "-webkit-transform" : "transform"
    };
    h.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = d[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var s = e.onEnd[n];
                s.call(this),
                    delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    },
        h.disableTransition = function () {
            this.removeTransitionStyles(),
                this.element.removeEventListener(l, this, !1),
                this.isTransitioning = !1
        },
        h._removeStyles = function (t) {
            var e = {};
            for (var i in t)
                e[i] = "";
            this.css(e)
        };
    var p = {
        transitionProperty : "",
        transitionDuration : "",
        transitionDelay : ""
    };
    return h.removeTransitionStyles = function () {
        this.css(p)
    },
        h.stagger = function (t) {
            t = isNaN(t) ? 0 : t,
                this.staggerDelay = t + "ms"
        },
        h.removeElem = function () {
            this.element.parentNode.removeChild(this.element),
                this.css({
                    display : ""
                }),
                this.emitEvent("remove", [this])
        },
        h.remove = function () {
            return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        },
        h.reveal = function () {
            delete this.isHidden,
                this.css({
                    display : ""
                });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd,
                this.transition({
                    from : t.hiddenStyle,
                    to : t.visibleStyle,
                    isCleaning : !0,
                    onTransitionEnd : e
                })
        },
        h.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        },
        h.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity)
                return "opacity";
            for (var i in e)
                return i
        },
        h.hide = function () {
            this.isHidden = !0,
                this.css({
                    display : ""
                });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd,
                this.transition({
                    from : t.visibleStyle,
                    to : t.hiddenStyle,
                    isCleaning : !0,
                    onTransitionEnd : e
                })
        },
        h.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display : "none"
            }), this.emitEvent("hide"))
        },
        h.destroy = function () {
            this.css({
                position : "",
                left : "",
                right : "",
                top : "",
                bottom : "",
                transition : "",
                transform : ""
            })
        },
        n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, s, o) {
        return e(t, i, n, s, o)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}
(window, function (t, e, i, n, s) {
    "use strict";
    function o(t, e) {
        var i = n.getQueryElement(t);
        if (!i)
            return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        c && (this.$element = c(this.element)),
            this.options = n.extend({}, this.constructor.defaults),
            this.option(e);
        var s = ++u;
        this.element.outlayerGUID = s,
            d[s] = this,
            this._create();
        var o = this._getOption("initLayout");
        o && this.layout()
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var s = f[n] || 1;
        return i * s
    }
    var l = t.console,
        c = t.jQuery,
        h = function () {},
        u = 0,
        d = {};
    o.namespace = "outlayer",
        o.Item = s,
        o.defaults = {
            containerStyle : {
                position : "relative"
            },
            initLayout : !0,
            originLeft : !0,
            originTop : !0,
            resize : !0,
            resizeContainer : !0,
            transitionDuration : "0.4s",
            hiddenStyle : {
                opacity : 0,
                transform : "scale(0.001)"
            },
            visibleStyle : {
                opacity : 1,
                transform : "scale(1)"
            }
        };
    var p = o.prototype;
    n.extend(p, e.prototype),
        p.option = function (t) {
            n.extend(this.options, t)
        },
        p._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        },
        o.compatOptions = {
            initLayout : "isInitLayout",
            horizontal : "isHorizontal",
            layoutInstant : "isLayoutInstant",
            originLeft : "isOriginLeft",
            originTop : "isOriginTop",
            resize : "isResizeBound",
            resizeContainer : "isResizingContainer"
        },
        p._create = function () {
            this.reloadItems(),
                this.stamps = [],
                this.stamp(this.options.stamp),
                n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        },
        p.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        },
        p._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0; s < e.length; s++) {
                var o = e[s],
                    r = new i(o, this);
                n.push(r)
            }
            return n
        },
        p._filterFindItemElements = function (t) {
            return n.filterFindElements(t, this.options.itemSelector)
        },
        p.getItemElements = function () {
            return this.items.map(function (t) {
                return t.element
            })
        },
        p.layout = function () {
            this._resetLayout(),
                this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e),
                this._isLayoutInited = !0
        },
        p._init = p.layout,
        p._resetLayout = function () {
            this.getSize()
        },
        p.getSize = function () {
            this.size = i(this.element)
        },
        p._getMeasurement = function (t, e) {
            var n,
                s = this.options[t];
            s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s), this[t] = n ? i(n)[e] : s) : this[t] = 0
        },
        p.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t),
                this._layoutItems(t, e),
                this._postLayout()
        },
        p._getItemsForLayout = function (t) {
            return t.filter(function (t) {
                return !t.isIgnored
            })
        },
        p._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function (t) {
                    var n = this._getItemLayoutPosition(t);
                    n.item = t,
                        n.isInstant = e || t.isLayoutInstant,
                        i.push(n)
                }, this),
                    this._processLayoutQueue(i)
            }
        },
        p._getItemLayoutPosition = function () {
            return {
                x : 0,
                y : 0
            }
        },
        p._processLayoutQueue = function (t) {
            this.updateStagger(),
                t.forEach(function (t, e) {
                    this._positionItem(t.item, t.x, t.y, t.isInstant, e)
                }, this)
        },
        p.updateStagger = function () {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
        },
        p._positionItem = function (t, e, i, n, s) {
            n ? t.goTo(e, i) : (t.stagger(s * this.stagger), t.moveTo(e, i))
        },
        p._postLayout = function () {
            this.resizeContainer()
        },
        p.resizeContainer = function () {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        },
        p._getContainerSize = h,
        p._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                    t = Math.max(t, 0),
                    this.element.style[e ? "width" : "height"] = t + "px"
            }
        },
        p._emitCompleteOnItems = function (t, e) {
            function i() {
                s.dispatchEvent(t + "Complete", null, [e])
            }
            function n() {
                r++,
                r == o && i()
            }
            var s = this,
                o = e.length;
            if (!e || !o)
                return void i();
            var r = 0;
            e.forEach(function (e) {
                e.once(t, n)
            })
        },
        p.dispatchEvent = function (t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), c)
                if (this.$element = this.$element || c(this.element), e) {
                    var s = c.Event(e);
                    s.type = t,
                        this.$element.trigger(s, i)
                } else
                    this.$element.trigger(t, i)
        },
        p.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        },
        p.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        },
        p.stamp = function (t) {
            t = this._find(t),
            t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        },
        p.unstamp = function (t) {
            t = this._find(t),
            t && t.forEach(function (t) {
                n.removeFrom(this.stamps, t),
                    this.unignore(t)
            }, this)
        },
        p._find = function (t) {
            if (t)
                return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)
        },
        p._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        },
        p._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left : t.left + e.paddingLeft + e.borderLeftWidth,
                top : t.top + e.paddingTop + e.borderTopWidth,
                right : t.right - (e.paddingRight + e.borderRightWidth),
                bottom : t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        },
        p._manageStamp = h,
        p._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                s = i(t),
                o = {
                    left : e.left - n.left - s.marginLeft,
                    top : e.top - n.top - s.marginTop,
                    right : n.right - e.right - s.marginRight,
                    bottom : n.bottom - e.bottom - s.marginBottom
                };
            return o
        },
        p.handleEvent = n.handleEvent,
        p.bindResize = function () {
            t.addEventListener("resize", this),
                this.isResizeBound = !0
        },
        p.unbindResize = function () {
            t.removeEventListener("resize", this),
                this.isResizeBound = !1
        },
        p.onresize = function () {
            this.resize()
        },
        n.debounceMethod(o, "onresize", 100),
        p.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        },
        p.needsResizeLayout = function () {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        },
        p.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)),
                e
        },
        p.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        },
        p.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i),
                    this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(e, !0),
                    this.reveal(e),
                    this.layoutItems(i)
            }
        },
        p.reveal = function (t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, i) {
                    t.stagger(i * e),
                        t.reveal()
                })
            }
        },
        p.hide = function (t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, i) {
                    t.stagger(i * e),
                        t.hide()
                })
            }
        },
        p.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        },
        p.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        },
        p.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t)
                    return i
            }
        },
        p.getItems = function (t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function (t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this),
                e
        },
        p.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e),
            e && e.length && e.forEach(function (t) {
                t.remove(),
                    n.removeFrom(this.items, t)
            }, this)
        },
        p.destroy = function () {
            var t = this.element.style;
            t.height = "",
                t.position = "",
                t.width = "",
                this.items.forEach(function (t) {
                    t.destroy()
                }),
                this.unbindResize();
            var e = this.element.outlayerGUID;
            delete d[e],
                delete this.element.outlayerGUID,
            c && c.removeData(this.element, this.constructor.namespace)
        },
        o.data = function (t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && d[e]
        },
        o.create = function (t, e) {
            var i = r(o);
            return i.defaults = n.extend({}, o.defaults),
                n.extend(i.defaults, e),
                i.compatOptions = n.extend({}, o.compatOptions),
                i.namespace = t,
                i.data = o.data,
                i.Item = r(s),
                n.htmlInit(i, t),
            c && c.bridget && c.bridget(t, i),
                i
        };
    var f = {
        ms : 1,
        s : 1e3
    };
    return o.Item = s,
        o
}), function (t, e) {
    "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
}
(window, function () {
    "use strict";
    function t(e) {
        for (var i in t.defaults)
            this[i] = t.defaults[i];
        for (i in e)
            this[i] = e[i]
    }
    t.defaults = {
        x : 0,
        y : 0,
        width : 0,
        height : 0
    };
    var e = t.prototype;
    return e.contains = function (t) {
        var e = t.width || 0,
            i = t.height || 0;
        return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
    },
        e.overlaps = function (t) {
            var e = this.x + this.width,
                i = this.y + this.height,
                n = t.x + t.width,
                s = t.y + t.height;
            return this.x < n && e > t.x && this.y < s && i > t.y
        },
        e.getMaximalFreeRects = function (e) {
            if (!this.overlaps(e))
                return !1;
            var i,
                n = [],
                s = this.x + this.width,
                o = this.y + this.height,
                r = e.x + e.width,
                a = e.y + e.height;
            return this.y < e.y && (i = new t({
                x : this.x,
                y : this.y,
                width : this.width,
                height : e.y - this.y
            }), n.push(i)),
            s > r && (i = new t({
                x : r,
                y : this.y,
                width : s - r,
                height : this.height
            }), n.push(i)),
            o > a && (i = new t({
                x : this.x,
                y : a,
                width : this.width,
                height : o - a
            }), n.push(i)),
            this.x < e.x && (i = new t({
                x : this.x,
                y : this.y,
                width : e.x - this.x,
                height : this.height
            }), n.push(i)),
                n
        },
        e.canFit = function (t) {
            return this.width >= t.width && this.height >= t.height
        },
        t
}), function (t, e) {
    if ("function" == typeof define && define.amd)
        define("packery/js/packer", ["./rect"], e);
    else if ("object" == typeof module && module.exports)
        module.exports = e(require("./rect"));
    else {
        var i = t.Packery = t.Packery || {};
        i.Packer = e(i.Rect)
    }
}
(window, function (t) {
    "use strict";
    function e(t, e, i) {
        this.width = t || 0,
            this.height = e || 0,
            this.sortDirection = i || "downwardLeftToRight",
            this.reset()
    }
    var i = e.prototype;
    i.reset = function () {
        this.spaces = [];
        var e = new t({
            x : 0,
            y : 0,
            width : this.width,
            height : this.height
        });
        this.spaces.push(e),
            this.sorter = n[this.sortDirection] || n.downwardLeftToRight
    },
        i.pack = function (t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var i = this.spaces[e];
                if (i.canFit(t)) {
                    this.placeInSpace(t, i);
                    break
                }
            }
        },
        i.columnPack = function (t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var i = this.spaces[e],
                    n = i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - .01;
                if (n) {
                    t.y = i.y,
                        this.placed(t);
                    break
                }
            }
        },
        i.rowPack = function (t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var i = this.spaces[e],
                    n = i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - .01;
                if (n) {
                    t.x = i.x,
                        this.placed(t);
                    break
                }
            }
        },
        i.placeInSpace = function (t, e) {
            t.x = e.x,
                t.y = e.y,
                this.placed(t)
        },
        i.placed = function (t) {
            for (var e = [], i = 0; i < this.spaces.length; i++) {
                var n = this.spaces[i],
                    s = n.getMaximalFreeRects(t);
                s ? e.push.apply(e, s) : e.push(n)
            }
            this.spaces = e,
                this.mergeSortSpaces()
        },
        i.mergeSortSpaces = function () {
            e.mergeRects(this.spaces),
                this.spaces.sort(this.sorter)
        },
        i.addSpace = function (t) {
            this.spaces.push(t),
                this.mergeSortSpaces()
        },
        e.mergeRects = function (t) {
            var e = 0,
                i = t[e];
            t : for (; i; ) {
                for (var n = 0, s = t[e + n]; s; ) {
                    if (s == i)
                        n++;
                    else {
                        if (s.contains(i)) {
                            t.splice(e, 1),
                                i = t[e];
                            continue t
                        }
                        i.contains(s) ? t.splice(e + n, 1) : n++
                    }
                    s = t[e + n]
                }
                e++,
                    i = t[e]
            }
            return t
        };
    var n = {
        downwardLeftToRight : function (t, e) {
            return t.y - e.y || t.x - e.x
        },
        rightwardTopToBottom : function (t, e) {
            return t.x - e.x || t.y - e.y
        }
    };
    return e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("./rect")) : t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
}
(window, function (t, e) {
    "use strict";
    var i = document.documentElement.style,
        n = "string" == typeof i.transform ? "transform" : "WebkitTransform",
        s = function () {
            t.Item.apply(this, arguments)
        },
        o = s.prototype = Object.create(t.Item.prototype),
        r = o._create;
    o._create = function () {
        r.call(this),
            this.rect = new e
    };
    var a = o.moveTo;
    return o.moveTo = function (t, e) {
        var i = Math.abs(this.position.x - t),
            n = Math.abs(this.position.y - e),
            s = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && i < 1 && n < 1;
        return s ? void this.goTo(t, e) : void a.apply(this, arguments)
    },
        o.enablePlacing = function () {
            this.removeTransitionStyles(),
            this.isTransitioning && n && (this.element.style[n] = "none"),
                this.isTransitioning = !1,
                this.getSize(),
                this.layout._setRectSize(this.element, this.rect),
                this.isPlacing = !0
        },
        o.disablePlacing = function () {
            this.isPlacing = !1
        },
        o.removeElem = function () {
            this.element.parentNode.removeChild(this.element),
                this.layout.packer.addSpace(this.rect),
                this.emitEvent("remove", [this])
        },
        o.showDropPlaceholder = function () {
            var t = this.dropPlaceholder;
            t || (t = this.dropPlaceholder = document.createElement("div"), t.className = "packery-drop-placeholder", t.style.position = "absolute"),
                t.style.width = this.size.width + "px",
                t.style.height = this.size.height + "px",
                this.positionDropPlaceholder(),
                this.layout.element.appendChild(t)
        },
        o.positionDropPlaceholder = function () {
            this.dropPlaceholder.style[n] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
        },
        o.hideDropPlaceholder = function () {
            var t = this.dropPlaceholder.parentNode;
            t && t.removeChild(this.dropPlaceholder)
        },
        s
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
}
(window, function (t, e, i, n, s) {
    "use strict";
    function o(t, e) {
        return t.position.y - e.position.y || t.position.x - e.position.x
    }
    function r(t, e) {
        return t.position.x - e.position.x || t.position.y - e.position.y
    }
    function a(t, e) {
        var i = e.x - t.x,
            n = e.y - t.y;
        return Math.sqrt(i * i + n * n)
    }
    i.prototype.canFit = function (t) {
        return this.width >= t.width - 1 && this.height >= t.height - 1
    };
    var l = e.create("packery");
    l.Item = s;
    var c = l.prototype;



    var h = 120;
    var u = c.destroy;
    return c.destroy = function () {
        u.apply(this, arguments),
            this.isEnabled = !1
    },
        l.Rect = i,
        l.Packer = n,
        l
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t($ || require("jquery")) : t(jQuery)
}








(jQuery), function () {
    "use strict";
    function t(t) {
        t.fn.swiper = function (e) {
            var n;
            return t(this).each(function () {
                var t = new i(this, e);
                n || (n = t)
            }),
                n
        }
    }
    var e,
        i = function (t, s) {
            function o(t) {
                return Math.floor(t)
            }
            function r() {
                var t = x.params.autoplay,
                    e = x.slides.eq(x.activeIndex);
                e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || x.params.autoplay),
                    x.autoplayTimeoutId = setTimeout(function () {
                        x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? s.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x))
                    }, t)
            }
            function a(t, i) {
                var n = e(t.target);
                if (!n.is(i))
                    if ("string" == typeof i)
                        n = n.parents(i);
                    else if (i.nodeType) {
                        var s;
                        return n.parents().each(function (t, e) {
                            e === i && (s = i)
                        }),
                            s ? i : void 0
                    }
                if (0 !== n.length)
                    return n[0]
            }
            function l(t, e) {
                e = e || {};
                var i = window.MutationObserver || window.WebkitMutationObserver,
                    n = new i(function (t) {
                        t.forEach(function (t) {
                            x.onResize(!0),
                                x.emit("onObserverUpdate", x, t)
                        })
                    });
                n.observe(t, {
                    attributes : "undefined" == typeof e.attributes || e.attributes,
                    childList : "undefined" == typeof e.childList || e.childList,
                    characterData : "undefined" == typeof e.characterData || e.characterData
                }),
                    x.observers.push(n)
            }
            function c(t) {
                t.originalEvent && (t = t.originalEvent);
                var e = t.keyCode || t.charCode;
                if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === e || !x.isHorizontal() && 40 === e))
                    return !1;
                if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === e || !x.isHorizontal() && 38 === e))
                    return !1;
                if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === e || 39 === e || 38 === e || 40 === e) {
                        var i = !1;
                        if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length)
                            return;
                        var n = {
                                left : window.pageXOffset,
                                top : window.pageYOffset
                            },
                            s = window.innerWidth,
                            o = window.innerHeight,
                            r = x.container.offset();
                        x.rtl && (r.left = r.left - x.container[0].scrollLeft);
                        for (var a = [[r.left, r.top], [r.left + x.width, r.top], [r.left, r.top + x.height], [r.left + x.width, r.top + x.height]], l = 0; l < a.length; l++) {
                            var c = a[l];
                            c[0] >= n.left && c[0] <= n.left + s && c[1] >= n.top && c[1] <= n.top + o && (i = !0)
                        }
                        if (!i)
                            return
                    }
                    x.isHorizontal() ? (37 !== e && 39 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (39 === e && !x.rtl || 37 === e && x.rtl) && x.slideNext(), (37 === e && !x.rtl || 39 === e && x.rtl) && x.slidePrev()) : (38 !== e && 40 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === e && x.slideNext(), 38 === e && x.slidePrev()),
                        x.emit("onKeyPress", x, e)
                }
            }
            function h() {
                var t = "onwheel",
                    e = t in document;
                if (!e) {
                    var i = document.createElement("div");
                    i.setAttribute(t, "return;"),
                        e = "function" == typeof i[t]
                }
                return !e && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (e = document.implementation.hasFeature("Events.wheel", "3.0")),
                    e
            }
            function u(t) {
                var e = 10,
                    i = 40,
                    n = 800,
                    s = 0,
                    o = 0,
                    r = 0,
                    a = 0;
                return "detail" in t && (o = t.detail),
                "wheelDelta" in t && (o = -t.wheelDelta / 120),
                "wheelDeltaY" in t && (o = -t.wheelDeltaY / 120),
                "wheelDeltaX" in t && (s = -t.wheelDeltaX / 120),
                "axis" in t && t.axis === t.HORIZONTAL_AXIS && (s = o, o = 0),
                    r = s * e,
                    a = o * e,
                "deltaY" in t && (a = t.deltaY),
                "deltaX" in t && (r = t.deltaX),
                (r || a) && t.deltaMode && (1 === t.deltaMode ? (r *= i, a *= i) : (r *= n, a *= n)),
                r && !s && (s = r < 1 ? -1 : 1),
                a && !o && (o = a < 1 ? -1 : 1), {
                    spinX : s,
                    spinY : o,
                    pixelX : r,
                    pixelY : a
                }
            }
            function d(t) {
                t.originalEvent && (t = t.originalEvent);
                var e = 0,
                    i = x.rtl ? -1 : 1,
                    n = u(t);
                if (x.params.mousewheelForceToAxis)
                    if (x.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY)))
                            return;
                        e = n.pixelX * i
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX)))
                            return;
                        e = n.pixelY
                    }
                else
                    e = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * i : -n.pixelY;
                if (0 !== e) {
                    if (x.params.mousewheelInvert && (e = -e), x.params.freeMode) {
                        var s = x.getWrapperTranslate() + e * x.params.mousewheelSensitivity,
                            o = x.isBeginning,
                            r = x.isEnd;
                        if (s >= x.minTranslate() && (s = x.minTranslate()),
                            s <= x.maxTranslate() && (s = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(s), x.updateProgress(), x.updateActiveIndex(), (!o && x.isBeginning || !r && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function () {
                                x.slideReset()
                            }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), x.emit("onScroll", x, t), x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(), 0 === s || s === x.maxTranslate())
                            return
                    } else {
                        if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60)
                            if (e < 0)
                                if (x.isEnd && !x.params.loop || x.animating) {
                                    if (x.params.mousewheelReleaseOnEdges)
                                        return !0
                                } else
                                    x.slideNext(), x.emit("onScroll", x, t);
                            else if (x.isBeginning && !x.params.loop || x.animating) {
                                if (x.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                x.slidePrev(), x.emit("onScroll", x, t);
                        x.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                        !1
                }
            }
            function p(t, i) {
                t = e(t);
                var n,
                    s,
                    o,
                    r = x.rtl ? -1 : 1;
                n = t.attr("data-swiper-parallax") || "0",
                    s = t.attr("data-swiper-parallax-x"),
                    o = t.attr("data-swiper-parallax-y"),
                    s || o ? (s = s || "0", o = o || "0") : x.isHorizontal() ? (s = n, o = "0") : (o = n, s = "0"),
                    s = s.indexOf("%") >= 0 ? parseInt(s, 10) * i * r + "%" : s * i * r + "px",
                    o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i + "%" : o * i + "px",
                    t.transform("translate3d(" + s + ", " + o + ",0px)")
            }
            function f(t) {
                return 0 !== t.indexOf("on") && (t = t[0] !== t[0].toUpperCase() ? "on" + t[0].toUpperCase() + t.substring(1) : "on" + t),
                    t
            }
            if (!(this instanceof i))
                return new i(t, s);
            var m = {
                    direction : "horizontal",
                    touchEventsTarget : "container",
                    initialSlide : 0,
                    speed : 300,
                    autoplay : !1,
                    autoplayDisableOnInteraction : !0,
                    autoplayStopOnLast : !1,
                    iOSEdgeSwipeDetection : !1,
                    iOSEdgeSwipeThreshold : 20,
                    freeMode : !1,
                    freeModeMomentum : !0,
                    freeModeMomentumRatio : 1,
                    freeModeMomentumBounce : !0,
                    freeModeMomentumBounceRatio : 1,
                    freeModeMomentumVelocityRatio : 1,
                    freeModeSticky : !1,
                    freeModeMinimumVelocity : .02,
                    autoHeight : !1,
                    setWrapperSize : !1,
                    virtualTranslate : !1,
                    effect : "slide",
                    coverflow : {
                        rotate : 50,
                        stretch : 0,
                        depth : 100,
                        modifier : 1,
                        slideShadows : !0
                    },
                    flip : {
                        slideShadows : !0,
                        limitRotation : !0
                    },
                    cube : {
                        slideShadows : !0,
                        shadow : !0,
                        shadowOffset : 20,
                        shadowScale : .94
                    },
                    fade : {
                        crossFade : !1
                    },
                    parallax : !1,
                    zoom : !1,
                    zoomMax : 3,
                    zoomMin : 1,
                    zoomToggle : !0,
                    scrollbar : null,
                    scrollbarHide : !0,
                    scrollbarDraggable : !1,
                    scrollbarSnapOnRelease : !1,
                    keyboardControl : !1,
                    mousewheelControl : !1,
                    mousewheelReleaseOnEdges : !1,
                    mousewheelInvert : !1,
                    mousewheelForceToAxis : !1,
                    mousewheelSensitivity : 1,
                    mousewheelEventsTarged : "container",
                    hashnav : !1,
                    hashnavWatchState : !1,
                    history : !1,
                    replaceState : !1,
                    breakpoints : void 0,
                    spaceBetween : 0,
                    slidesPerView : 1,
                    slidesPerColumn : 1,
                    slidesPerColumnFill : "column",
                    slidesPerGroup : 1,
                    centeredSlides : !1,
                    slidesOffsetBefore : 0,
                    slidesOffsetAfter : 0,
                    roundLengths : !1,
                    touchRatio : 1,
                    touchAngle : 45,
                    simulateTouch : !0,
                    shortSwipes : !0,
                    longSwipes : !0,
                    longSwipesRatio : .5,
                    longSwipesMs : 300,
                    followFinger : !0,
                    onlyExternal : !1,
                    threshold : 0,
                    touchMoveStopPropagation : !0,
                    touchReleaseOnEdges : !1,
                    uniqueNavElements : !0,
                    pagination : null,
                    paginationElement : "span",
                    paginationClickable : !1,
                    paginationHide : !1,
                    paginationBulletRender : null,
                    paginationProgressRender : null,
                    paginationFractionRender : null,
                    paginationCustomRender : null,
                    paginationType : "bullets",
                    resistance : !0,
                    resistanceRatio : .85,
                    nextButton : null,
                    prevButton : null,
                    watchSlidesProgress : !1,
                    watchSlidesVisibility : !1,
                    grabCursor : !1,
                    preventClicks : !0,
                    preventClicksPropagation : !0,
                    slideToClickedSlide : !1,
                    lazyLoading : !1,
                    lazyLoadingInPrevNext : !1,
                    lazyLoadingInPrevNextAmount : 1,
                    lazyLoadingOnTransitionStart : !1,
                    preloadImages : !0,
                    updateOnImagesReady : !0,
                    loop : !1,
                    loopAdditionalSlides : 0,
                    loopedSlides : null,
                    control : void 0,
                    controlInverse : !1,
                    controlBy : "slide",
                    normalizeSlideIndex : !0,
                    allowSwipeToPrev : !0,
                    allowSwipeToNext : !0,
                    swipeHandler : null,
                    noSwiping : !0,
                    noSwipingClass : "swiper-no-swiping",
                    passiveListeners : !0,
                    containerModifierClass : "swiper-container-",
                    slideClass : "swiper-slide",
                    slideActiveClass : "swiper-slide-active",
                    slideDuplicateActiveClass : "swiper-slide-duplicate-active",
                    slideVisibleClass : "swiper-slide-visible",
                    slideDuplicateClass : "swiper-slide-duplicate",
                    slideNextClass : "swiper-slide-next",
                    slideDuplicateNextClass : "swiper-slide-duplicate-next",
                    slidePrevClass : "swiper-slide-prev",
                    slideDuplicatePrevClass : "swiper-slide-duplicate-prev",
                    wrapperClass : "swiper-wrapper",
                    bulletClass : "swiper-pagination-bullet",
                    bulletActiveClass : "swiper-pagination-bullet-active",
                    buttonDisabledClass : "swiper-button-disabled",
                    paginationCurrentClass : "swiper-pagination-current",
                    paginationTotalClass : "swiper-pagination-total",
                    paginationHiddenClass : "swiper-pagination-hidden",
                    paginationProgressbarClass : "swiper-pagination-progressbar",
                    paginationClickableClass : "swiper-pagination-clickable",
                    paginationModifierClass : "swiper-pagination-",
                    lazyLoadingClass : "swiper-lazy",
                    lazyStatusLoadingClass : "swiper-lazy-loading",
                    lazyStatusLoadedClass : "swiper-lazy-loaded",
                    lazyPreloaderClass : "swiper-lazy-preloader",
                    notificationClass : "swiper-notification",
                    preloaderClass : "preloader",
                    zoomContainerClass : "swiper-zoom-container",
                    observer : !1,
                    observeParents : !1,
                    a11y : !1,
                    prevSlideMessage : "Previous slide",
                    nextSlideMessage : "Next slide",
                    firstSlideMessage : "This is the first slide",
                    lastSlideMessage : "This is the last slide",
                    paginationBulletMessage : "Go to slide {{index}}",
                    runCallbacksOnInit : !0
                },
                g = s && s.virtualTranslate;
            s = s || {};
            var _ = {};
            for (var v in s)
                if ("object" != typeof s[v] || null === s[v] || (s[v].nodeType || s[v] === window || s[v] === document || "undefined" != typeof n && s[v]instanceof n || "undefined" != typeof jQuery && s[v]instanceof jQuery))
                    _[v] = s[v];
                else {
                    _[v] = {};
                    for (var y in s[v])
                        _[v][y] = s[v][y]
                }
            for (var b in m)
                if ("undefined" == typeof s[b])
                    s[b] = m[b];
                else if ("object" == typeof s[b])
                    for (var w in m[b])
                        "undefined" == typeof s[b][w] && (s[b][w] = m[b][w]);
            var x = this;
            if (x.params = s, x.originalParams = _, x.classNames = [], "undefined" != typeof e && "undefined" != typeof n && (e = n), ("undefined" != typeof e || (e = "undefined" == typeof n ? window.Dom7 || window.Zepto || window.jQuery : n)) && (x.$ = e, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function () {
                    if (!x.params.breakpoints)
                        return !1;
                    var t,
                        e = !1,
                        i = [];
                    for (t in x.params.breakpoints)
                        x.params.breakpoints.hasOwnProperty(t)
                        && i.push(t);
                    i.sort(function (t, e) {
                        return parseInt(t, 10) > parseInt(e, 10)
                    });
                    for (var n = 0; n < i.length; n++)
                        t = i[n], t >= window.innerWidth && !e && (e = t);
                    return e || "max"
                }, x.setBreakpoint = function () {
                    var t = x.getActiveBreakpoint();
                    if (t && x.currentBreakpoint !== t) {
                        var e = t in x.params.breakpoints ? x.params.breakpoints[t] : x.originalParams,
                            i = x.params.loop && e.slidesPerView !== x.params.slidesPerView;
                        for (var n in e)
                            x.params[n] = e[n];
                        x.currentBreakpoint = t,
                        i && x.destroyLoop && x.reLoop(!0)
                    }
                }, x.params.breakpoints && x.setBreakpoint(), x.container = e(t), 0 !== x.container.length)) {
                if (x.container.length > 1) {
                    var S = [];
                    return x.container.each(function () {
                        S.push(new i(this, s))
                    }),
                        S
                }
                x.container[0].swiper = x,
                    x.container.data("swiper", x),
                    x.classNames.push(x.params.containerModifierClass + x.params.direction),
                x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"),
                x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"), x.params.slidesPerColumn = 1),
                x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"),
                (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0),
                x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0),
                ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"),
                "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect),
                "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0),
                "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, x.params.spaceBetween = 0, "undefined" == typeof g && (x.params.virtualTranslate = !0)),
                x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1),
                    x.wrapper = x.container.children("." + x.params.wrapperClass),
                x.params.pagination && (x.paginationContainer = e(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)),
                (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = e(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))),
                    x.isHorizontal = function () {
                        return "horizontal" === x.params.direction
                    },
                    x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")),
                x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"),
                x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")),
                x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"),
                x.device.android && x.classNames.push(x.params.containerModifierClass + "android"),
                    x.container.addClass(x.classNames.join(" ")),
                    x.translate = 0,
                    x.progress = 0,
                    x.velocity = 0,
                    x.lockSwipeToNext = function () {
                        x.params.allowSwipeToNext = !1,
                        x.params.allowSwipeToPrev === !1 && x.params.grabCursor && x.unsetGrabCursor()
                    },
                    x.lockSwipeToPrev = function () {
                        x.params.allowSwipeToPrev = !1,
                        x.params.allowSwipeToNext === !1 && x.params.grabCursor && x.unsetGrabCursor()
                    },
                    x.lockSwipes = function () {
                        x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1,
                        x.params.grabCursor && x.unsetGrabCursor()
                    },
                    x.unlockSwipeToNext = function () {
                        x.params.allowSwipeToNext = !0,
                        x.params.allowSwipeToPrev === !0 && x.params.grabCursor && x.setGrabCursor()
                    },
                    x.unlockSwipeToPrev = function () {
                        x.params.allowSwipeToPrev = !0,
                        x.params.allowSwipeToNext === !0 && x.params.grabCursor && x.setGrabCursor()
                    },
                    x.unlockSwipes = function () {
                        x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0,
                        x.params.grabCursor && x.setGrabCursor()
                    },
                    x.setGrabCursor = function (t) {
                        x.container[0].style.cursor = "move",
                            x.container[0].style.cursor = t ? "-webkit-grabbing" : "-webkit-grab",
                            x.container[0].style.cursor = t ? "-moz-grabbin" : "-moz-grab",
                            x.container[0].style.cursor = t ? "grabbing" : "grab"
                    },
                    x.unsetGrabCursor = function () {
                        x.container[0].style.cursor = ""
                    },
                x.params.grabCursor && x.setGrabCursor(),
                    x.imagesToLoad = [],
                    x.imagesLoaded = 0,
                    x.loadImage = function (t, e, i, n, s, o) {
                        function r() {
                            o && o()
                        }
                        var a;
                        t.complete && s ? r() : e ? (a = new window.Image, a.onload = r, a.onerror = r, n && (a.sizes = n), i && (a.srcset = i), e && (a.src = e)) : r()
                    },
                    x.preloadImages = function () {
                        function t() {
                            "undefined" != typeof x && null !== x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x)))
                        }
                        x.imagesToLoad = x.container.find("img");
                        for (var e = 0; e < x.imagesToLoad.length; e++)
                            x.loadImage(x.imagesToLoad[e], x.imagesToLoad[e].currentSrc || x.imagesToLoad[e].getAttribute("src"), x.imagesToLoad[e].srcset || x.imagesToLoad[e].getAttribute("srcset"), x.imagesToLoad[e].sizes || x.imagesToLoad[e].getAttribute("sizes"), !0, t)
                    },
                    x.autoplayTimeoutId = void 0,
                    x.autoplaying = !1,
                    x.autoplayPaused = !1,
                    x.startAutoplay = function () {
                        return "undefined" == typeof x.autoplayTimeoutId && (!!x.params.autoplay && (!x.autoplaying && (x.autoplaying = !0, x.emit("onAutoplayStart", x), void r())))
                    },
                    x.stopAutoplay = function (t) {
                        x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x))
                    },
                    x.pauseAutoplay = function (t) {
                        x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === t ? (x.autoplayPaused = !1, r()) : x.wrapper.transitionEnd(function () {
                            x && (x.autoplayPaused = !1, x.autoplaying ? r() : x.stopAutoplay())
                        }))
                    },
                    x.minTranslate = function () {
                        return -x.snapGrid[0]
                    },
                    x.maxTranslate = function () {
                        return -x.snapGrid[x.snapGrid.length - 1]
                    },
                    x.updateAutoHeight = function () {
                        var t,
                            e = [],
                            i = 0;
                        if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1)
                            for (t = 0; t < Math.ceil(x.params.slidesPerView); t++) {
                                var n = x.activeIndex + t;
                                if (n > x.slides.length)
                                    break;
                                e.push(x.slides.eq(n)[0])
                            }
                        else
                            e.push(x.slides.eq(x.activeIndex)[0]);
                        for (t = 0; t < e.length; t++)
                            if ("undefined" != typeof e[t]) {
                                var s = e[t].offsetHeight;
                                i = s > i ? s : i
                            }
                        i && x.wrapper.css("height", i + "px")
                    },
                    x.updateContainerSize = function () {
                        var t,
                            e;
                        t = "undefined" != typeof x.params.width ? x.params.width : x.container[0].clientWidth,
                            e = "undefined" != typeof x.params.height ? x.params.height : x.container[0].clientHeight,
                        0 === t && x.isHorizontal() || 0 === e && !x.isHorizontal() || (t = t - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), e = e - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = t, x.height = e, x.size = x.isHorizontal() ? x.width : x.height)
                    },
                    x.updateSlidesSize = function () {
                        x.slides = x.wrapper.children("." + x.params.slideClass),
                            x.snapGrid = [],
                            x.slidesGrid = [],
                            x.slidesSizesGrid = [];
                        var t,
                            e = x.params.spaceBetween,
                            i = -x.params.slidesOffsetBefore,
                            n = 0,
                            s = 0;
                        if ("undefined" != typeof x.size) {
                            "string" == typeof e && e.indexOf("%") >= 0 && (e = parseFloat(e.replace("%", "")) / 100 * x.size),
                                x.virtualSize = -e,
                                x.rtl ? x.slides.css({
                                    marginLeft : "",
                                    marginTop : ""
                                }) : x.slides.css({
                                    marginRight : "",
                                    marginBottom : ""
                                });
                            var r;
                            x.params.slidesPerColumn > 1 && (r = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (r = Math.max(r, x.params.slidesPerView * x.params.slidesPerColumn)));
                            var a,
                                l = x.params.slidesPerColumn,
                                c = r / l,
                                h = c - (x.params.slidesPerColumn * c - x.slides.length);
                            for (t = 0; t < x.slides.length; t++) {
                                a = 0;
                                var u = x.slides.eq(t);
                                if (x.params.slidesPerColumn > 1) {
                                    var d,
                                        p,
                                        f;
                                    "column" === x.params.slidesPerColumnFill ? (p = Math.floor(t / l), f = t - p * l, (p > h || p === h && f === l - 1) && ++f >= l && (f = 0, p++), d = p + f * r / l, u.css({
                                        "-webkit-box-ordinal-group" : d,
                                        "-moz-box-ordinal-group" : d,
                                        "-ms-flex-order" : d,
                                        "-webkit-order" : d,
                                        order : d
                                    })) : (f = Math.floor(t / c), p = t - f * c),
                                        u.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== f && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", p).attr("data-swiper-row", f)
                                }
                                "none" !== u.css("display") && ("auto" === x.params.slidesPerView ? (a = x.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), x.params.roundLengths && (a = o(a))) : (a = (x.size - (x.params.slidesPerView - 1) * e) / x.params.slidesPerView, x.params.roundLengths && (a = o(a)), x.isHorizontal() ? x.slides[t].style.width = a + "px" : x.slides[t].style.height = a + "px"), x.slides[t].swiperSlideSize = a, x.slidesSizesGrid.push(a), x.params.centeredSlides ? (i = i + a / 2 + n / 2 + e, 0 === n && 0 !== t && (i = i - x.size / 2 - e), 0 === t && (i = i - x.size / 2 - e), Math.abs(i) < .001 && (i = 0), s % x.params.slidesPerGroup === 0 && x.snapGrid.push(i), x.slidesGrid.push(i)) : (s % x.params.slidesPerGroup === 0 && x.snapGrid.push(i), x.slidesGrid.push(i), i = i + a + e), x.virtualSize += a + e, n = a, s++)
                            }
                            x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                            var m;
                            if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                                    width : x.virtualSize + x.params.spaceBetween + "px"
                                }), x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
                                    width : x.virtualSize + x.params.spaceBetween + "px"
                                }) : x.wrapper.css({
                                    height : x.virtualSize + x.params.spaceBetween + "px"
                                })), x.params.slidesPerColumn > 1 && (x.virtualSize = (a + x.params.spaceBetween) * r, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.isHorizontal() ? x.wrapper.css({
                                    width : x.virtualSize + x.params.spaceBetween + "px"
                                }) : x.wrapper.css({
                                    height : x.virtualSize + x.params.spaceBetween + "px"
                                }), x.params.centeredSlides)) {
                                for (m = [], t = 0; t < x.snapGrid.length; t++)
                                    x.snapGrid[t] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[t]);
                                x.snapGrid = m
                            }
                            if (!x.params.centeredSlides) {
                                for (m = [], t = 0; t < x.snapGrid.length; t++)
                                    x.snapGrid[t] <= x.virtualSize - x.size && m.push(x.snapGrid[t]);
                                x.snapGrid = m,
                                Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size)
                            }
                            0 === x.snapGrid.length && (x.snapGrid = [0]),
                            0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                                marginLeft : e + "px"
                            }) : x.slides.css({
                                marginRight : e + "px"
                            }) : x.slides.css({
                                marginBottom : e + "px"
                            })),
                            x.params.watchSlidesProgress && x.updateSlidesOffset()
                        }
                    },
                    x.updateSlidesOffset = function () {
                        for (var t = 0; t < x.slides.length; t++)
                            x.slides[t].swiperSlideOffset = x.isHorizontal() ? x.slides[t].offsetLeft : x.slides[t].offsetTop
                    },
                    x.currentSlidesPerView = function () {
                        var t,
                            e,
                            i = 1;
                        if (x.params.centeredSlides) {
                            var n,
                                s = x.slides[x.activeIndex].swiperSlideSize;
                            for (t = x.activeIndex + 1; t < x.slides.length; t++)
                                x.slides[t] && !n && (s += x.slides[t].swiperSlideSize, i++, s > x.size && (n = !0));
                            for (e = x.activeIndex - 1; e >= 0; e--)
                                x.slides[e] && !n && (s += x.slides[e].swiperSlideSize, i++, s > x.size && (n = !0))
                        } else
                            for (t = x.activeIndex + 1; t < x.slides.length; t++)
                                x.slidesGrid[t] - x.slidesGrid[x.activeIndex] < x.size && i++;
                        return i
                    },
                    x.updateSlidesProgress = function (t) {
                        if ("undefined" == typeof t && (t = x.translate || 0), 0 !== x.slides.length) {
                            "undefined" == typeof x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                            var e = -t;
                            x.rtl && (e = t),
                                x.slides.removeClass(x.params.slideVisibleClass);
                            for (var i = 0; i < x.slides.length; i++) {
                                var n = x.slides[i],
                                    s = (e + (x.params.centeredSlides ? x.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + x.params.spaceBetween);
                                if (x.params.watchSlidesVisibility) {
                                    var o =  - (e - n.swiperSlideOffset),
                                        r = o + x.slidesSizesGrid[i],
                                        a = o >= 0 && o < x.size || r > 0 && r <= x.size || o <= 0 && r >= x.size;
                                    a && x.slides.eq(i).addClass(x.params.slideVisibleClass)
                                }
                                n.progress = x.rtl ? -s : s
                            }
                        }
                    },
                    x.updateProgress = function (t) {
                        "undefined" == typeof t && (t = x.translate || 0);
                        var e = x.maxTranslate() - x.minTranslate(),
                            i = x.isBeginning,
                            n = x.isEnd;
                        0 === e ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (t - x.minTranslate()) / e, x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1),
                        x.isBeginning && !i && x.emit("onReachBeginning", x),
                        x.isEnd && !n && x.emit("onReachEnd", x),
                        x.params.watchSlidesProgress && x.updateSlidesProgress(t),
                            x.emit("onProgress", x, x.progress)
                    },
                    x.updateActiveIndex = function () {
                        var t,
                            e,
                            i,
                            n = x.rtl ? x.translate : -x.translate;
                        for (e = 0; e < x.slidesGrid.length; e++)
                            "undefined" != typeof x.slidesGrid[e + 1] ? n >= x.slidesGrid[e] && n < x.slidesGrid[e + 1] - (x.slidesGrid[e + 1] - x.slidesGrid[e]) / 2 ? t = e : n >= x.slidesGrid[e] && n < x.slidesGrid[e + 1] && (t = e + 1) : n >= x.slidesGrid[e] && (t = e);
                        x.params.normalizeSlideIndex && (t < 0 || "undefined" == typeof t) && (t = 0),
                            i = Math.floor(t / x.params.slidesPerGroup),
                        i >= x.snapGrid.length && (i = x.snapGrid.length - 1),
                        t !== x.activeIndex && (x.snapIndex = i, x.previousIndex = x.activeIndex, x.activeIndex = t, x.updateClasses(), x.updateRealIndex())
                    },
                    x.updateRealIndex = function () {
                        x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10)
                    },
                    x.updateClasses = function () {
                        x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
                        var t = x.slides.eq(x.activeIndex);
                        t.addClass(x.params.slideActiveClass),
                        s.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
                        var i = t.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                        x.params.loop && 0 === i.length && (i = x.slides.eq(0), i.addClass(x.params.slideNextClass));
                        var n = t.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                        if (x.params.loop && 0 === n.length && (n = x.slides.eq(-1), n.addClass(x.params.slidePrevClass)), s.loop && (i.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass), n.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)), x.paginationContainer && x.paginationContainer.length > 0) {
                            var o,
                                r = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                            if (x.params.loop ? (o = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup), o > x.slides.length - 1 - 2 * x.loopedSlides && (o -= x.slides.length - 2 * x.loopedSlides), o > r - 1 && (o -= r), o < 0 && "bullets" !== x.params.paginationType && (o = r + o)) : o = "undefined" != typeof x.snapIndex ? x.snapIndex : x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), x.paginationContainer.length > 1 ? x.bullets.each(function () {
                                    e(this).index() === o && e(this).addClass(x.params.bulletActiveClass)
                                }) : x.bullets.eq(o).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(o + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(r)), "progress" === x.params.paginationType) {
                                var a = (o + 1) / r,
                                    l = a,
                                    c = 1;
                                x.isHorizontal() || (c = a, l = 1),
                                    x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + c + ")").transition(x.params.speed)
                            }
                            "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, o + 1, r)), x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                        }
                        x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
                    },
                    x.updatePagination = function () {
                        if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                            var t = "";
                            if ("bullets" === x.params.paginationType) {
                                for (var e = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, i = 0; i < e; i++)
                                    t += x.params.paginationBulletRender ? x.params.paginationBulletRender(x, i, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                                x.paginationContainer.html(t),
                                    x.bullets = x.paginationContainer.find("." + x.params.bulletClass),
                                x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                            }
                            "fraction" === x.params.paginationType && (t = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(t)),
                            "progress" === x.params.paginationType && (t = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(t)),
                            "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                        }
                    },
                    x.update = function (t) {
                        function e() {
                            x.rtl ? -x.translate : x.translate;
                            i = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()),
                                x.setWrapperTranslate(i),
                                x.updateActiveIndex(),
                                x.updateClasses()
                        }
                        if (x) {
                            x.updateContainerSize(),
                                x.updateSlidesSize(),
                                x.updateProgress(),
                                x.updatePagination(),
                                x.updateClasses(),
                            x.params.scrollbar && x.scrollbar && x.scrollbar.set();
                            var i;
                            if (t) {
                                var n;
                                x.controller && x.controller.spline && (x.controller.spline = void 0),
                                    x.params.freeMode ? (e(), x.params.autoHeight && x.updateAutoHeight()) : (n = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0), n || e())
                            } else
                                x.params.autoHeight && x.updateAutoHeight()
                        }
                    },
                    x.onResize = function (t) {
                        x.params.onBeforeResize && x.params.onBeforeResize(x),
                        x.params.breakpoints && x.setBreakpoint();
                        var e = x.params.allowSwipeToPrev,
                            i = x.params.allowSwipeToNext;
                        x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0,
                            x.updateContainerSize(),
                            x.updateSlidesSize(),
                        ("auto" === x.params.slidesPerView || x.params.freeMode || t) && x.updatePagination(),
                        x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
                        x.controller && x.controller.spline && (x.controller.spline = void 0);
                        var n = !1;
                        if (x.params.freeMode) {
                            var s = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                            x.setWrapperTranslate(s),
                                x.updateActiveIndex(),
                                x.updateClasses(),
                            x.params.autoHeight && x.updateAutoHeight()
                        } else
                            x.updateClasses(), n = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                        x.params.lazyLoading && !n && x.lazy && x.lazy.load(),
                            x.params.allowSwipeToPrev = e,
                            x.params.allowSwipeToNext = i,
                        x.params.onAfterResize && x.params.onAfterResize(x)
                    },
                    x.touchEventsDesktop = {
                        start : "mousedown",
                        move : "mousemove",
                        end : "mouseup"
                    },
                    window.navigator.pointerEnabled ? x.touchEventsDesktop = {
                        start : "pointerdown",
                        move : "pointermove",
                        end : "pointerup"
                    }
                        : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
                            start : "MSPointerDown",
                            move : "MSPointerMove",
                            end : "MSPointerUp"
                        }),
                    x.touchEvents = {
                        start : x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
                        move : x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
                        end : x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
                    },
                (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction),
                    x.initEvents = function (t) {
                        var e = t ? "off" : "on",
                            i = t ? "removeEventListener" : "addEventListener",
                            n = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0],
                            o = x.support.touch ? n : document,
                            r = !!x.params.nested;
                        if (x.browser.ie)
                            n[i](x.touchEvents.start, x.onTouchStart, !1), o[i](x.touchEvents.move, x.onTouchMove, r), o[i](x.touchEvents.end, x.onTouchEnd, !1);
                        else {
                            if (x.support.touch) {
                                var a = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                                        passive : !0,
                                        capture : !1
                                    };
                                n[i](x.touchEvents.start, x.onTouchStart, a),
                                    n[i](x.touchEvents.move, x.onTouchMove, r),
                                    n[i](x.touchEvents.end, x.onTouchEnd, a)
                            }
                            (s.simulateTouch && !x.device.ios && !x.device.android || s.simulateTouch && !x.support.touch && x.device.ios) && (n[i]("mousedown", x.onTouchStart, !1), document[i]("mousemove", x.onTouchMove, r), document[i]("mouseup", x.onTouchEnd, !1))
                        }
                        window[i]("resize", x.onResize),
                        x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[e]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[e]("keydown", x.a11y.onEnterKey)),
                        x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[e]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[e]("keydown", x.a11y.onEnterKey)),
                        x.params.pagination && x.params.paginationClickable && (x.paginationContainer[e]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[e]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)),
                        (x.params.preventClicks || x.params.preventClicksPropagation) && n[i]("click", x.preventClicks, !0)
                    },
                    x.attachEvents = function () {
                        x.initEvents()
                    },
                    x.detachEvents = function () {
                        x.initEvents(!0)
                    },
                    x.allowClick = !0,
                    x.preventClicks = function (t) {
                        x.allowClick || (x.params.preventClicks && t.preventDefault(), x.params.preventClicksPropagation && x.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                    },
                    x.onClickNext = function (t) {
                        t.preventDefault(),
                        x.isEnd && !x.params.loop || x.slideNext()
                    },
                    x.onClickPrev = function (t) {
                        t.preventDefault(),
                        x.isBeginning && !x.params.loop || x.slidePrev()
                    },
                    x.onClickIndex = function (t) {
                        t.preventDefault();
                        var i = e(this).index() * x.params.slidesPerGroup;
                        x.params.loop && (i += x.loopedSlides),
                            x.slideTo(i)
                    },
                    x.updateClickedSlide = function (t) {
                        var i = a(t, "." + x.params.slideClass),
                            n = !1;
                        if (i)
                            for (var s = 0; s < x.slides.length; s++)
                                x.slides[s] === i && (n = !0);
                        if (!i || !n)
                            return x.clickedSlide = void 0, void(x.clickedIndex = void 0);
                        if (x.clickedSlide = i, x.clickedIndex = e(i).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                            var o,
                                r = x.clickedIndex,
                                l = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;
                            if (x.params.loop) {
                                if (x.animating)
                                    return;
                                o = parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"), 10),
                                    x.params.centeredSlides ? r < x.loopedSlides - l / 2 || r > x.slides.length - x.loopedSlides + l / 2 ? (x.fixLoop(), r = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                                        x.slideTo(r)
                                    }, 0)) : x.slideTo(r) : r > x.slides.length - l ? (x.fixLoop(), r = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                                        x.slideTo(r)
                                    }, 0)) : x.slideTo(r)
                            } else
                                x.slideTo(r)
                        }
                    };
                var C,
                    k,
                    T,
                    A,
                    M,
                    E,
                    I,
                    L,
                    O,
                    P,
                    D = "input, select, textarea, button, video",
                    R = Date.now(),
                    $ = [];
                x.animating = !1,
                    x.touches = {
                        startX : 0,
                        startY : 0,
                        currentX : 0,
                        currentY : 0,
                        diff : 0
                    };
                var j,
                    N;
                x.onTouchStart = function (t) {
                    if (t.originalEvent && (t = t.originalEvent), j = "touchstart" === t.type, j || !("which" in t) || 3 !== t.which) {
                        if (x.params.noSwiping && a(t, "." + x.params.noSwipingClass))
                            return void(x.allowClick = !0);
                        if (!x.params.swipeHandler || a(t, x.params.swipeHandler)) {
                            var i = x.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                n = x.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                            if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && i <= x.params.iOSEdgeSwipeThreshold)) {
                                if (C = !0, k = !1, T = !0, M = void 0, N = void 0, x.touches.startX = i, x.touches.startY = n, A = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, x.params.threshold > 0 && (L = !1), "touchstart" !== t.type) {
                                    var s = !0;
                                    e(t.target).is(D) && (s = !1),
                                    document.activeElement && e(document.activeElement).is(D) && document.activeElement.blur(),
                                    s && t.preventDefault()
                                }
                                x.emit("onTouchStart", x, t)
                            }
                        }
                    }
                },
                    x.onTouchMove = function (t) {
                        if (t.originalEvent && (t = t.originalEvent), !j || "mousemove" !== t.type) {
                            if (t.preventedByNestedSwiper)
                                return x.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(x.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                            if (x.params.onlyExternal)
                                return x.allowClick = !1, void(C && (x.touches.startX = x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, x.touches.startY = x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, A = Date.now()));
                            if (j && x.params.touchReleaseOnEdges && !x.params.loop)
                                if (x.isHorizontal()) {
                                    if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate())
                                        return
                                } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate())
                                    return;
                            if (j && document.activeElement && t.target === document.activeElement && e(t.target).is(D))
                                return k = !0, void(x.allowClick = !1);
                            if (T && x.emit("onTouchMove", x, t),
                                    !(t.targetTouches && t.targetTouches.length > 1)) {
                                if (x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, "undefined" == typeof M) {
                                    var i;
                                    x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX ? M = !1 : (i = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI, M = x.isHorizontal() ? i > x.params.touchAngle : 90 - i > x.params.touchAngle)
                                }
                                if (M && x.emit("onTouchMoveOpposite", x, t), "undefined" == typeof N && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (N = !0)), C) {
                                    if (M)
                                        return void(C = !1);
                                    if (N) {
                                        x.allowClick = !1,
                                            x.emit("onSliderMove", x, t),
                                            t.preventDefault(),
                                        x.params.touchMoveStopPropagation && !x.params.nested && t.stopPropagation(),
                                        k || (s.loop && x.fixLoop(), I = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), P = !1, !x.params.grabCursor || x.params.allowSwipeToNext !== !0 && x.params.allowSwipeToPrev !== !0 || x.setGrabCursor(!0)),
                                            k = !0;
                                        var n = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                                        n *= x.params.touchRatio,
                                        x.rtl && (n = -n),
                                            x.swipeDirection = n > 0 ? "prev" : "next",
                                            E = n + I;
                                        var o = !0;
                                        if (n > 0 && E > x.minTranslate() ? (o = !1, x.params.resistance && (E = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + I + n, x.params.resistanceRatio))) : n < 0 && E < x.maxTranslate() && (o = !1, x.params.resistance && (E = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - I - n, x.params.resistanceRatio))), o && (t.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && E < I && (E = I), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && E > I && (E = I), x.params.threshold > 0) {
                                            if (!(Math.abs(n) > x.params.threshold || L))
                                                return void(E = I);
                                            if (!L)
                                                return L = !0, x.touches.startX = x.touches.currentX, x.touches.startY = x.touches.currentY, E = I, void(x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY)
                                        }
                                        x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), x.params.freeMode && (0 === $.length && $.push({
                                            position : x.touches[x.isHorizontal() ? "startX" : "startY"],
                                            time : A
                                        }), $.push({
                                            position : x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                                            time : (new window.Date).getTime()
                                        })), x.updateProgress(E), x.setWrapperTranslate(E))
                                    }
                                }
                            }
                        }
                    },
                    x.onTouchEnd = function (t) {
                        if (t.originalEvent && (t = t.originalEvent), T && x.emit("onTouchEnd", x, t), T = !1, C) {
                            x.params.grabCursor && k && C && (x.params.allowSwipeToNext === !0 || x.params.allowSwipeToPrev === !0) && x.setGrabCursor(!1);
                            var i = Date.now(),
                                n = i - A;
                            if (x.allowClick && (x.updateClickedSlide(t), x.emit("onTap", x, t), n < 300 && i - R > 300 && (O && clearTimeout(O), O = setTimeout(function () {
                                    x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(t.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, t))
                                }, 300)), n < 300 && i - R < 300 && (O && clearTimeout(O), x.emit("onDoubleTap", x, t))), R = Date.now(), setTimeout(function () {
                                    x && (x.allowClick = !0)
                                }, 0), !C || !k || !x.swipeDirection || 0 === x.touches.diff || E === I)
                                return void(C = k = !1);
                            C = k = !1;
                            var s;
                            if (s = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -E, x.params.freeMode) {
                                if (s < -x.minTranslate())
                                    return void x.slideTo(x.activeIndex);
                                if (s > -x.maxTranslate())
                                    return void(x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                                if (x.params.freeModeMomentum) {
                                    if ($.length > 1) {
                                        var o = $.pop(),
                                            r = $.pop(),
                                            a = o.position - r.position,
                                            l = o.time - r.time;
                                        x.velocity = a / l,
                                            x.velocity = x.velocity / 2,
                                        Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0),
                                        (l > 150 || (new window.Date).getTime() - o.time > 300) && (x.velocity = 0)
                                    } else
                                        x.velocity = 0;
                                    x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio,
                                        $.length = 0;
                                    var c = 1e3 * x.params.freeModeMomentumRatio,
                                        h = x.velocity * c,
                                        u = x.translate + h;
                                    x.rtl && (u = -u);
                                    var d,
                                        p = !1,
                                        f = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                                    if (u < x.maxTranslate())
                                        x.params.freeModeMomentumBounce ? (u + x.maxTranslate() < -f && (u = x.maxTranslate() - f), d = x.maxTranslate(), p = !0, P = !0) : u = x.maxTranslate();
                                    else if (u > x.minTranslate())
                                        x.params.freeModeMomentumBounce ? (u - x.minTranslate() > f && (u = x.minTranslate() + f), d = x.minTranslate(), p = !0, P = !0) : u = x.minTranslate();
                                    else if (x.params.freeModeSticky) {
                                        var m,
                                            g = 0;
                                        for (g = 0; g < x.snapGrid.length; g += 1)
                                            if (x.snapGrid[g] > -u) {
                                                m = g;
                                                break
                                            }
                                        u = Math.abs(x.snapGrid[m] - u) < Math.abs(x.snapGrid[m - 1] - u) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1],
                                        x.rtl || (u = -u)
                                    }
                                    if (0 !== x.velocity)
                                        c = x.rtl ? Math.abs((-u - x.translate) / x.velocity) : Math.abs((u - x.translate) / x.velocity);
                                    else if (x.params.freeModeSticky)
                                        return void x.slideReset();
                                    x.params.freeModeMomentumBounce && p ? (x.updateProgress(d), x.setWrapperTransition(c), x.setWrapperTranslate(u), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function () {
                                        x && P && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(d), x.wrapper.transitionEnd(function () {
                                            x && x.onTransitionEnd()
                                        }))
                                    })) : x.velocity ? (x.updateProgress(u), x.setWrapperTransition(c), x.setWrapperTranslate(u), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
                                        x && x.onTransitionEnd()
                                    }))) : x.updateProgress(u),
                                        x.updateActiveIndex()
                                }
                                return void((!x.params.freeModeMomentum || n >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex()))
                            }
                            var _,
                                v = 0,
                                y = x.slidesSizesGrid[0];
                            for (_ = 0; _ < x.slidesGrid.length; _ += x.params.slidesPerGroup)
                                "undefined" != typeof x.slidesGrid[_ + x.params.slidesPerGroup] ? s >= x.slidesGrid[_] && s < x.slidesGrid[_ + x.params.slidesPerGroup] && (v = _, y = x.slidesGrid[_ + x.params.slidesPerGroup] - x.slidesGrid[_]) : s >= x.slidesGrid[_] && (v = _, y = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                            var b = (s - x.slidesGrid[v]) / y;
                            if (n > x.params.longSwipesMs) {
                                if (!x.params.longSwipes)
                                    return void x.slideTo(x.activeIndex);
                                "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(v + x.params.slidesPerGroup) : x.slideTo(v)),
                                "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(v + x.params.slidesPerGroup) : x.slideTo(v))
                            } else {
                                if (!x.params.shortSwipes)
                                    return void x.slideTo(x.activeIndex);
                                "next" === x.swipeDirection && x.slideTo(v + x.params.slidesPerGroup),
                                "prev" === x.swipeDirection && x.slideTo(v)
                            }
                        }
                    },
                    x._slideTo = function (t, e) {
                        return x.slideTo(t, e, !0, !0)
                    },
                    x.slideTo = function (t, e, i, n) {
                        "undefined" == typeof i && (i = !0),
                        "undefined" == typeof t && (t = 0),
                        t < 0 && (t = 0),
                            x.snapIndex = Math.floor(t / x.params.slidesPerGroup),
                        x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                        var s = -x.snapGrid[x.snapIndex];
                        if (x.params.autoplay && x.autoplaying && (n || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(e) : x.stopAutoplay()), x.updateProgress(s), x.params.normalizeSlideIndex)
                            for (var o = 0; o < x.slidesGrid.length; o++)
                                - Math.floor(100 * s) >= Math.floor(100 * x.slidesGrid[o]) && (t = o);
                        return !(!x.params.allowSwipeToNext && s < x.translate && s < x.minTranslate()) && (!(!x.params.allowSwipeToPrev && s > x.translate && s > x.maxTranslate() && (x.activeIndex || 0) !== t) && ("undefined" == typeof e && (e = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = t, x.updateRealIndex(), x.rtl && -s === x.translate || !x.rtl && s === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(s), !1) : (x.updateClasses(), x.onTransitionStart(i), 0 === e || x.browser.lteIE9 ? (x.setWrapperTranslate(s), x.setWrapperTransition(0), x.onTransitionEnd(i)) : (x.setWrapperTranslate(s), x.setWrapperTransition(e), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
                                x && x.onTransitionEnd(i)
                            }))), !0)))
                    },
                    x.onTransitionStart = function (t) {
                        "undefined" == typeof t && (t = !0),
                        x.params.autoHeight && x.updateAutoHeight(),
                        x.lazy && x.lazy.onTransitionStart(),
                        t && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
                    },
                    x.onTransitionEnd = function (t) {
                        x.animating = !1,
                            x.setWrapperTransition(0),
                        "undefined" == typeof t && (t = !0),
                        x.lazy && x.lazy.onTransitionEnd(),
                        t && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))),
                        x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex),
                        x.params.hashnav && x.hashnav && x.hashnav.setHash()
                    },
                    x.slideNext = function (t, e, i) {
                        if (x.params.loop) {
                            if (x.animating)
                                return !1;
                            x.fixLoop();
                            x.container[0].clientLeft;
                            return x.slideTo(x.activeIndex + x.params.slidesPerGroup, e, t, i)
                        }
                        return x.slideTo(x.activeIndex + x.params.slidesPerGroup, e, t, i)
                    },
                    x._slideNext = function (t) {
                        return x.slideNext(!0, t, !0)
                    },
                    x.slidePrev = function (t, e, i) {
                        if (x.params.loop) {
                            if (x.animating)
                                return !1;
                            x.fixLoop();
                            x.container[0].clientLeft;
                            return x.slideTo(x.activeIndex - 1, e, t, i)
                        }
                        return x.slideTo(x.activeIndex - 1, e, t, i)
                    },
                    x._slidePrev = function (t) {
                        return x.slidePrev(!0, t, !0)
                    },
                    x.slideReset = function (t, e, i) {
                        return x.slideTo(x.activeIndex, e, t)
                    },
                    x.disableTouchControl = function () {
                        return x.params.onlyExternal = !0,
                            !0
                    },
                    x.enableTouchControl = function () {
                        return x.params.onlyExternal = !1,
                            !0
                    },
                    x.setWrapperTransition = function (t, e) {
                        x.wrapper.transition(t),
                        "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(t),
                        x.params.parallax && x.parallax && x.parallax.setTransition(t),
                        x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(t),
                        x.params.control && x.controller && x.controller.setTransition(t, e),
                            x.emit("onSetTransition", x, t)
                    },
                    x.setWrapperTranslate = function (t, e, i) {
                        var n = 0,
                            s = 0,
                            r = 0;
                        x.isHorizontal() ? n = x.rtl ? -t : t : s = t,
                        x.params.roundLengths && (n = o(n), s = o(s)),
                        x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + n + "px, " + s + "px, " + r + "px)") : x.wrapper.transform("translate(" + n + "px, " + s + "px)")),
                            x.translate = x.isHorizontal() ? n : s;
                        var a,
                            l = x.maxTranslate() - x.minTranslate();
                        a = 0 === l ? 0 : (t - x.minTranslate()) / l,
                        a !== x.progress && x.updateProgress(t),
                        e && x.updateActiveIndex(),
                        "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate),
                        x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate),
                        x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate),
                        x.params.control && x.controller && x.controller.setTranslate(x.translate, i),
                            x.emit("onSetTranslate", x, x.translate)
                    },
                    x.getTranslate = function (t, e) {
                        var i,
                            n,
                            s,
                            o;
                        return "undefined" == typeof e && (e = "x"),
                            x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (s = window.getComputedStyle(t, null), window.WebKitCSSMatrix ? (n = s.transform || s.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function (t) {
                                return t.replace(",", ".")
                            }).join(", ")), o = new window.WebKitCSSMatrix("none" === n ? "" : n)) : (o = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = o.toString().split(",")), "x" === e && (n = window.WebKitCSSMatrix ? o.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (n = window.WebKitCSSMatrix ? o.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), x.rtl && n && (n = -n), n || 0)
                    },
                    x.getWrapperTranslate = function (t) {
                        return "undefined" == typeof t && (t = x.isHorizontal() ? "x" : "y"),
                            x.getTranslate(x.wrapper[0], t)
                    },
                    x.observers = [],
                    x.initObservers = function () {
                        if (x.params.observeParents)
                            for (var t = x.container.parents(), e = 0; e < t.length; e++)
                                l(t[e]);
                        l(x.container[0], {
                            childList : !1
                        }),
                            l(x.wrapper[0], {
                                attributes : !1
                            })
                    },
                    x.disconnectObservers = function () {
                        for (var t = 0; t < x.observers.length; t++)
                            x.observers[t].disconnect();
                        x.observers = []
                    },
                    x.createLoop = function () {
                        x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                        var t = x.wrapper.children("." + x.params.slideClass);
                        "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = t.length),
                            x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10),
                            x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides,
                        x.loopedSlides > t.length && (x.loopedSlides = t.length);
                        var i,
                            n = [],
                            s = [];
                        for (t.each(function (i, o) {
                            var r = e(this);
                            i < x.loopedSlides && s.push(o),
                            i < t.length && i >= t.length - x.loopedSlides && n.push(o),
                                r.attr("data-swiper-slide-index", i)
                        }), i = 0; i < s.length; i++)
                            x.wrapper.append(e(s[i].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                        for (i = n.length - 1; i >= 0; i--)
                            x.wrapper.prepend(e(n[i].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
                    },
                    x.destroyLoop = function () {
                        x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(),
                            x.slides.removeAttr("data-swiper-slide-index")
                    },
                    x.reLoop = function (t) {
                        var e = x.activeIndex - x.loopedSlides;
                        x.destroyLoop(),
                            x.createLoop(),
                            x.updateSlidesSize(),
                        t && x.slideTo(e + x.loopedSlides, 0, !1)
                    },
                    x.fixLoop = function () {
                        var t;
                        x.activeIndex < x.loopedSlides ? (t = x.slides.length - 3 * x.loopedSlides + x.activeIndex, t += x.loopedSlides, x.slideTo(t, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (t = -x.slides.length + x.activeIndex + x.loopedSlides, t += x.loopedSlides, x.slideTo(t, 0, !1, !0))
                    },
                    x.appendSlide = function (t) {
                        if (x.params.loop && x.destroyLoop(), "object" == typeof t && t.length)
                            for (var e = 0; e < t.length; e++)
                                t[e] && x.wrapper.append(t[e]);
                        else
                            x.wrapper.append(t);
                        x.params.loop && x.createLoop(),
                        x.params.observer && x.support.observer || x.update(!0)
                    },
                    x.prependSlide = function (t) {
                        x.params.loop && x.destroyLoop();
                        var e = x.activeIndex + 1;
                        if ("object" == typeof t && t.length) {
                            for (var i = 0; i < t.length; i++)
                                t[i] && x.wrapper.prepend(t[i]);
                            e = x.activeIndex + t.length
                        } else
                            x.wrapper.prepend(t);
                        x.params.loop && x.createLoop(),
                        x.params.observer && x.support.observer || x.update(!0),
                            x.slideTo(e, 0, !1)
                    },
                    x.removeSlide = function (t) {
                        x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
                        var e,
                            i = x.activeIndex;
                        if ("object" == typeof t && t.length) {
                            for (var n = 0; n < t.length; n++)
                                e = t[n], x.slides[e] && x.slides.eq(e).remove(), e < i && i--;
                            i = Math.max(i, 0)
                        } else
                            e = t, x.slides[e] && x.slides.eq(e).remove(), e < i && i--, i = Math.max(i, 0);
                        x.params.loop && x.createLoop(),
                        x.params.observer && x.support.observer || x.update(!0),
                            x.params.loop ? x.slideTo(i + x.loopedSlides, 0, !1) : x.slideTo(i, 0, !1)
                    },
                    x.removeAllSlides = function () {
                        for (var t = [], e = 0; e < x.slides.length; e++)
                            t.push(e);
                        x.removeSlide(t)
                    },
                    x.effects = {
                        fade : {
                            setTranslate : function () {
                                for (var t = 0; t < x.slides.length; t++) {
                                    var e = x.slides.eq(t),
                                        i = e[0].swiperSlideOffset,
                                        n = -i;
                                    x.params.virtualTranslate || (n -= x.translate);
                                    var s = 0;
                                    x.isHorizontal() || (s = n, n = 0);
                                    var o = x.params.fade.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                                    e.css({
                                        opacity : o
                                    }).transform("translate3d(" + n + "px, " + s + "px, 0px)")
                                }
                            },
                            setTransition : function (t) {
                                if (x.slides.transition(t), x.params.virtualTranslate && 0 !== t) {
                                    var e = !1;
                                    x.slides.transitionEnd(function () {
                                        if (!e && x) {
                                            e = !0,
                                                x.animating = !1;
                                            for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++)
                                                x.wrapper.trigger(t[i])
                                        }
                                    })
                                }
                            }
                        },
                        flip : {
                            setTranslate : function () {
                                for (var t = 0; t < x.slides.length; t++) {
                                    var i = x.slides.eq(t),
                                        n = i[0].progress;
                                    x.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                                    var s = i[0].swiperSlideOffset,
                                        o = -180 * n,
                                        r = o,
                                        a = 0,
                                        l = -s,
                                        c = 0;
                                    if (x.isHorizontal() ? x.rtl && (r = -r) : (c = l, l = 0, a = -r, r = 0), i[0].style.zIndex = -Math.abs(Math.round(n)) + x.slides.length, x.params.flip.slideShadows) {
                                        var h = x.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                            u = x.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                        0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), i.append(h)),
                                        0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(u)),
                                        h.length && (h[0].style.opacity = Math.max(-n, 0)),
                                        u.length && (u[0].style.opacity = Math.max(n, 0))
                                    }
                                    i.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + a + "deg) rotateY(" + r + "deg)")
                                }
                            },
                            setTransition : function (t) {
                                if (x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), x.params.virtualTranslate && 0 !== t) {
                                    var i = !1;
                                    x.slides.eq(x.activeIndex).transitionEnd(function () {
                                        if (!i && x && e(this).hasClass(x.params.slideActiveClass)) {
                                            i = !0,
                                                x.animating = !1;
                                            for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < t.length; n++)
                                                x.wrapper.trigger(t[n])
                                        }
                                    })
                                }
                            }
                        },
                        cube : {
                            setTranslate : function () {
                                var t,
                                    i = 0;
                                x.params.cube.shadow && (x.isHorizontal() ? (t = x.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(t)), t.css({
                                    height : x.width + "px"
                                })) : (t = x.container.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), x.container.append(t))));
                                for (var n = 0; n < x.slides.length; n++) {
                                    var s = x.slides.eq(n),
                                        o = 90 * n,
                                        r = Math.floor(o / 360);
                                    x.rtl && (o = -o, r = Math.floor(-o / 360));
                                    var a = Math.max(Math.min(s[0].progress, 1), -1),
                                        l = 0,
                                        c = 0,
                                        h = 0;
                                    n % 4 === 0 ? (l = 4 * -r * x.size, h = 0) : (n - 1) % 4 === 0 ? (l = 0, h = 4 * -r * x.size) : (n - 2) % 4 === 0 ? (l = x.size + 4 * r * x.size, h = x.size) : (n - 3) % 4 === 0 && (l = -x.size, h = 3 * x.size + 4 * x.size * r),
                                    x.rtl && (l = -l),
                                    x.isHorizontal() || (c = l, l = 0);
                                    var u = "rotateX(" + (x.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (x.isHorizontal() ? o : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + h + "px)";
                                    if (a <= 1 && a > -1 && (i = 90 * n + 90 * a, x.rtl && (i = 90 * -n - 90 * a)), s.transform(u), x.params.cube.slideShadows) {
                                        var d = x.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                            p = x.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                        0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)),
                                        0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(p)),
                                        d.length && (d[0].style.opacity = Math.max(-a, 0)),
                                        p.length && (p[0].style.opacity = Math.max(a, 0))
                                    }
                                }
                                if (x.wrapper.css({
                                        "-webkit-transform-origin" : "50% 50% -" + x.size / 2 + "px",
                                        "-moz-transform-origin" : "50% 50% -" + x.size / 2 + "px",
                                        "-ms-transform-origin" : "50% 50% -" + x.size / 2 + "px",
                                        "transform-origin" : "50% 50% -" + x.size / 2 + "px"
                                    }), x.params.cube.shadow)
                                    if (x.isHorizontal())
                                        t.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                                    else {
                                        var f = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                            m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                                            g = x.params.cube.shadowScale,
                                            _ = x.params.cube.shadowScale / m,
                                            v = x.params.cube.shadowOffset;
                                        t.transform("scale3d(" + g + ", 1, " + _ + ") translate3d(0px, " + (x.height / 2 + v) + "px, " + -x.height / 2 / _ + "px) rotateX(-90deg)")
                                    }
                                var y = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                                x.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (x.isHorizontal() ? 0 : i) + "deg) rotateY(" + (x.isHorizontal() ? -i : 0) + "deg)")
                            },
                            setTransition : function (t) {
                                x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                                x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(t)
                            }
                        },
                        coverflow : {
                            setTranslate : function () {
                                for (var t = x.translate, i = x.isHorizontal() ? -t + x.width / 2 : -t + x.height / 2, n = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, s = x.params.coverflow.depth, o = 0, r = x.slides.length; o < r; o++) {
                                    var a = x.slides.eq(o),
                                        l = x.slidesSizesGrid[o],
                                        c = a[0].swiperSlideOffset,
                                        h = (i - c - l / 2) / l * x.params.coverflow.modifier,
                                        u = x.isHorizontal() ? n * h : 0,
                                        d = x.isHorizontal() ? 0 : n * h,
                                        p = -s * Math.abs(h),
                                        f = x.isHorizontal() ? 0 : x.params.coverflow.stretch * h,
                                        m = x.isHorizontal() ? x.params.coverflow.stretch * h : 0;
                                    Math.abs(m) < .001 && (m = 0),
                                    Math.abs(f) < .001 && (f = 0),
                                    Math.abs(p) < .001 && (p = 0),
                                    Math.abs(u) < .001 && (u = 0),
                                    Math.abs(d) < .001 && (d = 0);
                                    var g = "translate3d(" + m + "px," + f + "px," + p + "px)  rotateX(" + d + "deg) rotateY(" + u + "deg)";
                                    if (a.transform(g), a[0].style.zIndex = -Math.abs(Math.round(h)) + 1, x.params.coverflow.slideShadows) {
                                        var _ = x.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                            v = x.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                        0 === _.length && (_ = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), a.append(_)),
                                        0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(v)),
                                        _.length && (_[0].style.opacity = h > 0 ? h : 0),
                                        v.length && (v[0].style.opacity = -h > 0 ? -h : 0)
                                    }
                                }
                                if (x.browser.ie) {
                                    var y = x.wrapper[0].style;
                                    y.perspectiveOrigin = i + "px 50%"
                                }
                            },
                            setTransition : function (t) {
                                x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                            }
                        }
                    },
                    x.lazy = {
                        initialImageLoaded : !1,
                        loadImageInSlide : function (t, i) {
                            if ("undefined" != typeof t && ("undefined" == typeof i && (i = !0), 0 !== x.slides.length)) {
                                var n = x.slides.eq(t),
                                    s = n.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
                                !n.hasClass(x.params.lazyLoadingClass) || n.hasClass(x.params.lazyStatusLoadedClass) || n.hasClass(x.params.lazyStatusLoadingClass) || (s = s.add(n[0])),
                                0 !== s.length && s.each(function () {
                                    var t = e(this);
                                    t.addClass(x.params.lazyStatusLoadingClass);
                                    var s = t.attr("data-background"),
                                        o = t.attr("data-src"),
                                        r = t.attr("data-srcset"),
                                        a = t.attr("data-sizes");
                                    x.loadImage(t[0], o || s, r, a, !1, function () {
                                        if ("undefined" != typeof x && null !== x && x) {
                                            if (s ? (t.css("background-image", 'url("' + s + '")'), t.removeAttr("data-background")) : (r && (t.attr("srcset", r), t.removeAttr("data-srcset")), a && (t.attr("sizes", a), t.removeAttr("data-sizes")), o && (t.attr("src", o), t.removeAttr("data-src"))), t.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass), n.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(), x.params.loop && i) {
                                                var e = n.attr("data-swiper-slide-index");
                                                if (n.hasClass(x.params.slideDuplicateClass)) {
                                                    var l = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                                    x.lazy.loadImageInSlide(l.index(), !1)
                                                } else {
                                                    var c = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                    x.lazy.loadImageInSlide(c.index(), !1)
                                                }
                                            }
                                            x.emit("onLazyImageReady", x, n[0], t[0])
                                        }
                                    }),
                                        x.emit("onLazyImageLoad", x, n[0], t[0])
                                })
                            }
                        },
                        load : function () {
                            var t,
                                i = x.params.slidesPerView;
                            if ("auto" === i && (i = 0), x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0), x.params.watchSlidesVisibility)
                                x.wrapper.children("." + x.params.slideVisibleClass).each(function () {
                                    x.lazy.loadImageInSlide(e(this).index())
                                });
                            else if (i > 1)
                                for (t = x.activeIndex; t < x.activeIndex + i; t++)
                                    x.slides[t] && x.lazy.loadImageInSlide(t);
                            else
                                x.lazy.loadImageInSlide(x.activeIndex);
                            if (x.params.lazyLoadingInPrevNext)
                                if (i > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                                    var n = x.params.lazyLoadingInPrevNextAmount,
                                        s = i,
                                        o = Math.min(x.activeIndex + s + Math.max(n, s), x.slides.length),
                                        r = Math.max(x.activeIndex - Math.max(s, n), 0);
                                    for (t = x.activeIndex + i; t < o; t++)
                                        x.slides[t] && x.lazy.loadImageInSlide(t);
                                    for (t = r; t < x.activeIndex; t++)
                                        x.slides[t] && x.lazy.loadImageInSlide(t)
                                } else {
                                    var a = x.wrapper.children("." + x.params.slideNextClass);
                                    a.length > 0 && x.lazy.loadImageInSlide(a.index());
                                    var l = x.wrapper.children("." + x.params.slidePrevClass);
                                    l.length > 0 && x.lazy.loadImageInSlide(l.index())
                                }
                        },
                        onTransitionStart : function () {
                            x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                        },
                        onTransitionEnd : function () {
                            x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                        }
                    },
                    x.scrollbar = {
                        isTouched : !1,
                        setDragPosition : function (t) {
                            var e = x.scrollbar,
                                i = x.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY,
                                n = i - e.track.offset()[x.isHorizontal() ? "left" : "top"] - e.dragSize / 2,
                                s = -x.minTranslate() * e.moveDivider,
                                o = -x.maxTranslate() * e.moveDivider;
                            n < s ? n = s : n > o && (n = o),
                                n = -n / e.moveDivider,
                                x.updateProgress(n),
                                x.setWrapperTranslate(n, !0)
                        },
                        dragStart : function (t) {
                            var e = x.scrollbar;
                            e.isTouched = !0,
                                t.preventDefault(),
                                t.stopPropagation(),
                                e.setDragPosition(t),
                                clearTimeout(e.dragTimeout),
                                e.track.transition(0),
                            x.params.scrollbarHide && e.track.css("opacity", 1),
                                x.wrapper.transition(100),
                                e.drag.transition(100),
                                x.emit("onScrollbarDragStart", x)
                        },
                        dragMove : function (t) {
                            var e = x.scrollbar;
                            e.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), x.wrapper.transition(0), e.track.transition(0), e.drag.transition(0), x.emit("onScrollbarDragMove", x))
                        },
                        dragEnd : function (t) {
                            var e = x.scrollbar;
                            e.isTouched && (e.isTouched = !1, x.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function () {
                                e.track.css("opacity", 0),
                                    e.track.transition(400)
                            }, 1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset())
                        },
                        draggableEvents : function () {
                            return x.params.simulateTouch !== !1 || x.support.touch ? x.touchEvents : x.touchEventsDesktop
                        }
                        (),
                        enableDraggable : function () {
                            var t = x.scrollbar,
                                i = x.support.touch ? t.track : document;
                            e(t.track).on(t.draggableEvents.start, t.dragStart),
                                e(i).on(t.draggableEvents.move, t.dragMove),
                                e(i).on(t.draggableEvents.end, t.dragEnd)
                        },
                        disableDraggable : function () {
                            var t = x.scrollbar,
                                i = x.support.touch ? t.track : document;
                            e(t.track).off(t.draggableEvents.start, t.dragStart),
                                e(i).off(t.draggableEvents.move, t.dragMove),
                                e(i).off(t.draggableEvents.end, t.dragEnd)
                        },
                        set : function () {
                            if (x.params.scrollbar) {
                                var t = x.scrollbar;
                                t.track = e(x.params.scrollbar),
                                x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && t.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (t.track = x.container.find(x.params.scrollbar)),
                                    t.drag = t.track.find(".swiper-scrollbar-drag"),
                                0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)),
                                    t.drag[0].style.width = "",
                                    t.drag[0].style.height = "",
                                    t.trackSize = x.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight,
                                    t.divider = x.size / x.virtualSize,
                                    t.moveDivider = t.divider * (t.trackSize / x.size),
                                    t.dragSize = t.trackSize * t.divider,
                                    x.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px",
                                    t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "",
                                x.params.scrollbarHide && (t.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate : function () {
                            if (x.params.scrollbar) {
                                var t,
                                    e = x.scrollbar,
                                    i = (x.translate || 0, e.dragSize);
                                t = (e.trackSize - e.dragSize) * x.progress,
                                    x.rtl && x.isHorizontal() ? (t = -t, t > 0 ? (i = e.dragSize - t, t = 0) : -t + e.dragSize > e.trackSize && (i = e.trackSize + t)) : t < 0 ? (i = e.dragSize + t, t = 0) : t + e.dragSize > e.trackSize && (i = e.trackSize - t),
                                    x.isHorizontal() ? (x.support.transforms3d ? e.drag.transform("translate3d(" + t + "px, 0, 0)") : e.drag.transform("translateX(" + t + "px)"), e.drag[0].style.width = i + "px") : (x.support.transforms3d ? e.drag.transform("translate3d(0px, " + t + "px, 0)") : e.drag.transform("translateY(" + t + "px)"), e.drag[0].style.height = i + "px"),
                                x.params.scrollbarHide && (clearTimeout(e.timeout), e.track[0].style.opacity = 1, e.timeout = setTimeout(function () {
                                    e.track[0].style.opacity = 0,
                                        e.track.transition(400)
                                }, 1e3))
                            }
                        },
                        setTransition : function (t) {
                            x.params.scrollbar && x.scrollbar.drag.transition(t)
                        }
                    },
                    x.controller = {
                        LinearSpline : function (t, e) {
                            var i = function () {
                                var t,
                                    e,
                                    i;
                                return function (n, s) {
                                    for (e = -1, t = n.length; t - e > 1; )
                                        n[i = t + e >> 1] <= s ? e = i : t = i;
                                    return t
                                }
                            }
                            ();
                            this.x = t,
                                this.y = e,
                                this.lastIndex = t.length - 1;
                            var n,
                                s;
                            this.x.length;
                            this.interpolate = function (t) {
                                return t ? (s = i(this.x, t), n = s - 1, (t - this.x[n]) * (this.y[s] - this.y[n]) / (this.x[s] - this.x[n]) + this.y[n]) : 0
                            }
                        },
                        getInterpolateFunction : function (t) {
                            x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, t.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, t.snapGrid))
                        },
                        setTranslate : function (t, e) {
                            function n(e) {
                                t = e.rtl && "horizontal" === e.params.direction ? -x.translate : x.translate,
                                "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(e), o = -x.controller.spline.interpolate(-t)),
                                o && "container" !== x.params.controlBy || (s = (e.maxTranslate() - e.minTranslate()) / (x.maxTranslate() - x.minTranslate()), o = (t - x.minTranslate()) * s + e.minTranslate()),
                                x.params.controlInverse && (o = e.maxTranslate() - o),
                                    e.updateProgress(o),
                                    e.setWrapperTranslate(o, !1, x),
                                    e.updateActiveIndex()
                            }
                            var s,
                                o,
                                r = x.params.control;
                            if (Array.isArray(r))
                                for (var a = 0; a < r.length; a++)
                                    r[a] !== e && r[a]instanceof i && n(r[a]);
                            else
                                r instanceof i && e !== r && n(r)
                        },
                        setTransition : function (t, e) {
                            function n(e) {
                                e.setWrapperTransition(t, x),
                                0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd(function () {
                                    o && (e.params.loop && "slide" === x.params.controlBy && e.fixLoop(), e.onTransitionEnd())
                                }))
                            }
                            var s,
                                o = x.params.control;
                            if (Array.isArray(o))
                                for (s = 0; s < o.length; s++)
                                    o[s] !== e && o[s]instanceof i && n(o[s]);
                            else
                                o instanceof i && e !== o && n(o)
                        }
                    },
                    x.hashnav = {
                        onHashCange : function (t, e) {
                            var i = document.location.hash.replace("#", ""),
                                n = x.slides.eq(x.activeIndex).attr("data-hash");
                            i !== n && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + i + '"]').index())
                        },
                        attachEvents : function (t) {
                            var i = t ? "off" : "on";
                            e(window)[i]("hashchange", x.hashnav.onHashCange)
                        },
                        setHash : function () {
                            if (x.hashnav.initialized && x.params.hashnav)
                                if (x.params.replaceState && window.history && window.history.replaceState)
                                    window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || "");
                                else {
                                    var t = x.slides.eq(x.activeIndex),
                                        e = t.attr("data-hash") || t.attr("data-history");
                                    document.location.hash = e || ""
                                }
                        },
                        init : function () {
                            if (x.params.hashnav && !x.params.history) {
                                x.hashnav.initialized = !0;
                                var t = document.location.hash.replace("#", "");
                                if (t)
                                    for (var e = 0, i = 0, n = x.slides.length; i < n; i++) {
                                        var s = x.slides.eq(i),
                                            o = s.attr("data-hash") || s.attr("data-history");
                                        if (o === t && !s.hasClass(x.params.slideDuplicateClass)) {
                                            var r = s.index();
                                            x.slideTo(r, e, x.params.runCallbacksOnInit, !0)
                                        }
                                    }
                                x.params.hashnavWatchState && x.hashnav.attachEvents()
                            }
                        },
                        destroy : function () {
                            x.params.hashnavWatchState && x.hashnav.attachEvents(!0)
                        }
                    },
                    x.history = {
                        init : function () {
                            if (x.params.history) {
                                if (!window.history || !window.history.pushState)
                                    return x.params.history = !1, void(x.params.hashnav = !0);
                                x.history.initialized = !0,
                                    this.paths = this.getPathValues(),
                                (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit), x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                            }
                        },
                        setHistoryPopState : function () {
                            x.history.paths = x.history.getPathValues(),
                                x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1)
                        },
                        getPathValues : function () {
                            var t = window.location.pathname.slice(1).split("/"),
                                e = t.length,
                                i = t[e - 2],
                                n = t[e - 1];
                            return {
                                key : i,
                                value : n
                            }
                        },
                        setHistory : function (t, e) {
                            if (x.history.initialized && x.params.history) {
                                var i = x.slides.eq(e),
                                    n = this.slugify(i.attr("data-history"));
                                window.location.pathname.includes(t) || (n = t + "/" + n),
                                    x.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n)
                            }
                        },
                        slugify : function (t) {
                            return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                        },
                        scrollToSlide : function (t, e, i) {
                            if (e)
                                for (var n = 0, s = x.slides.length; n < s; n++) {
                                    var o = x.slides.eq(n),
                                        r = this.slugify(o.attr("data-history"));
                                    if (r === e && !o.hasClass(x.params.slideDuplicateClass)) {
                                        var a = o.index();
                                        x.slideTo(a, t, i)
                                    }
                                }
                            else
                                x.slideTo(0, t, i)
                        }
                    },
                    x.disableKeyboardControl = function () {
                        x.params.keyboardControl = !1,
                            e(document).off("keydown", c)
                    },
                    x.enableKeyboardControl = function () {
                        x.params.keyboardControl = !0,
                            e(document).on("keydown", c)
                    },
                    x.mousewheel = {
                        event : !1,
                        lastScrollTime : (new window.Date).getTime()
                    },
                x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : h() ? "wheel" : "mousewheel"),
                    x.disableMousewheelControl = function () {
                        if (!x.mousewheel.event)
                            return !1;
                        var t = x.container;
                        return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)),
                            t.off(x.mousewheel.event, d),
                            x.params.mousewheelControl = !1,
                            !0
                    },
                    x.enableMousewheelControl = function () {
                        if (!x.mousewheel.event)
                            return !1;
                        var t = x.container;
                        return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)),
                            t.on(x.mousewheel.event, d),
                            x.params.mousewheelControl = !0,
                            !0
                    },
                    x.parallax = {
                        setTranslate : function () {
                            x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                p(this, x.progress)
                            }),
                                x.slides.each(function () {
                                    var t = e(this);
                                    t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                        var e = Math.min(Math.max(t[0].progress, -1), 1);
                                        p(this, e)
                                    })
                                })
                        },
                        setTransition : function (t) {
                            "undefined" == typeof t && (t = x.params.speed),
                                x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                    var i = e(this),
                                        n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                                    0 === t && (n = 0),
                                        i.transition(n)
                                })
                        }
                    },
                    x.zoom = {
                        scale : 1,
                        currentScale : 1,
                        isScaling : !1,
                        gesture : {
                            slide : void 0,
                            slideWidth : void 0,
                            slideHeight : void 0,
                            image : void 0,
                            imageWrap : void 0,
                            zoomMax : x.params.zoomMax
                        },
                        image : {
                            isTouched : void 0,
                            isMoved : void 0,
                            currentX : void 0,
                            currentY : void 0,
                            minX : void 0,
                            minY : void 0,
                            maxX : void 0,
                            maxY : void 0,
                            width : void 0,
                            height : void 0,
                            startX : void 0,
                            startY : void 0,
                            touchesStart : {},
                            touchesCurrent : {}

                        },
                        velocity : {
                            x : void 0,
                            y : void 0,
                            prevPositionX : void 0,
                            prevPositionY : void 0,
                            prevTime : void 0
                        },
                        getDistanceBetweenTouches : function (t) {
                            if (t.targetTouches.length < 2)
                                return 1;
                            var e = t.targetTouches[0].pageX,
                                i = t.targetTouches[0].pageY,
                                n = t.targetTouches[1].pageX,
                                s = t.targetTouches[1].pageY,
                                o = Math.sqrt(Math.pow(n - e, 2) + Math.pow(s - i, 2));
                            return o
                        },
                        onGestureStart : function (t) {
                            var i = x.zoom;
                            if (!x.support.gestures) {
                                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                                    return;
                                i.gesture.scaleStart = i.getDistanceBetweenTouches(t)
                            }
                            return i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = e(this), 0 === i.gesture.slide.length && (i.gesture.slide = x.slides.eq(x.activeIndex)), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + x.params.zoomContainerClass), i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax, 0 !== i.gesture.imageWrap.length) ? (i.gesture.image.transition(0), void(i.isScaling = !0)) : void(i.gesture.image = void 0)
                        },
                        onGestureChange : function (t) {
                            var e = x.zoom;
                            if (!x.support.gestures) {
                                if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2)
                                    return;
                                e.gesture.scaleMove = e.getDistanceBetweenTouches(t)
                            }
                            e.gesture.image && 0 !== e.gesture.image.length && (x.support.gestures ? e.scale = t.scale * e.currentScale : e.scale = e.gesture.scaleMove / e.gesture.scaleStart * e.currentScale, e.scale > e.gesture.zoomMax && (e.scale = e.gesture.zoomMax - 1 + Math.pow(e.scale - e.gesture.zoomMax + 1, .5)), e.scale < x.params.zoomMin && (e.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - e.scale + 1, .5)), e.gesture.image.transform("translate3d(0,0,0) scale(" + e.scale + ")"))
                        },
                        onGestureEnd : function (t) {
                            var e = x.zoom;
                            !x.support.gestures && ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2) || e.gesture.image && 0 !== e.gesture.image.length && (e.scale = Math.max(Math.min(e.scale, e.gesture.zoomMax), x.params.zoomMin), e.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + e.scale + ")"), e.currentScale = e.scale, e.isScaling = !1, 1 === e.scale && (e.gesture.slide = void 0))
                        },
                        onTouchStart : function (t, e) {
                            var i = t.zoom;
                            i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === t.device.os && e.preventDefault(), i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                        },
                        onTouchMove : function (t) {
                            var e = x.zoom;
                            if (e.gesture.image && 0 !== e.gesture.image.length && (x.allowClick = !1, e.image.isTouched && e.gesture.slide)) {
                                e.image.isMoved || (e.image.width = e.gesture.image[0].offsetWidth, e.image.height = e.gesture.image[0].offsetHeight, e.image.startX = x.getTranslate(e.gesture.imageWrap[0], "x") || 0, e.image.startY = x.getTranslate(e.gesture.imageWrap[0], "y") || 0, e.gesture.slideWidth = e.gesture.slide[0].offsetWidth, e.gesture.slideHeight = e.gesture.slide[0].offsetHeight, e.gesture.imageWrap.transition(0), x.rtl && (e.image.startX = -e.image.startX), x.rtl && (e.image.startY = -e.image.startY));
                                var i = e.image.width * e.scale,
                                    n = e.image.height * e.scale;
                                if (!(i < e.gesture.slideWidth && n < e.gesture.slideHeight)) {
                                    if (e.image.minX = Math.min(e.gesture.slideWidth / 2 - i / 2, 0), e.image.maxX = -e.image.minX, e.image.minY = Math.min(e.gesture.slideHeight / 2 - n / 2, 0), e.image.maxY = -e.image.minY, e.image.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, e.image.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !e.image.isMoved && !e.isScaling) {
                                        if (x.isHorizontal() && Math.floor(e.image.minX) === Math.floor(e.image.startX) && e.image.touchesCurrent.x < e.image.touchesStart.x || Math.floor(e.image.maxX) === Math.floor(e.image.startX) && e.image.touchesCurrent.x > e.image.touchesStart.x)
                                            return void(e.image.isTouched = !1);
                                        if (!x.isHorizontal() && Math.floor(e.image.minY) === Math.floor(e.image.startY) && e.image.touchesCurrent.y < e.image.touchesStart.y || Math.floor(e.image.maxY) === Math.floor(e.image.startY) && e.image.touchesCurrent.y > e.image.touchesStart.y)
                                            return void(e.image.isTouched = !1)
                                    }
                                    t.preventDefault(),
                                        t.stopPropagation(),
                                        e.image.isMoved = !0,
                                        e.image.currentX = e.image.touchesCurrent.x - e.image.touchesStart.x + e.image.startX,
                                        e.image.currentY = e.image.touchesCurrent.y - e.image.touchesStart.y + e.image.startY,
                                    e.image.currentX < e.image.minX && (e.image.currentX = e.image.minX + 1 - Math.pow(e.image.minX - e.image.currentX + 1, .8)),
                                    e.image.currentX > e.image.maxX && (e.image.currentX = e.image.maxX - 1 + Math.pow(e.image.currentX - e.image.maxX + 1, .8)),
                                    e.image.currentY < e.image.minY && (e.image.currentY = e.image.minY + 1 - Math.pow(e.image.minY - e.image.currentY + 1, .8)),
                                    e.image.currentY > e.image.maxY && (e.image.currentY = e.image.maxY - 1 + Math.pow(e.image.currentY - e.image.maxY + 1, .8)),
                                    e.velocity.prevPositionX || (e.velocity.prevPositionX = e.image.touchesCurrent.x),
                                    e.velocity.prevPositionY || (e.velocity.prevPositionY = e.image.touchesCurrent.y),
                                    e.velocity.prevTime || (e.velocity.prevTime = Date.now()),
                                        e.velocity.x = (e.image.touchesCurrent.x - e.velocity.prevPositionX) / (Date.now() - e.velocity.prevTime) / 2,
                                        e.velocity.y = (e.image.touchesCurrent.y - e.velocity.prevPositionY) / (Date.now() - e.velocity.prevTime) / 2,
                                    Math.abs(e.image.touchesCurrent.x - e.velocity.prevPositionX) < 2 && (e.velocity.x = 0),
                                    Math.abs(e.image.touchesCurrent.y - e.velocity.prevPositionY) < 2 && (e.velocity.y = 0),
                                        e.velocity.prevPositionX = e.image.touchesCurrent.x,
                                        e.velocity.prevPositionY = e.image.touchesCurrent.y,
                                        e.velocity.prevTime = Date.now(),
                                        e.gesture.imageWrap.transform("translate3d(" + e.image.currentX + "px, " + e.image.currentY + "px,0)")
                                }
                            }
                        },
                        onTouchEnd : function (t, e) {
                            var i = t.zoom;
                            if (i.gesture.image && 0 !== i.gesture.image.length) {
                                if (!i.image.isTouched || !i.image.isMoved)
                                    return i.image.isTouched = !1, void(i.image.isMoved = !1);
                                i.image.isTouched = !1,
                                    i.image.isMoved = !1;
                                var n = 300,
                                    s = 300,
                                    o = i.velocity.x * n,
                                    r = i.image.currentX + o,
                                    a = i.velocity.y * s,
                                    l = i.image.currentY + a;
                                0 !== i.velocity.x && (n = Math.abs((r - i.image.currentX) / i.velocity.x)),
                                0 !== i.velocity.y && (s = Math.abs((l - i.image.currentY) / i.velocity.y));
                                var c = Math.max(n, s);
                                i.image.currentX = r,
                                    i.image.currentY = l;
                                var h = i.image.width * i.scale,
                                    u = i.image.height * i.scale;
                                i.image.minX = Math.min(i.gesture.slideWidth / 2 - h / 2, 0),
                                    i.image.maxX = -i.image.minX,
                                    i.image.minY = Math.min(i.gesture.slideHeight / 2 - u / 2, 0),
                                    i.image.maxY = -i.image.minY,
                                    i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX),
                                    i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY),
                                    i.gesture.imageWrap.transition(c).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                            }
                        },
                        onTransitionEnd : function (t) {
                            var e = t.zoom;
                            e.gesture.slide && t.previousIndex !== t.activeIndex && (e.gesture.image.transform("translate3d(0,0,0) scale(1)"), e.gesture.imageWrap.transform("translate3d(0,0,0)"), e.gesture.slide = e.gesture.image = e.gesture.imageWrap = void 0, e.scale = e.currentScale = 1)
                        },
                        toggleZoom : function (t, i) {
                            var n = t.zoom;
                            if (n.gesture.slide || (n.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), n.gesture.image = n.gesture.slide.find("img, svg, canvas"), n.gesture.imageWrap = n.gesture.image.parent("." + t.params.zoomContainerClass)), n.gesture.image && 0 !== n.gesture.image.length) {
                                var s,
                                    o,
                                    r,
                                    a,
                                    l,
                                    c,
                                    h,
                                    u,
                                    d,
                                    p,
                                    f,
                                    m,
                                    g,
                                    _,
                                    v,
                                    y,
                                    b,
                                    w;
                                "undefined" == typeof n.image.touchesStart.x && i ? (s = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX, o = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (s = n.image.touchesStart.x, o = n.image.touchesStart.y),
                                    n.scale && 1 !== n.scale ? (n.scale = n.currentScale = 1, n.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), n.gesture.slide = void 0) : (n.scale = n.currentScale = n.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, i ? (b = n.gesture.slide[0].offsetWidth, w = n.gesture.slide[0].offsetHeight, r = n.gesture.slide.offset().left, a = n.gesture.slide.offset().top, l = r + b / 2 - s, c = a + w / 2 - o, d = n.gesture.image[0].offsetWidth, p = n.gesture.image[0].offsetHeight, f = d * n.scale, m = p * n.scale, g = Math.min(b / 2 - f / 2, 0), _ = Math.min(w / 2 - m / 2, 0), v = -g, y = -_, h = l * n.scale, u = c * n.scale, h < g && (h = g), h > v && (h = v), u < _ && (u = _), u > y && (u = y)) : (h = 0, u = 0), n.gesture.imageWrap.transition(300).transform("translate3d(" + h + "px, " + u + "px,0)"), n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"))
                            }
                        },
                        attachEvents : function (t) {
                            var i = t ? "off" : "on";
                            if (x.params.zoom) {
                                var n = (x.slides, !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                                    passive : !0,
                                    capture : !1
                                });
                                x.support.gestures ? (x.slides[i]("gesturestart", x.zoom.onGestureStart, n), x.slides[i]("gesturechange", x.zoom.onGestureChange, n), x.slides[i]("gestureend", x.zoom.onGestureEnd, n)) : "touchstart" === x.touchEvents.start && (x.slides[i](x.touchEvents.start, x.zoom.onGestureStart, n), x.slides[i](x.touchEvents.move, x.zoom.onGestureChange, n), x.slides[i](x.touchEvents.end, x.zoom.onGestureEnd, n)),
                                    x[i]("touchStart", x.zoom.onTouchStart),
                                    x.slides.each(function (t, n) {
                                        e(n).find("." + x.params.zoomContainerClass).length > 0 && e(n)[i](x.touchEvents.move, x.zoom.onTouchMove)
                                    }),
                                    x[i]("touchEnd", x.zoom.onTouchEnd),
                                    x[i]("transitionEnd", x.zoom.onTransitionEnd),
                                x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom)
                            }
                        },
                        init : function () {
                            x.zoom.attachEvents()
                        },
                        destroy : function () {
                            x.zoom.attachEvents(!0)
                        }
                    },
                    x._plugins = [];
                for (var B in x.plugins) {
                    var H = x.plugins[B](x, x.params[B]);
                    H && x._plugins.push(H)
                }
                return x.callPlugins = function (t) {
                    for (var e = 0; e < x._plugins.length; e++)
                        t in x._plugins[e] && x._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                },
                    x.emitterEventListeners = {},
                    x.emit = function (t) {
                        x.params[t] && x.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        var e;
                        if (x.emitterEventListeners[t])
                            for (e = 0; e < x.emitterEventListeners[t].length; e++)
                                x.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        x.callPlugins && x.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    },
                    x.on = function (t, e) {
                        return t = f(t),
                        x.emitterEventListeners[t] || (x.emitterEventListeners[t] = []),
                            x.emitterEventListeners[t].push(e),
                            x
                    },
                    x.off = function (t, e) {
                        var i;
                        if (t = f(t), "undefined" == typeof e)
                            return x.emitterEventListeners[t] = [], x;
                        if (x.emitterEventListeners[t] && 0 !== x.emitterEventListeners[t].length) {
                            for (i = 0; i < x.emitterEventListeners[t].length; i++)
                                x.emitterEventListeners[t][i] === e && x.emitterEventListeners[t].splice(i, 1);
                            return x
                        }
                    },
                    x.once = function (t, e) {
                        t = f(t);
                        var i = function () {
                            e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                                x.off(t, i)
                        };
                        return x.on(t, i),
                            x
                    },
                    x.a11y = {
                        makeFocusable : function (t) {
                            return t.attr("tabIndex", "0"),
                                t
                        },
                        addRole : function (t, e) {
                            return t.attr("role", e),
                                t
                        },
                        addLabel : function (t, e) {
                            return t.attr("aria-label", e),
                                t
                        },
                        disable : function (t) {
                            return t.attr("aria-disabled", !0),
                                t
                        },
                        enable : function (t) {
                            return t.attr("aria-disabled", !1),
                                t
                        },
                        onEnterKey : function (t) {
                            13 === t.keyCode && (e(t.target).is(x.params.nextButton) ? (x.onClickNext(t), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(t.target).is(x.params.prevButton) && (x.onClickPrev(t), x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), e(t.target).is("." + x.params.bulletClass) && e(t.target)[0].click())
                        },
                        liveRegion : e('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                        notify : function (t) {
                            var e = x.a11y.liveRegion;
                            0 !== e.length && (e.html(""), e.html(t))
                        },
                        init : function () {
                            x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)),
                            x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)),
                                e(x.container).append(x.a11y.liveRegion)
                        },
                        initPagination : function () {
                            x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function () {
                                var t = e(this);
                                x.a11y.makeFocusable(t),
                                    x.a11y.addRole(t, "button"),
                                    x.a11y.addLabel(t, x.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                            })
                        },
                        destroy : function () {
                            x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove()
                        }
                    },
                    x.init = function () {
                        x.params.loop && x.createLoop(),
                            x.updateContainerSize(),
                            x.updateSlidesSize(),
                            x.updatePagination(),
                        x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()),
                        "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()),
                            x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))),
                            x.attachEvents(),
                        x.params.observer && x.support.observer && x.initObservers(),
                        x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(),
                        x.params.zoom && x.zoom && x.zoom.init(),
                        x.params.autoplay && x.startAutoplay(),
                        x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(),
                        x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(),
                        x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState),
                        x.params.history && x.history && x.history.init(),
                        x.params.hashnav && x.hashnav && x.hashnav.init(),
                        x.params.a11y && x.a11y && x.a11y.init(),
                            x.emit("onInit", x)
                    },
                    x.cleanupStyles = function () {
                        x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),
                            x.wrapper.removeAttr("style"),
                        x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                        x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass),
                        x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass),
                        x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),
                        x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),
                        x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
                    },
                    x.destroy = function (t, e) {
                        x.detachEvents(),
                            x.stopAutoplay(),
                        x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(),
                        x.params.loop && x.destroyLoop(),
                        e && x.cleanupStyles(),
                            x.disconnectObservers(),
                        x.params.zoom && x.zoom && x.zoom.destroy(),
                        x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(),
                        x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(),
                        x.params.a11y && x.a11y && x.a11y.destroy(),
                        x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState),
                        x.params.hashnav && x.hashnav && x.hashnav.destroy(),
                            x.emit("onDestroy"),
                        t !== !1 && (x = null)
                    },
                    x.init(),
                    x
            }
        };
    i.prototype = {
        isSafari : function () {
            var t = window.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
        }
        (),
        isUiWebView : /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray : function (t) {
            return "[object Array]" === Object.prototype.toString.apply(t)
        },
        browser : {
            ie : window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch : window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9 : function () {
                var t = document.createElement("div");
                return t.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->",
                1 === t.getElementsByTagName("i").length
            }
            ()
        },
        device : function () {
            var t = window.navigator.userAgent,
                e = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                i = t.match(/(iPad).*OS\s([\d_]+)/),
                n = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                s = !i && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios : i || s || n,
                android : e
            }
        }
        (),
        support : {
            touch : window.Modernizr && Modernizr.touch === !0 || function () {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }
            (),
            transforms3d : window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                var t = document.createElement("div").style;
                return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
            }
            (),
            flexbox : function () {
                for (var t = document.createElement("div").style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i++)
                    if (e[i]in t)
                        return !0
            }
            (),
            observer : function () {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }
            (),
            passiveListener : function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get : function () {
                            t = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, e)
                } catch (t) {}

                return t
            }
            (),
            gestures : function () {
                return "ongesturestart" in window
            }
            ()
        },
        plugins : {}

    };
    for (var n = (function () {
        var t = function (t) {
                var e = this,
                    i = 0;
                for (i = 0; i < t.length; i++)
                    e[i] = t[i];
                return e.length = t.length,
                    this
            },
            e = function (e, i) {
                var n = [],
                    s = 0;
                if (e && !i && e instanceof t)
                    return e;
                if (e)
                    if ("string" == typeof e) {
                        var o,
                            r,
                            a = e.trim();
                        if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                            var l = "div";
                            for (0 === a.indexOf("<li") && (l = "ul"), 0 === a.indexOf("<tr") && (l = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (l = "tr"), 0 === a.indexOf("<tbody") && (l = "table"), 0 === a.indexOf("<option") && (l = "select"), r = document.createElement(l), r.innerHTML = e, s = 0; s < r.childNodes.length; s++)
                                n.push(r.childNodes[s])
                        } else
                            for (o = i || "#" !== e[0] || e.match(/[ .<>:~]/) ? (i || document).querySelectorAll(e) : [document.getElementById(e.split("#")[1])], s = 0; s < o.length; s++)
                                o[s] && n.push(o[s])
                    } else if (e.nodeType || e === window || e === document)
                        n.push(e);
                    else if (e.length > 0 && e[0].nodeType)
                        for (s = 0; s < e.length; s++)
                            n.push(e[s]);
                return new t(n)
            };
        return t.prototype = {
            addClass : function (t) {
                if ("undefined" == typeof t)
                    return this;
                for (var e = t.split(" "), i = 0; i < e.length; i++)
                    for (var n = 0; n < this.length; n++)
                        this[n].classList.add(e[i]);
                return this
            },
            removeClass : function (t) {
                for (var e = t.split(" "), i = 0; i < e.length; i++)
                    for (var n = 0; n < this.length; n++)
                        this[n].classList.remove(e[i]);
                return this
            },
            hasClass : function (t) {
                return !!this[0] && this[0].classList.contains(t)
            },
            toggleClass : function (t) {
                for (var e = t.split(" "), i = 0; i < e.length; i++)
                    for (var n = 0; n < this.length; n++)
                        this[n].classList.toggle(e[i]);
                return this
            },
            attr : function (t, e) {
                if (1 === arguments.length && "string" == typeof t)
                    return this[0] ? this[0].getAttribute(t) : void 0;
                for (var i = 0; i < this.length; i++)
                    if (2 === arguments.length)
                        this[i].setAttribute(t, e);
                    else
                        for (var n in t)
                            this[i][n] = t[n], this[i].setAttribute(n, t[n]);
                return this
            },
            removeAttr : function (t) {
                for (var e = 0; e < this.length; e++)
                    this[e].removeAttribute(t);
                return this
            },
            data : function (t, e) {
                if ("undefined" != typeof e) {
                    for (var i = 0; i < this.length; i++) {
                        var n = this[i];
                        n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}),
                            n.dom7ElementDataStorage[t] = e
                    }
                    return this
                }
                if (this[0]) {
                    var s = this[0].getAttribute("data-" + t);
                    return s ? s : this[0].dom7ElementDataStorage && t in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[t] : void 0
                }
            },
            transform : function (t) {
                for (var e = 0; e < this.length; e++) {
                    var i = this[e].style;
                    i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
                }
                return this
            },
            transition : function (t) {
                "string" != typeof t && (t += "ms");
                for (var e = 0; e < this.length; e++) {
                    var i = this[e].style;
                    i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
                }
                return this
            },
            on : function (t, i, n, s) {
                function o(t) {
                    var s = t.target;
                    if (e(s).is(i))
                        n.call(s, t);
                    else
                        for (var o = e(s).parents(), r = 0; r < o.length; r++)
                            e(o[r]).is(i) && n.call(o[r], t)
                }
                var r,
                    a,
                    l = t.split(" ");
                for (r = 0; r < this.length; r++)
                    if ("function" == typeof i || i === !1)
                        for ("function" == typeof i && (n = arguments[1], s = arguments[2] || !1), a = 0; a < l.length; a++)
                            this[r].addEventListener(l[a], n, s);
                    else
                        for (a = 0; a < l.length; a++)
                            this[r].dom7LiveListeners || (this[r].dom7LiveListeners = []), this[r].dom7LiveListeners.push({
                                listener : n,
                                liveListener : o
                            }), this[r].addEventListener(l[a], o, s);
                return this
            },
            off : function (t, e, i, n) {
                for (var s = t.split(" "), o = 0; o < s.length; o++)
                    for (var r = 0; r < this.length; r++)
                        if ("function" == typeof e || e === !1)
                            "function" == typeof e && (i = arguments[1], n = arguments[2] || !1), this[r].removeEventListener(s[o], i, n);
                        else if (this[r].dom7LiveListeners)
                            for (var a = 0; a < this[r].dom7LiveListeners.length; a++)
                                this[r].dom7LiveListeners[a].listener === i && this[r].removeEventListener(s[o], this[r].dom7LiveListeners[a].liveListener, n);
                return this
            },
            once : function (t, e, i, n) {
                function s(r) {
                    i(r),
                        o.off(t, e, s, n)
                }
                var o = this;
                "function" == typeof e && (e = !1, i = arguments[1], n = arguments[2]),
                    o.on(t, e, s, n)
            },
            trigger : function (t, e) {
                for (var i = 0; i < this.length; i++) {
                    var n;
                    try {
                        n = new window.CustomEvent(t, {
                            detail : e,
                            bubbles : !0,
                            cancelable : !0
                        })
                    } catch (i) {
                        n = document.createEvent("Event"),
                            n.initEvent(t, !0, !0),
                            n.detail = e
                    }
                    this[i].dispatchEvent(n)
                }
                return this
            },
            transitionEnd : function (t) {
                function e(o) {
                    if (o.target === this)
                        for (t.call(this, o), i = 0; i < n.length; i++)
                            s.off(n[i], e)
                }
                var i,
                    n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                    s = this;
                if (t)
                    for (i = 0; i < n.length; i++)
                        s.on(n[i], e);
                return this
            },
            width : function () {
                return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
            },
            outerWidth : function (t) {
                return this.length > 0 ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            },
            height : function () {
                return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
            },
            outerHeight : function (t) {
                return this.length > 0 ? t ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
            },
            offset : function () {
                if (this.length > 0) {
                    var t = this[0],
                        e = t.getBoundingClientRect(),
                        i = document.body,
                        n = t.clientTop || i.clientTop || 0,
                        s = t.clientLeft || i.clientLeft || 0,
                        o = window.pageYOffset || t.scrollTop,
                        r = window.pageXOffset || t.scrollLeft;
                    return {
                        top : e.top + o - n,
                        left : e.left + r - s
                    }
                }
                return null
            },
            css : function (t, e) {
                var i;
                if (1 === arguments.length) {
                    if ("string" != typeof t) {
                        for (i = 0; i < this.length; i++)
                            for (var n in t)
                                this[i].style[n] = t[n];
                        return this
                    }
                    if (this[0])
                        return window.getComputedStyle(this[0], null).getPropertyValue(t)
                }
                if (2 === arguments.length && "string" == typeof t) {
                    for (i = 0; i < this.length; i++)
                        this[i].style[t] = e;
                    return this
                }
                return this
            },
            each : function (t) {
                for (var e = 0; e < this.length; e++)
                    t.call(this[e], e, this[e]);
                return this
            },
            html : function (t) {
                if ("undefined" == typeof t)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var e = 0; e < this.length; e++)
                    this[e].innerHTML = t;
                return this
            },
            text : function (t) {
                if ("undefined" == typeof t)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var e = 0; e < this.length; e++)
                    this[e].textContent = t;
                return this
            },
            is : function (i) {
                if (!this[0])
                    return !1;
                var n,
                    s;
                if ("string" == typeof i) {
                    var o = this[0];
                    if (o === document)
                        return i === document;
                    if (o === window)
                        return i === window;
                    if (o.matches)
                        return o.matches(i);
                    if (o.webkitMatchesSelector)
                        return o.webkitMatchesSelector(i);
                    if (o.mozMatchesSelector)
                        return o.mozMatchesSelector(i);
                    if (o.msMatchesSelector)
                        return o.msMatchesSelector(i);
                    for (n = e(i), s = 0; s < n.length; s++)
                        if (n[s] === this[0])
                            return !0;
                    return !1
                }
                if (i === document)
                    return this[0] === document;
                if (i === window)
                    return this[0] === window;
                if (i.nodeType || i instanceof t) {
                    for (n = i.nodeType ? [i] : i, s = 0; s < n.length; s++)
                        if (n[s] === this[0])
                            return !0;
                    return !1
                }
                return !1
            },
            index : function () {
                if (this[0]) {
                    for (var t = this[0], e = 0; null !== (t = t.previousSibling); )
                        1 === t.nodeType && e++;
                    return e
                }
            },
            eq : function (e) {
                if ("undefined" == typeof e)
                    return this;
                var i,
                    n = this.length;
                return e > n - 1 ? new t([]) : e < 0 ? (i = n + e, new t(i < 0 ? [] : [this[i]])) : new t([this[e]])
            },
            append : function (e) {
                var i,
                    n;
                for (i = 0; i < this.length; i++)
                    if ("string" == typeof e) {
                        var s = document.createElement("div");
                        for (s.innerHTML = e; s.firstChild; )
                            this[i].appendChild(s.firstChild)
                    } else if (e instanceof t)
                        for (n = 0; n < e.length; n++)
                            this[i].appendChild(e[n]);
                    else
                        this[i].appendChild(e);
                return this
            },
            prepend : function (e) {
                var i,
                    n;
                for (i = 0; i < this.length; i++)
                    if ("string" == typeof e) {
                        var s = document.createElement("div");
                        for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n--)
                            this[i].insertBefore(s.childNodes[n], this[i].childNodes[0])
                    } else if (e instanceof t)
                        for (n = 0; n < e.length; n++)
                            this[i].insertBefore(e[n], this[i].childNodes[0]);
                    else
                        this[i].insertBefore(e, this[i].childNodes[0]);
                return this
            },
            insertBefore : function (t) {
                for (var i = e(t), n = 0; n < this.length; n++)
                    if (1 === i.length)
                        i[0].parentNode.insertBefore(this[n], i[0]);
                    else if (i.length > 1)
                        for (var s = 0; s < i.length; s++)
                            i[s].parentNode.insertBefore(this[n].cloneNode(!0), i[s])
            },
            insertAfter : function (t) {
                for (var i = e(t), n = 0; n < this.length; n++)
                    if (1 === i.length)
                        i[0].parentNode.insertBefore(this[n], i[0].nextSibling);
                    else if (i.length > 1)
                        for (var s = 0; s < i.length; s++)
                            i[s].parentNode.insertBefore(this[n].cloneNode(!0), i[s].nextSibling)
            },
            next : function (i) {
                return new t(this.length > 0 ? i ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(i) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
            },
            nextAll : function (i) {
                var n = [],
                    s = this[0];
                if (!s)
                    return new t([]);
                for (; s.nextElementSibling; ) {
                    var o = s.nextElementSibling;
                    i ? e(o).is(i) && n.push(o) : n.push(o),
                        s = o
                }
                return new t(n)
            },
            prev : function (i) {
                return new t(this.length > 0 ? i ? this[0].previousElementSibling && e(this[0].previousElementSibling).is(i) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
            },
            prevAll : function (i) {
                var n = [],
                    s = this[0];
                if (!s)
                    return new t([]);
                for (; s.previousElementSibling; ) {
                    var o = s.previousElementSibling;
                    i ? e(o).is(i) && n.push(o) : n.push(o),
                        s = o
                }
                return new t(n)
            },
            parent : function (t) {
                for (var i = [], n = 0; n < this.length; n++)
                    t ? e(this[n].parentNode).is(t) && i.push(this[n].parentNode) : i.push(this[n].parentNode);
                return e(e.unique(i))
            },
            parents : function (t) {
                for (var i = [], n = 0; n < this.length; n++)
                    for (var s = this[n].parentNode; s; )
                        t ? e(s).is(t) && i.push(s) : i.push(s), s = s.parentNode;
                return e(e.unique(i))
            },
            find : function (e) {
                for (var i = [], n = 0; n < this.length; n++)
                    for (var s = this[n].querySelectorAll(e), o = 0; o < s.length; o++)
                        i.push(s[o]);
                return new t(i)
            },
            children : function (i) {
                for (var n = [], s = 0; s < this.length; s++)
                    for (var o = this[s].childNodes, r = 0; r < o.length; r++)
                        i ? 1 === o[r].nodeType && e(o[r]).is(i) && n.push(o[r]) : 1 === o[r].nodeType && n.push(o[r]);
                return new t(e.unique(n))
            },
            remove : function () {
                for (var t = 0; t < this.length; t++)
                    this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                return this
            },
            add : function () {
                var t,
                    i,
                    n = this;
                for (t = 0; t < arguments.length; t++) {
                    var s = e(arguments[t]);
                    for (i = 0; i < s.length; i++)
                        n[n.length] = s[i], n.length++
                }
                return n
            }
        },
            e.fn = t.prototype,
            e.unique = function (t) {
                for (var e = [], i = 0; i < t.length; i++)
                    e.indexOf(t[i]) === -1 && e.push(t[i]);
                return e
            },
            e
    }
    ()), s = ["jQuery", "Zepto", "Dom7"], o = 0; o < s.length; o++)window[s[o]] && t(window[s[o]]);
    var r;
    r = "undefined" == typeof n ? window.Dom7 || window.Zepto || window.jQuery : n,
    r && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function (t) {
        function e(o) {
            if (o.target === this)
                for (t.call(this, o), i = 0; i < n.length; i++)
                    s.off(n[i], e)
        }
        var i,
            n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            s = this;
        if (t)
            for (i = 0; i < n.length; i++)
                s.on(n[i], e);
        return this
    }), "transform" in r.fn || (r.fn.transform = function (t) {
        for (var e = 0; e < this.length; e++) {
            var i = this[e].style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
        }
        return this
    }), "transition" in r.fn || (r.fn.transition = function (t) {
        "string" != typeof t && (t += "ms");
        for (var e = 0; e < this.length; e++) {
            var i = this[e].style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
        }
        return this
    }), "outerWidth" in r.fn || (r.fn.outerWidth = function (t) {
        return this.length > 0 ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    })),
        window.Swiper = i
}
(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
        "use strict";
        return window.Swiper
    }), function (t) {
    var e = t(window);
    t.fn.visible = function (t, i, n) {
        if (!(this.length < 1)) {
            var s = this.length > 1 ? this.eq(0) : this,
                o = s.get(0),
                r = e.width(),
                a = e.height(),
                n = n ? n : "both",
                l = i !== !0 || o.offsetWidth * o.offsetHeight;
            if ("function" == typeof o.getBoundingClientRect) {
                var c = o.getBoundingClientRect(),
                    h = c.top >= 0 && c.top < a,
                    u = c.bottom > 0 && c.bottom <= a,
                    d = c.left >= 0 && c.left < r,
                    p = c.right > 0 && c.right <= r,
                    f = t ? h || u : h && u,
                    m = t ? d || p : d && p;
                if ("both" === n)
                    return l && f && m;
                if ("vertical" === n)
                    return l && f;
                if ("horizontal" === n)
                    return l && m
            } else {
                var g = e.scrollTop(),
                    _ = g + a,
                    v = e.scrollLeft(),
                    y = v + r,
                    b = s.offset(),
                    w = b.top,
                    x = w + s.height(),
                    S = b.left,
                    C = S + s.width(),
                    k = t === !0 ? x : w,
                    T = t === !0 ? w : x,
                    A = t === !0 ? C : S,
                    M = t === !0 ? S : C;
                if ("both" === n)
                    return !!l && T <= _ && k >= g && M <= y && A >= v;
                if ("vertical" === n)
                    return !!l && T <= _ && k >= g;
                if ("horizontal" === n)
                    return !!l && M <= y && A >= v
            }
        }
    }
}

this.JST = {}, function () {

    var t,
        e,
        i,
        n,
        s,
        o,
        r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        },
        a = function (t, e) {
            function i() {
                this.constructor = t
            }
            for (var n in e)
                l.call(e, n) && (t[n] = e[n]);
            return i.prototype = e.prototype,
                t.prototype = new i,
                t.__super__ = e.prototype,
                t
        },
        l = {}

            .hasOwnProperty;


        t = {
            SUBTITLE : _.template("<h2><%= draftjsToHtml.default(value) %></h2>"),
            TEXT : _.template("<p><%= draftjsToHtml.default(value) %></p>"),
            QUOTE : JST["blocks/quote"],
            WIDGET : _.template('<div class="life-editor-widget"><%= value %></div>'),
            IMAGE : JST["blocks/image"],
            IMAGE_PERSON : JST["blocks/image_person"],
            IMAGE_TITLEWIDE : JST["blocks/image_titlewide"],
            VIDEO : JST["blocks/video"],
            AUDIO : JST["blocks/audio"],
            STREAM : _.template('<div data-stream-id="<%= id %>" class="tiny-mce-plugin-life-stream"></div>'),
            GALLERY : _.template('<div data-gallery-id="<%= id %>" class="tiny-mce-plugin-galleryslider"></div>'),
            POLL : _.template('<div data-poll-id="<%= id %>" class="tiny-mce-plugin-poll"></div>'),
            CARD_TEXT : JST["blocks/card_text"],
            CARD_IMAGE : JST["blocks/card_image"],
            CARD_VIDEO : JST["blocks/card_video"],
            CARD_QUOTE : JST["blocks/card_quote"]
        },

        window.LifeRu = {
            Models : {},
            Collections : {},
            Routers : {},
            Views : {}

        },
    window.App || (window.App = {}),
        App.liveVideo = void 0,
        $(function () {
            var t;
            switch (window.App || (window.App = {}), App.breakpoint = new Backbone.Breakpoint, "undefined" != typeof Raven && null !== Raven && Raven.setTagsContext({
                breakpoint : App.breakpoint.value
            }), Backbone.listenTo(Backbone, "breakpoint.change:breakpoint", function (t) {
                return "undefined" != typeof Raven && null !== Raven ? Raven.setTagsContext({
                    breakpoint : t.newValue
                }) : void 0
            }), App.tracker = App.IS_PREVIEW ? new Backbone.NullTracker : new Backbone.Tracker, $(window).on("unload", App.tracker.leave), App.NAME) {
                case "main":
                    App.tracker.view("root");
                    break;
                case "my_life":
                    App.tracker.view("my");
                    break;
                case "tag":
                    App.tracker.view("tag")
            }
            return App.user = new LifeRu.Models.User,
            App.IS_PREVIEW && (t = location.pathname.split("token/"), App.TOKEN = t.length > 1 ? t.pop() : ""),
                $(".login-forms").each(function () {
                    return window.Passport = new LifeRu.Views.LoginForms({
                        el : $(this)
                    }),
                        !1
                }),
                $(".title-bar").each(function () {
                    return App.titleBar = new LifeRu.Views.TitleBar({
                        el : $(this)
                    }),
                        !1
                }),
                $(".navbar").each(function () {
                    return new LifeRu.Views.Navbar({
                        el : $(this)
                    })
                }),
                $(".subnavbar").each(function () {
                    return new LifeRu.Views.Subnavbar({
                        el : $(this)
                    })
                }),
                $(".news-global__item").each(function () {
                    return new LifeRu.Views.NewsGlobalItem({
                        el : $(this)
                    })
                }),
                $(".news-global-broadcast__item").each(function () {
                    return new LifeRu.Views.NewsGlobalBroadcastItem({
                        el : $(this)
                    })
                }),
                $(".news-top__item").each(function () {
                    return new LifeRu.Views.NewsTopItem({
                        el : $(this)
                    })
                }),
                $(".streams-main").each(function () {
                    return new LifeRu.Views.StreamsMain({
                        el : $(this)
                    })
                }),
                $(".news-feed").each(function () {
                    return new LifeRu.Views.NewsFeed({
                        el : $(this)
                    })
                }),
                $(".longread-feed").each(function () {
                    return new LifeRu.Views.LongreadFeed({
                        el : $(this)
                    })
                }),
                $(".streams-feed").each(function () {
                    return new LifeRu.Views.StreamsFeed({
                        el : $(this)
                    })
                }),
                $(".stream-widget").each(function () {
                    return new LifeRu.Views.StreamWidget({
                        el : $(this)
                    })
                }),
                $(".nine-may").each(function () {
                    return new LifeRu.Views.NineMay({
                        el : $(this)
                    })
                }),
                $(".post-page").each(function () {
                    return new LifeRu.Views.PostPage({
                        el : $(this)
                    })
                }),
                $(".longread").each(function () {
                    return new LifeRu.Views.Longread({
                        el : $(this)
                    })
                }),
                $(".longread-wide").each(function () {
                    return new LifeRu.Views.LongreadWide({
                        el : $(this)
                    })
                }),
                $(".gallery-page").each(function () {
                    return new LifeRu.Views.GalleryPage({
                        el : $(this)
                    })
                }),
                $(".text-broadcast").each(function () {
                    return new LifeRu.Views.Broadcast({
                        el : $(this)
                    })
                }),
                $(".left-menu").each(function () {
                    return new LifeRu.Views.LeftMenu({
                        el : $(this)
                    })
                }),
                $(".navbar-wide-transparent").each(function () {
                    return new LifeRu.Views.NavbarWideTransparent({
                        el : $(this)
                    })
                }),
                $(".user-profile").each(function () {
                    return new LifeRu.Views.UserProfile({
                        el : $(this)
                    })
                }),
                $(".search-feed").each(function () {
                    return new LifeRu.Views.SearchFeed({
                        el : $(this)
                    })
                }),
                $(".form-static").each(function () {
                    return new LifeRu.Views.FormStatic({
                        el : $(this)
                    })
                }),
                $(".comments-page").each(function () {
                    return new LifeRu.Views.CommentsPage({
                        el : $(this)
                    })
                }),
                $(".footer").each(function () {
                    return new LifeRu.Views.Footer({
                        el : $(this)
                    })
                }),
                $(".orphus").each(function () {
                    return new LifeRu.Views.Orphus({
                        el : $(this)
                    })
                }),
                $(".orphus-notification").each(function () {
                    return App.orphusNotification = new LifeRu.Views.OrphusNotification({
                        el : $(this)
                    }),
                        !1
                }),
                $(".adblock-modal").each(function () {
                    return new LifeRu.Views.AdblockModal({
                        el : $(this)
                    })
                }),
                $(".adblock").each(function () {
                    return new LifeRu.Views.Adblock({
                        el : $(this)
                    })
                }),
                $(".region-news").each(function () {
                    return new LifeRu.Views.RegionNews({
                        el : $(this)
                    })
                }),
                $(".notification-message-list-container").each(function () {
                    return new LifeRu.Views.NotificationMessageList({
                        el : $(this)
                    })
                }),
            $(".nagscreen").length > 0 && new LifeRu.Views.Nagscreen,
                $(".obama").each(function () {
                    return new LifeRu.Views.Obama({
                        el : $(this)
                    })
                }),
                $(".grom-page").each(function () {
                    return new LifeRu.Views.Grom({
                        el : $(this)
                    })
                }),
                $(".games-page").each(function () {
                    return new LifeRu.Views.GamesPage({
                        el : $(this)
                    })
                }),
                $(".buzova-share").each(function (t, e) {
                    return new LifeRu.Views.Sharing({
                        el : e,
                        model : new LifeRu.Models.Sharing
                    })
                })
        }),
        Backbone.Breakpoint = function () {
            function t() {
                this.refresh = r(this.refresh, this),
                    _.extend(this, Backbone.Events),
                    this.value = this.getBreakpoint(),
                    this.grid = this.getGridSize(this.value),
                    $(window).on("resize", this.refresh)
            }
            return t.prototype.value = void 0,
                t.prototype.grid = void 0,
                t.prototype.refresh = function () {
                    var t,
                        e,
                        i,
                        n;
                    if (e = this.getBreakpoint(), n = this.value, e !== n && (this.value = e, Backbone.trigger("breakpoint.change:breakpoint", {
                            oldValue : n,
                            newValue : e
                        }), t = this.getGridSize(e), i = this.grid, t !== i))
                        return this.grid = t, Backbone.trigger("breakpoint.change:grid", {
                            oldGrid : i,
                            newGrid : t
                        })
                },
                t.prototype.getBreakpoint = function () {
                    return getComputedStyle(document.querySelector("body"), ":before").getPropertyValue("content").replace(/\"/g, "")
                },
                t.prototype.getGridSize = function (t) {
                    return "sm" === t || "xs" === t ? 1 : "md" === t ? 3 : "xxlg" === t || "xlg" === t || "lg" === t ? 4 : void 0
                },
                t
        }
        (),
        Backbone.Tracker = function () {
            function t() {
                this.leave = r(this.leave, this),
                    this.uid = Cookies.get("_la"),
                    this.app = App.HOST || location.host,
                    $(window).on("unload.tracker", this.leave)
            }
            return t.prototype.HOST = "https://track.life.ru",
                t.prototype.view = function (t, e, i) {
                    var n;
                    if (this.entity = t, this.id = null != e ? e : 0, this.publishedAt = i, this.uid)
                        return this.startTime = (new Date).getTime(), n = this.HOST + "/track/view/" + this.entity + "/" + this.id + ".gif?app=" + this.app + "&uid=" + this.uid, null != this.publishedAt && (n = n + "&published_at=" + this.publishedAt), (new Image).src = n
                },
                t.prototype.leave = function () {
                    var t;
                    if (this.uid && this.id && this.entity)
                        return this.finishTime = (new Date).getTime(), t = this.finishTime - this.startTime, (new Image).src = this.HOST + "/track/leave/" + this.entity + "/" + this.id + ".gif?app=" + this.app + "&time_spent=" + t + "&uid=" + this.uid + "&published_at=" + this.publishedAt, delete this.startTime, delete this.finishTime, delete this.entity, delete this.id, delete this.publishedAt
                },
                t.prototype.share = function (t, e, i, n) {
                    if (this.uid)
                        return (new Image).src = this.HOST + "/track/share/" + t + "/" + e + ".gif?app=" + this.app + "&shared_to=" + i + "&uid=" + this.uid + "&published_at=" + n
                },
                t.prototype.comment = function (t, e, i) {
                    if (this.uid)
                        return (new Image).src = this.HOST + "/track/comment/" + t + "/" + e + ".gif?app=" + this.app + "&uid=" + this.uid + "&published_at=" + i
                },
                t
        }
        (),

        Backbone.WSCommunicator = function () {
            function t(t) {
                this.server = t,
                    this.sendMessage = r(this.sendMessage, this),
                    this.handleMessage = r(this.handleMessage, this),
                    _.extend(this, Backbone.Events),
                    this.webSocket = new ReconnectingWebSocket(this.server),
                    this.webSocket.onmessage = this.handleMessage,
                    this.webSocket.onopen = function (t) {
                        return function () {
                            return t.trigger("open")
                        }
                    }
                    (this),
                    this.webSocket.onclose = function (t) {
                        return function () {
                            return t.trigger("close")
                        }
                    }
                    (this)
            }
            return t.prototype.handleMessage = function (t) {
                var e,
                    i,
                    n,
                    s,
                    o;
                try {
                    s = JSON.parse(t.data)
                } catch (t) {
                    n = t,
                        console.log(n)
                }
                if (null != s) {
                    o = [];
                    for (e in s)
                        i = s[e], o.push(this.trigger(e, i));
                    return o
                }
            },
                t.prototype.sendMessage = function (t, e) {
                    var i;
                    return i = JSON.stringify({
                        commandName : e
                    }),
                        this.webSocket.send(i)
                },
                t.prototype.close = function () {
                    return this.webSocket.close()
                },
                t
        }
        (),



    LifeRu.Models.User = function (t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }
        return a(e, t),
            e.prototype.url = "/profile",
            e.prototype.isSignIn = !1,
            e.prototype.initialize = function () {
                return this.listenTo(this, "sync", this.handleSync)
            },
            e.prototype.handleSync = function () {
                return this.isSignIn = !0,
                    this._sendToOneSignal(),
                    this._sendToRaven()
            },
            e.prototype.load = function () {
                return null == Cookies.get("signed_in") ? $.Deferred().reject() : this.isSignIn ? $.Deferred().resolve(this.toJSON()) : this.fetch()
            },
            e.prototype.handleLogout = function () {
                return this._removeFromOneSignal(),
                    this._removeFromRaven()
            },
            e.prototype._sendToOneSignal = function () {
                return window.OneSignal || (window.OneSignal = []),
                    OneSignal.push(["sendTags", {
                        user_id : this.id
                    }
                    ])
            },
            e.prototype._removeFromOneSignal = function () {
                return window.OneSignal || (window.OneSignal = []),
                    OneSignal.push(function () {
                        return OneSignal.deleteTag("user_id")
                    })
            },
            e.prototype._sendToRaven = function () {
                return "undefined" != typeof Raven && null !== Raven ? Raven.setUserContext({
                    id : this.id,
                    email : this.get("email"),
                    username : this.get("name")
                }) : void 0
            },
            e.prototype._removeFromRaven = function () {
                return "undefined" != typeof Raven && null !== Raven ? Raven.setUserContext() : void 0
            },
            e
    }
    (Backbone.Model),

    LifeRu.Views.StreamsMain = function (t) {
        function e() {
            return this.initSwiper = r(this.initSwiper, this),
                e.__super__.constructor.apply(this, arguments)
        }
        return a(e, t),
            e.prototype.LOADING_CLASS = "streams-main_loading",
            e.prototype.streamsViews = [],
            e.prototype.initialize = function () {
                return this.initSwiper(),
                    this.initStreamsMainItems(),
                    this.renderPlayerInView(this.swiper.activeIndex)
            },
            e.prototype.initSwiper = function () {
                return this.swiper = new Swiper(this.$(".swiper-container"), {
                    nextButton : this.$(".swiper-button-next"),
                    prevButton : this.$(".swiper-button-prev"),
                    slidesPerView : "auto",
                    centeredSlides : !0,
                    spaceBetween : -100,
                    slideToClickedSlide : !0,
                    loop : !0,
                    onTransitionStart : function (t) {
                        return function (e) {
                            return t.streamsViews.filter(function (t) {
                                return t.hasPlayer
                            }).forEach(function (t) {
                                return t.pause()
                            }),
                                t.renderPlayerInView(e.activeIndex)
                        }
                    }
                    (this),
                    onInit : function (t) {
                        return function () {
                            return t.showSlider()
                        }
                    }
                    (this),
                    onSlideNextStart : function (t) {
                        return function () {
                            return t.sendYaEvent("slide next")
                        }
                    }
                    (this),
                    onSlidePrevStart : function (t) {
                        return function () {
                            return t.sendYaEvent("slide prev")
                        }
                    }
                    (this)
                })
            },
            e.prototype.renderPlayerInView = function (t) {
                var e;
                if (null != t && "xs" === App.breakpoint.value)
                    return e = this.streamsViews[t], e && !e.hasPlayer ? e.renderPlayer() : void 0
            },
            e.prototype.showSlider = function () {
                return this.$el.removeClass(this.LOADING_CLASS)
            },
            e.prototype.sendYaEvent = function (t) {
                var e,
                    i,
                    n,
                    s;
                if (this.streamsViews.length)
                    return n = null != (i = this.streamsViews[this.swiper.previousIndex]) ? i.url : void 0, s = {
                        "Стримы" : (e = {}, e["" + t] = {
                            "Главная" : n
                        }, e)
                    },
                        "undefined" != typeof yaCounter34662240 && null !== yaCounter34662240 ? yaCounter34662240.reachGoal("video_interactions", s) : void 0
            },
            e
    }
    (Backbone.View)

}
    .call(this);
