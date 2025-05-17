(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[245],{2225:function(t,e,n){"use strict";n.d(e,{k5:function(){return h}});var i=n(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),s=["attr","size","title"];function a(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},l.apply(this,arguments)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){return t&&t.map(((t,e)=>i.createElement(t.tag,u({key:e},t.attr),d(t.child))))}function h(t){return e=>i.createElement(p,l({attr:u({},t.attr)},e),d(t.child))}function p(t){var e=e=>{var n,{attr:r,size:o,title:c}=t,m=a(t,s),d=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,m,{className:n,style:u(u({color:t.color||e.color},e.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),t.children)};return void 0!==o?i.createElement(o.Consumer,null,(t=>e(t))):e(r)}},2833:function(t){t.exports=function(t,e,n,i){var r=n?n.call(i,t,e):void 0;if(void 0!==r)return!!r;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var o=Object.keys(t),s=Object.keys(e);if(o.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(e),l=0;l<o.length;l++){var c=o[l];if(!a(c))return!1;var u=t[c],m=e[c];if(!1===(r=n?n.call(i,u,m,c):void 0)||void 0===r&&u!==m)return!1}return!0}},9183:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return Eh},default:function(){return Ah}});var i=n(6540);var r=function(){return r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)};Object.create;function o(t,e,n){if(n||2===arguments.length)for(var i,r=0,o=e.length;r<o;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var s=n(2833),a=n.n(s),l="-ms-",c="-moz-",u="-webkit-",m="comm",d="rule",h="decl",p="@keyframes",f=Math.abs,g=String.fromCharCode,y=Object.assign;function v(t){return t.trim()}function b(t,e){return(t=e.exec(t))?t[0]:t}function x(t,e,n){return t.replace(e,n)}function w(t,e,n){return t.indexOf(e,n)}function E(t,e){return 0|t.charCodeAt(e)}function A(t,e,n){return t.slice(e,n)}function S(t){return t.length}function P(t){return t.length}function k(t,e){return e.push(t),t}function T(t,e){return t.filter((function(t){return!b(t,e)}))}var C=1,M=1,j=0,D=0,R=0,V="";function O(t,e,n,i,r,o,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:C,column:M,length:s,return:"",siblings:a}}function F(t,e){return y(O("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function I(t){for(;t.root;)t=F(t.root,{children:[t]});k(t,t.siblings)}function L(){return R=D>0?E(V,--D):0,M--,10===R&&(M=1,C--),R}function z(){return R=D<j?E(V,D++):0,M++,10===R&&(M=1,C++),R}function B(){return E(V,D)}function N(){return D}function Y(t,e){return A(V,t,e)}function U(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q(t){return C=M=1,j=S(V=t),D=0,[]}function X(t){return V="",t}function W(t){return v(Y(D-1,H(91===t?t+2:40===t?t+1:t)))}function G(t){for(;(R=B())&&R<33;)z();return U(t)>2||U(R)>3?"":" "}function $(t,e){for(;--e&&z()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return Y(t,N()+(e<6&&32==B()&&32==z()))}function H(t){for(;z();)switch(R){case t:return D;case 34:case 39:34!==t&&39!==t&&H(R);break;case 40:41===t&&H(t);break;case 92:z()}return D}function K(t,e){for(;z()&&t+R!==57&&(t+R!==84||47!==B()););return"/*"+Y(e,D-1)+"*"+g(47===t?t:z())}function Z(t){for(;!U(B());)z();return Y(t,D)}function J(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function Q(t,e,n,i){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case h:return t.return=t.return||t.value;case m:return"";case p:return t.return=t.value+"{"+J(t.children,i)+"}";case d:if(!S(t.value=t.props.join(",")))return""}return S(n=J(t.children,i))?t.return=t.value+"{"+n+"}":""}function _(t,e,n){switch(function(t,e){return 45^E(t,0)?(((e<<2^E(t,0))<<2^E(t,1))<<2^E(t,2))<<2^E(t,3):0}(t,e)){case 5103:return u+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+t+t;case 4789:return c+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return u+t+c+t+l+t+t;case 5936:switch(E(t,e+11)){case 114:return u+t+l+x(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return u+t+l+x(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return u+t+l+x(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return u+t+l+t+t;case 6165:return u+t+l+"flex-"+t+t;case 5187:return u+t+x(t,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+t;case 5443:return u+t+l+"flex-item-"+x(t,/flex-|-self/g,"")+(b(t,/flex-|baseline/)?"":l+"grid-row-"+x(t,/flex-|-self/g,""))+t;case 4675:return u+t+l+"flex-line-pack"+x(t,/align-content|flex-|-self/g,"")+t;case 5548:return u+t+l+x(t,"shrink","negative")+t;case 5292:return u+t+l+x(t,"basis","preferred-size")+t;case 6060:return u+"box-"+x(t,"-grow","")+u+t+l+x(t,"grow","positive")+t;case 4554:return u+x(t,/([^-])(transform)/g,"$1"+u+"$2")+t;case 6187:return x(x(x(t,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),t,"")+t;case 5495:case 3959:return x(t,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return x(x(t,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+t+t;case 4200:if(!b(t,/flex-|baseline/))return l+"grid-column-align"+A(t,e)+t;break;case 2592:case 3360:return l+x(t,"template-","")+t;case 4384:case 3616:return n&&n.some((function(t,n){return e=n,b(t.props,/grid-\w+-end/)}))?~w(t+(n=n[e].value),"span",0)?t:l+x(t,"-start","")+t+l+"grid-row-span:"+(~w(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(t,/\d+/))+";":l+x(t,"-start","")+t;case 4896:case 4128:return n&&n.some((function(t){return b(t.props,/grid-\w+-start/)}))?t:l+x(x(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return x(t,/(.+)-inline(.+)/,u+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(t)-1-e>6)switch(E(t,e+1)){case 109:if(45!==E(t,e+4))break;case 102:return x(t,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+c+(108==E(t,e+3)?"$3":"$2-$3"))+t;case 115:return~w(t,"stretch",0)?_(x(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return x(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(e,n,i,r,o,s,a){return l+n+":"+i+a+(r?l+n+"-span:"+(o?s:+s-+i)+a:"")+t}));case 4949:if(121===E(t,e+6))return x(t,":",":"+u)+t;break;case 6444:switch(E(t,45===E(t,14)?18:11)){case 120:return x(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===E(t,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+t;case 100:return x(t,":",":"+l)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(t,"scroll-","scroll-snap-")+t}return t}function tt(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case h:return void(t.return=_(t.value,t.length,n));case p:return J([F(t,{value:x(t.value,"@","@"+u)})],i);case d:if(t.length)return function(t,e){return t.map(e).join("")}(n=t.props,(function(e){switch(b(e,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":I(F(t,{props:[x(e,/:(read-\w+)/,":-moz-$1")]})),I(F(t,{props:[e]})),y(t,{props:T(n,i)});break;case"::placeholder":I(F(t,{props:[x(e,/:(plac\w+)/,":"+u+"input-$1")]})),I(F(t,{props:[x(e,/:(plac\w+)/,":-moz-$1")]})),I(F(t,{props:[x(e,/:(plac\w+)/,l+"input-$1")]})),I(F(t,{props:[e]})),y(t,{props:T(n,i)})}return""}))}}function et(t){return X(nt("",null,null,null,[""],t=q(t),0,[0],t))}function nt(t,e,n,i,r,o,s,a,l){for(var c=0,u=0,m=s,d=0,h=0,p=0,y=1,v=1,b=1,A=0,P="",T=r,C=o,M=i,j=P;v;)switch(p=A,A=z()){case 40:if(108!=p&&58==E(j,m-1)){-1!=w(j+=x(W(A),"&","&\f"),"&\f",f(c?a[c-1]:0))&&(b=-1);break}case 34:case 39:case 91:j+=W(A);break;case 9:case 10:case 13:case 32:j+=G(p);break;case 92:j+=$(N()-1,7);continue;case 47:switch(B()){case 42:case 47:k(rt(K(z(),N()),e,n,l),l);break;default:j+="/"}break;case 123*y:a[c++]=S(j)*b;case 125*y:case 59:case 0:switch(A){case 0:case 125:v=0;case 59+u:-1==b&&(j=x(j,/\f/g,"")),h>0&&S(j)-m&&k(h>32?ot(j+";",i,n,m-1,l):ot(x(j," ","")+";",i,n,m-2,l),l);break;case 59:j+=";";default:if(k(M=it(j,e,n,c,u,r,a,P,T=[],C=[],m,o),o),123===A)if(0===u)nt(j,e,M,M,T,o,m,a,C);else switch(99===d&&110===E(j,3)?100:d){case 100:case 108:case 109:case 115:nt(t,M,M,i&&k(it(t,M,M,0,0,r,a,P,r,T=[],m,C),C),r,C,m,a,i?T:C);break;default:nt(j,M,M,M,[""],C,0,a,C)}}c=u=h=0,y=b=1,P=j="",m=s;break;case 58:m=1+S(j),h=p;default:if(y<1)if(123==A)--y;else if(125==A&&0==y++&&125==L())continue;switch(j+=g(A),A*y){case 38:b=u>0?1:(j+="\f",-1);break;case 44:a[c++]=(S(j)-1)*b,b=1;break;case 64:45===B()&&(j+=W(z())),d=B(),u=m=S(P=j+=Z(N())),A++;break;case 45:45===p&&2==S(j)&&(y=0)}}return o}function it(t,e,n,i,r,o,s,a,l,c,u,m){for(var h=r-1,p=0===r?o:[""],g=P(p),y=0,b=0,w=0;y<i;++y)for(var E=0,S=A(t,h+1,h=f(b=s[y])),k=t;E<g;++E)(k=v(b>0?p[E]+" "+S:x(S,/&\f/g,p[E])))&&(l[w++]=k);return O(t,e,n,0===r?d:a,l,c,u,m)}function rt(t,e,n,i){return O(t,e,n,m,g(R),A(t,2,-2),0,i)}function ot(t,e,n,i,r){return O(t,e,n,h,A(t,0,i),A(t,i+1,-1),i,r)}var st={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},at="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",lt="active",ct="data-styled-version",ut="6.1.17",mt="/*!sc*/\n",dt="undefined"!=typeof window&&"HTMLElement"in window,ht=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),pt=(new Set,Object.freeze([])),ft=Object.freeze({});function gt(t,e,n){return void 0===n&&(n=ft),t.theme!==n.theme&&t.theme||e||n.theme}var yt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bt=/(^-|-$)/g;function xt(t){return t.replace(vt,"-").replace(bt,"")}var wt=/(a)(d)/gi,Et=function(t){return String.fromCharCode(t+(t>25?39:97))};function At(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Et(e%52)+n;return(Et(e%52)+n).replace(wt,"$1-$2")}var St,Pt=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},kt=function(t){return Pt(5381,t)};function Tt(t){return At(kt(t)>>>0)}function Ct(t){return t.displayName||t.name||"Component"}function Mt(t){return"string"==typeof t&&!0}var jt="function"==typeof Symbol&&Symbol.for,Dt=jt?Symbol.for("react.memo"):60115,Rt=jt?Symbol.for("react.forward_ref"):60112,Vt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ot={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ft={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},It=((St={})[Rt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},St[Dt]=Ft,St);function Lt(t){return("type"in(e=t)&&e.type.$$typeof)===Dt?Ft:"$$typeof"in t?It[t.$$typeof]:Vt;var e}var zt=Object.defineProperty,Bt=Object.getOwnPropertyNames,Nt=Object.getOwnPropertySymbols,Yt=Object.getOwnPropertyDescriptor,Ut=Object.getPrototypeOf,qt=Object.prototype;function Xt(t,e,n){if("string"!=typeof e){if(qt){var i=Ut(e);i&&i!==qt&&Xt(t,i,n)}var r=Bt(e);Nt&&(r=r.concat(Nt(e)));for(var o=Lt(t),s=Lt(e),a=0;a<r.length;++a){var l=r[a];if(!(l in Ot||n&&n[l]||s&&l in s||o&&l in o)){var c=Yt(e,l);try{zt(t,l,c)}catch(t){}}}}return t}function Wt(t){return"function"==typeof t}function Gt(t){return"object"==typeof t&&"styledComponentId"in t}function $t(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ht(t,e){if(0===t.length)return"";for(var n=t[0],i=1;i<t.length;i++)n+=e?e+t[i]:t[i];return n}function Kt(t){return null!==t&&"object"==typeof t&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Zt(t,e,n){if(void 0===n&&(n=!1),!n&&!Kt(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Zt(t[i],e[i]);else if(Kt(e))for(var i in e)t[i]=Zt(t[i],e[i]);return t}function Jt(t,e){Object.defineProperty(t,"toString",{value:e})}function Qt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var _t=function(){function t(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return t.prototype.indexOfGroup=function(t){for(var e=0,n=0;n<t;n++)e+=this.groupSizes[n];return e},t.prototype.insertRules=function(t,e){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,r=i;t>=r;)if((r<<=1)<0)throw Qt(16,"".concat(t));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var o=i;o<r;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),a=(o=0,e.length);o<a;o++)this.tag.insertRule(s,e[o])&&(this.groupSizes[t]++,s++)},t.prototype.clearGroup=function(t){if(t<this.length){var e=this.groupSizes[t],n=this.indexOfGroup(t),i=n+e;this.groupSizes[t]=0;for(var r=n;r<i;r++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(t){var e="";if(t>=this.length||0===this.groupSizes[t])return e;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),r=i+n,o=i;o<r;o++)e+="".concat(this.tag.getRule(o)).concat(mt);return e},t}(),te=new Map,ee=new Map,ne=1,ie=function(t){if(te.has(t))return te.get(t);for(;ee.has(ne);)ne++;var e=ne++;return te.set(t,e),ee.set(e,t),e},re=function(t,e){ne=e+1,te.set(t,e),ee.set(e,t)},oe="style[".concat(at,"][").concat(ct,'="').concat(ut,'"]'),se=new RegExp("^".concat(at,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ae=function(t,e,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&t.registerName(e,i)},le=function(t,e){for(var n,i=(null!==(n=e.textContent)&&void 0!==n?n:"").split(mt),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(se);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(re(u,c),ae(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},ce=function(t){for(var e=document.querySelectorAll(oe),n=0,i=e.length;n<i;n++){var r=e[n];r&&r.getAttribute(at)!==lt&&(le(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function ue(){return n.nc}var me=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(t){var e=Array.from(t.querySelectorAll("style[".concat(at,"]")));return e[e.length-1]}(n),o=void 0!==r?r.nextSibling:null;i.setAttribute(at,lt),i.setAttribute(ct,ut);var s=ue();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},de=function(){function t(t){this.element=me(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var e=document.styleSheets,n=0,i=e.length;n<i;n++){var r=e[n];if(r.ownerNode===t)return r}throw Qt(17)}(this.element),this.length=0}return t.prototype.insertRule=function(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch(t){return!1}},t.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},t.prototype.getRule=function(t){var e=this.sheet.cssRules[t];return e&&e.cssText?e.cssText:""},t}(),he=function(){function t(t){this.element=me(t),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(t,e){if(t<=this.length&&t>=0){var n=document.createTextNode(e);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},t.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},t}(),pe=function(){function t(t){this.rules=[],this.length=0}return t.prototype.insertRule=function(t,e){return t<=this.length&&(this.rules.splice(t,0,e),this.length++,!0)},t.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},t.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},t}(),fe=dt,ge={isServer:!dt,useCSSOMInjection:!ht},ye=function(){function t(t,e,n){void 0===t&&(t=ft),void 0===e&&(e={});var i=this;this.options=r(r({},ge),t),this.gs=e,this.names=new Map(n),this.server=!!t.isServer,!this.server&&dt&&fe&&(fe=!1,ce(this)),Jt(this,(function(){return function(t){for(var e=t.getTag(),n=e.length,i="",r=function(n){var r=function(t){return ee.get(t)}(n);if(void 0===r)return"continue";var o=t.names.get(r),s=e.getGroup(n);if(void 0===o||!o.size||0===s.length)return"continue";var a="".concat(at,".g").concat(n,'[id="').concat(r,'"]'),l="";void 0!==o&&o.forEach((function(t){t.length>0&&(l+="".concat(t,","))})),i+="".concat(s).concat(a,'{content:"').concat(l,'"}').concat(mt)},o=0;o<n;o++)r(o);return i}(i)}))}return t.registerId=function(t){return ie(t)},t.prototype.rehydrate=function(){!this.server&&dt&&ce(this)},t.prototype.reconstructWithOptions=function(e,n){return void 0===n&&(n=!0),new t(r(r({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(t=function(t){var e=t.useCSSOMInjection,n=t.target;return t.isServer?new pe(n):e?new de(n):new he(n)}(this.options),new _t(t)));var t},t.prototype.hasNameForId=function(t,e){return this.names.has(t)&&this.names.get(t).has(e)},t.prototype.registerName=function(t,e){if(ie(t),this.names.has(t))this.names.get(t).add(e);else{var n=new Set;n.add(e),this.names.set(t,n)}},t.prototype.insertRules=function(t,e,n){this.registerName(t,e),this.getTag().insertRules(ie(t),n)},t.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},t.prototype.clearRules=function(t){this.getTag().clearGroup(ie(t)),this.clearNames(t)},t.prototype.clearTag=function(){this.tag=void 0},t}(),ve=/&/g,be=/^\s*\/\/.*$/gm;function xe(t,e){return t.map((function(t){return"rule"===t.type&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map((function(t){return"".concat(e," ").concat(t)}))),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=xe(t.children,e)),t}))}function we(t){var e,n,i,r=void 0===t?ft:t,o=r.options,s=void 0===o?ft:o,a=r.plugins,l=void 0===a?pt:a,c=function(t,i,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(e):t},u=l.slice();u.push((function(t){t.type===d&&t.value.includes("&")&&(t.props[0]=t.props[0].replace(ve,n).replace(i,c))})),s.prefix&&u.push(tt),u.push(Q);var m=function(t,r,o,a){void 0===r&&(r=""),void 0===o&&(o=""),void 0===a&&(a="&"),e=a,n=r,i=new RegExp("\\".concat(n,"\\b"),"g");var l=t.replace(be,""),c=et(o||r?"".concat(o," ").concat(r," { ").concat(l," }"):l);s.namespace&&(c=xe(c,s.namespace));var m,d,h,p=[];return J(c,(m=u.concat((h=function(t){return p.push(t)},function(t){t.root||(t=t.return)&&h(t)})),d=P(m),function(t,e,n,i){for(var r="",o=0;o<d;o++)r+=m[o](t,e,n,i)||"";return r})),p};return m.hash=l.length?l.reduce((function(t,e){return e.name||Qt(15),Pt(t,e.name)}),5381).toString():"",m}var Ee=new ye,Ae=we(),Se=i.createContext({shouldForwardProp:void 0,styleSheet:Ee,stylis:Ae}),Pe=(Se.Consumer,i.createContext(void 0));function ke(){return(0,i.useContext)(Se)}function Te(t){var e=(0,i.useState)(t.stylisPlugins),n=e[0],r=e[1],o=ke().styleSheet,s=(0,i.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),l=(0,i.useMemo)((function(){return we({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})}),[t.enableVendorPrefixes,t.namespace,n]);(0,i.useEffect)((function(){a()(n,t.stylisPlugins)||r(t.stylisPlugins)}),[t.stylisPlugins]);var c=(0,i.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:l}}),[t.shouldForwardProp,s,l]);return i.createElement(Se.Provider,{value:c},i.createElement(Pe.Provider,{value:l},t.children))}var Ce=function(){function t(t,e){var n=this;this.inject=function(t,e){void 0===e&&(e=Ae);var i=n.name+e.hash;t.hasNameForId(n.id,i)||t.insertRules(n.id,i,e(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=e,Jt(this,(function(){throw Qt(12,String(n.name))}))}return t.prototype.getName=function(t){return void 0===t&&(t=Ae),this.name+t.hash},t}(),Me=function(t){return t>="A"&&t<="Z"};function je(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(1===n&&"-"===i&&"-"===t[0])return t;Me(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var De=function(t){return null==t||!1===t||""===t},Re=function(t){var e,n,i=[];for(var r in t){var s=t[r];t.hasOwnProperty(r)&&!De(s)&&(Array.isArray(s)&&s.isCss||Wt(s)?i.push("".concat(je(r),":"),s,";"):Kt(s)?i.push.apply(i,o(o(["".concat(r," {")],Re(s),!1),["}"],!1)):i.push("".concat(je(r),": ").concat((e=r,null==(n=s)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||e in st||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Ve(t,e,n,i){return De(t)?[]:Gt(t)?[".".concat(t.styledComponentId)]:Wt(t)?!Wt(r=t)||r.prototype&&r.prototype.isReactComponent||!e?[t]:Ve(t(e),e,n,i):t instanceof Ce?n?(t.inject(n,i),[t.getName(i)]):[t]:Kt(t)?Re(t):Array.isArray(t)?Array.prototype.concat.apply(pt,t.map((function(t){return Ve(t,e,n,i)}))):[t.toString()];var r}function Oe(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Wt(n)&&!Gt(n))return!1}return!0}var Fe=kt(ut),Ie=function(){function t(t,e,n){this.rules=t,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Oe(t),this.componentId=e,this.baseHash=Pt(Fe,e),this.baseStyle=n,ye.registerId(e)}return t.prototype.generateAndInjectStyles=function(t,e,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,e,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&e.hasNameForId(this.componentId,this.staticRulesId))i=$t(i,this.staticRulesId);else{var r=Ht(Ve(this.rules,t,e,n)),o=At(Pt(this.baseHash,r)>>>0);if(!e.hasNameForId(this.componentId,o)){var s=n(r,".".concat(o),void 0,this.componentId);e.insertRules(this.componentId,o,s)}i=$t(i,o),this.staticRulesId=o}else{for(var a=Pt(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var m=Ht(Ve(u,t,e,n));a=Pt(a,m+c),l+=m}}if(l){var d=At(a>>>0);e.hasNameForId(this.componentId,d)||e.insertRules(this.componentId,d,n(l,".".concat(d),void 0,this.componentId)),i=$t(i,d)}}return i},t}(),Le=i.createContext(void 0);Le.Consumer;var ze={};new Set;function Be(t,e,n){var o=Gt(t),s=t,a=!Mt(t),l=e.attrs,c=void 0===l?pt:l,u=e.componentId,m=void 0===u?function(t,e){var n="string"!=typeof t?"sc":xt(t);ze[n]=(ze[n]||0)+1;var i="".concat(n,"-").concat(Tt(ut+n+ze[n]));return e?"".concat(e,"-").concat(i):i}(e.displayName,e.parentComponentId):u,d=e.displayName,h=void 0===d?function(t){return Mt(t)?"styled.".concat(t):"Styled(".concat(Ct(t),")")}(t):d,p=e.displayName&&e.componentId?"".concat(xt(e.displayName),"-").concat(e.componentId):e.componentId||m,f=o&&s.attrs?s.attrs.concat(c).filter(Boolean):c,g=e.shouldForwardProp;if(o&&s.shouldForwardProp){var y=s.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;g=function(t,e){return y(t,e)&&v(t,e)}}else g=y}var b=new Ie(n,p,o?s.componentStyle:void 0);function x(t,e){return function(t,e,n){var o=t.attrs,s=t.componentStyle,a=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,u=t.target,m=i.useContext(Le),d=ke(),h=t.shouldForwardProp||d.shouldForwardProp,p=gt(e,m,a)||ft,f=function(t,e,n){for(var i,o=r(r({},e),{className:void 0,theme:n}),s=0;s<t.length;s+=1){var a=Wt(i=t[s])?i(o):i;for(var l in a)o[l]="className"===l?$t(o[l],a[l]):"style"===l?r(r({},o[l]),a[l]):a[l]}return e.className&&(o.className=$t(o.className,e.className)),o}(o,e,p),g=f.as||u,y={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===p||("forwardedAs"===v?y.as=f.forwardedAs:h&&!h(v,g)||(y[v]=f[v]));var b=function(t,e){var n=ke();return t.generateAndInjectStyles(e,n.styleSheet,n.stylis)}(s,f),x=$t(l,c);return b&&(x+=" "+b),f.className&&(x+=" "+f.className),y[Mt(g)&&!yt.has(g)?"class":"className"]=x,n&&(y.ref=n),(0,i.createElement)(g,y)}(w,t,e)}x.displayName=h;var w=i.forwardRef(x);return w.attrs=f,w.componentStyle=b,w.displayName=h,w.shouldForwardProp=g,w.foldedComponentIds=o?$t(s.foldedComponentIds,s.styledComponentId):"",w.styledComponentId=p,w.target=o?s.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var i=0,r=e;i<r.length;i++)Zt(t,r[i],!0);return t}({},s.defaultProps,t):t}}),Jt(w,(function(){return".".concat(w.styledComponentId)})),a&&Xt(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ne(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var Ye=function(t){return Object.assign(t,{isCss:!0})};function Ue(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Wt(t)||Kt(t))return Ye(Ve(Ne(pt,o([t],e,!0))));var i=t;return 0===e.length&&1===i.length&&"string"==typeof i[0]?Ve(i):Ye(Ve(Ne(i,e)))}function qe(t,e,n){if(void 0===n&&(n=ft),!e)throw Qt(1,e);var i=function(i){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];return t(e,n,Ue.apply(void 0,o([i],r,!1)))};return i.attrs=function(i){return qe(t,e,r(r({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return qe(t,e,r(r({},n),i))},i}var Xe=function(t){return qe(Be,t)},We=Xe;yt.forEach((function(t){We[t]=Xe(t)}));!function(){function t(t,e){this.rules=t,this.componentId=e,this.isStatic=Oe(t),ye.registerId(this.componentId+1)}t.prototype.createStyles=function(t,e,n,i){var r=i(Ht(Ve(this.rules,e,n,i)),""),o=this.componentId+t;n.insertRules(o,o,r)},t.prototype.removeStyles=function(t,e){e.clearRules(this.componentId+t)},t.prototype.renderStyles=function(t,e,n,i){t>2&&ye.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,e,n,i)}}();function Ge(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=Ht(Ue.apply(void 0,o([t],e,!1))),r=Tt(i);return new Ce(r,i)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ue(),i=Ht([n&&'nonce="'.concat(n,'"'),"".concat(at,'="true"'),"".concat(ct,'="').concat(ut,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Qt(2);return t._emitSheetCSS()},this.getStyleElement=function(){var e;if(t.sealed)throw Qt(2);var n=t.instance.toString();if(!n)return[];var o=((e={})[at]="",e[ct]=ut,e.dangerouslySetInnerHTML={__html:n},e),s=ue();return s&&(o.nonce=s),[i.createElement("style",r({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new ye({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Qt(2);return i.createElement(Te,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(t){throw Qt(3)}})(),"__sc-".concat(at,"__");const $e=We.div`
    display: flex:
    align-items: center:
    justify-content: center;
    padding: 0;
    margin: 0;
`;function He(t){let{children:e}=t;return i.createElement($e,null,e)}const Ke=We.div`
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
`,Ze=We.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`,Je=We.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`,Qe=We.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
`,_e=We.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,tn=We.h4`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 0.5rem;
`,en=We.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
`,nn=We.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,rn=We.a`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.45);
    }
`,on=We.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,sn=We.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
    line-height: 1.5;
`,an=We.a`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color:rgba(255, 255, 255, 0.45);
    }
`,ln=We.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,cn=We.div`
    grid-column: 1 / -1;
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #eee;
`;function un(){return i.createElement(Ke,null,i.createElement(Ze,null,i.createElement(Je,null,i.createElement(Qe,null,"CENTRAL DE ATENDIMENTO"),i.createElement(_e,null,i.createElement(tn,null,"Suporte ao fornecedor"),i.createElement(en,null,"(85) 9 9821-0004"),i.createElement(en,null,"(85) 9 9860-2986")),i.createElement(_e,null,i.createElement(tn,null,"Suporte ao ente público"),i.createElement(en,null,"(88) 9 9995-6013"),i.createElement(en,null,"(85) 9 9827-6113"),i.createElement(en,null,"(85) 9 9732-4827"),i.createElement(en,null,"(85) 9 9837-0004"),i.createElement(en,null,"(85) 9 9801-4444")),i.createElement(nn,null,i.createElement(rn,{href:"#"},"Abra um chamado"),i.createElement(rn,{href:"#"},"Formulário de contato"))),i.createElement(on,null,i.createElement(tn,null,"Dúvidas ou sugestões?"),i.createElement(sn,null,"Entre em contato conosco atráves de nossos canais de atendimento ou através do email."),i.createElement(an,{href:"mailto:suporte@m2atecnologia.com.br"},"suporte@m2atecnologia.com.br")),i.createElement(ln,null,i.createElement(Qe,null,"HORÁRIOS DE ATENDIMENTO"),i.createElement(sn,null,"De segunda a sexta, exceto feriados, das 08h às 12h e das 13h às 17h30, horário de Brasília.")),i.createElement(cn,null,i.createElement(sn,null,"©Copyright 2025 M2A Tecnologia Ltda. Todos os direitos reservados."))))}var mn=n(5399),dn=n.p+"static/logo-pm-ipixuna-1-6b9d67a817bb074e41745730c212a6b2.png",hn=n.p+"static/logo-pm-itapipoca-cd4757a75cd467f1fbf6f69e79fc9e8a.png";const pn=We.button`
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
`;function fn(){return i.createElement(pn,null,"Mais clientes")}const gn=We.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(100% - 4rem);
    background: #ffffff;
    padding: 2rem;
`,yn=We.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    color: #333;
    margin: 2rem 0;

    @media (max-width: 768px) {
        margin: 1rem 0;
    }
`,vn=We.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start; /* Alinha os slides à esquerda */
    overflow-x: hidden; /* Esconde o que não cabe horizontalmente */
    width: 100%; /* Garante que o content ocupe toda a largura disponível */
    margin: 0 1rem; /* Adiciona margem nas laterais para os botões */
`,bn=We.div`
    z-index: 1;
    background: #ffffff;
`,xn=We.button`
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
`,wn=We.button`
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
`,En=We.div`
    display: flex;
    transition: transform 0.3s ease-in-out;
`,An=We.div`
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
`,Sn=We.img`
    max-height: 5rem; 
    max-width: 100%; 
    object-fit: contain;

    @media (min-width: 768px) {
        height: 13rem; 
        width: 20rem;
    }
`,Pn=[{id:1,src:dn,alt:"Ipixuna"},{id:2,src:hn,alt:"Itapipoca"},{id:3,src:dn,alt:"Ipixuna"},{id:4,src:hn,alt:"Itapipoca"},{id:5,src:dn,alt:"Ipixuna"},{id:6,src:hn,alt:"Itapipoca"},{id:7,src:dn,alt:"Ipixuna"},{id:8,src:hn,alt:"Itapipoca"},{id:9,src:dn,alt:"Ipixuna"},{id:10,src:hn,alt:"Itapipoca"}];function kn(){const{0:t,1:e}=(0,i.useState)(0),n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{n.current&&(n.current.style.transform=`translateX(${t}px)`)}),[t]),i.createElement(gn,null,i.createElement(yn,null,"Conheça alguns clientes que confiam na M2A e usam nossos produtos"),i.createElement(vn,null,i.createElement(bn,null,i.createElement(xn,{onClick:()=>{if(n.current){const t=n.current.querySelector(":scope > div:first-child");if(t){const n=t.offsetWidth+parseFloat(getComputedStyle(t).marginRight);e((t=>Math.min(t+n,0)))}}}},i.createElement(mn.xrT,{size:20,color:"#004C99"}))),i.createElement(En,{ref:n},Pn.map((t=>i.createElement(An,{key:t.id},i.createElement(Sn,{src:t.src,alt:t.alt}))))),i.createElement(bn,null,i.createElement(wn,{onClick:()=>{if(n.current){const t=n.current.querySelector(":scope > div:last-child"),i=n.current.offsetWidth;if(t){const r=t.offsetWidth+parseFloat(getComputedStyle(t).marginRight),o=-(n.current.scrollWidth-i);e((t=>Math.max(t-r,o)))}}}},i.createElement(mn.Xor,{size:20,color:"#004C99"})))),i.createElement(fn,null))}var Tn=n(4794);const Cn=We.div`
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
`,Mn=We.img`
    transition: all 0.95s ease-in-out;

    ${t=>t.ehCabecalhoFlutuante?"":"filter: sepia(100%) hue-rotate(200deg) brightness(70%);"}
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
`,jn=We.img`
    transition: all 0.95s ease-in-out;

    ${t=>t.ehCabecalhoFlutuante?"":"\n        filter: sepia(100%) hue-rotate(200deg) brightness(50%);\n\n        "}
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;

    @media (max-width: 768px) {
        height: 1.5rem; 
    }
`;function Dn(t){let{ehCabecalhoFlutuante:e}=t;return i.createElement(Cn,{ehCabecalhoFlutuante:e},i.createElement(Mn,{ehCabecalhoFlutuante:e,src:(0,Tn.withPrefix)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAQAAAAC0hrNAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfpBQgUIha4gr+oAAAGy0lEQVRYw6WYaWxUVRTH/2+60EJbdrVjtSyCBRcUXKOgURE1qaAomqBRlKhBlICJJm5UjUY0GhUhcWFpFBcqCYp7CMHWBBOsexFZpFAppbSlnXam82be/R8/3DfMe2/mTWf0nS/v3Xvu/d3l3HPOfRBkJ3V58WnqIb7DBh5giO3xabrcul4tip1Xl5ddL1kpRYJ8hocoFAq7WMuV8Yt0jXqYFoXCY1xnzaoJ/E+cYdQEDEO/946OT1cPhEYma1ljDyEh+9WSluL/jDOMTONVCzwwLf+ohf6tMsAaC8KnmFWxc83J0bGdZan15gRutJfSKzvMSTnh1GIeonJ10c0fuc6c4NaLjuf6tMiwWpglrrGAa9OOWSjWjan6sSnW3HB57By+6gG/uT1/QFxLMb/yg/FL2/hv4QruVItaB3vWZL5Hf3NTYUZcUyG/9YVZsbMEAmvOiZI29aB7Br2jO8s6y0Ijo+Pil6jb1RPqtgw4w+AGX5iwViDYO4gH7G/FevVouDy7A54Gpx7LAFNmlUCgllIoPKSe7j89F1AKLn6Zj1lr+UIgaC5iK3eruxsLfE/jPB5gE3ewjq+o++IX7B2UFtdSzH2+qHq1VM/Nmq0WJ3erdbA1l2vYrJ6MVHSUJpZVPeE+EtyiFjUXeXB81g+mHnfubtL8uYrHXZqh+HS7r9f8+rAbR4KM+OC+T12w+AX8lEyj2xefIRBsz+c3nprevpMcOPWQ79wWu1G9o7kmLcqOF3rRe4az2VPzkgNnVvn6kZucsM4ydmYwJ6Fwv44Z8Ss8TjDUUSoIAABQuBs7kfYxJji/hk7FCGR+xpWsDRhA/nd43VVeOnw+kqaiFvqM9oXk3GoCKXuSfgMeFAg6SnnEawUQaL/WXMS2NE0/SaYF3cP4XjYwCkORCkFKRFSRIARqgY5O6pGUZjsT50Ug8I8TaWSjvRq7XLO+EwLWam/YUsyDribt2k1FgvoAc1sOOIlfLBCou1yl70DA3xgzz7QdkNMmq7XnYKONa8oFp51eY4FrCjtRl0czUSngZ8mR2CW1lLYhAgH/yQnH2BSBgM84ysKIBJ1z6TvZNpj27mECgbqDQtFeksdywglXCQTRcU6ngNhU+/VwzwiBwLqacVrqHoEgXM4uCkV7dY9ZDyzdOtpzhwMXv/zEx8e2h5mYCBp8X9fomfLvHHFizRYI1FPJkoCRf+Lcz+MSACjcc4YJAPsG4XpdUTQMANCJHJ9ANQDwa0eJRBwO6+VoZfLrDFPe0G955QCAI7niMAsANv+EsP29P8A+R3XB0aNObam3x3Q6AGBfzriK/iBwi8KvAIDf+i8PRA476wsDLvVie9aTAEB25YxD4VQAwHcANh+fPrgNAnY4NneOK2E9i3soFG4SCGLn5moq/FDnNIZhVes8AALWOxT29Ax3AtuG8A1abBUI6vL4R06wzvYSd2g2DAi4wqlkThQIzEnq9sQ9JnY+P+8otfPnWc61GEA2elMOdT8EVrVDpdX25F0UbouOSc1TrJlZ4952JYRLaFqztBPuO6Gid+k8+yuklqVeK/jzgKAYt6hbnblouJxR9jYX6Q4+SSiq5SmRfZfOrhzjnM9vPClfQiw28S01T3uhpOwdxG8p/ECQDwBcE5hrn7QmADDOdtjypLwlqHcad2ADNgD9wcIqI4gRGIwAouiWdjYf3V/RDxgYamvGJudfGlgDVE7ETIDr85DIQfbq8emgyC2uMfdo552LHB+q7uZ2knX2dUC4uyaQzDPv1V3rHIM/eRbps2Sm3zZE3ZbOhLS0l8RnqMe5lTG75ZsCgXUzRS0Q2IsJNNTOeBQTgb7uYgAY5XEO1eN/4bs49Nym5Tw5LLMLP5Ie7EYLWnFcIlAoNoZgJE7D+FHj4fJLctAAYFTiz4b3rgCSiZ91A4Wi8y6/QKpHGKlgd9Yh6DqBgKuta1MuXPyAyn7z6+6wPu6ehCeDRIICgXog5cIl6BnBZnt2R307WG0P6OOscPu0djJ9dLuZC+0k6C/fDpR1le1Lf8kCt9prSmntiw0ZujgSPkUg6K9ky4A7d2N2uA0Zu9mu03yziu0Z9Y55f3P44NTyAca9Xkcvc3LGGa5M7TktLj5twFvcK1ozOoa/+81NXyyzwAmiY/jDAMAVeobtJfwoTW2D9k9Z4gR1eWqZIzClk3cTwUktZMhRHlIP+/1izOhoI6dyFc0MwK29o7VmfyXrKBSaXKkt9z/gBIL+0/h8hmN/MPFzQ2BdqZ7WXuR/4ASCxgLrGq7in2n/OFh80f8fklcMySFr7BtVPMUYa1SiDCUIIIouOSx/hX8u68q2h38BYnZwrA+F1kEAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAxODowMzoyOCAyMjo0NTo0MbdozoEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDUtMDhUMjA6MzQ6MDMrMDA6MDBKA5uMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTA1LTA4VDIwOjM0OjAzKzAwOjAwO14jMAAAAABJRU5ErkJggg==")}),i.createElement(jn,{ehCabecalhoFlutuante:e,src:(0,Tn.withPrefix)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAaCAQAAADWUVAIAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfpBQgTKBs5kz0aAAAJi0lEQVRYw+2Ye3BdVRWHv3Nu7m2SpilJmzamJU2LLbdoLaLCCB2QWoZHkRRBnr7Qqqjj28qISlMUtdPOFAdfiFopoVBbiECxiIhpoRCFVKBNqI04kfRh0yRNcm9ucs89+7f849w0TamlM/iakb3/2Xuvtdda395nv45n/H8l/78dwOvArwO/DvyaUoE+41Xm7krsBAhPjy2yjifuOCcE3ws/4NVSbE/3f++EvmF1d7n/ttxdidYRA7ri8EFTe19L2cJDtb0FWwB8LzjbP8cbZ7tS68f3Qve4soVgfbFN0Du+9MLMYyVdAD2lJ9R6SctoS8ETkYXwDH865q8b8TAwuWiRN8163aPx50ZaB6eMqfWmWUqbCpoBMpWF74Jc05j2fNznMr7hocsdIJNpT0eRkapQSiZzHzMMrVS/fqZmmZ7bW2wYRvhumUy76vyobhgKZIfl+uzMw2obDSM1UY0ydetxdWl/7gwjO0smk3LvNII5stxZhhEuVJekZ7Vbpt+lJhqG7pRJI97cxzWgUE+pS6b69sJ86+c0JKcm/UnSCsMIF8hk7v15+TUymfuGYXlgcx8x3JJ8mN8yUhXKhYuMvcXqlrnr83AbIo3w3JEQOks6S7RMJgvmdpa0F+aBl3WWdJa0FxqNBXpKppa+cqO7VE9rb3thHtj0bJ0/DBycqkGZW2LsLdY2mTbX+UcCh5dIsnCRkZ6sPTL93DDctTJZeLlhuE/L3DVHAuuPMpk6PM9AkpPpSUM71DsMnE3qns4Sw/PUIdMdhtFeqLTaZDKtGgE2DPc1mSw70zAiYPe1Q7JodN8X1bKzw4vzM7xPJnOLh4G1UaaDLQnDcFfLZOGlRwJrp0zP5+3eJJOCOc1x7ZGp8ZC/L3QUjQbOTJG0VybLvd3wCdkMnKlrmE3D8JpI7PSurkhD7hKmAmmAqecw1m4C4OLj3yS8WoBMY97ui7GNUcluIgfeLd54gN1FnAdsOyUAyDUB+JeMthQkORloyvdvArzYe97yTqqAxmEtf9XUwdH9xlxIzlYC+AvBB1sDeN7tbKZjtGrfCf5tAHoAwL+Yzm+uYy/wxmD2q2B+3Q7aQVsGzABU2nWkhl7ke8Ck2FKAiioSQHckS0faNaN7xKJ63pK6ALwafwaAdR4jlot4OnwYwIuAD95HBiix+tGKvle6mhOBu2PR+C3kt0sVjWXBq81xo91it7jfATnA3xF/pUrPzewDFgBYEDFFkngB5HsenrKH63ixvE7Umohac6faalsdJEc6tSZ4tz2W+DP7gLdlKn2YkKIBGOzdMNp+eCOLgO1d1wMEpzCdHncBfQDeqwDbk/5Kf2XBFqAVYOabhiWDU4ZLE1L2leHy8j10A9VRrehEALaPtjnUgkZ0vGoA2+52AHhvzk/SiXyYD8feMNLr5HmU0hvOow3wCy/0AbQGeLC8/3DzbpF3M7A/qK1IAxQsBD7jb+KTAJzZX85xJd0NUPCJ/AzMLWwLTx+WFdzNk1FpqagH5mYqAWIXAArvHG1pbCePAOe2JgD8C4B0ZkN8O88Dl6UnHt2/fxF4t8We4GwAbyEKjPUx7Q4vNnTz8C49NCM6k/VTd727PrzMUKNeGKoZqhmq0U6ZzF17rF1aDW6xW+yuMgzdLpO0LDszvEAvq6k5np0ly80zjOCtCqNduq9Mu2R6YKAyN0/dMi0fOYfdYrfYLc6ePHSSumT6Qf+E8FIFMrfYMHJvV1qmpty8YI7WyvS3weqRXVot2phNZpO5eTKZ+lBgGO7LzfHDgcPzR10nnukrUy460g2tksl0zzGBo/yyYdT57qv5Ay/Uur7y6FiKgA39cPjikZ6sdcrJZOpyn/O8Q8D57D5qZE/WY5JMpnZ3xbD/4K16Kq/Vo1X9E0aOpaEamftk3tOLMpn3n3kPtyZmnuIVD7WVHDi2Xn9Z8SwbfKr1nPCf62QqE9PVU7hLo0IfnBqvVu/Tu47VE+A/BPy/k/4Fr6WeUvuuu+y/DfIagLfFw7N6SgEGJodn7S6CbfEgubkADpQEMyE9cVsc9o8N5w1MBjBzDwd/ABiaFiSDWeB74ekDk4bt9Y4Pz4729A2x8IzsDNhdFCR9b3dRT+nQiUEySEK6IkhmZyzzIfOGoWoYrIrs9ZeD7wXJ1gQEs/YV7x8bJINkf/mGWJA8UHKgpKc0Uxkkg2QwE7rHZd8IMDBpsApaE+GZ3eOOQmyvyFqt76veCBdop1uitsyUwWpZpsoIL1K3obrBaYPV+qv7iu4PTjs4Xi+4pdrmrja0Vb/XLYb7uu7Vhugtk52tdvd5bRya0RzX77VKje5LfWXK5t7hPpWdqUe0VSs8T8v1nH6lrXW+1iidqdJao7FA3VptNMdl7qrsKbJwfrhAgVaE70pVyHRHWOuudFeoUbtVZ7ibFKYnGbpV9xhaq1t15yvpjgb8F32nbYyhJvcNQ49qxSuBdat+bfSVdY1zn1eL4a5Th6Gt7ouGod+ovrMkb61evzDSk9vGhJfp4PpYeJ4ye4v1kL6t7xp6xC01DC2PHpapCq1Rq36itUZunh7UgfWx5ricHlSdcuH8cIFShpGqUKtCd6O70nBLtMUw9GO97D5yCLhDy6KnyOh8lE/aVvKlkx5d5lNDJ7Cf6Uf5MKazD0oPTkh5NXSCdTJ1Wxy86+x20G3UTnw2WhacxD6Ij6+Z49XQfbnTforKK+2XXGt7ALyrLLpgVMbv4vslB0A3cB2TIXaRVlO+6CxgM+czjSEACq3BzQd+w2ZvyUhAA5MYwzPRUwXAVnDj7Id97zjW8GCDO4+zl0ymxasGprHjkCjL2NYEZW6QVuZAaoI713ZQDV41fz4tB7ba+wQMPROcyrTSuQDsYA7Er43daC1Utib8afS+tLv3ASZm7wOwe70PAfB3iu0lgIZfs4VxwCzvTbTEaoGXaLat+RiGvEtjjwOESygdibrofNJ0smBfcZ5inRayoLfseNbw3Vqrxz0vmKsX9CNt7T1hsFqmTe6GzhK16Hndb/SV61ndr4eys9rG6GHdqefC+Ya2arsaWhJaoV+o5e9j86/RHarXk+F7PU8/1336o7vSMNxnDUOP6EU1HByv5ap3n1JHS0Jr1seC09SUmaKbDfdZtbUkdIf7WF+5UuH8cIFyanAfTFVolaG7Rj5p3d4cbxujVFib/6R/qXu16bjWsOdlpkY/cRoLBipHy9bHMlXRHcjz3A3ZZNSannTkaslUNceHy3V+pqqxICr3T+goGvZi/DtznZ+ZejQf/wAfQoYaaHigywAAACF0RVh0Q3JlYXRpb24gVGltZQAyMDE4OjAzOjI4IDIyOjQ1OjQxt2jOgQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wNS0wOFQxOTozOTozMSswMDowMF0ZKcUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDUtMDhUMTk6Mzk6MzErMDA6MDAsRJF5AAAAAElFTkSuQmCC")}))}const Rn=We.button`
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
`;function Vn(){return i.createElement(Rn,null,"Selecione um plano")}const On=We.div`
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
`;function Fn(t){let{children:e}=t;const{0:n,1:r}=(0,i.useState)(!1);(0,i.useEffect)((()=>{const t=()=>{window.scrollY>100&&!n?r(!0):window.scrollY<=100&&n&&r(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}}),[n]);const o=n?"cabecalho-fixo":"cabecalho-suspenso";return i.createElement(On,{className:o},e)}const In=We.button`
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
`;function Ln(){return i.createElement(In,null,"Solicite uma apresentação")}const zn=We.div`
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
`,Bn=We.div`
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
`,Nn=We.label`
    font-size: 2.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }
`,Yn=We.label`
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
`;function Un(){return i.createElement(zn,null,i.createElement(Bn,null,i.createElement(Nn,null,"A M2A tem as soluções"),i.createElement(Yn,null,"que você precisa para realizar suas contratações governamentais!"),i.createElement(Ln,null)))}var qn=n(6512);const Xn=Ge`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`,Wn=We.ul`
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
`,Gn=(We.li`
    margin: 0 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
`,We(Tn.Link)`
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
`),$n=We.ul`
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
`,Hn=We(Tn.Link)`
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
`,Kn=We(qn.pte)`
    font-size: 0.8rem;
`,Zn=We.li`
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
`;function Jn(){return i.createElement(Wn,null,i.createElement(Zn,null,i.createElement(Gn,{to:"/inicio",activeClassName:"active"},"Início")),i.createElement(Zn,null,i.createElement(Gn,{to:"/contratacoes",activeClassName:"active"},"Contratações")),i.createElement(Zn,null,i.createElement(Gn,{style:{width:"6rem"}},"Produtos ",i.createElement(Kn,null)),i.createElement($n,null,i.createElement(Hn,{to:"/produto-a",activeClassName:"active"},"M2A Planejamentos"),i.createElement(Hn,{to:"/produto-b",activeClassName:"active"},"M2A Compras"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Pesquisas"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Processos"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Processos Eletrônicos"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Tramitações"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Contratos"),i.createElement(Hn,{to:"/produto-c",activeClassName:"active"},"M2A Fornecedores"))),i.createElement(Zn,null,i.createElement(Gn,{style:{width:"4rem"}},"Mais ",i.createElement(Kn,null)),i.createElement($n,null,i.createElement(Hn,{to:"/produto-a",activeClassName:"active"},"Sobre"),i.createElement(Hn,{to:"/produto-b",activeClassName:"active"},"Regulamentos"))))}const Qn=We.div`
    display: flex;
    align-items: center;
    position: relative;
`,_n=We.button`
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
`,ti=We.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`,ei=We.div`
    position: fixed;
    top: 0;
    right: ${t=>{let{isOpen:e}=t;return e?"0":"-100%"}};
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
`,ni=We(Tn.Link)`
    color: #3B3D3D;
    font-size: 18px;
    text-decoration: none;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f1f1f1;

    &:hover {
        color: #007bff;
    }
`,ii=We.div`
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
`,ri=We.div`
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    transform: ${t=>{let{isOpen:e}=t;return e?"rotate(180deg)":"rotate(0deg)"}};
`,oi=We.div`
    max-height: ${t=>{let{isOpen:e}=t;return e?"00px":"0"}};
    overflow: hidden;
    transition: max-height 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
`,si=We(Tn.Link)`
    color: #555;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #007bff;
    }
`;var ai=()=>{const{0:t,1:e}=(0,i.useState)(!1),{0:n,1:r}=(0,i.useState)(!1),o=()=>{e(!t),t||r(!1)};return i.createElement(Qn,null,i.createElement(_n,{onClick:o},t?i.createElement(qn.WQq,{size:24}):i.createElement(qn.nej,{size:24})),t&&i.createElement(ti,{onClick:o}),i.createElement(ei,{isOpen:t},i.createElement(ni,{to:"/inicio"},"Início"),i.createElement(ni,{to:"/contratacoes"},"Contratações"),i.createElement(ii,{onClick:()=>{r(!n)}},i.createElement("span",null,"Produtos"),i.createElement(ri,{isOpen:n},i.createElement(qn.pte,{size:16}))),i.createElement(oi,{isOpen:n},i.createElement(si,{to:"/produto-a"},"M2A Planejamentos"),i.createElement(si,{to:"/produto-b"},"M2A Compras"),i.createElement(si,{to:"/produto-c"},"M2A Pesquisas"),i.createElement(si,{to:"/produto-d"},"M2A Processos"),i.createElement(si,{to:"/produto-e"},"M2A Processos Eletrônicos"),i.createElement(si,{to:"/produto-f"},"M2A Tramitações"),i.createElement(si,{to:"/produto-g"},"M2A Contratos"),i.createElement(si,{to:"/produto-h"},"M2A Fornecedores")),i.createElement(ni,{to:"/sobre"},"Sobre"),i.createElement(ni,{to:"/conteudo"},"Conteúdo")))};const li=We.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
`,ci=We.label`
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
`,ui=We.div`
    display: inline-block;
`,mi=We.label`
    color: white;
    margin-bottom: 2rem;
    font-family: 'Montserrat Alternates', sans-serif;
    transform-origin: top;

    @media (max-width: 768px) {
        text-wrap-mode: wrap;
        margin: 1rem;
        text-align: center;
    }
`,di=Ge`
    0% { transform: translateY(-100%); opacity: 0; }
    40% { transform: translateY(0); opacity: 1}
    100% { transform: translateY(0); opacity: 0}
`,hi=We.label`

`,pi=We.label`
    display: inline-block; /* Importante para a largura */
    animation: ${di} 3.5s infinite;
`;function fi(t){let{palavras:e=[],tempoRotacao:n=3e3}=t;const{0:r,1:o}=(0,i.useState)(0),{0:s,1:a}=(0,i.useState)(e[0]);return(0,i.useEffect)((()=>{const t=setInterval((()=>{o((t=>(t+1)%e.length))}),n);return()=>clearInterval(t)}),[]),(0,i.useEffect)((()=>{a(e[r])}),[r]),i.createElement(hi,null,i.createElement(pi,{key:s},s))}var gi=n.p+"static/mural-m2a-compras-428c1ab1a164735e123280dc195aaefb.jpg",yi=n.p+"static/mural-m2a-planejamento-cf862d4f12c4c310a960e0a6335020c2.jpg",vi=n.p+"static/mural-m2a-pesquisas-1cd49d382db019e2e60c03b1d3284d88.jpg",bi=n.p+"static/mural-m2a-fornecedores-f899bf9bbaa6570ab2968c054b3bc02f.jpg";const xi=We.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  overflow-x: auto; /* Para lidar com muitas imagens */

  @media (max-width: 728px) {
	display: none;
  }
`,wi=We.div`
  	flex: 0 0 auto;
  	width: auto;
  	max-width: 400px; /* Ajuste conforme a largura desejada das capturas de tela */
  	height: auto;
	border-radius: 8px;
  	overflow: hidden;
  	margin-right: -30px; /* Margem negativa para sobreposição (ajuste conforme necessário) */
`,Ei=We.img`
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

`,Ai=We.img`
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

`,Si=We.img`
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
`,Pi=We.img`
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
`;var ki=()=>i.createElement(xi,null,i.createElement(wi,null,i.createElement(Ei,{src:gi,alt:"M2A Compras"})),i.createElement(wi,null,i.createElement(Ai,{src:yi,alt:"M2A Planejamento"})),i.createElement(wi,null,i.createElement(Si,{src:bi,alt:"M2A Fornecedores"})),i.createElement(wi,null,i.createElement(Pi,{src:vi,alt:"M2A Pesquisas"})));function Ti(){return i.createElement(li,null,i.createElement(ci,null,i.createElement(ui,null,"M2A")," é o mais ",i.createElement(fi,{palavras:["eficiente","completo","prático"],tempoRotacao:3e3})," portal de contratações públicas."),i.createElement(mi,null,"Todas as ferramentas em um só lugar, para quem vai vender e quem vai comprar."),i.createElement(ki,null))}const Ci=We.div`
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
`;function Mi(t){let{ehCabecalhoFlutuante:e,larguraAtual:n}=t;return i.createElement(Ci,null,i.createElement(Fn,null,i.createElement(Dn,{ehCabecalhoFlutuante:e}),n<=1024?i.createElement(ai,null):i.createElement(Jn,null),i.createElement(Vn,null)),i.createElement(Un,null),i.createElement(Ti,null))}const ji=We.div`
    flex: 1 1 calc(33.33% - 6rem);
    position: relative; 
    border-radius: 1rem;
    margin: 2rem 1rem;
    min-height: 15rem;   
    min-width: 15rem;
`,Di=We.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    min-height: 15rem;
    border-radius: 0.8rem;
    background: url(${t=>t.url_imagem}) no-repeat center center;
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
    animation: ${t=>t.visivel?"slideIn 0.5s ease forwards":""};
    @keyframes slideIn {
        from {
            margin: 0rem;
        }
        100% {
            margin: -0.8rem 0.8rem 0.8rem -0.8rem;
        }
    }
`,Ri=We.label`
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
`,Vi=We.label`
    position: absolute;
    bottom: 1rem;
    margin: 0 1rem 1rem 1rem;
    color: #ffffff;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;function Oi(t){let{titulo:e,descricao:n,url_imagem:r,style:o}=t;const{0:s,1:a}=(0,i.useState)(!1),l=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const t=new IntersectionObserver((t=>{let[e]=t;a(e.isIntersecting)}),{threshold:.1});return l.current&&t.observe(l.current),()=>{l.current&&t.unobserve(l.current)}}),[]),(0,i.useEffect)((()=>{s&&console.log("Componente visível!")}),[s]),i.createElement(ji,{style:o},i.createElement(Di,{url_imagem:r,ref:l,visivel:s}),i.createElement(Ri,null,e),i.createElement(Vi,null,n))}const Fi=We.button`
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
`;function Ii(){return i.createElement(Fi,null,"Mais produtos")}var Li=n.p+"static/produto_compras-61bee3399e4ad0ca540aaa43b99cb8e2.png",zi=n.p+"static/produto_pesquisa-69171438491862b545b72050ffc2c8da.png",Bi=n.p+"static/produto_processos-195e6c1cdfab58a9c5bd12f9eff034f6.png",Ni=n.p+"static/produto_contratos-6f24d586024471fab471fe6b0b77264f.png",Yi=n.p+"static/produto_fornecedores-951f8846253b763d272d38f78e0d5c4f.png";const Ui=We.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    border-radius: 2rem;
`,qi=We.div`
    flex-wrap: wrap;
    display: flex;
`,Xi=We.div`
    flex: 1 1 calc(20% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 8rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`,Wi=We.div`
    flex: 3 1 calc(55% - 20px);
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;

    @media (max-width: 768px) {
        flex: 1;
        padding: 1rem;
    }
`,Gi=We.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #003366;
    min-width: 30rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        min-width: 16rem;
    }
`,$i=We.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 1.2rem;
`;function Hi(){return i.createElement(Ui,null,i.createElement(qi,null,i.createElement(Xi,null,i.createElement(Gi,null,"Nossas soluções são completas para que a gestão governamental do seu munícipio seja realizada com excelência."),i.createElement($i,null,"Nosso portfólio completo permite centralizar todas as soluções de gestão governamental em um único local. Desde o planejamento, passando pela documento de formalização de demanda, processos administrativos e contratação, até a gestão de contratos.")),i.createElement(Wi,null,i.createElement(Oi,{titulo:"M2A Planejamentos",descricao:"Planeje suas demandas",url_imagem:Ni,style:{background:"royalblue"}}),i.createElement(Oi,{titulo:"M2A Compras",descricao:"Crie suas demandas",url_imagem:Li,style:{background:"rgba(0, 110, 156, 0.69)"}}),i.createElement(Oi,{titulo:"M2A Pesquisas",descricao:"Realize suas cotações de preço",url_imagem:zi,style:{background:"#0F9B8E"}}),i.createElement(Oi,{titulo:"M2A Processos",descricao:"Parametrize suas contratações",url_imagem:Bi,style:{background:"#478dcc"}}),i.createElement(Oi,{titulo:"M2A Fornecedores",descricao:"Participe de contratações",url_imagem:Yi,style:{background:"#2b576e"}}),i.createElement(Oi,{titulo:"M2A Contratos",descricao:"Gerencie seus contratos",url_imagem:Ni,style:{background:"#2F4F4F"}}))),i.createElement(Ii,null))}var Ki=n(6973),Zi=n(7909),Ji=n(5867),Qi=n(5066),_i=n(1351),tr=n(2388),er=n(1406);const nr=We.div`
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
`,ir=We.label`
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`,rr=We.label`
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: 'Montserrat Alternates', sans-serif;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`,or=We.div`
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
`,sr=We.div`
    color:rgb(245, 212, 115);
    font-size: 5rem;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`,ar=We.label`
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
`,lr=We.label`
    color: #ffffff;
    font-size: 1.1rem;
    font-family: 'Montserrat Alternates', sans-serif;
    text-align: center;
    width: 15rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;function cr(t){let{titulo:e,descricao:n}=t;return i.createElement(nr,null,i.createElement(ir,null,e),i.createElement(rr,null,n))}function ur(t){let{icone:e,titulo:n,descricao:r}=t;return i.createElement(or,null,i.createElement(sr,null,e),i.createElement(ar,null,n),i.createElement(lr,null,r))}function mr(t){let{valorFinal:e,visible:n,duracao:r=1e3}=t;const{0:o,1:s}=(0,i.useState)(0),a=(0,i.useRef)(0);return(0,i.useEffect)((()=>{const t=performance.now(),n=()=>{const i=performance.now()-t,o=Math.min(i/r,1),l=Math.ceil(o*e),c=100*Math.ceil(l/100);s(Math.min(c,e)),o<1&&(a.current=requestAnimationFrame(n))};return a.current=requestAnimationFrame(n),()=>cancelAnimationFrame(a.current)}),[e,r,n]),i.createElement("span",null,o)}const dr=We.div`
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
`,hr=We.div`
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
`;function pr(){const t=(0,i.useRef)(null),{0:e,1:n}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?n(!0):n(!1)}))}),{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}}),[]),i.createElement(dr,{ref:t},i.createElement(hr,null,i.createElement(cr,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(mr,{visible:e,valorFinal:300,duracao:2500})),descricao:"Clientes"}),i.createElement(cr,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(mr,{visible:e,valorFinal:1e4,duracao:2500}),i.createElement("label",null," mil ")),descricao:"Contratações"}),i.createElement(cr,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(mr,{visible:e,valorFinal:5e3,duracao:2500}),i.createElement("label",null," mil ")),descricao:"Fornecedores"}),i.createElement(cr,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(mr,{visible:e,valorFinal:15e3,duracao:2500}),i.createElement("label",null," mil ")),descricao:"Contratos"})),i.createElement(ur,{icone:i.createElement(Zi.c4U,null),titulo:"+ 300 mil",descricao:"dfd's criados"}),i.createElement(ur,{icone:i.createElement(Qi.QDl,null),titulo:"+ 250 mil",descricao:"pesquisas realizadas"}),i.createElement(ur,{icone:i.createElement(Ji.xAX,null),titulo:"+ 200 mil",descricao:"pedidos de cotação respondidos"}),i.createElement(ur,{icone:i.createElement(Ki.fIi,null),titulo:"+ 1 milhão",descricao:"preços importados"}),i.createElement(ur,{icone:i.createElement(qn.Gjp,null),titulo:"+ 200 mil",descricao:"licitações públicadas"}),i.createElement(ur,{icone:i.createElement(_i.Ua$,null),titulo:"+ 50 mil",descricao:"contratações diretas públicadas"}),i.createElement(ur,{icone:i.createElement(tr.sn$,null),titulo:"+ 20 mil",descricao:"procedimentos auxiliares públicados"}),i.createElement(ur,{icone:i.createElement(er.sGK,null),titulo:"+ 100 mil",descricao:"processos eletrônicos gerenciados"}))}var fr=n(1735);const gr=We.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    background-color: #ffffff;
    overflow: hidden;
    margin: 10rem 10rem 0 10rem;
`,yr=We.div`
    display: flex;
    flex: 1;
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

`,vr=We.div`
    padding: 0 5rem 5rem 5rem;
    color: #003366;
`,br=We.div`
    display: flex;
    flex-direction: column;
    line-height: 2;
`,xr=We.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #003366;
`,wr=We.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 0.90rem;
    max-width: 40rem
`,Er=t=>{let{icone:e,titulo:n,descricao:r,entrada:o,saida:s,style:a}=t;const l=(0,i.useRef)(null),{0:c,1:u}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const t=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?u(!0):u(!1)}))}),{threshold:.1});return l.current&&t.observe(l.current),()=>{l.current&&t.unobserve(l.current)}}),[]),(0,i.useEffect)((()=>{c&&console.log("Componente visível!")}),[c]),i.createElement(yr,{ref:l,style:a,className:c?o:s},i.createElement(vr,null,e),i.createElement(br,null,i.createElement(xr,null,n),i.createElement(wr,null,r)))};function Ar(){return i.createElement(gr,null,i.createElement(Er,{icone:i.createElement(mn.wYV,{size:200}),titulo:"Tecnologia de ponta",descricao:"Estamos evoluindo constantemente as nossas soluções, tudo isso para garantir que nossos clientes tenham acesso à tecnologia de qualidade, proporcionando uma experiência agradável, prática e segura. Todos os nossos sistemas são totalmente online e podem ser acessados de qualquer aparelho que navega pela internet.",style:{justifyContent:"flex-start"},entrada:"visible-right",saida:"invisible-right"}),i.createElement(Er,{icone:i.createElement(fr.fHv,{size:200}),titulo:"Somos Especialista",descricao:"Além da tecnologia, contamos com equipe de especialistas com vasta experiência no negócio, sempre preocupados em manter a qualidade e a legalidade jurídica de nossas soluções.",style:{justifyContent:"flex-end",flexDirection:"row-reverse"},entrada:"visible-left",saida:"invisible-left"}),i.createElement(Er,{icone:i.createElement(er.KCy,{size:200}),titulo:"Suporte diferenciado",descricao:"Fornecer um atendimento de qualidade é essencial para mantermos a qualidade de nossas soluções. Queremos estar sempre próximos aos nossos clientes, entender suas necessidades e solucioná-los da melhor maneira.",style:{justifyContent:"flex-start"},entrada:"visible-right",saida:"invisible-right"}))}const Sr=We.div`
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
`,Pr=We.div`
    padding: 1rem;
    opacity: 1;
    background: transparent;
    box-shadow: none;
    max-height: 35rem;
`,kr=We.img`
    margin-top: -45px;
    height: 20rem;
    width: 100%;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.50rem 0.50rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.50rem -0.0625rem;
    filter: brightness(95%);
`,Tr=We.div`
    display: flex;
    flex-direction: column;
    padding: 24px 8px 8px;
    opacity: 1;
    background: transparent;
    box-shadow: none;
`,Cr=We.label`
    font-weight: bold;
    font-size: 1rem;
    color: #003366;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`,Mr=We.label`
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;function jr(t){let{imagem:e,titulo:n,descricao:r,style:o}=t;return i.createElement(Sr,{style:o},i.createElement(Pr,null,i.createElement(kr,{src:e}),i.createElement(Tr,null,i.createElement(Cr,null,n),i.createElement(Mr,null,r))))}var Dr=n.p+"static/ia-software-f8494f538ed934a3d0831fe9196cc8fc.png",Rr=n.p+"static/ia-2-software-4a24c1234c12e6283803f7de7b5dcbca.png",Vr=n.p+"static/ia-3-software-5d8d2dd0824c3f5f50e594a2e951b666.png";const Or=We.div`
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
`,Fr=We.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 65rem;
`,Ir=We.label`
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    margin: 4rem;
`;function Lr(){const t=(0,i.useRef)(null),{0:e,1:n}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?n(!0):n(!1)}))}),{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}}),[]),(0,i.useEffect)((()=>{e&&console.log("Componente visível!")}),[e]),i.createElement(Or,{ref:t},i.createElement(Ir,null,"MIA: A Inteligência Artificial que Entende o seu Governo"),i.createElement(Fr,null,i.createElement(jr,{imagem:Dr,titulo:"Estudos Técnicos Aprofundados",descricao:" Otimize seus estudos técnicos preliminares com a MIA, nossa Inteligência Artificial. Ela  auxilia na geração de análises bem elaboradas, garantindo um entendimento completo da demanda  e a melhor abordagem para atendê-la. Conte com a precisão e eficiência da MIA para impulsionar  seus projetos. "}),i.createElement(jr,{style:{transform:e?"translateY(-30%)":"translateY(0)",transition:"transform 1s ease-in-out"},imagem:Vr,titulo:"Formalização de Demandas Inteligente e Eficaz",descricao:" Simplifique a formalização de suas demandas com a MIA. Nossa Inteligência Artificial auxilia na  criação de objetos e justificativas claras e concisas, detalhando o que é a demanda e o motivo  de sua necessidade. Garanta documentos bem elaborados e um processo mais eficiente com a MIA. "}),i.createElement(jr,{imagem:Rr,titulo:"Avaliação de Riscos Inteligente e Seguras",descricao:" Minimize riscos em suas contratações com a MIA, nossa Inteligência Artificial especializada em  avaliação de perigos. Ela analisa dados complexos e identifica potenciais vulnerabilidades,  fornecendo insights cruciais para decisões mais seguras e eficientes. Confie na MIA para  proteger seus projetos. "})))}const zr=We.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    width: calc(100% - 4rem);
    background: #003366;
    margin: 0.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`,Br=We.label`
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
`,Nr=We.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1rem;
    width: 100%;
`,Yr=We.label`
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
`,Ur=We.label`
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
    color: #ffffff;
`,qr=We.img`
    height: 5rem;
    width: 6rem;
    border-radius: 0.9rem;
    background: blue;
    margin: 1.5rem;
`;function Xr(t){let{numero:e,titulo:n,data:r,imagem:o,style:s}=t;return i.createElement(zr,{style:s},i.createElement(Br,null,e),i.createElement(Nr,null,i.createElement(Yr,null,n),i.createElement(Ur,null,r)),i.createElement(qr,{src:o}))}const Wr=We.button`
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
`;function Gr(){return i.createElement(Wr,null,"Mais notícias")}const $r=We.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    min-height: 65rem;
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
`,Hr=We.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,Kr=We.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem;
    min-width: 50rem;

    @media (max-width: 768px) {
        min-width: 100%;
        margin: 0;
    }
`,Zr=We.img`
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
`,Jr=We.div`
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
`,Qr=We.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    height: 10rem;
    width: 100%;
