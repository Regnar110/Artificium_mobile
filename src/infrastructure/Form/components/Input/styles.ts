import { StyleSheet } from 'react-native';
import { COLORS } from '../../../enums';

export const styles = StyleSheet.create({
	inputWrapper: {
		height: 40,
		paddingHorizontal: 16,
		paddingVertical: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderWidth: 1,
		borderRadius: 4,
		borderColor: COLORS.NOBLE_500,
	},

	input: {
		color:COLORS.NOBLE_200,
		flex: 1,
		height: 40,
		paddingHorizontal: 16,
		borderWidth: 1,
		borderColor: 'transparent',
		fontSize: 14,
	},

	inputLiveHint: {
		color: COLORS.SUNGLOW_500,
		fontSize: 12,
		paddingVertical: 4
	},
	
	inputFieldSubmitError: {
		color: COLORS.RED_POWER_600,
		fontSize: 12,
		paddingVertical: 4
	}
});