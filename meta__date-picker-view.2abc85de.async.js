"use strict";(self.webpackChunk_fruits_chain_react_native_xiaoshu=self.webpackChunk_fruits_chain_react_native_xiaoshu||[]).push([[9374],{16065:function(d,a,e){var t;e.r(a),e.d(a,{demos:function(){return s}});var o=e(15009),u=e.n(o),c=e(99289),i=e.n(c),r=e(67294),h=e(4374),_=e(77884),I=e(1078),s={"src-date-picker-view-demo-basic":{component:r.memo(r.lazy(function(){return e.e(2433).then(e.bind(e,64935))})),asset:{type:"BLOCK",id:"src-date-picker-view-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8037).Z},react:{type:"NPM",value:"18.2.0"},"@fruits-chain/react-native-xiaoshu":{type:"NPM",value:"0.4.5-beta.0"}},entry:"index.tsx",description:"\u628A\u5404\u79CD\u573A\u666F\u3001API \u90FD\u8FD0\u7528\u4E86",title:"\u7EFC\u5408\u7528\u6CD5"},context:{react:t||(t=e.t(r,2)),"react-native":_,"@fruits-chain/react-native-xiaoshu":I},renderOpts:{compile:function(){var v=i()(u()().mark(function p(){var l,x=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,x));case 3:case"end":return n.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}}}},36962:function(d,a,e){e.r(a),e.d(a,{texts:function(){return o}});var t=e(4374);const o=[{value:"\u63D0\u4F9B\u591A\u79CD\u65F6\u95F4\u683C\u5F0F\u9009\u62E9\uFF0C\u901A\u5E38\u4E0E\u5F39\u51FA\u5C42\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:0},{value:"PickerView \u9009\u62E9\u5668\u89C6\u56FE",paraId:2,tocIndex:0},{value:" \u57FA\u7840\u4E0A\u7ED3\u5408\u65F6\u95F4\u7EC4\u5408\u800C\u6210\u3002",paraId:1,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:3},{value:"\u63CF\u8FF0",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u7248\u672C",paraId:3,tocIndex:3},{value:"value",paraId:3,tocIndex:3},{value:"\u9009\u4E2D\u9879",paraId:3,tocIndex:3},{value:"Date",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"defaultValue",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u9009\u4E2D\u9879",paraId:3,tocIndex:3},{value:"Date",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"onChange",paraId:3,tocIndex:3},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:3,tocIndex:3},{value:"(v: Date) => void",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"mode",paraId:3,tocIndex:3},{value:"\u65E5\u671F\u9009\u62E9\u7684\u7C7B\u578B",paraId:3,tocIndex:3},{value:"DatePickerColumnMode",paraId:3,tocIndex:3},{value:"'Y-m'",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"min",paraId:3,tocIndex:3},{value:"\u6700\u5C0F\u503C",paraId:3,tocIndex:3},{value:"Date",paraId:3,tocIndex:3},{value:"\u5341\u5E74\u524D",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"max",paraId:3,tocIndex:3},{value:"\u6700\u5927\u503C",paraId:3,tocIndex:3},{value:"Date",paraId:3,tocIndex:3},{value:"\u5341\u5E74\u540E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"renderLabel",paraId:3,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u6BCF\u5217\u5C55\u793A\u7684\u5185\u5BB9",paraId:3,tocIndex:3},{value:"RenderLabel",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"loading",paraId:3,tocIndex:3},{value:"\u52A0\u8F7D\u4E2D",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3}]},8037:function(d,a){a.Z=`import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import type { DatePickerColumnMode } from '@fruits-chain/react-native-xiaoshu'
import { DatePickerView, Cell } from '@fruits-chain/react-native-xiaoshu'

const Y_M_LIMIT = {
  min: new Date(2022, 1, 20, 18, 40, 10),
  max: new Date(2036, 2, 10, 12, 20, 50),
}

// \u63A7\u4EF6\u591A\u4E86\u5BB9\u6613\u5361\u987F
const modes: DatePickerColumnMode[] = [
  // 'Y',
  // 'Y-M',
  // 'Y-D',
  // 'Y-h',
  'Y-m',
  // 'Y-s',
  // 'M',
  // 'M-D',
  // 'M-h',
  // 'M-m',
  // 'M-s',
  // 'D',
  // 'D-h',
  // 'D-m',
  // 'D-s',
  // 'h',
  // 'h-m',
  // 'h-s',
  // 'm',
  // 'm-s',
  // 's',
]

const onChangeLog = (v: Date) => {
  console.log('onChangeLog')
  console.log(v)
}

const BasicDatePickerView: React.FC = () => {
  const [value, setValue] = useState(new Date())

  return (
    <ScrollView>
      {modes.map(mode => {
        return (
          <React.Fragment key={mode}>
            <Cell.Group title={\`\${mode}:\u975E\u53D7\u63A7\`}>
              <DatePickerView mode={mode} onChange={onChangeLog} />
            </Cell.Group>
            <Cell.Group title={\`\${mode}:\u6700\u5927\u6700\u5C0F\u503C:\u975E\u53D7\u63A7\`}>
              <DatePickerView
                mode={mode}
                min={Y_M_LIMIT.min}
                max={Y_M_LIMIT.max}
              />
            </Cell.Group>
            <Cell.Group title={\`\${mode}:\u53D7\u63A7\`}>
              <DatePickerView mode={mode} value={value} onChange={setValue} />
            </Cell.Group>
            <Cell.Group title={\`\${mode}:\u6700\u5927\u6700\u5C0F\u503C:\u53D7\u63A7\`}>
              <DatePickerView
                mode={mode}
                min={Y_M_LIMIT.min}
                max={Y_M_LIMIT.max}
                value={value}
                onChange={setValue}
              />
            </Cell.Group>
            <Cell.Group title={\`\${mode}:\u53D7\u63A7\u4E0D\u66F4\u65B0\`}>
              <DatePickerView mode={mode} value={value} />
            </Cell.Group>
          </React.Fragment>
        )
      })}
    </ScrollView>
  )
}

export default BasicDatePickerView
`}}]);
