---
title: Toast 轻提示
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 0
---

# Toast 轻提示

> 在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

Toast.loading、Toast.success、Toast.fail 使用方式与 Toast 相似，参考 Toast。

Toast.clear 暂时未实现。

Toast.setDefaultOptions 设置默认参数，例如是否背景可以点击、持续时长。

<Alert type="warning">
  如果是同步关闭提示，使用 setTimeout 做一下延迟。
</Alert>

```js | pure
const doCheck = () => {
  const { close } = Toast.loading({
    message: '检测中...',
    duration: 0,
    forbidPress: true,
  })

  // 遍历数据、非异步

  // ❎ 此时直接关闭不会有作用
  close()

  // ✅ loading 元素可能还没有创建，做一个延迟保障能移除对应的元素
  setTimeout(() => {
    close()
  }, 0)
}
```

### Toast

<API hideTitle src="./toast.tsx"></API>
