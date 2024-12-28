"use strict";(self.webpackChunkai_assistant=self.webpackChunkai_assistant||[]).push([[194],{9401:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Tutorials/in-app-payment","title":"\ud83d\udcb3 In-app-payment","description":"How Stripe Subscription Works","source":"@site/docs/1.Tutorials/in-app-payment.md","sourceDirName":"1.Tutorials","slug":"/tutorials/in-app-payment","permalink":"/RapidAsk/docs/tutorials/in-app-payment","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1.Tutorials/in-app-payment.md","tags":[],"version":"current","sidebarPosition":6.2,"frontMatter":{"slug":"/tutorials/in-app-payment","title":"\ud83d\udcb3 In-app-payment","sidebar_position":6.2},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd79\ufe0f Custom actions","permalink":"/RapidAsk/docs/tutorials/custom-actions"},"next":{"title":"\ud83e\udd16 Visual characters","permalink":"/RapidAsk/docs/tutorials/visual-characters"}}');var i=s(4848),r=s(8453);const o={slug:"/tutorials/in-app-payment",title:"\ud83d\udcb3 In-app-payment",sidebar_position:6.2},a="Stripe Subscription Integration",c={},l=[{value:"<strong>How Stripe Subscription Works</strong>",id:"how-stripe-subscription-works",level:3},{value:"<strong>What Happens During the Subscription Flow?</strong>",id:"what-happens-during-the-subscription-flow",level:3},{value:"<strong>What Happens After the Payment?</strong>",id:"what-happens-after-the-payment",level:3}];function p(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"stripe-subscription-integration",children:"Stripe Subscription Integration"})}),"\n",(0,i.jsx)(t.h3,{id:"how-stripe-subscription-works",children:(0,i.jsx)(t.strong,{children:"How Stripe Subscription Works"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Stripe Checkout via FlutterFlow"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"FlutterFlow handles the creation of the Stripe customer and the checkout session. When a user subscribes, they are redirected to Stripe\u2019s hosted checkout page for payment."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Webhook Handling in Firebase Cloud Functions"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["After the payment, Stripe sends a webhook to a Firebase Cloud Function. This function updates the user's subscription status in the Firestore ",(0,i.jsx)(t.code,{children:"users"})," collection."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"what-happens-during-the-subscription-flow",children:(0,i.jsx)(t.strong,{children:"What Happens During the Subscription Flow?"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"User Triggers Checkout"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The user clicks to subscribe in your app."}),"\n",(0,i.jsx)(t.li,{children:"FlutterFlow makes an API call to Stripe to create a checkout session and Stripe generates a URL for the checkout page."}),"\n",(0,i.jsx)(t.li,{children:"The user is redirected to Stripe\u2019s page to complete the payment."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Payment Completion"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The user fills in payment details on Stripe\u2019s checkout page and completes the payment."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Stripe Webhook Notification"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Once the payment is processed, Stripe sends a webhook to your Firebase Cloud Function."}),"\n",(0,i.jsxs)(t.li,{children:["The Firebase function receives this notification and updates the ",(0,i.jsx)(t.code,{children:"users"})," collection in Firestore with the current subscription status (active, canceled, etc.)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"what-happens-after-the-payment",children:(0,i.jsx)(t.strong,{children:"What Happens After the Payment?"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["After a successful payment, your Firebase Cloud Function automatically updates the user\u2019s subscription status in the ",(0,i.jsx)(t.code,{children:"users"})," collection."]}),"\n",(0,i.jsxs)(t.li,{children:["The Cloud Function listens for the webhook and updates relevant fields like ",(0,i.jsx)(t.code,{children:"subscriptionStatus"})," to reflect the user's new subscription state (active, canceled, etc.)."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(6540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);