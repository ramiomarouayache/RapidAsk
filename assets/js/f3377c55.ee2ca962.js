"use strict";(self.webpackChunkai_assistant=self.webpackChunkai_assistant||[]).push([[952],{6354:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Tutorials/User authentification","title":"\ud83d\udd12 Auth/ trial counter","description":"1. Firebase auth","source":"@site/docs/1.Tutorials/User authentification.md","sourceDirName":"1.Tutorials","slug":"/tutorials/auth","permalink":"/RapidAsk/docs/tutorials/auth","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1.Tutorials/User authentification.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"slug":"/tutorials/auth","title":"\ud83d\udd12 Auth/ trial counter","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"\ud83c\udf10 API calls","permalink":"/RapidAsk/docs/tutorials/api-calls"},"next":{"title":"\ud83d\udd79\ufe0f Custom actions","permalink":"/RapidAsk/docs/tutorials/custom-actions"}}');var s=r(4848),i=r(8453);const o={slug:"/tutorials/auth",title:"\ud83d\udd12 Auth/ trial counter",sidebar_position:5},a=void 0,l={},c=[{value:"1. <strong>Firebase auth</strong>",id:"1-firebase-auth",level:3},{value:"2. <strong>Trial Counter</strong>",id:"2-trial-counter",level:3},{value:"3. <strong>Manage Trial Counter</strong>",id:"3-manage-trial-counter",level:3}];function u(e){const n={blockquote:"blockquote",br:"br",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h3,{id:"1-firebase-auth",children:["1. ",(0,s.jsx)(n.strong,{children:"Firebase auth"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Remove Existing Firebase Link"}),":",(0,s.jsx)(n.br,{}),"\n","In your FlutterFlow project settings, disconnect any existing Firebase project (default project)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Link Your Own Firebase Project"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"auto setup wizard"})," in FlutterFlow, or create a Firebase project manually in the Firebase Console."]}),"\n",(0,s.jsxs)(n.li,{children:["In Firebase Console, go to ",(0,s.jsx)(n.code,{children:"Project Settings"})," > ",(0,s.jsx)(n.code,{children:"Users & Permissions"})," and add ",(0,s.jsx)(n.code,{children:"firebase@flutterflow.com"})," as an editor."]}),"\n",(0,s.jsx)(n.li,{children:"Add your authentication provider (e.g., email/password, Google, Apple). You can follow the setup guide [here]."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"2-trial-counter",children:["2. ",(0,s.jsx)(n.strong,{children:"Trial Counter"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ensure you have a ",(0,s.jsx)(n.code,{children:"users"})," collection in Firestore with the necessary fields."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add a ",(0,s.jsx)(n.code,{children:"trialCount"})," field (integer) to the ",(0,s.jsx)(n.code,{children:"users"})," collection."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Configure Firestore Rules"})}),"\n",(0,s.jsx)(n.p,{children:"Here\u2019s an example of Firestore rules to manage user data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"rules_version = '2';\r\nservice cloud.firestore {\r\n  match /databases/{database}/documents {\r\n    match /users/{document} {\r\n      allow create: if request.auth != null;\r\n      allow read: if request.auth != null;\r\n      allow write: if request.auth != null;\r\n      allow delete: if false;\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," These rules will be updated later during deployment when Cloud Functions are used for better security."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"3-manage-trial-counter",children:["3. ",(0,s.jsx)(n.strong,{children:"Manage Trial Counter"})]}),"\n",(0,s.jsxs)(n.p,{children:["There are two key points to manage the ",(0,s.jsx)(n.code,{children:"trialCount"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"On User Signup"}),":",(0,s.jsx)(n.br,{}),"\n","When a user signs up (via Firebase Auth or third-party like Google/Apple), create a new ",(0,s.jsx)(n.code,{children:"user"})," document in Firestore and set the initial ",(0,s.jsx)(n.code,{children:"trialCount"})," (e.g., 10)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"On Feature Usage"}),":",(0,s.jsx)(n.br,{}),"\n","Each time the user interacts with the core features (e.g., voice recording), decrement the ",(0,s.jsx)(n.code,{children:"trialCount"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add an action to check if ",(0,s.jsx)(n.code,{children:"trialCount"})," is above 0 before allowing further actions (e.g., voice response)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," We always recommend moving the management of sensitive fields, like trialCounter, to a backend or BaaS to reduce vulnerabilities."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Recommendations"}),(0,s.jsxs)(n.p,{children:["For enhanced security, initialize the ",(0,s.jsx)(n.code,{children:"trialCount"})," field using Firebase Cloud Functions or your own backend."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example Firebase Cloud Function"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const functions = require('firebase-functions');\r\nconst admin = require('firebase-admin');\r\nadmin.initializeApp();\r\n\r\n// Listen for new signups & initialize\r\nexports.initializeTrialCount = functions.auth.user().onCreate(async (user) => {\r\n  const userRef = admin.firestore().collection('users').doc(user.uid);\r\n  await userRef.set({ trialCount: 10 }, { merge: true });\r\n});\n"})}),(0,s.jsxs)(n.p,{children:["After this, prevent client-side updates to ",(0,s.jsx)(n.code,{children:"trialCount"})," by setting a decrement-only rule, like this:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"rules_version = '2'; \r\nservice cloud.firestore {\r\n  match /databases/{database}/documents {\r\n    match /users/{userId} {\r\n      // Allow authenticated users to read the user document\r\n      allow read: if request.auth != null;\r\n\r\n      // Allow Cloud Functions to create the document, but only with the trialCount field\r\n      allow create: if request.auth != null && request.resource.data.keys().hasOnly(['trialCount']);\r\n\r\n      // Allow authenticated users to update trialCount, but ensure it's only decremented\r\n      allow update: if request.auth != null\r\n                    && request.auth.uid == userId\r\n                    && request.resource.data.keys().hasOnly(['trialCount'])\r\n                    && request.resource.data.trialCount <= resource.data.trialCount;\r\n\r\n      // Prevent anyone from writing arbitrary data to the document\r\n      allow write: if false;\r\n\r\n      // Prevent document deletion\r\n      allow delete: if false;\r\n    }\r\n  }\r\n}\n"})})]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);