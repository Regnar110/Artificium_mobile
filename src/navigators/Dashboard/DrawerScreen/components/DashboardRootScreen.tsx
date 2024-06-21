import React from 'react';
import { Button, View } from 'react-native';
import { useTypedNavigation } from '../../../../infrastructure/hooks/useTypedNavigation';
import ChatView from '../../Dashboard/components/ChatView/ChatView';

const DashboardRootScreen = () => {
	const { getParent } = useTypedNavigation();
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button
				onPress={() => getParent('LeftDrawer').openDrawer()}
				title="Open left drawer"
			/>
			<Button
				onPress={() => getParent('RightDrawer').openDrawer()}
				title="Open right drawer"
			/>
			<ChatView />
		</View>		
	);

};

export default DashboardRootScreen;