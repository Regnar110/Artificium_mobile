import { configureStore } from '@reduxjs/toolkit';
import agreementsFieldsSlice from './reducers/agreementsFieldsSlice';
import agreementsFieldsErrorsSlice from './reducers/agreementsFieldsErrorsSlice';


export const agreementsStore = configureStore({
	reducer: {
		agreementsFields: agreementsFieldsSlice,
		agreementsFieldsErrors: agreementsFieldsErrorsSlice
	},
});


export type RootState = ReturnType<typeof agreementsStore.getState>
export type AgreementsDispatch = typeof agreementsStore.dispatch