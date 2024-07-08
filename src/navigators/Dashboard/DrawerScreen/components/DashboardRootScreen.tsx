import React from 'react';
import { View } from 'react-native';
import ChatView from '../../Dashboard/components/ChatView/ChatView';
import { COLORS } from '../../../../infrastructure/enums';

const DashboardRootScreen = () => {
	return (
		<View style={{ backgroundColor: COLORS.NOBLE_600 ,flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			{/* <Button
				onPress={() => getParent('LeftDrawer').openDrawer()}
				title="Open left drawer"
			/>
			<Button
				onPress={() => getParent('RightDrawer').openDrawer()}
				title="Open right drawer"
			/> */}
			<ChatView />
		</View>		
	);

};

export default DashboardRootScreen;