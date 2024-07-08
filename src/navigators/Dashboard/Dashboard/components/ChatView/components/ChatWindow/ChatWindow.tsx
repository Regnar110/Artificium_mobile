import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ChatMessage from './components/ChatMessage';
import { styles } from './styles';
const ChatWindow = () => {
	return (
		<ScrollView style={styles.container}>
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