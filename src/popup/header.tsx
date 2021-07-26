import React, { isValidElement } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { isDef } from '../helpers/typeof'
import usePersistFn from '../hooks/usePersistFn'
import { IconCrossOutline } from '../icon'
import { useTheme } from '../theme'
import type { PopupHeaderProps } from './interface'
import { createStyles } from './style.header'

const PopupHeader: React.FC<PopupHeaderProps> = ({
  title,
  onClose,
  showClose = true,
}) => {
  const onClosePersistFn = usePersistFn(onClose)
  const themeVar = useTheme()
  const Styles = createStyles(themeVar)

  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={Styles.headerText} numberOfLines={1}>
        {title}
      </Text>
    )
  ) : null

  return (
    <View style={Styles.header}>
      <View style={Styles.headerIcon} />
      {titleJSX}
      <View style={Styles.headerIcon}>
        {showClose ? (
          <TouchableOpacity onPress={onClosePersistFn}>
            <IconCrossOutline
              color={themeVar.popup_close_icon_color}
              size={themeVar.popup_close_icon_size}
              style={Styles.closeStyle}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}

export default PopupHeader
