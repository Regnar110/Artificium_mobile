import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../../../../../../infrastructure/enums';
import ChatMessage from './components/ChatMessage';

const ChatWindow = () => {
	return (
		<ScrollView style={{ flex:1, flexDirection:'column', marginBottom: 16 }}>
			<ChatMessage />
			<ChatMessage />
			<ChatMessage />
			<ChatMessage />
			<ChatMessage />
			<ChatMessage />
			<ChatMessage />
			<ChatMessage />
			<ChatMessage />
			<ChatMessage />
			<ChatMessage />
		</ScrollView>
	);
};

export default ChatWindow;