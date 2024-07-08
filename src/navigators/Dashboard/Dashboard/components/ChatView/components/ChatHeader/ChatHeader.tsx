import React from 'react';
import { Text, View } from 'react-native';
import UserAvatar from '../../../../../../../infrastructure/UserAvatar/UserAvatar';
import { styles } from './styles';
import { RestUsersCount } from './components/RestUsersCount/RestUsersCount';

const ChatHeader = () => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.header}>
					{'Orbital Oddysey'}
				</Text>
				<Text style={styles.headerDescription}>
					{'Marketing Campaign for a new TV series Launssssssssssssssssssch'}
				</Text>
			</View>
			<View style={styles.usersAvatars}>
				<UserAvatar />
				<UserAvatar />
				<UserAvatar />
				<UserAvatar />
				<UserAvatar />
				<RestUsersCount />
			</View>
		</View>
	);
};

export default ChatHeader;