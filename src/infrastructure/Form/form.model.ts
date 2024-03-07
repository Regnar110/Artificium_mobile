import { ReactNode } from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';


type OptionalStyle = StyleProp<ViewStyle>

interface AdditionalFormSubFields {
	forgotPasswordRedirect?: boolean,
	rememberMeCheckbox?: boolean
}

export type FormField = {
	id: string,
	fieldSpecificProps?: TextInputProps,
	iconRenderer?: () => ReactNode,
}

export interface FormContextType extends AdditionalFormSubFields {
	sharedFieldProps?: TextInputProps,
	fields: FormField[],
	onSubmit: () => void
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

export type FormType =  FormContextType & FormThemeType & AdditionalFormSubFields