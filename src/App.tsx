import React from 'react';
import SignIn from './navigators/SignIn/SignIn';
import Register from './navigators/Register/Register';
import { NavigationContainer, cre } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

	const Tab = createMaterialBottomTabNavigator();
	const Stack = createNativeStackNavigator();

	const HubPage = () => {
		return (
			<Tab.Navigator barStyle={{backgroundColor: 'black'}}>
				<Tab.Screen  name='signin' component={SignIn} options={{title: 'Sign In'}}/>
				<Tab.Screen name='register' component={Register}/>
			</Tab.Navigator>			
		);
	};

	return (
		<SafeAreaProvider>
			<NavigationContainer >
				<Stack.Navigator screenOptions={{
					contentStyle: {
						backgroundColor: 'black',
						zIndex: 999
					}
				}}>
					<Stack.Screen name='hubpage' component={HubPage}/>
				</Stack.Navigator>

			</NavigationContainer>				
		</SafeAreaProvider>
				
	);
}

