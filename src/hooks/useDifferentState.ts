import isEqual from 'lodash/isEqual'
import type { Dispatch, SetStateAction } from 'react'
import { useState, useCallback, useRef } from 'react'

const useDifferentState = <S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState(initialState)
  const StateRef = useRef<S>(state)
  const onChange = useCallback<Dispatch<SetStateAction<S>>>(v => {
    const value =
      typeof v === 'function' ? (v as (prevState: S) => S)(StateRef.current) : v

    if (!isEqual(value, StateRef.current)) {
      setState(value)
      StateRef.current = value
    }
  }, [])

  return [state, onChange]
}

export default useDifferentState
