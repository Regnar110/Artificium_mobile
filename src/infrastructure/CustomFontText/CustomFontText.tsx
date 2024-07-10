import { useFonts } from 'expo-font';
import React, { ReactNode } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { JAKARTA_FONTS } from '../utils/fontsEnum';


interface CustomFontTextInterface {
	children: ReactNode,
	fontName?: keyof typeof JAKARTA_FONTS,
	style:  StyleProp<TextStyle>
}
export const CustomFontText = ({ children, fontName = 'PlusJakartaSans-Medium', style }: CustomFontTextInterface) => {
	useFonts(JAKARTA_FONTS);

	return (
		<Text style={[style, { fontFamily: fontName }]}>
			{ children }
		</Text>
	);
};