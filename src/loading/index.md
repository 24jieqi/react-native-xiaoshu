---
title: Loading 加载
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# Loading 加载

> 加载图标，用于表示加载中的过渡状态。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Loading

| 属性名      | 描述                                  | 类型                                                                     | 默认值       | 版本 |
| :---------- | ------------------------------------- | ------------------------------------------------------------------------ | ------------ | ---- |
| textStyle   | 文案的样式                            | `StyleProp<TextStyle>`                                                   | -            | -    |
| color       | 颜色                                  | `ColorValue`                                                             | -            | -    |
| type        | 图标类型                              | `'spinner'\|'circular'`                                                  | `'circular'` | -    |
| size        | 加载图标大小                          | `number`                                                                 | -            | -    |
| textSize    | 文字大小                              | `number`                                                                 | -            | -    |
| vertical    | 是否垂直排列图标和文字内容            | `boolean`                                                                | `false`      | -    |
| loadingIcon | 自定义 loading 图标，需要自己实现动画 | ` React.ReactNode\|((size:number, color:ColorValue) => React.ReactNode)` | -            | -    |

### Loading.Circular <Badge>0.2.1+</Badge>

| 属性名 | 描述 | 类型         | 默认值               | 版本 |
| :----- | ---- | ------------ | -------------------- | ---- |
| size   | 大小 | `number`     | `loading_icon_size`  | -    |
| color  | 颜色 | `ColorValue` | `loading_icon_color` | -    |

### Loading.Spinner <Badge>0.2.1+</Badge>

| 属性名 | 描述 | 类型         | 默认值               | 版本 |
| :----- | ---- | ------------ | -------------------- | ---- |
| size   | 大小 | `number`     | `loading_icon_size`  | -    |
| color  | 颜色 | `ColorValue` | `loading_icon_color` | -    |

## 主题定制

| 名称                            | 默认值               | 描述 |
| :------------------------------ | -------------------- | ---- |
| loading_gap                     | `TOKENS.space_2`     | -    |
| loading_text_color              | `TOKENS.gray_6`      | -    |
| loading_text_font_size          | `TOKENS.font_size_4` | -    |
| loading_icon_color              | `TOKENS.gray_6`      | -    |
| loading_icon_size               | 24                   | -    |
| loading_icon_animation_duration | 800                  | -    |
