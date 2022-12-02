---
title: Dropdown 下拉菜单
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Dropdown 下拉菜单

> 向下弹出的菜单列表。

## 何时使用

适用于列表顶部、底部筛选条件。

## 注意

组件嵌套到 `ScrollView` 组件中，iOS 用户点击到了状态栏会触发滚动区域回到顶部，可以通过 `ScrollView` 组件的 `scrollsToTop` 阻止

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Dropdown

<API hideTitle src="./dropdown-menu.tsx"></API>

### Dropdown.Item

- `options` 支持树结构 <Badge>0.2.13+</Badge>

<API hideTitle src="./dropdown-item.tsx">

### Dropdown.Text <Badge>0.3.9+</Badge>

<API hideTitle src="./dropdown-multiple.tsx">

### Dropdown.Text <Badge>0.2.42+</Badge>

<API hideTitle src="./dropdown-text.tsx">

### Dropdown.Popup <Badge>0.2.42+</Badge>

<API hideTitle src="./dropdown-popup.tsx">

## 主题定制

| 名称                          | 默认值               | 描述 |
| :---------------------------- | -------------------- | ---- |
| dropdown_active_color         | `TOKENS.brand_6`     | -    |
| dropdown_background_color     | `TOKENS.white`       | -    |
| dropdown_menu_height          | 40                   | -    |
| dropdown_text_font_size       | `TOKENS.font_size_4` | -    |
| dropdown_text_color           | `TOKENS.gray_7`      | -    |
| dropdown_text_disabled_color  | `TOKENS.gray_6`      | -    |
| dropdown_text_margin_right    | 4                    | -    |
| dropdown_text_icon_size       | 12                   | -    |
| dropdown_text_icon_color      | `TOKENS.gray_6`      | -    |
| dropdown_badge_color          | `TOKENS.red_6`       | -    |
| dropdown_badge_text_font_size | `TOKENS.font_size_3` | -    |
| dropdown_badge_dot_size       | 8                    | -    |
