import React from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../../infrastructure/enums';
import Person from '../../../public/svg/person.svg';
import Lock from '../../../public/svg/lock.svg';
import Letter from '../../../public/svg/letter.svg';
import { FormConfigInterface } from '../../../infrastructure/Form/store/redux/models/form.model';


export enum REGISTER_FORM_CONSTANTS {
	FORM_ID = 'registerForm',
	SUBMIT_BUTTON_TEXT = 'Register'
}

export const RegisterForm: FormConfigInterface = {
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
				maxLength: 320,
			}
		},
		{
			id:'firstname',
			iconRenderer: () => <Person width={20} height={20} />,
			patternError: 'Invalid field value',
			fieldSpecificProps: {
				placeholder: 'First name',
				inputMode: 'text',
				maxLength: 80,
			}
		},
		{
			id:'lastname',
			iconRenderer: () => <Person width={20} height={20} />,
			patternError: 'Invalid field value',
			fieldSpecificProps: {
				inputMode: 'text',
				placeholder:'Last name',
				maxLength: 80
			}
		},
		{
			id:'password',
			iconRenderer: () => <Lock width={20} height={20} />,
			patternError: 'Invalid password',
			fieldSpecificProps: {
				secureTextEntry: true,
				placeholder:'Password',
			}
		},
		{
			id:'repeatpassword',
			iconRenderer: () => <Lock width={20} height={20} />,
			patternError: 'Invalid password',
			fieldSpecificProps: {
				secureTextEntry: true,
				placeholder:'Repeat password',
			}
		}
	],

	agreements: {
		selectAllField: {
			textNode: () => <Text style={{color: COLORS.NOBLE_100}}>{'Select all'}</Text>,
		},
		agreementFields:[
			{
				id: 'terms',
				required: true,
				textNode: () => <Text style={{ color: COLORS.NOBLE_100}}>{'I agree with ' }<Text style={{color: COLORS.NOBLE_400, fontWeight: '700'}}>{'Terms and conditions'}</Text></Text>,
			},
			{
				id: 'cookies',
				required: false,
				textNode: () => <Text style={{color: COLORS.NOBLE_100}}>{'I agree to saving cookies'}</Text>
			}
		]
	},

	hints: [
		{
			id: 'email',
			message: 'Remember to enter the correct email address. This will make it easier for us to contact you',
		},
		{
			id: 'password',
			message: 'Password should be longer than 8 characters and contain one big letter, one number, and special mark'
		},
		{
			id: 'repeatpassword',
			message: 'This field should be equal to password field'
		}
	],
};
