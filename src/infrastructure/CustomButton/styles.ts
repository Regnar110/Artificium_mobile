import { StyleSheet } from 'react-native';
import { COLORS } from '../enums';

export const styles = StyleSheet.create({
	customButtonContainer: {
		backgroundColor: COLORS.NOBLE_400,
	},

	customButton: {
		flexDirection: 'row',
		width: '100%',
		paddingVertical: 8,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		color: COLORS.NOBLE_900
	},

	customButtonText: {
		fontWeight: '600'
	},

	customButtonPressed: {
		backgroundColor: '#7bd651',
		opacity: .4
	}
});