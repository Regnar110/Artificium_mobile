import { StyleSheet } from 'react-native';
import { COLORS } from '../enums';

export const styles = StyleSheet.create({

	container: {
		width: 18,
		height: 18,
		borderWidth: 1,
		borderRadius: 2,
		borderColor: COLORS.NOBLE_100,
		marginHorizontal: 5
	},

	iconContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	checked: {
		backgroundColor: COLORS.NOBLE_100,
	}
});