(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[245],{2225:function(e,t,n){"use strict";n.d(t,{k5:function(){return h}});var i=n(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),a=["attr","size","title"];function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;n[i]=e[i]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return e&&e.map(((e,t)=>i.createElement(e.tag,u({key:t},e.attr),m(e.child))))}function h(e){return t=>i.createElement(p,l({attr:u({},e.attr)},t),m(e.child))}function p(e){var t=t=>{var n,{attr:r,size:o,title:c}=e,d=s(e,a),m=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(e=>t(e))):t(r)}},2833:function(e){e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(r=n?n.call(i,u,d,c):void 0)||void 0===r&&u!==d)return!1}return!0}},4985:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return Sh},default:function(){return Ph}});var i=n(6540);var r=function(){return r=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};Object.create;function o(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var a=n(2833),s=n.n(a),l="-ms-",c="-moz-",u="-webkit-",d="comm",m="rule",h="decl",p="@keyframes",f=Math.abs,g=String.fromCharCode,y=Object.assign;function v(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,n){return e.replace(t,n)}function w(e,t,n){return e.indexOf(t,n)}function E(e,t){return 0|e.charCodeAt(t)}function A(e,t,n){return e.slice(t,n)}function S(e){return e.length}function P(e){return e.length}function k(e,t){return t.push(e),e}function C(e,t){return e.filter((function(e){return!b(e,t)}))}var T=1,M=1,j=0,D=0,R=0,V="";function O(e,t,n,i,r,o,a,s){return{value:e,root:t,parent:n,type:i,props:r,children:o,line:T,column:M,length:a,return:"",siblings:s}}function F(e,t){return y(O("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function I(e){for(;e.root;)e=F(e.root,{children:[e]});k(e,e.siblings)}function z(){return R=D>0?E(V,--D):0,M--,10===R&&(M=1,T--),R}function L(){return R=D<j?E(V,D++):0,M++,10===R&&(M=1,T++),R}function B(){return E(V,D)}function N(){return D}function Y(e,t){return A(V,e,t)}function U(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q(e){return T=M=1,j=S(V=e),D=0,[]}function X(e){return V="",e}function W(e){return v(Y(D-1,H(91===e?e+2:40===e?e+1:e)))}function G(e){for(;(R=B())&&R<33;)L();return U(e)>2||U(R)>3?"":" "}function $(e,t){for(;--t&&L()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return Y(e,N()+(t<6&&32==B()&&32==L()))}function H(e){for(;L();)switch(R){case e:return D;case 34:case 39:34!==e&&39!==e&&H(R);break;case 40:41===e&&H(e);break;case 92:L()}return D}function K(e,t){for(;L()&&e+R!==57&&(e+R!==84||47!==B()););return"/*"+Y(t,D-1)+"*"+g(47===e?e:L())}function Z(e){for(;!U(B());)L();return Y(e,D)}function J(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function Q(e,t,n,i){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case h:return e.return=e.return||e.value;case d:return"";case p:return e.return=e.value+"{"+J(e.children,i)+"}";case m:if(!S(e.value=e.props.join(",")))return""}return S(n=J(e.children,i))?e.return=e.value+"{"+n+"}":""}function _(e,t,n){switch(function(e,t){return 45^E(e,0)?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return c+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+c+e+l+e+e;case 5936:switch(E(e,t+11)){case 114:return u+e+l+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+l+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+l+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+l+e+e;case 6165:return u+e+l+"flex-"+e+e;case 5187:return u+e+x(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return u+e+l+"flex-item-"+x(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":l+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return u+e+l+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+l+x(e,"shrink","negative")+e;case 5292:return u+e+l+x(e,"basis","preferred-size")+e;case 6060:return u+"box-"+x(e,"-grow","")+u+e+l+x(e,"grow","positive")+e;case 4554:return u+x(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!b(e,/flex-|baseline/))return l+"grid-column-align"+A(e,t)+e;break;case 2592:case 3360:return l+x(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,b(e.props,/grid-\w+-end/)}))?~w(e+(n=n[t].value),"span",0)?e:l+x(e,"-start","")+e+l+"grid-row-span:"+(~w(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(e,/\d+/))+";":l+x(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return b(e.props,/grid-\w+-start/)}))?e:l+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-t>6)switch(E(e,t+1)){case 109:if(45!==E(e,t+4))break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+c+(108==E(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?_(x(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,i,r,o,a,s){return l+n+":"+i+s+(r?l+n+"-span:"+(o?a:+a-+i)+s:"")+e}));case 4949:if(121===E(e,t+6))return x(e,":",":"+u)+e;break;case 6444:switch(E(e,45===E(e,14)?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===E(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+e;case 100:return x(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=_(e.value,e.length,n));case p:return J([F(e,{value:x(e.value,"@","@"+u)})],i);case m:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(b(t,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":I(F(e,{props:[x(t,/:(read-\w+)/,":-moz-$1")]})),I(F(e,{props:[t]})),y(e,{props:C(n,i)});break;case"::placeholder":I(F(e,{props:[x(t,/:(plac\w+)/,":"+u+"input-$1")]})),I(F(e,{props:[x(t,/:(plac\w+)/,":-moz-$1")]})),I(F(e,{props:[x(t,/:(plac\w+)/,l+"input-$1")]})),I(F(e,{props:[t]})),y(e,{props:C(n,i)})}return""}))}}function te(e){return X(ne("",null,null,null,[""],e=q(e),0,[0],e))}function ne(e,t,n,i,r,o,a,s,l){for(var c=0,u=0,d=a,m=0,h=0,p=0,y=1,v=1,b=1,A=0,P="",C=r,T=o,M=i,j=P;v;)switch(p=A,A=L()){case 40:if(108!=p&&58==E(j,d-1)){-1!=w(j+=x(W(A),"&","&\f"),"&\f",f(c?s[c-1]:0))&&(b=-1);break}case 34:case 39:case 91:j+=W(A);break;case 9:case 10:case 13:case 32:j+=G(p);break;case 92:j+=$(N()-1,7);continue;case 47:switch(B()){case 42:case 47:k(re(K(L(),N()),t,n,l),l);break;default:j+="/"}break;case 123*y:s[c++]=S(j)*b;case 125*y:case 59:case 0:switch(A){case 0:case 125:v=0;case 59+u:-1==b&&(j=x(j,/\f/g,"")),h>0&&S(j)-d&&k(h>32?oe(j+";",i,n,d-1,l):oe(x(j," ","")+";",i,n,d-2,l),l);break;case 59:j+=";";default:if(k(M=ie(j,t,n,c,u,r,s,P,C=[],T=[],d,o),o),123===A)if(0===u)ne(j,t,M,M,C,o,d,s,T);else switch(99===m&&110===E(j,3)?100:m){case 100:case 108:case 109:case 115:ne(e,M,M,i&&k(ie(e,M,M,0,0,r,s,P,r,C=[],d,T),T),r,T,d,s,i?C:T);break;default:ne(j,M,M,M,[""],T,0,s,T)}}c=u=h=0,y=b=1,P=j="",d=a;break;case 58:d=1+S(j),h=p;default:if(y<1)if(123==A)--y;else if(125==A&&0==y++&&125==z())continue;switch(j+=g(A),A*y){case 38:b=u>0?1:(j+="\f",-1);break;case 44:s[c++]=(S(j)-1)*b,b=1;break;case 64:45===B()&&(j+=W(L())),m=B(),u=d=S(P=j+=Z(N())),A++;break;case 45:45===p&&2==S(j)&&(y=0)}}return o}function ie(e,t,n,i,r,o,a,s,l,c,u,d){for(var h=r-1,p=0===r?o:[""],g=P(p),y=0,b=0,w=0;y<i;++y)for(var E=0,S=A(e,h+1,h=f(b=a[y])),k=e;E<g;++E)(k=v(b>0?p[E]+" "+S:x(S,/&\f/g,p[E])))&&(l[w++]=k);return O(e,t,n,0===r?m:s,l,c,u,d)}function re(e,t,n,i){return O(e,t,n,d,g(R),A(e,2,-2),0,i)}function oe(e,t,n,i,r){return O(e,t,n,h,A(e,0,i),A(e,i+1,-1),i,r)}var ae={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},se="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",le="active",ce="data-styled-version",ue="6.1.17",de="/*!sc*/\n",me="undefined"!=typeof window&&"HTMLElement"in window,he=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),pe=(new Set,Object.freeze([])),fe=Object.freeze({});function ge(e,t,n){return void 0===n&&(n=fe),e.theme!==n.theme&&e.theme||t||n.theme}var ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ve=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,be=/(^-|-$)/g;function xe(e){return e.replace(ve,"-").replace(be,"")}var we=/(a)(d)/gi,Ee=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ae(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ee(t%52)+n;return(Ee(t%52)+n).replace(we,"$1-$2")}var Se,Pe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ke=function(e){return Pe(5381,e)};function Ce(e){return Ae(ke(e)>>>0)}function Te(e){return e.displayName||e.name||"Component"}function Me(e){return"string"==typeof e&&!0}var je="function"==typeof Symbol&&Symbol.for,De=je?Symbol.for("react.memo"):60115,Re=je?Symbol.for("react.forward_ref"):60112,Ve={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ie=((Se={})[Re]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Se[De]=Fe,Se);function ze(e){return("type"in(t=e)&&t.type.$$typeof)===De?Fe:"$$typeof"in e?Ie[e.$$typeof]:Ve;var t}var Le=Object.defineProperty,Be=Object.getOwnPropertyNames,Ne=Object.getOwnPropertySymbols,Ye=Object.getOwnPropertyDescriptor,Ue=Object.getPrototypeOf,qe=Object.prototype;function Xe(e,t,n){if("string"!=typeof t){if(qe){var i=Ue(t);i&&i!==qe&&Xe(e,i,n)}var r=Be(t);Ne&&(r=r.concat(Ne(t)));for(var o=ze(e),a=ze(t),s=0;s<r.length;++s){var l=r[s];if(!(l in Oe||n&&n[l]||a&&l in a||o&&l in o)){var c=Ye(t,l);try{Le(e,l,c)}catch(e){}}}}return e}function We(e){return"function"==typeof e}function Ge(e){return"object"==typeof e&&"styledComponentId"in e}function $e(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function He(e,t){if(0===e.length)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function Ke(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ze(e,t,n){if(void 0===n&&(n=!1),!n&&!Ke(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Ze(e[i],t[i]);else if(Ke(t))for(var i in t)e[i]=Ze(e[i],t[i]);return e}function Je(e,t){Object.defineProperty(e,"toString",{value:t})}function Qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _e=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,r=i;e>=r;)if((r<<=1)<0)throw Qe(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var o=i;o<r;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),i=n+t;this.groupSizes[e]=0;for(var r=n;r<i;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n,o=i;o<r;o++)t+="".concat(this.tag.getRule(o)).concat(de);return t},e}(),et=new Map,tt=new Map,nt=1,it=function(e){if(et.has(e))return et.get(e);for(;tt.has(nt);)nt++;var t=nt++;return et.set(e,t),tt.set(t,e),t},rt=function(e,t){nt=t+1,et.set(e,t),tt.set(t,e)},ot="style[".concat(se,"][").concat(ce,'="').concat(ue,'"]'),at=new RegExp("^".concat(se,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),st=function(e,t,n){for(var i,r=n.split(","),o=0,a=r.length;o<a;o++)(i=r[o])&&e.registerName(t,i)},lt=function(e,t){for(var n,i=(null!==(n=t.textContent)&&void 0!==n?n:"").split(de),r=[],o=0,a=i.length;o<a;o++){var s=i[o].trim();if(s){var l=s.match(at);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(rt(u,c),st(e,u,l[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},ct=function(e){for(var t=document.querySelectorAll(ot),n=0,i=t.length;n<i;n++){var r=t[n];r&&r.getAttribute(se)!==le&&(lt(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function ut(){return n.nc}var dt=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(se,"]")));return t[t.length-1]}(n),o=void 0!==r?r.nextSibling:null;i.setAttribute(se,le),i.setAttribute(ce,ue);var a=ut();return a&&i.setAttribute("nonce",a),n.insertBefore(i,o),i},mt=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,i=t.length;n<i;n++){var r=t[n];if(r.ownerNode===e)return r}throw Qe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ht=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),pt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ft=me,gt={isServer:!me,useCSSOMInjection:!he},yt=function(){function e(e,t,n){void 0===e&&(e=fe),void 0===t&&(t={});var i=this;this.options=r(r({},gt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&me&&ft&&(ft=!1,ct(this)),Je(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,i="",r=function(n){var r=function(e){return tt.get(e)}(n);if(void 0===r)return"continue";var o=e.names.get(r),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(se,".g").concat(n,'[id="').concat(r,'"]'),l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),i+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(de)},o=0;o<n;o++)r(o);return i}(i)}))}return e.registerId=function(e){return it(e)},e.prototype.rehydrate=function(){!this.server&&me&&ct(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new pt(n):t?new mt(n):new ht(n)}(this.options),new _e(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(it(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(it(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(it(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vt=/&/g,bt=/^\s*\/\/.*$/gm;function xt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xt(e.children,t)),e}))}function wt(e){var t,n,i,r=void 0===e?fe:e,o=r.options,a=void 0===o?fe:o,s=r.plugins,l=void 0===s?pe:s,c=function(e,i,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===m&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(vt,n).replace(i,c))})),a.prefix&&u.push(ee),u.push(Q);var d=function(e,r,o,s){void 0===r&&(r=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=r,i=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(bt,""),c=te(o||r?"".concat(o," ").concat(r," { ").concat(l," }"):l);a.namespace&&(c=xt(c,a.namespace));var d,m,h,p=[];return J(c,(d=u.concat((h=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&h(e)})),m=P(d),function(e,t,n,i){for(var r="",o=0;o<m;o++)r+=d[o](e,t,n,i)||"";return r})),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||Qe(15),Pe(e,t.name)}),5381).toString():"",d}var Et=new yt,At=wt(),St=i.createContext({shouldForwardProp:void 0,styleSheet:Et,stylis:At}),Pt=(St.Consumer,i.createContext(void 0));function kt(){return(0,i.useContext)(St)}function Ct(e){var t=(0,i.useState)(e.stylisPlugins),n=t[0],r=t[1],o=kt().styleSheet,a=(0,i.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,i.useMemo)((function(){return wt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,i.useEffect)((function(){s()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var c=(0,i.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:l}}),[e.shouldForwardProp,a,l]);return i.createElement(St.Provider,{value:c},i.createElement(Pt.Provider,{value:l},e.children))}var Tt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=At);var i=n.name+t.hash;e.hasNameForId(n.id,i)||e.insertRules(n.id,i,t(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Je(this,(function(){throw Qe(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=At),this.name+e.hash},e}(),Mt=function(e){return e>="A"&&e<="Z"};function jt(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(1===n&&"-"===i&&"-"===e[0])return e;Mt(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var Dt=function(e){return null==e||!1===e||""===e},Rt=function(e){var t,n,i=[];for(var r in e){var a=e[r];e.hasOwnProperty(r)&&!Dt(a)&&(Array.isArray(a)&&a.isCss||We(a)?i.push("".concat(jt(r),":"),a,";"):Ke(a)?i.push.apply(i,o(o(["".concat(r," {")],Rt(a),!1),["}"],!1)):i.push("".concat(jt(r),": ").concat((t=r,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ae||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Vt(e,t,n,i){return Dt(e)?[]:Ge(e)?[".".concat(e.styledComponentId)]:We(e)?!We(r=e)||r.prototype&&r.prototype.isReactComponent||!t?[e]:Vt(e(t),t,n,i):e instanceof Tt?n?(e.inject(n,i),[e.getName(i)]):[e]:Ke(e)?Rt(e):Array.isArray(e)?Array.prototype.concat.apply(pe,e.map((function(e){return Vt(e,t,n,i)}))):[e.toString()];var r}function Ot(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(We(n)&&!Ge(n))return!1}return!0}var Ft=ke(ue),It=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ot(e),this.componentId=t,this.baseHash=Pe(Ft,t),this.baseStyle=n,yt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))i=$e(i,this.staticRulesId);else{var r=He(Vt(this.rules,e,t,n)),o=Ae(Pe(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(r,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}i=$e(i,o),this.staticRulesId=o}else{for(var s=Pe(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=He(Vt(u,e,t,n));s=Pe(s,d+c),l+=d}}if(l){var m=Ae(s>>>0);t.hasNameForId(this.componentId,m)||t.insertRules(this.componentId,m,n(l,".".concat(m),void 0,this.componentId)),i=$e(i,m)}}return i},e}(),zt=i.createContext(void 0);zt.Consumer;var Lt={};new Set;function Bt(e,t,n){var o=Ge(e),a=e,s=!Me(e),l=t.attrs,c=void 0===l?pe:l,u=t.componentId,d=void 0===u?function(e,t){var n="string"!=typeof e?"sc":xe(e);Lt[n]=(Lt[n]||0)+1;var i="".concat(n,"-").concat(Ce(ue+n+Lt[n]));return t?"".concat(t,"-").concat(i):i}(t.displayName,t.parentComponentId):u,m=t.displayName,h=void 0===m?function(e){return Me(e)?"styled.".concat(e):"Styled(".concat(Te(e),")")}(e):m,p=t.displayName&&t.componentId?"".concat(xe(t.displayName),"-").concat(t.componentId):t.componentId||d,f=o&&a.attrs?a.attrs.concat(c).filter(Boolean):c,g=t.shouldForwardProp;if(o&&a.shouldForwardProp){var y=a.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(e,t){return y(e,t)&&v(e,t)}}else g=y}var b=new It(n,p,o?a.componentStyle:void 0);function x(e,t){return function(e,t,n){var o=e.attrs,a=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,c=e.styledComponentId,u=e.target,d=i.useContext(zt),m=kt(),h=e.shouldForwardProp||m.shouldForwardProp,p=ge(t,d,s)||fe,f=function(e,t,n){for(var i,o=r(r({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var s=We(i=e[a])?i(o):i;for(var l in s)o[l]="className"===l?$e(o[l],s[l]):"style"===l?r(r({},o[l]),s[l]):s[l]}return t.className&&(o.className=$e(o.className,t.className)),o}(o,t,p),g=f.as||u,y={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===p||("forwardedAs"===v?y.as=f.forwardedAs:h&&!h(v,g)||(y[v]=f[v]));var b=function(e,t){var n=kt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,f),x=$e(l,c);return b&&(x+=" "+b),f.className&&(x+=" "+f.className),y[Me(g)&&!ye.has(g)?"class":"className"]=x,n&&(y.ref=n),(0,i.createElement)(g,y)}(w,e,t)}x.displayName=h;var w=i.forwardRef(x);return w.attrs=f,w.componentStyle=b,w.displayName=h,w.shouldForwardProp=g,w.foldedComponentIds=o?$e(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=p,w.target=o?a.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=0,r=t;i<r.length;i++)Ze(e,r[i],!0);return e}({},a.defaultProps,e):e}}),Je(w,(function(){return".".concat(w.styledComponentId)})),s&&Xe(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Nt(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var Yt=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(We(e)||Ke(e))return Yt(Vt(Nt(pe,o([e],t,!0))));var i=e;return 0===t.length&&1===i.length&&"string"==typeof i[0]?Vt(i):Yt(Vt(Nt(i,t)))}function qt(e,t,n){if(void 0===n&&(n=fe),!t)throw Qe(1,t);var i=function(i){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return e(t,n,Ut.apply(void 0,o([i],r,!1)))};return i.attrs=function(i){return qt(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return qt(e,t,r(r({},n),i))},i}var Xt=function(e){return qt(Bt,e)},Wt=Xt;ye.forEach((function(e){Wt[e]=Xt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ot(e),yt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,i){var r=i(He(Vt(this.rules,t,n,i)),""),o=this.componentId+e;n.insertRules(o,o,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,i){e>2&&yt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,i)}}();function Gt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=He(Ut.apply(void 0,o([e],t,!1))),r=Ce(i);return new Tt(r,i)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=ut(),i=He([n&&'nonce="'.concat(n,'"'),"".concat(se,'="true"'),"".concat(ce,'="').concat(ue,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Qe(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Qe(2);var n=e.instance.toString();if(!n)return[];var o=((t={})[se]="",t[ce]=ue,t.dangerouslySetInnerHTML={__html:n},t),a=ut();return a&&(o.nonce=a),[i.createElement("style",r({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new yt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Qe(2);return i.createElement(Ct,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Qe(3)}})(),"__sc-".concat(se,"__");const $t=Wt.div`
    display: flex:
    align-items: center:
    justify-content: center;
    padding: 0;
    margin: 0;
`;function Ht(e){let{children:t}=e;return i.createElement($t,null,t)}const Kt=Wt.div`
    width: 100%;
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
`,Zt=Wt.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`,Jt=Wt.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`,Qt=Wt.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
`,_t=Wt.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,en=Wt.h4`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 0.5rem;
`,tn=Wt.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
`,nn=Wt.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,rn=Wt.a`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.45);
    }
`,on=Wt.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,an=Wt.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
    line-height: 1.5;
`,sn=Wt.a`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color:rgba(255, 255, 255, 0.45);
    }
`,ln=Wt.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,cn=Wt.div`
    grid-column: 1 / -1;
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #eee;
`;function un(){return i.createElement(Kt,null,i.createElement(Zt,null,i.createElement(Jt,null,i.createElement(Qt,null,"CENTRAL DE ATENDIMENTO"),i.createElement(_t,null,i.createElement(en,null,"Suporte ao fornecedor"),i.createElement(tn,null,"(85) 9 9821-0004"),i.createElement(tn,null,"(85) 9 9860-2986")),i.createElement(_t,null,i.createElement(en,null,"Suporte ao ente público"),i.createElement(tn,null,"(88) 9 9995-6013"),i.createElement(tn,null,"(85) 9 9827-6113"),i.createElement(tn,null,"(85) 9 9732-4827"),i.createElement(tn,null,"(85) 9 9837-0004"),i.createElement(tn,null,"(85) 9 9801-4444")),i.createElement(nn,null,i.createElement(rn,{href:"#"},"Abra um chamado"),i.createElement(rn,{href:"#"},"Formulário de contato"))),i.createElement(on,null,i.createElement(en,null,"Dúvidas ou sugestões?"),i.createElement(an,null,"Entre em contato conosco atráves de nossos canais de atendimento ou através do email."),i.createElement(sn,{href:"mailto:suporte@m2atecnologia.com.br"},"suporte@m2atecnologia.com.br")),i.createElement(ln,null,i.createElement(Qt,null,"HORÁRIOS DE ATENDIMENTO"),i.createElement(an,null,"De segunda a sexta, exceto feriados, das 08h às 12h e das 13h às 17h30, horário de Brasília.")),i.createElement(cn,null,i.createElement(an,null,"©Copyright 2025 M2A Tecnologia Ltda. Todos os direitos reservados."))))}var dn=n(5399),mn=n.p+"static/logo-pm-ipixuna-1-6b9d67a817bb074e41745730c212a6b2.png",hn=n.p+"static/logo-pm-itapipoca-cd4757a75cd467f1fbf6f69e79fc9e8a.png";const pn=Wt.button`
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
`;function fn(){return i.createElement(pn,null,"Mais clientes")}const gn=Wt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(100% - 4rem);
    background: #ffffff;
    padding: 2rem;
`,yn=Wt.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    color: #333;
    margin: 2rem 0;

    @media (max-width: 768px) {
        margin: 1rem 0;
    }
`,vn=Wt.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start; /* Alinha os slides à esquerda */
    overflow-x: hidden; /* Esconde o que não cabe horizontalmente */
    width: 100%; /* Garante que o content ocupe toda a largura disponível */
    margin: 0 1rem; /* Adiciona margem nas laterais para os botões */
`,bn=Wt.div`
    z-index: 1;
    background: #ffffff;
`,xn=Wt.button`
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
`,wn=Wt.button`
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
`,En=Wt.div`
    display: flex;
    transition: transform 0.3s ease-in-out;
`,An=Wt.div`
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
`,Sn=Wt.img`
    max-height: 5rem; 
    max-width: 100%; 
    object-fit: contain;

    @media (min-width: 768px) {
        height: 13rem; 
        width: 20rem;
    }
`,Pn=[{id:1,src:mn,alt:"Ipixuna"},{id:2,src:hn,alt:"Itapipoca"},{id:3,src:mn,alt:"Ipixuna"},{id:4,src:hn,alt:"Itapipoca"},{id:5,src:mn,alt:"Ipixuna"},{id:6,src:hn,alt:"Itapipoca"},{id:7,src:mn,alt:"Ipixuna"},{id:8,src:hn,alt:"Itapipoca"},{id:9,src:mn,alt:"Ipixuna"},{id:10,src:hn,alt:"Itapipoca"}];function kn(){const{0:e,1:t}=(0,i.useState)(0),n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{n.current&&(n.current.style.transform=`translateX(${e}px)`)}),[e]),i.createElement(gn,null,i.createElement(yn,null,"Conheça alguns clientes que confiam na M2A e usam nossos produtos"),i.createElement(vn,null,i.createElement(bn,null,i.createElement(xn,{onClick:()=>{if(n.current){const e=n.current.querySelector(":scope > div:first-child");if(e){const n=e.offsetWidth+parseFloat(getComputedStyle(e).marginRight);t((e=>Math.min(e+n,0)))}}}},i.createElement(dn.xrT,{size:20,color:"#004C99"}))),i.createElement(En,{ref:n},Pn.map((e=>i.createElement(An,{key:e.id},i.createElement(Sn,{src:e.src,alt:e.alt}))))),i.createElement(bn,null,i.createElement(wn,{onClick:()=>{if(n.current){const e=n.current.querySelector(":scope > div:last-child"),i=n.current.offsetWidth;if(e){const r=e.offsetWidth+parseFloat(getComputedStyle(e).marginRight),o=-(n.current.scrollWidth-i);t((e=>Math.max(e-r,o)))}}}},i.createElement(dn.Xor,{size:20,color:"#004C99"})))),i.createElement(fn,null))}var Cn=n(4794);const Tn=Wt.div`
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
`,Mn=Wt.img`
    transition: all 0.95s ease-in-out;

    ${e=>e.ehCabecalhoFlutuante?"":"filter: sepia(100%) hue-rotate(200deg) brightness(70%);"}
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
`,jn=Wt.img`
    transition: all 0.95s ease-in-out;

    ${e=>e.ehCabecalhoFlutuante?"":"\n        filter: sepia(100%) hue-rotate(200deg) brightness(50%);\n\n        "}
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;

    @media (max-width: 768px) {
        height: 1.5rem; 
    }
`;function Dn(e){let{ehCabecalhoFlutuante:t}=e;return i.createElement(Tn,{ehCabecalhoFlutuante:t},i.createElement(Mn,{ehCabecalhoFlutuante:t,src:(0,Cn.withPrefix)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAQAAAAC0hrNAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfpBQgUIha4gr+oAAAGy0lEQVRYw6WYaWxUVRTH/2+60EJbdrVjtSyCBRcUXKOgURE1qaAomqBRlKhBlICJJm5UjUY0GhUhcWFpFBcqCYp7CMHWBBOsexFZpFAppbSlnXam82be/R8/3DfMe2/mTWf0nS/v3Xvu/d3l3HPOfRBkJ3V58WnqIb7DBh5giO3xabrcul4tip1Xl5ddL1kpRYJ8hocoFAq7WMuV8Yt0jXqYFoXCY1xnzaoJ/E+cYdQEDEO/946OT1cPhEYma1ljDyEh+9WSluL/jDOMTONVCzwwLf+ohf6tMsAaC8KnmFWxc83J0bGdZan15gRutJfSKzvMSTnh1GIeonJ10c0fuc6c4NaLjuf6tMiwWpglrrGAa9OOWSjWjan6sSnW3HB57By+6gG/uT1/QFxLMb/yg/FL2/hv4QruVItaB3vWZL5Hf3NTYUZcUyG/9YVZsbMEAmvOiZI29aB7Br2jO8s6y0Ijo+Pil6jb1RPqtgw4w+AGX5iwViDYO4gH7G/FevVouDy7A54Gpx7LAFNmlUCgllIoPKSe7j89F1AKLn6Zj1lr+UIgaC5iK3eruxsLfE/jPB5gE3ewjq+o++IX7B2UFtdSzH2+qHq1VM/Nmq0WJ3erdbA1l2vYrJ6MVHSUJpZVPeE+EtyiFjUXeXB81g+mHnfubtL8uYrHXZqh+HS7r9f8+rAbR4KM+OC+T12w+AX8lEyj2xefIRBsz+c3nprevpMcOPWQ79wWu1G9o7kmLcqOF3rRe4az2VPzkgNnVvn6kZucsM4ydmYwJ6Fwv44Z8Ss8TjDUUSoIAABQuBs7kfYxJji/hk7FCGR+xpWsDRhA/nd43VVeOnw+kqaiFvqM9oXk3GoCKXuSfgMeFAg6SnnEawUQaL/WXMS2NE0/SaYF3cP4XjYwCkORCkFKRFSRIARqgY5O6pGUZjsT50Ug8I8TaWSjvRq7XLO+EwLWam/YUsyDribt2k1FgvoAc1sOOIlfLBCou1yl70DA3xgzz7QdkNMmq7XnYKONa8oFp51eY4FrCjtRl0czUSngZ8mR2CW1lLYhAgH/yQnH2BSBgM84ysKIBJ1z6TvZNpj27mECgbqDQtFeksdywglXCQTRcU6ngNhU+/VwzwiBwLqacVrqHoEgXM4uCkV7dY9ZDyzdOtpzhwMXv/zEx8e2h5mYCBp8X9fomfLvHHFizRYI1FPJkoCRf+Lcz+MSACjcc4YJAPsG4XpdUTQMANCJHJ9ANQDwa0eJRBwO6+VoZfLrDFPe0G955QCAI7niMAsANv+EsP29P8A+R3XB0aNObam3x3Q6AGBfzriK/iBwi8KvAIDf+i8PRA476wsDLvVie9aTAEB25YxD4VQAwHcANh+fPrgNAnY4NneOK2E9i3soFG4SCGLn5moq/FDnNIZhVes8AALWOxT29Ax3AtuG8A1abBUI6vL4R06wzvYSd2g2DAi4wqlkThQIzEnq9sQ9JnY+P+8otfPnWc61GEA2elMOdT8EVrVDpdX25F0UbouOSc1TrJlZ4952JYRLaFqztBPuO6Gid+k8+yuklqVeK/jzgKAYt6hbnblouJxR9jYX6Q4+SSiq5SmRfZfOrhzjnM9vPClfQiw28S01T3uhpOwdxG8p/ECQDwBcE5hrn7QmADDOdtjypLwlqHcad2ADNgD9wcIqI4gRGIwAouiWdjYf3V/RDxgYamvGJudfGlgDVE7ETIDr85DIQfbq8emgyC2uMfdo552LHB+q7uZ2knX2dUC4uyaQzDPv1V3rHIM/eRbps2Sm3zZE3ZbOhLS0l8RnqMe5lTG75ZsCgXUzRS0Q2IsJNNTOeBQTgb7uYgAY5XEO1eN/4bs49Nym5Tw5LLMLP5Ie7EYLWnFcIlAoNoZgJE7D+FHj4fJLctAAYFTiz4b3rgCSiZ91A4Wi8y6/QKpHGKlgd9Yh6DqBgKuta1MuXPyAyn7z6+6wPu6ehCeDRIICgXog5cIl6BnBZnt2R307WG0P6OOscPu0djJ9dLuZC+0k6C/fDpR1le1Lf8kCt9prSmntiw0ZujgSPkUg6K9ky4A7d2N2uA0Zu9mu03yziu0Z9Y55f3P44NTyAca9Xkcvc3LGGa5M7TktLj5twFvcK1ozOoa/+81NXyyzwAmiY/jDAMAVeobtJfwoTW2D9k9Z4gR1eWqZIzClk3cTwUktZMhRHlIP+/1izOhoI6dyFc0MwK29o7VmfyXrKBSaXKkt9z/gBIL+0/h8hmN/MPFzQ2BdqZ7WXuR/4ASCxgLrGq7in2n/OFh80f8fklcMySFr7BtVPMUYa1SiDCUIIIouOSx/hX8u68q2h38BYnZwrA+F1kEAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAxODowMzoyOCAyMjo0NTo0MbdozoEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDUtMDhUMjA6MzQ6MDMrMDA6MDBKA5uMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTA1LTA4VDIwOjM0OjAzKzAwOjAwO14jMAAAAABJRU5ErkJggg==")}),i.createElement(jn,{ehCabecalhoFlutuante:t,src:(0,Cn.withPrefix)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAaCAQAAADWUVAIAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfpBQgTKBs5kz0aAAAJi0lEQVRYw+2Ye3BdVRWHv3Nu7m2SpilJmzamJU2LLbdoLaLCCB2QWoZHkRRBnr7Qqqjj28qISlMUtdPOFAdfiFopoVBbiECxiIhpoRCFVKBNqI04kfRh0yRNcm9ucs89+7f849w0TamlM/iakb3/2Xuvtdda395nv45n/H8l/78dwOvArwO/DvyaUoE+41Xm7krsBAhPjy2yjifuOCcE3ws/4NVSbE/3f++EvmF1d7n/ttxdidYRA7ri8EFTe19L2cJDtb0FWwB8LzjbP8cbZ7tS68f3Qve4soVgfbFN0Du+9MLMYyVdAD2lJ9R6SctoS8ETkYXwDH865q8b8TAwuWiRN8163aPx50ZaB6eMqfWmWUqbCpoBMpWF74Jc05j2fNznMr7hocsdIJNpT0eRkapQSiZzHzMMrVS/fqZmmZ7bW2wYRvhumUy76vyobhgKZIfl+uzMw2obDSM1UY0ydetxdWl/7gwjO0smk3LvNII5stxZhhEuVJekZ7Vbpt+lJhqG7pRJI97cxzWgUE+pS6b69sJ86+c0JKcm/UnSCsMIF8hk7v15+TUymfuGYXlgcx8x3JJ8mN8yUhXKhYuMvcXqlrnr83AbIo3w3JEQOks6S7RMJgvmdpa0F+aBl3WWdJa0FxqNBXpKppa+cqO7VE9rb3thHtj0bJ0/DBycqkGZW2LsLdY2mTbX+UcCh5dIsnCRkZ6sPTL93DDctTJZeLlhuE/L3DVHAuuPMpk6PM9AkpPpSUM71DsMnE3qns4Sw/PUIdMdhtFeqLTaZDKtGgE2DPc1mSw70zAiYPe1Q7JodN8X1bKzw4vzM7xPJnOLh4G1UaaDLQnDcFfLZOGlRwJrp0zP5+3eJJOCOc1x7ZGp8ZC/L3QUjQbOTJG0VybLvd3wCdkMnKlrmE3D8JpI7PSurkhD7hKmAmmAqecw1m4C4OLj3yS8WoBMY97ui7GNUcluIgfeLd54gN1FnAdsOyUAyDUB+JeMthQkORloyvdvArzYe97yTqqAxmEtf9XUwdH9xlxIzlYC+AvBB1sDeN7tbKZjtGrfCf5tAHoAwL+Yzm+uYy/wxmD2q2B+3Q7aQVsGzABU2nWkhl7ke8Ck2FKAiioSQHckS0faNaN7xKJ63pK6ALwafwaAdR4jlot4OnwYwIuAD95HBiix+tGKvle6mhOBu2PR+C3kt0sVjWXBq81xo91it7jfATnA3xF/pUrPzewDFgBYEDFFkngB5HsenrKH63ixvE7Umohac6faalsdJEc6tSZ4tz2W+DP7gLdlKn2YkKIBGOzdMNp+eCOLgO1d1wMEpzCdHncBfQDeqwDbk/5Kf2XBFqAVYOabhiWDU4ZLE1L2leHy8j10A9VRrehEALaPtjnUgkZ0vGoA2+52AHhvzk/SiXyYD8feMNLr5HmU0hvOow3wCy/0AbQGeLC8/3DzbpF3M7A/qK1IAxQsBD7jb+KTAJzZX85xJd0NUPCJ/AzMLWwLTx+WFdzNk1FpqagH5mYqAWIXAArvHG1pbCePAOe2JgD8C4B0ZkN8O88Dl6UnHt2/fxF4t8We4GwAbyEKjPUx7Q4vNnTz8C49NCM6k/VTd727PrzMUKNeGKoZqhmq0U6ZzF17rF1aDW6xW+yuMgzdLpO0LDszvEAvq6k5np0ly80zjOCtCqNduq9Mu2R6YKAyN0/dMi0fOYfdYrfYLc6ePHSSumT6Qf+E8FIFMrfYMHJvV1qmpty8YI7WyvS3weqRXVot2phNZpO5eTKZ+lBgGO7LzfHDgcPzR10nnukrUy460g2tksl0zzGBo/yyYdT57qv5Ay/Uur7y6FiKgA39cPjikZ6sdcrJZOpyn/O8Q8D57D5qZE/WY5JMpnZ3xbD/4K16Kq/Vo1X9E0aOpaEamftk3tOLMpn3n3kPtyZmnuIVD7WVHDi2Xn9Z8SwbfKr1nPCf62QqE9PVU7hLo0IfnBqvVu/Tu47VE+A/BPy/k/4Fr6WeUvuuu+y/DfIagLfFw7N6SgEGJodn7S6CbfEgubkADpQEMyE9cVsc9o8N5w1MBjBzDwd/ABiaFiSDWeB74ekDk4bt9Y4Pz4729A2x8IzsDNhdFCR9b3dRT+nQiUEySEK6IkhmZyzzIfOGoWoYrIrs9ZeD7wXJ1gQEs/YV7x8bJINkf/mGWJA8UHKgpKc0Uxkkg2QwE7rHZd8IMDBpsApaE+GZ3eOOQmyvyFqt76veCBdop1uitsyUwWpZpsoIL1K3obrBaYPV+qv7iu4PTjs4Xi+4pdrmrja0Vb/XLYb7uu7Vhugtk52tdvd5bRya0RzX77VKje5LfWXK5t7hPpWdqUe0VSs8T8v1nH6lrXW+1iidqdJao7FA3VptNMdl7qrsKbJwfrhAgVaE70pVyHRHWOuudFeoUbtVZ7ibFKYnGbpV9xhaq1t15yvpjgb8F32nbYyhJvcNQ49qxSuBdat+bfSVdY1zn1eL4a5Th6Gt7ouGod+ovrMkb61evzDSk9vGhJfp4PpYeJ4ye4v1kL6t7xp6xC01DC2PHpapCq1Rq36itUZunh7UgfWx5ricHlSdcuH8cIFShpGqUKtCd6O70nBLtMUw9GO97D5yCLhDy6KnyOh8lE/aVvKlkx5d5lNDJ7Cf6Uf5MKazD0oPTkh5NXSCdTJ1Wxy86+x20G3UTnw2WhacxD6Ij6+Z49XQfbnTforKK+2XXGt7ALyrLLpgVMbv4vslB0A3cB2TIXaRVlO+6CxgM+czjSEACq3BzQd+w2ZvyUhAA5MYwzPRUwXAVnDj7Id97zjW8GCDO4+zl0ymxasGprHjkCjL2NYEZW6QVuZAaoI713ZQDV41fz4tB7ba+wQMPROcyrTSuQDsYA7Er43daC1Utib8afS+tLv3ASZm7wOwe70PAfB3iu0lgIZfs4VxwCzvTbTEaoGXaLat+RiGvEtjjwOESygdibrofNJ0smBfcZ5inRayoLfseNbw3Vqrxz0vmKsX9CNt7T1hsFqmTe6GzhK16Hndb/SV61ndr4eys9rG6GHdqefC+Ya2arsaWhJaoV+o5e9j86/RHarXk+F7PU8/1336o7vSMNxnDUOP6EU1HByv5ap3n1JHS0Jr1seC09SUmaKbDfdZtbUkdIf7WF+5UuH8cIFyanAfTFVolaG7Rj5p3d4cbxujVFib/6R/qXu16bjWsOdlpkY/cRoLBipHy9bHMlXRHcjz3A3ZZNSannTkaslUNceHy3V+pqqxICr3T+goGvZi/DtznZ+ZejQf/wAfQoYaaHigywAAACF0RVh0Q3JlYXRpb24gVGltZQAyMDE4OjAzOjI4IDIyOjQ1OjQxt2jOgQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wNS0wOFQxOTozOTozMSswMDowMF0ZKcUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDUtMDhUMTk6Mzk6MzErMDA6MDAsRJF5AAAAAElFTkSuQmCC")}))}const Rn=Wt.button`
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
`;function Vn(){return i.createElement(Rn,null,"Selecione um plano")}const On=Wt.div`
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
`;function Fn(e){let{children:t}=e;const{0:n,1:r}=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e=()=>{window.scrollY>100&&!n?r(!0):window.scrollY<=100&&n&&r(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[n]);const o=n?"cabecalho-fixo":"cabecalho-suspenso";return i.createElement(On,{className:o},t)}const In=Wt.button`
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
`;function zn(){return i.createElement(In,null,"Solicite uma apresentação")}const Ln=Wt.div`
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
`,Bn=Wt.div`
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
`,Nn=Wt.label`
    font-size: 2.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }
`,Yn=Wt.label`
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
`;function Un(){return i.createElement(Ln,null,i.createElement(Bn,null,i.createElement(Nn,null,"A M2A tem as soluções"),i.createElement(Yn,null,"que você precisa para realizar suas contratações governamentais!"),i.createElement(zn,null)))}var qn=n(6512);const Xn=Gt`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`,Wn=Wt.ul`
    margin: 1rem;
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
`,Gn=(Wt.li`
    margin: 0 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
`,Wt(Cn.Link)`
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
            animation: ${Xn} 0.3s ease-out forwards;
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
`),$n=Wt.ul`
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
`,Hn=Wt(Cn.Link)`
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
`,Kn=Wt(qn.pte)`
    font-size: 0.8rem;
`,Zn=Wt.li`
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
`;function Jn(){return i.createElement(Wn,null,i.createElement(Zn,null,i.createElement(Gn,{to:"/inicio",activeClassName:"active"},"Início")),i.createElement(Zn,null,i.createElement(Gn,{to:"/contratacoes",activeClassName:"active"},"Contratações")),i.createElement(Zn,null,i.createElement(Gn,{style:{width:"6rem"}},"Produtos ",i.createElement(Kn,null)),i.createElement($n,null,i.createElement(Hn,{to:"/produto-a",activeClassName:"active"},"M2A Planejamentos"),i.createElement(Hn,{to:"/produto-b",activeClassName:"active"},"M2A Compras"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Pesquisas"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Processos"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Processos Eletrônicos"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Tramitações"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Contratos"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Fornecedores"))),i.createElement(Zn,null,i.createElement(Gn,{style:{width:"4rem"}},"Mais ",i.createElement(Kn,null)),i.createElement($n,null,i.createElement(Hn,{to:"/produto-a",activeClassName:"active"},"Sobre"),i.createElement(Hn,{to:"/produto-b",activeClassName:"active"},"Regulamentos"))))}const Qn=Wt.div`
    display: flex;
    align-items: center;
    position: relative;
`,_n=Wt.button`
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
`,ei=Wt.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`,ti=Wt.div`
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
`,ni=Wt(Cn.Link)`
    color: #3B3D3D;
    font-size: 18px;
    text-decoration: none;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f1f1f1;

    &:hover {
        color: #007bff;
    }
`,ii=Wt.div`
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
`,ri=Wt.div`
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    transform: ${e=>{let{isOpen:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
`,oi=Wt.div`
    max-height: ${e=>{let{isOpen:t}=e;return t?"00px":"0"}};
    overflow: hidden;
    transition: max-height 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
`,ai=Wt(Cn.Link)`
    color: #555;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #007bff;
    }
`;var si=()=>{const{0:e,1:t}=(0,i.useState)(!1),{0:n,1:r}=(0,i.useState)(!1),o=()=>{t(!e),e||r(!1)};return i.createElement(Qn,null,i.createElement(_n,{onClick:o},e?i.createElement(qn.WQq,{size:24}):i.createElement(qn.nej,{size:24})),e&&i.createElement(ei,{onClick:o}),i.createElement(ti,{isOpen:e},i.createElement(ni,{to:"/inicio"},"Início"),i.createElement(ni,{to:"/contratacoes"},"Contratações"),i.createElement(ii,{onClick:()=>{r(!n)}},i.createElement("span",null,"Produtos"),i.createElement(ri,{isOpen:n},i.createElement(qn.pte,{size:16}))),i.createElement(oi,{isOpen:n},i.createElement(ai,{to:"/produto-a"},"M2A Planejamentos"),i.createElement(ai,{to:"/produto-b"},"M2A Compras"),i.createElement(ai,{to:"/produto-c"},"M2A Pesquisas"),i.createElement(ai,{to:"/produto-d"},"M2A Processos"),i.createElement(ai,{to:"/produto-e"},"M2A Processos Eletrônicos"),i.createElement(ai,{to:"/produto-f"},"M2A Tramitações"),i.createElement(ai,{to:"/produto-g"},"M2A Contratos"),i.createElement(ai,{to:"/produto-h"},"M2A Fornecedores")),i.createElement(ni,{to:"/sobre"},"Sobre"),i.createElement(ni,{to:"/conteudo"},"Conteúdo")))};const li=Wt.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
`,ci=Wt.label`
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
`,ui=Wt.div`
    display: inline-block;
`,di=Wt.label`
    color: white;
    margin-bottom: 2rem;
    font-family: 'Montserrat Alternates', sans-serif;
    transform-origin: top;

    @media (max-width: 768px) {
        text-wrap-mode: wrap;
        margin: 1rem;
        text-align: center;
    }
`,mi=Gt`
    0% { transform: translateY(-100%); opacity: 0; }
    40% { transform: translateY(0); opacity: 1}
    100% { transform: translateY(0); opacity: 0}
`,hi=Wt.label`

`,pi=Wt.label`
    display: inline-block; /* Importante para a largura */
    animation: ${mi} 3.5s infinite;
`;function fi(e){let{palavras:t=[],tempoRotacao:n=3e3}=e;const{0:r,1:o}=(0,i.useState)(0),{0:a,1:s}=(0,i.useState)(t[0]);return(0,i.useEffect)((()=>{const e=setInterval((()=>{o((e=>(e+1)%t.length))}),n);return()=>clearInterval(e)}),[]),(0,i.useEffect)((()=>{s(t[r])}),[r]),i.createElement(hi,null,i.createElement(pi,{key:a},a))}var gi=n.p+"static/mural-m2a-compras-428c1ab1a164735e123280dc195aaefb.jpg",yi=n.p+"static/mural-m2a-planejamento-cf862d4f12c4c310a960e0a6335020c2.jpg",vi=n.p+"static/mural-m2a-pesquisas-1cd49d382db019e2e60c03b1d3284d88.jpg",bi=n.p+"static/mural-m2a-fornecedores-f899bf9bbaa6570ab2968c054b3bc02f.jpg";const xi=Wt.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  overflow-x: auto; /* Para lidar com muitas imagens */

  @media (max-width: 728px) {
	display: none;
  }
`,wi=Wt.div`
  	flex: 0 0 auto;
  	width: auto;
  	max-width: 400px; /* Ajuste conforme a largura desejada das capturas de tela */
  	height: auto;
	border-radius: 8px;
  	overflow: hidden;
  	margin-right: -30px; /* Margem negativa para sobreposição (ajuste conforme necessário) */
`,Ei=Wt.img`
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

`,Ai=Wt.img`
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

`,Si=Wt.img`
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
`,Pi=Wt.img`
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
`;var ki=()=>i.createElement(xi,null,i.createElement(wi,null,i.createElement(Ei,{src:gi,alt:"M2A Compras"})),i.createElement(wi,null,i.createElement(Ai,{src:yi,alt:"M2A Planejamento"})),i.createElement(wi,null,i.createElement(Si,{src:bi,alt:"M2A Fornecedores"})),i.createElement(wi,null,i.createElement(Pi,{src:vi,alt:"M2A Pesquisas"})));function Ci(){return i.createElement(li,null,i.createElement(ci,null,i.createElement(ui,null,"M2A")," é o mais ",i.createElement(fi,{palavras:["eficiente","completo","prático"],tempoRotacao:3e3})," portal de contratações públicas."),i.createElement(di,null,"Todas as ferramentas em um só lugar, para quem vai vender e quem vai comprar."),i.createElement(ki,null))}const Ti=Wt.div`
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
`;function Mi(e){let{ehCabecalhoFlutuante:t,larguraAtual:n}=e;return i.createElement(Ti,null,i.createElement(Fn,null,i.createElement(Dn,{ehCabecalhoFlutuante:t}),n<=1024?i.createElement(si,null):i.createElement(Jn,null),i.createElement(Vn,null)),i.createElement(Un,null),i.createElement(Ci,null))}const ji=Wt.div`
    flex: 1 1 calc(33.33% - 6rem);
    position: relative; 
    border-radius: 1rem;
    margin: 2rem 1rem;
    min-height: 15rem;   
    min-width: 15rem;
`,Di=Wt.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    min-height: 15rem;
    border-radius: 0.8rem;
    background: url(${e=>e.url_imagem}) no-repeat center center;
    background-size: cover;
    box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.34);
    filter: brightness(75%);
    min-width: 15rem;
    cursor: pointer;
    
    @media (max-width: 1200px) {
        flex: 1 1 calc(50% - 20px); /* 2 itens por linha em telas menores */
    }

    @media (max-width: 900px) {
        flex: 1 1 100%; /* 1 item por linha em telas pequenas */
    }

    &:hover {
        filter: brightness(65%);
    }
