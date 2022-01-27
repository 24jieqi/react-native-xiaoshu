import React, { memo, isValidElement } from 'react'
import { View, Text } from 'react-native'
import pick from 'lodash/pick'
import omit from 'lodash/omit'

import Popup from '../popup'
import type { PickerViewProps } from '../picker-view/interface'
import PickerView from '../picker-view'
import { useTheme, widthStyle } from '../theme'
import { isDef } from '../helpers'
import type { PickerProps } from './interface'
import { createStyles } from './style'

const Picker: React.FC<PickerProps> = ({
  visible,
  title,
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  toolbarPosition = 'top',
  showToolbar = true,
  onCancel,
  onConfirm,

  ...restProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={STYLES.title_text}>{title}</Text>
    )
  ) : null

  const headerTitleJSX = (
    <View style={STYLES.header}>
      <Text style={STYLES.cancel_text} onPress={onCancel}>
        {cancelButtonText}
      </Text>
      {titleJSX}
      <Text style={STYLES.confirm_text} onPress={onConfirm}>
        {confirmButtonText}
      </Text>
    </View>
  )

  const pickerViewPropsKeys = [
    'value',
    'defaultValue',
    'columns',
    'loading',
    'itemHeight',
    'visibleItemCount',
    'onChange',
  ]
  const pickerViewProps = pick(
    restProps,
    pickerViewPropsKeys,
  ) as PickerViewProps
  const popupProps = omit(restProps, pickerViewPropsKeys)

  return (
    <Popup {...popupProps} visible={visible} position="bottom" round>
      <View style={STYLES.picker}>
        {showToolbar && toolbarPosition === 'top' ? headerTitleJSX : null}
        <PickerView {...pickerViewProps} />
        {showToolbar && toolbarPosition === 'bottom' ? headerTitleJSX : null}
      </View>
    </Popup>
  )
}

export default memo(Picker)
