import { createContext } from 'react';
import { FormContextType, FormField, FormThemeType } from '../redux/models/form.model';

export const FormContext = createContext<FormContextType>({} as FormContextType);
export const FormContextProvider = FormContext.Provider;

export const FormThemeContext = createContext<FormThemeType>({} as FormThemeType);
export const FormThemeProvider = FormThemeContext.Provider;

export const FormInputContext = createContext<FormField>({} as FormField);
export const FormInputProvider = FormInputContext.Provider;
