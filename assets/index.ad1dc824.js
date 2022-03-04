import{r as m,o as E,c as b,a,b as l,w as _,F as P,d as u,i as j,B as A,g as L,e as y,f as I,h as O,j as k}from"./vendor.51f5342a.js";const V=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}};V();var R=(c,n)=>{const t=c.__vccOpts||c;for(const[o,e]of n)t[o]=e;return t};const T={},D=a("h1",{class:"p-3 text-center bg-info"},"APP VUEJS",-1),N={class:"container"},w={class:"nav nav-tabs"},C={class:"nav-item"},S=u("Home"),U={class:"nav-item"},B=u("About"),x={class:"nav-item"},H=u("User list"),q={class:"nav-item"},$=u("Login"),F={class:"nav-item"},W=u("Product");function z(c,n){const t=m("router-link"),o=m("router-view");return E(),b(P,null,[D,a("div",N,[a("ul",w,[a("li",C,[l(t,{to:"/",class:"nav-link"},{default:_(()=>[S]),_:1})]),a("li",U,[l(t,{to:"/about",class:"nav-link"},{default:_(()=>[B]),_:1})]),a("li",x,[l(t,{to:"/users",class:"nav-link"},{default:_(()=>[H]),_:1})]),a("li",q,[l(t,{to:"/login",class:"nav-link"},{default:_(()=>[$]),_:1})]),a("li",F,[l(t,{to:"/product",class:"nav-link"},{default:_(()=>[W]),_:1})])]),l(o)])],64)}var K=R(T,[["render",z]]);const M="modulepreload",f={},Q="/appvuejs/",i=function(n,t){return!t||t.length===0?n():Promise.all(t.map(o=>{if(o=`${Q}${o}`,o in f)return;f[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":M,e||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),e)return new Promise((v,g)=>{s.addEventListener("load",v),s.addEventListener("error",g)})})).then(()=>n())},G={apiKey:"AIzaSyDNn-jPrxQNMQLfIne_Wpr7Ev8Pagj32OU",authDomain:"project-vuejs-d5b77.firebaseapp.com",projectId:"project-vuejs-d5b77",storageBucket:"project-vuejs-d5b77.appspot.com",messagingSenderId:"895967814004",appId:"1:895967814004:web:39897281bdad3e9caacc21",measurementId:"G-VCPL78YCHT"},d=j(G),X=A(d),p=L(d),Z=y(d),J=[{path:"/:pathMatch(.*)*",component:()=>i(()=>import("./Error.8eda12c4.js"),["assets/Error.8eda12c4.js","assets/vendor.51f5342a.js"])},{path:"/",component:()=>i(()=>import("./Home.40a7b12f.js"),["assets/Home.40a7b12f.js","assets/vendor.51f5342a.js"])},{path:"/about",component:()=>i(()=>import("./About.58c6bc23.js"),["assets/About.58c6bc23.js","assets/vendor.51f5342a.js"])},{path:"/login",component:()=>i(()=>import("./Login.5a3ede14.js"),["assets/Login.5a3ede14.js","assets/vendor.51f5342a.js"])},{path:"/users",component:()=>i(()=>import("./User.1eede432.js"),["assets/User.1eede432.js","assets/User.4f9a6dfd.css","assets/vendor.51f5342a.js"])},{path:"/product",component:()=>i(()=>import("./Product.ad12570b.js"),["assets/Product.ad12570b.js","assets/vendor.51f5342a.js"])},{path:"/register",component:()=>i(()=>import("./Register.cc2c9535.js"),["assets/Register.cc2c9535.js","assets/vendor.51f5342a.js"])},{path:"/profile",component:()=>i(()=>import("./Profile.c16558e4.js"),["assets/Profile.c16558e4.js","assets/vendor.51f5342a.js"]),meta:{requireAuth:!0}},{path:"/edit/:id",name:"edit",component:()=>i(()=>import("./Edit.aece9615.js"),["assets/Edit.aece9615.js","assets/vendor.51f5342a.js"])}],h=I({history:O(),routes:J});h.beforeEach((c,n,t)=>{if(c.path==="/login"&&p.currentUser){t("/profile");return}if(c.matched.some(o=>o.meta.requireAuth)&&!p.currentUser){console.log("Tr\u01B0\u1EDBc ti\xEAn ph\u1EA3i \u0111\u0103ng nh\u1EADp"),t("/login");return}console.log(p.currentUser),t()});k(K).use(h).mount("#app");export{R as _,p as a,X as d,Z as s};
