import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ValidationResult } from '../../../form.model';

const initialState:Array<ValidationResult> = [];

const fieldsSubmitPatternsErrors = createSlice({
	name: 'fieldsSubmitPatternsErrors',
	initialState,
	reducers: {
		pushValidationErrorsToStore: (state, action) => {
			Object.assign(state, action.payload);
		},

		resetValidationErrors: () => initialState
	},
});

export const { pushValidationErrorsToStore, resetValidationErrors } = fieldsSubmitPatternsErrors.actions;
  
export default fieldsSubmitPatternsErrors.reducer;

export const getFieldErrors = (state:RootState, id:string) => {
	return state.fieldsSubmitPatternsErrors.find(error => error.field === id);
};