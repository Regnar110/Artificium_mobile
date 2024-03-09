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
			console.log(state);
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

		// pushHintWarningToStore: (state, action) => {
		// 	if (state.fields.findIndex(warning => warning.field === action.payload.field) === -1) {
		// 		state.fields.push(action.payload);
		// 	}
		// },

		// removeHintErrorFromStore: (state, action) => {
		// 	const filteredFields = state.fields.filter(warning => warning.field !== action.payload);
		// 	Object.assign(state, {
		// 		...state,
		// 		fields: filteredFields
		// 	});
		// }
	},
});

export const { switchHintVisibility, enableHintWarnings } = fieldsHintWarningsSlice.actions;
  
export default fieldsHintWarningsSlice.reducer;

export const getFieldHintIfExist = (state:RootState, id:string) => {
	return state.fieldHintWarnings.fieldsHints.find(hint => hint.id === id);
};