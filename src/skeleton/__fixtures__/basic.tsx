/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import { CellGroup, Skeleton } from '@fruits-chain/react-native-xiaoshu'

const BasicCell: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <CellGroup title="基础" bodyPaddingHorizontal>
        <Skeleton loading />
      </CellGroup>

      <CellGroup title="基础:无动画" bodyPaddingHorizontal>
        <Skeleton loading active={false} />
      </CellGroup>

      <CellGroup title="有头像" bodyPaddingHorizontal>
        <Skeleton loading avatar />
      </CellGroup>

      <CellGroup title="有头像:无动画" bodyPaddingHorizontal>
        <Skeleton loading avatar active={false} />
      </CellGroup>

      <CellGroup title="有头像:无标题" bodyPaddingHorizontal>
        <Skeleton loading avatar title={false} />
      </CellGroup>

      <CellGroup title="自定义行数" bodyPaddingHorizontal>
        <Skeleton
          loading
          avatar
          paragraph={{
            rows: 6,
            widths: [100, 100, 70, 100, 100, 20],
          }}
        />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicCell
