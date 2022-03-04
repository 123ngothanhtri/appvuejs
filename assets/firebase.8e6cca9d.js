import{q as Fn,_ as La,u as xa,x as rt,y as Ma,C as Va,L as ee,z as Oa,S as Pa,A as Fa,B as Ua,D as qa,E as $a,H as Ba,I as ja,J as Ka,K as Ga}from"./vendor.c5a18318.js";var Ha="firebase",Wa="9.6.3";/**
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
 */Fn(Ha,Wa,"app");var za=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m,Un=Un||{},T=za||self;function Ue(){}function qn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ne(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Qa(e){return Object.prototype.hasOwnProperty.call(e,$n)&&e[$n]||(e[$n]=++Ya)}var $n="closure_uid_"+(1e9*Math.random()>>>0),Ya=0;function Xa(e,t,n){return e.call.apply(e.bind,arguments)}function Ja(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function F(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?F=Xa:F=Ja,F.apply(null,arguments)}function qe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function U(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function lt(){this.s=this.s,this.o=this.o}var Za=0,tu={};lt.prototype.s=!1;lt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Za!=0)){var e=Qa(this);delete tu[e]}};lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ci=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Ni=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function eu(e){t:{var t=Hu;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function ki(e){return Array.prototype.concat.apply([],arguments)}function Bn(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function $e(e){return/^[\s\xa0]*$/.test(e)}var Di=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function W(e,t){return e.indexOf(t)!=-1}function jn(e,t){return e<t?-1:e>t?1:0}var z;t:{var bi=T.navigator;if(bi){var Ri=bi.userAgent;if(Ri){z=Ri;break t}}z=""}function Kn(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function _i(e){const t={};for(const n in e)t[n]=e[n];return t}var Li="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xi(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Li.length;r++)n=Li[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Gn(e){return Gn[" "](e),e}Gn[" "]=Ue;function nu(e){var t=ru;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var su=W(z,"Opera"),Mt=W(z,"Trident")||W(z,"MSIE"),Mi=W(z,"Edge"),Hn=Mi||Mt,Vi=W(z,"Gecko")&&!(W(z.toLowerCase(),"webkit")&&!W(z,"Edge"))&&!(W(z,"Trident")||W(z,"MSIE"))&&!W(z,"Edge"),iu=W(z.toLowerCase(),"webkit")&&!W(z,"Edge");function Oi(){var e=T.document;return e?e.documentMode:void 0}var Be;t:{var Wn="",zn=function(){var e=z;if(Vi)return/rv:([^\);]+)(\)|;)/.exec(e);if(Mi)return/Edge\/([\d\.]+)/.exec(e);if(Mt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(iu)return/WebKit\/(\S+)/.exec(e);if(su)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(zn&&(Wn=zn?zn[1]:""),Mt){var Qn=Oi();if(Qn!=null&&Qn>parseFloat(Wn)){Be=String(Qn);break t}}Be=Wn}var ru={};function ou(){return nu(function(){let e=0;const t=Di(String(Be)).split("."),n=Di("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=jn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||jn(i[2].length==0,r[2].length==0)||jn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Yn;if(T.document&&Mt){var Pi=Oi();Yn=Pi||parseInt(Be,10)||void 0}else Yn=void 0;var au=Yn,uu=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",Ue,t),T.removeEventListener("test",Ue,t)}catch{}return e}();function K(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};function se(e,t){if(K.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Vi){t:{try{Gn(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:hu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&se.Z.h.call(this)}}U(se,K);var hu={2:"touch",3:"pen",4:"mouse"};se.prototype.h=function(){se.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ie="closure_listenable_"+(1e6*Math.random()|0),cu=0;function lu(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++cu,this.ca=this.fa=!1}function je(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Ke(e){this.src=e,this.g={},this.h=0}Ke.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Jn(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new lu(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function Xn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Ci(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(je(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Jn(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var Zn="closure_lm_"+(1e6*Math.random()|0),ts={};function Fi(e,t,n,s,i){if(s&&s.once)return qi(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Fi(e,t[r],n,s,i);return null}return n=is(n),e&&e[ie]?e.N(t,n,ne(s)?!!s.capture:!!s,i):Ui(e,t,n,!1,s,i)}function Ui(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ne(i)?!!i.capture:!!i,a=ns(e);if(a||(e[Zn]=a=new Ke(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=fu(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)uu||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Bi(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fu(){function e(n){return t.call(e.src,e.listener,n)}var t=du;return e}function qi(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)qi(e,t[r],n,s,i);return null}return n=is(n),e&&e[ie]?e.O(t,n,ne(s)?!!s.capture:!!s,i):Ui(e,t,n,!0,s,i)}function $i(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)$i(e,t[r],n,s,i);else s=ne(s)?!!s.capture:!!s,n=is(n),e&&e[ie]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Jn(r,n,s,i),-1<n&&(je(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ns(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Jn(t,n,s,i)),(n=-1<e?t[e]:null)&&es(n))}function es(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[ie])Xn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Bi(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ns(t))?(Xn(n,e),n.h==0&&(n.src=null,t[Zn]=null)):je(e)}}}function Bi(e){return e in ts?ts[e]:ts[e]="on"+e}function du(e,t){if(e.ca)e=!0;else{t=new se(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&es(e),e=n.call(s,t)}return e}function ns(e){return e=e[Zn],e instanceof Ke?e:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function is(e){return typeof e=="function"?e:(e[ss]||(e[ss]=function(t){return e.handleEvent(t)}),e[ss])}function O(){lt.call(this),this.i=new Ke(this),this.P=this,this.I=null}U(O,lt);O.prototype[ie]=!0;O.prototype.removeEventListener=function(e,t,n,s){$i(this,e,t,n,s)};function q(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new K(t,e);else if(t instanceof K)t.target=t.target||e;else{var i=t;t=new K(s,e),xi(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ge(o,s,!0,t)&&i}if(o=t.g=e,i=Ge(o,s,!0,t)&&i,i=Ge(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ge(o,s,!1,t)&&i}O.prototype.M=function(){if(O.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)je(n[s]);delete e.g[t],e.h--}}this.I=null};O.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};O.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ge(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Xn(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var rs=T.JSON.stringify;function gu(){var e=Ki;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class pu{constructor(){this.h=this.g=null}add(t,n){const s=ji.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ji=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new mu,e=>e.reset());class mu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yu(e){T.setTimeout(()=>{throw e},0)}function os(e,t){as||vu(),us||(as(),us=!0),Ki.add(e,t)}var as;function vu(){var e=T.Promise.resolve(void 0);as=function(){e.then(wu)}}var us=!1,Ki=new pu;function wu(){for(var e;e=gu();){try{e.h.call(e.g)}catch(n){yu(n)}var t=ji;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}us=!1}function He(e,t){O.call(this),this.h=e||1,this.g=t||T,this.j=F(this.kb,this),this.l=Date.now()}U(He,O);m=He.prototype;m.da=!1;m.S=null;m.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),q(this,"tick"),this.da&&(hs(this),this.start()))}};m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}m.M=function(){He.Z.M.call(this),hs(this),delete this.g};function cs(e,t,n){if(typeof e=="function")n&&(e=F(e,n));else if(e&&typeof e.handleEvent=="function")e=F(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function Gi(e){e.g=cs(()=>{e.g=null,e.i&&(e.i=!1,Gi(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Eu extends lt{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gi(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(e){lt.call(this),this.h=e,this.g={}}U(re,lt);var Hi=[];function Wi(e,t,n,s){Array.isArray(n)||(n&&(Hi[0]=n.toString()),n=Hi);for(var i=0;i<n.length;i++){var r=Fi(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function zi(e){Kn(e.g,function(t,n){this.g.hasOwnProperty(n)&&es(t)},e),e.g={}}re.prototype.M=function(){re.Z.M.call(this),zi(this)};re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function We(){this.g=!0}We.prototype.Aa=function(){this.g=!1};function Tu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Iu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Vt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Su(e,n)+(s?" "+s:"")})}function Au(e,t){e.info(function(){return"TIMEOUT: "+t})}We.prototype.info=function(){};function Su(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return rs(n)}catch{return t}}var wt={},Qi=null;function ze(){return Qi=Qi||new O}wt.Ma="serverreachability";function Yi(e){K.call(this,wt.Ma,e)}U(Yi,K);function oe(e){const t=ze();q(t,new Yi(t,e))}wt.STAT_EVENT="statevent";function Xi(e,t){K.call(this,wt.STAT_EVENT,e),this.stat=t}U(Xi,K);function Q(e){const t=ze();q(t,new Xi(t,e))}wt.Na="timingevent";function Ji(e,t){K.call(this,wt.Na,e),this.size=t}U(Ji,K);function ae(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Qe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Zi={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ls(){}ls.prototype.h=null;function tr(e){return e.h||(e.h=e.i())}function er(){}var ue={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function fs(){K.call(this,"d")}U(fs,K);function ds(){K.call(this,"c")}U(ds,K);var gs;function Ye(){}U(Ye,ls);Ye.prototype.g=function(){return new XMLHttpRequest};Ye.prototype.i=function(){return{}};gs=new Ye;function he(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new re(this),this.P=Cu,e=Hn?125:void 0,this.W=new He(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new nr}function nr(){this.i=null,this.g="",this.h=!1}var Cu=45e3,ps={},Xe={};m=he.prototype;m.setTimeout=function(e){this.P=e};function ms(e,t,n){e.K=1,e.v=nn(at(t)),e.s=n,e.U=!0,sr(e,null)}function sr(e,t){e.F=Date.now(),ce(e),e.A=at(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),fr(n.h,"t",s),e.C=0,n=e.l.H,e.h=new nr,e.g=Vr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Eu(F(e.Ia,e,e.g),e.O)),Wi(e.V,e.g,"readystatechange",e.gb),t=e.H?_i(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),oe(1),Tu(e.j,e.u,e.A,e.m,e.X,e.s)}m.gb=function(e){e=e.target;const t=this.L;t&&ut(e)==3?t.l():this.Ia(e)};m.Ia=function(e){try{if(e==this.g)t:{const c=ut(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>c)&&(c!=3||Hn||this.g&&(this.h.h||this.g.ga()||Sr(this.g)))){this.I||c!=4||t==7||(t==8||0>=l?oe(3):oe(2)),Je(this);var n=this.g.ba();this.N=n;e:if(ir(this)){var s=Sr(this.g);e="";var i=s.length,r=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Et(this),le(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Iu(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$e(a)){var h=a;break e}}h=null}if(n=h)Vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ys(this,n);else{this.i=!1,this.o=3,Q(12),Et(this),le(this);break t}}this.U?(rr(this,c,o),Hn&&this.i&&c==3&&(Wi(this.V,this.W,"tick",this.fb),this.W.start())):(Vt(this.j,this.m,o,null),ys(this,o)),c==4&&Et(this),this.i&&!this.I&&(c==4?_r(this.l,this):(this.i=!1,ce(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Q(12)):(this.o=0,Q(13)),Et(this),le(this)}}}catch{}finally{}};function ir(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function rr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Nu(e,n),i==Xe){t==4&&(e.o=4,Q(14),s=!1),Vt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ps){e.o=4,Q(15),Vt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Vt(e.j,e.m,i,null),ys(e,i);ir(e)&&i!=Xe&&i!=ps&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Q(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ds(t),t.L=!0,Q(11))):(Vt(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),le(e))}m.fb=function(){if(this.g){var e=ut(this.g),t=this.g.ga();this.C<t.length&&(Je(this),rr(this,e,t),this.i&&e!=4&&ce(this))}};function Nu(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Xe:(n=Number(t.substring(n,s)),isNaN(n)?ps:(s+=1,s+n>t.length?Xe:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,Et(this)};function ce(e){e.Y=Date.now()+e.P,or(e,e.P)}function or(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ae(F(e.eb,e),t)}function Je(e){e.B&&(T.clearTimeout(e.B),e.B=null)}m.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Au(this.j,this.A),this.K!=2&&(oe(3),Q(17)),Et(this),this.o=2,le(this)):or(this,this.Y-e)};function le(e){e.l.G==0||e.I||_r(e.l,e)}function Et(e){Je(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,hs(e.W),zi(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ys(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Es(n.i,e))){if(n.I=e.N,!e.J&&Es(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)hn(n),an(n);else break t;ks(n),Q(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ae(F(n.ab,n),6e3));if(1>=pr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else At(n,11)}else if((e.J||n.g==e)&&hn(n),!$e(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const c=h[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const d=h[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.i;!r.g&&(W(v,"spdy")||W(v,"quic")||W(v,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ts(r,r.h),r.h=null))}if(s.D){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(s.sa=S,_(s.F,s.D,S))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=Mr(s,s.H?s.la:null,s.W),o.J){mr(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(Je(a),ce(a)),s.g=o}else br(s);0<n.l.length&&un(n)}else h[0]!="stop"&&h[0]!="close"||At(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?At(n,7):Cs(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}oe(4)}catch{}}function ku(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(qn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function vs(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(qn(e)||typeof e=="string")Ni(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(qn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=ku(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Ot(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Ot)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}m=Ot.prototype;m.R=function(){ws(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};m.T=function(){return ws(this),this.g.concat()};function ws(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Tt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Tt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}m.get=function(e,t){return Tt(this.h,e)?this.h[e]:t};m.set=function(e,t){Tt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};m.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Tt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var ar=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Du(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function It(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof It){this.g=t!==void 0?t:e.g,Ze(this,e.j),this.s=e.s,tn(this,e.i),en(this,e.m),this.l=e.l,t=e.h;var n=new ge;n.i=t.i,t.g&&(n.g=new Ot(t.g),n.h=t.h),ur(this,n),this.o=e.o}else e&&(n=String(e).match(ar))?(this.g=!!t,Ze(this,n[1]||"",!0),this.s=fe(n[2]||""),tn(this,n[3]||"",!0),en(this,n[4]),this.l=fe(n[5]||"",!0),ur(this,n[6]||"",!0),this.o=fe(n[7]||"")):(this.g=!!t,this.h=new ge(null,this.g))}It.prototype.toString=function(){var e=[],t=this.j;t&&e.push(de(t,hr,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(de(t,hr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(de(n,n.charAt(0)=="/"?xu:Lu,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",de(n,Vu)),e.join("")};function at(e){return new It(e)}function Ze(e,t,n){e.j=n?fe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tn(e,t,n){e.i=n?fe(t,!0):t}function en(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ur(e,t,n){t instanceof ge?(e.h=t,Ou(e.h,e.g)):(n||(t=de(t,Mu)),e.h=new ge(t,e.g))}function _(e,t,n){e.h.set(t,n)}function nn(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function bu(e){return e instanceof It?at(e):new It(e,void 0)}function Ru(e,t,n,s){var i=new It(null,void 0);return e&&Ze(i,e),t&&tn(i,t),n&&en(i,n),s&&(i.l=s),i}function fe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function de(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,_u),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function _u(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var hr=/[#\/\?@]/g,Lu=/[#\?:]/g,xu=/[#\?]/g,Mu=/[#\?@]/g,Vu=/#/g;function ge(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ft(e){e.g||(e.g=new Ot,e.h=0,e.i&&Du(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=ge.prototype;m.add=function(e,t){ft(this),this.i=null,e=Pt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function cr(e,t){ft(e),t=Pt(e,t),Tt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Tt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&ws(e)))}function lr(e,t){return ft(e),t=Pt(e,t),Tt(e.g.h,t)}m.forEach=function(e,t){ft(this),this.g.forEach(function(n,s){Ni(n,function(i){e.call(t,i,s,this)},this)},this)};m.T=function(){ft(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};m.R=function(e){ft(this);var t=[];if(typeof e=="string")lr(this,e)&&(t=ki(t,this.g.get(Pt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=ki(t,e[n])}return t};m.set=function(e,t){return ft(this),this.i=null,e=Pt(this,e),lr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function fr(e,t,n){cr(e,t),0<n.length&&(e.i=null,e.g.set(Pt(e,t),Bn(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function Pt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ou(e,t){t&&!e.j&&(ft(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(cr(this,s),fr(this,i,n))},e)),e.j=t}var Pu=class{constructor(e,t){this.h=e,this.g=t}};function dr(e){this.l=e||Fu,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fu=10;function gr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function pr(e){return e.h?1:e.g?e.g.size:0}function Es(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ts(e,t){e.g?e.g.add(t):e.h=t}function mr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}dr.prototype.cancel=function(){if(this.i=yr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function yr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Bn(e.i)}function Is(){}Is.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Is.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function Uu(){this.g=new Is}function qu(e,t,n){const s=n||"";try{vs(e,function(i,r){let o=i;ne(i)&&(o=rs(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function $u(e,t){const n=new We;if(T.Image){const s=new Image;s.onload=qe(sn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=qe(sn,n,s,"TestLoadImage: error",!1,t),s.onabort=qe(sn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=qe(sn,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function sn(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function pe(e){this.l=e.$b||null,this.j=e.ib||!1}U(pe,ls);pe.prototype.g=function(){return new rn(this.l,this.j)};pe.prototype.i=function(e){return function(){return e}}({});function rn(e,t){O.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=As,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}U(rn,O);var As=0;m=rn.prototype;m.open=function(e,t){if(this.readyState!=As)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ye(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,me(this)),this.readyState=As};m.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ye(this)),this.g&&(this.readyState=3,ye(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function vr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}m.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?me(this):ye(this),this.readyState==3&&vr(this)}};m.Ua=function(e){this.g&&(this.response=this.responseText=e,me(this))};m.Ta=function(e){this.g&&(this.response=e,me(this))};m.ha=function(){this.g&&me(this)};function me(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ye(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ye(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Bu=T.JSON.parse;function x(e){O.call(this),this.headers=new Ot,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wr,this.K=this.L=!1}U(x,O);var wr="",ju=/^https?$/i,Ku=["POST","PUT"];m=x.prototype;m.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gs.g(),this.C=this.u?tr(this.u):tr(gs),this.g.onreadystatechange=F(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Er(this,r);return}e=n||"";const i=new Ot(this.headers);s&&vs(s,function(r,o){i.set(o,r)}),s=eu(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=Ci(Ku,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ar(this),0<this.B&&((this.K=Gu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=F(this.pa,this)):this.A=cs(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Er(this,r)}};function Gu(e){return Mt&&ou()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Hu(e){return e.toLowerCase()=="content-type"}m.pa=function(){typeof Un!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,q(this,"timeout"),this.abort(8))};function Er(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Tr(e),on(e)}function Tr(e){e.D||(e.D=!0,q(e,"complete"),q(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,q(this,"complete"),q(this,"abort"),on(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),on(this,!0)),x.Z.M.call(this)};m.Fa=function(){this.s||(this.F||this.v||this.l?Ir(this):this.cb())};m.cb=function(){Ir(this)};function Ir(e){if(e.h&&typeof Un!="undefined"&&(!e.C[1]||ut(e)!=4||e.ba()!=2)){if(e.v&&ut(e)==4)cs(e.Fa,0,e);else if(q(e,"readystatechange"),ut(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(ar)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!ju.test(i?i.toLowerCase():"")}n=s}if(n)q(e,"complete"),q(e,"success");else{e.m=6;try{var o=2<ut(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Tr(e)}}finally{on(e)}}}}function on(e,t){if(e.g){Ar(e);const n=e.g,s=e.C[0]?Ue:null;e.g=null,e.C=null,t||q(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ar(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function ut(e){return e.g?e.g.readyState:0}m.ba=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};m.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Bu(t)}};function Sr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case wr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Da=function(){return this.m};m.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Wu(e){let t="";return Kn(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ss(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Wu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function ve(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Cr(e){this.za=0,this.l=[],this.h=new We,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ve("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ve("baseRetryDelayMs",5e3,e),this.$a=ve("retryDelaySeedMs",1e4,e),this.Ya=ve("forwardChannelMaxRetries",2,e),this.ra=ve("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new dr(e&&e.concurrentRequestLimit),this.Ca=new Uu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}m=Cr.prototype;m.ma=8;m.G=1;function Cs(e){if(Nr(e),e.G==3){var t=e.V++,n=at(e.F);_(n,"SID",e.J),_(n,"RID",t),_(n,"TYPE","terminate"),we(e,n),t=new he(e,e.h,t,void 0),t.K=2,t.v=nn(at(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=Vr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ce(t)}xr(e)}m.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function an(e){e.g&&(Ds(e),e.g.cancel(),e.g=null)}function Nr(e){an(e),e.u&&(T.clearTimeout(e.u),e.u=null),hn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Ns(e,t){e.l.push(new Pu(e.Za++,t)),e.G==3&&un(e)}function un(e){gr(e.i)||e.m||(e.m=!0,os(e.Ha,e),e.C=0)}function zu(e,t){return pr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=ae(F(e.Ha,e,t),Lr(e,e.C)),e.C++,!0)}m.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new he(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=_i(r),xi(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Dr(this,i,t),n=at(this.F),_(n,"RID",e),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),we(this,n),this.o&&r&&Ss(n,this.o,r),Ts(this.i,i),this.Ra&&_(n,"TYPE","init"),this.ja?(_(n,"$req",t),_(n,"SID","null"),i.$=!0,ms(i,n,null)):ms(i,n,t),this.G=2}}else this.G==3&&(e?kr(this,e):this.l.length==0||gr(this.i)||kr(this))};function kr(e,t){var n;t?n=t.m:n=e.V++;const s=at(e.F);_(s,"SID",e.J),_(s,"RID",n),_(s,"AID",e.U),we(e,s),e.o&&e.s&&Ss(s,e.o,e.s),n=new he(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Dr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Ts(e.i,n),ms(n,s,t)}function we(e,t){e.j&&vs({},function(n,s){_(t,s,n)})}function Dr(e,t,n){n=Math.min(e.l.length,n);var s=e.j?F(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let h=i[u].h;const c=i[u].g;if(h-=r,0>h)r=Math.max(0,i[u].h-100),a=!1;else try{qu(c,o,"req"+h+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function br(e){e.g||e.u||(e.Y=1,os(e.Ga,e),e.A=0)}function ks(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=ae(F(e.Ga,e),Lr(e,e.A)),e.A++,!0)}m.Ga=function(){if(this.u=null,Rr(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=ae(F(this.bb,this),e)}};m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Q(10),an(this),Rr(this))};function Ds(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Rr(e){e.g=new he(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=at(e.oa);_(t,"RID","rpc"),_(t,"SID",e.J),_(t,"CI",e.N?"0":"1"),_(t,"AID",e.U),we(e,t),_(t,"TYPE","xmlhttp"),e.o&&e.s&&Ss(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=nn(at(t)),n.s=null,n.U=!0,sr(n,e)}m.ab=function(){this.v!=null&&(this.v=null,an(this),ks(this),Q(19))};function hn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function _r(e,t){var n=null;if(e.g==t){hn(e),Ds(e),e.g=null;var s=2}else if(Es(e.i,t))n=t.D,mr(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=ze(),q(s,new Ji(s,n,t,i)),un(e)}else br(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&zu(e,t)||s==2&&ks(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:At(e,5);break;case 4:At(e,10);break;case 3:At(e,6);break;default:At(e,2)}}}function Lr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function At(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=F(e.jb,e);n||(n=new It("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Ze(n,"https"),nn(n)),$u(n.toString(),s)}else Q(2);e.G=0,e.j&&e.j.va(t),xr(e),Nr(e)}m.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Q(2)):(this.h.info("Failed to ping google.com"),Q(1))};function xr(e){e.G=0,e.I=-1,e.j&&((yr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Bn(e.l),e.l.length=0),e.j.ua())}function Mr(e,t,n){let s=bu(n);if(s.i!="")t&&tn(s,t+"."+s.i),en(s,s.m);else{const i=T.location;s=Ru(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Kn(e.aa,function(i,r){_(s,r,i)}),t=e.D,n=e.sa,t&&n&&_(s,t,n),_(s,"VER",e.ma),we(e,s),s}function Vr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new x(new pe({ib:!0})):new x(e.qa),t.L=e.H,t}function Or(){}m=Or.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Oa=function(){};function cn(){if(Mt&&!(10<=Number(au)))throw Error("Environmental error: no available transport.")}cn.prototype.g=function(e,t){return new et(e,t)};function et(e,t){O.call(this),this.g=new Cr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!$e(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!$e(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ft(this)}U(et,O);et.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),os(F(e.hb,e,t))),Q(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Mr(e,null,e.W),un(e)};et.prototype.close=function(){Cs(this.g)};et.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Ns(this.g,t)}else this.v?(t={},t.__data__=rs(e),Ns(this.g,t)):Ns(this.g,e)};et.prototype.M=function(){this.g.j=null,delete this.j,Cs(this.g),delete this.g,et.Z.M.call(this)};function Pr(e){fs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}U(Pr,fs);function Fr(){ds.call(this),this.status=1}U(Fr,ds);function Ft(e){this.g=e}U(Ft,Or);Ft.prototype.xa=function(){q(this.g,"a")};Ft.prototype.wa=function(e){q(this.g,new Pr(e))};Ft.prototype.va=function(e){q(this.g,new Fr(e))};Ft.prototype.ua=function(){q(this.g,"b")};cn.prototype.createWebChannel=cn.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;Qe.NO_ERROR=0;Qe.TIMEOUT=8;Qe.HTTP_ERROR=6;Zi.COMPLETE="complete";er.EventType=ue;ue.OPEN="a";ue.CLOSE="b";ue.ERROR="c";ue.MESSAGE="d";O.prototype.listen=O.prototype.N;x.prototype.listenOnce=x.prototype.O;x.prototype.getLastError=x.prototype.La;x.prototype.getLastErrorCode=x.prototype.Da;x.prototype.getStatus=x.prototype.ba;x.prototype.getResponseJson=x.prototype.Qa;x.prototype.getResponseText=x.prototype.ga;x.prototype.send=x.prototype.ea;var Qu=function(){return new cn},Yu=function(){return ze()},bs=Qe,Xu=Zi,Ju=wt,Ur={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Zu=pe,ln=er,th=x;const qr="@firebase/firestore";/**
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
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
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
 */let Ut="9.6.3";/**
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
 */const St=new Fa("@firebase/firestore");function $r(){return St.logLevel}function w(e,...t){if(St.logLevel<=ee.DEBUG){const n=t.map(Rs);St.debug(`Firestore (${Ut}): ${e}`,...n)}}function dt(e,...t){if(St.logLevel<=ee.ERROR){const n=t.map(Rs);St.error(`Firestore (${Ut}): ${e}`,...n)}}function Br(e,...t){if(St.logLevel<=ee.WARN){const n=t.map(Rs);St.warn(`Firestore (${Ut}): ${e}`,...n)}}function Rs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Ut}) INTERNAL ASSERTION FAILED: `+e;throw dt(t),new Error(t)}function b(e,t){e||I()}function A(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Oa{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class eh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class sh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new gt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new gt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(b(typeof s.accessToken=="string"),new eh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(t===null||typeof t=="string"),new J(t)}}class ih{constructor(t,n,s){this.type="FirstParty",this.user=J.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class rh{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new ih(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ah{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,n){this.o=i=>{t.enqueueRetryable(()=>(r=>(r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`),n(r.token)))(i))};const s=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(b(typeof n.token=="string"),new oh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class _s{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.p(s),this.T=s=>n.writeSequenceNumber(s))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
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
 */function uh(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */_s.I=-1;class jr{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=uh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function D(e,t){return e<t?-1:e>t?1:0}function qt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class nt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new nt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new nt(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Kr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ct(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Gr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Ee{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ee.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ee?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends Ee{construct(t,n,s){return new L(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new L(n)}static emptyPath(){return new L([])}}const hh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends Ee{construct(t,n,s){return new Z(t,n,s)}static isValidIdentifier(t){return hh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
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
 */class Te{constructor(t){this.fields=t,t.sort(Z.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return qt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ${constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new $(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new $(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$.EMPTY_BYTE_STRING=new $("");const ch=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pt(e){if(b(!!e),typeof e=="string"){let t=0;const n=ch.exec(e);if(b(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:M(e.seconds),nanos:M(e.nanos)}}function M(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function $t(e){return typeof e=="string"?$.fromBase64String(e):$.fromUint8Array(e)}/**
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
 */function Hr(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wr(e){const t=e.mapValue.fields.__previous_value__;return Hr(t)?Wr(t):t}function Ie(e){const t=pt(e.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */function Bt(e){return e==null}function fn(e){return e===0&&1/e==-1/0}function lh(e){return typeof e=="number"&&Number.isInteger(e)&&!fn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(L.fromString(t))}static fromName(t){return new E(L.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new L(t.slice()))}}/**
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
 */function Nt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Hr(e)?4:10:I()}function ot(e,t){if(e===t)return!0;const n=Nt(e);if(n!==Nt(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ie(e).isEqual(Ie(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=pt(s.timestampValue),o=pt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return $t(s.bytesValue).isEqual($t(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return M(s.geoPointValue.latitude)===M(i.geoPointValue.latitude)&&M(s.geoPointValue.longitude)===M(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return M(s.integerValue)===M(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=M(s.doubleValue),o=M(i.doubleValue);return r===o?fn(r)===fn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return qt(e.arrayValue.values||[],t.arrayValue.values||[],ot);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Kr(r)!==Kr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ot(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Ae(e,t){return(e.values||[]).find(n=>ot(n,t))!==void 0}function jt(e,t){if(e===t)return 0;const n=Nt(e),s=Nt(t);if(n!==s)return D(n,s);switch(n){case 0:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=M(i.integerValue||i.doubleValue),a=M(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return zr(e.timestampValue,t.timestampValue);case 4:return zr(Ie(e),Ie(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,r){const o=$t(i),a=$t(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=D(o[u],a[u]);if(h!==0)return h}return D(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=D(M(i.latitude),M(r.latitude));return o!==0?o:D(M(i.longitude),M(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const h=jt(o[u],a[u]);if(h)return h}return D(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),u=r.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let c=0;c<a.length&&c<h.length;++c){const l=D(a[c],h[c]);if(l!==0)return l;const d=jt(o[a[c]],u[h[c]]);if(d!==0)return d}return D(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function zr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=pt(e),s=pt(t),i=D(n.seconds,s.seconds);return i!==0?i:D(n.nanos,s.nanos)}function Ls(e){return xs(e)}function xs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=pt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?$t(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=xs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${xs(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function Qr(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ms(e){return!!e&&"integerValue"in e}function Vs(e){return!!e&&"arrayValue"in e}function Yr(e){return!!e&&"nullValue"in e}function Xr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function dn(e){return!!e&&"mapValue"in e}function Se(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ct(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Se(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Se(e.arrayValue.values[n]);return t}return Object.assign({},e)}/**
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
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!dn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Se(n)}setAll(t){let n=Z.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Se(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());dn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];dn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Ct(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new st(Se(this.value))}}function Jr(e){const t=[];return Ct(e.fields,(n,s)=>{const i=new Z([n]);if(dn(s)){const r=Jr(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Te(t)}/**
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
 */class G{constructor(t,n,s,i,r){this.key=t,this.documentType=n,this.version=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new G(t,0,N.min(),st.empty(),0)}static newFoundDocument(t,n,s){return new G(t,1,n,s,0)}static newNoDocument(t,n){return new G(t,2,n,st.empty(),0)}static newUnknownDocument(t,n){return new G(t,3,n,st.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof G&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fh{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.R=null}}function Zr(e,t=null,n=[],s=[],i=null,r=null,o=null){return new fh(e,t,n,s,i,r,o)}function Os(e){const t=A(e);if(t.R===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>gh(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Bt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=gn(t.startAt)),t.endAt&&(n+="|ub:",n+=gn(t.endAt)),t.R=n}return t.R}function dh(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ls(s.value)}`;var s}).join(", ")}]`),Bt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: "+gn(e.startAt)),e.endAt&&(t+=", endAt: "+gn(e.endAt)),`Target(${t})`}function Ps(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Ih(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ot(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!no(e.startAt,t.startAt)&&no(e.endAt,t.endAt)}function Fs(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class Y extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.P(t,n,s):new ph(t,n,s):n==="array-contains"?new vh(t,s):n==="in"?new wh(t,s):n==="not-in"?new Eh(t,s):n==="array-contains-any"?new Th(t,s):new Y(t,n,s)}static P(t,n,s){return n==="in"?new mh(t,s):new yh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(jt(n,this.value)):n!==null&&Nt(this.value)===Nt(n)&&this.v(jt(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function gh(e){return e.field.canonicalString()+e.op.toString()+Ls(e.value)}class ph extends Y{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.v(n)}}class mh extends Y{constructor(t,n){super(t,"in",n),this.keys=to("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class yh extends Y{constructor(t,n){super(t,"not-in",n),this.keys=to("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function to(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class vh extends Y{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Vs(n)&&Ae(n.arrayValue,this.value)}}class wh extends Y{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ae(this.value.arrayValue,n)}}class Eh extends Y{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ae(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ae(this.value.arrayValue,n)}}class Th extends Y{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Vs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ae(this.value.arrayValue,s))}}class Us{constructor(t,n){this.position=t,this.before=n}}function gn(e){return`${e.before?"b":"a"}:${e.position.map(t=>Ls(t)).join(",")}`}class Kt{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ih(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function eo(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=jt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return e.before?s<=0:s<0}function no(e,t){if(e===null)return t===null;if(t===null||e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ot(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Gt{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.S=null,this.D=null,this.startAt,this.endAt}}function Ah(e,t,n,s,i,r,o,a){return new Gt(e,t,n,s,i,r,o,a)}function qs(e){return new Gt(e)}function pn(e){return!Bt(e.limit)&&e.limitType==="F"}function mn(e){return!Bt(e.limit)&&e.limitType==="L"}function $s(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Bs(e){for(const t of e.filters)if(t.V())return t.field;return null}function so(e){return e.collectionGroup!==null}function Ce(e){const t=A(e);if(t.S===null){t.S=[];const n=Bs(t),s=$s(t);if(n!==null&&s===null)n.isKeyField()||t.S.push(new Kt(n)),t.S.push(new Kt(Z.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.S.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new Kt(Z.keyField(),r))}}}return t.S}function kt(e){const t=A(e);if(!t.D)if(t.limitType==="F")t.D=Zr(t.path,t.collectionGroup,Ce(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Ce(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Kt(r.field,o))}const s=t.endAt?new Us(t.endAt.position,!t.endAt.before):null,i=t.startAt?new Us(t.startAt.position,!t.startAt.before):null;t.D=Zr(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.D}function Sh(e,t,n){return new Gt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yn(e,t){return Ps(kt(e),kt(t))&&e.limitType===t.limitType}function io(e){return`${Os(kt(e))}|lt:${e.limitType}`}function js(e){return`Query(target=${dh(kt(e))}; limitType=${e.limitType})`}function vn(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!eo(n.startAt,Ce(n),s)||n.endAt&&eo(n.endAt,Ce(n),s))}(e,t)}function ro(e){return(t,n)=>{let s=!1;for(const i of Ce(e)){const r=Ch(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Ch(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?jt(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function oo(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fn(t)?"-0":t}}function ao(e){return{integerValue:""+e}}function Nh(e,t){return lh(t)?ao(t):oo(e,t)}/**
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
 */class wn{constructor(){this._=void 0}}function kh(e,t,n){return e instanceof Ne?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof ke?ho(e,t):e instanceof De?co(e,t):function(s,i){const r=uo(s,i),o=lo(r)+lo(s.N);return Ms(r)&&Ms(s.N)?ao(o):oo(s.k,o)}(e,t)}function Dh(e,t,n){return e instanceof ke?ho(e,t):e instanceof De?co(e,t):n}function uo(e,t){return e instanceof En?Ms(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Ne extends wn{}class ke extends wn{constructor(t){super(),this.elements=t}}function ho(e,t){const n=fo(t);for(const s of e.elements)n.some(i=>ot(i,s))||n.push(s);return{arrayValue:{values:n}}}class De extends wn{constructor(t){super(),this.elements=t}}function co(e,t){let n=fo(t);for(const s of e.elements)n=n.filter(i=>!ot(i,s));return{arrayValue:{values:n}}}class En extends wn{constructor(t,n){super(),this.k=t,this.N=n}}function lo(e){return M(e.integerValue||e.doubleValue)}function fo(e){return Vs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class bh{constructor(t,n){this.field=t,this.transform=n}}function Rh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof ke&&s instanceof ke||n instanceof De&&s instanceof De?qt(n.elements,s.elements,ot):n instanceof En&&s instanceof En?ot(n.N,s.N):n instanceof Ne&&s instanceof Ne}(e.transform,t.transform)}class _h{constructor(t,n){this.version=t,this.transformResults=n}}class mt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new mt}static exists(t){return new mt(void 0,t)}static updateTime(t){return new mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Tn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class In{}function Lh(e,t,n){e instanceof An?function(s,i,r){const o=s.value.clone(),a=yo(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Dt?function(s,i,r){if(!Tn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=yo(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(mo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Ks(e,t,n){e instanceof An?function(s,i,r){if(!Tn(s.precondition,i))return;const o=s.value.clone(),a=vo(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(po(i),o).setHasLocalMutations()}(e,t,n):e instanceof Dt?function(s,i,r){if(!Tn(s.precondition,i))return;const o=vo(s.fieldTransforms,r,i),a=i.data;a.setAll(mo(s)),a.setAll(o),i.convertToFoundDocument(po(i),a).setHasLocalMutations()}(e,t,n):function(s,i){Tn(s.precondition,i)&&i.convertToNoDocument(N.min())}(e,t)}function xh(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=uo(s.transform,i||null);r!=null&&(n==null&&(n=st.empty()),n.set(s.field,r))}return n||null}function go(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&qt(n,s,(i,r)=>Rh(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function po(e){return e.isFoundDocument()?e.version:N.min()}class An extends In{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Dt extends In{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function mo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function yo(e,t,n){const s=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Dh(o,a,n[i]))}return s}function vo(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,kh(r,o,t))}return s}class wo extends In{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Mh extends In{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class Vh{constructor(t){this.count=t}}/**
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
 */var V,C;function Oh(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Eo(e){if(e===void 0)return dt("GRPC error has no .code"),f.UNKNOWN;switch(e){case V.OK:return f.OK;case V.CANCELLED:return f.CANCELLED;case V.UNKNOWN:return f.UNKNOWN;case V.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case V.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case V.INTERNAL:return f.INTERNAL;case V.UNAVAILABLE:return f.UNAVAILABLE;case V.UNAUTHENTICATED:return f.UNAUTHENTICATED;case V.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case V.NOT_FOUND:return f.NOT_FOUND;case V.ALREADY_EXISTS:return f.ALREADY_EXISTS;case V.PERMISSION_DENIED:return f.PERMISSION_DENIED;case V.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case V.ABORTED:return f.ABORTED;case V.OUT_OF_RANGE:return f.OUT_OF_RANGE;case V.UNIMPLEMENTED:return f.UNIMPLEMENTED;case V.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(C=V||(V={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class H{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new H(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new H(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sn(this.root,t,this.comparator,!0)}}class Sn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:B.RED,this.left=i!=null?i:B.EMPTY,this.right=r!=null?r:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new B(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return B.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class j{constructor(t){this.comparator=t,this.data=new H(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new To(this.data.getIterator())}getIteratorFrom(t){return new To(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof j)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new j(this.comparator);return n.data=t,n}}class To{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Ph=new H(E.comparator);function bt(){return Ph}const Fh=new H(E.comparator);function Gs(){return Fh}const Uh=new H(E.comparator);function qh(){return Uh}const $h=new j(E.comparator);function R(...e){let t=$h;for(const n of e)t=t.add(n);return t}const Bh=new j(D);function Io(){return Bh}/**
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
 */class Cn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,be.createSynthesizedTargetChangeForCurrentChange(t,n)),new Cn(N.min(),s,Io(),bt(),R())}}class be{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new be($.EMPTY_BYTE_STRING,n,R(),R(),R())}}/**
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
 */class Nn{constructor(t,n,s,i){this.$=t,this.removedTargetIds=n,this.key=s,this.O=i}}class Ao{constructor(t,n){this.targetId=t,this.M=n}}class So{constructor(t,n,s=$.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Co{constructor(){this.F=0,this.L=ko(),this.B=$.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=R(),n=R(),s=R();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new be(this.B,this.U,t,n,s)}H(){this.q=!1,this.L=ko()}J(t,n){this.q=!0,this.L=this.L.insert(t,n)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class jh{constructor(t){this.et=t,this.nt=new Map,this.st=bt(),this.it=No(),this.rt=new j(D)}ot(t){for(const n of t.$)t.O&&t.O.isFoundDocument()?this.ct(n,t.O):this.at(n,t.key,t.O);for(const n of t.removedTargetIds)this.at(n,t.key,t.O)}ut(t){this.forEachTarget(t,n=>{const s=this.ht(n);switch(t.state){case 0:this.lt(n)&&s.W(t.resumeToken);break;case 1:s.Z(),s.K||s.H(),s.W(t.resumeToken);break;case 2:s.Z(),s.K||this.removeTarget(n);break;case 3:this.lt(n)&&(s.tt(),s.W(t.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.nt.forEach((s,i)=>{this.lt(i)&&n(i)})}dt(t){const n=t.targetId,s=t.M.count,i=this.wt(n);if(i){const r=i.target;if(Fs(r))if(s===0){const o=new E(r.path);this.at(n,o,G.newNoDocument(o,N.min()))}else b(s===1);else this._t(n)!==s&&(this.ft(n),this.rt=this.rt.add(n))}}gt(t){const n=new Map;this.nt.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Fs(a.target)){const u=new E(a.target.path);this.st.get(u)!==null||this.yt(o,u)||this.at(o,u,G.newNoDocument(u,t))}r.j&&(n.set(o,r.G()),r.H())}});let s=R();this.it.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.wt(u);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))});const i=new Cn(t,n,this.rt,this.st,s);return this.st=bt(),this.it=No(),this.rt=new j(D),i}ct(t,n){if(!this.lt(t))return;const s=this.yt(t,n.key)?2:0;this.ht(t).J(n.key,s),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(t))}at(t,n,s){if(!this.lt(t))return;const i=this.ht(t);this.yt(t,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(t)),s&&(this.st=this.st.insert(n,s))}removeTarget(t){this.nt.delete(t)}_t(t){const n=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let n=this.nt.get(t);return n||(n=new Co,this.nt.set(t,n)),n}Tt(t){let n=this.it.get(t);return n||(n=new j(D),this.it=this.it.insert(t,n)),n}lt(t){const n=this.wt(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.nt.get(t);return n&&n.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Co),this.et.getRemoteKeysForTarget(t).forEach(n=>{this.at(t,n,null)})}yt(t,n){return this.et.getRemoteKeysForTarget(t).has(n)}}function No(){return new H(E.comparator)}function ko(){return new H(E.comparator)}/**
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
 */const Kh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Gh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Hh{constructor(t,n){this.databaseId=t,this.C=n}}function kn(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Do(e,t){return e.C?t.toBase64():t.toUint8Array()}function Wh(e,t){return kn(e,t.toTimestamp())}function ht(e){return b(!!e),N.fromTimestamp(function(t){const n=pt(t);return new nt(n.seconds,n.nanos)}(e))}function Hs(e,t){return function(n){return new L(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function bo(e){const t=L.fromString(e);return b(Vo(t)),t}function Ws(e,t){return Hs(e.databaseId,t.path)}function zs(e,t){const n=bo(t);if(n.get(1)!==e.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Ro(n))}function Qs(e,t){return Hs(e.databaseId,t)}function zh(e){const t=bo(e);return t.length===4?L.emptyPath():Ro(t)}function Ys(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ro(e){return b(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function _o(e,t,n){return{name:Ws(e,t),fields:n.value.mapValue.fields}}function Qh(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.C?(b(h===void 0||typeof h=="string"),$.fromBase64String(h||"")):(b(h===void 0||h instanceof Uint8Array),$.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?f.UNKNOWN:Eo(u.code);return new y(h,u.message||"")}(o);n=new So(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=zs(e,s.document.name),r=ht(s.document.updateTime),o=new st({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Nn(u,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=zs(e,s.document),r=s.readTime?ht(s.readTime):N.min(),o=G.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Nn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=zs(e,s.document),r=s.removedTargetIds||[];n=new Nn([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Vh(i),o=s.targetId;n=new Ao(o,r)}}return n}function Yh(e,t){let n;if(t instanceof An)n={update:_o(e,t.key,t.value)};else if(t instanceof wo)n={delete:Ws(e,t.key)};else if(t instanceof Dt)n={update:_o(e,t.key,t.data),updateMask:oc(t.fieldMask)};else{if(!(t instanceof Mh))return I();n={verify:Ws(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ne)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ke)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof De)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof En)return{fieldPath:r.field.canonicalString(),increment:o.N};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Wh(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function Xh(e,t){return e&&e.length>0?(b(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ht(s.updateTime):ht(i);return r.isEqual(N.min())&&(r=ht(i)),new _h(r,s.transformResults||[])}(n,t))):[]}function Jh(e,t){return{documents:[Qs(e,t.path)]}}function Zh(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Qs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Qs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(h=>function(c){if(c.op==="=="){if(Xr(c.value))return{unaryFilter:{field:Ht(c.field),op:"IS_NAN"}};if(Yr(c.value))return{unaryFilter:{field:Ht(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(Xr(c.value))return{unaryFilter:{field:Ht(c.field),op:"IS_NOT_NAN"}};if(Yr(c.value))return{unaryFilter:{field:Ht(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ht(c.field),op:sc(c.op),value:c.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(a){if(a.length!==0)return a.map(u=>function(h){return{field:Ht(h.field),direction:nc(h.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(a,u){return a.C||Bt(u)?u:{value:u}}(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=xo(t.startAt)),t.endAt&&(n.structuredQuery.endAt=xo(t.endAt)),n}function tc(e){let t=zh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){b(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let r=[];n.where&&(r=Lo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(l){return new Kt(Wt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(c)));let a=null;n.limit&&(a=function(c){let l;return l=typeof c=="object"?c.value:c,Bt(l)?null:l}(n.limit));let u=null;n.startAt&&(u=Mo(n.startAt));let h=null;return n.endAt&&(h=Mo(n.endAt)),Ah(t,i,o,r,a,"F",u,h)}function ec(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Lo(e){return e?e.unaryFilter!==void 0?[rc(e)]:e.fieldFilter!==void 0?[ic(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Lo(t)).reduce((t,n)=>t.concat(n)):I():[]}function xo(e){return{before:e.before,values:e.position}}function Mo(e){const t=!!e.before,n=e.values||[];return new Us(n,t)}function nc(e){return Kh[e]}function sc(e){return Gh[e]}function Ht(e){return{fieldPath:e.canonicalString()}}function Wt(e){return Z.fromServerFormat(e.fieldPath)}function ic(e){return Y.create(Wt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function rc(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Wt(e.unaryFilter.field);return Y.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Wt(e.unaryFilter.field);return Y.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wt(e.unaryFilter.field);return Y.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wt(e.unaryFilter.field);return Y.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function oc(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Vo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}const ac="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Re(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class hc{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Lh(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&Ks(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&Ks(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(N.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&qt(this.mutations,t.mutations,(n,s)=>go(n,s))&&qt(this.baseMutations,t.baseMutations,(n,s)=>go(n,s))}}class Xs{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){b(t.mutations.length===s.length);let i=qh();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Xs(t,n,s,i)}}/**
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
 */class Rt{constructor(t,n,s,i,r=N.min(),o=N.min(),a=$.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Rt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class cc{constructor(t){this.Gt=t}}function lc(e){const t=tc({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Sh(t,t.limit,"L"):t}/**
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
 */class fc{constructor(){this.zt=new dc}addToCollectionParentIndex(t,n){return this.zt.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.zt.getEntries(n))}}class dc{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new j(L.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new j(L.comparator)).toArray()}}/**
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
 */class zt{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new zt(0)}static re(){return new zt(-1)}}/**
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
 */async function _e(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==ac)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Le{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i!==void 0){for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n])}else this.inner[s]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),!0;return!1}forEach(t){Ct(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Gr(this.inner)}}/**
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
 */class gc{constructor(){this.changes=new Le(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}getReadTime(t){const n=this.changes.get(t);return n?n.readTime:N.min()}addEntry(t,n){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:n})}removeEntry(t,n=null){this.assertNotApplied(),this.changes.set(t,{document:G.newInvalidDocument(t),readTime:n})}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s.document):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Oo{constructor(t,n,s){this.Je=t,this.An=n,this.Jt=s}Rn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.bn(t,n,s))}bn(t,n,s){return this.Je.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}Pn(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}vn(t,n){return this.Je.getEntries(t,n).next(s=>this.Vn(t,s).next(()=>s))}Vn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.Pn(n,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(t,n.path):so(n)?this.Dn(t,n,s):this.Cn(t,n,s)}Sn(t,n){return this.Rn(t,new E(n)).next(s=>{let i=Gs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Dn(t,n,s){const i=n.collectionGroup;let r=Gs();return this.Jt.getCollectionParents(t,i).next(o=>p.forEach(o,a=>{const u=function(h,c){return new Gt(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.Cn(t,u,s).next(h=>{h.forEach((c,l)=>{r=r.insert(c,l)})})}).next(()=>r))}Cn(t,n,s){let i,r;return this.Je.getDocumentsMatchingQuery(t,n,s).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(t,n))).next(o=>(r=o,this.Nn(t,r,i).next(a=>{i=a;for(const u of r)for(const h of u.mutations){const c=h.key;let l=i.get(c);l==null&&(l=G.newInvalidDocument(c),i=i.insert(c,l)),Ks(h,l,u.localWriteTime),l.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{vn(n,a)||(i=i.remove(o))}),i))}Nn(t,n,s){let i=R();for(const o of n)for(const a of o.mutations)a instanceof Dt&&s.get(a.key)===null&&(i=i.add(a.key));let r=s;return this.Je.getEntries(t,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(r=r.insert(a,u))}),r))}}/**
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
 */class Js{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.kn=s,this.xn=i}static $n(t,n){let s=R(),i=R();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Js(t,n.fromCache,s,i)}}/**
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
 */class pc{On(t){this.Mn=t}getDocumentsMatchingQuery(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(N.min())?this.Fn(t,n):this.Mn.vn(t,i).next(r=>{const o=this.Ln(n,r);return(pn(n)||mn(n))&&this.Bn(n.limitType,o,i,s)?this.Fn(t,n):($r()<=ee.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),js(n)),this.Mn.getDocumentsMatchingQuery(t,n,s).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Ln(t,n){let s=new j(ro(t));return n.forEach((i,r)=>{vn(t,r)&&(s=s.add(r))}),s}Bn(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(t,n){return $r()<=ee.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",js(n)),this.Mn.getDocumentsMatchingQuery(t,n,N.min())}}/**
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
 */class mc{constructor(t,n,s,i){this.persistence=t,this.Un=n,this.k=i,this.qn=new H(D),this.Kn=new Le(r=>Os(r),Ps),this.jn=N.min(),this.An=t.getMutationQueue(s),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Oo(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qn))}}function yc(e,t,n,s){return new mc(e,t,n,s)}async function Po(e,t){const n=A(e);let s=n.An,i=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(u=>(a=u,s=n.persistence.getMutationQueue(t),i=new Oo(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(u=>{const h=[],c=[];let l=R();for(const d of a){h.push(d.batchId);for(const g of d.mutations)l=l.add(g.key)}for(const d of u){c.push(d.batchId);for(const g of d.mutations)l=l.add(g.key)}return i.vn(o,l).next(d=>({Gn:d,removedBatchIds:h,addedBatchIds:c}))})});return n.An=s,n.Wn=i,n.Un.On(n.Wn),r}function vc(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,h){const c=u.batch,l=c.keys();let d=p.resolve();return l.forEach(g=>{d=d.next(()=>h.getEntry(a,g)).next(v=>{const S=u.docVersions.get(g);b(S!==null),v.version.compareTo(S)<0&&(c.applyToRemoteDocument(v,u),v.isValidDocument()&&h.addEntry(v,u.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,c))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.An.performConsistencyCheck(s)).next(()=>n.Wn.vn(s,i))})}function Fo(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.He.getLastRemoteSnapshotVersion(n))}function wc(e,t){const n=A(e),s=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];t.targetChanges.forEach((h,c)=>{const l=i.get(c);if(!l)return;a.push(n.He.removeMatchingKeys(r,h.removedDocuments,c).next(()=>n.He.addMatchingKeys(r,h.addedDocuments,c)));let d=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(c)?d=d.withResumeToken($.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):h.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(h.resumeToken,s)),i=i.insert(c,d),function(g,v,S){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(l,d,h)&&a.push(n.He.updateTargetData(r,d))});let u=bt();if(t.documentUpdates.forEach((h,c)=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Ec(r,o,t.documentUpdates,s,void 0).next(h=>{u=h})),!s.isEqual(N.min())){const h=n.He.getLastRemoteSnapshotVersion(r).next(c=>n.He.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.Wn.Vn(r,u)).next(()=>u)}).then(r=>(n.qn=i,r))}function Ec(e,t,n,s,i){let r=R();return n.forEach(o=>r=r.add(o)),t.getEntries(e,r).next(o=>{let a=bt();return n.forEach((u,h)=>{const c=o.get(u),l=(i==null?void 0:i.get(u))||s;h.isNoDocument()&&h.version.isEqual(N.min())?(t.removeEntry(u,l),a=a.insert(u,h)):!c.isValidDocument()||h.version.compareTo(c.version)>0||h.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(h,l),a=a.insert(u,h)):w("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",h.version)}),a})}function Tc(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.An.getNextMutationBatchAfterBatchId(s,t)))}function Ic(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.He.getTargetData(s,t).next(r=>r?(i=r,p.resolve(i)):n.He.allocateTargetId(s).next(o=>(i=new Rt(t,o,0,s.currentSequenceNumber),n.He.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qn.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(s.targetId,s),n.Kn.set(t,s.targetId)),s})}async function Zs(e,t,n){const s=A(e),i=s.qn.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Re(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qn=s.qn.remove(t),s.Kn.delete(i.target)}function Uo(e,t,n){const s=A(e);let i=N.min(),r=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,h){const c=A(a),l=c.Kn.get(h);return l!==void 0?p.resolve(c.qn.get(l)):c.He.getTargetData(u,h)}(s,o,kt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Un.getDocumentsMatchingQuery(o,t,n?i:N.min(),n?r:R())).next(a=>({documents:a,zn:r})))}/**
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
 */class Ac{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,n){return p.resolve(this.Xn.get(n))}saveBundleMetadata(t,n){var s;return this.Xn.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.Zn.get(n))}saveNamedQuery(t,n){return this.Zn.set(n.name,function(s){return{name:s.name,query:lc(s.bundledQuery),readTime:ht(s.readTime)}}(n)),p.resolve()}}/**
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
 */class ti{constructor(){this.ts=new j(P.es),this.ns=new j(P.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,n){const s=new P(t,n);this.ts=this.ts.add(s),this.ns=this.ns.add(s)}rs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.os(new P(t,n))}cs(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new E(new L([])),s=new P(n,t),i=new P(n,t+1),r=[];return this.ns.forEachInRange([s,i],o=>{this.os(o),r.push(o.key)}),r}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const n=new E(new L([])),s=new P(n,t),i=new P(n,t+1);let r=R();return this.ns.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new P(t,0),s=this.ts.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class P{constructor(t,n){this.key=t,this.fs=n}static es(t,n){return E.comparator(t.key,n.key)||D(t.fs,n.fs)}static ss(t,n){return D(t.fs,n.fs)||E.comparator(t.key,n.key)}}/**
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
 */class Sc{constructor(t,n){this.Jt=t,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new j(P.es)}checkEmpty(t){return p.resolve(this.An.length===0)}addMutationBatch(t,n,s,i){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new hc(r,n,s,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new P(a.key,r)),this.Jt.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.gs(s),r=i<0?0:i;return p.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(t){return p.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new P(n,0),i=new P(n,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([s,i],o=>{const a=this._s(o.fs);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new j(D);return n.forEach(i=>{const r=new P(i,0),o=new P(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([r,o],a=>{s=s.add(a.fs)})}),p.resolve(this.ys(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new P(new E(r),0);let a=new j(D);return this.ws.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.fs)),!0)},o),p.resolve(this.ys(a))}ys(t){const n=[];return t.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){b(this.ps(n.batchId,"removed")===0),this.An.shift();let s=this.ws;return p.forEach(n.mutations,i=>{const r=new P(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ws=s})}ee(t){}containsKey(t,n){const s=new P(n,0),i=this.ws.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.An.length,p.resolve()}ps(t,n){return this.gs(t)}gs(t){return this.An.length===0?0:t-this.An[0].batchId}_s(t){const n=this.gs(t);return n<0||n>=this.An.length?null:this.An[n]}}/**
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
 */class Cc{constructor(t,n){this.Jt=t,this.Ts=n,this.docs=new H(E.comparator),this.size=0}addEntry(t,n,s){const i=n.key,r=this.docs.get(i),o=r?r.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a,readTime:s}),this.size+=a-o,this.Jt.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():G.newInvalidDocument(n))}getEntries(t,n){let s=bt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():G.newInvalidDocument(i))}),p.resolve(s)}getDocumentsMatchingQuery(t,n,s){let i=bt();const r=new E(n.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u,readTime:h}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;h.compareTo(s)<=0||vn(n,u)&&(i=i.insert(u.key,u.mutableCopy()))}return p.resolve(i)}Es(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Nc(this)}getSize(t){return p.resolve(this.size)}}class Nc extends gc{constructor(t){super(),this.De=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(t,i.document,this.getReadTime(s))):this.De.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.De.getEntry(t,n)}getAllFromCache(t,n){return this.De.getEntries(t,n)}}/**
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
 */class kc{constructor(t){this.persistence=t,this.Is=new Le(n=>Os(n),Ps),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.As=0,this.Rs=new ti,this.targetCount=0,this.bs=zt.ie()}forEachTarget(t,n){return this.Is.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.As&&(this.As=n),p.resolve()}ae(t){this.Is.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new zt(n),this.highestTargetId=n),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,n){return this.ae(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.ae(n),p.resolve()}removeTargetData(t,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Is.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.Is.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.Rs.rs(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.Rs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Rs.us(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Rs.ls(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.Rs.containsKey(n))}}/**
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
 */class Dc{constructor(t,n){this.Ps={},this.Be=new _s(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new kc(this),this.Jt=new fc,this.Je=function(s,i){return new Cc(s,i)}(this.Jt,s=>this.referenceDelegate.vs(s)),this.k=new cc(n),this.Ye=new Ac(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let n=this.Ps[t.toKey()];return n||(n=new Sc(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const i=new bc(this.Be.next());return this.referenceDelegate.Vs(),s(i).next(r=>this.referenceDelegate.Ss(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ds(t,n){return p.or(Object.values(this.Ps).map(s=>()=>s.containsKey(t,n)))}}class bc extends uc{constructor(t){super(),this.currentSequenceNumber=t}}class ei{constructor(t){this.persistence=t,this.Cs=new ti,this.Ns=null}static ks(t){return new ei(t)}get xs(){if(this.Ns)return this.Ns;throw I()}addReference(t,n,s){return this.Cs.addReference(s,n),this.xs.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Cs.removeReference(s,n),this.xs.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.xs.add(n.toString()),p.resolve()}removeTarget(t,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.xs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Vs(){this.Ns=new Set}Ss(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.xs,s=>{const i=E.fromPath(s);return this.$s(t,i).next(r=>{r||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(t){return 0}$s(t,n){return p.or([()=>p.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ds(t,n)])}}class qo{constructor(){this.activeTargetIds=Io()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rc{constructor(){this.pi=new qo,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,n,s){this.Ti[t]=n}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new qo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
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
 */class _c{Ei(t){}shutdown(){}}/**
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
 */class $o{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Lc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class xc{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}/**
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
 */class Mc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.Fi=n+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,n,s,i,r){const o=this.Ui(t,n);w("RestConnection","Sending: ",o,s);const a={};return this.qi(a,i,r),this.Ki(t,o,a,s).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw Br("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}ji(t,n,s,i,r){return this.Bi(t,n,s,i,r)}qi(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ut,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}Ui(t,n){const s=Lc[t];return`${this.Fi}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,n,s,i){return new Promise((r,o)=>{const a=new th;a.listenOnce(Xu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case bs.NO_ERROR:const h=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(h)),r(h);break;case bs.TIMEOUT:w("Connection",'RPC "'+t+'" timed out'),o(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case bs.HTTP_ERROR:const c=a.getStatus();if(w("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(v)>=0?v:f.UNKNOWN}(l.status);o(new y(d,l.message))}else o(new y(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}Qi(t,n,s){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Qu(),o=Yu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Zu({})),this.qi(a.initMessageHeaders,n,s),Ua()||qa()||$a()||Ba()||ja()||Ka()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");w("Connection","Creating WebChannel: "+u,a);const h=r.createWebChannel(u,a);let c=!1,l=!1;const d=new xc({Vi:v=>{l?w("Connection","Not sending because WebChannel is closed:",v):(c||(w("Connection","Opening WebChannel transport."),h.open(),c=!0),w("Connection","WebChannel sending:",v),h.send(v))},Si:()=>h.close()}),g=(v,S,k)=>{v.listen(S,X=>{try{k(X)}catch(it){setTimeout(()=>{throw it},0)}})};return g(h,ln.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),g(h,ln.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),d.Oi())}),g(h,ln.EventType.ERROR,v=>{l||(l=!0,Br("Connection","WebChannel transport errored:",v),d.Oi(new y(f.UNAVAILABLE,"The operation could not be completed")))}),g(h,ln.EventType.MESSAGE,v=>{var S;if(!l){const k=v.data[0];b(!!k);const X=k,it=X.error||((S=X[0])===null||S===void 0?void 0:S.error);if(it){w("Connection","WebChannel received error:",it);const Zt=it.status;let te=function(_a){const Si=V[_a];if(Si!==void 0)return Eo(Si)}(Zt),Ai=it.message;te===void 0&&(te=f.INTERNAL,Ai="Unknown error status: "+Zt+" with message "+it.message),l=!0,d.Oi(new y(te,Ai)),h.close()}else w("Connection","WebChannel received:",k),d.Mi(k)}}),g(o,Ju.STAT_EVENT,v=>{v.stat===Ur.PROXY?w("Connection","Detected buffering proxy"):v.stat===Ur.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}function ni(){return typeof document!="undefined"?document:null}/**
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
 */function Dn(e){return new Hh(e,!0)}class Bo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Me=t,this.timerId=n,this.Wi=s,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const n=Math.floor(this.Hi+this.tr()),s=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
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
 */class jo{constructor(t,n,s,i,r,o,a,u){this.Me=t,this.nr=s,this.sr=i,this.ir=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Bo(t,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,t!==4?this.ur.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(dt(n.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.rr===n&&this.Ir(s,i)},s=>{t(()=>{const i=new y(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ar(i)})})}Ir(t,n){const s=this.Er(this.rr);this.stream=this.Rr(t,n),this.stream.Di(()=>{s(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{s(()=>this.Ar(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return n=>{this.Me.enqueueAndForget(()=>this.rr===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vc extends jo{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.k=r}Rr(t,n){return this.ir.Qi("Listen",t,n)}onMessage(t){this.ur.reset();const n=Qh(this.k,t),s=function(i){if(!("targetChange"in i))return N.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?N.min():r.readTime?ht(r.readTime):N.min()}(t);return this.listener.br(n,s)}Pr(t){const n={};n.database=Ys(this.k),n.addTarget=function(i,r){let o;const a=r.target;return o=Fs(a)?{documents:Jh(i,a)}:{query:Zh(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Do(i,r.resumeToken):r.snapshotVersion.compareTo(N.min())>0&&(o.readTime=kn(i,r.snapshotVersion.toTimestamp())),o}(this.k,t);const s=ec(this.k,t);s&&(n.labels=s),this.gr(n)}vr(t){const n={};n.database=Ys(this.k),n.removeTarget=t,this.gr(n)}}class Oc extends jo{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,n){return this.ir.Qi("Write",t,n)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const n=Xh(t.writeResults,t.commitTime),s=ht(t.commitTime);return this.listener.Cr(s,n)}return b(!t.writeResults||t.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=Ys(this.k),this.gr(t)}Dr(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Yh(this.k,s))};this.gr(n)}}/**
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
 */class Pc extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.ir=s,this.k=i,this.$r=!1}Or(){if(this.$r)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.Bi(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(f.UNKNOWN,i.toString())})}ji(t,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.ji(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(f.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class Fc{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,t==="Online"&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(dt(n),this.Lr=!1):w("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class Uc{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei(o=>{s.enqueueAndForget(async()=>{_t(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=A(a);u.Gr.add(4),await xe(u),u.Jr.set("Unknown"),u.Gr.delete(4),await bn(u)}(this))})}),this.Jr=new Fc(s,i)}}async function bn(e){if(_t(e))for(const t of e.zr)await t(!0)}async function xe(e){for(const t of e.zr)await t(!1)}function Ko(e,t){const n=A(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),ri(n)?ii(n):Qt(n).lr()&&si(n,t))}function Go(e,t){const n=A(e),s=Qt(n);n.Wr.delete(t),s.lr()&&Ho(n,t),n.Wr.size===0&&(s.lr()?s._r():_t(n)&&n.Jr.set("Unknown"))}function si(e,t){e.Yr.X(t.targetId),Qt(e).Pr(t)}function Ho(e,t){e.Yr.X(t),Qt(e).vr(t)}function ii(e){e.Yr=new jh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),Qt(e).start(),e.Jr.Br()}function ri(e){return _t(e)&&!Qt(e).hr()&&e.Wr.size>0}function _t(e){return A(e).Gr.size===0}function Wo(e){e.Yr=void 0}async function qc(e){e.Wr.forEach((t,n)=>{si(e,t)})}async function $c(e,t){Wo(e),ri(e)?(e.Jr.Kr(t),ii(e)):e.Jr.set("Unknown")}async function Bc(e,t,n){if(e.Jr.set("Online"),t instanceof So&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Wr.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Wr.delete(o),s.Yr.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Rn(e,s)}else if(t instanceof Nn?e.Yr.ot(t):t instanceof Ao?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(N.min()))try{const s=await Fo(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Yr.gt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.Wr.get(u);h&&i.Wr.set(u,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.Wr.get(a);if(!u)return;i.Wr.set(a,u.withResumeToken($.EMPTY_BYTE_STRING,u.snapshotVersion)),Ho(i,a);const h=new Rt(u.target,a,1,u.sequenceNumber);si(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Rn(e,s)}}async function Rn(e,t,n){if(!Re(t))throw t;e.Gr.add(1),await xe(e),e.Jr.set("Offline"),n||(n=()=>Fo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await bn(e)})}function zo(e,t){return t().catch(n=>Rn(e,n,t))}async function _n(e){const t=A(e),n=yt(t);let s=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;jc(t);)try{const i=await Tc(t.localStore,s);if(i===null){t.Qr.length===0&&n._r();break}s=i.batchId,Kc(t,i)}catch(i){await Rn(t,i)}Qo(t)&&Yo(t)}function jc(e){return _t(e)&&e.Qr.length<10}function Kc(e,t){e.Qr.push(t);const n=yt(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function Qo(e){return _t(e)&&!yt(e).hr()&&e.Qr.length>0}function Yo(e){yt(e).start()}async function Gc(e){yt(e).kr()}async function Hc(e){const t=yt(e);for(const n of e.Qr)t.Dr(n.mutations)}async function Wc(e,t,n){const s=e.Qr.shift(),i=Xs.from(s,t,n);await zo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await _n(e)}async function zc(e,t){t&&yt(e).Sr&&await async function(n,s){if(i=s.code,Oh(i)&&i!==f.ABORTED){const r=n.Qr.shift();yt(n).wr(),await zo(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await _n(n)}var i}(e,t),Qo(e)&&Yo(e)}async function Qc(e,t){const n=A(e);t?(n.Gr.delete(2),await bn(n)):t||(n.Gr.add(2),await xe(n),n.Jr.set("Unknown"))}function Qt(e){return e.Xr||(e.Xr=function(t,n,s){const i=A(t);return i.Or(),new Vc(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,s)}(e.datastore,e.asyncQueue,{Di:qc.bind(null,e),Ni:$c.bind(null,e),br:Bc.bind(null,e)}),e.zr.push(async t=>{t?(e.Xr.wr(),ri(e)?ii(e):e.Jr.set("Unknown")):(await e.Xr.stop(),Wo(e))})),e.Xr}function yt(e){return e.Zr||(e.Zr=function(t,n,s){const i=A(t);return i.Or(),new Oc(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,s)}(e.datastore,e.asyncQueue,{Di:Gc.bind(null,e),Ni:zc.bind(null,e),Nr:Hc.bind(null,e),Cr:Wc.bind(null,e)}),e.zr.push(async t=>{t?(e.Zr.wr(),await _n(e)):(await e.Zr.stop(),e.Qr.length>0&&(w("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))})),e.Zr}/**
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
 */class oi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new oi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ai(e,t){if(dt("AsyncQueue",`${t}: ${e}`),Re(e))return new y(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Yt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=Gs(),this.sortedSet=new H(this.comparator)}static emptySet(t){return new Yt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Yt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Yt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Xo{constructor(){this.eo=new H(E.comparator)}track(t){const n=t.doc.key,s=this.eo.get(n);s?t.type!==0&&s.type===3?this.eo=this.eo.insert(n,t):t.type===3&&s.type!==1?this.eo=this.eo.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.eo=this.eo.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.eo=this.eo.remove(n):t.type===1&&s.type===2?this.eo=this.eo.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):I():this.eo=this.eo.insert(n,t)}no(){const t=[];return this.eo.inorderTraversal((n,s)=>{t.push(s)}),t}}class Xt{constructor(t,n,s,i,r,o,a,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Xt(t,n,Yt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Yc{constructor(){this.so=void 0,this.listeners=[]}}class Xc{constructor(){this.queries=new Le(t=>io(t),yn),this.onlineState="Unknown",this.io=new Set}}async function Jo(e,t){const n=A(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Yc),i)try{r.so=await n.onListen(s)}catch(o){const a=ai(o,`Initialization of query '${js(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.ro(n.onlineState),r.so&&t.oo(r.so)&&ui(n)}async function Zo(e,t){const n=A(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Jc(e,t){const n=A(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.oo(i)&&(s=!0);o.so=i}}s&&ui(n)}function Zc(e,t,n){const s=A(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function ui(e){e.io.forEach(t=>{t.next()})}class ta{constructor(t,n,s){this.query=t,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=s||{}}oo(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Xt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(t)&&(this.co.next(t),n=!0):this.lo(t,this.onlineState)&&(this.fo(t),n=!0),this.uo=t,n}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),n=!0),n}lo(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.wo||!s)&&(!t.docs.isEmpty()||n==="Offline")}ho(t){if(t.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(t){t=Xt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}/**
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
 */class ea{constructor(t){this.key=t}}class na{constructor(t){this.key=t}}class tl{constructor(t,n){this.query=t,this.To=n,this.Eo=null,this.current=!1,this.Io=R(),this.mutatedKeys=R(),this.Ao=ro(t),this.Ro=new Yt(this.Ao)}get bo(){return this.To}Po(t,n){const s=n?n.vo:new Xo,i=n?n.Ro:this.Ro;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=pn(this.query)&&i.size===this.query.limit?i.last():null,h=mn(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,l)=>{const d=i.get(c),g=vn(this.query,l)?l:null,v=!!d&&this.mutatedKeys.has(d.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?v!==S&&(s.track({type:3,doc:g}),k=!0):this.Vo(d,g)||(s.track({type:2,doc:g}),k=!0,(u&&this.Ao(g,u)>0||h&&this.Ao(g,h)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),k=!0):d&&!g&&(s.track({type:1,doc:d}),k=!0,(u||h)&&(a=!0)),k&&(g?(o=o.add(g),r=S?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),pn(this.query)||mn(this.query))for(;o.size>this.query.limit;){const c=pn(this.query)?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Ro:o,vo:s,Bn:a,mutatedKeys:r}}Vo(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const r=t.vo.no();r.sort((h,c)=>function(l,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return g(l)-g(d)}(h.type,c.type)||this.Ao(h.doc,c.doc)),this.So(s);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,u=a!==this.Eo;return this.Eo=a,r.length!==0||u?{snapshot:new Xt(this.query,t.Ro,i,r,t.mutatedKeys,a===0,u,!1),Co:o}:{Co:o}}ro(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Xo,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(n=>this.To=this.To.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=R(),this.Ro.forEach(s=>{this.No(s.key)&&(this.Io=this.Io.add(s.key))});const n=[];return t.forEach(s=>{this.Io.has(s)||n.push(new na(s))}),this.Io.forEach(s=>{t.has(s)||n.push(new ea(s))}),n}ko(t){this.To=t.zn,this.Io=R();const n=this.Po(t.documents);return this.applyChanges(n,!0)}xo(){return Xt.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class el{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class nl{constructor(t){this.key=t,this.$o=!1}}class sl{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new Le(a=>io(a),yn),this.Fo=new Map,this.Lo=new Set,this.Bo=new H(E.comparator),this.Uo=new Map,this.qo=new ti,this.Ko={},this.jo=new Map,this.Qo=zt.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function il(e,t){const n=gl(e);let s,i;const r=n.Mo.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const o=await Ic(n.localStore,kt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await rl(n,t,s,a==="current"),n.isPrimaryClient&&Ko(n.remoteStore,o)}return i}async function rl(e,t,n,s){e.Go=(c,l,d)=>async function(g,v,S,k){let X=v.view.Po(S);X.Bn&&(X=await Uo(g.localStore,v.query,!1).then(({documents:te})=>v.view.Po(te,X)));const it=k&&k.targetChanges.get(v.targetId),Zt=v.view.applyChanges(X,g.isPrimaryClient,it);return ua(g,v.targetId,Zt.Co),Zt.snapshot}(e,c,l,d);const i=await Uo(e.localStore,t,!0),r=new tl(t,i.zn),o=r.Po(i.documents),a=be.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),u=r.applyChanges(o,e.isPrimaryClient,a);ua(e,n,u.Co);const h=new el(t,n,r);return e.Mo.set(t,h),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),u.snapshot}async function ol(e,t){const n=A(e),s=n.Mo.get(t),i=n.Fo.get(s.targetId);if(i.length>1)return n.Fo.set(s.targetId,i.filter(r=>!yn(r,t))),void n.Mo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Zs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Go(n.remoteStore,s.targetId),hi(n,s.targetId)}).catch(_e)):(hi(n,s.targetId),await Zs(n.localStore,s.targetId,!0))}async function al(e,t,n){const s=pl(e);try{const i=await function(r,o){const a=A(r),u=nt.now(),h=o.reduce((l,d)=>l.add(d.key),R());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.Wn.vn(l,h).next(d=>{c=d;const g=[];for(const v of o){const S=xh(v,c.get(v.key));S!=null&&g.push(new Dt(v.key,S,Jr(S.value.mapValue),mt.exists(!0)))}return a.An.addMutationBatch(l,u,g,o)})).then(l=>(l.applyToLocalDocumentSet(c),{batchId:l.batchId,changes:c}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.Ko[r.currentUser.toKey()];u||(u=new H(D)),u=u.insert(o,a),r.Ko[r.currentUser.toKey()]=u}(s,i.batchId,n),await Me(s,i.changes),await _n(s.remoteStore)}catch(i){const r=ai(i,"Failed to persist write");n.reject(r)}}async function sa(e,t){const n=A(e);try{const s=await wc(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.Uo.get(r);o&&(b(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?b(o.$o):i.removedDocuments.size>0&&(b(o.$o),o.$o=!1))}),await Me(n,s,t)}catch(s){await _e(s)}}function ia(e,t,n){const s=A(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Mo.forEach((r,o)=>{const a=o.view.ro(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let u=!1;a.queries.forEach((h,c)=>{for(const l of c.listeners)l.ro(o)&&(u=!0)}),u&&ui(a)}(s.eventManager,t),i.length&&s.Oo.br(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ul(e,t,n){const s=A(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.Uo.get(t),r=i&&i.key;if(r){let o=new H(E.comparator);o=o.insert(r,G.newNoDocument(r,N.min()));const a=R().add(r),u=new Cn(N.min(),new Map,new j(D),o,a);await sa(s,u),s.Bo=s.Bo.remove(r),s.Uo.delete(t),ci(s)}else await Zs(s.localStore,t,!1).then(()=>hi(s,t,n)).catch(_e)}async function hl(e,t){const n=A(e),s=t.batch.batchId;try{const i=await vc(n.localStore,t);oa(n,s,null),ra(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Me(n,i)}catch(i){await _e(i)}}async function cl(e,t,n){const s=A(e);try{const i=await function(r,o){const a=A(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return a.An.lookupMutationBatch(u,o).next(c=>(b(c!==null),h=c.keys(),a.An.removeMutationBatch(u,c))).next(()=>a.An.performConsistencyCheck(u)).next(()=>a.Wn.vn(u,h))})}(s.localStore,t);oa(s,t,n),ra(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Me(s,i)}catch(i){await _e(i)}}function ra(e,t){(e.jo.get(t)||[]).forEach(n=>{n.resolve()}),e.jo.delete(t)}function oa(e,t,n){const s=A(e);let i=s.Ko[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.Ko[s.currentUser.toKey()]=i}}function hi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Fo.get(t))e.Mo.delete(s),n&&e.Oo.zo(s,n);e.Fo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach(s=>{e.qo.containsKey(s)||aa(e,s)})}function aa(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);n!==null&&(Go(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),ci(e))}function ua(e,t,n){for(const s of n)s instanceof ea?(e.qo.addReference(s.key,t),ll(e,s)):s instanceof na?(w("SyncEngine","Document no longer in limbo: "+s.key),e.qo.removeReference(s.key,t),e.qo.containsKey(s.key)||aa(e,s.key)):I()}function ll(e,t){const n=t.key,s=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(s)||(w("SyncEngine","New document in limbo: "+n),e.Lo.add(s),ci(e))}function ci(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new E(L.fromString(t)),s=e.Qo.next();e.Uo.set(s,new nl(n)),e.Bo=e.Bo.insert(n,s),Ko(e.remoteStore,new Rt(kt(qs(n.path)),s,2,_s.I))}}async function Me(e,t,n){const s=A(e),i=[],r=[],o=[];s.Mo.isEmpty()||(s.Mo.forEach((a,u)=>{o.push(s.Go(u,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h.fromCache?"not-current":"current"),i.push(h);const c=Js.$n(u.targetId,h);r.push(c)}}))}),await Promise.all(o),s.Oo.br(i),await async function(a,u){const h=A(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>p.forEach(u,l=>p.forEach(l.kn,d=>h.persistence.referenceDelegate.addReference(c,l.targetId,d)).next(()=>p.forEach(l.xn,d=>h.persistence.referenceDelegate.removeReference(c,l.targetId,d)))))}catch(c){if(!Re(c))throw c;w("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const l=c.targetId;if(!c.fromCache){const d=h.qn.get(l),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);h.qn=h.qn.insert(l,v)}}}(s.localStore,r))}async function fl(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await Po(n.localStore,t);n.currentUser=t,function(i,r){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new y(f.CANCELLED,r))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Me(n,s.Gn)}}function dl(e,t){const n=A(e),s=n.Uo.get(t);if(s&&s.$o)return R().add(s.key);{let i=R();const r=n.Fo.get(t);if(!r)return i;for(const o of r){const a=n.Mo.get(o);i=i.unionWith(a.view.bo)}return i}}function gl(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=sa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ul.bind(null,t),t.Oo.br=Jc.bind(null,t.eventManager),t.Oo.zo=Zc.bind(null,t.eventManager),t}function pl(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cl.bind(null,t),t}class ml{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Dn(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return yc(this.persistence,new pc,t.initialUser,this.k)}Yo(t){return new Dc(ei.ks,this.k)}Jo(t){return new Rc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ia(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=fl.bind(null,this.syncEngine),await Qc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Xc}createDatastore(t){const n=Dn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Mc(i));var i;return function(r,o,a,u){return new Pc(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>ia(this.syncEngine,a,0),o=$o.Pt()?new $o:new _c,new Uc(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,h){const c=new sl(s,i,r,o,a,u);return h&&(c.Wo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=A(t);w("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await xe(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
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
 */class ha{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class vl{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=J.UNAUTHENTICATED,this.clientId=jr.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ai(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function wl(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Po(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function El(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Tl(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>async function(r,o){const a=A(r);a.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const u=_t(a);a.Gr.add(3),await xe(a),u&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await bn(a)}(t.remoteStore,i)),e.onlineComponents=t}async function Tl(e){return e.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await wl(e,new ml)),e.offlineComponents}async function ca(e){return e.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await El(e,new yl)),e.onlineComponents}function Il(e){return ca(e).then(t=>t.syncEngine)}async function li(e){const t=await ca(e),n=t.eventManager;return n.onListen=il.bind(null,t.syncEngine),n.onUnlisten=ol.bind(null,t.syncEngine),n}function Al(e,t,n={}){const s=new gt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new ha({next:l=>{r.enqueueAndForget(()=>Zo(i,c)),l.fromCache&&a.source==="server"?u.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new ta(o,h,{includeMetadataChanges:!0,wo:!0});return Jo(i,c)}(await li(e),e.asyncQueue,t,n,s)),s.promise}class Sl{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Ve{constructor(t,n){this.projectId=t,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ve&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const la=new Map;/**
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
 */function fa(e,t,n){if(!n)throw new y(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Cl(e,t,n,s){if(t===!0&&s===!0)throw new y(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function da(e){if(!E.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ga(e){if(E.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ln(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function ct(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ln(e);throw new y(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class pa{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Cl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class fi{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pa({}),this._settingsFrozen=!1,t instanceof Ve?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ve(i.options.projectId)}(t))}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pa(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nh;switch(n.type){case"gapi":const s=n.client;return b(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new rh(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=la.get(t);n&&(w("ComponentProvider","Removing Datastore"),la.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class tt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tt(this.firestore,t,this._key)}}class Lt{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Lt(this.firestore,t,this._query)}}class vt extends Lt{constructor(t,n,s){super(t,n,qs(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tt(this.firestore,null,new E(t))}withConverter(t){return new vt(this.firestore,t,this._path)}}function Wl(e,t,...n){if(e=rt(e),fa("collection","path",t),e instanceof fi){const s=L.fromString(t,...n);return ga(s),new vt(e,null,s)}{if(!(e instanceof tt||e instanceof vt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return ga(s),new vt(e.firestore,null,s)}}function Nl(e,t,...n){if(e=rt(e),arguments.length===1&&(t=jr.A()),fa("doc","path",t),e instanceof fi){const s=L.fromString(t,...n);return da(s),new tt(e,null,new E(s))}{if(!(e instanceof tt||e instanceof vt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return da(s),new tt(e.firestore,e instanceof vt?e.converter:null,new E(s))}}/**
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
 */class kl{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Bo(this,"async_queue_retry"),this.bc=()=>{const n=ni();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const t=ni();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const n=ni();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new gt;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.gc.push(t),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Re(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(t){const n=this.mc.then(()=>(this.Ic=!0,t().catch(s=>{this.Ec=s,this.Ic=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ic=!1,s))));return this.mc=n,n}enqueueAfterDelay(t,n,s){this.Pc(),this.Rc.indexOf(t)>-1&&(n=0);const i=oi.createAndSchedule(this,t,n,s,r=>this.Sc(r));return this.Tc.push(i),i}Pc(){this.Ec&&I()}verifyOperationInProgress(){}async Dc(){let t;do t=this.mc,await t;while(t!==this.mc)}Cc(t){for(const n of this.Tc)if(n.timerId===t)return!0;return!1}Nc(t){return this.Dc().then(()=>{this.Tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Dc()})}kc(t){this.Rc.push(t)}Sc(t){const n=this.Tc.indexOf(t);this.Tc.splice(n,1)}}function ma(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class xt extends fi{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new kl,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ya(this),this._firestoreClient.terminate()}}function Dl(e=Ma()){return xa(e,"firestore").getImmediate()}function di(e){return e._firestoreClient||ya(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ya(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Sl(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new vl(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class Oe{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function zl(){return new Oe("__name__")}/**
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
 */class Jt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Jt($.fromBase64String(t))}catch(n){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Jt($.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class xn{constructor(t){this._methodName=t}}/**
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
 */class gi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
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
 */const bl=/^__.*__$/;class Rl{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Dt(t,this.data,this.fieldMask,n,this.fieldTransforms):new An(t,this.data,n,this.fieldTransforms)}}class va{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Dt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function wa(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class pi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.k=s,this.ignoreUndefinedProperties=i,r===void 0&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new pi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Oc({path:s,Fc:!1});return i.Lc(t),i}Bc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Oc({path:s,Fc:!1});return i.xc(),i}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return Vn(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(t.length===0)throw this.qc("Document fields must not be empty");if(wa(this.$c)&&bl.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class _l{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.k=s||Dn(t)}Qc(t,n,s,i=!1){return new pi({$c:t,methodName:n,jc:s,path:Z.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function mi(e){const t=e._freezeSettings(),n=Dn(e._databaseId);return new _l(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ll(e,t,n,s,i,r={}){const o=e.Qc(r.merge||r.mergeFields?2:0,t,n,i);vi("Data must be an object, but it was:",o,s);const a=Ea(s,o);let u,h;if(r.merge)u=new Te(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const l of r.mergeFields){const d=wi(t,l,n);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ia(c,d)||c.push(d)}u=new Te(c),h=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,h=o.fieldTransforms;return new Rl(new st(a),u,h)}class Mn extends xn{_toFieldTransform(t){if(t.$c!==2)throw t.$c===1?t.qc(`${this._methodName}() can only appear at the top level of your update data`):t.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Mn}}class yi extends xn{_toFieldTransform(t){return new bh(t.path,new Ne)}isEqual(t){return t instanceof yi}}function xl(e,t,n,s){const i=e.Qc(1,t,n);vi("Data must be an object, but it was:",i,s);const r=[],o=st.empty();Ct(s,(u,h)=>{const c=Ei(t,u,n);h=rt(h);const l=i.Bc(c);if(h instanceof Mn)r.push(c);else{const d=Pe(h,l);d!=null&&(r.push(c),o.set(c,d))}});const a=new Te(r);return new va(o,a,i.fieldTransforms)}function Ml(e,t,n,s,i,r){const o=e.Qc(1,t,n),a=[wi(t,s,n)],u=[i];if(r.length%2!=0)throw new y(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(wi(t,r[d])),u.push(r[d+1]);const h=[],c=st.empty();for(let d=a.length-1;d>=0;--d)if(!Ia(h,a[d])){const g=a[d];let v=u[d];v=rt(v);const S=o.Bc(g);if(v instanceof Mn)h.push(g);else{const k=Pe(v,S);k!=null&&(h.push(g),c.set(g,k))}}const l=new Te(h);return new va(c,l,o.fieldTransforms)}function Vl(e,t,n,s=!1){return Pe(n,e.Qc(s?4:3,t))}function Pe(e,t){if(Ta(e=rt(e)))return vi("Unsupported field value:",t,e),Ea(e,t);if(e instanceof xn)return function(n,s){if(!wa(s.$c))throw s.qc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&t.$c!==4)throw t.qc("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Pe(o,s.Uc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Nh(s.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=nt.fromDate(n);return{timestampValue:kn(s.k,i)}}if(n instanceof nt){const i=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:kn(s.k,i)}}if(n instanceof gi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Jt)return{bytesValue:Do(s.k,n._byteString)};if(n instanceof tt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.qc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hs(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.qc(`Unsupported field value: ${Ln(n)}`)}(e,t)}function Ea(e,t){const n={};return Gr(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ct(e,(s,i)=>{const r=Pe(i,t.Mc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ta(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof nt||e instanceof gi||e instanceof Jt||e instanceof tt||e instanceof xn)}function vi(e,t,n){if(!Ta(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ln(n);throw s==="an object"?t.qc(e+" a custom object"):t.qc(e+" "+s)}}function wi(e,t,n){if((t=rt(t))instanceof Oe)return t._internalPath;if(typeof t=="string")return Ei(e,t);throw Vn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ol=new RegExp("[~\\*/\\[\\]]");function Ei(e,t,n){if(t.search(Ol)>=0)throw Vn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Oe(...t.split("."))._internalPath}catch{throw Vn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Vn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new y(f.INVALID_ARGUMENT,a+e+u)}function Ia(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Aa{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Pl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(On("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Pl extends Aa{data(){return super.data()}}function On(e,t){return typeof t=="string"?Ei(e,t):t instanceof Oe?t._internalPath:t._delegate._internalPath}/**
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
 */class Fe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sa extends Aa{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Pn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(On("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Pn extends Sa{data(t={}){return super.data(t)}}class Ca{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fe(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Pn(this._firestore,this._userDataWriter,s.key,s,new Fe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Pn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Fe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Pn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Fe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:Fl(o.type),doc:a,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Fl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function Na(e){if(mn(e)&&e.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ka{}function Ql(e,...t){for(const n of t)e=n._apply(e);return e}class Ul extends ka{constructor(t,n,s){super(),this.zc=t,this.Hc=n,this.Jc=s,this.type="where"}_apply(t){const n=mi(t.firestore),s=function(i,r,o,a,u,h,c){let l;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){ba(c,h);const g=[];for(const v of c)g.push(Da(a,i,v));l={arrayValue:{values:g}}}else l=Da(a,i,c)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||ba(c,h),l=Vl(o,r,c,h==="in"||h==="not-in");const d=Y.create(u,h,l);return function(g,v){if(v.V()){const k=Bs(g);if(k!==null&&!k.isEqual(v.field))throw new y(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${k.toString()}' and '${v.field.toString()}'`);const X=$s(g);X!==null&&Ra(g,v.field,X)}const S=function(k,X){for(const it of k.filters)if(X.indexOf(it.op)>=0)return it.op;return null}(g,function(k){switch(k){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(S!==null)throw S===v.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${S.toString()}' filters.`)}(i,d),d}(t._query,"where",n,t.firestore._databaseId,this.zc,this.Hc,this.Jc);return new Lt(t.firestore,t.converter,function(i,r){const o=i.filters.concat([r]);return new Gt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(t._query,s))}}function Yl(e,t,n){const s=t,i=On("where",e);return new Ul(i,s,n)}class ql extends ka{constructor(t,n){super(),this.zc=t,this.Yc=n,this.type="orderBy"}_apply(t){const n=function(s,i,r){if(s.startAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Kt(i,r);return function(a,u){if($s(a)===null){const h=Bs(a);h!==null&&Ra(a,h,u.field)}}(s,o),o}(t._query,this.zc,this.Yc);return new Lt(t.firestore,t.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Gt(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Xl(e,t="asc"){const n=t,s=On("orderBy",e);return new ql(s,n)}function Da(e,t,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!so(t)&&n.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(L.fromString(n));if(!E.isDocumentKey(s))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Qr(e,new E(s))}if(n instanceof tt)return Qr(e,n._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ln(n)}.`)}function ba(e,t){if(!Array.isArray(e)||e.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new y(f.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ra(e,t,n){if(!n.isEqual(t))throw new y(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class $l{convertValue(t,n="none"){switch(Nt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return M(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes($t(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Ct(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new gi(M(t.latitude),M(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Wr(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ie(t));default:return null}}convertTimestamp(t){const n=pt(t);return new nt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=L.fromString(t);b(Vo(s));const i=new Ve(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Bl(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class Ti extends $l{constructor(t){super(),this.firestore=t}convertBytes(t){return new Jt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function Jl(e){e=ct(e,Lt);const t=ct(e.firestore,xt),n=di(t),s=new Ti(t);return Na(e._query),Al(n,e._query).then(i=>new Ca(t,s,e,i))}function Zl(e,t,n,...s){e=ct(e,tt);const i=ct(e.firestore,xt),r=mi(i);let o;return o=typeof(t=rt(t))=="string"||t instanceof Oe?Ml(r,"updateDoc",e._key,t,n,s):xl(r,"updateDoc",e._key,t),Ii(i,[o.toMutation(e._key,mt.exists(!0))])}function tf(e){return Ii(ct(e.firestore,xt),[new wo(e._key,mt.none())])}function ef(e,t){const n=ct(e.firestore,xt),s=Nl(e),i=Bl(e.converter,t);return Ii(n,[Ll(mi(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,mt.exists(!1))]).then(()=>s)}function nf(e,...t){var n,s,i;e=rt(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||ma(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ma(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let u,h,c;if(e instanceof tt)h=ct(e.firestore,xt),c=qs(e._key.path),u={next:l=>{t[o]&&t[o](jl(h,e,l))},error:t[o+1],complete:t[o+2]};else{const l=ct(e,Lt);h=ct(l.firestore,xt),c=l._query;const d=new Ti(h);u={next:g=>{t[o]&&t[o](new Ca(h,d,l,g))},error:t[o+1],complete:t[o+2]},Na(e._query)}return function(l,d,g,v){const S=new ha(v),k=new ta(d,S,g);return l.asyncQueue.enqueueAndForget(async()=>Jo(await li(l),k)),()=>{S.nc(),l.asyncQueue.enqueueAndForget(async()=>Zo(await li(l),k))}}(di(h),c,a,u)}function Ii(e,t){return function(n,s){const i=new gt;return n.asyncQueue.enqueueAndForget(async()=>al(await Il(n),s,i)),i.promise}(di(e),t)}function jl(e,t,n){const s=n.docs.get(t._key),i=new Ti(e);return new Sa(e,i,t._key,s,new Fe(n.hasPendingWrites,n.fromCache),t.converter)}function sf(){return new yi("serverTimestamp")}(function(e,t=!0){(function(n){Ut=n})(Pa),La(new Va("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new xt(i,new sh(n.getProvider("auth-internal")),new ah(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),Fn(qr,"3.4.3",e),Fn(qr,"3.4.3","esm2017")})();const Kl={apiKey:"AIzaSyDNn-jPrxQNMQLfIne_Wpr7Ev8Pagj32OU",authDomain:"project-vuejs-d5b77.firebaseapp.com",projectId:"project-vuejs-d5b77",storageBucket:"project-vuejs-d5b77.appspot.com",messagingSenderId:"895967814004",appId:"1:895967814004:web:39897281bdad3e9caacc21",measurementId:"G-VCPL78YCHT"},Gl=Ga(Kl),rf=Dl(Gl);export{Nl as C,ef as E,nf as I,Wl as S,tf as T,Xl as W,Jl as _,sf as a,rf as d,zl as e,Yl as j,Zl as p,Ql as q};
