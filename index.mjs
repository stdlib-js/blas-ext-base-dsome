// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";function t(r,e,t,n,s){var i,d,f;if(r<=0)return!1;if(0===n)return t[s]?e<=r:e<=0;for(d=s,i=0,f=0;f<r;f++){if(t[d]&&(i+=1)>=e)return!0;d+=n}return!1}function n(r,n,s,i){return t(r,n,s,i,e(r,i))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
