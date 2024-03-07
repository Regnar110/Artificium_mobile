import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './styles';

interface CustomButtonType {
	callback: () => void;
}

const CustomButton = ({ callback }:CustomButtonType) => {
	return (
		<View style={styles.customButtonContainer}>
			<Pressable onPress={callback} style={({pressed})=> pressed ? [styles.customButton, styles.customButtonPressed] : [styles.customButton]}>
				<Text style={styles.customButtonText}>Log in</Text>
			</Pressable>
		</View>
	);
};

export default CustomButton;
