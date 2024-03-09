import { PayloadAction, createListenerMiddleware } from '@reduxjs/toolkit';
import { switchHintVisibility } from '../reducers/fieldsHintWarningsSlice';
import { ValidationPatterns } from '../../../validationPatterns';
import { RootState } from '../store';


/**
 * ! fieldPreValidationMiddleware
 * 
 * * This middleware predicates if dispatched action have certain type and if dispatched field value is included in validationPatterns.
 * * This middleware does not accept 'e-mail' field value update action because this field is validated on submit.
 * 
 * ? If predicate is truthy then effect is called. Effect checks field value to match validation pattern for certain field.
 * ? When field value is still wrong in case of certain validation pattern then warning is placed in fieldWarrningsSlice state.
 * ? Based on this slice user sees hint warrnings under certain input field.
*/

type MiddlewarePayloadActionType = PayloadAction<{id: keyof typeof ValidationPatterns, value:string}, string>

export const fieldPreValidationMiddleware = createListenerMiddleware();
fieldPreValidationMiddleware.startListening({
	predicate: (action, currentState) => {
		const { fieldHintWarnings } = currentState as RootState;
		const { type, payload } = action as MiddlewarePayloadActionType;
		return (
			fieldHintWarnings.enabled 
			&&
			type === 'fields/updateFieldValue'
			&&
			Object.keys(ValidationPatterns).includes(payload.id)
		);
	},
	effect: (action, listenerAPI)=> {
		const { payload } = action as MiddlewarePayloadActionType;
		const validationRegExp = ValidationPatterns[payload.id];
		
		if (!payload.value) {
			listenerAPI.dispatch(switchHintVisibility(payload.id));
			return;
		}

		if (validationRegExp) {
			listenerAPI.dispatch(switchHintVisibility(payload.id));
			// if (!validationRegExp.test(payload.value)) {
			// 	listenerAPI.dispatch(switchHintVisibility(payload.id));
			// } else {
			// 	listenerAPI.dispatch(removeHintErrorFromStore(payload.id));
			// }			
		}
	}
});