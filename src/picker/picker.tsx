import React, { memo } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import pick from 'lodash/pick'
import omit from 'lodash/omit'

import Popup from '../popup'
import PopupHeader from '../popup/header'
import type { PickerViewProps } from '../picker-view/interface'
import PickerView from '../picker-view'
import { useTheme, widthStyle } from '../theme'
import type { PickerProps } from './interface'
import { createStyles } from './style'

const PICKER_VIEW_PROPS_KEYS = [
  'value',
  'defaultValue',
  'columns',
  'loading',
  'itemHeight',
  'visibleItemCount',
  'onChange',
]

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
  const insets = useSafeAreaInsets()

  const headerTitleJSX = (
    <PopupHeader
      showClose={false}
      title={title}
      leftExtra={
        <Text
          style={STYLES.cancel_text}
          onPress={restProps.loading ? undefined : onCancel}>
          {cancelButtonText}
        </Text>
      }
      rightExtra={
        <Text
          style={STYLES.confirm_text}
          onPress={restProps.loading ? undefined : onConfirm}>
          {confirmButtonText}
        </Text>
      }
    />
  )

  const pickerViewProps = pick(
    restProps,
    PICKER_VIEW_PROPS_KEYS,
  ) as PickerViewProps
  const popupProps = omit(restProps, PICKER_VIEW_PROPS_KEYS)

  return (
    <Popup {...popupProps} visible={visible} position="bottom" round>
      {showToolbar && toolbarPosition === 'top' ? headerTitleJSX : null}
      <PickerView {...pickerViewProps} />
      {showToolbar && toolbarPosition === 'bottom' ? headerTitleJSX : null}

      <View style={{ height: insets.bottom + THEME_VAR.picker_bottom_gap }} />
    </Popup>
  )
}

export default memo(Picker)
