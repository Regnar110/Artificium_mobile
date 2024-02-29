import React from 'react';
import SignIn from './navigators/SignIn/SignIn';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1}}>
			<SignIn />   
		</SafeAreaView>
		
	);
}

