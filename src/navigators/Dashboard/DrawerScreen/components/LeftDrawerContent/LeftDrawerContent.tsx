import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { UserPanelFooter } from '../../../LeftDrawer/userPanel/UserPanelFooter/UserPanelFooter';
import { UserPanelFriendList } from '../../../LeftDrawer/userPanel/UserPanelFriendList/UserPanelFriendList';
import { UserPanelGroupList } from '../../../LeftDrawer/userPanel/UserPanelGroupsList/UserPanelGroupList';
import { UserPanelGeneralSection } from '../../../LeftDrawer/userPanel/UserPanelGeneralSection/UserPanelGeneralSection';
 
const LeftDrawerContent = () => {
	return (
		<>
			<View style={styles.leftDrawerContentContainer}>
				<UserPanelGeneralSection />
				<UserPanelFriendList />
				<UserPanelGroupList />
			</View>
			<UserPanelFooter />
		</>
	);
};

export default LeftDrawerContent;