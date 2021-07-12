---
title: Portal 传送门
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 0
---

## Portal 传送门

代码来自 [react-native-paper](https://github.com/callstack/react-native-paper)，它的[文档](https://callstack.github.io/react-native-paper/portal.html)

> 注意在应用根组件使用 `Provider` 包裹应用

内部维护一个全局/放置根组件的组件列表，每个组件对应一个 key。

`portal-manager` 对组件队列动态渲染。

`portal-consumer` 把 `Portal` 内部的组件动态注入到队列中。

`portal-host` 统一的内部 `Provider`。

`@ant-design/react-native` 在此基础上扩展出一个两个静态方法，通过事件的方式动态注入组件。
