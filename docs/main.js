!function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],f=0,h=[];f<s.length;f++)a=s[f],i[a]&&h.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);h.length;)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={0:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([32,1]),n()}({25:function(t,e,n){var r=n(26);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(t.exports=r.locals)},26:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".help-block {\r\n  transform-origin: center left;\r\n}\r\n\r\n.message-enter {\r\n  opacity: 0.01;\r\n  transform: scale(0.9) translateY(50%);\r\n}\r\n.message-enter-active {\r\n  opacity: 1;\r\n  transform: scale(1) translateY(0%);\r\n  transition: all 300ms ease-out;\r\n}\r\n.message-exit {\r\n  opacity: 1;\r\n  transform: scale(1) translateY(0%);\r\n}\r\n.message-exit-active {\r\n  opacity: 0.01;\r\n  transform: scale(0.9) translateY(50%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.star {\r\n  display: inline-block;\r\n  margin-left: 0.5rem;\r\n  transform: scale(1.25);\r\n}\r\n.star-enter {\r\n  opacity: 0.01;\r\n  transform: translateY(-100%) scale(0.75);\r\n}\r\n.star-enter-active {\r\n  opacity: 1;\r\n  transform: translateY(0%) scale(1.25);\r\n  transition: all 300ms ease-out;\r\n}\r\n.star-exit {\r\n  opacity: 1;\r\n  transform: scale(1.25);\r\n}\r\n.star-exit-active {\r\n  opacity: 0;\r\n  transform: scale(4);\r\n  transition: all 300ms ease-in;\r\n}\r\n",""])},28:function(t,e,n){var r=n(29);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(t.exports=r.locals)},29:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".container {\r\n  max-width: 24rem;\r\n  margin: 1rem auto;\r\n  padding: 2rem;\r\n  border: 1px solid #ccc;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.remove-btn {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.fade-enter {\r\n  opacity: 0.01;\r\n}\r\n.fade-enter-active {\r\n  opacity: 1;\r\n  transition: opacity 500ms ease-in;\r\n}\r\n.fade-exit {\r\n  opacity: 1;\r\n}\r\n.fade-exit-active {\r\n  opacity: 0.01;\r\n  transition: opacity 500ms ease-in;\r\n}",""])},30:function(t,e,n){var r=n(31);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(t.exports=r.locals)},31:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".list-item {\r\n  padding: 10px;\r\n  margin: 5px;\r\n  width: 120px;\r\n  height: 120px;\r\n  display: inline-block;\r\n}\r\n\r\n/* Transition */\r\n.slide-up-appear {\r\n  opacity: 0;\r\n  transform: translateY(100px);\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.slide-up-appear-active {\r\n  opacity: 1;\r\n  transform: translateY(0px);\r\n}\r\n",""])},32:function(t,e,n){"use strict";function r(t){return null!=t&&"function"==typeof t.Dispose}n.r(e);function i(t){const e=t;return"number"==typeof e.offset?e.offset:1===t.kind?0:-6e4*t.getTimezoneOffset()}function o(t,e){return(t=t<0&&null!=e&&10!==e?4294967295+t+1:t).toString(e)}class a{static id(t){return a.idMap.has(t)||a.idMap.set(t,++a.count),a.idMap.get(t)}}function s(t){let e=0,n=5381;const r=t.length;for(;e<r;)n=33*n^t.charCodeAt(e++);return n}function u(t){return 2654435761*t|0}function c(t){return 0===t.length?0:t.reduce((t,e)=>(t<<5)+t^e)}function l(t){if(null==t)return 0;switch(typeof t){case"boolean":return t?1:0;case"number":return u(t);case"string":return s(t);default:if("function"==typeof t.GetHashCode)return t.GetHashCode();if(f(t)){const e=t,n=e.length,r=new Array(n);for(let t=0;t<n;t++)r[t]=l(e[t]);return c(r)}return s(String(t))}}function f(t){return Array.isArray(t)||ArrayBuffer.isView(t)}function h(t,e,n){if(null==t)return null==e;if(null==e)return!1;if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!n(t[r],e[r]))return!1;return!0}function d(t,e){return h(t,e,p)}function p(t,e){return t===e||(null==t?null==e:null!=e&&("object"==typeof t&&("function"==typeof t.Equals?t.Equals(e):f(t)?f(e)&&d(t,e):t instanceof Date&&(e instanceof Date&&0===m(t,e)))))}function m(t,e){let n,r;return"offset"in t&&"offset"in e?(n=t.getTime(),r=e.getTime()):(n=t.getTime()+i(t),r=e.getTime()+i(e)),n===r?0:n<r?-1:1}function g(t,e,n){if(null==t)return null==e?0:1;if(null==e)return-1;if(t.length!==e.length)return t.length<e.length?-1:1;for(let r=0,i=0;r<t.length;r++)if(0!==(i=n(t[r],e[r])))return i;return 0}function w(t,e){return g(t,e,y)}function y(t,e){return t===e?0:null==t?null==e?0:-1:null==e?1:"object"!=typeof t?t<e?-1:1:"function"==typeof t.CompareTo?t.CompareTo(e):f(t)?f(e)&&w(t,e):t instanceof Date?e instanceof Date&&m(t,e):1}a.idMap=new WeakMap,a.count=0;const b={None:0,LowerFirst:1};function v(t,e){switch(e){case b.LowerFirst:return t.charAt(0).toLowerCase()+t.slice(1);case b.None:default:return t}}function S(t,e=b.None){function n(t){throw new Error("Cannot infer key and value of "+String(t))}const r={},i=e;for(let e of t){let t=b.None;if(null==e&&n(e),"function"==typeof e.toJSON&&(e=e.toJSON(),t=i),Array.isArray(e))switch(e.length){case 0:n(e);break;case 1:r[v(e[0],t)]=!0;break;case 2:const i=e[1];r[v(e[0],t)]=i;break;default:r[v(e[0],t)]=e.slice(1)}else"string"==typeof e?r[v(e,t)]=!0:n(e)}return r}function E(t){return f(t)?t.length:t.size}function x(t,e){return null!=e&&Object.getPrototypeOf(t).constructor===Object.getPrototypeOf(e).constructor}function N(t,e){return function(t,e){t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}(t,e||C),t}function C(){}function k(t,e){if(t===e)return 0;if(null==e)return-1;for(;null!=t.tail;){if(null==e.tail)return 1;const n=y(t.head,e.head);if(0!==n)return n;t=t.tail,e=e.tail}return null==e.tail?0:-1}function O(t,e){this.head=t,this.tail=e}function T(t,e,...n){this.tag=0|t,this.name=e,this.fields=n}function M(t,e){const n={},r=null==e?Object.keys(t):e(t);for(let e=0;e<r.length;e++)n[r[e]]=t[r[e]];return n}function j(t,e,n){if(t===e)return!0;if(x(t,e)){const r=null==n?Object.keys(t):n(t);for(let n=0;n<r.length;n++)if(!p(t[r[n]],e[r[n]]))return!1;return!0}return!1}function A(t,e,n){if(t===e)return 0;if(x(t,e)){const r=null==n?Object.keys(t):n(t);for(let n=0;n<r.length;n++){const i=y(t[r[n]],e[r[n]]);if(0!==i)return i}return 0}return-1}function _(){}C.prototype.toString=function(){return"{"+Object.keys(this).map(t=>t+" = "+String(this[t])).join(";\n ")+"}"},C.prototype.GetHashCode=function(){return function(t){if(null==t)return 0;switch(typeof t){case"boolean":return t?1:0;case"number":return u(t);case"string":return s(t);default:return u(a.id(t))}}(this)},C.prototype.Equals=function(t){return this===t},O.prototype.toString=function(){return"["+Array.from(this).map(t=>String(t)).join("; ")+"]"},O.prototype.toJSON=function(){return Array.from(this)},O.prototype[Symbol.iterator]=function(){let t=this;return{next:()=>{const e=t;return t=t.tail,{done:null==e.tail,value:e.head}}}},O.prototype.GetHashCode=function(){return c(Array.from(this).map(l))},O.prototype.Equals=function(t){return 0===k(this,t)},O.prototype.CompareTo=function(t){return k(this,t)},T.prototype.toString=function(){const t=this.fields.length;return 0===t?this.name:1===t?this.name+" "+String(this.fields[0]):this.name+" ("+this.fields.map(t=>String(t)).join(",")+")"},T.prototype.toJSON=function(){return 0===this.fields.length?this.name:[this.name].concat(this.fields)},T.prototype.GetHashCode=function(){let t=this.fields.map(t=>l(t));return t.splice(0,0,u(this.tag)),c(t)},T.prototype.Equals=function(t){return this===t||x(this,t)&&this.tag===t.tag&&d(this.fields,t.fields)},T.prototype.CompareTo=function(t){return this===t?0:x(this,t)?this.tag===t.tag?w(this.fields,t.fields):this.tag<t.tag?-1:1:-1},_.prototype.toString=function(){return"{"+Object.keys(this).map(t=>t+" = "+String(this[t])).join(";\n ")+"}"},_.prototype.toJSON=function(){return M(this)},_.prototype.GetHashCode=function(){return c(Object.keys(this).map(t=>l(this[t])))},_.prototype.Equals=function(t){return j(this,t)},_.prototype.CompareTo=function(t){return A(this,t)};N(function(t){this.contents=t},_);const G=N(function(t){this.stack=Error().stack,this.message=t});function I(t){return Object.keys(t).filter(t=>"message"!==t&&"stack"!==t)}const P=N(function(){G.call(this)},G);P.prototype.toString=function(){const t=I(this),e=t.length;return 0===e?this.message:1===e?this.message+" "+String(this[t[0]]):this.message+" ("+t.map(t=>String(this[t])).join(",")+")"},P.prototype.toJSON=function(){return M(this,I)},P.prototype.GetHashCode=function(){return c(I(this).map(t=>l(this[t])))},P.prototype.Equals=function(t){return j(this,t,I)},P.prototype.CompareTo=function(t){return A(this,t,I)};N(function(t,e,n){this.arg1=t,this.arg2=0|e,this.arg3=0|n,this.message="The match cases were incomplete"},P),N(function(){});class F{constructor(t,e,n,r,i){this.fullname=t,this.generics=e,this.constructor=n,this.fields=r,this.cases=i}toString(){return function t(e){const n=null==e.generics||J(e)?[]:e.generics;return n.length>0?e.fullname+"["+n.map(e=>t(e)).join(",")+"]":e.fullname}(this)}Equals(t){return D(this,t)}CompareTo(t){return q(this,t)}}function L(t){return null!=t.generics?t.generics:[]}function D(t,e){return t.fullname===e.fullname&&h(L(t),L(e),D)}function q(t,e){return t.fullname!==e.fullname?t.fullname<e.fullname?-1:1:g(L(t),L(e),q)}new F("System.Object"),new F("Microsoft.FSharp.Core.Unit"),new F("System.Char"),new F("System.String"),new F("System.Boolean"),new F("System.SByte"),new F("System.Byte"),new F("System.Int16"),new F("System.UInt16"),new F("System.Int32"),new F("System.UInt32"),new F("System.Single"),new F("System.Double"),new F("System.Decimal");function J(t){return t.fullname.endsWith("[]")}var V=n(0),H=n(1);N(function(t,e){this.enter=t,this.exit=e},_);const B=N(function(t,e,...n){T.call(this,t,e,...n)},T);N(function(t,e,n,r,i,o,a,s){this.appear=t,this.appearActive=e,this.enter=n,this.enterActive=r,this.enterDone=i,this.exit=o,this.exitActive=a,this.exitDone=s},_);const Y=N(function(t,e,...n){T.call(this,t,e,...n)},T);const R=N(function(t,e,...n){T.call(this,t,e,...n)},T);function U(t,e){const n=new O(new B(14,"Children",e),t);return V.createElement(H.Transition,S(n,1))}function W(t,e){const n=new O(new Y(14,"Children",e),t);return V.createElement(H.CSSTransition,S(n,1))}function z(t,e){const n=new O(new Y(14,"Children",e),t);return V.createElement(H.CSSTransition,S(n,1))}function X(t,e){return V.createElement(H.TransitionGroup,S(t,1),...e)}N(function(t,e,n){T.call(this,t,e,n)},T);N(function(t,e,n){T.call(this,t,e,n)},T);var K;!function(t){t[t.AllowHexSpecifier=512]="AllowHexSpecifier"}(K||(K={}));var Q=null;try{Q=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(t){}function Z(t,e,n){this.low=0|t,this.high=0|e,this.unsigned=!!n}Z.prototype.GetHashCode=function(){return c([this.unsigned?1:0,this.high,this.low])},Z.prototype.Equals=function(t){return kt(this,t)},Z.prototype.CompareTo=function(t){return jt(this,t)},Z.prototype.toString=function(t){return Et(this,t)},Z.prototype.toJSON=function(){return Et(this)};function $(t){return!0===(t&&t.__isLong__)}Z.prototype.__isLong__,Object.defineProperty(Z.prototype,"__isLong__",{value:!0});var tt={},et={};function nt(t,e){var n,r,i;return e?(i=0<=(t>>>=0)&&t<256)&&(r=et[t])?r:(n=it(t,(0|t)<0?-1:0,!0),i&&(et[t]=n),n):(i=-128<=(t|=0)&&t<128)&&(r=tt[t])?r:(n=it(t,t<0?-1:0,!1),i&&(tt[t]=n),n)}function rt(t,e){if(isNaN(t))return e?dt:ht;if(e){if(t<0)return dt;if(t>=ct)return yt}else{if(t<=-lt)return bt;if(t+1>=lt)return wt}return t<0?At(rt(-t,e)):it(t%ut|0,t/ut|0,e)}function it(t,e,n){return new Z(t,e,n)}var ot=Math.pow;function at(t,e,n){if(0===t.length)throw Error("empty string");if("NaN"===t||"Infinity"===t||"+Infinity"===t||"-Infinity"===t)return ht;if("number"==typeof e?(n=e,e=!1):e=!!e,(n=n||10)<2||36<n)throw RangeError("radix");var r=t.indexOf("-");if(r>0)throw Error("interior hyphen");if(0===r)return At(at(t.substring(1),e,n));for(var i=rt(ot(n,8)),o=ht,a=0;a<t.length;a+=8){var s=Math.min(8,t.length-a),u=parseInt(t.substring(a,a+s),n);if(s<8)o=_t(It(o,rt(ot(n,s))),rt(u));else o=_t(o=It(o,i),rt(u))}return o.unsigned=e,o}function st(t,e){return"number"==typeof t?rt(t,e):"string"==typeof t?at(t,e):it(t.low,t.high,"boolean"==typeof e?e:t.unsigned)}var ut=4294967296,ct=ut*ut,lt=ct/2,ft=nt(1<<24),ht=nt(0),dt=nt(0,!0),pt=nt(1),mt=nt(1,!0),gt=nt(-1),wt=it(-1,2147483647,!1),yt=it(-1,-1,!0),bt=it(0,-2147483648,!1);function vt(t){return t.unsigned?t.low>>>0:t.low}function St(t){return t.unsigned?(t.high>>>0)*ut+(t.low>>>0):t.high*ut+(t.low>>>0)}function Et(t,e){if((e=e||10)<2||36<e)throw RangeError("radix");if(xt(t))return"0";if(Nt(t)){if(kt(t,bt)){var n=rt(e),r=Pt(t,n),i=Gt(It(r,n),t);return Et(r,e)+vt(i).toString(e)}return"-"+Et(At(t),e)}for(var o=rt(ot(e,6),t.unsigned),a=t,s="";;){var u=Pt(a,o),c=(vt(Gt(a,It(u,o)))>>>0).toString(e);if(xt(a=u))return c+s;for(;c.length<6;)c="0"+c;s=""+c+s}}function xt(t){return 0===t.high&&0===t.low}function Nt(t){return!t.unsigned&&t.high<0}function Ct(t){return 1==(1&t.low)}function kt(t,e){return $(e)||(e=st(e)),(t.unsigned===e.unsigned||t.high>>>31!=1||e.high>>>31!=1)&&(t.high===e.high&&t.low===e.low)}function Ot(t,e){return jt(t,e)<0}function Tt(t,e){return jt(t,e)>0}function Mt(t,e){return jt(t,e)>=0}function jt(t,e){if($(e)||(e=st(e)),kt(t,e))return 0;var n=Nt(t),r=Nt(e);return n&&!r?-1:!n&&r?1:t.unsigned?e.high>>>0>t.high>>>0||e.high===t.high&&e.low>>>0>t.low>>>0?-1:1:Nt(Gt(t,e))?-1:1}function At(t){return!t.unsigned&&kt(t,bt)?bt:_t(Ft(t),pt)}function _t(t,e){$(e)||(e=st(e));var n=t.high>>>16,r=65535&t.high,i=t.low>>>16,o=65535&t.low,a=e.high>>>16,s=65535&e.high,u=e.low>>>16,c=0,l=0,f=0,h=0;return f+=(h+=o+(65535&e.low))>>>16,l+=(f+=i+u)>>>16,c+=(l+=r+s)>>>16,c+=n+a,it((f&=65535)<<16|(h&=65535),(c&=65535)<<16|(l&=65535),t.unsigned)}function Gt(t,e){return $(e)||(e=st(e)),_t(t,At(e))}function It(t,e){if(xt(t))return t.unsigned?dt:ht;if($(e)||(e=st(e)),Q)return it(Q.mul(t.low,t.high,e.low,e.high),Q.get_high(),t.unsigned);if(xt(e))return t.unsigned?dt:ht;if(kt(t,bt))return Ct(e)?bt:ht;if(kt(e,bt))return Ct(t)?bt:ht;if(Nt(t))return Nt(e)?It(At(t),At(e)):At(It(At(t),e));if(Nt(e))return At(It(t,At(e)));if(Ot(t,ft)&&Ot(e,ft))return rt(St(t)*St(e),t.unsigned);var n=t.high>>>16,r=65535&t.high,i=t.low>>>16,o=65535&t.low,a=e.high>>>16,s=65535&e.high,u=e.low>>>16,c=65535&e.low,l=0,f=0,h=0,d=0;return h+=(d+=o*c)>>>16,f+=(h+=i*c)>>>16,h&=65535,f+=(h+=o*u)>>>16,l+=(f+=r*c)>>>16,f&=65535,l+=(f+=i*u)>>>16,f&=65535,l+=(f+=o*s)>>>16,l+=n*c+r*u+i*s+o*a,it((h&=65535)<<16|(d&=65535),(l&=65535)<<16|(f&=65535),t.unsigned)}function Pt(t,e){if($(e)||(e=st(e)),xt(e))throw Error("division by zero");var n,r,i;if(Q)return t.unsigned||-2147483648!==t.high||-1!==e.low||-1!==e.high?it((t.unsigned?Q.div_u:Q.div_s)(t.low,t.high,e.low,e.high),Q.get_high(),t.unsigned):t;if(xt(t))return t.unsigned?dt:ht;if(t.unsigned){if(e.unsigned||(e=function(t){return t.unsigned?t:it(t.low,t.high,!0)}(e)),Tt(e,t))return dt;if(Tt(e,function(t,e){$(e)&&(e=vt(e));if(0==(e&=63))return t;var n=t.high;if(e<32){var r=t.low;return it(r>>>e|n<<32-e,n>>>e,t.unsigned)}return it(32===e?n:n>>>e-32,0,t.unsigned)}(t,1)))return mt;i=dt}else{if(kt(t,bt))return kt(e,pt)||kt(e,gt)?bt:kt(e,bt)?pt:kt(n=Lt(Pt(Dt(t,1),e),1),ht)?Nt(e)?pt:gt:i=_t(n,Pt(r=Gt(t,It(e,n)),e));if(kt(e,bt))return t.unsigned?dt:ht;if(Nt(t))return Nt(e)?Pt(At(t),At(e)):At(Pt(At(t),e));if(Nt(e))return At(Pt(t,At(e)));i=ht}for(r=t;Mt(r,e);){n=Math.max(1,Math.floor(St(r)/St(e)));for(var o=Math.ceil(Math.log(n)/Math.LN2),a=o<=48?1:ot(2,o-48),s=rt(n),u=It(s,e);Nt(u)||Tt(u,r);)u=It(s=rt(n-=a,t.unsigned),e);xt(s)&&(s=pt),i=_t(i,s),r=Gt(r,u)}return i}function Ft(t){return it(~t.low,~t.high,t.unsigned)}function Lt(t,e){return $(e)&&(e=vt(e)),0==(e&=63)?t:e<32?it(t.low<<e,t.high<<e|t.low>>>32-e,t.unsigned):it(0,t.low<<e-32,t.unsigned)}function Dt(t,e){return $(e)&&(e=vt(e)),0==(e&=63)?t:e<32?it(t.low>>>e|t.high<<32-e,t.high>>e,t.unsigned):it(t.high>>e-32,t.high>=0?0:-1,t.unsigned)}function qt(t,e,n){return n?function(t,e){return new Z(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)}(t,e):function(t,e){return new Z(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}(t,e)}function Jt(t){return{next:()=>t.MoveNext()?{done:!1,value:t.Current}:{done:!0,value:null}}}function Vt(t,e){return Yt(()=>{let n=!1;let r=[t[Symbol.iterator](),null];return Xt(()=>{let t;if(!n){if(!(t=r[0].next()).done)return[t.value,r];n=!0,r=[null,e[Symbol.iterator]()]}return(t=r[1].next()).done?null:[t.value,r]},r)})}function Ht(t){return Yt(()=>{const e=t[Symbol.iterator]();let n={value:null};return Xt(t=>{let r=!1;for(;!r;)if(null==t){const n=e.next();n.done?r=!0:t=n.value[Symbol.iterator]()}else{const e=t.next();e.done?t=null:(n={value:e.value},r=!0)}return null!=t&&null!=n?[n.value,t]:null},null)})}function Bt(t,e){return Ht(Wt(t,e))}function Yt(t){return{[Symbol.iterator]:()=>t()[Symbol.iterator]()}}function Rt(){return Xt(()=>void 0)}function Ut(t,e,n){if(Array.isArray(n)||ArrayBuffer.isView(n))return n.reduce(t,e);{let r;for(let i=0,o=n[Symbol.iterator]();!(r=o.next()).done;i++)e=t(e,r.value,i);return e}}function Wt(t,e){return Yt(()=>Xt(e=>{const n=e.next();return n.done?null:[t(n.value),e]},e[Symbol.iterator]()))}function zt(t){return[t]}function Xt(t,e){return{[Symbol.iterator]:()=>{let n=e;return{next:()=>{const e=t(n);return null!=e?(n=e[1],{done:!1,value:e[0]}):{done:!0}}}}}}const Kt=/(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;function Qt(t){return t instanceof Z?Et(t.unsigned?t:qt((e=t,n?function(t){var e=t.high,n=t.low;return[255&n,n>>>8&255,n>>>16&255,n>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]}(e):function(t){var e=t.high,n=t.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,n>>>24,n>>>16&255,n>>>8&255,255&n]}(e)),!0),16):(Number(t)>>>0).toString(16);var e,n}function Zt(t){return{input:t,cont:(e=t,t=>Kt.test(e)?function t(e,n){return(...r)=>{let i=e;for(const t of r)i=te(i,t);return Kt.test(i)?t(i,n):n(i.replace(/%%/g,"%"))}}(e,t):t(e))};var e}function $t(t){return t.cont(t=>t)}function te(t,e){return t.replace(Kt,(t,n,r,i,o,a)=>{switch(a){case"f":case"F":e=Number(e).toFixed(o||6);break;case"g":case"G":e=Number(e).toPrecision(o);break;case"e":case"E":e=Number(e).toExponential(o);break;case"O":case"A":e=String(e);break;case"x":e=Qt(e);break;case"X":e=Qt(e).toUpperCase()}const s=r.indexOf("+")>=0&&parseInt(e,10)>=0;if(i=parseInt(i,10),!isNaN(i)){const t=i>=0&&r.indexOf("0")>=0?"0":" ";e=re(String(e),Math.abs(i)-(s?1:0),t,i<0)}return(n+(s?"+"+e:e)).replace(/%/g,"%%")})}function ee(t,...e){return e.map(t=>String(t)).join(t)}function ne(){let t="";for(let e=0;e++<36;)t+=51*e&52?(15^e?8^Math.random()*(20^e?16:4):4).toString(16):"-";return t}function re(t,e,n,r){n=n||" ",e-=t.length;for(let i=0;i<e;i++)t=r?t+n:n+t;return t}const ie=N(function(t,e,...n){T.call(this,t,e,...n)},T);const oe=N(function(t,e){this.stack=t,this.started=e},_);function ae(t){t:for(;;){if(null!=t.tail){if(1===t.head.tag)return t;if(2===t.head.tag){const e=t;t=new O(e.head.fields[2],new O(new ie(1,"MapOne",e.head.fields[0],e.head.fields[1]),new O(e.head.fields[3],e.tail)));continue t}t=t.tail;continue t}return new O}}function se(t){return new oe(ae(new O(t,new O)),!1)}function ue(t){if(t.started){const e=t.stack;if(null==e.tail)return function(){throw new Error("enumeration already finished")}();if(1===e.head.tag)return[e.head.fields[0],e.head.fields[1]];throw new Error("Please report error: Map iterator, unexpected stack for current")}return function(){throw new Error("enumeration not started")}()}const ce=N(function(t){this.s=t,this.i=se(this.s)});function le(t){return function(t){return this instanceof ce?ce.call(this,t):new ce(t)}(t)}Object.defineProperty(ce.prototype,"Current",{get:function(){return ue(this.i)}}),ce.prototype.MoveNext=function(){return function(t){if(t.started){const e=t.stack;if(null==e.tail)return!1;if(1===e.head.tag)return t.stack=ae(e.tail),!(null==t.stack.tail);throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}return t.started=!0,!(null==t.stack.tail)}(this.i)},ce.prototype.Reset=function(){this.i=se(this.s)},ce.prototype.Dispose=function(){};const fe=N(function(t,e){this.comparer=t,this.tree=e});function he(t){return t.tree}fe.prototype.toString=function(){return"map ["+ee("; ",...Wt(function(t){return $t(Zt("(%A, %A)"))(t[0])(t[1])},this))+"]"},fe.prototype.GetHashCode=function(){const t=function(t,e){return(t<<1)+e+631};let e=0;const n=le(he(this));for(;n.MoveNext();){const r=n.Current;e=t(e,l(r[0])),e=t(e,l(r[1]))}return 0|Math.abs(e)},fe.prototype.Equals=function(t){return 0===this.CompareTo(t)},fe.prototype[Symbol.iterator]=function(){return Jt(le(this.tree))},fe.prototype.CompareTo=function(t){const e=this,n=t;let i=0,o=!1;const a=le(he(e));try{const t=le(he(n));try{for(;!o&&0===i;){const n=[a.MoveNext(),t.MoveNext()];if(n[0])if(n[1]){const n=a.Current,r=t.Current,o=0|e.comparer.Compare(n[0],r[0]);i=0!==o?o:y(n[1],r[1])}else i=1;else n[1]?i=-1:o=!0}return 0|i}finally{r(t)&&t.Dispose()}}finally{r(a)&&a.Dispose()}};const de=N(function(t,e,...n){T.call(this,t,e,...n)},T);function pe(t){return new de(2,"SetOne",t)}function me(t,e,n,r){return new de(1,"SetNode",t,e,n,r)}const ge=N(function(t,e){this.stack=t,this.started=e},_);function we(t){t:for(;;){if(null!=t.tail){if(2===t.head.tag)return t;if(1===t.head.tag){const e=t;t=new O(e.head.fields[1],new O(pe(e.head.fields[0]),new O(e.head.fields[2],e.tail)));continue t}t=t.tail;continue t}return new O}}function ye(t){return new ge(we(new O(t,new O)),!1)}function be(t){if(t.started){const e=t.stack;if(null==e.tail)return function(){throw new Error("Enumeration already started")}();if(2===e.head.tag)return e.head.fields[0];throw new Error("Please report error: Set iterator, unexpected stack for current")}return function(){throw new Error("Enumeration not started")}()}const ve=N(function(t){this.s=t,this.i=ye(this.s)});function Se(t){return function(t){return this instanceof ve?ve.call(this,t):new ve(t)}(t)}function Ee(t,e,n){const r=[e,n];return 0===r[0].tag?0===r[1].tag?0:-1:0===r[1].tag?1:0|function(t,e,n){t:for(;;){const J=[e,n];var r,i,o,a,s,u,c,l,f,h,d,p,m,g,w,y,b,v,S,E,x,N,C,k,T,M,j,A,_,G,I,P,F,L,D,q;switch(null!=J[0].tail?null!=J[1].tail?2===J[1].head.tag?2===J[0].head.tag?(r=4,a=J[0].head.fields[0],s=J[1].head.fields[0],u=J[0].tail,c=J[1].tail):1===J[0].head.tag?0===J[0].head.fields[1].tag?(r=6,m=J[0].head.fields[1],g=J[0].head.fields[0],w=J[0].head.fields[2],y=J[1].head.fields[0],b=J[0].tail,v=J[1].tail):(r=9,j=J[0].head.fields[0],A=J[0].head.fields[1],_=J[0].head.fields[2],G=J[0].tail):(r=10,I=J[1].head.fields[0],P=J[1].tail):1===J[1].head.tag?0===J[1].head.fields[1].tag?2===J[0].head.tag?(r=5,l=J[0].head.fields[0],f=J[1].head.fields[0],h=J[1].head.fields[2],d=J[0].tail,p=J[1].tail):1===J[0].head.tag?0===J[0].head.fields[1].tag?(r=7,S=J[0].head.fields[0],E=J[0].head.fields[2],x=J[1].head.fields[0],N=J[1].head.fields[2],C=J[0].tail,k=J[1].tail):(r=9,j=J[0].head.fields[0],A=J[0].head.fields[1],_=J[0].head.fields[2],G=J[0].tail):(r=11,F=J[1].head.fields[0],L=J[1].head.fields[1],D=J[1].head.fields[2],q=J[1].tail):2===J[0].head.tag?(r=8,T=J[0].head.fields[0],M=J[0].tail):1===J[0].head.tag?(r=9,j=J[0].head.fields[0],A=J[0].head.fields[1],_=J[0].head.fields[2],G=J[0].tail):(r=11,F=J[1].head.fields[0],L=J[1].head.fields[1],D=J[1].head.fields[2],q=J[1].tail):2===J[0].head.tag?(r=8,T=J[0].head.fields[0],M=J[0].tail):1===J[0].head.tag?(r=9,j=J[0].head.fields[0],A=J[0].head.fields[1],_=J[0].head.fields[2],G=J[0].tail):(r=3,i=J[0].tail,o=J[1].tail):r=2:r=null!=J[1].tail?1:0,r){case 0:return 0;case 1:return-1;case 2:return 1;case 3:t=t,e=i,n=o;continue t;case 4:{const r=0|t.Compare(a,s);if(0!==r)return 0|r;t=t,e=u,n=c;continue t}case 5:{const r=0|t.Compare(l,f);if(0!==r)return 0|r;t=t,e=new O(new de(0,"SetEmpty"),d),n=new O(h,p);continue t}case 6:{const r=0|t.Compare(g,y);if(0!==r)return 0|r;t=t,e=new O(w,b),n=new O(m,v);continue t}case 7:{const r=0|t.Compare(S,x);if(0!==r)return 0|r;t=t,e=new O(E,C),n=new O(N,k);continue t}case 8:{const r=n;t=t,e=new O(new de(0,"SetEmpty"),new O(pe(T),M)),n=r;continue t}case 9:{const r=n;t=t,e=new O(A,new O(me(j,new de(0,"SetEmpty"),_,0),G)),n=r;continue t}case 10:t=t,e=e,n=new O(new de(0,"SetEmpty"),new O(pe(I),P));continue t;case 11:t=t,e=e,n=new O(L,new O(me(F,new de(0,"SetEmpty"),D,0),q));continue t}break}}(t,new O(e,new O),new O(n,new O))}Object.defineProperty(ve.prototype,"Current",{get:function(){return be(this.i)}}),ve.prototype.MoveNext=function(){return function(t){if(t.started){const e=t.stack;if(null==e.tail)return!1;if(2===e.head.tag)return t.stack=we(e.tail),!(null==t.stack.tail);throw new Error("Please report error: Set iterator, unexpected stack for moveNext")}return t.started=!0,!(null==t.stack.tail)}(this.i)},ve.prototype.Reset=function(){this.i=ye(this.s)},ve.prototype.Dispose=function(){};const xe=N(function(t,e){this.comparer=t,this.tree=e});function Ne(t){return t.comparer}function Ce(t){return t.tree}function ke(t,e,n){return function(t,e,n,r){for(;;){const i=t,o=e,a=n,s=r;if(null==s.tail)return a;{const u=s.tail;t=i,e=o+1,n=i(o,a,s.head),r=u}}}(t,0,e,n)}function Oe(t,e,n){for(;;){const r=t,i=e,o=n;if(null==o.tail)return i;{const a=o.tail;t=r,e=r(i,o.head),n=a}}}function Te(t){return Oe(function(t,e){return new O(e,t)},new O,t)}function Me(t){return Te(Ut(function(t,e){return new O(e,t)},new O,t))}function je(t){return e=function(t,e){return[t,e]},n=t,Te(ke(function(t,n,r){return new O(e(t,r),n)},new O,n));var e,n}function Ae(t){let e=new O;for(let n=E(t)-1;n>=0;n--)e=new O(t[n],e);return e}function _e(t,e){return Te(Oe(function(e,n){return t(n)?new O(n,e):e},new O,e))}xe.prototype.toString=function(){return"set ["+ee("; ",...Wt(String,this))+"]"},xe.prototype.GetHashCode=function(){let t=0;const e=Se(Ce(this));for(;e.MoveNext();)n=t,r=l(e.Current),t=(n<<1)+r+631;var n,r;return 0|Math.abs(t)},xe.prototype.Equals=function(t){return 0===Ee(Ne(this),Ce(this),Ce(t))},xe.prototype.CompareTo=function(t){return 0|Ee(Ne(this),Ce(this),Ce(t))},xe.prototype[Symbol.iterator]=function(){return Jt(Se(Ce(this)))};const Ge=N(function(t,e){this.show=t,this.entered=e},_);const Ie=N(function(){V.Component.call(this,props),this.state=new Ge(!1,!1)},V.Component);Ie.prototype.render=function(){const t=this;return V.createElement("div",{className:"card"},V.createElement("div",{className:"card-body"},V.createElement("h4",{className:"card-title"},"Transition sample"),V.createElement("h6",{className:"card-subtitle"},V.createElement("a",{href:"https://github.com/toburger/Fable.ReactTransitionGroup/blob/master/samples/TransitionSample.fs"},"Link to F# code"),V.createElement("a",{href:"https://codesandbox.io/s/741op4mmj0"},"Link to original JavaScript code")),V.createElement("div",{className:"row flex-middle"},V.createElement("div",{},V.createElement("button",{onClick:function(e){t.setState(function(t,e){return new Ge(!t.show,t.entered)})}},"Toggle ")),V.createElement("div",{className:"col-fill col"},U(Ae([new B(0,"In",t.state.show),new B(6,"Timeout",1e3),new B(5,"UnmountOnExit",!0)]),function(t){return"entered"===t?"Entered!":"exiting"===t?"Exiting...":"exited"===t?"Exited!":"unmounted"===t?null:"Entering..."})))))};n(25);const Pe=N(function(t,e,n){this.name=t,this.showValidationMessage=e,this.showValidationButton=n},_);const Fe=N(function(){V.Component.call(this,props),this.state=new Pe("",!1,!1)},V.Component);Fe.prototype.render=function(){const t=this;return V.createElement("div",{className:"card"},V.createElement("div",{className:"card-body"},...Me(Yt(function(){return Vt(zt(V.createElement("h4",{className:"card-title"},"CSSTransition sample")),Yt(function(){return Vt(zt(V.createElement("h6",{className:"card-subtitle"},V.createElement("a",{href:"https://github.com/toburger/Fable.ReactTransitionGroup/blob/master/samples/CSSTransitionSample.fs"},"Link to F# code"),V.createElement("a",{href:"https://codesandbox.io/s/m77l2vp00x"},"Link to original JavaScript code"))),Yt(function(){return Vt(zt(V.createElement("form",{},V.createElement("div",{className:"form-group"},V.createElement("label",{htmlFor:"text"},"Your name"),V.createElement("input",{id:"text",className:"input-block",type:"text",value:t.state.name,onFocus:function(e){t.setState(function(t,e){return new Pe(t.name,!1,t.showValidationButton)})},onChange:function(e){const n=e.target;t.setState(function(t,e){return new Pe(n.value,t.showValidationMessage,!0)})}})),z(Ae([new Y(0,"In",t.state.showValidationMessage),new Y(6,"Timeout",300),new Y(15,"ClassNames","message"),new Y(5,"UnmountOnExit",!0),new Y(13,"OnExited",function(e){t.setState(function(t,e){return new Pe(t.name,t.showValidationMessage,!0)})})]),function(t){return V.createElement("div",{className:"help-block"},"Your name rocks!",W(Ae([new Y(0,"In","entered"===t),new Y(6,"Timeout",300),new Y(15,"ClassNames","star"),new Y(5,"UnmountOnExit",!0)]),V.createElement("div",{className:"star"},"⭐")))}))),Yt(function(){return t.state.showValidationButton?zt(V.createElement("button",{onClick:function(e){t.setState(function(t,e){return new Pe(t.name,!0,!1)})}},"Validate form")):Rt()}))}))}))}))))};n(28);const Le=N(function(t,e){this.id=t,this.text=e},_);const De=N(function(t){this.items=t},_);const qe=N(function(){V.Component.call(this,props),this.state=new De(Ae([new Le(ne(),"Buy eggs"),new Le(ne(),"Pay bills"),new Le(ne(),"Invite friends over"),new Le(ne(),"Fix the TV")]))},V.Component);qe.prototype.render=function(){const t=this;return V.createElement("div",{className:"card"},V.createElement("div",{className:"card-body"},V.createElement("h4",{className:"card-title"},"TransitionGroup sample"),V.createElement("h6",{className:"card-subtitle"},V.createElement("a",{href:"https://github.com/toburger/Fable.ReactTransitionGroup/blob/master/samples/TransitionGroupSample.fs"},"Link to F# code"),V.createElement("a",{href:"https://codesandbox.io/s/00rqyo26kn"},"Link to original JavaScript code")),V.createElement("ol",S([["style",{listStyleType:"none",padding:0}]],1),X(new O(new R(5,"className","todo-list"),new O),Me(Yt(function(){return Wt(function(e){return W(Ae([new Y(18,"Key",String(e.id)),new Y(6,"Timeout",500),new Y(15,"ClassNames","fade")]),V.createElement("li",{},V.createElement("button",{type:"button",className:"btn-small remove-btn",onClick:function(n){t.setState(function(t,n){return new De(_e(function(t){return t.id!==e.id},t.items))})}},"X"),e.text))},t.state.items)})))),V.createElement("button",{type:"button",onClick:function(e){const n=window.prompt("Enter some text");var r;"string"==typeof(r=n)&&0!==r.length&&t.setState(function(t,e){return new De((r=t.items,Oe(function(t,e){return new O(e,t)},new O(new Le(ne(),n),new O),Te(r))));var r})}},"Add item")))};n(30);N(function(t,e,...n){T.call(this,t,e,...n)},T);N(function(t,e,...n){T.call(this,t,e,...n)},T);N(function(t){this.__html=t},_);N(function(t,e,...n){T.call(this,t,e,...n)},T);N(function(t,e,...n){T.call(this,t,e,...n)},T);const Je=N(function(t,e,...n){T.call(this,t,e,...n)},T);N(function(t,e,...n){T.call(this,t,e,...n)},T);function Ve(){const t=Me(function(t,e,n){if(0===e)throw new Error("Step cannot be 0");return Yt(()=>Xt(t=>e>0&&t<=n||e<0&&t>=n?[t,t+e]:null,t))}(1,1,15));return V.createElement("div",{className:"card"},V.createElement("div",{className:"card-body"},V.createElement("h4",{className:"card-title"},"Staggered Child Animation sample"),V.createElement("h6",{className:"card-subtitle"},V.createElement("a",{href:"https://github.com/toburger/Fable.ReactTransitionGroup/blob/master/samples/StaggeredChildAnimationSample.fs"},"Link to F# code"),V.createElement("a",{href:"https://codepen.io/cheryllaird/pen/OXVpVv"},"Link to original JavaScript code")),X(Ae([new R(1,"Appear",!0),new R(5,"className","list child-borders")]),Me(Yt(function(){return Bt(function(t){return zt(W(Ae([new Y(18,"Key",o(t[0])),new Y(6,"Timeout",100*(t[0]+5)),new Y(15,"ClassNames","slide-up")]),V.createElement("div",S([new Je(25,"className","list-item background-secondary"),["style",{transitionDelay:$t(Zt("%fs"))(.05*t[0])}]],1),o(t[1]))))},je(t))})))))}function He(){return V.createElement("div",{},V.createElement("div",{className:"margin"},V.createElement(Ie,null)),V.createElement("div",{className:"margin"},V.createElement(Fe,null)),V.createElement("div",{className:"margin"},V.createElement(qe,null)),V.createElement("div",{className:"margin"},Ve()),V.createElement("blockquote",{},"Samples ported from the ",V.createElement("a",{href:"http://reactcommunity.org/react-transition-group/"},"React Transition Group homepage")))}n(3).render(He(),document.getElementById("app")),n.d(e,"renderApp",function(){return He})}});