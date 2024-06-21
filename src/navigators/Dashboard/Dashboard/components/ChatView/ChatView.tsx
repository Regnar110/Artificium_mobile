import React from 'react';
import { useTypedNavigation } from '../../../../../infrastructure/hooks/useTypedNavigation';
import ChatInput from '../ChatInput/ChatInput';
import { View } from 'react-native';


const ChatView = () => {
	const { getParent } = useTypedNavigation();

	return (
		<View>
			<ChatInput />			
		</View>

	)
}

export default ChatView;