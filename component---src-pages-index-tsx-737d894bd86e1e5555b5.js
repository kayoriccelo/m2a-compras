(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[245],{2225:function(t,e,n){"use strict";n.d(e,{k5:function(){return h}});var i=n(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),s=["attr","size","title"];function a(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},l.apply(this,arguments)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){return t&&t.map(((t,e)=>i.createElement(t.tag,u({key:e},t.attr),m(t.child))))}function h(t){return e=>i.createElement(p,l({attr:u({},t.attr)},e),m(t.child))}function p(t){var e=e=>{var n,{attr:r,size:o,title:c}=t,d=a(t,s),m=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,d,{className:n,style:u(u({color:t.color||e.color},e.style),t.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),t.children)};return void 0!==o?i.createElement(o.Consumer,null,(t=>e(t))):e(r)}},2833:function(t){t.exports=function(t,e,n,i){var r=n?n.call(i,t,e):void 0;if(void 0!==r)return!!r;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var o=Object.keys(t),s=Object.keys(e);if(o.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(e),l=0;l<o.length;l++){var c=o[l];if(!a(c))return!1;var u=t[c],d=e[c];if(!1===(r=n?n.call(i,u,d,c):void 0)||void 0===r&&u!==d)return!1}return!0}},9183:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return ih},default:function(){return rh}});var i=n(6540);var r=function(){return r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)};Object.create;function o(t,e,n){if(n||2===arguments.length)for(var i,r=0,o=e.length;r<o;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var s=n(2833),a=n.n(s),l="-ms-",c="-moz-",u="-webkit-",d="comm",m="rule",h="decl",p="@keyframes",f=Math.abs,g=String.fromCharCode,y=Object.assign;function v(t){return t.trim()}function b(t,e){return(t=e.exec(t))?t[0]:t}function x(t,e,n){return t.replace(e,n)}function w(t,e,n){return t.indexOf(e,n)}function A(t,e){return 0|t.charCodeAt(e)}function E(t,e,n){return t.slice(e,n)}function S(t){return t.length}function P(t){return t.length}function k(t,e){return e.push(t),t}function C(t,e){return t.filter((function(t){return!b(t,e)}))}var T=1,M=1,j=0,D=0,R=0,V="";function F(t,e,n,i,r,o,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:T,column:M,length:s,return:"",siblings:a}}function O(t,e){return y(F("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function I(t){for(;t.root;)t=O(t.root,{children:[t]});k(t,t.siblings)}function L(){return R=D>0?A(V,--D):0,M--,10===R&&(M=1,T--),R}function z(){return R=D<j?A(V,D++):0,M++,10===R&&(M=1,T++),R}function B(){return A(V,D)}function N(){return D}function Y(t,e){return E(V,t,e)}function U(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(t){return T=M=1,j=S(V=t),D=0,[]}function X(t){return V="",t}function q(t){return v(Y(D-1,$(91===t?t+2:40===t?t+1:t)))}function G(t){for(;(R=B())&&R<33;)z();return U(t)>2||U(R)>3?"":" "}function H(t,e){for(;--e&&z()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return Y(t,N()+(e<6&&32==B()&&32==z()))}function $(t){for(;z();)switch(R){case t:return D;case 34:case 39:34!==t&&39!==t&&$(R);break;case 40:41===t&&$(t);break;case 92:z()}return D}function K(t,e){for(;z()&&t+R!==57&&(t+R!==84||47!==B()););return"/*"+Y(e,D-1)+"*"+g(47===t?t:z())}function Z(t){for(;!U(B());)z();return Y(t,D)}function J(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function Q(t,e,n,i){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case h:return t.return=t.return||t.value;case d:return"";case p:return t.return=t.value+"{"+J(t.children,i)+"}";case m:if(!S(t.value=t.props.join(",")))return""}return S(n=J(t.children,i))?t.return=t.value+"{"+n+"}":""}function _(t,e,n){switch(function(t,e){return 45^A(t,0)?(((e<<2^A(t,0))<<2^A(t,1))<<2^A(t,2))<<2^A(t,3):0}(t,e)){case 5103:return u+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+t+t;case 4789:return c+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return u+t+c+t+l+t+t;case 5936:switch(A(t,e+11)){case 114:return u+t+l+x(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return u+t+l+x(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return u+t+l+x(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return u+t+l+t+t;case 6165:return u+t+l+"flex-"+t+t;case 5187:return u+t+x(t,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+t;case 5443:return u+t+l+"flex-item-"+x(t,/flex-|-self/g,"")+(b(t,/flex-|baseline/)?"":l+"grid-row-"+x(t,/flex-|-self/g,""))+t;case 4675:return u+t+l+"flex-line-pack"+x(t,/align-content|flex-|-self/g,"")+t;case 5548:return u+t+l+x(t,"shrink","negative")+t;case 5292:return u+t+l+x(t,"basis","preferred-size")+t;case 6060:return u+"box-"+x(t,"-grow","")+u+t+l+x(t,"grow","positive")+t;case 4554:return u+x(t,/([^-])(transform)/g,"$1"+u+"$2")+t;case 6187:return x(x(x(t,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),t,"")+t;case 5495:case 3959:return x(t,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return x(x(t,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+t+t;case 4200:if(!b(t,/flex-|baseline/))return l+"grid-column-align"+E(t,e)+t;break;case 2592:case 3360:return l+x(t,"template-","")+t;case 4384:case 3616:return n&&n.some((function(t,n){return e=n,b(t.props,/grid-\w+-end/)}))?~w(t+(n=n[e].value),"span",0)?t:l+x(t,"-start","")+t+l+"grid-row-span:"+(~w(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(t,/\d+/))+";":l+x(t,"-start","")+t;case 4896:case 4128:return n&&n.some((function(t){return b(t.props,/grid-\w+-start/)}))?t:l+x(x(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return x(t,/(.+)-inline(.+)/,u+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(t)-1-e>6)switch(A(t,e+1)){case 109:if(45!==A(t,e+4))break;case 102:return x(t,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+c+(108==A(t,e+3)?"$3":"$2-$3"))+t;case 115:return~w(t,"stretch",0)?_(x(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return x(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(e,n,i,r,o,s,a){return l+n+":"+i+a+(r?l+n+"-span:"+(o?s:+s-+i)+a:"")+t}));case 4949:if(121===A(t,e+6))return x(t,":",":"+u)+t;break;case 6444:switch(A(t,45===A(t,14)?18:11)){case 120:return x(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===A(t,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+t;case 100:return x(t,":",":"+l)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(t,"scroll-","scroll-snap-")+t}return t}function tt(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case h:return void(t.return=_(t.value,t.length,n));case p:return J([O(t,{value:x(t.value,"@","@"+u)})],i);case m:if(t.length)return function(t,e){return t.map(e).join("")}(n=t.props,(function(e){switch(b(e,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":I(O(t,{props:[x(e,/:(read-\w+)/,":-moz-$1")]})),I(O(t,{props:[e]})),y(t,{props:C(n,i)});break;case"::placeholder":I(O(t,{props:[x(e,/:(plac\w+)/,":"+u+"input-$1")]})),I(O(t,{props:[x(e,/:(plac\w+)/,":-moz-$1")]})),I(O(t,{props:[x(e,/:(plac\w+)/,l+"input-$1")]})),I(O(t,{props:[e]})),y(t,{props:C(n,i)})}return""}))}}function et(t){return X(nt("",null,null,null,[""],t=W(t),0,[0],t))}function nt(t,e,n,i,r,o,s,a,l){for(var c=0,u=0,d=s,m=0,h=0,p=0,y=1,v=1,b=1,E=0,P="",C=r,T=o,M=i,j=P;v;)switch(p=E,E=z()){case 40:if(108!=p&&58==A(j,d-1)){-1!=w(j+=x(q(E),"&","&\f"),"&\f",f(c?a[c-1]:0))&&(b=-1);break}case 34:case 39:case 91:j+=q(E);break;case 9:case 10:case 13:case 32:j+=G(p);break;case 92:j+=H(N()-1,7);continue;case 47:switch(B()){case 42:case 47:k(rt(K(z(),N()),e,n,l),l);break;default:j+="/"}break;case 123*y:a[c++]=S(j)*b;case 125*y:case 59:case 0:switch(E){case 0:case 125:v=0;case 59+u:-1==b&&(j=x(j,/\f/g,"")),h>0&&S(j)-d&&k(h>32?ot(j+";",i,n,d-1,l):ot(x(j," ","")+";",i,n,d-2,l),l);break;case 59:j+=";";default:if(k(M=it(j,e,n,c,u,r,a,P,C=[],T=[],d,o),o),123===E)if(0===u)nt(j,e,M,M,C,o,d,a,T);else switch(99===m&&110===A(j,3)?100:m){case 100:case 108:case 109:case 115:nt(t,M,M,i&&k(it(t,M,M,0,0,r,a,P,r,C=[],d,T),T),r,T,d,a,i?C:T);break;default:nt(j,M,M,M,[""],T,0,a,T)}}c=u=h=0,y=b=1,P=j="",d=s;break;case 58:d=1+S(j),h=p;default:if(y<1)if(123==E)--y;else if(125==E&&0==y++&&125==L())continue;switch(j+=g(E),E*y){case 38:b=u>0?1:(j+="\f",-1);break;case 44:a[c++]=(S(j)-1)*b,b=1;break;case 64:45===B()&&(j+=q(z())),m=B(),u=d=S(P=j+=Z(N())),E++;break;case 45:45===p&&2==S(j)&&(y=0)}}return o}function it(t,e,n,i,r,o,s,a,l,c,u,d){for(var h=r-1,p=0===r?o:[""],g=P(p),y=0,b=0,w=0;y<i;++y)for(var A=0,S=E(t,h+1,h=f(b=s[y])),k=t;A<g;++A)(k=v(b>0?p[A]+" "+S:x(S,/&\f/g,p[A])))&&(l[w++]=k);return F(t,e,n,0===r?m:a,l,c,u,d)}function rt(t,e,n,i){return F(t,e,n,d,g(R),E(t,2,-2),0,i)}function ot(t,e,n,i,r){return F(t,e,n,h,E(t,0,i),E(t,i+1,-1),i,r)}var st={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},at="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",lt="active",ct="data-styled-version",ut="6.1.17",dt="/*!sc*/\n",mt="undefined"!=typeof window&&"HTMLElement"in window,ht=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),pt=(new Set,Object.freeze([])),ft=Object.freeze({});function gt(t,e,n){return void 0===n&&(n=ft),t.theme!==n.theme&&t.theme||e||n.theme}var yt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bt=/(^-|-$)/g;function xt(t){return t.replace(vt,"-").replace(bt,"")}var wt=/(a)(d)/gi,At=function(t){return String.fromCharCode(t+(t>25?39:97))};function Et(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=At(e%52)+n;return(At(e%52)+n).replace(wt,"$1-$2")}var St,Pt=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},kt=function(t){return Pt(5381,t)};function Ct(t){return Et(kt(t)>>>0)}function Tt(t){return t.displayName||t.name||"Component"}function Mt(t){return"string"==typeof t&&!0}var jt="function"==typeof Symbol&&Symbol.for,Dt=jt?Symbol.for("react.memo"):60115,Rt=jt?Symbol.for("react.forward_ref"):60112,Vt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ft={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ot={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},It=((St={})[Rt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},St[Dt]=Ot,St);function Lt(t){return("type"in(e=t)&&e.type.$$typeof)===Dt?Ot:"$$typeof"in t?It[t.$$typeof]:Vt;var e}var zt=Object.defineProperty,Bt=Object.getOwnPropertyNames,Nt=Object.getOwnPropertySymbols,Yt=Object.getOwnPropertyDescriptor,Ut=Object.getPrototypeOf,Wt=Object.prototype;function Xt(t,e,n){if("string"!=typeof e){if(Wt){var i=Ut(e);i&&i!==Wt&&Xt(t,i,n)}var r=Bt(e);Nt&&(r=r.concat(Nt(e)));for(var o=Lt(t),s=Lt(e),a=0;a<r.length;++a){var l=r[a];if(!(l in Ft||n&&n[l]||s&&l in s||o&&l in o)){var c=Yt(e,l);try{zt(t,l,c)}catch(t){}}}}return t}function qt(t){return"function"==typeof t}function Gt(t){return"object"==typeof t&&"styledComponentId"in t}function Ht(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function $t(t,e){if(0===t.length)return"";for(var n=t[0],i=1;i<t.length;i++)n+=e?e+t[i]:t[i];return n}function Kt(t){return null!==t&&"object"==typeof t&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Zt(t,e,n){if(void 0===n&&(n=!1),!n&&!Kt(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Zt(t[i],e[i]);else if(Kt(e))for(var i in e)t[i]=Zt(t[i],e[i]);return t}function Jt(t,e){Object.defineProperty(t,"toString",{value:e})}function Qt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var _t=function(){function t(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return t.prototype.indexOfGroup=function(t){for(var e=0,n=0;n<t;n++)e+=this.groupSizes[n];return e},t.prototype.insertRules=function(t,e){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,r=i;t>=r;)if((r<<=1)<0)throw Qt(16,"".concat(t));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var o=i;o<r;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),a=(o=0,e.length);o<a;o++)this.tag.insertRule(s,e[o])&&(this.groupSizes[t]++,s++)},t.prototype.clearGroup=function(t){if(t<this.length){var e=this.groupSizes[t],n=this.indexOfGroup(t),i=n+e;this.groupSizes[t]=0;for(var r=n;r<i;r++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(t){var e="";if(t>=this.length||0===this.groupSizes[t])return e;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),r=i+n,o=i;o<r;o++)e+="".concat(this.tag.getRule(o)).concat(dt);return e},t}(),te=new Map,ee=new Map,ne=1,ie=function(t){if(te.has(t))return te.get(t);for(;ee.has(ne);)ne++;var e=ne++;return te.set(t,e),ee.set(e,t),e},re=function(t,e){ne=e+1,te.set(t,e),ee.set(e,t)},oe="style[".concat(at,"][").concat(ct,'="').concat(ut,'"]'),se=new RegExp("^".concat(at,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ae=function(t,e,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&t.registerName(e,i)},le=function(t,e){for(var n,i=(null!==(n=e.textContent)&&void 0!==n?n:"").split(dt),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(se);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(re(u,c),ae(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},ce=function(t){for(var e=document.querySelectorAll(oe),n=0,i=e.length;n<i;n++){var r=e[n];r&&r.getAttribute(at)!==lt&&(le(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function ue(){return n.nc}var de=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(t){var e=Array.from(t.querySelectorAll("style[".concat(at,"]")));return e[e.length-1]}(n),o=void 0!==r?r.nextSibling:null;i.setAttribute(at,lt),i.setAttribute(ct,ut);var s=ue();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},me=function(){function t(t){this.element=de(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var e=document.styleSheets,n=0,i=e.length;n<i;n++){var r=e[n];if(r.ownerNode===t)return r}throw Qt(17)}(this.element),this.length=0}return t.prototype.insertRule=function(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch(t){return!1}},t.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},t.prototype.getRule=function(t){var e=this.sheet.cssRules[t];return e&&e.cssText?e.cssText:""},t}(),he=function(){function t(t){this.element=de(t),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(t,e){if(t<=this.length&&t>=0){var n=document.createTextNode(e);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},t.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},t}(),pe=function(){function t(t){this.rules=[],this.length=0}return t.prototype.insertRule=function(t,e){return t<=this.length&&(this.rules.splice(t,0,e),this.length++,!0)},t.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},t.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},t}(),fe=mt,ge={isServer:!mt,useCSSOMInjection:!ht},ye=function(){function t(t,e,n){void 0===t&&(t=ft),void 0===e&&(e={});var i=this;this.options=r(r({},ge),t),this.gs=e,this.names=new Map(n),this.server=!!t.isServer,!this.server&&mt&&fe&&(fe=!1,ce(this)),Jt(this,(function(){return function(t){for(var e=t.getTag(),n=e.length,i="",r=function(n){var r=function(t){return ee.get(t)}(n);if(void 0===r)return"continue";var o=t.names.get(r),s=e.getGroup(n);if(void 0===o||!o.size||0===s.length)return"continue";var a="".concat(at,".g").concat(n,'[id="').concat(r,'"]'),l="";void 0!==o&&o.forEach((function(t){t.length>0&&(l+="".concat(t,","))})),i+="".concat(s).concat(a,'{content:"').concat(l,'"}').concat(dt)},o=0;o<n;o++)r(o);return i}(i)}))}return t.registerId=function(t){return ie(t)},t.prototype.rehydrate=function(){!this.server&&mt&&ce(this)},t.prototype.reconstructWithOptions=function(e,n){return void 0===n&&(n=!0),new t(r(r({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(t=function(t){var e=t.useCSSOMInjection,n=t.target;return t.isServer?new pe(n):e?new me(n):new he(n)}(this.options),new _t(t)));var t},t.prototype.hasNameForId=function(t,e){return this.names.has(t)&&this.names.get(t).has(e)},t.prototype.registerName=function(t,e){if(ie(t),this.names.has(t))this.names.get(t).add(e);else{var n=new Set;n.add(e),this.names.set(t,n)}},t.prototype.insertRules=function(t,e,n){this.registerName(t,e),this.getTag().insertRules(ie(t),n)},t.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},t.prototype.clearRules=function(t){this.getTag().clearGroup(ie(t)),this.clearNames(t)},t.prototype.clearTag=function(){this.tag=void 0},t}(),ve=/&/g,be=/^\s*\/\/.*$/gm;function xe(t,e){return t.map((function(t){return"rule"===t.type&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map((function(t){return"".concat(e," ").concat(t)}))),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=xe(t.children,e)),t}))}function we(t){var e,n,i,r=void 0===t?ft:t,o=r.options,s=void 0===o?ft:o,a=r.plugins,l=void 0===a?pt:a,c=function(t,i,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(e):t},u=l.slice();u.push((function(t){t.type===m&&t.value.includes("&")&&(t.props[0]=t.props[0].replace(ve,n).replace(i,c))})),s.prefix&&u.push(tt),u.push(Q);var d=function(t,r,o,a){void 0===r&&(r=""),void 0===o&&(o=""),void 0===a&&(a="&"),e=a,n=r,i=new RegExp("\\".concat(n,"\\b"),"g");var l=t.replace(be,""),c=et(o||r?"".concat(o," ").concat(r," { ").concat(l," }"):l);s.namespace&&(c=xe(c,s.namespace));var d,m,h,p=[];return J(c,(d=u.concat((h=function(t){return p.push(t)},function(t){t.root||(t=t.return)&&h(t)})),m=P(d),function(t,e,n,i){for(var r="",o=0;o<m;o++)r+=d[o](t,e,n,i)||"";return r})),p};return d.hash=l.length?l.reduce((function(t,e){return e.name||Qt(15),Pt(t,e.name)}),5381).toString():"",d}var Ae=new ye,Ee=we(),Se=i.createContext({shouldForwardProp:void 0,styleSheet:Ae,stylis:Ee}),Pe=(Se.Consumer,i.createContext(void 0));function ke(){return(0,i.useContext)(Se)}function Ce(t){var e=(0,i.useState)(t.stylisPlugins),n=e[0],r=e[1],o=ke().styleSheet,s=(0,i.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),l=(0,i.useMemo)((function(){return we({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})}),[t.enableVendorPrefixes,t.namespace,n]);(0,i.useEffect)((function(){a()(n,t.stylisPlugins)||r(t.stylisPlugins)}),[t.stylisPlugins]);var c=(0,i.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:l}}),[t.shouldForwardProp,s,l]);return i.createElement(Se.Provider,{value:c},i.createElement(Pe.Provider,{value:l},t.children))}var Te=function(){function t(t,e){var n=this;this.inject=function(t,e){void 0===e&&(e=Ee);var i=n.name+e.hash;t.hasNameForId(n.id,i)||t.insertRules(n.id,i,e(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=e,Jt(this,(function(){throw Qt(12,String(n.name))}))}return t.prototype.getName=function(t){return void 0===t&&(t=Ee),this.name+t.hash},t}(),Me=function(t){return t>="A"&&t<="Z"};function je(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(1===n&&"-"===i&&"-"===t[0])return t;Me(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var De=function(t){return null==t||!1===t||""===t},Re=function(t){var e,n,i=[];for(var r in t){var s=t[r];t.hasOwnProperty(r)&&!De(s)&&(Array.isArray(s)&&s.isCss||qt(s)?i.push("".concat(je(r),":"),s,";"):Kt(s)?i.push.apply(i,o(o(["".concat(r," {")],Re(s),!1),["}"],!1)):i.push("".concat(je(r),": ").concat((e=r,null==(n=s)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||e in st||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Ve(t,e,n,i){return De(t)?[]:Gt(t)?[".".concat(t.styledComponentId)]:qt(t)?!qt(r=t)||r.prototype&&r.prototype.isReactComponent||!e?[t]:Ve(t(e),e,n,i):t instanceof Te?n?(t.inject(n,i),[t.getName(i)]):[t]:Kt(t)?Re(t):Array.isArray(t)?Array.prototype.concat.apply(pt,t.map((function(t){return Ve(t,e,n,i)}))):[t.toString()];var r}function Fe(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(qt(n)&&!Gt(n))return!1}return!0}var Oe=kt(ut),Ie=function(){function t(t,e,n){this.rules=t,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Fe(t),this.componentId=e,this.baseHash=Pt(Oe,e),this.baseStyle=n,ye.registerId(e)}return t.prototype.generateAndInjectStyles=function(t,e,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,e,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&e.hasNameForId(this.componentId,this.staticRulesId))i=Ht(i,this.staticRulesId);else{var r=$t(Ve(this.rules,t,e,n)),o=Et(Pt(this.baseHash,r)>>>0);if(!e.hasNameForId(this.componentId,o)){var s=n(r,".".concat(o),void 0,this.componentId);e.insertRules(this.componentId,o,s)}i=Ht(i,o),this.staticRulesId=o}else{for(var a=Pt(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=$t(Ve(u,t,e,n));a=Pt(a,d+c),l+=d}}if(l){var m=Et(a>>>0);e.hasNameForId(this.componentId,m)||e.insertRules(this.componentId,m,n(l,".".concat(m),void 0,this.componentId)),i=Ht(i,m)}}return i},t}(),Le=i.createContext(void 0);Le.Consumer;var ze={};new Set;function Be(t,e,n){var o=Gt(t),s=t,a=!Mt(t),l=e.attrs,c=void 0===l?pt:l,u=e.componentId,d=void 0===u?function(t,e){var n="string"!=typeof t?"sc":xt(t);ze[n]=(ze[n]||0)+1;var i="".concat(n,"-").concat(Ct(ut+n+ze[n]));return e?"".concat(e,"-").concat(i):i}(e.displayName,e.parentComponentId):u,m=e.displayName,h=void 0===m?function(t){return Mt(t)?"styled.".concat(t):"Styled(".concat(Tt(t),")")}(t):m,p=e.displayName&&e.componentId?"".concat(xt(e.displayName),"-").concat(e.componentId):e.componentId||d,f=o&&s.attrs?s.attrs.concat(c).filter(Boolean):c,g=e.shouldForwardProp;if(o&&s.shouldForwardProp){var y=s.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;g=function(t,e){return y(t,e)&&v(t,e)}}else g=y}var b=new Ie(n,p,o?s.componentStyle:void 0);function x(t,e){return function(t,e,n){var o=t.attrs,s=t.componentStyle,a=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=i.useContext(Le),m=ke(),h=t.shouldForwardProp||m.shouldForwardProp,p=gt(e,d,a)||ft,f=function(t,e,n){for(var i,o=r(r({},e),{className:void 0,theme:n}),s=0;s<t.length;s+=1){var a=qt(i=t[s])?i(o):i;for(var l in a)o[l]="className"===l?Ht(o[l],a[l]):"style"===l?r(r({},o[l]),a[l]):a[l]}return e.className&&(o.className=Ht(o.className,e.className)),o}(o,e,p),g=f.as||u,y={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===p||("forwardedAs"===v?y.as=f.forwardedAs:h&&!h(v,g)||(y[v]=f[v]));var b=function(t,e){var n=ke();return t.generateAndInjectStyles(e,n.styleSheet,n.stylis)}(s,f),x=Ht(l,c);return b&&(x+=" "+b),f.className&&(x+=" "+f.className),y[Mt(g)&&!yt.has(g)?"class":"className"]=x,n&&(y.ref=n),(0,i.createElement)(g,y)}(w,t,e)}x.displayName=h;var w=i.forwardRef(x);return w.attrs=f,w.componentStyle=b,w.displayName=h,w.shouldForwardProp=g,w.foldedComponentIds=o?Ht(s.foldedComponentIds,s.styledComponentId):"",w.styledComponentId=p,w.target=o?s.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var i=0,r=e;i<r.length;i++)Zt(t,r[i],!0);return t}({},s.defaultProps,t):t}}),Jt(w,(function(){return".".concat(w.styledComponentId)})),a&&Xt(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ne(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var Ye=function(t){return Object.assign(t,{isCss:!0})};function Ue(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(qt(t)||Kt(t))return Ye(Ve(Ne(pt,o([t],e,!0))));var i=t;return 0===e.length&&1===i.length&&"string"==typeof i[0]?Ve(i):Ye(Ve(Ne(i,e)))}function We(t,e,n){if(void 0===n&&(n=ft),!e)throw Qt(1,e);var i=function(i){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];return t(e,n,Ue.apply(void 0,o([i],r,!1)))};return i.attrs=function(i){return We(t,e,r(r({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return We(t,e,r(r({},n),i))},i}var Xe=function(t){return We(Be,t)},qe=Xe;yt.forEach((function(t){qe[t]=Xe(t)}));!function(){function t(t,e){this.rules=t,this.componentId=e,this.isStatic=Fe(t),ye.registerId(this.componentId+1)}t.prototype.createStyles=function(t,e,n,i){var r=i($t(Ve(this.rules,e,n,i)),""),o=this.componentId+t;n.insertRules(o,o,r)},t.prototype.removeStyles=function(t,e){e.clearRules(this.componentId+t)},t.prototype.renderStyles=function(t,e,n,i){t>2&&ye.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,e,n,i)}}();function Ge(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=$t(Ue.apply(void 0,o([t],e,!1))),r=Ct(i);return new Te(r,i)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ue(),i=$t([n&&'nonce="'.concat(n,'"'),"".concat(at,'="true"'),"".concat(ct,'="').concat(ut,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Qt(2);return t._emitSheetCSS()},this.getStyleElement=function(){var e;if(t.sealed)throw Qt(2);var n=t.instance.toString();if(!n)return[];var o=((e={})[at]="",e[ct]=ut,e.dangerouslySetInnerHTML={__html:n},e),s=ue();return s&&(o.nonce=s),[i.createElement("style",r({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new ye({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Qt(2);return i.createElement(Ce,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(t){throw Qt(3)}})(),"__sc-".concat(at,"__");const He=qe.div`
    display: flex:
    align-items: center:
    justify-content: center;
    padding: 0;
    margin: 0;
`;function $e(t){let{children:e}=t;return i.createElement(He,null,e)}const Ke=qe.div`
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
`;function Ze(t){let{children:e}=t;return i.createElement(Ke,null,e)}var Je=n(5399),Qe=n.p+"static/logo-pm-ipixuna-1-6b9d67a817bb074e41745730c212a6b2.png",_e=n.p+"static/logo-pm-itapipoca-cd4757a75cd467f1fbf6f69e79fc9e8a.png";const tn=qe.button`
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
`;function en(){return i.createElement(tn,null,"Mais clientes")}const nn=qe.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(100% - 4rem);
    background: #ffffff;
    padding: 2rem;
`,rn=qe.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    color: #333;
    margin: 2rem 0;

    @media (max-width: 768px) {
        margin: 1rem 0;
    }
`,on=qe.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start; /* Alinha os slides à esquerda */
    overflow-x: hidden; /* Esconde o que não cabe horizontalmente */
    width: 100%; /* Garante que o content ocupe toda a largura disponível */
    margin: 0 1rem; /* Adiciona margem nas laterais para os botões */
`,sn=qe.div`
    z-index: 1;
    background: #ffffff;
`,an=qe.button`
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
`,ln=qe.button`
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
`,cn=qe.div`
    display: flex;
    transition: transform 0.3s ease-in-out;
`,un=qe.div`
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
`,dn=qe.img`
    max-height: 5rem; 
    max-width: 100%; 
    object-fit: contain;

    @media (min-width: 768px) {
        height: 13rem; 
        width: 20rem;
    }
`,mn=[{id:1,src:Qe,alt:"Ipixuna"},{id:2,src:_e,alt:"Itapipoca"},{id:3,src:Qe,alt:"Ipixuna"},{id:4,src:_e,alt:"Itapipoca"},{id:5,src:Qe,alt:"Ipixuna"},{id:6,src:_e,alt:"Itapipoca"},{id:7,src:Qe,alt:"Ipixuna"},{id:8,src:_e,alt:"Itapipoca"},{id:9,src:Qe,alt:"Ipixuna"},{id:10,src:_e,alt:"Itapipoca"}];function hn(){const{0:t,1:e}=(0,i.useState)(0),n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{n.current&&(n.current.style.transform=`translateX(${t}px)`)}),[t]),i.createElement(nn,null,i.createElement(rn,null,"Conheça alguns clientes que confiam na M2A e usam nossos produtos"),i.createElement(on,null,i.createElement(sn,null,i.createElement(an,{onClick:()=>{if(n.current){const t=n.current.querySelector(":scope > div:first-child");if(t){const n=t.offsetWidth+parseFloat(getComputedStyle(t).marginRight);e((t=>Math.min(t+n,0)))}}}},i.createElement(Je.xrT,{size:20,color:"#004C99"}))),i.createElement(cn,{ref:n},mn.map((t=>i.createElement(un,{key:t.id},i.createElement(dn,{src:t.src,alt:t.alt}))))),i.createElement(sn,null,i.createElement(ln,{onClick:()=>{if(n.current){const t=n.current.querySelector(":scope > div:last-child"),i=n.current.offsetWidth;if(t){const r=t.offsetWidth+parseFloat(getComputedStyle(t).marginRight),o=-(n.current.scrollWidth-i);e((t=>Math.max(t-r,o)))}}}},i.createElement(Je.Xor,{size:20,color:"#004C99"})))),i.createElement(en,null))}var pn=n(4794);const fn=qe.div`
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
`,gn=qe.img`
    transition: all 0.95s ease-in-out;

    ${t=>t.isCabecalhoFlutuante?"":"filter: sepia(100%) hue-rotate(200deg) brightness(70%);"}
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
`,yn=qe.img`
    transition: all 0.95s ease-in-out;

    ${t=>t.isCabecalhoFlutuante?"":"\n        filter: sepia(100%) hue-rotate(200deg) brightness(50%);\n\n        "}
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;

    @media (max-width: 768px) {
        height: 1.5rem; 
    }
`;function vn(t){let{isCabecalhoFlutuante:e}=t;return i.createElement(fn,{isCabecalhoFlutuante:e},i.createElement(gn,{isCabecalhoFlutuante:e,src:(0,pn.withPrefix)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAQAAAAC0hrNAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfpBQgUIha4gr+oAAAGy0lEQVRYw6WYaWxUVRTH/2+60EJbdrVjtSyCBRcUXKOgURE1qaAomqBRlKhBlICJJm5UjUY0GhUhcWFpFBcqCYp7CMHWBBOsexFZpFAppbSlnXam82be/R8/3DfMe2/mTWf0nS/v3Xvu/d3l3HPOfRBkJ3V58WnqIb7DBh5giO3xabrcul4tip1Xl5ddL1kpRYJ8hocoFAq7WMuV8Yt0jXqYFoXCY1xnzaoJ/E+cYdQEDEO/946OT1cPhEYma1ljDyEh+9WSluL/jDOMTONVCzwwLf+ohf6tMsAaC8KnmFWxc83J0bGdZan15gRutJfSKzvMSTnh1GIeonJ10c0fuc6c4NaLjuf6tMiwWpglrrGAa9OOWSjWjan6sSnW3HB57By+6gG/uT1/QFxLMb/yg/FL2/hv4QruVItaB3vWZL5Hf3NTYUZcUyG/9YVZsbMEAmvOiZI29aB7Br2jO8s6y0Ijo+Pil6jb1RPqtgw4w+AGX5iwViDYO4gH7G/FevVouDy7A54Gpx7LAFNmlUCgllIoPKSe7j89F1AKLn6Zj1lr+UIgaC5iK3eruxsLfE/jPB5gE3ewjq+o++IX7B2UFtdSzH2+qHq1VM/Nmq0WJ3erdbA1l2vYrJ6MVHSUJpZVPeE+EtyiFjUXeXB81g+mHnfubtL8uYrHXZqh+HS7r9f8+rAbR4KM+OC+T12w+AX8lEyj2xefIRBsz+c3nprevpMcOPWQ79wWu1G9o7kmLcqOF3rRe4az2VPzkgNnVvn6kZucsM4ydmYwJ6Fwv44Z8Ss8TjDUUSoIAABQuBs7kfYxJji/hk7FCGR+xpWsDRhA/nd43VVeOnw+kqaiFvqM9oXk3GoCKXuSfgMeFAg6SnnEawUQaL/WXMS2NE0/SaYF3cP4XjYwCkORCkFKRFSRIARqgY5O6pGUZjsT50Ug8I8TaWSjvRq7XLO+EwLWam/YUsyDribt2k1FgvoAc1sOOIlfLBCou1yl70DA3xgzz7QdkNMmq7XnYKONa8oFp51eY4FrCjtRl0czUSngZ8mR2CW1lLYhAgH/yQnH2BSBgM84ysKIBJ1z6TvZNpj27mECgbqDQtFeksdywglXCQTRcU6ngNhU+/VwzwiBwLqacVrqHoEgXM4uCkV7dY9ZDyzdOtpzhwMXv/zEx8e2h5mYCBp8X9fomfLvHHFizRYI1FPJkoCRf+Lcz+MSACjcc4YJAPsG4XpdUTQMANCJHJ9ANQDwa0eJRBwO6+VoZfLrDFPe0G955QCAI7niMAsANv+EsP29P8A+R3XB0aNObam3x3Q6AGBfzriK/iBwi8KvAIDf+i8PRA476wsDLvVie9aTAEB25YxD4VQAwHcANh+fPrgNAnY4NneOK2E9i3soFG4SCGLn5moq/FDnNIZhVes8AALWOxT29Ax3AtuG8A1abBUI6vL4R06wzvYSd2g2DAi4wqlkThQIzEnq9sQ9JnY+P+8otfPnWc61GEA2elMOdT8EVrVDpdX25F0UbouOSc1TrJlZ4952JYRLaFqztBPuO6Gid+k8+yuklqVeK/jzgKAYt6hbnblouJxR9jYX6Q4+SSiq5SmRfZfOrhzjnM9vPClfQiw28S01T3uhpOwdxG8p/ECQDwBcE5hrn7QmADDOdtjypLwlqHcad2ADNgD9wcIqI4gRGIwAouiWdjYf3V/RDxgYamvGJudfGlgDVE7ETIDr85DIQfbq8emgyC2uMfdo552LHB+q7uZ2knX2dUC4uyaQzDPv1V3rHIM/eRbps2Sm3zZE3ZbOhLS0l8RnqMe5lTG75ZsCgXUzRS0Q2IsJNNTOeBQTgb7uYgAY5XEO1eN/4bs49Nym5Tw5LLMLP5Ie7EYLWnFcIlAoNoZgJE7D+FHj4fJLctAAYFTiz4b3rgCSiZ91A4Wi8y6/QKpHGKlgd9Yh6DqBgKuta1MuXPyAyn7z6+6wPu6ehCeDRIICgXog5cIl6BnBZnt2R307WG0P6OOscPu0djJ9dLuZC+0k6C/fDpR1le1Lf8kCt9prSmntiw0ZujgSPkUg6K9ky4A7d2N2uA0Zu9mu03yziu0Z9Y55f3P44NTyAca9Xkcvc3LGGa5M7TktLj5twFvcK1ozOoa/+81NXyyzwAmiY/jDAMAVeobtJfwoTW2D9k9Z4gR1eWqZIzClk3cTwUktZMhRHlIP+/1izOhoI6dyFc0MwK29o7VmfyXrKBSaXKkt9z/gBIL+0/h8hmN/MPFzQ2BdqZ7WXuR/4ASCxgLrGq7in2n/OFh80f8fklcMySFr7BtVPMUYa1SiDCUIIIouOSx/hX8u68q2h38BYnZwrA+F1kEAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAxODowMzoyOCAyMjo0NTo0MbdozoEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDUtMDhUMjA6MzQ6MDMrMDA6MDBKA5uMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTA1LTA4VDIwOjM0OjAzKzAwOjAwO14jMAAAAABJRU5ErkJggg==")}),i.createElement(yn,{isCabecalhoFlutuante:e,src:(0,pn.withPrefix)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAaCAQAAADWUVAIAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfpBQgTKBs5kz0aAAAJi0lEQVRYw+2Ye3BdVRWHv3Nu7m2SpilJmzamJU2LLbdoLaLCCB2QWoZHkRRBnr7Qqqjj28qISlMUtdPOFAdfiFopoVBbiECxiIhpoRCFVKBNqI04kfRh0yRNcm9ucs89+7f849w0TamlM/iakb3/2Xuvtdda395nv45n/H8l/78dwOvArwO/DvyaUoE+41Xm7krsBAhPjy2yjifuOCcE3ws/4NVSbE/3f++EvmF1d7n/ttxdidYRA7ri8EFTe19L2cJDtb0FWwB8LzjbP8cbZ7tS68f3Qve4soVgfbFN0Du+9MLMYyVdAD2lJ9R6SctoS8ETkYXwDH865q8b8TAwuWiRN8163aPx50ZaB6eMqfWmWUqbCpoBMpWF74Jc05j2fNznMr7hocsdIJNpT0eRkapQSiZzHzMMrVS/fqZmmZ7bW2wYRvhumUy76vyobhgKZIfl+uzMw2obDSM1UY0ydetxdWl/7gwjO0smk3LvNII5stxZhhEuVJekZ7Vbpt+lJhqG7pRJI97cxzWgUE+pS6b69sJ86+c0JKcm/UnSCsMIF8hk7v15+TUymfuGYXlgcx8x3JJ8mN8yUhXKhYuMvcXqlrnr83AbIo3w3JEQOks6S7RMJgvmdpa0F+aBl3WWdJa0FxqNBXpKppa+cqO7VE9rb3thHtj0bJ0/DBycqkGZW2LsLdY2mTbX+UcCh5dIsnCRkZ6sPTL93DDctTJZeLlhuE/L3DVHAuuPMpk6PM9AkpPpSUM71DsMnE3qns4Sw/PUIdMdhtFeqLTaZDKtGgE2DPc1mSw70zAiYPe1Q7JodN8X1bKzw4vzM7xPJnOLh4G1UaaDLQnDcFfLZOGlRwJrp0zP5+3eJJOCOc1x7ZGp8ZC/L3QUjQbOTJG0VybLvd3wCdkMnKlrmE3D8JpI7PSurkhD7hKmAmmAqecw1m4C4OLj3yS8WoBMY97ui7GNUcluIgfeLd54gN1FnAdsOyUAyDUB+JeMthQkORloyvdvArzYe97yTqqAxmEtf9XUwdH9xlxIzlYC+AvBB1sDeN7tbKZjtGrfCf5tAHoAwL+Yzm+uYy/wxmD2q2B+3Q7aQVsGzABU2nWkhl7ke8Ck2FKAiioSQHckS0faNaN7xKJ63pK6ALwafwaAdR4jlot4OnwYwIuAD95HBiix+tGKvle6mhOBu2PR+C3kt0sVjWXBq81xo91it7jfATnA3xF/pUrPzewDFgBYEDFFkngB5HsenrKH63ixvE7Umohac6faalsdJEc6tSZ4tz2W+DP7gLdlKn2YkKIBGOzdMNp+eCOLgO1d1wMEpzCdHncBfQDeqwDbk/5Kf2XBFqAVYOabhiWDU4ZLE1L2leHy8j10A9VRrehEALaPtjnUgkZ0vGoA2+52AHhvzk/SiXyYD8feMNLr5HmU0hvOow3wCy/0AbQGeLC8/3DzbpF3M7A/qK1IAxQsBD7jb+KTAJzZX85xJd0NUPCJ/AzMLWwLTx+WFdzNk1FpqagH5mYqAWIXAArvHG1pbCePAOe2JgD8C4B0ZkN8O88Dl6UnHt2/fxF4t8We4GwAbyEKjPUx7Q4vNnTz8C49NCM6k/VTd727PrzMUKNeGKoZqhmq0U6ZzF17rF1aDW6xW+yuMgzdLpO0LDszvEAvq6k5np0ly80zjOCtCqNduq9Mu2R6YKAyN0/dMi0fOYfdYrfYLc6ePHSSumT6Qf+E8FIFMrfYMHJvV1qmpty8YI7WyvS3weqRXVot2phNZpO5eTKZ+lBgGO7LzfHDgcPzR10nnukrUy460g2tksl0zzGBo/yyYdT57qv5Ay/Uur7y6FiKgA39cPjikZ6sdcrJZOpyn/O8Q8D57D5qZE/WY5JMpnZ3xbD/4K16Kq/Vo1X9E0aOpaEamftk3tOLMpn3n3kPtyZmnuIVD7WVHDi2Xn9Z8SwbfKr1nPCf62QqE9PVU7hLo0IfnBqvVu/Tu47VE+A/BPy/k/4Fr6WeUvuuu+y/DfIagLfFw7N6SgEGJodn7S6CbfEgubkADpQEMyE9cVsc9o8N5w1MBjBzDwd/ABiaFiSDWeB74ekDk4bt9Y4Pz4729A2x8IzsDNhdFCR9b3dRT+nQiUEySEK6IkhmZyzzIfOGoWoYrIrs9ZeD7wXJ1gQEs/YV7x8bJINkf/mGWJA8UHKgpKc0Uxkkg2QwE7rHZd8IMDBpsApaE+GZ3eOOQmyvyFqt76veCBdop1uitsyUwWpZpsoIL1K3obrBaYPV+qv7iu4PTjs4Xi+4pdrmrja0Vb/XLYb7uu7Vhugtk52tdvd5bRya0RzX77VKje5LfWXK5t7hPpWdqUe0VSs8T8v1nH6lrXW+1iidqdJao7FA3VptNMdl7qrsKbJwfrhAgVaE70pVyHRHWOuudFeoUbtVZ7ibFKYnGbpV9xhaq1t15yvpjgb8F32nbYyhJvcNQ49qxSuBdat+bfSVdY1zn1eL4a5Th6Gt7ouGod+ovrMkb61evzDSk9vGhJfp4PpYeJ4ye4v1kL6t7xp6xC01DC2PHpapCq1Rq36itUZunh7UgfWx5ricHlSdcuH8cIFShpGqUKtCd6O70nBLtMUw9GO97D5yCLhDy6KnyOh8lE/aVvKlkx5d5lNDJ7Cf6Uf5MKazD0oPTkh5NXSCdTJ1Wxy86+x20G3UTnw2WhacxD6Ij6+Z49XQfbnTforKK+2XXGt7ALyrLLpgVMbv4vslB0A3cB2TIXaRVlO+6CxgM+czjSEACq3BzQd+w2ZvyUhAA5MYwzPRUwXAVnDj7Id97zjW8GCDO4+zl0ymxasGprHjkCjL2NYEZW6QVuZAaoI713ZQDV41fz4tB7ba+wQMPROcyrTSuQDsYA7Er43daC1Utib8afS+tLv3ASZm7wOwe70PAfB3iu0lgIZfs4VxwCzvTbTEaoGXaLat+RiGvEtjjwOESygdibrofNJ0smBfcZ5inRayoLfseNbw3Vqrxz0vmKsX9CNt7T1hsFqmTe6GzhK16Hndb/SV61ndr4eys9rG6GHdqefC+Ya2arsaWhJaoV+o5e9j86/RHarXk+F7PU8/1336o7vSMNxnDUOP6EU1HByv5ap3n1JHS0Jr1seC09SUmaKbDfdZtbUkdIf7WF+5UuH8cIFyanAfTFVolaG7Rj5p3d4cbxujVFib/6R/qXu16bjWsOdlpkY/cRoLBipHy9bHMlXRHcjz3A3ZZNSannTkaslUNceHy3V+pqqxICr3T+goGvZi/DtznZ+ZejQf/wAfQoYaaHigywAAACF0RVh0Q3JlYXRpb24gVGltZQAyMDE4OjAzOjI4IDIyOjQ1OjQxt2jOgQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wNS0wOFQxOTozOTozMSswMDowMF0ZKcUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDUtMDhUMTk6Mzk6MzErMDA6MDAsRJF5AAAAAElFTkSuQmCC")}))}const bn=qe.button`
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
`;function xn(t){let{isCabecalhoFlutuante:e}=t;return i.createElement(bn,{isCabecalhoFlutuante:e},"Selecione um plano")}const wn=qe.div`
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
`;function An(t){let{children:e}=t;const{0:n,1:r}=(0,i.useState)(!1);(0,i.useEffect)((()=>{const t=()=>{window.scrollY>100&&!n?r(!0):window.scrollY<=100&&n&&r(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}}),[n]);const o=n?"cabecalho-fixo":"cabecalho-suspenso";return i.createElement(wn,{className:o},e)}const En=qe.button`
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
`;function Sn(){return i.createElement(En,null,"Solicite uma apresentação")}const Pn=qe.div`
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
`,kn=qe.div`
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
`,Cn=qe.label`
    font-size: 2.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }
`,Tn=qe.label`
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
`;function Mn(){return i.createElement(Pn,null,i.createElement(kn,null,i.createElement(Cn,null,"A M2A tem as soluções"),i.createElement(Tn,null,"que você precisa para realizar suas contratações governamentais!"),i.createElement(Sn,null)))}var jn=n(6512);const Dn=Ge`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`,Rn=qe.ul`
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
`,Vn=(qe.li`
    margin: 0 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
`,qe(pn.Link)`
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
            animation: ${Dn} 0.3s ease-out forwards;
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
`),Fn=qe.ul`
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
`,On=qe(pn.Link)`
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
`,In=qe(jn.pte)`
    font-size: 0.8rem;
`,Ln=qe.li`
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
`;function zn(){return i.createElement(Rn,null,i.createElement(Ln,null,i.createElement(Vn,{to:"/inicio",activeClassName:"active"},"Início")),i.createElement(Ln,null,i.createElement(Vn,{to:"/contratacoes",activeClassName:"active"},"Contratações")),i.createElement(Ln,null,i.createElement(Vn,{style:{width:"6rem"}},"Produtos ",i.createElement(In,null)),i.createElement(Fn,null,i.createElement(On,{to:"/produto-a",activeClassName:"active"},"M2A Planejamentos"),i.createElement(On,{to:"/produto-b",activeClassName:"active"},"M2A Compras"),i.createElement(On,{to:"/produto-c",activeClassName:"active"},"M2A Pesquisas"),i.createElement(On,{to:"/produto-c",activeClassName:"active"},"M2A Processos"),i.createElement(On,{to:"/produto-c",activeClassName:"active"},"M2A Processos Eletrônicos"),i.createElement(On,{to:"/produto-c",activeClassName:"active"},"M2A Tramitações"),i.createElement(On,{to:"/produto-c",activeClassName:"active"},"M2A Contratos"),i.createElement(On,{to:"/produto-c",activeClassName:"active"},"M2A Fornecedores"))),i.createElement(Ln,null,i.createElement(Vn,{to:"/sobre",activeClassName:"active"},"Sobre")),i.createElement(Ln,null,i.createElement(Vn,{to:"/conteudo",activeClassName:"active"},"Conteúdo")))}const Bn=qe.div`
    display: flex;
    align-items: center;
    position: relative;
`,Nn=qe.button`
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
`,Yn=qe.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`,Un=qe.div`
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
`,Wn=qe(pn.Link)`
    color: #3B3D3D;
    font-size: 18px;
    text-decoration: none;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f1f1f1;

    &:hover {
        color: #007bff;
    }
`,Xn=qe.div`
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
`,qn=qe.div`
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    transform: ${t=>{let{isOpen:e}=t;return e?"rotate(180deg)":"rotate(0deg)"}};
`,Gn=qe.div`
    max-height: ${t=>{let{isOpen:e}=t;return e?"00px":"0"}};
    overflow: hidden;
    transition: max-height 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
`,Hn=qe(pn.Link)`
    color: #555;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #007bff;
    }
`;var $n=()=>{const{0:t,1:e}=(0,i.useState)(!1),{0:n,1:r}=(0,i.useState)(!1),o=()=>{e(!t),t||r(!1)};return i.createElement(Bn,null,i.createElement(Nn,{onClick:o},t?i.createElement(jn.WQq,{size:24}):i.createElement(jn.nej,{size:24})),t&&i.createElement(Yn,{onClick:o}),i.createElement(Un,{isOpen:t},i.createElement(Wn,{to:"/inicio"},"Início"),i.createElement(Wn,{to:"/contratacoes"},"Contratações"),i.createElement(Xn,{onClick:()=>{r(!n)}},i.createElement("span",null,"Produtos"),i.createElement(qn,{isOpen:n},i.createElement(jn.pte,{size:16}))),i.createElement(Gn,{isOpen:n},i.createElement(Hn,{to:"/produto-a"},"M2A Planejamentos"),i.createElement(Hn,{to:"/produto-b"},"M2A Compras"),i.createElement(Hn,{to:"/produto-c"},"M2A Pesquisas"),i.createElement(Hn,{to:"/produto-d"},"M2A Processos"),i.createElement(Hn,{to:"/produto-e"},"M2A Processos Eletrônicos"),i.createElement(Hn,{to:"/produto-f"},"M2A Tramitações"),i.createElement(Hn,{to:"/produto-g"},"M2A Contratos"),i.createElement(Hn,{to:"/produto-h"},"M2A Fornecedores")),i.createElement(Wn,{to:"/sobre"},"Sobre"),i.createElement(Wn,{to:"/conteudo"},"Conteúdo")))};const Kn=qe.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
`,Zn=qe.label`
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
`,Jn=qe.div`
    display: inline-block;
`,Qn=qe.label`
    color: white;
    margin-bottom: 2rem;
    font-family: 'Montserrat Alternates', sans-serif;
    transform-origin: top;

    @media (max-width: 768px) {
        text-wrap-mode: wrap;
        margin: 1rem;
        text-align: center;
    }
`,_n=Ge`
    0% { transform: translateY(-100%); opacity: 0; }
    40% { transform: translateY(0); opacity: 1}
    100% { transform: translateY(0); opacity: 0}
`,ti=qe.label`

`,ei=qe.label`
    display: inline-block; /* Importante para a largura */
    animation: ${_n} 3.5s infinite;
`;function ni(t){let{palavras:e=[],tempoRotacao:n=3e3}=t;const{0:r,1:o}=(0,i.useState)(0),{0:s,1:a}=(0,i.useState)(e[0]);return(0,i.useEffect)((()=>{const t=setInterval((()=>{o((t=>(t+1)%e.length))}),n);return()=>clearInterval(t)}),[]),(0,i.useEffect)((()=>{a(e[r])}),[r]),i.createElement(ti,null,i.createElement(ei,{key:s},s))}var ii=n.p+"static/mural-m2a-compras-428c1ab1a164735e123280dc195aaefb.jpg",ri=n.p+"static/mural-m2a-planejamento-cf862d4f12c4c310a960e0a6335020c2.jpg",oi=n.p+"static/mural-m2a-pesquisas-1cd49d382db019e2e60c03b1d3284d88.jpg",si=n.p+"static/mural-m2a-fornecedores-f899bf9bbaa6570ab2968c054b3bc02f.jpg";const ai=qe.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  overflow-x: auto; /* Para lidar com muitas imagens */

  @media (max-width: 728px) {
	display: none;
  }
`,li=qe.div`
  	flex: 0 0 auto;
  	width: auto;
  	max-width: 400px; /* Ajuste conforme a largura desejada das capturas de tela */
  	height: auto;
	border-radius: 8px;
  	overflow: hidden;
  	margin-right: -30px; /* Margem negativa para sobreposição (ajuste conforme necessário) */
`,ci=qe.img`
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

`,ui=qe.img`
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

`,di=qe.img`
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
`,mi=qe.img`
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
`;var hi=()=>i.createElement(ai,null,i.createElement(li,null,i.createElement(ci,{src:ii,alt:"M2A Compras"})),i.createElement(li,null,i.createElement(ui,{src:ri,alt:"M2A Planejamento"})),i.createElement(li,null,i.createElement(di,{src:si,alt:"M2A Fornecedores"})),i.createElement(li,null,i.createElement(mi,{src:oi,alt:"M2A Pesquisas"})));function pi(){return i.createElement(Kn,null,i.createElement(Zn,null,i.createElement(Jn,null,"M2A")," é o mais ",i.createElement(ni,{palavras:["eficiente","completo","prático"],tempoRotacao:3e3})," portal de contratações públicas."),i.createElement(Qn,null,"Todas as ferramentas em um só lugar, para quem vai vender e quem vai comprar."),i.createElement(hi,null))}const fi=qe.div`
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
`;function gi(t){let{isCabecalhoFlutuante:e,windowWidth:n}=t;return i.createElement(fi,null,i.createElement(An,null,i.createElement(vn,{isCabecalhoFlutuante:e}),n<=1024?i.createElement($n,null):i.createElement(zn,null),i.createElement(xn,{isCabecalhoFlutuante:e})),i.createElement(Mn,null),i.createElement(pi,null))}const yi=qe.div`
    flex: 1 1 calc(33.33% - 6rem);
    position: relative; 
    border-radius: 1rem;
    margin: 2rem 1rem;
    min-height: 15rem;   
    min-width: 15rem;
`,vi=qe.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    min-height: 15rem;
    margin: -0.8rem 0.8rem 0.8rem -0.8rem;
    border-radius: 0.8rem;
    background: url(${t=>t.url_imagem}) no-repeat center center;
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
`,bi=qe.label`
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
`,xi=qe.label`
    position: absolute;
    bottom: 1rem;
    margin: 0 1rem 1rem 1rem;
    color: #ffffff;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;function wi(t){let{titulo:e,descricao:n,url_imagem:r,style:o}=t;return i.createElement(yi,{style:o},i.createElement(vi,{url_imagem:r}),i.createElement(bi,null,e),i.createElement(xi,null,n))}const Ai=qe.button`
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
`;function Ei(){return i.createElement(Ai,null,"Mais produtos")}var Si=n.p+"static/produto_compras-61bee3399e4ad0ca540aaa43b99cb8e2.png",Pi=n.p+"static/produto_pesquisa-69171438491862b545b72050ffc2c8da.png",ki=n.p+"static/produto_processos-195e6c1cdfab58a9c5bd12f9eff034f6.png",Ci=n.p+"static/produto_contratos-6f24d586024471fab471fe6b0b77264f.png",Ti=n.p+"static/produto_fornecedores-951f8846253b763d272d38f78e0d5c4f.png";const Mi=qe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    border-radius: 2rem;
`,ji=qe.div`
    flex-wrap: wrap;
    display: flex;
`,Di=qe.div`
    flex: 1 1 calc(20% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 8rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`,Ri=qe.div`
    flex: 3 1 calc(55% - 20px);
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;

    @media (max-width: 768px) {
        flex: 1;
        padding: 1rem;
    }
`,Vi=qe.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #003366;
    min-width: 30rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        min-width: 16rem;
    }
`,Fi=qe.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 1.2rem;
`;function Oi(){return i.createElement(Mi,null,i.createElement(ji,null,i.createElement(Di,null,i.createElement(Vi,null,"Nossas soluções são completas para que a gestão governamental do seu munícipio seja realizada com excelência."),i.createElement(Fi,null,"Nosso portfólio completo permite centralizar todas as soluções de gestão governamental em um único local. Desde o planejamento, passando pela documento de formalização de demanda, processos administrativos e contratação, até a gestão de contratos.")),i.createElement(Ri,null,i.createElement(wi,{titulo:"M2A Planejamentos",descricao:"Planeje suas demandas",url_imagem:Ci,style:{background:"royalblue"}}),i.createElement(wi,{titulo:"M2A Compras",descricao:"Crie suas demandas",url_imagem:Si,style:{background:"rgba(0, 110, 156, 0.69)"}}),i.createElement(wi,{titulo:"M2A Pesquisas",descricao:"Realize suas cotações de preço",url_imagem:Pi,style:{background:"#0F9B8E"}}),i.createElement(wi,{titulo:"M2A Processos",descricao:"Parametrize suas contratações",url_imagem:ki,style:{background:"#478dcc"}}),i.createElement(wi,{titulo:"M2A Fornecedores",descricao:"Participe de contratações",url_imagem:Ti,style:{background:"#2b576e"}}),i.createElement(wi,{titulo:"M2A Contratos",descricao:"Gerencie seus contratos",url_imagem:Ci,style:{background:"#2F4F4F"}}))),i.createElement(Ei,null))}var Ii=n(6973),Li=n(7909),zi=n(5867),Bi=n(5066),Ni=n(1351),Yi=n(2388),Ui=n(1406);const Wi=qe.div`
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
`,Xi=qe.label`
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`,qi=qe.label`
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: 'Montserrat Alternates', sans-serif;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`,Gi=qe.div`
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
`,Hi=qe.div`
    color:rgb(245, 212, 115);
    font-size: 5rem;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`,$i=qe.label`
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
`,Ki=qe.label`
    color: #ffffff;
    font-size: 1.1rem;
    font-family: 'Montserrat Alternates', sans-serif;
    text-align: center;
    width: 15rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;function Zi(t){let{titulo:e,descricao:n}=t;return i.createElement(Wi,null,i.createElement(Xi,null,e),i.createElement(qi,null,n))}function Ji(t){let{icone:e,titulo:n,descricao:r}=t;return i.createElement(Gi,null,i.createElement(Hi,null,e),i.createElement($i,null,n),i.createElement(Ki,null,r))}function Qi(t){let{valorFinal:e,visible:n,duracao:r=1e3}=t;const{0:o,1:s}=(0,i.useState)(0),a=(0,i.useRef)(0);return(0,i.useEffect)((()=>{const t=performance.now(),n=()=>{const i=performance.now()-t,o=Math.min(i/r,1);s(Math.ceil(o*e)),o<1&&(a.current=requestAnimationFrame(n))};return a.current=requestAnimationFrame(n),()=>cancelAnimationFrame(a.current)}),[e,r,n]),i.createElement("span",null,o)}const _i=qe.div`
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
`,tr=qe.div`
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
`;function er(){const t=(0,i.useRef)(null),{0:e,1:n}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?n(!0):n(!1)}))}),{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}}),[]),i.createElement(_i,{ref:t},i.createElement(tr,null,i.createElement(Zi,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(Qi,{visible:e,valorFinal:300,duracao:2500})),descricao:"Clientes"}),i.createElement(Zi,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(Qi,{visible:e,valorFinal:1e4,duracao:2500}),i.createElement("label",null," mil ")),descricao:"Contratações"}),i.createElement(Zi,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(Qi,{visible:e,valorFinal:5e3,duracao:2500}),i.createElement("label",null," mil ")),descricao:"Fornecedores"}),i.createElement(Zi,{titulo:i.createElement(i.Fragment,null,i.createElement("label",null,"+ "),i.createElement(Qi,{visible:e,valorFinal:15e3,duracao:2500}),i.createElement("label",null," mil ")),descricao:"Contratos"})),i.createElement(Ji,{icone:i.createElement(Li.c4U,null),titulo:"+ 300 mil",descricao:"dfd's criados"}),i.createElement(Ji,{icone:i.createElement(Bi.QDl,null),titulo:"+ 250 mil",descricao:"pesquisas realizadas"}),i.createElement(Ji,{icone:i.createElement(zi.xAX,null),titulo:"+ 200 mil",descricao:"pedidos de cotação respondidos"}),i.createElement(Ji,{icone:i.createElement(Ii.fIi,null),titulo:"+ 1 milhão",descricao:"preços importados"}),i.createElement(Ji,{icone:i.createElement(jn.Gjp,null),titulo:"+ 200 mil",descricao:"licitações públicadas"}),i.createElement(Ji,{icone:i.createElement(Ni.Ua$,null),titulo:"+ 50 mil",descricao:"contratações diretas públicadas"}),i.createElement(Ji,{icone:i.createElement(Yi.sn$,null),titulo:"+ 20 mil",descricao:"procedimentos auxiliares públicados"}),i.createElement(Ji,{icone:i.createElement(Ui.sGK,null),titulo:"+ 100 mil",descricao:"processos eletrônicos gerenciados"}))}var nr=n(1735);const ir=qe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    background-color: #ffffff;
    overflow: hidden;
    margin: 10rem 10rem 0 10rem;
`,rr=qe.div`
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

`,or=qe.div`
    padding: 0 5rem 5rem 5rem;
    color: #003366;
`,sr=qe.div`
    display: flex;
    flex-direction: column;
    line-height: 2;
`,ar=qe.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #003366;
`,lr=qe.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 0.90rem;
    max-width: 40rem
`;function cr(){const t=(0,i.useRef)(null),{0:e,1:n}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?n(!0):n(!1)}))}),{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}}),[]),i.createElement(ir,null,i.createElement(rr,{ref:t,style:{justifyContent:"flex-start"},className:e?"visible-right":"invisible-right"},i.createElement(or,null,i.createElement(Je.wYV,{size:200})),i.createElement(sr,null,i.createElement(ar,null,"Tecnologia de ponta"),i.createElement(lr,null,"Estamos evoluindo constantemente as nossas soluções, tudo isso para garantir que nossos clientes tenham acesso à tecnologia de qualidade, proporcionando uma experiência agradável, prática e segura. Todos os nossos sistemas são totalmente online e podem ser acessados de qualquer aparelho que navega pela internet."))),i.createElement(rr,{ref:t,style:{justifyContent:"flex-end",flexDirection:"row-reverse"},className:e?"visible-left":"invisible-left"},i.createElement(or,null,i.createElement(nr.fHv,{size:200})),i.createElement(sr,null,i.createElement(ar,null,"Somos Especialista"),i.createElement(lr,null,"Além da tecnologia, contamos com equipe de especialistas com vasta experiência no negócio, sempre preocupados em manter a qualidade e a legalidade jurídica de nossas soluções."))),i.createElement(rr,{ref:t,style:{justifyContent:"flex-start"},className:e?"visible-right":"invisible-right"},i.createElement(or,null,i.createElement(Ui.KCy,{size:200})),i.createElement(sr,null,i.createElement(ar,null,"Suporte diferenciado"),i.createElement(lr,null,"Fornecer um atendimento de qualidade é essencial para mantermos a qualidade de nossas soluções. Queremos estar sempre próximos aos nossos clientes, entender suas necessidades e solucioná-los da melhor maneira."))))}const ur=qe.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;
    height: 34rem;
    max-width: 22rem;
    margin: 2rem 1rem;
    border-radius: 1.5rem;
    overflow: visible;
