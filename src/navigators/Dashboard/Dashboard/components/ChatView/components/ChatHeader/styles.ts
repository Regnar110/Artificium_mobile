import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../../../infrastructure/enums';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.NOBLE_800,
		borderRadius: 12,
		padding: 12,
		gap: 20
	},

	header: {
		fontSize: 18,
		color: COLORS.NOBLE_100,
		fontWeight: 'bold'
	},

	headerDescription: {
		fontSize: 12,
		color: COLORS.NOBLE_300
	},

	usersAvatars: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});