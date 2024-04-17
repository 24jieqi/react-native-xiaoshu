---
title: Empty 空元素
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Empty 空元素

> 空状态时的展示占位图。

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## 代码演示

> 文档上看不到 SVG 图标。

<code src="./__fixtures__/base.tsx"></code>
<code src="./__fixtures__/icon.tsx"></code>
<code src="./__fixtures__/custom.tsx"></code>

## API

| 属性名    | 描述               | 类型                   | 默认值       | 版本 |
| :-------- | ------------------ | ---------------------- | ------------ | ---- |
| style     | 最外层 View 的样式 | `StyleProp<ViewStyle>` | -            | -    |
| textStyle | 文案文字样式       | `StyleProp<TextStyle>` | -            | -    |
| iconStyle | 图标样式           | `StyleProp<ViewStyle>` | -            | -    |
| icon      | 自定义图标         | `React.ReactNode`      | -            | -    |
| text      | 空数据提示文案     | `React.ReactNode`      | `'暂无数据'` | -    |
| full      | 全屏填充           | `boolean`              | `false`      | -    |

## 主题定制

| 名称                     | 默认值                 | 描述 |
| :----------------------- | ---------------------- | ---- |
| empty_image_width        | 130                    | -    |
| empty_image_height       | 115                    | -    |
| empty_icon_margin_bottom | `TOKENS.space_2`       | -    |
| empty_text_color         | `TOKENS.gray_6`        | -    |
| empty_text_font_size     | `TOKENS.font_size_3`   | -    |
| empty_text_line_height   | `TOKENS.line_height_1` | -    |
