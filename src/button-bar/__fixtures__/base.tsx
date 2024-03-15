/**
 * title: 基础用法
 * description: 在内部放置一个、多个按钮。
 */
import { StyleSheet } from 'react-native'
import { ButtonBar, Button, Space } from '@fruits-chain/react-native-xiaoshu'
import { PlusOutline } from '@fruits-chain/icons-react-native'

const ButtonBarBase = () => {
  return (
    <Space tail head>
      <ButtonBar>
        <Space direction="horizontal">
          <Button type="hazy" danger style={STYLES.audit}>
            拒绝
          </Button>
          <Button type="hazy" style={STYLES.audit}>
            同意
          </Button>
        </Space>
      </ButtonBar>

      <ButtonBar alone>
        <Button
          type="primary"
          size="l"
          renderLeftIcon={(color, size) => (
            <PlusOutline color={color} size={size} />
          )}>
          新增数据
        </Button>
      </ButtonBar>
    </Space>
  )
}

const STYLES = StyleSheet.create({
  audit: {
    minWidth: 96,
  },
})

export default ButtonBarBase