`,dr=qe.div`
    padding: 1rem;
    opacity: 1;
    background: transparent;
    box-shadow: none;
    max-height: 35rem;
`,mr=qe.img`
    margin-top: -45px;
    height: 20rem;
    width: 100%;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.50rem 0.50rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.50rem -0.0625rem;
    filter: brightness(95%);
`,hr=qe.div`
    display: flex;
    flex-direction: column;
    padding: 24px 8px 8px;
    opacity: 1;
    background: transparent;
    box-shadow: none;
}
`,pr=qe.label`
    font-weight: bold;
    font-size: 1rem;
    color: #003366;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`,fr=qe.label`
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;function gr(t){let{imagem:e,titulo:n,descricao:r,style:o}=t;return i.createElement(ur,{style:o},i.createElement(dr,null,i.createElement(mr,{src:e}),i.createElement(hr,null,i.createElement(pr,null,n),i.createElement(fr,null,r))))}var yr=n.p+"static/ia-software-f8494f538ed934a3d0831fe9196cc8fc.png",vr=n.p+"static/ia-2-software-4a24c1234c12e6283803f7de7b5dcbca.png",br=n.p+"static/ia-3-software-5d8d2dd0824c3f5f50e594a2e951b666.png";const xr=qe.div`
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
`,wr=qe.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 45rem;
`,Ar=qe.label`
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    margin: 4rem;
`;function Er(){return i.createElement(xr,null,i.createElement(Ar,null,"MIA: A Inteligência Artificial que Entende o seu Governo"),i.createElement(wr,null,i.createElement(gr,{style:{alignSelf:"flex-end"},imagem:yr,titulo:"Estudos Técnicos Aprofundados",descricao:" Otimize seus estudos técnicos preliminares com a MIA, nossa Inteligência Artificial. Ela  auxilia na geração de análises bem elaboradas, garantindo um entendimento completo da demanda  e a melhor abordagem para atendê-la. Conte com a precisão e eficiência da MIA para impulsionar  seus projetos. "}),i.createElement(gr,{style:{alignSelf:"flex-start"},imagem:br,titulo:"Formalização de Demandas Inteligente e Eficaz",descricao:" Simplifique a formalização de suas demandas com a MIA. Nossa Inteligência Artificial auxilia na  criação de objetos e justificativas claras e concisas, detalhando o que é a demanda e o motivo  de sua necessidade. Garanta documentos bem elaborados e um processo mais eficiente com a MIA. "}),i.createElement(gr,{style:{alignSelf:"flex-end"},imagem:vr,titulo:"Avaliação de Riscos Inteligente e Seguras",descricao:" Minimize riscos em suas contratações com a MIA, nossa Inteligência Artificial especializada em  avaliação de perigos. Ela analisa dados complexos e identifica potenciais vulnerabilidades,  fornecendo insights cruciais para decisões mais seguras e eficientes. Confie na MIA para  proteger seus projetos. "})))}const Sr=qe.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    width: calc(100% - 4rem);
    background: #003366;
    margin: 0.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`,Pr=qe.label`
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
`,kr=qe.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1rem;
    width: 100%;
