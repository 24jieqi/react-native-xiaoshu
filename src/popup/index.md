---
title: Popup 弹出层
nav:
  title: 组件
group:
  title: 基础组件
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

### 公共属性

| 属性名              | 描述                                                                      | 类型            | 默认值                    | 版本 |
| :------------------ | ------------------------------------------------------------------------- | --------------- | ------------------------- | ---- |
| visible             | 是否显示                                                                  | `boolean`       | `false`                   | -    |
| duration            | 动画时长，单位毫秒                                                        | `number`        | `animation_duration_base` | -    |
| overlay             | 是否显示遮罩层                                                            | `boolean`       | `true`                    | -    |
| closeOnPressOverlay | 受控组件：用于阻止 overlay onPress 事件；函数调用：可以用来阻碍弹出层消失 | `boolean`       | `true`                    | -    |
| onPressOverlay      | 点击遮罩层时触发                                                          | `() => void`    | -                         | -    |
| onOpen              | 打开弹出层时触发                                                          | `() => void`    | -                         | -    |
| onOpened            | 打开弹出层且动画结束后触发                                                | `() => void`    | -                         | -    |
| onClose             | 关闭弹出层时触发                                                          | `() => void`    | -                         | -    |
| onClosed            | 关闭弹出层且动画结束后触发                                                | `() => void`    | -                         | -    |
| onRequestClose      | 当点击返回按钮时触发，Android                                             | `() => boolean` | -                         | -    |

### Popup

### Popup.Component

`Popup` 与 `Popup.Component` 属性相同，`Popup` 被 `Portal` 组件包裹，在根节点渲染。

| 属性名              | 描述                                                            | 类型                   | 默认值     | 版本 |
| :------------------ | --------------------------------------------------------------- | ---------------------- | ---------- | ---- |
| style               | 最外层样式                                                      | `StyleProp<ViewStyle>` | -          | -    |
| position            | 弹出位置，可选值为 `'top'\|'bottom'\|'right'\|'left'\|'center'` | `PopupPosition`        | `'center'` | -    |
| round               | 是否显示圆角                                                    | `boolean`              | `false`    | -    |
| safeAreaInsetBottom | 是否开启底部安全区适配                                          | `boolean`              | `false`    | -    |
| safeAreaInsetTop    | 是否开启顶部安全区适配                                          | `boolean`              | `false`    | -    |
| lazyRender          | 是否在显示弹层时才渲染节点                                      | `boolean`              | `true`     | -    |
| destroyOnClosed     | 关闭时销毁 Popup，回退到 lazyRender 的状态                      | `boolean`              | `false`    | -    |

### Popup.Header

去掉 `NavBarProps` 的 `showBackArrow`、`backArrowColor`、`backArrowSize`、`onPressBackArrow`、`border`。

| 属性名    | 描述             | 类型         | 默认值 | 版本 |
| :-------- | ---------------- | ------------ | ------ | ---- |
| onClose   | 点击关闭         | `() => void` | -      | -    |
| showClose | 是否显示关闭按钮 | `boolean`    | `true` | -    |

### Popup.Page <Badge>0.2.47+</Badge>

### Popup.PageComponent

`Popup.Page` 与 `Popup.PageComponent` 属性相同，`Popup.Page` 被 `Portal` 组件包裹，在根节点渲染。

去掉 `PopupProps` 的 `position`、`safeAreaInsetTop`。

| 属性名           | 描述         | 类型     | 默认值               | 版本 |
| :--------------- | ------------ | -------- | -------------------- | ---- |
| safeAreaInsetTop | 顶部安全高度 | `number` | `safeAreaInsets.top` | -    |

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

### 类似小红书弹出层评论

实现代码参考 [example/app/pages/demo/popup-comment.tsx](https://github.com/24jieqi/react-native-xiaoshu/tree/main/example/app/pages/demo/popup-comment.tsx)。
