---
title: NumberInput 数字输入框
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# NumberInput 数字输入框

> 在 TextInput 的基础是完善数字输入。

不主动设置 `keyboardType` iOS、Android 默认不同的数字键盘。

- iOS `numbers-and-punctuation`
- Android `decimal-pad`

系统软键盘各种模式，[A visual guide to the React Native TextInput keyboardType prop values](https://lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/)

## 元素结构

参考 `TextInput`。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/formatter.tsx"></code>

<code src="./__fixtures__/limit.tsx"></code>

<code src="./__fixtures__/extra.tsx"></code>

## API

去掉 TextInputProps 的 value、defaultValue、formatTrigger、showWordLimit、rows、type、onChange、onChangeText。

| 属性名          | 描述                                                                                       | 类型                             | 默认值                    | 版本 |
| :-------------- | ------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------- | ---- |
| type            | 输入内容格式，digit 整数，number 允许小数                                                  | `'digit'\|'number'`              | `'number'`                | -    |
| value           | 受控模式所显示的值                                                                         | `number`                         | -                         | -    |
| defaultValue    | 非受控模式初始值                                                                           | `number`                         | -                         | -    |
| onChange        | 变化时的回调函数                                                                           | `(n:number) => void`             | -                         | -    |
| min             | 最小值                                                                                     | `number`                         | `Number.MIN_SAFE_INTEGER` | -    |
| max             | 最大值                                                                                     | `number`                         | `Number.MAX_SAFE_INTEGER` | -    |
| parser          | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用，在输入结束的时候调用该运算结果 | `(v:string) => number`           | -                         | -    |
| limitDecimals   | 是否限制小数位，-1 不限制                                                                  | `number`                         | `-1`                      | -    |
| validateTrigger | 校验输入范围触发的时机，不推荐这样使用，可能造成无法正常输入，推荐使用 formatter           | `'onChangeText'\|'onEndEditing'` | `'onEndEditing'`          | -    |
