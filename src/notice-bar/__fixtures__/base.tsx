/**
 * title: 基本
 * description: 最简单的用法，适用于简短的警告提示。
 */

import { NoticeBar, Space } from '@fruits-chain/react-native-xiaoshu'

const NoticeBarBase = () => {
  return (
    <Space>
      <NoticeBar message="一袋米要抗几楼，一袋米要抗二楼" />

      <NoticeBar message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森" />

      <NoticeBar
        message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
        wrapable
      />

      <NoticeBar message="一袋米要抗几楼，一袋米要抗二楼" bordered />

      <NoticeBar
        message="一袋米要抗几楼，一袋米要抗二楼"
        bordered
        square={false}
      />
    </Space>
  )
}

export default NoticeBarBase
