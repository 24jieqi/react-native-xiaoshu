/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView, View } from 'react-native'

import { Divider, Space, Card } from '@fruits-chain/react-native-xiaoshu'

const BasicDivider: React.FC = () => {
  return (
    <ScrollView>
      <Space head tail>
        <Card title="基础用法" square>
          <Space>
            <Divider />
            <Divider type="light" />
            <Divider dashed />
            <Divider dashed type="light" />
          </Space>
        </Card>

        <Card title="基础用法:竖向" square>
          <Space direction="horizontal">
            <Divider direction="vertical" />
            <Divider direction="vertical" type="light" />
            <Divider direction="vertical" dashed />
            <Divider direction="vertical" dashed type="light" />
            <View style={{ height: 30 }}>
              <Divider direction="vertical" />
            </View>
            <Divider direction="vertical" color="#000" />
            <Divider direction="vertical" color="#000" dashed />
          </Space>
        </Card>

        <Card title="自定义颜色" square>
          <Space>
            <Divider color="#000" />
            <Divider color="#000" dashed />
          </Space>
        </Card>

        <Card title="展示文本" square>
          <Space>
            <Divider>一袋米要抗几楼</Divider>
            <Divider type="light">一袋米要抗二楼</Divider>
            <Divider dashed>一袋米要给多了</Divider>
            <Divider dashed type="light">
              一袋米由我洗嘞
            </Divider>
          </Space>
        </Card>

        <Card title="内容位置" square>
          <Space>
            <Divider contentPosition="left">一袋米要抗几楼</Divider>
            <Divider contentPosition="right" type="light">
              一袋米要抗二楼
            </Divider>
          </Space>
        </Card>

        <Card title="虚线" square>
          <Space>
            <Divider dashed contentPosition="left">
              一袋米要抗几楼
            </Divider>
            <Divider dashed type="light">
              一袋米要抗二楼
            </Divider>
            <Divider dashed contentPosition="right">
              一袋米要给多了
            </Divider>
            <Divider dashed type="light">
              一袋米由我洗嘞
            </Divider>
          </Space>
        </Card>

        <Card title="自定义样式" square>
          <Space>
            <Divider
              style={{ backgroundColor: '#999' }}
              textStyle={{ color: '#690' }}>
              文字
            </Divider>

            <Divider
              style={{ backgroundColor: '#f30' }}
              textStyle={{ color: '#000' }}>
              文字
            </Divider>
          </Space>
        </Card>
      </Space>
    </ScrollView>
  )
}

export default BasicDivider
