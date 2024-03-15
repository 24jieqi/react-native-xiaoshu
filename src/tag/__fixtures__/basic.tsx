/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'
import { Tag, Cell, Space } from '@fruits-chain/react-native-xiaoshu'
import { PlayCircleFill } from '@fruits-chain/icons-react-native'
import { View, Text } from 'react-native'

const BasicTag: React.FC = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Tag type="ghost" color="#098" size="s">
          入库
        </Tag>
        <Text>2022-07-05 11:16:24</Text>
      </View>

      <Cell.Group title="基础用法">
        <Cell title="default 类型" value={<Tag>标签</Tag>} />
        <Cell title="primary 类型" value={<Tag type="primary">标签</Tag>} />
        <Cell title="hazy 类型" value={<Tag type="hazy">标签</Tag>} />
        <Cell title="ghost 类型" value={<Tag type="ghost">标签</Tag>} />
        <Cell
          title="ghost 类型:细边框"
          value={
            <Tag type="ghost" hairline>
              标签
            </Tag>
          }
          divider={false}
        />
      </Cell.Group>
      <Cell.Group title="size">
        <Cell
          title="大"
          value={
            <Space direction="horizontal">
              <Tag size="l">标签</Tag>
              <Tag size="l" closable>
                标签
              </Tag>
            </Space>
          }
        />
        <Cell
          title="中"
          value={
            <Space direction="horizontal">
              <Tag size="m">标签</Tag>
              <Tag size="m" closable>
                标签
              </Tag>
            </Space>
          }
        />
        <Cell
          title="小"
          value={
            <Space direction="horizontal">
              <Tag size="s">标签</Tag>
              <Tag size="s" closable>
                标签
              </Tag>
            </Space>
          }
          divider={false}
        />
      </Cell.Group>
      <Cell.Group title="操作相关">
        <Cell
          title="closable"
          value={
            <Tag
              closable
              onClose={() => {
                console.log('点击了关闭')
              }}>
              标签
            </Tag>
          }
        />
        <Cell
          title="closeIcon"
          value={
            <Tag
              closable
              onClose={() => {
                console.log('点击了关闭')
              }}
              closeIcon={<PlayCircleFill />}>
              标签
            </Tag>
          }
        />
      </Cell.Group>
      <Cell.Group title="自定义颜色">
        <Cell title="#FFA238" value={<Tag color="#FFA238">标签</Tag>} />
        <Cell title="#FA541C" value={<Tag color="#FA541C">标签</Tag>} />
        <Cell title="#34B545" value={<Tag color="#34B545">标签</Tag>} />
        <Cell title="#AD101A" value={<Tag color="#AD101A">标签</Tag>} />
        <Cell title="#1BA2FC" value={<Tag color="#1BA2FC">标签</Tag>} />
        <Cell title="#7D45E6" value={<Tag color="#7D45E6">标签</Tag>} />
        <Cell title="#0065FE" value={<Tag color="#0065FE">标签</Tag>} />
        <Cell
          title="#FFA238"
          value={
            <Tag color="#FFA238" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#FA541C"
          value={
            <Tag color="#FA541C" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#34B545"
          value={
            <Tag color="#34B545" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#AD101A"
          value={
            <Tag color="#AD101A" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#1BA2FC"
          value={
            <Tag color="#1BA2FC" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#7D45E6"
          value={
            <Tag color="#7D45E6" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#0065FE"
          value={
            <Tag color="#0065FE" type="hazy">
              标签
            </Tag>
          }
        />
      </Cell.Group>
    </ScrollView>
  )
}

export default BasicTag
