
export interface FieldValueUpdateType {
	id: string,
	value: string
}

export type FieldsState = {
	[fieldId: string]: FieldValueUpdateType
}