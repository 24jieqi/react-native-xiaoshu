import React, { useState, useEffect, memo, useCallback } from 'react'

import { callInterceptor } from '../helpers'

import type { StepSelectorMethodProps, OptionData } from './interface'
import StopSelector from './step-selector'

function StopSelectorMethod<T>({
  beforeClose,
  callback,
  ...restProps
}: StepSelectorMethodProps<T>) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const onPressClose = useCallback(() => {
    setVisible(false)
  }, [])

  const onChange = useCallback(
    (v: T[], o: OptionData<T>[], isEnd?: boolean) => {
      if (isEnd) {
        callInterceptor(beforeClose, {
          args: [v, o, isEnd],
          done: () => {
            callback(v, o, isEnd)
            setVisible(false)
          },
        })
      }
    },
    [beforeClose, callback],
  )

  return (
    <StopSelector<T>
      {...restProps}
      visible={visible}
      onPressClose={onPressClose}
      onChange={onChange}
    />
  )
}

export default memo(StopSelectorMethod) as <T>(
  p: StepSelectorMethodProps<T>,
) => React.ReactElement
