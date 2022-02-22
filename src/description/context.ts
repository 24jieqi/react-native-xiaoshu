import type { Context } from 'react'
import { createContext, useContext } from 'react'

import type { DescriptionContextState } from './interface'

const DescriptionContext: Context<DescriptionContextState> = createContext({})

export const useDescription = () => useContext(DescriptionContext)

export default DescriptionContext
