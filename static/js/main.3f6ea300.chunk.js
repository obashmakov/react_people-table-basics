(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),u=n.n(c),l=n(9),o=n(1),p=(n(24),n(25),function(){return r.a.createElement("h1",null,"Home Page")}),s=n(18),i=n(7),m=n.n(i),f=n(10),E=function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_people-table/api/people.json"));case 2:if(t=e.sent){e.next=5;break}throw new Error("".concat(t.status," - ").concat(t.statusText));case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=(n(27),function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){h().then((function(e){c(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"People Page"),n&&r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",null,e.name)}))))}),v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement(l.b,{to:"/"},"Home")," ",r.a.createElement(l.b,{to:"/people"},"People")),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/people"},r.a.createElement(b,null)),r.a.createElement(o.b,{path:"/",exact:!0},r.a.createElement(p,null)),r.a.createElement(o.a,{path:"/home",to:"/"}),r.a.createElement("h1",null,"Page not found")))};u.a.render(r.a.createElement(l.a,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.3f6ea300.chunk.js.map