`,Cr=qe.label`
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
`,Tr=qe.label`
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
    color: #ffffff;
`,Mr=qe.img`
    height: 5rem;
    width: 6rem;
    border-radius: 0.9rem;
    background: blue;
    margin: 1.5rem;
`;function jr(t){let{numero:e,titulo:n,data:r,imagem:o,style:s}=t;return i.createElement(Sr,{style:s},i.createElement(Pr,null,e),i.createElement(kr,null,i.createElement(Cr,null,n),i.createElement(Tr,null,r)),i.createElement(Mr,{src:o}))}const Dr=qe.button`
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
`;function Rr(){return i.createElement(Dr,null,"Mais notícias")}const Vr=qe.div`
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
`,Fr=qe.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,Or=qe.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem;
    min-width: 50rem;

    @media (max-width: 768px) {
        min-width: 100%;
        margin: 0;
    }
`,Ir=qe.img`
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
`,Lr=qe.div`
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
`,zr=qe.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    height: 10rem;
    width: 100%;
`;function Br(){return i.createElement(Vr,null,i.createElement(zr,null,"Notícias"),i.createElement(Fr,null,i.createElement(Or,null,i.createElement(Ir,{src:ki})),i.createElement(Lr,null,i.createElement(jr,{numero:"4°",titulo:"Quarta Notícia",data:"12 de maio",imagem:Si}),i.createElement(jr,{numero:"5°",titulo:"Quinta Notícia",data:"11 de maio",imagem:Si}),i.createElement(jr,{numero:"6°",titulo:"Sexta Notícia",data:"10 de maio",imagem:Si}),i.createElement(jr,{numero:"7°",titulo:"Sétima Notícia",data:"10 de maio",imagem:Si}))),i.createElement(Rr,null))}function Nr(t){if("undefined"==typeof Proxy)return t;const e=new Map;return new Proxy(((...e)=>t(...e)),{get:(n,i)=>"create"===i?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}function Yr(t){return null!==t&&"object"==typeof t&&"function"==typeof t.start}function Ur(t){const e=[{},{}];return t?.values.forEach(((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()})),e}function Wr(t,e,n,i){if("function"==typeof e){const[r,o]=Ur(i);e=e(void 0!==n?n:t.custom,r,o)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){const[r,o]=Ur(i);e=e(void 0!==n?n:t.custom,r,o)}return e}function Xr(t,e,n){const i=t.getProps();return Wr(i,e,void 0!==n?n:i.custom,t)}function qr(t,e){return t?.[e]??t?.default??t}const Gr=t=>t,Hr={},$r=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Kr={value:null,addProjectionMetrics:null};function Zr(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=$r.reduce(((t,n)=>(t[n]=function(t,e){let n=new Set,i=new Set,r=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function c(e){s.has(e)&&(u.schedule(e),t()),l++,e(a)}const u={schedule:(t,e=!1,o=!1)=>{const a=o&&r?n:i;return e&&s.add(t),a.has(t)||a.add(t),t},cancel:t=>{i.delete(t),s.delete(t)},process:t=>{a=t,r?o=!0:(r=!0,[n,i]=[i,n],n.forEach(c),e&&Kr.value&&Kr.value.frameloop[e].push(l),l=0,n.clear(),r=!1,o&&(o=!1,u.process(t)))}};return u}(o,e?n:void 0),t)),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:m,render:h,postRender:p}=s,f=()=>{const o=Hr.useManualTiming?r.timestamp:performance.now();n=!1,Hr.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(o-r.timestamp,40),1)),r.timestamp=o,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),m.process(r),h.process(r),p.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(f))};return{schedule:$r.reduce(((e,o)=>{const a=s[o];return e[o]=(e,o=!1,s=!1)=>(n||(n=!0,i=!0,r.isProcessing||t(f)),a.schedule(e,o,s)),e}),{}),cancel:t=>{for(let e=0;e<$r.length;e++)s[$r[e]].cancel(t)},state:r,steps:s}}const{schedule:Jr,cancel:Qr,state:_r,steps:to}=Zr("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:Gr,!0),eo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],no=(()=>new Set(eo))(),io=new Set(["width","height","top","left","right","bottom",...eo]);function ro(t,e){-1===t.indexOf(e)&&t.push(e)}function oo(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class so{constructor(){this.subscriptions=[]}add(t){return ro(this.subscriptions,t),()=>oo(this.subscriptions,t)}notify(t,e,n){const i=this.subscriptions.length;if(i)if(1===i)this.subscriptions[0](t,e,n);else for(let r=0;r<i;r++){const i=this.subscriptions[r];i&&i(t,e,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function ao(t,e){return e?t*(1e3/e):0}let lo;function co(){lo=void 0}const uo={now:()=>(void 0===lo&&uo.set(_r.isProcessing||Hr.useManualTiming?_r.timestamp:performance.now()),lo),set:t=>{lo=t,queueMicrotask(co)}},mo={current:void 0};class ho{constructor(t,e={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(t,e=!0)=>{const n=uo.now();if(this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(t),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const i of this.dependents)i.dirty();e&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){var e;this.current=t,this.updatedAt=uo.now(),null===this.canTrackVelocity&&void 0!==t&&(this.canTrackVelocity=(e=this.current,!isNaN(parseFloat(e))))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new so);const n=this.events[t].add(e);return"change"===t?()=>{n(),Jr.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}setWithVelocity(t,e,n){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return mo.current&&mo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=uo.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,30);return ao(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise((e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function po(t,e){return new ho(t,e)}const fo=t=>Array.isArray(t);function go(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,po(n))}function yo(t){return fo(t)?t[t.length-1]||0:t}const vo=t=>Boolean(t&&t.getVelocity);function bo(t,e){const n=t.getValue("willChange");if(i=n,Boolean(vo(i)&&i.add))return n.add(e);if(!n&&Hr.WillChange){const n=new Hr.WillChange("auto");t.addValue("willChange",n),n.add(e)}var i}const xo=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),wo="data-"+xo("framerAppearId");function Ao(t){return t.props[wo]}const Eo=(t,e)=>n=>e(t(n)),So=(...t)=>t.reduce(Eo),Po=(t,e,n)=>n>e?e:n<t?t:n,ko=t=>1e3*t,Co=t=>t/1e3,To={layout:0,mainThread:0,waapi:0};const Mo=t=>e=>"string"==typeof e&&e.startsWith(t),jo=Mo("--"),Do=Mo("var(--"),Ro=t=>!!Do(t)&&Vo.test(t.split("/*")[0].trim()),Vo=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Fo={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},Oo={...Fo,transform:t=>Po(0,1,t)},Io={...Fo,default:1},Lo=t=>Math.round(1e5*t)/1e5,zo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Bo=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,No=(t,e)=>n=>Boolean("string"==typeof n&&Bo.test(n)&&n.startsWith(t)||e&&!function(t){return null==t}(n)&&Object.prototype.hasOwnProperty.call(n,e)),Yo=(t,e,n)=>i=>{if("string"!=typeof i)return i;const[r,o,s,a]=i.match(zo);return{[t]:parseFloat(r),[e]:parseFloat(o),[n]:parseFloat(s),alpha:void 0!==a?parseFloat(a):1}},Uo={...Fo,transform:t=>Math.round((t=>Po(0,255,t))(t))},Wo={test:No("rgb","red"),parse:Yo("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Uo.transform(t)+", "+Uo.transform(e)+", "+Uo.transform(n)+", "+Lo(Oo.transform(i))+")"};const Xo={test:No("#"),parse:function(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}},transform:Wo.transform},qo=t=>({test:e=>"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),Go=qo("deg"),Ho=qo("%"),$o=qo("px"),Ko=qo("vh"),Zo=qo("vw"),Jo=(()=>({...Ho,parse:t=>Ho.parse(t)/100,transform:t=>Ho.transform(100*t)}))(),Qo={test:No("hsl","hue"),parse:Yo("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ho.transform(Lo(e))+", "+Ho.transform(Lo(n))+", "+Lo(Oo.transform(i))+")"},_o={test:t=>Wo.test(t)||Xo.test(t)||Qo.test(t),parse:t=>Wo.test(t)?Wo.parse(t):Qo.test(t)?Qo.parse(t):Xo.parse(t),transform:t=>"string"==typeof t?t:t.hasOwnProperty("red")?Wo.transform(t):Qo.transform(t)},ts=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const es="number",ns="color",is=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function rs(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let o=0;const s=e.replace(is,(t=>(_o.test(t)?(i.color.push(o),r.push(ns),n.push(_o.parse(t))):t.startsWith("var(")?(i.var.push(o),r.push("var"),n.push(t)):(i.number.push(o),r.push(es),n.push(parseFloat(t))),++o,"${}"))).split("${}");return{values:n,split:s,indexes:i,types:r}}function os(t){return rs(t).values}function ss(t){const{split:e,types:n}=rs(t),i=e.length;return t=>{let r="";for(let o=0;o<i;o++)if(r+=e[o],void 0!==t[o]){const e=n[o];r+=e===es?Lo(t[o]):e===ns?_o.transform(t[o]):t[o]}return r}}const as=t=>"number"==typeof t?0:t;const ls={test:function(t){return isNaN(t)&&"string"==typeof t&&(t.match(zo)?.length||0)+(t.match(ts)?.length||0)>0},parse:os,createTransformer:ss,getAnimatableNone:function(t){const e=os(t);return ss(t)(e.map(as))}};function cs(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function us(t,e){return n=>n>0?e:t}const ds=(t,e,n)=>t+(e-t)*n,ms=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},hs=[Xo,Wo,Qo];function ps(t){const e=(t=>hs.find((e=>e.test(t))))(t);if(Boolean(e),!Boolean(e))return!1;let n=e.parse(t);return e===Qo&&(n=function({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,n/=100;let r=0,o=0,s=0;if(e/=100){const i=n<.5?n*(1+e):n+e-n*e,a=2*n-i;r=cs(a,i,t+1/3),o=cs(a,i,t),s=cs(a,i,t-1/3)}else r=o=s=n;return{red:Math.round(255*r),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const fs=(t,e)=>{const n=ps(t),i=ps(e);if(!n||!i)return us(t,e);const r={...n};return t=>(r.red=ms(n.red,i.red,t),r.green=ms(n.green,i.green,t),r.blue=ms(n.blue,i.blue,t),r.alpha=ds(n.alpha,i.alpha,t),Wo.transform(r))},gs=new Set(["none","hidden"]);function ys(t,e){return n=>ds(t,e,n)}function vs(t){return"number"==typeof t?ys:"string"==typeof t?Ro(t)?us:_o.test(t)?fs:ws:Array.isArray(t)?bs:"object"==typeof t?_o.test(t)?fs:xs:us}function bs(t,e){const n=[...t],i=n.length,r=t.map(((t,n)=>vs(t)(t,e[n])));return t=>{for(let e=0;e<i;e++)n[e]=r[e](t);return n}}function xs(t,e){const n={...t,...e},i={};for(const r in n)void 0!==t[r]&&void 0!==e[r]&&(i[r]=vs(t[r])(t[r],e[r]));return t=>{for(const e in i)n[e]=i[e](t);return n}}const ws=(t,e)=>{const n=ls.createTransformer(e),i=rs(t),r=rs(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?gs.has(t)&&!r.values.length||gs.has(e)&&!i.values.length?function(t,e){return gs.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}(t,e):So(bs(function(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],s=t.indexes[o][i[o]],a=t.values[s]??0;n[r]=a,i[o]++}return n}(i,r),r.values),n):us(t,e)};function As(t,e,n){if("number"==typeof t&&"number"==typeof e&&"number"==typeof n)return ds(t,e,n);return vs(t)(t,e)}const Es=t=>{const e=({timestamp:e})=>t(e);return{start:(t=!0)=>Jr.update(e,t),stop:()=>Qr(e),now:()=>_r.isProcessing?_r.timestamp:uo.now()}},Ss=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let o=0;o<r;o++)i+=t(o/(r-1))+", ";return`linear(${i.substring(0,i.length-2)})`},Ps=2e4;function ks(t){let e=0;let n=t.next(e);for(;!n.done&&e<Ps;)e+=50,n=t.next(e);return e>=Ps?1/0:e}function Cs(t,e,n){const i=Math.max(e-5,0);return ao(n-t(i),e-i)}const Ts=100,Ms=10,js=1,Ds=0,Rs=800,Vs=.3,Fs=.3,Os={granular:.01,default:2},Is={granular:.005,default:.5},Ls=.01,zs=10,Bs=.05,Ns=1,Ys=.001;function Us({duration:t=Rs,bounce:e=Vs,velocity:n=Ds,mass:i=js}){let r,o;ko(zs);let s=1-e;s=Po(Bs,Ns,s),t=Po(Ls,zs,Co(t)),s<1?(r=e=>{const i=e*s,r=i*t,o=i-n,a=Xs(e,s),l=Math.exp(-r);return Ys-o/a*l},o=e=>{const i=e*s*t,o=i*n+n,a=Math.pow(s,2)*Math.pow(e,2)*t,l=Math.exp(-i),c=Xs(Math.pow(e,2),s);return(-r(e)+Ys>0?-1:1)*((o-a)*l)/c}):(r=e=>Math.exp(-e*t)*((e-n)*t+1)-.001,o=e=>Math.exp(-e*t)*(t*t*(n-e)));const a=function(t,e,n){let i=n;for(let r=1;r<Ws;r++)i-=t(i)/e(i);return i}(r,o,5/t);if(t=ko(t),isNaN(a))return{stiffness:Ts,damping:Ms,duration:t};{const e=Math.pow(a,2)*i;return{stiffness:e,damping:2*s*Math.sqrt(i*e),duration:t}}}const Ws=12;function Xs(t,e){return t*Math.sqrt(1-e*e)}const qs=["duration","bounce"],Gs=["stiffness","damping","mass"];function Hs(t,e){return e.some((e=>void 0!==t[e]))}function $s(t=Fs,e=Vs){const n="object"!=typeof t?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:d,velocity:m,isResolvedFromDuration:h}=function(t){let e={velocity:Ds,stiffness:Ts,damping:Ms,mass:js,isResolvedFromDuration:!1,...t};if(!Hs(t,Gs)&&Hs(t,qs))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(1.2*n),r=i*i,o=2*Po(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:js,stiffness:r,damping:o}}else{const n=Us(t);e={...e,...n,mass:js},e.isResolvedFromDuration=!0}return e}({...n,velocity:-Co(n.velocity||0)}),p=m||0,f=c/(2*Math.sqrt(l*u)),g=s-o,y=Co(Math.sqrt(l/u)),v=Math.abs(g)<5;let b;if(i||(i=v?Os.granular:Os.default),r||(r=v?Is.granular:Is.default),f<1){const t=Xs(y,f);b=e=>{const n=Math.exp(-f*y*e);return s-n*((p+f*y*g)/t*Math.sin(t*e)+g*Math.cos(t*e))}}else if(1===f)b=t=>s-Math.exp(-y*t)*(g+(p+y*g)*t);else{const t=y*Math.sqrt(f*f-1);b=e=>{const n=Math.exp(-f*y*e),i=Math.min(t*e,300);return s-n*((p+f*y*g)*Math.sinh(i)+t*g*Math.cosh(i))/t}}const x={calculatedDuration:h&&d||null,next:t=>{const e=b(t);if(h)a.done=t>=d;else{let n=0===t?p:0;f<1&&(n=0===t?ko(p):Cs(b,t,e));const o=Math.abs(n)<=i,l=Math.abs(s-e)<=r;a.done=o&&l}return a.value=a.done?s:e,a},toString:()=>{const t=Math.min(ks(x),Ps),e=Ss((e=>x.next(t*e).value),t,30);return t+"ms "+e},toTransition:()=>{}};return x}function Ks({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],m={done:!1,value:d},h=t=>void 0===a?l:void 0===l||Math.abs(a-t)<Math.abs(l-t)?a:l;let p=n*e;const f=d+p,g=void 0===s?f:s(f);g!==f&&(p=g-d);const y=t=>-p*Math.exp(-t/i),v=t=>g+y(t),b=t=>{const e=y(t),n=v(t);m.done=Math.abs(e)<=c,m.value=m.done?g:n};let x,w;const A=t=>{(t=>void 0!==a&&t<a||void 0!==l&&t>l)(m.value)&&(x=t,w=$s({keyframes:[m.value,h(m.value)],velocity:Cs(v,t,m.value),damping:r,stiffness:o,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:t=>{let e=!1;return w||void 0!==x||(e=!0,b(t),A(t)),void 0!==x&&t>=x?w.next(t-x):(!e&&b(t),m)}}}$s.applyToOptions=t=>{const e=function(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(ks(i),Ps);return{type:"keyframes",ease:t=>i.next(r*t).value/e,duration:Co(r)}}(t,100,$s);return t.ease=e.ease,t.duration=ko(e.duration),t.type="keyframes",t};const Zs=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t;function Js(t,e,n,i){if(t===e&&n===i)return Gr;const r=e=>function(t,e,n,i,r){let o,s,a=0;do{s=e+(n-e)/2,o=Zs(s,i,r)-t,o>0?n=s:e=s}while(Math.abs(o)>1e-7&&++a<12);return s}(e,0,1,t,n);return t=>0===t||1===t?t:Zs(r(t),e,i)}const Qs=Js(.42,0,1,1),_s=Js(0,0,.58,1),ta=Js(.42,0,.58,1),ea=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,na=t=>e=>1-t(1-e),ia=Js(.33,1.53,.69,.99),ra=na(ia),oa=ea(ra),sa=t=>(t*=2)<1?.5*ra(t):.5*(2-Math.pow(2,-10*(t-1))),aa=t=>1-Math.sin(Math.acos(t)),la=na(aa),ca=ea(aa),ua=t=>Array.isArray(t)&&"number"==typeof t[0],da={linear:Gr,easeIn:Qs,easeInOut:ta,easeOut:_s,circIn:aa,circInOut:ca,circOut:la,backIn:ra,backInOut:oa,backOut:ia,anticipate:sa},ma=t=>{if(ua(t)){t.length;const[e,n,i,r]=t;return Js(e,n,i,r)}return"string"==typeof t?da[t]:t},ha=(t,e,n)=>{const i=e-t;return 0===i?1:(n-t)/i};function pa(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const o=t.length;if(e.length,1===o)return()=>e[0];if(2===o&&e[0]===e[1])return()=>e[1];const s=t[0]===t[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=function(t,e,n){const i=[],r=n||Hr.mix||As,o=t.length-1;for(let s=0;s<o;s++){let n=r(t[s],t[s+1]);if(e){const t=Array.isArray(e)?e[s]||Gr:e;n=So(t,n)}i.push(n)}return i}(e,i,r),l=a.length,c=n=>{if(s&&n<t[0])return e[0];let i=0;if(l>1)for(;i<t.length-2&&!(n<t[i+1]);i++);const r=ha(t[i],t[i+1],n);return a[i](r)};return n?e=>c(Po(t[0],t[o-1],e)):c}function fa(t){const e=[0];return function(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=ha(0,e,i);t.push(ds(n,1,r))}}(e,t.length-1),e}function ga({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=(t=>Array.isArray(t)&&"number"!=typeof t[0])(i)?i.map(ma):ma(i),o={done:!1,value:e[0]},s=function(t,e){return t.map((t=>t*e))}(n&&n.length===e.length?n:fa(e),t),a=pa(s,e,{ease:Array.isArray(r)?r:(l=e,c=r,l.map((()=>c||ta)).splice(0,l.length-1))});var l,c;return{calculatedDuration:t,next:e=>(o.value=a(e),o.done=e>=t,o)}}const ya=t=>null!==t;function va(t,{repeat:e,repeatType:n="loop"},i,r=1){const o=t.filter(ya),s=r<0||e&&"loop"!==n&&e%2==1?0:o.length-1;return s&&void 0!==i?i:o[s]}const ba={decay:Ks,inertia:Ks,tween:ga,keyframes:ga,spring:$s};function xa(t){"string"==typeof t.type&&(t.type=ba[t.type])}class wa{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise((t=>{this.resolve=t}))}notifyFinished(){this.resolve()}then(t,e){return this.finished.then(t,e)}}const Aa=t=>t/100;class Ea extends wa{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=(t=!0)=>{if(t){const{motionValue:t}=this.options;t&&t.updatedAt!==uo.now()&&this.tick(uo.now())}this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},To.mainThread++,this.options=t,this.initAnimation(),this.play(),!1===t.autoplay&&this.pause()}initAnimation(){const{options:t}=this;xa(t);const{type:e=ga,repeat:n=0,repeatDelay:i=0,repeatType:r,velocity:o=0}=t;let{keyframes:s}=t;const a=e||ga;a!==ga&&"number"!=typeof s[0]&&(this.mixKeyframes=So(Aa,As(s[0],s[1])),s=[0,100]);const l=a({...t,keyframes:s});"mirror"===r&&(this.mirroredGenerator=a({...t,keyframes:[...s].reverse(),velocity:-o})),null===l.calculatedDuration&&(l.calculatedDuration=ks(l));const{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+i,this.totalDuration=this.resolvedDuration*(n+1)-i,this.generator=l}updateTime(t){const e=Math.round(t-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=e}tick(t,e=!1){const{generator:n,totalDuration:i,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:s,calculatedDuration:a}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:c,repeat:u,repeatType:d,repeatDelay:m,type:h,onUpdate:p,finalKeyframe:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),e?this.currentTime=t:this.updateTime(t);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=i);let v=this.currentTime,b=n;if(u){const t=Math.min(this.currentTime,i)/s;let e=Math.floor(t),n=t%1;!n&&t>=1&&(n=1),1===n&&e--,e=Math.min(e,u+1);Boolean(e%2)&&("reverse"===d?(n=1-n,m&&(n-=m/s)):"mirror"===d&&(b=o)),v=Po(0,1,n)*s}const x=y?{done:!1,value:c[0]}:b.next(v);r&&(x.value=r(x.value));let{done:w}=x;y||null===a||(w=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const A=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return A&&h!==Ks&&(x.value=va(c,this.options,f,this.speed)),p&&p(x.value),A&&this.finish(),x}then(t,e){return this.finished.then(t,e)}get duration(){return Co(this.calculatedDuration)}get time(){return Co(this.currentTime)}set time(t){t=ko(t),this.currentTime=t,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(uo.now());const e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=Co(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=Es,startTime:e}=this.options;this.driver||(this.driver=t((t=>this.tick(t)))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=e??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(uo.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,To.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}const Sa=t=>180*t/Math.PI,Pa=t=>{const e=Sa(Math.atan2(t[1],t[0]));return Ca(e)},ka={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Pa,rotateZ:Pa,skewX:t=>Sa(Math.atan(t[1])),skewY:t=>Sa(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Ca=t=>((t%=360)<0&&(t+=360),t),Ta=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Ma=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),ja={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ta,scaleY:Ma,scale:t=>(Ta(t)+Ma(t))/2,rotateX:t=>Ca(Sa(Math.atan2(t[6],t[5]))),rotateY:t=>Ca(Sa(Math.atan2(-t[2],t[0]))),rotateZ:Pa,rotate:Pa,skewX:t=>Sa(Math.atan(t[4])),skewY:t=>Sa(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Da(t){return t.includes("scale")?1:0}function Ra(t,e){if(!t||"none"===t)return Da(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=ja,r=n;else{const e=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=ka,r=e}if(!r)return Da(e);const o=i[e],s=r[1].split(",").map(Va);return"function"==typeof o?o(s):s[o]}function Va(t){return parseFloat(t.trim())}const Fa=t=>t===Fo||t===$o,Oa=new Set(["x","y","z"]),Ia=eo.filter((t=>!Oa.has(t)));const La={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Ra(e,"x"),y:(t,{transform:e})=>Ra(e,"y")};La.translateX=La.x,La.translateY=La.y;const za=new Set;let Ba=!1,Na=!1,Ya=!1;function Ua(){if(Na){const t=Array.from(za).filter((t=>t.needsMeasurement)),e=new Set(t.map((t=>t.element))),n=new Map;e.forEach((t=>{const e=function(t){const e=[];return Ia.forEach((n=>{const i=t.getValue(n);void 0!==i&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))})),e}(t);e.length&&(n.set(t,e),t.render())})),t.forEach((t=>t.measureInitialState())),e.forEach((t=>{t.render();const e=n.get(t);e&&e.forEach((([e,n])=>{t.getValue(e)?.set(n)}))})),t.forEach((t=>t.measureEndState())),t.forEach((t=>{void 0!==t.suspendedScrollY&&window.scrollTo(0,t.suspendedScrollY)}))}Na=!1,Ba=!1,za.forEach((t=>t.complete(Ya))),za.clear()}function Wa(){za.forEach((t=>{t.readKeyframes(),t.needsMeasurement&&(Na=!0)}))}class Xa{constructor(t,e,n,i,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=n,this.motionValue=i,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(za.add(this),Ba||(Ba=!0,Jr.read(Wa),Jr.resolveKeyframes(Ua))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:n,motionValue:i}=this;if(null===t[0]){const r=i?.get(),o=t[t.length-1];if(void 0!==r)t[0]=r;else if(n&&e){const i=n.readValue(e,o);null!=i&&(t[0]=i)}void 0===t[0]&&(t[0]=o),i&&void 0===r&&i.set(t[0])}!function(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),za.delete(this)}cancel(){"scheduled"===this.state&&(za.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}function qa(t){let e;return()=>(void 0===e&&(e=t()),e)}const Ga=qa((()=>void 0!==window.ScrollTimeline)),Ha={};function $a(t,e){const n=qa(t);return()=>Ha[e]??n()}const Ka=$a((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}),"linearEasing"),Za=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Ja={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Za([0,.65,.55,1]),circOut:Za([.55,0,1,.45]),backIn:Za([.31,.01,.66,-.59]),backOut:Za([.33,1.53,.69,.99])};function Qa(t,e){return t?"function"==typeof t?Ka()?Ss(t,e):"ease-out":ua(t)?Za(t):Array.isArray(t)?t.map((t=>Qa(t,e)||Ja.easeOut)):Ja[t]:void 0}function _a(t,e,n,{delay:i=0,duration:r=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=Qa(a,r);Array.isArray(d)&&(u.easing=d),Kr.value&&To.waapi++;const m={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:"reverse"===s?"alternate":"normal"};c&&(m.pseudoElement=c);const h=t.animate(u,m);return Kr.value&&h.finished.finally((()=>{To.waapi--})),h}function tl(t){return"function"==typeof t&&"applyToOptions"in t}class el extends wa{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:e,name:n,keyframes:i,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:s,onComplete:a}=t;this.isPseudoElement=Boolean(r),this.allowFlatten=o,this.options=t,t.type;const l=function({type:t,...e}){return tl(t)&&Ka()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}(t);this.animation=_a(e,n,i,l,r),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const t=va(i,this.options,s,this.speed);this.updateMotionValue?this.updateMotionValue(t):function(t,e,n){(t=>t.startsWith("--"))(e)?t.style.setProperty(e,n):t.style[e]=n}(e,n,t),this.animation.cancel()}a?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(t){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;"idle"!==t&&"finished"!==t&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Co(Number(t))}get time(){return Co(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=ko(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:e}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&Ga()?(this.animation.timeline=t,Gr):e(this)}}const nl={anticipate:sa,backInOut:oa,circInOut:ca};function il(t){"string"==typeof t.ease&&t.ease in nl&&(t.ease=nl[t.ease])}class rl extends el{constructor(t){il(t),xa(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:e,onUpdate:n,onComplete:i,element:r,...o}=this.options;if(!e)return;if(void 0!==t)return void e.set(t);const s=new Ea({...o,autoplay:!1}),a=ko(this.finishedTime??this.time);e.setWithVelocity(s.sample(a-10).value,s.sample(a).value,10),s.stop()}}const ol=(t,e)=>"zIndex"!==e&&(!("number"!=typeof t&&!Array.isArray(t))||!("string"!=typeof t||!ls.test(t)&&"0"!==t||t.startsWith("url(")));const sl=new Set(["opacity","clipPath","filter","transform"]),al=qa((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));class ll extends wa{constructor({autoplay:t=!0,delay:e=0,type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:o="loop",keyframes:s,name:a,motionValue:l,element:c,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=uo.now();const d={autoplay:t,delay:e,type:n,repeat:i,repeatDelay:r,repeatType:o,name:a,motionValue:l,element:c,...u},m=c?.KeyframeResolver||Xa;this.keyframeResolver=new m(s,((t,e,n)=>this.onKeyframesResolved(t,e,d,!n)),a,l,c),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,e,n,i){this.keyframeResolver=void 0;const{name:r,type:o,velocity:s,delay:a,isHandoff:l,onUpdate:c}=n;this.resolvedAt=uo.now(),function(t,e,n,i){const r=t[0];if(null===r)return!1;if("display"===e||"visibility"===e)return!0;const o=t[t.length-1],s=ol(r,e),a=ol(o,e);return!(!s||!a)&&(function(t){const e=t[0];if(1===t.length)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}(t)||("spring"===n||tl(n))&&i)}(t,r,o,s)||(!Hr.instantAnimations&&a||c?.(va(t,n,e)),t[0]=t[t.length-1],n.duration=0,n.repeat=0);const u={startTime:i?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:e,...n,keyframes:t},d=!l&&function(t){const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:o,type:s}=t;if(!(e&&e.owner&&e.owner.current instanceof HTMLElement))return!1;const{onUpdate:a,transformTemplate:l}=e.owner.getProps();return al()&&n&&sl.has(n)&&("transform"!==n||!l)&&!a&&!i&&"mirror"!==r&&0!==o&&"inertia"!==s}(u)?new rl({...u,element:u.motionValue.owner.current}):new Ea(u);d.finished.then((()=>this.notifyFinished())).catch(Gr),this.pendingTimeline&&(this.stopTimeline=d.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=d}get finished(){return this._animation?this.animation.finished:this._finished}then(t,e){return this.finished.finally(t).then((()=>{}))}get animation(){return this._animation||(this.keyframeResolver?.resume(),Ya=!0,Wa(),Ua(),Ya=!1),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const cl=t=>null!==t;const ul={type:"spring",stiffness:500,damping:25,restSpeed:10},dl={type:"keyframes",duration:.8},ml={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hl=(t,{keyframes:e})=>e.length>2?dl:no.has(t)?t.startsWith("scale")?{type:"spring",stiffness:550,damping:0===e[1]?2*Math.sqrt(550):30,restSpeed:10}:ul:ml;const pl=(t,e,n,i={},r,o)=>s=>{const a=qr(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c-=ko(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:t=>{e.set(t),a.onUpdate&&a.onUpdate(t)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:o?void 0:r};(function({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length})(a)||Object.assign(u,hl(t,u)),u.duration&&(u.duration=ko(u.duration)),u.repeatDelay&&(u.repeatDelay=ko(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),(Hr.instantAnimations||Hr.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!o&&void 0!==e.get()){const t=function(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(cl),o=e&&"loop"!==n&&e%2==1?0:r.length-1;return o&&void 0!==i?i:r[o]}(u.keyframes,a);if(void 0!==t)return void Jr.update((()=>{u.onUpdate(t),u.onComplete()}))}return a.isSync?new Ea(u):new ll(u)};function fl({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&!0!==e[n];return e[n]=!1,i}function gl(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:s,...a}=e;i&&(o=i);const l=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const u in a){const e=t.getValue(u,t.latestValues[u]??null),i=a[u];if(void 0===i||c&&fl(c,u))continue;const r={delay:n,...qr(o||{},u)},s=e.get();if(void 0!==s&&!e.isAnimating&&!Array.isArray(i)&&i===s&&!r.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){const e=Ao(t);if(e){const t=window.MotionHandoffAnimation(e,u,Jr);null!==t&&(r.startTime=t,d=!0)}}bo(t,u),e.start(pl(u,e,i,t.shouldReduceMotion&&io.has(u)?{type:!1}:r,t,d));const m=e.animation;m&&l.push(m)}return s&&Promise.all(l).then((()=>{Jr.update((()=>{s&&function(t,e){const n=Xr(t,e);let{transitionEnd:i={},transition:r={},...o}=n||{};o={...o,...i};for(const s in o)go(t,s,yo(o[s]))}(t,s)}))})),l}function yl(t,e,n={}){const i=Xr(t,e,"exit"===n.type?t.presenceContext?.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const o=i?()=>Promise.all(gl(t,i,n)):()=>Promise.resolve(),s=t.variantChildren&&t.variantChildren.size?(i=0)=>{const{delayChildren:o=0,staggerChildren:s,staggerDirection:a}=r;return function(t,e,n=0,i=0,r=1,o){const s=[],a=(t.variantChildren.size-1)*i,l=1===r?(t=0)=>t*i:(t=0)=>a-t*i;return Array.from(t.variantChildren).sort(vl).forEach(((t,i)=>{t.notify("AnimationStart",e),s.push(yl(t,e,{...o,delay:n+l(i)}).then((()=>t.notify("AnimationComplete",e))))})),Promise.all(s)}(t,e,o+i,s,a,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[t,e]="beforeChildren"===a?[o,s]:[s,o];return t().then((()=>e()))}return Promise.all([o(),s(n.delay)])}function vl(t,e){return t.sortNodePosition(e)}function bl(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function xl(t){return"string"==typeof t||Array.isArray(t)}const wl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Al=["initial",...wl],El=Al.length;function Sl(t){if(!t)return;if(!t.isControllingVariants){const e=t.parent&&Sl(t.parent)||{};return void 0!==t.props.initial&&(e.initial=t.props.initial),e}const e={};for(let n=0;n<El;n++){const i=Al[n],r=t.props[i];(xl(r)||!1===r)&&(e[i]=r)}return e}const Pl=[...wl].reverse(),kl=wl.length;function Cl(t){return e=>Promise.all(e.map((({animation:e,options:n})=>function(t,e,n={}){let i;if(t.notify("AnimationStart",e),Array.isArray(e)){const r=e.map((e=>yl(t,e,n)));i=Promise.all(r)}else if("string"==typeof e)i=yl(t,e,n);else{const r="function"==typeof e?Xr(t,e,n.custom):e;i=Promise.all(gl(t,r,n))}return i.then((()=>{t.notify("AnimationComplete",e)}))}(t,e,n))))}function Tl(t){let e=Cl(t),n=Dl(),i=!0;const r=e=>(n,i)=>{const r=Xr(t,i,"exit"===e?t.presenceContext?.custom:void 0);if(r){const{transition:t,transitionEnd:e,...i}=r;n={...n,...i,...e}}return n};function o(o){const{props:s}=t,a=Sl(t.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let e=0;e<kl;e++){const m=Pl[e],h=n[m],p=void 0!==s[m]?s[m]:a[m],f=xl(p),g=m===o?h.isActive:null;!1===g&&(d=e);let y=p===a[m]&&p!==s[m]&&f;if(y&&i&&t.manuallyAnimateOnMount&&(y=!1),h.protectedKeys={...u},!h.isActive&&null===g||!p&&!h.prevProp||Yr(p)||"boolean"==typeof p)continue;const v=Ml(h.prevProp,p);let b=v||m===o&&h.isActive&&!y&&f||e>d&&f,x=!1;const w=Array.isArray(p)?p:[p];let A=w.reduce(r(m),{});!1===g&&(A={});const{prevResolvedValues:E={}}=h,S={...E,...A},P=e=>{b=!0,c.has(e)&&(x=!0,c.delete(e)),h.needsAnimating[e]=!0;const n=t.getValue(e);n&&(n.liveStyle=!1)};for(const t in S){const e=A[t],n=E[t];if(u.hasOwnProperty(t))continue;let i=!1;i=fo(e)&&fo(n)?!bl(e,n):e!==n,i?null!=e?P(t):c.add(t):void 0!==e&&c.has(t)?P(t):h.protectedKeys[t]=!0}h.prevProp=p,h.prevResolvedValues=A,h.isActive&&(u={...u,...A}),i&&t.blockInitialAnimation&&(b=!1);b&&(!(y&&v)||x)&&l.push(...w.map((t=>({animation:t,options:{type:m}}))))}if(c.size){const e={};if("boolean"!=typeof s.initial){const n=Xr(t,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(e.transition=n.transition)}c.forEach((n=>{const i=t.getBaseTarget(n),r=t.getValue(n);r&&(r.liveStyle=!0),e[n]=i??null})),l.push({animation:e})}let m=Boolean(l.length);return!i||!1!==s.initial&&s.initial!==s.animate||t.manuallyAnimateOnMount||(m=!1),i=!1,m?e(l):Promise.resolve()}return{animateChanges:o,setActive:function(e,i){if(n[e].isActive===i)return Promise.resolve();t.variantChildren?.forEach((t=>t.animationState?.setActive(e,i))),n[e].isActive=i;const r=o(e);for(const t in n)n[t].protectedKeys={};return r},setAnimateFunction:function(n){e=n(t)},getState:()=>n,reset:()=>{n=Dl(),i=!0}}}function Ml(t,e){return"string"==typeof e?e!==t:!!Array.isArray(e)&&!bl(e,t)}function jl(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Dl(){return{animate:jl(!0),whileInView:jl(),whileHover:jl(),whileTap:jl(),whileDrag:jl(),whileFocus:jl(),exit:jl()}}class Rl{constructor(t){this.isMounted=!1,this.node=t}update(){}}let Vl=0;const Fl={animation:{Feature:class extends Rl{constructor(t){super(t),t.animationState||(t.animationState=Tl(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Yr(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Rl{constructor(){super(...arguments),this.id=Vl++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;const i=this.node.animationState.setActive("exit",!t);e&&!t&&i.then((()=>{e(this.id)}))}mount(){const{register:t,onExitComplete:e}=this.node.presenceContext||{};e&&e(this.id),t&&(this.unmount=t(this.id))}unmount(){}}}},Ol={x:!1,y:!1};function Il(){return Ol.x||Ol.y}function Ll(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const zl=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary;function Bl(t){return{point:{x:t.pageX,y:t.pageY}}}function Nl(t,e,n,i){return Ll(t,e,(t=>e=>zl(e)&&t(e,Bl(e)))(n),i)}function Yl({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Ul(t){return t.max-t.min}function Wl(t,e,n,i=.5){t.origin=i,t.originPoint=ds(e.min,e.max,t.origin),t.scale=Ul(n)/Ul(e),t.translate=ds(n.min,n.max,t.origin)-t.originPoint,(t.scale>=.9999&&t.scale<=1.0001||isNaN(t.scale))&&(t.scale=1),(t.translate>=-.01&&t.translate<=.01||isNaN(t.translate))&&(t.translate=0)}function Xl(t,e,n,i){Wl(t.x,e.x,n.x,i?i.originX:void 0),Wl(t.y,e.y,n.y,i?i.originY:void 0)}function ql(t,e,n){t.min=n.min+e.min,t.max=t.min+Ul(e)}function Gl(t,e,n){t.min=e.min-n.min,t.max=t.min+Ul(e)}function Hl(t,e,n){Gl(t.x,e.x,n.x),Gl(t.y,e.y,n.y)}const $l=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Kl(t){return[t("x"),t("y")]}function Zl(t){return void 0===t||1===t}function Jl({scale:t,scaleX:e,scaleY:n}){return!Zl(t)||!Zl(e)||!Zl(n)}function Ql(t){return Jl(t)||_l(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function _l(t){return tc(t.x)||tc(t.y)}function tc(t){return t&&"0%"!==t}function ec(t,e,n){return n+e*(t-n)}function nc(t,e,n,i,r){return void 0!==r&&(t=ec(t,r,i)),ec(t,n,i)+e}function ic(t,e=0,n=1,i,r){t.min=nc(t.min,e,n,i,r),t.max=nc(t.max,e,n,i,r)}function rc(t,{x:e,y:n}){ic(t.x,e.translate,e.scale,e.originPoint),ic(t.y,n.translate,n.scale,n.originPoint)}const oc=.999999999999,sc=1.0000000000001;function ac(t,e){t.min=t.min+e,t.max=t.max+e}function lc(t,e,n,i,r=.5){ic(t,e,n,ds(t.min,t.max,r),i)}function cc(t,e){lc(t.x,e.x,e.scaleX,e.scale,e.originX),lc(t.y,e.y,e.scaleY,e.scale,e.originY)}function uc(t,e){return Yl(function(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}(t.getBoundingClientRect(),e))}const dc=({current:t})=>t?t.ownerDocument.defaultView:null;function mc(t){return t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}const hc=(t,e)=>Math.abs(t-e);class pc{constructor(t,e,{transformPagePoint:n,contextWindow:i,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const t=yc(this.lastMoveEventInfo,this.history),e=null!==this.startEvent,n=function(t,e){const n=hc(t.x,e.x),i=hc(t.y,e.y);return Math.sqrt(n**2+i**2)}(t.offset,{x:0,y:0})>=3;if(!e&&!n)return;const{point:i}=t,{timestamp:r}=_r;this.history.push({...i,timestamp:r});const{onStart:o,onMove:s}=this.handlers;e||(o&&o(this.lastMoveEvent,t),this.startEvent=this.lastMoveEvent),s&&s(this.lastMoveEvent,t)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=fc(e,this.transformPagePoint),Jr.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{this.end();const{onEnd:n,onSessionEnd:i,resumeAnimation:r}=this.handlers;if(this.dragSnapToOrigin&&r&&r(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=yc("pointercancel"===t.type?this.lastMoveEventInfo:fc(e,this.transformPagePoint),this.history);this.startEvent&&n&&n(t,o),i&&i(t,o)},!zl(t))return;this.dragSnapToOrigin=r,this.handlers=e,this.transformPagePoint=n,this.contextWindow=i||window;const o=fc(Bl(t),this.transformPagePoint),{point:s}=o,{timestamp:a}=_r;this.history=[{...s,timestamp:a}];const{onSessionStart:l}=e;l&&l(t,yc(o,this.history)),this.removeListeners=So(Nl(this.contextWindow,"pointermove",this.handlePointerMove),Nl(this.contextWindow,"pointerup",this.handlePointerUp),Nl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Qr(this.updatePoint)}}function fc(t,e){return e?{point:e(t.point)}:t}function gc(t,e){return{x:t.x-e.x,y:t.y-e.y}}function yc({point:t},e){return{point:t,delta:gc(t,bc(e)),offset:gc(t,vc(e)),velocity:xc(e,.1)}}function vc(t){return t[0]}function bc(t){return t[t.length-1]}function xc(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=bc(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>ko(e)));)n--;if(!i)return{x:0,y:0};const o=Co(r.timestamp-i.timestamp);if(0===o)return{x:0,y:0};const s={x:(r.x-i.x)/o,y:(r.y-i.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function wc(t,e,n){return{min:void 0!==e?t.min+e:void 0,max:void 0!==n?t.max+n-(t.max-t.min):void 0}}function Ac(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}const Ec=.35;function Sc(t,e,n){return{min:Pc(t,e),max:Pc(t,n)}}function Pc(t,e){return"number"==typeof t?t:t[e]||0}const kc=new WeakMap;class Cc{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=t}start(t,{snapToCursor:e=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new pc(t,{onSessionStart:t=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor(Bl(t).point)},onStart:(t,e)=>{const{drag:n,dragPropagation:i,onDragStart:r}=this.getProps();if(n&&!i&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(o=n)||"y"===o?Ol[o]?null:(Ol[o]=!0,()=>{Ol[o]=!1}):Ol.x||Ol.y?null:(Ol.x=Ol.y=!0,()=>{Ol.x=Ol.y=!1}),!this.openDragLock))return;var o;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Kl((t=>{let e=this.getAxisMotionValue(t).get()||0;if(Ho.test(e)){const{projection:n}=this.visualElement;if(n&&n.layout){const i=n.layout.layoutBox[t];if(i){e=Ul(i)*(parseFloat(e)/100)}}}this.originPoint[t]=e})),r&&Jr.postRender((()=>r(t,e))),bo(this.visualElement,"transform");const{animationState:s}=this.visualElement;s&&s.setActive("whileDrag",!0)},onMove:(t,e)=>{const{dragPropagation:n,dragDirectionLock:i,onDirectionLock:r,onDrag:o}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:s}=e;if(i&&null===this.currentDirection)return this.currentDirection=function(t,e=10){let n=null;Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x");return n}(s),void(null!==this.currentDirection&&r&&r(this.currentDirection));this.updateAxis("x",e.point,s),this.updateAxis("y",e.point,s),this.visualElement.render(),o&&o(t,e)},onSessionEnd:(t,e)=>this.stop(t,e),resumeAnimation:()=>Kl((t=>"paused"===this.getAnimationState(t)&&this.getAxisMotionValue(t).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:dc(this.visualElement)})}stop(t,e){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:i}=e;this.startAnimation(i);const{onDragEnd:r}=this.getProps();r&&Jr.postRender((()=>r(t,e)))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,n){const{drag:i}=this.getProps();if(!n||!Tc(t,i,this.currentDirection))return;const r=this.getAxisMotionValue(t);let o=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(o=function(t,{min:e,max:n},i){return void 0!==e&&t<e?t=i?ds(e,t,i.min):Math.max(t,e):void 0!==n&&t>n&&(t=i?ds(n,t,i.max):Math.min(t,n)),t}(o,this.constraints[t],this.elastic[t])),r.set(o)}resolveConstraints(){const{dragConstraints:t,dragElastic:e}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,i=this.constraints;t&&mc(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!n)&&function(t,{top:e,left:n,bottom:i,right:r}){return{x:wc(t.x,n,r),y:wc(t.y,e,i)}}(n.layoutBox,t),this.elastic=function(t=Ec){return!1===t?t=0:!0===t&&(t=Ec),{x:Sc(t,"left","right"),y:Sc(t,"top","bottom")}}(e),i!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Kl((t=>{!1!==this.constraints&&this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,e){const n={};return void 0!==e.min&&(n.min=e.min-t.min),void 0!==e.max&&(n.max=e.max-t.min),n}(n.layoutBox[t],this.constraints[t]))}))}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!mc(t))return!1;const n=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=function(t,e,n){const i=uc(t,n),{scroll:r}=e;return r&&(ac(i.x,r.offset.x),ac(i.y,r.offset.y)),i}(n,i.root,this.visualElement.getTransformPagePoint());let o=function(t,e){return{x:Ac(t.x,e.x),y:Ac(t.y,e.y)}}(i.layout.layoutBox,r);if(e){const t=e(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(o));this.hasMutatedConstraints=!!t,t&&(o=Yl(t))}return o}startAnimation(t){const{drag:e,dragMomentum:n,dragElastic:i,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),a=this.constraints||{},l=Kl((s=>{if(!Tc(s,e,this.currentDirection))return;let l=a&&a[s]||{};o&&(l={min:0,max:0});const c=i?200:1e6,u=i?40:1e7,d={type:"inertia",velocity:n?t[s]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...r,...l};return this.startAxisValueAnimation(s,d)}));return Promise.all(l).then(s)}startAxisValueAnimation(t,e){const n=this.getAxisMotionValue(t);return bo(this.visualElement,t),n.start(pl(t,n,0,e,this.visualElement,!1))}stopAnimation(){Kl((t=>this.getAxisMotionValue(t).stop()))}pauseAnimation(){Kl((t=>this.getAxisMotionValue(t).animation?.pause()))}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,n=this.visualElement.getProps(),i=n[e];return i||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){Kl((e=>{const{drag:n}=this.getProps();if(!Tc(e,n,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(e);if(i&&i.layout){const{min:n,max:o}=i.layout.layoutBox[e];r.set(t[e]-ds(n,o,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:n}=this.visualElement;if(!mc(e)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Kl((t=>{const e=this.getAxisMotionValue(t);if(e&&!1!==this.constraints){const n=e.get();i[t]=function(t,e){let n=.5;const i=Ul(t),r=Ul(e);return r>i?n=ha(e.min,e.max-i,t.min):i>r&&(n=ha(t.min,t.max-r,e.min)),Po(0,1,n)}({min:n,max:n},this.constraints[t])}}));const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Kl((e=>{if(!Tc(e,t,null))return;const n=this.getAxisMotionValue(e),{min:r,max:o}=this.constraints[e];n.set(ds(r,o,i[e]))}))}addListeners(){if(!this.visualElement.current)return;kc.set(this.visualElement,this);const t=Nl(this.visualElement.current,"pointerdown",(t=>{const{drag:e,dragListener:n=!0}=this.getProps();e&&n&&this.start(t)})),e=()=>{const{dragConstraints:t}=this.getProps();mc(t)&&t.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",e);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),Jr.read(e);const r=Ll(window,"resize",(()=>this.scalePositionWithinConstraints())),o=n.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(Kl((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{r(),t(),i(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:o=Ec,dragMomentum:s=!0}=t;return{...t,drag:e,dragDirectionLock:n,dragPropagation:i,dragConstraints:r,dragElastic:o,dragMomentum:s}}}function Tc(t,e,n){return!(!0!==e&&e!==t||null!==n&&n!==t)}const Mc=t=>(e,n)=>{t&&Jr.postRender((()=>t(e,n)))};var jc=n(4848);const{schedule:Dc,cancel:Rc}=Zr(queueMicrotask,!1),Vc=(0,i.createContext)(null);const Fc=(0,i.createContext)({}),Oc=(0,i.createContext)({}),Ic={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Lc(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const zc={correct:(t,e)=>{if(!e.target)return t;if("string"==typeof t){if(!$o.test(t))return t;t=parseFloat(t)}return`${Lc(t,e.target.x)}% ${Lc(t,e.target.y)}%`}},Bc={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ls.parse(t);if(r.length>5)return i;const o=ls.createTransformer(t),s="number"!=typeof r[0]?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+s]/=a,r[1+s]/=l;const c=ds(a,l,.5);return"number"==typeof r[2+s]&&(r[2+s]/=c),"number"==typeof r[3+s]&&(r[3+s]/=c),o(r)}},Nc={};class Yc extends i.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n,layoutId:i}=this.props,{projection:r}=t;!function(t){for(const e in t)Nc[e]=t[e],jo(e)&&(Nc[e].isCSSVariable=!0)}(Wc),r&&(e.group&&e.group.add(r),n&&n.register&&i&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",(()=>{this.safeToRemove()})),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Ic.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:n,drag:i,isPresent:r}=this.props,{projection:o}=n;return o?(o.isPresent=r,i||t.layoutDependency!==e||void 0===e||t.isPresent!==r?o.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?o.promote():o.relegate()||Jr.postRender((()=>{const t=o.getStack();t&&t.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Dc.postRender((()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Uc(t){const[e,n]=function(t=!0){const e=(0,i.useContext)(Vc);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:r,register:o}=e,s=(0,i.useId)();(0,i.useEffect)((()=>{if(t)return o(s)}),[t]);const a=(0,i.useCallback)((()=>t&&r&&r(s)),[s,r,t]);return!n&&r?[!1,a]:[!0]}(),r=(0,i.useContext)(Fc);return(0,jc.jsx)(Yc,{...t,layoutGroup:r,switchLayoutGroup:(0,i.useContext)(Oc),isPresent:e,safeToRemove:n})}const Wc={borderRadius:{...zc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:zc,borderTopRightRadius:zc,borderBottomLeftRadius:zc,borderBottomRightRadius:zc,boxShadow:Bc};const Xc=(t,e)=>t.depth-e.depth;class qc{constructor(){this.children=[],this.isDirty=!1}add(t){ro(this.children,t),this.isDirty=!0}remove(t){oo(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Xc),this.isDirty=!1,this.children.forEach(t)}}function Gc(t,e){const n=uo.now(),i=({timestamp:r})=>{const o=r-n;o>=e&&(Qr(i),t(o-e))};return Jr.setup(i,!0),()=>Qr(i)}function Hc(t){return vo(t)?t.get():t}const $c=["TopLeft","TopRight","BottomLeft","BottomRight"],Kc=$c.length,Zc=t=>"string"==typeof t?parseFloat(t):t,Jc=t=>"number"==typeof t||$o.test(t);function Qc(t,e){return void 0!==t[e]?t[e]:t.borderRadius}const _c=eu(0,.5,la),tu=eu(.5,.95,Gr);function eu(t,e,n){return i=>i<t?0:i>e?1:n(ha(t,e,i))}function nu(t,e){t.min=e.min,t.max=e.max}function iu(t,e){nu(t.x,e.x),nu(t.y,e.y)}function ru(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function ou(t,e,n,i,r){return t=ec(t-=e,1/n,i),void 0!==r&&(t=ec(t,1/r,i)),t}function su(t,e,[n,i,r],o,s){!function(t,e=0,n=1,i=.5,r,o=t,s=t){Ho.test(e)&&(e=parseFloat(e),e=ds(s.min,s.max,e/100)-s.min);if("number"!=typeof e)return;let a=ds(o.min,o.max,i);t===o&&(a-=e),t.min=ou(t.min,e,n,a,r),t.max=ou(t.max,e,n,a,r)}(t,e[n],e[i],e[r],e.scale,o,s)}const au=["x","scaleX","originX"],lu=["y","scaleY","originY"];function cu(t,e,n,i){su(t.x,e,au,n?n.x:void 0,i?i.x:void 0),su(t.y,e,lu,n?n.y:void 0,i?i.y:void 0)}function uu(t){return 0===t.translate&&1===t.scale}function du(t){return uu(t.x)&&uu(t.y)}function mu(t,e){return t.min===e.min&&t.max===e.max}function hu(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function pu(t,e){return hu(t.x,e.x)&&hu(t.y,e.y)}function fu(t){return Ul(t.x)/Ul(t.y)}function gu(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class yu{constructor(){this.members=[]}add(t){ro(this.members,t),t.scheduleRender()}remove(t){if(oo(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(t){const e=this.members.findIndex((e=>t===e));if(0===e)return!1;let n;for(let i=e;i>=0;i--){const t=this.members[i];if(!1!==t.isPresent){n=t;break}}return!!n&&(this.promote(n),!0)}promote(t,e){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,e&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;!1===i&&n.hide()}}exitAnimationComplete(){this.members.forEach((t=>{const{options:e,resumingFrom:n}=t;e.onExitComplete&&e.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((t=>{t.instance&&t.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const vu={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},bu=["","X","Y","Z"],xu={visibility:"hidden"};let wu=0;function Au(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Eu(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Ao(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:e,layoutId:i}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Jr,!(e||i))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&Eu(i)}function Su({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(t={},n=e?.()){this.id=wu++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Kr.value&&(vu.nodes=vu.calculatedTargetDeltas=vu.calculatedProjections=0),this.nodes.forEach(Cu),this.nodes.forEach(Fu),this.nodes.forEach(Ou),this.nodes.forEach(Tu),Kr.addProjectionMetrics&&Kr.addProjectionMetrics(vu)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new qc)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new so),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){const n=this.eventHandlers.get(t);n&&n.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e){if(this.instance)return;var n;this.isSVG=(n=e)instanceof SVGElement&&"svg"!==n.tagName,this.instance=e;const{layoutId:i,layout:r,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||i)&&(this.isLayoutDirty=!0),t){let n;const i=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=Gc(i,250),Ic.hasAnimatedSinceResize&&(Ic.hasAnimatedSinceResize=!1,this.nodes.forEach(Vu))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||r)&&this.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e,hasRelativeLayoutChanged:n,layout:i})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const r=this.options.transition||o.getDefaultTransition()||Yu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:a}=o.getProps(),l=!this.targetLayout||!pu(this.targetLayout,i),c=!e&&n;if(this.options.layoutRoot||this.resumeFrom||c||e&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,c);const e={...qr(r,"layout"),onPlay:s,onComplete:a};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else e||Vu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const t=this.getStack();t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Qr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Iu),this.animationId++)}getTransformTemplate(){const{visualElement:t}=this.options;return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Eu(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let r=0;r<this.path.length;r++){const t=this.path[r];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}const{layoutId:e,layout:n}=this.options;if(void 0===e&&!n)return;const i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(ju);this.isUpdating||this.nodes.forEach(Du),this.isUpdating=!1,this.nodes.forEach(Ru),this.nodes.forEach(Pu),this.nodes.forEach(ku),this.clearAllSnapshots();const t=uo.now();_r.delta=Po(0,1e3/60,t-_r.timestamp),_r.timestamp=t,_r.isProcessing=!0,to.update.process(_r),to.preRender.process(_r),to.render.process(_r),_r.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Dc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Mu),this.sharedNodes.forEach(Lu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Jr.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Jr.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||Ul(this.snapshot.measuredBox.x)||Ul(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const t=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:e}=this.options;e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e&&this.instance){const e=i(this.instance);this.scroll={animationId:this.root.animationId,phase:t,isRoot:e,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:e}}}resetTransform(){if(!r)return;const t=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,e=this.projectionDelta&&!du(this.projectionDelta),n=this.getTransformTemplate(),i=n?n(this.latestValues,""):void 0,o=i!==this.prevTransformTemplateValue;t&&this.instance&&(e||Ql(this.latestValues)||o)&&(r(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){const e=this.measurePageBox();let n=this.removeElementScroll(e);var i;return t&&(n=this.removeTransform(n)),Xu((i=n).x),Xu(i.y),{animationId:this.root.animationId,measuredBox:e,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:t}=this.options;if(!t)return{x:{min:0,max:0},y:{min:0,max:0}};const e=t.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Gu))){const{scroll:t}=this.root;t&&(ac(e.x,t.offset.x),ac(e.y,t.offset.y))}return e}removeElementScroll(t){const e={x:{min:0,max:0},y:{min:0,max:0}};if(iu(e,t),this.scroll?.wasRoot)return e;for(let n=0;n<this.path.length;n++){const i=this.path[n],{scroll:r,options:o}=i;i!==this.root&&r&&o.layoutScroll&&(r.wasRoot&&iu(e,t),ac(e.x,r.offset.x),ac(e.y,r.offset.y))}return e}applyTransform(t,e=!1){const n={x:{min:0,max:0},y:{min:0,max:0}};iu(n,t);for(let i=0;i<this.path.length;i++){const t=this.path[i];!e&&t.options.layoutScroll&&t.scroll&&t!==t.root&&cc(n,{x:-t.scroll.offset.x,y:-t.scroll.offset.y}),Ql(t.latestValues)&&cc(n,t.latestValues)}return Ql(this.latestValues)&&cc(n,this.latestValues),n}removeTransform(t){const e={x:{min:0,max:0},y:{min:0,max:0}};iu(e,t);for(let n=0;n<this.path.length;n++){const t=this.path[n];if(!t.instance)continue;if(!Ql(t.latestValues))continue;Jl(t.latestValues)&&t.updateSnapshot();const i={x:{min:0,max:0},y:{min:0,max:0}};iu(i,t.measurePageBox()),cu(e,t.latestValues,t.snapshot?t.snapshot.layoutBox:void 0,i)}return Ql(this.latestValues)&&cu(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_r.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){const e=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=e.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=e.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=e.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==e;if(!(t||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:i,layoutId:r}=this.options;if(this.layout&&(i||r)){if(this.resolvedRelativeTargetAt=_r.timestamp,!this.targetDelta&&!this.relativeTarget){const t=this.getClosestProjectingParent();t&&t.layout&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Hl(this.relativeTargetOrigin,this.layout.layoutBox,t.layout.layoutBox),iu(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,s,a;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,a=this.relativeParent.target,ql(o.x,s.x,a.x),ql(o.y,s.y,a.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):iu(this.target,this.layout.layoutBox),rc(this.target,this.targetDelta)):iu(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const t=this.getClosestProjectingParent();t&&Boolean(t.resumingFrom)===Boolean(this.resumingFrom)&&!t.options.layoutScroll&&t.target&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Hl(this.relativeTargetOrigin,this.target,t.target),iu(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Kr.value&&vu.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Jl(this.parent.latestValues)&&!_l(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const t=this.getLead(),e=Boolean(this.resumingFrom)||this!==t;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),e&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===_r.timestamp&&(n=!1),n)return;const{layout:i,layoutId:r}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!r)return;iu(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,s=this.treeScale.y;!function(t,e,n,i=!1){const r=n.length;if(!r)return;let o,s;e.x=e.y=1;for(let a=0;a<r;a++){o=n[a],s=o.projectionDelta;const{visualElement:r}=o.options;r&&r.props.style&&"contents"===r.props.style.display||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&cc(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(e.x*=s.x.scale,e.y*=s.y.scale,rc(t,s)),i&&Ql(o.latestValues)&&cc(t,o.latestValues))}e.x<sc&&e.x>oc&&(e.x=1),e.y<sc&&e.y>oc&&(e.y=1)}(this.layoutCorrected,this.treeScale,this.path,e),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox,t.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:a}=t;a?(this.projectionDelta&&this.prevProjectionDelta?(ru(this.prevProjectionDelta.x,this.projectionDelta.x),ru(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Xl(this.projectionDelta,this.layoutCorrected,a,this.latestValues),this.treeScale.x===o&&this.treeScale.y===s&&gu(this.projectionDelta.x,this.prevProjectionDelta.x)&&gu(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",a)),Kr.value&&vu.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){if(this.options.visualElement?.scheduleRender(),t){const t=this.getStack();t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(t,e=!1){const n=this.snapshot,i=n?n.latestValues:{},r={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e;const s={x:{min:0,max:0},y:{min:0,max:0}},a=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(a&&!c&&!0===this.options.crossfade&&!this.path.some(Nu));let d;this.animationProgress=0,this.mixTargetDelta=e=>{const n=e/1e3;zu(o.x,t.x,n),zu(o.y,t.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Hl(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(t,e,n,i){Bu(t.x,e.x,n.x,i),Bu(t.y,e.y,n.y,i)}(this.relativeTarget,this.relativeTargetOrigin,s,n),d&&function(t,e){return mu(t.x,e.x)&&mu(t.y,e.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),iu(d,this.relativeTarget)),a&&(this.animationValues=r,function(t,e,n,i,r,o){r?(t.opacity=ds(0,n.opacity??1,_c(i)),t.opacityExit=ds(e.opacity??1,0,tu(i))):o&&(t.opacity=ds(e.opacity??1,n.opacity??1,i));for(let s=0;s<Kc;s++){const r=`border${$c[s]}Radius`;let o=Qc(e,r),a=Qc(n,r);void 0===o&&void 0===a||(o||(o=0),a||(a=0),0===o||0===a||Jc(o)===Jc(a)?(t[r]=Math.max(ds(Zc(o),Zc(a),i),0),(Ho.test(a)||Ho.test(o))&&(t[r]+="%")):t[r]=a)}(e.rotate||n.rotate)&&(t.rotate=ds(e.rotate||0,n.rotate||0,i))}(r,i,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation?.stop(!1),this.resumingFrom?.currentAnimation?.stop(!1),this.pendingAnimation&&(Qr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Jr.update((()=>{Ic.hasAnimatedSinceResize=!0,To.layout++,this.motionValue||(this.motionValue=po(0)),this.currentAnimation=function(t,e,n){const i=vo(t)?t:po(t);return i.start(pl("",i,e,n)),i.animation}(this.motionValue,[0,1e3],{...t,isSync:!0,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onStop:()=>{To.layout--},onComplete:()=>{To.layout--,t.onComplete&&t.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const t=this.getStack();t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop(!1)),this.completeAnimation()}applyTransformsToTarget(){const t=this.getLead();let{targetWithTransforms:e,target:n,layout:i,latestValues:r}=t;if(e&&n&&i){if(this!==t&&this.layout&&i&&qu(this.options.animationType,this.layout.layoutBox,i.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const e=Ul(this.layout.layoutBox.x);n.x.min=t.target.x.min,n.x.max=n.x.min+e;const i=Ul(this.layout.layoutBox.y);n.y.min=t.target.y.min,n.y.max=n.y.min+i}iu(e,n),cc(e,r),Xl(this.projectionDeltaWithTransform,this.layoutCorrected,e,r)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new yu);this.sharedNodes.get(t).add(e);const n=e.options.initialPromotionConfig;e.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(e):void 0})}isLead(){const t=this.getStack();return!t||t.lead===this}getLead(){const{layoutId:t}=this.options;return t&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:t}=this.options;return t?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:n}={}){const i=this.getStack();i&&i.promote(this,n),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){const t=this.getStack();return!!t&&t.relegate(this)}resetSkewAndRotation(){const{visualElement:t}=this.options;if(!t)return;let e=!1;const{latestValues:n}=t;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(e=!0),!e)return;const i={};n.z&&Au("z",t,i,this.animationValues);for(let r=0;r<bu.length;r++)Au(`rotate${bu[r]}`,t,i,this.animationValues),Au(`skew${bu[r]}`,t,i,this.animationValues);t.render();for(const r in i)t.setStaticValue(r,i[r]),this.animationValues&&(this.animationValues[r]=i[r]);t.scheduleRender()}getProjectionStyles(t){if(!this.instance||this.isSVG)return;if(!this.isVisible)return xu;const e={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,e.opacity="",e.pointerEvents=Hc(t?.pointerEvents)||"",e.transform=n?n(this.latestValues,""):"none",e;const i=this.getLead();if(!this.projectionDelta||!this.layout||!i.target){const e={};return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=Hc(t?.pointerEvents)||""),this.hasProjected&&!Ql(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1),e}const r=i.animationValues||i.latestValues;this.applyTransformsToTarget(),e.transform=function(t,e,n){let i="";const r=t.x.translate/e.x,o=t.y.translate/e.y,s=n?.z||0;if((r||o||s)&&(i=`translate3d(${r}px, ${o}px, ${s}px) `),1===e.x&&1===e.y||(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:t,rotate:e,rotateX:r,rotateY:o,skewX:s,skewY:a}=n;t&&(i=`perspective(${t}px) ${i}`),e&&(i+=`rotate(${e}deg) `),r&&(i+=`rotateX(${r}deg) `),o&&(i+=`rotateY(${o}deg) `),s&&(i+=`skewX(${s}deg) `),a&&(i+=`skewY(${a}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return 1===a&&1===l||(i+=`scale(${a}, ${l})`),i||"none"}(this.projectionDeltaWithTransform,this.treeScale,r),n&&(e.transform=n(r,e.transform));const{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${100*o.origin}% ${100*s.origin}% 0`,i.animationValues?e.opacity=i===this?r.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:r.opacityExit:e.opacity=i===this?void 0!==r.opacity?r.opacity:"":void 0!==r.opacityExit?r.opacityExit:0;for(const a in Nc){if(void 0===r[a])continue;const{correct:t,applyTo:n,isCSSVariable:o}=Nc[a],s="none"===e.transform?r[a]:t(r[a],i);if(n){const t=n.length;for(let i=0;i<t;i++)e[n[i]]=s}else o?this.options.visualElement.renderState.vars[a]=s:e[a]=s}return this.options.layoutId&&(e.pointerEvents=i===this?Hc(t?.pointerEvents)||"":"none"),e}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((t=>t.currentAnimation?.stop(!1))),this.root.nodes.forEach(ju),this.root.sharedNodes.clear()}}}function Pu(t){t.updateLayout()}function ku(t){const e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=t.layout,{animationType:r}=t.options,o=e.source!==t.layout.source;"size"===r?Kl((t=>{const i=o?e.measuredBox[t]:e.layoutBox[t],r=Ul(i);i.min=n[t].min,i.max=i.min+r})):qu(r,e.layoutBox,n)&&Kl((i=>{const r=o?e.measuredBox[i]:e.layoutBox[i],s=Ul(n[i]);r.max=r.min+s,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[i].max=t.relativeTarget[i].min+s)}));const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Xl(s,n,e.layoutBox);const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?Xl(a,t.applyTransform(i,!0),e.measuredBox):Xl(a,n,e.layoutBox);const l=!du(s);let c=!1;if(!t.resumeFrom){const i=t.getClosestProjectingParent();if(i&&!i.resumeFrom){const{snapshot:r,layout:o}=i;if(r&&o){const s={x:{min:0,max:0},y:{min:0,max:0}};Hl(s,e.layoutBox,r.layoutBox);const a={x:{min:0,max:0},y:{min:0,max:0}};Hl(a,n,o.layoutBox),pu(s,a)||(c=!0),i.options.layoutRoot&&(t.relativeTarget=a,t.relativeTargetOrigin=s,t.relativeParent=i)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:e,delta:a,layoutDelta:s,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(t.isLead()){const{onExitComplete:e}=t.options;e&&e()}t.options.transition=void 0}function Cu(t){Kr.value&&vu.nodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=Boolean(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Tu(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Mu(t){t.clearSnapshot()}function ju(t){t.clearMeasurements()}function Du(t){t.isLayoutDirty=!1}function Ru(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Vu(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Fu(t){t.resolveTargetDelta()}function Ou(t){t.calcProjection()}function Iu(t){t.resetSkewAndRotation()}function Lu(t){t.removeLeadSnapshot()}function zu(t,e,n){t.translate=ds(e.translate,0,n),t.scale=ds(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Bu(t,e,n,i){t.min=ds(e.min,n.min,i),t.max=ds(e.max,n.max,i)}function Nu(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}const Yu={duration:.45,ease:[.4,0,.1,1]},Uu=t=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Wu=Uu("applewebkit/")&&!Uu("chrome/")?Math.round:Gr;function Xu(t){t.min=Wu(t.min),t.max=Wu(t.max)}function qu(t,e,n){return"position"===t||"preserve-aspect"===t&&(i=fu(e),r=fu(n),o=.2,!(Math.abs(i-r)<=o));var i,r,o}function Gu(t){return t!==t.root&&t.scroll?.wasRoot}const Hu=Su({attachResizeListener:(t,e)=>Ll(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$u={current:void 0},Ku=Su({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!$u.current){const t=new Hu({});t.mount(window),t.setOptions({layoutScroll:!0}),$u.current=t}return $u.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>Boolean("fixed"===window.getComputedStyle(t).position)}),Zu={pan:{Feature:class extends Rl{constructor(){super(...arguments),this.removePointerDownListener=Gr}onPointerDown(t){this.session=new pc(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:dc(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:Mc(t),onStart:Mc(e),onMove:n,onEnd:(t,e)=>{delete this.session,i&&Jr.postRender((()=>i(t,e)))}}}mount(){this.removePointerDownListener=Nl(this.node.current,"pointerdown",(t=>this.onPointerDown(t)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Rl{constructor(t){super(t),this.removeGroupControls=Gr,this.removeListeners=Gr,this.controls=new Cc(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gr}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Ku,MeasureLayout:Uc}};function Ju(t,e){const n=function(t,e,n){if(t instanceof EventTarget)return[t];if("string"==typeof t){let i=document;e&&(i=e.current);const r=n?.[t]??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}(t),i=new AbortController;return[n,{passive:!0,...e,signal:i.signal},()=>i.abort()]}function Qu(t){return!("touch"===t.pointerType||Il())}function _u(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover","Start"===n);const r=i["onHover"+n];r&&Jr.postRender((()=>r(e,Bl(e))))}const td=(t,e)=>!!e&&(t===e||td(t,e.parentElement)),ed=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const nd=new WeakSet;function id(t){return e=>{"Enter"===e.key&&t(e)}}function rd(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}function od(t){return zl(t)&&!Il()}function sd(t,e,n={}){const[i,r,o]=Ju(t,n),s=t=>{const i=t.currentTarget;if(!od(t))return;nd.add(i);const o=e(i,t),s=(t,e)=>{window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",l),nd.has(i)&&nd.delete(i),od(t)&&"function"==typeof o&&o(t,{success:e})},a=t=>{s(t,i===window||i===document||n.useGlobalTarget||td(i,t.target))},l=t=>{s(t,!1)};window.addEventListener("pointerup",a,r),window.addEventListener("pointercancel",l,r)};return i.forEach((t=>{var e;(n.useGlobalTarget?window:t).addEventListener("pointerdown",s,r),t instanceof HTMLElement&&(t.addEventListener("focus",(t=>((t,e)=>{const n=t.currentTarget;if(!n)return;const i=id((()=>{if(nd.has(n))return;rd(n,"down");const t=id((()=>{rd(n,"up")}));n.addEventListener("keyup",t,e),n.addEventListener("blur",(()=>rd(n,"cancel")),e)}));n.addEventListener("keydown",i,e),n.addEventListener("blur",(()=>n.removeEventListener("keydown",i)),e)})(t,r))),e=t,ed.has(e.tagName)||-1!==e.tabIndex||t.hasAttribute("tabindex")||(t.tabIndex=0))})),o}function ad(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap","Start"===n);const r=i["onTap"+("End"===n?"":n)];r&&Jr.postRender((()=>r(e,Bl(e))))}const ld=new WeakMap,cd=new WeakMap,ud=t=>{const e=ld.get(t.target);e&&e(t)},dd=t=>{t.forEach(ud)};function md(t,e,n){const i=function({root:t,...e}){const n=t||document;cd.has(n)||cd.set(n,{});const i=cd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(dd,{root:t,...e})),i[r]}(e);return ld.set(t,n),i.observe(t),()=>{ld.delete(t),i.unobserve(t)}}const hd={some:0,all:1};const pd={inView:{Feature:class extends Rl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:n,amount:i="some",once:r}=t,o={root:e?e.current:void 0,rootMargin:n,threshold:"number"==typeof i?i:hd[i]};return md(this.node.current,o,(t=>{const{isIntersecting:e}=t;if(this.isInView===e)return;if(this.isInView=e,r&&!e&&this.hasEnteredView)return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);const{onViewportEnter:n,onViewportLeave:i}=this.node.getProps(),o=e?n:i;o&&o(t)}))}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}(t,e))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Rl{mount(){const{current:t}=this.node;t&&(this.unmount=sd(t,((t,e)=>(ad(this.node,e,"Start"),(t,{success:e})=>ad(this.node,t,e?"End":"Cancel"))),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends Rl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch(e){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=So(Ll(this.node.current,"focus",(()=>this.onFocus())),Ll(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Rl{mount(){const{current:t}=this.node;t&&(this.unmount=function(t,e,n={}){const[i,r,o]=Ju(t,n),s=t=>{if(!Qu(t))return;const{target:n}=t,i=e(n,t);if("function"!=typeof i||!n)return;const o=t=>{Qu(t)&&(i(t),n.removeEventListener("pointerleave",o))};n.addEventListener("pointerleave",o,r)};return i.forEach((t=>{t.addEventListener("pointerenter",s,r)})),o}(t,((t,e)=>(_u(this.node,e,"Start"),t=>_u(this.node,t,"End")))))}unmount(){}}}},fd={layout:{ProjectionNode:Ku,MeasureLayout:Uc}},gd=(0,i.createContext)({strict:!1}),yd=(0,i.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),vd=(0,i.createContext)({});function bd(t){return Yr(t.animate)||Al.some((e=>xl(t[e])))}function xd(t){return Boolean(bd(t)||t.variants)}function wd(t){const{initial:e,animate:n}=function(t,e){if(bd(t)){const{initial:e,animate:n}=t;return{initial:!1===e||xl(e)?e:void 0,animate:xl(n)?n:void 0}}return!1!==t.inherit?e:{}}(t,(0,i.useContext)(vd));return(0,i.useMemo)((()=>({initial:e,animate:n})),[Ad(e),Ad(n)])}function Ad(t){return Array.isArray(t)?t.join(" "):t}const Ed="undefined"!=typeof window,Sd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pd={};for(const oh in Sd)Pd[oh]={isEnabled:t=>Sd[oh].some((e=>!!t[e]))};const kd=Symbol.for("motionComponentSymbol");function Cd(t,e,n){return(0,i.useCallback)((i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&("function"==typeof n?n(i):mc(n)&&(n.current=i))}),[e])}const Td=Ed?i.useLayoutEffect:i.useEffect;function Md(t,e,n,r,o){const{visualElement:s}=(0,i.useContext)(vd),a=(0,i.useContext)(gd),l=(0,i.useContext)(Vc),c=(0,i.useContext)(yd).reducedMotion,u=(0,i.useRef)(null);r=r||a.renderer,!u.current&&r&&(u.current=r(t,{visualState:e,parent:s,props:n,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,m=(0,i.useContext)(Oc);!d||d.projection||!o||"html"!==d.type&&"svg"!==d.type||function(t,e,n,i){const{layoutId:r,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:jd(t.parent)),t.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:Boolean(s)||a&&mc(a),visualElement:t,animationType:"string"==typeof o?o:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,n,o,m);const h=(0,i.useRef)(!1);(0,i.useInsertionEffect)((()=>{d&&h.current&&d.update(n,l)}));const p=n[wo],f=(0,i.useRef)(Boolean(p)&&!window.MotionHandoffIsComplete?.(p)&&window.MotionHasOptimisedAnimation?.(p));return Td((()=>{d&&(h.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Dc.render(d.render),f.current&&d.animationState&&d.animationState.animateChanges())})),(0,i.useEffect)((()=>{d&&(!f.current&&d.animationState&&d.animationState.animateChanges(),f.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(p)})),f.current=!1))})),d}function jd(t){if(t)return!1!==t.options.allowProjection?t.projection:jd(t.parent)}function Dd({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:o}){function s(t,s){let a;const l={...(0,i.useContext)(yd),...t,layoutId:Rd(t)},{isStatic:c}=l,u=wd(t),d=r(t,c);if(!c&&Ed){!function(){(0,i.useContext)(gd).strict;0}();const t=function(t){const{drag:e,layout:n}=Pd;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e?.isEnabled(t)||n?.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(l);a=t.MeasureLayout,u.visualElement=Md(o,d,l,e,t.ProjectionNode)}return(0,jc.jsxs)(vd.Provider,{value:u,children:[a&&u.visualElement?(0,jc.jsx)(a,{visualElement:u.visualElement,...l}):null,n(o,t,Cd(d,u.visualElement,s),d,c,u.visualElement)]})}t&&function(t){for(const e in t)Pd[e]={...Pd[e],...t[e]}}(t),s.displayName=`motion.${"string"==typeof o?o:`create(${o.displayName??o.name??""})`}`;const a=(0,i.forwardRef)(s);return a[kd]=o,a}function Rd({layoutId:t}){const e=(0,i.useContext)(Fc).id;return e&&void 0!==t?e+"-"+t:t}function Vd(t,{layout:e,layoutId:n}){return no.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!Nc[t]||"opacity"===t)}const Fd=(t,e)=>e&&"number"==typeof t?e.transform(t):t,Od={...Fo,transform:Math.round},Id={borderWidth:$o,borderTopWidth:$o,borderRightWidth:$o,borderBottomWidth:$o,borderLeftWidth:$o,borderRadius:$o,radius:$o,borderTopLeftRadius:$o,borderTopRightRadius:$o,borderBottomRightRadius:$o,borderBottomLeftRadius:$o,width:$o,maxWidth:$o,height:$o,maxHeight:$o,top:$o,right:$o,bottom:$o,left:$o,padding:$o,paddingTop:$o,paddingRight:$o,paddingBottom:$o,paddingLeft:$o,margin:$o,marginTop:$o,marginRight:$o,marginBottom:$o,marginLeft:$o,backgroundPositionX:$o,backgroundPositionY:$o,...{rotate:Go,rotateX:Go,rotateY:Go,rotateZ:Go,scale:Io,scaleX:Io,scaleY:Io,scaleZ:Io,skew:Go,skewX:Go,skewY:Go,distance:$o,translateX:$o,translateY:$o,translateZ:$o,x:$o,y:$o,z:$o,perspective:$o,transformPerspective:$o,opacity:Oo,originX:Jo,originY:Jo,originZ:$o},zIndex:Od,fillOpacity:Oo,strokeOpacity:Oo,numOctaves:Od},Ld={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},zd=eo.length;function Bd(t,e,n){const{style:i,vars:r,transformOrigin:o}=t;let s=!1,a=!1;for(const l in e){const t=e[l];if(no.has(l))s=!0;else if(jo(l))r[l]=t;else{const e=Fd(t,Id[l]);l.startsWith("origin")?(a=!0,o[l]=e):i[l]=e}}if(e.transform||(s||n?i.transform=function(t,e,n){let i="",r=!0;for(let o=0;o<zd;o++){const s=eo[o],a=t[s];if(void 0===a)continue;let l=!0;if(l="number"==typeof a?a===(s.startsWith("scale")?1:0):0===parseFloat(a),!l||n){const t=Fd(a,Id[s]);l||(r=!1,i+=`${Ld[s]||s}(${t}) `),n&&(e[s]=t)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:t="50%",originY:e="50%",originZ:n=0}=o;i.transformOrigin=`${t} ${e} ${n}`}}const Nd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Yd(t,e,n){for(const i in e)vo(e[i])||Vd(i,n)||(t[i]=e[i])}function Ud(t,e){const n={};return Yd(n,t.style||{},t),Object.assign(n,function({transformTemplate:t},e){return(0,i.useMemo)((()=>{const n={style:{},transform:{},transformOrigin:{},vars:{}};return Bd(n,e,t),Object.assign({},n.vars,n.style)}),[e])}(t,e)),n}function Wd(t,e){const n={},i=Ud(t,e);return t.drag&&!1!==t.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===t.drag?"none":"pan-"+("x"===t.drag?"y":"x")),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const Xd=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function qd(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Xd.has(t)}let Gd=t=>!qd(t);try{(Hd=require("@emotion/is-prop-valid").default)&&(Gd=t=>t.startsWith("on")?!qd(t):Hd(t))}catch{}var Hd;const $d=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kd(t){return"string"==typeof t&&!t.includes("-")&&!!($d.indexOf(t)>-1||/[A-Z]/u.test(t))}const Zd={offset:"stroke-dashoffset",array:"stroke-dasharray"},Jd={offset:"strokeDashoffset",array:"strokeDasharray"};function Qd(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:o=1,pathOffset:s=0,...a},l,c,u){if(Bd(t,a,c),l)return void(t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox));t.attrs=t.style,t.style={};const{attrs:d,style:m}=t;d.transform&&(m.transform=d.transform,delete d.transform),(m.transform||d.transformOrigin)&&(m.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),m.transform&&(m.transformBox=u?.transformBox??"fill-box",delete d.transformBox),void 0!==e&&(d.x=e),void 0!==n&&(d.y=n),void 0!==i&&(d.scale=i),void 0!==r&&function(t,e,n=1,i=0,r=!0){t.pathLength=1;const o=r?Zd:Jd;t[o.offset]=$o.transform(-i);const s=$o.transform(e),a=$o.transform(n);t[o.array]=`${s} ${a}`}(d,r,o,s,!1)}const _d=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),tm=t=>"string"==typeof t&&"svg"===t.toLowerCase();function em(t,e,n,r){const o=(0,i.useMemo)((()=>{const n={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Qd(n,e,tm(r),t.transformTemplate,t.style),{...n.attrs,style:{...n.style}}}),[e]);if(t.style){const e={};Yd(e,t.style,t),o.style={...e,...o.style}}return o}function nm(t=!1){return(e,n,r,{latestValues:o},s)=>{const a=(Kd(e)?em:Wd)(n,o,s,e),l=function(t,e,n){const i={};for(const r in t)"values"===r&&"object"==typeof t.values||(Gd(r)||!0===n&&qd(r)||!e&&!qd(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}(n,"string"==typeof e,t),c=e!==i.Fragment?{...l,...a,ref:r}:{},{children:u}=n,d=(0,i.useMemo)((()=>vo(u)?u.get():u),[u]);return(0,i.createElement)(e,{...c,children:d})}}const im=t=>(e,n)=>{const r=(0,i.useContext)(vd),o=(0,i.useContext)(Vc),s=()=>function({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:rm(n,i,r,t),renderState:e()}}(t,e,r,o);return n?s():function(t){const e=(0,i.useRef)(null);return null===e.current&&(e.current=t()),e.current}(s)};function rm(t,e,n,i){const r={},o=i(t,{});for(const m in o)r[m]=Hc(o[m]);let{initial:s,animate:a}=t;const l=bd(t),c=xd(t);e&&c&&!l&&!1!==t.inherit&&(void 0===s&&(s=e.initial),void 0===a&&(a=e.animate));let u=!!n&&!1===n.initial;u=u||!1===s;const d=u?a:s;if(d&&"boolean"!=typeof d&&!Yr(d)){const e=Array.isArray(d)?d:[d];for(let n=0;n<e.length;n++){const i=Wr(t,e[n]);if(i){const{transitionEnd:t,transition:e,...n}=i;for(const i in n){let t=n[i];if(Array.isArray(t)){t=t[u?t.length-1:0]}null!==t&&(r[i]=t)}for(const i in t)r[i]=t[i]}}}return r}function om(t,e,n){const{style:i}=t,r={};for(const o in i)(vo(i[o])||e.style&&vo(e.style[o])||Vd(o,t)||void 0!==n?.getValue(o)?.liveStyle)&&(r[o]=i[o]);return r}const sm={useVisualState:im({scrapeMotionValuesFromProps:om,createRenderState:Nd})};function am(t,e,n){const i=om(t,e,n);for(const r in t)if(vo(t[r])||vo(e[r])){i[-1!==eo.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=t[r]}return i}const lm={useVisualState:im({scrapeMotionValuesFromProps:am,createRenderState:_d})};function cm(t,e){return function(n,{forwardMotionProps:i}={forwardMotionProps:!1}){return Dd({...Kd(n)?lm:sm,preloadedFeatures:t,useRender:nm(i),createVisualElement:e,Component:n})}}const um=t=>e=>e.test(t),dm=[Fo,$o,Ho,Go,Zo,Ko,{test:t=>"auto"===t,parse:t=>t}],mm=t=>dm.find(um(t)),hm=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),pm=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fm(t,e,n=1){const[i,r]=function(t){const e=pm.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}(t);if(!i)return;const o=window.getComputedStyle(e).getPropertyValue(i);if(o){const t=o.trim();return hm(t)?parseFloat(t):t}return Ro(r)?fm(r,e,n+1):r}const gm=t=>/^0[^.\s]+$/u.test(t);const ym=new Set(["brightness","contrast","saturate","opacity"]);function vm(t){const[e,n]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;const[i]=n.match(zo)||[];if(!i)return t;const r=n.replace(i,"");let o=ym.has(e)?1:0;return i!==n&&(o*=100),e+"("+o+r+")"}const bm=/\b([a-z-]*)\(.*?\)/gu,xm={...ls,getAnimatableNone:t=>{const e=t.match(bm);return e?e.map(vm).join(" "):t}},wm={...Id,color:_o,backgroundColor:_o,outlineColor:_o,fill:_o,stroke:_o,borderColor:_o,borderTopColor:_o,borderRightColor:_o,borderBottomColor:_o,borderLeftColor:_o,filter:xm,WebkitFilter:xm},Am=t=>wm[t];function Em(t,e){let n=Am(t);return n!==xm&&(n=ls),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Sm=new Set(["auto","none","0"]);class Pm extends Xa{constructor(t,e,n,i,r){super(t,e,n,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:n}=this;if(!e||!e.current)return;super.readKeyframes();for(let a=0;a<t.length;a++){let n=t[a];if("string"==typeof n&&(n=n.trim(),Ro(n))){const i=fm(n,e.current);void 0!==i&&(t[a]=i),a===t.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!io.has(n)||2!==t.length)return;const[i,r]=t,o=mm(i),s=mm(r);if(o!==s)if(Fa(o)&&Fa(s))for(let a=0;a<t.length;a++){const e=t[a];"string"==typeof e&&(t[a]=parseFloat(e))}else La[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,n=[];for(let r=0;r<t.length;r++)(null===t[r]||("number"==typeof(i=t[r])?0===i:null===i||"none"===i||"0"===i||gm(i)))&&n.push(r);var i;n.length&&function(t,e,n){let i,r=0;for(;r<t.length&&!i;){const e=t[r];"string"==typeof e&&!Sm.has(e)&&rs(e).values.length&&(i=t[r]),r++}if(i&&n)for(const o of e)t[o]=Em(n,i)}(t,n,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:n}=this;if(!t||!t.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=La[n](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const i=e[e.length-1];void 0!==i&&t.getValue(n,i).jump(i,!1)}measureEndState(){const{element:t,name:e,unresolvedKeyframes:n}=this;if(!t||!t.current)return;const i=t.getValue(e);i&&i.jump(this.measuredOrigin,!1);const r=n.length-1,o=n[r];n[r]=La[e](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach((([e,n])=>{t.getValue(e).set(n)})),this.resolveNoneKeyframes()}}const km=[...dm,_o,ls],Cm={current:null},Tm={current:!1};const Mm=new WeakMap;const jm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Dm{scrapeMotionValuesFromProps(t,e,n){return{}}constructor({parent:t,props:e,presenceContext:n,reducedMotionConfig:i,blockInitialAnimation:r,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Xa,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const t=uo.now();this.renderScheduledAt<t&&(this.renderScheduledAt=t,Jr.render(this.render,!1,!0))};const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=e.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=e,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(r),this.isControllingVariants=bd(e),this.isVariantNode=xd(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(e,{},this);for(const d in u){const t=u[d];void 0!==a[d]&&vo(t)&&t.set(a[d],!1)}}mount(t){this.current=t,Mm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((t,e)=>this.bindToMotionValue(e,t))),Tm.current||function(){if(Tm.current=!0,Ed)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Cm.current=t.matches;t.addListener(e),e()}else Cm.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Cm.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Qr(this.notifyUpdate),Qr(this.render),this.valueSubscriptions.forEach((t=>t())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const n=no.has(t);n&&this.onBindTransform&&this.onBindTransform();const i=e.on("change",(e=>{this.latestValues[t]=e,this.props.onUpdate&&Jr.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),r=e.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,(()=>{i(),r(),o&&o(),e.owner&&e.stop()}))}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation";for(t in Pd){const e=Pd[t];if(!e)continue;const{isEnabled:n,Feature:i}=e;if(!this.features[t]&&i&&n(this.props)&&(this.features[t]=new i(this)),this.features[t]){const e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let n=0;n<jm.length;n++){const e=jm[n];this.propEventSubscriptions[e]&&(this.propEventSubscriptions[e](),delete this.propEventSubscriptions[e]);const i=t["on"+e];i&&(this.propEventSubscriptions[e]=this.on(e,i))}this.prevMotionValues=function(t,e,n){for(const i in e){const r=e[i],o=n[i];if(vo(r))t.addValue(i,r);else if(vo(o))t.addValue(i,po(r,{owner:t}));else if(o!==r)if(t.hasValue(i)){const e=t.getValue(i);!0===e.liveStyle?e.jump(r):e.hasAnimated||e.set(r)}else{const e=t.getStaticValue(i);t.addValue(i,po(void 0!==e?e:r,{owner:t}))}}for(const i in n)void 0===e[i]&&t.removeValue(i);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const n=this.values.get(t);e!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return void 0===n&&void 0!==e&&(n=po(null===e?void 0:e,{owner:this}),this.addValue(t,n)),n}readValue(t,e){let n=void 0===this.latestValues[t]&&this.current?this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options):this.latestValues[t];return null!=n&&("string"==typeof n&&(hm(n)||gm(n))?n=parseFloat(n):!(t=>km.find(um(t)))(n)&&ls.test(e)&&(n=Em(t,e)),this.setBaseTarget(t,vo(n)?n.get():n)),vo(n)?n.get():n}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){const{initial:e}=this.props;let n;if("string"==typeof e||"object"==typeof e){const i=Wr(this.props,e,this.presenceContext?.custom);i&&(n=i[t])}if(e&&void 0!==n)return n;const i=this.getBaseTargetFromProps(this.props,t);return void 0===i||vo(i)?void 0!==this.initialValues[t]&&void 0===n?void 0:this.baseTarget[t]:i}on(t,e){return this.events[t]||(this.events[t]=new so),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class Rm extends Dm{constructor(){super(...arguments),this.KeyframeResolver=Pm}sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:n}){delete e[t],delete n[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;vo(t)&&(this.childSubscription=t.on("change",(t=>{this.current&&(this.current.textContent=`${t}`)})))}}function Vm(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const o in n)t.style.setProperty(o,n[o])}class Fm extends Rm{constructor(){super(...arguments),this.type="html",this.renderInstance=Vm}readValueFromInstance(t,e){if(no.has(e))return this.projection?.isProjecting?Da(e):((t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Ra(n,e)})(t,e);{const i=(n=t,window.getComputedStyle(n)),r=(jo(e)?i.getPropertyValue(e):i[e])||0;return"string"==typeof r?r.trim():r}var n}measureInstanceViewportBox(t,{transformPagePoint:e}){return uc(t,e)}build(t,e,n){Bd(t,e,n.transformTemplate)}scrapeMotionValuesFromProps(t,e,n){return om(t,e,n)}}const Om=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);class Im extends Rm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$l}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(no.has(e)){const t=Am(e);return t&&t.default||0}return e=Om.has(e)?e:xo(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,n){return am(t,e,n)}build(t,e,n){Qd(t,e,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(t,e,n,i){!function(t,e,n,i){Vm(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Om.has(r)?r:xo(r),e.attrs[r])}(t,e,0,i)}mount(t){this.isSVGTag=tm(t.tagName),super.mount(t)}}const Lm=Nr(cm({...Fl,...pd,...Zu,...fd},((t,e)=>Kd(t)?new Im(e):new Fm(e,{allowProjection:t!==i.Fragment})))),zm=qe.div`
    height: 50rem;
    width: 100%;
    max-width: 800px;
    aspect-ratio: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`,Bm=qe(Lm.div)`
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
`,Nm=qe(Lm.div)`
  width: 14rem;
  height: 8rem;
  background-color: rgba(255, 255, 255, 0.9);
  background-image: ${t=>`url(${t.bgImage})`};
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 1);
  z-index: 1;
  overflow: hidden;
  border: 1px outset  #FFFFFF;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 70px;
    font-size: 0.8rem;
  }
