import React, { useEffect } from 'react';
import Register from '../../Pages/Register/Register';
import SignIn from '../../Pages/SignIn/SignIn';
import { COLORS } from '../../infrastructure/enums';
import { createMaterialBottomTabNavigator } from 'react-native-paper/lib/typescript/react-navigation';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';


const HubPage = () => {
	const Tab = createMaterialBottomTabNavigator();
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({ 
			headerShown: false
		});
	}, []);

	return (
		<Tab.Navigator
			shifting={true}
			sceneAnimationEnabled={true}
			sceneAnimationType='shifting'
			barStyle={styles.barStyle}
			activeColor={COLORS.NOBLE_400} inactiveColor={COLORS.NOBLE_300}
			activeIndicatorStyle={styles.activeIndicatorStyle}
		>
			<Tab.Screen name='signin' component={SignIn} />
			<Tab.Screen name='register' component={Register} />
		</Tab.Navigator>			
	);
};

export default HubPage;