---
title: Dialog 弹出框
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# Dialog 弹出框

> 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Dialog` 在当前页面正中打开一个浮层，承载相应的操作。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Dialog

<API hideTitle src="./dialog-method.tsx"></API>

### Dialog.input

<API hideTitle src="./dialog-input.tsx"></API>

### Dialog.Component

### Dialog.Keyboard <Badge>0.2.48+</Badge>

### Dialog.KeyboardComponent <Badge>0.2.48+</Badge>

`Dialog.Component`、`Dialog.Keyboard`、`Dialog.KeyboardComponent` 三个组件接口一致。

`Dialog.KeyboardComponent` 内部没有嵌套 `Portal`。

> `Dialog.Keyboard`、`Dialog.KeyboardComponent` 在 `Dialog` 添加键盘出现、消失事件监听，键盘出现时整个对话框距离顶部一个安全距离。

<API hideTitle src="./dialog.tsx"></API>
