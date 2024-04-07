import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AgreementFieldsArray } from '../agreementsStore.model';
import { RootState } from '../store';

const initialState: AgreementFieldsArray = [];

export const agreementsFieldsSlice = createSlice({
	name: 'fields',
	initialState,
	reducers: {
		initAgreementsFields: (state, action:PayloadAction<AgreementFieldsArray>) => {
			state.push(...action.payload);
		},

		setOppositeValueOnAgreementField: (state, action:PayloadAction<string>) => {
			const indexOfField = state.findIndex(field => field.id === action.payload);
			state[indexOfField].checked = !state[indexOfField].checked;

			/**
			 * @SelectAllModifier 
			 * If selectAll is set to true when pressing on agreements field ( we assume that this field is then set to true(checked) ) then
			 * this single field is unchecked but selectAll field also.
			 */
			const selectAllFieldIndex = state.findIndex(field => field.id === 'selectAll');
			if(selectAllFieldIndex !== -1) {
				const selectAllState = state[selectAllFieldIndex].checked;
				if(selectAllState) {
					state[selectAllFieldIndex].checked = !selectAllState;
				}

				/**
				 * @SelectAllModifier
				 * ! Set  selectAll field to true if all other fields are set to true
				 */
				const areAllFieldsSelected = !state.some(field => field.id !== 'selectAll' && !field.checked);
				if(areAllFieldsSelected && !selectAllState) {
					state[selectAllFieldIndex].checked = true;
				}
			}
		}, 
		
		selectAllFields: (state, action:PayloadAction<boolean>) => {
			const newState = state.map(field => {
				field.checked = action.payload;
				return field;
			});
			state = newState;
		}
	},
});

export const { initAgreementsFields, setOppositeValueOnAgreementField, selectAllFields } = agreementsFieldsSlice.actions;
  
export default agreementsFieldsSlice.reducer;

export const getAgreementFieldState = ({ agreementsFields }: RootState, fieldId: string) => {
	return agreementsFields.find(field => field.id === fieldId)?.checked;
};

export const getAgreementFields = ({ agreementsFields }: RootState) => agreementsFields;