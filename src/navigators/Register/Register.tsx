import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../public/svg/logo.svg';
import Form from '../../infrastructure/Form/Form';
import Person from '../../public/svg/person.svg';
import Lock from '../../public/svg/lock.svg';
import Letter from '../../public/svg/letter.svg';
import { COLORS } from '../../infrastructure/enums';
const Register = () => {
	return (
		<View style={styles.container}>
			<Logo width={200} height={10} />
			<View style={styles.innerContainer}>
				<Text style={styles.header}>Connect with your team and bring your creative ideas to life.</Text>
				<Form
					termsAgreement
					fieldLiveHints={true}
					hints={
						[
							{
								id: 'e-mail',
								message: 'Remember to enter the correct email address. This will make it easier for us to contact you'
							},
							{
								id: 'password',
								message: 'Password should be longer than 8 characters and contain one big letter and special mark'
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
							id:'e-mail',
							iconRenderer: () => <Letter width={20} height={20} />,
							patternError: 'Invalid e-mail address',
							fieldSpecificProps: {
								placeholder: 'E-mail',
								inputMode: 'email',
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
