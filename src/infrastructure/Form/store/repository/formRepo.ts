import { OnSubmitCallback, ValidationResult } from '../../form.model';
import { ValidationPatterns } from '../../validationPatterns';
import { FieldValueUpdateType } from '../redux/models/actions.model';
import { pushValidationErrorsToStore, resetValidationErrors } from '../redux/reducers/fieldsSubmitPatternsErrors';
import { store } from '../redux/store';

class formRepository {

	static submitValidation(callback?: OnSubmitCallback) {
		const validationResult:Array<ValidationResult> = [];
		const storedFieldDatas = store.getState().fields;
		const fieldsArray:FieldValueUpdateType[] = Object.values(storedFieldDatas);
		fieldsArray.forEach((submitedField) => {
			const { id, value } = submitedField as { id: keyof typeof ValidationPatterns, value: string };
			const fieldValidationResult = ValidationPatterns[id].test(value);
			validationResult.push({ field: id, valid: fieldValidationResult});
		});
		const invalidFields = validationResult.filter(result => !result.valid);
		if (invalidFields.length) {
			store.dispatch(pushValidationErrorsToStore(invalidFields));
		} else {
			store.dispatch(resetValidationErrors());
		}

		callback && callback(fieldsArray, validationResult, !!invalidFields.length);
	}
}

export default formRepository;