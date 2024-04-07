export interface AgreementFieldState {
	id: string,
	required: boolean,
	checked: boolean
}

export type AgreementRequirementValidation = agreementValidationResult[];

export type AgreementFieldsArray = AgreementFieldState[];


interface agreementValidationResult {
	agreementField: string,
	checked: boolean,
	valid: boolean
}