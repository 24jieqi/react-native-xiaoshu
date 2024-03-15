import { createContext } from 'react'

import type { StepsPropsType } from './interface'

export interface StepsContextState {
  current?: number
  data?: StepsPropsType['data']
}

export const StepsContext = createContext<StepsContextState>({})

export const maxSteps = 3
