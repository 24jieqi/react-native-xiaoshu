import React, { useContext, useEffect, useState } from 'react'
import type { FC } from 'react'
import { Dimensions, Image, View } from 'react-native'
import { useTheme, widthStyle } from '../theme'
import { isDef } from '../helpers/typeof'
import { renderTextLikeJSX } from '../helpers'
import imgs from './images/index'
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
      resIcon = <Image source={imgs.stepSuccess} style={STYLES.dotActive} />
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
