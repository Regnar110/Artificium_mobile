import { createContext } from 'react';
import { Agreement } from '../../agreements.model';

export const AgreementsContext = createContext<Agreement[]>({} as Agreement[]);

export const AgreementsProvider = AgreementsContext.Provider;