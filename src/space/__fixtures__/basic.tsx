import React from 'react'
import { ScrollView } from 'react-native'

import { CellGroup, Space, Button } from '@fruits-chain/react-native-xiaoshu'

const BasicCell: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="垂直方向的间距">
        <Space>
          <Button text="Button" />
          <Button text="Button" />
        </Space>
      </CellGroup>

      <CellGroup title="水平方向的间距">
        <Space direction="horizontal">
          <Button text="Button" />
          <Button text="Button" />
        </Space>
      </CellGroup>

      <CellGroup title="水平方向的间距:换行">
        <Space direction="horizontal" wrap>
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
        </Space>
      </CellGroup>

      <CellGroup title="自定义间距大小">
        <Space direction="horizontal" size={16} wrap>
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
          <Button text="Button" />
        </Space>
      </CellGroup>

      <CellGroup title="主轴对齐方式">
        <Space direction="horizontal" justify="center">
          <Button text="Button" size="xl" />
          <Button text="Button" size="m" />
          <Button text="Button" size="xs" />
        </Space>
      </CellGroup>

      <CellGroup title="交叉轴对齐方式">
        <Space direction="horizontal" align="center">
          <Button text="Button" size="xl" />
          <Button text="Button" size="m" />
          <Button text="Button" size="xs" />
        </Space>
      </CellGroup>

      <CellGroup title="首位间距">
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
      </CellGroup>
    </ScrollView>
  )
}

export default BasicCell
