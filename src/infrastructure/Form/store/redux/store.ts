import { configureStore } from '@reduxjs/toolkit';
import fieldsSlice from './reducers/fieldsSlice';
import { fieldPreValidationMiddleware } from './middlewares/fieldPreValidationMiddleware';
import fieldsHintWarningsSlice from './reducers/fieldsHintWarningsSlice';


export const store = configureStore({
	reducer: {
		fields: fieldsSlice,
		fieldHintWarnings: fieldsHintWarningsSlice
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().prepend(fieldPreValidationMiddleware.middleware);
	}
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch