import { createContext } from 'react';
import { GlobalContext } from './interfaces-and-types';
import { DEFAULT_GLOBAL_CONTEXT } from './constants';

const globalContext = createContext<GlobalContext>(DEFAULT_GLOBAL_CONTEXT);

export default globalContext;
