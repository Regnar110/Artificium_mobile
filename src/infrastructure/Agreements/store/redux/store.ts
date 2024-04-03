import { configureStore } from '@reduxjs/toolkit';
import agreementsFieldsSlice from './reducers/agreementsFieldsSlice';


export const agreementsStore = configureStore({
	reducer: {
		agreementsFields: agreementsFieldsSlice,
	},
});


export type RootState = ReturnType<typeof agreementsStore.getState>
export type AgreementsDispatch = typeof agreementsStore.dispatch