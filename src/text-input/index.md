---
title: TextInput 输入框
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 1
---

# TextInput 输入框

> 针对原生组件做一些扩展。

参考 Antd 桌面端 Input 组件交互、API 实现。

## 事件触发顺序

```
|-- onFocus =>
|--|-- onChange => onChange => onChangeText =>
|--|-- onChange => onChange => onChangeText =>
|--|--|-- onChange => onEndEditing => onBlur
```

## 各个事件中获取输入框的值

- onFocus `(event) => event.nativeEvent.text`
- onChange `(text) => text`
- onChangeText `(text) => text`
- onEndEditing `(event) => event.nativeEvent.text`
- onBlur `(event) => event.nativeEvent.text`

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

<API hideTitle src="./text-input.tsx"></API>
