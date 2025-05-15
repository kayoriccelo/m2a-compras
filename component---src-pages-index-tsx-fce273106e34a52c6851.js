(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[245],{2225:function(e,t,r){"use strict";r.d(t,{k5:function(){return f}});var n=r(6540),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=["attr","size","title"];function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>n.createElement(e.tag,u({key:t},e.attr),d(e.child))))}function f(e){return t=>n.createElement(p,c({attr:u({},e.attr)},t),d(e.child))}function p(e){var t=t=>{var r,{attr:a,size:o,title:l}=e,m=s(e,i),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,m,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(e=>t(e))):t(a)}},2833:function(e){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var l=o[c];if(!s(l))return!1;var u=e[l],m=t[l];if(!1===(a=r?r.call(n,u,m,l):void 0)||void 0===a&&u!==m)return!1}return!0}},4060:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return Va},default:function(){return Za}});var n=r(6540);var a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};Object.create;function o(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var i=r(2833),s=r.n(i),c="-ms-",l="-moz-",u="-webkit-",m="comm",d="rule",f="decl",p="@keyframes",h=Math.abs,g=String.fromCharCode,b=Object.assign;function x(e){return e.trim()}function y(e,t){return(e=t.exec(e))?e[0]:e}function v(e,t,r){return e.replace(t,r)}function w(e,t,r){return e.indexOf(t,r)}function A(e,t){return 0|e.charCodeAt(t)}function E(e,t,r){return e.slice(t,r)}function k(e){return e.length}function C(e){return e.length}function S(e,t){return t.push(e),e}function j(e,t){return e.filter((function(e){return!y(e,t)}))}var z=1,I=1,O=0,P=0,M=0,R="";function F(e,t,r,n,a,o,i,s){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:z,column:I,length:i,return:"",siblings:s}}function D(e,t){return b(F("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function N(e){for(;e.root;)e=D(e.root,{children:[e]});S(e,e.siblings)}function Y(){return M=P>0?A(R,--P):0,I--,10===M&&(I=1,z--),M}function L(){return M=P<O?A(R,P++):0,I++,10===M&&(I=1,z++),M}function B(){return A(R,P)}function q(){return P}function T(e,t){return E(R,e,t)}function G(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return z=I=1,O=k(R=e),P=0,[]}function W(e){return R="",e}function V(e){return x(T(P-1,Q(91===e?e+2:40===e?e+1:e)))}function Z(e){for(;(M=B())&&M<33;)L();return G(e)>2||G(M)>3?"":" "}function J(e,t){for(;--t&&L()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return T(e,q()+(t<6&&32==B()&&32==L()))}function Q(e){for(;L();)switch(M){case e:return P;case 34:case 39:34!==e&&39!==e&&Q(M);break;case 40:41===e&&Q(e);break;case 92:L()}return P}function X(e,t){for(;L()&&e+M!==57&&(e+M!==84||47!==B()););return"/*"+T(t,P-1)+"*"+g(47===e?e:L())}function H(e){for(;!G(B());)L();return T(e,P)}function K(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function $(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case m:return"";case p:return e.return=e.value+"{"+K(e.children,n)+"}";case d:if(!k(e.value=e.props.join(",")))return""}return k(r=K(e.children,n))?e.return=e.value+"{"+r+"}":""}function _(e,t,r){switch(function(e,t){return 45^A(e,0)?(((t<<2^A(e,0))<<2^A(e,1))<<2^A(e,2))<<2^A(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+l+e+c+e+e;case 5936:switch(A(e,t+11)){case 114:return u+e+c+v(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+c+v(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+c+v(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+c+e+e;case 6165:return u+e+c+"flex-"+e+e;case 5187:return u+e+v(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return u+e+c+"flex-item-"+v(e,/flex-|-self/g,"")+(y(e,/flex-|baseline/)?"":c+"grid-row-"+v(e,/flex-|-self/g,""))+e;case 4675:return u+e+c+"flex-line-pack"+v(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+c+v(e,"shrink","negative")+e;case 5292:return u+e+c+v(e,"basis","preferred-size")+e;case 6060:return u+"box-"+v(e,"-grow","")+u+e+c+v(e,"grow","positive")+e;case 4554:return u+v(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return v(v(v(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return v(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return v(v(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!y(e,/flex-|baseline/))return c+"grid-column-align"+E(e,t)+e;break;case 2592:case 3360:return c+v(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,y(e.props,/grid-\w+-end/)}))?~w(e+(r=r[t].value),"span",0)?e:c+v(e,"-start","")+e+c+"grid-row-span:"+(~w(r,"span",0)?y(r,/\d+/):+y(r,/\d+/)-+y(e,/\d+/))+";":c+v(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return y(e.props,/grid-\w+-start/)}))?e:c+v(v(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return v(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(A(e,t+1)){case 109:if(45!==A(e,t+4))break;case 102:return v(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+l+(108==A(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?_(v(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return v(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,a,o,i,s){return c+r+":"+n+s+(a?c+r+"-span:"+(o?i:+i-+n)+s:"")+e}));case 4949:if(121===A(e,t+6))return v(e,":",":"+u)+e;break;case 6444:switch(A(e,45===A(e,14)?18:11)){case 120:return v(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===A(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+c+"$2box$3")+e;case 100:return v(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return v(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=_(e.value,e.length,r));case p:return K([D(e,{value:v(e.value,"@","@"+u)})],n);case d:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(y(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":N(D(e,{props:[v(t,/:(read-\w+)/,":-moz-$1")]})),N(D(e,{props:[t]})),b(e,{props:j(r,n)});break;case"::placeholder":N(D(e,{props:[v(t,/:(plac\w+)/,":"+u+"input-$1")]})),N(D(e,{props:[v(t,/:(plac\w+)/,":-moz-$1")]})),N(D(e,{props:[v(t,/:(plac\w+)/,c+"input-$1")]})),N(D(e,{props:[t]})),b(e,{props:j(r,n)})}return""}))}}function te(e){return W(re("",null,null,null,[""],e=U(e),0,[0],e))}function re(e,t,r,n,a,o,i,s,c){for(var l=0,u=0,m=i,d=0,f=0,p=0,b=1,x=1,y=1,E=0,C="",j=a,z=o,I=n,O=C;x;)switch(p=E,E=L()){case 40:if(108!=p&&58==A(O,m-1)){-1!=w(O+=v(V(E),"&","&\f"),"&\f",h(l?s[l-1]:0))&&(y=-1);break}case 34:case 39:case 91:O+=V(E);break;case 9:case 10:case 13:case 32:O+=Z(p);break;case 92:O+=J(q()-1,7);continue;case 47:switch(B()){case 42:case 47:S(ae(X(L(),q()),t,r,c),c);break;default:O+="/"}break;case 123*b:s[l++]=k(O)*y;case 125*b:case 59:case 0:switch(E){case 0:case 125:x=0;case 59+u:-1==y&&(O=v(O,/\f/g,"")),f>0&&k(O)-m&&S(f>32?oe(O+";",n,r,m-1,c):oe(v(O," ","")+";",n,r,m-2,c),c);break;case 59:O+=";";default:if(S(I=ne(O,t,r,l,u,a,s,C,j=[],z=[],m,o),o),123===E)if(0===u)re(O,t,I,I,j,o,m,s,z);else switch(99===d&&110===A(O,3)?100:d){case 100:case 108:case 109:case 115:re(e,I,I,n&&S(ne(e,I,I,0,0,a,s,C,a,j=[],m,z),z),a,z,m,s,n?j:z);break;default:re(O,I,I,I,[""],z,0,s,z)}}l=u=f=0,b=y=1,C=O="",m=i;break;case 58:m=1+k(O),f=p;default:if(b<1)if(123==E)--b;else if(125==E&&0==b++&&125==Y())continue;switch(O+=g(E),E*b){case 38:y=u>0?1:(O+="\f",-1);break;case 44:s[l++]=(k(O)-1)*y,y=1;break;case 64:45===B()&&(O+=V(L())),d=B(),u=m=k(C=O+=H(q())),E++;break;case 45:45===p&&2==k(O)&&(b=0)}}return o}function ne(e,t,r,n,a,o,i,s,c,l,u,m){for(var f=a-1,p=0===a?o:[""],g=C(p),b=0,y=0,w=0;b<n;++b)for(var A=0,k=E(e,f+1,f=h(y=i[b])),S=e;A<g;++A)(S=x(y>0?p[A]+" "+k:v(k,/&\f/g,p[A])))&&(c[w++]=S);return F(e,t,r,0===a?d:s,c,l,u,m)}function ae(e,t,r,n){return F(e,t,r,m,g(M),E(e,2,-2),0,n)}function oe(e,t,r,n,a){return F(e,t,r,f,E(e,0,n),E(e,n+1,-1),n,a)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},se="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ce="active",le="data-styled-version",ue="6.1.17",me="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),pe=(new Set,Object.freeze([])),he=Object.freeze({});function ge(e,t,r){return void 0===r&&(r=he),e.theme!==r.theme&&e.theme||t||r.theme}var be=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function ve(e){return e.replace(xe,"-").replace(ye,"")}var we=/(a)(d)/gi,Ae=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ee(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Ae(t%52)+r;return(Ae(t%52)+r).replace(we,"$1-$2")}var ke,Ce=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Se=function(e){return Ce(5381,e)};function je(e){return Ee(Se(e)>>>0)}function ze(e){return e.displayName||e.name||"Component"}function Ie(e){return"string"==typeof e&&!0}var Oe="function"==typeof Symbol&&Symbol.for,Pe=Oe?Symbol.for("react.memo"):60115,Me=Oe?Symbol.for("react.forward_ref"):60112,Re={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},De={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ne=((ke={})[Me]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ke[Pe]=De,ke);function Ye(e){return("type"in(t=e)&&t.type.$$typeof)===Pe?De:"$$typeof"in e?Ne[e.$$typeof]:Re;var t}var Le=Object.defineProperty,Be=Object.getOwnPropertyNames,qe=Object.getOwnPropertySymbols,Te=Object.getOwnPropertyDescriptor,Ge=Object.getPrototypeOf,Ue=Object.prototype;function We(e,t,r){if("string"!=typeof t){if(Ue){var n=Ge(t);n&&n!==Ue&&We(e,n,r)}var a=Be(t);qe&&(a=a.concat(qe(t)));for(var o=Ye(e),i=Ye(t),s=0;s<a.length;++s){var c=a[s];if(!(c in Fe||r&&r[c]||i&&c in i||o&&c in o)){var l=Te(t,c);try{Le(e,c,l)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function Ze(e){return"object"==typeof e&&"styledComponentId"in e}function Je(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qe(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Xe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function He(e,t,r){if(void 0===r&&(r=!1),!r&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=He(e[n],t[n]);else if(Xe(t))for(var n in t)e[n]=He(e[n],t[n]);return e}function Ke(e,t){Object.defineProperty(e,"toString",{value:t})}function $e(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _e=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,a=n;e>=a;)if((a<<=1)<0)throw $e(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=n;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var a=r;a<n;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),a=n+r,o=n;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(me);return t},e}(),et=new Map,tt=new Map,rt=1,nt=function(e){if(et.has(e))return et.get(e);for(;tt.has(rt);)rt++;var t=rt++;return et.set(e,t),tt.set(t,e),t},at=function(e,t){rt=t+1,et.set(e,t),tt.set(t,e)},ot="style[".concat(se,"][").concat(le,'="').concat(ue,'"]'),it=new RegExp("^".concat(se,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),st=function(e,t,r){for(var n,a=r.split(","),o=0,i=a.length;o<i;o++)(n=a[o])&&e.registerName(t,n)},ct=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(me),a=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var c=s.match(it);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(at(u,l),st(e,u,c[3]),e.getTag().insertRules(l,a)),a.length=0}else a.push(s)}}},lt=function(e){for(var t=document.querySelectorAll(ot),r=0,n=t.length;r<n;r++){var a=t[r];a&&a.getAttribute(se)!==ce&&(ct(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ut(){return r.nc}var mt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(se,"]")));return t[t.length-1]}(r),o=void 0!==a?a.nextSibling:null;n.setAttribute(se,ce),n.setAttribute(le,ue);var i=ut();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},dt=function(){function e(e){this.element=mt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var a=t[r];if(a.ownerNode===e)return a}throw $e(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=mt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),pt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ht=de,gt={isServer:!de,useCSSOMInjection:!fe},bt=function(){function e(e,t,r){void 0===e&&(e=he),void 0===t&&(t={});var n=this;this.options=a(a({},gt),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&de&&ht&&(ht=!1,lt(this)),Ke(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",a=function(r){var a=function(e){return tt.get(e)}(r);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(r);if(void 0===o||!o.size||0===i.length)return"continue";var s="".concat(se,".g").concat(r,'[id="').concat(a,'"]'),c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),n+="".concat(i).concat(s,'{content:"').concat(c,'"}').concat(me)},o=0;o<r;o++)a(o);return n}(n)}))}return e.registerId=function(e){return nt(e)},e.prototype.rehydrate=function(){!this.server&&de&&lt(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(a(a({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new pt(r):t?new dt(r):new ft(r)}(this.options),new _e(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(nt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(nt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),xt=/&/g,yt=/^\s*\/\/.*$/gm;function vt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=vt(e.children,t)),e}))}function wt(e){var t,r,n,a=void 0===e?he:e,o=a.options,i=void 0===o?he:o,s=a.plugins,c=void 0===s?pe:s,l=function(e,n,a){return a.startsWith(r)&&a.endsWith(r)&&a.replaceAll(r,"").length>0?".".concat(t):e},u=c.slice();u.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(xt,r).replace(n,l))})),i.prefix&&u.push(ee),u.push($);var m=function(e,a,o,s){void 0===a&&(a=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,r=a,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(yt,""),l=te(o||a?"".concat(o," ").concat(a," { ").concat(c," }"):c);i.namespace&&(l=vt(l,i.namespace));var m,d,f,p=[];return K(l,(m=u.concat((f=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&f(e)})),d=C(m),function(e,t,r,n){for(var a="",o=0;o<d;o++)a+=m[o](e,t,r,n)||"";return a})),p};return m.hash=c.length?c.reduce((function(e,t){return t.name||$e(15),Ce(e,t.name)}),5381).toString():"",m}var At=new bt,Et=wt(),kt=n.createContext({shouldForwardProp:void 0,styleSheet:At,stylis:Et}),Ct=(kt.Consumer,n.createContext(void 0));function St(){return(0,n.useContext)(kt)}function jt(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],a=t[1],o=St().styleSheet,i=(0,n.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),c=(0,n.useMemo)((function(){return wt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,n.useEffect)((function(){s()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,n.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:c}}),[e.shouldForwardProp,i,c]);return n.createElement(kt.Provider,{value:l},n.createElement(Ct.Provider,{value:c},e.children))}var zt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Et);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ke(this,(function(){throw $e(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Et),this.name+e.hash},e}(),It=function(e){return e>="A"&&e<="Z"};function Ot(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;It(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Pt=function(e){return null==e||!1===e||""===e},Mt=function(e){var t,r,n=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Pt(i)&&(Array.isArray(i)&&i.isCss||Ve(i)?n.push("".concat(Ot(a),":"),i,";"):Xe(i)?n.push.apply(n,o(o(["".concat(a," {")],Mt(i),!1),["}"],!1)):n.push("".concat(Ot(a),": ").concat((t=a,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ie||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Rt(e,t,r,n){return Pt(e)?[]:Ze(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Rt(e(t),t,r,n):e instanceof zt?r?(e.inject(r,n),[e.getName(n)]):[e]:Xe(e)?Mt(e):Array.isArray(e)?Array.prototype.concat.apply(pe,e.map((function(e){return Rt(e,t,r,n)}))):[e.toString()];var a}function Ft(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ve(r)&&!Ze(r))return!1}return!0}var Dt=Se(ue),Nt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Ft(e),this.componentId=t,this.baseHash=Ce(Dt,t),this.baseStyle=r,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Je(n,this.staticRulesId);else{var a=Qe(Rt(this.rules,e,t,r)),o=Ee(Ce(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=r(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}n=Je(n,o),this.staticRulesId=o}else{for(var s=Ce(this.baseHash,r.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u;else if(u){var m=Qe(Rt(u,e,t,r));s=Ce(s,m+l),c+=m}}if(c){var d=Ee(s>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,r(c,".".concat(d),void 0,this.componentId)),n=Je(n,d)}}return n},e}(),Yt=n.createContext(void 0);Yt.Consumer;var Lt={};new Set;function Bt(e,t,r){var o=Ze(e),i=e,s=!Ie(e),c=t.attrs,l=void 0===c?pe:c,u=t.componentId,m=void 0===u?function(e,t){var r="string"!=typeof e?"sc":ve(e);Lt[r]=(Lt[r]||0)+1;var n="".concat(r,"-").concat(je(ue+r+Lt[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?function(e){return Ie(e)?"styled.".concat(e):"Styled(".concat(ze(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(ve(t.displayName),"-").concat(t.componentId):t.componentId||m,h=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(o&&i.shouldForwardProp){var b=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;g=function(e,t){return b(e,t)&&x(e,t)}}else g=b}var y=new Nt(r,p,o?i.componentStyle:void 0);function v(e,t){return function(e,t,r){var o=e.attrs,i=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.styledComponentId,u=e.target,m=n.useContext(Yt),d=St(),f=e.shouldForwardProp||d.shouldForwardProp,p=ge(t,m,s)||he,h=function(e,t,r){for(var n,o=a(a({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var s=Ve(n=e[i])?n(o):n;for(var c in s)o[c]="className"===c?Je(o[c],s[c]):"style"===c?a(a({},o[c]),s[c]):s[c]}return t.className&&(o.className=Je(o.className,t.className)),o}(o,t,p),g=h.as||u,b={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===p||("forwardedAs"===x?b.as=h.forwardedAs:f&&!f(x,g)||(b[x]=h[x]));var y=function(e,t){var r=St();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(i,h),v=Je(c,l);return y&&(v+=" "+y),h.className&&(v+=" "+h.className),b[Ie(g)&&!be.has(g)?"class":"className"]=v,r&&(b.ref=r),(0,n.createElement)(g,b)}(w,e,t)}v.displayName=f;var w=n.forwardRef(v);return w.attrs=h,w.componentStyle=y,w.displayName=f,w.shouldForwardProp=g,w.foldedComponentIds=o?Je(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=p,w.target=o?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,a=t;n<a.length;n++)He(e,a[n],!0);return e}({},i.defaultProps,e):e}}),Ke(w,(function(){return".".concat(w.styledComponentId)})),s&&We(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function qt(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var Tt=function(e){return Object.assign(e,{isCss:!0})};function Gt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ve(e)||Xe(e))return Tt(Rt(qt(pe,o([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Rt(n):Tt(Rt(qt(n,t)))}function Ut(e,t,r){if(void 0===r&&(r=he),!t)throw $e(1,t);var n=function(n){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,r,Gt.apply(void 0,o([n],a,!1)))};return n.attrs=function(n){return Ut(e,t,a(a({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Ut(e,t,a(a({},r),n))},n}var Wt=function(e){return Ut(Bt,e)},Vt=Wt;be.forEach((function(e){Vt[e]=Wt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ft(e),bt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var a=n(Qe(Rt(this.rules,t,r,n)),""),o=this.componentId+e;r.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&bt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();function Zt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Qe(Gt.apply(void 0,o([e],t,!1))),a=je(n);return new zt(a,n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=ut(),n=Qe([r&&'nonce="'.concat(r,'"'),"".concat(se,'="true"'),"".concat(le,'="').concat(ue,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw $e(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw $e(2);var r=e.instance.toString();if(!r)return[];var o=((t={})[se]="",t[le]=ue,t.dangerouslySetInnerHTML={__html:r},t),i=ut();return i&&(o.nonce=i),[n.createElement("style",a({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new bt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw $e(2);return n.createElement(jt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw $e(3)}})(),"__sc-".concat(se,"__");const Jt=Vt.div`
    display: flex:
    align-items: center:
    justify-content: center;
    padding: 0;
    margin: 0;
`;function Qt(e){let{children:t}=e;return n.createElement(Jt,null,t)}const Xt=Vt.div`
    width: 100%;
    height: 60rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: url(
        "data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h10v10h-10z' fill='rgba(255,255,255,0.03)'/%3E%3Ccircle cx='5' cy='5' r='1' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E"),
        linear-gradient(94.76deg, #003366 0%, #004080 51.58%, #004C99 99.45%
    );
    background-size: auto, cover;
    background-repeat: repeat, no-repeat;
    color: #ffffff;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-top: 1rem solid #003366;
`;function Ht(e){let{children:t}=e;return n.createElement(Xt,null,t)}var Kt=r(5399),$t=r.p+"static/logo-pm-ipixuna-1-6b9d67a817bb074e41745730c212a6b2.png",_t=r.p+"static/logo-pm-itapipoca-cd4757a75cd467f1fbf6f69e79fc9e8a.png";const er=Vt.button`
    height: 2.5rem;
    width: 12rem;
    font-weight: 600;
    font-size: 1.1rem;
    font-family: "Roboto", sans-serif;
    background-color: #ffc107;
    color: #fff;
    border: none;
    border-radius: 20px 0 20px 0;
    margin: 2rem;

    cursor: pointer;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        background-color: #e0a800; /* Tom mais escuro de laranja */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Adiciona uma pequena sombra */
        transform: translateY(-1px); /* Levemente para cima */
    }

    &:active {
        background-color: #d19600; /* Tom ainda mais escuro ao clicar */
        box-shadow: 0 0 0 rgba(0, 0, 0, 0); /* Remove a sombra ao clicar */
        transform: translateY(0); /* Retorna à posição original ao clicar */
    }
`;function tr(){return n.createElement(er,null,"Mais clientes")}const rr=Vt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(100% - 4rem);
    background: #ffffff;
    padding: 2rem;
`,nr=Vt.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    color: #333;
    margin: 2rem 0;

    @media (max-width: 768px) {
        margin: 1rem 0;
    }
`,ar=Vt.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start; /* Alinha os slides à esquerda */
    overflow-x: hidden; /* Esconde o que não cabe horizontalmente */
    width: 100%; /* Garante que o content ocupe toda a largura disponível */
    margin: 0 1rem; /* Adiciona margem nas laterais para os botões */
`,or=Vt.div`
    z-index: 1;
    background: #ffffff;
`,ir=Vt.button`
    z-index: 1;
    height: 13rem;
    width: 2rem;
    border: none;
    background-color: #ffffff;
    margin: 0.5rem 0;
    border-radius: 0.5rem 0 0 0.5rem;
    border-bottom: 10px solid #004C99;
    opacity: 0.7;

    cursor: pointer;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

    &:hover {
        background-color: rgb(236, 236, 236);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transform: translateY(-1px);
        opacity: 1;
    }

    &:active {
        background-color: rgb(200, 200, 200);
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        transform: translateY(0);
    }

    svg {
        display: block;
        margin: auto;
    }

    @media (max-width: 768px) {
        height: 6.4rem;
        margin: 1rem;
        border-bottom: 5px solid #004C99;
    }
`,sr=Vt.button`
    z-index: 1;
    height: 13rem;
    width: 2rem;
    border: none;
    background-color: #ffffff;
    margin: 0.5rem 0;
    border-radius: 0 0.5rem 0.5rem 0;
    border-bottom: 10px solid #004C99;
    opacity: 0.7;

    cursor: pointer;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

    &:hover {
        background-color: rgb(236, 236, 236);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transform: translateY(-1px);
        opacity: 1;
    }

    &:active {
        background-color: rgb(200, 200, 200);
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        transform: translateY(0);
    }

    svg {
        display: block;
        margin: auto;
    }

    @media (max-width: 768px) {
        height: 6.4rem;
        margin: 1rem;
        border-bottom: 5px solid #004C99;
    }
`,cr=Vt.div`
    display: flex;
    transition: transform 0.3s ease-in-out;
`,lr=Vt.div`
    height: 6rem;
    border-radius: 0.5rem;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease-in-out;
    background-color: #fff;
    margin: 0 0.5rem; 
    border-bottom: 5px solid #004C99; 
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        height: 12.5rem; 
        margin: 1rem;
        border-radius: 1rem;
        border-bottom: 10px solid #004C99;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
`,ur=Vt.img`
    max-height: 5rem; 
    max-width: 100%; 
    object-fit: contain;

    @media (min-width: 768px) {
        height: 13rem; 
        width: 20rem;
    }
`,mr=[{id:1,src:$t,alt:"Ipixuna"},{id:2,src:_t,alt:"Itapipoca"},{id:3,src:$t,alt:"Ipixuna"},{id:4,src:_t,alt:"Itapipoca"},{id:5,src:$t,alt:"Ipixuna"},{id:6,src:_t,alt:"Itapipoca"},{id:7,src:$t,alt:"Ipixuna"},{id:8,src:_t,alt:"Itapipoca"},{id:9,src:$t,alt:"Ipixuna"},{id:10,src:_t,alt:"Itapipoca"}];function dr(){const{0:e,1:t}=(0,n.useState)(0),r=(0,n.useRef)(null);return(0,n.useEffect)((()=>{r.current&&(r.current.style.transform=`translateX(${e}px)`)}),[e]),n.createElement(rr,null,n.createElement(nr,null,"Conheça alguns clientes que confiam na M2A e usam nossos produtos"),n.createElement(ar,null,n.createElement(or,null,n.createElement(ir,{onClick:()=>{if(r.current){const e=r.current.querySelector(":scope > div:first-child");if(e){const r=e.offsetWidth+parseFloat(getComputedStyle(e).marginRight);t((e=>Math.min(e+r,0)))}}}},n.createElement(Kt.xrT,{size:20,color:"#004C99"}))),n.createElement(cr,{ref:r},mr.map((e=>n.createElement(lr,{key:e.id},n.createElement(ur,{src:e.src,alt:e.alt}))))),n.createElement(or,null,n.createElement(sr,{onClick:()=>{if(r.current){const e=r.current.querySelector(":scope > div:last-child"),n=r.current.offsetWidth;if(e){const a=e.offsetWidth+parseFloat(getComputedStyle(e).marginRight),o=-(r.current.scrollWidth-n);t((e=>Math.max(e-a,o)))}}}},n.createElement(Kt.Xor,{size:20,color:"#004C99"})))),n.createElement(tr,null))}var fr=r(4794);const pr=Vt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 2rem;
    height: 5rem;    
    width: 15rem;

    @media (max-width: 1024px) {
        margin: 2rem;
        justify-content: flex-start;
        flex-direction: row;
    }
`,hr=Vt.img`
    transition: all 0.95s ease-in-out;

    ${e=>e.isCabecalhoFlutuante?"":"filter: sepia(100%) hue-rotate(200deg) brightness(70%);"}
    animation: rotate-center 20s ease-in infinite both;

    @keyframes rotate-center {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 768px) {
        height: 2.5rem;
    }
`,gr=Vt.img`
    transition: all 0.95s ease-in-out;

    ${e=>e.isCabecalhoFlutuante?"":"\n        filter: sepia(100%) hue-rotate(200deg) brightness(50%);\n\n        "}
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;

    @media (max-width: 768px) {
        height: 1.5rem; 
    }
`;function br(e){let{isCabecalhoFlutuante:t}=e;return n.createElement(pr,{isCabecalhoFlutuante:t},n.createElement(hr,{isCabecalhoFlutuante:t,src:(0,fr.withPrefix)("data:image/png;base64,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")}),n.createElement(gr,{isCabecalhoFlutuante:t,src:(0,fr.withPrefix)("data:image/png;base64,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")}))}const xr=Vt.button`
    transition: filter 0.3s ease-in-out; /* Adicionando transição para o filtro */
    height: 3rem;
    width: 15rem;
    font-weight: bold;
    font-size: 1.1rem;
    font-family: "Poppins", sans-serif;
    background-color: #ffc107;
    color: #fff;
    border: none;
    border-radius: 20px 0 20px 0;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        background-color: #e0a800; /* Tom mais escuro de laranja */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Adiciona uma pequena sombra */
        transform: translateY(-1px); /* Levemente para cima */
    }

    &:active {
        background-color: #d19600; /* Tom ainda mais escuro ao clicar */
        box-shadow: 0 0 0 rgba(0, 0, 0, 0); /* Remove a sombra ao clicar */
        transform: translateY(0); /* Retorna à posição original ao clicar */
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;function yr(e){let{isCabecalhoFlutuante:t}=e;return n.createElement(xr,{isCabecalhoFlutuante:t},"Selecione um plano")}const vr=Vt.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1000;
    transition: all 0.75s ease-in-out;
    height: 8rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;

    &.cabecalho-suspenso {
        background-color: transparent; /* Ou outra cor inicial */
        box-shadow: none;
    }

    &.cabecalho-fixo {
        background-color: #ffffff; /* Cor de fundo quando fixo */
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        opacity: 0.9;
    }

    @media (max-width: 1024px) {
        height: 6rem;
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        height: 4rem;
        justify-content: space-between;
    }
`;function wr(e){let{children:t}=e;const{0:r,1:a}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>{window.scrollY>100&&!r?a(!0):window.scrollY<=100&&r&&a(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[r]);const o=r?"cabecalho-fixo":"cabecalho-suspenso";return n.createElement(vr,{className:o},t)}const Ar=Vt.button`
    height: 3rem;
    width: 18rem;
    font-weight: bold;
    font-size: 1.1rem;
    font-family: "Poppins", sans-serif;
    background-color: #ffc107;
    color: #fff;
    border: none;
    border-radius: 20px 0 20px 0;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        background-color: #e0a800; /* Tom mais escuro de laranja */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Adiciona uma pequena sombra */
        transform: translateY(-1px); /* Levemente para cima */
    }

    &:active {
        background-color: #d19600; /* Tom ainda mais escuro ao clicar */
        box-shadow: 0 0 0 rgba(0, 0, 0, 0); /* Remove a sombra ao clicar */
        transform: translateY(0); /* Retorna à posição original ao clicar */
    }
`;function Er(){return n.createElement(Ar,null,"Solicite uma apresentação")}const kr=Vt.div`
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;   
    height: 50rem;
    display: flex;
    justify-content: left;
    padding: 0 10rem;
    text-align: center;
    color: white;

    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
        url(https://compras.m2atecnologia.com.br/static/img/slides/pngegg.png);
    background-attachment: fixed;
    background-size: cover;
    background-position: center;

    @media (max-width: 1024px) {
        justify-content: center;
        padding: 0;
    }
`,Cr=Vt.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    border-radius: 2rem;
    padding: 2rem;  
    margin: 2rem;
    animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

    @keyframes text-focus-in {
        0% {
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    }

    @media (max-width: 1024px) {
        align-items: center;
        padding: 0;
        margin: 0;
    }
`,Sr=Vt.label`
    font-size: 2.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }
`,jr=Vt.label`
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    margin-bottom: 1.5rem;
    text-align: left;

    @media (max-width: 1024px) {
        font-size: 1.2rem;
        text-align: center;
        text-wrap-mode: wrap;
        margin: 0 1rem 1rem 1rem;
    }
`;function zr(){return n.createElement(kr,null,n.createElement(Cr,null,n.createElement(Sr,null,"A M2A tem as soluções"),n.createElement(jr,null,"que você precisa para realizar suas contratações governamentais!"),n.createElement(Er,null)))}var Ir=r(6512);const Or=Zt`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`,Pr=Vt.ul`
    padding: 0 40px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    background: #ffffff;
    border-radius: 3rem;

    @media (max-width: 1024px) {
        height: 3rem;
    }

    @media (max-width: 768px) {
        height: 2rem;
    }
`,Mr=(Vt.li`
    margin: 0 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
`,Vt(fr.Link)`
    color: #3B3D3D;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    padding: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    position: relative;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: #007bff; /* Cor de destaque */
        transition: width 0.3s ease-out;
    }

    &:hover {
        color: #007bff;
        &::after {
            animation: ${Or} 0.3s ease-out forwards;
        }
    }

    &[aria-current="page"] {
        color: #007bff;
        font-weight: 700;
    }

    @media (max-width: 1024px) {
        font-size: 12px;
    }

    @media (max-width: 768px) {
        font-size: 10px;
    }
`),Rr=Vt.ul`
    position: absolute;
    top: 100%;
    left: -50%;
    transform: translateX(-50%);
    background: #ffffff;
    border-radius: 0.5rem;
    list-style-type: none;
    padding: 1rem 1.5rem;
    margin: 0;
    width: 18rem;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-out, visibility 0.3s ease-out, transform 0.3s ease-out;
`,Fr=Vt(fr.Link)`
    display: block;
    padding: 0.7rem 1rem;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: #555;
    font-size: 16px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    border-radius: 0.25rem;
    text-align: left;

    &:hover {
        background-color: #f8f8f8;
        color: #007bff;
    }
`,Dr=Vt(Ir.pte)`
    font-size: 0.8rem;
`,Nr=Vt.li`
    margin: 0 1.5rem;
    position: relative;
    display: flex;
    align-items: center;

    &:hover > ul { /* Seleciona o Submenu (ul) que é filho direto ao passar o mouse */
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, 0); /* Remove o translateY(-5px) no hover do Submenu */
        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @media (max-width: 1024px) {
        margin: 0 1.5rem;
    }

    @media (max-width: 768px) {
        margin: 0 0.5rem;
    }
`;function Yr(){return n.createElement(Pr,null,n.createElement(Nr,null,n.createElement(Mr,{to:"/inicio",activeClassName:"active"},"Início")),n.createElement(Nr,null,n.createElement(Mr,{to:"/contratacoes",activeClassName:"active"},"Contratações")),n.createElement(Nr,null,n.createElement(Mr,{style:{width:"6rem"}},"Produtos ",n.createElement(Dr,null)),n.createElement(Rr,null,n.createElement(Fr,{to:"/produto-a",activeClassName:"active"},"M2A Planejamentos"),n.createElement(Fr,{to:"/produto-b",activeClassName:"active"},"M2A Compras"),n.createElement(Fr,{to:"/produto-c",activeClassName:"active"},"M2A Pesquisas"),n.createElement(Fr,{to:"/produto-c",activeClassName:"active"},"M2A Processos"),n.createElement(Fr,{to:"/produto-c",activeClassName:"active"},"M2A Processos Eletrônicos"),n.createElement(Fr,{to:"/produto-c",activeClassName:"active"},"M2A Tramitações"),n.createElement(Fr,{to:"/produto-c",activeClassName:"active"},"M2A Contratos"),n.createElement(Fr,{to:"/produto-c",activeClassName:"active"},"M2A Fornecedores"))),n.createElement(Nr,null,n.createElement(Mr,{to:"/sobre",activeClassName:"active"},"Sobre")),n.createElement(Nr,null,n.createElement(Mr,{to:"/conteudo",activeClassName:"active"},"Conteúdo")))}const Lr=Vt.div`
    display: flex;
    align-items: center;
    position: relative;
`,Br=Vt.button`
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1001;
    color: #ffffff;
    margin: 1rem;

    &:hover {
        color: #007bff;
    }

    @media (max-width: 1024px) {
        color: #dfdfdf;
    }
`,qr=Vt.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`,Tr=Vt.div`
    position: fixed;
    top: 0;
    right: ${e=>{let{isOpen:t}=e;return t?"0":"-100%"}};
    height: 100%;
    width: 280px;
    background: #ffffff;
    z-index: 1002;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: right 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow-y: auto;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
`,Gr=Vt(fr.Link)`
    color: #3B3D3D;
    font-size: 18px;
    text-decoration: none;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f1f1f1;

    &:hover {
        color: #007bff;
    }
`,Ur=Vt.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3B3D3D;
    font-size: 18px;
    cursor: pointer;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f1f1f1;
    position: relative;

    &:hover {
        color: #007bff;
    }
`,Wr=Vt.div`
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    transform: ${e=>{let{isOpen:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
`,Vr=Vt.div`
    max-height: ${e=>{let{isOpen:t}=e;return t?"00px":"0"}};
    overflow: hidden;
    transition: max-height 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
`,Zr=Vt(fr.Link)`
    color: #555;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #007bff;
    }
`;var Jr=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:r,1:a}=(0,n.useState)(!1),o=()=>{t(!e),e||a(!1)};return n.createElement(Lr,null,n.createElement(Br,{onClick:o},e?n.createElement(Ir.WQq,{size:24}):n.createElement(Ir.nej,{size:24})),e&&n.createElement(qr,{onClick:o}),n.createElement(Tr,{isOpen:e},n.createElement(Gr,{to:"/inicio"},"Início"),n.createElement(Gr,{to:"/contratacoes"},"Contratações"),n.createElement(Ur,{onClick:()=>{a(!r)}},n.createElement("span",null,"Produtos"),n.createElement(Wr,{isOpen:r},n.createElement(Ir.pte,{size:16}))),n.createElement(Vr,{isOpen:r},n.createElement(Zr,{to:"/produto-a"},"M2A Planejamentos"),n.createElement(Zr,{to:"/produto-b"},"M2A Compras"),n.createElement(Zr,{to:"/produto-c"},"M2A Pesquisas"),n.createElement(Zr,{to:"/produto-d"},"M2A Processos"),n.createElement(Zr,{to:"/produto-e"},"M2A Processos Eletrônicos"),n.createElement(Zr,{to:"/produto-f"},"M2A Tramitações"),n.createElement(Zr,{to:"/produto-g"},"M2A Contratos"),n.createElement(Zr,{to:"/produto-h"},"M2A Fornecedores")),n.createElement(Gr,{to:"/sobre"},"Sobre"),n.createElement(Gr,{to:"/conteudo"},"Conteúdo")))};const Qr=Vt.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
`,Xr=Vt.label`
    text-align: center;
    line-height: 2rem;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    margin: 5rem 5rem 1rem 5rem;
    position: relative;
    overflow: hidden; 
    white-space: nowrap;
    transition: width 0.3s ease-in-out;

    @media (max-width: 768px) {
        text-wrap-mode: wrap;
        margin: 5rem 3rem 1rem 3rem;
    }
