/*! For license information please see 8b68a137.fa1c4948.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23271],{12250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(74848),s=r(28453);const o={},a="Getting started",i={id:"guides/getting-started",title:"Getting started",description:"Puppeteer will be familiar to people using other browser testing frameworks. You",source:"@site/versioned_docs/version-23.7.1/guides/getting-started.md",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/guides/getting-started",draft:!1,unlisted:!1,tags:[],version:"23.7.1",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/guides/installation"},next:{title:"System requirements",permalink:"/guides/system-requirements"}},p={},l=[];function c(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"getting-started",children:"Getting started"})}),"\n",(0,n.jsxs)(t.p,{children:["Puppeteer will be familiar to people using other browser testing frameworks. You\n",(0,n.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.launch",children:"launch"}),"/",(0,n.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.connect",children:"connect"}),"\na ",(0,n.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.browser",children:"browser"}),",\n",(0,n.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.browser.newpage",children:"create"})," some\n",(0,n.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.page",children:"pages"}),", and then manipulate them with\n",(0,n.jsx)(t.a,{href:"https://pptr.dev/api",children:"Puppeteer's API"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The following example searches ",(0,n.jsx)(t.a,{href:"https://developer.chrome.com/",children:"developer.chrome.com"}),' for blog posts with text "automate beyond recorder", click on the first result and print the full title of the blog post.']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser and open a new blank page\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n\n  // Navigate the page to a URL\n  await page.goto('https://developer.chrome.com/');\n\n  // Set screen size\n  await page.setViewport({width: 1080, height: 1024});\n\n  // Type into search box\n  await page.type('.devsite-search-field', 'automate beyond recorder');\n\n  // Wait and click on first result\n  const searchResultSelector = '.devsite-result-item-link';\n  await page.waitForSelector(searchResultSelector);\n  await page.click(searchResultSelector);\n\n  // Locate the full title with a unique string\n  const textSelector = await page.waitForSelector(\n    'text/Customize and automate',\n  );\n  const fullTitle = await textSelector?.evaluate(el => el.textContent);\n\n  // Print the full title\n  console.log('The title of this blog post is \"%s\".', fullTitle);\n\n  await browser.close();\n})();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more in-depth usage, check our ",(0,n.jsx)(t.a,{href:"https://pptr.dev/docs",children:"documentation"}),"\nand ",(0,n.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/tree/main/examples",children:"examples"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!p.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);