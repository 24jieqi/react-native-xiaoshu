---
title: Card 卡片
nav:
  title: 组件

group:
  title: 展示组件
  path: /show
  order: 4
---

# Card 卡片

> 通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落。

- 列表使用 `size="s"`，并且通过 titleLeftExtra 展示分类信息，配合 footer 呈现更多内容
- 详情页采用默认尺寸 `size="m"`，配合 Space、Collapse 组件完成需求

## 元素结构

```bash
|-- View  ## style
|--|-- View  ## headerStyle
|--|--|-- View  ## titleStyle
|--|--|--|-- titleLeftExtra  ## 属性 titleLeftExtra
|--|--|--|-- Text  ## titleTextStyle，或自定义 title
|--|--|-- extra  ## 属性 extra
|--|-- Divider  ## 属性 headerDivider 控制是否显示
|--|-- CardBody  ## bodyStyle
|--|--|-- Skeleton | children
|--|-- Divider  ## 属性 footerDivider 控制是否显示
|--|-- View  ## footerStyle
|--|--|-- Text  ## footerTextStyle，或自定义 footer
```

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/loading.tsx"></code>

<code src="./__fixtures__/square.tsx"></code>

## API

## 主题定制

| 名称                           | 默认值                   | 描述 |
| :----------------------------- | ------------------------ | ---- |
| card_background_color          | `TOKENS.white`           | -    |
| card_padding                   | `TOKENS.space_3`         | -    |
| card_header_gap                | `TOKENS.space_2`         | -    |
| card_m_header_height           | 50                       | -    |
| card_m_header_text_font_size   | `TOKENS.font_size_7`     | -    |
| card_m_header_text_line_height | `TOKENS.line_height_2`   | -    |
| card_m_border_radius           | `TOKENS.border_radius_m` | -    |
| card_s_header_height           | 40                       | -    |
| card_s_header_text_font_size   | `TOKENS.font_size_5`     | -    |
| card_s_header_text_line_height | `TOKENS.line_height_1`   | -    |
| card_s_border_radius           | `TOKENS.border_radius_s` | -    |
| card_header_text_color         | `TOKENS.gray_8`          | -    |
| card_footer_text_font_size     | `TOKENS.font_size_3`     | -    |
| card_footer_text_color         | `TOKENS.gray_7`          | -    |
| card_footer_text_line_height   | 20                       | -    |
| card_footer_padding_vertical   | `TOKENS.space_2`         | -    |
