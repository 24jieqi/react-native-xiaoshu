---
title: Selector 选择器
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# Selector 选择器

> 类似 Web 端的 Select 组件，可以多选、单选。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/search.tsx"></code>

<code src="./__fixtures__/label.tsx"></code>

<code src="./__fixtures__/component.tsx"></code>

## API

### Selector.Component

### Selector.SelectorComponent

`Selector.SelectorComponent` 与 `Selector.Component` 属性相同，`Selector.SelectorComponent` 被 `Portal` 组件包裹，在根节点渲染。

去掉 Popup 公共属性的 closeOnPressOverlay、onPressOverlay。去掉 TreeProps 的 value、defaultValue、options、onChange。

| 属性名              | 描述                   | 类型                                                                   | 默认值               | 版本 |
| :------------------ | ---------------------- | ---------------------------------------------------------------------- | -------------------- | ---- |
| value               | 受控模式所显示的值     | `SelectorValue\|SelectorValue[]`                                       | -                    | -    |
| defaultValue        | 非受控模式的初始值     | `SelectorValue\|SelectorValue[]`                                       | -                    | -    |
| onChange            | 变化时的回调函数       | `(v:SelectorValue[]\|SelectorValue, options:SelectorOption[]) => void` | -                    | -    |
| options             | 候选项数组             | `SelectorOption[]`                                                     | -                    | -    |
| closeOnPressOverlay | 点击遮罩层关闭         | `boolean`                                                              | `true`               | -    |
| title               | 标题                   | `React.ReactNode`                                                      | `'请选择'`           | -    |
| showClose           | 是否显示关闭图标       | `boolean`                                                              | `true`               | -    |
| onChangeImmediate   | 当值变化的时候立即响应 | `(v:SelectorValue[]\|SelectorValue) => SelectorValue[]\|SelectorValue` | -                    | -    |
| safeAreaInsetTop    | 顶部安全高度           | `number`                                                               | `safeAreaInsets.top` | -    |
| confirmButtonText   | 确定按钮文案           | `string`                                                               | `'确定'`             | -    |

### Selector

去掉 SelectorProps 的 visible、onRequestClose。

| 属性名       | 描述                                                      | 类型                                                                                            | 默认值 | 版本 |
| :----------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------ | ---- |
| beforeChange | 变化前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `(value:SelectorValue\|SelectorValue[], options:SelectorOption[]) => boolean\|Promise<boolean>` | -      | -    |

### Selector.Text

| 属性名         | 描述             | 类型                                                      | 默认值     | 版本 |
| :------------- | ---------------- | --------------------------------------------------------- | ---------- | ---- |
| title          | 标题             | `React.ReactNode`                                         | `'请选择'` | -    |
| value          | 当前选中的值     | `SelectorValue`                                           | -          | -    |
| options        | 候选项数组       | `SelectorOption[]`                                        | -          | -    |
| onChange       | 变化时的回调函数 | `(value:SelectorValue, options:SelectorOption[]) => void` | -          | -    |
| arrowDirection | 箭头方向         | `'left'\|'up'\|'right'\|'down'`                           | `'right'`  | -    |
| divider        | 显示分割线       | `boolean`                                                 | `true`     | -    |
| head           | 左侧是否有间距   | `boolean`                                                 | `true`     | -    |

## 主题定制

| 名称 | 默认值 | 描述 |
| :--- | ------ | ---- |
