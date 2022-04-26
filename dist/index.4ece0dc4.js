function _defineProperties(n, t) {
    for(var e = 0; e < t.length; e++){
        var i = t[e];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i);
    }
}
function _createClass(n, t, e) {
    return t && _defineProperties(n.prototype, t), e && _defineProperties(n, e), Object.defineProperty(n, "prototype", {
        writable: !1
    }), n;
}
!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).Splide = t();
}(this, function() {
    "use strict";
    var d1 = "(prefers-reduced-motion: reduce)", R = 4, W = 5, n1 = {
        CREATED: 1,
        MOUNTED: 2,
        IDLE: 3,
        MOVING: R,
        SCROLLING: W,
        DRAGGING: 6,
        DESTROYED: 7
    };
    function x1(n) {
        n.length = 0;
    }
    function _1(n, t, e) {
        return Array.prototype.slice.call(n, t, e);
    }
    function D1(n) {
        return n.bind.apply(n, [
            null
        ].concat(_1(arguments, 1)));
    }
    function G() {}
    var v1 = setTimeout;
    function p1(n) {
        return requestAnimationFrame(n);
    }
    function t1(n, t) {
        return typeof t === n;
    }
    function X(n) {
        return !r1(n) && t1("object", n);
    }
    var o1 = Array.isArray, w1 = D1(t1, "function"), M1 = D1(t1, "string"), z1 = D1(t1, "undefined");
    function r1(n) {
        return null === n;
    }
    function g1(n) {
        return n instanceof HTMLElement;
    }
    function m1(n) {
        return o1(n) ? n : [
            n
        ];
    }
    function y1(n, t) {
        m1(n).forEach(t);
    }
    function b1(n, t) {
        return -1 < n.indexOf(t);
    }
    function E1(n, t) {
        return n.push.apply(n, m1(t)), n;
    }
    function L1(t, n2, e) {
        t && y1(n2, function(n) {
            n && t.classList[e ? "add" : "remove"](n);
        });
    }
    function P1(n, t) {
        L1(n, M1(t) ? t.split(" ") : t, !0);
    }
    function C1(n, t) {
        y1(t, n.appendChild.bind(n));
    }
    function k1(n3, e) {
        y1(n3, function(n) {
            var t = (e || n).parentNode;
            t && t.insertBefore(n, e);
        });
    }
    function B(n, t) {
        return g1(n) && (n.msMatchesSelector || n.matches).call(n, t);
    }
    function S1(n4, t) {
        n4 = n4 ? _1(n4.children) : [];
        return t ? n4.filter(function(n) {
            return B(n, t);
        }) : n4;
    }
    function A1(n, t) {
        return t ? S1(n, t)[0] : n.firstElementChild;
    }
    var h1 = Object.keys;
    function N1(n, t, e) {
        if (n) for(var i = h1(n), i = e ? i.reverse() : i, o = 0; o < i.length; o++){
            var r = i[o];
            if ("__proto__" !== r && !1 === t(n[r], r)) break;
        }
        return n;
    }
    function T1(i) {
        return _1(arguments, 1).forEach(function(e) {
            N1(e, function(n, t) {
                i[t] = e[t];
            });
        }), i;
    }
    function O1(e) {
        return _1(arguments, 1).forEach(function(n5) {
            N1(n5, function(n, t) {
                o1(n) ? e[t] = n.slice() : X(n) ? e[t] = O1({}, X(e[t]) ? e[t] : {}, n) : e[t] = n;
            });
        }), e;
    }
    function I1(t, n6) {
        m1(n6 || h1(t)).forEach(function(n) {
            delete t[n];
        });
    }
    function F1(n7, e) {
        y1(n7, function(t) {
            y1(e, function(n) {
                t && t.removeAttribute(n);
            });
        });
    }
    function j1(e, t2, i) {
        X(t2) ? N1(t2, function(n, t) {
            j1(e, t, n);
        }) : y1(e, function(n) {
            r1(i) || "" === i ? F1(n, t2) : n.setAttribute(t2, String(i));
        });
    }
    function H(n, t, e) {
        n = document.createElement(n);
        return t && (M1(t) ? P1 : j1)(n, t), e && C1(e, n), n;
    }
    function Y(n, t, e) {
        if (z1(e)) return getComputedStyle(n)[t];
        r1(e) || (n.style[t] = "" + e);
    }
    function q(n, t) {
        Y(n, "display", t);
    }
    function U(n) {
        n.setActive && n.setActive() || n.focus({
            preventScroll: !0
        });
    }
    function K(n, t) {
        return n.getAttribute(t);
    }
    function J(n, t) {
        return n && n.classList.contains(t);
    }
    function Q(n) {
        return n.getBoundingClientRect();
    }
    function V(n8) {
        y1(n8, function(n) {
            n && n.parentNode && n.parentNode.removeChild(n);
        });
    }
    function Z(n) {
        return A1((new DOMParser).parseFromString(n, "text/html").body);
    }
    function $(n, t) {
        n.preventDefault(), t && (n.stopPropagation(), n.stopImmediatePropagation());
    }
    function nn(n, t) {
        return n && n.querySelector(t);
    }
    function tn(n, t) {
        return t ? _1(n.querySelectorAll(t)) : [];
    }
    function en(n, t) {
        L1(n, t, !1);
    }
    function on(n) {
        return n.timeStamp;
    }
    function rn(n) {
        return M1(n) ? n : n ? n + "px" : "";
    }
    var un = "splide", i1 = "data-" + un;
    function sn(n, t) {
        if (!n) throw new Error("[" + un + "] " + (t || ""));
    }
    var cn = Math.min, an = Math.max, fn = Math.floor, ln = Math.ceil, dn = Math.abs;
    function pn(n, t, e) {
        return dn(n - t) < e;
    }
    function hn(n, t, e, i) {
        var o = cn(t, e), e = an(t, e);
        return i ? o < n && n < e : o <= n && n <= e;
    }
    function vn(n, t, e) {
        var i = cn(t, e), e = an(t, e);
        return cn(an(i, n), e);
    }
    function gn(n) {
        return (0 < n) - (n < 0);
    }
    function mn(t, n9) {
        return y1(n9, function(n) {
            t = t.replace("%s", "" + n);
        }), t;
    }
    function yn(n) {
        return n < 10 ? "0" + n : "" + n;
    }
    var bn = {};
    function wn() {
        var s = [];
        function e2(n10, e, i) {
            y1(n10, function(t) {
                t && y1(e, function(n11) {
                    n11.split(" ").forEach(function(n) {
                        n = n.split(".");
                        i(t, n[0], n[1]);
                    });
                });
            });
        }
        return {
            bind: function(n12, t3, r, u) {
                e2(n12, t3, function(n, t, e) {
                    var i = "addEventListener" in n, o = i ? n.removeEventListener.bind(n, t, r, u) : n.removeListener.bind(n, r);
                    i ? n.addEventListener(t, r, u) : n.addListener(r), s.push([
                        n,
                        t,
                        e,
                        r,
                        o
                    ]);
                });
            },
            unbind: function(n13, t4, o) {
                e2(n13, t4, function(t, e, i) {
                    s = s.filter(function(n) {
                        return !!(n[0] !== t || n[1] !== e || n[2] !== i || o && n[3] !== o) || (n[4](), !1);
                    });
                });
            },
            dispatch: function(n, t, e) {
                var i;
                return "function" == typeof CustomEvent ? i = new CustomEvent(t, {
                    bubbles: !0,
                    detail: e
                }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !1, e), n.dispatchEvent(i), i;
            },
            destroy: function() {
                s.forEach(function(n) {
                    n[4]();
                }), x1(s);
            }
        };
    }
    var En = "mounted", Sn = "move", xn = "moved", _n = "shifted", Pn = "click", Cn = "active", kn = "inactive", Ln = "visible", An = "hidden", Dn = "slide:keydown", Mn = "refresh", zn = "updated", Nn = "resize", Tn = "resized", On = "scroll", In = "scrolled", u1 = "destroy", Fn = "navigation:mounted", jn = "autoplay:play", Rn = "autoplay:pause", Wn = "lazyload:loaded";
    function Gn(n14) {
        var e = n14 ? n14.event.bus : document.createDocumentFragment(), i = wn();
        return n14 && n14.event.on(u1, i.destroy), T1(i, {
            bus: e,
            on: function(n15, t) {
                i.bind(e, m1(n15).join(" "), function(n) {
                    t.apply(t, o1(n.detail) ? n.detail : []);
                });
            },
            off: D1(i.unbind, e),
            emit: function(n) {
                i.dispatch(e, n, _1(arguments, 1));
            }
        });
    }
    function Xn(t, n16, e, i) {
        var o, r, u = Date.now, s = 0, c = !0, a = 0;
        function f() {
            if (!c) {
                if (s = t ? cn((u() - o) / t, 1) : 1, e && e(s), 1 <= s && (n16(), o = u(), i && ++a >= i)) return l();
                p1(f);
            }
        }
        function l() {
            c = !0;
        }
        function d() {
            r && cancelAnimationFrame(r), c = (r = s = 0, true);
        }
        return {
            start: function(n) {
                n || d(), o = u() - (n ? s * t : 0), c = !1, p1(f);
            },
            rewind: function() {
                o = u(), s = 0, e && e(s);
            },
            pause: l,
            cancel: d,
            set: function(n) {
                t = n;
            },
            isPaused: function() {
                return c;
            }
        };
    }
    function s1(n17) {
        var t = n17;
        return {
            set: function(n) {
                t = n;
            },
            is: function(n) {
                return b1(m1(n), t);
            }
        };
    }
    var e1 = "Arrow", Bn = e1 + "Left", Hn = e1 + "Right", c1 = e1 + "Up", a1 = e1 + "Down", Yn = "ttb", f1 = {
        width: [
            "height"
        ],
        left: [
            "top",
            "right"
        ],
        right: [
            "bottom",
            "left"
        ],
        x: [
            "y"
        ],
        X: [
            "Y"
        ],
        Y: [
            "X"
        ],
        ArrowLeft: [
            c1,
            Hn
        ],
        ArrowRight: [
            a1,
            Bn
        ]
    };
    var qn = "role", Un = "tabindex", e1 = "aria-", Kn = e1 + "controls", Jn = e1 + "current", Qn = e1 + "selected", Vn = e1 + "label", Zn = e1 + "labelledby", $n = e1 + "hidden", nt = e1 + "orientation", tt = e1 + "roledescription", l1 = e1 + "live", et = e1 + "relevant", it = [
        qn,
        Un,
        "disabled",
        Kn,
        Jn,
        Vn,
        Zn,
        $n,
        nt,
        tt
    ], ot = un, rt = un + "__track", ut = un + "__list", st = un + "__slide", ct = st + "--clone", at = st + "__container", ft = un + "__arrows", lt = un + "__arrow", dt = lt + "--prev", pt = lt + "--next", ht = un + "__pagination", vt = ht + "__page", gt = un + "__progress" + "__bar", mt = un + "__toggle", yt = un + "__sr", bt = "is-active", wt = "is-prev", Et = "is-next", St = "is-visible", xt = "is-loading", _t = "is-focus-in", Pt = [
        bt,
        St,
        wt,
        Et,
        xt,
        _t
    ];
    var Ct = "touchstart mousedown", kt = "touchmove mousemove", Lt = "touchend touchcancel mouseup";
    var At = "slide", Dt = "loop", Mt = "fade";
    function zt(o, e3, t5, r) {
        var i2, n18 = Gn(o), u = n18.on, s = n18.emit, c = n18.bind, a = o.Components, f = o.root, l = o.options, d = l.isNavigation, p = l.updateOnMove, h = l.i18n, v = l.pagination, g = l.slideFocus, m = a.Direction.resolve, y = K(r, "style"), b = K(r, Vn), w = -1 < t5, E = A1(r, "." + at), S = tn(r, l.focusableNodes || "");
        function x() {
            var n19 = o.splides.map(function(n) {
                n = n.splide.Components.Slides.getAt(e3);
                return n ? n.slide.id : "";
            }).join(" ");
            j1(r, Vn, mn(h.slideX, (w ? t5 : e3) + 1)), j1(r, Kn, n19), j1(r, qn, g ? "button" : ""), g && F1(r, tt);
        }
        function _() {
            i2 || P();
        }
        function P() {
            var n20, t6;
            i2 || (n20 = o.index, (t6 = C()) !== J(r, bt) && (L1(r, bt, t6), j1(r, Jn, d && t6 || ""), s(t6 ? Cn : kn, k)), function() {
                var n21 = function() {
                    if (o.is(Mt)) return C();
                    var n = Q(a.Elements.track), t = Q(r), e = m("left"), i = m("right");
                    return fn(n[e]) <= ln(t[e]) && fn(t[i]) <= ln(n[i]);
                }(), t7 = !n21 && (!C() || w);
                o.state.is([
                    R,
                    W
                ]) || j1(r, $n, t7 || "");
                j1(S, Un, t7 ? -1 : ""), g && j1(r, Un, t7 ? -1 : 0);
                n21 !== J(r, St) && (L1(r, St, n21), s(n21 ? Ln : An, k));
                n21 || document.activeElement !== r || (n21 = a.Slides.getAt(o.index)) && U(n21.slide);
            }(), L1(r, wt, e3 === n20 - 1), L1(r, Et, e3 === n20 + 1));
        }
        function C() {
            var n = o.index;
            return n === e3 || l.cloneStatus && n === t5;
        }
        var k = {
            index: e3,
            slideIndex: t5,
            slide: r,
            container: E,
            isClone: w,
            mount: function() {
                w || (r.id = f.id + "-slide" + yn(e3 + 1), j1(r, qn, v ? "tabpanel" : "group"), j1(r, tt, h.slide), j1(r, Vn, b || mn(h.slideLabel, [
                    e3 + 1,
                    o.length
                ]))), c(r, "click", D1(s, Pn, k)), c(r, "keydown", D1(s, Dn, k)), u([
                    xn,
                    _n,
                    In
                ], P), u(Fn, x), p && u(Sn, _);
            },
            destroy: function() {
                i2 = !0, n18.destroy(), en(r, Pt), F1(r, it), j1(r, "style", y), j1(r, Vn, b || "");
            },
            update: P,
            style: function(n, t, e) {
                Y(e && E || r, n, t);
            },
            isWithin: function(n, t) {
                return n = dn(n - e3), (n = !w && (l.rewind || o.is(Dt)) ? cn(n, o.length - n) : n) <= t;
            }
        };
        return k;
    }
    var Nt = i1 + "-interval";
    var Tt = {
        passive: !1,
        capture: !0
    };
    var Ot = {
        Spacebar: " ",
        Right: Hn,
        Left: Bn,
        Up: c1,
        Down: a1
    };
    function It(n) {
        return n = M1(n) ? n : n.key, Ot[n] || n;
    }
    var Ft = "keydown";
    var jt = i1 + "-lazy", Rt = jt + "-srcset", Wt = "[" + jt + "], [" + Rt + "]";
    var Gt = [
        " ",
        "Enter"
    ];
    var Xt = Object.freeze({
        __proto__: null,
        Media: function(i, n22, o) {
            var r = i.state, t8 = o.breakpoints || {}, u = o.reducedMotion || {}, e4 = wn(), s = [];
            function c(n) {
                n && e4.destroy();
            }
            function a(n, t) {
                t = matchMedia(t);
                e4.bind(t, "change", f), s.push([
                    n,
                    t
                ]);
            }
            function f() {
                var n23 = r.is(7), t9 = o.direction, e = s.reduce(function(n, t) {
                    return O1(n, t[1].matches ? t[0] : {});
                }, {});
                I1(o), l(e), o.destroy ? i.destroy("completely" === o.destroy) : n23 ? (c(!0), i.mount()) : t9 !== o.direction && i.refresh();
            }
            function l(n, t) {
                O1(o, n), t && O1(Object.getPrototypeOf(o), n), r.is(1) || i.emit(zn, o);
            }
            return {
                setup: function() {
                    var e = "min" === o.mediaQuery;
                    h1(t8).sort(function(n, t) {
                        return e ? +n - +t : +t - +n;
                    }).forEach(function(n) {
                        a(t8[n], "(" + (e ? "min" : "max") + "-width:" + n + "px)");
                    }), a(u, d1), f();
                },
                destroy: c,
                reduce: function(n) {
                    matchMedia(d1).matches && (n ? O1(o, u) : I1(o, h1(u)));
                },
                set: l
            };
        },
        Direction: function(n24, t10, o) {
            return {
                resolve: function(n25, t11, e) {
                    var i = "rtl" !== (e = e || o.direction) || t11 ? e === Yn ? 0 : -1 : 1;
                    return f1[n25] && f1[n25][i] || n25.replace(/width|left|right/i, function(n, t) {
                        n = f1[n.toLowerCase()][i] || n;
                        return 0 < t ? n.charAt(0).toUpperCase() + n.slice(1) : n;
                    });
                },
                orient: function(n) {
                    return n * ("rtl" === o.direction ? 1 : -1);
                }
            };
        },
        Elements: function(n26, t12, e5) {
            var i, o, r, u = Gn(n26), s = u.on, c = u.bind, a = n26.root, f = e5.i18n, l = {}, d = [], p = [], h = [];
            function v() {
                i = y("." + rt), o = A1(i, "." + ut), sn(i && o, "A track/list element is missing."), E1(d, S1(o, "." + st + ":not(." + ct + ")")), N1({
                    arrows: ft,
                    pagination: ht,
                    prev: dt,
                    next: pt,
                    bar: gt,
                    toggle: mt
                }, function(n, t) {
                    l[t] = y("." + n);
                }), T1(l, {
                    root: a,
                    track: i,
                    list: o,
                    slides: d
                }), function() {
                    var n27 = a.id || function(n) {
                        return "" + n + yn(bn[n] = (bn[n] || 0) + 1);
                    }(un), t = e5.role;
                    a.id = n27, i.id = i.id || n27 + "-track", o.id = o.id || n27 + "-list", !K(a, qn) && "SECTION" !== a.tagName && t && j1(a, qn, t);
                    j1(a, tt, f.carousel), j1(o, qn, "presentation");
                }(), m();
            }
            function g(n) {
                var t = it.concat("style");
                x1(d), en(a, p), en(i, h), F1([
                    i,
                    o
                ], t), F1(a, n ? t : [
                    "style",
                    tt
                ]);
            }
            function m() {
                en(a, p), en(i, h), p = b(ot), h = b(rt), P1(a, p), P1(i, h), j1(a, Vn, e5.label), j1(a, Zn, e5.labelledby);
            }
            function y(n28) {
                n28 = nn(a, n28);
                return n28 && function(n, t) {
                    if (w1(n.closest)) return n.closest(t);
                    for(var e = n; e && 1 === e.nodeType && !B(e, t);)e = e.parentElement;
                    return e;
                }(n28, "." + ot) === a ? n28 : void 0;
            }
            function b(n) {
                return [
                    n + "--" + e5.type,
                    n + "--" + e5.direction,
                    e5.drag && n + "--draggable",
                    e5.isNavigation && n + "--nav",
                    n === ot && bt
                ];
            }
            return T1(l, {
                setup: v,
                mount: function() {
                    s(Mn, g), s(Mn, v), s(zn, m), c(document, Ct + " keydown", function(n) {
                        r = "keydown" === n.type;
                    }, {
                        capture: !0
                    }), c(a, "focusin", function() {
                        L1(a, _t, !!r);
                    });
                },
                destroy: g
            });
        },
        Slides: function(i3, o2, r) {
            var n29 = Gn(i3), t13 = n29.on, u = n29.emit, s = n29.bind, c = (n29 = o2.Elements).slides, a = n29.list, f = [];
            function e6() {
                c.forEach(function(n, t) {
                    d(n, t, -1);
                });
            }
            function l() {
                h(function(n) {
                    n.destroy();
                }), x1(f);
            }
            function d(n, t, e) {
                n = zt(i3, t, e, n);
                n.mount(), f.push(n);
            }
            function p(n30) {
                return n30 ? v(function(n) {
                    return !n.isClone;
                }) : f;
            }
            function h(n, t) {
                p(t).forEach(n);
            }
            function v(t) {
                return f.filter(w1(t) ? t : function(n) {
                    return M1(t) ? B(n.slide, t) : b1(m1(t), n.index);
                });
            }
            return {
                mount: function() {
                    e6(), t13(Mn, l), t13(Mn, e6), t13([
                        En,
                        Mn
                    ], function() {
                        f.sort(function(n, t) {
                            return n.index - t.index;
                        });
                    });
                },
                destroy: l,
                update: function() {
                    h(function(n) {
                        n.update();
                    });
                },
                register: d,
                get: p,
                getIn: function(n31) {
                    var t = o2.Controller, e = t.toIndex(n31), i = t.hasFocus() ? 1 : r.perPage;
                    return v(function(n) {
                        return hn(n.index, e, e + i - 1);
                    });
                },
                getAt: function(n) {
                    return v(n)[0];
                },
                add: function(n32, o) {
                    y1(n32, function(n33) {
                        var t, e, i;
                        g1(n33 = M1(n33) ? Z(n33) : n33) && ((t = c[o]) ? k1(n33, t) : C1(a, n33), P1(n33, r.classes.slide), e = D1(u, Nn), n33 = tn(n33, "img"), (i = n33.length) ? n33.forEach(function(n) {
                            s(n, "load error", function() {
                                --i || e();
                            });
                        }) : e());
                    }), u(Mn);
                },
                remove: function(n34) {
                    V(v(n34).map(function(n) {
                        return n.slide;
                    })), u(Mn);
                },
                forEach: h,
                filter: v,
                style: function(t, e, i) {
                    h(function(n) {
                        n.style(t, e, i);
                    });
                },
                getLength: function(n) {
                    return (n ? c : f).length;
                },
                isEnough: function() {
                    return f.length > r.perPage;
                }
            };
        },
        Layout: function(n35, t14, e7) {
            var i, o, r = (c = Gn(n35)).on, u = c.bind, s = c.emit, c = t14.Slides, a = t14.Direction.resolve, f = (t14 = t14.Elements).root, l = t14.track, d = t14.list, p = c.getAt, h = c.style;
            function v() {
                o = null, i = e7.direction === Yn, Y(f, "maxWidth", rn(e7.width)), Y(l, a("paddingLeft"), m(!1)), Y(l, a("paddingRight"), m(!0)), g();
            }
            function g() {
                var n36 = Q(f);
                o && o.width === n36.width && o.height === n36.height || (Y(l, "height", function() {
                    var n = "";
                    i && (sn(n = y(), "height or heightRatio is missing."), n = "calc(" + n + " - " + m(!1) + " - " + m(!0) + ")");
                    return n;
                }()), h(a("marginRight"), rn(e7.gap)), h("width", e7.autoWidth ? null : rn(e7.fixedWidth) || (i ? "" : b())), h("height", rn(e7.fixedHeight) || (i ? e7.autoHeight ? null : b() : y()), !0), o = n36, s(Tn));
            }
            function m(n) {
                var t = e7.padding, n = a(n ? "right" : "left");
                return t && rn(t[n] || (X(t) ? 0 : t)) || "0px";
            }
            function y() {
                return rn(e7.height || Q(d).width * e7.heightRatio);
            }
            function b() {
                var n = rn(e7.gap);
                return "calc((100%" + (n && " + " + n) + ")/" + (e7.perPage || 1) + (n && " - " + n) + ")";
            }
            function w(n, t) {
                var e = p(n);
                if (e) {
                    n = Q(e.slide)[a("right")], e = Q(d)[a("left")];
                    return dn(n - e) + (t ? 0 : E());
                }
                return 0;
            }
            function E() {
                var n = p(0);
                return n && parseFloat(Y(n.slide, a("marginRight"))) || 0;
            }
            return {
                mount: function() {
                    var n, t, e;
                    v(), u(window, "resize load", (n = D1(s, Nn), function() {
                        e || (e = Xn(t || 0, function() {
                            n(), e = null;
                        }, null, 1)).start();
                    })), r([
                        zn,
                        Mn
                    ], v), r(Nn, g);
                },
                listSize: function() {
                    return Q(d)[a("width")];
                },
                slideSize: function(n, t) {
                    return (n = p(n || 0)) ? Q(n.slide)[a("width")] + (t ? 0 : E()) : 0;
                },
                sliderSize: function() {
                    return w(n35.length - 1, !0) - w(-1, !0);
                },
                totalSize: w,
                getPadding: function(n) {
                    return parseFloat(Y(l, a("padding" + (n ? "Right" : "Left")))) || 0;
                }
            };
        },
        Clones: function(s, e8, c) {
            var n37, t15 = Gn(s), i4 = t15.on, o3 = t15.emit, a = e8.Elements, f = e8.Slides, r2 = e8.Direction.resolve, l = [];
            function u2() {
                (n37 = h()) && (function(o) {
                    var r = f.get().slice(), u = r.length;
                    if (u) {
                        for(; r.length < o;)E1(r, r);
                        E1(r.slice(-o), r.slice(0, o)).forEach(function(n38, t16) {
                            var e = t16 < o, i = function(n, t) {
                                n = n.cloneNode(!0);
                                return P1(n, c.classes.clone), n.id = s.root.id + "-clone" + yn(t + 1), n;
                            }(n38.slide, t16);
                            e ? k1(i, r[0].slide) : C1(a.list, i), E1(l, i), f.register(i, t16 - o + (e ? 0 : u), n38.index);
                        });
                    }
                }(n37), o3(Nn));
            }
            function d() {
                V(l), x1(l);
            }
            function p() {
                n37 < h() && o3(Mn);
            }
            function h() {
                var n, t = c.clones;
                return s.is(Dt) ? t || (t = (n = c[r2("fixedWidth")] && e8.Layout.slideSize(0)) && ln(Q(a.track)[r2("width")] / n) || c[r2("autoWidth")] && s.length || 2 * c.perPage) : t = 0, t;
            }
            return {
                mount: function() {
                    u2(), i4(Mn, d), i4(Mn, u2), i4([
                        zn,
                        Nn
                    ], p);
                },
                destroy: d
            };
        },
        Move: function(i5, s, o4) {
            var c, n39 = Gn(i5), t17 = n39.on, a = n39.emit, f = i5.state.set, r3 = (n39 = s.Layout).slideSize, e9 = n39.getPadding, u3 = n39.totalSize, l = n39.listSize, d = n39.sliderSize, p = (n39 = s.Direction).resolve, h = n39.orient, v = (n39 = s.Elements).list, g = n39.track;
            function m() {
                s.Controller.isBusy() || (s.Scroll.cancel(), y(i5.index), s.Slides.update());
            }
            function y(n) {
                b(S(n, !0));
            }
            function b(n40, t18) {
                i5.is(Mt) || (t18 = t18 ? n40 : function(n) {
                    var t, e;
                    i5.is(Dt) && (e = h(n - x()), t = P(!1, n) && e < 0, e = P(!0, n) && 0 < e, (t || e) && (n = w(n, e)));
                    return n;
                }(n40), Y(v, "transform", "translate" + p("X") + "(" + t18 + "px)"), n40 !== t18 && a(_n));
            }
            function w(n, t) {
                var e = n - _(t), i = d();
                return n -= h(i * (ln(dn(e) / i) || 1)) * (t ? 1 : -1);
            }
            function E() {
                b(x()), c.cancel();
            }
            function S(n41, t) {
                var e = h(u3(n41 - 1) - (e = n41, "center" === (n41 = o4.focus) ? (l() - r3(e, !0)) / 2 : +n41 * r3(e) || 0));
                return t ? function(n) {
                    o4.trimSpace && i5.is(At) && (n = vn(n, 0, h(d() - l())));
                    return n;
                }(e) : e;
            }
            function x() {
                var n = p("left");
                return Q(v)[n] - Q(g)[n] + h(e9(!1));
            }
            function _(n) {
                return S(n ? s.Controller.getEnd() : 0, !!o4.trimSpace);
            }
            function P(n, t) {
                t = z1(t) ? x() : t;
                var e = !0 !== n && h(t) < h(_(!1)), t = !1 !== n && h(t) > h(_(!0));
                return e || t;
            }
            return {
                mount: function() {
                    c = s.Transition, t17([
                        En,
                        Tn,
                        zn,
                        Mn
                    ], m);
                },
                move: function(n, t, e, i) {
                    var o, r, u = x();
                    n !== t && (o = t < n, r = h(w(x(), o)), o ? 0 <= r : r <= v["scroll" + p("Width")] - Q(g)[p("width")]) && (E(), b(w(u, t < n), !0)), f(R), a(Sn, t, e, n), c.start(t, function() {
                        f(3), a(xn, t, e, n), i && i();
                    });
                },
                jump: y,
                translate: b,
                shift: w,
                cancel: E,
                toIndex: function(n) {
                    for(var t = s.Slides.get(), e = 0, i = 1 / 0, o = 0; o < t.length; o++){
                        var r = t[o].index, u = dn(S(r, !0) - n);
                        if (!(u <= i)) break;
                        i = u, e = r;
                    }
                    return e;
                },
                toPosition: S,
                getPosition: x,
                getLimit: _,
                exceededLimit: P,
                reposition: m
            };
        },
        Controller: function(r, o5, u) {
            var s, i6, c, n42 = Gn(r).on, a = o5.Move, f = a.getPosition, l = a.getLimit, d = a.toPosition, t19 = o5.Slides, p = t19.isEnough, e10 = t19.getLength, h = r.is(Dt), v = r.is(At), g = D1(E, !1), m = D1(E, !0), y = u.start || 0, b = y;
            function w() {
                s = e10(!0), i6 = u.perMove, c = u.perPage;
                var n = vn(y, 0, s - 1);
                n !== y && (y = n, a.reposition());
            }
            function E(n, t) {
                var e = i6 || (L() ? 1 : c), e = S(y + e * (n ? -1 : 1), y, !(i6 || L()));
                return -1 === e && v && !pn(f(), l(!n), 1) ? n ? 0 : _() : t ? e : x(e);
            }
            function S(n43, t20, e) {
                var i, o;
                return p() ? (i = _(), (o = function(n) {
                    if (v && "move" === u.trimSpace && n !== y) for(var t = f(); t === d(n, !0) && hn(n, 0, r.length - 1, !u.rewind);)n < y ? --n : ++n;
                    return n;
                }(n43)) !== n43 && (t20 = n43, n43 = o, e = !1), n43 < 0 || i < n43 ? n43 = hn(0, n43, t20, !0) || hn(i, t20, n43, !0) ? P(C(n43)) : h ? e ? n43 < 0 ? -(s % c || c) : s : n43 : u.rewind ? n43 < 0 ? i : 0 : -1 : e && n43 !== t20 && (n43 = P(C(t20) + (n43 < t20 ? -1 : 1)))) : n43 = -1, n43;
            }
            function x(n) {
                return h ? (n + s) % s || 0 : n;
            }
            function _() {
                return an(s - (L() || h && i6 ? 1 : c), 0);
            }
            function P(n) {
                return vn(L() ? n : c * n, 0, _());
            }
            function C(n) {
                return L() ? n : fn((n >= _() ? s - 1 : n) / c);
            }
            function k(n) {
                n !== y && (b = y, y = n);
            }
            function L() {
                return !z1(u.focus) || u.isNavigation;
            }
            function A() {
                return r.state.is([
                    R,
                    W
                ]) && !!u.waitForTransition;
            }
            return {
                mount: function() {
                    w(), n42([
                        zn,
                        Mn
                    ], w);
                },
                go: function(n44, t21, e11) {
                    var i7;
                    A() || -1 < (n44 = x(i7 = function(n) {
                        var t = y;
                        var e, i;
                        M1(n) ? (i = n.match(/([+\-<>])(\d+)?/) || [], e = i[1], i = i[2], "+" === e || "-" === e ? t = S(y + +("" + e + (+i || 1)), y) : ">" === e ? t = i ? P(+i) : g(!0) : "<" === e && (t = m(!0))) : t = h ? n : vn(n, 0, _());
                        return t;
                    }(n44))) && (t21 || n44 !== y) && (k(n44), a.move(i7, n44, b, e11));
                },
                scroll: function(n, t, e, i) {
                    o5.Scroll.scroll(n, t, e, function() {
                        k(x(a.toIndex(a.getPosition()))), i && i();
                    });
                },
                getNext: g,
                getPrev: m,
                getAdjacent: E,
                getEnd: _,
                setIndex: k,
                getIndex: function(n) {
                    return n ? b : y;
                },
                toIndex: P,
                toPage: C,
                toDest: function(n) {
                    return n = a.toIndex(n), v ? vn(n, 0, _()) : n;
                },
                hasFocus: L,
                isBusy: A
            };
        },
        Arrows: function(o, n45, t22) {
            var e12, i8, r = Gn(o), u = r.on, s = r.bind, c = r.emit, a = t22.classes, f = t22.i18n, l = n45.Elements, d = n45.Controller, p = l.arrows, h = l.track, v = p, g = l.prev, m = l.next, y = {};
            function b() {
                !function() {
                    var n = t22.arrows;
                    !n || g && m || (v = p || H("div", a.arrows), g = x(!0), m = x(!1), e12 = !0, C1(v, [
                        g,
                        m
                    ]), p || k1(v, h));
                    g && m && (T1(y, {
                        prev: g,
                        next: m
                    }), q(v, n ? "" : "none"), P1(v, i8 = ft + "--" + t22.direction), n && (u([
                        xn,
                        Mn,
                        In
                    ], _), s(m, "click", D1(S, ">")), s(g, "click", D1(S, "<")), _(), j1([
                        g,
                        m
                    ], Kn, h.id), c("arrows:mounted", g, m)));
                }(), u(zn, w);
            }
            function w() {
                E(), b();
            }
            function E() {
                r.destroy(), en(v, i8), e12 ? (V(p ? [
                    g,
                    m
                ] : v), g = m = null) : F1([
                    g,
                    m
                ], it);
            }
            function S(n) {
                d.go(n, !0);
            }
            function x(n) {
                return Z('<button class="' + a.arrow + " " + (n ? a.prev : a.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' + (t22.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />');
            }
            function _() {
                var n = o.index, t = d.getPrev(), e = d.getNext(), i = -1 < t && n < t ? f.last : f.prev, n = -1 < e && e < n ? f.first : f.next;
                g.disabled = t < 0, m.disabled = e < 0, j1(g, Vn, i), j1(m, Vn, n), c("arrows:updated", g, m, t, e);
            }
            return {
                arrows: y,
                mount: b,
                destroy: E
            };
        },
        Autoplay: function(n46, t23, e) {
            var i, o, r = Gn(n46), u = r.on, s = r.bind, c = r.emit, a = Xn(e.interval, n46.go.bind(n46, ">"), function(n) {
                var t = l.bar;
                t && Y(t, "width", 100 * n + "%"), c("autoplay:playing", n);
            }), f = a.isPaused, l = t23.Elements, d = (n46 = t23.Elements).root, p = n46.toggle, h = e.autoplay, v = "pause" === h;
            function g() {
                f() && t23.Slides.isEnough() && (a.start(!e.resetProgress), o = i = v = !1, b(), c(jn));
            }
            function m(n) {
                v = !!(n = void 0 === n ? !0 : n), b(), f() || (a.pause(), c(Rn));
            }
            function y() {
                v || (i || o ? m(!1) : g());
            }
            function b() {
                p && (L1(p, bt, !v), j1(p, Vn, e.i18n[v ? "play" : "pause"]));
            }
            function w(n) {
                n = t23.Slides.getAt(n);
                a.set(n && +K(n.slide, Nt) || e.interval);
            }
            return {
                mount: function() {
                    h && (function() {
                        e.pauseOnHover && s(d, "mouseenter mouseleave", function(n) {
                            i = "mouseenter" === n.type, y();
                        });
                        e.pauseOnFocus && s(d, "focusin focusout", function(n) {
                            o = "focusin" === n.type, y();
                        });
                        p && s(p, "click", function() {
                            v ? g() : m(!0);
                        });
                        u([
                            Sn,
                            On,
                            Mn
                        ], a.rewind), u(Sn, w);
                    }(), p && j1(p, Kn, l.track.id), v || g(), b());
                },
                destroy: a.cancel,
                play: g,
                pause: m,
                isPaused: f
            };
        },
        Cover: function(n47, t24, e13) {
            var i = Gn(n47).on;
            function o(e) {
                t24.Slides.forEach(function(n) {
                    var t = A1(n.container || n.slide, "img");
                    t && t.src && r(e, t, n);
                });
            }
            function r(n, t, e) {
                e.style("background", n ? 'center/cover no-repeat url("' + t.src + '")' : "", !0), q(t, n ? "none" : "");
            }
            return {
                mount: function() {
                    e13.cover && (i(Wn, D1(r, !0)), i([
                        En,
                        zn,
                        Mn
                    ], D1(o, !0)));
                },
                destroy: D1(o, !1)
            };
        },
        Scroll: function(r4, s, u4) {
            var c, a, n48 = Gn(r4), t25 = n48.on, f = n48.emit, l = r4.state.set, d = s.Move, p = d.getPosition, h = d.getLimit, v = d.exceededLimit, g = d.translate, m = 1;
            function y(n, t, e, i, o) {
                var r = p();
                E(), e && (e = s.Layout.sliderSize(), u = gn(n) * e * fn(dn(n) / e) || 0, n = d.toPosition(s.Controller.toDest(n % e)) + u);
                var u = pn(r, n, 1);
                m = 1, t = u ? 0 : t || an(dn(n - r) / 1.5, 800), a = i, c = Xn(t, b, D1(w, r, n, o), 1), l(W), f(On), c.start();
            }
            function b() {
                l(3), a && a(), f(In);
            }
            function w(n, t, e, i) {
                var o = p(), n = (n + (t - n) * (n = i, (i = u4.easingFunc) ? i(n) : 1 - Math.pow(1 - n, 4)) - o) * m;
                g(o + n), r4.is(At) && !e && v() && (m *= .6, dn(n) < 10 && y(h(v(!0)), 600, !1, void 0, !0));
            }
            function E() {
                c && c.cancel();
            }
            function e14() {
                c && !c.isPaused() && (E(), b());
            }
            return {
                mount: function() {
                    t25(Sn, E), t25([
                        zn,
                        Mn
                    ], e14);
                },
                destroy: E,
                scroll: y,
                cancel: e14
            };
        },
        Drag: function(r, i9, u) {
            var s, t26, o6, c, a, f, l, d, n49 = Gn(r), e15 = n49.on, p = n49.emit, h = n49.bind, v = n49.unbind, g = r.state, m = i9.Move, y = i9.Scroll, b = i9.Controller, w = i9.Elements.track, E = i9.Media.reduce, S = (n49 = i9.Direction).resolve, x = n49.orient, _ = m.getPosition, P = m.exceededLimit, C = !1;
            function k() {
                var n = u.drag;
                j(!n), c = "free" === n;
            }
            function L(n) {
                var t, e, i;
                f = !1, l || (t = F(n), e = n.target, i = u.noDrag, B(e, "." + vt + ", ." + lt) || i && B(e, i) || !t && n.button || (b.isBusy() ? $(n, !0) : (d = t ? w : window, a = g.is([
                    R,
                    W
                ]), o6 = null, h(d, kt, A, Tt), h(d, Lt, D, Tt), m.cancel(), y.cancel(), z(n))));
            }
            function A(n) {
                var t, e, i, o;
                g.is(6) || (g.set(6), p("drag")), n.cancelable && (a ? (m.translate(s + N(n) / (C && r.is(At) ? 5 : 1)), e = 200 < T(n), i = C !== (C = P()), (e || i) && z(n), f = !0, p("dragging"), $(n)) : dn(N(o = n)) > dn(N(o, !0)) && (t = n, e = u.dragMinThreshold, i = X(e), o = i && e.mouse || 0, e = (i ? e.touch : +e) || 10, a = dn(N(t)) > (F(t) ? e : o), $(n)));
            }
            function D(n50) {
                g.is(6) && (g.set(3), p("dragged")), a && (function(n51) {
                    var t27 = function(n) {
                        if (r.is(Dt) || !C) {
                            var t = T(n);
                            if (t && t < 200) return N(n) / t;
                        }
                        return 0;
                    }(n51), e = function(n) {
                        return _() + gn(n) * cn(dn(n) * (u.flickPower || 600), c ? 1 / 0 : i9.Layout.listSize() * (u.flickMaxPages || 1));
                    }(t27), n51 = u.rewind && u.rewindByDrag;
                    E(!1), c ? b.scroll(e, 0, u.snap) : r.is(Mt) ? b.go(x(gn(t27)) < 0 ? n51 ? "<" : "-" : n51 ? ">" : "+") : r.is(At) && C && n51 ? b.go(P(!0) ? ">" : "<") : b.go(b.toDest(e), !0);
                    E(!0);
                }(n50), $(n50)), v(d, kt, A), v(d, Lt, D), a = !1;
            }
            function M(n) {
                !l && f && $(n, !0);
            }
            function z(n) {
                o6 = t26, t26 = n, s = _();
            }
            function N(n, t) {
                return I(n, t) - I(O(n), t);
            }
            function T(n) {
                return on(n) - on(O(n));
            }
            function O(n) {
                return t26 === n && o6 || t26;
            }
            function I(n, t) {
                return (F(n) ? n.changedTouches[0] : n)["page" + S(t ? "Y" : "X")];
            }
            function F(n) {
                return "undefined" != typeof TouchEvent && n instanceof TouchEvent;
            }
            function j(n) {
                l = n;
            }
            return {
                mount: function() {
                    h(w, kt, G, Tt), h(w, Lt, G, Tt), h(w, Ct, L, Tt), h(w, "click", M, {
                        capture: !0
                    }), h(w, "dragstart", $), e15([
                        En,
                        zn
                    ], k);
                },
                disable: j,
                isDragging: function() {
                    return a;
                }
            };
        },
        Keyboard: function(t, n52, e) {
            var i, o, r = Gn(t), u = r.on, s = r.bind, c = r.unbind, a = t.root, f = n52.Direction.resolve;
            function l() {
                var n = e.keyboard;
                n && (i = "global" === n ? window : a, s(i, Ft, h));
            }
            function d() {
                c(i, Ft);
            }
            function p() {
                var n = o;
                o = !0, v1(function() {
                    o = n;
                });
            }
            function h(n) {
                o || ((n = It(n)) === f(Bn) ? t.go("<") : n === f(Hn) && t.go(">"));
            }
            return {
                mount: function() {
                    l(), u(zn, d), u(zn, l), u(Sn, p);
                },
                destroy: d,
                disable: function(n) {
                    o = n;
                }
            };
        },
        LazyLoad: function(e16, n53, o) {
            var t28 = Gn(e16), i10 = t28.on, r = t28.off, u = t28.bind, s = t28.emit, c = "sequential" === o.lazyLoad, a = [
                En,
                Mn,
                xn,
                In
            ], f = [];
            function l() {
                x1(f), n53.Slides.forEach(function(i) {
                    tn(i.slide, Wt).forEach(function(n) {
                        var t = K(n, jt), e = K(n, Rt);
                        t === n.src && e === n.srcset || (t = o.classes.spinner, e = A1(e = n.parentElement, "." + t) || H("span", t, e), f.push([
                            n,
                            i,
                            e
                        ]), n.src || q(n, "none"));
                    });
                }), c && v();
            }
            function d() {
                (f = f.filter(function(n) {
                    var t = o.perPage * ((o.preloadPages || 1) + 1) - 1;
                    return !n[1].isWithin(e16.index, t) || p(n);
                })).length || r(a);
            }
            function p(n) {
                var t = n[0];
                P1(n[1].slide, xt), u(t, "load error", D1(h, n)), j1(t, "src", K(t, jt)), j1(t, "srcset", K(t, Rt)), F1(t, jt), F1(t, Rt);
            }
            function h(n, t) {
                var e = n[0], i = n[1];
                en(i.slide, xt), "error" !== t.type && (V(n[2]), q(e, ""), s(Wn, e, i), s(Nn)), c && v();
            }
            function v() {
                f.length && p(f.shift());
            }
            return {
                mount: function() {
                    o.lazyLoad && (l(), i10(Mn, l), c || i10(a, d));
                },
                destroy: D1(x1, f)
            };
        },
        Pagination: function(f, n54, l) {
            var d, p, t29 = Gn(f), e17 = t29.on, i11 = t29.emit, h = t29.bind, v = n54.Slides, g = n54.Elements, o7 = n54.Controller, m = o7.hasFocus, r5 = o7.getIndex, u5 = o7.go, s2 = n54.Direction.resolve, y = [];
            function c2() {
                d && (V(g.pagination ? _1(d.children) : d), en(d, p), x1(y), d = null), t29.destroy();
            }
            function b(n) {
                u5(">" + n, !0);
            }
            function w(n, t) {
                var e = y.length, i = It(t), o = E(), r = -1;
                i === s2(Hn, !1, o) ? r = ++n % e : i === s2(Bn, !1, o) ? r = (--n + e) % e : "Home" === i ? r = 0 : "End" === i && (r = e - 1);
                e = y[r];
                e && (U(e.button), u5(">" + r), $(t, !0));
            }
            function E() {
                return l.paginationDirection || l.direction;
            }
            function a2(n) {
                return y[o7.toPage(n)];
            }
            function S() {
                var n, t = a2(r5(!0)), e = a2(r5());
                t && (en(n = t.button, bt), F1(n, Qn), j1(n, Un, -1)), e && (P1(n = e.button, bt), j1(n, Qn, !0), j1(n, Un, "")), i11("pagination:updated", {
                    list: d,
                    items: y
                }, t, e);
            }
            return {
                items: y,
                mount: function n55() {
                    c2(), e17([
                        zn,
                        Mn
                    ], n55), l.pagination && v.isEnough() && (e17([
                        Sn,
                        On,
                        In
                    ], S), function() {
                        var n56 = f.length, t = l.classes, e = l.i18n, i = l.perPage, o = m() ? n56 : ln(n56 / i);
                        P1(d = g.pagination || H("ul", t.pagination, g.track.parentElement), p = ht + "--" + E()), j1(d, qn, "tablist"), j1(d, Vn, e.select), j1(d, nt, E() === Yn ? "vertical" : "");
                        for(var r = 0; r < o; r++){
                            var u = H("li", null, d), s = H("button", {
                                class: t.page,
                                type: "button"
                            }, u), c = v.getIn(r).map(function(n) {
                                return n.slide.id;
                            }), a = !m() && 1 < i ? e.pageX : e.slideX;
                            h(s, "click", D1(b, r)), l.paginationKeyboard && h(s, "keydown", D1(w, r)), j1(u, qn, "presentation"), j1(s, qn, "tab"), j1(s, Kn, c.join(" ")), j1(s, Vn, mn(a, r + 1)), j1(s, Un, -1), y.push({
                                li: u,
                                button: s,
                                page: r
                            });
                        }
                    }(), S(), i11("pagination:mounted", {
                        list: d,
                        items: y
                    }, a2(f.index)));
                },
                destroy: c2,
                getAt: a2,
                update: S
            };
        },
        Sync: function(e18, n57, t30) {
            var i12 = t30.isNavigation, o = t30.slideFocus, r = [];
            function u() {
                var n58, t;
                e18.splides.forEach(function(n) {
                    n.isParent || (c(e18, n.splide), c(n.splide, e18));
                }), i12 && (n58 = Gn(e18), (t = n58.on)(Pn, f), t(Dn, l), t([
                    En,
                    zn
                ], a), r.push(n58), n58.emit(Fn, e18.splides));
            }
            function s() {
                r.forEach(function(n) {
                    n.destroy();
                }), x1(r);
            }
            function c(n59, i) {
                n59 = Gn(n59);
                n59.on(Sn, function(n, t, e) {
                    i.go(i.is(Dt) ? e : n);
                }), r.push(n59);
            }
            function a() {
                j1(n57.Elements.list, nt, t30.direction === Yn ? "vertical" : "");
            }
            function f(n) {
                e18.go(n.index);
            }
            function l(n, t) {
                b1(Gt, It(t)) && (f(n), $(t));
            }
            return {
                setup: function() {
                    e18.options = {
                        slideFocus: z1(o) ? i12 : o
                    };
                },
                mount: u,
                destroy: s,
                remount: function() {
                    s(), u();
                }
            };
        },
        Wheel: function(u, s, c) {
            var n60 = Gn(u).bind, a = 0;
            function t31(n) {
                var t, e, i, o, r;
                n.cancelable && (r = (t = n.deltaY) < 0, e = on(n), i = c.wheelMinThreshold || 0, o = c.wheelSleep || 0, dn(t) > i && o < e - a && (u.go(r ? "<" : ">"), a = e), c.releaseWheel && !u.state.is(R) && -1 === s.Controller.getAdjacent(r) || $(n));
            }
            return {
                mount: function() {
                    c.wheel && n60(s.Elements.track, "wheel", t31, Tt);
                }
            };
        },
        Live: function(n61, t, e) {
            var i = Gn(n61).on, o = t.Elements.track, r = e.live && !e.isNavigation, u = H("span", yt);
            function s(n) {
                r && j1(o, l1, n ? "off" : "polite");
            }
            return {
                mount: function() {
                    r && (s(!t.Autoplay.isPaused()), j1(o, et, "additions"), u.textContent = "…", i(jn, D1(s, !0)), i(Rn, D1(s, !1)), i([
                        xn,
                        In
                    ], D1(C1, o, u)));
                },
                disable: s,
                destroy: function() {
                    F1(o, [
                        l1,
                        et
                    ]), V(u);
                }
            };
        }
    }), Bt = {
        type: "slide",
        role: "region",
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        drag: !0,
        direction: "ltr",
        trimSpace: !0,
        focusableNodes: "a, button, textarea, input, select, iframe",
        live: !0,
        classes: {
            slide: st,
            clone: ct,
            arrows: ft,
            arrow: lt,
            prev: dt,
            next: pt,
            pagination: ht,
            page: vt,
            spinner: un + "__spinner"
        },
        i18n: {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
            slideX: "Go to slide %s",
            pageX: "Go to page %s",
            play: "Start autoplay",
            pause: "Pause autoplay",
            carousel: "carousel",
            slide: "slide",
            select: "Select a slide to show",
            slideLabel: "%s of %s"
        },
        reducedMotion: {
            speed: 0,
            rewindSpeed: 0,
            autoplay: "pause"
        }
    };
    function Ht(n, i, t32) {
        var e19 = Gn(n).on;
        return {
            mount: function() {
                e19([
                    En,
                    Mn
                ], function() {
                    v1(function() {
                        i.Slides.style("transition", "opacity " + t32.speed + "ms " + t32.easing);
                    });
                });
            },
            start: function(n, t) {
                var e = i.Elements.track;
                Y(e, "height", rn(Q(e).height)), v1(function() {
                    t(), Y(e, "height", "");
                });
            },
            cancel: G
        };
    }
    function Yt(r, n62, u) {
        var s, t33 = Gn(r).bind, c = n62.Move, a = n62.Controller, f = n62.Scroll, e20 = n62.Elements.list, l = D1(Y, e20, "transition");
        function i13() {
            l(""), f.cancel();
        }
        return {
            mount: function() {
                t33(e20, "transitionend", function(n) {
                    n.target === e20 && s && (i13(), s());
                });
            },
            start: function(n63, t34) {
                var e21 = c.toPosition(n63, !0), i14 = c.getPosition(), o = function(n) {
                    var t = u.rewindSpeed;
                    if (r.is(At) && t) {
                        var e = a.getIndex(!0), i = a.getEnd();
                        if (0 === e && i <= n || i <= e && 0 === n) return t;
                    }
                    return u.speed;
                }(n63);
                1 <= dn(e21 - i14) && 1 <= o ? u.useScroll ? f.scroll(e21, o, !1, t34) : (l("transform " + o + "ms " + u.easing), c.translate(e21, !0), s = t34) : (c.jump(n63), t34());
            },
            cancel: i13
        };
    }
    a1 = function() {
        function e22(n, t) {
            this.event = Gn(), this.Components = {}, this.state = s1(1), this.splides = [], this._o = {}, this._E = {};
            n = M1(n) ? nn(document, n) : n;
            sn(n, n + " is invalid."), t = O1({
                label: K(this.root = n, Vn) || "",
                labelledby: K(n, Zn) || ""
            }, Bt, e22.defaults, t || {});
            try {
                O1(t, JSON.parse(K(n, i1)));
            } catch (n65) {
                sn(!1, "Invalid JSON");
            }
            this._o = Object.create(O1({}, t));
        }
        var n64 = e22.prototype;
        return n64.mount = function(n66, t35) {
            var e = this, i = this.state, o = this.Components;
            return sn(i.is([
                1,
                7
            ]), "Already mounted!"), i.set(1), this._C = o, this._T = t35 || this._T || (this.is(Mt) ? Ht : Yt), this._E = n66 || this._E, N1(T1({}, Xt, this._E, {
                Transition: this._T
            }), function(n, t) {
                n = n(e, o, e._o);
                (o[t] = n).setup && n.setup();
            }), N1(o, function(n) {
                n.mount && n.mount();
            }), this.emit(En), P1(this.root, "is-initialized"), i.set(3), this.emit("ready"), this;
        }, n64.sync = function(n) {
            return this.splides.push({
                splide: n
            }), n.splides.push({
                splide: this,
                isParent: !0
            }), this.state.is(3) && (this._C.Sync.remount(), n.Components.Sync.remount()), this;
        }, n64.go = function(n) {
            return this._C.Controller.go(n), this;
        }, n64.on = function(n, t) {
            return this.event.on(n, t), this;
        }, n64.off = function(n) {
            return this.event.off(n), this;
        }, n64.emit = function(n) {
            var t;
            return (t = this.event).emit.apply(t, [
                n
            ].concat(_1(arguments, 1))), this;
        }, n64.add = function(n, t) {
            return this._C.Slides.add(n, t), this;
        }, n64.remove = function(n) {
            return this._C.Slides.remove(n), this;
        }, n64.is = function(n) {
            return this._o.type === n;
        }, n64.refresh = function() {
            return this.emit(Mn), this;
        }, n64.destroy = function(t) {
            void 0 === t && (t = !0);
            var n67 = this.event, e = this.state;
            return e.is(1) ? Gn(this).on("ready", this.destroy.bind(this, t)) : (N1(this._C, function(n) {
                n.destroy && n.destroy(t);
            }, !0), n67.emit(u1), n67.destroy(), t && x1(this.splides), e.set(7)), this;
        }, _createClass(e22, [
            {
                key: "options",
                get: function() {
                    return this._o;
                },
                set: function(n) {
                    this._C.Media.set(n, !0);
                }
            },
            {
                key: "length",
                get: function() {
                    return this._C.Slides.getLength(!0);
                }
            },
            {
                key: "index",
                get: function() {
                    return this._C.Controller.getIndex();
                }
            }
        ]), e22;
    }();
    return a1.defaults = {}, a1.STATES = n1, a1;
});

//# sourceMappingURL=index.4ece0dc4.js.map
