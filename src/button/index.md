---
title: Button 按钮
nav:
  title: 组件
group:
  title: 基础组件
  order: 1
---

# Button 按钮

> 按钮用于触发一个操作，如提交表单。

## 何时使用

标记了一个操作命令，响应用户点击行为，触发相应的业务逻辑。

小暑提供了五种（type）按钮。

- 主按钮（默认 `type="primary"`）：用于主行动点，一个操作区域只能有一个主按钮。
- 朦胧按钮（`type="hazy"`）：用于没有主次之分的一组行动点。
- 边框按钮（`type="outline"`）：常用于添加操作。
- 幽灵按钮（`type="ghost"`）：用于背景色比较复杂的地方。
- 链接按钮（`type="link"`）：一般用于链接，即导航至某位置。

以及四种状态

- 危险（`danger`）：删除/移动/修改权限等危险操作，一般需要二次确认。
- 禁用（`disabled`）：不可点击的样子，一般需要文案解释。
- 加载中（`loading`）：用于异步操作等待反馈的时候，也可以避免多次提交。
- 细边框（`hairline`）：适用于小按钮。

自定义样式

- 通过 `color` 属性改变按钮主要表现颜色（文案颜色、按钮背景色、按钮边框颜色）。
- 通过 `textColor` 属性改变文案颜色，受按钮类型影响，不一定适用所有类型按钮。
- 通过 `style`、`textStyle` 覆盖按钮不同区域的样式。
- 通过 `children` 自定义内部显示元素，优先级低于 `text` 属性。

## 代码演示

<code src="./__fixtures__/type.tsx"></code>

<code src="./__fixtures__/subtext.tsx"></code>

<code src="./__fixtures__/danger.tsx"></code>

<code src="./__fixtures__/hairline.tsx"></code>

<code src="./__fixtures__/disabled.tsx"></code>

<code src="./__fixtures__/loading.tsx"></code>

<code src="./__fixtures__/size.tsx"></code>

<code src="./__fixtures__/icon.tsx"></code>

<code src="./__fixtures__/option.tsx"></code>

<code src="./__fixtures__/option-group.tsx"></code>

## API

### Button

### Button.Option

### Button.OptionGroup

## 主题定制

| 名称                                | 默认值                   | 描述 |
| :---------------------------------- | ------------------------ | ---- |
| button_xl_height                    | 52                       | -    |
| button_xl_font_size                 | 18                       | -    |
| button_xl_loading_size              | 18                       | -    |
| button_l_height                     | 44                       | -    |
| button_l_font_size                  | 16                       | -    |
| button_l_loading_size               | 16                       | -    |
| button_m_height                     | 40                       | -    |
| button_m_font_size                  | 15                       | -    |
| button_m_loading_size               | 15                       | -    |
| button_s_height                     | 32                       | -    |
| button_s_font_size                  | 14                       | -    |
| button_s_loading_size               | 14                       | -    |
| button_xs_height                    | 24                       | -    |
| button_xs_font_size                 | 14                       | -    |
| button_xs_loading_size              | 14                       | -    |
| button_xs_padding_horizontal        | `TOKENS.space_1`         | -    |
| button_padding_horizontal           | `TOKENS.space_2`         | -    |
| button_border_width                 | 1                        | -    |
| button_border_color                 | `TOKENS.gray_5`          | -    |
| button_border_radius                | `TOKENS.border_radius_s` | -    |
| button_active_opacity               | `TOKENS.opacity_60`      | -    |
| button_disabled_opacity             | `TOKENS.opacity_40`      | -    |
| button_loading_opacity              | `TOKENS.opacity_40`      | -    |
| button_primary_color                | `TOKENS.brand_6`         | -    |
| button_danger_color                 | `TOKENS.red_6`           | -    |
| button_ghost_background_color       | 'transparent'            | -    |
| button_hazy_lightness               | 95                       | -    |
| button_icon_gap                     | `TOKENS.space_1`         | -    |
| button_subtext_line_height          | 20                       | -    |
| button_subtext_font_size            | 13                       | -    |
| button_subtext_opacity              | 0.7                      | -    |
| button_option_min_width             | 62                       | -    |
| button_option_badge_margin_left     | `TOKENS.space_1`         | -    |
| button_option_badge_text_font_size  | `TOKENS.font_size_3`     | -    |
| button_option_badge_text_color      | `TOKENS.red_6`           | -    |
| button_option_disabled_border_color | `TOKENS.gray_4`          | -    |
| button_option_disabled_text_color   | `TOKENS.gray_5`          | -    |
