(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"16056bc13792cfcd7fad":function(e,t,n){"use strict";var a=n("c388240468bb4997bb00"),o=n("aa4135b9db94cd1e4bb4"),c=n("466d17131f67b95e96d4"),r=n("8af190b70a6bc55c6f1b"),i=n.n(r),s=n("9bc1513cc295c9dc19fa");const d=n("0b3cb19af78752326f59").d.div`
  display: flex;
  height: 100%;

  .geochart {
    width: 100%;
    min-height: 400px;
  }
  width: 100%;
`;a.e(c.a);t.a=e=>{const{geoData:t,data:n,projection:c,include:u}=e,l=Object(r.useRef)(null);return Object(r.useEffect)(()=>{const e=l.current;if(!e)return;const r=(({chartDiv:e,geoData:t,data:n,projection:c,include:r})=>{const i=a.c(e,o.b);i.responsive.enabled=!0,i.geodata=t,i.maxZoomLevel=1,i.seriesContainer.draggable=!1,i.projection=c||new o.d.Mercator;const s=i.series.push(new o.c);s.data=n,s.exclude=["AQ"],s.include=r||void 0,s.heatRules.push({property:"fill",target:s.mapPolygons.template,min:a.b("#ffffff"),max:a.b("#b71c1c")}),s.useGeodata=!0;const d=n.map(e=>e.value),u=Math.min(...d),l=Math.max(...d),f=i.createChild(o.a);f.series=s,f.align="left",f.dx=30,f.width=a.d(25),f.marginRight=a.d(4),f.marginBottom=a.d(5),f.minValue=u,f.maxValue=l,f.valign="bottom";const h=f.valueAxis.axisRanges.create();h.value=f.minValue,h.label.text=u.toLocaleString("en");const b=f.valueAxis.axisRanges.create();b.value=f.maxValue,b.label.text=l.toLocaleString("en"),f.isDown=!1,s.mapPolygons.template.events.on("over",(function(e){isNaN(e.target.dataItem.value)?(f.valueAxis.hideTooltip(),e.target.tooltipText=""):f.valueAxis.showTooltipAt(e.target.dataItem.value)})),s.mapPolygons.template.events.on("out",(function(){f.valueAxis.hideTooltip()})),f.valueAxis.renderer.labels.template.adapter.add("text",(function(){return""}));const v=s.mapPolygons.template;v.tooltipHTML="<p><strong>{name}</strong></p><p>CA NHI\u1ec4M: {value}</p>",v.nonScalingStroke=!0,v.strokeWidth=.5,v.fill=a.b("#999");const p=v.states.create("hover");return p.properties.stroke=a.b("#000"),p.properties.strokeWidth=1,i})({chartDiv:e,geoData:t,data:n,projection:c,include:u});return()=>r.dispose()},[]),Object(r.useEffect)(()=>{Object(s.b)()}),i.a.createElement(d,null,i.a.createElement("div",{ref:l,className:"geochart"}))}},"200ec429fa2ec37f9f27":function(e,t,n){"use strict";var a=n("87560987db73f6ee0f12"),o=n("756544d27cf4c9846bb1");function c(e,t){for(var n=(1+o.g)*Object(o.k)(t),a=0,c=1/0;a<10&&Object(o.a)(c)>o.e;a++)t-=c=(t+Object(o.k)(t)-n)/(1+Object(o.d)(t));return n=Object(o.l)(2+o.i),[e*(1+Object(o.d)(t))/n,2*t/n]}c.invert=function(e,t){var n=1+o.g,a=Object(o.l)(n/2);return[2*e*a/(1+Object(o.d)(t*=a)),Object(o.b)((t+Object(o.k)(t))/n)]},t.a=function(){return Object(a.a)(c).scale(173.044)}},"27c44967f485a0bfa6b0":function(e,t,n){"use strict";var a=n("8af190b70a6bc55c6f1b"),o=n.n(a),c=n("0b3cb19af78752326f59"),r=n("56dd7ad072b827ce17d1"),i=n("16056bc13792cfcd7fad"),s=n("ff5d7f992804bf17e6bb");var d=e=>{const{geoData:t,apiGeoChart:n,projection:c,include:r}=e,[d,u]=Object(a.useState)(null);return Object(a.useEffect)(()=>{n().then(e=>u(e))},[]),d?o.a.createElement(i.a,{geoData:t,data:d,projection:c,include:r}):o.a.createElement(s.a,null)},u=n("f63149c7eeae775fc4ee");const l=Object(c.d)(r.a)``;t.a=e=>{const{title:t,geoData:n,apiGeoChart:a,projection:c,include:r}=e,i=d({apiGeoChart:a,geoData:n,projection:c,include:r});return o.a.createElement(l,{title:t},o.a.createElement(u.a,{id:"china",data:{id:"EU",date:["2020-01-22","2020-01-23","2020-01-24","2020-01-25","2020-01-26","2020-01-27","2020-01-28","2020-01-29","2020-01-30"],values:[{id:"",name:"Hoa K\u1ef3",values:[0,0,0,0,0,0,0,0]},{id:"",name:"T\xe2y Ban Nha",values:[2,0,0,0,0,0,0,0]},{id:"",name:"Italia",values:[0,0,0,0,0,0,0,1]},{id:"",name:"Ph\xe1p",values:[1,2,0,1,1,2,0,3]},{id:"",name:"\u0110\u1ee9c",values:[1,2,2,1,0,6,0,0]},{id:"",name:"Anh",values:[0,0,0,0,1,0,0,0]},{id:"",name:"Nga",values:[0,0,0,0,0,0,0,0]}],timestamp:"1600438058735"}}),i)}},"3c6a20fb0586b83050a0":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));class a{constructor(e=[],t=o){if(this.data=e,this.length=this.data.length,this.compare=t,this.length>0)for(let e=(this.length>>1)-1;e>=0;e--)this._down(e)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(0===this.length)return;const e=this.data[0],t=this.data.pop();return this.length--,this.length>0&&(this.data[0]=t,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:t,compare:n}=this,a=t[e];for(;e>0;){const o=e-1>>1,c=t[o];if(n(a,c)>=0)break;t[e]=c,e=o}t[e]=a}_down(e){const{data:t,compare:n}=this,a=this.length>>1,o=t[e];for(;e<a;){let a=1+(e<<1),c=t[a];const r=a+1;if(r<this.length&&n(t[r],c)<0&&(a=r,c=t[r]),n(c,o)>=0)break;t[e]=c,e=a}t[e]=o}}function o(e,t){return e<t?-1:e>t?1:0}},"3c937a0e1273de295704":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));class a extends Error{constructor(e){super(e.message),this.response=e}}class o extends Error{constructor(e){super(e.statusText),this.response=e}}var c=n("7868e9050a2598bba7b6"),r=function(e,t,n,a){return new(n||(n=Promise))((function(o,c){function r(e){try{s(a.next(e))}catch(e){c(e)}}function i(e){try{s(a.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,i)}s((a=a.apply(e,t||[])).next())}))};function i(e){return 204===e.status||205===e.status?null:e.blob()}function s(e){return 204===e.status||205===e.status?null:e.json()}function d(e){if(e.status>=200&&e.status<300)return e;const t=new o(e);throw t.response=e,t}function u(e){if(!e.statusCode)return e;if(e.statusCode>=200&&e.statusCode<300)return e;const t=new a(e);throw t.response=e,t}function l(e,t){return r(this,void 0,void 0,(function*(){const n=null===t||void 0===t?void 0:t.body;let a=null===t||void 0===t?void 0:t.parameters;a&&(a=Object.keys(a).reduce((e,t)=>(void 0!==a[t]&&(e[t]=a[t]),e),{}));const o=null===t||void 0===t?void 0:t.downloadFile,r=new URLSearchParams(a).toString(),l={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}},f=fetch(`${c.b}${e}${r?"?"+r:""}`,Object.assign(Object.assign(Object.assign({},l),t),{body:n})).then(d);return o?f.then(i):f.then(s).then(u)}))}},"756544d27cf4c9846bb1":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return r})),n.d(t,"h",(function(){return i})),n.d(t,"k",(function(){return s})),n.d(t,"m",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"i",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"j",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"l",(function(){return v}));var a=Math.abs,o=Math.atan,c=(Math.atan2,Math.ceil,Math.cos),r=Math.exp,i=(Math.floor,Math.log),s=(Math.max,Math.min,Math.pow,Math.round,Math.sign,Math.sin),d=Math.tan,u=1e-6,l=Math.PI,f=l/2,h=l/4;Math.SQRT1_2,v(2),v(l);function b(e){return e>1?f:e<-1?-f:Math.asin(e)}function v(e){return e>0?Math.sqrt(e):0}},"7ac54ff654e57f606f7e":function(e,t,n){"use strict";var a=n("3c6a20fb0586b83050a0");function o(e,t,n){var o,i,s,d;t=t||1;for(var u=0;u<e[0].length;u++){var l=e[0][u];(!u||l[0]<o)&&(o=l[0]),(!u||l[1]<i)&&(i=l[1]),(!u||l[0]>s)&&(s=l[0]),(!u||l[1]>d)&&(d=l[1])}var f=s-o,h=d-i,b=Math.min(f,h),v=b/2;if(0===b){var p=[o,i];return p.distance=0,p}for(var g=new a(void 0,c),m=o;m<s;m+=b)for(var x=i;x<d;x+=b)g.push(new r(m+v,x+v,v,e));var j=function(e){for(var t=0,n=0,a=0,o=e[0],c=0,i=o.length,s=i-1;c<i;s=c++){var d=o[c],u=o[s],l=d[0]*u[1]-u[0]*d[1];n+=(d[0]+u[0])*l,a+=(d[1]+u[1])*l,t+=3*l}return 0===t?new r(o[0][0],o[0][1],0,e):new r(n/t,a/t,0,e)}(e),w=new r(o+f/2,i+h/2,0,e);w.d>j.d&&(j=w);for(var O=g.length;g.length;){var y=g.pop();y.d>j.d&&(j=y,n&&console.log("found best %d after %d probes",Math.round(1e4*y.d)/1e4,O)),y.max-j.d<=t||(v=y.h/2,g.push(new r(y.x-v,y.y-v,v,e)),g.push(new r(y.x+v,y.y-v,v,e)),g.push(new r(y.x-v,y.y+v,v,e)),g.push(new r(y.x+v,y.y+v,v,e)),O+=4)}n&&(console.log("num probes: "+O),console.log("best distance: "+j.d));var M=[j.x,j.y];return M.distance=j.d,M}function c(e,t){return t.max-e.max}function r(e,t,n,a){this.x=e,this.y=t,this.h=n,this.d=function(e,t,n){for(var a=!1,o=1/0,c=0;c<n.length;c++)for(var r=n[c],s=0,d=r.length,u=d-1;s<d;u=s++){var l=r[s],f=r[u];l[1]>t!==f[1]>t&&e<(f[0]-l[0])*(t-l[1])/(f[1]-l[1])+l[0]&&(a=!a),o=Math.min(o,i(e,t,l,f))}return 0===o?0:(a?1:-1)*Math.sqrt(o)}(e,t,a),this.max=this.d+this.h*Math.SQRT2}function i(e,t,n,a){var o=n[0],c=n[1],r=a[0]-o,i=a[1]-c;if(0!==r||0!==i){var s=((e-o)*r+(t-c)*i)/(r*r+i*i);s>1?(o=a[0],c=a[1]):s>0&&(o+=r*s,c+=i*s)}return(r=e-o)*r+(i=t-c)*i}a.default&&(a=a.default),e.exports=o,e.exports.default=o},"86a82e838249d734de60":function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return u}));var a=n("3c937a0e1273de295704");const o=()=>Object(a.a)("geochart/world"),c=()=>Object(a.a)("geochart/china"),r=()=>Object(a.a)("geochart/usa"),i=()=>Object(a.a)("geochart/korea"),s=()=>Object(a.a)("geochart/japan"),d=()=>Object(a.a)("geochart/europe"),u=()=>Object(a.a)("geochart/asian")},"9bc1513cc295c9dc19fa":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));const a=()=>{let e;if(document.querySelectorAll("title").forEach(t=>{"Chart created using amCharts library"===t.innerHTML&&(e=t)}),!e)return;const t=e.closest("g");t&&t.remove()},o=(e,t)=>Math.floor(Math.random()*(t-e)+e)},"9c73fcdace66e4e3a2e2":function(e,t,n){"use strict";n.r(t);var a=n("8af190b70a6bc55c6f1b"),o=n.n(a),c=n("27c44967f485a0bfa6b0"),r=n("e6b8ca6957424d016c03"),i=n("86a82e838249d734de60"),s=n("aa4135b9db94cd1e4bb4");t.default=()=>o.a.createElement(c.a,{title:"Hoa K\u1ef3",geoData:r.a,projection:new s.d.AlbersUsa,apiGeoChart:i.f})},a3f406f87c94f1963325:function(e,t,n){"use strict";var a=n("87560987db73f6ee0f12"),o=n("756544d27cf4c9846bb1");function c(e,t){return[e,1.25*Object(o.h)(Object(o.m)(o.j+.4*t))]}c.invert=function(e,t){return[e,2.5*Object(o.c)(Object(o.f)(.8*t))-.625*o.i]},t.a=function(){return Object(a.a)(c).scale(108.318)}},f63149c7eeae775fc4ee:function(e,t,n){"use strict";var a=n("8af190b70a6bc55c6f1b"),o=n.n(a),c=n("c388240468bb4997bb00"),r=n("cafaef78be967d2e7341"),i=n("0b3cb19af78752326f59"),s=n("466d17131f67b95e96d4"),d=n("9bc1513cc295c9dc19fa"),u=n("6643a48240e3ce4e96c0"),l=n("f01efac8284662da352d");const f=i.d.button`
  cursor: pointer;
  color: ${({disabled:e=!1})=>e?"rgb(204, 204, 204)":"#000000"};
  background: transparent;
  margin-top: -40px;
  z-index: 1;

  &:focus {
    outline: none;
  }
`;var h=n("7868e9050a2598bba7b6");const b=i.d.div`
  display: block;
`,v=i.d.div``,p=i.d.div`
  width: 90%;
`,g=i.d.div`
  display: ${e=>"true"===(null===e||void 0===e?void 0:e["aria-hidden"])?"none":"flex"};
  justify-content: flex-end;
`,m=i.d.div`
  min-width: 433px;
  min-height: 423px;
`,{hasOwnProperty:x}=Object;t.a=function({id:e,data:t}){const[n,i]=Object(a.useState)([]),[j,w]=Object(a.useState)(0),O=Object(a.useRef)(null),y="legenddiv_"+e;Object(a.useLayoutEffect)(()=>{var n;c.e(s.a);const a=c.c(e,r.g);O.current=a;const o=a.xAxes.push(new r.a),d=a.yAxes.push(new r.f);d.min=0,d.extraMax=1/3;const u=null!==(n=null===t||void 0===t?void 0:t.values)&&void 0!==n?n:[],l=u.length;function f(e,{name:n,values:o}){const i=a.series.push(new r.c);i.dataFields.valueY=e,i.dataFields.dateX="date",i.name=n,i.smoothing="monotoneX";const s=i.segments.template;s.interactionsEnabled=!0;s.states.create("hover").properties.strokeWidth=3;s.states.create("dimmed").properties.stroke=c.b("#dadada"),s.events.on("over",e=>{var t,n,a;m(null===(a=null===(n=null===(t=null===e||void 0===e?void 0:e.target)||void 0===t?void 0:t.parent)||void 0===n?void 0:n.parent)||void 0===a?void 0:a.parent)}),s.events.on("out",(function(e){j()}));const d=[];return null===t||void 0===t||t.date.forEach((t,n)=>{var a;const c={date:new Date(t).toDateString(),[e]:null!==(a=null===o||void 0===o?void 0:o[n])&&void 0!==a?a:0};d.push(c)}),i.data=d,i}for(let e=0;e<l;e+=1)f("value-"+e,u[e]);a.legend=new r.b;const b=c.c(y,c.a);b.width=c.d(100),b.height=c.d(100),a.legend.parent=b,a.legend.position="top";const v=a.legend.data;i(v);const p=(null===v||void 0===v?void 0:v.length)>=h.a?v.slice(0,h.a):v;function g(){var e;const t=(null!==(e=a.legend.contentHeight)&&void 0!==e?e:0)+"px",n=document.getElementById(y);n&&x.call(n.style,"height")&&(n.style.height=t)}function m(e){e.toFront(),e.segments.each((function(e){e.setState("hover")})),a.series.each((function(t){t!==e&&(t.segments.each((function(e){e.setState("dimmed")})),t.bulletsContainer.setState("dimmed"))}))}function j(){a.series.each((function(e){e.segments.each((function(e){e.setState("default")})),e.bulletsContainer.setState("default")}))}return a.legend.data=p,a.legend.align="left",a.legend.scrollable=!0,a.events.on("datavalidated",g),a.events.on("maxsizechanged",g),a.legend.itemContainers.template.events.on("over",(function(e){var t,n;m(null===(n=null===(t=null===e||void 0===e?void 0:e.target)||void 0===t?void 0:t.dataItem)||void 0===n?void 0:n.dataContext)})),a.legend.itemContainers.template.events.on("out",(function(e){j()})),a.cursor=new r.h,a.cursor.xAxis=o,()=>{a.dispose()}},[]),Object(a.useEffect)(()=>{Object(d.b)()});const M=j-h.a>=0,E=j+h.a<n.length,k=(null===n||void 0===n?void 0:n.length)>h.a;return o.a.createElement(b,null,o.a.createElement(v,{id:"legendwrapped_"+e},o.a.createElement(p,{id:y}),o.a.createElement(g,{"aria-hidden":k?"false":"true"},o.a.createElement(f,{type:"button",disabled:!M,onClick:()=>{const e=j-h.a;if(e>=0){const t=n.slice(e,j);O.current.legend.data=t,w(e)}}},o.a.createElement(u.a,{icon:l.c,size:"2x"})),o.a.createElement(f,{type:"button",disabled:!E,onClick:()=>{const e=j+h.a;if(e<n.length){w(e);const t=n.slice(e,e+h.a);O.current.legend.data=t}}},o.a.createElement(u.a,{icon:l.d,size:"2x"})))),o.a.createElement(m,{id:e}))}}}]);