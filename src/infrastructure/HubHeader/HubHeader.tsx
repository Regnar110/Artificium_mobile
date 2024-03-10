import React from 'react';
import { Pressable, Text } from 'react-native';
import Logo from '../../public/svg/greenlogox1.svg';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const HubHeader = () => {
	const { name } = useRoute();
	const navigation = useNavigation();
	const linkText = name === 'signin' ? 'Register' : 'Log in';
	const linkRedirector = name === 'signin' ? 'register' : 'signin';

	return (
		<Pressable onPress={() => navigation.navigate(linkRedirector as never)} style={styles.headerContainer}>
			<Logo width={20} height={20} />
			<Text style={styles.headerLinkText}>{linkText}</Text>
		</Pressable>
	);
};

export default HubHeader;

