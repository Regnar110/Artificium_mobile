import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
	enabled: false, 
	fieldsHints: []
} as {enabled:boolean, fieldsHints: Array<{id: string, message: string, visible: boolean}>};

const fieldsHintWarningsSlice = createSlice({
	name: 'fieldsHintWarnings',
	initialState,
	reducers: {

		enableHintWarnings: (state, action) => {
			Object.assign(state, action.payload);
		},

		switchHintVisibility: (state, action) => {
			const { id } = action.payload;
			if(state.fieldsHints.length) {
				const modifiedHints = state.fieldsHints.map(hint => {
					if (hint.id === id) {
						const newHint = {
							...hint,
							visible: !hint.visible
						};
						return newHint;
					} else return hint;
				});
				Object.assign(state, {
					...state,
					fieldsHints: modifiedHints
				});				
			}
		}
	},
});

export const { switchHintVisibility, enableHintWarnings } = fieldsHintWarningsSlice.actions;
  
export default fieldsHintWarningsSlice.reducer;

export const getFieldHintIfExist = (state:RootState, id:string) => {
	return state.fieldHintWarnings.fieldsHints.find(hint => hint.id === id);
};