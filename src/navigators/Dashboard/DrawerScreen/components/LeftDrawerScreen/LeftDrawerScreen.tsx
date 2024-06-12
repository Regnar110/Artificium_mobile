import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardRootScreen from '../DashboardRootScreen';
import RightDrawerContent from '../RightDrawerContent/RightDrawerContent';



const LeftDrawer = createDrawerNavigator();
  
const LeftDrawerScreen = () => {
	return (
		<LeftDrawer.Navigator
			drawerContent={(props) => <RightDrawerContent {...props} />}
			id="LeftDrawer"
			screenOptions={{
				drawerPosition: 'left',
				headerShown: false,
			}}
		>
			<LeftDrawer.Screen name="Home" component={DashboardRootScreen} />
		</LeftDrawer.Navigator>
	);
};

export default LeftDrawerScreen;
  