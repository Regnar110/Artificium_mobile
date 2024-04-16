import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ValidationResultState } from '../models/form.model';

const initialState:Array<ValidationResultState> = [];

const fieldsSubmitPatternsErrors = createSlice({
	name: 'fieldsSubmitPatternsErrors',
	initialState,
	reducers: {
		pushValidationErrorsToStore: (state, action:PayloadAction<ValidationResultState>) => {
			state.push(action.payload);
		},

		resetValidationErrors: (state, action: PayloadAction<string>) => {
			const formId = action.payload;
			state = state.filter(formValidation => formValidation.formId !== formId);
		}
	},
});

export const { pushValidationErrorsToStore, resetValidationErrors } = fieldsSubmitPatternsErrors.actions;
  
export default fieldsSubmitPatternsErrors.reducer;

export const getFieldErrors = (state:RootState, formId: string, id:string) => {
	const formValidationObject = state.fieldsSubmitPatternsErrors.find(formValidation => formValidation.formId === formId);

	if (!formValidationObject) return;

	const fieldError = formValidationObject.invalidFields.find(fieldError => fieldError.field === id);
	return fieldError;
};