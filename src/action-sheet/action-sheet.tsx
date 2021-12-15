import React, { memo, isValidElement } from 'react'
import type { TextStyle } from 'react-native'
import { Text, View, ScrollView, TouchableHighlight } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import Popup from '../popup/popup'
import Loading from '../loading/circular'
import { useSafeHeight } from '../hooks'
import { renderTextLikeJSX, isDef } from '../helpers'
import type { ActionSheetProps } from './interface'
import { createStyles } from './style'

/**
 * ActionSheet 动作面板
 * @description 底部弹起的模态面板，包含与当前情境相关的多个选项。
 */
const ActionSheet: React.FC<ActionSheetProps> = ({
  actions,
  title,
  cancelText,
  description,
  round = true,
  onCancel,
  onSelect,
  ...restProps
}) => {
  const safeHeight = useSafeHeight()
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  /** 标题部分 纯文字或自定义 JSX */
  const titleJSX = renderTextLikeJSX(title, STYLES.title, {
    numberOfLines: 1,
  })

  /** 取消文案 纯文字或自定义 JSX */
  const cancelTextJSX = renderTextLikeJSX(
    cancelText,
    [STYLES.btn, STYLES.cancel],
    {
      numberOfLines: 1,
    },
  )

  /** 描述文案 纯文字或自定义 JSX */
  const descriptionJSX = isDef(description) ? (
    isValidElement(description) ? (
      description
    ) : (
      <View style={STYLES.description_box}>
        <Text
          style={[
            STYLES.description,
            titleJSX ? null : STYLES.description_alone,
          ]}
          numberOfLines={1}>
          {description}
        </Text>
      </View>
    )
  ) : null

  const navBarHeight = THEME_VAR.nav_bar_height
  const btnHeight = THEME_VAR.action_sheet_loading_icon_size + 14 * 2
  const descriptionHeight =
    THEME_VAR.action_sheet_description_line_height + (titleJSX ? 14 : 14 * 2)
  const contentHeight =
    safeHeight -
    navBarHeight -
    (titleJSX ? THEME_VAR.action_sheet_header_height : 0) -
    (cancelTextJSX
      ? THEME_VAR.action_sheet_cancel_padding_top + btnHeight
      : 0) -
    (descriptionJSX ? descriptionHeight : 0)
  return (
    <Popup {...restProps} safeAreaInsetBottom position="bottom" round={round}>
      {titleJSX}
      {descriptionJSX}

      <ScrollView style={{ maxHeight: contentHeight }} bounces={false}>
        {actions.map((item, index) => {
          /** 选项的自定义颜色/配置 */
          const customTextStyle: TextStyle = {}

          if (item.color) {
            customTextStyle.color = item.color
          }

          if (item.disabled) {
            customTextStyle.color =
              THEME_VAR.action_sheet_item_disabled_text_color
          }

          return (
            <TouchableHighlight
              key={`${item.name}_${item.subname}_${index}`}
              activeOpacity={1}
              underlayColor={
                item.disabled || item.loading
                  ? THEME_VAR.action_sheet_item_background
                  : THEME_VAR.underlay_color_ddd
              }
              onPress={() => {
                if (!item.disabled && !item.loading) {
                  onSelect?.(item, index)
                }
              }}>
              <View style={STYLES.btn}>
                {item.loading ? (
                  <Loading
                    size={THEME_VAR.action_sheet_loading_icon_size}
                    color={THEME_VAR.action_sheet_item_disabled_text_color}
                  />
                ) : (
                  <>
                    <Text style={[STYLES.item, customTextStyle]}>
                      {item.name}
                    </Text>
                    {item.subname ? (
                      <Text style={[STYLES.item, STYLES.subname]}>
                        {item.subname}
                      </Text>
                    ) : null}
                  </>
                )}
              </View>
            </TouchableHighlight>
          )
        })}
      </ScrollView>

      {cancelTextJSX ? (
        <>
          <View style={STYLES.gap} />
          <TouchableHighlight
            activeOpacity={1}
            underlayColor={THEME_VAR.underlay_color_ddd}
            onPress={onCancel}>
            {cancelTextJSX}
          </TouchableHighlight>
        </>
      ) : null}
    </Popup>
  )
}

export default memo(ActionSheet)
