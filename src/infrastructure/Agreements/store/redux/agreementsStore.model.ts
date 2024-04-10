export interface AgreementFieldState {
	id: string,
	required: boolean,
	checked: boolean
}

export type AgreementRequirementValidation = AgreementValidationResult[];

export type AgreementFieldsArray = AgreementFieldState[];


export interface AgreementValidationResult {
	agreementField: string,
	checked: boolean,
	valid: boolean
}