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

		setOppositeValueOnAgreementField: (state, action:PayloadAction<string>)=> {
			const indexOfField = state.findIndex(field => field.id === action.payload);
			state[indexOfField].checked = !state[indexOfField].checked;
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