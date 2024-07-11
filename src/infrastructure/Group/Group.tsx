import React, { ReactNode } from 'react';
import { Pressable, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { CustomFontText } from '../CustomFontText/CustomFontText';
import { styles } from './styles';

interface GroupIcon { 
	title: string;
	SvgIcon?: ReactNode;
	optionalStyles?: {
		container?: StyleProp<ViewStyle>;
		title?: StyleProp<TextStyle>;
	}
}
export const Group = ({ title , SvgIcon, optionalStyles }: GroupIcon) => {
	return (
		<Pressable style={[styles.container, optionalStyles?.container]}>
			{ SvgIcon && SvgIcon }
			<CustomFontText style={[styles.title, optionalStyles?.title]}>
				{ title }
			</CustomFontText>
		</Pressable>
	);
};