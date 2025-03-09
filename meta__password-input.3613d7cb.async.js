"use strict";(self.webpackChunk_fruits_chain_react_native_xiaoshu=self.webpackChunk_fruits_chain_react_native_xiaoshu||[]).push([[6881],{79545:function(o,a,e){var t;e.r(a),e.d(a,{demos:function(){return c}});var r=e(15009),d=e.n(r),s=e(99289),_=e.n(s),u=e(67294),m=e(97273),i=e(1078),c={"password-input-demo-basic":{component:u.memo(u.lazy(function(){return e.e(786).then(e.bind(e,63078))})),asset:{type:"BLOCK",id:"password-input-demo-basic",refAtomIds:["password-input"],dependencies:{"index.tsx":{type:"FILE",value:e(56311).Z},react:{type:"NPM",value:"18.2.0"},"@fruits-chain/react-native-xiaoshu":{type:"NPM",value:"0.4.3"}},entry:"index.tsx",description:"\u70B9\u51FB\u56FE\u6807\u5207\u6362\u8F93\u5165\u6846\u5185\u5BB9\u662F\u5426\u660E\u6587\u3002",title:"\u7EFC\u5408\u7528\u6CD5"},context:{react:t||(t=e.t(u,2)),"@fruits-chain/react-native-xiaoshu":i},renderOpts:{compile:function(){var I=_()(d()().mark(function p(){var l,x=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,x));case 3:case"end":return n.stop()}},p)}));function v(){return I.apply(this,arguments)}return v}()}}}},54877:function(o,a,e){e.r(a),e.d(a,{texts:function(){return r}});var t=e(97273);const r=[{value:"\u5728 TextInput \u7684\u57FA\u7840\u662F\u5B8C\u5584\u5BC6\u7801\u53EF\u89C1\u5207\u6362\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u8003 ",paraId:1,tocIndex:1},{value:"TextInput",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"\u53BB\u6389 TextInputProps \u7684 formatTrigger\u3001showWordLimit\u3001rows\u3001type\u3001secureTextEntry\u3001suffix\u3002",paraId:2,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:4},{value:"\u63CF\u8FF0",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:"\u7248\u672C",paraId:3,tocIndex:4},{value:"secureTextEntry",paraId:3,tocIndex:4},{value:"\u5B89\u5168\u8F93\u5165",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"true",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"defaultSecureTextEntry",paraId:3,tocIndex:4},{value:"\u5B89\u5168\u8F93\u5165\u9ED8\u8BA4\u72B6\u6001",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"onChangeSecureTextEntry",paraId:3,tocIndex:4},{value:"\u5B89\u5168\u8F93\u5165\u72B6\u6001\u53D8\u66F4",paraId:3,tocIndex:4},{value:"(v:boolean) => void",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"iconSize",paraId:3,tocIndex:4},{value:"\u56FE\u6807\u5927\u5C0F",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"20",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"iconColor",paraId:3,tocIndex:4},{value:"\u56FE\u6807\u989C\u8272",paraId:3,tocIndex:4},{value:"ColorValue",paraId:3,tocIndex:4},{value:"gray_6",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},56311:function(o,a){a.Z=`import React, { useState } from 'react'

import { Cell, PasswordInput } from '@fruits-chain/react-native-xiaoshu'

const BasicPasswordInput: React.FC = () => {
  const [value, setValue] = useState(false)

  return (
    <>
      <Cell.Group title="\u57FA\u7840\u7528\u6CD5">
        <Cell title="\u9ED8\u8BA4" value={<PasswordInput />} />
        <Cell title="\u9ED8\u8BA4" value={<PasswordInput bordered />} divider={false} />
      </Cell.Group>

      <Cell.Group title="\u72B6\u6001\u63A7\u5236">
        <Cell
          title="\u9ED8\u8BA4"
          value={<PasswordInput bordered defaultSecureTextEntry={false} />}
        />
        <Cell
          title="\u9ED8\u8BA4:\u53D7\u63A7"
          value={
            <PasswordInput
              bordered
              clearable
              secureTextEntry={value}
              onChangeSecureTextEntry={setValue}
            />
          }
        />
        <Cell
          title="\u9ED8\u8BA4:\u53D7\u63A7:\u4E0D\u66F4\u65B0"
          value={<PasswordInput bordered secureTextEntry={value} />}
          divider={false}
        />
      </Cell.Group>
    </>
  )
}

export default BasicPasswordInput
`}}]);