`,Hr=Vt.div`
    display: inline-block;
`,Kr=Vt.label`
    color: white;
    margin-bottom: 2rem;
    font-family: 'Montserrat Alternates', sans-serif;
    transform-origin: top;

    @media (max-width: 768px) {
        text-wrap-mode: wrap;
        margin: 1rem;
        text-align: center;
    }
`,$r=Zt`
    0% { transform: translateY(-100%); opacity: 0; }
    40% { transform: translateY(0); opacity: 1}
    100% { transform: translateY(0); opacity: 0}
`,_r=Vt.label`

`,en=Vt.label`
    display: inline-block; /* Importante para a largura */
    animation: ${$r} 3.5s infinite;
`;function tn(e){let{palavras:t=[],tempoRotacao:r=3e3}=e;const{0:a,1:o}=(0,n.useState)(0),{0:i,1:s}=(0,n.useState)(t[0]);return(0,n.useEffect)((()=>{const e=setInterval((()=>{o((e=>(e+1)%t.length))}),r);return()=>clearInterval(e)}),[]),(0,n.useEffect)((()=>{s(t[a])}),[a]),n.createElement(_r,null,n.createElement(en,{key:i},i))}var rn=r.p+"static/mural-m2a-compras-428c1ab1a164735e123280dc195aaefb.jpg",nn=r.p+"static/mural-m2a-planejamento-cf862d4f12c4c310a960e0a6335020c2.jpg",an=r.p+"static/mural-m2a-pesquisas-1cd49d382db019e2e60c03b1d3284d88.jpg",on=r.p+"static/mural-m2a-fornecedores-f899bf9bbaa6570ab2968c054b3bc02f.jpg";const sn=Vt.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  overflow-x: auto; /* Para lidar com muitas imagens */

  @media (max-width: 728px) {
	display: none;
  }
`,cn=Vt.div`
  	flex: 0 0 auto;
  	width: auto;
  	max-width: 400px; /* Ajuste conforme a largura desejada das capturas de tela */
  	height: auto;
	border-radius: 8px;
  	overflow: hidden;
  	margin-right: -30px; /* Margem negativa para sobreposição (ajuste conforme necessário) */
`,ln=Vt.img`
  	position: absolute;
  	z-index: 1;
  	left: 0;
  	bottom: 50%;
  	width: 44rem;
  	height: 22rem;
  	opacity: 1;
  	transform: translateY(20px);
  	transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    box-shadow: -10px 7px 10px -14px rgb(0 0 0);
    border-radius: 12px;

`,un=Vt.img`
  	position: absolute;
  	z-index: 2;
  	left: 25rem;
  	bottom: 52%;
  	width: 50rem;
  	height: 25rem;
  	opacity: 1;
  	transform: translateY(20px);
   	transition: opacity 0.5s ease-out, transform 0.5s ease-out;
	box-shadow: -10px 7px 10px -14px rgb(0 0 0);
	border-radius: 12px;

`,mn=Vt.img`
	position: absolute;
	z-index: 3;
	left: 60rem;
	bottom: 50%;
	width: 65rem;
	height: 32.5rem;
	opacity: 1;
	transform: translateY(20px);
	transition: opacity 0.5s ease-out, transform 0.5s ease-out;
	box-shadow: -10px 7px 10px -14px rgb(0 0 0);
	border-radius: 12px;
`,dn=Vt.img`
	position: absolute;
	z-index: 4;
	left: 90rem;
	bottom: 50%;
	width: 44rem;
  	height: 22rem;
	opacity: 1;
	transform: translateY(20px);
	transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  	box-shadow: -10px 7px 10px -14px rgb(0 0 0);
	border-radius: 12px;
`;var fn=()=>n.createElement(sn,null,n.createElement(cn,null,n.createElement(ln,{src:rn,alt:"M2A Compras"})),n.createElement(cn,null,n.createElement(un,{src:nn,alt:"M2A Planejamento"})),n.createElement(cn,null,n.createElement(mn,{src:on,alt:"M2A Fornecedores"})),n.createElement(cn,null,n.createElement(dn,{src:an,alt:"M2A Pesquisas"})));function pn(){return n.createElement(Qr,null,n.createElement(Xr,null,n.createElement(Hr,null,"M2A")," é o mais ",n.createElement(tn,{palavras:["eficiente","completo","prático"],tempoRotacao:3e3})," portal de contratações públicas."),n.createElement(Kr,null,"Todas as ferramentas em um só lugar, para quem vai vender e quem vai comprar."),n.createElement(fn,null))}const hn=Vt.div`
    height: 95rem;
    background: url(
        "data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h10v10h-10z' fill='rgba(255,255,255,0.03)'/%3E%3Ccircle cx='5' cy='5' r='1' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E"),
        linear-gradient(94.76deg, #003366 0%, #004080 51.58%, #004C99 99.45%
    );
    background-size: auto, cover;
    background-repeat: repeat, no-repeat;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    margin-bottom: 4px;
    overflow: hidden;

    @media (max-width: 768px) {
        max-height: 70rem;
    }
`;function gn(e){let{isCabecalhoFlutuante:t,windowWidth:r}=e;return n.createElement(hn,null,n.createElement(wr,null,n.createElement(br,{isCabecalhoFlutuante:t}),r<=1024?n.createElement(Jr,null):n.createElement(Yr,null),n.createElement(yr,{isCabecalhoFlutuante:t})),n.createElement(zr,null),n.createElement(pn,null))}const bn=Vt.div`
    flex: 1 1 calc(33.33% - 6rem);
    position: relative; 
    border-radius: 1rem;
    margin: 2rem 1rem;
    min-height: 15rem;   
    min-width: 15rem;
`,xn=Vt.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    min-height: 15rem;
    margin: -0.8rem 0.8rem 0.8rem -0.8rem;
    border-radius: 0.8rem;
    background: url(${e=>e.url_imagem}) no-repeat center center;
    background-size: cover;
    box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.34);
    filter: brightness(65%);
    min-width: 15rem;
    
    @media (max-width: 1200px) {
        flex: 1 1 calc(50% - 20px); /* 2 itens por linha em telas menores */
    }

    @media (max-width: 900px) {
        flex: 1 1 100%; /* 1 item por linha em telas pequenas */
    }
