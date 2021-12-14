import React, { useContext, useEffect, useState } from 'react'
import type { FC } from 'react'
import { Dimensions, View } from 'react-native'
import { useTheme, widthStyle } from '../theme'
import { renderTextLikeJSX, isDef } from '../helpers'
// import { StepSuccess } from './images'
import { Icon } from '..'
import { createStyles } from './style'
import type { StepsItemPropsType } from './interface'
import { maxSteps, StepsContext } from '.'

/**Step */
const Step: FC<StepsItemPropsType> = props => {
  const { status, icon, index, title } = props
  const { current, data } = useContext(StepsContext)
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const windowWidth = Dimensions.get('window').width
  const stepWidth = windowWidth / maxSteps
  const [elementCount, setElementCount] = useState(0)
  let resIcon = null
  let resStatus = status ? status : current >= index ? 'finish' : 'wait'
  let titleStyle = null

  switch (resStatus) {
    case 'finish':
      resIcon = (
        <View style={STYLES.dotActive}>
          <Icon.SuccessOutLine
            color={THEME_VAR.steps_background_color}
            size={THEME_VAR.steps_icon_success_active_size}
          />
        </View>
      )
      // resIcon = <StepSuccess style={STYLES.dotActive} />
      titleStyle = STYLES.activeTitleText
      break
    case 'wait':
      resIcon = <View style={STYLES.dot} />
      titleStyle = STYLES.titleText
      break
    default:
      break
  }
  if (isDef(icon)) {
    resIcon = icon
  }
  useEffect(() => {
    setElementCount(data?.length)
  }, [data?.length])
  const isFirst = index === 0
  const isLast = index === elementCount - 1

  return (
    <View style={[STYLES.stepWrap, { width: stepWidth }]}>
      <View
        style={[
          STYLES.line,
          // eslint-disable-next-line react-native/no-inline-styles
          { left: isFirst ? '50%' : 0, right: isLast ? '50%' : 0 },
        ]}
      />
      <View style={STYLES.stepIconWrap}>{resIcon}</View>
      {renderTextLikeJSX(title, titleStyle)}
    </View>
  )
}
export default Step
