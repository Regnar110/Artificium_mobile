import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../../infrastructure/enums';

export const userPanelCustomButtonOptionalStyles = StyleSheet.create({
	customButtonContainer: {
		backgroundColor: 'transparent'
	},

	customButton: {
		flexDirection: 'row-reverse',
		justifyContent: 'flex-end',
		paddingVertical: 0,
		gap: 8,
		color: COLORS.NOBLE_400,
	},

	customButtonPressed: {
		backgroundColor: 'transparent'
	},

	customButtonText: {
		fontSize: 14,
		color: COLORS.NOBLE_400,
	}
});