`,Ym=[{x:-120,y:-120},{x:120,y:-120},{x:-120,y:120},{x:120,y:120},{x:0,y:-170},{x:0,y:170},{x:-170,y:0},{x:170,y:0}],Um=t=>{let{data:e,isVisible:n}=t;const r={hidden:{opacity:0,scale:.5,x:0,y:0},visible:t=>({opacity:1,scale:1,x:Ym[t].x,y:Ym[t].y,transition:{delay:.1*t,duration:.5,type:"spring",stiffness:100}})};return i.createElement(zm,null,i.createElement(Bm,{key:n?"visible":"hidden",initial:{scale:.5,opacity:0},animate:n?{scale:1,opacity:1}:{scale:.5,opacity:0},transition:{duration:.5}},"Conteúdos"),null==e?void 0:e.map(((t,e)=>i.createElement(Nm,{key:`${e}-${n}`,custom:e,initial:"hidden",animate:n?"visible":"hidden",variants:r,bgImage:t.imagem,whileHover:{scale:1.1,boxShadow:"0 8px 30px rgba(255, 255, 255, 0.2)",transition:{duration:.5},zIndex:1e3}},t.titulo))))},Wm=[{id:1,titulo:"Governança Digital",imagem:ki},{id:2,titulo:"Soluções Integradas",imagem:Si},{id:3,titulo:"Segurança de Dados",imagem:Pi},{id:4,titulo:"Inovação Tecnológica",imagem:Ci},{id:5,titulo:"Atendimento ao Cidadão",imagem:Ti},{id:6,titulo:"Transformação Digital",imagem:ki},{id:7,titulo:"Parcerias Estratégicas",imagem:Si},{id:8,titulo:"Sustentabilidade",imagem:Pi}];var Xm=()=>{const t=(0,i.useRef)(null),{0:e,1:n}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{n(t.isIntersecting)}))}),{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}}),[]),i.createElement("div",{ref:t},i.createElement(Um,{data:Wm,isVisible:e}))},qm=n(9879);const Gm=qe.div`
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

    @media (max-width: 768px) {
        width: 100%rem;
    }
