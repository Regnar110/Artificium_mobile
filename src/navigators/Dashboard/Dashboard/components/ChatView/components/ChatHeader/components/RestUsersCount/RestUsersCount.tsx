import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const RestUsersCount = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.count}>{'+4'}</Text>
		</View>
	);
};