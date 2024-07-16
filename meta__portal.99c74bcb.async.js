"use strict";(self.webpackChunk_fruits_chain_react_native_xiaoshu=self.webpackChunk_fruits_chain_react_native_xiaoshu||[]).push([[6884],{74728:function(n,e,a){a.r(e),a.d(e,{demos:function(){return o}});var r=a(67294),t=a(44223),o={}},84980:function(n,e,a){a.r(e),a.d(e,{texts:function(){return t}});var r=a(44223);const t=[{value:"\u4EE3\u7801\u6765\u81EA ",paraId:0,tocIndex:0},{value:"react-native-paper",paraId:0,tocIndex:0},{value:"\uFF0C\u5B83\u7684",paraId:0,tocIndex:0},{value:"\u6587\u6863",paraId:0,tocIndex:0},{value:"\u6CE8\u610F\u5728\u5E94\u7528\u6839\u7EC4\u4EF6\u4F7F\u7528 ",paraId:1,tocIndex:0},{value:"Provider",paraId:1,tocIndex:0},{value:" \u5305\u88F9\u5E94\u7528",paraId:1,tocIndex:0},{value:"\u5185\u90E8\u7EF4\u62A4\u4E00\u4E2A\u653E\u7F6E\u6839\u7EC4\u4EF6\u7684\u7EC4\u4EF6\u5217\u8868\u72B6\u6001\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u751F\u6210\u4E00\u4E2A\u552F\u4E00\u7684 key\u3002",paraId:2,tocIndex:0},{value:"portal-manager",paraId:3,tocIndex:0},{value:" \u5BF9\u7EC4\u4EF6\u961F\u5217\u52A8\u6001\u6E32\u67D3\u3002",paraId:3,tocIndex:0},{value:"portal-consumer",paraId:4,tocIndex:0},{value:" \u628A ",paraId:4,tocIndex:0},{value:"Portal",paraId:4,tocIndex:0},{value:" \u5185\u90E8\u7684\u7EC4\u4EF6\u52A8\u6001\u6CE8\u5165\u5230\u961F\u5217\u4E2D\u3002",paraId:4,tocIndex:0},{value:"portal-host",paraId:5,tocIndex:0},{value:" \u7EDF\u4E00\u7684\u5185\u90E8 ",paraId:5,tocIndex:0},{value:"Provider",paraId:5,tocIndex:0},{value:"\u3002",paraId:5,tocIndex:0},{value:"@ant-design/react-native",paraId:6,tocIndex:0},{value:" \u5728\u6B64\u57FA\u7840\u4E0A\u6269\u5C55\u51FA\u4E00\u4E2A\u4E24\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u901A\u8FC7\u4E8B\u4EF6\u7684\u65B9\u5F0F\u52A8\u6001\u6CE8\u5165\u7EC4\u4EF6\u3002",paraId:6,tocIndex:0},{value:`import React from 'react'
import { Text } from 'react-native'
import { Portal } from '@fruits-chain/react-native-xiaoshu'

const SomeView = () => {
  // SomeView \u7EC4\u4EF6\u9500\u6BC1\u65F6\u81EA\u52A8\u79FB\u9664\u52A8\u6001\u6E32\u67D3\u7ED1\u5B9A
  // Portal \u5185\u90E8\u7684\u7EC4\u4EF6\u5728\u6839\u8282\u70B9\u6E32\u67D3
  return (
    <Portal>
      <Text>\u5728 Provider \u7EC4\u4EF6\u6E32\u67D3</Text>
    </Portal>
  )
}
`,paraId:7,tocIndex:1},{value:`import React from 'react'
import { Text } from 'react-native'
import { Portal } from '@fruits-chain/react-native-xiaoshu'

// \u6DFB\u52A0\u5230\u6839\u8282\u70B9\u6E32\u67D3
const key = Portal.add(<Text>\u5728 Provider \u7EC4\u4EF6\u6E32\u67D3</Text>)

// \u79FB\u9664\u6E32\u67D3\u7ED3\u679C
Portal.remove(key)
`,paraId:8,tocIndex:2}]}}]);
