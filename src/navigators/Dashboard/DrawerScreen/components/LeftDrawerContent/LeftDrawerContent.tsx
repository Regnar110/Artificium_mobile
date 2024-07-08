import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { UserPanelHeader } from '../../../LeftDrawer/userPanel/UserPanelHeader/UserPanelHeader';
import { UserPanelFriendList } from '../../../LeftDrawer/userPanel/UserPanelHeader/UserPanelFriendList/UserPanelFriendList';
 
const LeftDrawerContent = () => {
	return (
		<View style={styles.leftDrawerContentContainer}>
			<UserPanelHeader />
			<UserPanelFriendList />
		</View>
	);
};

export default LeftDrawerContent;