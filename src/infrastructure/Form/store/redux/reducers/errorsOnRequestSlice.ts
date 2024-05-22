import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormFieldErrorResponse, FormHintsState } from '../models/form.model';

const initialState = [] as Array<FormHintsState>;

const errorsOnRequestSlice = createSlice({
	name: 'errorsOnRequest',
	initialState,
	reducers: {

		triggerErrorOnField: (state, action: PayloadAction<FormFieldErrorResponse>) => {
			console.log('Slice')
			console.log(action.payload)
			
		},

		clearErrorOnField: (state, action: PayloadAction<unknown>) => {
			console.log('clear')
		},

		clearAllErrorsOnFields: (state, action: PayloadAction<unknown>) => {
			console.log('clear');
		}
	},
});

export const { triggerErrorOnField, clearAllErrorsOnFields, clearErrorOnField  } = errorsOnRequestSlice.actions;
  
export default errorsOnRequestSlice.reducer;