import{s as V,a as y,C as I,g as M,i as p,n as N,f as u,k,q as w,e as m,c as g,b as d,A as L,m as _,y as h,h as E,I as z,t as G,d as H,z as P,J as K,K as $,L as B,M as F,p as Q,N as T}from"../chunks/scheduler.DCHIdItQ.js";import{S as j,i as J,c as W,a as X,m as Y,t as R,b as A,e as Z}from"../chunks/index.BPubO7i7.js";import{p as x}from"../chunks/stores.DUnNtWjl.js";import{e as C}from"../chunks/each.Btz5aSee.js";import{l as b,s as v}from"../chunks/stores.CDP2pJ8Z.js";import{b as ee}from"../chunks/entry.D7BuMwTx.js";function D(f,t,r){const i=f.slice();return i[7]=t[r],i}function U(f){let t,r,i,e,o=C(f[4]),l=[];for(let a=0;a<o.length;a+=1)l[a]=q(D(f,o,a));return{c(){t=m("nav");for(let a=0;a<l.length;a+=1)l[a].c();r=y(),i=m("img"),this.h()},l(a){t=g(a,"NAV",{class:!0});var n=d(t);for(let s=0;s<l.length;s+=1)l[s].l(n);r=M(n),i=g(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(u),this.h()},h(){L(i.src,e=f[0].data.USER.profilepicture)||_(i,"src",e),_(i,"alt","Pfp"),_(i,"class","svelte-1bx3tks"),_(t,"class","svelte-1bx3tks"),h(t,"dark",!!f[2])},m(a,n){p(a,t,n);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null);E(t,r),E(t,i)},p(a,n){if(n&21){o=C(a[4]);let s;for(s=0;s<o.length;s+=1){const c=D(a,o,s);l[s]?l[s].p(c,n):(l[s]=q(c),l[s].c(),l[s].m(t,r))}for(;s<l.length;s+=1)l[s].d(1);l.length=o.length}n&1&&!L(i.src,e=a[0].data.USER.profilepicture)&&_(i,"src",e),n&4&&h(t,"dark",!!a[2])},d(a){a&&u(t),z(l,a)}}}function q(f){let t,r=f[7].text+"",i;return{c(){t=m("a"),i=G(r),this.h()},l(e){t=g(e,"A",{href:!0,class:!0});var o=d(t);i=H(o,r),o.forEach(u),this.h()},h(){_(t,"href",f[7].route),_(t,"class","svelte-1bx3tks"),h(t,"dark",!!f[2]),h(t,"active",f[0].route.id===f[7].route)},m(e,o){p(e,t,o),E(t,i)},p(e,o){o&4&&h(t,"dark",!!e[2]),o&17&&h(t,"active",e[0].route.id===e[7].route)},d(e){e&&u(t)}}}function O(f){let t,r;return{c(){t=m("div"),r=m("div"),this.h()},l(i){t=g(i,"DIV",{class:!0});var e=d(t);r=g(e,"DIV",{class:!0,style:!0}),d(r).forEach(u),e.forEach(u),this.h()},h(){_(r,"class","line svelte-1bx3tks"),P(r,"width",10*f[1]+"%"),_(t,"class","bar svelte-1bx3tks")},m(i,e){p(i,t,e),E(t,r)},p(i,e){e&2&&P(r,"width",10*i[1]+"%")},d(i){i&&u(t)}}}function te(f){let t=Object.keys(f[0].data.USER).length,r,i,e=t&&U(f),o=f[3].loading&&O(f);return{c(){e&&e.c(),r=y(),o&&o.c(),i=I()},l(l){e&&e.l(l),r=M(l),o&&o.l(l),i=I()},m(l,a){e&&e.m(l,a),p(l,r,a),o&&o.m(l,a),p(l,i,a)},p(l,[a]){a&1&&(t=Object.keys(l[0].data.USER).length),t?e?e.p(l,a):(e=U(l),e.c(),e.m(r.parentNode,r)):e&&(e.d(1),e=null),l[3].loading?o?o.p(l,a):(o=O(l),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i:N,o:N,d(l){l&&(u(r),u(i)),e&&e.d(l),o&&o.d(l)}}}function se(f,t,r){let i,e,o;k(f,b,c=>r(3,e=c)),k(f,v,c=>r(5,o=c));let{page:l={}}=t;const a=[{route:"/chats",text:"Chats"},{route:"/login",text:"Login"},{route:"/register",text:"Register"},{route:"/profiles",text:"Profiles"},{route:"/settings",text:"Settings"}];let n=200,s=0;return b.subscribe(c=>{if(c.loading){const S=setInterval(()=>{(s!==6||c.goPast)&&r(1,s++,s),e.goPast&&(n=100),s==12&&(clearInterval(S),r(1,s=0),w(b,e.goPast=!1,e),w(b,e.loading=!1,e))},n)}}),f.$$set=c=>{"page"in c&&r(0,l=c.page)},f.$$.update=()=>{f.$$.dirty&32&&r(2,i=!o.LightMode)},[l,s,i,e,a,o]}class ae extends j{constructor(t){super(),J(this,t,se,te,V,{page:0})}}function le(f){let t,r,i,e,o;r=new ae({props:{page:f[0]}});const l=f[2].default,a=K(l,f,f[1],null);return{c(){t=m("header"),W(r.$$.fragment),i=y(),e=m("main"),a&&a.c(),this.h()},l(n){t=g(n,"HEADER",{class:!0});var s=d(t);X(r.$$.fragment,s),s.forEach(u),i=M(n),e=g(n,"MAIN",{class:!0});var c=d(e);a&&a.l(c),c.forEach(u),this.h()},h(){_(t,"class","svelte-bos9wu"),_(e,"class","svelte-bos9wu")},m(n,s){p(n,t,s),Y(r,t,null),p(n,i,s),p(n,e,s),a&&a.m(e,null),o=!0},p(n,[s]){const c={};s&1&&(c.page=n[0]),r.$set(c),a&&a.p&&(!o||s&2)&&$(a,l,n,n[1],o?F(l,n[1],s,null):B(n[1]),null)},i(n){o||(R(r.$$.fragment,n),R(a,n),o=!0)},o(n){A(r.$$.fragment,n),A(a,n),o=!1},d(n){n&&(u(t),u(i),u(e)),Z(r),a&&a.d(n)}}}function re(f,t,r){let i,e;k(f,v,s=>r(5,i=s)),k(f,x,s=>r(0,e=s));let{$$slots:o={},$$scope:l}=t,a=()=>{},n={LightMode:!0};return Q(()=>{const s=localStorage.getItem("settings");s&&(n=JSON.parse(String(s))),i!==n&&v.update(()=>n),a=v.subscribe(c=>{const S=c.LightMode?"#ffffff":"#121212";document.body.style.backgroundColor=S})}),T(()=>{a()}),ee(()=>{b.update(()=>({loading:!0,goPast:!1}))}),f.$$set=s=>{"$$scope"in s&&r(1,l=s.$$scope)},[e,l,o]}class _e extends j{constructor(t){super(),J(this,t,re,le,V,{})}}export{_e as component};
