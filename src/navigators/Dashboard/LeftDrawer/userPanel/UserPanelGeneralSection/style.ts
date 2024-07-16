import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../infrastructure/enums';

export const styles = StyleSheet.create({
	container: {
		gap: 24
	},

	optionContainer: {
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center'
	},

	optionText: {
		fontSize: 18,
		color: COLORS.NOBLE_100
	},

	sectionHeader: {
		color: COLORS.NOBLE_400,
		fontSize: 16,
		fontWeight: 'medium',
		marginBottom: 2
	}
});