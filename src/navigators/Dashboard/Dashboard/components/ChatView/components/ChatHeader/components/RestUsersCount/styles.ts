import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../../../../../infrastructure/enums';

export const styles = StyleSheet.create({
	container: {
		width: 30,
		height: 30,
		borderRadius: 100,
		backgroundColor: COLORS.NOBLE_600,
		justifyContent: 'center',
		alignItems: 'center'
	},
	
	count: {
		color: COLORS.NOBLE_400
	}
});