/**
 * title: 自定义
 * description: 根据自身需求自定义组件。
 */

import {
  NewColours,
  SuccessCircleOutline,
  VolumeOutline,
  WarningCircleOutline,
} from '@fruits-chain/icons-react-native'
import { NoticeBar, Space } from '@fruits-chain/react-native-xiaoshu'

const NoticeBarCustom = () => {
  return (
    <Space>
      <NoticeBar
        renderLeftIcon={(color, size) => (
          <VolumeOutline color={color} size={size} />
        )}
        message="重要通知：一袋米要抗几楼，一袋米要抗二楼"
        mode="link"
        status="error"
      />

      <NoticeBar
        renderLeftIcon={(color, size) => <NewColours size={size} />}
        message="一袋米要抗几楼，一袋米要抗二楼"
        status="success"
      />

      <NoticeBar
        renderLeftIcon={(color, size) => (
          <SuccessCircleOutline color={color} size={size} />
        )}
        color="#000"
        backgroundColor="#EBFFF2"
        iconColor="#24B356"
        message="一袋米要抗几楼，一袋米要抗二楼"
        mode="link"
      />

      <NoticeBar
        renderLeftIcon={(color, size) => (
          <WarningCircleOutline color={color} size={size} />
        )}
        renderRightIcon={(color, size) => (
          <SuccessCircleOutline color={color} size={size} />
        )}
        color="#098"
        backgroundColor="#123"
        iconColor="#098"
        message="一袋米要抗几楼，一袋米要抗二楼"
      />
    </Space>
  )
}

export default NoticeBarCustom
