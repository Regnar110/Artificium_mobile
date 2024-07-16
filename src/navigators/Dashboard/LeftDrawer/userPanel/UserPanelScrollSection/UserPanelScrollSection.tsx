import React, { ReactNode } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { SectionHeader } from '../SectionHeader/SectionHeader';

interface UserPanelScrollSectionInterface {
	children: ReactNode;
	header: string,
}
export const UserPanelScrollSection = ({ children, header }: UserPanelScrollSectionInterface) => {
	return (
		<View style={styles.container}>
			<SectionHeader>{header}</SectionHeader>
			<ScrollView style={styles.scrollContainer}>
				{ children }
			</ScrollView>
		</View>
	);
};