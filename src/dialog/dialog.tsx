import React, { useRef, useCallback, memo, isValidElement } from 'react'
import type { TextStyle } from 'react-native'
import { View, Text, Animated, StyleSheet } from 'react-native'

import Popup from '../popup/popup'
import Button from '../button'
import { useTheme } from '../theme'
import usePersistFn from '../hooks/usePersistFn'
import { isDef } from '../helpers/typeof'
import * as helpers from '../helpers'
import { createStyles } from './style'
import type { DialogProps } from './interface'

/**
 * Dialog 弹出框
 * @description 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。
 * @description 弹出框组件支持函数调用和组件调用两种方式。
 */
const Dialog: React.FC<DialogProps> = ({
  children,
  title,
  message,
  width,
  messageAlign = 'center',
  showConfirmButton = true,
  showCancelButton = false,
  confirmButtonText = '确认',
  cancelButtonText = '取消',
  confirmButtonColor,
  cancelButtonColor,
  confirmButtonLoading = false,
  cancelButtonLoading = false,
  onPressCancel,
  onPressConfirm,
  duration,
  onOpen: onOpenFn,
  onClose: onCloseFn,
  ...resetProps
}) => {
  const themeVar = useTheme()
  const Styles = createStyles(themeVar, { messageAlign, width })

  if (!isDef(duration)) {
    duration = themeVar.dialog_transition
  }

  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null)
  const showDialog = useCallback(
    (show: boolean) => {
      if (fadeInstance.current) {
        fadeInstance.current.stop()
        fadeInstance.current = null
      }

      fadeInstance.current = Animated.timing(
        fadeAnim, // 动画中的变量值
        {
          toValue: show ? 1 : 0,
          duration: duration,
          useNativeDriver: true,
          easing: show
            ? helpers.easing.easeOutCirc
            : helpers.easing.easeInCubic,
        },
      )

      fadeInstance.current.start()
    },
    [duration, fadeAnim],
  )
  const onOpenPersistFn = usePersistFn(() => {
    showDialog(true)
    onOpenFn && onOpenFn()
  })
  const onClosePersistFn = usePersistFn(() => {
    showDialog(false)
    onCloseFn && onCloseFn()
  })

  const dialogStyleSummary = StyleSheet.flatten([
    Styles.dialog,
    {
      transform: [
        {
          scale: fadeAnim.interpolate({
            inputRange: [0, 0.01, 0.98, 1],
            outputRange: [0, 0.9, 1.02, 1],
          }),
        },
      ],
    },
  ])
  const messageTextStyleSummary = StyleSheet.flatten<TextStyle>([
    Styles.messageText,
    title ? Styles.messageTextHasTitle : null,
  ])

  /** 标题部分 纯文字或自定义 JSX */
  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={Styles.titleText}>{title}</Text>
    )
  ) : null

  const messageJSX = isDef(message) ? (
    isValidElement(message) ? (
      message
    ) : (
      <Text style={messageTextStyleSummary}>{message}</Text>
    )
  ) : (
    children
  )

  const cancelButtonProps = {
    color: cancelButtonColor || themeVar.dialog_cancel_button_text_color,
    text: cancelButtonText,
    loading: cancelButtonLoading,
    onPress: onPressCancel,
  }

  const confirmButtonProps = {
    color: confirmButtonColor || themeVar.dialog_confirm_button_text_color,
    text: confirmButtonText,
    loading: confirmButtonLoading,
    onPress: onPressConfirm,
  }

  return (
    <Popup
      {...resetProps}
      duration={duration}
      onOpen={onOpenPersistFn}
      onClose={onClosePersistFn}>
      <Animated.View style={dialogStyleSummary}>
        {titleJSX}

        {titleJSX ? (
          messageJSX
        ) : (
          <View style={Styles.contentIsolated}>{messageJSX}</View>
        )}

        <View style={Styles.footer}>
          {showCancelButton ? (
            <Button
              {...cancelButtonProps}
              plain
              size="large"
              style={Styles.btn}
            />
          ) : null}
          {showConfirmButton ? (
            <Button
              {...confirmButtonProps}
              plain
              size="large"
              style={StyleSheet.flatten([
                Styles.btn,
                showCancelButton ? Styles.btnLeft : null,
              ])}
            />
          ) : null}
        </View>
      </Animated.View>
    </Popup>
  )
}

export default memo<typeof Dialog>(Dialog)
