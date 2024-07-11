import React, { ReactNode } from 'react';
import { View, Pressable } from 'react-native';
import { styles } from './styles';
import { CustomFontText } from '../CustomFontText/CustomFontText';

interface CustomButtonType {
	text?: string,
	callback: () => void;
	SvgIcon?: ReactNode
	optionalStyles?: {
		customButtonContainer?: unknown;
		customButton?: unknown;
		customButtonPressed?: unknown;
		customButtonText?: unknown;
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
				{text &&<CustomFontText style={[styles.customButtonText, optionalStyles?.customButtonText || null]}>{ text }</CustomFontText>}
				{SvgIcon && SvgIcon}
			</Pressable>
		</View>
	);
};

export default CustomButton;
