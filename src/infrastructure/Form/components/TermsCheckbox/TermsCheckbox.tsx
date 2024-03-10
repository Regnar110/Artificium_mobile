import React from 'react';
import { View, Text } from 'react-native';
import CustomCheckbox from '../../../CustomCheckbox/CustomCheckbox';
import { styles } from './styles';

const TermsCheckbox = () => {
	return (
		<View style={styles.termsContainer}>
			<CustomCheckbox />
			<Text style={styles.text}>
			I agree with <Text style={styles.colorizedText}>Terms and conditions</Text>
			</Text>
		</View>
	);
};

export default TermsCheckbox;
