(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.fD(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.E(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.cF(b)
return new s(c,this)}:function(){if(s===null)s=A.cF(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.cF(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
cJ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cG(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.cH==null){A.fv()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.d(A.d0("Return interceptor for "+A.j(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.c3
if(o==null)o=$.c3=A.cd(n)
p=q[o]}if(p!=null)return p
p=A.fz(a)
if(p!=null)return p
if(typeof a=="function")return B.F
s=Object.getPrototypeOf(a)
if(s==null)return B.n
if(s===Object.prototype)return B.n
if(typeof q=="function"){o=$.c3
if(o==null)o=$.c3=A.cd(n)
Object.defineProperty(q,o,{value:B.f,enumerable:false,writable:true,configurable:true})
return B.f}return B.f},
cT(a,b){if(a<0)throw A.d(A.bx("Length must be a non-negative integer: "+a,null))
return A.E(new Array(a),b.i("m<0>"))},
e7(a,b){var s=A.E(a,b.i("m<0>"))
s.$flags=1
return s},
a_(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ak.prototype
return J.b7.prototype}if(typeof a=="string")return J.an.prototype
if(a==null)return J.al.prototype
if(typeof a=="boolean")return J.b6.prototype
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
if(typeof a=="symbol")return J.ap.prototype
if(typeof a=="bigint")return J.ao.prototype
return a}if(a instanceof A.e)return a
return J.cG(a)},
fq(a){if(a==null)return a
if(Array.isArray(a))return J.m.prototype
if(!(a instanceof A.e))return J.a5.prototype
return a},
fr(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
if(typeof a=="symbol")return J.ap.prototype
if(typeof a=="bigint")return J.ao.prototype
return a}if(a instanceof A.e)return a
return J.cG(a)},
dz(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
if(typeof a=="symbol")return J.ap.prototype
if(typeof a=="bigint")return J.ao.prototype
return a}if(a instanceof A.e)return a
return J.cG(a)},
cL(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a_(a).B(a,b)},
dT(a,b){return J.dz(a).v(a,b)},
cp(a){return J.a_(a).gj(a)},
dU(a){return J.fq(a).gA(a)},
cq(a){return J.fr(a).gl(a)},
dV(a){return J.a_(a).gq(a)},
af(a,b){return J.dz(a).saQ(a,b)},
aS(a){return J.a_(a).h(a)},
aj:function aj(){},
b6:function b6(){},
al:function al(){},
B:function B(){},
V:function V(){},
ba:function ba(){},
a5:function a5(){},
U:function U(){},
ao:function ao(){},
ap:function ap(){},
m:function m(a){this.$ti=a},
b5:function b5(){},
bF:function bF(a){this.$ti=a},
I:function I(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
am:function am(){},
ak:function ak(){},
b7:function b7(){},
an:function an(){}},A={ct:function ct(){},
cZ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dv(a,b,c){return a},
cI(a){var s,r
for(s=$.z.length,r=0;r<s;++r)if(a===$.z[r])return!0
return!1},
b9:function b9(a){this.a=a},
ah:function ah(){},
aA:function aA(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b,c){this.a=a
this.b=b
this.$ti=c},
dF(a){var s=A.dE(a)
if(s!=null)return s
return"minified:"+a},
j(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aS(a)
return s},
aw(a){var s,r=$.cV
if(r==null)r=$.cV=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ea(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.f(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
bb(a){var s,r,q,p
if(a instanceof A.e)return A.y(A.aP(a),null)
s=J.a_(a)
if(s===B.E||s===B.G||t.G.b(a)){r=B.i(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.y(A.aP(a),null)},
eb(a){var s,r,q
if(typeof a=="number"||A.cC(a))return J.aS(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.T)return a.h(0)
s=$.dS()
for(r=0;r<1;++r){q=s[r].aT(a)
if(q!=null)return q}return"Instance of '"+A.bb(a)+"'"},
e9(a){var s=a.$thrownJsError
if(s==null)return null
return A.ad(s)},
f(a,b){if(a==null)J.cq(a)
throw A.d(A.dx(a,b))},
dx(a,b){var s,r="index"
if(!A.dk(b))return new A.H(!0,b,r,null)
s=A.aJ(J.cq(a))
if(b<0||b>=s)return new A.b3(s,!0,b,r,"Index out of range")
return A.cW(b,r)},
d(a){return A.p(a,new Error())},
p(a,b){var s
if(a==null)a=new A.P()
b.dartException=a
s=A.fE
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
fE(){return J.aS(this.dartException)},
co(a,b){throw A.p(a,b==null?new Error():b)},
aQ(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.co(A.eN(a,b,c),s)},
eN(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.az("'"+s+"': Cannot "+o+" "+l+k+n)},
bw(a){throw A.d(A.ag(a))},
Q(a){var s,r,q,p,o,n
a=A.fC(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.E([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.bM(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
bN(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
d_(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
cu(a,b){var s=b==null,r=s?null:b.method
return new A.b8(a,r,s?null:b.receiver)},
aR(a){if(a==null)return new A.bI(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a1(a,a.dartException)
return A.fi(a)},
a1(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fi(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ar(r,16)&8191)===10)switch(q){case 438:return A.a1(a,A.cu(A.j(s)+" (Error "+q+")",null))
case 445:case 5007:A.j(s)
return A.a1(a,new A.au())}}if(a instanceof TypeError){p=$.dI()
o=$.dJ()
n=$.dK()
m=$.dL()
l=$.dO()
k=$.dP()
j=$.dN()
$.dM()
i=$.dR()
h=$.dQ()
g=p.n(s)
if(g!=null)return A.a1(a,A.cu(A.a8(s),g))
else{g=o.n(s)
if(g!=null){g.method="call"
return A.a1(a,A.cu(A.a8(s),g))}else if(n.n(s)!=null||m.n(s)!=null||l.n(s)!=null||k.n(s)!=null||j.n(s)!=null||m.n(s)!=null||i.n(s)!=null||h.n(s)!=null){A.a8(s)
return A.a1(a,new A.au())}}return A.a1(a,new A.bl(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ay()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a1(a,new A.H(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ay()
return a},
ad(a){var s
if(a==null)return new A.aD(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aD(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dB(a){if(a==null)return J.cp(a)
if(typeof a=="object")return A.aw(a)
return J.cp(a)},
fm(a){if(typeof a=="number")return B.l.gj(a)
if(a instanceof A.bu)return A.aw(a)
return A.dB(a)},
fp(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.length
for(s=A.aL(b),r=s.c,s=s.y[1],q=0;q<f;){p=q+1
o=a[q]
q=p+1
n=a[p]
r.a(o)
s.a(n)
if(typeof o=="string"){m=b.b
if(m==null){l=Object.create(null)
l["<non-identifier-key>"]=l
delete l["<non-identifier-key>"]
b.b=l
m=l}k=m[o]
if(k==null)m[o]=b.F(o,n)
else k.b=n}else if(typeof o=="number"&&(o&0x3fffffff)===o){j=b.c
if(j==null){l=Object.create(null)
l["<non-identifier-key>"]=l
delete l["<non-identifier-key>"]
b.c=l
j=l}k=j[o]
if(k==null)j[o]=b.F(o,n)
else k.b=n}else{i=b.d
if(i==null){l=Object.create(null)
l["<non-identifier-key>"]=l
delete l["<non-identifier-key>"]
b.d=l
i=l}h=b.U(o)
g=i[h]
if(g==null)i[h]=[b.F(o,n)]
else{p=b.V(g,o)
if(p>=0)g[p].b=n
else g.push(b.F(o,n))}}}return b},
eV(a,b,c,d,e,f){t.Z.a(a)
switch(A.aJ(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.bV("Unsupported number of arguments for wrapped closure"))},
aO(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.fn(a,b)
a.$identity=s
return s},
fn(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.eV)},
e2(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bf().constructor.prototype):Object.create(new A.a2(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.cR(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.dZ(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.cR(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
dZ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dX)}throw A.d("Error in functionType of tearoff")},
e_(a,b,c,d){var s=A.cQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
cR(a,b,c,d){if(c)return A.e1(a,b,d)
return A.e_(b.length,d,a,b)},
e0(a,b,c,d){var s=A.cQ,r=A.dY
switch(b?-1:a){case 0:throw A.d(new A.bc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
e1(a,b,c){var s,r
if($.cO==null)$.cO=A.cN("interceptor")
if($.cP==null)$.cP=A.cN("receiver")
s=b.length
r=A.e0(s,c,a,b)
return r},
cF(a){return A.e2(a)},
dX(a,b){return A.c8(v.typeUniverse,A.aP(a.a),b)},
cQ(a){return a.a},
dY(a){return a.b},
cN(a){var s,r,q,p=new A.a2("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.bx("Field name "+a+" not found.",null))},
cd(a){return v.getIsolateTag(a)},
h5(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fz(a){var s,r,q,p,o,n=A.a8($.dA.$1(a)),m=$.cc[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ch[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dg($.dt.$2(a,n))
if(q!=null){m=$.cc[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ch[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.cn(s)
$.cc[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ch[n]=s
return s}if(p==="-"){o=A.cn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.dC(a,s)
if(p==="*")throw A.d(A.d0(n))
if(v.leafTags[n]===true){o=A.cn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.dC(a,s)},
dC(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.cJ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cn(a){return J.cJ(a,!1,null,!!a.$ifO)},
fB(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cn(s)
else return J.cJ(s,c,null,null)},
fv(){if(!0===$.cH)return
$.cH=!0
A.fw()},
fw(){var s,r,q,p,o,n,m,l
$.cc=Object.create(null)
$.ch=Object.create(null)
A.fu()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.dD.$1(o)
if(n!=null){m=A.fB(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
fu(){var s,r,q,p,o,n,m=B.w()
m=A.ab(B.x,A.ab(B.y,A.ab(B.j,A.ab(B.j,A.ab(B.z,A.ab(B.A,A.ab(B.B(B.i),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.dA=new A.ce(p)
$.dt=new A.cf(o)
$.dD=new A.cg(n)},
ab(a,b){return a(b)||b},
fo(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fC(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
b_:function b_(){},
ai:function ai(a,b){this.a=a
this.$ti=b},
ax:function ax(){},
bM:function bM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
au:function au(){},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a){this.a=a},
bI:function bI(a){this.a=a},
aD:function aD(a){this.a=a
this.b=null},
T:function T(){},
aX:function aX(){},
aY:function aY(){},
bj:function bj(){},
bf:function bf(){},
a2:function a2(a,b){this.a=a
this.b=b},
bc:function bc(a){this.a=a},
ar:function ar(){},
bG:function bG(a,b){this.a=a
this.b=b
this.c=null},
at:function at(a,b){this.a=a
this.$ti=b},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aq:function aq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
cw(a,b){var s=b.c
return s==null?b.c=A.aG(a,"b2",[b.x]):s},
cX(a){var s=a.w
if(s===6||s===7)return A.cX(a.x)
return s===11||s===12},
ef(a){return a.as},
bv(a){return A.cA(v.typeUniverse,a,!1)},
Z(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.Z(a1,s,a3,a4)
if(r===s)return a2
return A.d9(a1,r,!0)
case 7:s=a2.x
r=A.Z(a1,s,a3,a4)
if(r===s)return a2
return A.d8(a1,r,!0)
case 8:q=a2.y
p=A.aa(a1,q,a3,a4)
if(p===q)return a2
return A.aG(a1,a2.x,p)
case 9:o=a2.x
n=A.Z(a1,o,a3,a4)
m=a2.y
l=A.aa(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.cy(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aa(a1,j,a3,a4)
if(i===j)return a2
return A.da(a1,k,i)
case 11:h=a2.x
g=A.Z(a1,h,a3,a4)
f=a2.y
e=A.ff(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.d7(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aa(a1,d,a3,a4)
o=a2.x
n=A.Z(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.cz(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.aW("Attempted to substitute unexpected RTI kind "+a0))}},
aa(a,b,c,d){var s,r,q,p,o=b.length,n=A.c9(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.Z(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
fg(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.c9(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.Z(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ff(a,b,c,d){var s,r=b.a,q=A.aa(a,r,c,d),p=b.b,o=A.aa(a,p,c,d),n=b.c,m=A.fg(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bp()
s.a=q
s.b=o
s.c=m
return s},
E(a,b){a[v.arrayRti]=b
return a},
dw(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.ft(s)
return a.$S()}return null},
fx(a,b){var s
if(A.cX(b))if(a instanceof A.T){s=A.dw(a)
if(s!=null)return s}return A.aP(a)},
aP(a){if(a instanceof A.e)return A.aL(a)
if(Array.isArray(a))return A.G(a)
return A.cB(J.a_(a))},
G(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
aL(a){var s=a.$ti
return s!=null?s:A.cB(a)},
cB(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.eU(a,s)},
eU(a,b){var s=a instanceof A.T?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.eD(v.typeUniverse,s.name)
b.$ccache=r
return r},
ft(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cA(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
fs(a){return A.ac(A.aL(a))},
fe(a){var s=a instanceof A.T?A.dw(a):null
if(s!=null)return s
if(t.R.b(a))return J.dV(a).a
if(Array.isArray(a))return A.G(a)
return A.aP(a)},
ac(a){var s=a.r
return s==null?a.r=new A.bu(a):s},
eT(a){var s=this
s.b=A.fc(s)
return s.b(a)},
fc(a){var s,r,q,p,o
if(a===t.K)return A.f0
if(A.a0(a))return A.f4
s=a.w
if(s===6)return A.eR
if(s===1)return A.dm
if(s===7)return A.eW
r=A.fb(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a0)){a.f="$i"+q
if(q==="M")return A.eZ
if(a===t.m)return A.eY
return A.f3}}else if(s===10){p=A.fo(a.x,a.y)
o=p==null?A.dm:p
return o==null?A.aK(o):o}return A.eP},
fb(a){if(a.w===8){if(a===t.S)return A.dk
if(a===t.i||a===t.H)return A.f_
if(a===t.N)return A.f2
if(a===t.y)return A.cC}return null},
eS(a){var s=this,r=A.eO
if(A.a0(s))r=A.eM
else if(s===t.K)r=A.aK
else if(A.ae(s)){r=A.eQ
if(s===t.t)r=A.eJ
else if(s===t.w)r=A.dg
else if(s===t.u)r=A.eG
else if(s===t.x)r=A.df
else if(s===t.I)r=A.eI
else if(s===t.e)r=A.eL}else if(s===t.S)r=A.aJ
else if(s===t.N)r=A.a8
else if(s===t.y)r=A.eF
else if(s===t.H)r=A.de
else if(s===t.i)r=A.eH
else if(s===t.m)r=A.eK
s.a=r
return s.a(a)},
eP(a){var s=this
if(a==null)return A.ae(s)
return A.fy(v.typeUniverse,A.fx(a,s),s)},
eR(a){if(a==null)return!0
return this.x.b(a)},
f3(a){var s,r=this
if(a==null)return A.ae(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a_(a)[s]},
eZ(a){var s,r=this
if(a==null)return A.ae(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a_(a)[s]},
eY(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.e)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
dl(a){if(typeof a=="object"){if(a instanceof A.e)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
eO(a){var s=this
if(a==null){if(A.ae(s))return a}else if(s.b(a))return a
throw A.p(A.dh(a,s),new Error())},
eQ(a){var s=this
if(a==null||s.b(a))return a
throw A.p(A.dh(a,s),new Error())},
dh(a,b){return new A.aE("TypeError: "+A.d2(a,A.y(b,null)))},
d2(a,b){return A.bC(a)+": type '"+A.y(A.fe(a),null)+"' is not a subtype of type '"+b+"'"},
D(a,b){return new A.aE("TypeError: "+A.d2(a,b))},
eW(a){var s=this
return s.x.b(a)||A.cw(v.typeUniverse,s).b(a)},
f0(a){return a!=null},
aK(a){if(a!=null)return a
throw A.p(A.D(a,"Object"),new Error())},
f4(a){return!0},
eM(a){return a},
dm(a){return!1},
cC(a){return!0===a||!1===a},
eF(a){if(!0===a)return!0
if(!1===a)return!1
throw A.p(A.D(a,"bool"),new Error())},
eG(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.p(A.D(a,"bool?"),new Error())},
eH(a){if(typeof a=="number")return a
throw A.p(A.D(a,"double"),new Error())},
eI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.p(A.D(a,"double?"),new Error())},
dk(a){return typeof a=="number"&&Math.floor(a)===a},
aJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.p(A.D(a,"int"),new Error())},
eJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.p(A.D(a,"int?"),new Error())},
f_(a){return typeof a=="number"},
de(a){if(typeof a=="number")return a
throw A.p(A.D(a,"num"),new Error())},
df(a){if(typeof a=="number")return a
if(a==null)return a
throw A.p(A.D(a,"num?"),new Error())},
f2(a){return typeof a=="string"},
a8(a){if(typeof a=="string")return a
throw A.p(A.D(a,"String"),new Error())},
dg(a){if(typeof a=="string")return a
if(a==null)return a
throw A.p(A.D(a,"String?"),new Error())},
eK(a){if(A.dl(a))return a
throw A.p(A.D(a,"JSObject"),new Error())},
eL(a){if(a==null)return a
if(A.dl(a))return a
throw A.p(A.D(a,"JSObject?"),new Error())},
dq(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.y(a[q],b)
return s},
f7(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.dq(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.y(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
di(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.E([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.f(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.y(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.y(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.y(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.y(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.y(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
y(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.y(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.y(a.x,b)+">"
if(l===8){p=A.fh(a.x)
o=a.y
return o.length>0?p+("<"+A.dq(o,b)+">"):p}if(l===10)return A.f7(a,b)
if(l===11)return A.di(a,b,null)
if(l===12)return A.di(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
fh(a){var s=A.dE(a)
if(s!=null)return s
return"minified:"+a},
eE(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
eD(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cA(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aH(a,5,"#")
q=A.c9(s)
for(p=0;p<s;++p)q[p]=r
o=A.aG(a,b,q)
n[b]=o
return o}else return m},
eB(a,b){return A.dc(a.tR,b)},
eA(a,b){return A.dc(a.eT,b)},
cA(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.db(a,null,b,!1)
r.set(b,s)
return s},
c8(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.db(a,b,c,!0)
q.set(c,r)
return r},
eC(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.cy(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
db(a,b,c,d){return A.es(A.em(a,b,c,d))},
W(a,b){b.a=A.eS
b.b=A.eT
return b},
aH(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.F(null,null)
s.w=b
s.as=c
r=A.W(a,s)
a.eC.set(c,r)
return r},
d9(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ey(a,b,r,c)
a.eC.set(r,s)
return s},
ey(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a0(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ae(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.F(null,null)
q.w=6
q.x=b
q.as=c
return A.W(a,q)},
d8(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.ew(a,b,r,c)
a.eC.set(r,s)
return s},
ew(a,b,c,d){var s,r
if(d){s=b.w
if(A.a0(b)||b===t.K)return b
else if(s===1)return A.aG(a,"b2",[b])
else if(b===t.P||b===t.T)return t.Y}r=new A.F(null,null)
r.w=7
r.x=b
r.as=c
return A.W(a,r)},
ez(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.F(null,null)
s.w=13
s.x=b
s.as=q
r=A.W(a,s)
a.eC.set(q,r)
return r},
aF(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
ev(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aG(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aF(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.F(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.W(a,r)
a.eC.set(p,q)
return q},
cy(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aF(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.F(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.W(a,o)
a.eC.set(q,n)
return n},
da(a,b,c){var s,r,q="+"+(b+"("+A.aF(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.F(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.W(a,s)
a.eC.set(q,r)
return r},
d7(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aF(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aF(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.ev(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.F(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.W(a,p)
a.eC.set(r,o)
return o},
cz(a,b,c,d){var s,r=b.as+("<"+A.aF(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ex(a,b,c,r,d)
a.eC.set(r,s)
return s},
ex(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.c9(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.Z(a,b,r,0)
m=A.aa(a,c,r,0)
return A.cz(a,n,m,c!==m)}}l=new A.F(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.W(a,l)},
em(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
es(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.eo(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.d5(a,r,l,k,!1)
else if(q===46)r=A.d5(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.Y(a.u,a.e,k.pop()))
break
case 94:k.push(A.ez(a.u,k.pop()))
break
case 35:k.push(A.aH(a.u,5,"#"))
break
case 64:k.push(A.aH(a.u,2,"@"))
break
case 126:k.push(A.aH(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.eq(a,k)
break
case 38:A.ep(a,k)
break
case 63:p=a.u
k.push(A.d9(p,A.Y(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.d8(p,A.Y(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.en(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.d6(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.et(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.Y(a.u,a.e,m)},
eo(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
d5(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.eE(s,o.x)[p]
if(n==null)A.co('No "'+p+'" in "'+A.ef(o)+'"')
d.push(A.c8(s,o,n))}else d.push(p)
return m},
eq(a,b){var s,r=a.u,q=A.d4(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aG(r,p,q))
else{s=A.Y(r,a.e,p)
switch(s.w){case 11:b.push(A.cz(r,s,q,a.n))
break
default:b.push(A.cy(r,s,q))
break}}},
en(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.d4(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.Y(p,a.e,o)
q=new A.bp()
q.a=s
q.b=n
q.c=m
b.push(A.d7(p,r,q))
return
case-4:b.push(A.da(p,b.pop(),s))
return
default:throw A.d(A.aW("Unexpected state under `()`: "+A.j(o)))}},
ep(a,b){var s=b.pop()
if(0===s){b.push(A.aH(a.u,1,"0&"))
return}if(1===s){b.push(A.aH(a.u,4,"1&"))
return}throw A.d(A.aW("Unexpected extended operation "+A.j(s)))},
d4(a,b){var s=b.splice(a.p)
A.d6(a.u,a.e,s)
a.p=b.pop()
return s},
Y(a,b,c){if(typeof c=="string")return A.aG(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.er(a,b,c)}else return c},
d6(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.Y(a,b,c[s])},
et(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.Y(a,b,c[s])},
er(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.aW("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.aW("Bad index "+c+" for "+b.h(0)))},
fy(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.l(a,b,null,c,null)
r.set(c,s)}return s},
l(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a0(d))return!0
s=b.w
if(s===4)return!0
if(A.a0(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.l(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.l(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.l(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.l(a,b.x,c,d,e))return!1
return A.l(a,A.cw(a,b),c,d,e)}if(s===6)return A.l(a,p,c,d,e)&&A.l(a,b.x,c,d,e)
if(q===7){if(A.l(a,b,c,d.x,e))return!0
return A.l(a,b,c,A.cw(a,d),e)}if(q===6)return A.l(a,b,c,p,e)||A.l(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.J)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.l(a,j,c,i,e)||!A.l(a,i,e,j,c))return!1}return A.dj(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.dj(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.eX(a,b,c,d,e)}if(o&&q===10)return A.f1(a,b,c,d,e)
return!1},
dj(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.l(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.l(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.l(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.l(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.l(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
eX(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.c8(a,b,r[o])
return A.dd(a,p,null,c,d.y,e)}return A.dd(a,b.y,null,c,d.y,e)},
dd(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.l(a,b[s],d,e[s],f))return!1
return!0},
f1(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.l(a,r[s],c,q[s],e))return!1
return!0},
ae(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a0(a))if(s!==6)r=s===7&&A.ae(a.x)
return r},
a0(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
dc(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
c9(a){return a>0?new Array(a):v.typeUniverse.sEA},
F:function F(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bp:function bp(){this.c=this.b=this.a=null},
bu:function bu(a){this.a=a},
bn:function bn(){},
aE:function aE(a){this.a=a},
eh(){var s,r,q
if(self.scheduleImmediate!=null)return A.fj()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.aO(new A.bP(s),1)).observe(r,{childList:true})
return new A.bO(s,r,q)}else if(self.setImmediate!=null)return A.fk()
return A.fl()},
ei(a){self.scheduleImmediate(A.aO(new A.bQ(t.M.a(a)),0))},
ej(a){self.setImmediate(A.aO(new A.bR(t.M.a(a)),0))},
ek(a){t.M.a(a)
A.eu(0,a)},
eu(a,b){var s=new A.c6()
s.ah(a,b)
return s},
cr(a){var s
if(t.Q.b(a)){s=a.gN()
if(s!=null)return s}return B.D},
el(a,b,c){var s,r,q,p={},o=p.a=a
for(s=t._;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if(o===b){s=A.eg()
b.ak(new A.J(new A.H(!0,o,null,"Cannot complete a future with itself"),s))
return}s=r|b.a&1
o.a=s
if((s&24)===0){q=t.F.a(b.c)
b.a=b.a&1|4
b.c=o
o.a3(q)
return}q=b.G()
b.E(p.a)
A.a7(b,q)
return},
a7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.ca(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.a7(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.ca(j.a,j.b)
return}g=$.n
if(g!==h)$.n=h
else g=null
c=c.c
if((c&15)===8)new A.c0(q,d,n).$0()
else if(o){if((c&1)!==0)new A.c_(q,j).$0()}else if((c&2)!==0)new A.bZ(d,q).$0()
if(g!=null)$.n=g
c=q.c
if(c instanceof A.C){p=q.a.$ti
p=p.i("b2<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.H(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.el(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.H(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
f8(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.d(A.cM(a,"onError",u.c))},
f6(){var s,r
for(s=$.a9;s!=null;s=$.a9){$.aN=null
r=s.b
$.a9=r
if(r==null)$.aM=null
s.a.$0()}},
fd(){$.cD=!0
try{A.f6()}finally{$.aN=null
$.cD=!1
if($.a9!=null)$.cK().$1(A.du())}},
dr(a){var s=new A.bm(a),r=$.aM
if(r==null){$.a9=$.aM=s
if(!$.cD)$.cK().$1(A.du())}else $.aM=r.b=s},
fa(a){var s,r,q,p=$.a9
if(p==null){A.dr(a)
$.aN=$.aM
return}s=new A.bm(a)
r=$.aN
if(r==null){s.b=p
$.a9=$.aN=s}else{q=r.b
s.b=q
$.aN=r.b=s
if(q==null)$.aM=s}},
ca(a,b){A.fa(new A.cb(a,b))},
dn(a,b,c,d,e){var s,r=$.n
if(r===c)return d.$0()
$.n=c
s=r
try{r=d.$0()
return r}finally{$.n=s}},
dp(a,b,c,d,e,f,g){var s,r=$.n
if(r===c)return d.$1(e)
$.n=c
s=r
try{r=d.$1(e)
return r}finally{$.n=s}},
f9(a,b,c,d,e,f,g,h,i){var s,r=$.n
if(r===c)return d.$2(e,f)
$.n=c
s=r
try{r=d.$2(e,f)
return r}finally{$.n=s}},
cE(a,b,c,d){t.M.a(d)
if(B.b!==c){d=c.av(d)
d=d}A.dr(d)},
bP:function bP(a){this.a=a},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a},
bR:function bR(a){this.a=a},
c6:function c6(){},
c7:function c7(a,b){this.a=a
this.b=b},
J:function J(a,b){this.a=a
this.b=b},
aC:function aC(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
C:function C(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bW:function bW(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a,b){this.a=a
this.b=b},
c2:function c2(a){this.a=a},
c_:function c_(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
bm:function bm(a){this.a=a
this.b=null},
bh:function bh(){},
bK:function bK(a,b){this.a=a
this.b=b},
bL:function bL(a,b){this.a=a
this.b=b},
aI:function aI(){},
br:function br(){},
c4:function c4(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b){this.a=a
this.b=b},
cv(a){var s,r
if(A.cI(a))return"{...}"
s=new A.bi("")
try{r={}
B.a.k($.z,a)
s.a+="{"
r.a=!0
J.dT(a,new A.bH(r,s))
s.a+="}"}finally{if(0>=$.z.length)return A.f($.z,-1)
$.z.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
r:function r(){},
bH:function bH(a,b){this.a=a
this.b=b},
e3(a,b){a=A.p(a,new Error())
if(a==null)a=A.aK(a)
a.stack=b.h(0)
throw a},
cU(a,b,c){var s,r,q
if(a>4294967295)A.co(A.ee(a,0,4294967295,"length"))
s=J.e7(new Array(a),c)
if(a!==0)for(r=s.length,q=0;q<r;++q)s[q]=b
return s},
e8(a,b){var s,r=A.E([],b.i("m<0>"))
for(s=a.gA(a);s.m();)B.a.k(r,s.gp())
return r},
cY(a,b,c){var s,r=A.G(b),q=new J.I(b,b.length,r.i("I<1>"))
if(!q.m())return a
if(c.length===0){r=r.c
do{s=q.d
a+=A.j(s==null?r.a(s):s)}while(q.m())}else{s=q.d
a+=A.j(s==null?r.c.a(s):s)
for(r=r.c;q.m();){s=q.d
a=a+c+A.j(s==null?r.a(s):s)}}return a},
eg(){return A.ad(new Error())},
bC(a){if(typeof a=="number"||A.cC(a)||a==null)return J.aS(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eb(a)},
e4(a,b){A.dv(a,"error",t.K)
A.dv(b,"stackTrace",t.l)
A.e3(a,b)},
aW(a){return new A.aV(a)},
bx(a,b){return new A.H(!1,null,b,a)},
cM(a,b,c){return new A.H(!0,a,b,c)},
ed(a){var s=null
return new A.a3(s,s,!1,s,s,a)},
cW(a,b){return new A.a3(null,null,!0,a,b,"Value not in range")},
ee(a,b,c,d){return new A.a3(b,c,!0,a,d,"Invalid value")},
cx(a){return new A.az(a)},
d0(a){return new A.bk(a)},
ag(a){return new A.aZ(a)},
e6(a,b,c){var s,r
if(A.cI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.E([],t.s)
B.a.k($.z,a)
try{A.f5(a,s)}finally{if(0>=$.z.length)return A.f($.z,-1)
$.z.pop()}r=A.cY(b,t.V.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
e5(a,b,c){var s,r
if(A.cI(a))return b+"..."+c
s=new A.bi(b)
B.a.k($.z,a)
try{r=s
r.a=A.cY(r.a,a,", ")}finally{if(0>=$.z.length)return A.f($.z,-1)
$.z.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
f5(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.j(l.gp())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.f(b,-1)
r=b.pop()
if(0>=b.length)return A.f(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){B.a.k(b,A.j(p))
return}r=A.j(p)
if(0>=b.length)return A.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.j(p)
r=A.j(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
bS:function bS(){},
h:function h(){},
aV:function aV(a){this.a=a},
P:function P(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b3:function b3(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
az:function az(a){this.a=a},
bk:function bk(a){this.a=a},
be:function be(a){this.a=a},
aZ:function aZ(a){this.a=a},
ay:function ay(){},
bV:function bV(a){this.a=a},
A:function A(){},
w:function w(){},
e:function e(){},
bt:function bt(){},
bi:function bi(a){this.a=a},
d3(a,b,c,d,e){var s=A.ds(new A.bU(c),t.z)
if(s!=null)B.h.aj(a,b,t.B.a(s),!1)
return new A.bo(a,b,s,!1,e.i("bo<0>"))},
ds(a,b){var s=$.n
if(s===B.b)return a
return s.aw(a,b)},
c:function c(){},
aT:function aT(){},
aU:function aU(){},
K:function K(){},
S:function S(){},
b0:function b0(){},
b:function b(){},
a:function a(){},
q:function q(){},
b1:function b1(){},
L:function L(){},
N:function N(){},
bd:function bd(){},
bg:function bg(){},
bJ:function bJ(a){this.a=a},
v:function v(){},
a6:function a6(){},
cs:function cs(a){this.$ti=a},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bo:function bo(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bU:function bU(a){this.a=a},
bs:function bs(){},
bq:function bq(){},
t:function t(a,b,c){this.a=a
this.b=b
this.$ti=c},
dW(a,b){var s,r,q=J.cT(a,t.L)
for(s=t.S,r=0;r<a;++r)q[r]=A.cU(b,0,s)
return new A.by(b,a,q)},
cS(){var s,r=t.O,q=A.E([],r)
r=A.E([],r)
s=A.dW(20,10)
r=new A.bD(s,B.C,q,r)
r.a4()
r.M()
return r},
x:function x(a,b){this.a=a
this.b=b},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(a){this.a=a},
bA:function bA(){},
bz:function bz(){},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null
_.r=!0
_.x=_.w=0
_.y=!1
_.z=0},
bE:function bE(){},
fA(){var s,r,q,p,o,n={},m=document,l=t.E,k=l.a(m.querySelector("#board")),j=l.a(m.querySelector("#next")),i=l.a(m.querySelector("#hold"))
l=m.querySelector("#score")
l.toString
s=m.querySelector("#lines")
s.toString
r=m.querySelector("#level")
r.toString
m=m.querySelector("#message")
m.toString
q=A.cS()
n.a=q
n.b=!1
p=window.localStorage.getItem("dartris-best")
o=A.ea(p==null?"":p,null)
n.c=o==null?0:o
p=window.performance.now()
p.toString
n.d=p
p=q.a
B.k.saU(k,p.a*22)
B.k.saG(k,p.b*22)
p=new A.cm()
m=new A.cj(n,k,p,new A.ck(p),j,i,l,s,r,m)
r=window
r.toString
A.d3(r,"keydown",t.d.a(new A.ci(n,m)),!1,t.h)
r=window
r.toString
B.h.ac(r,new A.cl(n,m))},
cm:function cm(){},
ck:function ck(a){this.a=a},
cj:function cj(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
ci:function ci(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
dE(a){return v.mangledGlobalNames[a]},
fD(a){throw A.p(new A.b9("Field '"+a+"' has been assigned during initialization."),new Error())}},B={}
var w=[A,J,B]
var $={}
A.ct.prototype={}
J.aj.prototype={
B(a,b){return a===b},
gj(a){return A.aw(a)},
h(a){return"Instance of '"+A.bb(a)+"'"},
gq(a){return A.ac(A.cB(this))}}
J.b6.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gq(a){return A.ac(t.y)},
$iO:1,
$iu:1}
J.al.prototype={
B(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$iO:1}
J.B.prototype={$ii:1}
J.V.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.ba.prototype={}
J.a5.prototype={}
J.U.prototype={
h(a){var s=a[$.dH()]
if(s==null)s=a[$.dG()]
if(s==null)return this.ag(a)
return"JavaScript function for "+J.aS(s)},
$iX:1}
J.ao.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.ap.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.m.prototype={
k(a,b){A.G(a).c.a(b)
a.$flags&1&&A.aQ(a,29)
a.push(b)},
T(a,b){A.G(a).i("A<1>").a(b)
a.$flags&1&&A.aQ(a,"addAll",2)
this.ai(a,b)
return},
ai(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.ag(a))
for(r=0;r<s;++r)a.push(b[r])},
az(a){a.$flags&1&&A.aQ(a,"clear","clear")
a.length=0},
gaD(a){if(a.length>0)return a[0]
throw A.d(new A.be("No element"))},
a7(a,b){var s,r
A.G(a).i("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.ag(a))}return!1},
aC(a,b){var s,r
A.G(a).i("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.ag(a))}return!0},
ae(a,b){var s,r,q,p
a.$flags&2&&A.aQ(a,"shuffle")
s=a.length
while(s>1){r=b.aK(s);--s
q=a.length
if(!(s<q))return A.f(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.f(a,r)
a[s]=a[r]
a[r]=p}},
h(a){return A.e5(a,"[","]")},
gA(a){return new J.I(a,a.length,A.G(a).i("I<1>"))},
gj(a){return A.aw(a)},
gl(a){return a.length},
ad(a,b,c){A.G(a).c.a(c)
a.$flags&2&&A.aQ(a)
if(!(b>=0&&b<a.length))throw A.d(A.dx(a,b))
a[b]=c},
$iA:1,
$iM:1}
J.b5.prototype={
aT(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bb(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.bF.prototype={}
J.I.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.bw(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ib4:1}
J.am.prototype={
aL(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.cx(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a_(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
I(a,b){return(a|0)===a?a/b|0:this.au(a,b)},
au(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.cx("Result of truncating division is "+A.j(s)+": "+A.j(a)+" ~/ "+b))},
ar(a,b){var s
if(a>0)s=this.aq(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aq(a,b){return b>31?0:a>>>b},
gq(a){return A.ac(t.H)},
$iR:1}
J.ak.prototype={
gq(a){return A.ac(t.S)},
$iO:1,
$io:1}
J.b7.prototype={
gq(a){return A.ac(t.i)},
$iO:1}
J.an.prototype={
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gq(a){return A.ac(t.N)},
gl(a){return a.length},
$iO:1,
$ik:1}
A.b9.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ah.prototype={}
A.aA.prototype={
gA(a){var s=this.a
return new A.aB(new J.I(s,s.length,A.G(s).i("I<1>")),this.b,this.$ti.i("aB<1>"))}}
A.aB.prototype={
m(){var s,r,q,p
for(s=this.a,r=this.b,q=s.$ti.c;s.m();){p=s.d
if(r.$1(p==null?q.a(p):p))return!0}return!1},
gp(){var s=this.a,r=s.d
return r==null?s.$ti.c.a(r):r},
$ib4:1}
A.b_.prototype={
h(a){return A.cv(this)}}
A.ai.prototype={
R(){var s=this,r=s.$map
if(r==null){r=new A.aq(s.$ti.i("aq<1,2>"))
A.fp(s.a,r)
s.$map=r}return r},
C(a,b){return this.R().C(0,b)},
v(a,b){this.$ti.i("~(1,2)").a(b)
this.R().v(0,b)},
gl(a){return this.R().a}}
A.ax.prototype={}
A.bM.prototype={
n(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.au.prototype={
h(a){return"Null check operator used on a null value"}}
A.b8.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bl.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bI.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aD.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia4:1}
A.T.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.dF(r==null?"unknown":r)+"'"},
$iX:1,
gaV(){return this},
$C:"$1",
$R:1,
$D:null}
A.aX.prototype={$C:"$0",$R:0}
A.aY.prototype={$C:"$2",$R:2}
A.bj.prototype={}
A.bf.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.dF(s)+"'"}}
A.a2.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a2))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dB(this.a)^A.aw(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bb(this.a)+"'")}}
A.bc.prototype={
h(a){return"RuntimeError: "+this.a}}
A.ar.prototype={
gl(a){return this.a},
gX(a){return new A.at(this,A.aL(this).i("at<1>"))},
C(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.aI(b)},
aI(a){var s,r,q=this.d
if(q==null)return null
s=q[this.U(a)]
r=this.V(s,a)
if(r<0)return null
return s[r].b},
v(a,b){var s,r,q=this
A.aL(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.ag(q))
s=s.c}},
F(a,b){var s=this,r=A.aL(s),q=new A.bG(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
U(a){return J.cp(a)&1073741823},
V(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cL(a[r].a,b))return r
return-1},
h(a){return A.cv(this)}}
A.bG.prototype={}
A.at.prototype={
gl(a){return this.a.a},
gA(a){var s=this.a
return new A.as(s,s.r,s.e,this.$ti.i("as<1>"))}}
A.as.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ag(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ib4:1}
A.aq.prototype={
U(a){return A.fm(a)&1073741823},
V(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cL(a[r].a,b))return r
return-1}}
A.ce.prototype={
$1(a){return this.a(a)},
$S:5}
A.cf.prototype={
$2(a,b){return this.a(a,b)},
$S:6}
A.cg.prototype={
$1(a){return this.a(A.a8(a))},
$S:7}
A.F.prototype={
i(a){return A.c8(v.typeUniverse,this,a)},
t(a){return A.eC(v.typeUniverse,this,a)}}
A.bp.prototype={}
A.bu.prototype={
h(a){return A.y(this.a,null)}}
A.bn.prototype={
h(a){return this.a}}
A.aE.prototype={$iP:1}
A.bP.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.bO.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:8}
A.bQ.prototype={
$0(){this.a.$0()},
$S:3}
A.bR.prototype={
$0(){this.a.$0()},
$S:3}
A.c6.prototype={
ah(a,b){if(self.setTimeout!=null)self.setTimeout(A.aO(new A.c7(this,b),0),a)
else throw A.d(A.cx("`setTimeout()` not found."))}}
A.c7.prototype={
$0(){this.b.$0()},
$S:0}
A.J.prototype={
h(a){return A.j(this.a)},
$ih:1,
gN(){return this.b}}
A.aC.prototype={
aJ(a){if((this.c&15)!==6)return!0
return this.b.b.Y(t.p.a(this.d),a.a,t.y,t.K)},
aE(a){var s,r=this,q=r.e,p=null,o=t.A,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.aN(q,m,a.b,o,n,t.l)
else p=l.Y(t.v.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.c.b(A.aR(s))){if((r.c&1)!==0)throw A.d(A.bx("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.bx("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.C.prototype={
aR(a,b,c){var s,r,q=this.$ti
q.t(c).i("1/(2)").a(a)
s=$.n
if(s===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.d(A.cM(b,"onError",u.c))}else{c.i("@<0/>").t(q.c).i("1(2)").a(a)
b=A.f8(b,s)}r=new A.C(s,c.i("C<0>"))
this.a1(new A.aC(r,3,a,b,q.i("@<1>").t(c).i("aC<1,2>")))
return r},
ap(a){this.a=this.a&1|16
this.c=a},
E(a){this.a=a.a&30|this.a&1
this.c=a.c},
a1(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.a1(a)
return}r.E(s)}A.cE(null,null,r.b,t.M.a(new A.bW(r,a)))}},
a3(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.a3(a)
return}m.E(n)}l.a=m.H(a)
A.cE(null,null,m.b,t.M.a(new A.bY(l,m)))}},
G(){var s=t.F.a(this.c)
this.c=null
return this.H(s)},
H(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
al(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.G()
q.E(a)
A.a7(q,r)},
a2(a){var s=this.G()
this.ap(a)
A.a7(this,s)},
ak(a){this.a^=2
A.cE(null,null,this.b,t.M.a(new A.bX(this,a)))},
$ib2:1}
A.bW.prototype={
$0(){A.a7(this.a,this.b)},
$S:0}
A.bY.prototype={
$0(){A.a7(this.b,this.a.a)},
$S:0}
A.bX.prototype={
$0(){this.a.a2(this.b)},
$S:0}
A.c0.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aM(t.W.a(q.d),t.A)}catch(p){s=A.aR(p)
r=A.ad(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.cr(q)
n=k.a
n.c=new A.J(q,o)
q=n}q.b=!0
return}if(j instanceof A.C&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.C){m=k.b.a
l=new A.C(m.b,m.$ti)
j.aR(new A.c1(l,m),new A.c2(l),t.o)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.c1.prototype={
$1(a){this.a.al(this.b)},
$S:2}
A.c2.prototype={
$2(a,b){A.aK(a)
t.l.a(b)
this.a.a2(new A.J(a,b))},
$S:9}
A.c_.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.Y(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.aR(l)
r=A.ad(l)
q=s
p=r
if(p==null)p=A.cr(q)
o=this.a
o.c=new A.J(q,p)
o.b=!0}},
$S:0}
A.bZ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.aJ(s)&&p.a.e!=null){p.c=p.a.aE(s)
p.b=!1}}catch(o){r=A.aR(o)
q=A.ad(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cr(p)
m=l.b
m.c=new A.J(p,n)
p=m}p.b=!0}},
$S:0}
A.bm.prototype={}
A.bh.prototype={
gl(a){var s,r,q=this,p={},o=new A.C($.n,t.a)
p.a=0
s=q.$ti
r=s.i("~(1)?").a(new A.bK(p,q))
t.k.a(new A.bL(p,o))
A.d3(q.a,q.b,r,!1,s.c)
return o}}
A.bK.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.bL.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.G()
r.c.a(q)
s.a=8
s.c=q
A.a7(s,p)},
$S:0}
A.aI.prototype={$id1:1}
A.br.prototype={
aO(a){var s,r,q
t.M.a(a)
try{if(B.b===$.n){a.$0()
return}A.dn(null,null,this,a,t.o)}catch(q){s=A.aR(q)
r=A.ad(q)
A.ca(A.aK(s),t.l.a(r))}},
aP(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.b===$.n){a.$1(b)
return}A.dp(null,null,this,a,b,t.o,c)}catch(q){s=A.aR(q)
r=A.ad(q)
A.ca(A.aK(s),t.l.a(r))}},
av(a){return new A.c4(this,t.M.a(a))},
aw(a,b){return new A.c5(this,b.i("~(0)").a(a),b)},
aM(a,b){b.i("0()").a(a)
if($.n===B.b)return a.$0()
return A.dn(null,null,this,a,b)},
Y(a,b,c,d){c.i("@<0>").t(d).i("1(2)").a(a)
d.a(b)
if($.n===B.b)return a.$1(b)
return A.dp(null,null,this,a,b,c,d)},
aN(a,b,c,d,e,f){d.i("@<0>").t(e).t(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.n===B.b)return a.$2(b,c)
return A.f9(null,null,this,a,b,c,d,e,f)}}
A.c4.prototype={
$0(){return this.a.aO(this.b)},
$S:0}
A.c5.prototype={
$1(a){var s=this.c
return this.a.aP(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.cb.prototype={
$0(){A.e4(this.a,this.b)},
$S:0}
A.r.prototype={
v(a,b){var s,r,q,p=A.aP(a)
p.i("~(r.K,r.V)").a(b)
for(s=J.dU(this.gX(a)),p=p.i("r.V");s.m();){r=s.gp()
q=this.C(a,r)
b.$2(r,q==null?p.a(q):q)}},
gl(a){return J.cq(this.gX(a))},
h(a){return A.cv(a)}}
A.bH.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.j(a)
r.a=(r.a+=s)+": "
s=A.j(b)
r.a+=s},
$S:10}
A.bS.prototype={
h(a){return this.an()}}
A.h.prototype={
gN(){return A.e9(this)}}
A.aV.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bC(s)
return"Assertion failed"}}
A.P.prototype={}
A.H.prototype={
gP(){return"Invalid argument"+(!this.a?"(s)":"")},
gO(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gP()+q+o
if(!s.a)return n
return n+s.gO()+": "+A.bC(s.gW())},
gW(){return this.b}}
A.a3.prototype={
gW(){return A.df(this.b)},
gP(){return"RangeError"},
gO(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.j(q):""
else if(q==null)s=": Not greater than or equal to "+A.j(r)
else if(q>r)s=": Not in inclusive range "+A.j(r)+".."+A.j(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.j(r)
return s}}
A.b3.prototype={
gW(){return A.aJ(this.b)},
gP(){return"RangeError"},
gO(){if(A.aJ(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.az.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bk.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.be.prototype={
h(a){return"Bad state: "+this.a}}
A.aZ.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bC(s)+"."}}
A.ay.prototype={
h(a){return"Stack Overflow"},
gN(){return null},
$ih:1}
A.bV.prototype={
h(a){return"Exception: "+this.a}}
A.A.prototype={
gl(a){var s,r=this.gA(this)
for(s=0;r.m();)++s
return s},
h(a){return A.e6(this,"(",")")}}
A.w.prototype={
gj(a){return A.e.prototype.gj.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
B(a,b){return this===b},
gj(a){return A.aw(this)},
h(a){return"Instance of '"+A.bb(this)+"'"},
gq(a){return A.fs(this)},
toString(){return this.h(this)}}
A.bt.prototype={
h(a){return""},
$ia4:1}
A.bi.prototype={
gl(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.aT.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.aU.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.K.prototype={
saG(a,b){a.height=b},
saU(a,b){a.width=b},
$iK:1}
A.S.prototype={
sK(a,b){a.fillStyle=b},
$iS:1}
A.b0.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.b.prototype={
h(a){var s=a.localName
s.toString
return s}}
A.a.prototype={$ia:1}
A.q.prototype={
aj(a,b,c,d){return a.addEventListener(b,A.aO(t.B.a(c),1),!1)},
$iq:1}
A.b1.prototype={
gl(a){return a.length}}
A.L.prototype={$iL:1}
A.N.prototype={
h(a){var s=a.nodeValue
return s==null?this.af(a):s},
saQ(a,b){a.textContent=b}}
A.bd.prototype={
gl(a){return a.length}}
A.bg.prototype={
C(a,b){return a.getItem(A.a8(b))},
v(a,b){var s,r,q
t.q.a(b)
for(s=0;;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gX(a){var s=A.E([],t.s)
this.v(a,new A.bJ(s))
return s},
gl(a){var s=a.length
s.toString
return s}}
A.bJ.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:11}
A.v.prototype={}
A.a6.prototype={
ac(a,b){var s
t.f.a(b)
this.am(a)
s=A.ds(b,t.H)
s.toString
return this.ao(a,s)},
ao(a,b){var s=a.requestAnimationFrame(A.aO(t.f.a(b),1))
s.toString
return s},
am(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.cs.prototype={}
A.bT.prototype={}
A.bo.prototype={}
A.bU.prototype={
$1(a){return this.a.$1(t.z.a(a))},
$S:12}
A.bs.prototype={}
A.bq.prototype={
aK(a){if(a<=0||a>4294967296)throw A.d(A.ed("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
$iec:1}
A.t.prototype={
h(a){return"Point("+this.a+", "+this.b+")"},
B(a,b){if(b==null)return!1
return b instanceof A.t&&this.a===b.a&&this.b===b.b},
gj(a){var s=B.c.gj(this.a),r=B.c.gj(this.b),q=A.cZ(A.cZ(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911}}
A.x.prototype={
an(){return"Tetromino."+this.b}}
A.av.prototype={
a8(a,b,c){var s=this,r=a==null?s.b:a,q=b==null?s.c:b,p=c==null?s.d:c
return new A.av(s.a,r,q,p)},
J(a,b){return this.a8(null,a,b)},
aB(a){return this.a8(a,null,null)},
L(a,b){return this.J(this.c+a,this.d+b)},
gu(a){var s,r,q,p,o,n,m=this,l=B.Q.C(0,m.a)
l.toString
s=m.b
if(!(s<4))return A.f(l,s)
r=l[s]
q=A.E([],t.U)
for(l=r.length,s=m.c,p=m.d,o=t.D,n=0;n<16;++n){if(!(n<l))return A.f(r,n)
if(r[n]==="#")B.a.k(q,new A.t(s+B.c.a_(n,4),p+B.c.I(n,4),o))}return q}}
A.by.prototype={
a9(a,b){return a>=0&&a<this.a&&b<this.b},
D(a){return B.a.aC(a.gu(0),new A.bB(this))},
ab(a){var s,r,q,p,o,n,m,l
for(s=a.gu(0),r=s.length,q=this.b,p=this.c,o=a.a.a+1,n=0;n<s.length;s.length===r||(0,A.bw)(s),++n){m=s[n]
l=m.b
if(l>=0&&l<q){if(!(l>=0&&l<p.length))return A.f(p,l)
B.a.ad(p[l],m.a,o)}}},
aA(){var s,r,q=this.c,p=A.G(q),o=p.i("aA<1>"),n=A.e8(new A.aA(q,p.i("u(1)").a(new A.bA()),o),o.c),m=this.b-n.length
if(m>0){B.a.az(q)
s=J.cT(m,t.L)
for(p=this.a,o=t.S,r=0;r<m;++r)s[r]=A.cU(p,0,o)
B.a.T(q,s)
B.a.T(q,n)}return m}}
A.bB.prototype={
$1(a){var s,r,q
t.D.a(a)
s=this.a
r=a.a
q=a.b
if(q<0)s=s.a9(r,q)
else if(s.a9(r,q)){s=s.c
if(!(q<s.length))return A.f(s,q)
q=s[q]
if(!(r>=0&&r<q.length))return A.f(q,r)
r=q[r]===0
s=r}else s=!1
return s},
$S:4}
A.bA.prototype={
$1(a){return B.a.a7(t.L.a(a),new A.bz())},
$S:13}
A.bz.prototype={
$1(a){return A.aJ(a)===0},
$S:14}
A.bD.prototype={
a4(){var s,r,q
for(s=this.d,r=this.c,q=this.b;s.length<5;){if(r.length===0){B.a.T(r,B.I)
B.a.ae(r,q)}if(0>=r.length)return A.f(r,-1)
B.a.k(s,r.pop())}},
M(){var s,r,q=this.d
q.$flags&1&&A.aQ(q,"removeAt",1)
s=q.length
if(0>=s)A.co(A.cW(0,null))
r=q.splice(0,1)[0]
this.a4()
this.a6(r)},
a6(a){var s,r=this,q=r.a,p=new A.av(a,0,(q.a/2|0)-2,0)
if(!q.D(p)){s=p.L(0,-1)
if(q.D(s)){r.e=s
return}r.e=p
r.y=!0
return}r.e=p},
S(a){if(this.y||!this.a.D(a))return!1
this.e=a
return!0},
a0(){var s=this
if(s.y)return!1
if(s.S(s.e.L(0,1)))return!0
s.aa()
return!1},
aF(){var s,r,q=this
if(q.y)return 0
s=q.gZ()
r=s.d-q.e.d
q.e=s
q.w=q.w+r*2
q.aa()
return r},
a5(a){var s,r,q,p,o,n,m,l=this
if(l.y)return!1
s=l.e
r=s.aB(B.c.a_(s.b+a,4))
for(s=l.a,q=r.c,p=r.d,o=0;o<8;++o){n=B.L[o]
m=r.J(q+n.a,p+n.b)
if(s.D(m)){l.e=m
return!0}}return!1},
gZ(){var s,r,q,p=this.e
p.toString
for(s=this.a,r=p;p=r.c,q=r.d+1,s.D(r.J(p,q));)r=r.J(p,q)
return r},
aH(){var s,r=this
if(r.y||!r.r)return!1
s=r.f
r.f=r.e.a
r.r=!1
if(s==null)r.M()
else r.a6(s)
return!0},
aa(){var s,r,q,p=this,o=p.e
if(B.a.a7(o.gu(0),new A.bE())){p.a.ab(o)
p.y=!0
return}s=p.a
s.ab(o)
r=s.aA()
s=p.x+=r
q=p.w
if(!(r>=0&&r<5))return A.f(B.m,r)
p.w=q+B.m[r]*(B.c.I(s,10)+1)
p.r=!0
p.z=0
p.M()},
aS(a){var s,r,q,p=this
if(p.y)return 0
p.z+=a
s=0
for(;;){r=p.z
q=Math.max(80,800-B.c.I(p.x,10)*70)
if(!(r>=q&&!p.y))break
p.z=r-q
p.a0();++s}return s}}
A.bE.prototype={
$1(a){return t.D.a(a).b<0},
$S:4}
A.cm.prototype={
$5$ghost(a,b,c,d,e){var s,r
B.e.sK(a,d)
if(e){a.globalAlpha=0.25
a.fillRect(b*22+1,c*22+1,20,20)
a.globalAlpha=1
return}s=b*22+1
r=c*22+1
a.fillRect(s,r,20,20)
B.e.sK(a,"rgba(255,255,255,0.18)")
a.fillRect(s,r,20,4)},
$4(a,b,c,d){return this.$5$ghost(a,b,c,d,!1)},
$S:15}
A.ck.prototype={
$2(a,b){var s,r,q,p,o,n,m=a.getContext("2d")
m.toString
B.e.sK(m,"#0b0e12")
s=a.width
s.toString
r=a.height
r.toString
m.fillRect(0,0,s,r)
if(b==null)return
for(s=new A.av(b,0,0,0).gu(0),r=s.length,q=this.a,p=b.a+1,o=0;o<s.length;s.length===r||(0,A.bw)(s),++o){n=s[o]
if(!(p<8))return A.f(B.d,p)
q.$4(m,n.a,n.b+1,B.d[p])}},
$S:16}
A.cj.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=g.getContext("2d")
f.toString
B.e.sK(f,"#0b0e12")
s=g.width
s.toString
g=g.height
g.toString
f.fillRect(0,0,s,g)
for(g=h.a,s=h.c,r=0;q=g.a,r<q.a.b;++r)for(p=0;q=g.a.a,p<q.a;++p){q=q.c
if(!(r<q.length))return A.f(q,r)
q=q[r]
if(!(p<q.length))return A.f(q,p)
o=q[p]
if(o!==0){if(!(o>=0&&o<8))return A.f(B.d,o)
s.$4(f,p,r,B.d[o])}}if(!q.y)for(q=q.gZ().gu(0),n=q.length,m=0;m<q.length;q.length===n||(0,A.bw)(q),++m){l=q[m]
k=l.b
if(k>=0){j=g.a.e.a.a+1
if(!(j<8))return A.f(B.d,j)
s.$5$ghost(f,l.a,k,B.d[j],!0)}}i=g.a.e
if(i!=null)for(q=i.gu(0),n=q.length,k=i.a.a+1,m=0;m<q.length;q.length===n||(0,A.bw)(q),++m){l=q[m]
j=l.b
if(j>=0){if(!(k<8))return A.f(B.d,k)
s.$4(f,l.a,j,B.d[k])}}f=h.d
s=g.a.d
s=s.length===0?null:B.a.gaD(s)
f.$2(h.e,s)
f.$2(h.f,g.a.f)
J.af(h.r,""+g.a.w)
J.af(h.w,""+g.a.x)
J.af(h.x,""+B.c.I(g.a.x,10))
f=g.a
if(f.y){f=f.w
if(f>g.c){g.c=f
window.localStorage.setItem("dartris-best",""+f)}J.af(h.y,"game over \xb7 best "+g.c+" \xb7 press R")}else{f=h.y
if(g.b)J.af(f,"paused \xb7 press P")
else{g=g.c
J.af(f,g>0?"best "+g:"")}}},
$S:0}
A.ci.prototype={
$1(a){var s,r,q=this
t.h.a(a)
s=a.key
if(s==null)s=""
r=s.toLowerCase()
if(r==="r"){s=q.a
s.a=A.cS()
s.b=!1}else if(r==="p"){s=q.a
s.b=!s.b}else{s=q.a
if(!s.b&&!s.a.y)switch(r){case"arrowleft":case"a":s=s.a
s.S(s.e.L(-1,0))
break
case"arrowright":case"d":s=s.a
s.S(s.e.L(1,0))
break
case"arrowup":case"w":case"x":s.a.a5(1)
break
case"z":s.a.a5(3)
break
case"arrowdown":case"s":s.a.a0()
break
case" ":s.a.aF()
break
case"c":s.a.aH()
break
default:return}else return}a.preventDefault()
q.b.$0()},
$S:17}
A.cl.prototype={
$1(a){var s,r
A.de(a)
s=this.a
r=B.l.aL(a-s.d)
s.d=a
if(!s.b&&!s.a.y)s.a.aS(r)
this.b.$0()
s=window
s.toString
B.h.ac(s,this)},
$S:18};(function aliases(){var s=J.aj.prototype
s.af=s.h
s=J.V.prototype
s.ag=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"fj","ei",1)
s(A,"fk","ej",1)
s(A,"fl","ek",1)
r(A,"du","fd",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.ct,J.aj,A.ax,J.I,A.h,A.A,A.aB,A.b_,A.bM,A.bI,A.aD,A.T,A.r,A.bG,A.as,A.F,A.bp,A.bu,A.c6,A.J,A.aC,A.C,A.bm,A.bh,A.aI,A.bS,A.ay,A.bV,A.w,A.bt,A.bi,A.cs,A.bo,A.bq,A.t,A.av,A.by,A.bD])
q(J.aj,[J.b6,J.al,J.B,J.ao,J.ap,J.am,J.an])
q(J.B,[J.V,J.m,A.q,A.S,A.b0,A.a,A.bs])
q(J.V,[J.ba,J.a5,J.U])
r(J.b5,A.ax)
r(J.bF,J.m)
q(J.am,[J.ak,J.b7])
q(A.h,[A.b9,A.P,A.b8,A.bl,A.bc,A.bn,A.aV,A.H,A.az,A.bk,A.be,A.aZ])
q(A.A,[A.ah,A.aA])
r(A.ai,A.b_)
r(A.au,A.P)
q(A.T,[A.aX,A.aY,A.bj,A.ce,A.cg,A.bP,A.bO,A.c1,A.bK,A.c5,A.bU,A.bB,A.bA,A.bz,A.bE,A.cm,A.ci,A.cl])
q(A.bj,[A.bf,A.a2])
r(A.ar,A.r)
r(A.at,A.ah)
r(A.aq,A.ar)
q(A.aY,[A.cf,A.c2,A.bH,A.bJ,A.ck])
r(A.aE,A.bn)
q(A.aX,[A.bQ,A.bR,A.c7,A.bW,A.bY,A.bX,A.c0,A.c_,A.bZ,A.bL,A.c4,A.cb,A.cj])
r(A.br,A.aI)
q(A.H,[A.a3,A.b3])
q(A.q,[A.N,A.a6])
r(A.b,A.N)
r(A.c,A.b)
q(A.c,[A.aT,A.aU,A.K,A.b1,A.bd])
r(A.v,A.a)
r(A.L,A.v)
r(A.bg,A.bs)
r(A.bT,A.bh)
r(A.x,A.bS)
s(A.bs,A.r)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",dy:"double",R:"num",k:"String",u:"bool",w:"Null",M:"List",e:"Object",fP:"Map",i:"JSObject"},mangledNames:{},types:["~()","~(~())","w(@)","w()","u(t<o>)","@(@)","@(@,k)","@(k)","w(~())","w(e,a4)","~(e?,e?)","~(k,k)","~(a)","u(M<o>)","u(o)","~(S,o,o,k{ghost:u})","~(K,x?)","~(L)","~(R)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.eB(v.typeUniverse,JSON.parse('{"ba":"V","a5":"V","U":"V","fF":"a","fM":"a","fQ":"b","fG":"c","fR":"c","fH":"v","fL":"B","fS":"q","fN":"N","fK":"N","b6":{"u":[],"O":[]},"al":{"O":[]},"B":{"i":[]},"V":{"i":[]},"m":{"M":["1"],"i":[],"A":["1"]},"b5":{"ax":[]},"bF":{"m":["1"],"M":["1"],"i":[],"A":["1"]},"I":{"b4":["1"]},"am":{"R":[]},"ak":{"o":[],"R":[],"O":[]},"b7":{"R":[],"O":[]},"an":{"k":[],"O":[]},"b9":{"h":[]},"ah":{"A":["1"]},"aA":{"A":["1"]},"aB":{"b4":["1"]},"ai":{"b_":["1","2"]},"au":{"P":[],"h":[]},"b8":{"h":[]},"bl":{"h":[]},"aD":{"a4":[]},"T":{"X":[]},"aX":{"X":[]},"aY":{"X":[]},"bj":{"X":[]},"bf":{"X":[]},"a2":{"X":[]},"bc":{"h":[]},"ar":{"r":["1","2"],"r.K":"1","r.V":"2"},"at":{"A":["1"]},"as":{"b4":["1"]},"aq":{"ar":["1","2"],"r":["1","2"],"r.K":"1","r.V":"2"},"bn":{"h":[]},"aE":{"P":[],"h":[]},"J":{"h":[]},"C":{"b2":["1"]},"aI":{"d1":[]},"br":{"aI":[],"d1":[]},"o":{"R":[]},"M":{"A":["1"]},"aV":{"h":[]},"P":{"h":[]},"H":{"h":[]},"a3":{"h":[]},"b3":{"h":[]},"az":{"h":[]},"bk":{"h":[]},"be":{"h":[]},"aZ":{"h":[]},"ay":{"h":[]},"bt":{"a4":[]},"K":{"q":[],"i":[]},"S":{"i":[]},"a":{"i":[]},"L":{"a":[],"i":[]},"c":{"q":[],"i":[]},"aT":{"q":[],"i":[]},"aU":{"q":[],"i":[]},"b0":{"i":[]},"b":{"q":[],"i":[]},"q":{"i":[]},"b1":{"q":[],"i":[]},"N":{"q":[],"i":[]},"bd":{"q":[],"i":[]},"bg":{"r":["k","k"],"i":[],"r.K":"k","r.V":"k"},"v":{"a":[],"i":[]},"a6":{"q":[],"i":[]},"bT":{"bh":["1"]},"bq":{"ec":[]}}'))
A.eA(v.typeUniverse,JSON.parse('{"ah":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.bv
return{n:s("J"),E:s("K"),Q:s("h"),z:s("a"),Z:s("X"),V:s("A<@>"),U:s("m<t<o>>"),s:s("m<k>"),O:s("m<x>"),b:s("m<@>"),T:s("al"),m:s("i"),g:s("U"),h:s("L"),j:s("M<@>"),L:s("M<o>"),P:s("w"),K:s("e"),D:s("t<o>"),J:s("fT"),l:s("a4"),N:s("k"),R:s("O"),c:s("P"),G:s("a5"),_:s("C<@>"),a:s("C<o>"),y:s("u"),p:s("u(e)"),i:s("dy"),A:s("@"),W:s("@()"),v:s("@(e)"),C:s("@(e,a4)"),S:s("o"),Y:s("b2<w>?"),e:s("i?"),X:s("e?"),w:s("k?"),F:s("aC<@,@>?"),u:s("u?"),I:s("dy?"),B:s("@(a)?"),t:s("o?"),x:s("R?"),k:s("~()?"),d:s("~(L)?"),H:s("R"),o:s("~"),M:s("~()"),q:s("~(k,k)"),f:s("~(R)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.k=A.K.prototype
B.e=A.S.prototype
B.E=J.aj.prototype
B.a=J.m.prototype
B.c=J.ak.prototype
B.l=J.am.prototype
B.F=J.U.prototype
B.G=J.B.prototype
B.n=J.ba.prototype
B.f=J.a5.prototype
B.h=A.a6.prototype
B.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.w=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.B=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.A=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.z=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.y=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.j=function(hooks) { return hooks; }

B.C=new A.bq()
B.b=new A.br()
B.D=new A.bt()
B.o=new A.x(0,"i")
B.p=new A.x(1,"o")
B.q=new A.x(2,"t")
B.r=new A.x(3,"s")
B.t=new A.x(4,"z")
B.u=new A.x(5,"j")
B.v=new A.x(6,"l")
B.I=s([B.o,B.p,B.q,B.r,B.t,B.u,B.v],t.O)
B.R=new A.t(0,0,t.D)
B.W=new A.t(-1,0,t.D)
B.T=new A.t(1,0,t.D)
B.S=new A.t(0,-1,t.D)
B.Y=new A.t(-2,0,t.D)
B.V=new A.t(2,0,t.D)
B.X=new A.t(-1,-1,t.D)
B.U=new A.t(1,-1,t.D)
B.L=s([B.R,B.W,B.T,B.S,B.Y,B.V,B.X,B.U],t.U)
B.m=s([0,40,100,300,1200],A.bv("m<o>"))
B.d=s(["#101418","#4cc9f0","#f9c74f","#b388ff","#80ed99","#f94144","#577590","#f3722c"],t.s)
B.N=s(["....####........","..#...#...#...#.","........####....",".#...#...#...#.."],t.s)
B.K=s([".##..##.........",".##..##.........",".##..##.........",".##..##........."],t.s)
B.P=s([".#..###.........",".#...##..#......","....###..#......",".#..##...#......"],t.s)
B.O=s([".##.##..........",".#...##...#.....",".....##.##......","#...##...#......"],t.s)
B.M=s(["##...##.........","..#..##..#......","....##...##.....",".#..##..#......."],t.s)
B.H=s(["#...###.........",".##..#...#......","....###...#.....",".#...#..##......"],t.s)
B.J=s(["..#.###.........",".#...#...##.....","....###.#.......","##...#...#......"],t.s)
B.Q=new A.ai([B.o,B.N,B.p,B.K,B.q,B.P,B.r,B.O,B.t,B.M,B.u,B.H,B.v,B.J],A.bv("ai<x,M<k>>"))})();(function staticFields(){$.c3=null
$.z=A.E([],A.bv("m<e>"))
$.cV=null
$.cP=null
$.cO=null
$.dA=null
$.dt=null
$.dD=null
$.cc=null
$.ch=null
$.cH=null
$.a9=null
$.aM=null
$.aN=null
$.cD=!1
$.n=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"fJ","dH",()=>A.cd("_$dart_dartClosure"))
s($,"fI","dG",()=>A.cd("_$dart_dartClosure_dartJSInterop"))
s($,"h4","dS",()=>A.E([new J.b5()],A.bv("m<ax>")))
s($,"fU","dI",()=>A.Q(A.bN({
toString:function(){return"$receiver$"}})))
s($,"fV","dJ",()=>A.Q(A.bN({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"fW","dK",()=>A.Q(A.bN(null)))
s($,"fX","dL",()=>A.Q(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"h_","dO",()=>A.Q(A.bN(void 0)))
s($,"h0","dP",()=>A.Q(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"fZ","dN",()=>A.Q(A.d_(null)))
s($,"fY","dM",()=>A.Q(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"h2","dR",()=>A.Q(A.d_(void 0)))
s($,"h1","dQ",()=>A.Q(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"h3","cK",()=>A.eh())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.B,MediaError:J.B,NavigatorUserMediaError:J.B,OverconstrainedError:J.B,PositionError:J.B,GeolocationPositionError:J.B,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.aT,HTMLAreaElement:A.aU,HTMLCanvasElement:A.K,CanvasRenderingContext2D:A.S,DOMException:A.b0,MathMLElement:A.b,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b,Element:A.b,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,Performance:A.q,EventTarget:A.q,HTMLFormElement:A.b1,KeyboardEvent:A.L,Document:A.N,HTMLDocument:A.N,Node:A.N,HTMLSelectElement:A.bd,Storage:A.bg,CompositionEvent:A.v,FocusEvent:A.v,MouseEvent:A.v,DragEvent:A.v,PointerEvent:A.v,TextEvent:A.v,TouchEvent:A.v,WheelEvent:A.v,UIEvent:A.v,Window:A.a6,DOMWindow:A.a6})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Performance:true,EventTarget:false,HTMLFormElement:true,KeyboardEvent:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Storage:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,TouchEvent:true,WheelEvent:true,UIEvent:false,Window:true,DOMWindow:true})})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.fA
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()