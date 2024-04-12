---
title: StepSelector 步骤选择器
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# StepSelector 步骤选择器 <Badge>0.2.9+</Badge>

> 可以用作层级选择，例如组织层级、省市区

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Selector.Component

### Selector.StepSelectorComponent

`Selector.Component` 与 `Selector.StepSelectorComponent` 属性相同，`Selector.Component` 被 `Portal` 组件包裹，在根节点渲染。

继承 Popup 公共属性。

| 属性名           | 描述                       | 类型                                                            | 默认值               | 版本 |
| :--------------- | -------------------------- | --------------------------------------------------------------- | -------------------- | ---- |
| title            | 标题                       | `React.ReactNode`                                               | `'请选择'`           | -    |
| safeAreaInsetTop | 顶部安全高度               | `number`                                                        | `safeAreaInsets.top` | -    |
| lazyRender       | 是否在显示弹层时才渲染节点 | `boolean`                                                       | `true`               | -    |
| round            | 是否显示圆角               | `boolean`                                                       | `true`               | -    |
| value            | 受控模式所显示的值         | `T`                                                             | -                    | -    |
| defaultValue     | 非受控模式的初始值         | `T`                                                             | -                    | -    |
| onChange         | 变化时的回调函数           | `(v:T[], o:OptionData<T>[], isEnd?:boolean) => void`            | -                    | -    |
| onPressClose     | 点击关闭按钮               | `() => void`                                                    | -                    | -    |
| request          | 请求数据                   | `(parentId:T, index:number) => Promise<RequestResponseData<T>>` | -                    | -    |
| loading          | 自定义 loading             | `React.ReactElement\|null`                                      | -                    | -    |

### Selector

去掉 StepSelectorProps 的 value、onChange、onPressClose、visible、onRequestClose。

| 属性名      | 描述                                                                   | 类型                                                                      | 默认值 | 版本 |
| :---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------ | ---- |
| beforeClose | 当选择到最末端时触发，返回 false 可阻止关闭，支持返回 Promise          | `(v:T[], o:OptionData<T>[], isEnd?:boolean) => boolean\|Promise<boolean>` | -      | -    |
| onConfirm   | 类似确定的回调，当选择到最末端时触发，部分业务需要把选项其他值提取出来 | `(v:T[], o:OptionData<T>[], isEnd?:boolean) => void`                      | -      | -    |
| onCancel    | 点击取消                                                               | `() => void`                                                              | -      | -    |

## 主题定制

| 名称                                      | 默认值               | 描述 |
| :---------------------------------------- | -------------------- | ---- |
| step_selector_active_color                | `TOKENS.brand_6`     | -    |
| step_selector_option_index_width          | `TOKENS.space_6`     | -    |
| step_selector_option_index_text_color     | `TOKENS.gray_6`      | -    |
| step_selector_option_index_text_font_size | `TOKENS.font_size_5` | -    |
