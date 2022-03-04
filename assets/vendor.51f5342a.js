function aa(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const iy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oy=aa(iy);function Ru(t){return!!t||t===""}function ca(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Me(s)?ly(s):ca(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Me(t))return t;if(Ne(t))return t}}const ay=/;(?![^(]*\))/g,cy=/:(.+)/;function ly(t){const e={};return t.split(ay).forEach(n=>{if(n){const s=n.split(cy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function la(t){let e="";if(Me(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=la(t[n]);s&&(e+=s+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const NR=t=>t==null?"":G(t)||Ne(t)&&(t.toString===Ou||!Q(t.toString))?JSON.stringify(t,Cu,2):String(t),Cu=(t,e)=>e&&e.__v_isRef?Cu(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:ku(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!G(e)&&!Pu(e)?String(e):e,pe={},os=[],Tt=()=>{},uy=()=>!1,hy=/^on[^a-z]/,fi=t=>hy.test(t),ua=t=>t.startsWith("onUpdate:"),He=Object.assign,ha=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fy=Object.prototype.hasOwnProperty,se=(t,e)=>fy.call(t,e),G=Array.isArray,as=t=>di(t)==="[object Map]",ku=t=>di(t)==="[object Set]",Q=t=>typeof t=="function",Me=t=>typeof t=="string",fa=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Nu=t=>Ne(t)&&Q(t.then)&&Q(t.catch),Ou=Object.prototype.toString,di=t=>Ou.call(t),dy=t=>di(t).slice(8,-1),Pu=t=>di(t)==="[object Object]",da=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},py=/-(\w)/g,St=gi(t=>t.replace(py,(e,n)=>n?n.toUpperCase():"")),gy=/\B([A-Z])/g,cs=gi(t=>t.replace(gy,"-$1").toLowerCase()),mi=gi(t=>t.charAt(0).toUpperCase()+t.slice(1)),pa=gi(t=>t?`on${mi(t)}`:""),Js=(t,e)=>!Object.is(t,e),yi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ga=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Du;const my=()=>Du||(Du=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let wn;const _i=[];class yy{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&wn&&(this.parent=wn,this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(_i.push(this),wn=this)}off(){this.active&&(_i.pop(),wn=_i[_i.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function vy(t,e){e=e||wn,e&&e.active&&e.effects.push(t)}const ma=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xu=t=>(t.w&Yt)>0,Mu=t=>(t.n&Yt)>0,_y=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Yt},wy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];xu(r)&&!Mu(r)?r.delete(t):e[n++]=r,r.w&=~Yt,r.n&=~Yt}e.length=n}},ya=new WeakMap;let Qs=0,Yt=1;const va=30,Zs=[];let En;const Tn=Symbol(""),_a=Symbol("");class wa{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],vy(this,s)}run(){if(!this.active)return this.fn();if(!Zs.includes(this))try{return Zs.push(En=this),Ey(),Yt=1<<++Qs,Qs<=va?_y(this):Lu(this),this.fn()}finally{Qs<=va&&wy(this),Yt=1<<--Qs,In(),Zs.pop();const e=Zs.length;En=e>0?Zs[e-1]:void 0}}stop(){this.active&&(Lu(this),this.onStop&&this.onStop(),this.active=!1)}}function Lu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ls=!0;const Ea=[];function us(){Ea.push(ls),ls=!1}function Ey(){Ea.push(ls),ls=!0}function In(){const t=Ea.pop();ls=t===void 0?!0:t}function ct(t,e,n){if(!Uu())return;let s=ya.get(t);s||ya.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=ma()),Fu(r)}function Uu(){return ls&&En!==void 0}function Fu(t,e){let n=!1;Qs<=va?Mu(t)||(t.n|=Yt,n=!xu(t)):n=!t.has(En),n&&(t.add(En),En.deps.push(t))}function Ut(t,e,n,s,r,i){const o=ya.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?da(n)&&a.push(o.get("length")):(a.push(o.get(Tn)),as(t)&&a.push(o.get(_a)));break;case"delete":G(t)||(a.push(o.get(Tn)),as(t)&&a.push(o.get(_a)));break;case"set":as(t)&&a.push(o.get(Tn));break}if(a.length===1)a[0]&&Ta(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ta(ma(c))}}function Ta(t,e){for(const n of G(t)?t:[...t])(n!==En||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ty=aa("__proto__,__v_isRef,__isVue"),Vu=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(fa)),Iy=Ia(),by=Ia(!1,!0),Sy=Ia(!0),$u=Ay();function Ay(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)ct(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){us();const s=ie(this)[e].apply(this,n);return In(),s}}),t}function Ia(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_raw"&&i===(t?e?qy:Xu:e?Gu:Wu).get(s))return s;const o=G(s);if(!t&&o&&se($u,r))return Reflect.get($u,r,i);const a=Reflect.get(s,r,i);return(fa(r)?Vu.has(r):Ty(r))||(t||ct(s,"get",r),e)?a:Xe(a)?!o||!da(r)?a.value:a:Ne(a)?t?Yu(a):er(a):a}}const Ry=Bu(),Cy=Bu(!0);function Bu(t=!1){return function(n,s,r,i){let o=n[s];if(!t&&!Ra(r)&&(r=ie(r),o=ie(o),!G(n)&&Xe(o)&&!Xe(r)))return o.value=r,!0;const a=G(n)&&da(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===ie(i)&&(a?Js(r,o)&&Ut(n,"set",s,r):Ut(n,"add",s,r)),c}}function ky(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ut(t,"delete",e,void 0),s}function Ny(t,e){const n=Reflect.has(t,e);return(!fa(e)||!Vu.has(e))&&ct(t,"has",e),n}function Oy(t){return ct(t,"iterate",G(t)?"length":Tn),Reflect.ownKeys(t)}const qu={get:Iy,set:Ry,deleteProperty:ky,has:Ny,ownKeys:Oy},Py={get:Sy,set(t,e){return!0},deleteProperty(t,e){return!0}},Dy=He({},qu,{get:by,set:Cy}),ba=t=>t,wi=t=>Reflect.getPrototypeOf(t);function Ei(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);e!==i&&!n&&ct(r,"get",e),!n&&ct(r,"get",i);const{has:o}=wi(r),a=s?ba:n?Ca:tr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ti(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return t!==r&&!e&&ct(s,"has",t),!e&&ct(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Ii(t,e=!1){return t=t.__v_raw,!e&&ct(ie(t),"iterate",Tn),Reflect.get(t,"size",t)}function ju(t){t=ie(t);const e=ie(this);return wi(e).has.call(e,t)||(e.add(t),Ut(e,"add",t,t)),this}function Hu(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=wi(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Js(e,o)&&Ut(n,"set",t,e):Ut(n,"add",t,e),this}function Ku(t){const e=ie(this),{has:n,get:s}=wi(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Ut(e,"delete",t,void 0),i}function zu(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Ut(t,"clear",void 0,void 0),n}function bi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),c=e?ba:t?Ca:tr;return!t&&ct(a,"iterate",Tn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Si(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=as(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ba:e?Ca:tr;return!e&&ct(i,"iterate",c?_a:Tn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...e){return t==="delete"?!1:this}}function xy(){const t={get(i){return Ei(this,i)},get size(){return Ii(this)},has:Ti,add:ju,set:Hu,delete:Ku,clear:zu,forEach:bi(!1,!1)},e={get(i){return Ei(this,i,!1,!0)},get size(){return Ii(this)},has:Ti,add:ju,set:Hu,delete:Ku,clear:zu,forEach:bi(!1,!0)},n={get(i){return Ei(this,i,!0)},get size(){return Ii(this,!0)},has(i){return Ti.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:bi(!0,!1)},s={get(i){return Ei(this,i,!0,!0)},get size(){return Ii(this,!0)},has(i){return Ti.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Si(i,!1,!1),n[i]=Si(i,!0,!1),e[i]=Si(i,!1,!0),s[i]=Si(i,!0,!0)}),[t,n,e,s]}const[My,Ly,Uy,Fy]=xy();function Sa(t,e){const n=e?t?Fy:Uy:t?Ly:My;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const Vy={get:Sa(!1,!1)},$y={get:Sa(!1,!0)},By={get:Sa(!0,!1)},Wu=new WeakMap,Gu=new WeakMap,Xu=new WeakMap,qy=new WeakMap;function jy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hy(t){return t.__v_skip||!Object.isExtensible(t)?0:jy(dy(t))}function er(t){return t&&t.__v_isReadonly?t:Aa(t,!1,qu,Vy,Wu)}function Ky(t){return Aa(t,!1,Dy,$y,Gu)}function Yu(t){return Aa(t,!0,Py,By,Xu)}function Aa(t,e,n,s,r){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Hy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function hs(t){return Ra(t)?hs(t.__v_raw):!!(t&&t.__v_isReactive)}function Ra(t){return!!(t&&t.__v_isReadonly)}function Ju(t){return hs(t)||Ra(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Qu(t){return vi(t,"__v_skip",!0),t}const tr=t=>Ne(t)?er(t):t,Ca=t=>Ne(t)?Yu(t):t;function Zu(t){Uu()&&(t=ie(t),t.dep||(t.dep=ma()),Fu(t.dep))}function eh(t,e){t=ie(t),t.dep&&Ta(t.dep)}function Xe(t){return Boolean(t&&t.__v_isRef===!0)}function zy(t){return th(t,!1)}function Wy(t){return th(t,!0)}function th(t,e){return Xe(t)?t:new Gy(t,e)}class Gy{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:tr(e)}get value(){return Zu(this),this._value}set value(e){e=this._shallow?e:ie(e),Js(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:tr(e),eh(this))}}function nr(t){return Xe(t)?t.value:t}const Xy={get:(t,e,n)=>nr(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Xe(r)&&!Xe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function nh(t){return hs(t)?t:new Proxy(t,Xy)}class Yy{constructor(e,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new wa(e,()=>{this._dirty||(this._dirty=!0,eh(this))}),this.__v_isReadonly=s}get value(){const e=ie(this);return Zu(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function At(t,e){let n,s;const r=Q(t);return r?(n=t,s=Tt):(n=t.get,s=t.set),new Yy(n,s,r||!s)}Promise.resolve();function Jy(t,e,...n){const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||pe;f?r=n.map(g=>g.trim()):h&&(r=n.map(ga))}let a,c=s[a=pa(e)]||s[a=pa(St(e))];!c&&i&&(c=s[a=pa(cs(e))]),c&&_t(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(l,t,6,r)}}function sh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Q(t)){const c=l=>{const u=sh(l,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):He(o,i),s.set(t,o),o)}function ka(t,e){return!t||!fi(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,cs(e))||se(t,e))}let yt=null,rh=null;function Ai(t){const e=yt;return yt=t,rh=t&&t.type.__scopeId||null,e}function Qy(t,e=yt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Oh(-1);const i=Ai(e),o=t(...r);return Ai(i),s._d&&Oh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Na(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:E}=t;let v,S;const O=Ai(t);try{if(n.shapeFlag&4){const U=r||s;v=kt(u.call(U,U,h,i,g,f,m)),S=c}else{const U=e;v=kt(U.length>1?U(i,{attrs:c,slots:a,emit:l}):U(i,null)),S=e.props?c:Zy(c)}}catch(U){sr.length=0,Li(U,t,1),v=lt(Ct)}let L=v;if(S&&E!==!1){const U=Object.keys(S),{shapeFlag:ee}=L;U.length&&ee&(1|6)&&(o&&U.some(ua)&&(S=ev(S,o)),L=fs(L,S))}return n.dirs&&(L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),v=L,Ai(O),v}const Zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||fi(n))&&((e||(e={}))[n]=t[n]);return e},ev=(t,e)=>{const n={};for(const s in t)(!ua(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function tv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ih(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ka(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ih(s,o,l):!0:!!o;return!1}function ih(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ka(n,i))return!0}return!1}function nv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sv=t=>t.__isSuspense;function rv(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):r_(t)}function Ri(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function Qt(t,e,n=!1){const s=Oe||yt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Q(e)?e.call(s.proxy):e}}function iv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hh(()=>{t.isMounted=!0}),fh(()=>{t.isUnmounting=!0}),t}const vt=[Function,Array],ov={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},setup(t,{slots:e}){const n=Wv(),s=iv();let r;return()=>{const i=e.default&&ch(e.default(),!0);if(!i||!i.length)return;const o=ie(t),{mode:a}=o,c=i[0];if(s.isLeaving)return Pa(c);const l=ah(c);if(!l)return Pa(c);const u=Oa(l,o,s,n);Da(l,u);const h=n.subTree,f=h&&ah(h);let g=!1;const{getTransitionKey:m}=l.type;if(m){const E=m();r===void 0?r=E:E!==r&&(r=E,g=!0)}if(f&&f.type!==Ct&&(!Cn(l,f)||g)){const E=Oa(f,o,s,n);if(Da(f,E),a==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update()},Pa(c);a==="in-out"&&l.type!==Ct&&(E.delayLeave=(v,S,O)=>{const L=oh(s,f);L[String(f.key)]=f,v._leaveCb=()=>{S(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return c}}},av=ov;function oh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Oa(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:E,onAppear:v,onAfterAppear:S,onAppearCancelled:O}=e,L=String(t.key),U=oh(n,t),ee=(W,ue)=>{W&&_t(W,s,9,ue)},ae={mode:i,persisted:o,beforeEnter(W){let ue=a;if(!n.isMounted)if(r)ue=E||a;else return;W._leaveCb&&W._leaveCb(!0);const ce=U[L];ce&&Cn(t,ce)&&ce.el._leaveCb&&ce.el._leaveCb(),ee(ue,[W])},enter(W){let ue=c,ce=l,qe=u;if(!n.isMounted)if(r)ue=v||c,ce=S||l,qe=O||u;else return;let je=!1;const Ge=W._enterCb=Xt=>{je||(je=!0,Xt?ee(qe,[W]):ee(ce,[W]),ae.delayedLeave&&ae.delayedLeave(),W._enterCb=void 0)};ue?(ue(W,Ge),ue.length<=1&&Ge()):Ge()},leave(W,ue){const ce=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return ue();ee(h,[W]);let qe=!1;const je=W._leaveCb=Ge=>{qe||(qe=!0,ue(),Ge?ee(m,[W]):ee(g,[W]),W._leaveCb=void 0,U[ce]===t&&delete U[ce])};U[ce]=t,f?(f(W,je),f.length<=1&&je()):je()},clone(W){return Oa(W,e,n,s)}};return ae}function Pa(t){if(Ci(t))return t=fs(t),t.children=null,t}function ah(t){return Ci(t)?t.children?t.children[0]:void 0:t}function Da(t,e){t.shapeFlag&6&&t.component?Da(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ch(t,e=!1){let n=[],s=0;for(let r=0;r<t.length;r++){const i=t[r];i.type===Rt?(i.patchFlag&128&&s++,n=n.concat(ch(i.children,e))):(e||i.type!==Ct)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function lh(t){return Q(t)?{setup:t,name:t.name}:t}const xa=t=>!!t.type.__asyncLoader,Ci=t=>t.type.__isKeepAlive;function cv(t,e){uh(t,"a",e)}function lv(t,e){uh(t,"da",e)}function uh(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ki(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ci(r.parent.vnode)&&uv(s,e,n,r),r=r.parent}}function uv(t,e,n,s){const r=ki(e,t,s,!0);dh(()=>{ha(s[e],r)},n)}function ki(t,e,n=Oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;us(),ds(n);const a=_t(e,n,t,o);return kn(),In(),a});return s?r.unshift(i):r.push(i),i}}const Ft=t=>(e,n=Oe)=>(!Mi||t==="sp")&&ki(t,e,n),hv=Ft("bm"),hh=Ft("m"),fv=Ft("bu"),dv=Ft("u"),fh=Ft("bum"),dh=Ft("um"),pv=Ft("sp"),gv=Ft("rtg"),mv=Ft("rtc");function yv(t,e=Oe){ki("ec",t,e)}let Ma=!0;function vv(t){const e=mh(t),n=t.proxy,s=t.ctx;Ma=!1,e.beforeCreate&&ph(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:E,deactivated:v,beforeDestroy:S,beforeUnmount:O,destroyed:L,unmounted:U,render:ee,renderTracked:ae,renderTriggered:W,errorCaptured:ue,serverPrefetch:ce,expose:qe,inheritAttrs:je,components:Ge,directives:Xt,filters:ns}=e;if(l&&_v(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const he=o[me];Q(he)&&(s[me]=he.bind(n))}if(r){const me=r.call(n,n);Ne(me)&&(t.data=er(me))}if(Ma=!0,i)for(const me in i){const he=i[me],gt=Q(he)?he.bind(n,n):Q(he.get)?he.get.bind(n,n):Tt,rs=!Q(he)&&Q(he.set)?he.set.bind(n):Tt,Lt=At({get:gt,set:rs});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:It=>Lt.value=It})}if(a)for(const me in a)gh(a[me],s,n,me);if(c){const me=Q(c)?c.call(n):c;Reflect.ownKeys(me).forEach(he=>{Ri(he,me[he])})}u&&ph(u,t,"c");function ke(me,he){G(he)?he.forEach(gt=>me(gt.bind(n))):he&&me(he.bind(n))}if(ke(hv,h),ke(hh,f),ke(fv,g),ke(dv,m),ke(cv,E),ke(lv,v),ke(yv,ue),ke(mv,ae),ke(gv,W),ke(fh,O),ke(dh,U),ke(pv,ce),G(qe))if(qe.length){const me=t.exposed||(t.exposed={});qe.forEach(he=>{Object.defineProperty(me,he,{get:()=>n[he],set:gt=>n[he]=gt})})}else t.exposed||(t.exposed={});ee&&t.render===Tt&&(t.render=ee),je!=null&&(t.inheritAttrs=je),Ge&&(t.components=Ge),Xt&&(t.directives=Xt)}function _v(t,e,n=Tt,s=!1){G(t)&&(t=La(t));for(const r in t){const i=t[r];let o;Ne(i)?"default"in i?o=Qt(i.from||r,i.default,!0):o=Qt(i.from||r):o=Qt(i),Xe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function ph(t,e,n){_t(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function gh(t,e,n,s){const r=s.includes(".")?Gh(n,s):()=>n[s];if(Me(t)){const i=e[t];Q(i)&&Fi(r,i)}else if(Q(t))Fi(r,t.bind(n));else if(Ne(t))if(G(t))t.forEach(i=>gh(i,e,n,s));else{const i=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(i)&&Fi(r,i,t)}}function mh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ni(c,l,o,!0)),Ni(c,e,o)),i.set(e,c),c}function Ni(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ni(t,i,n,!0),r&&r.forEach(o=>Ni(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=wv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const wv={data:yh,props:bn,emits:bn,methods:bn,computed:bn,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:bn,directives:bn,watch:Tv,provide:yh,inject:Ev};function yh(t,e){return e?t?function(){return He(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function Ev(t,e){return bn(La(t),La(e))}function La(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?He(He(Object.create(null),t),e):e}function Tv(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function Iv(t,e,n,s=!1){const r={},i={};vi(i,Pi,1),t.propsDefaults=Object.create(null),vh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ky(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function bv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const g=e[f];if(c)if(se(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const m=St(f);r[m]=Ua(c,a,m,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{vh(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=cs(h))===h||!se(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ua(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],l=!0)}l&&Ut(t,"set","$attrs")}function vh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(pi(c))continue;const l=e[c];let u;r&&se(r,u=St(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ka(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ie(n),l=a||pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ua(r,c,h,l[h],t,!se(l,h))}}return o}function Ua(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Q(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(ds(r),s=l[n]=c.call(null,e),kn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===cs(n))&&(s=!0))}return s}function _h(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Q(t)){const u=h=>{c=!0;const[f,g]=_h(h,e,!0);He(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,os),os;if(G(i))for(let u=0;u<i.length;u++){const h=St(i[u]);wh(h)&&(o[h]=pe)}else if(i)for(const u in i){const h=St(u);if(wh(h)){const f=i[u],g=o[h]=G(f)||Q(f)?{type:f}:f;if(g){const m=Ih(Boolean,g.type),E=Ih(String,g.type);g[0]=m>-1,g[1]=E<0||m<E,(m>-1||se(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function wh(t){return t[0]!=="$"}function Eh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Th(t,e){return Eh(t)===Eh(e)}function Ih(t,e){return G(e)?e.findIndex(n=>Th(n,t)):Q(e)&&Th(e,t)?0:-1}const bh=t=>t[0]==="_"||t==="$stable",Fa=t=>G(t)?t.map(kt):[kt(t)],Sv=(t,e,n)=>{const s=Qy((...r)=>Fa(e(...r)),n);return s._c=!1,s},Sh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(bh(r))continue;const i=t[r];if(Q(i))e[r]=Sv(r,i,s);else if(i!=null){const o=Fa(i);e[r]=()=>o}}},Ah=(t,e)=>{const n=Fa(e);t.slots.default=()=>n},Av=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),vi(e,"_",n)):Sh(e,t.slots={})}else t.slots={},e&&Ah(t,e);vi(t.slots,Pi,1)},Rv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(He(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Sh(e,r)),o=e}else e&&(Ah(t,e),o={default:1});if(i)for(const a in r)!bh(a)&&!(a in o)&&delete r[a]};function OR(t,e){const n=yt;if(n===null)return t;const s=n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=pe]=e[i];Q(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Sn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(us(),_t(c,n,8,[t.el,a,t,e]),In())}}function Rh(){return{app:null,config:{isNativeTag:uy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cv=0;function kv(t,e){return function(s,r=null){r!=null&&!Ne(r)&&(r=null);const i=Rh(),o=new Set;let a=!1;const c=i.app={_uid:Cv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:o_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=lt(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ka(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Va(t,e,n,s,r=!1){if(G(t)){t.forEach((f,g)=>Va(f,e&&(G(e)?e[g]:e),n,s,r));return}if(xa(s)&&!r)return;const i=s.shapeFlag&4?Ka(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Me(l)?(u[l]=null,se(h,l)&&(h[l]=null)):Xe(l)&&(l.value=null)),Q(c))en(c,a,12,[o,u]);else{const f=Me(c),g=Xe(c);if(f||g){const m=()=>{if(t.f){const E=f?u[c]:c.value;r?G(E)&&ha(E,i):G(E)?E.includes(i)||E.push(i):f?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,se(h,c)&&(h[c]=o)):Xe(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,nt(m,n)):m()}}}const nt=rv;function Nv(t){return Ov(t)}function Ov(t,e){const n=my();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Tt,cloneNode:m,insertStaticContent:E}=t,v=(d,p,y,I=null,T=null,R=null,N=!1,A=null,C=!!p.dynamicChildren)=>{if(d===p)return;d&&!Cn(d,p)&&(I=V(d),mt(d,T,R,!0),d=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:b,ref:B,shapeFlag:M}=p;switch(b){case $a:S(d,p,y,I);break;case Ct:O(d,p,y,I);break;case Ba:d==null&&L(p,y,I,N);break;case Rt:Xt(d,p,y,I,T,R,N,A,C);break;default:M&1?ae(d,p,y,I,T,R,N,A,C):M&6?ns(d,p,y,I,T,R,N,A,C):(M&64||M&128)&&b.process(d,p,y,I,T,R,N,A,C,ye)}B!=null&&T&&Va(B,d&&d.ref,R,p||d,!p)},S=(d,p,y,I)=>{if(d==null)s(p.el=a(p.children),y,I);else{const T=p.el=d.el;p.children!==d.children&&l(T,p.children)}},O=(d,p,y,I)=>{d==null?s(p.el=c(p.children||""),y,I):p.el=d.el},L=(d,p,y,I)=>{[d.el,d.anchor]=E(d.children,p,y,I)},U=({el:d,anchor:p},y,I)=>{let T;for(;d&&d!==p;)T=f(d),s(d,y,I),d=T;s(p,y,I)},ee=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),r(d),d=y;r(p)},ae=(d,p,y,I,T,R,N,A,C)=>{N=N||p.type==="svg",d==null?W(p,y,I,T,R,N,A,C):qe(d,p,T,R,N,A,C)},W=(d,p,y,I,T,R,N,A)=>{let C,b;const{type:B,props:M,shapeFlag:q,transition:z,patchFlag:ne,dirs:Ee}=d;if(d.el&&m!==void 0&&ne===-1)C=d.el=m(d.el);else{if(C=d.el=o(d.type,R,M&&M.is,M),q&8?u(C,d.children):q&16&&ce(d.children,C,null,I,T,R&&B!=="foreignObject",N,A),Ee&&Sn(d,null,I,"created"),M){for(const _e in M)_e!=="value"&&!pi(_e)&&i(C,_e,null,M[_e],R,d.children,I,T,k);"value"in M&&i(C,"value",null,M.value),(b=M.onVnodeBeforeMount)&&Nt(b,I,d)}ue(C,d,d.scopeId,N,I)}Ee&&Sn(d,null,I,"beforeMount");const de=(!T||T&&!T.pendingBranch)&&z&&!z.persisted;de&&z.beforeEnter(C),s(C,p,y),((b=M&&M.onVnodeMounted)||de||Ee)&&nt(()=>{b&&Nt(b,I,d),de&&z.enter(C),Ee&&Sn(d,null,I,"mounted")},T)},ue=(d,p,y,I,T)=>{if(y&&g(d,y),I)for(let R=0;R<I.length;R++)g(d,I[R]);if(T){let R=T.subTree;if(p===R){const N=T.vnode;ue(d,N,N.scopeId,N.slotScopeIds,T.parent)}}},ce=(d,p,y,I,T,R,N,A,C=0)=>{for(let b=C;b<d.length;b++){const B=d[b]=A?Zt(d[b]):kt(d[b]);v(null,B,p,y,I,T,R,N,A)}},qe=(d,p,y,I,T,R,N)=>{const A=p.el=d.el;let{patchFlag:C,dynamicChildren:b,dirs:B}=p;C|=d.patchFlag&16;const M=d.props||pe,q=p.props||pe;let z;y&&An(y,!1),(z=q.onVnodeBeforeUpdate)&&Nt(z,y,p,d),B&&Sn(p,d,y,"beforeUpdate"),y&&An(y,!0);const ne=T&&p.type!=="foreignObject";if(b?je(d.dynamicChildren,b,A,y,I,ne,R):N||gt(d,p,A,null,y,I,ne,R,!1),C>0){if(C&16)Ge(A,p,M,q,y,I,T);else if(C&2&&M.class!==q.class&&i(A,"class",null,q.class,T),C&4&&i(A,"style",M.style,q.style,T),C&8){const Ee=p.dynamicProps;for(let de=0;de<Ee.length;de++){const _e=Ee[de],Et=M[_e],is=q[_e];(is!==Et||_e==="value")&&i(A,_e,Et,is,T,d.children,y,I,k)}}C&1&&d.children!==p.children&&u(A,p.children)}else!N&&b==null&&Ge(A,p,M,q,y,I,T);((z=q.onVnodeUpdated)||B)&&nt(()=>{z&&Nt(z,y,p,d),B&&Sn(p,d,y,"updated")},I)},je=(d,p,y,I,T,R,N)=>{for(let A=0;A<p.length;A++){const C=d[A],b=p[A],B=C.el&&(C.type===Rt||!Cn(C,b)||C.shapeFlag&(6|64))?h(C.el):y;v(C,b,B,null,I,T,R,N,!0)}},Ge=(d,p,y,I,T,R,N)=>{if(y!==I){for(const A in I){if(pi(A))continue;const C=I[A],b=y[A];C!==b&&A!=="value"&&i(d,A,b,C,N,p.children,T,R,k)}if(y!==pe)for(const A in y)!pi(A)&&!(A in I)&&i(d,A,y[A],null,N,p.children,T,R,k);"value"in I&&i(d,"value",y.value,I.value)}},Xt=(d,p,y,I,T,R,N,A,C)=>{const b=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:q,slotScopeIds:z}=p;z&&(A=A?A.concat(z):z),d==null?(s(b,y,I),s(B,y,I),ce(p.children,y,B,T,R,N,A,C)):M>0&&M&64&&q&&d.dynamicChildren?(je(d.dynamicChildren,q,y,T,R,N,A),(p.key!=null||T&&p===T.subTree)&&Ch(d,p,!0)):gt(d,p,y,B,T,R,N,A,C)},ns=(d,p,y,I,T,R,N,A,C)=>{p.slotScopeIds=A,d==null?p.shapeFlag&512?T.ctx.activate(p,y,I,N,C):ss(p,y,I,T,R,N,C):ke(d,p,C)},ss=(d,p,y,I,T,R,N)=>{const A=d.component=zv(d,I,T);if(Ci(d)&&(A.ctx.renderer=ye),Gv(A),A.asyncDep){if(T&&T.registerDep(A,me),!d.el){const C=A.subTree=lt(Ct);O(null,C,p,y)}return}me(A,d,p,y,T,R,N)},ke=(d,p,y)=>{const I=p.component=d.component;if(tv(d,p,y))if(I.asyncDep&&!I.asyncResolved){he(I,p,y);return}else I.next=p,n_(I.update),I.update();else p.component=d.component,p.el=d.el,I.vnode=p},me=(d,p,y,I,T,R,N)=>{const A=()=>{if(d.isMounted){let{next:B,bu:M,u:q,parent:z,vnode:ne}=d,Ee=B,de;An(d,!1),B?(B.el=ne.el,he(d,B,N)):B=ne,M&&yi(M),(de=B.props&&B.props.onVnodeBeforeUpdate)&&Nt(de,z,B,ne),An(d,!0);const _e=Na(d),Et=d.subTree;d.subTree=_e,v(Et,_e,h(Et.el),V(Et),d,T,R),B.el=_e.el,Ee===null&&nv(d,_e.el),q&&nt(q,T),(de=B.props&&B.props.onVnodeUpdated)&&nt(()=>Nt(de,z,B,ne),T)}else{let B;const{el:M,props:q}=p,{bm:z,m:ne,parent:Ee}=d,de=xa(p);if(An(d,!1),z&&yi(z),!de&&(B=q&&q.onVnodeBeforeMount)&&Nt(B,Ee,p),An(d,!0),M&&J){const _e=()=>{d.subTree=Na(d),J(M,d.subTree,d,T,null)};de?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=Na(d);v(null,_e,y,I,d,T,R),p.el=_e.el}if(ne&&nt(ne,T),!de&&(B=q&&q.onVnodeMounted)){const _e=p;nt(()=>Nt(B,Ee,_e),T)}p.shapeFlag&256&&d.a&&nt(d.a,T),d.isMounted=!0,p=y=I=null}},C=d.effect=new wa(A,()=>Bh(d.update),d.scope),b=d.update=C.run.bind(C);b.id=d.uid,An(d,!0),b()},he=(d,p,y)=>{p.component=d;const I=d.vnode.props;d.vnode=p,d.next=null,bv(d,p.props,I,y),Rv(d,p.children,y),us(),Xa(void 0,d.update),In()},gt=(d,p,y,I,T,R,N,A,C=!1)=>{const b=d&&d.children,B=d?d.shapeFlag:0,M=p.children,{patchFlag:q,shapeFlag:z}=p;if(q>0){if(q&128){Lt(b,M,y,I,T,R,N,A,C);return}else if(q&256){rs(b,M,y,I,T,R,N,A,C);return}}z&8?(B&16&&k(b,T,R),M!==b&&u(y,M)):B&16?z&16?Lt(b,M,y,I,T,R,N,A,C):k(b,T,R,!0):(B&8&&u(y,""),z&16&&ce(M,y,I,T,R,N,A,C))},rs=(d,p,y,I,T,R,N,A,C)=>{d=d||os,p=p||os;const b=d.length,B=p.length,M=Math.min(b,B);let q;for(q=0;q<M;q++){const z=p[q]=C?Zt(p[q]):kt(p[q]);v(d[q],z,y,null,T,R,N,A,C)}b>B?k(d,T,R,!0,!1,M):ce(p,y,I,T,R,N,A,C,M)},Lt=(d,p,y,I,T,R,N,A,C)=>{let b=0;const B=p.length;let M=d.length-1,q=B-1;for(;b<=M&&b<=q;){const z=d[b],ne=p[b]=C?Zt(p[b]):kt(p[b]);if(Cn(z,ne))v(z,ne,y,null,T,R,N,A,C);else break;b++}for(;b<=M&&b<=q;){const z=d[M],ne=p[q]=C?Zt(p[q]):kt(p[q]);if(Cn(z,ne))v(z,ne,y,null,T,R,N,A,C);else break;M--,q--}if(b>M){if(b<=q){const z=q+1,ne=z<B?p[z].el:I;for(;b<=q;)v(null,p[b]=C?Zt(p[b]):kt(p[b]),y,ne,T,R,N,A,C),b++}}else if(b>q)for(;b<=M;)mt(d[b],T,R,!0),b++;else{const z=b,ne=b,Ee=new Map;for(b=ne;b<=q;b++){const at=p[b]=C?Zt(p[b]):kt(p[b]);at.key!=null&&Ee.set(at.key,b)}let de,_e=0;const Et=q-ne+1;let is=!1,bu=0;const Ys=new Array(Et);for(b=0;b<Et;b++)Ys[b]=0;for(b=z;b<=M;b++){const at=d[b];if(_e>=Et){mt(at,T,R,!0);continue}let bt;if(at.key!=null)bt=Ee.get(at.key);else for(de=ne;de<=q;de++)if(Ys[de-ne]===0&&Cn(at,p[de])){bt=de;break}bt===void 0?mt(at,T,R,!0):(Ys[bt-ne]=b+1,bt>=bu?bu=bt:is=!0,v(at,p[bt],y,null,T,R,N,A,C),_e++)}const Su=is?Pv(Ys):os;for(de=Su.length-1,b=Et-1;b>=0;b--){const at=ne+b,bt=p[at],Au=at+1<B?p[at+1].el:I;Ys[b]===0?v(null,bt,y,Au,T,R,N,A,C):is&&(de<0||b!==Su[de]?It(bt,y,Au,2):de--)}}},It=(d,p,y,I,T=null)=>{const{el:R,type:N,transition:A,children:C,shapeFlag:b}=d;if(b&6){It(d.component.subTree,p,y,I);return}if(b&128){d.suspense.move(p,y,I);return}if(b&64){N.move(d,p,y,ye);return}if(N===Rt){s(R,p,y);for(let M=0;M<C.length;M++)It(C[M],p,y,I);s(d.anchor,p,y);return}if(N===Ba){U(d,p,y);return}if(I!==2&&b&1&&A)if(I===0)A.beforeEnter(R),s(R,p,y),nt(()=>A.enter(R),T);else{const{leave:M,delayLeave:q,afterLeave:z}=A,ne=()=>s(R,p,y),Ee=()=>{M(R,()=>{ne(),z&&z()})};q?q(R,ne,Ee):Ee()}else s(R,p,y)},mt=(d,p,y,I=!1,T=!1)=>{const{type:R,props:N,ref:A,children:C,dynamicChildren:b,shapeFlag:B,patchFlag:M,dirs:q}=d;if(A!=null&&Va(A,null,y,d,!0),B&256){p.ctx.deactivate(d);return}const z=B&1&&q,ne=!xa(d);let Ee;if(ne&&(Ee=N&&N.onVnodeBeforeUnmount)&&Nt(Ee,p,d),B&6)F(d.component,y,I);else{if(B&128){d.suspense.unmount(y,I);return}z&&Sn(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,y,T,ye,I):b&&(R!==Rt||M>0&&M&64)?k(b,p,y,!1,!0):(R===Rt&&M&(128|256)||!T&&B&16)&&k(C,p,y),I&&oa(d)}(ne&&(Ee=N&&N.onVnodeUnmounted)||z)&&nt(()=>{Ee&&Nt(Ee,p,d),z&&Sn(d,null,p,"unmounted")},y)},oa=d=>{const{type:p,el:y,anchor:I,transition:T}=d;if(p===Rt){w(y,I);return}if(p===Ba){ee(d);return}const R=()=>{r(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:N,delayLeave:A}=T,C=()=>N(y,R);A?A(d.el,R,C):C()}else R()},w=(d,p)=>{let y;for(;d!==p;)y=f(d),r(d),d=y;r(p)},F=(d,p,y)=>{const{bum:I,scope:T,update:R,subTree:N,um:A}=d;I&&yi(I),T.stop(),R&&(R.active=!1,mt(N,d,p,y)),A&&nt(A,p),nt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},k=(d,p,y,I=!1,T=!1,R=0)=>{for(let N=R;N<d.length;N++)mt(d[N],p,y,I,T)},V=d=>d.shapeFlag&6?V(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),fe=(d,p,y)=>{d==null?p._vnode&&mt(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,y),Hh(),p._vnode=d},ye={p:v,um:mt,m:It,r:oa,mt:ss,mc:ce,pc:gt,pbc:je,n:V,o:t};let Z,J;return e&&([Z,J]=e(ye)),{render:fe,hydrate:Z,createApp:kv(fe,Z)}}function An({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ch(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Zt(r[i]),a.el=o.el),n||Ch(o,a))}}function Pv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Dv=t=>t.__isTeleport,kh="components";function PR(t,e){return Mv(kh,t,!0,e)||t}const xv=Symbol();function Mv(t,e,n=!0,s=!1){const r=yt||Oe;if(r){const i=r.type;if(t===kh){const a=Qv(i);if(a&&(a===e||a===St(e)||a===mi(St(e))))return i}const o=Nh(r[t]||i[t],e)||Nh(r.appContext[t],e);return!o&&s?i:o}}function Nh(t,e){return t&&(t[e]||t[St(e)]||t[mi(St(e))])}const Rt=Symbol(void 0),$a=Symbol(void 0),Ct=Symbol(void 0),Ba=Symbol(void 0),sr=[];let Rn=null;function Lv(t=!1){sr.push(Rn=t?null:[])}function Uv(){sr.pop(),Rn=sr[sr.length-1]||null}let Oi=1;function Oh(t){Oi+=t}function Ph(t){return t.dynamicChildren=Oi>0?Rn||os:null,Uv(),Oi>0&&Rn&&Rn.push(t),t}function DR(t,e,n,s,r,i){return Ph(xh(t,e,n,s,r,i,!0))}function Fv(t,e,n,s,r){return Ph(lt(t,e,n,s,r,!0))}function qa(t){return t?t.__v_isVNode===!0:!1}function Cn(t,e){return t.type===e.type&&t.key===e.key}const Pi="__vInternal",Dh=({key:t})=>t!=null?t:null,Di=({ref:t,ref_key:e,ref_for:n})=>t!=null?Me(t)||Xe(t)||Q(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function xh(t,e=null,n=null,s=0,r=null,i=t===Rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dh(e),ref:e&&Di(e),scopeId:rh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(ja(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Me(n)?8:16),Oi>0&&!o&&Rn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Rn.push(c),c}const lt=Vv;function Vv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===xv)&&(t=Ct),qa(t)){const a=fs(t,e,!0);return n&&ja(a,n),a}if(Zv(t)&&(t=t.__vccOpts),e){e=$v(e);let{class:a,style:c}=e;a&&!Me(a)&&(e.class=la(a)),Ne(c)&&(Ju(c)&&!G(c)&&(c=He({},c)),e.style=ca(c))}const o=Me(t)?1:sv(t)?128:Dv(t)?64:Ne(t)?4:Q(t)?2:0;return xh(t,e,n,s,r,o,i,!0)}function $v(t){return t?Ju(t)||Pi in t?He({},t):t:null}function fs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?qv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dh(a),ref:e&&e.ref?n&&r?G(r)?r.concat(Di(e)):[r,Di(e)]:Di(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fs(t.ssContent),ssFallback:t.ssFallback&&fs(t.ssFallback),el:t.el,anchor:t.anchor}}function Bv(t=" ",e=0){return lt($a,null,t,e)}function xR(t="",e=!1){return e?(Lv(),Fv(Ct,null,t)):lt(Ct,null,t)}function kt(t){return t==null||typeof t=="boolean"?lt(Ct):G(t)?lt(Rt,null,t.slice()):typeof t=="object"?Zt(t):lt($a,null,String(t))}function Zt(t){return t.el===null||t.memo?t:fs(t)}function ja(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&(1|64)){const r=e.default;r&&(r._c&&(r._d=!1),ja(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Pi in e)?e._ctx=yt:r===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),s&64?(n=16,e=[Bv(e)]):n=8);t.children=e,t.shapeFlag|=n}function qv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=la([e.class,s.class]));else if(r==="style")e.style=ca([e.style,s.style]);else if(fi(r)){const i=e[r],o=s[r];i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Nt(t,e,n,s=null){_t(t,e,7,[n,s])}function MR(t,e,n,s){let r;const i=n&&n[s];if(G(t)||Me(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Ha=t=>t?Mh(t)?Ka(t)||t.proxy:Ha(t.parent):null,xi=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ha(t.parent),$root:t=>Ha(t.root),$emit:t=>t.emit,$options:t=>mh(t),$forceUpdate:t=>()=>Bh(t.update),$nextTick:t=>$h.bind(t.proxy),$watch:t=>i_.bind(t)}),jv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==pe&&se(s,e))return o[e]=1,s[e];if(r!==pe&&se(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,i[e];if(n!==pe&&se(n,e))return o[e]=4,n[e];Ma&&(o[e]=0)}}const u=xi[e];let h,f;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&se(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,se(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;if(r!==pe&&se(r,e))r[e]=n;else if(s!==pe&&se(s,e))s[e]=n;else if(se(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&se(t,o)||e!==pe&&se(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(xi,o)||se(r.config.globalProperties,o)}},Hv=Rh();let Kv=0;function zv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Hv,i={uid:Kv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new yy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_h(s,r),emitsOptions:sh(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jy.bind(null,i),t.ce&&t.ce(i),i}let Oe=null;const Wv=()=>Oe||yt,ds=t=>{Oe=t,t.scope.on()},kn=()=>{Oe&&Oe.scope.off(),Oe=null};function Mh(t){return t.vnode.shapeFlag&4}let Mi=!1;function Gv(t,e=!1){Mi=e;const{props:n,children:s}=t.vnode,r=Mh(t);Iv(t,n,r,e),Av(t,s);const i=r?Xv(t,e):void 0;return Mi=!1,i}function Xv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qu(new Proxy(t.ctx,jv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Jv(t):null;ds(t),us();const i=en(s,t,0,[t.props,r]);if(In(),kn(),Nu(i)){if(i.then(kn,kn),e)return i.then(o=>{Lh(t,o,e)}).catch(o=>{Li(o,t,0)});t.asyncDep=i}else Lh(t,i,e)}else Fh(t,e)}function Lh(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=nh(e)),Fh(t,n)}let Uh;function Fh(t,e,n){const s=t.type;if(!t.render){if(!e&&Uh&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=He(He({isCustomElement:i,delimiters:a},o),c);s.render=Uh(r,l)}}t.render=s.render||Tt}ds(t),us(),vv(t),In(),kn()}function Yv(t){return new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}})}function Jv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Yv(t))},slots:t.slots,emit:t.emit,expose:e}}function Ka(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(nh(Qu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xi)return xi[n](t)}}))}function Qv(t){return Q(t)&&t.displayName||t.name}function Zv(t){return Q(t)&&"__vccOpts"in t}function en(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Li(i,e,n)}return r}function _t(t,e,n,s){if(Q(t)){const i=en(t,e,n,s);return i&&Nu(i)&&i.catch(o=>{Li(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(_t(t[i],e,n,s));return r}function Li(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){en(c,null,10,[t,o,a]);return}}e_(t,n,r,s)}function e_(t,e,n,s=!0){console.error(t)}let Ui=!1,za=!1;const ut=[];let Vt=0;const rr=[];let ir=null,ps=0;const or=[];let tn=null,gs=0;const Vh=Promise.resolve();let Wa=null,Ga=null;function $h(t){const e=Wa||Vh;return t?e.then(this?t.bind(this):t):e}function t_(t){let e=Vt+1,n=ut.length;for(;e<n;){const s=e+n>>>1;ar(ut[s])<t?e=s+1:n=s}return e}function Bh(t){(!ut.length||!ut.includes(t,Ui&&t.allowRecurse?Vt+1:Vt))&&t!==Ga&&(t.id==null?ut.push(t):ut.splice(t_(t.id),0,t),qh())}function qh(){!Ui&&!za&&(za=!0,Wa=Vh.then(Kh))}function n_(t){const e=ut.indexOf(t);e>Vt&&ut.splice(e,1)}function jh(t,e,n,s){G(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),qh()}function s_(t){jh(t,ir,rr,ps)}function r_(t){jh(t,tn,or,gs)}function Xa(t,e=null){if(rr.length){for(Ga=e,ir=[...new Set(rr)],rr.length=0,ps=0;ps<ir.length;ps++)ir[ps]();ir=null,ps=0,Ga=null,Xa(t,e)}}function Hh(t){if(or.length){const e=[...new Set(or)];if(or.length=0,tn){tn.push(...e);return}for(tn=e,tn.sort((n,s)=>ar(n)-ar(s)),gs=0;gs<tn.length;gs++)tn[gs]();tn=null,gs=0}}const ar=t=>t.id==null?1/0:t.id;function Kh(t){za=!1,Ui=!0,Xa(t),ut.sort((n,s)=>ar(n)-ar(s));const e=Tt;try{for(Vt=0;Vt<ut.length;Vt++){const n=ut[Vt];n&&n.active!==!1&&en(n,null,14)}}finally{Vt=0,ut.length=0,Hh(),Ui=!1,Wa=null,(ut.length||rr.length||or.length)&&Kh(t)}}const zh={};function Fi(t,e,n){return Wh(t,e,n)}function Wh(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=pe){const a=Oe;let c,l=!1,u=!1;if(Xe(t)?(c=()=>t.value,l=!!t._shallow):hs(t)?(c=()=>t,s=!0):G(t)?(u=!0,l=t.some(hs),c=()=>t.map(S=>{if(Xe(S))return S.value;if(hs(S))return Nn(S);if(Q(S))return en(S,a,2)})):Q(t)?e?c=()=>en(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),_t(t,a,3,[f])}:c=Tt,e&&s){const S=c;c=()=>Nn(S())}let h,f=S=>{h=v.onStop=()=>{en(S,a,4)}};if(Mi)return f=Tt,e?n&&_t(e,a,3,[c(),u?[]:void 0,f]):c(),Tt;let g=u?[]:zh;const m=()=>{if(!!v.active)if(e){const S=v.run();(s||l||(u?S.some((O,L)=>Js(O,g[L])):Js(S,g)))&&(h&&h(),_t(e,a,3,[S,g===zh?void 0:g,f]),g=S)}else v.run()};m.allowRecurse=!!e;let E;r==="sync"?E=m:r==="post"?E=()=>nt(m,a&&a.suspense):E=()=>{!a||a.isMounted?s_(m):m()};const v=new wa(c,E);return e?n?m():g=v.run():r==="post"?nt(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&ha(a.scope.effects,v)}}function i_(t,e,n){const s=this.proxy,r=Me(t)?t.includes(".")?Gh(s,t):()=>s[t]:t.bind(s,s);let i;Q(e)?i=e:(i=e.handler,n=e);const o=Oe;ds(this);const a=Wh(r,i.bind(s),n);return o?ds(o):kn(),a}function Gh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Nn(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))Nn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(ku(t)||as(t))t.forEach(n=>{Nn(n,e)});else if(Pu(t))for(const n in t)Nn(t[n],e);return t}function Xh(t,e,n){const s=arguments.length;return s===2?Ne(e)&&!G(e)?qa(e)?lt(t,null,[e]):lt(t,e):lt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&qa(n)&&(n=[n]),lt(t,e,n))}const o_="3.2.26",a_="http://www.w3.org/2000/svg",ms=typeof document!="undefined"?document:null,Yh=new Map,c_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?ms.createElementNS(a_,t):ms.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ms.createTextNode(t),createComment:t=>ms.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ms.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s){const r=n?n.previousSibling:e.lastChild;let i=Yh.get(t);if(!i){const o=ms.createElement("template");if(o.innerHTML=s?`<svg>${t}</svg>`:t,i=o.content,s){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}Yh.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function u_(t,e,n){const s=t.style,r=Me(n);if(n&&!r){for(const i in n)Ya(s,i,n[i]);if(e&&!Me(e))for(const i in e)n[i]==null&&Ya(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Jh=/\s*!important$/;function Ya(t,e,n){if(G(n))n.forEach(s=>Ya(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=h_(t,e);Jh.test(n)?t.setProperty(cs(s),n.replace(Jh,""),"important"):t[s]=n}}const Qh=["Webkit","Moz","ms"],Ja={};function h_(t,e){const n=Ja[e];if(n)return n;let s=St(e);if(s!=="filter"&&s in t)return Ja[e]=s;s=mi(s);for(let r=0;r<Qh.length;r++){const i=Qh[r]+s;if(i in t)return Ja[e]=i}return e}const Zh="http://www.w3.org/1999/xlink";function f_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zh,e.slice(6,e.length)):t.setAttributeNS(Zh,e,n);else{const i=oy(e);n==null||i&&!Ru(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function d_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Ru(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Vi=Date.now,ef=!1;if(typeof window!="undefined"){Vi()>document.createEvent("Event").timeStamp&&(Vi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ef=!!(t&&Number(t[1])<=53)}let Qa=0;const p_=Promise.resolve(),g_=()=>{Qa=0},m_=()=>Qa||(p_.then(g_),Qa=Vi());function ys(t,e,n,s){t.addEventListener(e,n,s)}function y_(t,e,n,s){t.removeEventListener(e,n,s)}function v_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=__(e);if(s){const l=i[e]=w_(s,r);ys(t,a,l,c)}else o&&(y_(t,a,o,c),i[e]=void 0)}}const tf=/(?:Once|Passive|Capture)$/;function __(t){let e;if(tf.test(t)){e={};let n;for(;n=t.match(tf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[cs(t.slice(2)),e]}function w_(t,e){const n=s=>{const r=s.timeStamp||Vi();(ef||r>=n.attached-1)&&_t(E_(s,n.value),e,5,[s])};return n.value=t,n.attached=m_(),n}function E_(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s(r))}else return e}const nf=/^on[a-z]/,T_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?l_(t,s,r):e==="style"?u_(t,n,s):fi(e)?ua(e)||v_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):I_(t,e,s,r))?d_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),f_(t,e,s,r))};function I_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&nf.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||nf.test(e)&&Me(n)?!1:e in t}const b_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};av.props;const sf=t=>{const e=t.props["onUpdate:modelValue"];return G(e)?n=>yi(e,n):e};function S_(t){t.target.composing=!0}function rf(t){const e=t.target;e.composing&&(e.composing=!1,A_(e,"input"))}function A_(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const LR={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=sf(r);const i=s||r.props&&r.props.type==="number";ys(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=ga(a)),t._assign(a)}),n&&ys(t,"change",()=>{t.value=t.value.trim()}),e||(ys(t,"compositionstart",S_),ys(t,"compositionend",rf),ys(t,"change",rf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=sf(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&ga(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},R_=["ctrl","shift","alt","meta"],C_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>R_.some(n=>t[`${n}Key`]&&!e.includes(n))},UR=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=C_[e[r]];if(i&&i(n,e))return}return t(n,...s)},k_=He({patchProp:T_},c_);let of;function N_(){return of||(of=Nv(k_))}const FR=(...t)=>{const e=N_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=O_(s);if(!r)return;const i=e._component;!Q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function O_(t){return Me(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const af=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",vs=t=>af?Symbol(t):"_vr_"+t,P_=vs("rvlm"),cf=vs("rvd"),Za=vs("r"),lf=vs("rl"),ec=vs("rvl"),_s=typeof window!="undefined";function D_(t){return t.__esModule||af&&t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function tc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const cr=()=>{},x_=/\/$/,M_=t=>t.replace(x_,"");function nc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=V_(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function L_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function uf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function U_(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ws(e.matched[s],n.matched[r])&&hf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!F_(t[n],e[n]))return!1;return!0}function F_(t,e){return Array.isArray(t)?ff(t,e):Array.isArray(e)?ff(e,t):t===e}function ff(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function V_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var lr;(function(t){t.pop="pop",t.push="push"})(lr||(lr={}));var ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ur||(ur={}));function $_(t){if(!t)if(_s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),M_(t)}const B_=/^[^#]+#/;function q_(t,e){return t.replace(B_,"#")+e}function j_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const $i=()=>({left:window.pageXOffset,top:window.pageYOffset});function H_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=j_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function df(t,e){return(history.state?history.state.position-e:-1)+t}const sc=new Map;function K_(t,e){sc.set(t,e)}function z_(t){const e=sc.get(t);return sc.delete(t),e}let W_=()=>location.protocol+"//"+location.host;function pf(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),uf(c,"")}return uf(n,t)+s+r}function G_(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=pf(t,location),m=n.value,E=e.value;let v=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}v=E?f.position-E.position:0}else s(g);r.forEach(S=>{S(n.value,m,{delta:v,type:lr.pop,direction:v?v>0?ur.forward:ur.back:ur.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(ge({},f.state,{scroll:$i()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function gf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?$i():null}}function X_(t){const{history:e,location:n}=window,s={value:pf(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:W_()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ge({},e.state,gf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ge({},r.value,e.state,{forward:c,scroll:$i()});i(u.current,u,!0);const h=ge({},gf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Y_(t){t=$_(t);const e=X_(t),n=G_(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:q_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function VR(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Y_(t)}function J_(t){return typeof t=="string"||t&&typeof t=="object"}function mf(t){return typeof t=="string"||typeof t=="symbol"}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yf=vs("nf");var vf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vf||(vf={}));function Es(t,e){return ge(new Error,{type:t,[yf]:!0},e)}function On(t,e){return t instanceof Error&&yf in t&&(e==null||!!(t.type&e))}const _f="[^/]+?",Q_={sensitive:!1,strict:!1,start:!0,end:!0},Z_=/[.+*?^${}()[\]/\\]/g;function ew(t,e){const n=ge({},Q_,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Z_,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:E,optional:v,regexp:S}=f;i.push({name:m,repeatable:E,optional:v});const O=S||_f;if(O!==_f){g+=10;try{new RegExp(`(${O})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+U.message)}}let L=E?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(L=v&&l.length<2?`(?:/${L})`:"/"+L),v&&(L+="?"),r+=L,g+=20,v&&(g+=-8),E&&(g+=-20),O===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",m=i[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:E,optional:v}=g,S=m in l?l[m]:"";if(Array.isArray(S)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=Array.isArray(S)?S.join("/"):S;if(!O)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function tw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=tw(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const sw={type:0,value:""},rw=/[a-zA-Z0-9_]/;function iw(t){if(!t)return[[]];if(t==="/")return[[sw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:rw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function ow(t,e,n){const s=ew(iw(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function aw(t,e){const n=[],s=new Map;e=Ef({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,m=lw(u);m.aliasOf=f&&f.record;const E=Ef(e,u),v=[m];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of L)v.push(ge({},m,{components:f?f.record.components:m.components,path:U,aliasOf:f?f.record:m}))}let S,O;for(const L of v){const{path:U}=L;if(h&&U[0]!=="/"){const ee=h.record.path,ae=ee[ee.length-1]==="/"?"":"/";L.path=h.record.path+(U&&ae+U)}if(S=ow(L,h,E),f?f.alias.push(S):(O=O||S,O!==S&&O.alias.push(S),g&&u.name&&!wf(S)&&o(u.name)),"children"in m){const ee=m.children;for(let ae=0;ae<ee.length;ae++)i(ee[ae],S,f&&f.children[ae])}f=f||S,c(S)}return O?()=>{o(O)}:cr}function o(u){if(mf(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&nw(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!wf(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},m,E;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Es(1,{location:u});E=f.record.name,g=ge(cw(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),u.params),m=f.stringify(g)}else if("path"in u)m=u.path,f=n.find(O=>O.re.test(m)),f&&(g=f.parse(m),E=f.record.name);else{if(f=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw Es(1,{location:u,currentLocation:h});E=f.record.name,g=ge({},h.params,u.params),m=f.stringify(g)}const v=[];let S=f;for(;S;)v.unshift(S.record),S=S.parent;return{name:E,path:m,params:g,matched:v,meta:hw(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function cw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function lw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function uw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function wf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hw(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Ef(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Tf=/#/g,fw=/&/g,dw=/\//g,pw=/=/g,gw=/\?/g,If=/\+/g,mw=/%5B/g,yw=/%5D/g,bf=/%5E/g,vw=/%60/g,Sf=/%7B/g,_w=/%7C/g,Af=/%7D/g,ww=/%20/g;function rc(t){return encodeURI(""+t).replace(_w,"|").replace(mw,"[").replace(yw,"]")}function Ew(t){return rc(t).replace(Sf,"{").replace(Af,"}").replace(bf,"^")}function ic(t){return rc(t).replace(If,"%2B").replace(ww,"+").replace(Tf,"%23").replace(fw,"%26").replace(vw,"`").replace(Sf,"{").replace(Af,"}").replace(bf,"^")}function Tw(t){return ic(t).replace(pw,"%3D")}function Iw(t){return rc(t).replace(Tf,"%23").replace(gw,"%3F")}function bw(t){return t==null?"":Iw(t).replace(dw,"%2F")}function Bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Sw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(If," "),o=i.indexOf("="),a=Bi(o<0?i:i.slice(0,o)),c=o<0?null:Bi(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Rf(t){let e="";for(let n in t){const s=t[n];if(n=Tw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&ic(i)):[s&&ic(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Aw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function hr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function sn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Es(4,{from:n,to:e})):h instanceof Error?a(h):J_(h)?a(Es(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function oc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Rw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(sn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=D_(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&sn(f,n,s,i,o)()}))}}return r}function Rw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Cf(t){const e=Qt(Za),n=Qt(lf),s=At(()=>e.resolve(nr(t.to))),r=At(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ws.bind(null,u));if(f>-1)return f;const g=kf(c[l-2]);return l>1&&kf(u)===g&&h[h.length-1].path!==g?h.findIndex(ws.bind(null,c[l-2])):f}),i=At(()=>r.value>-1&&Ow(n.params,s.value.params)),o=At(()=>r.value>-1&&r.value===n.matched.length-1&&hf(n.params,s.value.params));function a(c={}){return Nw(c)?e[nr(t.replace)?"replace":"push"](nr(t.to)).catch(cr):Promise.resolve()}return{route:s,href:At(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Cw=lh({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cf,setup(t,{slots:e}){const n=er(Cf(t)),{options:s}=Qt(Za),r=At(()=>({[Nf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Nf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Xh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),kw=Cw;function Nw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ow(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nf=(t,e,n)=>t!=null?t:e!=null?e:n,Pw=lh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Qt(ec),r=At(()=>t.route||s.value),i=Qt(cf,0),o=At(()=>r.value.matched[i]);Ri(cf,i+1),Ri(P_,o),Ri(ec,r);const a=zy();return Fi(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!ws(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Of(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,E=Xh(u,ge({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Of(n.default,{Component:E,route:c})||E}}});function Of(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Dw=Pw;function $R(t){const e=aw(t.routes,t),n=t.parseQuery||Sw,s=t.stringifyQuery||Rf,r=t.history,i=hr(),o=hr(),a=hr(),c=Wy(nn);let l=nn;_s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tc.bind(null,w=>""+w),h=tc.bind(null,bw),f=tc.bind(null,Bi);function g(w,F){let k,V;return mf(w)?(k=e.getRecordMatcher(w),V=F):V=w,e.addRoute(V,k)}function m(w){const F=e.getRecordMatcher(w);F&&e.removeRoute(F)}function E(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function S(w,F){if(F=ge({},F||c.value),typeof w=="string"){const J=nc(n,w,F.path),d=e.resolve({path:J.path},F),p=r.createHref(J.fullPath);return ge(J,d,{params:f(d.params),hash:Bi(J.hash),redirectedFrom:void 0,href:p})}let k;if("path"in w)k=ge({},w,{path:nc(n,w.path,F.path).path});else{const J=ge({},w.params);for(const d in J)J[d]==null&&delete J[d];k=ge({},w,{params:h(w.params)}),F.params=h(F.params)}const V=e.resolve(k,F),fe=w.hash||"";V.params=u(f(V.params));const ye=L_(s,ge({},w,{hash:Ew(fe),path:V.path})),Z=r.createHref(ye);return ge({fullPath:ye,hash:fe,query:s===Rf?Aw(w.query):w.query||{}},V,{redirectedFrom:void 0,href:Z})}function O(w){return typeof w=="string"?nc(n,w,c.value.path):ge({},w)}function L(w,F){if(l!==w)return Es(8,{from:F,to:w})}function U(w){return W(w)}function ee(w){return U(ge(O(w),{replace:!0}))}function ae(w){const F=w.matched[w.matched.length-1];if(F&&F.redirect){const{redirect:k}=F;let V=typeof k=="function"?k(w):k;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=O(V):{path:V},V.params={}),ge({query:w.query,hash:w.hash,params:w.params},V)}}function W(w,F){const k=l=S(w),V=c.value,fe=w.state,ye=w.force,Z=w.replace===!0,J=ae(k);if(J)return W(ge(O(J),{state:fe,force:ye,replace:Z}),F||k);const d=k;d.redirectedFrom=F;let p;return!ye&&U_(s,V,k)&&(p=Es(16,{to:d,from:V}),rs(V,V,!0,!1)),(p?Promise.resolve(p):ce(d,V)).catch(y=>On(y)?y:me(y,d,V)).then(y=>{if(y){if(On(y,2))return W(ge(O(y.to),{state:fe,force:ye,replace:Z}),F||d)}else y=je(d,V,!0,Z,fe);return qe(d,V,y),y})}function ue(w,F){const k=L(w,F);return k?Promise.reject(k):Promise.resolve()}function ce(w,F){let k;const[V,fe,ye]=xw(w,F);k=oc(V.reverse(),"beforeRouteLeave",w,F);for(const J of V)J.leaveGuards.forEach(d=>{k.push(sn(d,w,F))});const Z=ue.bind(null,w,F);return k.push(Z),Ts(k).then(()=>{k=[];for(const J of i.list())k.push(sn(J,w,F));return k.push(Z),Ts(k)}).then(()=>{k=oc(fe,"beforeRouteUpdate",w,F);for(const J of fe)J.updateGuards.forEach(d=>{k.push(sn(d,w,F))});return k.push(Z),Ts(k)}).then(()=>{k=[];for(const J of w.matched)if(J.beforeEnter&&!F.matched.includes(J))if(Array.isArray(J.beforeEnter))for(const d of J.beforeEnter)k.push(sn(d,w,F));else k.push(sn(J.beforeEnter,w,F));return k.push(Z),Ts(k)}).then(()=>(w.matched.forEach(J=>J.enterCallbacks={}),k=oc(ye,"beforeRouteEnter",w,F),k.push(Z),Ts(k))).then(()=>{k=[];for(const J of o.list())k.push(sn(J,w,F));return k.push(Z),Ts(k)}).catch(J=>On(J,8)?J:Promise.reject(J))}function qe(w,F,k){for(const V of a.list())V(w,F,k)}function je(w,F,k,V,fe){const ye=L(w,F);if(ye)return ye;const Z=F===nn,J=_s?history.state:{};k&&(V||Z?r.replace(w.fullPath,ge({scroll:Z&&J&&J.scroll},fe)):r.push(w.fullPath,fe)),c.value=w,rs(w,F,k,Z),gt()}let Ge;function Xt(){Ge=r.listen((w,F,k)=>{const V=S(w),fe=ae(V);if(fe){W(ge(fe,{replace:!0}),V).catch(cr);return}l=V;const ye=c.value;_s&&K_(df(ye.fullPath,k.delta),$i()),ce(V,ye).catch(Z=>On(Z,4|8)?Z:On(Z,2)?(W(Z.to,V).then(J=>{On(J,4|16)&&!k.delta&&k.type===lr.pop&&r.go(-1,!1)}).catch(cr),Promise.reject()):(k.delta&&r.go(-k.delta,!1),me(Z,V,ye))).then(Z=>{Z=Z||je(V,ye,!1),Z&&(k.delta?r.go(-k.delta,!1):k.type===lr.pop&&On(Z,4|16)&&r.go(-1,!1)),qe(V,ye,Z)}).catch(cr)})}let ns=hr(),ss=hr(),ke;function me(w,F,k){gt(w);const V=ss.list();return V.length?V.forEach(fe=>fe(w,F,k)):console.error(w),Promise.reject(w)}function he(){return ke&&c.value!==nn?Promise.resolve():new Promise((w,F)=>{ns.add([w,F])})}function gt(w){ke||(ke=!0,Xt(),ns.list().forEach(([F,k])=>w?k(w):F()),ns.reset())}function rs(w,F,k,V){const{scrollBehavior:fe}=t;if(!_s||!fe)return Promise.resolve();const ye=!k&&z_(df(w.fullPath,0))||(V||!k)&&history.state&&history.state.scroll||null;return $h().then(()=>fe(w,F,ye)).then(Z=>Z&&H_(Z)).catch(Z=>me(Z,w,F))}const Lt=w=>r.go(w);let It;const mt=new Set;return{currentRoute:c,addRoute:g,removeRoute:m,hasRoute:v,getRoutes:E,resolve:S,options:t,push:U,replace:ee,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ss.add,isReady:he,install(w){const F=this;w.component("RouterLink",kw),w.component("RouterView",Dw),w.config.globalProperties.$router=F,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>nr(c)}),_s&&!It&&c.value===nn&&(It=!0,U(r.location).catch(fe=>{}));const k={};for(const fe in nn)k[fe]=At(()=>c.value[fe]);w.provide(Za,F),w.provide(lf,er(k)),w.provide(ec,c);const V=w.unmount;mt.add(w),w.unmount=function(){mt.delete(w),mt.size<1&&(l=nn,Ge&&Ge(),c.value=nn,It=!1,ke=!1),V()}}}}function Ts(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function xw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ws(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ws(l,c))||r.push(c))}return[n,s,r]}/**
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
 */const Mw=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)==55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)==56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Lw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Fw=function(t){try{return Uw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Vw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Pe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Df(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $w(){return Pe().indexOf("Electron/")>=0}function Mf(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bw(){return Pe().indexOf("MSAppHost/")>=0}/**
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
 */const qw="FirebaseError";class rn extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=qw,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?jw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new rn(r,a,s)}}function jw(t,e){return t.replace(Hw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Hw=/\{\$([^}]+)}/g;function Kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Lf(i)&&Lf(o)){if(!qi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Lf(t){return t!==null&&typeof t=="object"}/**
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
 */function dr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function gr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zw(t,e){const n=new Ww(t,e);return n.subscribe.bind(n)}class Ww{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ac),r.error===void 0&&(r.error=ac),r.complete===void 0&&(r.complete=ac);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ac(){}/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dn="[DEFAULT]";/**
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
 */class Xw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jw(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yw(t){return t===Dn?void 0:t}function Jw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Zw={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},eE=oe.INFO,tE={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},nE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=tE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=eE,this._logHandler=nE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}/**
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
 */class sE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function rE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lc="@firebase/app",Uf="0.7.13";/**
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
 */const uc=new cc("@firebase/app"),iE="@firebase/app-compat",oE="@firebase/analytics-compat",aE="@firebase/analytics",cE="@firebase/app-check-compat",lE="@firebase/app-check",uE="@firebase/auth",hE="@firebase/auth-compat",fE="@firebase/database",dE="@firebase/database-compat",pE="@firebase/functions",gE="@firebase/functions-compat",mE="@firebase/installations",yE="@firebase/installations-compat",vE="@firebase/messaging",_E="@firebase/messaging-compat",wE="@firebase/performance",EE="@firebase/performance-compat",TE="@firebase/remote-config",IE="@firebase/remote-config-compat",bE="@firebase/storage",SE="@firebase/storage-compat",AE="@firebase/firestore",RE="@firebase/firestore-compat",CE="firebase",kE="9.6.3";/**
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
 */const Ff="[DEFAULT]",NE={[lc]:"fire-core",[iE]:"fire-core-compat",[aE]:"fire-analytics",[oE]:"fire-analytics-compat",[lE]:"fire-app-check",[cE]:"fire-app-check-compat",[uE]:"fire-auth",[hE]:"fire-auth-compat",[fE]:"fire-rtdb",[dE]:"fire-rtdb-compat",[pE]:"fire-fn",[gE]:"fire-fn-compat",[mE]:"fire-iid",[yE]:"fire-iid-compat",[vE]:"fire-fcm",[_E]:"fire-fcm-compat",[wE]:"fire-perf",[EE]:"fire-perf-compat",[TE]:"fire-rc",[IE]:"fire-rc-compat",[bE]:"fire-gcs",[SE]:"fire-gcs-compat",[AE]:"fire-fst",[RE]:"fire-fst-compat","fire-js":"fire-js",[CE]:"fire-js-all"};/**
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
 */const ji=new Map,hc=new Map;function OE(t,e){try{t.container.addComponent(e)}catch(n){uc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(hc.has(e))return uc.debug(`There were multiple attempts to register component ${e}.`),!1;hc.set(e,t);for(const n of ji.values())OE(n,t);return!0}function Hi(t,e){return t.container.getProvider(e)}/**
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
 */const PE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Ki=new fr("app","Firebase",PE);/**
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
 */class DE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ki.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=kE;function BR(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ff,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ki.create("bad-app-name",{appName:String(s)});const r=ji.get(s);if(r){if(qi(t,r.options)&&qi(n,r.config))return r;throw Ki.create("duplicate-app",{appName:s})}const i=new Qw(s);for(const a of hc.values())i.addComponent(a);const o=new DE(t,n,i);return ji.set(s,o),o}function fc(t=Ff){const e=ji.get(t);if(!e)throw Ki.create("no-app",{appName:t});return e}function Ot(t,e,n){var s;let r=(s=NE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),uc.warn(a.join(" "));return}Is(new Pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */function xE(t){Is(new Pn("platform-logger",e=>new sE(e),"PRIVATE")),Ot(lc,Uf,t),Ot(lc,Uf,"esm2017"),Ot("fire-js","")}xE("");var ME="firebase",LE="9.6.3";/**
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
 */Ot(ME,LE,"app");var UE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,dc=dc||{},H=UE||self;function zi(){}function pc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function mr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FE(t){return Object.prototype.hasOwnProperty.call(t,gc)&&t[gc]||(t[gc]=++VE)}var gc="closure_uid_"+(1e9*Math.random()>>>0),VE=0;function $E(t,e,n){return t.call.apply(t.bind,arguments)}function BE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=$E:Le=BE,Le.apply(null,arguments)}function Wi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function on(){this.s=this.s,this.o=this.o}var qE=0,jE={};on.prototype.s=!1;on.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),qE!=0)){var t=FE(this);delete jE[t]}};on.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},$f=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function HE(t){e:{var e=MT;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Bf(t){return Array.prototype.concat.apply([],arguments)}function mc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Gi(t){return/^[\s\xa0]*$/.test(t)}var qf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Je(t,e){return t.indexOf(e)!=-1}function yc(t,e){return t<e?-1:t>e?1:0}var Qe;e:{var jf=H.navigator;if(jf){var Hf=jf.userAgent;if(Hf){Qe=Hf;break e}}Qe=""}function vc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Kf(t){const e={};for(const n in t)e[n]=t[n];return e}var zf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wf(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<zf.length;i++)n=zf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function _c(t){return _c[" "](t),t}_c[" "]=zi;function KE(t){var e=GE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var zE=Je(Qe,"Opera"),Ss=Je(Qe,"Trident")||Je(Qe,"MSIE"),Gf=Je(Qe,"Edge"),wc=Gf||Ss,Xf=Je(Qe,"Gecko")&&!(Je(Qe.toLowerCase(),"webkit")&&!Je(Qe,"Edge"))&&!(Je(Qe,"Trident")||Je(Qe,"MSIE"))&&!Je(Qe,"Edge"),WE=Je(Qe.toLowerCase(),"webkit")&&!Je(Qe,"Edge");function Yf(){var t=H.document;return t?t.documentMode:void 0}var Xi;e:{var Ec="",Tc=function(){var t=Qe;if(Xf)return/rv:([^\);]+)(\)|;)/.exec(t);if(Gf)return/Edge\/([\d\.]+)/.exec(t);if(Ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(WE)return/WebKit\/(\S+)/.exec(t);if(zE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Tc&&(Ec=Tc?Tc[1]:""),Ss){var Ic=Yf();if(Ic!=null&&Ic>parseFloat(Ec)){Xi=String(Ic);break e}}Xi=Ec}var GE={};function XE(){return KE(function(){let t=0;const e=qf(String(Xi)).split("."),n=qf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=yc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||yc(r[2].length==0,i[2].length==0)||yc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var bc;if(H.document&&Ss){var Jf=Yf();bc=Jf||parseInt(Xi,10)||void 0}else bc=void 0;var YE=bc,JE=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",zi,e),H.removeEventListener("test",zi,e)}catch{}return t}();function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};function yr(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xf){e:{try{_c(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yr.Z.h.call(this)}}Ue(yr,Ke);var QE={2:"touch",3:"pen",4:"mouse"};yr.prototype.h=function(){yr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vr="closure_listenable_"+(1e6*Math.random()|0),ZE=0;function eT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++ZE,this.ca=this.fa=!1}function Yi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ji(t){this.src=t,this.g={},this.h=0}Ji.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ac(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new eT(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Sc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Vf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Yi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ac(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Rc="closure_lm_"+(1e6*Math.random()|0),Cc={};function Qf(t,e,n,s,r){if(s&&s.once)return ed(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qf(t,e[i],n,s,r);return null}return n=Pc(n),t&&t[vr]?t.N(e,n,mr(s)?!!s.capture:!!s,r):Zf(t,e,n,!1,s,r)}function Zf(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=mr(r)?!!r.capture:!!r,a=Nc(t);if(a||(t[Rc]=a=new Ji(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=tT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)JE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(nd(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tT(){function t(n){return e.call(t.src,t.listener,n)}var e=nT;return t}function ed(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ed(t,e[i],n,s,r);return null}return n=Pc(n),t&&t[vr]?t.O(e,n,mr(s)?!!s.capture:!!s,r):Zf(t,e,n,!0,s,r)}function td(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)td(t,e[i],n,s,r);else s=mr(s)?!!s.capture:!!s,n=Pc(n),t&&t[vr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ac(i,n,s,r),-1<n&&(Yi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ac(e,n,s,r)),(n=-1<t?e[t]:null)&&kc(n))}function kc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[vr])Sc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(nd(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Nc(e))?(Sc(n,t),n.h==0&&(n.src=null,e[Rc]=null)):Yi(t)}}}function nd(t){return t in Cc?Cc[t]:Cc[t]="on"+t}function nT(t,e){if(t.ca)t=!0;else{e=new yr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&kc(t),t=n.call(s,e)}return t}function Nc(t){return t=t[Rc],t instanceof Ji?t:null}var Oc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pc(t){return typeof t=="function"?t:(t[Oc]||(t[Oc]=function(e){return t.handleEvent(e)}),t[Oc])}function De(){on.call(this),this.i=new Ji(this),this.P=this,this.I=null}Ue(De,on);De.prototype[vr]=!0;De.prototype.removeEventListener=function(t,e,n,s){td(this,t,e,n,s)};function Fe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var r=e;e=new Ke(s,t),Wf(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Qi(o,s,!0,e)&&r}if(o=e.g=t,r=Qi(o,s,!0,e)&&r,r=Qi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Qi(o,s,!1,e)&&r}De.prototype.M=function(){if(De.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Yi(n[s]);delete t.g[e],t.h--}}this.I=null};De.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};De.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Qi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Sc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Dc=H.JSON.stringify;function sT(){var t=rd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rT{constructor(){this.h=this.g=null}add(e,n){const s=sd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var sd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new iT,t=>t.reset());class iT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oT(t){H.setTimeout(()=>{throw t},0)}function xc(t,e){Mc||aT(),Lc||(Mc(),Lc=!0),rd.add(t,e)}var Mc;function aT(){var t=H.Promise.resolve(void 0);Mc=function(){t.then(cT)}}var Lc=!1,rd=new rT;function cT(){for(var t;t=sT();){try{t.h.call(t.g)}catch(n){oT(n)}var e=sd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lc=!1}function Zi(t,e){De.call(this),this.h=t||1,this.g=e||H,this.j=Le(this.kb,this),this.l=Date.now()}Ue(Zi,De);D=Zi.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Fe(this,"tick"),this.da&&(Uc(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){Zi.Z.M.call(this),Uc(this),delete this.g};function Fc(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function id(t){t.g=Fc(()=>{t.g=null,t.i&&(t.i=!1,id(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lT extends on{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:id(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _r(t){on.call(this),this.h=t,this.g={}}Ue(_r,on);var od=[];function ad(t,e,n,s){Array.isArray(n)||(n&&(od[0]=n.toString()),n=od);for(var r=0;r<n.length;r++){var i=Qf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function cd(t){vc(t.g,function(e,n){this.g.hasOwnProperty(n)&&kc(e)},t),t.g={}}_r.prototype.M=function(){_r.Z.M.call(this),cd(this)};_r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function eo(){this.g=!0}eo.prototype.Aa=function(){this.g=!1};function uT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function hT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function As(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dT(t,n)+(s?" "+s:"")})}function fT(t,e){t.info(function(){return"TIMEOUT: "+e})}eo.prototype.info=function(){};function dT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Dc(n)}catch{return e}}var xn={},ld=null;function to(){return ld=ld||new De}xn.Ma="serverreachability";function ud(t){Ke.call(this,xn.Ma,t)}Ue(ud,Ke);function wr(t){const e=to();Fe(e,new ud(e,t))}xn.STAT_EVENT="statevent";function hd(t,e){Ke.call(this,xn.STAT_EVENT,t),this.stat=e}Ue(hd,Ke);function Ze(t){const e=to();Fe(e,new hd(e,t))}xn.Na="timingevent";function fd(t,e){Ke.call(this,xn.Na,t),this.size=e}Ue(fd,Ke);function Er(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var no={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dd={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Vc(){}Vc.prototype.h=null;function pd(t){return t.h||(t.h=t.i())}function gd(){}var Tr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function $c(){Ke.call(this,"d")}Ue($c,Ke);function Bc(){Ke.call(this,"c")}Ue(Bc,Ke);var qc;function so(){}Ue(so,Vc);so.prototype.g=function(){return new XMLHttpRequest};so.prototype.i=function(){return{}};qc=new so;function Ir(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new _r(this),this.P=pT,t=wc?125:void 0,this.W=new Zi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new md}function md(){this.i=null,this.g="",this.h=!1}var pT=45e3,jc={},ro={};D=Ir.prototype;D.setTimeout=function(t){this.P=t};function Hc(t,e,n){t.K=1,t.v=lo($t(e)),t.s=n,t.U=!0,yd(t,null)}function yd(t,e){t.F=Date.now(),br(t),t.A=$t(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Ad(n.h,"t",s),t.C=0,n=t.l.H,t.h=new md,t.g=Xd(t.l,n?e:null,!t.s),0<t.O&&(t.L=new lT(Le(t.Ia,t,t.g),t.O)),ad(t.V,t.g,"readystatechange",t.gb),e=t.H?Kf(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),wr(1),uT(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&Bt(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const u=Bt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||wc||this.g&&(this.h.h||this.g.ga()||Fd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?wr(3):wr(2)),io(this);var n=this.g.ba();this.N=n;t:if(vd(this)){var s=Fd(this.g);t="";var r=s.length,i=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Mn(this),Sr(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,hT(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gi(a)){var l=a;break t}}l=null}if(n=l)As(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Kc(this,n);else{this.i=!1,this.o=3,Ze(12),Mn(this),Sr(this);break e}}this.U?(_d(this,u,o),wc&&this.i&&u==3&&(ad(this.V,this.W,"tick",this.fb),this.W.start())):(As(this.j,this.m,o,null),Kc(this,o)),u==4&&Mn(this),this.i&&!this.I&&(u==4?Kd(this.l,this):(this.i=!1,br(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),Mn(this),Sr(this)}}}catch{}finally{}};function vd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function _d(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=gT(t,n),r==ro){e==4&&(t.o=4,Ze(14),s=!1),As(t.j,t.m,null,"[Incomplete Response]");break}else if(r==jc){t.o=4,Ze(15),As(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else As(t.j,t.m,r,null),Kc(t,r);vd(t)&&r!=ro&&r!=jc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),nl(e),e.L=!0,Ze(11))):(As(t.j,t.m,n,"[Invalid Chunked Response]"),Mn(t),Sr(t))}D.fb=function(){if(this.g){var t=Bt(this.g),e=this.g.ga();this.C<e.length&&(io(this),_d(this,t,e),this.i&&t!=4&&br(this))}};function gT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ro:(n=Number(e.substring(n,s)),isNaN(n)?jc:(s+=1,s+n>e.length?ro:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,Mn(this)};function br(t){t.Y=Date.now()+t.P,wd(t,t.P)}function wd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Er(Le(t.eb,t),e)}function io(t){t.B&&(H.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(fT(this.j,this.A),this.K!=2&&(wr(3),Ze(17)),Mn(this),this.o=2,Sr(this)):wd(this,this.Y-t)};function Sr(t){t.l.G==0||t.I||Kd(t.l,t)}function Mn(t){io(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Uc(t.W),cd(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Kc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Gc(n.i,t))){if(n.I=t.N,!t.J&&Gc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)mo(n),po(n);else break e;tl(n),Ze(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Er(Le(n.ab,n),6e3));if(1>=kd(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Fn(n,11)}else if((t.J||n.g==t)&&mo(n),!Gi(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(Je(m,"spdy")||Je(m,"quic")||Je(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Xc(i,i.h),i.h=null))}if(s.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.sa=E,Te(s.F,s.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Gd(s,s.H?s.la:null,s.W),o.J){Nd(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(io(a),br(a)),s.g=o}else jd(s);0<n.l.length&&go(n)}else l[0]!="stop"&&l[0]!="close"||Fn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Fn(n,7):Zc(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}wr(4)}catch{}}function mT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(pc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function zc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pc(t)||typeof t=="string")$f(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(pc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=mT(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Rs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Rs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}D=Rs.prototype;D.R=function(){Wc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return Wc(this),this.g.concat()};function Wc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Ln(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Ln(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}D.get=function(t,e){return Ln(this.h,t)?this.h[t]:e};D.set=function(t,e){Ln(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Ed=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function yT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Un(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Un){this.g=e!==void 0?e:t.g,oo(this,t.j),this.s=t.s,ao(this,t.i),co(this,t.m),this.l=t.l,e=t.h;var n=new Cr;n.i=e.i,e.g&&(n.g=new Rs(e.g),n.h=e.h),Td(this,n),this.o=t.o}else t&&(n=String(t).match(Ed))?(this.g=!!e,oo(this,n[1]||"",!0),this.s=Ar(n[2]||""),ao(this,n[3]||"",!0),co(this,n[4]),this.l=Ar(n[5]||"",!0),Td(this,n[6]||"",!0),this.o=Ar(n[7]||"")):(this.g=!!e,this.h=new Cr(null,this.g))}Un.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rr(e,Id,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rr(e,Id,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Rr(n,n.charAt(0)=="/"?TT:ET,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rr(n,bT)),t.join("")};function $t(t){return new Un(t)}function oo(t,e,n){t.j=n?Ar(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ao(t,e,n){t.i=n?Ar(e,!0):e}function co(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Td(t,e,n){e instanceof Cr?(t.h=e,ST(t.h,t.g)):(n||(e=Rr(e,IT)),t.h=new Cr(e,t.g))}function Te(t,e,n){t.h.set(e,n)}function lo(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function vT(t){return t instanceof Un?$t(t):new Un(t,void 0)}function _T(t,e,n,s){var r=new Un(null,void 0);return t&&oo(r,t),e&&ao(r,e),n&&co(r,n),s&&(r.l=s),r}function Ar(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Id=/[#\/\?@]/g,ET=/[#\?:]/g,TT=/[#\?]/g,IT=/[#\?@]/g,bT=/#/g;function Cr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function an(t){t.g||(t.g=new Rs,t.h=0,t.i&&yT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Cr.prototype;D.add=function(t,e){an(this),this.i=null,t=Cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bd(t,e){an(t),e=Cs(t,e),Ln(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ln(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Wc(t)))}function Sd(t,e){return an(t),e=Cs(t,e),Ln(t.g.h,e)}D.forEach=function(t,e){an(this),this.g.forEach(function(n,s){$f(n,function(r){t.call(e,r,s,this)},this)},this)};D.T=function(){an(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};D.R=function(t){an(this);var e=[];if(typeof t=="string")Sd(this,t)&&(e=Bf(e,this.g.get(Cs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Bf(e,t[n])}return e};D.set=function(t,e){return an(this),this.i=null,t=Cs(this,t),Sd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Ad(t,e,n){bd(t,e),0<n.length&&(t.i=null,t.g.set(Cs(t,e),mc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ST(t,e){e&&!t.j&&(an(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(bd(this,s),Ad(this,r,n))},t)),t.j=e}var AT=class{constructor(t,e){this.h=t,this.g=e}};function Rd(t){this.l=t||RT,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var RT=10;function Cd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kd(t){return t.h?1:t.g?t.g.size:0}function Gc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xc(t,e){t.g?t.g.add(e):t.h=e}function Nd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Rd.prototype.cancel=function(){if(this.i=Od(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Od(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return mc(t.i)}function Yc(){}Yc.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};Yc.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function CT(){this.g=new Yc}function kT(t,e,n){const s=n||"";try{zc(t,function(r,i){let o=r;mr(r)&&(o=Dc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function NT(t,e){const n=new eo;if(H.Image){const s=new Image;s.onload=Wi(uo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Wi(uo,n,s,"TestLoadImage: error",!1,e),s.onabort=Wi(uo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Wi(uo,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function uo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function kr(t){this.l=t.$b||null,this.j=t.ib||!1}Ue(kr,Vc);kr.prototype.g=function(){return new ho(this.l,this.j)};kr.prototype.i=function(t){return function(){return t}}({});function ho(t,e){De.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Jc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(ho,De);var Jc=0;D=ho.prototype;D.open=function(t,e){if(this.readyState!=Jc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Or(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nr(this)),this.readyState=Jc};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof H.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pd(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Pd(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nr(this):Or(this),this.readyState==3&&Pd(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,Nr(this))};D.Ta=function(t){this.g&&(this.response=t,Nr(this))};D.ha=function(){this.g&&Nr(this)};function Nr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Or(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Or(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OT=H.JSON.parse;function Ae(t){De.call(this),this.headers=new Rs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dd,this.K=this.L=!1}Ue(Ae,De);var Dd="",PT=/^https?$/i,DT=["POST","PUT"];D=Ae.prototype;D.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qc.g(),this.C=this.u?pd(this.u):pd(qc),this.g.onreadystatechange=Le(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){xd(this,i);return}t=n||"";const r=new Rs(this.headers);s&&zc(s,function(i,o){r.set(o,i)}),s=HE(r.T()),n=H.FormData&&t instanceof H.FormData,!(0<=Vf(DT,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ud(this),0<this.B&&((this.K=xT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.pa,this)):this.A=Fc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){xd(this,i)}};function xT(t){return Ss&&XE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function MT(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof dc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function xd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Md(t),fo(t)}function Md(t){t.D||(t.D=!0,Fe(t,"complete"),Fe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),fo(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fo(this,!0)),Ae.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Ld(this):this.cb())};D.cb=function(){Ld(this)};function Ld(t){if(t.h&&typeof dc!="undefined"&&(!t.C[1]||Bt(t)!=4||t.ba()!=2)){if(t.v&&Bt(t)==4)Fc(t.Fa,0,t);else if(Fe(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Ed)[1]||null;if(!r&&H.self&&H.self.location){var i=H.self.location.protocol;r=i.substr(0,i.length-1)}s=!PT.test(r?r.toLowerCase():"")}n=s}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var o=2<Bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Md(t)}}finally{fo(t)}}}}function fo(t,e){if(t.g){Ud(t);const n=t.g,s=t.C[0]?zi:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ud(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function Bt(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OT(e)}};function Fd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Dd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function LT(t){let e="";return vc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Qc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=LT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Pr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Vd(t){this.za=0,this.l=[],this.h=new eo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Pr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Pr("baseRetryDelayMs",5e3,t),this.$a=Pr("retryDelaySeedMs",1e4,t),this.Ya=Pr("forwardChannelMaxRetries",2,t),this.ra=Pr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Rd(t&&t.concurrentRequestLimit),this.Ca=new CT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=Vd.prototype;D.ma=8;D.G=1;function Zc(t){if($d(t),t.G==3){var e=t.V++,n=$t(t.F);Te(n,"SID",t.J),Te(n,"RID",e),Te(n,"TYPE","terminate"),Dr(t,n),e=new Ir(t,t.h,e,void 0),e.K=2,e.v=lo($t(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xd(e.l,null),e.g.ea(e.v)),e.F=Date.now(),br(e)}Wd(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function po(t){t.g&&(nl(t),t.g.cancel(),t.g=null)}function $d(t){po(t),t.u&&(H.clearTimeout(t.u),t.u=null),mo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function el(t,e){t.l.push(new AT(t.Za++,e)),t.G==3&&go(t)}function go(t){Cd(t.i)||t.m||(t.m=!0,xc(t.Ha,t),t.C=0)}function UT(t,e){return kd(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Er(Le(t.Ha,t,e),zd(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ir(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Kf(i),Wf(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=qd(this,r,e),n=$t(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),Dr(this,n),this.o&&i&&Qc(n,this.o,i),Xc(this.i,r),this.Ra&&Te(n,"TYPE","init"),this.ja?(Te(n,"$req",e),Te(n,"SID","null"),r.$=!0,Hc(r,n,null)):Hc(r,n,e),this.G=2}}else this.G==3&&(t?Bd(this,t):this.l.length==0||Cd(this.i)||Bd(this))};function Bd(t,e){var n;e?n=e.m:n=t.V++;const s=$t(t.F);Te(s,"SID",t.J),Te(s,"RID",n),Te(s,"AID",t.U),Dr(t,s),t.o&&t.s&&Qc(s,t.o,t.s),n=new Ir(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=qd(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Xc(t.i,n),Hc(n,s,e)}function Dr(t,e){t.j&&zc({},function(n,s){Te(e,s,n)})}function qd(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Le(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{kT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function jd(t){t.g||t.u||(t.Y=1,xc(t.Ga,t),t.A=0)}function tl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Er(Le(t.Ga,t),zd(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,Hd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Er(Le(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),po(this),Hd(this))};function nl(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Hd(t){t.g=new Ir(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=$t(t.oa);Te(e,"RID","rpc"),Te(e,"SID",t.J),Te(e,"CI",t.N?"0":"1"),Te(e,"AID",t.U),Dr(t,e),Te(e,"TYPE","xmlhttp"),t.o&&t.s&&Qc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=lo($t(e)),n.s=null,n.U=!0,yd(n,t)}D.ab=function(){this.v!=null&&(this.v=null,po(this),tl(this),Ze(19))};function mo(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function Kd(t,e){var n=null;if(t.g==e){mo(t),nl(t),t.g=null;var s=2}else if(Gc(t.i,e))n=e.D,Nd(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=to(),Fe(s,new fd(s,n,e,r)),go(t)}else jd(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&UT(t,e)||s==2&&tl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Fn(t,5);break;case 4:Fn(t,10);break;case 3:Fn(t,6);break;default:Fn(t,2)}}}function zd(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Fn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Le(t.jb,t);n||(n=new Un("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||oo(n,"https"),lo(n)),NT(n.toString(),s)}else Ze(2);t.G=0,t.j&&t.j.va(e),Wd(t),$d(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))};function Wd(t){t.G=0,t.I=-1,t.j&&((Od(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,mc(t.l),t.l.length=0),t.j.ua())}function Gd(t,e,n){let s=vT(n);if(s.i!="")e&&ao(s,e+"."+s.i),co(s,s.m);else{const r=H.location;s=_T(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&vc(t.aa,function(r,i){Te(s,i,r)}),e=t.D,n=t.sa,e&&n&&Te(s,e,n),Te(s,"VER",t.ma),Dr(t,s),s}function Xd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ae(new kr({ib:!0})):new Ae(t.qa),e.L=t.H,e}function Yd(){}D=Yd.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function yo(){if(Ss&&!(10<=Number(YE)))throw Error("Environmental error: no available transport.")}yo.prototype.g=function(t,e){return new ht(t,e)};function ht(t,e){De.call(this),this.g=new Vd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Gi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ks(this)}Ue(ht,De);ht.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),xc(Le(t.hb,t,e))),Ze(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Gd(t,null,t.W),go(t)};ht.prototype.close=function(){Zc(this.g)};ht.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,el(this.g,e)}else this.v?(e={},e.__data__=Dc(t),el(this.g,e)):el(this.g,t)};ht.prototype.M=function(){this.g.j=null,delete this.j,Zc(this.g),delete this.g,ht.Z.M.call(this)};function Jd(t){$c.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(Jd,$c);function Qd(){Bc.call(this),this.status=1}Ue(Qd,Bc);function ks(t){this.g=t}Ue(ks,Yd);ks.prototype.xa=function(){Fe(this.g,"a")};ks.prototype.wa=function(t){Fe(this.g,new Jd(t))};ks.prototype.va=function(t){Fe(this.g,new Qd(t))};ks.prototype.ua=function(){Fe(this.g,"b")};yo.prototype.createWebChannel=yo.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;no.NO_ERROR=0;no.TIMEOUT=8;no.HTTP_ERROR=6;dd.COMPLETE="complete";gd.EventType=Tr;Tr.OPEN="a";Tr.CLOSE="b";Tr.ERROR="c";Tr.MESSAGE="d";De.prototype.listen=De.prototype.N;Ae.prototype.listenOnce=Ae.prototype.O;Ae.prototype.getLastError=Ae.prototype.La;Ae.prototype.getLastErrorCode=Ae.prototype.Da;Ae.prototype.getStatus=Ae.prototype.ba;Ae.prototype.getResponseJson=Ae.prototype.Qa;Ae.prototype.getResponseText=Ae.prototype.ga;Ae.prototype.send=Ae.prototype.ea;var FT=function(){return new yo},VT=function(){return to()},sl=no,$T=dd,BT=xn,Zd={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},qT=kr,vo=gd,jT=Ae;const ep="@firebase/firestore";/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let Ns="9.6.3";/**
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
 */const Vn=new cc("@firebase/firestore");function tp(){return Vn.logLevel}function $(t,...e){if(Vn.logLevel<=oe.DEBUG){const n=e.map(rl);Vn.debug(`Firestore (${Ns}): ${t}`,...n)}}function cn(t,...e){if(Vn.logLevel<=oe.ERROR){const n=e.map(rl);Vn.error(`Firestore (${Ns}): ${t}`,...n)}}function np(t,...e){if(Vn.logLevel<=oe.WARN){const n=e.map(rl);Vn.warn(`Firestore (${Ns}): ${t}`,...n)}}function rl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw cn(e),new Error(e)}function ve(t,e){t||X()}function Y(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class HT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class zT{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ln,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new HT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new st(e)}}class WT{constructor(e,n,s){this.type="FirstParty",this.user=st.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class GT{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new WT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YT{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=r=>{e.enqueueRetryable(()=>(i=>(i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`),n(i.token)))(r))};const s=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),new XT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class il{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.p(s),this.T=s=>n.writeSequenceNumber(s))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function JT(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */il.I=-1;class sp{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=JT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function le(t,e){return t<e?-1:t>e?1:0}function Os(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ft(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new ft(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function rp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $n(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ip(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xr{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends xr{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new x(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const QT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends xr{construct(e,n,s){return new rt(e,n,s)}static isValidIdentifier(e){return QT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new x(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new x(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
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
 */class Mr{constructor(e){this.fields=e,e.sort(rt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ve(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const ZT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function un(t){if(ve(!!t),typeof t=="string"){let e=0;const n=ZT.exec(t);if(ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ps(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
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
 */function op(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ap(t){const e=t.mapValue.fields.__previous_value__;return op(e)?ap(e):e}function Lr(t){const e=un(t.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */function Ds(t){return t==null}function _o(t){return t===0&&1/t==-1/0}function eI(t){return typeof t=="number"&&Number.isInteger(t)&&!_o(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ie.fromString(e))}static fromName(e){return new j(Ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ie(e.slice()))}}/**
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
 */function Bn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?op(t)?4:10:X()}function Pt(t,e){if(t===e)return!0;const n=Bn(t);if(n!==Bn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lr(t).isEqual(Lr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=un(s.timestampValue),o=un(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ps(s.bytesValue).isEqual(Ps(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Re(s.geoPointValue.latitude)===Re(r.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Re(s.integerValue)===Re(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Re(s.doubleValue),o=Re(r.doubleValue);return i===o?_o(i)===_o(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(rp(i)!==rp(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Pt(i[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Ur(t,e){return(t.values||[]).find(n=>Pt(n,e))!==void 0}function xs(t,e){if(t===e)return 0;const n=Bn(t),s=Bn(e);if(n!==s)return le(n,s);switch(n){case 0:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Re(r.integerValue||r.doubleValue),a=Re(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return cp(t.timestampValue,e.timestampValue);case 4:return cp(Lr(t),Lr(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ps(r),a=Ps(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=le(o[c],a[c]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=le(Re(r.latitude),Re(i.latitude));return o!==0?o:le(Re(r.longitude),Re(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=xs(o[c],a[c]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=le(a[u],l[u]);if(h!==0)return h;const f=xs(o[a[u]],c[l[u]]);if(f!==0)return f}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function cp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=un(t),s=un(e),r=le(n.seconds,s.seconds);return r!==0?r:le(n.nanos,s.nanos)}function ol(t){return al(t)}function al(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=un(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ps(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=al(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${al(s.fields[a])}`;return i+"}"}(t.mapValue):X();var e,n}function lp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cl(t){return!!t&&"integerValue"in t}function ll(t){return!!t&&"arrayValue"in t}function up(t){return!!t&&"nullValue"in t}function hp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wo(t){return!!t&&"mapValue"in t}function Fr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $n(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Fr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fr(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fr(n)}setAll(e){let n=rt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Fr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];wo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){$n(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new dt(Fr(this.value))}}function fp(t){const e=[];return $n(t.fields,(n,s)=>{const r=new rt([n]);if(wo(s)){const i=fp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Mr(e)}/**
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
 */class ze{constructor(e,n,s,r,i){this.key=e,this.documentType=n,this.version=s,this.data=r,this.documentState=i}static newInvalidDocument(e){return new ze(e,0,re.min(),dt.empty(),0)}static newFoundDocument(e,n,s){return new ze(e,1,n,s,0)}static newNoDocument(e,n){return new ze(e,2,n,dt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function dp(t,e=null,n=[],s=[],r=null,i=null,o=null){return new tI(t,e,n,s,r,i,o)}function ul(t){const e=Y(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>sI(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ds(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Eo(e.startAt)),e.endAt&&(n+="|ub:",n+=Eo(e.endAt)),e.R=n}return e.R}function nI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ol(s.value)}`;var s}).join(", ")}]`),Ds(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Eo(t.startAt)),t.endAt&&(e+=", endAt: "+Eo(t.endAt)),`Target(${e})`}function hl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!hI(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Pt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mp(t.startAt,e.startAt)&&mp(t.endAt,e.endAt)}function fl(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class et extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,s):new rI(e,n,s):n==="array-contains"?new aI(e,s):n==="in"?new cI(e,s):n==="not-in"?new lI(e,s):n==="array-contains-any"?new uI(e,s):new et(e,n,s)}static P(e,n,s){return n==="in"?new iI(e,s):new oI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(xs(n,this.value)):n!==null&&Bn(this.value)===Bn(n)&&this.v(xs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function sI(t){return t.field.canonicalString()+t.op.toString()+ol(t.value)}class rI extends et{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.v(n)}}class iI extends et{constructor(e,n){super(e,"in",n),this.keys=pp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oI extends et{constructor(e,n){super(e,"not-in",n),this.keys=pp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class aI extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ll(n)&&Ur(n.arrayValue,this.value)}}class cI extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ur(this.value.arrayValue,n)}}class lI extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ur(this.value.arrayValue,n)}}class uI extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ll(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ur(this.value.arrayValue,s))}}class dl{constructor(e,n){this.position=e,this.before=n}}function Eo(t){return`${t.before?"b":"a"}:${t.position.map(e=>ol(e)).join(",")}`}class Ms{constructor(e,n="asc"){this.field=e,this.dir=n}}function hI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function gp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=xs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return t.before?s<=0:s<0}function mp(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ls{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function fI(t,e,n,s,r,i,o,a){return new Ls(t,e,n,s,r,i,o,a)}function pl(t){return new Ls(t)}function To(t){return!Ds(t.limit)&&t.limitType==="F"}function Io(t){return!Ds(t.limit)&&t.limitType==="L"}function gl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ml(t){for(const e of t.filters)if(e.V())return e.field;return null}function yp(t){return t.collectionGroup!==null}function Vr(t){const e=Y(t);if(e.S===null){e.S=[];const n=ml(e),s=gl(e);if(n!==null&&s===null)n.isKeyField()||e.S.push(new Ms(n)),e.S.push(new Ms(rt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.S.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Ms(rt.keyField(),i))}}}return e.S}function qn(t){const e=Y(t);if(!e.D)if(e.limitType==="F")e.D=dp(e.path,e.collectionGroup,Vr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Vr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ms(i.field,o))}const s=e.endAt?new dl(e.endAt.position,!e.endAt.before):null,r=e.startAt?new dl(e.startAt.position,!e.startAt.before):null;e.D=dp(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.D}function dI(t,e,n){return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bo(t,e){return hl(qn(t),qn(e))&&t.limitType===e.limitType}function vp(t){return`${ul(qn(t))}|lt:${t.limitType}`}function yl(t){return`Query(target=${nI(qn(t))}; limitType=${t.limitType})`}function So(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!gp(n.startAt,Vr(n),s)||n.endAt&&gp(n.endAt,Vr(n),s))}(t,e)}function _p(t){return(e,n)=>{let s=!1;for(const r of Vr(t)){const i=pI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function pI(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?xs(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
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
 */function wp(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_o(e)?"-0":e}}function Ep(t){return{integerValue:""+t}}function gI(t,e){return eI(e)?Ep(e):wp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ao{constructor(){this._=void 0}}function mI(t,e,n){return t instanceof $r?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Br?Ip(t,e):t instanceof qr?bp(t,e):function(s,r){const i=Tp(s,r),o=Sp(i)+Sp(s.N);return cl(i)&&cl(s.N)?Ep(o):wp(s.k,o)}(t,e)}function yI(t,e,n){return t instanceof Br?Ip(t,e):t instanceof qr?bp(t,e):n}function Tp(t,e){return t instanceof Ro?cl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class $r extends Ao{}class Br extends Ao{constructor(e){super(),this.elements=e}}function Ip(t,e){const n=Ap(e);for(const s of t.elements)n.some(r=>Pt(r,s))||n.push(s);return{arrayValue:{values:n}}}class qr extends Ao{constructor(e){super(),this.elements=e}}function bp(t,e){let n=Ap(e);for(const s of t.elements)n=n.filter(r=>!Pt(r,s));return{arrayValue:{values:n}}}class Ro extends Ao{constructor(e,n){super(),this.k=e,this.N=n}}function Sp(t){return Re(t.integerValue||t.doubleValue)}function Ap(t){return ll(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class vI{constructor(e,n){this.field=e,this.transform=n}}function _I(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Br&&s instanceof Br||n instanceof qr&&s instanceof qr?Os(n.elements,s.elements,Pt):n instanceof Ro&&s instanceof Ro?Pt(n.N,s.N):n instanceof $r&&s instanceof $r}(t.transform,e.transform)}class wI{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ko{}function EI(t,e,n){t instanceof No?function(s,r,i){const o=s.value.clone(),a=Np(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof jn?function(s,r,i){if(!Co(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Np(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(kp(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function vl(t,e,n){t instanceof No?function(s,r,i){if(!Co(s.precondition,r))return;const o=s.value.clone(),a=Op(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Cp(r),o).setHasLocalMutations()}(t,e,n):t instanceof jn?function(s,r,i){if(!Co(s.precondition,r))return;const o=Op(s.fieldTransforms,i,r),a=r.data;a.setAll(kp(s)),a.setAll(o),r.convertToFoundDocument(Cp(r),a).setHasLocalMutations()}(t,e,n):function(s,r){Co(s.precondition,r)&&r.convertToNoDocument(re.min())}(t,e)}function TI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Tp(s.transform,r||null);i!=null&&(n==null&&(n=dt.empty()),n.set(s.field,i))}return n||null}function Rp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Os(n,s,(r,i)=>_I(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Cp(t){return t.isFoundDocument()?t.version:re.min()}class No extends ko{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class jn extends ko{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function kp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Np(t,e,n){const s=new Map;ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,yI(o,a,n[r]))}return s}function Op(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,mI(i,o,e))}return s}class Pp extends ko{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class II extends ko{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class bI{constructor(e){this.count=e}}/**
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
 */var Ce,te;function SI(t){switch(t){default:return X();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Dp(t){if(t===void 0)return cn("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ce.OK:return _.OK;case Ce.CANCELLED:return _.CANCELLED;case Ce.UNKNOWN:return _.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return _.INTERNAL;case Ce.UNAVAILABLE:return _.UNAVAILABLE;case Ce.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ce.NOT_FOUND:return _.NOT_FOUND;case Ce.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ce.ABORTED:return _.ABORTED;case Ce.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ce.DATA_LOSS:return _.DATA_LOSS;default:return X()}}(te=Ce||(Ce={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class We{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}}class Oo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:$e.RED,this.left=r!=null?r:$e.EMPTY,this.right=i!=null?i:$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new $e(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,s,r){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xp(this.data.getIterator())}getIteratorFrom(e){return new xp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class xp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const AI=new We(j.comparator);function Hn(){return AI}const RI=new We(j.comparator);function _l(){return RI}const CI=new We(j.comparator);function kI(){return CI}const NI=new Be(j.comparator);function we(...t){let e=NI;for(const n of t)e=e.add(n);return e}const OI=new Be(le);function Mp(){return OI}/**
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
 */class Po{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,jr.createSynthesizedTargetChangeForCurrentChange(e,n)),new Po(re.min(),s,Mp(),Hn(),we())}}class jr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new jr(Ve.EMPTY_BYTE_STRING,n,we(),we(),we())}}/**
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
 */class Do{constructor(e,n,s,r){this.$=e,this.removedTargetIds=n,this.key=s,this.O=r}}class Lp{constructor(e,n){this.targetId=e,this.M=n}}class Up{constructor(e,n,s=Ve.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Fp{constructor(){this.F=0,this.L=$p(),this.B=Ve.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=we(),n=we(),s=we();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:X()}}),new jr(this.B,this.U,e,n,s)}H(){this.q=!1,this.L=$p()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class PI{constructor(e){this.et=e,this.nt=new Map,this.st=Hn(),this.it=Vp(),this.rt=new Be(le)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const s=this.ht(n);switch(e.state){case 0:this.lt(n)&&s.W(e.resumeToken);break;case 1:s.Z(),s.K||s.H(),s.W(e.resumeToken);break;case 2:s.Z(),s.K||this.removeTarget(n);break;case 3:this.lt(n)&&(s.tt(),s.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),s.W(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((s,r)=>{this.lt(r)&&n(r)})}dt(e){const n=e.targetId,s=e.M.count,r=this.wt(n);if(r){const i=r.target;if(fl(i))if(s===0){const o=new j(i.path);this.at(n,o,ze.newNoDocument(o,re.min()))}else ve(s===1);else this._t(n)!==s&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&fl(a.target)){const c=new j(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.at(o,c,ze.newNoDocument(c,e))}i.j&&(n.set(o,i.G()),i.H())}});let s=we();this.it.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))});const r=new Po(e,n,this.rt,this.st,s);return this.st=Hn(),this.it=Vp(),this.rt=new Be(le),r}ct(e,n){if(!this.lt(e))return;const s=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,s),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,s){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,n)?r.J(n,1):r.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),s&&(this.st=this.st.insert(n,s))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new Fp,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new Be(le),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Fp),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function Vp(){return new We(j.comparator)}function $p(){return new We(j.comparator)}/**
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
 */const DI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class MI{constructor(e,n){this.databaseId=e,this.C=n}}function xo(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bp(t,e){return t.C?e.toBase64():e.toUint8Array()}function LI(t,e){return xo(t,e.toTimestamp())}function qt(t){return ve(!!t),re.fromTimestamp(function(e){const n=un(e);return new ft(n.seconds,n.nanos)}(t))}function wl(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function qp(t){const e=Ie.fromString(t);return ve(Gp(e)),e}function El(t,e){return wl(t.databaseId,e.path)}function Tl(t,e){const n=qp(e);if(n.get(1)!==t.databaseId.projectId)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(jp(n))}function Il(t,e){return wl(t.databaseId,e)}function UI(t){const e=qp(t);return e.length===4?Ie.emptyPath():jp(e)}function bl(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jp(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hp(t,e,n){return{name:El(t,e),fields:n.value.mapValue.fields}}function FI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.C?(ve(l===void 0||typeof l=="string"),Ve.fromBase64String(l||"")):(ve(l===void 0||l instanceof Uint8Array),Ve.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:Dp(c.code);return new x(l,c.message||"")}(o);n=new Up(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Tl(t,s.document.name),i=qt(s.document.updateTime),o=new dt({mapValue:{fields:s.document.fields}}),a=ze.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Do(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Tl(t,s.document),i=s.readTime?qt(s.readTime):re.min(),o=ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Do([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Tl(t,s.document),i=s.removedTargetIds||[];n=new Do([],i,r,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new bI(r),o=s.targetId;n=new Lp(o,i)}}return n}function VI(t,e){let n;if(e instanceof No)n={update:Hp(t,e.key,e.value)};else if(e instanceof Pp)n={delete:El(t,e.key)};else if(e instanceof jn)n={update:Hp(t,e.key,e.data),updateMask:XI(e.fieldMask)};else{if(!(e instanceof II))return X();n={verify:El(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof $r)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Br)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof qr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ro)return{fieldPath:i.field.canonicalString(),increment:o.N};throw X()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:LI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X()}(t,e.precondition)),n}function $I(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?qt(s.updateTime):qt(r);return i.isEqual(re.min())&&(i=qt(r)),new wI(i,s.transformResults||[])}(n,e))):[]}function BI(t,e){return{documents:[Il(t,e.path)]}}function qI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Il(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Il(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(hp(u.value))return{unaryFilter:{field:Us(u.field),op:"IS_NAN"}};if(up(u.value))return{unaryFilter:{field:Us(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(hp(u.value))return{unaryFilter:{field:Us(u.field),op:"IS_NOT_NAN"}};if(up(u.value))return{unaryFilter:{field:Us(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(u.field),op:zI(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:Us(l.field),direction:KI(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.C||Ds(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=zp(e.startAt)),e.endAt&&(n.structuredQuery.endAt=zp(e.endAt)),n}function jI(t){let e=UI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ve(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Kp(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ms(Fs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ds(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Wp(n.startAt));let l=null;return n.endAt&&(l=Wp(n.endAt)),fI(e,r,o,i,a,"F",c,l)}function HI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kp(t){return t?t.unaryFilter!==void 0?[GI(t)]:t.fieldFilter!==void 0?[WI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Kp(e)).reduce((e,n)=>e.concat(n)):X():[]}function zp(t){return{before:t.before,values:t.position}}function Wp(t){const e=!!t.before,n=t.values||[];return new dl(n,e)}function KI(t){return DI[t]}function zI(t){return xI[t]}function Us(t){return{fieldPath:t.canonicalString()}}function Fs(t){return rt.fromServerFormat(t.fieldPath)}function WI(t){return et.create(Fs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}function GI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Fs(t.unaryFilter.field);return et.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Fs(t.unaryFilter.field);return et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fs(t.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Fs(t.unaryFilter.field);return et.create(r,"!=",{nullValue:"NULL_VALUE"});default:return X()}}function XI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const YI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(r=>r?P.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Hr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class QI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&EI(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&vl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&vl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(re.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,s)=>Rp(n,s))&&Os(this.baseMutations,e.baseMutations,(n,s)=>Rp(n,s))}}class Sl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ve(e.mutations.length===s.length);let r=kI();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Sl(e,n,s,r)}}/**
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
 */class Kn{constructor(e,n,s,r,i=re.min(),o=re.min(),a=Ve.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class ZI{constructor(e){this.Gt=e}}function e0(t){const e=jI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dI(e,e.limit,"L"):e}/**
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
 */class t0{constructor(){this.zt=new n0}addToCollectionParentIndex(e,n){return this.zt.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.zt.getEntries(n))}}class n0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Be(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Be(Ie.comparator)).toArray()}}/**
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
 */class Vs{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Vs(0)}static re(){return new Vs(-1)}}/**
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
 */async function Kr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==YI)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),!0;return!1}forEach(e){$n(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ip(this.inner)}}/**
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
 */class s0{constructor(){this.changes=new zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:re.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:ze.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Xp{constructor(e,n,s){this.Je=e,this.An=n,this.Jt=s}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.bn(e,n,s))}bn(e,n,s){return this.Je.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Pn(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}vn(e,n){return this.Je.getEntries(e,n).next(s=>this.Vn(e,s).next(()=>s))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Pn(n,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Sn(e,n.path):yp(n)?this.Dn(e,n,s):this.Cn(e,n,s)}Sn(e,n){return this.Rn(e,new j(n)).next(s=>{let r=_l();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Dn(e,n,s){const r=n.collectionGroup;let i=_l();return this.Jt.getCollectionParents(e,r).next(o=>P.forEach(o,a=>{const c=function(l,u){return new Ls(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.Cn(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Cn(e,n,s){let r,i;return this.Je.getDocumentsMatchingQuery(e,n,s).next(o=>(r=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Nn(e,i,r).next(a=>{r=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=r.get(u);h==null&&(h=ze.newInvalidDocument(u),r=r.insert(u,h)),vl(l,h,c.localWriteTime),h.isFoundDocument()||(r=r.remove(u))}}))).next(()=>(r.forEach((o,a)=>{So(n,a)||(r=r.remove(o))}),r))}Nn(e,n,s){let r=we();for(const o of n)for(const a of o.mutations)a instanceof jn&&s.get(a.key)===null&&(r=r.add(a.key));let i=s;return this.Je.getEntries(e,r).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
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
 */class Al{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.kn=s,this.xn=r}static $n(e,n){let s=we(),r=we();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Al(e,n.fromCache,s,r)}}/**
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
 */class r0{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(re.min())?this.Fn(e,n):this.Mn.vn(e,r).next(i=>{const o=this.Ln(n,i);return(To(n)||Io(n))&&this.Bn(n.limitType,o,r,s)?this.Fn(e,n):(tp()<=oe.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),yl(n)),this.Mn.getDocumentsMatchingQuery(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,n){let s=new Be(_p(e));return n.forEach((r,i)=>{So(e,i)&&(s=s.add(i))}),s}Bn(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,n){return tp()<=oe.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",yl(n)),this.Mn.getDocumentsMatchingQuery(e,n,re.min())}}/**
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
 */class i0{constructor(e,n,s,r){this.persistence=e,this.Un=n,this.k=r,this.qn=new We(le),this.Kn=new zr(i=>ul(i),hl),this.jn=re.min(),this.An=e.getMutationQueue(s),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Xp(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function o0(t,e,n,s){return new i0(t,e,n,s)}async function Yp(t,e){const n=Y(t);let s=n.An,r=n.Wn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,s=n.persistence.getMutationQueue(e),r=new Xp(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=we();for(const f of a){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of c){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return r.vn(o,h).next(f=>({Gn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.An=s,n.Wn=r,n.Un.On(n.Wn),i}function a0(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=P.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(m=>{const E=c.docVersions.get(g);ve(E!==null),m.version.compareTo(E)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&l.addEntry(m,c.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.An.performConsistencyCheck(s)).next(()=>n.Wn.vn(s,r))})}function Jp(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function c0(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});r=n.qn;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.He.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.He.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Ve.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(u,f),function(g,m,E){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,f,l)&&a.push(n.He.updateTargetData(i,f))});let c=Hn();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(l0(i,o,e.documentUpdates,s,void 0).next(l=>{c=l})),!s.isEqual(re.min())){const l=n.He.getLastRemoteSnapshotVersion(i).next(u=>n.He.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.Wn.Vn(i,c)).next(()=>c)}).then(i=>(n.qn=r,i))}function l0(t,e,n,s,r){let i=we();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=Hn();return n.forEach((c,l)=>{const u=o.get(c),h=(r==null?void 0:r.get(c))||s;l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):$("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function u0(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(s,e)))}function h0(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.He.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):n.He.allocateTargetId(s).next(o=>(r=new Kn(e,o,0,s.currentSequenceNumber),n.He.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qn.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(s.targetId,s),n.Kn.set(e,s.targetId)),s})}async function Rl(t,e,n){const s=Y(t),r=s.qn.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Hr(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qn=s.qn.remove(e),s.Kn.delete(r.target)}function Qp(t,e,n){const s=Y(t);let r=re.min(),i=we();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Y(a),h=u.Kn.get(l);return h!==void 0?P.resolve(u.qn.get(h)):u.He.getTargetData(c,l)}(s,o,qn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Un.getDocumentsMatchingQuery(o,e,n?r:re.min(),n?i:we())).next(a=>({documents:a,zn:i})))}/**
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
 */class f0{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return P.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var s;return this.Xn.set(n.id,{id:(s=n).id,version:s.version,createTime:qt(s.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(s){return{name:s.name,query:e0(s.bundledQuery),readTime:qt(s.readTime)}}(n)),P.resolve()}}/**
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
 */class Cl{constructor(){this.ts=new Be(xe.es),this.ns=new Be(xe.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const s=new xe(e,n);this.ts=this.ts.add(s),this.ns=this.ns.add(s)}rs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.os(new xe(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new j(new Ie([])),s=new xe(n,e),r=new xe(n,e+1),i=[];return this.ns.forEachInRange([s,r],o=>{this.os(o),i.push(o.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new j(new Ie([])),s=new xe(n,e),r=new xe(n,e+1);let i=we();return this.ns.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new xe(e,0),s=this.ts.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class xe{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return j.comparator(e.key,n.key)||le(e.fs,n.fs)}static ss(e,n){return le(e.fs,n.fs)||j.comparator(e.key,n.key)}}/**
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
 */class d0{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new Be(xe.es)}checkEmpty(e){return P.resolve(this.An.length===0)}addMutationBatch(e,n,s,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new QI(i,n,s,r);this.An.push(o);for(const a of r)this.ws=this.ws.add(new xe(a.key,i)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.gs(s),i=r<0?0:r;return P.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return P.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new xe(n,0),r=new xe(n,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([s,r],o=>{const a=this._s(o.fs);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Be(le);return n.forEach(r=>{const i=new xe(r,0),o=new xe(r,Number.POSITIVE_INFINITY);this.ws.forEachInRange([i,o],a=>{s=s.add(a.fs)})}),P.resolve(this.ys(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new xe(new j(i),0);let a=new Be(le);return this.ws.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.fs)),!0)},o),P.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ve(this.ps(n.batchId,"removed")===0),this.An.shift();let s=this.ws;return P.forEach(n.mutations,r=>{const i=new xe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ws=s})}ee(e){}containsKey(e,n){const s=new xe(n,0),r=this.ws.firstAfterOrEqual(s);return P.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,P.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
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
 */class p0{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new We(j.comparator),this.size=0}addEntry(e,n,s){const r=n.key,i=this.docs.get(r),o=i?i.size:0,a=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a,readTime:s}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let s=Hn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ze.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s){let r=Hn();const i=new j(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(s)<=0||So(n,c)&&(r=r.insert(c.key,c.mutableCopy()))}return P.resolve(r)}Es(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new g0(this)}getSize(e){return P.resolve(this.size)}}class g0 extends s0{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.document.isValidDocument()?n.push(this.De.addEntry(e,r.document,this.getReadTime(s))):this.De.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
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
 */class m0{constructor(e){this.persistence=e,this.Is=new zr(n=>ul(n),hl),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.As=0,this.Rs=new Cl,this.targetCount=0,this.bs=Vs.ie()}forEachTarget(e,n){return this.Is.forEach((s,r)=>n(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.As&&(this.As=n),P.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Vs(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.ae(n),P.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Is.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Is.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Rs.rs(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Rs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Rs.ls(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Rs.containsKey(n))}}/**
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
 */class y0{constructor(e,n){this.Ps={},this.Be=new il(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new m0(this),this.Jt=new t0,this.Je=function(s,r){return new p0(s,r)}(this.Jt,s=>this.referenceDelegate.vs(s)),this.k=new ZI(n),this.Ye=new f0(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new d0(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new v0(this.Be.next());return this.referenceDelegate.Vs(),s(r).next(i=>this.referenceDelegate.Ss(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ds(e,n){return P.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class v0 extends JI{constructor(e){super(),this.currentSequenceNumber=e}}class kl{constructor(e){this.persistence=e,this.Cs=new Cl,this.Ns=null}static ks(e){return new kl(e)}get xs(){if(this.Ns)return this.Ns;throw X()}addReference(e,n,s){return this.Cs.addReference(s,n),this.xs.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Cs.removeReference(s,n),this.xs.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),P.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(r=>this.xs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.xs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.xs,s=>{const r=j.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return P.or([()=>P.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class Zp{constructor(){this.activeTargetIds=Mp()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _0{constructor(){this.pi=new Zp,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,s){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Zp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class w0{Ei(e){}shutdown(){}}/**
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
 */class eg{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const E0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class T0{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
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
 */class I0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,s,r,i){const o=this.Ui(e,n);$("RestConnection","Sending: ",o,s);const a={};return this.qi(a,r,i),this.Ki(e,o,a,s).then(c=>($("RestConnection","Received: ",c),c),c=>{throw np("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ji(e,n,s,r,i){return this.Bi(e,n,s,r,i)}qi(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ns,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Ui(e,n){const s=E0[e];return`${this.Fi}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,s,r){return new Promise((i,o)=>{const a=new jT;a.listenOnce($T.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case sl.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),i(l);break;case sl.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new x(_.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(m)>=0?m:_.UNKNOWN}(h.status);o(new x(f,h.message))}else o(new x(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(_.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}Qi(e,n,s){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=FT(),o=VT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new qT({})),this.qi(a.initMessageHeaders,n,s),Pf()||xf()||$w()||Mf()||Bw()||Df()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");$("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new T0({Vi:m=>{h?$("Connection","Not sending because WebChannel is closed:",m):(u||($("Connection","Opening WebChannel transport."),l.open(),u=!0),$("Connection","WebChannel sending:",m),l.send(m))},Si:()=>l.close()}),g=(m,E,v)=>{m.listen(E,S=>{try{v(S)}catch(O){setTimeout(()=>{throw O},0)}})};return g(l,vo.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),g(l,vo.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),f.Oi())}),g(l,vo.EventType.ERROR,m=>{h||(h=!0,np("Connection","WebChannel transport errored:",m),f.Oi(new x(_.UNAVAILABLE,"The operation could not be completed")))}),g(l,vo.EventType.MESSAGE,m=>{var E;if(!h){const v=m.data[0];ve(!!v);const S=v,O=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(O){$("Connection","WebChannel received error:",O);const L=O.status;let U=function(ae){const W=Ce[ae];if(W!==void 0)return Dp(W)}(L),ee=O.message;U===void 0&&(U=_.INTERNAL,ee="Unknown error status: "+L+" with message "+O.message),h=!0,f.Oi(new x(U,ee)),l.close()}else $("Connection","WebChannel received:",v),f.Mi(v)}}),g(o,BT.STAT_EVENT,m=>{m.stat===Zd.PROXY?$("Connection","Detected buffering proxy"):m.stat===Zd.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function Nl(){return typeof document!="undefined"?document:null}/**
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
 */function Mo(t){return new MI(t,!0)}class tg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Me=e,this.timerId=n,this.Wi=s,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),s=Math.max(0,Date.now()-this.Yi),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
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
 */class ng{constructor(e,n,s,r,i,o,a,c){this.Me=e,this.nr=s,this.sr=r,this.ir=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new tg(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(cn(n.toString()),cn("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.rr===n&&this.Ir(s,r)},s=>{e(()=>{const r=new x(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ar(r)})})}Ir(e,n){const s=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{s(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(r=>{s(()=>this.Ar(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class b0 extends ng{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.k=i}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=FI(this.k,e),s=function(r){if(!("targetChange"in r))return re.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?qt(i.readTime):re.min()}(e);return this.listener.br(n,s)}Pr(e){const n={};n.database=bl(this.k),n.addTarget=function(r,i){let o;const a=i.target;return o=fl(a)?{documents:BI(r,a)}:{query:qI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Bp(r,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=xo(r,i.snapshotVersion.toTimestamp())),o}(this.k,e);const s=HI(this.k,e);s&&(n.labels=s),this.gr(n)}vr(e){const n={};n.database=bl(this.k),n.removeTarget=e,this.gr(n)}}class S0 extends ng{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=$I(e.writeResults,e.commitTime),s=qt(e.commitTime);return this.listener.Cr(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=bl(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>VI(this.k,s))};this.gr(n)}}/**
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
 */class A0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=s,this.k=r,this.$r=!1}Or(){if(this.$r)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(_.UNKNOWN,r.toString())})}ji(e,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(_.UNKNOWN,r.toString())})}terminate(){this.$r=!0}}class R0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(cn(n),this.Lr=!1):$("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class C0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(o=>{s.enqueueAndForget(async()=>{zn(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.Gr.add(4),await Wr(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Lo(c)}(this))})}),this.Jr=new R0(s,r)}}async function Lo(t){if(zn(t))for(const e of t.zr)await e(!0)}async function Wr(t){for(const e of t.zr)await e(!1)}function sg(t,e){const n=Y(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Dl(n)?Pl(n):$s(n).lr()&&Ol(n,e))}function rg(t,e){const n=Y(t),s=$s(n);n.Wr.delete(e),s.lr()&&ig(n,e),n.Wr.size===0&&(s.lr()?s._r():zn(n)&&n.Jr.set("Unknown"))}function Ol(t,e){t.Yr.X(e.targetId),$s(t).Pr(e)}function ig(t,e){t.Yr.X(e),$s(t).vr(e)}function Pl(t){t.Yr=new PI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),$s(t).start(),t.Jr.Br()}function Dl(t){return zn(t)&&!$s(t).hr()&&t.Wr.size>0}function zn(t){return Y(t).Gr.size===0}function og(t){t.Yr=void 0}async function k0(t){t.Wr.forEach((e,n)=>{Ol(t,e)})}async function N0(t,e){og(t),Dl(t)?(t.Jr.Kr(e),Pl(t)):t.Jr.set("Unknown")}async function O0(t,e,n){if(t.Jr.set("Online"),e instanceof Up&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Wr.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Wr.delete(o),s.Yr.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Uo(t,s)}else if(e instanceof Do?t.Yr.ot(e):e instanceof Lp?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(re.min()))try{const s=await Jp(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Yr.gt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Wr.get(c);l&&r.Wr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.Wr.get(a);if(!c)return;r.Wr.set(a,c.withResumeToken(Ve.EMPTY_BYTE_STRING,c.snapshotVersion)),ig(r,a);const l=new Kn(c.target,a,1,c.sequenceNumber);Ol(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await Uo(t,s)}}async function Uo(t,e,n){if(!Hr(e))throw e;t.Gr.add(1),await Wr(t),t.Jr.set("Offline"),n||(n=()=>Jp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Lo(t)})}function ag(t,e){return e().catch(n=>Uo(t,n,e))}async function Fo(t){const e=Y(t),n=fn(e);let s=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;P0(e);)try{const r=await u0(e.localStore,s);if(r===null){e.Qr.length===0&&n._r();break}s=r.batchId,D0(e,r)}catch(r){await Uo(e,r)}cg(e)&&lg(e)}function P0(t){return zn(t)&&t.Qr.length<10}function D0(t,e){t.Qr.push(e);const n=fn(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function cg(t){return zn(t)&&!fn(t).hr()&&t.Qr.length>0}function lg(t){fn(t).start()}async function x0(t){fn(t).kr()}async function M0(t){const e=fn(t);for(const n of t.Qr)e.Dr(n.mutations)}async function L0(t,e,n){const s=t.Qr.shift(),r=Sl.from(s,e,n);await ag(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Fo(t)}async function U0(t,e){e&&fn(t).Sr&&await async function(n,s){if(r=s.code,SI(r)&&r!==_.ABORTED){const i=n.Qr.shift();fn(n).wr(),await ag(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fo(n)}var r}(t,e),cg(t)&&lg(t)}async function F0(t,e){const n=Y(t);e?(n.Gr.delete(2),await Lo(n)):e||(n.Gr.add(2),await Wr(n),n.Jr.set("Unknown"))}function $s(t){return t.Xr||(t.Xr=function(e,n,s){const r=Y(e);return r.Or(),new b0(n,r.ir,r.authCredentials,r.appCheckCredentials,r.k,s)}(t.datastore,t.asyncQueue,{Di:k0.bind(null,t),Ni:N0.bind(null,t),br:O0.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Dl(t)?Pl(t):t.Jr.set("Unknown")):(await t.Xr.stop(),og(t))})),t.Xr}function fn(t){return t.Zr||(t.Zr=function(e,n,s){const r=Y(e);return r.Or(),new S0(n,r.ir,r.authCredentials,r.appCheckCredentials,r.k,s)}(t.datastore,t.asyncQueue,{Di:x0.bind(null,t),Ni:U0.bind(null,t),Nr:M0.bind(null,t),Cr:L0.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await Fo(t)):(await t.Zr.stop(),t.Qr.length>0&&($("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
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
 */class xl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new xl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ml(t,e){if(cn("AsyncQueue",`${e}: ${t}`),Hr(t))return new x(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Bs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=_l(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Bs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ug{constructor(){this.eo=new We(j.comparator)}track(e){const n=e.doc.key,s=this.eo.get(n);s?e.type!==0&&s.type===3?this.eo=this.eo.insert(n,e):e.type===3&&s.type!==1?this.eo=this.eo.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.eo=this.eo.remove(n):e.type===1&&s.type===2?this.eo=this.eo.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):X():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,s)=>{e.push(s)}),e}}class qs{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new qs(e,n,Bs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class V0{constructor(){this.so=void 0,this.listeners=[]}}class $0{constructor(){this.queries=new zr(e=>vp(e),bo),this.onlineState="Unknown",this.io=new Set}}async function hg(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new V0),r)try{i.so=await n.onListen(s)}catch(o){const a=Ml(o,`Initialization of query '${yl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ro(n.onlineState),i.so&&e.oo(i.so)&&Ll(n)}async function fg(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function B0(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.oo(r)&&(s=!0);o.so=r}}s&&Ll(n)}function q0(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ll(t){t.io.forEach(e=>{e.next()})}class dg{constructor(e,n,s){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=s||{}}oo(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new qs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.wo||!s)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
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
 */class pg{constructor(e){this.key=e}}class gg{constructor(e){this.key=e}}class j0{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=we(),this.mutatedKeys=we(),this.Ao=_p(e),this.Ro=new Bs(this.Ao)}get bo(){return this.To}Po(e,n){const s=n?n.vo:new ug,r=n?n.Ro:this.Ro;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=To(this.query)&&r.size===this.query.limit?r.last():null,l=Io(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=So(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;f&&g?f.data.isEqual(g.data)?m!==E&&(s.track({type:3,doc:g}),v=!0):this.Vo(f,g)||(s.track({type:2,doc:g}),v=!0,(c&&this.Ao(g,c)>0||l&&this.Ao(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),v=!0):f&&!g&&(s.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),To(this.query)||Io(this.query))for(;o.size>this.query.limit;){const u=To(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Ro:o,vo:s,Bn:a,mutatedKeys:i}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((l,u)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return g(h)-g(f)}(l.type,u.type)||this.Ao(l.doc,u.doc)),this.So(s);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,i.length!==0||c?{snapshot:new qs(this.query,e.Ro,r,i,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new ug,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=we(),this.Ro.forEach(s=>{this.No(s.key)&&(this.Io=this.Io.add(s.key))});const n=[];return e.forEach(s=>{this.Io.has(s)||n.push(new gg(s))}),this.Io.forEach(s=>{e.has(s)||n.push(new pg(s))}),n}ko(e){this.To=e.zn,this.Io=we();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return qs.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class H0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class K0{constructor(e){this.key=e,this.$o=!1}}class z0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new zr(a=>vp(a),bo),this.Fo=new Map,this.Lo=new Set,this.Bo=new We(j.comparator),this.Uo=new Map,this.qo=new Cl,this.Ko={},this.jo=new Map,this.Qo=Vs.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function W0(t,e){const n=sb(t);let s,r;const i=n.Mo.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.xo();else{const o=await h0(n.localStore,qn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await G0(n,e,s,a==="current"),n.isPrimaryClient&&sg(n.remoteStore,o)}return r}async function G0(t,e,n,s){t.Go=(u,h,f)=>async function(g,m,E,v){let S=m.view.Po(E);S.Bn&&(S=await Qp(g.localStore,m.query,!1).then(({documents:U})=>m.view.Po(U,S)));const O=v&&v.targetChanges.get(m.targetId),L=m.view.applyChanges(S,g.isPrimaryClient,O);return Eg(g,m.targetId,L.Co),L.snapshot}(t,u,h,f);const r=await Qp(t.localStore,e,!0),i=new j0(e,r.zn),o=i.Po(r.documents),a=jr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Eg(t,n,c.Co);const l=new H0(e,n,i);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function X0(t,e){const n=Y(t),s=n.Mo.get(e),r=n.Fo.get(s.targetId);if(r.length>1)return n.Fo.set(s.targetId,r.filter(i=>!bo(i,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),rg(n.remoteStore,s.targetId),Ul(n,s.targetId)}).catch(Kr)):(Ul(n,s.targetId),await Rl(n.localStore,s.targetId,!0))}async function Y0(t,e,n){const s=rb(t);try{const r=await function(i,o){const a=Y(i),c=ft.now(),l=o.reduce((h,f)=>h.add(f.key),we());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(f=>{u=f;const g=[];for(const m of o){const E=TI(m,u.get(m.key));E!=null&&g.push(new jn(m.key,E,fp(E.value.mapValue),hn.exists(!0)))}return a.An.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ko[i.currentUser.toKey()];c||(c=new We(le)),c=c.insert(o,a),i.Ko[i.currentUser.toKey()]=c}(s,r.batchId,n),await Gr(s,r.changes),await Fo(s.remoteStore)}catch(r){const i=Ml(r,"Failed to persist write");n.reject(i)}}async function mg(t,e){const n=Y(t);try{const s=await c0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Uo.get(i);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.$o=!0:r.modifiedDocuments.size>0?ve(o.$o):r.removedDocuments.size>0&&(ve(o.$o),o.$o=!1))}),await Gr(n,s,e)}catch(s){await Kr(s)}}function yg(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Mo.forEach((i,o)=>{const a=o.view.ro(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ro(o)&&(c=!0)}),c&&Ll(a)}(s.eventManager,e),r.length&&s.Oo.br(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function J0(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Uo.get(e),i=r&&r.key;if(i){let o=new We(j.comparator);o=o.insert(i,ze.newNoDocument(i,re.min()));const a=we().add(i),c=new Po(re.min(),new Map,new Be(le),o,a);await mg(s,c),s.Bo=s.Bo.remove(i),s.Uo.delete(e),Fl(s)}else await Rl(s.localStore,e,!1).then(()=>Ul(s,e,n)).catch(Kr)}async function Q0(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await a0(n.localStore,e);_g(n,s,null),vg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Gr(n,r)}catch(r){await Kr(r)}}async function Z0(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.An.lookupMutationBatch(c,o).next(u=>(ve(u!==null),l=u.keys(),a.An.removeMutationBatch(c,u))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,l))})}(s.localStore,e);_g(s,e,n),vg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Gr(s,r)}catch(r){await Kr(r)}}function vg(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function _g(t,e,n){const s=Y(t);let r=s.Ko[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ko[s.currentUser.toKey()]=r}}function Ul(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Fo.get(e))t.Mo.delete(s),n&&t.Oo.zo(s,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(s=>{t.qo.containsKey(s)||wg(t,s)})}function wg(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(rg(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Fl(t))}function Eg(t,e,n){for(const s of n)s instanceof pg?(t.qo.addReference(s.key,e),eb(t,s)):s instanceof gg?($("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||wg(t,s.key)):X()}function eb(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||($("SyncEngine","New document in limbo: "+n),t.Lo.add(s),Fl(t))}function Fl(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new j(Ie.fromString(e)),s=t.Qo.next();t.Uo.set(s,new K0(n)),t.Bo=t.Bo.insert(n,s),sg(t.remoteStore,new Kn(qn(pl(n.path)),s,2,il.I))}}async function Gr(t,e,n){const s=Y(t),r=[],i=[],o=[];s.Mo.isEmpty()||(s.Mo.forEach((a,c)=>{o.push(s.Go(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Al.$n(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Oo.br(r),await async function(a,c){const l=Y(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>P.forEach(c,h=>P.forEach(h.kn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>P.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Hr(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.qn.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);l.qn=l.qn.insert(h,m)}}}(s.localStore,i))}async function tb(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await Yp(n.localStore,e);n.currentUser=e,function(r,i){r.jo.forEach(o=>{o.forEach(a=>{a.reject(new x(_.CANCELLED,i))})}),r.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Gr(n,s.Gn)}}function nb(t,e){const n=Y(t),s=n.Uo.get(e);if(s&&s.$o)return we().add(s.key);{let r=we();const i=n.Fo.get(e);if(!i)return r;for(const o of i){const a=n.Mo.get(o);r=r.unionWith(a.view.bo)}return r}}function sb(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J0.bind(null,e),e.Oo.br=B0.bind(null,e.eventManager),e.Oo.zo=q0.bind(null,e.eventManager),e}function rb(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Q0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z0.bind(null,e),e}class ib{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Mo(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return o0(this.persistence,new r0,e.initialUser,this.k)}Yo(e){return new y0(kl.ks,this.k)}Jo(e){return new _0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ob{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tb.bind(null,this.syncEngine),await F0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $0}createDatastore(e){const n=Mo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new I0(r));var r;return function(i,o,a,c){return new A0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>yg(this.syncEngine,a,0),o=eg.Pt()?new eg:new w0,new C0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new z0(s,r,i,o,a,c);return l&&(u.Wo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);$("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Wr(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
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
 */class Tg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ab{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=st.UNAUTHENTICATED,this.clientId=sp.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ml(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function cb(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Yp(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function lb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ub(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>async function(i,o){const a=Y(i);a.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const c=zn(a);a.Gr.add(3),await Wr(a),c&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Lo(a)}(e.remoteStore,r)),t.onlineComponents=e}async function ub(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await cb(t,new ib)),t.offlineComponents}async function Ig(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await lb(t,new ob)),t.onlineComponents}function hb(t){return Ig(t).then(e=>e.syncEngine)}async function Vl(t){const e=await Ig(t),n=e.eventManager;return n.onListen=W0.bind(null,e.syncEngine),n.onUnlisten=X0.bind(null,e.syncEngine),n}function fb(t,e,n={}){const s=new ln;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Tg({next:h=>{i.enqueueAndForget(()=>fg(r,u)),h.fromCache&&a.source==="server"?c.reject(new x(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new dg(o,l,{includeMetadataChanges:!0,wo:!0});return hg(r,u)}(await Vl(t),t.asyncQueue,e,n,s)),s.promise}class db{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Xr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bg=new Map;/**
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
 */function Sg(t,e,n){if(!n)throw new x(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pb(t,e,n,s){if(e===!0&&s===!0)throw new x(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ag(t){if(!j.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rg(t){if(j.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vo(t);throw new x(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Cg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class $l{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1,e instanceof Xr?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new x(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xr(r.options.projectId)}(e))}get app(){if(!this._app)throw new x(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new KT;switch(n.type){case"gapi":const s=n.client;return ve(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new GT(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new x(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=bg.get(e);n&&($("ComponentProvider","Removing Datastore"),bg.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class it{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class Wn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wn(this.firestore,e,this._query)}}class dn extends Wn{constructor(e,n,s){super(e,n,pl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new j(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function qR(t,e,...n){if(t=be(t),Sg("collection","path",e),t instanceof $l){const s=Ie.fromString(e,...n);return Rg(s),new dn(t,null,s)}{if(!(t instanceof it||t instanceof dn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Rg(s),new dn(t.firestore,null,s)}}function gb(t,e,...n){if(t=be(t),arguments.length===1&&(e=sp.A()),Sg("doc","path",e),t instanceof $l){const s=Ie.fromString(e,...n);return Ag(s),new it(t,null,new j(s))}{if(!(t instanceof it||t instanceof dn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Ag(s),new it(t.firestore,t instanceof dn?t.converter:null,new j(s))}}/**
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
 */class mb{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new tg(this,"async_queue_retry"),this.bc=()=>{const n=Nl();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Nl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=Nl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new ln;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Hr(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(s=>{this.Ec=s,this.Ic=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw cn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ic=!1,s))));return this.mc=n,n}enqueueAfterDelay(e,n,s){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const r=xl.createAndSchedule(this,e,n,s,i=>this.Sc(i));return this.Tc.push(r),r}Pc(){this.Ec&&X()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function kg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Gn extends $l{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new mb,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ng(this),this._firestoreClient.terminate()}}function jR(t=fc()){return Hi(t,"firestore").getImmediate()}function Bl(t){return t._firestoreClient||Ng(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ng(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new db(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ab(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class Yr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function HR(){return new Yr("__name__")}/**
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
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(Ve.fromBase64String(e))}catch(n){throw new x(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $o{constructor(e){this._methodName=e}}/**
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
 */class ql{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const yb=/^__.*__$/;class vb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new jn(e,this.data,this.fieldMask,n,this.fieldTransforms):new No(e,this.data,n,this.fieldTransforms)}}class Og{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new jn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Pg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class jl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.k=s,this.ignoreUndefinedProperties=r,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new jl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Oc({path:s,Fc:!1});return r.Lc(e),r}Bc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Oc({path:s,Fc:!1});return r.xc(),r}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return qo(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(Pg(this.$c)&&yb.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class _b{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=s||Mo(e)}Qc(e,n,s,r=!1){return new jl({$c:e,methodName:n,jc:s,path:rt.emptyPath(),Fc:!1,Kc:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Hl(t){const e=t._freezeSettings(),n=Mo(t._databaseId);return new _b(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wb(t,e,n,s,r,i={}){const o=t.Qc(i.merge||i.mergeFields?2:0,e,n,r);zl("Data must be an object, but it was:",o,s);const a=Dg(s,o);let c,l;if(i.merge)c=new Mr(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Wl(e,h,n);if(!o.contains(f))throw new x(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Mg(u,f)||u.push(f)}c=new Mr(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new vb(new dt(a),c,l)}class Bo extends $o{_toFieldTransform(e){if(e.$c!==2)throw e.$c===1?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bo}}class Kl extends $o{_toFieldTransform(e){return new vI(e.path,new $r)}isEqual(e){return e instanceof Kl}}function Eb(t,e,n,s){const r=t.Qc(1,e,n);zl("Data must be an object, but it was:",r,s);const i=[],o=dt.empty();$n(s,(c,l)=>{const u=Gl(e,c,n);l=be(l);const h=r.Bc(u);if(l instanceof Bo)i.push(u);else{const f=Jr(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Mr(i);return new Og(o,a,r.fieldTransforms)}function Tb(t,e,n,s,r,i){const o=t.Qc(1,e,n),a=[Wl(e,s,n)],c=[r];if(i.length%2!=0)throw new x(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Wl(e,i[f])),c.push(i[f+1]);const l=[],u=dt.empty();for(let f=a.length-1;f>=0;--f)if(!Mg(l,a[f])){const g=a[f];let m=c[f];m=be(m);const E=o.Bc(g);if(m instanceof Bo)l.push(g);else{const v=Jr(m,E);v!=null&&(l.push(g),u.set(g,v))}}const h=new Mr(l);return new Og(u,h,o.fieldTransforms)}function Ib(t,e,n,s=!1){return Jr(n,t.Qc(s?4:3,e))}function Jr(t,e){if(xg(t=be(t)))return zl("Unsupported field value:",e,t),Dg(t,e);if(t instanceof $o)return function(n,s){if(!Pg(s.$c))throw s.qc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Jr(o,s.Uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gI(s.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ft.fromDate(n);return{timestampValue:xo(s.k,r)}}if(n instanceof ft){const r=new ft(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xo(s.k,r)}}if(n instanceof ql)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof js)return{bytesValue:Bp(s.k,n._byteString)};if(n instanceof it){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.qc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:wl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.qc(`Unsupported field value: ${Vo(n)}`)}(t,e)}function Dg(t,e){const n={};return ip(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$n(t,(s,r)=>{const i=Jr(r,e.Mc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function xg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof ql||t instanceof js||t instanceof it||t instanceof $o)}function zl(t,e,n){if(!xg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Vo(n);throw s==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+s)}}function Wl(t,e,n){if((e=be(e))instanceof Yr)return e._internalPath;if(typeof e=="string")return Gl(t,e);throw qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const bb=new RegExp("[~\\*/\\[\\]]");function Gl(t,e,n){if(e.search(bb)>=0)throw qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yr(...e.split("."))._internalPath}catch{throw qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new x(_.INVALID_ARGUMENT,a+t+c)}function Mg(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Lg{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Sb extends Lg{data(){return super.data()}}function jo(t,e){return typeof e=="string"?Gl(t,e):e instanceof Yr?e._internalPath:e._delegate._internalPath}/**
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
 */class Qr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ug extends Lg{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(jo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ho extends Ug{data(e={}){return super.data(e)}}class Fg{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Qr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ho(this._firestore,this._userDataWriter,s.key,s,new Qr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ho(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ho(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Ab(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ab(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function Vg(t){if(Io(t)&&t.explicitOrderBy.length===0)throw new x(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $g{}function KR(t,...e){for(const n of e)t=n._apply(t);return t}class Rb extends $g{constructor(e,n,s){super(),this.zc=e,this.Hc=n,this.Jc=s,this.type="where"}_apply(e){const n=Hl(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new x(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){qg(u,l);const g=[];for(const m of u)g.push(Bg(a,r,m));h={arrayValue:{values:g}}}else h=Bg(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||qg(u,l),h=Ib(o,i,u,l==="in"||l==="not-in");const f=et.create(c,l,h);return function(g,m){if(m.V()){const v=ml(g);if(v!==null&&!v.isEqual(m.field))throw new x(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${v.toString()}' and '${m.field.toString()}'`);const S=gl(g);S!==null&&jg(g,m.field,S)}const E=function(v,S){for(const O of v.filters)if(S.indexOf(O.op)>=0)return O.op;return null}(g,function(v){switch(v){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(E!==null)throw E===m.op?new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${E.toString()}' filters.`)}(r,f),f}(e._query,"where",n,e.firestore._databaseId,this.zc,this.Hc,this.Jc);return new Wn(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Ls(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function zR(t,e,n){const s=e,r=jo("where",t);return new Rb(r,s,n)}class Cb extends $g{constructor(e,n){super(),this.zc=e,this.Yc=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new x(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ms(r,i);return function(a,c){if(gl(a)===null){const l=ml(a);l!==null&&jg(a,l,c.field)}}(s,o),o}(e._query,this.zc,this.Yc);return new Wn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ls(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function WR(t,e="asc"){const n=e,s=jo("orderBy",t);return new Cb(s,n)}function Bg(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new x(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yp(e)&&n.indexOf("/")!==-1)throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ie.fromString(n));if(!j.isDocumentKey(s))throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return lp(t,new j(s))}if(n instanceof it)return lp(t,n._key);throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vo(n)}.`)}function qg(t,e){if(!Array.isArray(t)||t.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new x(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function jg(t,e,n){if(!n.isEqual(e))throw new x(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class kb{convertValue(e,n="none"){switch(Bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const s={};return $n(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ql(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ap(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const n=un(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);ve(Gp(s));const r=new Xr(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||cn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Nb(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Xl extends kb{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function GR(t){t=jt(t,Wn);const e=jt(t.firestore,Gn),n=Bl(e),s=new Xl(e);return Vg(t._query),fb(n,t._query).then(r=>new Fg(e,s,t,r))}function XR(t,e,n,...s){t=jt(t,it);const r=jt(t.firestore,Gn),i=Hl(r);let o;return o=typeof(e=be(e))=="string"||e instanceof Yr?Tb(i,"updateDoc",t._key,e,n,s):Eb(i,"updateDoc",t._key,e),Yl(r,[o.toMutation(t._key,hn.exists(!0))])}function YR(t){return Yl(jt(t.firestore,Gn),[new Pp(t._key,hn.none())])}function JR(t,e){const n=jt(t.firestore,Gn),s=gb(t),r=Nb(t.converter,e);return Yl(n,[wb(Hl(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,hn.exists(!1))]).then(()=>s)}function QR(t,...e){var n,s,r;t=be(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||kg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(kg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof it)l=jt(t.firestore,Gn),u=pl(t._key.path),c={next:h=>{e[o]&&e[o](Ob(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=jt(t,Wn);l=jt(h.firestore,Gn),u=h._query;const f=new Xl(l);c={next:g=>{e[o]&&e[o](new Fg(l,f,h,g))},error:e[o+1],complete:e[o+2]},Vg(t._query)}return function(h,f,g,m){const E=new Tg(m),v=new dg(f,E,g);return h.asyncQueue.enqueueAndForget(async()=>hg(await Vl(h),v)),()=>{E.nc(),h.asyncQueue.enqueueAndForget(async()=>fg(await Vl(h),v))}}(Bl(l),u,a,c)}function Yl(t,e){return function(n,s){const r=new ln;return n.asyncQueue.enqueueAndForget(async()=>Y0(await hb(n),s,r)),r.promise}(Bl(t),e)}function Ob(t,e,n){const s=n.docs.get(e._key),r=new Xl(t);return new Ug(t,r,e._key,s,new Qr(n.hasPendingWrites,n.fromCache),e.converter)}function ZR(){return new Kl("serverTimestamp")}(function(t,e=!0){(function(n){Ns=n})(bs),Is(new Pn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Gn(r,new zT(n.getProvider("auth-internal")),new YT(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Ot(ep,"3.4.3",t),Ot(ep,"3.4.3","esm2017")})();/*! *****************************************************************************
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
***************************************************************************** */function Jl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Hg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pb=Hg,Kg=new fr("auth","Firebase",Hg());/**
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
 */const zg=new cc("@firebase/auth");function Ko(t,...e){zg.logLevel<=oe.ERROR&&zg.error(`Auth (${bs}): ${t}`,...e)}/**
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
 */function wt(t,...e){throw Ql(t,...e)}function Dt(t,...e){return Ql(t,...e)}function Wg(t,e,n){const s=Object.assign(Object.assign({},Pb()),{[e]:n});return new fr("auth","Firebase",s).create(e,{appName:t.name})}function Gg(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&wt(t,"argument-error"),Wg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ql(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Kg.create(t,...e)}function K(t,e,...n){if(!t)throw Ql(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ko(e),new Error(e)}function Kt(t,e){t||Ht(e)}/**
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
 */const Xg=new Map;function zt(t){Kt(t instanceof Function,"Expected a class definition");let e=Xg.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xg.set(t,e),e)}/**
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
 */function Db(t,e){const n=Hi(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(qi(i,e!=null?e:{}))return r;wt(r,"already-initialized")}return n.initialize({options:e})}function xb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(zt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Zl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mb(){return Yg()==="http:"||Yg()==="https:"}function Yg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Lb(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mb()||Df()||"connection"in navigator)?navigator.onLine:!0}function Ub(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=Pf()||xf()}get(){return Lb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eu(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Jg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Vb=new Zr(3e4,6e4);function ei(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ti(t,e,n,s,r={}){return Qg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=dr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Jg.fetch()(Zg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Qg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Fb),e);try{const r=new $b(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw tu(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw tu(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw tu(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Wg(t,u,l);wt(t,u)}}catch(r){if(r instanceof rn)throw r;wt(t,"network-request-failed")}}async function ni(t,e,n,s,r={}){const i=await ti(t,e,n,s,r);return"mfaPendingCredential"in i&&wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?eu(t.config,r):`${t.config.apiScheme}://${r}`}class $b{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"timeout")),Vb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tu(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Dt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Bb(t,e){return ti(t,"POST","/v1/accounts:delete",e)}async function qb(t,e){return ti(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function si(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jb(t,e=!1){const n=be(t),s=await n.getIdToken(e),r=su(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:si(nu(r.auth_time)),issuedAtTime:si(nu(r.iat)),expirationTime:si(nu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function nu(t){return Number(t)*1e3}function su(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ko("JWT malformed, contained fewer than 3 sections"),null;try{const r=Fw(n);return r?JSON.parse(r):(Ko("Failed to decode base64 JWT payload"),null)}catch(r){return Ko("Caught error parsing JWT payload as JSON",r),null}}function Hb(t){const e=su(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ri(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rn&&Kb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Kb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class em{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ri(t,qb(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?Xb(i.providerUserInfo):[],a=Gb(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new em(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Wb(t){const e=be(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gb(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Xb(t){return t.map(e=>{var{providerId:n}=e,s=Jl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Yb(t,e){const n=await Qg(t,{},async()=>{const s=dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Zg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Hb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Yb(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ii;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function pn(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Jl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new zb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new em(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ri(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jb(this,e)}reload(){return Wb(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ri(this,Bb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:U,isAnonymous:ee,providerData:ae,stsTokenManager:W}=n;K(L&&W,e,"internal-error");const ue=ii.fromJSON(this.name,W);K(typeof L=="string",e,"internal-error"),pn(h,e.name),pn(f,e.name),K(typeof U=="boolean",e,"internal-error"),K(typeof ee=="boolean",e,"internal-error"),pn(g,e.name),pn(m,e.name),pn(E,e.name),pn(v,e.name),pn(S,e.name),pn(O,e.name);const ce=new Xn({uid:L,auth:e,email:f,emailVerified:U,displayName:h,isAnonymous:ee,photoURL:m,phoneNumber:g,tenantId:E,stsTokenManager:ue,createdAt:S,lastLoginAt:O});return ae&&Array.isArray(ae)&&(ce.providerData=ae.map(qe=>Object.assign({},qe))),v&&(ce._redirectEventId=v),ce}static async _fromIdTokenResponse(e,n,s=!1){const r=new ii;r.updateFromServerResponse(n);const i=new Xn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await zo(i),i}}/**
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
 */class tm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tm.type="NONE";const nm=tm;/**
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
 */function Wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Wo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Wo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Hs(zt(nm),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||zt(nm);const o=Wo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Xn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Hs(i,e,s))}}/**
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
 */function sm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(om(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cm(e))return"Blackberry";if(lm(e))return"Webos";if(ru(e))return"Safari";if((e.includes("chrome/")||im(e))&&!e.includes("edge/"))return"Chrome";if(am(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function rm(t=Pe()){return/firefox\//i.test(t)}function ru(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function im(t=Pe()){return/crios\//i.test(t)}function om(t=Pe()){return/iemobile/i.test(t)}function am(t=Pe()){return/android/i.test(t)}function cm(t=Pe()){return/blackberry/i.test(t)}function lm(t=Pe()){return/webos/i.test(t)}function Go(t=Pe()){return/iphone|ipad|ipod/i.test(t)}function Jb(t=Pe()){var e;return Go(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Qb(){return Mf()&&document.documentMode===10}function um(t=Pe()){return Go(t)||am(t)||lm(t)||cm(t)||/windows phone/i.test(t)||om(t)}function Zb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hm(t,e=[]){let n;switch(t){case"Browser":n=sm(Pe());break;case"Worker":n=`${sm(Pe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${s}`}/**
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
 */class eS{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fm(this),this.idTokenSubscription=new fm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ub()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?be(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ks(t){return be(t)}class fm{constructor(e){this.auth=e,this.observer=null,this.addObserver=zw(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class iu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function tS(t,e){return ti(t,"POST","/v1/accounts:update",e)}/**
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
 */async function nS(t,e){return ni(t,"POST","/v1/accounts:signInWithPassword",ei(t,e))}/**
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
 */async function sS(t,e){return ni(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}async function rS(t,e){return ni(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}/**
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
 */class oi extends iu{constructor(e,n,s,r=null){super("password",s);this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new oi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new oi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sS(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return tS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rS(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zs(t,e){return ni(t,"POST","/v1/accounts:signInWithIdp",ei(t,e))}/**
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
 */const iS="http://localhost";class Yn extends iu{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Jl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Yn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,zs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:iS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=dr(n)}return e}}/**
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
 */function oS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aS(t){const e=pr(gr(t)).link,n=e?pr(gr(e)).deep_link_id:null,s=pr(gr(t)).deep_link_id;return(s?pr(gr(s)).link:null)||s||n||e||t}class ou{constructor(e){var n,s,r,i,o,a;const c=pr(gr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=oS((r=c.mode)!==null&&r!==void 0?r:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aS(e);try{return new ou(n)}catch{return null}}}/**
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
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ou.parseLink(n);return K(s,"argument-error"),oi._fromEmailAndCode(e,s.code,s.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends Xo{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends ai{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class mn extends ai{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return mn.credential(n,s)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class yn extends ai{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
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
 */class vn extends ai{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return vn.credential(n,s)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */async function cS(t,e){return ni(t,"POST","/v1/accounts:signUp",ei(t,e))}/**
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
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Xn._fromIdTokenResponse(e,s,r),o=dm(s);return new Jn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=dm(s);return new Jn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function dm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yo extends rn{constructor(e,n,s,r){var i;super(n.code,n.message);this.operationType=s,this.user=r,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Yo(e,n,s,r)}}function pm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,i,e,s):i})}async function lS(t,e,n=!1){const s=await ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",s)}/**
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
 */async function uS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ri(t,pm(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=su(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Jn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(s,"user-mismatch"),i}}/**
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
 */async function gm(t,e,n=!1){const s="signIn",r=await pm(t,s,e),i=await Jn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function hS(t,e){return gm(Ks(t),e)}async function eC(t,e,n){const s=Ks(t),r=await cS(s,{returnSecureToken:!0,email:e,password:n}),i=await Jn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function tC(t,e,n){return hS(be(t),Ws.credential(e,n))}function nC(t,e,n,s){return be(t).onAuthStateChanged(e,n,s)}function sC(t){return be(t).signOut()}const Jo="__sak";/**
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
 */class mm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function fS(){const t=Pe();return ru(t)||Go(t)}const dS=1e3,pS=10;class ym extends mm{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fS()&&Zb(),this.fallbackToPolling=um(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Qb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,pS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},dS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ym.type="LOCAL";const gS=ym;/**
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
 */class vm extends mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vm.type="SESSION";const _m=vm;/**
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
 */function mS(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Qo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await mS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
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
 */function au(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=au("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xt(){return window}function vS(t){xt().location.href=t}/**
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
 */function wm(){return typeof xt().WorkerGlobalScope!="undefined"&&typeof xt().importScripts=="function"}async function _S(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ES(){return wm()?self:null}/**
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
 */const Em="firebaseLocalStorageDb",TS=1,Zo="firebaseLocalStorage",Tm="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ea(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function IS(){const t=indexedDB.deleteDatabase(Em);return new ci(t).toPromise()}function cu(){const t=indexedDB.open(Em,TS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Zo,{keyPath:Tm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Zo)?e(s):(s.close(),await IS(),e(await cu()))})})}async function Im(t,e,n){const s=ea(t,!0).put({[Tm]:e,value:n});return new ci(s).toPromise()}async function bS(t,e){const n=ea(t,!1).get(e),s=await new ci(n).toPromise();return s===void 0?null:s.value}function bm(t,e){const n=ea(t,!0).delete(e);return new ci(n).toPromise()}const SS=800,AS=3;class Sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>AS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(ES()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _S(),!this.activeServiceWorker)return;this.sender=new yS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cu();return await Im(e,Jo,"1"),await bm(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Im(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>bS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ea(r,!1).getAll();return new ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sm.type="LOCAL";const RS=Sm;/**
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
 */function CS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Dt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",CS().appendChild(s)})}function NS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Zr(3e4,6e4);/**
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
 */function lu(t,e){return e?zt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uu extends iu{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OS(t){return gm(t.auth,new uu(t),t.bypassAuthState)}function PS(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),uS(n,new uu(t),t.bypassAuthState)}async function DS(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),lS(n,new uu(t),t.bypassAuthState)}/**
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
 */class Am{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OS;case"linkViaPopup":case"linkViaRedirect":return DS;case"reauthViaPopup":case"reauthViaRedirect":return PS;default:wt(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xS=new Zr(2e3,1e4);async function rC(t,e,n){const s=Ks(t);Gg(t,e,Xo);const r=lu(s,n);return new Qn(s,"signInViaPopup",e,r).executeNotNull()}class Qn extends Am{constructor(e,n,s,r,i){super(e,n,r,i);this.provider=s,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,xS.get())};e()}}Qn.currentPopupAction=null;/**
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
 */const MS="pendingRedirect",hu=new Map;class LS extends Am{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=hu.get(this.auth._key());if(!e){try{const s=await US(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}hu.set(this.auth._key(),e)}return this.bypassAuthState||hu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function US(t,e){const n=Cm(e),s=Rm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function FS(t,e){return Rm(t)._set(Cm(e),"true")}function Rm(t){return zt(t._redirectPersistence)}function Cm(t){return Wo(MS,t.config.apiKey,t.name)}/**
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
 */function iC(t,e,n){return VS(t,e,n)}async function VS(t,e,n){const s=Ks(t);Gg(t,e,Xo);const r=lu(s,n);return await FS(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function $S(t,e,n=!1){const s=Ks(t),r=lu(s,e),o=await new LS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const BS=10*60*1e3;class qS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Nm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BS&&this.cachedEventUids.clear(),this.cachedEventUids.has(km(e))}saveEventToCache(e){this.cachedEventUids.add(km(e)),this.lastProcessedEventTime=Date.now()}}function km(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nm(t);default:return!1}}/**
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
 */async function HS(t,e={}){return ti(t,"GET","/v1/projects",e)}/**
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
 */const KS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zS=/^https?/;async function WS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HS(t);for(const n of e)try{if(GS(n))return}catch{}wt(t,"unauthorized-domain")}function GS(t){const e=Zl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zS.test(n))return!1;if(KS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const XS=new Zr(3e4,6e4);function Om(){const t=xt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YS(t){return new Promise((e,n)=>{var s,r,i;function o(){Om(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Om(),n(Dt(t,"network-request-failed"))},timeout:XS.get()})}if((r=(s=xt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((i=xt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=NS("iframefcb");return xt()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},kS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ta=null,e})}let ta=null;function JS(t){return ta=ta||YS(t),ta}/**
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
 */const QS=new Zr(5e3,15e3),ZS="__/auth/iframe",eA="emulator/auth/iframe",tA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sA(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eu(e,eA):`https://${t.config.authDomain}/${ZS}`,s={apiKey:e.apiKey,appName:t.name,v:bs},r=nA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${dr(s).slice(1)}`}async function rA(t){const e=await JS(t),n=xt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:sA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},QS.get());function c(){xt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const iA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oA=500,aA=600,cA="_blank",lA="http://localhost";class Pm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uA(t,e,n,s=oA,r=aA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},iA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Pe().toLowerCase();n&&(a=im(l)?cA:n),rm(l)&&(e=e||lA,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(Jb(l)&&a!=="_self")return hA(e||"",a),new Pm(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Pm(h)}function hA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fA="__/auth/handler",dA="emulator/auth/handler";function Dm(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:bs,eventId:r};if(e instanceof Xo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ai){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${pA(t)}?${dr(a).slice(1)}`}function pA({config:t}){return t.emulator?eu(t,dA):`https://${t.authDomain}/${fA}`}/**
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
 */const fu="webStorageSupport";class gA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_m,this._completeRedirectFn=$S}async _openPopup(e,n,s,r){var i;Kt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Dm(e,n,s,Zl(),r);return uA(e,o,au())}async _openRedirect(e,n,s,r){return await this._originValidation(e),vS(Dm(e,n,s,Zl(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Kt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await rA(e),s=new qS(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fu,{type:fu},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[fu];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return um()||ru()||Go()}}const mA=gA;var xm="@firebase/auth",Mm="0.19.5";/**
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
 */class yA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _A(t){Is(new Pn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=s.options;return(o=>{K(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),K(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hm(t)},c=new eS(o,a);return xb(c,n),c})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Is(new Pn("auth-internal",e=>{const n=Ks(e.getProvider("auth").getImmediate());return(s=>new yA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(xm,Mm,vA(t)),Ot(xm,Mm,"esm2017")}/**
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
 */function oC(t=fc()){const e=Hi(t,"auth");return e.isInitialized()?e.getImmediate():Db(t,{popupRedirectResolver:mA,persistence:[RS,gS,_m]})}_A("Browser");/**
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
 */const Lm="firebasestorage.googleapis.com",Um="storageBucket",wA=2*60*1e3,EA=10*60*1e3;/**
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
 */class Se extends rn{constructor(e,n){super(du(e),`Firebase Storage: ${n} (${du(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}_codeEquals(e){return du(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function du(t){return"storage/"+t}function pu(){const t="An unknown error occurred, please check the error payload for server response.";return new Se("unknown",t)}function TA(t){return new Se("object-not-found","Object '"+t+"' does not exist.")}function IA(t){return new Se("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se("unauthenticated",t)}function SA(){return new Se("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function AA(t){return new Se("unauthorized","User does not have permission to access '"+t+"'.")}function RA(){return new Se("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Fm(){return new Se("canceled","User canceled the upload/download.")}function CA(t){return new Se("invalid-url","Invalid URL '"+t+"'.")}function kA(t){return new Se("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function NA(){return new Se("no-default-bucket","No default bucket found. Did you set the '"+Um+"' property when initializing the app?")}function Vm(){return new Se("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function OA(){return new Se("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function PA(){return new Se("no-download-url","The given file does not have any download URLs.")}function gu(t){return new Se("invalid-argument",t)}function $m(){return new Se("app-deleted","The Firebase app was deleted.")}function DA(t){return new Se("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function li(t,e){return new Se("invalid-format","String does not match format '"+t+"': "+e)}function ui(t){throw new Se("internal-error","Internal error: "+t)}/**
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
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(s.path==="")return s;throw kA(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(U){U.path_=decodeURIComponent(U.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},E=n===Lm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",S=new RegExp(`^https?://${E}/${r}/${v}`,"i"),L=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let U=0;U<L.length;U++){const ee=L[U],ae=ee.regex.exec(e);if(ae){const W=ae[ee.indices.bucket];let ue=ae[ee.indices.path];ue||(ue=""),s=new pt(W,ue),ee.postModify(s);break}}if(s==null)throw CA(e);return s}}class xA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function MA(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,t(g,c())},v)}function f(){i&&clearTimeout(i)}function g(v,...S){if(l){f();return}if(v){f(),u.call(null,v,...S);return}if(c()||o){f(),u.call(null,v,...S);return}s<64&&(s*=2);let L;a===1?(a=2,L=0):L=(s+Math.random())*1e3,h(L)}let m=!1;function E(v){m||(m=!0,f(),!l&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function LA(t){t(!1)}/**
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
 */function UA(t){return t!==void 0}function FA(t){return typeof t=="function"}function VA(t){return typeof t=="object"&&!Array.isArray(t)}function na(t){return typeof t=="string"||t instanceof String}function Bm(t){return mu()&&t instanceof Blob}function mu(){return typeof Blob!="undefined"}function qm(t,e,n,s){if(s<e)throw gu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw gu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Gs(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function jm(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Zn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zn||(Zn={}));/**
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
 */class $A{constructor(e,n,s,r,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new sa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Zn.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===Zn.ABORT;s(!1,new sa(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new sa(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());UA(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=pu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?$m():Fm();o(c)}else{const c=RA();o(c)}};this.canceled_?n(!1,new sa(!1,null,!0)):this.backoffId_=MA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&LA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class sa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function BA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function jA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function HA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function KA(t,e,n,s,r,i){const o=jm(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return jA(c,e),BA(c,n),qA(c,i),HA(c,s),new $A(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
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
 */function zA(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function WA(...t){const e=zA();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(mu())return new Blob(t);throw new Se("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function GA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function XA(t){return atob(t)}/**
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
 */const Mt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yu{constructor(e,n){this.data=e,this.contentType=n||null}}function YA(t,e){switch(t){case Mt.RAW:return new yu(Hm(e));case Mt.BASE64:case Mt.BASE64URL:return new yu(Km(t,e));case Mt.DATA_URL:return new yu(QA(e),ZA(e))}throw pu()}function Hm(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)==56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function JA(t){let e;try{e=decodeURIComponent(t)}catch{throw li(Mt.DATA_URL,"Malformed data URL.")}return Hm(e)}function Km(t,e){switch(t){case Mt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw li(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Mt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw li(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=XA(e)}catch{throw li(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class zm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw li(Mt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=eR(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-";base64".length):s),this.rest=e.substring(e.indexOf(",")+1)}}function QA(t){const e=new zm(t);return e.base64?Km(Mt.BASE64,e.rest):JA(e.rest)}function ZA(t){return new zm(t).contentType}function eR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Wt{constructor(e,n){let s=0,r="";Bm(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Bm(this.data_)){const s=this.data_,r=GA(s,e,n);return r===null?null:new Wt(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Wt(s,!0)}}static getBlob(...e){if(mu()){const n=e.map(s=>s instanceof Wt?s.data_:s);return new Wt(WA.apply(null,n))}else{const n=e.map(o=>na(o)?YA(Mt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Wt(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Wm(t){let e;try{e=JSON.parse(t)}catch{return null}return VA(e)?e:null}/**
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
 */function tR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nR(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Gm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function sR(t,e){return e}class tt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||sR}}let ra=null;function rR(t){return!na(t)||t.length<2?t:Gm(t)}function vu(){if(ra)return ra;const t=[];t.push(new tt("bucket")),t.push(new tt("generation")),t.push(new tt("metageneration")),t.push(new tt("name","fullPath",!0));function e(i,o){return rR(o)}const n=new tt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new tt("size");return r.xform=s,t.push(r),t.push(new tt("timeCreated")),t.push(new tt("updated")),t.push(new tt("md5Hash",null,!0)),t.push(new tt("cacheControl",null,!0)),t.push(new tt("contentDisposition",null,!0)),t.push(new tt("contentEncoding",null,!0)),t.push(new tt("contentLanguage",null,!0)),t.push(new tt("contentType",null,!0)),t.push(new tt("metadata","customMetadata",!0)),ra=t,ra}function iR(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new pt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function oR(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return iR(s,t),s}function Xm(t,e,n){const s=Wm(e);return s===null?null:oR(t,s,n)}function aR(t,e,n,s){const r=Wm(e);if(r===null||!na(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),g=Gs(f,n,s),m=jm({alt:"media",token:l});return g+m})[0]}function Ym(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class es{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Gt(t){if(!t)throw pu()}function _u(t,e){function n(s,r){const i=Xm(t,r,e);return Gt(i!==null),i}return n}function cR(t,e){function n(s,r){const i=Xm(t,r,e);return Gt(i!==null),aR(i,r,t.host,t._protocol)}return n}function hi(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=SA():r=bA():n.getStatus()===402?r=IA(t.bucket):n.getStatus()===403?r=AA(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function wu(t){const e=hi(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=TA(t.path)),i.serverResponse=r.serverResponse,i}return n}function lR(t,e,n){const s=e.fullServerUrl(),r=Gs(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new es(r,i,_u(t,n),o);return a.errorHandler=wu(e),a}function uR(t,e,n){const s=e.fullServerUrl(),r=Gs(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new es(r,i,cR(t,n),o);return a.errorHandler=wu(e),a}function hR(t,e){const n=e.fullServerUrl(),s=Gs(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(c,l){}const a=new es(s,r,o,i);return a.successCodes=[200,204],a.errorHandler=wu(e),a}function fR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Jm(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=fR(null,e)),s}function Qm(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let L="";for(let U=0;U<2;U++)L=L+Math.random().toString().slice(2);return L}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Jm(e,s,r),u=Ym(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",g=Wt.getBlob(h,s,f);if(g===null)throw Vm();const m={name:l.fullPath},E=Gs(i,t.host,t._protocol),v="POST",S=t.maxUploadRetryTime,O=new es(E,v,_u(t,n),S);return O.urlParams=m,O.headers=o,O.body=g.uploadData(),O.errorHandler=hi(e),O}class ia{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function Eu(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Gt(!1)}return Gt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function dR(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Jm(e,s,r),a={name:o.fullPath},c=Gs(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Ym(o,n),f=t.maxUploadRetryTime;function g(E){Eu(E);let v;try{v=E.getResponseHeader("X-Goog-Upload-URL")}catch{Gt(!1)}return Gt(na(v)),v}const m=new es(c,l,g,f);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=hi(e),m}function pR(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const u=Eu(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Gt(!1)}h||Gt(!1);const f=Number(h);return Gt(!isNaN(f)),new ia(f,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new es(n,o,i,a);return c.headers=r,c.errorHandler=hi(e),c}const Zm=256*1024;function gR(t,e,n,s,r,i,o,a){const c=new ia(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw OA();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const h=c.current,f=h+u,m={"X-Goog-Upload-Command":u===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},E=s.slice(h,f);if(E===null)throw Vm();function v(U,ee){const ae=Eu(U,["active","final"]),W=c.current+u,ue=s.size();let ce;return ae==="final"?ce=_u(e,i)(U,ee):ce=null,new ia(W,ue,ae==="final",ce)}const S="POST",O=e.maxUploadRetryTime,L=new es(n,S,v,O);return L.headers=m,L.body=E.uploadData(),L.progressCallback=a||null,L.errorHandler=hi(t),L}const ot={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Tu(t){switch(t){case"running":case"pausing":case"canceling":return ot.RUNNING;case"paused":return ot.PAUSED;case"success":return ot.SUCCESS;case"canceled":return ot.CANCELED;case"error":return ot.ERROR;default:return ot.ERROR}}/**
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
 */class mR{constructor(e,n,s){if(FA(e)||n!=null||s!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Xs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class yR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Zn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Zn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Zn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw ui("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ui("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ui("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ui("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ui("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vR extends yR{initXhr(){this.xhr_.responseType="text"}}function _n(){return new vR}/**
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
 */class _R{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=vu(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{this._request=void 0,this._chunkMultiplier=1,r._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=r,this._transition("error"))},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals("canceled")?this.completeTransitions_():(this._error=r,this._transition("error"))},this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=dR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,_n,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=pR(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,_n,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Zm*this._chunkMultiplier,n=new ia(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=gR(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,_n,r,i);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Zm*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=lR(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,_n,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Qm(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,_n,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Fm(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Tu(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new mR(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Tu(this._state)){case ot.SUCCESS:Xs(this._resolve.bind(null,this.snapshot))();break;case ot.CANCELED:case ot.ERROR:const n=this._reject;Xs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Tu(this._state)){case ot.RUNNING:case ot.PAUSED:e.next&&Xs(e.next.bind(e,this.snapshot))();break;case ot.SUCCESS:e.complete&&Xs(e.complete.bind(e))();break;case ot.CANCELED:case ot.ERROR:e.error&&Xs(e.error.bind(e,this._error))();break;default:e.error&&Xs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ts{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ts(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Gm(this._location.path)}get storage(){return this._service}get parent(){const e=tR(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new ts(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DA(e)}}function wR(t,e,n){t._throwIfRoot("uploadBytes");const s=Qm(t.storage,t._location,vu(),new Wt(e,!0),n);return t.storage.makeRequestWithTokens(s,_n).then(r=>({metadata:r,ref:t}))}function ER(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new _R(t,new Wt(e),n)}function TR(t){t._throwIfRoot("getDownloadURL");const e=uR(t.storage,t._location,vu());return t.storage.makeRequestWithTokens(e,_n).then(n=>{if(n===null)throw PA();return n})}function IR(t){t._throwIfRoot("deleteObject");const e=hR(t.storage,t._location);return t.storage.makeRequestWithTokens(e,_n)}function bR(t,e){const n=nR(t._location.path,e),s=new pt(t._location.bucket,n);return new ts(t.storage,s)}/**
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
 */function SR(t){return/^[A-Za-z]+:\/\//.test(t)}function AR(t,e){return new ts(t,e)}function ey(t,e){if(t instanceof Iu){const n=t;if(n._bucket==null)throw NA();const s=new ts(n,n._bucket);return e!=null?ey(s,e):s}else return e!==void 0?bR(t,e):t}function RR(t,e){if(e&&SR(e)){if(t instanceof Iu)return AR(t,e);throw gu("To use ref(service, url), the first argument must be a Storage instance.")}else return ey(t,e)}function ty(t,e){const n=e==null?void 0:e[Um];return n==null?null:pt.makeFromBucketSpec(n,t)}class Iu{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Lm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wA,this._maxUploadRetryTime=EA,this._requests=new Set,r!=null?this._bucket=pt.makeFromBucketSpec(r,this._host):this._bucket=ty(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=ty(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ts(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new xA($m());{const i=KA(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const ny="@firebase/storage",sy="0.9.1";/**
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
 */const ry="storage";function aC(t,e,n){return t=be(t),wR(t,e,n)}function cC(t,e,n){return t=be(t),ER(t,e,n)}function lC(t){return t=be(t),TR(t)}function uC(t){return t=be(t),IR(t)}function hC(t,e){return t=be(t),RR(t,e)}function fC(t=fc(),e){return t=be(t),Hi(t,ry).getImmediate({identifier:e})}function CR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Iu(n,s,r,e,bs)}function kR(){Is(new Pn(ry,CR,"PUBLIC").setMultipleInstances(!0)),Ot(ny,sy,""),Ot(ny,sy,"esm2017")}kR();export{LR as A,jR as B,gb as C,uC as D,JR as E,Rt as F,mn as G,XR as H,QR as I,cC as J,eC as K,rC as L,sC as M,nC as N,zR as O,HR as P,ZR as S,YR as T,WR as W,GR as _,xh as a,lt as b,DR as c,Bv as d,fC as e,$R as f,oC as g,VR as h,BR as i,FR as j,hC as k,lC as l,qR as m,MR as n,Lv as o,xR as p,KR as q,PR as r,la as s,NR as t,aC as u,tC as v,Qy as w,iC as x,UR as y,OR as z};
