import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { UserPanelHeader } from '../../../LeftDrawer/userPanel/UserPanelHeader/UserPanelHeader';
import { UserPanelFriendList } from '../../../LeftDrawer/userPanel/UserPanelFriendList/UserPanelFriendList';
import { UserPanelGroupList } from '../../../LeftDrawer/userPanel/UserPanelGroupsList/UserPanelGroupList';
 
const LeftDrawerContent = () => {
	return (
		<View style={styles.leftDrawerContentContainer}>
			<UserPanelHeader />
			<UserPanelFriendList />
			<UserPanelGroupList />
		</View>
	);
};

export default LeftDrawerContent;