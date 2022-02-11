import React, { memo, isValidElement } from 'react'
import { Text, View, ScrollView } from 'react-native'

import Button from '../button'
import Divider from '../divider'
import { isDef } from '../helpers'
import { useSafeHeight } from '../hooks'
import PopupHeader from '../popup/header'
import Popup from '../popup/popup'
import { useTheme, widthStyle } from '../theme'

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
  const isTitleDef = isDef(title)
  const isCancelTextDef = isDef(cancelText)
  const isDescriptionDef = isDef(description)

  /** 描述文案 纯文字或自定义 JSX */
  const descriptionJSX = isDescriptionDef ? (
    isValidElement(description) ? (
      description
    ) : (
      <>
        <Text
          style={[
            STYLES.description,
            isTitleDef ? null : STYLES.description_alone,
          ]}
          numberOfLines={1}>
          {description}
        </Text>
        <Divider />
      </>
    )
  ) : null

  const btnHeight = THEME_VAR.button_xl_height
  const descriptionHeight =
    THEME_VAR.action_sheet_description_line_height +
    (isTitleDef ? 12 : 12 * 2) +
    1
  const contentHeight =
    safeHeight -
    (isTitleDef ? THEME_VAR.nav_bar_height : 0) -
    (isCancelTextDef
      ? THEME_VAR.action_sheet_cancel_padding_top + btnHeight
      : 0) -
    (isDescriptionDef ? descriptionHeight : 0)

  return (
    <Popup {...restProps} safeAreaInsetBottom position="bottom" round={round}>
      {isTitleDef ? <PopupHeader title={title} showClose={false} /> : null}
      {descriptionJSX}

      <ScrollView style={{ maxHeight: contentHeight }} bounces={false}>
        {actions.map((item, index) => {
          return (
            <Button
              key={`${item.name}_${index}`}
              text={item.name}
              disabled={item.disabled}
              loading={item.loading}
              color={item.color || THEME_VAR.action_sheet_text_color}
              type="link"
              size="xl"
              textStyle={STYLES.button_text}
              onPress={() => {
                if (!item.disabled && !item.loading) {
                  onSelect?.(item, index)
                }
              }}
            />
          )
        })}
      </ScrollView>

      {isCancelTextDef ? (
        <>
          <View style={STYLES.gap} />
          <Button
            text={cancelText}
            type="link"
            size="xl"
            color={THEME_VAR.action_sheet_text_color}
            textStyle={STYLES.button_text}
            onPress={onCancel}
          />
        </>
      ) : null}
    </Popup>
  )
}

export default memo(ActionSheet)
