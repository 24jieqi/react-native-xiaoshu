---
title: ActionSheet 动作面板
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# ActionSheet 动作面板

> 底部弹起的模态面板，包含与当前情境相关的多个选项。

## 何时使用

一般用于从一组操作中选择一个执行。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/component.tsx"></code>

## API

### ActionSheet.Component

### ActionSheet.ActionSheetComponent

继承 Popup 公共属性。

| 属性名           | 描述                                     | 类型                                    | 默认值               | 版本 |
| :--------------- | ---------------------------------------- | --------------------------------------- | -------------------- | ---- |
| actions          | 面板选项列表                             | `Action[]`                              | -                    | -    |
| title            | 顶部标题                                 | `React.ReactNode`                       | -                    | -    |
| cancelText       | 取消按钮文字                             | `string`                                | -                    | -    |
| description      | 选项上方的描述信息                       | `React.ReactNode`                       | -                    | -    |
| safeAreaInsetTop | 顶部安全高度                             | `number`                                | `safeAreaInsets.top` | -    |
| round            | 是否显示圆角                             | `boolean`                               | `true`               | -    |
| lazyRender       | 是否在显示弹层时才渲染节点               | `boolean`                               | `true`               | -    |
| onCancel         | 点击取消按钮时触发                       | `() => void`                            | -                    | -    |
| onSelect         | 点击选项时触发，禁用或加载状态下不会触发 | `(action:Action, index:number) => void` | -                    | -    |

### ActionSheet

除去 ActionSheetProps 的 visible、actions、onCancel、onSelect、onRequestClose。

| 属性名      | 描述                                                      | 类型                                                                                   | 默认值 | 版本 |
| :---------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------ | ---- |
| actions     | 面板选项列表                                              | `(string\|Action)[]`                                                                   | -      | -    |
| beforeClose | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `(action:ActionSheetAction, item?:Action, index?:number) => boolean\|Promise<boolean>` | -      | -    |
| onResponse  | 触发了某个选项                                            | `(action:ActionSheetAction, item?:Action, index?:number) => void`                      | -      | -    |

## 主题定制

| 名称                                 | 默认值                 | 描述 |
| :----------------------------------- | ---------------------- | ---- |
| action_sheet_description_color       | `TOKENS.gray_7`        | -    |
| action_sheet_description_font_size   | `TOKENS.font_size_3`   | -    |
| action_sheet_description_line_height | `TOKENS.line_height_1` | -    |
| action_sheet_text_color              | `TOKENS.gray_8`        | -    |
| action_sheet_text_font_size          | `TOKENS.font_size_5`   | -    |
| action_sheet_cancel_padding_top      | `TOKENS.space_2`       | -    |
| action_sheet_cancel_padding_color    | `TOKENS.gray_2`        | -    |
