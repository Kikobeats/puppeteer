/*! For license information please see 5a965fe8.14655788.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74234],{74106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(74848),l=t(28453);const a={sidebar_label:"ElementHandle.toElement"},s="ElementHandle.toElement() method",o={id:"api/puppeteer.elementhandle.toelement",title:"ElementHandle.toElement() method",description:"Converts the current handle to the given element type.",source:"@site/versioned_docs/version-23.7.1/api/puppeteer.elementhandle.toelement.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.toelement",permalink:"/api/puppeteer.elementhandle.toelement",draft:!1,unlisted:!1,tags:[],version:"23.7.1",frontMatter:{sidebar_label:"ElementHandle.toElement"},sidebar:"api",previous:{title:"ElementHandle.tap",permalink:"/api/puppeteer.elementhandle.tap"},next:{title:"ElementHandle.touchEnd",permalink:"/api/puppeteer.elementhandle.touchend"}},i={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"elementhandletoelement-method",children:"ElementHandle.toElement() method"})}),"\n",(0,r.jsx)(n.p,{children:"Converts the current handle to the given element type."}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  toElement<K extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap>(\n    tagName: K,\n  ): Promise<HandleFor<ElementFor<K>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"tagName"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"K"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"The tag name of the desired element type."})})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<",(0,r.jsx)(n.a,{href:"/api/puppeteer.elementfor",children:"ElementFor"}),"<K>>>"]}),"\n",(0,r.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,r.jsxs)(n.p,{children:["An error if the handle does not match. ",(0,r.jsx)(n.strong,{children:"The handle will not be automatically disposed."})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const element: ElementHandle<Element> = await page.$('.class-name-of-anchor');\n// DO NOT DISPOSE `element`, this will be always be the same handle.\nconst anchor: ElementHandle<HTMLAnchorElement> = await element.toElement('a');\n"})})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},21020:(e,n,t)=>{var r=t(96540),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,a={},d=null,p=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,r)&&!i.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:l,type:e,key:d,ref:p,props:a,_owner:o.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);