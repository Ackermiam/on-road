var od=Object.defineProperty;var ad=(n,t,e)=>t in n?od(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Re=(n,t,e)=>ad(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ml(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const se={},Ji=[],Sn=()=>{},ld=()=>!1,to=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),_l=n=>n.startsWith("onUpdate:"),ve=Object.assign,gl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},cd=Object.prototype.hasOwnProperty,Jt=(n,t)=>cd.call(n,t),Ht=Array.isArray,Ls=n=>eo(n)==="[object Map]",ud=n=>eo(n)==="[object Set]",zt=n=>typeof n=="function",xe=n=>typeof n=="string",ms=n=>typeof n=="symbol",he=n=>n!==null&&typeof n=="object",nh=n=>(he(n)||zt(n))&&zt(n.then)&&zt(n.catch),hd=Object.prototype.toString,eo=n=>hd.call(n),fd=n=>eo(n).slice(8,-1),dd=n=>eo(n)==="[object Object]",vl=n=>xe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ds=ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),no=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},pd=/-(\w)/g,Je=no(n=>n.replace(pd,(t,e)=>e?e.toUpperCase():"")),md=/\B([A-Z])/g,Ri=no(n=>n.replace(md,"-$1").toLowerCase()),io=no(n=>n.charAt(0).toUpperCase()+n.slice(1)),So=no(n=>n?`on${io(n)}`:""),Qn=(n,t)=>!Object.is(n,t),Eo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},ih=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},_d=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let uc;const so=()=>uc||(uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xl(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=xe(i)?Md(i):xl(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(xe(n)||he(n))return n}const gd=/;(?![^(]*\))/g,vd=/:([^]+)/,xd=/\/\*[^]*?\*\//g;function Md(n){const t={};return n.replace(xd,"").split(gd).forEach(e=>{if(e){const i=e.split(vd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ml(n){let t="";if(xe(n))t=n;else if(Ht(n))for(let e=0;e<n.length;e++){const i=Ml(n[e]);i&&(t+=i+" ")}else if(he(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Sd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ed=ml(Sd);function sh(n){return!!n||n===""}/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qe;class yd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=qe,!t&&qe&&(this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=qe;try{return qe=this,t()}finally{qe=e}}}on(){qe=this}off(){qe=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Td(){return qe}let ie;const yo=new WeakSet;class rh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qe&&qe.active&&qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yo.has(this)&&(yo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ah(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hc(this),lh(this);const t=ie,e=cn;ie=this,cn=!0;try{return this.fn()}finally{ch(this),ie=t,cn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)yl(t);this.deps=this.depsTail=void 0,hc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fa(this)&&this.run()}get dirty(){return fa(this)}}let oh=0,Is,Us;function ah(n,t=!1){if(n.flags|=8,t){n.next=Us,Us=n;return}n.next=Is,Is=n}function Sl(){oh++}function El(){if(--oh>0)return;if(Us){let t=Us;for(Us=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Is;){let t=Is;for(Is=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function lh(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ch(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),yl(i),bd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function fa(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(uh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function uh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ks))return;n.globalVersion=ks;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!fa(n)){n.flags&=-3;return}const e=ie,i=cn;ie=n,cn=!0;try{lh(n);const s=n.fn(n._value);(t.version===0||Qn(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ie=e,cn=i,ch(n),n.flags&=-3}}function yl(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)yl(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function bd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let cn=!0;const hh=[];function si(){hh.push(cn),cn=!1}function ri(){const n=hh.pop();cn=n===void 0?!0:n}function hc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ie;ie=void 0;try{t()}finally{ie=e}}}let ks=0;class Ad{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!ie||!cn||ie===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ie)e=this.activeLink=new Ad(ie,this),ie.deps?(e.prevDep=ie.depsTail,ie.depsTail.nextDep=e,ie.depsTail=e):ie.deps=ie.depsTail=e,fh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ie.depsTail,e.nextDep=void 0,ie.depsTail.nextDep=e,ie.depsTail=e,ie.deps===e&&(ie.deps=i)}return e}trigger(t){this.version++,ks++,this.notify(t)}notify(t){Sl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{El()}}}function fh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)fh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const da=new WeakMap,Ei=Symbol(""),pa=Symbol(""),Ws=Symbol("");function Te(n,t,e){if(cn&&ie){let i=da.get(n);i||da.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Tl),s.map=i,s.key=e),s.track()}}function In(n,t,e,i,s,r){const o=da.get(n);if(!o){ks++;return}const a=l=>{l&&l.trigger()};if(Sl(),t==="clear")o.forEach(a);else{const l=Ht(n),c=l&&vl(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Ws||!ms(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Ws)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Ei)),Ls(n)&&a(o.get(pa)));break;case"delete":l||(a(o.get(Ei)),Ls(n)&&a(o.get(pa)));break;case"set":Ls(n)&&a(o.get(Ei));break}}El()}function Di(n){const t=Zt(n);return t===n?t:(Te(t,"iterate",Ws),un(n)?t:t.map(De))}function bl(n){return Te(n=Zt(n),"iterate",Ws),n}const wd={__proto__:null,[Symbol.iterator](){return To(this,Symbol.iterator,De)},concat(...n){return Di(this).concat(...n.map(t=>Ht(t)?Di(t):t))},entries(){return To(this,"entries",n=>(n[1]=De(n[1]),n))},every(n,t){return Tn(this,"every",n,t,void 0,arguments)},filter(n,t){return Tn(this,"filter",n,t,e=>e.map(De),arguments)},find(n,t){return Tn(this,"find",n,t,De,arguments)},findIndex(n,t){return Tn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Tn(this,"findLast",n,t,De,arguments)},findLastIndex(n,t){return Tn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Tn(this,"forEach",n,t,void 0,arguments)},includes(...n){return bo(this,"includes",n)},indexOf(...n){return bo(this,"indexOf",n)},join(n){return Di(this).join(n)},lastIndexOf(...n){return bo(this,"lastIndexOf",n)},map(n,t){return Tn(this,"map",n,t,void 0,arguments)},pop(){return Ss(this,"pop")},push(...n){return Ss(this,"push",n)},reduce(n,...t){return fc(this,"reduce",n,t)},reduceRight(n,...t){return fc(this,"reduceRight",n,t)},shift(){return Ss(this,"shift")},some(n,t){return Tn(this,"some",n,t,void 0,arguments)},splice(...n){return Ss(this,"splice",n)},toReversed(){return Di(this).toReversed()},toSorted(n){return Di(this).toSorted(n)},toSpliced(...n){return Di(this).toSpliced(...n)},unshift(...n){return Ss(this,"unshift",n)},values(){return To(this,"values",De)}};function To(n,t,e){const i=bl(n),s=i[t]();return i!==n&&!un(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const Rd=Array.prototype;function Tn(n,t,e,i,s,r){const o=bl(n),a=o!==n&&!un(n),l=o[t];if(l!==Rd[t]){const h=l.apply(n,r);return a?De(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,De(h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function fc(n,t,e,i){const s=bl(n);let r=e;return s!==n&&(un(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,De(a),l,n)}),s[t](r,...i)}function bo(n,t,e){const i=Zt(n);Te(i,"iterate",Ws);const s=i[t](...e);return(s===-1||s===!1)&&Rl(e[0])?(e[0]=Zt(e[0]),i[t](...e)):s}function Ss(n,t,e=[]){si(),Sl();const i=Zt(n)[t].apply(n,e);return El(),ri(),i}const Cd=ml("__proto__,__v_isRef,__isVue"),dh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ms));function Pd(n){ms(n)||(n=String(n));const t=Zt(this);return Te(t,"has",n),t.hasOwnProperty(n)}class ph{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Hd:vh:r?gh:_h).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ht(t);if(!s){let l;if(o&&(l=wd[e]))return l;if(e==="hasOwnProperty")return Pd}const a=Reflect.get(t,e,we(t)?t:i);return(ms(e)?dh.has(e):Cd(e))||(s||Te(t,"get",e),r)?a:we(a)?o&&vl(e)?a:a.value:he(a)?s?Mh(a):ro(a):a}}class mh extends ph{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=Ti(r);if(!un(i)&&!Ti(i)&&(r=Zt(r),i=Zt(i)),!Ht(t)&&we(r)&&!we(i))return l?!1:(r.value=i,!0)}const o=Ht(t)&&vl(e)?Number(e)<t.length:Jt(t,e),a=Reflect.set(t,e,i,we(t)?t:s);return t===Zt(s)&&(o?Qn(i,r)&&In(t,"set",e,i):In(t,"add",e,i)),a}deleteProperty(t,e){const i=Jt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&In(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!ms(e)||!dh.has(e))&&Te(t,"has",e),i}ownKeys(t){return Te(t,"iterate",Ht(t)?"length":Ei),Reflect.ownKeys(t)}}class Ld extends ph{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Dd=new mh,Id=new Ld,Ud=new mh(!0);const ma=n=>n,ar=n=>Reflect.getPrototypeOf(n);function Nd(n,t,e){return function(...i){const s=this.__v_raw,r=Zt(s),o=Ls(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?ma:t?_a:De;return!t&&Te(r,"iterate",l?pa:Ei),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function lr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Od(n,t){const e={get(s){const r=this.__v_raw,o=Zt(r),a=Zt(s);n||(Qn(s,a)&&Te(o,"get",s),Te(o,"get",a));const{has:l}=ar(o),c=t?ma:n?_a:De;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Te(Zt(s),"iterate",Ei),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Zt(r),a=Zt(s);return n||(Qn(s,a)&&Te(o,"has",s),Te(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Zt(a),c=t?ma:n?_a:De;return!n&&Te(l,"iterate",Ei),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return ve(e,n?{add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear")}:{add(s){!t&&!un(s)&&!Ti(s)&&(s=Zt(s));const r=Zt(this);return ar(r).has.call(r,s)||(r.add(s),In(r,"add",s,s)),this},set(s,r){!t&&!un(r)&&!Ti(r)&&(r=Zt(r));const o=Zt(this),{has:a,get:l}=ar(o);let c=a.call(o,s);c||(s=Zt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Qn(r,u)&&In(o,"set",s,r):In(o,"add",s,r),this},delete(s){const r=Zt(this),{has:o,get:a}=ar(r);let l=o.call(r,s);l||(s=Zt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&In(r,"delete",s,void 0),c},clear(){const s=Zt(this),r=s.size!==0,o=s.clear();return r&&In(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Nd(s,n,t)}),e}function Al(n,t){const e=Od(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Jt(e,s)&&s in i?e:i,s,r)}const Fd={get:Al(!1,!1)},Bd={get:Al(!1,!0)},zd={get:Al(!0,!1)};const _h=new WeakMap,gh=new WeakMap,vh=new WeakMap,Hd=new WeakMap;function Vd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gd(n){return n.__v_skip||!Object.isExtensible(n)?0:Vd(fd(n))}function ro(n){return Ti(n)?n:wl(n,!1,Dd,Fd,_h)}function xh(n){return wl(n,!1,Ud,Bd,gh)}function Mh(n){return wl(n,!0,Id,zd,vh)}function wl(n,t,e,i,s){if(!he(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Gd(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Ns(n){return Ti(n)?Ns(n.__v_raw):!!(n&&n.__v_isReactive)}function Ti(n){return!!(n&&n.__v_isReadonly)}function un(n){return!!(n&&n.__v_isShallow)}function Rl(n){return n?!!n.__v_raw:!1}function Zt(n){const t=n&&n.__v_raw;return t?Zt(t):n}function kd(n){return!Jt(n,"__v_skip")&&Object.isExtensible(n)&&ih(n,"__v_skip",!0),n}const De=n=>he(n)?ro(n):n,_a=n=>he(n)?Mh(n):n;function we(n){return n?n.__v_isRef===!0:!1}function Cl(n){return Sh(n,!1)}function Wd(n){return Sh(n,!0)}function Sh(n,t){return we(n)?n:new Xd(n,t)}class Xd{constructor(t,e){this.dep=new Tl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Zt(t),this._value=e?t:De(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||un(t)||Ti(t);t=i?t:Zt(t),Qn(t,e)&&(this._rawValue=t,this._value=i?t:De(t),this.dep.trigger())}}function Qi(n){return we(n)?n.value:n}const qd={get:(n,t,e)=>t==="__v_raw"?n:Qi(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return we(s)&&!we(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Eh(n){return Ns(n)?n:new Proxy(n,qd)}class Yd{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Tl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return ah(this,!0),!0}get value(){const t=this.dep.track();return uh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jd(n,t,e=!1){let i,s;return zt(n)?i=n:(i=n.get,s=n.set),new Yd(i,s,e)}const cr={},Wr=new WeakMap;let _i;function Kd(n,t=!1,e=_i){if(e){let i=Wr.get(e);i||Wr.set(e,i=[]),i.push(n)}}function $d(n,t,e=se){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=b=>s?b:un(b)||s===!1||s===0?Zn(b,1):Zn(b);let u,h,f,d,v=!1,S=!1;if(we(n)?(h=()=>n.value,v=un(n)):Ns(n)?(h=()=>c(n),v=!0):Ht(n)?(S=!0,v=n.some(b=>Ns(b)||un(b)),h=()=>n.map(b=>{if(we(b))return b.value;if(Ns(b))return c(b);if(zt(b))return l?l(b,2):b()})):zt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){si();try{f()}finally{ri()}}const b=_i;_i=u;try{return l?l(n,3,[d]):n(d)}finally{_i=b}}:h=Sn,t&&s){const b=h,H=s===!0?1/0:s;h=()=>Zn(b(),H)}const m=Td(),p=()=>{u.stop(),m&&gl(m.effects,u)};if(r&&t){const b=t;t=(...H)=>{b(...H),p()}}let A=S?new Array(n.length).fill(cr):cr;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const H=u.run();if(s||v||(S?H.some((P,C)=>Qn(P,A[C])):Qn(H,A))){f&&f();const P=_i;_i=u;try{const C=[H,A===cr?void 0:S&&A[0]===cr?[]:A,d];l?l(t,3,C):t(...C),A=H}finally{_i=P}}}else u.run()};return a&&a(y),u=new rh(h),u.scheduler=o?()=>o(y,!1):y,d=b=>Kd(b,!1,u),f=u.onStop=()=>{const b=Wr.get(u);if(b){if(l)l(b,4);else for(const H of b)H();Wr.delete(u)}},t?i?y(!0):A=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Zn(n,t=1/0,e){if(t<=0||!he(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,we(n))Zn(n.value,t,e);else if(Ht(n))for(let i=0;i<n.length;i++)Zn(n[i],t,e);else if(ud(n)||Ls(n))n.forEach(i=>{Zn(i,t,e)});else if(dd(n)){for(const i in n)Zn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Zn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tr(n,t,e,i){try{return i?n(...i):n()}catch(s){oo(s,t,e)}}function En(n,t,e,i){if(zt(n)){const s=tr(n,t,e,i);return s&&nh(s)&&s.catch(r=>{oo(r,t,e)}),s}if(Ht(n)){const s=[];for(let r=0;r<n.length;r++)s.push(En(n[r],t,e,i));return s}}function oo(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||se;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){si(),tr(r,null,10,[n,l,c]),ri();return}}Zd(n,e,s,i,o)}function Zd(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ie=[];let mn=-1;const ts=[];let Yn=null,Yi=0;const yh=Promise.resolve();let Xr=null;function Th(n){const t=Xr||yh;return n?t.then(this?n.bind(this):n):t}function Jd(n){let t=mn+1,e=Ie.length;for(;t<e;){const i=t+e>>>1,s=Ie[i],r=Xs(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Pl(n){if(!(n.flags&1)){const t=Xs(n),e=Ie[Ie.length-1];!e||!(n.flags&2)&&t>=Xs(e)?Ie.push(n):Ie.splice(Jd(t),0,n),n.flags|=1,bh()}}function bh(){Xr||(Xr=yh.then(wh))}function Qd(n){Ht(n)?ts.push(...n):Yn&&n.id===-1?Yn.splice(Yi+1,0,n):n.flags&1||(ts.push(n),n.flags|=1),bh()}function dc(n,t,e=mn+1){for(;e<Ie.length;e++){const i=Ie[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ie.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ah(n){if(ts.length){const t=[...new Set(ts)].sort((e,i)=>Xs(e)-Xs(i));if(ts.length=0,Yn){Yn.push(...t);return}for(Yn=t,Yi=0;Yi<Yn.length;Yi++){const e=Yn[Yi];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Yn=null,Yi=0}}const Xs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wh(n){try{for(mn=0;mn<Ie.length;mn++){const t=Ie[mn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),tr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;mn<Ie.length;mn++){const t=Ie[mn];t&&(t.flags&=-2)}mn=-1,Ie.length=0,Ah(),Xr=null,(Ie.length||ts.length)&&wh()}}let an=null,Rh=null;function qr(n){const t=an;return an=n,Rh=n&&n.type.__scopeId||null,t}function ga(n,t=an,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Ec(-1);const r=qr(t);let o;try{o=n(...s)}finally{qr(r),i._d&&Ec(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function li(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(si(),En(l,e,8,[n.el,a,n,t]),ri())}}const tp=Symbol("_vte"),ep=n=>n.__isTeleport;function Ll(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Ll(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function er(n,t){return zt(n)?ve({name:n.name},t,{setup:n}):n}function Ch(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function va(n,t,e,i,s=!1){if(Ht(n)){n.forEach((v,S)=>va(v,t&&(Ht(t)?t[S]:t),e,i,s));return}if(Os(i)&&!s)return;const r=i.shapeFlag&4?Fl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===se?a.refs={}:a.refs,h=a.setupState,f=Zt(h),d=h===se?()=>!1:v=>Jt(f,v);if(c!=null&&c!==l&&(xe(c)?(u[c]=null,d(c)&&(h[c]=null)):we(c)&&(c.value=null)),zt(l))tr(l,a,12,[o,u]);else{const v=xe(l),S=we(l);if(v||S){const m=()=>{if(n.f){const p=v?d(l)?h[l]:u[l]:l.value;s?Ht(p)&&gl(p,r):Ht(p)?p.includes(r)||p.push(r):v?(u[l]=[r],d(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else v?(u[l]=o,d(l)&&(h[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Xe(m,e)):m()}}}so().requestIdleCallback;so().cancelIdleCallback;const Os=n=>!!n.type.__asyncLoader,Ph=n=>n.type.__isKeepAlive;function np(n,t){Lh(n,"a",t)}function ip(n,t){Lh(n,"da",t)}function Lh(n,t,e=Ae){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ao(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Ph(s.parent.vnode)&&sp(i,t,e,s),s=s.parent}}function sp(n,t,e,i){const s=ao(t,n,i,!0);Dh(()=>{gl(i[t],s)},e)}function ao(n,t,e=Ae,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{si();const a=nr(e),l=En(t,e,n,o);return a(),ri(),l});return i?s.unshift(r):s.push(r),r}}const Bn=n=>(t,e=Ae)=>{(!js||n==="sp")&&ao(n,(...i)=>t(...i),e)},rp=Bn("bm"),Dl=Bn("m"),op=Bn("bu"),ap=Bn("u"),lp=Bn("bum"),Dh=Bn("um"),cp=Bn("sp"),up=Bn("rtg"),hp=Bn("rtc");function fp(n,t=Ae){ao("ec",n,t)}const dp="components";function Ih(n,t){return mp(dp,n,!0,t)||n}const pp=Symbol.for("v-ndc");function mp(n,t,e=!0,i=!1){const s=an||Ae;if(s){const r=s.type;{const a=nm(r,!1);if(a&&(a===t||a===Je(t)||a===io(Je(t))))return r}const o=pc(s[n]||r[n],t)||pc(s.appContext[n],t);return!o&&i?r:o}}function pc(n,t){return n&&(n[t]||n[Je(t)]||n[io(Je(t))])}const xa=n=>n?Jh(n)?Fl(n):xa(n.parent):null,Fs=ve(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xa(n.parent),$root:n=>xa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Il(n),$forceUpdate:n=>n.f||(n.f=()=>{Pl(n.update)}),$nextTick:n=>n.n||(n.n=Th.bind(n.proxy)),$watch:n=>Op.bind(n)}),Ao=(n,t)=>n!==se&&!n.__isScriptSetup&&Jt(n,t),_p={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ao(i,t))return o[t]=1,i[t];if(s!==se&&Jt(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&Jt(c,t))return o[t]=3,r[t];if(e!==se&&Jt(e,t))return o[t]=4,e[t];Ma&&(o[t]=0)}}const u=Fs[t];let h,f;if(u)return t==="$attrs"&&Te(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==se&&Jt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,Jt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ao(s,t)?(s[t]=e,!0):i!==se&&Jt(i,t)?(i[t]=e,!0):Jt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==se&&Jt(n,o)||Ao(t,o)||(a=r[0])&&Jt(a,o)||Jt(i,o)||Jt(Fs,o)||Jt(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Jt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function mc(n){return Ht(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ma=!0;function gp(n){const t=Il(n),e=n.proxy,i=n.ctx;Ma=!1,t.beforeCreate&&_c(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:v,activated:S,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:y,unmounted:b,render:H,renderTracked:P,renderTriggered:C,errorCaptured:G,serverPrefetch:ft,expose:x,inheritAttrs:T,components:Z,directives:Y,filters:nt}=t;if(c&&vp(c,i,null),o)for(const $ in o){const V=o[$];zt(V)&&(i[$]=V.bind(e))}if(s){const $=s.call(e,e);he($)&&(n.data=ro($))}if(Ma=!0,r)for(const $ in r){const V=r[$],_t=zt(V)?V.bind(e,e):zt(V.get)?V.get.bind(e,e):Sn,gt=!zt(V)&&zt(V.set)?V.set.bind(e):Sn,xt=sn({get:_t,set:gt});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>xt.value,set:Ot=>xt.value=Ot})}if(a)for(const $ in a)Uh(a[$],i,e,$);if(l){const $=zt(l)?l.call(e):l;Reflect.ownKeys($).forEach(V=>{Ir(V,$[V])})}u&&_c(u,n,"c");function q($,V){Ht(V)?V.forEach(_t=>$(_t.bind(e))):V&&$(V.bind(e))}if(q(rp,h),q(Dl,f),q(op,d),q(ap,v),q(np,S),q(ip,m),q(fp,G),q(hp,P),q(up,C),q(lp,A),q(Dh,b),q(cp,ft),Ht(x))if(x.length){const $=n.exposed||(n.exposed={});x.forEach(V=>{Object.defineProperty($,V,{get:()=>e[V],set:_t=>e[V]=_t})})}else n.exposed||(n.exposed={});H&&n.render===Sn&&(n.render=H),T!=null&&(n.inheritAttrs=T),Z&&(n.components=Z),Y&&(n.directives=Y),ft&&Ch(n)}function vp(n,t,e=Sn){Ht(n)&&(n=Sa(n));for(const i in n){const s=n[i];let r;he(s)?"default"in s?r=On(s.from||i,s.default,!0):r=On(s.from||i):r=On(s),we(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function _c(n,t,e){En(Ht(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Uh(n,t,e,i){let s=i.includes(".")?jh(e,i):()=>e[i];if(xe(n)){const r=t[n];zt(r)&&Ur(s,r)}else if(zt(n))Ur(s,n.bind(e));else if(he(n))if(Ht(n))n.forEach(r=>Uh(r,t,e,i));else{const r=zt(n.handler)?n.handler.bind(e):t[n.handler];zt(r)&&Ur(s,r,n)}}function Il(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Yr(l,c,o,!0)),Yr(l,t,o)),he(t)&&r.set(t,l),l}function Yr(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Yr(n,r,e,!0),s&&s.forEach(o=>Yr(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=xp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const xp={data:gc,props:vc,emits:vc,methods:Cs,computed:Cs,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Cs,directives:Cs,watch:Sp,provide:gc,inject:Mp};function gc(n,t){return t?n?function(){return ve(zt(n)?n.call(this,this):n,zt(t)?t.call(this,this):t)}:t:n}function Mp(n,t){return Cs(Sa(n),Sa(t))}function Sa(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ce(n,t){return n?[...new Set([].concat(n,t))]:t}function Cs(n,t){return n?ve(Object.create(null),n,t):t}function vc(n,t){return n?Ht(n)&&Ht(t)?[...new Set([...n,...t])]:ve(Object.create(null),mc(n),mc(t??{})):t}function Sp(n,t){if(!n)return t;if(!t)return n;const e=ve(Object.create(null),n);for(const i in t)e[i]=Ce(n[i],t[i]);return e}function Nh(){return{app:null,config:{isNativeTag:ld,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ep=0;function yp(n,t){return function(i,s=null){zt(i)||(i=ve({},i)),s!=null&&!he(s)&&(s=null);const r=Nh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Ep++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:sm,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&zt(u.install)?(o.add(u),u.install(c,...h)):zt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Ue(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&t?t(d,u):n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Fl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(En(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=es;es=c;try{return u()}finally{es=h}}};return c}}let es=null;function Ir(n,t){if(Ae){let e=Ae.provides;const i=Ae.parent&&Ae.parent.provides;i===e&&(e=Ae.provides=Object.create(i)),e[n]=t}}function On(n,t,e=!1){const i=Ae||an;if(i||es){const s=es?es._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&zt(t)?t.call(i&&i.proxy):t}}const Oh={},Fh=()=>Object.create(Oh),Bh=n=>Object.getPrototypeOf(n)===Oh;function Tp(n,t,e,i=!1){const s={},r=Fh();n.propsDefaults=Object.create(null),zh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:xh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function bp(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Zt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(lo(n.emitsOptions,f))continue;const d=t[f];if(l)if(Jt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const v=Je(f);s[v]=Ea(l,a,v,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{zh(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!Jt(t,h)&&((u=Ri(h))===h||!Jt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Ea(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!Jt(t,h))&&(delete r[h],c=!0)}c&&In(n.attrs,"set","")}function zh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ds(l))continue;const c=t[l];let u;s&&Jt(s,u=Je(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:lo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Zt(e),c=a||se;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Ea(s,l,h,c[h],n,!Jt(c,h))}}return o}function Ea(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=Jt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&zt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=nr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ri(e))&&(i=!0))}return i}const Ap=new WeakMap;function Hh(n,t,e=!1){const i=e?Ap:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!zt(n)){const u=h=>{l=!0;const[f,d]=Hh(h,t,!0);ve(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return he(n)&&i.set(n,Ji),Ji;if(Ht(r))for(let u=0;u<r.length;u++){const h=Je(r[u]);xc(h)&&(o[h]=se)}else if(r)for(const u in r){const h=Je(u);if(xc(h)){const f=r[u],d=o[h]=Ht(f)||zt(f)?{type:f}:ve({},f),v=d.type;let S=!1,m=!0;if(Ht(v))for(let p=0;p<v.length;++p){const A=v[p],y=zt(A)&&A.name;if(y==="Boolean"){S=!0;break}else y==="String"&&(m=!1)}else S=zt(v)&&v.name==="Boolean";d[0]=S,d[1]=m,(S||Jt(d,"default"))&&a.push(h)}}const c=[o,a];return he(n)&&i.set(n,c),c}function xc(n){return n[0]!=="$"&&!Ds(n)}const Vh=n=>n[0]==="_"||n==="$stable",Ul=n=>Ht(n)?n.map(vn):[vn(n)],wp=(n,t,e)=>{if(t._n)return t;const i=ga((...s)=>Ul(t(...s)),e);return i._c=!1,i},Gh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Vh(s))continue;const r=n[s];if(zt(r))t[s]=wp(s,r,i);else if(r!=null){const o=Ul(r);t[s]=()=>o}}},kh=(n,t)=>{const e=Ul(t);n.slots.default=()=>e},Wh=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},Rp=(n,t,e)=>{const i=n.slots=Fh();if(n.vnode.shapeFlag&32){const s=t._;s?(Wh(i,t,e),e&&ih(i,"_",s,!0)):Gh(t,i)}else t&&kh(n,t)},Cp=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=se;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Wh(s,t,e):(r=!t.$stable,Gh(t,s)),o=t}else t&&(kh(n,t),o={default:1});if(r)for(const a in s)!Vh(a)&&o[a]==null&&delete s[a]},Xe=kp;function Pp(n){return Lp(n)}function Lp(n,t){const e=so();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Sn,insertStaticContent:v}=n,S=(_,w,D,j=null,B=null,J=null,et=void 0,M=null,g=!!w.dynamicChildren)=>{if(_===w)return;_&&!Es(_,w)&&(j=U(_),Ot(_,B,J,!0),_=null),w.patchFlag===-2&&(g=!1,w.dynamicChildren=null);const{type:R,ref:z,shapeFlag:F}=w;switch(R){case co:m(_,w,D,j);break;case qs:p(_,w,D,j);break;case Co:_==null&&A(w,D,j,et);break;case gn:Z(_,w,D,j,B,J,et,M,g);break;default:F&1?H(_,w,D,j,B,J,et,M,g):F&6?Y(_,w,D,j,B,J,et,M,g):(F&64||F&128)&&R.process(_,w,D,j,B,J,et,M,g,ut)}z!=null&&B&&va(z,_&&_.ref,J,w||_,!w)},m=(_,w,D,j)=>{if(_==null)i(w.el=a(w.children),D,j);else{const B=w.el=_.el;w.children!==_.children&&c(B,w.children)}},p=(_,w,D,j)=>{_==null?i(w.el=l(w.children||""),D,j):w.el=_.el},A=(_,w,D,j)=>{[_.el,_.anchor]=v(_.children,w,D,j,_.el,_.anchor)},y=({el:_,anchor:w},D,j)=>{let B;for(;_&&_!==w;)B=f(_),i(_,D,j),_=B;i(w,D,j)},b=({el:_,anchor:w})=>{let D;for(;_&&_!==w;)D=f(_),s(_),_=D;s(w)},H=(_,w,D,j,B,J,et,M,g)=>{w.type==="svg"?et="svg":w.type==="math"&&(et="mathml"),_==null?P(w,D,j,B,J,et,M,g):ft(_,w,B,J,et,M,g)},P=(_,w,D,j,B,J,et,M)=>{let g,R;const{props:z,shapeFlag:F,transition:O,dirs:at}=_;if(g=_.el=o(_.type,J,z&&z.is,z),F&8?u(g,_.children):F&16&&G(_.children,g,null,j,B,wo(_,J),et,M),at&&li(_,null,j,"created"),C(g,_,_.scopeId,et,j),z){for(const ht in z)ht!=="value"&&!Ds(ht)&&r(g,ht,null,z[ht],J,j);"value"in z&&r(g,"value",null,z.value,J),(R=z.onVnodeBeforeMount)&&pn(R,j,_)}at&&li(_,null,j,"beforeMount");const st=Dp(B,O);st&&O.beforeEnter(g),i(g,w,D),((R=z&&z.onVnodeMounted)||st||at)&&Xe(()=>{R&&pn(R,j,_),st&&O.enter(g),at&&li(_,null,j,"mounted")},B)},C=(_,w,D,j,B)=>{if(D&&d(_,D),j)for(let J=0;J<j.length;J++)d(_,j[J]);if(B){let J=B.subTree;if(w===J||$h(J.type)&&(J.ssContent===w||J.ssFallback===w)){const et=B.vnode;C(_,et,et.scopeId,et.slotScopeIds,B.parent)}}},G=(_,w,D,j,B,J,et,M,g=0)=>{for(let R=g;R<_.length;R++){const z=_[R]=M?jn(_[R]):vn(_[R]);S(null,z,w,D,j,B,J,et,M)}},ft=(_,w,D,j,B,J,et)=>{const M=w.el=_.el;let{patchFlag:g,dynamicChildren:R,dirs:z}=w;g|=_.patchFlag&16;const F=_.props||se,O=w.props||se;let at;if(D&&ci(D,!1),(at=O.onVnodeBeforeUpdate)&&pn(at,D,w,_),z&&li(w,_,D,"beforeUpdate"),D&&ci(D,!0),(F.innerHTML&&O.innerHTML==null||F.textContent&&O.textContent==null)&&u(M,""),R?x(_.dynamicChildren,R,M,D,j,wo(w,B),J):et||V(_,w,M,null,D,j,wo(w,B),J,!1),g>0){if(g&16)T(M,F,O,D,B);else if(g&2&&F.class!==O.class&&r(M,"class",null,O.class,B),g&4&&r(M,"style",F.style,O.style,B),g&8){const st=w.dynamicProps;for(let ht=0;ht<st.length;ht++){const bt=st[ht],lt=F[bt],pt=O[bt];(pt!==lt||bt==="value")&&r(M,bt,lt,pt,B,D)}}g&1&&_.children!==w.children&&u(M,w.children)}else!et&&R==null&&T(M,F,O,D,B);((at=O.onVnodeUpdated)||z)&&Xe(()=>{at&&pn(at,D,w,_),z&&li(w,_,D,"updated")},j)},x=(_,w,D,j,B,J,et)=>{for(let M=0;M<w.length;M++){const g=_[M],R=w[M],z=g.el&&(g.type===gn||!Es(g,R)||g.shapeFlag&70)?h(g.el):D;S(g,R,z,null,j,B,J,et,!0)}},T=(_,w,D,j,B)=>{if(w!==D){if(w!==se)for(const J in w)!Ds(J)&&!(J in D)&&r(_,J,w[J],null,B,j);for(const J in D){if(Ds(J))continue;const et=D[J],M=w[J];et!==M&&J!=="value"&&r(_,J,M,et,B,j)}"value"in D&&r(_,"value",w.value,D.value,B)}},Z=(_,w,D,j,B,J,et,M,g)=>{const R=w.el=_?_.el:a(""),z=w.anchor=_?_.anchor:a("");let{patchFlag:F,dynamicChildren:O,slotScopeIds:at}=w;at&&(M=M?M.concat(at):at),_==null?(i(R,D,j),i(z,D,j),G(w.children||[],D,z,B,J,et,M,g)):F>0&&F&64&&O&&_.dynamicChildren?(x(_.dynamicChildren,O,D,B,J,et,M),(w.key!=null||B&&w===B.subTree)&&Xh(_,w,!0)):V(_,w,D,z,B,J,et,M,g)},Y=(_,w,D,j,B,J,et,M,g)=>{w.slotScopeIds=M,_==null?w.shapeFlag&512?B.ctx.activate(w,D,j,et,g):nt(w,D,j,B,J,et,g):ot(_,w,g)},nt=(_,w,D,j,B,J,et)=>{const M=_.component=Zp(_,j,B);if(Ph(_)&&(M.ctx.renderer=ut),Jp(M,!1,et),M.asyncDep){if(B&&B.registerDep(M,q,et),!_.el){const g=M.subTree=Ue(qs);p(null,g,w,D)}}else q(M,_,w,D,B,J,et)},ot=(_,w,D)=>{const j=w.component=_.component;if(Vp(_,w,D))if(j.asyncDep&&!j.asyncResolved){$(j,w,D);return}else j.next=w,j.update();else w.el=_.el,j.vnode=w},q=(_,w,D,j,B,J,et)=>{const M=()=>{if(_.isMounted){let{next:F,bu:O,u:at,parent:st,vnode:ht}=_;{const wt=qh(_);if(wt){F&&(F.el=ht.el,$(_,F,et)),wt.asyncDep.then(()=>{_.isUnmounted||M()});return}}let bt=F,lt;ci(_,!1),F?(F.el=ht.el,$(_,F,et)):F=ht,O&&Eo(O),(lt=F.props&&F.props.onVnodeBeforeUpdate)&&pn(lt,st,F,ht),ci(_,!0);const pt=Ro(_),Lt=_.subTree;_.subTree=pt,S(Lt,pt,h(Lt.el),U(Lt),_,B,J),F.el=pt.el,bt===null&&Gp(_,pt.el),at&&Xe(at,B),(lt=F.props&&F.props.onVnodeUpdated)&&Xe(()=>pn(lt,st,F,ht),B)}else{let F;const{el:O,props:at}=w,{bm:st,m:ht,parent:bt,root:lt,type:pt}=_,Lt=Os(w);if(ci(_,!1),st&&Eo(st),!Lt&&(F=at&&at.onVnodeBeforeMount)&&pn(F,bt,w),ci(_,!0),O&&Pt){const wt=()=>{_.subTree=Ro(_),Pt(O,_.subTree,_,B,null)};Lt&&pt.__asyncHydrate?pt.__asyncHydrate(O,_,wt):wt()}else{lt.ce&&lt.ce._injectChildStyle(pt);const wt=_.subTree=Ro(_);S(null,wt,D,j,_,B,J),w.el=wt.el}if(ht&&Xe(ht,B),!Lt&&(F=at&&at.onVnodeMounted)){const wt=w;Xe(()=>pn(F,bt,wt),B)}(w.shapeFlag&256||bt&&Os(bt.vnode)&&bt.vnode.shapeFlag&256)&&_.a&&Xe(_.a,B),_.isMounted=!0,w=D=j=null}};_.scope.on();const g=_.effect=new rh(M);_.scope.off();const R=_.update=g.run.bind(g),z=_.job=g.runIfDirty.bind(g);z.i=_,z.id=_.uid,g.scheduler=()=>Pl(z),ci(_,!0),R()},$=(_,w,D)=>{w.component=_;const j=_.vnode.props;_.vnode=w,_.next=null,bp(_,w.props,j,D),Cp(_,w.children,D),si(),dc(_),ri()},V=(_,w,D,j,B,J,et,M,g=!1)=>{const R=_&&_.children,z=_?_.shapeFlag:0,F=w.children,{patchFlag:O,shapeFlag:at}=w;if(O>0){if(O&128){gt(R,F,D,j,B,J,et,M,g);return}else if(O&256){_t(R,F,D,j,B,J,et,M,g);return}}at&8?(z&16&&vt(R,B,J),F!==R&&u(D,F)):z&16?at&16?gt(R,F,D,j,B,J,et,M,g):vt(R,B,J,!0):(z&8&&u(D,""),at&16&&G(F,D,j,B,J,et,M,g))},_t=(_,w,D,j,B,J,et,M,g)=>{_=_||Ji,w=w||Ji;const R=_.length,z=w.length,F=Math.min(R,z);let O;for(O=0;O<F;O++){const at=w[O]=g?jn(w[O]):vn(w[O]);S(_[O],at,D,null,B,J,et,M,g)}R>z?vt(_,B,J,!0,!1,F):G(w,D,j,B,J,et,M,g,F)},gt=(_,w,D,j,B,J,et,M,g)=>{let R=0;const z=w.length;let F=_.length-1,O=z-1;for(;R<=F&&R<=O;){const at=_[R],st=w[R]=g?jn(w[R]):vn(w[R]);if(Es(at,st))S(at,st,D,null,B,J,et,M,g);else break;R++}for(;R<=F&&R<=O;){const at=_[F],st=w[O]=g?jn(w[O]):vn(w[O]);if(Es(at,st))S(at,st,D,null,B,J,et,M,g);else break;F--,O--}if(R>F){if(R<=O){const at=O+1,st=at<z?w[at].el:j;for(;R<=O;)S(null,w[R]=g?jn(w[R]):vn(w[R]),D,st,B,J,et,M,g),R++}}else if(R>O)for(;R<=F;)Ot(_[R],B,J,!0),R++;else{const at=R,st=R,ht=new Map;for(R=st;R<=O;R++){const Dt=w[R]=g?jn(w[R]):vn(w[R]);Dt.key!=null&&ht.set(Dt.key,R)}let bt,lt=0;const pt=O-st+1;let Lt=!1,wt=0;const Mt=new Array(pt);for(R=0;R<pt;R++)Mt[R]=0;for(R=at;R<=F;R++){const Dt=_[R];if(lt>=pt){Ot(Dt,B,J,!0);continue}let Wt;if(Dt.key!=null)Wt=ht.get(Dt.key);else for(bt=st;bt<=O;bt++)if(Mt[bt-st]===0&&Es(Dt,w[bt])){Wt=bt;break}Wt===void 0?Ot(Dt,B,J,!0):(Mt[Wt-st]=R+1,Wt>=wt?wt=Wt:Lt=!0,S(Dt,w[Wt],D,null,B,J,et,M,g),lt++)}const kt=Lt?Ip(Mt):Ji;for(bt=kt.length-1,R=pt-1;R>=0;R--){const Dt=st+R,Wt=w[Dt],L=Dt+1<z?w[Dt+1].el:j;Mt[R]===0?S(null,Wt,D,L,B,J,et,M,g):Lt&&(bt<0||R!==kt[bt]?xt(Wt,D,L,2):bt--)}}},xt=(_,w,D,j,B=null)=>{const{el:J,type:et,transition:M,children:g,shapeFlag:R}=_;if(R&6){xt(_.component.subTree,w,D,j);return}if(R&128){_.suspense.move(w,D,j);return}if(R&64){et.move(_,w,D,ut);return}if(et===gn){i(J,w,D);for(let F=0;F<g.length;F++)xt(g[F],w,D,j);i(_.anchor,w,D);return}if(et===Co){y(_,w,D);return}if(j!==2&&R&1&&M)if(j===0)M.beforeEnter(J),i(J,w,D),Xe(()=>M.enter(J),B);else{const{leave:F,delayLeave:O,afterLeave:at}=M,st=()=>i(J,w,D),ht=()=>{F(J,()=>{st(),at&&at()})};O?O(J,st,ht):ht()}else i(J,w,D)},Ot=(_,w,D,j=!1,B=!1)=>{const{type:J,props:et,ref:M,children:g,dynamicChildren:R,shapeFlag:z,patchFlag:F,dirs:O,cacheIndex:at}=_;if(F===-2&&(B=!1),M!=null&&va(M,null,D,_,!0),at!=null&&(w.renderCache[at]=void 0),z&256){w.ctx.deactivate(_);return}const st=z&1&&O,ht=!Os(_);let bt;if(ht&&(bt=et&&et.onVnodeBeforeUnmount)&&pn(bt,w,_),z&6)ct(_.component,D,j);else{if(z&128){_.suspense.unmount(D,j);return}st&&li(_,null,w,"beforeUnmount"),z&64?_.type.remove(_,w,D,ut,j):R&&!R.hasOnce&&(J!==gn||F>0&&F&64)?vt(R,w,D,!1,!0):(J===gn&&F&384||!B&&z&16)&&vt(g,w,D),j&&Xt(_)}(ht&&(bt=et&&et.onVnodeUnmounted)||st)&&Xe(()=>{bt&&pn(bt,w,_),st&&li(_,null,w,"unmounted")},D)},Xt=_=>{const{type:w,el:D,anchor:j,transition:B}=_;if(w===gn){Q(D,j);return}if(w===Co){b(_);return}const J=()=>{s(D),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(_.shapeFlag&1&&B&&!B.persisted){const{leave:et,delayLeave:M}=B,g=()=>et(D,J);M?M(_.el,J,g):g()}else J()},Q=(_,w)=>{let D;for(;_!==w;)D=f(_),s(_),_=D;s(w)},ct=(_,w,D)=>{const{bum:j,scope:B,job:J,subTree:et,um:M,m:g,a:R}=_;Mc(g),Mc(R),j&&Eo(j),B.stop(),J&&(J.flags|=8,Ot(et,_,w,D)),M&&Xe(M,w),Xe(()=>{_.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},vt=(_,w,D,j=!1,B=!1,J=0)=>{for(let et=J;et<_.length;et++)Ot(_[et],w,D,j,B)},U=_=>{if(_.shapeFlag&6)return U(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const w=f(_.anchor||_.el),D=w&&w[tp];return D?f(D):w};let it=!1;const tt=(_,w,D)=>{_==null?w._vnode&&Ot(w._vnode,null,null,!0):S(w._vnode||null,_,w,null,null,null,D),w._vnode=_,it||(it=!0,dc(),Ah(),it=!1)},ut={p:S,um:Ot,m:xt,r:Xt,mt:nt,mc:G,pc:V,pbc:x,n:U,o:n};let Ct,Pt;return{render:tt,hydrate:Ct,createApp:yp(tt,Ct)}}function wo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ci({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Dp(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Xh(n,t,e=!1){const i=n.children,s=t.children;if(Ht(i)&&Ht(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=jn(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Xh(o,a)),a.type===co&&(a.el=o.el)}}function Ip(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function qh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qh(t)}function Mc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Up=Symbol.for("v-scx"),Np=()=>On(Up);function Ur(n,t,e){return Yh(n,t,e)}function Yh(n,t,e=se){const{immediate:i,deep:s,flush:r,once:o}=e,a=ve({},e),l=t&&i||!t&&r!=="post";let c;if(js){if(r==="sync"){const d=Np();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Sn,d.resume=Sn,d.pause=Sn,d}}const u=Ae;a.call=(d,v,S)=>En(d,u,v,S);let h=!1;r==="post"?a.scheduler=d=>{Xe(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,v)=>{v?d():Pl(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=$d(n,t,a);return js&&(c?c.push(f):l&&f()),f}function Op(n,t,e){const i=this.proxy,s=xe(n)?n.includes(".")?jh(i,n):()=>i[n]:n.bind(i,i);let r;zt(t)?r=t:(r=t.handler,e=t);const o=nr(this),a=Yh(s,r.bind(i),e);return o(),a}function jh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Fp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Je(t)}Modifiers`]||n[`${Ri(t)}Modifiers`];function Bp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||se;let s=e;const r=t.startsWith("update:"),o=r&&Fp(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>xe(u)?u.trim():u)),o.number&&(s=e.map(_d)));let a,l=i[a=So(t)]||i[a=So(Je(t))];!l&&r&&(l=i[a=So(Ri(t))]),l&&En(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(c,n,6,s)}}function Kh(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!zt(n)){const l=c=>{const u=Kh(c,t,!0);u&&(a=!0,ve(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(he(n)&&i.set(n,null),null):(Ht(r)?r.forEach(l=>o[l]=null):ve(o,r),he(n)&&i.set(n,o),o)}function lo(n,t){return!n||!to(t)?!1:(t=t.slice(2).replace(/Once$/,""),Jt(n,t[0].toLowerCase()+t.slice(1))||Jt(n,Ri(t))||Jt(n,t))}function Ro(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:v,inheritAttrs:S}=n,m=qr(n);let p,A;try{if(e.shapeFlag&4){const b=s||i,H=b;p=vn(c.call(H,b,u,h,d,f,v)),A=a}else{const b=t;p=vn(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),A=t.props?a:zp(a)}}catch(b){Bs.length=0,oo(b,n,1),p=Ue(qs)}let y=p;if(A&&S!==!1){const b=Object.keys(A),{shapeFlag:H}=y;b.length&&H&7&&(r&&b.some(_l)&&(A=Hp(A,r)),y=os(y,A,!1,!0))}return e.dirs&&(y=os(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&Ll(y,e.transition),p=y,qr(m),p}const zp=n=>{let t;for(const e in n)(e==="class"||e==="style"||to(e))&&((t||(t={}))[e]=n[e]);return t},Hp=(n,t)=>{const e={};for(const i in n)(!_l(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Vp(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Sc(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!lo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Sc(i,o,c):!0:!!o;return!1}function Sc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!lo(e,r))return!0}return!1}function Gp({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const $h=n=>n.__isSuspense;function kp(n,t){t&&t.pendingBranch?Ht(n)?t.effects.push(...n):t.effects.push(n):Qd(n)}const gn=Symbol.for("v-fgt"),co=Symbol.for("v-txt"),qs=Symbol.for("v-cmt"),Co=Symbol.for("v-stc"),Bs=[];let je=null;function uo(n=!1){Bs.push(je=n?null:[])}function Wp(){Bs.pop(),je=Bs[Bs.length-1]||null}let Ys=1;function Ec(n){Ys+=n,n<0&&je&&(je.hasOnce=!0)}function Xp(n){return n.dynamicChildren=Ys>0?je||Ji:null,Wp(),Ys>0&&je&&je.push(n),n}function ho(n,t,e,i,s,r){return Xp(Nl(n,t,e,i,s,r,!0))}function jr(n){return n?n.__v_isVNode===!0:!1}function Es(n,t){return n.type===t.type&&n.key===t.key}const Zh=({key:n})=>n??null,Nr=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?xe(n)||we(n)||zt(n)?{i:an,r:n,k:t,f:!!e}:n:null);function Nl(n,t=null,e=null,i=0,s=null,r=n===gn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Zh(t),ref:t&&Nr(t),scopeId:Rh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:an};return a?(Ol(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=xe(e)?8:16),Ys>0&&!o&&je&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&je.push(l),l}const Ue=qp;function qp(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===pp)&&(n=qs),jr(n)){const a=os(n,t,!0);return e&&Ol(a,e),Ys>0&&!r&&je&&(a.shapeFlag&6?je[je.indexOf(n)]=a:je.push(a)),a.patchFlag=-2,a}if(im(n)&&(n=n.__vccOpts),t){t=Yp(t);let{class:a,style:l}=t;a&&!xe(a)&&(t.class=Ml(a)),he(l)&&(Rl(l)&&!Ht(l)&&(l=ve({},l)),t.style=xl(l))}const o=xe(n)?1:$h(n)?128:ep(n)?64:he(n)?4:zt(n)?2:0;return Nl(n,t,e,i,s,o,r,!0)}function Yp(n){return n?Rl(n)||Bh(n)?ve({},n):n:null}function os(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?jp(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Zh(c),ref:t&&t.ref?e&&r?Ht(r)?r.concat(Nr(t)):[r,Nr(t)]:Nr(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==gn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&os(n.ssContent),ssFallback:n.ssFallback&&os(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ll(u,l.clone(u)),u}function ya(n=" ",t=0){return Ue(co,null,n,t)}function vn(n){return n==null||typeof n=="boolean"?Ue(qs):Ht(n)?Ue(gn,null,n.slice()):jr(n)?jn(n):Ue(co,null,String(n))}function jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:os(n)}function Ol(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ht(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Ol(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Bh(t)?t._ctx=an:s===3&&an&&(an.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else zt(t)?(t={default:t,_ctx:an},e=32):(t=String(t),i&64?(e=16,t=[ya(t)]):e=8);n.children=t,n.shapeFlag|=e}function jp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Ml([t.class,i.class]));else if(s==="style")t.style=xl([t.style,i.style]);else if(to(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ht(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function pn(n,t,e,i=null){En(n,t,7,[e,i])}const Kp=Nh();let $p=0;function Zp(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Kp,r={uid:$p++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hh(i,s),emitsOptions:Kh(i,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:i.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Bp.bind(null,r),n.ce&&n.ce(r),r}let Ae=null,Kr,Ta;{const n=so(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Kr=t("__VUE_INSTANCE_SETTERS__",e=>Ae=e),Ta=t("__VUE_SSR_SETTERS__",e=>js=e)}const nr=n=>{const t=Ae;return Kr(n),n.scope.on(),()=>{n.scope.off(),Kr(t)}},yc=()=>{Ae&&Ae.scope.off(),Kr(null)};function Jh(n){return n.vnode.shapeFlag&4}let js=!1;function Jp(n,t=!1,e=!1){t&&Ta(t);const{props:i,children:s}=n.vnode,r=Jh(n);Tp(n,i,r,t),Rp(n,s,e);const o=r?Qp(n,t):void 0;return t&&Ta(!1),o}function Qp(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,_p);const{setup:i}=e;if(i){si();const s=n.setupContext=i.length>1?em(n):null,r=nr(n),o=tr(i,n,0,[n.props,s]),a=nh(o);if(ri(),r(),(a||n.sp)&&!Os(n)&&Ch(n),a){if(o.then(yc,yc),t)return o.then(l=>{Tc(n,l,t)}).catch(l=>{oo(l,n,0)});n.asyncDep=o}else Tc(n,o,t)}else Qh(n,t)}function Tc(n,t,e){zt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:he(t)&&(n.setupState=Eh(t)),Qh(n,e)}let bc;function Qh(n,t,e){const i=n.type;if(!n.render){if(!t&&bc&&!i.render){const s=i.template||Il(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ve(ve({isCustomElement:r,delimiters:a},o),l);i.render=bc(s,c)}}n.render=i.render||Sn}{const s=nr(n);si();try{gp(n)}finally{ri(),s()}}}const tm={get(n,t){return Te(n,"get",""),n[t]}};function em(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,tm),slots:n.slots,emit:n.emit,expose:t}}function Fl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Eh(kd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Fs)return Fs[e](n)},has(t,e){return e in t||e in Fs}})):n.proxy}function nm(n,t=!0){return zt(n)?n.displayName||n.name:n.name||t&&n.__name}function im(n){return zt(n)&&"__vccOpts"in n}const sn=(n,t)=>jd(n,t,js);function tf(n,t,e){const i=arguments.length;return i===2?he(t)&&!Ht(t)?jr(t)?Ue(n,null,[t]):Ue(n,t):Ue(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&jr(e)&&(e=[e]),Ue(n,t,e))}const sm="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ba;const Ac=typeof window<"u"&&window.trustedTypes;if(Ac)try{ba=Ac.createPolicy("vue",{createHTML:n=>n})}catch{}const ef=ba?n=>ba.createHTML(n):n=>n,rm="http://www.w3.org/2000/svg",om="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,wc=Dn&&Dn.createElement("template"),am={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Dn.createElementNS(rm,n):t==="mathml"?Dn.createElementNS(om,n):e?Dn.createElement(n,{is:e}):Dn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Dn.createTextNode(n),createComment:n=>Dn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Dn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{wc.innerHTML=ef(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=wc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},lm=Symbol("_vtc");function cm(n,t,e){const i=n[lm];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Rc=Symbol("_vod"),um=Symbol("_vsh"),hm=Symbol(""),fm=/(^|;)\s*display\s*:/;function dm(n,t,e){const i=n.style,s=xe(e);let r=!1;if(e&&!s){if(t)if(xe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Or(i,a,"")}else for(const o in t)e[o]==null&&Or(i,o,"");for(const o in e)o==="display"&&(r=!0),Or(i,o,e[o])}else if(s){if(t!==e){const o=i[hm];o&&(e+=";"+o),i.cssText=e,r=fm.test(e)}}else t&&n.removeAttribute("style");Rc in n&&(n[Rc]=r?i.display:"",n[um]&&(i.display="none"))}const Cc=/\s*!important$/;function Or(n,t,e){if(Ht(e))e.forEach(i=>Or(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=pm(n,t);Cc.test(e)?n.setProperty(Ri(i),e.replace(Cc,""),"important"):n[i]=e}}const Pc=["Webkit","Moz","ms"],Po={};function pm(n,t){const e=Po[t];if(e)return e;let i=Je(t);if(i!=="filter"&&i in n)return Po[t]=i;i=io(i);for(let s=0;s<Pc.length;s++){const r=Pc[s]+i;if(r in n)return Po[t]=r}return t}const Lc="http://www.w3.org/1999/xlink";function Dc(n,t,e,i,s,r=Ed(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Lc,t.slice(6,t.length)):n.setAttributeNS(Lc,t,e):e==null||r&&!sh(e)?n.removeAttribute(t):n.setAttribute(t,r?"":ms(e)?String(e):e)}function Ic(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?ef(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=sh(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function mm(n,t,e,i){n.addEventListener(t,e,i)}function _m(n,t,e,i){n.removeEventListener(t,e,i)}const Uc=Symbol("_vei");function gm(n,t,e,i,s=null){const r=n[Uc]||(n[Uc]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=vm(t);if(i){const c=r[t]=Sm(i,s);mm(n,a,c,l)}else o&&(_m(n,a,o,l),r[t]=void 0)}}const Nc=/(?:Once|Passive|Capture)$/;function vm(n){let t;if(Nc.test(n)){t={};let i;for(;i=n.match(Nc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ri(n.slice(2)),t]}let Lo=0;const xm=Promise.resolve(),Mm=()=>Lo||(xm.then(()=>Lo=0),Lo=Date.now());function Sm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;En(Em(i,e.value),t,5,[i])};return e.value=n,e.attached=Mm(),e}function Em(n,t){if(Ht(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Oc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ym=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?cm(n,i,o):t==="style"?dm(n,e,i):to(t)?_l(t)||gm(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tm(n,t,i,o))?(Ic(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Dc(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!xe(i))?Ic(n,Je(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Dc(n,t,i,o))};function Tm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Oc(t)&&zt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Oc(t)&&xe(e)?!1:t in n}const bm=ve({patchProp:ym},am);let Fc;function Am(){return Fc||(Fc=Pp(bm))}const wm=(...n)=>{const t=Am().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Cm(i);if(!s)return;const r=t._component;!zt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Rm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Rm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Cm(n){return xe(n)?document.querySelector(n):n}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ji=typeof document<"u";function nf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Pm(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&nf(n.default)}const ee=Object.assign;function Do(n,t){const e={};for(const i in t){const s=t[i];e[i]=fn(s)?s.map(n):n(s)}return e}const zs=()=>{},fn=Array.isArray,sf=/#/g,Lm=/&/g,Dm=/\//g,Im=/=/g,Um=/\?/g,rf=/\+/g,Nm=/%5B/g,Om=/%5D/g,of=/%5E/g,Fm=/%60/g,af=/%7B/g,Bm=/%7C/g,lf=/%7D/g,zm=/%20/g;function Bl(n){return encodeURI(""+n).replace(Bm,"|").replace(Nm,"[").replace(Om,"]")}function Hm(n){return Bl(n).replace(af,"{").replace(lf,"}").replace(of,"^")}function Aa(n){return Bl(n).replace(rf,"%2B").replace(zm,"+").replace(sf,"%23").replace(Lm,"%26").replace(Fm,"`").replace(af,"{").replace(lf,"}").replace(of,"^")}function Vm(n){return Aa(n).replace(Im,"%3D")}function Gm(n){return Bl(n).replace(sf,"%23").replace(Um,"%3F")}function km(n){return n==null?"":Gm(n).replace(Dm,"%2F")}function Ks(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Wm=/\/$/,Xm=n=>n.replace(Wm,"");function Io(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=n(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Km(i??t,e),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Ks(o)}}function qm(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Bc(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Ym(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&as(t.matched[i],e.matched[s])&&cf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function as(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function cf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!jm(n[e],t[e]))return!1;return!0}function jm(n,t){return fn(n)?zc(n,t):fn(t)?zc(t,n):n===t}function zc(n,t){return fn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Km(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var $s;(function(n){n.pop="pop",n.push="push"})($s||($s={}));var Hs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Hs||(Hs={}));function $m(n){if(!n)if(ji){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Xm(n)}const Zm=/^[^#]+#/;function Jm(n,t){return n.replace(Zm,"#")+t}function Qm(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const fo=()=>({left:window.scrollX,top:window.scrollY});function t_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Qm(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Hc(n,t){return(history.state?history.state.position-t:-1)+n}const wa=new Map;function e_(n,t){wa.set(n,t)}function n_(n){const t=wa.get(n);return wa.delete(n),t}let i_=()=>location.protocol+"//"+location.host;function uf(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Bc(l,"")}return Bc(e,n)+i+s}function s_(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=uf(n,location),v=e.value,S=t.value;let m=0;if(f){if(e.value=d,t.value=f,o&&o===v){o=null;return}m=S?f.position-S.position:0}else i(d);s.forEach(p=>{p(e.value,v,{delta:m,type:$s.pop,direction:m?m>0?Hs.forward:Hs.back:Hs.unknown})})};function l(){o=e.value}function c(f){s.push(f);const d=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ee({},f.state,{scroll:fo()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Vc(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?fo():null}}function r_(n){const{history:t,location:e}=window,i={value:uf(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(e.host&&document.querySelector("base")?n:n.slice(h))+l:i_()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),e[u?"replace":"assign"](f)}}function o(l,c){const u=ee({},t.state,Vc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=ee({},s.value,t.state,{forward:l,scroll:fo()});r(u.current,u,!0);const h=ee({},Vc(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function o_(n){n=$m(n);const t=r_(n),e=s_(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=ee({location:"",base:n,go:i,createHref:Jm.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function a_(n){return typeof n=="string"||n&&typeof n=="object"}function hf(n){return typeof n=="string"||typeof n=="symbol"}const ff=Symbol("");var Gc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Gc||(Gc={}));function ls(n,t){return ee(new Error,{type:n,[ff]:!0},t)}function bn(n,t){return n instanceof Error&&ff in n&&(t==null||!!(n.type&t))}const kc="[^/]+?",l_={sensitive:!1,strict:!1,start:!0,end:!0},c_=/[.+*?^${}()[\]/\\]/g;function u_(n,t){const e=ee({},l_,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(e.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(c_,"\\$&"),d+=40;else if(f.type===1){const{value:v,repeatable:S,optional:m,regexp:p}=f;r.push({name:v,repeatable:S,optional:m});const A=p||kc;if(A!==kc){d+=10;try{new RegExp(`(${A})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${v}" (${A}): `+b.message)}}let y=S?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),s+=y,d+=20,m&&(d+=-8),S&&(d+=-20),A===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",v=r[f-1];h[v.name]=d&&v.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:v,repeatable:S,optional:m}=d,p=v in c?c[v]:"";if(fn(p)&&!S)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const A=fn(p)?p.join("/"):p;if(!A)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function h_(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function df(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=h_(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(Wc(i))return 1;if(Wc(s))return-1}return s.length-i.length}function Wc(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const f_={type:0,value:""},d_=/[a-zA-Z0-9_]/;function p_(n){if(!n)return[[]];if(n==="/")return[[f_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${c}": ${d}`)}let e=0,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(e===0?r.push({type:0,value:c}):e===1||e===2||e===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),e=1):f();break;case 4:f(),e=i;break;case 1:l==="("?e=2:d_.test(l)?f():(h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=3:u+=l;break;case 3:h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function m_(n,t,e){const i=u_(p_(n.path),e),s=ee(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function __(n,t){const e=[],i=new Map;t=jc({strict:!1,end:!0,sensitive:!1},t);function s(h){return i.get(h)}function r(h,f,d){const v=!d,S=qc(h);S.aliasOf=d&&d.record;const m=jc(t,h),p=[S];if("alias"in h){const b=typeof h.alias=="string"?[h.alias]:h.alias;for(const H of b)p.push(qc(ee({},S,{components:d?d.record.components:S.components,path:H,aliasOf:d?d.record:S})))}let A,y;for(const b of p){const{path:H}=b;if(f&&H[0]!=="/"){const P=f.record.path,C=P[P.length-1]==="/"?"":"/";b.path=f.record.path+(H&&C+H)}if(A=m_(b,f,m),d?d.alias.push(A):(y=y||A,y!==A&&y.alias.push(A),v&&h.name&&!Yc(A)&&o(h.name)),pf(A)&&l(A),S.children){const P=S.children;for(let C=0;C<P.length;C++)r(P[C],A,d&&d.children[C])}d=d||A}return y?()=>{o(y)}:zs}function o(h){if(hf(h)){const f=i.get(h);f&&(i.delete(h),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(h);f>-1&&(e.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return e}function l(h){const f=x_(h,e);e.splice(f,0,h),h.record.name&&!Yc(h)&&i.set(h.record.name,h)}function c(h,f){let d,v={},S,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw ls(1,{location:h});m=d.record.name,v=ee(Xc(f.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),h.params&&Xc(h.params,d.keys.map(y=>y.name))),S=d.stringify(v)}else if(h.path!=null)S=h.path,d=e.find(y=>y.re.test(S)),d&&(v=d.parse(S),m=d.record.name);else{if(d=f.name?i.get(f.name):e.find(y=>y.re.test(f.path)),!d)throw ls(1,{location:h,currentLocation:f});m=d.record.name,v=ee({},f.params,h.params),S=d.stringify(v)}const p=[];let A=d;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:S,params:v,matched:p,meta:v_(p)}}n.forEach(h=>r(h));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Xc(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function qc(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:g_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function g_(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Yc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function v_(n){return n.reduce((t,e)=>ee(t,e.meta),{})}function jc(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function x_(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;df(n,t[r])<0?i=r:e=r+1}const s=M_(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function M_(n){let t=n;for(;t=t.parent;)if(pf(t)&&df(n,t)===0)return t}function pf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function S_(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(rf," "),o=r.indexOf("="),a=Ks(o<0?r:r.slice(0,o)),l=o<0?null:Ks(r.slice(o+1));if(a in t){let c=t[a];fn(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Kc(n){let t="";for(let e in n){const i=n[e];if(e=Vm(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(fn(i)?i.map(r=>r&&Aa(r)):[i&&Aa(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function E_(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=fn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const y_=Symbol(""),$c=Symbol(""),zl=Symbol(""),mf=Symbol(""),Ra=Symbol("");function ys(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Kn(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(ls(4,{from:e,to:t})):f instanceof Error?l(f):a_(f)?l(ls(2,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function Uo(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(nf(l)){const u=(l.__vccOpts||l)[t];u&&r.push(Kn(u,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Pm(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[t];return d&&Kn(d,e,i,o,a,s)()}))}}return r}function Zc(n){const t=On(zl),e=On(mf),i=sn(()=>{const l=Qi(n.to);return t.resolve(l)}),s=sn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=e.matched;if(!u||!h.length)return-1;const f=h.findIndex(as.bind(null,u));if(f>-1)return f;const d=Jc(l[c-2]);return c>1&&Jc(u)===d&&h[h.length-1].path!==d?h.findIndex(as.bind(null,l[c-2])):f}),r=sn(()=>s.value>-1&&w_(e.params,i.value.params)),o=sn(()=>s.value>-1&&s.value===e.matched.length-1&&cf(e.params,i.value.params));function a(l={}){return A_(l)?t[Qi(n.replace)?"replace":"push"](Qi(n.to)).catch(zs):Promise.resolve()}return{route:i,href:sn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const T_=er({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zc,setup(n,{slots:t}){const e=ro(Zc(n)),{options:i}=On(zl),s=sn(()=>({[Qc(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Qc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&t.default(e);return n.custom?r:tf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),b_=T_;function A_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function w_(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!fn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Jc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Qc=(n,t,e)=>n??t??e,R_=er({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=On(Ra),s=sn(()=>n.route||i.value),r=On($c,0),o=sn(()=>{let c=Qi(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=sn(()=>s.value.matched[o.value]);Ir($c,sn(()=>o.value+1)),Ir(y_,a),Ir(Ra,s);const l=Cl();return Ur(()=>[l.value,a.value,n.name],([c,u,h],[f,d,v])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!as(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return tu(e.default,{Component:f,route:c});const d=h.props[u],v=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=tf(f,ee({},v,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return tu(e.default,{Component:m,route:c})||m}}});function tu(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const C_=R_;function P_(n){const t=__(n.routes,n),e=n.parseQuery||S_,i=n.stringifyQuery||Kc,s=n.history,r=ys(),o=ys(),a=ys(),l=Wd(Hn);let c=Hn;ji&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Do.bind(null,U=>""+U),h=Do.bind(null,km),f=Do.bind(null,Ks);function d(U,it){let tt,ut;return hf(U)?(tt=t.getRecordMatcher(U),ut=it):ut=U,t.addRoute(ut,tt)}function v(U){const it=t.getRecordMatcher(U);it&&t.removeRoute(it)}function S(){return t.getRoutes().map(U=>U.record)}function m(U){return!!t.getRecordMatcher(U)}function p(U,it){if(it=ee({},it||l.value),typeof U=="string"){const w=Io(e,U,it.path),D=t.resolve({path:w.path},it),j=s.createHref(w.fullPath);return ee(w,D,{params:f(D.params),hash:Ks(w.hash),redirectedFrom:void 0,href:j})}let tt;if(U.path!=null)tt=ee({},U,{path:Io(e,U.path,it.path).path});else{const w=ee({},U.params);for(const D in w)w[D]==null&&delete w[D];tt=ee({},U,{params:h(w)}),it.params=h(it.params)}const ut=t.resolve(tt,it),Ct=U.hash||"";ut.params=u(f(ut.params));const Pt=qm(i,ee({},U,{hash:Hm(Ct),path:ut.path})),_=s.createHref(Pt);return ee({fullPath:Pt,hash:Ct,query:i===Kc?E_(U.query):U.query||{}},ut,{redirectedFrom:void 0,href:_})}function A(U){return typeof U=="string"?Io(e,U,l.value.path):ee({},U)}function y(U,it){if(c!==U)return ls(8,{from:it,to:U})}function b(U){return C(U)}function H(U){return b(ee(A(U),{replace:!0}))}function P(U){const it=U.matched[U.matched.length-1];if(it&&it.redirect){const{redirect:tt}=it;let ut=typeof tt=="function"?tt(U):tt;return typeof ut=="string"&&(ut=ut.includes("?")||ut.includes("#")?ut=A(ut):{path:ut},ut.params={}),ee({query:U.query,hash:U.hash,params:ut.path!=null?{}:U.params},ut)}}function C(U,it){const tt=c=p(U),ut=l.value,Ct=U.state,Pt=U.force,_=U.replace===!0,w=P(tt);if(w)return C(ee(A(w),{state:typeof w=="object"?ee({},Ct,w.state):Ct,force:Pt,replace:_}),it||tt);const D=tt;D.redirectedFrom=it;let j;return!Pt&&Ym(i,ut,tt)&&(j=ls(16,{to:D,from:ut}),xt(ut,ut,!0,!1)),(j?Promise.resolve(j):x(D,ut)).catch(B=>bn(B)?bn(B,2)?B:gt(B):V(B,D,ut)).then(B=>{if(B){if(bn(B,2))return C(ee({replace:_},A(B.to),{state:typeof B.to=="object"?ee({},Ct,B.to.state):Ct,force:Pt}),it||D)}else B=Z(D,ut,!0,_,Ct);return T(D,ut,B),B})}function G(U,it){const tt=y(U,it);return tt?Promise.reject(tt):Promise.resolve()}function ft(U){const it=Q.values().next().value;return it&&typeof it.runWithContext=="function"?it.runWithContext(U):U()}function x(U,it){let tt;const[ut,Ct,Pt]=L_(U,it);tt=Uo(ut.reverse(),"beforeRouteLeave",U,it);for(const w of ut)w.leaveGuards.forEach(D=>{tt.push(Kn(D,U,it))});const _=G.bind(null,U,it);return tt.push(_),vt(tt).then(()=>{tt=[];for(const w of r.list())tt.push(Kn(w,U,it));return tt.push(_),vt(tt)}).then(()=>{tt=Uo(Ct,"beforeRouteUpdate",U,it);for(const w of Ct)w.updateGuards.forEach(D=>{tt.push(Kn(D,U,it))});return tt.push(_),vt(tt)}).then(()=>{tt=[];for(const w of Pt)if(w.beforeEnter)if(fn(w.beforeEnter))for(const D of w.beforeEnter)tt.push(Kn(D,U,it));else tt.push(Kn(w.beforeEnter,U,it));return tt.push(_),vt(tt)}).then(()=>(U.matched.forEach(w=>w.enterCallbacks={}),tt=Uo(Pt,"beforeRouteEnter",U,it,ft),tt.push(_),vt(tt))).then(()=>{tt=[];for(const w of o.list())tt.push(Kn(w,U,it));return tt.push(_),vt(tt)}).catch(w=>bn(w,8)?w:Promise.reject(w))}function T(U,it,tt){a.list().forEach(ut=>ft(()=>ut(U,it,tt)))}function Z(U,it,tt,ut,Ct){const Pt=y(U,it);if(Pt)return Pt;const _=it===Hn,w=ji?history.state:{};tt&&(ut||_?s.replace(U.fullPath,ee({scroll:_&&w&&w.scroll},Ct)):s.push(U.fullPath,Ct)),l.value=U,xt(U,it,tt,_),gt()}let Y;function nt(){Y||(Y=s.listen((U,it,tt)=>{if(!ct.listening)return;const ut=p(U),Ct=P(ut);if(Ct){C(ee(Ct,{replace:!0}),ut).catch(zs);return}c=ut;const Pt=l.value;ji&&e_(Hc(Pt.fullPath,tt.delta),fo()),x(ut,Pt).catch(_=>bn(_,12)?_:bn(_,2)?(C(_.to,ut).then(w=>{bn(w,20)&&!tt.delta&&tt.type===$s.pop&&s.go(-1,!1)}).catch(zs),Promise.reject()):(tt.delta&&s.go(-tt.delta,!1),V(_,ut,Pt))).then(_=>{_=_||Z(ut,Pt,!1),_&&(tt.delta&&!bn(_,8)?s.go(-tt.delta,!1):tt.type===$s.pop&&bn(_,20)&&s.go(-1,!1)),T(ut,Pt,_)}).catch(zs)}))}let ot=ys(),q=ys(),$;function V(U,it,tt){gt(U);const ut=q.list();return ut.length?ut.forEach(Ct=>Ct(U,it,tt)):console.error(U),Promise.reject(U)}function _t(){return $&&l.value!==Hn?Promise.resolve():new Promise((U,it)=>{ot.add([U,it])})}function gt(U){return $||($=!U,nt(),ot.list().forEach(([it,tt])=>U?tt(U):it()),ot.reset()),U}function xt(U,it,tt,ut){const{scrollBehavior:Ct}=n;if(!ji||!Ct)return Promise.resolve();const Pt=!tt&&n_(Hc(U.fullPath,0))||(ut||!tt)&&history.state&&history.state.scroll||null;return Th().then(()=>Ct(U,it,Pt)).then(_=>_&&t_(_)).catch(_=>V(_,U,it))}const Ot=U=>s.go(U);let Xt;const Q=new Set,ct={currentRoute:l,listening:!0,addRoute:d,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:S,resolve:p,options:n,push:b,replace:H,go:Ot,back:()=>Ot(-1),forward:()=>Ot(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:q.add,isReady:_t,install(U){const it=this;U.component("RouterLink",b_),U.component("RouterView",C_),U.config.globalProperties.$router=it,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Qi(l)}),ji&&!Xt&&l.value===Hn&&(Xt=!0,b(s.location).catch(Ct=>{}));const tt={};for(const Ct in Hn)Object.defineProperty(tt,Ct,{get:()=>l.value[Ct],enumerable:!0});U.provide(zl,it),U.provide(mf,xh(tt)),U.provide(Ra,l);const ut=U.unmount;Q.add(U),U.unmount=function(){Q.delete(U),Q.size<1&&(c=Hn,Y&&Y(),Y=null,l.value=Hn,Xt=!1,$=!1),ut()}}};function vt(U){return U.reduce((it,tt)=>it.then(()=>ft(tt)),Promise.resolve())}return ct}function L_(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>as(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>as(c,l))||s.push(l))}return[e,i,s]}const _f=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},D_={},I_={class:"Navigation"};function U_(n,t){const e=Ih("RouterLink");return uo(),ho("main",I_,[Ue(e,{to:"/on-road/game",class:"Navigation__link"},{default:ga(()=>t[0]||(t[0]=[ya("Game")])),_:1}),Ue(e,{to:"/on-road/obstacle",class:"Navigation__link"},{default:ga(()=>t[1]||(t[1]=[ya("Obstacle")])),_:1})])}const N_=_f(D_,[["render",U_],["__scopeId","data-v-d62bfd5d"]]),gf=er({__name:"App",setup(n){return(t,e)=>{const i=Ih("RouterView");return uo(),ho(gn,null,[Ue(N_),Nl("main",null,[Ue(i)])],64)}}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="169",ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},O_=0,eu=1,F_=2,vf=1,B_=2,Ln=3,ni=0,He=1,Mn=2,ti=0,is=1,nu=2,iu=3,su=4,z_=5,vi=100,H_=101,V_=102,G_=103,k_=104,W_=200,X_=201,q_=202,Y_=203,Ca=204,Pa=205,j_=206,K_=207,$_=208,Z_=209,J_=210,Q_=211,tg=212,eg=213,ng=214,La=0,Da=1,Ia=2,cs=3,Ua=4,Na=5,Oa=6,Fa=7,Vl=0,ig=1,sg=2,ei=0,rg=1,og=2,ag=3,lg=4,cg=5,ug=6,hg=7,xf=300,us=301,hs=302,Ba=303,za=304,po=306,Ha=1e3,Mi=1001,Va=1002,Ze=1003,fg=1004,ur=1005,rn=1006,No=1007,Si=1008,Fn=1009,Mf=1010,Sf=1011,Zs=1012,Gl=1013,bi=1014,Un=1015,ir=1016,kl=1017,Wl=1018,fs=1020,Ef=35902,yf=1021,Tf=1022,ln=1023,bf=1024,Af=1025,ss=1026,ds=1027,wf=1028,Xl=1029,Rf=1030,ql=1031,Yl=1033,Fr=33776,Br=33777,zr=33778,Hr=33779,Ga=35840,ka=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,ja=37496,Ka=37808,$a=37809,Za=37810,Ja=37811,Qa=37812,tl=37813,el=37814,nl=37815,il=37816,sl=37817,rl=37818,ol=37819,al=37820,ll=37821,Vr=36492,cl=36494,ul=36495,Cf=36283,hl=36284,fl=36285,dl=36286,dg=3200,pg=3201,jl=0,mg=1,Jn="",_n="srgb",oi="srgb-linear",Kl="display-p3",mo="display-p3-linear",$r="linear",oe="srgb",Zr="rec709",Jr="p3",Ii=7680,ru=519,_g=512,gg=513,vg=514,Pf=515,xg=516,Mg=517,Sg=518,Eg=519,ou=35044,au="300 es",Nn=2e3,Qr=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lu=1234567;const Vs=Math.PI/180,Js=180/Math.PI;function _s(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function be(n,t,e){return Math.max(t,Math.min(e,n))}function $l(n,t){return(n%t+t)%t}function yg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Tg(n,t,e){return n!==t?(e-n)/(t-n):0}function Gs(n,t,e){return(1-e)*n+e*t}function bg(n,t,e,i){return Gs(n,t,1-Math.exp(-e*i))}function Ag(n,t=1){return t-Math.abs($l(n,t*2)-t)}function wg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Rg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Cg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Pg(n,t){return n+Math.random()*(t-n)}function Lg(n){return n*(.5-Math.random())}function Dg(n){n!==void 0&&(lu=n);let t=lu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ig(n){return n*Vs}function Ug(n){return n*Js}function Ng(n){return(n&n-1)===0&&n!==0}function Og(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bg(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),v=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const zg={DEG2RAD:Vs,RAD2DEG:Js,generateUUID:_s,clamp:be,euclideanModulo:$l,mapLinear:yg,inverseLerp:Tg,lerp:Gs,damp:bg,pingpong:Ag,smoothstep:wg,smootherstep:Rg,randInt:Cg,randFloat:Pg,randFloatSpread:Lg,seededRandom:Dg,degToRad:Ig,radToDeg:Ug,isPowerOfTwo:Ng,ceilPowerOfTwo:Og,floorPowerOfTwo:Fg,setQuaternionFromProperEuler:Bg,normalize:Pe,denormalize:Ki};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,i,s,r,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],v=i[8],S=s[0],m=s[3],p=s[6],A=s[1],y=s[4],b=s[7],H=s[2],P=s[5],C=s[8];return r[0]=o*S+a*A+l*H,r[3]=o*m+a*y+l*P,r[6]=o*p+a*b+l*C,r[1]=c*S+u*A+h*H,r[4]=c*m+u*y+h*P,r[7]=c*p+u*b+h*C,r[2]=f*S+d*A+v*H,r[5]=f*m+d*y+v*P,r[8]=f*p+d*b+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,v=e*h+i*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return t[0]=h*S,t[1]=(s*c-u*i)*S,t[2]=(a*i-s*o)*S,t[3]=f*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=d*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oo.makeScale(t,e)),this}rotate(t){return this.premultiply(Oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Gt;function Lf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hg(){const n=Qs("canvas");return n.style.display="block",n}const cu={};function Gr(n){n in cu||(cu[n]=!0,console.warn(n))}function Vg(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Gg(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kg(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const uu=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hu=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[oi]:{transfer:$r,primaries:Zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[_n]:{transfer:oe,primaries:Zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[mo]:{transfer:$r,primaries:Jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(hu),fromReference:n=>n.applyMatrix3(uu)},[Kl]:{transfer:oe,primaries:Jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(hu),fromReference:n=>n.applyMatrix3(uu).convertLinearToSRGB()}},Wg=new Set([oi,mo]),Qt={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Wg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Ts[t].toReference,s=Ts[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Ts[n].primaries},getTransfer:function(n){return n===Jn?$r:Ts[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Ts[t].luminanceCoefficients)}};function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ui;class Xg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Qs("canvas")),Ui.width=t.width,Ui.height=t.height;const i=Ui.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=rs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(rs(e[i]/255)*255):e[i]=rs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qg=0;class Df{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bo(s[o].image)):r.push(Bo(s[o]))}else r=Bo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yg=0;class Ne extends Ci{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=Mi,s=Mi,r=rn,o=Si,a=ln,l=Fn,c=Ne.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=_s(),this.name="",this.source=new Df(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=xf;Ne.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],v=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(d+1)/2,H=(p+1)/2,P=(u+f)/4,C=(h+S)/4,G=(v+m)/4;return y>b&&y>H?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=P/i,r=C/i):b>H?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=P/s,r=G/s):H<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(H),i=C/r,s=G/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-v)*(m-v)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(h-S)/A,this.z=(f-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jg extends Ci{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ne(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Df(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends jg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class If extends Ne{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kg extends Ne{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],v=r[o+2],S=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=v,t[e+3]=S;return}if(h!==S||l!==f||c!==d||u!==v){let m=1-a;const p=l*f+c*d+u*v+h*S,A=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const H=Math.sqrt(y),P=Math.atan2(H,p*A);m=Math.sin(m*P)/H,a=Math.sin(a*P)/H}const b=a*A;if(l=l*m+f*b,c=c*m+d*b,u=u*m+v*b,h=h*m+S*b,m===1-a){const H=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=H,c*=H,u*=H,h*=H}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],v=r[o+3];return t[e]=a*v+u*h+l*d-c*f,t[e+1]=l*v+u*f+c*h-a*d,t[e+2]=c*v+u*d+a*f-l*h,t[e+3]=u*v-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"YXZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"ZXY":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"ZYX":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"YZX":this._x=f*u*h+c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h-f*d*v;break;case"XZY":this._x=f*u*h-c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new k,fu=new wi;class sr{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hr.copy(i.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),fr.subVectors(this.max,bs),Ni.subVectors(t.a,bs),Oi.subVectors(t.b,bs),Fi.subVectors(t.c,bs),Vn.subVectors(Oi,Ni),Gn.subVectors(Fi,Oi),ui.subVectors(Ni,Fi);let e=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-ui.z,ui.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,ui.z,0,-ui.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-ui.y,ui.x,0];return!Ho(e,Ni,Oi,Fi,fr)||(e=[1,0,0,0,1,0,0,0,1],!Ho(e,Ni,Oi,Fi,fr))?!1:(dr.crossVectors(Vn,Gn),e=[dr.x,dr.y,dr.z],Ho(e,Ni,Oi,Fi,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new k,new k,new k,new k,new k,new k,new k,new k],tn=new k,hr=new sr,Ni=new k,Oi=new k,Fi=new k,Vn=new k,Gn=new k,ui=new k,bs=new k,fr=new k,dr=new k,hi=new k;function Ho(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hi.fromArray(n,r);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $g=new sr,As=new k,Vo=new k;class Zl{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$g.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Vo)),this.expandByPoint(As.copy(t.center).sub(Vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new k,Go=new k,pr=new k,kn=new k,ko=new k,mr=new k,Wo=new k;class Uf{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Go.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Go);const r=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=kn.dot(this.direction),l=-kn.dot(pr),c=kn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,v;if(u>0)if(h=o*l-a,f=o*a-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const S=1/u;h*=S,f*=S,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Go).addScaledVector(pr,f),d}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const i=wn.dot(this.direction),s=wn.dot(wn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,i,s,r){ko.subVectors(e,t),mr.subVectors(i,t),Wo.crossVectors(ko,mr);let o=this.direction.dot(Wo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot(mr.crossVectors(kn,mr));if(l<0)return null;const c=a*this.direction.dot(ko.cross(kn));if(c<0||l+c>o)return null;const u=-a*kn.dot(Wo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,v,S,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,v,S,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,v,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=v,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,v=a*u,S=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+v*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=v+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,v=c*u,S=c*h;e[0]=f+S*a,e[4]=v*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-v,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,v=c*u,S=c*h;e[0]=f-S*a,e[4]=-o*h,e[8]=v+d*a,e[1]=d+v*a,e[5]=o*u,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,v=a*u,S=a*h;e[0]=l*u,e[4]=v*c-d,e[8]=f*c+S,e[1]=l*h,e[5]=S*c+f,e[9]=d*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,v=a*l,S=a*c;e[0]=l*u,e[4]=S-f*h,e[8]=v*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+v,e[10]=f-S*h}else if(t.order==="XZY"){const f=o*l,d=o*c,v=a*l,S=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+S,e[5]=o*u,e[9]=d*h-v,e[2]=v*h-d,e[6]=a*u,e[10]=S*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zg,t,Jg)}lookAt(t,e,i){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Wn.crossVectors(i,ke),Wn.lengthSq()===0&&(Math.abs(i.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Wn.crossVectors(i,ke)),Wn.normalize(),_r.crossVectors(ke,Wn),s[0]=Wn.x,s[4]=_r.x,s[8]=ke.x,s[1]=Wn.y,s[5]=_r.y,s[9]=ke.y,s[2]=Wn.z,s[6]=_r.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],v=i[2],S=i[6],m=i[10],p=i[14],A=i[3],y=i[7],b=i[11],H=i[15],P=s[0],C=s[4],G=s[8],ft=s[12],x=s[1],T=s[5],Z=s[9],Y=s[13],nt=s[2],ot=s[6],q=s[10],$=s[14],V=s[3],_t=s[7],gt=s[11],xt=s[15];return r[0]=o*P+a*x+l*nt+c*V,r[4]=o*C+a*T+l*ot+c*_t,r[8]=o*G+a*Z+l*q+c*gt,r[12]=o*ft+a*Y+l*$+c*xt,r[1]=u*P+h*x+f*nt+d*V,r[5]=u*C+h*T+f*ot+d*_t,r[9]=u*G+h*Z+f*q+d*gt,r[13]=u*ft+h*Y+f*$+d*xt,r[2]=v*P+S*x+m*nt+p*V,r[6]=v*C+S*T+m*ot+p*_t,r[10]=v*G+S*Z+m*q+p*gt,r[14]=v*ft+S*Y+m*$+p*xt,r[3]=A*P+y*x+b*nt+H*V,r[7]=A*C+y*T+b*ot+H*_t,r[11]=A*G+y*Z+b*q+H*gt,r[15]=A*ft+y*Y+b*$+H*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],v=t[3],S=t[7],m=t[11],p=t[15];return v*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+S*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],v=t[12],S=t[13],m=t[14],p=t[15],A=h*m*c-S*f*c+S*l*d-a*m*d-h*l*p+a*f*p,y=v*f*c-u*m*c-v*l*d+o*m*d+u*l*p-o*f*p,b=u*S*c-v*h*c+v*a*d-o*S*d-u*a*p+o*h*p,H=v*h*l-u*S*l-v*a*f+o*S*f+u*a*m-o*h*m,P=e*A+i*y+s*b+r*H;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return t[0]=A*C,t[1]=(S*f*r-h*m*r-S*s*d+i*m*d+h*s*p-i*f*p)*C,t[2]=(a*m*r-S*l*r+S*s*c-i*m*c-a*s*p+i*l*p)*C,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*C,t[4]=y*C,t[5]=(u*m*r-v*f*r+v*s*d-e*m*d-u*s*p+e*f*p)*C,t[6]=(v*l*r-o*m*r-v*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*C,t[8]=b*C,t[9]=(v*h*r-u*S*r-v*i*d+e*S*d+u*i*p-e*h*p)*C,t[10]=(o*S*r-v*a*r+v*i*c-e*S*c-o*i*p+e*a*p)*C,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*C,t[12]=H*C,t[13]=(u*S*s-v*h*s+v*i*f-e*S*f-u*i*m+e*h*m)*C,t[14]=(v*a*s-o*S*s-v*i*l+e*S*l+o*i*m-e*a*m)*C,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,v=r*h,S=o*u,m=o*h,p=a*h,A=l*c,y=l*u,b=l*h,H=i.x,P=i.y,C=i.z;return s[0]=(1-(S+p))*H,s[1]=(d+b)*H,s[2]=(v-y)*H,s[3]=0,s[4]=(d-b)*P,s[5]=(1-(f+p))*P,s[6]=(m+A)*P,s[7]=0,s[8]=(v+y)*C,s[9]=(m-A)*C,s[10]=(1-(f+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const c=1/r,u=1/o,h=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,e.setFromRotationMatrix(en),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Nn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,v;if(a===Nn)d=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Qr)d=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Nn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let v,S;if(a===Nn)v=(o+r)*h,S=-2*h;else if(a===Qr)v=r*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Bi=new k,en=new ce,Zg=new k(0,0,0),Jg=new k(1,1,1),Wn=new k,_r=new k,ke=new k,du=new ce,pu=new wi;class dn{constructor(t=0,e=0,i=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Nf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qg=0;const mu=new k,zi=new wi,Rn=new ce,gr=new k,ws=new k,tv=new k,ev=new wi,_u=new k(1,0,0),gu=new k(0,1,0),vu=new k(0,0,1),xu={type:"added"},nv={type:"removed"},Hi={type:"childadded",child:null},Xo={type:"childremoved",child:null};class Se extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new k,e=new dn,i=new wi,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Gt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(_u,t)}rotateY(t){return this.rotateOnAxis(gu,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_u,t)}translateY(t){return this.translateOnAxis(gu,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gr.copy(t):gr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(ws,gr,this.up):Rn.lookAt(gr,ws,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Rn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nv),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,tv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,ev,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Se.DEFAULT_UP=new k(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new k,Cn=new k,qo=new k,Pn=new k,Vi=new k,Gi=new k,Mu=new k,Yo=new k,jo=new k,Ko=new k,$o=new le,Zo=new le,Jo=new le;class on{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){nn.subVectors(s,e),Cn.subVectors(i,e),qo.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(Cn),l=nn.dot(qo),c=Cn.dot(Cn),u=Cn.dot(qo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-d-v,v,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return $o.setScalar(0),Zo.setScalar(0),Jo.setScalar(0),$o.fromBufferAttribute(t,e),Zo.fromBufferAttribute(t,i),Jo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($o,r.x),o.addScaledVector(Zo,r.y),o.addScaledVector(Jo,r.z),o}static isFrontFacing(t,e,i,s){return nn.subVectors(i,e),Cn.subVectors(t,e),nn.cross(Cn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),nn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Vi.subVectors(s,i),Gi.subVectors(r,i),Yo.subVectors(t,i);const l=Vi.dot(Yo),c=Gi.dot(Yo);if(l<=0&&c<=0)return e.copy(i);jo.subVectors(t,s);const u=Vi.dot(jo),h=Gi.dot(jo);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Vi,o);Ko.subVectors(t,r);const d=Vi.dot(Ko),v=Gi.dot(Ko);if(v>=0&&d<=v)return e.copy(r);const S=d*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Gi,a);const m=u*v-d*h;if(m<=0&&h-u>=0&&d-v>=0)return Mu.subVectors(r,s),a=(h-u)/(h-u+(d-v)),e.copy(s).addScaledVector(Mu,a);const p=1/(m+S+f);return o=S*p,a=f*p,e.copy(i).addScaledVector(Vi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Qo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=$l(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Qo(o,r,t+1/3),this.g=Qo(o,r,t),this.b=Qo(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=_n){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const i=Of[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return Qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(be(ye.r*255,0,255))*65536+Math.round(be(ye.g*255,0,255))*256+Math.round(be(ye.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,s=ye.g,r=ye.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=_n){Qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,s=ye.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(vr);const i=Gs(Xn.h,vr.h,e),s=Gs(Xn.s,vr.s,e),r=Gs(Xn.l,vr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Yt;Yt.NAMES=Of;let iv=0;class gs extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=is,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ca&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ff extends gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new k,xr=new Bt;class hn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ou,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ki(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ou&&(t.usage=this.usage),t}}class Bf extends hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class zf extends hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class yi extends hn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let sv=0;const $e=new ce,ta=new Se,ki=new k,We=new sr,Rs=new sr,ge=new k;class Pi extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lf(t)?zf:Bf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,i){return $e.makeTranslation(t,e,i),this.applyMatrix4($e),this}scale(t,e,i){return $e.makeScale(t,e,i),this.applyMatrix4($e),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new yi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];We.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(We.min,Rs.min),We.expandByPoint(ge),ge.addVectors(We.max,Rs.max),We.expandByPoint(ge)):(We.expandByPoint(Rs.min),We.expandByPoint(Rs.max))}We.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ge.fromBufferAttribute(a,c),l&&(ki.fromBufferAttribute(t,c),ge.add(ki)),s=Math.max(s,i.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let G=0;G<i.count;G++)a[G]=new k,l[G]=new k;const c=new k,u=new k,h=new k,f=new Bt,d=new Bt,v=new Bt,S=new k,m=new k;function p(G,ft,x){c.fromBufferAttribute(i,G),u.fromBufferAttribute(i,ft),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,G),d.fromBufferAttribute(r,ft),v.fromBufferAttribute(r,x),u.sub(c),h.sub(c),d.sub(f),v.sub(f);const T=1/(d.x*v.y-v.x*d.y);isFinite(T)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(h,-d.y).multiplyScalar(T),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(T),a[G].add(S),a[ft].add(S),a[x].add(S),l[G].add(m),l[ft].add(m),l[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let G=0,ft=A.length;G<ft;++G){const x=A[G],T=x.start,Z=x.count;for(let Y=T,nt=T+Z;Y<nt;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const y=new k,b=new k,H=new k,P=new k;function C(G){H.fromBufferAttribute(s,G),P.copy(H);const ft=a[G];y.copy(ft),y.sub(H.multiplyScalar(H.dot(ft))).normalize(),b.crossVectors(P,ft);const T=b.dot(l[G])<0?-1:1;o.setXYZW(G,y.x,y.y,y.z,T)}for(let G=0,ft=A.length;G<ft;++G){const x=A[G],T=x.start,Z=x.count;for(let Y=T,nt=T+Z;Y<nt;Y+=3)C(t.getX(Y+0)),C(t.getX(Y+1)),C(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?d=l[S]*a.data.stride+a.offset:d=l[S]*u;for(let p=0;p<u;p++)f[v++]=c[d++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new ce,fi=new Uf,Mr=new Zl,Eu=new k,Sr=new k,Er=new k,yr=new k,ea=new k,Tr=new k,yu=new k,br=new k;class ze extends Se{constructor(t=new Pi,e=new Ff){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ea.fromBufferAttribute(h,t),o?Tr.addScaledVector(ea,u):Tr.addScaledVector(ea.sub(e),u))}e.add(Tr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(Mr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Mr,Eu)===null||fi.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(Su.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Su),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){const m=f[v],p=o[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=A,H=y;b<H;b+=3){const P=a.getX(b),C=a.getX(b+1),G=a.getX(b+2);s=Ar(this,p,t,i,c,u,h,P,C,G),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),S=Math.min(a.count,d.start+d.count);for(let m=v,p=S;m<p;m+=3){const A=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);s=Ar(this,o,t,i,c,u,h,A,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){const m=f[v],p=o[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=A,H=y;b<H;b+=3){const P=b,C=b+1,G=b+2;s=Ar(this,p,t,i,c,u,h,P,C,G),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=v,p=S;m<p;m+=3){const A=m,y=m+1,b=m+2;s=Ar(this,o,t,i,c,u,h,A,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function rv(n,t,e,i,s,r,o,a){let l;if(t.side===He?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ni,a),l===null)return null;br.copy(a),br.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:n}}function Ar(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Sr),n.getVertexPosition(l,Er),n.getVertexPosition(c,yr);const u=rv(n,t,e,i,Sr,Er,yr,yu);if(u){const h=new k;on.getBarycoord(yu,Sr,Er,yr,h),s&&(u.uv=on.getInterpolatedAttribute(s,a,l,c,h,new Bt)),r&&(u.uv1=on.getInterpolatedAttribute(r,a,l,c,h,new Bt)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};on.getNormal(Sr,Er,yr,f.normal),u.face=f,u.barycoord=h}return u}class vs extends Pi{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(h,2));function v(S,m,p,A,y,b,H,P,C,G,ft){const x=b/C,T=H/G,Z=b/2,Y=H/2,nt=P/2,ot=C+1,q=G+1;let $=0,V=0;const _t=new k;for(let gt=0;gt<q;gt++){const xt=gt*T-Y;for(let Ot=0;Ot<ot;Ot++){const Xt=Ot*x-Z;_t[S]=Xt*A,_t[m]=xt*y,_t[p]=nt,c.push(_t.x,_t.y,_t.z),_t[S]=0,_t[m]=0,_t[p]=P>0?1:-1,u.push(_t.x,_t.y,_t.z),h.push(Ot/C),h.push(1-gt/G),$+=1}}for(let gt=0;gt<G;gt++)for(let xt=0;xt<C;xt++){const Ot=f+xt+ot*gt,Xt=f+xt+ot*(gt+1),Q=f+(xt+1)+ot*(gt+1),ct=f+(xt+1)+ot*gt;l.push(Ot,Xt,ct),l.push(Xt,Q,ct),V+=6}a.addGroup(d,V,ft),d+=V,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Le(n){const t={};for(let e=0;e<n.length;e++){const i=ps(n[e]);for(const s in i)t[s]=i[s]}return t}function ov(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Hf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const av={clone:ps,merge:Le};var lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lv,this.fragmentShader=cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=ov(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vf extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new k,Tu=new Bt,bu=new Bt;class Ye extends Vf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,Tu,bu),e.subVectors(bu,Tu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class uv extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ye(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const r=new Ye(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new Ye(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new Ye(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const l=new Ye(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const c=new Ye(Wi,Xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Gf extends Ne{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hv extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Gf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vs(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:ti});r.uniforms.tEquirect.value=e;const o=new ze(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=rn),new uv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const na=new k,fv=new k,dv=new Gt;class $n{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=na.subVectors(i,e).cross(fv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(na),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||dv.getNormalMatrix(t),s=this.coplanarPoint(na).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Zl,wr=new k;class Jl{constructor(t=new $n,e=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Nn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],v=s[9],S=s[10],m=s[11],p=s[12],A=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,m-d,b-p).normalize(),i[1].setComponents(l+r,f+c,m+d,b+p).normalize(),i[2].setComponents(l+o,f+u,m+v,b+A).normalize(),i[3].setComponents(l-o,f-u,m-v,b-A).normalize(),i[4].setComponents(l-a,f-h,m-S,b-y).normalize(),e===Nn)i[5].setComponents(l+a,f+h,m+S,b+y).normalize();else if(e===Qr)i[5].setComponents(a,h,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function pv(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<h.length;d++){const v=h[f],S=h[d];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,h[f]=S)}h.length=f+1;for(let d=0,v=h.length;d<v;d++){const S=h[d];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class xs extends Pi{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],v=[],S=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let y=0;y<c;y++){const b=y*h-r;v.push(b,-A,0),S.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const y=A+c*p,b=A+c*(p+1),H=A+1+c*(p+1),P=A+1+c*p;d.push(y,b,P),d.push(b,H,P)}this.setIndex(d),this.setAttribute("position",new yi(v,3)),this.setAttribute("normal",new yi(S,3)),this.setAttribute("uv",new yi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.widthSegments,t.heightSegments)}}var mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_v=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Av=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xv="gl_FragColor = linearToOutputTexel( gl_FragColor );",qv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ix=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:mv,alphahash_pars_fragment:_v,alphamap_fragment:gv,alphamap_pars_fragment:vv,alphatest_fragment:xv,alphatest_pars_fragment:Mv,aomap_fragment:Sv,aomap_pars_fragment:Ev,batching_pars_vertex:yv,batching_vertex:Tv,begin_vertex:bv,beginnormal_vertex:Av,bsdfs:wv,iridescence_fragment:Rv,bumpmap_pars_fragment:Cv,clipping_planes_fragment:Pv,clipping_planes_pars_fragment:Lv,clipping_planes_pars_vertex:Dv,clipping_planes_vertex:Iv,color_fragment:Uv,color_pars_fragment:Nv,color_pars_vertex:Ov,color_vertex:Fv,common:Bv,cube_uv_reflection_fragment:zv,defaultnormal_vertex:Hv,displacementmap_pars_vertex:Vv,displacementmap_vertex:Gv,emissivemap_fragment:kv,emissivemap_pars_fragment:Wv,colorspace_fragment:Xv,colorspace_pars_fragment:qv,envmap_fragment:Yv,envmap_common_pars_fragment:jv,envmap_pars_fragment:Kv,envmap_pars_vertex:$v,envmap_physical_pars_fragment:a0,envmap_vertex:Zv,fog_vertex:Jv,fog_pars_vertex:Qv,fog_fragment:t0,fog_pars_fragment:e0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:o0,lights_toon_fragment:l0,lights_toon_pars_fragment:c0,lights_phong_fragment:u0,lights_phong_pars_fragment:h0,lights_physical_fragment:f0,lights_physical_pars_fragment:d0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:_0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:v0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:M0,map_fragment:S0,map_pars_fragment:E0,map_particle_fragment:y0,map_particle_pars_fragment:T0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:A0,morphinstance_vertex:w0,morphcolor_vertex:R0,morphnormal_vertex:C0,morphtarget_pars_vertex:P0,morphtarget_vertex:L0,normal_fragment_begin:D0,normal_fragment_maps:I0,normal_pars_fragment:U0,normal_pars_vertex:N0,normal_vertex:O0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:V0,opaque_fragment:G0,packing:k0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:q0,dithering_pars_fragment:Y0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:$0,shadowmap_pars_vertex:Z0,shadowmap_vertex:J0,shadowmask_pars_fragment:Q0,skinbase_vertex:tx,skinning_pars_vertex:ex,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:ux,uv_pars_vertex:hx,uv_vertex:fx,worldpos_vertex:dx,background_vert:px,background_frag:mx,backgroundCube_vert:_x,backgroundCube_frag:gx,cube_vert:vx,cube_frag:xx,depth_vert:Mx,depth_frag:Sx,distanceRGBA_vert:Ex,distanceRGBA_frag:yx,equirect_vert:Tx,equirect_frag:bx,linedashed_vert:Ax,linedashed_frag:wx,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Px,meshlambert_frag:Lx,meshmatcap_vert:Dx,meshmatcap_frag:Ix,meshnormal_vert:Ux,meshnormal_frag:Nx,meshphong_vert:Ox,meshphong_frag:Fx,meshphysical_vert:Bx,meshphysical_frag:zx,meshtoon_vert:Hx,meshtoon_frag:Vx,points_vert:Gx,points_frag:kx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:qx,sprite_frag:Yx},mt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},xn={basic:{uniforms:Le([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Le([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Le([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Le([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Le([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Le([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Le([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Le([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Le([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Le([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Le([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Le([mt.common,mt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Le([mt.lights,mt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};xn.physical={uniforms:Le([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Rr={r:0,b:0,g:0},pi=new dn,jx=new ce;function Kx(n,t,e,i,s,r,o){const a=new Yt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function v(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?e:t).get(y)),y}function S(A){let y=!1;const b=v(A);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);const H=n.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,y){const b=v(y);b&&(b.isCubeTexture||b.mapping===po)?(u===void 0&&(u=new ze(new vs(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:ps(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),pi.copy(y.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(pi)),u.material.toneMapped=Qt.getTransfer(b.colorSpace)!==oe,(h!==b||f!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ze(new xs(2,2),new ii({name:"BackgroundMaterial",uniforms:ps(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,y){A.getRGB(Rr,Hf(n)),i.buffers.color.setClear(Rr.r,Rr.g,Rr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(A,y=1){a.set(A),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:S,addToRenderList:m}}function $x(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,T,Z,Y,nt){let ot=!1;const q=h(Y,Z,T);r!==q&&(r=q,c(r.object)),ot=d(x,Y,Z,nt),ot&&v(x,Y,Z,nt),nt!==null&&t.update(nt,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,b(x,T,Z,Y),nt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,T,Z){const Y=Z.wireframe===!0;let nt=i[x.id];nt===void 0&&(nt={},i[x.id]=nt);let ot=nt[T.id];ot===void 0&&(ot={},nt[T.id]=ot);let q=ot[Y];return q===void 0&&(q=f(l()),ot[Y]=q),q}function f(x){const T=[],Z=[],Y=[];for(let nt=0;nt<e;nt++)T[nt]=0,Z[nt]=0,Y[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:Z,attributeDivisors:Y,object:x,attributes:{},index:null}}function d(x,T,Z,Y){const nt=r.attributes,ot=T.attributes;let q=0;const $=Z.getAttributes();for(const V in $)if($[V].location>=0){const gt=nt[V];let xt=ot[V];if(xt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),gt===void 0||gt.attribute!==xt||xt&&gt.data!==xt.data)return!0;q++}return r.attributesNum!==q||r.index!==Y}function v(x,T,Z,Y){const nt={},ot=T.attributes;let q=0;const $=Z.getAttributes();for(const V in $)if($[V].location>=0){let gt=ot[V];gt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor));const xt={};xt.attribute=gt,gt&&gt.data&&(xt.data=gt.data),nt[V]=xt,q++}r.attributes=nt,r.attributesNum=q,r.index=Y}function S(){const x=r.newAttributes;for(let T=0,Z=x.length;T<Z;T++)x[T]=0}function m(x){p(x,0)}function p(x,T){const Z=r.newAttributes,Y=r.enabledAttributes,nt=r.attributeDivisors;Z[x]=1,Y[x]===0&&(n.enableVertexAttribArray(x),Y[x]=1),nt[x]!==T&&(n.vertexAttribDivisor(x,T),nt[x]=T)}function A(){const x=r.newAttributes,T=r.enabledAttributes;for(let Z=0,Y=T.length;Z<Y;Z++)T[Z]!==x[Z]&&(n.disableVertexAttribArray(Z),T[Z]=0)}function y(x,T,Z,Y,nt,ot,q){q===!0?n.vertexAttribIPointer(x,T,Z,nt,ot):n.vertexAttribPointer(x,T,Z,Y,nt,ot)}function b(x,T,Z,Y){S();const nt=Y.attributes,ot=Z.getAttributes(),q=T.defaultAttributeValues;for(const $ in ot){const V=ot[$];if(V.location>=0){let _t=nt[$];if(_t===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),_t!==void 0){const gt=_t.normalized,xt=_t.itemSize,Ot=t.get(_t);if(Ot===void 0)continue;const Xt=Ot.buffer,Q=Ot.type,ct=Ot.bytesPerElement,vt=Q===n.INT||Q===n.UNSIGNED_INT||_t.gpuType===Gl;if(_t.isInterleavedBufferAttribute){const U=_t.data,it=U.stride,tt=_t.offset;if(U.isInstancedInterleavedBuffer){for(let ut=0;ut<V.locationSize;ut++)p(V.location+ut,U.meshPerAttribute);x.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ut=0;ut<V.locationSize;ut++)m(V.location+ut);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let ut=0;ut<V.locationSize;ut++)y(V.location+ut,xt/V.locationSize,Q,gt,it*ct,(tt+xt/V.locationSize*ut)*ct,vt)}else{if(_t.isInstancedBufferAttribute){for(let U=0;U<V.locationSize;U++)p(V.location+U,_t.meshPerAttribute);x.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let U=0;U<V.locationSize;U++)m(V.location+U);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let U=0;U<V.locationSize;U++)y(V.location+U,xt/V.locationSize,Q,gt,xt*ct,xt/V.locationSize*U*ct,vt)}}else if(q!==void 0){const gt=q[$];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(V.location,gt);break;case 3:n.vertexAttrib3fv(V.location,gt);break;case 4:n.vertexAttrib4fv(V.location,gt);break;default:n.vertexAttrib1fv(V.location,gt)}}}}A()}function H(){G();for(const x in i){const T=i[x];for(const Z in T){const Y=T[Z];for(const nt in Y)u(Y[nt].object),delete Y[nt];delete T[Z]}delete i[x]}}function P(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const Z in T){const Y=T[Z];for(const nt in Y)u(Y[nt].object),delete Y[nt];delete T[Z]}delete i[x.id]}function C(x){for(const T in i){const Z=i[T];if(Z[x.id]===void 0)continue;const Y=Z[x.id];for(const nt in Y)u(Y[nt].object),delete Y[nt];delete Z[x.id]}}function G(){ft(),o=!0,r!==s&&(r=s,c(r.object))}function ft(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:G,resetDefaultState:ft,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function Zx(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let v=0;v<h;v++)d+=u[v];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let v=0;for(let S=0;S<h;S++)v+=u[S];for(let S=0;S<f.length;S++)e.update(v,i,f[S])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==ln&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const G=C===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Fn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Un&&!G)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),H=v>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:H,maxSamples:P}}function Qx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new $n,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const v=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,y=A*4;let b=p.clippingState||null;l.value=b,b=u(v,f,y,d);for(let H=0;H!==y;++H)b[H]=e[H];p.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,v){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const p=d+S*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=d;y!==S;++y,b+=4)o.copy(h[y]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function tM(n){let t=new WeakMap;function e(o,a){return a===Ba?o.mapping=us:a===za&&(o.mapping=hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ba||a===za)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Wf extends Vf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,Au=[.125,.215,.35,.446,.526,.582],xi=20,ia=new Wf,wu=new Yt;let sa=null,ra=0,oa=0,aa=!1;const gi=(1+Math.sqrt(5))/2,qi=1/gi,Ru=[new k(-gi,qi,0),new k(gi,qi,0),new k(-qi,0,gi),new k(qi,0,gi),new k(0,gi,-qi),new k(0,gi,qi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Cu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,ra,oa),this._renderer.xr.enabled=aa,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ir,format:ln,colorSpace:oi,depthBuffer:!1},s=Pu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eM(r)),this._blurMaterial=nM(r,t,e)}return s}_compileMaterial(t){const e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,i,s){const a=new Ye(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wu),u.toneMapping=ei,u.autoClear=!1;const d=new Ff({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),v=new ze(new vs,d);let S=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,S=!0):(d.color.copy(wu),S=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Cr(s,A*y,p>2?y:0,y,y),u.setRenderTarget(s),S&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===us||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Cr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ia)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ru[(s-r-1)%Ru.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ze(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xi-1),S=r/v,m=isFinite(r)?1+Math.floor(u*S):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let A=0;for(let C=0;C<xi;++C){const G=C/S,ft=Math.exp(-G*G/2);p.push(ft),C===0?A+=ft:C<m&&(A+=2*ft)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;const b=this._sizeLods[s],H=3*b*(s>y-Zi?s-y+Zi:0),P=4*(this._cubeSize-b);Cr(e,H,P,3*b,2*b),l.setRenderTarget(e),l.render(h,ia)}}function eM(n){const t=[],e=[],i=[];let s=n;const r=n-Zi+1+Au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Zi?l=Au[o-n+Zi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,v=6,S=3,m=2,p=1,A=new Float32Array(S*v*d),y=new Float32Array(m*v*d),b=new Float32Array(p*v*d);for(let P=0;P<d;P++){const C=P%3*2/3-1,G=P>2?0:-1,ft=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];A.set(ft,S*v*P),y.set(f,m*v*P);const x=[P,P,P,P,P,P];b.set(x,p*v*P)}const H=new Pi;H.setAttribute("position",new hn(A,S)),H.setAttribute("uv",new hn(y,m)),H.setAttribute("faceIndex",new hn(b,p)),t.push(H),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Pu(n,t,e){const i=new Ai(n,t,e);return i.texture.mapping=po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function nM(n,t,e){const i=new Float32Array(xi),s=new k(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Lu(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Du(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ql(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ba||l===za,u=l===us||l===hs;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Cu(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Cu(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function sM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rM(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const S=f.morphAttributes[v];for(let m=0,p=S.length;m<p;m++)t.remove(S[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const v in d){const S=d[v];for(let m=0,p=S.length;m<p;m++)t.update(S[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,v=h.attributes.position;let S=0;if(d!==null){const A=d.array;S=d.version;for(let y=0,b=A.length;y<b;y+=3){const H=A[y+0],P=A[y+1],C=A[y+2];f.push(H,P,P,C,C,H)}}else if(v!==void 0){const A=v.array;S=v.version;for(let y=0,b=A.length/3-1;y<b;y+=3){const H=y+0,P=y+1,C=y+2;f.push(H,P,P,C,C,H)}}else return;const m=new(Lf(f)?zf:Bf)(f,1);m.version=S;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function oM(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,v){v!==0&&(n.drawElementsInstanced(i,d,r,f*o,v),e.update(d,i,v))}function u(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];e.update(m,i,1)}function h(f,d,v,S){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],S[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,S,0,v);let p=0;for(let A=0;A<v;A++)p+=d[A];for(let A=0;A<S.length;A++)e.update(p,i,S[A])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function aM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lM(n,t,e){const i=new WeakMap,s=new le;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){G.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;v===!0&&(b=1),S===!0&&(b=2),m===!0&&(b=3);let H=a.attributes.position.count*b,P=1;H>t.maxTextureSize&&(P=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const C=new Float32Array(H*P*4*h),G=new If(C,H,P,h);G.type=Un,G.needsUpdate=!0;const ft=b*4;for(let T=0;T<h;T++){const Z=p[T],Y=A[T],nt=y[T],ot=H*P*4*T;for(let q=0;q<Z.count;q++){const $=q*ft;v===!0&&(s.fromBufferAttribute(Z,q),C[ot+$+0]=s.x,C[ot+$+1]=s.y,C[ot+$+2]=s.z,C[ot+$+3]=0),S===!0&&(s.fromBufferAttribute(Y,q),C[ot+$+4]=s.x,C[ot+$+5]=s.y,C[ot+$+6]=s.z,C[ot+$+7]=0),m===!0&&(s.fromBufferAttribute(nt,q),C[ot+$+8]=s.x,C[ot+$+9]=s.y,C[ot+$+10]=s.z,C[ot+$+11]=nt.itemSize===4?s.w:1)}}f={count:h,texture:G,size:new Bt(H,P)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function cM(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Xf extends Ne{constructor(t,e,i,s,r,o,a,l,c,u=ss){if(u!==ss&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ss&&(i=bi),i===void 0&&u===ds&&(i=fs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qf=new Ne,Iu=new Xf(1,1),Yf=new If,jf=new Kg,Kf=new Gf,Uu=[],Nu=[],Ou=new Float32Array(16),Fu=new Float32Array(9),Bu=new Float32Array(4);function Ms(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function _e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _o(n,t){let e=Nu[t];e===void 0&&(e=new Int32Array(t),Nu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function uM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function hM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),_e(e,t)}}function fM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),_e(e,t)}}function dM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),_e(e,t)}}function pM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(me(e,i))return;Bu.set(i),n.uniformMatrix2fv(this.addr,!1,Bu),_e(e,i)}}function mM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(me(e,i))return;Fu.set(i),n.uniformMatrix3fv(this.addr,!1,Fu),_e(e,i)}}function _M(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(me(e,i))return;Ou.set(i),n.uniformMatrix4fv(this.addr,!1,Ou),_e(e,i)}}function gM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function vM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),_e(e,t)}}function xM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),_e(e,t)}}function MM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),_e(e,t)}}function SM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function EM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),_e(e,t)}}function yM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),_e(e,t)}}function TM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),_e(e,t)}}function bM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Iu.compareFunction=Pf,r=Iu):r=qf,e.setTexture2D(t||r,s)}function AM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jf,s)}function wM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Kf,s)}function RM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yf,s)}function CM(n){switch(n){case 5126:return uM;case 35664:return hM;case 35665:return fM;case 35666:return dM;case 35674:return pM;case 35675:return mM;case 35676:return _M;case 5124:case 35670:return gM;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return MM;case 5125:return SM;case 36294:return EM;case 36295:return yM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return RM}}function PM(n,t){n.uniform1fv(this.addr,t)}function LM(n,t){const e=Ms(t,this.size,2);n.uniform2fv(this.addr,e)}function DM(n,t){const e=Ms(t,this.size,3);n.uniform3fv(this.addr,e)}function IM(n,t){const e=Ms(t,this.size,4);n.uniform4fv(this.addr,e)}function UM(n,t){const e=Ms(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function NM(n,t){const e=Ms(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function OM(n,t){const e=Ms(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function FM(n,t){n.uniform1iv(this.addr,t)}function BM(n,t){n.uniform2iv(this.addr,t)}function zM(n,t){n.uniform3iv(this.addr,t)}function HM(n,t){n.uniform4iv(this.addr,t)}function VM(n,t){n.uniform1uiv(this.addr,t)}function GM(n,t){n.uniform2uiv(this.addr,t)}function kM(n,t){n.uniform3uiv(this.addr,t)}function WM(n,t){n.uniform4uiv(this.addr,t)}function XM(n,t,e){const i=this.cache,s=t.length,r=_o(e,s);me(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qf,r[o])}function qM(n,t,e){const i=this.cache,s=t.length,r=_o(e,s);me(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jf,r[o])}function YM(n,t,e){const i=this.cache,s=t.length,r=_o(e,s);me(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kf,r[o])}function jM(n,t,e){const i=this.cache,s=t.length,r=_o(e,s);me(i,r)||(n.uniform1iv(this.addr,r),_e(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yf,r[o])}function KM(n){switch(n){case 5126:return PM;case 35664:return LM;case 35665:return DM;case 35666:return IM;case 35674:return UM;case 35675:return NM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return BM;case 35668:case 35672:return zM;case 35669:case 35673:return HM;case 5125:return VM;case 36294:return GM;case 36295:return kM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return jM}}class $M{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=CM(e.type)}}class ZM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=KM(e.type)}}class JM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function zu(n,t){n.seq.push(t),n.map[t.id]=t}function QM(n,t,e){const i=n.name,s=i.length;for(la.lastIndex=0;;){const r=la.exec(i),o=la.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zu(e,c===void 0?new $M(a,n,t):new ZM(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new JM(a),zu(e,h)),e=h}}}class kr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);QM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Hu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const tS=37297;let eS=0;function nS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function iS(n){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(n);let i;switch(t===e?i="":t===Jr&&e===Zr?i="LinearDisplayP3ToLinearSRGB":t===Zr&&e===Jr&&(i="LinearSRGBToLinearDisplayP3"),n){case oi:case mo:return[i,"LinearTransferOETF"];case _n:case Kl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Vu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+nS(n.getShaderSource(t),o)}else return s}function sS(n,t){const e=iS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rS(n,t){let e;switch(t){case rg:e="Linear";break;case og:e="Reinhard";break;case ag:e="Cineon";break;case lg:e="ACESFilmic";break;case ug:e="AgX";break;case hg:e="Neutral";break;case cg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pr=new k;function oS(){Qt.getLuminanceCoefficients(Pr);const n=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function lS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function cS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ps(n){return n!==""}function Gu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ku(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uS=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(n){return n.replace(uS,fS)}const hS=new Map;function fS(n,t){let e=Vt[t];if(e===void 0){const i=hS.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}const dS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(n){return n.replace(dS,pS)}function pS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===B_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function _S(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case hs:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function vS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vl:t="ENVMAP_BLENDING_MULTIPLY";break;case ig:t="ENVMAP_BLENDING_MIX";break;case sg:t="ENVMAP_BLENDING_ADD";break}return t}function xS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function MS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=mS(e),c=_S(e),u=gS(e),h=vS(e),f=xS(e),d=aS(e),v=lS(r),S=s.createProgram();let m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(m=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ei?rS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,sS("linearToOutputTexel",e.outputColorSpace),oS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),o=pl(o),o=Gu(o,e),o=ku(o,e),a=pl(a),a=Gu(a,e),a=ku(a,e),o=Wu(o),a=Wu(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=A+m+o,b=A+p+a,H=Hu(s,s.VERTEX_SHADER,y),P=Hu(s,s.FRAGMENT_SHADER,b);s.attachShader(S,H),s.attachShader(S,P),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(T){if(n.debug.checkShaderErrors){const Z=s.getProgramInfoLog(S).trim(),Y=s.getShaderInfoLog(H).trim(),nt=s.getShaderInfoLog(P).trim();let ot=!0,q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,H,P);else{const $=Vu(s,H,"vertex"),V=Vu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+Z+`
`+$+`
`+V)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Y===""||nt==="")&&(q=!1);q&&(T.diagnostics={runnable:ot,programLog:Z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(H),s.deleteShader(P),G=new kr(s,S),ft=cS(s,S)}let G;this.getUniforms=function(){return G===void 0&&C(this),G};let ft;this.getAttributes=function(){return ft===void 0&&C(this),ft};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(S,tS)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eS++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=H,this.fragmentShader=P,this}let SS=0;class ES{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new yS(t),e.set(t,i)),i}}class yS{constructor(t){this.id=SS++,this.code=t,this.usedTimes=0}}function TS(n,t,e,i,s,r,o){const a=new Nf,l=new ES,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,T,Z,Y,nt){const ot=Y.fog,q=nt.geometry,$=x.isMeshStandardMaterial?Y.environment:null,V=(x.isMeshStandardMaterial?e:t).get(x.envMap||$),_t=V&&V.mapping===po?V.image.height:null,gt=S[x.type];x.precision!==null&&(v=s.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const xt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ot=xt!==void 0?xt.length:0;let Xt=0;q.morphAttributes.position!==void 0&&(Xt=1),q.morphAttributes.normal!==void 0&&(Xt=2),q.morphAttributes.color!==void 0&&(Xt=3);let Q,ct,vt,U;if(gt){const Fe=xn[gt];Q=Fe.vertexShader,ct=Fe.fragmentShader}else Q=x.vertexShader,ct=x.fragmentShader,l.update(x),vt=l.getVertexShaderID(x),U=l.getFragmentShaderID(x);const it=n.getRenderTarget(),tt=nt.isInstancedMesh===!0,ut=nt.isBatchedMesh===!0,Ct=!!x.map,Pt=!!x.matcap,_=!!V,w=!!x.aoMap,D=!!x.lightMap,j=!!x.bumpMap,B=!!x.normalMap,J=!!x.displacementMap,et=!!x.emissiveMap,M=!!x.metalnessMap,g=!!x.roughnessMap,R=x.anisotropy>0,z=x.clearcoat>0,F=x.dispersion>0,O=x.iridescence>0,at=x.sheen>0,st=x.transmission>0,ht=R&&!!x.anisotropyMap,bt=z&&!!x.clearcoatMap,lt=z&&!!x.clearcoatNormalMap,pt=z&&!!x.clearcoatRoughnessMap,Lt=O&&!!x.iridescenceMap,wt=O&&!!x.iridescenceThicknessMap,Mt=at&&!!x.sheenColorMap,kt=at&&!!x.sheenRoughnessMap,Dt=!!x.specularMap,Wt=!!x.specularColorMap,L=!!x.specularIntensityMap,yt=st&&!!x.transmissionMap,K=st&&!!x.thicknessMap,rt=!!x.gradientMap,St=!!x.alphaMap,Tt=x.alphaTest>0,qt=!!x.alphaHash,fe=!!x.extensions;let Oe=ei;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const jt={shaderID:gt,shaderType:x.type,shaderName:x.name,vertexShader:Q,fragmentShader:ct,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:U,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:ut,batchingColor:ut&&nt._colorsTexture!==null,instancing:tt,instancingColor:tt&&nt.instanceColor!==null,instancingMorph:tt&&nt.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:oi,alphaToCoverage:!!x.alphaToCoverage,map:Ct,matcap:Pt,envMap:_,envMapMode:_&&V.mapping,envMapCubeUVHeight:_t,aoMap:w,lightMap:D,bumpMap:j,normalMap:B,displacementMap:d&&J,emissiveMap:et,normalMapObjectSpace:B&&x.normalMapType===mg,normalMapTangentSpace:B&&x.normalMapType===jl,metalnessMap:M,roughnessMap:g,anisotropy:R,anisotropyMap:ht,clearcoat:z,clearcoatMap:bt,clearcoatNormalMap:lt,clearcoatRoughnessMap:pt,dispersion:F,iridescence:O,iridescenceMap:Lt,iridescenceThicknessMap:wt,sheen:at,sheenColorMap:Mt,sheenRoughnessMap:kt,specularMap:Dt,specularColorMap:Wt,specularIntensityMap:L,transmission:st,transmissionMap:yt,thicknessMap:K,gradientMap:rt,opaque:x.transparent===!1&&x.blending===is&&x.alphaToCoverage===!1,alphaMap:St,alphaTest:Tt,alphaHash:qt,combine:x.combine,mapUv:Ct&&m(x.map.channel),aoMapUv:w&&m(x.aoMap.channel),lightMapUv:D&&m(x.lightMap.channel),bumpMapUv:j&&m(x.bumpMap.channel),normalMapUv:B&&m(x.normalMap.channel),displacementMapUv:J&&m(x.displacementMap.channel),emissiveMapUv:et&&m(x.emissiveMap.channel),metalnessMapUv:M&&m(x.metalnessMap.channel),roughnessMapUv:g&&m(x.roughnessMap.channel),anisotropyMapUv:ht&&m(x.anisotropyMap.channel),clearcoatMapUv:bt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:lt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:kt&&m(x.sheenRoughnessMap.channel),specularMapUv:Dt&&m(x.specularMap.channel),specularColorMapUv:Wt&&m(x.specularColorMap.channel),specularIntensityMapUv:L&&m(x.specularIntensityMap.channel),transmissionMapUv:yt&&m(x.transmissionMap.channel),thicknessMapUv:K&&m(x.thicknessMap.channel),alphaMapUv:St&&m(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(B||R),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!q.attributes.uv&&(Ct||St),fog:!!ot,useFog:x.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:nt.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Xt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===He,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function A(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Z in x.defines)T.push(Z),T.push(x.defines[Z]);return x.isRawShaderMaterial===!1&&(y(T,x),b(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function H(x){const T=S[x.type];let Z;if(T){const Y=xn[T];Z=av.clone(Y.uniforms)}else Z=x.uniforms;return Z}function P(x,T){let Z;for(let Y=0,nt=u.length;Y<nt;Y++){const ot=u[Y];if(ot.cacheKey===T){Z=ot,++Z.usedTimes;break}}return Z===void 0&&(Z=new MS(n,T,x,r),u.push(Z)),Z}function C(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),x.destroy()}}function G(x){l.remove(x)}function ft(){l.dispose()}return{getParameters:p,getProgramCacheKey:A,getUniforms:H,acquireProgram:P,releaseProgram:C,releaseShaderCache:G,programs:u,dispose:ft}}function bS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function AS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Yu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,v,S,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:v,renderOrder:h.renderOrder,z:S,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=S,p.group=m),t++,p}function a(h,f,d,v,S,m){const p=o(h,f,d,v,S,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,v,S,m){const p=o(h,f,d,v,S,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||AS),i.length>1&&i.sort(f||qu),s.length>1&&s.sort(f||qu)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function wS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Yu,n.set(i,[o])):s>=r.length?(o=new Yu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function RS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Yt};break;case"SpotLight":e={position:new k,direction:new k,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function CS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let PS=0;function LS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function DS(n){const t=new RS,e=CS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new ce,o=new ce;function a(c){let u=0,h=0,f=0;for(let ft=0;ft<9;ft++)i.probe[ft].set(0,0,0);let d=0,v=0,S=0,m=0,p=0,A=0,y=0,b=0,H=0,P=0,C=0;c.sort(LS);for(let ft=0,x=c.length;ft<x;ft++){const T=c[ft],Z=T.color,Y=T.intensity,nt=T.distance,ot=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=Z.r*Y,h+=Z.g*Y,f+=Z.b*Y;else if(T.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(T.sh.coefficients[q],Y);C++}else if(T.isDirectionalLight){const q=t.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const $=T.shadow,V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=ot,i.directionalShadowMatrix[d]=T.shadow.matrix,A++}i.directional[d]=q,d++}else if(T.isSpotLight){const q=t.get(T);q.position.setFromMatrixPosition(T.matrixWorld),q.color.copy(Z).multiplyScalar(Y),q.distance=nt,q.coneCos=Math.cos(T.angle),q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),q.decay=T.decay,i.spot[S]=q;const $=T.shadow;if(T.map&&(i.spotLightMap[H]=T.map,H++,$.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[S]=$.matrix,T.castShadow){const V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.spotShadow[S]=V,i.spotShadowMap[S]=ot,b++}S++}else if(T.isRectAreaLight){const q=t.get(T);q.color.copy(Z).multiplyScalar(Y),q.halfWidth.set(T.width*.5,0,0),q.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=q,m++}else if(T.isPointLight){const q=t.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity),q.distance=T.distance,q.decay=T.decay,T.castShadow){const $=T.shadow,V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=ot,i.pointShadowMatrix[v]=T.shadow.matrix,y++}i.point[v]=q,v++}else if(T.isHemisphereLight){const q=t.get(T);q.skyColor.copy(T.color).multiplyScalar(Y),q.groundColor.copy(T.groundColor).multiplyScalar(Y),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const G=i.hash;(G.directionalLength!==d||G.pointLength!==v||G.spotLength!==S||G.rectAreaLength!==m||G.hemiLength!==p||G.numDirectionalShadows!==A||G.numPointShadows!==y||G.numSpotShadows!==b||G.numSpotMaps!==H||G.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+H-P,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,G.directionalLength=d,G.pointLength=v,G.spotLength=S,G.rectAreaLength=m,G.hemiLength=p,G.numDirectionalShadows=A,G.numPointShadows=y,G.numSpotShadows=b,G.numSpotMaps=H,G.numLightProbes=C,i.version=PS++)}function l(c,u){let h=0,f=0,d=0,v=0,S=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const y=c[p];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(y.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=i.hemi[S];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function ju(n){const t=new DS(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function IS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ju(n),t.set(s,[a])):r>=o.length?(a=new ju(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class US extends gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NS extends gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const OS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BS(n,t,e){let i=new Jl;const s=new Bt,r=new Bt,o=new le,a=new US({depthPacking:pg}),l=new NS,c={},u=e.maxTextureSize,h={[ni]:He,[He]:ni,[Mn]:Mn},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:OS,fragmentShader:FS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Pi;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ze(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vf;let p=this.type;this.render=function(P,C,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const ft=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(ti),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const Y=p!==Ln&&this.type===Ln,nt=p===Ln&&this.type!==Ln;for(let ot=0,q=P.length;ot<q;ot++){const $=P[ot],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const _t=V.getFrameExtents();if(s.multiply(_t),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_t.x),s.x=r.x*_t.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_t.y),s.y=r.y*_t.y,V.mapSize.y=r.y)),V.map===null||Y===!0||nt===!0){const xt=this.type!==Ln?{minFilter:Ze,magFilter:Ze}:{};V.map!==null&&V.map.dispose(),V.map=new Ai(s.x,s.y,xt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const gt=V.getViewportCount();for(let xt=0;xt<gt;xt++){const Ot=V.getViewport(xt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),Z.viewport(o),V.updateMatrices($,xt),i=V.getFrustum(),b(C,G,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Ln&&A(V,G),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ft,x,T)};function A(P,C){const G=t.update(S);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ai(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,G,f,S,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,G,d,S,null)}function y(P,C,G,ft){let x=null;const T=G.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)x=T;else if(x=G.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Z=x.uuid,Y=C.uuid;let nt=c[Z];nt===void 0&&(nt={},c[Z]=nt);let ot=nt[Y];ot===void 0&&(ot=x.clone(),nt[Y]=ot,C.addEventListener("dispose",H)),x=ot}if(x.visible=C.visible,x.wireframe=C.wireframe,ft===Ln?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:h[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,G.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Z=n.properties.get(x);Z.light=G}return x}function b(P,C,G,ft,x){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===Ln)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,P.matrixWorld);const Y=t.update(P),nt=P.material;if(Array.isArray(nt)){const ot=Y.groups;for(let q=0,$=ot.length;q<$;q++){const V=ot[q],_t=nt[V.materialIndex];if(_t&&_t.visible){const gt=y(P,_t,ft,x);P.onBeforeShadow(n,P,C,G,Y,gt,V),n.renderBufferDirect(G,null,Y,gt,P,V),P.onAfterShadow(n,P,C,G,Y,gt,V)}}}else if(nt.visible){const ot=y(P,nt,ft,x);P.onBeforeShadow(n,P,C,G,Y,ot,null),n.renderBufferDirect(G,null,Y,ot,P,null),P.onAfterShadow(n,P,C,G,Y,ot,null)}}const Z=P.children;for(let Y=0,nt=Z.length;Y<nt;Y++)b(Z[Y],C,G,ft,x)}function H(P){P.target.removeEventListener("dispose",H);for(const G in c){const ft=c[G],x=P.target.uuid;x in ft&&(ft[x].dispose(),delete ft[x])}}}const zS={[La]:Da,[Ia]:Oa,[Ua]:Fa,[cs]:Na,[Da]:La,[Oa]:Ia,[Fa]:Ua,[Na]:cs};function HS(n){function t(){let L=!1;const yt=new le;let K=null;const rt=new le(0,0,0,0);return{setMask:function(St){K!==St&&!L&&(n.colorMask(St,St,St,St),K=St)},setLocked:function(St){L=St},setClear:function(St,Tt,qt,fe,Oe){Oe===!0&&(St*=fe,Tt*=fe,qt*=fe),yt.set(St,Tt,qt,fe),rt.equals(yt)===!1&&(n.clearColor(St,Tt,qt,fe),rt.copy(yt))},reset:function(){L=!1,K=null,rt.set(-1,0,0,0)}}}function e(){let L=!1,yt=!1,K=null,rt=null,St=null;return{setReversed:function(Tt){yt=Tt},setTest:function(Tt){Tt?vt(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(Tt){K!==Tt&&!L&&(n.depthMask(Tt),K=Tt)},setFunc:function(Tt){if(yt&&(Tt=zS[Tt]),rt!==Tt){switch(Tt){case La:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case Ia:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case Ua:n.depthFunc(n.EQUAL);break;case Na:n.depthFunc(n.GEQUAL);break;case Oa:n.depthFunc(n.GREATER);break;case Fa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=Tt}},setLocked:function(Tt){L=Tt},setClear:function(Tt){St!==Tt&&(n.clearDepth(Tt),St=Tt)},reset:function(){L=!1,K=null,rt=null,St=null}}}function i(){let L=!1,yt=null,K=null,rt=null,St=null,Tt=null,qt=null,fe=null,Oe=null;return{setTest:function(jt){L||(jt?vt(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(jt){yt!==jt&&!L&&(n.stencilMask(jt),yt=jt)},setFunc:function(jt,Fe,yn){(K!==jt||rt!==Fe||St!==yn)&&(n.stencilFunc(jt,Fe,yn),K=jt,rt=Fe,St=yn)},setOp:function(jt,Fe,yn){(Tt!==jt||qt!==Fe||fe!==yn)&&(n.stencilOp(jt,Fe,yn),Tt=jt,qt=Fe,fe=yn)},setLocked:function(jt){L=jt},setClear:function(jt){Oe!==jt&&(n.clearStencil(jt),Oe=jt)},reset:function(){L=!1,yt=null,K=null,rt=null,St=null,Tt=null,qt=null,fe=null,Oe=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,v=!1,S=null,m=null,p=null,A=null,y=null,b=null,H=null,P=new Yt(0,0,0),C=0,G=!1,ft=null,x=null,T=null,Z=null,Y=null;const nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,q=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec($)[1]),ot=q>=1):$.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ot=q>=2);let V=null,_t={};const gt=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),Ot=new le().fromArray(gt),Xt=new le().fromArray(xt);function Q(L,yt,K,rt){const St=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(L,Tt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<K;qt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(yt+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return Tt}const ct={};ct[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(n.DEPTH_TEST),r.setFunc(cs),D(!1),j(eu),vt(n.CULL_FACE),_(ti);function vt(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function U(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function it(L,yt){return u[L]!==yt?(n.bindFramebuffer(L,yt),u[L]=yt,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=yt),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function tt(L,yt){let K=f,rt=!1;if(L){K=h.get(yt),K===void 0&&(K=[],h.set(yt,K));const St=L.textures;if(K.length!==St.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,qt=St.length;Tt<qt;Tt++)K[Tt]=n.COLOR_ATTACHMENT0+Tt;K.length=St.length,rt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,rt=!0);rt&&n.drawBuffers(K)}function ut(L){return d!==L?(n.useProgram(L),d=L,!0):!1}const Ct={[vi]:n.FUNC_ADD,[H_]:n.FUNC_SUBTRACT,[V_]:n.FUNC_REVERSE_SUBTRACT};Ct[G_]=n.MIN,Ct[k_]=n.MAX;const Pt={[W_]:n.ZERO,[X_]:n.ONE,[q_]:n.SRC_COLOR,[Ca]:n.SRC_ALPHA,[J_]:n.SRC_ALPHA_SATURATE,[$_]:n.DST_COLOR,[j_]:n.DST_ALPHA,[Y_]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[Z_]:n.ONE_MINUS_DST_COLOR,[K_]:n.ONE_MINUS_DST_ALPHA,[Q_]:n.CONSTANT_COLOR,[tg]:n.ONE_MINUS_CONSTANT_COLOR,[eg]:n.CONSTANT_ALPHA,[ng]:n.ONE_MINUS_CONSTANT_ALPHA};function _(L,yt,K,rt,St,Tt,qt,fe,Oe,jt){if(L===ti){v===!0&&(U(n.BLEND),v=!1);return}if(v===!1&&(vt(n.BLEND),v=!0),L!==z_){if(L!==S||jt!==G){if((m!==vi||y!==vi)&&(n.blendEquation(n.FUNC_ADD),m=vi,y=vi),jt)switch(L){case is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFunc(n.ONE,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,A=null,b=null,H=null,P.set(0,0,0),C=0,S=L,G=jt}return}St=St||yt,Tt=Tt||K,qt=qt||rt,(yt!==m||St!==y)&&(n.blendEquationSeparate(Ct[yt],Ct[St]),m=yt,y=St),(K!==p||rt!==A||Tt!==b||qt!==H)&&(n.blendFuncSeparate(Pt[K],Pt[rt],Pt[Tt],Pt[qt]),p=K,A=rt,b=Tt,H=qt),(fe.equals(P)===!1||Oe!==C)&&(n.blendColor(fe.r,fe.g,fe.b,Oe),P.copy(fe),C=Oe),S=L,G=!1}function w(L,yt){L.side===Mn?U(n.CULL_FACE):vt(n.CULL_FACE);let K=L.side===He;yt&&(K=!K),D(K),L.blending===is&&L.transparent===!1?_(ti):_(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const rt=L.stencilWrite;o.setTest(rt),rt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),J(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function D(L){ft!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),ft=L)}function j(L){L!==O_?(vt(n.CULL_FACE),L!==x&&(L===eu?n.cullFace(n.BACK):L===F_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),x=L}function B(L){L!==T&&(ot&&n.lineWidth(L),T=L)}function J(L,yt,K){L?(vt(n.POLYGON_OFFSET_FILL),(Z!==yt||Y!==K)&&(n.polygonOffset(yt,K),Z=yt,Y=K)):U(n.POLYGON_OFFSET_FILL)}function et(L){L?vt(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function M(L){L===void 0&&(L=n.TEXTURE0+nt-1),V!==L&&(n.activeTexture(L),V=L)}function g(L,yt,K){K===void 0&&(V===null?K=n.TEXTURE0+nt-1:K=V);let rt=_t[K];rt===void 0&&(rt={type:void 0,texture:void 0},_t[K]=rt),(rt.type!==L||rt.texture!==yt)&&(V!==K&&(n.activeTexture(K),V=K),n.bindTexture(L,yt||ct[L]),rt.type=L,rt.texture=yt)}function R(){const L=_t[V];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(L){Ot.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ot.copy(L))}function Mt(L){Xt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Xt.copy(L))}function kt(L,yt){let K=l.get(yt);K===void 0&&(K=new WeakMap,l.set(yt,K));let rt=K.get(L);rt===void 0&&(rt=n.getUniformBlockIndex(yt,L.name),K.set(L,rt))}function Dt(L,yt){const rt=l.get(yt).get(L);a.get(yt)!==rt&&(n.uniformBlockBinding(yt,rt,L.__bindingPointIndex),a.set(yt,rt))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,_t={},u={},h=new WeakMap,f=[],d=null,v=!1,S=null,m=null,p=null,A=null,y=null,b=null,H=null,P=new Yt(0,0,0),C=0,G=!1,ft=null,x=null,T=null,Z=null,Y=null,Ot.set(0,0,n.canvas.width,n.canvas.height),Xt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:vt,disable:U,bindFramebuffer:it,drawBuffers:tt,useProgram:ut,setBlending:_,setMaterial:w,setFlipSided:D,setCullFace:j,setLineWidth:B,setPolygonOffset:J,setScissorTest:et,activeTexture:M,bindTexture:g,unbindTexture:R,compressedTexImage2D:z,compressedTexImage3D:F,texImage2D:pt,texImage3D:Lt,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:bt,texStorage3D:lt,texSubImage2D:O,texSubImage3D:at,compressedTexSubImage2D:st,compressedTexSubImage3D:ht,scissor:wt,viewport:Mt,reset:Wt}}function Ku(n,t,e,i){const s=VS(i);switch(e){case yf:return n*t;case bf:return n*t;case Af:return n*t*2;case wf:return n*t/s.components*s.byteLength;case Xl:return n*t/s.components*s.byteLength;case Rf:return n*t*2/s.components*s.byteLength;case ql:return n*t*2/s.components*s.byteLength;case Tf:return n*t*3/s.components*s.byteLength;case ln:return n*t*4/s.components*s.byteLength;case Yl:return n*t*4/s.components*s.byteLength;case Fr:case Br:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zr:case Hr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ka:case Xa:return Math.max(n,16)*Math.max(t,8)/4;case Ga:case Wa:return Math.max(n,8)*Math.max(t,8)/2;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Vr:case cl:case ul:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Cf:case hl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case fl:case dl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function VS(n){switch(n){case Fn:case Mf:return{byteLength:1,components:1};case Zs:case Sf:case ir:return{byteLength:2,components:1};case kl:case Wl:return{byteLength:2,components:4};case bi:case Gl:case Un:return{byteLength:4,components:1};case Ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function GS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,g){return d?new OffscreenCanvas(M,g):Qs("canvas")}function S(M,g,R){let z=1;const F=et(M);if((F.width>R||F.height>R)&&(z=R/Math.max(F.width,F.height)),z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const O=Math.floor(z*F.width),at=Math.floor(z*F.height);h===void 0&&(h=v(O,at));const st=g?v(O,at):h;return st.width=O,st.height=at,st.getContext("2d").drawImage(M,0,0,O,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+O+"x"+at+")."),st}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==Ze&&M.minFilter!==rn}function p(M){n.generateMipmap(M)}function A(M,g,R,z,F=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let O=g;if(g===n.RED&&(R===n.FLOAT&&(O=n.R32F),R===n.HALF_FLOAT&&(O=n.R16F),R===n.UNSIGNED_BYTE&&(O=n.R8)),g===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(O=n.R8UI),R===n.UNSIGNED_SHORT&&(O=n.R16UI),R===n.UNSIGNED_INT&&(O=n.R32UI),R===n.BYTE&&(O=n.R8I),R===n.SHORT&&(O=n.R16I),R===n.INT&&(O=n.R32I)),g===n.RG&&(R===n.FLOAT&&(O=n.RG32F),R===n.HALF_FLOAT&&(O=n.RG16F),R===n.UNSIGNED_BYTE&&(O=n.RG8)),g===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(O=n.RG8UI),R===n.UNSIGNED_SHORT&&(O=n.RG16UI),R===n.UNSIGNED_INT&&(O=n.RG32UI),R===n.BYTE&&(O=n.RG8I),R===n.SHORT&&(O=n.RG16I),R===n.INT&&(O=n.RG32I)),g===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(O=n.RGB8UI),R===n.UNSIGNED_SHORT&&(O=n.RGB16UI),R===n.UNSIGNED_INT&&(O=n.RGB32UI),R===n.BYTE&&(O=n.RGB8I),R===n.SHORT&&(O=n.RGB16I),R===n.INT&&(O=n.RGB32I)),g===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(O=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(O=n.RGBA16UI),R===n.UNSIGNED_INT&&(O=n.RGBA32UI),R===n.BYTE&&(O=n.RGBA8I),R===n.SHORT&&(O=n.RGBA16I),R===n.INT&&(O=n.RGBA32I)),g===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(O=n.RGB9_E5),g===n.RGBA){const at=F?$r:Qt.getTransfer(z);R===n.FLOAT&&(O=n.RGBA32F),R===n.HALF_FLOAT&&(O=n.RGBA16F),R===n.UNSIGNED_BYTE&&(O=at===oe?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(O=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(O=n.RGB5_A1)}return(O===n.R16F||O===n.R32F||O===n.RG16F||O===n.RG32F||O===n.RGBA16F||O===n.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function y(M,g){let R;return M?g===null||g===bi||g===fs?R=n.DEPTH24_STENCIL8:g===Un?R=n.DEPTH32F_STENCIL8:g===Zs&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===bi||g===fs?R=n.DEPTH_COMPONENT24:g===Un?R=n.DEPTH_COMPONENT32F:g===Zs&&(R=n.DEPTH_COMPONENT16),R}function b(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ze&&M.minFilter!==rn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function H(M){const g=M.target;g.removeEventListener("dispose",H),C(g),g.isVideoTexture&&u.delete(g)}function P(M){const g=M.target;g.removeEventListener("dispose",P),ft(g)}function C(M){const g=i.get(M);if(g.__webglInit===void 0)return;const R=M.source,z=f.get(R);if(z){const F=z[g.__cacheKey];F.usedTimes--,F.usedTimes===0&&G(M),Object.keys(z).length===0&&f.delete(R)}i.remove(M)}function G(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const R=M.source,z=f.get(R);delete z[g.__cacheKey],o.memory.textures--}function ft(M){const g=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let F=0;F<g.__webglFramebuffer[z].length;F++)n.deleteFramebuffer(g.__webglFramebuffer[z][F]);else n.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)n.deleteFramebuffer(g.__webglFramebuffer[z]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const R=M.textures;for(let z=0,F=R.length;z<F;z++){const O=i.get(R[z]);O.__webglTexture&&(n.deleteTexture(O.__webglTexture),o.memory.textures--),i.remove(R[z])}i.remove(M)}let x=0;function T(){x=0}function Z(){const M=x;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),x+=1,M}function Y(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function nt(M,g){const R=i.get(M);if(M.isVideoTexture&&B(M),M.isRenderTargetTexture===!1&&M.version>0&&R.__version!==M.version){const z=M.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(R,M,g);return}}e.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+g)}function ot(M,g){const R=i.get(M);if(M.version>0&&R.__version!==M.version){Xt(R,M,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+g)}function q(M,g){const R=i.get(M);if(M.version>0&&R.__version!==M.version){Xt(R,M,g);return}e.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+g)}function $(M,g){const R=i.get(M);if(M.version>0&&R.__version!==M.version){Q(R,M,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+g)}const V={[Ha]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},_t={[Ze]:n.NEAREST,[fg]:n.NEAREST_MIPMAP_NEAREST,[ur]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[No]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},gt={[_g]:n.NEVER,[Eg]:n.ALWAYS,[gg]:n.LESS,[Pf]:n.LEQUAL,[vg]:n.EQUAL,[Sg]:n.GEQUAL,[xg]:n.GREATER,[Mg]:n.NOTEQUAL};function xt(M,g){if(g.type===Un&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===rn||g.magFilter===No||g.magFilter===ur||g.magFilter===Si||g.minFilter===rn||g.minFilter===No||g.minFilter===ur||g.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,V[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,V[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,V[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,_t[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,_t[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,gt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ze||g.minFilter!==ur&&g.minFilter!==Si||g.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const R=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ot(M,g){let R=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",H));const z=g.source;let F=f.get(z);F===void 0&&(F={},f.set(z,F));const O=Y(g);if(O!==M.__cacheKey){F[O]===void 0&&(F[O]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),F[O].usedTimes++;const at=F[M.__cacheKey];at!==void 0&&(F[M.__cacheKey].usedTimes--,at.usedTimes===0&&G(g)),M.__cacheKey=O,M.__webglTexture=F[O].texture}return R}function Xt(M,g,R){let z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=n.TEXTURE_3D);const F=Ot(M,g),O=g.source;e.bindTexture(z,M.__webglTexture,n.TEXTURE0+R);const at=i.get(O);if(O.version!==at.__version||F===!0){e.activeTexture(n.TEXTURE0+R);const st=Qt.getPrimaries(Qt.workingColorSpace),ht=g.colorSpace===Jn?null:Qt.getPrimaries(g.colorSpace),bt=g.colorSpace===Jn||st===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let lt=S(g.image,!1,s.maxTextureSize);lt=J(g,lt);const pt=r.convert(g.format,g.colorSpace),Lt=r.convert(g.type);let wt=A(g.internalFormat,pt,Lt,g.colorSpace,g.isVideoTexture);xt(z,g);let Mt;const kt=g.mipmaps,Dt=g.isVideoTexture!==!0,Wt=at.__version===void 0||F===!0,L=O.dataReady,yt=b(g,lt);if(g.isDepthTexture)wt=y(g.format===ds,g.type),Wt&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,wt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,wt,lt.width,lt.height,0,pt,Lt,null));else if(g.isDataTexture)if(kt.length>0){Dt&&Wt&&e.texStorage2D(n.TEXTURE_2D,yt,wt,kt[0].width,kt[0].height);for(let K=0,rt=kt.length;K<rt;K++)Mt=kt[K],Dt?L&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,pt,Lt,Mt.data):e.texImage2D(n.TEXTURE_2D,K,wt,Mt.width,Mt.height,0,pt,Lt,Mt.data);g.generateMipmaps=!1}else Dt?(Wt&&e.texStorage2D(n.TEXTURE_2D,yt,wt,lt.width,lt.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,pt,Lt,lt.data)):e.texImage2D(n.TEXTURE_2D,0,wt,lt.width,lt.height,0,pt,Lt,lt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Dt&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,wt,kt[0].width,kt[0].height,lt.depth);for(let K=0,rt=kt.length;K<rt;K++)if(Mt=kt[K],g.format!==ln)if(pt!==null)if(Dt){if(L)if(g.layerUpdates.size>0){const St=Ku(Mt.width,Mt.height,g.format,g.type);for(const Tt of g.layerUpdates){const qt=Mt.data.subarray(Tt*St/Mt.data.BYTES_PER_ELEMENT,(Tt+1)*St/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Tt,Mt.width,Mt.height,1,pt,qt,0,0)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,lt.depth,pt,Mt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,wt,Mt.width,Mt.height,lt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,lt.depth,pt,Lt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,wt,Mt.width,Mt.height,lt.depth,0,pt,Lt,Mt.data)}else{Dt&&Wt&&e.texStorage2D(n.TEXTURE_2D,yt,wt,kt[0].width,kt[0].height);for(let K=0,rt=kt.length;K<rt;K++)Mt=kt[K],g.format!==ln?pt!==null?Dt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,pt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,wt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?L&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,pt,Lt,Mt.data):e.texImage2D(n.TEXTURE_2D,K,wt,Mt.width,Mt.height,0,pt,Lt,Mt.data)}else if(g.isDataArrayTexture)if(Dt){if(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,wt,lt.width,lt.height,lt.depth),L)if(g.layerUpdates.size>0){const K=Ku(lt.width,lt.height,g.format,g.type);for(const rt of g.layerUpdates){const St=lt.data.subarray(rt*K/lt.data.BYTES_PER_ELEMENT,(rt+1)*K/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,lt.width,lt.height,1,pt,Lt,St)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,pt,Lt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,lt.width,lt.height,lt.depth,0,pt,Lt,lt.data);else if(g.isData3DTexture)Dt?(Wt&&e.texStorage3D(n.TEXTURE_3D,yt,wt,lt.width,lt.height,lt.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,pt,Lt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,wt,lt.width,lt.height,lt.depth,0,pt,Lt,lt.data);else if(g.isFramebufferTexture){if(Wt)if(Dt)e.texStorage2D(n.TEXTURE_2D,yt,wt,lt.width,lt.height);else{let K=lt.width,rt=lt.height;for(let St=0;St<yt;St++)e.texImage2D(n.TEXTURE_2D,St,wt,K,rt,0,pt,Lt,null),K>>=1,rt>>=1}}else if(kt.length>0){if(Dt&&Wt){const K=et(kt[0]);e.texStorage2D(n.TEXTURE_2D,yt,wt,K.width,K.height)}for(let K=0,rt=kt.length;K<rt;K++)Mt=kt[K],Dt?L&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,pt,Lt,Mt):e.texImage2D(n.TEXTURE_2D,K,wt,pt,Lt,Mt);g.generateMipmaps=!1}else if(Dt){if(Wt){const K=et(lt);e.texStorage2D(n.TEXTURE_2D,yt,wt,K.width,K.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Lt,lt)}else e.texImage2D(n.TEXTURE_2D,0,wt,pt,Lt,lt);m(g)&&p(z),at.__version=O.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Q(M,g,R){if(g.image.length!==6)return;const z=Ot(M,g),F=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+R);const O=i.get(F);if(F.version!==O.__version||z===!0){e.activeTexture(n.TEXTURE0+R);const at=Qt.getPrimaries(Qt.workingColorSpace),st=g.colorSpace===Jn?null:Qt.getPrimaries(g.colorSpace),ht=g.colorSpace===Jn||at===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const bt=g.isCompressedTexture||g.image[0].isCompressedTexture,lt=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let rt=0;rt<6;rt++)!bt&&!lt?pt[rt]=S(g.image[rt],!0,s.maxCubemapSize):pt[rt]=lt?g.image[rt].image:g.image[rt],pt[rt]=J(g,pt[rt]);const Lt=pt[0],wt=r.convert(g.format,g.colorSpace),Mt=r.convert(g.type),kt=A(g.internalFormat,wt,Mt,g.colorSpace),Dt=g.isVideoTexture!==!0,Wt=O.__version===void 0||z===!0,L=F.dataReady;let yt=b(g,Lt);xt(n.TEXTURE_CUBE_MAP,g);let K;if(bt){Dt&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,kt,Lt.width,Lt.height);for(let rt=0;rt<6;rt++){K=pt[rt].mipmaps;for(let St=0;St<K.length;St++){const Tt=K[St];g.format!==ln?wt!==null?Dt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,0,0,Tt.width,Tt.height,wt,Mt,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,kt,Tt.width,Tt.height,0,wt,Mt,Tt.data)}}}else{if(K=g.mipmaps,Dt&&Wt){K.length>0&&yt++;const rt=et(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(lt){Dt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt[rt].width,pt[rt].height,wt,Mt,pt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,kt,pt[rt].width,pt[rt].height,0,wt,Mt,pt[rt].data);for(let St=0;St<K.length;St++){const qt=K[St].image[rt].image;Dt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,0,0,qt.width,qt.height,wt,Mt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,kt,qt.width,qt.height,0,wt,Mt,qt.data)}}else{Dt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,wt,Mt,pt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,kt,wt,Mt,pt[rt]);for(let St=0;St<K.length;St++){const Tt=K[St];Dt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,0,0,wt,Mt,Tt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,kt,wt,Mt,Tt.image[rt])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),O.__version=F.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ct(M,g,R,z,F,O){const at=r.convert(R.format,R.colorSpace),st=r.convert(R.type),ht=A(R.internalFormat,at,st,R.colorSpace);if(!i.get(g).__hasExternalTextures){const lt=Math.max(1,g.width>>O),pt=Math.max(1,g.height>>O);F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?e.texImage3D(F,O,ht,lt,pt,g.depth,0,at,st,null):e.texImage2D(F,O,ht,lt,pt,0,at,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),j(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,F,i.get(R).__webglTexture,0,D(g)):(F===n.TEXTURE_2D||F>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,F,i.get(R).__webglTexture,O),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(M,g,R){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){const z=g.depthTexture,F=z&&z.isDepthTexture?z.type:null,O=y(g.stencilBuffer,F),at=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=D(g);j(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,O,g.width,g.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,O,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,O,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,M)}else{const z=g.textures;for(let F=0;F<z.length;F++){const O=z[F],at=r.convert(O.format,O.colorSpace),st=r.convert(O.type),ht=A(O.internalFormat,at,st,O.colorSpace),bt=D(g);R&&j(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,ht,g.width,g.height):j(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,ht,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ht,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),nt(g.depthTexture,0);const z=i.get(g.depthTexture).__webglTexture,F=D(g);if(g.depthTexture.format===ss)j(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(g.depthTexture.format===ds)j(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function it(M){const g=i.get(M),R=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const z=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const F=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",F)};z.addEventListener("dispose",F),g.__depthDisposeCallback=F}g.__boundDepthTexture=z}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");U(g.__webglFramebuffer,M)}else if(R){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=n.createRenderbuffer(),vt(g.__webglDepthbuffer[z],M,!1);else{const F=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=g.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,O)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),vt(g.__webglDepthbuffer,M,!1);else{const z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,F)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(M,g,R){const z=i.get(M);g!==void 0&&ct(z.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&it(M)}function ut(M){const g=M.texture,R=i.get(M),z=i.get(g);M.addEventListener("dispose",P);const F=M.textures,O=M.isWebGLCubeRenderTarget===!0,at=F.length>1;if(at||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=g.version,o.memory.textures++),O){R.__webglFramebuffer=[];for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer[st]=[];for(let ht=0;ht<g.mipmaps.length;ht++)R.__webglFramebuffer[st][ht]=n.createFramebuffer()}else R.__webglFramebuffer[st]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)R.__webglFramebuffer[st]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(at)for(let st=0,ht=F.length;st<ht;st++){const bt=i.get(F[st]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&j(M)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let st=0;st<F.length;st++){const ht=F[st];R.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[st]);const bt=r.convert(ht.format,ht.colorSpace),lt=r.convert(ht.type),pt=A(ht.internalFormat,bt,lt,ht.colorSpace,M.isXRRenderTarget===!0),Lt=D(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,pt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,R.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(R.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),xt(n.TEXTURE_CUBE_MAP,g);for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)ct(R.__webglFramebuffer[st][ht],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht);else ct(R.__webglFramebuffer[st],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(g)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let st=0,ht=F.length;st<ht;st++){const bt=F[st],lt=i.get(bt);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),xt(n.TEXTURE_2D,bt),ct(R.__webglFramebuffer,M,bt,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,0),m(bt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(st=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,z.__webglTexture),xt(st,g),g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)ct(R.__webglFramebuffer[ht],M,g,n.COLOR_ATTACHMENT0,st,ht);else ct(R.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,st,0);m(g)&&p(st),e.unbindTexture()}M.depthBuffer&&it(M)}function Ct(M){const g=M.textures;for(let R=0,z=g.length;R<z;R++){const F=g[R];if(m(F)){const O=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,at=i.get(F).__webglTexture;e.bindTexture(O,at),p(O),e.unbindTexture()}}}const Pt=[],_=[];function w(M){if(M.samples>0){if(j(M)===!1){const g=M.textures,R=M.width,z=M.height;let F=n.COLOR_BUFFER_BIT;const O=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(M),st=g.length>1;if(st)for(let ht=0;ht<g.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ht=0;ht<g.length;ht++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(F|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(F|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);const bt=i.get(g[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,bt,0)}n.blitFramebuffer(0,0,R,z,0,0,R,z,F,n.NEAREST),l===!0&&(Pt.length=0,_.length=0,Pt.push(n.COLOR_ATTACHMENT0+ht),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Pt.push(O),_.push(O),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let ht=0;ht<g.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);const bt=i.get(g[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function D(M){return Math.min(s.maxSamples,M.samples)}function j(M){const g=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function B(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function J(M,g){const R=M.colorSpace,z=M.format,F=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||R!==oi&&R!==Jn&&(Qt.getTransfer(R)===oe?(z!==ln||F!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),g}function et(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=T,this.setTexture2D=nt,this.setTexture2DArray=ot,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=tt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=j}function kS(n,t){function e(i,s=Jn){let r;const o=Qt.getTransfer(s);if(i===Fn)return n.UNSIGNED_BYTE;if(i===kl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ef)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mf)return n.BYTE;if(i===Sf)return n.SHORT;if(i===Zs)return n.UNSIGNED_SHORT;if(i===Gl)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===ir)return n.HALF_FLOAT;if(i===yf)return n.ALPHA;if(i===Tf)return n.RGB;if(i===ln)return n.RGBA;if(i===bf)return n.LUMINANCE;if(i===Af)return n.LUMINANCE_ALPHA;if(i===ss)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===wf)return n.RED;if(i===Xl)return n.RED_INTEGER;if(i===Rf)return n.RG;if(i===ql)return n.RG_INTEGER;if(i===Yl)return n.RGBA_INTEGER;if(i===Fr||i===Br||i===zr||i===Hr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===ka||i===Wa||i===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qa||i===Ya||i===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qa||i===Ya)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ja)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ka||i===$a||i===Za||i===Ja||i===Qa||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ka)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$a)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Za)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ol)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===al)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vr||i===cl||i===ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Vr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cf||i===hl||i===fl||i===dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class WS extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lr extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XS={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const qS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ii({vertexShader:qS,fragmentShader:YS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KS extends Ci{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,v=null;const S=new jS,m=e.getContextAttributes();let p=null,A=null;const y=[],b=[],H=new Bt;let P=null;const C=new Ye;C.layers.enable(1),C.viewport=new le;const G=new Ye;G.layers.enable(2),G.viewport=new le;const ft=[C,G],x=new WS;x.layers.enable(1),x.layers.enable(2);let T=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ct=y[Q];return ct===void 0&&(ct=new ca,y[Q]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Q){let ct=y[Q];return ct===void 0&&(ct=new ca,y[Q]=ct),ct.getGripSpace()},this.getHand=function(Q){let ct=y[Q];return ct===void 0&&(ct=new ca,y[Q]=ct),ct.getHandSpace()};function Y(Q){const ct=b.indexOf(Q.inputSource);if(ct===-1)return;const vt=y[ct];vt!==void 0&&(vt.update(Q.inputSource,Q.frame,c||o),vt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function nt(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",ot);for(let Q=0;Q<y.length;Q++){const ct=b[Q];ct!==null&&(b[Q]=null,y[Q].disconnect(ct))}T=null,Z=null,S.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,A=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",ot),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(H),s.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Ai(d.framebufferWidth,d.framebufferHeight,{format:ln,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,vt=null,U=null;m.depth&&(U=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?ds:ss,vt=m.stencil?fs:bi);const it={colorFormat:e.RGBA8,depthFormat:U,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(it),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Ai(f.textureWidth,f.textureHeight,{format:ln,type:Fn,depthTexture:new Xf(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ot(Q){for(let ct=0;ct<Q.removed.length;ct++){const vt=Q.removed[ct],U=b.indexOf(vt);U>=0&&(b[U]=null,y[U].disconnect(vt))}for(let ct=0;ct<Q.added.length;ct++){const vt=Q.added[ct];let U=b.indexOf(vt);if(U===-1){for(let tt=0;tt<y.length;tt++)if(tt>=b.length){b.push(vt),U=tt;break}else if(b[tt]===null){b[tt]=vt,U=tt;break}if(U===-1)break}const it=y[U];it&&it.connect(vt)}}const q=new k,$=new k;function V(Q,ct,vt){q.setFromMatrixPosition(ct.matrixWorld),$.setFromMatrixPosition(vt.matrixWorld);const U=q.distanceTo($),it=ct.projectionMatrix.elements,tt=vt.projectionMatrix.elements,ut=it[14]/(it[10]-1),Ct=it[14]/(it[10]+1),Pt=(it[9]+1)/it[5],_=(it[9]-1)/it[5],w=(it[8]-1)/it[0],D=(tt[8]+1)/tt[0],j=ut*w,B=ut*D,J=U/(-w+D),et=J*-w;if(ct.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(et),Q.translateZ(J),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),it[10]===-1)Q.projectionMatrix.copy(ct.projectionMatrix),Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const M=ut+J,g=Ct+J,R=j-et,z=B+(U-et),F=Pt*Ct/g*M,O=_*Ct/g*M;Q.projectionMatrix.makePerspective(R,z,F,O,M,g),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function _t(Q,ct){ct===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ct.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ct=Q.near,vt=Q.far;S.texture!==null&&(S.depthNear>0&&(ct=S.depthNear),S.depthFar>0&&(vt=S.depthFar)),x.near=G.near=C.near=ct,x.far=G.far=C.far=vt,(T!==x.near||Z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,Z=x.far);const U=Q.parent,it=x.cameras;_t(x,U);for(let tt=0;tt<it.length;tt++)_t(it[tt],U);it.length===2?V(x,C,G):x.projectionMatrix.copy(C.projectionMatrix),gt(Q,x,U)};function gt(Q,ct,vt){vt===null?Q.matrix.copy(ct.matrixWorld):(Q.matrix.copy(vt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ct.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ct.projectionMatrix),Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Js*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let xt=null;function Ot(Q,ct){if(u=ct.getViewerPose(c||o),v=ct,u!==null){const vt=u.views;d!==null&&(t.setRenderTargetFramebuffer(A,d.framebuffer),t.setRenderTarget(A));let U=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,U=!0);for(let tt=0;tt<vt.length;tt++){const ut=vt[tt];let Ct=null;if(d!==null)Ct=d.getViewport(ut);else{const _=h.getViewSubImage(f,ut);Ct=_.viewport,tt===0&&(t.setRenderTargetTextures(A,_.colorTexture,f.ignoreDepthValues?void 0:_.depthStencilTexture),t.setRenderTarget(A))}let Pt=ft[tt];Pt===void 0&&(Pt=new Ye,Pt.layers.enable(tt),Pt.viewport=new le,ft[tt]=Pt),Pt.matrix.fromArray(ut.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(ut.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),tt===0&&(x.matrix.copy(Pt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),U===!0&&x.cameras.push(Pt)}const it=s.enabledFeatures;if(it&&it.includes("depth-sensing")){const tt=h.getDepthInformation(vt[0]);tt&&tt.isValid&&tt.texture&&S.init(t,tt,s.renderState)}}for(let vt=0;vt<y.length;vt++){const U=b[vt],it=y[vt];U!==null&&it!==void 0&&it.update(U,ct,c||o)}xt&&xt(Q,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),v=null}const Xt=new kf;Xt.setAnimationLoop(Ot),this.setAnimationLoop=function(Q){xt=Q},this.dispose=function(){}}}const mi=new dn,$S=new ce;function ZS(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Hf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=t.get(p),y=A.envMap,b=A.envMapRotation;y&&(m.envMap.value=y,mi.copy(b),mi.x*=-1,mi.y*=-1,mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4($S.makeRotationFromEuler(mi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){const b=y.program;i.uniformBlockBinding(A,b)}function c(A,y){let b=s[A.id];b===void 0&&(v(A),b=u(A),s[A.id]=b,A.addEventListener("dispose",m));const H=y.program;i.updateUBOMapping(A,H);const P=t.render.frame;r[A.id]!==P&&(f(A),r[A.id]=P)}function u(A){const y=h();A.__bindingPointIndex=y;const b=n.createBuffer(),H=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,H,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const y=s[A.id],b=A.uniforms,H=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,C=b.length;P<C;P++){const G=Array.isArray(b[P])?b[P]:[b[P]];for(let ft=0,x=G.length;ft<x;ft++){const T=G[ft];if(d(T,P,ft,H)===!0){const Z=T.__offset,Y=Array.isArray(T.value)?T.value:[T.value];let nt=0;for(let ot=0;ot<Y.length;ot++){const q=Y[ot],$=S(q);typeof q=="number"||typeof q=="boolean"?(T.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,Z+nt,T.__data)):q.isMatrix3?(T.__data[0]=q.elements[0],T.__data[1]=q.elements[1],T.__data[2]=q.elements[2],T.__data[3]=0,T.__data[4]=q.elements[3],T.__data[5]=q.elements[4],T.__data[6]=q.elements[5],T.__data[7]=0,T.__data[8]=q.elements[6],T.__data[9]=q.elements[7],T.__data[10]=q.elements[8],T.__data[11]=0):(q.toArray(T.__data,nt),nt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,y,b,H){const P=A.value,C=y+"_"+b;if(H[C]===void 0)return typeof P=="number"||typeof P=="boolean"?H[C]=P:H[C]=P.clone(),!0;{const G=H[C];if(typeof P=="number"||typeof P=="boolean"){if(G!==P)return H[C]=P,!0}else if(G.equals(P)===!1)return G.copy(P),!0}return!1}function v(A){const y=A.uniforms;let b=0;const H=16;for(let C=0,G=y.length;C<G;C++){const ft=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,T=ft.length;x<T;x++){const Z=ft[x],Y=Array.isArray(Z.value)?Z.value:[Z.value];for(let nt=0,ot=Y.length;nt<ot;nt++){const q=Y[nt],$=S(q),V=b%H,_t=V%$.boundary,gt=V+_t;b+=_t,gt!==0&&H-gt<$.storage&&(b+=H-gt),Z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=b,b+=$.storage}}}const P=b%H;return P>0&&(b+=H-P),A.__size=b,A.__cache={},this}function S(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function m(A){const y=A.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class $f{constructor(t={}){const{canvas:e=Hg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),v=new Int32Array(4);let S=null,m=null;const p=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=ei,this.toneMappingExposure=1;const y=this;let b=!1,H=0,P=0,C=null,G=-1,ft=null;const x=new le,T=new le;let Z=null;const Y=new Yt(0);let nt=0,ot=e.width,q=e.height,$=1,V=null,_t=null;const gt=new le(0,0,ot,q),xt=new le(0,0,ot,q);let Ot=!1;const Xt=new Jl;let Q=!1,ct=!1;const vt=new ce,U=new ce,it=new k,tt=new le,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Pt(){return C===null?$:1}let _=i;function w(E,I){return e.getContext(E,I)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hl}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),_===null){const I="webgl2";if(_=w(I,E),_===null)throw w(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let D,j,B,J,et,M,g,R,z,F,O,at,st,ht,bt,lt,pt,Lt,wt,Mt,kt,Dt,Wt,L;function yt(){D=new sM(_),D.init(),Dt=new kS(_,D),j=new Jx(_,D,t,Dt),B=new HS(_),j.reverseDepthBuffer&&B.buffers.depth.setReversed(!0),J=new aM(_),et=new bS,M=new GS(_,D,B,et,j,Dt,J),g=new tM(y),R=new iM(y),z=new pv(_),Wt=new $x(_,z),F=new rM(_,z,J,Wt),O=new cM(_,F,z,J),wt=new lM(_,j,M),lt=new Qx(et),at=new TS(y,g,R,D,j,Wt,lt),st=new ZS(y,et),ht=new wS,bt=new IS(D),Lt=new Kx(y,g,R,B,O,f,l),pt=new BS(y,O,j),L=new JS(_,J,j,B),Mt=new Zx(_,D,J),kt=new oM(_,D,J),J.programs=at.programs,y.capabilities=j,y.extensions=D,y.properties=et,y.renderLists=ht,y.shadowMap=pt,y.state=B,y.info=J}yt();const K=new KS(y,_);this.xr=K,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const E=D.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=D.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(ot,q,!1))},this.getSize=function(E){return E.set(ot,q)},this.setSize=function(E,I,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=E,q=I,e.width=Math.floor(E*$),e.height=Math.floor(I*$),W===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(ot*$,q*$).floor()},this.setDrawingBufferSize=function(E,I,W){ot=E,q=I,$=W,e.width=Math.floor(E*W),e.height=Math.floor(I*W),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,I,W,X){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,I,W,X),B.viewport(x.copy(gt).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(xt)},this.setScissor=function(E,I,W,X){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,I,W,X),B.scissor(T.copy(xt).multiplyScalar($).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(E){B.setScissorTest(Ot=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){_t=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,I=!0,W=!0){let X=0;if(E){let N=!1;if(C!==null){const dt=C.texture.format;N=dt===Yl||dt===ql||dt===Xl}if(N){const dt=C.texture.type,Et=dt===Fn||dt===bi||dt===Zs||dt===fs||dt===kl||dt===Wl,At=Lt.getClearColor(),Rt=Lt.getClearAlpha(),Nt=At.r,Ft=At.g,It=At.b;Et?(d[0]=Nt,d[1]=Ft,d[2]=It,d[3]=Rt,_.clearBufferuiv(_.COLOR,0,d)):(v[0]=Nt,v[1]=Ft,v[2]=It,v[3]=Rt,_.clearBufferiv(_.COLOR,0,v))}else X|=_.COLOR_BUFFER_BIT}I&&(X|=_.DEPTH_BUFFER_BIT,_.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(X|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),ht.dispose(),bt.dispose(),et.dispose(),g.dispose(),R.dispose(),O.dispose(),Wt.dispose(),L.dispose(),at.dispose(),K.dispose(),K.removeEventListener("sessionstart",nc),K.removeEventListener("sessionend",ic),ai.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=J.autoReset,I=pt.enabled,W=pt.autoUpdate,X=pt.needsUpdate,N=pt.type;yt(),J.autoReset=E,pt.enabled=I,pt.autoUpdate=W,pt.needsUpdate=X,pt.type=N}function Tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qt(E){const I=E.target;I.removeEventListener("dispose",qt),fe(I)}function fe(E){Oe(E),et.remove(E)}function Oe(E){const I=et.get(E).programs;I!==void 0&&(I.forEach(function(W){at.releaseProgram(W)}),E.isShaderMaterial&&at.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,W,X,N,dt){I===null&&(I=ut);const Et=N.isMesh&&N.matrixWorld.determinant()<0,At=nd(E,I,W,X,N);B.setMaterial(X,Et);let Rt=W.index,Nt=1;if(X.wireframe===!0){if(Rt=F.getWireframeAttribute(W),Rt===void 0)return;Nt=2}const Ft=W.drawRange,It=W.attributes.position;let te=Ft.start*Nt,re=(Ft.start+Ft.count)*Nt;dt!==null&&(te=Math.max(te,dt.start*Nt),re=Math.min(re,(dt.start+dt.count)*Nt)),Rt!==null?(te=Math.max(te,0),re=Math.min(re,Rt.count)):It!=null&&(te=Math.max(te,0),re=Math.min(re,It.count));const ae=re-te;if(ae<0||ae===1/0)return;Wt.setup(N,X,At,W,Rt);let Ve,Kt=Mt;if(Rt!==null&&(Ve=z.get(Rt),Kt=kt,Kt.setIndex(Ve)),N.isMesh)X.wireframe===!0?(B.setLineWidth(X.wireframeLinewidth*Pt()),Kt.setMode(_.LINES)):Kt.setMode(_.TRIANGLES);else if(N.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),B.setLineWidth(Ut*Pt()),N.isLineSegments?Kt.setMode(_.LINES):N.isLineLoop?Kt.setMode(_.LINE_LOOP):Kt.setMode(_.LINE_STRIP)}else N.isPoints?Kt.setMode(_.POINTS):N.isSprite&&Kt.setMode(_.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(D.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ut=N._multiDrawStarts,Me=N._multiDrawCounts,$t=N._multiDrawCount,Qe=Rt?z.get(Rt).bytesPerElement:1,Li=et.get(X).currentProgram.getUniforms();for(let Ge=0;Ge<$t;Ge++)Li.setValue(_,"_gl_DrawID",Ge),Kt.render(Ut[Ge]/Qe,Me[Ge])}else if(N.isInstancedMesh)Kt.renderInstances(te,ae,N.count);else if(W.isInstancedBufferGeometry){const Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,Ut);Kt.renderInstances(te,ae,Me)}else Kt.render(te,ae)};function jt(E,I,W){E.transparent===!0&&E.side===Mn&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,or(E,I,W),E.side=ni,E.needsUpdate=!0,or(E,I,W),E.side=Mn):or(E,I,W)}this.compile=function(E,I,W=null){W===null&&(W=E),m=bt.get(W),m.init(I),A.push(m),W.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==W&&E.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const X=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const dt=N.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const At=dt[Et];jt(At,W,N),X.add(At)}else jt(dt,W,N),X.add(dt)}),A.pop(),m=null,X},this.compileAsync=function(E,I,W=null){const X=this.compile(E,I,W);return new Promise(N=>{function dt(){if(X.forEach(function(Et){et.get(Et).currentProgram.isReady()&&X.delete(Et)}),X.size===0){N(E);return}setTimeout(dt,10)}D.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Fe=null;function yn(E){Fe&&Fe(E)}function nc(){ai.stop()}function ic(){ai.start()}const ai=new kf;ai.setAnimationLoop(yn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(E){Fe=E,K.setAnimationLoop(E),E===null?ai.stop():ai.start()},K.addEventListener("sessionstart",nc),K.addEventListener("sessionend",ic),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(I),I=K.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,I,C),m=bt.get(E,A.length),m.init(I),A.push(m),U.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Xt.setFromProjectionMatrix(U),ct=this.localClippingEnabled,Q=lt.init(this.clippingPlanes,ct),S=ht.get(E,p.length),S.init(),p.push(S),K.enabled===!0&&K.isPresenting===!0){const dt=y.xr.getDepthSensingMesh();dt!==null&&go(dt,I,-1/0,y.sortObjects)}go(E,I,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(V,_t),Ct=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ct&&Lt.addToRenderList(S,E),this.info.render.frame++,Q===!0&&lt.beginShadows();const W=m.state.shadowsArray;pt.render(W,E,I),Q===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=S.opaque,N=S.transmissive;if(m.setupLights(),I.isArrayCamera){const dt=I.cameras;if(N.length>0)for(let Et=0,At=dt.length;Et<At;Et++){const Rt=dt[Et];rc(X,N,E,Rt)}Ct&&Lt.render(E);for(let Et=0,At=dt.length;Et<At;Et++){const Rt=dt[Et];sc(S,E,Rt,Rt.viewport)}}else N.length>0&&rc(X,N,E,I),Ct&&Lt.render(E),sc(S,E,I);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(y,E,I),Wt.resetDefaultState(),G=-1,ft=null,A.pop(),A.length>0?(m=A[A.length-1],Q===!0&&lt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?S=p[p.length-1]:S=null};function go(E,I,W,X){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Xt.intersectsSprite(E)){X&&tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);const Et=O.update(E),At=E.material;At.visible&&S.push(E,Et,At,W,tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Xt.intersectsObject(E))){const Et=O.update(E),At=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),tt.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),tt.copy(Et.boundingSphere.center)),tt.applyMatrix4(E.matrixWorld).applyMatrix4(U)),Array.isArray(At)){const Rt=Et.groups;for(let Nt=0,Ft=Rt.length;Nt<Ft;Nt++){const It=Rt[Nt],te=At[It.materialIndex];te&&te.visible&&S.push(E,Et,te,W,tt.z,It)}}else At.visible&&S.push(E,Et,At,W,tt.z,null)}}const dt=E.children;for(let Et=0,At=dt.length;Et<At;Et++)go(dt[Et],I,W,X)}function sc(E,I,W,X){const N=E.opaque,dt=E.transmissive,Et=E.transparent;m.setupLightsView(W),Q===!0&&lt.setGlobalState(y.clippingPlanes,W),X&&B.viewport(x.copy(X)),N.length>0&&rr(N,I,W),dt.length>0&&rr(dt,I,W),Et.length>0&&rr(Et,I,W),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function rc(E,I,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Ai(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")||D.has("EXT_color_buffer_float")?ir:Fn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const dt=m.state.transmissionRenderTarget[X.id],Et=X.viewport||x;dt.setSize(Et.z,Et.w);const At=y.getRenderTarget();y.setRenderTarget(dt),y.getClearColor(Y),nt=y.getClearAlpha(),nt<1&&y.setClearColor(16777215,.5),y.clear(),Ct&&Lt.render(W);const Rt=y.toneMapping;y.toneMapping=ei;const Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),Q===!0&&lt.setGlobalState(y.clippingPlanes,X),rr(E,W,X),M.updateMultisampleRenderTarget(dt),M.updateRenderTargetMipmap(dt),D.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let It=0,te=I.length;It<te;It++){const re=I[It],ae=re.object,Ve=re.geometry,Kt=re.material,Ut=re.group;if(Kt.side===Mn&&ae.layers.test(X.layers)){const Me=Kt.side;Kt.side=He,Kt.needsUpdate=!0,oc(ae,W,X,Ve,Kt,Ut),Kt.side=Me,Kt.needsUpdate=!0,Ft=!0}}Ft===!0&&(M.updateMultisampleRenderTarget(dt),M.updateRenderTargetMipmap(dt))}y.setRenderTarget(At),y.setClearColor(Y,nt),Nt!==void 0&&(X.viewport=Nt),y.toneMapping=Rt}function rr(E,I,W){const X=I.isScene===!0?I.overrideMaterial:null;for(let N=0,dt=E.length;N<dt;N++){const Et=E[N],At=Et.object,Rt=Et.geometry,Nt=X===null?Et.material:X,Ft=Et.group;At.layers.test(W.layers)&&oc(At,I,W,Rt,Nt,Ft)}}function oc(E,I,W,X,N,dt){E.onBeforeRender(y,I,W,X,N,dt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(y,I,W,X,E,dt),N.transparent===!0&&N.side===Mn&&N.forceSinglePass===!1?(N.side=He,N.needsUpdate=!0,y.renderBufferDirect(W,I,X,N,E,dt),N.side=ni,N.needsUpdate=!0,y.renderBufferDirect(W,I,X,N,E,dt),N.side=Mn):y.renderBufferDirect(W,I,X,N,E,dt),E.onAfterRender(y,I,W,X,N,dt)}function or(E,I,W){I.isScene!==!0&&(I=ut);const X=et.get(E),N=m.state.lights,dt=m.state.shadowsArray,Et=N.state.version,At=at.getParameters(E,N.state,dt,I,W),Rt=at.getProgramCacheKey(At);let Nt=X.programs;X.environment=E.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(E.isMeshStandardMaterial?R:g).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",qt),Nt=new Map,X.programs=Nt);let Ft=Nt.get(Rt);if(Ft!==void 0){if(X.currentProgram===Ft&&X.lightsStateVersion===Et)return lc(E,At),Ft}else At.uniforms=at.getUniforms(E),E.onBeforeCompile(At,y),Ft=at.acquireProgram(At,Rt),Nt.set(Rt,Ft),X.uniforms=At.uniforms;const It=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=lt.uniform),lc(E,At),X.needsLights=sd(E),X.lightsStateVersion=Et,X.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=Ft,X.uniformsList=null,Ft}function ac(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=kr.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function lc(E,I){const W=et.get(E);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function nd(E,I,W,X,N){I.isScene!==!0&&(I=ut),M.resetTextureUnits();const dt=I.fog,Et=X.isMeshStandardMaterial?I.environment:null,At=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:oi,Rt=(X.isMeshStandardMaterial?R:g).get(X.envMap||Et),Nt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ft=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!W.morphAttributes.position,te=!!W.morphAttributes.normal,re=!!W.morphAttributes.color;let ae=ei;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ae=y.toneMapping);const Ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Kt=Ve!==void 0?Ve.length:0,Ut=et.get(X),Me=m.state.lights;if(Q===!0&&(ct===!0||E!==ft)){const Ke=E===ft&&X.id===G;lt.setState(X,E,Ke)}let $t=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Me.state.version||Ut.outputColorSpace!==At||N.isBatchedMesh&&Ut.batching===!1||!N.isBatchedMesh&&Ut.batching===!0||N.isBatchedMesh&&Ut.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ut.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ut.instancing===!1||!N.isInstancedMesh&&Ut.instancing===!0||N.isSkinnedMesh&&Ut.skinning===!1||!N.isSkinnedMesh&&Ut.skinning===!0||N.isInstancedMesh&&Ut.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ut.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ut.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ut.instancingMorph===!1&&N.morphTexture!==null||Ut.envMap!==Rt||X.fog===!0&&Ut.fog!==dt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==lt.numPlanes||Ut.numIntersection!==lt.numIntersection)||Ut.vertexAlphas!==Nt||Ut.vertexTangents!==Ft||Ut.morphTargets!==It||Ut.morphNormals!==te||Ut.morphColors!==re||Ut.toneMapping!==ae||Ut.morphTargetsCount!==Kt)&&($t=!0):($t=!0,Ut.__version=X.version);let Qe=Ut.currentProgram;$t===!0&&(Qe=or(X,I,N));let Li=!1,Ge=!1,vo=!1;const ue=Qe.getUniforms(),zn=Ut.uniforms;if(B.useProgram(Qe.program)&&(Li=!0,Ge=!0,vo=!0),X.id!==G&&(G=X.id,Ge=!0),Li||ft!==E){j.reverseDepthBuffer?(vt.copy(E.projectionMatrix),Gg(vt),kg(vt),ue.setValue(_,"projectionMatrix",vt)):ue.setValue(_,"projectionMatrix",E.projectionMatrix),ue.setValue(_,"viewMatrix",E.matrixWorldInverse);const Ke=ue.map.cameraPosition;Ke!==void 0&&Ke.setValue(_,it.setFromMatrixPosition(E.matrixWorld)),j.logarithmicDepthBuffer&&ue.setValue(_,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ue.setValue(_,"isOrthographic",E.isOrthographicCamera===!0),ft!==E&&(ft=E,Ge=!0,vo=!0)}if(N.isSkinnedMesh){ue.setOptional(_,N,"bindMatrix"),ue.setOptional(_,N,"bindMatrixInverse");const Ke=N.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),ue.setValue(_,"boneTexture",Ke.boneTexture,M))}N.isBatchedMesh&&(ue.setOptional(_,N,"batchingTexture"),ue.setValue(_,"batchingTexture",N._matricesTexture,M),ue.setOptional(_,N,"batchingIdTexture"),ue.setValue(_,"batchingIdTexture",N._indirectTexture,M),ue.setOptional(_,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(_,"batchingColorTexture",N._colorsTexture,M));const xo=W.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0)&&wt.update(N,W,Qe),(Ge||Ut.receiveShadow!==N.receiveShadow)&&(Ut.receiveShadow=N.receiveShadow,ue.setValue(_,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(zn.envMap.value=Rt,zn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&I.environment!==null&&(zn.envMapIntensity.value=I.environmentIntensity),Ge&&(ue.setValue(_,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&id(zn,vo),dt&&X.fog===!0&&st.refreshFogUniforms(zn,dt),st.refreshMaterialUniforms(zn,X,$,q,m.state.transmissionRenderTarget[E.id]),kr.upload(_,ac(Ut),zn,M)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(kr.upload(_,ac(Ut),zn,M),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ue.setValue(_,"center",N.center),ue.setValue(_,"modelViewMatrix",N.modelViewMatrix),ue.setValue(_,"normalMatrix",N.normalMatrix),ue.setValue(_,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ke=X.uniformsGroups;for(let Mo=0,rd=Ke.length;Mo<rd;Mo++){const cc=Ke[Mo];L.update(cc,Qe),L.bind(cc,Qe)}}return Qe}function id(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function sd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,I,W){et.get(E.texture).__webglTexture=I,et.get(E.depthTexture).__webglTexture=W;const X=et.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const W=et.get(E);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,W=0){C=E,H=I,P=W;let X=!0,N=null,dt=!1,Et=!1;if(E){const Rt=et.get(E);if(Rt.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(_.FRAMEBUFFER,null),X=!1;else if(Rt.__webglFramebuffer===void 0)M.setupRenderTarget(E);else if(Rt.__hasExternalTextures)M.rebindTextures(E,et.get(E.texture).__webglTexture,et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const It=E.depthTexture;if(Rt.__boundDepthTexture!==It){if(It!==null&&et.has(It)&&(E.width!==It.image.width||E.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Et=!0);const Ft=et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[I])?N=Ft[I][W]:N=Ft[I],dt=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?N=et.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[W]:N=Ft,x.copy(E.viewport),T.copy(E.scissor),Z=E.scissorTest}else x.copy(gt).multiplyScalar($).floor(),T.copy(xt).multiplyScalar($).floor(),Z=Ot;if(B.bindFramebuffer(_.FRAMEBUFFER,N)&&X&&B.drawBuffers(E,N),B.viewport(x),B.scissor(T),B.setScissorTest(Z),dt){const Rt=et.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+I,Rt.__webglTexture,W)}else if(Et){const Rt=et.get(E.texture),Nt=I||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Rt.__webglTexture,W||0,Nt)}G=-1},this.readRenderTargetPixels=function(E,I,W,X,N,dt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){B.bindFramebuffer(_.FRAMEBUFFER,At);try{const Rt=E.texture,Nt=Rt.format,Ft=Rt.type;if(!j.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-X&&W>=0&&W<=E.height-N&&_.readPixels(I,W,X,N,Dt.convert(Nt),Dt.convert(Ft),dt)}finally{const Rt=C!==null?et.get(C).__webglFramebuffer:null;B.bindFramebuffer(_.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,I,W,X,N,dt,Et){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){const Rt=E.texture,Nt=Rt.format,Ft=Rt.type;if(!j.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-X&&W>=0&&W<=E.height-N){B.bindFramebuffer(_.FRAMEBUFFER,At);const It=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,It),_.bufferData(_.PIXEL_PACK_BUFFER,dt.byteLength,_.STREAM_READ),_.readPixels(I,W,X,N,Dt.convert(Nt),Dt.convert(Ft),0);const te=C!==null?et.get(C).__webglFramebuffer:null;B.bindFramebuffer(_.FRAMEBUFFER,te);const re=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Vg(_,re,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,It),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,dt),_.deleteBuffer(It),_.deleteSync(re),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,W=0){E.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),N=Math.floor(E.image.width*X),dt=Math.floor(E.image.height*X),Et=I!==null?I.x:0,At=I!==null?I.y:0;M.setTexture2D(E,0),_.copyTexSubImage2D(_.TEXTURE_2D,W,0,0,Et,At,N,dt),B.unbindTexture()},this.copyTextureToTexture=function(E,I,W=null,X=null,N=0){E.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],I=arguments[2],N=arguments[3]||0,W=null);let dt,Et,At,Rt,Nt,Ft;W!==null?(dt=W.max.x-W.min.x,Et=W.max.y-W.min.y,At=W.min.x,Rt=W.min.y):(dt=E.image.width,Et=E.image.height,At=0,Rt=0),X!==null?(Nt=X.x,Ft=X.y):(Nt=0,Ft=0);const It=Dt.convert(I.format),te=Dt.convert(I.type);M.setTexture2D(I,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,I.unpackAlignment);const re=_.getParameter(_.UNPACK_ROW_LENGTH),ae=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Ve=_.getParameter(_.UNPACK_SKIP_PIXELS),Kt=_.getParameter(_.UNPACK_SKIP_ROWS),Ut=_.getParameter(_.UNPACK_SKIP_IMAGES),Me=E.isCompressedTexture?E.mipmaps[N]:E.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,Me.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Me.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,At),_.pixelStorei(_.UNPACK_SKIP_ROWS,Rt),E.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,N,Nt,Ft,dt,Et,It,te,Me.data):E.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,N,Nt,Ft,Me.width,Me.height,It,Me.data):_.texSubImage2D(_.TEXTURE_2D,N,Nt,Ft,dt,Et,It,te,Me),_.pixelStorei(_.UNPACK_ROW_LENGTH,re),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ae),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ve),_.pixelStorei(_.UNPACK_SKIP_ROWS,Kt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ut),N===0&&I.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(E,I,W=null,X=null,N=0){E.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],I=arguments[3],N=arguments[4]||0);let dt,Et,At,Rt,Nt,Ft,It,te,re;const ae=E.isCompressedTexture?E.mipmaps[N]:E.image;W!==null?(dt=W.max.x-W.min.x,Et=W.max.y-W.min.y,At=W.max.z-W.min.z,Rt=W.min.x,Nt=W.min.y,Ft=W.min.z):(dt=ae.width,Et=ae.height,At=ae.depth,Rt=0,Nt=0,Ft=0),X!==null?(It=X.x,te=X.y,re=X.z):(It=0,te=0,re=0);const Ve=Dt.convert(I.format),Kt=Dt.convert(I.type);let Ut;if(I.isData3DTexture)M.setTexture3D(I,0),Ut=_.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)M.setTexture2DArray(I,0),Ut=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,I.unpackAlignment);const Me=_.getParameter(_.UNPACK_ROW_LENGTH),$t=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Qe=_.getParameter(_.UNPACK_SKIP_PIXELS),Li=_.getParameter(_.UNPACK_SKIP_ROWS),Ge=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,ae.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ae.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Rt),_.pixelStorei(_.UNPACK_SKIP_ROWS,Nt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ft),E.isDataTexture||E.isData3DTexture?_.texSubImage3D(Ut,N,It,te,re,dt,Et,At,Ve,Kt,ae.data):I.isCompressedArrayTexture?_.compressedTexSubImage3D(Ut,N,It,te,re,dt,Et,At,Ve,ae.data):_.texSubImage3D(Ut,N,It,te,re,dt,Et,At,Ve,Kt,ae),_.pixelStorei(_.UNPACK_ROW_LENGTH,Me),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,$t),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Qe),_.pixelStorei(_.UNPACK_SKIP_ROWS,Li),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ge),N===0&&I.generateMipmaps&&_.generateMipmap(Ut),B.unbindTexture()},this.initRenderTarget=function(E){et.get(E).__webglFramebuffer===void 0&&M.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),B.unbindTexture()},this.resetState=function(){H=0,P=0,C=null,B.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Kl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===mo?"display-p3":"srgb"}}class Zf extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class QS extends gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jf extends gs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const $u={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class tE{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],v=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}}const eE=new tE;class tc{constructor(t){this.manager=t!==void 0?t:eE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}tc.DEFAULT_MATERIAL_NAME="__DEFAULT";class nE extends tc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=$u.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Qs("img");function l(){u(),$u.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class iE extends tc{constructor(t){super(t)}load(t,e,i,s){const r=new Ne,o=new nE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Qf extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ua=new ce,Zu=new k,Ju=new k;class sE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zu),Ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ju),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rE extends sE{constructor(){super(new Wf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class td extends Qf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new rE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class oE extends Qf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class aE extends Ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);const th={type:"change"},ec={type:"start"},ed={type:"end"},Dr=new Uf,eh=new $n,lE=Math.cos(70*zg.DEG2RAD),pe=new k,Be=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ha=1e-6;class cE extends aE{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new wi,this._lastTargetPosition=new k,this._quat=new wi().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qu,this._sphericalDelta=new Qu,this._scale=1,this._panOffset=new k,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new k,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hE.bind(this),this._onPointerDown=uE.bind(this),this._onPointerUp=fE.bind(this),this._onContextMenu=xE.bind(this),this._onMouseWheel=mE.bind(this),this._onKeyDown=_E.bind(this),this._onTouchStart=gE.bind(this),this._onTouchMove=vE.bind(this),this._onMouseDown=dE.bind(this),this._onMouseMove=pE.bind(this),this._interceptControlDown=ME.bind(this),this._interceptControlUp=SE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(th),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;pe.copy(e).sub(this.target),pe.applyQuaternion(this._quat),this._spherical.setFromVector3(pe),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Be:i>Math.PI&&(i-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(pe.setFromSpherical(this._spherical),pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=pe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Dr.origin.copy(this.object.position),Dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dr.direction))<lE?this.object.lookAt(this.target):(eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dr.intersectPlane(eh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ha||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ha||this._lastTargetPosition.distanceToSquared(this.target)>ha?(this.dispatchEvent(th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){pe.setFromMatrixColumn(e,0),pe.multiplyScalar(-t),this._panOffset.add(pe)}_panUp(t,e){this.screenSpacePanning===!0?pe.setFromMatrixColumn(e,1):(pe.setFromMatrixColumn(e,0),pe.crossVectors(this.object.up,pe)),pe.multiplyScalar(t),this._panOffset.add(pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;pe.copy(s).sub(this.target);let r=pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function uE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function hE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function fE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ed),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ne.DOLLY;break;case ns.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}break;case ns.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(ec)}function pE(n){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mE(n){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(n.preventDefault(),this.dispatchEvent(ec),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ed))}function _E(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function gE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ne.TOUCH_ROTATE;break;case $i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case $i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ne.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(ec)}function vE(n){switch(this._trackPointer(n),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ne.NONE}}function xE(n){this.enabled!==!1&&n.preventDefault()}function ME(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class EE{constructor(){Re(this,"mesh");this.mesh=new ze;const t=new iE().load("textures/stone.jpg"),e=new xs(1,1,6,6),i=new QS({side:Mn,map:t}),s=new ze(e,i);s.rotateX(-Math.PI/2),this.mesh=s,this.browseVertices(this.mesh)}tick(){}browseVertices(t){const e=t.geometry.getAttribute("position"),i=[];for(let r=0;r<e.array.length;r++){const o=Math.floor(Math.random()*2),a=Math.random()*.3;r%3===2&&o===1?i.push(a):i.push(e.array[r])}console.log(e);const s=new Float32Array([...i]);t.geometry.setAttribute("position",new hn(s,3))}}class yE{constructor(t){Re(this,"scene");Re(this,"renderer");Re(this,"camera");Re(this,"meshs");this.meshs=[],this.scene=new Zf,this.camera=new Ye(45,window.innerWidth/window.innerHeight),this.camera.position.set(0,0,3),this.renderer=new $f({antialias:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(window.innerWidth,window.innerHeight),new cE(this.camera,this.renderer.domElement),t.appendChild(this.renderer.domElement);const e=new td(16777215,3);e.position.set(0,10,10).normalize();const i=new oE;i.intensity=.05,this.scene.add(i);const s=new EE;this.meshs.push(s),this.scene.add(e),this.addChildren(),this.tick()}tick(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(()=>{this.tick()})}addChildren(){for(let t=0;t<this.meshs.length;t++)this.scene.add(this.meshs[t].mesh)}}const TE=er({__name:"Obstacle",setup(n){const t=Cl();return Dl(()=>{new yE(t.value)}),(e,i)=>(uo(),ho("section",{class:"Obstacle",ref_key:"obstacle",ref:t},null,512))}});class bE{constructor(){Re(this,"meshData");Re(this,"mesh");Re(this,"lastPos");this.lastPos=0,this.mesh=new Se,this.meshData=[],this.generateRoad()}generateRoad(){this.instanceRoadBit(),this.instanceMesh()}createPlane(t){const e=new xs(10,5,1),i=new Jf({color:16711680}),s=new ze(e,i);s.rotateX(-Math.PI/2),s.position.set(0,0,t),this.mesh.add(s)}instanceRoadBit(){for(let t=0;t<30;t++)this.meshData.push({zPos:t*5.1}),t===29&&(this.lastPos=t*5.1)}instanceMesh(){this.meshData.forEach(t=>{this.createPlane(t.zPos)})}movePlanes(){this.mesh.children.forEach(t=>{t.position.z-=.3,t.position.z<=-1&&(t.position.z=this.lastPos)})}tick(){this.movePlanes()}}class AE{constructor(){Re(this,"mesh");this.mesh=new ze;const t=new vs(1,1,1),e=new Jf({color:65280}),i=new ze(t,e);i.position.set(0,1,10),this.mesh=i}tick(t){this.moveStarship(t)}moveStarship(t){const e=t/window.innerWidth*2-1;this.mesh.position.set(-e*3,1,10)}}class wE{constructor(t){Re(this,"scene");Re(this,"renderer");Re(this,"camera");Re(this,"meshs");Re(this,"mouseXPos");this.meshs=[],this.scene=new Zf,this.mouseXPos=0,this.camera=new Ye(45,window.innerWidth/window.innerHeight),this.camera.position.set(0,5,-2),this.camera.lookAt(0,5,0),this.renderer=new $f({antialias:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(window.innerWidth,window.innerHeight),t.appendChild(this.renderer.domElement);const e=new td(16777215,3);e.position.set(0,10,10).normalize();const i=new bE,s=new AE(this.mouseXPos);this.meshs.push(i),this.meshs.push(s),this.scene.add(e),this.addChildren(),this.tick()}tick(){this.renderer.render(this.scene,this.camera),this.tickChildren(),this.getMousePos(),requestAnimationFrame(()=>{this.tick()})}addChildren(){for(let t=0;t<this.meshs.length;t++)this.scene.add(this.meshs[t].mesh)}tickChildren(){for(let t=0;t<this.meshs.length;t++)t===1?this.meshs[t].tick(this.mouseXPos):this.meshs[t].tick()}getMousePos(){window.addEventListener("mousemove",t=>{this.mouseXPos=t.clientX})}}const RE=er({__name:"Game",setup(n){const t=Cl();return Dl(()=>{new wE(t.value)}),(e,i)=>(uo(),ho("section",{class:"Game",ref_key:"game",ref:t},null,512))}}),CE=_f(RE,[["__scopeId","data-v-b6cecb07"]]),PE=[{path:"/on-road",component:gf},{path:"/on-road/game",component:CE},{path:"/on-road/obstacle",component:TE}],LE=P_({history:o_(),routes:PE});wm(gf).use(LE).mount("#app");
