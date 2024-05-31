"use strict";(self.webpackChunk_fruits_chain_react_native_xiaoshu=self.webpackChunk_fruits_chain_react_native_xiaoshu||[]).push([[7966],{13604:function(I,l,e){e.r(l),e.d(l,{demos:function(){return a}});var x=e(15009),h=e.n(x),f=e(99289),o=e.n(f),n=e(67294),a={"src-picker-view-demo-basic":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,95315))})),asset:{type:"BLOCK",id:"src-picker-view-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(72442).Z},react:{type:"NPM",value:"18.2.0"},"@fruits-chain/react-native-xiaoshu":{type:"NPM",value:"0.4.0"},"./cascade.tsx":{type:"FILE",value:e(15815).Z},"./multiple.tsx":{type:"FILE",value:e(57615).Z},"./single.tsx":{type:"FILE",value:e(16505).Z}},entry:"index.tsx",description:"\u628A\u5404\u79CD\u573A\u666F\u3001API \u90FD\u8FD0\u7528\u4E86",title:"\u7EFC\u5408\u7528\u6CD5"},context:{react:e(67294),"react-native":e(77884),"./cascade.tsx":e(40609),"./multiple.tsx":e(69307),"./single.tsx":e(1982),"@fruits-chain/react-native-xiaoshu":e(1078)},renderOpts:{compile:function(){var s=o()(h()().mark(function v(){var C,p=arguments;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(C=u.sent).default.apply(C,p));case 3:case"end":return u.stop()}},v)}));function m(){return s.apply(this,arguments)}return m}()}}}},40609:function(I,l,e){e.r(l);var x=e(5574),h=e.n(x),f=e(67294),o=e(1078),n=e(85893),a=function(r,u,t,d){return new Array(r).fill(0).map(function(E,c){return{label:"".concat(t,"_").concat(c),value:"".concat(u,"_").concat(c),children:d?d("".concat(u,"_").concat(c),"".concat(t,"_").concat(c)):void 0}})},s=a(8,"sj","\u7701\u7EA7",function(p,r){return a(6,p.replace("sj","sq"),r.replace("\u7701\u7EA7","\u5E02\u533A"),function(u,t){return a(4,u.replace("sq","qx"),t.replace("\u5E02\u533A","\u533A\u53BF"))})}),m=["sj_5","sq_5_2","qx_5_2_2"],v=["sj_2"],C=function(){var r=(0,f.useState)([]),u=h()(r,2),t=u[0],d=u[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Cell.Group,{title:"\u7EA7\u8054\u9009\u62E9:\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7",children:(0,n.jsx)(o.PickerView,{columns:s,onChange:function(c,g){console.log("\u7EA7\u8054\u9009\u62E9:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",c),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",g)},defaultValue:m})}),(0,n.jsx)(o.Cell.Group,{title:"\u7EA7\u8054\u9009\u62E9:\u9ED8\u8BA4\u503C2:\u975E\u53D7\u63A7",children:(0,n.jsx)(o.PickerView,{columns:s,onChange:function(c,g){console.log("\u7EA7\u8054\u9009\u62E9:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",c),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",g)},defaultValue:v})}),(0,n.jsx)(o.Cell.Group,{title:"\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7",children:(0,n.jsx)(o.PickerView,{columns:s,value:t,onChange:function(c,g){console.log("\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",c),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",g),d(c)}})}),(0,n.jsx)(o.Cell.Group,{title:"\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0",children:(0,n.jsx)(o.PickerView,{columns:s,value:t,onChange:function(c,g){console.log("\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",c),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",g)}})})]})};l.default=C},69307:function(I,l,e){e.r(l);var x=e(5574),h=e.n(x),f=e(67294),o=e(1078),n=e(85893),a=new Array(10).fill(0).map(function(p,r){return{label:"\u9009\u9879".concat(r),value:"".concat(r),disabled:r===6}}),s=[a,a,a,a],m=[{options:a,defaultValue:"4"},{options:a,defaultValue:"2"},{options:a,defaultValue:"9"}],v=[s[0][5].value,s[1][3].value],C=function(){var r=(0,f.useState)([s[0][3].value,s[1][2].value]),u=h()(r,2),t=u[0],d=u[1],E=(0,f.useState)([]),c=h()(E,2),g=c[0],V=c[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Cell.Group,{title:"\u591A\u5217\u9009\u62E9:\u53D7\u63A7",children:(0,n.jsx)(o.PickerView,{columns:s,value:t,onChange:function(i,_){console.log("\u591A\u5217\u9009\u62E9:\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",i),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",_),d(i)}})}),(0,n.jsx)(o.Cell.Group,{title:"\u591A\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0",children:(0,n.jsx)(o.PickerView,{columns:s,value:t,onChange:function(i,_){console.log("\u591A\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",i),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",_)}})}),(0,n.jsx)(o.Cell.Group,{title:"\u591A\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C",children:(0,n.jsx)(o.PickerView,{columns:s,defaultValue:v,onChange:function(i,_){console.log("\u591A\u5217\u9009\u62E9:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",i),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",_)}})}),(0,n.jsx)(o.Cell.Group,{title:"\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7",children:(0,n.jsx)(o.PickerView,{columns:m,onChange:function(i,_){console.log("\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",i),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",_)}})}),(0,n.jsx)(o.Cell.Group,{title:"\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7>>>",children:(0,n.jsx)(o.PickerView,{columns:m,defaultValue:v,onChange:function(i,_){console.log("\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",i),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",_)}})}),(0,n.jsx)(o.Cell.Group,{title:"\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7",children:(0,n.jsx)(o.PickerView,{columns:m,value:g,onChange:function(i,_){console.log("\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",i),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",_),V(i)}})}),(0,n.jsx)(o.Cell.Group,{title:"\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7\u4E0D\u66F4\u65B0",children:(0,n.jsx)(o.PickerView,{columns:m,value:g,onChange:function(i,_){console.log("\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7\u4E0D\u66F4\u65B0"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",i),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",_)}})})]})};l.default=C},1982:function(I,l,e){e.r(l);var x=e(5574),h=e.n(x),f=e(67294),o=e(1078),n=e(85893),a=new Array(10).fill(0).map(function(m,v){return{label:"\u9009\u9879".concat(v),value:"".concat(v),disabled:v===6}}),s=function(){var v=(0,f.useState)([a[1].value]),C=h()(v,2),p=C[0],r=C[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Cell.Group,{title:"\u5355\u5217\u9009\u62E9:\u53D7\u63A7",children:(0,n.jsx)(o.PickerView,{columns:a,onChange:function(t,d){console.log("\u5355\u5217\u9009\u62E9:\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",t),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",d),r(t)},value:p})}),(0,n.jsx)(o.Cell.Group,{title:"\u5355\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0",children:(0,n.jsx)(o.PickerView,{columns:a,onChange:function(t,d){console.log("\u5355\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",t),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",d)},value:p})}),(0,n.jsx)(o.Cell.Group,{title:"\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7",children:(0,n.jsx)(o.PickerView,{columns:a,onChange:function(t,d){console.log("\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",t),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",d)}})}),(0,n.jsx)(o.Cell.Group,{title:"\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C",children:(0,n.jsx)(o.PickerView,{columns:a,onChange:function(t,d){console.log("\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",t),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",d)},defaultValue:[a[5].value]})})]})};l.default=s},76259:function(I,l,e){e.r(l),e.d(l,{texts:function(){return x}});const x=[{value:"\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u89C6\u56FE\uFF0C\u652F\u6301\u5355\u5217\u9009\u62E9\u548C\u591A\u5217\u7EA7\u8054\uFF0C\u901A\u5E38\u4E0E\u5F39\u51FA\u5C42\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:3},{value:"\u63CF\u8FF0",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u7248\u672C",paraId:1,tocIndex:3},{value:"value",paraId:1,tocIndex:3},{value:"\u53D7\u63A7\u6A21\u5F0F\u6240\u663E\u793A\u7684\u503C",paraId:1,tocIndex:3},{value:"PickerValue[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"\u975E\u53D7\u63A7\u6A21\u5F0F\u7684\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"PickerValue[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"onChange",paraId:1,tocIndex:3},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:3},{value:"(values:PickerValue[], options:Column[]) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"columns",paraId:1,tocIndex:3},{value:"\u9009\u9879\u6570\u7EC4\uFF0C\u914D\u7F6E\u6BCF\u4E00\u5217\u663E\u793A\u7684\u6570\u636E",paraId:1,tocIndex:3},{value:"Column[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"loading",paraId:1,tocIndex:3},{value:"\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"itemHeight",paraId:1,tocIndex:3},{value:"\u9009\u9879\u9AD8\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"50",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"visibleItemCount",paraId:1,tocIndex:3},{value:"\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570\uFF0C\u5947\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"5",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u540D\u79F0",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"picker_view_background_color",paraId:2,tocIndex:4},{value:"TOKENS.white",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"picker_view_column_mask_background_color",paraId:2,tocIndex:4},{value:"TOKENS.white",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"picker_view_column_text_color",paraId:2,tocIndex:4},{value:"TOKENS.gray_8",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"picker_view_column_text_disabled_color",paraId:2,tocIndex:4},{value:"TOKENS.gray_6",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"picker_view_column_text_font_size",paraId:2,tocIndex:4},{value:"TOKENS.font_size_5",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onChange",paraId:3},{value:"ScrollView event handlers not working: onScrollBeginDrag, onScrollEndDrag, onMomentumScrollBegin, onMomentumScrollEnd",paraId:4,tocIndex:6}]},72442:function(I,l){l.Z=`import React from 'react'
import { ScrollView } from 'react-native'

import PickerViewSingle from './single'
import PickerViewMultiple from './multiple'
import PickerViewCascade from './cascade'

const BasicMultiple: React.FC = () => {
  return (
    <ScrollView>
      <PickerViewSingle />

      <PickerViewMultiple />

      <PickerViewCascade />
    </ScrollView>
  )
}

export default BasicMultiple
`},15815:function(I,l){l.Z=`import React, { useState } from 'react'

import type { PickerOptionCascade } from '@fruits-chain/react-native-xiaoshu'
import { PickerView, Cell } from '@fruits-chain/react-native-xiaoshu'

const buildChildren = (
  num: number,
  valuePrefix: string,
  labelPrefix: string,
  insertChildren?: (value: string, label: string) => PickerOptionCascade[],
  // eslint-disable-next-line max-params
) => {
  return new Array(num).fill(0).map((_, index) => ({
    label: \`\${labelPrefix}_\${index}\`,
    value: \`\${valuePrefix}_\${index}\`,
    children: insertChildren
      ? insertChildren(\`\${valuePrefix}_\${index}\`, \`\${labelPrefix}_\${index}\`)
      : undefined,
  }))
}

const columns4 = buildChildren(8, 'sj', '\u7701\u7EA7', (sjValue, sjLabel) =>
  buildChildren(
    6,
    sjValue.replace('sj', 'sq'),
    sjLabel.replace('\u7701\u7EA7', '\u5E02\u533A'),
    (sqValue, sqLabel) =>
      buildChildren(
        4,
        sqValue.replace('sq', 'qx'),
        sqLabel.replace('\u5E02\u533A', '\u533A\u53BF'),
      ),
  ),
)

const defaultValue = ['sj_5', 'sq_5_2', 'qx_5_2_2']

const defaultValue2 = ['sj_2']

const PickerViewCascade: React.FC = () => {
  const [value, setValue] = useState<(string | number)[]>([])

  return (
    <>
      <Cell.Group title="\u7EA7\u8054\u9009\u62E9:\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7">
        <PickerView
          columns={columns4}
          onChange={(v, o) => {
            console.log('\u7EA7\u8054\u9009\u62E9:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
          defaultValue={defaultValue}
        />
      </Cell.Group>

      <Cell.Group title="\u7EA7\u8054\u9009\u62E9:\u9ED8\u8BA4\u503C2:\u975E\u53D7\u63A7">
        <PickerView
          columns={columns4}
          onChange={(v, o) => {
            console.log('\u7EA7\u8054\u9009\u62E9:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
          defaultValue={defaultValue2}
        />
      </Cell.Group>

      <Cell.Group title="\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7">
        <PickerView
          columns={columns4}
          value={value}
          onChange={(v, o) => {
            console.log('\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
            setValue(v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0">
        <PickerView
          columns={columns4}
          value={value}
          onChange={(v, o) => {
            console.log('\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>
    </>
  )
}

export default PickerViewCascade
`},57615:function(I,l){l.Z=`import React, { useState } from 'react'
import { PickerView, Cell } from '@fruits-chain/react-native-xiaoshu'

const columns1 = new Array(10).fill(0).map((_, index) => ({
  label: \`\u9009\u9879\${index}\`,
  value: \`\${index}\`,
  disabled: index === 6,
}))

const columns2 = [columns1, columns1, columns1, columns1]

const columns3 = [
  {
    options: columns1,
    defaultValue: '4',
  },
  {
    options: columns1,
    defaultValue: '2',
  },
  {
    options: columns1,
    defaultValue: '9',
  },
]

const defaultValue = [columns2[0][5].value, columns2[1][3].value]

const PickerViewMultiple: React.FC = () => {
  const [value1, setValue1] = useState<(string | number)[]>([
    columns2[0][3].value,
    columns2[1][2].value,
  ])
  const [value2, setValue2] = useState<(string | number)[]>([])

  return (
    <>
      <Cell.Group title="\u591A\u5217\u9009\u62E9:\u53D7\u63A7">
        <PickerView
          columns={columns2}
          value={value1}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u9009\u62E9:\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
            setValue1(v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0">
        <PickerView
          columns={columns2}
          value={value1}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C">
        <PickerView
          columns={columns2}
          defaultValue={defaultValue}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u9009\u62E9:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7">
        <PickerView
          columns={columns3}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7>>>">
        <PickerView
          columns={columns3}
          defaultValue={defaultValue}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7">
        <PickerView
          columns={columns3}
          value={value2}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
            setValue2(v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7\u4E0D\u66F4\u65B0">
        <PickerView
          columns={columns3}
          value={value2}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7\u4E0D\u66F4\u65B0')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>
    </>
  )
}

export default PickerViewMultiple
`},16505:function(I,l){l.Z=`import React, { useState } from 'react'

import { PickerView, Cell } from '@fruits-chain/react-native-xiaoshu'

const columns1 = new Array(10).fill(0).map((_, index) => ({
  label: \`\u9009\u9879\${index}\`,
  value: \`\${index}\`,
  disabled: index === 6,
}))

const PickerViewSingle: React.FC = () => {
  const [value, setValue] = useState<(string | number)[]>([columns1[1].value])

  return (
    <>
      <Cell.Group title="\u5355\u5217\u9009\u62E9:\u53D7\u63A7">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('\u5355\u5217\u9009\u62E9:\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
            setValue(v)
          }}
          value={value}
        />
      </Cell.Group>

      <Cell.Group title="\u5355\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('\u5355\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
          value={value}
        />
      </Cell.Group>

      <Cell.Group title="\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
          defaultValue={[columns1[5].value]}
        />
      </Cell.Group>
    </>
  )
}

export default PickerViewSingle
`}}]);
