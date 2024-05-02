---
title: ElevatorNav 电梯导航
nav:
  title: 组件
group:
  title: 导航组件
  order: 5
---

# ElevatorNav 电梯导航 <Badge>0.3.17+</Badge>

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### ElevatorNav

继承 ScrollViewProps。

| 属性名          | 描述                                 | 类型                                                                     | 默认值 | 版本 |
| :-------------- | ------------------------------------ | ------------------------------------------------------------------------ | ------ | ---- |
| triggerOffset   | 滚动大于多少时出现导航栏             | `number`                                                                 | `100`  | -    |
| tabBarHeight    | 导航栏高度，暂时未开放自定义导航功能 | `number`                                                                 | `40`   | -    |
| scrollComponent | 自定义滚动组件                       | `React.FC<ScrollViewProps & { ref:React.MutableRefObject<ScrollView> }>` | -      | -    |

### ElevatorNav.Anchor

| 属性名 | 描述         | 类型     | 默认值 | 版本 |
| :----- | ------------ | -------- | ------ | ---- |
| title  | 唯一的 title | `string` | -      | -    |
