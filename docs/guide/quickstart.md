---
title: 快速上手
order: 1
nav:
  title: 指南
  order: 0
group:
  title: 开发指南
  path: /guide
---

> 通过本章节你可以了解到 `react-native-xiaoshu` 的安装方法和基本使用姿势。

## 安装

### 通过 npm 安装

在现有项目中使用 `react-native-xiaoshu` 时，可以通过 npm 或 yarn 进行安装

```bash
## npm
npm i react-native-xiaoshu

## yarn
yarn add react-native-xiaoshu

## ios 依赖
cd ios && pod install
```

## 引入组件

### 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

```bash
# 安装插件
yarn add babel-plugin-import --dev
```

在 babel.config.js 中添加配置

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "react-native-xiaoshu"
      }
    ]
  ]
}
```

### 使用组件

```tsx | pure
import React from 'react'
import { Provider, Button } from 'react-native-xiaoshu'

const App: React.FC = () => {
  return (
    <Provider>
      <Button text="普通按钮" type="primary" />
    </Provider>
  )
}
```

## 常见问题

暂无
