import React, { memo, useRef, useMemo } from 'react'
import type { FC } from 'react'
import { ScrollView, View } from 'react-native'

import Theme from '../theme'

import { maxSteps, StepsContext } from './context'
import type { StepsPropsType } from './interface'
import Step from './step'
import { varCreator, styleCreator } from './style'

const Steps: FC<StepsPropsType> = ({ current, data, style, theme }) => {
  const [, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const ctx = useMemo(() => ({ current, data }), [current, data])
  const scrollRef = useRef<ScrollView>(null)

  const setScrollDistance = (width: number) => {
    if (scrollRef.current && data && data.length > maxSteps) {
      scrollRef.current.scrollTo({
        x: (width / data.length) * (current - 1 > 0 ? current - 1 : 0),
        y: 0,
      })
    }
  }
  const inner =
    data && data.length > 0 ? (
      <View
        style={[STYLES.stepsBox, style]}
        onLayout={e => {
          setScrollDistance(e?.nativeEvent?.layout?.width)
        }}>
        <StepsContext.Provider value={ctx}>
          {data?.map((v, i) => {
            return <Step key={i} index={i} theme={theme} {...v} />
          })}
        </StepsContext.Provider>
      </View>
    ) : null

  return (
    <View style={STYLES.outWrap}>
      {data && data.length > maxSteps ? (
        <ScrollView style={STYLES.scrollViewBox} horizontal ref={scrollRef}>
          {inner}
        </ScrollView>
      ) : (
        inner
      )}
    </View>
  )
}

export default memo(Steps)
