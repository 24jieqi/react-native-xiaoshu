import { useContext, createContext } from 'react'

import type { DropdownContext } from './interface'

export const DropdownConfig = createContext<DropdownContext>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as DropdownContext,
)

export const useDropdownConfig = () => useContext(DropdownConfig)
