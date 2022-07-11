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
  hasChildren,
  onPressSwitcherIcon,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const CV_BUTTON = Theme.createVar(TOKENS, varCreatorButton)
  const STYLES = Theme.createStyle(CV, styleCreator)

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
      {switcherIcon}
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
          <TouchableWithoutFeedback onPress={onPressSwitcherIcon}>
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
              restProps.disabled ? STYLES.tree_item_disabled_text : null,
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
