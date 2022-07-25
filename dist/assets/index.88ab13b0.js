import {
    a as e,
    c as t,
    O as n,
    Y as r,
    C as o,
    u as a,
    f as l,
    S as s,
    D as c,
    x as i,
    k as u,
    af as f,
    p as m,
    r as p,
    w as d,
    I as h,
    j as g,
    l as v,
    m as _,
    n as b,
    V as y,
    ag as w,
} from './vue.f0fe4329.js';
!(function () {
    const e = document.createElement('link').relList;
    if (!(e && e.supports && e.supports('modulepreload'))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        new MutationObserver(e => {
            for (const n of e)
                if ('childList' === n.type)
                    for (const e of n.addedNodes)
                        'LINK' === e.tagName && 'modulepreload' === e.rel && t(e);
        }).observe(document, { childList: !0, subtree: !0 });
    }
    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = (function (e) {
            const t = {};
            return (
                e.integrity && (t.integrity = e.integrity),
                e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
                'use-credentials' === e.crossorigin
                    ? (t.credentials = 'include')
                    : 'anonymous' === e.crossorigin
                    ? (t.credentials = 'omit')
                    : (t.credentials = 'same-origin'),
                t
            );
        })(e);
        fetch(e.href, t);
    }
})();
var k = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
};
const O = { id: 'app' };
var E = k({}, [
        [
            'render',
            function (o, a) {
                const l = r('router-view');
                return e(), t('div', O, [n(l)]);
            },
        ],
        ['__scopeId', 'data-v-0362d232'],
    ]),
    L = Object.freeze(
        Object.defineProperty({ __proto__: null, default: E }, Symbol.toStringTag, {
            value: 'Module',
        })
    );
const F = {},
    S = function (e, t) {
        return t && 0 !== t.length
            ? Promise.all(
                  t.map(e => {
                      if ((e = `/vue3-vite-ts/${e}`) in F) return;
                      F[e] = !0;
                      const t = e.endsWith('.css'),
                          n = t ? '[rel="stylesheet"]' : '';
                      if (document.querySelector(`link[href="${e}"]${n}`)) return;
                      const r = document.createElement('link');
                      return (
                          (r.rel = t ? 'stylesheet' : 'modulepreload'),
                          t || ((r.as = 'script'), (r.crossOrigin = '')),
                          (r.href = e),
                          document.head.appendChild(r),
                          t
                              ? new Promise((t, n) => {
                                    r.addEventListener('load', t),
                                        r.addEventListener('error', () =>
                                            n(new Error(`Unable to preload CSS for ${e}`))
                                        );
                                })
                              : void 0
                      );
                  })
              ).then(() => e())
            : e();
    },
    P = 'undefined' != typeof window;
const I = Object.assign;
function R(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = T(o) ? o.map(e) : e(o);
    }
    return n;
}
const C = () => {},
    T = Array.isArray,
    W = /\/$/;
function j(e, t, n = '/') {
    let r,
        o = {},
        a = '',
        l = '';
    const s = t.indexOf('#');
    let c = t.indexOf('?');
    return (
        s < c && s >= 0 && (c = -1),
        c > -1 && ((r = t.slice(0, c)), (a = t.slice(c + 1, s > -1 ? s : t.length)), (o = e(a))),
        s > -1 && ((r = r || t.slice(0, s)), (l = t.slice(s, t.length))),
        (r = (function (e, t) {
            if (e.startsWith('/')) return e;
            if (!e) return t;
            const n = t.split('/'),
                r = e.split('/');
            let o,
                a,
                l = n.length - 1;
            for (o = 0; o < r.length; o++)
                if (((a = r[o]), '.' !== a)) {
                    if ('..' !== a) break;
                    l > 1 && l--;
                }
            return n.slice(0, l).join('/') + '/' + r.slice(o - (o === r.length ? 1 : 0)).join('/');
        })(null != r ? r : t, n)),
        { fullPath: r + (a && '?') + a + l, path: r, query: o, hash: l }
    );
}
function M(e, t) {
    return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || '/' : e;
}
function D(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
}
function $(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!N(e[n], t[n])) return !1;
    return !0;
}
function N(e, t) {
    return T(e) ? x(e, t) : T(t) ? x(t, e) : e === t;
}
function x(e, t) {
    return T(t)
        ? e.length === t.length && e.every((e, n) => e === t[n])
        : 1 === e.length && e[0] === t;
}
var A, z, V, q;
function H(e) {
    if (!e)
        if (P) {
            const t = document.querySelector('base');
            e = (e = (t && t.getAttribute('href')) || '/').replace(/^\w+:\/\/[^\/]+/, '');
        } else e = '/';
    return '/' !== e[0] && '#' !== e[0] && (e = '/' + e), e.replace(W, '');
}
((z = A || (A = {})).pop = 'pop'),
    (z.push = 'push'),
    ((q = V || (V = {})).back = 'back'),
    (q.forward = 'forward'),
    (q.unknown = '');
const Y = /^[^#]+#/;
function B(e, t) {
    return e.replace(Y, '#') + t;
}
const U = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function G(e) {
    let t;
    if ('el' in e) {
        const n = e.el,
            r = 'string' == typeof n && n.startsWith('#'),
            o =
                'string' == typeof n
                    ? r
                        ? document.getElementById(n.slice(1))
                        : document.querySelector(n)
                    : n;
        if (!o) return;
        t = (function (e, t) {
            const n = document.documentElement.getBoundingClientRect(),
                r = e.getBoundingClientRect();
            return {
                behavior: t.behavior,
                left: r.left - n.left - (t.left || 0),
                top: r.top - n.top - (t.top || 0),
            };
        })(o, e);
    } else t = e;
    'scrollBehavior' in document.documentElement.style
        ? window.scrollTo(t)
        : window.scrollTo(
              null != t.left ? t.left : window.pageXOffset,
              null != t.top ? t.top : window.pageYOffset
          );
}
function K(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
}
const J = new Map();
function Z(e, t) {
    const { pathname: n, search: r, hash: o } = t,
        a = e.indexOf('#');
    if (a > -1) {
        let t = o.includes(e.slice(a)) ? e.slice(a).length : 1,
            n = o.slice(t);
        return '/' !== n[0] && (n = '/' + n), M(n, '');
    }
    return M(n, e) + r + o;
}
function Q(e, t, n, r = !1, o = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? U() : null,
    };
}
function X(e) {
    const { history: t, location: n } = window,
        r = { value: Z(e, n) },
        o = { value: t.state };
    function a(r, a, l) {
        const s = e.indexOf('#'),
            c =
                s > -1
                    ? (n.host && document.querySelector('base') ? e : e.slice(s)) + r
                    : location.protocol + '//' + location.host + e + r;
        try {
            t[l ? 'replaceState' : 'pushState'](a, '', c), (o.value = a);
        } catch (i) {
            n[l ? 'replace' : 'assign'](c);
        }
    }
    return (
        o.value ||
            a(
                r.value,
                {
                    back: null,
                    current: r.value,
                    forward: null,
                    position: t.length - 1,
                    replaced: !0,
                    scroll: null,
                },
                !0
            ),
        {
            location: r,
            state: o,
            push: function (e, n) {
                const l = I({}, o.value, t.state, { forward: e, scroll: U() });
                a(l.current, l, !0),
                    a(e, I({}, Q(r.value, e, null), { position: l.position + 1 }, n), !1),
                    (r.value = e);
            },
            replace: function (e, n) {
                a(
                    e,
                    I({}, t.state, Q(o.value.back, e, o.value.forward, !0), n, {
                        position: o.value.position,
                    }),
                    !0
                ),
                    (r.value = e);
            },
        }
    );
}
function ee(e) {
    return 'string' == typeof e || 'symbol' == typeof e;
}
const te = {
        path: '/',
        name: void 0,
        params: {},
        query: {},
        hash: '',
        fullPath: '/',
        matched: [],
        meta: {},
        redirectedFrom: void 0,
    },
    ne = Symbol('');
var re, oe;
function ae(e, t) {
    return I(new Error(), { type: e, [ne]: !0 }, t);
}
function le(e, t) {
    return e instanceof Error && ne in e && (null == t || !!(e.type & t));
}
((oe = re || (re = {}))[(oe.aborted = 4)] = 'aborted'),
    (oe[(oe.cancelled = 8)] = 'cancelled'),
    (oe[(oe.duplicated = 16)] = 'duplicated');
const se = { sensitive: !1, strict: !1, start: !0, end: !0 },
    ce = /[.+*?^${}()[\]/\\]/g;
function ie(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r) return r;
        n++;
    }
    return e.length < t.length
        ? 1 === e.length && 80 === e[0]
            ? -1
            : 1
        : e.length > t.length
        ? 1 === t.length && 80 === t[0]
            ? 1
            : -1
        : 0;
}
function ue(e, t) {
    let n = 0;
    const r = e.score,
        o = t.score;
    for (; n < r.length && n < o.length; ) {
        const e = ie(r[n], o[n]);
        if (e) return e;
        n++;
    }
    if (1 === Math.abs(o.length - r.length)) {
        if (fe(r)) return 1;
        if (fe(o)) return -1;
    }
    return o.length - r.length;
}
function fe(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
}
const me = { type: 0, value: '' },
    pe = /[a-zA-Z0-9_]/;
