import React, { useEffect } from 'react';
import Register from '../../Pages/Register/Register';
import SignIn from '../../Pages/SignIn/SignIn';
import { COLORS } from '../../infrastructure/enums';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import AddPerson from '../../public/svg/addperson.svg';
import Unlock from '../../public/svg/unlock.svg';
import { useCheckSessionOnNavigator } from '../../infrastructure/hooks/useCheckSessionOnNavigator/useCheckSessionOnNavigator';

const HubPage = () => {
	useCheckSessionOnNavigator();
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
			<Tab.Screen name='signin' component={SignIn} options={{
				title: 'Sign In',
				tabBarIcon: () => <Unlock width={25} height={25} />,
			}}/>
			<Tab.Screen name='register' component={Register} options={
				{ 
					title: 'Register',
					tabBarIcon: () => <AddPerson width={25} height={25} />,
				}
			}
			/>
		</Tab.Navigator>			
	);
};

export default HubPage;