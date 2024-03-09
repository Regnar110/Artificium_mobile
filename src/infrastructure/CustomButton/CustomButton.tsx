import React, { useContext } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './styles';
import { FormContext } from '../Form/store/context/FormContexts';

interface CustomButtonType {
	callback: () => void;
}

const CustomButton = ({ callback }:CustomButtonType) => {
	const { submitButtonText } = useContext(FormContext);
	return (
		<View style={styles.customButtonContainer}>
			<Pressable onPress={callback} style={({pressed})=> pressed ? [styles.customButton, styles.customButtonPressed] : [styles.customButton]}>
				<Text style={styles.customButtonText}>{ submitButtonText }</Text>
			</Pressable>
		</View>
	);
};

export default CustomButton;
