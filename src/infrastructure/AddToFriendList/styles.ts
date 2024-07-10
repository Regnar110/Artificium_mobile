import { StyleSheet } from 'react-native';
import { COLORS } from '../enums';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 12
	},

	text: {
		fontSize: 14,
		color: COLORS.NOBLE_400,
	}
});