export interface AgreementFields {
	id: string,
	required: boolean,
	checked: boolean
}

export interface AgreementsFormFieldsState {
	parentFormId:string,
	agreementFields: AgreementFieldsArray
}

export type AgreementRequirementValidation = AgreementValidationResult[];

export type AgreementFieldsArray = AgreementFields[];


export interface AgreementValidationResult {
	agreementField: string,
	checked: boolean,
	valid: boolean
}