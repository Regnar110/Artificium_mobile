import { OnSubmitCallback, ValidationResult } from '../../form.model';
import { ValidationPatterns } from '../../validationPatterns';
import { FieldValueUpdateType } from '../redux/models/actions.model';
import { pushValidationErrorsToStore, resetValidationErrors } from '../redux/reducers/fieldsSubmitPatternsErrors';
import { store } from '../redux/store';
import { agreementsStore } from '../../../Agreements/store/redux/store';
import { AgreementRequirementValidation } from '../../../Agreements/store/redux/agreementsStore.model';

class formRepository {

	/**
	* @member submitValidation
	* 
	* 	Validate form input fields base on validation patterns.
	* 	Fields current state is reached from redux store by getState() method.
	* 
	* 	After validation invalid fields are pushed to store with dispatch method.
	* 	Based on that errors are displayed.
	* 
	* 	If there is no errors, then those are reseted by resetValidationErrors method.
	* 
	*  	At the end callback is called if provided.
	* @param callback 
	* 	recieves array with fields array,
	* 	validation results array < type of below return >,
	* 	and also invalidFields length as boolean
	* 
	* @returns { 
	* 	field: Validated field id <string>,
	* 	valid: validation result <boolean>
	* }
	*/
	static submitValidation(callback?: OnSubmitCallback) {
		const validationResult:Array<ValidationResult> = [];
		const storedFieldsData = store.getState().fields;
		const requirementValidatedFields = this.validateAgreementsFieldsRequirement();
		const fieldsArray:FieldValueUpdateType[] = Object.values(storedFieldsData);
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
		const isValid = invalidFields.length === 0 && !requirementValidatedFields.some(field => !field.valid);

		
		callback && callback(fieldsArray, validationResult, isValid, requirementValidatedFields);
	}

	/**
	* @member validateAgreementsFieldsRequirement
	* Validate agreement fields if those are present in validated form component.
	* The check is made against required fields 
	* 
	* @returns { 
	* 	agreementField: Validated field id <string>,
	* 	valid: validation result <boolean>
	* }
	*/
	static validateAgreementsFieldsRequirement():AgreementRequirementValidation {
		const agreementsFieldsData = agreementsStore.getState().agreementsFields;
		const composeReturn = (agreementField: string, checked: boolean, valid:boolean) => ({
			agreementField,
			checked,
			valid
		});
		const requirementValidation = agreementsFieldsData.map(field => {
			if (field.required) {
				if (!field.checked && field.required) {
					return composeReturn(field.id, field.checked, false);
				}
				return composeReturn(field.id, field.checked, true);				
			}
			return composeReturn(field.id, field.checked, true);
		}).filter(Boolean);
	
		return requirementValidation as AgreementRequirementValidation;
	}
}

export default formRepository;