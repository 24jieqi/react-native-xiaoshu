import React from 'react'
// import type { TouchableOpacityProps } from 'react-native';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import type { HeaderBackButtonProps } from '@react-navigation/elements'
import { Icon } from 'react-native-xiaoshu'

interface BackArrowProps extends HeaderBackButtonProps {}

/**
 * 导航栏左上角返回按钮
 * @description 添加一个反馈高亮
 * @description TODO 修复 使用 memo 包裹后，`src/router/config.tsx` 里面报错的问题
 */
const BackArrow: React.FC<BackArrowProps> = ({ tintColor, ...restProps }) => {
  return (
    <TouchableOpacity {...restProps}>
      <View style={Styles.back}>
        <Icon.IconArrowOutline direction="left" size={24} color={tintColor} />
      </View>
    </TouchableOpacity>
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
