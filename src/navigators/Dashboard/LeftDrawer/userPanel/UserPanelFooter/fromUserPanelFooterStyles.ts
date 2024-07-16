import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../infrastructure/enums';

export const fromUserPanelFooterStyles = StyleSheet.create({
	customButtonContainer: {
		backgroundColor: 'transparent',
		width: 25,
	},

	customButton: {
		flexDirection: 'row-reverse',
		justifyContent: 'flex-end',
		gap: 8,
		paddingVertical: 0,
	},

	customButtonText: {
		fontSize: 16,
		color: COLORS.NOBLE_100,
	},

	customButtonPressed: {
		backgroundColor: COLORS.NOBLE_800
	}

});