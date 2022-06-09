---
title: Divider 分割线
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 3
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

<API hideTitle src="./divider.tsx"></API>

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
