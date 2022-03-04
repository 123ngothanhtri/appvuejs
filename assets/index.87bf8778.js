import{r as d,o as v,c as E,a,b as l,w as _,d as u,e as g,f as A,g as L,h as y,i as P}from"./vendor.c5a18318.js";const b=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}};b();var O=(i,s)=>{const t=i.__vccOpts||i;for(const[o,e]of s)t[o]=e;return t};const k={},V={class:"container"},R=a("h1",{class:"p-3 text-center bg-info"},"APP VUEJS",-1),T={class:"nav nav-tabs"},j={class:"nav-item"},I=u("Home"),w={class:"nav-item"},D=u("About"),C={class:"nav-item"},N=u("User list"),S={class:"nav-item"},q=u("Login");function x(i,s){const t=d("router-link"),o=d("router-view");return v(),E("div",V,[R,a("ul",T,[a("li",j,[l(t,{to:"/",class:"nav-link"},{default:_(()=>[I]),_:1})]),a("li",w,[l(t,{to:"/about",class:"nav-link"},{default:_(()=>[D]),_:1})]),a("li",C,[l(t,{to:"/users",class:"nav-link"},{default:_(()=>[N]),_:1})]),a("li",S,[l(t,{to:"/login",class:"nav-link"},{default:_(()=>[q]),_:1})])]),l(o)])}var H=O(k,[["render",x]]);const U="modulepreload",m={},$="/",c=function(s,t){return!t||t.length===0?s():Promise.all(t.map(o=>{if(o=`${$}${o}`,o in m)return;m[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":U,e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e)return new Promise((f,h)=>{n.addEventListener("load",f),n.addEventListener("error",h)})})).then(()=>s())},B=[{path:"/:pathMatch(.*)*",component:()=>c(()=>import("./Error.510bd214.js"),["assets/Error.510bd214.js","assets/vendor.c5a18318.js"])},{path:"/",component:()=>c(()=>import("./Home.9f8f20b7.js"),["assets/Home.9f8f20b7.js","assets/vendor.c5a18318.js"])},{path:"/about",component:()=>c(()=>import("./About.a988d2ec.js"),["assets/About.a988d2ec.js","assets/vendor.c5a18318.js"])},{path:"/login",component:()=>c(()=>import("./Login.674e2a4c.js"),["assets/Login.674e2a4c.js","assets/vendor.c5a18318.js"])},{path:"/users",component:()=>c(()=>import("./User.700ac52d.js"),["assets/User.700ac52d.js","assets/User.4f9a6dfd.css","assets/firebase.8e6cca9d.js","assets/vendor.c5a18318.js"])},{path:"/register",component:()=>c(()=>import("./Register.adc96b82.js"),["assets/Register.adc96b82.js","assets/vendor.c5a18318.js"])},{path:"/profile",component:()=>c(()=>import("./Profile.67a576a3.js"),["assets/Profile.67a576a3.js","assets/vendor.c5a18318.js"]),meta:{requireAuth:!0}},{path:"/edit/:id",name:"edit",component:()=>c(()=>import("./Edit.675e84bf.js"),["assets/Edit.675e84bf.js","assets/firebase.8e6cca9d.js","assets/vendor.c5a18318.js"])}],p=g({history:A(),routes:B}),W=()=>new Promise((i,s)=>{const t=L(y(),o=>{t(),i(o)},s)});p.beforeEach(async(i,s,t)=>{i.matched.some(o=>o.meta.requireAuth)?await W()?t():(alert("Tr\u01B0\u1EDBc ti\xEAn ph\u1EA3i \u0111\u0103ng nh\u1EADp"),t("/login")):t()});P(H).use(p).mount("#app");export{O as _};
