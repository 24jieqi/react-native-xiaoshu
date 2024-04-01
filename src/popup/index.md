---
title: Popup 弹出层
nav:
  title: 组件

group:
  title: 基础组件
  path: /basic
  order: 1
---

# Popup 弹出层

> 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

## 元素结构

```bash
|-- Overlay
|-- Animated.View  ## style、round、position、safeAreaInsetBottom、zIndex，默认情况不控制高度，可通过 style 自定义高度
|--|-- children
```

## 代码演示

<code src="./__fixtures__/header.tsx"></code>

<code src="./__fixtures__/popup.tsx"></code>

<code src="./__fixtures__/keyboard-shim.tsx"></code>

<code src="./__fixtures__/page.tsx"></code>

## API

### Popup

### Popup.Component

`Popup` 与 `Popup.Component` 属性相同，`Popup` 被 `Portal` 组件包裹，在根节点渲染。

### Popup.Header

### Popup.Page <Badge>0.2.47+</Badge>

### Popup.PageComponent

`Popup.Page` 与 `Popup.PageComponent` 属性相同，`Popup.Page` 被 `Portal` 组件包裹，在根节点渲染。

### Popup.KeyboardShim

> `Animated.View` 的属性都可以。

## 主题定制

| 名称                         | 默认值                    | 描述 |
| :--------------------------- | ------------------------- | ---- |
| popup_background_color       | `TOKENS.white`            | -    |
| popup_round_border_radius    | `TOKENS.border_radius_xl` | -    |
| popup_close_icon_size        | 24                        | -    |
| popup_close_icon_color       | `TOKENS.gray_7`           | -    |
| popup_close_icon_margin_left | `TOKENS.space_2`          | -    |

## FAQ

### 受控输入控件不能输入中文

```jsx | pure
// 在这个案例中 Popup 弹出层内的输入框无法输入中文
// 原因是 Popup 内部使用了 Portal，状态变化引起 Portal 内部触发 children 更新，导致 TextInput 输入控件重新渲染
const Demo = ({ visible }) => {
  const [value, setValue] = useState('')

  return (
    <Popup visible={visible}>
      <TextInput
        placeholder="请输入关键词"
        value={value}
        onChangeText={setValue}
      />
    </Popup>
  )
}
```

```jsx | pure
// 把状态变化和 Popup 拆分后能输入中文
// 如果是表单业务推荐使用 Form 组件
const PopupInner = () => {
  const [value, setValue] = useState('')
  return (
    <TextInput
      placeholder="请输入关键词"
      value={value}
      onChangeText={setValue}
    />
  )
}

const Demo2 = ({ visible }) => {
  return (
    <Popup visible={visible}>
      <PopupInner />
    </Popup>
  )
}
```
