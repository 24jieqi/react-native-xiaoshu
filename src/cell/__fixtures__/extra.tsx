/**
 * title: 扩展单元格
 * description: 单元格支持各个部件的 style 覆盖。
 */

import React from 'react'
import { Text } from 'react-native'

import { Cell, Tag } from '@fruits-chain/react-native-xiaoshu'

const CellExtra: React.FC = () => {
  return (
    <>
      <Cell
        title={<Text style={{ alignSelf: 'center' }}>自定义 title JSX</Text>}
        value="显示文案"
      />
      <Cell
        title="标题"
        valueStyle={{ justifyContent: 'center', alignItems: 'center' }}
        value={<Text>自定义 value JSX</Text>}
      />
      <Cell
        title="自定义样式"
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
        value="title、value 部件自定义样式"
      />
      <Cell title="自定义箭头方向" value="down" isLink arrowDirection="down" />
      <Cell title="自定义箭头方向" value="up" isLink arrowDirection="up" />
      <Cell
        title="title 左侧扩展"
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
        title="value 与箭头之间的扩展"
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
        title="value 与箭头之间的扩展"
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
      <Cell title="最后一项" value="一般不显示分割线" divider={false} />
    </>
  )
}

export default CellExtra
