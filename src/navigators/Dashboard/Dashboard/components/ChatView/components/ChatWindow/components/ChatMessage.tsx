import React from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../../../../../../../../infrastructure/enums';
import UserAvatar from '../../../../../../../../infrastructure/UserAvatar/UserAvatar';

const ChatMessage = () => {
	return (
		<View style={{borderColor: COLORS.NOBLE_500, alignSelf: 'center', borderWidth: 1, borderRadius: 8, padding:16, marginVertical: 10}}>
			<UserAvatar/>
			<Text style={{ fontSize: 14, marginLeft: 39, color: COLORS.NOBLE_300}}>{'loremkjfksdjfsddjkfksjdsssssssssssssssssssssssssssssssssssssssssssssssssfkd'}</Text>
		</View>
		
	)
};

export default ChatMessage;