function de(e, t, n) {
    const r = (function (e, t) {
            const n = I({}, se, t),
                r = [];
            let o = n.start ? '^' : '';
            const a = [];
            for (const c of e) {
                const e = c.length ? [] : [90];
                n.strict && !c.length && (o += '/');
                for (let t = 0; t < c.length; t++) {
                    const r = c[t];
                    let l = 40 + (n.sensitive ? 0.25 : 0);
                    if (0 === r.type)
                        t || (o += '/'), (o += r.value.replace(ce, '\\$&')), (l += 40);
                    else if (1 === r.type) {
                        const { value: e, repeatable: n, optional: i, regexp: u } = r;
                        a.push({ name: e, repeatable: n, optional: i });
                        const f = u || '[^/]+?';
                        if ('[^/]+?' !== f) {
                            l += 10;
                            try {
                                new RegExp(`(${f})`);
                            } catch (s) {
                                throw new Error(
                                    `Invalid custom RegExp for param "${e}" (${f}): ` + s.message
                                );
                            }
                        }
                        let m = n ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
                        t || (m = i && c.length < 2 ? `(?:/${m})` : '/' + m),
                            i && (m += '?'),
                            (o += m),
                            (l += 20),
                            i && (l += -8),
                            n && (l += -20),
                            '.*' === f && (l += -50);
                    }
                    e.push(l);
                }
                r.push(e);
            }
            if (n.strict && n.end) {
                const e = r.length - 1;
                r[e][r[e].length - 1] += 0.7000000000000001;
            }
            n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && (o += '(?:/|$)');
            const l = new RegExp(o, n.sensitive ? '' : 'i');
            return {
                re: l,
                score: r,
                keys: a,
                parse: function (e) {
                    const t = e.match(l),
                        n = {};
                    if (!t) return null;
                    for (let r = 1; r < t.length; r++) {
                        const e = t[r] || '',
                            o = a[r - 1];
                        n[o.name] = e && o.repeatable ? e.split('/') : e;
                    }
                    return n;
                },
                stringify: function (t) {
                    let n = '',
                        r = !1;
                    for (const o of e) {
                        (r && n.endsWith('/')) || (n += '/'), (r = !1);
                        for (const a of o)
                            if (0 === a.type) n += a.value;
                            else if (1 === a.type) {
                                const { value: l, repeatable: s, optional: c } = a,
                                    i = l in t ? t[l] : '';
                                if (T(i) && !s)
                                    throw new Error(
                                        `Provided param "${l}" is an array but it is not repeatable (* or + modifiers)`
                                    );
                                const u = T(i) ? i.join('/') : i;
                                if (!u) {
                                    if (!c) throw new Error(`Missing required param "${l}"`);
                                    o.length < 2 &&
                                        e.length > 1 &&
                                        (n.endsWith('/') ? (n = n.slice(0, -1)) : (r = !0));
                                }
                                n += u;
                            }
                    }
                    return n;
                },
            };
        })(
            (function (e) {
                if (!e) return [[]];
                if ('/' === e) return [[me]];
                if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
                function t(e) {
                    throw new Error(`ERR (${n})/"${i}": ${e}`);
                }
                let n = 0,
                    r = n;
                const o = [];
                let a;
                function l() {
                    a && o.push(a), (a = []);
                }
                let s,
                    c = 0,
                    i = '',
                    u = '';
                function f() {
                    i &&
                        (0 === n
                            ? a.push({ type: 0, value: i })
                            : 1 === n || 2 === n || 3 === n
                            ? (a.length > 1 &&
                                  ('*' === s || '+' === s) &&
                                  t(
                                      `A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`
                                  ),
                              a.push({
                                  type: 1,
                                  value: i,
                                  regexp: u,
                                  repeatable: '*' === s || '+' === s,
                                  optional: '*' === s || '?' === s,
                              }))
                            : t('Invalid state to consume buffer'),
                        (i = ''));
                }
                function m() {
                    i += s;
                }
                for (; c < e.length; )
                    if (((s = e[c++]), '\\' !== s || 2 === n))
                        switch (n) {
                            case 0:
                                '/' === s ? (i && f(), l()) : ':' === s ? (f(), (n = 1)) : m();
                                break;
                            case 4:
                                m(), (n = r);
                                break;
                            case 1:
                                '(' === s
                                    ? (n = 2)
                                    : pe.test(s)
                                    ? m()
                                    : (f(), (n = 0), '*' !== s && '?' !== s && '+' !== s && c--);
                                break;
                            case 2:
                                ')' === s
                                    ? '\\' == u[u.length - 1]
                                        ? (u = u.slice(0, -1) + s)
                                        : (n = 3)
                                    : (u += s);
                                break;
                            case 3:
                                f(), (n = 0), '*' !== s && '?' !== s && '+' !== s && c--, (u = '');
                                break;
                            default:
                                t('Unknown state');
                        }
                    else (r = n), (n = 4);
                return 2 === n && t(`Unfinished custom RegExp for param "${i}"`), f(), l(), o;
            })(e.path),
            n
        ),
        o = I(r, { record: e, parent: t, children: [], alias: [] });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function he(e, t) {
    const n = [],
        r = new Map();
    function o(e, n, r) {
        const s = !r,
            c = (function (e) {
                return {
                    path: e.path,
                    redirect: e.redirect,
                    name: e.name,
                    meta: e.meta || {},
                    aliasOf: void 0,
                    beforeEnter: e.beforeEnter,
                    props: ge(e),
                    children: e.children || [],
                    instances: {},
                    leaveGuards: new Set(),
                    updateGuards: new Set(),
                    enterCallbacks: {},
                    components:
                        'components' in e
                            ? e.components || null
                            : e.component && { default: e.component },
                };
            })(e);
        c.aliasOf = r && r.record;
        const i = be(t, e),
            u = [c];
        if ('alias' in e) {
            const t = 'string' == typeof e.alias ? [e.alias] : e.alias;
            for (const e of t)
                u.push(
                    I({}, c, {
                        components: r ? r.record.components : c.components,
                        path: e,
                        aliasOf: r ? r.record : c,
                    })
                );
        }
        let f, m;
        for (const t of u) {
            const { path: u } = t;
            if (n && '/' !== u[0]) {
                const e = n.record.path,
                    r = '/' === e[e.length - 1] ? '' : '/';
                t.path = n.record.path + (u && r + u);
            }
            if (
                ((f = de(t, n, i)),
                r
                    ? r.alias.push(f)
                    : ((m = m || f),
                      m !== f && m.alias.push(f),
                      s && e.name && !ve(f) && a(e.name)),
                c.children)
            ) {
                const e = c.children;
                for (let t = 0; t < e.length; t++) o(e[t], f, r && r.children[t]);
            }
            (r = r || f), l(f);
        }
        return m
            ? () => {
                  a(m);
              }
            : C;
    }
    function a(e) {
        if (ee(e)) {
            const t = r.get(e);
            t &&
                (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(a), t.alias.forEach(a));
        } else {
            const t = n.indexOf(e);
            t > -1 &&
                (n.splice(t, 1),
                e.record.name && r.delete(e.record.name),
                e.children.forEach(a),
                e.alias.forEach(a));
        }
    }
    function l(e) {
        let t = 0;
        for (
            ;
            t < n.length &&
            ue(e, n[t]) >= 0 &&
            (e.record.path !== n[t].record.path || !ye(e, n[t]));

        )
            t++;
        n.splice(t, 0, e), e.record.name && !ve(e) && r.set(e.record.name, e);
    }
    return (
        (t = be({ strict: !1, end: !0, sensitive: !1 }, t)),
        e.forEach(e => o(e)),
        {
            addRoute: o,
            resolve: function (e, t) {
                let o,
                    a,
                    l,
                    s = {};
                if ('name' in e && e.name) {
                    if (((o = r.get(e.name)), !o)) throw ae(1, { location: e });
                    (l = o.record.name),
                        (s = I(
                            (function (e, t) {
                                const n = {};
                                for (const r of t) r in e && (n[r] = e[r]);
                                return n;
                            })(
                                t.params,
                                o.keys.filter(e => !e.optional).map(e => e.name)
                            ),
                            e.params
                        )),
                        (a = o.stringify(s));
                } else if ('path' in e)
                    (a = e.path),
                        (o = n.find(e => e.re.test(a))),
                        o && ((s = o.parse(a)), (l = o.record.name));
                else {
                    if (((o = t.name ? r.get(t.name) : n.find(e => e.re.test(t.path))), !o))
                        throw ae(1, { location: e, currentLocation: t });
                    (l = o.record.name), (s = I({}, t.params, e.params)), (a = o.stringify(s));
                }
                const c = [];
                let i = o;
                for (; i; ) c.unshift(i.record), (i = i.parent);
                return { name: l, path: a, params: s, matched: c, meta: _e(c) };
            },
            removeRoute: a,
            getRoutes: function () {
                return n;
            },
            getRecordMatcher: function (e) {
                return r.get(e);
            },
        }
    );
}
function ge(e) {
    const t = {},
        n = e.props || !1;
    if ('component' in e) t.default = n;
    else for (const r in e.components) t[r] = 'boolean' == typeof n ? n : n[r];
    return t;
}
function ve(e) {
    for (; e; ) {
        if (e.record.aliasOf) return !0;
        e = e.parent;
    }
    return !1;
}
function _e(e) {
    return e.reduce((e, t) => I(e, t.meta), {});
}
function be(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
}
function ye(e, t) {
    return t.children.some(t => t === e || ye(e, t));
}
const we = /#/g,
    ke = /&/g,
    Oe = /\//g,
    Ee = /=/g,
    Le = /\?/g,
    Fe = /\+/g,
    Se = /%5B/g,
    Pe = /%5D/g,
    Ie = /%5E/g,
    Re = /%60/g,
    Ce = /%7B/g,
    Te = /%7C/g,
    We = /%7D/g,
    je = /%20/g;
function Me(e) {
    return encodeURI('' + e)
        .replace(Te, '|')
        .replace(Se, '[')
        .replace(Pe, ']');
}
function De(e) {
    return Me(e)
        .replace(Fe, '%2B')
        .replace(je, '+')
        .replace(we, '%23')
        .replace(ke, '%26')
        .replace(Re, '`')
        .replace(Ce, '{')
        .replace(We, '}')
        .replace(Ie, '^');
}
function $e(e) {
    return null == e
        ? ''
        : (function (e) {
              return Me(e).replace(we, '%23').replace(Le, '%3F');
          })(e).replace(Oe, '%2F');
}
function Ne(e) {
    try {
        return decodeURIComponent('' + e);
    } catch (t) {}
    return '' + e;
}
function xe(e) {
    const t = {};
    if ('' === e || '?' === e) return t;
    const n = ('?' === e[0] ? e.slice(1) : e).split('&');
    for (let r = 0; r < n.length; ++r) {
        const e = n[r].replace(Fe, ' '),
            o = e.indexOf('='),
            a = Ne(o < 0 ? e : e.slice(0, o)),
            l = o < 0 ? null : Ne(e.slice(o + 1));
        if (a in t) {
            let e = t[a];
            T(e) || (e = t[a] = [e]), e.push(l);
        } else t[a] = l;
    }
    return t;
}
function Ae(e) {
    let t = '';
    for (let n in e) {
        const r = e[n];
        if (((n = De(n).replace(Ee, '%3D')), null == r)) {
            void 0 !== r && (t += (t.length ? '&' : '') + n);
            continue;
        }
        (T(r) ? r.map(e => e && De(e)) : [r && De(r)]).forEach(e => {
            void 0 !== e && ((t += (t.length ? '&' : '') + n), null != e && (t += '=' + e));
        });
    }
    return t;
}
function ze(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        void 0 !== r &&
            (t[n] = T(r) ? r.map(e => (null == e ? null : '' + e)) : null == r ? r : '' + r);
    }
    return t;
}
const Ve = Symbol(''),
    qe = Symbol(''),
    He = Symbol(''),
    Ye = Symbol(''),
    Be = Symbol('');
