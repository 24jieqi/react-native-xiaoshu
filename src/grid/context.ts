import type { Context } from 'react';
import { createContext, useContext } from 'react';

import type { RowContextState } from './interface';

const RowContext: Context<RowContextState> = createContext({});

export const useRow = () => useContext(RowContext);

export default RowContext;
