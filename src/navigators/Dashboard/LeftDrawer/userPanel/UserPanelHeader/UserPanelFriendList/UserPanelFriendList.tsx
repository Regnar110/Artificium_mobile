import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import UserAvatar from '../../../../../../infrastructure/UserAvatar/UserAvatar';
import { styles } from './styles';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export const UserPanelFriendList = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.sectionHeader}>{'FRIEND LIST'}</Text>
			<ScrollView style={styles.friendListScrollContainer}>
				<UserAvatar displayNameColor='NOBLE_100' displayName='Lara Croft'/>
				<UserAvatar displayNameColor='NOBLE_100' displayName='Lara Croft'/>
				<UserAvatar displayNameColor='NOBLE_100' displayName='Lara Croft'/>
				<UserAvatar displayNameColor='NOBLE_100' displayName='Lara Croft'/>
				<UserAvatar displayNameColor='NOBLE_100' displayName='Lara Croft'/>
				<UserAvatar displayNameColor='NOBLE_100' displayName='Lara Croft'/>
				<UserAvatar displayNameColor='NOBLE_100' displayName='Lara Croft'/>
				<UserAvatar displayNameColor='NOBLE_100' displayName='Lara Croft'/>
				<UserAvatar displayNameColor='NOBLE_100' displayName='Lara Croft'/>
			</ScrollView>			
		</View>

	);
};