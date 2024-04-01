import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FieldValueUpdateType, FieldsState } from '../models/actions.model';
import { RootState } from '../store';


const initialState = {};


export const fieldsSlice = createSlice({
	name: 'fields',
	initialState,
	reducers: {
		initFields: (state, action:PayloadAction<FieldsState>) => {
			Object.assign(state, action.payload);
		},

		updateFieldValue: (state: {[key: string]: FieldValueUpdateType}, action:PayloadAction<FieldValueUpdateType>) => {
			/**
			 * TODO usunąć checked - ma być przeniesiony do panelu zgód.
			 */
			if ('checked' in action.payload) {
				state[action.payload.id].checked = action.payload.checked;
			} else {
				state[action.payload.id].value = action.payload.value;
			}
		}

	},
});

export const { initFields, updateFieldValue } = fieldsSlice.actions;
  
export default fieldsSlice.reducer;


export const singleFieldSelector = (state:RootState, id: string):FieldValueUpdateType => {
	return state.fields[id as keyof typeof state.fields];
};
