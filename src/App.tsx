import React from 'react';
import SignIn from './navigators/SignIn/SignIn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Register from './navigators/Register/Register';
import { KeyboardAvoidingView } from 'react-native';
import AppViewWrapper from './infrastructure/AppViewWrapper/AppViewWrapper';
import HubFooter from './infrastructure/HubFooter/HubFooter';
import HubHeader from './infrastructure/HubHeader/HubHeader';

export default function App() {
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar animated={true} backgroundColor="#fff" />
			<KeyboardAvoidingView style={{ flex: 1,justifyContent: 'center', paddingHorizontal: 8}} behavior="padding" enabled   keyboardVerticalOffset={10}>
				<HubHeader linkText='Log in'/>
				<AppViewWrapper>
					{/* <SignIn />    */}
					<Register />							
				</AppViewWrapper>
				<HubFooter/>
			</KeyboardAvoidingView>
		</SafeAreaView>
		
	);
}

