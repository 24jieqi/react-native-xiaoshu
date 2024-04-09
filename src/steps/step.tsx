import { SuccessOutline } from '@fruits-chain/icons-react-native'
import isNil from 'lodash/isNil'
import React, { useContext, useEffect, useState } from 'react'
import type { FC } from 'react'
import type { TextStyle } from 'react-native'
import { Dimensions, View } from 'react-native'

import { renderTextLikeJSX } from '../helpers'
import Theme from '../theme'

import { maxSteps, StepsContext } from './context'
import type { StepsItemPropsType } from './interface'
import { varCreator, styleCreator } from './style'

/** Step */
const Step: FC<StepsItemPropsType> = ({
  status,
  icon,
  index,
  title,
  theme,
}) => {
  const { current, data } = useContext(StepsContext)
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const windowWidth = Dimensions.get('window').width
  const stepWidth = windowWidth / maxSteps
  const [elementCount, setElementCount] = useState(0)

  let resIcon: React.ReactNode = null
  let resStatus = status ? status : current >= index ? 'finish' : 'wait'
  let titleStyle: TextStyle | null = null

  switch (resStatus) {
    case 'finish':
      resIcon = (
        <View style={STYLES.dotActive}>
          <SuccessOutline
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
    setElementCount(data?.length || 0)
  }, [data?.length])

  const isFirst = index === 0
  const isLast = index === elementCount - 1

  return (
    <View style={[STYLES.stepWrap, { width: stepWidth }]}>
      {!isFirst && (
        <View
          style={[
            STYLES.line,
            current < index
              ? { backgroundColor: CV.steps_line_normal_color }
              : {},
            // eslint-disable-next-line react-native/no-inline-styles
            { left: 0, right: '50%' },
          ]}
        />
      )}
      {!isLast && (
        <View
          style={[
            STYLES.line,
            current <= index
              ? { backgroundColor: CV.steps_line_normal_color }
              : {},
            // eslint-disable-next-line react-native/no-inline-styles
            { left: '50%', right: 0 },
          ]}
        />
      )}

      <View style={STYLES.stepIconWrap}>{resIcon}</View>
      {renderTextLikeJSX(title, titleStyle)}
    </View>
  )
}
export default Step