visivel
    transition: all 0.5s ease;
    animation: ${e=>e.visivel?"slideIn 0.5s ease forwards":""};
    @keyframes slideIn {
        from {
            margin: 0rem;
        }
        100% {
            margin: -0.8rem 0.8rem 0.8rem -0.8rem;
        }
    }
`,Ri=Wt.label`
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
    background-color: rgba(0, 110, 156, 0.69);
    font-family: 'Poppins', sans-serif;
    clip-path: polygon(0% 0%, 100% 0%, 94% 50%, 100% 100%, 0% 100%, 0% 0%, 100% 100%);

    @media (max-width: 768px) {
        font-size: 1rem;
        width: 12rem;
    }
`,Vi=Wt.label`
    position: absolute;
    bottom: 1rem;
    margin: 0 1rem 1rem 1rem;
    color: #ffffff;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;function Oi(e){let{titulo:t,descricao:n,url_imagem:r,style:o}=e;const{0:a,1:s}=(0,i.useState)(!1),l=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{let[t]=e;s(t.isIntersecting)}),{threshold:.1});return l.current&&e.observe(l.current),()=>{l.current&&e.unobserve(l.current)}}),[]),(0,i.useEffect)((()=>{a&&console.log("Componente visível!")}),[a]),i.createElement(ji,{style:o},i.createElement(Di,{url_imagem:r,ref:l,visivel:a}),i.createElement(Ri,null,t),i.createElement(Vi,null,n))}const Fi=Wt.button`
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
`;function Ii(){return i.createElement(Fi,null,"Mais produtos")}var zi=n.p+"static/produto_compras-61bee3399e4ad0ca540aaa43b99cb8e2.png",Li=n.p+"static/produto_pesquisa-69171438491862b545b72050ffc2c8da.png",Bi=n.p+"static/produto_processos-195e6c1cdfab58a9c5bd12f9eff034f6.png",Ni=n.p+"static/produto_contratos-6f24d586024471fab471fe6b0b77264f.png",Yi=n.p+"static/produto_fornecedores-951f8846253b763d272d38f78e0d5c4f.png";const Ui=Wt.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    border-radius: 2rem;
`,qi=Wt.div`
    flex-wrap: wrap;
    display: flex;
`,Xi=Wt.div`
    flex: 1 1 calc(20% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 8rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`,Wi=Wt.div`
    flex: 3 1 calc(55% - 20px);
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;

    @media (max-width: 768px) {
        flex: 1;
        padding: 1rem;
    }
`,Gi=Wt.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #003366;
    min-width: 30rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        min-width: 16rem;
    }
