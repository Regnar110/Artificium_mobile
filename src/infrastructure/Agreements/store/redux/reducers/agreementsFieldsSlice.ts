import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AgreementsFormFieldsState } from '../agreementsStore.model';
import { RootState } from '../store';

const initialState: Array<AgreementsFormFieldsState> = [];

export const agreementsFieldsSlice = createSlice({
	name: 'fields',
	initialState,
	reducers: {
		initAgreementsFields: (state, action:PayloadAction<AgreementsFormFieldsState>) => {
			if (state.findIndex(agreementState => agreementState.parentFormId === action.payload.parentFormId) !== -1) return;

			state.push(action.payload);
		},

		setOppositeValueOnAgreementField: (state, action:PayloadAction<{ parentFormId: string, id: string}>) => {
			const { parentFormId, id } = action.payload;
			const agreementsIndex = state.findIndex(formAgreements => formAgreements.parentFormId === parentFormId);
			const fieldIndex = state[agreementsIndex].agreementFields.findIndex(field => field.id === id);

			state[agreementsIndex].agreementFields[fieldIndex].checked = !state[agreementsIndex].agreementFields[fieldIndex].checked;

			/**
			 * @SelectAllModifier 
			 * If selectAll is set to true when pressing on agreements field ( we assume that this field is then set to true(checked) ) then
			 * this single field is unchecked but selectAll field also.
			 */
			const selectAllFieldState: boolean = state[agreementsIndex].agreementFields.some(agreementsState => agreementsState.checked === false);
			if(selectAllFieldState ) {
				const selectAllIndex = state[agreementsIndex].agreementFields.findIndex(field => field.id === 'selectAll');

				if ( selectAllIndex === -1) return; 

				const selectAllState: boolean = state[agreementsIndex].agreementFields[selectAllIndex].checked;
			
				if(selectAllState) {
					state[agreementsIndex].agreementFields[selectAllIndex].checked = !selectAllState;
				}

				/**
				 * @SelectAllModifier
				 * ! Set  selectAll field to true if all other fields are set to true
				 */
				const areAllFieldsSelected = !state[agreementsIndex].agreementFields.some(field => field.id !== 'selectAll' && !field.checked);
				if(areAllFieldsSelected && !selectAllState) {
					state[agreementsIndex].agreementFields[selectAllIndex].checked = true;
				}
			}
		}, 
		
		selectAllFields: (state, action:PayloadAction<{ parentFormId: string, checked: boolean }>) => {
			const { parentFormId, checked } = action.payload;

			const formIndex = state.findIndex(form => form.parentFormId === parentFormId);
			if (formIndex !== -1) {
				state[formIndex].agreementFields.forEach(field => {
					field.checked = checked;
				});
			}

		}
	},
});

export const { initAgreementsFields, setOppositeValueOnAgreementField, selectAllFields } = agreementsFieldsSlice.actions;
  
export default agreementsFieldsSlice.reducer;

export const getAgreementFieldState = ({ agreementsFields }: RootState, parentFormId: string, fieldId: string) => {
	const searchedAgreements = agreementsFields.find(agreements => agreements.parentFormId === parentFormId);
	if (!searchedAgreements) return;
	return searchedAgreements.agreementFields.find(field => field.id === fieldId)?.checked;
};

export const getAgreementFields = ({ agreementsFields }: RootState, parentFormId: string) => {
	return agreementsFields.find(agreements => agreements.parentFormId === parentFormId);
};