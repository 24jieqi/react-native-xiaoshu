import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Icon, NoticeBar } from 'react-native-xiaoshu'

const BasicNoticeBar: React.FC = () => {
  return (
    <ScrollView style={Styles.page}>
      <View style={{ height: 20 }} />
      <Text>普通样式</Text>

      <View style={{ height: 20 }} />

      <NoticeBar>
        正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

      <View style={{ height: 20 }} />

      <NoticeBar
        rightIcon
        renderRightIcon={(color, size) => (
          <Icon.ArrowRightOutline color={color} size={size} />
        )}>
        正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

      <View style={{ height: 20 }} />

      <NoticeBar
        rightIcon
        onPress={() => {
          console.log('操作内容')
        }}>
        1正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

      <View style={{ height: 20 }} />

      <NoticeBar numberOfLines={0}>
        正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

      <View style={{ height: 20 }} />

      <Text>带icon</Text>

      <View style={{ height: 20 }} />

      <NoticeBar
        showIcon
        onPress={() => {
          console.log('操作内容')
        }}>
        正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

      <View style={{ height: 20 }} />

      <NoticeBar
        showIcon
        rightIcon
        renderRightIcon={(color, size) => (
          <Icon.ArrowRightOutline color={color} size={size} />
        )}>
        正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

      <View style={{ height: 20 }} />

      <NoticeBar showIcon rightIcon>
        正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

      <View style={{ height: 20 }} />

      <Text>自定义</Text>

      <View style={{ height: 20 }} />

      <NoticeBar
        showIcon
        type="success"
        renderLeftIcon={(color, size) => (
          <Icon.SuccessOutLine color={color} size={size} />
        )}>
        正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

      <View style={{ height: 20 }} />

      <NoticeBar
        showIcon
        type="error"
        renderLeftIcon={(color, size) => (
          <Icon.RemoveFill color={color} size={size} />
        )}>
        正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

      <View style={{ height: 20 }} />

      <NoticeBar
        showIcon
        type="warning"
        renderLeftIcon={(color, size) => (
          <Icon.PlusOutline color={color} size={size} />
        )}>
        正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

      <View style={{ height: 20 }} />

      <NoticeBar
        showIcon
        type="primary"
        renderLeftIcon={(color, size) => (
          <Icon.PlusOutline color={color} size={size} />
        )}>
        正文内容尽量不超一行，多余的部分请省分请省分请省略省略省略
      </NoticeBar>

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
