import React, { memo } from 'react'

import ActionSheet from '../action-sheet'
import { varCreator as varCreatorBlank } from '../blank/style'
import BottomBar from '../bottom-bar'
import Button from '../button'
import { isArray, noop } from '../helpers'
import Space from '../space'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { ButtonBarProps } from './interface'
import { varCreator, styleCreator } from './style'

const ButtonBar: React.FC<ButtonBarProps> = ({
  alone = false,
  buttons,
  count = 4,
  moreText = '更多',
  size = 'm',

  children,
  ...restProps
}) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const CV_BLANK = createVar(TOKENS, varCreatorBlank)
  const STYLES = createStyle(CV, styleCreator)

  const realButtons = (buttons || []).filter(item => !item.hidden)
  const isConfig = isArray(buttons)
  const showMore = realButtons.length > count
  const bottomButtons = showMore ? realButtons.slice(0, count - 1) : realButtons

  const onPressMore = () => {
    const restButtons = realButtons.slice(count - 1)

    ActionSheet({
      actions: restButtons.map(item => item.text),
      cancelText: '取消',
    })
      .then(({ index }) => {
        restButtons[index].onPress?.()
      })
      .catch(noop)
  }

  const defaultGap = CV_BLANK[`blank_size_${size}`] || TOKENS.space_3

  return (
    <BottomBar
      {...restProps}
      style={[
        { paddingHorizontal: defaultGap },
        STYLES.button_bar,
        alone ? STYLES.button_bar_alone : null,
      ]}>
      {isConfig ? (
        <Space
          justify="flex-end"
          align="center"
          direction="horizontal"
          gapVertical={0}
          gapHorizontal={CV.button_bar_button_space}>
          {showMore ? (
            <Button type="link" text={moreText} onPress={onPressMore} />
          ) : null}
          {bottomButtons.reverse().map((b, index) => {
            return (
              <Button
                key={index}
                {...b}
                size={b.size || 'm'}
                style={b.style || STYLES.btn}
              />
            )
          })}
        </Space>
      ) : (
        children
      )}
    </BottomBar>
  )
}

export default memo<typeof ButtonBar>(ButtonBar)
