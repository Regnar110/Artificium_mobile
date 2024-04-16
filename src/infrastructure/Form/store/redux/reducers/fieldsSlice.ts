import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FieldUpdatePayload, FieldValueUpdateType, FormState, InitFormTypePayload } from '../models/actions.model';
import { RootState } from '../store';


const initialState = [] as FormState;


export const fieldsSlice = createSlice({
	name: 'fields',
	initialState,
	reducers: {
		initFields: (state:FormState, action:PayloadAction<InitFormTypePayload>) => {
			const isFormIdAlreadyExist = state.some(form => form.formId === action.payload.formId);
			if (!isFormIdAlreadyExist) {
				state.push(action.payload);
			} else {
				return;
			}
			
		},

		updateFieldValue: (state:FormState, action:PayloadAction<FieldUpdatePayload>) => {
			/**
			 * TODO - akceptujemy już i modyfikujemy stan w konkretnym formie. Od tego punktu nalezy dokonać dalszych zmian dot.
			 * TODO - wprowadzenia obsługi formularzy działających jednocześnie obok siebie.
			 * TODO - Do tego nalezy dodać możliwość decydowania o tym czy formularz ma byc cachowany na widoku czy też nie.
			 * TODO - jeżeli tak, jego wartości będą zapisywane w stanie. Jeżeli nie, przy odfocusowaniu formularza( przejściu na inny Tab)
			 * TODO - to jego wartości i stan mają zostać usunięte.
			 */
			const { targetFormId, fieldPayload } = action.payload;
			const searchedFormId = state.findIndex(form => form.formId === targetFormId);
			if( typeof fieldPayload.value === 'string') {
				state[searchedFormId].fields[fieldPayload.id].value = fieldPayload.value;
			}
			// if(action.payload.fieldPayload.value) state.fields[action.payload.fieldPayload.id].value = action.payload.value;
		}

	},
});

export const { initFields, updateFieldValue } = fieldsSlice.actions;
  
export default fieldsSlice.reducer;


export const singleFieldSelector = (state:RootState, fieldId: string, formId: string):FieldValueUpdateType | null => {
	const { fields: fieldsState } = state;
	const requiredForm = fieldsState.find(form => form.formId === formId);
	if (requiredForm) {
		return requiredForm.fields[fieldId as keyof typeof requiredForm.fields];
	} else return null;
};
