(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{287:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(26),s=n.n(c),o=n(44),i=n(96),u=n(63),j=n(157),l=n(156),b=n(47),d="SET_AUTH",h="SET_ERROR",O="SET_USER",p="SET_IS_LOADING",m={isAuth:!1,error:"",isLoading:!1,user:{}};var f={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(b.a)(Object(b.a)({},e),{},{isAuth:t.payload,isLoading:!1});case h:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload,isLoading:!1});case O:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload});case p:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.payload});default:return e}}},x=Object(u.combineReducers)(f),g=Object(u.createStore)(x,Object(l.composeWithDevTools)(Object(u.applyMiddleware)(j.a))),v=n(291),y=n(25),I=n(167),w=n(79),S=n(64),E=n(296),A=n(10),k=function(e){var t=Object(r.useState)(!1),n=Object(I.a)(t,2),a=n[0],c=n[1];return Object(A.jsxs)(v.a,{children:[Object(A.jsx)(X,{events:[]}),Object(A.jsx)(w.a,{justify:"center",children:Object(A.jsx)(S.a,{onClick:function(){return c(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435"})}),Object(A.jsx)(E.a,{title:"\u041d\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435",visible:a,onCancel:function(){return c(!1)},footer:null,children:"EventForm"})]})},C=n(293),L="/login",T="/",_=[{path:L,component:function(e){return Object(A.jsx)("div",{className:"login",children:Object(A.jsx)(w.a,{justify:"center",align:"middle",className:"h100",children:Object(A.jsx)(C.a,{children:Object(A.jsx)(Q,{})})})})},exact:!0}],U=[{path:T,component:k,exact:!0}],N=function(e){return Object(o.c)((function(e){return e.auth})).isAuth?Object(A.jsxs)(y.d,{children:[U.map((function(e){return Object(A.jsx)(y.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(A.jsx)(y.a,{to:T})]}):Object(A.jsxs)(y.d,{children:[_.map((function(e){return Object(A.jsx)(y.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(A.jsx)(y.a,{to:L})]})},R=n(48),D=n(297),Y=n(69),F=n.n(Y),M=n(122),z=n(161),H=n.n(z),J={setUser:function(e){return{type:O,payload:e}},setIsAuth:function(e){return{type:d,payload:e}},setError:function(e){return{type:h,payload:e}},setIsLoading:function(e){return{type:p,payload:e}},login:function(e,t){return function(){var n=Object(M.a)(F.a.mark((function n(r){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{r(J.setIsLoading(!0)),setTimeout(Object(M.a)(F.a.mark((function n(){var a,c;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H.a.get("./users.json");case 2:a=n.sent,(c=a.data.find((function(n){return n.username===e&&n.password===t})))?(localStorage.setItem("auth","true"),localStorage.setItem("username",c.username),r(J.setIsAuth(!0)),r(J.setUser(c))):r(J.setError("\u041d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"));case 5:case"end":return n.stop()}}),n)}))),500)}catch(a){r(J.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043b\u043e\u0433\u0438\u043d\u0435: ",a))}case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(M.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("auth"),localStorage.removeItem("username"),t(J.setUser({})),t(J.setIsAuth(!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},q=Object(b.a)({},J),B=function(){var e=Object(o.b)();return Object(u.bindActionCreators)(q,e)},G=function(e){var t=v.a.Header,n=Object(y.g)(),r=Object(o.c)((function(e){return e.auth})),c=r.isAuth,s=r.user,i=B().logout;return Object(A.jsx)(t,{children:Object(A.jsx)(w.a,{justify:"end",children:c?Object(A.jsxs)(a.a.Fragment,{children:[Object(A.jsx)("div",{className:"navbar__user-name",children:s.username}),Object(A.jsx)(R.a,{span:3,children:Object(A.jsx)(D.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(A.jsx)(D.a.Item,{onClick:i,children:"\u0412\u044b\u0439\u0442\u0438"},1)})})]}):Object(A.jsx)(R.a,{span:3,children:Object(A.jsx)(D.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(A.jsx)(D.a.Item,{onClick:function(){return n.push(L)},children:"Login"},1)})})})})},P=n(294),W=n(295),K=function(e){return{required:!0,message:e}},Q=function(e){var t=Object(o.c)((function(e){return e.auth})),n=t.error,r=t.isLoading,a=B().login;return Object(A.jsxs)(P.a,{onFinish:function(e){a(e.username,e.password)},autoComplete:"off",children:[n&&Object(A.jsx)("div",{className:"error-text",children:n}),Object(A.jsx)(P.a.Item,{label:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"username",rules:[K("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f!")],children:Object(A.jsx)(W.a,{})}),Object(A.jsx)(P.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[K("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!")],children:Object(A.jsx)(W.a,{})}),Object(A.jsx)(P.a.Item,{wrapperCol:{offset:18,span:16},children:Object(A.jsx)(S.a,{type:"primary",htmlType:"submit",loading:r,children:"\u0412\u043e\u0439\u0442\u0438"})})]})},V=n(292),X=function(e){return Object(A.jsx)(V.a,{onPanelChange:function(e,t){console.log(e.format("YYYY-MM-DD"),t)}})};n(287);var Z=function(){var e=B(),t=e.setUser,n=e.setIsAuth;return Object(r.useEffect)((function(){localStorage.getItem("auth")&&(t({username:localStorage.getItem("username")}),n(!0))}),[]),Object(A.jsxs)(v.a,{children:[Object(A.jsx)(G,{}),Object(A.jsx)(v.a.Content,{children:Object(A.jsx)(N,{})})]})};s.a.render(Object(A.jsx)(o.a,{store:g,children:Object(A.jsx)(i.a,{children:Object(A.jsx)(Z,{})})}),document.getElementById("root"))}},[[288,1,2]]]);
//# sourceMappingURL=main.13c27cdb.chunk.js.map