import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../../infrastructure/enums';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		gap: 8,
	},

	sectionHeader: {
		color: COLORS.NOBLE_400,
		fontSize: 16,
		fontWeight: 'medium',
		marginBottom: 2
	},

	friendListScrollContainer: {
		maxHeight: '30%',
		marginBottom: 8,
		rowGap: 24
	}
});