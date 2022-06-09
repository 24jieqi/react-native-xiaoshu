---
title: Selector 选择器
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 1
---

# Selector 选择器

> 类似 Web 端的 Select 组件，可以多选、单选。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/search.tsx"></code>

<code src="./__fixtures__/label.tsx"></code>

<code src="./__fixtures__/component.tsx"></code>

## API

### Selector

<API hideTitle src="./selector.tsx"></API>

### Selector.Text

<API hideTitle src="./selector-text.tsx"></API>

## 主题定制

| 名称                                | 默认值               | 描述 |
| :---------------------------------- | -------------------- | ---- |
| selector_min_height                 | 270                  | -    |
| selector_option_text_line_height    | 50                   | -    |
| selector_option_text_font_size      | `TOKENS.font_size_4` | -    |
| selector_option_text_color          | `TOKENS.gray_8`      | -    |
| selector_option_text_disabled_color | `TOKENS.gray_6`      | -    |
| selector_icon_selected_color        | `TOKENS.brand_6`     | -    |
| selector_body_padding_horizontal    | `TOKENS.space_3`     | -    |
