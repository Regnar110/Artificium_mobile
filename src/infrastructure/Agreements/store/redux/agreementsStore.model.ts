export interface AgreementFieldState {
	id: string,
	required: boolean,
	checked: boolean
}

export type AgreementValidation = agreementValidationResult[];

export type AgreementFieldsArray = AgreementFieldState[];


interface agreementValidationResult {
	agreementField: string,
	valid: boolean
}