import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface TextLinkType {
  text: string
}

const TextLink = ({ text }:TextLinkType) => {
	return (
		<View>
			<Text style={styles.textLink}>
				{ text }
			</Text>
		</View>
	);
};

export default TextLink;