`,yn=Vt.label`
    position: absolute;
    bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 1rem;
    height: 2.8rem;
    width: 15rem;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 1rem;
    border-radius: 0.5rem;
    color: #ffffff;
    background-color: #ffc107;
    font-family: 'Poppins', sans-serif;
    clip-path: polygon(0% 0%, 100% 0%, 94% 50%, 100% 100%, 0% 100%, 0% 0%, 100% 100%);

    @media (max-width: 768px) {
        font-size: 1rem;
        width: 12rem;
    }
`,vn=Vt.label`
    position: absolute;
    bottom: 1rem;
    margin: 0 1rem 1rem 1rem;
    color: #ffffff;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;function wn(e){let{titulo:t,descricao:r,url_imagem:a,style:o}=e;return n.createElement(bn,{style:o},n.createElement(xn,{url_imagem:a}),n.createElement(yn,null,t),n.createElement(vn,null,r))}const An=Vt.button`
    height: 2.5rem;
    width: 12rem;
    font-weight: 600;
    font-size: 1.1rem;
    font-family: "Roboto", sans-serif;
    background-color: #ffc107;
    color: #fff;
    border: none;
    border-radius: 20px 0 20px 0;

    cursor: pointer;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        background-color: #e0a800; /* Tom mais escuro de laranja */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Adiciona uma pequena sombra */
        transform: translateY(-1px); /* Levemente para cima */
    }

    &:active {
        background-color: #d19600; /* Tom ainda mais escuro ao clicar */
        box-shadow: 0 0 0 rgba(0, 0, 0, 0); /* Remove a sombra ao clicar */
        transform: translateY(0); /* Retorna à posição original ao clicar */
    }
