"use strict";(self.webpackChunk_fruits_chain_react_native_xiaoshu=self.webpackChunk_fruits_chain_react_native_xiaoshu||[]).push([[4170],{23749:function(d,a,e){e.r(a),e.d(a,{demos:function(){return s}});var n=e(15009),r=e.n(n),u=e(99289),c=e.n(u),o=e(67294),s={"src-steps-demo-basic":{component:o.memo(o.lazy(function(){return e.e(2433).then(e.bind(e,54866))})),asset:{type:"BLOCK",id:"src-steps-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(5108).Z},react:{type:"NPM",value:"18.2.0"},"@fruits-chain/react-native-xiaoshu":{type:"NPM",value:"0.4.0"}},entry:"index.tsx",description:"\u628A\u5404\u79CD\u573A\u666F\u3001API \u90FD\u8FD0\u7528\u4E86",title:"\u7EFC\u5408\u7528\u6CD5"},context:{react:e(67294),"react-native":e(77884),"@fruits-chain/react-native-xiaoshu":e(1078)},renderOpts:{compile:function(){var i=c()(r()().mark(function p(){var l,v=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,v));case 3:case"end":return t.stop()}},p)}));function I(){return i.apply(this,arguments)}return I}()}}}},84715:function(d,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"\u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5BFC\u822A\u6761\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:3},{value:"\u63CF\u8FF0",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u7248\u672C",paraId:1,tocIndex:3},{value:"current",paraId:1,tocIndex:3},{value:"\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\uFF0C\u4ECE 0 \u5F00\u59CB\u8BB0\u6570\u3002\u5728\u5B50 Step \u5143\u7D20\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 status \u5C5E\u6027\u8986\u76D6\u72B6\u6001",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"data",paraId:1,tocIndex:3},{value:"\u6B65\u9AA4\u6570\u7EC4",paraId:1,tocIndex:3},{value:"{icon:React.ReactNode, status:'wait'|'finish', title:React.ReactNode}[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"style",paraId:1,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:3},{value:"StyleProp<ViewStyle>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u5927\u5C4F\u5E55\u7684\u60C5\u51B5\u53EF\u4EE5\u663E\u793A\u66F4\u591A",paraId:2,tocIndex:4},{value:"\u540D\u79F0",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"\u63CF\u8FF0",paraId:3,tocIndex:5},{value:"steps_background_color",paraId:3,tocIndex:5},{value:"TOKENS.brand_6",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"steps_padding_vertical",paraId:3,tocIndex:5},{value:"TOKENS.space_4",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"steps_padding_horizontal",paraId:3,tocIndex:5},{value:"TOKENS.space_6",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"steps_icon_dot_size",paraId:3,tocIndex:5},{value:"10",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"steps_icon_dot_active_size",paraId:3,tocIndex:5},{value:"16",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"steps_icon_success_active_size",paraId:3,tocIndex:5},{value:"16",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"steps_title_size",paraId:3,tocIndex:5},{value:"TOKENS.font_size_4",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"steps_title_color",paraId:3,tocIndex:5},{value:"TOKENS.white",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5}]},5108:function(d,a){a.Z=`import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Steps, Cell, Space } from '@fruits-chain/react-native-xiaoshu'

const BasicDemo: React.FC = () => {
  return (
    <ScrollView>
      <Space head tail>
        <Steps
          data={[
            { title: '\u57FA\u672C\u4FE1\u606F' },
            { title: '\u751F\u4EA7\u4EFB\u52A1\u5566\u5566' },
            { title: '\u751F\u4EA72\u5566' },
          ]}
          current={1}
        />

        <Steps
          data={[{ title: '\u57FA\u672C\u4FE1\u606F' }, { title: '\u751F\u4EA7\u4EFB\u52A1\u5566\u5566' }]}
          current={1}
        />

        <Steps
          data={[
            { title: '\u57FA\u672C\u4FE1\u606F' },
            { title: '\u751F\u4EA7\u4EFB\u52A1\u5566\u5566' },
            { title: '\u53D1\u5E03\u4EFB\u52A1' },
          ]}
          current={0}
        />

        <Cell.Group title="\u81EA\u5B9A\u4E49 icon">
          <Steps
            data={[
              { title: '\u57FA\u672C\u4FE1\u606F', icon: <Text>x</Text> },
              { title: '\u751F\u4EA7\u4EFB\u52A1\u5566\u5566', icon: <Text>\u{1FA9D}</Text> },
              { title: '\u53D1\u5E03\u4EFB\u52A1' },
            ]}
            current={0}
          />
        </Cell.Group>

        <Cell.Group title="\u591A\u6B65\u9AA4\u65F6">
          <Steps
            data={[
              { title: '\u57FA\u672C\u4FE1\u606F' },
              { title: '\u751F\u4EA7\u4EFB\u52A1\u5566\u5566' },
              { title: '\u53D1\u5E03\u4EFB\u52A1' },
              { title: '\u53D1\u5E03\u4EFB\u52A11' },
              { title: '\u53D1\u5E03\u4EFB\u52A12' },
              { title: '\u53D1\u5E03\u4EFB\u52A14' },
            ]}
            current={3}
          />
        </Cell.Group>
      </Space>
    </ScrollView>
  )
}

export default BasicDemo
`}}]);
