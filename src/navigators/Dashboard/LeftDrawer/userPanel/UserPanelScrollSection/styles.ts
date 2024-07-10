import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../infrastructure/enums';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		gap: 8,
		maxHeight: '50%'
	},

	sectionHeader: {
		color: COLORS.NOBLE_400,
		fontSize: 16,
		fontWeight: 'medium',
		marginBottom: 2
	},

	scrollContainer: {
		flexDirection: 'column',
		marginBottom: 8,
	}
});