import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../infrastructure/enums';

export const styles = StyleSheet.create({
	userPanelFooterContainer: {
		flexDirection: 'row',
		padding: 8,
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 60,
		width: '100%',
		backgroundColor: COLORS.NOBLE_600,
	},

	iconsContainer: {
		flexDirection: 'row',
	}
});