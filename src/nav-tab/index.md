---
title: NavTab 导航标签栏
nav:
  title: 组件
group:
  title: 导航组件
  order: 5
---

# NavTab 导航标签栏

> 为页面提供导航切换功能，常用于页面顶部。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名       | 描述               | 类型                | 默认值 | 版本 |
| :----------- | ------------------ | ------------------- | ------ | ---- |
| value        | 受控模式所显示的值 | `T`                 | -      | -    |
| defaultValue | 非受控模式的初始值 | `T`                 | -      | -    |
| onChange     | 改变时的回调函数   | `(value:T) => void` | -      | -    |
| options      | tab 数据           | `TabValue<T>[]`     | -      | -    |

## 主题定制

| 名称                                 | 默认值                   | 描述 |
| :----------------------------------- | ------------------------ | ---- |
| nav_tab_background_color             | `TOKENS.gray_3`          | -    |
| nav_tab_padding_vertical             | 2                        | -    |
| nav_tab_padding_horizontal           | 2                        | -    |
| nav_tab_padding_border_radius        | `TOKENS.border_radius_s` | -    |
| nav_tab_height                       | 32                       | -    |
| nav_tab_item_min_width               | 54                       | -    |
| nav_tab_item_active_background_color | `TOKENS.white`           | -    |
| nav_tab_item_text_font_size          | `TOKENS.font_size_4`     | -    |
| nav_tab_item_text_line_height        | `TOKENS.line_height_1`   | -    |
| nav_tab_item_text_padding_vertical   | 3                        | -    |
| nav_tab_item_text_padding_horizontal | 12                       | -    |
| nav_tab_item_text_color              | `TOKENS.gray_7`          | -    |
| nav_tab_item_text_active_color       | `TOKENS.gray_8`          | -    |
