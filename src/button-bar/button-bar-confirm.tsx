import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View } from 'react-native'

import Space from '../space'
import Theme from '../theme'

import ButtonBar from './button-bar'
import type { ButtonBarConfirmProps } from './interface'
import { varCreator } from './style'

const customButtonBarStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
}

const customChildrenStyle: ViewStyle = {
  flex: 1,
}

const ButtonBarConfirm: React.FC<ButtonBarConfirmProps> = ({
  children,
  cancel,

  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)

  return (
    <ButtonBar {...restProps} alone style={customButtonBarStyle}>
      {!isNil(cancel) ? (
        <Space
          direction="horizontal"
          tail
          align="center"
          minWidth={CV.button_bar_button_min_width}>
          {cancel}
        </Space>
      ) : null}
      <View style={customChildrenStyle}>{children}</View>
    </ButtonBar>
  )
}

export default memo(ButtonBarConfirm)
