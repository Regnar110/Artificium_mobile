import React, { ReactNode } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './styles';

interface CustomButtonType {
	text?: string,
	callback: () => void;
	SvgIcon?: ReactNode
	optionalStyles?: {
		customButtonContainer?: unknown;
		customButton?: unknown;
		customButtonPressed?: unknown;
	}
}

const CustomButton = ({ text, callback, SvgIcon, optionalStyles }:CustomButtonType) => {
	return (
		<View style={[
			styles.customButtonContainer,
			optionalStyles?.customButtonContainer || null
		]}>
			<Pressable
				onPress={callback}
				style={({pressed})=> pressed ?
					[
						styles.customButton,
						styles.customButtonPressed,
						optionalStyles?.customButton || null,
						optionalStyles?.customButtonPressed || null
					] : [styles.customButton, optionalStyles?.customButton || null,]}>
				{text &&<Text style={styles.customButtonText}>{ text }</Text>}
				{SvgIcon && SvgIcon}
			</Pressable>
		</View>
	);
};

export default CustomButton;
