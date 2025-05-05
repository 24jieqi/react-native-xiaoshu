"use strict";(self.webpackChunk_fruits_chain_react_native_xiaoshu=self.webpackChunk_fruits_chain_react_native_xiaoshu||[]).push([[3416],{40725:function(u,a,e){var r;e.r(a),e.d(a,{demos:function(){return v}});var t=e(15009),_=e.n(t),s=e(99289),i=e.n(s),o=e(67294),h=e(9466),c=e(77884),l=e(1078),v={"error-boundary-demo-basic":{component:o.memo(o.lazy(function(){return e.e(5441).then(e.bind(e,46033))})),asset:{type:"BLOCK",id:"error-boundary-demo-basic",refAtomIds:["error-boundary"],dependencies:{"index.tsx":{type:"FILE",value:e(14913).Z},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-native-xiaoshu":{type:"NPM",value:"0.4.5-beta.1"}},entry:"index.tsx",description:"\u5BF9\u53EF\u80FD\u51FA\u9519\u7684\u7EC4\u4EF6\u8FDB\u884C\u5305\u88F9",title:"\u7EFC\u5408\u7528\u6CD5"},context:{react:r||(r=e.t(o,2)),"react-native":c,"@fruits-chain/react-native-xiaoshu":l},renderOpts:{compile:function(){var I=i()(_()().mark(function x(){var d,p=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,p));case 3:case"end":return n.stop()}},x)}));function m(){return I.apply(this,arguments)}return m}()}}}},1:function(u,a,e){e.r(a),e.d(a,{texts:function(){return t}});var r=e(9466);const t=[{value:"\u4E00\u822C\u7528\u4E8E\u5E94\u7528\u6839\u7EC4\u4EF6\uFF0C\u6355\u83B7 React \u5185\u4EA7\u751F\u7684\u95EE\u9898\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:3},{value:"\u63CF\u8FF0",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u7248\u672C",paraId:1,tocIndex:3},{value:"title",paraId:1,tocIndex:3},{value:"\u9519\u8BEF\u63D0\u793A",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"'\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5~'",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"reloadText",paraId:1,tocIndex:3},{value:"\u91CD\u65B0\u52A0\u8F7D\u7684\u6587\u6848",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"'\u91CD\u65B0\u52A0\u8F7D'",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"onError",paraId:1,tocIndex:3},{value:"\u51FA\u9519\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:3},{value:"(e:Error, info:ErrorInfo) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"renderError",paraId:1,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FA\u9519\u65F6\u7684\u9875\u9762",paraId:1,tocIndex:3},{value:"(opt:{name:string, message:string, onReset:() => void}) => React.ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},14913:function(u,a){a.Z=`import React, { useMemo } from 'react'
import { Text } from 'react-native'

import { ErrorBoundary } from '@fruits-chain/react-native-xiaoshu'

const ErrorApp = () => {
  const randomData = useMemo(() => {
    if (Math.random() > 0.5) {
      return {
        text: '\u663E\u793A\u4E86\u5185\u5BB9',
      }
    }
    return null
  }, [])

  // @ts-ignore
  return <Text>{randomData.text}</Text>
}

const BasicResult: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorApp />
    </ErrorBoundary>
  )
}

export default BasicResult
`}}]);
