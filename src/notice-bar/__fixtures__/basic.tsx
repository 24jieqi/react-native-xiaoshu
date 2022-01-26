/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import {
  NoticeBar,
  Icon,
  CellGroup,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

let timer = 0

const onPressNoticeBar = () => {
  console.log('点击了 => ', timer++)
}

const BasicNoticeBar: React.FC = () => {
  return (
    <ScrollView style={Styles.page}>
      <CellGroup title="普通样式">
        <Space>
          <NoticeBar
            message="一袋米要抗几楼，一袋米要抗二楼"
            onPress={onPressNoticeBar}
          />

          <NoticeBar
            message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
            onPress={onPressNoticeBar}
          />

          <NoticeBar
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="closeable"
            onPressClose={onPressNoticeBar}
          />

          <NoticeBar
            message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
            mode="closeable"
            onPressClose={onPressNoticeBar}
          />

          <NoticeBar
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="link"
            onPress={onPressNoticeBar}
          />

          <NoticeBar
            message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
            mode="link"
          />

          <NoticeBar
            message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
            wrapable
          />

          <NoticeBar
            message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
            mode="link"
            wrapable
          />

          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.VolumeOutline color={color} size={size} />
            )}
            message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
            mode="link"
            wrapable
          />
        </Space>
      </CellGroup>

      <CellGroup title="内置颜色">
        <Space>
          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.VolumeOutline color={color} size={size} />
            )}
            message="一袋米要抗几楼，一袋米要抗二楼"
            type="error"
          />

          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.VolumeOutline color={color} size={size} />
            )}
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="closeable"
            type="error"
          />

          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.VolumeOutline color={color} size={size} />
            )}
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="link"
            type="error"
          />

          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.VolumeOutline color={color} size={size} />
            )}
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="closeable"
            type="success"
          />

          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.VolumeOutline color={color} size={size} />
            )}
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="link"
            type="primary"
          />
        </Space>
      </CellGroup>

      <CellGroup title="带 icon">
        <Space>
          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.VolumeOutline color={color} size={size} />
            )}
            message="一袋米要抗几楼，一袋米要抗二楼"
          />

          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.VolumeOutline color={color} size={size} />
            )}
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="closeable"
          />

          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.VolumeOutline color={color} size={size} />
            )}
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="link"
          />
        </Space>
      </CellGroup>

      <CellGroup title="自定义">
        <Space>
          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.SuccessCircleOutline color={color} size={size} />
            )}
            color="#000"
            backgroundColor="#EBFFF2"
            iconColor="#24B356"
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="link"
          />

          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.CrossCircleOutline color={color} size={size} />
            )}
            color="#000"
            backgroundColor="#FFEBEC"
            iconColor="#FF3341"
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="link"
          />

          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.WarningCircleOutline color={color} size={size} />
            )}
            color="#000"
            backgroundColor="#FFEFD9"
            iconColor="#FE7A33"
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="link"
          />

          <NoticeBar
            renderLeftIcon={(color, size) => (
              <Icon.WarningCircleOutline color={color} size={size} />
            )}
            color="#000"
            backgroundColor="#E6F0FF"
            iconColor="#0065FE"
            message="一袋米要抗几楼，一袋米要抗二楼"
            mode="link"
          />
        </Space>
      </CellGroup>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },
})

export default BasicNoticeBar
