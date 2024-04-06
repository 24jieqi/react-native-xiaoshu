---
title: Space 间距
nav:
  title: 组件
group:
  title: 基础组件
  order: 1
---

# Space 间距

> 设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 代码演示

<code src="./__fixtures__/size.tsx"></code>

<code src="./__fixtures__/direction.tsx"></code>

<code src="./__fixtures__/other.tsx"></code>

## API

| 属性名        | 描述                                   | 类型                          | 默认值               | 版本      |
| :------------ | -------------------------------------- | ----------------------------- | -------------------- | --------- |
| direction     | 间距方向 `'vertical'\|'horizontal'`    | `SpaceDirection`              | `'vertical'`         | -         |
| wrap          | 是否自动换行，仅在 horizontal 时有效   | `boolean`                     | `false`              | -         |
| gap           | 间距大小                               | `number\|BlankProps['size']`  | `'s'`                | -         |
| gapVertical   | 垂直方向的间距大小                     | `number`                      | `blank_size_{s,m,l}` | -         |
| gapHorizontal | 水平方向的间距大小                     | `number`                      | `blank_size_{s,m,l}` | -         |
| head          | 头部是否添加间距                       | `boolean\|number`             | `false`              | -         |
| tail          | 尾部是否添加间距                       | `boolean\|number`             | `false`              | -         |
| justify       | 主轴对齐方式                           | `FlexStyle['justifyContent']` | -                    | -         |
| align         | 交叉轴对齐方式                         | `FlexStyle['alignItems']`     | -                    | -         |
| minWidth      | 子元素最小宽                           | `number`                      | -                    | -         |
| shrink        | direction 为 'horizontal' 时底边距收缩 | `boolean`                     | `false`              | `0.3.17+` |

## 主题定制

内置边距大小来源 `Blank` 的 `blank_size_{s,m,l}`。
