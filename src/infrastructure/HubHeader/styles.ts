import { StyleSheet } from 'react-native';
import { COLORS } from '../enums';

export const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 12
	},

	headerLinkText: {
		color: COLORS.NOBLE_400
	}
});