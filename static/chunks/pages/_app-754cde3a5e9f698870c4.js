_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(t,n,e){e("GcxT"),t.exports=e("nOHt")},"1TCz":function(t,n,e){"use strict";e.r(n),e.d(n,"GlobalContext",(function(){return y}));var r=e("o0o1"),o=e.n(r),i=e("rePB"),u=e("HaE+"),c=e("q1tI"),a=e.n(c),s=e("8Bbg"),f=e.n(s),l=e("8Kt/"),p=e.n(l),h=(e("6zHJ"),e("q4pp")),d=e("qoWs"),v=a.a.createElement;function b(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?b(Object(e),!0).forEach((function(n){Object(i.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var y=Object(c.createContext)({}),g=function(t){var n=t.Component,e=t.pageProps,r=e.global;return v(a.a.Fragment,null,v(p.a,null,v("link",{rel:"shortcut icon",href:Object(h.a)(r.favicon)}),v("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Staatliches"}),v("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"}),v("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"}),v("script",{src:"https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"}),v("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"})),v(y.Provider,{value:r},v(n,e)))};g.getInitialProps=function(){var t=Object(u.a)(o.a.mark((function t(n){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.getInitialProps(n);case 2:return e=t.sent,t.next=5,Object(d.a)("/global");case 5:return r=t.sent,t.abrupt("return",m(m({},e),{},{pageProps:{global:r}}));case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),n.default=g},"6zHJ":function(t,n,e){},"8Bbg":function(t,n,e){t.exports=e("B5Ud")},"8oxB":function(t,n){var e,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:i}catch(t){e=i}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,s=[],f=!1,l=-1;function p(){f&&a&&(f=!1,a.length?s=a.concat(s):l=-1,s.length&&h())}function h(){if(!f){var t=c(p);f=!0;for(var n=s.length;n;){for(a=s,s=[];++l<n;)a&&a[l].run();l=-1,n=s.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(n){return r.call(this,t)}}}(t)}}function d(t,n){this.fun=t,this.array=n}function v(){}o.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];s.push(new d(t,n)),1!==s.length||f||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},B5Ud:function(t,n,e){"use strict";var r=e("o0o1"),o=e("lwsE"),i=e("W8MJ"),u=e("7W2i"),c=e("a1gu"),a=e("Nsbk"),s=e("yXPU");function f(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=a(t);if(n){var o=a(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return c(this,e)}}var l=e("TqRt");n.__esModule=!0,n.Container=function(t){0;return t.children},n.createUrl=m,n.default=void 0;var p=l(e("q1tI")),h=e("g/15");function d(t){return v.apply(this,arguments)}function v(){return(v=s(r.mark((function t(n){var e,o,i;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.Component,o=n.ctx,t.next=3,(0,h.loadGetInitialProps)(e,o);case 3:return i=t.sent,t.abrupt("return",{pageProps:i});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n.AppInitialProps=h.AppInitialProps,n.NextWebVitalsMetric=h.NextWebVitalsMetric;var b=function(t){u(e,t);var n=f(e);function e(){return o(this,e),n.apply(this,arguments)}return i(e,[{key:"componentDidCatch",value:function(t,n){throw t}},{key:"render",value:function(){var t=this.props,n=t.router,e=t.Component,r=t.pageProps,o=t.__N_SSG,i=t.__N_SSP;return p.default.createElement(e,Object.assign({},r,o||i?{}:{url:m(n)}))}}]),e}(p.default.Component);function m(t){var n=t.pathname,e=t.asPath,r=t.query;return{get query(){return r},get pathname(){return n},get asPath(){return e},back:function(){t.back()},push:function(n,e){return t.push(n,e)},pushTo:function(n,e){var r=e?n:"",o=e||n;return t.push(r,o)},replace:function(n,e){return t.replace(n,e)},replaceTo:function(n,e){var r=e?n:"",o=e||n;return t.replace(r,o)}}}n.default=b,b.origGetInitialProps=d,b.getInitialProps=d},GcxT:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("1TCz")}])},"HaE+":function(t,n,e){"use strict";function r(t,n,e,r,o,i,u){try{var c=t[i](u),a=c.value}catch(s){return void e(s)}c.done?n(a):Promise.resolve(a).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var u=t.apply(n,e);function c(t){r(u,o,i,c,a,"next",t)}function a(t){r(u,o,i,c,a,"throw",t)}c(void 0)}))}}e.d(n,"a",(function(){return o}))},q4pp:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("qoWs");function o(t){return t.url.startsWith("/")?Object(r.b)(t.url):t.url}},qoWs:function(t,n,e){"use strict";(function(t){e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return c}));var r=e("o0o1"),o=e.n(r),i=e("HaE+");function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(t.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337").concat(n)}function c(t){return a.apply(this,arguments)}function a(){return(a=Object(i.a)(o.a.mark((function t(n){var e,r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u(n),t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:return i=t.sent,t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}).call(this,e("8oxB"))},rePB:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))}},[[0,0,2,1]]]);