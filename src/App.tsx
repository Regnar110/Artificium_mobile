import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableMapSet } from 'immer';
import HubPage from './navigators/HubPage/HubPage';
import DashboardPage from './navigators/Dashboard/Dashboard';
import { store } from './store/dashboard/store';
import { Provider } from 'react-redux';

const withRedux = (Component: () => JSX.Element) => {
	const Renderer = () => (
		<Provider store={store}>
			<Component />
		</Provider>
	);
	return Renderer;
};

export default function App() {
	const Stack = createNativeStackNavigator();

	useEffect(() => {
		enableMapSet();
	});
	
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen options={{ headerShown: false }} name='hubpage' component={HubPage}/>
					<Stack.Screen options={{ headerShown: false }} name='dashboard' component={withRedux(DashboardPage)}/>
				</Stack.Navigator>
			</NavigationContainer>				
		</SafeAreaProvider>			
	
	);
}

