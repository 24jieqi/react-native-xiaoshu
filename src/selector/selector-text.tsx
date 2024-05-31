import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { varCreator as varCreatorButton } from '../button/style'
import { varCreator as varCreatorCell } from '../cell/style'
import Divider from '../divider'
import { getArrowOutline } from '../helpers'
import { usePersistFn } from '../hooks'
import Space from '../space'
import Theme from '../theme'

import type { SelectorTextProps } from './interface'
import SelectorInstance from './selector-instance'
import { varCreator, styleCreator } from './style'

const SelectorText: React.FC<SelectorTextProps> = ({
  theme,
  title,
  value,
  options,
  onChange,
  arrowDirection,
  divider = true,
  head = true,
}) => {
  const [, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const [CV_BUTTON] = Theme.useStyle({
    varCreator: varCreatorButton,
  })
  const [CV_CELL] = Theme.useStyle({
    varCreator: varCreatorCell,
  })

  const onPress = usePersistFn(() => {
    SelectorInstance({
      title,
      options: options,
      value,
      onChange,
    }).catch(() => {})
  })
  const IconArrow = getArrowOutline(arrowDirection)
  const textIndex = options.findIndex(op => op.value === value)
  const text = options[textIndex].label

  return (
    <TouchableOpacity
      activeOpacity={CV_BUTTON.button_active_opacity}
      onPress={onPress}
      style={STYLES.text}>
      <Space direction="horizontal" align="center" head={head}>
        {divider ? <Divider direction="vertical" /> : null}
        <Text suppressHighlighting style={STYLES.text_text}>
          {text}
        </Text>
        <IconArrow
          size={CV_CELL.cell_icon_size}
          color={CV_CELL.cell_icon_color}
        />
      </Space>
    </TouchableOpacity>
  )
}

export default memo(SelectorText)
