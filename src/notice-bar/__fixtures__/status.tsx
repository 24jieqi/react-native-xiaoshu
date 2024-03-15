/**
 * title: 内置状态
 * description: 共有四种样式 primary、success、warning、error。
 */

import { NoticeBar, Space } from '@fruits-chain/react-native-xiaoshu'

const NoticeBarStatus = () => {
  return (
    <Space>
      <NoticeBar message="一袋米要抗几楼，一袋米要抗二楼" status="primary" />
      <NoticeBar message="一袋米要抗几楼，一袋米要抗二楼" status="success" />
      <NoticeBar message="一袋米要抗几楼，一袋米要抗二楼" status="warning" />
      <NoticeBar message="一袋米要抗几楼，一袋米要抗二楼" status="error" />
    </Space>
  )
}

export default NoticeBarStatus
