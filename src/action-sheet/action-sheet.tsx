import React, { memo, isValidElement } from 'react'
import { Text, View, ScrollView } from 'react-native'

import Button from '../button'
import { varCreator as varCreatorButton } from '../button/style'
import Divider from '../divider'
import { isDef } from '../helpers'
import { useSafeHeight } from '../hooks'
import { varCreator as varCreatorNavBar } from '../nav-bar/style'
import Popup from '../popup/popup'
import PopupHeader from '../popup/popup-header'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { ActionSheetProps } from './interface'
import { varCreator, styleCreator } from './style'

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
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const CV_NAV_BAR = createVar(TOKENS, varCreatorNavBar)
  const CV_BUTTON = createVar(TOKENS, varCreatorButton)
  const STYLES = createStyle(CV, styleCreator)
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

  const btnHeight = CV_BUTTON.button_xl_height
  const descriptionHeight =
    CV.action_sheet_description_line_height + (isTitleDef ? 12 : 12 * 2) + 1
  const contentHeight =
    safeHeight -
    (isTitleDef ? CV_NAV_BAR.nav_bar_height : 0) -
    (isCancelTextDef ? CV.action_sheet_cancel_padding_top + btnHeight : 0) -
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
              color={item.color || CV.action_sheet_text_color}
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
            color={CV.action_sheet_text_color}
            textStyle={STYLES.button_text}
            onPress={onCancel}
          />
        </>
      ) : null}
    </Popup>
  )
}

export default memo(ActionSheet)
