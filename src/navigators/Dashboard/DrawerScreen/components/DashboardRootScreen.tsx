import React from 'react';
import { Button, View } from 'react-native';

const DashboardRootScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button
				onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
				title="Open left drawer"
			/>
			<Button
				onPress={() => navigation.getParent('RightDrawer').openDrawer()}
				title="Open right drawer"
			/>
		</View>		
	);

};

export default DashboardRootScreen;