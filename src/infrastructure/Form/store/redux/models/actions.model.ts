
export type FieldValueUpdateType =
    | { id: string, value: string, checked?: never }
    | { id: string, value?: never, checked: boolean };

export type FieldsState = {
	[fieldId: string]: FieldValueUpdateType
}