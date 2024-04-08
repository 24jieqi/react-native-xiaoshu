import { createContext } from 'react'

import type { StepsPropsType } from './interface'

export interface StepsContextState {
  current: number
  data?: StepsPropsType['data']
}

export const StepsContext = createContext<StepsContextState>({
  current: 0,
})

export const maxSteps = 3
