"use strict";(self.webpackChunkai_assistant=self.webpackChunkai_assistant||[]).push([[761],{7100:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Tutorials/Testing & troubleshooting","title":"\ud83d\udea7 Testing & Troubleshoot","description":"Testing Your App","source":"@site/docs/1.Tutorials/Testing & troubleshooting.md","sourceDirName":"1.Tutorials","slug":"/tutorials/testing","permalink":"/RapidAsk/docs/tutorials/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1.Tutorials/Testing & troubleshooting.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"slug":"/tutorials/testing","title":"\ud83d\udea7 Testing & Troubleshoot","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"\ud83e\udd16 Build your character","permalink":"/RapidAsk/docs/tutorials/build-character"},"next":{"title":"\ud83d\udee1\ufe0f Security","permalink":"/RapidAsk/docs/tutorials/security"}}');var r=s(4848),o=s(8453);const t={slug:"/tutorials/testing",title:"\ud83d\udea7 Testing & Troubleshoot",sidebar_position:8},l=void 0,c={},d=[{value:"Testing Your App",id:"testing-your-app",level:3},{value:"Debugging &amp; Troubleshooting",id:"debugging--troubleshooting",level:3}];function h(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"testing-your-app",children:"Testing Your App"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Running the App Locally (FlutterFlow Built-In Run Mode)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to the ",(0,r.jsx)(n.strong,{children:"Run"})," tab in FlutterFlow."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Run Locally"})," to test your app in a web browser."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Viewing the App in Full-Screen Mode"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After launching the app in the browser, switch to ",(0,r.jsx)(n.strong,{children:"Full-Screen Mode"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"This will allow the browser to request and enable microphone access for voice features (like speech-to-text)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Swiping Between Web and Mobile Platforms"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.code,{children:"fetchSpeechAndPlayWeb"})," for web and ",(0,r.jsx)(n.code,{children:"fetchSpeechAndPlayMobile"})," for mobile in the onTap action of the ",(0,r.jsx)(n.code,{children:"stopRecordingButton"}),", depending on the platform."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"debugging--troubleshooting",children:"Debugging & Troubleshooting"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Verifying Permissions"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Android"}),": Ensure microphone permissions are set in ",(0,r.jsx)(n.code,{children:"AndroidManifest.xml"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"iOS"}),": Check the ",(0,r.jsx)(n.code,{children:"Info.plist"})," for microphone permissions."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Common Errors"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"FlutterFlow"}),": Check ",(0,r.jsx)(n.strong,{children:"Error Logs"})," in the ",(0,r.jsx)(n.strong,{children:"Run Log"})," for issues like invalid API keys or incorrect Firebase setup."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"browser console"}),": For web-specific errors or warnings, open the browser's developer tools   (press F12 or Ctrl + Shift + I in most browsers) and go to the Console tab. Look for any relevant error messages or warnings related to the app's execution, which can help diagnose issues with API calls or script execution."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IDE Debugging"}),": Use breakpoints and ",(0,r.jsx)(n.code,{children:"flutter run --debug"})," for detailed logs."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Voice Recording Testing"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Simulator vs Real Device"}),": Simulators may not simulate microphone access well. Always test voice features on real devices."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Test on Real Devices"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Android"}),": Ensure microphone access and permissions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"iOS"}),": Ensure ",(0,r.jsx)(n.code,{children:"NSMicrophoneUsageDescription"})," is set in ",(0,r.jsx)(n.code,{children:"Info.plist"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(6540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);