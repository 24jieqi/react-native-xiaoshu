import React, { memo } from 'react'

import ActionSheet from '../action-sheet'
import BottomBar from '../bottom-bar'
import Button from '../button'
import { isArray, noop } from '../helpers'
import Space from '../space'
import { useTheme, widthStyle } from '../theme'

import type { ButtonBarProps } from './interface'
import { createStyles } from './style'

const ButtonBar: React.FC<ButtonBarProps> = ({
  alone = false,
  buttons,
  count = 4,
  moreText = '更多',

  children,
  ...restProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

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

  return (
    <BottomBar
      {...restProps}
      style={[STYLES.button_bar, alone ? STYLES.button_bar_alone : null]}>
      {isConfig ? (
        <Space
          justify="flex-end"
          align="center"
          direction="horizontal"
          gapVertical={0}
          gapHorizontal={THEME_VAR.button_bar_button_space}>
          {showMore ? (
            <Button type="link" text={moreText} onPress={onPressMore} />
          ) : null}
          {bottomButtons.reverse().map((b, index) => {
            return (
              <Button
                key={index}
                {...b}
                size={b.size}
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
