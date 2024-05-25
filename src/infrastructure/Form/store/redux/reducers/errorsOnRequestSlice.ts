import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormFieldErrorResponse, FormFieldErrorsOnRequestState } from '../models/form.model';
import { RootState } from '../store';

const initialState = [] as Array<FormFieldErrorsOnRequestState>;

const errorsOnRequestSlice = createSlice({
	name: 'errorsOnRequest',
	initialState,
	reducers: {

		triggerErrorOnField: (state, action: PayloadAction<FormFieldErrorResponse>) => {
			const { formId, field, clientMessage } = action.payload
			const formStateIndex = state.findIndex(form => form.formId === formId);
			if (formStateIndex === -1) {
				state.push({
					formId,
					fields: [{
						field,
						clientMessage
					}]
				});
			}

			if (formStateIndex !== -1) {
				const checkIfFieldErrorExist = state[formStateIndex].fields.some(fieldError => fieldError.field === field);
				if (checkIfFieldErrorExist) return;

				state[formStateIndex].fields.push({
					field,
					clientMessage
				});
			}
		},

		clearAllErrorsOnFields: (state, action: PayloadAction<string>) => {
			const formIndex = state.findIndex(form => form.formId === action.payload);
			delete state[formIndex];

		}
	},
});

export const { triggerErrorOnField, clearAllErrorsOnFields } = errorsOnRequestSlice.actions;
  
export default errorsOnRequestSlice.reducer;

export const getFieldAfterRequestError = (state:RootState, formId: string, field: string) => {
	const form = state.errorsOnRequestSlice.find(stateForm => stateForm?.formId === formId);
	
	if (!form) return null;

	const fieldError = form.fields.find(fieldError => fieldError.field === field);
	
	if (!fieldError) return null;

	return fieldError.clientMessage;
}