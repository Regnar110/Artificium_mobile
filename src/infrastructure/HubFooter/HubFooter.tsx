import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const HubFooter = () => {
	return (
		<View style={styles.footer}>
			<Text style={styles.footerLink}>Artificium.app © 2024</Text>
			<Text style={styles.footerLink}>Privacy Policy</Text>
		</View>
	);
};

export default HubFooter;