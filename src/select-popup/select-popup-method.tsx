import React, { memo } from 'react'

import useState from '../hooks/useStateUpdate'
import type { SelectPopupMethodProps } from './interface'
import SelectPopup from './select-popup'

/**
 * SelectPopup 函数使用时对应需要的组件
 */
const SelectPopupMethod: React.FC<SelectPopupMethodProps> = ({
  onChange,
  onClose,
  ...restProps
}) => {
  const [visible, setVisible] = useState(true)

  return (
    <SelectPopup
      {...restProps}
      visible={visible}
      onChange={(v, o) => {
        onChange && onChange(v, o)
        setVisible(false)
      }}
      onClose={() => {
        onClose && onClose()
        setVisible(false)
      }}
    />
  )
}

export default memo(SelectPopupMethod)
