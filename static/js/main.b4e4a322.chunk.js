(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{265:function(e,t,n){},266:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),s=n.n(c),o=n(36),u=n(96),i=n(64),j=n(151),l=n(150),b=n(25),d="SET_AUTH",h="SET_ERROR",O="SET_USER",m="SET_IS_LOADING",p={isAuth:!1,error:"",isLoading:!1,user:{}};var f="SET_GUESTS",x="SET_EVENTS",g={guests:[],events:[]};var v={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(b.a)(Object(b.a)({},e),{},{isAuth:t.payload,isLoading:!1});case h:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload,isLoading:!1});case O:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload});case m:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.payload});default:return e}},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(b.a)(Object(b.a)({},e),{},{guests:t.payload});case x:return Object(b.a)(Object(b.a)({},e),{},{events:t.payload});default:return e}}},y=Object(i.combineReducers)(v),I=Object(i.createStore)(y,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(j.a))),w=n(269),S=n(26),E=n(114),C=n(81),T=n(53),k=n(274),A=n(69),U=n.n(A),L=n(124),_=n(152),G=n(153),N=[{username:"user",password:"123",name:"User"},{username:"admin",password:"admin777",name:"Admin"},{username:"voverg",password:"cat2dog",name:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u041f\u0435\u0442\u0440\u043e\u0432"},{username:"tancha",password:"novchik",name:"\u0422\u0430\u0442\u044c\u044f\u043d\u0430 \u041f\u0435\u0442\u0440\u043e\u0432\u0430"},{username:"andr",password:"fat37",name:"\u0410\u043d\u0434\u0440\u0435\u0439 \u0410\u043a\u0441\u0451\u043d\u043e\u0432"}],R=function(){function e(){Object(_.a)(this,e)}return Object(G.a)(e,null,[{key:"getUsers",value:function(e){return N}}]),e}(),D={setUser:function(e){return{type:O,payload:e}},setIsAuth:function(e){return{type:d,payload:e}},setError:function(e){return{type:h,payload:e}},setIsLoading:function(e){return{type:m,payload:e}},login:function(e,t){return function(){var n=Object(L.a)(U.a.mark((function n(a){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{a(D.setIsLoading(!0)),setTimeout(Object(L.a)(U.a.mark((function n(){var r,c;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=R.getUsers(),(c=r.find((function(n){return n.username===e&&n.password===t})))?(localStorage.setItem("auth","true"),localStorage.setItem("username",c.username),a(D.setIsAuth(!0)),a(D.setUser(c))):a(D.setError("\u041d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"));case 3:case"end":return n.stop()}}),n)}))),500)}catch(r){a(D.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043b\u043e\u0433\u0438\u043d\u0435: ",r))}case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(L.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("auth"),localStorage.removeItem("username"),t(D.setUser({})),t(D.setIsAuth(!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},Y={setGuests:function(e){return{type:f,payload:e}},setEvent:function(e){return{type:x,payload:e}},fetchGuests:function(){return function(e){try{var t=R.getUsers();e(Y.setGuests(t))}catch(n){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0441\u043f\u0438\u0441\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ",n)}}}},F=Object(b.a)(Object(b.a)({},D),Y),M=function(){var e=Object(o.b)();return Object(i.bindActionCreators)(F,e)},z=n(8),H=function(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),r=n[0],c=n[1],s=M().fetchGuests,u=Object(o.c)((function(e){return e.event})).guests;return Object(a.useEffect)((function(){s()}),[]),Object(z.jsxs)(w.a,{children:[Object(z.jsx)(se,{events:[]}),Object(z.jsx)(C.a,{justify:"center",children:Object(z.jsx)(T.a,{onClick:function(){return c(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435"})}),Object(z.jsx)(k.a,{title:"\u041d\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435",visible:r,onCancel:function(){return c(!1)},footer:null,children:Object(z.jsx)(re,{guests:u})})]})},J=n(270),q="/login",B="/",P=[{path:q,component:function(e){return Object(z.jsx)("div",{className:"login",children:Object(z.jsx)(C.a,{justify:"center",align:"middle",className:"h100",children:Object(z.jsx)(J.a,{children:Object(z.jsx)(te,{})})})})},exact:!0}],V=[{path:B,component:H,exact:!0}],W=function(e){return Object(o.c)((function(e){return e.auth})).isAuth?Object(z.jsxs)(S.d,{children:[V.map((function(e){return Object(z.jsx)(S.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(z.jsx)(S.a,{to:B})]}):Object(z.jsxs)(S.d,{children:[P.map((function(e){return Object(z.jsx)(S.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(z.jsx)(S.a,{to:q})]})},K=n(48),Q=n(276),X=function(e){var t=w.a.Header,n=Object(S.g)(),a=Object(o.c)((function(e){return e.auth})),c=a.isAuth,s=a.user,u=M().logout;return Object(z.jsx)(t,{children:Object(z.jsx)(C.a,{justify:"end",children:c?Object(z.jsxs)(r.a.Fragment,{children:[Object(z.jsx)("div",{className:"navbar__user-name",children:s.name}),Object(z.jsx)(K.a,{span:3,children:Object(z.jsx)(Q.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(z.jsx)(Q.a.Item,{onClick:u,children:"\u0412\u044b\u0439\u0442\u0438"},1)})})]}):Object(z.jsx)(K.a,{span:3,children:Object(z.jsx)(Q.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(z.jsx)(Q.a.Item,{onClick:function(){return n.push(q)},children:"Login"},1)})})})})},Z=n(271),$=n(273),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435";return{required:!0,message:e}},te=function(e){var t=Object(o.c)((function(e){return e.auth})),n=t.error,a=t.isLoading,r=M().login;return Object(z.jsxs)(Z.a,{onFinish:function(e){r(e.username,e.password)},autoComplete:"off",children:[n&&Object(z.jsx)("div",{className:"error-text",children:n}),Object(z.jsx)(Z.a.Item,{label:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"username",rules:[ee("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f!")],children:Object(z.jsx)($.a,{})}),Object(z.jsx)(Z.a.Item,{wrapperCol:{offset:6,span:36},label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[ee("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!")],children:Object(z.jsx)($.a,{})}),Object(z.jsx)(Z.a.Item,{children:Object(z.jsx)(T.a,{type:"primary",htmlType:"submit",loading:a,children:"\u0412\u043e\u0439\u0442\u0438"})})]})},ne=n(134),ae=n(272),re=function(e){var t=e.guests,n=Object(a.useState)({author:"",date:"",description:"",guest:""}),r=Object(E.a)(n,2),c=r[0],s=r[1],o=ne.a.Option;return Object(z.jsxs)(Z.a,{onFinish:function(e){console.log(e)},autoComplete:"off",children:[Object(z.jsx)(Z.a.Item,{label:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435",name:"description",rules:[ee()],children:Object(z.jsx)($.a,{onChange:function(e){var t=e.target.value;s(Object(b.a)(Object(b.a)({},e),{},{description:t}))}})}),Object(z.jsx)(Z.a.Item,{label:"\u0414\u0430\u0442\u0430",name:"date",rules:[ee()],children:Object(z.jsx)(ae.a,{onChange:function(e,t){console.log(e,t),s(Object(b.a)(Object(b.a)({},c),{},{date:e}))}})}),Object(z.jsx)(Z.a.Item,{label:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a",name:"guest",rules:[ee()],children:Object(z.jsx)(ne.a,{style:{width:220},onChange:function(e){console.log("selected ".concat(e)),s(Object(b.a)(Object(b.a)({},c),{},{guest:e}))},children:t.map((function(e){return Object(z.jsx)(o,{value:e.username,children:e.name},e.username)}))})}),Object(z.jsx)(Z.a.Item,{children:Object(z.jsx)(T.a,{type:"primary",htmlType:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435"})})]})},ce=n(275),se=function(e){return Object(z.jsx)(ce.a,{onPanelChange:function(e,t){console.log(e.format("YYYY-MM-DD"),t)}})};n(265);var oe=function(){var e=M(),t=e.setUser,n=e.setIsAuth;return Object(a.useEffect)((function(){localStorage.getItem("auth")&&(t({username:localStorage.getItem("username")}),n(!0))}),[]),Object(z.jsxs)(w.a,{children:[Object(z.jsx)(X,{}),Object(z.jsx)(w.a.Content,{children:Object(z.jsx)(W,{})})]})};s.a.render(Object(z.jsx)(o.a,{store:I,children:Object(z.jsx)(u.a,{children:Object(z.jsx)(oe,{})})}),document.getElementById("root"))}},[[266,1,2]]]);
//# sourceMappingURL=main.b4e4a322.chunk.js.map