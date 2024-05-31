import Color from 'color'
import isNil from 'lodash/isNil'
import isUndefined from 'lodash/isUndefined'
import noop from 'lodash/noop'
import React, { memo, useMemo } from 'react'
import type { ViewStyle, TextStyle, StyleProp } from 'react-native'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import Flex from '../flex'
import { getDefaultValue, renderTextLikeJSX } from '../helpers'
import { useDebounceFn } from '../hooks'
import Loading from '../loading'
import Theme from '../theme'

import type { ButtonProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * Button 按钮
 * @description 按钮用于触发一个操作，如提交表单。
 */
const Button: React.FC<ButtonProps> = ({
  children,
  style,
  theme,
  text,
  subtext,
  textStyle,
  type = 'primary',
  danger = false,
  size = 'l',
  hairline = false,
  disabled = false,
  loading = false,
  loadingText,
  loadingIcon,
  square = false,
  round = false,
  renderLeftIcon,
  color,
  textColor,
  onPressDebounceWait = 0,

  ...restProps
}) => {
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const { run: runOnPress } = useDebounceFn(restProps.onPress || noop, {
    wait: onPressDebounceWait,
    leading: true,
    trailing: false,
  })

  color = getDefaultValue(
    color,
    danger ? CV.button_danger_color : CV.button_primary_color,
  )
  textColor = getDefaultValue(textColor, CV.button_text_color)

  const [_backgroundColor, _borderColor, _textColor, _borderWidth] =
    useMemo(() => {
      switch (type) {
        case 'hazy': {
          const hazyColor = Color(color)
            .lightness(CV.button_hazy_lightness)
            .hex()
          return [hazyColor, hazyColor, color, 0]
        }

        case 'outline': {
          return [
            CV.button_ghost_background_color,
            CV.button_border_color,
            color,
            1,
          ]
        }

        case 'ghost': {
          return [CV.button_ghost_background_color, color, color, 1]
        }

        case 'link':
          return [
            CV.button_ghost_background_color,
            CV.button_ghost_background_color,
            color,
            0,
          ]

        case 'primary':
        default:
          return [color, color, textColor, 0]
      }
    }, [
      CV.button_border_color,
      CV.button_ghost_background_color,
      CV.button_hazy_lightness,
      color,
      textColor,
      type,
    ])

  const buttonStyles: StyleProp<ViewStyle> = [
    STYLES.button,
    STYLES.button_column,
    {
      height: CV[`button_${size}_height`],
      backgroundColor: _backgroundColor,
      borderColor: _borderColor,
      borderWidth: _borderWidth
        ? hairline
          ? StyleSheet.hairlineWidth
          : _borderWidth
        : _borderWidth,
    },
    STYLES[`button_${size}_padding_horizontal`],
    square ? STYLES.button_square : null,
    round ? STYLES.button_round : null,
    disabled ? STYLES.button_disabled : null,
    loading ? STYLES.button_loading : null,
    style,
  ]
  const commonTextStyle = StyleSheet.flatten<TextStyle>([
    STYLES.text,
    {
      fontSize: CV[`button_${size}_font_size`],
      color: _textColor,
      marginLeft: renderLeftIcon ? CV.button_icon_gap : 0,
    },
  ])

  const textStyleSummary = StyleSheet.flatten<TextStyle>([
    commonTextStyle,
    textStyle,
  ])
  const iconSize = (CV[`button_${size}_loading_size`] ||
    textStyleSummary.fontSize)!
  const iconColor = textStyleSummary.color as string

  const contextJSX = loading ? (
    <Loading
      type="spinner"
      color={iconColor}
      size={iconSize}
      textSize={textStyleSummary.fontSize}
      loadingIcon={loadingIcon}>
      {isUndefined(loadingText) ? text : loadingText}
    </Loading>
  ) : (
    <>
      <Flex direction="row" align="center" justify="center">
        {renderLeftIcon ? renderLeftIcon(iconColor, iconSize) : null}
        <Text style={textStyleSummary} numberOfLines={1}>
          {!isNil(text) ? text : children}
        </Text>
      </Flex>
      {renderTextLikeJSX(
        subtext,
        [
          {
            color: iconColor,
            lineHeight: CV.button_subtext_line_height,
            fontSize: CV.button_subtext_font_size,
            opacity: CV.button_subtext_opacity,
          },
        ],
        {
          numberOfLines: 1,
        },
      )}
    </>
  )

  return (
    <TouchableOpacity
      accessibilityRole="button"
      {...restProps}
      disabled={disabled || loading}
      style={buttonStyles}
      activeOpacity={CV.button_active_opacity}
      onPress={
        restProps.onPress
          ? onPressDebounceWait
            ? runOnPress
            : restProps.onPress
          : undefined
      }>
      {contextJSX}
    </TouchableOpacity>
  )
}

export default memo(Button)
