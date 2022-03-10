import React, { useRef, useCallback, memo, isValidElement } from 'react'
import { View, Text, Animated } from 'react-native'

import Button from '../button'
import { getDefaultValue, easing, renderTextLikeJSX, isDef } from '../helpers'
import { usePersistFn } from '../hooks'
import Popup from '../popup/popup'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { DialogProps } from './interface'
import { varCreator, styleCreator } from './style'

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
  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null)
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const STYLES = createStyle(CV, styleCreator)

  width = getDefaultValue(width, CV.dialog_width)
  duration = getDefaultValue(duration, CV.dialog_transition)

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
          easing: show ? easing.easeOutCirc : easing.easeInCubic,
        },
      )

      fadeInstance.current.start()
    },
    [duration, fadeAnim],
  )
  const onOpenPersistFn = usePersistFn(() => {
    showDialog(true)
    onOpenFn?.()
  })
  const onClosePersistFn = usePersistFn(() => {
    showDialog(false)
    onCloseFn?.()
  })

  const titleJSX = renderTextLikeJSX(title, STYLES.title_text)
  const messageJSX = isDef(message) ? (
    isValidElement(message) ? (
      message
    ) : (
      <Text
        style={[
          STYLES.message_text,
          {
            textAlign: messageAlign,
          },
        ]}>
        {message}
      </Text>
    )
  ) : null

  const cancelButtonProps = {
    color: cancelButtonColor || CV.dialog_cancel_button_text_color,
    text: cancelButtonText,
    loading: cancelButtonLoading,
    onPress: onPressCancel,
  }

  const confirmButtonProps = {
    color: confirmButtonColor || CV.dialog_confirm_button_text_color,
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
      <Animated.View
        style={[
          STYLES.dialog,
          {
            width,
            transform: [
              {
                scale: fadeAnim.interpolate({
                  inputRange: [0, 0.01, 0.98, 1],
                  outputRange: [0, 0.9, 1.02, 1],
                }),
              },
            ],
          },
        ]}>
        {titleJSX}

        {titleJSX ? (
          messageJSX
        ) : (
          <View style={STYLES.content_isolated}>{messageJSX}</View>
        )}

        {children}

        <View style={STYLES.footer}>
          {showCancelButton ? (
            <Button
              {...cancelButtonProps}
              type="link"
              size="xl"
              square
              style={STYLES.btn}
            />
          ) : null}
          {showConfirmButton ? (
            <Button
              {...confirmButtonProps}
              type="link"
              size="xl"
              square
              style={[
                STYLES.btn,
                showCancelButton
                  ? // eslint-disable-next-line react-native/no-inline-styles
                    {
                      // react-native-web 覆盖原 button 样式
                      borderLeftWidth: 1,
                      borderColor: CV.dialog_footer_divider_color,
                    }
                  : null,
              ]}
              textStyle={STYLES.btn_confirm}
            />
          ) : null}
        </View>
      </Animated.View>
    </Popup>
  )
}

export default memo<typeof Dialog>(Dialog)
