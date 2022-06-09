---
title: Button 按钮
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 0
---

# Button 按钮

> 按钮用于触发一个操作，如提交表单。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在小暑中我们提供了五中按钮。

- 主按钮（默认）：用于主行动点，一个操作区域只能有一个主按钮。
- 朦胧按钮：用于没有主次之分的一组行动点。
- 边框按钮：常用于添加操作。
- 幽灵按钮：用于背景色比较复杂的地方。
- 链接按钮：一般用于链接，即导航至某位置。

以及四种状态

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。
- 细边框：适用于小按钮。

自定义样式

- 通过 `color` 属性改变按钮主要表现颜色。
- 通过 `textColor` 属性改变文案颜色，受类型约束，不一定适用。
- 通过 `style`、`textStyle` 覆盖按钮样式。
- 通过组件 children 自定义内部显示元素。

## 代码演示

<code src="./__fixtures__/type.tsx"></code>

<code src="./__fixtures__/danger.tsx"></code>

<code src="./__fixtures__/hairline.tsx"></code>

<code src="./__fixtures__/disabled.tsx"></code>

<code src="./__fixtures__/loading.tsx"></code>

<code src="./__fixtures__/size.tsx"></code>

<code src="./__fixtures__/icon.tsx"></code>

## API

<API hideTitle src="./button.tsx"></API>

## 主题定制

| 名称                          | 默认值                   | 描述 |
| :---------------------------- | ------------------------ | ---- |
| button_xl_height              | 52                       | -    |
| button_xl_font_size           | 18                       | -    |
| button_xl_loading_size        | 20                       | -    |
| button_l_height               | 44                       | -    |
| button_l_font_size            | 16                       | -    |
| button_l_loading_size         | 28                       | -    |
| button_m_height               | 40                       | -    |
| button_m_font_size            | 15                       | -    |
| button_m_loading_size         | 16                       | -    |
| button_s_height               | 32                       | -    |
| button_s_font_size            | 14                       | -    |
| button_s_loading_size         | 16                       | -    |
| button_xs_height              | 24                       | -    |
| button_xs_font_size           | 14                       | -    |
| button_xs_loading_size        | 16                       | -    |
| button_xs_padding_horizontal  | `TOKENS.space_1`         | -    |
| button_padding_horizontal     | `TOKENS.space_2`         | -    |
| button_border_width           | 1                        | -    |
| button_border_color           | `TOKENS.gray_5`          | -    |
| button_border_radius          | `TOKENS.border_radius_s` | -    |
| button_active_opacity         | `TOKENS.opacity_60`      | -    |
| button_disabled_opacity       | `TOKENS.opacity_60`      | -    |
| button_loading_opacity        | `TOKENS.opacity_60`      | -    |
| button_primary_color          | `TOKENS.brand_6`         | -    |
| button_danger_color           | `TOKENS.red_6`           | -    |
| button_ghost_background_color | 'transparent'            | -    |
| button_hazy_lightness         | 95                       | -    |
| button_icon_gap               | `TOKENS.space_1`         | -    |
