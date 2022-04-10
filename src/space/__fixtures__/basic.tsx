/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import { Card, Space, Button } from '@fruits-chain/react-native-xiaoshu'

const BasicSpace: React.FC = () => {
  return (
    <ScrollView>
      <Space tail head>
        <Card title="垂直方向的间距" square>
          <Space>
            <Button text="Button" />
            <Button text="Button" />
            {Math.random() > 100 ? <Button text="Button" /> : null}
          </Space>
        </Card>

        <Card title="距离" square>
          <Space gap="m">
            <Button text="Button" />
            <Button text="Button" />
            {Math.random() > 100 ? <Button text="Button" /> : null}
          </Space>

          <Space gap="l" head>
            <Button text="Button" />
            <Button text="Button" />
            {Math.random() > 100 ? <Button text="Button" /> : null}
          </Space>
        </Card>

        <Card title="水平方向的间距" square>
          <Space direction="horizontal">
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>

        <Card title="水平方向的间距:换行" square>
          <Space direction="horizontal" wrap>
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>

        <Card title="自定义间距大小" square>
          <Space direction="horizontal" gap={16} wrap>
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>

        <Card title="主轴对齐方式" square>
          <Space direction="horizontal" justify="center">
            <Button text="Button" size="xl" />
            <Button text="Button" size="m" />
            <Button text="Button" size="xs" />
          </Space>

          <Space direction="horizontal" justify="flex-end">
            <Button text="Button" size="xl" />
            <Button text="Button" size="m" />
            <Button text="Button" size="xs" />
          </Space>
        </Card>

        <Card title="交叉轴对齐方式" square>
          <Space direction="horizontal" align="center">
            <Button text="Button" size="xl" />
            <Button text="Button" size="m" />
            <Button text="Button" size="xs" />
          </Space>
        </Card>

        <Card title="首尾间距" square>
          <Space tail>
            <Button text="Button" size="xl" />
            <Button text="Button" size="m" />
            <Button text="Button" size="xs" />
          </Space>
          <Space direction="horizontal" head>
            <Button text="Button" size="xl" />
            <Button text="Button" size="m" />
            <Button text="Button" size="xs" />
          </Space>
        </Card>
      </Space>
    </ScrollView>
  )
}

export default BasicSpace
