(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["polyfills-dom"],{

/***/ 34061:
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/polyfills/dom.js ***!
  \************************************************************/
/***/ (() => {

(function () {
  /*
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  var aa = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
  function g(a) {
    var b = aa.has(a);
    a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
    return !b && a;
  }
  function l(a) {
    var b = a.isConnected;
    if (void 0 !== b) return b;
    for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }
  function n(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
    return b && b !== a ? b.nextSibling : null;
  }
  function p(a, b, d) {
    d = void 0 === d ? new Set() : d;
    for (var c = a; c;) {
      if (c.nodeType === Node.ELEMENT_NODE) {
        var e = c;
        b(e);
        var f = e.localName;
        if ("link" === f && "import" === e.getAttribute("rel")) {
          c = e.import;
          if (c instanceof Node && !d.has(c)) for (d.add(c), c = c.firstChild; c; c = c.nextSibling) p(c, b, d);
          c = n(a, e);
          continue;
        } else if ("template" === f) {
          c = n(a, e);
          continue;
        }
        if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) p(e, b, d);
      }
      c = c.firstChild ? c.firstChild : n(a, c);
    }
  }
  function r(a, b, d) {
    a[b] = d;
  }
  ;
  function u() {
    this.a = new Map();
    this.g = new Map();
    this.c = [];
    this.f = [];
    this.b = !1;
  }
  function ba(a, b, d) {
    a.a.set(b, d);
    a.g.set(d.constructorFunction, d);
  }
  function ca(a, b) {
    a.b = !0;
    a.c.push(b);
  }
  function da(a, b) {
    a.b = !0;
    a.f.push(b);
  }
  function v(a, b) {
    a.b && p(b, function (b) {
      return w(a, b);
    });
  }
  function w(a, b) {
    if (a.b && !b.__CE_patched) {
      b.__CE_patched = !0;
      for (var d = 0; d < a.c.length; d++) a.c[d](b);
      for (d = 0; d < a.f.length; d++) a.f[d](b);
    }
  }
  function x(a, b) {
    var d = [];
    p(b, function (b) {
      return d.push(b);
    });
    for (b = 0; b < d.length; b++) {
      var c = d[b];
      1 === c.__CE_state ? a.connectedCallback(c) : y(a, c);
    }
  }
  function z(a, b) {
    var d = [];
    p(b, function (b) {
      return d.push(b);
    });
    for (b = 0; b < d.length; b++) {
      var c = d[b];
      1 === c.__CE_state && a.disconnectedCallback(c);
    }
  }
  function A(a, b, d) {
    d = void 0 === d ? {} : d;
    var c = d.u || new Set(),
      e = d.i || function (b) {
        return y(a, b);
      },
      f = [];
    p(b, function (b) {
      if ("link" === b.localName && "import" === b.getAttribute("rel")) {
        var d = b.import;
        d instanceof Node && (d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0);
        d && "complete" === d.readyState ? d.__CE_documentLoadHandled = !0 : b.addEventListener("load", function () {
          var d = b.import;
          if (!d.__CE_documentLoadHandled) {
            d.__CE_documentLoadHandled = !0;
            var f = new Set(c);
            f.delete(d);
            A(a, d, {
              u: f,
              i: e
            });
          }
        });
      } else f.push(b);
    }, c);
    if (a.b) for (b = 0; b < f.length; b++) w(a, f[b]);
    for (b = 0; b < f.length; b++) e(f[b]);
  }
  function y(a, b) {
    if (void 0 === b.__CE_state) {
      var d = b.ownerDocument;
      if (d.defaultView || d.__CE_isImportDocument && d.__CE_hasRegistry) if (d = a.a.get(b.localName)) {
        d.constructionStack.push(b);
        var c = d.constructorFunction;
        try {
          try {
            if (new c() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            d.constructionStack.pop();
          }
        } catch (t) {
          throw b.__CE_state = 2, t;
        }
        b.__CE_state = 1;
        b.__CE_definition = d;
        if (d.attributeChangedCallback) for (d = d.observedAttributes, c = 0; c < d.length; c++) {
          var e = d[c],
            f = b.getAttribute(e);
          null !== f && a.attributeChangedCallback(b, e, null, f, null);
        }
        l(b) && a.connectedCallback(b);
      }
    }
  }
  u.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;
    b.connectedCallback && b.connectedCallback.call(a);
  };
  u.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;
    b.disconnectedCallback && b.disconnectedCallback.call(a);
  };
  u.prototype.attributeChangedCallback = function (a, b, d, c, e) {
    var f = a.__CE_definition;
    f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, d, c, e);
  };
  function B(a) {
    var b = document;
    this.c = a;
    this.a = b;
    this.b = void 0;
    A(this.c, this.a);
    "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
      childList: !0,
      subtree: !0
    }));
  }
  function C(a) {
    a.b && a.b.disconnect();
  }
  B.prototype.f = function (a) {
    var b = this.a.readyState;
    "interactive" !== b && "complete" !== b || C(this);
    for (b = 0; b < a.length; b++) for (var d = a[b].addedNodes, c = 0; c < d.length; c++) A(this.c, d[c]);
  };
  function ea() {
    var a = this;
    this.b = this.a = void 0;
    this.c = new Promise(function (b) {
      a.b = b;
      a.a && b(a.a);
    });
  }
  function D(a) {
    if (a.a) throw Error("Already resolved.");
    a.a = void 0;
    a.b && a.b(void 0);
  }
  ;
  function E(a) {
    this.c = !1;
    this.a = a;
    this.j = new Map();
    this.f = function (b) {
      return b();
    };
    this.b = !1;
    this.g = [];
    this.o = new B(a);
  }
  E.prototype.l = function (a, b) {
    var d = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
    if (!g(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
    if (this.a.a.get(a)) throw Error("A custom element with name '" + a + "' has already been defined.");
    if (this.c) throw Error("A custom element is already being defined.");
    this.c = !0;
    try {
      var c = function (b) {
          var a = e[b];
          if (void 0 !== a && !(a instanceof Function)) throw Error("The '" + b + "' callback must be a function.");
          return a;
        },
        e = b.prototype;
      if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
      var f = c("connectedCallback");
      var t = c("disconnectedCallback");
      var k = c("adoptedCallback");
      var h = c("attributeChangedCallback");
      var m = b.observedAttributes || [];
    } catch (q) {
      return;
    } finally {
      this.c = !1;
    }
    b = {
      localName: a,
      constructorFunction: b,
      connectedCallback: f,
      disconnectedCallback: t,
      adoptedCallback: k,
      attributeChangedCallback: h,
      observedAttributes: m,
      constructionStack: []
    };
    ba(this.a, a, b);
    this.g.push(b);
    this.b || (this.b = !0, this.f(function () {
      return fa(d);
    }));
  };
  E.prototype.i = function (a) {
    A(this.a, a);
  };
  function fa(a) {
    if (!1 !== a.b) {
      a.b = !1;
      for (var b = a.g, d = [], c = new Map(), e = 0; e < b.length; e++) c.set(b[e].localName, []);
      A(a.a, document, {
        i: function (b) {
          if (void 0 === b.__CE_state) {
            var e = b.localName,
              f = c.get(e);
            f ? f.push(b) : a.a.a.get(e) && d.push(b);
          }
        }
      });
      for (e = 0; e < d.length; e++) y(a.a, d[e]);
      for (; 0 < b.length;) {
        var f = b.shift();
        e = f.localName;
        f = c.get(f.localName);
        for (var t = 0; t < f.length; t++) y(a.a, f[t]);
        (e = a.j.get(e)) && D(e);
      }
    }
  }
  E.prototype.get = function (a) {
    if (a = this.a.a.get(a)) return a.constructorFunction;
  };
  E.prototype.m = function (a) {
    if (!g(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
    var b = this.j.get(a);
    if (b) return b.c;
    b = new ea();
    this.j.set(a, b);
    this.a.a.get(a) && !this.g.some(function (b) {
      return b.localName === a;
    }) && D(b);
    return b.c;
  };
  E.prototype.s = function (a) {
    C(this.o);
    var b = this.f;
    this.f = function (d) {
      return a(function () {
        return b(d);
      });
    };
  };
  window.CustomElementRegistry = E;
  E.prototype.define = E.prototype.l;
  E.prototype.upgrade = E.prototype.i;
  E.prototype.get = E.prototype.get;
  E.prototype.whenDefined = E.prototype.m;
  E.prototype.polyfillWrapFlushCallback = E.prototype.s;
  var F = window.Document.prototype.createElement,
    G = window.Document.prototype.createElementNS,
    ha = window.Document.prototype.importNode,
    ia = window.Document.prototype.prepend,
    ja = window.Document.prototype.append,
    ka = window.DocumentFragment.prototype.prepend,
    la = window.DocumentFragment.prototype.append,
    H = window.Node.prototype.cloneNode,
    I = window.Node.prototype.appendChild,
    J = window.Node.prototype.insertBefore,
    K = window.Node.prototype.removeChild,
    L = window.Node.prototype.replaceChild,
    M = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
    N = window.Element.prototype.attachShadow,
    O = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
    P = window.Element.prototype.getAttribute,
    Q = window.Element.prototype.setAttribute,
    R = window.Element.prototype.removeAttribute,
    S = window.Element.prototype.getAttributeNS,
    T = window.Element.prototype.setAttributeNS,
    U = window.Element.prototype.removeAttributeNS,
    ma = window.Element.prototype.insertAdjacentElement,
    na = window.Element.prototype.insertAdjacentHTML,
    oa = window.Element.prototype.prepend,
    pa = window.Element.prototype.append,
    V = window.Element.prototype.before,
    qa = window.Element.prototype.after,
    ra = window.Element.prototype.replaceWith,
    sa = window.Element.prototype.remove,
    ta = window.HTMLElement,
    W = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
    ua = window.HTMLElement.prototype.insertAdjacentElement,
    va = window.HTMLElement.prototype.insertAdjacentHTML;
  var wa = new function () {}();
  function xa() {
    var a = X;
    window.HTMLElement = function () {
      function b() {
        var b = this.constructor,
          c = a.g.get(b);
        if (!c) throw Error("The custom element being constructed was not registered with `customElements`.");
        var e = c.constructionStack;
        if (0 === e.length) return e = F.call(document, c.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = c, w(a, e), e;
        c = e.length - 1;
        var f = e[c];
        if (f === wa) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
        e[c] = wa;
        Object.setPrototypeOf(f, b.prototype);
        w(a, f);
        return f;
      }
      b.prototype = ta.prototype;
      Object.defineProperty(b.prototype, "constructor", {
        writable: !0,
        configurable: !0,
        enumerable: !1,
        value: b
      });
      return b;
    }();
  }
  ;
  function Y(a, b, d) {
    function c(b) {
      return function (d) {
        for (var e = [], c = 0; c < arguments.length; ++c) e[c] = arguments[c];
        c = [];
        for (var f = [], m = 0; m < e.length; m++) {
          var q = e[m];
          q instanceof Element && l(q) && f.push(q);
          if (q instanceof DocumentFragment) for (q = q.firstChild; q; q = q.nextSibling) c.push(q);else c.push(q);
        }
        b.apply(this, e);
        for (e = 0; e < f.length; e++) z(a, f[e]);
        if (l(this)) for (e = 0; e < c.length; e++) f = c[e], f instanceof Element && x(a, f);
      };
    }
    void 0 !== d.h && (b.prepend = c(d.h));
    void 0 !== d.append && (b.append = c(d.append));
  }
  ;
  function ya() {
    var a = X;
    r(Document.prototype, "createElement", function (b) {
      if (this.__CE_hasRegistry) {
        var d = a.a.get(b);
        if (d) return new d.constructorFunction();
      }
      b = F.call(this, b);
      w(a, b);
      return b;
    });
    r(Document.prototype, "importNode", function (b, d) {
      b = ha.call(this, b, !!d);
      this.__CE_hasRegistry ? A(a, b) : v(a, b);
      return b;
    });
    r(Document.prototype, "createElementNS", function (b, d) {
      if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
        var c = a.a.get(d);
        if (c) return new c.constructorFunction();
      }
      b = G.call(this, b, d);
      w(a, b);
      return b;
    });
    Y(a, Document.prototype, {
      h: ia,
      append: ja
    });
  }
  ;
  function za() {
    function a(a, c) {
      Object.defineProperty(a, "textContent", {
        enumerable: c.enumerable,
        configurable: !0,
        get: c.get,
        set: function (a) {
          if (this.nodeType === Node.TEXT_NODE) c.set.call(this, a);else {
            var d = void 0;
            if (this.firstChild) {
              var e = this.childNodes,
                k = e.length;
              if (0 < k && l(this)) {
                d = Array(k);
                for (var h = 0; h < k; h++) d[h] = e[h];
              }
            }
            c.set.call(this, a);
            if (d) for (a = 0; a < d.length; a++) z(b, d[a]);
          }
        }
      });
    }
    var b = X;
    r(Node.prototype, "insertBefore", function (a, c) {
      if (a instanceof DocumentFragment) {
        var e = Array.prototype.slice.apply(a.childNodes);
        a = J.call(this, a, c);
        if (l(this)) for (c = 0; c < e.length; c++) x(b, e[c]);
        return a;
      }
      e = l(a);
      c = J.call(this, a, c);
      e && z(b, a);
      l(this) && x(b, a);
      return c;
    });
    r(Node.prototype, "appendChild", function (a) {
      if (a instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(a.childNodes);
        a = I.call(this, a);
        if (l(this)) for (var e = 0; e < c.length; e++) x(b, c[e]);
        return a;
      }
      c = l(a);
      e = I.call(this, a);
      c && z(b, a);
      l(this) && x(b, a);
      return e;
    });
    r(Node.prototype, "cloneNode", function (a) {
      a = H.call(this, !!a);
      this.ownerDocument.__CE_hasRegistry ? A(b, a) : v(b, a);
      return a;
    });
    r(Node.prototype, "removeChild", function (a) {
      var c = l(a),
        e = K.call(this, a);
      c && z(b, a);
      return e;
    });
    r(Node.prototype, "replaceChild", function (a, c) {
      if (a instanceof DocumentFragment) {
        var e = Array.prototype.slice.apply(a.childNodes);
        a = L.call(this, a, c);
        if (l(this)) for (z(b, c), c = 0; c < e.length; c++) x(b, e[c]);
        return a;
      }
      e = l(a);
      var f = L.call(this, a, c),
        d = l(this);
      d && z(b, c);
      e && z(b, a);
      d && x(b, a);
      return f;
    });
    M && M.get ? a(Node.prototype, M) : ca(b, function (b) {
      a(b, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          for (var a = [], b = 0; b < this.childNodes.length; b++) {
            var f = this.childNodes[b];
            f.nodeType !== Node.COMMENT_NODE && a.push(f.textContent);
          }
          return a.join("");
        },
        set: function (a) {
          for (; this.firstChild;) K.call(this, this.firstChild);
          null != a && "" !== a && I.call(this, document.createTextNode(a));
        }
      });
    });
  }
  ;
  function Aa(a) {
    function b(b) {
      return function (e) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        d = [];
        for (var k = [], h = 0; h < c.length; h++) {
          var m = c[h];
          m instanceof Element && l(m) && k.push(m);
          if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) d.push(m);else d.push(m);
        }
        b.apply(this, c);
        for (c = 0; c < k.length; c++) z(a, k[c]);
        if (l(this)) for (c = 0; c < d.length; c++) k = d[c], k instanceof Element && x(a, k);
      };
    }
    var d = Element.prototype;
    void 0 !== V && (d.before = b(V));
    void 0 !== V && (d.after = b(qa));
    void 0 !== ra && r(d, "replaceWith", function (b) {
      for (var e = [], c = 0; c < arguments.length; ++c) e[c] = arguments[c];
      c = [];
      for (var d = [], k = 0; k < e.length; k++) {
        var h = e[k];
        h instanceof Element && l(h) && d.push(h);
        if (h instanceof DocumentFragment) for (h = h.firstChild; h; h = h.nextSibling) c.push(h);else c.push(h);
      }
      k = l(this);
      ra.apply(this, e);
      for (e = 0; e < d.length; e++) z(a, d[e]);
      if (k) for (z(a, this), e = 0; e < c.length; e++) d = c[e], d instanceof Element && x(a, d);
    });
    void 0 !== sa && r(d, "remove", function () {
      var b = l(this);
      sa.call(this);
      b && z(a, this);
    });
  }
  ;
  function Ba() {
    function a(a, b) {
      Object.defineProperty(a, "innerHTML", {
        enumerable: b.enumerable,
        configurable: !0,
        get: b.get,
        set: function (a) {
          var e = this,
            d = void 0;
          l(this) && (d = [], p(this, function (a) {
            a !== e && d.push(a);
          }));
          b.set.call(this, a);
          if (d) for (var f = 0; f < d.length; f++) {
            var t = d[f];
            1 === t.__CE_state && c.disconnectedCallback(t);
          }
          this.ownerDocument.__CE_hasRegistry ? A(c, this) : v(c, this);
          return a;
        }
      });
    }
    function b(a, b) {
      r(a, "insertAdjacentElement", function (a, e) {
        var d = l(e);
        a = b.call(this, a, e);
        d && z(c, e);
        l(a) && x(c, e);
        return a;
      });
    }
    function d(a, b) {
      function e(a, b) {
        for (var e = []; a !== b; a = a.nextSibling) e.push(a);
        for (b = 0; b < e.length; b++) A(c, e[b]);
      }
      r(a, "insertAdjacentHTML", function (a, c) {
        a = a.toLowerCase();
        if ("beforebegin" === a) {
          var d = this.previousSibling;
          b.call(this, a, c);
          e(d || this.parentNode.firstChild, this);
        } else if ("afterbegin" === a) d = this.firstChild, b.call(this, a, c), e(this.firstChild, d);else if ("beforeend" === a) d = this.lastChild, b.call(this, a, c), e(d || this.firstChild, null);else if ("afterend" === a) d = this.nextSibling, b.call(this, a, c), e(this.nextSibling, d);else throw new SyntaxError("The value provided (" + String(a) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      });
    }
    var c = X;
    N && r(Element.prototype, "attachShadow", function (a) {
      a = N.call(this, a);
      var b = c;
      if (b.b && !a.__CE_patched) {
        a.__CE_patched = !0;
        for (var e = 0; e < b.c.length; e++) b.c[e](a);
      }
      return this.__CE_shadowRoot = a;
    });
    O && O.get ? a(Element.prototype, O) : W && W.get ? a(HTMLElement.prototype, W) : da(c, function (b) {
      a(b, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return H.call(this, !0).innerHTML;
        },
        set: function (a) {
          var b = "template" === this.localName,
            c = b ? this.content : this,
            e = G.call(document, this.namespaceURI, this.localName);
          for (e.innerHTML = a; 0 < c.childNodes.length;) K.call(c, c.childNodes[0]);
          for (a = b ? e.content : e; 0 < a.childNodes.length;) I.call(c, a.childNodes[0]);
        }
      });
    });
    r(Element.prototype, "setAttribute", function (a, b) {
      if (1 !== this.__CE_state) return Q.call(this, a, b);
      var e = P.call(this, a);
      Q.call(this, a, b);
      b = P.call(this, a);
      c.attributeChangedCallback(this, a, e, b, null);
    });
    r(Element.prototype, "setAttributeNS", function (a, b, d) {
      if (1 !== this.__CE_state) return T.call(this, a, b, d);
      var e = S.call(this, a, b);
      T.call(this, a, b, d);
      d = S.call(this, a, b);
      c.attributeChangedCallback(this, b, e, d, a);
    });
    r(Element.prototype, "removeAttribute", function (a) {
      if (1 !== this.__CE_state) return R.call(this, a);
      var b = P.call(this, a);
      R.call(this, a);
      null !== b && c.attributeChangedCallback(this, a, b, null, null);
    });
    r(Element.prototype, "removeAttributeNS", function (a, b) {
      if (1 !== this.__CE_state) return U.call(this, a, b);
      var d = S.call(this, a, b);
      U.call(this, a, b);
      var e = S.call(this, a, b);
      d !== e && c.attributeChangedCallback(this, b, d, e, a);
    });
    ua ? b(HTMLElement.prototype, ua) : ma ? b(Element.prototype, ma) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
    va ? d(HTMLElement.prototype, va) : na ? d(Element.prototype, na) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");
    Y(c, Element.prototype, {
      h: oa,
      append: pa
    });
    Aa(c);
  }
  ;
  var Z = window.customElements;
  if (!Z || Z.forcePolyfill || "function" != typeof Z.define || "function" != typeof Z.get) {
    var X = new u();
    xa();
    ya();
    Y(X, DocumentFragment.prototype, {
      h: ka,
      append: la
    });
    za();
    Ba();
    document.__CE_hasRegistry = !0;
    var customElements = new E(X);
    Object.defineProperty(window, "customElements", {
      configurable: !0,
      enumerable: !0,
      value: customElements
    });
  }
  ;
}).call(self);

// Polyfill document.baseURI
"string" !== typeof document.baseURI && Object.defineProperty(Document.prototype, "baseURI", {
  enumerable: !0,
  configurable: !0,
  get: function () {
    var a = document.querySelector("base");
    return a && a.href ? a.href : document.URL;
  }
});

// Polyfill CustomEvent
"function" !== typeof window.CustomEvent && (window.CustomEvent = function (c, a) {
  a = a || {
    bubbles: !1,
    cancelable: !1,
    detail: void 0
  };
  var b = document.createEvent("CustomEvent");
  b.initCustomEvent(c, a.bubbles, a.cancelable, a.detail);
  return b;
}, window.CustomEvent.prototype = window.Event.prototype);

// Event.composedPath
(function (b, c, d) {
  b.composedPath || (b.composedPath = function () {
    if (this.path) return this.path;
    var a = this.target;
    for (this.path = []; null !== a.parentNode;) this.path.push(a), a = a.parentNode;
    this.path.push(c, d);
    return this.path;
  });
})(Event.prototype, document, window);

/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/
(function (a) {
  "function" !== typeof a.matches && (a.matches = a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || function (a) {
    a = (this.document || this.ownerDocument).querySelectorAll(a);
    for (var b = 0; a[b] && a[b] !== this;) ++b;
    return !!a[b];
  });
  "function" !== typeof a.closest && (a.closest = function (a) {
    for (var b = this; b && 1 === b.nodeType;) {
      if (b.matches(a)) return b;
      b = b.parentNode;
    }
    return null;
  });
})(window.Element.prototype);

/*!
Element.getRootNode()
*/
(function (c) {
  function d(a) {
    a = b(a);
    return a && 11 === a.nodeType ? d(a.host) : a;
  }
  function b(a) {
    return a && a.parentNode ? b(a.parentNode) : a;
  }
  "function" !== typeof c.getRootNode && (c.getRootNode = function (a) {
    return a && a.composed ? d(this) : b(this);
  });
})(Element.prototype);

/*!
Element.isConnected()
*/
(function (a) {
  "isConnected" in a || Object.defineProperty(a, "isConnected", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      var a = this.getRootNode({
        composed: !0
      });
      return a && 9 === a.nodeType;
    }
  });
})(Element.prototype);

/*!
Element.remove()
*/
(function (b) {
  b.forEach(function (a) {
    a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: function () {
        null !== this.parentNode && this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/*!
Element.classList
*/
!function (e) {
  'classList' in e || Object.defineProperty(e, "classList", {
    get: function () {
      var e = this,
        t = (e.getAttribute("class") || "").replace(/^\s+|\s$/g, "").split(/\s+/g);
      function n() {
        t.length > 0 ? e.setAttribute("class", t.join(" ")) : e.removeAttribute("class");
      }
      return "" === t[0] && t.splice(0, 1), t.toggle = function (e, i) {
        void 0 !== i ? i ? t.add(e) : t.remove(e) : -1 !== t.indexOf(e) ? t.splice(t.indexOf(e), 1) : t.push(e), n();
      }, t.add = function () {
        for (var e = [].slice.call(arguments), i = 0, s = e.length; i < s; i++) -1 === t.indexOf(e[i]) && t.push(e[i]);
        n();
      }, t.remove = function () {
        for (var e = [].slice.call(arguments), i = 0, s = e.length; i < s; i++) -1 !== t.indexOf(e[i]) && t.splice(t.indexOf(e[i]), 1);
        n();
      }, t.item = function (e) {
        return t[e];
      }, t.contains = function (e) {
        return -1 !== t.indexOf(e);
      }, t.replace = function (e, i) {
        -1 !== t.indexOf(e) && t.splice(t.indexOf(e), 1, i), n();
      }, t.value = e.getAttribute("class") || "", t;
    }
  });
}(Element.prototype);

/*!
DOMTokenList
*/
(function (b) {
  try {
    document.body.classList.add();
  } catch (e) {
    var c = b.add,
      d = b.remove;
    b.add = function () {
      for (var a = 0; a < arguments.length; a++) c.call(this, arguments[a]);
    };
    b.remove = function () {
      for (var a = 0; a < arguments.length; a++) d.call(this, arguments[a]);
    };
  }
})(DOMTokenList.prototype);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxZQUFVO01BQUMsS0FBSSxJQUFJM0osQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDNEssU0FBUyxDQUFDcEksTUFBTSxFQUFDeEMsQ0FBQyxFQUFFLEVBQUNlLENBQUMsQ0FBQ2tELElBQUksQ0FBQyxJQUFJLEVBQUMyRyxTQUFTLENBQUM1SyxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7RUFBQTtBQUFDLENBQUMsRUFBRXdPLFlBQVksQ0FBQ3hLLFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vcG9seWZpbGxzL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcbiAgLypcbiAgICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAgICBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICAgIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICAgIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gICAgc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAgKi9cbiAgJ3VzZSBzdHJpY3QnO3ZhciBhYT1uZXcgU2V0KFwiYW5ub3RhdGlvbi14bWwgY29sb3ItcHJvZmlsZSBmb250LWZhY2UgZm9udC1mYWNlLXNyYyBmb250LWZhY2UtdXJpIGZvbnQtZmFjZS1mb3JtYXQgZm9udC1mYWNlLW5hbWUgbWlzc2luZy1nbHlwaFwiLnNwbGl0KFwiIFwiKSk7ZnVuY3Rpb24gZyhhKXt2YXIgYj1hYS5oYXMoYSk7YT0vXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGEpO3JldHVybiFiJiZhfWZ1bmN0aW9uIGwoYSl7dmFyIGI9YS5pc0Nvbm5lY3RlZDtpZih2b2lkIDAhPT1iKXJldHVybiBiO2Zvcig7YSYmIShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fCh3aW5kb3cuU2hhZG93Um9vdCYmYSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/YS5ob3N0OnZvaWQgMCk7cmV0dXJuISghYXx8IShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KSl9XG4gIGZ1bmN0aW9uIG4oYSxiKXtmb3IoO2ImJmIhPT1hJiYhYi5uZXh0U2libGluZzspYj1iLnBhcmVudE5vZGU7cmV0dXJuIGImJmIhPT1hP2IubmV4dFNpYmxpbmc6bnVsbH1cbiAgZnVuY3Rpb24gcChhLGIsZCl7ZD12b2lkIDA9PT1kP25ldyBTZXQ6ZDtmb3IodmFyIGM9YTtjOyl7aWYoYy5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXt2YXIgZT1jO2IoZSk7dmFyIGY9ZS5sb2NhbE5hbWU7aWYoXCJsaW5rXCI9PT1mJiZcImltcG9ydFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe2M9ZS5pbXBvcnQ7aWYoYyBpbnN0YW5jZW9mIE5vZGUmJiFkLmhhcyhjKSlmb3IoZC5hZGQoYyksYz1jLmZpcnN0Q2hpbGQ7YztjPWMubmV4dFNpYmxpbmcpcChjLGIsZCk7Yz1uKGEsZSk7Y29udGludWV9ZWxzZSBpZihcInRlbXBsYXRlXCI9PT1mKXtjPW4oYSxlKTtjb250aW51ZX1pZihlPWUuX19DRV9zaGFkb3dSb290KWZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylwKGUsYixkKX1jPWMuZmlyc3RDaGlsZD9jLmZpcnN0Q2hpbGQ6bihhLGMpfX1mdW5jdGlvbiByKGEsYixkKXthW2JdPWR9O2Z1bmN0aW9uIHUoKXt0aGlzLmE9bmV3IE1hcDt0aGlzLmc9bmV3IE1hcDt0aGlzLmM9W107dGhpcy5mPVtdO3RoaXMuYj0hMX1mdW5jdGlvbiBiYShhLGIsZCl7YS5hLnNldChiLGQpO2EuZy5zZXQoZC5jb25zdHJ1Y3RvckZ1bmN0aW9uLGQpfWZ1bmN0aW9uIGNhKGEsYil7YS5iPSEwO2EuYy5wdXNoKGIpfWZ1bmN0aW9uIGRhKGEsYil7YS5iPSEwO2EuZi5wdXNoKGIpfWZ1bmN0aW9uIHYoYSxiKXthLmImJnAoYixmdW5jdGlvbihiKXtyZXR1cm4gdyhhLGIpfSl9ZnVuY3Rpb24gdyhhLGIpe2lmKGEuYiYmIWIuX19DRV9wYXRjaGVkKXtiLl9fQ0VfcGF0Y2hlZD0hMDtmb3IodmFyIGQ9MDtkPGEuYy5sZW5ndGg7ZCsrKWEuY1tkXShiKTtmb3IoZD0wO2Q8YS5mLmxlbmd0aDtkKyspYS5mW2RdKGIpfX1cbiAgZnVuY3Rpb24geChhLGIpe3ZhciBkPVtdO3AoYixmdW5jdGlvbihiKXtyZXR1cm4gZC5wdXNoKGIpfSk7Zm9yKGI9MDtiPGQubGVuZ3RoO2IrKyl7dmFyIGM9ZFtiXTsxPT09Yy5fX0NFX3N0YXRlP2EuY29ubmVjdGVkQ2FsbGJhY2soYyk6eShhLGMpfX1mdW5jdGlvbiB6KGEsYil7dmFyIGQ9W107cChiLGZ1bmN0aW9uKGIpe3JldHVybiBkLnB1c2goYil9KTtmb3IoYj0wO2I8ZC5sZW5ndGg7YisrKXt2YXIgYz1kW2JdOzE9PT1jLl9fQ0Vfc3RhdGUmJmEuZGlzY29ubmVjdGVkQ2FsbGJhY2soYyl9fVxuICBmdW5jdGlvbiBBKGEsYixkKXtkPXZvaWQgMD09PWQ/e306ZDt2YXIgYz1kLnV8fG5ldyBTZXQsZT1kLml8fGZ1bmN0aW9uKGIpe3JldHVybiB5KGEsYil9LGY9W107cChiLGZ1bmN0aW9uKGIpe2lmKFwibGlua1wiPT09Yi5sb2NhbE5hbWUmJlwiaW1wb3J0XCI9PT1iLmdldEF0dHJpYnV0ZShcInJlbFwiKSl7dmFyIGQ9Yi5pbXBvcnQ7ZCBpbnN0YW5jZW9mIE5vZGUmJihkLl9fQ0VfaXNJbXBvcnREb2N1bWVudD0hMCxkLl9fQ0VfaGFzUmVnaXN0cnk9ITApO2QmJlwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZT9kLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZD0hMDpiLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXt2YXIgZD1iLmltcG9ydDtpZighZC5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpe2QuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkPSEwO3ZhciBmPW5ldyBTZXQoYyk7Zi5kZWxldGUoZCk7QShhLGQse3U6ZixpOmV9KX19KX1lbHNlIGYucHVzaChiKX0sYyk7aWYoYS5iKWZvcihiPVxuICAwO2I8Zi5sZW5ndGg7YisrKXcoYSxmW2JdKTtmb3IoYj0wO2I8Zi5sZW5ndGg7YisrKWUoZltiXSl9XG4gIGZ1bmN0aW9uIHkoYSxiKXtpZih2b2lkIDA9PT1iLl9fQ0Vfc3RhdGUpe3ZhciBkPWIub3duZXJEb2N1bWVudDtpZihkLmRlZmF1bHRWaWV3fHxkLl9fQ0VfaXNJbXBvcnREb2N1bWVudCYmZC5fX0NFX2hhc1JlZ2lzdHJ5KWlmKGQ9YS5hLmdldChiLmxvY2FsTmFtZSkpe2QuY29uc3RydWN0aW9uU3RhY2sucHVzaChiKTt2YXIgYz1kLmNvbnN0cnVjdG9yRnVuY3Rpb247dHJ5e3RyeXtpZihuZXcgYyE9PWIpdGhyb3cgRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IgZGlkIG5vdCBwcm9kdWNlIHRoZSBlbGVtZW50IGJlaW5nIHVwZ3JhZGVkLlwiKTt9ZmluYWxseXtkLmNvbnN0cnVjdGlvblN0YWNrLnBvcCgpfX1jYXRjaCh0KXt0aHJvdyBiLl9fQ0Vfc3RhdGU9Mix0O31iLl9fQ0Vfc3RhdGU9MTtiLl9fQ0VfZGVmaW5pdGlvbj1kO2lmKGQuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKWZvcihkPWQub2JzZXJ2ZWRBdHRyaWJ1dGVzLGM9MDtjPGQubGVuZ3RoO2MrKyl7dmFyIGU9XG4gIGRbY10sZj1iLmdldEF0dHJpYnV0ZShlKTtudWxsIT09ZiYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYixlLG51bGwsZixudWxsKX1sKGIpJiZhLmNvbm5lY3RlZENhbGxiYWNrKGIpfX19dS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9YS5fX0NFX2RlZmluaXRpb247Yi5jb25uZWN0ZWRDYWxsYmFjayYmYi5jb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpfTt1LnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmRpc2Nvbm5lY3RlZENhbGxiYWNrJiZiLmRpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O1xuICB1LnByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGQsYyxlKXt2YXIgZj1hLl9fQ0VfZGVmaW5pdGlvbjtmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmLTE8Zi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihiKSYmZi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2suY2FsbChhLGIsZCxjLGUpfTtmdW5jdGlvbiBCKGEpe3ZhciBiPWRvY3VtZW50O3RoaXMuYz1hO3RoaXMuYT1iO3RoaXMuYj12b2lkIDA7QSh0aGlzLmMsdGhpcy5hKTtcImxvYWRpbmdcIj09PXRoaXMuYS5yZWFkeVN0YXRlJiYodGhpcy5iPW5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuZi5iaW5kKHRoaXMpKSx0aGlzLmIub2JzZXJ2ZSh0aGlzLmEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSkpfWZ1bmN0aW9uIEMoYSl7YS5iJiZhLmIuZGlzY29ubmVjdCgpfUIucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLnJlYWR5U3RhdGU7XCJpbnRlcmFjdGl2ZVwiIT09YiYmXCJjb21wbGV0ZVwiIT09Ynx8Qyh0aGlzKTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKWZvcih2YXIgZD1hW2JdLmFkZGVkTm9kZXMsYz0wO2M8ZC5sZW5ndGg7YysrKUEodGhpcy5jLGRbY10pfTtmdW5jdGlvbiBlYSgpe3ZhciBhPXRoaXM7dGhpcy5iPXRoaXMuYT12b2lkIDA7dGhpcy5jPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGIpe2EuYj1iO2EuYSYmYihhLmEpfSl9ZnVuY3Rpb24gRChhKXtpZihhLmEpdGhyb3cgRXJyb3IoXCJBbHJlYWR5IHJlc29sdmVkLlwiKTthLmE9dm9pZCAwO2EuYiYmYS5iKHZvaWQgMCl9O2Z1bmN0aW9uIEUoYSl7dGhpcy5jPSExO3RoaXMuYT1hO3RoaXMuaj1uZXcgTWFwO3RoaXMuZj1mdW5jdGlvbihiKXtyZXR1cm4gYigpfTt0aGlzLmI9ITE7dGhpcy5nPVtdO3RoaXMubz1uZXcgQihhKX1cbiAgRS5wcm90b3R5cGUubD1mdW5jdGlvbihhLGIpe3ZhciBkPXRoaXM7aWYoIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBmdW5jdGlvbnMuXCIpO2lmKCFnKGEpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBlbGVtZW50IG5hbWUgJ1wiK2ErXCInIGlzIG5vdCB2YWxpZC5cIik7aWYodGhpcy5hLmEuZ2V0KGEpKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCB3aXRoIG5hbWUgJ1wiK2ErXCInIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5cIik7aWYodGhpcy5jKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIGRlZmluZWQuXCIpO3RoaXMuYz0hMDt0cnl7dmFyIGM9ZnVuY3Rpb24oYil7dmFyIGE9ZVtiXTtpZih2b2lkIDAhPT1hJiYhKGEgaW5zdGFuY2VvZiBGdW5jdGlvbikpdGhyb3cgRXJyb3IoXCJUaGUgJ1wiK2IrXCInIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7XG4gIHJldHVybiBhfSxlPWIucHJvdG90eXBlO2lmKCEoZSBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcidzIHByb3RvdHlwZSBpcyBub3QgYW4gb2JqZWN0LlwiKTt2YXIgZj1jKFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIHQ9YyhcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBrPWMoXCJhZG9wdGVkQ2FsbGJhY2tcIik7dmFyIGg9YyhcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiKTt2YXIgbT1iLm9ic2VydmVkQXR0cmlidXRlc3x8W119Y2F0Y2gocSl7cmV0dXJufWZpbmFsbHl7dGhpcy5jPSExfWI9e2xvY2FsTmFtZTphLGNvbnN0cnVjdG9yRnVuY3Rpb246Yixjb25uZWN0ZWRDYWxsYmFjazpmLGRpc2Nvbm5lY3RlZENhbGxiYWNrOnQsYWRvcHRlZENhbGxiYWNrOmssYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOmgsb2JzZXJ2ZWRBdHRyaWJ1dGVzOm0sY29uc3RydWN0aW9uU3RhY2s6W119O2JhKHRoaXMuYSxcbiAgYSxiKTt0aGlzLmcucHVzaChiKTt0aGlzLmJ8fCh0aGlzLmI9ITAsdGhpcy5mKGZ1bmN0aW9uKCl7cmV0dXJuIGZhKGQpfSkpfTtFLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe0EodGhpcy5hLGEpfTtcbiAgZnVuY3Rpb24gZmEoYSl7aWYoITEhPT1hLmIpe2EuYj0hMTtmb3IodmFyIGI9YS5nLGQ9W10sYz1uZXcgTWFwLGU9MDtlPGIubGVuZ3RoO2UrKyljLnNldChiW2VdLmxvY2FsTmFtZSxbXSk7QShhLmEsZG9jdW1lbnQse2k6ZnVuY3Rpb24oYil7aWYodm9pZCAwPT09Yi5fX0NFX3N0YXRlKXt2YXIgZT1iLmxvY2FsTmFtZSxmPWMuZ2V0KGUpO2Y/Zi5wdXNoKGIpOmEuYS5hLmdldChlKSYmZC5wdXNoKGIpfX19KTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSsrKXkoYS5hLGRbZV0pO2Zvcig7MDxiLmxlbmd0aDspe3ZhciBmPWIuc2hpZnQoKTtlPWYubG9jYWxOYW1lO2Y9Yy5nZXQoZi5sb2NhbE5hbWUpO2Zvcih2YXIgdD0wO3Q8Zi5sZW5ndGg7dCsrKXkoYS5hLGZbdF0pOyhlPWEuai5nZXQoZSkpJiZEKGUpfX19RS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe2lmKGE9dGhpcy5hLmEuZ2V0KGEpKXJldHVybiBhLmNvbnN0cnVjdG9yRnVuY3Rpb259O1xuICBFLnByb3RvdHlwZS5tPWZ1bmN0aW9uKGEpe2lmKCFnKGEpKXJldHVybiBQcm9taXNlLnJlamVjdChuZXcgU3ludGF4RXJyb3IoXCInXCIrYStcIicgaXMgbm90IGEgdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZS5cIikpO3ZhciBiPXRoaXMuai5nZXQoYSk7aWYoYilyZXR1cm4gYi5jO2I9bmV3IGVhO3RoaXMuai5zZXQoYSxiKTt0aGlzLmEuYS5nZXQoYSkmJiF0aGlzLmcuc29tZShmdW5jdGlvbihiKXtyZXR1cm4gYi5sb2NhbE5hbWU9PT1hfSkmJkQoYik7cmV0dXJuIGIuY307RS5wcm90b3R5cGUucz1mdW5jdGlvbihhKXtDKHRoaXMubyk7dmFyIGI9dGhpcy5mO3RoaXMuZj1mdW5jdGlvbihkKXtyZXR1cm4gYShmdW5jdGlvbigpe3JldHVybiBiKGQpfSl9fTt3aW5kb3cuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5PUU7RS5wcm90b3R5cGUuZGVmaW5lPUUucHJvdG90eXBlLmw7RS5wcm90b3R5cGUudXBncmFkZT1FLnByb3RvdHlwZS5pO0UucHJvdG90eXBlLmdldD1FLnByb3RvdHlwZS5nZXQ7XG4gIEUucHJvdG90eXBlLndoZW5EZWZpbmVkPUUucHJvdG90eXBlLm07RS5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz1FLnByb3RvdHlwZS5zO3ZhciBGPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCxHPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TLGhhPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxpYT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLnByZXBlbmQsamE9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5hcHBlbmQsa2E9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnByZXBlbmQsbGE9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLmFwcGVuZCxIPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUsST13aW5kb3cuTm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsSj13aW5kb3cuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLEs9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLEw9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCxNPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLFxuICBcInRleHRDb250ZW50XCIpLE49d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdyxPPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLFA9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSxRPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUsUj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlLFM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZU5TLFQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZU5TLFU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZU5TLG1hPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsbmE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50SFRNTCxvYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucHJlcGVuZCxcbiAgcGE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCxWPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5iZWZvcmUscWE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFmdGVyLHJhPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCxzYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLHRhPXdpbmRvdy5IVE1MRWxlbWVudCxXPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSx1YT13aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCx2YT13aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50SFRNTDt2YXIgd2E9bmV3IGZ1bmN0aW9uKCl7fTtmdW5jdGlvbiB4YSgpe3ZhciBhPVg7d2luZG93LkhUTUxFbGVtZW50PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe3ZhciBiPXRoaXMuY29uc3RydWN0b3IsYz1hLmcuZ2V0KGIpO2lmKCFjKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuXCIpO3ZhciBlPWMuY29uc3RydWN0aW9uU3RhY2s7aWYoMD09PWUubGVuZ3RoKXJldHVybiBlPUYuY2FsbChkb2N1bWVudCxjLmxvY2FsTmFtZSksT2JqZWN0LnNldFByb3RvdHlwZU9mKGUsYi5wcm90b3R5cGUpLGUuX19DRV9zdGF0ZT0xLGUuX19DRV9kZWZpbml0aW9uPWMsdyhhLGUpLGU7Yz1lLmxlbmd0aC0xO3ZhciBmPWVbY107aWYoZj09PXdhKXRocm93IEVycm9yKFwiVGhlIEhUTUxFbGVtZW50IGNvbnN0cnVjdG9yIHdhcyBlaXRoZXIgY2FsbGVkIHJlZW50cmFudGx5IGZvciB0aGlzIGNvbnN0cnVjdG9yIG9yIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cIik7XG4gIGVbY109d2E7T2JqZWN0LnNldFByb3RvdHlwZU9mKGYsYi5wcm90b3R5cGUpO3coYSxmKTtyZXR1cm4gZn1iLnByb3RvdHlwZT10YS5wcm90b3R5cGU7T2JqZWN0LmRlZmluZVByb3BlcnR5KGIucHJvdG90eXBlLFwiY29uc3RydWN0b3JcIix7d3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITEsdmFsdWU6Yn0pO3JldHVybiBifSgpfTtmdW5jdGlvbiBZKGEsYixkKXtmdW5jdGlvbiBjKGIpe3JldHVybiBmdW5jdGlvbihkKXtmb3IodmFyIGU9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDsrK2MpZVtjXT1hcmd1bWVudHNbY107Yz1bXTtmb3IodmFyIGY9W10sbT0wO208ZS5sZW5ndGg7bSsrKXt2YXIgcT1lW21dO3EgaW5zdGFuY2VvZiBFbGVtZW50JiZsKHEpJiZmLnB1c2gocSk7aWYocSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKHE9cS5maXJzdENoaWxkO3E7cT1xLm5leHRTaWJsaW5nKWMucHVzaChxKTtlbHNlIGMucHVzaChxKX1iLmFwcGx5KHRoaXMsZSk7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrKyl6KGEsZltlXSk7aWYobCh0aGlzKSlmb3IoZT0wO2U8Yy5sZW5ndGg7ZSsrKWY9Y1tlXSxmIGluc3RhbmNlb2YgRWxlbWVudCYmeChhLGYpfX12b2lkIDAhPT1kLmgmJihiLnByZXBlbmQ9YyhkLmgpKTt2b2lkIDAhPT1kLmFwcGVuZCYmKGIuYXBwZW5kPWMoZC5hcHBlbmQpKX07ZnVuY3Rpb24geWEoKXt2YXIgYT1YO3IoRG9jdW1lbnQucHJvdG90eXBlLFwiY3JlYXRlRWxlbWVudFwiLGZ1bmN0aW9uKGIpe2lmKHRoaXMuX19DRV9oYXNSZWdpc3RyeSl7dmFyIGQ9YS5hLmdldChiKTtpZihkKXJldHVybiBuZXcgZC5jb25zdHJ1Y3RvckZ1bmN0aW9ufWI9Ri5jYWxsKHRoaXMsYik7dyhhLGIpO3JldHVybiBifSk7cihEb2N1bWVudC5wcm90b3R5cGUsXCJpbXBvcnROb2RlXCIsZnVuY3Rpb24oYixkKXtiPWhhLmNhbGwodGhpcyxiLCEhZCk7dGhpcy5fX0NFX2hhc1JlZ2lzdHJ5P0EoYSxiKTp2KGEsYik7cmV0dXJuIGJ9KTtyKERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnROU1wiLGZ1bmN0aW9uKGIsZCl7aWYodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5JiYobnVsbD09PWJ8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09Yikpe3ZhciBjPWEuYS5nZXQoZCk7aWYoYylyZXR1cm4gbmV3IGMuY29uc3RydWN0b3JGdW5jdGlvbn1iPUcuY2FsbCh0aGlzLGIsXG4gIGQpO3coYSxiKTtyZXR1cm4gYn0pO1koYSxEb2N1bWVudC5wcm90b3R5cGUse2g6aWEsYXBwZW5kOmphfSl9O2Z1bmN0aW9uIHphKCl7ZnVuY3Rpb24gYShhLGMpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwidGV4dENvbnRlbnRcIix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpjLmdldCxzZXQ6ZnVuY3Rpb24oYSl7aWYodGhpcy5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFKWMuc2V0LmNhbGwodGhpcyxhKTtlbHNle3ZhciBkPXZvaWQgMDtpZih0aGlzLmZpcnN0Q2hpbGQpe3ZhciBlPXRoaXMuY2hpbGROb2RlcyxrPWUubGVuZ3RoO2lmKDA8ayYmbCh0aGlzKSl7ZD1BcnJheShrKTtmb3IodmFyIGg9MDtoPGs7aCsrKWRbaF09ZVtoXX19Yy5zZXQuY2FsbCh0aGlzLGEpO2lmKGQpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyl6KGIsZFthXSl9fX0pfXZhciBiPVg7cihOb2RlLnByb3RvdHlwZSxcImluc2VydEJlZm9yZVwiLGZ1bmN0aW9uKGEsYyl7aWYoYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhLmNoaWxkTm9kZXMpO1xuICBhPUouY2FsbCh0aGlzLGEsYyk7aWYobCh0aGlzKSlmb3IoYz0wO2M8ZS5sZW5ndGg7YysrKXgoYixlW2NdKTtyZXR1cm4gYX1lPWwoYSk7Yz1KLmNhbGwodGhpcyxhLGMpO2UmJnooYixhKTtsKHRoaXMpJiZ4KGIsYSk7cmV0dXJuIGN9KTtyKE5vZGUucHJvdG90eXBlLFwiYXBwZW5kQ2hpbGRcIixmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7YT1JLmNhbGwodGhpcyxhKTtpZihsKHRoaXMpKWZvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKXgoYixjW2VdKTtyZXR1cm4gYX1jPWwoYSk7ZT1JLmNhbGwodGhpcyxhKTtjJiZ6KGIsYSk7bCh0aGlzKSYmeChiLGEpO3JldHVybiBlfSk7cihOb2RlLnByb3RvdHlwZSxcImNsb25lTm9kZVwiLGZ1bmN0aW9uKGEpe2E9SC5jYWxsKHRoaXMsISFhKTt0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9BKGIsYSk6dihiLFxuICBhKTtyZXR1cm4gYX0pO3IoTm9kZS5wcm90b3R5cGUsXCJyZW1vdmVDaGlsZFwiLGZ1bmN0aW9uKGEpe3ZhciBjPWwoYSksZT1LLmNhbGwodGhpcyxhKTtjJiZ6KGIsYSk7cmV0dXJuIGV9KTtyKE5vZGUucHJvdG90eXBlLFwicmVwbGFjZUNoaWxkXCIsZnVuY3Rpb24oYSxjKXtpZihhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7YT1MLmNhbGwodGhpcyxhLGMpO2lmKGwodGhpcykpZm9yKHooYixjKSxjPTA7YzxlLmxlbmd0aDtjKyspeChiLGVbY10pO3JldHVybiBhfWU9bChhKTt2YXIgZj1MLmNhbGwodGhpcyxhLGMpLGQ9bCh0aGlzKTtkJiZ6KGIsYyk7ZSYmeihiLGEpO2QmJngoYixhKTtyZXR1cm4gZn0pO00mJk0uZ2V0P2EoTm9kZS5wcm90b3R5cGUsTSk6Y2EoYixmdW5jdGlvbihiKXthKGIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxcbiAgYj0wO2I8dGhpcy5jaGlsZE5vZGVzLmxlbmd0aDtiKyspe3ZhciBmPXRoaXMuY2hpbGROb2Rlc1tiXTtmLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUmJmEucHVzaChmLnRleHRDb250ZW50KX1yZXR1cm4gYS5qb2luKFwiXCIpfSxzZXQ6ZnVuY3Rpb24oYSl7Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KUsuY2FsbCh0aGlzLHRoaXMuZmlyc3RDaGlsZCk7bnVsbCE9YSYmXCJcIiE9PWEmJkkuY2FsbCh0aGlzLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKX19KX0pfTtmdW5jdGlvbiBBYShhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIGM9W10sZD0wO2Q8YXJndW1lbnRzLmxlbmd0aDsrK2QpY1tkXT1hcmd1bWVudHNbZF07ZD1bXTtmb3IodmFyIGs9W10saD0wO2g8Yy5sZW5ndGg7aCsrKXt2YXIgbT1jW2hdO20gaW5zdGFuY2VvZiBFbGVtZW50JiZsKG0pJiZrLnB1c2gobSk7aWYobSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKG09bS5maXJzdENoaWxkO207bT1tLm5leHRTaWJsaW5nKWQucHVzaChtKTtlbHNlIGQucHVzaChtKX1iLmFwcGx5KHRoaXMsYyk7Zm9yKGM9MDtjPGsubGVuZ3RoO2MrKyl6KGEsa1tjXSk7aWYobCh0aGlzKSlmb3IoYz0wO2M8ZC5sZW5ndGg7YysrKWs9ZFtjXSxrIGluc3RhbmNlb2YgRWxlbWVudCYmeChhLGspfX12YXIgZD1FbGVtZW50LnByb3RvdHlwZTt2b2lkIDAhPT1WJiYoZC5iZWZvcmU9YihWKSk7dm9pZCAwIT09ViYmKGQuYWZ0ZXI9YihxYSkpO3ZvaWQgMCE9PXJhJiZcbiAgcihkLFwicmVwbGFjZVdpdGhcIixmdW5jdGlvbihiKXtmb3IodmFyIGU9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDsrK2MpZVtjXT1hcmd1bWVudHNbY107Yz1bXTtmb3IodmFyIGQ9W10saz0wO2s8ZS5sZW5ndGg7aysrKXt2YXIgaD1lW2tdO2ggaW5zdGFuY2VvZiBFbGVtZW50JiZsKGgpJiZkLnB1c2goaCk7aWYoaCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGg9aC5maXJzdENoaWxkO2g7aD1oLm5leHRTaWJsaW5nKWMucHVzaChoKTtlbHNlIGMucHVzaChoKX1rPWwodGhpcyk7cmEuYXBwbHkodGhpcyxlKTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSsrKXooYSxkW2VdKTtpZihrKWZvcih6KGEsdGhpcyksZT0wO2U8Yy5sZW5ndGg7ZSsrKWQ9Y1tlXSxkIGluc3RhbmNlb2YgRWxlbWVudCYmeChhLGQpfSk7dm9pZCAwIT09c2EmJnIoZCxcInJlbW92ZVwiLGZ1bmN0aW9uKCl7dmFyIGI9bCh0aGlzKTtzYS5jYWxsKHRoaXMpO2ImJnooYSx0aGlzKX0pfTtmdW5jdGlvbiBCYSgpe2Z1bmN0aW9uIGEoYSxiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImlubmVySFRNTFwiLHtlbnVtZXJhYmxlOmIuZW51bWVyYWJsZSxjb25maWd1cmFibGU6ITAsZ2V0OmIuZ2V0LHNldDpmdW5jdGlvbihhKXt2YXIgZT10aGlzLGQ9dm9pZCAwO2wodGhpcykmJihkPVtdLHAodGhpcyxmdW5jdGlvbihhKXthIT09ZSYmZC5wdXNoKGEpfSkpO2Iuc2V0LmNhbGwodGhpcyxhKTtpZihkKWZvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7ZisrKXt2YXIgdD1kW2ZdOzE9PT10Ll9fQ0Vfc3RhdGUmJmMuZGlzY29ubmVjdGVkQ2FsbGJhY2sodCl9dGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk/QShjLHRoaXMpOnYoYyx0aGlzKTtyZXR1cm4gYX19KX1mdW5jdGlvbiBiKGEsYil7cihhLFwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50XCIsZnVuY3Rpb24oYSxlKXt2YXIgZD1sKGUpO2E9Yi5jYWxsKHRoaXMsYSxlKTtkJiZ6KGMsZSk7bChhKSYmeChjLGUpO3JldHVybiBhfSl9XG4gIGZ1bmN0aW9uIGQoYSxiKXtmdW5jdGlvbiBlKGEsYil7Zm9yKHZhciBlPVtdO2EhPT1iO2E9YS5uZXh0U2libGluZyllLnB1c2goYSk7Zm9yKGI9MDtiPGUubGVuZ3RoO2IrKylBKGMsZVtiXSl9cihhLFwiaW5zZXJ0QWRqYWNlbnRIVE1MXCIsZnVuY3Rpb24oYSxjKXthPWEudG9Mb3dlckNhc2UoKTtpZihcImJlZm9yZWJlZ2luXCI9PT1hKXt2YXIgZD10aGlzLnByZXZpb3VzU2libGluZztiLmNhbGwodGhpcyxhLGMpO2UoZHx8dGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQsdGhpcyl9ZWxzZSBpZihcImFmdGVyYmVnaW5cIj09PWEpZD10aGlzLmZpcnN0Q2hpbGQsYi5jYWxsKHRoaXMsYSxjKSxlKHRoaXMuZmlyc3RDaGlsZCxkKTtlbHNlIGlmKFwiYmVmb3JlZW5kXCI9PT1hKWQ9dGhpcy5sYXN0Q2hpbGQsYi5jYWxsKHRoaXMsYSxjKSxlKGR8fHRoaXMuZmlyc3RDaGlsZCxudWxsKTtlbHNlIGlmKFwiYWZ0ZXJlbmRcIj09PWEpZD10aGlzLm5leHRTaWJsaW5nLGIuY2FsbCh0aGlzLGEsYyksZSh0aGlzLm5leHRTaWJsaW5nLFxuICBkKTtlbHNlIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSB2YWx1ZSBwcm92aWRlZCAoXCIrU3RyaW5nKGEpK1wiKSBpcyBub3Qgb25lIG9mICdiZWZvcmViZWdpbicsICdhZnRlcmJlZ2luJywgJ2JlZm9yZWVuZCcsIG9yICdhZnRlcmVuZCcuXCIpO30pfXZhciBjPVg7TiYmcihFbGVtZW50LnByb3RvdHlwZSxcImF0dGFjaFNoYWRvd1wiLGZ1bmN0aW9uKGEpe2E9Ti5jYWxsKHRoaXMsYSk7dmFyIGI9YztpZihiLmImJiFhLl9fQ0VfcGF0Y2hlZCl7YS5fX0NFX3BhdGNoZWQ9ITA7Zm9yKHZhciBlPTA7ZTxiLmMubGVuZ3RoO2UrKyliLmNbZV0oYSl9cmV0dXJuIHRoaXMuX19DRV9zaGFkb3dSb290PWF9KTtPJiZPLmdldD9hKEVsZW1lbnQucHJvdG90eXBlLE8pOlcmJlcuZ2V0P2EoSFRNTEVsZW1lbnQucHJvdG90eXBlLFcpOmRhKGMsZnVuY3Rpb24oYil7YShiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gSC5jYWxsKHRoaXMsITApLmlubmVySFRNTH0sXG4gIHNldDpmdW5jdGlvbihhKXt2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZSxjPWI/dGhpcy5jb250ZW50OnRoaXMsZT1HLmNhbGwoZG9jdW1lbnQsdGhpcy5uYW1lc3BhY2VVUkksdGhpcy5sb2NhbE5hbWUpO2ZvcihlLmlubmVySFRNTD1hOzA8Yy5jaGlsZE5vZGVzLmxlbmd0aDspSy5jYWxsKGMsYy5jaGlsZE5vZGVzWzBdKTtmb3IoYT1iP2UuY29udGVudDplOzA8YS5jaGlsZE5vZGVzLmxlbmd0aDspSS5jYWxsKGMsYS5jaGlsZE5vZGVzWzBdKX19KX0pO3IoRWxlbWVudC5wcm90b3R5cGUsXCJzZXRBdHRyaWJ1dGVcIixmdW5jdGlvbihhLGIpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFEuY2FsbCh0aGlzLGEsYik7dmFyIGU9UC5jYWxsKHRoaXMsYSk7US5jYWxsKHRoaXMsYSxiKTtiPVAuY2FsbCh0aGlzLGEpO2MuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYSxlLGIsbnVsbCl9KTtyKEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlTlNcIixmdW5jdGlvbihhLFxuICBiLGQpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFQuY2FsbCh0aGlzLGEsYixkKTt2YXIgZT1TLmNhbGwodGhpcyxhLGIpO1QuY2FsbCh0aGlzLGEsYixkKTtkPVMuY2FsbCh0aGlzLGEsYik7Yy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxiLGUsZCxhKX0pO3IoRWxlbWVudC5wcm90b3R5cGUsXCJyZW1vdmVBdHRyaWJ1dGVcIixmdW5jdGlvbihhKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBSLmNhbGwodGhpcyxhKTt2YXIgYj1QLmNhbGwodGhpcyxhKTtSLmNhbGwodGhpcyxhKTtudWxsIT09YiYmYy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxhLGIsbnVsbCxudWxsKX0pO3IoRWxlbWVudC5wcm90b3R5cGUsXCJyZW1vdmVBdHRyaWJ1dGVOU1wiLGZ1bmN0aW9uKGEsYil7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gVS5jYWxsKHRoaXMsYSxiKTt2YXIgZD1TLmNhbGwodGhpcyxhLGIpO1UuY2FsbCh0aGlzLGEsYik7dmFyIGU9Uy5jYWxsKHRoaXMsXG4gIGEsYik7ZCE9PWUmJmMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixkLGUsYSl9KTt1YT9iKEhUTUxFbGVtZW50LnByb3RvdHlwZSx1YSk6bWE/YihFbGVtZW50LnByb3RvdHlwZSxtYSk6Y29uc29sZS53YXJuKFwiQ3VzdG9tIEVsZW1lbnRzOiBgRWxlbWVudCNpbnNlcnRBZGphY2VudEVsZW1lbnRgIHdhcyBub3QgcGF0Y2hlZC5cIik7dmE/ZChIVE1MRWxlbWVudC5wcm90b3R5cGUsdmEpOm5hP2QoRWxlbWVudC5wcm90b3R5cGUsbmEpOmNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRIVE1MYCB3YXMgbm90IHBhdGNoZWQuXCIpO1koYyxFbGVtZW50LnByb3RvdHlwZSx7aDpvYSxhcHBlbmQ6cGF9KTtBYShjKX07dmFyIFo9d2luZG93LmN1c3RvbUVsZW1lbnRzO2lmKCFafHxaLmZvcmNlUG9seWZpbGx8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFouZGVmaW5lfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBaLmdldCl7dmFyIFg9bmV3IHU7eGEoKTt5YSgpO1koWCxEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSx7aDprYSxhcHBlbmQ6bGF9KTt6YSgpO0JhKCk7ZG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT0hMDt2YXIgY3VzdG9tRWxlbWVudHM9bmV3IEUoWCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdyxcImN1c3RvbUVsZW1lbnRzXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOmN1c3RvbUVsZW1lbnRzfSl9O1xufSkuY2FsbChzZWxmKTtcblxuLy8gUG9seWZpbGwgZG9jdW1lbnQuYmFzZVVSSVxuXCJzdHJpbmdcIiE9PXR5cGVvZiBkb2N1bWVudC5iYXNlVVJJJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoRG9jdW1lbnQucHJvdG90eXBlLFwiYmFzZVVSSVwiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKTtyZXR1cm4gYSYmYS5ocmVmP2EuaHJlZjpkb2N1bWVudC5VUkx9fSk7XG5cbi8vIFBvbHlmaWxsIEN1c3RvbUV2ZW50XG5cImZ1bmN0aW9uXCIhPT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50JiYod2luZG93LkN1c3RvbUV2ZW50PWZ1bmN0aW9uKGMsYSl7YT1hfHx7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDB9O3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7Yi5pbml0Q3VzdG9tRXZlbnQoYyxhLmJ1YmJsZXMsYS5jYW5jZWxhYmxlLGEuZGV0YWlsKTtyZXR1cm4gYn0sd2luZG93LkN1c3RvbUV2ZW50LnByb3RvdHlwZT13aW5kb3cuRXZlbnQucHJvdG90eXBlKTtcblxuLy8gRXZlbnQuY29tcG9zZWRQYXRoXG4oZnVuY3Rpb24oYixjLGQpe2IuY29tcG9zZWRQYXRofHwoYi5jb21wb3NlZFBhdGg9ZnVuY3Rpb24oKXtpZih0aGlzLnBhdGgpcmV0dXJuIHRoaXMucGF0aDt2YXIgYT10aGlzLnRhcmdldDtmb3IodGhpcy5wYXRoPVtdO251bGwhPT1hLnBhcmVudE5vZGU7KXRoaXMucGF0aC5wdXNoKGEpLGE9YS5wYXJlbnROb2RlO3RoaXMucGF0aC5wdXNoKGMsZCk7cmV0dXJuIHRoaXMucGF0aH0pfSkoRXZlbnQucHJvdG90eXBlLGRvY3VtZW50LHdpbmRvdyk7XG5cbi8qIVxuRWxlbWVudC5jbG9zZXN0IGFuZCBFbGVtZW50Lm1hdGNoZXNcbmh0dHBzOi8vZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL2Nsb3Nlc3RcbkNyZWF0aXZlIENvbW1vbnMgWmVybyB2MS4wIFVuaXZlcnNhbFxuKi9cbihmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCIhPT10eXBlb2YgYS5tYXRjaGVzJiYoYS5tYXRjaGVzPWEubXNNYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8ZnVuY3Rpb24oYSl7YT0odGhpcy5kb2N1bWVudHx8dGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGEpO2Zvcih2YXIgYj0wO2FbYl0mJmFbYl0hPT10aGlzOykrK2I7cmV0dXJuISFhW2JdfSk7XCJmdW5jdGlvblwiIT09dHlwZW9mIGEuY2xvc2VzdCYmKGEuY2xvc2VzdD1mdW5jdGlvbihhKXtmb3IodmFyIGI9dGhpcztiJiYxPT09Yi5ub2RlVHlwZTspe2lmKGIubWF0Y2hlcyhhKSlyZXR1cm4gYjtiPWIucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH0pfSkod2luZG93LkVsZW1lbnQucHJvdG90eXBlKTtcblxuLyohXG5FbGVtZW50LmdldFJvb3ROb2RlKClcbiovXG4oZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhKXthPWIoYSk7cmV0dXJuIGEmJjExPT09YS5ub2RlVHlwZT9kKGEuaG9zdCk6YX1mdW5jdGlvbiBiKGEpe3JldHVybiBhJiZhLnBhcmVudE5vZGU/YihhLnBhcmVudE5vZGUpOmF9XCJmdW5jdGlvblwiIT09dHlwZW9mIGMuZ2V0Um9vdE5vZGUmJihjLmdldFJvb3ROb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLmNvbXBvc2VkP2QodGhpcyk6Yih0aGlzKX0pfSkoRWxlbWVudC5wcm90b3R5cGUpO1xuXG4vKiFcbkVsZW1lbnQuaXNDb25uZWN0ZWQoKVxuKi9cbihmdW5jdGlvbihhKXtcImlzQ29ubmVjdGVkXCJpbiBhfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImlzQ29ubmVjdGVkXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZ2V0Um9vdE5vZGUoe2NvbXBvc2VkOiEwfSk7cmV0dXJuIGEmJjk9PT1hLm5vZGVUeXBlfX0pfSkoRWxlbWVudC5wcm90b3R5cGUpO1xuXG4vKiFcbkVsZW1lbnQucmVtb3ZlKClcbiovXG4oZnVuY3Rpb24oYil7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuaGFzT3duUHJvcGVydHkoXCJyZW1vdmVcIil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwicmVtb3ZlXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7bnVsbCE9PXRoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpfX0pfSl9KShbRWxlbWVudC5wcm90b3R5cGUsQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pO1xuXG4vKiFcbkVsZW1lbnQuY2xhc3NMaXN0XG4qL1xuIWZ1bmN0aW9uKGUpeydjbGFzc0xpc3QnaW4gZXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJjbGFzc0xpc3RcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PShlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKS5yZXBsYWNlKC9eXFxzK3xcXHMkL2csXCJcIikuc3BsaXQoL1xccysvZyk7ZnVuY3Rpb24gbigpe3QubGVuZ3RoPjA/ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHQuam9pbihcIiBcIikpOmUucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIil9cmV0dXJuXCJcIj09PXRbMF0mJnQuc3BsaWNlKDAsMSksdC50b2dnbGU9ZnVuY3Rpb24oZSxpKXt2b2lkIDAhPT1pP2k/dC5hZGQoZSk6dC5yZW1vdmUoZSk6LTEhPT10LmluZGV4T2YoZSk/dC5zcGxpY2UodC5pbmRleE9mKGUpLDEpOnQucHVzaChlKSxuKCl9LHQuYWRkPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxpPTAscz1lLmxlbmd0aDtpPHM7aSsrKS0xPT09dC5pbmRleE9mKGVbaV0pJiZ0LnB1c2goZVtpXSk7bigpfSx0LnJlbW92ZT1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksaT0wLHM9ZS5sZW5ndGg7aTxzO2krKyktMSE9PXQuaW5kZXhPZihlW2ldKSYmdC5zcGxpY2UodC5pbmRleE9mKGVbaV0pLDEpO24oKX0sdC5pdGVtPWZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfSx0LmNvbnRhaW5zPWZ1bmN0aW9uKGUpe3JldHVybi0xIT09dC5pbmRleE9mKGUpfSx0LnJlcGxhY2U9ZnVuY3Rpb24oZSxpKXstMSE9PXQuaW5kZXhPZihlKSYmdC5zcGxpY2UodC5pbmRleE9mKGUpLDEsaSksbigpfSx0LnZhbHVlPWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIsdH19KX0oRWxlbWVudC5wcm90b3R5cGUpO1xuXG4vKiFcbkRPTVRva2VuTGlzdFxuKi9cbihmdW5jdGlvbihiKXt0cnl7ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCl9Y2F0Y2goZSl7dmFyIGM9Yi5hZGQsZD1iLnJlbW92ZTtiLmFkZD1mdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8YXJndW1lbnRzLmxlbmd0aDthKyspYy5jYWxsKHRoaXMsYXJndW1lbnRzW2FdKX07Yi5yZW1vdmU9ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGFyZ3VtZW50cy5sZW5ndGg7YSsrKWQuY2FsbCh0aGlzLGFyZ3VtZW50c1thXSl9fX0pKERPTVRva2VuTGlzdC5wcm90b3R5cGUpO1xuIl0sIm5hbWVzIjpbImFhIiwiU2V0Iiwic3BsaXQiLCJnIiwiYSIsImIiLCJoYXMiLCJ0ZXN0IiwibCIsImlzQ29ubmVjdGVkIiwiX19DRV9pc0ltcG9ydERvY3VtZW50IiwiRG9jdW1lbnQiLCJwYXJlbnROb2RlIiwid2luZG93IiwiU2hhZG93Um9vdCIsImhvc3QiLCJuIiwibmV4dFNpYmxpbmciLCJwIiwiZCIsImMiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJlIiwiZiIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZSIsImltcG9ydCIsImFkZCIsImZpcnN0Q2hpbGQiLCJfX0NFX3NoYWRvd1Jvb3QiLCJyIiwidSIsIk1hcCIsImJhIiwic2V0IiwiY29uc3RydWN0b3JGdW5jdGlvbiIsImNhIiwicHVzaCIsImRhIiwidiIsInciLCJfX0NFX3BhdGNoZWQiLCJsZW5ndGgiLCJ4IiwiX19DRV9zdGF0ZSIsImNvbm5lY3RlZENhbGxiYWNrIiwieSIsInoiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsIkEiLCJpIiwiX19DRV9oYXNSZWdpc3RyeSIsInJlYWR5U3RhdGUiLCJfX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVsZXRlIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiZ2V0IiwiY29uc3RydWN0aW9uU3RhY2siLCJFcnJvciIsInBvcCIsInQiLCJfX0NFX2RlZmluaXRpb24iLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJwcm90b3R5cGUiLCJjYWxsIiwiaW5kZXhPZiIsIkIiLCJkb2N1bWVudCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJiaW5kIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJDIiwiZGlzY29ubmVjdCIsImFkZGVkTm9kZXMiLCJlYSIsIlByb21pc2UiLCJEIiwiRSIsImoiLCJvIiwiRnVuY3Rpb24iLCJUeXBlRXJyb3IiLCJTeW50YXhFcnJvciIsIk9iamVjdCIsImsiLCJoIiwibSIsInEiLCJhZG9wdGVkQ2FsbGJhY2siLCJmYSIsInNoaWZ0IiwicmVqZWN0Iiwic29tZSIsInMiLCJDdXN0b21FbGVtZW50UmVnaXN0cnkiLCJkZWZpbmUiLCJ1cGdyYWRlIiwid2hlbkRlZmluZWQiLCJwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrIiwiRiIsImNyZWF0ZUVsZW1lbnQiLCJHIiwiY3JlYXRlRWxlbWVudE5TIiwiaGEiLCJpbXBvcnROb2RlIiwiaWEiLCJwcmVwZW5kIiwiamEiLCJhcHBlbmQiLCJrYSIsIkRvY3VtZW50RnJhZ21lbnQiLCJsYSIsIkgiLCJjbG9uZU5vZGUiLCJJIiwiYXBwZW5kQ2hpbGQiLCJKIiwiaW5zZXJ0QmVmb3JlIiwiSyIsInJlbW92ZUNoaWxkIiwiTCIsInJlcGxhY2VDaGlsZCIsIk0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJOIiwiRWxlbWVudCIsImF0dGFjaFNoYWRvdyIsIk8iLCJQIiwiUSIsInNldEF0dHJpYnV0ZSIsIlIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTIiwiZ2V0QXR0cmlidXRlTlMiLCJUIiwic2V0QXR0cmlidXRlTlMiLCJVIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJtYSIsImluc2VydEFkamFjZW50RWxlbWVudCIsIm5hIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwib2EiLCJwYSIsIlYiLCJiZWZvcmUiLCJxYSIsImFmdGVyIiwicmEiLCJyZXBsYWNlV2l0aCIsInNhIiwicmVtb3ZlIiwidGEiLCJIVE1MRWxlbWVudCIsIlciLCJ1YSIsInZhIiwid2EiLCJ4YSIsIlgiLCJjb25zdHJ1Y3RvciIsInNldFByb3RvdHlwZU9mIiwiZGVmaW5lUHJvcGVydHkiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsIlkiLCJhcmd1bWVudHMiLCJhcHBseSIsInlhIiwiemEiLCJURVhUX05PREUiLCJjaGlsZE5vZGVzIiwiQXJyYXkiLCJzbGljZSIsIkNPTU1FTlRfTk9ERSIsInRleHRDb250ZW50Iiwiam9pbiIsImNyZWF0ZVRleHROb2RlIiwiQWEiLCJCYSIsInRvTG93ZXJDYXNlIiwicHJldmlvdXNTaWJsaW5nIiwibGFzdENoaWxkIiwiU3RyaW5nIiwiaW5uZXJIVE1MIiwiY29udGVudCIsIm5hbWVzcGFjZVVSSSIsImNvbnNvbGUiLCJ3YXJuIiwiWiIsImN1c3RvbUVsZW1lbnRzIiwiZm9yY2VQb2x5ZmlsbCIsInNlbGYiLCJiYXNlVVJJIiwicXVlcnlTZWxlY3RvciIsImhyZWYiLCJVUkwiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJFdmVudCIsImNvbXBvc2VkUGF0aCIsInBhdGgiLCJ0YXJnZXQiLCJtYXRjaGVzIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImdldFJvb3ROb2RlIiwiY29tcG9zZWQiLCJmb3JFYWNoIiwiaGFzT3duUHJvcGVydHkiLCJDaGFyYWN0ZXJEYXRhIiwiRG9jdW1lbnRUeXBlIiwicmVwbGFjZSIsInNwbGljZSIsInRvZ2dsZSIsIml0ZW0iLCJjb250YWlucyIsImJvZHkiLCJjbGFzc0xpc3QiLCJET01Ub2tlbkxpc3QiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==