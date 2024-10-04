import { configureStore } from '@reduxjs/toolkit';
import socketIOSlice from './slices/socketIOSlice';

export const store = configureStore({
	reducer: {
		socketIO: socketIOSlice
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
			// Ignoruj ostrzeżenia o nieserializowanych wartościach w tej ścieżce
				ignoredPaths: ['socketIO.client'],
			// Jeśli chcesz również ignorować nieserializowane akcje, możesz użyć 'ignoredActions'
			},
		}),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch