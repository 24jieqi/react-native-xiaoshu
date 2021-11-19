import React, { useEffect, useRef, useCallback, memo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { Animated, BackHandler } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Overlay from '../overlay/overlay'
import { useTheme, widthStyle } from '../theme'
import useState from '../hooks/useStateUpdate'
import usePersistFn from '../hooks/usePersistFn'
import * as helpers from '../helpers'
import { getPosition, getTransform } from './helper'
import { createStyles, getBorderRadius, PopupPositionMap } from './style'
import type { PopupProps, State } from './interface'

/**
 * Popup 弹出层
 * @description 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。
 */
const Popup: React.FC<PopupProps> = ({
  children,
  style,
  visible = false,
  overlay = true,
  duration,
  closeOnPressOverlay = true,
  position = 'center',
  round = false,
  safeAreaInsetBottom = false,
  lazyRender = true,
  onPressOverlay: onPressOverlayFn,
  onOpen: onOpenFn,
  onOpened: onOpenedFn,
  onClose: onCloseFn,
  onClosed: onClosedFn,
  onRequestClose,
}) => {
  const insets = useSafeAreaInsets()
  const onPressOverlayPersistFn = usePersistFn(onPressOverlayFn)
  const onOpenPersistFn = usePersistFn(onOpenFn)
  const onOpenedPersistFn = usePersistFn(onOpenedFn)
  const onClosePersistFn = usePersistFn(onCloseFn)
  const onClosedPersistFn = usePersistFn(onClosedFn)
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  duration = helpers.getDefaultValue(
    duration,
    THEME_VAR.animation_duration_base,
  )

  const [state, setState] = useState<State>({
    visible,
    // 遮罩层显示、隐藏单独管理，避免弹出层完成后才触发关闭，两个组件应该同时变化
    overlayVisible: visible,
    zIndex: helpers.getNextZIndex(),
    lazyRender,
  })
  const MountedRef = useRef(false)

  const fadeAnim = useRef(
    new Animated.Value(getPosition(visible, position)),
  ).current
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null)

  /** 点击遮罩层 */
  const onPressOverlay = useCallback(() => {
    if (closeOnPressOverlay) {
      // 关闭弹层
      onPressOverlayPersistFn()
    }
  }, [closeOnPressOverlay, onPressOverlayPersistFn])

  // 监听状态变化，执行动画
  useEffect(() => {
    if (visible) {
      // 弹出弹出，立即响应
      setState({
        visible,
        zIndex: helpers.getNextZIndex(),
        lazyRender: false,
      })
    }

    // 遮罩层状态实时显示
    setState({
      overlayVisible: visible,
    })

    if (MountedRef.current) {
      fadeAnim.setValue(getPosition(!visible, position))

      if (visible) {
        onOpenPersistFn()
      } else {
        onClosePersistFn()
      }

      fadeInstance.current = Animated.timing(
        fadeAnim, // 动画中的变量值
        {
          toValue: getPosition(visible, position),
          duration: duration,
          useNativeDriver: true,
          easing: visible
            ? helpers.easing.easeOutCirc
            : helpers.easing.easeInCubic,
        },
      )

      fadeInstance.current.start(({ finished }) => {
        if (finished) {
          fadeInstance.current = null
          if (!visible) {
            setState({ visible })
            onClosedPersistFn()
          } else {
            onOpenedPersistFn()
          }
        }
      })
    }

    return () => {
      // 停止动画
      if (fadeInstance.current) {
        fadeInstance.current.stop()
        fadeInstance.current = null
      }
    }
  }, [
    visible,
    duration,
    fadeAnim,
    position,
    onOpenPersistFn,
    onOpenedPersistFn,
    onClosePersistFn,
    onClosedPersistFn,
  ])

  // 初始化好组件
  useEffect(() => {
    MountedRef.current = true
  }, [])

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
  }, [onRequestClose, visible])

  const popupStyles: StyleProp<ViewStyle> = [
    STYLES.popup,
    getBorderRadius(THEME_VAR, position, round),
    {
      paddingBottom: safeAreaInsetBottom ? insets.bottom : 0,
      zIndex: state.zIndex,
    },
    style,
    state.visible
      ? [
          STYLES.popup_active,
          getTransform(position, fadeAnim),
          PopupPositionMap[position],
        ]
      : null,
  ]

  if (state.lazyRender) {
    return null
  }

  return (
    <>
      {overlay ? (
        <Overlay
          visible={state.overlayVisible}
          zIndex={state.zIndex}
          duration={duration}
          onPress={onPressOverlay}
        />
      ) : null}

      <Animated.View
        style={popupStyles}
        pointerEvents={position !== 'center' ? undefined : 'box-none'}>
        {children}
      </Animated.View>
    </>
  )
}

export default memo<typeof Popup>(Popup)
