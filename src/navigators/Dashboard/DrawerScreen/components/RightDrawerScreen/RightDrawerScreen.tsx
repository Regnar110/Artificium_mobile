import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LeftDrawerScreen from '../LeftDrawerScreen/LeftDrawerScreen';
import RightDrawerContent from '../RightDrawerContent/RightDrawerContent';

const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
	return (
		<RightDrawer.Navigator
			id="RightDrawer"
			drawerContent={(props) => <RightDrawerContent {...props} />}
			screenOptions={{
				drawerPosition: 'right',
				headerShown: false,
			}}>
			<RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
		</RightDrawer.Navigator>
	);
};

export default RightDrawerScreen;