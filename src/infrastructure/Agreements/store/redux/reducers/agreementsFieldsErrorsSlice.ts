import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AgreementValidationResult } from '../agreementsStore.model';
import { RootState } from '../store';

const initialState:Array< {
    parentFormId: string;
    inValidAgreements: AgreementValidationResult[];
}> = [];

export const agreementsFieldsErrorsSlice = createSlice({
	name: 'fieldsErrors',
	initialState,
	reducers: {
		pushAgreementsValidationErrors(state, action:PayloadAction<{ parentFormId: string, inValidAgreements: AgreementValidationResult[] }>) {
			const { parentFormId, inValidAgreements } = action.payload;
			const errorObject = {
				parentFormId,
				inValidAgreements
			};
			state.push(errorObject);
		},

		resetAgreementsValidationErrors(state, action:PayloadAction<{ parentFormId: string }>) {
			const { parentFormId } = action.payload;
			const indexOfObject = state.findIndex(agreementValidation => agreementValidation.parentFormId === parentFormId);

			if (indexOfObject === -1) return;

			state.splice(indexOfObject, 1);
		}
	},
});

export const { pushAgreementsValidationErrors, resetAgreementsValidationErrors } = agreementsFieldsErrorsSlice.actions;
  
export default agreementsFieldsErrorsSlice.reducer;


export const getFormAgreementsErrors = (state:RootState, parentFormId: string) => {
	const foundObject = state.agreementsFieldsErrors.find(validationResults => validationResults.parentFormId === parentFormId);
	return foundObject?.inValidAgreements;
};