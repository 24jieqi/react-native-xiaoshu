import { SuccessOutline } from '@fruits-chain/icons-react-native'
import Color from 'color'
import React, { useMemo } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import CheckboxIcon from '../checkbox/checkbox-icon'
import Theme from '../theme'

import type { TreeItemProps } from './interface'
import { varCreator, styleCreator } from './style'

const TreeItem: React.FC<TreeItemProps> = ({
  tier,
  indent,
  switcherIcon,
  activeColor,
  active,
  multiple,
  bold,
  label,
  renderLabel,
  labelHighlight,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  const hazyColor = useMemo(
    () => Color(activeColor).lightness(CV.tree_active_color_lightness).hex(),
    [CV.tree_active_color_lightness, activeColor],
  )

  return (
    <TouchableWithoutFeedback {...restProps}>
      <View
        style={[
          STYLES.tree_item,
          !multiple && active
            ? {
                backgroundColor: hazyColor,
              }
            : null,
        ]}>
        {indent ? (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: tier * indent,
            }}
          />
        ) : null}
        {switcherIcon}
        {renderLabel ? (
          renderLabel({
            label,
            disabled: restProps.disabled,
            labelHighlight,
            active,
            activeColor,
          })
        ) : (
          <Text
            style={[
              STYLES.tree_item_text,
              restProps.disabled ? STYLES.tree_item_disabled_text : null,
              bold
                ? // eslint-disable-next-line react-native/no-inline-styles
                  {
                    fontWeight: 'bold',
                  }
                : null,
              active || labelHighlight
                ? {
                    color: activeColor,
                  }
                : null,
            ]}
            numberOfLines={1}>
            {label}
          </Text>
        )}

        {multiple ? (
          <CheckboxIcon active={active} activeColor={activeColor} />
        ) : active ? (
          <SuccessOutline color={activeColor} />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TreeItem
