import React, { memo } from 'react'

import BottomBar from '../bottom-bar'
import Button from '../button'
import ActionSheet from '../action-sheet'
import { useTheme, widthStyle } from '../theme'
import { isArray, noop } from '../helpers'
import { ButtonBarProps } from './interface'
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
        <>
          {showMore ? (
            <Button
              type="link"
              text={moreText}
              size="normal"
              onPress={onPressMore}
            />
          ) : null}
          {bottomButtons.reverse().map((b, index) => {
            return (
              <Button
                key={index}
                {...b}
                size={b.size || 'normal'}
                style={b.style || STYLES.btn}
              />
            )
          })}
        </>
      ) : (
        children
      )}
    </BottomBar>
  )
}

export default memo<typeof ButtonBar>(ButtonBar)
