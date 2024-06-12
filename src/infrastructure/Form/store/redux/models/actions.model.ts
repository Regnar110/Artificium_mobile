
export type FieldValueUpdateType =
    | { id: string, value: string, checked?: never }
    | { id: string, value?: never, checked: boolean };

export type FieldUpdatePayload = {
    targetFormId: string,
    fieldPayload: FieldValueUpdateType
}
export type FormState = Array<InitFormTypePayload>

export type InitFormTypePayload = {
	fields: {
		[key: string]: {
			id: string,
			value: string
		}
	}
	formId: string
}

export interface FormErrorPushPayload {
	formId: string,
	clientMessage: string
}