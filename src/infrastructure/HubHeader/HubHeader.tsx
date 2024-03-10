import React from 'react';
import { Text, View } from 'react-native';
import Logo from '../../public/svg/greenlogox1.svg';
import { styles } from './styles';

interface HubHeaderType {
	linkText: string
}

const HubHeader = ({ linkText }:HubHeaderType) => {
	return (
		<View style={styles.headerContainer}>
			<Logo width={20} height={20} />
			<Text style={styles.headerLinkText}>{linkText}</Text>
		</View>
	);
};

export default HubHeader;

