(function(t) {
  function e(e) {
    for (var i, n, u = e[0], l = e[1], c = e[2], d = 0, p = []; d < u.length; d++) n = u[d], Object.prototype.hasOwnProperty.call(r, n) && r[n] && p.push(r[n][0]), r[n] = 0;
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    o && o(e);
    while (p.length) p.shift()();
    return s.push.apply(s, c || []), a()
  }
  function a() {
    for (var t, e = 0; e < s.length; e++) {
      for (var a = s[e], i = !0, u = 1; u < a.length; u++) {
        var l = a[u];
        0 !== r[l] && (i = !1)
      }
      i && (s.splice(e--, 1), t = n(n.s = a[0]))
    }
    return t
  }
  var i = {}, r = { app: 0 }, s = [];
  function n(e) {
    if (i[e]) return i[e].exports;
    var a = i[e] = { i: e, l: !1, exports: {} };
    return t[e].call(a.exports, a, a.exports, n), a.l = !0, a.exports
  }
  n.m = t;
  n.c = i;
  n.d = function(t, e, a) {
    n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a })
  };
  n.r = function(t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(t, "__esModule", { value: !0 })
  };
  n.t = function(t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var a = Object.create(null);
    if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
      for (var i in t) n.d(a, i, function(e) { return t[e] }.bind(null, i));
    return a
  };
  n.n = function(t) {
    var e = t && t.__esModule ? function() { return t["default"] } : function() { return t };
    return n.d(e, "a", e), e
  };
  n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) };
  n.p = "/";
  var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
      l = u.push.bind(u);
  u.push = e;
  u = u.slice();
  for (var c = 0; c < u.length; c++) e(u[c]);
  var o = l;
  s.push([0, "chunk-vendors"]), a()
})({
  0: function(t, e, a) { t.exports = a("56d7") },
  "034f": function(t, e, a) {
    "use strict";
    var i = a("85ec"),
        r = a.n(i);
    r.a
  },
  "0b82": function(t, e, a) {},
  "3dfd": function(t, e, a) {
    "use strict";
    var i = function() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", { attrs: { "data-view": "app" } }, [
        a("transition", { attrs: { name: "fade", mode: "out-in" } }, [
          a("router-view")
        ], 1)
      ], 1)
    };
    var r = [];
    var s = { name: "app" };
    var n = s;
    var u = (a("034f"), a("2877"));
    var l = Object(u["a"])(n, i, r, !1, null, null, null);
    e["a"] = l.exports
  },
  5665: function(t, e, a) {
    "use strict";
    var i = function() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", [
        a("main", { staticClass: "uk-container" }, [
          t._m(0),
          a("section", { staticClass: "uk-margin-top uk-flex uk-flex-center uk-flex-left@m uk-flex-wrap uk-flex-wrap-around" }, [
            a("article", { staticClass: "uk-margin-bottom uk-width-1-1 uk-width-large@s" }, [
              a("CalendarUrl")
            ], 1),
            a("article", { staticClass: "uk-margin-left uk-width-auto@s uk-width-1-2@m" }, [
              a("CalendarGuide")
            ], 1)
          ])
        ])
      ])
    };
    var r = [function() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("section", { staticClass: "uk-margin-top uk-flex uk-flex-center uk-flex-left@m uk-flex-wrap uk-flex-wrap-around" }, [
        a("article", { staticClass: "uk-margin-bottom" }, [
          a("h1", { staticClass: "uk-margin-small-bottom" }, [t._v(" Календарь ")]),
          a("ul", { staticClass: "uk-subnav" }, [
            a("li", [a("a", { attrs: { href: "https://t.me/schedulesupport" } }, [t._v("Поддержка")])]),
            a("li", [a("a", { attrs: { href: "https://t.me/FinancialUniversityBot" } }, [t._v("Бот в Telegram")])]),
            a("li", [a("a", { attrs: { href: "https://max.ru/finraspisanie_bot" } }, [t._v("Бот в Max")])])
          ])
        ])
      ])
    }];
    var s = function() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", [
        a("div", { staticClass: "row" }, [
          a("div", { staticClass: "uk-margin" }, [
            a("div", { staticClass: "uk-button-group uk-child-width-1-2 uk-width-1-1" }, [
              a("input", {
                directives: [{ name: "model", rawName: "v-model", value: t.type, expression: "type" }],
                attrs: { type: "radio", id: "one", value: "group", hidden: "" },
                domProps: { checked: t._q(t.type, "group") },
                on: {
                  click: function(e) { return t.choiceType("group") },
                  change: function(e) { t.type = "group" }
                }
              }),
              a("label", {
                staticClass: "uk-button uk-button-default",
                class: { "uk-button-primary": "group" === t.type },
                staticStyle: { "border-radius": "50px 0 0 50px" },
                attrs: { for: "one" }
              }, [t._v("Студент")]),
              a("input", {
                directives: [{ name: "model", rawName: "v-model", value: t.type, expression: "type" }],
                attrs: { type: "button", id: "two", value: "lecturer", hidden: "" },
                domProps: { value: t.type },
                on: {
                  click: function(e) { return t.choiceType("lecturer") },
                  input: function(e) { e.target.composing || (t.type = e.target.value) }
                }
              }),
              a("label", {
                staticClass: "uk-button uk-button-default",
                class: { "uk-button-primary": "lecturer" === t.type },
                staticStyle: { "border-radius": "0 50px 50px 0" },
                attrs: { for: "two" }
              }, [t._v("Преподаватель")])
            ])
          ])
        ]),
        a("transition", { attrs: { name: "slide-fade" } }, [
          a("div", [
            a("div", { staticClass: "row" }, [
                a("div", { staticClass: "search-wrapper panel-heading" }, [
                "group" === t.type || "lecturer" === t.type
                    ? a("input", {
                        directives: [{ name: "model", rawName: "v-model", value: t.searchQuery, expression: "searchQuery" }],
                        staticClass: "form-control uk-input",
                        attrs: { type: "text", placeholder: t.getPlaceholder() },
                        domProps: { value: t.searchQuery },
                        on: { input: function(e) { e.target.composing || (t.searchQuery = e.target.value) } }
                    })
                    : a("div", {
                        staticClass: "uk-text-muted",
                        staticStyle: { "text-align": "center", width: "100%", "padding": "8px 0" }
                    },  [t._v("Выберите кто вы")])
                ])
            ]),
            t.searchQuery !== t.name ? a("div", [
              a("div", { staticClass: "panel panel-default" }, [
                a("div", { staticClass: "panel-body" }, [
                  t.computedItems.length ? a("div", [
                    t._l(t.computedItems, function(e) {
                      return a("ul", {
                        key: e.id,
                        staticClass: "list-complete-item uk-list-striped",
                        attrs: { "data-index": e.label }
                      }, [
                        a("li", {
                          staticClass: "uk-button uk-button-default uk-width-expand",
                          on: { click: function(a) { return t.choiceItem(e.id, e.label) } }
                        }, [t._v(" " + t._s(e.label) + " ")])
                      ])
                    }),
                    10 === t.computedItems.length ? a("div", {
                      staticClass: "uk-button uk-button-disabled uk-width-expand list-complete-item",
                      staticStyle: { "font-size": "0.7em", cursor: "default", "line-height": "1.7em" }
                    }, [t._v(" Продолжайте ввод чтобы увидеть больше вариантов ")]) : t._e()
                  ], 2) : t.searchQuery.length ? a("div", [
                    a("button", { staticClass: "uk-input uk-form-danger calendar-link" }, [t._v(" Группа не найдена ")]),
                    a("p", { staticClass: "link-help" }, [
                      t._v("Проверьте название группы на "),
                      a("a", { attrs: { href: "https://ruz.fa.ru/ruz" } }, [t._v("сайте расписания")])
                    ])
                  ]) : a("div")
                ])
              ])
            ]) : t._e()
          ])
        ]),
        a("transition", { attrs: { name: "slide-fade" } }, [
          t.computedParams ? a("div", [
            t.isApple ? a("div", [
              a("a", { attrs: { href: t.url(!0) }, on: { click: t.clickMetric } }, [
                a("button", { staticClass: "uk-input uk-form-success calendar-link" }, [t._v(" Подписаться на календарь ")])
              ])
            ]) : a("div", [
              a("button", {
                directives: [
                  { name: "clipboard", rawName: "v-clipboard:copy", value: t.url(!1), expression: "url(false)", arg: "copy" },
                  { name: "clipboard", rawName: "v-clipboard:success", value: t.onCopy, expression: "onCopy", arg: "success" },
                  { name: "clipboard", rawName: "v-clipboard:error", value: t.onError, expression: "onError", arg: "error" }
                ],
                staticClass: "uk-input uk-form-success uk-margin-top calendar-link"
              }, [t._v(" " + t._s(t.url(!1)) + " ")]),
              a("p", { staticClass: "link-help" }, [t._v("Нажмите для копирования ссылки")])
            ])
          ]) : t._e()
        ])
      ], 1)
    };
    var n = [];
    var u = (a("4de4"), a("b0c0"), a("d3b7"), a("5319"), a("2ca0"), a("498a"), a("96cf"), a("bc3a"));
    var l = a.n(u);
    var c = "";
    var o = "webcal://";
    var d = "";
    function p(t) {
      return regeneratorRuntime.async(function(e) {
        while (1) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, regeneratorRuntime.awrap(
              l.a.get(c + d + "/api/" + t + ".json")
                .then(function(t) { return t.data })
                .catch(function(t) { return console.log(t), [] })
            );
          case 2:
            return e.abrupt("return", e.sent);
          case 3:
          case "end":
            return e.stop()
        }
      })
    }
    var m = a("9029");
    var h = {
      name: "calendar-url",
      data: function() {
        return {
          items: [],
          id: null,
          name: null,
          type: null,
          searchQuery: "",
          isApple: m["isIOS"] || m["isMobileSafari"] || m["isSafari"] || "Mac OS" === m["osName"]
        }
      },
      created: function() {
        var t = this;
        this.type = this.$route.query.type;
        this.name = this.$route.query.name;
        this.id = this.$route.query.id;
        this.searchQuery = this.$route.query.name;
        void 0 !== this.type && p(this.type + "s").then(function(e) { return t.items = e });
        void 0 !== this.name && (this.name = decodeURIComponent((this.name + "").replace(/\+/g, "%20")))
      },
      computed: {
        computedItems: function() {
          var t = this;
          var e = function(t, e) {
            return function(a) { return e && t(a) && e-- }
          };
          return "" === this.searchQuery
            ? []
            : this.items.filter(
                e(function(e) {
                  return e.label.trim().toUpperCase().startsWith(t.searchQuery.toUpperCase())
                }, 10)
              )
        },
        computedParams: function() {
          return this.id && this.type && this.name
        }
      },
      watch: {
        searchQuery: function() {
          return regeneratorRuntime.async(function(t) {
            while (1) switch (t.prev = t.next) {
              case 0:
                this.name !== this.searchQuery && (this.name = null);
              case 1:
              case "end":
                return t.stop()
            }
          }, null, this)
        }
      },
      methods: {
        choiceItem: function(t, e) {
          return regeneratorRuntime.async(function(a) {
            while (1) switch (a.prev = a.next) {
              case 0:
                this.id = t;
                this.name = e.trim();
                this.searchQuery = this.name;
              case 3:
              case "end":
                return a.stop()
            }
          }, null, this)
        },
        choiceType: function(t) {
          var e = this;
          return regeneratorRuntime.async(function(a) {
            while (1) switch (a.prev = a.next) {
              case 0:
                this.type = t;
                this.name = null;
                this.id = null;
                ("lecturer" === this.type || "group" === this.type) &&
                  p(this.type + "s").then(function(t) { return e.items = t });
                this.searchQuery = "";
              case 5:
              case "end":
                return a.stop()
            }
          }, null, this)
        },
        url: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var host = window.location.host;
          var origin = window.location.origin;

          return t
            ? "webcal://" + host + "/calendar/" + this.type + "/" + this.id
            : origin + "/calendar/" + this.type + "/" + this.id;
        },
        getPlaceholder: function() {
          var t;
          switch (this.type) {
            case "lecturer":
              t = "Введите ваше ФИО";
              break;
            case "group":
              t = "Введите вашу группу";
              break;
            default:
              t = "Выберите кто вы";
              break
          }
          return t
        },
        onCopy: function() {
          this.clickMetric();
          alert("Ссылка скопирована")
        },
        onError: function() {
          alert("Ошибка при копировании ссылки")
        },
        clickMetric: function() {
          ym(56596660, "reachGoal", "calendar_link")
        }
      }
    };
    var f = h;
    var v = (a("5c80"), a("2877"));
    var k = Object(v["a"])(f, s, n, !1, null, "c3f8fede", null);
    var g = k.exports;
    var b = function() {
      var t = this,
          e = t.$createElement;
      t._self._c;
      return t._m(0)
    };
    var y = [function() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", [
        a("ul", { attrs: { "uk-tab": "swiping: false", id: "uk-tab" } }, [
          a("li", [a("a", { attrs: { href: "#" } }, [t._v("Android")])]),
          a("li", [a("a", { attrs: { href: "#" } }, [t._v("Apple")])]),
          a("li", [a("a", { attrs: { href: "#" } }, [t._v("Windows")])]),
          a("li", [a("a", { attrs: { href: "#" } }, [t._v("Mail.ru")])])
        ]),
        a("ul", { staticClass: "uk-switcher uk-margin instruction-block" }, [
          a("li", [
            a("div", { attrs: { "uk-slider": "finite: true; center: true" } }, [
              a("div", {
                staticClass: "uk-position-relative uk-visible-toggle uk-light",
                attrs: { tabindex: "-1" }
              }, [
                a("ul", { staticClass: "uk-slider-items instruction-slider uk-grid" }, [
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_android_0.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [t._v("Календарь на Android добавляется через Google")]),
                        a("p", [t._v("Листай вправо чтобы узнать как")])
                      ])
                    ])
                  ]),
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_android_1.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [
                          t._v("Выберите свою группу, скопируйте ссылку и нажмите \"+\" у надписи \"Другие календари\" затем \"Добавить по URL\" "),
                          a("a", {
                            staticStyle: { color: "#009688" },
                            attrs: { href: "https://calendar.google.com/calendar/r/settings/addbyurl" }
                          }, [t._v("на сайте Google календаря")])
                        ])
                      ])
                    ])
                  ]),
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_android_2.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [t._v("Вставьте скопированную ссылку и нажмите \"Добавить календарь\"")])
                      ])
                    ])
                  ])
                ]),
                a("a", {
                  staticClass: "uk-position-center-left uk-position-small uk-hidden-hover slider-arrow",
                  attrs: { href: "#", "uk-slidenav-previous": "", "uk-slider-item": "previous" }
                }),
                a("a", {
                  staticClass: "uk-position-center-right uk-position-small uk-hidden-hover slider-arrow",
                  attrs: { href: "#", "uk-slidenav-next": "", "uk-slider-item": "next" }
                })
              ]),
              a("ul", { staticClass: "uk-slider-nav uk-dotnav uk-flex-center uk-margin" })
            ])
          ]),
          a("li", [
            a("p", [t._v("Выберите свою группу и нажмите на ссылку")]),
            a("p", [t._v("Следуйте инструкции предложенной устройством")])
          ]),
          a("li", [
            a("div", { attrs: { "uk-slider": "finite: true; center: true" } }, [
              a("div", {
                staticClass: "uk-position-relative uk-visible-toggle uk-light",
                attrs: { tabindex: "-1" }
              }, [
                a("ul", { staticClass: "uk-slider-items instruction-slider uk-grid" }, [
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_windows_0.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [t._v("Календарь на Windows добавляется через Outlook")]),
                        a("p", [t._v("Листай вправо чтобы узнать как")])
                      ])
                    ])
                  ]),
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_windows_1.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [t._v("Выберите пункт \"Общие календари\" > \"Добавить календарь\" > \"Из Интернета...\" ")]),
                        a("p", [t._v("")])
                      ])
                    ])
                  ]),
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_windows_2.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [t._v("Вставьте скопированную ссылку в ваш календарь")])
                      ])
                    ])
                  ])
                ]),
                a("a", {
                  staticClass: "uk-position-center-left uk-position-small uk-hidden-hover slider-arrow",
                  attrs: { href: "#", "uk-slidenav-previous": "", "uk-slider-item": "previous" }
                }),
                a("a", {
                  staticClass: "uk-position-center-right uk-position-small uk-hidden-hover slider-arrow",
                  attrs: { href: "#", "uk-slidenav-next": "", "uk-slider-item": "next" }
                })
              ]),
              a("ul", { staticClass: "uk-slider-nav uk-dotnav uk-flex-center uk-margin" })
            ])
          ]),
          a("li", [
            a("div", { attrs: { "uk-slider": "finite: true; center: true" } }, [
              a("div", {
                staticClass: "uk-position-relative uk-visible-toggle uk-light",
                attrs: { tabindex: "-1" }
              }, [
                a("ul", { staticClass: "uk-slider-items instruction-slider uk-grid" }, [
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_mail_0.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [t._v("Календарь в Mail.ru")]),
                        a("p", [t._v("Листай вправо чтобы узнать как")])
                      ])
                    ])
                  ]),
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_mail_1.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [
                          t._v("Выберите свою группу, скопируйте ссылку и переходите"),
                          a("a", {
                            staticStyle: { color: "#009688" },
                            attrs: { href: "https://calendar.mail.ru/" }
                          }, [t._v(" на сайт Mail.ru календаря")])
                        ])
                      ])
                    ])
                  ]),
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_mail_2.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [t._v("Во вкладке 'Из других сервисов' выберите 'Импортировать календарь")])
                      ])
                    ])
                  ]),
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_mail_3.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [t._v("Вставьте скопированную ссылку")])
                      ])
                    ])
                  ]),
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_mail_4.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [t._v("Введите название и нажмите импортировать календарь")])
                      ])
                    ])
                  ]),
                  a("li", [
                    a("div", { staticClass: "uk-card uk-card-default" }, [
                      a("div", { staticClass: "uk-card-media-top instruction-slider-image" }, [
                        a("img", {
                          staticClass: "uk-width-large@m",
                          attrs: { src: "/images/shot_mail_5.png", alt: "" }
                        })
                      ]),
                      a("div", { staticClass: "uk-card-body" }, [
                        a("p", [t._v("Через несколько секунд календарь появится")])
                      ])
                    ])
                  ])
                ]),
                a("a", {
                  staticClass: "uk-position-center-left uk-position-small uk-hidden-hover slider-arrow",
                  attrs: { href: "#", "uk-slidenav-previous": "", "uk-slider-item": "previous" }
                }),
                a("a", {
                  staticClass: "uk-position-center-right uk-position-small uk-hidden-hover slider-arrow",
                  attrs: { href: "#", "uk-slidenav-next": "", "uk-slider-item": "next" }
                })
              ]),
              a("ul", { staticClass: "uk-slider-nav uk-dotnav uk-flex-center uk-margin" })
            ])
          ])
        ])
      ])
    }];
    var C = {
      name: "calendar-guide",
      data: function() {
        return {
          platform: m["isIOS"] || m["isMobileSafari"] || m["isSafari"] || "Mac OS" === m["osName"]
            ? "apple"
            : "Windows" === m["osName"]
              ? "windows"
              : "android"
        }
      },
      mounted: function() {
        var t = UIkit.tab(document.getElementById("uk-tab"));
        switch (this.platform) {
          case "apple":
            t.show(1);
            break;
          case "windows":
            t.show(2);
            break;
          default:
            t.show(0);
            break
        }
      }
    };
    var w = C;
    var _ = (a("7cfa"), Object(v["a"])(w, b, y, !1, null, "50498b34", null));
    var x = _.exports;
    var O = { name: "calendar", components: { CalendarUrl: g, CalendarGuide: x } };
    var S = O;
    var j = (a("b0da"), Object(v["a"])(S, i, r, !1, null, "148df27d", null));
    var P = j.exports;
    a.d(e, "a", function() { return Q });
    var Q = [
      { path: "/", name: "calendar", component: P, meta: { title: "Календарь с расписанием" }, props: !0 },
      { path: "*", redirect: "/" }
    ]
  },
  "56d7": function(t, e, a) {
    "use strict";
    a.r(e);
    (function(t) {
      a("e260");
      a("e6cf");
      a("cca6");
      a("a79d");
      var e = a("2b0e");
      var i = a("2f62");
      var r = a("8c4f");
      var s = a("3dfd");
      var n = a("5665");
      var u = a("bc3a");
      var l = a.n(u);
      var c = a("4eb5");
      var o = a.n(c);
      e["a"].use(r["a"], l.a);
      e["a"].use(o.a);
      e["a"].use(i["a"]);
      var d = new r["a"]({ routes: n["a"], hashbang: !1, mode: "history" });
      d.beforeEach(function(t, e, a) {
        document.title = t.meta.title || "Бот расписания";
        a()
      });
      var p = new i["a"].Store({ strict: !0 });
      t.app = new e["a"]({
        router: d,
        store: p,
        template: "<App/>",
        render: function(t) { return t(s["a"]) },
        el: "#app"
      })
    }).call(this, a("c8ba"))
  },
  "5c80": function(t, e, a) {
    "use strict";
    var i = a("7365");
    var r = a.n(i);
    r.a
  },
  7365: function(t, e, a) {},
  "7cfa": function(t, e, a) {
    "use strict";
    var i = a("0b82");
    var r = a.n(i);
    r.a
  },
  "85ec": function(t, e, a) {},
  b0da: function(t, e, a) {
    "use strict";
    var i = a("c028");
    var r = a.n(i);
    r.a
  },
  c028: function(t, e, a) {}
});