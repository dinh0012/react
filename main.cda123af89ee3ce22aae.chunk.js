(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4df28482a549f33accd9":function(e,n,o){"use strict";(function(e){o.d(n,"a",(function(){return i}));const t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(n){if("serviceWorker"in navigator){if(new URL(e.env.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{t?(!function(e,n){fetch(e).then(o=>{const t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):r(e,n)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}("/react/sw.js",n),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):r("/react/sw.js",n)})}}function r(e,n){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const o=e.installing;null!=o&&(o.onstatechange=()=>{"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use.",e),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}}).call(this,o("26d59f808dff3e83c741"))},"802ed213c65f4a3ad06f":function(e,n,o){"use strict";let t;o.r(n),o("4df28482a549f33accd9").a();const i=document.querySelector(".add-button");i.style.display="none",window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),t=e,i.style.display="block",i.addEventListener("click",e=>{i.style.display="none",t.prompt(),t.userChoice.then(e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),t=null})})})}},[["802ed213c65f4a3ad06f",2,1]]]);