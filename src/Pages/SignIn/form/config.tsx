import React from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../../infrastructure/enums';
import Letter from '../../../public/svg/letter.svg';
import { FormConfigInterface } from '../../../infrastructure/Form/store/redux/models/form.model';


export enum SiGNIN_FORM_CONSTANTS {
	FORM_ID = 'signinForm',
	SUBMIT_BUTTON_TEXT = 'Log in'
}

export const SignInForm: FormConfigInterface = {
	sharedFieldProps: {
		selectionColor: '#fff',
		placeholderTextColor:COLORS.NOBLE_300
	},

	fields: [
		{
			id:'email',
			iconRenderer: () => <Letter width={20} height={20} />,
			patternError: 'Invalid e-mail address',
			fieldSpecificProps: {
				placeholder: 'E-mail',
				inputMode: 'text',
				maxLength: 320,
			}
		},
		{
			id:'password',
			iconRenderer: () => <Letter width={20} height={20} />,
			patternError: 'Invalid password',
			fieldSpecificProps: {
				secureTextEntry: true,
				placeholder:'Password',
			}
		}
	],

	agreements: {
		agreementFields: [{
			required: false,
			textNode: () => <Text style={{color: '#fff'}}>{'Remember me'}</Text>,
			id: 'rememberMe'
		}]
	},
};
