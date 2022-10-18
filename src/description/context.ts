import { createContext, useContext } from 'react'

import type { DescriptionContextState } from './interface'

const DescriptionContext = createContext<DescriptionContextState>({
  colon: true,
  layout: 'horizontal',
  size: 'm',
  empty: '--',
  showEmpty: false,
})

export const useDescription = () => useContext(DescriptionContext)

export default DescriptionContext
