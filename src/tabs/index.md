---
title: Tabs 标签页
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Tabs 标签页 <Badge>0.2.25+</Badge>

> 选项卡切换组件。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Tabs

| 属性名                | 描述                                         | 类型                             | 默认值                        | 版本 |
| :-------------------- | -------------------------------------------- | -------------------------------- | ----------------------------- | ---- |
| tabBarStyle           | TabBar style                                 | `TabBarProps['style']`           | -                             | -    |
| tabBarHeight          | TabBar 高度                                  | `TabBarProps['height']`          | -                             | -    |
| tabBarBackgroundColor | TabBar 背景色                                | `TabBarProps['backgroundColor']` | `bottom_bar_background_color` | -    |
| activeKey             | 当前激活 tab 面板的 key                      | `string`                         | -                             | -    |
| defaultActiveKey      | 初始化选中面板的 key，如果没有设置 activeKey | `string`                         | -                             | -    |
| onChange              | 面板改变的回调函数                           | `(activeKey:string) => void`     | -                             | -    |
| divider               | 是否显示分割线                               | `boolean`                        | `false`                       | -    |
| dividerColor          | 自定义分割线颜色                             | `ColorValue`                     | -                             | -    |

### Tabs.TabPane

| 属性名     | 描述                   | 类型             | 默认值 | 版本 |
| :--------- | ---------------------- | ---------------- | ------ | ---- |
| badge      | 右上角数字             | `number\|string` | -      | -    |
| key        | 对应 activeKey         | `string`         | -      | -    |
| tab        | 选项卡头显示文字       | `string`         | -      | -    |
| lazyRender | 是否在激活时才渲染节点 | `boolean`        | `true` | -    |
