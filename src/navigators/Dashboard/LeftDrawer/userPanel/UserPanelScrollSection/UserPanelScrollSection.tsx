import React, { ReactNode } from 'react';
import { View, ScrollView } from 'react-native';
import { CustomFontText } from '../../../../../infrastructure/CustomFontText/CustomFontText';
import { styles } from './styles';

interface UserPanelScrollSectionInterface {
	children: ReactNode;
	header: string,
}
export const UserPanelScrollSection = ({ children, header }: UserPanelScrollSectionInterface) => {
	return (
		<View style={styles.container}>
			<CustomFontText fontName='PlusJakartaSans-SemiBold' style={styles.sectionHeader}>{header}</CustomFontText>
			<ScrollView style={styles.scrollContainer}>
				{ children }
			</ScrollView>
		</View>
	);
};