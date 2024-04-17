---
title: Popover 气泡卡片
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# Popover 气泡卡片

> 使用 [react-native-popover-view](https://github.com/SteffeyDev/react-native-popover-view) 实现。

点击元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Popover

去掉 react-native-popover-view 的 from、isVisible、animationConfig、onRequestClose。

| 属性名                 | 描述                             | 类型                                                                   | 默认值                    | 版本 |
| :--------------------- | -------------------------------- | ---------------------------------------------------------------------- | ------------------------- | ---- |
| content                | 卡片内容                         | `React.ReactNode`                                                      | -                         | -    |
| trigger                | 触发方式                         | `'onLongPress'\|'onPress'\|'onPressIn'`                                | `'onPress'`               | -    |
| dark                   | 弹出层 深色                      | `boolean`                                                              | `false`                   | -    |
| shadow                 | 显示阴影                         | `boolean`                                                              | `false`                   | -    |
| arrow                  | 显示箭头                         | `boolean`                                                              | `true`                    | -    |
| triggerStyle           | 点击区域样式                     | `StyleProp<ViewStyle>`                                                 | -                         | -    |
| onSelect               | 点击 Popover.Item 的回调函数     | `(node:T, index?:number) => void`                                      | -                         | -    |
| disabled               | 点击显示弹层是否禁用             | `boolean`                                                              | -                         | -    |
| renderContentComponent | 自定义渲染弹出层                 | `( nodes:React.ReactNode, closePopover:() => void) => React.ReactNode` | -                         | -    |
| duration               | 弹出的动画过渡时间               | `number`                                                               | `animation_duration_base` | -    |
| statusBarTranslucent   | 'rn-modal' mode on Android only. | `boolean`                                                              | -                         | -    |

### Popover.Item

| 属性名   | 描述                            | 类型                   | 默认值  | 版本 |
| :------- | ------------------------------- | ---------------------- | ------- | ---- |
| value    | 值                              | `T`                    | -       | -    |
| disabled | 禁用选项                        | `boolean`              | -       | -    |
| dark     | 弹出层 深色，Popover 会覆盖该值 | `boolean`              | -       | -    |
| style    | 样式对象                        | `StyleProp<ViewStyle>` | -       | -    |
| divider  | 是否显示分割线                  | `boolean`              | `false` | -    |

### Popover.Text

| 属性名   | 描述                            | 类型      | 默认值  | 版本 |
| :------- | ------------------------------- | --------- | ------- | ---- |
| text     | 显示文案                        | `string`  | -       | -    |
| dark     | 弹出层 深色，Popover 会覆盖该值 | `boolean` | -       | -    |
| divider  | 是否显示分割线                  | `boolean` | `false` | -    |
| disabled | 禁用选项                        | `boolean` | -       | -    |

## 主题定制

| 名称                            | 默认值                   | 描述 |
| :------------------------------ | ------------------------ | ---- |
| popover_border_radius           | `TOKENS.border_radius_s` | -    |
| popover_color                   | `TOKENS.white`           | -    |
| popover_color_dark              | 'rgba(0,0,0,0.7)'        | -    |
| popover_item_padding_horizontal | `TOKENS.space_3`         | -    |
| popover_item_padding_vertical   | `TOKENS.space_3`         | -    |
| popover_item_divider            | `TOKENS.gray_2`          | -    |
| popover_item_divider_dark       | 'rgba(255,255,255,0.15)' | -    |
| popover_text_color              | `TOKENS.gray_8`          | -    |
| popover_text_color_dark         | `TOKENS.white`           | -    |
| popover_text_font_size          | `TOKENS.font_size_3`     | -    |
