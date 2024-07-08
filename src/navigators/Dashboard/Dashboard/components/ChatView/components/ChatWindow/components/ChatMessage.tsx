import React from 'react';
import { Text, View } from 'react-native';
import UserAvatar from '../../../../../../../../infrastructure/UserAvatar/UserAvatar';
import { styles } from './styles';

const ChatMessage = () => {
	return (
		<View style={styles.messageContainer}>
			<UserAvatar displayName='Isabela'/>
			<Text style={styles.message}>{'loremkjfksdjfsddjkfksjdsssssssssssssssssssssssssssssssssssssssssssssssssfkd'}</Text>
		</View>		
	);
};


export default ChatMessage;