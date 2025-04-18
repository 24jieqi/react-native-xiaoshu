"use strict";(self.webpackChunk_fruits_chain_react_native_xiaoshu=self.webpackChunk_fruits_chain_react_native_xiaoshu||[]).push([[7022],{59406:function(d,a,e){var t;e.r(a),e.d(a,{demos:function(){return _}});var r=e(15009),u=e.n(r),s=e(99289),c=e.n(s),o=e(67294),h=e(75490),I=e(77884),i=e(1078),_={"overlay-demo-basic":{component:o.memo(o.lazy(function(){return e.e(6895).then(e.bind(e,17450))})),asset:{type:"BLOCK",id:"overlay-demo-basic",refAtomIds:["overlay"],dependencies:{"index.tsx":{type:"FILE",value:e(97190).Z},react:{type:"NPM",value:"18.2.0"},"@fruits-chain/react-native-xiaoshu":{type:"NPM",value:"0.4.5-beta.0"}},entry:"index.tsx",description:"\u628A\u5404\u79CD\u573A\u666F\u3001API \u90FD\u8FD0\u7528\u4E86",title:"\u7EFC\u5408\u7528\u6CD5"},context:{react:t||(t=e.t(o,2)),"react-native":I,"@fruits-chain/react-native-xiaoshu":i},renderOpts:{compile:function(){var v=c()(u()().mark(function p(){var l,m=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,m));case 3:case"end":return n.stop()}},p)}));function x(){return v.apply(this,arguments)}return x}()}}}},7903:function(d,a,e){e.r(a),e.d(a,{texts:function(){return r}});var t=e(75490);const r=[{value:"\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u7528\u4E8E\u5F3A\u8C03\u7279\u5B9A\u7684\u9875\u9762\u5143\u7D20\uFF0C\u5E76\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:3},{value:"\u63CF\u8FF0",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u7248\u672C",paraId:1,tocIndex:3},{value:"style",paraId:1,tocIndex:3},{value:"\u6700\u5916\u5C42\u6837\u5F0F",paraId:1,tocIndex:3},{value:"StyleProp<ViewStyle>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"overlayStyle",paraId:1,tocIndex:3},{value:"overlay \u6837\u5F0F",paraId:1,tocIndex:3},{value:"StyleProp<ViewStyle>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"visible",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"zIndex",paraId:1,tocIndex:3},{value:"z-index \u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"duration",paraId:1,tocIndex:3},{value:"\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"animation_duration_base",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"onPress",paraId:1,tocIndex:3},{value:"\u70B9\u51FB\u5F39\u5C42",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"() => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"onRequestClose",paraId:1,tocIndex:3},{value:"\u5F53\u70B9\u51FB\u8FD4\u56DE\u6309\u94AE\u65F6\u89E6\u53D1 ",paraId:1,tocIndex:3},{value:"@support Android",paraId:1,tocIndex:3},{value:"() => boolean",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"backgroundColor",paraId:1,tocIndex:3},{value:"\u70B9\u51FB\u5F39\u5C42",paraId:1,tocIndex:3},{value:"ColorValue",paraId:1,tocIndex:3},{value:"overlay_background_color",paraId:1,tocIndex:3},{value:"0.2.17+",paraId:1,tocIndex:3},{value:"\u540D\u79F0",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"overlay_z_index",paraId:2,tocIndex:4},{value:"10",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"overlay_background_color",paraId:2,tocIndex:4},{value:"'rgba(0, 0, 0, 0.7)'",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},97190:function(d,a){a.Z=`import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import {
  Overlay,
  Button,
  Card,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const BasicOverlay: React.FC = () => {
  const [state, setState] = useState<
    Record<'normal' | 'inset' | 'backgroundColor', boolean>
  >({
    normal: false,
    inset: false,
    backgroundColor: false,
  })

  return (
    <>
      <Space tail head>
        <Card title="\u7B80\u5355\u4F7F\u7528" square>
          <Button
            text="\u663E\u793A\u906E\u7F69\u5C42 Android \u8FD4\u56DE\u5173\u95ED"
            type="primary"
            onPress={() => {
              setState(s => ({
                ...s,
                normal: true,
              }))
            }}
          />
        </Card>

        <Card title="\u5D4C\u5165\u5185\u5BB9" square>
          <Button
            text="\u5D4C\u5165\u5185\u5BB9"
            type="primary"
            onPress={() => {
              setState(s => ({
                ...s,
                inset: true,
              }))
            }}
          />
        </Card>

        <Card title="\u81EA\u5B9A\u4E49\u80CC\u666F\u8272" square>
          <Button
            text="\u81EA\u5B9A\u4E49\u80CC\u666F\u8272"
            type="primary"
            onPress={() => {
              setState(s => ({
                ...s,
                backgroundColor: true,
              }))
            }}
          />
        </Card>
      </Space>

      <Overlay
        visible={state.normal}
        onPress={() => {
          setState(s => ({
            ...s,
            normal: false,
          }))
        }}
        onRequestClose={() => {
          console.log('???')
          setState(s => ({
            ...s,
            normal: false,
          }))
          return true
        }}
      />

      <Overlay
        visible={state.inset}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          setState(s => ({
            ...s,
            inset: false,
          }))
        }}>
        <TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#fff',
              width: 200,
              height: 300,
              zIndex: 4,
              borderRadius: 4,
            }}>
            <Text>
              \u5916\u5C42\u5D4C\u5957 TouchableWithoutFeedback
              \u53EF\u4EE5\u963B\u65AD\u5B50\u5143\u7D20\u7684\u70B9\u51FB\u4E8B\u4EF6\u5411\u5916\u4F20\u9012\uFF0C\u907F\u514D\u8BEF\u89E6\u53D1\u5173\u95ED\u3002
            </Text>

            <Text>\u4E00\u822C\u60C5\u51B5\u4E0D\u5728\u5185\u90E8\u653E\u7F6E\u5B50\u5143\u7D20\uFF0C\u800C\u662F\u548C\u5176\u4ED6\u5F39\u51FA\u5C42\u540C\u5C42\u7EA7\u3002</Text>
          </View>
        </TouchableWithoutFeedback>
      </Overlay>

      <Overlay
        visible={state.backgroundColor}
        backgroundColor="rgba(0,255,0,0.3)"
        onPress={() => {
          setState(s => ({
            ...s,
            backgroundColor: false,
          }))
        }}
      />
    </>
  )
}

export default BasicOverlay
`}}]);
