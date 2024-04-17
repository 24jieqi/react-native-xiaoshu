---
title: ErrorBoundary 错误捕获
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# ErrorBoundary 错误捕获

> 一般用于应用根组件，捕获 React 内产生的问题。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名      | 描述                   | 类型                                                                         | 默认值                    | 版本 |
| :---------- | ---------------------- | ---------------------------------------------------------------------------- | ------------------------- | ---- |
| title       | 错误提示               | `string`                                                                     | `'加载失败，请稍后再试~'` | -    |
| reloadText  | 重新加载的文案         | `string`                                                                     | `'重新加载'`              | -    |
| onError     | 出错时的回调函数       | `(e:Error, info:ErrorInfo) => void`                                          | -                         | -    |
| renderError | 自定义渲染出错时的页面 | `(opt:{name:string, message:string, onReset:() => void}) => React.ReactNode` | -                         | -    |
