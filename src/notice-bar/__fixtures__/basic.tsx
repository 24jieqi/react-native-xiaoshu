import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { NoticeBar, Icon } from 'react-native-xiaoshu'

let timer = 0

const onPressNoticeBar = () => {
  console.log('点击了 => ', timer++)
}

const BasicNoticeBar: React.FC = () => {
  return (
    <ScrollView style={Styles.page}>
      <View style={{ height: 20 }} />

      <Text>普通样式</Text>

      <View style={{ height: 20 }} />

      <NoticeBar
        message="一袋米要抗几楼，一袋米要抗二楼"
        onPress={onPressNoticeBar}
      />

      <View style={{ height: 20 }} />

      <NoticeBar
        message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
        onPress={onPressNoticeBar}
      />

      <View style={{ height: 20 }} />

      <NoticeBar
        message="一袋米要抗几楼，一袋米要抗二楼"
        mode="closeable"
        onPressClose={onPressNoticeBar}
      />

      <View style={{ height: 20 }} />

      <NoticeBar
        message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
        mode="closeable"
        onPressClose={onPressNoticeBar}
      />

      <View style={{ height: 20 }} />

      <NoticeBar
        message="一袋米要抗几楼，一袋米要抗二楼"
        mode="link"
        onPress={onPressNoticeBar}
      />

      <View style={{ height: 20 }} />

      <NoticeBar
        message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
        mode="link"
      />

      <View style={{ height: 20 }} />

      <NoticeBar
        message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
        wrapable
      />

      <View style={{ height: 20 }} />

      <NoticeBar
        message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
        mode="link"
        wrapable
      />

      <View style={{ height: 20 }} />

      <NoticeBar
        renderLeftIcon={(color, size) => (
          <Icon.VolumeOutline color={color} size={size} />
        )}
        message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
        mode="link"
        wrapable
      />

      <View style={{ height: 20 }} />

      <Text>带 icon</Text>

      <View style={{ height: 20 }} />

      <NoticeBar
        renderLeftIcon={(color, size) => (
          <Icon.VolumeOutline color={color} size={size} />
        )}
        message="一袋米要抗几楼，一袋米要抗二楼"
      />

      <View style={{ height: 20 }} />

      <NoticeBar
        renderLeftIcon={(color, size) => (
          <Icon.VolumeOutline color={color} size={size} />
        )}
        message="一袋米要抗几楼，一袋米要抗二楼"
        mode="closeable"
      />

      <View style={{ height: 20 }} />

      <NoticeBar
        renderLeftIcon={(color, size) => (
          <Icon.VolumeOutline color={color} size={size} />
        )}
        message="一袋米要抗几楼，一袋米要抗二楼"
        mode="link"
      />

      <View style={{ height: 20 }} />

      <Text>自定义</Text>

      <View style={{ height: 20 }} />

      <NoticeBar
        renderLeftIcon={(color, size) => (
          <Icon.SuccessCircleOutLine color={color} size={size} />
        )}
        color="#000"
        backgroundColor="#EBFFF2"
        iconColor="#24B356"
        message="一袋米要抗几楼，一袋米要抗二楼"
        mode="link"
      />

      <View style={{ height: 20 }} />

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

      <View style={{ height: 20 }} />

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

      <View style={{ height: 20 }} />

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

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },
})

export default BasicNoticeBar
