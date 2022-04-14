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

Toast.loading、Toast.success、Toast.fail 具有配置，参考 Toast。

Toast.clear 暂时未实现。

Toast.setDefaultOptions 设置默认参数，例如是否背景可以点击、持续时长。

<Alert type="info">
  如果是同步关闭提示，使用 setTimeout 一下。
</Alert>

### Toast

<API hideTitle src="./toast.tsx"></API>
