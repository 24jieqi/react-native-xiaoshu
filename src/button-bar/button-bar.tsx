import isArray from 'lodash/isArray'
import isUndefined from 'lodash/isUndefined'
import noop from 'lodash/noop'
import React, { memo, useEffect, useState } from 'react'
import type { LayoutRectangle } from 'react-native'

import ActionSheet from '../action-sheet'
import { varCreator as varCreatorBlank } from '../blank/style'
import BottomBar from '../bottom-bar'
import Button from '../button'
import Locale from '../locale'
import Space from '../space'
import Theme from '../theme'

import type { ButtonBarProps } from './interface'
import { varCreator, styleCreator } from './style'

const ButtonBar: React.FC<ButtonBarProps> = ({
  alone = false,
  buttons,

  count,
  moreText,
  blankSize = 'm',

  children,
  style,
  ...restProps
}) => {
  const locale = Locale.useLocale().ButtonBar
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const CV_BLANK = Theme.createVar(TOKENS, varCreatorBlank)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const realButtons = (buttons || []).filter(item => !item.hidden)
  /** 计算当前有多少个button的逻辑 */
  const [wrapElementLayout, setWrapElementLayout] =
    useState<LayoutRectangle>(null)
  const [innerElementLayout, setInnerElementLayout] =
    useState<LayoutRectangle>(null)
  const [showCount, setShowCount] = useState(buttons?.length)
  const [isMagnify, setIsMagnify] = useState(false)
  useEffect(() => {
    setShowCount(buttons?.length)
  }, [buttons?.length])
  useEffect(() => {
    let resCount = showCount
    if (isMagnify) {
      resCount = buttons?.length
      setIsMagnify(false)
    }
    if (wrapElementLayout?.width < innerElementLayout?.width) {
      setShowCount(resCount - 1)
    } else {
      if (isMagnify) {
        setShowCount(resCount)
      }
    }
  }, [wrapElementLayout?.width, innerElementLayout?.width])
  /** 是否是配置式 */
  const isConfig = isArray(buttons)
  // 外部传入了count就使用外部的：兼容代码
  const btnCount = isUndefined(count) ? showCount : count
  const showMore = realButtons.length > btnCount
  const bottomButtons = showMore
    ? realButtons.slice(0, btnCount - 1)
    : realButtons

  const onPressMore = () => {
    const restButtons = realButtons.slice(btnCount - 1)

    ActionSheet({
      actions: restButtons.map(item => item.text),
      cancelText: locale.labelActionSheetCancelText,
    })
      .then(({ index }) => {
        restButtons[index].onPress?.()
      })
      .catch(noop)
  }

  const defaultGap = CV_BLANK[`blank_size_${blankSize}`]

  if (isConfig && realButtons.length === 0) {
    return null
  }

  return (
    <BottomBar
      {...restProps}
      style={[
        { paddingHorizontal: defaultGap },
        STYLES.button_bar,
        alone ? STYLES.button_bar_alone : null,
        style,
      ]}
      onLayout={e => {
        // 监听变化，是变大的时候重新设置showCount
        if (wrapElementLayout?.width < e.nativeEvent.layout.width) {
          setIsMagnify(true)
        }
        setWrapElementLayout(e.nativeEvent.layout)
      }}>
      {isConfig ? (
        <Space
          style={STYLES.wrap_view}
          onLayout={e => {
            setInnerElementLayout(e.nativeEvent.layout)
          }}
          justify="flex-end"
          align="center"
          direction="horizontal"
          gapHorizontal={CV.button_bar_button_space}>
          {showMore ? (
            <Button
              type="link"
              text={moreText ?? locale.moreText}
              onPress={onPressMore}
            />
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

export default memo(ButtonBar)
