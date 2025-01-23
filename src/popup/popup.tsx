import noop from 'lodash/noop'
import React, { useEffect, useRef, useCallback, memo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { Animated, BackHandler } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import * as helpers from '../helpers'
import { usePersistFn } from '../hooks'
import useState from '../hooks/useStateUpdate'
import Overlay from '../overlay/overlay'
import Theme from '../theme'

import { getPosition, getTransform } from './helper'
import type { PopupProps, State } from './interface'
import {
  varCreator,
  styleCreator,
  getBorderRadius,
  PopupPositionMap,
} from './style'

/**
 * Popup 弹出层
 * @description 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。
 */
const Popup: React.FC<PopupProps> = ({
  children,
  style,
  theme,
  visible = false,
  overlay = true,
  duration,
  closeOnPressOverlay = true,
  position = 'center',
  round = false,
  safeAreaInsetBottom = false,
  safeAreaInsetTop = false,
  lazyRender = true,
  destroyOnClosed = false,
  onPressOverlay: onPressOverlayFn,
  onOpen: onOpenFn,
  onOpened: onOpenedFn,
  onClose: onCloseFn,
  onClosed: onClosedFn,
  onRequestClose,
  overlayBackgroundColor,
}) => {
  const insets = useSafeAreaInsets()
  const onPressOverlayPersistFn = usePersistFn(onPressOverlayFn || noop)
  const onOpenPersistFn = usePersistFn(onOpenFn || noop)
  const onOpenedPersistFn = usePersistFn(onOpenedFn || noop)
  const onClosePersistFn = usePersistFn(onCloseFn || noop)
  const onClosedPersistFn = usePersistFn(onClosedFn || noop)
  const [CV, STYLES, TOKENS] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })

  duration = helpers.getDefaultValue(duration, TOKENS.animation_duration_base)

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
            setState({ visible, lazyRender: destroyOnClosed })
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
    destroyOnClosed,
    duration,
    fadeAnim,
    position,
    onClosedPersistFn,
    onClosePersistFn,
    onOpenedPersistFn,
    onOpenPersistFn,
    visible,
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
    getBorderRadius(CV, position, round),
    {
      paddingBottom: state.visible && safeAreaInsetBottom ? insets.bottom : 0,
      paddingTop: state.visible && safeAreaInsetTop ? insets.top : 0,
      zIndex: state.zIndex,
    },
    style,
    state.visible
      ? [
          STYLES.popup_active,
          getTransform(position, fadeAnim),
          PopupPositionMap[position],
        ]
      : STYLES.popup_hide,
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
          backgroundColor={overlayBackgroundColor}
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

export default memo(Popup)
