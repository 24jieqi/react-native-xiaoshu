---
title: Empty 空元素
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 3
---

# Empty 空元素

> 空状态时的展示占位图。

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

<API hideTitle src="./empty.tsx"></API>

## 主题定制

| 名称                     | 默认值                 | 描述 |
| :----------------------- | ---------------------- | ---- |
| empty_image_width        | 130                    | -    |
| empty_image_height       | 115                    | -    |
| empty_icon_margin_bottom | `TOKENS.space_2`       | -    |
| empty_text_color         | `TOKENS.gray_6`        | -    |
| empty_text_font_size     | `TOKENS.font_size_3`   | -    |
| empty_text_line_height   | `TOKENS.line_height_1` | -    |
