---
title: Dialog 对话框
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# Dialog 对话框

> 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Dialog` 在当前页面正中打开一个浮层，承载相应的操作。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/input.tsx"></code>

<code src="./__fixtures__/other.tsx"></code>

<code src="./__fixtures__/keyboard.tsx"></code>

## API

### Dialog

### Dialog.input

### Dialog.Component

### Dialog.Keyboard <Badge>0.2.48+</Badge>

### Dialog.KeyboardComponent <Badge>0.2.48+</Badge>

`Dialog.Component`、`Dialog.Keyboard`、`Dialog.KeyboardComponent` 三个组件接口一致。

`Dialog.KeyboardComponent` 内部没有嵌套 `Portal`。

> `Dialog.Keyboard`、`Dialog.KeyboardComponent` 在 `Dialog` 添加键盘出现、消失事件监听，键盘出现时整个对话框距离顶部一个安全距离。

## 主题定制

| 名称                              | 默认值                           | 描述 |
| :-------------------------------- | -------------------------------- | ---- |
| dialog_width                      | 300                              | -    |
| dialog_transition                 | `TOKENS.animation_duration_base` | -    |
| dialog_border_radius              | `TOKENS.border_radius_xl`        | -    |
| dialog_background_color           | `TOKENS.white`                   | -    |
| dialog_close_color                | `TOKENS.gray_8`                  | -    |
| dialog_close_size                 | 20                               | -    |
| dialog_header_font_weight         | 'bold'                           | -    |
| dialog_header_line_height         | `TOKENS.line_height_3`           | -    |
| dialog_header_padding_top         | `TOKENS.space_6`                 | -    |
| dialog_header_padding_bottom      | `TOKENS.space_4`                 | -    |
| dialog_header_font_size           | `TOKENS.font_size_7`             | -    |
| dialog_header_color               | `TOKENS.gray_8`                  | -    |
| dialog_message_padding_horizontal | `TOKENS.space_6`                 | -    |
| dialog_message_font_size          | `TOKENS.font_size_5`             | -    |
| dialog_message_line_height        | `TOKENS.line_height_1`           | -    |
| dialog_message_text_color         | `TOKENS.gray_7`                  | -    |
| dialog_footer_margin_top          | `TOKENS.space_4`                 | -    |
| dialog_footer_divider_color       | `TOKENS.gray_4`                  | -    |
| dialog_confirm_button_text_color  | `TOKENS.brand_6`                 | -    |
| dialog_cancel_button_text_color   | `TOKENS.gray_8`                  | -    |
| dialog_input_gap                  | `TOKENS.space_4`                 | -    |