`,$i=Wt.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 1.2rem;
`;function Hi(){return i.createElement(Ui,null,i.createElement(qi,null,i.createElement(Xi,null,i.createElement(Gi,null,"Nossas soluções são completas para que a gestão governamental do seu munícipio seja realizada com excelência."),i.createElement($i,null,"Nosso portfólio completo permite centralizar todas as soluções de gestão governamental em um único local. Desde o planejamento, passando pela documento de formalização de demanda, processos administrativos e contratação, até a gestão de contratos.")),i.createElement(Wi,null,i.createElement(Oi,{titulo:"M2A Planejamentos",descricao:"Planeje suas demandas",url_imagem:Ni,style:{background:"royalblue"}}),i.createElement(Oi,{titulo:"M2A Compras",descricao:"Crie suas demandas",url_imagem:zi,style:{background:"rgba(0, 110, 156, 0.69)"}}),i.createElement(Oi,{titulo:"M2A Pesquisas",descricao:"Realize suas cotações de preço",url_imagem:Li,style:{background:"#0F9B8E"}}),i.createElement(Oi,{titulo:"M2A Processos",descricao:"Parametrize suas contratações",url_imagem:Bi,style:{background:"#478dcc"}}),i.createElement(Oi,{titulo:"M2A Fornecedores",descricao:"Participe de contratações",url_imagem:Yi,style:{background:"#2b576e"}}),i.createElement(Oi,{titulo:"M2A Contratos",descricao:"Gerencie seus contratos",url_imagem:Ni,style:{background:"#2F4F4F"}}))),i.createElement(Ii,null))}var Ki=n(6973),Zi=n(7909),Ji=n(5867),Qi=n(5066),_i=n(1351),er=n(2388),tr=n(1406);const nr=Wt.div`
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
`,ir=Wt.label`
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`,rr=Wt.label`
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: 'Montserrat Alternates', sans-serif;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`,or=Wt.div`
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
`,ar=Wt.div`
    color:rgb(245, 212, 115);
    font-size: 5rem;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`,sr=Wt.label`
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
`,lr=Wt.label`
    color: #ffffff;
    font-size: 1.1rem;
    font-family: 'Montserrat Alternates', sans-serif;
    text-align: center;
    width: 15rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;function cr(e){let{titulo:t,descricao:n}=e;return i.createElement(nr,null,i.createElement(ir,null,t),i.createElement(rr,null,n))}function ur(e){let{icone:t,titulo:n,descricao:r}=e;return i.createElement(or,null,i.createElement(ar,null,t),i.createElement(sr,null,n),i.createElement(lr,null,r))}function dr(e){let{valorFinal:t,visible:n,duracao:r=1e3}=e;const{0:o,1:a}=(0,i.useState)(0),s=(0,i.useRef)(0);return(0,i.useEffect)((()=>{const e=performance.now(),n=()=>{const i=performance.now()-e,o=Math.min(i/r,1),l=Math.ceil(o*t),c=100*Math.ceil(l/100);a(Math.min(c,t)),o<1&&(s.current=requestAnimationFrame(n))};return s.current=requestAnimationFrame(n),()=>cancelAnimationFrame(s.current)}),[t,r,n]),i.createElement("span",null,o)}const mr=Wt.div`
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
`,hr=Wt.div`
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
`;function pr(){const e=(0,i.useRef)(null),{0:t,1:n}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?n(!0):n(!1)}))}),{threshold:.1});return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}}),[]),i.createElement(mr,{ref:e},i.createElement(hr,null,i.createElement(cr,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(dr,{visible:t,valorFinal:300,duracao:2500})),descricao:"Clientes"}),i.createElement(cr,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(dr,{visible:t,valorFinal:1e4,duracao:2500}),i.createElement("label",null," mil ")),descricao:"Contratações"}),i.createElement(cr,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(dr,{visible:t,valorFinal:5e3,duracao:2500}),i.createElement("label",null," mil ")),descricao:"Fornecedores"}),i.createElement(cr,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(dr,{visible:t,valorFinal:15e3,duracao:2500}),i.createElement("label",null," mil ")),descricao:"Contratos"})),i.createElement(ur,{icone:i.createElement(Zi.c4U,null),titulo:"+ 300 mil",descricao:"dfd's criados"}),i.createElement(ur,{icone:i.createElement(Qi.QDl,null),titulo:"+ 250 mil",descricao:"pesquisas realizadas"}),i.createElement(ur,{icone:i.createElement(Ji.xAX,null),titulo:"+ 200 mil",descricao:"pedidos de cotação respondidos"}),i.createElement(ur,{icone:i.createElement(Ki.fIi,null),titulo:"+ 1 milhão",descricao:"preços importados"}),i.createElement(ur,{icone:i.createElement(qn.Gjp,null),titulo:"+ 200 mil",descricao:"licitações públicadas"}),i.createElement(ur,{icone:i.createElement(_i.Ua$,null),titulo:"+ 50 mil",descricao:"contratações diretas públicadas"}),i.createElement(ur,{icone:i.createElement(er.sn$,null),titulo:"+ 20 mil",descricao:"procedimentos auxiliares públicados"}),i.createElement(ur,{icone:i.createElement(tr.sGK,null),titulo:"+ 100 mil",descricao:"processos eletrônicos gerenciados"}))}var fr=n(1735);const gr=Wt.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    background-color: #ffffff;
    overflow: hidden;
    margin: 10rem 10rem 0 10rem;

    @media (max-width: 768px) {
        margin: 2rem;
        padding: 0
    }
`,yr=Wt.div`
    display: flex;
    flex: 1;
    
    @media (max-width: 768px) {
        flex-direction: column!important;
        align-items: center!important;
        justify-content: center!important;
    }

    @media (min-width: 768px) {
        opacity: 0;
        filter: blur(40px); /* Blur inicial */
        transform: translateX(1000px) scaleX(1) scaleY(1); /* Posição inicial da animação (direita) */
        transform-origin: 0% 50%;
        transition: all 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000); /* Para transições não animadas */

        &.visible-right {
                animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
        }

        &.visible-left {
                animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
        }

        &.invisible-left {
                animation: slide-out-blurred-left 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
        }

        &.invisible-right {
                animation: slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
        }
    }
        
    @keyframes slide-in-blurred-right {
        0% {
            -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
                    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 0% 50%;
                    transform-origin: 0% 50%;
            -webkit-filter: blur(40px);
                    filter: blur(40px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
                    transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
            -webkit-filter: blur(0);
                    filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes slide-out-blurred-right {
        0% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
                    transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
            -webkit-filter: blur(0);
                    filter: blur(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);
                    transform: translateX(1000px) scaleX(2) scaleY(0.2);
            -webkit-transform-origin: 0% 50%;
                    transform-origin: 0% 50%;
            -webkit-filter: blur(40px);
                    filter: blur(40px);
            opacity: 0;
        }
    }

    @keyframes slide-in-blurred-left {
        0% {
            -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
                    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
                    transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
                    filter: blur(40px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
                    transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
            -webkit-filter: blur(0);
                    filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes slide-out-blurred-left {
        0% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
                    transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
            -webkit-filter: blur(0);
                    filter: blur(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateX(-1000px) scaleX(2) scaleY(0.2);
                    transform: translateX(-1000px) scaleX(2) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
                    transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
                    filter: blur(40px);
            opacity: 0;
        }
    }

`,vr=Wt.div`
    padding: 0 5rem 5rem 5rem;
    color: #003366;

    @media (max-width: 768px) {
        margin: 2rem;
        padding: 0
    }
`,br=Wt.div`
    display: flex;
    flex-direction: column;
    line-height: 2;
`,xr=Wt.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #003366;
`,wr=Wt.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 0.90rem;
    max-width: 40rem
`,Er=e=>{let{icone:t,titulo:n,descricao:r,entrada:o,saida:a,style:s}=e;const l=(0,i.useRef)(null),{0:c,1:u}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?u(!0):u(!1)}))}),{threshold:.1});return l.current&&e.observe(l.current),()=>{l.current&&e.unobserve(l.current)}}),[]),(0,i.useEffect)((()=>{c&&console.log("Componente visível!")}),[c]),i.createElement(yr,{ref:l,style:s,className:c?o:a},i.createElement(vr,null,t),i.createElement(br,null,i.createElement(xr,null,n),i.createElement(wr,null,r)))};function Ar(){return i.createElement(gr,null,i.createElement(Er,{icone:i.createElement(dn.wYV,{size:200}),titulo:"Tecnologia de ponta",descricao:"Estamos evoluindo constantemente as nossas soluções, tudo isso para garantir que nossos clientes tenham acesso à tecnologia de qualidade, proporcionando uma experiência agradável, prática e segura. Todos os nossos sistemas são totalmente online e podem ser acessados de qualquer aparelho que navega pela internet.",style:{justifyContent:"flex-start"},entrada:"visible-right",saida:"invisible-right"}),i.createElement(Er,{icone:i.createElement(fr.fHv,{size:200}),titulo:"Somos Especialista",descricao:"Além da tecnologia, contamos com equipe de especialistas com vasta experiência no negócio, sempre preocupados em manter a qualidade e a legalidade jurídica de nossas soluções.",style:{justifyContent:"flex-end",flexDirection:"row-reverse"},entrada:"visible-left",saida:"invisible-left"}),i.createElement(Er,{icone:i.createElement(tr.KCy,{size:200}),titulo:"Suporte diferenciado",descricao:"Fornecer um atendimento de qualidade é essencial para mantermos a qualidade de nossas soluções. Queremos estar sempre próximos aos nossos clientes, entender suas necessidades e solucioná-los da melhor maneira.",style:{justifyContent:"flex-start"},entrada:"visible-right",saida:"invisible-right"}))}const Sr=Wt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;
    height: 34rem;
    max-width: 22rem;
    margin: 2rem 1rem;
    border-radius: 1.5rem;
    overflow: visible;

    @media (max-width: 768px) {
        transform: none!important;
    }
