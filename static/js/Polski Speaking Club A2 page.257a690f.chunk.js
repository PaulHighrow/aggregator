"use strict";(self.webpackChunkap_education=self.webpackChunkap_education||[]).push([[16],{2654:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var a=s(1488),n=s(5294),c=s(2605),o=s(8313),r=s(610),l=s(9527),i=s(1679),d=s(5984),u=s(2791),h=s(6710),m=s(1608),x=s(9901),p=s(5070),g=s(616),j=s(184);n.Z.defaults.baseURL="https://aggregator-server.onrender.com";const y=()=>{const[e,t]=(0,u.useState)(!1),[s,y]=(0,u.useState)(!1),[f,S]=(0,u.useState)(!1),[b,w]=(0,u.useState)(""),[k,C]=(0,u.useState)(!1),[_,v]=(0,u.useState)(""),D=(0,u.useRef)(),[N,O]=(0,a.Z)(D),[I,Z]=(0,a.Z)(document.body),[A,L]=(0,u.useState)(!1),[R,z]=(0,u.useState)({}),[F,W]=(0,u.useState)(""),[K,P]=(0,u.useState)(""),[q,E]=(0,u.useState)(!1),[M,U]=(0,u.useState)([]);(0,u.useLayoutEffect)((()=>{(async()=>{try{const e=await n.Z.get("/");console.log(e.data)}catch(e){console.log(e)}})();(async()=>{try{L((e=>!0)),z((await n.Z.get("/links")).data)}catch(e){console.log(e)}finally{L((e=>!1))}})()}),[]);const Y=t=>{y((e=>!e)),w(e||f?e=>"kahoot":e=>"")},B=0===N&&I>Z?I-300:I-N,H=e=>{e.preventDefault();const t=(0,d.x0)(8);P((e=>t)),localStorage.setItem("userName",F.trim()),localStorage.setItem("userID",t),E((e=>!e))},T=(0,u.useRef)(null);return(0,u.useEffect)((()=>{document.title="Polski A2 Speaking Club | AP Education",T.current=(0,m.io)("https://ap-chat.onrender.com/"),(e=>{const t=localStorage.getItem("userName");localStorage.getItem("userID")&&t&&E((e=>!0))})(),T.current.on("connected",((e,t)=>{console.log(e),console.log(t)}));return(async()=>{try{const e=(await n.Z.get("https://ap-chat.onrender.com/messages")).data.filter((e=>new Date(e.createdAt).getDate()===(new Date).getDate()));U((t=>e))}catch(e){console.log(e)}})(),T.current.on("message",(async e=>{await(async()=>{try{await n.Z.post("https://ap-chat.onrender.com/messages",e),U((t=>[...t,e]))}catch(t){console.log(t)}})()})),T.current.on("message:get",(async e=>{U((t=>[...t,e]))})),()=>{T.current.off("connected"),T.current.off("message"),T.current.disconnect()}}),[]),(0,j.jsx)(j.Fragment,{children:(void 0===R.trials_de||R.trials_de[0]<10)&&!A?(0,j.jsx)(g.r,{children:(0,j.jsxs)(g.Rq,{children:["\u041f\u043e\u043a\u0438 \u0449\u043e \u0442\u0440\u0430\u043d\u0441\u043b\u044f\u0446\u0456\u0457 \u0442\u0443\u0442 \u043d\u0435\u043c\u0430\u0454! ",(0,j.jsx)("br",{}),"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435, \u0447\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0438 \u0432\u043a\u0430\u0437\u0430\u043b\u0438 \u0430\u0434\u0440\u0435\u0441\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u0430\u0431\u043e \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0435."]})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g.QU,{style:{width:e&&I>Z?"".concat(B,"px"):"100%"},children:(0,j.jsxs)(c.C,{children:[A&&(0,j.jsx)(r.s,{children:(0,j.jsx)(o.a,{})}),(0,j.jsxs)(g.c6,{children:[(0,j.jsx)(g.i1,{}),(0,j.jsx)(g.tW,{}),(0,j.jsx)(g.Rs,{className:k&&"sound"===_||k&&"live"===_?"animated":"",children:(0,j.jsx)(g.CO,{className:k&&"sound"===_||k&&"live"===_?"animated":""})}),(0,j.jsx)(g.$D,{className:k&&"quality"===_?"animated":"",children:(0,j.jsx)(g.hY,{className:k&&"quality"===_?"animated":""})}),(0,j.jsx)(h.Z,{playing:!0,muted:!0,controls:!0,config:{youtube:{playerVars:{rel:0}}},style:{display:"block",position:"absolute",top:0,left:0},width:"100%",height:"100vh",url:R.trials_de})]}),(0,j.jsxs)(g.KN,{children:[(0,j.jsx)(g.kd,{onClick:Y,className:k&&"kahoot_open"===_?"animated":"",children:(0,j.jsx)(g.ev,{})}),(0,j.jsx)(g.Ms,{onClick:()=>{t((e=>!e)),w(s||f?e=>"chat":e=>"")},className:k&&"chat_open"===_?"animated":"",children:(0,j.jsx)(g.DS,{})}),(0,j.jsx)(g.wH,{onClick:()=>{S((e=>!e)),v(""),w(s||e?e=>"support":e=>"")},children:(0,j.jsx)(g.RB,{})})]}),!R.trials_de||R.trials_de.includes("youtube")||R.trials_de.includes("youtu.be")?null:window.location.replace("https://us06web.zoom.us/j/89181253982?pwd=fbigi8SGsusTi2w0tTuflAwFjb6UMi.1#success"),Z>I&&(0,j.jsx)(g.rW,{ref:D,className:e?"shown":"hidden",style:"chat"===b?{zIndex:"2"}:{zIndex:"1"},children:q?(0,j.jsx)(x.e,{socket:T.current,messages:M,isChatOpen:e}):(0,j.jsxs)(p._Y,{onSubmit:H,children:[(0,j.jsx)(p.mD,{children:"AP Open Chat"}),(0,j.jsx)(p.bt,{htmlFor:"username",children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448\u0435 \u0456\u043c'\u044f \u0442\u0430 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043f\u043e\u0432\u043d\u0456\u0441\u0442\u044e"}),(0,j.jsx)(p._8,{type:"text",minLength:3,name:"username",id:"username",value:F,onChange:e=>W(e.target.value)}),(0,j.jsx)(p.bh,{children:"\u0413\u043e\u0442\u043e\u0432\u043e!"})]})}),(0,j.jsx)(l.M,{sectionWidth:I,sectionHeight:Z,isKahootOpen:s,isChatOpen:e,isOpenedLast:b}),(0,j.jsx)(i.B,{sectionWidth:I,isSupportOpen:f,isOpenedLast:b,handleSupport:e=>{v((t=>e)),k||C((e=>!e))},openKahoot:Y,isKahootOpen:s})]})}),I>=Z&&(0,j.jsx)(g.rW,{ref:D,className:e?"shown":"hidden",style:"chat"===b?{zIndex:"2"}:{zIndex:"1"},children:q?(0,j.jsx)(x.e,{socket:T.current,messages:M,isChatOpen:e}):(0,j.jsxs)(p._Y,{onSubmit:H,children:[(0,j.jsx)(p.mD,{children:"AP Open Chat"}),(0,j.jsx)(p.bt,{htmlFor:"username",children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448\u0435 \u0456\u043c'\u044f \u0442\u0430 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043f\u043e\u0432\u043d\u0456\u0441\u0442\u044e"}),(0,j.jsx)(p._8,{type:"text",minLength:3,name:"username",id:"username",value:F,onChange:e=>W(e.target.value)}),(0,j.jsx)(p.bh,{children:"\u0413\u043e\u0442\u043e\u0432\u043e!"})]})})]})})}}}]);
//# sourceMappingURL=Polski Speaking Club A2 page.257a690f.chunk.js.map