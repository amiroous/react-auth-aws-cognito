(this["webpackJsonpreact-auth-aws-cognito"]=this["webpackJsonpreact-auth-aws-cognito"]||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),s=(a(19),a(3)),o=a.n(s),u=a(6),i=a(4),m=a(8),p=new m.c({UserPoolId:"us-west-2_EVTO798p8",ClientId:"3nuc8im44pumc9mos776091f4j"}),f=Object(n.createContext)(),d=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s();case 3:l(!0),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))()}),[]);var s=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){var a=p.getCurrentUser();if(!a)return t();a.getSession((function(a,n){if(a)return t(a);e(n)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,n){var r=new m.b({Username:t,Pool:p}),c=new m.a({Username:t,Password:a});r.authenticateUser(c,{onSuccess:function(t){console.log("signInSuccess:",t),l(!0),e(t)},onFailure:function(e){console.error("signInError:",e),n(e)},newPasswordRequired:function(t){console.log("newPasswordRequired:",t),e(t)}})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(f.Provider,{value:{authenticate:d,signOut:function(){var e=p.getCurrentUser();e&&(e.signOut(),l(!1))},authenticated:c}},e.children)},b=function(){var e=Object(n.useContext)(f),t=e.signOut;return e.authenticated?r.a.createElement("div",{className:"alert alert-info border-info d-flex justify-content-between align-items-center",role:"alert"},r.a.createElement("div",null,"You Are Logged In Successfully"),r.a.createElement("button",{onClick:t,type:"button",className:"btn btn-primary"},"Logout")):r.a.createElement("div",{className:"alert alert-warning border-warning d-flex justify-content-between align-items-center",role:"alert"},r.a.createElement("div",null,"Please Login Bellow"))},E=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),o=s[0],u=s[1];return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"text-uppercase"},"Sign Up"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p.signUp(a,o,[],null,(function(e,t){if(e)return console.error("signUpError: ",e);console.log("signUpSuccess: ",t)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:a,placeholder:"Enter email",onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",value:o,placeholder:"Password",onChange:function(e){return u(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))},g=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),m=s[0],p=s[1],d=Object(n.useContext)(f).authenticate,b=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d(a,m);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h4",{className:"text-uppercase"},"Sign In"),r.a.createElement("form",{onSubmit:b},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:a,placeholder:"Enter email",onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",value:m,placeholder:"Password",onChange:function(e){return p(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-info"},"Sign In")))},v=function(){return Object(n.useContext)(f).authenticated?null:r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(E,null)),r.a.createElement("div",{className:"col"},r.a.createElement(g,null)))},h=function(){return r.a.createElement(d,null,r.a.createElement("div",{className:"min-vh-100 bg-gradient-light"},r.a.createElement("div",{className:"container pt-3"},r.a.createElement("h1",{className:"display-4"},"React Auth App with AWS Cognito"),r.a.createElement("hr",{className:""}),r.a.createElement(b,null),r.a.createElement(v,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7b0007fe.chunk.js.map