`,Pr=Wt.div`
    padding: 1rem;
    opacity: 1;
    background: transparent;
    box-shadow: none;
    max-height: 35rem;
`,kr=Wt.img`
    margin-top: -45px;
    height: 20rem;
    width: 100%;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.50rem 0.50rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.50rem -0.0625rem;
    filter: brightness(95%);
`,Cr=Wt.div`
    display: flex;
    height: 20rem;
    flex-direction: column;
    padding: 24px 8px 8px;
    opacity: 1;
    background: transparent;
    box-shadow: none;
`,Tr=Wt.label`
    font-weight: bold;
    font-size: 1rem;
    color: #003366;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0.5rem;
`,Mr=Wt.label`
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
`;function jr(e){let{imagem:t,titulo:n,descricao:r,style:o}=e;return i.createElement(Sr,{style:o},i.createElement(Pr,null,i.createElement(kr,{src:t}),i.createElement(Cr,null,i.createElement(Tr,null,n),i.createElement(Mr,null,r))))}var Dr=n.p+"static/ia-software-f8494f538ed934a3d0831fe9196cc8fc.png",Rr=n.p+"static/ia-2-software-4a24c1234c12e6283803f7de7b5dcbca.png",Vr=n.p+"static/ia-3-software-5d8d2dd0824c3f5f50e594a2e951b666.png";const Or=Wt.div`
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
`,Fr=Wt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 65rem;
`,Ir=Wt.label`
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    margin: 4rem;
`;function zr(){const e=(0,i.useRef)(null),{0:t,1:n}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?n(!0):n(!1)}))}),{threshold:.1});return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}}),[]),(0,i.useEffect)((()=>{t&&console.log("Componente visível!")}),[t]),i.createElement(Or,{ref:e},i.createElement(Ir,null,"MIA: A Inteligência Artificial que Entende o seu Governo"),i.createElement(Fr,null,i.createElement(jr,{imagem:Dr,titulo:"Estudos Técnicos Aprofundados",descricao:" Otimize seus estudos técnicos preliminares com a MIA, nossa Inteligência Artificial. Ela  auxilia na geração de análises bem elaboradas, garantindo um entendimento completo da demanda  e a melhor abordagem para atendê-la. Conte com a precisão e eficiência da MIA para impulsionar  seus projetos. "}),i.createElement(jr,{style:{transform:t?"translateY(-30%)":"translateY(0)",transition:"transform 1s ease-in-out"},imagem:Vr,titulo:"Formalização de Demandas Inteligente e Eficaz",descricao:" Simplifique a formalização de suas demandas com a MIA. Nossa Inteligência Artificial auxilia na  criação de objetos e justificativas claras e concisas, detalhando o que é a demanda e o motivo  de sua necessidade. Garanta documentos bem elaborados e um processo mais eficiente com a MIA. "}),i.createElement(jr,{imagem:Rr,titulo:"Avaliação de Riscos Inteligente e Seguras",descricao:" Minimize riscos em suas contratações com a MIA, nossa Inteligência Artificial especializada em  avaliação de perigos. Ela analisa dados complexos e identifica potenciais vulnerabilidades,  fornecendo insights cruciais para decisões mais seguras e eficientes. Confie na MIA para  proteger seus projetos. "})))}const Lr=Wt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
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

    @media (max-width: 1024px) {
        flex-direction: row;
        height: 120rem;
        width: 100%;
        margin: 0;
    }
`,Br=Wt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    width: calc(100% - 4rem);
    gap: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        height: auto;
    }
`,Nr=Wt.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    height: 10rem;
    width: 100%;
`,Yr=Wt.div`
    display: flex;
    width: 60%;
    height: 100%;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1024px) {
        width: 100%;
    }
`,Ur=Wt.div`
    display: flex;
    width: 100%;
    height: 66%;
`,qr=Wt.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: url(${e=>e.imgProdutoProcessos});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
        height: 25rem;
    }
`,Xr=Wt.label`
    color: #ffffff;
    background-color: rgb(0 0 0 / 35%);
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    flex-wrap: wrap;
    padding: 1rem;
    text-shadow: 1px 1px black;
`,Wr=Wt.div`
    color: #ffffff;
    width: calc(100% - 2rem);
    background-color: #003366;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
`,Gr=Wt.div`
    display: flex;
    width: 100%;
    height: 40%;
    gap: 2rem;

    @media (max-width: 768px) {
        height: 100%;
    }
`,$r=Wt.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    border-radius: 1rem;
    background: url(${e=>e.imagem});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    position: relative;

    @media (max-width: 768px) {
        flex: none;
        height: 15rem;
        width: 100%;
    }
`,Hr=Wt.label`
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.2rem 1rem;
    color: #ffffff;
    background-color: rgb(0 0 0 / 65%);
`,Kr=Wt.label`
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    padding: 0.8rem;
    color: #ffffff;
    background-color: #003366;
    border-radius: 0 0 1rem 1rem;
`,Zr=Wt.div`
    display: flex;
    width: 40%;
    height: 100%;
    gap: 1rem;

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,Jr=Wt.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 2rem;

    @media (max-width: 1024px) {
        width: 100%;
    }

