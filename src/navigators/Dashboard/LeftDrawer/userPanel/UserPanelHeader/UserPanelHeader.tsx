import React from 'react';
import UserAvatar from '../../../../../infrastructure/UserAvatar/UserAvatar';
import { View } from 'react-native';
import { styles } from './styles';

export const UserPanelHeader = () => {
	return (
		<View style={styles.userPanelHeaderContainer}>
			<UserAvatar size='large' displayName='Mateusz Wrycza'/>
		</View>
	);
};