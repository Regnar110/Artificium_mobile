import React from 'react';
import SignIn from './navigators/SignIn/SignIn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Register from './navigators/Register/Register';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import AppViewWrapper from './infrastructure/AppViewWrapper/AppViewWrapper';

export default function App() {
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar animated={true} backgroundColor="#fff" />
			<KeyboardAvoidingView style={{flex:1,}} contentContainerStyle={{flex: 1}}>
				<ScrollView style={{flex:1}}>
					<AppViewWrapper>
						<SignIn />   
						{/* <Register />							 */}
					</AppViewWrapper>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
		
	);
}

