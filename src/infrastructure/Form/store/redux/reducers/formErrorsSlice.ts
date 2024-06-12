import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormErrorState } from '../models/form.model';
import { RootState } from '../store';
import { FormErrorPushPayload } from '../models/actions.model';

const initialState = [] as Array<FormErrorState>;

const formErrorsSlice = createSlice({
	name: 'formErrors',
	initialState,
	reducers: {
		triggerFormError: (state, action: PayloadAction<FormErrorPushPayload>) => {
			const { formId, clientMessage } = action.payload;
			const stateHasThisFormError = state.findIndex(formError =>  formError.formId === formId);

			const newFormErrorState = {
				formId,
				clientMessage,
			};

			if (stateHasThisFormError === -1) {
				state.push(newFormErrorState);
			} else {
				state = state.filter(formError => formError.formId !== formId);
				state.push(newFormErrorState);
				return state;
			}
		},

		clearFormGlobalError: (state, action: PayloadAction<string>) => {
			state = state.filter(formError => formError.formId !== action.payload);
			return state;
		}
	},
});

export const { triggerFormError, clearFormGlobalError } = formErrorsSlice.actions;
  
export default formErrorsSlice.reducer;


export const getFormError = (state: RootState, formId: string) => {
	const formError =  state.formErrorsSlice.find(formError => formError?.formId === formId);

	if (!formError) return;

	return formError;
};