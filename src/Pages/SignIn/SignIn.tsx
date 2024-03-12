import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { COLORS } from '../../infrastructure/enums';
import Letter from '../../public/svg/letter.svg';
import Logo from '../../public/svg/logo.svg';
import Google from '../../public/svg/Google.svg';
import Apple from '../../public/svg/Apple.svg';
import Form from '../../infrastructure/Form/Form';
import TemplateContainer from '../../infrastructure/TemplateContainer/TemplateContainer';
import { useNavigation } from '@react-navigation/native';
import Unlock from '../../public/svg/unlock.svg';

const SignIn = () => {
	const navigation = useNavigation();

	const [ fontsLoaded ] = useFonts({
		'font-bold': require('../../assets/fonts/PlusJakartaSans-Bold.ttf')
	});

	useEffect(() => {
		navigation.setOptions({
			title: 'Sign In',
			tabBarIcon: () => <Unlock width={25} height={25} />,
		});
	}, []);

	return fontsLoaded && (
		<TemplateContainer>
			<View style={styles.container}>
				<Logo width={200} height={20} />
					
				<View style={styles.innerContainer}>
					<View>
						<Text style={{ color: '#fff', fontFamily: 'font-bold', fontSize: 24}}>
							{'Let\'s get'}
							<Text style={styles.colorizedPhrase}> creative!</Text>
						</Text>
						<Text style={styles.headerDescription}>Log in to Artificium to start creating magic</Text>     
					</View>
					<Form
						onSubmitCallback={(formData) => console.log(formData)}
						submitButtonText='Log in'
						fieldLiveHints
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
								id:'password',
								iconRenderer: () => <Letter width={20} height={20} />,
								patternError: 'Invalid password',
								fieldSpecificProps: {
									secureTextEntry: true,
									placeholder:'Password',
								}
							}
						]}
						rememberMeCheckbox
						forgotPasswordRedirect
					/>
					<View style={styles.lineBreak}>
						<View style={styles.line} />
						<Text style={styles.breakLineText}>or continue with</Text>
					</View>
					<View style={styles.signInProviders}>
						<View style={styles.customButtonContainer2}>
							<Pressable style={({pressed})=> pressed ? [styles.customButton, styles.customButtonPressed] : [styles.customButton]}>
								<Google width={25} height={25} />
								<Text style={styles.customButtonText2}>Google Account</Text>
							</Pressable>
						</View>
						<View style={styles.customButtonContainer2}>
							<Pressable style={({pressed})=> pressed ? [styles.customButton, styles.customButtonPressed] : [styles.customButton]}>
								<Apple width={25} height={25} />
								<Text style={styles.customButtonText2}>Apple Account</Text>
							</Pressable>
						</View>
					</View>
				</View>				
			</View>			
		</TemplateContainer>

	);
};

export default SignIn;

const styles = StyleSheet.create({

	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 60,
	},

	
	innerContainer: {
		alignItems: 'flex-start',
		width: '90%',
		gap:50
	},
	
	colorizedPhrase: {
		color: COLORS.NOBLE_400
	},

	headerDescription: {
		color: COLORS.NOBLE_300,
	},

	form: {
		width: '100%',
		gap: 35,
	},

	formInputs: {
		gap: 15,
	},

	inputWrapper: {
		height: 40,
		paddingHorizontal: 16,
		paddingVertical: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderWidth: 1,
		borderRadius: 4,
		borderColor: COLORS.NOBLE_500,
	},

	input: {
		color:COLORS.NOBLE_200,
		flex: 1,
		height: 40,
		paddingHorizontal: 16,
		borderWidth: 1,
		borderColor: 'transparent',
		fontSize: 14,
	},

	subFormWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	checkboxUnchecked: {
		borderRadius: 3,
		borderColor: COLORS.NOBLE_500
	},

	checkBoxChecked: {
		borderRadius: 3,
		borderColor: COLORS.NOBLE_400
	},

	checkboxIconStyle: {
		borderRadius: 3
	},

	textLink: {
		color: COLORS.NOBLE_400
	},

	customButtonContainer: {
		backgroundColor: COLORS.NOBLE_400,
	},

	customButton: {
		flexDirection: 'row',
		width: '100%',
		paddingVertical: 8,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		color: COLORS.NOBLE_900
	},

	customButtonText: {
		fontWeight: '600'
	},

	customButtonPressed: {
		backgroundColor: '#7bd651',
		opacity: .4
	},

	lineBreak: {
		width: '100%',
		position: 'relative',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	line: {
		position: 'absolute',
		width: '100%',
		backgroundColor: COLORS.NOBLE_500,
		height: 2.5,
		top: '55%',
		zIndex: 0
	},

	breakLineText: {
		color: COLORS.NOBLE_400,
		backgroundColor: '#131619',
		paddingHorizontal: 12
	},

	signInProviders: {
		width: '100%', 
		flexDirection: 'row',
		gap: 15,
	},

	customButtonContainer2: {
		flex: 1,
		backgroundColor: COLORS.NOBLE_600,
		justifyContent: 'center',
		alignItems: 'center'
	},

	customButtonText2: {
		color: COLORS.NOBLE_400,
		fontWeight: '600',
		marginHorizontal: 12
	}
});
