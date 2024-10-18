"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[149],{1005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),a=t(8453);const i={sidebar_position:5},s="Array",c={id:"validate/array",title:"Array",description:"C\xfa ph\xe1p",source:"@site/docs/validate/array.md",sourceDirName:"validate",slug:"/validate/array",permalink:"/zod/validate/array",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Date",permalink:"/zod/validate/date"},next:{title:"Object",permalink:"/zod/validate/object"}},o={},d=[{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"Validation",id:"validation",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"array",children:"Array"})}),"\n",(0,r.jsx)(n.h2,{id:"c\xfa-ph\xe1p",children:"C\xfa ph\xe1p"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"z.array(z.string()) // M\u1ea3ng c\xe1c string\nz.array(z.number()) // M\u1ea3ng c\xe1c number\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"ho\u1eb7c ta c\xf3 th\u1ec3 vi\u1ebft:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"z.string().array(); // equivalent to z.array(z.string());\n"})}),"\n",(0,r.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'z.array(z.string()).nonempty(message?: string) // M\u1ea3ng kh\xf4ng \u0111\u01b0\u1ee3c r\u1ed7ng\nz.array(z.string()).min(minLength: number, message?: string) // M\u1ea3ng ph\u1ea3i c\xf3 \xedt nh\u1ea5t "minLength" ph\u1ea7n t\u1eed\nz.array(z.string()).max(maxLength: number, message?: string) // M\u1ea3ng ch\u1ec9 \u0111\u01b0\u1ee3c c\xf3 t\u1ed1i \u0111a "maxLength" ph\u1ea7n t\u1eed\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(6540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);