"use strict";(self.webpackChunk_fruits_chain_react_native_xiaoshu=self.webpackChunk_fruits_chain_react_native_xiaoshu||[]).push([[855],{31352:function(j,d,a){a.r(d);var c=a(2143),t=a(93359),r=a(19977),_=a(24268),o=a(96057),h=a(77670),i=a(31912),E=a(40111),l=a(54929),f=a(67294),e=a(85893);function x(){var m=(0,l.eL)(),n=m.texts;return(0,e.jsx)(l.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"grid-\u6805\u683C",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#grid-\u6805\u683C",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Grid \u6805\u683C"]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[n[0].value,(0,e.jsx)("code",{children:n[1].value}),n[2].value]})}),(0,e.jsxs)("h2",{id:"\u6982\u8FF0",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6982\u8FF0",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6982\u8FF0"]}),(0,e.jsx)("p",{children:n[3].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n[4].value,(0,e.jsx)("code",{children:n[5].value}),n[6].value,(0,e.jsx)("code",{children:n[7].value}),n[8].value]}),(0,e.jsxs)("li",{children:[n[9].value,(0,e.jsx)("code",{children:n[10].value}),n[11].value,(0,e.jsx)("code",{children:n[12].value}),n[13].value,(0,e.jsx)("code",{children:n[14].value}),n[15].value]}),(0,e.jsxs)("li",{children:[n[16].value,(0,e.jsx)("code",{children:n[17].value}),n[18].value]}),(0,e.jsxs)("li",{children:[n[19].value,(0,e.jsx)("code",{children:n[20].value}),n[21].value,(0,e.jsx)("code",{children:n[22].value}),n[23].value,(0,e.jsx)("code",{children:n[24].value}),n[25].value]})]}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(l.Dl,{demo:{id:"src-grid-demo-basic"},previewerProps:{title:"\u7EFC\u5408\u7528\u6CD5",description:"<p>\u4F7F\u7528 <code>Row</code> \u548C <code>Col</code> \u6805\u683C\u7EC4\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7684\u6805\u683C\u7CFB\u7EDF\uFF0C\u6240\u6709\u5217\uFF08Col\uFF09\u5FC5\u987B\u653E\u5728 Row \u5185\u3002<code>Row</code> \u7684 <code>justify</code>\u3001<code>align</code> \u63A7\u5236\u6392\u7248\uFF0C<code>Col</code> \u7684 <code>span</code> \u8BBE\u7F6E\u6240\u5360\u6BD4\u4F8B\u3002</p>",filename:"src/grid/__fixtures__/basic.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"row",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#row",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Row"]}),(0,e.jsxs)("h3",{id:"col",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#col",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Col"]})]})]})})}d.default=x},31912:function(j,d,a){a.d(d,{Z:function(){return l}});var c=a(97857),t=a.n(c),r=a(5574),_=a.n(r),o=a(67294),h=a(54929),i=a(85893),E=function(){var e=(0,h.tx)(),x=(0,h.s0)(),m=(0,o.useState)(""),n=_()(m,2),v=n[0],C=n[1],D=(0,o.useMemo)(function(){return e.filter(function(s){return s.title}).map(function(s){return t()(t()({},s),{},{children:v?s.children.filter(function(u){return u.title.toLocaleLowerCase().indexOf(v.toLocaleLowerCase())>-1}):s.children})}).filter(function(s){return s.children.length})},[v]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"overview-search-divider"}),(0,i.jsx)("div",{className:"overview-search-wrapper",children:(0,i.jsx)("input",{value:v,onChange:function(u){window.scroll({top:200,behavior:"smooth"}),C(u.target.value)},className:"overview-search",placeholder:"\u641C\u7D22\u7EC4\u4EF6"})}),(0,i.jsx)("div",{className:"overview-search-divider"}),D.map(function(s){return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsxs)("div",{className:"overview-group-name",children:[s.title," ",(0,i.jsx)("span",{className:"overview-group-count",children:s.children.length})]}),(0,i.jsx)("div",{className:"overview-row",children:s.children.map(function(u){return(0,i.jsx)("div",{className:"overview-col",children:(0,i.jsx)("div",{className:"overview-card",onClick:function(){x(u.link)},children:u.title})},u.title)})})]},s.title)})]})},l=(0,o.memo)(E)},40111:function(j,d,a){a.d(d,{Z:function(){return o}});var c=a(67294),t=a.p+"static/snapshoot.53b8407a.png",r=a(85893),_=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"custom-home-h2",children:"\u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982"}),(0,r.jsx)("p",{className:"custom-home-desc",children:"\u5927\u91CF\u5B9E\u7528\u7EC4\u4EF6\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u7075\u6D3B\u5B9A\u5236\u4E0E\u62D3\u5C55"}),(0,r.jsx)("img",{className:"custom-home-snapshoot",src:t})]})},o=(0,c.memo)(_)}}]);
