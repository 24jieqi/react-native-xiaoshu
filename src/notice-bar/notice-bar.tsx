import {
  ArrowRightOutline,
  CrossOutline,
} from '@fruits-chain/icons-react-native'
import Color from 'color'
import isNil from 'lodash/isNil'
import noop from 'lodash/noop'
import React, { memo, useState, useCallback, useMemo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { TouchableWithoutFeedback, View } from 'react-native'

import {
  getDefaultValue,
  renderTextLikeJSX,
  pickTouchablePropsField,
  omitTouchablePropsField,
} from '../helpers'
import { usePersistFn } from '../hooks'
import Theme from '../theme'

import type { NoticeBarProps, NoticeBarMode } from './interface'
import { varCreator, styleCreator } from './style'

const getModeIcon = (mode: NoticeBarMode | undefined) => {
  switch (mode) {
    case 'closeable':
      return CrossOutline
    default:
      return ArrowRightOutline
  }
}

/**
 * 通知栏
 */
const NoticeBar: React.FC<NoticeBarProps> = ({
  theme,
  message,
  messageTextStyle,
  status = 'warning',
  mode,
  bordered = false,
  color,
  backgroundColor,
  iconColor,
  wrapable = false,
  square = true,
  size = 'm',
  renderLeftIcon,
  renderRightIcon,
  onPressClose,

  // TouchableWithoutFeedback 相关属性
  style,
  ...restProps
}) => {
  const onPressClosePersistFn = usePersistFn(onPressClose || noop)
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const [visible, setVisible] = useState(true)

  const textColor =
    CV[`notice_bar_${status}_text_color`] || CV.notice_bar_warning_text_color
  const barBackgroundColor = useMemo(
    () =>
      Color(textColor)
        .lightness(CV.notice_bar_background_color_lightness)
        .hex(),
    [CV.notice_bar_background_color_lightness, textColor],
  )

  // 修正数据
  color = getDefaultValue(color, textColor)
  backgroundColor = getDefaultValue(backgroundColor, barBackgroundColor)
  iconColor = getDefaultValue(iconColor, color)!

  const noticeBarStyles: StyleProp<ViewStyle> = [
    STYLES.notice_bar,
    STYLES[`notice_bar_${size}`],
    {
      backgroundColor,
      borderRadius: square ? 0 : CV.notice_bar_border_radius,
      borderColor: color,
      borderWidth: bordered ? 1 : 0,
    },
    style,
  ]

  const ModeIcon = getModeIcon(mode)
  const leftIconJSX = renderLeftIcon?.(iconColor, CV.notice_bar_icon_size)
  const rightIconJSX = renderRightIcon?.(iconColor, CV.notice_bar_icon_size)
  const messageJSX = renderTextLikeJSX(
    message,
    [
      STYLES.text,
      {
        color,
        marginLeft: !isNil(leftIconJSX)
          ? CV.notice_bar_icon_margin_horizontal
          : 0,
        marginRight:
          !isNil(rightIconJSX) || mode
            ? CV.notice_bar_icon_margin_horizontal
            : 0,
      },
      messageTextStyle,
    ],
    {
      numberOfLines: wrapable ? undefined : 1,
    },
  )

  const onPressModeIcon = useCallback(() => {
    if (mode === 'closeable') {
      setVisible(false)
      onPressClosePersistFn()
    }
  }, [mode, onPressClosePersistFn])

  const touchableProps = pickTouchablePropsField(restProps)
  const viewProps = omitTouchablePropsField(restProps)

  if (visible) {
    return (
      <TouchableWithoutFeedback {...touchableProps}>
        <View {...viewProps} style={noticeBarStyles}>
          {leftIconJSX}
          {messageJSX}
          {rightIconJSX}
          {mode ? (
            <ModeIcon
              testID="NOTICE_BAR_ICON"
              color={iconColor}
              size={CV.notice_bar_icon_size}
              onPress={onPressModeIcon}
              pointerEvents={mode === 'closeable' ? 'auto' : 'none'}
            />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return null
}

export default memo(NoticeBar)
