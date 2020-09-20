(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"56dd7ad072b827ce17d1":function(e,t,n){"use strict";var a=n("8af190b70a6bc55c6f1b"),l=n.n(a);const r=n("0b3cb19af78752326f59").d.div`
  background: #ffff;
  border-radius: 5px;
  margin-top: ${e=>e.theme.gutter}px;
  height: 100%;
  width: 100%;
  .title-block {
    font-size: 24px;
    font-weight: 700;
    padding: ${e=>2*e.theme.gutter}px;

    border-bottom: 2px solid #ebebeb;
  }
  .content-block {
    padding: ${e=>2*e.theme.gutter}px;
    display: flex;
    justify-items: center;
    justify-content: center;
  }
`;t.a=e=>{const{children:t,title:n}=e;return l.a.createElement(r,null,n&&l.a.createElement("div",{className:"title-block"},n),l.a.createElement("div",{className:"content-block"},t))}},f56049467b6e260a3597:function(e,t,n){"use strict";n.r(t);var a=n("8af190b70a6bc55c6f1b"),l=n.n(a),r=n("0b3cb19af78752326f59"),c=n("a0b0bcb21a2107df65b0"),o=n("11612651b80e723c7b10");const b=r.d.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${e=>e.theme.gutter}px;
`,i=r.d.div`
  padding: 0 ${e=>e.theme.gutter}px;
  margin-bottom: ${e=>2*e.theme.gutter}px;
  flex: 1;
  .item {
    padding: 24px;
    border-radius: 5px;
    color: #fff;
    font-size: 38px;
    .text {
      font-size: 50%;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .number {
      font-size: 100%;
    }
  }
  ${o.a.large`
    .item {
      font-size: 30px;
    }
  `}
  ${o.a.medium`
    flex: 0 0 50%;
  `}
  ${o.a.small`
    .item {
      font-size: 24px;
    }
  `}
  ${o.a.mobile`
    .item {
      font-size: 20px;
      padding: 14px;
    }
  `}
`,m=e=>{const{item:t}=e;return l.a.createElement(i,null,l.a.createElement("div",{className:"item",style:{background:t.background}},l.a.createElement("div",{className:"text"},t.text),l.a.createElement("div",{className:"number"},t.number.toLocaleString("en"))))};var d=Object(a.memo)(()=>{const{t:e}=Object(c.a)(),t=[{number:11562873,text:e("S\u1ed1 tr\u01b0\u1eddng h\u1ee3p m\u1eafc"),background:"#2196f3"},{number:4488268,text:e("Tr\u01b0\u1eddng h\u1ee3p hi\u1ec7n m\u1eafc"),background:"#ab47bc"},{number:6537764,text:e("Kh\u1ecfi b\u1ec7nh"),background:"#2af38b"},{number:536841,text:e("S\u1ed1 t\u1eed vong"),background:"#ff5252"}];return l.a.createElement(b,null,t.map(e=>l.a.createElement(m,{key:e.background,item:e})))}),s=n("22767a2fd85fb0d034e0"),u=n("56dd7ad072b827ce17d1");var f=Object(a.memo)(e=>l.a.createElement(u.a,null,l.a.createElement(s.a,Object.assign({speed:2,width:400,height:200,viewBox:"0 0 400 200",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"400",height:"200"}),l.a.createElement("rect",{x:"79",y:"91",rx:"0",ry:"0",width:"1",height:"0"})))),p=n("ff5d7f992804bf17e6bb");const h=r.d.div``;var g=e=>{const{options:t,continueObserving:n,onIntersection:r,children:c,placeholder:o}=e,[b,i]=Object(a.useState)(!1),m=Object(a.useRef)(),d=Object(a.useRef)();Object(a.useEffect)(()=>{const e=m.current;if(!e)return;const n=new IntersectionObserver(s,t||{root:null,rootMargin:"0px",threshold:0});return n.observe(e),d.current=n,()=>n.unobserve(e)},[]);const s=e=>{if(n||b)n&&r&&r(e);else{const t=e.find(e=>e.target===m.current);t&&t.isIntersecting&&(i(!0),r&&r(e),d.current.unobserve(m.current))}};return l.a.createElement(h,{className:"intersectionObserver "+(b?"":"placeholder-bbserver"),ref:m},(n||b)&&c,!b&&(o||l.a.createElement(f,null)))},E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const x=r.d.div``;var v=e=>{const{Component:t,placeholder:n}=e,r=E(e,["Component","placeholder"]);return l.a.createElement(x,null,l.a.createElement(g,null,l.a.createElement(a.Suspense,{fallback:n||l.a.createElement(p.a,null)},l.a.createElement(t,Object.assign({},r)))))};const O=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(32)]).then(n.bind(null,"de03305a27fb0a582110"))),y=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(27)]).then(n.bind(null,"9c52e470c23eae3d3e5d"))),j=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(31)]).then(n.bind(null,"9c73fcdace66e4e3a2e2"))),w=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(30)]).then(n.bind(null,"15aed3b622b4598bf755"))),k=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(29)]).then(n.bind(null,"2163980562687567642a"))),z=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(28)]).then(n.bind(null,"1bdf3446866f3bb6bf20"))),C=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(26)]).then(n.bind(null,"6b2cb9835e45c2068207"))),P=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(33)]).then(n.bind(null,"eec1708309b596adafb4"))),$=r.d.div`
  font-family: Roboto, serif;
`;t.default=()=>l.a.createElement($,null,l.a.createElement(v,{Component:d,placeholder:l.a.createElement(f,null)}),l.a.createElement(v,{Component:O,placeholder:l.a.createElement(f,null)}),l.a.createElement(v,{Component:P,placeholder:l.a.createElement(f,null)}),l.a.createElement(v,{Component:y,placeholder:l.a.createElement(f,null)}),l.a.createElement(v,{Component:j,placeholder:l.a.createElement(f,null)}),l.a.createElement(v,{Component:w,placeholder:l.a.createElement(f,null)}),l.a.createElement(v,{Component:k,placeholder:l.a.createElement(f,null)}),l.a.createElement(v,{Component:z,placeholder:l.a.createElement(f,null)}),l.a.createElement(v,{Component:C,placeholder:l.a.createElement(f,null)}))}}]);