`,Qr=Wt.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: calc(100% - 1.4rem);
    height: calc(100% - 1.4rem);
    background: url(${e=>e.imagem});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1rem;

    @media (max-width: 1024px) {
        height: 20rem;
    }

    @media (max-width: 768px) {
        height: 15rem;
        width: 100%;
    }
`,_r=Wt.label`
    padding: 0.7rem;
    color: #003366;
    background-color: #ffffff;
    opacity: 0.75;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: bold;
`,eo=Wt.label`
    padding: 0.7rem;
    color: #ffffff;
    background-color: #003366;
    font-family: 'Roboto', sans-serif;
    font-size: 0.85rem;
    border-radius: 0 0 1rem 1rem;
`;function to(){return i.createElement(Lr,null,i.createElement(Nr,null,"Notícias"),i.createElement(Br,null,i.createElement(Yr,null,i.createElement(Ur,null,i.createElement(qr,{imgProdutoProcessos:Bi},i.createElement(Xr,null,"Governo Federal Anuncia Nova Lei de Licitações Digitais"),i.createElement(Wr,null,"Nova legislação promete revolucionar processos de compras públicas com foco em tecnologia e transparência"))),i.createElement(Gr,null,[{titulo:"Ministério da Economia Investe em Software de Gestão",descricao:"Projeto piloto será implementado em 5 secretarias estaduais",imagem:zi},{titulo:"Lei de Proteção de Dados Públicos é Aprovada",descricao:"Nova regulamentação estabelece padrões para armazenamento de dados governamentais",imagem:Bi},{titulo:"Prefeituras Adotam Sistema de Compras Online",descricao:"Municípios economizam mais de R$ 50 milhões com nova plataforma",imagem:zi}].map(((e,t)=>i.createElement($r,{key:t,imagem:e.imagem},i.createElement(Hr,null,e.titulo),i.createElement(Kr,null,e.descricao)))))),i.createElement(Zr,null,i.createElement(Jr,null,[{titulo:"TCU Recomenda Uso de IA em Licitações",descricao:"Tribunal sugere implementação de inteligência artificial para análise de propostas",imagem:Bi},{titulo:"Nova Plataforma de Compras Governamentais",descricao:"Sistema unificado promete reduzir custos operacionais em 30%",imagem:zi}].map(((e,t)=>i.createElement(Qr,{key:t,imagem:e.imagem},i.createElement(_r,null,e.titulo),i.createElement(eo,null,e.descricao))))),i.createElement(Jr,null,[{titulo:"Governo Lança Portal de Transparência 2.0",descricao:"Nova versão do sistema traz recursos avançados de visualização de dados",imagem:Bi},{titulo:"Lei de Software Livre é Atualizada",descricao:"Nova versão da legislação incentiva uso de código aberto no setor público",imagem:zi}].map(((e,t)=>i.createElement(Qr,{key:t,imagem:e.imagem},i.createElement(_r,null,e.titulo),i.createElement(eo,null,e.descricao))))))))}function no(e){if("undefined"==typeof Proxy)return e;const t=new Map;return new Proxy(((...t)=>e(...t)),{get:(n,i)=>"create"===i?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function io(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}function ro(e){const t=[{},{}];return e?.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function oo(e,t,n,i){if("function"==typeof t){const[r,o]=ro(i);t=t(void 0!==n?n:e.custom,r,o)}if("string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t){const[r,o]=ro(i);t=t(void 0!==n?n:e.custom,r,o)}return t}function ao(e,t,n){const i=e.getProps();return oo(i,t,void 0!==n?n:i.custom,e)}function so(e,t){return e?.[t]??e?.default??e}const lo=e=>e,co={},uo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],mo={value:null,addProjectionMetrics:null};function ho(e,t){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=uo.reduce(((e,n)=>(e[n]=function(e,t){let n=new Set,i=new Set,r=!1,o=!1;const a=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){a.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:(e,t=!1,o=!1)=>{const s=o&&r?n:i;return t&&a.add(e),s.has(e)||s.add(e),e},cancel:e=>{i.delete(e),a.delete(e)},process:e=>{s=e,r?o=!0:(r=!0,[n,i]=[i,n],n.forEach(c),t&&mo.value&&mo.value.frameloop[t].push(l),l=0,n.clear(),r=!1,o&&(o=!1,u.process(e)))}};return u}(o,t?n:void 0),e)),{}),{setup:s,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:m,render:h,postRender:p}=a,f=()=>{const o=co.useManualTiming?r.timestamp:performance.now();n=!1,co.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(o-r.timestamp,40),1)),r.timestamp=o,r.isProcessing=!0,s.process(r),l.process(r),c.process(r),u.process(r),d.process(r),m.process(r),h.process(r),p.process(r),r.isProcessing=!1,n&&t&&(i=!1,e(f))};return{schedule:uo.reduce(((t,o)=>{const s=a[o];return t[o]=(t,o=!1,a=!1)=>(n||(n=!0,i=!0,r.isProcessing||e(f)),s.schedule(t,o,a)),t}),{}),cancel:e=>{for(let t=0;t<uo.length;t++)a[uo[t]].cancel(e)},state:r,steps:a}}const{schedule:po,cancel:fo,state:go,steps:yo}=ho("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:lo,!0),vo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],bo=(()=>new Set(vo))(),xo=new Set(["width","height","top","left","right","bottom",...vo]);function wo(e,t){-1===e.indexOf(t)&&e.push(t)}function Eo(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ao{constructor(){this.subscriptions=[]}add(e){return wo(this.subscriptions,e),()=>Eo(this.subscriptions,e)}notify(e,t,n){const i=this.subscriptions.length;if(i)if(1===i)this.subscriptions[0](e,t,n);else for(let r=0;r<i;r++){const i=this.subscriptions[r];i&&i(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function So(e,t){return t?e*(1e3/t):0}let Po;function ko(){Po=void 0}const Co={now:()=>(void 0===Po&&Co.set(go.isProcessing||co.useManualTiming?go.timestamp:performance.now()),Po),set:e=>{Po=e,queueMicrotask(ko)}},To={current:void 0};class Mo{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(e,t=!0)=>{const n=Co.now();if(this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const i of this.dependents)i.dirty();t&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Co.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ao);const n=this.events[e].add(t);return"change"===e?()=>{n(),po.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return To.current&&To.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Co.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return So(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jo(e,t){return new Mo(e,t)}const Do=e=>Array.isArray(e);function Ro(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,jo(n))}function Vo(e){return Do(e)?e[e.length-1]||0:e}const Oo=e=>Boolean(e&&e.getVelocity);function Fo(e,t){const n=e.getValue("willChange");if(i=n,Boolean(Oo(i)&&i.add))return n.add(t);if(!n&&co.WillChange){const n=new co.WillChange("auto");e.addValue("willChange",n),n.add(t)}var i}const Io=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),zo="data-"+Io("framerAppearId");function Lo(e){return e.props[zo]}const Bo=(e,t)=>n=>t(e(n)),No=(...e)=>e.reduce(Bo),Yo=(e,t,n)=>n>t?t:n<e?e:n,Uo=e=>1e3*e,qo=e=>e/1e3,Xo={layout:0,mainThread:0,waapi:0};const Wo=e=>t=>"string"==typeof t&&t.startsWith(e),Go=Wo("--"),$o=Wo("var(--"),Ho=e=>!!$o(e)&&Ko.test(e.split("/*")[0].trim()),Ko=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Zo={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},Jo={...Zo,transform:e=>Yo(0,1,e)},Qo={...Zo,default:1},_o=e=>Math.round(1e5*e)/1e5,ea=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const ta=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,na=(e,t)=>n=>Boolean("string"==typeof n&&ta.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),ia=(e,t,n)=>i=>{if("string"!=typeof i)return i;const[r,o,a,s]=i.match(ea);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},ra={...Zo,transform:e=>Math.round((e=>Yo(0,255,e))(e))},oa={test:na("rgb","red"),parse:ia("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+ra.transform(e)+", "+ra.transform(t)+", "+ra.transform(n)+", "+_o(Jo.transform(i))+")"};const aa={test:na("#"),parse:function(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}},transform:oa.transform},sa=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),la=sa("deg"),ca=sa("%"),ua=sa("px"),da=sa("vh"),ma=sa("vw"),ha=(()=>({...ca,parse:e=>ca.parse(e)/100,transform:e=>ca.transform(100*e)}))(),pa={test:na("hsl","hue"),parse:ia("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+ca.transform(_o(t))+", "+ca.transform(_o(n))+", "+_o(Jo.transform(i))+")"},fa={test:e=>oa.test(e)||aa.test(e)||pa.test(e),parse:e=>oa.test(e)?oa.parse(e):pa.test(e)?pa.parse(e):aa.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?oa.transform(e):pa.transform(e)},ga=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const ya="number",va="color",ba=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xa(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},r=[];let o=0;const a=t.replace(ba,(e=>(fa.test(e)?(i.color.push(o),r.push(va),n.push(fa.parse(e))):e.startsWith("var(")?(i.var.push(o),r.push("var"),n.push(e)):(i.number.push(o),r.push(ya),n.push(parseFloat(e))),++o,"${}"))).split("${}");return{values:n,split:a,indexes:i,types:r}}function wa(e){return xa(e).values}function Ea(e){const{split:t,types:n}=xa(e),i=t.length;return e=>{let r="";for(let o=0;o<i;o++)if(r+=t[o],void 0!==e[o]){const t=n[o];r+=t===ya?_o(e[o]):t===va?fa.transform(e[o]):e[o]}return r}}const Aa=e=>"number"==typeof e?0:e;const Sa={test:function(e){return isNaN(e)&&"string"==typeof e&&(e.match(ea)?.length||0)+(e.match(ga)?.length||0)>0},parse:wa,createTransformer:Ea,getAnimatableNone:function(e){const t=wa(e);return Ea(e)(t.map(Aa))}};function Pa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ka(e,t){return n=>n>0?t:e}const Ca=(e,t,n)=>e+(t-e)*n,Ta=(e,t,n)=>{const i=e*e,r=n*(t*t-i)+i;return r<0?0:Math.sqrt(r)},Ma=[aa,oa,pa];function ja(e){const t=(e=>Ma.find((t=>t.test(e))))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===pa&&(n=function({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,n/=100;let r=0,o=0,a=0;if(t/=100){const i=n<.5?n*(1+t):n+t-n*t,s=2*n-i;r=Pa(s,i,e+1/3),o=Pa(s,i,e),a=Pa(s,i,e-1/3)}else r=o=a=n;return{red:Math.round(255*r),green:Math.round(255*o),blue:Math.round(255*a),alpha:i}}(n)),n}const Da=(e,t)=>{const n=ja(e),i=ja(t);if(!n||!i)return ka(e,t);const r={...n};return e=>(r.red=Ta(n.red,i.red,e),r.green=Ta(n.green,i.green,e),r.blue=Ta(n.blue,i.blue,e),r.alpha=Ca(n.alpha,i.alpha,e),oa.transform(r))},Ra=new Set(["none","hidden"]);function Va(e,t){return n=>Ca(e,t,n)}function Oa(e){return"number"==typeof e?Va:"string"==typeof e?Ho(e)?ka:fa.test(e)?Da:za:Array.isArray(e)?Fa:"object"==typeof e?fa.test(e)?Da:Ia:ka}function Fa(e,t){const n=[...e],i=n.length,r=e.map(((e,n)=>Oa(e)(e,t[n])));return e=>{for(let t=0;t<i;t++)n[t]=r[t](e);return n}}function Ia(e,t){const n={...e,...t},i={};for(const r in n)void 0!==e[r]&&void 0!==t[r]&&(i[r]=Oa(e[r])(e[r],t[r]));return e=>{for(const t in i)n[t]=i[t](e);return n}}const za=(e,t)=>{const n=Sa.createTransformer(t),i=xa(e),r=xa(t);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Ra.has(e)&&!r.values.length||Ra.has(t)&&!i.values.length?function(e,t){return Ra.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):No(Fa(function(e,t){const n=[],i={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const o=t.types[r],a=e.indexes[o][i[o]],s=e.values[a]??0;n[r]=s,i[o]++}return n}(i,r),r.values),n):ka(e,t)};function La(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return Ca(e,t,n);return Oa(e)(e,t)}const Ba=e=>{const t=({timestamp:t})=>e(t);return{start:(e=!0)=>po.update(t,e),stop:()=>fo(t),now:()=>go.isProcessing?go.timestamp:Co.now()}},Na=(e,t,n=10)=>{let i="";const r=Math.max(Math.round(t/n),2);for(let o=0;o<r;o++)i+=e(o/(r-1))+", ";return`linear(${i.substring(0,i.length-2)})`},Ya=2e4;function Ua(e){let t=0;let n=e.next(t);for(;!n.done&&t<Ya;)t+=50,n=e.next(t);return t>=Ya?1/0:t}function qa(e,t,n){const i=Math.max(t-5,0);return So(n-e(i),t-i)}const Xa=100,Wa=10,Ga=1,$a=0,Ha=800,Ka=.3,Za=.3,Ja={granular:.01,default:2},Qa={granular:.005,default:.5},_a=.01,es=10,ts=.05,ns=1,is=.001;function rs({duration:e=Ha,bounce:t=Ka,velocity:n=$a,mass:i=Ga}){let r,o;Uo(es);let a=1-t;a=Yo(ts,ns,a),e=Yo(_a,es,qo(e)),a<1?(r=t=>{const i=t*a,r=i*e,o=i-n,s=as(t,a),l=Math.exp(-r);return is-o/s*l},o=t=>{const i=t*a*e,o=i*n+n,s=Math.pow(a,2)*Math.pow(t,2)*e,l=Math.exp(-i),c=as(Math.pow(t,2),a);return(-r(t)+is>0?-1:1)*((o-s)*l)/c}):(r=t=>Math.exp(-t*e)*((t-n)*e+1)-.001,o=t=>Math.exp(-t*e)*(e*e*(n-t)));const s=function(e,t,n){let i=n;for(let r=1;r<os;r++)i-=e(i)/t(i);return i}(r,o,5/e);if(e=Uo(e),isNaN(s))return{stiffness:Xa,damping:Wa,duration:e};{const t=Math.pow(s,2)*i;return{stiffness:t,damping:2*a*Math.sqrt(i*t),duration:e}}}const os=12;function as(e,t){return e*Math.sqrt(1-t*t)}const ss=["duration","bounce"],ls=["stiffness","damping","mass"];function cs(e,t){return t.some((t=>void 0!==e[t]))}function us(e=Za,t=Ka){const n="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:i,restDelta:r}=n;const o=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],s={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:d,velocity:m,isResolvedFromDuration:h}=function(e){let t={velocity:$a,stiffness:Xa,damping:Wa,mass:Ga,isResolvedFromDuration:!1,...e};if(!cs(e,ls)&&cs(e,ss))if(e.visualDuration){const n=e.visualDuration,i=2*Math.PI/(1.2*n),r=i*i,o=2*Yo(.05,1,1-(e.bounce||0))*Math.sqrt(r);t={...t,mass:Ga,stiffness:r,damping:o}}else{const n=rs(e);t={...t,...n,mass:Ga},t.isResolvedFromDuration=!0}return t}({...n,velocity:-qo(n.velocity||0)}),p=m||0,f=c/(2*Math.sqrt(l*u)),g=a-o,y=qo(Math.sqrt(l/u)),v=Math.abs(g)<5;let b;if(i||(i=v?Ja.granular:Ja.default),r||(r=v?Qa.granular:Qa.default),f<1){const e=as(y,f);b=t=>{const n=Math.exp(-f*y*t);return a-n*((p+f*y*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===f)b=e=>a-Math.exp(-y*e)*(g+(p+y*g)*e);else{const e=y*Math.sqrt(f*f-1);b=t=>{const n=Math.exp(-f*y*t),i=Math.min(e*t,300);return a-n*((p+f*y*g)*Math.sinh(i)+e*g*Math.cosh(i))/e}}const x={calculatedDuration:h&&d||null,next:e=>{const t=b(e);if(h)s.done=e>=d;else{let n=0===e?p:0;f<1&&(n=0===e?Uo(p):qa(b,e,t));const o=Math.abs(n)<=i,l=Math.abs(a-t)<=r;s.done=o&&l}return s.value=s.done?a:t,s},toString:()=>{const e=Math.min(Ua(x),Ya),t=Na((t=>x.next(e*t).value),e,30);return e+"ms "+t},toTransition:()=>{}};return x}function ds({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:c=.5,restSpeed:u}){const d=e[0],m={done:!1,value:d},h=e=>void 0===s?l:void 0===l||Math.abs(s-e)<Math.abs(l-e)?s:l;let p=n*t;const f=d+p,g=void 0===a?f:a(f);g!==f&&(p=g-d);const y=e=>-p*Math.exp(-e/i),v=e=>g+y(e),b=e=>{const t=y(e),n=v(e);m.done=Math.abs(t)<=c,m.value=m.done?g:n};let x,w;const E=e=>{(e=>void 0!==s&&e<s||void 0!==l&&e>l)(m.value)&&(x=e,w=us({keyframes:[m.value,h(m.value)],velocity:qa(v,e,m.value),damping:r,stiffness:o,restDelta:c,restSpeed:u}))};return E(0),{calculatedDuration:null,next:e=>{let t=!1;return w||void 0!==x||(t=!0,b(e),E(e)),void 0!==x&&e>=x?w.next(e-x):(!t&&b(e),m)}}}us.applyToOptions=e=>{const t=function(e,t=100,n){const i=n({...e,keyframes:[0,t]}),r=Math.min(Ua(i),Ya);return{type:"keyframes",ease:e=>i.next(r*e).value/t,duration:qo(r)}}(e,100,us);return e.ease=t.ease,e.duration=Uo(t.duration),e.type="keyframes",e};const ms=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function hs(e,t,n,i){if(e===t&&n===i)return lo;const r=t=>function(e,t,n,i,r){let o,a,s=0;do{a=t+(n-t)/2,o=ms(a,i,r)-e,o>0?n=a:t=a}while(Math.abs(o)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:ms(r(e),t,i)}const ps=hs(.42,0,1,1),fs=hs(0,0,.58,1),gs=hs(.42,0,.58,1),ys=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,vs=e=>t=>1-e(1-t),bs=hs(.33,1.53,.69,.99),xs=vs(bs),ws=ys(xs),Es=e=>(e*=2)<1?.5*xs(e):.5*(2-Math.pow(2,-10*(e-1))),As=e=>1-Math.sin(Math.acos(e)),Ss=vs(As),Ps=ys(As),ks=e=>Array.isArray(e)&&"number"==typeof e[0],Cs={linear:lo,easeIn:ps,easeInOut:gs,easeOut:fs,circIn:As,circInOut:Ps,circOut:Ss,backIn:xs,backInOut:ws,backOut:bs,anticipate:Es},Ts=e=>{if(ks(e)){e.length;const[t,n,i,r]=e;return hs(t,n,i,r)}return"string"==typeof e?Cs[e]:e},Ms=(e,t,n)=>{const i=t-e;return 0===i?1:(n-e)/i};function js(e,t,{clamp:n=!0,ease:i,mixer:r}={}){const o=e.length;if(t.length,1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const i=[],r=n||co.mix||La,o=e.length-1;for(let a=0;a<o;a++){let n=r(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||lo:t;n=No(e,n)}i.push(n)}return i}(t,i,r),l=s.length,c=n=>{if(a&&n<e[0])return t[0];let i=0;if(l>1)for(;i<e.length-2&&!(n<e[i+1]);i++);const r=Ms(e[i],e[i+1],n);return s[i](r)};return n?t=>c(Yo(e[0],e[o-1],t)):c}function Ds(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const r=Ms(0,t,i);e.push(Ca(n,1,r))}}(t,e.length-1),t}function Rs({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const r=(e=>Array.isArray(e)&&"number"!=typeof e[0])(i)?i.map(Ts):Ts(i),o={done:!1,value:t[0]},a=function(e,t){return e.map((e=>e*t))}(n&&n.length===t.length?n:Ds(t),e),s=js(a,t,{ease:Array.isArray(r)?r:(l=t,c=r,l.map((()=>c||gs)).splice(0,l.length-1))});var l,c;return{calculatedDuration:e,next:t=>(o.value=s(t),o.done=t>=e,o)}}const Vs=e=>null!==e;function Os(e,{repeat:t,repeatType:n="loop"},i,r=1){const o=e.filter(Vs),a=r<0||t&&"loop"!==n&&t%2==1?0:o.length-1;return a&&void 0!==i?i:o[a]}const Fs={decay:ds,inertia:ds,tween:Rs,keyframes:Rs,spring:us};function Is(e){"string"==typeof e.type&&(e.type=Fs[e.type])}class zs{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise((e=>{this.resolve=e}))}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const Ls=e=>e/100;class Bs extends zs{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=(e=!0)=>{if(e){const{motionValue:e}=this.options;e&&e.updatedAt!==Co.now()&&this.tick(Co.now())}this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},Xo.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){const{options:e}=this;Is(e);const{type:t=Rs,repeat:n=0,repeatDelay:i=0,repeatType:r,velocity:o=0}=e;let{keyframes:a}=e;const s=t||Rs;s!==Rs&&"number"!=typeof a[0]&&(this.mixKeyframes=No(Ls,La(a[0],a[1])),a=[0,100]);const l=s({...e,keyframes:a});"mirror"===r&&(this.mirroredGenerator=s({...e,keyframes:[...a].reverse(),velocity:-o})),null===l.calculatedDuration&&(l.calculatedDuration=Ua(l));const{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+i,this.totalDuration=this.resolvedDuration*(n+1)-i,this.generator=l}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:n,totalDuration:i,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:s}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:c,repeat:u,repeatType:d,repeatDelay:m,type:h,onUpdate:p,finalKeyframe:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=i);let v=this.currentTime,b=n;if(u){const e=Math.min(this.currentTime,i)/a;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,u+1);Boolean(t%2)&&("reverse"===d?(n=1-n,m&&(n-=m/a)):"mirror"===d&&(b=o)),v=Yo(0,1,n)*a}const x=y?{done:!1,value:c[0]}:b.next(v);r&&(x.value=r(x.value));let{done:w}=x;y||null===s||(w=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return E&&h!==ds&&(x.value=Os(c,this.options,f,this.speed)),p&&p(x.value),E&&this.finish(),x}then(e,t){return this.finished.then(e,t)}get duration(){return qo(this.calculatedDuration)}get time(){return qo(this.currentTime)}set time(e){e=Uo(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Co.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=qo(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=Ba,startTime:t}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Co.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,Xo.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}const Ns=e=>180*e/Math.PI,Ys=e=>{const t=Ns(Math.atan2(e[1],e[0]));return qs(t)},Us={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ys,rotateZ:Ys,skewX:e=>Ns(Math.atan(e[1])),skewY:e=>Ns(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},qs=e=>((e%=360)<0&&(e+=360),e),Xs=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ws=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Gs={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xs,scaleY:Ws,scale:e=>(Xs(e)+Ws(e))/2,rotateX:e=>qs(Ns(Math.atan2(e[6],e[5]))),rotateY:e=>qs(Ns(Math.atan2(-e[2],e[0]))),rotateZ:Ys,rotate:Ys,skewX:e=>Ns(Math.atan(e[4])),skewY:e=>Ns(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function $s(e){return e.includes("scale")?1:0}function Hs(e,t){if(!e||"none"===e)return $s(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=Gs,r=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=Us,r=t}if(!r)return $s(t);const o=i[t],a=r[1].split(",").map(Ks);return"function"==typeof o?o(a):a[o]}function Ks(e){return parseFloat(e.trim())}const Zs=e=>e===Zo||e===ua,Js=new Set(["x","y","z"]),Qs=vo.filter((e=>!Js.has(e)));const _s={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Hs(t,"x"),y:(e,{transform:t})=>Hs(t,"y")};_s.translateX=_s.x,_s.translateY=_s.y;const el=new Set;let tl=!1,nl=!1,il=!1;function rl(){if(nl){const e=Array.from(el).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return Qs.forEach((n=>{const i=e.getValue(n);void 0!==i&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((([t,n])=>{e.getValue(t)?.set(n)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}nl=!1,tl=!1,el.forEach((e=>e.complete(il))),el.clear()}function ol(){el.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(nl=!0)}))}class al{constructor(e,t,n,i,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=i,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(el.add(this),tl||(tl=!0,po.read(ol),po.resolveKeyframes(rl))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:i}=this;if(null===e[0]){const r=i?.get(),o=e[e.length-1];if(void 0!==r)e[0]=r;else if(n&&t){const i=n.readValue(t,o);null!=i&&(e[0]=i)}void 0===e[0]&&(e[0]=o),i&&void 0===r&&i.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),el.delete(this)}cancel(){"scheduled"===this.state&&(el.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}function sl(e){let t;return()=>(void 0===t&&(t=e()),t)}const ll=sl((()=>void 0!==window.ScrollTimeline)),cl={};function ul(e,t){const n=sl(e);return()=>cl[t]??n()}const dl=ul((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(e){return!1}return!0}),"linearEasing"),ml=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,hl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ml([0,.65,.55,1]),circOut:ml([.55,0,1,.45]),backIn:ml([.31,.01,.66,-.59]),backOut:ml([.33,1.53,.69,.99])};function pl(e,t){return e?"function"==typeof e?dl()?Na(e,t):"ease-out":ks(e)?ml(e):Array.isArray(e)?e.map((e=>pl(e,t)||hl.easeOut)):hl[e]:void 0}function fl(e,t,n,{delay:i=0,duration:r=300,repeat:o=0,repeatType:a="loop",ease:s="easeOut",times:l}={},c=void 0){const u={[t]:n};l&&(u.offset=l);const d=pl(s,r);Array.isArray(d)&&(u.easing=d),mo.value&&Xo.waapi++;const m={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"};c&&(m.pseudoElement=c);const h=e.animate(u,m);return mo.value&&h.finished.finally((()=>{Xo.waapi--})),h}function gl(e){return"function"==typeof e&&"applyToOptions"in e}class yl extends zs{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:n,keyframes:i,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:a,onComplete:s}=e;this.isPseudoElement=Boolean(r),this.allowFlatten=o,this.options=e,e.type;const l=function({type:e,...t}){return gl(e)&&dl()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}(e);this.animation=fl(t,n,i,l,r),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const e=Os(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(e):function(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(e){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return qo(Number(e))}get time(){return qo(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Uo(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&ll()?(this.animation.timeline=e,lo):t(this)}}const vl={anticipate:Es,backInOut:ws,circInOut:Ps};function bl(e){"string"==typeof e.ease&&e.ease in vl&&(e.ease=vl[e.ease])}class xl extends yl{constructor(e){bl(e),Is(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:i,element:r,...o}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);const a=new Bs({...o,autoplay:!1}),s=Uo(this.finishedTime??this.time);t.setWithVelocity(a.sample(s-10).value,a.sample(s).value,10),a.stop()}}const wl=(e,t)=>"zIndex"!==t&&(!("number"!=typeof e&&!Array.isArray(e))||!("string"!=typeof e||!Sa.test(e)&&"0"!==e||e.startsWith("url(")));const El=new Set(["opacity","clipPath","filter","transform"]),Al=sl((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));class Sl extends zs{constructor({autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:o="loop",keyframes:a,name:s,motionValue:l,element:c,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Co.now();const d={autoplay:e,delay:t,type:n,repeat:i,repeatDelay:r,repeatType:o,name:s,motionValue:l,element:c,...u},m=c?.KeyframeResolver||al;this.keyframeResolver=new m(a,((e,t,n)=>this.onKeyframesResolved(e,t,d,!n)),s,l,c),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,i){this.keyframeResolver=void 0;const{name:r,type:o,velocity:a,delay:s,isHandoff:l,onUpdate:c}=n;this.resolvedAt=Co.now(),function(e,t,n,i){const r=e[0];if(null===r)return!1;if("display"===t||"visibility"===t)return!0;const o=e[e.length-1],a=wl(r,t),s=wl(o,t);return!(!a||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||gl(n))&&i)}(e,r,o,a)||(!co.instantAnimations&&s||c?.(Os(e,n,t)),e[0]=e[e.length-1],n.duration=0,n.repeat=0);const u={startTime:i?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!l&&function(e){const{motionValue:t,name:n,repeatDelay:i,repeatType:r,damping:o,type:a}=e;if(!(t&&t.owner&&t.owner.current instanceof HTMLElement))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return Al()&&n&&El.has(n)&&("transform"!==n||!l)&&!s&&!i&&"mirror"!==r&&0!==o&&"inertia"!==a}(u)?new xl({...u,element:u.motionValue.owner.current}):new Bs(u);d.finished.then((()=>this.notifyFinished())).catch(lo),this.pendingTimeline&&(this.stopTimeline=d.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=d}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then((()=>{}))}get animation(){return this._animation||(this.keyframeResolver?.resume(),il=!0,ol(),rl(),il=!1),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Pl=e=>null!==e;const kl={type:"spring",stiffness:500,damping:25,restSpeed:10},Cl={type:"keyframes",duration:.8},Tl={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ml=(e,{keyframes:t})=>t.length>2?Cl:bo.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===t[1]?2*Math.sqrt(550):30,restSpeed:10}:kl:Tl;const jl=(e,t,n,i={},r,o)=>a=>{const s=so(i,e)||{},l=s.delay||i.delay||0;let{elapsed:c=0}=i;c-=Uo(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:r};(function({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:c,...u}){return!!Object.keys(u).length})(s)||Object.assign(u,Ml(e,u)),u.duration&&(u.duration=Uo(u.duration)),u.repeatDelay&&(u.repeatDelay=Uo(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),(co.instantAnimations||co.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!o&&void 0!==t.get()){const e=function(e,{repeat:t,repeatType:n="loop"},i){const r=e.filter(Pl),o=t&&"loop"!==n&&t%2==1?0:r.length-1;return o&&void 0!==i?i:r[o]}(u.keyframes,s);if(void 0!==e)return void po.update((()=>{u.onUpdate(e),u.onComplete()}))}return s.isSync?new Bs(u):new Sl(u)};function Dl({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&!0!==t[n];return t[n]=!1,i}function Rl(e,t,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=t;i&&(o=i);const l=[],c=r&&e.animationState&&e.animationState.getState()[r];for(const u in s){const t=e.getValue(u,e.latestValues[u]??null),i=s[u];if(void 0===i||c&&Dl(c,u))continue;const r={delay:n,...so(o||{},u)},a=t.get();if(void 0!==a&&!t.isAnimating&&!Array.isArray(i)&&i===a&&!r.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){const t=Lo(e);if(t){const e=window.MotionHandoffAnimation(t,u,po);null!==e&&(r.startTime=e,d=!0)}}Fo(e,u),t.start(jl(u,t,i,e.shouldReduceMotion&&xo.has(u)?{type:!1}:r,e,d));const m=t.animation;m&&l.push(m)}return a&&Promise.all(l).then((()=>{po.update((()=>{a&&function(e,t){const n=ao(e,t);let{transitionEnd:i={},transition:r={},...o}=n||{};o={...o,...i};for(const a in o)Ro(e,a,Vo(o[a]))}(e,a)}))})),l}function Vl(e,t,n={}){const i=ao(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const o=i?()=>Promise.all(Rl(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(i=0)=>{const{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=r;return function(e,t,n=0,i=0,r=1,o){const a=[],s=(e.variantChildren.size-1)*i,l=1===r?(e=0)=>e*i:(e=0)=>s-e*i;return Array.from(e.variantChildren).sort(Ol).forEach(((e,i)=>{e.notify("AnimationStart",t),a.push(Vl(e,t,{...o,delay:n+l(i)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(a)}(e,t,o+i,a,s,n)}:()=>Promise.resolve(),{when:s}=r;if(s){const[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then((()=>t()))}return Promise.all([o(),a(n.delay)])}function Ol(e,t){return e.sortNodePosition(t)}function Fl(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function Il(e){return"string"==typeof e||Array.isArray(e)}const zl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ll=["initial",...zl],Bl=Ll.length;function Nl(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&Nl(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<Bl;n++){const i=Ll[n],r=e.props[i];(Il(r)||!1===r)&&(t[i]=r)}return t}const Yl=[...zl].reverse(),Ul=zl.length;function ql(e){return t=>Promise.all(t.map((({animation:t,options:n})=>function(e,t,n={}){let i;if(e.notify("AnimationStart",t),Array.isArray(t)){const r=t.map((t=>Vl(e,t,n)));i=Promise.all(r)}else if("string"==typeof t)i=Vl(e,t,n);else{const r="function"==typeof t?ao(e,t,n.custom):t;i=Promise.all(Rl(e,r,n))}return i.then((()=>{e.notify("AnimationComplete",t)}))}(e,t,n))))}function Xl(e){let t=ql(e),n=$l(),i=!0;const r=t=>(n,i)=>{const r=ao(e,i,"exit"===t?e.presenceContext?.custom:void 0);if(r){const{transition:e,transitionEnd:t,...i}=r;n={...n,...i,...t}}return n};function o(o){const{props:a}=e,s=Nl(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<Ul;t++){const m=Yl[t],h=n[m],p=void 0!==a[m]?a[m]:s[m],f=Il(p),g=m===o?h.isActive:null;!1===g&&(d=t);let y=p===s[m]&&p!==a[m]&&f;if(y&&i&&e.manuallyAnimateOnMount&&(y=!1),h.protectedKeys={...u},!h.isActive&&null===g||!p&&!h.prevProp||io(p)||"boolean"==typeof p)continue;const v=Wl(h.prevProp,p);let b=v||m===o&&h.isActive&&!y&&f||t>d&&f,x=!1;const w=Array.isArray(p)?p:[p];let E=w.reduce(r(m),{});!1===g&&(E={});const{prevResolvedValues:A={}}=h,S={...A,...E},P=t=>{b=!0,c.has(t)&&(x=!0,c.delete(t)),h.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in S){const t=E[e],n=A[e];if(u.hasOwnProperty(e))continue;let i=!1;i=Do(t)&&Do(n)?!Fl(t,n):t!==n,i?null!=t?P(e):c.add(e):void 0!==t&&c.has(e)?P(e):h.protectedKeys[e]=!0}h.prevProp=p,h.prevResolvedValues=E,h.isActive&&(u={...u,...E}),i&&e.blockInitialAnimation&&(b=!1);b&&(!(y&&v)||x)&&l.push(...w.map((e=>({animation:e,options:{type:m}}))))}if(c.size){const t={};if("boolean"!=typeof a.initial){const n=ao(e,Array.isArray(a.initial)?a.initial[0]:a.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach((n=>{const i=e.getBaseTarget(n),r=e.getValue(n);r&&(r.liveStyle=!0),t[n]=i??null})),l.push({animation:t})}let m=Boolean(l.length);return!i||!1!==a.initial&&a.initial!==a.animate||e.manuallyAnimateOnMount||(m=!1),i=!1,m?t(l):Promise.resolve()}return{animateChanges:o,setActive:function(t,i){if(n[t].isActive===i)return Promise.resolve();e.variantChildren?.forEach((e=>e.animationState?.setActive(t,i))),n[t].isActive=i;const r=o(t);for(const e in n)n[e].protectedKeys={};return r},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=$l(),i=!0}}}function Wl(e,t){return"string"==typeof t?t!==e:!!Array.isArray(t)&&!Fl(t,e)}function Gl(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $l(){return{animate:Gl(!0),whileInView:Gl(),whileHover:Gl(),whileTap:Gl(),whileDrag:Gl(),whileFocus:Gl(),exit:Gl()}}class Hl{constructor(e){this.isMounted=!1,this.node=e}update(){}}let Kl=0;const Zl={animation:{Feature:class extends Hl{constructor(e){super(e),e.animationState||(e.animationState=Xl(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();io(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Hl{constructor(){super(...arguments),this.id=Kl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const i=this.node.animationState.setActive("exit",!e);t&&!e&&i.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},Jl={x:!1,y:!1};function Ql(){return Jl.x||Jl.y}function _l(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}const ec=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function tc(e){return{point:{x:e.pageX,y:e.pageY}}}function nc(e,t,n,i){return _l(e,t,(e=>t=>ec(t)&&e(t,tc(t)))(n),i)}function ic({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function rc(e){return e.max-e.min}function oc(e,t,n,i=.5){e.origin=i,e.originPoint=Ca(t.min,t.max,e.origin),e.scale=rc(n)/rc(t),e.translate=Ca(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function ac(e,t,n,i){oc(e.x,t.x,n.x,i?i.originX:void 0),oc(e.y,t.y,n.y,i?i.originY:void 0)}function sc(e,t,n){e.min=n.min+t.min,e.max=e.min+rc(t)}function lc(e,t,n){e.min=t.min-n.min,e.max=e.min+rc(t)}function cc(e,t,n){lc(e.x,t.x,n.x),lc(e.y,t.y,n.y)}const uc=()=>({x:{min:0,max:0},y:{min:0,max:0}});function dc(e){return[e("x"),e("y")]}function mc(e){return void 0===e||1===e}function hc({scale:e,scaleX:t,scaleY:n}){return!mc(e)||!mc(t)||!mc(n)}function pc(e){return hc(e)||fc(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function fc(e){return gc(e.x)||gc(e.y)}function gc(e){return e&&"0%"!==e}function yc(e,t,n){return n+t*(e-n)}function vc(e,t,n,i,r){return void 0!==r&&(e=yc(e,r,i)),yc(e,n,i)+t}function bc(e,t=0,n=1,i,r){e.min=vc(e.min,t,n,i,r),e.max=vc(e.max,t,n,i,r)}function xc(e,{x:t,y:n}){bc(e.x,t.translate,t.scale,t.originPoint),bc(e.y,n.translate,n.scale,n.originPoint)}const wc=.999999999999,Ec=1.0000000000001;function Ac(e,t){e.min=e.min+t,e.max=e.max+t}function Sc(e,t,n,i,r=.5){bc(e,t,n,Ca(e.min,e.max,r),i)}function Pc(e,t){Sc(e.x,t.x,t.scaleX,t.scale,t.originX),Sc(e.y,t.y,t.scaleY,t.scale,t.originY)}function kc(e,t){return ic(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}(e.getBoundingClientRect(),t))}const Cc=({current:e})=>e?e.ownerDocument.defaultView:null;function Tc(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Mc=(e,t)=>Math.abs(e-t);class jc{constructor(e,t,{transformPagePoint:n,contextWindow:i,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Vc(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Mc(e.x,t.x),i=Mc(e.y,t.y);return Math.sqrt(n**2+i**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:i}=e,{timestamp:r}=go;this.history.push({...i,timestamp:r});const{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Dc(t,this.transformPagePoint),po.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:i,resumeAnimation:r}=this.handlers;if(this.dragSnapToOrigin&&r&&r(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=Vc("pointercancel"===e.type?this.lastMoveEventInfo:Dc(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),i&&i(e,o)},!ec(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=n,this.contextWindow=i||window;const o=Dc(tc(e),this.transformPagePoint),{point:a}=o,{timestamp:s}=go;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Vc(o,this.history)),this.removeListeners=No(nc(this.contextWindow,"pointermove",this.handlePointerMove),nc(this.contextWindow,"pointerup",this.handlePointerUp),nc(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),fo(this.updatePoint)}}function Dc(e,t){return t?{point:t(e.point)}:e}function Rc(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Vc({point:e},t){return{point:e,delta:Rc(e,Fc(t)),offset:Rc(e,Oc(t)),velocity:Ic(t,.1)}}function Oc(e){return e[0]}function Fc(e){return e[e.length-1]}function Ic(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const r=Fc(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>Uo(t)));)n--;if(!i)return{x:0,y:0};const o=qo(r.timestamp-i.timestamp);if(0===o)return{x:0,y:0};const a={x:(r.x-i.x)/o,y:(r.y-i.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function zc(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function Lc(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}const Bc=.35;function Nc(e,t,n){return{min:Yc(e,t),max:Yc(e,n)}}function Yc(e,t){return"number"==typeof e?e:e[t]||0}const Uc=new WeakMap;class qc{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new jc(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(tc(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:i,onDragStart:r}=this.getProps();if(n&&!i&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(o=n)||"y"===o?Jl[o]?null:(Jl[o]=!0,()=>{Jl[o]=!1}):Jl.x||Jl.y?null:(Jl.x=Jl.y=!0,()=>{Jl.x=Jl.y=!1}),!this.openDragLock))return;var o;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),dc((e=>{let t=this.getAxisMotionValue(e).get()||0;if(ca.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const i=n.layout.layoutBox[e];if(i){t=rc(i)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),r&&po.postRender((()=>r(e,t))),Fo(this.visualElement,"transform");const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:i,onDirectionLock:r,onDrag:o}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:a}=t;if(i&&null===this.currentDirection)return this.currentDirection=function(e,t=10){let n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&r&&r(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>dc((e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:Cc(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:i}=t;this.startAnimation(i);const{onDragEnd:r}=this.getProps();r&&po.postRender((()=>r(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:i}=this.getProps();if(!n||!Xc(e,i,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=function(e,{min:t,max:n},i){return void 0!==t&&e<t?e=i?Ca(t,e,i.min):Math.max(e,t):void 0!==n&&e>n&&(e=i?Ca(n,e,i.max):Math.min(e,n)),e}(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,i=this.constraints;e&&Tc(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,{top:t,left:n,bottom:i,right:r}){return{x:zc(e.x,n,r),y:zc(e.y,t,i)}}(n.layoutBox,e),this.elastic=function(e=Bc){return!1===e?e=0:!0===e&&(e=Bc),{x:Nc(e,"left","right"),y:Nc(e,"top","bottom")}}(t),i!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&dc((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Tc(e))return!1;const n=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=function(e,t,n){const i=kc(e,n),{scroll:r}=t;return r&&(Ac(i.x,r.offset.x),Ac(i.y,r.offset.y)),i}(n,i.root,this.visualElement.getTransformPagePoint());let o=function(e,t){return{x:Lc(e.x,t.x),y:Lc(e.y,t.y)}}(i.layout.layoutBox,r);if(t){const e=t(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=ic(e))}return o}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:i,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=dc((a=>{if(!Xc(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});const c=i?200:1e6,u=i?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...r,...l};return this.startAxisValueAnimation(a,d)}));return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Fo(this.visualElement,e),n.start(jl(e,n,0,t,this.visualElement,!1))}stopAnimation(){dc((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){dc((e=>this.getAxisMotionValue(e).animation?.pause()))}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),i=n[t];return i||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){dc((t=>{const{drag:n}=this.getProps();if(!Xc(t,n,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(t);if(i&&i.layout){const{min:n,max:o}=i.layout.layoutBox[t];r.set(e[t]-Ca(n,o,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Tc(t)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};dc((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();i[e]=function(e,t){let n=.5;const i=rc(e),r=rc(t);return r>i?n=Ms(t.min,t.max-i,e.min):i>r&&(n=Ms(e.min,e.max-r,t.min)),Yo(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),dc((t=>{if(!Xc(t,e,null))return;const n=this.getAxisMotionValue(t),{min:r,max:o}=this.constraints[t];n.set(Ca(r,o,i[t]))}))}addListeners(){if(!this.visualElement.current)return;Uc.set(this.visualElement,this);const e=nc(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Tc(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),po.read(t);const r=_l(window,"resize",(()=>this.scalePositionWithinConstraints())),o=n.addEventListener("didUpdate",(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(dc((t=>{const n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))})),this.visualElement.render())}));return()=>{r(),e(),i(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:o=Bc,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:i,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function Xc(e,t,n){return!(!0!==t&&t!==e||null!==n&&n!==e)}const Wc=e=>(t,n)=>{e&&po.postRender((()=>e(t,n)))};var Gc=n(4848);const{schedule:$c,cancel:Hc}=ho(queueMicrotask,!1),Kc=(0,i.createContext)(null);const Zc=(0,i.createContext)({}),Jc=(0,i.createContext)({}),Qc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _c(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const eu={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e){if(!ua.test(e))return e;e=parseFloat(e)}return`${_c(e,t.target.x)}% ${_c(e,t.target.y)}%`}},tu={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,r=Sa.parse(e);if(r.length>5)return i;const o=Sa.createTransformer(e),a="number"!=typeof r[0]?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;r[0+a]/=s,r[1+a]/=l;const c=Ca(s,l,.5);return"number"==typeof r[2+a]&&(r[2+a]/=c),"number"==typeof r[3+a]&&(r[3+a]/=c),o(r)}},nu={};class iu extends i.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:i}=this.props,{projection:r}=e;!function(e){for(const t in e)nu[t]=e[t],Go(t)&&(nu[t].isCSSVariable=!0)}(ou),r&&(t.group&&t.group.add(r),n&&n.register&&i&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",(()=>{this.safeToRemove()})),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Qc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:i,isPresent:r}=this.props,{projection:o}=n;return o?(o.isPresent=r,i||e.layoutDependency!==t||void 0===t||e.isPresent!==r?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||po.postRender((()=>{const e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),$c.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function ru(e){const[t,n]=function(e=!0){const t=(0,i.useContext)(Kc);if(null===t)return[!0,null];const{isPresent:n,onExitComplete:r,register:o}=t,a=(0,i.useId)();(0,i.useEffect)((()=>{if(e)return o(a)}),[e]);const s=(0,i.useCallback)((()=>e&&r&&r(a)),[a,r,e]);return!n&&r?[!1,s]:[!0]}(),r=(0,i.useContext)(Zc);return(0,Gc.jsx)(iu,{...e,layoutGroup:r,switchLayoutGroup:(0,i.useContext)(Jc),isPresent:t,safeToRemove:n})}const ou={borderRadius:{...eu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:eu,borderTopRightRadius:eu,borderBottomLeftRadius:eu,borderBottomRightRadius:eu,boxShadow:tu};const au=(e,t)=>e.depth-t.depth;class su{constructor(){this.children=[],this.isDirty=!1}add(e){wo(this.children,e),this.isDirty=!0}remove(e){Eo(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(au),this.isDirty=!1,this.children.forEach(e)}}function lu(e,t){const n=Co.now(),i=({timestamp:r})=>{const o=r-n;o>=t&&(fo(i),e(o-t))};return po.setup(i,!0),()=>fo(i)}function cu(e){return Oo(e)?e.get():e}const uu=["TopLeft","TopRight","BottomLeft","BottomRight"],du=uu.length,mu=e=>"string"==typeof e?parseFloat(e):e,hu=e=>"number"==typeof e||ua.test(e);function pu(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const fu=yu(0,.5,Ss),gu=yu(.5,.95,lo);function yu(e,t,n){return i=>i<e?0:i>t?1:n(Ms(e,t,i))}function vu(e,t){e.min=t.min,e.max=t.max}function bu(e,t){vu(e.x,t.x),vu(e.y,t.y)}function xu(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function wu(e,t,n,i,r){return e=yc(e-=t,1/n,i),void 0!==r&&(e=yc(e,1/r,i)),e}function Eu(e,t,[n,i,r],o,a){!function(e,t=0,n=1,i=.5,r,o=e,a=e){ca.test(t)&&(t=parseFloat(t),t=Ca(a.min,a.max,t/100)-a.min);if("number"!=typeof t)return;let s=Ca(o.min,o.max,i);e===o&&(s-=t),e.min=wu(e.min,t,n,s,r),e.max=wu(e.max,t,n,s,r)}(e,t[n],t[i],t[r],t.scale,o,a)}const Au=["x","scaleX","originX"],Su=["y","scaleY","originY"];function Pu(e,t,n,i){Eu(e.x,t,Au,n?n.x:void 0,i?i.x:void 0),Eu(e.y,t,Su,n?n.y:void 0,i?i.y:void 0)}function ku(e){return 0===e.translate&&1===e.scale}function Cu(e){return ku(e.x)&&ku(e.y)}function Tu(e,t){return e.min===t.min&&e.max===t.max}function Mu(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function ju(e,t){return Mu(e.x,t.x)&&Mu(e.y,t.y)}function Du(e){return rc(e.x)/rc(e.y)}function Ru(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Vu{constructor(){this.members=[]}add(e){wo(this.members,e),e.scheduleRender()}remove(e){if(Eo(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let i=t;i>=0;i--){const e=this.members[i];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;!1===i&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Ou={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Fu=["","X","Y","Z"],Iu={visibility:"hidden"};let zu=0;function Lu(e,t,n,i){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),i&&(i[e]=0))}function Bu(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Lo(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",po,!(t||i))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&Bu(i)}function Nu({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(e={},n=t?.()){this.id=zu++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,mo.value&&(Ou.nodes=Ou.calculatedTargetDeltas=Ou.calculatedProjections=0),this.nodes.forEach(qu),this.nodes.forEach(Zu),this.nodes.forEach(Ju),this.nodes.forEach(Xu),mo.addProjectionMetrics&&mo.addProjectionMetrics(Ou)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let t=0;t<this.path.length;t++)this.path[t].shouldResetTransform=!0;this.root===this&&(this.nodes=new su)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ao),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){const n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;var n;this.isSVG=(n=t)instanceof SVGElement&&"svg"!==n.tagName,this.instance=t;const{layoutId:i,layout:r,visualElement:o}=this.options;if(o&&!o.current&&o.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||i)&&(this.isLayoutDirty=!0),e){let n;const i=()=>this.root.updateBlockedByResize=!1;e(t,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=lu(i,250),Qc.hasAnimatedSinceResize&&(Qc.hasAnimatedSinceResize=!1,this.nodes.forEach(Ku))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||r)&&this.addEventListener("didUpdate",(({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:i})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const r=this.options.transition||o.getDefaultTransition()||id,{onLayoutAnimationStart:a,onLayoutAnimationComplete:s}=o.getProps(),l=!this.targetLayout||!ju(this.targetLayout,i),c=!t&&n;if(this.options.layoutRoot||this.resumeFrom||c||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,c);const t={...so(r,"layout"),onPlay:a,onComplete:s};(o.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||Ku(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),fo(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Qu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Bu(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let r=0;r<this.path.length;r++){const e=this.path[r];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Gu);this.isUpdating||this.nodes.forEach($u),this.isUpdating=!1,this.nodes.forEach(Hu),this.nodes.forEach(Yu),this.nodes.forEach(Uu),this.clearAllSnapshots();const e=Co.now();go.delta=Yo(0,1e3/60,e-go.timestamp),go.timestamp=e,go.isProcessing=!0,yo.update.process(go),yo.preRender.process(go),yo.render.process(go),go.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$c.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Wu),this.sharedNodes.forEach(_u)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,po.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){po.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||rc(this.snapshot.measuredBox.x)||rc(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!r)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Cu(this.projectionDelta),n=this.getTransformTemplate(),i=n?n(this.latestValues,""):void 0,o=i!==this.prevTransformTemplateValue;e&&this.instance&&(t||pc(this.latestValues)||o)&&(r(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){const t=this.measurePageBox();let n=this.removeElementScroll(t);var i;return e&&(n=this.removeTransform(n)),ad((i=n).x),ad(i.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(ld))){const{scroll:e}=this.root;e&&(Ac(t.x,e.offset.x),Ac(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(bu(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const i=this.path[n],{scroll:r,options:o}=i;i!==this.root&&r&&o.layoutScroll&&(r.wasRoot&&bu(t,e),Ac(t.x,r.offset.x),Ac(t.y,r.offset.y))}return t}applyTransform(e,t=!1){const n={x:{min:0,max:0},y:{min:0,max:0}};bu(n,e);for(let i=0;i<this.path.length;i++){const e=this.path[i];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Pc(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),pc(e.latestValues)&&Pc(n,e.latestValues)}return pc(this.latestValues)&&Pc(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};bu(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!pc(e.latestValues))continue;hc(e.latestValues)&&e.updateSnapshot();const i={x:{min:0,max:0},y:{min:0,max:0}};bu(i,e.measurePageBox()),Pu(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,i)}return pc(this.latestValues)&&Pu(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==go.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:i,layoutId:r}=this.options;if(this.layout&&(i||r)){if(this.resolvedRelativeTargetAt=go.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},cc(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),bu(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,a,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,a=this.relativeTarget,s=this.relativeParent.target,sc(o.x,a.x,s.x),sc(o.y,a.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):bu(this.target,this.layout.layoutBox),xc(this.target,this.targetDelta)):bu(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},cc(this.relativeTargetOrigin,this.target,e.target),bu(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}mo.value&&Ou.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!hc(this.parent.latestValues)&&!fc(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===go.timestamp&&(n=!1),n)return;const{layout:i,layoutId:r}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!r)return;bu(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,a=this.treeScale.y;!function(e,t,n,i=!1){const r=n.length;if(!r)return;let o,a;t.x=t.y=1;for(let s=0;s<r;s++){o=n[s],a=o.projectionDelta;const{visualElement:r}=o.options;r&&r.props.style&&"contents"===r.props.style.display||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Pc(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,xc(e,a)),i&&pc(o.latestValues)&&Pc(e,o.latestValues))}t.x<Ec&&t.x>wc&&(t.x=1),t.y<Ec&&t.y>wc&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(xu(this.prevProjectionDelta.x,this.projectionDelta.x),xu(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),ac(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===o&&this.treeScale.y===a&&Ru(this.projectionDelta.x,this.prevProjectionDelta.x)&&Ru(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),mo.value&&Ou.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e,t=!1){const n=this.snapshot,i=n?n.latestValues:{},r={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(nd));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;ed(o.x,e.x,n),ed(o.y,e.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(cc(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,i){td(e.x,t.x,n.x,i),td(e.y,t.y,n.y,i)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return Tu(e.x,t.x)&&Tu(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),bu(d,this.relativeTarget)),s&&(this.animationValues=r,function(e,t,n,i,r,o){r?(e.opacity=Ca(0,n.opacity??1,fu(i)),e.opacityExit=Ca(t.opacity??1,0,gu(i))):o&&(e.opacity=Ca(t.opacity??1,n.opacity??1,i));for(let a=0;a<du;a++){const r=`border${uu[a]}Radius`;let o=pu(t,r),s=pu(n,r);void 0===o&&void 0===s||(o||(o=0),s||(s=0),0===o||0===s||hu(o)===hu(s)?(e[r]=Math.max(Ca(mu(o),mu(s),i),0),(ca.test(s)||ca.test(o))&&(e[r]+="%")):e[r]=s)}(t.rotate||n.rotate)&&(e.rotate=Ca(t.rotate||0,n.rotate||0,i))}(r,i,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(!1),this.resumingFrom?.currentAnimation?.stop(!1),this.pendingAnimation&&(fo(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=po.update((()=>{Qc.hasAnimatedSinceResize=!0,Xo.layout++,this.motionValue||(this.motionValue=jo(0)),this.currentAnimation=function(e,t,n){const i=Oo(e)?e:jo(e);return i.start(jl("",i,t,n)),i.animation}(this.motionValue,[0,1e3],{...e,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Xo.layout--},onComplete:()=>{Xo.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop(!1)),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:i,latestValues:r}=e;if(t&&n&&i){if(this!==e&&this.layout&&i&&sd(this.options.animationType,this.layout.layoutBox,i.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=rc(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const i=rc(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+i}bu(t,n),Pc(t,r),ac(this.projectionDeltaWithTransform,this.layoutCorrected,t,r)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Vu);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){const i=this.getStack();i&&i.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const i={};n.z&&Lu("z",e,i,this.animationValues);for(let r=0;r<Fu.length;r++)Lu(`rotate${Fu[r]}`,e,i,this.animationValues),Lu(`skew${Fu[r]}`,e,i,this.animationValues);e.render();for(const r in i)e.setStaticValue(r,i[r]),this.animationValues&&(this.animationValues[r]=i[r]);e.scheduleRender()}getProjectionStyles(e){if(!this.instance||this.isSVG)return;if(!this.isVisible)return Iu;const t={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,t.opacity="",t.pointerEvents=cu(e?.pointerEvents)||"",t.transform=n?n(this.latestValues,""):"none",t;const i=this.getLead();if(!this.projectionDelta||!this.layout||!i.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=cu(e?.pointerEvents)||""),this.hasProjected&&!pc(this.latestValues)&&(t.transform=n?n({},""):"none",this.hasProjected=!1),t}const r=i.animationValues||i.latestValues;this.applyTransformsToTarget(),t.transform=function(e,t,n){let i="";const r=e.x.translate/t.x,o=e.y.translate/t.y,a=n?.z||0;if((r||o||a)&&(i=`translate3d(${r}px, ${o}px, ${a}px) `),1===t.x&&1===t.y||(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:r,rotateY:o,skewX:a,skewY:s}=n;e&&(i=`perspective(${e}px) ${i}`),t&&(i+=`rotate(${t}deg) `),r&&(i+=`rotateX(${r}deg) `),o&&(i+=`rotateY(${o}deg) `),a&&(i+=`skewX(${a}deg) `),s&&(i+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(i+=`scale(${s}, ${l})`),i||"none"}(this.projectionDeltaWithTransform,this.treeScale,r),n&&(t.transform=n(r,t.transform));const{x:o,y:a}=this.projectionDelta;t.transformOrigin=`${100*o.origin}% ${100*a.origin}% 0`,i.animationValues?t.opacity=i===this?r.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:r.opacityExit:t.opacity=i===this?void 0!==r.opacity?r.opacity:"":void 0!==r.opacityExit?r.opacityExit:0;for(const s in nu){if(void 0===r[s])continue;const{correct:e,applyTo:n,isCSSVariable:o}=nu[s],a="none"===t.transform?r[s]:e(r[s],i);if(n){const e=n.length;for(let i=0;i<e;i++)t[n[i]]=a}else o?this.options.visualElement.renderState.vars[s]=a:t[s]=a}return this.options.layoutId&&(t.pointerEvents=i===this?cu(e?.pointerEvents)||"":"none"),t}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>e.currentAnimation?.stop(!1))),this.root.nodes.forEach(Gu),this.root.sharedNodes.clear()}}}function Yu(e){e.updateLayout()}function Uu(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=e.layout,{animationType:r}=e.options,o=t.source!==e.layout.source;"size"===r?dc((e=>{const i=o?t.measuredBox[e]:t.layoutBox[e],r=rc(i);i.min=n[e].min,i.max=i.min+r})):sd(r,t.layoutBox,n)&&dc((i=>{const r=o?t.measuredBox[i]:t.layoutBox[i],a=rc(n[i]);r.max=r.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[i].max=e.relativeTarget[i].min+a)}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};ac(a,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?ac(s,e.applyTransform(i,!0),t.measuredBox):ac(s,n,t.layoutBox);const l=!Cu(a);let c=!1;if(!e.resumeFrom){const i=e.getClosestProjectingParent();if(i&&!i.resumeFrom){const{snapshot:r,layout:o}=i;if(r&&o){const a={x:{min:0,max:0},y:{min:0,max:0}};cc(a,t.layoutBox,r.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};cc(s,n,o.layoutBox),ju(a,s)||(c=!0),i.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=i)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function qu(e){mo.value&&Ou.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Xu(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Wu(e){e.clearSnapshot()}function Gu(e){e.clearMeasurements()}function $u(e){e.isLayoutDirty=!1}function Hu(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ku(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Zu(e){e.resolveTargetDelta()}function Ju(e){e.calcProjection()}function Qu(e){e.resetSkewAndRotation()}function _u(e){e.removeLeadSnapshot()}function ed(e,t,n){e.translate=Ca(t.translate,0,n),e.scale=Ca(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function td(e,t,n,i){e.min=Ca(t.min,n.min,i),e.max=Ca(t.max,n.max,i)}function nd(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const id={duration:.45,ease:[.4,0,.1,1]},rd=e=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),od=rd("applewebkit/")&&!rd("chrome/")?Math.round:lo;function ad(e){e.min=od(e.min),e.max=od(e.max)}function sd(e,t,n){return"position"===e||"preserve-aspect"===e&&(i=Du(t),r=Du(n),o=.2,!(Math.abs(i-r)<=o));var i,r,o}function ld(e){return e!==e.root&&e.scroll?.wasRoot}const cd=Nu({attachResizeListener:(e,t)=>_l(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ud={current:void 0},dd=Nu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ud.current){const e=new cd({});e.mount(window),e.setOptions({layoutScroll:!0}),ud.current=e}return ud.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),md={pan:{Feature:class extends Hl{constructor(){super(...arguments),this.removePointerDownListener=lo}onPointerDown(e){this.session=new jc(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Cc(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:Wc(e),onStart:Wc(t),onMove:n,onEnd:(e,t)=>{delete this.session,i&&po.postRender((()=>i(e,t)))}}}mount(){this.removePointerDownListener=nc(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Hl{constructor(e){super(e),this.removeGroupControls=lo,this.removeListeners=lo,this.controls=new qc(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||lo}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:dd,MeasureLayout:ru}};function hd(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"==typeof e){let i=document;t&&(i=t.current);const r=n?.[e]??i.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e)}(e),i=new AbortController;return[n,{passive:!0,...t,signal:i.signal},()=>i.abort()]}function pd(e){return!("touch"===e.pointerType||Ql())}function fd(e,t,n){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover","Start"===n);const r=i["onHover"+n];r&&po.postRender((()=>r(t,tc(t))))}const gd=(e,t)=>!!t&&(e===t||gd(e,t.parentElement)),yd=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const vd=new WeakSet;function bd(e){return t=>{"Enter"===t.key&&e(t)}}function xd(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function wd(e){return ec(e)&&!Ql()}function Ed(e,t,n={}){const[i,r,o]=hd(e,n),a=e=>{const i=e.currentTarget;if(!wd(e))return;vd.add(i);const o=t(i,e),a=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),vd.has(i)&&vd.delete(i),wd(e)&&"function"==typeof o&&o(e,{success:t})},s=e=>{a(e,i===window||i===document||n.useGlobalTarget||gd(i,e.target))},l=e=>{a(e,!1)};window.addEventListener("pointerup",s,r),window.addEventListener("pointercancel",l,r)};return i.forEach((e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",a,r),e instanceof HTMLElement&&(e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const i=bd((()=>{if(vd.has(n))return;xd(n,"down");const e=bd((()=>{xd(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>xd(n,"cancel")),t)}));n.addEventListener("keydown",i,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",i)),t)})(e,r))),t=e,yd.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))})),o}function Ad(e,t,n){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap","Start"===n);const r=i["onTap"+("End"===n?"":n)];r&&po.postRender((()=>r(t,tc(t))))}const Sd=new WeakMap,Pd=new WeakMap,kd=e=>{const t=Sd.get(e.target);t&&t(e)},Cd=e=>{e.forEach(kd)};function Td(e,t,n){const i=function({root:e,...t}){const n=e||document;Pd.has(n)||Pd.set(n,{});const i=Pd.get(n),r=JSON.stringify(t);return i[r]||(i[r]=new IntersectionObserver(Cd,{root:e,...t})),i[r]}(t);return Sd.set(e,n),i.observe(e),()=>{Sd.delete(e),i.unobserve(e)}}const Md={some:0,all:1};const jd={inView:{Feature:class extends Hl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:i="some",once:r}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"==typeof i?i:Md[i]};return Td(this.node.current,o,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,r&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:i}=this.node.getProps(),o=t?n:i;o&&o(e)}))}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}(e,t))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Hl{mount(){const{current:e}=this.node;e&&(this.unmount=Ed(e,((e,t)=>(Ad(this.node,t,"Start"),(e,{success:t})=>Ad(this.node,e,t?"End":"Cancel"))),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends Hl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=No(_l(this.node.current,"focus",(()=>this.onFocus())),_l(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Hl{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t,n={}){const[i,r,o]=hd(e,n),a=e=>{if(!pd(e))return;const{target:n}=e,i=t(n,e);if("function"!=typeof i||!n)return;const o=e=>{pd(e)&&(i(e),n.removeEventListener("pointerleave",o))};n.addEventListener("pointerleave",o,r)};return i.forEach((e=>{e.addEventListener("pointerenter",a,r)})),o}(e,((e,t)=>(fd(this.node,t,"Start"),e=>fd(this.node,e,"End")))))}unmount(){}}}},Dd={layout:{ProjectionNode:dd,MeasureLayout:ru}},Rd=(0,i.createContext)({strict:!1}),Vd=(0,i.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Od=(0,i.createContext)({});function Fd(e){return io(e.animate)||Ll.some((t=>Il(e[t])))}function Id(e){return Boolean(Fd(e)||e.variants)}function zd(e){const{initial:t,animate:n}=function(e,t){if(Fd(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Il(t)?t:void 0,animate:Il(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,i.useContext)(Od));return(0,i.useMemo)((()=>({initial:t,animate:n})),[Ld(t),Ld(n)])}function Ld(e){return Array.isArray(e)?e.join(" "):e}const Bd="undefined"!=typeof window,Nd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yd={};for(const kh in Nd)Yd[kh]={isEnabled:e=>Nd[kh].some((t=>!!e[t]))};const Ud=Symbol.for("motionComponentSymbol");function qd(e,t,n){return(0,i.useCallback)((i=>{i&&e.onMount&&e.onMount(i),t&&(i?t.mount(i):t.unmount()),n&&("function"==typeof n?n(i):Tc(n)&&(n.current=i))}),[t])}const Xd=Bd?i.useLayoutEffect:i.useEffect;function Wd(e,t,n,r,o){const{visualElement:a}=(0,i.useContext)(Od),s=(0,i.useContext)(Rd),l=(0,i.useContext)(Kc),c=(0,i.useContext)(Vd).reducedMotion,u=(0,i.useRef)(null);r=r||s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:a,props:n,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,m=(0,i.useContext)(Jc);!d||d.projection||!o||"html"!==d.type&&"svg"!==d.type||function(e,t,n,i){const{layoutId:r,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Gd(e.parent)),e.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:Boolean(a)||s&&Tc(s),visualElement:e,animationType:"string"==typeof o?o:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,n,o,m);const h=(0,i.useRef)(!1);(0,i.useInsertionEffect)((()=>{d&&h.current&&d.update(n,l)}));const p=n[zo],f=(0,i.useRef)(Boolean(p)&&!window.MotionHandoffIsComplete?.(p)&&window.MotionHasOptimisedAnimation?.(p));return Xd((()=>{d&&(h.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),$c.render(d.render),f.current&&d.animationState&&d.animationState.animateChanges())})),(0,i.useEffect)((()=>{d&&(!f.current&&d.animationState&&d.animationState.animateChanges(),f.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(p)})),f.current=!1))})),d}function Gd(e){if(e)return!1!==e.options.allowProjection?e.projection:Gd(e.parent)}function $d({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){function a(e,a){let s;const l={...(0,i.useContext)(Vd),...e,layoutId:Hd(e)},{isStatic:c}=l,u=zd(e),d=r(e,c);if(!c&&Bd){!function(){(0,i.useContext)(Rd).strict;0}();const e=function(e){const{drag:t,layout:n}=Yd;if(!t&&!n)return{};const i={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(l);s=e.MeasureLayout,u.visualElement=Wd(o,d,l,t,e.ProjectionNode)}return(0,Gc.jsxs)(Od.Provider,{value:u,children:[s&&u.visualElement?(0,Gc.jsx)(s,{visualElement:u.visualElement,...l}):null,n(o,e,qd(d,u.visualElement,a),d,c,u.visualElement)]})}e&&function(e){for(const t in e)Yd[t]={...Yd[t],...e[t]}}(e),a.displayName=`motion.${"string"==typeof o?o:`create(${o.displayName??o.name??""})`}`;const s=(0,i.forwardRef)(a);return s[Ud]=o,s}function Hd({layoutId:e}){const t=(0,i.useContext)(Zc).id;return t&&void 0!==e?t+"-"+e:e}function Kd(e,{layout:t,layoutId:n}){return bo.has(e)||e.startsWith("origin")||(t||void 0!==n)&&(!!nu[e]||"opacity"===e)}const Zd=(e,t)=>t&&"number"==typeof e?t.transform(e):e,Jd={...Zo,transform:Math.round},Qd={borderWidth:ua,borderTopWidth:ua,borderRightWidth:ua,borderBottomWidth:ua,borderLeftWidth:ua,borderRadius:ua,radius:ua,borderTopLeftRadius:ua,borderTopRightRadius:ua,borderBottomRightRadius:ua,borderBottomLeftRadius:ua,width:ua,maxWidth:ua,height:ua,maxHeight:ua,top:ua,right:ua,bottom:ua,left:ua,padding:ua,paddingTop:ua,paddingRight:ua,paddingBottom:ua,paddingLeft:ua,margin:ua,marginTop:ua,marginRight:ua,marginBottom:ua,marginLeft:ua,backgroundPositionX:ua,backgroundPositionY:ua,...{rotate:la,rotateX:la,rotateY:la,rotateZ:la,scale:Qo,scaleX:Qo,scaleY:Qo,scaleZ:Qo,skew:la,skewX:la,skewY:la,distance:ua,translateX:ua,translateY:ua,translateZ:ua,x:ua,y:ua,z:ua,perspective:ua,transformPerspective:ua,opacity:Jo,originX:ha,originY:ha,originZ:ua},zIndex:Jd,fillOpacity:Jo,strokeOpacity:Jo,numOctaves:Jd},_d={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},em=vo.length;function tm(e,t,n){const{style:i,vars:r,transformOrigin:o}=e;let a=!1,s=!1;for(const l in t){const e=t[l];if(bo.has(l))a=!0;else if(Go(l))r[l]=e;else{const t=Zd(e,Qd[l]);l.startsWith("origin")?(s=!0,o[l]=t):i[l]=t}}if(t.transform||(a||n?i.transform=function(e,t,n){let i="",r=!0;for(let o=0;o<em;o++){const a=vo[o],s=e[a];if(void 0===s)continue;let l=!0;if(l="number"==typeof s?s===(a.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=Zd(s,Qd[a]);l||(r=!1,i+=`${_d[a]||a}(${e}) `),n&&(t[a]=e)}}return i=i.trim(),n?i=n(t,r?"":i):r&&(i="none"),i}(t,e.transform,n):i.transform&&(i.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=o;i.transformOrigin=`${e} ${t} ${n}`}}const nm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function im(e,t,n){for(const i in t)Oo(t[i])||Kd(i,n)||(e[i]=t[i])}function rm(e,t){const n={};return im(n,e.style||{},e),Object.assign(n,function({transformTemplate:e},t){return(0,i.useMemo)((()=>{const n={style:{},transform:{},transformOrigin:{},vars:{}};return tm(n,t,e),Object.assign({},n.vars,n.style)}),[t])}(e,t)),n}function om(e,t){const n={},i=rm(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const am=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function sm(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||am.has(e)}let lm=e=>!sm(e);try{(cm=require("@emotion/is-prop-valid").default)&&(lm=e=>e.startsWith("on")?!sm(e):cm(e))}catch{}var cm;const um=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dm(e){return"string"==typeof e&&!e.includes("-")&&!!(um.indexOf(e)>-1||/[A-Z]/u.test(e))}const mm={offset:"stroke-dashoffset",array:"stroke-dasharray"},hm={offset:"strokeDashoffset",array:"strokeDasharray"};function pm(e,{attrX:t,attrY:n,attrScale:i,pathLength:r,pathSpacing:o=1,pathOffset:a=0,...s},l,c,u){if(tm(e,s,c),l)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:d,style:m}=e;d.transform&&(m.transform=d.transform,delete d.transform),(m.transform||d.transformOrigin)&&(m.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),m.transform&&(m.transformBox=u?.transformBox??"fill-box",delete d.transformBox),void 0!==t&&(d.x=t),void 0!==n&&(d.y=n),void 0!==i&&(d.scale=i),void 0!==r&&function(e,t,n=1,i=0,r=!0){e.pathLength=1;const o=r?mm:hm;e[o.offset]=ua.transform(-i);const a=ua.transform(t),s=ua.transform(n);e[o.array]=`${a} ${s}`}(d,r,o,a,!1)}const fm=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),gm=e=>"string"==typeof e&&"svg"===e.toLowerCase();function ym(e,t,n,r){const o=(0,i.useMemo)((()=>{const n={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return pm(n,t,gm(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}}),[t]);if(e.style){const t={};im(t,e.style,e),o.style={...t,...o.style}}return o}function vm(e=!1){return(t,n,r,{latestValues:o},a)=>{const s=(dm(t)?ym:om)(n,o,a,t),l=function(e,t,n){const i={};for(const r in e)"values"===r&&"object"==typeof e.values||(lm(r)||!0===n&&sm(r)||!t&&!sm(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}(n,"string"==typeof t,e),c=t!==i.Fragment?{...l,...s,ref:r}:{},{children:u}=n,d=(0,i.useMemo)((()=>Oo(u)?u.get():u),[u]);return(0,i.createElement)(t,{...c,children:d})}}const bm=e=>(t,n)=>{const r=(0,i.useContext)(Od),o=(0,i.useContext)(Kc),a=()=>function({scrapeMotionValuesFromProps:e,createRenderState:t},n,i,r){return{latestValues:xm(n,i,r,e),renderState:t()}}(e,t,r,o);return n?a():function(e){const t=(0,i.useRef)(null);return null===t.current&&(t.current=e()),t.current}(a)};function xm(e,t,n,i){const r={},o=i(e,{});for(const m in o)r[m]=cu(o[m]);let{initial:a,animate:s}=e;const l=Fd(e),c=Id(e);t&&c&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===a;const d=u?s:a;if(d&&"boolean"!=typeof d&&!io(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const i=oo(e,t[n]);if(i){const{transitionEnd:e,transition:t,...n}=i;for(const i in n){let e=n[i];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(r[i]=e)}for(const i in e)r[i]=e[i]}}}return r}function wm(e,t,n){const{style:i}=e,r={};for(const o in i)(Oo(i[o])||t.style&&Oo(t.style[o])||Kd(o,e)||void 0!==n?.getValue(o)?.liveStyle)&&(r[o]=i[o]);return r}const Em={useVisualState:bm({scrapeMotionValuesFromProps:wm,createRenderState:nm})};function Am(e,t,n){const i=wm(e,t,n);for(const r in e)if(Oo(e[r])||Oo(t[r])){i[-1!==vo.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return i}const Sm={useVisualState:bm({scrapeMotionValuesFromProps:Am,createRenderState:fm})};function Pm(e,t){return function(n,{forwardMotionProps:i}={forwardMotionProps:!1}){return $d({...dm(n)?Sm:Em,preloadedFeatures:e,useRender:vm(i),createVisualElement:t,Component:n})}}const km=e=>t=>t.test(e),Cm=[Zo,ua,ca,la,ma,da,{test:e=>"auto"===e,parse:e=>e}],Tm=e=>Cm.find(km(e)),Mm=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),jm=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Dm(e,t,n=1){const[i,r]=function(e){const t=jm.exec(e);if(!t)return[,];const[,n,i,r]=t;return[`--${n??i}`,r]}(e);if(!i)return;const o=window.getComputedStyle(t).getPropertyValue(i);if(o){const e=o.trim();return Mm(e)?parseFloat(e):e}return Ho(r)?Dm(r,t,n+1):r}const Rm=e=>/^0[^.\s]+$/u.test(e);const Vm=new Set(["brightness","contrast","saturate","opacity"]);function Om(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[i]=n.match(ea)||[];if(!i)return e;const r=n.replace(i,"");let o=Vm.has(t)?1:0;return i!==n&&(o*=100),t+"("+o+r+")"}const Fm=/\b([a-z-]*)\(.*?\)/gu,Im={...Sa,getAnimatableNone:e=>{const t=e.match(Fm);return t?t.map(Om).join(" "):e}},zm={...Qd,color:fa,backgroundColor:fa,outlineColor:fa,fill:fa,stroke:fa,borderColor:fa,borderTopColor:fa,borderRightColor:fa,borderBottomColor:fa,borderLeftColor:fa,filter:Im,WebkitFilter:Im},Lm=e=>zm[e];function Bm(e,t){let n=Lm(e);return n!==Im&&(n=Sa),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Nm=new Set(["auto","none","0"]);class Ym extends al{constructor(e,t,n,i,r){super(e,t,n,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"==typeof n&&(n=n.trim(),Ho(n))){const i=Dm(n,t.current);void 0!==i&&(e[s]=i),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!xo.has(n)||2!==e.length)return;const[i,r]=e,o=Tm(i),a=Tm(r);if(o!==a)if(Zs(o)&&Zs(a))for(let s=0;s<e.length;s++){const t=e[s];"string"==typeof t&&(e[s]=parseFloat(t))}else _s[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(null===e[r]||("number"==typeof(i=e[r])?0===i:null===i||"none"===i||"0"===i||Rm(i)))&&n.push(r);var i;n.length&&function(e,t,n){let i,r=0;for(;r<e.length&&!i;){const t=e[r];"string"==typeof t&&!Nm.has(t)&&xa(t).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Bm(n,i)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_s[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const i=t[t.length-1];void 0!==i&&e.getValue(n,i).jump(i,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const i=e.getValue(t);i&&i.jump(this.measuredOrigin,!1);const r=n.length-1,o=n[r];n[r]=_s[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach((([t,n])=>{e.getValue(t).set(n)})),this.resolveNoneKeyframes()}}const Um=[...Cm,fa,Sa],qm={current:null},Xm={current:!1};const Wm=new WeakMap;const Gm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class $m{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:i,blockInitialAnimation:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=al,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Co.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,po.render(this.render,!1,!0))};const{latestValues:s,renderState:l}=o;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=Boolean(r),this.isControllingVariants=Fd(t),this.isVariantNode=Id(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(e&&e.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(const d in u){const e=u[d];void 0!==s[d]&&Oo(e)&&e.set(s[d],!1)}}mount(e){this.current=e,Wm.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Xm.current||function(){if(Xm.current=!0,Bd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>qm.current=e.matches;e.addListener(t),t()}else qm.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||qm.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),fo(this.notifyUpdate),fo(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=bo.has(e);n&&this.onBindTransform&&this.onBindTransform();const i=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&po.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),r=t.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{i(),r(),o&&o(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in Yd){const t=Yd[e];if(!t)continue;const{isEnabled:n,Feature:i}=t;if(!this.features[e]&&i&&n(this.props)&&(this.features[e]=new i(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Gm.length;n++){const t=Gm[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const i=e["on"+t];i&&(this.propEventSubscriptions[t]=this.on(t,i))}this.prevMotionValues=function(e,t,n){for(const i in t){const r=t[i],o=n[i];if(Oo(r))e.addValue(i,r);else if(Oo(o))e.addValue(i,jo(r,{owner:e}));else if(o!==r)if(e.hasValue(i)){const t=e.getValue(i);!0===t.liveStyle?t.jump(r):t.hasAnimated||t.set(r)}else{const t=e.getStaticValue(i);e.addValue(i,jo(void 0!==t?t:r,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=jo(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return null!=n&&("string"==typeof n&&(Mm(n)||Rm(n))?n=parseFloat(n):!(e=>Um.find(km(e)))(n)&&Sa.test(t)&&(n=Bm(e,t)),this.setBaseTarget(e,Oo(n)?n.get():n)),Oo(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"==typeof t||"object"==typeof t){const i=oo(this.props,t,this.presenceContext?.custom);i&&(n=i[e])}if(t&&void 0!==n)return n;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||Oo(i)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new Ao),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class Hm extends $m{constructor(){super(...arguments),this.KeyframeResolver=Ym}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Oo(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}function Km(e,{style:t,vars:n},i,r){Object.assign(e.style,t,r&&r.getProjectionStyles(i));for(const o in n)e.style.setProperty(o,n[o])}class Zm extends Hm{constructor(){super(...arguments),this.type="html",this.renderInstance=Km}readValueFromInstance(e,t){if(bo.has(t))return this.projection?.isProjecting?$s(t):((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Hs(n,t)})(e,t);{const i=(n=e,window.getComputedStyle(n)),r=(Go(t)?i.getPropertyValue(t):i[t])||0;return"string"==typeof r?r.trim():r}var n}measureInstanceViewportBox(e,{transformPagePoint:t}){return kc(e,t)}build(e,t,n){tm(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return wm(e,t,n)}}const Jm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);class Qm extends Hm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=uc}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(bo.has(t)){const e=Lm(t);return e&&e.default||0}return t=Jm.has(t)?t:Io(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Am(e,t,n)}build(e,t,n){pm(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,i){!function(e,t,n,i){Km(e,t,void 0,i);for(const r in t.attrs)e.setAttribute(Jm.has(r)?r:Io(r),t.attrs[r])}(e,t,0,i)}mount(e){this.isSVGTag=gm(e.tagName),super.mount(e)}}const _m=no(Pm({...Zl,...jd,...md,...Dd},((e,t)=>dm(e)?new Qm(t):new Zm(t,{allowProjection:e!==i.Fragment})))),eh=Wt.div`
    height: 60rem;
    width: 100%;
    max-width: 1000px;
    aspect-ratio: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`,th=Wt(_m.div)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #0057b7, #003580);
  position: absolute;
  box-shadow: 0 8px 32px rgba(0, 87, 183, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    font-size: 1rem;
  }
`,nh=Wt(_m.div)`
  width: 14rem;
  height: 8rem;
  background-color: rgba(255, 255, 255, 0.9);
  background-image: ${e=>`url(${e.bgImage})`};
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: center;
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  margin: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  z-index: 1;
  overflow: hidden;
  border-bottom: 1px solid #ffffff;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.13);
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 70px;
    font-size: 0.6rem;
  }

  &:hover {
    filter: brightness(90%);
  }
`,ih=[{x:-0,y:-300},{x:0,y:300},{x:-300,y:200},{x:300,y:200},{x:-390,y:0},{x:390,y:0},{x:-300,y:-200},{x:300,y:-200}],rh=[{x:-70,y:-110},{x:0,y:220},{x:70,y:-110},{x:-0,y:-220},{x:-70,y:110},{x:70,y:110},{x:-130,y:-0},{x:130,y:-0}],oh=e=>{let{data:t,visivel:n,larguraAtual:r}=e;const o=r<=768?rh:ih,a={hidden:{opacity:0,scale:.5,x:0,y:0},visible:e=>({opacity:1,scale:1,x:o[e].x,y:o[e].y,transition:{delay:.1*e,duration:.5,type:"spring",stiffness:100}})};return i.createElement(eh,null,i.createElement(th,{key:n?"visible":"hidden",initial:{scale:.5,opacity:0},animate:n?{scale:1,opacity:1}:{scale:.5,opacity:0},transition:{duration:.5}},"Conteúdos"),null==t?void 0:t.map(((e,t)=>i.createElement(nh,{key:`${t}-${n}`,custom:t,initial:"hidden",animate:n?"visible":"hidden",variants:a,bgImage:e.imagem,whileHover:{scale:1.1,transition:{duration:.5},zIndex:1e3+e.id}},i.createElement("div",{style:{background:"rgba(0, 110, 156, 0.69)",padding:"0.5rem 0.8rem",borderRadius:"0.5rem"}},e.titulo)))))},ah=[{id:1,titulo:"Governança Digital",imagem:Bi},{id:2,titulo:"Soluções Integradas",imagem:zi},{id:3,titulo:"Segurança de Dados",imagem:Li},{id:4,titulo:"Inovação Tecnológica",imagem:Ni},{id:5,titulo:"Atendimento ao Cidadão",imagem:Yi},{id:6,titulo:"Transformação Digital",imagem:Bi},{id:7,titulo:"Parcerias Estratégicas",imagem:zi},{id:8,titulo:"Sustentabilidade",imagem:Li}];var sh=e=>{let{larguraAtual:t}=e;const n=(0,i.useRef)(null),{0:r,1:o}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{o(e.isIntersecting)}))}),{threshold:.1});return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}}),[]),i.createElement("div",{ref:n},i.createElement(oh,{data:ah,visivel:r,larguraAtual:t}))},lh=n(9879);const ch=Wt.div`
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`,uh=Wt.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 35rem;
`,dh=Wt.div`
    position: absolute;
    top: 0;
    height: 60%;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    background: url(${e=>e.imagem}) no-repeat center center;
    background-size: cover;
    transition: all 0.5s ease-in-out;
`,mh=Wt.div`
    width: 5rem;
    position: relative;
    flex: 0 0 calc(33.33% - 2rem);
    margin: 0 1rem;

    @media (max-width: 768px) {
        width: 0.5rem;
        flex: 0 0 calc(100% - 2rem);
    }

    &:hover ${dh} {
        height: 100%;
        background-blend-mode: multiply;
        opacity: 0.3;
        z-index: -1;
        border-radius: 1rem;
    }

    &:not(:hover) ${dh} {
        height: 60%;
        background-blend-mode: normal;
        opacity: 1;
        z-index: 0;
    }
`,hh=Wt.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
`,ph=Wt.label`
    width: calc(100% - 2rem);
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.05rem;
    margin: 0.2rem 1rem;
`,fh=Wt.label`
    width: calc(100% - 2rem);
    margin: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.2rem;
    letter-spacing: 0.05rem;
    font-family: "Montserrat Alternates", sans-serif;
`,gh=Wt.button`
    width: calc(100% - 2rem);
    margin: 1rem;
    padding: 0.5rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 0.8rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    background: rgb(0, 109, 156);

    &:hover {
        background: rgb(0, 77, 110);
    }
`,yh=(Wt.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
    
    @media (max-width: 768px) {
        width: 10%;
        z-index: 1000;
    }
`,Wt.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.63);
    color: #ffffff;
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
    }
`),vh=Wt.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 8px;
`,bh=Wt.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
        background-color: #333;
    }
`;function xh(e){let{larguraAtual:t,registros:n}=e;const r=n.length,o=(0,i.useRef)(null),{0:a,1:s}=(0,i.useState)(0),{0:l,1:c}=(0,i.useState)(3),{0:u,1:d}=(0,i.useState)(Math.ceil(r/l));return(0,i.useEffect)((()=>{t<=768&&(c(1),d(Math.ceil(r/l)))}),[t]),(0,i.useEffect)((()=>{o.current&&(o.current.style.transition="transform 0.5s ease-in-out",o.current.style.transform=`translateX(-${100*a}%)`)}),[a]),i.createElement(ch,null,i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",height:"35rem",width:"100%",zIndex:1}},i.createElement(yh,{onClick:()=>{s((e=>Math.max(0,e-1)))},style:{marginRight:"-2.5rem"}},i.createElement(lh.oe,null))),i.createElement(uh,{ref:o},n.map(((e,t)=>i.createElement(mh,{key:t},i.createElement(dh,{imagem:e.imagem}),i.createElement(hh,null,i.createElement(ph,null,e.titulo),i.createElement(fh,null,e.descricao),i.createElement(gh,null,"Assistir")))))),i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",height:"35rem",width:"100%",zIndex:1}},i.createElement(yh,{onClick:()=>{s((e=>Math.min(u-1,e+1)))},style:{marginLeft:"-2.5rem"}},i.createElement(lh.mny,null)))),i.createElement(vh,null,Array.from({length:u}).map(((e,t)=>i.createElement(bh,{key:t,className:a===t?"active":"",onClick:()=>(e=>{s(e)})(t)})))))}const wh=Wt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;
    background: '#dfdfdf';
