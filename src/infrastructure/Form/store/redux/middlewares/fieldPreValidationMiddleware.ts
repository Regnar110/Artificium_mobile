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

type MiddlewarePayloadActionType = PayloadAction<{ fieldPayload: { id: keyof typeof ValidationPatterns, value:string }, targetFormId: string }>

export const fieldPreValidationMiddleware = createListenerMiddleware();
fieldPreValidationMiddleware.startListening({
	predicate: (action, currentState) => {
		const { fieldHintWarnings } = currentState as RootState;
		const { type, payload } = action as MiddlewarePayloadActionType;
		const isFielHintsEnabledForForm = fieldHintWarnings.some(formHints => formHints.formId === payload.targetFormId && formHints.enabled);
		return (
			isFielHintsEnabledForForm
			&&
			type === 'fields/updateFieldValue'
			&&
			Object.keys(ValidationPatterns).includes(payload.fieldPayload.id)
		);
	},
	effect: (action, listenerAPI)=> {
		const { payload } = action as MiddlewarePayloadActionType;
		const { fieldPayload, targetFormId } = payload;
		const validationRegExp = ValidationPatterns[fieldPayload.id];
		
		if (!fieldPayload.value) {
			listenerAPI.dispatch(switchHintVisibility({fieldId: fieldPayload.id, targetFormId}));
			return;
		}

		if (validationRegExp) {
			listenerAPI.dispatch(switchHintVisibility({fieldId: fieldPayload.id, targetFormId}));
			// if (!validationRegExp.test(payload.value)) {
			// 	listenerAPI.dispatch(switchHintVisibility(payload.id));
			// } else {
			// 	listenerAPI.dispatch(removeHintErrorFromStore(payload.id));
			// }			
		}
	}
});