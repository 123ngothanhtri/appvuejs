function Tr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const qa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ga=Tr(qa);function qs(t){return!!t||t===""}function Rr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?Xa(r):Rr(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(de(t))return t;if(le(t))return t}}const Ja=/;(?![^(]*\))/g,Ya=/:(.+)/;function Xa(t){const e={};return t.split(Ja).forEach(n=>{if(n){const r=n.split(Ya);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ar(t){let e="";if(de(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Ar(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mp=t=>t==null?"":F(t)||le(t)&&(t.toString===Xs||!B(t.toString))?JSON.stringify(t,Gs,2):String(t),Gs=(t,e)=>e&&e.__v_isRef?Gs(t,e.value):Nt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Js(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!F(e)&&!Qs(e)?String(e):e,X={},Pt=[],Pe=()=>{},Qa=()=>!1,Za=/^on[^a-z]/,Nn=t=>Za.test(t),Cr=t=>t.startsWith("onUpdate:"),ge=Object.assign,Sr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ec=Object.prototype.hasOwnProperty,K=(t,e)=>ec.call(t,e),F=Array.isArray,Nt=t=>Mn(t)==="[object Map]",Js=t=>Mn(t)==="[object Set]",B=t=>typeof t=="function",de=t=>typeof t=="string",Or=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",Ys=t=>le(t)&&B(t.then)&&B(t.catch),Xs=Object.prototype.toString,Mn=t=>Xs.call(t),tc=t=>Mn(t).slice(8,-1),Qs=t=>Mn(t)==="[object Object]",kr=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ln=Tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nc=/-(\w)/g,Le=xn(t=>t.replace(nc,(e,n)=>n?n.toUpperCase():"")),rc=/\B([A-Z])/g,Mt=xn(t=>t.replace(rc,"-$1").toLowerCase()),Dn=xn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pr=xn(t=>t?`on${Dn(t)}`:""),Zt=(t,e)=>!Object.is(t,e),Un=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zs;const sc=()=>Zs||(Zs=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let lt;const $n=[];class ic{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&lt&&(this.parent=lt,this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&($n.push(this),lt=this)}off(){this.active&&($n.pop(),lt=$n[$n.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function oc(t,e){e=e||lt,e&&e.active&&e.effects.push(t)}const Mr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ei=t=>(t.w&Ye)>0,ti=t=>(t.n&Ye)>0,ac=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ye},cc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ei(s)&&!ti(s)?s.delete(t):e[n++]=s,s.w&=~Ye,s.n&=~Ye}e.length=n}},Lr=new WeakMap;let en=0,Ye=1;const xr=30,tn=[];let ut;const ft=Symbol(""),Dr=Symbol("");class Ur{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],oc(this,r)}run(){if(!this.active)return this.fn();if(!tn.includes(this))try{return tn.push(ut=this),lc(),Ye=1<<++en,en<=xr?ac(this):ni(this),this.fn()}finally{en<=xr&&cc(this),Ye=1<<--en,dt(),tn.pop();const e=tn.length;ut=e>0?tn[e-1]:void 0}}stop(){this.active&&(ni(this),this.onStop&&this.onStop(),this.active=!1)}}function ni(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Lt=!0;const Fr=[];function xt(){Fr.push(Lt),Lt=!1}function lc(){Fr.push(Lt),Lt=!0}function dt(){const t=Fr.pop();Lt=t===void 0?!0:t}function Ee(t,e,n){if(!ri())return;let r=Lr.get(t);r||Lr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Mr()),si(s)}function ri(){return Lt&&ut!==void 0}function si(t,e){let n=!1;en<=xr?ti(t)||(t.n|=Ye,n=!ei(t)):n=!t.has(ut),n&&(t.add(ut),ut.deps.push(t))}function We(t,e,n,r,s,i){const o=Lr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?kr(n)&&a.push(o.get("length")):(a.push(o.get(ft)),Nt(t)&&a.push(o.get(Dr)));break;case"delete":F(t)||(a.push(o.get(ft)),Nt(t)&&a.push(o.get(Dr)));break;case"set":Nt(t)&&a.push(o.get(ft));break}if(a.length===1)a[0]&&$r(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);$r(Mr(c))}}function $r(t,e){for(const n of F(t)?t:[...t])(n!==ut||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const uc=Tr("__proto__,__v_isRef,__isVue"),ii=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Or)),fc=Br(),dc=Br(!1,!0),hc=Br(!0),oi=pc();function pc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xt();const r=q(this)[e].apply(this,n);return dt(),r}}),t}function Br(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?kc:gi:e?pi:hi).get(r))return r;const o=F(r);if(!t&&o&&K(oi,s))return Reflect.get(oi,s,i);const a=Reflect.get(r,s,i);return(Or(s)?ii.has(s):uc(s))||(t||Ee(r,"get",s),e)?a:_e(a)?!o||!kr(s)?a.value:a:le(a)?t?mi(a):nn(a):a}}const gc=ai(),mc=ai(!0);function ai(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&!Vr(s)&&(s=q(s),o=q(o),!F(n)&&_e(o)&&!_e(s)))return o.value=s,!0;const a=F(n)&&kr(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===q(i)&&(a?Zt(s,o)&&We(n,"set",r,s):We(n,"add",r,s)),c}}function _c(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&We(t,"delete",e,void 0),r}function vc(t,e){const n=Reflect.has(t,e);return(!Or(e)||!ii.has(e))&&Ee(t,"has",e),n}function yc(t){return Ee(t,"iterate",F(t)?"length":ft),Reflect.ownKeys(t)}const ci={get:fc,set:gc,deleteProperty:_c,has:vc,ownKeys:yc},Ic={get:hc,set(t,e){return!0},deleteProperty(t,e){return!0}},Ec=ge({},ci,{get:dc,set:mc}),Hr=t=>t,Bn=t=>Reflect.getPrototypeOf(t);function Hn(t,e,n=!1,r=!1){t=t.__v_raw;const s=q(t),i=q(e);e!==i&&!n&&Ee(s,"get",e),!n&&Ee(s,"get",i);const{has:o}=Bn(s),a=r?Hr:n?zr:rn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function jn(t,e=!1){const n=this.__v_raw,r=q(n),s=q(t);return t!==s&&!e&&Ee(r,"has",t),!e&&Ee(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Wn(t,e=!1){return t=t.__v_raw,!e&&Ee(q(t),"iterate",ft),Reflect.get(t,"size",t)}function li(t){t=q(t);const e=q(this);return Bn(e).has.call(e,t)||(e.add(t),We(e,"add",t,t)),this}function ui(t,e){e=q(e);const n=q(this),{has:r,get:s}=Bn(n);let i=r.call(n,t);i||(t=q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Zt(e,o)&&We(n,"set",t,e):We(n,"add",t,e),this}function fi(t){const e=q(this),{has:n,get:r}=Bn(e);let s=n.call(e,t);s||(t=q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&We(e,"delete",t,void 0),i}function di(){const t=q(this),e=t.size!==0,n=t.clear();return e&&We(t,"clear",void 0,void 0),n}function Vn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=q(o),c=e?Hr:t?zr:rn;return!t&&Ee(a,"iterate",ft),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function zn(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=Nt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Hr:e?zr:rn;return!e&&Ee(i,"iterate",c?Dr:ft),{next(){const{value:p,done:h}=l.next();return h?{value:p,done:h}:{value:a?[f(p[0]),f(p[1])]:f(p),done:h}},[Symbol.iterator](){return this}}}}function Xe(t){return function(...e){return t==="delete"?!1:this}}function bc(){const t={get(i){return Hn(this,i)},get size(){return Wn(this)},has:jn,add:li,set:ui,delete:fi,clear:di,forEach:Vn(!1,!1)},e={get(i){return Hn(this,i,!1,!0)},get size(){return Wn(this)},has:jn,add:li,set:ui,delete:fi,clear:di,forEach:Vn(!1,!0)},n={get(i){return Hn(this,i,!0)},get size(){return Wn(this,!0)},has(i){return jn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Vn(!0,!1)},r={get(i){return Hn(this,i,!0,!0)},get size(){return Wn(this,!0)},has(i){return jn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),e[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[t,n,e,r]}const[wc,Tc,Rc,Ac]=bc();function jr(t,e){const n=e?t?Ac:Rc:t?Tc:wc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Cc={get:jr(!1,!1)},Sc={get:jr(!1,!0)},Oc={get:jr(!0,!1)},hi=new WeakMap,pi=new WeakMap,gi=new WeakMap,kc=new WeakMap;function Pc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nc(t){return t.__v_skip||!Object.isExtensible(t)?0:Pc(tc(t))}function nn(t){return t&&t.__v_isReadonly?t:Wr(t,!1,ci,Cc,hi)}function Mc(t){return Wr(t,!1,Ec,Sc,pi)}function mi(t){return Wr(t,!0,Ic,Oc,gi)}function Wr(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Nc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Dt(t){return Vr(t)?Dt(t.__v_raw):!!(t&&t.__v_isReactive)}function Vr(t){return!!(t&&t.__v_isReadonly)}function _i(t){return Dt(t)||Vr(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function vi(t){return Fn(t,"__v_skip",!0),t}const rn=t=>le(t)?nn(t):t,zr=t=>le(t)?mi(t):t;function yi(t){ri()&&(t=q(t),t.dep||(t.dep=Mr()),si(t.dep))}function Ii(t,e){t=q(t),t.dep&&$r(t.dep)}function _e(t){return Boolean(t&&t.__v_isRef===!0)}function Lc(t){return Ei(t,!1)}function xc(t){return Ei(t,!0)}function Ei(t,e){return _e(t)?t:new Dc(t,e)}class Dc{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:q(e),this._value=n?e:rn(e)}get value(){return yi(this),this._value}set value(e){e=this._shallow?e:q(e),Zt(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:rn(e),Ii(this))}}function sn(t){return _e(t)?t.value:t}const Uc={get:(t,e,n)=>sn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _e(s)&&!_e(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function bi(t){return Dt(t)?t:new Proxy(t,Uc)}class Fc{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Ur(e,()=>{this._dirty||(this._dirty=!0,Ii(this))}),this.__v_isReadonly=r}get value(){const e=q(this);return yi(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function xe(t,e){let n,r;const s=B(t);return s?(n=t,r=Pe):(n=t.get,r=t.set),new Fc(n,r,s||!r)}Promise.resolve();function $c(t,e,...n){const r=t.vnode.props||X;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:h}=r[f]||X;h?s=n.map(y=>y.trim()):p&&(s=n.map(Nr))}let a,c=r[a=Pr(e)]||r[a=Pr(Le(e))];!c&&i&&(c=r[a=Pr(Mt(e))]),c&&Se(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Se(l,t,6,s)}}function wi(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const f=wi(l,e,!0);f&&(a=!0,ge(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ge(o,i),r.set(t,o),o)}function Kr(t,e){return!t||!Nn(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Mt(e))||K(t,e))}let Ae=null,Ti=null;function Kn(t){const e=Ae;return Ae=t,Ti=t&&t.type.__scopeId||null,e}function Bc(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Xi(-1);const i=Kn(e),o=t(...s);return Kn(i),r._d&&Xi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function qr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:p,data:h,setupState:y,ctx:R,inheritAttrs:N}=t;let C,S;const x=Kn(t);try{if(n.shapeFlag&4){const V=s||r;C=Fe(f.call(V,V,p,i,y,h,R)),S=c}else{const V=e;C=Fe(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),S=e.props?c:Hc(c)}}catch(V){on.length=0,nr(V,t,1),C=be(Ue)}let j=C;if(S&&N!==!1){const V=Object.keys(S),{shapeFlag:se}=j;V.length&&se&(1|6)&&(o&&V.some(Cr)&&(S=jc(S,o)),j=Ut(j,S))}return n.dirs&&(j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),C=j,Kn(x),C}const Hc=t=>{let e;for(const n in t)(n==="class"||n==="style"||Nn(n))&&((e||(e={}))[n]=t[n]);return e},jc=(t,e)=>{const n={};for(const r in t)(!Cr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Wc(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ri(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const h=f[p];if(o[h]!==r[h]&&!Kr(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ri(r,o,l):!0:!!o;return!1}function Ri(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Kr(n,i))return!0}return!1}function Vc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const zc=t=>t.__isSuspense;function Kc(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Kl(t)}function qn(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function Qe(t,e,n=!1){const r=ue||Ae;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}function qc(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pi(()=>{t.isMounted=!0}),Ni(()=>{t.isUnmounting=!0}),t}const Ce=[Function,Array],Gc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ce,onEnter:Ce,onAfterEnter:Ce,onEnterCancelled:Ce,onBeforeLeave:Ce,onLeave:Ce,onAfterLeave:Ce,onLeaveCancelled:Ce,onBeforeAppear:Ce,onAppear:Ce,onAfterAppear:Ce,onAppearCancelled:Ce},setup(t,{slots:e}){const n=xl(),r=qc();let s;return()=>{const i=e.default&&Si(e.default(),!0);if(!i||!i.length)return;const o=q(t),{mode:a}=o,c=i[0];if(r.isLeaving)return Jr(c);const l=Ci(c);if(!l)return Jr(c);const f=Gr(l,o,r,n);Yr(l,f);const p=n.subTree,h=p&&Ci(p);let y=!1;const{getTransitionKey:R}=l.type;if(R){const N=R();s===void 0?s=N:N!==s&&(s=N,y=!0)}if(h&&h.type!==Ue&&(!_t(l,h)||y)){const N=Gr(h,o,r,n);if(Yr(h,N),a==="out-in")return r.isLeaving=!0,N.afterLeave=()=>{r.isLeaving=!1,n.update()},Jr(c);a==="in-out"&&l.type!==Ue&&(N.delayLeave=(C,S,x)=>{const j=Ai(r,h);j[String(h.key)]=h,C._leaveCb=()=>{S(),C._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=x})}return c}}},Jc=Gc;function Ai(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Gr(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:p,onLeave:h,onAfterLeave:y,onLeaveCancelled:R,onBeforeAppear:N,onAppear:C,onAfterAppear:S,onAppearCancelled:x}=e,j=String(t.key),V=Ai(n,t),se=(W,ae)=>{W&&Se(W,r,9,ae)},oe={mode:i,persisted:o,beforeEnter(W){let ae=a;if(!n.isMounted)if(s)ae=N||a;else return;W._leaveCb&&W._leaveCb(!0);const Z=V[j];Z&&_t(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),se(ae,[W])},enter(W){let ae=c,Z=l,he=f;if(!n.isMounted)if(s)ae=C||c,Z=S||l,he=x||f;else return;let pe=!1;const me=W._enterCb=Je=>{pe||(pe=!0,Je?se(he,[W]):se(Z,[W]),oe.delayedLeave&&oe.delayedLeave(),W._enterCb=void 0)};ae?(ae(W,me),ae.length<=1&&me()):me()},leave(W,ae){const Z=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return ae();se(p,[W]);let he=!1;const pe=W._leaveCb=me=>{he||(he=!0,ae(),me?se(R,[W]):se(y,[W]),W._leaveCb=void 0,V[Z]===t&&delete V[Z])};V[Z]=t,h?(h(W,pe),h.length<=1&&pe()):pe()},clone(W){return Gr(W,e,n,r)}};return oe}function Jr(t){if(Gn(t))return t=Ut(t),t.children=null,t}function Ci(t){return Gn(t)?t.children?t.children[0]:void 0:t}function Yr(t,e){t.shapeFlag&6&&t.component?Yr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Si(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===De?(i.patchFlag&128&&r++,n=n.concat(Si(i.children,e))):(e||i.type!==Ue)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Oi(t){return B(t)?{setup:t,name:t.name}:t}const Xr=t=>!!t.type.__asyncLoader,Gn=t=>t.type.__isKeepAlive;function Yc(t,e){ki(t,"a",e)}function Xc(t,e){ki(t,"da",e)}function ki(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Jn(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Gn(s.parent.vnode)&&Qc(r,e,n,s),s=s.parent}}function Qc(t,e,n,r){const s=Jn(e,t,r,!0);Mi(()=>{Sr(r[e],s)},n)}function Jn(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;xt(),Ft(n);const a=Se(e,n,t,o);return vt(),dt(),a});return r?s.unshift(i):s.push(i),i}}const Ve=t=>(e,n=ue)=>(!tr||t==="sp")&&Jn(t,e,n),Zc=Ve("bm"),Pi=Ve("m"),el=Ve("bu"),tl=Ve("u"),Ni=Ve("bum"),Mi=Ve("um"),nl=Ve("sp"),rl=Ve("rtg"),sl=Ve("rtc");function il(t,e=ue){Jn("ec",t,e)}let Qr=!0;function ol(t){const e=Di(t),n=t.proxy,r=t.ctx;Qr=!1,e.beforeCreate&&Li(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:p,mounted:h,beforeUpdate:y,updated:R,activated:N,deactivated:C,beforeDestroy:S,beforeUnmount:x,destroyed:j,unmounted:V,render:se,renderTracked:oe,renderTriggered:W,errorCaptured:ae,serverPrefetch:Z,expose:he,inheritAttrs:pe,components:me,directives:Je,filters:Ct}=e;if(l&&al(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const G=o[ee];B(G)&&(r[ee]=G.bind(n))}if(s){const ee=s.call(n,n);le(ee)&&(t.data=nn(ee))}if(Qr=!0,i)for(const ee in i){const G=i[ee],Te=B(G)?G.bind(n,n):B(G.get)?G.get.bind(n,n):Pe,Ot=!B(G)&&B(G.set)?G.set.bind(n):Pe,je=xe({get:Te,set:Ot});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>je.value,set:Ne=>je.value=Ne})}if(a)for(const ee in a)xi(a[ee],r,n,ee);if(c){const ee=B(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(G=>{qn(G,ee[G])})}f&&Li(f,t,"c");function ce(ee,G){F(G)?G.forEach(Te=>ee(Te.bind(n))):G&&ee(G.bind(n))}if(ce(Zc,p),ce(Pi,h),ce(el,y),ce(tl,R),ce(Yc,N),ce(Xc,C),ce(il,ae),ce(sl,oe),ce(rl,W),ce(Ni,x),ce(Mi,V),ce(nl,Z),F(he))if(he.length){const ee=t.exposed||(t.exposed={});he.forEach(G=>{Object.defineProperty(ee,G,{get:()=>n[G],set:Te=>n[G]=Te})})}else t.exposed||(t.exposed={});se&&t.render===Pe&&(t.render=se),pe!=null&&(t.inheritAttrs=pe),me&&(t.components=me),Je&&(t.directives=Je)}function al(t,e,n=Pe,r=!1){F(t)&&(t=Zr(t));for(const s in t){const i=t[s];let o;le(i)?"default"in i?o=Qe(i.from||s,i.default,!0):o=Qe(i.from||s):o=Qe(i),_e(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Li(t,e,n){Se(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xi(t,e,n,r){const s=r.includes(".")?go(n,r):()=>n[r];if(de(t)){const i=e[t];B(i)&&sr(s,i)}else if(B(t))sr(s,t.bind(n));else if(le(t))if(F(t))t.forEach(i=>xi(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&sr(s,i,t)}}function Di(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Yn(c,l,o,!0)),Yn(c,e,o)),i.set(e,c),c}function Yn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yn(t,i,n,!0),s&&s.forEach(o=>Yn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=cl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const cl={data:Ui,props:ht,emits:ht,methods:ht,computed:ht,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:ht,directives:ht,watch:ul,provide:Ui,inject:ll};function Ui(t,e){return e?t?function(){return ge(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function ll(t,e){return ht(Zr(t),Zr(e))}function Zr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function ht(t,e){return t?ge(ge(Object.create(null),t),e):e}function ul(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=ve(t[r],e[r]);return n}function fl(t,e,n,r=!1){const s={},i={};Fn(i,Qn,1),t.propsDefaults=Object.create(null),Fi(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Mc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function dl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let h=f[p];const y=e[h];if(c)if(K(i,h))y!==i[h]&&(i[h]=y,l=!0);else{const R=Le(h);s[R]=es(c,a,R,y,t,!1)}else y!==i[h]&&(i[h]=y,l=!0)}}}else{Fi(t,e,s,i)&&(l=!0);let f;for(const p in a)(!e||!K(e,p)&&((f=Mt(p))===p||!K(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=es(c,a,p,void 0,t,!0)):delete s[p]);if(i!==a)for(const p in i)(!e||!K(e,p))&&(delete i[p],l=!0)}l&&We(t,"set","$attrs")}function Fi(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ln(c))continue;const l=e[c];let f;s&&K(s,f=Le(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Kr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=q(n),l=a||X;for(let f=0;f<i.length;f++){const p=i[f];n[p]=es(s,c,p,l[p],t,!K(l,p))}}return o}function es(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ft(s),r=l[n]=c.call(null,e),vt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Mt(n))&&(r=!0))}return r}function $i(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const f=p=>{c=!0;const[h,y]=$i(p,e,!0);ge(o,h),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,Pt),Pt;if(F(i))for(let f=0;f<i.length;f++){const p=Le(i[f]);Bi(p)&&(o[p]=X)}else if(i)for(const f in i){const p=Le(f);if(Bi(p)){const h=i[f],y=o[p]=F(h)||B(h)?{type:h}:h;if(y){const R=Wi(Boolean,y.type),N=Wi(String,y.type);y[0]=R>-1,y[1]=N<0||R<N,(R>-1||K(y,"default"))&&a.push(p)}}}const l=[o,a];return r.set(t,l),l}function Bi(t){return t[0]!=="$"}function Hi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ji(t,e){return Hi(t)===Hi(e)}function Wi(t,e){return F(e)?e.findIndex(n=>ji(n,t)):B(e)&&ji(e,t)?0:-1}const Vi=t=>t[0]==="_"||t==="$stable",ts=t=>F(t)?t.map(Fe):[Fe(t)],hl=(t,e,n)=>{const r=Bc((...s)=>ts(e(...s)),n);return r._c=!1,r},zi=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Vi(s))continue;const i=t[s];if(B(i))e[s]=hl(s,i,r);else if(i!=null){const o=ts(i);e[s]=()=>o}}},Ki=(t,e)=>{const n=ts(e);t.slots.default=()=>n},pl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),Fn(e,"_",n)):zi(e,t.slots={})}else t.slots={},e&&Ki(t,e);Fn(t.slots,Qn,1)},gl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=X;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ge(s,e),!n&&a===1&&delete s._):(i=!e.$stable,zi(e,s)),o=e}else e&&(Ki(t,e),o={default:1});if(i)for(const a in s)!Vi(a)&&!(a in o)&&delete s[a]};function _p(t,e){const n=Ae;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=X]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&yt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function pt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(xt(),Se(c,n,8,[t.el,a,t,e]),dt())}}function qi(){return{app:null,config:{isNativeTag:Qa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ml=0;function _l(t,e){return function(r,s=null){s!=null&&!le(s)&&(s=null);const i=qi(),o=new Set;let a=!1;const c=i.app={_uid:ml++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gl,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...f)):B(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,p){if(!a){const h=be(r,s);return h.appContext=i,f&&e?e(h,l):t(h,l,p),a=!0,c._container=l,l.__vue_app__=c,cs(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function ns(t,e,n,r,s=!1){if(F(t)){t.forEach((h,y)=>ns(h,e&&(F(e)?e[y]:e),n,r,s));return}if(Xr(r)&&!s)return;const i=r.shapeFlag&4?cs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===X?a.refs={}:a.refs,p=a.setupState;if(l!=null&&l!==c&&(de(l)?(f[l]=null,K(p,l)&&(p[l]=null)):_e(l)&&(l.value=null)),B(c))et(c,a,12,[o,f]);else{const h=de(c),y=_e(c);if(h||y){const R=()=>{if(t.f){const N=h?f[c]:c.value;s?F(N)&&Sr(N,i):F(N)?N.includes(i)||N.push(i):h?f[c]=[i]:(c.value=[i],t.k&&(f[t.k]=c.value))}else h?(f[c]=o,K(p,c)&&(p[c]=o)):_e(c)&&(c.value=o,t.k&&(f[t.k]=o))};o?(R.id=-1,ye(R,n)):R()}}}const ye=Kc;function vl(t){return yl(t)}function yl(t,e){const n=sc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:p,nextSibling:h,setScopeId:y=Pe,cloneNode:R,insertStaticContent:N}=t,C=(u,d,g,v=null,_=null,b=null,A=!1,E=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!_t(u,d)&&(v=P(u),Re(u,_,b,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:I,ref:M,shapeFlag:O}=d;switch(I){case rs:S(u,d,g,v);break;case Ue:x(u,d,g,v);break;case ss:u==null&&j(d,g,v,A);break;case De:Je(u,d,g,v,_,b,A,E,w);break;default:O&1?oe(u,d,g,v,_,b,A,E,w):O&6?Ct(u,d,g,v,_,b,A,E,w):(O&64||O&128)&&I.process(u,d,g,v,_,b,A,E,w,te)}M!=null&&_&&ns(M,u&&u.ref,b,d||u,!d)},S=(u,d,g,v)=>{if(u==null)r(d.el=a(d.children),g,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},x=(u,d,g,v)=>{u==null?r(d.el=c(d.children||""),g,v):d.el=u.el},j=(u,d,g,v)=>{[u.el,u.anchor]=N(u.children,d,g,v)},V=({el:u,anchor:d},g,v)=>{let _;for(;u&&u!==d;)_=h(u),r(u,g,v),u=_;r(d,g,v)},se=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=h(u),s(u),u=g;s(d)},oe=(u,d,g,v,_,b,A,E,w)=>{A=A||d.type==="svg",u==null?W(d,g,v,_,b,A,E,w):he(u,d,_,b,A,E,w)},W=(u,d,g,v,_,b,A,E)=>{let w,I;const{type:M,props:O,shapeFlag:L,transition:U,patchFlag:z,dirs:ie}=u;if(u.el&&R!==void 0&&z===-1)w=u.el=R(u.el);else{if(w=u.el=o(u.type,b,O&&O.is,O),L&8?f(w,u.children):L&16&&Z(u.children,w,null,v,_,b&&M!=="foreignObject",A,E),ie&&pt(u,null,v,"created"),O){for(const re in O)re!=="value"&&!Ln(re)&&i(w,re,null,O[re],b,u.children,v,_,T);"value"in O&&i(w,"value",null,O.value),(I=O.onVnodeBeforeMount)&&$e(I,v,u)}ae(w,u,u.scopeId,A,v)}ie&&pt(u,null,v,"beforeMount");const Y=(!_||_&&!_.pendingBranch)&&U&&!U.persisted;Y&&U.beforeEnter(w),r(w,d,g),((I=O&&O.onVnodeMounted)||Y||ie)&&ye(()=>{I&&$e(I,v,u),Y&&U.enter(w),ie&&pt(u,null,v,"mounted")},_)},ae=(u,d,g,v,_)=>{if(g&&y(u,g),v)for(let b=0;b<v.length;b++)y(u,v[b]);if(_){let b=_.subTree;if(d===b){const A=_.vnode;ae(u,A,A.scopeId,A.slotScopeIds,_.parent)}}},Z=(u,d,g,v,_,b,A,E,w=0)=>{for(let I=w;I<u.length;I++){const M=u[I]=E?Ze(u[I]):Fe(u[I]);C(null,M,d,g,v,_,b,A,E)}},he=(u,d,g,v,_,b,A)=>{const E=d.el=u.el;let{patchFlag:w,dynamicChildren:I,dirs:M}=d;w|=u.patchFlag&16;const O=u.props||X,L=d.props||X;let U;g&&gt(g,!1),(U=L.onVnodeBeforeUpdate)&&$e(U,g,d,u),M&&pt(d,u,g,"beforeUpdate"),g&&gt(g,!0);const z=_&&d.type!=="foreignObject";if(I?pe(u.dynamicChildren,I,E,g,v,z,b):A||Te(u,d,E,null,g,v,z,b,!1),w>0){if(w&16)me(E,d,O,L,g,v,_);else if(w&2&&O.class!==L.class&&i(E,"class",null,L.class,_),w&4&&i(E,"style",O.style,L.style,_),w&8){const ie=d.dynamicProps;for(let Y=0;Y<ie.length;Y++){const re=ie[Y],ke=O[re],kt=L[re];(kt!==ke||re==="value")&&i(E,re,ke,kt,_,u.children,g,v,T)}}w&1&&u.children!==d.children&&f(E,d.children)}else!A&&I==null&&me(E,d,O,L,g,v,_);((U=L.onVnodeUpdated)||M)&&ye(()=>{U&&$e(U,g,d,u),M&&pt(d,u,g,"updated")},v)},pe=(u,d,g,v,_,b,A)=>{for(let E=0;E<d.length;E++){const w=u[E],I=d[E],M=w.el&&(w.type===De||!_t(w,I)||w.shapeFlag&(6|64))?p(w.el):g;C(w,I,M,null,v,_,b,A,!0)}},me=(u,d,g,v,_,b,A)=>{if(g!==v){for(const E in v){if(Ln(E))continue;const w=v[E],I=g[E];w!==I&&E!=="value"&&i(u,E,I,w,A,d.children,_,b,T)}if(g!==X)for(const E in g)!Ln(E)&&!(E in v)&&i(u,E,g[E],null,A,d.children,_,b,T);"value"in v&&i(u,"value",g.value,v.value)}},Je=(u,d,g,v,_,b,A,E,w)=>{const I=d.el=u?u.el:a(""),M=d.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:U}=d;U&&(E=E?E.concat(U):U),u==null?(r(I,g,v),r(M,g,v),Z(d.children,g,M,_,b,A,E,w)):O>0&&O&64&&L&&u.dynamicChildren?(pe(u.dynamicChildren,L,g,_,b,A,E),(d.key!=null||_&&d===_.subTree)&&Gi(u,d,!0)):Te(u,d,g,M,_,b,A,E,w)},Ct=(u,d,g,v,_,b,A,E,w)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?_.ctx.activate(d,g,v,A,w):St(d,g,v,_,b,A,w):ce(u,d,w)},St=(u,d,g,v,_,b,A)=>{const E=u.component=Ll(u,v,_);if(Gn(u)&&(E.ctx.renderer=te),Dl(E),E.asyncDep){if(_&&_.registerDep(E,ee),!u.el){const w=E.subTree=be(Ue);x(null,w,d,g)}return}ee(E,u,d,g,_,b,A)},ce=(u,d,g)=>{const v=d.component=u.component;if(Wc(u,d,g))if(v.asyncDep&&!v.asyncResolved){G(v,d,g);return}else v.next=d,Vl(v.update),v.update();else d.component=u.component,d.el=u.el,v.vnode=d},ee=(u,d,g,v,_,b,A)=>{const E=()=>{if(u.isMounted){let{next:M,bu:O,u:L,parent:U,vnode:z}=u,ie=M,Y;gt(u,!1),M?(M.el=z.el,G(u,M,A)):M=z,O&&Un(O),(Y=M.props&&M.props.onVnodeBeforeUpdate)&&$e(Y,U,M,z),gt(u,!0);const re=qr(u),ke=u.subTree;u.subTree=re,C(ke,re,p(ke.el),P(ke),u,_,b),M.el=re.el,ie===null&&Vc(u,re.el),L&&ye(L,_),(Y=M.props&&M.props.onVnodeUpdated)&&ye(()=>$e(Y,U,M,z),_)}else{let M;const{el:O,props:L}=d,{bm:U,m:z,parent:ie}=u,Y=Xr(d);if(gt(u,!1),U&&Un(U),!Y&&(M=L&&L.onVnodeBeforeMount)&&$e(M,ie,d),gt(u,!0),O&&$){const re=()=>{u.subTree=qr(u),$(O,u.subTree,u,_,null)};Y?d.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=qr(u);C(null,re,g,v,u,_,b),d.el=re.el}if(z&&ye(z,_),!Y&&(M=L&&L.onVnodeMounted)){const re=d;ye(()=>$e(M,ie,re),_)}d.shapeFlag&256&&u.a&&ye(u.a,_),u.isMounted=!0,d=g=v=null}},w=u.effect=new Ur(E,()=>ao(u.update),u.scope),I=u.update=w.run.bind(w);I.id=u.uid,gt(u,!0),I()},G=(u,d,g)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,dl(u,d.props,v,g),gl(u,d.children,g),xt(),ds(void 0,u.update),dt()},Te=(u,d,g,v,_,b,A,E,w=!1)=>{const I=u&&u.children,M=u?u.shapeFlag:0,O=d.children,{patchFlag:L,shapeFlag:U}=d;if(L>0){if(L&128){je(I,O,g,v,_,b,A,E,w);return}else if(L&256){Ot(I,O,g,v,_,b,A,E,w);return}}U&8?(M&16&&T(I,_,b),O!==I&&f(g,O)):M&16?U&16?je(I,O,g,v,_,b,A,E,w):T(I,_,b,!0):(M&8&&f(g,""),U&16&&Z(O,g,v,_,b,A,E,w))},Ot=(u,d,g,v,_,b,A,E,w)=>{u=u||Pt,d=d||Pt;const I=u.length,M=d.length,O=Math.min(I,M);let L;for(L=0;L<O;L++){const U=d[L]=w?Ze(d[L]):Fe(d[L]);C(u[L],U,g,null,_,b,A,E,w)}I>M?T(u,_,b,!0,!1,O):Z(d,g,v,_,b,A,E,w,O)},je=(u,d,g,v,_,b,A,E,w)=>{let I=0;const M=d.length;let O=u.length-1,L=M-1;for(;I<=O&&I<=L;){const U=u[I],z=d[I]=w?Ze(d[I]):Fe(d[I]);if(_t(U,z))C(U,z,g,null,_,b,A,E,w);else break;I++}for(;I<=O&&I<=L;){const U=u[O],z=d[L]=w?Ze(d[L]):Fe(d[L]);if(_t(U,z))C(U,z,g,null,_,b,A,E,w);else break;O--,L--}if(I>O){if(I<=L){const U=L+1,z=U<M?d[U].el:v;for(;I<=L;)C(null,d[I]=w?Ze(d[I]):Fe(d[I]),g,z,_,b,A,E,w),I++}}else if(I>L)for(;I<=O;)Re(u[I],_,b,!0),I++;else{const U=I,z=I,ie=new Map;for(I=z;I<=L;I++){const Ie=d[I]=w?Ze(d[I]):Fe(d[I]);Ie.key!=null&&ie.set(Ie.key,I)}let Y,re=0;const ke=L-z+1;let kt=!1,Vs=0;const Qt=new Array(ke);for(I=0;I<ke;I++)Qt[I]=0;for(I=U;I<=O;I++){const Ie=u[I];if(re>=ke){Re(Ie,_,b,!0);continue}let Me;if(Ie.key!=null)Me=ie.get(Ie.key);else for(Y=z;Y<=L;Y++)if(Qt[Y-z]===0&&_t(Ie,d[Y])){Me=Y;break}Me===void 0?Re(Ie,_,b,!0):(Qt[Me-z]=I+1,Me>=Vs?Vs=Me:kt=!0,C(Ie,d[Me],g,null,_,b,A,E,w),re++)}const zs=kt?Il(Qt):Pt;for(Y=zs.length-1,I=ke-1;I>=0;I--){const Ie=z+I,Me=d[Ie],Ks=Ie+1<M?d[Ie+1].el:v;Qt[I]===0?C(null,Me,g,Ks,_,b,A,E,w):kt&&(Y<0||I!==zs[Y]?Ne(Me,g,Ks,2):Y--)}}},Ne=(u,d,g,v,_=null)=>{const{el:b,type:A,transition:E,children:w,shapeFlag:I}=u;if(I&6){Ne(u.component.subTree,d,g,v);return}if(I&128){u.suspense.move(d,g,v);return}if(I&64){A.move(u,d,g,te);return}if(A===De){r(b,d,g);for(let O=0;O<w.length;O++)Ne(w[O],d,g,v);r(u.anchor,d,g);return}if(A===ss){V(u,d,g);return}if(v!==2&&I&1&&E)if(v===0)E.beforeEnter(b),r(b,d,g),ye(()=>E.enter(b),_);else{const{leave:O,delayLeave:L,afterLeave:U}=E,z=()=>r(b,d,g),ie=()=>{O(b,()=>{z(),U&&U()})};L?L(b,z,ie):ie()}else r(b,d,g)},Re=(u,d,g,v=!1,_=!1)=>{const{type:b,props:A,ref:E,children:w,dynamicChildren:I,shapeFlag:M,patchFlag:O,dirs:L}=u;if(E!=null&&ns(E,null,g,u,!0),M&256){d.ctx.deactivate(u);return}const U=M&1&&L,z=!Xr(u);let ie;if(z&&(ie=A&&A.onVnodeBeforeUnmount)&&$e(ie,d,u),M&6)k(u.component,g,v);else{if(M&128){u.suspense.unmount(g,v);return}U&&pt(u,null,d,"beforeUnmount"),M&64?u.type.remove(u,d,g,_,te,v):I&&(b!==De||O>0&&O&64)?T(I,d,g,!1,!0):(b===De&&O&(128|256)||!_&&M&16)&&T(w,d,g),v&&wr(u)}(z&&(ie=A&&A.onVnodeUnmounted)||U)&&ye(()=>{ie&&$e(ie,d,u),U&&pt(u,null,d,"unmounted")},g)},wr=u=>{const{type:d,el:g,anchor:v,transition:_}=u;if(d===De){m(g,v);return}if(d===ss){se(u);return}const b=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:A,delayLeave:E}=_,w=()=>A(g,b);E?E(u.el,b,w):w()}else b()},m=(u,d)=>{let g;for(;u!==d;)g=h(u),s(u),u=g;s(d)},k=(u,d,g)=>{const{bum:v,scope:_,update:b,subTree:A,um:E}=u;v&&Un(v),_.stop(),b&&(b.active=!1,Re(A,u,d,g)),E&&ye(E,d),ye(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,v=!1,_=!1,b=0)=>{for(let A=b;A<u.length;A++)Re(u[A],d,g,v,_)},P=u=>u.shapeFlag&6?P(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),J=(u,d,g)=>{u==null?d._vnode&&Re(d._vnode,null,null,!0):C(d._vnode||null,u,d,null,null,null,g),uo(),d._vnode=u},te={p:C,um:Re,m:Ne,r:wr,mt:St,mc:Z,pc:Te,pbc:pe,n:P,o:t};let H,$;return e&&([H,$]=e(te)),{render:J,hydrate:H,createApp:_l(J,H)}}function gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gi(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ze(s[i]),a.el=o.el),n||Gi(o,a))}}function Il(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const El=t=>t.__isTeleport,Ji="components";function vp(t,e){return wl(Ji,t,!0,e)||t}const bl=Symbol();function wl(t,e,n=!0,r=!1){const s=Ae||ue;if(s){const i=s.type;if(t===Ji){const a=Bl(i);if(a&&(a===e||a===Le(e)||a===Dn(Le(e))))return i}const o=Yi(s[t]||i[t],e)||Yi(s.appContext[t],e);return!o&&r?i:o}}function Yi(t,e){return t&&(t[e]||t[Le(e)]||t[Dn(Le(e))])}const De=Symbol(void 0),rs=Symbol(void 0),Ue=Symbol(void 0),ss=Symbol(void 0),on=[];let mt=null;function Tl(t=!1){on.push(mt=t?null:[])}function Rl(){on.pop(),mt=on[on.length-1]||null}let Xn=1;function Xi(t){Xn+=t}function Qi(t){return t.dynamicChildren=Xn>0?mt||Pt:null,Rl(),Xn>0&&mt&&mt.push(t),t}function yp(t,e,n,r,s,i){return Qi(eo(t,e,n,r,s,i,!0))}function Al(t,e,n,r,s){return Qi(be(t,e,n,r,s,!0))}function is(t){return t?t.__v_isVNode===!0:!1}function _t(t,e){return t.type===e.type&&t.key===e.key}const Qn="__vInternal",Zi=({key:t})=>t!=null?t:null,Zn=({ref:t,ref_key:e,ref_for:n})=>t!=null?de(t)||_e(t)||B(t)?{i:Ae,r:t,k:e,f:!!n}:t:null;function eo(t,e=null,n=null,r=0,s=null,i=t===De?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zi(e),ref:e&&Zn(e),scopeId:Ti,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(os(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),Xn>0&&!o&&mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&mt.push(c),c}const be=Cl;function Cl(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===bl)&&(t=Ue),is(t)){const a=Ut(t,e,!0);return n&&os(a,n),a}if(Hl(t)&&(t=t.__vccOpts),e){e=Sl(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=Ar(a)),le(c)&&(_i(c)&&!F(c)&&(c=ge({},c)),e.style=Rr(c))}const o=de(t)?1:zc(t)?128:El(t)?64:le(t)?4:B(t)?2:0;return eo(t,e,n,r,s,o,i,!0)}function Sl(t){return t?_i(t)||Qn in t?ge({},t):t:null}function Ut(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?kl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Zi(a),ref:e&&e.ref?n&&s?F(s)?s.concat(Zn(e)):[s,Zn(e)]:Zn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ut(t.ssContent),ssFallback:t.ssFallback&&Ut(t.ssFallback),el:t.el,anchor:t.anchor}}function Ol(t=" ",e=0){return be(rs,null,t,e)}function Ip(t="",e=!1){return e?(Tl(),Al(Ue,null,t)):be(Ue,null,t)}function Fe(t){return t==null||typeof t=="boolean"?be(Ue):F(t)?be(De,null,t.slice()):typeof t=="object"?Ze(t):be(rs,null,String(t))}function Ze(t){return t.el===null||t.memo?t:Ut(t)}function os(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),os(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Qn in e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[Ol(e)]):n=8);t.children=e,t.shapeFlag|=n}function kl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ar([e.class,r.class]));else if(s==="style")e.style=Rr([e.style,r.style]);else if(Nn(s)){const i=e[s],o=r[s];i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $e(t,e,n,r=null){Se(t,e,7,[n,r])}function Ep(t,e,n,r){let s;const i=n&&n[r];if(F(t)||de(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const as=t=>t?to(t)?cs(t)||t.proxy:as(t.parent):null,er=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>as(t.parent),$root:t=>as(t.root),$emit:t=>t.emit,$options:t=>Di(t),$forceUpdate:t=>()=>ao(t.update),$nextTick:t=>oo.bind(t.proxy),$watch:t=>ql.bind(t)}),Pl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==X&&K(r,e))return o[e]=1,r[e];if(s!==X&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==X&&K(n,e))return o[e]=4,n[e];Qr&&(o[e]=0)}}const f=er[e];let p,h;if(f)return e==="$attrs"&&Ee(t,"get",e),f(t);if((p=a.__cssModules)&&(p=p[e]))return p;if(n!==X&&K(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,K(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==X&&K(s,e))s[e]=n;else if(r!==X&&K(r,e))r[e]=n;else if(K(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==X&&K(t,o)||e!==X&&K(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(er,o)||K(s.config.globalProperties,o)}},Nl=qi();let Ml=0;function Ll(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Nl,i={uid:Ml++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ic(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$i(r,s),emitsOptions:wi(r,s),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$c.bind(null,i),t.ce&&t.ce(i),i}let ue=null;const xl=()=>ue||Ae,Ft=t=>{ue=t,t.scope.on()},vt=()=>{ue&&ue.scope.off(),ue=null};function to(t){return t.vnode.shapeFlag&4}let tr=!1;function Dl(t,e=!1){tr=e;const{props:n,children:r}=t.vnode,s=to(t);fl(t,n,s,e),pl(t,r);const i=s?Ul(t,e):void 0;return tr=!1,i}function Ul(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vi(new Proxy(t.ctx,Pl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?$l(t):null;Ft(t),xt();const i=et(r,t,0,[t.props,s]);if(dt(),vt(),Ys(i)){if(i.then(vt,vt),e)return i.then(o=>{no(t,o,e)}).catch(o=>{nr(o,t,0)});t.asyncDep=i}else no(t,i,e)}else so(t,e)}function no(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=bi(e)),so(t,n)}let ro;function so(t,e,n){const r=t.type;if(!t.render){if(!e&&ro&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ge(ge({isCustomElement:i,delimiters:a},o),c);r.render=ro(s,l)}}t.render=r.render||Pe}Ft(t),xt(),ol(t),dt(),vt()}function Fl(t){return new Proxy(t.attrs,{get(e,n){return Ee(t,"get","$attrs"),e[n]}})}function $l(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Fl(t))},slots:t.slots,emit:t.emit,expose:e}}function cs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(bi(vi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in er)return er[n](t)}}))}function Bl(t){return B(t)&&t.displayName||t.name}function Hl(t){return B(t)&&"__vccOpts"in t}function et(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){nr(i,e,n)}return s}function Se(t,e,n,r){if(B(t)){const i=et(t,e,n,r);return i&&Ys(i)&&i.catch(o=>{nr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Se(t[i],e,n,r));return s}function nr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){et(c,null,10,[t,o,a]);return}}jl(t,n,s,r)}function jl(t,e,n,r=!0){console.error(t)}let rr=!1,ls=!1;const we=[];let ze=0;const an=[];let cn=null,$t=0;const ln=[];let tt=null,Bt=0;const io=Promise.resolve();let us=null,fs=null;function oo(t){const e=us||io;return t?e.then(this?t.bind(this):t):e}function Wl(t){let e=ze+1,n=we.length;for(;e<n;){const r=e+n>>>1;un(we[r])<t?e=r+1:n=r}return e}function ao(t){(!we.length||!we.includes(t,rr&&t.allowRecurse?ze+1:ze))&&t!==fs&&(t.id==null?we.push(t):we.splice(Wl(t.id),0,t),co())}function co(){!rr&&!ls&&(ls=!0,us=io.then(fo))}function Vl(t){const e=we.indexOf(t);e>ze&&we.splice(e,1)}function lo(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),co()}function zl(t){lo(t,cn,an,$t)}function Kl(t){lo(t,tt,ln,Bt)}function ds(t,e=null){if(an.length){for(fs=e,cn=[...new Set(an)],an.length=0,$t=0;$t<cn.length;$t++)cn[$t]();cn=null,$t=0,fs=null,ds(t,e)}}function uo(t){if(ln.length){const e=[...new Set(ln)];if(ln.length=0,tt){tt.push(...e);return}for(tt=e,tt.sort((n,r)=>un(n)-un(r)),Bt=0;Bt<tt.length;Bt++)tt[Bt]();tt=null,Bt=0}}const un=t=>t.id==null?1/0:t.id;function fo(t){ls=!1,rr=!0,ds(t),we.sort((n,r)=>un(n)-un(r));const e=Pe;try{for(ze=0;ze<we.length;ze++){const n=we[ze];n&&n.active!==!1&&et(n,null,14)}}finally{ze=0,we.length=0,uo(),rr=!1,us=null,(we.length||an.length||ln.length)&&fo(t)}}const ho={};function sr(t,e,n){return po(t,e,n)}function po(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=X){const a=ue;let c,l=!1,f=!1;if(_e(t)?(c=()=>t.value,l=!!t._shallow):Dt(t)?(c=()=>t,r=!0):F(t)?(f=!0,l=t.some(Dt),c=()=>t.map(S=>{if(_e(S))return S.value;if(Dt(S))return yt(S);if(B(S))return et(S,a,2)})):B(t)?e?c=()=>et(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return p&&p(),Se(t,a,3,[h])}:c=Pe,e&&r){const S=c;c=()=>yt(S())}let p,h=S=>{p=C.onStop=()=>{et(S,a,4)}};if(tr)return h=Pe,e?n&&Se(e,a,3,[c(),f?[]:void 0,h]):c(),Pe;let y=f?[]:ho;const R=()=>{if(!!C.active)if(e){const S=C.run();(r||l||(f?S.some((x,j)=>Zt(x,y[j])):Zt(S,y)))&&(p&&p(),Se(e,a,3,[S,y===ho?void 0:y,h]),y=S)}else C.run()};R.allowRecurse=!!e;let N;s==="sync"?N=R:s==="post"?N=()=>ye(R,a&&a.suspense):N=()=>{!a||a.isMounted?zl(R):R()};const C=new Ur(c,N);return e?n?R():y=C.run():s==="post"?ye(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&Sr(a.scope.effects,C)}}function ql(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?go(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=ue;Ft(this);const a=po(s,i.bind(r),n);return o?Ft(o):vt(),a}function go(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function yt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),_e(t))yt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)yt(t[n],e);else if(Js(t)||Nt(t))t.forEach(n=>{yt(n,e)});else if(Qs(t))for(const n in t)yt(t[n],e);return t}function mo(t,e,n){const r=arguments.length;return r===2?le(e)&&!F(e)?is(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&is(n)&&(n=[n]),be(t,e,n))}const Gl="3.2.26",Jl="http://www.w3.org/2000/svg",Ht=typeof document!="undefined"?document:null,_o=new Map,Yl={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ht.createElementNS(Jl,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const s=n?n.previousSibling:e.lastChild;let i=_o.get(t);if(!i){const o=Ht.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}_o.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Xl(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ql(t,e,n){const r=t.style,s=de(n);if(n&&!s){for(const i in n)hs(r,i,n[i]);if(e&&!de(e))for(const i in e)n[i]==null&&hs(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const vo=/\s*!important$/;function hs(t,e,n){if(F(n))n.forEach(r=>hs(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Zl(t,e);vo.test(n)?t.setProperty(Mt(r),n.replace(vo,""),"important"):t[r]=n}}const yo=["Webkit","Moz","ms"],ps={};function Zl(t,e){const n=ps[e];if(n)return n;let r=Le(e);if(r!=="filter"&&r in t)return ps[e]=r;r=Dn(r);for(let s=0;s<yo.length;s++){const i=yo[s]+r;if(i in t)return ps[e]=i}return e}const Io="http://www.w3.org/1999/xlink";function eu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Io,e.slice(6,e.length)):t.setAttributeNS(Io,e,n);else{const i=Ga(e);n==null||i&&!qs(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function tu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=qs(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let ir=Date.now,Eo=!1;if(typeof window!="undefined"){ir()>document.createEvent("Event").timeStamp&&(ir=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Eo=!!(t&&Number(t[1])<=53)}let gs=0;const nu=Promise.resolve(),ru=()=>{gs=0},su=()=>gs||(nu.then(ru),gs=ir());function jt(t,e,n,r){t.addEventListener(e,n,r)}function iu(t,e,n,r){t.removeEventListener(e,n,r)}function ou(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=au(e);if(r){const l=i[e]=cu(r,s);jt(t,a,l,c)}else o&&(iu(t,a,o,c),i[e]=void 0)}}const bo=/(?:Once|Passive|Capture)$/;function au(t){let e;if(bo.test(t)){e={};let n;for(;n=t.match(bo);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Mt(t.slice(2)),e]}function cu(t,e){const n=r=>{const s=r.timeStamp||ir();(Eo||s>=n.attached-1)&&Se(lu(r,n.value),e,5,[r])};return n.value=t,n.attached=su(),n}function lu(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r(s))}else return e}const wo=/^on[a-z]/,uu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Xl(t,r,s):e==="style"?Ql(t,n,r):Nn(e)?Cr(e)||ou(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fu(t,e,r,s))?tu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),eu(t,e,r,s))};function fu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&wo.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wo.test(e)&&de(n)?!1:e in t}const du={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jc.props;const To=t=>{const e=t.props["onUpdate:modelValue"];return F(e)?n=>Un(e,n):e};function hu(t){t.target.composing=!0}function Ro(t){const e=t.target;e.composing&&(e.composing=!1,pu(e,"input"))}function pu(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const bp={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=To(s);const i=r||s.props&&s.props.type==="number";jt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Nr(a)),t._assign(a)}),n&&jt(t,"change",()=>{t.value=t.value.trim()}),e||(jt(t,"compositionstart",hu),jt(t,"compositionend",Ro),jt(t,"change",Ro))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=To(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Nr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},gu=["ctrl","shift","alt","meta"],mu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gu.some(n=>t[`${n}Key`]&&!e.includes(n))},wp=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=mu[e[s]];if(i&&i(n,e))return}return t(n,...r)},_u=ge({patchProp:uu},Yl);let Ao;function vu(){return Ao||(Ao=vl(_u))}const Tp=(...t)=>{const e=vu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=yu(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function yu(t){return de(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Co=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Wt=t=>Co?Symbol(t):"_vr_"+t,Iu=Wt("rvlm"),So=Wt("rvd"),ms=Wt("r"),Oo=Wt("rl"),_s=Wt("rvl"),Vt=typeof window!="undefined";function Eu(t){return t.__esModule||Co&&t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function vs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const fn=()=>{},bu=/\/$/,wu=t=>t.replace(bu,"");function ys(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Cu(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Tu(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ko(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ru(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&zt(e.matched[r],n.matched[s])&&Po(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Po(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Au(t[n],e[n]))return!1;return!0}function Au(t,e){return Array.isArray(t)?No(t,e):Array.isArray(e)?No(e,t):t===e}function No(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Cu(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var dn;(function(t){t.pop="pop",t.push="push"})(dn||(dn={}));var hn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hn||(hn={}));function Su(t){if(!t)if(Vt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wu(t)}const Ou=/^[^#]+#/;function ku(t,e){return t.replace(Ou,"#")+e}function Pu(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const or=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nu(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Pu(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mo(t,e){return(history.state?history.state.position-e:-1)+t}const Is=new Map;function Mu(t,e){Is.set(t,e)}function Lu(t){const e=Is.get(t);return Is.delete(t),e}let xu=()=>location.protocol+"//"+location.host;function Lo(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ko(c,"")}return ko(n,t)+r+s}function Du(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const y=Lo(t,location),R=n.value,N=e.value;let C=0;if(h){if(n.value=y,e.value=h,o&&o===R){o=null;return}C=N?h.position-N.position:0}else r(y);s.forEach(S=>{S(n.value,R,{delta:C,type:dn.pop,direction:C?C>0?hn.forward:hn.back:hn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const y=()=>{const R=s.indexOf(h);R>-1&&s.splice(R,1)};return i.push(y),y}function f(){const{history:h}=window;!h.state||h.replaceState(Q({},h.state,{scroll:or()}),"")}function p(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:p}}function xo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?or():null}}function Uu(t){const{history:e,location:n}=window,r={value:Lo(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const p=t.indexOf("#"),h=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:xu()+t+c;try{e[f?"replaceState":"pushState"](l,"",h),s.value=l}catch(y){console.error(y),n[f?"replace":"assign"](h)}}function o(c,l){const f=Q({},e.state,xo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Q({},s.value,e.state,{forward:c,scroll:or()});i(f.current,f,!0);const p=Q({},xo(r.value,c,null),{position:f.position+1},l);i(c,p,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Fu(t){t=Su(t);const e=Uu(t),n=Du(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:ku.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Rp(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Fu(t)}function $u(t){return typeof t=="string"||t&&typeof t=="object"}function Do(t){return typeof t=="string"||typeof t=="symbol"}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Uo=Wt("nf");var Fo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fo||(Fo={}));function Kt(t,e){return Q(new Error,{type:t,[Uo]:!0},e)}function It(t,e){return t instanceof Error&&Uo in t&&(e==null||!!(t.type&e))}const $o="[^/]+?",Bu={sensitive:!1,strict:!1,start:!0,end:!0},Hu=/[.+*?^${}()[\]/\\]/g;function ju(t,e){const n=Q({},Bu,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let p=0;p<l.length;p++){const h=l[p];let y=40+(n.sensitive?.25:0);if(h.type===0)p||(s+="/"),s+=h.value.replace(Hu,"\\$&"),y+=40;else if(h.type===1){const{value:R,repeatable:N,optional:C,regexp:S}=h;i.push({name:R,repeatable:N,optional:C});const x=S||$o;if(x!==$o){y+=10;try{new RegExp(`(${x})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${R}" (${x}): `+V.message)}}let j=N?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(j=C&&l.length<2?`(?:/${j})`:"/"+j),C&&(j+="?"),s+=j,y+=20,C&&(y+=-8),N&&(y+=-20),x===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),p={};if(!f)return null;for(let h=1;h<f.length;h++){const y=f[h]||"",R=i[h-1];p[R.name]=y&&R.repeatable?y.split("/"):y}return p}function c(l){let f="",p=!1;for(const h of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of h)if(y.type===0)f+=y.value;else if(y.type===1){const{value:R,repeatable:N,optional:C}=y,S=R in l?l[R]:"";if(Array.isArray(S)&&!N)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(S)?S.join("/"):S;if(!x)if(C)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=x}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Wu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Vu(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Wu(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const zu={type:0,value:""},Ku=/[a-zA-Z0-9_]/;function qu(t){if(!t)return[[]];if(t==="/")return[[zu]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function p(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&p(),o()):c===":"?(p(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Ku.test(c)?h():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),p(),o(),s}function Gu(t,e,n){const r=ju(qu(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ju(t,e){const n=[],r=new Map;e=Ho({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,h){const y=!h,R=Xu(f);R.aliasOf=h&&h.record;const N=Ho(e,f),C=[R];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of j)C.push(Q({},R,{components:h?h.record.components:R.components,path:V,aliasOf:h?h.record:R}))}let S,x;for(const j of C){const{path:V}=j;if(p&&V[0]!=="/"){const se=p.record.path,oe=se[se.length-1]==="/"?"":"/";j.path=p.record.path+(V&&oe+V)}if(S=Gu(j,p,N),h?h.alias.push(S):(x=x||S,x!==S&&x.alias.push(S),y&&f.name&&!Bo(S)&&o(f.name)),"children"in R){const se=R.children;for(let oe=0;oe<se.length;oe++)i(se[oe],S,h&&h.children[oe])}h=h||S,c(S)}return x?()=>{o(x)}:fn}function o(f){if(Do(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let p=0;for(;p<n.length&&Vu(f,n[p])>=0;)p++;n.splice(p,0,f),f.record.name&&!Bo(f)&&r.set(f.record.name,f)}function l(f,p){let h,y={},R,N;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw Kt(1,{location:f});N=h.record.name,y=Q(Yu(p.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),f.params),R=h.stringify(y)}else if("path"in f)R=f.path,h=n.find(x=>x.re.test(R)),h&&(y=h.parse(R),N=h.record.name);else{if(h=p.name?r.get(p.name):n.find(x=>x.re.test(p.path)),!h)throw Kt(1,{location:f,currentLocation:p});N=h.record.name,y=Q({},p.params,f.params),R=h.stringify(y)}const C=[];let S=h;for(;S;)C.unshift(S.record),S=S.parent;return{name:N,path:R,params:y,matched:C,meta:Zu(C)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Yu(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Xu(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Qu(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Qu(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Bo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zu(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Ho(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const jo=/#/g,ef=/&/g,tf=/\//g,nf=/=/g,rf=/\?/g,Wo=/\+/g,sf=/%5B/g,of=/%5D/g,Vo=/%5E/g,af=/%60/g,zo=/%7B/g,cf=/%7C/g,Ko=/%7D/g,lf=/%20/g;function Es(t){return encodeURI(""+t).replace(cf,"|").replace(sf,"[").replace(of,"]")}function uf(t){return Es(t).replace(zo,"{").replace(Ko,"}").replace(Vo,"^")}function bs(t){return Es(t).replace(Wo,"%2B").replace(lf,"+").replace(jo,"%23").replace(ef,"%26").replace(af,"`").replace(zo,"{").replace(Ko,"}").replace(Vo,"^")}function ff(t){return bs(t).replace(nf,"%3D")}function df(t){return Es(t).replace(jo,"%23").replace(rf,"%3F")}function hf(t){return t==null?"":df(t).replace(tf,"%2F")}function ar(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function pf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Wo," "),o=i.indexOf("="),a=ar(o<0?i:i.slice(0,o)),c=o<0?null:ar(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function qo(t){let e="";for(let n in t){const r=t[n];if(n=ff(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&bs(i)):[r&&bs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function gf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function pn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function rt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=p=>{p===!1?a(Kt(4,{from:n,to:e})):p instanceof Error?a(p):$u(p)?a(Kt(2,{from:e,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(p=>a(p))})}function ws(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(mf(a)){const l=(a.__vccOpts||a)[e];l&&s.push(rt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Eu(l)?l.default:l;i.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&rt(h,n,r,i,o)()}))}}return s}function mf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Go(t){const e=Qe(ms),n=Qe(Oo),r=xe(()=>e.resolve(sn(t.to))),s=xe(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],p=n.matched;if(!f||!p.length)return-1;const h=p.findIndex(zt.bind(null,f));if(h>-1)return h;const y=Jo(c[l-2]);return l>1&&Jo(f)===y&&p[p.length-1].path!==y?p.findIndex(zt.bind(null,c[l-2])):h}),i=xe(()=>s.value>-1&&If(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&Po(n.params,r.value.params));function a(c={}){return yf(c)?e[sn(t.replace)?"replace":"push"](sn(t.to)).catch(fn):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const _f=Oi({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Go,setup(t,{slots:e}){const n=nn(Go(t)),{options:r}=Qe(ms),s=xe(()=>({[Yo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:mo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),vf=_f;function yf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function If(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Jo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yo=(t,e,n)=>t!=null?t:e!=null?e:n,Ef=Oi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Qe(_s),s=xe(()=>t.route||r.value),i=Qe(So,0),o=xe(()=>s.value.matched[i]);qn(So,i+1),qn(Iu,o),qn(_s,s);const a=Lc();return sr(()=>[a.value,o.value,t.name],([c,l,f],[p,h,y])=>{l&&(l.instances[f]=c,h&&h!==l&&c&&c===p&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!zt(l,h)||!p)&&(l.enterCallbacks[f]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],p=t.name;if(!f)return Xo(n.default,{Component:f,route:c});const h=l.props[t.name],y=h?h===!0?c.params:typeof h=="function"?h(c):h:null,N=mo(f,Q({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(l.instances[p]=null)},ref:a}));return Xo(n.default,{Component:N,route:c})||N}}});function Xo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bf=Ef;function Ap(t){const e=Ju(t.routes,t),n=t.parseQuery||pf,r=t.stringifyQuery||qo,s=t.history,i=pn(),o=pn(),a=pn(),c=xc(nt);let l=nt;Vt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=vs.bind(null,m=>""+m),p=vs.bind(null,hf),h=vs.bind(null,ar);function y(m,k){let T,P;return Do(m)?(T=e.getRecordMatcher(m),P=k):P=m,e.addRoute(P,T)}function R(m){const k=e.getRecordMatcher(m);k&&e.removeRoute(k)}function N(){return e.getRoutes().map(m=>m.record)}function C(m){return!!e.getRecordMatcher(m)}function S(m,k){if(k=Q({},k||c.value),typeof m=="string"){const $=ys(n,m,k.path),u=e.resolve({path:$.path},k),d=s.createHref($.fullPath);return Q($,u,{params:h(u.params),hash:ar($.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=Q({},m,{path:ys(n,m.path,k.path).path});else{const $=Q({},m.params);for(const u in $)$[u]==null&&delete $[u];T=Q({},m,{params:p(m.params)}),k.params=p(k.params)}const P=e.resolve(T,k),J=m.hash||"";P.params=f(h(P.params));const te=Tu(r,Q({},m,{hash:uf(J),path:P.path})),H=s.createHref(te);return Q({fullPath:te,hash:J,query:r===qo?gf(m.query):m.query||{}},P,{redirectedFrom:void 0,href:H})}function x(m){return typeof m=="string"?ys(n,m,c.value.path):Q({},m)}function j(m,k){if(l!==m)return Kt(8,{from:k,to:m})}function V(m){return W(m)}function se(m){return V(Q(x(m),{replace:!0}))}function oe(m){const k=m.matched[m.matched.length-1];if(k&&k.redirect){const{redirect:T}=k;let P=typeof T=="function"?T(m):T;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=x(P):{path:P},P.params={}),Q({query:m.query,hash:m.hash,params:m.params},P)}}function W(m,k){const T=l=S(m),P=c.value,J=m.state,te=m.force,H=m.replace===!0,$=oe(T);if($)return W(Q(x($),{state:J,force:te,replace:H}),k||T);const u=T;u.redirectedFrom=k;let d;return!te&&Ru(r,P,T)&&(d=Kt(16,{to:u,from:P}),Ot(P,P,!0,!1)),(d?Promise.resolve(d):Z(u,P)).catch(g=>It(g)?g:ee(g,u,P)).then(g=>{if(g){if(It(g,2))return W(Q(x(g.to),{state:J,force:te,replace:H}),k||u)}else g=pe(u,P,!0,H,J);return he(u,P,g),g})}function ae(m,k){const T=j(m,k);return T?Promise.reject(T):Promise.resolve()}function Z(m,k){let T;const[P,J,te]=wf(m,k);T=ws(P.reverse(),"beforeRouteLeave",m,k);for(const $ of P)$.leaveGuards.forEach(u=>{T.push(rt(u,m,k))});const H=ae.bind(null,m,k);return T.push(H),qt(T).then(()=>{T=[];for(const $ of i.list())T.push(rt($,m,k));return T.push(H),qt(T)}).then(()=>{T=ws(J,"beforeRouteUpdate",m,k);for(const $ of J)$.updateGuards.forEach(u=>{T.push(rt(u,m,k))});return T.push(H),qt(T)}).then(()=>{T=[];for(const $ of m.matched)if($.beforeEnter&&!k.matched.includes($))if(Array.isArray($.beforeEnter))for(const u of $.beforeEnter)T.push(rt(u,m,k));else T.push(rt($.beforeEnter,m,k));return T.push(H),qt(T)}).then(()=>(m.matched.forEach($=>$.enterCallbacks={}),T=ws(te,"beforeRouteEnter",m,k),T.push(H),qt(T))).then(()=>{T=[];for(const $ of o.list())T.push(rt($,m,k));return T.push(H),qt(T)}).catch($=>It($,8)?$:Promise.reject($))}function he(m,k,T){for(const P of a.list())P(m,k,T)}function pe(m,k,T,P,J){const te=j(m,k);if(te)return te;const H=k===nt,$=Vt?history.state:{};T&&(P||H?s.replace(m.fullPath,Q({scroll:H&&$&&$.scroll},J)):s.push(m.fullPath,J)),c.value=m,Ot(m,k,T,H),Te()}let me;function Je(){me=s.listen((m,k,T)=>{const P=S(m),J=oe(P);if(J){W(Q(J,{replace:!0}),P).catch(fn);return}l=P;const te=c.value;Vt&&Mu(Mo(te.fullPath,T.delta),or()),Z(P,te).catch(H=>It(H,4|8)?H:It(H,2)?(W(H.to,P).then($=>{It($,4|16)&&!T.delta&&T.type===dn.pop&&s.go(-1,!1)}).catch(fn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ee(H,P,te))).then(H=>{H=H||pe(P,te,!1),H&&(T.delta?s.go(-T.delta,!1):T.type===dn.pop&&It(H,4|16)&&s.go(-1,!1)),he(P,te,H)}).catch(fn)})}let Ct=pn(),St=pn(),ce;function ee(m,k,T){Te(m);const P=St.list();return P.length?P.forEach(J=>J(m,k,T)):console.error(m),Promise.reject(m)}function G(){return ce&&c.value!==nt?Promise.resolve():new Promise((m,k)=>{Ct.add([m,k])})}function Te(m){ce||(ce=!0,Je(),Ct.list().forEach(([k,T])=>m?T(m):k()),Ct.reset())}function Ot(m,k,T,P){const{scrollBehavior:J}=t;if(!Vt||!J)return Promise.resolve();const te=!T&&Lu(Mo(m.fullPath,0))||(P||!T)&&history.state&&history.state.scroll||null;return oo().then(()=>J(m,k,te)).then(H=>H&&Nu(H)).catch(H=>ee(H,m,k))}const je=m=>s.go(m);let Ne;const Re=new Set;return{currentRoute:c,addRoute:y,removeRoute:R,hasRoute:C,getRoutes:N,resolve:S,options:t,push:V,replace:se,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:St.add,isReady:G,install(m){const k=this;m.component("RouterLink",vf),m.component("RouterView",bf),m.config.globalProperties.$router=k,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>sn(c)}),Vt&&!Ne&&c.value===nt&&(Ne=!0,V(s.location).catch(J=>{}));const T={};for(const J in nt)T[J]=xe(()=>c.value[J]);m.provide(ms,k),m.provide(Oo,nn(T)),m.provide(_s,c);const P=m.unmount;Re.add(m),m.unmount=function(){Re.delete(m),Re.size<1&&(l=nt,me&&me(),c.value=nt,Ne=!1,ce=!1),P()}}}}function qt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function wf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>zt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>zt(l,c))||s.push(c))}return[n,r,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Rf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(h=64)),r.push(n[f],n[p],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||p==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const y=a<<4&240|l>>2;if(r.push(y),p!==64){const R=l<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Cf=function(t){try{return Af.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Of(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function kf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cp(){return fe().indexOf("Electron/")>=0}function Nf(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sp(){return fe().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Mf,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Lf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Gt(s,a,r)}}function Lf(t,e){return t.replace(xf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xf=/\{\$([^}]+)}/g;function Df(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qo(i)&&Qo(o)){if(!cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _n(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function vn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Uf(t,e){const n=new Ff(t,e);return n.subscribe.bind(n)}class Ff{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$f(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ts),s.error===void 0&&(s.error=Ts),s.complete===void 0&&(s.complete=Ts);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $f(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ts(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jf(e))try{this.getOrInitializeService({instanceIdentifier:bt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bt){return this.instances.has(e)}getOptions(e=bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bt){return this.component?this.component.multipleInstances?e:bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hf(t){return t===bt?void 0:t}function jf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Vf={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},zf=ne.INFO,Kf={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},qf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Kf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zo{constructor(e){this.name=e,this._logLevel=zf,this._logHandler=qf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rs="@firebase/app",ea="0.7.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Zo("@firebase/app"),Yf="@firebase/app-compat",Xf="@firebase/analytics-compat",Qf="@firebase/analytics",Zf="@firebase/app-check-compat",ed="@firebase/app-check",td="@firebase/auth",nd="@firebase/auth-compat",rd="@firebase/database",sd="@firebase/database-compat",id="@firebase/functions",od="@firebase/functions-compat",ad="@firebase/installations",cd="@firebase/installations-compat",ld="@firebase/messaging",ud="@firebase/messaging-compat",fd="@firebase/performance",dd="@firebase/performance-compat",hd="@firebase/remote-config",pd="@firebase/remote-config-compat",gd="@firebase/storage",md="@firebase/storage-compat",_d="@firebase/firestore",vd="@firebase/firestore-compat",yd="firebase",Id="9.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="[DEFAULT]",Ed={[Rs]:"fire-core",[Yf]:"fire-core-compat",[Qf]:"fire-analytics",[Xf]:"fire-analytics-compat",[ed]:"fire-app-check",[Zf]:"fire-app-check-compat",[td]:"fire-auth",[nd]:"fire-auth-compat",[rd]:"fire-rtdb",[sd]:"fire-rtdb-compat",[id]:"fire-fn",[od]:"fire-fn-compat",[ad]:"fire-iid",[cd]:"fire-iid-compat",[ld]:"fire-fcm",[ud]:"fire-fcm-compat",[fd]:"fire-perf",[dd]:"fire-perf-compat",[hd]:"fire-rc",[pd]:"fire-rc-compat",[gd]:"fire-gcs",[md]:"fire-gcs-compat",[_d]:"fire-fst",[vd]:"fire-fst-compat","fire-js":"fire-js",[yd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Map,Cs=new Map;function bd(t,e){try{t.container.addComponent(e)}catch(n){As.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ur(t){const e=t.name;if(Cs.has(e))return As.debug(`There were multiple attempts to register component ${e}.`),!1;Cs.set(e,t);for(const n of lr.values())bd(n,t);return!0}function na(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},fr=new gn("app","Firebase",wd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=Id;function Op(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ta,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw fr.create("bad-app-name",{appName:String(r)});const s=lr.get(r);if(s){if(cr(t,s.options)&&cr(n,s.config))return s;throw fr.create("duplicate-app",{appName:r})}const i=new Wf(r);for(const a of Cs.values())i.addComponent(a);const o=new Td(t,n,i);return lr.set(r,o),o}function Rd(t=ta){const e=lr.get(t);if(!e)throw fr.create("no-app",{appName:t});return e}function In(t,e,n){var r;let s=(r=Ed[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),As.warn(a.join(" "));return}ur(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){ur(new yn("platform-logger",e=>new Gf(e),"PRIVATE")),In(Rs,ea,t),In(Rs,ea,"esm2017"),In("fire-js","")}Ad("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ss(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ra(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cd=ra,sa=new gn("auth","Firebase",ra());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new Zo("@firebase/auth");function hr(t,...e){ia.logLevel<=ne.ERROR&&ia.error(`Auth (${dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,...e){throw Os(t,...e)}function Be(t,...e){return Os(t,...e)}function oa(t,e,n){const r=Object.assign(Object.assign({},Cd()),{[e]:n});return new gn("auth","Firebase",r).create(e,{appName:t.name})}function Sd(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Oe(t,"argument-error"),oa(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Os(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sa.create(t,...e)}function D(t,e,...n){if(!t)throw Os(e,...n)}function Ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hr(e),new Error(e)}function qe(t,e){t||Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map;function Ge(t){qe(t instanceof Function,"Expected a class definition");let e=aa.get(t);return e?(qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,aa.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t,e){const n=na(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(cr(i,e!=null?e:{}))return s;Oe(s,"already-initialized")}return n.initialize({options:e})}function kd(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ge);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pd(){return ca()==="http:"||ca()==="https:"}function ca(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pd()||kf()||"connection"in navigator)?navigator.onLine:!0}function Md(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){this.shortDelay=e,this.longDelay=n,qe(n>e,"Short delay should be less than long delay!"),this.isMobile=Of()||Pf()}get(){return Nd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t,e){qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new En(3e4,6e4);function bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wn(t,e,n,r,s={}){return ua(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=mn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),la.fetch()(fa(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ua(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ld),e);try{const s=new Dd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ns(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ns(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ns(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw oa(t,f,l);Oe(t,f)}}catch(s){if(s instanceof Gt)throw s;Oe(t,"network-request-failed")}}async function Tn(t,e,n,r,s={}){const i=await wn(t,e,n,r,s);return"mfaPendingCredential"in i&&Oe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fa(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ps(t.config,s):`${t.config.apiScheme}://${s}`}class Dd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"timeout")),xd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ns(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Be(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(t,e){return wn(t,"POST","/v1/accounts:delete",e)}async function Fd(t,e){return wn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $d(t,e=!1){const n=Et(t),r=await n.getIdToken(e),s=Ls(r);D(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Rn(Ms(s.auth_time)),issuedAtTime:Rn(Ms(s.iat)),expirationTime:Rn(Ms(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ms(t){return Number(t)*1e3}function Ls(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cf(n);return s?JSON.parse(s):(hr("Failed to decode base64 JWT payload"),null)}catch(s){return hr("Caught error parsing JWT payload as JSON",s),null}}function Bd(t){const e=Ls(t);return D(e,"internal-error"),D(typeof e.exp!="undefined","internal-error"),D(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gt&&Hd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rn(this.lastLoginAt),this.creationTime=Rn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await An(t,Fd(n,{idToken:r}));D(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?zd(i.providerUserInfo):[],a=Vd(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),f=c?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new da(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Wd(t){const e=Et(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vd(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zd(t){return t.map(e=>{var{providerId:n}=e,r=Ss(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(t,e){const n=await ua(t,{},async()=>{const r=mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=fa(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",la.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken!="undefined","internal-error"),D(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Bd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Kd(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cn;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){D(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class wt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ss(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new jd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new da(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await An(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $d(this,e)}reload(){return Wd(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await An(this,Ud(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:V,isAnonymous:se,providerData:oe,stsTokenManager:W}=n;D(j&&W,e,"internal-error");const ae=Cn.fromJSON(this.name,W);D(typeof j=="string",e,"internal-error"),st(p,e.name),st(h,e.name),D(typeof V=="boolean",e,"internal-error"),D(typeof se=="boolean",e,"internal-error"),st(y,e.name),st(R,e.name),st(N,e.name),st(C,e.name),st(S,e.name),st(x,e.name);const Z=new wt({uid:j,auth:e,email:h,emailVerified:V,displayName:p,isAnonymous:se,photoURL:R,phoneNumber:y,tenantId:N,stsTokenManager:ae,createdAt:S,lastLoginAt:x});return oe&&Array.isArray(oe)&&(Z.providerData=oe.map(he=>Object.assign({},he))),C&&(Z._redirectEventId=C),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cn;s.updateFromServerResponse(n);const i=new wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ha.type="NONE";const pa=ha;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e,n){return`firebase:${t}:${e}:${n}`}class Jt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gr(this.userKey,s.apiKey,i),this.fullPersistenceKey=gr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jt(Ge(pa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ge(pa);const o=gr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const p=wt._fromJSON(e,f);l!==i&&(a=p),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Jt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(va(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ma(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ia(e))return"Blackberry";if(Ea(e))return"Webos";if(xs(e))return"Safari";if((e.includes("chrome/")||_a(e))&&!e.includes("edge/"))return"Chrome";if(ya(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ma(t=fe()){return/firefox\//i.test(t)}function xs(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _a(t=fe()){return/crios\//i.test(t)}function va(t=fe()){return/iemobile/i.test(t)}function ya(t=fe()){return/android/i.test(t)}function Ia(t=fe()){return/blackberry/i.test(t)}function Ea(t=fe()){return/webos/i.test(t)}function mr(t=fe()){return/iphone|ipad|ipod/i.test(t)}function qd(t=fe()){var e;return mr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Gd(){return Nf()&&document.documentMode===10}function ba(t=fe()){return mr(t)||ya(t)||Ea(t)||Ia(t)||/windows phone/i.test(t)||va(t)}function Jd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t,e=[]){let n;switch(t){case"Browser":n=ga(fe());break;case"Worker":n=`${ga(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ta(this),this.idTokenSubscription=new Ta(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ge(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Md()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Et(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ge(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[Ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Sn(t){return Et(t)}class Ta{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uf(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,n){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function Xd(t,e){return wn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(t,e){return Tn(t,"POST","/v1/accounts:signInWithPassword",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zd(t,e){return Tn(t,"POST","/v1/accounts:signInWithEmailLink",bn(t,e))}async function eh(t,e){return Tn(t,"POST","/v1/accounts:signInWithEmailLink",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ds{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new On(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new On(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Qd(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zd(e,{email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Xd(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eh(e,{idToken:n,email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(t,e){return Tn(t,"POST","/v1/accounts:signInWithIdp",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="http://localhost";class Tt extends Ds{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Oe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ss(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Tt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yt(e,n)}buildRequest(){const e={requestUri:th,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rh(t){const e=_n(vn(t)).link,n=e?_n(vn(e)).deep_link_id:null,r=_n(vn(t)).deep_link_id;return(r?_n(vn(r)).link:null)||r||n||e||t}class Us{constructor(e){var n,r,s,i,o,a;const c=_n(vn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=nh((s=c.mode)!==null&&s!==void 0?s:null);D(l&&f&&p,"argument-error"),this.apiKey=l,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rh(e);try{return new Us(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.providerId=Xt.PROVIDER_ID}static credential(e,n){return On._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Us.parseLink(n);return D(r,"argument-error"),On._fromEmailAndCode(e,r.code,r.tenantId)}}Xt.PROVIDER_ID="password";Xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Fs{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends kn{constructor(){super("facebook.com")}static credential(e){return Tt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends kn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Tt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends kn{constructor(){super("github.com")}static credential(e){return Tt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends kn{constructor(){super("twitter.com")}static credential(e,n){return Tt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(t,e){return Tn(t,"POST","/v1/accounts:signUp",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await wt._fromIdTokenResponse(e,r,s),o=Ra(r);return new Rt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ra(r);return new Rt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ra(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Gt{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,_r.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _r(e,n,r,s)}}function Aa(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_r._fromErrorAndOperation(t,i,e,r):i})}async function ih(t,e,n=!1){const r=await An(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await An(t,Aa(r,s,e,t),n);D(i.idToken,r,"internal-error");const o=Ls(i.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Rt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Oe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(t,e,n=!1){const r="signIn",s=await Aa(t,r,e),i=await Rt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ah(t,e){return Ca(Sn(t),e)}async function kp(t,e,n){const r=Sn(t),s=await sh(r,{returnSecureToken:!0,email:e,password:n}),i=await Rt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Pp(t,e,n){return ah(Et(t),Xt.credential(e,n))}function Np(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function Mp(t){return Et(t).signOut()}const vr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(){const t=fe();return xs(t)||mr(t)}const lh=1e3,uh=10;class Oa extends Sa{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ch()&&Jd(),this.fallbackToPolling=ba(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Gd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oa.type="LOCAL";const fh=Oa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends Sa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ka.type="SESSION";const Pa=ka;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new yr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await dh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$s("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const h=p;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function ph(t){He().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(){return typeof He().WorkerGlobalScope!="undefined"&&typeof He().importScripts=="function"}async function gh(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _h(){return Na()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="firebaseLocalStorageDb",vh=1,Ir="firebaseLocalStorage",La="fbase_key";class Pn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Er(t,e){return t.transaction([Ir],e?"readwrite":"readonly").objectStore(Ir)}function yh(){const t=indexedDB.deleteDatabase(Ma);return new Pn(t).toPromise()}function Bs(){const t=indexedDB.open(Ma,vh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ir,{keyPath:La})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ir)?e(r):(r.close(),await yh(),e(await Bs()))})})}async function xa(t,e,n){const r=Er(t,!0).put({[La]:e,value:n});return new Pn(r).toPromise()}async function Ih(t,e){const n=Er(t,!1).get(e),r=await new Pn(n).toPromise();return r===void 0?null:r.value}function Da(t,e){const n=Er(t,!0).delete(e);return new Pn(n).toPromise()}const Eh=800,bh=3;class Ua{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Na()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yr._getInstance(_h()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gh(),!this.activeServiceWorker)return;this.sender=new hh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bs();return await xa(e,vr,"1"),await Da(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ih(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Da(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Er(s,!1).getAll();return new Pn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Eh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ua.type="LOCAL";const wh=Ua;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Be("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Th().appendChild(r)})}function Ah(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new En(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e){return e?Ge(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Ds{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ch(t){return Ca(t.auth,new Hs(t),t.bypassAuthState)}function Sh(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),oh(n,new Hs(t),t.bypassAuthState)}async function Oh(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),ih(n,new Hs(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ch;case"linkViaPopup":case"linkViaRedirect":return Oh;case"reauthViaPopup":case"reauthViaRedirect":return Sh;default:Oe(this.auth,"internal-error")}}resolve(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new En(2e3,1e4);async function Lp(t,e,n){const r=Sn(t);Sd(t,e,Fs);const s=Fa(r,n);return new At(r,"signInViaPopup",e,s).executeNotNull()}class At extends $a{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){qe(this.filter.length===1,"Popup operations only handle one event");const e=$s();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kh.get())};e()}}At.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="pendingRedirect",js=new Map;class Nh extends $a{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=js.get(this.auth._key());if(!e){try{const r=await Mh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}js.set(this.auth._key(),e)}return this.bypassAuthState||js.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mh(t,e){const n=xh(e),r=Lh(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Lh(t){return Ge(t._redirectPersistence)}function xh(t){return gr(Ph,t.config.apiKey,t.name)}async function Dh(t,e,n=!1){const r=Sn(t),s=Fa(r,e),o=await new Nh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=10*60*1e3;class Fh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$h(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ha(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ba(e))}saveEventToCache(e){this.cachedEventUids.add(Ba(e)),this.lastProcessedEventTime=Date.now()}}function Ba(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ha({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $h(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ha(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bh(t,e={}){return wn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jh=/^https?/;async function Wh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bh(t);for(const n of e)try{if(Vh(n))return}catch{}Oe(t,"unauthorized-domain")}function Vh(t){const e=ks(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jh.test(n))return!1;if(Hh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new En(3e4,6e4);function ja(){const t=He().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Kh(t){return new Promise((e,n)=>{var r,s,i;function o(){ja(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ja(),n(Be(t,"network-request-failed"))},timeout:zh.get()})}if((s=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=He().gapi)===null||i===void 0?void 0:i.load)o();else{const a=Ah("iframefcb");return He()[a]=()=>{gapi.load?o():n(Be(t,"network-request-failed"))},Rh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw br=null,e})}let br=null;function qh(t){return br=br||Kh(t),br}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new En(5e3,15e3),Jh="__/auth/iframe",Yh="emulator/auth/iframe",Xh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zh(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ps(e,Yh):`https://${t.config.authDomain}/${Jh}`,r={apiKey:e.apiKey,appName:t.name,v:dr},s=Qh.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mn(r).slice(1)}`}async function ep(t){const e=await qh(t),n=He().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Zh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xh,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Be(t,"network-request-failed"),a=He().setTimeout(()=>{i(o)},Gh.get());function c(){He().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},np=500,rp=600,sp="_blank",ip="http://localhost";class Wa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function op(t,e,n,r=np,s=rp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tp),{width:r.toString(),height:s.toString(),top:i,left:o}),l=fe().toLowerCase();n&&(a=_a(l)?sp:n),ma(l)&&(e=e||ip,c.scrollbars="yes");const f=Object.entries(c).reduce((h,[y,R])=>`${h}${y}=${R},`,"");if(qd(l)&&a!=="_self")return ap(e||"",a),new Wa(null);const p=window.open(e||"",a,f);D(p,t,"popup-blocked");try{p.focus()}catch{}return new Wa(p)}function ap(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="__/auth/handler",lp="emulator/auth/handler";function Va(t,e,n,r,s,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:dr,eventId:s};if(e instanceof Fs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Df(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof kn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${up(t)}?${mn(a).slice(1)}`}function up({config:t}){return t.emulator?Ps(t,lp):`https://${t.authDomain}/${cp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="webStorageSupport";class fp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pa,this._completeRedirectFn=Dh}async _openPopup(e,n,r,s){var i;qe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Va(e,n,r,ks(),s);return op(e,o,$s())}async _openRedirect(e,n,r,s){return await this._originValidation(e),ph(Va(e,n,r,ks(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ep(e),r=new Fh(e);return n.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ws,{type:Ws},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ws];o!==void 0&&n(!!o),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ba()||xs()||mr()}}const dp=fp;var za="@firebase/auth",Ka="0.19.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gp(t){ur(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),D(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wa(t)},c=new Yd(o,a);return kd(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ur(new yn("auth-internal",e=>{const n=Sn(e.getProvider("auth").getImmediate());return(r=>new hp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(za,Ka,pp(t)),In(za,Ka,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t=Rd()){const e=na(t,"auth");return e.isInitialized()?e.getImmediate():Od(t,{popupRedirectResolver:dp,persistence:[wh,fh,Pa]})}gp("Browser");export{Zo as A,Of as B,yn as C,Pf as D,Cp as E,De as F,ot as G,Nf as H,Sp as I,kf as J,Op as K,ne as L,kp as M,Mp as N,dr as S,ur as _,eo as a,be as b,yp as c,Ol as d,Ap as e,Rp as f,Np as g,xp as h,Tp as i,Ep as j,Lp as k,Ip as l,_p as m,Ar as n,Tl as o,wp as p,In as q,vp as r,Pp as s,mp as t,na as u,bp as v,Bc as w,Et as x,Rd as y,Gt as z};
