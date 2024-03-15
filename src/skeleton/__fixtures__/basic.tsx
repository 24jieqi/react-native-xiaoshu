/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import { Card, Space, Skeleton } from '@fruits-chain/react-native-xiaoshu'

const BasicCell: React.FC = () => {
  return (
    <ScrollView>
      <Space tail head>
        <Card title="基础" square>
          <Skeleton loading />
        </Card>

        <Card title="基础:无动画" square>
          <Skeleton loading active={false} />
        </Card>

        <Card title="有头像" square>
          <Skeleton loading avatar />
        </Card>

        <Card title="有头像:无动画" square>
          <Skeleton loading avatar active={false} />
        </Card>

        <Card title="有头像:无标题" square>
          <Skeleton loading avatar title={false} />
        </Card>

        <Card title="自定义行数" square>
          <Skeleton
            loading
            avatar
            paragraph={{
              rows: 6,
              widths: [100, 100, 70, 100, 100, 20],
            }}
          />
        </Card>
      </Space>
    </ScrollView>
  )
}

export default BasicCell
