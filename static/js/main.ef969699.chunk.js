(this.webpackJsonpsead=this.webpackJsonpsead||[]).push([[0],{39:function(e,t,n){e.exports=n(62)},44:function(e,t,n){},45:function(e,t,n){},49:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),o=n.n(c),i=(n(44),n(7)),l=(n(45),n(20)),s=n(21);function u(){var e=Object(l.a)(["\nquery login($email: String!, $password: String!){\n  login(email: $email, password: $password) {\n    id\n    username\n    email\n    notes{\n      id\n      title\n      text\n    }\n  }\n}\n"]);return u=function(){return e},e}function p(){var e=Object(l.a)(["\nquery note($id: ID!){\n  note(id: $id) {\n    id\n    title\n    text\n  }\n}\n"]);return p=function(){return e},e}function m(){var e=Object(l.a)(["\nquery user($id: ID!){\n  user(id: $id) {\n    id\n    username\n    email\n    notes{\n      id\n      title\n      text\n    }\n  }\n}\n"]);return m=function(){return e},e}function d(){var e=Object(l.a)(["\n{\n    users{\n      id\n      username\n      email\n      notes{\n        id\n        title\n        text\n      }\n    }\n  }\n"]);return d=function(){return e},e}Object(s.a)(d());var b=Object(s.a)(m()),f=Object(s.a)(p()),g=Object(s.a)(u()),v=n(16),h=n(15),E=n(13),j=n.n(E),O=n(17),w=n(9),y=n(10),N=n(6),x=(n(49),function(e){var t,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],l=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),p=u[0],m=u[1],d=Object(a.useState)(!1),b=Object(i.a)(d,2),f=b[0],v=b[1],E=Object(y.b)({uri:"https://sead-rails.herokuapp.com/graphql",headers:{"Content-Type":"application/json"}}),x=new w.a({link:E,cache:new N.a}),k=function(){var e=Object(O.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=o&&""!=p){e.next=4;break}v(!0),e.next=8;break;case 4:return e.next=6,x.query({query:g,variables:{email:o,password:p}});case 6:t=e.sent,q(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var t=Object(O.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!==(a=n.data.login)?(console.log(n.data.login.id),e.setUserID(a.id)):(m(""),v(!0));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,function(){if(console.log(e.id),-1!=e.userID)return r.a.createElement(h.a,{to:"/notes"})}(),r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"login-page-container"},r.a.createElement("div",{className:"login-page-container-inner"},r.a.createElement("input",{className:"login-page-input",type:"text",placeholder:"Email",value:o,onChange:function(e){l(e.target.value)}}),r.a.createElement("input",{className:"login-page-input",type:"text",placeholder:"Password",value:p,onChange:function(e){m(e.target.value)}}),r.a.createElement("input",{className:"login-page-button",type:"button",value:"Login",onClick:function(){console.log(o),console.log(p),k()}})))),(t="Invalid Login",f?r.a.createElement("div",{className:"error-dialog"},r.a.createElement("p",null,t)):r.a.createElement(r.a.Fragment,null)))}),k=(n(57),function(e){var t;return r.a.createElement("div",{className:"note hvr-float"},r.a.createElement("div",{className:"note-container"},r.a.createElement("span",{className:"note-title"},r.a.createElement("h1",null,e.title)),r.a.createElement("p",{className:"note-paragraph"},(t=e.text).length>310?t.slice(0,310)+"...":t),r.a.createElement(v.b,{to:"/read?id="+e.id},r.a.createElement("input",{className:"note-button",type:"button",value:"Read"}))))}),q=(n(58),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(!0),s=Object(i.a)(l,2),u=s[0],p=s[1],m=Object(y.b)({uri:"https://sead-rails.herokuapp.com/graphql",headers:{"Content-Type":"application/json"}}),d=new w.a({link:m,cache:new N.a}),f=function(){var t=Object(O.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.query({query:b,variables:{id:e.userID}});case 2:n=t.sent,console.log(n),console.log(n.data.user.notes),o(n.data.user.notes),p(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){u&&-1!=e.userID&&f()})),r.a.createElement("div",{className:"notes-page"},r.a.createElement("div",{className:"note-wrapper"},u?"Loading...":c.map((function(e){return r.a.createElement(k,{id:e.id,title:e.title,text:e.text})}))))}),S=(n(59),function(e){var t=Object(a.useState)(0),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),s=Object(i.a)(l,2),u=(s[0],s[1]),p=Object(a.useState)([]),m=Object(i.a)(p,2),d=m[0],b=m[1],g=Object(a.useState)(!0),v=Object(i.a)(g,2),h=v[0],E=v[1],x=Object(y.b)({uri:"https://sead-rails.herokuapp.com/graphql",headers:{"Content-Type":"application/json"}}),k=new w.a({link:x,cache:new N.a});Object(a.useEffect)((function(){h&&q()}));var q=function(){var e=Object(O.a)(j.a.mark((function e(){var t,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams(window.location.search),n=t.get("id"),e.next=4,k.query({query:f,variables:{id:n}});case 4:a=e.sent,console.log(a),u(a.data.note),b(S(a.data.note.text)),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){return console.log(e.split(".")),e.split(".")};return r.a.createElement("div",{className:"read-page"},r.a.createElement("div",{className:"read-page-container"},h?"Loading...":r.a.createElement("span",{className:"read-page-text"},d[c]+".")),r.a.createElement("div",{className:"read-page-buttons"},r.a.createElement("input",{className:"read-button",type:"button",value:"Backward",onClick:function(){console.log(c),c>0&&o(c-1)}}),r.a.createElement("input",{className:"read-button",type:"button",value:"Forward",onClick:function(){console.log(c),console.log(c+":"+d.length),c+1<d.length-1&&o(c+1)}})))}),I=(n(60),function(){return r.a.createElement("div",{className:"header"},r.a.createElement(v.b,{to:"/notes/"},r.a.createElement("img",{className:"header-logo",src:"https://i.imgur.com/ZrBzEFC.png"})))}),C=function(e){var t=Object(a.useState)(-1),n=Object(i.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:"app"},r.a.createElement(v.a,null,-1!=c?"":r.a.createElement(h.a,{to:"/login/"}),r.a.createElement(I,null),r.a.createElement(h.b,{path:"/login",component:function(){return r.a.createElement(x,{userID:c,setUserID:o})}}),r.a.createElement(h.b,{path:"/notes",component:function(){return r.a.createElement(q,{userID:c})}}),r.a.createElement(h.b,{path:"/read",component:S})))},D=n(63),$=Object(y.b)({uri:"https://sead-rails.herokuapp.com/graphql",headers:{"Content-Type":"application/json"}}),L=new w.a({link:$,cache:new N.a});o.a.render(r.a.createElement(D.a,{client:L},r.a.createElement(C,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ef969699.chunk.js.map