---
title: PasswordInput 密码输入框
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# PasswordInput 密码输入框

> 在 TextInput 的基础是完善密码可见切换。

## 元素结构

参考 `TextInput`。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

去掉 TextInputProps 的 formatTrigger、showWordLimit、rows、type、secureTextEntry、suffix。

| 属性名                  | 描述             | 类型                  | 默认值   | 版本 |
| :---------------------- | ---------------- | --------------------- | -------- | ---- |
| secureTextEntry         | 安全输入         | `boolean`             | `true`   | -    |
| defaultSecureTextEntry  | 安全输入默认状态 | `boolean`             | -        | -    |
| onChangeSecureTextEntry | 安全输入状态变更 | `(v:boolean) => void` | -        | -    |
| iconSize                | 图标大小         | `number`              | `20`     | -    |
| iconColor               | 图标颜色         | `ColorValue`          | `gray_6` | -    |
