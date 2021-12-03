import React, { useEffect, memo } from 'react'

import useState from '../hooks/useStateUpdate'
import { usePersistFn } from '../hooks'
import type {
  SelectPopupMethodProps,
  SelectPopupValue,
  SelectPopupOption,
} from './interface'
import SelectPopup from './select-popup'

/**
 * SelectPopup 函数使用时对应需要的组件
 */
const SelectPopupMethod: React.FC<SelectPopupMethodProps> = ({
  onChange,
  onClose,
  ...restProps
}) => {
  const [visible, setVisible] = useState(false)
  const onChangePersistFn = usePersistFn(
    (
      v: SelectPopupValue | SelectPopupValue[],
      o: SelectPopupOption | SelectPopupOption[],
    ) => {
      onChange && onChange(v, o)
      setVisible(false)
    },
  )
  const onClosePersistFn = usePersistFn(() => {
    onClose && onClose()
    setVisible(false)
  })

  // 节点加载好后显示
  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <SelectPopup
      {...restProps}
      visible={visible}
      onChange={onChangePersistFn}
      onClose={onClosePersistFn}
    />
  )
}

export default memo(SelectPopupMethod)
