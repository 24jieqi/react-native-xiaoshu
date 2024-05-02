---
title: Steps 步骤条
nav:
  title: 组件
group:
  title: 导航组件
  order: 5
---

# Steps 步骤条

> 引导用户按照流程完成任务的导航条。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名  | 描述                                                                        | 类型                                                                       | 默认值 | 版本 |
| :------ | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------ | ---- |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态 | `number`                                                                   | -      | -    |
| data    | 步骤数组                                                                    | `{icon:React.ReactNode, status:'wait'\|'finish', title:React.ReactNode}[]` | -      | -    |
| style   | 自定义样式                                                                  | `StyleProp<ViewStyle>`                                                     | -      | -    |

## TODO

- 大屏幕的情况可以显示更多

## 主题定制

| 名称                           | 默认值               | 描述 |
| :----------------------------- | -------------------- | ---- |
| steps_background_color         | `TOKENS.brand_6`     | -    |
| steps_padding_vertical         | `TOKENS.space_4`     | -    |
| steps_padding_horizontal       | `TOKENS.space_6`     | -    |
| steps_icon_dot_size            | 10                   | -    |
| steps_icon_dot_active_size     | 16                   | -    |
| steps_icon_success_active_size | 16                   | -    |
| steps_title_size               | `TOKENS.font_size_4` | -    |
| steps_title_color              | `TOKENS.white`       | -    |
