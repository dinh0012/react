(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"948e54b1156704f27a6b":function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"c",(function(){return g})),t.d(n,"b",(function(){return y})),t.d(n,"d",(function(){return O})),t.d(n,"e",(function(){return v}));var r=t("19e15e7ca84589004246"),a=t.n(r),o=t("66f6f74ce0dacb46302a"),c=t.n(o),i=t("279f1c7ef5f95c5d63e2"),s=t.n(i),u=t("8af190b70a6bc55c6f1b");function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b,d={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},l=t.n(u).a.createContext();function g(){return d}var y=function(){function e(){a()(this,e),this.usedNamespaces={}}return c()(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function O(){return b}var v={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d=p(p({},d),e)}(e.options.react),function(e){b=e}(e)}}},a0b0bcb21a2107df65b0:function(e,n,t){"use strict";t.d(n,"a",(function(){return y}));var r=t("5e4c0b3f13f7c1958b37"),a=t.n(r),o=t("279f1c7ef5f95c5d63e2"),c=t.n(o),i=t("8af190b70a6bc55c6f1b"),s=t("948e54b1156704f27a6b");function u(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var f={};function p(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&f[n[0]]||("string"===typeof n[0]&&(f[n[0]]=new Date),u.apply(void 0,n))}function b(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function d(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return p("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],a=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var c=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!c(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!c(r,e)||a&&!c(o,e))))}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=Object(i.useContext)(s.a)||{},o=r.i18n,c=r.defaultNS,u=t||o||Object(s.d)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new s.b),!u){p("You will need to pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},l=[f,{},!1];return l.t=f,l.i18n={},l.ready=!1,l}var y=g(g(g({},Object(s.c)()),u.options.react),n),O=y.useSuspense,v=e||c||u.options&&u.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(v);var h=(u.isInitialized||u.initializedStoreOnce)&&v.every((function(e){return d(e,u,y)}));function j(){return{t:u.getFixedT(null,"fallback"===y.nsMode?v:v[0])}}var w=Object(i.useState)(j()),m=a()(w,2),N=m[0],P=m[1],k=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=y.bindI18n,n=y.bindI18nStore;function t(){k.current&&P(j())}return k.current=!0,h||O||b(u,v,(function(){k.current&&P(j())})),e&&u&&u.on(e,t),n&&u&&u.store.on(n,t),function(){k.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,t)})),n&&u&&n.split(" ").forEach((function(e){return u.store.off(e,t)}))}}),[v.join()]);var S=[N.t,u,h];if(S.t=N.t,S.i18n=u,S.ready=h,h)return S;if(!h&&!O)return S;throw new Promise((function(e){b(u,v,(function(){e()}))}))}}}]);