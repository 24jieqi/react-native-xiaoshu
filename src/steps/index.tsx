import React, { createContext, memo } from 'react'
import type { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { useTheme, widthStyle } from '../theme'
import { createStyles } from './style'
import type { StepsPropsType } from './interface'
import Step from './step'
export const StepsContext = createContext<{
  current?: number
  data?: StepsPropsType['data']
}>({})
const Steps: FC<StepsPropsType> = ({ current, data, style }) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  let inner = null
  if (data?.length > 0) {
    inner = (
      <View style={[STYLES.stepsBox, style]}>
        <StepsContext.Provider value={{ current, data }}>
          {data?.map((v, i) => {
            return <Step key={i} index={i} {...v} />
          })}
        </StepsContext.Provider>
      </View>
    )
  }
  return (
    <View style={STYLES.outWrap}>
      {data?.length > 3 ? (
        <ScrollView style={STYLES.scrollViewBox} horizontal>
          {inner}
        </ScrollView>
      ) : (
        inner
      )}
    </View>
  )
}
export default memo(Steps)
