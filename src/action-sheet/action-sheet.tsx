import isNil from 'lodash/isNil'
import React, { memo, isValidElement } from 'react'
import { Text, View, ScrollView } from 'react-native'

import Button from '../button'
import Divider from '../divider'
import { useSafeHeight } from '../hooks'
import Popup from '../popup/popup'
import PopupHeader from '../popup/popup-header'
import Theme from '../theme'

import type { ActionSheetProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * ActionSheet 动作面板
 * @description 底部弹起的模态面板，包含与当前情境相关的多个选项。
 */
const ActionSheet: React.FC<ActionSheetProps> = ({
  theme,
  actions,
  title,
  cancelText,
  description,
  safeAreaInsetTop,
  round = true,
  onCancel,
  onSelect,
  ...restProps
}) => {
  const safeHeight = useSafeHeight({ top: safeAreaInsetTop })
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const isTitleDef = !isNil(title)
  const isCancelTextDef = !isNil(cancelText)
  const isDescriptionDef = !isNil(description)

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

  return (
    <Popup {...restProps} safeAreaInsetBottom position="bottom" round={round}>
      <View style={{ maxHeight: safeHeight }}>
        {isTitleDef ? <PopupHeader title={title} showClose={false} /> : null}
        {descriptionJSX}

        <ScrollView bounces={false}>
          {actions.map((item, index) => {
            return (
              <Button
                accessibilityLabel={item.name}
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
                    item.callback?.()
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
              accessibilityLabel={cancelText}
              text={cancelText}
              type="link"
              size="xl"
              color={CV.action_sheet_text_color}
              textStyle={STYLES.button_text}
              onPress={onCancel}
            />
          </>
        ) : null}
      </View>
    </Popup>
  )
}

export default memo(ActionSheet)
