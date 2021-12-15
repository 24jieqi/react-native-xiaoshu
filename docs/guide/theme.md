---
title: 定制主题
order: 2
nav:
  title: 指南
  order: 0
group:
  title: 开发指南
  path: /guide
---

> `react-native-xiaoshu` 提供了一套默认主题，如果你想完全替换主题色或者其他样式，可以按照本文档进行主题定制。

`react-native-xiaoshu` 暂时用 context 方式把变量共享给各个组件，有考虑使用 [react-native-extended-stylesheet](https://github.com/vitalets/react-native-extended-stylesheet) 管理样式变量。

**context 的方式优势**

- 无其他依赖
- 有比较良好的代码提示

context 的方式劣势

- 覆盖变量的时候需要没给变量都去覆盖
- 无法在非组件环境下使用
- 样式需要卸载组件内容，每个组件都是动态创建的，感觉上有点糟糕

**react-native-extended-stylesheet 的优势**

- 运行时方案，覆盖一个变量，关联变量同步变更
- 可以在非组件环境通过 ReactNativeExtendedStylesheet.value 获取配置的变量
- 样式可以写在组件外部

react-native-extended-stylesheet 的方式劣势

- 新增一个依赖
- ReactNativeExtendedStylesheet.create({}) 创建的样式集合变量在使用的时候没有提示，需要自己写一个声明，每次断言使用
- 样式中使用 ReactNativeExtendedStylesheet 的变量，例如 `fontSize: '$font_size_1'` 可能提示类型错误，需要断言

## 样式变量

参考 `components/theme/default-var.ts` 文件。

## 定制方法

项目根组件引入 `react-native-xiaoshu`，设置需要覆盖的变量

```tsx | pure
import React from 'react'
import { Provider, Button } from '@fruits-chain/react-native-xiaoshu'

const customThemeVar = {
  primary: '#f30',
}

const App: React.FC = () => {
  return (
    <Provider theme={customThemeVar}>
      <Button text="普通按钮" type="primary" />
    </Provider>
  )
}
```
