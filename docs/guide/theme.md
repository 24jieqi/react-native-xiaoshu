---
title: 🔨 定制主题
order: 2
nav:
  title: 指南
group:
  title: 开发指南
  path: /guide
---

> `小暑` 提供了一套默认主题，如果你想完全替换主题色或者其他样式，可以按照本文档进行主题定制。

<!-- ## 主题方案 -->

<!-- `小暑` 暂时用 context 方式把变量共享给各个组件，有考虑使用 [react-native-extended-stylesheet](https://github.com/vitalets/react-native-extended-stylesheet) 管理样式变量。 -->

<!-- ### context

**优势**

- 无其他依赖
- 有比较良好的代码提示

劣势

- 无法在非组件环境下使用
- 样式对象需要写在组件内部动态创建，感觉上有点糟糕 -->

<!-- ### react-native-extended-stylesheet

**优势**

- 运行时方案，变量可继承、同步修改
- 可以在非组件环境通过 ReactNativeExtendedStylesheet.value 获取配置的变量
- 样式可以写在组件外部

方式劣势

- 新增一个依赖
- ReactNativeExtendedStylesheet.create({}) 创建的样式集合变量在使用的时候没有提示，需要自己写一个声明，每次断言使用
- 已经不活跃了，详情请查看 [Is this repo active?](https://github.com/vitalets/react-native-extended-stylesheet/issues/154) -->

## 样式变量

每个组件文件夹内有 `style.ts`，`varCreator` 函数返回了可以自定义的变量，`styleCreator` 函数返回该组件所使用的的样式对象。

基础变量请参考 [design-tokens-bailu](./design-tokens)。

## 自定义主题

项目根组件引入小暑，设置需要自定义的变量值。

```tsx | pure
import React from 'react'
import { Provider, Button } from '@fruits-chain/react-native-xiaoshu'

const customThemeVar = {
  // 基础变量，
  brand_6: '#098',
  // 其他基础变量名参考「design-tokens-bailu」

  // 某个组件
  button_s_height: 28,
  // 具体组件变量名可以参考组件文档下方「主题定制」列表
}

const App: React.FC = () => {
  return (
    <Provider theme={customThemeVar}>
      <Button text="普通按钮" type="primary" />
    </Provider>
  )
}
```

### 使用组件的变量、样式

适合扩展组件时样式与 `小暑` 对齐。

```tsx | pure
import React from 'react'
import { Provider, Theme, Button } from '@fruits-chain/react-native-xiaoshu'

const CustomText: React.FC<{ text: string }> = ({ text }) => {
  const TOKENS = Theme.useThemeTokens()
  const CV_BUTTON = Theme.createVar(TOKENS, Button.varCreator)
  const STYLES_BUTTON = Theme.createStyle(CV, Button.styleCreator)

  return (
    <Text
      style={[
        STYLES_BUTTON.option_badge_text,
        {
          height: CV_BUTTON.button_s_height,
        },
      ]}>
      {text}
    </Text>
  )
}

const App: React.FC = () => {
  return (
    <Provider>
      <CustomText text="普通文字" />
    </Provider>
  )
}
```