`;function _r(){return i.createElement($r,null,i.createElement(Qr,null,"Notícias"),i.createElement(Hr,null,i.createElement(Kr,null,i.createElement(Zr,{src:Bi})),i.createElement(Jr,null,i.createElement(Xr,{numero:"4°",titulo:"Quarta Notícia",data:"12 de maio",imagem:Li}),i.createElement(Xr,{numero:"5°",titulo:"Quinta Notícia",data:"11 de maio",imagem:Li}),i.createElement(Xr,{numero:"6°",titulo:"Sexta Notícia",data:"10 de maio",imagem:Li}),i.createElement(Xr,{numero:"7°",titulo:"Sétima Notícia",data:"10 de maio",imagem:Li}))),i.createElement(Gr,null))}function to(t){if("undefined"==typeof Proxy)return t;const e=new Map;return new Proxy(((...e)=>t(...e)),{get:(n,i)=>"create"===i?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}function eo(t){return null!==t&&"object"==typeof t&&"function"==typeof t.start}function no(t){const e=[{},{}];return t?.values.forEach(((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()})),e}function io(t,e,n,i){if("function"==typeof e){const[r,o]=no(i);e=e(void 0!==n?n:t.custom,r,o)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){const[r,o]=no(i);e=e(void 0!==n?n:t.custom,r,o)}return e}function ro(t,e,n){const i=t.getProps();return io(i,e,void 0!==n?n:i.custom,t)}function oo(t,e){return t?.[e]??t?.default??t}const so=t=>t,ao={},lo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],co={value:null,addProjectionMetrics:null};function uo(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=lo.reduce(((t,n)=>(t[n]=function(t,e){let n=new Set,i=new Set,r=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function c(e){s.has(e)&&(u.schedule(e),t()),l++,e(a)}const u={schedule:(t,e=!1,o=!1)=>{const a=o&&r?n:i;return e&&s.add(t),a.has(t)||a.add(t),t},cancel:t=>{i.delete(t),s.delete(t)},process:t=>{a=t,r?o=!0:(r=!0,[n,i]=[i,n],n.forEach(c),e&&co.value&&co.value.frameloop[e].push(l),l=0,n.clear(),r=!1,o&&(o=!1,u.process(t)))}};return u}(o,e?n:void 0),t)),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:m,preRender:d,render:h,postRender:p}=s,f=()=>{const o=ao.useManualTiming?r.timestamp:performance.now();n=!1,ao.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(o-r.timestamp,40),1)),r.timestamp=o,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),m.process(r),d.process(r),h.process(r),p.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(f))};return{schedule:lo.reduce(((e,o)=>{const a=s[o];return e[o]=(e,o=!1,s=!1)=>(n||(n=!0,i=!0,r.isProcessing||t(f)),a.schedule(e,o,s)),e}),{}),cancel:t=>{for(let e=0;e<lo.length;e++)s[lo[e]].cancel(t)},state:r,steps:s}}const{schedule:mo,cancel:ho,state:po,steps:fo}=uo("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:so,!0),go=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],yo=(()=>new Set(go))(),vo=new Set(["width","height","top","left","right","bottom",...go]);function bo(t,e){-1===t.indexOf(e)&&t.push(e)}function xo(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class wo{constructor(){this.subscriptions=[]}add(t){return bo(this.subscriptions,t),()=>xo(this.subscriptions,t)}notify(t,e,n){const i=this.subscriptions.length;if(i)if(1===i)this.subscriptions[0](t,e,n);else for(let r=0;r<i;r++){const i=this.subscriptions[r];i&&i(t,e,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Eo(t,e){return e?t*(1e3/e):0}let Ao;function So(){Ao=void 0}const Po={now:()=>(void 0===Ao&&Po.set(po.isProcessing||ao.useManualTiming?po.timestamp:performance.now()),Ao),set:t=>{Ao=t,queueMicrotask(So)}},ko={current:void 0};class To{constructor(t,e={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(t,e=!0)=>{const n=Po.now();if(this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(t),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const i of this.dependents)i.dirty();e&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){var e;this.current=t,this.updatedAt=Po.now(),null===this.canTrackVelocity&&void 0!==t&&(this.canTrackVelocity=(e=this.current,!isNaN(parseFloat(e))))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new wo);const n=this.events[t].add(e);return"change"===t?()=>{n(),mo.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}setWithVelocity(t,e,n){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return ko.current&&ko.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Po.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Eo(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise((e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Co(t,e){return new To(t,e)}const Mo=t=>Array.isArray(t);function jo(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Co(n))}function Do(t){return Mo(t)?t[t.length-1]||0:t}const Ro=t=>Boolean(t&&t.getVelocity);function Vo(t,e){const n=t.getValue("willChange");if(i=n,Boolean(Ro(i)&&i.add))return n.add(e);if(!n&&ao.WillChange){const n=new ao.WillChange("auto");t.addValue("willChange",n),n.add(e)}var i}const Oo=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Fo="data-"+Oo("framerAppearId");function Io(t){return t.props[Fo]}const Lo=(t,e)=>n=>e(t(n)),zo=(...t)=>t.reduce(Lo),Bo=(t,e,n)=>n>e?e:n<t?t:n,No=t=>1e3*t,Yo=t=>t/1e3,Uo={layout:0,mainThread:0,waapi:0};const qo=t=>e=>"string"==typeof e&&e.startsWith(t),Xo=qo("--"),Wo=qo("var(--"),Go=t=>!!Wo(t)&&$o.test(t.split("/*")[0].trim()),$o=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ho={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},Ko={...Ho,transform:t=>Bo(0,1,t)},Zo={...Ho,default:1},Jo=t=>Math.round(1e5*t)/1e5,Qo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const _o=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ts=(t,e)=>n=>Boolean("string"==typeof n&&_o.test(n)&&n.startsWith(t)||e&&!function(t){return null==t}(n)&&Object.prototype.hasOwnProperty.call(n,e)),es=(t,e,n)=>i=>{if("string"!=typeof i)return i;const[r,o,s,a]=i.match(Qo);return{[t]:parseFloat(r),[e]:parseFloat(o),[n]:parseFloat(s),alpha:void 0!==a?parseFloat(a):1}},ns={...Ho,transform:t=>Math.round((t=>Bo(0,255,t))(t))},is={test:ts("rgb","red"),parse:es("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+ns.transform(t)+", "+ns.transform(e)+", "+ns.transform(n)+", "+Jo(Ko.transform(i))+")"};const rs={test:ts("#"),parse:function(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}},transform:is.transform},os=t=>({test:e=>"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),ss=os("deg"),as=os("%"),ls=os("px"),cs=os("vh"),us=os("vw"),ms=(()=>({...as,parse:t=>as.parse(t)/100,transform:t=>as.transform(100*t)}))(),ds={test:ts("hsl","hue"),parse:es("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+as.transform(Jo(e))+", "+as.transform(Jo(n))+", "+Jo(Ko.transform(i))+")"},hs={test:t=>is.test(t)||rs.test(t)||ds.test(t),parse:t=>is.test(t)?is.parse(t):ds.test(t)?ds.parse(t):rs.parse(t),transform:t=>"string"==typeof t?t:t.hasOwnProperty("red")?is.transform(t):ds.transform(t)},ps=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const fs="number",gs="color",ys=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function vs(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let o=0;const s=e.replace(ys,(t=>(hs.test(t)?(i.color.push(o),r.push(gs),n.push(hs.parse(t))):t.startsWith("var(")?(i.var.push(o),r.push("var"),n.push(t)):(i.number.push(o),r.push(fs),n.push(parseFloat(t))),++o,"${}"))).split("${}");return{values:n,split:s,indexes:i,types:r}}function bs(t){return vs(t).values}function xs(t){const{split:e,types:n}=vs(t),i=e.length;return t=>{let r="";for(let o=0;o<i;o++)if(r+=e[o],void 0!==t[o]){const e=n[o];r+=e===fs?Jo(t[o]):e===gs?hs.transform(t[o]):t[o]}return r}}const ws=t=>"number"==typeof t?0:t;const Es={test:function(t){return isNaN(t)&&"string"==typeof t&&(t.match(Qo)?.length||0)+(t.match(ps)?.length||0)>0},parse:bs,createTransformer:xs,getAnimatableNone:function(t){const e=bs(t);return xs(t)(e.map(ws))}};function As(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Ss(t,e){return n=>n>0?e:t}const Ps=(t,e,n)=>t+(e-t)*n,ks=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},Ts=[rs,is,ds];function Cs(t){const e=(t=>Ts.find((e=>e.test(t))))(t);if(Boolean(e),!Boolean(e))return!1;let n=e.parse(t);return e===ds&&(n=function({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,n/=100;let r=0,o=0,s=0;if(e/=100){const i=n<.5?n*(1+e):n+e-n*e,a=2*n-i;r=As(a,i,t+1/3),o=As(a,i,t),s=As(a,i,t-1/3)}else r=o=s=n;return{red:Math.round(255*r),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const Ms=(t,e)=>{const n=Cs(t),i=Cs(e);if(!n||!i)return Ss(t,e);const r={...n};return t=>(r.red=ks(n.red,i.red,t),r.green=ks(n.green,i.green,t),r.blue=ks(n.blue,i.blue,t),r.alpha=Ps(n.alpha,i.alpha,t),is.transform(r))},js=new Set(["none","hidden"]);function Ds(t,e){return n=>Ps(t,e,n)}function Rs(t){return"number"==typeof t?Ds:"string"==typeof t?Go(t)?Ss:hs.test(t)?Ms:Fs:Array.isArray(t)?Vs:"object"==typeof t?hs.test(t)?Ms:Os:Ss}function Vs(t,e){const n=[...t],i=n.length,r=t.map(((t,n)=>Rs(t)(t,e[n])));return t=>{for(let e=0;e<i;e++)n[e]=r[e](t);return n}}function Os(t,e){const n={...t,...e},i={};for(const r in n)void 0!==t[r]&&void 0!==e[r]&&(i[r]=Rs(t[r])(t[r],e[r]));return t=>{for(const e in i)n[e]=i[e](t);return n}}const Fs=(t,e)=>{const n=Es.createTransformer(e),i=vs(t),r=vs(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?js.has(t)&&!r.values.length||js.has(e)&&!i.values.length?function(t,e){return js.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}(t,e):zo(Vs(function(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],s=t.indexes[o][i[o]],a=t.values[s]??0;n[r]=a,i[o]++}return n}(i,r),r.values),n):Ss(t,e)};function Is(t,e,n){if("number"==typeof t&&"number"==typeof e&&"number"==typeof n)return Ps(t,e,n);return Rs(t)(t,e)}const Ls=t=>{const e=({timestamp:e})=>t(e);return{start:(t=!0)=>mo.update(e,t),stop:()=>ho(e),now:()=>po.isProcessing?po.timestamp:Po.now()}},zs=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let o=0;o<r;o++)i+=t(o/(r-1))+", ";return`linear(${i.substring(0,i.length-2)})`},Bs=2e4;function Ns(t){let e=0;let n=t.next(e);for(;!n.done&&e<Bs;)e+=50,n=t.next(e);return e>=Bs?1/0:e}function Ys(t,e,n){const i=Math.max(e-5,0);return Eo(n-t(i),e-i)}const Us=100,qs=10,Xs=1,Ws=0,Gs=800,$s=.3,Hs=.3,Ks={granular:.01,default:2},Zs={granular:.005,default:.5},Js=.01,Qs=10,_s=.05,ta=1,ea=.001;function na({duration:t=Gs,bounce:e=$s,velocity:n=Ws,mass:i=Xs}){let r,o;No(Qs);let s=1-e;s=Bo(_s,ta,s),t=Bo(Js,Qs,Yo(t)),s<1?(r=e=>{const i=e*s,r=i*t,o=i-n,a=ra(e,s),l=Math.exp(-r);return ea-o/a*l},o=e=>{const i=e*s*t,o=i*n+n,a=Math.pow(s,2)*Math.pow(e,2)*t,l=Math.exp(-i),c=ra(Math.pow(e,2),s);return(-r(e)+ea>0?-1:1)*((o-a)*l)/c}):(r=e=>Math.exp(-e*t)*((e-n)*t+1)-.001,o=e=>Math.exp(-e*t)*(t*t*(n-e)));const a=function(t,e,n){let i=n;for(let r=1;r<ia;r++)i-=t(i)/e(i);return i}(r,o,5/t);if(t=No(t),isNaN(a))return{stiffness:Us,damping:qs,duration:t};{const e=Math.pow(a,2)*i;return{stiffness:e,damping:2*s*Math.sqrt(i*e),duration:t}}}const ia=12;function ra(t,e){return t*Math.sqrt(1-e*e)}const oa=["duration","bounce"],sa=["stiffness","damping","mass"];function aa(t,e){return e.some((e=>void 0!==t[e]))}function la(t=Hs,e=$s){const n="object"!=typeof t?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:m,velocity:d,isResolvedFromDuration:h}=function(t){let e={velocity:Ws,stiffness:Us,damping:qs,mass:Xs,isResolvedFromDuration:!1,...t};if(!aa(t,sa)&&aa(t,oa))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(1.2*n),r=i*i,o=2*Bo(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Xs,stiffness:r,damping:o}}else{const n=na(t);e={...e,...n,mass:Xs},e.isResolvedFromDuration=!0}return e}({...n,velocity:-Yo(n.velocity||0)}),p=d||0,f=c/(2*Math.sqrt(l*u)),g=s-o,y=Yo(Math.sqrt(l/u)),v=Math.abs(g)<5;let b;if(i||(i=v?Ks.granular:Ks.default),r||(r=v?Zs.granular:Zs.default),f<1){const t=ra(y,f);b=e=>{const n=Math.exp(-f*y*e);return s-n*((p+f*y*g)/t*Math.sin(t*e)+g*Math.cos(t*e))}}else if(1===f)b=t=>s-Math.exp(-y*t)*(g+(p+y*g)*t);else{const t=y*Math.sqrt(f*f-1);b=e=>{const n=Math.exp(-f*y*e),i=Math.min(t*e,300);return s-n*((p+f*y*g)*Math.sinh(i)+t*g*Math.cosh(i))/t}}const x={calculatedDuration:h&&m||null,next:t=>{const e=b(t);if(h)a.done=t>=m;else{let n=0===t?p:0;f<1&&(n=0===t?No(p):Ys(b,t,e));const o=Math.abs(n)<=i,l=Math.abs(s-e)<=r;a.done=o&&l}return a.value=a.done?s:e,a},toString:()=>{const t=Math.min(Ns(x),Bs),e=zs((e=>x.next(t*e).value),t,30);return t+"ms "+e},toTransition:()=>{}};return x}function ca({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:u}){const m=t[0],d={done:!1,value:m},h=t=>void 0===a?l:void 0===l||Math.abs(a-t)<Math.abs(l-t)?a:l;let p=n*e;const f=m+p,g=void 0===s?f:s(f);g!==f&&(p=g-m);const y=t=>-p*Math.exp(-t/i),v=t=>g+y(t),b=t=>{const e=y(t),n=v(t);d.done=Math.abs(e)<=c,d.value=d.done?g:n};let x,w;const E=t=>{(t=>void 0!==a&&t<a||void 0!==l&&t>l)(d.value)&&(x=t,w=la({keyframes:[d.value,h(d.value)],velocity:Ys(v,t,d.value),damping:r,stiffness:o,restDelta:c,restSpeed:u}))};return E(0),{calculatedDuration:null,next:t=>{let e=!1;return w||void 0!==x||(e=!0,b(t),E(t)),void 0!==x&&t>=x?w.next(t-x):(!e&&b(t),d)}}}la.applyToOptions=t=>{const e=function(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Ns(i),Bs);return{type:"keyframes",ease:t=>i.next(r*t).value/e,duration:Yo(r)}}(t,100,la);return t.ease=e.ease,t.duration=No(e.duration),t.type="keyframes",t};const ua=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t;function ma(t,e,n,i){if(t===e&&n===i)return so;const r=e=>function(t,e,n,i,r){let o,s,a=0;do{s=e+(n-e)/2,o=ua(s,i,r)-t,o>0?n=s:e=s}while(Math.abs(o)>1e-7&&++a<12);return s}(e,0,1,t,n);return t=>0===t||1===t?t:ua(r(t),e,i)}const da=ma(.42,0,1,1),ha=ma(0,0,.58,1),pa=ma(.42,0,.58,1),fa=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ga=t=>e=>1-t(1-e),ya=ma(.33,1.53,.69,.99),va=ga(ya),ba=fa(va),xa=t=>(t*=2)<1?.5*va(t):.5*(2-Math.pow(2,-10*(t-1))),wa=t=>1-Math.sin(Math.acos(t)),Ea=ga(wa),Aa=fa(wa),Sa=t=>Array.isArray(t)&&"number"==typeof t[0],Pa={linear:so,easeIn:da,easeInOut:pa,easeOut:ha,circIn:wa,circInOut:Aa,circOut:Ea,backIn:va,backInOut:ba,backOut:ya,anticipate:xa},ka=t=>{if(Sa(t)){t.length;const[e,n,i,r]=t;return ma(e,n,i,r)}return"string"==typeof t?Pa[t]:t},Ta=(t,e,n)=>{const i=e-t;return 0===i?1:(n-t)/i};function Ca(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const o=t.length;if(e.length,1===o)return()=>e[0];if(2===o&&e[0]===e[1])return()=>e[1];const s=t[0]===t[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=function(t,e,n){const i=[],r=n||ao.mix||Is,o=t.length-1;for(let s=0;s<o;s++){let n=r(t[s],t[s+1]);if(e){const t=Array.isArray(e)?e[s]||so:e;n=zo(t,n)}i.push(n)}return i}(e,i,r),l=a.length,c=n=>{if(s&&n<t[0])return e[0];let i=0;if(l>1)for(;i<t.length-2&&!(n<t[i+1]);i++);const r=Ta(t[i],t[i+1],n);return a[i](r)};return n?e=>c(Bo(t[0],t[o-1],e)):c}function Ma(t){const e=[0];return function(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ta(0,e,i);t.push(Ps(n,1,r))}}(e,t.length-1),e}function ja({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=(t=>Array.isArray(t)&&"number"!=typeof t[0])(i)?i.map(ka):ka(i),o={done:!1,value:e[0]},s=function(t,e){return t.map((t=>t*e))}(n&&n.length===e.length?n:Ma(e),t),a=Ca(s,e,{ease:Array.isArray(r)?r:(l=e,c=r,l.map((()=>c||pa)).splice(0,l.length-1))});var l,c;return{calculatedDuration:t,next:e=>(o.value=a(e),o.done=e>=t,o)}}const Da=t=>null!==t;function Ra(t,{repeat:e,repeatType:n="loop"},i,r=1){const o=t.filter(Da),s=r<0||e&&"loop"!==n&&e%2==1?0:o.length-1;return s&&void 0!==i?i:o[s]}const Va={decay:ca,inertia:ca,tween:ja,keyframes:ja,spring:la};function Oa(t){"string"==typeof t.type&&(t.type=Va[t.type])}class Fa{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise((t=>{this.resolve=t}))}notifyFinished(){this.resolve()}then(t,e){return this.finished.then(t,e)}}const Ia=t=>t/100;class La extends Fa{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=(t=!0)=>{if(t){const{motionValue:t}=this.options;t&&t.updatedAt!==Po.now()&&this.tick(Po.now())}this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},Uo.mainThread++,this.options=t,this.initAnimation(),this.play(),!1===t.autoplay&&this.pause()}initAnimation(){const{options:t}=this;Oa(t);const{type:e=ja,repeat:n=0,repeatDelay:i=0,repeatType:r,velocity:o=0}=t;let{keyframes:s}=t;const a=e||ja;a!==ja&&"number"!=typeof s[0]&&(this.mixKeyframes=zo(Ia,Is(s[0],s[1])),s=[0,100]);const l=a({...t,keyframes:s});"mirror"===r&&(this.mirroredGenerator=a({...t,keyframes:[...s].reverse(),velocity:-o})),null===l.calculatedDuration&&(l.calculatedDuration=Ns(l));const{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+i,this.totalDuration=this.resolvedDuration*(n+1)-i,this.generator=l}updateTime(t){const e=Math.round(t-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=e}tick(t,e=!1){const{generator:n,totalDuration:i,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:s,calculatedDuration:a}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:c,repeat:u,repeatType:m,repeatDelay:d,type:h,onUpdate:p,finalKeyframe:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),e?this.currentTime=t:this.updateTime(t);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=i);let v=this.currentTime,b=n;if(u){const t=Math.min(this.currentTime,i)/s;let e=Math.floor(t),n=t%1;!n&&t>=1&&(n=1),1===n&&e--,e=Math.min(e,u+1);Boolean(e%2)&&("reverse"===m?(n=1-n,d&&(n-=d/s)):"mirror"===m&&(b=o)),v=Bo(0,1,n)*s}const x=y?{done:!1,value:c[0]}:b.next(v);r&&(x.value=r(x.value));let{done:w}=x;y||null===a||(w=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return E&&h!==ca&&(x.value=Ra(c,this.options,f,this.speed)),p&&p(x.value),E&&this.finish(),x}then(t,e){return this.finished.then(t,e)}get duration(){return Yo(this.calculatedDuration)}get time(){return Yo(this.currentTime)}set time(t){t=No(t),this.currentTime=t,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Po.now());const e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=Yo(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=Ls,startTime:e}=this.options;this.driver||(this.driver=t((t=>this.tick(t)))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=e??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Po.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,Uo.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}const za=t=>180*t/Math.PI,Ba=t=>{const e=za(Math.atan2(t[1],t[0]));return Ya(e)},Na={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Ba,rotateZ:Ba,skewX:t=>za(Math.atan(t[1])),skewY:t=>za(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Ya=t=>((t%=360)<0&&(t+=360),t),Ua=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),qa=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Xa={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ua,scaleY:qa,scale:t=>(Ua(t)+qa(t))/2,rotateX:t=>Ya(za(Math.atan2(t[6],t[5]))),rotateY:t=>Ya(za(Math.atan2(-t[2],t[0]))),rotateZ:Ba,rotate:Ba,skewX:t=>za(Math.atan(t[4])),skewY:t=>za(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Wa(t){return t.includes("scale")?1:0}function Ga(t,e){if(!t||"none"===t)return Wa(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=Xa,r=n;else{const e=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=Na,r=e}if(!r)return Wa(e);const o=i[e],s=r[1].split(",").map($a);return"function"==typeof o?o(s):s[o]}function $a(t){return parseFloat(t.trim())}const Ha=t=>t===Ho||t===ls,Ka=new Set(["x","y","z"]),Za=go.filter((t=>!Ka.has(t)));const Ja={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Ga(e,"x"),y:(t,{transform:e})=>Ga(e,"y")};Ja.translateX=Ja.x,Ja.translateY=Ja.y;const Qa=new Set;let _a=!1,tl=!1,el=!1;function nl(){if(tl){const t=Array.from(Qa).filter((t=>t.needsMeasurement)),e=new Set(t.map((t=>t.element))),n=new Map;e.forEach((t=>{const e=function(t){const e=[];return Za.forEach((n=>{const i=t.getValue(n);void 0!==i&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))})),e}(t);e.length&&(n.set(t,e),t.render())})),t.forEach((t=>t.measureInitialState())),e.forEach((t=>{t.render();const e=n.get(t);e&&e.forEach((([e,n])=>{t.getValue(e)?.set(n)}))})),t.forEach((t=>t.measureEndState())),t.forEach((t=>{void 0!==t.suspendedScrollY&&window.scrollTo(0,t.suspendedScrollY)}))}tl=!1,_a=!1,Qa.forEach((t=>t.complete(el))),Qa.clear()}function il(){Qa.forEach((t=>{t.readKeyframes(),t.needsMeasurement&&(tl=!0)}))}class rl{constructor(t,e,n,i,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=n,this.motionValue=i,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Qa.add(this),_a||(_a=!0,mo.read(il),mo.resolveKeyframes(nl))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:n,motionValue:i}=this;if(null===t[0]){const r=i?.get(),o=t[t.length-1];if(void 0!==r)t[0]=r;else if(n&&e){const i=n.readValue(e,o);null!=i&&(t[0]=i)}void 0===t[0]&&(t[0]=o),i&&void 0===r&&i.set(t[0])}!function(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Qa.delete(this)}cancel(){"scheduled"===this.state&&(Qa.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}function ol(t){let e;return()=>(void 0===e&&(e=t()),e)}const sl=ol((()=>void 0!==window.ScrollTimeline)),al={};function ll(t,e){const n=ol(t);return()=>al[e]??n()}const cl=ll((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}),"linearEasing"),ul=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,ml={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ul([0,.65,.55,1]),circOut:ul([.55,0,1,.45]),backIn:ul([.31,.01,.66,-.59]),backOut:ul([.33,1.53,.69,.99])};function dl(t,e){return t?"function"==typeof t?cl()?zs(t,e):"ease-out":Sa(t)?ul(t):Array.isArray(t)?t.map((t=>dl(t,e)||ml.easeOut)):ml[t]:void 0}function hl(t,e,n,{delay:i=0,duration:r=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const m=dl(a,r);Array.isArray(m)&&(u.easing=m),co.value&&Uo.waapi++;const d={delay:i,duration:r,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:o+1,direction:"reverse"===s?"alternate":"normal"};c&&(d.pseudoElement=c);const h=t.animate(u,d);return co.value&&h.finished.finally((()=>{Uo.waapi--})),h}function pl(t){return"function"==typeof t&&"applyToOptions"in t}class fl extends Fa{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:e,name:n,keyframes:i,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:s,onComplete:a}=t;this.isPseudoElement=Boolean(r),this.allowFlatten=o,this.options=t,t.type;const l=function({type:t,...e}){return pl(t)&&cl()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}(t);this.animation=hl(e,n,i,l,r),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const t=Ra(i,this.options,s,this.speed);this.updateMotionValue?this.updateMotionValue(t):function(t,e,n){(t=>t.startsWith("--"))(e)?t.style.setProperty(e,n):t.style[e]=n}(e,n,t),this.animation.cancel()}a?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(t){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;"idle"!==t&&"finished"!==t&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Yo(Number(t))}get time(){return Yo(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=No(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:e}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&sl()?(this.animation.timeline=t,so):e(this)}}const gl={anticipate:xa,backInOut:ba,circInOut:Aa};function yl(t){"string"==typeof t.ease&&t.ease in gl&&(t.ease=gl[t.ease])}class vl extends fl{constructor(t){yl(t),Oa(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:e,onUpdate:n,onComplete:i,element:r,...o}=this.options;if(!e)return;if(void 0!==t)return void e.set(t);const s=new La({...o,autoplay:!1}),a=No(this.finishedTime??this.time);e.setWithVelocity(s.sample(a-10).value,s.sample(a).value,10),s.stop()}}const bl=(t,e)=>"zIndex"!==e&&(!("number"!=typeof t&&!Array.isArray(t))||!("string"!=typeof t||!Es.test(t)&&"0"!==t||t.startsWith("url(")));const xl=new Set(["opacity","clipPath","filter","transform"]),wl=ol((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));class El extends Fa{constructor({autoplay:t=!0,delay:e=0,type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:o="loop",keyframes:s,name:a,motionValue:l,element:c,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Po.now();const m={autoplay:t,delay:e,type:n,repeat:i,repeatDelay:r,repeatType:o,name:a,motionValue:l,element:c,...u},d=c?.KeyframeResolver||rl;this.keyframeResolver=new d(s,((t,e,n)=>this.onKeyframesResolved(t,e,m,!n)),a,l,c),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,e,n,i){this.keyframeResolver=void 0;const{name:r,type:o,velocity:s,delay:a,isHandoff:l,onUpdate:c}=n;this.resolvedAt=Po.now(),function(t,e,n,i){const r=t[0];if(null===r)return!1;if("display"===e||"visibility"===e)return!0;const o=t[t.length-1],s=bl(r,e),a=bl(o,e);return!(!s||!a)&&(function(t){const e=t[0];if(1===t.length)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}(t)||("spring"===n||pl(n))&&i)}(t,r,o,s)||(!ao.instantAnimations&&a||c?.(Ra(t,n,e)),t[0]=t[t.length-1],n.duration=0,n.repeat=0);const u={startTime:i?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:e,...n,keyframes:t},m=!l&&function(t){const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:o,type:s}=t;if(!(e&&e.owner&&e.owner.current instanceof HTMLElement))return!1;const{onUpdate:a,transformTemplate:l}=e.owner.getProps();return wl()&&n&&xl.has(n)&&("transform"!==n||!l)&&!a&&!i&&"mirror"!==r&&0!==o&&"inertia"!==s}(u)?new vl({...u,element:u.motionValue.owner.current}):new La(u);m.finished.then((()=>this.notifyFinished())).catch(so),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(t,e){return this.finished.finally(t).then((()=>{}))}get animation(){return this._animation||(this.keyframeResolver?.resume(),el=!0,il(),nl(),el=!1),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Al=t=>null!==t;const Sl={type:"spring",stiffness:500,damping:25,restSpeed:10},Pl={type:"keyframes",duration:.8},kl={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Tl=(t,{keyframes:e})=>e.length>2?Pl:yo.has(t)?t.startsWith("scale")?{type:"spring",stiffness:550,damping:0===e[1]?2*Math.sqrt(550):30,restSpeed:10}:Sl:kl;const Cl=(t,e,n,i={},r,o)=>s=>{const a=oo(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c-=No(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:t=>{e.set(t),a.onUpdate&&a.onUpdate(t)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:o?void 0:r};(function({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length})(a)||Object.assign(u,Tl(t,u)),u.duration&&(u.duration=No(u.duration)),u.repeatDelay&&(u.repeatDelay=No(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let m=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(m=!0)),(ao.instantAnimations||ao.skipAnimations)&&(m=!0,u.duration=0,u.delay=0),u.allowFlatten=!a.type&&!a.ease,m&&!o&&void 0!==e.get()){const t=function(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(Al),o=e&&"loop"!==n&&e%2==1?0:r.length-1;return o&&void 0!==i?i:r[o]}(u.keyframes,a);if(void 0!==t)return void mo.update((()=>{u.onUpdate(t),u.onComplete()}))}return a.isSync?new La(u):new El(u)};function Ml({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&!0!==e[n];return e[n]=!1,i}function jl(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:s,...a}=e;i&&(o=i);const l=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const u in a){const e=t.getValue(u,t.latestValues[u]??null),i=a[u];if(void 0===i||c&&Ml(c,u))continue;const r={delay:n,...oo(o||{},u)},s=e.get();if(void 0!==s&&!e.isAnimating&&!Array.isArray(i)&&i===s&&!r.velocity)continue;let m=!1;if(window.MotionHandoffAnimation){const e=Io(t);if(e){const t=window.MotionHandoffAnimation(e,u,mo);null!==t&&(r.startTime=t,m=!0)}}Vo(t,u),e.start(Cl(u,e,i,t.shouldReduceMotion&&vo.has(u)?{type:!1}:r,t,m));const d=e.animation;d&&l.push(d)}return s&&Promise.all(l).then((()=>{mo.update((()=>{s&&function(t,e){const n=ro(t,e);let{transitionEnd:i={},transition:r={},...o}=n||{};o={...o,...i};for(const s in o)jo(t,s,Do(o[s]))}(t,s)}))})),l}function Dl(t,e,n={}){const i=ro(t,e,"exit"===n.type?t.presenceContext?.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const o=i?()=>Promise.all(jl(t,i,n)):()=>Promise.resolve(),s=t.variantChildren&&t.variantChildren.size?(i=0)=>{const{delayChildren:o=0,staggerChildren:s,staggerDirection:a}=r;return function(t,e,n=0,i=0,r=1,o){const s=[],a=(t.variantChildren.size-1)*i,l=1===r?(t=0)=>t*i:(t=0)=>a-t*i;return Array.from(t.variantChildren).sort(Rl).forEach(((t,i)=>{t.notify("AnimationStart",e),s.push(Dl(t,e,{...o,delay:n+l(i)}).then((()=>t.notify("AnimationComplete",e))))})),Promise.all(s)}(t,e,o+i,s,a,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[t,e]="beforeChildren"===a?[o,s]:[s,o];return t().then((()=>e()))}return Promise.all([o(),s(n.delay)])}function Rl(t,e){return t.sortNodePosition(e)}function Vl(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Ol(t){return"string"==typeof t||Array.isArray(t)}const Fl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Il=["initial",...Fl],Ll=Il.length;function zl(t){if(!t)return;if(!t.isControllingVariants){const e=t.parent&&zl(t.parent)||{};return void 0!==t.props.initial&&(e.initial=t.props.initial),e}const e={};for(let n=0;n<Ll;n++){const i=Il[n],r=t.props[i];(Ol(r)||!1===r)&&(e[i]=r)}return e}const Bl=[...Fl].reverse(),Nl=Fl.length;function Yl(t){return e=>Promise.all(e.map((({animation:e,options:n})=>function(t,e,n={}){let i;if(t.notify("AnimationStart",e),Array.isArray(e)){const r=e.map((e=>Dl(t,e,n)));i=Promise.all(r)}else if("string"==typeof e)i=Dl(t,e,n);else{const r="function"==typeof e?ro(t,e,n.custom):e;i=Promise.all(jl(t,r,n))}return i.then((()=>{t.notify("AnimationComplete",e)}))}(t,e,n))))}function Ul(t){let e=Yl(t),n=Wl(),i=!0;const r=e=>(n,i)=>{const r=ro(t,i,"exit"===e?t.presenceContext?.custom:void 0);if(r){const{transition:t,transitionEnd:e,...i}=r;n={...n,...i,...e}}return n};function o(o){const{props:s}=t,a=zl(t.parent)||{},l=[],c=new Set;let u={},m=1/0;for(let e=0;e<Nl;e++){const d=Bl[e],h=n[d],p=void 0!==s[d]?s[d]:a[d],f=Ol(p),g=d===o?h.isActive:null;!1===g&&(m=e);let y=p===a[d]&&p!==s[d]&&f;if(y&&i&&t.manuallyAnimateOnMount&&(y=!1),h.protectedKeys={...u},!h.isActive&&null===g||!p&&!h.prevProp||eo(p)||"boolean"==typeof p)continue;const v=ql(h.prevProp,p);let b=v||d===o&&h.isActive&&!y&&f||e>m&&f,x=!1;const w=Array.isArray(p)?p:[p];let E=w.reduce(r(d),{});!1===g&&(E={});const{prevResolvedValues:A={}}=h,S={...A,...E},P=e=>{b=!0,c.has(e)&&(x=!0,c.delete(e)),h.needsAnimating[e]=!0;const n=t.getValue(e);n&&(n.liveStyle=!1)};for(const t in S){const e=E[t],n=A[t];if(u.hasOwnProperty(t))continue;let i=!1;i=Mo(e)&&Mo(n)?!Vl(e,n):e!==n,i?null!=e?P(t):c.add(t):void 0!==e&&c.has(t)?P(t):h.protectedKeys[t]=!0}h.prevProp=p,h.prevResolvedValues=E,h.isActive&&(u={...u,...E}),i&&t.blockInitialAnimation&&(b=!1);b&&(!(y&&v)||x)&&l.push(...w.map((t=>({animation:t,options:{type:d}}))))}if(c.size){const e={};if("boolean"!=typeof s.initial){const n=ro(t,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(e.transition=n.transition)}c.forEach((n=>{const i=t.getBaseTarget(n),r=t.getValue(n);r&&(r.liveStyle=!0),e[n]=i??null})),l.push({animation:e})}let d=Boolean(l.length);return!i||!1!==s.initial&&s.initial!==s.animate||t.manuallyAnimateOnMount||(d=!1),i=!1,d?e(l):Promise.resolve()}return{animateChanges:o,setActive:function(e,i){if(n[e].isActive===i)return Promise.resolve();t.variantChildren?.forEach((t=>t.animationState?.setActive(e,i))),n[e].isActive=i;const r=o(e);for(const t in n)n[t].protectedKeys={};return r},setAnimateFunction:function(n){e=n(t)},getState:()=>n,reset:()=>{n=Wl(),i=!0}}}function ql(t,e){return"string"==typeof e?e!==t:!!Array.isArray(e)&&!Vl(e,t)}function Xl(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Wl(){return{animate:Xl(!0),whileInView:Xl(),whileHover:Xl(),whileTap:Xl(),whileDrag:Xl(),whileFocus:Xl(),exit:Xl()}}class Gl{constructor(t){this.isMounted=!1,this.node=t}update(){}}let $l=0;const Hl={animation:{Feature:class extends Gl{constructor(t){super(t),t.animationState||(t.animationState=Ul(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();eo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Gl{constructor(){super(...arguments),this.id=$l++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;const i=this.node.animationState.setActive("exit",!t);e&&!t&&i.then((()=>{e(this.id)}))}mount(){const{register:t,onExitComplete:e}=this.node.presenceContext||{};e&&e(this.id),t&&(this.unmount=t(this.id))}unmount(){}}}},Kl={x:!1,y:!1};function Zl(){return Kl.x||Kl.y}function Jl(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Ql=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary;function _l(t){return{point:{x:t.pageX,y:t.pageY}}}function tc(t,e,n,i){return Jl(t,e,(t=>e=>Ql(e)&&t(e,_l(e)))(n),i)}function ec({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function nc(t){return t.max-t.min}function ic(t,e,n,i=.5){t.origin=i,t.originPoint=Ps(e.min,e.max,t.origin),t.scale=nc(n)/nc(e),t.translate=Ps(n.min,n.max,t.origin)-t.originPoint,(t.scale>=.9999&&t.scale<=1.0001||isNaN(t.scale))&&(t.scale=1),(t.translate>=-.01&&t.translate<=.01||isNaN(t.translate))&&(t.translate=0)}function rc(t,e,n,i){ic(t.x,e.x,n.x,i?i.originX:void 0),ic(t.y,e.y,n.y,i?i.originY:void 0)}function oc(t,e,n){t.min=n.min+e.min,t.max=t.min+nc(e)}function sc(t,e,n){t.min=e.min-n.min,t.max=t.min+nc(e)}function ac(t,e,n){sc(t.x,e.x,n.x),sc(t.y,e.y,n.y)}const lc=()=>({x:{min:0,max:0},y:{min:0,max:0}});function cc(t){return[t("x"),t("y")]}function uc(t){return void 0===t||1===t}function mc({scale:t,scaleX:e,scaleY:n}){return!uc(t)||!uc(e)||!uc(n)}function dc(t){return mc(t)||hc(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function hc(t){return pc(t.x)||pc(t.y)}function pc(t){return t&&"0%"!==t}function fc(t,e,n){return n+e*(t-n)}function gc(t,e,n,i,r){return void 0!==r&&(t=fc(t,r,i)),fc(t,n,i)+e}function yc(t,e=0,n=1,i,r){t.min=gc(t.min,e,n,i,r),t.max=gc(t.max,e,n,i,r)}function vc(t,{x:e,y:n}){yc(t.x,e.translate,e.scale,e.originPoint),yc(t.y,n.translate,n.scale,n.originPoint)}const bc=.999999999999,xc=1.0000000000001;function wc(t,e){t.min=t.min+e,t.max=t.max+e}function Ec(t,e,n,i,r=.5){yc(t,e,n,Ps(t.min,t.max,r),i)}function Ac(t,e){Ec(t.x,e.x,e.scaleX,e.scale,e.originX),Ec(t.y,e.y,e.scaleY,e.scale,e.originY)}function Sc(t,e){return ec(function(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}(t.getBoundingClientRect(),e))}const Pc=({current:t})=>t?t.ownerDocument.defaultView:null;function kc(t){return t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}const Tc=(t,e)=>Math.abs(t-e);class Cc{constructor(t,e,{transformPagePoint:n,contextWindow:i,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const t=Dc(this.lastMoveEventInfo,this.history),e=null!==this.startEvent,n=function(t,e){const n=Tc(t.x,e.x),i=Tc(t.y,e.y);return Math.sqrt(n**2+i**2)}(t.offset,{x:0,y:0})>=3;if(!e&&!n)return;const{point:i}=t,{timestamp:r}=po;this.history.push({...i,timestamp:r});const{onStart:o,onMove:s}=this.handlers;e||(o&&o(this.lastMoveEvent,t),this.startEvent=this.lastMoveEvent),s&&s(this.lastMoveEvent,t)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=Mc(e,this.transformPagePoint),mo.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{this.end();const{onEnd:n,onSessionEnd:i,resumeAnimation:r}=this.handlers;if(this.dragSnapToOrigin&&r&&r(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=Dc("pointercancel"===t.type?this.lastMoveEventInfo:Mc(e,this.transformPagePoint),this.history);this.startEvent&&n&&n(t,o),i&&i(t,o)},!Ql(t))return;this.dragSnapToOrigin=r,this.handlers=e,this.transformPagePoint=n,this.contextWindow=i||window;const o=Mc(_l(t),this.transformPagePoint),{point:s}=o,{timestamp:a}=po;this.history=[{...s,timestamp:a}];const{onSessionStart:l}=e;l&&l(t,Dc(o,this.history)),this.removeListeners=zo(tc(this.contextWindow,"pointermove",this.handlePointerMove),tc(this.contextWindow,"pointerup",this.handlePointerUp),tc(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),ho(this.updatePoint)}}function Mc(t,e){return e?{point:e(t.point)}:t}function jc(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Dc({point:t},e){return{point:t,delta:jc(t,Vc(e)),offset:jc(t,Rc(e)),velocity:Oc(e,.1)}}function Rc(t){return t[0]}function Vc(t){return t[t.length-1]}function Oc(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=Vc(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>No(e)));)n--;if(!i)return{x:0,y:0};const o=Yo(r.timestamp-i.timestamp);if(0===o)return{x:0,y:0};const s={x:(r.x-i.x)/o,y:(r.y-i.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Fc(t,e,n){return{min:void 0!==e?t.min+e:void 0,max:void 0!==n?t.max+n-(t.max-t.min):void 0}}function Ic(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}const Lc=.35;function zc(t,e,n){return{min:Bc(t,e),max:Bc(t,n)}}function Bc(t,e){return"number"==typeof t?t:t[e]||0}const Nc=new WeakMap;class Yc{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=t}start(t,{snapToCursor:e=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new Cc(t,{onSessionStart:t=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor(_l(t).point)},onStart:(t,e)=>{const{drag:n,dragPropagation:i,onDragStart:r}=this.getProps();if(n&&!i&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(o=n)||"y"===o?Kl[o]?null:(Kl[o]=!0,()=>{Kl[o]=!1}):Kl.x||Kl.y?null:(Kl.x=Kl.y=!0,()=>{Kl.x=Kl.y=!1}),!this.openDragLock))return;var o;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),cc((t=>{let e=this.getAxisMotionValue(t).get()||0;if(as.test(e)){const{projection:n}=this.visualElement;if(n&&n.layout){const i=n.layout.layoutBox[t];if(i){e=nc(i)*(parseFloat(e)/100)}}}this.originPoint[t]=e})),r&&mo.postRender((()=>r(t,e))),Vo(this.visualElement,"transform");const{animationState:s}=this.visualElement;s&&s.setActive("whileDrag",!0)},onMove:(t,e)=>{const{dragPropagation:n,dragDirectionLock:i,onDirectionLock:r,onDrag:o}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:s}=e;if(i&&null===this.currentDirection)return this.currentDirection=function(t,e=10){let n=null;Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x");return n}(s),void(null!==this.currentDirection&&r&&r(this.currentDirection));this.updateAxis("x",e.point,s),this.updateAxis("y",e.point,s),this.visualElement.render(),o&&o(t,e)},onSessionEnd:(t,e)=>this.stop(t,e),resumeAnimation:()=>cc((t=>"paused"===this.getAnimationState(t)&&this.getAxisMotionValue(t).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:Pc(this.visualElement)})}stop(t,e){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:i}=e;this.startAnimation(i);const{onDragEnd:r}=this.getProps();r&&mo.postRender((()=>r(t,e)))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,n){const{drag:i}=this.getProps();if(!n||!Uc(t,i,this.currentDirection))return;const r=this.getAxisMotionValue(t);let o=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(o=function(t,{min:e,max:n},i){return void 0!==e&&t<e?t=i?Ps(e,t,i.min):Math.max(t,e):void 0!==n&&t>n&&(t=i?Ps(n,t,i.max):Math.min(t,n)),t}(o,this.constraints[t],this.elastic[t])),r.set(o)}resolveConstraints(){const{dragConstraints:t,dragElastic:e}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,i=this.constraints;t&&kc(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!n)&&function(t,{top:e,left:n,bottom:i,right:r}){return{x:Fc(t.x,n,r),y:Fc(t.y,e,i)}}(n.layoutBox,t),this.elastic=function(t=Lc){return!1===t?t=0:!0===t&&(t=Lc),{x:zc(t,"left","right"),y:zc(t,"top","bottom")}}(e),i!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&cc((t=>{!1!==this.constraints&&this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,e){const n={};return void 0!==e.min&&(n.min=e.min-t.min),void 0!==e.max&&(n.max=e.max-t.min),n}(n.layoutBox[t],this.constraints[t]))}))}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!kc(t))return!1;const n=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=function(t,e,n){const i=Sc(t,n),{scroll:r}=e;return r&&(wc(i.x,r.offset.x),wc(i.y,r.offset.y)),i}(n,i.root,this.visualElement.getTransformPagePoint());let o=function(t,e){return{x:Ic(t.x,e.x),y:Ic(t.y,e.y)}}(i.layout.layoutBox,r);if(e){const t=e(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(o));this.hasMutatedConstraints=!!t,t&&(o=ec(t))}return o}startAnimation(t){const{drag:e,dragMomentum:n,dragElastic:i,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),a=this.constraints||{},l=cc((s=>{if(!Uc(s,e,this.currentDirection))return;let l=a&&a[s]||{};o&&(l={min:0,max:0});const c=i?200:1e6,u=i?40:1e7,m={type:"inertia",velocity:n?t[s]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...r,...l};return this.startAxisValueAnimation(s,m)}));return Promise.all(l).then(s)}startAxisValueAnimation(t,e){const n=this.getAxisMotionValue(t);return Vo(this.visualElement,t),n.start(Cl(t,n,0,e,this.visualElement,!1))}stopAnimation(){cc((t=>this.getAxisMotionValue(t).stop()))}pauseAnimation(){cc((t=>this.getAxisMotionValue(t).animation?.pause()))}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,n=this.visualElement.getProps(),i=n[e];return i||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){cc((e=>{const{drag:n}=this.getProps();if(!Uc(e,n,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(e);if(i&&i.layout){const{min:n,max:o}=i.layout.layoutBox[e];r.set(t[e]-Ps(n,o,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:n}=this.visualElement;if(!kc(e)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};cc((t=>{const e=this.getAxisMotionValue(t);if(e&&!1!==this.constraints){const n=e.get();i[t]=function(t,e){let n=.5;const i=nc(t),r=nc(e);return r>i?n=Ta(e.min,e.max-i,t.min):i>r&&(n=Ta(t.min,t.max-r,e.min)),Bo(0,1,n)}({min:n,max:n},this.constraints[t])}}));const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),cc((e=>{if(!Uc(e,t,null))return;const n=this.getAxisMotionValue(e),{min:r,max:o}=this.constraints[e];n.set(Ps(r,o,i[e]))}))}addListeners(){if(!this.visualElement.current)return;Nc.set(this.visualElement,this);const t=tc(this.visualElement.current,"pointerdown",(t=>{const{drag:e,dragListener:n=!0}=this.getProps();e&&n&&this.start(t)})),e=()=>{const{dragConstraints:t}=this.getProps();kc(t)&&t.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",e);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),mo.read(e);const r=Jl(window,"resize",(()=>this.scalePositionWithinConstraints())),o=n.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(cc((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{r(),t(),i(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:o=Lc,dragMomentum:s=!0}=t;return{...t,drag:e,dragDirectionLock:n,dragPropagation:i,dragConstraints:r,dragElastic:o,dragMomentum:s}}}function Uc(t,e,n){return!(!0!==e&&e!==t||null!==n&&n!==t)}const qc=t=>(e,n)=>{t&&mo.postRender((()=>t(e,n)))};var Xc=n(4848);const{schedule:Wc,cancel:Gc}=uo(queueMicrotask,!1),$c=(0,i.createContext)(null);const Hc=(0,i.createContext)({}),Kc=(0,i.createContext)({}),Zc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Jc(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Qc={correct:(t,e)=>{if(!e.target)return t;if("string"==typeof t){if(!ls.test(t))return t;t=parseFloat(t)}return`${Jc(t,e.target.x)}% ${Jc(t,e.target.y)}%`}},_c={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Es.parse(t);if(r.length>5)return i;const o=Es.createTransformer(t),s="number"!=typeof r[0]?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+s]/=a,r[1+s]/=l;const c=Ps(a,l,.5);return"number"==typeof r[2+s]&&(r[2+s]/=c),"number"==typeof r[3+s]&&(r[3+s]/=c),o(r)}},tu={};class eu extends i.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n,layoutId:i}=this.props,{projection:r}=t;!function(t){for(const e in t)tu[e]=t[e],Xo(e)&&(tu[e].isCSSVariable=!0)}(iu),r&&(e.group&&e.group.add(r),n&&n.register&&i&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",(()=>{this.safeToRemove()})),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Zc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:n,drag:i,isPresent:r}=this.props,{projection:o}=n;return o?(o.isPresent=r,i||t.layoutDependency!==e||void 0===e||t.isPresent!==r?o.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?o.promote():o.relegate()||mo.postRender((()=>{const t=o.getStack();t&&t.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Wc.postRender((()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function nu(t){const[e,n]=function(t=!0){const e=(0,i.useContext)($c);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:r,register:o}=e,s=(0,i.useId)();(0,i.useEffect)((()=>{if(t)return o(s)}),[t]);const a=(0,i.useCallback)((()=>t&&r&&r(s)),[s,r,t]);return!n&&r?[!1,a]:[!0]}(),r=(0,i.useContext)(Hc);return(0,Xc.jsx)(eu,{...t,layoutGroup:r,switchLayoutGroup:(0,i.useContext)(Kc),isPresent:e,safeToRemove:n})}const iu={borderRadius:{...Qc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Qc,borderTopRightRadius:Qc,borderBottomLeftRadius:Qc,borderBottomRightRadius:Qc,boxShadow:_c};const ru=(t,e)=>t.depth-e.depth;class ou{constructor(){this.children=[],this.isDirty=!1}add(t){bo(this.children,t),this.isDirty=!0}remove(t){xo(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(ru),this.isDirty=!1,this.children.forEach(t)}}function su(t,e){const n=Po.now(),i=({timestamp:r})=>{const o=r-n;o>=e&&(ho(i),t(o-e))};return mo.setup(i,!0),()=>ho(i)}function au(t){return Ro(t)?t.get():t}const lu=["TopLeft","TopRight","BottomLeft","BottomRight"],cu=lu.length,uu=t=>"string"==typeof t?parseFloat(t):t,mu=t=>"number"==typeof t||ls.test(t);function du(t,e){return void 0!==t[e]?t[e]:t.borderRadius}const hu=fu(0,.5,Ea),pu=fu(.5,.95,so);function fu(t,e,n){return i=>i<t?0:i>e?1:n(Ta(t,e,i))}function gu(t,e){t.min=e.min,t.max=e.max}function yu(t,e){gu(t.x,e.x),gu(t.y,e.y)}function vu(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function bu(t,e,n,i,r){return t=fc(t-=e,1/n,i),void 0!==r&&(t=fc(t,1/r,i)),t}function xu(t,e,[n,i,r],o,s){!function(t,e=0,n=1,i=.5,r,o=t,s=t){as.test(e)&&(e=parseFloat(e),e=Ps(s.min,s.max,e/100)-s.min);if("number"!=typeof e)return;let a=Ps(o.min,o.max,i);t===o&&(a-=e),t.min=bu(t.min,e,n,a,r),t.max=bu(t.max,e,n,a,r)}(t,e[n],e[i],e[r],e.scale,o,s)}const wu=["x","scaleX","originX"],Eu=["y","scaleY","originY"];function Au(t,e,n,i){xu(t.x,e,wu,n?n.x:void 0,i?i.x:void 0),xu(t.y,e,Eu,n?n.y:void 0,i?i.y:void 0)}function Su(t){return 0===t.translate&&1===t.scale}function Pu(t){return Su(t.x)&&Su(t.y)}function ku(t,e){return t.min===e.min&&t.max===e.max}function Tu(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Cu(t,e){return Tu(t.x,e.x)&&Tu(t.y,e.y)}function Mu(t){return nc(t.x)/nc(t.y)}function ju(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Du{constructor(){this.members=[]}add(t){bo(this.members,t),t.scheduleRender()}remove(t){if(xo(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(t){const e=this.members.findIndex((e=>t===e));if(0===e)return!1;let n;for(let i=e;i>=0;i--){const t=this.members[i];if(!1!==t.isPresent){n=t;break}}return!!n&&(this.promote(n),!0)}promote(t,e){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,e&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;!1===i&&n.hide()}}exitAnimationComplete(){this.members.forEach((t=>{const{options:e,resumingFrom:n}=t;e.onExitComplete&&e.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((t=>{t.instance&&t.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Ru={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Vu=["","X","Y","Z"],Ou={visibility:"hidden"};let Fu=0;function Iu(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Lu(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Io(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:e,layoutId:i}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",mo,!(e||i))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&Lu(i)}function zu({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(t={},n=e?.()){this.id=Fu++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,co.value&&(Ru.nodes=Ru.calculatedTargetDeltas=Ru.calculatedProjections=0),this.nodes.forEach(Yu),this.nodes.forEach(Hu),this.nodes.forEach(Ku),this.nodes.forEach(Uu),co.addProjectionMetrics&&co.addProjectionMetrics(Ru)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new ou)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new wo),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){const n=this.eventHandlers.get(t);n&&n.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e){if(this.instance)return;var n;this.isSVG=(n=e)instanceof SVGElement&&"svg"!==n.tagName,this.instance=e;const{layoutId:i,layout:r,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||i)&&(this.isLayoutDirty=!0),t){let n;const i=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=su(i,250),Zc.hasAnimatedSinceResize&&(Zc.hasAnimatedSinceResize=!1,this.nodes.forEach($u))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||r)&&this.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e,hasRelativeLayoutChanged:n,layout:i})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const r=this.options.transition||o.getDefaultTransition()||em,{onLayoutAnimationStart:s,onLayoutAnimationComplete:a}=o.getProps(),l=!this.targetLayout||!Cu(this.targetLayout,i),c=!e&&n;if(this.options.layoutRoot||this.resumeFrom||c||e&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,c);const e={...oo(r,"layout"),onPlay:s,onComplete:a};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else e||$u(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const t=this.getStack();t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ho(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Zu),this.animationId++)}getTransformTemplate(){const{visualElement:t}=this.options;return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Lu(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let r=0;r<this.path.length;r++){const t=this.path[r];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}const{layoutId:e,layout:n}=this.options;if(void 0===e&&!n)return;const i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Xu);this.isUpdating||this.nodes.forEach(Wu),this.isUpdating=!1,this.nodes.forEach(Gu),this.nodes.forEach(Bu),this.nodes.forEach(Nu),this.clearAllSnapshots();const t=Po.now();po.delta=Bo(0,1e3/60,t-po.timestamp),po.timestamp=t,po.isProcessing=!0,fo.update.process(po),fo.preRender.process(po),fo.render.process(po),po.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(qu),this.sharedNodes.forEach(Ju)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,mo.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){mo.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||nc(this.snapshot.measuredBox.x)||nc(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const t=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:e}=this.options;e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e&&this.instance){const e=i(this.instance);this.scroll={animationId:this.root.animationId,phase:t,isRoot:e,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:e}}}resetTransform(){if(!r)return;const t=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,e=this.projectionDelta&&!Pu(this.projectionDelta),n=this.getTransformTemplate(),i=n?n(this.latestValues,""):void 0,o=i!==this.prevTransformTemplateValue;t&&this.instance&&(e||dc(this.latestValues)||o)&&(r(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){const e=this.measurePageBox();let n=this.removeElementScroll(e);var i;return t&&(n=this.removeTransform(n)),rm((i=n).x),rm(i.y),{animationId:this.root.animationId,measuredBox:e,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:t}=this.options;if(!t)return{x:{min:0,max:0},y:{min:0,max:0}};const e=t.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(sm))){const{scroll:t}=this.root;t&&(wc(e.x,t.offset.x),wc(e.y,t.offset.y))}return e}removeElementScroll(t){const e={x:{min:0,max:0},y:{min:0,max:0}};if(yu(e,t),this.scroll?.wasRoot)return e;for(let n=0;n<this.path.length;n++){const i=this.path[n],{scroll:r,options:o}=i;i!==this.root&&r&&o.layoutScroll&&(r.wasRoot&&yu(e,t),wc(e.x,r.offset.x),wc(e.y,r.offset.y))}return e}applyTransform(t,e=!1){const n={x:{min:0,max:0},y:{min:0,max:0}};yu(n,t);for(let i=0;i<this.path.length;i++){const t=this.path[i];!e&&t.options.layoutScroll&&t.scroll&&t!==t.root&&Ac(n,{x:-t.scroll.offset.x,y:-t.scroll.offset.y}),dc(t.latestValues)&&Ac(n,t.latestValues)}return dc(this.latestValues)&&Ac(n,this.latestValues),n}removeTransform(t){const e={x:{min:0,max:0},y:{min:0,max:0}};yu(e,t);for(let n=0;n<this.path.length;n++){const t=this.path[n];if(!t.instance)continue;if(!dc(t.latestValues))continue;mc(t.latestValues)&&t.updateSnapshot();const i={x:{min:0,max:0},y:{min:0,max:0}};yu(i,t.measurePageBox()),Au(e,t.latestValues,t.snapshot?t.snapshot.layoutBox:void 0,i)}return dc(this.latestValues)&&Au(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==po.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){const e=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=e.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=e.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=e.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==e;if(!(t||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:i,layoutId:r}=this.options;if(this.layout&&(i||r)){if(this.resolvedRelativeTargetAt=po.timestamp,!this.targetDelta&&!this.relativeTarget){const t=this.getClosestProjectingParent();t&&t.layout&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},ac(this.relativeTargetOrigin,this.layout.layoutBox,t.layout.layoutBox),yu(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,s,a;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,a=this.relativeParent.target,oc(o.x,s.x,a.x),oc(o.y,s.y,a.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):yu(this.target,this.layout.layoutBox),vc(this.target,this.targetDelta)):yu(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const t=this.getClosestProjectingParent();t&&Boolean(t.resumingFrom)===Boolean(this.resumingFrom)&&!t.options.layoutScroll&&t.target&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},ac(this.relativeTargetOrigin,this.target,t.target),yu(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}co.value&&Ru.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!mc(this.parent.latestValues)&&!hc(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const t=this.getLead(),e=Boolean(this.resumingFrom)||this!==t;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),e&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===po.timestamp&&(n=!1),n)return;const{layout:i,layoutId:r}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!r)return;yu(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,s=this.treeScale.y;!function(t,e,n,i=!1){const r=n.length;if(!r)return;let o,s;e.x=e.y=1;for(let a=0;a<r;a++){o=n[a],s=o.projectionDelta;const{visualElement:r}=o.options;r&&r.props.style&&"contents"===r.props.style.display||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Ac(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(e.x*=s.x.scale,e.y*=s.y.scale,vc(t,s)),i&&dc(o.latestValues)&&Ac(t,o.latestValues))}e.x<xc&&e.x>bc&&(e.x=1),e.y<xc&&e.y>bc&&(e.y=1)}(this.layoutCorrected,this.treeScale,this.path,e),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox,t.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:a}=t;a?(this.projectionDelta&&this.prevProjectionDelta?(vu(this.prevProjectionDelta.x,this.projectionDelta.x),vu(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),rc(this.projectionDelta,this.layoutCorrected,a,this.latestValues),this.treeScale.x===o&&this.treeScale.y===s&&ju(this.projectionDelta.x,this.prevProjectionDelta.x)&&ju(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",a)),co.value&&Ru.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){if(this.options.visualElement?.scheduleRender(),t){const t=this.getStack();t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(t,e=!1){const n=this.snapshot,i=n?n.latestValues:{},r={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e;const s={x:{min:0,max:0},y:{min:0,max:0}},a=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(a&&!c&&!0===this.options.crossfade&&!this.path.some(tm));let m;this.animationProgress=0,this.mixTargetDelta=e=>{const n=e/1e3;Qu(o.x,t.x,n),Qu(o.y,t.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ac(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(t,e,n,i){_u(t.x,e.x,n.x,i),_u(t.y,e.y,n.y,i)}(this.relativeTarget,this.relativeTargetOrigin,s,n),m&&function(t,e){return ku(t.x,e.x)&&ku(t.y,e.y)}(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m={x:{min:0,max:0},y:{min:0,max:0}}),yu(m,this.relativeTarget)),a&&(this.animationValues=r,function(t,e,n,i,r,o){r?(t.opacity=Ps(0,n.opacity??1,hu(i)),t.opacityExit=Ps(e.opacity??1,0,pu(i))):o&&(t.opacity=Ps(e.opacity??1,n.opacity??1,i));for(let s=0;s<cu;s++){const r=`border${lu[s]}Radius`;let o=du(e,r),a=du(n,r);void 0===o&&void 0===a||(o||(o=0),a||(a=0),0===o||0===a||mu(o)===mu(a)?(t[r]=Math.max(Ps(uu(o),uu(a),i),0),(as.test(a)||as.test(o))&&(t[r]+="%")):t[r]=a)}(e.rotate||n.rotate)&&(t.rotate=Ps(e.rotate||0,n.rotate||0,i))}(r,i,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation?.stop(!1),this.resumingFrom?.currentAnimation?.stop(!1),this.pendingAnimation&&(ho(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=mo.update((()=>{Zc.hasAnimatedSinceResize=!0,Uo.layout++,this.motionValue||(this.motionValue=Co(0)),this.currentAnimation=function(t,e,n){const i=Ro(t)?t:Co(t);return i.start(Cl("",i,e,n)),i.animation}(this.motionValue,[0,1e3],{...t,isSync:!0,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onStop:()=>{Uo.layout--},onComplete:()=>{Uo.layout--,t.onComplete&&t.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const t=this.getStack();t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop(!1)),this.completeAnimation()}applyTransformsToTarget(){const t=this.getLead();let{targetWithTransforms:e,target:n,layout:i,latestValues:r}=t;if(e&&n&&i){if(this!==t&&this.layout&&i&&om(this.options.animationType,this.layout.layoutBox,i.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const e=nc(this.layout.layoutBox.x);n.x.min=t.target.x.min,n.x.max=n.x.min+e;const i=nc(this.layout.layoutBox.y);n.y.min=t.target.y.min,n.y.max=n.y.min+i}yu(e,n),Ac(e,r),rc(this.projectionDeltaWithTransform,this.layoutCorrected,e,r)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new Du);this.sharedNodes.get(t).add(e);const n=e.options.initialPromotionConfig;e.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(e):void 0})}isLead(){const t=this.getStack();return!t||t.lead===this}getLead(){const{layoutId:t}=this.options;return t&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:t}=this.options;return t?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:n}={}){const i=this.getStack();i&&i.promote(this,n),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){const t=this.getStack();return!!t&&t.relegate(this)}resetSkewAndRotation(){const{visualElement:t}=this.options;if(!t)return;let e=!1;const{latestValues:n}=t;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(e=!0),!e)return;const i={};n.z&&Iu("z",t,i,this.animationValues);for(let r=0;r<Vu.length;r++)Iu(`rotate${Vu[r]}`,t,i,this.animationValues),Iu(`skew${Vu[r]}`,t,i,this.animationValues);t.render();for(const r in i)t.setStaticValue(r,i[r]),this.animationValues&&(this.animationValues[r]=i[r]);t.scheduleRender()}getProjectionStyles(t){if(!this.instance||this.isSVG)return;if(!this.isVisible)return Ou;const e={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,e.opacity="",e.pointerEvents=au(t?.pointerEvents)||"",e.transform=n?n(this.latestValues,""):"none",e;const i=this.getLead();if(!this.projectionDelta||!this.layout||!i.target){const e={};return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=au(t?.pointerEvents)||""),this.hasProjected&&!dc(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1),e}const r=i.animationValues||i.latestValues;this.applyTransformsToTarget(),e.transform=function(t,e,n){let i="";const r=t.x.translate/e.x,o=t.y.translate/e.y,s=n?.z||0;if((r||o||s)&&(i=`translate3d(${r}px, ${o}px, ${s}px) `),1===e.x&&1===e.y||(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:t,rotate:e,rotateX:r,rotateY:o,skewX:s,skewY:a}=n;t&&(i=`perspective(${t}px) ${i}`),e&&(i+=`rotate(${e}deg) `),r&&(i+=`rotateX(${r}deg) `),o&&(i+=`rotateY(${o}deg) `),s&&(i+=`skewX(${s}deg) `),a&&(i+=`skewY(${a}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return 1===a&&1===l||(i+=`scale(${a}, ${l})`),i||"none"}(this.projectionDeltaWithTransform,this.treeScale,r),n&&(e.transform=n(r,e.transform));const{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${100*o.origin}% ${100*s.origin}% 0`,i.animationValues?e.opacity=i===this?r.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:r.opacityExit:e.opacity=i===this?void 0!==r.opacity?r.opacity:"":void 0!==r.opacityExit?r.opacityExit:0;for(const a in tu){if(void 0===r[a])continue;const{correct:t,applyTo:n,isCSSVariable:o}=tu[a],s="none"===e.transform?r[a]:t(r[a],i);if(n){const t=n.length;for(let i=0;i<t;i++)e[n[i]]=s}else o?this.options.visualElement.renderState.vars[a]=s:e[a]=s}return this.options.layoutId&&(e.pointerEvents=i===this?au(t?.pointerEvents)||"":"none"),e}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((t=>t.currentAnimation?.stop(!1))),this.root.nodes.forEach(Xu),this.root.sharedNodes.clear()}}}function Bu(t){t.updateLayout()}function Nu(t){const e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=t.layout,{animationType:r}=t.options,o=e.source!==t.layout.source;"size"===r?cc((t=>{const i=o?e.measuredBox[t]:e.layoutBox[t],r=nc(i);i.min=n[t].min,i.max=i.min+r})):om(r,e.layoutBox,n)&&cc((i=>{const r=o?e.measuredBox[i]:e.layoutBox[i],s=nc(n[i]);r.max=r.min+s,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[i].max=t.relativeTarget[i].min+s)}));const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};rc(s,n,e.layoutBox);const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?rc(a,t.applyTransform(i,!0),e.measuredBox):rc(a,n,e.layoutBox);const l=!Pu(s);let c=!1;if(!t.resumeFrom){const i=t.getClosestProjectingParent();if(i&&!i.resumeFrom){const{snapshot:r,layout:o}=i;if(r&&o){const s={x:{min:0,max:0},y:{min:0,max:0}};ac(s,e.layoutBox,r.layoutBox);const a={x:{min:0,max:0},y:{min:0,max:0}};ac(a,n,o.layoutBox),Cu(s,a)||(c=!0),i.options.layoutRoot&&(t.relativeTarget=a,t.relativeTargetOrigin=s,t.relativeParent=i)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:e,delta:a,layoutDelta:s,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(t.isLead()){const{onExitComplete:e}=t.options;e&&e()}t.options.transition=void 0}function Yu(t){co.value&&Ru.nodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=Boolean(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Uu(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function qu(t){t.clearSnapshot()}function Xu(t){t.clearMeasurements()}function Wu(t){t.isLayoutDirty=!1}function Gu(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function $u(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Hu(t){t.resolveTargetDelta()}function Ku(t){t.calcProjection()}function Zu(t){t.resetSkewAndRotation()}function Ju(t){t.removeLeadSnapshot()}function Qu(t,e,n){t.translate=Ps(e.translate,0,n),t.scale=Ps(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function _u(t,e,n,i){t.min=Ps(e.min,n.min,i),t.max=Ps(e.max,n.max,i)}function tm(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}const em={duration:.45,ease:[.4,0,.1,1]},nm=t=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),im=nm("applewebkit/")&&!nm("chrome/")?Math.round:so;function rm(t){t.min=im(t.min),t.max=im(t.max)}function om(t,e,n){return"position"===t||"preserve-aspect"===t&&(i=Mu(e),r=Mu(n),o=.2,!(Math.abs(i-r)<=o));var i,r,o}function sm(t){return t!==t.root&&t.scroll?.wasRoot}const am=zu({attachResizeListener:(t,e)=>Jl(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),lm={current:void 0},cm=zu({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!lm.current){const t=new am({});t.mount(window),t.setOptions({layoutScroll:!0}),lm.current=t}return lm.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>Boolean("fixed"===window.getComputedStyle(t).position)}),um={pan:{Feature:class extends Gl{constructor(){super(...arguments),this.removePointerDownListener=so}onPointerDown(t){this.session=new Cc(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Pc(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:qc(t),onStart:qc(e),onMove:n,onEnd:(t,e)=>{delete this.session,i&&mo.postRender((()=>i(t,e)))}}}mount(){this.removePointerDownListener=tc(this.node.current,"pointerdown",(t=>this.onPointerDown(t)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Gl{constructor(t){super(t),this.removeGroupControls=so,this.removeListeners=so,this.controls=new Yc(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||so}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:cm,MeasureLayout:nu}};function mm(t,e){const n=function(t,e,n){if(t instanceof EventTarget)return[t];if("string"==typeof t){let i=document;e&&(i=e.current);const r=n?.[t]??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}(t),i=new AbortController;return[n,{passive:!0,...e,signal:i.signal},()=>i.abort()]}function dm(t){return!("touch"===t.pointerType||Zl())}function hm(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover","Start"===n);const r=i["onHover"+n];r&&mo.postRender((()=>r(e,_l(e))))}const pm=(t,e)=>!!e&&(t===e||pm(t,e.parentElement)),fm=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const gm=new WeakSet;function ym(t){return e=>{"Enter"===e.key&&t(e)}}function vm(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}function bm(t){return Ql(t)&&!Zl()}function xm(t,e,n={}){const[i,r,o]=mm(t,n),s=t=>{const i=t.currentTarget;if(!bm(t))return;gm.add(i);const o=e(i,t),s=(t,e)=>{window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",l),gm.has(i)&&gm.delete(i),bm(t)&&"function"==typeof o&&o(t,{success:e})},a=t=>{s(t,i===window||i===document||n.useGlobalTarget||pm(i,t.target))},l=t=>{s(t,!1)};window.addEventListener("pointerup",a,r),window.addEventListener("pointercancel",l,r)};return i.forEach((t=>{var e;(n.useGlobalTarget?window:t).addEventListener("pointerdown",s,r),t instanceof HTMLElement&&(t.addEventListener("focus",(t=>((t,e)=>{const n=t.currentTarget;if(!n)return;const i=ym((()=>{if(gm.has(n))return;vm(n,"down");const t=ym((()=>{vm(n,"up")}));n.addEventListener("keyup",t,e),n.addEventListener("blur",(()=>vm(n,"cancel")),e)}));n.addEventListener("keydown",i,e),n.addEventListener("blur",(()=>n.removeEventListener("keydown",i)),e)})(t,r))),e=t,fm.has(e.tagName)||-1!==e.tabIndex||t.hasAttribute("tabindex")||(t.tabIndex=0))})),o}function wm(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap","Start"===n);const r=i["onTap"+("End"===n?"":n)];r&&mo.postRender((()=>r(e,_l(e))))}const Em=new WeakMap,Am=new WeakMap,Sm=t=>{const e=Em.get(t.target);e&&e(t)},Pm=t=>{t.forEach(Sm)};function km(t,e,n){const i=function({root:t,...e}){const n=t||document;Am.has(n)||Am.set(n,{});const i=Am.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(Pm,{root:t,...e})),i[r]}(e);return Em.set(t,n),i.observe(t),()=>{Em.delete(t),i.unobserve(t)}}const Tm={some:0,all:1};const Cm={inView:{Feature:class extends Gl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:n,amount:i="some",once:r}=t,o={root:e?e.current:void 0,rootMargin:n,threshold:"number"==typeof i?i:Tm[i]};return km(this.node.current,o,(t=>{const{isIntersecting:e}=t;if(this.isInView===e)return;if(this.isInView=e,r&&!e&&this.hasEnteredView)return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);const{onViewportEnter:n,onViewportLeave:i}=this.node.getProps(),o=e?n:i;o&&o(t)}))}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}(t,e))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Gl{mount(){const{current:t}=this.node;t&&(this.unmount=xm(t,((t,e)=>(wm(this.node,e,"Start"),(t,{success:e})=>wm(this.node,t,e?"End":"Cancel"))),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends Gl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch(e){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zo(Jl(this.node.current,"focus",(()=>this.onFocus())),Jl(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Gl{mount(){const{current:t}=this.node;t&&(this.unmount=function(t,e,n={}){const[i,r,o]=mm(t,n),s=t=>{if(!dm(t))return;const{target:n}=t,i=e(n,t);if("function"!=typeof i||!n)return;const o=t=>{dm(t)&&(i(t),n.removeEventListener("pointerleave",o))};n.addEventListener("pointerleave",o,r)};return i.forEach((t=>{t.addEventListener("pointerenter",s,r)})),o}(t,((t,e)=>(hm(this.node,e,"Start"),t=>hm(this.node,t,"End")))))}unmount(){}}}},Mm={layout:{ProjectionNode:cm,MeasureLayout:nu}},jm=(0,i.createContext)({strict:!1}),Dm=(0,i.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Rm=(0,i.createContext)({});function Vm(t){return eo(t.animate)||Il.some((e=>Ol(t[e])))}function Om(t){return Boolean(Vm(t)||t.variants)}function Fm(t){const{initial:e,animate:n}=function(t,e){if(Vm(t)){const{initial:e,animate:n}=t;return{initial:!1===e||Ol(e)?e:void 0,animate:Ol(n)?n:void 0}}return!1!==t.inherit?e:{}}(t,(0,i.useContext)(Rm));return(0,i.useMemo)((()=>({initial:e,animate:n})),[Im(e),Im(n)])}function Im(t){return Array.isArray(t)?t.join(" "):t}const Lm="undefined"!=typeof window,zm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Bm={};for(const Sh in zm)Bm[Sh]={isEnabled:t=>zm[Sh].some((e=>!!t[e]))};const Nm=Symbol.for("motionComponentSymbol");function Ym(t,e,n){return(0,i.useCallback)((i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&("function"==typeof n?n(i):kc(n)&&(n.current=i))}),[e])}const Um=Lm?i.useLayoutEffect:i.useEffect;function qm(t,e,n,r,o){const{visualElement:s}=(0,i.useContext)(Rm),a=(0,i.useContext)(jm),l=(0,i.useContext)($c),c=(0,i.useContext)(Dm).reducedMotion,u=(0,i.useRef)(null);r=r||a.renderer,!u.current&&r&&(u.current=r(t,{visualState:e,parent:s,props:n,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const m=u.current,d=(0,i.useContext)(Kc);!m||m.projection||!o||"html"!==m.type&&"svg"!==m.type||function(t,e,n,i){const{layoutId:r,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Xm(t.parent)),t.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:Boolean(s)||a&&kc(a),visualElement:t,animationType:"string"==typeof o?o:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,n,o,d);const h=(0,i.useRef)(!1);(0,i.useInsertionEffect)((()=>{m&&h.current&&m.update(n,l)}));const p=n[Fo],f=(0,i.useRef)(Boolean(p)&&!window.MotionHandoffIsComplete?.(p)&&window.MotionHasOptimisedAnimation?.(p));return Um((()=>{m&&(h.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),Wc.render(m.render),f.current&&m.animationState&&m.animationState.animateChanges())})),(0,i.useEffect)((()=>{m&&(!f.current&&m.animationState&&m.animationState.animateChanges(),f.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(p)})),f.current=!1))})),m}function Xm(t){if(t)return!1!==t.options.allowProjection?t.projection:Xm(t.parent)}function Wm({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:o}){function s(t,s){let a;const l={...(0,i.useContext)(Dm),...t,layoutId:Gm(t)},{isStatic:c}=l,u=Fm(t),m=r(t,c);if(!c&&Lm){!function(){(0,i.useContext)(jm).strict;0}();const t=function(t){const{drag:e,layout:n}=Bm;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e?.isEnabled(t)||n?.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(l);a=t.MeasureLayout,u.visualElement=qm(o,m,l,e,t.ProjectionNode)}return(0,Xc.jsxs)(Rm.Provider,{value:u,children:[a&&u.visualElement?(0,Xc.jsx)(a,{visualElement:u.visualElement,...l}):null,n(o,t,Ym(m,u.visualElement,s),m,c,u.visualElement)]})}t&&function(t){for(const e in t)Bm[e]={...Bm[e],...t[e]}}(t),s.displayName=`motion.${"string"==typeof o?o:`create(${o.displayName??o.name??""})`}`;const a=(0,i.forwardRef)(s);return a[Nm]=o,a}function Gm({layoutId:t}){const e=(0,i.useContext)(Hc).id;return e&&void 0!==t?e+"-"+t:t}function $m(t,{layout:e,layoutId:n}){return yo.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!tu[t]||"opacity"===t)}const Hm=(t,e)=>e&&"number"==typeof t?e.transform(t):t,Km={...Ho,transform:Math.round},Zm={borderWidth:ls,borderTopWidth:ls,borderRightWidth:ls,borderBottomWidth:ls,borderLeftWidth:ls,borderRadius:ls,radius:ls,borderTopLeftRadius:ls,borderTopRightRadius:ls,borderBottomRightRadius:ls,borderBottomLeftRadius:ls,width:ls,maxWidth:ls,height:ls,maxHeight:ls,top:ls,right:ls,bottom:ls,left:ls,padding:ls,paddingTop:ls,paddingRight:ls,paddingBottom:ls,paddingLeft:ls,margin:ls,marginTop:ls,marginRight:ls,marginBottom:ls,marginLeft:ls,backgroundPositionX:ls,backgroundPositionY:ls,...{rotate:ss,rotateX:ss,rotateY:ss,rotateZ:ss,scale:Zo,scaleX:Zo,scaleY:Zo,scaleZ:Zo,skew:ss,skewX:ss,skewY:ss,distance:ls,translateX:ls,translateY:ls,translateZ:ls,x:ls,y:ls,z:ls,perspective:ls,transformPerspective:ls,opacity:Ko,originX:ms,originY:ms,originZ:ls},zIndex:Km,fillOpacity:Ko,strokeOpacity:Ko,numOctaves:Km},Jm={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Qm=go.length;function _m(t,e,n){const{style:i,vars:r,transformOrigin:o}=t;let s=!1,a=!1;for(const l in e){const t=e[l];if(yo.has(l))s=!0;else if(Xo(l))r[l]=t;else{const e=Hm(t,Zm[l]);l.startsWith("origin")?(a=!0,o[l]=e):i[l]=e}}if(e.transform||(s||n?i.transform=function(t,e,n){let i="",r=!0;for(let o=0;o<Qm;o++){const s=go[o],a=t[s];if(void 0===a)continue;let l=!0;if(l="number"==typeof a?a===(s.startsWith("scale")?1:0):0===parseFloat(a),!l||n){const t=Hm(a,Zm[s]);l||(r=!1,i+=`${Jm[s]||s}(${t}) `),n&&(e[s]=t)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:t="50%",originY:e="50%",originZ:n=0}=o;i.transformOrigin=`${t} ${e} ${n}`}}const td=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ed(t,e,n){for(const i in e)Ro(e[i])||$m(i,n)||(t[i]=e[i])}function nd(t,e){const n={};return ed(n,t.style||{},t),Object.assign(n,function({transformTemplate:t},e){return(0,i.useMemo)((()=>{const n={style:{},transform:{},transformOrigin:{},vars:{}};return _m(n,e,t),Object.assign({},n.vars,n.style)}),[e])}(t,e)),n}function id(t,e){const n={},i=nd(t,e);return t.drag&&!1!==t.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===t.drag?"none":"pan-"+("x"===t.drag?"y":"x")),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const rd=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function od(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||rd.has(t)}let sd=t=>!od(t);try{(ad=require("@emotion/is-prop-valid").default)&&(sd=t=>t.startsWith("on")?!od(t):ad(t))}catch{}var ad;const ld=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cd(t){return"string"==typeof t&&!t.includes("-")&&!!(ld.indexOf(t)>-1||/[A-Z]/u.test(t))}const ud={offset:"stroke-dashoffset",array:"stroke-dasharray"},md={offset:"strokeDashoffset",array:"strokeDasharray"};function dd(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:o=1,pathOffset:s=0,...a},l,c,u){if(_m(t,a,c),l)return void(t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox));t.attrs=t.style,t.style={};const{attrs:m,style:d}=t;m.transform&&(d.transform=m.transform,delete m.transform),(d.transform||m.transformOrigin)&&(d.transformOrigin=m.transformOrigin??"50% 50%",delete m.transformOrigin),d.transform&&(d.transformBox=u?.transformBox??"fill-box",delete m.transformBox),void 0!==e&&(m.x=e),void 0!==n&&(m.y=n),void 0!==i&&(m.scale=i),void 0!==r&&function(t,e,n=1,i=0,r=!0){t.pathLength=1;const o=r?ud:md;t[o.offset]=ls.transform(-i);const s=ls.transform(e),a=ls.transform(n);t[o.array]=`${s} ${a}`}(m,r,o,s,!1)}const hd=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),pd=t=>"string"==typeof t&&"svg"===t.toLowerCase();function fd(t,e,n,r){const o=(0,i.useMemo)((()=>{const n={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return dd(n,e,pd(r),t.transformTemplate,t.style),{...n.attrs,style:{...n.style}}}),[e]);if(t.style){const e={};ed(e,t.style,t),o.style={...e,...o.style}}return o}function gd(t=!1){return(e,n,r,{latestValues:o},s)=>{const a=(cd(e)?fd:id)(n,o,s,e),l=function(t,e,n){const i={};for(const r in t)"values"===r&&"object"==typeof t.values||(sd(r)||!0===n&&od(r)||!e&&!od(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}(n,"string"==typeof e,t),c=e!==i.Fragment?{...l,...a,ref:r}:{},{children:u}=n,m=(0,i.useMemo)((()=>Ro(u)?u.get():u),[u]);return(0,i.createElement)(e,{...c,children:m})}}const yd=t=>(e,n)=>{const r=(0,i.useContext)(Rm),o=(0,i.useContext)($c),s=()=>function({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:vd(n,i,r,t),renderState:e()}}(t,e,r,o);return n?s():function(t){const e=(0,i.useRef)(null);return null===e.current&&(e.current=t()),e.current}(s)};function vd(t,e,n,i){const r={},o=i(t,{});for(const d in o)r[d]=au(o[d]);let{initial:s,animate:a}=t;const l=Vm(t),c=Om(t);e&&c&&!l&&!1!==t.inherit&&(void 0===s&&(s=e.initial),void 0===a&&(a=e.animate));let u=!!n&&!1===n.initial;u=u||!1===s;const m=u?a:s;if(m&&"boolean"!=typeof m&&!eo(m)){const e=Array.isArray(m)?m:[m];for(let n=0;n<e.length;n++){const i=io(t,e[n]);if(i){const{transitionEnd:t,transition:e,...n}=i;for(const i in n){let t=n[i];if(Array.isArray(t)){t=t[u?t.length-1:0]}null!==t&&(r[i]=t)}for(const i in t)r[i]=t[i]}}}return r}function bd(t,e,n){const{style:i}=t,r={};for(const o in i)(Ro(i[o])||e.style&&Ro(e.style[o])||$m(o,t)||void 0!==n?.getValue(o)?.liveStyle)&&(r[o]=i[o]);return r}const xd={useVisualState:yd({scrapeMotionValuesFromProps:bd,createRenderState:td})};function wd(t,e,n){const i=bd(t,e,n);for(const r in t)if(Ro(t[r])||Ro(e[r])){i[-1!==go.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=t[r]}return i}const Ed={useVisualState:yd({scrapeMotionValuesFromProps:wd,createRenderState:hd})};function Ad(t,e){return function(n,{forwardMotionProps:i}={forwardMotionProps:!1}){return Wm({...cd(n)?Ed:xd,preloadedFeatures:t,useRender:gd(i),createVisualElement:e,Component:n})}}const Sd=t=>e=>e.test(t),Pd=[Ho,ls,as,ss,us,cs,{test:t=>"auto"===t,parse:t=>t}],kd=t=>Pd.find(Sd(t)),Td=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Cd=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Md(t,e,n=1){const[i,r]=function(t){const e=Cd.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}(t);if(!i)return;const o=window.getComputedStyle(e).getPropertyValue(i);if(o){const t=o.trim();return Td(t)?parseFloat(t):t}return Go(r)?Md(r,e,n+1):r}const jd=t=>/^0[^.\s]+$/u.test(t);const Dd=new Set(["brightness","contrast","saturate","opacity"]);function Rd(t){const[e,n]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;const[i]=n.match(Qo)||[];if(!i)return t;const r=n.replace(i,"");let o=Dd.has(e)?1:0;return i!==n&&(o*=100),e+"("+o+r+")"}const Vd=/\b([a-z-]*)\(.*?\)/gu,Od={...Es,getAnimatableNone:t=>{const e=t.match(Vd);return e?e.map(Rd).join(" "):t}},Fd={...Zm,color:hs,backgroundColor:hs,outlineColor:hs,fill:hs,stroke:hs,borderColor:hs,borderTopColor:hs,borderRightColor:hs,borderBottomColor:hs,borderLeftColor:hs,filter:Od,WebkitFilter:Od},Id=t=>Fd[t];function Ld(t,e){let n=Id(t);return n!==Od&&(n=Es),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const zd=new Set(["auto","none","0"]);class Bd extends rl{constructor(t,e,n,i,r){super(t,e,n,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:n}=this;if(!e||!e.current)return;super.readKeyframes();for(let a=0;a<t.length;a++){let n=t[a];if("string"==typeof n&&(n=n.trim(),Go(n))){const i=Md(n,e.current);void 0!==i&&(t[a]=i),a===t.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!vo.has(n)||2!==t.length)return;const[i,r]=t,o=kd(i),s=kd(r);if(o!==s)if(Ha(o)&&Ha(s))for(let a=0;a<t.length;a++){const e=t[a];"string"==typeof e&&(t[a]=parseFloat(e))}else Ja[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,n=[];for(let r=0;r<t.length;r++)(null===t[r]||("number"==typeof(i=t[r])?0===i:null===i||"none"===i||"0"===i||jd(i)))&&n.push(r);var i;n.length&&function(t,e,n){let i,r=0;for(;r<t.length&&!i;){const e=t[r];"string"==typeof e&&!zd.has(e)&&vs(e).values.length&&(i=t[r]),r++}if(i&&n)for(const o of e)t[o]=Ld(n,i)}(t,n,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:n}=this;if(!t||!t.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ja[n](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const i=e[e.length-1];void 0!==i&&t.getValue(n,i).jump(i,!1)}measureEndState(){const{element:t,name:e,unresolvedKeyframes:n}=this;if(!t||!t.current)return;const i=t.getValue(e);i&&i.jump(this.measuredOrigin,!1);const r=n.length-1,o=n[r];n[r]=Ja[e](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach((([e,n])=>{t.getValue(e).set(n)})),this.resolveNoneKeyframes()}}const Nd=[...Pd,hs,Es],Yd={current:null},Ud={current:!1};const qd=new WeakMap;const Xd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Wd{scrapeMotionValuesFromProps(t,e,n){return{}}constructor({parent:t,props:e,presenceContext:n,reducedMotionConfig:i,blockInitialAnimation:r,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=rl,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const t=Po.now();this.renderScheduledAt<t&&(this.renderScheduledAt=t,mo.render(this.render,!1,!0))};const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=e.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=e,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(r),this.isControllingVariants=Vm(e),this.isVariantNode=Om(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(e,{},this);for(const m in u){const t=u[m];void 0!==a[m]&&Ro(t)&&t.set(a[m],!1)}}mount(t){this.current=t,qd.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((t,e)=>this.bindToMotionValue(e,t))),Ud.current||function(){if(Ud.current=!0,Lm)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Yd.current=t.matches;t.addListener(e),e()}else Yd.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Yd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ho(this.notifyUpdate),ho(this.render),this.valueSubscriptions.forEach((t=>t())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const n=yo.has(t);n&&this.onBindTransform&&this.onBindTransform();const i=e.on("change",(e=>{this.latestValues[t]=e,this.props.onUpdate&&mo.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),r=e.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,(()=>{i(),r(),o&&o(),e.owner&&e.stop()}))}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation";for(t in Bm){const e=Bm[t];if(!e)continue;const{isEnabled:n,Feature:i}=e;if(!this.features[t]&&i&&n(this.props)&&(this.features[t]=new i(this)),this.features[t]){const e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let n=0;n<Xd.length;n++){const e=Xd[n];this.propEventSubscriptions[e]&&(this.propEventSubscriptions[e](),delete this.propEventSubscriptions[e]);const i=t["on"+e];i&&(this.propEventSubscriptions[e]=this.on(e,i))}this.prevMotionValues=function(t,e,n){for(const i in e){const r=e[i],o=n[i];if(Ro(r))t.addValue(i,r);else if(Ro(o))t.addValue(i,Co(r,{owner:t}));else if(o!==r)if(t.hasValue(i)){const e=t.getValue(i);!0===e.liveStyle?e.jump(r):e.hasAnimated||e.set(r)}else{const e=t.getStaticValue(i);t.addValue(i,Co(void 0!==e?e:r,{owner:t}))}}for(const i in n)void 0===e[i]&&t.removeValue(i);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const n=this.values.get(t);e!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return void 0===n&&void 0!==e&&(n=Co(null===e?void 0:e,{owner:this}),this.addValue(t,n)),n}readValue(t,e){let n=void 0===this.latestValues[t]&&this.current?this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options):this.latestValues[t];return null!=n&&("string"==typeof n&&(Td(n)||jd(n))?n=parseFloat(n):!(t=>Nd.find(Sd(t)))(n)&&Es.test(e)&&(n=Ld(t,e)),this.setBaseTarget(t,Ro(n)?n.get():n)),Ro(n)?n.get():n}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){const{initial:e}=this.props;let n;if("string"==typeof e||"object"==typeof e){const i=io(this.props,e,this.presenceContext?.custom);i&&(n=i[t])}if(e&&void 0!==n)return n;const i=this.getBaseTargetFromProps(this.props,t);return void 0===i||Ro(i)?void 0!==this.initialValues[t]&&void 0===n?void 0:this.baseTarget[t]:i}on(t,e){return this.events[t]||(this.events[t]=new wo),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class Gd extends Wd{constructor(){super(...arguments),this.KeyframeResolver=Bd}sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:n}){delete e[t],delete n[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ro(t)&&(this.childSubscription=t.on("change",(t=>{this.current&&(this.current.textContent=`${t}`)})))}}function $d(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const o in n)t.style.setProperty(o,n[o])}class Hd extends Gd{constructor(){super(...arguments),this.type="html",this.renderInstance=$d}readValueFromInstance(t,e){if(yo.has(e))return this.projection?.isProjecting?Wa(e):((t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Ga(n,e)})(t,e);{const i=(n=t,window.getComputedStyle(n)),r=(Xo(e)?i.getPropertyValue(e):i[e])||0;return"string"==typeof r?r.trim():r}var n}measureInstanceViewportBox(t,{transformPagePoint:e}){return Sc(t,e)}build(t,e,n){_m(t,e,n.transformTemplate)}scrapeMotionValuesFromProps(t,e,n){return bd(t,e,n)}}const Kd=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);class Zd extends Gd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=lc}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(yo.has(e)){const t=Id(e);return t&&t.default||0}return e=Kd.has(e)?e:Oo(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,n){return wd(t,e,n)}build(t,e,n){dd(t,e,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(t,e,n,i){!function(t,e,n,i){$d(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Kd.has(r)?r:Oo(r),e.attrs[r])}(t,e,0,i)}mount(t){this.isSVGTag=pd(t.tagName),super.mount(t)}}const Jd=to(Ad({...Hl,...Cm,...um,...Mm},((t,e)=>cd(t)?new Zd(e):new Hd(e,{allowProjection:t!==i.Fragment})))),Qd=We.div`
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
`,_d=We(Jd.div)`
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
`,th=We(Jd.div)`
  width: 14rem;
  height: 8rem;
  background-color: rgba(255, 255, 255, 0.9);
  background-image: ${t=>`url(${t.bgImage})`};
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
`,eh=[{x:-0,y:-300},{x:0,y:300},{x:-300,y:200},{x:300,y:200},{x:-390,y:0},{x:390,y:0},{x:-300,y:-200},{x:300,y:-200}],nh=[{x:-70,y:-110},{x:0,y:220},{x:70,y:-110},{x:-0,y:-220},{x:-70,y:110},{x:70,y:110},{x:-130,y:-0},{x:130,y:-0}],ih=t=>{let{data:e,visivel:n,larguraAtual:r}=t;const o=r<=768?nh:eh,s={hidden:{opacity:0,scale:.5,x:0,y:0},visible:t=>({opacity:1,scale:1,x:o[t].x,y:o[t].y,transition:{delay:.1*t,duration:.5,type:"spring",stiffness:100}})};return i.createElement(Qd,null,i.createElement(_d,{key:n?"visible":"hidden",initial:{scale:.5,opacity:0},animate:n?{scale:1,opacity:1}:{scale:.5,opacity:0},transition:{duration:.5}},"Conteúdos"),null==e?void 0:e.map(((t,e)=>i.createElement(th,{key:`${e}-${n}`,custom:e,initial:"hidden",animate:n?"visible":"hidden",variants:s,bgImage:t.imagem,whileHover:{scale:1.1,transition:{duration:.5},zIndex:1e3+t.id}},i.createElement("div",{style:{background:"rgba(0, 110, 156, 0.69)",padding:"0.5rem 0.8rem",borderRadius:"0.5rem"}},t.titulo)))))},rh=[{id:1,titulo:"Governança Digital",imagem:Bi},{id:2,titulo:"Soluções Integradas",imagem:Li},{id:3,titulo:"Segurança de Dados",imagem:zi},{id:4,titulo:"Inovação Tecnológica",imagem:Ni},{id:5,titulo:"Atendimento ao Cidadão",imagem:Yi},{id:6,titulo:"Transformação Digital",imagem:Bi},{id:7,titulo:"Parcerias Estratégicas",imagem:Li},{id:8,titulo:"Sustentabilidade",imagem:zi}];var oh=t=>{let{larguraAtual:e}=t;const n=(0,i.useRef)(null),{0:r,1:o}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const t=new IntersectionObserver((t=>{t.forEach((t=>{o(t.isIntersecting)}))}),{threshold:.1});return n.current&&t.observe(n.current),()=>{n.current&&t.unobserve(n.current)}}),[]),i.createElement("div",{ref:n},i.createElement(ih,{data:rh,visivel:r,larguraAtual:e}))},sh=n(9879);const ah=We.div`
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`,lh=We.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 35rem;
`,ch=We.div`
    position: absolute;
    top: 0;
    height: 60%;
    width: 100%;
    border-radius: 1rem;
    background: url(${t=>t.imagem}) no-repeat center center;
    background-size: cover;
    transition: all 0.5s ease-in-out;
`,uh=We.div`
    width: 5rem;
    position: relative;
    flex: 0 0 calc(33.33% - 2rem);
    margin: 0 1rem;

    @media (max-width: 768px) {
        width: 1rem;
        flex: 0 0 calc(100% - 2rem);
    }

    &:hover ${ch} {
        height: 100%;
        background-blend-mode: multiply;
        opacity: 0.3;
        z-index: -1;
    }

    &:not(:hover) ${ch} {
        height: 60%;
        background-blend-mode: normal;
        opacity: 1;
        z-index: 0;
    }
`,mh=We.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
`,dh=We.label`
    width: calc(100% - 2rem);
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.05rem;
    margin: 0.2rem 1rem;
`,hh=We.label`
    width: calc(100% - 2rem);
    margin: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.2rem;
    letter-spacing: 0.05rem;
    font-family: "Montserrat Alternates", sans-serif;
`,ph=We.button`
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
`,fh=(We.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
`,We.button`
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
`),gh=We.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 8px;
`,yh=We.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
        background-color: #333;
    }
`;function vh(t){let{larguraAtual:e,registros:n}=t;const r=n.length,o=(0,i.useRef)(null),{0:s,1:a}=(0,i.useState)(0),{0:l,1:c}=(0,i.useState)(3),{0:u,1:m}=(0,i.useState)(Math.ceil(r/l));return(0,i.useEffect)((()=>{e<=768&&(c(1),m(Math.ceil(r/l)))}),[e]),(0,i.useEffect)((()=>{o.current&&(o.current.style.transition="transform 0.5s ease-in-out",o.current.style.transform=`translateX(-${100*s}%)`)}),[s]),i.createElement(ah,null,i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",height:"35rem",width:"100%",zIndex:1}},i.createElement(fh,{onClick:()=>{a((t=>Math.max(0,t-1)))}},i.createElement(sh.oe,null))),i.createElement(lh,{ref:o},n.map(((t,e)=>i.createElement(uh,{key:e},i.createElement(ch,{imagem:t.imagem}),i.createElement(mh,null,i.createElement(dh,null,t.titulo),i.createElement(hh,null,t.descricao),i.createElement(ph,null,"Assistir")))))),i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",height:"35rem",width:"100%",zIndex:1}},i.createElement(fh,{onClick:()=>{a((t=>Math.min(u-1,t+1)))}},i.createElement(sh.mny,null)))),i.createElement(gh,null,Array.from({length:u}).map(((t,e)=>i.createElement(yh,{key:e,className:s===e?"active":"",onClick:()=>(t=>{a(t)})(e)})))))}const bh=We.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;
    background: '#dfdfdf';
