---
title: ButtonBar 按钮组
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# ButtonBar 按钮组

> 一组操作按钮。

## 何时使用

一般情况用于详情页底部操作按钮，或列表底部新增按钮。

该组件有两个使用方式。

- `buttons` 参数，内部通过 Boolean 过滤再渲染出按钮，通过 `count` 控制最大显示个数，超过就使用 ActionSheet 的方式交互。
- 嵌套子元素。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/buttons.tsx"></code>

<code src="./__fixtures__/confirm.tsx"></code>

## API

### ButtonBar

继承 BottomBarProps。

| 属性名    | 描述                       | 类型                                                                    | 默认值   | 版本 |
| :-------- | -------------------------- | ----------------------------------------------------------------------- | -------- | ---- |
| alone     | 单独一个按钮               | `boolean`                                                               | `false`  | -    |
| buttons   | 配置方式的按钮             | `Omit<ButtonProps, 'onPress'>&{hidden?:boolean, onPress?:() => void}[]` | `false`  | -    |
| count     | 配置方式的按钮最大显示个数 | `number`                                                                | `4`      | -    |
| moreText  | 更多按钮文案               | `更多`                                                                  | `'更多'` | -    |
| blankSize | 左右留白大小               | `BlankProps['size']`                                                    | `'m'`    | -    |

### ButtonBar.Confirm <Badge>0.3.9+</Badge>

去掉 ButtonBarProps 的 alone、buttons、count、moreText。

| 属性名 | 描述                     | 类型              | 默认值 | 版本 |
| :----- | ------------------------ | ----------------- | ------ | ---- |
| cancel | 取消按钮，可以是多个按钮 | `React.ReactNode` | -      | -    |

## 主题定制

| 名称                        | 默认值           | 描述 |
| :-------------------------- | ---------------- | ---- |
| button_bar_button_space     | `TOKENS.space_2` | -    |
| button_bar_button_min_width | 84               | -    |
