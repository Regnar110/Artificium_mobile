import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormFieldErrorsOnRequestState } from '../models/form.model';

const initialState = [] as Array<FormFieldErrorsOnRequestState>;

const formErrorsSlice = createSlice({
	name: 'formErrors',
	initialState,
	reducers: {
		triggerFormError: (state, action: PayloadAction<unknown>) => {
			console.log('PAY')
			console.log(action.payload)
		},
	},
});

export const { triggerFormError } = formErrorsSlice.actions;
  
export default formErrorsSlice.reducer;
