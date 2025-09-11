import { useContext, createContext } from 'react'

import type { DropdownContext } from './interface'

export const DropdownConfig = createContext<DropdownContext>(
  {} as DropdownContext,
)

export const useDropdownConfig = () => useContext(DropdownConfig)
