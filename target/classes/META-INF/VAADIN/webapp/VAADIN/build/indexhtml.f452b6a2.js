function Rb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(t,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.hillaPush=!1;window.Vaadin.featureFlags.hillaEngine=!1;window.Vaadin.featureFlags.oldLicenseChecker=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webpackForFrontendBuild=!1;window.Vaadin.featureFlags.enforceFieldValidation=!1;function Nb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var W={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),Db=Symbol.for("react.portal"),Mb=Symbol.for("react.fragment"),Fb=Symbol.for("react.strict_mode"),$b=Symbol.for("react.profiler"),Bb=Symbol.for("react.provider"),Hb=Symbol.for("react.context"),Ub=Symbol.for("react.forward_ref"),Vb=Symbol.for("react.suspense"),jb=Symbol.for("react.memo"),Wb=Symbol.for("react.lazy"),Uu=Symbol.iterator;function Gb(t){return t===null||typeof t!="object"?null:(t=Uu&&t[Uu]||t["@@iterator"],typeof t=="function"?t:null)}var xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cp=Object.assign,Ap={};function Eo(t,e,n){this.props=t,this.context=e,this.refs=Ap,this.updater=n||xp}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ep(){}Ep.prototype=Eo.prototype;function bd(t,e,n){this.props=t,this.context=e,this.refs=Ap,this.updater=n||xp}var vd=bd.prototype=new Ep;vd.constructor=bd;Cp(vd,Eo.prototype);vd.isPureReactComponent=!0;var Vu=Array.isArray,Sp=Object.prototype.hasOwnProperty,yd={current:null},kp={key:!0,ref:!0,__self:!0,__source:!0};function Tp(t,e,n){var r,o={},i=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(i=""+e.key),e)Sp.call(e,r)&&!kp.hasOwnProperty(r)&&(o[r]=e[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Vi,type:t,key:i,ref:a,props:o,_owner:yd.current}}function Yb(t,e){return{$$typeof:Vi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vi}function Kb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ju=/\/+/g;function Ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kb(""+t.key):e.toString(36)}function Ea(t,e,n,r,o){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Vi:case Db:a=!0}}if(a)return a=t,o=o(a),t=r===""?"."+Ql(a,0):r,Vu(o)?(n="",t!=null&&(n=t.replace(ju,"$&/")+"/"),Ea(o,e,n,"",function(c){return c})):o!=null&&(wd(o)&&(o=Yb(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ju,"$&/")+"/")+t)),e.push(o)),1;if(a=0,r=r===""?".":r+":",Vu(t))for(var l=0;l<t.length;l++){i=t[l];var s=r+Ql(i,l);a+=Ea(i,e,n,s,o)}else if(s=Gb(t),typeof s=="function")for(t=s.call(t),l=0;!(i=t.next()).done;)i=i.value,s=r+Ql(i,l++),a+=Ea(i,e,n,s,o);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ta(t,e,n){if(t==null)return t;var r=[],o=0;return Ea(t,r,"","",function(i){return e.call(n,i,o++)}),r}function qb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Sa={transition:null},Qb={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:yd};ie.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Eo;ie.Fragment=Mb;ie.Profiler=$b;ie.PureComponent=bd;ie.StrictMode=Fb;ie.Suspense=Vb;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qb;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Cp({},t.props),o=t.key,i=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,a=yd.current),e.key!==void 0&&(o=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(s in e)Sp.call(e,s)&&!kp.hasOwnProperty(s)&&(r[s]=e[s]===void 0&&l!==void 0?l[s]:e[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Vi,type:t.type,key:o,ref:i,props:r,_owner:a}};ie.createContext=function(t){return t={$$typeof:Hb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bb,_context:t},t.Consumer=t};ie.createElement=Tp;ie.createFactory=function(t){var e=Tp.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:Ub,render:t}};ie.isValidElement=wd;ie.lazy=function(t){return{$$typeof:Wb,_payload:{_status:-1,_result:t},_init:qb}};ie.memo=function(t,e){return{$$typeof:jb,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Sa.transition;Sa.transition={};try{t()}finally{Sa.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return pt.current.useCallback(t,e)};ie.useContext=function(t){return pt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return pt.current.useEffect(t,e)};ie.useId=function(){return pt.current.useId()};ie.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return pt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ie.useRef=function(t){return pt.current.useRef(t)};ie.useState=function(t){return pt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return pt.current.useTransition()};ie.version="18.2.0";(function(t){t.exports=ie})(W);const Xb=Nb(W.exports),Lt=Rb({__proto__:null,default:Xb},[W.exports]);var xd={exports:{}},zt={},Pp={exports:{}},Op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var q=L.length;L.push(Y);e:for(;0<q;){var ue=q-1>>>1,_e=L[ue];if(0<o(_e,Y))L[ue]=Y,L[q]=_e,q=ue;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var Y=L[0],q=L.pop();if(q!==Y){L[0]=q;e:for(var ue=0,_e=L.length,_t=_e>>>1;ue<_t;){var et=2*(ue+1)-1,ct=L[et],Se=et+1,dt=L[Se];if(0>o(ct,q))Se<_e&&0>o(dt,ct)?(L[ue]=dt,L[Se]=q,ue=Se):(L[ue]=ct,L[et]=q,ue=et);else if(Se<_e&&0>o(dt,q))L[ue]=dt,L[Se]=q,ue=Se;else break e}}return Y}function o(L,Y){var q=L.sortIndex-Y.sortIndex;return q!==0?q:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var s=[],c=[],d=1,h=null,u=3,_=!1,v=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(L){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=L)r(c),Y.sortIndex=Y.expirationTime,e(s,Y);else break;Y=n(c)}}function C(L){if(y=!1,b(L),!v)if(n(s)!==null)v=!0,nn(E);else{var Y=n(c);Y!==null&&Gt(C,Y.startTime-L)}}function E(L,Y){v=!1,y&&(y=!1,g(H),H=-1),_=!0;var q=u;try{for(b(Y),h=n(s);h!==null&&(!(h.expirationTime>Y)||L&&!Me());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,u=h.priorityLevel;var _e=ue(h.expirationTime<=Y);Y=t.unstable_now(),typeof _e=="function"?h.callback=_e:h===n(s)&&r(s),b(Y)}else r(s);h=n(s)}if(h!==null)var _t=!0;else{var et=n(c);et!==null&&Gt(C,et.startTime-Y),_t=!1}return _t}finally{h=null,u=q,_=!1}}var O=!1,F=null,H=-1,ne=5,$=-1;function Me(){return!(t.unstable_now()-$<ne)}function We(){if(F!==null){var L=t.unstable_now();$=L;var Y=!0;try{Y=F(!0,L)}finally{Y?Ft():(O=!1,F=null)}}else O=!1}var Ft;if(typeof m=="function")Ft=function(){m(We)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Oe=Pe.port2;Pe.port1.onmessage=We,Ft=function(){Oe.postMessage(null)}}else Ft=function(){P(We,0)};function nn(L){F=L,O||(O=!0,Ft())}function Gt(L,Y){H=P(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,nn(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(s)},t.unstable_next=function(L){switch(u){case 1:case 2:case 3:var Y=3;break;default:Y=u}var q=u;u=Y;try{return L()}finally{u=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=u;u=L;try{return Y()}finally{u=q}},t.unstable_scheduleCallback=function(L,Y,q){var ue=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ue+q:ue):q=ue,L){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=q+_e,L={id:d++,callback:Y,priorityLevel:L,startTime:q,expirationTime:_e,sortIndex:-1},q>ue?(L.sortIndex=q,e(c,L),n(s)===null&&L===n(c)&&(y?(g(H),H=-1):y=!0,Gt(C,q-ue))):(L.sortIndex=_e,e(s,L),v||_||(v=!0,nn(E))),L},t.unstable_shouldYield=Me,t.unstable_wrapCallback=function(L){var Y=u;return function(){var q=u;u=Y;try{return L.apply(this,arguments)}finally{u=q}}}})(Op);(function(t){t.exports=Op})(Pp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=W.exports,It=Pp.exports;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ip=new Set,mi={};function Tr(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(mi[t]=e,t=0;t<e.length;t++)Ip.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=Object.prototype.hasOwnProperty,Jb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wu={},Gu={};function Zb(t){return Ks.call(Gu,t)?!0:Ks.call(Wu,t)?!1:Jb.test(t)?Gu[t]=!0:(Wu[t]=!0,!1)}function ev(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tv(t,e,n,r){if(e===null||typeof e>"u"||ev(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,o,i,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=a}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function Ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cd,Ad);Ze[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cd,Ad);Ze[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cd,Ad);Ze[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ed(t,e,n,r){var o=Ze.hasOwnProperty(e)?Ze[e]:null;(o!==null?o.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tv(e,n,o,r)&&(n=null),r||o===null?Zb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):o.mustUseProperty?t[o.propertyName]=n===null?o.type===3?!1:"":n:(e=o.attributeName,r=o.attributeNamespace,n===null?t.removeAttribute(e):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),qs=Symbol.for("react.profiler"),zp=Symbol.for("react.provider"),Rp=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Qs=Symbol.for("react.suspense"),Xs=Symbol.for("react.suspense_list"),Td=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),Np=Symbol.for("react.offscreen"),Yu=Symbol.iterator;function Oo(t){return t===null||typeof t!="object"?null:(t=Yu&&t[Yu]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Xl;function Qo(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var Jl=!1;function Zl(t,e){if(!t||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return t.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",t.displayName)),s}while(1<=a&&0<=l);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function nv(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function Js(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case $r:return"Portal";case qs:return"Profiler";case Sd:return"StrictMode";case Qs:return"Suspense";case Xs:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rp:return(t.displayName||"Context")+".Consumer";case zp:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Td:return e=t.displayName||null,e!==null?e:Js(t.type)||"Memo";case Mn:e=t._payload,t=t._init;try{return Js(t(e))}catch{}}return null}function rv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Js(e);case 8:return e===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ov(t){var e=Dp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ra(t){t._valueTracker||(t._valueTracker=ov(t))}function Mp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Dp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zs(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Ku(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fp(t,e){e=e.checked,e!=null&&Ed(t,"checked",e,!1)}function ec(t,e){Fp(t,e);var n=er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tc(t,e.type,n):e.hasOwnProperty("defaultValue")&&tc(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tc(t,e,n){(e!=="number"||Ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xo=Array.isArray;function eo(t,e,n,r){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&r&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,o=0;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function nc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Xo(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function $p(t,e){var n=er(e.value),r=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oa,Hp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,o){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,o)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iv=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(t){iv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ri[e]=ri[t]})});function Up(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ri.hasOwnProperty(t)&&ri[t]?(""+e).trim():e+"px"}function Vp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Up(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,o):t[n]=o}}var av=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(t,e){if(e){if(av[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function ic(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ac=null;function Pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lc=null,to=null,no=null;function Ju(t){if(t=Gi(t)){if(typeof lc!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ol(e),lc(t.stateNode,t.type,e))}}function jp(t){to?no?no.push(t):no=[t]:to=t}function Wp(){if(to){var t=to,e=no;if(no=to=null,Ju(t),e)for(t=0;t<e.length;t++)Ju(e[t])}}function Gp(t,e){return t(e)}function Yp(){}var es=!1;function Kp(t,e,n){if(es)return t(e,n);es=!0;try{return Gp(t,e,n)}finally{es=!1,(to!==null||no!==null)&&(Yp(),Wp())}}function _i(t,e){var n=t.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var sc=!1;if(Sn)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){sc=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{sc=!1}function lv(t,e,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var oi=!1,Ha=null,Ua=!1,cc=null,sv={onError:function(t){oi=!0,Ha=t}};function cv(t,e,n,r,o,i,a,l,s){oi=!1,Ha=null,lv.apply(sv,arguments)}function dv(t,e,n,r,o,i,a,l,s){if(cv.apply(this,arguments),oi){if(oi){var c=Ha;oi=!1,Ha=null}else throw Error(I(198));Ua||(Ua=!0,cc=c)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zu(t){if(Pr(t)!==t)throw Error(I(188))}function uv(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Zu(o),t;if(i===r)return Zu(o),e;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Qp(t){return t=uv(t),t!==null?Xp(t):null}function Xp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xp(t);if(e!==null)return e;t=t.sibling}return null}var Jp=It.unstable_scheduleCallback,ef=It.unstable_cancelCallback,fv=It.unstable_shouldYield,hv=It.unstable_requestPaint,Le=It.unstable_now,pv=It.unstable_getCurrentPriorityLevel,Od=It.unstable_ImmediatePriority,Zp=It.unstable_UserBlockingPriority,Va=It.unstable_NormalPriority,mv=It.unstable_LowPriority,em=It.unstable_IdlePriority,Sl=null,dn=null;function gv(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:vv,_v=Math.log,bv=Math.LN2;function vv(t){return t>>>=0,t===0?32:31-(_v(t)/bv|0)|0}var ia=64,aa=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,o=t.suspendedLanes,i=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Jo(l):(i&=a,i!==0&&(r=Jo(i)))}else a=n&~o,a!==0?r=Jo(a):i!==0&&(r=Jo(i));if(r===0)return 0;if(e!==0&&e!==r&&(e&o)===0&&(o=r&-r,i=e&-e,o>=i||o===16&&(i&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),o=1<<n,r|=t[n],e&=~o;return r}function yv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,i=t.pendingLanes;0<i;){var a=31-Zt(i),l=1<<a,s=o[a];s===-1?((l&n)===0||(l&r)!==0)&&(o[a]=yv(l,e)):s<=e&&(t.expiredLanes|=l),i&=~l}}function dc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tm(){var t=ia;return ia<<=1,(ia&4194240)===0&&(ia=64),t}function ts(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ji(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function xv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var o=31-Zt(n),i=1<<o;e[o]=0,r[o]=-1,t[o]=-1,n&=~i}}function Ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),o=1<<r;o&e|t[r]&e&&(t[r]|=e),n&=~o}}var de=0;function nm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var rm,Id,om,im,am,uc=!1,la=[],jn=null,Wn=null,Gn=null,bi=new Map,vi=new Map,$n=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tf(t,e){switch(t){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(e.pointerId)}}function Io(t,e,n,r,o,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},e!==null&&(e=Gi(e),e!==null&&Id(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function Av(t,e,n,r,o){switch(e){case"focusin":return jn=Io(jn,t,e,n,r,o),!0;case"dragenter":return Wn=Io(Wn,t,e,n,r,o),!0;case"mouseover":return Gn=Io(Gn,t,e,n,r,o),!0;case"pointerover":var i=o.pointerId;return bi.set(i,Io(bi.get(i)||null,t,e,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,vi.set(i,Io(vi.get(i)||null,t,e,n,r,o)),!0}return!1}function lm(t){var e=pr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=qp(n),e!==null){t.blockedOn=e,am(t.priority,function(){om(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ac=r,n.target.dispatchEvent(r),ac=null}else return e=Gi(n),e!==null&&Id(e),t.blockedOn=n,!1;e.shift()}return!0}function nf(t,e,n){ka(t)&&n.delete(e)}function Ev(){uc=!1,jn!==null&&ka(jn)&&(jn=null),Wn!==null&&ka(Wn)&&(Wn=null),Gn!==null&&ka(Gn)&&(Gn=null),bi.forEach(nf),vi.forEach(nf)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,uc||(uc=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,Ev)))}function yi(t){function e(o){return zo(o,t)}if(0<la.length){zo(la[0],t);for(var n=1;n<la.length;n++){var r=la[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jn!==null&&zo(jn,t),Wn!==null&&zo(Wn,t),Gn!==null&&zo(Gn,t),bi.forEach(e),vi.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)lm(n),n.blockedOn===null&&$n.shift()}var ro=On.ReactCurrentBatchConfig,Wa=!0;function Sv(t,e,n,r){var o=de,i=ro.transition;ro.transition=null;try{de=1,zd(t,e,n,r)}finally{de=o,ro.transition=i}}function kv(t,e,n,r){var o=de,i=ro.transition;ro.transition=null;try{de=4,zd(t,e,n,r)}finally{de=o,ro.transition=i}}function zd(t,e,n,r){if(Wa){var o=fc(t,e,n,r);if(o===null)us(t,e,r,Ga,n),tf(t,r);else if(Av(o,t,e,n,r))r.stopPropagation();else if(tf(t,r),e&4&&-1<Cv.indexOf(t)){for(;o!==null;){var i=Gi(o);if(i!==null&&rm(i),i=fc(t,e,n,r),i===null&&us(t,e,r,Ga,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else us(t,e,r,null,n)}}var Ga=null;function fc(t,e,n,r){if(Ga=null,t=Pd(r),t=pr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ga=t,null}function sm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pv()){case Od:return 1;case Zp:return 4;case Va:case mv:return 16;case em:return 536870912;default:return 16}default:return 16}}var Un=null,Rd=null,Ta=null;function cm(){if(Ta)return Ta;var t,e=Rd,n=e.length,r,o="value"in Un?Un.value:Un.textContent,i=o.length;for(t=0;t<n&&e[t]===o[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===o[i-r];r++);return Ta=o.slice(t,1<r?1-r:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function rf(){return!1}function Rt(t){function e(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sa:rf,this.isPropagationStopped=rf,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nd=Rt(So),Wi=Ee({},So,{view:0,detail:0}),Tv=Rt(Wi),ns,rs,Ro,kl=Ee({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(ns=t.screenX-Ro.screenX,rs=t.screenY-Ro.screenY):rs=ns=0,Ro=t),ns)},movementY:function(t){return"movementY"in t?t.movementY:rs}}),of=Rt(kl),Pv=Ee({},kl,{dataTransfer:0}),Ov=Rt(Pv),Lv=Ee({},Wi,{relatedTarget:0}),os=Rt(Lv),Iv=Ee({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=Rt(Iv),Rv=Ee({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nv=Rt(Rv),Dv=Ee({},So,{data:0}),af=Rt(Dv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$v[t])?!!e[t]:!1}function Dd(){return Bv}var Hv=Ee({},Wi,{key:function(t){if(t.key){var e=Mv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dd,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uv=Rt(Hv),Vv=Ee({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lf=Rt(Vv),jv=Ee({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dd}),Wv=Rt(jv),Gv=Ee({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=Rt(Gv),Kv=Ee({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=Rt(Kv),Qv=[9,13,27,32],Md=Sn&&"CompositionEvent"in window,ii=null;Sn&&"documentMode"in document&&(ii=document.documentMode);var Xv=Sn&&"TextEvent"in window&&!ii,dm=Sn&&(!Md||ii&&8<ii&&11>=ii),sf=String.fromCharCode(32),cf=!1;function um(t,e){switch(t){case"keyup":return Qv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function Jv(t,e){switch(t){case"compositionend":return fm(e);case"keypress":return e.which!==32?null:(cf=!0,sf);case"textInput":return t=e.data,t===sf&&cf?null:t;default:return null}}function Zv(t,e){if(Hr)return t==="compositionend"||!Md&&um(t,e)?(t=cm(),Ta=Rd=Un=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dm&&e.locale!=="ko"?null:e.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ey[t.type]:e==="textarea"}function hm(t,e,n,r){jp(r),e=Ya(e,"onChange"),0<e.length&&(n=new Nd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ai=null,wi=null;function ty(t){Am(t,0)}function Tl(t){var e=jr(t);if(Mp(e))return t}function ny(t,e){if(t==="change")return e}var pm=!1;if(Sn){var is;if(Sn){var as="oninput"in document;if(!as){var uf=document.createElement("div");uf.setAttribute("oninput","return;"),as=typeof uf.oninput=="function"}is=as}else is=!1;pm=is&&(!document.documentMode||9<document.documentMode)}function ff(){ai&&(ai.detachEvent("onpropertychange",mm),wi=ai=null)}function mm(t){if(t.propertyName==="value"&&Tl(wi)){var e=[];hm(e,wi,t,Pd(t)),Kp(ty,e)}}function ry(t,e,n){t==="focusin"?(ff(),ai=e,wi=n,ai.attachEvent("onpropertychange",mm)):t==="focusout"&&ff()}function oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(wi)}function iy(t,e){if(t==="click")return Tl(e)}function ay(t,e){if(t==="input"||t==="change")return Tl(e)}function ly(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:ly;function xi(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ks.call(e,o)||!tn(t[o],e[o]))return!1}return!0}function hf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pf(t,e){var n=hf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hf(n)}}function gm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _m(){for(var t=window,e=Ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ba(t.document)}return e}function Fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sy(t){var e=_m(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gm(n.ownerDocument.documentElement,n)){if(r!==null&&Fd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!t.extend&&i>r&&(o=r,r=i,i=o),o=pf(n,i);var a=pf(n,r);o&&a&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cy=Sn&&"documentMode"in document&&11>=document.documentMode,Ur=null,hc=null,li=null,pc=!1;function mf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pc||Ur==null||Ur!==Ba(r)||(r=Ur,"selectionStart"in r&&Fd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),li&&xi(li,r)||(li=r,r=Ya(hc,"onSelect"),0<r.length&&(e=new Nd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ur)))}function ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vr={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},ls={},bm={};Sn&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Pl(t){if(ls[t])return ls[t];if(!Vr[t])return t;var e=Vr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bm)return ls[t]=e[n];return t}var vm=Pl("animationend"),ym=Pl("animationiteration"),wm=Pl("animationstart"),xm=Pl("transitionend"),Cm=new Map,gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Cm.set(t,e),Tr(e,[t])}for(var ss=0;ss<gf.length;ss++){var cs=gf[ss],dy=cs.toLowerCase(),uy=cs[0].toUpperCase()+cs.slice(1);rr(dy,"on"+uy)}rr(vm,"onAnimationEnd");rr(ym,"onAnimationIteration");rr(wm,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(xm,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function _f(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dv(r,e,void 0,t),t.currentTarget=null}function Am(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],o=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;_f(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;_f(o,l,c),i=s}}}if(Ua)throw t=cc,Ua=!1,cc=null,t}function ve(t,e){var n=e[vc];n===void 0&&(n=e[vc]=new Set);var r=t+"__bubble";n.has(r)||(Em(e,t,2,!1),n.add(r))}function ds(t,e,n){var r=0;e&&(r|=4),Em(n,t,r,e)}var da="_reactListening"+Math.random().toString(36).slice(2);function Ci(t){if(!t[da]){t[da]=!0,Ip.forEach(function(n){n!=="selectionchange"&&(fy.has(n)||ds(n,!1,t),ds(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[da]||(e[da]=!0,ds("selectionchange",!1,e))}}function Em(t,e,n,r){switch(sm(e)){case 1:var o=Sv;break;case 4:o=kv;break;default:o=zd}n=o.bind(null,e,n,t),o=void 0,!sc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):o!==void 0?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function us(t,e,n,r,o){var i=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=pr(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Kp(function(){var c=i,d=Pd(n),h=[];e:{var u=Cm.get(t);if(u!==void 0){var _=Nd,v=t;switch(t){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":_=Uv;break;case"focusin":v="focus",_=os;break;case"focusout":v="blur",_=os;break;case"beforeblur":case"afterblur":_=os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Wv;break;case vm:case ym:case wm:_=zv;break;case xm:_=Yv;break;case"scroll":_=Tv;break;case"wheel":_=qv;break;case"copy":case"cut":case"paste":_=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=lf}var y=(e&4)!==0,P=!y&&t==="scroll",g=y?u!==null?u+"Capture":null:u;y=[];for(var m=c,b;m!==null;){b=m;var C=b.stateNode;if(b.tag===5&&C!==null&&(b=C,g!==null&&(C=_i(m,g),C!=null&&y.push(Ai(m,C,b)))),P)break;m=m.return}0<y.length&&(u=new _(u,v,null,n,d),h.push({event:u,listeners:y}))}}if((e&7)===0){e:{if(u=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",u&&n!==ac&&(v=n.relatedTarget||n.fromElement)&&(pr(v)||v[kn]))break e;if((_||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?pr(v):null,v!==null&&(P=Pr(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(y=of,C="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=lf,C="onPointerLeave",g="onPointerEnter",m="pointer"),P=_==null?u:jr(_),b=v==null?u:jr(v),u=new y(C,m+"leave",_,n,d),u.target=P,u.relatedTarget=b,C=null,pr(d)===c&&(y=new y(g,m+"enter",v,n,d),y.target=b,y.relatedTarget=P,C=y),P=C,_&&v)t:{for(y=_,g=v,m=0,b=y;b;b=Rr(b))m++;for(b=0,C=g;C;C=Rr(C))b++;for(;0<m-b;)y=Rr(y),m--;for(;0<b-m;)g=Rr(g),b--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=Rr(y),g=Rr(g)}y=null}else y=null;_!==null&&bf(h,u,_,y,!1),v!==null&&P!==null&&bf(h,P,v,y,!0)}}e:{if(u=c?jr(c):window,_=u.nodeName&&u.nodeName.toLowerCase(),_==="select"||_==="input"&&u.type==="file")var E=ny;else if(df(u))if(pm)E=ay;else{E=oy;var O=ry}else(_=u.nodeName)&&_.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=iy);if(E&&(E=E(t,c))){hm(h,E,n,d);break e}O&&O(t,u,c),t==="focusout"&&(O=u._wrapperState)&&O.controlled&&u.type==="number"&&tc(u,"number",u.value)}switch(O=c?jr(c):window,t){case"focusin":(df(O)||O.contentEditable==="true")&&(Ur=O,hc=c,li=null);break;case"focusout":li=hc=Ur=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,mf(h,n,d);break;case"selectionchange":if(cy)break;case"keydown":case"keyup":mf(h,n,d)}var F;if(Md)e:{switch(t){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else Hr?um(t,n)&&(H="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(dm&&n.locale!=="ko"&&(Hr||H!=="onCompositionStart"?H==="onCompositionEnd"&&Hr&&(F=cm()):(Un=d,Rd="value"in Un?Un.value:Un.textContent,Hr=!0)),O=Ya(c,H),0<O.length&&(H=new af(H,t,null,n,d),h.push({event:H,listeners:O}),F?H.data=F:(F=fm(n),F!==null&&(H.data=F)))),(F=Xv?Jv(t,n):Zv(t,n))&&(c=Ya(c,"onBeforeInput"),0<c.length&&(d=new af("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=F))}Am(h,e)})}function Ai(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ya(t,e){for(var n=e+"Capture",r=[];t!==null;){var o=t,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=_i(t,n),i!=null&&r.unshift(Ai(t,i,o)),i=_i(t,e),i!=null&&r.push(Ai(t,i,o))),t=t.return}return r}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bf(t,e,n,r,o){for(var i=e._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=_i(n,i),s!=null&&a.unshift(Ai(n,s,l))):o||(s=_i(n,i),s!=null&&a.push(Ai(n,s,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var hy=/\r\n?/g,py=/\u0000|\uFFFD/g;function vf(t){return(typeof t=="string"?t:""+t).replace(hy,`
`).replace(py,"")}function ua(t,e,n){if(e=vf(e),vf(t)!==e&&n)throw Error(I(425))}function Ka(){}var mc=null,gc=null;function _c(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(t){return yf.resolve(null).then(t).catch(_y)}:bc;function _y(t){setTimeout(function(){throw t})}function fs(t,e){var n=e,r=0;do{var o=n.nextSibling;if(t.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){t.removeChild(o),yi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);yi(e)}function Yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ko=Math.random().toString(36).slice(2),cn="__reactFiber$"+ko,Ei="__reactProps$"+ko,kn="__reactContainer$"+ko,vc="__reactEvents$"+ko,by="__reactListeners$"+ko,vy="__reactHandles$"+ko;function pr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wf(t);t!==null;){if(n=t[cn])return n;t=wf(t)}return e}t=n,n=t.parentNode}return null}function Gi(t){return t=t[cn]||t[kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ol(t){return t[Ei]||null}var yc=[],Wr=-1;function or(t){return{current:t}}function ye(t){0>Wr||(t.current=yc[Wr],yc[Wr]=null,Wr--)}function ge(t,e){Wr++,yc[Wr]=t.current,t.current=e}var tr={},lt=or(tr),xt=or(!1),xr=tr;function po(t,e){var n=t.type.contextTypes;if(!n)return tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function Ct(t){return t=t.childContextTypes,t!=null}function qa(){ye(xt),ye(lt)}function xf(t,e,n){if(lt.current!==tr)throw Error(I(168));ge(lt,e),ge(xt,n)}function Sm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(I(108,rv(t)||"Unknown",o));return Ee({},n,r)}function Qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,xr=lt.current,ge(lt,t),ge(xt,xt.current),!0}function Cf(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Sm(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,ye(xt),ye(lt),ge(lt,t)):ye(xt),ge(xt,n)}var yn=null,Ll=!1,hs=!1;function km(t){yn===null?yn=[t]:yn.push(t)}function yy(t){Ll=!0,km(t)}function ir(){if(!hs&&yn!==null){hs=!0;var t=0,e=de;try{var n=yn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,Ll=!1}catch(o){throw yn!==null&&(yn=yn.slice(t+1)),Jp(Od,ir),o}finally{de=e,hs=!1}}return null}var Gr=[],Yr=0,Xa=null,Ja=0,Bt=[],Ht=0,Cr=null,xn=1,Cn="";function dr(t,e){Gr[Yr++]=Ja,Gr[Yr++]=Xa,Xa=t,Ja=e}function Tm(t,e,n){Bt[Ht++]=xn,Bt[Ht++]=Cn,Bt[Ht++]=Cr,Cr=t;var r=xn;t=Cn;var o=32-Zt(r)-1;r&=~(1<<o),n+=1;var i=32-Zt(e)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,xn=1<<32-Zt(e)+o|n<<o|r,Cn=i+t}else xn=1<<i|n<<o|r,Cn=t}function $d(t){t.return!==null&&(dr(t,1),Tm(t,1,0))}function Bd(t){for(;t===Xa;)Xa=Gr[--Yr],Gr[Yr]=null,Ja=Gr[--Yr],Gr[Yr]=null;for(;t===Cr;)Cr=Bt[--Ht],Bt[Ht]=null,Cn=Bt[--Ht],Bt[Ht]=null,xn=Bt[--Ht],Bt[Ht]=null}var Ot=null,Pt=null,we=!1,Jt=null;function Pm(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Af(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Pt=Yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:xn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Pt=null,!0):!1;default:return!1}}function wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xc(t){if(we){var e=Pt;if(e){var n=e;if(!Af(t,e)){if(wc(t))throw Error(I(418));e=Yn(n.nextSibling);var r=Ot;e&&Af(t,e)?Pm(r,n):(t.flags=t.flags&-4097|2,we=!1,Ot=t)}}else{if(wc(t))throw Error(I(418));t.flags=t.flags&-4097|2,we=!1,Ot=t}}}function Ef(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function fa(t){if(t!==Ot)return!1;if(!we)return Ef(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_c(t.type,t.memoizedProps)),e&&(e=Pt)){if(wc(t))throw Om(),Error(I(418));for(;e;)Pm(t,e),e=Yn(e.nextSibling)}if(Ef(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=Yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Ot?Yn(t.stateNode.nextSibling):null;return!0}function Om(){for(var t=Pt;t;)t=Yn(t.nextSibling)}function mo(){Pt=Ot=null,we=!1}function Hd(t){Jt===null?Jt=[t]:Jt.push(t)}var wy=On.ReactCurrentBatchConfig;function Qt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Za=or(null),el=null,Kr=null,Ud=null;function Vd(){Ud=Kr=el=null}function jd(t){var e=Za.current;ye(Za),t._currentValue=e}function Cc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){el=t,Ud=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(wt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Ud!==t)if(t={context:t,memoizedValue:e,next:null},Kr===null){if(el===null)throw Error(I(308));Kr=t,el.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return e}var mr=null;function Wd(t){mr===null?mr=[t]:mr.push(t)}function Lm(t,e,n,r){var o=e.interleaved;return o===null?(n.next=n,Wd(e)):(n.next=o.next,o.next=n),e.interleaved=n,Tn(t,r)}function Tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function Gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Im(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(le&2)!==0){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,Tn(t,n)}return o=r.interleaved,o===null?(e.next=e,Wd(r)):(e.next=o.next,o.next=e),r.interleaved=e,Tn(t,n)}function Oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}function Sf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=e:i=i.next=e}else o=i=e;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var o=t.updateQueue;Fn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;a=0,d=c=s=null,l=i;do{var u=l.lane,_=l.eventTime;if((r&u)===u){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(u=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(_,h,u);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,u=typeof v=="function"?v.call(_,h,u):v,u==null)break e;h=Ee({},h,u);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,u=o.effects,u===null?o.effects=[l]:u.push(l))}else _={eventTime:_,lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=_,s=h):d=d.next=_,a|=u;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;u=l,l=u.next,u.next=null,o.lastBaseUpdate=u,o.shared.pending=null}}while(1);if(d===null&&(s=h),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=d,e=o.shared.interleaved,e!==null){o=e;do a|=o.lane,o=o.next;while(o!==e)}else i===null&&(o.shared.lanes=0);Er|=a,t.lanes=a,t.memoizedState=h}}function kf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var zm=new Lp.Component().refs;function Ac(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),o=Qn(t),i=An(r,o);i.payload=e,n!=null&&(i.callback=n),e=Kn(t,i,o),e!==null&&(en(e,t,o,r),Oa(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),o=Qn(t),i=An(r,o);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Kn(t,i,o),e!==null&&(en(e,t,o,r),Oa(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=Qn(t),o=An(n,r);o.tag=2,e!=null&&(o.callback=e),e=Kn(t,o,r),e!==null&&(en(e,t,r,n),Oa(e,t,r))}};function Tf(t,e,n,r,o,i,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,a):e.prototype&&e.prototype.isPureReactComponent?!xi(n,r)||!xi(o,i):!0}function Rm(t,e,n){var r=!1,o=tr,i=e.contextType;return typeof i=="object"&&i!==null?i=jt(i):(o=Ct(e)?xr:lt.current,r=e.contextTypes,i=(r=r!=null)?po(t,o):tr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=i),e}function Pf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function Ec(t,e,n,r){var o=t.stateNode;o.props=n,o.state=t.memoizedState,o.refs=zm,Gd(t);var i=e.contextType;typeof i=="object"&&i!==null?o.context=jt(i):(i=Ct(e)?xr:lt.current,o.context=po(t,i)),o.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ac(t,e,i,n),o.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&Il.enqueueReplaceState(o,o.state,null),tl(t,n,o,r),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function No(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var o=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(a){var l=o.refs;l===zm&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},e._stringRef=i,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Of(t){var e=t._init;return e(t._payload)}function Nm(t){function e(g,m){if(t){var b=g.deletions;b===null?(g.deletions=[m],g.flags|=16):b.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=Xn(g,m),g.index=0,g.sibling=null,g}function i(g,m,b){return g.index=b,t?(b=g.alternate,b!==null?(b=b.index,b<m?(g.flags|=2,m):b):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,m,b,C){return m===null||m.tag!==6?(m=ys(b,g.mode,C),m.return=g,m):(m=o(m,b),m.return=g,m)}function s(g,m,b,C){var E=b.type;return E===Br?d(g,m,b.props.children,C,b.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mn&&Of(E)===m.type)?(C=o(m,b.props),C.ref=No(g,m,b),C.return=g,C):(C=Da(b.type,b.key,b.props,null,g.mode,C),C.ref=No(g,m,b),C.return=g,C)}function c(g,m,b,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=ws(b,g.mode,C),m.return=g,m):(m=o(m,b.children||[]),m.return=g,m)}function d(g,m,b,C,E){return m===null||m.tag!==7?(m=yr(b,g.mode,C,E),m.return=g,m):(m=o(m,b),m.return=g,m)}function h(g,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ys(""+m,g.mode,b),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case na:return b=Da(m.type,m.key,m.props,null,g.mode,b),b.ref=No(g,null,m),b.return=g,b;case $r:return m=ws(m,g.mode,b),m.return=g,m;case Mn:var C=m._init;return h(g,C(m._payload),b)}if(Xo(m)||Oo(m))return m=yr(m,g.mode,b,null),m.return=g,m;ha(g,m)}return null}function u(g,m,b,C){var E=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return E!==null?null:l(g,m,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case na:return b.key===E?s(g,m,b,C):null;case $r:return b.key===E?c(g,m,b,C):null;case Mn:return E=b._init,u(g,m,E(b._payload),C)}if(Xo(b)||Oo(b))return E!==null?null:d(g,m,b,C,null);ha(g,b)}return null}function _(g,m,b,C,E){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(b)||null,l(m,g,""+C,E);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case na:return g=g.get(C.key===null?b:C.key)||null,s(m,g,C,E);case $r:return g=g.get(C.key===null?b:C.key)||null,c(m,g,C,E);case Mn:var O=C._init;return _(g,m,b,O(C._payload),E)}if(Xo(C)||Oo(C))return g=g.get(b)||null,d(m,g,C,E,null);ha(m,C)}return null}function v(g,m,b,C){for(var E=null,O=null,F=m,H=m=0,ne=null;F!==null&&H<b.length;H++){F.index>H?(ne=F,F=null):ne=F.sibling;var $=u(g,F,b[H],C);if($===null){F===null&&(F=ne);break}t&&F&&$.alternate===null&&e(g,F),m=i($,m,H),O===null?E=$:O.sibling=$,O=$,F=ne}if(H===b.length)return n(g,F),we&&dr(g,H),E;if(F===null){for(;H<b.length;H++)F=h(g,b[H],C),F!==null&&(m=i(F,m,H),O===null?E=F:O.sibling=F,O=F);return we&&dr(g,H),E}for(F=r(g,F);H<b.length;H++)ne=_(F,g,H,b[H],C),ne!==null&&(t&&ne.alternate!==null&&F.delete(ne.key===null?H:ne.key),m=i(ne,m,H),O===null?E=ne:O.sibling=ne,O=ne);return t&&F.forEach(function(Me){return e(g,Me)}),we&&dr(g,H),E}function y(g,m,b,C){var E=Oo(b);if(typeof E!="function")throw Error(I(150));if(b=E.call(b),b==null)throw Error(I(151));for(var O=E=null,F=m,H=m=0,ne=null,$=b.next();F!==null&&!$.done;H++,$=b.next()){F.index>H?(ne=F,F=null):ne=F.sibling;var Me=u(g,F,$.value,C);if(Me===null){F===null&&(F=ne);break}t&&F&&Me.alternate===null&&e(g,F),m=i(Me,m,H),O===null?E=Me:O.sibling=Me,O=Me,F=ne}if($.done)return n(g,F),we&&dr(g,H),E;if(F===null){for(;!$.done;H++,$=b.next())$=h(g,$.value,C),$!==null&&(m=i($,m,H),O===null?E=$:O.sibling=$,O=$);return we&&dr(g,H),E}for(F=r(g,F);!$.done;H++,$=b.next())$=_(F,g,H,$.value,C),$!==null&&(t&&$.alternate!==null&&F.delete($.key===null?H:$.key),m=i($,m,H),O===null?E=$:O.sibling=$,O=$);return t&&F.forEach(function(We){return e(g,We)}),we&&dr(g,H),E}function P(g,m,b,C){if(typeof b=="object"&&b!==null&&b.type===Br&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case na:e:{for(var E=b.key,O=m;O!==null;){if(O.key===E){if(E=b.type,E===Br){if(O.tag===7){n(g,O.sibling),m=o(O,b.props.children),m.return=g,g=m;break e}}else if(O.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mn&&Of(E)===O.type){n(g,O.sibling),m=o(O,b.props),m.ref=No(g,O,b),m.return=g,g=m;break e}n(g,O);break}else e(g,O);O=O.sibling}b.type===Br?(m=yr(b.props.children,g.mode,C,b.key),m.return=g,g=m):(C=Da(b.type,b.key,b.props,null,g.mode,C),C.ref=No(g,m,b),C.return=g,g=C)}return a(g);case $r:e:{for(O=b.key;m!==null;){if(m.key===O)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){n(g,m.sibling),m=o(m,b.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=ws(b,g.mode,C),m.return=g,g=m}return a(g);case Mn:return O=b._init,P(g,m,O(b._payload),C)}if(Xo(b))return v(g,m,b,C);if(Oo(b))return y(g,m,b,C);ha(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(n(g,m.sibling),m=o(m,b),m.return=g,g=m):(n(g,m),m=ys(b,g.mode,C),m.return=g,g=m),a(g)):n(g,m)}return P}var go=Nm(!0),Dm=Nm(!1),Yi={},un=or(Yi),Si=or(Yi),ki=or(Yi);function gr(t){if(t===Yi)throw Error(I(174));return t}function Yd(t,e){switch(ge(ki,e),ge(Si,t),ge(un,Yi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rc(e,t)}ye(un),ge(un,e)}function _o(){ye(un),ye(Si),ye(ki)}function Mm(t){gr(ki.current);var e=gr(un.current),n=rc(e,t.type);e!==n&&(ge(Si,t),ge(un,n))}function Kd(t){Si.current===t&&(ye(un),ye(Si))}var Ce=or(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ps=[];function qd(){for(var t=0;t<ps.length;t++)ps[t]._workInProgressVersionPrimary=null;ps.length=0}var La=On.ReactCurrentDispatcher,ms=On.ReactCurrentBatchConfig,Ar=0,Ae=null,$e=null,He=null,rl=!1,si=!1,Ti=0,xy=0;function nt(){throw Error(I(321))}function Qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Xd(t,e,n,r,o,i){if(Ar=i,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,La.current=t===null||t.memoizedState===null?Sy:ky,t=n(r,o),si){i=0;do{if(si=!1,Ti=0,25<=i)throw Error(I(301));i+=1,He=$e=null,e.updateQueue=null,La.current=Ty,t=n(r,o)}while(si)}if(La.current=ol,e=$e!==null&&$e.next!==null,Ar=0,He=$e=Ae=null,rl=!1,e)throw Error(I(300));return t}function Jd(){var t=Ti!==0;return Ti=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ae.memoizedState=He=t:He=He.next=t,He}function Wt(){if($e===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=He===null?Ae.memoizedState:He.next;if(e!==null)He=e,$e=t;else{if(t===null)throw Error(I(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},He===null?Ae.memoizedState=He=t:He=He.next=t}return He}function Pi(t,e){return typeof e=="function"?e(t):e}function gs(t){var e=Wt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=$e,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var d=c.lane;if((Ar&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=h,a=r):s=s.next=h,Ae.lanes|=d,Er|=d}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,tn(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=s,n.lastRenderedState=r}if(t=n.interleaved,t!==null){o=t;do i=o.lane,Ae.lanes|=i,Er|=i,o=o.next;while(o!==t)}else o===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _s(t){var e=Wt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,o=n.pending,i=e.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=t(i,a.action),a=a.next;while(a!==o);tn(i,e.memoizedState)||(wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Fm(){}function $m(t,e){var n=Ae,r=Wt(),o=e(),i=!tn(r.memoizedState,o);if(i&&(r.memoizedState=o,wt=!0),r=r.queue,Zd(Um.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Oi(9,Hm.bind(null,n,r,o,e),void 0,null),Ve===null)throw Error(I(349));(Ar&30)!==0||Bm(n,e,o)}return o}function Bm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hm(t,e,n,r){e.value=n,e.getSnapshot=r,Vm(e)&&jm(t)}function Um(t,e,n){return n(function(){Vm(e)&&jm(t)})}function Vm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function jm(t){var e=Tn(t,1);e!==null&&en(e,t,1,-1)}function Lf(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:t},e.queue=t,t=t.dispatch=Ey.bind(null,Ae,t),[e.memoizedState,t]}function Oi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Wm(){return Wt().memoizedState}function Ia(t,e,n,r){var o=ln();Ae.flags|=t,o.memoizedState=Oi(1|e,n,void 0,r===void 0?null:r)}function zl(t,e,n,r){var o=Wt();r=r===void 0?null:r;var i=void 0;if($e!==null){var a=$e.memoizedState;if(i=a.destroy,r!==null&&Qd(r,a.deps)){o.memoizedState=Oi(e,n,i,r);return}}Ae.flags|=t,o.memoizedState=Oi(1|e,n,i,r)}function If(t,e){return Ia(8390656,8,t,e)}function Zd(t,e){return zl(2048,8,t,e)}function Gm(t,e){return zl(4,2,t,e)}function Ym(t,e){return zl(4,4,t,e)}function Km(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qm(t,e,n){return n=n!=null?n.concat([t]):null,zl(4,4,Km.bind(null,e,t),n)}function eu(){}function Qm(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xm(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jm(t,e,n){return(Ar&21)===0?(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n):(tn(n,e)||(n=tm(),Ae.lanes|=n,Er|=n,t.baseState=!0),e)}function Cy(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=ms.transition;ms.transition={};try{t(!1),e()}finally{de=n,ms.transition=r}}function Zm(){return Wt().memoizedState}function Ay(t,e,n){var r=Qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eg(t))tg(e,n);else if(n=Lm(t,e,n,r),n!==null){var o=ht();en(n,t,r,o),ng(n,e,r)}}function Ey(t,e,n){var r=Qn(t),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eg(t))tg(e,o);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var a=e.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,tn(l,a)){var s=e.interleaved;s===null?(o.next=o,Wd(e)):(o.next=s.next,s.next=o),e.interleaved=o;return}}catch{}finally{}n=Lm(t,e,o,r),n!==null&&(o=ht(),en(n,t,r,o),ng(n,e,r))}}function eg(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function tg(t,e){si=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ng(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}var ol={readContext:jt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},Sy={readContext:jt,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:If,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ia(4194308,4,Km.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ia(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ia(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ay.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:Lf,useDebugValue:eu,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=Lf(!1),e=t[0];return t=Cy.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,o=ln();if(we){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Ve===null)throw Error(I(349));(Ar&30)!==0||Bm(r,e,n)}o.memoizedState=n;var i={value:n,getSnapshot:e};return o.queue=i,If(Um.bind(null,r,i,t),[t]),r.flags|=2048,Oi(9,Hm.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=ln(),e=Ve.identifierPrefix;if(we){var n=Cn,r=xn;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ti++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ky={readContext:jt,useCallback:Qm,useContext:jt,useEffect:Zd,useImperativeHandle:qm,useInsertionEffect:Gm,useLayoutEffect:Ym,useMemo:Xm,useReducer:gs,useRef:Wm,useState:function(){return gs(Pi)},useDebugValue:eu,useDeferredValue:function(t){var e=Wt();return Jm(e,$e.memoizedState,t)},useTransition:function(){var t=gs(Pi)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:Fm,useSyncExternalStore:$m,useId:Zm,unstable_isNewReconciler:!1},Ty={readContext:jt,useCallback:Qm,useContext:jt,useEffect:Zd,useImperativeHandle:qm,useInsertionEffect:Gm,useLayoutEffect:Ym,useMemo:Xm,useReducer:_s,useRef:Wm,useState:function(){return _s(Pi)},useDebugValue:eu,useDeferredValue:function(t){var e=Wt();return $e===null?e.memoizedState=t:Jm(e,$e.memoizedState,t)},useTransition:function(){var t=_s(Pi)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:Fm,useSyncExternalStore:$m,useId:Zm,unstable_isNewReconciler:!1};function bo(t,e){try{var n="",r=e;do n+=nv(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:o,digest:null}}function bs(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Sc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Py=typeof WeakMap=="function"?WeakMap:Map;function rg(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){al||(al=!0,Dc=r),Sc(t,e)},n}function og(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var o=e.value;n.payload=function(){return r(o)},n.callback=function(){Sc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Sc(t,e),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function zf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Py;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(n)||(o.add(n),t=Vy.bind(null,t,e,n),e.then(t,t))}function Rf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nf(t,e,n,r,o){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,Kn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=o,t)}var Oy=On.ReactCurrentOwner,wt=!1;function ft(t,e,n,r){e.child=t===null?Dm(e,null,n,r):go(e,t.child,n,r)}function Df(t,e,n,r,o){n=n.render;var i=e.ref;return oo(e,o),r=Xd(t,e,n,r,i,o),n=Jd(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,Pn(t,e,o)):(we&&n&&$d(e),e.flags|=1,ft(t,e,r,o),e.child)}function Mf(t,e,n,r,o){if(t===null){var i=n.type;return typeof i=="function"&&!su(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,ig(t,e,i,r,o)):(t=Da(n.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,(t.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(a,r)&&t.ref===e.ref)return Pn(t,e,o)}return e.flags|=1,t=Xn(i,r),t.ref=e.ref,t.return=e,e.child=t}function ig(t,e,n,r,o){if(t!==null){var i=t.memoizedProps;if(xi(i,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=i,(t.lanes&o)!==0)(t.flags&131072)!==0&&(wt=!0);else return e.lanes=t.lanes,Pn(t,e,o)}return kc(t,e,n,r,o)}function ag(t,e,n){var r=e.pendingProps,o=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Qr,Tt),Tt|=n;else{if((n&1073741824)===0)return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Qr,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(Qr,Tt),Tt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(Qr,Tt),Tt|=r;return ft(t,e,o,n),e.child}function lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kc(t,e,n,r,o){var i=Ct(n)?xr:lt.current;return i=po(e,i),oo(e,o),n=Xd(t,e,n,r,i,o),r=Jd(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,Pn(t,e,o)):(we&&r&&$d(e),e.flags|=1,ft(t,e,n,o),e.child)}function Ff(t,e,n,r,o){if(Ct(n)){var i=!0;Qa(e)}else i=!1;if(oo(e,o),e.stateNode===null)za(t,e),Rm(e,n,r),Ec(e,n,r,o),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=jt(c):(c=Ct(n)?xr:lt.current,c=po(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Pf(e,a,r,c),Fn=!1;var u=e.memoizedState;a.state=u,tl(e,r,a,o),s=e.memoizedState,l!==r||u!==s||xt.current||Fn?(typeof d=="function"&&(Ac(e,n,d,r),s=e.memoizedState),(l=Fn||Tf(e,n,l,r,u,s,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Im(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Qt(e.type,l),a.props=c,h=e.pendingProps,u=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=jt(s):(s=Ct(n)?xr:lt.current,s=po(e,s));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||u!==s)&&Pf(e,a,r,s),Fn=!1,u=e.memoizedState,a.state=u,tl(e,r,a,o);var v=e.memoizedState;l!==h||u!==v||xt.current||Fn?(typeof _=="function"&&(Ac(e,n,_,r),v=e.memoizedState),(c=Fn||Tf(e,n,c,r,u,v,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),a.props=r,a.state=v,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),r=!1)}return Tc(t,e,n,r,i,o)}function Tc(t,e,n,r,o,i){lg(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return o&&Cf(e,n,!1),Pn(t,e,i);r=e.stateNode,Oy.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=go(e,t.child,null,i),e.child=go(e,null,l,i)):ft(t,e,l,i),e.memoizedState=r.state,o&&Cf(e,n,!0),e.child}function sg(t){var e=t.stateNode;e.pendingContext?xf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xf(t,e.context,!1),Yd(t,e.containerInfo)}function $f(t,e,n,r,o){return mo(),Hd(o),e.flags|=256,ft(t,e,n,r),e.child}var Pc={dehydrated:null,treeContext:null,retryLane:0};function Oc(t){return{baseLanes:t,cachePool:null,transitions:null}}function cg(t,e,n){var r=e.pendingProps,o=Ce.current,i=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(o&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),ge(Ce,o&1),t===null)return xc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(a=r.children,t=r.fallback,i?(r=e.mode,i=e.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Dl(a,r,0,null),t=yr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Oc(n),e.memoizedState=Pc,t):tu(e,a));if(o=t.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Ly(t,e,a,r,l,o,n);if(i){i=r.fallback,a=e.mode,o=t.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=s,e.deletions=null):(r=Xn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Xn(l,i):(i=yr(i,a,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,a=t.child.memoizedState,a=a===null?Oc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=t.childLanes&~n,e.memoizedState=Pc,r}return i=t.child,t=i.sibling,r=Xn(i,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tu(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pa(t,e,n,r){return r!==null&&Hd(r),go(e,t.child,null,n),t=tu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ly(t,e,n,r,o,i,a){if(n)return e.flags&256?(e.flags&=-257,r=bs(Error(I(422))),pa(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,o=e.mode,r=Dl({mode:"visible",children:r.children},o,0,null),i=yr(i,o,a,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,(e.mode&1)!==0&&go(e,t.child,null,a),e.child.memoizedState=Oc(a),e.memoizedState=Pc,i);if((e.mode&1)===0)return pa(t,e,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(I(419)),r=bs(i,r,void 0),pa(t,e,a,r)}if(l=(a&t.childLanes)!==0,wt||l){if(r=Ve,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tn(t,o),en(r,t,o,-1))}return lu(),r=bs(Error(I(421))),pa(t,e,a,r)}return o.data==="$?"?(e.flags|=128,e.child=t.child,e=jy.bind(null,t),o._reactRetry=e,null):(t=i.treeContext,Pt=Yn(o.nextSibling),Ot=e,we=!0,Jt=null,t!==null&&(Bt[Ht++]=xn,Bt[Ht++]=Cn,Bt[Ht++]=Cr,xn=t.id,Cn=t.overflow,Cr=e),e=tu(e,r.children),e.flags|=4096,e)}function Bf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cc(t.return,e,n)}function vs(t,e,n,r,o){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function dg(t,e,n){var r=e.pendingProps,o=r.revealOrder,i=r.tail;if(ft(t,e,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bf(t,n,e);else if(t.tag===19)Bf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ce,r),(e.mode&1)===0)e.memoizedState=null;else switch(o){case"forwards":for(n=e.child,o=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),vs(e,!1,o,n,i);break;case"backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&nl(t)===null){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}vs(e,!0,n,null,i);break;case"together":vs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function za(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Iy(t,e,n){switch(e.tag){case 3:sg(e),mo();break;case 5:Mm(e);break;case 1:Ct(e.type)&&Qa(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,o=e.memoizedProps.value;ge(Za,r._currentValue),r._currentValue=o;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?cg(t,e,n):(ge(Ce,Ce.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return dg(t,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,ag(t,e,n)}return Pn(t,e,n)}var ug,Lc,fg,hg;ug=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lc=function(){};fg=function(t,e,n,r){var o=t.memoizedProps;if(o!==r){t=e.stateNode,gr(un.current);var i=null;switch(n){case"input":o=Zs(t,o),r=Zs(t,r),i=[];break;case"select":o=Ee({},o,{value:void 0}),r=Ee({},r,{value:void 0}),i=[];break;case"textarea":o=nc(t,o),r=nc(t,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ka)}oc(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mi.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ve("scroll",t),i||l===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};hg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Do(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zy(t,e,n){var r=e.pendingProps;switch(Bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return Ct(e.type)&&qa(),rt(e),null;case 3:return r=e.stateNode,_o(),ye(xt),ye(lt),qd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Jt!==null&&($c(Jt),Jt=null))),Lc(t,e),rt(e),null;case 5:Kd(e);var o=gr(ki.current);if(n=e.type,t!==null&&e.stateNode!=null)fg(t,e,n,r,o),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return rt(e),null}if(t=gr(un.current),fa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[cn]=e,r[Ei]=i,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(o=0;o<Zo.length;o++)ve(Zo[o],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Ku(r,i),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ve("invalid",r);break;case"textarea":Qu(r,i),ve("invalid",r)}oc(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),o=["children",""+l]):mi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":ra(r),qu(r,i,!0);break;case"textarea":ra(r),Xu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ka)}r=o,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[cn]=e,t[Ei]=r,ug(t,e,!1,!1),e.stateNode=t;e:{switch(a=ic(n,r),n){case"dialog":ve("cancel",t),ve("close",t),o=r;break;case"iframe":case"object":case"embed":ve("load",t),o=r;break;case"video":case"audio":for(o=0;o<Zo.length;o++)ve(Zo[o],t);o=r;break;case"source":ve("error",t),o=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),o=r;break;case"details":ve("toggle",t),o=r;break;case"input":Ku(t,r),o=Zs(t,r),ve("invalid",t);break;case"option":o=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},o=Ee({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Qu(t,r),o=nc(t,r),ve("invalid",t);break;default:o=r}oc(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Vp(t,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Hp(t,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&gi(t,s):typeof s=="number"&&gi(t,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(mi.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ve("scroll",t):s!=null&&Ed(t,i,s,a))}switch(n){case"input":ra(t),qu(t,r,!1);break;case"textarea":ra(t),Xu(t);break;case"option":r.value!=null&&t.setAttribute("value",""+er(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?eo(t,!!r.multiple,i,!1):r.defaultValue!=null&&eo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)hg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=gr(ki.current),gr(un.current),fa(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(i=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return rt(e),null;case 13:if(ye(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Pt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Om(),mo(),e.flags|=98560,i=!1;else if(i=fa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(I(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[cn]=e}else mo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;rt(e),i=!1}else Jt!==null&&($c(Jt),Jt=null),i=!0;if(!i)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Ce.current&1)!==0?Be===0&&(Be=3):lu())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return _o(),Lc(t,e),t===null&&Ci(e.stateNode.containerInfo),rt(e),null;case 10:return jd(e.type._context),rt(e),null;case 17:return Ct(e.type)&&qa(),rt(e),null;case 19:if(ye(Ce),i=e.memoizedState,i===null)return rt(e),null;if(r=(e.flags&128)!==0,a=i.rendering,a===null)if(r)Do(i,!1);else{if(Be!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(a=nl(t),a!==null){for(e.flags|=128,Do(i,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,t=a.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),e.child}t=t.sibling}i.tail!==null&&Le()>vo&&(e.flags|=128,r=!0,Do(i,!1),e.lanes=4194304)}else{if(!r)if(t=nl(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!we)return rt(e),null}else 2*Le()-i.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,Do(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(n=i.last,n!==null?n.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Le(),e.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return au(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Tt&1073741824)!==0&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function Ry(t,e){switch(Bd(e),e.tag){case 1:return Ct(e.type)&&qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _o(),ye(xt),ye(lt),qd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Kd(e),null;case 13:if(ye(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ce),null;case 4:return _o(),null;case 10:return jd(e.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var ma=!1,it=!1,Ny=typeof WeakSet=="function"?WeakSet:Set,B=null;function qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Ic(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Hf=!1;function Dy(t,e){if(mc=Wa,t=_m(),Fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,d=0,h=t,u=null;t:for(;;){for(var _;h!==n||o!==0&&h.nodeType!==3||(l=a+o),h!==i||r!==0&&h.nodeType!==3||(s=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(_=h.firstChild)!==null;)u=h,h=_;for(;;){if(h===t)break t;if(u===n&&++c===o&&(l=a),u===i&&++d===r&&(s=a),(_=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=_}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(gc={focusedElem:t,selectionRange:n},Wa=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,P=v.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:Qt(e.type,y),P);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(C){Te(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return v=Hf,Hf=!1,v}function ci(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ic(e,n,i)}o=o.next}while(o!==r)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pg(t){var e=t.alternate;e!==null&&(t.alternate=null,pg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Ei],delete e[vc],delete e[by],delete e[vy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mg(t){return t.tag===5||t.tag===3||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ka));else if(r!==4&&(t=t.child,t!==null))for(Rc(t,e,n),t=t.sibling;t!==null;)Rc(t,e,n),t=t.sibling}function Nc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nc(t,e,n),t=t.sibling;t!==null;)Nc(t,e,n),t=t.sibling}var Ke=null,Xt=!1;function Nn(t,e,n){for(n=n.child;n!==null;)gg(t,e,n),n=n.sibling}function gg(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:it||qr(n,e);case 6:var r=Ke,o=Xt;Ke=null,Nn(t,e,n),Ke=r,Xt=o,Ke!==null&&(Xt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Xt?(t=Ke,n=n.stateNode,t.nodeType===8?fs(t.parentNode,n):t.nodeType===1&&fs(t,n),yi(t)):fs(Ke,n.stateNode));break;case 4:r=Ke,o=Xt,Ke=n.stateNode.containerInfo,Xt=!0,Nn(t,e,n),Ke=r,Xt=o;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Ic(n,e,a),o=o.next}while(o!==r)}Nn(t,e,n);break;case 1:if(!it&&(qr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Nn(t,e,n);break;case 21:Nn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Nn(t,e,n),it=r):Nn(t,e,n);break;default:Nn(t,e,n)}}function Vf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ny),e.forEach(function(r){var o=Wy.bind(null,t,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Xt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Xt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(Ke===null)throw Error(I(160));gg(i,a,o),Ke=null,Xt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){Te(o,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_g(e,t),e=e.sibling}function _g(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),an(t),r&4){try{ci(3,t,t.return),Rl(3,t)}catch(y){Te(t,t.return,y)}try{ci(5,t,t.return)}catch(y){Te(t,t.return,y)}}break;case 1:Kt(e,t),an(t),r&512&&n!==null&&qr(n,n.return);break;case 5:if(Kt(e,t),an(t),r&512&&n!==null&&qr(n,n.return),t.flags&32){var o=t.stateNode;try{gi(o,"")}catch(y){Te(t,t.return,y)}}if(r&4&&(o=t.stateNode,o!=null)){var i=t.memoizedProps,a=n!==null?n.memoizedProps:i,l=t.type,s=t.updateQueue;if(t.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Fp(o,i),ic(l,a);var c=ic(l,i);for(a=0;a<s.length;a+=2){var d=s[a],h=s[a+1];d==="style"?Vp(o,h):d==="dangerouslySetInnerHTML"?Hp(o,h):d==="children"?gi(o,h):Ed(o,d,h,c)}switch(l){case"input":ec(o,i);break;case"textarea":$p(o,i);break;case"select":var u=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?eo(o,!!i.multiple,_,!1):u!==!!i.multiple&&(i.defaultValue!=null?eo(o,!!i.multiple,i.defaultValue,!0):eo(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ei]=i}catch(y){Te(t,t.return,y)}}break;case 6:if(Kt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(I(162));o=t.stateNode,i=t.memoizedProps;try{o.nodeValue=i}catch(y){Te(t,t.return,y)}}break;case 3:if(Kt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(e.containerInfo)}catch(y){Te(t,t.return,y)}break;case 4:Kt(e,t),an(t);break;case 13:Kt(e,t),an(t),o=t.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ou=Le())),r&4&&Vf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(it=(c=it)||d,Kt(e,t),it=c):Kt(e,t),an(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&(t.mode&1)!==0)for(B=t,d=t.child;d!==null;){for(h=B=d;B!==null;){switch(u=B,_=u.child,u.tag){case 0:case 11:case 14:case 15:ci(4,u,u.return);break;case 1:qr(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){r=u,n=u.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Te(r,n,y)}}break;case 5:qr(u,u.return);break;case 22:if(u.memoizedState!==null){Wf(h);continue}}_!==null?(_.return=u,B=_):Wf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,s=h.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Up("display",a))}catch(y){Te(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Te(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Kt(e,t),an(t),r&4&&Vf(t);break;case 21:break;default:Kt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mg(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(gi(o,""),r.flags&=-33);var i=Uf(t);Nc(t,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Uf(t);Rc(t,l,a);break;default:throw Error(I(161))}}catch(s){Te(t,t.return,s)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function My(t,e,n){B=t,bg(t)}function bg(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var o=B,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ma;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||it;l=ma;var c=it;if(ma=a,(it=s)&&!c)for(B=o;B!==null;)a=B,s=a.child,a.tag===22&&a.memoizedState!==null?Gf(o):s!==null?(s.return=a,B=s):Gf(o);for(;i!==null;)B=i,bg(i),i=i.sibling;B=o,ma=l,it=c}jf(t)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,B=i):jf(t)}}function jf(t){for(;B!==null;){var e=B;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:it||Rl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var o=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&kf(e,i,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kf(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&yi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}it||e.flags&512&&zc(e)}catch(u){Te(e,e.return,u)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Wf(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Gf(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(s){Te(e,n,s)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var o=e.return;try{r.componentDidMount()}catch(s){Te(e,o,s)}}var i=e.return;try{zc(e)}catch(s){Te(e,i,s)}break;case 5:var a=e.return;try{zc(e)}catch(s){Te(e,a,s)}}}catch(s){Te(e,e.return,s)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var Fy=Math.ceil,il=On.ReactCurrentDispatcher,nu=On.ReactCurrentOwner,Vt=On.ReactCurrentBatchConfig,le=0,Ve=null,Ne=null,Je=0,Tt=0,Qr=or(0),Be=0,Li=null,Er=0,Nl=0,ru=0,di=null,yt=null,ou=0,vo=1/0,bn=null,al=!1,Dc=null,qn=null,ga=!1,Vn=null,ll=0,ui=0,Mc=null,Ra=-1,Na=0;function ht(){return(le&6)!==0?Le():Ra!==-1?Ra:Ra=Le()}function Qn(t){return(t.mode&1)===0?1:(le&2)!==0&&Je!==0?Je&-Je:wy.transition!==null?(Na===0&&(Na=tm()),Na):(t=de,t!==0||(t=window.event,t=t===void 0?16:sm(t.type)),t)}function en(t,e,n,r){if(50<ui)throw ui=0,Mc=null,Error(I(185));ji(t,n,r),((le&2)===0||t!==Ve)&&(t===Ve&&((le&2)===0&&(Nl|=n),Be===4&&Bn(t,Je)),At(t,r),n===1&&le===0&&(e.mode&1)===0&&(vo=Le()+500,Ll&&ir()))}function At(t,e){var n=t.callbackNode;wv(t,e);var r=ja(t,t===Ve?Je:0);if(r===0)n!==null&&ef(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ef(n),e===1)t.tag===0?yy(Yf.bind(null,t)):km(Yf.bind(null,t)),gy(function(){(le&6)===0&&ir()}),n=null;else{switch(nm(r)){case 1:n=Od;break;case 4:n=Zp;break;case 16:n=Va;break;case 536870912:n=em;break;default:n=Va}n=Sg(n,vg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vg(t,e){if(Ra=-1,Na=0,(le&6)!==0)throw Error(I(327));var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var r=ja(t,t===Ve?Je:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=sl(t,r);else{e=r;var o=le;le|=2;var i=wg();(Ve!==t||Je!==e)&&(bn=null,vo=Le()+500,vr(t,e));do try{Hy();break}catch(l){yg(t,l)}while(1);Vd(),il.current=i,le=o,Ne!==null?e=0:(Ve=null,Je=0,e=Be)}if(e!==0){if(e===2&&(o=dc(t),o!==0&&(r=o,e=Fc(t,o))),e===1)throw n=Li,vr(t,0),Bn(t,r),At(t,Le()),n;if(e===6)Bn(t,r);else{if(o=t.current.alternate,(r&30)===0&&!$y(o)&&(e=sl(t,r),e===2&&(i=dc(t),i!==0&&(r=i,e=Fc(t,i))),e===1))throw n=Li,vr(t,0),Bn(t,r),At(t,Le()),n;switch(t.finishedWork=o,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:ur(t,yt,bn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=ou+500-Le(),10<e)){if(ja(t,0)!==0)break;if(o=t.suspendedLanes,(o&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=bc(ur.bind(null,t,yt,bn),e);break}ur(t,yt,bn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,o=-1;0<r;){var a=31-Zt(r);i=1<<a,a=e[a],a>o&&(o=a),r&=~i}if(r=o,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fy(r/1960))-r,10<r){t.timeoutHandle=bc(ur.bind(null,t,yt,bn),r);break}ur(t,yt,bn);break;case 5:ur(t,yt,bn);break;default:throw Error(I(329))}}}return At(t,Le()),t.callbackNode===n?vg.bind(null,t):null}function Fc(t,e){var n=di;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=sl(t,e),t!==2&&(e=yt,yt=n,e!==null&&$c(e)),t}function $c(t){yt===null?yt=t:yt.push.apply(yt,t)}function $y(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!tn(i(),o))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~ru,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function Yf(t){if((le&6)!==0)throw Error(I(327));io();var e=ja(t,0);if((e&1)===0)return At(t,Le()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var r=dc(t);r!==0&&(e=r,n=Fc(t,r))}if(n===1)throw n=Li,vr(t,0),Bn(t,e),At(t,Le()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,yt,bn),At(t,Le()),null}function iu(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(vo=Le()+500,Ll&&ir())}}function Sr(t){Vn!==null&&Vn.tag===0&&(le&6)===0&&io();var e=le;le|=1;var n=Vt.transition,r=de;try{if(Vt.transition=null,de=1,t)return t()}finally{de=r,Vt.transition=n,le=e,(le&6)===0&&ir()}}function au(){Tt=Qr.current,ye(Qr)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,my(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Bd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qa();break;case 3:_o(),ye(xt),ye(lt),qd();break;case 5:Kd(r);break;case 4:_o();break;case 13:ye(Ce);break;case 19:ye(Ce);break;case 10:jd(r.type._context);break;case 22:case 23:au()}n=n.return}if(Ve=t,Ne=t=Xn(t.current,null),Je=Tt=e,Be=0,Li=null,ru=Nl=Er=0,yt=di=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}mr=null}return t}function yg(t,e){do{var n=Ne;try{if(Vd(),La.current=ol,rl){for(var r=Ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}rl=!1}if(Ar=0,He=$e=Ae=null,si=!1,Ti=0,nu.current=null,n===null||n.return===null){Be=1,Li=e,Ne=null;break}e:{var i=t,a=n.return,l=n,s=e;if(e=Je,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,h=d.tag;if((d.mode&1)===0&&(h===0||h===11||h===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Rf(a);if(_!==null){_.flags&=-257,Nf(_,a,l,i,e),_.mode&1&&zf(i,c,e),e=_,s=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(s),e.updateQueue=y}else v.add(s);break e}else{if((e&1)===0){zf(i,c,e),lu();break e}s=Error(I(426))}}else if(we&&l.mode&1){var P=Rf(a);if(P!==null){(P.flags&65536)===0&&(P.flags|=256),Nf(P,a,l,i,e),Hd(bo(s,l));break e}}i=s=bo(s,l),Be!==4&&(Be=2),di===null?di=[i]:di.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var g=rg(i,s,e);Sf(i,g);break e;case 1:l=s;var m=i.type,b=i.stateNode;if((i.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(qn===null||!qn.has(b)))){i.flags|=65536,e&=-e,i.lanes|=e;var C=og(i,l,e);Sf(i,C);break e}}i=i.return}while(i!==null)}Cg(n)}catch(E){e=E,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function wg(){var t=il.current;return il.current=ol,t===null?ol:t}function lu(){(Be===0||Be===3||Be===2)&&(Be=4),Ve===null||(Er&268435455)===0&&(Nl&268435455)===0||Bn(Ve,Je)}function sl(t,e){var n=le;le|=2;var r=wg();(Ve!==t||Je!==e)&&(bn=null,vr(t,e));do try{By();break}catch(o){yg(t,o)}while(1);if(Vd(),le=n,il.current=r,Ne!==null)throw Error(I(261));return Ve=null,Je=0,Be}function By(){for(;Ne!==null;)xg(Ne)}function Hy(){for(;Ne!==null&&!fv();)xg(Ne)}function xg(t){var e=Eg(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?Cg(t):Ne=e,nu.current=null}function Cg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=zy(n,e,Tt),n!==null){Ne=n;return}}else{if(n=Ry(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Ne=null;return}}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Be===0&&(Be=5)}function ur(t,e,n){var r=de,o=Vt.transition;try{Vt.transition=null,de=1,Uy(t,e,n,r)}finally{Vt.transition=o,de=r}return null}function Uy(t,e,n,r){do io();while(Vn!==null);if((le&6)!==0)throw Error(I(327));n=t.finishedWork;var o=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(xv(t,i),t===Ve&&(Ne=Ve=null,Je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ga||(ga=!0,Sg(Va,function(){return io(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Vt.transition,Vt.transition=null;var a=de;de=1;var l=le;le|=4,nu.current=null,Dy(t,n),_g(n,t),sy(gc),Wa=!!mc,gc=mc=null,t.current=n,My(n),hv(),le=l,de=a,Vt.transition=i}else t.current=n;if(ga&&(ga=!1,Vn=t,ll=o),i=t.pendingLanes,i===0&&(qn=null),gv(n.stateNode),At(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)o=e[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(al)throw al=!1,t=Dc,Dc=null,t;return(ll&1)!==0&&t.tag!==0&&io(),i=t.pendingLanes,(i&1)!==0?t===Mc?ui++:(ui=0,Mc=t):ui=0,ir(),null}function io(){if(Vn!==null){var t=nm(ll),e=Vt.transition,n=de;try{if(Vt.transition=null,de=16>t?16:t,Vn===null)var r=!1;else{if(t=Vn,Vn=null,ll=0,(le&6)!==0)throw Error(I(331));var o=le;for(le|=4,B=t.current;B!==null;){var i=B,a=i.child;if((B.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(B=c;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:ci(8,d,i)}var h=d.child;if(h!==null)h.return=d,B=h;else for(;B!==null;){d=B;var u=d.sibling,_=d.return;if(pg(d),d===c){B=null;break}if(u!==null){u.return=_,B=u;break}B=_}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}B=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,B=a;else e:for(;B!==null;){if(i=B,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:ci(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,B=g;break e}B=i.return}}var m=t.current;for(B=m;B!==null;){a=B;var b=a.child;if((a.subtreeFlags&2064)!==0&&b!==null)b.return=a,B=b;else e:for(a=m;B!==null;){if(l=B,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Rl(9,l)}}catch(E){Te(l,l.return,E)}if(l===a){B=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,B=C;break e}B=l.return}}if(le=o,ir(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Sl,t)}catch{}r=!0}return r}finally{de=n,Vt.transition=e}}return!1}function Kf(t,e,n){e=bo(n,e),e=rg(t,e,1),t=Kn(t,e,1),e=ht(),t!==null&&(ji(t,1,e),At(t,e))}function Te(t,e,n){if(t.tag===3)Kf(t,t,n);else for(;e!==null;){if(e.tag===3){Kf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){t=bo(n,t),t=og(e,t,1),e=Kn(e,t,1),t=ht(),e!==null&&(ji(e,1,t),At(e,t));break}}e=e.return}}function Vy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Je&n)===n&&(Be===4||Be===3&&(Je&130023424)===Je&&500>Le()-ou?vr(t,0):ru|=n),At(t,e)}function Ag(t,e){e===0&&((t.mode&1)===0?e=1:(e=aa,aa<<=1,(aa&130023424)===0&&(aa=4194304)));var n=ht();t=Tn(t,e),t!==null&&(ji(t,e,n),At(t,n))}function jy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ag(t,n)}function Wy(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Ag(t,n)}var Eg;Eg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)wt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return wt=!1,Iy(t,e,n);wt=(t.flags&131072)!==0}else wt=!1,we&&(e.flags&1048576)!==0&&Tm(e,Ja,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;za(t,e),t=e.pendingProps;var o=po(e,lt.current);oo(e,n),o=Xd(null,e,r,t,o,n);var i=Jd();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(i=!0,Qa(e)):i=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Gd(e),o.updater=Il,e.stateNode=o,o._reactInternals=e,Ec(e,r,t,n),e=Tc(null,e,r,!0,i,n)):(e.tag=0,we&&i&&$d(e),ft(null,e,o,n),e=e.child),e;case 16:r=e.elementType;e:{switch(za(t,e),t=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=Yy(r),t=Qt(r,t),o){case 0:e=kc(null,e,r,t,n);break e;case 1:e=Ff(null,e,r,t,n);break e;case 11:e=Df(null,e,r,t,n);break e;case 14:e=Mf(null,e,r,Qt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Qt(r,o),kc(t,e,r,o,n);case 1:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Qt(r,o),Ff(t,e,r,o,n);case 3:e:{if(sg(e),t===null)throw Error(I(387));r=e.pendingProps,i=e.memoizedState,o=i.element,Im(t,e),tl(e,r,null,n);var a=e.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){o=bo(Error(I(423)),e),e=$f(t,e,r,n,o);break e}else if(r!==o){o=bo(Error(I(424)),e),e=$f(t,e,r,n,o);break e}else for(Pt=Yn(e.stateNode.containerInfo.firstChild),Ot=e,we=!0,Jt=null,n=Dm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mo(),r===o){e=Pn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return Mm(e),t===null&&xc(e),r=e.type,o=e.pendingProps,i=t!==null?t.memoizedProps:null,a=o.children,_c(r,o)?a=null:i!==null&&_c(r,i)&&(e.flags|=32),lg(t,e),ft(t,e,a,n),e.child;case 6:return t===null&&xc(e),null;case 13:return cg(t,e,n);case 4:return Yd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=go(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Qt(r,o),Df(t,e,r,o,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,o=e.pendingProps,i=e.memoizedProps,a=o.value,ge(Za,r._currentValue),r._currentValue=a,i!==null)if(tn(i.value,a)){if(i.children===o.children&&!xt.current){e=Pn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=An(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Cc(i.return,n,e),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===e.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(I(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Cc(a,n,e),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===e){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ft(t,e,o.children,n),e=e.child}return e;case 9:return o=e.type,r=e.pendingProps.children,oo(e,n),o=jt(o),r=r(o),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,o=Qt(r,e.pendingProps),o=Qt(r.type,o),Mf(t,e,r,o,n);case 15:return ig(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Qt(r,o),za(t,e),e.tag=1,Ct(r)?(t=!0,Qa(e)):t=!1,oo(e,n),Rm(e,r,o),Ec(e,r,o,n),Tc(null,e,r,!0,t,n);case 19:return dg(t,e,n);case 22:return ag(t,e,n)}throw Error(I(156,e.tag))};function Sg(t,e){return Jp(t,e)}function Gy(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new Gy(t,e,n,r)}function su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yy(t){if(typeof t=="function")return su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===Td)return 14}return 2}function Xn(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Da(t,e,n,r,o,i){var a=2;if(r=t,typeof t=="function")su(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Br:return yr(n.children,o,i,e);case Sd:a=8,o|=8;break;case qs:return t=Ut(12,n,e,o|2),t.elementType=qs,t.lanes=i,t;case Qs:return t=Ut(13,n,e,o),t.elementType=Qs,t.lanes=i,t;case Xs:return t=Ut(19,n,e,o),t.elementType=Xs,t.lanes=i,t;case Np:return Dl(n,o,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zp:a=10;break e;case Rp:a=9;break e;case kd:a=11;break e;case Td:a=14;break e;case Mn:a=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ut(a,n,e,o),e.elementType=t,e.type=r,e.lanes=i,e}function yr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function Dl(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=Np,t.lanes=n,t.stateNode={isHidden:!1},t}function ys(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function ws(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ky(t,e,n,r,o){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ts(0),this.expirationTimes=ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function cu(t,e,n,r,o,i,a,l,s){return t=new Ky(t,e,n,l,s),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Ut(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gd(i),t}function qy(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function kg(t){if(!t)return tr;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Ct(n))return Sm(t,n,e)}return e}function Tg(t,e,n,r,o,i,a,l,s){return t=cu(n,r,!0,t,o,i,a,l,s),t.context=kg(null),n=t.current,r=ht(),o=Qn(n),i=An(r,o),i.callback=e!=null?e:null,Kn(n,i,o),t.current.lanes=o,ji(t,o,r),At(t,r),t}function Ml(t,e,n,r){var o=e.current,i=ht(),a=Qn(o);return n=kg(n),e.context===null?e.context=n:e.pendingContext=n,e=An(i,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kn(o,e,a),t!==null&&(en(t,o,a,i),Oa(t,o,a)),a}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function du(t,e){qf(t,e),(t=t.alternate)&&qf(t,e)}function Qy(){return null}var Pg=typeof reportError=="function"?reportError:function(t){console.error(t)};function uu(t){this._internalRoot=t}Fl.prototype.render=uu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ml(t,e,null,null)};Fl.prototype.unmount=uu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Sr(function(){Ml(null,t,null,null)}),e[kn]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=im();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&lm(t)}};function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qf(){}function Xy(t,e,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=cl(a);i.call(c)}}var a=Tg(e,r,t,0,null,!1,!1,"",Qf);return t._reactRootContainer=a,t[kn]=a.current,Ci(t.nodeType===8?t.parentNode:t),Sr(),a}for(;o=t.lastChild;)t.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=cl(s);l.call(c)}}var s=cu(t,0,!1,null,null,!1,!1,"",Qf);return t._reactRootContainer=s,t[kn]=s.current,Ci(t.nodeType===8?t.parentNode:t),Sr(function(){Ml(e,s,n,r)}),s}function Bl(t,e,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=cl(a);l.call(s)}}Ml(e,a,t,o)}else a=Xy(n,e,t,o,r);return cl(a)}rm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(Ld(e,n|1),At(e,Le()),(le&6)===0&&(vo=Le()+500,ir()))}break;case 13:Sr(function(){var r=Tn(t,1);if(r!==null){var o=ht();en(r,t,1,o)}}),du(t,1)}};Id=function(t){if(t.tag===13){var e=Tn(t,134217728);if(e!==null){var n=ht();en(e,t,134217728,n)}du(t,134217728)}};om=function(t){if(t.tag===13){var e=Qn(t),n=Tn(t,e);if(n!==null){var r=ht();en(n,t,e,r)}du(t,e)}};im=function(){return de};am=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};lc=function(t,e,n){switch(e){case"input":if(ec(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var o=Ol(r);if(!o)throw Error(I(90));Mp(r),ec(r,o)}}}break;case"textarea":$p(t,n);break;case"select":e=n.value,e!=null&&eo(t,!!n.multiple,e,!1)}};Gp=iu;Yp=Sr;var Jy={usingClientEntryPoint:!1,Events:[Gi,jr,Ol,jp,Wp,iu]},Mo={findFiberByHostInstance:pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Zy={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qp(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||Qy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{Sl=_a.inject(Zy),dn=_a}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jy;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(e))throw Error(I(200));return qy(t,e,null,n)};zt.createRoot=function(t,e){if(!fu(t))throw Error(I(299));var n=!1,r="",o=Pg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=cu(t,1,!1,null,null,n,!1,r,o),t[kn]=e.current,Ci(t.nodeType===8?t.parentNode:t),new uu(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Qp(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return Sr(t)};zt.hydrate=function(t,e,n){if(!$l(e))throw Error(I(200));return Bl(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!fu(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Pg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Tg(e,null,t,1,n!=null?n:null,o,!1,i,a),t[kn]=e.current,Ci(t),r)for(t=0;t<r.length;t++)n=r[t],o=n._getVersion,o=o(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,o]:e.mutableSourceEagerHydrationData.push(n,o);return new Fl(e)};zt.render=function(t,e,n){if(!$l(e))throw Error(I(200));return Bl(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!$l(t))throw Error(I(40));return t._reactRootContainer?(Sr(function(){Bl(null,null,t,!1,function(){t._reactRootContainer=null,t[kn]=null})}),!0):!1};zt.unstable_batchedUpdates=iu;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$l(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Bl(t,e,n,!1,r)};zt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=zt})(xd);var Og,Xf=xd.exports;Og=Xf.createRoot,Xf.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fe(){return fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fe.apply(this,arguments)}var Re;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Re||(Re={}));const Jf="popstate";function e0(t){t===void 0&&(t={});function e(r,o){let{pathname:i,search:a,hash:l}=r.location;return Ii("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:hn(o)}return n0(e,n,null,t)}function oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function t0(){return Math.random().toString(36).substr(2,8)}function Zf(t){return{usr:t.state,key:t.key}}function Ii(t,e,n,r){return n===void 0&&(n=null),fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ln(e):e,{state:n,key:e&&e.key||r||t0()})}function hn(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ln(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function zi(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:hn(t);return oe(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function n0(t,e,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Re.Pop,s=null;function c(){l=Re.Pop,s&&s({action:l,location:u.location})}function d(_,v){l=Re.Push;let y=Ii(u.location,_,v);n&&n(y,_);let P=Zf(y),g=u.createHref(y);try{a.pushState(P,"",g)}catch{o.location.assign(g)}i&&s&&s({action:l,location:u.location})}function h(_,v){l=Re.Replace;let y=Ii(u.location,_,v);n&&n(y,_);let P=Zf(y),g=u.createHref(y);a.replaceState(P,"",g),i&&s&&s({action:l,location:u.location})}let u={get action(){return l},get location(){return t(o,a)},listen(_){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Jf,c),s=_,()=>{o.removeEventListener(Jf,c),s=null}},createHref(_){return e(o,_)},encodeLocation(_){let v=zi(typeof _=="string"?_:hn(_));return{pathname:v.pathname,search:v.search,hash:v.hash}},push:d,replace:h,go(_){return a.go(_)}};return u}var Qe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Qe||(Qe={}));function r0(t){return t.index===!0}function Lg(t,e,n){return e===void 0&&(e=[]),n===void 0&&(n=new Set),t.map((r,o)=>{let i=[...e,o],a=typeof r.id=="string"?r.id:i.join("-");return oe(r.index!==!0||!r.children,"Cannot specify children on an index route"),oe(!n.has(a),'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),n.add(a),r0(r)?fe({},r,{id:a}):fe({},r,{id:a,children:r.children?Lg(r.children,i,n):void 0})})}function ei(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ln(e):e,o=Rg(r.pathname||"/",n);if(o==null)return null;let i=Ig(t);o0(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=h0(i[l],g0(o));return a}function Ig(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(oe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=En([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ig(i.children,e,d,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:u0(c,i.index),routesMeta:d})};return t.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of zg(i.path))o(i,a,s)}),e}function zg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=zg(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>t.startsWith("/")&&s===""?"/":s)}function o0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:f0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const i0=/^:\w+$/,a0=3,l0=2,s0=1,c0=10,d0=-2,eh=t=>t==="*";function u0(t,e){let n=t.split("/"),r=n.length;return n.some(eh)&&(r+=d0),e&&(r+=l0),n.filter(o=>!eh(o)).reduce((o,i)=>o+(i0.test(i)?a0:i===""?s0:c0),r)}function f0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function h0(t,e){let{routesMeta:n}=t,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=o==="/"?e:e.slice(o.length)||"/",d=p0({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let h=l.route;i.push({params:r,pathname:En([o,d.pathname]),pathnameBase:y0(En([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=En([o,d.pathnameBase]))}return i}function p0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=m0(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,d,h)=>{if(d==="*"){let u=l[h]||"";a=i.slice(0,i.length-u.length).replace(/(.)\/+$/,"$1")}return c[d]=_0(l[h]||"",d),c},{}),pathname:i,pathnameBase:a,pattern:t}}function m0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function g0(t){try{return decodeURI(t)}catch(e){return hu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _0(t,e){try{return decodeURIComponent(t)}catch(n){return hu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Rg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function hu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function b0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:o=""}=typeof t=="string"?Ln(t):t;return{pathname:n?n.startsWith("/")?n:v0(n,e):e,search:w0(r),hash:x0(o)}}function v0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function xs(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hl(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pu(t,e,n,r){r===void 0&&(r=!1);let o;typeof t=="string"?o=Ln(t):(o=fe({},t),oe(!o.pathname||!o.pathname.includes("?"),xs("?","pathname","search",o)),oe(!o.pathname||!o.pathname.includes("#"),xs("#","pathname","hash",o)),oe(!o.search||!o.search.includes("#"),xs("#","search","hash",o)));let i=t===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=n;else{let h=e.length-1;if(a.startsWith("..")){let u=a.split("/");for(;u[0]==="..";)u.shift(),h-=1;o.pathname=u.join("/")}l=h>=0?e[h]:"/"}let s=b0(o,l),c=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const En=t=>t.join("/").replace(/\/\/+/g,"/"),y0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),w0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,x0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class th extends Error{}class C0{constructor(e){this.pendingKeys=new Set,this.subscriber=void 0,oe(e&&typeof e=="object"&&!Array.isArray(e),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((o,i)=>n=i),this.controller=new AbortController;let r=()=>n(new th("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(e).reduce((o,i)=>{let[a,l]=i;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{})}trackPromise(e,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(e);let r=Promise.race([n,this.abortPromise]).then(o=>this.onSettle(r,e,null,o),o=>this.onSettle(r,e,o));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(e,n,r,o){if(this.controller.signal.aborted&&r instanceof th)return this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const i=this.subscriber;return r?(Object.defineProperty(e,"_error",{get:()=>r}),i&&i(!1),Promise.reject(r)):(Object.defineProperty(e,"_data",{get:()=>o}),i&&i(!1),o)}subscribe(e){this.subscriber=e}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let e=this.subscriber;e&&e(!0)}async resolveData(e){let n=!1;if(!this.done){let r=()=>this.cancel();e.addEventListener("abort",r),n=await new Promise(o=>{this.subscribe(i=>{e.removeEventListener("abort",r),(i||this.done)&&o(i)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return oe(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((e,n)=>{let[r,o]=n;return Object.assign(e,{[r]:E0(o)})},{})}}function A0(t){return t instanceof Promise&&t._tracked===!0}function E0(t){if(!A0(t))return t;if(t._error)throw t._error;return t._data}class Ul{constructor(e,n,r,o){o===void 0&&(o=!1),this.status=e,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Ng(t){return t instanceof Ul}const Dg=["post","put","patch","delete"],S0=new Set(Dg),k0=["get",...Dg],T0=new Set(k0),P0=new Set([301,302,303,307,308]),O0=new Set([307,308]),Cs={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},L0={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},I0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z0=!I0;function R0(t){oe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=Lg(t.routes),n=null,r=new Set,o=null,i=null,a=null,l=t.hydrationData!=null,s=ei(e,t.history.location,t.basename),c=null;if(s==null){let A=fr(404,{pathname:t.history.location.pathname}),{matches:T,route:M}=lh(e);s=T,c={[M.id]:A}}let d=!s.some(A=>A.route.loader)||t.hydrationData!=null,h,u={historyAction:t.history.action,location:t.history.location,matches:s,initialized:d,navigation:Cs,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||c,fetchers:new Map},_=Re.Pop,v=!1,y,P=!1,g=!1,m=[],b=[],C=new Map,E=0,O=-1,F=new Map,H=new Set,ne=new Map,$=new Map;function Me(){return n=t.history.listen(A=>{let{action:T,location:M}=A;return L(T,M)}),u.initialized||L(Re.Pop,u.location),h}function We(){n&&n(),r.clear(),y&&y.abort(),u.fetchers.forEach((A,T)=>N(T))}function Ft(A){return r.add(A),()=>r.delete(A)}function Pe(A){u=fe({},u,A),r.forEach(T=>T(u))}function Oe(A,T){var M;let G=u.actionData!=null&&u.navigation.formMethod!=null&&hr(u.navigation.formMethod)&&u.navigation.state==="loading"&&((M=A.state)==null?void 0:M._isRedirect)!==!0,U;T.actionData?Object.keys(T.actionData).length>0?U=T.actionData:U=null:G?U=u.actionData:U=null;let X=T.loaderData?ah(u.loaderData,T.loaderData,T.matches||[],T.errors):u.loaderData;Pe(fe({},T,{actionData:U,loaderData:X,historyAction:_,location:A,initialized:!0,navigation:Cs,revalidation:"idle",restoreScrollPosition:u.navigation.formData?!1:ea(A,T.matches||u.matches),preventScrollReset:v})),P||_===Re.Pop||(_===Re.Push?t.history.push(A,A.state):_===Re.Replace&&t.history.replace(A,A.state)),_=Re.Pop,v=!1,P=!1,g=!1,m=[],b=[]}async function nn(A,T){if(typeof A=="number"){t.history.go(A);return}let{path:M,submission:G,error:U}=nh(A,T),X=Ii(u.location,M,T&&T.state);X=fe({},X,t.history.encodeLocation(X));let ee=T&&T.replace!=null?T.replace:void 0,te=Re.Push;ee===!0?te=Re.Replace:ee===!1||G!=null&&hr(G.formMethod)&&G.formAction===u.location.pathname+u.location.search&&(te=Re.Replace);let J=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0;return await L(te,X,{submission:G,pendingError:U,preventScrollReset:J,replace:T&&T.replace})}function Gt(){if(dt(),Pe({revalidation:"loading"}),u.navigation.state!=="submitting"){if(u.navigation.state==="idle"){L(u.historyAction,u.location,{startUninterruptedRevalidation:!0});return}L(_||u.historyAction,u.navigation.location,{overrideNavigation:u.navigation})}}async function L(A,T,M){y&&y.abort(),y=null,_=A,P=(M&&M.startUninterruptedRevalidation)===!0,Zi(u.location,u.matches),v=(M&&M.preventScrollReset)===!0;let G=M&&M.overrideNavigation,U=ei(e,T,t.basename);if(!U){let ce=fr(404,{pathname:T.pathname}),{matches:Et,route:St}=lh(e);$t(),Oe(T,{matches:Et,loaderData:{},errors:{[St.id]:ce}});return}if($0(u.location,T)){Oe(T,{matches:U});return}y=new AbortController;let X=$o(T,y.signal,M&&M.submission),ee,te;if(M&&M.pendingError)te={[Xr(U).route.id]:M.pendingError};else if(M&&M.submission&&hr(M.submission.formMethod)){let ce=await Y(X,T,M.submission,U,{replace:M.replace});if(ce.shortCircuited)return;ee=ce.pendingActionData,te=ce.pendingActionError,G=fe({state:"loading",location:T},M.submission),X=new Request(X.url,{signal:X.signal})}let{shortCircuited:J,loaderData:Fe,errors:ae}=await q(X,T,U,G,M&&M.submission,M&&M.replace,ee,te);J||(y=null,Oe(T,fe({matches:U},ee?{actionData:ee}:{},{loaderData:Fe,errors:ae})))}async function Y(A,T,M,G,U){dt();let X=fe({state:"submitting",location:T},M);Pe({navigation:X});let ee,te=uh(G,T);if(!te.route.action)ee={type:Qe.error,error:fr(405,{method:A.method,pathname:T.pathname,routeId:te.route.id})};else if(ee=await Fo("action",A,te,G,h.basename),A.signal.aborted)return{shortCircuited:!0};if(ao(ee)){let J;return U&&U.replace!=null?J=U.replace:J=ee.location===u.location.pathname+u.location.search,await ct(u,ee,{submission:M,replace:J}),{shortCircuited:!0}}if(fi(ee)){let J=Xr(G,te.route.id);return(U&&U.replace)!==!0&&(_=Re.Push),{pendingActionData:{},pendingActionError:{[J.route.id]:ee.error}}}if(_r(ee))throw new Error("defer() is not supported in actions");return{pendingActionData:{[te.route.id]:ee.data}}}async function q(A,T,M,G,U,X,ee,te){let J=G;J||(J=fe({state:"loading",location:T,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},U));let Fe=U||(J.formMethod&&J.formAction&&J.formData&&J.formEncType?{formMethod:J.formMethod,formAction:J.formAction,formData:J.formData,formEncType:J.formEncType}:void 0),[ae,ce]=rh(u,M,Fe,T,g,m,b,ee,te,ne);if($t(ze=>!(M&&M.some(Ge=>Ge.route.id===ze))||ae&&ae.some(Ge=>Ge.route.id===ze)),ae.length===0&&ce.length===0)return Oe(T,fe({matches:M,loaderData:{},errors:te||null},ee?{actionData:ee}:{})),{shortCircuited:!0};if(!P){ce.forEach(Ge=>{let[on]=Ge,Yt=u.fetchers.get(on),Ye={state:"loading",data:Yt&&Yt.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(on,Ye)});let ze=ee||u.actionData;Pe(fe({navigation:J},ze?Object.keys(ze).length===0?{actionData:null}:{actionData:ze}:{},ce.length>0?{fetchers:new Map(u.fetchers)}:{}))}O=++E,ce.forEach(ze=>{let[Ge]=ze;return C.set(Ge,y)});let{results:Et,loaderResults:St,fetcherResults:zn}=await Se(u.matches,M,ae,ce,A);if(A.signal.aborted)return{shortCircuited:!0};ce.forEach(ze=>{let[Ge]=ze;return C.delete(Ge)});let Rn=sh(Et);if(Rn)return await ct(u,Rn,{replace:X}),{shortCircuited:!0};let{loaderData:zr,errors:gn}=ih(u,M,ae,St,te,ce,zn,$);$.forEach((ze,Ge)=>{ze.subscribe(on=>{(on||ze.done)&&$.delete(Ge)})}),xe();let rn=pe(O);return fe({loaderData:zr,errors:gn},rn||ce.length>0?{fetchers:new Map(u.fetchers)}:{})}function ue(A){return u.fetchers.get(A)||L0}function _e(A,T,M,G){if(z0)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");C.has(A)&&Q(A);let U=ei(e,M,t.basename);if(!U){S(A,T,fr(404,{pathname:M}));return}let{path:X,submission:ee}=nh(M,G,!0),te=uh(U,X);if(ee&&hr(ee.formMethod)){_t(A,T,X,te,U,ee);return}ne.set(A,[X,te,U]),et(A,T,X,te,U,ee)}async function _t(A,T,M,G,U,X){if(dt(),ne.delete(A),!G.route.action){let x=fr(405,{method:X.formMethod,pathname:M,routeId:T});S(A,T,x);return}let ee=u.fetchers.get(A),te=fe({state:"submitting"},X,{data:ee&&ee.data," _hasFetcherDoneAnything ":!0});u.fetchers.set(A,te),Pe({fetchers:new Map(u.fetchers)});let J=new AbortController,Fe=$o(M,J.signal,X);C.set(A,J);let ae=await Fo("action",Fe,G,U,h.basename);if(Fe.signal.aborted){C.get(A)===J&&C.delete(A);return}if(ao(ae)){C.delete(A),H.add(A);let x=fe({state:"loading"},X,{data:void 0," _hasFetcherDoneAnything ":!0});return u.fetchers.set(A,x),Pe({fetchers:new Map(u.fetchers)}),ct(u,ae,{isFetchActionRedirect:!0})}if(fi(ae)){S(A,T,ae.error);return}_r(ae)&&oe(!1,"defer() is not supported in actions");let ce=u.navigation.location||u.location,Et=$o(ce,J.signal),St=u.navigation.state!=="idle"?ei(e,u.navigation.location,t.basename):u.matches;oe(St,"Didn't find any matches after fetcher action");let zn=++E;F.set(A,zn);let Rn=fe({state:"loading",data:ae.data},X,{" _hasFetcherDoneAnything ":!0});u.fetchers.set(A,Rn);let[zr,gn]=rh(u,St,X,ce,g,m,b,{[G.route.id]:ae.data},void 0,ne);gn.filter(x=>{let[z]=x;return z!==A}).forEach(x=>{let[z]=x,R=u.fetchers.get(z),k={state:"loading",data:R&&R.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(z,k),C.set(z,J)}),Pe({fetchers:new Map(u.fetchers)});let{results:rn,loaderResults:ze,fetcherResults:Ge}=await Se(u.matches,St,zr,gn,Et);if(J.signal.aborted)return;F.delete(A),C.delete(A),gn.forEach(x=>{let[z]=x;return C.delete(z)});let on=sh(rn);if(on)return ct(u,on);let{loaderData:Yt,errors:Ye}=ih(u,u.matches,zr,ze,void 0,gn,Ge,$),p={state:"idle",data:ae.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(A,p);let f=pe(zn);u.navigation.state==="loading"&&zn>O?(oe(_,"Expected pending action"),y&&y.abort(),Oe(u.navigation.location,{matches:St,loaderData:Yt,errors:Ye,fetchers:new Map(u.fetchers)})):(Pe(fe({errors:Ye,loaderData:ah(u.loaderData,Yt,St,Ye)},f?{fetchers:new Map(u.fetchers)}:{})),g=!1)}async function et(A,T,M,G,U,X){let ee=u.fetchers.get(A),te=fe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},X,{data:ee&&ee.data," _hasFetcherDoneAnything ":!0});u.fetchers.set(A,te),Pe({fetchers:new Map(u.fetchers)});let J=new AbortController,Fe=$o(M,J.signal);C.set(A,J);let ae=await Fo("loader",Fe,G,U,h.basename);if(_r(ae)&&(ae=await Bg(ae,Fe.signal,!0)||ae),C.get(A)===J&&C.delete(A),Fe.signal.aborted)return;if(ao(ae)){await ct(u,ae);return}if(fi(ae)){let Et=Xr(u.matches,T);u.fetchers.delete(A),Pe({fetchers:new Map(u.fetchers),errors:{[Et.route.id]:ae.error}});return}oe(!_r(ae),"Unhandled fetcher deferred data");let ce={state:"idle",data:ae.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(A,ce),Pe({fetchers:new Map(u.fetchers)})}async function ct(A,T,M){var G;let{submission:U,replace:X,isFetchActionRedirect:ee}=M===void 0?{}:M;T.revalidate&&(g=!0);let te=Ii(A.location,T.location,fe({_isRedirect:!0},ee?{_isFetchActionRedirect:!0}:{}));if(oe(te,"Expected a location on the redirect navigation"),typeof((G=window)==null?void 0:G.location)<"u"){let St=zi(T.location).origin;if(window.location.origin!==St){X?window.location.replace(T.location):window.location.assign(T.location);return}}y=null;let J=X===!0?Re.Replace:Re.Push,{formMethod:Fe,formAction:ae,formEncType:ce,formData:Et}=A.navigation;!U&&Fe&&ae&&Et&&ce&&(U={formMethod:Fe,formAction:ae,formEncType:ce,formData:Et}),O0.has(T.status)&&U&&hr(U.formMethod)?await L(J,te,{submission:fe({},U,{formAction:T.location})}):await L(J,te,{overrideNavigation:{state:"loading",location:te,formMethod:U?U.formMethod:void 0,formAction:U?U.formAction:void 0,formEncType:U?U.formEncType:void 0,formData:U?U.formData:void 0}})}async function Se(A,T,M,G,U){let X=await Promise.all([...M.map(J=>Fo("loader",U,J,T,h.basename)),...G.map(J=>{let[,Fe,ae,ce]=J;return Fo("loader",$o(Fe,U.signal),ae,ce,h.basename)})]),ee=X.slice(0,M.length),te=X.slice(M.length);return await Promise.all([ch(A,M,ee,U.signal,!1,u.loaderData),ch(A,G.map(J=>{let[,,Fe]=J;return Fe}),te,U.signal,!0)]),{results:X,loaderResults:ee,fetcherResults:te}}function dt(){g=!0,m.push(...$t()),ne.forEach((A,T)=>{C.has(T)&&(b.push(T),Q(T))})}function S(A,T,M){let G=Xr(u.matches,T);N(A),Pe({errors:{[G.route.id]:M},fetchers:new Map(u.fetchers)})}function N(A){C.has(A)&&Q(A),ne.delete(A),F.delete(A),H.delete(A),u.fetchers.delete(A)}function Q(A){let T=C.get(A);oe(T,"Expected fetch controller: "+A),T.abort(),C.delete(A)}function be(A){for(let T of A){let G={state:"idle",data:ue(T).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(T,G)}}function xe(){let A=[];for(let T of H){let M=u.fetchers.get(T);oe(M,"Expected fetcher: "+T),M.state==="loading"&&(H.delete(T),A.push(T))}be(A)}function pe(A){let T=[];for(let[M,G]of F)if(G<A){let U=u.fetchers.get(M);oe(U,"Expected fetcher: "+M),U.state==="loading"&&(Q(M),F.delete(M),T.push(M))}return be(T),T.length>0}function $t(A){let T=[];return $.forEach((M,G)=>{(!A||A(G))&&(M.cancel(),T.push(G),$.delete(G))}),T}function lr(A,T,M){if(o=A,a=T,i=M||(G=>G.key),!l&&u.navigation===Cs){l=!0;let G=ea(u.location,u.matches);G!=null&&Pe({restoreScrollPosition:G})}return()=>{o=null,a=null,i=null}}function Zi(A,T){if(o&&i&&a){let M=T.map(U=>dh(U,u.loaderData)),G=i(A,M)||A.key;o[G]=a()}}function ea(A,T){if(o&&i&&a){let M=T.map(X=>dh(X,u.loaderData)),G=i(A,M)||A.key,U=o[G];if(typeof U=="number")return U}return null}return h={get basename(){return t.basename},get state(){return u},get routes(){return e},initialize:Me,subscribe:Ft,enableScrollRestoration:lr,navigate:nn,fetch:_e,revalidate:Gt,createHref:A=>t.history.createHref(A),encodeLocation:A=>t.history.encodeLocation(A),getFetcher:ue,deleteFetcher:N,dispose:We,_internalFetchControllers:C,_internalActiveDeferreds:$},h}function N0(t){return t!=null&&"formData"in t}function nh(t,e,n){n===void 0&&(n=!1);let r=typeof t=="string"?t:hn(t);if(!e||!N0(e))return{path:r};if(e.formMethod&&!H0(e.formMethod))return{path:r,error:fr(405,{method:e.formMethod})};let o;if(e.formData&&(o={formMethod:e.formMethod||"get",formAction:$g(r),formEncType:e&&e.formEncType||"application/x-www-form-urlencoded",formData:e.formData},hr(o.formMethod)))return{path:r,submission:o};let i=Ln(r);try{let a=Fg(e.formData);n&&i.search&&Hg(i.search)&&a.append("index",""),i.search="?"+a}catch{return{path:r,error:fr(400)}}return{path:hn(i),submission:o}}function D0(t,e){let n=t;if(e){let r=t.findIndex(o=>o.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function rh(t,e,n,r,o,i,a,l,s,c){let d=s?Object.values(s)[0]:l?Object.values(l)[0]:void 0,h=s?Object.keys(s)[0]:void 0,_=D0(e,h).filter((y,P)=>y.route.loader!=null&&(M0(t.loaderData,t.matches[P],y)||i.some(g=>g===y.route.id)||oh(t.location,t.matches[P],n,r,y,o,d))),v=[];return c&&c.forEach((y,P)=>{let[g,m,b]=y;a.includes(P)?v.push([P,g,m,b]):o&&oh(g,m,n,g,m,o,d)&&v.push([P,g,m,b])}),[_,v]}function M0(t,e,n){let r=!e||n.route.id!==e.route.id,o=t[n.route.id]===void 0;return r||o}function Mg(t,e){let n=t.route.path;return t.pathname!==e.pathname||n&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function oh(t,e,n,r,o,i,a){let l=zi(t),s=e.params,c=zi(r),d=o.params,h=Mg(e,o)||l.toString()===c.toString()||l.search!==c.search||i;if(o.route.shouldRevalidate){let u=o.route.shouldRevalidate(fe({currentUrl:l,currentParams:s,nextUrl:c,nextParams:d},n,{actionResult:a,defaultShouldRevalidate:h}));if(typeof u=="boolean")return u}return h}async function Fo(t,e,n,r,o,i,a,l){o===void 0&&(o="/"),i===void 0&&(i=!1),a===void 0&&(a=!1);let s,c,d,h=new Promise((_,v)=>d=v),u=()=>d();e.signal.addEventListener("abort",u);try{let _=n.route[t];oe(_,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),c=await Promise.race([_({request:e,params:n.params,context:l}),h]),oe(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(_){s=Qe.error,c=_}finally{e.signal.removeEventListener("abort",u)}if(B0(c)){let _=c.status;if(P0.has(_)){let P=c.headers.get("Location");if(oe(P,"Redirects returned/thrown from loaders/actions must have a Location header"),!(/^[a-z+]+:\/\//i.test(P)||P.startsWith("//"))){let m=r.slice(0,r.indexOf(n)+1),b=Hl(m).map(E=>E.pathnameBase),C=pu(P,b,new URL(e.url).pathname);if(oe(hn(C),"Unable to resolve redirect location: "+P),o){let E=C.pathname;C.pathname=E==="/"?o:En([o,E])}P=hn(C)}if(i)throw c.headers.set("Location",P),c;return{type:Qe.redirect,status:_,location:P,revalidate:c.headers.get("X-Remix-Revalidate")!==null}}if(a)throw{type:s||Qe.data,response:c};let v,y=c.headers.get("Content-Type");return y&&/\bapplication\/json\b/.test(y)?v=await c.json():v=await c.text(),s===Qe.error?{type:s,error:new Ul(_,c.statusText,v),headers:c.headers}:{type:Qe.data,data:v,statusCode:c.status,headers:c.headers}}return s===Qe.error?{type:s,error:c}:c instanceof C0?{type:Qe.deferred,deferredData:c}:{type:Qe.data,data:c}}function $o(t,e,n){let r=zi($g(t)).toString(),o={signal:e};if(n&&hr(n.formMethod)){let{formMethod:i,formEncType:a,formData:l}=n;o.method=i.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?Fg(l):l}return new Request(r,o)}function Fg(t){let e=new URLSearchParams;for(let[n,r]of t.entries())oe(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),e.append(n,r);return e}function F0(t,e,n,r,o){let i={},a=null,l,s=!1,c={};return n.forEach((d,h)=>{let u=e[h].route.id;if(oe(!ao(d),"Cannot handle redirect results in processLoaderData"),fi(d)){let _=Xr(t,u),v=d.error;r&&(v=Object.values(r)[0],r=void 0),a=a||{},a[_.route.id]==null&&(a[_.route.id]=v),i[u]=void 0,s||(s=!0,l=Ng(d.error)?d.error.status:500),d.headers&&(c[u]=d.headers)}else _r(d)?(o&&o.set(u,d.deferredData),i[u]=d.deferredData.data):(i[u]=d.data,d.statusCode!=null&&d.statusCode!==200&&!s&&(l=d.statusCode),d.headers&&(c[u]=d.headers))}),r&&(a=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:c}}function ih(t,e,n,r,o,i,a,l){let{loaderData:s,errors:c}=F0(e,n,r,o,l);for(let d=0;d<i.length;d++){let[h,,u]=i[d];oe(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let _=a[d];if(fi(_)){let v=Xr(t.matches,u.route.id);c&&c[v.route.id]||(c=fe({},c,{[v.route.id]:_.error})),t.fetchers.delete(h)}else{if(ao(_))throw new Error("Unhandled fetcher revalidation redirect");if(_r(_))throw new Error("Unhandled fetcher deferred data");{let v={state:"idle",data:_.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(h,v)}}}return{loaderData:s,errors:c}}function ah(t,e,n,r){let o=fe({},e);for(let i of n){let a=i.route.id;if(e.hasOwnProperty(a)?e[a]!==void 0&&(o[a]=e[a]):t[a]!==void 0&&(o[a]=t[a]),r&&r.hasOwnProperty(a))break}return o}function Xr(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function lh(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function fr(t,e){let{pathname:n,routeId:r,method:o}=e===void 0?{}:e,i="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(i="Bad Request",o&&n&&r?a="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a="Cannot submit binary form data using GET"):t===403?(i="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(i="Not Found",a='No route matches URL "'+n+'"'):t===405&&(i="Method Not Allowed",o&&n&&r?a="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(a='Invalid request method "'+o.toUpperCase()+'"')),new Ul(t||500,i,new Error(a),!0)}function sh(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ao(n))return n}}function $g(t){let e=typeof t=="string"?Ln(t):t;return hn(fe({},e,{hash:""}))}function $0(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function _r(t){return t.type===Qe.deferred}function fi(t){return t.type===Qe.error}function ao(t){return(t&&t.type)===Qe.redirect}function B0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function H0(t){return T0.has(t)}function hr(t){return S0.has(t)}async function ch(t,e,n,r,o,i){for(let a=0;a<n.length;a++){let l=n[a],s=e[a],c=t.find(h=>h.route.id===s.route.id),d=c!=null&&!Mg(c,s)&&(i&&i[s.route.id])!==void 0;_r(l)&&(o||d)&&await Bg(l,r,o).then(h=>{h&&(n[a]=h||n[a])})}}async function Bg(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Qe.data,data:t.deferredData.unwrappedData}}catch(o){return{type:Qe.error,error:o}}return{type:Qe.data,data:t.deferredData.data}}}function Hg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function dh(t,e){let{route:n,pathname:r,params:o}=t;return{id:n.id,pathname:r,params:o,data:e[n.id],handle:n.handle}}function uh(t,e){let n=typeof e=="string"?Ln(e).search:e.search;if(t[t.length-1].route.index&&Hg(n||""))return t[t.length-1];let r=Hl(t);return r[r.length-1]}var Vl={exports:{}},jl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=W.exports,V0=Symbol.for("react.element"),j0=Symbol.for("react.fragment"),W0=Object.prototype.hasOwnProperty,G0=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y0={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)W0.call(e,r)&&!Y0.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:V0,type:t,key:i,ref:a,props:o,_owner:G0.current}}jl.Fragment=j0;jl.jsx=Ug;jl.jsxs=Ug;(function(t){t.exports=jl})(Vl);const K0=Vl.exports.Fragment,j=Vl.exports.jsx,qe=Vl.exports.jsxs;/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dl.apply(this,arguments)}function q0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Q0=typeof Object.is=="function"?Object.is:q0,{useState:X0,useEffect:J0,useLayoutEffect:Z0,useDebugValue:ew}=Lt;function tw(t,e,n){const r=e(),[{inst:o},i]=X0({inst:{value:r,getSnapshot:e}});return Z0(()=>{o.value=r,o.getSnapshot=e,As(o)&&i({inst:o})},[t,r,e]),J0(()=>(As(o)&&i({inst:o}),t(()=>{As(o)&&i({inst:o})})),[t]),ew(r),r}function As(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!Q0(n,r)}catch{return!0}}function nw(t,e,n){return e()}const rw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ow=!rw,iw=ow?nw:tw,aw="useSyncExternalStore"in Lt?(t=>t.useSyncExternalStore)(Lt):iw,lw=W.exports.createContext(null),Vg=W.exports.createContext(null),Wl=W.exports.createContext(null),Ki=W.exports.createContext(null),Gl=W.exports.createContext(null),Or=W.exports.createContext({outlet:null,matches:[]}),jg=W.exports.createContext(null);function sw(t,e){let{relative:n}=e===void 0?{}:e;qi()||oe(!1);let{basename:r,navigator:o}=W.exports.useContext(Ki),{hash:i,pathname:a,search:l}=mu(t,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:En([r,a])),o.createHref({pathname:s,search:l,hash:i})}function qi(){return W.exports.useContext(Gl)!=null}function To(){return qi()||oe(!1),W.exports.useContext(Gl).location}function cw(){qi()||oe(!1);let{basename:t,navigator:e}=W.exports.useContext(Ki),{matches:n}=W.exports.useContext(Or),{pathname:r}=To(),o=JSON.stringify(Hl(n).map(l=>l.pathnameBase)),i=W.exports.useRef(!1);return W.exports.useEffect(()=>{i.current=!0}),W.exports.useCallback(function(l,s){if(s===void 0&&(s={}),!i.current)return;if(typeof l=="number"){e.go(l);return}let c=pu(l,JSON.parse(o),r,s.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:En([t,c.pathname])),(s.replace?e.replace:e.push)(c,s.state,s)},[t,e,o,r])}const dw=W.exports.createContext(null);function uw(t){let e=W.exports.useContext(Or).outlet;return e&&j(dw.Provider,{value:t,children:e})}function mu(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=W.exports.useContext(Or),{pathname:o}=To(),i=JSON.stringify(Hl(r).map(a=>a.pathnameBase));return W.exports.useMemo(()=>pu(t,JSON.parse(i),o,n==="path"),[t,i,o,n])}function fw(t,e){qi()||oe(!1);let{navigator:n}=W.exports.useContext(Ki),r=W.exports.useContext(Wl),{matches:o}=W.exports.useContext(Or),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=To(),c;if(e){var d;let y=typeof e=="string"?Ln(e):e;l==="/"||((d=y.pathname)==null?void 0:d.startsWith(l))||oe(!1),c=y}else c=s;let h=c.pathname||"/",u=l==="/"?h:h.slice(l.length)||"/",_=ei(t,{pathname:u}),v=gw(_&&_.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:En([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:En([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,r||void 0);return e&&v?j(Gl.Provider,{value:{location:dl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Re.Pop},children:v}):v}function hw(){let t=yw(),e=Ng(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return qe(K0,{children:[j("h2",{children:"Unhandled Thrown Error!"}),j("h3",{style:{fontStyle:"italic"},children:e}),n?j("pre",{style:o,children:n}):null,j("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),qe("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",j("code",{style:i,children:"errorElement"})," props on\xA0",j("code",{style:i,children:"<Route>"})]})]})}class pw extends W.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?j(Or.Provider,{value:this.props.routeContext,children:j(jg.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function mw(t){let{routeContext:e,match:n,children:r}=t,o=W.exports.useContext(lw);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),j(Or.Provider,{value:e,children:r})}function gw(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||oe(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,l)=>{let s=a.route.id?o==null?void 0:o[a.route.id]:null,c=n?a.route.errorElement||j(hw,{}):null,d=e.concat(r.slice(0,l+1)),h=()=>j(mw,{match:a,routeContext:{outlet:i,matches:d},children:s?c:a.route.element!==void 0?a.route.element:i});return n&&(a.route.errorElement||l===0)?j(pw,{location:n.location,component:c,error:s,children:h(),routeContext:{outlet:null,matches:d}}):h()},null)}var fh;(function(t){t.UseRevalidator="useRevalidator"})(fh||(fh={}));var ul;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ul||(ul={}));function _w(t){let e=W.exports.useContext(Wl);return e||oe(!1),e}function bw(t){let e=W.exports.useContext(Or);return e||oe(!1),e}function vw(t){let e=bw(),n=e.matches[e.matches.length-1];return n.route.id||oe(!1),n.route.id}function yw(){var t;let e=W.exports.useContext(jg),n=_w(ul.UseRouteError),r=vw(ul.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function ww(t){let{fallbackElement:e,router:n}=t,r=aw(n.subscribe,()=>n.state,()=>n.state),o=W.exports.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:a=>n.navigate(a),push:(a,l,s)=>n.navigate(a,{state:l,preventScrollReset:s==null?void 0:s.preventScrollReset}),replace:(a,l,s)=>n.navigate(a,{replace:!0,state:l,preventScrollReset:s==null?void 0:s.preventScrollReset})}),[n]),i=n.basename||"/";return j(Vg.Provider,{value:{router:n,navigator:o,static:!1,basename:i},children:j(Wl.Provider,{value:r,children:j(Aw,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o,children:n.state.initialized?j(Ew,{}):e})})})}function xw(t){return uw(t.context)}function Cw(t){oe(!1)}function Aw(t){let{basename:e="/",children:n=null,location:r,navigationType:o=Re.Pop,navigator:i,static:a=!1}=t;qi()&&oe(!1);let l=e.replace(/^\/*/,"/"),s=W.exports.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=Ln(r));let{pathname:c="/",search:d="",hash:h="",state:u=null,key:_="default"}=r,v=W.exports.useMemo(()=>{let y=Rg(c,l);return y==null?null:{pathname:y,search:d,hash:h,state:u,key:_}},[l,c,d,h,u,_]);return v==null?null:j(Ki.Provider,{value:s,children:j(Gl.Provider,{children:n,value:{location:v,navigationType:o}})})}function Ew(t){let{children:e,location:n}=t,r=W.exports.useContext(Vg),o=r&&!e?r.router.routes:Bc(e);return fw(o,n)}var hh;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(hh||(hh={}));new Promise(()=>{});function Bc(t,e){e===void 0&&(e=[]);let n=[];return W.exports.Children.forEach(t,(r,o)=>{if(!W.exports.isValidElement(r))return;if(r.type===W.exports.Fragment){n.push.apply(n,Bc(r.props.children,e));return}r.type!==Cw&&oe(!1),!r.props.index||!r.props.children||oe(!1);let i=[...e,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Bc(r.props.children,i)),n.push(a)}),n}function Wg(t){return t.map(e=>{let n=dl({},e);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=Wg(n.children)),n})}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hc(){return Hc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hc.apply(this,arguments)}function Gg(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function Sw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kw(t,e){return t.button===0&&(!e||e==="_self")&&!Sw(t)}const Tw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Pw=["aria-current","caseSensitive","className","end","style","to","children"];function Ow(t,e){return R0({basename:e==null?void 0:e.basename,history:e0({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||Lw(),routes:Wg(t)}).initialize()}function Lw(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Hc({},e,{errors:Iw(e.errors)})),e}function Iw(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,o]of e)if(o&&o.__type==="RouteErrorResponse")n[r]=new Ul(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let i=new Error(o.message);i.stack="",n[r]=i}else n[r]=o;return n}const zw=W.exports.forwardRef(function(e,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:c,preventScrollReset:d}=e,h=Gg(e,Tw),u=sw(c,{relative:o}),_=Nw(c,{replace:a,state:l,target:s,preventScrollReset:d,relative:o});function v(y){r&&r(y),y.defaultPrevented||_(y)}return j("a",{...h,href:u,onClick:i?r:v,ref:n,target:s})}),Rw=W.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,children:c}=e,d=Gg(e,Pw),h=mu(s,{relative:d.relative}),u=To(),_=W.exports.useContext(Wl),{navigator:v}=W.exports.useContext(Ki),y=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,P=u.pathname,g=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;o||(P=P.toLowerCase(),g=g?g.toLowerCase():null,y=y.toLowerCase());let m=P===y||!a&&P.startsWith(y)&&P.charAt(y.length)==="/",b=g!=null&&(g===y||!a&&g.startsWith(y)&&g.charAt(y.length)==="/"),C=m?r:void 0,E;typeof i=="function"?E=i({isActive:m,isPending:b}):E=[i,m?"active":null,b?"pending":null].filter(Boolean).join(" ");let O=typeof l=="function"?l({isActive:m,isPending:b}):l;return j(zw,{...d,"aria-current":C,className:E,ref:n,style:O,to:s,children:typeof c=="function"?c({isActive:m,isPending:b}):c})});var ph;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(ph||(ph={}));var mh;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mh||(mh={}));function Nw(t,e){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=e===void 0?{}:e,l=cw(),s=To(),c=mu(t,{relative:a});return W.exports.useCallback(d=>{if(kw(d,n)){d.preventDefault();let h=r!==void 0?r:hn(s)===hn(c);l(t,{replace:h,state:o,preventScrollReset:i,relative:a})}},[s,l,c,r,o,n,t,i,a])}const Dw="modulepreload",Mw=function(t,e){return new URL(t,e).href},gh={},Fw=function(e,n,r){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Mw(i,r),i in gh)return;gh[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const h=o[d];if(h.href===i&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Dw,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function Yg(t){const e=`${t}=`;return document.cookie.split(/;[ ]?/).filter(n=>n.startsWith(e)).map(n=>n.slice(e.length))[0]}const $w="X-CSRF-Token",Bw="csrfToken",Hw="XSRF-TOKEN";function Kg(t){if(t){const e=t.content;if(e&&e.toLowerCase()!=="undefined")return e}}function Uw(t){const e=t.head.querySelector('meta[name="_csrf_header"]');return Kg(e)}function Vw(t){const e=t.head.querySelector('meta[name="_csrf"]');return Kg(e)}function jw(t){const e=Uw(t);let n=Yg(Hw);(!n||n.length===0)&&(n=Vw(t));const r={};return n&&e&&(r._csrf=n,r._csrf_header=e),r}function qg(t){const e={},n=jw(t);return n._csrf&&n._csrf_header?e[n._csrf_header]=n._csrf:e[$w]=Yg(Bw)||"",e}var Es,at;(function(t){t.CONNECTED="connected",t.LOADING="loading",t.RECONNECTING="reconnecting",t.CONNECTION_LOST="connection-lost"})(at||(at={}));class Ww{constructor(e){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=e,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(n=>{var r;(r=n==null?void 0:n.active)===null||r===void 0||r.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(e){this.stateChangeListeners.add(e)}removeStateChangeListener(e){this.stateChangeListeners.delete(e)}loadingStarted(){this.state=at.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(at.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(at.CONNECTION_LOST)}decreaseLoadingCount(e){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=e))}get state(){return this.connectionState}set state(e){if(e!==this.connectionState){const n=this.connectionState;this.connectionState=e,this.loadingCount=0;for(const r of this.stateChangeListeners)r(n,this.connectionState)}}get online(){return this.connectionState===at.CONNECTED||this.connectionState===at.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(e){typeof e.data=="object"&&e.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(e.data.result===!0&&(this.state=at.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const ba=window;!((Es=ba.Vaadin)===null||Es===void 0)&&Es.connectionState||(ba.Vaadin=ba.Vaadin||{},ba.Vaadin.connectionState=new Ww(navigator.onLine?at.CONNECTED:at.CONNECTION_LOST));function Nt(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ma=window,gu=Ma.ShadowRoot&&(Ma.ShadyCSS===void 0||Ma.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_u=Symbol(),_h=new WeakMap;class bu{constructor(e,n,r){if(this._$cssResult$=!0,r!==_u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(gu&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=_h.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&_h.set(n,e))}return e}toString(){return this.cssText}}const Gw=t=>new bu(typeof t=="string"?t:t+"",void 0,_u),Z=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new bu(n,t,_u)},Yw=(t,e)=>{gu?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),o=Ma.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)})},bh=gu?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return Gw(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ss;const fl=window,vh=fl.trustedTypes,Kw=vh?vh.emptyScript:"",yh=fl.reactiveElementPolyfillSupport,Uc={toAttribute(t,e){switch(e){case Boolean:t=t?Kw:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Qg=(t,e)=>e!==t&&(e==e||t==t),ks={attribute:!0,type:String,converter:Uc,reflect:!1,hasChanged:Qg};class Fr extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const o=this._$Ep(r,n);o!==void 0&&(this._$Ev.set(o,r),e.push(o))}),e}static createProperty(e,n=ks){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(o){const i=this[e];this[n]=o,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ks}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of r)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)n.unshift(bh(o))}else e!==void 0&&n.push(bh(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Yw(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=ks){var o;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const a=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:Uc).toAttribute(n,r.type);this._$El=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(e,n){var r;const o=this.constructor,i=o._$Ev.get(e);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?a.converter:Uc;this._$El=i,this[i]=l.fromAttribute(n,a.type),this._$El=null}}requestUpdate(e,n,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Qg)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}Fr.finalized=!0,Fr.elementProperties=new Map,Fr.elementStyles=[],Fr.shadowRootOptions={mode:"open"},yh==null||yh({ReactiveElement:Fr}),((Ss=fl.reactiveElementVersions)!==null&&Ss!==void 0?Ss:fl.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ts;const hl=window,yo=hl.trustedTypes,wh=yo?yo.createPolicy("lit-html",{createHTML:t=>t}):void 0,Hn=`lit$${(Math.random()+"").slice(9)}$`,Xg="?"+Hn,qw=`<${Xg}>`,wo=document,Ri=(t="")=>wo.createComment(t),Ni=t=>t===null||typeof t!="object"&&typeof t!="function",Jg=Array.isArray,Qw=t=>Jg(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Bo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xh=/-->/g,Ch=/>/g,cr=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ah=/'/g,Eh=/"/g,Zg=/^(?:script|style|textarea|title)$/i,Xw=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Jw=Xw(1),kr=Symbol.for("lit-noChange"),Ue=Symbol.for("lit-nothing"),Sh=new WeakMap,lo=wo.createTreeWalker(wo,129,null,!1),Zw=(t,e)=>{const n=t.length-1,r=[];let o,i=e===2?"<svg>":"",a=Bo;for(let s=0;s<n;s++){const c=t[s];let d,h,u=-1,_=0;for(;_<c.length&&(a.lastIndex=_,h=a.exec(c),h!==null);)_=a.lastIndex,a===Bo?h[1]==="!--"?a=xh:h[1]!==void 0?a=Ch:h[2]!==void 0?(Zg.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=cr):h[3]!==void 0&&(a=cr):a===cr?h[0]===">"?(a=o!=null?o:Bo,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,d=h[1],a=h[3]===void 0?cr:h[3]==='"'?Eh:Ah):a===Eh||a===Ah?a=cr:a===xh||a===Ch?a=Bo:(a=cr,o=void 0);const v=a===cr&&t[s+1].startsWith("/>")?" ":"";i+=a===Bo?c+qw:u>=0?(r.push(d),c.slice(0,u)+"$lit$"+c.slice(u)+Hn+v):c+Hn+(u===-2?(r.push(void 0),s):v)}const l=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[wh!==void 0?wh.createHTML(l):l,r]};class Di{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,a=0;const l=e.length-1,s=this.parts,[c,d]=Zw(e,n);if(this.el=Di.createElement(c,r),lo.currentNode=this.el.content,n===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(o=lo.nextNode())!==null&&s.length<l;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(Hn)){const _=d[a++];if(h.push(u),_!==void 0){const v=o.getAttribute(_.toLowerCase()+"$lit$").split(Hn),y=/([.?@])?(.*)/.exec(_);s.push({type:1,index:i,name:y[2],strings:v,ctor:y[1]==="."?tx:y[1]==="?"?rx:y[1]==="@"?ox:Yl})}else s.push({type:6,index:i})}for(const u of h)o.removeAttribute(u)}if(Zg.test(o.tagName)){const h=o.textContent.split(Hn),u=h.length-1;if(u>0){o.textContent=yo?yo.emptyScript:"";for(let _=0;_<u;_++)o.append(h[_],Ri()),lo.nextNode(),s.push({type:2,index:++i});o.append(h[u],Ri())}}}else if(o.nodeType===8)if(o.data===Xg)s.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(Hn,h+1))!==-1;)s.push({type:7,index:i}),h+=Hn.length-1}i++}}static createElement(e,n){const r=wo.createElement("template");return r.innerHTML=e,r}}function xo(t,e,n=t,r){var o,i,a,l;if(e===kr)return e;let s=r!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[r]:n._$Cl;const c=Ni(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==c&&((i=s==null?void 0:s._$AO)===null||i===void 0||i.call(s,!1),c===void 0?s=void 0:(s=new c(t),s._$AT(t,n,r)),r!==void 0?((a=(l=n)._$Co)!==null&&a!==void 0?a:l._$Co=[])[r]=s:n._$Cl=s),s!==void 0&&(e=xo(t,s._$AS(t,e.values),s,r)),e}class ex{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:o}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:wo).importNode(r,!0);lo.currentNode=i;let a=lo.nextNode(),l=0,s=0,c=o[0];for(;c!==void 0;){if(l===c.index){let d;c.type===2?d=new Qi(a,a.nextSibling,this,e):c.type===1?d=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(d=new ix(a,this,e)),this.u.push(d),c=o[++s]}l!==(c==null?void 0:c.index)&&(a=lo.nextNode(),l++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class Qi{constructor(e,n,r,o){var i;this.type=2,this._$AH=Ue,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cm=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=xo(this,e,n),Ni(e)?e===Ue||e==null||e===""?(this._$AH!==Ue&&this._$AR(),this._$AH=Ue):e!==this._$AH&&e!==kr&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qw(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==Ue&&Ni(this._$AH)?this._$AA.nextSibling.data=e:this.T(wo.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Di.createElement(o.h,this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const a=new ex(i,this),l=a.v(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let n=Sh.get(e.strings);return n===void 0&&Sh.set(e.strings,n=new Di(e)),n}k(e){Jg(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of e)o===n.length?n.push(r=new Qi(this.O(Ri()),this.O(Ri()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Yl{constructor(e,n,r,o,i){this.type=1,this._$AH=Ue,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Ue}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,o){const i=this.strings;let a=!1;if(i===void 0)e=xo(this,e,n,0),a=!Ni(e)||e!==this._$AH&&e!==kr,a&&(this._$AH=e);else{const l=e;let s,c;for(e=i[0],s=0;s<i.length-1;s++)c=xo(this,l[r+s],n,s),c===kr&&(c=this._$AH[s]),a||(a=!Ni(c)||c!==this._$AH[s]),c===Ue?e=Ue:e!==Ue&&(e+=(c!=null?c:"")+i[s+1]),this._$AH[s]=c}a&&!o&&this.j(e)}j(e){e===Ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class tx extends Yl{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ue?void 0:e}}const nx=yo?yo.emptyScript:"";class rx extends Yl{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Ue?this.element.setAttribute(this.name,nx):this.element.removeAttribute(this.name)}}class ox extends Yl{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=xo(this,e,n,0))!==null&&r!==void 0?r:Ue)===kr)return;const o=this._$AH,i=e===Ue&&o!==Ue||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==Ue&&(o===Ue||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class ix{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){xo(this,e)}}const kh=hl.litHtmlPolyfillSupport;kh==null||kh(Di,Qi),((Ts=hl.litHtmlVersions)!==null&&Ts!==void 0?Ts:hl.litHtmlVersions=[]).push("2.5.0");const ax=(t,e,n)=>{var r,o;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let a=i._$litPart$;if(a===void 0){const l=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new Qi(e.insertBefore(Ri(),l),l,void 0,n!=null?n:{})}return a._$AI(t),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ps,Os;class hi extends Fr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ax(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return kr}}hi.finalized=!0,hi._$litElement$=!0,(Ps=globalThis.litElementHydrateSupport)===null||Ps===void 0||Ps.call(globalThis,{LitElement:hi});const Th=globalThis.litElementPolyfillSupport;Th==null||Th({LitElement:hi});((Os=globalThis.litElementVersions)!==null&&Os!==void 0?Os:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lx=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Dt(t){return(e,n)=>n!==void 0?((r,o,i)=>{o.constructor.createProperty(i,r)})(t,e,n):lx(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ls;((Ls=window.HTMLSlotElement)===null||Ls===void 0?void 0:Ls.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sx={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},cx=t=>(...e)=>({_$litDirective$:t,values:e});class dx{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ux=cx(class extends dx{constructor(t){var e;if(super(t),t.type!==sx.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!(!((n=this.st)===null||n===void 0)&&n.has(i))&&this.nt.add(i);return this.render(e)}const o=t.element.classList;this.nt.forEach(i=>{i in e||(o.remove(i),this.nt.delete(i))});for(const i in e){const a=!!e[i];a===this.nt.has(i)||((r=this.st)===null||r===void 0?void 0:r.has(i))||(a?(o.add(i),this.nt.add(i)):(o.remove(i),this.nt.delete(i)))}return kr}}),Is="css-loading-indicator";var qt;(function(t){t.IDLE="",t.FIRST="first",t.SECOND="second",t.THIRD="third"})(qt||(qt={}));class je extends hi{constructor(){super(),this.firstDelay=300,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=qt.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=at.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}static create(){var e,n;const r=window;return!((e=r.Vaadin)===null||e===void 0)&&e.connectionIndicator||(r.Vaadin=r.Vaadin||{},r.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(r.Vaadin.connectionIndicator)),(n=r.Vaadin)===null||n===void 0?void 0:n.connectionIndicator}render(){return Jw`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${ux({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var e;super.connectedCallback();const n=window;!((e=n.Vaadin)===null||e===void 0)&&e.connectionState&&(this.connectionStateStore=n.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(e){e!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=e,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var e;const n=(e=this.connectionStateStore)===null||e===void 0?void 0:e.state;return this.offline=n===at.CONNECTION_LOST,this.reconnecting=n===at.RECONNECTING,this.updateLoading(n===at.LOADING),this.loading?!1:n!==this.lastMessageState?(this.lastMessageState=n,!0):!1}updateLoading(e){this.loading=e,this.loadingBarState=qt.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,e,()=>{this.loadingBarState=qt.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,e,()=>{this.loadingBarState=qt.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,e,()=>{this.loadingBarState=qt.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(Is)){const e=document.createElement("style");e.id=Is,e.textContent=this.getDefaultStyle(),document.head.appendChild(e)}}else{const e=document.getElementById(Is);e&&document.head.removeChild(e)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case qt.IDLE:return"display: none";case qt.FIRST:case qt.SECOND:case qt.THIRD:return"display: block";default:return""}}timeoutFor(e,n,r,o){return e!==0&&window.clearTimeout(e),n?window.setTimeout(r,o):0}static get instance(){return je.create()}}Nt([Dt({type:Number})],je.prototype,"firstDelay",void 0);Nt([Dt({type:Number})],je.prototype,"secondDelay",void 0);Nt([Dt({type:Number})],je.prototype,"thirdDelay",void 0);Nt([Dt({type:Number})],je.prototype,"expandedDuration",void 0);Nt([Dt({type:String})],je.prototype,"onlineText",void 0);Nt([Dt({type:String})],je.prototype,"offlineText",void 0);Nt([Dt({type:String})],je.prototype,"reconnectingText",void 0);Nt([Dt({type:Boolean,reflect:!0})],je.prototype,"offline",void 0);Nt([Dt({type:Boolean,reflect:!0})],je.prototype,"reconnecting",void 0);Nt([Dt({type:Boolean,reflect:!0})],je.prototype,"expanded",void 0);Nt([Dt({type:Boolean,reflect:!0})],je.prototype,"loading",void 0);Nt([Dt({type:String})],je.prototype,"loadingBarState",void 0);Nt([Dt({type:Boolean})],je.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",je);je.instance;const Mi=window;Mi.Vaadin=Mi.Vaadin||{};Mi.Vaadin.registrations=Mi.Vaadin.registrations||[];Mi.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.17"});var pl=!1,ot=[],Jn=[],Fa=0;const w={version:"3.1.4-javascript",onError:function(t){},onClose:function(t){},onOpen:function(t){},onReopen:function(t){},onMessage:function(t){},onReconnect:function(t,e){},onMessagePublished:function(t){},onTransportFailure:function(t,e){},onLocalMessage:function(t){},onFailureToReconnect:function(t,e){},onClientTimeout:function(t){},onOpenAfterResume:function(t){},WebsocketApiAdapter:function(t){var e,n;return t.onMessage=function(r){n.onmessage({data:r.responseBody})},t.onMessagePublished=function(r){n.onmessage({data:r.responseBody})},t.onOpen=function(r){n.onopen(r)},n={close:function(){e.close()},send:function(r){e.push(r)},onmessage:function(r){},onopen:function(r){},onclose:function(r){},onerror:function(r){}},e=new w.subscribe(t),n},AtmosphereRequest:function(t){var e={timeout:3e5,method:"GET",headers:{},contentType:"",callback:null,url:"",data:"",suspend:!0,maxRequest:-1,reconnect:!0,maxStreamingLength:1e7,lastIndex:0,logLevel:"info",requestCount:0,fallbackMethod:"GET",fallbackTransport:"streaming",transport:"long-polling",webSocketImpl:null,webSocketBinaryType:null,dispatchUrl:null,webSocketPathDelimiter:"@@",enableXDR:!1,rewriteURL:!1,attachHeadersAsQueryString:!0,executeCallbackBeforeReconnect:!1,readyState:0,withCredentials:!1,trackMessageLength:!1,messageDelimiter:"|",connectTimeout:-1,reconnectInterval:0,dropHeaders:!0,uuid:0,shared:!1,readResponsesHeaders:!1,maxReconnectOnClose:5,enableProtocol:!0,disableDisconnect:!1,pollingInterval:0,heartbeat:{client:null,server:null},ackInterval:0,reconnectOnServerError:!0,handleOnlineOffline:!0,maxWebsocketErrorRetries:1,curWebsocketErrorRetries:0,unloadBackwardCompat:!navigator.sendBeacon,onError:function(p){},onClose:function(p){},onOpen:function(p){},onMessage:function(p){},onReopen:function(p,f){},onReconnect:function(p,f){},onMessagePublished:function(p){},onTransportFailure:function(p,f){},onLocalMessage:function(p){},onFailureToReconnect:function(p,f){},onClientTimeout:function(p){},onOpenAfterResume:function(p){}},n={status:200,reasonPhrase:"OK",responseBody:"",messages:[],headers:[],state:"messageReceived",transport:"polling",error:null,request:null,partialMessage:"",errorHandled:!1,closedByClientTimeout:!1,ffTryingReconnect:!1},r=null,o=null,i=null,a=null,l=null,s=!0,c=0,d=0,h="X",u=!1,_=null,v,y=null,P=w.util.now(),g,m;We(t);function b(){s=!0,u=!1,c=0,r=null,o=null,i=null,a=null}function C(){$(),b()}function E(p){return p=="debug"?e.logLevel==="debug":p=="info"?e.logLevel==="info"||e.logLevel==="debug":p=="warn"?e.logLevel==="warn"||e.logLevel==="info"||e.logLevel==="debug":p=="error"?e.logLevel==="error"||e.logLevel==="warn"||e.logLevel==="info"||e.logLevel==="debug":!1}function O(p){E("debug")&&w.util.debug(new Date+" Atmosphere: "+p)}function F(p,f){return n.partialMessage===""&&f.transport==="streaming"&&p.responseText.length>f.maxStreamingLength}function H(){if(e.enableProtocol&&!e.disableDisconnect&&!e.firstMessage){var p="X-Atmosphere-Transport=close&X-Atmosphere-tracking-id="+e.uuid;w.util.each(e.headers,function(R,k){var D=w.util.isFunction(k)?k.call(this,e,e,n):k;D!=null&&(p+="&"+encodeURIComponent(R)+"="+encodeURIComponent(D))});var f=e.url.replace(/([?&])_=[^&]*/,p);f=f+(f===e.url?(/\?/.test(e.url)?"&":"?")+p:"");var x={connected:!1},z=new w.AtmosphereRequest(x);z.connectTimeout=e.connectTimeout,z.attachHeadersAsQueryString=!1,z.dropHeaders=!0,z.url=f,z.contentType="text/plain",z.transport="polling",z.method="GET",z.data="",z.heartbeat=null,e.enableXDR&&(z.enableXDR=e.enableXDR),J("",z)}}function ne(){O("Closing (AtmosphereRequest._close() called)"),u=!0,e.reconnectId&&(clearTimeout(e.reconnectId),delete e.reconnectId),e.heartbeatTimer&&clearTimeout(e.heartbeatTimer),e.reconnect=!1,n.request=e,n.state="unsubscribe",n.responseBody="",n.status=408,n.partialMessage="",e.curWebsocketErrorRetries=0,Ye(),H(),$()}function $(){n.partialMessage="",e.id&&clearTimeout(e.id),e.heartbeatTimer&&clearTimeout(e.heartbeatTimer),e.reconnectId&&(clearTimeout(e.reconnectId),delete e.reconnectId),a!=null&&(a.close(),a=null),l!=null&&(l.abort(),l=null),i!=null&&(i.abort(),i=null),r!=null&&(r.canSendMessage&&(O("invoking .close() on WebSocket object"),r.close()),r=null),o!=null&&(o.close(),o=null),Me()}function Me(){v!=null&&(clearInterval(g),document.cookie=m+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",v.signal("close",{reason:"",heir:u?(v.get("children")||[])[0]:P}),v.close()),y!=null&&y.close()}function We(p){C(),e=w.util.extend(e,p),e.mrequest=e.reconnect,e.reconnect||(e.reconnect=!0)}function Ft(){return e.webSocketImpl!=null||window.WebSocket||window.MozWebSocket}function Pe(){var p=w.util.getAbsoluteURL(e.url.toLowerCase()),f=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/.exec(p),x=!!(f&&(f[1]!=window.location.protocol||f[2]!=window.location.hostname||(f[3]||(f[1]==="http:"?80:443))!=(window.location.port||(window.location.protocol==="http:"?80:443))));return window.EventSource&&(!x||!w.util.browser.safari||w.util.browser.vmajor>=7)}function Oe(){if(e.shared){if(y=nn(e),y!=null&&(E("debug")&&w.util.debug("Storage service available. All communication will be local"),y.open(e)))return;E("debug")&&w.util.debug("No Storage service available."),y=null}e.firstMessage=Fa==0,e.isOpen=!1,e.ctime=w.util.now(),e.uuid===0&&(e.uuid=Fa),n.closedByClientTimeout=!1,e.transport!=="websocket"&&e.transport!=="sse"?lr(e):e.transport==="websocket"?Ft()?et(!1):be("Websocket is not supported, using request.fallbackTransport ("+e.fallbackTransport+")"):e.transport==="sse"&&(Pe()?_t(!1):be("Server Side Events(SSE) is not supported, using request.fallbackTransport ("+e.fallbackTransport+")"))}function nn(p){var f,x,z,R="atmosphere-"+p.url,k={storage:function(){function V(tt){tt.key===R&&tt.newValue&&K(tt.newValue)}if(!!w.util.storage){var ke=window.localStorage,me=function(tt){var sr=ke.getItem(R+"-"+tt);return sr===null?[]:JSON.parse(sr)},ut=function(tt,sr){ke.setItem(R+"-"+tt,JSON.stringify(sr))};return{init:function(){return ut("children",me("children").concat([P])),w.util.on(window,"storage",V),me("opened")},signal:function(tt,sr){ke.setItem(R,JSON.stringify({target:"p",type:tt,data:sr}))},close:function(){var tt=me("children");w.util.off(window,"storage",V),tt&&D(tt,p.id)&&ut("children",tt)}}}},windowref:function(){var V=window.open("",R.replace(/\W/g,""));if(!(!V||V.closed||!V.callbacks))return{init:function(){return V.callbacks.push(K),V.children.push(P),V.opened},signal:function(ke,me){!V.closed&&V.fire&&V.fire(JSON.stringify({target:"p",type:ke,data:me}))},close:function(){z||(D(V.callbacks,K),D(V.children,P))}}}};function D(V,ke){var me,ut=V.length;for(me=0;me<ut;me++)V[me]===ke&&V.splice(me,1);return ut!==V.length}function K(V){var ke=JSON.parse(V),me=ke.data;if(ke.target==="c")switch(ke.type){case"open":L("opening","local",e);break;case"close":z||(z=!0,me.reason==="aborted"?ne():me.heir===P?Oe():setTimeout(function(){Oe()},100));break;case"message":rn(me,"messageReceived",200,p.transport);break;case"localMessage":gn(me);break}}function re(){var V=new RegExp("(?:^|; )("+encodeURIComponent(R)+")=([^;]*)").exec(document.cookie);if(V)return JSON.parse(decodeURIComponent(V[2]))}if(f=re(),!(!f||w.util.now()-f.ts>1e3)&&(x=k.storage()||k.windowref(),!!x))return{open:function(){var V;return g=setInterval(function(){var ke=f;f=re(),(!f||ke.ts===f.ts)&&K(JSON.stringify({target:"c",type:"close",data:{reason:"error",heir:ke.heir}}))},1e3),V=x.init(),V&&setTimeout(function(){L("opening","local",p)},50),V},send:function(V){x.signal("send",V)},localSend:function(V){x.signal("localSend",JSON.stringify({id:P,event:V}))},close:function(){u||(clearInterval(g),x.signal("close"),x.close())}}}function Gt(){var p,f="atmosphere-"+e.url,x={storage:function(){function k(K){K.key===f&&K.newValue&&z(K.newValue)}if(!!w.util.storage){var D=window.localStorage;return{init:function(){w.util.on(window,"storage",k)},signal:function(K,re){D.setItem(f,JSON.stringify({target:"c",type:K,data:re}))},get:function(K){return JSON.parse(D.getItem(f+"-"+K))},set:function(K,re){D.setItem(f+"-"+K,JSON.stringify(re))},close:function(){w.util.off(window,"storage",k),D.removeItem(f),D.removeItem(f+"-opened"),D.removeItem(f+"-children")}}}},windowref:function(){var k=f.replace(/\W/g,""),D=document.getElementById(k),K;return D||(D=document.createElement("div"),D.id=k,D.style.display="none",D.innerHTML='<iframe name="'+k+'"></iframe>',document.body.appendChild(D)),K=D.firstChild.contentWindow,{init:function(){K.callbacks=[z],K.fire=function(re){var V;for(V=0;V<K.callbacks.length;V++)K.callbacks[V](re)}},signal:function(re,V){!K.closed&&K.fire&&K.fire(JSON.stringify({target:"c",type:re,data:V}))},get:function(re){return K.closed?null:K[re]},set:function(re,V){K.closed||(K[re]=V)},close:function(){}}}};function z(k){var D=JSON.parse(k),K=D.data;if(D.target==="p")switch(D.type){case"send":te(K);break;case"localSend":gn(K);break;case"close":ne();break}}_=function(D){p.signal("message",D)};function R(){document.cookie=m+"="+encodeURIComponent(JSON.stringify({ts:w.util.now()+1,heir:(p.get("children")||[])[0]}))+"; path=/"}p=x.storage()||x.windowref(),p.init(),E("debug")&&w.util.debug("Installed StorageService "+p),p.set("children",[]),p.get("opened")!=null&&!p.get("opened")&&p.set("opened",!1),m=encodeURIComponent(f),R(),g=setInterval(R,1e3),v=p}function L(p,f,x){if(e.shared&&f!=="local"&&Gt(),v!=null&&v.set("opened",!0),x.close=function(){ne()},c>0&&p==="re-connecting")x.isReopen=!0,T(n);else if(!n.error){n.request=x;var z=n.state;n.state=p;var R=n.transport;n.transport=f;var k=n.responseBody;Ye(),n.responseBody=k,n.state=z,n.transport=R}}function Y(p){p.transport="jsonp";var f=e,x;p!=null&&typeof p<"u"&&(f=p),l={open:function(){var z="atmosphere"+ ++P;function R(){f.lastIndex=0,f.openId&&clearTimeout(f.openId),f.heartbeatTimer&&clearTimeout(f.heartbeatTimer),f.reconnect&&c++<f.maxReconnectOnClose?(L("re-connecting",f.transport,f),A(l,f,p.reconnectInterval),f.openId=setTimeout(function(){pe(f)},f.reconnectInterval+1e3)):S(0,"maxReconnectOnClose reached")}function k(){var D=f.url;f.dispatchUrl!=null&&(D+=f.dispatchUrl);var K=f.data;f.attachHeadersAsQueryString&&(D=xe(f),K!==""&&(D+="&X-Atmosphere-Post-Body="+encodeURIComponent(K)),K="");var re=document.head||document.getElementsByTagName("head")[0]||document.documentElement;x=document.createElement("script"),x.src=D+"&jsonpTransport="+z,x.clean=function(){x.clean=x.onerror=x.onload=x.onreadystatechange=null,x.parentNode&&x.parentNode.removeChild(x),++p.scriptCount===2&&(p.scriptCount=1,R())},x.onload=x.onreadystatechange=function(){O("jsonp.onload"),(!x.readyState||/loaded|complete/.test(x.readyState))&&x.clean()},x.onerror=function(){O("jsonp.onerror"),p.scriptCount=1,x.clean()},re.insertBefore(x,re.firstChild)}window[z]=function(D){if(O("jsonp.window"),p.scriptCount=0,f.reconnect&&f.maxRequest===-1||f.requestCount++<f.maxRequest){if(f.executeCallbackBeforeReconnect||A(l,f,f.pollingInterval),D!=null&&typeof D!="string")try{D=D.message}catch{}var K=N(D,f,n);K||rn(n.responseBody,"messageReceived",200,f.transport),f.executeCallbackBeforeReconnect&&A(l,f,f.pollingInterval),Se(f)}else w.util.log(e.logLevel,["JSONP reconnect maximum try reached "+e.requestCount]),S(0,"maxRequest reached")},setTimeout(function(){k()},50)},abort:function(){x&&x.clean&&x.clean()}},l.open()}function q(p){return e.webSocketImpl!=null?e.webSocketImpl:window.WebSocket?new WebSocket(p):new MozWebSocket(p)}function ue(){return xe(e,w.util.getAbsoluteURL(e.webSocketUrl||e.url)).replace(/^http/,"ws")}function _e(){var p=xe(e);return p}function _t(p){n.transport="sse";var f=_e();if(E("debug")&&(w.util.debug("Invoking executeSSE"),w.util.debug("Using URL: "+f)),p&&!e.reconnect){o!=null&&$();return}try{o=new EventSource(f,{withCredentials:e.withCredentials})}catch(x){S(0,x),be("SSE failed. Downgrading to fallback transport and resending");return}e.connectTimeout>0&&(e.id=setTimeout(function(){p||$()},e.connectTimeout)),o.onopen=function(){O("sse.onopen"),Se(e),E("debug")&&w.util.debug("SSE successfully opened"),e.enableProtocol?e.isReopen&&(e.isReopen=!1,L("re-opening",e.transport,e)):L(p?"re-opening":"opening","sse",e),p=!0,e.method==="POST"&&(n.state="messageReceived",te(e.data))},o.onmessage=function(x){if(O("sse.onmessage"),Se(e),!e.enableXDR&&window.location.host&&x.origin&&x.origin!==window.location.protocol+"//"+window.location.host){w.util.log(e.logLevel,["Origin was not "+window.location.protocol+"//"+window.location.host]);return}n.state="messageReceived",n.status=200,x=x.data;var z=N(x,e,n);z||(Ye(),n.responseBody="",n.messages=[])},o.onerror=function(){if(O("sse.onerror"),clearTimeout(e.id),e.heartbeatTimer&&clearTimeout(e.heartbeatTimer),!n.closedByClientTimeout){if(Yt(p),$(),u)w.util.log(e.logLevel,["SSE closed normally"]);else if(!p)be("SSE failed. Downgrading to fallback transport and resending");else if(e.reconnect&&n.transport==="sse")if(c++<e.maxReconnectOnClose){if(L("re-connecting",e.transport,e),e.reconnectInterval>0){var x=e.handleOnlineOffline;e.handleOnlineOffline=!1,e.reconnectId=setTimeout(function(){e.handleOnlineOffline=x,_t(!0)},e.reconnectInterval)}else _t(!0);n.responseBody="",n.messages=[]}else w.util.log(e.logLevel,["SSE reconnect maximum try reached "+c]),S(0,"maxReconnectOnClose reached")}}}function et(p){n.transport="websocket";var f=ue(e.url);if(E("debug")&&w.util.debug("Invoking executeWebSocket, using URL: "+f),p&&!e.reconnect){r!=null&&$();return}r=q(f),e.webSocketBinaryType!=null&&(r.binaryType=e.webSocketBinaryType),e.connectTimeout>0&&(e.id=setTimeout(function(){if(!p){var R={code:1002,reason:"Connection timeout after "+e.connectTimeout+"ms.",wasClean:!1},k=r;try{$()}catch{}k.onclose(R)}},e.connectTimeout)),r.onopen=function(){if(r==null){this.close(),e.transport=="websocket"&&ne();return}O("websocket.onopen"),(!e.enableProtocol||e.connectTimeout<=0)&&Se(e),pl=!1,E("debug")&&w.util.debug("Websocket successfully opened");var R=p;r.canSendMessage=!0,e.enableProtocol||(p=!0,L(R?"re-opening":"opening","websocket",e)),e.method==="POST"&&(n.state="messageReceived",r.send(e.data))},r.onmessage=function(R){if(r==null){this.close(),e.transport=="websocket"&&ne();return}O("websocket.onmessage"),Se(e),e.enableProtocol&&(p=!0),n.state="messageReceived",n.status=200,R=R.data;var k=typeof R=="string";if(k){var D=N(R,e,n);D||(Ye(),n.responseBody="",n.messages=[])}else{if(R=ct(e,R),R==="")return;n.responseBody=R,Ye(),n.responseBody=null}},r.onerror=function(){O("websocket.onerror"),clearTimeout(e.id),e.heartbeatTimer&&clearTimeout(e.heartbeatTimer),n.error=!0},r.onclose=function(R){if(O("websocket.onclose"),n.transport==="websocket"&&(clearTimeout(e.id),n.state!=="closed")){var k=R.reason;if(k==="")switch(R.code){case 1e3:k="Normal closure; the connection successfully completed whatever purpose for which it was created.";break;case 1001:k="The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.";break;case 1002:k="The endpoint is terminating the connection due to a protocol error.";break;case 1003:k="The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data).";break;case 1004:k="The endpoint is terminating the connection because a data frame was received that is too large.";break;case 1005:k="Unknown: no status code was provided even though one was expected.";break;case 1006:k="Connection was closed abnormally (that is, with no close frame being sent).";break}if(E("warn")&&w.util.warn("Websocket closed, reason: "+k+" - wasClean: "+R.wasClean),n.closedByClientTimeout||e.handleOnlineOffline&&pl){e.reconnectId&&(clearTimeout(e.reconnectId),delete e.reconnectId);return}Yt(p),n.state="closed",u?w.util.log(e.logLevel,["Websocket closed normally"]):n.error&&e.curWebsocketErrorRetries<e.maxWebsocketErrorRetries&&c+1<e.maxReconnectOnClose?(n.error=!1,e.curWebsocketErrorRetries++,Q()):(n.error||!p||e.maxWebsocketErrorRetries===0)&&e.fallbackTransport!=="websocket"?(n.error=!1,be("Websocket failed on first connection attempt. Downgrading to "+e.fallbackTransport+" and resending")):e.reconnect&&Q()}};var x=navigator.userAgent.toLowerCase(),z=x.indexOf("android")>-1;z&&r.url===void 0&&r.onclose({reason:"Android 4.1 does not support websockets.",wasClean:!1})}function ct(p,f){var x=f;if(p.transport==="polling")return x;if(p.enableProtocol&&p.firstMessage&&w.util.trim(f).length!==0){var z=p.trackMessageLength?1:0,R=f.split(p.messageDelimiter);if(R.length<=z+1)return x;if(p.firstMessage=!1,p.uuid=w.util.trim(R[z]),R.length<=z+2&&w.util.log("error",["Protocol data not sent by the server. If you enable protocol on client side, be sure to install JavascriptProtocol interceptor on server side.Also note that atmosphere-runtime 2.2+ should be used."]),d=parseInt(w.util.trim(R[z+1]),10),h=R[z+2],p.transport!=="long-polling"&&pe(p),Fa=p.uuid,x="",z=p.trackMessageLength?4:3,R.length>z+1)for(var k=z;k<R.length;k++)x+=R[k],k+1!==R.length&&(x+=p.messageDelimiter);p.ackInterval!==0&&setTimeout(function(){te("...ACK...")},p.ackInterval)}else p.enableProtocol&&p.firstMessage&&w.util.browser.msie&&+w.util.browser.version.split(".")[0]<10?w.util.log(e.logLevel,["Receiving unexpected data from IE"]):pe(p);return x}function Se(p){clearTimeout(p.id),p.timeout>0&&p.transport!=="polling"&&(p.id=setTimeout(function(){dt(),H(),$()},p.timeout))}function dt(p){n.closedByClientTimeout=!0,n.state="closedByClient",n.responseBody="",n.status=408,n.messages=[],Ye()}function S(p,f){$(),clearTimeout(e.id),n.state="error",n.reasonPhrase=f,n.responseBody="",n.status=p,n.messages=[],Ye()}function N(p,f,x){if(p=ct(f,p),p.length===0)return!0;if(x.responseBody=p,f.trackMessageLength){p=x.partialMessage+p;var z=[],R=p.indexOf(f.messageDelimiter);if(R!=-1){for(;R!==-1;){var k=p.substring(0,R),D=+k;if(isNaN(D))throw x.partialMessage="",new Error('message length "'+k+'" is not a number');R+=f.messageDelimiter.length,R+D>p.length?R=-1:(z.push(p.substring(R,R+D)),p=p.substring(R+D,p.length),R=p.indexOf(f.messageDelimiter))}return x.partialMessage=p,z.length!==0?(x.responseBody=z.join(f.messageDelimiter),x.messages=z,!1):(x.responseBody="",x.messages=[],!0)}}return x.responseBody=p,x.messages=[p],!1}function Q(){if($(),c++<e.maxReconnectOnClose)if(L("re-connecting",e.transport,e),e.reconnectInterval>0){var p=e.handleOnlineOffline;e.handleOnlineOffline=!1,e.reconnectId=setTimeout(function(){e.handleOnlineOffline=p,n.responseBody="",n.messages=[],et(!0)},e.reconnectInterval)}else n.responseBody="",n.messages=[],et(!0);else w.util.log(e.logLevel,["Websocket reconnect maximum try reached "+c]),S(0,"maxReconnectOnClose reached")}function be(p){if(w.util.log(e.logLevel,[p]),$(),typeof e.onTransportFailure<"u"?e.onTransportFailure(p,e):typeof w.util.onTransportFailure<"u"&&w.util.onTransportFailure(p,e),e.reconnect&&e.transport!=="none"||e.transport==null)if(e.transport=e.fallbackTransport,e.method=e.fallbackMethod,n.transport=e.fallbackTransport,n.state="",e.fallbackTransport="none",e.reconnectInterval>0){var f=e.handleOnlineOffline;e.handleOnlineOffline=!1,e.reconnectId=setTimeout(function(){e.handleOnlineOffline=f,Oe()},e.reconnectInterval)}else Oe();else S(500,"Unable to reconnect with fallback transport")}function xe(p,f){var x=e;return p!=null&&typeof p<"u"&&(x=p),f==null&&(f=x.url),!x.attachHeadersAsQueryString||f.indexOf("X-Atmosphere-Framework")!==-1||(f+=f.indexOf("?")!==-1?"&":"?",f+="X-Atmosphere-tracking-id="+x.uuid,f+="&X-Atmosphere-Framework="+w.version,f+="&X-Atmosphere-Transport="+x.transport,x.trackMessageLength&&(f+="&X-Atmosphere-TrackMessageSize=true"),x.heartbeat!==null&&x.heartbeat.server!==null&&(f+="&X-Heartbeat-Server="+x.heartbeat.server),x.contentType!==""&&(f+="&Content-Type="+(x.transport==="websocket"?x.contentType:encodeURIComponent(x.contentType))),x.enableProtocol&&(f+="&X-atmo-protocol=true"),w.util.each(x.headers,function(z,R){var k=w.util.isFunction(R)?R.call(this,x,p,n):R;k!=null&&(f+="&"+encodeURIComponent(z)+"="+encodeURIComponent(k))})),f}function pe(p){if(!p.isOpen)p.isOpen=!0,L("opening",p.transport,p);else if(p.isReopen)p.isReopen=!1,L("re-opening",p.transport,p);else if(n.state==="messageReceived"&&(p.transport==="jsonp"||p.transport==="long-polling"))M(n);else return;$t(p)}function $t(p){if(p.heartbeatTimer!=null&&clearTimeout(p.heartbeatTimer),!isNaN(d)&&d>0){var f=function(){E("debug")&&w.util.debug("Sending heartbeat"),te(h),p.heartbeatTimer=setTimeout(f,d)};p.heartbeatTimer=setTimeout(f,d)}}function lr(p){var f=e;if((p!=null||typeof p<"u")&&(f=p),f.lastIndex=0,f.readyState=0,f.transport==="jsonp"||f.enableXDR&&w.util.checkCORSSupport()){Y(f);return}if(w.util.browser.msie&&+w.util.browser.version.split(".")[0]<10){if(f.transport==="streaming"){f.enableXDR&&window.XDomainRequest?G(f):X(f);return}if(f.enableXDR&&window.XDomainRequest){G(f);return}}var x=function(D){if(f.lastIndex=0,c++,D||f.reconnect&&c<=f.maxReconnectOnClose){var K=D?0:p.reconnectInterval;n.ffTryingReconnect=!0,L("re-connecting",p.transport,p),A(k,f,K)}else S(0,"maxReconnectOnClose reached")},z=function(D){w._beforeUnloadState?(w.util.debug(new Date+" Atmosphere: reconnectF: execution delayed due to _beforeUnloadState flag"),setTimeout(function(){x(D)},5e3)):x(D)},R=function(){n.errorHandled=!0,$(),z(!1)};if(f.force||f.reconnect&&(f.maxRequest===-1||f.requestCount++<f.maxRequest)){f.force=!1;var k=w.util.xhr();k.hasData=!1,ea(k,f,!0),f.suspend&&(i=k),f.transport!=="polling"&&(n.transport=f.transport,k.onabort=function(){O("ajaxrequest.onabort"),Yt(!0)},k.onerror=function(){O("ajaxrequest.onerror"),n.error=!0,n.ffTryingReconnect=!0;try{n.status=XMLHttpRequest.status}catch{n.status=500}n.status||(n.status=500),n.errorHandled||($(),z(!1))}),k.onreadystatechange=function(){if(O("ajaxRequest.onreadystatechange, new state: "+k.readyState),u){O("onreadystatechange has been ignored due to _abortingConnection flag");return}n.error=!1;var D=!1,K=!1;if(f.transport==="streaming"&&f.readyState>2&&k.readyState===4){$(),z(!1);return}if(f.readyState=k.readyState,(f.transport==="streaming"&&k.readyState>=3||f.transport==="long-polling"&&k.readyState===4)&&(K=!0),Se(e),f.transport!=="polling"){var re=200;if(k.readyState===4&&(re=k.status>1e3?0:k.status),!f.reconnectOnServerError&&re>=300&&re<600){S(re,k.statusText);return}if(re>=300||re===0){!f.isOpen&&E("warn")&&w.util.warn(f.transport+" connection failed with status: "+re+" "+(k.statusText||"Unable to connect")),R();return}(!f.enableProtocol||!p.firstMessage)&&(k.readyState===2||k.readyState>2&&!f.isOpen)&&(w.util.browser.mozilla&&n.ffTryingReconnect?(n.ffTryingReconnect=!1,setTimeout(function(){n.ffTryingReconnect||pe(f)},500)):pe(f))}else k.readyState===4&&(K=!0);if(K){var V=k.responseText;if(n.errorHandled=!1,f.transport==="long-polling"&&w.util.trim(V).length===0){k.hasData?k.hasData=!1:z(!0);return}if(k.hasData=!0,ze(k,e),f.transport==="streaming")if(w.util.browser.opera)w.util.iterate(function(){if(n.status!==500&&k.responseText.length>f.lastIndex){try{n.status=k.status,n.headers=w.util.parseHeaders(k.getAllResponseHeaders()),ze(k,e)}catch{n.status=404}Se(e),n.state="messageReceived";var tt=k.responseText.substring(f.lastIndex);if(f.lastIndex=k.responseText.length,D=N(tt,f,n),D||Ye(),F(k,f)){Zi(k,f);return}}else if(n.status>400)return f.lastIndex=k.responseText.length,!1},0);else{var ke=V.substring(f.lastIndex,V.length);if(D=N(ke,f,n),f.lastIndex=V.length,D)return}else D=N(V,f,n);var me=F(k,f);try{n.status=k.status,n.headers=w.util.parseHeaders(k.getAllResponseHeaders()),ze(k,f)}catch{n.status=404}f.suspend?n.state=n.status===0?"closed":"messageReceived":n.state="messagePublished";var ut=!me&&p.transport!=="streaming"&&p.transport!=="polling";ut&&!f.executeCallbackBeforeReconnect&&A(k,f,f.pollingInterval),n.responseBody.length!==0&&!D&&Ye(),ut&&f.executeCallbackBeforeReconnect&&A(k,f,f.pollingInterval),me&&Zi(k,f)}};try{k.send(f.data),s=!0}catch(D){w.util.log(f.logLevel,["Unable to connect to "+f.url]),S(0,D)}}else f.logLevel==="debug"&&w.util.log(f.logLevel,["Max re-connection reached."]),S(0,"maxRequest reached")}function Zi(p,f){n.messages=[],f.isReopen=!0,ne(),u=!1,A(p,f,500)}function ea(p,f,x){var z=f.url;f.dispatchUrl!=null&&f.method==="POST"&&(z+=f.dispatchUrl),z=xe(f,z),z=w.util.prepareURL(z),x&&(p.open(f.method,z,!0),f.connectTimeout>0&&(f.id=setTimeout(function(){f.requestCount===0&&($(),rn("Connect timeout","closed",200,f.transport))},f.connectTimeout))),e.withCredentials&&e.transport!=="websocket"&&"withCredentials"in p&&(p.withCredentials=!0),e.dropHeaders||(p.setRequestHeader("X-Atmosphere-Framework",w.version),p.setRequestHeader("X-Atmosphere-Transport",f.transport),f.heartbeat!==null&&f.heartbeat.server!==null&&p.setRequestHeader("X-Heartbeat-Server",p.heartbeat.server),f.trackMessageLength&&p.setRequestHeader("X-Atmosphere-TrackMessageSize","true"),p.setRequestHeader("X-Atmosphere-tracking-id",f.uuid),w.util.each(f.headers,function(R,k){var D=w.util.isFunction(k)?k.call(this,p,f,x,n):k;D!=null&&p.setRequestHeader(R,D)})),f.contentType!==""&&p.setRequestHeader("Content-Type",f.contentType)}function A(p,f,x){if(!n.closedByClientTimeout&&(f.reconnect||f.suspend&&s)){var z=0;if(p&&p.readyState>1&&(z=p.status>1e3?0:p.status),n.status=z===0?204:z,n.reason=z===0?"Server resumed the connection or down.":"OK",clearTimeout(f.id),f.reconnectId&&(clearTimeout(f.reconnectId),delete f.reconnectId),x>0){var R=e.handleOnlineOffline;e.handleOnlineOffline=!1,e.reconnectId=setTimeout(function(){e.handleOnlineOffline=R,lr(f)},x)}else lr(f)}}function T(p){p.state="re-connecting",Ge(p)}function M(p){p.state="openAfterResume",Ge(p),p.state="messageReceived"}function G(p){p.transport!=="polling"?(a=U(p),a.open()):U(p).open()}function U(p){var f=e;p!=null&&typeof p<"u"&&(f=p);var x=f.transport,z=0,R=new window.XDomainRequest,k=function(){f.transport==="long-polling"&&f.reconnect&&(f.maxRequest===-1||f.requestCount++<f.maxRequest)&&(R.status=200,G(f))},D=f.rewriteURL||function(re){var V=/(?:^|;\s*)(JSESSIONID|PHPSESSID)=([^;]*)/.exec(document.cookie);switch(V&&V[1]){case"JSESSIONID":return re.replace(/;jsessionid=[^\?]*|(\?)|$/,";jsessionid="+V[2]+"$1");case"PHPSESSID":return re.replace(/\?PHPSESSID=[^&]*&?|\?|$/,"?PHPSESSID="+V[2]+"&").replace(/&$/,"")}return re};R.onprogress=function(){K(R)},R.onerror=function(){f.transport!=="polling"&&($(),c++<f.maxReconnectOnClose?f.reconnectInterval>0?f.reconnectId=setTimeout(function(){L("re-connecting",p.transport,p),G(f)},f.reconnectInterval):(L("re-connecting",p.transport,p),G(f)):S(0,"maxReconnectOnClose reached"))},R.onload=function(){};var K=function(re){clearTimeout(f.id);var V=re.responseText;if(V=V.substring(z),z+=V.length,x!=="polling"){Se(f);var ke=N(V,f,n);if(x==="long-polling"&&w.util.trim(V).length===0)return;f.executeCallbackBeforeReconnect&&k(),ke||rn(n.responseBody,"messageReceived",200,x),f.executeCallbackBeforeReconnect||k()}};return{open:function(){var re=f.url;f.dispatchUrl!=null&&(re+=f.dispatchUrl),re=xe(f,re),R.open(f.method,D(re)),f.method==="GET"?R.send():R.send(f.data),f.connectTimeout>0&&(f.id=setTimeout(function(){f.requestCount===0&&($(),rn("Connect timeout","closed",200,f.transport))},f.connectTimeout))},close:function(){R.abort()}}}function X(p){a=ee(p),a.open()}function ee(p){var f=e;p!=null&&typeof p<"u"&&(f=p);var x,z=new window.ActiveXObject("htmlfile");z.open(),z.close();var R=f.url;return f.dispatchUrl!=null&&(R+=f.dispatchUrl),f.transport!=="polling"&&(n.transport=f.transport),{open:function(){var k=z.createElement("iframe");R=xe(f),f.data!==""&&(R+="&X-Atmosphere-Post-Body="+encodeURIComponent(f.data)),R=w.util.prepareURL(R),k.src=R,z.body.appendChild(k);var D=k.contentDocument||k.contentWindow.document;x=w.util.iterate(function(){try{if(!D.firstChild)return;var K=D.body?D.body.lastChild:D;K.omgThisIsBroken;var re=function(){var me=K.cloneNode(!0);me.appendChild(D.createTextNode("."));var ut=me.innerText;return ut=ut.substring(0,ut.length-1),ut};if(!D.body||!D.body.firstChild||D.body.firstChild.nodeName.toLowerCase()!=="pre"){var V=D.head||D.getElementsByTagName("head")[0]||D.documentElement||D,ke=D.createElement("script");ke.text="document.write('<plaintext>')",V.insertBefore(ke,V.firstChild),V.removeChild(ke),K=D.body.lastChild}return f.closed&&(f.isReopen=!0),x=w.util.iterate(function(){var me=re();if(me.length>f.lastIndex){Se(e),n.status=200,n.error=!1,K.innerText="";var ut=N(me,f,n);if(ut)return"";rn(n.responseBody,"messageReceived",200,f.transport)}if(f.lastIndex=0,D.readyState==="complete")return Yt(!0),L("re-connecting",f.transport,f),f.reconnectInterval>0?f.reconnectId=setTimeout(function(){X(f)},f.reconnectInterval):X(f),!1},null),!1}catch{return n.error=!0,L("re-connecting",f.transport,f),c++<f.maxReconnectOnClose?f.reconnectInterval>0?f.reconnectId=setTimeout(function(){X(f)},f.reconnectInterval):X(f):S(0,"maxReconnectOnClose reached"),z.execCommand("Stop"),z.close(),!1}})},close:function(){x&&x(),z.execCommand("Stop"),Yt(!0)}}}function te(p){y!=null?Fe(p):i!=null||o!=null?ce(p):a!=null?Et(p):l!=null?St(p):r!=null?zr(p):(S(0,"No suspended connection available"),w.util.error("No suspended connection available. Make sure atmosphere.subscribe has been called and request.onOpen invoked before trying to push data"))}function J(p,f){f||(f=Rn(p)),f.transport="polling",f.method="GET",f.withCredentials=!1,f.reconnect=!1,f.force=!0,f.suspend=!1,f.timeout=1e3,e.unloadBackwardCompat?lr(f):navigator.sendBeacon(f.url,f.data)}function Fe(p){y.send(p)}function ae(p){if(p.length!==0)try{y?y.localSend(p):v&&v.signal("localMessage",JSON.stringify({id:P,event:p}))}catch(f){w.util.error(f)}}function ce(p){var f=Rn(p);lr(f)}function Et(p){if(e.enableXDR&&w.util.checkCORSSupport()){var f=Rn(p);f.reconnect=!1,Y(f)}else ce(p)}function St(p){ce(p)}function zn(p){var f=p;return typeof f=="object"&&(f=p.data),f}function Rn(p){var f=zn(p),x={connected:!1,timeout:6e4,method:"POST",url:e.url,contentType:e.contentType,headers:e.headers,reconnect:!0,callback:null,data:f,suspend:!1,maxRequest:-1,logLevel:"info",requestCount:0,withCredentials:e.withCredentials,transport:"polling",isOpen:!0,attachHeadersAsQueryString:!0,enableXDR:e.enableXDR,uuid:e.uuid,dispatchUrl:e.dispatchUrl,enableProtocol:!1,messageDelimiter:"|",trackMessageLength:e.trackMessageLength,maxReconnectOnClose:e.maxReconnectOnClose,heartbeatTimer:e.heartbeatTimer,heartbeat:e.heartbeat};return typeof p=="object"&&(x=w.util.extend(x,p)),x}function zr(p){var f=w.util.isBinary(p)?p:zn(p),x;try{if(e.dispatchUrl!=null?x=e.webSocketPathDelimiter+e.dispatchUrl+e.webSocketPathDelimiter+f:x=f,!r.canSendMessage){w.util.error("WebSocket not connected.");return}r.send(x)}catch{r.onclose=function(){},$(),be("Websocket failed. Downgrading to "+e.fallbackTransport+" and resending "+p),ce(p)}}function gn(p){var f=JSON.parse(p);f.id!==P&&(typeof e.onLocalMessage<"u"?e.onLocalMessage(f.event):typeof w.util.onLocalMessage<"u"&&w.util.onLocalMessage(f.event))}function rn(p,f,x,z){n.responseBody=p,n.transport=z,n.status=x,n.state=f,Ye()}function ze(p,f){if(!f.readResponsesHeaders)f.enableProtocol||(f.uuid=P);else try{var x=p.getResponseHeader("X-Atmosphere-tracking-id");x&&x!=null&&(f.uuid=x.split(" ").pop())}catch{}}function Ge(p){on(p,e),on(p,w.util)}function on(p,f){switch(p.state){case"messageReceived":O("Firing onMessage"),c=0,typeof f.onMessage<"u"&&f.onMessage(p),typeof f.onmessage<"u"&&f.onmessage(p);break;case"error":var x=typeof p.reasonPhrase<"u"?p.reasonPhrase:"n/a";O("Firing onError, reasonPhrase: "+x),typeof f.onError<"u"&&f.onError(p),typeof f.onerror<"u"&&f.onerror(p);break;case"opening":delete e.closed,O("Firing onOpen"),typeof f.onOpen<"u"&&f.onOpen(p),typeof f.onopen<"u"&&f.onopen(p);break;case"messagePublished":O("Firing messagePublished"),typeof f.onMessagePublished<"u"&&f.onMessagePublished(p);break;case"re-connecting":O("Firing onReconnect"),typeof f.onReconnect<"u"&&f.onReconnect(e,p);break;case"closedByClient":O("Firing closedByClient"),typeof f.onClientTimeout<"u"&&f.onClientTimeout(e);break;case"re-opening":delete e.closed,O("Firing onReopen"),typeof f.onReopen<"u"&&f.onReopen(e,p);break;case"fail-to-reconnect":O("Firing onFailureToReconnect"),typeof f.onFailureToReconnect<"u"&&f.onFailureToReconnect(e,p);break;case"unsubscribe":case"closed":var z=typeof e.closed<"u"?e.closed:!1;z?O("Request already closed, not firing onClose ("+p.state+" case)"):(O("Firing onClose ("+p.state+" case)"),typeof f.onClose<"u"&&f.onClose(p),typeof f.onclose<"u"&&f.onclose(p)),e.closed=!0;break;case"openAfterResume":typeof f.onOpenAfterResume<"u"&&f.onOpenAfterResume(e);break}}function Yt(p){n.state!=="closed"&&(n.state="closed",n.responseBody="",n.messages=[],n.status=p?200:501,Ye())}function Ye(){var p=function(R,k){k(n)};y==null&&_!=null&&_(n.responseBody),e.reconnect=e.mrequest;for(var f=typeof n.responseBody=="string",x=f&&e.trackMessageLength?n.messages.length>0?n.messages:[""]:new Array(n.responseBody),z=0;z<x.length;z++)if(!(x.length>1&&x[z].length===0)){if(n.responseBody=f?w.util.trim(x[z]):x[z],y==null&&_!=null&&_(n.responseBody),n.state==="messageReceived"){if(n.responseBody.length===0)continue;if(f&&h===n.responseBody){c=0;continue}}if(Ge(n),Jn.length>0){E("debug")&&w.util.debug("Invoking "+Jn.length+" global callbacks: "+n.state);try{w.util.each(Jn,p)}catch(R){w.util.log(e.logLevel,["Callback exception"+R])}}if(typeof e.callback=="function"){E("debug")&&w.util.debug("Invoking request callbacks");try{e.callback(n)}catch(R){w.util.log(e.logLevel,["Callback exception"+R])}}}}this.subscribe=function(p){We(p),Oe()},this.execute=function(){Oe()},this.close=function(){ne()},this.disconnect=function(){H()},this.getUrl=function(){return e.url},this.push=function(p,f){if(f!=null){var x=e.dispatchUrl;e.dispatchUrl=f,te(p),e.dispatchUrl=x}else te(p)},this.getUUID=function(){return e.uuid},this.pushLocal=function(p){ae(p)},this.enableProtocol=function(){return e.enableProtocol},this.init=function(){b()},this.request=e,this.response=n}};w.subscribe=function(t,e,n){typeof e=="function"&&w.addCallback(e),typeof t!="string"?n=t:n.url=t,Fa=typeof n<"u"&&typeof n.uuid<"u"?n.uuid:0;var r=new w.AtmosphereRequest(n);return r.execute(),ot[ot.length]=r,r};w.unsubscribe=function(){if(ot.length>0)for(var t=[].concat(ot),e=0;e<t.length;e++){var n=t[e];n.close(),clearTimeout(n.response.request.id),n.heartbeatTimer&&clearTimeout(n.heartbeatTimer)}ot=[],Jn=[]};w.unsubscribeUrl=function(t){var e=-1;if(ot.length>0)for(var n=0;n<ot.length;n++){var r=ot[n];if(r.getUrl()===t){r.close(),clearTimeout(r.response.request.id),r.heartbeatTimer&&clearTimeout(r.heartbeatTimer),e=n;break}}e>=0&&ot.splice(e,1)};w.addCallback=function(t){w.util.inArray(t,Jn)===-1&&Jn.push(t)};w.removeCallback=function(t){var e=w.util.inArray(t,Jn);e!==-1&&Jn.splice(e,1)};w.util={browser:{},parseHeaders:function(t){for(var e,n=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,r={};e=n.exec(t);)r[e[1]]=e[2];return r},now:function(){return new Date().getTime()},isArray:function(t){return Object.prototype.toString.call(t)==="[object Array]"},inArray:function(t,e){if(!Array.prototype.indexOf){for(var n=e.length,r=0;r<n;++r)if(e[r]===t)return r;return-1}return e.indexOf(t)},isBinary:function(t){return/^\[object\s(?:Blob|ArrayBuffer|.+Array)\]$/.test(Object.prototype.toString.call(t))},isFunction:function(t){return Object.prototype.toString.call(t)==="[object Function]"},getAbsoluteURL:function(t){if(typeof document.createElement>"u")return t;var e=document.createElement("div");e.innerHTML='<a href="'+t+'"></a>';var n=window.navigator.userAgent;return n.indexOf("MSIE ")>0||n.indexOf("Trident/")>0||n.indexOf("Edge/")>0?w.util.fixedEncodeURI(decodeURI(e.firstChild.href)):e.firstChild.href},fixedEncodeURI:function(t){return encodeURI(t).replace(/%5B/g,"[").replace(/%5D/g,"]")},prepareURL:function(t){var e=w.util.now(),n=t.replace(/([?&])_=[^&]*/,"$1_="+e);return n+(n===t?(/\?/.test(t)?"&":"?")+"_="+e:"")},trim:function(t){return String.prototype.trim?t.toString().trim():t.toString().replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,"").replace(/\s+/g," ")},param:function(t){var e,n=[];function r(i,a){a=w.util.isFunction(a)?a():a==null?"":a,n.push(encodeURIComponent(i)+"="+encodeURIComponent(a))}function o(i,a){var l;if(w.util.isArray(a))w.util.each(a,function(s,c){/\[\]$/.test(i)?r(i,c):o(i+"["+(typeof c=="object"?s:"")+"]",c)});else if(Object.prototype.toString.call(a)==="[object Object]")for(l in a)o(i+"["+l+"]",a[l]);else r(i,a)}for(e in t)o(e,t[e]);return n.join("&").replace(/%20/g,"+")},storage:function(){try{return!!(window.localStorage&&window.StorageEvent)}catch{return!1}},iterate:function(t,e){var n;return e=e||0,function r(){n=setTimeout(function(){t()!==!1&&r()},e)}(),function(){clearTimeout(n)}},each:function(t,e,n){if(!!t){var r,o=0,i=t.length,a=w.util.isArray(t);if(n){if(a)for(;o<i&&(r=e.apply(t[o],n),r!==!1);o++);else for(o in t)if(r=e.apply(t[o],n),r===!1)break}else if(a)for(;o<i&&(r=e.call(t[o],o,t[o]),r!==!1);o++);else for(o in t)if(r=e.call(t[o],o,t[o]),r===!1)break;return t}},extend:function(t){var e,n,r;for(e=1;e<arguments.length;e++)if((n=arguments[e])!=null)for(r in n)t[r]=n[r];return t},on:function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,n)},off:function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent&&t.detachEvent("on"+e,n)},log:function(t,e){if(window.console){var n=window.console[t];typeof n=="function"&&n.apply(window.console,e)}},warn:function(){w.util.log("warn",arguments)},info:function(){w.util.log("info",arguments)},debug:function(){w.util.log("debug",arguments)},error:function(){w.util.log("error",arguments)},xhr:function(){try{return new window.XMLHttpRequest}catch{try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch{}}},checkCORSSupport:function(){if(w.util.browser.msie&&!window.XDomainRequest&&+w.util.browser.version.split(".")[0]<11)return!0;if(w.util.browser.opera&&+w.util.browser.version.split(".")<12)return!0;if(w.util.trim(navigator.userAgent).slice(0,16)==="KreaTVWebKit/531")return!0;if(w.util.trim(navigator.userAgent).slice(-7).toLowerCase()==="kreatel")return!0;var t=navigator.userAgent.toLowerCase(),e=t.match(/.+android ([0-9]{1,2})/i),n=parseInt(e&&e[0]||-1,10);return!isNaN(n)&&n>-1&&n<3}};w.util.now();(function(){var t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||/(trident)(?:.*? rv:([\w.]+)|)/.exec(t)||t.indexOf("android")<0&&/version\/(.+) (safari)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];e[2]==="safari"&&(e[2]=e[1],e[1]="safari"),w.util.browser[e[1]||""]=!0,w.util.browser.version=e[2]||"0",w.util.browser.vmajor=w.util.browser.version.split(".")[0],w.util.browser.trident&&(w.util.browser.msie=!0),(w.util.browser.msie||w.util.browser.mozilla&&+w.util.browser.version.split(".")[0]==1)&&(w.util.storage=!1)})();w.callbacks={unload:function(){w.util.debug(new Date+" Atmosphere: unload event"),w.unsubscribe()},beforeUnload:function(){w.util.debug(new Date+" Atmosphere: beforeunload event"),w._beforeUnloadTimeoutId!=null&&clearTimeout(w._beforeUnloadTimeoutId),w._beforeUnloadState=!0,w._beforeUnloadTimeoutId=setTimeout(function(){w.util.debug(new Date+" Atmosphere: beforeunload event timeout reached. Reset _beforeUnloadState flag"),w._beforeUnloadState=!1},5e3)},offline:function(){if(w.util.debug(new Date+" Atmosphere: offline event"),pl=!0,ot.length>0)for(var t=[].concat(ot),e=0;e<t.length;e++){var n=t[e];n.request.handleOnlineOffline&&(n.close(),clearTimeout(n.response.request.id),n.heartbeatTimer&&clearTimeout(n.heartbeatTimer))}},online:function(){if(w.util.debug(new Date+" Atmosphere: online event"),ot.length>0)for(var t=0;t<ot.length;t++)ot[t].request.handleOnlineOffline&&(ot[t].init(),ot[t].execute());pl=!1}};w.bindEvents=function(){w.util.on(window,"unload",w.callbacks.unload),w.util.on(window,"beforeunload",w.callbacks.beforeUnload),w.util.on(window,"offline",w.callbacks.offline),w.util.on(window,"online",w.callbacks.online)};w.unbindEvents=function(){w.util.off(window,"unload",w.callbacks.unload),w.util.off(window,"beforeunload",w.callbacks.beforeUnload),w.util.off(window,"offline",w.callbacks.offline),w.util.off(window,"online",w.callbacks.online)};w.bindEvents();var sn;(function(t){t.ACTIVE="active",t.INACTIVE="inactive"})(sn||(sn={}));class fx extends EventTarget{constructor(){var e,n;if(super(),Object.defineProperty(this,"nextId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"endpointInfos",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"onNextCallbacks",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"onCompleteCallbacks",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"onErrorCallbacks",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"socket",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:sn.INACTIVE}),Object.defineProperty(this,"pendingMessages",{enumerable:!0,configurable:!0,writable:!0,value:[]}),!(!((n=(e=window.Vaadin)===null||e===void 0?void 0:e.featureFlags)===null||n===void 0)&&n.hillaPush))throw new Error("Push support in Hilla is not enabled. Enable it in the debug window or by adding com.vaadin.experimental.hillaPush=true to vaadin-featureflags.properties");this.connectWebsocket()}connectWebsocket(){const e=qg(document),n={onMessage:r=>{this.handleMessage(JSON.parse(r.responseBody))},onOpen:r=>{this.state===sn.INACTIVE&&(this.state=sn.ACTIVE,this.dispatchEvent(new CustomEvent("state-changed",{detail:{active:!0}})),this.sendPendingMessages())},onReopen:r=>{this.state===sn.INACTIVE&&(this.state=sn.ACTIVE,this.dispatchEvent(new CustomEvent("state-changed",{detail:{active:!0}})),this.sendPendingMessages())},onClose:r=>{this.state===sn.ACTIVE&&(this.state=sn.INACTIVE,this.dispatchEvent(new CustomEvent("state-changed",{detail:{active:!1}})))},onError:r=>{console.error("error in push communication",r)}};this.socket=w.subscribe({url:"/HILLA/push",transport:"websocket",fallbackTransport:"long-polling",contentType:"application/json; charset=UTF-8",reconnectInterval:5e3,timeout:-1,maxReconnectOnClose:1e7,trackMessageLength:!0,enableProtocol:!0,headers:e,...n})}handleMessage(e){const{id:n}=e,r=this.endpointInfos.get(n);if(e["@type"]==="update"){const o=this.onNextCallbacks.get(n);o&&o(e.item)}else if(e["@type"]==="complete"){const o=this.onCompleteCallbacks.get(n);o&&o(),this.removeSubscription(n)}else if(e["@type"]==="error"){const o=this.onErrorCallbacks.get(n);if(o&&o(),this.removeSubscription(n),!o)throw new Error(`Error in ${r}: ${e.message}`)}else throw new Error(`Unknown message from server: ${e}`)}removeSubscription(e){this.onNextCallbacks.delete(e),this.onCompleteCallbacks.delete(e),this.onErrorCallbacks.delete(e),this.endpointInfos.delete(e)}sendPendingMessages(){this.pendingMessages.forEach(e=>this.send(e)),this.pendingMessages=[]}send(e){this.state===sn.INACTIVE?this.pendingMessages.push(e):this.socket.push(JSON.stringify(e))}subscribe(e,n,r){const o=this.nextId.toString();this.nextId+=1;const i=r||[],a={"@type":"subscribe",id:o,endpointName:e,methodName:n,params:i},l=`${e}.${n}(${JSON.stringify(i)})`;this.send(a),this.endpointInfos.set(o,l);const s={onNext:c=>(this.onNextCallbacks.set(o,c),s),onComplete:c=>(this.onCompleteCallbacks.set(o,c),s),onError:c=>(this.onErrorCallbacks.set(o,c),s),cancel:()=>{if(!this.endpointInfos.has(o))return;const c={"@type":"unsubscribe",id:o};this.send(c),this.removeSubscription(o)},context:c=>(c.addController({hostDisconnected:()=>{s.cancel()}}),s)};return s}}const vt=window;vt.Vaadin=vt.Vaadin||{};vt.Vaadin.registrations=vt.Vaadin.registrations||[];vt.Vaadin.registrations.push({is:"endpoint"});class vu extends Error{constructor(e,n,r){super(e),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.type=n,this.detail=r}}class hx extends vu{constructor(e,n,r){super(e,r,n),Object.defineProperty(this,"validationErrorMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"validationErrorData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.validationErrorMessage=e,this.detail=null,this.validationErrorData=n}}class ml extends vu{constructor(e,n){super(e,"EndpointResponseError",n),Object.defineProperty(this,"response",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.response=n}get status(){return this.response.status}}class px extends ml{constructor(e,n){super(e,n),this.type="UnauthorizedResponseError"}}class mx extends ml{constructor(e,n){super(e,n),this.type="ForbiddenResponseError"}}const gx=t=>{throw t.validationErrorData?new hx(t.message,t.validationErrorData,t.type):new vu(t.message,t.type,t.detail)},_x=async t=>{if(!t.ok){const e=await t.text();let n;try{n=JSON.parse(e)}catch{n=null}if(n!==null)gx(n);else{if(e!==null&&e.length>0)throw new ml(e,t);{const r=`expected "200 OK" response, but got ${t.status} ${t.statusText}`;switch(t.status){case 401:throw new px(r,t);case 403:throw new mx(r,t);default:throw new ml(r,t)}}}}};function Ph(){var t,e;return((e=(t=vt.Vaadin.Flow)===null||t===void 0?void 0:t.clients)===null||e===void 0?void 0:e.TypeScript)!==void 0}class bx{constructor(e={}){Object.defineProperty(this,"prefix",{enumerable:!0,configurable:!0,writable:!0,value:"/connect"}),Object.defineProperty(this,"middlewares",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_fluxConnection",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),e.prefix&&(this.prefix=e.prefix),e.middlewares&&(this.middlewares=e.middlewares),je.create(),vt.addEventListener("online",()=>{Ph()||(vt.Vaadin.connectionState.state=at.CONNECTED)}),vt.addEventListener("offline",()=>{Ph()||(vt.Vaadin.connectionState.state=at.CONNECTION_LOST)})}async call(e,n,r,o){if(arguments.length<2)throw new TypeError(`2 arguments required, but got only ${arguments.length}`);const a={Accept:"application/json","Content-Type":"application/json",...qg(document)},l=v=>Object.keys(v).reduce((y,P)=>(y[P]===void 0&&(y[P]=null),y),v),s=new Request(`${this.prefix}/${e}/${n}`,{method:"POST",headers:a,body:r!==void 0?JSON.stringify(l(r)):void 0}),c={endpoint:e,method:n,params:r,request:s},d=async(v,y)=>{const P=await y(v);await _x(P);const g=await P.text();return JSON.parse(g,(m,b)=>b===null?void 0:b)},h=async v=>(vt.Vaadin.connectionState.loadingStarted(),fetch(v.request,{signal:o==null?void 0:o.signal}).then(y=>(vt.Vaadin.connectionState.loadingFinished(),y)).catch(y=>(y.name==="AbortError"?vt.Vaadin.connectionState.loadingFinished():vt.Vaadin.connectionState.loadingFailed(),Promise.reject(y))));return[d].concat(this.middlewares).reduceRight((v,y)=>P=>typeof y=="function"?y(P,v):y.invoke(P,v),h)(c)}subscribe(e,n,r){return this.fluxConnection.subscribe(e,n,r?Object.values(r):[])}get fluxConnection(){return this._fluxConnection||(this._fluxConnection=new fx),this._fluxConnection}}const Fi=window;Fi.Vaadin=Fi.Vaadin||{};Fi.Vaadin.registrations=Fi.Vaadin.registrations||[];Fi.Vaadin.registrations.push({is:"@hilla/frontend",version:"1.3.2"});const vx=new bx({prefix:"connect"});function Oh(t){return vx.call("ViolatorEndpoint","getViolatorReport",{},t)}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yx extends HTMLElement{static get version(){return"23.3.2"}}customElements.define("vaadin-lumo-styles",yx);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const e_=t=>class extends t{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(n){this._set_theme(n)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const t_=[];function he(t,e,n={}){t&&Sx(t)&&console.warn(`The custom element definition for "${t}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=Cx(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,n):t_.push({themeFor:t,styles:e,include:n.include,moduleId:n.moduleId})}function Vc(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():t_}function wx(t,e){return(t||"").split(" ").some(n=>new RegExp(`^${n.split("*").join(".*")}$`).test(e))}function xx(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function Cx(t=[]){return[t].flat(1/0).filter(e=>e instanceof bu?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function n_(t){const e=[];return t.include&&[].concat(t.include).forEach(n=>{const r=Vc().find(o=>o.moduleId===n);r?e.push(...n_(r),...r.styles):console.warn(`Included moduleId ${n} not found in style registry`)},t.styles),e}function Ax(t,e){const n=document.createElement("style");n.innerHTML=t.map(r=>r.cssText).join(`
`),e.content.appendChild(n)}function Ex(t){const e=`${t}-default-theme`,n=Vc().filter(r=>r.moduleId!==e&&wx(r.themeFor,t)).map(r=>({...r,styles:[...n_(r),...r.styles],includePriority:xx(r.moduleId)})).sort((r,o)=>o.includePriority-r.includePriority);return n.length>0?n:Vc().filter(r=>r.moduleId===e)}function Sx(t){return r_(customElements.get(t))}function r_(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}const Mt=t=>class extends e_(t){static finalize(){if(super.finalize(),this.elementStyles)return;const n=this.prototype._template;!n||r_(this)||Ax(this.getStylesForThis(),n)}static finalizeStyles(n){const r=this.getStylesForThis();return n?[...super.finalizeStyles(n),...r]:r}static getStylesForThis(){const n=Object.getPrototypeOf(this.prototype),r=(n?n.constructor.__themes:[])||[];this.__themes=[...r,...Ex(this.is)];const o=this.__themes.flatMap(i=>i.styles);return o.filter((i,a)=>a===o.lastIndexOf(i))}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kx=Z`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,o_=document.createElement("template");o_.innerHTML=`<style>${kx.toString().replace(":host","html")}</style>`;document.head.appendChild(o_.content);const yu=Z`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;he("",yu,{moduleId:"lumo-color"});const Tx=Z`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;he("",[yu,Tx],{moduleId:"lumo-color-legacy"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const i_=document.createElement("template");i_.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(i_.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Px=Z`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,a_=document.createElement("template");a_.innerHTML=`<style>${Px.toString().replace(":host","html")}</style>`;document.head.appendChild(a_.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const l_=Z`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,s_=document.createElement("template");s_.innerHTML=`<style>${l_.toString().replace(":host","html")}</style>`;document.head.appendChild(s_.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ox=Z`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,c_=document.createElement("template");c_.innerHTML=`<style>${Ox.toString().replace(":host","html")}</style>`;document.head.appendChild(c_.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lx=Z`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,d_=Z`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;he("",d_,{moduleId:"lumo-typography"});const u_=document.createElement("template");u_.innerHTML=`<style>${Lx.toString().replace(":host","html")}</style>`;document.head.appendChild(u_.content);he("vaadin-checkbox",Z`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='checkbox'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
      flex: none;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--lumo-size-m) / 2 + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ix=/(url\()([^)]*)(\))/g,zx=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,va,kt;function pi(t,e){if(t&&zx.test(t)||t==="//")return t;if(va===void 0){va=!1;try{const n=new URL("b","http://a");n.pathname="c%20d",va=n.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),va)try{return new URL(t,e).href}catch{return t}return kt||(kt=document.implementation.createHTMLDocument("temp"),kt.base=kt.createElement("base"),kt.head.appendChild(kt.base),kt.anchor=kt.createElement("a"),kt.body.appendChild(kt.anchor)),kt.base.href=e,kt.anchor.href=t,kt.anchor.href||t}function wu(t,e){return t.replace(Ix,function(n,r,o,i){return r+"'"+pi(o.replace(/["']/g,""),e)+"'"+i})}function xu(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rx=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Nx=Rx&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let Dx=window.Polymer&&window.Polymer.rootPath||xu(document.baseURI||window.location.href),gl=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let _l=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Mx=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Fx=window.Polymer&&window.Polymer.legacyOptimizations||!1,f_=window.Polymer&&window.Polymer.legacyWarnings||!1,$x=window.Polymer&&window.Polymer.syncInitialRender||!1,jc=window.Polymer&&window.Polymer.legacyUndefined||!1,Bx=window.Polymer&&window.Polymer.orderedComputed||!1,Lh=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Hx=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Ux=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Vx=0;const Ie=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=Vx++;function r(o){let i=o.__mixinSet;if(i&&i[n])return o;let a=e,l=a.get(o);if(!l){l=t(o),a.set(o,l);let s=Object.create(l.__mixinSet||i||null);s[n]=!0,l.__mixinSet=s}return l}return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Cu={},h_={};function Ih(t,e){Cu[t]=h_[t.toLowerCase()]=e}function zh(t){return Cu[t]||h_[t.toLowerCase()]}function jx(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class $i extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,n){if(e){let r=zh(e);return r&&n?r.querySelector(n):r}return null}attributeChangedCallback(e,n,r,o){n!==r&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,n=pi(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=xu(n)}return this.__assetpath}register(e){if(e=e||this.id,e){if(_l&&zh(e)!==void 0)throw Ih(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Ih(e,this),jx(this)}}}$i.prototype.modules=Cu;customElements.define("dom-module",$i);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Wx="link[rel=import][type~=css]",Gx="include",Rh="shady-unscoped";function p_(t){return $i.import(t)}function Nh(t){let e=t.body?t.body:t;const n=wu(e.textContent,t.baseURI),r=document.createElement("style");return r.textContent=n,r}function Yx(t){const e=t.trim().split(/\s+/),n=[];for(let r=0;r<e.length;r++)n.push(...Kx(e[r]));return n}function Kx(t){const e=p_(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const n=[];n.push(...g_(e));const r=e.querySelector("template");r&&n.push(...m_(r,e.assetpath)),e._styles=n}return e._styles}function m_(t,e){if(!t._styles){const n=[],r=t.content.querySelectorAll("style");for(let o=0;o<r.length;o++){let i=r[o],a=i.getAttribute(Gx);a&&n.push(...Yx(a).filter(function(l,s,c){return c.indexOf(l)===s})),e&&(i.textContent=wu(i.textContent,e)),n.push(i)}t._styles=n}return t._styles}function qx(t){let e=p_(t);return e?g_(e):[]}function g_(t){const e=[],n=t.querySelectorAll(Wx);for(let r=0;r<n.length;r++){let o=n[r];if(o.import){const i=o.import,a=o.hasAttribute(Rh);if(a&&!i._unscopedStyle){const l=Nh(i);l.setAttribute(Rh,""),i._unscopedStyle=l}else i._style||(i._style=Nh(i));e.push(a?i._unscopedStyle:i._style)}}return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xe=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Wc(t){return t.indexOf(".")>=0}function Lr(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function Qx(t,e){return t.indexOf(e+".")===0}function bl(t,e){return e.indexOf(t+".")===0}function vl(t,e,n){return e+n.slice(t.length)}function ti(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let r=t[n].toString().split(".");for(let o=0;o<r.length;o++)e.push(r[o])}return e.join(".")}else return t}function __(t){return Array.isArray(t)?ti(t).split("."):t.toString().split(".")}function bt(t,e,n){let r=t,o=__(e);for(let i=0;i<o.length;i++){if(!r)return;let a=o[i];r=r[a]}return n&&(n.path=o.join(".")),r}function Dh(t,e,n){let r=t,o=__(e),i=o[o.length-1];if(o.length>1){for(let a=0;a<o.length-1;a++){let l=o[a];if(r=r[l],!r)return}r[i]=n}else r[e]=n;return o.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yl={},Xx=/-[a-z]/g,Jx=/([A-Z])/g;function b_(t){return yl[t]||(yl[t]=t.indexOf("-")<0?t:t.replace(Xx,e=>e[1].toUpperCase()))}function Kl(t){return yl[t]||(yl[t]=t.replace(Jx,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Zx=0,v_=0,so=[],e1=0,Gc=!1,y_=document.createTextNode("");new window.MutationObserver(t1).observe(y_,{characterData:!0});function t1(){Gc=!1;const t=so.length;for(let e=0;e<t;e++){let n=so[e];if(n)try{n()}catch(r){setTimeout(()=>{throw r})}}so.splice(0,t),v_+=t}const w_={run(t){return Gc||(Gc=!0,y_.textContent=e1++),so.push(t),Zx++},cancel(t){const e=t-v_;if(e>=0){if(!so[e])throw new Error("invalid async handle: "+t);so[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n1=w_,x_=Ie(t=>{class e extends t{static createProperties(r){const o=this.prototype;for(let i in r)i in o||o._createPropertyAccessor(i)}static attributeNameForProperty(r){return r.toLowerCase()}static typeForProperty(r){}_createPropertyAccessor(r,o){this._addPropertyToAttributeMap(r),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[r]||(this.__dataHasAccessor[r]=!0,this._definePropertyAccessor(r,o))}_addPropertyToAttributeMap(r){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let o=this.__dataAttributes[r];return o||(o=this.constructor.attributeNameForProperty(r),this.__dataAttributes[o]=r),o}_definePropertyAccessor(r,o){Object.defineProperty(this,r,{get(){return this.__data[r]},set:o?function(){}:function(i){this._setPendingProperty(r,i,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let r in this.__dataHasAccessor)this.hasOwnProperty(r)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[r]=this[r],delete this[r])}_initializeInstanceProperties(r){Object.assign(this,r)}_setProperty(r,o){this._setPendingProperty(r,o)&&this._invalidateProperties()}_getProperty(r){return this.__data[r]}_setPendingProperty(r,o,i){let a=this.__data[r],l=this._shouldPropertyChange(r,o,a);return l&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(r in this.__dataOld)&&(this.__dataOld[r]=a),this.__data[r]=o,this.__dataPending[r]=o),l}_isPropertyPending(r){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(r))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,n1.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const r=this.__data,o=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(r,o,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(r,o,i)),this.__dataCounter--}_shouldPropertiesChange(r,o,i){return Boolean(o)}_propertiesChanged(r,o,i){}_shouldPropertyChange(r,o,i){return i!==o&&(i===i||o===o)}attributeChangedCallback(r,o,i,a){o!==i&&this._attributeToProperty(r,i),super.attributeChangedCallback&&super.attributeChangedCallback(r,o,i,a)}_attributeToProperty(r,o,i){if(!this.__serializing){const a=this.__dataAttributes,l=a&&a[r]||r;this[l]=this._deserializeValue(o,i||this.constructor.typeForProperty(l))}}_propertyToAttribute(r,o,i){this.__serializing=!0,i=arguments.length<3?this[r]:i,this._valueToNodeAttribute(this,i,o||this.constructor.attributeNameForProperty(r)),this.__serializing=!1}_valueToNodeAttribute(r,o,i){const a=this._serializeValue(o);(i==="class"||i==="name"||i==="slot")&&(r=Xe(r)),a===void 0?r.removeAttribute(i):r.setAttribute(i,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(r){switch(typeof r){case"boolean":return r?"":void 0;default:return r!=null?r.toString():void 0}}_deserializeValue(r,o){switch(o){case Boolean:return r!==null;case Number:return Number(r);default:return r}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const C_={};let ya=HTMLElement.prototype;for(;ya;){let t=Object.getOwnPropertyNames(ya);for(let e=0;e<t.length;e++)C_[t[e]]=!0;ya=Object.getPrototypeOf(ya)}const r1=(()=>window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1)();function o1(t,e){if(!C_[e]){let n=t[e];n!==void 0&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}const i1=Ie(t=>{const e=x_(t);class n extends e{static createPropertiesForAttributes(){let o=this.observedAttributes;for(let i=0;i<o.length;i++)this.prototype._createPropertyAccessor(b_(o[i]))}static attributeNameForProperty(o){return Kl(o)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(o){for(let i in o)this._setProperty(i,o[i])}_ensureAttribute(o,i){const a=this;a.hasAttribute(o)||this._valueToNodeAttribute(a,i,o)}_serializeValue(o){switch(typeof o){case"object":if(o instanceof Date)return o.toString();if(o){if(r1(o))return o;try{return JSON.stringify(o)}catch{return""}}default:return super._serializeValue(o)}}_deserializeValue(o,i){let a;switch(i){case Object:try{a=JSON.parse(o)}catch{a=o}break;case Array:try{a=JSON.parse(o)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${o}`)}break;case Date:a=isNaN(o)?String(o):Number(o),a=new Date(a);break;default:a=super._deserializeValue(o,i);break}return a}_definePropertyAccessor(o,i){o1(this,o),super._definePropertyAccessor(o,i)}_hasAccessor(o){return this.__dataHasAccessor&&this.__dataHasAccessor[o]}_isPropertyPending(o){return Boolean(this.__dataPending&&o in this.__dataPending)}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const a1={"dom-if":!0,"dom-repeat":!0};let Mh=!1,Fh=!1;function l1(){if(!Mh){Mh=!0;const t=document.createElement("textarea");t.placeholder="a",Fh=t.placeholder===t.textContent}return Fh}function s1(t){l1()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const c1=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,n,r)=>{const o=n.getAttribute(r);if(t&&r.startsWith("on-")){e.setAttribute(r,t.createScript(o,r));return}e.setAttribute(r,o)}})();function d1(t){let e=t.getAttribute("is");if(e&&a1[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;){const{name:r}=n.attributes[0];c1(t,n,r),n.removeAttribute(r)}}return t}function A_(t,e){let n=e.parentInfo&&A_(t,e.parentInfo);if(n){for(let r=n.firstChild,o=0;r;r=r.nextSibling)if(e.parentIndex===o++)return r}else return t}function u1(t,e,n,r){r.id&&(e[r.id]=n)}function f1(t,e,n){if(n.events&&n.events.length)for(let r=0,o=n.events,i;r<o.length&&(i=o[r]);r++)t._addMethodEventListenerToNode(e,i.name,i.value,t)}function h1(t,e,n,r){n.templateInfo&&(e._templateInfo=n.templateInfo,e._parentTemplateInfo=r)}function p1(t,e,n){return t=t._methodHost||t,function(o){t[n]?t[n](o,o.detail):console.warn("listener method `"+n+"` not defined")}}const m1=Ie(t=>{class e extends t{static _parseTemplate(r,o){if(!r._templateInfo){let i=r._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(o),i.stripWhiteSpace=o&&o.stripWhiteSpace||r.hasAttribute&&r.hasAttribute("strip-whitespace"),this._parseTemplateContent(r,i,{parent:null})}return r._templateInfo}static _parseTemplateContent(r,o,i){return this._parseTemplateNode(r.content,o,i)}static _parseTemplateNode(r,o,i){let a=!1,l=r;return l.localName=="template"&&!l.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(l,o,i)||a:l.localName==="slot"&&(o.hasInsertionPoint=!0),s1(l),l.firstChild&&this._parseTemplateChildNodes(l,o,i),l.hasAttributes&&l.hasAttributes()&&(a=this._parseTemplateNodeAttributes(l,o,i)||a),a||i.noted}static _parseTemplateChildNodes(r,o,i){if(!(r.localName==="script"||r.localName==="style"))for(let a=r.firstChild,l=0,s;a;a=s){if(a.localName=="template"&&(a=d1(a)),s=a.nextSibling,a.nodeType===Node.TEXT_NODE){let d=s;for(;d&&d.nodeType===Node.TEXT_NODE;)a.textContent+=d.textContent,s=d.nextSibling,r.removeChild(d),d=s;if(o.stripWhiteSpace&&!a.textContent.trim()){r.removeChild(a);continue}}let c={parentIndex:l,parentInfo:i};this._parseTemplateNode(a,o,c)&&(c.infoIndex=o.nodeInfoList.push(c)-1),a.parentNode&&l++}}static _parseTemplateNestedTemplate(r,o,i){let a=r,l=this._parseTemplate(a,o);return(l.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),i.templateInfo=l,!0}static _parseTemplateNodeAttributes(r,o,i){let a=!1,l=Array.from(r.attributes);for(let s=l.length-1,c;c=l[s];s--)a=this._parseTemplateNodeAttribute(r,o,i,c.name,c.value)||a;return a}static _parseTemplateNodeAttribute(r,o,i,a,l){return a.slice(0,3)==="on-"?(r.removeAttribute(a),i.events=i.events||[],i.events.push({name:a.slice(3),value:l}),!0):a==="id"?(i.id=l,!0):!1}static _contentForTemplate(r){let o=r._templateInfo;return o&&o.content||r.content}_stampTemplate(r,o){r&&!r.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(r),o=o||this.constructor._parseTemplate(r);let i=o.nodeInfoList,a=o.content||r.content,l=document.importNode(a,!0);l.__noInsertionPoint=!o.hasInsertionPoint;let s=l.nodeList=new Array(i.length);l.$={};for(let c=0,d=i.length,h;c<d&&(h=i[c]);c++){let u=s[c]=A_(l,h);u1(this,l.$,u,h),h1(this,u,h,o),f1(this,u,h)}return l=l,l}_addMethodEventListenerToNode(r,o,i,a){a=a||r;let l=p1(a,o,i);return this._addEventListenerToNode(r,o,l),l}_addEventListenerToNode(r,o,i){r.addEventListener(o,i)}_removeEventListenerFromNode(r,o,i){r.removeEventListener(o,i)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Bi=0;const Hi=[],se={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},E_="__computeInfo",g1=/[A-Z]/;function zs(t,e,n){let r=t[e];if(!r)r=t[e]={};else if(!t.hasOwnProperty(e)&&(r=t[e]=Object.create(t[e]),n))for(let o in r){let i=r[o],a=r[o]=Array(i.length);for(let l=0;l<i.length;l++)a[l]=i[l]}return r}function ni(t,e,n,r,o,i){if(e){let a=!1;const l=Bi++;for(let s in n){let c=o?Lr(s):s,d=e[c];if(d)for(let h=0,u=d.length,_;h<u&&(_=d[h]);h++)(!_.info||_.info.lastRun!==l)&&(!o||Au(s,_.trigger))&&(_.info&&(_.info.lastRun=l),_.fn(t,s,n,r,_.info,o,i),a=!0)}return a}return!1}function _1(t,e,n,r,o,i,a,l){let s=!1,c=a?Lr(r):r,d=e[c];if(d)for(let h=0,u=d.length,_;h<u&&(_=d[h]);h++)(!_.info||_.info.lastRun!==n)&&(!a||Au(r,_.trigger))&&(_.info&&(_.info.lastRun=n),_.fn(t,r,o,i,_.info,a,l),s=!0);return s}function Au(t,e){if(e){let n=e.name;return n==t||!!(e.structured&&Qx(n,t))||!!(e.wildcard&&bl(n,t))}else return!0}function $h(t,e,n,r,o){let i=typeof o.method=="string"?t[o.method]:o.method,a=o.property;i?i.call(t,t.__data[a],r[a]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function b1(t,e,n,r,o){let i=t[se.NOTIFY],a,l=Bi++;for(let c in e)e[c]&&(i&&_1(t,i,l,c,n,r,o)||o&&v1(t,c,n))&&(a=!0);let s;a&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}function v1(t,e,n){let r=Lr(e);if(r!==e){let o=Kl(r)+"-changed";return S_(t,o,n[e],e),!0}return!1}function S_(t,e,n,r){let o={value:n,queueProperty:!0};r&&(o.path=r),Xe(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function y1(t,e,n,r,o,i){let l=(i?Lr(e):e)!=e?e:null,s=l?bt(t,l):t.__data[e];l&&s===void 0&&(s=n[e]),S_(t,o.eventName,s,l)}function w1(t,e,n,r,o){let i,a=t.detail,l=a&&a.path;l?(r=vl(n,r,l),i=a&&a.value):i=t.currentTarget[n],i=o?!i:i,(!e[se.READ_ONLY]||!e[se.READ_ONLY][r])&&e._setPendingPropertyOrPath(r,i,!0,Boolean(l))&&(!a||!a.queueProperty)&&e._invalidateProperties()}function x1(t,e,n,r,o){let i=t.__data[e];gl&&(i=gl(i,o.attrName,"attribute",t)),t._propertyToAttribute(e,o.attrName,i)}function C1(t,e,n,r){let o=t[se.COMPUTE];if(o)if(Bx){Bi++;const i=E1(t),a=[];for(let s in e)Bh(s,o,a,i,r);let l;for(;l=a.shift();)k_(t,"",e,n,l)&&Bh(l.methodInfo,o,a,i,r);Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;ni(t,o,i,n,r);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}const A1=(t,e,n)=>{let r=0,o=e.length-1,i=-1;for(;r<=o;){const a=r+o>>1,l=n.get(e[a].methodInfo)-n.get(t.methodInfo);if(l<0)r=a+1;else if(l>0)o=a-1;else{i=a;break}}i<0&&(i=o+1),e.splice(i,0,t)},Bh=(t,e,n,r,o)=>{const i=o?Lr(t):t,a=e[i];if(a)for(let l=0;l<a.length;l++){const s=a[l];s.info.lastRun!==Bi&&(!o||Au(t,s.trigger))&&(s.info.lastRun=Bi,A1(s.info,n,r))}};function E1(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const n=t[se.COMPUTE];let{counts:r,ready:o,total:i}=S1(t),a;for(;a=o.shift();){e.set(a,e.size);const l=n[a];l&&l.forEach(s=>{const c=s.info.methodInfo;--i,--r[c]===0&&o.push(c)})}i!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function S1(t){const e=t[E_],n={},r=t[se.COMPUTE],o=[];let i=0;for(let a in e){const l=e[a];i+=n[a]=l.args.filter(s=>!s.literal).length+(l.dynamicFn?1:0)}for(let a in r)e[a]||o.push(a);return{counts:n,ready:o,total:i}}function k_(t,e,n,r,o){let i=Yc(t,e,n,r,o);if(i===Hi)return!1;let a=o.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,i,!0):(t[a]=i,!1)}function k1(t,e,n){let r=t.__dataLinkedPaths;if(r){let o;for(let i in r){let a=r[i];bl(i,e)?(o=vl(i,a,e),t._setPendingPropertyOrPath(o,n,!0,!0)):bl(a,e)&&(o=vl(a,i,e),t._setPendingPropertyOrPath(o,n,!0,!0))}}}function Rs(t,e,n,r,o,i,a){n.bindings=n.bindings||[];let l={kind:r,target:o,parts:i,literal:a,isCompound:i.length!==1};if(n.bindings.push(l),I1(l)){let{event:c,negate:d}=l.parts[0];l.listenerEvent=c||Kl(o)+"-changed",l.listenerNegate=d}let s=e.nodeInfoList.length;for(let c=0;c<l.parts.length;c++){let d=l.parts[c];d.compoundIndex=c,T1(t,e,l,d,s)}}function T1(t,e,n,r,o){if(!r.literal)if(n.kind==="attribute"&&n.target[0]==="-")console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let i=r.dependencies,a={index:o,binding:n,part:r,evaluator:t};for(let l=0;l<i.length;l++){let s=i[l];typeof s=="string"&&(s=P_(s),s.wildcard=!0),t._addTemplatePropertyEffect(e,s.rootProperty,{fn:P1,info:a,trigger:s})}}}function P1(t,e,n,r,o,i,a){let l=a[o.index],s=o.binding,c=o.part;if(i&&c.source&&e.length>c.source.length&&s.kind=="property"&&!s.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[s.target]){let d=n[e];e=vl(c.source,s.target,e),l._setPendingPropertyOrPath(e,d,!1,!0)&&t._enqueueClient(l)}else{let d=o.evaluator._evaluateBinding(t,c,e,n,r,i);d!==Hi&&O1(t,l,s,c,d)}}function O1(t,e,n,r,o){if(o=L1(e,o,n,r),gl&&(o=gl(o,n.target,n.kind,e)),n.kind=="attribute")t._valueToNodeAttribute(e,o,n.target);else{let i=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[i]?(!e[se.READ_ONLY]||!e[se.READ_ONLY][i])&&e._setPendingProperty(i,o)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,i,o)}}function L1(t,e,n,r){if(n.isCompound){let o=t.__dataCompoundStorage[n.target];o[r.compoundIndex]=e,e=o.join("")}return n.kind!=="attribute"&&(n.target==="textContent"||n.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e==null?"":e),e}function I1(t){return Boolean(t.target)&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function z1(t,e){let{nodeList:n,nodeInfoList:r}=e;if(r.length)for(let o=0;o<r.length;o++){let i=r[o],a=n[o],l=i.bindings;if(l)for(let s=0;s<l.length;s++){let c=l[s];R1(a,c),N1(a,t,c)}a.__dataHost=t}}function R1(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),r=e.parts,o=new Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a].literal;let i=e.target;n[i]=o,e.literal&&e.kind=="property"&&(i==="className"&&(t=Xe(t)),t[i]=e.literal)}}function N1(t,e,n){if(n.listenerEvent){let r=n.parts[0];t.addEventListener(n.listenerEvent,function(o){w1(o,e,n.target,r.source,r.negate)})}}function Hh(t,e,n,r,o,i){i=e.static||i&&(typeof i!="object"||i[e.methodName]);let a={methodName:e.methodName,args:e.args,methodInfo:o,dynamicFn:i};for(let l=0,s;l<e.args.length&&(s=e.args[l]);l++)s.literal||t._addPropertyEffect(s.rootProperty,n,{fn:r,info:a,trigger:s});return i&&t._addPropertyEffect(e.methodName,n,{fn:r,info:a}),a}function Yc(t,e,n,r,o){let i=t._methodHost||t,a=i[o.methodName];if(a){let l=t._marshalArgs(o.args,e,n);return l===Hi?Hi:a.apply(i,l)}else o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const D1=[],T_="(?:[a-zA-Z_$][\\w.:$\\-*]*)",M1="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",F1="(?:'(?:[^'\\\\]|\\\\.)*')",$1='(?:"(?:[^"\\\\]|\\\\.)*")',B1="(?:"+F1+"|"+$1+")",Uh="(?:("+T_+"|"+M1+"|"+B1+")\\s*)",H1="(?:"+Uh+"(?:,\\s*"+Uh+")*)",U1="(?:\\(\\s*(?:"+H1+"?)\\)\\s*)",V1="("+T_+"\\s*"+U1+"?)",j1="(\\[\\[|{{)\\s*",W1="(?:]]|}})",G1="(?:(!)\\s*)?",Y1=j1+G1+V1+W1,Vh=new RegExp(Y1,"g");function jh(t){let e="";for(let n=0;n<t.length;n++){let r=t[n].literal;e+=r||""}return e}function Ns(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let r={methodName:e[1],static:!0,args:D1};if(e[2].trim()){let o=e[2].replace(/\\,/g,"&comma;").split(",");return K1(o,r)}else return r}return null}function K1(t,e){return e.args=t.map(function(n){let r=P_(n);return r.literal||(e.static=!1),r},this),e}function P_(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},r=e[0];switch(r==="-"&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0;break}return n.literal||(n.rootProperty=Lr(e),n.structured=Wc(e),n.structured&&(n.wildcard=e.slice(-2)==".*",n.wildcard&&(n.name=e.slice(0,-2)))),n}function Wh(t,e,n){let r=bt(t,n);return r===void 0&&(r=e[n]),r}function O_(t,e,n,r){const o={indexSplices:r};jc&&!t._overrideLegacyUndefined&&(e.splices=o),t.notifyPath(n+".splices",o),t.notifyPath(n+".length",e.length),jc&&!t._overrideLegacyUndefined&&(o.indexSplices=[])}function Ho(t,e,n,r,o,i){O_(t,e,n,[{index:r,addedCount:o,removed:i,object:e,type:"splice"}])}function q1(t){return t[0].toUpperCase()+t.substring(1)}const Eu=Ie(t=>{const e=m1(i1(t));class n extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return se}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Uo.length){let o=Uo[Uo.length-1];o._enqueueClient(this),this.__dataHost=o}}_initializeProtoProperties(o){this.__data=Object.create(o),this.__dataPending=Object.create(o),this.__dataOld={}}_initializeInstanceProperties(o){let i=this[se.READ_ONLY];for(let a in o)(!i||!i[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=o[a])}_addPropertyEffect(o,i,a){this._createPropertyAccessor(o,i==se.READ_ONLY);let l=zs(this,i,!0)[o];l||(l=this[i][o]=[]),l.push(a)}_removePropertyEffect(o,i,a){let l=zs(this,i,!0)[o],s=l.indexOf(a);s>=0&&l.splice(s,1)}_hasPropertyEffect(o,i){let a=this[i];return Boolean(a&&a[o])}_hasReadOnlyEffect(o){return this._hasPropertyEffect(o,se.READ_ONLY)}_hasNotifyEffect(o){return this._hasPropertyEffect(o,se.NOTIFY)}_hasReflectEffect(o){return this._hasPropertyEffect(o,se.REFLECT)}_hasComputedEffect(o){return this._hasPropertyEffect(o,se.COMPUTE)}_setPendingPropertyOrPath(o,i,a,l){if(l||Lr(Array.isArray(o)?o[0]:o)!==o){if(!l){let s=bt(this,o);if(o=Dh(this,o,i),!o||!super._shouldPropertyChange(o,i,s))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(o,i,a))return k1(this,o,i),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[o])return this._setPendingProperty(o,i,a);this[o]=i}return!1}_setUnmanagedPropertyToNode(o,i,a){(a!==o[i]||typeof a=="object")&&(i==="className"&&(o=Xe(o)),o[i]=a)}_setPendingProperty(o,i,a){let l=this.__dataHasPaths&&Wc(o),s=l?this.__dataTemp:this.__data;return this._shouldPropertyChange(o,i,s[o])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),o in this.__dataOld||(this.__dataOld[o]=this.__data[o]),l?this.__dataTemp[o]=i:this.__data[o]=i,this.__dataPending[o]=i,(l||this[se.NOTIFY]&&this[se.NOTIFY][o])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[o]=a),!0):!1}_setProperty(o,i){this._setPendingProperty(o,i,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(o){this.__dataPendingClients=this.__dataPendingClients||[],o!==this&&this.__dataPendingClients.push(o)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let o=this.__dataPendingClients;if(o){this.__dataPendingClients=null;for(let i=0;i<o.length;i++){let a=o[i];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(o,i){for(let a in o)(i||!this[se.READ_ONLY]||!this[se.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,o[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(o,i,a){let l=this.__dataHasPaths;this.__dataHasPaths=!1;let s;C1(this,i,a,l),s=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(i,a,l),this._flushClients(),ni(this,this[se.REFLECT],i,a,l),ni(this,this[se.OBSERVE],i,a,l),s&&b1(this,s,i,a,l),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(o,i,a){this[se.PROPAGATE]&&ni(this,this[se.PROPAGATE],o,i,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,o,i,a)}_runEffectsForTemplate(o,i,a,l){const s=(c,d)=>{ni(this,o.propertyEffects,c,a,d,o.nodeList);for(let h=o.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,c,a,d)};o.runEffects?o.runEffects(s,i,l):s(i,l)}linkPaths(o,i){o=ti(o),i=ti(i),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[o]=i}unlinkPaths(o){o=ti(o),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[o]}notifySplices(o,i){let a={path:""},l=bt(this,o,a);O_(this,l,a.path,i)}get(o,i){return bt(i||this,o)}set(o,i,a){a?Dh(a,o,i):(!this[se.READ_ONLY]||!this[se.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,i,!0)&&this._invalidateProperties()}push(o,...i){let a={path:""},l=bt(this,o,a),s=l.length,c=l.push(...i);return i.length&&Ho(this,l,a.path,s,i.length,[]),c}pop(o){let i={path:""},a=bt(this,o,i),l=Boolean(a.length),s=a.pop();return l&&Ho(this,a,i.path,a.length,0,[s]),s}splice(o,i,a,...l){let s={path:""},c=bt(this,o,s);i<0?i=c.length-Math.floor(-i):i&&(i=Math.floor(i));let d;return arguments.length===2?d=c.splice(i):d=c.splice(i,a,...l),(l.length||d.length)&&Ho(this,c,s.path,i,l.length,d),d}shift(o){let i={path:""},a=bt(this,o,i),l=Boolean(a.length),s=a.shift();return l&&Ho(this,a,i.path,0,0,[s]),s}unshift(o,...i){let a={path:""},l=bt(this,o,a),s=l.unshift(...i);return i.length&&Ho(this,l,a.path,0,i.length,[]),s}notifyPath(o,i){let a;if(arguments.length==1){let l={path:""};i=bt(this,o,l),a=l.path}else Array.isArray(o)?a=ti(o):a=o;this._setPendingPropertyOrPath(a,i,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(o,i){this._addPropertyEffect(o,se.READ_ONLY),i&&(this["_set"+q1(o)]=function(a){this._setProperty(o,a)})}_createPropertyObserver(o,i,a){let l={property:o,method:i,dynamicFn:Boolean(a)};this._addPropertyEffect(o,se.OBSERVE,{fn:$h,info:l,trigger:{name:o}}),a&&this._addPropertyEffect(i,se.OBSERVE,{fn:$h,info:l,trigger:{name:i}})}_createMethodObserver(o,i){let a=Ns(o);if(!a)throw new Error("Malformed observer expression '"+o+"'");Hh(this,a,se.OBSERVE,Yc,null,i)}_createNotifyingProperty(o){this._addPropertyEffect(o,se.NOTIFY,{fn:y1,info:{eventName:Kl(o)+"-changed",property:o}})}_createReflectedProperty(o){let i=this.constructor.attributeNameForProperty(o);i[0]==="-"?console.warn("Property "+o+" cannot be reflected to attribute "+i+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(o,se.REFLECT,{fn:x1,info:{attrName:i}})}_createComputedProperty(o,i,a){let l=Ns(i);if(!l)throw new Error("Malformed computed expression '"+i+"'");const s=Hh(this,l,se.COMPUTE,k_,o,a);zs(this,E_)[o]=s}_marshalArgs(o,i,a){const l=this.__data,s=[];for(let c=0,d=o.length;c<d;c++){let{name:h,structured:u,wildcard:_,value:v,literal:y}=o[c];if(!y)if(_){const P=bl(h,i),g=Wh(l,a,P?i:h);v={path:P?i:h,value:g,base:P?bt(l,h):g}}else v=u?Wh(l,a,h):l[h];if(jc&&!this._overrideLegacyUndefined&&v===void 0&&o.length>1)return Hi;s[c]=v}return s}static addPropertyEffect(o,i,a){this.prototype._addPropertyEffect(o,i,a)}static createPropertyObserver(o,i,a){this.prototype._createPropertyObserver(o,i,a)}static createMethodObserver(o,i){this.prototype._createMethodObserver(o,i)}static createNotifyingProperty(o){this.prototype._createNotifyingProperty(o)}static createReadOnlyProperty(o,i){this.prototype._createReadOnlyProperty(o,i)}static createReflectedProperty(o){this.prototype._createReflectedProperty(o)}static createComputedProperty(o,i,a){this.prototype._createComputedProperty(o,i,a)}static bindTemplate(o){return this.prototype._bindTemplate(o)}_bindTemplate(o,i){let a=this.constructor._parseTemplate(o),l=this.__preBoundTemplateInfo==a;if(!l)for(let s in a.propertyEffects)this._createPropertyAccessor(s);if(i)if(a=Object.create(a),a.wasPreBound=l,!this.__templateInfo)this.__templateInfo=a;else{const s=o._parentTemplateInfo||this.__templateInfo,c=s.lastChild;a.parent=s,s.lastChild=a,a.previousSibling=c,c?c.nextSibling=a:s.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(o,i,a){let l=o.hostProps=o.hostProps||{};l[i]=!0;let s=o.propertyEffects=o.propertyEffects||{};(s[i]=s[i]||[]).push(a)}_stampTemplate(o,i){i=i||this._bindTemplate(o,!0),Uo.push(this);let a=super._stampTemplate(o,i);if(Uo.pop(),i.nodeList=a.nodeList,!i.wasPreBound){let l=i.childNodes=[];for(let s=a.firstChild;s;s=s.nextSibling)l.push(s)}return a.templateInfo=i,z1(this,i),this.__dataClientsReady&&(this._runEffectsForTemplate(i,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(o){const i=o.templateInfo,{previousSibling:a,nextSibling:l,parent:s}=i;a?a.nextSibling=l:s&&(s.firstChild=l),l?l.previousSibling=a:s&&(s.lastChild=a),i.nextSibling=i.previousSibling=null;let c=i.childNodes;for(let d=0;d<c.length;d++){let h=c[d];Xe(Xe(h).parentNode).removeChild(h)}}static _parseTemplateNode(o,i,a){let l=e._parseTemplateNode.call(this,o,i,a);if(o.nodeType===Node.TEXT_NODE){let s=this._parseBindings(o.textContent,i);s&&(o.textContent=jh(s)||" ",Rs(this,i,a,"text","textContent",s),l=!0)}return l}static _parseTemplateNodeAttribute(o,i,a,l,s){let c=this._parseBindings(s,i);if(c){let d=l,h="property";g1.test(l)?h="attribute":l[l.length-1]=="$"&&(l=l.slice(0,-1),h="attribute");let u=jh(c);return u&&h=="attribute"&&(l=="class"&&o.hasAttribute("class")&&(u+=" "+o.getAttribute(l)),o.setAttribute(l,u)),h=="attribute"&&d=="disable-upgrade$"&&o.setAttribute(l,""),o.localName==="input"&&d==="value"&&o.setAttribute(d,""),o.removeAttribute(d),h==="property"&&(l=b_(l)),Rs(this,i,a,h,l,c,u),!0}else return e._parseTemplateNodeAttribute.call(this,o,i,a,l,s)}static _parseTemplateNestedTemplate(o,i,a){let l=e._parseTemplateNestedTemplate.call(this,o,i,a);const s=o.parentNode,c=a.templateInfo,d=s.localName==="dom-if",h=s.localName==="dom-repeat";Lh&&(d||h)&&(s.removeChild(o),a=a.parentInfo,a.templateInfo=c,a.noted=!0,l=!1);let u=c.hostProps;if(Hx&&d)u&&(i.hostProps=Object.assign(i.hostProps||{},u),Lh||(a.parentInfo.noted=!0));else{let _="{";for(let v in u){let y=[{mode:_,source:v,dependencies:[v],hostProp:!0}];Rs(this,i,a,"property","_host_"+v,y)}}return l}static _parseBindings(o,i){let a=[],l=0,s;for(;(s=Vh.exec(o))!==null;){s.index>l&&a.push({literal:o.slice(l,s.index)});let c=s[1][0],d=Boolean(s[2]),h=s[3].trim(),u=!1,_="",v=-1;c=="{"&&(v=h.indexOf("::"))>0&&(_=h.substring(v+2),h=h.substring(0,v),u=!0);let y=Ns(h),P=[];if(y){let{args:g,methodName:m}=y;for(let C=0;C<g.length;C++){let E=g[C];E.literal||P.push(E)}let b=i.dynamicFns;(b&&b[m]||y.static)&&(P.push(m),y.dynamicFn=!0)}else P.push(h);a.push({source:h,mode:c,negate:d,customEvent:u,signature:y,dependencies:P,event:_}),l=Vh.lastIndex}if(l&&l<o.length){let c=o.substring(l);c&&a.push({literal:c})}return a.length?a:null}static _evaluateBinding(o,i,a,l,s,c){let d;return i.signature?d=Yc(o,a,l,s,i.signature):a!=i.source?d=bt(o,i.source):c&&Wc(a)?d=bt(o,a):d=o.__data[a],i.negate&&(d=!d),d}}return n}),Uo=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Q1(t){const e={};for(let n in t){const r=t[n];e[n]=typeof r=="function"?{type:r}:r}return e}const X1=Ie(t=>{const e=x_(t);function n(i){const a=Object.getPrototypeOf(i);return a.prototype instanceof o?a:null}function r(i){if(!i.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",i))){let a=null;if(i.hasOwnProperty(JSCompiler_renameProperty("properties",i))){const l=i.properties;l&&(a=Q1(l))}i.__ownProperties=a}return i.__ownProperties}class o extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const a=this._properties;this.__observedAttributes=a?Object.keys(a).map(l=>this.prototype._addPropertyToAttributeMap(l)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const a=n(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const a=r(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const a=n(this);this.__properties=Object.assign({},a&&a._properties,r(this))}return this.__properties}static typeForProperty(a){const l=this._properties[a];return l&&l.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const J1="3.5.1",Gh=window.ShadyCSS&&window.ShadyCSS.cssBuild,Z1=Ie(t=>{const e=X1(Eu(t));function n(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",s))){s.__propertyDefaults=null;let c=s._properties;for(let d in c){let h=c[d];"value"in h&&(s.__propertyDefaults=s.__propertyDefaults||{},s.__propertyDefaults[d]=h)}}return s.__propertyDefaults}function r(s){return s.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",s))||(s.__ownObservers=s.hasOwnProperty(JSCompiler_renameProperty("observers",s))?s.observers:null),s.__ownObservers}function o(s,c,d,h){d.computed&&(d.readOnly=!0),d.computed&&(s._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):s._createComputedProperty(c,d.computed,h)),d.readOnly&&!s._hasReadOnlyEffect(c)?s._createReadOnlyProperty(c,!d.computed):d.readOnly===!1&&s._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),d.reflectToAttribute&&!s._hasReflectEffect(c)?s._createReflectedProperty(c):d.reflectToAttribute===!1&&s._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),d.notify&&!s._hasNotifyEffect(c)?s._createNotifyingProperty(c):d.notify===!1&&s._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),d.observer&&s._createPropertyObserver(c,d.observer,h[d.observer]),s._addPropertyToAttributeMap(c)}function i(s,c,d,h){if(!Gh){const u=c.content.querySelectorAll("style"),_=m_(c),v=qx(d),y=c.content.firstElementChild;for(let g=0;g<v.length;g++){let m=v[g];m.textContent=s._processStyleText(m.textContent,h),c.content.insertBefore(m,y)}let P=0;for(let g=0;g<_.length;g++){let m=_[g],b=u[P];b!==m?(m=m.cloneNode(!0),b.parentNode.insertBefore(m,b)):P++,m.textContent=s._processStyleText(m.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,d),Ux&&Gh&&Nx){const u=c.content.querySelectorAll("style");if(u){let _="";Array.from(u).forEach(v=>{_+=v.textContent,v.parentNode.removeChild(v)}),s._styleSheet=new CSSStyleSheet,s._styleSheet.replaceSync(_)}}}function a(s){let c=null;if(s&&(!_l||Mx)&&(c=$i.import(s,"template"),_l&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${s}`);return c}class l extends e{static get polymerElementVersion(){return J1}static _finalizeClass(){e._finalizeClass.call(this);const c=r(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Fx||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let d in c)o(this.prototype,d,c[d],c)}static createObservers(c,d){const h=this.prototype;for(let u=0;u<c.length;u++)h._createMethodObserver(c[u],d)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=xu(c.url);else{const d=$i.import(this.is);this._importPath=d&&d.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Dx,this.importPath=this.constructor.importPath;let c=n(this.constructor);if(!!c)for(let d in c){let h=c[d];if(this._canApplyPropertyDefault(d)){let u=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(d)?this._setPendingProperty(d,u,!0):this[d]=u}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,d){return wu(c,d)}static _finalizeTemplate(c){const d=this.prototype._template;if(d&&!d.__polymerFinalized){d.__polymerFinalized=!0;const h=this.importPath,u=h?pi(h):"";i(this,d,c,u),this.prototype._bindTemplate(d)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const d=Xe(this);if(d.attachShadow)return c?(d.shadowRoot||(d.attachShadow({mode:"open",shadyUpgradeFragment:c}),d.shadowRoot.appendChild(c),this.constructor._styleSheet&&(d.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),$x&&window.ShadyDOM&&window.ShadyDOM.flushInitial(d.shadowRoot),d.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,d){return!d&&this.importPath&&(d=pi(this.importPath)),pi(c,d)}static _parseTemplateContent(c,d,h){return d.dynamicFns=d.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,d,h)}static _addTemplatePropertyEffect(c,d,h){return f_&&!(d in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${d}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,d,h)}}return l});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yh=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class L_{constructor(e,n){z_(e,n);const r=n.reduce((o,i,a)=>o+I_(i)+e[a+1],e[0]);this.value=r.toString()}toString(){return this.value}}function I_(t){if(t instanceof L_)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function eC(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof L_)return I_(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const gt=function(e,...n){z_(e,n);const r=document.createElement("template");let o=n.reduce((i,a,l)=>i+eC(a)+e[l+1],e[0]);return Yh&&(o=Yh.createHTML(o)),r.innerHTML=o,r},z_=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const st=Z1(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Su=Ie(t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(n){this._setAriaDisabled(n)}_setAriaDisabled(n){n?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Kh=0,R_=0;const co=[];let qh=0,Kc=!1;const N_=document.createTextNode("");new window.MutationObserver(tC).observe(N_,{characterData:!0});function tC(){Kc=!1;const t=co.length;for(let e=0;e<t;e++){const n=co[e];if(n)try{n()}catch(r){setTimeout(()=>{throw r})}}co.splice(0,t),R_+=t}const nr={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},Co={run(t){return window.requestAnimationFrame(t)},cancel(t){window.cancelAnimationFrame(t)}},D_={run(t){return window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16)},cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},Ao={run(t){Kc||(Kc=!0,N_.textContent=qh,qh+=1),co.push(t);const e=Kh;return Kh+=1,e},cancel(t){const e=t-R_;if(e>=0){if(!co[e])throw new Error(`invalid async handle: ${t}`);co[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nC=!1,rC=t=>t,ku=typeof document.head.style.touchAction=="string",qc="__polymerGestures",Ds="__polymerGesturesHandled",Qc="__polymerGesturesTouchAction",Qh=25,Xh=5,oC=2,iC=["mousedown","mousemove","mouseup","click"],aC=[0,1,4,2],lC=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Tu(t){return iC.indexOf(t)>-1}let M_=!1;(function(){try{const t=Object.defineProperty({},"passive",{get(){M_=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function sC(t){if(!(Tu(t)||t==="touchend")&&ku&&M_&&nC)return{passive:!0}}const cC=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),dC={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function wr(t){const e=t.type;if(!Tu(e))return!1;if(e==="mousemove"){let r=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!lC&&(r=aC[t.which]||0),Boolean(r&1)}return(t.button===void 0?0:t.button)===0}function uC(t){if(t.type==="click"){if(t.detail===0)return!0;const e=Zn(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const n=e.getBoundingClientRect(),r=t.pageX,o=t.pageY;return!(r>=n.left&&r<=n.right&&o>=n.top&&o<=n.bottom)}return!1}const vn={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function fC(t){let e="auto";const n=$_(t);for(let r=0,o;r<n.length;r++)if(o=n[r],o[Qc]){e=o[Qc];break}return e}function F_(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function uo(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const $_=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Pu={},br=[];function hC(t,e){let n=document.elementFromPoint(t,e),r=n;for(;r&&r.shadowRoot&&!window.ShadyDOM;){const o=r;if(r=r.shadowRoot.elementFromPoint(t,e),o===r)break;r&&(n=r)}return n}function Zn(t){const e=$_(t);return e.length>0?e[0]:t.target}function pC(t){const e=t.type,r=t.currentTarget[qc];if(!r)return;const o=r[e];if(!o)return;if(!t[Ds]&&(t[Ds]={},e.startsWith("touch"))){const a=t.changedTouches[0];if(e==="touchstart"&&t.touches.length===1&&(vn.touch.id=a.identifier),vn.touch.id!==a.identifier)return;ku||(e==="touchstart"||e==="touchmove")&&mC(t)}const i=t[Ds];if(!i.skip){for(let a=0,l;a<br.length;a++)l=br[a],o[l.name]&&!i[l.name]&&l.flow&&l.flow.start.indexOf(t.type)>-1&&l.reset&&l.reset();for(let a=0,l;a<br.length;a++)l=br[a],o[l.name]&&!i[l.name]&&(i[l.name]=!0,l[e](t))}}function mC(t){const e=t.changedTouches[0],n=t.type;if(n==="touchstart")vn.touch.x=e.clientX,vn.touch.y=e.clientY,vn.touch.scrollDecided=!1;else if(n==="touchmove"){if(vn.touch.scrollDecided)return;vn.touch.scrollDecided=!0;const r=fC(t);let o=!1;const i=Math.abs(vn.touch.x-e.clientX),a=Math.abs(vn.touch.y-e.clientY);t.cancelable&&(r==="none"?o=!0:r==="pan-x"?o=a>i:r==="pan-y"&&(o=i>a)),o?t.preventDefault():xl("track")}}function wl(t,e,n){return Pu[e]?(gC(t,e,n),!0):!1}function gC(t,e,n){const r=Pu[e],o=r.deps,i=r.name;let a=t[qc];a||(t[qc]=a={});for(let l=0,s,c;l<o.length;l++)s=o[l],!(cC&&Tu(s)&&s!=="click")&&(c=a[s],c||(a[s]=c={_count:0}),c._count===0&&t.addEventListener(s,pC,sC(s)),c[i]=(c[i]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,n),r.touchAction&&bC(t,r.touchAction)}function Ou(t){br.push(t);for(let e=0;e<t.emits.length;e++)Pu[t.emits[e]]=t}function _C(t){for(let e=0,n;e<br.length;e++){n=br[e];for(let r=0,o;r<n.emits.length;r++)if(o=n.emits[r],o===t)return n}return null}function bC(t,e){ku&&t instanceof HTMLElement&&Ao.run(()=>{t.style.touchAction=e}),t[Qc]=e}function Lu(t,e,n){const r=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=n,rC(t).dispatchEvent(r),r.defaultPrevented){const o=n.preventer||n.sourceEvent;o&&o.preventDefault&&o.preventDefault()}}function xl(t){const e=_C(t);e.info&&(e.info.prevent=!0)}Ou({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){uo(this.info)},mousedown(t){if(!wr(t))return;const e=Zn(t),n=this,r=i=>{wr(i)||(Vo("up",e,i),uo(n.info))},o=i=>{wr(i)&&Vo("up",e,i),uo(n.info)};F_(this.info,r,o),Vo("down",e,t)},touchstart(t){Vo("down",Zn(t),t.changedTouches[0],t)},touchend(t){Vo("up",Zn(t),t.changedTouches[0],t)}});function Vo(t,e,n,r){!e||Lu(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:r,prevent(o){return xl(o)}})}Ou({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>oC&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,uo(this.info)},mousedown(t){if(!wr(t))return;const e=Zn(t),n=this,r=i=>{const a=i.clientX,l=i.clientY;Jh(n.info,a,l)&&(n.info.state=n.info.started?i.type==="mouseup"?"end":"track":"start",n.info.state==="start"&&xl("tap"),n.info.addMove({x:a,y:l}),wr(i)||(n.info.state="end",uo(n.info)),e&&Ms(n.info,e,i),n.info.started=!0)},o=i=>{n.info.started&&r(i),uo(n.info)};F_(this.info,r,o),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=Zn(t),n=t.changedTouches[0],r=n.clientX,o=n.clientY;Jh(this.info,r,o)&&(this.info.state==="start"&&xl("tap"),this.info.addMove({x:r,y:o}),Ms(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend(t){const e=Zn(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),Ms(this.info,e,n))}});function Jh(t,e,n){if(t.prevent)return!1;if(t.started)return!0;const r=Math.abs(t.x-e),o=Math.abs(t.y-n);return r>=Xh||o>=Xh}function Ms(t,e,n){if(!e)return;const r=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],i=o.x-t.x,a=o.y-t.y;let l,s=0;r&&(l=o.x-r.x,s=o.y-r.y),Lu(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:i,dy:a,ddx:l,ddy:s,sourceEvent:n,hover(){return hC(n.clientX,n.clientY)}})}Ou({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){wr(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){wr(t)&&Zh(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){Zh(this.info,t.changedTouches[0],t)}});function Zh(t,e,n){const r=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),i=Zn(n||e);!i||dC[i.localName]&&i.hasAttribute("disabled")||(isNaN(r)||isNaN(o)||r<=Qh&&o<=Qh||uC(e))&&(t.prevent||Lu(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const B_=Ie(t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",n=>{this._onKeyDown(n)}),this.addEventListener("keyup",n=>{this._onKeyUp(n)})}_onKeyDown(n){switch(n.key){case"Enter":this._onEnter(n);break;case"Escape":this._onEscape(n);break}}_onKeyUp(n){}_onEnter(n){}_onEscape(n){}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Iu=t=>class extends Su(B_(t)){get _activeKeys(){return[" "]}ready(){super.ready(),wl(this,"down",n=>{this._shouldSetActive(n)&&this._setActive(!0)}),wl(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(n){return!this.disabled}_onKeyDown(n){super._onKeyDown(n),this._shouldSetActive(n)&&this._activeKeys.includes(n.key)&&(this._setActive(!0),document.addEventListener("keyup",r=>{this._activeKeys.includes(r.key)&&this._setActive(!1)},{once:!0}))}_setActive(n){this.toggleAttribute("active",n)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const In=Ie(t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(n=>{n.hostConnected&&n.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(n=>{n.hostDisconnected&&n.hostDisconnected()})}addController(n){this.__controllers.add(n),this.$!==void 0&&this.isConnected&&n.hostConnected&&n.hostConnected()}removeController(n){this.__controllers.delete(n)}}),vC=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,$a=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function yC(){function t(){return!0}return H_(t)}function wC(){try{return xC()?!0:CC()?$a?!AC():!yC():!1}catch{return!1}}function xC(){return localStorage.getItem("vaadin.developmentmode.force")}function CC(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function AC(){return!!($a&&Object.keys($a).map(e=>$a[e]).filter(e=>e.productionMode).length>0)}function H_(t,e){if(typeof t!="function")return;const n=vC.exec(t.toString());if(n)try{t=new Function(n[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return t(e)}window.Vaadin=window.Vaadin||{};const ep=function(t,e){if(window.Vaadin.developmentMode)return H_(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=wC());function EC(){}const SC=function(){if(typeof ep=="function")return ep(EC)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class De{static debounce(e,n,r){return e instanceof De?e._cancelAsync():e=new De,e.setConfig(n,r),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,n){this._asyncModule=e,this._callback=n,this._timer=this._asyncModule.run(()=>{this._timer=null,Ui.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ui.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}let Ui=new Set;function U_(t){Ui.add(t)}function kC(){const t=Boolean(Ui.size);return Ui.forEach(e=>{try{e.flush()}catch(n){setTimeout(()=>{throw n})}}),t}const Jr=()=>{let t;do t=kC();while(t)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fs{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let n="reverse";return e.scrollLeft>0?n="default":(e.scrollLeft=2,e.scrollLeft<2&&(n="negative")),document.body.removeChild(e),n}static getNormalizedScrollLeft(e,n,r){const{scrollLeft:o}=r;if(n!=="rtl"||!e)return o;switch(e){case"negative":return r.scrollWidth-r.clientWidth+o;case"reverse":return r.scrollWidth-r.clientWidth-o;default:return o}}static setNormalizedScrollLeft(e,n,r,o){if(n!=="rtl"||!e){r.scrollLeft=o;return}switch(e){case"negative":r.scrollLeft=r.clientWidth-r.scrollWidth+o;break;case"reverse":r.scrollLeft=r.scrollWidth-r.clientWidth-o;break;default:r.scrollLeft=o;break}}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _n=[];function TC(){const t=Jc();_n.forEach(e=>{Xc(e,t)})}let wa;const PC=new MutationObserver(TC);PC.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function Xc(t,e,n=t.getAttribute("dir")){e?t.setAttribute("dir",e):n!=null&&t.removeAttribute("dir")}function Jc(){return document.documentElement.getAttribute("dir")}const Po=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:n=>n||"",toAttribute:n=>n===""?null:n}}}}static finalize(){super.finalize(),wa||(wa=Fs.detectScrollType())}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Xc(this,Jc(),null))}attributeChangedCallback(n,r,o){if(super.attributeChangedCallback(n,r,o),n!=="dir")return;const i=Jc(),a=o===i&&_n.indexOf(this)===-1,l=!o&&r&&_n.indexOf(this)===-1;a||l?(this.__subscribe(),Xc(this,i,o)):o!==i&&r===i&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=_n.includes(this),this.__unsubscribe()}_valueToNodeAttribute(n,r,o){o==="dir"&&r===""&&!n.hasAttribute("dir")||super._valueToNodeAttribute(n,r,o)}_attributeToProperty(n,r,o){n==="dir"&&!r?this.dir="":super._attributeToProperty(n,r,o)}__subscribe(){_n.includes(this)||_n.push(this)}__unsubscribe(){_n.includes(this)&&_n.splice(_n.indexOf(this),1)}__getNormalizedScrollLeft(n){return Fs.getNormalizedScrollLeft(wa,this.getAttribute("dir")||"ltr",n)}__setNormalizedScrollLeft(n,r){return Fs.setNormalizedScrollLeft(wa,this.getAttribute("dir")||"ltr",n,r)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){SC()};let $s;const tp=new Set,pn=t=>class extends Po(t){static get version(){return"23.3.2"}static finalize(){super.finalize();const{is:n}=this;n&&!tp.has(n)&&(window.Vaadin.registrations.push(this),tp.add(n),window.Vaadin.developmentModeCallback&&($s=De.debounce($s,D_,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),U_($s)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function jo(t,e,n){return{index:t,removed:e,addedCount:n}}const V_=0,j_=1,Zc=2,ed=3;function OC(t,e,n,r,o,i){let a=i-o+1,l=n-e+1,s=new Array(a);for(let c=0;c<a;c++)s[c]=new Array(l),s[c][0]=c;for(let c=0;c<l;c++)s[0][c]=c;for(let c=1;c<a;c++)for(let d=1;d<l;d++)if(zu(t[e+d-1],r[o+c-1]))s[c][d]=s[c-1][d-1];else{let h=s[c-1][d]+1,u=s[c][d-1]+1;s[c][d]=h<u?h:u}return s}function LC(t){let e=t.length-1,n=t[0].length-1,r=t[e][n],o=[];for(;e>0||n>0;){if(e==0){o.push(Zc),n--;continue}if(n==0){o.push(ed),e--;continue}let i=t[e-1][n-1],a=t[e-1][n],l=t[e][n-1],s;a<l?s=a<i?a:i:s=l<i?l:i,s==i?(i==r?o.push(V_):(o.push(j_),r=i),e--,n--):s==a?(o.push(ed),e--,r=a):(o.push(Zc),n--,r=l)}return o.reverse(),o}function IC(t,e,n,r,o,i){let a=0,l=0,s,c=Math.min(n-e,i-o);if(e==0&&o==0&&(a=zC(t,r,c)),n==t.length&&i==r.length&&(l=RC(t,r,c-a)),e+=a,o+=a,n-=l,i-=l,n-e==0&&i-o==0)return[];if(e==n){for(s=jo(e,[],0);o<i;)s.removed.push(r[o++]);return[s]}else if(o==i)return[jo(e,[],n-e)];let d=LC(OC(t,e,n,r,o,i));s=void 0;let h=[],u=e,_=o;for(let v=0;v<d.length;v++)switch(d[v]){case V_:s&&(h.push(s),s=void 0),u++,_++;break;case j_:s||(s=jo(u,[],0)),s.addedCount++,u++,s.removed.push(r[_]),_++;break;case Zc:s||(s=jo(u,[],0)),s.addedCount++,u++;break;case ed:s||(s=jo(u,[],0)),s.removed.push(r[_]),_++;break}return s&&h.push(s),h}function zC(t,e,n){for(let r=0;r<n;r++)if(!zu(t[r],e[r]))return r;return n}function RC(t,e,n){let r=t.length,o=e.length,i=0;for(;i<n&&zu(t[--r],e[--o]);)i++;return i}function NC(t,e){return IC(t,0,t.length,e,0,e.length)}function zu(t,e){return t===e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Nr(t){return t.localName==="slot"}let fn=class{static getFlattenedNodes(t){const e=Xe(t);return Nr(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(n=>Nr(n)?(n=n,Xe(n).assignedNodes({flatten:!0})):[n]).reduce((n,r)=>n.concat(r),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Nr(this._target)?this._listenSlots([this._target]):Xe(this._target).children&&(this._listenSlots(Xe(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Nr(this._target)?this._unlistenSlots([this._target]):Xe(this._target).children&&(this._unlistenSlots(Xe(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,w_.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=NC(e,this._effectiveNodes);for(let o=0,i;o<n.length&&(i=n[o]);o++)for(let a=0,l;a<i.removed.length&&(l=i.removed[a]);a++)t.removedNodes.push(l);for(let o=0,i;o<n.length&&(i=n[o]);o++)for(let a=i.index;a<i.index+i.addedCount;a++)t.addedNodes.push(e[a]);this._effectiveNodes=e;let r=!1;return(t.addedNodes.length||t.removedNodes.length)&&(r=!0,this.callback.call(this._target,t)),r}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];Nr(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];Nr(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let DC=0;function W_(){return DC++}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ir extends EventTarget{static generateId(e,n){return`${e||"default"}-${n.localName}-${W_()}`}constructor(e,n,r,o,i){super(),this.host=e,this.slotName=n,this.slotFactory=r,this.slotInitializer=o,i&&(this.defaultId=Ir.generateId(n,e))}hostConnected(){if(!this.initialized){let e=this.getSlotChild();e?(this.node=e,this.initCustomNode(e)):e=this.attachDefaultNode(),this.initNode(e),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:e,slotName:n,slotFactory:r}=this;let o=this.defaultNode;return!o&&r&&(o=r(e),o instanceof Element&&(n!==""&&o.setAttribute("slot",n),this.node=o,this.defaultNode=o)),o&&e.appendChild(o),o}getSlotChild(){const{slotName:e}=this;return Array.from(this.host.childNodes).find(n=>n.nodeType===Node.ELEMENT_NODE&&n.slot===e||n.nodeType===Node.TEXT_NODE&&n.textContent.trim()&&e==="")}initNode(e){const{slotInitializer:n}=this;n&&n(this.host,e)}initCustomNode(e){}teardownNode(e){}observe(){const{slotName:e}=this,n=e===""?"slot:not([name])":`slot[name=${e}]`,r=this.host.shadowRoot.querySelector(n);this.__slotObserver=new fn(r,o=>{const i=this.node,a=o.addedNodes.find(l=>l!==i);o.removedNodes.length&&o.removedNodes.forEach(l=>{this.teardownNode(l)}),a&&(i&&i.isConnected&&this.host.removeChild(i),this.node=a,a!==this.defaultNode&&(this.initCustomNode(a),this.initNode(a)))})}}/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xi extends Ir{constructor(e){super(e,"tooltip"),this.setTarget(e)}initCustomNode(e){e.target=this.target,this.context!==void 0&&(e.context=this.context),this.manual!==void 0&&(e.manual=this.manual),this.opened!==void 0&&(e.opened=this.opened),this.position!==void 0&&(e._position=this.position),this.shouldShow!==void 0&&(e.shouldShow=this.shouldShow)}setContext(e){this.context=e;const n=this.node;n&&(n.context=e)}setManual(e){this.manual=e;const n=this.node;n&&(n.manual=e)}setOpened(e){this.opened=e;const n=this.node;n&&(n.opened=e)}setPosition(e){this.position=e;const n=this.node;n&&(n._position=e)}setShouldShow(e){this.shouldShow=e;const n=this.node;n&&(n.shouldShow=e)}setTarget(e){this.target=e;const n=this.node;n&&(n.target=e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ru=!1;window.addEventListener("keydown",()=>{Ru=!0},{capture:!0});window.addEventListener("mousedown",()=>{Ru=!1},{capture:!0});function Nu(){return Ru}function MC(t){const e=t.style;if(e.visibility==="hidden"||e.display==="none")return!0;const n=window.getComputedStyle(t);return n.visibility==="hidden"||n.display==="none"}function FC(t){if(!HC(t))return-1;const e=t.getAttribute("tabindex")||0;return Number(e)}function $C(t,e){const n=Math.max(t.tabIndex,0),r=Math.max(e.tabIndex,0);return n===0||r===0?r>n:n>r}function BC(t,e){const n=[];for(;t.length>0&&e.length>0;)$C(t[0],e[0])?n.push(e.shift()):n.push(t.shift());return n.concat(t,e)}function td(t){const e=t.length;if(e<2)return t;const n=Math.ceil(e/2),r=td(t.slice(0,n)),o=td(t.slice(n));return BC(r,o)}function G_(t,e){if(t.nodeType!==Node.ELEMENT_NODE||MC(t))return!1;const n=t,r=FC(n);let o=r>0;r>=0&&e.push(n);let i=[];return n.localName==="slot"?i=n.assignedNodes({flatten:!0}):i=(n.shadowRoot||n).children,[...i].forEach(a=>{o=G_(a,e)||o}),o}function HC(t){return t.matches('[tabindex="-1"]')?!1:t.matches("input, select, textarea, button, object")?t.matches(":not([disabled])"):t.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function Y_(t){return t.getRootNode().activeElement===t}function UC(t){const e=[];return G_(t,e)?td(e):e}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const K_=Ie(t=>class extends t{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(n){n&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(n=>{this._delegateAttribute(n,this[n])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(n=>{this._delegateProperty(n,this[n])})}_delegateAttrsChanged(...n){this.constructor.delegateAttrs.forEach((r,o)=>{this._delegateAttribute(r,n[o])})}_delegatePropsChanged(...n){this.constructor.delegateProps.forEach((r,o)=>{this._delegateProperty(r,n[o])})}_delegateAttribute(n,r){!this.stateTarget||(n==="invalid"&&this._delegateAttribute("aria-invalid",r?"true":!1),typeof r=="boolean"?this.stateTarget.toggleAttribute(n,r):r?this.stateTarget.setAttribute(n,r):this.stateTarget.removeAttribute(n))}_delegateProperty(n,r){!this.stateTarget||(this.stateTarget[n]=r)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const q_=Ie(t=>class extends t{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(n){n.addEventListener("input",this._boundOnInput),n.addEventListener("change",this._boundOnChange)}_removeInputListeners(n){n.removeEventListener("input",this._boundOnInput),n.removeEventListener("change",this._boundOnChange)}_forwardInputValue(n){!this.inputElement||(n!=null?this.inputElement.value=n:this.inputElement.value="")}_inputElementChanged(n,r){n?this._addInputListeners(n):r&&this._removeInputListeners(r)}_hasInputValueChanged(n,r){(n||r)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(n){this._setHasInputValue(n),this._onInput(n)}_onInput(n){const r=n.composedPath()[0];this.__userInput=n.isTrusted,this.value=r.value,this.__userInput=!1}_onChange(n){}_toggleHasValue(n){this.toggleAttribute("has-value",n)}_valueChanged(n,r){this._toggleHasValue(this._hasValue),!(n===""&&r===void 0)&&(this.__userInput||this._forwardInputValue(n))}get _hasValue(){return this.value!=null&&this.value!==""}_setHasInputValue(n){const r=n.composedPath()[0];this._hasInputValue=r.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const VC=Ie(t=>class extends K_(Su(q_(t))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(n){const r=n.target;this._toggleChecked(r.checked),Y_(r)||r.focus()}_toggleChecked(n){this.checked=n}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ji=Ie(t=>class extends t{get _keyboardActive(){return Nu()}ready(){this.addEventListener("focusin",n=>{this._shouldSetFocus(n)&&this._setFocused(!0)}),this.addEventListener("focusout",n=>{this._shouldRemoveFocus(n)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(n){this.toggleAttribute("focused",n),this.toggleAttribute("focus-ring",n&&this._keyboardActive)}_shouldSetFocus(n){return!0}_shouldRemoveFocus(n){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Du=t=>class extends Su(t){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(n,r){super._disabledChanged(n,r),n?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):r&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(n){this.disabled&&n!==-1&&(this._lastTabIndex=n,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Q_=Ie(t=>class extends Ji(Du(t)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){!this.focusElement||(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(n,r){n?(n.disabled=this.disabled,this._addFocusListeners(n),this.__forwardTabIndex(this.tabindex)):r&&this._removeFocusListeners(r)}_addFocusListeners(n){n.addEventListener("blur",this._boundOnBlur),n.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(n){n.removeEventListener("blur",this._boundOnBlur),n.removeEventListener("focus",this._boundOnFocus)}_onFocus(n){n.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(n){n.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(n){return n.target===this.focusElement}_disabledChanged(n,r){super._disabledChanged(n,r),this.focusElement&&(this.focusElement.disabled=n),n&&this.blur()}_tabindexChanged(n){this.__forwardTabIndex(n)}__forwardTabIndex(n){n!==void 0&&this.focusElement&&(this.focusElement.tabIndex=n,n!==-1&&(this.tabindex=void 0)),this.disabled&&n&&(n!==-1&&(this._lastTabIndex=n),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class X_ extends Ir{constructor(e,n){super(e,"input",()=>document.createElement("input"),(r,o)=>{r.value&&o.setAttribute("value",r.value),r.type&&o.setAttribute("type",r.type),o.id=this.defaultId,typeof n=="function"&&n(o)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jC extends Ir{constructor(e){super(e,"label",()=>document.createElement("label"),(n,r)=>{this.__updateLabelId(r),this.__updateDefaultLabel(this.label),this.__observeLabel(r)},!0)}get labelId(){return this.node.id}initCustomNode(e){this.__updateLabelId(e);const n=this.__hasLabel(e);this.__toggleHasLabel(n)}teardownNode(e){this.__labelObserver&&this.__labelObserver.disconnect();let n=this.getSlotChild();!n&&e!==this.defaultNode&&(n=this.attachDefaultNode(),this.initNode(n));const r=this.__hasLabel(n);this.__toggleHasLabel(r)}setLabel(e){this.label=e,this.__updateDefaultLabel(e)}__hasLabel(e){return e?e.children.length>0||this.__isNotEmpty(e.textContent):!1}__isNotEmpty(e){return Boolean(e&&e.trim()!=="")}__observeLabel(e){this.__labelObserver=new MutationObserver(n=>{n.forEach(r=>{const o=r.target,i=o===this.node;if(r.type==="attributes")i&&o.id!==this.defaultId&&this.__updateLabelId(o);else if(i||o.parentElement===this.node){const a=this.__hasLabel(this.node);this.__toggleHasLabel(a)}})}),this.__labelObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(e){this.host.toggleAttribute("has-label",e),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:e,node:this.node}}))}__updateDefaultLabel(e){if(this.defaultNode&&(this.defaultNode.textContent=e,this.defaultNode===this.node)){const n=this.__isNotEmpty(e);this.__toggleHasLabel(n)}}__updateLabelId(e){e.id||(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const J_=Ie(t=>class extends In(t){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new jC(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(n){this._labelController.setLabel(n)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Z_{constructor(e,n){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),n.addEventListener("label-changed",r=>{this.__initLabel(r.detail.node)}),this.__initLabel(n.node)}__initLabel(e){e&&(e.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&e.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const e=n=>{n.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class WC{constructor(e,n,r){this.sourceSlot=e,this.targetFactory=n,this.copyCallback=r,e&&e.addEventListener("slotchange",()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()})}hostConnected(){this.__sourceSlotObserver=new MutationObserver(()=>this.__checkAndCopyNodesToSlotTarget()),this.__copying||this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const e=this.targetFactory();if(!e)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach(r=>{r.parentElement===e&&e.removeChild(r)}),delete this.__slotTargetClones);const n=this.sourceSlot.assignedNodes({flatten:!0}).filter(r=>!(r.nodeType===Node.TEXT_NODE&&r.textContent.trim()===""));n.length>0&&(e.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(n,e))}__copyNodesToSlotTarget(e,n){this.__slotTargetClones=this.__slotTargetClones||[],e.forEach(r=>{const o=r.cloneNode(!0);this.__slotTargetClones.push(o),n.appendChild(o),this.__sourceSlotObserver.observe(r,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}),typeof this.copyCallback=="function"&&this.copyCallback(e)}}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class np extends J_(VC(Q_(Iu(pn(Mt(In(st))))))){static get is(){return"vaadin-checkbox"}static get template(){return gt`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-checkbox-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div class="vaadin-checkbox-wrapper">
          <div part="checkbox"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new X_(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Z_(this.inputElement,this._labelController)),this.addController(new WC(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated())),this._tooltipController=new Xi(this),this.addController(this._tooltipController)}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.
Please use <label slot="label"> wrapper or the label property instead.`)}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}}customElements.define(np.is,np);he("vaadin-grid",Z`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='row'][last][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function eb(t){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(t);return}t.querySelector("template")&&console.warn(`WARNING: <template> inside <${t.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const GC=t=>class extends t{static get properties(){return{resizable:{type:Boolean,value(){if(this.localName==="vaadin-grid-column-group")return;const n=this.parentNode;return n&&n.localName==="vaadin-grid-column-group"&&n.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{!this._grid||this._allCells.forEach(n=>{n._content.parentNode||this._grid.appendChild(n._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(n=>{n._content.parentNode&&n._content.parentNode.removeChild(n._content)})}),this._gridValue=void 0}ready(){super.ready(),eb(this)}_findHostGrid(){let n=this;for(;n&&!/^vaadin.*grid(-pro)?$/.test(n.localName);)n=n.assignedSlot?n.assignedSlot.parentNode:n.parentNode;return n||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(n=>n)}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(r=>{r.style.flexGrow=n})}_orderChanged(n){this._allCells.forEach(r=>{r.style.order=n})}_widthChanged(n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(r=>{r.style.width=n})}_frozenChanged(n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",n),this._allCells.forEach(r=>r.toggleAttribute("frozen",n)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",n),this._allCells.forEach(r=>{this._grid&&r.parentElement===this._grid.$.sizer||r.toggleAttribute("frozen-to-end",n)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(n){this._allCells.forEach(r=>r.toggleAttribute("last-frozen",n)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=n)}_firstFrozenToEndChanged(n){this._allCells.forEach(r=>{this._grid&&r.parentElement===this._grid.$.sizer||r.toggleAttribute("first-frozen-to-end",n)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=n)}_generateHeader(n){return n.substr(n.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,r=>r.toUpperCase())}_reorderStatusChanged(n){this._allCells.forEach(r=>r.setAttribute("reorder-status",n))}_resizableChanged(n,r){n===void 0||r===void 0||r&&[r].concat(this._emptyCells).forEach(o=>{if(o){const i=o.querySelector('[part~="resize-handle"]');if(i&&o.removeChild(i),n){const a=document.createElement("div");a.setAttribute("part","resize-handle"),o.appendChild(a)}}})}_textAlignChanged(n){if(n===void 0)return;if(["start","end","center"].indexOf(n)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let r;getComputedStyle(this._grid).direction==="ltr"?n==="start"?r="left":n==="end"&&(r="right"):n==="start"?r="right":n==="end"&&(r="left"),this._allCells.forEach(o=>{o._content.style.textAlign=n,getComputedStyle(o._content).textAlign!==n&&(o._content.style.textAlign=r)})}_hiddenChanged(n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",n),!!n!=!!this._previousHidden&&this._grid&&(n===!0&&this._allCells.forEach(r=>{r._content.parentNode&&r._content.parentNode.removeChild(r._content)}),this._grid._debouncerHiddenChanged=De.debounce(this._grid._debouncerHiddenChanged,Co,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=n}_runRenderer(n,r,o){const i=[r._content,this];o&&o.item&&i.push(o),n.apply(this,i)}__renderCellsContent(n,r){this.hidden||!this._grid||r.forEach(o=>{if(!o.parentElement)return;const i=this._grid.__getRowModel(o.parentElement);!n||(o._renderer!==n&&this._clearCellContent(o),o._renderer=n,(i.item||n===this._headerRenderer||n===this._footerRenderer)&&this._runRenderer(n,o,i))})}_clearCellContent(n){n._content.innerHTML="",delete n._content._$litPart$}_renderHeaderCellContent(n,r){!r||!n||(this.__renderCellsContent(n,[r]),this._grid&&r.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(r.parentElement))}_onHeaderRendererOrBindingChanged(n,r,...o){this._renderHeaderCellContent(n,r)}_renderBodyCellsContent(n,r){!r||!n||this.__renderCellsContent(n,r)}_onRendererOrBindingChanged(n,r,...o){this._renderBodyCellsContent(n,r)}_renderFooterCellContent(n,r){!r||!n||(this.__renderCellsContent(n,[r]),this._grid&&r.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(r.parentElement))}_onFooterRendererOrBindingChanged(n,r){this._renderFooterCellContent(n,r)}__setTextContent(n,r){n.textContent!==r&&(n.textContent=r)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){!this.path||this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(n,r,{item:o}){!this.path||this.__setTextContent(n,this.get(this.path,o))}_defaultFooterRenderer(){}_computeHeaderRenderer(n,r){return n||(r!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(n){return n||this._defaultRenderer}_computeFooterRenderer(n){return n||this._defaultFooterRenderer}};class nd extends GC(Po(st)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:Array}}}customElements.define(nd.is,nd);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */he("vaadin-grid",Z`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='cell'] > [tabindex] {
      display: flex;
      align-items: inherit;
      outline: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    [first-frozen-to-end] {
      margin-inline-start: auto;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Cl=!1,tb=[],nb=[];function rb(){Cl=!0,requestAnimationFrame(function(){Cl=!1,YC(tb),setTimeout(function(){KC(nb)})})}function YC(t){for(;t.length;)ob(t.shift())}function KC(t){for(let e=0,n=t.length;e<n;e++)ob(t.shift())}function ob(t){const e=t[0],n=t[1],r=t[2];try{n.apply(e,r)}catch(o){setTimeout(()=>{throw o})}}function ib(t,e,n){Cl||rb(),tb.push([t,e,n])}function ab(t,e,n){Cl||rb(),nb.push([t,e,n])}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ql=t=>t.test(navigator.userAgent),rd=t=>t.test(navigator.platform),qC=t=>t.test(navigator.vendor),rp=ql(/Android/),QC=ql(/Chrome/)&&qC(/Google Inc/),XC=ql(/Firefox/),JC=rd(/^iPad/)||rd(/^Mac/)&&navigator.maxTouchPoints>1,ZC=rd(/^iPhone/),Al=ZC||JC,lb=ql(/^((?!chrome|android).)*safari/i),eA=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const op=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),tA=op&&op[1]>=8,ip=3,nA={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const t=this._virtualCount;return Math.max(0,t-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(t){t=this._clamp(t,0,this._maxVirtualStart),this._virtualStartVal=t},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(t){t%=this._physicalCount,t<0&&(t=this._physicalCount+t),this._physicalStartVal=t},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(t){this._physicalCountVal=t},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let t=this._firstVisibleIndexVal;if(t==null){let e=this._physicalTop+this._scrollOffset;t=this._iterateItems((n,r)=>{if(e+=this._getPhysicalSizeIncrement(n),e>this._scrollPosition)return r})||0,this._firstVisibleIndexVal=t}return t},get lastVisibleIndex(){let t=this._lastVisibleIndexVal;if(t==null){let e=this._physicalTop+this._scrollOffset;this._iterateItems((n,r)=>{e<this._scrollBottom&&(t=r),e+=this._getPhysicalSizeIncrement(n)}),this._lastVisibleIndexVal=t}return t},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const t=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let e=t-this._scrollPosition;const n=e>=0;if(this._scrollPosition=t,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e-=this._scrollOffset;const r=Math.round(e/this._physicalAverage);this._virtualStart+=r,this._physicalStart+=r,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const r=this._getReusables(n);n?(this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length):(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length),this._update(r.indexes,n?null:r.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ao)}},_getReusables(t){let e,n,r;const o=[],i=this._hiddenContentSize*this._ratio,a=this._virtualStart,l=this._virtualEnd,s=this._physicalCount;let c=this._physicalTop+this._scrollOffset;const d=this._physicalBottom+this._scrollOffset,h=this._scrollPosition,u=this._scrollBottom;for(t?(e=this._physicalStart,n=h-c):(e=this._physicalEnd,n=d-u);r=this._getPhysicalSizeIncrement(e),n-=r,!(o.length>=s||n<=i);)if(t){if(l+o.length+1>=this._virtualCount||c+r>=h-this._scrollOffset)break;o.push(e),c+=r,e=(e+1)%s}else{if(a-o.length<=0||c+this._physicalSize-r<=u)break;o.push(e),c-=r,e=e===0?s-1:e-1}return{indexes:o,physicalTop:c-this._scrollOffset}},_update(t,e){if(!(t&&t.length===0||this._physicalCount===0)){if(this._assignModels(t),this._updateMetrics(t),e)for(;e.length;){const n=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(n)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(t){const n=this._clamp(this._physicalCount+t,ip,this._virtualCount-this._virtualStart)-this._physicalCount;let r=Math.round(this._physicalCount*.5);if(!(n<0)){if(n>0){const o=window.performance.now();[].push.apply(this._physicalItems,this._createPool(n));for(let i=0;i<n;i++)this._physicalSizes.push(0);this._physicalCount+=n,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=n),this._update(),this._templateCost=(window.performance.now()-o)/n,r=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||r===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),D_):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),Ao))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const t=this._getReusables(!0);this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length,this._update(t.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(ip))},_itemsChanged(t){t.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Co))},_iterateItems(t,e){let n,r,o,i;if(arguments.length===2&&e){for(i=0;i<e.length;i++)if(n=e[i],r=this._computeVidx(n),(o=t.call(this,n,r))!=null)return o}else{for(n=this._physicalStart,r=this._virtualStart;n<this._physicalCount;n++,r++)if((o=t.call(this,n,r))!=null)return o;for(n=0;n<this._physicalStart;n++,r++)if((o=t.call(this,n,r))!=null)return o}},_computeVidx(t){return t>=this._physicalStart?this._virtualStart+(t-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+t},_updateMetrics(t){Jr();let e=0,n=0;const r=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((i,a)=>{n+=this._physicalSizes[i],this._physicalSizes[i]=this._physicalItems[i].offsetHeight,e+=this._physicalSizes[i],this._physicalAverageCount+=this._physicalSizes[i]?1:0},t),this._physicalSize=this._physicalSize+e-n,this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((o*r+e)/this._physicalAverageCount))},_positionItems(){this._adjustScrollPosition();let t=this._physicalTop;this._iterateItems(e=>{this.translate3d(0,`${t}px`,0,this._physicalItems[e]),t+=this._physicalSizes[e]})},_getPhysicalSizeIncrement(t){return this._physicalSizes[t]},_adjustScrollPosition(){const t=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(t!==0){this._physicalTop-=t;const e=this._scrollPosition;!tA&&e>0&&this._resetScrollPosition(e-t)}},_resetScrollPosition(t){this.scrollTarget&&t>=0&&(this._scrollTop=t,this._scrollPosition=this._scrollTop)},_updateScrollerSize(t){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,t=t||this._scrollHeight===0,t=t||this._scrollPosition>=this._estScrollHeight-this._physicalSize,(t||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${this._estScrollHeight}px`,this._scrollHeight=this._estScrollHeight)},scrollToIndex(t){if(typeof t!="number"||t<0||t>this.items.length-1||(Jr(),this._physicalCount===0))return;t=this._clamp(t,0,this._virtualCount-1),(!this._isIndexRendered(t)||t>=this._maxVirtualStart)&&(this._virtualStart=t-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let e=this._physicalStart,n=this._virtualStart,r=0;const o=this._hiddenContentSize;for(;n<t&&r<=o;)r+=this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,n+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+r),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Co)},_isIndexRendered(t){return t>=this._virtualStart&&t<=this._virtualEnd},_getPhysicalIndex(t){return(this._physicalStart+(t-this._virtualStart))%this._physicalCount},_clamp(t,e,n){return Math.min(n,Math.max(e,t))},_debounce(t,e,n){this._debouncers=this._debouncers||{},this._debouncers[t]=De.debounce(this._debouncers[t],n,e.bind(this)),U_(this._debouncers[t])}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rA=1e5,Bs=1e3;class sb{constructor({createElements:e,updateElement:n,scrollTarget:r,scrollContainer:o,elementsContainer:i,reorderElements:a}){this.isAttached=!0,this._vidxOffset=0,this.createElements=e,this.updateElement=n,this.scrollTarget=r,this.scrollContainer=o,this.elementsContainer=i||o,this.reorderElements=a,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",l=>this.__onWheel(l)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(e){if(typeof e!="number"||isNaN(e)||this.size===0||!this.scrollTarget.offsetHeight)return;e=this._clamp(e,0,this.size-1);const n=this.__getVisibleElements().length;let r=Math.floor(e/this.size*this._virtualCount);this._virtualCount-r<n?(r=this._virtualCount-(this.size-e),this._vidxOffset=this.size-this._virtualCount):r<n?e<Bs?(r=e,this._vidxOffset=0):(r=Bs,this._vidxOffset=e-r):this._vidxOffset=e-r,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(r),this.adjustedFirstVisibleIndex!==e&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(e)||0),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),Jr(),this._scrollHandler(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(e=0,n=this.size-1){this.__getVisibleElements().forEach(r=>{r.__virtualIndex>=e&&r.__virtualIndex<=n&&this.__updateElement(r,r.__virtualIndex,!0)})}__updateElement(e,n,r){e.style.paddingTop&&(e.style.paddingTop=""),!this.__preventElementUpdates&&(e.__lastUpdatedIndex!==n||r)&&(this.updateElement(e,n),e.__lastUpdatedIndex=n);const o=e.offsetHeight;if(o===0)e.style.paddingTop=`${this.__placeholderHeight}px`,requestAnimationFrame(()=>this._resizeHandler());else{this.__elementHeightQueue.push(o),this.__elementHeightQueue.shift();const i=this.__elementHeightQueue.filter(a=>a!==void 0);this.__placeholderHeight=Math.round(i.reduce((a,l)=>a+l,0)/i.length)}}__getIndexScrollOffset(e){const n=this.__getVisibleElements().find(r=>r.__virtualIndex===e);return n?this.scrollTarget.getBoundingClientRect().top-n.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(e){if(e===this.size)return;this.__preventElementUpdates=!0;let n,r;if(e>0&&(n=this.adjustedFirstVisibleIndex,r=this.__getIndexScrollOffset(n)),this.__size=e,Jr(),this._itemsChanged({path:"items"}),Jr(),e>0){n=Math.min(n,e-1),this.scrollToIndex(n);const o=this.__getIndexScrollOffset(n);r!==void 0&&o!==void 0&&(this._scrollTop+=r-o)}this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this.__preventElementUpdates=!1,this._resizeHandler(),Jr()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(e){this.scrollTarget.scrollTop=e}get items(){return{length:Math.min(this.size,rA)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const e=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean(e.direction==="rtl"),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(e){const n=this.createElements(e),r=document.createDocumentFragment();return n.forEach(o=>{o.style.position="absolute",r.appendChild(o),this.__resizeObserver.observe(o)}),this.elementsContainer.appendChild(r),n}_assignModels(e){this._iterateItems((n,r)=>{const o=this._physicalItems[n];o.hidden=r>=this.size,o.hidden?delete o.__lastUpdatedIndex:(o.__virtualIndex=r+(this._vidxOffset||0),this.__updateElement(o,o.__virtualIndex))},e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(e,n,r,o){o.style.transform=`translateY(${n})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const e=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const n=e>=0,r=this._getReusables(!n);r.indexes.length&&(this._physicalTop=r.physicalTop,n?(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length):(this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length),this._resizeHandler())}this.reorderElements&&(this.__scrollReorderDebouncer=De.debounce(this.__scrollReorderDebouncer,nr.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&(this._scrollTop=1)}__onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;let n=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?n*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(n*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame){this._deltaYAcc+=n,e.preventDefault();return}n+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=De.debounce(this.__debouncerWheelAnimationFrame,Co,()=>{this._wheelAnimationFrame=!1});const r=Math.abs(e.deltaX)+Math.abs(n);this._canScroll(this.scrollTarget,e.deltaX,n)?(e.preventDefault(),this.scrollTarget.scrollTop+=n,this.scrollTarget.scrollLeft+=e.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=De.debounce(this._debouncerIgnoreNewWheel,nr.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&r<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():r>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=r}_hasScrolledAncestor(e,n,r){if(e===this.scrollTarget||e===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(e,n,r)&&["auto","scroll"].indexOf(getComputedStyle(e).overflow)!==-1)return!0;if(e!==this&&e.parentElement)return this._hasScrolledAncestor(e.parentElement,n,r)}_canScroll(e,n,r){return r>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||r<0&&e.scrollTop>0||n>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||n<0&&e.scrollLeft>0}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const n=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),n?window.parseInt(n):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(e=>!e.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const e=this._virtualStart+(this._vidxOffset||0),n=this.__getVisibleElements(),o=n.find(l=>l.contains(this.elementsContainer.getRootNode().activeElement)||l.contains(this.scrollTarget.getRootNode().activeElement))||n[0];if(!o)return;const i=o.__virtualIndex-e,a=n.indexOf(o)-i;if(a>0)for(let l=0;l<a;l++)this.elementsContainer.appendChild(n[l]);else if(a<0)for(let l=n.length+a;l<n.length;l++)this.elementsContainer.insertBefore(n[l],n[0]);if(lb){const{transform:l}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=l})}}_adjustVirtualIndexOffset(e){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(e)>1e4){const n=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),r=n*this.size;this._vidxOffset=Math.round(r-n*this._virtualCount)}else{const n=this._vidxOffset,r=Bs,o=100;this._scrollTop===0?(this._vidxOffset=0,n!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<r&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex+(n-this._vidxOffset)));const i=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=i,n!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-r&&this._vidxOffset<i&&(this._vidxOffset+=Math.min(i-this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-n)))}}}Object.setPrototypeOf(sb.prototype,nA);class oA{constructor(e){this.__adapter=new sb(e)}get size(){return this.__adapter.size}set size(e){this.__adapter.size=e}scrollToIndex(e){this.__adapter.scrollToIndex(e)}update(e=0,n=this.size-1){this.__adapter.update(e,n)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const iA=t=>class extends t{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(n){return n.filter(r=>r.some(o=>o.headerRenderer||o.path||o.header)).length}_a11yGetFooterRowCount(n){return n.filter(r=>r.some(o=>o.headerRenderer)).length}_a11yUpdateGridSize(n,r){if(n===void 0||r===void 0)return;const o=r[r.length-1];this.$.table.setAttribute("aria-rowcount",n+this._a11yGetHeaderRowCount(r)+this._a11yGetFooterRowCount(r)),this.$.table.setAttribute("aria-colcount",o&&o.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((n,r)=>n.setAttribute("aria-rowindex",r+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((n,r)=>n.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+r+1))}_a11yUpdateRowRowindex(n,r){n.setAttribute("aria-rowindex",r+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(n,r){n.setAttribute("aria-selected",Boolean(r)),Array.from(n.children).forEach(o=>o.setAttribute("aria-selected",Boolean(r)))}_a11yUpdateRowExpanded(n){this.__isRowExpandable(n)?n.setAttribute("aria-expanded","false"):this.__isRowCollapsible(n)?n.setAttribute("aria-expanded","true"):n.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(n,r){r>0||this.__isRowCollapsible(n)||this.__isRowExpandable(n)?n.setAttribute("aria-level",r+1):n.removeAttribute("aria-level")}_a11ySetRowDetailsCell(n,r){Array.from(n.children).forEach(o=>{o!==r&&o.setAttribute("aria-controls",r.id)})}_a11yUpdateCellColspan(n,r){n.setAttribute("aria-colspan",Number(r))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(n=>{let r=n.parentNode;for(;r&&r.localName!=="vaadin-grid-cell-content";)r=r.parentNode;r&&r.assignedSlot&&r.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(n.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const aA=t=>class extends t{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(n){const r=n.detail.model,o=r?r.item:null;o&&(this.activeItem=this._itemsEqual(this.activeItem,o)?null:o)}_onClick(n){if(n.defaultPrevented)return;const r=n.composedPath(),o=r[r.indexOf(this.$.table)-3];if(!o||o.getAttribute("part").indexOf("details-cell")>-1)return;const i=o._content,a=this.getRootNode().activeElement;!i.contains(a)&&!this._isFocusable(n.target)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(o.parentElement)}}))}_isFocusable(n){return lA(n)}},lA=t=>{if(!t.parentNode)return!1;const n=Array.from(t.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(r=>{const o=r.getAttribute("part");return!(o&&o.includes("body-cell"))}).includes(t);return!t.disabled&&n};function Zr(t,e){return t.split(".").reduce((n,r)=>n[r],e)}function ap(t,e,n){if(n.length===0)return!1;let r=!0;return t.forEach(({path:o})=>{if(!o||o.indexOf(".")===-1)return;const i=o.replace(/\.[^.]*$/,"");Zr(i,n[0])===void 0&&(console.warn(`Path "${o}" used for ${e} does not exist in all of the items, ${e} is disabled.`),r=!1)}),r}function sA(t,e){return t.sort((n,r)=>e.map(o=>o.direction==="asc"?lp(Zr(o.path,n),Zr(o.path,r)):o.direction==="desc"?lp(Zr(o.path,r),Zr(o.path,n)):0).reduce((o,i)=>o!==0?o:i,0))}function El(t){return[void 0,null].indexOf(t)>=0?"":isNaN(t)?t.toString():t}function lp(t,e){return t=El(t),e=El(e),t<e?-1:t>e?1:0}function cA(t,e){return t.filter(n=>e.every(r=>{const o=El(Zr(r.path,n)),i=El(r.value).toString().toLowerCase();return o.toString().toLowerCase().includes(i)}))}const dA=t=>(e,n)=>{let r=t?[...t]:[];e.filters&&ap(e.filters,"filtering",r)&&(r=cA(r,e.filters)),Array.isArray(e.sortOrders)&&e.sortOrders.length&&ap(e.sortOrders,"sorting",r)&&(r=sA(r,e.sortOrders));const o=Math.min(r.length,e.pageSize),i=e.page*o,a=i+o,l=r.slice(i,a);n(l,r.length)};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uA=t=>class extends t{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(n){const r=dA(this.items);r.__items=n,this.setProperties({_arrayDataProvider:r,size:n.length,dataProvider:r})}__dataProviderOrItemsChanged(n,r,o){!o||(this._arrayDataProvider?n!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):r?this._arrayDataProvider.__items===r?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(r):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):r&&this.__setArrayDataProvider(r))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function fA(t,e,n){let r=1;t.forEach(o=>{r%10===0&&(r+=1),o._order=n+r*e,r+=1})}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hA=t=>class extends t{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),wl(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(n){this.hasAttribute("reordering")&&n.preventDefault()}_onTouchStart(n){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:n.touches[0].clientX,y:n.touches[0].clientY}})},100)}_onTouchMove(n){this._draggedColumn&&n.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(n){if(n.detail.state==="start"){const r=n.composedPath(),o=r[r.indexOf(this.$.header)-2];if(!o||!o._content||o._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(n)}else n.detail.state==="track"?this._onTrack(n):n.detail.state==="end"&&this._onTrackEnd(n)}_onTrackStart(n){if(!this.columnReorderingAllowed)return;const r=n.composedPath&&n.composedPath();if(r&&r.some(i=>i.hasAttribute&&i.hasAttribute("draggable")))return;const o=this._cellFromPoint(n.detail.x,n.detail.y);if(!(!o||!o.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=o._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(o),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(n.detail.x,this._touchDevice?n.detail.y-50:n.detail.y),this._autoScroller()}}_onTrack(n){if(!this._draggedColumn)return;const r=this._cellFromPoint(n.detail.x,n.detail.y);if(!r)return;const o=this._getTargetColumn(r,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,o)&&this._isSwappableByPosition(o,n.detail.x)){const i=this._columnTree.findIndex(d=>d.includes(o)),a=this._getColumnsInOrder(i),l=a.indexOf(this._draggedColumn),s=a.indexOf(o),c=l<s?1:-1;for(let d=l;d!==s;d+=c)this._swapColumnOrders(this._draggedColumn,a[d+c])}this._updateGhostPosition(n.detail.x,this._touchDevice?n.detail.y-50:n.detail.y),this._lastDragClientX=n.detail.x}_onTrackEnd(){!this._draggedColumn||(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(n=this._columnTree.length-1){return this._columnTree[n].filter(r=>!r.hidden).sort((r,o)=>r._order-o._order)}_cellFromPoint(n,r){n=n||0,r=r||0,this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const o=this.shadowRoot.elementFromPoint(n,r);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),o&&o._column)return o}_updateGhostPosition(n,r){const o=this._reorderGhost.getBoundingClientRect(),i=n-o.width/2,a=r-o.height/2,l=parseInt(this._reorderGhost._left||0),s=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=l-(o.left-i),this._reorderGhost._top=s-(o.top-a),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(n){const r=this._reorderGhost;r.textContent=n._content.innerText;const o=window.getComputedStyle(n);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(i=>{r.style[i]=o[i]}),r}_updateOrders(n){n!==void 0&&(n[0].forEach(r=>{r._order=0}),fA(n[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(n,r){Array.from(n.parentNode.children).filter(o=>/column/.test(o.localName)&&this._isSwapAllowed(o,n)).forEach(o=>{o._reorderStatus=r})}_autoScroller(){if(this._lastDragClientX){const n=this._lastDragClientX-this.getBoundingClientRect().right+50,r=this.getBoundingClientRect().left-this._lastDragClientX+50;n>0?this.$.table.scrollLeft+=n/10:r>0&&(this.$.table.scrollLeft-=r/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(n,r){if(n&&r){const o=n!==r,i=n.parentElement===r.parentElement,a=n.frozen&&r.frozen||n.frozenToEnd&&r.frozenToEnd||!n.frozen&&!n.frozenToEnd&&!r.frozen&&!r.frozenToEnd;return o&&i&&a}}_isSwappableByPosition(n,r){const o=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(l=>n.contains(l._column)),i=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),a=o.getBoundingClientRect();return a.left>i.left?r>a.right-i.width:r<a.left+i.width}_swapColumnOrders(n,r){[n._order,r._order]=[r._order,n._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(n,r){if(n&&r){let o=n._column;for(;o.parentElement!==r.parentElement&&o!==this;)o=o.parentElement;return o.parentElement===r.parentElement?o:n._column}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pA=t=>class extends t{ready(){super.ready();const n=this.$.scroller;wl(n,"track",this._onHeaderTrack.bind(this)),n.addEventListener("touchmove",r=>n.hasAttribute("column-resizing")&&r.preventDefault()),n.addEventListener("contextmenu",r=>r.target.getAttribute("part")==="resize-handle"&&r.preventDefault()),n.addEventListener("mousedown",r=>r.target.getAttribute("part")==="resize-handle"&&r.preventDefault())}_onHeaderTrack(n){const r=n.target;if(r.getAttribute("part")==="resize-handle"){let i=r.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);i.localName==="vaadin-grid-column-group";)i=i._childColumns.slice(0).sort((d,h)=>d._order-h._order).filter(d=>!d.hidden).pop();const a=n.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),s=l.find(d=>d._column===i);if(s.offsetWidth){const d=getComputedStyle(s._content),h=10+parseInt(d.paddingLeft)+parseInt(d.paddingRight)+parseInt(d.borderLeftWidth)+parseInt(d.borderRightWidth)+parseInt(d.marginLeft)+parseInt(d.marginRight);let u;const _=s.offsetWidth,v=s.getBoundingClientRect();s.hasAttribute("frozen-to-end")?u=_+(this.__isRTL?a-v.right:v.left-a):u=_+(this.__isRTL?v.left-a:a-v.right),i.width=`${Math.max(h,u)}px`,i.flexGrow=0}l.sort((d,h)=>d._column._order-h._column._order).forEach((d,h,u)=>{h<u.indexOf(s)&&(d._column.width=`${d.offsetWidth}px`,d._column.flexGrow=0)});const c=this._frozenToEndCells[0];if(c&&this.$.table.scrollWidth>this.$.table.offsetWidth){const d=c.getBoundingClientRect(),h=a-(this.__isRTL?d.right:d.left);(this.__isRTL&&h<=0||!this.__isRTL&&h>=0)&&(this.$.table.scrollLeft+=h)}n.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:i}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sp=class cb{constructor(e,n,r){this.grid=e,this.parentCache=n,this.parentItem=r,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0])}getItemForIndex(e){const{cache:n,scaledIndex:r}=this.getCacheAndIndex(e);return n.items[r]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((e,n)=>{const r=this.itemCaches[n];return r.updateSize(),e+r.effectiveSize},0):0}ensureSubCacheForScaledIndex(e){if(!this.itemCaches[e]){const n=new cb(this.grid,this,this.items[e]);this.itemCaches[e]=n,this.grid._loadPage(0,n)}}getCacheAndIndex(e){let n=e;const r=Object.keys(this.itemCaches);for(let o=0;o<r.length;o++){const i=Number(r[o]),a=this.itemCaches[i];if(n<=i)return{cache:this,scaledIndex:n};if(n<=i+a.effectiveSize)return a.getCacheAndIndex(n-i-1);n-=a.effectiveSize}return{cache:this,scaledIndex:n}}},mA=t=>class extends t{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new sp(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(n){const r=n-this._cache.size;this._cache.size+=r,this._cache.effectiveSize+=r,this._effectiveSize=this._cache.effectiveSize}_getItem(n,r){if(n>=this._effectiveSize)return;r.index=n;const{cache:o,scaledIndex:i}=this._cache.getCacheAndIndex(n),a=o.items[i];a?(r.toggleAttribute("loading",!1),this._updateItem(r,a),this._isExpanded(a)&&o.ensureSubCacheForScaledIndex(i)):(r.toggleAttribute("loading",!0),this._loadPage(this._getPageForIndex(i),o))}getItemId(n){return this.itemIdPath?this.get(this.itemIdPath,n):n}_isExpanded(n){return this.__expandedKeys.has(this.getItemId(n))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(n,r){const o=r.base||[],i=new Set;return o.forEach(a=>{i.add(this.getItemId(a))}),i}expandItem(n){this._isExpanded(n)||(this.expandedItems=[...this.expandedItems,n])}collapseItem(n){this._isExpanded(n)&&(this.expandedItems=this.expandedItems.filter(r=>!this._itemsEqual(r,n)))}_getIndexLevel(n){let{cache:r}=this._cache.getCacheAndIndex(n),o=0;for(;r.parentCache;)r=r.parentCache,o+=1;return o}_loadPage(n,r){if(!r.pendingRequests[n]&&this.dataProvider){this._setLoading(!0),r.pendingRequests[n]=!0;const o={page:n,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:r.parentItem};this.dataProvider(o,(i,a)=>{a!==void 0?r.size=a:o.parentItem&&(r.size=i.length);const l=Array.from(this.$.items.children).map(s=>s._item);i.forEach((s,c)=>{const d=n*this.pageSize+c;r.items[d]=s,this._isExpanded(s)&&l.indexOf(s)>-1&&r.ensureSubCacheForScaledIndex(d)}),this._hasData=!0,delete r.pendingRequests[n],this._debouncerApplyCachedData=De.debounce(this._debouncerApplyCachedData,nr.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(s=>!s.hidden).forEach(s=>{this._cache.getItemForIndex(s.index)&&this._getItem(s.index,s)}),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()})}}_getPageForIndex(n){return Math.floor(n/this.pageSize)}clearCache(){this._cache=new sp(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(n,r){r!==void 0&&n!==r&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`\u2019s `callback` call.")}_dataProviderChanged(n,r){r!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=De.debounce(this._debouncerCheckSize,nr.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(n,r){return this.getItemId(n)===this.getItemId(r)}_getItemIndexInArray(n,r){let o=-1;return r.forEach((i,a)=>{this._itemsEqual(i,n)&&(o=a)}),o}scrollToIndex(n){super.scrollToIndex(n),!isNaN(n)&&(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndex=n)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const n=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(n)}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wo={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},Dn={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},gA=!("draggable"in document.createElement("div")),_A=t=>class extends t{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",n=>{this.dropMode&&(n.preventDefault(),n.stopPropagation())})}_onDragStart(n){if(this.rowsDraggable){let r=n.target;if(r.localName==="vaadin-grid-cell-content"&&(r=r.assignedSlot.parentNode.parentNode),r.parentNode!==this.$.items)return;if(n.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const l=r.style.transform;r.style.top=/translateY\((.*)\)/.exec(l)[1],r.style.transform="none",requestAnimationFrame(()=>{r.style.top="",r.style.transform=l})}const o=r.getBoundingClientRect();gA?n.dataTransfer.setDragImage(r):n.dataTransfer.setDragImage(r,n.clientX-o.left,n.clientY-o.top);let i=[r];this._isSelected(r._item)&&(i=this.__getViewportRows().filter(l=>this._isSelected(l._item)).filter(l=>!this.dragFilter||this.dragFilter(this.__getRowModel(l)))),n.dataTransfer.setData("text",this.__formatDefaultTransferData(i)),r.setAttribute("dragstart",i.length>1?i.length:""),this.style.setProperty("--_grid-drag-start-x",`${n.clientX-o.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${n.clientY-o.top+10}px`),requestAnimationFrame(()=>{r.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});const a=new CustomEvent("grid-dragstart",{detail:{draggedItems:i.map(l=>l._item),setDragData:(l,s)=>n.dataTransfer.setData(l,s),setDraggedItemsCount:l=>r.setAttribute("dragstart",l)}});a.originalEvent=n,this.dispatchEvent(a)}}_onDragEnd(n){this.toggleAttribute("dragging-rows",!1),n.stopPropagation();const r=new CustomEvent("grid-dragend");r.originalEvent=n,this.dispatchEvent(r)}_onDragLeave(n){n.stopPropagation(),this._clearDragStyles()}_onDragOver(n){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(n.clientY)){this._clearDragStyles();return}let r=n.composedPath().find(o=>o.localName==="tr");if(!this._effectiveSize||this.dropMode===Wo.ON_GRID)this._dropLocation=Dn.EMPTY;else if(!r||r.parentNode!==this.$.items){if(r)return;if(this.dropMode===Wo.BETWEEN||this.dropMode===Wo.ON_TOP_OR_BETWEEN)r=Array.from(this.$.items.children).filter(o=>!o.hidden).pop(),this._dropLocation=Dn.BELOW;else return}else{const o=r.getBoundingClientRect();if(this._dropLocation=Dn.ON_TOP,this.dropMode===Wo.BETWEEN){const i=n.clientY-o.top<o.bottom-n.clientY;this._dropLocation=i?Dn.ABOVE:Dn.BELOW}else this.dropMode===Wo.ON_TOP_OR_BETWEEN&&(n.clientY-o.top<o.height/3?this._dropLocation=Dn.ABOVE:n.clientY-o.top>o.height/3*2&&(this._dropLocation=Dn.BELOW))}if(r&&r.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}n.stopPropagation(),n.preventDefault(),this._dropLocation===Dn.EMPTY?this.toggleAttribute("dragover",!0):r?(this._dragOverItem=r._item,r.getAttribute("dragover")!==this._dropLocation&&r.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(n){if(this.__dndAutoScrolling)return!0;const r=this.$.header.getBoundingClientRect().bottom,o=this.$.footer.getBoundingClientRect().top,i=r-n+this.__dndAutoScrollThreshold,a=n-o+this.__dndAutoScrollThreshold;let l=0;if(a>0?l=a*2:i>0&&(l=-i*2),l){const s=this.$.table.scrollTop;if(this.$.table.scrollTop+=l,s!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const n=this.$.header.getBoundingClientRect().bottom,r=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(o=>{const i=o.getBoundingClientRect();return i.bottom>n&&i.top<r})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(n=>n.removeAttribute("dragover"))}_onDrop(n){if(this.dropMode){n.stopPropagation(),n.preventDefault();const r=n.dataTransfer.types&&Array.from(n.dataTransfer.types).map(i=>({type:i,data:n.dataTransfer.getData(i)}));this._clearDragStyles();const o=new CustomEvent("grid-drop",{bubbles:n.bubbles,cancelable:n.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:r}});o.originalEvent=n,this.dispatchEvent(o)}}__formatDefaultTransferData(n){return n.map(r=>Array.from(r.children).filter(o=>!o.hidden&&o.getAttribute("part").indexOf("details-cell")===-1).sort((o,i)=>o._column._order>i._column._order?1:-1).map(o=>o._content.textContent.trim()).filter(o=>o).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(n=>!n.hidden).forEach(n=>{this._filterDragAndDrop(n,this.__getRowModel(n))})}_filterDragAndDrop(n,r){const o=this.loading||n.hasAttribute("loading"),i=!this.rowsDraggable||o||this.dragFilter&&!this.dragFilter(r),a=!this.dropMode||o||this.dropFilter&&!this.dropFilter(r);Array.from(n.children).map(s=>s._content).forEach(s=>{i?s.removeAttribute("draggable"):s.setAttribute("draggable",!0)}),n.toggleAttribute("drag-disabled",!!i),n.toggleAttribute("drop-disabled",!!a)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function db(t,e){if(!t||!e||t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]instanceof Array&&e[n]instanceof Array){if(!db(t[n],e[n]))return!1}else if(t[n]!==e[n])return!1;return!0}const bA=t=>class extends t{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(n){for(let r=0;r<n.length;r++)if(n[r].localName==="vaadin-grid-column-group")return!0;return!1}_getChildColumns(n){return fn.getFlattenedNodes(n).filter(this._isColumnElement)}_flattenColumnGroups(n){return n.map(r=>r.localName==="vaadin-grid-column-group"?this._getChildColumns(r):[r]).reduce((r,o)=>r.concat(o),[])}_getColumnTree(){const n=fn.getFlattenedNodes(this).filter(this._isColumnElement),r=[n];let o=n;for(;this._hasColumnGroups(o);)o=this._flattenColumnGroups(o),r.push(o);return r}_updateColumnTree(){const n=this._getColumnTree();db(n,this._columnTree)||(this._columnTree=n)}_addNodeObserver(){this._observer=new fn(this,n=>{const r=o=>o.filter(this._isColumnElement).length>0;if(r(n.addedNodes)||r(n.removedNodes)){const o=n.removedNodes.flatMap(a=>a._allCells),i=a=>o.filter(l=>l._content.contains(a)).length;this.__removeSorters(this._sorters.filter(i)),this.__removeFilters(this._filters.filter(i)),this._updateColumnTree()}this._debouncerCheckImports=De.debounce(this._debouncerCheckImports,nr.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(n=>{const r=this.querySelector(n);r&&!(r instanceof st)&&console.warn(`Make sure you have imported the required module for <${n}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(n=>this._updateFirstAndLastColumnForRow(n))}_updateFirstAndLastColumnForRow(n){Array.from(n.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((r,o)=>r._column._order-o._column._order).forEach((r,o,i)=>{r.toggleAttribute("first-column",o===0),r.toggleAttribute("last-column",o===i.length-1)})}_isColumnElement(n){return n.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(n.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vA=t=>class extends t{getEventContext(n){const r={},o=n.__composedPath||n.composedPath(),i=o[o.indexOf(this.$.table)-3];return i&&(r.section=["body","header","footer","details"].find(a=>i.getAttribute("part").indexOf(a)>-1),i._column&&(r.column=i._column),(r.section==="body"||r.section==="details")&&Object.assign(r,this.__getRowModel(i.parentElement))),r}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yA=t=>class extends t{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(n){n.stopPropagation(),this.__addFilter(n.target),this.__applyFilters()}__removeFilters(n){n.length!==0&&(this._filters=this._filters.filter(r=>n.indexOf(r)<0),this.__applyFilters())}__addFilter(n){this._filters.indexOf(n)===-1&&this._filters.push(n)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(n=>({path:n.path,value:n.value}))}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function wA(t){const e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(t),t=t.host;continue}if(t.assignedSlot){t=t.assignedSlot;continue}t=t.parentNode}return e}function ub(t){return t?new Set(t.split(" ")):new Set}function fb(t){return[...t].join(" ")}function Mu(t,e,n){const r=ub(t.getAttribute(e));r.add(n),t.setAttribute(e,fb(r))}function Fu(t,e,n){const r=ub(t.getAttribute(e));if(r.delete(n),r.size===0){t.removeAttribute(e);return}t.setAttribute(e,fb(r))}function xA(t){return t.nodeType===Node.TEXT_NODE&&t.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const CA=t=>class extends t{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged"},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(n){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(r=>{const o=this[r];if(n){const i=o&&o.parentElement;this.__isCell(o)?this[r]=i:this.__isCell(i)&&(this[r]=i.parentElement)}else if(!n&&this.__isRow(o)){const i=o.firstElementChild;this[r]=i._focusButton||i}})}_focusableChanged(n,r){r&&r.setAttribute("tabindex","-1"),n&&this._updateGridSectionFocusTarget(n)}_focusedCellChanged(n,r){r&&Fu(r,"part","focused-cell"),n&&Mu(n,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const n=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach(r=>{if(r.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=r;else{let o=this._itemsFocusable.parentElement,i=this._itemsFocusable;if(o){this.__isCell(o)&&(i=o,o=o.parentElement);const a=[...o.children].indexOf(i);this._itemsFocusable=this.__getFocusable(r,r.children[a])}}}),n&&this._itemsFocusable.focus()}_onKeyDown(n){const r=n.key;let o;switch(r){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":o="Navigation";break;case"Enter":case"Escape":case"F2":o="Interaction";break;case"Tab":o="Tab";break;case" ":o="Space";break}this._detectInteracting(n),this.interacting&&o!=="Interaction"&&(o=void 0),o&&this[`_on${o}KeyDown`](n,r)}_ensureScrolledToIndex(n){[...this.$.items.children].find(o=>o.index===n)?this.__scrollIntoViewport(n):this.scrollToIndex(n)}__isRowExpandable(n){if(this.itemHasChildrenPath){const r=n._item;return r&&this.get(this.itemHasChildrenPath,r)&&!this._isExpanded(r)}}__isRowCollapsible(n){return this._isExpanded(n._item)}__isDetailsCell(n){return n.matches('[part~="details-cell"]')}__isCell(n){return n instanceof HTMLTableCellElement}__isRow(n){return n instanceof HTMLTableRowElement}__getIndexOfChildElement(n){return Array.prototype.indexOf.call(n.parentNode.children,n)}_onNavigationKeyDown(n,r){n.preventDefault();const o=this._lastVisibleIndex-this._firstVisibleIndex-1;let i=0,a=0;switch(r){case"ArrowRight":i=this.__isRTL?-1:1;break;case"ArrowLeft":i=this.__isRTL?1:-1;break;case"Home":this.__rowFocusMode||n.ctrlKey?a=-1/0:i=-1/0;break;case"End":this.__rowFocusMode||n.ctrlKey?a=1/0:i=1/0;break;case"ArrowDown":a=1;break;case"ArrowUp":a=-1;break;case"PageDown":a=o;break;case"PageUp":a=-o;break}const l=n.composedPath().find(h=>this.__isRow(h)),s=n.composedPath().find(h=>this.__isCell(h));if(this.__rowFocusMode&&!l||!this.__rowFocusMode&&!s)return;const c=this.__isRTL?"ArrowLeft":"ArrowRight",d=this.__isRTL?"ArrowRight":"ArrowLeft";if(r===c){if(this.__rowFocusMode){if(this.__isRowExpandable(l)){this.expandItem(l._item);return}this.__rowFocusMode=!1,this._onCellNavigation(l.firstElementChild,0,0);return}}else if(r===d)if(this.__rowFocusMode){if(this.__isRowCollapsible(l)){this.collapseItem(l._item);return}}else{const h=[...l.children].sort((u,_)=>u._order-_._order);if(s===h[0]||this.__isDetailsCell(s)){this.__rowFocusMode=!0,this._onRowNavigation(l,0);return}}this.__rowFocusMode?this._onRowNavigation(l,a):this._onCellNavigation(s,i,a)}_onRowNavigation(n,r){const{dstRow:o}=this.__navigateRows(r,n);o&&o.focus()}__getIndexInGroup(n,r){return n.parentNode===this.$.items?r!==void 0?r:n.index:this.__getIndexOfChildElement(n)}__navigateRows(n,r,o){const i=this.__getIndexInGroup(r,this._focusedItemIndex),a=r.parentNode,l=(a===this.$.items?this._effectiveSize:a.children.length)-1;let s=Math.max(0,Math.min(i+n,l));if(a!==this.$.items){if(s>i)for(;s<l&&a.children[s].hidden;)s+=1;else if(s<i)for(;s>0&&a.children[s].hidden;)s-=1;return this.toggleAttribute("navigating",!0),{dstRow:a.children[s]}}let c=!1;if(o){const d=this.__isDetailsCell(o);if(a===this.$.items){const h=r._item,u=this._cache.getItemForIndex(s);d?c=n===0:c=n===1&&this._isDetailsOpened(h)||n===-1&&s!==i&&this._isDetailsOpened(u),c!==d&&(n===1&&c||n===-1&&!c)&&(s=i)}}return this._ensureScrolledToIndex(s),this._focusedItemIndex=s,this.toggleAttribute("navigating",!0),{dstRow:[...a.children].find(d=>!d.hidden&&d.index===s),dstIsRowDetails:c}}_onCellNavigation(n,r,o){const i=n.parentNode,{dstRow:a,dstIsRowDetails:l}=this.__navigateRows(o,i,n);if(!a)return;const s=this.__getIndexOfChildElement(n),c=this.__isDetailsCell(n),d=i.parentNode,h=this.__getIndexInGroup(i,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(c?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(d,h).filter(u=>!u.hidden)[s]._order),l)[...a.children].find(_=>this.__isDetailsCell(_)).focus();else{const u=this.__getIndexInGroup(a,this._focusedItemIndex),_=this._getColumns(d,u).filter(E=>!E.hidden),v=_.map(E=>E._order).sort((E,O)=>E-O),y=v.length-1,P=v.indexOf(v.slice(0).sort((E,O)=>Math.abs(E-this._focusedColumnOrder)-Math.abs(O-this._focusedColumnOrder))[0]),g=o===0&&c?P:Math.max(0,Math.min(P+r,y));g!==P&&(this._focusedColumnOrder=void 0);const b=_.reduce((E,O,F)=>(E[O._order]=F,E),{})[v[g]],C=a.children[b];this._scrollHorizontallyToCell(C),C.focus()}}_onInteractionKeyDown(n,r){const o=n.composedPath()[0],i=o.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(o.type);let a;switch(r){case"Enter":a=this.interacting?!i:!0;break;case"Escape":a=!1;break;case"F2":a=!this.interacting;break}const{cell:l}=this._getGridEventLocation(n);if(this.interacting!==a&&l!==null)if(a){const s=l._content.querySelector("[focus-target]")||[...l._content.querySelectorAll("*")].find(c=>this._isFocusable(c));s&&(n.preventDefault(),s.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else n.preventDefault(),this._focusedColumnOrder=void 0,l.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);r==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(n,r){const o=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let i=o.indexOf(n);for(i+=r;i>=0&&i<=o.length-1;){let a=o[i];if(a&&!this.__rowFocusMode&&(a=o[i].parentNode),!a||a.hidden)i+=r;else break}return o[i]}_onTabKeyDown(n){const r=this._predictFocusStepTarget(n.composedPath()[0],n.shiftKey?-1:1);if(!!r){if(n.stopPropagation(),r===this.$.table)this.$.table.focus();else if(r===this.$.focusexit)this.$.focusexit.focus();else if(r===this._itemsFocusable){let o=r;const i=this.__isRow(r)?r:r.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),i.index!==this._focusedItemIndex&&this.__isCell(r)){const a=Array.from(i.children).indexOf(this._itemsFocusable),l=Array.from(this.$.items.children).find(s=>!s.hidden&&s.index===this._focusedItemIndex);l&&(o=l.children[a])}n.preventDefault(),o.focus()}else n.preventDefault(),r.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(n){n.preventDefault();const r=n.composedPath()[0],o=this.__isRow(r);(o||!r._content||!r._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(o?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(o?r:r.parentElement)}}))}_onKeyUp(n){if(!/^( |SpaceBar)$/.test(n.key)||this.interacting)return;n.preventDefault();const r=n.composedPath()[0];if(r._content&&r._content.firstElementChild){const o=this.hasAttribute("navigating");r._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:n.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",o)}}_onFocusIn(n){this._isMousedown||this.toggleAttribute("navigating",!0);const r=n.composedPath()[0];r===this.$.table||r===this.$.focusexit?(this._predictFocusStepTarget(r,r===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(n)}_onFocusOut(n){this.toggleAttribute("navigating",!1),this._detectInteracting(n),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(n){const{section:r,cell:o,row:i}=this._getGridEventLocation(n);if(!(!o&&!this.__rowFocusMode)){if(this._detectInteracting(n),r&&(o||i))if(this._activeRowGroup=r,this.$.header===r?this._headerFocusable=this.__getFocusable(i,o):this.$.items===r?this._itemsFocusable=this.__getFocusable(i,o):this.$.footer===r&&(this._footerFocusable=this.__getFocusable(i,o)),o){const a=this.getEventContext(n);o.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:a}})),this._focusedCell=o._focusButton||o,Nu()&&n.target===o&&this._showTooltip(n)}else this._focusedCell=null;this._detectFocusedItemIndex(n)}}__getFocusable(n,r){return this.__rowFocusMode?n:r._focusButton||r}_detectInteracting(n){const r=n.composedPath().some(o=>o.localName==="vaadin-grid-cell-content");this._setInteracting(r),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(n){const{section:r,row:o}=this._getGridEventLocation(n);r===this.$.items&&(this._focusedItemIndex=o.index)}_updateGridSectionFocusTarget(n){if(!n)return;const r=this._getGridSectionFromFocusTarget(n),o=this.interacting&&r===this._activeRowGroup;n.tabIndex=o?-1:0}_preventScrollerRotatingCellFocus(n,r){n.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),r===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(n,r){let o=this._columnTree.length-1;return n===this.$.header?o=r:n===this.$.footer&&(o=this._columnTree.length-1-r),this._columnTree[o]}__isValidFocusable(n){return this.$.table.contains(n)&&n.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(n=>{if(!this.__isValidFocusable(this[`_${n}Focusable`])){const r=[...this.$[n].children].find(i=>i.offsetHeight),o=r?[...r.children].find(i=>!i.hidden):null;r&&o&&(this[`_${n}Focusable`]=this.__getFocusable(r,o))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const n=this.__getFirstVisibleItem(),r=n?[...n.children].find(o=>!o.hidden):null;r&&n&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__getFocusable(n,r))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(n){if(n.hasAttribute("frozen")||n.hasAttribute("frozen-to-end")||this.__isDetailsCell(n))return;const r=n.getBoundingClientRect(),o=n.parentNode,i=Array.from(o.children).indexOf(n),a=this.$.table.getBoundingClientRect();let l=a.left,s=a.right;for(let c=i-1;c>=0;c--){const d=o.children[c];if(!(d.hasAttribute("hidden")||this.__isDetailsCell(d))&&(d.hasAttribute("frozen")||d.hasAttribute("frozen-to-end"))){l=d.getBoundingClientRect().right;break}}for(let c=i+1;c<o.children.length;c++){const d=o.children[c];if(!(d.hasAttribute("hidden")||this.__isDetailsCell(d))&&(d.hasAttribute("frozen")||d.hasAttribute("frozen-to-end"))){s=d.getBoundingClientRect().left;break}}r.left<l&&(this.$.table.scrollLeft+=Math.round(r.left-l)),r.right>s&&(this.$.table.scrollLeft+=Math.round(r.right-s))}_getGridEventLocation(n){const r=n.composedPath(),o=r.indexOf(this.$.table),i=o>=1?r[o-1]:null,a=o>=2?r[o-2]:null,l=o>=3?r[o-3]:null;return{section:i,row:a,cell:l}}_getGridSectionFromFocusTarget(n){return n===this._headerFocusable?this.$.header:n===this._itemsFocusable?this.$.items:n===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const AA=t=>class extends t{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(n=>{n.forEach(({target:r})=>{this._updateDetailsCellHeight(r.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(n){!n||this._columnTree&&Array.from(this.$.items.children).forEach(r=>{if(!r.querySelector("[part~=details-cell]")){this._updateRow(r,this._columnTree[this._columnTree.length-1]);const o=this._isDetailsOpened(r._item);this._toggleDetailsCell(r,o)}})}_detailsOpenedItemsChanged(n,r){n.path==="detailsOpenedItems.length"||!n.value||[...this.$.items.children].forEach(o=>{if(o.hasAttribute("details-opened")){this._updateItem(o,o._item);return}r&&this._isDetailsOpened(o._item)&&this._updateItem(o,o._item)})}_configureDetailsCell(n){n.setAttribute("part","cell details-cell"),n.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(n)}_toggleDetailsCell(n,r){const o=n.querySelector('[part~="details-cell"]');!o||(o.hidden=!r,!o.hidden&&this.rowDetailsRenderer&&(o._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(n){const r=n.querySelector('[part~="details-cell"]');!r||(r.hidden?n.style.removeProperty("padding-bottom"):n.style.setProperty("padding-bottom",`${r.offsetHeight}px`))}_updateDetailsCellHeights(){[...this.$.items.children].forEach(n=>{this._updateDetailsCellHeight(n)})}_isDetailsOpened(n){return this.detailsOpenedItems&&this._getItemIndexInArray(n,this.detailsOpenedItems)!==-1}openItemDetails(n){this._isDetailsOpened(n)||(this.detailsOpenedItems=[...this.detailsOpenedItems,n])}closeItemDetails(n){this._isDetailsOpened(n)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(r=>!this._itemsEqual(r,n)))}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xa=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(e=>{e.target.resizables?e.target.resizables.forEach(n=>{n._onResize(e.contentRect)}):e.target._onResize(e.contentRect)})})}),EA=Ie(t=>class extends t{connectedCallback(){if(super.connectedCallback(),xa.observe(this),this._observeParent){const n=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;n.resizables||(n.resizables=new Set,xa.observe(n)),n.resizables.add(this),this.__parent=n}}disconnectedCallback(){super.disconnectedCallback(),xa.unobserve(this);const n=this.__parent;if(this._observeParent&&n){const r=n.resizables;r&&(r.delete(this),r.size===0&&xa.unobserve(n)),this.__parent=null}}get _observeParent(){return!1}_onResize(n){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const SA={SCROLLING:500},kA=t=>class extends EA(t){static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(n){this.$.table.scrollTop=n}get _scrollLeft(){return this.$.table.scrollLeft}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",n=>{const r=n.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=n.composedPath()[r-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){this._updateOverflow(),this.__updateHorizontalScrollPosition()}scrollToIndex(n){n=Math.min(this._effectiveSize-1,Math.max(0,n)),this.__virtualizer.scrollToIndex(n),this.__scrollIntoViewport(n)}__scrollIntoViewport(n){const r=[...this.$.items.children].find(o=>o.index===n);if(r){const o=r.getBoundingClientRect(),i=this.$.footer.getBoundingClientRect().top,a=this.$.header.getBoundingClientRect().bottom;o.bottom>i?this.$.table.scrollTop+=o.bottom-i:o.top<a&&(this.$.table.scrollTop-=a-o.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=De.debounce(this._debounceScrolling,nr.after(SA.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow()}_updateOverflow(){let n="";const r=this.$.table;r.scrollTop<r.scrollHeight-r.clientHeight&&(n+=" bottom"),r.scrollTop>0&&(n+=" top");const o=this.__getNormalizedScrollLeft(r);o>0&&(n+=" start"),o<r.scrollWidth-r.clientWidth&&(n+=" end"),this.__isRTL&&(n=n.replace(/start|end/gi,i=>i==="start"?"end":"start")),r.scrollLeft<r.scrollWidth-r.clientWidth&&(n+=" right"),r.scrollLeft>0&&(n+=" left"),this._debounceOverflow=De.debounce(this._debounceOverflow,Co,()=>{const i=n.trim();i.length>0&&this.getAttribute("overflow")!==i?this.setAttribute("overflow",i):i.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_frozenCellsChanged(){this._debouncerCacheElements=De.debounce(this._debouncerCacheElements,Ao,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(n=>{n.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=De.debounce(this.__debounceUpdateFrozenColumn,Ao,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const n=this._columnTree[this._columnTree.length-1].slice(0);n.sort((i,a)=>i._order-a._order);let r,o;for(let i=0;i<n.length;i++){const a=n[i];a._lastFrozen=!1,a._firstFrozenToEnd=!1,o===void 0&&a.frozenToEnd&&!a.hidden&&(o=i),a.frozen&&!a.hidden&&(r=i)}r!==void 0&&(n[r]._lastFrozen=!0),o!==void 0&&(n[o]._firstFrozenToEnd=!0)}__updateHorizontalScrollPosition(){const n=this.$.table.scrollWidth,r=this.$.table.clientWidth,o=Math.max(0,this.$.table.scrollLeft),i=this.__getNormalizedScrollLeft(this.$.table),a=`translate(${-o}px, 0)`;this.$.header.style.transform=a,this.$.footer.style.transform=a,this.$.items.style.transform=a;const l=this.__isRTL?i+r-n:o,s=`translate(${l}px, 0)`;for(let h=0;h<this._frozenCells.length;h++)this._frozenCells[h].style.transform=s;const d=`translate(${this.__isRTL?i:o+r-n}px, 0)`;for(let h=0;h<this._frozenToEndCells.length;h++)this._frozenToEndCells[h].style.transform=d;this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-l}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const TA=t=>class extends t{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(n){return this.__selectedKeys.has(this.getItemId(n))}selectItem(n){this._isSelected(n)||(this.selectedItems=[...this.selectedItems,n])}deselectItem(n){this._isSelected(n)&&(this.selectedItems=this.selectedItems.filter(r=>!this._itemsEqual(r,n)))}_toggleItem(n){this._isSelected(n)?this.deselectItem(n):this.selectItem(n)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(n,r){const o=r.base||[],i=new Set;return o.forEach(a=>{i.add(this.getItemId(a))}),i}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let cp="prepend";const PA=t=>class extends t{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>cp},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(n){cp=["append","prepend"].includes(n)?n:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(n){const r=n.target;n.stopPropagation(),r._grid=this,this.__updateSorter(r,n.detail.shiftClick),this.__applySorters()}__removeSorters(n){n.length!==0&&(this._sorters=this._sorters.filter(r=>n.indexOf(r)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((n,r)=>{n._order=this._sorters.length>1?r:null})}__appendSorter(n){n.direction?this._sorters.includes(n)||this._sorters.push(n):this._removeArrayItem(this._sorters,n),this.__updateSortOrders()}__prependSorter(n){this._removeArrayItem(this._sorters,n),n.direction&&this._sorters.unshift(n),this.__updateSortOrders()}__updateSorter(n,r){if(!(!n.direction&&this._sorters.indexOf(n)===-1)){if(n._order=null,this.multiSort&&!this.multiSortOnShiftClick||this.multiSortOnShiftClick&&r)this.multiSortPriority==="append"?this.__appendSorter(n):this.__prependSorter(n);else if(n.direction||this.multiSortOnShiftClick){const o=this._sorters.filter(i=>i!==n);this._sorters=n.direction?[n]:[],o.forEach(i=>{i._order=null,i.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(n=>({path:n.path,direction:n.direction}))}_removeArrayItem(n,r){const o=n.indexOf(r);o>-1&&n.splice(o,1)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const OA=t=>class extends t{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(n=>!n.hidden&&!n.hasAttribute("loading")).forEach(n=>this._generateCellClassNames(n,this.__getRowModel(n)))}_generateCellClassNames(n,r){Array.from(n.children).forEach(o=>{if(o.__generatedClasses&&o.__generatedClasses.forEach(i=>o.classList.remove(i)),this.cellClassNameGenerator){const i=this.cellClassNameGenerator(o._column,r);o.__generatedClasses=i&&i.split(" ").filter(a=>a.length>0),o.__generatedClasses&&o.__generatedClasses.forEach(a=>o.classList.add(a))}})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class od extends pn(Mt(mA(uA(bA(aA(kA(TA(PA(AA(CA(iA(yA(hA(pA(In(vA(_A(OA(Du(st)))))))))))))))))))){static get template(){return gt`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:lb},_ios:{type:Boolean,value:Al},_firefox:{type:Boolean,value:XC},_android:{type:Boolean,value:rp},_touchDevice:{type:Boolean,value:eA},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getVisibleRows().find(e=>this._isInViewport(e))}get _firstVisibleIndex(){const e=this.__getFirstVisibleItem();return e?e.index:void 0}__getLastVisibleItem(){return this._getVisibleRows().reverse().find(e=>this._isInViewport(e))}get _lastVisibleIndex(){const e=this.__getLastVisibleItem();return e?e.index:void 0}_isInViewport(e){const n=this.$.table.getBoundingClientRect(),r=e.getBoundingClientRect(),o=this.$.header.getBoundingClientRect().height,i=this.$.footer.getBoundingClientRect().height;return r.bottom>n.top+o&&r.top<n.bottom-i}_getVisibleRows(){return Array.from(this.$.items.children).filter(e=>!e.hidden).sort((e,n)=>e.index-n.index)}ready(){super.ready(),this.__virtualizer=new oA({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>this.__updateFooterPositioning())).observe(this.$.footer),eb(this),this._tooltipController=new Xi(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}attributeChangedCallback(e,n,r){super.attributeChangedCallback(e,n,r),e==="dir"&&(this.__isRTL=r==="rtl")}__getBodyCellCoordinates(e){if(this.$.items.contains(e)&&e.localName==="td")return{item:e.parentElement._item,column:e._column}}__focusBodyCell({item:e,column:n}){const r=this._getVisibleRows().find(i=>i._item===e),o=r&&[...r.children].find(i=>i._column===n);o&&o.focus()}_effectiveSizeChanged(e,n,r,o){if(n&&r&&o){const i=this.shadowRoot.activeElement,a=this.__getBodyCellCoordinates(i);n.size=e,n.update(),n.flush(),a&&i.parentElement.hidden&&this.__focusBodyCell(a),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(e=>e.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}__getIntrinsicWidth(e){if(this.__intrinsicWidthCache.has(e))return this.__intrinsicWidthCache.get(e);const n=this.__calculateIntrinsicWidth(e);return this.__intrinsicWidthCache.set(e,n),n}__calculateIntrinsicWidth(e){const n=e.width,r=e.flexGrow;e.width="auto",e.flexGrow=0;const o=e._allCells.filter(i=>!this.$.items.contains(i)||this._isInViewport(i.parentElement)).reduce((i,a)=>Math.max(i,a.offsetWidth+1),0);return e.flexGrow=r,e.width=n,o}__getDistributedWidth(e,n){if(e==null||e===this)return 0;const r=Math.max(this.__getIntrinsicWidth(e),this.__getDistributedWidth(e.parentElement,e));if(!n)return r;const o=e,i=r,a=o._visibleChildColumns.map(d=>this.__getIntrinsicWidth(d)).reduce((d,h)=>d+h,0),l=Math.max(0,i-a),c=this.__getIntrinsicWidth(n)/a*l;return this.__getIntrinsicWidth(n)+c}_recalculateColumnWidths(e){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(n=>{n.__debounceUpdateHeaderFooterRowVisibility&&n.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map,e.forEach(n=>{n.width=`${this.__getDistributedWidth(n)}px`})}recalculateColumnWidths(){if(!!this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const e=this._getColumns().filter(n=>!n.hidden&&n.autoWidth);this._recalculateColumnWidths(e)}}_createScrollerRows(e){const n=[];for(let r=0;r<e;r++){const o=document.createElement("tr");o.setAttribute("part","row"),o.setAttribute("role","row"),o.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(o,this._columnTree[this._columnTree.length-1],"body",!1,!0),n.push(o)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(r=>r.isConnected&&r.notifyPath&&r.notifyPath("_cells.*",r._cells)),ib(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()}),n}_createCell(e,n){const o=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",o);const a=document.createElement(e);a.id=o.replace("-content-","-"),a.setAttribute("role",e==="td"?"gridcell":"columnheader"),!rp&&!Al&&(a.addEventListener("mouseenter",s=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(s)}),a.addEventListener("mouseleave",()=>{this._hideTooltip()}),a.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const l=document.createElement("slot");if(l.setAttribute("name",o),n&&n._focusButtonMode){const s=document.createElement("div");s.setAttribute("role","button"),s.setAttribute("tabindex","-1"),a.appendChild(s),a._focusButton=s,a.focus=function(){a._focusButton.focus()},s.appendChild(l)}else a.setAttribute("tabindex","-1"),a.appendChild(l);return a._content=i,i.addEventListener("mousedown",()=>{if(QC){const s=c=>{const d=i.contains(this.getRootNode().activeElement),h=c.composedPath().includes(i);!d&&h&&a.focus(),document.removeEventListener("mouseup",s,!0)};document.addEventListener("mouseup",s,!0)}else setTimeout(()=>{i.contains(this.getRootNode().activeElement)||a.focus()})}),a}_updateRow(e,n,r,o,i){r=r||"body";const a=document.createDocumentFragment();Array.from(e.children).forEach(l=>{l._vacant=!0}),e.innerHTML="",n.filter(l=>!l.hidden).forEach((l,s,c)=>{let d;if(r==="body"){if(l._cells=l._cells||[],d=l._cells.find(h=>h._vacant),d||(d=this._createCell("td",l),l._cells.push(d)),d.setAttribute("part","cell body-cell"),e.appendChild(d),s===c.length-1&&this.rowDetailsRenderer){this._detailsCells=this._detailsCells||[];const h=this._detailsCells.find(u=>u._vacant)||this._createCell("td");this._detailsCells.indexOf(h)===-1&&this._detailsCells.push(h),h._content.parentElement||a.appendChild(h._content),this._configureDetailsCell(h),e.appendChild(h),this._a11ySetRowDetailsCell(e,h),h._vacant=!1}l.notifyPath&&!i&&l.notifyPath("_cells.*",l._cells)}else{const h=r==="header"?"th":"td";o||l.localName==="vaadin-grid-column-group"?(d=l[`_${r}Cell`]||this._createCell(h),d._column=l,e.appendChild(d),l[`_${r}Cell`]=d):(l._emptyCells=l._emptyCells||[],d=l._emptyCells.find(u=>u._vacant)||this._createCell(h),d._column=l,e.appendChild(d),l._emptyCells.indexOf(d)===-1&&l._emptyCells.push(d)),d.setAttribute("part",`cell ${r}-cell`)}d._content.parentElement||a.appendChild(d._content),d._vacant=!1,d._column=l}),r!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(e),this.appendChild(a),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__debounceUpdateHeaderFooterRowVisibility(e){e.__debounceUpdateHeaderFooterRowVisibility=De.debounce(e.__debounceUpdateHeaderFooterRowVisibility,Ao,()=>this.__updateHeaderFooterRowVisibility(e))}__updateHeaderFooterRowVisibility(e){if(!e)return;const n=Array.from(e.children).filter(r=>{const o=r._column;if(o._emptyCells&&o._emptyCells.indexOf(r)>-1)return!1;if(e.parentElement===this.$.header){if(o.headerRenderer)return!0;if(o.header===null)return!1;if(o.path||o.header!==void 0)return!0}else if(o.footerRenderer)return!0;return!1});e.hidden!==!n.length&&(e.hidden=!n.length),this._resetKeyboardNavigation()}_updateScrollerItem(e,n){this._preventScrollerRotatingCellFocus(e,n),this._columnTree&&(e.toggleAttribute("first",n===0),e.toggleAttribute("last",n===this._effectiveSize-1),e.toggleAttribute("odd",n%2),this._a11yUpdateRowRowindex(e,n),this._getItem(n,e))}_columnTreeChanged(e){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach(n=>this._updateRow(n,e[e.length-1],null,!1,!0));this.$.header.children.length<e.length;){const n=document.createElement("tr");n.setAttribute("part","row"),n.setAttribute("role","row"),n.setAttribute("tabindex","-1"),this.$.header.appendChild(n);const r=document.createElement("tr");r.setAttribute("part","row"),r.setAttribute("role","row"),r.setAttribute("tabindex","-1"),this.$.footer.appendChild(r)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((n,r)=>this._updateRow(n,e[r],"header",r===e.length-1)),Array.from(this.$.footer.children).forEach((n,r)=>this._updateRow(n,e[e.length-1-r],"footer",r===0)),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(e,n){e._item=n;const r=this.__getRowModel(e);this._toggleDetailsCell(e,r.detailsOpened),this._a11yUpdateRowLevel(e,r.level),this._a11yUpdateRowSelected(e,r.selected),e.toggleAttribute("expanded",r.expanded),e.toggleAttribute("selected",r.selected),e.toggleAttribute("details-opened",r.detailsOpened),this._generateCellClassNames(e,r),this._filterDragAndDrop(e,r),Array.from(e.children).forEach(o=>{if(o._renderer){const i=o._column||this;o._renderer.call(i,o._content,i,r)}}),this._updateDetailsCellHeight(e),this._a11yUpdateRowExpanded(e,r.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(e){e.animationName.indexOf("vaadin-grid-appear")===0&&(e.stopPropagation(),this.__itemsReceived(),requestAnimationFrame(()=>{this.__scrollToPendingIndex()}))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(e._item)}}_showTooltip(e){const n=this._tooltipController.node;n&&n.isConnected&&(this._tooltipController.setTarget(e.target),this._tooltipController.setContext(this.getEventContext(e)),n._stateController.open({focus:e.type==="focusin",hover:e.type==="mouseenter"}))}_hideTooltip(e){const n=this._tooltipController.node;n&&n._stateController.close(e)}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach(e=>{e.forEach(n=>{n._renderHeaderAndFooter&&n._renderHeaderAndFooter()})}),this.__updateVisibleRows())}__updateVisibleRows(e,n){this.__virtualizer&&this.__virtualizer.update(e,n)}notifyResize(){console.warn("WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(od.is,od);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const LA=new Set(["children","localName","ref","style","className"]),dp=new WeakMap,IA=(t,e,n,r,o)=>{const i=o==null?void 0:o[e];i===void 0||n===r?n==null&&e in HTMLElement.prototype?t.removeAttribute(e):t[e]=n:((a,l,s)=>{let c=dp.get(a);c===void 0&&dp.set(a,c=new Map);let d=c.get(l);s!==void 0?d===void 0?(c.set(l,d={handleEvent:s}),a.addEventListener(l,d)):d.handleEvent=s:d!==void 0&&(c.delete(l),a.removeEventListener(l,d))})(t,i,n)};function zA(t=window.React,e,n,r,o){let i,a,l;if(e===void 0){const _=t;({tagName:a,elementClass:l,events:r,displayName:o}=_),i=_.react}else i=t,l=n,a=e;const s=i.Component,c=i.createElement,d=new Set(Object.keys(r!=null?r:{}));class h extends s{constructor(){super(...arguments),this.o=null}t(v){if(this.o!==null)for(const y in this.i)IA(this.o,y,this.props[y],v?v[y]:void 0,r)}componentDidMount(){this.t()}componentDidUpdate(v){this.t(v)}render(){const{_$Gl:v,...y}=this.props;this.h!==v&&(this.u=g=>{v!==null&&((m,b)=>{typeof m=="function"?m(b):m.current=b})(v,g),this.o=g,this.h=v}),this.i={};const P={ref:this.u};for(const[g,m]of Object.entries(y))LA.has(g)?P[g==="className"?"class":g]=m:d.has(g)||g in l.prototype?this.i[g]=m:P[g]=m;return c(a,P)}}h.displayName=o!=null?o:l.name;const u=i.forwardRef((_,v)=>c(h,{..._,_$Gl:v},_==null?void 0:_.children));return u.displayName=h.displayName,u}function mn(t){const{elementClass:e}=t;return zA("_properties"in e?{...t,elementClass:{name:e.name,prototype:e._properties}}:t)}const RA={onActiveItemChanged:"active-item-changed",onCellActivate:"cell-activate",onColumnResize:"column-resize",onExpandedItemsChanged:"expanded-items-changed",onLoadingChanged:"loading-changed",onSelectedItemsChanged:"selected-items-changed",onCellFocus:"cell-focus",onColumnReorder:"column-reorder",onGridDragend:"grid-dragend",onGridDragstart:"grid-dragstart",onGridDrop:"grid-drop",onSizeChanged:"size-changed",onDataProviderChanged:"data-provider-changed"},NA=mn({elementClass:od,events:RA,react:Lt,tagName:"vaadin-grid"}),DA=new Map;function MA(t,[e,...n]){return new Map(t).set(e,n)}function hb(t,e){const[n,r]=W.exports.useReducer(MA,DA),o=W.exports.useCallback((...i)=>r(i),[]);return t?[Array.from(n.entries()).map(([i,a])=>xd.exports.createPortal(e?W.exports.createElement(t,e(a)):t,i)),o]:[]}function FA([t,e]){return{item:e.item,model:e,original:t}}function pb(t){return hb(t,FA)}function $A(t,e){const[n,r]=pb(t.rowDetailsRenderer);return qe(NA,{...t,ref:e,rowDetailsRenderer:r,children:[t.children,n]})}const BA=W.exports.forwardRef($A);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $u=Z`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;he("",$u,{moduleId:"lumo-overlay"});he("vaadin-overlay",$u,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Bu(t,e,n,r,o){let i;o&&(i=typeof n=="object"&&n!==null,i&&(r=t.__dataTemp[e]));let a=r!==n&&(r===r||n===n);return i&&a&&(t.__dataTemp[e]=n),a}const Hu=Ie(t=>{class e extends t{_shouldPropertyChange(r,o,i){return Bu(this,r,o,i,!0)}}return e});Ie(t=>{class e extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(r,o,i){return Bu(this,r,o,i,this.mutableData)}}return e});Hu._mutablePropertyChange=Bu;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let id=null;function ad(){return id}ad.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:ad,writable:!0}});const mb=Eu(ad),HA=Hu(mb);function UA(t,e){id=t,Object.setPrototypeOf(t,e.prototype),new e,id=null}const VA=Eu(class{});function jA(t,e){for(let n=0;n<e.length;n++){let r=e[n];if(Boolean(t)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)t?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if(r.localName==="slot")if(t)r.__polymerReplaced__=document.createComment("hidden-slot"),Xe(Xe(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const o=r.__polymerReplaced__;o&&Xe(Xe(o).parentNode).replaceChild(r,o)}else r.style&&(t?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=t,r._showHideChildren&&r._showHideChildren(t)}}class ar extends VA{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let n=[];this.children=n;for(let o=this.root.firstChild;o;o=o.nextSibling)n.push(o),o.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(e&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let r in this.__hostProps)this._setPendingProperty(r,this.__dataHost["_host_"+r]);for(let r in e)this._setPendingProperty(r,e[r])}forwardHostProp(e,n){this._setPendingPropertyOrPath(e,n,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,n,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,n,o=>{o.model=this,r(o)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(e,n,r)}}_showHideChildren(e){jA(e,this.children)}_setUnmanagedPropertyToNode(e,n,r){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&n=="textContent"?e.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(e,n,r)}get parentModel(){let e=this.__parentModel;if(!e){let n;e=this;do e=e.__dataHost.__dataHost;while((n=e.__templatizeOptions)&&!n.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}ar.prototype.__dataHost;ar.prototype.__templatizeOptions;ar.prototype._methodHost;ar.prototype.__templatizeOwner;ar.prototype.__hostProps;const WA=Hu(ar);function up(t){let e=t.__dataHost;return e&&e._methodHost||e}function GA(t,e,n){let r=n.mutableData?WA:ar;ld.mixin&&(r=ld.mixin(r));let o=class extends r{};return o.prototype.__templatizeOptions=n,o.prototype._bindTemplate(t),qA(o,t,e,n),o}function YA(t,e,n,r){let o=n.forwardHostProp;if(o&&e.hasHostProps){const i=t.localName=="template";let a=e.templatizeTemplateClass;if(!a){if(i){let s=n.mutableData?HA:mb;class c extends s{}a=e.templatizeTemplateClass=c}else{const s=t.constructor;class c extends s{}a=e.templatizeTemplateClass=c}let l=e.hostProps;for(let s in l)a.prototype._addPropertyEffect("_host_"+s,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:KA(s,o)}),a.prototype._createNotifyingProperty("_host_"+s);f_&&r&&JA(e,n,r)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),i)UA(t,a),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,a.prototype);const l=e.hostProps;for(let s in l)if(s="_host_"+s,s in t){const c=t[s];delete t[s],t.__data[s]=c}}}}function KA(t,e){return function(r,o,i){e.call(r.__templatizeOwner,o.substring(6),i[o])}}function qA(t,e,n,r){let o=n.hostProps||{};for(let i in r.instanceProps){delete o[i];let a=r.notifyInstanceProp;a&&t.prototype._addPropertyEffect(i,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:QA(i,a)})}if(r.forwardHostProp&&e.__dataHost)for(let i in o)n.hasHostProps||(n.hasHostProps=!0),t.prototype._addPropertyEffect(i,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:XA()})}function QA(t,e){return function(r,o,i){e.call(r.__templatizeOwner,r,o,i[o])}}function XA(){return function(e,n,r){e.__dataHost._setPendingPropertyOrPath("_host_"+n,r[n],!0,!0)}}function ld(t,e,n){if(_l&&!up(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let o=(e?e.constructor:ar)._parseTemplate(t),i=o.templatizeInstanceClass;i||(i=GA(t,o,n),o.templatizeInstanceClass=i);const a=up(t);YA(t,o,n,a);let l=class extends i{};return l.prototype._methodHost=a,l.prototype.__dataHost=t,l.prototype.__templatizeOwner=e,l.prototype.__hostProps=o.hostProps,l=l,l}function JA(t,e,n){const r=n.constructor._properties,{propertyEffects:o}=t,{instanceProps:i}=e;for(let a in o)if(!r[a]&&!(i&&i[a])){const l=o[a];for(let s=0;s<l.length;s++){const{part:c}=l[s].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${a}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hs=[];class gb{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Hs.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Hs.pop()}__onKeyDown(e){if(!!this.__trapNode&&this===Array.from(Hs).pop()&&e.key==="Tab"){e.preventDefault();const n=e.shiftKey;this.__focusNextElement(n)}}__focusNextElement(e=!1){const n=this.__focusableElements,r=e?-1:1,o=this.__focusedElementIndex,i=(n.length+o+r)%n.length,a=n[i];a.focus(),a.localName==="input"&&a.select()}get __focusableElements(){return UC(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(Y_).pop())}}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wn extends Mt(Po(In(st))){static get template(){return gt`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new fn(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),Al&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new gb(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,r=window.innerWidth>e,o=document.documentElement.clientHeight;r&&o>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${o-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.find(n=>n.localName&&n.localName==="template")||this.template}close(e){const n=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(n),n.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._last)return;const n=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(n),this.opened&&!n.defaultPrevented&&this.close(e)}_keydownListener(e){if(!!this._last&&!(this.modeless&&!e.composedPath().includes(this.$.overlay))&&e.key==="Escape"){const n=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(n),this.opened&&!n.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,n){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),ab(this,()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const r=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(r)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):n&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!(getComputedStyle(this).getPropertyValue("display")==="none")&&e&&e!=="none"}_enqueueAnimation(e,n){const r=`__${e}Handler`,o=i=>{i&&i.target!==this||(n(),this.removeEventListener("animationend",o),delete this[r])};this[r]=o,this.addEventListener("animationend",o)}_flushAnimation(e){const n=`__${e}Handler`;typeof this[n]=="function"&&this[n]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const e=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&e){const n=this._getActiveElement();(n===document.body||this._deepContains(n))&&setTimeout(()=>e.focus()),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof wn&&!e.hasAttribute("closing")).sort((e,n)=>e.__zIndex-n.__zIndex||0)}get _last(){return this===wn.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),wn.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=wn.__attachedInstances;let n;for(;(n=e.pop())&&!(n!==this&&(n.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!n.modeless)););}_removeOldContent(){!this.content||!this._contentNodes||(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e){this._removeOldContent(),e._Templatizer||(e._Templatizer=ld(e,this,{forwardHostProp(r,o){this._instance&&this._instance.forwardHostProp(r,o)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const n=e._templateRoot||(e._templateRoot=e.getRootNode());if(n!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let r=Array.from(n.querySelectorAll("style")).reduce((o,i)=>o+i.textContent,"");if(r=r.replace(/:host/g,":host-nomatch"),r){const o=document.createElement("style");o.textContent=r,this.$.content.shadowRoot.appendChild(o),this._contentNodes.unshift(o)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,n,r,o){e!==n?this.template=void 0:r!==o&&(this.renderer=void 0)}_templateOrRendererChanged(e,n,r,o,i){if(e&&n)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,n,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const a=this._oldOwner!==r||this._oldModel!==o;this._oldModel=o,this._oldOwner=r;const l=this._oldTemplate!==e;this._oldTemplate=e;const s=this._oldRenderer!==n;this._oldRenderer=n;const c=this._oldOpened!==i;this._oldOpened=i,s&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),e&&l?this._stampOverlayTemplate(e):n&&(s||c||a)&&i&&this.requestContentUpdate()}_getActiveElement(){let e=document.activeElement||document.body;for(;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let n=e;const r=e.ownerDocument;for(;n&&n!==r&&n!==this;)n=n.parentNode||n.host;return n===this}bringToFront(){let e="";const n=wn.__attachedInstances.filter(r=>r!==this).pop();n&&(e=n.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(wn.is,wn);const ZA=Z`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;he("vaadin-tooltip-overlay",[$u,ZA],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Us={start:"top",end:"bottom"},Vs={start:"left",end:"right"},fp=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(e=>{e.target.__overlay&&e.target.__overlay._updatePosition()})})}),eE=t=>class extends t{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=wA(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(n=>{n.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(n=>{n.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(n,r){if(this.__removeUpdatePositionEventListeners(),r&&(r.__overlay=null,fp.unobserve(r),n&&(this.__addUpdatePositionEventListeners(),r.__overlay=this,fp.observe(r))),n){const o=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(i=>{this.__margins[i]=parseInt(o[i],10)})),this.setAttribute("dir",o.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}get __isRTL(){return this.getAttribute("dir")==="rtl"}__positionSettingsChanged(){this._updatePosition()}__onScroll(n){this.contains(n.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const n=this.positionTarget.getBoundingClientRect(),r=this.__shouldAlignStartVertically(n);this.style.justifyContent=r?"flex-start":"flex-end";const o=this.__shouldAlignStartHorizontally(n,this.__isRTL),i=!this.__isRTL&&o||this.__isRTL&&!o;this.style.alignItems=i?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(n,a,this.noVerticalOverlap,Us,this,r),s=this.__calculatePositionInOneDimension(n,a,this.noHorizontalOverlap,Vs,this,o);Object.assign(this.style,l,s),this.toggleAttribute("bottom-aligned",!r),this.toggleAttribute("top-aligned",r),this.toggleAttribute("end-aligned",!i),this.toggleAttribute("start-aligned",i)}__shouldAlignStartHorizontally(n,r){const o=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const i=Math.min(window.innerWidth,document.documentElement.clientWidth),a=!r&&this.horizontalAlign==="start"||r&&this.horizontalAlign==="end";return this.__shouldAlignStart(n,o,i,this.__margins,a,this.noHorizontalOverlap,Vs)}__shouldAlignStartVertically(n){const r=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const o=Math.min(window.innerHeight,document.documentElement.clientHeight),i=this.verticalAlign==="top";return this.__shouldAlignStart(n,r,o,this.__margins,i,this.noVerticalOverlap,Us)}__shouldAlignStart(n,r,o,i,a,l,s){const c=o-n[l?s.end:s.start]-i[s.end],d=n[l?s.start:s.end]-i[s.start],h=a?c:d,_=h>(a?d:c)||h>r;return a===_}__adjustBottomProperty(n,r,o){let i;if(n===r.end){if(r.end===Us.end){const a=Math.min(window.innerHeight,document.documentElement.clientHeight);if(o>a&&this.__oldViewportHeight){const l=this.__oldViewportHeight-a;i=o-l}this.__oldViewportHeight=a}if(r.end===Vs.end){const a=Math.min(window.innerWidth,document.documentElement.clientWidth);if(o>a&&this.__oldViewportWidth){const l=this.__oldViewportWidth-a;i=o-l}this.__oldViewportWidth=a}}return i}__calculatePositionInOneDimension(n,r,o,i,a,l){const s=l?i.start:i.end,c=l?i.end:i.start,d=parseFloat(a.style[s]||getComputedStyle(a)[s]),h=this.__adjustBottomProperty(s,i,d),u=r[l?i.start:i.end]-n[o===l?i.end:i.start],_=h?`${h}px`:`${d+u*(l?-1:1)}px`;return{[s]:_,[c]:""}}};/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */he("vaadin-tooltip-overlay",Z`
    [part='overlay'] {
      max-width: 40ch;
    }

    :host([position^='top'][top-aligned]) [part='overlay'],
    :host([position^='bottom'][top-aligned]) [part='overlay'] {
      margin-top: var(--vaadin-tooltip-offset-top, 0);
    }

    :host([position^='top'][bottom-aligned]) [part='overlay'],
    :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
      margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
    }

    :host([position^='start'][start-aligned]) [part='overlay'],
    :host([position^='end'][start-aligned]) [part='overlay'] {
      margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
    }

    :host([position^='start'][end-aligned]) [part='overlay'],
    :host([position^='end'][end-aligned]) [part='overlay'] {
      margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
    }
  `,{moduleId:"vaadin-tooltip-overlay-styles"});let Go;class hp extends eE(wn){static get is(){return"vaadin-tooltip-overlay"}static get template(){return Go||(Go=super.template.cloneNode(!0),Go.content.querySelector('[part~="overlay"]').removeAttribute("tabindex"),Go.content.querySelector('[part~="content"]').innerHTML="<slot></slot>"),Go}static get properties(){return{position:{type:String,reflectToAttribute:!0}}}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(n=>{this.style.setProperty(`--vaadin-tooltip-offset-${n}`,e.getPropertyValue(`--vaadin-tooltip-offset-${n}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),n=this.$.overlay.getBoundingClientRect(),r=e.width/2-n.width/2;if(this.style.left){const o=n.left+r;o>0&&(this.style.left=`${o}px`)}if(this.style.right){const o=parseFloat(this.style.right)+r;o>0&&(this.style.right=`${o}px`)}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),n=this.$.overlay.getBoundingClientRect(),r=e.height/2-n.height/2;this.style.top=`${n.top+r}px`}}}}customElements.define(hp.is,hp);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fo=500;let _b=fo,bb=fo,vb=fo;const Ca=new Set;let Yo=!1,Ko=null,qo=null;class tE{constructor(e){this.host=e}open(e={immediate:!1}){const{immediate:n,hover:r,focus:o}=e,i=r&&this.hoverDelay>0,a=o&&this.focusDelay>0;!n&&(i||a)&&!this.__closeTimeout?this.__warmupTooltip(a):this.__showTooltip()}close(e){!e&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),Yo&&(this.__abortCooldown(),this.__scheduleCooldown())}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const e=this.host;return e.focusDelay!=null&&e.focusDelay>0?e.focusDelay:_b}get hoverDelay(){const e=this.host;return e.hoverDelay!=null&&e.hoverDelay>0?e.hoverDelay:bb}get hideDelay(){const e=this.host;return e.hideDelay!=null&&e.hideDelay>0?e.hideDelay:vb}_isOpened(){return this.host[this.openedProp]}_setOpened(e){this.host[this.openedProp]=e}__flushClosingTooltips(){Ca.forEach(e=>{e._stateController.close(!0),Ca.delete(e)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),Yo=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(e){this._isOpened()||(Yo?this.__showTooltip():this.__scheduleWarmUp(e))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){qo&&(clearTimeout(qo),qo=null)}__abortWarmUp(){Ko&&(clearTimeout(Ko),Ko=null)}__scheduleClose(){this._isOpened()&&(Ca.add(this.host),this.__closeTimeout=setTimeout(()=>{Ca.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){qo=setTimeout(()=>{qo=null,Yo=!1},this.hideDelay)}__scheduleWarmUp(e){const n=e?this.focusDelay:this.hoverDelay;Ko=setTimeout(()=>{Ko=null,Yo=!0,this.__showTooltip()},n)}}class pp extends e_(pn(st)){static get is(){return"vaadin-tooltip"}static get template(){return gt`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        id="[[_uniqueId]]"
        role="tooltip"
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>
    `}static get properties(){return{context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},position:{type:String},shouldShow:{type:Object,value:()=>(e,n)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},generator:{type:Object},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged"},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},_overlayElement:Object,__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)"]}static setDefaultFocusDelay(e){_b=e!=null&&e>=0?e:fo}static setDefaultHideDelay(e){vb=e!=null&&e>=0?e:fo}static setDefaultHoverDelay(e){bb=e!=null&&e>=0?e:fo}constructor(){super(),this._uniqueId=`vaadin-tooltip-${W_()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(([e])=>{this.__onTargetVisibilityChange(e.isIntersecting)},{threshold:1}),this._stateController=new tE(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computeOpened(e,n,r,o){return o&&(e?n:r)}__computePosition(e,n){return e||n}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text}__autoOpenedChanged(e,n){e?document.addEventListener("keydown",this.__onKeyDown,!0):n&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(e){if(e){const n=this.getRootNode().getElementById(e);n?this.target=n:console.warn(`No element with id="${e}" found to show tooltip.`)}}__targetChanged(e,n){n&&(n.removeEventListener("mouseenter",this.__onMouseEnter),n.removeEventListener("mouseleave",this.__onMouseLeave),n.removeEventListener("focusin",this.__onFocusin),n.removeEventListener("focusout",this.__onFocusout),n.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(n),Fu(n,"aria-describedby",this._uniqueId)),e&&(e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)}),Mu(e,"aria-describedby",this._uniqueId))}__onFocusin(e){this.manual||!Nu()||this.target.contains(e.relatedTarget)||!this.__isShouldShow()||(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0}))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||!this.__isShouldShow()||this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0}))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const n=this.__isTargetHidden;if(this.__isTargetHidden=!e,n&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,n){this._overlayElement&&(e||n)&&this._overlayElement.requestContentUpdate()}__generatorChanged(e,n,r){e&&((n!==this.__oldTextGenerator||r!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=n,this.__oldContext=r)}}customElements.define(pp.is,pp);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nE=Z`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,yb=document.createElement("template");yb.innerHTML=`<style>${nE.toString().replace(":host","html")}</style>`;document.head.appendChild(yb.content);const wb=document.createElement("style");wb.textContent="html { --vaadin-avatar-size: var(--lumo-size-m); }";document.head.appendChild(wb);he("vaadin-avatar",Z`
    :host {
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xb=document.createElement("template");xb.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(xb.content);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sd extends Ji(pn(Mt(In(st)))){static get template(){return gt`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size, 64px);
          width: var(--vaadin-avatar-size, 64px);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle"></text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},withTooltip:{type:Boolean,value:!1,observer:"__withTooltipChanged"},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean,__tooltipNode:Object}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)","__tooltipChanged(__tooltipNode, name, abbr)"]}ready(){super.ready(),this.__updateVisibility(),this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this._tooltipController=new Xi(this),this.addController(this._tooltipController),!this.name&&!this.abbr&&this.__setTooltip()}__colorIndexChanged(e){if(e!=null){const n=`--vaadin-user-color-${e}`;Boolean(getComputedStyle(document.documentElement).getPropertyValue(n))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${n})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${e} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(e,n,r){this.__updateVisibility(),!(n&&n!==this.__generatedAbbr)&&(r?this.abbr=this.__generatedAbbr=r.split(" ").map(o=>o.charAt(0)).join(""):this.abbr=void 0)}__tooltipChanged(e,n,r){e&&(r&&r!==this.__generatedAbbr?this.__setTooltip(n?`${n} (${r})`:r):this.__setTooltip(n))}__withTooltipChanged(e,n){if(e){const r=document.createElement("vaadin-tooltip");r.setAttribute("slot","tooltip"),this.appendChild(r),this.__tooltipNode=r}else n&&(this.__tooltipNode.target=null,this.__tooltipNode.remove(),this.__tooltipNode=null)}__i18nChanged(e){e.base&&e.base.anonymous&&(this.__oldAnonymous&&this.__tooltipNode&&this.__tooltipNode.text===this.__oldAnonymous&&this.__setTooltip(),this.__oldAnonymous=e.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTooltip(e){const n=this.__tooltipNode;n&&(n.text=e||this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(sd.is,sd);const rE={},oE=mn({elementClass:sd,events:rE,react:Lt,tagName:"vaadin-avatar"});he("vaadin-grid-sorter",Z`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cb=document.createElement("template");Cb.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Cb.content);class mp extends Mt(Po(st)){static get template(){return gt`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"},_shiftClick:{type:Boolean,value:!1}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(e,n){n!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:this._shiftClick},bubbles:!0,composed:!0}))}_getDisplayOrder(e){return e===null?"":e+1}_onClick(e){if(e.defaultPrevented)return;const n=this.getRootNode().activeElement;this!==n&&this.contains(n)||(e.preventDefault(),this._shiftClick=e.shiftKey,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}}customElements.define(mp.is,mp);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cd extends nd{static get is(){return"vaadin-grid-sort-column"}static get properties(){return{path:String,direction:{type:String,notify:!0}}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, direction)"]}constructor(){super(),this.__boundOnDirectionChanged=this.__onDirectionChanged.bind(this)}_defaultHeaderRenderer(e,n){let r=e.firstElementChild;r||(r=document.createElement("vaadin-grid-sorter"),r.addEventListener("direction-changed",this.__boundOnDirectionChanged),e.appendChild(r)),r.path=this.path,r.__rendererDirection=this.direction,r.direction=this.direction,r.textContent=this.__getHeader(this.header,this.path)}_computeHeaderRenderer(){return this._defaultHeaderRenderer}__onDirectionChanged(e){e.detail.value!==e.target.__rendererDirection&&(this.direction=e.detail.value)}__getHeader(e,n){if(e)return e;if(n)return this._generateHeader(n)}}customElements.define(cd.is,cd);const iE={onDirectionChanged:"direction-changed"},aE=mn({elementClass:cd,events:iE,react:Lt,tagName:"vaadin-grid-sort-column"});function lE([t]){return{original:t}}function gp(t){return hb(t,lE)}function sE(t,e){var s;const[n,r]=gp(t.headerRenderer),[o,i]=gp(t.footerRenderer),[a,l]=pb((s=t.renderer)!=null?s:t.children);return qe(aE,{...t,footerRenderer:i,headerRenderer:r,ref:e,renderer:l,children:[n,o,a]})}const Aa=W.exports.forwardRef(sE),cE=Z`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;he("vaadin-vertical-layout",cE,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dd extends pn(Mt(st)){static get template(){return gt`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(dd.is,dd);const dE={},js=mn({elementClass:dd,events:dE,react:Lt,tagName:"vaadin-vertical-layout"}),uE=Z`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;he("vaadin-horizontal-layout",uE,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ud extends pn(Mt(st)){static get template(){return gt`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}customElements.define(ud.is,ud);const fE={},Ws=mn({elementClass:ud,events:fE,react:Lt,tagName:"vaadin-horizontal-layout"});he("vaadin-input-container",Z`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _p extends Mt(Po(st)){static get is(){return"vaadin-input-container"}static get template(){return gt`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(n=>n.focus&&n.focus())})}}customElements.define(_p.is,_p);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ab=Z`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;he("",Ab,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hE=Z`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Eb=Z`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;he("",Eb,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pE=Z`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,Sb=[Eb,Ab,hE,pE];he("",Sb,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */he("vaadin-text-field",Sb,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class mE extends Ir{constructor(e){super(e,"error-message",()=>document.createElement("div"),(n,r)=>{this.__updateErrorId(r),this.__updateHasError()},!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(e){this.errorMessage=e,this.__updateHasError()}setInvalid(e){this.invalid=e,this.__updateHasError()}initCustomNode(e){this.__updateErrorId(e),e.textContent&&!this.errorMessage&&(this.errorMessage=e.textContent.trim()),this.__updateHasError()}teardownNode(e){let n=this.getSlotChild();!n&&e!==this.defaultNode&&(n=this.attachDefaultNode(),this.initNode(n)),this.__updateHasError()}__isNotEmpty(e){return Boolean(e&&e.trim()!=="")}__updateHasError(){const e=this.node,n=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));e&&(e.textContent=n?this.errorMessage:"",e.hidden=!n,n?e.setAttribute("role","alert"):e.removeAttribute("role")),this.host.toggleAttribute("has-error-message",n)}__updateErrorId(e){e.id||(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gE{constructor(e){this.host=e,this.__required=!1}setTarget(e){this.__target=e,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(e){this.__setAriaRequiredAttribute(e),this.__required=e}setLabelId(e){this.__setLabelIdToAriaAttribute(e,this.__labelId),this.__labelId=e}setErrorId(e){this.__setErrorIdToAriaAttribute(e,this.__errorId),this.__errorId=e}setHelperId(e){this.__setHelperIdToAriaAttribute(e,this.__helperId),this.__helperId=e}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(e,n){this.__setAriaAttributeId("aria-labelledby",e,n)}__setErrorIdToAriaAttribute(e,n){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",e,n):this.__setAriaAttributeId("aria-describedby",e,n)}__setHelperIdToAriaAttribute(e,n){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",e,n):this.__setAriaAttributeId("aria-describedby",e,n)}__setAriaRequiredAttribute(e){!this.__target||["input","textarea"].includes(this.__target.localName)||(e?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(e,n,r){!this.__target||(r&&Fu(this.__target,e,r),n&&Mu(this.__target,e,n))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _E extends Ir{constructor(e){super(e,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(e){this.__updateHelperId(e),this.__observeHelper(e);const n=this.__hasHelper(e);this.__toggleHasHelper(n)}teardownNode(e){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const n=this.getSlotChild();if(n&&n!==this.defaultNode){const r=this.__hasHelper(n);this.__toggleHasHelper(r)}else this.__applyDefaultHelper(this.helperText,n)}setHelperText(e){this.helperText=e;const n=this.getSlotChild();(!n||n===this.defaultNode)&&this.__applyDefaultHelper(e,n)}__hasHelper(e){return e?e.children.length>0||e.nodeType===Node.ELEMENT_NODE&&customElements.get(e.localName)||this.__isNotEmpty(e.textContent):!1}__isNotEmpty(e){return e&&e.trim()!==""}__applyDefaultHelper(e,n){const r=this.__isNotEmpty(e);r&&!n&&(this.slotFactory=()=>document.createElement("div"),n=this.attachDefaultNode(),this.__updateHelperId(n),this.__observeHelper(n)),n&&(n.textContent=e),this.__toggleHasHelper(r)}__observeHelper(e){this.__helperObserver=new MutationObserver(n=>{n.forEach(r=>{const o=r.target,i=o===this.node;if(r.type==="attributes")i&&o.id!==this.defaultId&&this.__updateHelperId(o);else if(i||o.parentElement===this.node){const a=this.__hasHelper(this.node);this.__toggleHasHelper(a)}})}),this.__helperObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(e){this.host.toggleAttribute("has-helper",e),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:e,node:this.node}}))}__updateHelperId(e){e.id||(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kb=Ie(t=>class extends t{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const n=this.checkValidity();return this._setInvalid(!n),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:n}})),n}checkValidity(){return!this.required||!!this.value}_setInvalid(n){this._shouldSetInvalid(n)&&(this.invalid=n)}_shouldSetInvalid(n){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bE=t=>class extends kb(J_(In(t))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new gE(this),this._helperController=new _E(this),this._errorController=new mE(this),this._labelController.addEventListener("label-changed",n=>{const{hasLabel:r,node:o}=n.detail;this.__labelChanged(r,o)}),this._helperController.addEventListener("helper-changed",n=>{const{hasHelper:r,node:o}=n.detail;this.__helperChanged(r,o)})}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(n,r){n?this._fieldAriaController.setHelperId(r.id):this._fieldAriaController.setHelperId(null)}__labelChanged(n,r){n?this._fieldAriaController.setLabelId(r.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(n){this._errorController.setErrorMessage(n)}_helperTextChanged(n){this._helperController.setHelperText(n)}_ariaTargetChanged(n){n&&this._fieldAriaController.setTarget(n)}_requiredChanged(n){this._fieldAriaController.setRequired(n)}_invalidChanged(n){this._errorController.setInvalid(n),setTimeout(()=>{n?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tb=Ie(t=>class extends K_(kb(q_(t))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(n=>this[n]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(n){return n.some(r=>this.__isValidConstraint(r))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(n,...r){if(!n)return;const o=this._hasValidConstraints(r),i=this.__previousHasConstraints&&!o;(this._hasValue||this.invalid)&&o?this.validate():i&&this._setInvalid(!1),this.__previousHasConstraints=o}_onChange(n){n.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:n},bubbles:n.bubbles,cancelable:n.cancelable}))}__isValidConstraint(n){return Boolean(n)||n===0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gs=new WeakMap;function vE(t){return Gs.has(t)||Gs.set(t,new Set),Gs.get(t)}function yE(t,e){const n=document.createElement("style");n.textContent=t,e===document?document.head.appendChild(n):e.insertBefore(n,e.firstChild)}const wE=Ie(t=>class extends t{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const n=this.getRootNode(),r=vE(n);this.slotStyles.forEach(o=>{r.has(o)||(yE(o,n),r.add(o))})}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xE=t=>class extends wE(Q_(Tb(bE(B_(t))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",n=>this._onClearButtonClick(n))}_onClearButtonClick(n){n.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(n){super._onFocus(n),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(n){super._onEscape(n),this.clearButtonVisible&&!!this.value&&(n.stopPropagation(),this.__clear())}_onChange(n){n.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:n},bubbles:n.bubbles,cancelable:n.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(n){super._addInputListeners(n),n.addEventListener("paste",this._boundOnPaste),n.addEventListener("drop",this._boundOnDrop),n.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(n){super._removeInputListeners(n),n.removeEventListener("paste",this._boundOnPaste),n.removeEventListener("drop",this._boundOnDrop),n.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(n){super._onKeyDown(n),this.allowedCharPattern&&!this.__shouldAcceptKey(n)&&(n.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=De.debounce(this._preventInputDebouncer,nr.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(n){return n.metaKey||n.ctrlKey||!n.key||n.key.length!==1||this.__allowedCharRegExp.test(n.key)}_onPaste(n){if(this.allowedCharPattern){const r=n.clipboardData.getData("text");this.__allowedTextRegExp.test(r)||(n.preventDefault(),this._markInputPrevented())}}_onDrop(n){if(this.allowedCharPattern){const r=n.dataTransfer.getData("text");this.__allowedTextRegExp.test(r)||(n.preventDefault(),this._markInputPrevented())}}_onBeforeInput(n){this.allowedCharPattern&&n.data&&!this.__allowedTextRegExp.test(n.data)&&(n.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(n){if(n)try{this.__allowedCharRegExp=new RegExp(`^${n}$`),this.__allowedTextRegExp=new RegExp(`^${n}*$`)}catch(r){console.error(r)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const CE=t=>class extends xE(t){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(n){super._inputElementChanged(n),n&&(n.value&&n.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),n.value=""),this.value&&(n.value=this.value))}get __data(){return this.__dataValue||{}}set __data(n){this.__dataValue=n}_setFocused(n){super._setFocused(n),n||this.validate()}_onInput(n){super._onInput(n),this.invalid&&this.validate()}_valueChanged(n,r){super._valueChanged(n,r),r!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const AE=t=>class extends Tb(t){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const n=this.inputElement;n&&n.value.length>0&&!this.checkValidity()&&(n.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=De.debounce(this._inputDebouncer,nr.after(200),()=>{this.removeAttribute("input-prevented")}))}}_onInput(n){this._checkInputValue(),super._onInput(n)}_preventInvalidInputChanged(n){n&&console.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const EE=Z`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const SE=Z`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kE=Z`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const TE=[SE,kE,EE];/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */he("vaadin-text-field",TE,{moduleId:"vaadin-text-field-styles"});class fd extends AE(CE(Mt(pn(st)))){static get is(){return"vaadin-text-field"}static get template(){return gt`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new X_(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Z_(this.inputElement,this._labelController)),this._tooltipController=new Xi(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(fd.is,fd);const PE={onValidated:"validated",onChange:"change",onInput:"input",onValueChanged:"value-changed",onInvalidChanged:"invalid-changed"},Dr=mn({elementClass:fd,events:PE,react:Lt,tagName:"vaadin-text-field"});function bp(){W.exports.useState(Array);const[t,e]=W.exports.useState({violators:[],lastUpdated:"1970-1-1",monitoringStartDate:"1970-1-1"}),[n,r]=W.exports.useState(Array);return W.exports.useEffect(()=>((async()=>{let o=await Oh();e(o),setInterval(async()=>{r([]),e(await Oh())},6e4)})(),()=>{}),[]),qe(js,{children:[qe(BA,{items:t.violators,theme:"wrap-cell-content row-stripes","all-rows-visible":!0,detailsOpenedItems:n,onActiveItemChanged:({detail:{value:o}})=>r([o]),rowDetailsRenderer:({item:o})=>qe(js,{theme:"spacing",children:[j("h4",{children:"Drone details:"}),qe(Ws,{theme:"spacing",children:[j(Dr,{label:"PositionX",value:o.drone.positionX,readonly:!0}),j(Dr,{label:"PositionY",value:o.drone.positionY,readonly:!0}),j(Dr,{label:"Altitude",value:o.drone.altitude,readonly:!0})]}),qe(Ws,{theme:"spacing",children:[j(Dr,{label:"Model",value:o.drone.model,readonly:!0}),j(Dr,{label:"Manufacturer",value:o.drone.manufacturer,readonly:!0}),j(Dr,{label:"Mac",value:o.drone.mac,readonly:!0})]}),qe("p",{children:["Last seen: ",(o.interval/6e4).toFixed(0)," minutes ago"]})]}),children:[j(Aa,{path:"name","flex-grow":"1.5","auto-width":!0,renderer:({item:o})=>qe(Ws,{theme:"spacing",children:[j(oE,{name:o.name,colorIndex:o.phone.slice(-1)%6}),qe(js,{children:[j("span",{className:"bold",children:o.name}),j("span",{className:"email",children:o.email})]})]})}),j(Aa,{path:"phone","flex-grow":"0.5"}),j(Aa,{path:"distance","flex-grow":"0.5",header:"Closest confirmed distance",renderer:({item:o})=>qe("span",{children:[(o.distance/1e3).toFixed(2)," m"]})}),j(Aa,{path:"time",header:"Last seen",renderer:({item:o})=>j("span",{children:Ys(o.time)})})]}),qe("div",{className:"lastUpdated",children:[qe("small",{children:["Monitoring started time: ",j("span",{className:"bold",children:Ys(t.monitoringStartDate)})," Last updated: ",j("span",{className:"bold",children:Ys(t.lastUpdated)})]}),j("br",{}),j("small",{children:"*The list will be automatically renewed every one minute. Please click to see violator details in the list."})]})]})}function Ys(t){return new Date(t).toLocaleString(navigator.language)}he("vaadin-app-layout",Z`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});const Pb=document.createElement("template");Pb.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(Pb.content);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ob(){if(Al){const t=window.innerHeight,n=window.innerWidth>t,r=document.documentElement.clientHeight;n&&r>t?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${r-t}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}Ob();window.addEventListener("resize",Ob);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hd extends pn(Mt(In(st))){static get template(){return gt`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new gb(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),ib(this,this._afterFirstRender),this._updateTouchOptimizedMode();const e=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new fn(e,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new fn(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new fn(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}__primarySectionChanged(e){["navbar","drawer"].includes(e)||this.set("primarySection","navbar")}__drawerOpenedChanged(e,n){this.overlay&&(e?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):n&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(e){e.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const e=this.querySelector("vaadin-drawer-toggle");e&&e.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const e=this.querySelectorAll("[slot=drawer]").length,n=this.$.drawer;e===0?n.setAttribute("hidden",""):n.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const n=this.$.navbarTop.getBoundingClientRect(),o=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${n.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${o.height}px`);const a=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${a.width}px`)}_updateDrawerHeight(){const{scrollHeight:e,offsetHeight:n}=this.$.drawer,r=e>n?`${e}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",r)}_updateOverlayMode(){const e=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&e&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(e),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const e=this.$.drawer;this.overlay?(e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",this.i18n.drawer)):(e.removeAttribute("role"),e.removeAttribute("aria-modal"),e.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(e=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){e();return}this.$.drawer.addEventListener("transitionend",e,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const e=this.querySelector("vaadin-drawer-toggle");e&&(e.focus(),e.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(e){e.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(e,n){n&&window.removeEventListener(n,this.__closeOverlayDrawerListener),e&&window.addEventListener(e,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(e){e.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(e){return(getComputedStyle(this).getPropertyValue(e)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const e=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",n=this.querySelectorAll('[slot*="navbar"]');n.length>0&&Array.from(n).forEach(r=>{r.getAttribute("slot").indexOf("touch-optimized")>-1&&(r.__touchOptimized=!0),e&&r.__touchOptimized?r.setAttribute("slot","navbar-bottom"):r.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),e?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),ab(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(hd.is,hd);const OE={onPrimarySectionChanged:"primary-section-changed",onDrawerOpenedChanged:"drawer-opened-changed",onOverlayChanged:"overlay-changed"},LE=mn({elementClass:hd,events:OE,react:Lt,tagName:"vaadin-app-layout"}),Lb=Z`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;he("vaadin-button",Lb,{moduleId:"lumo-button"});const IE=Z`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }
`;he("vaadin-drawer-toggle",[Lb,IE],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zE=t=>class extends Iu(Du(Ji(t))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(n){super._onKeyDown(n),this._activeKeys.includes(n.key)&&(n.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pd extends zE(pn(Mt(In(st)))){static get is(){return"vaadin-button"}static get template(){return gt`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Xi(this),this.addController(this._tooltipController)}}customElements.define(pd.is,pd);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class md extends pd{static get template(){return gt`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          outline: none;
          height: 24px;
          width: 24px;
          padding: 4px;
        }

        [part='icon'],
        [part='icon']::after,
        [part='icon']::before {
          position: absolute;
          top: 8px;
          height: 3px;
          width: 24px;
          background-color: #000;
        }

        [part='icon']::after,
        [part='icon']::before {
          content: '';
        }

        [part='icon']::after {
          top: 6px;
        }

        [part='icon']::before {
          top: 12px;
        }
      </style>
      <slot id="slot">
        <div part="icon"></div>
      </slot>
      <div part="icon" hidden$="[[!_showFallbackIcon]]"></div>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0},_showFallbackIcon:{type:Boolean,value:!1}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}ready(){super.ready(),this._observer=new fn(this,()=>{this._toggleFallbackIcon()})}_toggleFallbackIcon(){const e=this.$.slot.assignedNodes();this._showFallbackIcon=e.length>0&&e.every(n=>xA(n))}}customElements.define(md.is,md);const RE={},NE=mn({elementClass:md,events:RE,react:Lt,tagName:"vaadin-drawer-toggle"}),DE=Z`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon),
  :host ::slotted(iron-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;he("vaadin-item",DE,{moduleId:"lumo-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ME=t=>class extends Iu(Ji(t)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(n){this._value=n}ready(){super.ready();const n=this.getAttribute("value");n!==null&&(this.value=n)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(n){return!this.disabled&&!(n.type==="keydown"&&n.defaultPrevented)}_selectedChanged(n){this.setAttribute("aria-selected",n)}_disabledChanged(n){super._disabledChanged(n),n&&(this.selected=!1,this.blur())}_onKeyDown(n){super._onKeyDown(n),this._activeKeys.includes(n.key)&&!n.defaultPrevented&&(n.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gd extends ME(Mt(Po(st))){static get template(){return gt`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}constructor(){super(),this.value}}customElements.define(gd.is,gd);const FE={},$E=mn({elementClass:gd,events:FE,react:Lt,tagName:"vaadin-item"}),BE=Z`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }
`;he("vaadin-scroller",BE,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class HE{constructor(e,n){this.host=e,this.scrollTarget=n||e,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=De.debounce(this.__debounceOverflow,Co,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(this.host),this.__childObserver=new fn(this.host,e=>{e.addedNodes.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(n)}),e.removedNodes.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(n)}),this.__updateOverflow()}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const e=this.scrollTarget;let n="";e.scrollTop>0&&(n+=" top"),Math.ceil(e.scrollTop)<Math.ceil(e.scrollHeight-e.clientHeight)&&(n+=" bottom");const r=Math.abs(e.scrollLeft);r>0&&(n+=" start"),Math.ceil(r)<Math.ceil(e.scrollWidth-e.clientWidth)&&(n+=" end"),n=n.trim(),n.length>0&&this.host.getAttribute("overflow")!==n?this.host.setAttribute("overflow",n):n.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _d extends Ji(pn(In(Mt(st)))){static get template(){return gt`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}ready(){super.ready(),this.__overflowController=new HE(this),this.addController(this.__overflowController)}_shouldSetFocus(e){return e.target===this}}customElements.define(_d.is,_d);const UE={},VE=mn({elementClass:_d,events:UE,react:Lt,tagName:"vaadin-scroller"}),jE="_navlink_1lnhd_59",WE="_lastUpdated_1lnhd_69",GE="_copyright_1lnhd_72",vp={navlink:jE,lastUpdated:WE,copyright:GE},yp={"/violators":{icon:"la la-list",title:"Violators"},"/about":{icon:"la la-file",title:"About"}};function YE(){var n,r;const{pathname:t}=To(),e=(r=(n=yp[t])==null?void 0:n.title)!=null?r:"Violators";return qe(LE,{className:"block h-full",primarySection:"drawer",children:[j("header",{slot:"drawer",children:j("h1",{className:"text-l m-0",children:"BIRDNEST"})}),j(VE,{slot:"drawer","scroll-direction":"vertical",children:j("nav",{children:Object.entries(yp).map(([o,{icon:i,title:a}])=>j($E,{children:qe(Rw,{className:vp.navlink,to:o,children:[j("span",{className:`${i} nav-item-icon`,slot:"prefix","aria-hidden":"true"}),a]},o)},o))})}),j("footer",{slot:"drawer"}),j(NE,{slot:"navbar","aria-label":"Menu toggle"}),j("h2",{slot:"navbar",className:"text-l m-0",children:e}),j(xw,{}),j("div",{className:vp.copyright,children:j("small",{children:"\xA9 itkimura 2022"})})]})}const KE=W.exports.lazy(async()=>Fw(()=>import("./AboutView.9366f194.js"),[],import.meta.url)),qE=Ow([{element:j(YE,{}),children:[{path:"/",element:j(bp,{})},{path:"/violators",element:j(bp,{})},{path:"/about",element:j(W.exports.Suspense,{fallback:j("div",{children:"Loading..."}),children:j(KE,{})})}]}]);Og(document.getElementById("outlet")).render(W.exports.createElement(ww,{router:qE}));(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),n=new WeakMap,r=typeof DOMException=="object"?Error:DOMException,o=Object.defineProperty,i=Array.prototype.forEach,a=/@import.+?;?$/gm;function l(S){var N=S.replace(a,"");return N!==S&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),N.trim()}function s(S){return"isConnected"in S?S.isConnected:document.contains(S)}function c(S){return S.filter(function(N,Q){return S.indexOf(N)===Q})}function d(S,N){return S.filter(function(Q){return N.indexOf(Q)===-1})}function h(S){S.parentNode.removeChild(S)}function u(S){return S.shadowRoot||n.get(S)}var _=["addRule","deleteRule","insertRule","removeRule"],v=CSSStyleSheet,y=v.prototype;y.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},y.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function P(S){return typeof S=="object"?We.isPrototypeOf(S)||y.isPrototypeOf(S):!1}function g(S){return typeof S=="object"?y.isPrototypeOf(S):!1}var m=new WeakMap,b=new WeakMap,C=new WeakMap,E=new WeakMap;function O(S,N){var Q=document.createElement("style");return C.get(S).set(N,Q),b.get(S).push(N),Q}function F(S,N){return C.get(S).get(N)}function H(S,N){C.get(S).delete(N),b.set(S,b.get(S).filter(function(Q){return Q!==N}))}function ne(S,N){requestAnimationFrame(function(){N.textContent=m.get(S).textContent,E.get(S).forEach(function(Q){return N.sheet[Q.method].apply(N.sheet,Q.args)})})}function $(S){if(!m.has(S))throw new TypeError("Illegal invocation")}function Me(){var S=this,N=document.createElement("style");e.body.appendChild(N),m.set(S,N),b.set(S,[]),C.set(S,new WeakMap),E.set(S,[])}var We=Me.prototype;We.replace=function(N){try{return this.replaceSync(N),Promise.resolve(this)}catch(Q){return Promise.reject(Q)}},We.replaceSync=function(N){if($(this),typeof N=="string"){var Q=this;m.get(Q).textContent=l(N),E.set(Q,[]),b.get(Q).forEach(function(be){be.isConnected()&&ne(Q,F(Q,be))})}},o(We,"cssRules",{configurable:!0,enumerable:!0,get:function(){return $(this),m.get(this).sheet.cssRules}}),o(We,"media",{configurable:!0,enumerable:!0,get:function(){return $(this),m.get(this).sheet.media}}),_.forEach(function(S){We[S]=function(){var N=this;$(N);var Q=arguments;E.get(N).push({method:S,args:Q}),b.get(N).forEach(function(xe){if(xe.isConnected()){var pe=F(N,xe).sheet;pe[S].apply(pe,Q)}});var be=m.get(N).sheet;return be[S].apply(be,Q)}}),o(Me,Symbol.hasInstance,{configurable:!0,value:P});var Ft={childList:!0,subtree:!0},Pe=new WeakMap;function Oe(S){var N=Pe.get(S);return N||(N=new et(S),Pe.set(S,N)),N}function nn(S){o(S.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return Oe(this).sheets},set:function(N){Oe(this).update(N)}})}function Gt(S,N){for(var Q=document.createNodeIterator(S,NodeFilter.SHOW_ELEMENT,function(xe){return u(xe)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),be=void 0;be=Q.nextNode();)N(u(be))}var L=new WeakMap,Y=new WeakMap,q=new WeakMap;function ue(S,N){return N instanceof HTMLStyleElement&&Y.get(S).some(function(Q){return F(Q,S)})}function _e(S){var N=L.get(S);return N instanceof Document?N.body:N}function _t(S){var N=document.createDocumentFragment(),Q=Y.get(S),be=q.get(S),xe=_e(S);be.disconnect(),Q.forEach(function(pe){N.appendChild(F(pe,S)||O(pe,S))}),xe.insertBefore(N,null),be.observe(xe,Ft),Q.forEach(function(pe){ne(pe,F(pe,S))})}function et(S){var N=this;N.sheets=[],L.set(N,S),Y.set(N,[]),q.set(N,new MutationObserver(function(Q,be){if(!document){be.disconnect();return}Q.forEach(function(xe){t||i.call(xe.addedNodes,function(pe){pe instanceof Element&&Gt(pe,function($t){Oe($t).connect()})}),i.call(xe.removedNodes,function(pe){pe instanceof Element&&(ue(N,pe)&&_t(N),t||Gt(pe,function($t){Oe($t).disconnect()}))})})}))}if(et.prototype={isConnected:function(){var S=L.get(this);return S instanceof Document?S.readyState!=="loading":s(S.host)},connect:function(){var S=_e(this);q.get(this).observe(S,Ft),Y.get(this).length>0&&_t(this),Gt(S,function(N){Oe(N).connect()})},disconnect:function(){q.get(this).disconnect()},update:function(S){var N=this,Q=L.get(N)===document?"Document":"ShadowRoot";if(!Array.isArray(S))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+Q+": Iterator getter is not callable.");if(!S.every(P))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+Q+": Failed to convert value to 'CSSStyleSheet'");if(S.some(g))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+Q+": Can't adopt non-constructed stylesheets");N.sheets=S;var be=Y.get(N),xe=c(S),pe=d(be,xe);pe.forEach(function($t){h(F($t,N)),H($t,N)}),Y.set(N,xe),N.isConnected()&&xe.length>0&&_t(N)}},window.CSSStyleSheet=Me,nn(Document),"ShadowRoot"in window){nn(ShadowRoot);var ct=Element.prototype,Se=ct.attachShadow;ct.attachShadow=function(N){var Q=Se.call(this,N);return N.mode==="closed"&&n.set(this,Q),Q}}var dt=Oe(document);dt.isConnected()?dt.connect():document.addEventListener("DOMContentLoaded",dt.connect.bind(dt))})();const{toString:QE}=Object.prototype;function XE(t){return QE.call(t)==="[object RegExp]"}function JE(t,{preserve:e=!0,whitespace:n=!0,all:r}={}){if(r)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let o=e,i;typeof e=="function"?(o=!1,i=e):XE(e)&&(o=!1,i=d=>e.test(d));let a=!1,l="",s="",c="";for(let d=0;d<t.length;d++){if(l=t[d],t[d-1]!=="\\"&&(l==='"'||l==="'")&&(a===l?a=!1:a||(a=l)),!a&&l==="/"&&t[d+1]==="*"){const h=t[d+2]==="!";let u=d+2;for(;u<t.length;u++){if(t[u]==="*"&&t[u+1]==="/"){o&&h||i&&i(s)?c+=`/*${s}*/`:n||(t[u+2]===`
`?u++:t[u+2]+t[u+3]===`\r
`&&(u+=2)),s="";break}s+=t[u]}d=u+1;continue}c+=l}return c}const ZE='.la,.lab,.lad,.lal,.lar,.las{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.la-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.la-xs{font-size:.75em}.la-sm{font-size:.875em}.la-1x{font-size:1em}.la-2x{font-size:2em}.la-3x{font-size:3em}.la-4x{font-size:4em}.la-5x{font-size:5em}.la-6x{font-size:6em}.la-7x{font-size:7em}.la-8x{font-size:8em}.la-9x{font-size:9em}.la-10x{font-size:10em}.la-fw{text-align:center;width:1.25em}.la-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.la-ul>li{position:relative}.la-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.la-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.la-pull-left{float:left}.la-pull-right{float:right}.la.la-pull-left,.lab.la-pull-left,.lal.la-pull-left,.lar.la-pull-left,.las.la-pull-left{margin-right:.3em}.la.la-pull-right,.lab.la-pull-right,.lal.la-pull-right,.lar.la-pull-right,.las.la-pull-right{margin-left:.3em}.la-spin{-webkit-animation:la-spin 2s infinite linear;animation:la-spin 2s infinite linear}.la-pulse{-webkit-animation:la-spin 1s infinite steps(8);animation:la-spin 1s infinite steps(8)}@-webkit-keyframes la-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes la-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.la-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.la-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.la-flip-horizontal{-webkit-transform:scale(-1,1);transform:scaleX(-1)}.la-flip-vertical{-webkit-transform:scale(1,-1);transform:scaleY(-1)}.la-flip-both,.la-flip-horizontal.la-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1)}:root .la-flip-both,:root .la-flip-horizontal,:root .la-flip-vertical,:root .la-rotate-180,:root .la-rotate-270,:root .la-rotate-90{-webkit-filter:none;filter:none}.la-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.la-stack-1x,.la-stack-2x{left:0;position:absolute;text-align:center;width:100%}.la-stack-1x{line-height:inherit}.la-stack-2x{font-size:2em}.la-inverse{color:#fff}.la-500px:before{content:"\\f26e"}.la-accessible-icon:before{content:"\\f368"}.la-accusoft:before{content:"\\f369"}.la-acquisitions-incorporated:before{content:"\\f6af"}.la-ad:before{content:"\\f641"}.la-address-book:before{content:"\\f2b9"}.la-address-card:before{content:"\\f2bb"}.la-adjust:before{content:"\\f042"}.la-adn:before{content:"\\f170"}.la-adobe:before{content:"\\f778"}.la-adversal:before{content:"\\f36a"}.la-affiliatetheme:before{content:"\\f36b"}.la-air-freshener:before{content:"\\f5d0"}.la-airbnb:before{content:"\\f834"}.la-algolia:before{content:"\\f36c"}.la-align-center:before{content:"\\f037"}.la-align-justify:before{content:"\\f039"}.la-align-left:before{content:"\\f036"}.la-align-right:before{content:"\\f038"}.la-alipay:before{content:"\\f642"}.la-allergies:before{content:"\\f461"}.la-amazon:before{content:"\\f270"}.la-amazon-pay:before{content:"\\f42c"}.la-ambulance:before{content:"\\f0f9"}.la-american-sign-language-interpreting:before{content:"\\f2a3"}.la-amilia:before{content:"\\f36d"}.la-anchor:before{content:"\\f13d"}.la-android:before{content:"\\f17b"}.la-angellist:before{content:"\\f209"}.la-angle-double-down:before{content:"\\f103"}.la-angle-double-left:before{content:"\\f100"}.la-angle-double-right:before{content:"\\f101"}.la-angle-double-up:before{content:"\\f102"}.la-angle-down:before{content:"\\f107"}.la-angle-left:before{content:"\\f104"}.la-angle-right:before{content:"\\f105"}.la-angle-up:before{content:"\\f106"}.la-angry:before{content:"\\f556"}.la-angrycreative:before{content:"\\f36e"}.la-angular:before{content:"\\f420"}.la-ankh:before{content:"\\f644"}.la-app-store:before{content:"\\f36f"}.la-app-store-ios:before{content:"\\f370"}.la-apper:before{content:"\\f371"}.la-apple:before{content:"\\f179"}.la-apple-alt:before{content:"\\f5d1"}.la-apple-pay:before{content:"\\f415"}.la-archive:before{content:"\\f187"}.la-archway:before{content:"\\f557"}.la-arrow-alt-circle-down:before{content:"\\f358"}.la-arrow-alt-circle-left:before{content:"\\f359"}.la-arrow-alt-circle-right:before{content:"\\f35a"}.la-arrow-alt-circle-up:before{content:"\\f35b"}.la-arrow-circle-down:before{content:"\\f0ab"}.la-arrow-circle-left:before{content:"\\f0a8"}.la-arrow-circle-right:before{content:"\\f0a9"}.la-arrow-circle-up:before{content:"\\f0aa"}.la-arrow-down:before{content:"\\f063"}.la-arrow-left:before{content:"\\f060"}.la-arrow-right:before{content:"\\f061"}.la-arrow-up:before{content:"\\f062"}.la-arrows-alt:before{content:"\\f0b2"}.la-arrows-alt-h:before{content:"\\f337"}.la-arrows-alt-v:before{content:"\\f338"}.la-artstation:before{content:"\\f77a"}.la-assistive-listening-systems:before{content:"\\f2a2"}.la-asterisk:before{content:"\\f069"}.la-asymmetrik:before{content:"\\f372"}.la-at:before{content:"\\f1fa"}.la-atlas:before{content:"\\f558"}.la-atlassian:before{content:"\\f77b"}.la-atom:before{content:"\\f5d2"}.la-audible:before{content:"\\f373"}.la-audio-description:before{content:"\\f29e"}.la-autoprefixer:before{content:"\\f41c"}.la-avianex:before{content:"\\f374"}.la-aviato:before{content:"\\f421"}.la-award:before{content:"\\f559"}.la-aws:before{content:"\\f375"}.la-baby:before{content:"\\f77c"}.la-baby-carriage:before{content:"\\f77d"}.la-backspace:before{content:"\\f55a"}.la-backward:before{content:"\\f04a"}.la-bacon:before{content:"\\f7e5"}.la-balance-scale:before{content:"\\f24e"}.la-balance-scale-left:before{content:"\\f515"}.la-balance-scale-right:before{content:"\\f516"}.la-ban:before{content:"\\f05e"}.la-band-aid:before{content:"\\f462"}.la-bandcamp:before{content:"\\f2d5"}.la-barcode:before{content:"\\f02a"}.la-bars:before{content:"\\f0c9"}.la-baseball-ball:before{content:"\\f433"}.la-basketball-ball:before{content:"\\f434"}.la-bath:before{content:"\\f2cd"}.la-battery-empty:before{content:"\\f244"}.la-battery-full:before{content:"\\f240"}.la-battery-half:before{content:"\\f242"}.la-battery-quarter:before{content:"\\f243"}.la-battery-three-quarters:before{content:"\\f241"}.la-battle-net:before{content:"\\f835"}.la-bed:before{content:"\\f236"}.la-beer:before{content:"\\f0fc"}.la-behance:before{content:"\\f1b4"}.la-behance-square:before{content:"\\f1b5"}.la-bell:before{content:"\\f0f3"}.la-bell-slash:before{content:"\\f1f6"}.la-bezier-curve:before{content:"\\f55b"}.la-bible:before{content:"\\f647"}.la-bicycle:before{content:"\\f206"}.la-biking:before{content:"\\f84a"}.la-bimobject:before{content:"\\f378"}.la-binoculars:before{content:"\\f1e5"}.la-biohazard:before{content:"\\f780"}.la-birthday-cake:before{content:"\\f1fd"}.la-bitbucket:before{content:"\\f171"}.la-bitcoin:before{content:"\\f379"}.la-bity:before{content:"\\f37a"}.la-black-tie:before{content:"\\f27e"}.la-blackberry:before{content:"\\f37b"}.la-blender:before{content:"\\f517"}.la-blender-phone:before{content:"\\f6b6"}.la-blind:before{content:"\\f29d"}.la-blog:before{content:"\\f781"}.la-blogger:before{content:"\\f37c"}.la-blogger-b:before{content:"\\f37d"}.la-bluetooth:before{content:"\\f293"}.la-bluetooth-b:before{content:"\\f294"}.la-bold:before{content:"\\f032"}.la-bolt:before{content:"\\f0e7"}.la-bomb:before{content:"\\f1e2"}.la-bone:before{content:"\\f5d7"}.la-bong:before{content:"\\f55c"}.la-book:before{content:"\\f02d"}.la-book-dead:before{content:"\\f6b7"}.la-book-medical:before{content:"\\f7e6"}.la-book-open:before{content:"\\f518"}.la-book-reader:before{content:"\\f5da"}.la-bookmark:before{content:"\\f02e"}.la-bootstrap:before{content:"\\f836"}.la-border-all:before{content:"\\f84c"}.la-border-none:before{content:"\\f850"}.la-border-style:before{content:"\\f853"}.la-bowling-ball:before{content:"\\f436"}.la-box:before{content:"\\f466"}.la-box-open:before{content:"\\f49e"}.la-boxes:before{content:"\\f468"}.la-braille:before{content:"\\f2a1"}.la-brain:before{content:"\\f5dc"}.la-bread-slice:before{content:"\\f7ec"}.la-briefcase:before{content:"\\f0b1"}.la-briefcase-medical:before{content:"\\f469"}.la-broadcast-tower:before{content:"\\f519"}.la-broom:before{content:"\\f51a"}.la-brush:before{content:"\\f55d"}.la-btc:before{content:"\\f15a"}.la-buffer:before{content:"\\f837"}.la-bug:before{content:"\\f188"}.la-building:before{content:"\\f1ad"}.la-bullhorn:before{content:"\\f0a1"}.la-bullseye:before{content:"\\f140"}.la-burn:before{content:"\\f46a"}.la-buromobelexperte:before{content:"\\f37f"}.la-bus:before{content:"\\f207"}.la-bus-alt:before{content:"\\f55e"}.la-business-time:before{content:"\\f64a"}.la-buy-n-large:before{content:"\\f8a6"}.la-buysellads:before{content:"\\f20d"}.la-calculator:before{content:"\\f1ec"}.la-calendar:before{content:"\\f133"}.la-calendar-alt:before{content:"\\f073"}.la-calendar-check:before{content:"\\f274"}.la-calendar-day:before{content:"\\f783"}.la-calendar-minus:before{content:"\\f272"}.la-calendar-plus:before{content:"\\f271"}.la-calendar-times:before{content:"\\f273"}.la-calendar-week:before{content:"\\f784"}.la-camera:before{content:"\\f030"}.la-camera-retro:before{content:"\\f083"}.la-campground:before{content:"\\f6bb"}.la-canadian-maple-leaf:before{content:"\\f785"}.la-candy-cane:before{content:"\\f786"}.la-cannabis:before{content:"\\f55f"}.la-capsules:before{content:"\\f46b"}.la-car:before{content:"\\f1b9"}.la-car-alt:before{content:"\\f5de"}.la-car-battery:before{content:"\\f5df"}.la-car-crash:before{content:"\\f5e1"}.la-car-side:before{content:"\\f5e4"}.la-caret-down:before{content:"\\f0d7"}.la-caret-left:before{content:"\\f0d9"}.la-caret-right:before{content:"\\f0da"}.la-caret-square-down:before{content:"\\f150"}.la-caret-square-left:before{content:"\\f191"}.la-caret-square-right:before{content:"\\f152"}.la-caret-square-up:before{content:"\\f151"}.la-caret-up:before{content:"\\f0d8"}.la-carrot:before{content:"\\f787"}.la-cart-arrow-down:before{content:"\\f218"}.la-cart-plus:before{content:"\\f217"}.la-cash-register:before{content:"\\f788"}.la-cat:before{content:"\\f6be"}.la-cc-amazon-pay:before{content:"\\f42d"}.la-cc-amex:before{content:"\\f1f3"}.la-cc-apple-pay:before{content:"\\f416"}.la-cc-diners-club:before{content:"\\f24c"}.la-cc-discover:before{content:"\\f1f2"}.la-cc-jcb:before{content:"\\f24b"}.la-cc-mastercard:before{content:"\\f1f1"}.la-cc-paypal:before{content:"\\f1f4"}.la-cc-stripe:before{content:"\\f1f5"}.la-cc-visa:before{content:"\\f1f0"}.la-centercode:before{content:"\\f380"}.la-centos:before{content:"\\f789"}.la-certificate:before{content:"\\f0a3"}.la-chair:before{content:"\\f6c0"}.la-chalkboard:before{content:"\\f51b"}.la-chalkboard-teacher:before{content:"\\f51c"}.la-charging-station:before{content:"\\f5e7"}.la-chart-area:before{content:"\\f1fe"}.la-chart-bar:before{content:"\\f080"}.la-chart-line:before{content:"\\f201"}.la-chart-pie:before{content:"\\f200"}.la-check:before{content:"\\f00c"}.la-check-circle:before{content:"\\f058"}.la-check-double:before{content:"\\f560"}.la-check-square:before{content:"\\f14a"}.la-cheese:before{content:"\\f7ef"}.la-chess:before{content:"\\f439"}.la-chess-bishop:before{content:"\\f43a"}.la-chess-board:before{content:"\\f43c"}.la-chess-king:before{content:"\\f43f"}.la-chess-knight:before{content:"\\f441"}.la-chess-pawn:before{content:"\\f443"}.la-chess-queen:before{content:"\\f445"}.la-chess-rook:before{content:"\\f447"}.la-chevron-circle-down:before{content:"\\f13a"}.la-chevron-circle-left:before{content:"\\f137"}.la-chevron-circle-right:before{content:"\\f138"}.la-chevron-circle-up:before{content:"\\f139"}.la-chevron-down:before{content:"\\f078"}.la-chevron-left:before{content:"\\f053"}.la-chevron-right:before{content:"\\f054"}.la-chevron-up:before{content:"\\f077"}.la-child:before{content:"\\f1ae"}.la-chrome:before{content:"\\f268"}.la-chromecast:before{content:"\\f838"}.la-church:before{content:"\\f51d"}.la-circle:before{content:"\\f111"}.la-circle-notch:before{content:"\\f1ce"}.la-city:before{content:"\\f64f"}.la-clinic-medical:before{content:"\\f7f2"}.la-clipboard:before{content:"\\f328"}.la-clipboard-check:before{content:"\\f46c"}.la-clipboard-list:before{content:"\\f46d"}.la-clock:before{content:"\\f017"}.la-clone:before{content:"\\f24d"}.la-closed-captioning:before{content:"\\f20a"}.la-cloud:before{content:"\\f0c2"}.la-cloud-download-alt:before{content:"\\f381"}.la-cloud-meatball:before{content:"\\f73b"}.la-cloud-moon:before{content:"\\f6c3"}.la-cloud-moon-rain:before{content:"\\f73c"}.la-cloud-rain:before{content:"\\f73d"}.la-cloud-showers-heavy:before{content:"\\f740"}.la-cloud-sun:before{content:"\\f6c4"}.la-cloud-sun-rain:before{content:"\\f743"}.la-cloud-upload-alt:before{content:"\\f382"}.la-cloudscale:before{content:"\\f383"}.la-cloudsmith:before{content:"\\f384"}.la-cloudversify:before{content:"\\f385"}.la-cocktail:before{content:"\\f561"}.la-code:before{content:"\\f121"}.la-code-branch:before{content:"\\f126"}.la-codepen:before{content:"\\f1cb"}.la-codiepie:before{content:"\\f284"}.la-coffee:before{content:"\\f0f4"}.la-cog:before{content:"\\f013"}.la-cogs:before{content:"\\f085"}.la-coins:before{content:"\\f51e"}.la-columns:before{content:"\\f0db"}.la-comment:before{content:"\\f075"}.la-comment-alt:before{content:"\\f27a"}.la-comment-dollar:before{content:"\\f651"}.la-comment-dots:before{content:"\\f4ad"}.la-comment-medical:before{content:"\\f7f5"}.la-comment-slash:before{content:"\\f4b3"}.la-comments:before{content:"\\f086"}.la-comments-dollar:before{content:"\\f653"}.la-compact-disc:before{content:"\\f51f"}.la-compass:before{content:"\\f14e"}.la-compress:before{content:"\\f066"}.la-compress-arrows-alt:before{content:"\\f78c"}.la-concierge-bell:before{content:"\\f562"}.la-confluence:before{content:"\\f78d"}.la-connectdevelop:before{content:"\\f20e"}.la-contao:before{content:"\\f26d"}.la-cookie:before{content:"\\f563"}.la-cookie-bite:before{content:"\\f564"}.la-copy:before{content:"\\f0c5"}.la-copyright:before{content:"\\f1f9"}.la-cotton-bureau:before{content:"\\f89e"}.la-couch:before{content:"\\f4b8"}.la-cpanel:before{content:"\\f388"}.la-creative-commons:before{content:"\\f25e"}.la-creative-commons-by:before{content:"\\f4e7"}.la-creative-commons-nc:before{content:"\\f4e8"}.la-creative-commons-nc-eu:before{content:"\\f4e9"}.la-creative-commons-nc-jp:before{content:"\\f4ea"}.la-creative-commons-nd:before{content:"\\f4eb"}.la-creative-commons-pd:before{content:"\\f4ec"}.la-creative-commons-pd-alt:before{content:"\\f4ed"}.la-creative-commons-remix:before{content:"\\f4ee"}.la-creative-commons-sa:before{content:"\\f4ef"}.la-creative-commons-sampling:before{content:"\\f4f0"}.la-creative-commons-sampling-plus:before{content:"\\f4f1"}.la-creative-commons-share:before{content:"\\f4f2"}.la-creative-commons-zero:before{content:"\\f4f3"}.la-credit-card:before{content:"\\f09d"}.la-critical-role:before{content:"\\f6c9"}.la-crop:before{content:"\\f125"}.la-crop-alt:before{content:"\\f565"}.la-cross:before{content:"\\f654"}.la-crosshairs:before{content:"\\f05b"}.la-crow:before{content:"\\f520"}.la-crown:before{content:"\\f521"}.la-crutch:before{content:"\\f7f7"}.la-css3:before{content:"\\f13c"}.la-css3-alt:before{content:"\\f38b"}.la-cube:before{content:"\\f1b2"}.la-cubes:before{content:"\\f1b3"}.la-cut:before{content:"\\f0c4"}.la-cuttlefish:before{content:"\\f38c"}.la-d-and-d:before{content:"\\f38d"}.la-d-and-d-beyond:before{content:"\\f6ca"}.la-dashcube:before{content:"\\f210"}.la-database:before{content:"\\f1c0"}.la-deaf:before{content:"\\f2a4"}.la-delicious:before{content:"\\f1a5"}.la-democrat:before{content:"\\f747"}.la-deploydog:before{content:"\\f38e"}.la-deskpro:before{content:"\\f38f"}.la-desktop:before{content:"\\f108"}.la-dev:before{content:"\\f6cc"}.la-deviantart:before{content:"\\f1bd"}.la-dharmachakra:before{content:"\\f655"}.la-dhl:before{content:"\\f790"}.la-diagnoses:before{content:"\\f470"}.la-diaspora:before{content:"\\f791"}.la-dice:before{content:"\\f522"}.la-dice-d20:before{content:"\\f6cf"}.la-dice-d6:before{content:"\\f6d1"}.la-dice-five:before{content:"\\f523"}.la-dice-four:before{content:"\\f524"}.la-dice-one:before{content:"\\f525"}.la-dice-six:before{content:"\\f526"}.la-dice-three:before{content:"\\f527"}.la-dice-two:before{content:"\\f528"}.la-digg:before{content:"\\f1a6"}.la-digital-ocean:before{content:"\\f391"}.la-digital-tachograph:before{content:"\\f566"}.la-directions:before{content:"\\f5eb"}.la-discord:before{content:"\\f392"}.la-discourse:before{content:"\\f393"}.la-divide:before{content:"\\f529"}.la-dizzy:before{content:"\\f567"}.la-dna:before{content:"\\f471"}.la-dochub:before{content:"\\f394"}.la-docker:before{content:"\\f395"}.la-dog:before{content:"\\f6d3"}.la-dollar-sign:before{content:"\\f155"}.la-dolly:before{content:"\\f472"}.la-dolly-flatbed:before{content:"\\f474"}.la-donate:before{content:"\\f4b9"}.la-door-closed:before{content:"\\f52a"}.la-door-open:before{content:"\\f52b"}.la-dot-circle:before{content:"\\f192"}.la-dove:before{content:"\\f4ba"}.la-download:before{content:"\\f019"}.la-draft2digital:before{content:"\\f396"}.la-drafting-compass:before{content:"\\f568"}.la-dragon:before{content:"\\f6d5"}.la-draw-polygon:before{content:"\\f5ee"}.la-dribbble:before{content:"\\f17d"}.la-dribbble-square:before{content:"\\f397"}.la-dropbox:before{content:"\\f16b"}.la-drum:before{content:"\\f569"}.la-drum-steelpan:before{content:"\\f56a"}.la-drumstick-bite:before{content:"\\f6d7"}.la-drupal:before{content:"\\f1a9"}.la-dumbbell:before{content:"\\f44b"}.la-dumpster:before{content:"\\f793"}.la-dumpster-fire:before{content:"\\f794"}.la-dungeon:before{content:"\\f6d9"}.la-dyalog:before{content:"\\f399"}.la-earlybirds:before{content:"\\f39a"}.la-ebay:before{content:"\\f4f4"}.la-edge:before{content:"\\f282"}.la-edit:before{content:"\\f044"}.la-egg:before{content:"\\f7fb"}.la-eject:before{content:"\\f052"}.la-elementor:before{content:"\\f430"}.la-ellipsis-h:before{content:"\\f141"}.la-ellipsis-v:before{content:"\\f142"}.la-ello:before{content:"\\f5f1"}.la-ember:before{content:"\\f423"}.la-empire:before{content:"\\f1d1"}.la-envelope:before{content:"\\f0e0"}.la-envelope-open:before{content:"\\f2b6"}.la-envelope-open-text:before{content:"\\f658"}.la-envelope-square:before{content:"\\f199"}.la-envira:before{content:"\\f299"}.la-equals:before{content:"\\f52c"}.la-eraser:before{content:"\\f12d"}.la-erlang:before{content:"\\f39d"}.la-ethereum:before{content:"\\f42e"}.la-ethernet:before{content:"\\f796"}.la-etsy:before{content:"\\f2d7"}.la-euro-sign:before{content:"\\f153"}.la-evernote:before{content:"\\f839"}.la-exchange-alt:before{content:"\\f362"}.la-exclamation:before{content:"\\f12a"}.la-exclamation-circle:before{content:"\\f06a"}.la-exclamation-triangle:before{content:"\\f071"}.la-expand:before{content:"\\f065"}.la-expand-arrows-alt:before{content:"\\f31e"}.la-expeditedssl:before{content:"\\f23e"}.la-external-link-alt:before{content:"\\f35d"}.la-external-link-square-alt:before{content:"\\f360"}.la-eye:before{content:"\\f06e"}.la-eye-dropper:before{content:"\\f1fb"}.la-eye-slash:before{content:"\\f070"}.la-facebook:before{content:"\\f09a"}.la-facebook-f:before{content:"\\f39e"}.la-facebook-messenger:before{content:"\\f39f"}.la-facebook-square:before{content:"\\f082"}.la-fan:before{content:"\\f863"}.la-fantasy-flight-games:before{content:"\\f6dc"}.la-fast-backward:before{content:"\\f049"}.la-fast-forward:before{content:"\\f050"}.la-fax:before{content:"\\f1ac"}.la-feather:before{content:"\\f52d"}.la-feather-alt:before{content:"\\f56b"}.la-fedex:before{content:"\\f797"}.la-fedora:before{content:"\\f798"}.la-female:before{content:"\\f182"}.la-fighter-jet:before{content:"\\f0fb"}.la-figma:before{content:"\\f799"}.la-file:before{content:"\\f15b"}.la-file-alt:before{content:"\\f15c"}.la-file-archive:before{content:"\\f1c6"}.la-file-audio:before{content:"\\f1c7"}.la-file-code:before{content:"\\f1c9"}.la-file-contract:before{content:"\\f56c"}.la-file-csv:before{content:"\\f6dd"}.la-file-download:before{content:"\\f56d"}.la-file-excel:before{content:"\\f1c3"}.la-file-export:before{content:"\\f56e"}.la-file-image:before{content:"\\f1c5"}.la-file-import:before{content:"\\f56f"}.la-file-invoice:before{content:"\\f570"}.la-file-invoice-dollar:before{content:"\\f571"}.la-file-medical:before{content:"\\f477"}.la-file-medical-alt:before{content:"\\f478"}.la-file-pdf:before{content:"\\f1c1"}.la-file-powerpoint:before{content:"\\f1c4"}.la-file-prescription:before{content:"\\f572"}.la-file-signature:before{content:"\\f573"}.la-file-upload:before{content:"\\f574"}.la-file-video:before{content:"\\f1c8"}.la-file-word:before{content:"\\f1c2"}.la-fill:before{content:"\\f575"}.la-fill-drip:before{content:"\\f576"}.la-film:before{content:"\\f008"}.la-filter:before{content:"\\f0b0"}.la-fingerprint:before{content:"\\f577"}.la-fire:before{content:"\\f06d"}.la-fire-alt:before{content:"\\f7e4"}.la-fire-extinguisher:before{content:"\\f134"}.la-firefox:before{content:"\\f269"}.la-first-aid:before{content:"\\f479"}.la-first-order:before{content:"\\f2b0"}.la-first-order-alt:before{content:"\\f50a"}.la-firstdraft:before{content:"\\f3a1"}.la-fish:before{content:"\\f578"}.la-fist-raised:before{content:"\\f6de"}.la-flag:before{content:"\\f024"}.la-flag-checkered:before{content:"\\f11e"}.la-flag-usa:before{content:"\\f74d"}.la-flask:before{content:"\\f0c3"}.la-flickr:before{content:"\\f16e"}.la-flipboard:before{content:"\\f44d"}.la-flushed:before{content:"\\f579"}.la-fly:before{content:"\\f417"}.la-folder:before{content:"\\f07b"}.la-folder-minus:before{content:"\\f65d"}.la-folder-open:before{content:"\\f07c"}.la-folder-plus:before{content:"\\f65e"}.la-font:before{content:"\\f031"}.la-font-awesome:before{content:"\\f2b4"}.la-font-awesome-alt:before{content:"\\f35c"}.la-font-awesome-flag:before{content:"\\f425"}.la-font-awesome-logo-full:before{content:"\\f4e6"}.la-fonticons:before{content:"\\f280"}.la-fonticons-fi:before{content:"\\f3a2"}.la-football-ball:before{content:"\\f44e"}.la-fort-awesome:before{content:"\\f286"}.la-fort-awesome-alt:before{content:"\\f3a3"}.la-forumbee:before{content:"\\f211"}.la-forward:before{content:"\\f04e"}.la-foursquare:before{content:"\\f180"}.la-free-code-camp:before{content:"\\f2c5"}.la-freebsd:before{content:"\\f3a4"}.la-frog:before{content:"\\f52e"}.la-frown:before{content:"\\f119"}.la-frown-open:before{content:"\\f57a"}.la-fulcrum:before{content:"\\f50b"}.la-funnel-dollar:before{content:"\\f662"}.la-futbol:before{content:"\\f1e3"}.la-galactic-republic:before{content:"\\f50c"}.la-galactic-senate:before{content:"\\f50d"}.la-gamepad:before{content:"\\f11b"}.la-gas-pump:before{content:"\\f52f"}.la-gavel:before{content:"\\f0e3"}.la-gem:before{content:"\\f3a5"}.la-genderless:before{content:"\\f22d"}.la-get-pocket:before{content:"\\f265"}.la-gg:before{content:"\\f260"}.la-gg-circle:before{content:"\\f261"}.la-ghost:before{content:"\\f6e2"}.la-gift:before{content:"\\f06b"}.la-gifts:before{content:"\\f79c"}.la-git:before{content:"\\f1d3"}.la-git-alt:before{content:"\\f841"}.la-git-square:before{content:"\\f1d2"}.la-github:before{content:"\\f09b"}.la-github-alt:before{content:"\\f113"}.la-github-square:before{content:"\\f092"}.la-gitkraken:before{content:"\\f3a6"}.la-gitlab:before{content:"\\f296"}.la-gitter:before{content:"\\f426"}.la-glass-cheers:before{content:"\\f79f"}.la-glass-martini:before{content:"\\f000"}.la-glass-martini-alt:before{content:"\\f57b"}.la-glass-whiskey:before{content:"\\f7a0"}.la-glasses:before{content:"\\f530"}.la-glide:before{content:"\\f2a5"}.la-glide-g:before{content:"\\f2a6"}.la-globe:before{content:"\\f0ac"}.la-globe-africa:before{content:"\\f57c"}.la-globe-americas:before{content:"\\f57d"}.la-globe-asia:before{content:"\\f57e"}.la-globe-europe:before{content:"\\f7a2"}.la-gofore:before{content:"\\f3a7"}.la-golf-ball:before{content:"\\f450"}.la-goodreads:before{content:"\\f3a8"}.la-goodreads-g:before{content:"\\f3a9"}.la-google:before{content:"\\f1a0"}.la-google-drive:before{content:"\\f3aa"}.la-google-play:before{content:"\\f3ab"}.la-google-plus:before{content:"\\f2b3"}.la-google-plus-g:before{content:"\\f0d5"}.la-google-plus-square:before{content:"\\f0d4"}.la-google-wallet:before{content:"\\f1ee"}.la-gopuram:before{content:"\\f664"}.la-graduation-cap:before{content:"\\f19d"}.la-gratipay:before{content:"\\f184"}.la-grav:before{content:"\\f2d6"}.la-greater-than:before{content:"\\f531"}.la-greater-than-equal:before{content:"\\f532"}.la-grimace:before{content:"\\f57f"}.la-grin:before{content:"\\f580"}.la-grin-alt:before{content:"\\f581"}.la-grin-beam:before{content:"\\f582"}.la-grin-beam-sweat:before{content:"\\f583"}.la-grin-hearts:before{content:"\\f584"}.la-grin-squint:before{content:"\\f585"}.la-grin-squint-tears:before{content:"\\f586"}.la-grin-stars:before{content:"\\f587"}.la-grin-tears:before{content:"\\f588"}.la-grin-tongue:before{content:"\\f589"}.la-grin-tongue-squint:before{content:"\\f58a"}.la-grin-tongue-wink:before{content:"\\f58b"}.la-grin-wink:before{content:"\\f58c"}.la-grip-horizontal:before{content:"\\f58d"}.la-grip-lines:before{content:"\\f7a4"}.la-grip-lines-vertical:before{content:"\\f7a5"}.la-grip-vertical:before{content:"\\f58e"}.la-gripfire:before{content:"\\f3ac"}.la-grunt:before{content:"\\f3ad"}.la-guitar:before{content:"\\f7a6"}.la-gulp:before{content:"\\f3ae"}.la-h-square:before{content:"\\f0fd"}.la-hacker-news:before{content:"\\f1d4"}.la-hacker-news-square:before{content:"\\f3af"}.la-hackerrank:before{content:"\\f5f7"}.la-hamburger:before{content:"\\f805"}.la-hammer:before{content:"\\f6e3"}.la-hamsa:before{content:"\\f665"}.la-hand-holding:before{content:"\\f4bd"}.la-hand-holding-heart:before{content:"\\f4be"}.la-hand-holding-usd:before{content:"\\f4c0"}.la-hand-lizard:before{content:"\\f258"}.la-hand-middle-finger:before{content:"\\f806"}.la-hand-paper:before{content:"\\f256"}.la-hand-peace:before{content:"\\f25b"}.la-hand-point-down:before{content:"\\f0a7"}.la-hand-point-left:before{content:"\\f0a5"}.la-hand-point-right:before{content:"\\f0a4"}.la-hand-point-up:before{content:"\\f0a6"}.la-hand-pointer:before{content:"\\f25a"}.la-hand-rock:before{content:"\\f255"}.la-hand-scissors:before{content:"\\f257"}.la-hand-spock:before{content:"\\f259"}.la-hands:before{content:"\\f4c2"}.la-hands-helping:before{content:"\\f4c4"}.la-handshake:before{content:"\\f2b5"}.la-hanukiah:before{content:"\\f6e6"}.la-hard-hat:before{content:"\\f807"}.la-hashtag:before{content:"\\f292"}.la-hat-cowboy:before{content:"\\f8c0"}.la-hat-cowboy-side:before{content:"\\f8c1"}.la-hat-wizard:before{content:"\\f6e8"}.la-haykal:before{content:"\\f666"}.la-hdd:before{content:"\\f0a0"}.la-heading:before{content:"\\f1dc"}.la-headphones:before{content:"\\f025"}.la-headphones-alt:before{content:"\\f58f"}.la-headset:before{content:"\\f590"}.la-heart:before{content:"\\f004"}.la-heart-broken:before{content:"\\f7a9"}.la-heartbeat:before{content:"\\f21e"}.la-helicopter:before{content:"\\f533"}.la-highlighter:before{content:"\\f591"}.la-hiking:before{content:"\\f6ec"}.la-hippo:before{content:"\\f6ed"}.la-hips:before{content:"\\f452"}.la-hire-a-helper:before{content:"\\f3b0"}.la-history:before{content:"\\f1da"}.la-hockey-puck:before{content:"\\f453"}.la-holly-berry:before{content:"\\f7aa"}.la-home:before{content:"\\f015"}.la-hooli:before{content:"\\f427"}.la-hornbill:before{content:"\\f592"}.la-horse:before{content:"\\f6f0"}.la-horse-head:before{content:"\\f7ab"}.la-hospital:before{content:"\\f0f8"}.la-hospital-alt:before{content:"\\f47d"}.la-hospital-symbol:before{content:"\\f47e"}.la-hot-tub:before{content:"\\f593"}.la-hotdog:before{content:"\\f80f"}.la-hotel:before{content:"\\f594"}.la-hotjar:before{content:"\\f3b1"}.la-hourglass:before{content:"\\f254"}.la-hourglass-end:before{content:"\\f253"}.la-hourglass-half:before{content:"\\f252"}.la-hourglass-start:before{content:"\\f251"}.la-house-damage:before{content:"\\f6f1"}.la-houzz:before{content:"\\f27c"}.la-hryvnia:before{content:"\\f6f2"}.la-html5:before{content:"\\f13b"}.la-hubspot:before{content:"\\f3b2"}.la-i-cursor:before{content:"\\f246"}.la-ice-cream:before{content:"\\f810"}.la-icicles:before{content:"\\f7ad"}.la-icons:before{content:"\\f86d"}.la-id-badge:before{content:"\\f2c1"}.la-id-card:before{content:"\\f2c2"}.la-id-card-alt:before{content:"\\f47f"}.la-igloo:before{content:"\\f7ae"}.la-image:before{content:"\\f03e"}.la-images:before{content:"\\f302"}.la-imdb:before{content:"\\f2d8"}.la-inbox:before{content:"\\f01c"}.la-indent:before{content:"\\f03c"}.la-industry:before{content:"\\f275"}.la-infinity:before{content:"\\f534"}.la-info:before{content:"\\f129"}.la-info-circle:before{content:"\\f05a"}.la-instagram:before{content:"\\f16d"}.la-intercom:before{content:"\\f7af"}.la-internet-explorer:before{content:"\\f26b"}.la-invision:before{content:"\\f7b0"}.la-ioxhost:before{content:"\\f208"}.la-italic:before{content:"\\f033"}.la-itch-io:before{content:"\\f83a"}.la-itunes:before{content:"\\f3b4"}.la-itunes-note:before{content:"\\f3b5"}.la-java:before{content:"\\f4e4"}.la-jedi:before{content:"\\f669"}.la-jedi-order:before{content:"\\f50e"}.la-jenkins:before{content:"\\f3b6"}.la-jira:before{content:"\\f7b1"}.la-joget:before{content:"\\f3b7"}.la-joint:before{content:"\\f595"}.la-joomla:before{content:"\\f1aa"}.la-journal-whills:before{content:"\\f66a"}.la-js:before{content:"\\f3b8"}.la-js-square:before{content:"\\f3b9"}.la-jsfiddle:before{content:"\\f1cc"}.la-kaaba:before{content:"\\f66b"}.la-kaggle:before{content:"\\f5fa"}.la-key:before{content:"\\f084"}.la-keybase:before{content:"\\f4f5"}.la-keyboard:before{content:"\\f11c"}.la-keycdn:before{content:"\\f3ba"}.la-khanda:before{content:"\\f66d"}.la-kickstarter:before{content:"\\f3bb"}.la-kickstarter-k:before{content:"\\f3bc"}.la-kiss:before{content:"\\f596"}.la-kiss-beam:before{content:"\\f597"}.la-kiss-wink-heart:before{content:"\\f598"}.la-kiwi-bird:before{content:"\\f535"}.la-korvue:before{content:"\\f42f"}.la-landmark:before{content:"\\f66f"}.la-language:before{content:"\\f1ab"}.la-laptop:before{content:"\\f109"}.la-laptop-code:before{content:"\\f5fc"}.la-laptop-medical:before{content:"\\f812"}.la-laravel:before{content:"\\f3bd"}.la-lastfm:before{content:"\\f202"}.la-lastfm-square:before{content:"\\f203"}.la-laugh:before{content:"\\f599"}.la-laugh-beam:before{content:"\\f59a"}.la-laugh-squint:before{content:"\\f59b"}.la-laugh-wink:before{content:"\\f59c"}.la-layer-group:before{content:"\\f5fd"}.la-leaf:before{content:"\\f06c"}.la-leanpub:before{content:"\\f212"}.la-lemon:before{content:"\\f094"}.la-less:before{content:"\\f41d"}.la-less-than:before{content:"\\f536"}.la-less-than-equal:before{content:"\\f537"}.la-level-down-alt:before{content:"\\f3be"}.la-level-up-alt:before{content:"\\f3bf"}.la-life-ring:before{content:"\\f1cd"}.la-lightbulb:before{content:"\\f0eb"}.la-line:before{content:"\\f3c0"}.la-link:before{content:"\\f0c1"}.la-linkedin:before{content:"\\f08c"}.la-linkedin-in:before{content:"\\f0e1"}.la-linode:before{content:"\\f2b8"}.la-linux:before{content:"\\f17c"}.la-lira-sign:before{content:"\\f195"}.la-list:before{content:"\\f03a"}.la-list-alt:before{content:"\\f022"}.la-list-ol:before{content:"\\f0cb"}.la-list-ul:before{content:"\\f0ca"}.la-location-arrow:before{content:"\\f124"}.la-lock:before{content:"\\f023"}.la-lock-open:before{content:"\\f3c1"}.la-long-arrow-alt-down:before{content:"\\f309"}.la-long-arrow-alt-left:before{content:"\\f30a"}.la-long-arrow-alt-right:before{content:"\\f30b"}.la-long-arrow-alt-up:before{content:"\\f30c"}.la-low-vision:before{content:"\\f2a8"}.la-luggage-cart:before{content:"\\f59d"}.la-lyft:before{content:"\\f3c3"}.la-magento:before{content:"\\f3c4"}.la-magic:before{content:"\\f0d0"}.la-magnet:before{content:"\\f076"}.la-mail-bulk:before{content:"\\f674"}.la-mailchimp:before{content:"\\f59e"}.la-male:before{content:"\\f183"}.la-mandalorian:before{content:"\\f50f"}.la-map:before{content:"\\f279"}.la-map-marked:before{content:"\\f59f"}.la-map-marked-alt:before{content:"\\f5a0"}.la-map-marker:before{content:"\\f041"}.la-map-marker-alt:before{content:"\\f3c5"}.la-map-pin:before{content:"\\f276"}.la-map-signs:before{content:"\\f277"}.la-markdown:before{content:"\\f60f"}.la-marker:before{content:"\\f5a1"}.la-mars:before{content:"\\f222"}.la-mars-double:before{content:"\\f227"}.la-mars-stroke:before{content:"\\f229"}.la-mars-stroke-h:before{content:"\\f22b"}.la-mars-stroke-v:before{content:"\\f22a"}.la-mask:before{content:"\\f6fa"}.la-mastodon:before{content:"\\f4f6"}.la-maxcdn:before{content:"\\f136"}.la-mdb:before{content:"\\f8ca"}.la-medal:before{content:"\\f5a2"}.la-medapps:before{content:"\\f3c6"}.la-medium:before{content:"\\f23a"}.la-medium-m:before{content:"\\f3c7"}.la-medkit:before{content:"\\f0fa"}.la-medrt:before{content:"\\f3c8"}.la-meetup:before{content:"\\f2e0"}.la-megaport:before{content:"\\f5a3"}.la-meh:before{content:"\\f11a"}.la-meh-blank:before{content:"\\f5a4"}.la-meh-rolling-eyes:before{content:"\\f5a5"}.la-memory:before{content:"\\f538"}.la-mendeley:before{content:"\\f7b3"}.la-menorah:before{content:"\\f676"}.la-mercury:before{content:"\\f223"}.la-meteor:before{content:"\\f753"}.la-microchip:before{content:"\\f2db"}.la-microphone:before{content:"\\f130"}.la-microphone-alt:before{content:"\\f3c9"}.la-microphone-alt-slash:before{content:"\\f539"}.la-microphone-slash:before{content:"\\f131"}.la-microscope:before{content:"\\f610"}.la-microsoft:before{content:"\\f3ca"}.la-minus:before{content:"\\f068"}.la-minus-circle:before{content:"\\f056"}.la-minus-square:before{content:"\\f146"}.la-mitten:before{content:"\\f7b5"}.la-mix:before{content:"\\f3cb"}.la-mixcloud:before{content:"\\f289"}.la-mizuni:before{content:"\\f3cc"}.la-mobile:before{content:"\\f10b"}.la-mobile-alt:before{content:"\\f3cd"}.la-modx:before{content:"\\f285"}.la-monero:before{content:"\\f3d0"}.la-money-bill:before{content:"\\f0d6"}.la-money-bill-alt:before{content:"\\f3d1"}.la-money-bill-wave:before{content:"\\f53a"}.la-money-bill-wave-alt:before{content:"\\f53b"}.la-money-check:before{content:"\\f53c"}.la-money-check-alt:before{content:"\\f53d"}.la-monument:before{content:"\\f5a6"}.la-moon:before{content:"\\f186"}.la-mortar-pestle:before{content:"\\f5a7"}.la-mosque:before{content:"\\f678"}.la-motorcycle:before{content:"\\f21c"}.la-mountain:before{content:"\\f6fc"}.la-mouse:before{content:"\\f8cc"}.la-mouse-pointer:before{content:"\\f245"}.la-mug-hot:before{content:"\\f7b6"}.la-music:before{content:"\\f001"}.la-napster:before{content:"\\f3d2"}.la-neos:before{content:"\\f612"}.la-network-wired:before{content:"\\f6ff"}.la-neuter:before{content:"\\f22c"}.la-newspaper:before{content:"\\f1ea"}.la-nimblr:before{content:"\\f5a8"}.la-node:before{content:"\\f419"}.la-node-js:before{content:"\\f3d3"}.la-not-equal:before{content:"\\f53e"}.la-notes-medical:before{content:"\\f481"}.la-npm:before{content:"\\f3d4"}.la-ns8:before{content:"\\f3d5"}.la-nutritionix:before{content:"\\f3d6"}.la-object-group:before{content:"\\f247"}.la-object-ungroup:before{content:"\\f248"}.la-odnoklassniki:before{content:"\\f263"}.la-odnoklassniki-square:before{content:"\\f264"}.la-oil-can:before{content:"\\f613"}.la-old-republic:before{content:"\\f510"}.la-om:before{content:"\\f679"}.la-opencart:before{content:"\\f23d"}.la-openid:before{content:"\\f19b"}.la-opera:before{content:"\\f26a"}.la-optin-monster:before{content:"\\f23c"}.la-orcid:before{content:"\\f8d2"}.la-osi:before{content:"\\f41a"}.la-otter:before{content:"\\f700"}.la-outdent:before{content:"\\f03b"}.la-page4:before{content:"\\f3d7"}.la-pagelines:before{content:"\\f18c"}.la-pager:before{content:"\\f815"}.la-paint-brush:before{content:"\\f1fc"}.la-paint-roller:before{content:"\\f5aa"}.la-palette:before{content:"\\f53f"}.la-palfed:before{content:"\\f3d8"}.la-pallet:before{content:"\\f482"}.la-paper-plane:before{content:"\\f1d8"}.la-paperclip:before{content:"\\f0c6"}.la-parachute-box:before{content:"\\f4cd"}.la-paragraph:before{content:"\\f1dd"}.la-parking:before{content:"\\f540"}.la-passport:before{content:"\\f5ab"}.la-pastafarianism:before{content:"\\f67b"}.la-paste:before{content:"\\f0ea"}.la-patreon:before{content:"\\f3d9"}.la-pause:before{content:"\\f04c"}.la-pause-circle:before{content:"\\f28b"}.la-paw:before{content:"\\f1b0"}.la-paypal:before{content:"\\f1ed"}.la-peace:before{content:"\\f67c"}.la-pen:before{content:"\\f304"}.la-pen-alt:before{content:"\\f305"}.la-pen-fancy:before{content:"\\f5ac"}.la-pen-nib:before{content:"\\f5ad"}.la-pen-square:before{content:"\\f14b"}.la-pencil-alt:before{content:"\\f303"}.la-pencil-ruler:before{content:"\\f5ae"}.la-penny-arcade:before{content:"\\f704"}.la-people-carry:before{content:"\\f4ce"}.la-pepper-hot:before{content:"\\f816"}.la-percent:before{content:"\\f295"}.la-percentage:before{content:"\\f541"}.la-periscope:before{content:"\\f3da"}.la-person-booth:before{content:"\\f756"}.la-phabricator:before{content:"\\f3db"}.la-phoenix-framework:before{content:"\\f3dc"}.la-phoenix-squadron:before{content:"\\f511"}.la-phone:before{content:"\\f095"}.la-phone-alt:before{content:"\\f879"}.la-phone-slash:before{content:"\\f3dd"}.la-phone-square:before{content:"\\f098"}.la-phone-square-alt:before{content:"\\f87b"}.la-phone-volume:before{content:"\\f2a0"}.la-photo-video:before{content:"\\f87c"}.la-php:before{content:"\\f457"}.la-pied-piper:before{content:"\\f2ae"}.la-pied-piper-alt:before{content:"\\f1a8"}.la-pied-piper-hat:before{content:"\\f4e5"}.la-pied-piper-pp:before{content:"\\f1a7"}.la-piggy-bank:before{content:"\\f4d3"}.la-pills:before{content:"\\f484"}.la-pinterest:before{content:"\\f0d2"}.la-pinterest-p:before{content:"\\f231"}.la-pinterest-square:before{content:"\\f0d3"}.la-pizza-slice:before{content:"\\f818"}.la-place-of-worship:before{content:"\\f67f"}.la-plane:before{content:"\\f072"}.la-plane-arrival:before{content:"\\f5af"}.la-plane-departure:before{content:"\\f5b0"}.la-play:before{content:"\\f04b"}.la-play-circle:before{content:"\\f144"}.la-playstation:before{content:"\\f3df"}.la-plug:before{content:"\\f1e6"}.la-plus:before{content:"\\f067"}.la-plus-circle:before{content:"\\f055"}.la-plus-square:before{content:"\\f0fe"}.la-podcast:before{content:"\\f2ce"}.la-poll:before{content:"\\f681"}.la-poll-h:before{content:"\\f682"}.la-poo:before{content:"\\f2fe"}.la-poo-storm:before{content:"\\f75a"}.la-poop:before{content:"\\f619"}.la-portrait:before{content:"\\f3e0"}.la-pound-sign:before{content:"\\f154"}.la-power-off:before{content:"\\f011"}.la-pray:before{content:"\\f683"}.la-praying-hands:before{content:"\\f684"}.la-prescription:before{content:"\\f5b1"}.la-prescription-bottle:before{content:"\\f485"}.la-prescription-bottle-alt:before{content:"\\f486"}.la-print:before{content:"\\f02f"}.la-procedures:before{content:"\\f487"}.la-product-hunt:before{content:"\\f288"}.la-project-diagram:before{content:"\\f542"}.la-pushed:before{content:"\\f3e1"}.la-puzzle-piece:before{content:"\\f12e"}.la-python:before{content:"\\f3e2"}.la-qq:before{content:"\\f1d6"}.la-qrcode:before{content:"\\f029"}.la-question:before{content:"\\f128"}.la-question-circle:before{content:"\\f059"}.la-quidditch:before{content:"\\f458"}.la-quinscape:before{content:"\\f459"}.la-quora:before{content:"\\f2c4"}.la-quote-left:before{content:"\\f10d"}.la-quote-right:before{content:"\\f10e"}.la-quran:before{content:"\\f687"}.la-r-project:before{content:"\\f4f7"}.la-radiation:before{content:"\\f7b9"}.la-radiation-alt:before{content:"\\f7ba"}.la-rainbow:before{content:"\\f75b"}.la-random:before{content:"\\f074"}.la-raspberry-pi:before{content:"\\f7bb"}.la-ravelry:before{content:"\\f2d9"}.la-react:before{content:"\\f41b"}.la-reacteurope:before{content:"\\f75d"}.la-readme:before{content:"\\f4d5"}.la-rebel:before{content:"\\f1d0"}.la-receipt:before{content:"\\f543"}.la-record-vinyl:before{content:"\\f8d9"}.la-recycle:before{content:"\\f1b8"}.la-red-river:before{content:"\\f3e3"}.la-reddit:before{content:"\\f1a1"}.la-reddit-alien:before{content:"\\f281"}.la-reddit-square:before{content:"\\f1a2"}.la-redhat:before{content:"\\f7bc"}.la-redo:before{content:"\\f01e"}.la-redo-alt:before{content:"\\f2f9"}.la-registered:before{content:"\\f25d"}.la-remove-format:before{content:"\\f87d"}.la-renren:before{content:"\\f18b"}.la-reply:before{content:"\\f3e5"}.la-reply-all:before{content:"\\f122"}.la-replyd:before{content:"\\f3e6"}.la-republican:before{content:"\\f75e"}.la-researchgate:before{content:"\\f4f8"}.la-resolving:before{content:"\\f3e7"}.la-restroom:before{content:"\\f7bd"}.la-retweet:before{content:"\\f079"}.la-rev:before{content:"\\f5b2"}.la-ribbon:before{content:"\\f4d6"}.la-ring:before{content:"\\f70b"}.la-road:before{content:"\\f018"}.la-robot:before{content:"\\f544"}.la-rocket:before{content:"\\f135"}.la-rocketchat:before{content:"\\f3e8"}.la-rockrms:before{content:"\\f3e9"}.la-route:before{content:"\\f4d7"}.la-rss:before{content:"\\f09e"}.la-rss-square:before{content:"\\f143"}.la-ruble-sign:before{content:"\\f158"}.la-ruler:before{content:"\\f545"}.la-ruler-combined:before{content:"\\f546"}.la-ruler-horizontal:before{content:"\\f547"}.la-ruler-vertical:before{content:"\\f548"}.la-running:before{content:"\\f70c"}.la-rupee-sign:before{content:"\\f156"}.la-sad-cry:before{content:"\\f5b3"}.la-sad-tear:before{content:"\\f5b4"}.la-safari:before{content:"\\f267"}.la-salesforce:before{content:"\\f83b"}.la-sass:before{content:"\\f41e"}.la-satellite:before{content:"\\f7bf"}.la-satellite-dish:before{content:"\\f7c0"}.la-save:before{content:"\\f0c7"}.la-schlix:before{content:"\\f3ea"}.la-school:before{content:"\\f549"}.la-screwdriver:before{content:"\\f54a"}.la-scribd:before{content:"\\f28a"}.la-scroll:before{content:"\\f70e"}.la-sd-card:before{content:"\\f7c2"}.la-search:before{content:"\\f002"}.la-search-dollar:before{content:"\\f688"}.la-search-location:before{content:"\\f689"}.la-search-minus:before{content:"\\f010"}.la-search-plus:before{content:"\\f00e"}.la-searchengin:before{content:"\\f3eb"}.la-seedling:before{content:"\\f4d8"}.la-sellcast:before{content:"\\f2da"}.la-sellsy:before{content:"\\f213"}.la-server:before{content:"\\f233"}.la-servicestack:before{content:"\\f3ec"}.la-shapes:before{content:"\\f61f"}.la-share:before{content:"\\f064"}.la-share-alt:before{content:"\\f1e0"}.la-share-alt-square:before{content:"\\f1e1"}.la-share-square:before{content:"\\f14d"}.la-shekel-sign:before{content:"\\f20b"}.la-shield-alt:before{content:"\\f3ed"}.la-ship:before{content:"\\f21a"}.la-shipping-fast:before{content:"\\f48b"}.la-shirtsinbulk:before{content:"\\f214"}.la-shoe-prints:before{content:"\\f54b"}.la-shopping-bag:before{content:"\\f290"}.la-shopping-basket:before{content:"\\f291"}.la-shopping-cart:before{content:"\\f07a"}.la-shopware:before{content:"\\f5b5"}.la-shower:before{content:"\\f2cc"}.la-shuttle-van:before{content:"\\f5b6"}.la-sign:before{content:"\\f4d9"}.la-sign-in-alt:before{content:"\\f2f6"}.la-sign-language:before{content:"\\f2a7"}.la-sign-out-alt:before{content:"\\f2f5"}.la-signal:before{content:"\\f012"}.la-signature:before{content:"\\f5b7"}.la-sim-card:before{content:"\\f7c4"}.la-simplybuilt:before{content:"\\f215"}.la-sistrix:before{content:"\\f3ee"}.la-sitemap:before{content:"\\f0e8"}.la-sith:before{content:"\\f512"}.la-skating:before{content:"\\f7c5"}.la-sketch:before{content:"\\f7c6"}.la-skiing:before{content:"\\f7c9"}.la-skiing-nordic:before{content:"\\f7ca"}.la-skull:before{content:"\\f54c"}.la-skull-crossbones:before{content:"\\f714"}.la-skyatlas:before{content:"\\f216"}.la-skype:before{content:"\\f17e"}.la-slack:before{content:"\\f198"}.la-slack-hash:before{content:"\\f3ef"}.la-slash:before{content:"\\f715"}.la-sleigh:before{content:"\\f7cc"}.la-sliders-h:before{content:"\\f1de"}.la-slideshare:before{content:"\\f1e7"}.la-smile:before{content:"\\f118"}.la-smile-beam:before{content:"\\f5b8"}.la-smile-wink:before{content:"\\f4da"}.la-smog:before{content:"\\f75f"}.la-smoking:before{content:"\\f48d"}.la-smoking-ban:before{content:"\\f54d"}.la-sms:before{content:"\\f7cd"}.la-snapchat:before{content:"\\f2ab"}.la-snapchat-ghost:before{content:"\\f2ac"}.la-snapchat-square:before{content:"\\f2ad"}.la-snowboarding:before{content:"\\f7ce"}.la-snowflake:before{content:"\\f2dc"}.la-snowman:before{content:"\\f7d0"}.la-snowplow:before{content:"\\f7d2"}.la-socks:before{content:"\\f696"}.la-solar-panel:before{content:"\\f5ba"}.la-sort:before{content:"\\f0dc"}.la-sort-alpha-down:before{content:"\\f15d"}.la-sort-alpha-down-alt:before{content:"\\f881"}.la-sort-alpha-up:before{content:"\\f15e"}.la-sort-alpha-up-alt:before{content:"\\f882"}.la-sort-amount-down:before{content:"\\f160"}.la-sort-amount-down-alt:before{content:"\\f884"}.la-sort-amount-up:before{content:"\\f161"}.la-sort-amount-up-alt:before{content:"\\f885"}.la-sort-down:before{content:"\\f0dd"}.la-sort-numeric-down:before{content:"\\f162"}.la-sort-numeric-down-alt:before{content:"\\f886"}.la-sort-numeric-up:before{content:"\\f163"}.la-sort-numeric-up-alt:before{content:"\\f887"}.la-sort-up:before{content:"\\f0de"}.la-soundcloud:before{content:"\\f1be"}.la-sourcetree:before{content:"\\f7d3"}.la-spa:before{content:"\\f5bb"}.la-space-shuttle:before{content:"\\f197"}.la-speakap:before{content:"\\f3f3"}.la-speaker-deck:before{content:"\\f83c"}.la-spell-check:before{content:"\\f891"}.la-spider:before{content:"\\f717"}.la-spinner:before{content:"\\f110"}.la-splotch:before{content:"\\f5bc"}.la-spotify:before{content:"\\f1bc"}.la-spray-can:before{content:"\\f5bd"}.la-square:before{content:"\\f0c8"}.la-square-full:before{content:"\\f45c"}.la-square-root-alt:before{content:"\\f698"}.la-squarespace:before{content:"\\f5be"}.la-stack-exchange:before{content:"\\f18d"}.la-stack-overflow:before{content:"\\f16c"}.la-stackpath:before{content:"\\f842"}.la-stamp:before{content:"\\f5bf"}.la-star:before{content:"\\f005"}.la-star-and-crescent:before{content:"\\f699"}.la-star-half:before{content:"\\f089"}.la-star-half-alt:before{content:"\\f5c0"}.la-star-of-david:before{content:"\\f69a"}.la-star-of-life:before{content:"\\f621"}.la-staylinked:before{content:"\\f3f5"}.la-steam:before{content:"\\f1b6"}.la-steam-square:before{content:"\\f1b7"}.la-steam-symbol:before{content:"\\f3f6"}.la-step-backward:before{content:"\\f048"}.la-step-forward:before{content:"\\f051"}.la-stethoscope:before{content:"\\f0f1"}.la-sticker-mule:before{content:"\\f3f7"}.la-sticky-note:before{content:"\\f249"}.la-stop:before{content:"\\f04d"}.la-stop-circle:before{content:"\\f28d"}.la-stopwatch:before{content:"\\f2f2"}.la-store:before{content:"\\f54e"}.la-store-alt:before{content:"\\f54f"}.la-strava:before{content:"\\f428"}.la-stream:before{content:"\\f550"}.la-street-view:before{content:"\\f21d"}.la-strikethrough:before{content:"\\f0cc"}.la-stripe:before{content:"\\f429"}.la-stripe-s:before{content:"\\f42a"}.la-stroopwafel:before{content:"\\f551"}.la-studiovinari:before{content:"\\f3f8"}.la-stumbleupon:before{content:"\\f1a4"}.la-stumbleupon-circle:before{content:"\\f1a3"}.la-subscript:before{content:"\\f12c"}.la-subway:before{content:"\\f239"}.la-suitcase:before{content:"\\f0f2"}.la-suitcase-rolling:before{content:"\\f5c1"}.la-sun:before{content:"\\f185"}.la-superpowers:before{content:"\\f2dd"}.la-superscript:before{content:"\\f12b"}.la-supple:before{content:"\\f3f9"}.la-surprise:before{content:"\\f5c2"}.la-suse:before{content:"\\f7d6"}.la-swatchbook:before{content:"\\f5c3"}.la-swift:before{content:"\\f8e1"}.la-swimmer:before{content:"\\f5c4"}.la-swimming-pool:before{content:"\\f5c5"}.la-symfony:before{content:"\\f83d"}.la-synagogue:before{content:"\\f69b"}.la-sync:before{content:"\\f021"}.la-sync-alt:before{content:"\\f2f1"}.la-syringe:before{content:"\\f48e"}.la-table:before{content:"\\f0ce"}.la-table-tennis:before{content:"\\f45d"}.la-tablet:before{content:"\\f10a"}.la-tablet-alt:before{content:"\\f3fa"}.la-tablets:before{content:"\\f490"}.la-tachometer-alt:before{content:"\\f3fd"}.la-tag:before{content:"\\f02b"}.la-tags:before{content:"\\f02c"}.la-tape:before{content:"\\f4db"}.la-tasks:before{content:"\\f0ae"}.la-taxi:before{content:"\\f1ba"}.la-teamspeak:before{content:"\\f4f9"}.la-teeth:before{content:"\\f62e"}.la-teeth-open:before{content:"\\f62f"}.la-telegram:before{content:"\\f2c6"}.la-telegram-plane:before{content:"\\f3fe"}.la-temperature-high:before{content:"\\f769"}.la-temperature-low:before{content:"\\f76b"}.la-tencent-weibo:before{content:"\\f1d5"}.la-tenge:before{content:"\\f7d7"}.la-terminal:before{content:"\\f120"}.la-text-height:before{content:"\\f034"}.la-text-width:before{content:"\\f035"}.la-th:before{content:"\\f00a"}.la-th-large:before{content:"\\f009"}.la-th-list:before{content:"\\f00b"}.la-the-red-yeti:before{content:"\\f69d"}.la-theater-masks:before{content:"\\f630"}.la-themeco:before{content:"\\f5c6"}.la-themeisle:before{content:"\\f2b2"}.la-thermometer:before{content:"\\f491"}.la-thermometer-empty:before{content:"\\f2cb"}.la-thermometer-full:before{content:"\\f2c7"}.la-thermometer-half:before{content:"\\f2c9"}.la-thermometer-quarter:before{content:"\\f2ca"}.la-thermometer-three-quarters:before{content:"\\f2c8"}.la-think-peaks:before{content:"\\f731"}.la-thumbs-down:before{content:"\\f165"}.la-thumbs-up:before{content:"\\f164"}.la-thumbtack:before{content:"\\f08d"}.la-ticket-alt:before{content:"\\f3ff"}.la-times:before{content:"\\f00d"}.la-times-circle:before{content:"\\f057"}.la-tint:before{content:"\\f043"}.la-tint-slash:before{content:"\\f5c7"}.la-tired:before{content:"\\f5c8"}.la-toggle-off:before{content:"\\f204"}.la-toggle-on:before{content:"\\f205"}.la-toilet:before{content:"\\f7d8"}.la-toilet-paper:before{content:"\\f71e"}.la-toolbox:before{content:"\\f552"}.la-tools:before{content:"\\f7d9"}.la-tooth:before{content:"\\f5c9"}.la-torah:before{content:"\\f6a0"}.la-torii-gate:before{content:"\\f6a1"}.la-tractor:before{content:"\\f722"}.la-trade-federation:before{content:"\\f513"}.la-trademark:before{content:"\\f25c"}.la-traffic-light:before{content:"\\f637"}.la-train:before{content:"\\f238"}.la-tram:before{content:"\\f7da"}.la-transgender:before{content:"\\f224"}.la-transgender-alt:before{content:"\\f225"}.la-trash:before{content:"\\f1f8"}.la-trash-alt:before{content:"\\f2ed"}.la-trash-restore:before{content:"\\f829"}.la-trash-restore-alt:before{content:"\\f82a"}.la-tree:before{content:"\\f1bb"}.la-trello:before{content:"\\f181"}.la-tripadvisor:before{content:"\\f262"}.la-trophy:before{content:"\\f091"}.la-truck:before{content:"\\f0d1"}.la-truck-loading:before{content:"\\f4de"}.la-truck-monster:before{content:"\\f63b"}.la-truck-moving:before{content:"\\f4df"}.la-truck-pickup:before{content:"\\f63c"}.la-tshirt:before{content:"\\f553"}.la-tty:before{content:"\\f1e4"}.la-tumblr:before{content:"\\f173"}.la-tumblr-square:before{content:"\\f174"}.la-tv:before{content:"\\f26c"}.la-twitch:before{content:"\\f1e8"}.la-twitter:before{content:"\\f099"}.la-twitter-square:before{content:"\\f081"}.la-typo3:before{content:"\\f42b"}.la-uber:before{content:"\\f402"}.la-ubuntu:before{content:"\\f7df"}.la-uikit:before{content:"\\f403"}.la-umbraco:before{content:"\\f8e8"}.la-umbrella:before{content:"\\f0e9"}.la-umbrella-beach:before{content:"\\f5ca"}.la-underline:before{content:"\\f0cd"}.la-undo:before{content:"\\f0e2"}.la-undo-alt:before{content:"\\f2ea"}.la-uniregistry:before{content:"\\f404"}.la-universal-access:before{content:"\\f29a"}.la-university:before{content:"\\f19c"}.la-unlink:before{content:"\\f127"}.la-unlock:before{content:"\\f09c"}.la-unlock-alt:before{content:"\\f13e"}.la-untappd:before{content:"\\f405"}.la-upload:before{content:"\\f093"}.la-ups:before{content:"\\f7e0"}.la-usb:before{content:"\\f287"}.la-user:before{content:"\\f007"}.la-user-alt:before{content:"\\f406"}.la-user-alt-slash:before{content:"\\f4fa"}.la-user-astronaut:before{content:"\\f4fb"}.la-user-check:before{content:"\\f4fc"}.la-user-circle:before{content:"\\f2bd"}.la-user-clock:before{content:"\\f4fd"}.la-user-cog:before{content:"\\f4fe"}.la-user-edit:before{content:"\\f4ff"}.la-user-friends:before{content:"\\f500"}.la-user-graduate:before{content:"\\f501"}.la-user-injured:before{content:"\\f728"}.la-user-lock:before{content:"\\f502"}.la-user-md:before{content:"\\f0f0"}.la-user-minus:before{content:"\\f503"}.la-user-ninja:before{content:"\\f504"}.la-user-nurse:before{content:"\\f82f"}.la-user-plus:before{content:"\\f234"}.la-user-secret:before{content:"\\f21b"}.la-user-shield:before{content:"\\f505"}.la-user-slash:before{content:"\\f506"}.la-user-tag:before{content:"\\f507"}.la-user-tie:before{content:"\\f508"}.la-user-times:before{content:"\\f235"}.la-users:before{content:"\\f0c0"}.la-users-cog:before{content:"\\f509"}.la-usps:before{content:"\\f7e1"}.la-ussunnah:before{content:"\\f407"}.la-utensil-spoon:before{content:"\\f2e5"}.la-utensils:before{content:"\\f2e7"}.la-vaadin:before{content:"\\f408"}.la-vector-square:before{content:"\\f5cb"}.la-venus:before{content:"\\f221"}.la-venus-double:before{content:"\\f226"}.la-venus-mars:before{content:"\\f228"}.la-viacoin:before{content:"\\f237"}.la-viadeo:before{content:"\\f2a9"}.la-viadeo-square:before{content:"\\f2aa"}.la-vial:before{content:"\\f492"}.la-vials:before{content:"\\f493"}.la-viber:before{content:"\\f409"}.la-video:before{content:"\\f03d"}.la-video-slash:before{content:"\\f4e2"}.la-vihara:before{content:"\\f6a7"}.la-vimeo:before{content:"\\f40a"}.la-vimeo-square:before{content:"\\f194"}.la-vimeo-v:before{content:"\\f27d"}.la-vine:before{content:"\\f1ca"}.la-vk:before{content:"\\f189"}.la-vnv:before{content:"\\f40b"}.la-voicemail:before{content:"\\f897"}.la-volleyball-ball:before{content:"\\f45f"}.la-volume-down:before{content:"\\f027"}.la-volume-mute:before{content:"\\f6a9"}.la-volume-off:before{content:"\\f026"}.la-volume-up:before{content:"\\f028"}.la-vote-yea:before{content:"\\f772"}.la-vr-cardboard:before{content:"\\f729"}.la-vuejs:before{content:"\\f41f"}.la-walking:before{content:"\\f554"}.la-wallet:before{content:"\\f555"}.la-warehouse:before{content:"\\f494"}.la-water:before{content:"\\f773"}.la-wave-square:before{content:"\\f83e"}.la-waze:before{content:"\\f83f"}.la-weebly:before{content:"\\f5cc"}.la-weibo:before{content:"\\f18a"}.la-weight:before{content:"\\f496"}.la-weight-hanging:before{content:"\\f5cd"}.la-weixin:before{content:"\\f1d7"}.la-whatsapp:before{content:"\\f232"}.la-whatsapp-square:before{content:"\\f40c"}.la-wheelchair:before{content:"\\f193"}.la-whmcs:before{content:"\\f40d"}.la-wifi:before{content:"\\f1eb"}.la-wikipedia-w:before{content:"\\f266"}.la-wind:before{content:"\\f72e"}.la-window-close:before{content:"\\f410"}.la-window-maximize:before{content:"\\f2d0"}.la-window-minimize:before{content:"\\f2d1"}.la-window-restore:before{content:"\\f2d2"}.la-windows:before{content:"\\f17a"}.la-wine-bottle:before{content:"\\f72f"}.la-wine-glass:before{content:"\\f4e3"}.la-wine-glass-alt:before{content:"\\f5ce"}.la-wix:before{content:"\\f5cf"}.la-wizards-of-the-coast:before{content:"\\f730"}.la-wolf-pack-battalion:before{content:"\\f514"}.la-won-sign:before{content:"\\f159"}.la-wordpress:before{content:"\\f19a"}.la-wordpress-simple:before{content:"\\f411"}.la-wpbeginner:before{content:"\\f297"}.la-wpexplorer:before{content:"\\f2de"}.la-wpforms:before{content:"\\f298"}.la-wpressr:before{content:"\\f3e4"}.la-wrench:before{content:"\\f0ad"}.la-x-ray:before{content:"\\f497"}.la-xbox:before{content:"\\f412"}.la-xing:before{content:"\\f168"}.la-xing-square:before{content:"\\f169"}.la-y-combinator:before{content:"\\f23b"}.la-yahoo:before{content:"\\f19e"}.la-yammer:before{content:"\\f840"}.la-yandex:before{content:"\\f413"}.la-yandex-international:before{content:"\\f414"}.la-yarn:before{content:"\\f7e3"}.la-yelp:before{content:"\\f1e9"}.la-yen-sign:before{content:"\\f157"}.la-yin-yang:before{content:"\\f6ad"}.la-yoast:before{content:"\\f2b1"}.la-youtube:before{content:"\\f167"}.la-youtube-square:before{content:"\\f431"}.la-zhihu:before{content:"\\f63f"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:Line Awesome Brands;font-style:normal;font-weight:400;font-display:auto;src:url('+new URL("la-brands-400.c0e32387.eot",import.meta.url).href+");src:url("+new URL("la-brands-400.c0e32387.eot?#iefix",import.meta.url).href+') format("embedded-opentype"),url('+new URL("la-brands-400.ff70c9bc.woff2",import.meta.url).href+') format("woff2"),url('+new URL("la-brands-400.14c63377.woff",import.meta.url).href+') format("woff"),url('+new URL("la-brands-400.fbc98702.ttf",import.meta.url).href+') format("truetype"),url('+new URL("la-brands-400.4da18191.svg#lineawesome",import.meta.url).href+') format("svg")}.lab{font-family:Line Awesome Brands}@font-face{font-family:Line Awesome Free;font-style:normal;font-weight:400;font-display:auto;src:url('+new URL("la-regular-400.7dc456f0.eot",import.meta.url).href+");src:url("+new URL("la-regular-400.7dc456f0.eot?#iefix",import.meta.url).href+') format("embedded-opentype"),url('+new URL("la-regular-400.51ca2c00.woff2",import.meta.url).href+') format("woff2"),url('+new URL("la-regular-400.7711fabc.woff",import.meta.url).href+') format("woff"),url('+new URL("la-regular-400.4b6ab8d0.ttf",import.meta.url).href+') format("truetype"),url('+new URL("la-regular-400.884ce19c.svg#lineawesome",import.meta.url).href+') format("svg")}.lar{font-family:Line Awesome Free;font-weight:400}@font-face{font-family:Line Awesome Free;font-style:normal;font-weight:900;font-display:auto;src:url('+new URL("la-solid-900.8a57f8a9.eot",import.meta.url).href+");src:url("+new URL("la-solid-900.8a57f8a9.eot?#iefix",import.meta.url).href+') format("embedded-opentype"),url('+new URL("la-solid-900.10a68e01.woff2",import.meta.url).href+') format("woff2"),url('+new URL("la-solid-900.a0d21b2a.woff",import.meta.url).href+') format("woff"),url('+new URL("la-solid-900.07ce3559.ttf",import.meta.url).href+') format("truetype"),url('+new URL("la-solid-900.0ce0cc40.svg#lineawesome",import.meta.url).href+`) format("svg")}.la,.las{font-family:Line Awesome Free;font-weight:900}.la.la-glass:before{content:"\\f000"}.la.la-meetup{font-family:Line Awesome Brands;font-weight:400}.la.la-star-o{font-family:Line Awesome Free;font-weight:400}.la.la-star-o:before{content:"\\f005"}.la.la-remove:before{content:"\\f00d"}.la.la-close:before{content:"\\f00d"}.la.la-gear:before{content:"\\f013"}.la.la-trash-o{font-family:Line Awesome Free;font-weight:400}.la.la-trash-o:before{content:"\\f2ed"}.la.la-file-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-o:before{content:"\\f15b"}.la.la-clock-o{font-family:Line Awesome Free;font-weight:400}.la.la-clock-o:before{content:"\\f017"}.la.la-arrow-circle-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-down:before{content:"\\f358"}.la.la-arrow-circle-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-up:before{content:"\\f35b"}.la.la-play-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-play-circle-o:before{content:"\\f144"}.la.la-repeat:before{content:"\\f01e"}.la.la-rotate-right:before{content:"\\f01e"}.la.la-refresh:before{content:"\\f021"}.la.la-list-alt{font-family:Line Awesome Free;font-weight:400}.la.la-dedent:before{content:"\\f03b"}.la.la-video-camera:before{content:"\\f03d"}.la.la-picture-o{font-family:Line Awesome Free;font-weight:400}.la.la-picture-o:before{content:"\\f03e"}.la.la-photo{font-family:Line Awesome Free;font-weight:400}.la.la-photo:before{content:"\\f03e"}.la.la-image{font-family:Line Awesome Free;font-weight:400}.la.la-image:before{content:"\\f03e"}.la.la-pencil:before{content:"\\f303"}.la.la-map-marker:before{content:"\\f3c5"}.la.la-pencil-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-pencil-square-o:before{content:"\\f044"}.la.la-share-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-share-square-o:before{content:"\\f14d"}.la.la-check-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-check-square-o:before{content:"\\f14a"}.la.la-arrows:before{content:"\\f0b2"}.la.la-times-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-times-circle-o:before{content:"\\f057"}.la.la-check-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-check-circle-o:before{content:"\\f058"}.la.la-mail-forward:before{content:"\\f064"}.la.la-eye,.la.la-eye-slash{font-family:Line Awesome Free;font-weight:400}.la.la-warning:before{content:"\\f071"}.la.la-calendar:before{content:"\\f073"}.la.la-arrows-v:before{content:"\\f338"}.la.la-arrows-h:before{content:"\\f337"}.la.la-bar-chart{font-family:Line Awesome Free;font-weight:400}.la.la-bar-chart:before{content:"\\f080"}.la.la-bar-chart-o{font-family:Line Awesome Free;font-weight:400}.la.la-bar-chart-o:before{content:"\\f080"}.la.la-twitter-square,.la.la-facebook-square{font-family:Line Awesome Brands;font-weight:400}.la.la-gears:before{content:"\\f085"}.la.la-thumbs-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-thumbs-o-up:before{content:"\\f164"}.la.la-thumbs-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-thumbs-o-down:before{content:"\\f165"}.la.la-heart-o{font-family:Line Awesome Free;font-weight:400}.la.la-heart-o:before{content:"\\f004"}.la.la-sign-out:before{content:"\\f2f5"}.la.la-linkedin-square{font-family:Line Awesome Brands;font-weight:400}.la.la-linkedin-square:before{content:"\\f08c"}.la.la-thumb-tack:before{content:"\\f08d"}.la.la-external-link:before{content:"\\f35d"}.la.la-sign-in:before{content:"\\f2f6"}.la.la-github-square{font-family:Line Awesome Brands;font-weight:400}.la.la-lemon-o{font-family:Line Awesome Free;font-weight:400}.la.la-lemon-o:before{content:"\\f094"}.la.la-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-square-o:before{content:"\\f0c8"}.la.la-bookmark-o{font-family:Line Awesome Free;font-weight:400}.la.la-bookmark-o:before{content:"\\f02e"}.la.la-twitter,.la.la-facebook{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook:before{content:"\\f39e"}.la.la-facebook-f{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook-f:before{content:"\\f39e"}.la.la-github{font-family:Line Awesome Brands;font-weight:400}.la.la-credit-card{font-family:Line Awesome Free;font-weight:400}.la.la-feed:before{content:"\\f09e"}.la.la-hdd-o{font-family:Line Awesome Free;font-weight:400}.la.la-hdd-o:before{content:"\\f0a0"}.la.la-hand-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-right:before{content:"\\f0a4"}.la.la-hand-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-left:before{content:"\\f0a5"}.la.la-hand-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-up:before{content:"\\f0a6"}.la.la-hand-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-down:before{content:"\\f0a7"}.la.la-arrows-alt:before{content:"\\f31e"}.la.la-group:before{content:"\\f0c0"}.la.la-chain:before{content:"\\f0c1"}.la.la-scissors:before{content:"\\f0c4"}.la.la-files-o{font-family:Line Awesome Free;font-weight:400}.la.la-files-o:before{content:"\\f0c5"}.la.la-floppy-o{font-family:Line Awesome Free;font-weight:400}.la.la-floppy-o:before{content:"\\f0c7"}.la.la-navicon:before{content:"\\f0c9"}.la.la-reorder:before{content:"\\f0c9"}.la.la-pinterest,.la.la-pinterest-square,.la.la-google-plus-square,.la.la-google-plus{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus:before{content:"\\f0d5"}.la.la-money{font-family:Line Awesome Free;font-weight:400}.la.la-money:before{content:"\\f3d1"}.la.la-unsorted:before{content:"\\f0dc"}.la.la-sort-desc:before{content:"\\f0dd"}.la.la-sort-asc:before{content:"\\f0de"}.la.la-linkedin{font-family:Line Awesome Brands;font-weight:400}.la.la-linkedin:before{content:"\\f0e1"}.la.la-rotate-left:before{content:"\\f0e2"}.la.la-legal:before{content:"\\f0e3"}.la.la-tachometer:before{content:"\\f3fd"}.la.la-dashboard:before{content:"\\f3fd"}.la.la-comment-o{font-family:Line Awesome Free;font-weight:400}.la.la-comment-o:before{content:"\\f075"}.la.la-comments-o{font-family:Line Awesome Free;font-weight:400}.la.la-comments-o:before{content:"\\f086"}.la.la-flash:before{content:"\\f0e7"}.la.la-clipboard,.la.la-paste{font-family:Line Awesome Free;font-weight:400}.la.la-paste:before{content:"\\f328"}.la.la-lightbulb-o{font-family:Line Awesome Free;font-weight:400}.la.la-lightbulb-o:before{content:"\\f0eb"}.la.la-exchange:before{content:"\\f362"}.la.la-cloud-download:before{content:"\\f381"}.la.la-cloud-upload:before{content:"\\f382"}.la.la-bell-o{font-family:Line Awesome Free;font-weight:400}.la.la-bell-o:before{content:"\\f0f3"}.la.la-cutlery:before{content:"\\f2e7"}.la.la-file-text-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-text-o:before{content:"\\f15c"}.la.la-building-o{font-family:Line Awesome Free;font-weight:400}.la.la-building-o:before{content:"\\f1ad"}.la.la-hospital-o{font-family:Line Awesome Free;font-weight:400}.la.la-hospital-o:before{content:"\\f0f8"}.la.la-tablet:before{content:"\\f3fa"}.la.la-mobile:before{content:"\\f3cd"}.la.la-mobile-phone:before{content:"\\f3cd"}.la.la-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-circle-o:before{content:"\\f111"}.la.la-mail-reply:before{content:"\\f3e5"}.la.la-github-alt{font-family:Line Awesome Brands;font-weight:400}.la.la-folder-o{font-family:Line Awesome Free;font-weight:400}.la.la-folder-o:before{content:"\\f07b"}.la.la-folder-open-o{font-family:Line Awesome Free;font-weight:400}.la.la-folder-open-o:before{content:"\\f07c"}.la.la-smile-o{font-family:Line Awesome Free;font-weight:400}.la.la-smile-o:before{content:"\\f118"}.la.la-frown-o{font-family:Line Awesome Free;font-weight:400}.la.la-frown-o:before{content:"\\f119"}.la.la-meh-o{font-family:Line Awesome Free;font-weight:400}.la.la-meh-o:before{content:"\\f11a"}.la.la-keyboard-o{font-family:Line Awesome Free;font-weight:400}.la.la-keyboard-o:before{content:"\\f11c"}.la.la-flag-o{font-family:Line Awesome Free;font-weight:400}.la.la-flag-o:before{content:"\\f024"}.la.la-mail-reply-all:before{content:"\\f122"}.la.la-star-half-o{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-o:before{content:"\\f089"}.la.la-star-half-empty{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-empty:before{content:"\\f089"}.la.la-star-half-full{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-full:before{content:"\\f089"}.la.la-code-fork:before{content:"\\f126"}.la.la-chain-broken:before{content:"\\f127"}.la.la-shield:before{content:"\\f3ed"}.la.la-calendar-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-o:before{content:"\\f133"}.la.la-maxcdn,.la.la-html5,.la.la-css3{font-family:Line Awesome Brands;font-weight:400}.la.la-ticket:before{content:"\\f3ff"}.la.la-minus-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-minus-square-o:before{content:"\\f146"}.la.la-level-up:before{content:"\\f3bf"}.la.la-level-down:before{content:"\\f3be"}.la.la-pencil-square:before{content:"\\f14b"}.la.la-external-link-square:before{content:"\\f360"}.la.la-compass,.la.la-caret-square-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-down:before{content:"\\f150"}.la.la-toggle-down{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-down:before{content:"\\f150"}.la.la-caret-square-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-up:before{content:"\\f151"}.la.la-toggle-up{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-up:before{content:"\\f151"}.la.la-caret-square-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-right:before{content:"\\f152"}.la.la-toggle-right{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-right:before{content:"\\f152"}.la.la-eur:before{content:"\\f153"}.la.la-euro:before{content:"\\f153"}.la.la-gbp:before{content:"\\f154"}.la.la-usd:before{content:"\\f155"}.la.la-dollar:before{content:"\\f155"}.la.la-inr:before{content:"\\f156"}.la.la-rupee:before{content:"\\f156"}.la.la-jpy:before{content:"\\f157"}.la.la-cny:before{content:"\\f157"}.la.la-rmb:before{content:"\\f157"}.la.la-yen:before{content:"\\f157"}.la.la-rub:before{content:"\\f158"}.la.la-ruble:before{content:"\\f158"}.la.la-rouble:before{content:"\\f158"}.la.la-krw:before{content:"\\f159"}.la.la-won:before{content:"\\f159"}.la.la-btc,.la.la-bitcoin{font-family:Line Awesome Brands;font-weight:400}.la.la-bitcoin:before{content:"\\f15a"}.la.la-file-text:before{content:"\\f15c"}.la.la-sort-alpha-asc:before{content:"\\f15d"}.la.la-sort-alpha-desc:before{content:"\\f881"}.la.la-sort-amount-asc:before{content:"\\f160"}.la.la-sort-amount-desc:before{content:"\\f884"}.la.la-sort-numeric-asc:before{content:"\\f162"}.la.la-sort-numeric-desc:before{content:"\\f886"}.la.la-youtube-square,.la.la-youtube,.la.la-xing,.la.la-xing-square,.la.la-youtube-play{font-family:Line Awesome Brands;font-weight:400}.la.la-youtube-play:before{content:"\\f167"}.la.la-dropbox,.la.la-stack-overflow,.la.la-instagram,.la.la-flickr,.la.la-adn,.la.la-bitbucket,.la.la-bitbucket-square{font-family:Line Awesome Brands;font-weight:400}.la.la-bitbucket-square:before{content:"\\f171"}.la.la-tumblr,.la.la-tumblr-square{font-family:Line Awesome Brands;font-weight:400}.la.la-long-arrow-down:before{content:"\\f309"}.la.la-long-arrow-up:before{content:"\\f30c"}.la.la-long-arrow-left:before{content:"\\f30a"}.la.la-long-arrow-right:before{content:"\\f30b"}.la.la-apple,.la.la-windows,.la.la-android,.la.la-linux,.la.la-dribbble,.la.la-skype,.la.la-foursquare,.la.la-trello,.la.la-gratipay,.la.la-gittip{font-family:Line Awesome Brands;font-weight:400}.la.la-gittip:before{content:"\\f184"}.la.la-sun-o{font-family:Line Awesome Free;font-weight:400}.la.la-sun-o:before{content:"\\f185"}.la.la-moon-o{font-family:Line Awesome Free;font-weight:400}.la.la-moon-o:before{content:"\\f186"}.la.la-vk,.la.la-weibo,.la.la-renren,.la.la-pagelines,.la.la-stack-exchange{font-family:Line Awesome Brands;font-weight:400}.la.la-arrow-circle-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-right:before{content:"\\f35a"}.la.la-arrow-circle-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-left:before{content:"\\f359"}.la.la-caret-square-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-left:before{content:"\\f191"}.la.la-toggle-left{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-left:before{content:"\\f191"}.la.la-dot-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-dot-circle-o:before{content:"\\f192"}.la.la-vimeo-square{font-family:Line Awesome Brands;font-weight:400}.la.la-try:before{content:"\\f195"}.la.la-turkish-lira:before{content:"\\f195"}.la.la-plus-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-plus-square-o:before{content:"\\f0fe"}.la.la-slack,.la.la-wordpress,.la.la-openid{font-family:Line Awesome Brands;font-weight:400}.la.la-institution:before{content:"\\f19c"}.la.la-bank:before{content:"\\f19c"}.la.la-mortar-board:before{content:"\\f19d"}.la.la-yahoo,.la.la-google,.la.la-reddit,.la.la-reddit-square,.la.la-stumbleupon-circle,.la.la-stumbleupon,.la.la-delicious,.la.la-digg,.la.la-pied-piper-pp,.la.la-pied-piper-alt,.la.la-drupal,.la.la-joomla{font-family:Line Awesome Brands;font-weight:400}.la.la-spoon:before{content:"\\f2e5"}.la.la-behance,.la.la-behance-square,.la.la-steam,.la.la-steam-square{font-family:Line Awesome Brands;font-weight:400}.la.la-automobile:before{content:"\\f1b9"}.la.la-cab:before{content:"\\f1ba"}.la.la-envelope-o{font-family:Line Awesome Free;font-weight:400}.la.la-envelope-o:before{content:"\\f0e0"}.la.la-deviantart,.la.la-soundcloud{font-family:Line Awesome Brands;font-weight:400}.la.la-file-pdf-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-pdf-o:before{content:"\\f1c1"}.la.la-file-word-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-word-o:before{content:"\\f1c2"}.la.la-file-excel-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-excel-o:before{content:"\\f1c3"}.la.la-file-powerpoint-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-powerpoint-o:before{content:"\\f1c4"}.la.la-file-image-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-image-o:before{content:"\\f1c5"}.la.la-file-photo-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-photo-o:before{content:"\\f1c5"}.la.la-file-picture-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-picture-o:before{content:"\\f1c5"}.la.la-file-archive-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-archive-o:before{content:"\\f1c6"}.la.la-file-zip-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-zip-o:before{content:"\\f1c6"}.la.la-file-audio-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-audio-o:before{content:"\\f1c7"}.la.la-file-sound-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-sound-o:before{content:"\\f1c7"}.la.la-file-video-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-video-o:before{content:"\\f1c8"}.la.la-file-movie-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-movie-o:before{content:"\\f1c8"}.la.la-file-code-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-code-o:before{content:"\\f1c9"}.la.la-vine,.la.la-codepen,.la.la-jsfiddle{font-family:Line Awesome Brands;font-weight:400}.la.la-life-ring,.la.la-life-bouy{font-family:Line Awesome Free;font-weight:400}.la.la-life-bouy:before{content:"\\f1cd"}.la.la-life-buoy{font-family:Line Awesome Free;font-weight:400}.la.la-life-buoy:before{content:"\\f1cd"}.la.la-life-saver{font-family:Line Awesome Free;font-weight:400}.la.la-life-saver:before{content:"\\f1cd"}.la.la-support{font-family:Line Awesome Free;font-weight:400}.la.la-support:before{content:"\\f1cd"}.la.la-circle-o-notch:before{content:"\\f1ce"}.la.la-rebel,.la.la-ra{font-family:Line Awesome Brands;font-weight:400}.la.la-ra:before{content:"\\f1d0"}.la.la-resistance{font-family:Line Awesome Brands;font-weight:400}.la.la-resistance:before{content:"\\f1d0"}.la.la-empire,.la.la-ge{font-family:Line Awesome Brands;font-weight:400}.la.la-ge:before{content:"\\f1d1"}.la.la-git-square,.la.la-git,.la.la-hacker-news,.la.la-y-combinator-square{font-family:Line Awesome Brands;font-weight:400}.la.la-y-combinator-square:before{content:"\\f1d4"}.la.la-yc-square{font-family:Line Awesome Brands;font-weight:400}.la.la-yc-square:before{content:"\\f1d4"}.la.la-tencent-weibo,.la.la-qq,.la.la-weixin,.la.la-wechat{font-family:Line Awesome Brands;font-weight:400}.la.la-wechat:before{content:"\\f1d7"}.la.la-send:before{content:"\\f1d8"}.la.la-paper-plane-o{font-family:Line Awesome Free;font-weight:400}.la.la-paper-plane-o:before{content:"\\f1d8"}.la.la-send-o{font-family:Line Awesome Free;font-weight:400}.la.la-send-o:before{content:"\\f1d8"}.la.la-circle-thin{font-family:Line Awesome Free;font-weight:400}.la.la-circle-thin:before{content:"\\f111"}.la.la-header:before{content:"\\f1dc"}.la.la-sliders:before{content:"\\f1de"}.la.la-futbol-o{font-family:Line Awesome Free;font-weight:400}.la.la-futbol-o:before{content:"\\f1e3"}.la.la-soccer-ball-o{font-family:Line Awesome Free;font-weight:400}.la.la-soccer-ball-o:before{content:"\\f1e3"}.la.la-slideshare,.la.la-twitch,.la.la-yelp{font-family:Line Awesome Brands;font-weight:400}.la.la-newspaper-o{font-family:Line Awesome Free;font-weight:400}.la.la-newspaper-o:before{content:"\\f1ea"}.la.la-paypal,.la.la-google-wallet,.la.la-cc-visa,.la.la-cc-mastercard,.la.la-cc-discover,.la.la-cc-amex,.la.la-cc-paypal,.la.la-cc-stripe{font-family:Line Awesome Brands;font-weight:400}.la.la-bell-slash-o{font-family:Line Awesome Free;font-weight:400}.la.la-bell-slash-o:before{content:"\\f1f6"}.la.la-trash:before{content:"\\f2ed"}.la.la-copyright{font-family:Line Awesome Free;font-weight:400}.la.la-eyedropper:before{content:"\\f1fb"}.la.la-area-chart:before{content:"\\f1fe"}.la.la-pie-chart:before{content:"\\f200"}.la.la-line-chart:before{content:"\\f201"}.la.la-lastfm,.la.la-lastfm-square,.la.la-ioxhost,.la.la-angellist{font-family:Line Awesome Brands;font-weight:400}.la.la-cc{font-family:Line Awesome Free;font-weight:400}.la.la-cc:before{content:"\\f20a"}.la.la-ils:before{content:"\\f20b"}.la.la-shekel:before{content:"\\f20b"}.la.la-sheqel:before{content:"\\f20b"}.la.la-meanpath{font-family:Line Awesome Brands;font-weight:400}.la.la-meanpath:before{content:"\\f2b4"}.la.la-buysellads,.la.la-connectdevelop,.la.la-dashcube,.la.la-forumbee,.la.la-leanpub,.la.la-sellsy,.la.la-shirtsinbulk,.la.la-simplybuilt,.la.la-skyatlas{font-family:Line Awesome Brands;font-weight:400}.la.la-diamond{font-family:Line Awesome Free;font-weight:400}.la.la-diamond:before{content:"\\f3a5"}.la.la-intersex:before{content:"\\f224"}.la.la-facebook-official{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook-official:before{content:"\\f09a"}.la.la-pinterest-p,.la.la-whatsapp{font-family:Line Awesome Brands;font-weight:400}.la.la-hotel:before{content:"\\f236"}.la.la-viacoin,.la.la-medium,.la.la-y-combinator,.la.la-yc{font-family:Line Awesome Brands;font-weight:400}.la.la-yc:before{content:"\\f23b"}.la.la-optin-monster,.la.la-opencart,.la.la-expeditedssl{font-family:Line Awesome Brands;font-weight:400}.la.la-battery-4:before{content:"\\f240"}.la.la-battery:before{content:"\\f240"}.la.la-battery-3:before{content:"\\f241"}.la.la-battery-2:before{content:"\\f242"}.la.la-battery-1:before{content:"\\f243"}.la.la-battery-0:before{content:"\\f244"}.la.la-object-group,.la.la-object-ungroup,.la.la-sticky-note-o{font-family:Line Awesome Free;font-weight:400}.la.la-sticky-note-o:before{content:"\\f249"}.la.la-cc-jcb,.la.la-cc-diners-club{font-family:Line Awesome Brands;font-weight:400}.la.la-clone,.la.la-hourglass-o{font-family:Line Awesome Free;font-weight:400}.la.la-hourglass-o:before{content:"\\f254"}.la.la-hourglass-1:before{content:"\\f251"}.la.la-hourglass-2:before{content:"\\f252"}.la.la-hourglass-3:before{content:"\\f253"}.la.la-hand-rock-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-rock-o:before{content:"\\f255"}.la.la-hand-grab-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-grab-o:before{content:"\\f255"}.la.la-hand-paper-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-paper-o:before{content:"\\f256"}.la.la-hand-stop-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-stop-o:before{content:"\\f256"}.la.la-hand-scissors-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-scissors-o:before{content:"\\f257"}.la.la-hand-lizard-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-lizard-o:before{content:"\\f258"}.la.la-hand-spock-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-spock-o:before{content:"\\f259"}.la.la-hand-pointer-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-pointer-o:before{content:"\\f25a"}.la.la-hand-peace-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-peace-o:before{content:"\\f25b"}.la.la-registered{font-family:Line Awesome Free;font-weight:400}.la.la-creative-commons,.la.la-gg,.la.la-gg-circle,.la.la-tripadvisor,.la.la-odnoklassniki,.la.la-odnoklassniki-square,.la.la-get-pocket,.la.la-wikipedia-w,.la.la-safari,.la.la-chrome,.la.la-firefox,.la.la-opera,.la.la-internet-explorer{font-family:Line Awesome Brands;font-weight:400}.la.la-television:before{content:"\\f26c"}.la.la-contao,.la.la-500px,.la.la-amazon{font-family:Line Awesome Brands;font-weight:400}.la.la-calendar-plus-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-plus-o:before{content:"\\f271"}.la.la-calendar-minus-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-minus-o:before{content:"\\f272"}.la.la-calendar-times-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-times-o:before{content:"\\f273"}.la.la-calendar-check-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-check-o:before{content:"\\f274"}.la.la-map-o{font-family:Line Awesome Free;font-weight:400}.la.la-map-o:before{content:"\\f279"}.la.la-commenting:before{content:"\\f4ad"}.la.la-commenting-o{font-family:Line Awesome Free;font-weight:400}.la.la-commenting-o:before{content:"\\f4ad"}.la.la-houzz,.la.la-vimeo{font-family:Line Awesome Brands;font-weight:400}.la.la-vimeo:before{content:"\\f27d"}.la.la-black-tie,.la.la-fonticons,.la.la-reddit-alien,.la.la-edge{font-family:Line Awesome Brands;font-weight:400}.la.la-credit-card-alt:before{content:"\\f09d"}.la.la-codiepie,.la.la-modx,.la.la-fort-awesome,.la.la-usb,.la.la-product-hunt,.la.la-mixcloud,.la.la-scribd{font-family:Line Awesome Brands;font-weight:400}.la.la-pause-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-pause-circle-o:before{content:"\\f28b"}.la.la-stop-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-stop-circle-o:before{content:"\\f28d"}.la.la-bluetooth,.la.la-bluetooth-b,.la.la-gitlab,.la.la-wpbeginner,.la.la-wpforms,.la.la-envira,.la.la-wheelchair-alt{font-family:Line Awesome Brands;font-weight:400}.la.la-wheelchair-alt:before{content:"\\f368"}.la.la-question-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-question-circle-o:before{content:"\\f059"}.la.la-volume-control-phone:before{content:"\\f2a0"}.la.la-asl-interpreting:before{content:"\\f2a3"}.la.la-deafness:before{content:"\\f2a4"}.la.la-hard-of-hearing:before{content:"\\f2a4"}.la.la-glide,.la.la-glide-g{font-family:Line Awesome Brands;font-weight:400}.la.la-signing:before{content:"\\f2a7"}.la.la-viadeo,.la.la-viadeo-square,.la.la-snapchat,.la.la-snapchat-ghost,.la.la-snapchat-square,.la.la-pied-piper,.la.la-first-order,.la.la-yoast,.la.la-themeisle,.la.la-google-plus-official{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus-official:before{content:"\\f2b3"}.la.la-google-plus-circle{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus-circle:before{content:"\\f2b3"}.la.la-font-awesome,.la.la-fa{font-family:Line Awesome Brands;font-weight:400}.la.la-fa:before{content:"\\f2b4"}.la.la-handshake-o{font-family:Line Awesome Free;font-weight:400}.la.la-handshake-o:before{content:"\\f2b5"}.la.la-envelope-open-o{font-family:Line Awesome Free;font-weight:400}.la.la-envelope-open-o:before{content:"\\f2b6"}.la.la-linode{font-family:Line Awesome Brands;font-weight:400}.la.la-address-book-o{font-family:Line Awesome Free;font-weight:400}.la.la-address-book-o:before{content:"\\f2b9"}.la.la-vcard:before{content:"\\f2bb"}.la.la-address-card-o{font-family:Line Awesome Free;font-weight:400}.la.la-address-card-o:before{content:"\\f2bb"}.la.la-vcard-o{font-family:Line Awesome Free;font-weight:400}.la.la-vcard-o:before{content:"\\f2bb"}.la.la-user-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-user-circle-o:before{content:"\\f2bd"}.la.la-user-o{font-family:Line Awesome Free;font-weight:400}.la.la-user-o:before{content:"\\f007"}.la.la-id-badge{font-family:Line Awesome Free;font-weight:400}.la.la-drivers-license:before{content:"\\f2c2"}.la.la-id-card-o{font-family:Line Awesome Free;font-weight:400}.la.la-id-card-o:before{content:"\\f2c2"}.la.la-drivers-license-o{font-family:Line Awesome Free;font-weight:400}.la.la-drivers-license-o:before{content:"\\f2c2"}.la.la-quora,.la.la-free-code-camp,.la.la-telegram{font-family:Line Awesome Brands;font-weight:400}.la.la-thermometer-4:before{content:"\\f2c7"}.la.la-thermometer:before{content:"\\f2c7"}.la.la-thermometer-3:before{content:"\\f2c8"}.la.la-thermometer-2:before{content:"\\f2c9"}.la.la-thermometer-1:before{content:"\\f2ca"}.la.la-thermometer-0:before{content:"\\f2cb"}.la.la-bathtub:before{content:"\\f2cd"}.la.la-s15:before{content:"\\f2cd"}.la.la-window-maximize,.la.la-window-restore{font-family:Line Awesome Free;font-weight:400}.la.la-times-rectangle:before{content:"\\f410"}.la.la-window-close-o{font-family:Line Awesome Free;font-weight:400}.la.la-window-close-o:before{content:"\\f410"}.la.la-times-rectangle-o{font-family:Line Awesome Free;font-weight:400}.la.la-times-rectangle-o:before{content:"\\f410"}.la.la-bandcamp,.la.la-grav,.la.la-etsy,.la.la-imdb,.la.la-ravelry,.la.la-eercast{font-family:Line Awesome Brands;font-weight:400}.la.la-eercast:before{content:"\\f2da"}.la.la-snowflake-o{font-family:Line Awesome Free;font-weight:400}.la.la-snowflake-o:before{content:"\\f2dc"}.la.la-superpowers,.la.la-wpexplorer,.la.la-spotify{font-family:Line Awesome Brands;font-weight:400}.email{font-size:var(--lumo-font-size-s)}.bold{font-weight:700}.lastUpdated{padding:1vw}
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ib=Z`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon,
  [theme~='badge'] iron-icon {
    margin: -0.25em 0;
    --iron-icon-width: 1.5em;
    --iron-icon-height: 1.5em;
  }

  [theme~='badge'] vaadin-icon:first-child,
  [theme~='badge'] iron-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child,
  [theme~='badge'] iron-icon:last-child {
    margin-right: -0.375em;
  }

  iron-icon[theme~='badge'][icon],
  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  iron-icon[theme~='badge'][icon][theme~='small'],
  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child,
  [dir='rtl'][theme~='badge'] iron-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child,
  [dir='rtl'][theme~='badge'] iron-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;he("",Ib,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const eS=Z`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tS=Z`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nS=Z`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px solid;
  }
  .border-b {
    border-bottom: 1px solid;
  }
  .border-l {
    border-left: 1px solid;
  }
  .border-r {
    border-right: 1px solid;
  }
  .border-t {
    border-top: 1px solid;
  }

  /* === Border color === */
  .border-contrast-5 {
    border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    border-color: var(--lumo-contrast);
  }

  .border-primary {
    border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    border-color: var(--lumo-success-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rS=Z`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oS=Z`
  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .grid {
    display: grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex {
      display: flex;
    }
    .lg\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex {
      display: flex;
    }
    .xl\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:hidden {
      display: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const iS=Z`
  /* === Box shadows === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const aS=Z`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lS=Z`
  /* === Margin === */
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }

  /* === Margin (bottom) === */
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }

  /* === Margin (end) === */
  .me-auto {
    margin-inline-end: auto;
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }

  /* === Margin (horizontal) === */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-xs {
    margin-left: var(--lumo-space-xs);
    margin-right: var(--lumo-space-xs);
  }
  .mx-s {
    margin-left: var(--lumo-space-s);
    margin-right: var(--lumo-space-s);
  }
  .mx-m {
    margin-left: var(--lumo-space-m);
    margin-right: var(--lumo-space-m);
  }
  .mx-l {
    margin-left: var(--lumo-space-l);
    margin-right: var(--lumo-space-l);
  }
  .mx-xl {
    margin-left: var(--lumo-space-xl);
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (left) === */
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }

  /* === Margin (right) === */
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (start) === */
  .ms-auto {
    margin-inline-start: auto;
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }

  /* === Margin (top) === */
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }

  /* === Margin (vertical) === */
  .my-auto {
    margin-bottom: auto;
    margin-top: auto;
  }
  .my-0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .my-xs {
    margin-bottom: var(--lumo-space-xs);
    margin-top: var(--lumo-space-xs);
  }
  .my-s {
    margin-bottom: var(--lumo-space-s);
    margin-top: var(--lumo-space-s);
  }
  .my-m {
    margin-bottom: var(--lumo-space-m);
    margin-top: var(--lumo-space-m);
  }
  .my-l {
    margin-bottom: var(--lumo-space-l);
    margin-top: var(--lumo-space-l);
  }
  .my-xl {
    margin-bottom: var(--lumo-space-xl);
    margin-top: var(--lumo-space-xl);
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sS=Z`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zb=Z`
${eS}
${tS}
${nS}
${iS}
${rS}
${oS}
${aS}
${lS}
${sS}
`;he("",zb,{moduleId:"lumo-utility"});const cS=(t,e)=>{const n=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(t)!=null&&(t=JE(t));for(var r,o=t;(r=n.exec(t))!==null;){o=o.replace(r[0],"");const i=document.createElement("link");i.rel="stylesheet",i.href=r[2]||r[4];const a=r[1]||r[5];a&&(i.media=a),e===document?document.head.appendChild(i):e.appendChild(i)}return o},Mr=(t,e,n)=>{if(e===document){const o=dS(t);if(window.Vaadin.theme.injectedGlobalCss.indexOf(o)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(o)}const r=new CSSStyleSheet;r.replaceSync(cS(t,e)),n?e.adoptedStyleSheets=[r,...e.adoptedStyleSheets]:e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function wp(t){let e,n,r=2166136261;for(e=0,n=t.length;e<n;e++)r^=t.charCodeAt(e),r+=(r<<1)+(r<<4)+(r<<7)+(r<<8)+(r<<24);return("0000000"+(r>>>0).toString(16)).substr(-8)}function dS(t){let e=wp(t);return e+wp(e+t)}const uS=t=>{Mr(ZE.toString(),t),document._vaadintheme_birdnest_componentCss||(document._vaadintheme_birdnest_componentCss=!0),Mr(d_.cssText,t,!0),Mr(yu.cssText,t,!0),Mr(l_.cssText,t,!0),Mr(Ib.cssText,t,!0),Mr(zb.cssText,t,!0)},fS=uS;fS(document);export{Ws as H,j as a,qe as j};
