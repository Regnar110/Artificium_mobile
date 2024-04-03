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
		}
	},
});

export const { initAgreementsFields, setOppositeValueOnAgreementField } = agreementsFieldsSlice.actions;
  
export default agreementsFieldsSlice.reducer;