`,Eh=Wt.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #003366;
    color: #333;
`;function Ah(e){let{larguraAtual:t}=e;return i.createElement(wh,null,i.createElement(Eh,null,"Depoimentos"),i.createElement(xh,{larguraAtual:t,registros:[{titulo:"João Silva",descricao:"A M2A transformou completamente nossos processos internos. A implementação do sistema foi suave e a equipe de suporte é excepcional. Recomendo fortemente!",imagem:zi},{titulo:"Maria Santos",descricao:"Estamos muito satisfeitos com as soluções da M2A. O sistema é intuitivo e nos ajudou a reduzir custos operacionais em 30%. Excelente parceria!",imagem:Li},{titulo:"Pedro Oliveira",descricao:"A automação que a M2A implementou revolucionou nossa gestão de compras. O atendimento é sempre ágil e profissional. Superou todas as expectativas!",imagem:Bi},{titulo:"Ana Rodrigues",descricao:"Depois que implementamos as soluções da M2A, nossa produtividade aumentou significativamente. A equipe técnica é muito competente e dedicada.",imagem:zi},{titulo:"Carlos Mendes",descricao:"Excelente experiência com a M2A! O sistema é robusto e a equipe sempre está disposta a nos ajudar. Melhor decisão que tomamos para nossa empresa.",imagem:Li},{titulo:"Fernanda Lima",descricao:"A parceria com a M2A tem sido fundamental para nosso crescimento. O suporte é impecável e as soluções são perfeitamente adaptadas às nossas necessidades.",imagem:Bi},{titulo:"Ricardo Almeida",descricao:"Impressionante como a M2A entende as necessidades do cliente. O sistema é completo e a equipe sempre traz soluções inovadoras para nossos desafios.",imagem:zi},{titulo:"Beatriz Costa",descricao:"A M2A nos ajudou a otimizar todos os processos. O retorno sobre o investimento foi rápido e o suporte técnico é sempre muito eficiente.",imagem:Li},{titulo:"Lucas Ferreira",descricao:"Desde que começamos a trabalhar com a M2A, nossa eficiência operacional melhorou drasticamente. A equipe é muito profissional e comprometida.",imagem:Bi}]}))}const Sh=()=>i.createElement("div",{title:"Home"});var Ph=()=>{const{0:e,1:t}=(0,i.useState)(0),{0:n,1:r}=(0,i.useState)(0),o=()=>{const e=window.scrollY;r(e)},a=()=>{t(window.innerWidth)};(0,i.useEffect)((()=>(window.addEventListener("scroll",o),window.addEventListener("resize",a),a(),()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",a)})),[]);const s=0===n;return i.createElement(Ht,null,i.createElement(Mi,{ehCabecalhoFlutuante:s,larguraAtual:e}),i.createElement(kn,null),i.createElement(Hi,null),i.createElement(pr,null),i.createElement(Ar,null),i.createElement(zr,null),i.createElement(Ah,{larguraAtual:e}),i.createElement(to,null),i.createElement(sh,{larguraAtual:e}),i.createElement(un,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-011c702275735ba7db1c.js.map