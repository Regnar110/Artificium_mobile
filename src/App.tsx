import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HubPage from './navigators/HubPage/HubPage';

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen options={{ headerShown: false}} name='hubpage' component={HubPage}/>
				</Stack.Navigator>
			</NavigationContainer>				
		</SafeAreaProvider>
				
	);
}

