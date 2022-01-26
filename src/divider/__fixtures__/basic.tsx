/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import { Divider, Space, CellGroup } from '@fruits-chain/react-native-xiaoshu'

const BasicDivider: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <CellGroup title="基础用法" bodyPaddingHorizontal>
        <Space>
          <Divider />
          <Divider type="light" />
          <Divider dashed />
          <Divider dashed type="light" />
        </Space>
      </CellGroup>

      <CellGroup title="自定义颜色" bodyPaddingHorizontal>
        <Space>
          <Divider color="#000" />
          <Divider color="#000" dashed />
        </Space>
      </CellGroup>

      <CellGroup title="展示文本" bodyPaddingHorizontal>
        <Space>
          <Divider>一袋米要抗几楼</Divider>
          <Divider type="light">一袋米要抗二楼</Divider>
          <Divider dashed>一袋米要给多了</Divider>
          <Divider dashed type="light">
            一袋米由我洗嘞
          </Divider>
        </Space>
      </CellGroup>

      <CellGroup title="内容位置" bodyPaddingHorizontal>
        <Space>
          <Divider contentPosition="left">一袋米要抗几楼</Divider>
          <Divider contentPosition="right" type="light">
            一袋米要抗二楼
          </Divider>
        </Space>
      </CellGroup>

      <CellGroup title="虚线" bodyPaddingHorizontal>
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
      </CellGroup>

      <CellGroup title="自定义样式" bodyPaddingHorizontal>
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
      </CellGroup>
    </ScrollView>
  )
}

export default BasicDivider
