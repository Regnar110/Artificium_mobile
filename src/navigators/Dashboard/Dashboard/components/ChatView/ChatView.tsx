import React from 'react';
import ChatInput from './components/ChatInput/ChatInput';
import { View } from 'react-native';
import ChatWindow from './components/ChatWindow/ChatWindow';
import ChatHeader from './components/ChatHeader/ChatHeader';


const ChatView = () => {
	return (
		<View style={{ flex: 1, width: '95%', paddingVertical: 8}}>
			<ChatHeader />
			<ChatWindow />
			<ChatInput />			
		</View>
	);
};

export default ChatView;