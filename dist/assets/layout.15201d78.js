/* empty css             */ import { _ as a, u as e } from './index.88ab13b0.js';
import { E as s, a as l } from './elmentPlus.8c0db000.js';
import {
    x as o,
    a as n,
    c as r,
    b as t,
    Q as i,
    u,
    O as c,
    L as d,
    I as v,
    a8 as m,
    n as f,
    ah as g,
    ai as p,
    Y as b,
    K as y,
    a3 as x,
} from './vue.f0fe4329.js';
const _ = { class: 'login' },
    h = { class: 'banner' },
    j = { style: { flex: '1', 'padding-top': '100px' } },
    L = { class: 'form' },
    V = (a => (g('data-v-22c58eec'), (a = a()), p(), a))(() =>
        t(
            'div',
            { class: 'footer' },
            [
                x(' ©2019 Easy Binary Forms . All rights reserved | Design by '),
                t('em', { style: { color: 'orangered' } }, 'vue3-vite-ts'),
            ],
            -1
        )
    ),
    B = { class: 'changeLuanguage' },
    E = { style: { 'font-size': '16px', color: '#fff', 'margin-right': '12px' } };
var I = a(
    o({
        __name: 'layout',
        setup(a) {
            const { t: o, locale: g, availableLocales: p } = e();
            return (a, e) => {
                const x = b('router-view'),
                    I = s,
                    k = l;
                return (
                    n(),
                    r('div', _, [
                        t('div', h, i(u(o)('loginBanner')), 1),
                        t('div', j, [t('div', L, [c(x)])]),
                        V,
                        t('div', B, [
                            t('span', E, i(u(o)('changeLanguage')), 1),
                            c(
                                k,
                                {
                                    modelValue: u(g),
                                    'onUpdate:modelValue':
                                        e[0] || (e[0] = a => (f(g) ? (g.value = a) : null)),
                                },
                                {
                                    default: d(() => [
                                        (n(!0),
                                        r(
                                            v,
                                            null,
                                            m(
                                                u(p),
                                                a => (
                                                    n(),
                                                    y(I, { key: a, label: a, value: a }, null, 8, [
                                                        'label',
                                                        'value',
                                                    ])
                                                )
                                            ),
                                            128
                                        )),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['modelValue']
                            ),
                        ]),
                    ])
                );
            };
        },
    }),
    [['__scopeId', 'data-v-22c58eec']]
);
export { I as default };
