/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'

import { Loading, Cell } from '@fruits-chain/react-native-xiaoshu'

const BasicLoading: React.FC = () => {
  return (
    <>
      <Cell.Group title="单独使用图标" bodyPaddingHorizontal>
        <Loading.Circular />
        <Loading.Spinner />
      </Cell.Group>

      <Cell.Group title="加载类型" bodyPaddingHorizontal>
        <Loading />
        <Loading type="spinner" />
      </Cell.Group>

      <Cell.Group title="自定义颜色" bodyPaddingHorizontal>
        <Loading color="#f30" />
        <Loading color="#690" type="spinner" />
      </Cell.Group>

      <Cell.Group title="自定义大小" bodyPaddingHorizontal>
        <Loading size={18} />
        <Loading size={18} type="spinner" />
      </Cell.Group>

      <Cell.Group title="加载文案" bodyPaddingHorizontal>
        <Loading>加载文案...</Loading>
      </Cell.Group>

      <Cell.Group title="垂直排列" bodyPaddingHorizontal>
        <Loading vertical>加载文案...</Loading>
      </Cell.Group>
    </>
  )
}

export default BasicLoading