function Ue() {
    let e = [];
    return {
        add: function (t) {
            return (
                e.push(t),
                () => {
                    const n = e.indexOf(t);
                    n > -1 && e.splice(n, 1);
                }
            );
        },
        list: () => e,
        reset: function () {
            e = [];
        },
    };
}
function Ge(e, t, n, r, o) {
    const a = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () =>
        new Promise((l, s) => {
            const c = e => {
                    var c;
                    !1 === e
                        ? s(ae(4, { from: n, to: t }))
                        : e instanceof Error
                        ? s(e)
                        : 'string' == typeof (c = e) || (c && 'object' == typeof c)
                        ? s(ae(2, { from: t, to: e }))
                        : (a && r.enterCallbacks[o] === a && 'function' == typeof e && a.push(e),
                          l());
                },
                i = e.call(r && r.instances[o], t, n, c);
            let u = Promise.resolve(i);
            e.length < 3 && (u = u.then(c)), u.catch(e => s(e));
        });
}
function Ke(e, t, n, r) {
    const o = [];
    for (const l of e)
        for (const e in l.components) {
            let s = l.components[e];
            if ('beforeRouteEnter' === t || l.instances[e])
                if (
                    'object' == typeof (a = s) ||
                    'displayName' in a ||
                    'props' in a ||
                    '__vccOpts' in a
                ) {
                    const a = (s.__vccOpts || s)[t];
                    a && o.push(Ge(a, n, r, l, e));
                } else {
                    let a = s();
                    o.push(() =>
                        a.then(o => {
                            if (!o)
                                return Promise.reject(
                                    new Error(`Couldn't resolve component "${e}" at "${l.path}"`)
                                );
                            const a =
                                (s = o).__esModule || 'Module' === s[Symbol.toStringTag]
                                    ? o.default
                                    : o;
                            var s;
                            l.components[e] = a;
                            const c = (a.__vccOpts || a)[t];
                            return c && Ge(c, n, r, l, e)();
                        })
                    );
                }
        }
    var a;
    return o;
}
function Je(e) {
    const t = u(He),
        n = u(Ye),
        r = l(() => t.resolve(a(e.to))),
        o = l(() => {
            const { matched: e } = r.value,
                { length: t } = e,
                o = e[t - 1],
                a = n.matched;
            if (!o || !a.length) return -1;
            const l = a.findIndex(D.bind(null, o));
            if (l > -1) return l;
            const s = Qe(e[t - 2]);
            return t > 1 && Qe(o) === s && a[a.length - 1].path !== s
                ? a.findIndex(D.bind(null, e[t - 2]))
                : l;
        }),
        s = l(
            () =>
                o.value > -1 &&
                (function (e, t) {
                    for (const n in t) {
                        const r = t[n],
                            o = e[n];
                        if ('string' == typeof r) {
                            if (r !== o) return !1;
                        } else if (!T(o) || o.length !== r.length || r.some((e, t) => e !== o[t]))
                            return !1;
                    }
                    return !0;
                })(n.params, r.value.params)
        ),
        c = l(
            () => o.value > -1 && o.value === n.matched.length - 1 && $(n.params, r.value.params)
        );
    return {
        route: r,
        href: l(() => r.value.href),
        isActive: s,
        isExactActive: c,
        navigate: function (n = {}) {
            return (function (e) {
                if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
                if (e.defaultPrevented) return;
                if (void 0 !== e.button && 0 !== e.button) return;
                if (e.currentTarget && e.currentTarget.getAttribute) {
                    const t = e.currentTarget.getAttribute('target');
                    if (/\b_blank\b/i.test(t)) return;
                }
                e.preventDefault && e.preventDefault();
                return !0;
            })(n)
                ? t[a(e.replace) ? 'replace' : 'push'](a(e.to)).catch(C)
                : Promise.resolve();
        },
    };
}
const Ze = i({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
        to: { type: [String, Object], required: !0 },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Je,
    setup(e, { slots: t }) {
        const n = s(Je(e)),
            { options: r } = u(He),
            o = l(() => ({
                [Xe(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
                [Xe(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
                    n.isExactActive,
            }));
        return () => {
            const r = t.default && t.default(n);
            return e.custom
                ? r
                : f(
                      'a',
                      {
                          'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                          href: n.href,
                          onClick: n.navigate,
                          class: o.value,
                      },
                      r
                  );
        };
    },
});
function Qe(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Xe = (e, t, n) => (null != e ? e : null != t ? t : n);
function et(e, t) {
    if (!e) return null;
    const n = e(t);
    return 1 === n.length ? n[0] : n;
}
const tt = i({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
        const r = u(Be),
            o = l(() => e.route || r.value),
            s = u(qe, 0),
            c = l(() => {
                let e = a(s);
                const { matched: t } = o.value;
                let n;
                for (; (n = t[e]) && !n.components; ) e++;
                return e;
            }),
            i = l(() => o.value.matched[c.value]);
        m(
            qe,
            l(() => c.value + 1)
        ),
            m(Ve, i),
            m(Be, o);
        const h = p();
        return (
            d(
                () => [h.value, i.value, e.name],
                ([e, t, n], [r, o, a]) => {
                    t &&
                        ((t.instances[n] = e),
                        o &&
                            o !== t &&
                            e &&
                            e === r &&
                            (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards),
                            t.updateGuards.size || (t.updateGuards = o.updateGuards))),
                        !e ||
                            !t ||
                            (o && D(t, o) && r) ||
                            (t.enterCallbacks[n] || []).forEach(t => t(e));
                },
                { flush: 'post' }
            ),
            () => {
                const r = o.value,
                    a = i.value,
                    l = a && a.components[e.name],
                    s = e.name;
                if (!l) return et(n.default, { Component: l, route: r });
                const c = a.props[e.name],
                    u = c ? (!0 === c ? r.params : 'function' == typeof c ? c(r) : c) : null,
                    m = f(
                        l,
                        I({}, u, t, {
                            onVnodeUnmounted: e => {
                                e.component.isUnmounted && (a.instances[s] = null);
                            },
                            ref: h,
                        })
                    );
                return et(n.default, { Component: m, route: r }) || m;
            }
        );
    },
});
function nt(e) {
    return e.reduce((e, t) => e.then(() => t()), Promise.resolve());
}
const rt = [
    {
        path: '/',
        component: () =>
            S(
                () =>
                    Promise.resolve().then(function () {
                        return L;
                    }),
                void 0
            ),
        name: 'Home',
        redirect: '/login',
        children: [
            {
                path: '/login',
                component: () =>
                    S(
                        () => import('./layout.15201d78.js'),
                        [
                            'assets/layout.15201d78.js',
                            'assets/layout.39424014.css',
                            'assets/base.71b693c2.css',
                            'assets/elmentPlus.8c0db000.js',
                            'assets/vue.f0fe4329.js',
                        ]
                    ),
                name: 'Login',
                redirect: '/login/signIn',
                children: [
                    {
                        path: '/login/signIn',
                        name: 'SignIn',
                        component: () =>
                            S(
                                () => import('./index.bc9cdf54.js'),
                                [
                                    'assets/index.bc9cdf54.js',
                                    'assets/index.1da62406.css',
                                    'assets/base.71b693c2.css',
                                    'assets/elmentPlus.8c0db000.js',
                                    'assets/vue.f0fe4329.js',
                                ]
                            ),
                    },
                ],
            },
        ],
    },
];
var ot = (function (e) {
    const t = he(e.routes, e),
        n = e.parseQuery || xe,
        r = e.stringifyQuery || Ae,
        i = e.history,
        u = Ue(),
        f = Ue(),
        m = Ue(),
        p = o(te);
    let d = te;
    P &&
        e.scrollBehavior &&
        'scrollRestoration' in history &&
        (history.scrollRestoration = 'manual');
    const h = R.bind(null, e => '' + e),
        g = R.bind(null, $e),
        v = R.bind(null, Ne);
    function _(e, o) {
        if (((o = I({}, o || p.value)), 'string' == typeof e)) {
            const r = j(n, e, o.path),
                a = t.resolve({ path: r.path }, o),
                l = i.createHref(r.fullPath);
            return I(r, a, {
                params: v(a.params),
                hash: Ne(r.hash),
                redirectedFrom: void 0,
                href: l,
            });
        }
        let a;
        if ('path' in e) a = I({}, e, { path: j(n, e.path, o.path).path });
        else {
            const t = I({}, e.params);
            for (const e in t) null == t[e] && delete t[e];
            (a = I({}, e, { params: g(e.params) })), (o.params = g(o.params));
        }
        const l = t.resolve(a, o),
            s = e.hash || '';
        l.params = h(v(l.params));
        const c = (function (e, t) {
            const n = t.query ? e(t.query) : '';
            return t.path + (n && '?') + n + (t.hash || '');
        })(
            r,
            I({}, e, {
                hash: ((u = s), Me(u).replace(Ce, '{').replace(We, '}').replace(Ie, '^')),
                path: l.path,
            })
        );
        var u;
        const f = i.createHref(c);
        return I({ fullPath: c, hash: s, query: r === Ae ? ze(e.query) : e.query || {} }, l, {
            redirectedFrom: void 0,
            href: f,
        });
    }
    function b(e) {
        return 'string' == typeof e ? j(n, e, p.value.path) : I({}, e);
    }
    function y(e, t) {
        if (d !== e) return ae(8, { from: t, to: e });
    }
    function w(e) {
        return O(e);
    }
    function k(e) {
        const t = e.matched[e.matched.length - 1];
        if (t && t.redirect) {
            const { redirect: n } = t;
            let r = 'function' == typeof n ? n(e) : n;
            return (
                'string' == typeof r &&
                    ((r = r.includes('?') || r.includes('#') ? (r = b(r)) : { path: r }),
                    (r.params = {})),
                I({ query: e.query, hash: e.hash, params: 'path' in r ? {} : e.params }, r)
            );
        }
    }
    function O(e, t) {
        const n = (d = _(e)),
            o = p.value,
            a = e.state,
            l = e.force,
            s = !0 === e.replace,
            c = k(n);
        if (c) return O(I(b(c), { state: a, force: l, replace: s }), t || n);
        const i = n;
        let u;
        return (
            (i.redirectedFrom = t),
            !l &&
                (function (e, t, n) {
                    const r = t.matched.length - 1,
                        o = n.matched.length - 1;
                    return (
                        r > -1 &&
                        r === o &&
                        D(t.matched[r], n.matched[o]) &&
                        $(t.params, n.params) &&
                        e(t.query) === e(n.query) &&
                        t.hash === n.hash
                    );
                })(r, o, n) &&
                ((u = ae(16, { to: i, from: o })), H(o, o, !0, !1)),
            (u ? Promise.resolve(u) : L(i, o))
                .catch(e => (le(e) ? (le(e, 2) ? e : q(e)) : V(e, i, o)))
                .then(e => {
                    if (e) {
                        if (le(e, 2))
                            return O(I(b(e.to), { state: a, force: l, replace: s }), t || i);
                    } else e = S(i, o, !0, s, a);
                    return F(i, o, e), e;
                })
        );
    }
    function E(e, t) {
        const n = y(e, t);
        return n ? Promise.reject(n) : Promise.resolve();
    }
    function L(e, t) {
        let n;
        const [r, o, a] = (function (e, t) {
            const n = [],
                r = [],
                o = [],
                a = Math.max(t.matched.length, e.matched.length);
            for (let l = 0; l < a; l++) {
                const a = t.matched[l];
                a && (e.matched.find(e => D(e, a)) ? r.push(a) : n.push(a));
                const s = e.matched[l];
                s && (t.matched.find(e => D(e, s)) || o.push(s));
            }
            return [n, r, o];
        })(e, t);
        n = Ke(r.reverse(), 'beforeRouteLeave', e, t);
        for (const s of r)
            s.leaveGuards.forEach(r => {
                n.push(Ge(r, e, t));
            });
        const l = E.bind(null, e, t);
        return (
            n.push(l),
            nt(n)
                .then(() => {
                    n = [];
                    for (const r of u.list()) n.push(Ge(r, e, t));
                    return n.push(l), nt(n);
                })
                .then(() => {
                    n = Ke(o, 'beforeRouteUpdate', e, t);
                    for (const r of o)
                        r.updateGuards.forEach(r => {
                            n.push(Ge(r, e, t));
                        });
                    return n.push(l), nt(n);
                })
                .then(() => {
                    n = [];
                    for (const r of e.matched)
                        if (r.beforeEnter && !t.matched.includes(r))
                            if (T(r.beforeEnter))
                                for (const o of r.beforeEnter) n.push(Ge(o, e, t));
                            else n.push(Ge(r.beforeEnter, e, t));
                    return n.push(l), nt(n);
                })
                .then(
                    () => (
                        e.matched.forEach(e => (e.enterCallbacks = {})),
                        (n = Ke(a, 'beforeRouteEnter', e, t)),
                        n.push(l),
                        nt(n)
                    )
                )
                .then(() => {
                    n = [];
                    for (const r of f.list()) n.push(Ge(r, e, t));
                    return n.push(l), nt(n);
                })
                .catch(e => (le(e, 8) ? e : Promise.reject(e)))
        );
    }
    function F(e, t, n) {
        for (const r of m.list()) r(e, t, n);
    }
    function S(e, t, n, r, o) {
        const a = y(e, t);
        if (a) return a;
        const l = t === te,
            s = P ? history.state : {};
        n &&
            (r || l
                ? i.replace(e.fullPath, I({ scroll: l && s && s.scroll }, o))
                : i.push(e.fullPath, o)),
            (p.value = e),
            H(e, t, n, l),
            q();
    }
    let W;
    function M() {
        W ||
            (W = i.listen((e, t, n) => {
                if (!Q.listening) return;
                const r = _(e),
                    o = k(r);
                if (o) return void O(I(o, { replace: !0 }), r).catch(C);
                d = r;
                const a = p.value;
                var l, s;
                P && ((l = K(a.fullPath, n.delta)), (s = U()), J.set(l, s)),
                    L(r, a)
                        .catch(e =>
                            le(e, 12)
                                ? e
                                : le(e, 2)
                                ? (O(e.to, r)
                                      .then(e => {
                                          le(e, 20) && !n.delta && n.type === A.pop && i.go(-1, !1);
                                      })
                                      .catch(C),
                                  Promise.reject())
                                : (n.delta && i.go(-n.delta, !1), V(e, r, a))
                        )
                        .then(e => {
                            (e = e || S(r, a, !1)) &&
                                (n.delta
                                    ? i.go(-n.delta, !1)
                                    : n.type === A.pop && le(e, 20) && i.go(-1, !1)),
                                F(r, a, e);
                        })
                        .catch(C);
            }));
    }
    let N,
        x = Ue(),
        z = Ue();
    function V(e, t, n) {
        q(e);
        const r = z.list();
        return r.length && r.forEach(r => r(e, t, n)), Promise.reject(e);
    }
    function q(e) {
        return N || ((N = !e), M(), x.list().forEach(([t, n]) => (e ? n(e) : t())), x.reset()), e;
    }
    function H(t, n, r, o) {
        const { scrollBehavior: a } = e;
        if (!P || !a) return Promise.resolve();
        const l =
            (!r &&
                (function (e) {
                    const t = J.get(e);
                    return J.delete(e), t;
                })(K(t.fullPath, 0))) ||
            ((o || !r) && history.state && history.state.scroll) ||
            null;
        return c()
            .then(() => a(t, n, l))
            .then(e => e && G(e))
            .catch(e => V(e, t, n));
    }
    const Y = e => i.go(e);
    let B;
    const Z = new Set(),
        Q = {
            currentRoute: p,
            listening: !0,
            addRoute: function (e, n) {
                let r, o;
                return ee(e) ? ((r = t.getRecordMatcher(e)), (o = n)) : (o = e), t.addRoute(o, r);
            },
            removeRoute: function (e) {
                const n = t.getRecordMatcher(e);
                n && t.removeRoute(n);
            },
            hasRoute: function (e) {
                return !!t.getRecordMatcher(e);
            },
            getRoutes: function () {
                return t.getRoutes().map(e => e.record);
            },
            resolve: _,
            options: e,
            push: w,
            replace: function (e) {
                return w(I(b(e), { replace: !0 }));
            },
            go: Y,
            back: () => Y(-1),
            forward: () => Y(1),
            beforeEach: u.add,
            beforeResolve: f.add,
            afterEach: m.add,
            onError: z.add,
            isReady: function () {
                return N && p.value !== te
                    ? Promise.resolve()
                    : new Promise((e, t) => {
                          x.add([e, t]);
                      });
            },
            install(e) {
                e.component('RouterLink', Ze),
                    e.component('RouterView', tt),
                    (e.config.globalProperties.$router = this),
                    Object.defineProperty(e.config.globalProperties, '$route', {
                        enumerable: !0,
                        get: () => a(p),
                    }),
                    P && !B && p.value === te && ((B = !0), w(i.location).catch(e => {}));
                const t = {};
                for (const r in te) t[r] = l(() => p.value[r]);
                e.provide(He, this), e.provide(Ye, s(t)), e.provide(Be, p);
                const n = e.unmount;
                Z.add(e),
                    (e.unmount = function () {
                        Z.delete(e),
                            Z.size < 1 &&
                                ((d = te),
                                W && W(),
                                (W = null),
                                (p.value = te),
                                (B = !1),
                                (N = !1)),
                            n();
                    });
            },
        };
    return Q;
})({
    history: (function (e) {
        const t = X((e = H(e))),
            n = (function (e, t, n, r) {
                let o = [],
                    a = [],
                    l = null;
                const s = ({ state: a }) => {
                    const s = Z(e, location),
                        c = n.value,
                        i = t.value;
                    let u = 0;
                    if (a) {
                        if (((n.value = s), (t.value = a), l && l === c)) return void (l = null);
                        u = i ? a.position - i.position : 0;
                    } else r(s);
                    o.forEach(e => {
                        e(n.value, c, {
                            delta: u,
                            type: A.pop,
                            direction: u ? (u > 0 ? V.forward : V.back) : V.unknown,
                        });
                    });
                };
                function c() {
                    const { history: e } = window;
                    e.state && e.replaceState(I({}, e.state, { scroll: U() }), '');
                }
                return (
                    window.addEventListener('popstate', s),
                    window.addEventListener('beforeunload', c),
                    {
                        pauseListeners: function () {
                            l = n.value;
                        },
                        listen: function (e) {
                            o.push(e);
                            const t = () => {
                                const t = o.indexOf(e);
                                t > -1 && o.splice(t, 1);
                            };
                            return a.push(t), t;
                        },
                        destroy: function () {
                            for (const e of a) e();
                            (a = []),
                                window.removeEventListener('popstate', s),
                                window.removeEventListener('beforeunload', c);
                        },
                    }
                );
            })(e, t.state, t.location, t.replace),
            r = I(
                {
                    location: '',
                    base: e,
                    go: function (e, t = !0) {
                        t || n.pauseListeners(), history.go(e);
                    },
                    createHref: B.bind(null, e),
                },
                t,
                n
            );
        return (
            Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
            Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
            r
        );
    })('/vue3-vite-ts/'),
    routes: rt,
});
/*!
 * @intlify/shared v9.1.10
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const at = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag,
    lt = e => (at ? Symbol(e) : e),
    st = e =>
        JSON.stringify(e)
            .replace(/\u2028/g, '\\u2028')
            .replace(/\u2029/g, '\\u2029')
            .replace(/\u0027/g, '\\u0027'),
    ct = e => 'number' == typeof e && isFinite(e),
    it = e => '[object RegExp]' === Et(e),
    ut = e => Lt(e) && 0 === Object.keys(e).length;
function ft(e, t) {}
const mt = Object.assign;
let pt;
const dt = () =>
    pt ||
    (pt =
        'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
            ? global
            : {});
function ht(e) {
    return e
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
const gt = Object.prototype.hasOwnProperty;
function vt(e, t) {
    return gt.call(e, t);
}
const _t = Array.isArray,
    bt = e => 'function' == typeof e,
    yt = e => 'string' == typeof e,
    wt = e => 'boolean' == typeof e,
    kt = e => null !== e && 'object' == typeof e,
    Ot = Object.prototype.toString,
    Et = e => Ot.call(e),
    Lt = e => '[object Object]' === Et(e),
    Ft = Object.prototype.hasOwnProperty;
function St(e, t) {
    return Ft.call(e, t);
}
const Pt = e => null !== e && 'object' == typeof e,
    It = [];
(It[0] = { w: [0], i: [3, 0], '[': [4], o: [7] }),
    (It[1] = { w: [1], '.': [2], '[': [4], o: [7] }),
    (It[2] = { w: [2], i: [3, 0], 0: [3, 0] }),
    (It[3] = { i: [3, 0], 0: [3, 0], w: [1, 1], '.': [2, 1], '[': [4, 1], o: [7, 1] }),
    (It[4] = { "'": [5, 0], '"': [6, 0], '[': [4, 2], ']': [1, 3], o: 8, l: [4, 0] }),
    (It[5] = { "'": [4, 0], o: 8, l: [5, 0] }),
    (It[6] = { '"': [4, 0], o: 8, l: [6, 0] });
const Rt = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ct(e) {
    if (null == e) return 'o';
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return 'i';
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return 'w';
    }
    return 'i';
}
function Tt(e) {
    const t = e.trim();
    return (
        ('0' !== e.charAt(0) || !isNaN(parseInt(e))) &&
        ((n = t),
        Rt.test(n)
            ? (function (e) {
                  const t = e.charCodeAt(0);
                  return t !== e.charCodeAt(e.length - 1) || (34 !== t && 39 !== t)
                      ? e
                      : e.slice(1, -1);
              })(t)
            : '*' + t)
    );
    var n;
}
const Wt = new Map();
function jt(e, t) {
    if (!Pt(e)) return null;
    let n = Wt.get(t);
    if (
        (n ||
            ((n = (function (e) {
                const t = [];
                let n,
                    r,
                    o,
                    a,
                    l,
                    s,
                    c,
                    i = -1,
                    u = 0,
                    f = 0;
                const m = [];
                function p() {
                    const t = e[i + 1];
                    if ((5 === u && "'" === t) || (6 === u && '"' === t))
                        return i++, (o = '\\' + t), m[0](), !0;
                }
                for (
                    m[0] = () => {
                        void 0 === r ? (r = o) : (r += o);
                    },
                        m[1] = () => {
                            void 0 !== r && (t.push(r), (r = void 0));
                        },
                        m[2] = () => {
                            m[0](), f++;
                        },
                        m[3] = () => {
                            if (f > 0) f--, (u = 4), m[0]();
                            else {
                                if (((f = 0), void 0 === r)) return !1;
                                if (((r = Tt(r)), !1 === r)) return !1;
                                m[1]();
                            }
                        };
                    null !== u;

                )
                    if ((i++, (n = e[i]), '\\' !== n || !p())) {
                        if (((a = Ct(n)), (c = It[u]), (l = c[a] || c.l || 8), 8 === l)) return;
                        if (
                            ((u = l[0]),
                            void 0 !== l[1] && ((s = m[l[1]]), s && ((o = n), !1 === s())))
                        )
                            return;
                        if (7 === u) return t;
                    }
            })(t)),
            n && Wt.set(t, n)),
        !n)
    )
        return null;
    const r = n.length;
    let o = e,
        a = 0;
    for (; a < r; ) {
        const e = o[n[a]];
        if (void 0 === e) return null;
        (o = e), a++;
    }
    return o;
}
function Mt(e) {
    if (!Pt(e)) return e;
    for (const t in e)
        if (St(e, t))
            if (t.includes('.')) {
                const n = t.split('.'),
                    r = n.length - 1;
                let o = e;
                for (let e = 0; e < r; e++) n[e] in o || (o[n[e]] = {}), (o = o[n[e]]);
                (o[n[r]] = e[t]), delete e[t], Pt(o[n[r]]) && Mt(o[n[r]]);
            } else Pt(e[t]) && Mt(e[t]);
    return e;
}
/*!
 * @intlify/runtime v9.1.10
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const Dt = e => e,
    $t = e => '',
    Nt = e => (0 === e.length ? '' : e.join('')),
    xt = e =>
        null == e
            ? ''
            : _t(e) || (Lt(e) && e.toString === Ot)
            ? JSON.stringify(e, null, 2)
            : String(e);
function At(e, t) {
    return (e = Math.abs(e)), 2 === t ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0;
}
function zt(e = {}) {
    const t = e.locale,
        n = (function (e) {
            const t = ct(e.pluralIndex) ? e.pluralIndex : -1;
            return e.named && (ct(e.named.count) || ct(e.named.n))
                ? ct(e.named.count)
                    ? e.named.count
                    : ct(e.named.n)
                    ? e.named.n
                    : t
                : t;
        })(e),
        r = kt(e.pluralRules) && yt(t) && bt(e.pluralRules[t]) ? e.pluralRules[t] : At,
        o = kt(e.pluralRules) && yt(t) && bt(e.pluralRules[t]) ? At : void 0,
        a = e.list || [],
        l = e.named || {};
    ct(e.pluralIndex) &&
        (function (e, t) {
            t.count || (t.count = e), t.n || (t.n = e);
        })(n, l);
    function s(t) {
        const n = bt(e.messages) ? e.messages(t) : !!kt(e.messages) && e.messages[t];
        return n || (e.parent ? e.parent.message(t) : $t);
    }
    const c = Lt(e.processor) && bt(e.processor.normalize) ? e.processor.normalize : Nt,
        i = Lt(e.processor) && bt(e.processor.interpolate) ? e.processor.interpolate : xt,
        u = {
            list: e => a[e],
            named: e => l[e],
            plural: e => e[r(n, e.length, o)],
            linked: (t, n) => {
                const r = s(t)(u);
                return yt(n) ? ((o = n), e.modifiers ? e.modifiers[o] : Dt)(r) : r;
                var o;
            },
            message: s,
            type: Lt(e.processor) && yt(e.processor.type) ? e.processor.type : 'text',
            interpolate: i,
            normalize: c,
        };
    return u;
}
/*!
 * @intlify/message-compiler v9.1.10
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ function Vt(e, t, n = {}) {
    const { domain: r, messages: o, args: a } = n,
        l = new SyntaxError(String(e));
    return (l.code = e), t && (l.location = t), (l.domain = r), l;
}
/*!
 * @intlify/devtools-if v9.1.10
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const qt = 'i18n:init';
/*!
 * @intlify/core-base v9.1.10
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ let Ht = null;
const Yt = Bt('function:translate');
function Bt(e) {
    return t => Ht && Ht.emit(e, t);
}
let Ut = null;
const Gt = e => {
    Ut = e;
};
let Kt = 0;
function Jt(e = {}) {
    const t = yt(e.version) ? e.version : '9.1.10',
        n = yt(e.locale) ? e.locale : 'en-US',
        r =
            _t(e.fallbackLocale) ||
            Lt(e.fallbackLocale) ||
            yt(e.fallbackLocale) ||
            !1 === e.fallbackLocale
                ? e.fallbackLocale
                : n,
        o = Lt(e.messages) ? e.messages : { [n]: {} },
        a = Lt(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} },
        l = Lt(e.numberFormats) ? e.numberFormats : { [n]: {} },
        s = mt({}, e.modifiers || {}, {
            upper: e => (yt(e) ? e.toUpperCase() : e),
            lower: e => (yt(e) ? e.toLowerCase() : e),
            capitalize: e => (yt(e) ? `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}` : e),
        }),
        c = e.pluralRules || {},
        i = bt(e.missing) ? e.missing : null,
        u = (!wt(e.missingWarn) && !it(e.missingWarn)) || e.missingWarn,
        f = (!wt(e.fallbackWarn) && !it(e.fallbackWarn)) || e.fallbackWarn,
        m = !!e.fallbackFormat,
        p = !!e.unresolving,
        d = bt(e.postTranslation) ? e.postTranslation : null,
        h = Lt(e.processor) ? e.processor : null,
        g = !wt(e.warnHtmlMessage) || e.warnHtmlMessage,
        v = !!e.escapeParameter,
        _ = bt(e.messageCompiler) ? e.messageCompiler : undefined,
        b = bt(e.onWarn) ? e.onWarn : ft,
        y = e,
        w = kt(y.__datetimeFormatters) ? y.__datetimeFormatters : new Map(),
        k = kt(y.__numberFormatters) ? y.__numberFormatters : new Map(),
        O = kt(y.__meta) ? y.__meta : {};
    Kt++;
    const E = {
        version: t,
        cid: Kt,
        locale: n,
        fallbackLocale: r,
        messages: o,
        datetimeFormats: a,
        numberFormats: l,
        modifiers: s,
        pluralRules: c,
        missing: i,
        missingWarn: u,
        fallbackWarn: f,
        fallbackFormat: m,
        unresolving: p,
        postTranslation: d,
        processor: h,
        warnHtmlMessage: g,
        escapeParameter: v,
        messageCompiler: _,
        onWarn: b,
        __datetimeFormatters: w,
        __numberFormatters: k,
        __meta: O,
    };
    return (
        __INTLIFY_PROD_DEVTOOLS__ &&
            (function (e, t, n) {
                Ht && Ht.emit(qt, { timestamp: Date.now(), i18n: e, version: t, meta: n });
            })(E, t, O),
        E
    );
}
function Zt(e, t, n, r, o) {
    const { missing: a, onWarn: l } = e;
    if (null !== a) {
        const r = a(e, n, t, o);
        return yt(r) ? r : t;
    }
    return t;
}
function Qt(e, t, n) {
    const r = e;
    r.__localeChainCache || (r.__localeChainCache = new Map());
    let o = r.__localeChainCache.get(n);
    if (!o) {
        o = [];
        let e = [n];
        for (; _t(e); ) e = Xt(o, e, t);
        const a = _t(t) ? t : Lt(t) ? (t.default ? t.default : null) : t;
        (e = yt(a) ? [a] : a), _t(e) && Xt(o, e, !1), r.__localeChainCache.set(n, o);
    }
    return o;
}
function Xt(e, t, n) {
    let r = !0;
    for (let o = 0; o < t.length && wt(r); o++) {
        const a = t[o];
        yt(a) && (r = en(e, t[o], n));
    }
    return r;
}
function en(e, t, n) {
    let r;
    const o = t.split('-');
    do {
        (r = tn(e, o.join('-'), n)), o.splice(-1, 1);
    } while (o.length && !0 === r);
    return r;
}
function tn(e, t, n) {
    let r = !1;
    if (!e.includes(t) && ((r = !0), t)) {
        r = '!' !== t[t.length - 1];
        const o = t.replace(/!/g, '');
        e.push(o), (_t(n) || Lt(n)) && n[o] && (r = n[o]);
    }
    return r;
}
function nn(e, t, n) {
    (e.__localeChainCache = new Map()), Qt(e, n, t);
}
function rn(e) {
    return Vt(e, null, void 0);
}
const on = () => '',
    an = e => bt(e);
function ln(e, ...t) {
    const {
            fallbackFormat: n,
            postTranslation: r,
            unresolving: o,
            fallbackLocale: a,
            messages: l,
        } = e,
        [s, c] = cn(...t),
        i =
            (wt(c.missingWarn) ? c.missingWarn : e.missingWarn,
            wt(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
            wt(c.escapeParameter) ? c.escapeParameter : e.escapeParameter),
        u = !!c.resolvedMessage,
        f = yt(c.default) || wt(c.default) ? (wt(c.default) ? s : c.default) : n ? s : '',
        m = n || '' !== f,
        p = yt(c.locale) ? c.locale : e.locale;
    i &&
        (function (e) {
            _t(e.list)
                ? (e.list = e.list.map(e => (yt(e) ? ht(e) : e)))
                : kt(e.named) &&
                  Object.keys(e.named).forEach(t => {
                      yt(e.named[t]) && (e.named[t] = ht(e.named[t]));
                  });
        })(c);
    let [d, h, g] = u
            ? [s, p, l[p] || {}]
            : (function (e, t, n, r, o, a) {
                  const { messages: l, onWarn: s } = e,
                      c = Qt(e, r, n);
                  let i,
                      u = {},
                      f = null;
                  const m = 'translate';
                  for (
                      let p = 0;
                      p < c.length &&
                      ((i = c[p]),
                      (u = l[i] || {}),
                      null === (f = jt(u, t)) && (f = u[t]),
                      !yt(f) && !bt(f));
                      p++
                  ) {
                      const n = Zt(e, t, i, 0, m);
                      n !== t && (f = n);
                  }
                  return [f, i, u];
              })(e, s, p, a),
        v = s;
    if ((u || yt(d) || an(d) || (m && ((d = f), (v = d))), !(u || ((yt(d) || an(d)) && yt(h)))))
        return o ? -1 : s;
    let _ = !1;
    const b = an(d)
        ? d
        : sn(e, s, h, d, v, () => {
              _ = !0;
          });
    if (_) return d;
    const y = (function (e, t, n, r) {
            const { modifiers: o, pluralRules: a } = e,
                l = r => {
                    const o = jt(n, r);
                    if (yt(o)) {
                        let n = !1;
                        const a = sn(e, r, t, o, r, () => {
                            n = !0;
                        });
                        return n ? on : a;
                    }
                    return an(o) ? o : on;
                },
                s = { locale: t, modifiers: o, pluralRules: a, messages: l };
            e.processor && (s.processor = e.processor);
            r.list && (s.list = r.list);
            r.named && (s.named = r.named);
            ct(r.plural) && (s.pluralIndex = r.plural);
            return s;
        })(e, h, g, c),
        w = (function (e, t, n) {
            return t(n);
        })(0, b, zt(y)),
        k = r ? r(w) : w;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const t = {
            timestamp: Date.now(),
            key: yt(s) ? s : an(d) ? d.key : '',
            locale: h || (an(d) ? d.locale : ''),
            format: yt(d) ? d : an(d) ? d.source : '',
            message: k,
        };
        (t.meta = mt({}, e.__meta, Ut || {})), Yt(t);
    }
    return k;
}
function sn(e, t, n, r, o, a) {
    const { messageCompiler: l, warnHtmlMessage: s } = e;
    if (an(r)) {
        const e = r;
        return (e.locale = e.locale || n), (e.key = e.key || t), e;
    }
    const c = l(
        r,
        (function (e, t, n, r, o, a) {
            return {
                warnHtmlMessage: o,
                onError: e => {
                    throw (a && a(e), e);
                },
                onCacheKey: e => ((e, t, n) => st({ l: e, k: t, s: n }))(t, n, e),
            };
        })(0, n, o, 0, s, a)
    );
    return (c.locale = n), (c.key = t), (c.source = r), c;
}
function cn(...e) {
    const [t, n, r] = e,
        o = {};
    if (!yt(t) && !ct(t) && !an(t)) throw rn(14);
    const a = ct(t) ? String(t) : (an(t), t);
    return (
        ct(n)
            ? (o.plural = n)
            : yt(n)
            ? (o.default = n)
            : Lt(n) && !ut(n)
            ? (o.named = n)
            : _t(n) && (o.list = n),
        ct(r) ? (o.plural = r) : yt(r) ? (o.default = r) : Lt(r) && mt(o, r),
        [a, o]
    );
}
function un(e, ...t) {
    const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a } = e,
        { __datetimeFormatters: l } = e,
        [s, c, i, u] = fn(...t);
    wt(i.missingWarn) ? i.missingWarn : e.missingWarn;
    wt(i.fallbackWarn) ? i.fallbackWarn : e.fallbackWarn;
    const f = !!i.part,
        m = yt(i.locale) ? i.locale : e.locale,
        p = Qt(e, o, m);
    if (!yt(s) || '' === s) return new Intl.DateTimeFormat(m).format(c);
    let d,
        h = {},
        g = null;
    for (let b = 0; b < p.length && ((d = p[b]), (h = n[d] || {}), (g = h[s]), !Lt(g)); b++)
        Zt(e, s, d, 0, 'datetime format');
    if (!Lt(g) || !yt(d)) return r ? -1 : s;
    let v = `${d}__${s}`;
    ut(u) || (v = `${v}__${JSON.stringify(u)}`);
    let _ = l.get(v);
    return (
        _ || ((_ = new Intl.DateTimeFormat(d, mt({}, g, u))), l.set(v, _)),
        f ? _.formatToParts(c) : _.format(c)
    );
}
function fn(...e) {
    const [t, n, r, o] = e;
    let a,
        l = {},
        s = {};
    if (yt(t)) {
        if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t)) throw rn(16);
        a = new Date(t);
        try {
            a.toISOString();
        } catch (c) {
            throw rn(16);
        }
    } else if ('[object Date]' === Et(t)) {
        if (isNaN(t.getTime())) throw rn(15);
        a = t;
    } else {
        if (!ct(t)) throw rn(14);
        a = t;
    }
    return (
        yt(n) ? (l.key = n) : Lt(n) && (l = n),
        yt(r) ? (l.locale = r) : Lt(r) && (s = r),
        Lt(o) && (s = o),
        [l.key || '', a, l, s]
    );
}
function mn(e, t, n) {
    const r = e;
    for (const o in n) {
        const e = `${t}__${o}`;
        r.__datetimeFormatters.has(e) && r.__datetimeFormatters.delete(e);
    }
}
function pn(e, ...t) {
    const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a } = e,
        { __numberFormatters: l } = e,
        [s, c, i, u] = dn(...t);
    wt(i.missingWarn) ? i.missingWarn : e.missingWarn;
    wt(i.fallbackWarn) ? i.fallbackWarn : e.fallbackWarn;
    const f = !!i.part,
        m = yt(i.locale) ? i.locale : e.locale,
        p = Qt(e, o, m);
    if (!yt(s) || '' === s) return new Intl.NumberFormat(m).format(c);
    let d,
        h = {},
        g = null;
    for (let b = 0; b < p.length && ((d = p[b]), (h = n[d] || {}), (g = h[s]), !Lt(g)); b++)
        Zt(e, s, d, 0, 'number format');
    if (!Lt(g) || !yt(d)) return r ? -1 : s;
    let v = `${d}__${s}`;
    ut(u) || (v = `${v}__${JSON.stringify(u)}`);
    let _ = l.get(v);
    return (
        _ || ((_ = new Intl.NumberFormat(d, mt({}, g, u))), l.set(v, _)),
        f ? _.formatToParts(c) : _.format(c)
    );
}
function dn(...e) {
    const [t, n, r, o] = e;
    let a = {},
        l = {};
    if (!ct(t)) throw rn(14);
    const s = t;
    return (
        yt(n) ? (a.key = n) : Lt(n) && (a = n),
        yt(r) ? (a.locale = r) : Lt(r) && (l = r),
        Lt(o) && (l = o),
        [a.key || '', s, a, l]
    );
}
function hn(e, t, n) {
    const r = e;
    for (const o in n) {
        const e = `${t}__${o}`;
        r.__numberFormatters.has(e) && r.__numberFormatters.delete(e);
    }
}
'boolean' != typeof __INTLIFY_PROD_DEVTOOLS__ && (dt().__INTLIFY_PROD_DEVTOOLS__ = !1);
function gn(e, ...t) {
    return Vt(e, null, void 0);
}
const vn = lt('__transrateVNode'),
    _n = lt('__datetimeParts'),
    bn = lt('__numberParts');
lt('__enableEmitter'), lt('__disableEmitter');
const yn = lt('__setPluralRules');
lt('__intlifyMeta');
const wn = lt('__injectWithOption');
let kn = 0;
function On(e) {
    return (t, n, r, o) => e(n, r, g() || void 0, o);
}
function En(e, t) {
    const { messages: n, __i18n: r } = t,
        o = Lt(n) ? n : _t(r) ? {} : { [e]: {} };
    if (
        (_t(r) &&
            r.forEach(({ locale: e, resource: t }) => {
                e ? ((o[e] = o[e] || {}), Fn(t, o[e])) : Fn(t, o);
            }),
        t.flatJson)
    )
        for (const a in o) vt(o, a) && Mt(o[a]);
    return o;
}
const Ln = e => !kt(e) || _t(e);
function Fn(e, t) {
    if (Ln(e) || Ln(t)) throw gn(20);
    for (const n in e) vt(e, n) && (Ln(e[n]) || Ln(t[n]) ? (t[n] = e[n]) : Fn(e[n], t[n]));
}
function Sn(e = {}) {
    const { __root: t } = e,
        r = void 0 === t;
    let o = !wt(e.inheritLocale) || e.inheritLocale;
    const a = p(t && o ? t.locale.value : yt(e.locale) ? e.locale : 'en-US'),
        s = p(
            t && o
                ? t.fallbackLocale.value
                : yt(e.fallbackLocale) ||
                  _t(e.fallbackLocale) ||
                  Lt(e.fallbackLocale) ||
                  !1 === e.fallbackLocale
                ? e.fallbackLocale
                : a.value
        ),
        c = p(En(a.value, e)),
        i = p(Lt(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }),
        u = p(Lt(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
    let f = t ? t.missingWarn : (!wt(e.missingWarn) && !it(e.missingWarn)) || e.missingWarn,
        m = t ? t.fallbackWarn : (!wt(e.fallbackWarn) && !it(e.fallbackWarn)) || e.fallbackWarn,
        h = t ? t.fallbackRoot : !wt(e.fallbackRoot) || e.fallbackRoot,
        v = !!e.fallbackFormat,
        _ = bt(e.missing) ? e.missing : null,
        b = bt(e.missing) ? On(e.missing) : null,
        w = bt(e.postTranslation) ? e.postTranslation : null,
        k = !wt(e.warnHtmlMessage) || e.warnHtmlMessage,
        O = !!e.escapeParameter;
    const E = t ? t.modifiers : Lt(e.modifiers) ? e.modifiers : {};
    let L,
        F = e.pluralRules || (t && t.pluralRules);
    (L = Jt({
        version: '9.1.10',
        locale: a.value,
        fallbackLocale: s.value,
        messages: c.value,
        datetimeFormats: i.value,
        numberFormats: u.value,
        modifiers: E,
        pluralRules: F,
        missing: null === b ? void 0 : b,
        missingWarn: f,
        fallbackWarn: m,
        fallbackFormat: v,
        unresolving: !0,
        postTranslation: null === w ? void 0 : w,
        warnHtmlMessage: k,
        escapeParameter: O,
        __datetimeFormatters: Lt(L) ? L.__datetimeFormatters : void 0,
        __numberFormatters: Lt(L) ? L.__numberFormatters : void 0,
        __v_emitter: Lt(L) ? L.__v_emitter : void 0,
        __meta: { framework: 'vue' },
    })),
        nn(L, a.value, s.value);
    const S = l({
            get: () => a.value,
            set: e => {
                (a.value = e), (L.locale = a.value);
            },
        }),
        P = l({
            get: () => s.value,
            set: e => {
                (s.value = e), (L.fallbackLocale = s.value), nn(L, a.value, e);
            },
        }),
        I = l(() => c.value),
        R = l(() => i.value),
        C = l(() => u.value);
    function T(e, n, r, o, l, f) {
        let m;
        if ((a.value, s.value, c.value, i.value, u.value, __INTLIFY_PROD_DEVTOOLS__))
            try {
                Gt(
                    (() => {
                        const e = g();
                        return e && e.type.__INTLIFY_META__
                            ? { __INTLIFY_META__: e.type.__INTLIFY_META__ }
                            : null;
                    })()
                ),
                    (m = e(L));
            } finally {
                Gt(null);
            }
        else m = e(L);
        if (ct(m) && -1 === m) {
            const [e, r] = n();
            return t && h ? o(t) : l(e);
        }
        if (f(m)) return m;
        throw gn(14);
    }
    function W(...e) {
        return T(
            t => ln(t, ...e),
            () => cn(...e),
            0,
            t => t.t(...e),
            e => e,
            e => yt(e)
        );
    }
    const j = {
        normalize: function (e) {
            return e.map(e => (yt(e) ? n(y, null, e, 0) : e));
        },
        interpolate: e => e,
        type: 'vnode',
    };
    function M(e) {
        return c.value[e] || {};
    }
    kn++,
        t &&
            (d(t.locale, e => {
                o && ((a.value = e), (L.locale = e), nn(L, a.value, s.value));
            }),
            d(t.fallbackLocale, e => {
                o && ((s.value = e), (L.fallbackLocale = e), nn(L, a.value, s.value));
            }));
    return {
        id: kn,
        locale: S,
        fallbackLocale: P,
        get inheritLocale() {
            return o;
        },
        set inheritLocale(e) {
            (o = e),
                e &&
                    t &&
                    ((a.value = t.locale.value),
                    (s.value = t.fallbackLocale.value),
                    nn(L, a.value, s.value));
        },
        get availableLocales() {
            return Object.keys(c.value).sort();
        },
        messages: I,
        datetimeFormats: R,
        numberFormats: C,
        get modifiers() {
            return E;
        },
        get pluralRules() {
            return F || {};
        },
        get isGlobal() {
            return r;
        },
        get missingWarn() {
            return f;
        },
        set missingWarn(e) {
            (f = e), (L.missingWarn = f);
        },
        get fallbackWarn() {
            return m;
        },
        set fallbackWarn(e) {
            (m = e), (L.fallbackWarn = m);
        },
        get fallbackRoot() {
            return h;
        },
        set fallbackRoot(e) {
            h = e;
        },
        get fallbackFormat() {
            return v;
        },
        set fallbackFormat(e) {
            (v = e), (L.fallbackFormat = v);
        },
        get warnHtmlMessage() {
            return k;
        },
        set warnHtmlMessage(e) {
            (k = e), (L.warnHtmlMessage = e);
        },
        get escapeParameter() {
            return O;
        },
        set escapeParameter(e) {
            (O = e), (L.escapeParameter = e);
        },
        t: W,
        rt: function (...e) {
            const [t, n, r] = e;
            if (r && !kt(r)) throw gn(15);
            return W(t, n, mt({ resolvedMessage: !0 }, r || {}));
        },
        d: function (...e) {
            return T(
                t => un(t, ...e),
                () => fn(...e),
                0,
                t => t.d(...e),
                () => '',
                e => yt(e)
            );
        },
        n: function (...e) {
            return T(
                t => pn(t, ...e),
                () => dn(...e),
                0,
                t => t.n(...e),
                () => '',
                e => yt(e)
            );
        },
        te: function (e, t) {
            return null !== jt(M(yt(t) ? t : a.value), e);
        },
        tm: function (e) {
            const n = (function (e) {
                let t = null;
                const n = Qt(L, s.value, a.value);
                for (let r = 0; r < n.length; r++) {
                    const o = jt(c.value[n[r]] || {}, e);
                    if (null != o) {
                        t = o;
                        break;
                    }
                }
                return t;
            })(e);
            return null != n ? n : (t && t.tm(e)) || {};
        },
        getLocaleMessage: M,
        setLocaleMessage: function (e, t) {
            (c.value[e] = t), (L.messages = c.value);
        },
        mergeLocaleMessage: function (e, t) {
            (c.value[e] = c.value[e] || {}), Fn(t, c.value[e]), (L.messages = c.value);
        },
        getDateTimeFormat: function (e) {
            return i.value[e] || {};
        },
        setDateTimeFormat: function (e, t) {
            (i.value[e] = t), (L.datetimeFormats = i.value), mn(L, e, t);
        },
        mergeDateTimeFormat: function (e, t) {
            (i.value[e] = mt(i.value[e] || {}, t)), (L.datetimeFormats = i.value), mn(L, e, t);
        },
        getNumberFormat: function (e) {
            return u.value[e] || {};
        },
        setNumberFormat: function (e, t) {
            (u.value[e] = t), (L.numberFormats = u.value), hn(L, e, t);
        },
        mergeNumberFormat: function (e, t) {
            (u.value[e] = mt(u.value[e] || {}, t)), (L.numberFormats = u.value), hn(L, e, t);
        },
        getPostTranslationHandler: function () {
            return bt(w) ? w : null;
        },
        setPostTranslationHandler: function (e) {
            (w = e), (L.postTranslation = e);
        },
        getMissingHandler: function () {
            return _;
        },
        setMissingHandler: function (e) {
            null !== e && (b = On(e)), (_ = e), (L.missing = b);
        },
        [vn]: function (...e) {
            return T(
                t => {
                    let n;
                    const r = t;
                    try {
                        (r.processor = j), (n = ln(r, ...e));
                    } finally {
                        r.processor = null;
                    }
                    return n;
                },
                () => cn(...e),
                0,
                t => t[vn](...e),
                e => [n(y, null, e, 0)],
                e => _t(e)
            );
        },
        [bn]: function (...e) {
            return T(
                t => pn(t, ...e),
                () => dn(...e),
                0,
                t => t[bn](...e),
                () => [],
                e => yt(e) || _t(e)
            );
        },
        [_n]: function (...e) {
            return T(
                t => un(t, ...e),
                () => fn(...e),
                0,
                t => t[_n](...e),
                () => [],
                e => yt(e) || _t(e)
            );
        },
        [yn]: function (e) {
            (F = e), (L.pluralRules = F);
        },
        [wn]: e.__injectWithOption,
    };
}
const Pn = {
        tag: { type: [String, Object] },
        locale: { type: String },
        scope: {
            type: String,
            validator: e => 'parent' === e || 'global' === e,
            default: 'parent',
        },
        i18n: { type: Object },
    },
    In = {
        name: 'i18n-t',
        props: mt(
            {
                keypath: { type: String, required: !0 },
                plural: { type: [Number, String], validator: e => ct(e) || !isNaN(e) },
            },
            Pn
        ),
        setup(e, t) {
            const { slots: n, attrs: r } = t,
                o = e.i18n || Dn({ useScope: e.scope, __useComponent: !0 }),
                a = Object.keys(n).filter(e => '_' !== e);
            return () => {
                const n = {};
                e.locale && (n.locale = e.locale),
                    void 0 !== e.plural && (n.plural = yt(e.plural) ? +e.plural : e.plural);
                const l = (function ({ slots: e }, t) {
                        return 1 === t.length && 'default' === t[0]
                            ? e.default
                                ? e.default()
                                : []
                            : t.reduce((t, n) => {
                                  const r = e[n];
                                  return r && (t[n] = r()), t;
                              }, {});
                    })(t, a),
                    s = o[vn](e.keypath, l, n),
                    c = mt({}, r);
                return yt(e.tag) || kt(e.tag) ? f(e.tag, c, s) : f(h, c, s);
            };
        },
    };
function Rn(e, t, n, r) {
    const { slots: o, attrs: a } = t;
    return () => {
        const t = { part: !0 };
        let l = {};
        e.locale && (t.locale = e.locale),
            yt(e.format)
                ? (t.key = e.format)
                : kt(e.format) &&
                  (yt(e.format.key) && (t.key = e.format.key),
                  (l = Object.keys(e.format).reduce(
                      (t, r) => (n.includes(r) ? mt({}, t, { [r]: e.format[r] }) : t),
                      {}
                  )));
        const s = r(e.value, t, l);
        let c = [t.key];
        _t(s)
            ? (c = s.map((e, t) => {
                  const n = o[e.type];
                  return n ? n({ [e.type]: e.value, index: t, parts: s }) : [e.value];
              }))
            : yt(s) && (c = [s]);
        const i = mt({}, a);
        return yt(e.tag) || kt(e.tag) ? f(e.tag, i, c) : f(h, i, c);
    };
}
const Cn = [
        'localeMatcher',
        'style',
        'unit',
        'unitDisplay',
        'currency',
        'currencyDisplay',
        'useGrouping',
        'numberingSystem',
        'minimumIntegerDigits',
        'minimumFractionDigits',
        'maximumFractionDigits',
        'minimumSignificantDigits',
        'maximumSignificantDigits',
        'notation',
        'formatMatcher',
    ],
    Tn = {
        name: 'i18n-n',
        props: mt(
            { value: { type: Number, required: !0 }, format: { type: [String, Object] } },
            Pn
        ),
        setup(e, t) {
            const n = e.i18n || Dn({ useScope: 'parent', __useComponent: !0 });
            return Rn(e, t, Cn, (...e) => n[bn](...e));
        },
    },
    Wn = [
        'dateStyle',
        'timeStyle',
        'fractionalSecondDigits',
        'calendar',
        'dayPeriod',
        'numberingSystem',
        'localeMatcher',
        'timeZone',
        'hour12',
        'hourCycle',
        'formatMatcher',
        'weekday',
        'era',
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'timeZoneName',
    ],
    jn = {
        name: 'i18n-d',
        props: mt(
            { value: { type: [Number, Date], required: !0 }, format: { type: [String, Object] } },
            Pn
        ),
        setup(e, t) {
            const n = e.i18n || Dn({ useScope: 'parent', __useComponent: !0 });
            return Rn(e, t, Wn, (...e) => n[_n](...e));
        },
    };
function Mn(e) {
    const t = (t, { instance: n, value: r, modifiers: o }) => {
        if (!n || !n.$) throw gn(22);
        const a = (function (e, t) {
                const n = e;
                if ('composition' === e.mode) return n.__getInstance(t) || e.global;
                {
                    const r = n.__getInstance(t);
                    return null != r ? r.__composer : e.global.__composer;
                }
            })(e, n.$),
            l = (function (e) {
                if (yt(e)) return { path: e };
                if (Lt(e)) {
                    if (!('path' in e)) throw gn(19);
                    return e;
                }
                throw gn(20);
            })(r);
        t.textContent = a.t(
            ...(function (e) {
                const { path: t, locale: n, args: r, choice: o, plural: a } = e,
                    l = {},
                    s = r || {};
                yt(n) && (l.locale = n);
                ct(o) && (l.plural = o);
                ct(a) && (l.plural = a);
                return [t, s, l];
            })(l)
        );
    };
    return { beforeMount: t, beforeUpdate: t };
}
function Dn(e = {}) {
    const t = g();
    if (null == t) throw gn(16);
    if (!t.appContext.app.__VUE_I18N_SYMBOL__) throw gn(17);
    const n = u(t.appContext.app.__VUE_I18N_SYMBOL__);
    if (!n) throw gn(22);
    const r = 'composition' === n.mode ? n.global : n.global.__composer,
        o = ut(e) ? ('__i18n' in t.type ? 'local' : 'global') : e.useScope ? e.useScope : 'local';
    if ('global' === o) {
        let n = kt(e.messages) ? e.messages : {};
        '__i18nGlobal' in t.type &&
            (n = En(r.locale.value, { messages: n, __i18n: t.type.__i18nGlobal }));
        const o = Object.keys(n);
        if (
            (o.length &&
                o.forEach(e => {
                    r.mergeLocaleMessage(e, n[e]);
                }),
            kt(e.datetimeFormats))
        ) {
            const t = Object.keys(e.datetimeFormats);
            t.length &&
                t.forEach(t => {
                    r.mergeDateTimeFormat(t, e.datetimeFormats[t]);
                });
        }
        if (kt(e.numberFormats)) {
            const t = Object.keys(e.numberFormats);
            t.length &&
                t.forEach(t => {
                    r.mergeNumberFormat(t, e.numberFormats[t]);
                });
        }
        return r;
    }
    if ('parent' === o) {
        let o = (function (e, t, n = !1) {
            let r = null;
            const o = t.root;
            let a = t.parent;
            for (; null != a; ) {
                const t = e;
                if ('composition' === e.mode) r = t.__getInstance(a);
                else {
                    const e = t.__getInstance(a);
                    null != e && (r = e.__composer), n && r && !r[wn] && (r = null);
                }
                if (null != r) break;
                if (o === a) break;
                a = a.parent;
            }
            return r;
        })(n, t, e.__useComponent);
        return null == o && (o = r), o;
    }
    if ('legacy' === n.mode) throw gn(18);
    const a = n;
    let l = a.__getInstance(t);
    if (null == l) {
        const n = t.type,
            o = mt({}, e);
        n.__i18n && (o.__i18n = n.__i18n),
            r && (o.__root = r),
            (l = Sn(o)),
            (function (e, t, n) {
                v(() => {}, t),
                    _(() => {
                        e.__deleteInstance(t);
                    }, t);
            })(a, t),
            a.__setInstance(t, l);
    }
    return l;
}
const $n = ['locale', 'fallbackLocale', 'availableLocales'],
    Nn = ['t', 'rt', 'd', 'n', 'tm'];
if (
    ('boolean' != typeof __INTLIFY_PROD_DEVTOOLS__ && (dt().__INTLIFY_PROD_DEVTOOLS__ = !1),
    __INTLIFY_PROD_DEVTOOLS__)
) {
    const e = dt();
    (e.__INTLIFY__ = !0), (xn = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__), (Ht = xn);
}
var xn;
const An = (function (e = {}) {
    const t = !!e.globalInjection,
        n = new Map(),
        r = Sn(e),
        o = lt(''),
        a = {
            get mode() {
                return 'composition';
            },
            async install(e, ...n) {
                (e.__VUE_I18N_SYMBOL__ = o),
                    e.provide(e.__VUE_I18N_SYMBOL__, a),
                    t &&
                        (function (e, t) {
                            const n = Object.create(null);
                            $n.forEach(e => {
                                const r = Object.getOwnPropertyDescriptor(t, e);
                                if (!r) throw gn(22);
                                const o = b(r.value)
                                    ? {
                                          get: () => r.value.value,
                                          set(e) {
                                              r.value.value = e;
                                          },
                                      }
                                    : { get: () => r.get && r.get() };
                                Object.defineProperty(n, e, o);
                            }),
                                (e.config.globalProperties.$i18n = n),
                                Nn.forEach(n => {
                                    const r = Object.getOwnPropertyDescriptor(t, n);
                                    if (!r || !r.value) throw gn(22);
                                    Object.defineProperty(e.config.globalProperties, `$${n}`, r);
                                });
                        })(e, a.global),
                    (function (e, t, ...n) {
                        const r = Lt(n[0]) ? n[0] : {},
                            o = !!r.useI18nComponentName;
                        (!wt(r.globalInstall) || r.globalInstall) &&
                            (e.component(o ? 'i18n' : In.name, In),
                            e.component(Tn.name, Tn),
                            e.component(jn.name, jn)),
                            e.directive('t', Mn(t));
                    })(e, a, ...n);
            },
            get global() {
                return r;
            },
            __instances: n,
            __getInstance: e => n.get(e) || null,
            __setInstance(e, t) {
                n.set(e, t);
            },
            __deleteInstance(e) {
                n.delete(e);
            },
        };
    return a;
})({
    locale: 'zh',
    legacy: !0,
    messages: {
        en: {
            userName: e => {
                const { normalize: t } = e;
                return t(['UserName']);
            },
            password: e => {
                const { normalize: t } = e;
                return t(['Password']);
            },
            submit: e => {
                const { normalize: t } = e;
                return t(['Submit']);
            },
            reset: e => {
                const { normalize: t } = e;
                return t(['Reset']);
            },
            loginBanner: e => {
                const { normalize: t } = e;
                return t(['Login Page']);
            },
            changeLanguage: e => {
                const { normalize: t } = e;
                return t(['Change Language']);
            },
            rememberPassword: e => {
                const { normalize: t } = e;
                return t(['Remember']);
            },
            forgetPassword: e => {
                const { normalize: t } = e;
                return t(['Forget?']);
            },
        },
        zh: {
            userName: e => {
                const { normalize: t } = e;
                return t(['用户名']);
            },
            password: e => {
                const { normalize: t } = e;
                return t(['密码']);
            },
            submit: e => {
                const { normalize: t } = e;
                return t(['提交']);
            },
            reset: e => {
                const { normalize: t } = e;
                return t(['重置']);
            },
            loginBanner: e => {
                const { normalize: t } = e;
                return t(['登录页']);
            },
            changeLanguage: e => {
                const { normalize: t } = e;
                return t(['切换语言']);
            },
            rememberPassword: e => {
                const { normalize: t } = e;
                return t(['记住密码']);
            },
            forgetPassword: e => {
                const { normalize: t } = e;
                return t(['忘记密码？']);
            },
        },
    },
    fallbackLocale: 'zh',
});
var zn = {
    install: e => {
        e.use(An);
    },
};
ot.beforeEach((e, t, n) => {
    e.path.includes('login') || sessionStorage.token ? n() : n('/login');
}),
    w(E).use(ot).use(zn).mount('#app');
export { k as _, Dn as u };
