"use strict";(self.webpackChunk_fruits_chain_react_native_xiaoshu=self.webpackChunk_fruits_chain_react_native_xiaoshu||[]).push([[1030],{20332:function(m,i,t){t.r(i);var E=t(67294),s=t(24404),n=t(1078),_=t(85893),a=function(){return(0,_.jsx)(n.Blank,{top:!0,children:(0,_.jsxs)(n.Space,{children:[(0,_.jsx)(n.Popup.Header,{title:"\u6807\u9898",onClose:function(){console.log("\u6807\u9898:onClose")}}),(0,_.jsx)(n.Popup.Header,{title:"\u7EAF\u6807\u9898",showClose:!1}),(0,_.jsx)(n.Popup.Header,{title:"\u5DE6\u53F3\u62D3\u5C55",leftExtra:(0,_.jsx)(s.Z,{children:"leftExtra"}),rightExtra:(0,_.jsx)(s.Z,{children:"rightExtra"}),onClose:function(){console.log("\u5DE6\u53F3\u62D3\u5C55:onClose")}})]})})};i.default=a},71844:function(m,i,t){t.r(i);var E=t(5574),s=t.n(E),n=t(67294),_=t(33668),a=t(24404),o=t(6765),e=t(1078),u=t(85893),p=function(){var v=(0,n.useState)(!1),P=s()(v,2),h=P[0],d=P[1],c=(0,n.useState)([]),l=s()(c,2),r=l[0],j=l[1];return(0,u.jsxs)(e.Blank,{top:!0,children:[(0,u.jsx)(e.Button,{onPress:function(){d(!0)},text:"\u5E95\u90E8\u5F39\u51FA\u3001\u5185\u90E8\u6709\u8F93\u5165\u6846"}),(0,u.jsxs)(e.Popup,{visible:h,position:"bottom",round:!0,onClose:function(){_.Z.dismiss()},children:[(0,u.jsx)(e.Popup.Header,{title:"\u5E95\u90E8\u5F39\u51FA\u3001\u5185\u90E8\u6709\u8F93\u5165\u6846",onClose:function(){d(!1)}}),(0,u.jsxs)(e.Blank,{children:[(0,u.jsx)(a.Z,{children:"\u67D0\u4E9B\u6709\u8DA3\u7684"}),(0,u.jsx)(e.TextInput,{bordered:!0,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",onChangeText:function(D){j(D?new Array(20).fill(0).map(function(B,C){return"".concat(D,"-").concat(C)}):[])}})]}),(0,u.jsx)(o.Z,{style:{maxHeight:200},children:r.map(function(x){return(0,u.jsx)(a.Z,{style:{paddingVertical:8,paddingHorizontal:12},children:x},x)})}),(0,u.jsx)(e.Popup.KeyboardShim,{}),(0,u.jsx)(e.ButtonBar,{alone:!0,children:(0,u.jsx)(e.Button,{text:"\u4FDD\u5B58"})})]})]})};i.default=p},14729:function(m,i,t){t.r(i);var E=t(5574),s=t.n(E),n=t(67294),_=t(6765),a=t(67177),o=t(1078),e=t(85893),u=function(){var f=(0,n.useState)(!1),v=s()(f,2),P=v[0],h=v[1];return(0,e.jsxs)(o.Blank,{top:!0,children:[(0,e.jsx)(o.Button,{text:"\u5F39\u51FA\u5C42\u5F53\u505A\u4E00\u4E2A\u9875\u9762",onPress:function(){h(!0)}}),(0,e.jsxs)(o.Popup.Page,{visible:P,round:!0,children:[(0,e.jsx)(o.Popup.Header,{title:"\u72EC\u7ACB\u9875\u9762",onClose:function(){h(!1)}}),(0,e.jsx)(_.Z,{children:(0,e.jsxs)(o.Space,{tail:!0,children:[(0,e.jsx)(a.Z,{style:{height:200,backgroundColor:"#f09"}}),(0,e.jsx)(o.Field.TextInput,{title:"\u6587\u6848\u68D2",placeholder:"\u8BF7\u8F93\u5165",divider:!1}),(0,e.jsx)(a.Z,{style:{height:200,backgroundColor:"#876"}}),(0,e.jsx)(o.Field.TextInput,{title:"\u6587\u6848\u79D2",placeholder:"\u8BF7\u8F93\u5165",divider:!1}),(0,e.jsx)(a.Z,{style:{height:200,backgroundColor:"#123"}}),(0,e.jsx)(o.Field.TextInput,{title:"\u6587\u6848\u96C5",placeholder:"\u8BF7\u8F93\u5165",divider:!1}),(0,e.jsx)(a.Z,{style:{height:200,backgroundColor:"#678"}}),(0,e.jsx)(o.Field.TextInput,{title:"\u6587\u6848\u6C34",placeholder:"\u8BF7\u8F93\u5165",divider:!1}),(0,e.jsx)(a.Z,{style:{height:200,backgroundColor:"#321"}})]})}),(0,e.jsx)(o.ButtonBar,{alone:!0,children:(0,e.jsx)(o.Button,{text:"\u786E\u5B9A"})})]})]})};i.default=u},81373:function(m,i,t){t.r(i);var E=t(97857),s=t.n(E),n=t(5574),_=t.n(n),a=t(67294),o=t(24404),e=t(1078),u=t(85893),p=["center","left","right","top","bottom"],f=function(){var P=(0,a.useState)({show:!1,position:"left",show2:!1}),h=_()(P,2),d=h[0],c=h[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e.Card,{title:"\u57FA\u7840\u7528\u6CD5",square:!0,children:(0,u.jsxs)(e.Space,{children:[p.map(function(l){return(0,u.jsx)(e.Button,{type:"primary",text:"\u5F39\u51FA\u4F4D\u7F6E:".concat(l),onPress:function(){c(function(j){return s()(s()({},j),{},{show:!0,position:l})})}},l)}),(0,u.jsx)(e.Button,{type:"primary",text:"destroyOnClosed",onPress:function(){c(function(r){return s()(s()({},r),{},{show2:!0})})}})]})}),(0,u.jsxs)(e.Popup,{safeAreaInsetBottom:d.position!=="top",safeAreaInsetTop:d.position!=="bottom",visible:d.show,position:d.position,onPressOverlay:function(){c(function(r){return s()(s()({},r),{},{show:!1})})},onRequestClose:function(){return c(function(r){return s()(s()({},r),{},{show:!1})}),!0},round:!0,children:[(0,u.jsx)(e.Popup.Header,{title:"\u67D0\u4E00\u4E2A\u6807\u9898",onClose:function(){c(function(r){return s()(s()({},r),{},{show:!1})})}}),(0,u.jsx)(e.Card,{children:(0,u.jsx)(o.Z,{children:"\u5185\u5BB9"})})]}),(0,u.jsxs)(e.Popup,{destroyOnClosed:!0,visible:d.show2,round:!0,position:"bottom",safeAreaInsetBottom:!0,onPressOverlay:function(){c(function(r){return s()(s()({},r),{},{show2:!1})})},children:[(0,u.jsx)(e.Popup.Header,{title:"\u6BCF\u6B21\u6253\u5F00\u90FD\u662F\u65B0\u7684\u5B50\u5143\u7D20"}),(0,u.jsx)(e.TextInput,{placeholder:"\u8BF7\u8F93\u5165\u53CA\u4EF7\u683C",addonAfter:"\u5143/kg",addonBefore:"\u91C7\u8D2D\u4EF7"}),(0,u.jsx)(e.Popup.KeyboardShim,{})]})]})};i.default=f}}]);