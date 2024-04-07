import { ReactNode } from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { FieldValueUpdateType } from './store/redux/models/actions.model';
import { ValidationPatterns } from './validationPatterns';
import { AgreementsComponentType } from '../Agreements/agreements.model';
import { AgreementValidation } from '../Agreements/store/redux/agreementsStore.model';


type OptionalStyle = StyleProp<ViewStyle>

export type OnSubmitCallback = (formData:FieldValueUpdateType[], validationResult:Array<ValidationResult> ,isValid: boolean, agreementsValidationData?: AgreementValidation, ) => void

interface AdditionalFormSubFields<T = boolean> {
	forgotPasswordRedirect?: T,
	rememberMeCheckbox?: T,
	termsAgreement?: T,
}

export interface ValidationResult {
	field: keyof typeof ValidationPatterns,
	valid: boolean
}
type FieldLiveHints = {
    fieldLiveHints?: boolean;
    hints?: Array<{
        id: keyof typeof ValidationPatterns;
        message: string;
    }>
}

export type FormField = {
	id: keyof typeof ValidationPatterns,
	fieldSpecificProps?: TextInputProps,
	iconRenderer?: () => ReactNode,
	patternError: string
}

export interface FormContextType extends AdditionalFormSubFields, FieldLiveHints {
	sharedFieldProps?: TextInputProps,
	fields: FormField[],
	submitButtonText: string
	onSubmitCallback?: OnSubmitCallback
}

export interface FormThemeType {
	optionalStyles?: {
		form?: OptionalStyle,
		inputsContainer?: OptionalStyle,
		inputWrapper?: OptionalStyle,
		input?: OptionalStyle,
		subFormContainer?: OptionalStyle,
		customCheckbox?: OptionalStyle,
		linkContainer?: OptionalStyle,
		textLink?: OptionalStyle,
		submitButtonContainer?: OptionalStyle,
		submitButton?: OptionalStyle,
		submitButtonText?: OptionalStyle,
	}
}

export interface FormAgreements {
	agreements: AgreementsComponentType
}

export type FormType =  FormContextType & FormThemeType & AdditionalFormSubFields & FieldLiveHints & FormAgreements