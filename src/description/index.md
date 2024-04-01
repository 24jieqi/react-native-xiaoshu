---
title: Description 描述列表
nav:
  title: 组件

group:
  title: 展示组件
  path: /show
  order: 4
---

# Description 描述列表

> 成组展示多个只读字段。

`Description` 渲染优先级顺序

- `children` 是 `ReactElement`
- `text` 非 null、undefined 的字符串
- `children`

## 何时使用

常见于详情页的信息展示。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/size.tsx"></code>

<code src="./__fixtures__/other.tsx"></code>

<code src="./__fixtures__/empty.tsx"></code>

## API

### Description

### Description.Group

### Description.Thousand

### Description.Date

### Description.DateRange

## 主题定制

| 名称                      | 默认值                 | 描述 |
| :------------------------ | ---------------------- | ---- |
| description_l_font_size   | `TOKENS.font_size_5`   | -    |
| description_l_line_height | `TOKENS.line_height_4` | -    |
| description_m_font_size   | `TOKENS.font_size_4`   | -    |
| description_m_line_height | `TOKENS.line_height_2` | -    |
| description_s_font_size   | `TOKENS.font_size_4`   | -    |
| description_s_line_height | `TOKENS.line_height_1` | -    |
| description_label_color   | `TOKENS.gray_7`        | -    |
| description_text_color    | `TOKENS.gray_8`        | -    |
