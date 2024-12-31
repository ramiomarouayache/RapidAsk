"use strict";(self.webpackChunkai_assistant=self.webpackChunkai_assistant||[]).push([[729],{2851:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Tutorials/Security","title":"\ud83d\udee1\ufe0f Security","description":"This guide outlines essential security practices for securing your Flutter app, especially when using FirebaseAuth, Firestore, Stripe, and other services for Web, IOS and Android platform.","source":"@site/docs/1.Tutorials/Security.md","sourceDirName":"1.Tutorials","slug":"/tutorials/security","permalink":"/RapidAsk/docs/tutorials/security","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1.Tutorials/Security.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"slug":"/tutorials/security","title":"\ud83d\udee1\ufe0f Security","sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udea7 Testing & Troubleshoot","permalink":"/RapidAsk/docs/tutorials/testing"},"next":{"title":"\ud83d\udd17 web-deployment","permalink":"/RapidAsk/docs/deployment/web-deployment"}}');var n=r(4848),i=r(8453);const o={slug:"/tutorials/security",title:"\ud83d\udee1\ufe0f Security",sidebar_position:9},l="Security",a={},c=[{value:"1. <strong>Use Strong Authentication Methods</strong>",id:"1-use-strong-authentication-methods",level:3},{value:"2. <strong>Use Role-Based Access Control (RBAC) with Firestore Rules</strong>",id:"2-use-role-based-access-control-rbac-with-firestore-rules",level:3},{value:"1. <strong>API Key Security</strong>",id:"1-api-key-security",level:3},{value:"2. <strong>Verify Purchases Server-Side</strong>",id:"2-verify-purchases-server-side",level:3},{value:"3. <strong>Move Sensitive API Calls to Firebase Cloud Functions</strong>",id:"3-move-sensitive-api-calls-to-firebase-cloud-functions",level:3},{value:"1. <strong>Obfuscate Code</strong>",id:"1-obfuscate-code",level:3},{value:"2. <strong>Secure API Calls</strong>",id:"2-secure-api-calls",level:3},{value:"3. <strong>Store Sensitive Data Securely</strong>",id:"3-store-sensitive-data-securely",level:3},{value:"1. <strong>Minimize Data Collection</strong>",id:"1-minimize-data-collection",level:3},{value:"2. <strong>Use Secure Communication for Data Transfer</strong>",id:"2-use-secure-communication-for-data-transfer",level:3},{value:"1. <strong>Use Firebase Emulator Suite for Local Testing</strong>",id:"1-use-firebase-emulator-suite-for-local-testing",level:3},{value:"2. <strong>Perform Vulnerability Scans</strong>",id:"2-perform-vulnerability-scans",level:3},{value:"3. <strong>Test Permissions on Real Devices</strong>",id:"3-test-permissions-on-real-devices",level:3}];function d(e){const s={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"security",children:"Security"})}),"\n",(0,n.jsxs)(s.p,{children:["This guide outlines essential security practices for securing your Flutter app, especially when using ",(0,n.jsx)(s.strong,{children:"FirebaseAuth"}),", ",(0,n.jsx)(s.strong,{children:"Firestore"}),", ",(0,n.jsx)(s.strong,{children:"Stripe"}),", and other services for ",(0,n.jsx)(s.strong,{children:"Web"}),", ",(0,n.jsx)(s.strong,{children:"IOS"})," and ",(0,n.jsx)(s.strong,{children:"Android"})," platform."]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"Securing Firebase Authentication"})}),(0,n.jsxs)(s.h3,{id:"1-use-strong-authentication-methods",children:["1. ",(0,n.jsx)(s.strong,{children:"Use Strong Authentication Methods"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Enable Multi-Factor Authentication (MFA)"}),": Add an extra layer of security by requiring users to authenticate with both their password and a second factor (like an SMS code or authenticator app)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Enforce Strong Passwords"}),": In Firebase Authentication settings, enforce strong password requirements to prevent easy-to-guess credentials."]}),"\n"]}),(0,n.jsxs)(s.h3,{id:"2-use-role-based-access-control-rbac-with-firestore-rules",children:["2. ",(0,n.jsx)(s.strong,{children:"Use Role-Based Access Control (RBAC) with Firestore Rules"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Limit data access based on user roles, ensuring users only access the data they're authorized to view or modify."}),"\n",(0,n.jsx)(s.li,{children:"Example Firestore security rules:"}),"\n"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"rules_version = '2'; \r\nservice cloud.firestore {\r\n  match /databases/{database}/documents {\r\n    match /users/{userId} {\r\n      // Allow authenticated users to read their own document\r\n      allow read: if request.auth != null && request.auth.uid == userId;\r\n\r\n      // Allow Cloud Functions to create documents, but only with necessary fields (e.g., 'trialCount')\r\n      allow create: if request.auth != null && request.resource.data.keys().hasOnly(['trialCount']);\r\n\r\n      // Allow authenticated users to update their 'trialCount', but only if it's being decremented\r\n      allow update: if request.auth != null\r\n                     && request.auth.uid == userId\r\n                     && request.resource.data.keys().hasOnly(['trialCount'])\r\n                     && request.resource.data.trialCount <= resource.data.trialCount;\r\n\r\n      // Prevent arbitrary writes or document deletions\r\n      allow write: if false;\r\n      allow delete: if false;\r\n    }\r\n  }\r\n}\n"})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"Securing Stripe Integration"})}),(0,n.jsxs)(s.h3,{id:"1-api-key-security",children:["1. ",(0,n.jsx)(s.strong,{children:"API Key Security"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Store Keys Securely"}),": Use secure storage options like ",(0,n.jsx)(s.strong,{children:"Flutter Secure Storage"})," to store your Stripe API keys and tokens."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Avoid Hardcoding Keys"}),": Never expose your API keys or private tokens in your frontend codebase or client-side application. Always keep them on the server side."]}),"\n"]}),(0,n.jsxs)(s.h3,{id:"2-verify-purchases-server-side",children:["2. ",(0,n.jsx)(s.strong,{children:"Verify Purchases Server-Side"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Server-Side Verification"}),": Always use Stripe's server-side endpoint to validate payments and ensure the legitimacy of transactions, preventing fraud."]}),"\n"]}),(0,n.jsxs)(s.h3,{id:"3-move-sensitive-api-calls-to-firebase-cloud-functions",children:["3. ",(0,n.jsx)(s.strong,{children:"Move Sensitive API Calls to Firebase Cloud Functions"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Why Move API Calls to Backend"}),": It's crucial to move sensitive API calls like payment processing to the server backend (e.g., Firebase Cloud Functions) rather than handling them directly on the client. This prevents attackers from intercepting keys or tokens in the client-side code using browser tools."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Example Firebase Cloud Function for Webhook"}),": Handle Stripe webhooks in Firebase Cloud Functions to securely update the user's subscription status in Firestore based on the payment outcome."]}),"\n"]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"Best Practices for Mobile Security (Android and iOS)"})}),(0,n.jsxs)(s.h3,{id:"1-obfuscate-code",children:["1. ",(0,n.jsx)(s.strong,{children:"Obfuscate Code"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Android"}),": Enable ProGuard in ",(0,n.jsx)(s.code,{children:"build.gradle"})," to obfuscate and minify your code, making it harder for attackers to reverse-engineer."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"iOS"}),": Enable Swift code obfuscation through Xcode settings to protect your app's source code from unauthorized access."]}),"\n"]}),(0,n.jsxs)(s.h3,{id:"2-secure-api-calls",children:["2. ",(0,n.jsx)(s.strong,{children:"Secure API Calls"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Use HTTPS"}),": Always ensure that your network calls are made over HTTPS to encrypt data in transit."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Validate SSL Certificates"}),": Protect your app from man-in-the-middle attacks by validating SSL certificates on both Android and iOS devices."]}),"\n"]}),(0,n.jsxs)(s.h3,{id:"3-store-sensitive-data-securely",children:["3. ",(0,n.jsx)(s.strong,{children:"Store Sensitive Data Securely"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"iOS"}),": Use the ",(0,n.jsx)(s.strong,{children:"Keychain"})," to securely store sensitive data such as authentication tokens."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Android"}),": Store sensitive data in ",(0,n.jsx)(s.strong,{children:"EncryptedSharedPreferences"})," or use ",(0,n.jsx)(s.strong,{children:"Android Keystore"})," for better protection of private data."]}),"\n"]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"Handling User Data Securely"})}),(0,n.jsxs)(s.h3,{id:"1-minimize-data-collection",children:["1. ",(0,n.jsx)(s.strong,{children:"Minimize Data Collection"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Only collect the necessary user data and be transparent about what data you are collecting. Follow data protection principles and comply with regulations like GDPR, if applicable."}),"\n"]}),(0,n.jsxs)(s.h3,{id:"2-use-secure-communication-for-data-transfer",children:["2. ",(0,n.jsx)(s.strong,{children:"Use Secure Communication for Data Transfer"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Ensure that all user data is transferred securely over HTTPS to prevent unauthorized access and protect data integrity during transit."}),"\n"]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"Testing Security"})}),(0,n.jsxs)(s.h3,{id:"1-use-firebase-emulator-suite-for-local-testing",children:["1. ",(0,n.jsx)(s.strong,{children:"Use Firebase Emulator Suite for Local Testing"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Test Firebase Authentication and Firestore locally using the Firebase Emulator Suite to ensure everything works correctly before going live."}),"\n"]}),(0,n.jsxs)(s.h3,{id:"2-perform-vulnerability-scans",children:["2. ",(0,n.jsx)(s.strong,{children:"Perform Vulnerability Scans"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Use security tools like ",(0,n.jsx)(s.strong,{children:"OWASP ZAP"})," or ",(0,n.jsx)(s.strong,{children:"Burp Suite"})," to perform security audits and vulnerability scanning on your app."]}),"\n"]}),(0,n.jsxs)(s.h3,{id:"3-test-permissions-on-real-devices",children:["3. ",(0,n.jsx)(s.strong,{children:"Test Permissions on Real Devices"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Always test your app on real Android and iOS devices to ensure that the permissions and data security settings are enforced correctly."}),"\n"]})]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>l});var t=r(6540);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);