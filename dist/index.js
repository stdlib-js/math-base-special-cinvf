"use strict";var c=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(s){throw a=0,s}}};var E=c(function(k,o){"use strict";var q=require("@stdlib/math-base-special-absf"),H=require("@stdlib/math-base-special-maxf"),r=require("@stdlib/number-float64-base-to-float32"),F=require("@stdlib/constants-float32-max"),G=require("@stdlib/constants-float32-smallest-normal"),A=require("@stdlib/constants-float32-eps"),f=r(1),l=r(2),L=r(.5),P=r(F*L),b=r(G*r(l/A)),d=r(l/r(A*A));function w(e,a,s,S,n){var t,v,i,u;return t=H(q(e),q(a)),v=f,t>=P?(e=r(e*L),a=r(a*L),v=r(v*L)):t<=b&&(e=r(e*d),a=r(a*d),v=r(v*d)),q(a)<=q(e)?(i=r(a/e),u=r(f/r(e+r(a*i))),e=u,a=r(-i*u)):(i=r(e/a),u=r(f/r(a+r(e*i))),e=r(i*u),a=-u),s[n]=r(e*v),s[n+S]=r(a*v),s}o.exports=w});var O=c(function(J,x){"use strict";var y=require("@stdlib/complex-float32-ctor"),C=require("@stdlib/array-float32"),D=require("@stdlib/complex-float32-real"),I=require("@stdlib/complex-float32-imag"),M=E(),T=new C(2);function B(e){return M(D(e),I(e),T,1,0),new y(T[0],T[1])}x.exports=B});var _=c(function(K,R){"use strict";var N=E();function Q(e,a,s,S,n,t){return N(e[s],e[s+a],S,n,t)}R.exports=Q});var p=require("@stdlib/utils-define-nonenumerable-read-only-property"),g=O(),W=E(),h=_();p(g,"assign",W);p(g,"strided",h);module.exports=g;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
