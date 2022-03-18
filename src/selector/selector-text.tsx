import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { varCreator as varCreatorButton } from '../button/style'
import { varCreator as varCreatorCell } from '../cell/style'
import Divider from '../divider'
import { usePersistFn } from '../hooks'
import { getArrowOutline } from '../icon/helper/arrow'
import Space from '../space'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { SelectorTextProps } from './interface'
import SelectorFn from './selector-fn'
import { varCreator } from './style'
import { styleCreator } from './style.text'

const SelectorText: React.FC<SelectorTextProps> = ({
  title,
  value,
  options,
  onChange,
  arrowDirection,
  divider = true,
  head = true,
}) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const CV_BUTTON = createVar(TOKENS, varCreatorButton)
  const CV_CELL = varCreatorCell(TOKENS)
  const STYLES = createStyle(CV, styleCreator, TOKENS)

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
      activeOpacity={CV_BUTTON.button_active_opacity}
      onPress={onPress}
      style={STYLES.text}>
      <Space direction="horizontal" align="center" gapVertical={0} head={head}>
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
