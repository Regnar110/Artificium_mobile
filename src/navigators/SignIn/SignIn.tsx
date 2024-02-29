import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useFonts } from 'expo-font';
import { COLORS } from '../../infrastructure/enums';
import Greenlogox1 from '../../public/svg/greenlogox1.svg';
import Letter from '../../public/svg/letter.svg';
const SignIn = () => {
	const [ fontsLoaded ] = useFonts({
		'font-bold': require('../../assets/fonts/PlusJakartaSans-Bold.ttf')
	});

	return fontsLoaded && (
		<View style={styles.container}>
			<View style={styles.logo}>
				<Greenlogox1 width={30} height={30} />
			</View>
			<View style={styles.innerContainer}>
				<View>
					<Text style={{ color: '#fff', fontFamily: 'font-bold', fontSize: 24}}>
						{'Let\'s get'}
						<Text> creative!</Text>
					</Text>
					<Text style={styles.headerDescription}>Log in to Artificium to start creating magic</Text>     
				</View>
				<View style={styles.form}>
					<View style={styles.inputWrapper}>
						<Letter width={15} height={15} />
						<TextInput placeholder='E-mail'placeholderTextColor={COLORS.NOBLE_300} style={styles.input}/>
					</View>
					<View style={styles.inputWrapper}>
						<Letter width={15} height={15} />
						<TextInput secureTextEntry={true} placeholder='Password'placeholderTextColor={COLORS.NOBLE_300} style={styles.input}/>
					</View>
					<View>
						<BouncyCheckbox 
						size={20}
							text='Remember me'
							textStyle={{fontSize: 12}}
							fillColor={COLORS.NOBLE_400}
							unfillColor={COLORS.NOBLE_600}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default SignIn;

const styles = StyleSheet.create({

	container: {
		position: 'relative',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	innerContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: 300,
		gap:50
	},
	
	logo: {
		flex: 1,
		position: 'absolute',
		left: 50,
		top: 50
	},


	headerDescription: {
		color: COLORS.NOBLE_300,
	},

	form: {
		gap: 15
	},

	inputWrapper: {
		height: 40,
		width: '100%',
		paddingHorizontal: 4,
		paddingVertical: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderWidth: 1,
		borderRadius: 4,
		borderColor: COLORS.NOBLE_400,
	},

	input: {
		color: '#fff',
		flex: 1,
		height: 40,
		paddingHorizontal: 8,
		borderWidth: 1,
		borderColor: 'transparent'
	},
});
