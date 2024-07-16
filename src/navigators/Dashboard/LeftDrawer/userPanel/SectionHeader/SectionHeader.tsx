import React, { ReactNode } from 'react';
import { CustomFontText } from '../../../../../infrastructure/CustomFontText/CustomFontText';
import { styles } from './styles';

interface SectionHeaderInterface {
	children: ReactNode
}

export const SectionHeader = ({ children }: SectionHeaderInterface) => {
	return (
		<CustomFontText fontName='PlusJakartaSans-SemiBold' style={styles.sectionHeader}>
			{children}
		</CustomFontText>
	);
};