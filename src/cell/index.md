---
title: Cell 单元格
nav:
  title: 组件
group:
  title: 基础组件
  order: 1
---

# Cell 单元格

> 单元格为列表中的单个展示项。

## 何时使用

最基础的列表展示，可承载文字、输入框。

## 元素结构

```bash
## 最基础的元素结构
|-- Pressable  ## style
|--|-- View  ## innerStyle, marginHorizontal 左右边距
|--|--|-- 内容部分 上下、左右布局
|--|-- Divider  ## 属性 divider 控制是否显示，dividerLeftGap、dividerRightGap


## innerStyle 内部结构，左右布局
|-- View  ## innerStyle，左右布局 Flex 横向排版
|--|-- View  ## titleStyle，title 片区
|--|--|-- requiredJSX  ## 属性 required 控制是否显示
|--|--|-- titleExtra  ## 属性 titleExtra
|--|--|-- Text  ## titleTextStyle、titleTextNumberOfLines，或自定义 title
|--|-- View  ## valueStyle、center
|--|--|-- Text  ## valueTextStyle、textAlign、valueTextNumberOfLines，或自定义 value
|--|-- valueExtra  ## 属性 valueExtra
|--|-- linkJSX  ## 属性 isLink 控制是否显示

## innerStyle 内部结构，上下布局
|-- View  ## innerStyle，下上布局 Flex 竖向排版
|--|-- View  ## titleStyle，title 片区
|--|--|-- requiredJSX  ## 属性 required 控制是否显示
|--|--|-- titleExtra  ## 属性 titleExtra
|--|--|-- Text  ## titleTextStyle、titleTextNumberOfLines，或自定义 title
|--|-- View  ## contentStyle，相对于左右布局，上下布局在 value 片区套了一层 View
|--|--|-- View  ## valueStyle、center
|--|--|--|-- Text  ## valueTextStyle、textAlign、valueTextNumberOfLines，或自定义 value
|--|--|-- valueExtra  ## 属性 valueExtra
|--|--|-- linkJSX  ## 属性 isLink 控制是否显示
```

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/divider.tsx"></code>

<code src="./__fixtures__/layout.tsx"></code>

<code src="./__fixtures__/extra.tsx"></code>

<code src="./__fixtures__/group.tsx"></code>

## API

### Cell

| 属性名                 | 描述                                                                             | 类型                               | 默认值                                | 版本 |
| :--------------------- | -------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------- | ---- |
| innerStyle             | 内部布局样式                                                                     | `StyleProp<ViewStyle>`             | -                                     | -    |
| title                  | 左侧标题                                                                         | `React.ReactNode`                  | -                                     | -    |
| titleStyle             | 左侧标题样式，作用元素内部有必填标志、titleExtra、title                          | `StyleProp<ViewStyle>`             | -                                     | -    |
| titleTextStyle         | 左侧标题样文案式                                                                 | `StyleProp<TextStyle>`             | -                                     | -    |
| titleExtra             | 标题的左侧自定义内容                                                             | `React.ReactNode`                  | -                                     | -    |
| value                  | 右侧内容                                                                         | `React.ReactNode`                  | -                                     | -    |
| valueStyle             | 右侧内容样式，作用元素内部有 value                                               | `StyleProp<ViewStyle>`             | -                                     | -    |
| valueTextStyle         | 右侧内容文案样式                                                                 | `StyleProp<TextStyle>`             | -                                     | -    |
| valueExtra             | 右侧内容的右侧自定义内容                                                         | `React.ReactNode`                  | -                                     | -    |
| extra                  | 单元格下方的描述信息                                                             | `React.ReactNode`                  | -                                     | -    |
| extraTextStyle         | 描述信息文案样式                                                                 | `StyleProp<TextStyle>`             | -                                     | -    |
| contentStyle           | 垂直模式模式下右侧内容包裹的样式，作用元素内部有 valueStyle、valueExtra、linkJSX | `StyleProp<ViewStyle>`             | -                                     | -    |
| divider                | 是否显示分割线                                                                   | `boolean`                          | `true`                                | -    |
| dividerLeftGap         | 分割线左侧边距                                                                   | `number`                           | `cell_group_title_padding_horizontal` | -    |
| dividerRightGap        | 分割线左侧边距                                                                   | `number`                           | `cell_group_title_padding_horizontal` | -    |
| isLink                 | 是否展示右侧箭头                                                                 | `boolean`                          | `false`                               | -    |
| onPressLink            | 点击右侧箭头图标                                                                 | `TouchableOpacityProps['onPress']` | -                                     | -    |
| center                 | 是否使内容垂直居中                                                               | `boolean`                          | `false`                               | -    |
| arrowDirection         | 箭头方向                                                                         | `'left'\|'up'\|'right'\|'down'`    | `'right'`                             | -    |
| required               | 是否显示表单必填星号                                                             | `boolean`                          | `false`                               | -    |
| vertical               | 垂直布局，title 在上，value 在下                                                 | `boolean`                          | `false`                               | -    |
| valueTextNumberOfLines | value 区域 Text 的 numberOfLines                                                 | `number`                           | -                                     | -    |
| titleTextNumberOfLines | title 区域 Text 的 numberOfLines                                                 | `number`                           | -                                     | -    |
| textAlign              | 文字对齐方向                                                                     | `'right'\|'center'\|'left'`        | `'right'`                             | -    |
| onPressDebounceWait    | onPress debounce wait                                                            | `number`                           | `0`                                   | -    |

