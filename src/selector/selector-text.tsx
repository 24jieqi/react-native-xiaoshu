import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import Divider from '../divider'
import { usePersistFn } from '../hooks'
import { getArrowOutline } from '../icon/helper/arrow'
import Space from '../space'
import { useTheme, widthStyle } from '../theme'

import type { SelectorTextProps } from './interface'
import SelectorFn from './selector-fn'
import { createStyles } from './style.text'

const SelectorText: React.FC<SelectorTextProps> = ({
  title,
  value,
  options,
  onChange,
  arrowDirection,
  divider = true,
  head = true,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const onPress = usePersistFn(() => {
    SelectorFn({
      title,
      options: options,
      value,
      onChange,
    })
  })
  const IconArrow = getArrowOutline(arrowDirection)
  const textIndex = options.findIndex(op => op.value === value)
  const text = options[textIndex].label

  return (
    <TouchableOpacity
      activeOpacity={THEME_VAR.button_active_opacity}
      onPress={onPress}
      style={STYLES.text}>
      <Space direction="horizontal" align="center" gapVertical={0} head={head}>
        {divider ? <Divider direction="vertical" /> : null}
        <Text suppressHighlighting style={STYLES.text_text}>
          {text}
        </Text>
        <IconArrow
          size={THEME_VAR.cell_icon_size}
          color={THEME_VAR.cell_icon_color}
        />
      </Space>
    </TouchableOpacity>
  )
}

export default memo(SelectorText)
