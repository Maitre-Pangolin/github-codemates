(this["webpackJsonpgithub-cohort"]=this["webpackJsonpgithub-cohort"]||[]).push([[0],{106:function(e,t,c){},107:function(e,t,c){},121:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(36),s=c.n(r),i=(c(106),c(107),c(83)),o=c(10),j=c(39),l=c(122),u=c(50),b=c.n(u),h=c(57),d=c(22),O=c(139),f=c(137),x=c(2),p=function(){var e=Object(o.f)(),t=Object(n.useState)(""),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(void 0),i=Object(d.a)(s,2),j=i[0],l=i[1],u=function(){var t=Object(h.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c){t.next=2;break}return t.abrupt("return");case 2:fetch("https://api.github.com/users/".concat(c)).then((function(e){if(404===e.status)throw new Error("404 : User ".concat(c," not found."));if(403===e.status)throw new Error("API rate exceeded, try again later !");return e.json()})).then((function(t){e.push({pathname:"/".concat(t.login),state:{user:t}})})).catch((function(e){l(Object(x.jsx)(O.a,{color:"red",children:Object(x.jsx)(O.a.Header,{children:e.message})}))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"search",children:[Object(x.jsx)(f.a,{action:{color:"teal",icon:"search",labelPosition:"right",content:"Search",onClick:function(){u(a)}},icon:"users",iconPosition:"left",placeholder:"Search user...",size:"huge",onChange:function(e){r(e.target.value),l(void 0)}}),j]})},m=c(138),g=c(92),v=function(e){var t=e.user.url,c=Object(n.useState)({}),a=Object(d.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){console.log(t),fetch(t).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[t]),Object(x.jsx)("div",{style:{margin:"20px",width:"300px"},children:Object(x.jsxs)(m.a,{href:r.html_url,fluid:!0,children:[Object(x.jsx)(g.a,{src:e.user.avatar_url}),Object(x.jsxs)(m.a.Content,{children:[Object(x.jsx)(m.a.Header,{children:r.login}),Object(x.jsx)(m.a.Meta,{children:r.name}),Object(x.jsx)(m.a.Description,{textAlign:"left",children:r.bio||"No bio"})]}),Object(x.jsxs)(m.a.Content,{extra:!0,textAlign:"left",children:[Object(x.jsxs)(m.a.Description,{children:[Object(x.jsx)(j.a,{name:"github square"}),r.public_repos," public repositories"]}),Object(x.jsxs)(m.a.Description,{children:[Object(x.jsx)(j.a,{name:"home"}),r.location||"No location"]}),Object(x.jsxs)(m.a.Description,{children:[Object(x.jsx)(j.a,{name:"building"}),r.company||"No company"]}),Object(x.jsxs)(m.a.Description,{children:[Object(x.jsx)(j.a,{name:"users"}),r.followers," follower",r.followers>1?"s":""]})]})]})})},w=function(e){var t=Object(n.useState)({}),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),o=i[0],u=i[1],f=Object(n.useState)(0),p=Object(d.a)(f,2),m=p[0],g=p[1],w=Object(n.useState)(1),S=Object(d.a)(w,2),y=S[0],C=S[1],k=Object(n.useState)(void 0),P=Object(d.a)(k,2),D=P[0],N=P[1],E=e.match.params.login,_=function(){var e=Object(h.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=new Date(t.created_at),fetch("https://api.github.com/search/users?q=created:".concat(c.toISOString().slice(0,-14),"..").concat(c.toISOString().slice(0,-14)," &per_page=").concat(30,"&page=").concat(y)).then((function(e){return e.json()})).then((function(e){u(e.items),g(e.total_count)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){if(e.location.state){var t=e.location.state.user;r(t),_(t)}else fetch("https://api.github.com/users/".concat(E)).then((function(e){if(404===e.status)throw new Error("404 : User ".concat(E," not found."));if(403===e.status)throw new Error("API rate exceeded");return e.json()})).then((function(e){r(e),_(e)})).catch((function(e){return N(Object(x.jsx)(O.a,{color:"red",children:Object(x.jsx)(O.a.Header,{children:e.message})}))}))}),[y]);var A;return D||(a?Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{children:["Hi ",Object(x.jsx)("span",{style:{color:"teal"},children:a.login})," ! You created your github account on"," ",Object(x.jsx)("span",{style:{color:"teal"},children:(A=a.created_at,new Date(A).toDateString())}),", meet your ",m," codemates."]}),Object(x.jsxs)(l.a,{icon:!0,labelPosition:"left",disabled:1===y,onClick:function(){C(y-1)},children:["Previous",Object(x.jsx)(j.a,{name:"left arrow"})]}),Object(x.jsxs)(l.a,{icon:!0,labelPosition:"right",disabled:30*y>m,onClick:function(){C(y+1)},children:["Next",Object(x.jsx)(j.a,{name:"right arrow"})]}),Object(x.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},children:o.map((function(e){return Object(x.jsx)(v,{user:e},e.id)}))}),Object(x.jsxs)(l.a,{icon:!0,labelPosition:"left",disabled:1===y,onClick:function(){C(y-1)},children:["Previous",Object(x.jsx)(j.a,{name:"left arrow"})]}),Object(x.jsxs)(l.a,{icon:!0,labelPosition:"right",disabled:30*y>m,onClick:function(){C(y+1)},children:["Next",Object(x.jsx)(j.a,{name:"right arrow"})]})]}):void 0)};var S=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(i.a,{children:[Object(x.jsx)("header",{children:Object(x.jsxs)("h1",{children:["Github C",Object(x.jsx)(j.a,{name:"github",size:"small"}),"demates"]})}),Object(x.jsxs)("div",{className:"homeFloat",children:[" ",Object(x.jsx)(i.b,{to:"/",children:Object(x.jsxs)(l.a,{animated:"fade",size:"big",children:[Object(x.jsx)(l.a.Content,{visible:!0,children:Object(x.jsx)(j.a,{name:"home"})}),Object(x.jsx)(l.a.Content,{hidden:!0,children:"Home"})]})})]}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",component:p,exact:!0}),Object(x.jsx)(o.a,{path:"/:login",component:w,exact:!0})]})]})})};c(120);s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.c6287857.chunk.js.map