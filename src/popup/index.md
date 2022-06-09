---
title: Popup 弹出层
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 0
---

# Popup 弹出层

> 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Popup

`Popup.Component` 属性相同，自带 `Portal` 组件包裹。

### Popup.Component

<API hideTitle src="./popup.tsx"></API>

### Popup.Header

<API hideTitle src="./popup-header.tsx"></API>

### Popup.Page <Badge>0.2.47+</Badge>

<API hideTitle src="./popup-page.tsx"></API>

## 主题定制

| 名称                         | 默认值                    | 描述 |
| :--------------------------- | ------------------------- | ---- |
| popup_background_color       | `TOKENS.white`            | -    |
| popup_round_border_radius    | `TOKENS.border_radius_xl` | -    |
| popup_close_icon_size        | 24                        | -    |
| popup_close_icon_color       | `TOKENS.gray_7`           | -    |
| popup_close_icon_margin_left | `TOKENS.space_2`          | -    |
