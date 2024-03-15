/**
 * title: 自定义图标
 * description: icon={null} 可以隐藏图标，或传入一个自定义组件
 */

import { ArrowDownOutline } from '@fruits-chain/icons-react-native'
import { Empty, Space } from '@fruits-chain/react-native-xiaoshu'

const EmptyIcon = () => {
  return (
    <Space>
      <Empty icon={null} />

      <Empty icon={<ArrowDownOutline />} />
    </Space>
  )
}

export default EmptyIcon
