import { StyleSheet } from 'react-native';
import { COLORS } from '../enums';

export const styles = StyleSheet.create({
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 12
	},

	footerLink: {
		color: COLORS.NOBLE_300
	}
});