---
title: Divider 分割线
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Divider 分割线

> 用于将内容分隔为多个区域。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割。

React Native 在 iOS 端的 borderStyle 暂时不支持虚线，使用 SVG 的方式绘制。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名          | 描述                                                       | 类型                        | 默认值         | 版本 |
| :-------------- | ---------------------------------------------------------- | --------------------------- | -------------- | ---- |
| textStyle       | 文字样式                                                   | `StyleProp<TextStyle>`      | -              | -    |
| type            | 颜色模式                                                   | `'dark'\|'light'`           | `'light'`      | -    |
| direction       | 间距方向 `'vertical'\|'horizontal'`，vertical 只有线无文案 | `'vertical'\|'horizontal'`  | `'horizontal'` | -    |
| dashed          | 是否使用虚线                                               | `boolean`                   | -              | -    |
| color           | 自定义颜色                                                 | `ColorValue`                | -              | -    |
| contentPosition | 内容位置，可选值为 `'left'\|'center'\|'right'`             | `'left'\|'center'\|'right'` | `'center'`     | -    |

## 主题定制

| 名称                        | 默认值                 | 描述 |
| :-------------------------- | ---------------------- | ---- |
| divider_vertical_min_height | 12                     | -    |
| divider_color_dark          | `TOKENS.gray_4`        | -    |
| divider_color_light         | `TOKENS.gray_2`        | -    |
| divider_margin_horizontal   | `TOKENS.space_4`       | -    |
| divider_text_color          | `TOKENS.gray_8`        | -    |
| divider_font_size           | `TOKENS.font_size_4`   | -    |
| divider_line_height         | `TOKENS.line_height_2` | -    |
| divider_content_left_width  | '10%'                  | -    |
| divider_content_right_width | '10%'                  | -    |
