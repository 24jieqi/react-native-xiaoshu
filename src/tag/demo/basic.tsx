import React from 'react'
import { ScrollView } from 'react-native'

import { Tag, Cell, CellGroup, Toast } from 'react-native-xiaoshu'

const BasicTag: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="基础用法" border={false}>
        <Cell title="default 类型" value={<Tag>标签</Tag>} />
        <Cell
          title="primary 类型"
          value={
            <>
              <Tag type="primary">标签</Tag>
              <Tag type="primary">标签</Tag>
            </>
          }
        />
        <Cell title="success 类型" value={<Tag type="success">标签</Tag>} />
        <Cell title="danger 类型" value={<Tag type="error">标签</Tag>} />
        <Cell
          title="warning 类型"
          value={<Tag type="warning">标签</Tag>}
          border={false}
        />
      </CellGroup>

      <CellGroup title="样式风格" border={false}>
        <Cell
          title="空心样式"
          value={
            <Tag type="primary" plain>
              标签
            </Tag>
          }
        />
        <Cell
          title="细边样式"
          value={
            <Tag type="primary" plain hairline>
              标签
            </Tag>
          }
        />
        <Cell
          title="圆角样式"
          value={
            <Tag type="primary" round>
              标签
            </Tag>
          }
        />
        <Cell
          title="标记样式"
          value={
            <Tag type="success" mark>
              标签
            </Tag>
          }
        />
        <Cell
          title="可关闭标签"
          value={
            <Tag
              type="error"
              closeable
              onPressClose={() => {
                Toast('点击了关闭按钮')
              }}>
              标签
            </Tag>
          }
          border={false}
        />
      </CellGroup>

      <CellGroup title="标签大小" border={false}>
        <Cell title="小号标签" value={<Tag type="primary">标签</Tag>} />
        <Cell
          title="中号标签"
          value={
            <Tag type="primary" size="medium">
              标签
            </Tag>
          }
        />
        <Cell
          title="大号标签"
          value={
            <Tag type="success" size="large">
              标签
            </Tag>
          }
          border={false}
        />
      </CellGroup>

      <CellGroup title="自定义颜色" border={false}>
        <Cell title="背景颜色" value={<Tag color="#7232dd">标签</Tag>} />
        <Cell
          title="文字颜色"
          value={
            <Tag color="#ffe1e1" textColor="#ad0000">
              标签
            </Tag>
          }
        />
        <Cell
          title="空心颜色"
          value={
            <Tag color="#7232dd" plain>
              标签
            </Tag>
          }
          border={false}
        />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicTag
