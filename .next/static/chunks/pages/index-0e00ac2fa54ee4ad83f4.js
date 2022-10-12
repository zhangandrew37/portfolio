(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6071: function (n, t, e) {
      "use strict";
      var r = e(3038),
        i = e(862);
      t.default = void 0;
      var o = i(e(7294)),
        a = e(1689),
        s = e(2441),
        u = e(5749),
        l = {};
      function d(n, t, e, r) {
        if (n && (0, a.isLocalURL)(t)) {
          n.prefetch(t, e, r).catch(function (n) {
            0;
          });
          var i =
            r && "undefined" !== typeof r.locale ? r.locale : n && n.locale;
          l[t + "%" + e + (i ? "%" + i : "")] = !0;
        }
      }
      var c = function (n) {
        var t = !1 !== n.prefetch,
          e = (0, s.useRouter)(),
          i = (e && e.asPath) || "/",
          c = o.default.useMemo(
            function () {
              var t = (0, a.resolveHref)(i, n.href, !0),
                e = r(t, 2),
                o = e[0],
                s = e[1];
              return {
                href: o,
                as: n.as ? (0, a.resolveHref)(i, n.as) : s || o,
              };
            },
            [i, n.href, n.as]
          ),
          p = c.href,
          f = c.as,
          x = n.children,
          h = n.replace,
          m = n.shallow,
          g = n.scroll,
          b = n.locale;
        "string" === typeof x && (x = o.default.createElement("a", null, x));
        var j = o.Children.only(x),
          v = j && "object" === typeof j && j.ref,
          y = (0, u.useIntersection)({ rootMargin: "200px" }),
          w = r(y, 2),
          k = w[0],
          C = w[1],
          z = o.default.useCallback(
            function (n) {
              k(n),
                v &&
                  ("function" === typeof v
                    ? v(n)
                    : "object" === typeof v && (v.current = n));
            },
            [v, k]
          );
        (0, o.useEffect)(
          function () {
            var n = C && t && (0, a.isLocalURL)(p),
              r = "undefined" !== typeof b ? b : e && e.locale,
              i = l[p + "%" + f + (r ? "%" + r : "")];
            n && !i && d(e, p, f, { locale: r });
          },
          [f, p, C, b, t, e]
        );
        var Z = {
          ref: z,
          onClick: function (n) {
            j.props &&
              "function" === typeof j.props.onClick &&
              j.props.onClick(n),
              n.defaultPrevented ||
                (function (n, t, e, r, i, o, s, u) {
                  ("A" !== n.currentTarget.nodeName ||
                    (!(function (n) {
                      var t = n.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        n.metaKey ||
                        n.ctrlKey ||
                        n.shiftKey ||
                        n.altKey ||
                        (n.nativeEvent && 2 === n.nativeEvent.which)
                      );
                    })(n) &&
                      (0, a.isLocalURL)(e))) &&
                    (n.preventDefault(),
                    null == s && (s = r.indexOf("#") < 0),
                    t[i ? "replace" : "push"](e, r, {
                      shallow: o,
                      locale: u,
                      scroll: s,
                    }));
                })(n, e, p, f, h, m, g, b);
          },
          onMouseEnter: function (n) {
            (0, a.isLocalURL)(p) &&
              (j.props &&
                "function" === typeof j.props.onMouseEnter &&
                j.props.onMouseEnter(n),
              d(e, p, f, { priority: !0 }));
          },
        };
        if (n.passHref || ("a" === j.type && !("href" in j.props))) {
          var _ = "undefined" !== typeof b ? b : e && e.locale,
            L =
              e &&
              e.isLocaleDomain &&
              (0, a.getDomainLocale)(
                f,
                _,
                e && e.locales,
                e && e.domainLocales
              );
          Z.href =
            L ||
            (0, a.addBasePath)((0, a.addLocale)(f, _, e && e.defaultLocale));
        }
        return o.default.cloneElement(j, Z);
      };
      t.default = c;
    },
    5749: function (n, t, e) {
      "use strict";
      var r = e(3038);
      (t.__esModule = !0),
        (t.useIntersection = function (n) {
          var t = n.rootMargin,
            e = n.disabled || !a,
            u = (0, i.useRef)(),
            l = (0, i.useState)(!1),
            d = r(l, 2),
            c = d[0],
            p = d[1],
            f = (0, i.useCallback)(
              function (n) {
                u.current && (u.current(), (u.current = void 0)),
                  e ||
                    c ||
                    (n &&
                      n.tagName &&
                      (u.current = (function (n, t, e) {
                        var r = (function (n) {
                            var t = n.rootMargin || "",
                              e = s.get(t);
                            if (e) return e;
                            var r = new Map(),
                              i = new IntersectionObserver(function (n) {
                                n.forEach(function (n) {
                                  var t = r.get(n.target),
                                    e =
                                      n.isIntersecting ||
                                      n.intersectionRatio > 0;
                                  t && e && t(e);
                                });
                              }, n);
                            return (
                              s.set(
                                t,
                                (e = { id: t, observer: i, elements: r })
                              ),
                              e
                            );
                          })(e),
                          i = r.id,
                          o = r.observer,
                          a = r.elements;
                        return (
                          a.set(n, t),
                          o.observe(n),
                          function () {
                            a.delete(n),
                              o.unobserve(n),
                              0 === a.size && (o.disconnect(), s.delete(i));
                          }
                        );
                      })(
                        n,
                        function (n) {
                          return n && p(n);
                        },
                        { rootMargin: t }
                      )));
              },
              [e, t, c]
            );
          return (
            (0, i.useEffect)(
              function () {
                if (!a && !c) {
                  var n = (0, o.requestIdleCallback)(function () {
                    return p(!0);
                  });
                  return function () {
                    return (0, o.cancelIdleCallback)(n);
                  };
                }
              },
              [c]
            ),
            [f, c]
          );
        });
      var i = e(7294),
        o = e(8391),
        a = "undefined" !== typeof IntersectionObserver;
      var s = new Map();
    },
    4458: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return At;
          },
        });
      var r = e(5893),
        i = e(7294),
        o = e(2465),
        a = e(9163);
      function s() {
        var n = (0, o.Z)([
          "\n  display: flex;\n  height: ",
          ";\n\n  @media ",
          " {\n    height: ",
          ";\n  }\n\n  @media ",
          " {\n    height: ",
          ";\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        var n = (0, o.Z)([
          "\n  margin-left: ",
          ";\n  transition: 0.3s ease;\n  justify-content: center;\n  border-radius: 50px;\n  padding: 8px;\n\n  &:hover {\n    background-color: #212d45;\n    transform: scale(1.2);\n    cursor: pointer;\n  }\n\n  @media ",
          " {\n    margin-left: ",
          ";\n  }\n  @media ",
          " {\n    margin-left: ",
          ";\n  }\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, o.Z)([
          "\n  border: none;\n  border-radius: 50px;\n  color: #fff;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: ",
          ";\n  opacity: ",
          ";\n  transition: 0.4s ease;\n  font-size: ",
          ";\n  font-weight: 600;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: ",
          ";\n\n  &:hover {\n    opacity: 0;\n  }\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    opacity: 1;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),\n      inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  &:disabled {\n    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);\n    opacity: 0.5;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),\n      inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  @media ",
          " {\n    font-size: ",
          ";\n  }\n\n  @media ",
          " {\n    font-size: 14px;\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, o.Z)([
          "\n  width: ",
          ";\n  height: ",
          ";\n  border-radius: 50px;\n  font-size: ",
          ";\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: ",
          ";\n  color: #fff;\n  background: ",
          ";\n  cursor: pointer;\n  transition: 0.5s ease;\n  position: relative;\n  overflow: hidden;\n  opacity: ",
          ";\n\n  @media ",
          " {\n    width: ",
          ";\n    height: ",
          ";\n    font-size: ",
          ";\n    margin-bottom: ",
          ";\n  }\n\n  @media ",
          " {\n    width: 100%;\n    height: 32px;\n    font-size: 14px;\n    margin-bottom: ",
          ";\n  }\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = (0, o.Z)([
          "\n  color: #fff;\n  background: none;\n  border: 1px solid rgba(255, 255, 255, 0.33);\n  box-sizing: border-box;\n  border-radius: 999px;\n  padding: 16px 24px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 16px;\n  width: fit-content;\n  margin-top: 32px;\n  margin-bottom: 80px;\n  cursor: pointer;\n  transition: 0.4s ease;\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    color: #0f1624;\n    background: #fff;\n    border: 1px solid #fff;\n  }\n\n  &:active {\n    background: #e0e4eb;\n    border: 1px solid #304169;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),\n      inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  @media ",
          " {\n    margin-top: 24px;\n    margin-bottom: 64px;\n    padding: 16px 24px;\n    width: fit-content;\n    font-size: 20px;\n    line-height: 20px;\n  }\n\n  @media ",
          " {\n    margin-top: 16px;\n    margin-bottom: 40px;\n    padding: 8px 16px;\n    width: 100%;\n    font-size: 14px;\n    line-height: 16px;\n  }\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, o.Z)([
          "\n  max-width: 800px;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n\n  @media ",
          " {\n    max-width: 672px;\n    font-size: 16px;\n    line-height: 25px;\n  }\n\n  @media ",
          " {\n    font-size: 14px;\n    line-height: 22px;\n  }\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = (0, o.Z)([
          "\n  width: 64px;\n  height: 6px;\n  border-radius: 10px;\n  background-color: #fff;\n  background: ",
          ";\n\n  margin: ",
          ";\n\n  @media ",
          " {\n    width: 48px;\n    height: 4px;\n  }\n\n  @media ",
          " {\n    width: 32px;\n    height: 2px;\n  }\n",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = (0, o.Z)([
          "\n  max-width: 800px;\n  font-size: 24px;\n  line-height: 40px;\n  font-weight: 300;\n  padding-bottom: 3.6rem;\n  color: rgba(255, 255, 255, 0.5);\n\n  @media ",
          " {\n    max-width: 670px;\n    font-size: 20px;\n    line-height: 32px;\n    padding-bottom: 24px;\n  }\n\n  @media ",
          " {\n    font-size: 16px;\n    line-height: 24px;\n    padding-bottom: 16px;\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = (0, o.Z)([
          "\n  font-weight: 800;\n  font-size: ",
          ";\n  line-height: ",
          ";\n  width: max-content;\n  max-width: 100%;\n  background: linear-gradient(\n    121.57deg,\n    #ffffff 18.77%,\n    rgba(255, 255, 255, 0.66) 60.15%\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 16px;\n  padding: ",
          ";\n\n  @media ",
          " {\n    font-size: ",
          ";\n    line-height: ",
          ";\n    margin-bottom: 12px;\n    padding: ",
          ";\n  }\n\n  @media ",
          " {\n    font-size: 32px;\n    line-height: 40px;\n    font-size: ",
          ";\n    line-height: ",
          ";\n    margin-bottom: 8px;\n    padding: ",
          ";\n    max-width: 100%;\n  }\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = (0, o.Z)([
          "\n  display: ",
          ";\n  flex-direction: ",
          ";\n  padding: ",
          ";\n  margin: 0 auto;\n  max-width: 1040px;\n  box-sizing: content-box;\n  position: relative;\n  overflow: hidden;\n  grid-template-columns: 1fr 1fr;\n\n  @media ",
          " {\n    padding: 24px 48px 0;\n    flex-direction: column;\n  }\n\n  @media ",
          " {\n    padding: ",
          ";\n\n    width: calc(100vw - 32px);\n    flex-direction: column;\n  }\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      var g = a.default.section(
          m(),
          function (n) {
            return n.grid ? "grid" : "flex";
          },
          function (n) {
            return n.row ? "row" : "column";
          },
          function (n) {
            return n.nopadding ? "0" : "32px 48px 0";
          },
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          },
          function (n) {
            return n.nopadding ? "0" : "16px 16px 0";
          }
        ),
        b = a.default.h2(
          h(),
          function (n) {
            return n.main ? "65px" : "56px";
          },
          function (n) {
            return n.main ? "72px" : "56px";
          },
          function (n) {
            return n.main ? "58px 0 16px" : "0";
          },
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.main ? "56px" : "48px";
          },
          function (n) {
            return n.main ? "56px" : "48px";
          },
          function (n) {
            return n.main ? "40px 0 12px" : "0";
          },
          function (n) {
            return n.theme.breakpoints.sm;
          },
          function (n) {
            return n.main ? "28px" : "32px";
          },
          function (n) {
            return n.main ? "32px" : "40px";
          },
          function (n) {
            return n.main ? "16px 0 8px" : "0";
          }
        ),
        j = a.default.p(
          x(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        v = a.default.div(
          f(),
          function (n) {
            return n.colorAlt
              ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
              : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
          },
          function (n) {
            return n.divider ? "4rem 0" : "";
          },
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        y =
          (a.default.p(
            p(),
            function (n) {
              return n.theme.breakpoints.md;
            },
            function (n) {
              return n.theme.breakpoints.sm;
            }
          ),
          a.default.button(
            c(),
            function (n) {
              return n.theme.breakpoints.md;
            },
            function (n) {
              return n.theme.breakpoints.sm;
            }
          ),
          a.default.div(
            d(),
            function (n) {
              return n.alt ? "150px" : "262px";
            },
            function (n) {
              return n.alt ? "52px" : "64px";
            },
            function (n) {
              return n.alt ? "20px" : "24px";
            },
            function (n) {
              var t = n.alt,
                e = n.form;
              return t || e ? "0" : "0 0 80px";
            },
            function (n) {
              return n.alt
                ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
                : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)";
            },
            function (n) {
              return n.disabled ? ".5" : "1";
            },
            function (n) {
              return n.theme.breakpoints.md;
            },
            function (n) {
              return n.alt ? "150px" : "184px";
            },
            function (n) {
              return n.alt ? "52px" : "48px";
            },
            function (n) {
              return n.alt ? "20px" : "16px";
            },
            function (n) {
              return n.alt ? "0" : "64px";
            },
            function (n) {
              return n.theme.breakpoints.sm;
            },
            function (n) {
              return n.alt ? "0" : "32px";
            }
          )),
        w = a.default.button(
          l(),
          function (n) {
            return n.alt
              ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
              : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
          },
          function (n) {
            return n.disabled ? ".5" : "1";
          },
          function (n) {
            return n.alt ? "20px" : "24px";
          },
          function (n) {
            return n.disabled
              ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"
              : "none";
          },
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.alt ? "20px" : "16px";
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        );
      a.default.div(
        u(),
        function (n) {
          return n.large ? "24px" : "16px";
        },
        function (n) {
          return n.theme.breakpoints.md;
        },
        function (n) {
          return n.large ? "16px" : "8px";
        },
        function (n) {
          return n.theme.breakpoints.sm;
        },
        function (n) {
          return n.large ? "0" : "8px";
        }
      ),
        a.default.div(
          s(),
          function (n) {
            return n.large ? "32px" : "24px";
          },
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.nav ? "16px" : "24px";
          },
          function (n) {
            return n.theme.breakpoints.sm;
          },
          function (n) {
            return n.large ? "32px" : "16px";
          }
        );
      function k() {
        var n = (0, o.Z)([
          "\n  display: flex;\n\n  @media ",
          "{\n    width: 160px;\n    justify-content: space-between;\n  }\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = (0, o.Z)([
          "\n  display: flex;\n  font-size: 24px;\n  line-height: 40px;\n  letter-spacing: 0.02em;\n  color: rgba(255, 255, 255, 0.5);\n\n@media ",
          "{\n  line-height: 32px;\n  font-size: 20px;\n};\n\n@media ",
          "{\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0 0 16px;\n}\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      function z() {
        var n = (0, o.Z)([
          "\n  display: flex;\n  max-width: 1040px;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 80px;\n\n  @media ",
          "{\n    display: flex;\n    justify-content: center;\n    padding-bottom: 64px;\n  }\n\n  @media ",
          "{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 32px;\n  }\n",
        ]);
        return (
          (z = function () {
            return n;
          }),
          n
        );
      }
      function Z() {
        var n = (0, o.Z)([
          "\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  color: rgba(255, 255, 255, 0.75);\n\n  @media ",
          "{\n    font-size: 16px;\n    line-height: 20px;\n  };\n\n  @media ",
          " {\n    font-size: 10px;\n    line-height: 14px;\n  }\n",
        ]);
        return (
          (Z = function () {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = (0, o.Z)([
          "\n  font-style: normal;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 40px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  margin-bottom: 8px;\n\n  @media ",
          " {\n    font-size: 28px;\n    line-height: 32px;\n  }\n  @media ",
          " {\n    font-size: 24px;\n    line-height: 26px;\n}\n",
        ]);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      function L() {
        var n = (0, o.Z)([
          "\n  background: #212D45;\n  border-radius: 12px;\n  height: 144px;\n  padding: 24px;\n  @media ",
          " {\n    height: 210px;\n\n  }\n\n  @media ",
          " {\n    height: 135px;\n    padding: 16px;\n  }\n\n  @media ",
          " {\n    height: 110px;\n    padding: 12px;\n    \n    &:nth-child(2n){\n      grid-row:2;\n    }\n  }\n",
        ]);
        return (
          (L = function () {
            return n;
          }),
          n
        );
      }
      function F() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin: 24px 0 40px;\n\n  @media ",
          "{\n    gap: 16px;\n    margin: 20px 0 32px;\n    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  }\n\n  @media ",
          "{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    max-width: 500px;\n    margin: 24px auto;\n  }\n",
        ]);
        return (
          (F = function () {
            return n;
          }),
          n
        );
      }
      var D = a.default.div(
          F(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        M = a.default.div(
          L(),
          function (n) {
            return n.theme.breakpoints.lg;
          },
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        O = a.default.h5(
          _(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        S = a.default.p(
          Z(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        U =
          (a.default.div(
            z(),
            function (n) {
              return n.theme.breakpoints.md;
            },
            function (n) {
              return n.theme.breakpoints.sm;
            }
          ),
          a.default.h5(
            C(),
            function (n) {
              return n.theme.breakpoints.md;
            },
            function (n) {
              return n.theme.breakpoints.sm;
            }
          ),
          a.default.div(k(), function (n) {
            return n.theme.breakpoints.sm;
          }),
          [
            { number: 20, text: "Deaths per game" },
            { number: 1e3, text: "Kills stolen" },
            { number: 1900, text: "Friend requests" },
            { number: 5e3, text: "Deaths" },
          ]),
        E = function () {
          return (0, r.jsxs)(g, {
            children: [
              (0, r.jsx)(b, { children: "Personal Accomplishments" }),
              (0, r.jsx)(D, {
                children: U.map(function (n, t) {
                  return (0,
                  r.jsxs)(M, { children: [(0, r.jsxs)(O, { children: [n.number, "+"] }), (0, r.jsx)(S, { children: n.text })] }, t);
                }),
              }),
            ],
          });
        },
        A = function () {
          return (0, r.jsx)("div", {
            children: (0, r.jsxs)("svg", {
              className: "BgAnimation__svg",
              viewBox: "0 0 602 602",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsxs)("g", {
                  opacity: "0.15",
                  children: [
                    (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
                      stroke: "url(#paint0_radial)",
                      id: "path_0",
                    }),
                    (0, r.jsx)("path", {
                      d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
                      stroke: "url(#paint1_radial)",
                      id: "path_1",
                    }),
                    (0, r.jsx)("path", {
                      d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
                      stroke: "url(#paint2_radial)",
                      id: "path_2",
                    }),
                  ],
                }),
                (0, r.jsx)("ellipse", {
                  cx: "295.027",
                  cy: "193.118",
                  transform: "translate(-295.027 -193.118)",
                  rx: "1.07306",
                  ry: "1.07433",
                  fill: "#945DD6",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "10s",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_2" }),
                  }),
                }),
                (0, r.jsx)("path", {
                  d: "M294.685 193.474L268.932 219.258",
                  transform:
                    "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
                  stroke: "url(#paint3_linear)",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "10s",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_2" }),
                  }),
                }),
                (0, r.jsx)("ellipse", {
                  cx: "295.027",
                  cy: "193.118",
                  transform: "translate(-295.027 -193.118)",
                  rx: "1.07306",
                  ry: "1.07433",
                  fill: "#46737",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "5s",
                    begin: "1",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_2" }),
                  }),
                }),
                (0, r.jsx)("path", {
                  d: "M294.685 193.474L268.932 219.258",
                  transform:
                    "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
                  stroke: "url(#paint7_linear)",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "5s",
                    begin: "1",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_2" }),
                  }),
                }),
                (0, r.jsx)("ellipse", {
                  cx: "476.525",
                  cy: "363.313",
                  rx: "1.07433",
                  ry: "1.07306",
                  transform:
                    "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
                  fill: "#945DD6",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "10s",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }),
                  }),
                }),
                (0, r.jsx)("path", {
                  d: "M476.171 362.952L450.417 337.168",
                  transform:
                    "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
                  stroke: "url(#paint4_linear)",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "10s",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }),
                  }),
                }),
                (0, r.jsx)("ellipse", {
                  cx: "382.164",
                  cy: "155.029",
                  rx: "1.07433",
                  ry: "1.07306",
                  transform:
                    "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
                  fill: "#F46737",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "10s",
                    begin: "1",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }),
                  }),
                }),
                (0, r.jsx)("path", {
                  d: "M381.81 154.669L356.057 128.885",
                  transform:
                    "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
                  stroke: "url(#paint5_linear)",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "10s",
                    begin: "1",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }),
                  }),
                }),
                (0, r.jsx)("ellipse", {
                  cx: "333.324",
                  cy: "382.691",
                  rx: "1.07306",
                  ry: "1.07433",
                  transform:
                    "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
                  fill: "#F46737",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "5s",
                    begin: "0",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_1" }),
                  }),
                }),
                (0, r.jsx)("path", {
                  d: "M333.667 382.335L359.42 356.551",
                  transform:
                    "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
                  stroke: "url(#paint6_linear)",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "5s",
                    begin: "0",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_1" }),
                  }),
                }),
                (0, r.jsx)("ellipse", {
                  cx: "165.524",
                  cy: "93.9596",
                  rx: "1.07306",
                  ry: "1.07433",
                  transform: "translate(-165.524 -93.9596)",
                  fill: "#F46737",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "10s",
                    begin: "3",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }),
                  }),
                }),
                (0, r.jsx)("path", {
                  d: "M165.182 94.3159L139.429 120.1",
                  transform:
                    "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
                  stroke: "url(#paint7_linear)",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "10s",
                    begin: "3",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }),
                  }),
                }),
                (0, r.jsx)("ellipse", {
                  cx: "476.525",
                  cy: "363.313",
                  rx: "1.07433",
                  ry: "1.07306",
                  transform:
                    "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
                  fill: "#13ADC7",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "12s",
                    begin: "4",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }),
                  }),
                }),
                (0, r.jsx)("path", {
                  d: "M476.171 362.952L450.417 337.168",
                  transform:
                    "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
                  stroke: "url(#paint11_linear)",
                  children: (0, r.jsx)("animateMotion", {
                    dur: "12s",
                    begin: "4",
                    repeatCount: "indefinite",
                    rotate: "auto",
                    children: (0, r.jsx)("mpath", { xlinkHref: "#path_0" }),
                  }),
                }),
                (0, r.jsxs)("defs", {
                  children: [
                    (0, r.jsxs)("radialGradient", {
                      id: "paint0_radial",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(301 301) rotate(90) scale(300)",
                      children: [
                        (0, r.jsx)("stop", {
                          offset: "0.333333",
                          stopColor: "#FBFBFB",
                        }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "white",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("radialGradient", {
                      id: "paint1_radial",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(301 301) rotate(90) scale(300)",
                      children: [
                        (0, r.jsx)("stop", {
                          offset: "0.333333",
                          stopColor: "#FBFBFB",
                        }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "white",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("radialGradient", {
                      id: "paint2_radial",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(301 301) rotate(90) scale(300)",
                      children: [
                        (0, r.jsx)("stop", {
                          offset: "0.333333",
                          stopColor: "#FBFBFB",
                        }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "white",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "paint3_linear",
                      x1: "295.043",
                      y1: "193.116",
                      x2: "269.975",
                      y2: "218.154",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, r.jsx)("stop", { stopColor: "#945DD6" }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "#945DD6",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "paint4_linear",
                      x1: "476.529",
                      y1: "363.31",
                      x2: "451.461",
                      y2: "338.272",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, r.jsx)("stop", { stopColor: "#945DD6" }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "#945DD6",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "paint5_linear",
                      x1: "382.168",
                      y1: "155.027",
                      x2: "357.1",
                      y2: "129.989",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, r.jsx)("stop", { stopColor: "#F46737" }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "#F46737",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "paint6_linear",
                      x1: "333.309",
                      y1: "382.693",
                      x2: "358.376",
                      y2: "357.655",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, r.jsx)("stop", { stopColor: "#F46737" }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "#F46737",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "paint7_linear",
                      x1: "165.54",
                      y1: "93.9578",
                      x2: "140.472",
                      y2: "118.996",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, r.jsx)("stop", { stopColor: "#F46737" }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "#F46737",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "paint8_linear",
                      x1: "414.367",
                      y1: "301.156",
                      x2: "439.435",
                      y2: "276.118",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, r.jsx)("stop", { stopColor: "#13ADC7" }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "#13ADC7",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "paint9_linear",
                      x1: "515.943",
                      y1: "288.238",
                      x2: "541.339",
                      y2: "291.454",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, r.jsx)("stop", { stopColor: "#13ADC7" }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "#13ADC7",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "paint10_linear",
                      x1: "117.001",
                      y1: "230.619",
                      x2: "117.36",
                      y2: "258.193",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, r.jsx)("stop", { stopColor: "#945DD6" }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "#945DD6",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "paint11_linear",
                      x1: "476.529",
                      y1: "363.31",
                      x2: "451.461",
                      y2: "338.272",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, r.jsx)("stop", { stopColor: "#13ADC7" }),
                        (0, r.jsx)("stop", {
                          offset: "1",
                          stopColor: "#13ADC7",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        B = function (n) {
          return (0, r.jsxs)(y, {
            alt: n.alt,
            form: n.form,
            disabled: n.disabled,
            children: [
              n.children,
              (0, r.jsx)(w, {
                alt: n.alt,
                onClick: n.onClick,
                disabled: n.disabled,
                children: n.children,
              }),
            ],
          });
        };
      function H() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  @media ",
          " {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n\n    margin: 0 auto;\n  }\n  @media ",
          " {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    margin: 0 auto;\n  }\n",
        ]);
        return (
          (H = function () {
            return n;
          }),
          n
        );
      }
      var P = a.default.div(
          H(),
          function (n) {
            return n.theme.breakpoints.sm;
          },
          function (n) {
            return n.theme.breakpoints.md;
          }
        ),
        N = function () {
          return (0, r.jsx)(g, {
            row: !0,
            nopadding: !0,
            children: (0, r.jsxs)(P, {
              children: [
                (0, r.jsxs)(b, {
                  main: !0,
                  center: !0,
                  children: [
                    "Hello there, ",
                    (0, r.jsx)("br", {}),
                    "I'm Andrew!",
                  ],
                }),
                (0, r.jsx)(j, { children: "reactjs-app!" }),
                (0, r.jsx)(B, {
                  onClick: function () {
                    return (window.location =
                      "https://na.op.gg/summoner/userName=sen1orch1cken");
                  },
                  children: "Resume",
                }),
              ],
            }),
          });
        };
      function R() {
        var n = (0, o.Z)(["\n  color: #d8bfbf;\n  font-size: 1.5rem;\n"]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = (0, o.Z)([
          "\n  display: flex;\n  justify-content: space-around;\n  padding: 2rem;\n",
        ]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      function G() {
        var n = (0, o.Z)([
          "\n  color: #d4c0c0;\n  font-size: 1.6rem;\n  padding: 1rem 1.5rem;\n  background: #6b3030;\n  border-radius: 15px;\n  transition: 0.5s;\n  &:hover {\n    background: #801414;\n  }\n",
        ]);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        var n = (0, o.Z)([
          "\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  margin: 2.5rem 0;\n",
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      function W() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  padding: 0 50px;\n  color: #e4e6e7;\n  font-style: 2rem;\n  line-height: 24px;\n  text-align: justify;\n  @media ",
          " {\n    padding: 0.3rem;\n  }\n",
        ]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      function J() {
        var n = (0, o.Z)([
          '\n  width: 170px;\n  margin: 0 auto;\n  color: #dce3e7;\n  font-family: "Droid Serif", serif;\n  font-size: 13px;\n  font-style: italic;\n  line-height: 18px;\n',
        ]);
        return (
          (J = function () {
            return n;
          }),
          n
        );
      }
      function K() {
        var n = (0, o.Z)([
          "\n  width: 50px;\n  height: 3px;\n  margin: 20px auto;\n  border: 0;\n  background: #d0bb57;\n",
        ]);
        return (
          (K = function () {
            return n;
          }),
          n
        );
      }
      function V() {
        var n = (0, o.Z)([
          "\n  font-weight: 500;\n  letter-spacing: 2px;\n  color: #9cc9e3;\n  padding: 0.5rem 0;\n  font-size: ",
          ";\n",
        ]);
        return (
          (V = function () {
            return n;
          }),
          n
        );
      }
      function q() {
        var n = (0, o.Z)([
          "\n  text-align: center;\n  z-index: 20;\n  width: 100%;\n",
        ]);
        return (
          (q = function () {
            return n;
          }),
          n
        );
      }
      function Q() {
        var n = (0, o.Z)([
          "\n  border-radius: 10px;\n  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);\n  text-align: center;\n  width: 400px;\n  @media ",
          " {\n    width: 100%;\n  }\n",
        ]);
        return (
          (Q = function () {
            return n;
          }),
          n
        );
      }
      function X() {
        var n = (0, o.Z)([
          "\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  padding: 3rem;\n  place-items: center;\n  column-gap: 2rem;\n  row-gap: 3rem;\n  @media ",
          " {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n    padding-bottom: 0;\n  }\n",
        ]);
        return (
          (X = function () {
            return n;
          }),
          n
        );
      }
      function Y() {
        var n = (0, o.Z)([
          "\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n",
        ]);
        return (
          (Y = function () {
            return n;
          }),
          n
        );
      }
      var $ = a.default.img(Y()),
        nn = a.default.section(X(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        tn = a.default.div(Q(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        en = a.default.div(q()),
        rn = a.default.h3(V(), function (n) {
          return n.title ? "3rem" : "2rem";
        }),
        on = a.default.hr(K()),
        an =
          (a.default.div(J()),
          a.default.p(W(), function (n) {
            return n.theme.breakpoints.sm;
          })),
        sn = a.default.ul(I()),
        un = a.default.a(G()),
        ln = a.default.ul(T()),
        dn = a.default.li(R()),
        cn = [
          {
            title: "ML Web App",
            description:
              "A machine learning tool that allows professionals in any field to solve their challenges without the need of any in-depth programming training or knowledge.",
            image: "/images/ml-app.png",
            tags: ["Python", "scikit-learn", "Streamlit"],
            source:
              "https://share.streamlit.io/zhangandrew37/ml-web-app/main/ml-app.py",
            visit: "https://github.com/zhangandrew37/ML-web-app",
            id: 0,
          },
          {
            title: "LifeSource Leak Detector",
            description:
              "Tackling the global water crisis with a cloud-based water leak detector for flood prevention. [Something about auto-shutoff valve, remote]",
            image: "/images/lifesource.png",
            tags: ["C++", "Arduino", "Ubidots"],
            visit: "https://github.com/zhangandrew37/LifeSource-Leak-Detector",
            id: 2,
          },
          {
            title: "JobEasy",
            description:
              "A charitable website that assists immigrants in finding fair jobs for themselves based on their previous experience.",
            image: "/images/jobeasy.png",
            tags: ["React", "Gatsby", "Firebase"],
            source: "https://job-easy.netlify.app/",
            visit: "https://github.com/zhangandrew37/ics4u0-project",
            id: 1,
          },
          {
            title: "FoodAddict",
            description:
              "Ensuring no food goes to waste by providing users with all the tools they need to take control of their pantry.",
            image: "/images/foodaddict.png",
            tags: ["React", "Javascript", "Firebase"],
            source: "https://www.foodadd.tech/",
            visit: "https://github.com/RyanL123/HTN2020",
            id: 3,
          },
          {
            title: "FoodAddict",
            description:
              "Ensuring no food goes to waste by providing users with all the tools they need to take control of their pantry.",
            image: "/images/foodaddict.png",
            tags: ["React", "Javascript", "Firebase"],
            source: "https://www.foodadd.tech/",
            visit: "https://github.com/RyanL123/HTN2020",
            id: 3,
          },
        ],
        pn = [
          { year: 2017, text: "Started my programming journey" },
          {
            year: 2018,
            text: "Qualified for the 2018 FLL World Championships as 1 of 2 Canadian teams",
          },
          {
            year: 2019,
            text: "Mentored MI3L School, a community robotics organization",
          },
          {
            year: 2020,
            text: "[ML/scikit-learn stuff for the Ontario Clean Wwater Agency]",
          },
          {
            year: 2021,
            text: "Began studying Computer Science at the University of Waterloo",
          },
        ],
        fn = function () {
          return (0, r.jsxs)(g, {
            nopadding: !0,
            id: "projects",
            children: [
              (0, r.jsx)(v, {}),
              (0, r.jsx)(b, { main: !0, children: "Projects" }),
              (0, r.jsx)(nn, {
                children: cn.map(function (n) {
                  var t = n.id,
                    e = n.image,
                    i = n.title,
                    o = n.description,
                    a = n.tags,
                    s = n.source,
                    u = n.visit;
                  return (0, r.jsxs)(
                    tn,
                    {
                      children: [
                        (0, r.jsx)($, { src: e }),
                        (0, r.jsxs)(en, {
                          children: [
                            (0, r.jsx)(rn, { title: !0, children: i }),
                            (0, r.jsx)(on, {}),
                          ],
                        }),
                        (0, r.jsx)(an, { children: o }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("br", {}),
                            (0, r.jsx)(en, { children: "Stack" }),
                            (0, r.jsx)(ln, {
                              children: a.map(function (n, t) {
                                return (0, r.jsx)(dn, { children: n }, t);
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)(sn, {
                          children: [
                            (0, r.jsx)(un, { href: u, children: "Code" }),
                            (0, r.jsx)(un, { href: s, children: "Source" }),
                          ],
                        }),
                      ],
                    },
                    t
                  );
                }),
              }),
            ],
          });
        },
        xn = e(859);
      function hn() {
        var n = (0, o.Z)([
          "\n  display: block;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 10px;\n  \n  @media ",
          "{\n    width: 40px;\n    height: 40px;\n    margin-bottom: 8px;\n  }\n\n  @media ",
          "{\n    width: 32px;\n    height: 32px;\n    margin-bottom: 0px;\n  }\n",
        ]);
        return (
          (hn = function () {
            return n;
          }),
          n
        );
      }
      function mn() {
        var n = (0, o.Z)([
          "\n  max-width: 320px;\n  display: flex;\n  flex-direction: column;\n\n@media ",
          "{\n  max-width: 203px;\n}\n\n@media ",
          "{\n  margin-bottom: 14px;\n  max-width: 320px;\n  flex-direction: row;\n}\n",
        ]);
        return (
          (mn = function () {
            return n;
          }),
          n
        );
      }
      function gn() {
        var n = (0, o.Z)([
          "\n  font-size: 18px;\n  line-height: 30px;\n  color: rgba(255, 255, 255, 0.75);\n\n  @media ",
          "{\n    font-size: 16px;\n    line-height: 28px;\n  }\n\n  @media ",
          "{\n    font-size: 14px;\n    line-height: 22px;\n  }\n",
        ]);
        return (
          (gn = function () {
            return n;
          }),
          n
        );
      }
      function bn() {
        var n = (0, o.Z)([
          "\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.02em;\n  color: #FFFFFF;\n  margin-bottom: 8px;\n\n@media ",
          "{\n  font-size: 24px;\n  line-height: 28px;\n}\n\n@media ",
          "{\n  font-size: 20px;\n  line-height: 28px;\n  letter-spacing: 0.02em;\n  margin-bottom: 4px;\n}\n",
        ]);
        return (
          (bn = function () {
            return n;
          }),
          n
        );
      }
      function jn() {
        var n = (0, o.Z)([
          "\n  display: flex;\n  flex-direction: column;\n\n  @media ",
          "{\n    display: flex;\n    margin-left: 18px;\n  }\n",
        ]);
        return (
          (jn = function () {
            return n;
          }),
          n
        );
      }
      function vn() {
        var n = (0, o.Z)([
          "\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 40px;\n  margin: 3rem 0;\n  \n  @media ",
          "{\n    margin: 64px 0;\n  }\n\n  @media ",
          "{\n    margin: 64px 0;\n    gap: 24px\n  }\n  \n  @media ",
          "{\n    display: flex;\n    flex-direction: column;\n    margin: 32px 0;\n  }\n",
        ]);
        return (
          (vn = function () {
            return n;
          }),
          n
        );
      }
      function yn() {
        var n = (0, o.Z)(["\n  width: 100%;\n"]);
        return (
          (yn = function () {
            return n;
          }),
          n
        );
      }
      function wn() {
        var n = (0, o.Z)([
          "\n  text-align: center;\n  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);\n  width: 100%;\n  padding: 60px;\n  margin-top: 48px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media ",
          " {\n    background-image: none;\n    padding: 0;\n    margin-top: 40px;\n  }\n  @media ",
          " {\n    background-image: none;\n    padding: 0;\n    margin-top: 16px;\n  }\n",
        ]);
        return (
          (wn = function () {
            return n;
          }),
          n
        );
      }
      a.default.div(
        wn(),
        function (n) {
          return n.theme.breakpoints.lg;
        },
        function (n) {
          return n.theme.breakpoints.md;
        }
      ),
        a.default.img(yn());
      var kn = a.default.ul(
          vn(),
          function (n) {
            return n.theme.breakpoints.lg;
          },
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        Cn = a.default.div(jn(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        zn = a.default.h4(
          bn(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        Zn =
          (a.default.p(
            gn(),
            function (n) {
              return n.theme.breakpoints.md;
            },
            function (n) {
              return n.theme.breakpoints.sm;
            }
          ),
          a.default.li(
            mn(),
            function (n) {
              return n.theme.breakpoints.md;
            },
            function (n) {
              return n.theme.breakpoints.sm;
            }
          )),
        _n =
          (a.default.img(
            hn(),
            function (n) {
              return n.theme.breakpoints.md;
            },
            function (n) {
              return n.theme.breakpoints.sm;
            }
          ),
          function () {
            return (0, r.jsxs)(g, {
              id: "tech",
              children: [
                (0, r.jsx)(v, {}),
                (0, r.jsx)("br", {}),
                (0, r.jsx)(b, { children: "Technologies" }),
                (0, r.jsx)(j, {
                  children: "I'm skilled at running it down top, mid, and bot!",
                }),
                (0, r.jsxs)(kn, {
                  children: [
                    (0, r.jsxs)(Zn, {
                      children: [
                        (0, r.jsx)(xn.BwW, { size: "3rem" }),
                        (0, r.jsxs)(Cn, {
                          children: [
                            (0, r.jsx)(zn, { children: "Front-end" }),
                            (0, r.jsxs)("listParagraph", {
                              children: [
                                "Experience with ",
                                (0, r.jsx)("br", {}),
                                "HTML, CSS, JS and ",
                                (0, r.jsx)("br", {}),
                                "React.js",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(Zn, {
                      children: [
                        (0, r.jsx)(xn.BwW, { size: "3rem" }),
                        (0, r.jsxs)(Cn, {
                          children: [
                            (0, r.jsx)(zn, { children: "Back-end" }),
                            (0, r.jsxs)("listParagraph", {
                              children: [
                                "Experience with ",
                                (0, r.jsx)("br", {}),
                                "SQL, Firebase and ",
                                (0, r.jsx)("br", {}),
                                "Databases",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(Zn, {
                      children: [
                        (0, r.jsx)(xn.MSM, { size: "3rem" }),
                        (0, r.jsxs)(Cn, {
                          children: [
                            (0, r.jsx)(zn, { children: "Full Stack" }),
                            (0, r.jsxs)("listParagraph", {
                              children: [
                                "Experience with ",
                                (0, r.jsx)("br", {}),
                                "Java, Python, C# and ",
                                (0, r.jsx)("br", {}),
                                " .NET",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          });
      function Ln() {
        var n = (0, o.Z)([
          "\n  background-color: white;\n  border-radius: 10px;\n  margin: auto;\n  width: 3px;\n  height: 3px;\n",
        ]);
        return (
          (Ln = function () {
            return n;
          }),
          n
        );
      }
      function Fn() {
        var n = (0, o.Z)([
          "\n  box-sizing: border-box;\n  background: none;\n  padding: 4px;\n  border: none;\n  cursor: pointer;\n  margin-right: 4px;\n  opacity: ",
          ";\n  transform: ",
          ";\n\n  &:focus {\n    outline: none;\n  }\n",
        ]);
        return (
          (Fn = function () {
            return n;
          }),
          n
        );
      }
      function Dn() {
        var n = (0, o.Z)([
          "\n  width: 288px;\n\n  display: none;\n  visibility: hidden;\n\n  @media ",
          " {\n    display: flex;\n    visibility: visible;\n    margin-bottom: 48px;\n  }\n",
        ]);
        return (
          (Dn = function () {
            return n;
          }),
          n
        );
      }
      function Mn() {
        var n = (0, o.Z)([
          "\n  font-size: 14px;\n  line-height: 22px;\n  letter-spacing: 0.02em;\n  color: rgba(255, 255, 255, 0.75);\n  padding-right: 16px;\n\n  @media ",
          " {\n    font-size: 12px;\n    line-height: 18px;\n    padding-right: 32px;\n  }\n  @media ",
          " {\n    font-size: 10px;\n    line-height: 16px;\n    padding-right: 0;\n  }\n",
        ]);
        return (
          (Mn = function () {
            return n;
          }),
          n
        );
      }
      function On() {
        var n = (0, o.Z)([
          "\n  margin-left: 21px;\n  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));\n  width: 100%;\n\n  @media ",
          " {\n    -webkit-mask-image: none;\n    margin-left: 16px;\n    overflow: visible;\n  }\n",
        ]);
        return (
          (On = function () {
            return n;
          }),
          n
        );
      }
      function Sn() {
        var n = (0, o.Z)([
          "\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: 0.02em;\n  display: flex;\n  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */\n  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 8px;\n\n  @media ",
          " {\n    font-size: 20px;\n    line-height: 28px;\n    margin-bottom: 4px;\n  }\n  \n  @media ",
          " {\n    font-size: 16px;\n    line-height: 24px;\n  }\n",
        ]);
        return (
          (Sn = function () {
            return n;
          }),
          n
        );
      }
      function Un() {
        var n = (0, o.Z)([
          "\n  background: #0F1624;\n  border-radius: 3px;\n  max-width: 196px;\n\n  @media ",
          " {\n    max-width: 124px;\n  }\n  \n  @media ",
          " {\n    margin-left: 32px;\n    min-width: 120px;\n    background: #0E131F;\n    padding: 4px;\n    align-content: start;\n    scroll-snap-align: start;\n    border-radius: 3px;\n    overflow: visible;\n    position: relative;\n    height: fit-content;\n    \n    ",
          "; \n  }\n",
        ]);
        return (
          (Un = function () {
            return n;
          }),
          n
        );
      }
      function En() {
        var n = (0, o.Z)([
          "\n  @media ",
          " {\n    display: flex;\n    min-width: ",
          "\n  }\n",
        ]);
        return (
          (En = function () {
            return n;
          }),
          n
        );
      }
      function An() {
        var n = (0, o.Z)([
          "\n  max-width: 1040px;\n  background: #0F1624;\n  padding: 0rem;\n  list-style:none;\n  display: flex;\n  justify-content: space-between; \n  /* overflow-x: hidden; */\n\n  margin-left: 32px;\n  &:first-of-type{\n    margin-left: 0px;\n  }\n\n  margin-bottom: 80px;\n\n  //remove scrollbar\n  scrollbar-width: none;  \n   &::-webkit-scrollbar {\n     display: none;\n   }\n\n  @media ",
          " {\n    overflow-x: scroll;\n    -webkit-overflow-scrolling: touch;\n    scroll-snap-type: x mandatory;\n    touch-action: pan-x;\n    justify-content: initial;\n    margin-bottom: 8px;\n  }\n",
        ]);
        return (
          (An = function () {
            return n;
          }),
          n
        );
      }
      var Bn = a.default.ul(An(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        Hn = a.default.div(
          En(),
          function (n) {
            return n.theme.breakpoints.sm;
          },
          function (n) {
            return n.final ? "120%;" : "min-content";
          }
        ),
        Pn = a.default.div(
          Un(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          },
          function (n) {
            return n.active === n.index ? "opacity: 1" : "opacity: 0.5";
          }
        ),
        Nn = a.default.h4(
          Sn(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        Rn = a.default.svg(On(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        Tn = a.default.p(
          Mn(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        Gn = a.default.div(Dn(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        In = a.default.button(
          Fn(),
          function (n) {
            return n.active === n.index ? "1" : ".33";
          },
          function (n) {
            return n.active === n.index ? "scale(1.6)" : "scale(1)";
          }
        ),
        Wn = a.default.div(Ln()),
        Jn = pn.length,
        Kn = function () {
          var n = (0, i.useState)(0),
            t = n[0],
            e = n[1],
            o = (0, i.useRef)(),
            a = function (n, t) {
              return n.scrollTo({ left: t, behavior: "smooth" });
            },
            s = function (n, t) {
              if ((n.preventDefault(), o.current)) {
                var e = Math.floor(
                  0.7 * o.current.scrollWidth * (t / pn.length)
                );
                a(o.current, e);
              }
            };
          return (
            (0, i.useEffect)(function () {
              window.addEventListener("resize", function () {
                a(o.current, 0);
              });
            }, []),
            (0, r.jsxs)(g, {
              id: "about",
              children: [
                (0, r.jsx)(b, { children: "Timeline" }),
                (0, r.jsx)(j, { children: "Milestones:" }),
                (0, r.jsx)(Bn, {
                  ref: o,
                  onScroll: function () {
                    if (o.current) {
                      var n = Math.round(
                        (o.current.scrollLeft / (0.7 * o.current.scrollWidth)) *
                          pn.length
                      );
                      e(n);
                    }
                  },
                  children: (0, r.jsx)(r.Fragment, {
                    children: pn.map(function (n, e) {
                      return (0, r.jsx)(
                        Hn,
                        {
                          final: e == Jn - 1,
                          children: (0, r.jsxs)(Pn, {
                            index: e,
                            id: "carousel_item-".concat(e),
                            active: t,
                            onClick: function (n) {
                              return s(n, e);
                            },
                            children: [
                              (0, r.jsxs)(Nn, {
                                children: [
                                  n.year,
                                  (0, r.jsxs)(Rn, {
                                    width: "208",
                                    height: "6",
                                    viewBox: "0 0 208 6",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, r.jsx)("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                                        fill: "url(#paint0_linear)",
                                        "fill-opacity": "0.33",
                                      }),
                                      (0, r.jsx)("defs", {
                                        children: (0, r.jsxs)(
                                          "linearGradient",
                                          {
                                            id: "paint0_linear",
                                            x1: "-4.30412e-10",
                                            y1: "0.5",
                                            x2: "208",
                                            y2: "0.500295",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                              (0, r.jsx)("stop", {
                                                "stop-color": "white",
                                              }),
                                              (0, r.jsx)("stop", {
                                                offset: "0.79478",
                                                "stop-color": "white",
                                                "stop-opacity": "0",
                                              }),
                                            ],
                                          }
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsx)(Tn, { children: n.text }),
                            ],
                          }),
                        },
                        e
                      );
                    }),
                  }),
                }),
                (0, r.jsx)(Gn, {
                  children: pn.map(function (n, e) {
                    return (0, r.jsx)(
                      In,
                      {
                        index: e,
                        active: t,
                        onClick: function (n) {
                          return s(n, e);
                        },
                        children: (0, r.jsx)(Wn, { active: t }),
                      },
                      e
                    );
                  }),
                }),
                (0, r.jsx)(v, {}),
              ],
            })
          );
        },
        Vn = e(2821),
        qn = e(1649);
      function Qn() {
        var n = (0, o.Z)([
          "\ntransition: 0.3s ease;\ncolor: white;\nborder-radius: 50px;\n  padding: 8px;\n&:hover {\n    background-color: #212d45;\n    transform: scale(1.2);\n    cursor: pointer;\n    \n  }\n",
        ]);
        return (
          (Qn = function () {
            return n;
          }),
          n
        );
      }
      function Xn() {
        var n = (0, o.Z)([
          "\n  margin-left: 8px;\n  display: flex;\n  align-self: center;\n  transition: 0.3s ease;\n  opacity: ",
          ";\n  transform: ",
          ";\n\n  &:hover {\n    opacity: 1;\n  }\n\n  @media ",
          " {\n    margin: 2px 0 0 2px;\n    width: 15px;\n  }\n",
        ]);
        return (
          (Xn = function () {
            return n;
          }),
          n
        );
      }
      function Yn() {
        var n = (0, o.Z)([
          "\n  border: none;\n  display: flex;\n  position: relative;\n  background: none;\n  font-size: 1.7rem;\n\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  transition: 0.3s ease;\n\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    color: #fff;\n  }\n\n  @media ",
          " {\n    padding: 0.4rem 0;\n  }\n  @media ",
          " {\n    padding: 0;\n  }\n",
        ]);
        return (
          (Yn = function () {
            return n;
          }),
          n
        );
      }
      function $n() {
        var n = (0, o.Z)([
          "\n  font-size: 2rem;\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n  transition: 0.4s ease;\n  &:hover {\n    color: #fff;\n    opacity: 1;\n    cursor: pointer;\n  }\n  @media ",
          " {\n    padding: 0.5rem;\n  }\n",
        ]);
        return (
          ($n = function () {
            return n;
          }),
          n
        );
      }
      function nt() {
        var n = (0, o.Z)([
          "\n  grid-area: 1 / 5 / 2 / 6;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media ",
          " {\n    align-items: center;\n    grid-area: 1 / 4 / 2 / 6;\n  }\n",
        ]);
        return (
          (nt = function () {
            return n;
          }),
          n
        );
      }
      function tt() {
        var n = (0, o.Z)([
          "\n  grid-area: 1 / 2 / 2 / 4;\n  display: flex;\n  justify-content: space-around;\n  @media ",
          " {\n    grid-area: 2 / 2 / 3 / 5;\n  }\n",
        ]);
        return (
          (tt = function () {
            return n;
          }),
          n
        );
      }
      function et() {
        var n = (0, o.Z)([
          "\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  @media ",
          " {\n    grid-area: 1 / 1 / 2 / 3;\n  }\n",
        ]);
        return (
          (et = function () {
            return n;
          }),
          n
        );
      }
      function rt() {
        var n = (0, o.Z)(["\n  font-size: 2rem;\n"]);
        return (
          (rt = function () {
            return n;
          }),
          n
        );
      }
      function it() {
        var n = (0, o.Z)([
          "\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 2rem;\n  padding: 1rem;\n  padding-top: 2rem;\n\n  @media ",
          " {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(2, 60px);\n    grid-column-gap: 0.5rem;\n    grid-row-gap: 0.5rem;\n  }\n",
        ]);
        return (
          (it = function () {
            return n;
          }),
          n
        );
      }
      var ot = a.default.div(it(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        at = a.default.span(rt()),
        st = a.default.div(et(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        ut = a.default.div(tt(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        lt = a.default.div(nt(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        dt = a.default.a($n(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        ct =
          (a.default.button(
            Yn(),
            function (n) {
              return n.theme.breakpoints.sm;
            },
            function (n) {
              return n.theme.breakpoints.md;
            }
          ),
          (0, a.default)(qn.U0j)(
            Xn(),
            function (n) {
              return n.isOpen ? "1" : ".75";
            },
            function (n) {
              return n.isOpen ? "scaleY(-1)" : "scaleY(1)";
            },
            function (n) {
              return n.theme.breakpoints.sm;
            }
          ),
          a.default.a(Qn()));
      function pt() {
        var n = (0, o.Z)([
          "\n\tfont-style: normal;\n\tfont-weight: 600;\n\tfont-size: 12px;\n\tline-height: 24px;\n\ttext-transform: uppercase;\n\tcolor: rgba(255, 255, 255, 0.4);\n\tmargin-bottom: 16px;\n\n\t@media ",
          " {\n\t\tfont-size: 10px;\n\t\tline-height: 12px;\n\t\tmargin-bottom: 8px;\n\t}\n",
        ]);
        return (
          (pt = function () {
            return n;
          }),
          n
        );
      }
      function ft() {
        var n = (0, o.Z)([
          "\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 220px;\n\twidth: 100%;\n",
        ]);
        return (
          (ft = function () {
            return n;
          }),
          n
        );
      }
      function xt() {
        var n = (0, o.Z)([
          "\n\tborder-top: 1px solid rgba(255, 255, 255, 0.1);\n  display: grid;\n\tgrid-template-columns: repeat(3, minmax(85px, 220px));\n\tgap: 40px;\n  padding: 40px 0 28px;\n\n\t@media ",
          " {\n\t\tpadding: 32px 0 16px;\n\t}\n\n\t@media ",
          " {\n\t\twidth: 100%;\n\t\tpadding: 32px 0 16px;\n\t\tgap: 16px;\n\t}\n\t@media ",
          " {\n\t\twidth: 100%;\n\t\tpadding: 32px 4px 16px;\n\t\tgap: 5px;\n\t}\n",
        ]);
        return (
          (xt = function () {
            return n;
          }),
          n
        );
      }
      function ht() {
        var n = (0, o.Z)([
          "\n\tdisplay: flex;\n  align-items: center;\n\n\t@media ",
          "{\n\t\tjustify-content: center;\n\t\tpadding-right: 16px;\n\t\tflex-wrap: wrap;\n\t}\n",
        ]);
        return (
          (ht = function () {
            return n;
          }),
          n
        );
      }
      function mt() {
        var n = (0, o.Z)([
          "\n\tcolor: rgba(255, 255, 255, 0.5);\n\tmin-width: 280px;\n\tletter-spacing: 0.02em;\n\tfont-size: 18px;\n\tline-height: 30px;\n\tpadding: 1rem;\n\n\t@media ",
          "{\n\t\tfont-size: 16px;\n\t\tline-height: 28px;\n\t}\n\n\t@media ",
          "{\n\t\tline-height: 22px;\n\t\tfont-size: 14px;\n\t\tmin-width: 100px;\n\t}\n",
        ]);
        return (
          (mt = function () {
            return n;
          }),
          n
        );
      }
      function gt() {
        var n = (0, o.Z)([
          "\n  display: flex;\n\talign-items:baseline;\n\tflex-wrap: wrap;\n\tmargin-right: auto;\n\t\n\n\t@media ",
          "{\n\t\tflex-direction: column;\n\t\talign-items: baseline;\n\t}\n\n\t@media ",
          "{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin: 0 0 32px;\n\t\talign-items: center;\n\t}\n",
        ]);
        return (
          (gt = function () {
            return n;
          }),
          n
        );
      }
      function bt() {
        var n = (0, o.Z)([
          "\nmax-width: 1040px;\ndisplay: flex;\njustify-content: space-between;\n\n@media ",
          "{\n  display: flex;\n  justify-content: space-between;\n}\n\n@media ",
          "{\n  display: flex;\n\twidth: 100%;\n  flex-direction: column;\n}\n",
        ]);
        return (
          (bt = function () {
            return n;
          }),
          n
        );
      }
      function jt() {
        var n = (0, o.Z)([
          "\n\tfont-size: 18px;\n\tline-height: 30px;\n\tcolor: rgba(255, 255, 255, 0.75);\n\tmargin-bottom: 16px;\n\ttransition: .3s ease;\n\tposition: relative;\n\tleft: 0;\n\n\t&:hover {\n\t\tcolor: #fff;\n\t\tleft: 6px;\n\t}\n\n\t@media ",
          " {\n\t\tfont-size: 16px;\n\t\tline-height: 28px;\n\t\tdisplay: flex;\n\t}\n\n\t@media ",
          " {\n\t\tfont-size: 8px;\n\t\tline-height: 14px;\n\t\tmargin-bottom: 8px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n",
        ]);
        return (
          (jt = function () {
            return n;
          }),
          n
        );
      }
      function vt() {
        var n = (0, o.Z)([
          "\n\twidth: calc(100vw - 96px);\n  max-width: 1040px;\n  padding: 2rem 48px 40px;\n  margin: 1rem auto;\n  box-sizing: content-box;\n\n\n  @media ",
          " {\n    padding: 0 16px 48px;\n    width: calc(100vw - 32px);\n  }\n",
        ]);
        return (
          (vt = function () {
            return n;
          }),
          n
        );
      }
      var yt = a.default.section(vt(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        wt = a.default.a(
          jt(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        kt = a.default.div(
          bt(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        Ct = a.default.div(
          gt(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        zt = a.default.p(
          mt(),
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        Zt = a.default.div(ht(), function (n) {
          return n.theme.breakpoints.md;
        }),
        _t = a.default.ul(
          xt(),
          function (n) {
            return n.theme.breakpoints.lg;
          },
          function (n) {
            return n.theme.breakpoints.md;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        Lt = a.default.div(ft()),
        Ft = a.default.h4(pt(), function (n) {
          return n.theme.breakpoints.sm;
        }),
        Dt = function () {
          return (0, r.jsxs)(yt, {
            children: [
              (0, r.jsxs)(_t, {
                children: [
                  (0, r.jsxs)(Lt, {
                    children: [
                      (0, r.jsx)(Ft, { children: "Call" }),
                      (0, r.jsx)(wt, {
                        href: "tel:289-772-8576",
                        children: "289-772-8576",
                      }),
                    ],
                  }),
                  (0, r.jsxs)(Lt, {
                    children: [
                      (0, r.jsx)(Ft, { children: "Email" }),
                      (0, r.jsx)(wt, {
                        href: "mailto:a298zhan@uwaterloo.ca",
                        children: "a298zhan@uwaterloo.ca",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(kt, {
                children: [
                  (0, r.jsx)(Ct, {
                    children: (0, r.jsx)(zt, {
                      children: "Inting one game at a time",
                    }),
                  }),
                  (0, r.jsxs)(Zt, {
                    children: [
                      (0, r.jsx)(ct, {
                        href: "https://https://github.com/zhangandrew37",
                        children: (0, r.jsx)(Vn.RrF, { size: "3rem" }),
                      }),
                      (0, r.jsx)(ct, {
                        href: "https://www.linkedin.com/in/andrew-zhang-42379a19b/",
                        children: (0, r.jsx)(Vn._iD, { size: "3rem" }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Mt = e(1664),
        Ot = function () {
          return (0, r.jsxs)(ot, {
            children: [
              (0, r.jsx)(st, {
                children: (0, r.jsx)(Mt.default, {
                  href: "/",
                  children: (0, r.jsxs)("a", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      marginBottom: "20px",
                    },
                    children: [
                      (0, r.jsx)(xn.JAz, { size: "3rem" }),
                      " ",
                      (0, r.jsx)(at, { children: "Portfolio" }),
                    ],
                  }),
                }),
              }),
              (0, r.jsxs)(ut, {
                children: [
                  (0, r.jsx)("li", {
                    children: (0, r.jsx)(Mt.default, {
                      href: "#projects",
                      children: (0, r.jsx)(dt, { children: "Projects" }),
                    }),
                  }),
                  (0, r.jsx)("li", {
                    children: (0, r.jsx)(Mt.default, {
                      href: "#tech",
                      children: (0, r.jsx)(dt, { children: "Technologies" }),
                    }),
                  }),
                  (0, r.jsx)("li", {
                    children: (0, r.jsx)(Mt.default, {
                      href: "#about",
                      children: (0, r.jsx)(dt, { children: "About" }),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(lt, {
                children: [
                  (0, r.jsx)(ct, {
                    href: "https://github.com/zhangandrew37",
                    children: (0, r.jsx)(Vn.RrF, { size: "3rem" }),
                  }),
                  (0, r.jsx)(ct, {
                    href: "https://www.linkedin.com/in/andrew-zhang-42379a19b/",
                    children: (0, r.jsx)(Vn._iD, { size: "3rem" }),
                  }),
                ],
              }),
            ],
          });
        };
      function St() {
        var n = (0, o.Z)([
          "\nmax-width: 1280px;\nwidth: 100%;\nmargin: auto;\n",
        ]);
        return (
          (St = function () {
            return n;
          }),
          n
        );
      }
      var Ut = a.default.div(St()),
        Et = function (n) {
          var t = n.children;
          return (0, r.jsxs)(Ut, {
            children: [
              (0, r.jsx)(Ot, {}),
              (0, r.jsx)("main", { children: t }),
              (0, r.jsx)(Dt, {}),
            ],
          });
        },
        At = function () {
          return (0, r.jsxs)(Et, {
            children: [
              (0, r.jsxs)(g, {
                grid: !0,
                children: [(0, r.jsx)(N, {}), (0, r.jsx)(A, {})],
              }),
              (0, r.jsx)(fn, {}),
              (0, r.jsx)(_n, {}),
              (0, r.jsx)(Kn, {}),
              (0, r.jsx)(E, {}),
            ],
          });
        };
    },
    8581: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return e(4458);
        },
      ]);
    },
    1664: function (n, t, e) {
      n.exports = e(6071);
    },
    4405: function (n, t, e) {
      "use strict";
      e.d(t, {
        w_: function () {
          return l;
        },
      });
      var r = e(7294),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = r.createContext && r.createContext(i),
        a = function () {
          return (a =
            Object.assign ||
            function (n) {
              for (var t, e = 1, r = arguments.length; e < r; e++)
                for (var i in (t = arguments[e]))
                  Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
              return n;
            }).apply(this, arguments);
        },
        s = function (n, t) {
          var e = {};
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) &&
              t.indexOf(r) < 0 &&
              (e[r] = n[r]);
          if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(n); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(n, r[i]) &&
                (e[r[i]] = n[r[i]]);
          }
          return e;
        };
      function u(n) {
        return (
          n &&
          n.map(function (n, t) {
            return r.createElement(n.tag, a({ key: t }, n.attr), u(n.child));
          })
        );
      }
      function l(n) {
        return function (t) {
          return r.createElement(d, a({ attr: a({}, n.attr) }, t), u(n.child));
        };
      }
      function d(n) {
        var t = function (t) {
          var e,
            i = n.attr,
            o = n.size,
            u = n.title,
            l = s(n, ["attr", "size", "title"]),
            d = o || t.size || "1em";
          return (
            t.className && (e = t.className),
            n.className && (e = (e ? e + " " : "") + n.className),
            r.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                i,
                l,
                {
                  className: e,
                  style: a(a({ color: n.color || t.color }, t.style), n.style),
                  height: d,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              u && r.createElement("title", null, u),
              n.children
            )
          );
        };
        return void 0 !== o
          ? r.createElement(o.Consumer, null, function (n) {
              return t(n);
            })
          : t(i);
      }
    },
  },
  function (n) {
    n.O(0, [866, 921, 617, 774, 888, 179], function () {
      return (t = 8581), n((n.s = t));
      var t;
    });
    var t = n.O();
    _N_E = t;
  },
]);
