import isNil from 'lodash/isNil'
import React, { useContext, useEffect, useState } from 'react'
import type { FC } from 'react'
import { Dimensions, View } from 'react-native'

import { Icon } from '..'
import { renderTextLikeJSX } from '../helpers'
import Theme from '../theme'

import type { StepsItemPropsType } from './interface'
import { varCreator, styleCreator } from './style'

import { maxSteps, StepsContext } from '.'

/** Step */
const Step: FC<StepsItemPropsType> = props => {
  const { status, icon, index, title } = props
  const { current, data } = useContext(StepsContext)
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator, TOKENS)
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
          <Icon.SuccessOutline
            color={CV.steps_background_color}
            size={CV.steps_icon_success_active_size}
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
  if (!isNil(icon)) {
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
