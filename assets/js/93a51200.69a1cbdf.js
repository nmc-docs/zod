"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[164],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),b=a,g=p["".concat(u,".").concat(b)]||p[b]||m[b]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},7868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2},o="Number",l={unversionedId:"validate/number",id:"validate/number",title:"Number",description:"C\xfa ph\xe1p",source:"@site/docs/validate/number.md",sourceDirName:"validate",slug:"/validate/number",permalink:"/zod/validate/number",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"String",permalink:"/zod/validate/string"},next:{title:"Booleans",permalink:"/zod/validate/booleans"}},u={},c=[{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"Validation",id:"validation",level:2}],s={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"number"},"Number"),(0,a.kt)("h2",{id:"c\xfa-ph\xe1p"},"C\xfa ph\xe1p"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"z.number({\n  coerce: boolean, // T\u1ef1 \u0111\u1ed9ng \xe9p ki\u1ec3u sang number hay kh\xf4ng\n  invalid_type_error: string, // Th\xf4ng b\xe1o l\u1ed7i n\u1ebfu kh\xf4ng \u0111\xfang ki\u1ec3u number\n});\n")),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D\u01b0\u1edbi \u0111\xe2y l\xe0 nh\u1eefng ph\u01b0\u01a1ng th\u1ee9c \u0111\u1ec3 validate number:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"z.number().gt(value: number, message?: string); // L\u1edbn h\u01a1n gi\xe1 tr\u1ecb ch\u1ec9 \u0111\u1ecbnh\nz.number().min(value: number, message?: string); // L\u1edbn h\u01a1n ho\u1eb7c b\u1eb1ng gi\xe1 tr\u1ecb ch\u1ec9 \u0111\u1ecbnh\nz.number().lt(value: number, message?: string); // Nh\u1ecf h\u01a1n gi\xe1 tr\u1ecb ch\u1ec9 \u0111\u1ecbnh\nz.number().max(value: number, message?: string); // Nh\u1ecf h\u01a1n ho\u1eb7c b\u1eb1ng gi\xe1 tr\u1ecb ch\u1ec9 \u0111\u1ecbnh\n\nz.number().int(message?: string); // Ph\u1ea3i l\xe0 gi\xe1 tr\u1ecb nguy\xean\n\nz.number().positive(message?: string); // Gi\xe1 tr\u1ecb ph\u1ea3i > 0\nz.number().nonnegative(message?: string); //  Gi\xe1 tr\u1ecb ph\u1ea3i >= 0\nz.number().negative(); // Gi\xe1 tr\u1ecb ph\u1ea3i < 0\nz.number().nonpositive(); //  Gi\xe1 tr\u1ecb ph\u1ea3i <= 0\n\nz.number().multipleOf(value: number, message?: string); // Gi\xe1 tr\u1ecb ph\u1ea3i chia h\u1ebft cho s\u1ed1 \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh\n")))}m.isMDXComponent=!0}}]);