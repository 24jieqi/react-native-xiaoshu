import type WebpackChain from 'webpack-chain'
import { defineConfig } from 'dumi'
import p from './package.json'
const FileManagerPlugin = require('filemanager-webpack-plugin')
const pkgJSON = require('./package.json')
const fileManagerPlugin = new FileManagerPlugin({
  events: {
    onEnd: {
      archive: [
        {
          source: './docs-dist',
          destination: `./zips/${pkgJSON.name}-v${pkgJSON.version}.zip`,
        },
      ],
      move: [
        {
          source: `./zips/${pkgJSON.name}-v${pkgJSON.version}.zip`,
          destination: `./docs-dist/${pkgJSON.name}-v${pkgJSON.version}.zip`,
        },
      ],
    },
  },
})
const repo = process.env.PUBLIC_PATH || ''

export default defineConfig({
  chainWebpack(memo: WebpackChain) {
    memo.plugins.delete('copy')
    memo.plugin('file-manager-plugin').use(fileManagerPlugin)
  },
  title: '小暑',
  mode: 'site',
  outputPath: 'docs-dist',
  hash: true,
  history: {
    type: 'hash',
  },
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
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '组件',
      path: '/component',
    },
    {
      title: '案例',
      path: '/case',
    },
    {
      title: `GitHub v${p.version}`,
      path: 'https://github.com/hjfruit/react-native-xiaoshu',
    },
    {
      title: '更新日志',
      path: 'https://github.com/hjfruit/react-native-xiaoshu/releases',
    },
    {
      title: '下载 Android 预览 APK',
      path: `https://www.onlyling.com/apks/${p.name}-v${p.version}.apk`,
    },
  ],
  resolve: {
    includes: ['docs', 'src'],
  },
  locales: [['zh-CN', '中文']],
  styles: [],
})
