import React from 'react';
import { View, Text } from 'react-native';

const LeftDrawerContent = (props) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>This is the left drawer</Text>
		</View>
	);
};

export default LeftDrawerContent;