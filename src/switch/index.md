---
title: Switch 开关
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# Switch 开关

> 用于在打开和关闭状态之间进行切换。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>
<code src="./__fixtures__/text.tsx"></code>
<code src="./__fixtures__/disabled.tsx"></code>
<code src="./__fixtures__/size.tsx"></code>
<code src="./__fixtures__/custom.tsx"></code>

## API

| 属性名           | 描述                                                | 类型                                                            | 默认值                       | 版本      |
| :--------------- | --------------------------------------------------- | --------------------------------------------------------------- | ---------------------------- | --------- |
| value            | 受控模式时所显示的值                                | `ActiveValueT\|InactiveValueT`                                  | -                            | -         |
| defaultValue     | 非受控模式的初始值                                  | `ActiveValueT\|InactiveValueT`                                  | -                            | -         |
| onChange         | 变化时的回调函数                                    | `(v:ActiveValueT\|InactiveValueT) => void`                      | -                            | -         |
| beforeChange     | 切换状态前，返回 false 可阻止关闭，支持返回 Promise | `(v:ActiveValueT\|InactiveValueT) => boolean\|Promise<boolean>` | -                            | -         |
| loading          | 是否为加载状态                                      | `boolean`                                                       | `false`                      | -         |
| disabled         | 是否为禁用状态                                      | `boolean`                                                       | `false`                      | -         |
| size             | 开关尺寸                                            | `number`                                                        | `switch_size`                | -         |
| activeColor      | 打开时的背景色                                      | `ColorValue`                                                    | `switch_on_background_color` | -         |
| inactiveColor    | 关闭时的背景色                                      | `ColorValue`                                                    | `switch_background_color`    | -         |
| activeValue      | 打开时对应的值                                      | `ActiveValueT`                                                  | `true`                       | -         |
| inactiveValue    | 关闭时对应的值                                      | `InactiveValueT`                                                | `false`                      | -         |
| activeChildren   | 打开时的内容                                        | `React.ReactNode`                                               | -                            | `0.3.17+` |
| inactiveChildren | 关闭时的内容                                        | `React.ReactNode`                                               | -                            | `0.3.17+` |
| onPress          | 点击时触发                                          | `() => void`                                                    | -                            | -         |

## 主题定制

| 名称                           | 默认值                           | 描述 |
| :----------------------------- | -------------------------------- | ---- |
| switch_size                    | 30                               | -    |
| switch_width_ratio             | 2                                | -    |
| switch_height_ratio            | 1                                | -    |
| switch_node_size_ratio         | 1                                | -    |
| switch_node_background_color   | `TOKENS.white`                   | -    |
| switch_background_color        | `TOKENS.gray_5`                  | -    |
| switch_on_background_color     | `TOKENS.brand_6`                 | -    |
| switch_transition_duration     | `TOKENS.animation_duration_base` | -    |
| switch_disabled_opacity        | `TOKENS.opacity_60`              | -    |
| switch_children_text_font_size | `TOKENS.font_size_3`             | -    |
| switch_children_text_color     | `TOKENS.white`                   | -    |
