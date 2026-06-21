"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=v(function(A,q){
function l(e,r,i,a,t){var u,s,n;if(e<=0)return!1;if(a===0)return i[t]?r<=e:r<=0;for(s=t,u=0,n=0;n<e;n++){if(i[s]&&(u+=1,u>=r))return!0;s+=a}return!1}q.exports=l
});var c=v(function(B,d){
var j=require('@stdlib/strided-base-stride2offset/dist'),R=o();function _(e,r,i,a){var t=j(e,a);return R(e,r,i,a,t)}d.exports=_
});var x=v(function(C,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=c(),O=o();E(m,"ndarray",O);p.exports=m
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=x(),f,y=g(b(__dirname,"./native.js"));h(y)?f=w:f=y;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
