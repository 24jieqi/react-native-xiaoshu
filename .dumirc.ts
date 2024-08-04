import { defineConfig } from 'dumi'
import path from 'node:path'
import p from './package.json'

const repo = process.env.PUBLIC_PATH || ''
const publicPath = repo ? `/${repo}` : '/'

export default defineConfig({
  title: '小暑 xiǎo shǔ - 轻量、可靠的 React Native 组件库',
  favicons: [
    'https://raw.githubusercontent.com/24jieqi/react-native-xiaoshu/main/logo-xiaoshu.svg',
  ],
  metas: [
    { name: 'keywords', content: 'react,react native,组件库,expo' },
    {
      name: 'description',
      content: '小暑 xiǎo shǔ - 轻量、可靠的 React Native 组件库.',
    },
  ],
  define: {
    'process.env.BAILU_VERSION': p.version,
  },
  base: `/${repo}`,
  publicPath,
  outputPath: 'docs-dist',
  resolve: {
    entryFile: './src/index.ts',
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
  },
  theme: {
    '@c-primary': '#0065FE',
    // '@c-warning': '#FFA238',
    // '@c-success': '#34B545',
    // '@c-error': '#F92F2F',
    '@s-content-width': '1800px',
  },
  mfsu: false,
  alias: {
    // 'react-native$': 'react-native-web',
    // 'react-native-svg$': 'react-native-svg/lib/commonjs/ReactNativeSVG.web.js',
    'react-native$': path.join(__dirname, '.umi-patch/react-native.js'),
    'react-native-svg$': path.join(__dirname, '.umi-patch/react-native-svg.js'),
    // https://mmomtchev.medium.com/bundling-react-native-for-the-web-with-webpack-and-typescript-ba42db25584
    'react-native-safe-area-context':
      'expo-dev-menu/vendored/react-native-safe-area-context/src',
    // '@fruits-chain/react-native-xiaoshu': path.join(__dirname, 'src'),
  },

  themeConfig: {
    name: '小暑',
    logo: 'https://raw.githubusercontent.com/24jieqi/react-native-xiaoshu/main/logo-xiaoshu.svg',
    footer: false,
    socialLinks: {
      github: 'https://github.com/24jieqi/react-native-xiaoshu',
    },
    deviceWidth: 375,
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: 'Components',
        link: '/components',
      },
      {
        title: '案例',
        link: '/case',
      },
      {
        title: '更新日志',
        link: 'https://github.com/24jieqi/react-native-xiaoshu/releases',
      },
    ],
  },
})
