import React from 'react'
import { View, StyleSheet } from 'react-native'
import type { HeaderBackButtonProps } from '@react-navigation/elements'
import { Icon } from '@fruits-chain/react-native-xiaoshu'

interface BackArrowProps extends HeaderBackButtonProps {}

/**
 * 导航栏左上角返回按钮
 * @description 添加一个反馈高亮
 * @description TODO 修复 使用 memo 包裹后，`src/router/config.tsx` 里面报错的问题
 */
const BackArrow: React.FC<BackArrowProps> = ({ tintColor, ...restProps }) => {
  return (
    <View style={Styles.back}>
      <Icon.ArrowLeftOutline {...restProps} color={tintColor} />
    </View>
  )
}

const Styles = StyleSheet.create({
  back: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default BackArrow
