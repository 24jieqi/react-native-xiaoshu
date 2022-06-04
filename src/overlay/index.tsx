import React from 'react'

import { attachPropertiesToComponent } from '../helpers'
import Portal from '../portal'

import type { OverlayProps } from './interface'
import Overlay from './overlay'
import { varCreator } from './style'

/**
 * Overlay 遮罩层
 * @description 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。
 */
const OverlayContainer: React.FC<OverlayProps> = props => {
  return (
    <Portal>
      <Overlay {...props} />
    </Portal>
  )
}

export default attachPropertiesToComponent(OverlayContainer, {
  varCreator,
  OverlayComponent: Overlay,
})
