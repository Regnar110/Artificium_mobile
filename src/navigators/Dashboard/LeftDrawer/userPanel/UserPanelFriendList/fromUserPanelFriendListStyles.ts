import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../infrastructure/enums';

export const optionalStyles = StyleSheet.create({
	avatarContainer: {
		marginVertical: 8
	},

	avatarName: {
		fontSize: 16,
		color: COLORS.NOBLE_100,
		fontWeight: 'medium'
	}
});