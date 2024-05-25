import { FormFieldErrorResponse, OnSubmitCallback, ValidationResult } from '../redux/models/form.model';
import { ValidationPatterns } from '../../validationPatterns';
import { pushValidationErrorsToStore, resetValidationErrors } from '../redux/reducers/fieldsSubmitPatternsErrors';
import { store } from '../redux/store';
import { agreementsStore } from '../../../Agreements/store/redux/store';
import { AgreementRequirementValidation } from '../../../Agreements/store/redux/agreementsStore.model';
import { pushAgreementsValidationErrors, resetAgreementsValidationErrors } from '../../../Agreements/store/redux/reducers/agreementsFieldsErrorsSlice';
import { clearAllErrorsOnFields, clearErrorOnField, triggerErrorOnField } from '../redux/reducers/errorsOnRequestSlice';


/**
 * @class formRepository
 * @description contains form utility methods like submit.
 */
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
	static async submitValidation(formId: string, callback?: OnSubmitCallback) {
		const validationResult:Array<ValidationResult> = [];
		const storedFieldsData = store.getState().fields;
		const requirementValidatedFields = this.validateAgreementsFieldsRequirement(formId);
		const fieldsArray = Object.values(storedFieldsData);
		const currentFormFields = fieldsArray.find(form => form.formId === formId);
		if (currentFormFields) {
			const { fields } = currentFormFields;
			for( const field in fields) {
				const { id, value } = fields[field] as { id: keyof typeof ValidationPatterns, value: string };
				const fieldValidationResult = ValidationPatterns[id].test(value);
				validationResult.push({ field: id, valid: fieldValidationResult});
			}
			
			const invalidFields = validationResult.filter(result => !result.valid);

			if (invalidFields.length) {
				const invalidFormFields = {
					formId,
					invalidFields
				};

				store.dispatch(pushValidationErrorsToStore(invalidFormFields));
			} else {
				store.dispatch(resetValidationErrors(formId));
			}

			const inValidAgreements = requirementValidatedFields.filter(field => !field.valid);
			if (inValidAgreements.length) {
				agreementsStore.dispatch(pushAgreementsValidationErrors({parentFormId: formId, inValidAgreements}));
			} else {
				agreementsStore.dispatch(resetAgreementsValidationErrors({ parentFormId: formId }));
			}
			const isValid = invalidFields.length === 0 && !requirementValidatedFields.some(field => !field.valid);
			
			
			if (callback) {
				const returnedData = await callback(currentFormFields, validationResult, isValid, requirementValidatedFields);
				store.dispatch(triggerErrorOnField(returnedData as FormFieldErrorResponse));
				if (returnedData === 'OK') {
					agreementsStore.dispatch(resetAgreementsValidationErrors({ parentFormId: formId }));
					store.dispatch(clearAllErrorsOnFields(formId));
					console.log('ACCTION SUCCESS')
				}
			}
		}
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
	static validateAgreementsFieldsRequirement(parentFormId: string):AgreementRequirementValidation {
		const agreementsFieldsData = agreementsStore.getState().agreementsFields;
		const formAgreements = agreementsFieldsData.find(formAgreements => formAgreements.parentFormId === parentFormId);

		const composeReturn = (agreementField: string, checked: boolean, valid:boolean) => ({
			agreementField,
			checked,
			valid
		});
		const requirementValidation = formAgreements?.agreementFields.map(field => {
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