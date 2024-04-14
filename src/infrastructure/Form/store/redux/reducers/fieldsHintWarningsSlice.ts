import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FormHintsState } from '../models/form.model';

const initialState = [] as Array<FormHintsState>;

const fieldsHintWarningsSlice = createSlice({
	name: 'fieldsHintWarnings',
	initialState,
	reducers: {

		enableHintWarnings: (state, action) => {
			const isFormHintsAlreadyExist = state.some(formHints => formHints.formId === action.payload.formId);
			if (!isFormHintsAlreadyExist) {
				state.push(action.payload);
			}
		},

		switchHintVisibility: (state, action) => {
			const { fieldId, targetFormId } = action.payload;
			return state.map(formHints => {
				if (formHints.formId !== targetFormId) return formHints;
				const hintIndex = formHints.hints.findIndex(hint => hint.id === fieldId);
				if (hintIndex === -1) return formHints;
				return {
					...formHints,
					hints: formHints.hints.map((hint, index) => 
						index === hintIndex ? { ...hint, visible: !hint.visible } : hint
					)
				};
			});
		}
	},
});

export const { switchHintVisibility, enableHintWarnings } = fieldsHintWarningsSlice.actions;
  
export default fieldsHintWarningsSlice.reducer;

export const getFieldHintIfExist = (state:RootState, payload: { id:string, formId: string }) => {
	const { id, formId } = payload;
	const searchedFormIndex = state.fieldHintWarnings.findIndex(formHints => formHints.formId === formId);
	if (state.fieldHintWarnings[searchedFormIndex]) {
		return state.fieldHintWarnings[searchedFormIndex].hints.find(hint => hint.id === id);
	}
};