(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"16056bc13792cfcd7fad":function(t,e,n){"use strict";var a=n("c388240468bb4997bb00"),o=n("aa4135b9db94cd1e4bb4"),c=n("466d17131f67b95e96d4"),r=n("8af190b70a6bc55c6f1b"),i=n.n(r),s=n("9bc1513cc295c9dc19fa");const u=n("0b3cb19af78752326f59").d.div`
  display: flex;
  height: 100%;

  .geochart {
    width: 100%;
    min-height: 400px;
  }
  width: 100%;
`;a.e(c.a);e.a=t=>{const{geoData:e,data:n,projection:c,include:d}=t,l=Object(r.useRef)(null);return Object(r.useEffect)(()=>{const t=l.current;if(!t)return;const r=(({chartDiv:t,geoData:e,data:n,projection:c,include:r})=>{const i=a.c(t,o.b);i.responsive.enabled=!0,i.geodata=e,i.maxZoomLevel=1,i.seriesContainer.draggable=!1,i.projection=c||new o.d.Mercator;const s=i.series.push(new o.c);s.data=n,s.exclude=["AQ"],s.include=r||void 0,s.heatRules.push({property:"fill",target:s.mapPolygons.template,min:a.b("#ffffff"),max:a.b("#b71c1c")}),s.useGeodata=!0;const u=n.map(t=>t.value),d=Math.min(...u),l=Math.max(...u),f=i.createChild(o.a);f.series=s,f.align="left",f.dx=30,f.width=a.d(25),f.marginRight=a.d(4),f.marginBottom=a.d(5),f.minValue=d,f.maxValue=l,f.valign="bottom";const h=f.valueAxis.axisRanges.create();h.value=f.minValue,h.label.text=d.toLocaleString("en");const b=f.valueAxis.axisRanges.create();b.value=f.maxValue,b.label.text=l.toLocaleString("en"),f.isDown=!1,s.mapPolygons.template.events.on("over",(function(t){isNaN(t.target.dataItem.value)?(f.valueAxis.hideTooltip(),t.target.tooltipText=""):f.valueAxis.showTooltipAt(t.target.dataItem.value)})),s.mapPolygons.template.events.on("out",(function(){f.valueAxis.hideTooltip()})),f.valueAxis.renderer.labels.template.adapter.add("text",(function(){return""}));const v=s.mapPolygons.template;v.tooltipHTML="<p><strong>{name}</strong></p><p>CA NHI\u1ec4M: {value}</p>",v.nonScalingStroke=!0,v.strokeWidth=.5,v.fill=a.b("#999");const p=v.states.create("hover");return p.properties.stroke=a.b("#000"),p.properties.strokeWidth=1,i})({chartDiv:t,geoData:e,data:n,projection:c,include:d});return()=>r.dispose()},[]),Object(r.useEffect)(()=>{Object(s.b)()}),i.a.createElement(u,null,i.a.createElement("div",{ref:l,className:"geochart"}))}},"200ec429fa2ec37f9f27":function(t,e,n){"use strict";var a=n("87560987db73f6ee0f12"),o=n("756544d27cf4c9846bb1");function c(t,e){for(var n=(1+o.g)*Object(o.k)(e),a=0,c=1/0;a<10&&Object(o.a)(c)>o.e;a++)e-=c=(e+Object(o.k)(e)-n)/(1+Object(o.d)(e));return n=Object(o.l)(2+o.i),[t*(1+Object(o.d)(e))/n,2*e/n]}c.invert=function(t,e){var n=1+o.g,a=Object(o.l)(n/2);return[2*t*a/(1+Object(o.d)(e*=a)),Object(o.b)((e+Object(o.k)(e))/n)]},e.a=function(){return Object(a.a)(c).scale(173.044)}},"2163980562687567642a":function(t,e,n){"use strict";n.r(e);var a=n("8af190b70a6bc55c6f1b"),o=n.n(a),c=n("27c44967f485a0bfa6b0"),r=n("6fa6d5ca8f5ccb11163c"),i=n("86a82e838249d734de60");e.default=()=>o.a.createElement(c.a,{title:"Nh\u1eadt B\u1ea3n",geoData:r.a,apiGeoChart:i.d})},"27c44967f485a0bfa6b0":function(t,e,n){"use strict";var a=n("8af190b70a6bc55c6f1b"),o=n.n(a),c=n("0b3cb19af78752326f59"),r=n("56dd7ad072b827ce17d1"),i=n("16056bc13792cfcd7fad"),s=n("ff5d7f992804bf17e6bb");var u=t=>{const{geoData:e,apiGeoChart:n,projection:c,include:r}=t,[u,d]=Object(a.useState)(null);return Object(a.useEffect)(()=>{n().then(t=>d(t))},[]),u?o.a.createElement(i.a,{geoData:e,data:u,projection:c,include:r}):o.a.createElement(s.a,null)},d=n("f63149c7eeae775fc4ee");const l=Object(c.d)(r.a)``;e.a=t=>{const{title:e,geoData:n,apiGeoChart:a,projection:c,include:r}=t,i=u({apiGeoChart:a,geoData:n,projection:c,include:r});return o.a.createElement(l,{title:e},o.a.createElement(d.a,{id:"china",data:{id:"EU",date:["2020-01-22","2020-01-23","2020-01-24","2020-01-25","2020-01-26","2020-01-27","2020-01-28","2020-01-29","2020-01-30"],values:[{id:"",name:"Hoa K\u1ef3",values:[0,0,0,0,0,0,0,0]},{id:"",name:"T\xe2y Ban Nha",values:[2,0,0,0,0,0,0,0]},{id:"",name:"Italia",values:[0,0,0,0,0,0,0,1]},{id:"",name:"Ph\xe1p",values:[1,2,0,1,1,2,0,3]},{id:"",name:"\u0110\u1ee9c",values:[1,2,2,1,0,6,0,0]},{id:"",name:"Anh",values:[0,0,0,0,1,0,0,0]},{id:"",name:"Nga",values:[0,0,0,0,0,0,0,0]}],timestamp:"1600438058735"}}),i)}},"3c6a20fb0586b83050a0":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));class a{constructor(t=[],e=o){if(this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(let t=(this.length>>1)-1;t>=0;t--)this._down(t)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(0===this.length)return;const t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:e,compare:n}=this,a=e[t];for(;t>0;){const o=t-1>>1,c=e[o];if(n(a,c)>=0)break;e[t]=c,t=o}e[t]=a}_down(t){const{data:e,compare:n}=this,a=this.length>>1,o=e[t];for(;t<a;){let a=1+(t<<1),c=e[a];const r=a+1;if(r<this.length&&n(e[r],c)<0&&(a=r,c=e[r]),n(c,o)>=0)break;e[t]=c,t=a}e[t]=o}}function o(t,e){return t<e?-1:t>e?1:0}},"3c937a0e1273de295704":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));class a extends Error{constructor(t){super(t.message),this.response=t}}class o extends Error{constructor(t){super(t.statusText),this.response=t}}var c=n("7868e9050a2598bba7b6"),r=function(t,e,n,a){return new(n||(n=Promise))((function(o,c){function r(t){try{s(a.next(t))}catch(t){c(t)}}function i(t){try{s(a.throw(t))}catch(t){c(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,i)}s((a=a.apply(t,e||[])).next())}))};function i(t){return 204===t.status||205===t.status?null:t.blob()}function s(t){return 204===t.status||205===t.status?null:t.json()}function u(t){if(t.status>=200&&t.status<300)return t;const e=new o(t);throw e.response=t,e}function d(t){if(!t.statusCode)return t;if(t.statusCode>=200&&t.statusCode<300)return t;const e=new a(t);throw e.response=t,e}function l(t,e){return r(this,void 0,void 0,(function*(){const n=null===e||void 0===e?void 0:e.body;let a=null===e||void 0===e?void 0:e.parameters;a&&(a=Object.keys(a).reduce((t,e)=>(void 0!==a[e]&&(t[e]=a[e]),t),{}));const o=null===e||void 0===e?void 0:e.downloadFile,r=new URLSearchParams(a).toString(),l={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}},f=fetch(`${c.b}${t}${r?"?"+r:""}`,Object.assign(Object.assign(Object.assign({},l),e),{body:n})).then(u);return o?f.then(i):f.then(s).then(d)}))}},"756544d27cf4c9846bb1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return r})),n.d(e,"h",(function(){return i})),n.d(e,"k",(function(){return s})),n.d(e,"m",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"i",(function(){return l})),n.d(e,"g",(function(){return f})),n.d(e,"j",(function(){return h})),n.d(e,"b",(function(){return b})),n.d(e,"l",(function(){return v}));var a=Math.abs,o=Math.atan,c=(Math.atan2,Math.ceil,Math.cos),r=Math.exp,i=(Math.floor,Math.log),s=(Math.max,Math.min,Math.pow,Math.round,Math.sign,Math.sin),u=Math.tan,d=1e-6,l=Math.PI,f=l/2,h=l/4;Math.SQRT1_2,v(2),v(l);function b(t){return t>1?f:t<-1?-f:Math.asin(t)}function v(t){return t>0?Math.sqrt(t):0}},"7ac54ff654e57f606f7e":function(t,e,n){"use strict";var a=n("3c6a20fb0586b83050a0");function o(t,e,n){var o,i,s,u;e=e||1;for(var d=0;d<t[0].length;d++){var l=t[0][d];(!d||l[0]<o)&&(o=l[0]),(!d||l[1]<i)&&(i=l[1]),(!d||l[0]>s)&&(s=l[0]),(!d||l[1]>u)&&(u=l[1])}var f=s-o,h=u-i,b=Math.min(f,h),v=b/2;if(0===b){var p=[o,i];return p.distance=0,p}for(var g=new a(void 0,c),m=o;m<s;m+=b)for(var x=i;x<u;x+=b)g.push(new r(m+v,x+v,v,t));var j=function(t){for(var e=0,n=0,a=0,o=t[0],c=0,i=o.length,s=i-1;c<i;s=c++){var u=o[c],d=o[s],l=u[0]*d[1]-d[0]*u[1];n+=(u[0]+d[0])*l,a+=(u[1]+d[1])*l,e+=3*l}return 0===e?new r(o[0][0],o[0][1],0,t):new r(n/e,a/e,0,t)}(t),w=new r(o+f/2,i+h/2,0,t);w.d>j.d&&(j=w);for(var O=g.length;g.length;){var y=g.pop();y.d>j.d&&(j=y,n&&console.log("found best %d after %d probes",Math.round(1e4*y.d)/1e4,O)),y.max-j.d<=e||(v=y.h/2,g.push(new r(y.x-v,y.y-v,v,t)),g.push(new r(y.x+v,y.y-v,v,t)),g.push(new r(y.x-v,y.y+v,v,t)),g.push(new r(y.x+v,y.y+v,v,t)),O+=4)}n&&(console.log("num probes: "+O),console.log("best distance: "+j.d));var M=[j.x,j.y];return M.distance=j.d,M}function c(t,e){return e.max-t.max}function r(t,e,n,a){this.x=t,this.y=e,this.h=n,this.d=function(t,e,n){for(var a=!1,o=1/0,c=0;c<n.length;c++)for(var r=n[c],s=0,u=r.length,d=u-1;s<u;d=s++){var l=r[s],f=r[d];l[1]>e!==f[1]>e&&t<(f[0]-l[0])*(e-l[1])/(f[1]-l[1])+l[0]&&(a=!a),o=Math.min(o,i(t,e,l,f))}return 0===o?0:(a?1:-1)*Math.sqrt(o)}(t,e,a),this.max=this.d+this.h*Math.SQRT2}function i(t,e,n,a){var o=n[0],c=n[1],r=a[0]-o,i=a[1]-c;if(0!==r||0!==i){var s=((t-o)*r+(e-c)*i)/(r*r+i*i);s>1?(o=a[0],c=a[1]):s>0&&(o+=r*s,c+=i*s)}return(r=t-o)*r+(i=e-c)*i}a.default&&(a=a.default),t.exports=o,t.exports.default=o},"86a82e838249d734de60":function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return d}));var a=n("3c937a0e1273de295704");const o=()=>Object(a.a)("geochart/world"),c=()=>Object(a.a)("geochart/china"),r=()=>Object(a.a)("geochart/usa"),i=()=>Object(a.a)("geochart/korea"),s=()=>Object(a.a)("geochart/japan"),u=()=>Object(a.a)("geochart/europe"),d=()=>Object(a.a)("geochart/asian")},"9bc1513cc295c9dc19fa":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));const a=()=>{let t;if(document.querySelectorAll("title").forEach(e=>{"Chart created using amCharts library"===e.innerHTML&&(t=e)}),!t)return;const e=t.closest("g");e&&e.remove()},o=(t,e)=>Math.floor(Math.random()*(e-t)+t)},a3f406f87c94f1963325:function(t,e,n){"use strict";var a=n("87560987db73f6ee0f12"),o=n("756544d27cf4c9846bb1");function c(t,e){return[t,1.25*Object(o.h)(Object(o.m)(o.j+.4*e))]}c.invert=function(t,e){return[t,2.5*Object(o.c)(Object(o.f)(.8*e))-.625*o.i]},e.a=function(){return Object(a.a)(c).scale(108.318)}},f63149c7eeae775fc4ee:function(t,e,n){"use strict";var a=n("8af190b70a6bc55c6f1b"),o=n.n(a),c=n("c388240468bb4997bb00"),r=n("cafaef78be967d2e7341"),i=n("0b3cb19af78752326f59"),s=n("466d17131f67b95e96d4"),u=n("9bc1513cc295c9dc19fa"),d=n("6643a48240e3ce4e96c0"),l=n("f01efac8284662da352d");const f=i.d.button`
  cursor: pointer;
  color: ${({disabled:t=!1})=>t?"rgb(204, 204, 204)":"#000000"};
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
  display: ${t=>"true"===(null===t||void 0===t?void 0:t["aria-hidden"])?"none":"flex"};
  justify-content: flex-end;
