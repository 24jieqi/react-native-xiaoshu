---
title: Sidebar 侧边导航
nav:
  title: 组件
group:
  title: 导航组件
  order: 5
---

# Sidebar 侧边导航

> 垂直展示的导航栏，用于在不同的内容区域之间进行切换。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名             | 描述                                            | 类型                           | 默认值 | 版本 |
| :----------------- | ----------------------------------------------- | ------------------------------ | ------ | ---- |
| width              | 宽度                                            | `number`                       | `88`   | -    |
| loading            | 当选项还在加载中时，可以用 loading 展示一个占位 | `boolean`                      | -      | -    |
| options            | 选项                                            | `SidebarOption[]`              | -      | -    |
| activeValue        | 受控模式所显示的值                              | `SidebarValue`                 | -      | -    |
| defaultActiveValue | 非受控模式的初始值                              | `SidebarValue`                 | -      | -    |
| onChange           | 改变时的回调函数                                | `(value:SidebarValue) => void` | -      | -    |
| empty              | 空数据占位符                                    | `React.ReactNode`              | -      | -    |

## 主题定制

| 名称                                      | 默认值                   | 描述 |
| :---------------------------------------- | ------------------------ | ---- |
| sidebar_background_color                  | `TOKENS.white`           | -    |
| sidebar_item_background_color             | `TOKENS.gray_3`          | -    |
| sidebar_item_underlay_color               | `TOKENS.gray_4`          | -    |
| sidebar_item_padding_vertical             | `TOKENS.space_3`         | -    |
| sidebar_item_padding_horizontal           | `TOKENS.space_3`         | -    |
| sidebar_item_border_radius                | `TOKENS.border_radius_m` | -    |
| sidebar_item_bar_width                    | 3                        | -    |
| sidebar_item_bar_height                   | 26                       | -    |
| sidebar_item_text_line_height             | 20                       | -    |
| sidebar_item_text_font_size               | `TOKENS.font_size_3`     | -    |
| sidebar_item_bar_background_color         | `TOKENS.brand_6`         | -    |
| sidebar_item_active_text_color            | `TOKENS.gray_8`          | -    |
| sidebar_item_inactive_text_color          | `TOKENS.gray_7`          | -    |
| sidebar_item_disabled_inactive_text_color | `TOKENS.gray_5`          | -    |
