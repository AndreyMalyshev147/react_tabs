(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),s=n(4),r=n(5),i=n(8),b=n(7),l=n(1),d=n.n(l),o=(n(13),n(6)),u=n.n(o),j=n(0),h=function(t){var e=t.tabs,n=t.selectedTabId,a=t.selectCurrentTab,c=e.find((function(t){return t.id===n}));return Object(j.jsxs)("nav",{children:[Object(j.jsx)("ul",{className:"nav nav-tabs",children:e.map((function(t){return Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("button",{type:"button",className:u()("nav-link",{active:n===t.id}),onClick:function(){return a(t)},children:t.title})},t.id)}))}),Object(j.jsx)("span",{className:"App__tab-text",children:null===c||void 0===c?void 0:c.content})]})},v=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],p=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={selectedTabId:v[0].id,selectedTab:v[0]},t.selectCurrentTab=function(e){t.setState({selectedTabId:e.id,selectedTab:e})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.selectedTabId,n=t.selectedTab;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:["Selected tab is"," ",n.title]}),Object(j.jsx)(h,{tabs:v,selectedTabId:e,selectCurrentTab:this.selectCurrentTab})]})}}]),n}(d.a.PureComponent),T=p;c.a.render(Object(j.jsx)(T,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.403fa774.chunk.js.map