import React, { memo, isValidElement } from 'react'
import type { TextStyle } from 'react-native'
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

import { useTheme, widthStyle } from '../theme'
import Popup from '../popup/popup'
import Loading from '../loading/circular'
import useSafeHeight from '../hooks/useSafeHeight'
import { isDef } from '../helpers/typeof'
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
  const themeVar = useTheme()
  const Styles = widthStyle(themeVar, createStyles)

  /** 标题部分 纯文字或自定义 JSX */
  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={Styles.title} numberOfLines={1}>
        {title}
      </Text>
    )
  ) : null

  /** 取消文案 纯文字或自定义 JSX */
  const cancelTextJSX = isDef(cancelText) ? (
    isValidElement(cancelText) ? (
      cancelText
    ) : (
      <Text
        style={StyleSheet.flatten([Styles.btn, Styles.cancel])}
        numberOfLines={1}>
        {cancelText}
      </Text>
    )
  ) : null

  /** 描述文案 纯文字或自定义 JSX */
  const descriptionJSX = isDef(description) ? (
    isValidElement(description) ? (
      description
    ) : (
      <View style={Styles.description_box}>
        <Text
          style={StyleSheet.flatten([
            Styles.description,
            titleJSX ? null : Styles.description_alone,
          ])}
          numberOfLines={1}>
          {description}
        </Text>
      </View>
    )
  ) : null

  const navBarHeight = themeVar.nav_bar_height
  const btnHeight = themeVar.action_sheet_loading_icon_size + 14 * 2
  const descriptionHeight =
    themeVar.action_sheet_description_line_height + (titleJSX ? 14 : 14 * 2)
  const contentHeight =
    safeHeight -
    navBarHeight -
    (titleJSX ? themeVar.action_sheet_header_height : 0) -
    (cancelTextJSX ? themeVar.action_sheet_cancel_padding_top + btnHeight : 0) -
    (descriptionJSX ? descriptionHeight : 0)
  return (
    <Popup {...restProps} safeAreaInsetBottom position="bottom" round={round}>
      {titleJSX}
      {descriptionJSX}

      <ScrollView style={{ maxHeight: contentHeight }}>
        {actions.map((item, index) => {
          /** 选项的自定义颜色/配置 */
          const customTextStyle: TextStyle = {}

          if (item.color) {
            customTextStyle.color = item.color
          }

          if (item.disabled) {
            customTextStyle.color =
              themeVar.action_sheet_item_disabled_text_color
          }

          return (
            <TouchableHighlight
              key={`${item.name}_${item.subname}_${index}`}
              activeOpacity={1}
              underlayColor={
                item.disabled || item.loading
                  ? themeVar.action_sheet_item_background
                  : themeVar.underlay_color_ddd
              }
              onPress={() => {
                if (!item.disabled && !item.loading) {
                  onSelect && onSelect(item, index)
                }
              }}>
              <View style={Styles.btn}>
                {item.loading ? (
                  <Loading
                    size={themeVar.action_sheet_loading_icon_size}
                    color={themeVar.action_sheet_item_disabled_text_color}
                  />
                ) : (
                  <>
                    <Text
                      style={StyleSheet.flatten([
                        Styles.item,
                        customTextStyle,
                      ])}>
                      {item.name}
                    </Text>
                    {item.subname ? (
                      <Text
                        style={StyleSheet.flatten([
                          Styles.item,
                          Styles.subname,
                        ])}>
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
          <View style={Styles.gap} />
          <TouchableHighlight
            activeOpacity={1}
            underlayColor={themeVar.underlay_color_ddd}
            onPress={onCancel}>
            {cancelTextJSX}
          </TouchableHighlight>
        </>
      ) : null}
    </Popup>
  )
}

export default memo(ActionSheet)
