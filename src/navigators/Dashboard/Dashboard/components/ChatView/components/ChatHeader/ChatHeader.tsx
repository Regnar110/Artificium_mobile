import React from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../../../../../../../infrastructure/enums';
import UserAvatar from '../../../../../../../infrastructure/UserAvatar/UserAvatar';

const ChatHeader = () => {
	return (
		<View style={{ backgroundColor: COLORS.NOBLE_800, borderRadius: 12, padding: 12, gap: 20 }}>
			<View>
				<Text style={{ fontSize: 18, color: COLORS.NOBLE_100, fontWeight: 'bold'}}>
					{'Orbital Oddysey'}
				</Text>
				<Text style={{ fontSize: 12, color: COLORS.NOBLE_300}}>
					{'Marketing Campaign for a new TV series Launssssssssssssssssssch'}
				</Text>
			</View>
			<View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
				<UserAvatar displayName={false}/>
				<UserAvatar displayName={false}/>
				<UserAvatar displayName={false}/>
				<UserAvatar displayName={false}/>
				<UserAvatar displayName={false}/>
			</View>
		</View>
	);
};

export default ChatHeader;