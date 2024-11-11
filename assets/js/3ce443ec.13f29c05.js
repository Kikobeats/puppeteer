/*! For license information please see 3ce443ec.13f29c05.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17769],{79703:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(74848),s=n(28453);const i={sidebar_label:"Frame.goto"},o="Frame.goto() method",a={id:"api/puppeteer.frame.goto",title:"Frame.goto() method",description:"Navigates the frame or page to the given url.",source:"@site/versioned_docs/version-23.7.1/api/puppeteer.frame.goto.md",sourceDirName:"api",slug:"/api/puppeteer.frame.goto",permalink:"/api/puppeteer.frame.goto",draft:!1,unlisted:!1,tags:[],version:"23.7.1",frontMatter:{sidebar_label:"Frame.goto"},sidebar:"api",previous:{title:"Frame.frameElement",permalink:"/api/puppeteer.frame.frameelement"},next:{title:"Frame.hover",permalink:"/api/puppeteer.frame.hover"}},l={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"framegoto-method",children:"Frame.goto() method"})}),"\n",(0,t.jsxs)(r.p,{children:["Navigates the frame or page to the given ",(0,t.jsx)(r.code,{children:"url"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  abstract goto(\n    url: string,\n    options?: GoToOptions,\n  ): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"url"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["URL to navigate the frame to. The URL should include scheme, e.g. ",(0,t.jsx)(r.code,{children:"https://"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.gotooptions",children:"GoToOptions"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," Options to configure waiting behavior."]})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,t.jsx)(r.p,{children:"A promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect."}),"\n",(0,t.jsx)(r.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,t.jsx)(r.p,{children:"If:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"there's an SSL error (e.g. in case of self-signed certificates)."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"target URL is invalid."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"the timeout is exceeded during navigation."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"the remote server does not respond or is unreachable."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"the main resource failed to load."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["Navigation to ",(0,t.jsx)(r.code,{children:"about:blank"})," or navigation to the same URL with a different hash will succeed and return ",(0,t.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["Headless shell mode doesn't support navigation to a PDF document. See the ",(0,t.jsx)(r.a,{href:"https://crbug.com/761295",children:"upstream issue"}),"."]})}),"\n",(0,t.jsxs)(r.p,{children:['In headless shell, this method will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling ',(0,t.jsx)(r.a,{href:"/api/puppeteer.httpresponse.status",children:"HTTPResponse.status()"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},21020:(e,r,n)=>{var t=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,i={},d=null,c=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)o.call(r,t)&&!l.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(96540);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);