import { ReactNode } from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { InitFormTypePayload } from './actions.model';
import { ValidationPatterns } from '../../../validationPatterns';
import { FormAgreementsType } from '../../../../Agreements/agreements.model';
import { AgreementRequirementValidation } from '../../../../Agreements/store/redux/agreementsStore.model';


type OptionalStyle = StyleProp<ViewStyle>

interface OnSubmitCallbackProps extends SubmitCallbackPropsStoreMethods {
	formData: InitFormTypePayload;
	validationResult: Array<ValidationResult>;
	isValid: boolean;
	agreementsValidationData: AgreementRequirementValidation;
}

interface SubmitCallbackPropsStoreMethods {
	triggerErrorOnField: (data: FormFieldErrorResponse) => void;
	clearErrors: (formId: string) => void;
	triggerFormErrors: (data: unknown) => void;
}


export type OnSubmitCallback = (props: OnSubmitCallbackProps) => 'OK' | Promise<unknown>

interface AdditionalFormSubFields<T = boolean> {
	forgotPasswordRedirect?: T,
	rememberMeCheckbox?: T,
	termsAgreement?: T,
}

export interface ValidationResultState {
	formId: string,
	invalidFields: Array<ValidationResult>
}

export interface ValidationResult {
	field: keyof typeof ValidationPatterns,
	valid: boolean
}

export type FormField = {
	id: keyof typeof ValidationPatterns,
	fieldSpecificProps?: TextInputProps,
	iconRenderer?: () => ReactNode,
	patternError?: string
}

export interface FormContextType extends AdditionalFormSubFields, ComponentHintsInterface {
	formId: string;
	sharedFieldProps?: TextInputProps;
	fields: FormField[];
	onSubmitCallback: OnSubmitCallback;
	isLoading?: boolean;
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
	agreements?: FormAgreementsType
}

export type FormType =  FormContextType & FormThemeType & AdditionalFormSubFields & ComponentHintsInterface & FormAgreements


/**
 * @type HINTS
 */

export interface Hint {
	id: keyof typeof ValidationPatterns;
	message: string;
}

export interface StateStoredHint extends Hint {
    visible: boolean;
}

export type HintsArray = Array<Hint>

type ComponentHintsInterface = {
    fieldLiveHints?: boolean;
    hints?: HintsArray
}

export interface EnchancedHintWithFormid {
	formId: string,
	hints:	Array<StateStoredHint>
}

export interface FormHintsState {
	enabled: boolean,
	formId: string,
	hints: Array<StateStoredHint>,
}

export interface FormErrorState {
	formId: string;
	clientMessage: string;
}

export interface FormFieldErrorsOnRequestState {
	formId: string;
	fields: Array<{ field: string, clientMessage: string }>;
}

export interface FormFieldErrorResponse {
	formId: string,
	field: string,
	clientMessage: string
}

/**
 * @interface FormConfig
 * @description interface for describing config file structure for form component
 */

export interface FormConfigInterface {
	sharedFieldProps?: TextInputProps;
	fields: FormField[];
	hints?: Hint[];
	agreements?: FormAgreementsType;
}