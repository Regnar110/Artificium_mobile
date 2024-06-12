import { resetAgreementsValidationErrors } from '../../../Agreements/store/redux/reducers/agreementsFieldsErrorsSlice';
import { agreementsStore } from '../../../Agreements/store/redux/store';
import { FormErrorPushPayload } from '../redux/models/actions.model';
import { FormFieldErrorResponse } from '../redux/models/form.model';
import { clearAllErrorsOnFields, triggerErrorOnField } from '../redux/reducers/errorsOnRequestSlice';
import { resetValidationErrors } from '../redux/reducers/fieldsSubmitPatternsErrors';
import { clearFormGlobalError, triggerFormError } from '../redux/reducers/formErrorsSlice';
import { store } from '../redux/store';

export class StoreMethodsRepository {

	static triggerFormErrors(data: FormErrorPushPayload) {
		store.dispatch(triggerFormError(data));
	}

	static triggerErrorOnField(data: FormFieldErrorResponse) {
		store.dispatch(triggerErrorOnField(data));
	}
	
	static clearErrors(formId: string) {
		agreementsStore.dispatch(resetAgreementsValidationErrors({ parentFormId: formId }));
		store.dispatch(resetValidationErrors(formId));
		store.dispatch(clearAllErrorsOnFields(formId));
		store.dispatch(clearFormGlobalError(formId));
	}
}