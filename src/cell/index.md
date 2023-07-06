---
title: Cell 单元格
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 0
---

# Cell 单元格

> 单元格为列表中的单个展示项。

## 何时使用

最基础的列表展示，可承载文字、输入框。

## 元素结构

```bash
## 最基础的元素结构
|-- TouchableHighlight  ## style
|--|-- View  ## innerStyle, marginHorizontal 左右边距
|--|--|-- 内容部分 上下、左右布局
|--|-- Divider  ## 属性 divider 控制是否显示，dividerLeftGap、dividerRightGap


## innerStyle 内部结构，左右布局
|-- View  ## innerStyle，左右布局 Flex 横向排版
|--|-- View  ## titleStyle，title 片区
|--|--|-- requiredJSX  ## 属性 required 控制是否显示
|--|--|-- titleExtra  ## 属性 titleExtra
|--|--|-- Text  ## titleTextStyle、titleTextNumberOfLines，或自定义 title
|--|-- View  ## valueStyle、center
|--|--|-- Text  ## valueTextStyle、textAlign、valueTextNumberOfLines，或自定义 value
|--|-- valueExtra  ## 属性 valueExtra
|--|-- linkJSX  ## 属性 isLink 控制是否显示

## innerStyle 内部结构，上下布局
|-- View  ## innerStyle，下上布局 Flex 竖向排版
|--|-- View  ## titleStyle，title 片区
|--|--|-- requiredJSX  ## 属性 required 控制是否显示
|--|--|-- titleExtra  ## 属性 titleExtra
|--|--|-- Text  ## titleTextStyle、titleTextNumberOfLines，或自定义 title
|--|-- View  ## contentStyle，相对于左右布局，上下布局在 value 片区套了一层 View
|--|--|-- View  ## valueStyle、center
|--|--|--|-- Text  ## valueTextStyle、textAlign、valueTextNumberOfLines，或自定义 value
|--|--|-- valueExtra  ## 属性 valueExtra
|--|--|-- linkJSX  ## 属性 isLink 控制是否显示
```

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/divider.tsx"></code>

<code src="./__fixtures__/layout.tsx"></code>

<code src="./__fixtures__/extra.tsx"></code>

<code src="./__fixtures__/group.tsx"></code>

## API

### Cell

<API hideTitle src="./cell.tsx"></API>

### Cell.Group

<API hideTitle src="./cell-group.tsx"></API>

## 主题定制

| 名称                                | 默认值                 | 描述 |
| :---------------------------------- | ---------------------- | ---- |
| cell_group_title_padding_horizontal | `TOKENS.space_3`       | -    |
| cell_group_title_padding_top        | `TOKENS.space_2`       | -    |
| cell_group_title_padding_bottom     | `TOKENS.space_2`       | -    |
| cell_group_title_color              | `TOKENS.gray_8`        | -    |
| cell_group_title_font_size          | `TOKENS.font_size_5`   | -    |
| cell_group_title_line_height        | 28                     | -    |
| cell_icon_size                      | `TOKENS.font_size_5`   | -    |
| cell_icon_color                     | `TOKENS.gray_6`        | -    |
| cell_active_color                   | `TOKENS.gray_1`        | -    |
| cell_font_size                      | `TOKENS.font_size_5`   | -    |
| cell_background_color               | `TOKENS.white`         | -    |
| cell_padding_vertical               | `TOKENS.space_3`       | -    |
| cell_padding_horizontal             | `TOKENS.space_3`       | -    |
| cell_mini_height                    | 50                     | -    |
| cell_title_text_color               | `TOKENS.gray_8`        | -    |
| cell_title_height                   | 32                     | -    |
| cell_title_line_height              | `TOKENS.line_height_1` | -    |
| cell_title_line_margin_right        | `TOKENS.space_2`       | -    |
| cell_value_min_width                | 100                    | -    |
| cell_value_text_color               | `TOKENS.gray_7`        | -    |
| cell_extra_text_color               | `TOKENS.gray_6`        | -    |
| cell_extra_text_font_size           | `TOKENS.font_size_3`   | -    |
| cell_extra_text_line_height         | 16                     | -    |
| cell_required_color                 | `TOKENS.red_6`         | -    |
| cell_required_width                 | `TOKENS.space_3`       | -    |
| cell_icon_link_margin_left          | `TOKENS.space_2`       | -    |