`,m=i.d.div`
  min-width: 433px;
  min-height: 423px;
`,{hasOwnProperty:x}=Object;e.a=function({id:t,data:e}){const[n,i]=Object(a.useState)([]),[j,w]=Object(a.useState)(0),O=Object(a.useRef)(null),y="legenddiv_"+t;Object(a.useLayoutEffect)(()=>{var n;c.e(s.a);const a=c.c(t,r.g);O.current=a;const o=a.xAxes.push(new r.a),u=a.yAxes.push(new r.f);u.min=0,u.extraMax=1/3;const d=null!==(n=null===e||void 0===e?void 0:e.values)&&void 0!==n?n:[],l=d.length;function f(t,{name:n,values:o}){const i=a.series.push(new r.c);i.dataFields.valueY=t,i.dataFields.dateX="date",i.name=n,i.smoothing="monotoneX";const s=i.segments.template;s.interactionsEnabled=!0;s.states.create("hover").properties.strokeWidth=3;s.states.create("dimmed").properties.stroke=c.b("#dadada"),s.events.on("over",t=>{var e,n,a;m(null===(a=null===(n=null===(e=null===t||void 0===t?void 0:t.target)||void 0===e?void 0:e.parent)||void 0===n?void 0:n.parent)||void 0===a?void 0:a.parent)}),s.events.on("out",(function(t){j()}));const u=[];return null===e||void 0===e||e.date.forEach((e,n)=>{var a;const c={date:new Date(e).toDateString(),[t]:null!==(a=null===o||void 0===o?void 0:o[n])&&void 0!==a?a:0};u.push(c)}),i.data=u,i}for(let t=0;t<l;t+=1)f("value-"+t,d[t]);a.legend=new r.b;const b=c.c(y,c.a);b.width=c.d(100),b.height=c.d(100),a.legend.parent=b,a.legend.position="top";const v=a.legend.data;i(v);const p=(null===v||void 0===v?void 0:v.length)>=h.a?v.slice(0,h.a):v;function g(){var t;const e=(null!==(t=a.legend.contentHeight)&&void 0!==t?t:0)+"px",n=document.getElementById(y);n&&x.call(n.style,"height")&&(n.style.height=e)}function m(t){t.toFront(),t.segments.each((function(t){t.setState("hover")})),a.series.each((function(e){e!==t&&(e.segments.each((function(t){t.setState("dimmed")})),e.bulletsContainer.setState("dimmed"))}))}function j(){a.series.each((function(t){t.segments.each((function(t){t.setState("default")})),t.bulletsContainer.setState("default")}))}return a.legend.data=p,a.legend.align="left",a.legend.scrollable=!0,a.events.on("datavalidated",g),a.events.on("maxsizechanged",g),a.legend.itemContainers.template.events.on("over",(function(t){var e,n;m(null===(n=null===(e=null===t||void 0===t?void 0:t.target)||void 0===e?void 0:e.dataItem)||void 0===n?void 0:n.dataContext)})),a.legend.itemContainers.template.events.on("out",(function(t){j()})),a.cursor=new r.h,a.cursor.xAxis=o,()=>{a.dispose()}},[]),Object(a.useEffect)(()=>{Object(u.b)()});const M=j-h.a>=0,E=j+h.a<n.length,k=(null===n||void 0===n?void 0:n.length)>h.a;return o.a.createElement(b,null,o.a.createElement(v,{id:"legendwrapped_"+t},o.a.createElement(p,{id:y}),o.a.createElement(g,{"aria-hidden":k?"false":"true"},o.a.createElement(f,{type:"button",disabled:!M,onClick:()=>{const t=j-h.a;if(t>=0){const e=n.slice(t,j);O.current.legend.data=e,w(t)}}},o.a.createElement(d.a,{icon:l.c,size:"2x"})),o.a.createElement(f,{type:"button",disabled:!E,onClick:()=>{const t=j+h.a;if(t<n.length){w(t);const e=n.slice(t,t+h.a);O.current.legend.data=e}}},o.a.createElement(d.a,{icon:l.d,size:"2x"})))),o.a.createElement(m,{id:t}))}}}]);