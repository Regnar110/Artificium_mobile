import { StyleSheet } from 'react-native';
import { COLORS } from '../../infrastructure/enums';

export const styles = StyleSheet.create({

	container: {
		position: 'relative',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 60,
	},
	
	innerContainer: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '90%',
		gap:50
	},

	header: {
		color: COLORS.NOBLE_100,
		fontSize: 24
	},

	loadingOverlay: {
		opacity: .8,
		backgroundColor: COLORS.NOBLE_700,
		position: 'absolute',
		justifyContent: 'center',
		width: '101%',
		height: '101%'
	}
});
