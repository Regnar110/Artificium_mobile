import { configureStore } from '@reduxjs/toolkit';
import fieldsSlice from './reducers/fieldsSlice';
import { fieldPreValidationMiddleware } from './middlewares/fieldPreValidationMiddleware';
import fieldsHintWarningsSlice from './reducers/fieldsHintWarningsSlice';
import fieldsSubmitPatternsErrors from './reducers/fieldsSubmitPatternsErrors';


export const store = configureStore({
	reducer: {
		fields: fieldsSlice,
		fieldHintWarnings: fieldsHintWarningsSlice,
		fieldsSubmitPatternsErrors: fieldsSubmitPatternsErrors
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().prepend(fieldPreValidationMiddleware.middleware);
	}
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch