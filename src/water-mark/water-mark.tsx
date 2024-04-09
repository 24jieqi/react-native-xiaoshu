import React, { useState, memo } from 'react'
import type { LayoutChangeEvent } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { getDefaultValue } from '../helpers'
import { usePersistFn } from '../hooks'
import Theme from '../theme'

import type { WaterMarkProps } from './interface'
import { varCreator } from './style'

const STYLES = StyleSheet.create({
  water_mark: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
  },

  text_row: {
    alignContent: 'center',
  },

  texts: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
  },
})

const WaterMark: React.FC<WaterMarkProps> = ({
  theme,
  text,
  color,
  fontSize,
  opacity,
  textWidth = 64,
  textHeight = 64,
  rotate = -45,
  foreground = false,

  children,
  style,
  onLayout,
  ...restProps
}) => {
  const [CV] = Theme.useStyle({
    varCreator,
    theme,
  })
  const [measure, setMeasure] = useState({ width: 0, height: 0 })

  const _color = getDefaultValue(color, CV.water_mark_text_color)
  const _fontSize = getDefaultValue(fontSize, CV.water_mark_text_font_size)
  const _opacity = getDefaultValue(opacity, CV.water_mark_text_opacity)

  const onLayoutWrapper = usePersistFn((e: LayoutChangeEvent) => {
    onLayout?.(e)
    setMeasure(e.nativeEvent.layout)
  })

  const renderMark = () => {
    if (
      measure.height === 0 ||
      measure.width === 0 ||
      textWidth === 0 ||
      textHeight === 0
    ) {
      return null
    }

    const texts: React.ReactNode[] = []
    const x = Math.ceil(measure.width / textWidth)
    const y = Math.ceil(measure.height / textHeight)

    for (let index0 = 0; index0 < x * y; index0++) {
      const ts: React.ReactNode[] = []
      for (let index1 = 0; index1 < y; index1++) {
        ts.push(
          <Text
            key={`${index0}_${index1}`}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: _color,
              fontSize: _fontSize,
              width: textWidth,
              height: textHeight,
              lineHeight: textHeight,
              textAlign: 'center',
              opacity: _opacity,
              transform: [
                {
                  rotateZ: `${rotate}deg`,
                },
              ],
            }}>
            {text}
          </Text>,
        )
      }
      texts.push(
        <View key={index0} style={STYLES.text_row}>
          {ts}
        </View>,
      )
    }

    return (
      <View pointerEvents="none" style={STYLES.texts}>
        {texts}
      </View>
    )
  }

  return (
    <View
      {...restProps}
      onLayout={onLayoutWrapper}
      style={style ? [STYLES.water_mark, style] : STYLES.water_mark}>
      {!foreground ? renderMark() : null}
      {children}
      {foreground ? renderMark() : null}
    </View>
  )
}

export default memo(WaterMark)
