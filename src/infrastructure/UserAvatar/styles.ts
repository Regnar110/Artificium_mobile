import { StyleSheet } from 'react-native';
import { COLORS } from '../enums';

export const styles = StyleSheet.create({
	avatarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8
	},
	
	avatarIMGContainer: {
		width: 30,
		height: 30
	},

	imageBg: {
		width: '100%',
		height: '100%',
		position: 'relative'
	},

	avatarStatusDot: {
		position:'absolute',
		top: 0,
		right: -5,
		width: 15,
		height: 15,
		backgroundColor: COLORS.ELECTRIC_GREEN_600,
		borderRadius: 100,
		borderWidth: 3,
		borderColor: COLORS.NOBLE_700
	},

	avatarName: {
		fontSize: 16,
		color: COLORS.HEISENBERG_500,
		fontWeight: 'medium'
	}
});