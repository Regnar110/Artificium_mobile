import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = [] as Array<{field: string, message: string}>;

const fieldsHintWarningsSlice = createSlice({
	name: 'fieldsHintWarnings',
	initialState,
	reducers: {
		pushHintWarningToStore: (state, action) => {
			if (state.findIndex(warning => warning.field === action.payload.field) === -1) {
				state.push(action.payload);
			}
		},

		removeHintErrorFromStore: (state, action) => {
			return state.filter(warning => warning.field !== action.payload);
		}
	},
});

export const { pushHintWarningToStore, removeHintErrorFromStore } = fieldsHintWarningsSlice.actions;
  
export default fieldsHintWarningsSlice.reducer;

export const getWarningIfExists = (state:RootState, id:string) => {
	return state.fieldHintWarnings.find(warning => warning.field === id);
};