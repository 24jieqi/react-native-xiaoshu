/**
 * title: 模式
 * description: 共有两个种模式可以使用。
 */

import { NoticeBar, Space } from '@fruits-chain/react-native-xiaoshu'

const NoticeBarMode = () => {
  return (
    <Space>
      <NoticeBar
        message="可关闭：一袋米要抗几楼，一袋米要抗二楼"
        mode="closeable"
        onPressClose={() => {
          console.log('onPressClose')
        }}
      />

      <NoticeBar
        message="可关闭：一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
        wrapable
        mode="closeable"
        onPressClose={() => {
          console.log('onPressClose')
        }}
      />

      <NoticeBar message="链接：一袋米要抗几楼，一袋米要抗二楼" mode="link" />

      <NoticeBar
        message="链接：一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
        mode="link"
        wrapable
      />
    </Space>
  )
}

export default NoticeBarMode
