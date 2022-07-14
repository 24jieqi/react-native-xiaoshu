---
title: 🎬 如何创作
order: 6
nav:
  title: 指南
group:
  title: 开发指南
  path: /guide
---

# 如何创作

## 文件夹约定

```bash
|-- button
|--|-- __fixtures__
|--|--|-- basic.tsx  ## App 预览的统一入口
|--|--|-- base.tsx  ## 按钮 size 属性的演示代码
|--|-- button.tsx  ## 组件实现代码
|--|-- index.ts  ## 统一导出
|--|-- index.md  ## 在线文档入口页面
|--|-- interface.ts  ## 组件对外的接口
|--|-- style.ts  ## 组件样式文件
```

## 开始创作

参考 `文件夹约定` 创建文件夹、文件，例如准备做一个 `Preview` 组件。

### style.ts

```ts | pure
// preview/style.ts

import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    // 命名规则为`组件名_模块/区域/基础组件名_样式属性`（多个单词下划线链接）
    // 类似 BEM 命名风格
    preview_width: 100,
    preview_height: 300,
    preview_padding_top: TOKENS.space_2,
    preview_header_text_color: TOKENS.brand_6,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    // 命名规则为多个单词下划线链接
    // 如果某些组件具有 size 属性可以直接拼接字符串的方式，例如 size: 's'|'m'|'l'
    // const previewSizeStyle = STYLES[`preview_${size}`]，size 有类型可以自动推导出 preview_s、preview_m、preview_l
    // previewSizeStyle 也就具有类型，而不是 any
    preview: {
      width: cv.preview_width,
      height: cv.preview_height,
      paddingTop: cv_preview_padding_top,
    },

    preview_header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    preview_header_text: {
      color: cv.preview_header_text_color,
    },
  })
}
```

### interface.ts

```ts | pure
// preview/interface.ts
// Preview 假设是对 View 组件进行扩展，继承 View 组件所有属性，额外扩展个性属性，目的是保留一些原生组件的使用方式

import type { ViewProps, StyleProp, ViewStyle, TextStyle } from 'react-native'

export interface PreviewProps extends ViewProps {
  // 对于标题，可以是简单的字符串、数字，也当允许业务方自定义（简单的样式覆盖无法满足要求，或许要改变布局）
  /**
   * 标题名称
   */
  title?: React.ReactNode

  // 除了标题，可能还会有其他额外的元素
  /**
   * 头部右侧自定义内容
   */
  extra?: React.ReactNode

  // 通常头部标题都会包裹在一个 View 内部
  // |-- View
  // |--|-- Text
  // |--|--|-- {title}
  // |--|-- {extra}
  //
  /**
   * 自定义样式
   */
  titleStyle?: StyleProp<ViewStyle>

  /**
   * 分组名自定义文字样式
   */
  titleTextStyle?: StyleProp<TextStyle>
}
```

### preview.tsx

```tsx | pure
// preview/preview.tsx

import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { renderTextLikeJSX } from '../helpers'
import Theme from '../theme'

// 假设需要用到其他组件变量、样式
import { varCreator as varCreatorBlank } from '../blank/style'

import type { PreviewProps } from './interface'
import { varCreator, styleCreator } from './style'

const Preview: React.FC<PreviewProps> = ({
  title,
  extra,
  titleStyle,
  titleTextStyle,

  // @types/react 18 以后，FC 不再带 children，需要使用 React.PropsWithChildren<PreviewProps>
  // PreviewProps 继承 ViewProps 就不需要额外声明
  children,
  style,
  ...restProps
}) => {
  // 首先把样式相关变量创建好
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const CV_BLANK = Theme.createVar(TOKENS, varCreatorBlank)
  const STYLES = Theme.createStyle(CV, styleCreator)

  console.log(CV_BLANK.blank_size_m)

  // title 部分
  const titleJSX = renderTextLikeJSX(
    title,
    [STYLES.preview_header_text, titleTextStyle],
    {
      // 如果需要绑定点击事件
      onPress: () => {},
    },
  )

  return (
    <View
      {...restProps}
      style={style ? [STYLES.preview, style] : STYLES.preview}>
      {titleJSX || !isNil(extra) ? (
        <View style={STYLES.preview_header}>
          {titleJSX}
          {extra}
        </View>
      ) : null}

      {children}
    </View>
  )
}

export default memo(Preview)
```

### index.ts

```ts | pure
// preview/index.ts

import { attachPropertiesToComponent } from '../helpers'

import Preview from './preview'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Preview, {
  varCreator,
  styleCreator,
})
```

### basic.tsx

写 DEMO 前需要把组件在 `src/index.ts` 文件内向外导出。

```ts | pure
// src/index.ts

export type { PreviewProps } from './preview/interface'
export { default as Preview } from './preview'
```

```tsx | pure
// preview/__fixtures__/basic.tsx

import React from 'react'
import { Text, ScrollView } from 'react-native'
import { Preview, Space } from '@fruits-chain/react-native-xiaoshu'

const BasicPreview: React.FC = () => {
  return (
    <ScrollView>
      <Space>
        <Preview>
          <Text>没有 title</Text>
        </Preview>

        <Preview title="字符串">
          <Text>字符串 title</Text>
        </Preview>

        <Preview title={<Text>自定义</Text>}>
          <Text>自定义 title</Text>
        </Preview>
      </Space>
    </ScrollView>
  )
}

export default BasicPreview
```

在 `demo` App 中引入预览，配置入口

- `demo/routes/demo-config.tsx` 配置具体路由
- `demo/pages/demo/demo.tsx` 添加入口
