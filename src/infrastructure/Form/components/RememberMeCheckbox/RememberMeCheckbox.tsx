import React from 'react';
import CustomCheckbox from '../../../CustomCheckbox/CustomCheckbox';
import { Text, View } from 'react-native';
import { styles } from './styles';

const RememberMeCheckbox = () => {
	return (
		<View style={styles.rememberContainer}>
			<CustomCheckbox />
			<Text style={styles.text}>Remember me</Text>
		</View>
	);
};

export default RememberMeCheckbox;
