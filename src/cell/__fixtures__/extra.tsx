/**
 * title: 扩展单元格
 * desc: 单元格支持一些自定义选项
 */

import React from 'react'
import { Text } from 'react-native'

import { Cell, Tag } from '@fruits-chain/react-native-xiaoshu'

const CellExtra: React.FC = () => {
  return (
    <>
      <Cell
        title={<Text style={{ alignSelf: 'center' }}>自定义标题</Text>}
        value="显示文案"
      />
      <Cell
        title="标题"
        valueStyle={{ justifyContent: 'center' }}
        value={<Text>自定义文案</Text>}
      />
      <Cell
        title="标题"
        titleStyle={{
          backgroundColor: '#f5f5f5',
        }}
        titleTextStyle={{
          color: '#f30',
        }}
        valueStyle={{
          backgroundColor: '#000',
        }}
        valueTextStyle={{
          color: '#fff',
        }}
        value="显示文案"
      />
      <Cell title="标题" value="显示文案" isLink arrowDirection="down" />
      <Cell title="标题" value="显示文案" isLink arrowDirection="up" />
      <Cell
        title="标题"
        value="显示文案"
        titleExtra={
          <Tag
            size="s"
            style={{
              alignSelf: 'center',
              marginRight: 4,
            }}>
            啊哈
          </Tag>
        }
      />
      <Cell
        title="标题"
        value="显示文案"
        valueExtra={
          <Tag
            size="s"
            style={{
              alignSelf: 'center',
              marginLeft: 4,
            }}>
            啊哈
          </Tag>
        }
      />
      <Cell
        title="标题"
        value="显示文案"
        isLink
        valueExtra={
          <Tag
            size="s"
            style={{
              alignSelf: 'center',
              marginLeft: 4,
            }}>
            啊哈
          </Tag>
        }
      />
      <Cell title="最后一项" value="一般不显示分割线" bordered={false} />
    </>
  )
}

export default CellExtra
