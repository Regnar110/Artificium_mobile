import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../../../infrastructure/enums';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.NOBLE_800,
		borderRadius: 12,
		overflow: 'hidden',
		width: '100%',
		flexDirection: 'row',
	},

	chatInput: {
		flex: 1,
		paddingHorizontal: 16,
		height: 45,
		color: COLORS.NOBLE_100
	}
});

export const customButtonOptionalStyles = StyleSheet.create({
	customButtonContainer: {
		padding: 8,
		height: 45,
		backgroundColor: COLORS.NOBLE_800,
	},

	customButton: {
		padding: 8,
		backgroundColor: COLORS.NOBLE_500,
		width: 'auto'
	}
});