`,Hm=qe.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 35rem;
`,$m=qe.div`
    flex: 0 0 calc(33.33% - 2rem);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;

    @media (max-width: 768px) {
        flex: 0 0 calc(100% - 2rem);
    }
`,Km=qe.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
`,Zm=(qe.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
`,qe.button`
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
`),Jm=qe.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 8px;
`,Qm=qe.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
        background-color: #333;
    }
`;function _m(t){let{windowWidth:e,handleResize:n,images:r}=t;const o=r.length,s=(0,i.useRef)(null),{0:a,1:l}=(0,i.useState)(0),{0:c,1:u}=(0,i.useState)(3),{0:d,1:m}=(0,i.useState)(Math.ceil(o/c));return(0,i.useEffect)((()=>{e<=768&&(u(1),m(Math.ceil(o/c)))}),[e]),(0,i.useEffect)((()=>{s.current&&(s.current.style.transition="transform 0.5s ease-in-out",s.current.style.transform=`translateX(-${100*a}%)`)}),[a]),i.createElement(Gm,null,i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",height:"35rem",width:"100%",zIndex:1}},i.createElement(Zm,{onClick:()=>{l((t=>Math.max(0,t-1)))}},i.createElement(qm.oe,null))),i.createElement(Hm,{ref:s},r.map(((t,e)=>i.createElement($m,{key:e},i.createElement(Km,{src:t}))))),i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",height:"35rem",width:"100%",zIndex:1}},i.createElement(Zm,{onClick:()=>{l((t=>Math.min(d-1,t+1)))}},i.createElement(qm.mny,null)))),i.createElement(Jm,null,Array.from({length:d}).map(((t,e)=>i.createElement(Qm,{key:e,className:a===e?"active":"",onClick:()=>(t=>{l(t)})(e)})))))}const th=qe.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;
    background: '#dfdfdf';
`,eh=qe.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #003366;
    color: #333;
`;function nh(t){let{windowWidth:e,handleResize:n}=t;return i.createElement(th,null,i.createElement(eh,null,"Depoimentos"),i.createElement(_m,{windowWidth:e,handleResize:n,images:[Si,Pi,ki,Si,Pi,ki,Si,Pi,ki]}))}const ih=()=>i.createElement("div",{title:"Home"});var rh=()=>{const{0:t,1:e}=(0,i.useState)(window.innerWidth),{0:n,1:r}=(0,i.useState)(0),o=()=>{const t=window.scrollY;r(t)},s=()=>{e(window.innerWidth)};(0,i.useEffect)((()=>(window.addEventListener("scroll",o),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",s)})),[]);const a=0===n;return i.createElement($e,null,i.createElement(gi,{isCabecalhoFlutuante:a,windowWidth:t}),i.createElement(hn,null),i.createElement(Oi,null),i.createElement(er,null),i.createElement(cr,null),i.createElement(Er,null),i.createElement(nh,{windowWidth:t,handleResize:s}),i.createElement(Br,null),i.createElement(Xm,null),i.createElement(Ze,null,"Rodapé"))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-737d894bd86e1e5555b5.js.map