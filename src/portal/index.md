---
title: Portal 传送门
nav:
  title: 组件
group:
  title: 基础组件
  order: 1
---

# Portal 传送门

代码来自 [react-native-paper](https://github.com/callstack/react-native-paper)，它的[文档](https://callstack.github.io/react-native-paper/portal.html)

> 注意在应用根组件使用 `Provider` 包裹应用

内部维护一个放置根组件的组件列表状态，每个组件生成一个唯一的 key。

`portal-manager` 对组件队列动态渲染。

`portal-consumer` 把 `Portal` 内部的组件动态注入到队列中。

`portal-host` 统一的内部 `Provider`。

`@ant-design/react-native` 在此基础上扩展出一个两个静态方法，通过事件的方式动态注入组件。

## 组件使用方式

```tsx | pure
import React from 'react'
import { Text } from 'react-native'
import { Portal } from '@fruits-chain/react-native-xiaoshu'

const SomeView = () => {
  // SomeView 组件销毁时自动移除动态渲染绑定
  // Portal 内部的组件在根节点渲染
  return (
    <Portal>
      <Text>在 Provider 组件渲染</Text>
    </Portal>
  )
}
```

## 函数使用方式

```tsx | pure
import React from 'react'
import { Text } from 'react-native'
import { Portal } from '@fruits-chain/react-native-xiaoshu'

// 添加到根节点渲染
const key = Portal.add(<Text>在 Provider 组件渲染</Text>)

// 移除渲染结果
Portal.remove(key)
```