`,xh=We.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #003366;
    color: #333;
`;function wh(t){let{larguraAtual:e}=t;return i.createElement(bh,null,i.createElement(xh,null,"Depoimentos"),i.createElement(vh,{larguraAtual:e,registros:[{titulo:"João Silva",descricao:"A M2A transformou completamente nossos processos internos. A implementação do sistema foi suave e a equipe de suporte é excepcional. Recomendo fortemente!",imagem:Li},{titulo:"Maria Santos",descricao:"Estamos muito satisfeitos com as soluções da M2A. O sistema é intuitivo e nos ajudou a reduzir custos operacionais em 30%. Excelente parceria!",imagem:zi},{titulo:"Pedro Oliveira",descricao:"A automação que a M2A implementou revolucionou nossa gestão de compras. O atendimento é sempre ágil e profissional. Superou todas as expectativas!",imagem:Bi},{titulo:"Ana Rodrigues",descricao:"Depois que implementamos as soluções da M2A, nossa produtividade aumentou significativamente. A equipe técnica é muito competente e dedicada.",imagem:Li},{titulo:"Carlos Mendes",descricao:"Excelente experiência com a M2A! O sistema é robusto e a equipe sempre está disposta a nos ajudar. Melhor decisão que tomamos para nossa empresa.",imagem:zi},{titulo:"Fernanda Lima",descricao:"A parceria com a M2A tem sido fundamental para nosso crescimento. O suporte é impecável e as soluções são perfeitamente adaptadas às nossas necessidades.",imagem:Bi},{titulo:"Ricardo Almeida",descricao:"Impressionante como a M2A entende as necessidades do cliente. O sistema é completo e a equipe sempre traz soluções inovadoras para nossos desafios.",imagem:Li},{titulo:"Beatriz Costa",descricao:"A M2A nos ajudou a otimizar todos os processos. O retorno sobre o investimento foi rápido e o suporte técnico é sempre muito eficiente.",imagem:zi},{titulo:"Lucas Ferreira",descricao:"Desde que começamos a trabalhar com a M2A, nossa eficiência operacional melhorou drasticamente. A equipe é muito profissional e comprometida.",imagem:Bi}]}))}const Eh=()=>i.createElement("div",{title:"Home"});var Ah=()=>{const{0:t,1:e}=(0,i.useState)(0),{0:n,1:r}=(0,i.useState)(0),o=()=>{const t=window.scrollY;r(t)},s=()=>{e(window.innerWidth)};(0,i.useEffect)((()=>(window.addEventListener("scroll",o),window.addEventListener("resize",s),s(),()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",s)})),[]);const a=0===n;return i.createElement(He,null,i.createElement(Mi,{ehCabecalhoFlutuante:a,larguraAtual:t}),i.createElement(kn,null),i.createElement(Hi,null),i.createElement(pr,null),i.createElement(Ar,null),i.createElement(Lr,null),i.createElement(wh,{larguraAtual:t}),i.createElement(_r,null),i.createElement(oh,{larguraAtual:t}),i.createElement(un,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e709c179e015b647d4da.js.map