import { SuccessOutline } from '@fruits-chain/icons-react-native'
import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

import { varCreator as varCreatorButton } from '../button/style'
import CheckboxIcon from '../checkbox/checkbox-icon'
import Flex from '../flex'
import Theme from '../theme'

import type { TreeItemProps } from './interface'
import { varCreator, styleCreator } from './style'

const hitSlop = { left: 8, right: 8 }

const TreeItem: React.FC<TreeItemProps> = ({
  theme,
  tier,
  indent,
  switcherIcon,
  switcherHighlight = true,
  activeColor,
  active,
  multiple,
  bold,
  label,
  renderLabel,
  labelHighlight,
  hasChildren,
  onPressSwitcherIcon,
  ...restProps
}) => {
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const [CV_BUTTON] = Theme.useStyle({
    varCreator: varCreatorButton,
  })

  const leftJSX = (
    <Flex direction="row" align="center">
      {indent ? (
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: tier * indent,
            height: CV.tree_item_height,
          }}
        />
      ) : null}
      <Flex
        align="center"
        justify="center"
        style={
          hasChildren && switcherHighlight
            ? STYLES.tree_item_switcher
            : undefined
        }>
        {switcherIcon}
      </Flex>
    </Flex>
  )

  return (
    <TouchableOpacity
      {...restProps}
      activeOpacity={
        restProps.activeOpacity ?? CV_BUTTON.button_active_opacity
      }>
      <View style={STYLES.tree_item}>
        {hasChildren ? (
          <TouchableWithoutFeedback
            onPress={onPressSwitcherIcon}
            hitSlop={hitSlop}>
            {leftJSX}
          </TouchableWithoutFeedback>
        ) : (
          leftJSX
        )}

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
              restProps.disabled && !hasChildren
                ? STYLES.tree_item_disabled_text
                : null,
              bold
                ? // eslint-disable-next-line react-native/no-inline-styles
                  {
                    fontWeight: 'bold',
                  }
                : null,
              labelHighlight
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
          <CheckboxIcon
            active={active}
            activeColor={activeColor}
            disabled={restProps.disabled}
          />
        ) : active ? (
          <SuccessOutline color={activeColor} />
        ) : null}
      </View>
    </TouchableOpacity>
  )
}

export default TreeItem
