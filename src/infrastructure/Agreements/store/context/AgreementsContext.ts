import { createContext } from 'react';
import { Agreement, AgreementsProps } from '../../agreements.model';

export const AgreementsContext = createContext<Agreement[]>({} as Agreement[]);

export const AgreementsProvider = AgreementsContext.Provider;

export const AgreementsPropsContext = createContext<AgreementsProps>({} as AgreementsProps);

export const AgreementsPropsProvider = AgreementsPropsContext.Provider;