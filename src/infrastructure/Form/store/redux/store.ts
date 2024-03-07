import { configureStore } from '@reduxjs/toolkit';
import fieldsSlice from './reducers/fieldsSlice';


export const store = configureStore({
	reducer: {
		fields: fieldsSlice,
	},
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch