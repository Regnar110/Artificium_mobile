import { AnyListenerPredicate, createListenerMiddleware } from '@reduxjs/toolkit';
import { pushHintWarningToStore, removeHintErrorFromStore } from '../reducers/fieldsHintWarningsSlice';
import { ValidationPatterns } from '../../../validationPatterns';


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

export const fieldPreValidationMiddleware = createListenerMiddleware();

fieldPreValidationMiddleware.startListening({
	predicate: (action: {type:string, payload: {id: keyof typeof ValidationPatterns, value:string}}) => {
		return (
			action.type === 'fields/updateFieldValue'
			&&
			Object.keys(ValidationPatterns).includes(action.payload.id)
			&&
			action.payload.id !== 'e-mail'
		);
	},
	effect: (action: {type:string, payload: {id: keyof typeof ValidationPatterns, value:string}}, listenerAPI)=> {
		const validationRegExp = ValidationPatterns[action.payload.id];
		if (!action.payload.value) {
			listenerAPI.dispatch(removeHintErrorFromStore(action.payload.id));
			return;
		}

		if (validationRegExp) {
			if (!validationRegExp.test(action.payload.value)) {
				listenerAPI.dispatch(pushHintWarningToStore({field: action.payload.id, message: 'Password should be longer than 8 characters and contain one big letter and special mark'}));
			} else {
				listenerAPI.dispatch(removeHintErrorFromStore(action.payload.id));
			}			
		}
	}
});