`;function En(){return n.createElement(An,null,"Mais produtos")}var kn=r.p+"static/produto_compras-61bee3399e4ad0ca540aaa43b99cb8e2.png",Cn=r.p+"static/produto_pesquisa-69171438491862b545b72050ffc2c8da.png",Sn=r.p+"static/produto_processos-195e6c1cdfab58a9c5bd12f9eff034f6.png",jn=r.p+"static/produto_contratos-6f24d586024471fab471fe6b0b77264f.png",zn=r.p+"static/produto_fornecedores-951f8846253b763d272d38f78e0d5c4f.png";const In=Vt.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    border-radius: 2rem;
`,On=Vt.div`
    flex-wrap: wrap;
    display: flex;
`,Pn=Vt.div`
    flex: 1 1 calc(20% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 8rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`,Mn=Vt.div`
    flex: 3 1 calc(55% - 20px);
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;

    @media (max-width: 768px) {
        flex: 1;
        padding: 1rem;
    }
`,Rn=Vt.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #003366;
    min-width: 30rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        min-width: 16rem;
    }
`,Fn=Vt.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 1.2rem;
`;function Dn(){return n.createElement(In,null,n.createElement(On,null,n.createElement(Pn,null,n.createElement(Rn,null,"Nossas soluções são completas para que a gestão governamental do seu munícipio seja realizada com excelência."),n.createElement(Fn,null,"Nosso portfólio completo permite centralizar todas as soluções de gestão governamental em um único local. Desde o planejamento, passando pela documento de formalização de demanda, processos administrativos e contratação, até a gestão de contratos.")),n.createElement(Mn,null,n.createElement(wn,{titulo:"M2A Planejamentos",descricao:"Planeje suas demandas",url_imagem:jn,style:{background:"royalblue"}}),n.createElement(wn,{titulo:"M2A Compras",descricao:"Crie suas demandas",url_imagem:kn,style:{background:"rgba(0, 110, 156, 0.69)"}}),n.createElement(wn,{titulo:"M2A Pesquisas",descricao:"Realize suas cotações de preço",url_imagem:Cn,style:{background:"#0F9B8E"}}),n.createElement(wn,{titulo:"M2A Processos",descricao:"Parametrize suas contratações",url_imagem:Sn,style:{background:"#478dcc"}}),n.createElement(wn,{titulo:"M2A Fornecedores",descricao:"Participe de contratações",url_imagem:zn,style:{background:"#2b576e"}}),n.createElement(wn,{titulo:"M2A Contratos",descricao:"Gerencie seus contratos",url_imagem:jn,style:{background:"#2F4F4F"}}))),n.createElement(En,null))}var Nn=r(6973),Yn=r(7909),Ln=r(5867),Bn=r(5066),qn=r(1351),Tn=r(2388),Gn=r(1406);const Un=Vt.div`
    flex: 1 1 calc(25% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10rem;    
    border-radius: 0.8rem;
    min-width: 15rem;

    @media (max-width: 768px) {
        height: 7rem;
        font-size: 1.5rem;
    }
`,Wn=Vt.label`
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`,Vn=Vt.label`
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: 'Montserrat Alternates', sans-serif;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`,Zn=Vt.div`
    height: 10rem;
    width: 20rem;
    margin: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 7rem;
    }
`,Jn=Vt.div`
    color:rgb(245, 212, 115);
    font-size: 5rem;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`,Qn=Vt.label`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;

    animation: heartbeat 8s ease-in-out infinite both;

    @keyframes heartbeat {
        from {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: center center;
                    transform-origin: center center;
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        3% {
            -webkit-transform: scale(0.91);
                    transform: scale(0.91);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        6% {
            -webkit-transform: scale(0.98);
                    transform: scale(0.98);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        9% {
            -webkit-transform: scale(0.87);
                    transform: scale(0.87);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        12% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        50% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        75% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
    }
`,Xn=Vt.label`
    color: #ffffff;
    font-size: 1.1rem;
    font-family: 'Montserrat Alternates', sans-serif;
    text-align: center;
    width: 15rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;function Hn(e){let{titulo:t,descricao:r}=e;return n.createElement(Un,null,n.createElement(Wn,null,t),n.createElement(Vn,null,r))}function Kn(e){let{icone:t,titulo:r,descricao:a}=e;return n.createElement(Zn,null,n.createElement(Jn,null,t),n.createElement(Qn,null,r),n.createElement(Xn,null,a))}function $n(e){let{valorFinal:t,visible:r,duracao:a=1e3}=e;const{0:o,1:i}=(0,n.useState)(0),s=(0,n.useRef)(0);return(0,n.useEffect)((()=>{const e=performance.now(),r=()=>{const n=performance.now()-e,o=Math.min(n/a,1);i(Math.ceil(o*t)),o<1&&(s.current=requestAnimationFrame(r))};return s.current=requestAnimationFrame(r),()=>cancelAnimationFrame(s.current)}),[t,a,r]),n.createElement("span",null,o)}const _n=Vt.div`
    min-height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: calc(100% - 4rem);
    margin: 40px auto;
    padding: 2rem;
    background: url(
        "data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h10v10h-10z' fill='rgba(255,255,255,0.03)'/%3E%3Ccircle cx='5' cy='5' r='1' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E"),
        linear-gradient(94.76deg, #003366 0%, #004080 51.58%, #004C99 99.45%
    );
    background-size: auto, cover;
    background-repeat: repeat, no-repeat;
    border-radius: 2rem;
    border-bottom: 1.2rem solid #003366;
    border-top: 1.2rem solid #003366;
    margin-top: 10rem;
