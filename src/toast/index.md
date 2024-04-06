---
title: Toast 轻提示
nav:
  title: 组件
group:
  title: 基础组件
  order: 1
---

# Toast 轻提示

> 在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

Toast.loading、Toast.success、Toast.fail 使用方式与 Toast 相似，参考 Toast。

Toast.clear 暂时未实现。

Toast.setDefaultOptions 设置默认参数，例如是否背景可以点击、持续时长。

去掉 `Popup 公共属性` 的 `visible`、`duration`、`closeOnPressOverlay`。

| 属性名              | 描述                                                              | 类型                        | 默认值      | 版本 |
| :------------------ | ----------------------------------------------------------------- | --------------------------- | ----------- | ---- |
| type                | 提示类型，可选值为 `'text'\|'loading'\|'success'\|'fail'\|'icon'` | `ToastType`                 | `'text'`    | -    |
| position            | 位置，可选值为 `'top'\|'bottom'\|'middle'`                        | `'top'\|'bottom'\|'middle'` | `'middle'`  | -    |
| message             | 文本内容(支持模板字符串\n换行)                                    | `string`                    | `''`        | -    |
| overlay             | 是否显示背景遮罩层                                                | `boolean`                   | `false`     | -    |
| forbidPress         | 是否禁止背景点击                                                  | `boolean`                   | `false`     | -    |
| closeOnPress        | 是否在点击后关闭                                                  | `boolean`                   | `false`     | -    |
| closeOnPressOverlay | 是否在点击遮罩层后关闭                                            | `boolean`                   | `false`     | -    |
| loadingType         | 加载图标类型, 可选值为 `'circular'\|'spinner'`                    | `'circular'\|'spinner'`     | `'spinner'` | -    |
| duration            | 展示时长(ms)，值为 0 时，toast 不会消失                           | `number`                    | `2000`      | -    |
| icon                | 自定义图标                                                        | `React.ReactNode`           | -           | -    |

## 主题定制

| 名称                           | 默认值                          | 描述 |
| :----------------------------- | ------------------------------- | ---- |
| toast_max_width                | '70%'                           | -    |
| toast_background_color         | rgba(0,0,0,`TOKENS.opacity_70`) | -    |
| toast_border_radius            | `TOKENS.border_radius_xl`       | -    |
| toast_text_border_radius       | `TOKENS.border_radius_m`        | -    |
| toast_icon_color               | `TOKENS.white`                  | -    |
| toast_icon_padding             | `TOKENS.space_1`                | -    |
| toast_icon_size                | 36                              | -    |
| toast_inner_padding_vertical   | `TOKENS.space_4`                | -    |
| toast_inner_padding_horizontal | `TOKENS.space_4`                | -    |
| toast_inner_width              | 120                             | -    |
| toast_inner_min_height         | 120                             | -    |
| toast_font_size                | `TOKENS.font_size_3`            | -    |
| toast_text_color               | `TOKENS.white`                  | -    |
| toast_line_height              | 20                              | -    |
| toast_text_min_width           | 96                              | -    |
| toast_text_padding_vertical    | `TOKENS.space_2`                | -    |
| toast_text_padding_horizontal  | `TOKENS.space_3`                | -    |
| toast_text_margin_top          | `TOKENS.space_2`                | -    |
| toast_position_top_distance    | '20%'                           | -    |
| toast_position_bottom_distance | '20%'                           | -    |

## FAQ

### 同步 close

如果是同步关闭提示，使用 setTimeout 做一下延迟。

```js | pure
const doCheck = () => {
  const { close } = Toast.loading({
    message: '检测中...',
    duration: 0,
    forbidPress: true,
  })

  // 业务逻辑、非异步

  // ❎ 此时直接关闭不会有作用
  close()

  // ✅ loading 元素可能还没有创建，做一个延迟保障能移除对应的元素
  setTimeout(() => {
    close()
  }, 0)
}
```