### Cell.Group

| 属性名            | 描述                                          | 类型                                       | 默认值  | 版本 |
| :---------------- | --------------------------------------------- | ------------------------------------------ | ------- | ---- |
| title             | 分组名称                                      | `React.ReactNode`                          | -       | -    |
| extra             | 头部右侧自定义内容                            | `React.ReactNode`                          | -       | -    |
| style             | 自定义样式                                    | `StyleProp<ViewStyle>`                     | -       | -    |
| titleTextStyle    | 分组名称自定义文字样式                        | `StyleProp<TextStyle>`                     | -       | -    |
| bodyStyle         | body 区域自定义样式                           | `StyleProp<ViewStyle>`                     | -       | -    |
| bodyTopDivider    | 是否显示 body 区域上方分割线                  | `boolean`                                  | `false` | -    |
| bodyBottomDivider | 是否显示 body 区域下方分割线                  | `boolean`                                  | `false` | -    |
| onPressTitle      | 点击分组名称区域的回调函数，包含 title、extra | `TouchableWithoutFeedbackProps['onPress']` | -       | -    |
| onPressTitleText  | 点击分组名称文字的回调函数                    | `TextProps['onPress']`                     | -       | -    |

## 主题定制

| 名称                                | 默认值                 | 描述 |
| :---------------------------------- | ---------------------- | ---- |
| cell_group_title_padding_horizontal | `TOKENS.space_3`       | -    |
| cell_group_title_padding_top        | `TOKENS.space_2`       | -    |
| cell_group_title_padding_bottom     | `TOKENS.space_2`       | -    |
| cell_group_title_color              | `TOKENS.gray_8`        | -    |
| cell_group_title_font_size          | `TOKENS.font_size_5`   | -    |
| cell_group_title_line_height        | 28                     | -    |
| cell_icon_size                      | `TOKENS.font_size_5`   | -    |
| cell_icon_color                     | `TOKENS.gray_6`        | -    |
| cell_active_color                   | `TOKENS.gray_1`        | -    |
| cell_font_size                      | `TOKENS.font_size_5`   | -    |
| cell_background_color               | `TOKENS.white`         | -    |
| cell_padding_vertical               | `TOKENS.space_3`       | -    |
| cell_padding_horizontal             | `TOKENS.space_3`       | -    |
| cell_mini_height                    | 50                     | -    |
| cell_title_text_color               | `TOKENS.gray_8`        | -    |
| cell_title_height                   | 32                     | -    |
| cell_title_line_height              | `TOKENS.line_height_1` | -    |
| cell_title_line_margin_right        | `TOKENS.space_2`       | -    |
| cell_value_min_width                | 100                    | -    |
| cell_value_text_color               | `TOKENS.gray_7`        | -    |
| cell_extra_text_color               | `TOKENS.gray_6`        | -    |
| cell_extra_text_font_size           | `TOKENS.font_size_3`   | -    |
| cell_extra_text_line_height         | 16                     | -    |
| cell_required_color                 | `TOKENS.red_6`         | -    |
| cell_required_width                 | `TOKENS.space_3`       | -    |
| cell_icon_link_margin_left          | `TOKENS.space_2`       | -    |