`,ea=Vt.div`
    margin-top: -7rem!important;
    min-height: 10rem;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 4rem);
    margin: 20px auto;
    background: #003366;
    border-radius: 2rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.34);

    @media (max-width: 768px) {
        width: calc(100% - 1rem);
        margin: 5px auto;
    }
`;function ta(){const e=(0,n.useRef)(null),{0:t,1:r}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?r(!0):r(!1)}))}),{threshold:.1});return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}}),[]),n.createElement(_n,{ref:e},n.createElement(ea,null,n.createElement(Hn,{titulo:n.createElement(n.Fragment,null,n.createElement("label",null,"+ "),n.createElement($n,{visible:t,valorFinal:300,duracao:2500})),descricao:"Clientes"}),n.createElement(Hn,{titulo:n.createElement(n.Fragment,null,n.createElement("label",null,"+ "),n.createElement($n,{visible:t,valorFinal:1e4,duracao:2500}),n.createElement("label",null," mil ")),descricao:"Contratações"}),n.createElement(Hn,{titulo:n.createElement(n.Fragment,null,n.createElement("label",null,"+ "),n.createElement($n,{visible:t,valorFinal:5e3,duracao:2500}),n.createElement("label",null," mil ")),descricao:"Fornecedores"}),n.createElement(Hn,{titulo:n.createElement(n.Fragment,null,n.createElement("label",null,"+ "),n.createElement($n,{visible:t,valorFinal:15e3,duracao:2500}),n.createElement("label",null," mil ")),descricao:"Contratos"})),n.createElement(Kn,{icone:n.createElement(Yn.c4U,null),titulo:"+ 300 mil",descricao:"dfd's criados"}),n.createElement(Kn,{icone:n.createElement(Bn.QDl,null),titulo:"+ 250 mil",descricao:"pesquisas realizadas"}),n.createElement(Kn,{icone:n.createElement(Ln.xAX,null),titulo:"+ 200 mil",descricao:"pedidos de cotação respondidos"}),n.createElement(Kn,{icone:n.createElement(Nn.fIi,null),titulo:"+ 1 milhão",descricao:"preços importados"}),n.createElement(Kn,{icone:n.createElement(Ir.Gjp,null),titulo:"+ 200 mil",descricao:"licitações públicadas"}),n.createElement(Kn,{icone:n.createElement(qn.Ua$,null),titulo:"+ 50 mil",descricao:"contratações diretas públicadas"}),n.createElement(Kn,{icone:n.createElement(Tn.sn$,null),titulo:"+ 20 mil",descricao:"procedimentos auxiliares públicados"}),n.createElement(Kn,{icone:n.createElement(Gn.sGK,null),titulo:"+ 100 mil",descricao:"processos eletrônicos gerenciados"}))}const ra=Vt.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;
    height: 34rem;
    max-width: 22rem;
    margin: 2rem 1rem;
    border-radius: 1.5rem;
    overflow: visible;
`,na=Vt.div`
    padding: 1rem;
    opacity: 1;
    background: transparent;
    box-shadow: none;
    max-height: 35rem;
`,aa=Vt.img`
    margin-top: -45px;
    height: 20rem;
    width: 100%;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.50rem 0.50rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.50rem -0.0625rem;
    filter: brightness(95%);
`,oa=Vt.div`
    display: flex;
    flex-direction: column;
    padding: 24px 8px 8px;
    opacity: 1;
    background: transparent;
    box-shadow: none;
}
`,ia=Vt.label`
    font-weight: bold;
    font-size: 1rem;
    color: #003366;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`,sa=Vt.label`
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;function ca(e){let{imagem:t,titulo:r,descricao:a,style:o}=e;return n.createElement(ra,{style:o},n.createElement(na,null,n.createElement(aa,{src:t}),n.createElement(oa,null,n.createElement(ia,null,r),n.createElement(sa,null,a))))}var la=r.p+"static/ia-software-f8494f538ed934a3d0831fe9196cc8fc.png",ua=r.p+"static/ia-2-software-4a24c1234c12e6283803f7de7b5dcbca.png",ma=r.p+"static/ia-3-software-5d8d2dd0824c3f5f50e594a2e951b666.png";const da=Vt.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    padding: 5rem 0;
    background: linear-gradient(to bottom, #FFFFFF,rgba(0, 51, 102, 0.25), #FFFFFF),
            repeating-linear-gradient(
                45deg,
                transparent,
                transparent 5px,
                rgba(240, 240, 240, 0.2) 5px,
                rgba(240, 240, 240, 0.2) 10px
            );
    background-blend-mode: overlay;
`,fa=Vt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 45rem;
`,pa=Vt.label`
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    margin: 4rem;
`;function ha(){return n.createElement(da,null,n.createElement(pa,null,"MIA: A Inteligência Artificial que Entende o seu Governo"),n.createElement(fa,null,n.createElement(ca,{style:{alignSelf:"flex-end"},imagem:la,titulo:"Estudos Técnicos Aprofundados",descricao:" Otimize seus estudos técnicos preliminares com a MIA, nossa Inteligência Artificial. Ela  auxilia na geração de análises bem elaboradas, garantindo um entendimento completo da demanda  e a melhor abordagem para atendê-la. Conte com a precisão e eficiência da MIA para impulsionar  seus projetos. "}),n.createElement(ca,{style:{alignSelf:"flex-start"},imagem:ma,titulo:"Formalização de Demandas Inteligente e Eficaz",descricao:" Simplifique a formalização de suas demandas com a MIA. Nossa Inteligência Artificial auxilia na  criação de objetos e justificativas claras e concisas, detalhando o que é a demanda e o motivo  de sua necessidade. Garanta documentos bem elaborados e um processo mais eficiente com a MIA. "}),n.createElement(ca,{style:{alignSelf:"flex-end"},imagem:ua,titulo:"Avaliação de Riscos Inteligente e Seguras",descricao:" Minimize riscos em suas contratações com a MIA, nossa Inteligência Artificial especializada em  avaliação de perigos. Ela analisa dados complexos e identifica potenciais vulnerabilidades,  fornecendo insights cruciais para decisões mais seguras e eficientes. Confie na MIA para  proteger seus projetos. "})))}const ga=Vt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    width: calc(100% - 4rem);
    background: #003366;
    margin: 0.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`,ba=Vt.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    background: #ffc107;
    color: #ffffff;
    min-height: 3rem;
    min-width: 3rem;
    border-radius: 0.5rem;
    margin-left: -1.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`,xa=Vt.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1rem;
    width: 100%;
`,ya=Vt.label`
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
`,va=Vt.label`
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
    color: #ffffff;
`,wa=Vt.img`
    height: 5rem;
    width: 6rem;
    border-radius: 0.9rem;
    background: blue;
    margin: 1.5rem;
`;function Aa(e){let{numero:t,titulo:r,data:a,imagem:o,style:i}=e;return n.createElement(ga,{style:i},n.createElement(ba,null,t),n.createElement(xa,null,n.createElement(ya,null,r),n.createElement(va,null,a)),n.createElement(wa,{src:o}))}const Ea=Vt.button`
    height: 2.5rem;
    width: 12rem;
    font-weight: 600;
    font-size: 1.1rem;
    font-family: "Roboto", sans-serif;
    background-color: #ffc107;
    color: #fff;
    border: none;
    border-radius: 20px 0 20px 0;
    margin-bottom: 3rem;

    cursor: pointer;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        background-color: #e0a800; /* Tom mais escuro de laranja */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Adiciona uma pequena sombra */
        transform: translateY(-1px); /* Levemente para cima */
    }

    &:active {
        background-color: #d19600; /* Tom ainda mais escuro ao clicar */
        box-shadow: 0 0 0 rgba(0, 0, 0, 0); /* Remove a sombra ao clicar */
        transform: translateY(0); /* Retorna à posição original ao clicar */
    }
`;function ka(){return n.createElement(Ea,null,"Mais notícias")}const Ca=Vt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    height: 65rem;
    border-radius: 2rem;
    background: linear-gradient(to bottom, #FFFFFF,rgba(0, 51, 102, 0.25), #FFFFFF),
            repeating-linear-gradient(
                45deg,
                transparent,
                transparent 5px,
                rgba(240, 240, 240, 0.2) 5px,
                rgba(240, 240, 240, 0.2) 10px
            );
    background-blend-mode: overlay;
    animation: corCiclica 5s infinite alternate;

    @keyframes corCiclica {
        0% {
            background-position: 0% 0%; /* Começa com o branco visível */
        }
        100% {
            background-position: 100% 0%; /* Move o azul para o centro e o branco para o final */
        }
    }

    @media (max-width: 768px) {
        flex-direction: row;
        height: 80rem;
        width: 100%;
        margin: 0;
    }
`,Sa=Vt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,ja=Vt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem;
    min-width: 50rem;

    @media (max-width: 768px) {
        min-width: 100%;
        margin: 0;
    }
`,za=Vt.img`
    display: flex;
    align-items: center;
    justify-content: center;
    background: green;
    height: 38rem;
    width: 55rem;
    border-radius: 1rem;

    @media (max-width: 768px) {
        height: calc(100% - 2rem);
        width: calc(100% - 2rem);
    }
`,Ia=Vt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5rem;
    min-width: 40rem;

    @media (max-width: 768px) {
        min-width: calc(100% - 0.4rem);
        margin: 2rem 0.2rem;
    }    
`,Oa=Vt.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    height: 10rem;
    width: 100%;
`;function Pa(){return n.createElement(Ca,null,n.createElement(Oa,null,"Nóticias"),n.createElement(Sa,null,n.createElement(ja,null,n.createElement(za,{src:Sn})),n.createElement(Ia,null,n.createElement(Aa,{numero:"4°",titulo:"Quarta Nóticia",data:"12 de maio",imagem:kn}),n.createElement(Aa,{numero:"5°",titulo:"Quinta Nóticia",data:"11 de maio",imagem:kn}),n.createElement(Aa,{numero:"6°",titulo:"Sexta Nóticia",data:"10 de maio",imagem:kn}),n.createElement(Aa,{numero:"7°",titulo:"Sétima Nóticia",data:"10 de maio",imagem:kn}))),n.createElement(ka,null))}function Ma(){return n.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"50rem"}},"Conteúdo")}var Ra=r(9879);const Fa=Vt.div`
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

    @media (max-width: 768px) {
        width: 100%rem;
    }
`,Da=Vt.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 35rem;
`,Na=Vt.div`
    flex: 0 0 calc(33.33% - 2rem);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;

    @media (max-width: 768px) {
        flex: 0 0 calc(100% - 2rem);
    }
