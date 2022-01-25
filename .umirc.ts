import type WebpackChain from 'webpack-chain'
import { defineConfig } from 'dumi'

const repo = 'xiaoshu-doc/'

export default defineConfig({
  chainWebpack(memo: WebpackChain) {
    memo.plugins.delete('copy')
  },
  title: 'react-native-xiaoshu',
  mode: 'site',
  outputPath: 'docs-dist',
  hash: true,
  favicon: 'https://avatars.githubusercontent.com/u/74942048',
  logo: 'https://avatars.githubusercontent.com/u/74942048',
  base: `/${repo}`,
  publicPath: `/${repo}`,
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
    },
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/hjfruit/react-native-xiaoshu',
    },
  ],
  resolve: {
    includes: ['docs', 'src'],
  },
  themeConfig: {
    carrier: '小暑',
  },
  styles: [],
})
