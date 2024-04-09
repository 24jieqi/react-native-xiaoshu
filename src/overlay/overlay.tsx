import isUndefined from 'lodash/isUndefined'
import React, { useEffect, useRef, useState, memo } from 'react'
import {
  TouchableOpacity,
  Animated,
  BackHandler,
  StyleSheet,
} from 'react-native'

import { getDefaultValue } from '../helpers'
import Theme from '../theme'

import type { OverlayProps } from './interface'
import { varCreator } from './style'

/**
 * Overlay 遮罩层
 * @description 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。
 * TODO 统计遮罩层数量，动态控制状态栏的颜色，避免黑色遮罩层配合黑色文字的状态栏。
 */
const Overlay: React.FC<OverlayProps> = ({
  testID,
  children,
  theme,
  style,
  overlayStyle,
  zIndex,
  visible = false,
  duration,
  onPress,
  onRequestClose,
  backgroundColor,
}) => {
  const [CV, , TOKENS] = Theme.useStyle({
    varCreator,
    theme,
  })
  const fadeAnim = useRef(new Animated.Value(0))
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null)
  const [localVisible, setLocalVisible] = useState(visible)

  duration = getDefaultValue(duration, TOKENS.animation_duration_base)
  backgroundColor = getDefaultValue(
    backgroundColor,
    CV.overlay_background_color,
  )

  // 监听状态变化，执行动画
  useEffect(() => {
    if (visible) {
      setLocalVisible(true)
    }
    fadeInstance.current = Animated.timing(
      fadeAnim.current, // 动画中的变量值
      {
        toValue: visible ? 1 : 0,
        duration: duration,
        useNativeDriver: true,
      },
    )

    fadeInstance.current.start(({ finished }) => {
      if (finished) {
        fadeInstance.current = null
        if (!visible) {
          setLocalVisible(false)
        }
      }
    })

    return () => {
      // 停止动画
      if (fadeInstance.current) {
        fadeInstance.current.stop()
        fadeInstance.current = null
      }
    }
  }, [visible, duration])

  // Android 返回按钮
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (typeof onRequestClose === 'function' && visible) {
          return onRequestClose()
        }

        return false
      },
    )

    return () => backHandler.remove()
  }, [visible, onRequestClose])

  if (!localVisible) {
    // TODO 优化文档报错
    // 直接返回 null dumi 报错 -、-
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>
  }

  return (
    <Animated.View
      testID={testID}
      style={[
        STYLES.overlay,
        localVisible ? STYLES.overlay_active : null,
        {
          opacity: fadeAnim.current,
          backgroundColor: backgroundColor,
          zIndex: !isUndefined(zIndex) ? zIndex : CV.overlay_z_index,
        },
        overlayStyle,
      ]}>
      <TouchableOpacity
        style={[STYLES.touchable, style]}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    </Animated.View>
  )
}

const STYLES = StyleSheet.create({
  overlay: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  overlay_active: {
    position: 'absolute',
  },

  touchable: {
    flex: 1,
  },
})

export default memo(Overlay)
