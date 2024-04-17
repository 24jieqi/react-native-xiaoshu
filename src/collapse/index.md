---
title: Collapse 折叠面板
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Collapse 折叠面板

> 点击面板的标题可以展开或收缩其内容。

## 何时使用

对复杂区域进行分组和隐藏，保持页面的整洁。

适用于受控、非受控两种方式。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名           | 描述                                                 | 类型                                                              | 默认值                      | 版本 |
| :--------------- | ---------------------------------------------------- | ----------------------------------------------------------------- | --------------------------- | ---- |
| title            | 标题                                                 | `React.ReactNode`                                                 | -                           | -    |
| titleStyle       | 标题样式                                             | `StyleProp<ViewStyle>`                                            | -                           | -    |
| titleTextStyle   | 标题文字样式                                         | `StyleProp<TextStyle>`                                            | -                           | -    |
| iconStyle        | 标题图标样式                                         | `StyleProp<ViewStyle>`                                            | -                           | -    |
| iconColor        | 标题图标颜色                                         | `ColorValue`                                                      | `collapse_title_icon_color` | -    |
| iconSize         | 标题图标大小                                         | `number`                                                          | `collapse_title_icon_size`  | -    |
| bodyStyle        | 子元素/内容布局样式                                  | `StyleProp<ViewStyle>`                                            | -                           | -    |
| renderTitle      | 自定义渲染标题                                       | `(collapse:boolean) => React.ReactNode`                           | -                           | -    |
| renderTitleExtra | 自定义渲染标题右侧                                   | `(collapse:boolean, arrowJSX:React.ReactNode) => React.ReactNode` | -                           | -    |
| renderBody       | 自定义渲染内容，替换 children                        | `() => React.ReactNode`                                           | -                           | -    |
| collapse         | 受控模式所呈现的展开、收起                           | `boolean`                                                         | -                           | -    |
| defaultCollapse  | 非受控模式初始的展开、收起                           | `boolean`                                                         | -                           | -    |
| onCollapse       | 展开、收起变化时的回调函数                           | `(collapse:boolean) => void`                                      | -                           | -    |
| type             | 模式、场景                                           | `'cell'\|'card'`                                                  | `'cell'`                    | -    |
| onAnimationEnd   | 动画结束的回调，注意组件渲染问题，会存在多次回调     | `(collapse:boolean) => void`                                      | -                           | -    |
| bodyPadding      | 内容区域是否有内边距                                 | `boolean`                                                         | `true`                      | -    |
| headerDivider    | 头部区域是否有分割线                                 | `boolean`                                                         | `true`                      | -    |
| bodyDivider      | 内容区域是否有分割线，cell 默认 true，card 默认false | `boolean`                                                         | -                           | -    |
| lazyRender       | 是否在展开的时候才渲染子元素                         | `boolean`                                                         | `true`                      | -    |
| square           | 是否为方形，仅对 card 类型有效                       | `boolean`                                                         | `true`                      | -    |

## 主题定制

| 名称                         | 默认值                           | 描述 |
| :--------------------------- | -------------------------------- | ---- |
| collapse_transition_duration | `TOKENS.animation_duration_base` | -    |
| collapse_background_color    | `TOKENS.white`                   | -    |
| collapse_icon_color          | `TOKENS.gray_6`                  | -    |
| collapse_icon_size           | `TOKENS.font_size_5`             | -    |