`,Ya=Vt.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
`,La=(Vt.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
`,Vt.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    color: #333;
    border: none;
    padding: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
    pointer-events: auto;
    z-index: 1;

    &:hover {
        background-color: #333;
        color: #ffffff
    }

    @media (max-width: 1024px) {
        display: none;
    }
`),Ba=Vt.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 8px;
`,qa=Vt.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
        background-color: #333;
    }
`;function Ta(e){let{windowWidth:t,handleResize:r,images:a}=e;const o=a.length,i=(0,n.useRef)(null),{0:s,1:c}=(0,n.useState)(0),{0:l,1:u}=(0,n.useState)(3),{0:m,1:d}=(0,n.useState)(Math.ceil(o/l));return(0,n.useEffect)((()=>{t<=768&&(u(1),d(Math.ceil(o/l)))}),[t]),(0,n.useEffect)((()=>{i.current&&(i.current.style.transition="transform 0.5s ease-in-out",i.current.style.transform=`translateX(-${100*s}%)`)}),[s]),n.createElement(Fa,null,n.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",height:"35rem",width:"100%",zIndex:1}},n.createElement(La,{onClick:()=>{c((e=>Math.max(0,e-1)))}},n.createElement(Ra.oe,null))),n.createElement(Da,{ref:i},a.map(((e,t)=>n.createElement(Na,{key:t},n.createElement(Ya,{src:e}))))),n.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",height:"35rem",width:"100%",zIndex:1}},n.createElement(La,{onClick:()=>{c((e=>Math.min(m-1,e+1)))}},n.createElement(Ra.mny,null)))),n.createElement(Ba,null,Array.from({length:m}).map(((e,t)=>n.createElement(qa,{key:t,className:s===t?"active":"",onClick:()=>(e=>{c(e)})(t)})))))}const Ga=Vt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;
    background: '#dfdfdf';
`,Ua=Vt.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #003366;
    color: #333;
`;function Wa(e){let{windowWidth:t,handleResize:r}=e;return n.createElement(Ga,null,n.createElement(Ua,null,"Depoimentos"),n.createElement(Ta,{windowWidth:t,handleResize:r,images:[kn,Cn,Sn,kn,Cn,Sn,kn,Cn,Sn]}))}const Va=()=>n.createElement("div",{title:"Home"});var Za=()=>{const{0:e,1:t}=(0,n.useState)(window.innerWidth),{0:r,1:a}=(0,n.useState)(0),o=()=>{const e=window.scrollY;a(e)},i=()=>{t(window.innerWidth)};(0,n.useEffect)((()=>(window.addEventListener("scroll",o),window.addEventListener("resize",i),()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",i)})),[]);const s=0===r;return n.createElement(Qt,null,n.createElement(gn,{isCabecalhoFlutuante:s,windowWidth:e}),n.createElement(dr,null),n.createElement(Dn,null),n.createElement(ta,null),n.createElement(ha,null),n.createElement(Wa,{windowWidth:e,handleResize:i}),n.createElement(Pa,null),n.createElement(Ma,null),n.createElement(Ht,null,"Rodapé"))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fce273106e34a52c6851.js.map