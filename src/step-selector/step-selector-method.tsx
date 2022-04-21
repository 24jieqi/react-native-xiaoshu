import React, { useState, useEffect, memo, useCallback } from 'react'

import { callInterceptor } from '../helpers'

import type { StepSelectorMethodProps, OptionData } from './interface'
import StopSelector from './step-selector'

function StopSelectorMethod<T>({
  beforeClose,
  onConfirm,
  onCancel,
  ...restProps
}: StepSelectorMethodProps<T>) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const onPressClose = useCallback(() => {
    onCancel?.()
    setVisible(false)
  }, [onCancel])

  const onRequestClose = useCallback(() => {
    onPressClose()
    return true
  }, [onPressClose])

  const onChange = useCallback(
    (v: T[], o: OptionData<T>[], isEnd?: boolean) => {
      if (isEnd) {
        callInterceptor(beforeClose, {
          args: [v, o, isEnd],
          done: () => {
            onConfirm?.(v, o, isEnd)
            setVisible(false)
          },
        })
      }
    },
    [beforeClose, onConfirm],
  )

  return (
    <StopSelector<T>
      {...restProps}
      visible={visible}
      onPressClose={onPressClose}
      onChange={onChange}
      onRequestClose={onRequestClose}
    />
  )
}

export default memo(StopSelectorMethod) as <T>(
  p: StepSelectorMethodProps<T>,
) => React.ReactElement
