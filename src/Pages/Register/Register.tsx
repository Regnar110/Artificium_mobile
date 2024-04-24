import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../public/svg/logo.svg';
import Form from '../../infrastructure/Form/Form';
import Person from '../../public/svg/person.svg';
import Lock from '../../public/svg/lock.svg';
import Letter from '../../public/svg/letter.svg';
import { COLORS } from '../../infrastructure/enums';
import TemplateContainer from '../../infrastructure/TemplateContainer/TemplateContainer';
import { OnSubmitCallback } from '../../infrastructure/Form/store/redux/models/form.model';
import { RegisterRequestBody } from './register.model';

const Register = () => {

	const dummyRequest:OnSubmitCallback = async (formData, formValidationResult, isValid, agreementsValidatedData) => {
		if (!agreementsValidatedData || !isValid) return;

		const mixedFormAndAgreements:RegisterRequestBody = { ...formData, agreementFields: agreementsValidatedData };
		console.log(mixedFormAndAgreements)
		await fetch('http://192.168.0.171:3000/register', {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'no-cors', // no-cors, *cors, same-origin
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(mixedFormAndAgreements), // body data type must match "Content-Type" header
		});
	};


	return (
		<TemplateContainer>
			<View style={styles.container}>
				<Logo width={200} height={10} />
				<View style={styles.innerContainer}>
					<Text style={styles.header}>Connect with your team and bring your creative ideas to life.</Text>
					<Form
						formId={'registerForm'}
						agreements={{
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
						}}
						onSubmitCallback={dummyRequest}
						fieldLiveHints={true}
						hints={
							[
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
							]}
						submitButtonText='Register'
						sharedFieldProps={{
							selectionColor: '#fff',
							placeholderTextColor:COLORS.NOBLE_300
						}}

						fields={[
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
						]}
					/>
				</View>					
			</View>			
		</TemplateContainer>
	);
};

export default Register;

const styles = StyleSheet.create({

	container: {
		position: 'relative',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 60,
	},
	
	innerContainer: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '90%',
		gap:50
	},

	header: {
		color: COLORS.NOBLE_100,
		fontSize: 24
	}
});
